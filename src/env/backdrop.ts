import * as THREE from 'three';
import { mulberry32 } from '../bird/util';

// Out-of-focus forest. A sphere around the camera, coloured per view direction,
// so it parallaxes for free when the camera orbits. The same sphere is baked
// into the PMREM env map, so the iridescent feathers reflect the same green.

const vert = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}
`;

const frag = /* glsl */ `
precision highp float;
varying vec3 vDir;
uniform float uTime;
uniform float uEnv;
uniform float uMist;      // 1 when baking the env map: brighter top, no grain
uniform vec3 uBlobs[48];  // xyz dir
uniform vec2 uBlobR[48];  // radius, brightness
uniform float uBlobCos[48]; // cos(radius): outside it a disc adds nothing

float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
float noise(vec3 p) {
  vec3 i = floor(p); vec3 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  float n = mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
                mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
  return n;
}

void main() {
  vec3 d = normalize(vDir);
  // Large soft value structure: leaves and gaps, way out of focus.
  float n = noise(d * 2.2 + vec3(0.0, 0.0, uTime * 0.01)) * 0.6 + noise(d * 4.7 - 3.1) * 0.4;
  // (uMist: a cloud forest instead of a sunlit gap: cooler, wetter greens, and mist between the trees)
  vec3 deep = mix(vec3(0.050, 0.120, 0.055), vec3(0.035, 0.095, 0.075), uMist);
  vec3 mid  = mix(vec3(0.130, 0.320, 0.125), vec3(0.100, 0.265, 0.165), uMist);
  vec3 lite = mix(vec3(0.260, 0.480, 0.230), vec3(0.290, 0.470, 0.350), uMist);
  vec3 col = mix(deep, mid, smoothstep(0.25, 0.7, n));
  col = mix(col, lite, smoothstep(0.62, 0.9, n) * 0.6);
  // brighter canopy above, dark understory below
  float up = d.y;
  col *= mix(0.55, 1.15, smoothstep(-0.6, 0.7, up));
  // mist: pale bands drifting slowly across, thickest at eye level and thinning above and below
  float band = noise(vec3(d.x * 1.3 + uTime * 0.006, d.y * 5.0, d.z * 1.3)) * 0.65 + noise(d * 3.1 + vec3(uTime * 0.004, 0.0, 7.0)) * 0.35;
  float mist = uMist * smoothstep(0.38, 0.78, band) * (1.0 - smoothstep(0.0, 0.8, abs(up - 0.08)));
  col = mix(col, vec3(0.60, 0.69, 0.65), mist * 0.6);
  // Bokeh discs
  for (int i = 0; i < 48; i++) {
    vec3 b = uBlobs[i];
    float cd = dot(d, b);
    if (cd < uBlobCos[i]) continue;
    float r = uBlobR[i].x;
    float a = acos(clamp(cd, -1.0, 1.0));
    float disc = 1.0 - smoothstep(r * 0.82, r, a);
    float rim = smoothstep(r * 0.6, r * 0.95, a) * disc;
    col += (lite * 0.5 + vec3(0.06, 0.08, 0.0)) * uBlobR[i].y * (disc * 0.35 + rim * 0.25);
  }
  if (uEnv > 0.5) {
    col *= 1.0 + 1.6 * smoothstep(0.2, 1.0, up);       // sky through the canopy
    col += vec3(0.5, 0.55, 0.45) * pow(max(up, 0.0), 6.0);
    // the light a bird actually gets is greyer than the bokeh it sits in:
    // half the saturation, so the plumage keeps its own plum and bronze
    col = mix(vec3(dot(col, vec3(0.2126, 0.7152, 0.0722))), col, 0.45);
  } else {
    // a hair of grain so the gradients don't band
    col += (hash(vec3(gl_FragCoord.xy, uTime)) - 0.5) / 255.0;
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

// Drawn small, shown big. The forest is all soft shapes and costs four noises and 48 discs a
// pixel: at a quarter of the size each way it looks the same stretched over the picture (the
// softest disc edge is many of its texels wide, and the lens blurs it again after).
const SMALL = 4;
const showFrag = /* glsl */ `
precision highp float;
uniform sampler2D tSky;
uniform vec2 uInv; // 1 / the picture's size, device px
uniform float uTime;
float hash(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
void main() {
  vec3 col = texture2D(tSky, gl_FragCoord.xy * uInv).rgb;
  // a hair of grain so the gradients don't band (per pixel of the picture, not of the small one)
  col += (hash(vec3(gl_FragCoord.xy, uTime)) - 0.5) / 255.0;
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

/** mist: 0 = the mountain-gem's sunlit forest gap, 1 = a cloud forest (El Yunque) */
export function createBackdrop(mist = 0) {
  const rng = mulberry32(7);
  const blobs: THREE.Vector3[] = [];
  const blobR: THREE.Vector2[] = [];
  for (let i = 0; i < 48; i++) {
    // mostly behind the bird, as seen from the camera in front of it
    const az = (rng() - 0.5) * Math.PI * 2;
    const el = (rng() - 0.35) * 1.2;
    blobs.push(new THREE.Vector3(Math.sin(az) * Math.cos(el), Math.sin(el), -Math.cos(az) * Math.cos(el)).normalize());
    blobR.push(new THREE.Vector2(0.06 + rng() * 0.14, 0.15 + rng() * 0.6));
  }
  const material = new THREE.ShaderMaterial({
    vertexShader: vert,
    fragmentShader: frag,
    uniforms: {
      uTime: { value: 0 },
      uEnv: { value: 0 },
      uMist: { value: mist },
      uBlobs: { value: blobs },
      uBlobR: { value: blobR },
      uBlobCos: { value: blobR.map((v) => Math.cos(v.x)) },
    },
    side: THREE.BackSide,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(50, 64, 32), material);
  mesh.frustumCulled = false;
  // last among the opaques: it sits on the far plane, so early-z skips what the bird and twig cover
  mesh.renderOrder = 1000;

  const small = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, depthBuffer: false });
  const shown = new THREE.ShaderMaterial({
    vertexShader: vert,
    fragmentShader: showFrag,
    uniforms: { tSky: { value: small.texture }, uInv: { value: new THREE.Vector2(1, 1) }, uTime: material.uniforms.uTime },
    side: THREE.BackSide,
    depthWrite: false,
  });
  const size = new THREE.Vector2();
  return {
    mesh,
    material,
    /**
     * Before each picture: the forest, small, for this camera. From then on the sphere shows
     * that, stretched (until then it draws itself in full, as the env map's bake has it).
     */
    draw(renderer: THREE.WebGLRenderer, camera: THREE.Camera) {
      renderer.getDrawingBufferSize(size);
      const w = Math.ceil(size.x / SMALL);
      const h = Math.ceil(size.y / SMALL);
      if (small.width !== w || small.height !== h) small.setSize(w, h);
      shown.uniforms.uInv.value.set(1 / size.x, 1 / size.y);
      const prev = renderer.getRenderTarget();
      mesh.material = material;
      renderer.setRenderTarget(small);
      renderer.render(mesh, camera);
      renderer.setRenderTarget(prev);
      mesh.material = shown;
    },
  };
}
