import * as THREE from 'three';
import type { Pose } from '../pose';
import type { Rig } from '../rig';
import { clamp, lerp, rand, smoothstep } from '../util';
import { createWingBlur, type WingBlur } from '../wingBlur';
import type { HopLayer } from './hop';
import type { Layer, Mind } from './mind';
import type { RuffleLayer } from './ruffle';
import type { TailLayer } from './tail';

// Gone in a blink. The bird gathers itself (a crouch, the wings coming a little
// off the body), then leaves: straight up and out of the picture in a quarter
// of a second, the wings a blur. A few seconds later it zips back in from the
// other side, flares over the perch with its tail spread, drops the last few
// centimetres onto the twig, folds its wings and shakes itself back into shape.
//
// The root is moved here while the bird is off the perch (the hop layer is put
// on hold and told where the bird came down).

export type FleePhase = 'idle' | 'ready' | 'takeoff' | 'away' | 'approach' | 'brake' | 'land';

const BLUR = 2; // pose.wing.spread value that hides the blades (the blur fan stands in)

export class FleeLayer implements Layer {
  readonly name = 'flee';
  /** seconds it stays away */
  awayFor: [number, number] = [2, 5];
  /** seconds between leaving of its own accord (it rarely does) */
  every: [number, number] = [70, 200];
  phase: FleePhase = 'idle';
  private t0 = 0;
  private dur = 0.4;
  private side = 1;
  private from = new THREE.Vector3();
  private out = new THREE.Vector3();
  private hover = new THREE.Vector3();
  private landAt = new THREE.Vector3();
  private far = new THREE.Vector3();
  private landX = 0;
  private nextAt: number;
  // made up front, hidden: its shader compiles with the rest while loading, not on the first flight
  private blur: WingBlur;
  private shakeAt = -1;

  constructor(
    private mind: Mind,
    private rig: Rig,
    private root: THREE.Object3D,
    private hop: HopLayer,
    private ruffle: RuffleLayer,
    private tail: TailLayer,
  ) {
    this.nextAt = rand(mind.rng, this.every[0], this.every[1]);
    this.blur = createWingBlur(rig);
  }

  /** off the perch, or about to be */
  get active() {
    return this.phase !== 'idle';
  }

  /** not there to be seen or fed */
  /** on the twig: not off it in the air (gathering itself to go and settling after landing count) */
  get perched() {
    return this.phase === 'idle' || this.phase === 'ready' || this.phase === 'land';
  }

  get gone() {
    return this.phase === 'away';
  }

  start() {
    const m = this.mind;
    if (this.active || this.hop.busy) return false;
    this.hop.hold = true;
    // whatever it was doing, it drops
    m.emit('startle', { strength: 1 });
    m.arousal = 1;
    m.freeze = 0;
    this.phase = 'ready';
    this.t0 = m.t;
    // (a parrot takes longer to gather itself: it has wings to get off its back)
    this.dur = m.species.behaviour.parrot ? rand(m.rng, 0.5, 0.65) : rand(m.rng, 0.3, 0.48);
    this.side = m.rng() < 0.5 ? 1 : -1;
    this.nextAt = m.t + rand(m.rng, this.every[0], this.every[1]);
    return true;
  }

  private go(phase: FleePhase, dur: number) {
    this.phase = phase;
    this.t0 = this.mind.t;
    this.dur = dur;
  }

  update(m: Mind, p: Pose) {
    if (this.phase === 'idle') {
      if (!m.quiet && m.t >= this.nextAt && !m.eating && m.freeze <= 0) this.start();
      if (this.shakeAt > 0 && m.t >= this.shakeAt) {
        this.shakeAt = -1;
        this.ruffle.trigger(m, 'shake', 0.7);
      }
      if (this.phase === 'idle') return;
    }
    if (m.species.behaviour.parrot) {
      this.flap(m, p);
      return;
    }
    const root = this.root;
    const u = clamp((m.t - this.t0) / this.dur, 0, 1);
    let spread = 0;
    let blur = 0;
    let tilt = 0.6;
    m.gazeLock = this.phase !== 'land';

    switch (this.phase) {
      case 'ready': {
        // getting ready: down on the legs, wings coming off the body, everything slicked flat
        const k = Math.sin(u * Math.PI * 0.5);
        p.bodyShift.y -= 0.04 * k;
        p.bodyShift.z += 0.02 * k;
        p.bodyPitch += 0.34 * k;
        p.headShift.y -= 0.012 * k;
        p.fluff -= 0.12 * k;
        p.tailFan += 0.35 * k;
        p.tailPitch -= 0.12 * k;
        spread = 0.42 * smoothstep(0, 0.8, u);
        const tremble = Math.sin(m.t * 46 * Math.PI) * 0.05 * k;
        for (const s of ['L', 'R'] as const) {
          p.wing[s].lift += 0.25 * k + tremble;
          p.wing[s].droop += 0.08 * k;
        }
        if (u >= 1) {
          this.from.copy(root.position);
          this.out.set(this.side * 0.55, 1, 0.12).normalize();
          m.emit('perch', { x: this.from.x, push: 1, on: false, side: 0.4 });
          this.go('takeoff', 0.27);
        }
        break;
      }
      case 'takeoff': {
        // the legs throw it off the twig and the wings take over at once
        root.position.copy(this.from).addScaledVector(this.out, 0.35 * u + 7.5 * u * u * u);
        spread = BLUR;
        blur = smoothstep(0, 0.12, u);
        p.grip = 1 - smoothstep(0, 0.15, u);
        p.bodyShift.y += 0.03 * smoothstep(0, 0.3, u);
        // leaning into it as it leaves, the wings up behind the back
        p.bodyPitch += lerp(0.34, 0.1, smoothstep(0, 0.6, u));
        tilt = 0.95;
        p.bodyRoll += -this.side * 0.25 * u;
        p.tailFan += 0.8;
        p.tailPitch -= 0.25;
        p.fluff -= 0.14;
        if (u >= 1) {
          root.visible = false;
          this.go('away', rand(m.rng, this.awayFor[0], this.awayFor[1]));
        }
        break;
      }
      case 'away': {
        spread = BLUR;
        if (u >= 1) {
          // back to the perch: near where it likes to sit, in from the other side
          this.landX = this.hop.home + rand(m.rng, -0.12, 0.12);
          this.landX = this.hop.place(this.landX, this.landAt);
          this.hover.copy(this.landAt);
          this.hover.y += 0.2;
          this.far.copy(this.hover).add(new THREE.Vector3(-this.side * rand(m.rng, 3.2, 4.4), rand(m.rng, 1.8, 3), rand(m.rng, -1.2, -0.3)));
          root.position.copy(this.far);
          root.visible = true;
          this.go('approach', rand(m.rng, 0.42, 0.55));
        }
        break;
      }
      case 'approach': {
        // in fast, head first, shedding speed all the way
        const e = 1 - Math.pow(1 - u, 3);
        root.position.copy(this.far).lerp(this.hover, e);
        spread = BLUR;
        blur = 1;
        p.grip = 0;
        p.bodyPitch += lerp(0.5, -0.32, smoothstep(0.35, 1, u));
        tilt = lerp(0.9, 0.35, smoothstep(0.35, 1, u));
        p.bodyRoll += this.side * 0.3 * (1 - e);
        p.tailFan += lerp(0.3, 1, smoothstep(0.4, 1, u));
        p.tailPitch -= 0.3 * smoothstep(0.4, 1, u);
        p.fluff -= 0.1;
        if (u >= 1) this.go('brake', rand(m.rng, 0.45, 0.62));
        break;
      }
      case 'brake': {
        // hangs over the twig for a moment, body upright, tail spread, then lets itself down
        const down = smoothstep(0.6, 1, u);
        tilt = 0.35;
        root.position.copy(this.hover).lerp(this.landAt, down);
        root.position.y += 0.015 * Math.sin(m.t * 31) * (1 - down);
        root.position.x += 0.008 * Math.sin(m.t * 23) * (1 - down);
        spread = BLUR;
        blur = 1;
        p.grip = smoothstep(0.8, 1, u) * 0.5;
        p.bodyPitch -= lerp(0.32, 0.05, down);
        p.bodyShift.y += 0.02 * (1 - down);
        p.tailFan += 1;
        p.tailPitch -= lerp(0.3, 0.1, down);
        if (u >= 1) {
          root.position.copy(this.landAt);
          this.hop.landed();
          m.emit('perch', { x: this.landAt.x, push: 0.85, on: true, side: rand(m.rng, -1, 1) });
          this.tail.flick(m, 1.2);
          this.go('land', 0.5);
        }
        break;
      }
      case 'land': {
        // on the twig: the toes close, the wings fold, the tail shuts
        root.position.copy(this.landAt);
        spread = u < 0.12 ? BLUR : 1 - smoothstep(0.12, 0.75, u);
        blur = 1 - smoothstep(0, 0.14, u);
        p.grip = 0.5 + 0.5 * smoothstep(0, 0.25, u);
        p.tailFan += 0.8 * (1 - smoothstep(0, 0.8, u));
        for (const s of ['L', 'R'] as const) p.wing[s].lift += 0.3 * Math.sin(Math.PI * smoothstep(0.5, 1, u));
        if (u >= 1) {
          this.phase = 'idle';
          this.hop.hold = false;
          m.gazeLock = false;
          this.shakeAt = m.t + rand(m.rng, 0.25, 0.6);
          m.freeze = 0.3;
        }
        break;
      }
      default:
        break;
    }
    // now and then a frame catches the wing itself, sharp, at one end of its stroke
    if (spread === BLUR && blur > 0.9 && Math.random() < 0.3) {
      spread = 1;
      blur *= 0.55;
      const fwd = Math.random() < 0.5;
      for (const s of ['L', 'R'] as const) {
        p.wing[s].sweep = fwd ? rand(Math.random, 0.7, 1.0) : -rand(Math.random, 0.9, 1.25);
        p.wing[s].raise = (fwd ? -0.1 : 0.45) + tilt * 0.4;
      }
    }
    p.wing.L.spread = p.wing.R.spread = spread;
    this.blur.set(blur, tilt);
    this.hop.follow();
  }

  // --- a parrot's flight ----------------------------------------------------------------
  // No blur: the wings are seen. It crouches and lifts them off its back, throws itself off
  // the twig on the first downstroke and rows away with deep beats, turning the way it goes
  // and drawing its feet up. It comes back lower and slower, the wings beating shallow and
  // mostly below the body, the way an amazon flies; swings upright short of the perch with
  // its tail spread, back-pedals with a few deep strokes, drops onto the twig, rocks forward
  // over its feet and folds its wings, hand first.
  private beat = 0; // wingbeats so far (its fraction is where the stroke is: 0 = top)
  private lastT = 0;
  private offset = new THREE.Vector3();

  private flap(m: Mind, p: Pose) {
    const root = this.root;
    const u = clamp((m.t - this.t0) / this.dur, 0, 1);
    const dt = clamp(m.t - this.lastT, 0, 0.1);
    this.lastT = m.t;
    m.gazeLock = this.phase !== 'land';
    let spread = 0;
    // The stroke, in the world's terms, not the body's: how high the wing stands at the top
    // and how low at the bottom (radians above level), how far forward of straight out it is
    // at each end, beats a second, and how far it folds on the way up. The body tips from
    // upright to level and back while it flies; up stays up.
    let hz = 0;
    // (before it jumps: held a little out and low, where the first flick up starts from)
    let top = -0.3;
    let bottom = -0.3;
    let fwdTop = 0;
    let fwdBottom = 0;
    let fold = 0;
    let flex = 0;
    /** leaning forward, and turned the way it is going (to its left), radians; 0…1 in the air (the head goes with the body) */
    let pitch = 0;
    let yaw = 0;
    let fly = 0;

    switch (this.phase) {
      case 'ready': {
        // down on its legs and leaning out, the wings coming up off the back, still bent
        const k = Math.sin(u * Math.PI * 0.5);
        p.bodyShift.y -= 0.05 * k;
        p.bodyShift.z += 0.02 * k;
        pitch = 0.38 * k;
        p.headShift.y -= 0.012 * k;
        p.fluff -= 0.1 * k;
        p.tailFan += 0.4 * k;
        p.tailPitch -= 0.1 * k;
        yaw = this.side * 0.3 * k;
        // (only loosened here: they are thrown up and open as it jumps)
        spread = 0.4 * smoothstep(0.15, 1, u);
        flex = 0.9;
        if (u >= 1) {
          this.from.copy(root.position);
          this.out.set(this.side * 0.9, 0.42, 0.12).normalize();
          m.emit('perch', { x: this.from.x, push: 1, on: false, side: 0.4 });
          // (the wings flick up as it lets go, and the first stroke down goes with the legs' push)
          this.beat = -0.4;
          this.go('takeoff', 1.0);
        }
        break;
      }
      case 'takeoff': {
        // slow off the twig, the first beats almost on the spot, then away
        root.position.copy(this.from).addScaledVector(this.out, 0.12 * u + 0.8 * u * u + 2.6 * u * u * u);
        spread = lerp(0.4, 1, smoothstep(0, 0.1, u));
        // (the first beats are the slow, deep ones)
        hz = lerp(5.5, 8.5, smoothstep(0, 0.3, u));
        top = 1.2;
        bottom = -0.5;
        fwdTop = -0.2;
        fwdBottom = 0.35;
        fold = 0.7;
        flex = 0.9 * (1 - smoothstep(0, 0.08, u));
        p.grip = 1 - smoothstep(0, 0.12, u);
        p.legTuck = smoothstep(0.3, 0.8, u);
        p.bodyShift.y -= 0.05 * (1 - smoothstep(0, 0.2, u));
        pitch = lerp(0.38, 0.8, smoothstep(0, 0.6, u));
        yaw = this.side * lerp(0.3, 1.05, smoothstep(0, 0.65, u));
        p.bodyRoll += -this.side * 0.22 * smoothstep(0.1, 0.6, u);
        p.tailFan += 0.7;
        p.tailPitch -= 0.2;
        p.fluff -= 0.12;
        fly = smoothstep(0, 0.3, u);
        if (u >= 1) {
          root.visible = false;
          this.go('away', rand(m.rng, this.awayFor[0], this.awayFor[1]));
        }
        break;
      }
      case 'away': {
        if (u >= 1) {
          // back to the perch: near where it likes to sit, in from the other side, from not far above it
          this.landX = this.hop.home + rand(m.rng, -0.12, 0.12);
          this.landX = this.hop.place(this.landX, this.landAt);
          this.hover.copy(this.landAt).add(this.offset.set(-this.side * 0.14, 0.13, -0.02));
          this.far.copy(this.hover).add(this.offset.set(-this.side * rand(m.rng, 3.3, 3.9), rand(m.rng, 0.7, 1.3), rand(m.rng, -1.0, -0.2)));
          root.position.copy(this.far);
          root.visible = true;
          this.go('approach', rand(m.rng, 1.3, 1.55));
        }
        break;
      }
      case 'approach': {
        // in on a shallow swoop, slowing all the way: the beats shallow and mostly below the
        // body. Over the last of it the body comes upright, the feet come down and the beats
        // deepen to hold it up.
        const e = 1 - Math.pow(1 - u, 2.2);
        const up = smoothstep(0.55, 1, u);
        root.position.copy(this.far).lerp(this.hover, e);
        root.position.y -= 0.2 * Math.sin(Math.PI * e);
        spread = 1;
        hz = lerp(7, 8, up);
        top = lerp(0.3, 1.05, up);
        bottom = lerp(-0.65, -0.4, up);
        fwdTop = lerp(-0.1, -0.3, up);
        fwdBottom = lerp(0.15, 0.5, up);
        fold = lerp(0.45, 0.65, up);
        p.grip = 0;
        p.legTuck = 1 - smoothstep(0.55, 0.95, u);
        pitch = lerp(0.8, 0.05, up);
        yaw = this.side * lerp(1.05, 0.55, up);
        p.bodyRoll += this.side * 0.2 * (1 - e);
        p.tailFan += lerp(0.3, 1, smoothstep(0.4, 1, u));
        p.tailPitch -= 0.3 * up;
        p.fluff -= 0.1;
        fly = 1;
        if (u >= 1) this.go('brake', rand(m.rng, 0.55, 0.7));
        break;
      }
      case 'brake': {
        // upright, tail spread and pressed down, rowing forward against its own way; then it lets itself onto the twig
        const down = smoothstep(0.4, 1, u);
        root.position.copy(this.hover).lerp(this.landAt, down);
        spread = 1;
        hz = 8;
        top = 1.05;
        bottom = -0.4;
        fwdTop = -0.3;
        fwdBottom = 0.5;
        fold = 0.6;
        p.grip = smoothstep(0.75, 1, u) * 0.5;
        pitch = -lerp(0.26, 0.05, down);
        p.bodyShift.y += 0.02 * (1 - down);
        yaw = this.side * lerp(0.55, 0.2, u);
        p.tailFan += 1;
        p.tailPitch -= lerp(0.35, 0.1, down);
        fly = 1 - 0.6 * down;
        if (u >= 1) {
          root.position.copy(this.landAt);
          this.hop.landed();
          m.emit('perch', { x: this.landAt.x, push: 1, on: true, side: rand(m.rng, -1, 1) });
          this.tail.flick(m, 1.2);
          this.go('land', 0.9);
        }
        break;
      }
      case 'land': {
        // on the twig with way still on: it tips forward over its feet, catches itself and
        // rocks back, while the last stroke runs out and the wings fold
        root.position.copy(this.landAt);
        const rock = Math.sin(Math.PI * smoothstep(0, 0.75, u));
        spread = 1 - smoothstep(0.08, 0.72, u);
        hz = 8 * (1 - smoothstep(0, 0.3, u));
        top = 0.9;
        bottom = 0.1;
        fwdTop = -0.3;
        fwdBottom = 0.2;
        fold = 0.7;
        flex = smoothstep(0, 0.4, u);
        p.grip = 0.5 + 0.5 * smoothstep(0, 0.25, u);
        pitch = 0.22 * rock;
        p.bodyShift.y -= 0.03 * rock;
        p.tailFan += 0.8 * (1 - smoothstep(0, 0.8, u));
        p.tailPitch += 0.15 * rock;
        yaw = this.side * 0.2 * (1 - smoothstep(0, 0.8, u));
        if (u >= 1) {
          this.phase = 'idle';
          this.hop.hold = false;
          m.gazeLock = false;
          this.shakeAt = m.t + rand(m.rng, 0.3, 0.7);
          m.freeze = 0.3;
        }
        break;
      }
      default:
        break;
    }

    this.beat += hz * dt;
    const ph = this.beat * Math.PI * 2;
    const c = Math.cos(ph); // +1 at the top of the stroke, −1 at the bottom
    const s = Math.sin(ph); // + on the way down
    // where the wing points: up from level, forward of straight out
    const k = 0.5 + 0.5 * c;
    const A = lerp(bottom, top, k);
    const F = lerp(fwdBottom, fwdTop, k);
    const dx = Math.cos(A) * Math.cos(F);
    const dy = Math.sin(A);
    const dz = Math.cos(A) * Math.sin(F);
    // …seen from the chest, which leans with the body: raise is toward its own up, sweep toward its own front
    const yc = dy * Math.cos(pitch) + dz * Math.sin(pitch);
    const zc = -dy * Math.sin(pitch) + dz * Math.cos(pitch);
    const raise = Math.asin(clamp(yc, -1, 1));
    const sweep = Math.atan2(zc, dx);
    for (const side of ['L', 'R'] as const) {
      const w = p.wing[side];
      w.spread = spread;
      w.raise = raise;
      w.sweep = sweep;
      // (on the way up the elbow and wrist give and the hand trails)
      w.flex = clamp(flex + fold * Math.pow(Math.max(0, -s), 0.7), 0, 1);
    }
    // each downstroke lifts it a little
    if (fly > 0 && hz > 0 && root.visible) root.position.y -= 0.02 * c * fly;
    p.bodyPitch += pitch;
    p.bodyYaw += yaw;
    p.headYaw += yaw * 0.85;
    p.headStabil = lerp(p.headStabil, 0.1, fly);
    this.hop.follow();
  }

  dispose() {
    this.blur.dispose();
  }
}
