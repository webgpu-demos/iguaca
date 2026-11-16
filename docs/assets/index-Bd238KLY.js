(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Wc="187",Is={ROTATE:0,DOLLY:1,PAN:2},Ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jp=0,Vh=1,Qp=2,Sr=1,t0=2,mr=3,Gi=0,pn=1,ze=2,Ds=0,br=1,kl=2,Wh=3,Xh=4,e0=5,Cs=100,n0=101,i0=102,s0=103,r0=104,o0=200,a0=201,l0=202,c0=203,hf=204,uf=205,h0=206,u0=207,d0=208,f0=209,p0=210,m0=211,g0=212,_0=213,v0=214,Bl=0,zl=1,Hl=2,Pr=3,Gl=4,Vl=5,Wl=6,Xl=7,df=0,x0=1,y0=2,oi=0,ff=1,Xc=2,pf=3,qc=4,mf=5,Yc=6,Kc=7,qh="attached",M0="detached",gf=300,Os=301,Lr=302,Pa=303,La=304,os=1e3,si=1001,na=1002,Fe=1003,_f=1004,gr=1005,Qe=1006,Wo=1007,ri=1008,An=1009,vf=1010,xf=1011,Ir=1012,Zc=1013,qn=1014,Nn=1015,yn=1016,$c=1017,Jc=1018,ks=1020,yf=35902,Mf=35899,Sf=1021,bf=1022,Vn=1023,Vi=1026,Hi=1027,jc=1028,Qc=1029,as=1030,th=1031,eh=1033,Xo=33776,qo=33777,Yo=33778,Ko=33779,ql=35840,Yl=35841,Kl=35842,Zl=35843,$l=36196,Jl=37492,jl=37496,Ql=37488,tc=37489,ia=37490,ec=37491,nc=37808,ic=37809,sc=37810,rc=37811,oc=37812,ac=37813,lc=37814,cc=37815,hc=37816,uc=37817,dc=37818,fc=37819,pc=37820,mc=37821,gc=36492,_c=36494,vc=36495,xc=36283,yc=36284,sa=36285,Mc=36286,Dr=2300,Nr=2301,Ia=2302,Yh=2303,Kh=2400,Zh=2401,$h=2402,S0=2500,b0=0,wf=1,Sc=2,w0=3200,bc=0,T0=1,Bi="",Xe="srgb",Mn="srgb-linear",ra="linear",we="srgb",Da=7680,E0=519,A0=512,R0=513,C0=514,Tf=515,P0=516,L0=517,Ef=518,Af=519,Rf=35044,Jh=35048,jh="300 es",Wn=2e3,Ur=2001;function I0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function D0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function N0(){const i=Fr("canvas");return i.style.display="block",i}const Qh={};function oa(...i){const t="THREE."+i.shift();console.log(t,...i)}function Cf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qt(...i){i=Cf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ee(...i){i=Cf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ns(...i){const t=i.join(" ");t in Qh||(Qh[t]=!0,qt(...i))}function U0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const F0={[Bl]:Bl,[Hl]:Wl,[Gl]:Gl,[Pr]:Vl,[zl]:zl,[Wl]:Hl,[Xl]:Xl,[Vl]:Pr};class Xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tu=1234567;const wr=Math.PI/180,Bs=180/Math.PI;function ui(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function nh(i,t){return(i%t+t)%t}function O0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function k0(i,t,e){return i!==t?(e-i)/(t-i):0}function Tr(i,t,e){return(1-e)*i+e*t}function B0(i,t,e,n){return Tr(i,t,1-Math.exp(-e*n))}function z0(i,t=1){return t-Math.abs(nh(i,t*2)-t)}function H0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function G0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function V0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function W0(i,t){return i+Math.random()*(t-i)}function X0(i){return i*(.5-Math.random())}function q0(i){i!==void 0&&(tu=i);let t=tu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Y0(i){return i*wr}function K0(i){return i*Bs}function Z0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function $0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Pf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function J0(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ma(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ih(i,t){if(t.constructor===Float32Array)return i;const e=ma(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function sh(i,t){if(t.constructor===Float32Array)return i;const e=ma(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const tn={DEG2RAD:wr,RAD2DEG:Bs,generateUUID:ui,clamp:le,euclideanModulo:nh,mapLinear:O0,inverseLerp:k0,lerp:Tr,damp:B0,pingpong:z0,smoothstep:H0,smootherstep:G0,randInt:V0,randFloat:W0,randFloatSpread:X0,seededRandom:q0,degToRad:Y0,radToDeg:K0,isPowerOfTwo:Z0,ceilPowerOfTwo:$0,floorPowerOfTwo:Pf,setQuaternionFromProperEuler:J0,normalize:sh,denormalize:ih};class kt{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ve{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(u!==v||l!==d||c!==f||h!==g){let p=l*d+c*f+h*g+u*v;p<0&&(d=-d,f=-f,g=-g,v=-v,p=-p);let m=1-a;if(p<.9995){const M=Math.acos(p),w=Math.sin(M);m=Math.sin(m*M)/w,a=Math.sin(a*M)/w,l=l*m+d*a,c=c*m+f*a,h=h*m+g*a,u=u*m+v*a}else{l=l*m+d*a,c=c*m+f*a,h=h*m+g*a,u=u*m+v*a;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class y{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(eu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(eu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Na.copy(this).projectOnVector(t),this.sub(Na)}reflect(t){return this.sub(Na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new y,eu=new ve;class jt{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],M=s[1],w=s[4],b=s[7],x=s[2],A=s[5],_=s[8];return r[0]=o*v+a*M+l*x,r[3]=o*p+a*w+l*A,r[6]=o*m+a*b+l*_,r[1]=c*v+h*M+u*x,r[4]=c*p+h*w+u*A,r[7]=c*m+h*b+u*_,r[2]=d*v+f*M+g*x,r[5]=d*p+f*w+g*A,r[8]=d*m+f*b+g*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ua.makeScale(t,e)),this}rotate(t){return Ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ua.makeRotation(-t)),this}translate(t,e){return Ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new jt,nu=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function j0(){const i={enabled:!0,workingColorSpace:Mn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===we&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===we&&(s.r=Us(s.r),s.g=Us(s.g),s.b=Us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?ra:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mn]:{primaries:t,whitePoint:n,transfer:ra,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:we,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),i}const de=j0();function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ds;class Q0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ds===void 0&&(ds=Fr("canvas")),ds.width=t.width,ds.height=t.height;const s=ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wi(e[n]/255)*255):e[n]=wi(e[n]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tm=0;class rh{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=ui(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fa(s[o].image)):r.push(Fa(s[o]))}else r=Fa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Q0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}let em=0;const Oa=new y;class qe extends Xi{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=si,s=si,r=Qe,o=ri,a=Vn,l=An,c=qe.DEFAULT_ANISOTROPY,h=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=ui(),this.name="",this.source=new rh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Oa).x}get height(){return this.source.getSize(Oa).y}get depth(){return this.source.getSize(Oa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case os:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case os:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=gf;qe.DEFAULT_ANISOTROPY=1;class Ae{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,b=(f+1)/2,x=(m+1)/2,A=(h+d)/4,_=(u+v)/4,T=(g+p)/4;return w>b&&w>x?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=A/n,r=_/n):b>x?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=T/s):x<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(x),n=_/r,s=T/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nm extends Xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new qe({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new rh(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ln extends nm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Lf extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class im extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class $t{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,v,p)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/fs.setFromMatrixColumn(t,0).length(),r=1/fs.setFromMatrixColumn(t,1).length(),o=1/fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sm,t,rm)}lookAt(t,e,n){const s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ci.crossVectors(n,Sn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ci.crossVectors(n,Sn)),Ci.normalize(),$r.crossVectors(Sn,Ci),s[0]=Ci.x,s[4]=$r.x,s[8]=Sn.x,s[1]=Ci.y,s[5]=$r.y,s[9]=Sn.y,s[2]=Ci.z,s[6]=$r.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],M=n[3],w=n[7],b=n[11],x=n[15],A=s[0],_=s[4],T=s[8],N=s[12],C=s[1],P=s[5],L=s[9],F=s[13],E=s[2],D=s[6],U=s[10],O=s[14],Y=s[3],H=s[7],G=s[11],K=s[15];return r[0]=o*A+a*C+l*E+c*Y,r[4]=o*_+a*P+l*D+c*H,r[8]=o*T+a*L+l*U+c*G,r[12]=o*N+a*F+l*O+c*K,r[1]=h*A+u*C+d*E+f*Y,r[5]=h*_+u*P+d*D+f*H,r[9]=h*T+u*L+d*U+f*G,r[13]=h*N+u*F+d*O+f*K,r[2]=g*A+v*C+p*E+m*Y,r[6]=g*_+v*P+p*D+m*H,r[10]=g*T+v*L+p*U+m*G,r[14]=g*N+v*F+p*O+m*K,r[3]=M*A+w*C+b*E+x*Y,r[7]=M*_+w*P+b*D+x*H,r[11]=M*T+w*L+b*U+x*G,r[15]=M*N+w*F+b*O+x*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15],M=l*f-c*d,w=a*f-c*u,b=a*d-l*u,x=o*f-c*h,A=o*d-l*h,_=o*u-a*h;return e*(v*M-p*w+m*b)-n*(g*M-p*x+m*A)+s*(g*w-v*x+m*_)-r*(g*b-v*A+p*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],M=e*a-n*o,w=e*l-s*o,b=e*c-r*o,x=n*l-s*a,A=n*c-r*a,_=s*c-r*l,T=h*v-u*g,N=h*p-d*g,C=h*m-f*g,P=u*p-d*v,L=u*m-f*v,F=d*m-f*p,E=M*F-w*L+b*P+x*C-A*N+_*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/E;return t[0]=(a*F-l*L+c*P)*D,t[1]=(s*L-n*F-r*P)*D,t[2]=(v*_-p*A+m*x)*D,t[3]=(d*A-u*_-f*x)*D,t[4]=(l*C-o*F-c*N)*D,t[5]=(e*F-s*C+r*N)*D,t[6]=(p*b-g*_-m*w)*D,t[7]=(h*_-d*b+f*w)*D,t[8]=(o*L-a*C+c*T)*D,t[9]=(n*C-e*L-r*T)*D,t[10]=(g*A-v*b+m*M)*D,t[11]=(u*b-h*A-f*M)*D,t[12]=(a*N-o*P-l*T)*D,t[13]=(e*P-n*N+s*T)*D,t[14]=(v*w-g*x-p*M)*D,t[15]=(h*x-u*w+d*M)*D,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,v=o*h,p=o*u,m=a*u,M=l*c,w=l*h,b=l*u,x=n.x,A=n.y,_=n.z;return s[0]=(1-(v+m))*x,s[1]=(f+b)*x,s[2]=(g-w)*x,s[3]=0,s[4]=(f-b)*A,s[5]=(1-(d+m))*A,s[6]=(p+M)*A,s[7]=0,s[8]=(g+w)*_,s[9]=(p-M)*_,s[10]=(1-(d+v))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=fs.set(s[0],s[1],s[2]).length();const a=fs.set(s[4],s[5],s[6]).length(),l=fs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Bn.copy(this);const c=1/o,h=1/a,u=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,e.setFromRotationMatrix(Bn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Wn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===Wn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ur)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Wn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===Wn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Ur)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const fs=new y,Bn=new $t,sm=new y(0,0,0),rm=new y(1,1,1),Ci=new y,$r=new y,Sn=new y,su=new $t,ru=new ve;class Yn{constructor(t=0,e=0,n=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return su.makeRotationFromQuaternion(t),this.setFromRotationMatrix(su,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ru.setFromEuler(this),this.setFromQuaternion(ru,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class oh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let om=0;const ou=new y,ps=new ve,pi=new $t,Jr=new y,$s=new y,am=new y,lm=new ve,au=new y(1,0,0),lu=new y(0,1,0),cu=new y(0,0,1),hu={type:"added"},cm={type:"removed"},ms={type:"childadded",child:null},ka={type:"childremoved",child:null};class De extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new y,e=new Yn,n=new ve,s=new y(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new jt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(au,t)}rotateY(t){return this.rotateOnAxis(lu,t)}rotateZ(t){return this.rotateOnAxis(cu,t)}translateOnAxis(t,e){return ou.copy(t).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(au,t)}translateY(t){return this.translateOnAxis(lu,t)}translateZ(t){return this.translateOnAxis(cu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jr.copy(t):Jr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt($s,Jr,this.up):pi.lookAt(Jr,$s,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(pi),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hu),ms.child=t,this.dispatchEvent(ms),ms.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cm),ka.child=t,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hu),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,am),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,lm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}De.DEFAULT_UP=new y(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class cn extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hm={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new cn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const If={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},jr={h:0,s:0,l:0};function za(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=nh(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=za(o,r,t+1/3),this.g=za(o,r,t),this.b=za(o,r,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=If[t.toLowerCase()];return n!==void 0?this.setHex(n,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return de.workingToColorSpace(an.copy(this),t),Math.round(le(an.r*255,0,255))*65536+Math.round(le(an.g*255,0,255))*256+Math.round(le(an.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(an.copy(this),e);const n=an.r,s=an.g,r=an.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=Xe){de.workingToColorSpace(an.copy(this),t);const e=an.r,n=an.g,s=an.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(jr);const n=Tr(Pi.h,jr.h,e),s=Tr(Pi.s,jr.s,e),r=Tr(Pi.l,jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Ut;Ut.NAMES=If;class ah extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const zn=new y,mi=new y,Ha=new y,gi=new y,gs=new y,_s=new y,uu=new y,Ga=new y,Va=new y,Wa=new y,Xa=new Ae,qa=new Ae,Ya=new Ae;class Dn{constructor(t=new y,e=new y,n=new y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),zn.subVectors(t,e),s.cross(zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){zn.subVectors(s,e),mi.subVectors(n,e),Ha.subVectors(t,e);const o=zn.dot(zn),a=zn.dot(mi),l=zn.dot(Ha),c=mi.dot(mi),h=mi.dot(Ha),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Xa.setScalar(0),qa.setScalar(0),Ya.setScalar(0),Xa.fromBufferAttribute(t,e),qa.fromBufferAttribute(t,n),Ya.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Xa,r.x),o.addScaledVector(qa,r.y),o.addScaledVector(Ya,r.z),o}static isFrontFacing(t,e,n,s){return zn.subVectors(n,e),mi.subVectors(t,e),zn.cross(mi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),zn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Dn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;gs.subVectors(s,n),_s.subVectors(r,n),Ga.subVectors(t,n);const l=gs.dot(Ga),c=_s.dot(Ga);if(l<=0&&c<=0)return e.copy(n);Va.subVectors(t,s);const h=gs.dot(Va),u=_s.dot(Va);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(gs,o);Wa.subVectors(t,r);const f=gs.dot(Wa),g=_s.dot(Wa);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(_s,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return uu.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(uu,a);const m=1/(p+v+d);return o=v*m,a=d*m,e.copy(n).addScaledVector(gs,o).addScaledVector(_s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class di{constructor(t=new y(1/0,1/0,1/0),e=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(t.matrixWorld),this.union(Qr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),to.subVectors(this.max,Js),vs.subVectors(t.a,Js),xs.subVectors(t.b,Js),ys.subVectors(t.c,Js),Li.subVectors(xs,vs),Ii.subVectors(ys,xs),Ji.subVectors(vs,ys);let e=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-Ji.z,Ji.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,Ji.z,0,-Ji.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-Ji.y,Ji.x,0];return!Ka(e,vs,xs,ys,to)||(e=[1,0,0,0,1,0,0,0,1],!Ka(e,vs,xs,ys,to))?!1:(eo.crossVectors(Li,Ii),e=[eo.x,eo.y,eo.z],Ka(e,vs,xs,ys,to))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const _i=[new y,new y,new y,new y,new y,new y,new y,new y],Hn=new y,Qr=new di,vs=new y,xs=new y,ys=new y,Li=new y,Ii=new y,Ji=new y,Js=new y,to=new y,eo=new y,ji=new y;function Ka(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ji.fromArray(i,r);const a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=t.dot(ji),c=e.dot(ji),h=n.dot(ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ge=new y,no=new kt;let um=0;class Pe extends Xi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:um++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rf,this.updateRanges=[],this.gpuType=Nn,this.version=0,this._normalizationScale=t!==void 0?ma(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)no.fromBufferAttribute(this,e),no.applyMatrix3(t),this.setXY(e,no.x,no.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ih(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):sh(t,this.array)}}class ga extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Df extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}const dm=new di,js=new y,Za=new y;class On{constructor(t=new y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):dm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);const e=js.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(Za)),this.expandByPoint(js.copy(t.center).sub(Za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let fm=0;const Pn=new $t,$a=new De,Ms=new y,bn=new di,Qs=new di,je=new y;class Me extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(I0(t)?Df:ga)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return $a.lookAt(t),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new y,1/0);return}if(t){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(bn.min,Qs.min),bn.expandByPoint(je),je.addVectors(bn.max,Qs.max),bn.expandByPoint(je)):(bn.expandByPoint(Qs.min),bn.expandByPoint(Qs.max))}bn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)je.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(t,c),je.add(Ms)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Pe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)a[N]=new y,l[N]=new y;const h=new y,u=new y,d=new y,f=new kt,g=new kt,v=new kt,p=new y,m=new y;function M(N,C,P){c[N]=c[C]=c[P]=1,h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,P),f.fromBufferAttribute(r,N),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,P),u.sub(h),d.sub(h),g.sub(f),v.sub(f);const L=1/(g.x*v.y-v.x*g.y);isFinite(L)&&(p.copy(u).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(L),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(L),a[N].add(p),a[C].add(p),a[P].add(p),l[N].add(m),l[C].add(m),l[P].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let N=0,C=w.length;N<C;++N){const P=w[N],L=P.start,F=P.count;for(let E=L,D=L+F;E<D;E+=3)M(t.getX(E+0),t.getX(E+1),t.getX(E+2))}const b=new y,x=new y,A=new y,_=new y;function T(N){A.fromBufferAttribute(s,N),_.copy(A);const C=a[N];b.copy(C),b.sub(A.multiplyScalar(A.dot(C))).normalize(),x.crossVectors(_,C);const L=x.dot(l[N])<0?-1:1;o.setXYZW(N,b.x,b.y,b.z,L)}for(let N=0,C=n.count;N<C;++N)c[N]&&T(N);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new y,r=new y,o=new y,a=new y,l=new y,c=new y,h=new y,u=new y;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new Pe(d,h,u)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Rf,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=du(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=du(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function du(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ui()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const un=new y;class lh{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?ma(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){oa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new lh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){oa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ih(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):sh(t,this.data.array)}}const Ja=new y,mm=new y,gm=new jt;class En{constructor(t=new y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ja.subVectors(n,e).cross(mm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Ja),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gm.getNormalMatrix(t),s=this.coplanarPoint(Ja).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let _m=0;class ai extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=br,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hf,this.blendDst=uf,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=E0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Da,this.stencilZFail=Da,this.stencilZPass=Da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new En().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new kt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const vi=new y,ja=new y,io=new y,so=new y;class Gs{constructor(t=new y,e=new y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ja.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),so.copy(this.origin).sub(ja);const r=t.distanceTo(e)*.5,o=-this.direction.dot(io),a=so.dot(this.direction),l=-so.dot(io),c=so.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ja).addScaledVector(io,d),f}intersectSphere(t,e){if(t.radius<0)return null;vi.subVectors(t.center,this.origin);const n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,g=e.x-o.x,v=e.y-o.y,p=e.z-o.z,m=n.x-o.x,M=n.y-o.y,w=n.z-o.z,b=Math.abs(l),x=Math.abs(c),A=Math.abs(h);let _,T,N,C,P,L,F,E,D,U,O,Y;if(b>=x&&b>=A?(N=l,L=u,D=g,Y=m,l>=0?(_=c,T=h,C=d,P=f,F=v,E=p,U=M,O=w):(_=h,T=c,C=f,P=d,F=p,E=v,U=w,O=M)):x>=A?(N=c,L=d,D=v,Y=M,c>=0?(_=h,T=l,C=f,P=u,F=p,E=g,U=w,O=m):(_=l,T=h,C=u,P=f,F=g,E=p,U=m,O=w)):(N=h,L=f,D=p,Y=w,h>=0?(_=l,T=c,C=u,P=d,F=g,E=v,U=m,O=M):(_=c,T=l,C=d,P=u,F=v,E=g,U=M,O=m)),N===0)return null;const H=_/N,G=T/N,K=1/N,ot=C-H*L,Q=P-G*L,k=F-H*D,Z=E-G*D,q=U-H*Y,st=O-G*Y,W=q*Z-st*k,j=ot*st-Q*q,ft=k*Q-Z*ot;if(s){if(W<0||j<0||ft<0)return null}else if((W<0||j<0||ft<0)&&(W>0||j>0||ft>0))return null;const dt=W+j+ft;if(dt===0)return null;const Dt=K*(W*L+j*D+ft*Y);return(dt>0?Dt<0:Dt>0)?null:this.at(Dt/dt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xn extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fu=new $t,Qi=new Gs,ro=new On,pu=new y,oo=new y,ao=new y,lo=new y,Qa=new y,co=new y,mu=new y,ho=new y;class me extends De{constructor(t=new Me,e=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Qa.fromBufferAttribute(u,t),o?co.addScaledVector(Qa,h):co.addScaledVector(Qa.sub(e),h))}e.add(co)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),Qi.copy(t.ray).recast(t.near),!(ro.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(ro,pu)===null||Qi.origin.distanceToSquared(pu)>(t.far-t.near)**2))&&(fu.copy(r).invert(),Qi.copy(t.ray).applyMatrix4(fu),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),w=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let b=M,x=w;b<x;b+=3){const A=a.getX(b),_=a.getX(b+1),T=a.getX(b+2);s=uo(this,m,t,n,c,h,u,A,_,T),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const M=a.getX(p),w=a.getX(p+1),b=a.getX(p+2);s=uo(this,o,t,n,c,h,u,M,w,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),w=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=M,x=w;b<x;b+=3){const A=b,_=b+1,T=b+2;s=uo(this,m,t,n,c,h,u,A,_,T),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const M=p,w=p+1,b=p+2;s=uo(this,o,t,n,c,h,u,M,w,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function vm(i,t,e,n,s,r,o,a){let l;if(t.side===pn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Gi,a),l===null)return null;ho.copy(a),ho.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ho);return c<e.near||c>e.far?null:{distance:c,point:ho.clone(),object:i}}function uo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,oo),i.getVertexPosition(l,ao),i.getVertexPosition(c,lo);const h=vm(i,t,e,n,oo,ao,lo,mu);if(h){const u=new y;Dn.getBarycoord(mu,oo,ao,lo,u),s&&(h.uv=Dn.getInterpolatedAttribute(s,a,l,c,u,new kt)),r&&(h.uv1=Dn.getInterpolatedAttribute(r,a,l,c,u,new kt)),o&&(h.normal=Dn.getInterpolatedAttribute(o,a,l,c,u,new y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new y,materialIndex:0};Dn.getNormal(oo,ao,lo,d.normal),h.face=d,h.barycoord=u}return h}const tr=new Ae,gu=new Ae,_u=new Ae,xm=new Ae,vu=new $t,fo=new y,tl=new On,xu=new $t,el=new Gs;class ni extends me{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qh,this.bindMatrix=new $t,this.bindMatrixInverse=new $t,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new di),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,fo),this.boundingBox.expandByPoint(fo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,fo),this.boundingSphere.expandByPoint(fo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tl.copy(this.boundingSphere),tl.applyMatrix4(s),t.ray.intersectsSphere(tl)!==!1&&(xu.copy(s).invert(),el.copy(t.ray).applyMatrix4(xu),!(this.boundingBox!==null&&el.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,el)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Ae,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===qh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===M0?this.bindMatrixInverse.copy(this.bindMatrix).invert():qt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;gu.fromBufferAttribute(s.attributes.skinIndex,t),_u.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(tr.copy(e),e.set(0,0,0,0)):(tr.set(e.x,e.y,e.z,1),e.set(0,0,0)),tr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=_u.getComponent(r);if(o!==0){const a=gu.getComponent(r);vu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(xm.copy(tr).applyMatrix4(vu),o)}}return e.isVector4&&(e.w=tr.w),e.applyMatrix4(this.bindMatrixInverse)}}class ch extends De{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _a extends qe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Fe,h=Fe,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yu=new $t,ym=new $t;class va{constructor(t=[],e=[]){this.uuid=ui(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){qt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new $t)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new $t;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:ym;yu.multiplyMatrices(a,e[r]),yu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new va(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new _a(e,t,t,Vn,Nn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(qt("Skeleton: No bone found with UUID:",r),o=new ch),this.bones.push(o),this.boneInverses.push(new $t().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class aa extends Pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ss=new $t,Mu=new $t,po=[],Su=new di,Mm=new $t,er=new me,nr=new On;class Sm extends me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new aa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Mm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),Su.copy(t.boundingBox).applyMatrix4(Ss),this.boundingBox.union(Su)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),nr.copy(t.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),t.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ss),Mu.multiplyMatrices(n,Ss),er.matrixWorld=Mu,er.raycast(t,po);for(let o=0,a=po.length;o<a;o++){const l=po[o];l.instanceId=r,l.object=this,e.push(l)}po.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new aa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _a(new Float32Array(s*this.count),s,this.count,jc,Nn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ts=new On,bm=new kt(.5,.5),mo=new y;class Or{constructor(t=new En,e=new En,n=new En,s=new En,r=new En,o=new En){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],p=r[10],m=r[11],M=r[12],w=r[13],b=r[14],x=r[15];if(s[0].setComponents(c-o,f-h,m-g,x-M).normalize(),s[1].setComponents(c+o,f+h,m+g,x+M).normalize(),s[2].setComponents(c+a,f+u,m+v,x+w).normalize(),s[3].setComponents(c-a,f-u,m-v,x-w).normalize(),n)s[4].setComponents(l,d,p,b).normalize(),s[5].setComponents(c-l,f-d,m-p,x-b).normalize();else if(s[4].setComponents(c-l,f-d,m-p,x-b).normalize(),e===Wn)s[5].setComponents(c+l,f+d,m+p,x+b).normalize();else if(e===Ur)s[5].setComponents(l,d,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){ts.center.set(0,0,0);const e=bm.distanceTo(t.center);return ts.radius=.7071067811865476+e,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(mo.x=s.normal.x>0?t.max.x:t.min.x,mo.y=s.normal.y>0?t.max.y:t.min.y,mo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(mo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const bu=new $t;class hh{constructor(){this.coordinateSystem=Wn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];bu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Or),n[s].setFromProjectionMatrix(bu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Or),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new hh().copy(this)}}class xa extends ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const la=new y,ca=new y,wu=new $t,ir=new Gs,go=new On,nl=new y,Tu=new y;class uh extends De{constructor(t=new Me,e=new xa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)la.fromBufferAttribute(e,s-1),ca.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=la.distanceTo(ca);t.setAttribute("lineDistance",new ie(n,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),go.radius+=r,t.ray.intersectsSphere(go)===!1)return;wu.copy(s).invert(),ir.copy(t.ray).applyMatrix4(wu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=c){const m=h.getX(v),M=h.getX(v+1),w=_o(this,t,ir,l,m,M,v);w&&e.push(w)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(f),m=_o(this,t,ir,l,v,p,g-1);m&&e.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=c){const m=_o(this,t,ir,l,v,v+1,v);m&&e.push(m)}if(this.isLineLoop){const v=_o(this,t,ir,l,g-1,f,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _o(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(la.fromBufferAttribute(a,s),ca.fromBufferAttribute(a,r),e.distanceSqToSegment(la,ca,nl,Tu)>n)return;nl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(nl);if(!(c<t.near||c>t.far))return{distance:c,point:Tu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Eu=new y,Au=new y;class ha extends uh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Eu.fromBufferAttribute(e,s),Au.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Eu.distanceTo(Au);t.setAttribute("lineDistance",new ie(n,1))}else qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wm extends uh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Nf extends ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ru=new $t,wc=new Gs,vo=new On,xo=new y;class Uf extends De{constructor(t=new Me,e=new Nf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),vo.radius+=r,t.ray.intersectsSphere(vo)===!1)return;Ru.copy(s).invert(),wc.copy(t.ray).applyMatrix4(Ru);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const p=c.getX(g);xo.fromBufferAttribute(u,p),Cu(xo,p,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)xo.fromBufferAttribute(u,g),Cu(xo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Cu(i,t,e,n,s,r,o){const a=wc.distanceSqToPoint(i);if(a<e){const l=new y;wc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ff extends qe{constructor(t=[],e=Os,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Tm extends qe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ls extends qe{constructor(t,e,n=qn,s,r,o,a=Fe,l=Fe,c,h=Vi,u=1){if(h!==Vi&&h!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new rh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Of extends ls{constructor(t,e=qn,n=Os,s,r,o=Fe,a=Fe,l,c=Vi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class kf extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wr extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function g(v,p,m,M,w,b,x,A,_,T,N){const C=b/_,P=x/T,L=b/2,F=x/2,E=A/2,D=_+1,U=T+1;let O=0,Y=0;const H=new y;for(let G=0;G<U;G++){const K=G*P-F;for(let ot=0;ot<D;ot++){const Q=ot*C-L;H[v]=Q*M,H[p]=K*w,H[m]=E,c.push(H.x,H.y,H.z),H[v]=0,H[p]=0,H[m]=A>0?1:-1,h.push(H.x,H.y,H.z),u.push(ot/_),u.push(1-G/T),O+=1}}for(let G=0;G<T;G++)for(let K=0;K<_;K++){const ot=d+K+D*G,Q=d+K+D*(G+1),k=d+(K+1)+D*(G+1),Z=d+(K+1)+D*G;l.push(ot,Q,Z),l.push(Q,k,Z),Y+=6}a.addGroup(f,Y,N),f+=Y,d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class dh extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new y,h=new kt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dh(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xr extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],p=n/2;let m=0;M(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(d,3)),this.setAttribute("uv",new ie(f,2));function M(){const b=new y,x=new y;let A=0;const _=(e-t)/n;for(let T=0;T<=r;T++){const N=[],C=T/r,P=C*(e-t)+t;for(let L=0;L<=s;L++){const F=L/s,E=F*l+a,D=Math.sin(E),U=Math.cos(E);x.x=P*D,x.y=-C*n+p,x.z=P*U,u.push(x.x,x.y,x.z),b.set(D,_,U).normalize(),d.push(b.x,b.y,b.z),f.push(F,1-C),N.push(g++)}v.push(N)}for(let T=0;T<s;T++)for(let N=0;N<r;N++){const C=v[N][T],P=v[N+1][T],L=v[N+1][T+1],F=v[N][T+1];(t>0||N!==0)&&(h.push(C,P,F),A+=3),(e>0||N!==r-1)&&(h.push(P,L,F),A+=3)}c.addGroup(m,A,0),m+=A}function w(b){const x=g,A=new kt,_=new y;let T=0;const N=b===!0?t:e,C=b===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,p*C,0),d.push(0,C,0),f.push(.5,.5),g++;const P=g;for(let L=0;L<=s;L++){const E=L/s*l+a,D=Math.cos(E),U=Math.sin(E);_.x=N*U,_.y=p*C,_.z=N*D,u.push(_.x,_.y,_.z),d.push(0,C,0),A.x=D*.5+.5,A.y=U*.5*C+.5,f.push(A.x,A.y),g++}for(let L=0;L<s;L++){const F=x+L,E=P+L;b===!0?h.push(E,E+1,F):h.push(E+1,E,F),T+=3}c.addGroup(m,T,b===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Em{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new kt:new y);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new y,s=[],r=[],o=[],a=new y,l=new $t;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new y)}r[0]=new y,o[0]=new y;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(le(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(le(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}function fh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Pu=new y,Lu=new y,il=new fh,sl=new fh,rl=new fh;class Tc extends Em{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new y){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Lu.subVectors(s[0],s[1]).add(s[0]),c=Lu);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Pu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Pu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),il.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,p),sl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,p),rl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(il.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),sl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),rl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(il.calc(l),sl.calc(l),rl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new y().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class us extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const M=m*d-o;for(let w=0;w<c;w++){const b=w*u-r;g.push(b,-M,0),v.push(0,0,1),p.push(w/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const w=M+c*m,b=M+c*(m+1),x=M+1+c*(m+1),A=M+1+c*m;f.push(w,b,A),f.push(b,x,A)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.width,t.height,t.widthSegments,t.heightSegments)}}class ci extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new y,d=new y,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const M=[],w=m/n,b=o+w*a,x=t*Math.cos(b),A=Math.sqrt(t*t-x*x);let _=0;m===0&&o===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let T=0;T<=e;T++){const N=T/e,C=s+N*r;u.x=-A*Math.cos(C),u.y=x,u.z=A*Math.sin(C),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(N+_,1-w),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){const w=h[m][M+1],b=h[m][M],x=h[m+1][M],A=h[m+1][M+1];(m!==0||o>0)&&f.push(w,b,A),(m!==n-1||l<Math.PI)&&f.push(b,x,A)}this.setIndex(f),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(v,3)),this.setAttribute("uv",new ie(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function zs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Iu(s))s.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Iu(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function dn(i){const t={};for(let e=0;e<i.length;e++){const n=zs(i[e]);for(const s in n)t[s]=n[s]}return t}function Iu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Am(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Bf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const Rm={clone:zs,merge:dn};var Cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cm,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zs(t.uniforms),this.uniformsGroups=Am(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ut().setHex(s.value);break;case"v2":this.uniforms[n].value=new kt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new y().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new $t().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Lm extends xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mn extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gn extends mn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new kt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Ns('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Ns('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class zf extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Im extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Fi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function _r(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Dm(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Du(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)s[o++]=i[a+l]}return s}function Nm(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}class Vs{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Um extends Vs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kh,endingEnd:Kh}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zh:r=t,a=2*e-n;break;case $h:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zh:o=t,l=2*n-e;break;case $h:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,p=v*g,m=-d*p+2*d*v-d*g,M=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,w=(-1-f)*p+(1.5+f)*v+.5*g,b=f*p-f*v;for(let x=0;x!==a;++x)r[x]=m*o[h+x]+M*o[c+x]+w*o[l+x]+b*o[u+x];return r}}class Fm extends Vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class Om extends Vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class km extends Vs{interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){const g=(n-e)/(s-e),v=1-g;for(let p=0;p!==a;++p)r[p]=o[c+p]*v+o[l+p]*g;return r}const d=a*2,f=t-1;for(let g=0;g!==a;++g){const v=o[c+g],p=o[l+g],m=f*d+g*2,M=u[m],w=u[m+1],b=t*d+g*2,x=h[b],A=h[b+1],_=zm(n,e,M,x,s);r[g]=Hf(_,v,w,A,p)}return r}}function Hf(i,t,e,n,s){const r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Bm(i,t,e,n,s){const r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function zm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){const a=Hf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;const l=Bm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}class $n{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fi(e,this.TimeBufferType),this.values=Fi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Fi(t.times,Array),values:Fi(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),_r(t.settings)&&(n.settings={inTangents:Fi(t.settings.inTangents,Array),outTangents:Fi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Om(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Um(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new km(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Dr:e=this.InterpolantFactoryMethodDiscrete;break;case Nr:e=this.InterpolantFactoryMethodLinear;break;case Ia:e=this.InterpolantFactoryMethodSmooth;break;case Yh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return Ia;case this.InterpolantFactoryMethodBezier:return Yh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;_r(this.settings)&&(Nu(this.settings.inTangents,t),Nu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;_r(this.settings)&&(Uu(this.settings.inTangents,t),Uu(this.settings.outTangents,t))}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){ee("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ee("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&D0(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){ee("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ia,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=e[u+g];if(v!==e[d+g]||v!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,_r(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}}function Nu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Uu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Nr;class Ws extends $n{constructor(t,e,n){super(t,e,n)}}Ws.prototype.ValueTypeName="bool";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=Dr;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Gf extends $n{constructor(t,e,n,s){super(t,e,n,s)}}Gf.prototype.ValueTypeName="color";class kr extends $n{constructor(t,e,n,s){super(t,e,n,s)}}kr.prototype.ValueTypeName="number";class Hm extends Vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e);let c=t*a;for(let h=c+a;c!==h;c+=4)ve.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Br extends $n{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Hm(this.times,this.values,this.getValueSize(),t)}}Br.prototype.ValueTypeName="quaternion";Br.prototype.InterpolantFactoryMethodSmooth=void 0;class Xs extends $n{constructor(t,e,n){super(t,e,n)}}Xs.prototype.ValueTypeName="string";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=Dr;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;class ua extends $n{constructor(t,e,n,s){super(t,e,n,s)}}ua.prototype.ValueTypeName="vector";class Gm{constructor(t="",e=-1,n=[],s=S0){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=ui(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Wm(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push($n.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Dm(l);l=Du(l,1,h),c=Du(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new kr(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function Vm(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return kr;case"vector":case"vector2":case"vector3":case"vector4":return ua;case"color":return Gf;case"quaternion":return Br;case"bool":case"boolean":return Ws;case"string":return Xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Wm(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Vm(i.type);if(i.times===void 0){const n=[],s=[];Nm(i.keys,n,s,"value"),i.times=n,i.values=s}let e;return t.parse!==void 0?e=t.parse(i):e=new t(i.name,i.times,i.values,i.interpolation),_r(i.settings)&&(e.settings={inTangents:Fi(i.settings.inTangents,Float32Array),outTangents:Fi(i.settings.outTangents,Float32Array)}),e}const Si={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Fu(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Fu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Fu(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Xm{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const qm=new Xm;class qs{constructor(t){this.manager=t!==void 0?t:qm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}qs.DEFAULT_MATERIAL_NAME="__DEFAULT";const xi={};class Ym extends Error{constructor(t,e){super(t),this.response=e}}class Vf extends qs{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Si.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(xi[t]!==void 0){xi[t].push({onLoad:e,onProgress:n,onError:s});return}xi[t]=[],xi[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&qt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=xi[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const p=new ReadableStream({start(m){M();function M(){u.read().then(({done:w,value:b})=>{if(w)m.close();else{v+=b.byteLength;const x=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let A=0,_=h.length;A<_;A++){const T=h[A];T.onProgress&&T.onProgress(x)}m.enqueue(b),M()}},w=>{m.error(w)})}}});return new Response(p)}else throw new Ym(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Si.add(`file:${t}`,c);const h=xi[t];delete xi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=xi[t];if(h===void 0)throw this.manager.itemError(t),c;delete xi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const bs=new WeakMap;class Km extends qs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Si.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=bs.get(o);u===void 0&&(u=[],bs.set(o,u)),u.push({onLoad:e,onError:s})}return o}const a=Fr("img");function l(){h(),e&&e(this);const u=bs.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}bs.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),Si.remove(`image:${t}`);const d=bs.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}bs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Si.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class Zm extends qs{constructor(t){super(t)}load(t,e,n,s){const r=new qe,o=new Km(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class ya extends De{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class $m extends ya{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ol=new $t,Ou=new y,ku=new y;class ph{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Ou.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ou),ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ku),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ol,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ur||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yo=new y,Mo=new ve,Jn=new y;class Wf extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(yo,Mo,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,Mo,Jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(yo,Mo,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,Mo,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Di=new y,Bu=new kt,zu=new kt;class vn extends Wf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,Bu,zu),e.subVectors(zu,Bu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Jm extends ph{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Bs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class jm extends ya{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Jm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Qm extends ph{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}}class tg extends ya{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ma extends Wf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class eg extends ph{constructor(){super(new Ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mh extends ya{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new eg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Er{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const al=new WeakMap;class ng extends qs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&qt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&qt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Si.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{al.has(o)===!0?(s&&s(al.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}const a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Si.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),al.set(l,c),Si.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Si.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ws=-90,Ts=1;class Ec extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(ws,Ts,t,e);s.layers=this.layers,this.add(s);const r=new vn(ws,Ts,t,e);r.layers=this.layers,this.add(r);const o=new vn(ws,Ts,t,e);o.layers=this.layers,this.add(o);const a=new vn(ws,Ts,t,e);a.layers=this.layers,this.add(a);const l=new vn(ws,Ts,t,e);l.layers=this.layers,this.add(l);const c=new vn(ws,Ts,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ig extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class sg{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=rg.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function rg(){this._document.hidden===!1&&this.reset()}const gh="\\[\\]\\.:\\/",og=new RegExp("["+gh+"]","g"),_h="[^"+gh+"]",ag="[^"+gh.replace("\\.","")+"]",lg=/((?:WC+[\/:])*)/.source.replace("WC",_h),cg=/(WCOD+)?/.source.replace("WCOD",ag),hg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_h),ug=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_h),dg=new RegExp("^"+lg+cg+hg+ug+"$"),fg=["material","materials","bones","map"];class pg{constructor(t,e,n){const s=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Te{constructor(t,e,n){this.path=e,this.parsedPath=n||Te.parseTrackName(e),this.node=Te.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Te.Composite(t,e,n):new Te(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(og,"")}static parseTrackName(t){const e=dg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);fg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=Te.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[s];if(o===void 0){const c=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Te.Composite=pg;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Hu=new $t;class Xf{constructor(t,e,n=0,s=1/0){this.ray=new Gs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new oh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ee("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hu),this}intersectObject(t,e=!0,n=[]){return Ac(t,this,n,e),n.sort(Gu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ac(t[s],this,n,e);return n.sort(Gu),n}}function Gu(i,t){return i.distance-t.distance}function Ac(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ac(r[o],t,e,!0)}}class Rc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=le(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(le(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ni=new y,So=new $t,ll=new $t;class mg extends ha{constructor(t){const e=qf(t),n=new Me,s=[],r=[];for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new ie(s,3)),n.setAttribute("color",new ie(r,3));const o=new xa({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;const a=new Ut(255),l=new Ut(65280);this.setColors(a,l)}updateMatrixWorld(t){const e=this.bones,n=this.geometry,s=n.getAttribute("position");ll.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){const a=e[r];a.parent&&a.parent.isBone&&(So.multiplyMatrices(ll,a.matrixWorld),Ni.setFromMatrixPosition(So),s.setXYZ(o,Ni.x,Ni.y,Ni.z),So.multiplyMatrices(ll,a.parent.matrixWorld),Ni.setFromMatrixPosition(So),s.setXYZ(o+1,Ni.x,Ni.y,Ni.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){const s=this.geometry.getAttribute("color");for(let r=0;r<s.count;r+=2)s.setXYZ(r,t.r,t.g,t.b),s.setXYZ(r+1,e.r,e.g,e.b);return s.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function qf(i){const t=[];i.isBone===!0&&t.push(i);for(let e=0;e<i.children.length;e++)t.push(...qf(i.children[e]));return t}class gg extends Xi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Vu(i,t,e,n){const s=_g(n);switch(e){case Sf:return i*t;case jc:return i*t/s.components*s.byteLength;case Qc:return i*t/s.components*s.byteLength;case as:return i*t*2/s.components*s.byteLength;case th:return i*t*2/s.components*s.byteLength;case bf:return i*t*3/s.components*s.byteLength;case Vn:return i*t*4/s.components*s.byteLength;case eh:return i*t*4/s.components*s.byteLength;case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yo:case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yl:case Zl:return Math.max(i,16)*Math.max(t,8)/4;case ql:case Kl:return Math.max(i,8)*Math.max(t,8)/2;case $l:case Jl:case Ql:case tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jl:case ia:case ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ic:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case sc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case rc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ac:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case pc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case mc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case gc:case _c:case vc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xc:case yc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sa:case Mc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _g(i){switch(i){case An:case vf:return{byteLength:1,components:1};case Ir:case xf:case yn:return{byteLength:2,components:1};case $c:case Jc:return{byteLength:2,components:4};case qn:case Zc:case Nn:return{byteLength:4,components:1};case yf:case Mf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wc}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wc);function Yf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function vg(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var xg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ag=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ig=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Dg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Gg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,e_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,h_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,u_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,g_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,__=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,x_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y_=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,M_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,I_=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,U_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,O_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,H_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,G_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,K_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ev=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ov=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,av=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_v=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mv=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ev=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Av=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ov=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$v=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:xg,alphahash_pars_fragment:yg,alphamap_fragment:Mg,alphamap_pars_fragment:Sg,alphatest_fragment:bg,alphatest_pars_fragment:wg,aomap_fragment:Tg,aomap_pars_fragment:Eg,batching_pars_vertex:Ag,batching_vertex:Rg,begin_vertex:Cg,beginnormal_vertex:Pg,bsdfs:Lg,iridescence_fragment:Ig,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Ng,clipping_planes_pars_fragment:Ug,clipping_planes_pars_vertex:Fg,clipping_planes_vertex:Og,color_fragment:kg,color_pars_fragment:Bg,color_pars_vertex:zg,color_vertex:Hg,common:Gg,defaultnormal_vertex:Vg,displacementmap_pars_vertex:Wg,displacementmap_vertex:Xg,emissivemap_fragment:qg,emissivemap_pars_fragment:Yg,colorspace_fragment:Kg,colorspace_pars_fragment:Zg,envmap_fragment:$g,envmap_common_pars_fragment:Jg,envmap_pars_fragment:jg,envmap_pars_vertex:Qg,envmap_physical_pars_fragment:h_,envmap_vertex:t_,fog_vertex:e_,fog_pars_vertex:n_,fog_fragment:i_,fog_pars_fragment:s_,gradientmap_pars_fragment:r_,lightmap_pars_fragment:o_,lights_lambert_fragment:a_,lights_lambert_pars_fragment:l_,lights_pars_begin:c_,lights_toon_fragment:u_,lights_toon_pars_fragment:d_,lights_phong_fragment:f_,lights_phong_pars_fragment:p_,lights_physical_fragment:m_,lights_physical_pars_fragment:g_,lights_fragment_begin:__,lights_fragment_maps:v_,lights_fragment_end:x_,lightprobes_pars_fragment:y_,logdepthbuf_fragment:M_,logdepthbuf_pars_fragment:S_,logdepthbuf_pars_vertex:b_,logdepthbuf_vertex:w_,map_fragment:T_,map_pars_fragment:E_,map_particle_fragment:A_,map_particle_pars_fragment:R_,metalnessmap_fragment:C_,metalnessmap_pars_fragment:P_,morphinstance_vertex:L_,morphcolor_vertex:I_,morphnormal_vertex:D_,morphtarget_pars_vertex:N_,morphtarget_vertex:U_,normal_fragment_begin:F_,normal_fragment_maps:O_,normal_pars_fragment:k_,normal_pars_vertex:B_,normal_vertex:z_,normalmap_pars_fragment:H_,clearcoat_normal_fragment_begin:G_,clearcoat_normal_fragment_maps:V_,clearcoat_pars_fragment:W_,iridescence_pars_fragment:X_,opaque_fragment:q_,packing:Y_,premultiplied_alpha_fragment:K_,project_vertex:Z_,dithering_fragment:$_,dithering_pars_fragment:J_,roughnessmap_fragment:j_,roughnessmap_pars_fragment:Q_,shadowmap_pars_fragment:tv,shadowmap_pars_vertex:ev,shadowmap_vertex:nv,shadowmask_pars_fragment:iv,skinbase_vertex:sv,skinning_pars_vertex:rv,skinning_vertex:ov,skinnormal_vertex:av,specularmap_fragment:lv,specularmap_pars_fragment:cv,tonemapping_fragment:hv,tonemapping_pars_fragment:uv,transmission_fragment:dv,transmission_pars_fragment:fv,uv_pars_fragment:pv,uv_pars_vertex:mv,uv_vertex:gv,worldpos_vertex:_v,background_vert:vv,background_frag:xv,backgroundCube_vert:yv,backgroundCube_frag:Mv,cube_vert:Sv,cube_frag:bv,depth_vert:wv,depth_frag:Tv,distance_vert:Ev,distance_frag:Av,equirect_vert:Rv,equirect_frag:Cv,linedashed_vert:Pv,linedashed_frag:Lv,meshbasic_vert:Iv,meshbasic_frag:Dv,meshlambert_vert:Nv,meshlambert_frag:Uv,meshmatcap_vert:Fv,meshmatcap_frag:Ov,meshnormal_vert:kv,meshnormal_frag:Bv,meshphong_vert:zv,meshphong_frag:Hv,meshphysical_vert:Gv,meshphysical_frag:Vv,meshtoon_vert:Wv,meshtoon_frag:Xv,points_vert:qv,points_frag:Yv,shadow_vert:Kv,shadow_frag:Zv,sprite_vert:$v,sprite_frag:Jv},It={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},ii={basic:{uniforms:dn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:dn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:dn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:dn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:dn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Ut(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:dn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:dn([It.points,It.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:dn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:dn([It.common,It.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:dn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:dn([It.sprite,It.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:dn([It.common,It.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:dn([It.lights,It.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};ii.physical={uniforms:dn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const bo={r:0,b:0,g:0},jv=new $t,Kf=new jt;Kf.set(-1,0,0,0,1,0,0,0,1);function Qv(i,t,e,n,s,r){const o=new Ut(0);let a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const b=M.backgroundBlurriness>0;w=t.get(w,b)}return w}function g(M){let w=!1;const b=f(M);b===null?p(o,a):b&&b.isColor&&(p(b,1),w=!0);const x=i.xr.getEnvironmentBlendMode();x==="additive"?e.buffers.color.setClear(0,0,0,1,r):x==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,w){const b=f(w);b&&b.isCubeTexture?(c===void 0&&(c=new me(new Wr(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:zs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jv.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Kf),c.material.toneMapped=de.getTransfer(b.colorSpace)!==we,(h!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new me(new us(2,2),new xn({name:"BackgroundMaterial",uniforms:zs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=de.getTransfer(b.colorSpace)!==we,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,w){M.getRGB(bo,Bf(i)),e.buffers.color.setClear(bo.r,bo.g,bo.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:g,addToRenderList:v,dispose:m}}function tx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(P,L,F,E,D){let U=!1;const O=u(P,E,F,L);r!==O&&(r=O,c(r.object)),U=f(P,E,F,D),U&&g(P,E,F,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,b(P,L,F,E),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,L,F,E){const D=E.wireframe===!0;let U=n[L.id];U===void 0&&(U={},n[L.id]=U);const O=P.isInstancedMesh===!0?P.id:0;let Y=U[O];Y===void 0&&(Y={},U[O]=Y);let H=Y[F.id];H===void 0&&(H={},Y[F.id]=H);let G=H[D];return G===void 0&&(G=d(l()),H[D]=G),G}function d(P){const L=[],F=[],E=[];for(let D=0;D<e;D++)L[D]=0,F[D]=0,E[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:E,object:P,attributes:{},index:null}}function f(P,L,F,E){const D=r.attributes,U=L.attributes;let O=0;const Y=F.getAttributes();for(const H in Y)if(Y[H].location>=0){const K=D[H];let ot=U[H];if(ot===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(ot=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(ot=P.instanceColor)),K===void 0||K.attribute!==ot||ot&&K.data!==ot.data)return!0;O++}return r.attributesNum!==O||r.index!==E}function g(P,L,F,E){const D={},U=L.attributes;let O=0;const Y=F.getAttributes();for(const H in Y)if(Y[H].location>=0){let K=U[H];K===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));const ot={};ot.attribute=K,K&&K.data&&(ot.data=K.data),D[H]=ot,O++}r.attributes=D,r.attributesNum=O,r.index=E}function v(){const P=r.newAttributes;for(let L=0,F=P.length;L<F;L++)P[L]=0}function p(P){m(P,0)}function m(P,L){const F=r.newAttributes,E=r.enabledAttributes,D=r.attributeDivisors;F[P]=1,E[P]===0&&(i.enableVertexAttribArray(P),E[P]=1),D[P]!==L&&(i.vertexAttribDivisor(P,L),D[P]=L)}function M(){const P=r.newAttributes,L=r.enabledAttributes;for(let F=0,E=L.length;F<E;F++)L[F]!==P[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function w(P,L,F,E,D,U,O){O===!0?i.vertexAttribIPointer(P,L,F,D,U):i.vertexAttribPointer(P,L,F,E,D,U)}function b(P,L,F,E){v();const D=E.attributes,U=F.getAttributes(),O=L.defaultAttributeValues;for(const Y in U){const H=U[Y];if(H.location>=0){let G=D[Y];if(G===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){const K=G.normalized,ot=G.itemSize,Q=t.get(G);if(Q===void 0)continue;const k=Q.buffer,Z=Q.type,q=Q.bytesPerElement,st=Z===i.INT||Z===i.UNSIGNED_INT||G.gpuType===Zc;if(G.isInterleavedBufferAttribute){const W=G.data,j=W.isInterleavedBuffer===!0?W.stride:W.itemSize,ft=G.offset;if(W.isInstancedInterleavedBuffer||W.isInstancedBufferAttribute){for(let dt=0;dt<H.locationSize;dt++)m(H.location+dt,W.meshPerAttribute);P.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let dt=0;dt<H.locationSize;dt++)p(H.location+dt);i.bindBuffer(i.ARRAY_BUFFER,k);for(let dt=0;dt<H.locationSize;dt++)w(H.location+dt,ot/H.locationSize,Z,K,j*q,(ft+ot/H.locationSize*dt)*q,st)}else{if(G.isInstancedBufferAttribute){for(let W=0;W<H.locationSize;W++)m(H.location+W,G.meshPerAttribute);P.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let W=0;W<H.locationSize;W++)p(H.location+W);i.bindBuffer(i.ARRAY_BUFFER,k);for(let W=0;W<H.locationSize;W++)w(H.location+W,ot/H.locationSize,Z,K,ot*q,ot/H.locationSize*W*q,st)}}else if(O!==void 0){const K=O[Y];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(H.location,K);break;case 3:i.vertexAttrib3fv(H.location,K);break;case 4:i.vertexAttrib4fv(H.location,K);break;default:i.vertexAttrib1fv(H.location,K)}}}}M()}function x(){N();for(const P in n){const L=n[P];for(const F in L){const E=L[F];for(const D in E){const U=E[D];for(const O in U)h(U[O].object),delete U[O];delete E[D]}}delete n[P]}}function A(P){if(n[P.id]===void 0)return;const L=n[P.id];for(const F in L){const E=L[F];for(const D in E){const U=E[D];for(const O in U)h(U[O].object),delete U[O];delete E[D]}}delete n[P.id]}function _(P){for(const L in n){const F=n[L];for(const E in F){const D=F[E];if(D[P.id]===void 0)continue;const U=D[P.id];for(const O in U)h(U[O].object),delete U[O];delete D[P.id]}}}function T(P){for(const L in n){const F=n[L],E=P.isInstancedMesh===!0?P.id:0,D=F[E];if(D!==void 0){for(const U in D){const O=D[U];for(const Y in O)h(O[Y].object),delete O[Y];delete D[U]}delete F[E],Object.keys(F).length===0&&delete n[L]}}}function N(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:C,dispose:x,releaseStatesOfGeometry:A,releaseStatesOfObject:T,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function ex(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function nx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Vn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){const T=_===yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==An&&_!==Nn&&!T&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&qt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:b,maxSamples:x,samples:A}}function ix(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new En,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const M=r?0:n,w=M*4;let b=m.clippingState||null;l.value=b,b=h(g,d,w,f);for(let x=0;x!==w;++x)b[x]=e[x];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=f+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,b=f;w!==v;++w,b+=4)o.copy(u[w]).applyMatrix4(M,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}class vh extends ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ff(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Wr(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Ds});r.uniforms.tEquirect.value=e;const o=new me(s,r),a=e.minFilter;return e.minFilter===ri&&(e.minFilter=Qe),new Ec(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Wu=256,sx=3,rx=20,Zf=256,$f=16,ox=3,ax=new y,lx=new Ut;class zr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ec(1,10,null),this._boxMesh=new me(new Wr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=ax}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(lx));const p=new Ec(n,s,h);return p.position.copy(a),p.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Wu,Pf(t))}_fromTexture(t,e){t.mapping===Os||t.mapping===Lr?this._setSize(t.image.length===0?Wu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Xu(t,!1,!1),n=Math.log2(t)-sx;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Xu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Os||t.mapping===Lr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=qu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=cx(),this._integrationMaterial=hx());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/$f);for(let o=0;o<=n;o++){const a=zr.lodToRoughness(o,n);if(o>n-ox)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(Zf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=ux());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function Xu(i,t,e){return new vh(i,{minFilter:ri,generateMipmaps:t,type:yn,colorSpace:Mn,depthBuffer:e})}function qr(i,t,e){return new xn({name:i,uniforms:t,vertexShader:he.cube_vert,fragmentShader:e,side:pn,blending:Ds,depthTest:!1,depthWrite:!1})}function cx(){return qr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Zf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function hx(){return qr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$f}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ux(){return qr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${rx}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function qu(){return qr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Yu(){return qr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function dx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Pa||f===La)if(t.has(d)){const g=t.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new vh(g.height);return v.fromEquirectangularTexture(i,d),t.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,g=f===Pa||f===La,v=f===Os||f===Lr;if(g||v){let p=e.get(d);const m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new zr(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const M=d.image;return g&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new zr(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===Pa?d.mapping=Os:f===La&&(d.mapping=Lr),d}function l(d){let f=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){const f=d.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function fx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ns("WebGLRenderer: "+n+" extension not supported."),s}}}function px(i,t,e,n){const s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(const p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);const v=r.get(g);v&&(t.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),e.memory.geometries++),v}function h(g){const v=g.attributes;for(const p in v)t.update(v[p],i.ARRAY_BUFFER)}function u(g){const v=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const M=v!==null?v.array.length:p.array.length/3-1,w=p.count>=65535?Df:ga,b=new w(Math.ceil(M/3)*6,1),x=b.array;if(v!==null){const _=v.array;m=v.version;for(let T=0,N=0;T<M;T+=3){const C=_[T+0],P=_[T+1],L=_[T+2];x[N++]=C,x[N++]=P,x[N++]=P,x[N++]=L,x[N++]=L,x[N++]=C}}else{m=p.version;for(let _=0,T=0;_<M;_+=3){const N=_+0,C=_+1,P=_+2;x[T++]=N,x[T++]=C,x[T++]=C,x[T++]=P,x[T++]=P,x[T++]=N}}b.version=m;const A=r.get(g);A&&t.remove(A),r.set(g,b)}function d(g){const v=r.get(g);if(v){const p=g.index;p!==null&&v.version<p.version&&u(g)}else u(g);return r.get(g)}function f(){for(const g in s){const v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function mx(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let p=0;p<f;p++)v+=d[p];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function gx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _x(i,t,e){const n=new WeakMap,s=new Ae;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let C=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",C)};var f=C;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),p===!0&&(b=3);let x=a.attributes.position.count*b,A=1;x>t.maxTextureSize&&(A=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const _=new Float32Array(x*A*4*u),T=new Lf(_,x,A,u);T.type=Nn,T.needsUpdate=!0;const N=b*4;for(let P=0;P<u;P++){const L=m[P],F=M[P],E=w[P],D=x*A*4*P;for(let U=0;U<L.count;U++){const O=U*N;g===!0&&(s.fromBufferAttribute(L,U),_[D+O+0]=s.x,_[D+O+1]=s.y,_[D+O+2]=s.z,_[D+O+3]=0),v===!0&&(s.fromBufferAttribute(F,U),_[D+O+4]=s.x,_[D+O+5]=s.y,_[D+O+6]=s.z,_[D+O+7]=0),p===!0&&(s.fromBufferAttribute(E,U),_[D+O+8]=s.x,_[D+O+9]=s.y,_[D+O+10]=s.z,_[D+O+11]=E.itemSize===4?s.w:1)}}d={count:u,texture:T,size:new kt(x,A)},n.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function vx(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const xx={[ff]:"LINEAR_TONE_MAPPING",[Xc]:"REINHARD_TONE_MAPPING",[pf]:"CINEON_TONE_MAPPING",[qc]:"ACES_FILMIC_TONE_MAPPING",[Yc]:"AGX_TONE_MAPPING",[Kc]:"NEUTRAL_TONE_MAPPING",[mf]:"CUSTOM_TONE_MAPPING"};function yx(i,t,e,n,s,r){const o=new ln(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new Me;h.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ie([0,2,0,0,2,0],2));const u=new Lm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new me(h,u),f=new Ma(-1,1,1,-1,0,1);let g=null,v=null,p=!1,m,M=null,w=[],b=!1;this.setSize=function(x,A){o.setSize(x,A),a!==null&&a.setSize(x,A),l!==null&&l.setSize(x,A);for(let _=0;_<w.length;_++){const T=w[_];T.setSize&&T.setSize(x,A)}},this.setEffects=function(x){w=x,b=w.length>0&&w[0].isRenderPass===!0;const A=o.width,_=o.height;w.length>0&&a===null&&(a=new ln(A,_,{type:yn,depthBuffer:!1,stencilBuffer:!1}),l=new ln(A,_,{type:yn,depthBuffer:!1,stencilBuffer:!1}));const T=s===!0&&w.some(N=>N.needsDepthTexture===!0);T!==(o.depthTexture!==null)&&(T===!0&&c===null&&(c=new ls(A,_),r===!0&&(c.format=Hi,c.type=ks)),o.dispose(),o.depthTexture=T?c:null,o.resolveDepthBuffer=T,o.storeMultisampledDepthBuffer=T);for(let N=0;N<w.length;N++){const C=w[N];C.setSize&&C.setSize(A,_),T&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(x,A){if(p||x.toneMapping===oi&&w.length===0)return!1;if(M=A,A!==null){const _=A.width,T=A.height;(o.width!==_||o.height!==T)&&this.setSize(_,T)}return b===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=oi,!0},this.hasRenderPass=function(){return b},this.end=function(x,A){x.toneMapping=m,p=!0;let _=o,T=a;for(let N=0;N<w.length;N++){const C=w[N];C.enabled!==!1&&(C.render(x,T,_,A),C.needsSwap!==!1&&(_=T,T=T===a?l:a))}if(g!==x.outputColorSpace||v!==x.toneMapping){g=x.outputColorSpace,v=x.toneMapping,u.defines={},de.getTransfer(g)===we&&(u.defines.SRGB_TRANSFER="");const N=xx[v];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,x.setRenderTarget(M),x.render(d,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const Jf=new qe,jf=new ls(1,1),Qf=new Of(1),tp=new Lf,ep=new im,np=new Ff,Ku=[],Zu=[],$u=new Float32Array(16),Ju=new Float32Array(9),ju=new Float32Array(4);function Ys(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ku[s];if(r===void 0&&(r=new Float32Array(s),Ku[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Sa(i,t){let e=Zu[t];e===void 0&&(e=new Int32Array(t),Zu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function bx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function wx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function Tx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Ye(e,n))return;ju.set(n),i.uniformMatrix2fv(this.addr,!1,ju),Ke(e,n)}}function Ex(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Ye(e,n))return;Ju.set(n),i.uniformMatrix3fv(this.addr,!1,Ju),Ke(e,n)}}function Ax(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Ye(e,n))return;$u.set(n),i.uniformMatrix4fv(this.addr,!1,$u),Ke(e,n)}}function Rx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function Px(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function Lx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function Ix(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function Nx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function Ux(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function ba(i){return i.version===0&&(i.compareFunction=Af,i.needsUpdate=!0),i}function Fx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ba(jf):r=Jf,e.setTexture2D(t||r,s)}function Ox(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ep,s)}function kx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ba(Qf):r=np,e.setTextureCube(t||r,s)}function Bx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||tp,s)}function zx(i){switch(i){case 5126:return Mx;case 35664:return Sx;case 35665:return bx;case 35666:return wx;case 35674:return Tx;case 35675:return Ex;case 35676:return Ax;case 5124:case 35670:return Rx;case 35667:case 35671:return Cx;case 35668:case 35672:return Px;case 35669:case 35673:return Lx;case 5125:return Ix;case 36294:return Dx;case 36295:return Nx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Fx;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return Bx}}function Hx(i,t){i.uniform1fv(this.addr,t)}function Gx(i,t){const e=Ys(t,this.size,2);i.uniform2fv(this.addr,e)}function Vx(i,t){const e=Ys(t,this.size,3);i.uniform3fv(this.addr,e)}function Wx(i,t){const e=Ys(t,this.size,4);i.uniform4fv(this.addr,e)}function Xx(i,t){const e=Ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qx(i,t){const e=Ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yx(i,t){const e=Ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Kx(i,t){i.uniform1iv(this.addr,t)}function Zx(i,t){i.uniform2iv(this.addr,t)}function $x(i,t){i.uniform3iv(this.addr,t)}function Jx(i,t){i.uniform4iv(this.addr,t)}function jx(i,t){i.uniform1uiv(this.addr,t)}function Qx(i,t){i.uniform2uiv(this.addr,t)}function ty(i,t){i.uniform3uiv(this.addr,t)}function ey(i,t){i.uniform4uiv(this.addr,t)}function ny(i,t,e){const n=this.cache,s=t.length,r=Sa(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ba(jf):o=Jf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function iy(i,t,e){const n=this.cache,s=t.length,r=Sa(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ep,r[o])}function sy(i,t,e){const n=this.cache,s=t.length,r=Sa(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=ba(Qf):o=np;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function ry(i,t,e){const n=this.cache,s=t.length,r=Sa(e,s);Ye(n,r)||(i.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||tp,r[o])}function oy(i){switch(i){case 5126:return Hx;case 35664:return Gx;case 35665:return Vx;case 35666:return Wx;case 35674:return Xx;case 35675:return qx;case 35676:return Yx;case 5124:case 35670:return Kx;case 35667:case 35671:return Zx;case 35668:case 35672:return $x;case 35669:case 35673:return Jx;case 5125:return jx;case 36294:return Qx;case 36295:return ty;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ry}}class ay{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zx(e.type)}}class ly{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=oy(e.type)}}class cy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const cl=/(\w+)(\])?(\[|\.)?/g;function Qu(i,t){i.seq.push(t),i.map[t.id]=t}function hy(i,t,e){const n=i.name,s=n.length;for(cl.lastIndex=0;;){const r=cl.exec(n),o=cl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Qu(e,c===void 0?new ay(a,i,t):new ly(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new cy(a),Qu(e,u)),e=u}}}class Zo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);hy(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function td(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const uy=37297;let dy=0;function fy(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ed=new jt;function py(i){de._getMatrix(ed,de.workingColorSpace,i);const t=`mat3( ${ed.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case ra:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function nd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+fy(i.getShaderSource(t),a)}else return r}function my(i,t){const e=py(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const gy={[ff]:"Linear",[Xc]:"Reinhard",[pf]:"Cineon",[qc]:"ACESFilmic",[Yc]:"AgX",[Kc]:"Neutral",[mf]:"Custom"};function _y(i,t){const e=gy[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wo=new y;function vy(){de.getLuminanceCoefficients(wo);const i=wo.x.toFixed(4),t=wo.y.toFixed(4),e=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function yy(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function My(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function vr(i){return i!==""}function id(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function sd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(i){return i.replace(Sy,by)}function by(i,t){const e=he[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Cc(e)}const wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rd(i){return i.replace(wy,Ty)}function Ty(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function od(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Ey={[Sr]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function Ay(i){return Ey[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ry={[Lr]:"ENVMAP_MODE_REFRACTION"};function Cy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ry[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Py={[df]:"ENVMAP_BLENDING_MULTIPLY",[x0]:"ENVMAP_BLENDING_MIX",[y0]:"ENVMAP_BLENDING_ADD"};function Ly(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Py[i.combine]||"ENVMAP_BLENDING_NONE"}function Iy(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Ay(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Cy(e),u=Ly(e),d=xy(e),f=yy(r),g=s.createProgram();let v,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(vr).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(vr).join(`
`),p.length>0&&(p+=`
`)):(v=[od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),p=[od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?he.tonemapping_pars_fragment:"",e.toneMapping!==oi?_y("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,my("linearToOutputTexel",e.outputColorSpace),vy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vr).join(`
`)),o=Cc(o),o=id(o,e),o=sd(o,e),a=Cc(a),a=id(a,e),a=sd(a,e),o=rd(o),a=rd(a),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=m+v+o,w=m+p+a,b=td(s,s.VERTEX_SHADER,M),x=td(s,s.FRAGMENT_SHADER,w);s.attachShader(g,b),s.attachShader(g,x),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(C){if(i.debug.checkShaderErrors){const P=s.getProgramInfoLog(g)||"",L=s.getShaderInfoLog(b)||"",F=s.getShaderInfoLog(x)||"",E=P.trim(),D=L.trim(),U=F.trim();let O=!0,Y=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,b,x);else{const H=nd(s,b,"vertex"),G=nd(s,x,"fragment");ee("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+E+`
`+H+`
`+G)}else E!==""?qt("WebGLProgram: Program Info Log:",E):(D===""||U==="")&&(Y=!1);Y&&(C.diagnostics={runnable:O,programLog:E,vertexShader:{log:D,prefix:v},fragmentShader:{log:U,prefix:p}})}s.deleteShader(b),s.deleteShader(x),_=new Zo(s,g),T=My(s,g)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,uy)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dy++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=x,this}let Dy=0;class Ny{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Uy(t),e.set(t,n)),n}}class Uy{constructor(t){this.id=Dy++,this.code=t,this.usedTimes=0}}function Fy(i){return i===as||i===ia||i===sa}function Oy(i,t,e,n,s,r){const o=new oh,a=new Ny,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,T,N,C,P,L){const F=C.fog,E=P.geometry,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=t.get(_.envMap||D,U),Y=d[_.type];let H=n.precision;_.precision!==null&&(H=n.getMaxPrecision(_.precision),H!==_.precision&&qt("WebGLProgram.getParameters:",_.precision,"not supported, using",H,"instead."));const G=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,K=G!==void 0?G.length:0;let ot=0;E.morphAttributes.position!==void 0&&(ot=1),E.morphAttributes.normal!==void 0&&(ot=2),E.morphAttributes.color!==void 0&&(ot=3);let Q,k,Z,q;if(Y){const Lt=ii[Y];Q=Lt.vertexShader,k=Lt.fragmentShader}else{Q=_.vertexShader,k=_.fragmentShader;const Lt=a.getVertexShaderStage(_),be=a.getFragmentShaderStage(_);a.update(_,Lt,be),Z=Lt.id,q=be.id}const st=i.getRenderTarget(),W=i.state.buffers.depth.getReversed(),j=P.isInstancedMesh===!0,ft=P.isBatchedMesh===!0,dt=!!_.map,Dt=!!_.matcap,Ft=!!O,Et=Ft&&O.isPMREMTexture===!0,Yt=!!_.aoMap,Gt=!!_.lightMap,Xt=!!_.bumpMap&&_.wireframe===!1,mt=!!_.normalMap,ut=!!_.displacementMap,Kt=!!_.emissiveMap,se=!!_.metalnessMap,oe=!!_.roughnessMap,te=_.anisotropy>0,V=_.clearcoat>0,Se=_.diffuseRoughness>0,Qt=_.dispersion>0,ge=_.retroreflectivity>0,gt=_.iridescence>0,Vt=_.sheen>0,Mt=_.transmission>0,Pt=te&&!!_.anisotropyMap,I=V&&!!_.clearcoatMap,S=V&&!!_.clearcoatNormalMap,X=V&&!!_.clearcoatRoughnessMap,ht=Se&&!!_.diffuseRoughnessMap,at=gt&&!!_.iridescenceMap,_t=gt&&!!_.iridescenceThicknessMap,yt=Vt&&!!_.sheenColorMap,et=Vt&&!!_.sheenRoughnessMap,rt=!!_.specularMap,bt=!!_.specularColorMap,B=!!_.specularIntensityMap,lt=Mt&&!!_.transmissionMap,nt=Mt&&!!_.thicknessMap,wt=!!_.gradientMap,xt=!!_.alphaMap,St=_.alphaTest>0,Zt=!!_.alphaHash,ce=!!_.extensions;let pt=oi;_.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(pt=i.toneMapping);const Jt=Et?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,ae={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:Q,fragmentShader:k,defines:_.defines,customVertexShaderID:Z,customFragmentShaderID:q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:H,batching:ft,batchingColor:ft&&P._colorsTexture!==null,instancing:j,instancingColor:j&&P.instanceColor!==null,instancingMorph:j&&P.morphTexture!==null,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:dt,matcap:Dt,envMap:Ft,envMapMode:Ft&&O.mapping,envMapPMREM:Et,envMapMaxLod:Et?Jt.length-1:null,envMapSize:Et?Jt[0].width:null,aoMap:Yt,lightMap:Gt,bumpMap:Xt,normalMap:mt,displacementMap:ut,emissiveMap:Kt,normalMapObjectSpace:mt&&_.normalMapType===T0,normalMapTangentSpace:mt&&_.normalMapType===bc,packedNormalMap:mt&&_.normalMapType===bc&&Fy(_.normalMap.format),metalnessMap:se,roughnessMap:oe,anisotropy:te,anisotropyMap:Pt,clearcoat:V,clearcoatMap:I,clearcoatNormalMap:S,clearcoatRoughnessMap:X,diffuseRoughness:Se,diffuseRoughnessMap:ht,dispersion:Qt,retroreflection:ge,iridescence:gt,iridescenceMap:at,iridescenceThicknessMap:_t,sheen:Vt,sheenColorMap:yt,sheenRoughnessMap:et,specularMap:rt,specularColorMap:bt,specularIntensityMap:B,transmission:Mt,transmissionMap:lt,thicknessMap:nt,gradientMap:wt,opaque:_.transparent===!1&&_.blending===br&&_.alphaToCoverage===!1,alphaMap:xt,alphaTest:St,alphaHash:Zt,combine:_.combine,mapUv:dt&&f(_.map.channel),aoMapUv:Yt&&f(_.aoMap.channel),lightMapUv:Gt&&f(_.lightMap.channel),bumpMapUv:Xt&&f(_.bumpMap.channel),normalMapUv:mt&&f(_.normalMap.channel),displacementMapUv:ut&&f(_.displacementMap.channel),emissiveMapUv:Kt&&f(_.emissiveMap.channel),metalnessMapUv:se&&f(_.metalnessMap.channel),roughnessMapUv:oe&&f(_.roughnessMap.channel),anisotropyMapUv:Pt&&f(_.anisotropyMap.channel),clearcoatMapUv:I&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ht&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:at&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:et&&f(_.sheenRoughnessMap.channel),specularMapUv:rt&&f(_.specularMap.channel),specularColorMapUv:bt&&f(_.specularColorMap.channel),specularIntensityMapUv:B&&f(_.specularIntensityMap.channel),transmissionMapUv:lt&&f(_.transmissionMap.channel),thicknessMapUv:nt&&f(_.thicknessMap.channel),alphaMapUv:xt&&f(_.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(mt||te),vertexNormals:!!E.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!E.attributes.uv&&(dt||xt),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||E.attributes.normal===void 0&&mt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:W,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:E.attributes.position!==void 0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ot,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:L.filter(Lt=>Lt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,decodeVideoTexture:dt&&_.map.isVideoTexture===!0&&de.getTransfer(_.map.colorSpace)===we,decodeVideoTextureEmissive:Kt&&_.emissiveMap.isVideoTexture===!0&&de.getTransfer(_.emissiveMap.colorSpace)===we,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ze,flipSided:_.side===pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ce&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&_.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function v(_){const T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)T.push(N),T.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(p(T,_),m(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapPMREM),_.push(T.envMapMaxLod),_.push(T.envMapSize),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.diffuseRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.numLightProbeGrids),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function m(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.diffuseRoughness&&o.enable(25),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function M(_){const T=d[_.type];let N;if(T){const C=ii[T];N=Rm.clone(C.uniforms)}else N=_.uniforms;return N}function w(_,T){let N=h.get(T);return N!==void 0?++N.usedTimes:(N=new Iy(i,T,_,s),c.push(N),h.set(T,N)),N}function b(_){if(--_.usedTimes===0){const T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function x(_){a.remove(_)}function A(){a.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:M,acquireProgram:w,releaseProgram:b,releaseShaderCache:x,programs:c,dispose:A}}function ky(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function By(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ad(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ld(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,v,p,m){let M=i[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:m},i[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=o(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=p,M.group=m),t++,M}function l(d,f,g,v,p,m,M){M.reversedDepth===!0&&(p=-p);const w=a(d,f,g,v,p,m);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(d,f,g,v,p,m){const M=a(d,f,g,v,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,f){e.length>1&&e.sort(d||By),n.length>1&&n.sort(f||ad),s.length>1&&s.sort(f||ad)}function u(){for(let d=t,f=i.length;d<f;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function zy(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ld,i.set(n,[o])):s>=r.length?(o=new ld,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Hy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new y,color:new Ut};break;case"SpotLight":e={position:new y,direction:new y,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new y,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new y,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new y,halfWidth:new y,halfHeight:new y};break}return i[t.id]=e,e}}}function Gy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Vy=0;function Wy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Xy(i){const t=new Hy,e=Gy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new y);const s=new y,r=new $t,o=new $t;function a(c){let h=0,u=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,M=0,w=0,b=0,x=0,A=0,_=0,T=0,N=0,C=0;c.sort(Wy);for(let L=0,F=c.length;L<F;L++){const E=c[L],D=E.color,U=E.intensity,O=E.distance;let Y=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===as?Y=E.shadow.map.texture:Y=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)h+=D.r*U,u+=D.g*U,d+=D.b*U;else if(E.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(E.sh.coefficients[H],U);C++}else if(E.isSunLight){const H=t.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const G=E.shadow,K=e.get(E);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[g]=K,n.sunShadowMap[g]=Y;const ot=G.getViewportCount();for(let Q=0;Q<ot;Q++)n.sunShadowMatrix[v+Q]=G.getMatrix(Q),n.sunShadowCascade[v+Q]=G._cascadeData[Q];v+=ot,g++}n.sun[f]=H,f++}else if(E.isDirectionalLight){const H=t.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const G=E.shadow,K=e.get(E);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=E.shadow.matrix,x++}n.directional[p]=H,p++}else if(E.isSpotLight){const H=t.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(D).multiplyScalar(U),H.distance=O,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,n.spot[M]=H;const G=E.shadow;if(E.map&&(n.spotLightMap[T]=E.map,T++,G.updateMatrices(E),E.castShadow&&N++),n.spotLightMatrix[M]=G.matrix,E.castShadow){const K=e.get(E);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,n.spotShadow[M]=K,n.spotShadowMap[M]=Y,_++}M++}else if(E.isRectAreaLight){const H=t.get(E);H.color.copy(D).multiplyScalar(U),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),n.rectArea[w]=H,w++}else if(E.isPointLight){const H=t.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),H.distance=E.distance,H.decay=E.decay,E.castShadow){const G=E.shadow,K=e.get(E);K.shadowIntensity=G.intensity,K.shadowBias=G.bias,K.shadowNormalBias=G.normalBias,K.shadowRadius=G.radius,K.shadowMapSize=G.mapSize,K.shadowCameraNear=G.camera.near,K.shadowCameraFar=G.camera.far,n.pointShadow[m]=K,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=E.shadow.matrix,A++}n.point[m]=H,m++}else if(E.isHemisphereLight){const H=t.get(E);H.skyColor.copy(E.color).multiplyScalar(U),H.groundColor.copy(E.groundColor).multiplyScalar(U),n.hemi[b]=H,b++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.sunLength!==f||P.directionalLength!==p||P.pointLength!==m||P.spotLength!==M||P.rectAreaLength!==w||P.hemiLength!==b||P.numSunShadows!==g||P.numDirectionalShadows!==x||P.numPointShadows!==A||P.numSpotShadows!==_||P.numSpotMaps!==T||P.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=w,n.point.length=m,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.directionalShadowMatrix.length=x,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+T-N,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=C,P.sunLength=f,P.directionalLength=p,P.pointLength=m,P.spotLength=M,P.rectAreaLength=w,P.hemiLength=b,P.numSunShadows=g,P.numDirectionalShadows=x,P.numPointShadows=A,P.numSpotShadows=_,P.numSpotMaps=T,P.numLightProbes=C,n.version=Vy++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,p=0;const m=h.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){const b=c[M];if(b.isSunLight){const x=n.sun[u];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),u++}else if(b.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(b.isSpotLight){const x=n.spot[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),g++}else if(b.isRectAreaLight){const x=n.rectArea[v];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const x=n.hemi[p];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function cd(i){const t=new Xy(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function qy(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new cd(i),t.set(s,[a])):r>=o.length?(a=new cd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Yy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ky=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Zy=[new y(1,0,0),new y(-1,0,0),new y(0,1,0),new y(0,-1,0),new y(0,0,1),new y(0,0,-1)],$y=[new y(0,-1,0),new y(0,-1,0),new y(0,0,1),new y(0,0,-1),new y(0,-1,0),new y(0,-1,0)],hd=new $t,sr=new y,hl=new y;function Jy(i,t,e){let n=new Or;const s=new kt,r=new kt,o=new Ae,a=new zf,l=new Im,c={},h=e.maxTextureSize,u={[Gi]:pn,[pn]:Gi,[ze]:ze},d=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Yy,fragmentShader:Ky}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new me(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sr;let m=this.type;this.render=function(A,_,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===t0&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sr);const N=i.getRenderTarget(),C=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Ds),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=m!==this.type;F&&_.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(D=>D.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,D=A.length;E<D;E++){const U=A[E],O=U.shadow;if(O===void 0){qt("WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const Y=O.getFrameExtents();s.multiply(Y),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,O.mapSize.y=r.y));const H=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=H,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===mr){if(U.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new ln(s.x,s.y,{format:as,type:yn,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),O.map.texture.name=U.name+".shadowMap",O.map.depthTexture=new ls(s.x,s.y,Nn),O.map.depthTexture.name=U.name+".shadowMapDepth",O.map.depthTexture.format=Vi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Fe,O.map.depthTexture.magFilter=Fe}else U.isPointLight?(O.map=new vh(s.x),O.map.depthTexture=new Of(s.x,qn)):(O.map=new ln(s.x,s.y),O.map.depthTexture=new ls(s.x,s.y,qn)),O.map.depthTexture.name=U.name+".shadowMap",O.map.depthTexture.format=Vi,this.type===Sr?(O.map.depthTexture.compareFunction=H?Ef:Tf,O.map.depthTexture.minFilter=Qe,O.map.depthTexture.magFilter=Qe):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Fe,O.map.depthTexture.magFilter=Fe);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);const G=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();U.isPointLight!==!0&&O.updateMatrices(U,T);const K=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:T.layers;for(let ot=0;ot<G;ot++){const Q=O.getCamera(ot);if(U.isPointLight){const k=O.camera,Z=O.matrix,q=U.distance||k.far;q!==k.far&&(k.far=q,k.updateProjectionMatrix()),sr.setFromMatrixPosition(U.matrixWorld),k.position.copy(sr),hl.copy(k.position),hl.add(Zy[ot]),k.up.copy($y[ot]),k.lookAt(hl),k.updateMatrixWorld(),Z.makeTranslation(-sr.x,-sr.y,-sr.z),hd.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),O._frustum.setFromProjectionMatrix(hd,k.coordinateSystem,k.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,ot),i.clear();else{ot===0&&(i.setRenderTarget(O.map),i.clear());const k=O.getViewport(ot);o.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),L.viewport(o)}n=O.getFrustum(ot),b(_,T,Q,U,K,this.type)}O.isPointLightShadow!==!0&&this.type===mr&&M(O,T),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(N,C,P)};function M(A,_){const T=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new ln(s.x,s.y,{format:as,type:yn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(_,null,T,d,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(_,null,T,f,v,null)}function w(A,_,T,N){let C=null;const P=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)C=P;else if(C=T.isPointLight===!0?l:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const L=C.uuid,F=_.uuid;let E=c[L];E===void 0&&(E={},c[L]=E);let D=E[F];D===void 0&&(D=C.clone(),E[F]=D,_.addEventListener("dispose",x)),C=D}if(C.visible=_.visible,C.wireframe=_.wireframe,N===mr?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:u[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,T.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const L=i.properties.get(C);L.light=T}return C}function b(A,_,T,N,C,P){if(A.visible===!1)return;if(A.layers.test(C)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&P===mr)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);const E=t.update(A),D=A.material;if(Array.isArray(D)){const U=E.groups;for(let O=0,Y=U.length;O<Y;O++){const H=U[O],G=D[H.materialIndex];if(G&&G.visible){const K=w(A,G,N,P);A.onBeforeShadow(i,A,_,T,E,K,H),i.renderBufferDirect(T,null,E,K,A,H),A.onAfterShadow(i,A,_,T,E,K,H)}}}else if(D.visible){const U=w(A,D,N,P);A.onBeforeShadow(i,A,_,T,E,U,null),i.renderBufferDirect(T,null,E,U,A,null),A.onAfterShadow(i,A,_,T,E,U,null)}}const F=A.children;for(let E=0,D=F.length;E<D;E++)b(F[E],_,T,N,C,P)}function x(A){A.target.removeEventListener("dispose",x);for(const T in c){const N=c[T],C=A.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}function jy(i,t){function e(){let B=!1;const lt=new Ae;let nt=null;const wt=new Ae(0,0,0,0);return{setMask:function(xt){nt!==xt&&!B&&(i.colorMask(xt,xt,xt,xt),nt=xt)},setLocked:function(xt){B=xt},setClear:function(xt,St,Zt,ce,pt){pt===!0&&(xt*=ce,St*=ce,Zt*=ce),lt.set(xt,St,Zt,ce),wt.equals(lt)===!1&&(i.clearColor(xt,St,Zt,ce),wt.copy(lt))},reset:function(){B=!1,nt=null,wt.set(-1,0,0,0)}}}function n(){let B=!1,lt=!1,nt=null,wt=null,xt=null;return{setReversed:function(St){if(lt!==St){const Zt=t.get("EXT_clip_control");St?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),lt=St;const ce=xt;xt=null,this.setClear(ce)}},getReversed:function(){return lt},setTest:function(St){St?W(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(St){nt!==St&&!B&&(i.depthMask(St),nt=St)},setFunc:function(St){if(lt&&(St=F0[St]),wt!==St){switch(St){case Bl:i.depthFunc(i.NEVER);break;case zl:i.depthFunc(i.ALWAYS);break;case Hl:i.depthFunc(i.LESS);break;case Pr:i.depthFunc(i.LEQUAL);break;case Gl:i.depthFunc(i.EQUAL);break;case Vl:i.depthFunc(i.GEQUAL);break;case Wl:i.depthFunc(i.GREATER);break;case Xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=St}},setLocked:function(St){B=St},setClear:function(St){xt!==St&&(xt=St,lt&&(St=1-St),i.clearDepth(St))},reset:function(){B=!1,nt=null,wt=null,xt=null,lt=!1}}}function s(){let B=!1,lt=null,nt=null,wt=null,xt=null,St=null,Zt=null,ce=null,pt=null;return{setTest:function(Jt){B||(Jt?W(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(Jt){lt!==Jt&&!B&&(i.stencilMask(Jt),lt=Jt)},setFunc:function(Jt,ae,Lt){(nt!==Jt||wt!==ae||xt!==Lt)&&(i.stencilFunc(Jt,ae,Lt),nt=Jt,wt=ae,xt=Lt)},setOp:function(Jt,ae,Lt){(St!==Jt||Zt!==ae||ce!==Lt)&&(i.stencilOp(Jt,ae,Lt),St=Jt,Zt=ae,ce=Lt)},setLocked:function(Jt){B=Jt},setClear:function(Jt){pt!==Jt&&(i.clearStencil(Jt),pt=Jt)},reset:function(){B=!1,lt=null,nt=null,wt=null,xt=null,St=null,Zt=null,ce=null,pt=null}}}const r=new e,o=new n,a=new s;let l={};const c=new WeakMap;let h={},u={},d={},f=new WeakMap,g=[],v=null,p=!1,m=null,M=null,w=null,b=null,x=null,A=null,_=null,T=new Ut(0,0,0),N=0,C=!1,P=null,L=null,F=null,E=null,D=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Y=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=Y>=2);let G=null,K={};const ot=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),k=new Ae().fromArray(ot),Z=new Ae().fromArray(Q);function q(B,lt,nt,wt){const xt=new Uint8Array(4),St=i.createTexture();i.bindTexture(B,St),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<nt;Zt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(lt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return St}const st={};st[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),W(i.DEPTH_TEST),o.setFunc(Pr),Xt(!1),mt(Vh),W(i.CULL_FACE),Yt(Ds);function W(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function j(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function ft(B,lt){return d[B]!==lt?(i.bindFramebuffer(B,lt),d[B]=lt,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=lt),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function dt(B,lt){let nt=g,wt=!1;if(B){nt=f.get(lt),nt===void 0&&(nt=[],f.set(lt,nt));const xt=B.textures;if(nt.length!==xt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let St=0,Zt=xt.length;St<Zt;St++)nt[St]=i.COLOR_ATTACHMENT0+St;nt.length=xt.length,wt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,wt=!0);wt&&i.drawBuffers(nt)}function Dt(B){return v!==B?(i.useProgram(B),v=B,!0):!1}const Ft={[Cs]:i.FUNC_ADD,[n0]:i.FUNC_SUBTRACT,[i0]:i.FUNC_REVERSE_SUBTRACT};Ft[s0]=i.MIN,Ft[r0]=i.MAX;const Et={[o0]:i.ZERO,[a0]:i.ONE,[l0]:i.SRC_COLOR,[hf]:i.SRC_ALPHA,[p0]:i.SRC_ALPHA_SATURATE,[d0]:i.DST_COLOR,[h0]:i.DST_ALPHA,[c0]:i.ONE_MINUS_SRC_COLOR,[uf]:i.ONE_MINUS_SRC_ALPHA,[f0]:i.ONE_MINUS_DST_COLOR,[u0]:i.ONE_MINUS_DST_ALPHA,[m0]:i.CONSTANT_COLOR,[g0]:i.ONE_MINUS_CONSTANT_COLOR,[_0]:i.CONSTANT_ALPHA,[v0]:i.ONE_MINUS_CONSTANT_ALPHA};function Yt(B,lt,nt,wt,xt,St,Zt,ce,pt,Jt){if(B===Ds){p===!0&&(j(i.BLEND),p=!1);return}if(p===!1&&(W(i.BLEND),p=!0),B!==e0){if(B!==m||Jt!==C){if((M!==Cs||x!==Cs)&&(i.blendEquation(i.FUNC_ADD),M=Cs,x=Cs),Jt)switch(B){case br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kl:i.blendFunc(i.ONE,i.ONE);break;case Wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Xh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ee("WebGLState: Invalid blending: ",B);break}else switch(B){case br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Wh:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xh:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",B);break}w=null,b=null,A=null,_=null,T.set(0,0,0),N=0,m=B,C=Jt}return}xt=xt||lt,St=St||nt,Zt=Zt||wt,(lt!==M||xt!==x)&&(i.blendEquationSeparate(Ft[lt],Ft[xt]),M=lt,x=xt),(nt!==w||wt!==b||St!==A||Zt!==_)&&(i.blendFuncSeparate(Et[nt],Et[wt],Et[St],Et[Zt]),w=nt,b=wt,A=St,_=Zt),(ce.equals(T)===!1||pt!==N)&&(i.blendColor(ce.r,ce.g,ce.b,pt),T.copy(ce),N=pt),m=B,C=!1}function Gt(B,lt){B.side===ze?j(i.CULL_FACE):W(i.CULL_FACE);let nt=B.side===pn;lt&&(nt=!nt),Xt(nt),B.blending===br&&B.transparent===!1?Yt(Ds):Yt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const wt=B.stencilWrite;a.setTest(wt),wt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Kt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(B){P!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),P=B)}function mt(B){B!==jp?(W(i.CULL_FACE),B!==L&&(B===Vh?i.cullFace(i.BACK):B===Qp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),L=B}function ut(B){B!==F&&(O&&i.lineWidth(B),F=B)}function Kt(B,lt,nt){B?(W(i.POLYGON_OFFSET_FILL),(E!==lt||D!==nt)&&(E=lt,D=nt,o.getReversed()&&(lt=-lt,nt=-nt),i.polygonOffset(lt,nt))):j(i.POLYGON_OFFSET_FILL)}function se(B){B?W(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function oe(B){B===void 0&&(B=i.TEXTURE0+U-1),G!==B&&(i.activeTexture(B),G=B)}function te(B,lt,nt){nt===void 0&&(G===null?nt=i.TEXTURE0+U-1:nt=G);let wt=K[nt];wt===void 0&&(wt={type:void 0,texture:void 0},K[nt]=wt),(wt.type!==B||wt.texture!==lt)&&(G!==nt&&(i.activeTexture(nt),G=nt),i.bindTexture(B,lt||st[B]),wt.type=B,wt.texture=lt)}function V(){const B=K[G];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Se(){try{i.compressedTexImage2D(...arguments)}catch(B){ee("WebGLState:",B)}}function Qt(){try{i.compressedTexImage3D(...arguments)}catch(B){ee("WebGLState:",B)}}function ge(){try{i.texSubImage2D(...arguments)}catch(B){ee("WebGLState:",B)}}function gt(){try{i.texSubImage3D(...arguments)}catch(B){ee("WebGLState:",B)}}function Vt(){try{i.compressedTexSubImage2D(...arguments)}catch(B){ee("WebGLState:",B)}}function Mt(){try{i.compressedTexSubImage3D(...arguments)}catch(B){ee("WebGLState:",B)}}function Pt(){try{i.texStorage2D(...arguments)}catch(B){ee("WebGLState:",B)}}function I(){try{i.texStorage3D(...arguments)}catch(B){ee("WebGLState:",B)}}function S(){try{i.texImage2D(...arguments)}catch(B){ee("WebGLState:",B)}}function X(){try{i.texImage3D(...arguments)}catch(B){ee("WebGLState:",B)}}function ht(B){return u[B]!==void 0?u[B]:i.getParameter(B)}function at(B,lt){u[B]!==lt&&(i.pixelStorei(B,lt),u[B]=lt)}function _t(B){k.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),k.copy(B))}function yt(B){Z.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Z.copy(B))}function et(B,lt){let nt=c.get(lt);nt===void 0&&(nt=new WeakMap,c.set(lt,nt));let wt=nt.get(B);wt===void 0&&(wt=i.getUniformBlockIndex(lt,B.name),i.uniformBlockBinding(lt,wt,wt),nt.set(B,wt))}function rt(B,lt,nt){const xt=c.get(lt).get(B);l[xt]!==nt&&(i.bindBufferBase(i.UNIFORM_BUFFER,xt,nt),l[xt]=nt)}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},G=null,K={},d={},l={},f=new WeakMap,g=[],v=null,p=!1,m=null,M=null,w=null,b=null,x=null,A=null,_=null,T=new Ut(0,0,0),N=0,C=!1,P=null,L=null,F=null,E=null,D=null,k.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:W,disable:j,bindFramebuffer:ft,drawBuffers:dt,useProgram:Dt,setBlending:Yt,setMaterial:Gt,setFlipSided:Xt,setCullFace:mt,setLineWidth:ut,setPolygonOffset:Kt,setScissorTest:se,activeTexture:oe,bindTexture:te,unbindTexture:V,compressedTexImage2D:Se,compressedTexImage3D:Qt,texImage2D:S,texImage3D:X,pixelStorei:at,getParameter:ht,updateUBOMapping:et,uniformBlockBinding:rt,texStorage2D:Pt,texStorage3D:I,texSubImage2D:ge,texSubImage3D:gt,compressedTexSubImage2D:Vt,compressedTexSubImage3D:Mt,scissor:_t,viewport:yt,reset:bt}}function Qy(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,h=new WeakMap,u=new Set;let d;const f=new WeakMap,g=new Set,v=new FinalizationRegistry(I=>g.delete(I));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,S){return p?new OffscreenCanvas(I,S):Fr("canvas")}function M(I,S,X){let ht=1;const at=Pt(I);if((at.width>X||at.height>X)&&(ht=X/Math.max(at.width,at.height)),ht<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const _t=Math.floor(ht*at.width),yt=Math.floor(ht*at.height);d===void 0&&(d=m(_t,yt));const et=S?m(_t,yt):d;return et.width=_t,et.height=yt,et.getContext("2d").drawImage(I,0,0,_t,yt),qt("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+_t+"x"+yt+")."),et}else return"data"in I&&qt("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),I;return I}function w(I){return I.generateMipmaps}function b(I){i.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(I,S,X,ht,at,_t=!1){if(I!==null){if(i[I]!==void 0)return i[I];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let yt;ht&&(yt=t.get("EXT_texture_norm16"),yt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=S;if(S===i.RED&&(X===i.FLOAT&&(et=i.R32F),X===i.HALF_FLOAT&&(et=i.R16F),X===i.UNSIGNED_BYTE&&(et=i.R8),X===i.UNSIGNED_SHORT&&yt&&(et=yt.R16_EXT),X===i.SHORT&&yt&&(et=yt.R16_SNORM_EXT)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.R8UI),X===i.UNSIGNED_SHORT&&(et=i.R16UI),X===i.UNSIGNED_INT&&(et=i.R32UI),X===i.BYTE&&(et=i.R8I),X===i.SHORT&&(et=i.R16I),X===i.INT&&(et=i.R32I)),S===i.RG&&(X===i.FLOAT&&(et=i.RG32F),X===i.HALF_FLOAT&&(et=i.RG16F),X===i.UNSIGNED_BYTE&&(et=i.RG8),X===i.UNSIGNED_SHORT&&yt&&(et=yt.RG16_EXT),X===i.SHORT&&yt&&(et=yt.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RG8UI),X===i.UNSIGNED_SHORT&&(et=i.RG16UI),X===i.UNSIGNED_INT&&(et=i.RG32UI),X===i.BYTE&&(et=i.RG8I),X===i.SHORT&&(et=i.RG16I),X===i.INT&&(et=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RGB8UI),X===i.UNSIGNED_SHORT&&(et=i.RGB16UI),X===i.UNSIGNED_INT&&(et=i.RGB32UI),X===i.BYTE&&(et=i.RGB8I),X===i.SHORT&&(et=i.RGB16I),X===i.INT&&(et=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),X===i.UNSIGNED_INT&&(et=i.RGBA32UI),X===i.BYTE&&(et=i.RGBA8I),X===i.SHORT&&(et=i.RGBA16I),X===i.INT&&(et=i.RGBA32I)),S===i.RGB&&(X===i.UNSIGNED_SHORT&&yt&&(et=yt.RGB16_EXT),X===i.SHORT&&yt&&(et=yt.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),S===i.RGBA){const rt=_t?ra:de.getTransfer(at);X===i.FLOAT&&(et=i.RGBA32F),X===i.HALF_FLOAT&&(et=i.RGBA16F),X===i.UNSIGNED_BYTE&&(et=rt===we?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&yt&&(et=yt.RGBA16_EXT),X===i.SHORT&&yt&&(et=yt.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function _(I,S){let X;return I?S===null||S===qn||S===ks?X=i.DEPTH24_STENCIL8:S===Nn?X=i.DEPTH32F_STENCIL8:S===Ir&&(X=i.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qn||S===ks?X=i.DEPTH_COMPONENT24:S===Nn?X=i.DEPTH_COMPONENT32F:S===Ir&&(X=i.DEPTH_COMPONENT16),X}function T(I,S){return w(I)===!0||I.isFramebufferTexture&&I.minFilter!==Fe&&I.minFilter!==Qe?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function N(I){const S=new WeakRef(I);n.get(I).__ref=S,g.add(S),v.register(I,S,S)}function C(I){const S=n.get(I).__ref;S!==void 0&&(g.delete(S),v.unregister(S))}function P(I){F(I.target)}function L(I){E(I.target)}function F(I){I.removeEventListener("dispose",P),C(I),U(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function E(I){I.removeEventListener("dispose",L),C(I),Y(I)}function D(){for(const I of g){const S=I.deref();S!==void 0&&(S.isRenderTarget===!0?E(S):F(S))}g.clear(),u.clear()}function U(I){const S=n.get(I);if(S.__webglInit===void 0)return;const X=I.source,ht=f.get(X);if(ht){const at=ht[S.__cacheKey];at.usedTimes--,at.usedTimes===0&&O(I),Object.keys(ht).length===0&&f.delete(X)}n.remove(I)}function O(I){const S=n.get(I);i.deleteTexture(S.__webglTexture);const X=I.source,ht=f.get(X);delete ht[S.__cacheKey],o.memory.textures--}function Y(I){const S=n.get(I);S.__depthDisposeCallback&&S.__depthDisposeCallback();const X=I.depthTexture;if(X&&X.renderTarget===I&&F(X),I.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(S.__webglFramebuffer[at]))for(let _t=0;_t<S.__webglFramebuffer[at].length;_t++)i.deleteFramebuffer(S.__webglFramebuffer[at][_t]);else i.deleteFramebuffer(S.__webglFramebuffer[at]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[at])}else{if(Array.isArray(S.__webglFramebuffer))for(let at=0;at<S.__webglFramebuffer.length;at++)i.deleteFramebuffer(S.__webglFramebuffer[at]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let at=0;at<S.__webglColorRenderbuffer.length;at++)S.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[at]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const ht=I.textures;for(let at=0,_t=ht.length;at<_t;at++){const yt=n.get(ht[at]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),o.memory.textures--),n.remove(ht[at])}n.remove(I)}let H=0;function G(){H=0}function K(){return H}function ot(I){H=I}function Q(){const I=H;return I>=s.maxTextures&&qt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,I}function k(I){const S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.mipmapsAutoUpdate),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function Z(I,S){const X=n.get(I);if(I.isVideoTexture&&Vt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&X.__version!==I.version){const ht=I.image;if(ht===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(X,I,S);return}}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function q(I,S){const X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){Gt(X,I,S);return}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function st(I,S){const X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){Gt(X,I,S);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function W(I,S){const X=n.get(I);if(I.version>0&&X.__version!==I.version){Xt(X,I,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}const j={[os]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},ft={[Fe]:i.NEAREST,[_f]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[Wo]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},dt={[A0]:i.NEVER,[Af]:i.ALWAYS,[R0]:i.LESS,[Tf]:i.LEQUAL,[C0]:i.EQUAL,[Ef]:i.GEQUAL,[P0]:i.GREATER,[L0]:i.NOTEQUAL};function Dt(I,S){if(S.type===Nn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Qe||S.magFilter===Wo||S.magFilter===gr||S.magFilter===ri||S.minFilter===Qe||S.minFilter===Wo||S.minFilter===gr||S.minFilter===ri)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,j[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,j[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,j[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ft[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ft[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,dt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Fe||S.minFilter!==gr&&S.minFilter!==ri||S.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ft(I,S){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",P),N(S));const ht=S.source;let at=f.get(ht);at===void 0&&(at={},f.set(ht,at));const _t=k(S);if(_t!==I.__cacheKey){at[_t]===void 0&&(at[_t]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),at[_t].usedTimes++;const yt=at[I.__cacheKey];yt!==void 0&&(at[I.__cacheKey].usedTimes--,yt.usedTimes===0&&O(S)),I.__cacheKey=_t,I.__webglTexture=at[_t].texture}return X}function Et(I,S,X){return Math.floor(Math.floor(I/X)/S)}function Yt(I,S,X,ht){const _t=I.updateRanges;if(_t.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,X,ht,S.data);else{_t.sort((B,lt)=>B.start-lt.start);let yt=0;for(let B=1;B<_t.length;B++){const lt=_t[yt],nt=_t[B],wt=lt.start+lt.count,xt=Et(nt.start,S.width,4),St=Et(lt.start,S.width,4);nt.start<=wt+1&&xt===St&&Et(nt.start+nt.count-1,S.width,4)===xt?lt.count=Math.max(lt.count,nt.start+nt.count-lt.start):(++yt,_t[yt]=nt)}_t.length=yt+1;const et=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let B=0,lt=_t.length;B<lt;B++){const nt=_t[B],wt=Math.floor(nt.start/4),xt=Math.ceil(nt.count/4),St=wt%S.width,Zt=Math.floor(wt/S.width),ce=xt,pt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,St),e.pixelStorei(i.UNPACK_SKIP_ROWS,Zt),e.texSubImage2D(i.TEXTURE_2D,0,St,Zt,ce,pt,X,ht,S.data)}I.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function Gt(I,S,X){let ht=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ht=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ht=i.TEXTURE_3D);const at=Ft(I,S),_t=S.source;e.bindTexture(ht,I.__webglTexture,i.TEXTURE0+X);const yt=n.get(_t);if(_t.version!==yt.__version||at===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const pt=de.getPrimaries(de.workingColorSpace),Jt=S.colorSpace===Bi?null:de.getPrimaries(S.colorSpace),ae=S.colorSpace===Bi||pt===Jt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let rt=M(S.image,!1,s.maxTextureSize);rt=Mt(S,rt);const bt=r.convert(S.format,S.colorSpace),B=r.convert(S.type);let lt=A(S.internalFormat,bt,B,S.normalized,S.colorSpace,S.isVideoTexture);Dt(ht,S);let nt;const wt=S.mipmaps,xt=S.isVideoTexture!==!0,St=yt.__version===void 0||at===!0,Zt=_t.dataReady,ce=T(S,rt);if(S.isDepthTexture)lt=_(S.format===Hi,S.type),St&&(xt?e.texStorage2D(i.TEXTURE_2D,1,lt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,lt,rt.width,rt.height,0,bt,B,null));else if(S.isDataTexture)if(wt.length>0){xt&&St&&e.texStorage2D(i.TEXTURE_2D,ce,lt,wt[0].width,wt[0].height);for(let pt=0,Jt=wt.length;pt<Jt;pt++)nt=wt[pt],xt?Zt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,nt.width,nt.height,bt,B,nt.data):e.texImage2D(i.TEXTURE_2D,pt,lt,nt.width,nt.height,0,bt,B,nt.data);S.generateMipmaps=!1}else xt?(St&&e.texStorage2D(i.TEXTURE_2D,ce,lt,rt.width,rt.height),Zt&&Yt(S,rt,bt,B)):e.texImage2D(i.TEXTURE_2D,0,lt,rt.width,rt.height,0,bt,B,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){xt&&St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ce,lt,wt[0].width,wt[0].height,rt.depth);for(let pt=0,Jt=wt.length;pt<Jt;pt++)if(nt=wt[pt],S.format!==Vn)if(bt!==null)if(xt){if(Zt)if(S.layerUpdates.size>0){const ae=Vu(nt.width,nt.height,S.format,S.type);for(const Lt of S.layerUpdates){const be=nt.data.subarray(Lt*ae/nt.data.BYTES_PER_ELEMENT,(Lt+1)*ae/nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,Lt,nt.width,nt.height,1,bt,be)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,nt.width,nt.height,rt.depth,bt,nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,lt,nt.width,nt.height,rt.depth,0,nt.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xt?Zt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,nt.width,nt.height,rt.depth,bt,B,nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,lt,nt.width,nt.height,rt.depth,0,bt,B,nt.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{xt&&St&&e.texStorage2D(i.TEXTURE_2D,ce,lt,wt[0].width,wt[0].height);for(let pt=0,Jt=wt.length;pt<Jt;pt++)nt=wt[pt],S.format!==Vn?bt!==null?xt?Zt&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,nt.width,nt.height,bt,nt.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,lt,nt.width,nt.height,0,nt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?Zt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,nt.width,nt.height,bt,B,nt.data):e.texImage2D(i.TEXTURE_2D,pt,lt,nt.width,nt.height,0,bt,B,nt.data)}else if(S.isDataArrayTexture)if(xt){if(St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ce,lt,rt.width,rt.height,rt.depth),Zt)if(S.layerUpdates.size>0){const pt=Vu(rt.width,rt.height,S.format,S.type);for(const Jt of S.layerUpdates){const ae=rt.data.subarray(Jt*pt/rt.data.BYTES_PER_ELEMENT,(Jt+1)*pt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Jt,rt.width,rt.height,1,bt,B,ae)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,bt,B,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,rt.width,rt.height,rt.depth,0,bt,B,rt.data);else if(S.isData3DTexture)xt?(St&&e.texStorage3D(i.TEXTURE_3D,ce,lt,rt.width,rt.height,rt.depth),Zt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,bt,B,rt.data)):e.texImage3D(i.TEXTURE_3D,0,lt,rt.width,rt.height,rt.depth,0,bt,B,rt.data);else if(S.isFramebufferTexture){if(St)if(xt)e.texStorage2D(i.TEXTURE_2D,ce,lt,rt.width,rt.height);else{let pt=rt.width,Jt=rt.height;for(let ae=0;ae<ce;ae++)e.texImage2D(i.TEXTURE_2D,ae,lt,pt,Jt,0,bt,B,null),pt>>=1,Jt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){const pt=i.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),rt.parentNode!==pt){pt.appendChild(rt),u.add(S),pt.onpaint=Jt=>{const ae=Jt.changedElements;for(const Lt of u)ae.includes(Lt.image)&&(Lt.needsUpdate=!0)},pt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{const ae=i.RGBA,Lt=i.RGBA,be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ae,Lt,be,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(wt.length>0){if(xt&&St){const pt=Pt(wt[0]);e.texStorage2D(i.TEXTURE_2D,ce,lt,pt.width,pt.height)}for(let pt=0,Jt=wt.length;pt<Jt;pt++)nt=wt[pt],xt?Zt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,bt,B,nt):e.texImage2D(i.TEXTURE_2D,pt,lt,bt,B,nt);S.generateMipmaps=!1}else if(xt){if(St){const pt=Pt(rt);e.texStorage2D(i.TEXTURE_2D,ce,lt,pt.width,pt.height)}Zt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,B,rt)}else e.texImage2D(i.TEXTURE_2D,0,lt,bt,B,rt);w(S)&&S.mipmapsAutoUpdate===!0&&b(ht),yt.__version=_t.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function Xt(I,S,X){if(S.image.length!==6)return;const ht=Ft(I,S),at=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+X);const _t=n.get(at);if(at.version!==_t.__version||ht===!0){e.activeTexture(i.TEXTURE0+X);const yt=de.getPrimaries(de.workingColorSpace),et=S.colorSpace===Bi?null:de.getPrimaries(S.colorSpace),rt=S.colorSpace===Bi||yt===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const bt=S.isCompressedTexture||S.image[0].isCompressedTexture,B=S.image[0]&&S.image[0].isDataTexture,lt=[];for(let Lt=0;Lt<6;Lt++)!bt&&!B?lt[Lt]=M(S.image[Lt],!0,s.maxCubemapSize):lt[Lt]=B?S.image[Lt].image:S.image[Lt],lt[Lt]=Mt(S,lt[Lt]);const nt=lt[0],wt=r.convert(S.format,S.colorSpace),xt=r.convert(S.type);let St=A(S.internalFormat,wt,xt,S.normalized,S.colorSpace);const Zt=S.isVideoTexture!==!0,ce=_t.__version===void 0||ht===!0,pt=at.dataReady;let Jt=T(S,nt);Dt(i.TEXTURE_CUBE_MAP,S);let ae;if(S.isDepthTexture){if(St=_(S.format===Hi,S.type),ce)if(Zt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,St,nt.width,nt.height);else for(let Lt=0;Lt<6;Lt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,St,nt.width,nt.height,0,wt,xt,null)}else if(bt){Zt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,St,nt.width,nt.height);for(let Lt=0;Lt<6;Lt++){ae=lt[Lt].mipmaps;for(let be=0;be<ae.length;be++){const $e=ae[be];S.format!==Vn?wt!==null?Zt?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,be,0,0,$e.width,$e.height,wt,$e.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,be,St,$e.width,$e.height,0,$e.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,be,0,0,$e.width,$e.height,wt,xt,$e.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,be,St,$e.width,$e.height,0,wt,xt,$e.data)}}}else{if(ae=S.mipmaps,Zt&&ce){ae.length>0&&Jt++;const Lt=Pt(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Jt,St,Lt.width,Lt.height)}for(let Lt=0;Lt<6;Lt++)if(B){Zt?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,0,0,lt[Lt].width,lt[Lt].height,wt,xt,lt[Lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,St,lt[Lt].width,lt[Lt].height,0,wt,xt,lt[Lt].data);for(let be=0;be<ae.length;be++){const Ai=ae[be].image[Lt].image;Zt?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,be+1,0,0,Ai.width,Ai.height,wt,xt,Ai.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,be+1,St,Ai.width,Ai.height,0,wt,xt,Ai.data)}}else{Zt?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,0,0,wt,xt,lt[Lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0,St,wt,xt,lt[Lt]);for(let be=0;be<ae.length;be++){const $e=ae[be];Zt?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,be+1,0,0,wt,xt,$e.image[Lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,be+1,St,wt,xt,$e.image[Lt])}}}w(S)&&S.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),_t.__version=at.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function mt(I,S,X,ht,at,_t){const yt=r.convert(X.format,X.colorSpace),et=r.convert(X.type),rt=A(X.internalFormat,yt,et,X.normalized,X.colorSpace),bt=n.get(S),B=n.get(X);if(B.__renderTarget=S,!bt.__hasExternalTextures){const lt=Math.max(1,S.width>>_t),nt=Math.max(1,S.height>>_t);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,_t,rt,lt,nt,S.depth,0,yt,et,null):e.texImage2D(at,_t,rt,lt,nt,0,yt,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),gt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,at,B.__webglTexture,0,ge(S)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ht,at,B.__webglTexture,_t),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(I,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){const ht=S.depthTexture,at=ht&&ht.isDepthTexture?ht.type:null,_t=_(S.stencilBuffer,at),yt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(S),_t,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(S),_t,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,_t,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,I)}else{const ht=S.textures;for(let at=0;at<ht.length;at++){const _t=ht[at],yt=r.convert(_t.format,_t.colorSpace),et=r.convert(_t.type),rt=A(_t.internalFormat,yt,et,_t.normalized,_t.colorSpace);gt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(S),rt,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(S),rt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,rt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Kt(I,S,X){const ht=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const at=n.get(S.depthTexture);at.__renderTarget=S;const _t=ht?S.depthTexture.image[0]:S.depthTexture.image;(!at.__webglTexture||_t.width!==S.width||_t.height!==S.height)&&(_t.width=S.width,_t.height=S.height,S.depthTexture.needsUpdate=!0),ht?W(S.depthTexture,0):Z(S.depthTexture,0);const yt=at.__webglTexture,et=ge(S),rt=ht?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,bt=S.depthTexture.format===Hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Vi)gt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,bt,rt,yt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,bt,rt,yt,0);else if(S.depthTexture.format===Hi)gt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,bt,rt,yt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,bt,rt,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(I){const S=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){const ht=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ht){const at=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ht.removeEventListener("dispose",at)};ht.addEventListener("dispose",at),S.__depthDisposeCallback=at}S.__boundDepthTexture=ht}if(I.depthTexture&&!S.__autoAllocateDepthBuffer)if(X)for(let ht=0;ht<6;ht++)Kt(S.__webglFramebuffer[ht],I,ht);else I.texture.mipmaps.length>0?Kt(S.__webglFramebuffer[0],I,0):Kt(S.__webglFramebuffer,I,0);else if(X){S.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ht]),S.__webglDepthbuffer[ht]===void 0)S.__webglDepthbuffer[ht]=i.createRenderbuffer(),ut(S.__webglDepthbuffer[ht],I,!1);else{const at=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=S.__webglDepthbuffer[ht];i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,_t)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ut(S.__webglDepthbuffer,I,!1);else{const at=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,_t)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(I,S,X){const ht=n.get(I);S!==void 0&&mt(ht.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&se(I)}function te(I){const S=I.texture,X=n.get(I),ht=n.get(S);I.addEventListener("dispose",L),N(I);const at=I.textures,_t=I.isWebGLCubeRenderTarget===!0,yt=at.length>1;if(yt||(ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture()),ht.__version=S.version,o.memory.textures++),_t){X.__webglFramebuffer=[];for(let et=0;et<6;et++)if(S.mipmaps.length>0){X.__webglFramebuffer[et]=[];for(let rt=0;rt<S.mipmaps.length;rt++)X.__webglFramebuffer[et][rt]=i.createFramebuffer()}else X.__webglFramebuffer[et]=i.createFramebuffer()}else{if(S.mipmaps.length>0){X.__webglFramebuffer=[];for(let et=0;et<S.mipmaps.length;et++)X.__webglFramebuffer[et]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(yt)for(let et=0,rt=at.length;et<rt;et++){const bt=n.get(at[et]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&gt(I)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let et=0;et<at.length;et++){const rt=at[et];X.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[et]);const bt=r.convert(rt.format,rt.colorSpace),B=r.convert(rt.type),lt=A(rt.internalFormat,bt,B,rt.normalized,rt.colorSpace,I.isXRRenderTarget===!0),nt=ge(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,lt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,X.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(X.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_t){e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),Dt(i.TEXTURE_CUBE_MAP,S);for(let et=0;et<6;et++)if(S.mipmaps.length>0)for(let rt=0;rt<S.mipmaps.length;rt++)mt(X.__webglFramebuffer[et][rt],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,rt);else mt(X.__webglFramebuffer[et],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);w(S)?b(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(yt){for(let et=0,rt=at.length;et<rt;et++){const bt=at[et],B=n.get(bt);let lt=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(lt=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,B.__webglTexture),Dt(lt,bt),mt(X.__webglFramebuffer,I,bt,i.COLOR_ATTACHMENT0+et,lt,0),w(bt)&&b(lt)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(et=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,ht.__webglTexture),Dt(et,S),S.mipmaps.length>0)for(let rt=0;rt<S.mipmaps.length;rt++)mt(X.__webglFramebuffer[rt],I,S,i.COLOR_ATTACHMENT0,et,rt);else mt(X.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,et,0);w(S)?b(et):S.mipmaps.length>0&&i.texParameteri(et,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&se(I)}function V(I){const S=I.textures;for(let X=0,ht=S.length;X<ht;X++){const at=S[X];if(w(at)&&at.mipmapsAutoUpdate===!0){const _t=x(I),yt=n.get(at).__webglTexture;e.bindTexture(_t,yt),b(_t),e.unbindTexture()}}}const Se=[];function Qt(I){if(I.samples>0){if(gt(I)===!1){const S=I.textures,X=I.width,ht=I.height;let at=i.COLOR_BUFFER_BIT;const _t=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(I),et=S.length>1;if(et)for(let bt=0;bt<S.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let bt=0;bt<S.length;bt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[bt]);const B=n.get(S[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,B,0)}i.blitFramebuffer(0,0,X,ht,0,0,X,ht,at,i.NEAREST),l===!0&&(Se.length=0,Se.push(i.COLOR_ATTACHMENT0+bt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Se.push(_t),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let bt=0;bt<S.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[bt]);const B=n.get(S[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,B,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){const S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ge(I){return Math.min(s.maxSamples,I.samples)}function gt(I){const S=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Vt(I){const S=o.render.frame;h.get(I)!==S&&(h.set(I,S),I.update())}function Mt(I,S){const X=I.colorSpace,ht=I.format,at=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==Mn&&X!==Bi&&(de.getTransfer(X)===we?(ht!==Vn||at!==An)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",X)),S}function Pt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=G,this.getTextureUnits=K,this.setTextureUnits=ot,this.setTexture2D=Z,this.setTexture2DArray=q,this.setTexture3D=st,this.setTextureCube=W,this.rebindTextures=oe,this.setupRenderTarget=te,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=gt,this.dispose=D}function tM(i,t){function e(n,s=Bi){let r;const o=de.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===$c)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vf)return i.BYTE;if(n===xf)return i.SHORT;if(n===Ir)return i.UNSIGNED_SHORT;if(n===Zc)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===yn)return i.HALF_FLOAT;if(n===Sf)return i.ALPHA;if(n===bf)return i.RGB;if(n===Vn)return i.RGBA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===jc)return i.RED;if(n===Qc)return i.RED_INTEGER;if(n===as)return i.RG;if(n===th)return i.RG_INTEGER;if(n===eh)return i.RGBA_INTEGER;if(n===Xo||n===qo||n===Yo||n===Ko)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ql||n===Yl||n===Kl||n===Zl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$l||n===Jl||n===jl||n===Ql||n===tc||n===ia||n===ec)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$l||n===Jl)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===jl)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ql)return r.COMPRESSED_R11_EAC;if(n===tc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ia)return r.COMPRESSED_RG11_EAC;if(n===ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===nc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ic)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ac)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===lc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gc||n===_c||n===vc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===gc)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xc||n===yc||n===sa||n===Mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const eM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new kf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xn({vertexShader:eM,fragmentShader:nM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sM extends Xi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",p=new iM,m={},M=e.getContextAttributes();let w=null,b=null;const x=[],A=[],_=new kt;let T=null,N=null;const C=new vn;C.viewport=new Ae;const P=new vn;P.viewport=new Ae;const L=[C,P],F=new ig;let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Z=x[k];return Z===void 0&&(Z=new Ba,x[k]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(k){let Z=x[k];return Z===void 0&&(Z=new Ba,x[k]=Z),Z.getGripSpace()},this.getHand=function(k){let Z=x[k];return Z===void 0&&(Z=new Ba,x[k]=Z),Z.getHandSpace()};function U(k){const Z=A.indexOf(k.inputSource);if(Z===-1)return;const q=x[Z];q!==void 0&&(q.update(k.inputSource,k.frame,c||o),q.dispatchEvent({type:k.type,data:k.inputSource}))}function O(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",Y);for(let k=0;k<x.length;k++){const Z=A[k];Z!==null&&(A[k]=null,x[k].disconnect(Z))}E=null,D=null,p.reset();for(const k in m)delete m[k];if(t.setRenderTarget(w),f=null,d=null,u=null,s=null,b=null,Q.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(_.width,_.height,!1),N!==null){const k=N.camera;k.fov=N.fov,k.zoom=N.zoom,k.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",O),s.addEventListener("inputsourceschange",Y),M.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let q=null,st=null,W=null;M.depth&&(W=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=M.stencil?Hi:Vi,st=M.stencil?ks:qn);const j={colorFormat:e.RGBA8,depthFormat:W,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(j),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new ln(d.textureWidth,d.textureHeight,{format:Vn,type:An,depthTexture:new ls(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const q={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ln(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Q.setContext(s),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Y(k){for(let Z=0;Z<k.removed.length;Z++){const q=k.removed[Z],st=A.indexOf(q);st>=0&&(A[st]=null,x[st].disconnect(q))}for(let Z=0;Z<k.added.length;Z++){const q=k.added[Z];let st=A.indexOf(q);if(st===-1){for(let j=0;j<x.length;j++)if(j>=A.length){A.push(q),st=j;break}else if(A[j]===null){A[j]=q,st=j;break}if(st===-1)break}const W=x[st];W&&W.connect(q)}}function H(k,Z){Z===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Z.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let Z=k.near,q=k.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(q=p.depthFar)),F.near=P.near=C.near=Z,F.far=P.far=C.far=q,(E!==F.near||D!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),E=F.near,D=F.far),F.layers.mask=k.layers.mask|6,C.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;const st=k.parent,W=F.cameras;H(F,st);for(let j=0;j<W.length;j++)H(W[j],st);F.projectionMatrix.copy(C.projectionMatrix),F.projectionMatrixInverse.copy(C.projectionMatrixInverse),N===null&&k.isPerspectiveCamera&&(N={camera:k,fov:k.fov,zoom:k.zoom}),G(k,F,st)};function G(k,Z,q){q===null?k.matrix.copy(Z.matrixWorld):(k.matrix.copy(q.matrixWorld),k.matrix.invert(),k.matrix.multiply(Z.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Z.projectionMatrix),k.projectionMatrixInverse.copy(Z.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Bs*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(k){return m[k]};let K=null;function ot(k,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){const q=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let st=!1;q.length!==F.cameras.length&&(F.cameras.length=0,st=!0);for(let dt=0;dt<q.length;dt++){const Dt=q[dt];let Ft=null;if(f!==null)Ft=f.getViewport(Dt);else{const Yt=u.getViewSubImage(d,Dt);Ft=Yt.viewport,dt===0&&(t.setRenderTargetTextures(b,Yt.colorTexture,Yt.depthStencilTexture),t.setRenderTarget(b))}let Et=L[dt];Et===void 0&&(Et=new vn,Et.layers.enable(dt),Et.viewport=new Ae,L[dt]=Et),Et.matrix.fromArray(Dt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(Dt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),dt===0&&(F.matrix.copy(Et.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),st===!0&&F.cameras.push(Et)}const W=s.enabledFeatures;if(W&&W.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const dt=u.getDepthInformation(q[0]);dt&&dt.isValid&&dt.texture&&p.init(dt,s.renderState)}if(W&&W.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let dt=0;dt<q.length;dt++){const Dt=q[dt].camera;if(Dt){let Ft=m[Dt];Ft||(Ft=new kf,m[Dt]=Ft);const Et=u.getCameraImage(Dt);Ft.sourceTexture=Et}}}}for(let q=0;q<x.length;q++){const st=A[q],W=x[q];st!==null&&W!==void 0&&W.update(st,Z,c||o)}K&&K(k,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Q=new Yf;Q.setAnimationLoop(ot),this.setAnimationLoop=function(k){K=k},this.dispose=function(){}}}const rM=new $t,ip=new jt;ip.set(-1,0,0,0,1,0,0,0,1);function oM(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Bf(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,w,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===pn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===pn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=t.get(m),w=M.envMap,b=M.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(rM.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ip),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=w*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function aM(i,t,e,n){let s={},r={};function o(M,w){const b=w.program;n.uniformBlockBinding(M,b,s[M.id])}function a(M,w){let b=s[M.id];b===void 0&&(g(M),b=l(M),s[M.id]=b,M.addEventListener("dispose",p));const x=w.program;n.updateUBOMapping(M,x);const A=t.render.frame;r[M.id]!==A&&(c(M),r[M.id]=A)}function l(M){const w=i.createBuffer(),b=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,b,x),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(M){const w=s[M.id],b=M.uniforms,x=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let A=0,_=b.length;A<_;A++){const T=b[A];if(Array.isArray(T))for(let N=0,C=T.length;N<C;N++)h(T[N],A,N,x);else h(T,A,0,x)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,w,b,x){if(d(M,w,b,x)===!0){const A=M.__offset,_=M.value;if(Array.isArray(_)){let T=0;for(let N=0;N<_.length;N++){const C=_[N],P=v(C,!0);u(C,M.__data,T),T+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,M.__data)}}function u(M,w,b){typeof M=="number"||typeof M=="boolean"?w[b]=M:M.isMatrix3?(w[b]=M.elements[0],w[b+1]=M.elements[1],w[b+2]=M.elements[2],w[b+3]=0,w[b+4]=M.elements[3],w[b+5]=M.elements[4],w[b+6]=M.elements[5],w[b+7]=0,w[b+8]=M.elements[6],w[b+9]=M.elements[7],w[b+10]=M.elements[8],w[b+11]=0):ArrayBuffer.isView(M)?w.set(M.subarray(0,w.length-b),b):M.toArray(w,b)}function d(M,w,b,x){const A=M.value,_=w+"_"+b;if(Array.isArray(A)){x[_]===void 0&&(x[_]=[]);const T=x[_];let N=!1;for(let C=0;C<A.length;C++)f(A[C],T,C)===!0&&(N=!0);return N}return f(A,x,_)}function f(M,w,b){if(w[b]===void 0)return typeof M=="number"||typeof M=="boolean"?w[b]=M:ArrayBuffer.isView(M)?w[b]=M.slice():w[b]=M.clone(),!0;{const x=w[b];if(typeof M=="number"||typeof M=="boolean"){if(x!==M)return w[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(x.equals(M)===!1)return x.copy(M),!0}}return!1}function g(M){const w=M.uniforms;let b=0;const x=16;for(let _=0,T=w.length;_<T;_++){const N=Array.isArray(w[_])?w[_]:[w[_]];for(let C=0,P=N.length;C<P;C++){const L=N[C],F=Array.isArray(L.value)?L.value:[L.value],E=Array.isArray(w[_])||Array.isArray(L.value);let D=b;for(let O=0,Y=F.length;O<Y;O++){const H=F[O],G=v(H,E),K=b%x,ot=K%G.boundary,Q=K+ot;b+=ot,Q!==0&&x-Q<G.storage&&(b+=x-Q),O===0&&(D=b),b+=G.storage}const U=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new U((b-D)/Float32Array.BYTES_PER_ELEMENT),L.__offset=D}}const A=b%x;return A>0&&(b+=x-A),M.__size=b,M.__cache={},this}function v(M,w){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=16,b.storage=48):M.isMatrix4?(b.boundary=16,b.storage=64):M.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",M),w===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(M){const w=M.target;w.removeEventListener("dispose",p),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:m}}const lM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let jn=null;function cM(){return jn===null&&(jn=new _a(lM,16,16,as,yn),jn.name="DFG_LUT",jn.minFilter=Qe,jn.magFilter=Qe,jn.wrapS=si,jn.wrapT=si,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}class hM{constructor(t={}){const{canvas:e=N0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=An}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const v=f,p=new Set([eh,th,Qc]),m=new Set([An,qn,Ir,ks,$c,Jc]),M=new Uint32Array(4),w=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let x=null,A=null;const _=[],T=[];let N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,L=null,F=null,E=null,D=null;this._outputColorSpace=Xe;let U=0,O=0,Y=null,H=-1,G=null;const K=new Ae,ot=new Ae;let Q=null;const k=new Ut(0);let Z=0,q=e.width,st=e.height,W=1,j=null,ft=null;const dt=new Ae(0,0,q,st),Dt=new Ae(0,0,q,st);let Ft=!1;const Et=new Or,Yt=new hh;let Gt=!1,Xt=!1;const mt=new $t,ut=new y,Kt=new Ae,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function te(){return Y===null?W:1}let V=n;function Se(R,z){return e.getContext(R,z)}let Qt,ge,gt,Vt,Mt,Pt,I,S,X,ht,at,_t,yt,et,rt,bt,B,lt,nt,wt,xt,St,Zt;try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wc}`),e.addEventListener("webglcontextlost",Jt,!1),e.addEventListener("webglcontextrestored",ae,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),V===null){const z="webgl2";if(V=Se(z,R),V===null)throw Se(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ce()}catch(R){throw e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),ee("WebGLRenderer: "+R.message),R}function ce(){Qt=new fx(V),Qt.init(),xt=new tM(V,Qt),ge=new nx(V,Qt,t,xt),gt=new jy(V,Qt),ge.reversedDepthBuffer&&d&&gt.buffers.depth.setReversed(!0),F=V.createFramebuffer(),E=V.createFramebuffer(),D=V.createFramebuffer(),Vt=new gx(V),Mt=new ky,Pt=new Qy(V,Qt,gt,Mt,ge,xt,Vt),I=new dx(C),S=new vg(V),St=new tx(V,S),X=new px(V,S,Vt,St),ht=new vx(V,X,S,St,Vt),lt=new _x(V,ge,Pt),rt=new ix(Mt),at=new Oy(C,I,Qt,ge,St,rt),_t=new oM(C,Mt),yt=new zy,et=new qy(Qt),B=new Qv(C,I,gt,ht,g,l),bt=new Jy(C,ht,ge),Zt=new aM(V,Vt,ge,gt),nt=new ex(V,Qt,Vt),wt=new mx(V,Qt,Vt),Vt.programs=at.programs,C.capabilities=ge,C.extensions=Qt,C.properties=Mt,C.renderLists=yt,C.shadowMap=bt,C.state=gt,C.info=Vt}v!==An&&(N=new yx(v,e.width,e.height,a,s,r));const pt=new sM(C,V);this.xr=pt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Qt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Qt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(q,st,!1))},this.getSize=function(R){return R.set(q,st)},this.setSize=function(R,z,tt=!0){if(pt.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,st=z,e.width=Math.floor(R*W),e.height=Math.floor(z*W),tt===!0&&(e.style.width=R+"px",e.style.height=z+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(q*W,st*W).floor()},this.setDrawingBufferSize=function(R,z,tt){q=R,st=z,W=tt,e.width=Math.floor(R*tt),e.height=Math.floor(z*tt),this.setViewport(0,0,R,z)},this.setEffects=function(R){if(v===An){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let z=0;z<R.length;z++)if(R[z].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(K)},this.getViewport=function(R){return R.copy(dt)},this.setViewport=function(R,z,tt,$){R.isVector4?dt.set(R.x,R.y,R.z,R.w):dt.set(R,z,tt,$),gt.viewport(K.copy(dt).multiplyScalar(te()).round())},this.getScissor=function(R){return R.copy(Dt)},this.setScissor=function(R,z,tt,$){R.isVector4?Dt.set(R.x,R.y,R.z,R.w):Dt.set(R,z,tt,$),gt.scissor(ot.copy(Dt).multiplyScalar(te()).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(R){gt.setScissorTest(Ft=R)},this.setOpaqueSort=function(R){j=R},this.setTransparentSort=function(R){ft=R},this.getClearColor=function(R){return R.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(R=!0,z=!0,tt=!0){let $=0;if(R){let J=!1;if(Y!==null){const At=Y.texture.format;J=p.has(At)}if(J){const At=Y.texture.type,Bt=m.has(At),Tt=B.getClearColor(),Nt=B.getClearAlpha(),Wt=Tt.r,re=Tt.g,fe=Tt.b;Bt?(M[0]=Wt,M[1]=re,M[2]=fe,M[3]=Nt,V.clearBufferuiv(V.COLOR,0,M)):(w[0]=Wt,w[1]=re,w[2]=fe,w[3]=Nt,V.clearBufferiv(V.COLOR,0,w))}else $|=V.COLOR_BUFFER_BIT}z&&($|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),L=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",ae,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),B.dispose(),yt.dispose(),et.dispose(),Pt.dispose(),Mt.dispose(),I.dispose(),ht.dispose(),X.dispose(),St.dispose(),Zt.dispose(),at.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Dh),pt.removeEventListener("sessionend",Nh),Ki.stop()};function Jt(R){R.preventDefault(),oa("WebGLRenderer: Context Lost."),P=!0}function ae(){oa("WebGLRenderer: Context Restored."),P=!1;const R=Vt.autoReset,z=bt.enabled,tt=bt.autoUpdate,$=bt.needsUpdate,J=bt.type;ce(),Vt.autoReset=R,bt.enabled=z,bt.autoUpdate=tt,bt.needsUpdate=$,bt.type=J}function Lt(R){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function be(R){const z=R.target;z.removeEventListener("dispose",be),$e(z)}function $e(R){Ai(R),Mt.remove(R)}function Ai(R){const z=Mt.get(R).programs;z!==void 0&&(z.forEach(function(tt){at.releaseProgram(tt)}),R.isShaderMaterial&&at.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,tt,$,J,At){z===null&&(z=se);const Bt=J.isMesh&&J.matrixWorld.determinantAffine()<0,Tt=Zp(R,z,tt,$,J);gt.setMaterial($,Bt);let Nt=tt.index,Wt=1;if($.wireframe===!0){if(Nt=X.getWireframeAttribute(tt),Nt===void 0)return;Wt=2}const re=tt.drawRange,fe=tt.attributes.position;let zt=re.start*Wt,pe=(re.start+re.count)*Wt;At!==null&&(zt=Math.max(zt,At.start*Wt),pe=Math.min(pe,(At.start+At.count)*Wt)),Nt!==null?(zt=Math.max(zt,0),pe=Math.min(pe,Nt.count)):fe!=null&&(zt=Math.max(zt,0),pe=Math.min(pe,fe.count));const He=pe-zt;if(He<0||He===1/0)return;St.setup(J,$,Tt,tt,Nt);let Re,Ee=nt;if(Nt!==null&&(Re=S.get(Nt),Ee=wt,Ee.setIndex(Re)),J.isMesh)$.wireframe===!0?(gt.setLineWidth($.wireframeLinewidth*te()),Ee.setMode(V.LINES)):Ee.setMode(V.TRIANGLES);else if(J.isLine){let sn=$.linewidth;sn===void 0&&(sn=1),gt.setLineWidth(sn*te()),J.isLineSegments?Ee.setMode(V.LINES):J.isLineLoop?Ee.setMode(V.LINE_LOOP):Ee.setMode(V.LINE_STRIP)}else J.isPoints?Ee.setMode(V.POINTS):J.isSprite&&Ee.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))Ee.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const sn=J._multiDrawStarts,Ht=J._multiDrawCounts,hn=J._multiDrawCount,xe=Nt?S.get(Nt).bytesPerElement:1,Zi=Mt.get($).currentProgram.getUniforms();for(let rn=0;rn<hn;rn++)Zi.setValue(V,"_gl_DrawID",rn),Ee.render(sn[rn]/xe,Ht[rn])}else if(J.isInstancedMesh)Ee.renderInstances(zt,He,J.count);else if(tt.isInstancedBufferGeometry){const sn=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Ht=Math.min(tt.instanceCount,sn);Ee.renderInstances(zt,He,Ht)}else Ee.render(zt,He)};function Ih(R,z,tt,$){L!==null&&R.isNodeMaterial&&L.setObject($,R),Gt===!0&&rt.setState(R,tt,!1),R.transparent===!0&&R.side===ze&&R.forceSinglePass===!1?(R.side=pn,R.needsUpdate=!0,Zs(R,z,$),R.side=Gi,R.needsUpdate=!0,Zs(R,z,$),R.side=ze):Zs(R,z,$)}this.compile=function(R,z,tt=null){tt===null&&(tt=R),L!==null&&L.renderStart(R,z,tt),A=et.get(tt),A.init(z),T.push(A),tt.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(A.pushLight(J),J.castShadow&&A.pushShadow(J))}),R!==tt&&R.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(A.pushLight(J),J.castShadow&&A.pushShadow(J))}),A.setupLights(),L!==null&&L.updateLights(A.state.lightsArray),Xt=this.localClippingEnabled,Gt=rt.init(this.clippingPlanes,Xt),Gt===!0&&rt.setGlobalState(this.clippingPlanes,z),L!==null&&bt.render(A.state.shadowsArray,tt,z);const $=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const At=J.material;if(At)if(Array.isArray(At))for(let Bt=0;Bt<At.length;Bt++){const Tt=At[Bt];Ih(Tt,tt,z,J),$.add(Tt)}else Ih(At,tt,z,J),$.add(At)}),A=T.pop(),L!==null&&L.renderEnd(),$},this.compileAsync=function(R,z,tt=null){const $=this.compile(R,z,tt);return new Promise(J=>{function At(){if($.forEach(function(Bt){const Nt=Mt.get(Bt).currentProgram;(Nt===void 0||Nt.isReady())&&$.delete(Bt)}),$.size===0){J(R);return}setTimeout(At,10)}Qt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Ra=null;function Yp(R){Ra&&Ra(R)}function Dh(){Ki.stop()}function Nh(){Ki.start()}const Ki=new Yf;Ki.setAnimationLoop(Yp),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(R){Ra=R,pt.setAnimationLoop(R),R===null?Ki.stop():Ki.start()},pt.addEventListener("sessionstart",Dh),pt.addEventListener("sessionend",Nh),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(R,z);const tt=pt.enabled===!0&&pt.isPresenting===!0,$=N!==null&&(Y===null||tt)&&N.begin(C,Y);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(z),z=pt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,z,Y),A=et.get(R,T.length),A.init(z),A.state.textureUnits=Pt.getTextureUnits(),T.push(A),mt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?Yt.setFromArrayCamera(z):Et.setFromProjectionMatrix(mt,Wn,z.reversedDepth),Xt=this.localClippingEnabled,Gt=rt.init(this.clippingPlanes,Xt),x=yt.get(R,_.length),x.init(),_.push(x),this.info.render.frame++,pt.enabled===!0&&pt.isPresenting===!0){const Bt=C.xr.getDepthSensingMesh();Bt!==null&&Ca(Bt,z,-1/0,C.sortObjects)}Ca(R,z,0,C.sortObjects),x.finish(),L!==null&&L.updateLights(A.state.lightsArray),C.sortObjects===!0&&x.sort(j,ft),oe=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,oe&&B.addToRenderList(x,R),this.info.autoReset===!0&&this.info.reset(),Gt===!0&&rt.beginShadows();const J=A.state.shadowsArray;if(bt.render(J,R,z),Gt===!0&&rt.endShadows(),($&&N.hasRenderPass())===!1){const Bt=x.opaque,Tt=x.transmissive;if(A.setupLights(),z.isArrayCamera){const Nt=z.cameras;if(Tt.length>0)for(let Wt=0,re=Nt.length;Wt<re;Wt++){const fe=Nt[Wt];Fh(Bt,Tt,R,fe)}oe&&B.render(R);for(let Wt=0,re=Nt.length;Wt<re;Wt++){const fe=Nt[Wt];Uh(x,R,fe,fe.viewport)}}else Tt.length>0&&Fh(Bt,Tt,R,z),oe&&B.render(R),Uh(x,R,z)}Y!==null&&O===0&&(Pt.updateMultisampleRenderTarget(Y),Pt.updateRenderTargetMipmap(Y)),$&&N.end(C),R.isScene===!0&&R.onAfterRender(C,R,z),St.resetDefaultState(),H=-1,G=null,T.pop(),T.length>0?(A=T[T.length-1],Pt.setTextureUnits(A.state.textureUnits),Gt===!0&&rt.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?x=_[_.length-1]:x=null,L!==null&&L.renderEnd()};function Ca(R,z,tt,$){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)tt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)A.pushLight(R),R.castShadow&&A.pushShadow(R);else if(R.isSprite){const Bt=z.isArrayCamera?Yt:Et;if(!R.frustumCulled||R.intersectsFrustum(Bt)){$&&Kt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(mt);const Tt=ht.update(R),Nt=R.material;Nt.visible&&x.push(R,Tt,Nt,tt,Kt.z,null,z)}}else if(R.isMesh||R.isLine||R.isPoints){const Bt=z.isArrayCamera?Yt:Et;if(!R.frustumCulled||R.intersectsFrustum(Bt)){const Tt=ht.update(R),Nt=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Kt.copy(R.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Kt.copy(Tt.boundingSphere.center)),Kt.applyMatrix4(R.matrixWorld).applyMatrix4(mt)),Array.isArray(Nt)){const Wt=Tt.groups;for(let re=0,fe=Wt.length;re<fe;re++){const zt=Wt[re],pe=Nt[zt.materialIndex];pe&&pe.visible&&x.push(R,Tt,pe,tt,Kt.z,zt,z)}}else Nt.visible&&x.push(R,Tt,Nt,tt,Kt.z,null,z)}}}const At=R.children;for(let Bt=0,Tt=At.length;Bt<Tt;Bt++)Ca(At[Bt],z,tt,$)}function Uh(R,z,tt,$){const{opaque:J,transmissive:At,transparent:Bt}=R;A.setupLightsView(tt),Gt===!0&&rt.setGlobalState(C.clippingPlanes,tt),$&&gt.viewport(K.copy($)),J.length>0&&Kr(J,z,tt),At.length>0&&Kr(At,z,tt),Bt.length>0&&Kr(Bt,z,tt),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Fh(R,z,tt,$){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[$.id]===void 0){const zt=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[$.id]=new ln(1,1,{generateMipmaps:!0,type:zt?yn:An,minFilter:ri,samples:Math.max(4,ge.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}const At=A.state.transmissionRenderTarget[$.id],Bt=$.viewport||K;At.setSize(Bt.z*C.transmissionResolutionScale,Bt.w*C.transmissionResolutionScale);const Tt=C.getRenderTarget(),Nt=C.getActiveCubeFace(),Wt=C.getActiveMipmapLevel();C.setRenderTarget(At),C.getClearColor(k),Z=C.getClearAlpha(),Z<1&&C.setClearColor(16777215,.5),C.clear(),oe&&B.render(tt);const re=C.toneMapping;C.toneMapping=oi;const fe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),A.setupLightsView($),Gt===!0&&rt.setGlobalState(C.clippingPlanes,$),Kr(R,tt,$),Pt.updateMultisampleRenderTarget(At),Pt.updateRenderTargetMipmap(At),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let pe=0,He=z.length;pe<He;pe++){const Re=z[pe],{object:Ee,geometry:sn,material:Ht,group:hn}=Re;if(Ht.side===ze&&Ee.layers.test($.layers)){const xe=Ht.side;Ht.side=pn,Ht.needsUpdate=!0,Oh(Ee,tt,$,sn,Ht,hn),Ht.side=xe,Ht.needsUpdate=!0,zt=!0}}zt===!0&&(Pt.updateMultisampleRenderTarget(At),Pt.updateRenderTargetMipmap(At))}C.setRenderTarget(Tt,Nt,Wt),C.setClearColor(k,Z),fe!==void 0&&($.viewport=fe),C.toneMapping=re}function Kr(R,z,tt){const $=z.isScene===!0?z.overrideMaterial:null;for(let J=0,At=R.length;J<At;J++){const Bt=R[J],{object:Tt,geometry:Nt,group:Wt}=Bt;let re=Bt.material;re.allowOverride===!0&&$!==null&&(re=$),Tt.layers.test(tt.layers)&&Oh(Tt,z,tt,Nt,re,Wt)}}function Oh(R,z,tt,$,J,At){L!==null&&J.isNodeMaterial&&L.setObject(R,J),R.onBeforeRender(C,z,tt,$,J,At),R.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(C,z,tt,$,R,At),J.transparent===!0&&J.side===ze&&J.forceSinglePass===!1?(J.side=pn,J.needsUpdate=!0,C.renderBufferDirect(tt,z,$,J,R,At),J.side=Gi,J.needsUpdate=!0,C.renderBufferDirect(tt,z,$,J,R,At),J.side=ze):C.renderBufferDirect(tt,z,$,J,R,At),R.onAfterRender(C,z,tt,$,J,At)}function kh(R){let z=0;for(const tt of R)tt.texture!==null&&z++;return z}function Zs(R,z,tt){z.isScene!==!0&&(z=se);const $=Mt.get(R),J=A.state.lights,At=A.state.shadowsArray,Bt=J.state.version,Tt=at.getParameters(R,J.state,At,z,tt,A.state.lightProbeGridArray),Nt=at.getProgramCacheKey(Tt);let Wt=$.programs;$.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?z.environment:null,$.fog=z.fog;const re=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;$.envMap=I.get(R.envMap||$.environment,re),$.envMapRotation=$.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,Wt===void 0&&(R.addEventListener("dispose",be),Wt=new Map,$.programs=Wt,$.programVariants=new Map);let fe=Wt.get(Nt);if(fe!==void 0){if($.currentProgram===fe&&$.lightsStateVersion===Bt)return zh(R,Tt),fe}else Tt.uniforms=at.getUniforms(R),L!==null&&R.isNodeMaterial&&L.build(R,tt,Tt),R.onBeforeCompile(Tt,C),fe=at.acquireProgram(Tt,Nt),Wt.set(Nt,fe),$.uniforms=Tt.uniforms;const zt=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(zt.clippingPlanes=rt.uniform),zh(R,Tt),$.needsLights=Jp(R),$.lightsStateVersion=Bt,$.needsLights&&(zt.ambientLightColor.value=J.state.ambient,zt.lightProbe.value=J.state.probe,zt.sunLights.value=J.state.sun,zt.sunLightShadows.value=J.state.sunShadow,zt.directionalLights.value=J.state.directional,zt.directionalLightShadows.value=J.state.directionalShadow,zt.spotLights.value=J.state.spot,zt.spotLightShadows.value=J.state.spotShadow,zt.rectAreaLights.value=J.state.rectArea,zt.ltc_1.value=J.state.rectAreaLTC1,zt.ltc_2.value=J.state.rectAreaLTC2,zt.pointLights.value=J.state.point,zt.pointLightShadows.value=J.state.pointShadow,zt.hemisphereLights.value=J.state.hemi,zt.sunShadowMatrix.value=J.state.sunShadowMatrix,zt.sunShadowCascade.value=J.state.sunShadowCascade,zt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,zt.spotLightMatrix.value=J.state.spotLightMatrix,zt.spotLightMap.value=J.state.spotLightMap,zt.pointShadowMatrix.value=J.state.pointShadowMatrix),$.numLightProbeGrids=kh(A.state.lightProbeGridArray),$.currentProgram=fe,$.uniformsList=null,fe}function Kp(R,z,tt,$,J){const At=Mt.get(R),Bt=At.currentProgram.id+","+$+","+J;let Tt=At.programVariants.get(Bt);return Tt===void 0?(Tt=Zs(R,z,tt),At.programVariants.set(Bt,Tt)):(At.currentProgram=Tt,At.uniformsList=null,At.outputColorSpace=$,At.toneMapping=J),Tt}function Bh(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=Zo.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function zh(R,z){const tt=Mt.get(R);tt.outputColorSpace=z.outputColorSpace,tt.batching=z.batching,tt.batchingColor=z.batchingColor,tt.instancing=z.instancing,tt.instancingColor=z.instancingColor,tt.instancingMorph=z.instancingMorph,tt.skinning=z.skinning,tt.morphTargets=z.morphTargets,tt.morphNormals=z.morphNormals,tt.morphColors=z.morphColors,tt.morphTargetsCount=z.morphTargetsCount,tt.numClippingPlanes=z.numClippingPlanes,tt.numIntersection=z.numClipIntersection,tt.vertexAlphas=z.vertexAlphas,tt.vertexTangents=z.vertexTangents,tt.toneMapping=z.toneMapping}function Zp(R,z,tt,$,J){z.isScene!==!0&&(z=se),Pt.resetTextureUnits();const At=z.fog,Bt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?z.environment:null,Tt=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:de.workingColorSpace,Nt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Wt=I.get($.envMap||Bt,Nt),re=$.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,fe=!!tt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),zt=!!tt.morphAttributes.position,pe=!!tt.morphAttributes.normal,He=!!tt.morphAttributes.color;let Re=oi;$.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Re=C.toneMapping);const Ee=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,sn=Ee!==void 0?Ee.length:0,Ht=Mt.get($),hn=A.state.lights;if(Gt===!0&&(Xt===!0||R!==G)){const Ne=R===G&&$.id===H;rt.setState($,R,Ne)}let xe=!1,Zi=!1;$.version===Ht.__version?Ht.needsLights&&Ht.lightsStateVersion!==hn.state.version||J.isBatchedMesh&&Ht.batching===!1||!J.isBatchedMesh&&Ht.batching===!0||J.isBatchedMesh&&Ht.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Ht.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Ht.instancing===!1||!J.isInstancedMesh&&Ht.instancing===!0||J.isSkinnedMesh&&Ht.skinning===!1||!J.isSkinnedMesh&&Ht.skinning===!0||J.isInstancedMesh&&Ht.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ht.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ht.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ht.instancingMorph===!1&&J.morphTexture!==null||Ht.envMap!==Wt||$.fog===!0&&Ht.fog!==At||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==rt.numPlanes||Ht.numIntersection!==rt.numIntersection)||Ht.vertexAlphas!==re||Ht.vertexTangents!==fe||Ht.morphTargets!==zt||Ht.morphNormals!==pe||Ht.morphColors!==He||Ht.morphTargetsCount!==sn||Ht.numLightProbeGrids!==kh(A.state.lightProbeGridArray)?xe=!0:(Ht.outputColorSpace!==Tt||Ht.toneMapping!==Re)&&(Zi=!0):(xe=!0,Ht.__version=$.version);let rn=Ht.currentProgram;(xe===!0||Zi===!0)&&(rn=Zi===!0?Kp($,z,J,Tt,Re):Zs($,z,J),L&&$.isNodeMaterial&&L.onUpdateProgram($,rn,Ht));let Zr=!1,Ri=!1,$i=!1;const _e=rn.getUniforms(),en=Ht.uniforms;if(gt.useProgram(rn.program)&&(Zr=!0,Ri=!0,$i=!0),$.id!==H&&(H=$.id,Ri=!0),Zr||G!==R){gt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),_e.setValue(V,"projectionMatrix",R.projectionMatrix),_e.setValue(V,"viewMatrix",R.matrixWorldInverse);const Je=_e.map.cameraPosition;Je!==void 0&&Je.setValue(V,ut.setFromMatrixPosition(R.matrixWorld)),ge.logarithmicDepthBuffer&&_e.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&_e.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),G!==R&&(G=R,Ri=!0,$i=!0)}if(Ht.needsLights&&(hn.state.sunShadowMap.length>0&&_e.setValue(V,"sunShadowMap",hn.state.sunShadowMap,Pt),hn.state.directionalShadowMap.length>0&&_e.setValue(V,"directionalShadowMap",hn.state.directionalShadowMap,Pt),hn.state.spotShadowMap.length>0&&_e.setValue(V,"spotShadowMap",hn.state.spotShadowMap,Pt),hn.state.pointShadowMap.length>0&&_e.setValue(V,"pointShadowMap",hn.state.pointShadowMap,Pt)),J.isSkinnedMesh){_e.setOptional(V,J,"bindMatrix"),_e.setOptional(V,J,"bindMatrixInverse");const Ne=J.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),_e.setValue(V,"boneTexture",Ne.boneTexture,Pt))}J.isBatchedMesh&&(_e.setOptional(V,J,"batchingTexture"),_e.setValue(V,"batchingTexture",J._matricesTexture,Pt),_e.setOptional(V,J,"batchingIdTexture"),_e.setValue(V,"batchingIdTexture",J._indirectTexture,Pt),_e.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&_e.setValue(V,"batchingColorTexture",J._colorsTexture,Pt));const kn=tt.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&lt.update(J,tt,rn),(Ri||Ht.receiveShadow!==J.receiveShadow)&&(Ht.receiveShadow=J.receiveShadow,_e.setValue(V,"receiveShadow",J.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&z.environment!==null&&(en.envMapIntensity.value=z.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=cM()),Ri){if(_e.setValue(V,"toneMappingExposure",C.toneMappingExposure),Ht.needsLights&&$p(en,$i),At&&$.fog===!0&&_t.refreshFogUniforms(en,At),_t.refreshMaterialUniforms(en,$,W,st,A.state.transmissionRenderTarget[R.id]),Ht.needsLights&&Ht.numLightProbeGrids>0){const Ne=b;let Je=0;for(const fi of A.state.lightProbeGridArray)fi.texture!==null&&(Ne.textures[Je]=fi.texture,Ne.min[Je]=fi.boundingBox.min,Ne.max[Je]=fi.boundingBox.max,Ne.resolution[Je]=fi.resolution,Je++);for(const fi in Ne)Ne[fi].length=Je;en.probesSH.value=Ne.textures,en.probesMin.value=Ne.min,en.probesMax.value=Ne.max,en.probesResolution.value=Ne.resolution}Zo.upload(V,Bh(Ht),en,Pt)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Zo.upload(V,Bh(Ht),en,Pt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&_e.setValue(V,"center",J.center),_e.setValue(V,"modelViewMatrix",J.modelViewMatrix),_e.setValue(V,"normalMatrix",J.normalMatrix),_e.setValue(V,"modelMatrix",J.matrixWorld),$.uniformsGroups!==void 0){const Ne=$.uniformsGroups;for(let Je=0,fi=Ne.length;Je<fi;Je++){const Gh=Ne[Je];Zt.update(Gh,rn),Zt.bind(Gh,rn)}}return rn}function $p(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.sunLights.needsUpdate=z,R.sunLightShadows.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function Jp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,z,tt){const $=Mt.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Mt.get(R.texture).__webglTexture=z,Mt.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:tt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,z){const tt=Mt.get(R);tt.__webglFramebuffer=z,tt.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,tt=0){Y=R,U=z,O=tt;let $=null,J=!1,At=!1;if(R){const Tt=Mt.get(R);if(Tt.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(V.FRAMEBUFFER,Tt.__webglFramebuffer),K.copy(R.viewport),ot.copy(R.scissor),Q=R.scissorTest,gt.viewport(K),gt.scissor(ot),gt.setScissorTest(Q),H=-1;return}else if(Tt.__webglFramebuffer===void 0)Pt.setupRenderTarget(R);else if(Tt.__hasExternalTextures)Pt.rebindTextures(R,Mt.get(R.texture).__webglTexture,Mt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const re=R.depthTexture;if(Tt.__boundDepthTexture!==re){if(re!==null&&Mt.has(re)&&(R.width!==re.image.width||R.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Pt.setupDepthRenderbuffer(R)}}const Nt=R.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(At=!0);const Wt=Mt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Wt[z])?$=Wt[z][tt]:$=Wt[z],J=!0):R.samples>0&&Pt.useMultisampledRTT(R)===!1?$=Mt.get(R).__webglMultisampledFramebuffer:Array.isArray(Wt)?$=Wt[tt]:$=Wt,K.copy(R.viewport),ot.copy(R.scissor),Q=R.scissorTest}else K.copy(dt).multiplyScalar(W).floor(),ot.copy(Dt).multiplyScalar(W).floor(),Q=Ft;if(tt!==0&&($=F),gt.bindFramebuffer(V.FRAMEBUFFER,$)&&gt.drawBuffers(R,$),gt.viewport(K),gt.scissor(ot),gt.setScissorTest(Q),J){const Tt=Mt.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+z,Tt.__webglTexture,tt)}else if(At){const Tt=z;for(let Nt=0;Nt<R.textures.length;Nt++){const Wt=Mt.get(R.textures[Nt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Nt,Wt.__webglTexture,tt,Tt)}}else if(R!==null&&tt!==0){const Tt=Mt.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Tt.__webglTexture,tt)}H=-1};function Hh(R){const z=Mt.get(R);return(z.__readFormat!==R.format||z.__readType!==R.type)&&(z.__readFormat=R.format,z.__readType=R.type,z.__formatReadable=ge.textureFormatReadable(R.format),z.__typeReadable=ge.textureTypeReadable(R.type)),z}this.readRenderTargetPixels=function(R,z,tt,$,J,At,Bt,Tt=0){if(!(R&&R.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Mt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Nt=Nt[Bt],Array.isArray(Nt)&&(Nt=Nt[0])),Nt){gt.bindFramebuffer(V.FRAMEBUFFER,Nt);try{const Wt=R.textures[Tt],re=Wt.format,fe=Wt.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Tt);const zt=Hh(Wt);if(zt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-$&&tt>=0&&tt<=R.height-J&&V.readPixels(z,tt,$,J,xt.convert(re),xt.convert(fe),At)}finally{const Wt=Y!==null?Mt.get(Y).__webglFramebuffer:null;gt.bindFramebuffer(V.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(R,z,tt,$,J,At,Bt,Tt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Mt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(Nt=Nt[Bt],Array.isArray(Nt)&&(Nt=Nt[0])),Nt)if(z>=0&&z<=R.width-$&&tt>=0&&tt<=R.height-J){gt.bindFramebuffer(V.FRAMEBUFFER,Nt);const Wt=R.textures[Tt],re=Wt.format,fe=Wt.type;R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Tt);const zt=Hh(Wt);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,pe),V.bufferData(V.PIXEL_PACK_BUFFER,At.byteLength,V.STREAM_READ),V.readPixels(z,tt,$,J,xt.convert(re),xt.convert(fe),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);const He=Y!==null?Mt.get(Y).__webglFramebuffer:null;gt.bindFramebuffer(V.FRAMEBUFFER,He);const Re=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await U0(V,Re,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,pe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,At),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(pe),V.deleteSync(Re),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,z=null,tt=0){const $=Math.pow(2,-tt),J=Math.floor(R.image.width*$),At=Math.floor(R.image.height*$),Bt=z!==null?z.x:0,Tt=z!==null?z.y:0;Pt.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,tt,0,0,Bt,Tt,J,At),gt.unbindTexture()},this.copyTextureToTexture=function(R,z,tt=null,$=null,J=0,At=0){let Bt,Tt,Nt,Wt,re,fe,zt,pe,He;const Re=R.isCompressedTexture?R.mipmaps[At]:R.image;if(tt!==null)Bt=tt.max.x-tt.min.x,Tt=tt.max.y-tt.min.y,Nt=tt.isBox3?tt.max.z-tt.min.z:1,Wt=tt.min.x,re=tt.min.y,fe=tt.isBox3?tt.min.z:0;else{const _e=Math.pow(2,-J);Bt=Math.floor(Re.width*_e),Tt=Math.floor(Re.height*_e),R.isDataArrayTexture?Nt=Re.depth:R.isData3DTexture?Nt=Math.floor(Re.depth*_e):Nt=1,Wt=0,re=0,fe=0}$!==null?(zt=$.x,pe=$.y,He=$.z):(zt=0,pe=0,He=0);const Ee=xt.convert(z.format),sn=xt.convert(z.type);let Ht;z.isData3DTexture?(Pt.setTexture3D(z,0),Ht=V.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Pt.setTexture2DArray(z,0),Ht=V.TEXTURE_2D_ARRAY):(Pt.setTexture2D(z,0),Ht=V.TEXTURE_2D),gt.activeTexture(V.TEXTURE0),gt.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,z.flipY),gt.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),gt.pixelStorei(V.UNPACK_ALIGNMENT,z.unpackAlignment);const hn=gt.getParameter(V.UNPACK_ROW_LENGTH),xe=gt.getParameter(V.UNPACK_IMAGE_HEIGHT),Zi=gt.getParameter(V.UNPACK_SKIP_PIXELS),rn=gt.getParameter(V.UNPACK_SKIP_ROWS),Zr=gt.getParameter(V.UNPACK_SKIP_IMAGES);gt.pixelStorei(V.UNPACK_ROW_LENGTH,Re.width),gt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Re.height),gt.pixelStorei(V.UNPACK_SKIP_PIXELS,Wt),gt.pixelStorei(V.UNPACK_SKIP_ROWS,re),gt.pixelStorei(V.UNPACK_SKIP_IMAGES,fe);const Ri=R.isDataArrayTexture||R.isData3DTexture,$i=z.isDataArrayTexture||z.isData3DTexture;if(R.isDepthTexture){const _e=Mt.get(R),en=Mt.get(z),kn=Mt.get(_e.__renderTarget),Ne=Mt.get(en.__renderTarget);gt.bindFramebuffer(V.READ_FRAMEBUFFER,kn.__webglFramebuffer),gt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Je=0;Je<Nt;Je++)Ri&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Mt.get(R).__webglTexture,J,fe+Je),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Mt.get(z).__webglTexture,At,He+Je)),V.blitFramebuffer(Wt,re,Wt+Bt,re+Tt,zt,pe,zt+Bt,pe+Tt,V.DEPTH_BUFFER_BIT,V.NEAREST);gt.bindFramebuffer(V.READ_FRAMEBUFFER,null),gt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||Mt.has(R)){const _e=Mt.get(R),en=Mt.get(z);gt.bindFramebuffer(V.READ_FRAMEBUFFER,E),gt.bindFramebuffer(V.DRAW_FRAMEBUFFER,D);for(let kn=0;kn<Nt;kn++)Ri?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,_e.__webglTexture,J,fe+kn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,_e.__webglTexture,J),$i?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,en.__webglTexture,At,He+kn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,en.__webglTexture,At),J!==0?V.blitFramebuffer(Wt,re,Wt+Bt,re+Tt,zt,pe,zt+Bt,pe+Tt,V.COLOR_BUFFER_BIT,V.NEAREST):$i?V.copyTexSubImage3D(Ht,At,zt,pe,He+kn,Wt,re,Bt,Tt):V.copyTexSubImage2D(Ht,At,zt,pe,Wt,re,Bt,Tt);gt.bindFramebuffer(V.READ_FRAMEBUFFER,null),gt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else $i?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Ht,At,zt,pe,He,Bt,Tt,Nt,Ee,sn,Re.data):z.isCompressedArrayTexture?V.compressedTexSubImage3D(Ht,At,zt,pe,He,Bt,Tt,Nt,Ee,Re.data):V.texSubImage3D(Ht,At,zt,pe,He,Bt,Tt,Nt,Ee,sn,Re):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,At,zt,pe,Bt,Tt,Ee,sn,Re.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,At,zt,pe,Re.width,Re.height,Ee,Re.data):V.texSubImage2D(V.TEXTURE_2D,At,zt,pe,Bt,Tt,Ee,sn,Re);gt.pixelStorei(V.UNPACK_ROW_LENGTH,hn),gt.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xe),gt.pixelStorei(V.UNPACK_SKIP_PIXELS,Zi),gt.pixelStorei(V.UNPACK_SKIP_ROWS,rn),gt.pixelStorei(V.UNPACK_SKIP_IMAGES,Zr),At===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&V.generateMipmap(Ht),gt.unbindTexture()},this.initRenderTarget=function(R){Mt.get(R).__webglFramebuffer===void 0&&Pt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Pt.setTextureCube(R,0):R.isData3DTexture?Pt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Pt.setTexture2DArray(R,0):Pt.setTexture2D(R,0),gt.unbindTexture()},this.resetState=function(){U=0,O=0,Y=null,gt.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}}const ud={type:"change"},xh={type:"start"},sp={type:"end"},To=new Gs,dd=new En,uM=Math.cos(70*tn.DEG2RAD),We=new y,_n=2*Math.PI,ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ul=1e-6;class dM extends gg{constructor(t,e=null){super(t,e),this.state=ye.NONE,this.target=new y,this.cursor=new y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Is.ROTATE,MIDDLE:Is.DOLLY,RIGHT:Is.PAN},this.touches={ONE:Ps.ROTATE,TWO:Ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new y,this._lastQuaternion=new ve,this._lastTargetPosition=new y,this._quat=new ve().setFromUnitVectors(t.up,new y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rc,this._sphericalDelta=new Rc,this._scale=1,this._panOffset=new y,this._rotateStart=new kt,this._rotateEnd=new kt,this._rotateDelta=new kt,this._panStart=new kt,this._panEnd=new kt,this._panDelta=new kt,this._dollyStart=new kt,this._dollyEnd=new kt,this._dollyDelta=new kt,this._dollyDirection=new y,this._mouse=new kt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=pM.bind(this),this._onPointerDown=fM.bind(this),this._onPointerUp=mM.bind(this),this._onContextMenu=SM.bind(this),this._onMouseWheel=vM.bind(this),this._onKeyDown=xM.bind(this),this._onTouchStart=yM.bind(this),this._onTouchMove=MM.bind(this),this._onMouseDown=gM.bind(this),this._onMouseMove=_M.bind(this),this._interceptControlDown=bM.bind(this),this._interceptControlUp=wM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ye.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ud),this.update(),this.state=ye.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;We.copy(e).sub(this.target),We.applyQuaternion(this._quat),this._spherical.setFromVector3(We),this.autoRotate&&this.state===ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=_n:n>Math.PI&&(n-=_n),s<-Math.PI?s+=_n:s>Math.PI&&(s-=_n),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(We.setFromSpherical(this._spherical),We.applyQuaternion(this._quatInverse),e.copy(this.target).add(We),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=We.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new y(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=We.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(To.origin.copy(this.object.position),To.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(To.direction))<uM?this.object.lookAt(this.target):(dd.setFromNormalAndCoplanarPoint(this.object.up,this.target),To.intersectPlane(dd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ul||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ul||this._lastTargetPosition.distanceToSquared(this.target)>ul?(this.dispatchEvent(ud),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?_n/60*this.autoRotateSpeed*t:_n/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){We.setFromMatrixColumn(e,0),We.multiplyScalar(-t),this._panOffset.add(We)}_panUp(t,e){this.screenSpacePanning===!0?We.setFromMatrixColumn(e,1):(We.setFromMatrixColumn(e,0),We.crossVectors(this.object.up,We)),We.multiplyScalar(t),this._panOffset.add(We)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;We.copy(s).sub(this.target);let r=We.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/e.clientHeight),this._rotateUp(_n*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/e.clientHeight),this._rotateUp(_n*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new kt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function fM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function pM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function mM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sp),this.state=ye.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function gM(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ye.DOLLY;break;case Is.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ye.ROTATE}break;case Is.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ye.PAN}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(xh)}function _M(i){switch(this.state){case ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function vM(i){this.enabled===!1||this.enableZoom===!1||this.state!==ye.NONE||(i.preventDefault(),this.dispatchEvent(xh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(sp))}function xM(i){this.enabled!==!1&&this._handleKeyDown(i)}function yM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ps.ROTATE:if(this.enableRotate===!1){this.state=ye.NONE;break}this._handleTouchStartRotate(i),this.state=ye.TOUCH_ROTATE;break;case Ps.PAN:if(this.enablePan===!1){this.state=ye.NONE;break}this._handleTouchStartPan(i),this.state=ye.TOUCH_PAN;break;default:this.state=ye.NONE}break;case 2:switch(this.touches.TWO){case Ps.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ye.TOUCH_DOLLY_PAN;break;case Ps.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ye.TOUCH_DOLLY_ROTATE;break;default:this.state=ye.NONE}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(xh)}function MM(i){switch(this._trackPointer(i),this.state){case ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ye.NONE}}function SM(i){this.enabled!==!1&&i.preventDefault()}function bM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qi(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const Ot=(i,t,e)=>i<t?t:i>e?e:i,TM=i=>Ot(i,0,1),ct=(i,t,e)=>i+(t-i)*e,Ct=Math.PI/180;function it(i,t,e){const n=TM((e-i)/(t-i));return n*n*(3-2*n)}function Ln(i,t){const e=i.length,n=Ot(t,0,e-1),s=Math.min(Math.floor(n),e-2),r=n-s,o=i[Math.max(s-1,0)],a=i[s],l=i[s+1],c=i[Math.min(s+2,e-1)];return .5*(2*a+(-o+l)*r+(2*o-5*a+4*l-c)*r*r+(-o+3*a-3*l+c)*r*r*r)}function Cn(i,t,e,n){return ct(i,t,1-Math.exp(-e*n))}function rp(i,t,e,n){return i+Math.atan2(Math.sin(t-i),Math.cos(t-i))*(1-Math.exp(-e*n))}function fd(i,t){let e=i*374761393+t*668265263|0;return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function Ve(i,t=0){const e=Math.floor(i),n=i-e,s=n*n*(3-2*n);return ct(fd(e,t),fd(e+1,t),s)*2-1}const vt=(i,t,e)=>t+(e-t)*i();function EM(i,t,e,n=2){return t+(e-t)*Math.pow(i(),n)}class Ti{constructor(t=6,e=.5){this.freq=t,this.zeta=e}freq;zeta;x=0;v=0;step(t,e){const n=this.freq*Math.PI*2,s=Math.max(1,Math.ceil(e*this.freq*8)),r=e/s;for(let o=0;o<s;o++)this.v+=(-n*n*(this.x-t)-2*this.zeta*n*this.v)*r,this.x+=this.v*r;return this.x}kick(t){this.v+=t}}const AM=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}
`,RM=`
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
`;function op(i=0){const t=qi(7),e=[],n=[];for(let o=0;o<48;o++){const a=(t()-.5)*Math.PI*2,l=(t()-.35)*1.2;e.push(new y(Math.sin(a)*Math.cos(l),Math.sin(l),-Math.cos(a)*Math.cos(l)).normalize()),n.push(new kt(.06+t()*.14,.15+t()*.6))}const s=new xn({vertexShader:AM,fragmentShader:RM,uniforms:{uTime:{value:0},uEnv:{value:0},uMist:{value:i},uBlobs:{value:e},uBlobR:{value:n},uBlobCos:{value:n.map(o=>Math.cos(o.x))}},side:pn,depthWrite:!1}),r=new me(new ci(50,64,32),s);return r.frustumCulled=!1,r.renderOrder=1e3,{mesh:r,material:s}}const Ue=new Dn,Eo=new y,pd=new kt,md=new kt,gd=new kt;class CM{constructor(t){this.geometry=t.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(t){return this.weightAttribute=t?this.geometry.getAttribute(t):null,this}build(){const t=this.indexAttribute,e=this.positionAttribute,n=this.weightAttribute,s=t?t.count/3:e.count/3,r=new Float32Array(s);for(let l=0;l<s;l++){let c=1,h=3*l,u=3*l+1,d=3*l+2;t&&(h=t.getX(h),u=t.getX(u),d=t.getX(d)),n&&(c=n.getX(h)+n.getX(u)+n.getX(d)),Ue.a.fromBufferAttribute(e,h),Ue.b.fromBufferAttribute(e,u),Ue.c.fromBufferAttribute(e,d),c*=Ue.getArea(),r[l]=c}const o=new Float32Array(s);let a=0;for(let l=0;l<s;l++)a+=r[l],o[l]=a;return this.distribution=o,this}setRandomGenerator(t){return this.randomFunction=t,this}sample(t,e,n,s){const r=this._sampleFaceIndex();return this._sampleFace(r,t,e,n,s)}_sampleFaceIndex(){const t=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*t)}_binarySearch(t){const e=this.distribution;let n=0,s=e.length-1,r=-1;for(;n<=s;){const o=Math.ceil((n+s)/2);if(o===0||e[o-1]<=t&&e[o]>t){r=o;break}else t<e[o]?s=o-1:n=o+1}return r}_sampleFace(t,e,n,s,r){let o=this.randomFunction(),a=this.randomFunction();o+a>1&&(o=1-o,a=1-a);const l=this.indexAttribute;let c=t*3,h=t*3+1,u=t*3+2;return l&&(c=l.getX(c),h=l.getX(h),u=l.getX(u)),Ue.a.fromBufferAttribute(this.positionAttribute,c),Ue.b.fromBufferAttribute(this.positionAttribute,h),Ue.c.fromBufferAttribute(this.positionAttribute,u),e.set(0,0,0).addScaledVector(Ue.a,o).addScaledVector(Ue.b,a).addScaledVector(Ue.c,1-(o+a)),n!==void 0&&(this.normalAttribute!==void 0?(Ue.a.fromBufferAttribute(this.normalAttribute,c),Ue.b.fromBufferAttribute(this.normalAttribute,h),Ue.c.fromBufferAttribute(this.normalAttribute,u),n.set(0,0,0).addScaledVector(Ue.a,o).addScaledVector(Ue.b,a).addScaledVector(Ue.c,1-(o+a)).normalize()):Ue.getNormal(n)),s!==void 0&&this.colorAttribute!==void 0&&(Ue.a.fromBufferAttribute(this.colorAttribute,c),Ue.b.fromBufferAttribute(this.colorAttribute,h),Ue.c.fromBufferAttribute(this.colorAttribute,u),Eo.set(0,0,0).addScaledVector(Ue.a,o).addScaledVector(Ue.b,a).addScaledVector(Ue.c,1-(o+a)),s.r=Eo.x,s.g=Eo.y,s.b=Eo.z),r!==void 0&&this.uvAttribute!==void 0&&(pd.fromBufferAttribute(this.uvAttribute,c),md.fromBufferAttribute(this.uvAttribute,h),gd.fromBufferAttribute(this.uvAttribute,u),r.set(0,0).addScaledVector(pd,o).addScaledVector(md,a).addScaledVector(gd,1-(o+a))),this}}function _d(i,t){if(t===b0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===Sc||t===wf){let e=i.getIndex();if(e===null){const r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===Sc)for(let r=1;r<=n;r++)s.push(e.getX(0)),s.push(e.getX(r)),s.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(e.getX(r)),s.push(e.getX(r+1)),s.push(e.getX(r+2))):(s.push(e.getX(r+2)),s.push(e.getX(r+1)),s.push(e.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}function PM(i){const t=new Map,e=new Map,n=i.clone();return ap(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=t.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return e.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function ap(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)ap(i.children[n],t.children[n],e)}class LM extends qs{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new FM(e)}),this.register(function(e){return new OM(e)}),this.register(function(e){return new kM(e)}),this.register(function(e){return new YM(e)}),this.register(function(e){return new KM(e)}),this.register(function(e){return new ZM(e)}),this.register(function(e){return new zM(e)}),this.register(function(e){return new HM(e)}),this.register(function(e){return new GM(e)}),this.register(function(e){return new VM(e)}),this.register(function(e){return new UM(e)}),this.register(function(e){return new WM(e)}),this.register(function(e){return new BM(e)}),this.register(function(e){return new qM(e)}),this.register(function(e){return new XM(e)}),this.register(function(e){return new DM(e)}),this.register(function(e){return new vd(e,ue.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new vd(e,ue.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new $M(e)})}load(t,e,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Er.extractUrlBase(t);o=Er.resolveURL(c,this.path)}else o=Er.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){s?s(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new Vf(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===lp){try{o[ue.KHR_BINARY_GLTF]=new JM(t)}catch(u){s&&s(u);return}r=JSON.parse(o[ue.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new h1(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ue.KHR_MATERIALS_UNLIT:o[u]=new NM;break;case ue.KHR_DRACO_MESH_COMPRESSION:o[u]=new jM(r,this.dracoLoader);break;case ue.KHR_TEXTURE_TRANSFORM:o[u]=new QM;break;case ue.KHR_MESH_QUANTIZATION:o[u]=new t1;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function IM(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}function Oe(i,t,e){const n=i.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}const ue={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class DM{constructor(t){this.parser=t,this.name=ue.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const h=new Ut(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Mn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new mh(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new tg(h),c.distance=u;break;case"spot":c=new jm(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ei(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),s=Promise.resolve(c),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class NM{constructor(){this.name=ue.KHR_MATERIALS_UNLIT}getMaterialType(){return Xn}extendParams(t,e,n){const s=[];t.color=new Ut(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Mn),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,Xe))}return Promise.all(s)}}class UM{constructor(t){this.parser=t,this.name=ue.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class FM{constructor(t){this.parser=t,this.name=ue.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new kt(r,r)}return Promise.all(s)}}class OM{constructor(t){this.parser=t,this.name=ue.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];return e.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}}class kM{constructor(t){this.parser=t,this.name=ue.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class BM{constructor(t){this.parser=t,this.name=ue.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class zM{constructor(t){this.parser=t,this.name=ue.KHR_MATERIALS_SHEEN}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];if(e.sheenColor=new Ut(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],Mn)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,Xe)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class HM{constructor(t){this.parser=t,this.name=ue.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class GM{constructor(t){this.parser=t,this.name=ue.KHR_MATERIALS_VOLUME}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return e.attenuationColor=new Ut().setRGB(r[0],r[1],r[2],Mn),Promise.all(s)}}class VM{constructor(t){this.parser=t,this.name=ue.KHR_MATERIALS_IOR}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}}class WM{constructor(t){this.parser=t,this.name=ue.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return e.specularColor=new Ut().setRGB(r[0],r[1],r[2],Mn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,Xe)),Promise.all(s)}}class XM{constructor(t){this.parser=t,this.name=ue.EXT_MATERIALS_BUMP}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(s)}}class qM{constructor(t){this.parser=t,this.name=ue.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class YM{constructor(t){this.parser=t,this.name=ue.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class KM{constructor(t){this.parser=t,this.name=ue.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class ZM{constructor(t){this.parser=t,this.name=ue.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class vd{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class $M{constructor(t){this.name=ue.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==In.TRIANGLES&&c.mode!==In.TRIANGLE_STRIP&&c.mode!==In.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const v=new $t,p=new y,m=new ve,M=new y(1,1,1),w=new Sm(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&M.fromBufferAttribute(l.SCALE,x),w.setMatrixAt(x,v.compose(p,m,M));let b=null;for(const x in l)if(x==="_COLOR_0"){const A=l[x];w.instanceColor=new aa(A.array,A.itemSize,A.normalized)}else if(x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"){if(b===null){const _=w.geometry;b=new Me,b.name=_.name;for(const T in _.attributes)b.setAttribute(T,_.attributes[T]);for(const T in _.morphAttributes)b.morphAttributes[T]=_.morphAttributes[T];_.index!==null&&b.setIndex(_.index),b.morphTargetsRelative=_.morphTargetsRelative;for(const T of _.groups)b.addGroup(T.start,T.count,T.materialIndex);_.boundingBox!==null&&(b.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(b.boundingSphere=_.boundingSphere.clone()),b.drawRange.start=_.drawRange.start,b.drawRange.count=_.drawRange.count,b.userData=Object.assign({},_.userData),w.geometry=b}const A=l[x];b.setAttribute(x,new aa(A.array,A.itemSize,A.normalized))}De.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const lp="glTF",rr=12,xd={JSON:1313821514,BIN:5130562};class JM{constructor(t){this.name=ue.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,rr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==lp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-rr,r=new DataView(t,rr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===xd.JSON){const c=new Uint8Array(t,rr+o,a);this.content=n.decode(c)}else if(l===xd.BIN){const c=rr+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class jM{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ue.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Pc[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=Pc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=Fs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],p=l[g];p!==void 0&&(v.normalized=p)}u(f)},a,c,Mn,d)})})}}class QM{constructor(){this.name=ue.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){const n=Math.cos(t.rotation),s=Math.sin(t.rotation);t.matrix.set(t.repeat.x*n,t.repeat.y*s,t.offset.x,-t.repeat.x*s,t.repeat.y*n,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}}class t1{constructor(){this.name=ue.KHR_MESH_QUANTIZATION}}class cp extends Vs{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-e,u=(n-e)/h,d=u*u,f=d*u,g=t*c,v=g-c,p=-2*f+3*d,m=f-d,M=1-p,w=m-d+u;for(let b=0;b!==a;b++){const x=o[v+b+a],A=o[v+b+l]*h,_=o[g+b+a],T=o[g+b]*h;r[b]=M*x+w*A+p*_+m*T}return r}}const e1=new ve;class n1 extends cp{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return e1.fromArray(r).normalize().toArray(r),r}}const In={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Fs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yd={9728:Fe,9729:Qe,9984:_f,9985:Wo,9986:gr,9987:ri},Md={33071:si,33648:na,10497:os},dl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},i1={CUBICSPLINE:void 0,LINEAR:Nr,STEP:Dr},fl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function s1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new mn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gi})),i.DefaultMaterial}function es(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ei(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function r1(i,t,e){let n=!1,s=!1,r=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function o1(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function a1(i){let t;const e=i.extensions&&i.extensions[ue.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+pl(e.attributes):t=i.indices+":"+pl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+pl(i.targets[n]);return t}function pl(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Lc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function l1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const c1=new $t;class h1{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new IM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new Zm(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ng(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vf(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return es(r,a,s),ei(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const o=e[s].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ue.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Er.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=dl[s.type],a=Fs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Pe(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=dl[s.type],c=Fs[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,p;if(f&&f!==u){const m=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let w=e.cache.get(M);w||(v=new c(a,m*f,s.count*f/h),w=new pm(v,f/h),e.cache.add(M,w)),p=new lh(w,l,d%f/h,g)}else a===null?v=new c(s.count*l):v=new c(a,d,s.count*l),p=new Pe(v,l,g);if(s.sparse!==void 0){const m=dl.SCALAR,M=Fs[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,x=new M(o[1],w,s.sparse.count*m),A=new c(o[2],b,s.sparse.count*l);a!==null&&(p=new Pe(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let _=0,T=x.length;_<T;_++){const N=x[_];if(p.setX(N,A[_*l]),l>=2&&p.setY(N,A[_*l+1]),l>=3&&p.setZ(N,A[_*l+2]),l>=4&&p.setW(N,A[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const s=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=yd[d.magFilter]||Qe,h.minFilter=yd[d.minFilter]||ri,h.wrapS=Md[d.wrapS]||os,h.wrapT=Md[d.wrapT]||os,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Fe&&h.minFilter!==Qe,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(d=>d.clone());const o=s.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1,h;if(e.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,g){e.parse(d,f,g)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,g){let v=f;e.isImageBitmapLoader===!0&&(v=function(p){const m=new qe(p);m.needsUpdate=!0,f(m)}),e.load(Er.resolveURL(d,r.path),v,void 0,g)})})}const u=h.then(function(d){return c===!0&&a.revokeObjectURL(l),ei(d,o),d.userData.mimeType=o.mimeType||l1(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[t]=u,u}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ue.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ue.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ue.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Nf,ai.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new xa,ai.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return mn}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let o;const a={},l=r.extensions||{},c=[];if(l[ue.KHR_MATERIALS_UNLIT]){const u=s[ue.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Ut(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Mn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,Xe)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=ze);const h=r.alphaMode||fl.OPAQUE;if(h===fl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===fl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Xn&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new kt(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Xn&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Xn){const u=r.emissiveFactor;a.emissive=new Ut().setRGB(u[0],u[1],u[2],Mn)}return r.emissiveTexture!==void 0&&o!==Xn&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Xe)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),ei(u,r),e.associations.set(u,{materials:t}),r.extensions&&es(s,u,r),u})}createUniqueName(t){const e=Te.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ue.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return Sd(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=a1(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[ue.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Sd(new Me,c,e),c.mode===In.TRIANGLE_STRIP?d=d.then(f=>_d(f,wf)):c.mode===In.TRIANGLE_FAN&&(d=d.then(f=>_d(f,Sc))),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?s1(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],p=o[f];let m;const M=c[f];if(p.mode===In.TRIANGLES||p.mode===In.TRIANGLE_STRIP||p.mode===In.TRIANGLE_FAN||p.mode===void 0){const w=r.isSkinnedMesh===!0,b=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");w&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=w&&b?new ni(v,M):new me(v,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===In.LINES)m=new ha(v,M);else if(p.mode===In.LINE_STRIP)m=new uh(v,M);else if(p.mode===In.LINE_LOOP)m=new wm(v,M);else if(p.mode===In.POINTS)m=new Uf(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&o1(m,r),m.name=e.createUniqueName(r.name||"mesh_"+t),ei(m,r),p.extensions&&es(s,m,p),e.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&es(s,u[0],r),u[0];const d=new cn;r.extensions&&es(s,d,r),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new vn(tn.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new Ma(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ei(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new $t;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new va(a,l)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],g=s.samplers[f.sampler],v=f.target,p=v.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],v=u[3],p=u[4],m=[];for(let w=0,b=d.length;w<b;w++){const x=d[w],A=f[w],_=g[w],T=v[w],N=p[w];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const C=n._createAnimationTracks(x,A,_,T,N);if(C)for(let P=0;P<C.length;P++)m.push(C[P])}const M=new Gm(r,void 0,m);return ei(M,s),M})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,c1)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,g=u[0];h.pivot=new y().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new ch:c.length>1?h=new cn:c.length===1?h=c[0]:h=new De,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ei(h,r),r.extensions&&es(n,h,r),r.matrix!==void 0){const u=new $t;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new cn;n.name&&(r.name=s.createUniqueName(n.name)),ei(r,n),n.extensions&&es(e,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){const d=l[h];d.parent!==null?r.add(PM(d)):r.add(d)}const c=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof ai||d instanceof qe)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(t,e,n,s,r){const o=[],a=t.name?t.name:t.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Ui[r.path]===Ui.weights?(c(t),t.isGroup&&t.children.forEach(c)):l.push(a);let h;switch(Ui[r.path]){case Ui.weights:h=kr;break;case Ui.rotation:h=Br;break;case Ui.translation:case Ui.scale:h=ua;break;default:n.itemSize===1?h=kr:h=ua;break}const u=s.interpolation!==void 0?i1[s.interpolation]:Nr,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){const v=new h(l[f]+"."+Ui[r.path],e.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Lc(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof Br?n1:cp;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function u1(i,t,e){const n=t.attributes,s=new di;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new y(l[0],l[1],l[2]),new y(c[0],c[1],c[2])),a.normalized){const h=Lc(Fs[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new y,l=new y;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=Lc(Fs[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new On;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Sd(i,t,e){const n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Pc[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){const o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return de.workingColorSpace!==Mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${de.workingColorSpace}" not supported.`),ei(i,t),u1(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?r1(i,t.targets,e):i})}const bd={round:1,cup:.5,fine:!0,spacing:.8,fuzz:0},d1={name:"Lampornis calolaemus",seed:1207,sections:[{y:-.07,z:-.32,a:60,w:.035,rd:.03,rv:.035},{y:.04,z:-.245,a:60,w:.15,rd:.105,rv:.13},{y:.17,z:-.165,a:63,w:.225,rd:.16,rv:.2},{y:.34,z:-.09,a:68,w:.262,rd:.185,rv:.25},{y:.52,z:-.035,a:76,w:.258,rd:.185,rv:.245},{y:.67,z:-.005,a:84,w:.236,rd:.185,rv:.212},{y:.775,z:.008,a:80,w:.205,rd:.182,rv:.19},{y:.887,z:.052,a:62,w:.15,rd:.17,rv:.17},{y:.926,z:.116,a:38,w:.117,rd:.14,rv:.14},{y:.925,z:.195,a:18,w:.066,rd:.09,rv:.07},{y:.905,z:.245,a:8,w:.03,rd:.032,rv:.028}],throat:[4.5,7.3],spine:{tail:.3,hips:1.9,spine:3,chest:4.1,neck1:5.3,neck2:5.95,head:6.55},eye:{s:7.8,phi:.535,radius:.037,inset:.84},bill:{length:.44,radius:.02,droop:.022,color:460551},skin:1840662,shading:{flank:.6,under:.6,patch:.3,gold:5921324,goldAmount:.22},looks:{body:{width:.03,aspect:2.1,rowStep:.3,tilt:13,lift:1,cup:.3,round:.7,loose:.55,fuzz:.3,base:2104356,tip:5195350,iri:4885036,iriGraze:9071132,iriStrength:.12,iriPower:6,iriAlign:0,jitter:.5,sparkle:.6},belly:{width:.033,aspect:2.5,rowStep:.24,tilt:11,lift:1.2,cup:.25,round:.65,loose:.75,base:2630191,tip:6970485,iri:6982186,iriGraze:9071146,iriStrength:.1,iriPower:5,iriAlign:0,jitter:.5,sparkle:.6},flank:{width:.036,aspect:2.8,rowStep:.24,tilt:12,lift:1.3,cup:.2,round:.55,loose:.9,base:2301226,tip:6313066,iri:5925434,iriGraze:6965802,iriStrength:.06,iriPower:4,iriAlign:0,jitter:.5,sparkle:.7},down:{width:.04,aspect:2.6,rowStep:.24,tilt:26,lift:1.4,cup:.15,round:.5,loose:1,base:1840664,tip:4207930,iri:16777215,iriGraze:16777215,iriStrength:0,iriPower:2,iriAlign:0,jitter:.3},back:{width:.03,aspect:2,rowStep:.31,tilt:11,lift:.9,cup:.35,round:.75,loose:.45,fuzz:.3,base:2039078,tip:4867669,iri:3840570,iriGraze:9071128,iriStrength:.24,iriPower:7,iriAlign:0,jitter:.5,sparkle:.45},scapular:{width:.042,aspect:3.3,rowStep:.24,tilt:21,lift:.8,cup:.3,round:.6,loose:.6,fuzz:.4,base:2170408,tip:5327964,iri:3836474,iriGraze:9071128,iriStrength:.2,iriPower:6,iriAlign:0,jitter:.5,sparkle:.5},collar:{width:.027,aspect:1.45,rowStep:.36,tilt:12,lift:.8,cup:.35,round:1,loose:.3,spacing:.7,fuzz:.12,base:1184536,tip:2369580,iri:2072672,iriGraze:678490,iriStrength:.32,iriPower:12,iriAlign:.3,iriAim:[0,.1,1],jitter:.55,sparkle:.6},head:{width:.017,aspect:1.8,rowStep:.34,tilt:12,lift:.45,cup:.35,round:.9,loose:.4,fuzz:.22,base:1184279,tip:2763315,iri:1866320,iriGraze:5263386,iriStrength:.28,iriPower:7,iriAlign:0,jitter:.45,sparkle:.4},mask:{width:.012,aspect:1.7,rowStep:.36,tilt:10,lift:.2,cup:.3,round:.9,loose:.35,fuzz:.25,base:263173,tip:789517,iri:1054752,iriGraze:0,iriStrength:.04,iriPower:4,iriAlign:0,jitter:.2},velvet:{width:.015,aspect:1.6,rowStep:.28,tilt:6,lift:.15,cup:.2,round:.7,loose:.8,fuzz:.7,base:262915,tip:985865,iri:0,iriGraze:0,iriStrength:0,iriPower:2,iriAlign:0,jitter:.2},stripe:{width:.012,aspect:2.6,rowStep:.24,tilt:6,lift:.2,cup:.15,round:.5,loose:.95,fuzz:1,base:11841962,tip:15526885,iri:16777215,iriGraze:16777215,iriStrength:0,iriPower:2,iriAlign:0,jitter:.2},covert:{width:.046,aspect:2.6,rowStep:.33,tilt:9,lift:.7,cup:.3,round:.7,loose:.4,base:2170151,tip:5129816,iri:3832400,iriGraze:5917226,iriStrength:.18,iriPower:6,iriAlign:0,jitter:.4,sparkle:.5},undertail:{width:.04,aspect:2.9,rowStep:.26,tilt:10,lift:.8,cup:.2,round:.6,loose:.8,base:7827564,tip:13617342,iri:16777215,iriGraze:16777215,iriStrength:0,iriPower:2,iriAlign:0,jitter:.3},wingCovert:{width:.03,aspect:2.3,rowStep:.4,tilt:7,lift:0,cup:.3,round:.8,loose:.22,fuzz:0,base:1512732,tip:4012104,iri:4872824,iriGraze:5917242,iriStrength:.06,iriPower:6,iriAlign:0,jitter:.4,sparkle:.6},gorget:{...bd,width:.052,aspect:1,rowStep:.3,tilt:8,lift:.5,spacing:.6,base:1706510,tip:4527900,iri:8007935,iriGraze:12595338,iriStrength:2,iriPower:4.2,iriAlign:.74,iriAim:[0,-.5,.87],jitter:.34,channel:"gorget"},crown:{...bd,width:.019,aspect:1.3,rowStep:.34,tilt:10,lift:.4,fuzz:.45,sparkle:.5,loose:.12,base:330507,tip:662554,iri:1368772,iriGraze:1726680,iriStrength:2.3,iriPower:5,iriAlign:.8,iriAim:[0,-.24,1],jitter:.55,channel:"crown"}},tracts:[{name:"belly",look:"belly",region:{kind:"band",s:[0,3.7],phi:[0,.45],soft:.6}},{name:"flank",look:"flank",region:{kind:"band",s:[1.2,4.2],phi:[.3,.52],soft:.5}},{name:"back",look:"back",region:{kind:"band",s:[.9,6.2],phi:[.55,1]}},{name:"scapular",look:"scapular",region:{kind:"band",s:[3.7,5.6],phi:[.56,.84],soft:.3}},{name:"wingPit",look:"down",region:{kind:"blob",at:[3.8,.44],r:[.3,.035],soft:.5}},{name:"tailCoverts",look:"covert",region:{kind:"band",s:[0,1.15],phi:[0,1]}},{name:"undertail",look:"undertail",region:{kind:"band",s:[0,1.35],phi:[0,.4],soft:.3}},{name:"collar",look:"collar",region:{kind:"blob",at:[4.5,0],r:[.72,.44],soft:.6}},{name:"head",look:"head",region:{kind:"band",s:[6,11],phi:[0,1]}},{name:"velvet",look:"velvet",region:{kind:"blob",at:[8,0],r:[2.25,.63],pow:3,soft:.2}},{name:"mask",look:"mask",region:{kind:"blob",at:[8.3,.5],r:[1,.11]}},{name:"gorget",look:"gorget",region:{kind:"blob",at:[6.35,0],r:[1.4,.27],pow:3}},{name:"chin",look:"gorget",region:{kind:"blob",at:[7.7,0],r:[1.05,.17]}},{name:"crown",look:"crown",region:{kind:"blob",at:[8.5,1],r:[1.3,.4]}},{name:"postocular",look:"stripe",region:{kind:"streak",from:[7.5,.57],to:[6.3,.6],r:[.12,.025]}}],wing:{shoulder:[.185,.64,-.06],upper:.1,fore:.13,hand:.17,primaries:10,secondaries:6,primaryLen:[.34,.9],secondaryLen:[.27,.2],primaryWidth:.062,secondaryWidth:.064,rest:{from:[5.1,93],to:[.6,147],width:[.05,.105,.04],height:.034,cross:[.8,-.02]},color:3878193,sheen:8021618},tail:{rectrices:5,length:[.61,.66],width:.13,droop:62,restFan:.35,maxFan:11,color:1909292},legs:{spread:.075,hip:[.085,.11,-.05],toe:.085,perchRadius:.0405,color:1446159},behaviour:{breathHz:[3.4,5.2],holdCalm:[.4,1.8],holdAlert:[.22,.9],saccade:[.038,42e-5],neckShare:[.22,.3],blinkEvery:[1.8,5.5],ruffleEvery:[60,110],tailEvery:[3,9],wingEvery:[9,22],billUp:14}},wn={iri:6733892,iriGraze:3116914,iriStrength:.07,iriPower:3,iriAlign:0,jitter:.4,sparkle:.25},hp={name:"Amazona vittata",seed:1493,sections:[{y:-.1,z:-.3,a:58,w:.06,rd:.045,rv:.05},{y:.02,z:-.235,a:58,w:.17,rd:.12,rv:.14},{y:.15,z:-.16,a:61,w:.235,rd:.165,rv:.2},{y:.32,z:-.085,a:66,w:.265,rd:.19,rv:.245},{y:.5,z:-.03,a:74,w:.265,rd:.195,rv:.25},{y:.66,z:0,a:82,w:.245,rd:.195,rv:.225},{y:.78,z:.015,a:78,w:.228,rd:.2,rv:.208},{y:.905,z:.06,a:60,w:.205,rd:.205,rv:.2},{y:.957,z:.128,a:36,w:.19,rd:.188,rv:.182},{y:.948,z:.232,a:4,w:.155,rd:.148,rv:.132},{y:.872,z:.28,a:-32,w:.072,rd:.093,rv:.055}],throat:[4.5,7.3],spine:{tail:.3,hips:1.9,spine:3,chest:4.1,neck1:5.3,neck2:5.95,head:6.55},eye:{s:8.8,phi:.59,radius:.03,inset:.86,bare:2.05,open:[52,47],ring:{color:15130836,width:1.85},lid:12433066,iris:9061398,pupil:[.93,.985]},bill:{length:.054,radius:.062,droop:.004,color:14470576,hook:{top:.093,reach:.096,drop:.078,turn:105,lower:.085,lowerWidth:.072,cere:12891046},gape:.6},skin:1317392,headRuff:0,shading:{flank:.86,under:.82,patch:.14,gold:10139706,goldAmount:.18},looks:{body:{edge:.5,closed:.85,...wn,width:.062,aspect:1.4,rowStep:.36,tilt:8,lift:.9,cup:.3,round:.95,loose:.12,fuzz:.06,base:2047258,tip:5220408},breast:{edge:.8,closed:.9,...wn,width:.066,aspect:1.45,rowStep:.36,tilt:8,lift:.9,cup:.32,round:1,loose:.1,fuzz:.05,spacing:.7,base:2310681,tip:5811772},belly:{edge:.28,closed:.65,...wn,width:.064,aspect:1.5,rowStep:.34,tilt:9,lift:1.1,cup:.28,round:.95,loose:.2,fuzz:.12,base:2902559,tip:7649352},flank:{edge:.3,closed:.65,...wn,width:.066,aspect:1.6,rowStep:.33,tilt:10,lift:1.2,cup:.26,round:.9,loose:.24,fuzz:.12,base:2442012,tip:6073918},down:{width:.05,aspect:2.2,rowStep:.26,tilt:22,lift:1.3,cup:.15,round:.5,loose:1,base:3818038,tip:7635052,iri:16777215,iriGraze:16777215,iriStrength:0,iriPower:2,iriAlign:0,jitter:.3},back:{edge:.45,closed:.88,...wn,width:.07,aspect:1.5,rowStep:.36,tilt:8,lift:.8,cup:.32,round:.9,loose:.18,fuzz:.06,base:1783832,tip:4168242},scapular:{edge:.4,closed:.9,...wn,width:.085,aspect:1.9,rowStep:.34,tilt:10,lift:.7,cup:.3,round:.85,loose:.15,fuzz:.05,base:1783832,tip:3970096},nape:{edge:.95,closed:.92,...wn,width:.05,aspect:1.35,rowStep:.38,tilt:9,lift:1,cup:.34,round:1,loose:.15,spacing:.7,base:1584917,tip:4102707},head:{edge:.92,closed:.92,...wn,width:.036,aspect:1.3,rowStep:.4,tilt:8,lift:.6,cup:.34,round:1,loose:.15,fuzz:.05,spacing:.7,base:1518868,tip:4168756},cheek:{edge:.6,closed:.85,...wn,width:.034,aspect:1.5,rowStep:.36,tilt:7,lift:.4,cup:.3,round:.9,loose:.3,base:2047e3,tip:5614650},lore:{edge:.2,closed:.7,...wn,width:.014,aspect:1.3,rowStep:.4,tilt:5,lift:.1,cup:.3,round:.9,loose:.3,base:1848598,tip:4694838},forecrown:{edge:.3,closed:.75,width:.022,aspect:1.4,rowStep:.4,tilt:8,lift:.3,cup:.3,round:.9,loose:.3,fuzz:.1,base:4852744,tip:13574936,iri:16734778,iriGraze:11541008,iriStrength:.05,iriPower:3,iriAlign:0,jitter:.4,sparkle:.2},covert:{edge:.4,closed:.88,...wn,width:.07,aspect:1.8,rowStep:.34,tilt:8,lift:.6,cup:.3,round:.85,loose:.2,base:1915417,tip:4497461},undertail:{edge:.1,closed:.65,...wn,width:.07,aspect:2.2,rowStep:.3,tilt:9,lift:.8,cup:.2,round:.8,loose:.4,base:3955234,tip:10208846},wingCovert:{edge:.45,closed:.9,...wn,width:.05,aspect:2,rowStep:.4,tilt:7,lift:0,cup:.3,round:.85,loose:.12,fuzz:0,base:1718039,tip:3905073}},tracts:[{name:"belly",look:"belly",region:{kind:"band",s:[0,3.6],phi:[0,.42],soft:.5}},{name:"flank",look:"flank",region:{kind:"band",s:[1.2,4],phi:[.3,.52],soft:.5}},{name:"breast",look:"breast",region:{kind:"blob",at:[4.9,0],r:[1.6,.5],soft:.4}},{name:"back",look:"back",region:{kind:"band",s:[.9,5.9],phi:[.55,1]}},{name:"scapular",look:"scapular",region:{kind:"band",s:[3.7,5.6],phi:[.56,.84],soft:.3}},{name:"wingPit",look:"down",region:{kind:"blob",at:[3.8,.44],r:[.3,.035],soft:.5}},{name:"tailCoverts",look:"covert",region:{kind:"band",s:[0,1.15],phi:[0,1]}},{name:"undertail",look:"undertail",region:{kind:"band",s:[0,1.4],phi:[0,.42],soft:.3}},{name:"nape",look:"nape",region:{kind:"band",s:[5.7,7.4],phi:[0,1],soft:.3}},{name:"head",look:"head",region:{kind:"band",s:[7,11],phi:[0,1],soft:.2}},{name:"cheek",look:"cheek",region:{kind:"blob",at:[8.2,.3],r:[.9,.2],soft:.4}},{name:"eye",look:"lore",region:{kind:"blob",at:[8.8,.59],r:[.62,.1],soft:.2}},{name:"forecrown",look:"forecrown",region:{kind:"band",s:[9.7,11],phi:[.62,1],soft:.05}}],wing:{shoulder:[.2,.63,-.06],upper:.19,fore:.23,hand:.19,primaries:10,secondaries:9,primaryLen:[.4,.62],secondaryLen:[.43,.36],primaryWidth:.135,secondaryWidth:.125,rest:{from:[5,96],to:[1.1,150],width:[.08,.16,.06],height:.032,cross:[.3,.06],shade:.25},color:2058794,sheen:4165482,primaryColor:1458319,secondaryColor:2058794,covertWidth:[.05,.1],covertAspect:[1.35,1.75],drape:.9,bladeScale:1.45,broad:{peak:[.68,.84],primaryFan:[60,-16],secondaryFan:[68,100],primaryTip:461588,secondaryTip:1723542,dusk:[.85,.4],primaryCovert:1788554,coverts:[[-.03,.08,.06],[0,.1,.066],[.04,.12,.074],[.085,.15,.084]],restCoverts:[11,.56],restSecondaries:{u:[.36,.52],v:[.86,-.1],len:[.27,.34],width:.115},restPrimaries:{u:[.5,.64],v:[.2,-.86],reach:[.62,1],width:[.09,.07]}}},tail:{rectrices:6,length:[.4,.35],width:.105,droop:66,restFan:1.5,maxFan:9,rootSpread:.011,color:2057255,tip:10338117,sheen:4885066,centralSheen:3836474,banded:!0,outer:{color:1920906,from:.7}},legs:{spread:.1,hip:[.1,.12,-.05],toe:.095,perchRadius:.0405,color:11047532,toeRadius:.013,zygodactyl:!0},behaviour:{breathHz:[.6,1.1],holdCalm:[1.2,4.5],holdAlert:[.5,1.8],saccade:[.09,.0011],neckShare:[.22,.3],blinkEvery:[3,8],ruffleEvery:[50,100],tailEvery:[12,30],wingEvery:[25,60],billUp:2,parrot:!0}},Yi=matchMedia("(pointer: coarse)").matches,f1=hp.legs.perchRadius,Kn=.2;function up(i){return f1*Math.min(1-.18*i,2.2)}const dp=[Kn-.45,Kn+.45];function p1(i,t=dp){i.updateMatrixWorld(!0);const e=i.getObjectByName("perch"),n=e?m1(e,t[0]-.1,t[1]+.1):null,s=n?n.geometry.getAttribute("position").clone().applyMatrix4(n.matrixWorld).array:new Float32Array,r=new Xf;r.ray.direction.set(0,-1,0);const o=[],a=new Map,l=new y,c=new y;function h(d){let f=1/0,g=-1/0;for(let v=0;v<s.length;v+=3)Math.abs(s[v]-d)>.006||(f=Math.min(f,s[v+2]),g=Math.max(g,s[v+2]));return f<=g?(f+g)/2:0}function u(d,f){if(!n)return null;r.ray.origin.set(d,2,h(d)),o.length=0,r.intersectObject(n,!1,o);const g=o[0];return g?f.copy(g.point):null}return(d,f)=>{const g=Math.round(d*1e3);let v=a.get(g);return v===void 0&&(v={point:new y,up:new y,tangent:new y,radius:up(d)},u(d,v.point)&&u(d-.03,l)&&u(d+.03,c)?(v.tangent.copy(c).sub(l).normalize(),v.up.set(0,1,0).addScaledVector(v.tangent,-v.tangent.y).normalize()):v=null,a.set(g,v)),v?(f.point.copy(v.point),f.up.copy(v.up),f.tangent.copy(v.tangent),f.radius=v.radius,f):null}}function m1(i,t,e){const n=i.geometry,s=n.getAttribute("position"),r=n.index?n.index.count:s.count,o=h=>n.index?n.index.getX(h):h,a=[];for(let h=0;h<r;h+=3){const u=o(h),d=o(h+1),f=o(h+2),g=Math.min(s.getX(u),s.getX(d),s.getX(f));if(!(Math.max(s.getX(u),s.getX(d),s.getX(f))<t||g>e))for(const p of[u,d,f])a.push(s.getX(p),s.getY(p),s.getZ(p))}const l=new Me;l.setAttribute("position",new ie(a,3));const c=new me(l,i.material);return c.matrixAutoUpdate=!1,c.matrixWorld.copy(i.matrixWorld),c}function wd(i,t,e,n,s){const r=i.computeFrenetFrames(e,!1),o=[],a=[],l=[],c=qi(s),h=Array.from({length:6},()=>({u:c(),a:c()*Math.PI*2,s:.25+c()*.35})),u=new y,d=new y;for(let g=0;g<=e;g++){const v=g/e;i.getPointAt(v,u);const p=r.normals[g],m=r.binormals[g];for(let M=0;M<=n;M++){const w=M/n*Math.PI*2;d.copy(p).multiplyScalar(Math.cos(w)).addScaledVector(m,Math.sin(w));let b=t(v);b*=1+.035*Math.sin(w*7+v*40)+.02*Math.sin(w*13-v*90);for(const x of h){const A=(v-x.u)*18,_=Math.cos(w-x.a);b*=1+x.s*Math.exp(-A*A)*Math.max(_,0)**3}o.push(u.x+d.x*b,u.y+d.y*b,u.z+d.z*b),a.push(v,M/n)}}for(let g=0;g<e;g++)for(let v=0;v<n;v++){const p=g*(n+1)+v,m=p+n+1;l.push(p,p+1,m,m,p+1,m+1)}const f=new Me;return f.setAttribute("position",new ie(o,3)),f.setAttribute("uv",new ie(a,2)),f.setIndex(l),f.computeVertexNormals(),f}function g1(i){const t=new mn({color:16777215,roughness:.92,metalness:0});return t.onBeforeCompile=e=>{e.uniforms.uLen={value:i},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; varying vec3 vWNor; varying vec2 vUv2;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz; vWNor = normalize(mat3(modelMatrix) * objectNormal); vUv2 = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWPos; varying vec3 vWNor; varying vec2 vUv2; uniform float uLen;
float h3(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,37.719)))*43758.5453); }
float n3(vec3 p){ vec3 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(mix(h3(i),h3(i+vec3(1,0,0)),f.x),mix(h3(i+vec3(0,1,0)),h3(i+vec3(1,1,0)),f.x),f.y),
             mix(mix(h3(i+vec3(0,0,1)),h3(i+vec3(1,0,1)),f.x),mix(h3(i+vec3(0,1,1)),h3(i+vec3(1,1,1)),f.x),f.y),f.z); }
float fbm(vec3 p){ float a=.5, s=0.; for(int i=0;i<5;i++){ s+=a*n3(p); p*=2.03; a*=.5; } return s; }`).replace("#include <color_fragment>",`#include <color_fragment>
{
  float along = vUv2.x * uLen;
  float streak = fbm(vec3(along * 6.0, vUv2.y * 3.0, 0.0) + vWPos * 2.0);
  vec3 bark = mix(vec3(0.16, 0.085, 0.05), vec3(0.36, 0.2, 0.11), streak);
  bark *= 0.75 + 0.5 * fbm(vWPos * 38.0);
  // moss on the up-facing side, patchy
  float up = clamp(vWNor.y, 0.0, 1.0);
  float moss = smoothstep(0.45, 0.75, fbm(vWPos * 9.0) + up * 0.35 - 0.1) * smoothstep(0.0, 0.5, up + 0.2);
  vec3 mossC = mix(vec3(0.10, 0.17, 0.02), vec3(0.30, 0.42, 0.05), fbm(vWPos * 60.0));
  diffuseColor.rgb = mix(bark, mossC, moss * 0.75);
  // lichen speckle
  float lic = smoothstep(0.78, 0.82, fbm(vWPos * 25.0 + 7.0));
  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.55, 0.58, 0.45), lic * 0.5);
}`)},t}function _1(){const i=new cn,t=new Tc([new y(-6,-1.414,-.927),new y(-3.2,-.709,-.364),new y(-1.4,-.312,-.11),new y(-.7,-.199,-.039),new y(0,-.041,0),new y(.5,.059,.072),new y(.9,.142,.113),new y(1.3,.193,.077),new y(1.8,.24,.04)]),e=t.getLength(),n=g1(e),s=new y,r=wd(t,p=>up(t.getPointAt(p,s).x)*(p>.97?1-(p-.97)*20:1),320,28,3),o=new me(r,n);o.name="perch",o.receiveShadow=!0,i.add(o);const a=new Tc([new y(1.07,.11,.26),new y(1.18,.3,.28),new y(1.28,.5,.2),new y(1.41,.7,.09)]),l=new mn({color:5208600,roughness:.65}),c=new me(wd(a,p=>.022*(1-p*.6),60,10,9),l);c.castShadow=!0,i.add(c);const h=new gn({color:8372762,roughness:.5,sheen:.5,sheenColor:new Ut(13168720),emissive:2243072}),u=new ci(1,16,12),d=new Xr(.006,.008,1,6);d.translate(0,.5,0);const f=qi(21),g=new y,v=new y;for(let p=0;p<9;p++){const m=.2+p/8*.78;a.getPointAt(m,g),a.getTangentAt(m,v);const M=new y(f()-.5,f()*.6,f()-.5).normalize(),w=.06+f()*.08,b=new me(d,l);b.position.copy(g),b.quaternion.setFromUnitVectors(new y(0,1,0),M.clone().add(v.clone().multiplyScalar(.4)).normalize()),b.scale.set(1,w,1),i.add(b);const x=g.clone().addScaledVector(M.clone().add(v.clone().multiplyScalar(.4)).normalize(),w);for(let A=0;A<2+Math.floor(f()*3);A++){const _=new me(u,h),T=.018+f()*.018;_.scale.set(T,T*1.25,T),_.position.copy(x).add(new y(f()-.5,f()-.5,f()-.5).multiplyScalar(.05)),_.castShadow=!0,i.add(_)}}return{group:i}}async function v1(i,t){const n=(await new LM().loadAsync(i,t)).scene;n.traverse(o=>{const a=o;if(a.isMesh){a.receiveShadow=!0,a.castShadow=!/perch|hairs/i.test(a.name);for(const l of Array.isArray(a.material)?a.material:[a.material]){const c=l;c.envMapIntensity=.8}}});const s=n.getObjectByName("perch");let r=null;if(s){r=b1(s),n.add(r);const o=n.getObjectByName("hairs");o&&n.add(x1(s,o.material))}return{group:n,fuzz:r}}function Ao(i,t,e,n,s){i[t]=e,i[t+1]=n,i[t+2]=s}function x1(i,t){const e=Yi?7e3:16e3,n=new CM(i).build(),s=qi(31),r=new y,o=new y,a=new y,l=new y,c=new y,h=new Float32Array(e*9),u=new Float32Array(e*9),d=new Float32Array(e*6);let f=0;for(let p=0;f<e&&p<e*4;p++){if(n.sample(r,o),Math.abs(r.x-Kn)<.17||r.x<-2.8||o.y<-.3&&s()<.7)continue;a.set(s()-.5,s()-.5,s()-.5).cross(o).normalize(),l.crossVectors(o,a);const m=.45+s()*.5,M=.005+s()*s()*.014;c.copy(o).multiplyScalar(1-m).addScaledVector(a,m).normalize();const w=45e-5+s()*3e-4,b=r.addScaledVector(o,-.001),x=f*9;Ao(h,x,b.x-l.x*w,b.y-l.y*w,b.z-l.z*w),Ao(h,x+3,b.x+l.x*w,b.y+l.y*w,b.z+l.z*w),Ao(h,x+6,b.x+c.x*M,b.y+c.y*M,b.z+c.z*M);for(let A=0;A<9;A+=3)Ao(u,x+A,o.x,o.y,o.z);d[f*6+2]=1,d[f*6+4]=.5,d[f*6+5]=1,f++}const g=new Me;g.setAttribute("position",new Pe(h.slice(0,f*9),3)),g.setAttribute("normal",new Pe(u.slice(0,f*9),3)),g.setAttribute("uv",new Pe(d.slice(0,f*6),2));const v=new me(g,t);return v.name="twig.hairs",v.position.copy(i.position),v.quaternion.copy(i.quaternion),v.scale.copy(i.scale),v.receiveShadow=!0,v}const Td=Yi?7:14,y1=.03,M1=-3.25;function S1(i){const t=i.getAttribute("position"),e=i.index?i.index.count:t.count,n=a=>i.index?i.index.getX(a):a,s=new Uint32Array(e);let r=0;for(let a=0;a<e;a+=3){const l=n(a),c=n(a+1),h=n(a+2);Math.max(t.getX(l),t.getX(c),t.getX(h))<=M1||(s[r++]=l,s[r++]=c,s[r++]=h)}const o=new Me;for(const a in i.attributes)o.setAttribute(a,i.attributes[a]);return o.setIndex(new Pe(t.count>65535?s.slice(0,r):Uint16Array.from(s.subarray(0,r)),1)),o}function b1(i){const t=i.material,e=S1(i.geometry),n=new cn;n.name="fuzz";for(let s=1;s<=Td;s++){const r=s/Td,o=new mn({map:t.map,normalMap:t.normalMap,color:new Ut(1,1,1),roughness:1,metalness:0,alphaTest:.5,alphaToCoverage:!0,envMapIntensity:.6});o.onBeforeCompile=l=>{l.uniforms.uH={value:r},l.uniforms.uLen={value:y1},l.uniforms.uGrip={value:Kn},l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float uH; uniform float uLen; uniform float uGrip; varying vec3 vFP; varying float vGrip;`).replace("#include <begin_vertex>",`#include <begin_vertex>
           // no felt where the toes grip, and it thins out toward the old woody left end
           float gx = abs(position.x - uGrip);
           vGrip = mix(0.22, 1.0, smoothstep(0.14, 0.24, gx)) * (1.0 - smoothstep(-2.6, -3.2, position.x));
           transformed += objectNormal * uH * uLen * vGrip;
           vFP = position;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
           uniform float uH; varying vec3 vFP; varying float vGrip;
           float fh(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
           float fn(vec3 p) { vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
             return mix(mix(mix(fh(i), fh(i + vec3(1,0,0)), f.x), mix(fh(i + vec3(0,1,0)), fh(i + vec3(1,1,0)), f.x), f.y),
                        mix(mix(fh(i + vec3(0,0,1)), fh(i + vec3(1,0,1)), f.x), mix(fh(i + vec3(0,1,1)), fh(i + vec3(1,1,1)), f.x), f.y), f.z); }`).replace("#include <alphatest_fragment>",`{
             // strands wander as they rise, so each one curls
             vec3 q = vFP * 520.0;
             q += vec3(fn(vFP * 90.0), fn(vFP * 90.0 + 7.3), fn(vFP * 90.0 + 3.1)) * 3.0 * uH;
             vec3 c = floor(q);
             vec3 f = fract(q) - 0.5;
             // moss where the baked bark is green: cushions, taller, denser
             float green = smoothstep(0.004, 0.03, diffuseColor.g - max(diffuseColor.r, diffuseColor.b) * 0.9);
             float r = mix(0.42, 0.12, uH) * mix(1.0, 0.8, green);
             float strand = 1.0 - smoothstep(r * 0.6, r, length(f.xz + f.y * 0.3));
             float a = 0.0;
             // (the height noise only matters inside a strand, the cushions only on moss)
             if (strand > 0.0) {
               // per cell: a strand of random height, thick at the root, tapering
               // clumps and partings: strand height follows a slow noise
               float clump = fn(vFP * 14.0) * 0.7 + fn(vFP * 41.0) * 0.5;
               float tall = fh(c) * (0.25 + 0.9 * clump) * 0.3;
               if (green > 0.0) {
                 float cushion = smoothstep(0.2, 0.75, fn(vFP * 22.0) * 0.8 + fn(vFP * 61.0) * 0.4);
                 tall = mix(tall, (0.35 + 0.7 * fh(c + 1.7)) * cushion, green);
               }
               a = strand * step(uH, tall) * vGrip;
             }
             // a dense low underlayer so it reads as felt, not as stubble
             if (uH < 0.22) a = max(a, (1.0 - smoothstep(0.08, 0.22, uH)) * step(0.55, fn(q * 0.5)) * vGrip);
             diffuseColor.a = a;
             // (no colour for what the alpha test throws away)
             if (a > 0.0) {
               // root dark, tips paler, warmer and greyed where they catch the light
               vec3 tip = mix(diffuseColor.rgb * vec3(1.35, 1.15, 0.95), vec3(dot(diffuseColor.rgb, vec3(0.33)) * 1.6), 0.25);
               tip = mix(tip, diffuseColor.rgb * vec3(1.5, 1.6, 0.9), green); // moss tips go yellow-green
               diffuseColor.rgb = mix(diffuseColor.rgb * 0.45, tip, smoothstep(0.0, 1.0, uH)) * (0.8 + 0.4 * fh(c + 3.0));
             }
           }
           #include <alphatest_fragment>`)};const a=new me(e,o);a.name=`fuzz.${s}`,a.position.copy(i.position),a.quaternion.copy(i.quaternion),a.scale.copy(i.scale),a.receiveShadow=!0,a.renderOrder=s,n.add(a)}return n}const wa=-3,w1=1.8,da=1/(w1-wa);function or(i){const t=Math.max(0,(i-wa)*da);return t*t}function T1(i){return 2*Math.max(0,(i-wa)*da)*da}const E1=`
uniform vec2 uSway;
uniform vec3 uShootRoot;
uniform vec3 uShootAxis;
uniform vec3 uShootMove;
uniform vec3 uShootBend;
uniform vec3 uBudBend;
attribute float aShoot; // 0 twig, 1 the shoot's stem, 2 its flowers
`,A1=`
{
  // the shoot is carried at its root, the rest bends along the twig
  float sx = max(0.0, (mix(transformed.x, uShootRoot.x, min(aShoot, 1.0)) - ${wa.toFixed(3)}) * ${da.toFixed(5)});
  transformed.yz += sx * sx * uSway;
  if (aShoot > 0.5) {
    vec3 r = position - uShootRoot;
    float u = clamp(dot(r, uShootAxis) / dot(uShootAxis, uShootAxis), 0.0, 1.0);
    transformed += cross(uShootMove, r) + (uShootBend + step(1.5, aShoot) * uBudBend) * u * u;
  }
}`;class ml{constructor(t,e){this.freq=t,this.zeta=e}freq;zeta;p=new y;v=new y;reset(t){this.p.copy(t),this.v.set(0,0,0)}step(t,e){const n=2*Math.PI*this.freq,s=Math.max(1,Math.ceil(e*this.freq*8)),r=e/s;for(let o=0;o<s;o++){for(const a of["x","y","z"])this.v[a]+=(-n*n*(this.p[a]-t[a])-2*this.zeta*n*this.v[a])*r;this.p.addScaledVector(this.v,r)}return this.p}}function R1(){const i=new Ti(3.4,.2),t=new Ti(2.9,.22),e=new ml(4.5,.45),n=new ml(2.6,.3),s=.5,r=new ml(4.2,.38),o=new y,a=20,l=.4,c=.11;let h=!1;const u=new y,d=new y,f=new y,g=new y,v=new y;let p=!0,m=null;const M={uSway:{value:new kt},uShootRoot:{value:new y(.95,.04,.1)},uShootAxis:{value:new y(.45,.65,0)},uShootMove:{value:new y},uShootBend:{value:new y},uBudBend:{value:new y}},w=()=>m===null?0:-.005*_.give*or(m)/or(Kn)**2,b=1,x=new WeakSet;function A(T){if(x.has(T))return;x.add(T);const N=T.onBeforeCompile,C=T.customProgramCacheKey();T.onBeforeCompile=(P,L)=>{N.call(T,P,L),Object.assign(P.uniforms,M),P.vertexShader=P.vertexShader.replace("#include <common>",`#include <common>
${E1}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${A1}`)},T.customProgramCacheKey=()=>`${C}|sway`,T.needsUpdate=!0}const _={uniforms:M,patch:A,reach(T,N){if(!h)return!1;const C=M.uShootRoot.value;return u.copy(C).add(M.uShootAxis.value),T.distanceSqToSegment(v.copy(C).lerp(u,.15),u,d,N)<c*c},brush(T,N,C){const P=M.uShootAxis.value,L=tn.clamp(v.copy(T).sub(M.uShootRoot.value).dot(P)/P.lengthSq(),0,1),F=v.copy(P).normalize(),E=tn.clamp(N.length(),.3,2);r.v.addScaledVector(N,a*C*E*(.3+L)).addScaledVector(F,-r.v.dot(F)*.8),r.v.length()>l&&r.v.setLength(l)},give:1,at(T,N){const C=or(T);return N.set(0,i.x*C,t.x*C)},load(T){m=T},settle(){i.x=w(),i.v=t.x=t.v=0,p=!0},push(T,N,C=0){const P=or(T)*b*N*_.give;i.kick(-P),t.kick(P*.35*C)},use(T){T.updateMatrixWorld(!0);const N=[];T.traverse(P=>{const L=P;if(L.isMesh){for(const F of Array.isArray(L.material)?L.material:[L.material])A(F);/^(shoot|buds|hairs)$/.test(L.name)&&N.push(L)}});const C=N.find(P=>P.name==="shoot");if(h=!!C,C){const P=C.geometry.getAttribute("position");C.geometry.computeBoundingBox();const L=C.geometry.boundingBox,F=new y,E=new y;let D=0,U=0;const O=new y;for(let Y=0;Y<P.count;Y++)O.fromBufferAttribute(P,Y),O.y<L.min.y+.03&&(F.add(O),D++),O.y>L.max.y-.03&&(E.add(O),U++);F.divideScalar(Math.max(D,1)),E.divideScalar(Math.max(U,1)),M.uShootRoot.value.copy(F),M.uShootAxis.value.copy(E).sub(F)}for(const P of N){const L=P.geometry.getAttribute("position").count;P.geometry.setAttribute("aShoot",new ie(new Float32Array(L).fill(P.name==="shoot"?1:2),1))}p=!0},update(T){if(T<=0)return;i.step(w(),T),t.step(0,T),M.uSway.value.set(i.x,t.x);const N=M.uShootRoot.value,C=M.uShootAxis.value,P=T1(N.x),L=or(N.x),F=M.uShootMove.value.set(0,-P*t.x,P*i.x);f.copy(C).add(v.crossVectors(F,C)),f.y+=L*i.x,f.z+=L*t.x,p&&(p=!1,e.reset(f),n.reset(f),r.reset(o)),e.step(f,T),r.step(o,T),g.copy(f).lerp(e.p,s).add(r.p),n.step(g,T),M.uShootBend.value.copy(g).sub(f),M.uBudBend.value.copy(n.p).sub(g).multiplyScalar(s)}};return _}const Ro=["tail","hips","spine","chest","neck1","neck2","head"];class C1{constructor(t){this.species=t;const e=t.sections;this.count=e.length,this.ys=e.map(n=>n.y),this.zs=e.map(n=>n.z),this.as=e.map(n=>n.a*Ct),this.ws=e.map(n=>n.w),this.rds=e.map(n=>n.rd),this.rvs=e.map(n=>n.rv)}species;count;ys;zs;as;ws;rds;rvs;a=new y;b=new y;c=new y;get sMax(){return this.count-1}center(t,e){return e.set(0,Ln(this.ys,t),Ln(this.zs,t))}axis(t,e){const n=Ln(this.as,t);return e.set(0,Math.sin(n),Math.cos(n))}point(t,e,n){const s=Ln(this.as,t),r=Math.max(Ln(this.ws,t),.004),o=Math.max(Ln(this.rds,t),.004),a=Math.max(Ln(this.rvs,t),.004),l=Math.cos(e),c=Math.sin(e),h=1+.06*Math.sin(e*2)**2,u=-l*(l>0?a:o)*h,d=Ln(this.ys,t),f=Ln(this.zs,t);n.set(c*r*h,d+Math.cos(s)*u,f-Math.sin(s)*u);const g=this.wingBulge(t,e);if(g>0){const v=Math.hypot(n.x,n.y-d,n.z-f)||1,p=1+g/v;n.set(n.x*p,d+(n.y-d)*p,f+(n.z-f)*p)}return n}surface(t,e,n){const r=Ot(t,0,this.sMax);this.point(r,e,n.p);const o=Math.max(r-.01,0),a=Math.min(r+.01,this.sMax);return this.point(a,e,this.a).sub(this.point(o,e,this.b)),this.point(r,e+.01,this.b).sub(this.point(r,e-.01,this.c)),n.n.crossVectors(this.b,this.a).normalize(),n.t.copy(this.a).multiplyScalar(-1),n.t.addScaledVector(n.n,-n.t.dot(n.n)).normalize(),n}wingHalfWidth(t){const[e,n,s]=this.species.wing.rest.width;return t<.35?ct(e,n,it(0,.35,t)):ct(n,s,it(.35,1,t))}wingHalfAngle(t,e){const n=(Ln(this.ws,t)+(Ln(this.rds,t)+Ln(this.rvs,t))/2)/2;return this.wingHalfWidth(e)/Math.max(n,.03)}wingUV(t,e){const n=this.species.wing.rest,s=Math.PI*2;let r=(e%s+s)%s;r>Math.PI&&(r=s-r);const o=(n.from[0]-t)/(n.from[0]-n.to[0]),a=Ot(o,0,1),l=ct(n.from[1],n.to[1],a)*Ct;return{u:o,v:(r-l)/this.wingHalfAngle(t,a)}}wingAt(t,e,n){const s=this.species.wing.rest,r=ct(s.from[0],s.to[0],t),o=ct(s.from[1],s.to[1],Ot(t,0,1))*Ct+e*this.wingHalfAngle(Ot(r,0,this.sMax),Ot(t,0,1));return{s:r,ang:n>0?o:Math.PI*2-o}}wingBulge(t,e){const{u:n,v:s}=this.wingUV(t,e);if(n<=0||n>=1||Math.abs(s)>=1)return 0;const r=1-s*s;return this.species.wing.rest.height*it(0,.1,n)*(1-it(.8,1,n))*r*r}front=null;frontLength(t){if(!this.front){this.front=[0];for(let r=1;r<=this.sMax*20;r++)this.front.push(this.front[r-1]+this.point(r/20,0,this.a).distanceTo(this.point((r-1)/20,0,this.b)))}const n=Ot(t,0,this.sMax)*20,s=Math.min(Math.floor(n),this.front.length-2);return ct(this.front[s],this.front[s+1],n-s)}frontAt(t){this.frontLength(0);const e=this.front;let n=0,s=e.length-1;if(t<=0)return 0;if(t>=e[s])return this.sMax;for(;s-n>1;){const r=n+s>>1;e[r]<=t?n=r:s=r}return(n+(t-e[n])/Math.max(e[s]-e[n],1e-9))/20}weights(t){const e=this.species.spine;for(let n=0;n<Ro.length-1;n++){const s=Ro[n],r=Ro[n+1];if(t<=e[r]||n===Ro.length-2){const o=it(e[s],e[r],t);return[s,1-o,r,o]}}return["head",1,"head",0]}skin(t,e){const n=this.species.spine,s=.5+.5*Math.cos(e),r=this.weights(t),a=.6*(it(n.hips-.4,n.spine,t)*(1-it(n.chest+.2,n.neck1+.3,t)))*(.35+.65*s),[l,c]=this.species.throat,h=it(.25,.85,s)*it(l-.9,l,t),u=Ot((this.frontLength(t)-this.frontLength(l))/(this.frontLength(c)-this.frontLength(l)),0,1),d=new Map,f=(p,m)=>d.set(p,(d.get(p)??0)+m);f(r[0],r[1]*(1-a)*(1-h)),f(r[2],r[3]*(1-a)*(1-h)),f("sternum",a*(1-h*u*(2-u))),f("throat",(1-a)*h*(1-u)*(1-u)),f("gular",h*2*u*(1-u)),f("head",h*u*u);const g=[...d].sort((p,m)=>m[1]-p[1]).slice(0,4);for(;g.length<4;)g.push(["root",0]);const v=g.reduce((p,m)=>p+m[1],0);return{bones:g.map(p=>p[0]),weights:g.map(p=>p[1]/v)}}bodyCoord(t){return 1-Ot(t/this.sMax,0,1)}}const nn=["L","R"],Rn=i=>i==="L"?1:-1,P1=i=>new y(i[0],i[1],i[2]),gl=new y,Ed=new y,Co=new y,L1=new $t;function is(i,t,e=new ve){return Co.copy(i).normalize(),gl.crossVectors(t,Co).normalize(),Ed.crossVectors(Co,gl),e.setFromRotationMatrix(L1.makeBasis(gl,Ed,Co))}const ar=(i,t)=>new y(i.x*t,i.y,i.z);function I1(i){const t=new C1(i),e={},n=[],s={};function r(L,F,E,D=new ve){const U=new ch;U.name=L;const O={pos:new y,quat:new ve,worldPos:E.clone(),worldQuat:D.clone()};if(F){const Y=s[F],H=Y.worldQuat.clone().invert();O.pos.copy(E).sub(Y.worldPos).applyQuaternion(H),O.quat.copy(H).multiply(D),e[F].add(U)}else O.pos.copy(E),O.quat.copy(D);return U.position.copy(O.pos),U.quaternion.copy(O.quat),e[L]=U,s[L]=O,n.push(U),U}const o=L=>t.center(L,new y),a=i.spine,l=r("root",null,new y);r("hips","root",o(a.hips)),r("spine","hips",o(a.spine)),r("chest","spine",o(a.chest)),r("neck1","chest",o(a.neck1)),r("neck2","neck1",o(a.neck2)),r("head","neck2",o(a.head)),r("throat","chest",o(a.head)),r("gular","chest",t.point((i.throat[0]+i.throat[1])/2,0,new y)),r("sternum","chest",t.point(a.spine+.4,0,new y));const c=o(t.sMax),h=t.axis(t.sMax,new y),u=is(h,new y(0,1,0));r("bill","head",c,u),r("jaw","head",c.clone().add(new y(0,-.012,-.04)),u);const d=new y(0,0,1).applyQuaternion(u),f=new y(0,1,0).applyQuaternion(u),g=i.bill.length,v=L=>c.clone().addScaledVector(d,L*g).addScaledVector(f,-.004-i.bill.droop*L*L);r("tongue.1","jaw",v(.06),u),r("tongue.2","tongue.1",v(.5),u),r("tongue.3","tongue.2",v(.7),u);const p={},m={p:new y,n:new y,t:new y};for(const L of nn){const F=Rn(L);t.surface(i.eye.s,i.eye.phi*Math.PI,m);const E=m.n.clone().multiplyScalar(.7).add(new y(.3,.02,.04)).normalize(),D=m.p.clone().addScaledVector(E,-i.eye.radius*i.eye.inset);E.x*=F,D.x*=F;const U=is(E,new y(0,1,0));p[L]={side:L,center:D,out:E,eye:r(`eye.${L}`,"head",D,U),lidUpper:r(`lidUpper.${L}`,"head",D,U),lidLower:r(`lidLower.${L}`,"head",D,U),nict:r(`nict.${L}`,"head",D,U)}}const M=i.wing,w={};{const L=P1(M.shoulder),F={p:new y,n:new y,t:new y},E=(Ft,Et,Yt)=>{const Gt=t.wingAt(Ft,Et,1);return t.surface(Gt.s,Gt.ang,F),F.p.clone().addScaledVector(F.n,-Yt)},D=i.tail.droop*Ct,U=new y(0,-Math.sin(D),-Math.cos(D)),O=new y(0,Math.cos(D),-Math.sin(D)),Y=o(a.tail).addScaledVector(U,i.tail.length[1]*M.rest.cross[0]).addScaledVector(O,.03);Y.x=M.rest.cross[1];const H=E(.03,.4,.02),G=E(.2,-.35,.014),K=F.n.clone(),ot=Y.clone().sub(G).normalize();K.addScaledVector(ot,-K.dot(ot)).normalize();const Q=new y().crossVectors(K,ot),k=t.axis(a.spine,new y).multiplyScalar(-1),Z=new y(0,-k.z,k.y);Z.z>0&&Z.multiplyScalar(-1);const q=new y(1,0,0),st=(Ft,Et,Yt)=>Ft.clone().applyAxisAngle(Et,Yt),W=[];W.push({name:"shoulder",parent:"chest",pos:L,dir:H.clone().sub(L),n:K,sDir:q.clone().multiplyScalar(.85).addScaledVector(k,.5)}),W.push({name:"forearm",parent:"shoulder",pos:H,dir:G.clone().sub(H),n:K,sDir:q.clone().multiplyScalar(.9).addScaledVector(k,-.35)}),W.push({name:"hand",parent:"forearm",pos:G,dir:ot,n:K,sDir:q.clone()});const j=M.primaries,ft=M.broad?.primaryFan??[58,-4],dt=M.broad?.secondaryFan??[82,97];for(let Ft=0;Ft<j;Ft++){const Et=Ft/(j-1),Yt=G.clone().addScaledVector(ot,M.hand*(Ft+.4)/j).addScaledVector(Q,(1-Et)*.04).addScaledVector(K,(1-Et)*.004),Gt=Y.clone().addScaledVector(Q,(1-Et)*.05).sub(Yt).normalize();W.push({name:`primary#${Ft+1}`,parent:"hand",pos:Yt,dir:Gt,n:K,sDir:st(q,Z,ct(ft[0],ft[1],Math.pow(Et,M.broad?.85:.62))*Ct)})}const Dt=M.secondaries;for(let Ft=0;Ft<Dt;Ft++){const Et=Ft/(Dt-1),Yt=G.clone().lerp(H,(Ft+.7)/(Dt+.4)).addScaledVector(Q,.03+Et*.015);W.push({name:`secondary#${Ft+1}`,parent:"forearm",pos:Yt,dir:st(ot,K,ct(7,16,Et)*Ct),n:K,sDir:st(q,Z,ct(dt[0],dt[1],Et)*Ct)})}for(const Ft of nn){const Et=Rn(Ft),Yt=mt=>mt.includes("#")?mt.replace("#",`.${Ft}.`):`${mt}.${Ft}`,Gt={side:Ft,bones:[],folded:[],spread:[],primaries:[],secondaries:[]},Xt={chest:new ve};for(const mt of W){const ut=Yt(mt.name),Kt=mt.parent==="chest"?"chest":Yt(mt.parent),se=is(ar(mt.dir,Et),ar(mt.n,Et)),oe=r(ut,Kt,ar(mt.pos,Et),se),te=is(ar(mt.sDir,Et),ar(Z,Et));Xt[ut]=te,Gt.bones.push(oe),Gt.folded.push(s[ut].quat.clone()),Gt.spread.push(Xt[Kt].clone().invert().multiply(te)),mt.name.startsWith("primary")&&Gt.primaries.push(oe),mt.name.startsWith("secondary")&&Gt.secondaries.push(oe)}w[Ft]=Gt}}const b=i.tail,x=[];{const L=b.droop*Ct,F=new y(0,-Math.sin(L),-Math.cos(L)),E=new y(0,Math.cos(L),-Math.sin(L)),D=is(F,E),U=o(a.tail);r("tail","hips",U,D);const O=new y(1,0,0).applyQuaternion(D);for(const Y of nn)for(let H=0;H<b.rectrices;H++){const G=(H+.5)*(Y==="L"?-1:1),K=U.clone().addScaledVector(O,G*(b.rootSpread??.006)).addScaledVector(E,-H*.004-(Y==="L"?.002:0)).addScaledVector(F,.02),ot=D.clone().multiply(new ve().setFromAxisAngle(new y(0,1,0),G*b.restFan*Ct));x.push({bone:r(`rectrix.${Y}.${H+1}`,"tail",K,ot),k:G})}}const A=i.legs,_={},T={};let N=.1;for(const L of nn){const F=Rn(L),E=new y(A.spread*F,0,0);r(`foot.${L}`,"root",E);const D=E.clone().add(new y(0,.014,-.012)),U=new y(A.hip[0]*F,A.hip[1],A.hip[2]);T[L]=D,_[L]=U.clone().sub(s.hips.worldPos),N=U.distanceTo(D),r(`tarsus.${L}`,`foot.${L}`,D,is(U.clone().sub(D),new y(1,0,0)));for(let O=0;O<4;O++)r(`toe.${L}.${O+1}`,`foot.${L}`,E)}l.updateMatrixWorld(!0);const C=new va(n),P=new Map(n.map((L,F)=>[L.name,F]));return{species:i,loft:t,rootBone:l,bones:e,list:n,rest:s,skeleton:C,index:L=>{const F=P.get(L);if(F===void 0)throw new Error(`no bone ${L}`);return F},wings:w,rectrices:x,eyes:p,hipSocket:_,ankle:T,tarsusLength:N}}const D1=0,N1=1,U1=2,yh=3,F1=4,O1=2,k1=3,_l=4,vl=5;class Ic{pos=[];nor=[];uv=[];root=[];hinge=[];data=[];iriN=[];cBase=[];cTip=[];cIri=[];cIri2=[];edge=[];si=[];sw=[];idx=[];S=new y;H=new y;P=new y;Nv=new y;In=new y;add(t){const{cols:e,rows:n}=t,s=this.S.crossVectors(t.normal,t.dir).normalize(),r=this.H.crossVectors(t.dir,t.normal).normalize(),o=this.pos.length/3,a=t.width/2;for(let l=0;l<n;l++){const c=l===n-1,h=t.scallop?l/(n-1):n===4?[0,.5,.82,.965][l]:Math.pow(l/(n-1),.9),u=ct(1.25,2.1,t.round),d=Ot((h-.5)/.5,0,1),f=Math.pow(Math.max(1-Math.pow(d,u),0),1/u),g=t.scallop?1:n===4?ct(.5,1,it(0,.5,h))*f:ct(.4,1,it(0,t.widen??.12,h))*(c?.42:Math.pow(Math.max(1-Math.pow(Ot((h-.8)/.2,0,1),2.2),0),.45));for(let v=0;v<e;v++){const p=e===1?0:v/(e-1)*2-1,m=p<0?1-t.asym:1+t.asym;let M=p*a*g*m;const w=c&&!t.scallop?h+(1-h)*(1-p*p):h;let b=w*t.length;if(t.scallop){const _=Ot((h-.5)/.5,0,1),T=p*Math.PI/2;M=ct(p*a*ct(.72,1,Math.min(h/.5,1)),Math.sin(T)*a,_),b=ct(Math.min(h,.5)*t.length,.5*t.length+Math.cos(T)*.5*t.length,_)}const x=t.cup*a*(p*g)*(p*g)+t.curl*t.length*w*w;this.P.copy(t.root).addScaledVector(s,M).addScaledVector(t.dir,b).addScaledVector(t.normal,-x),this.Nv.copy(t.normal).addScaledVector(s,2*t.cup*p*g).addScaledVector(t.dir,2*t.curl*w),this.In.copy(t.iriNormal).addScaledVector(s,.3*t.cup*p*g).addScaledVector(t.dir,.1*(w-.6)).normalize(),t.skinNormal&&this.Nv.normalize().lerp(t.skinNormal,ct(.45,.8,Math.min(t.loose*2,1))),this.Nv.normalize(),this.pos.push(this.P.x,this.P.y,this.P.z),this.nor.push(this.Nv.x,this.Nv.y,this.Nv.z),t.scallop?this.uv.push(M/a,b/t.length):this.uv.push(p,w),this.root.push(t.root.x,t.root.y,t.root.z),this.hinge.push(r.x,r.y,r.z),this.data.push(t.rand,t.coord,t.gain,t.channel),this.iriN.push(this.In.x,this.In.y,this.In.z),this.cBase.push(t.base.r,t.base.g,t.base.b,t.iriStrength/4),this.cTip.push(t.tip.r,t.tip.g,t.tip.b,t.loose),this.cIri.push(t.iri.r,t.iri.g,t.iri.b,t.iriPower/32),this.cIri2.push(t.iri2.r,t.iri2.g,t.iri2.b,t.cover),this.edge.push(t.edge??0,t.closed??0);const A=t.skinAt?t.skinAt(this.P):t;this.si.push(...A.bones),this.sw.push(...A.weights)}}for(let l=0;l<n-1;l++)for(let c=0;c<e-1;c++){const h=o+l*e+c,u=h+e;this.idx.push(h,u,h+1,u,u+1,h+1)}}build(){const t=new Me,e=(r,o)=>new Pe(new Float32Array(r),o),n=(r,o)=>{const a=new Uint16Array(r.length);for(let l=0;l<r.length;l++)a[l]=Math.round(Ot(r[l],0,1)*65535);return new Pe(a,o,!0)},s=(r,o)=>{const a=new Int16Array(r.length);for(let l=0;l<r.length;l++)a[l]=Math.round(Ot(r[l],-1,1)*32767);return new Pe(a,o,!0)};return t.setAttribute("position",e(this.pos,3)),t.setAttribute("normal",s(this.nor,3)),t.setAttribute("uv",e(this.uv,2)),t.setAttribute("aRoot",e(this.root,3)),t.setAttribute("aHinge",s(this.hinge,3)),t.setAttribute("aData",e(this.data,4)),t.setAttribute("aIriN",s(this.iriN,3)),t.setAttribute("aBase",n(this.cBase,4)),t.setAttribute("aTip",n(this.cTip,4)),t.setAttribute("aIri",n(this.cIri,4)),t.setAttribute("aIri2",n(this.cIri2,4)),t.setAttribute("aEdge",n(this.edge,2)),t.setAttribute("skinIndex",new Pe(new Uint16Array(this.si),4)),t.setAttribute("skinWeight",n(this.sw,4)),t.setIndex(new Pe(new Uint32Array(this.idx),1)),t.boundingSphere=new On(new y(0,.4,-.1),2.5),t.boundingBox=new di(new y(-2,-2,-2),new y(2,3,2)),t}}function B1(i,t,e,n){if(i.kind==="band"){const f=t+(i.soft??0)*(n*2-1);return f>=i.s[0]&&f<=i.s[1]&&e>=i.phi[0]&&e<=i.phi[1]}if(i.kind==="blob"){const f=(t-i.at[0])/i.r[0],g=(e-i.at[1])/i.r[1],v=i.pow??2;return Math.pow(Math.abs(f),v)+Math.pow(Math.abs(g),v)<=1+(i.soft??0)*(n*2-1)}const s=i.from[0]/i.r[0],r=i.from[1]/i.r[1],o=i.to[0]/i.r[0],a=i.to[1]/i.r[1],l=t/i.r[0],c=e/i.r[1],h=o-s,u=a-r,d=Ot(((l-s)*h+(c-r)*u)/(h*h+u*u),0,1);return Math.hypot(l-s-h*d,c-r-u*d)<=1}function Mi(i,t,e,n=.5){let s="body";for(const r of i.tracts)B1(r.region,t,e,n)&&(s=r.look);return i.looks[s]}const ke=i=>new Ut(i),cs=(i,t)=>t.map(e=>i.index(e)),z1=new y;function Mh(i,t,e,n){return i.copy(t),e.iriAim&&i.lerp(z1.set(e.iriAim[0],e.iriAim[1],e.iriAim[2]).normalize(),e.iriAlign).normalize(),n?(i.x+=(n()-.5)*e.jitter,i.y+=(n()-.5)*e.jitter,i.z+=(n()-.5)*e.jitter,i.normalize()):i}function fp(i,t,e){const{u:n,v:s}=i.wingUV(t,e);if(n<.08||n>1.05)return 1;const r=it(.08,.3,n)*(1-it(.9,1.05,n)),o=it(-2,-1.05,s)*(1-it(-.75,-.55,s)),a=it(1.6,1,s)*(1-it(.7,.9,-s+1.6)),l=i.species.wing.rest.shade??.62;return 1-r*Math.max(l*o,s>.8?.25*a:0)}function pp(i,t,e,n){const s=i.shading;let r=1+s.patch*(.6*Ve(e*2.7,5)+.6*Ve(n*8+e*1.3,6)),o=0;const a=t.fine?1:ct(.12,1.7,it(-.25,.45,.7*Ve(e*6.1+n*9,41)+.6*Ve(n*21-e*3.3,42)));if(!t.fine){o=t.iriStrength>0&&e<6?it(.05,.6,.7*Ve(e*3.4+n*5,31)+.5*Ve(n*13-e*2,32))*s.goldAmount:0;const l=1-it(4.6,5.6,e);r*=ct(1,s.flank,l*it(.2,.55,n)*(1-it(.72,.95,n))),r*=ct(1,s.under,it(2.6,.5,e)*(1-it(.4,.7,n)))}return{shade:r,gold:o,glit:a}}function hs(i,t,e=1,n=0,s=6972448,r=1){const o=(.8+t()*.4)*e,a=ke(i.iri).lerp(ke(i.iriGraze),t()*t()*.45);return{base:ke(i.base).multiplyScalar(o),tip:ke(i.tip).lerp(ke(s),n*t()).multiplyScalar(o),iri:a,iri2:ke(i.iriGraze),iriStrength:i.iriStrength*ct(.75+t()*.5,2.6*Math.pow(t(),2.5),i.sparkle??0)*(1+n*1.5)*r,iriPower:i.iriPower*(.8+t()*.5),loose:i.loose??0,round:i.round,cup:i.cup,channel:i.channel==="gorget"?N1:i.channel==="crown"?U1:D1,edge:i.edge??0,closed:i.closed??0}}const Po=new y,xl=new y,Es=new y;function mp(i,t,e,n){const{loft:s}=i;if(t<s.species.throat[0]-1.1||Math.cos(e)<-.5)return;const r=Math.min(t+.02,s.sMax);s.point(r,e,Po).sub(s.point(t-.02,e,Es)).multiplyScalar(1/(r-t+.02)),s.point(t,e+.02,xl).sub(s.point(t,e-.02,Es)).multiplyScalar(1/.04);const o=Po.clone().multiplyScalar(1/Po.lengthSq()),a=xl.clone().multiplyScalar(1/xl.lengthSq()),l=n.clone(),c=Po.clone().normalize(),h=s.frontLength(t);return u=>{Es.copy(u).sub(l);const d=Es.dot(o),f=s.frontAt(h+Es.dot(c))-t,g=s.skin(Ot(t+(Math.abs(f)<Math.abs(d)?f:d),0,s.sMax),e+Es.dot(a));return{bones:cs(i,g.bones),weights:g.weights}}}function H1(i,t,e){const{loft:n,species:s}=t,r={p:new y,n:new y,t:new y},o={p:new y,n:new y,t:new y},a=new y,l=new y,c=new y,h=new y,u=new y,d=new y,f=new y,g=s.eye.radius,v=s.headRuff??1,p=Math.PI*2,m=E=>{const D=(E%p+p)%p;return D<=Math.PI?D/Math.PI:(p-D)/Math.PI},M=(E,D,U=.5)=>{const O=Mi(s,E,D,U);let Y=O.width;if(!O.fine){const H=Mi(s,E-.45,D),G=Mi(s,E+.45,D);Y=(Y*2+(H.fine?Y:H.width)+(G.fine?Y:G.width))/4}return{look:O,width:Y}},w=240,b=40,x=new Float32Array(w).fill(1),A=new Uint16Array(w),_=[],T=new Float32Array(b+1),N=.001;let C=n.sMax-.015;for(;C>.03;){let E=0;for(let U=0;U<=b;U++){const O=U/b*p;T[U]=n.point(Math.min(C+.01,n.sMax),O,l).distanceTo(n.point(C-.01,O,c))/.02,E=Math.max(E,T[U])}const D=N/E;for(let U=0;U<w;U++){const O=U/w*b,Y=Math.min(Math.floor(O),b-1),{look:H,width:G}=M(C,m(U/w*p)),K=G*H.aspect*H.rowStep;if(x[U]+=ct(T[Y],T[Y+1],O-Y)*D,x[U]>=K){x[U]=Math.min(x[U]-K,K*.5);const ot=A[U]++;(_[ot]??=new Float32Array(w).fill(NaN))[U]=C}}C-=D}const P=new y,L=new y,F=(E,D)=>{n.surface(E,D,r);for(const Vt of nn)if(r.p.distanceTo(t.eyes[Vt].center)<g*(s.eye.bare??1.02))return;const U=n.wingUV(E,D),O=U.u>.04&&U.u<.97&&Math.abs(U.v)<.9,Y=O&&U.v<-.3&&U.u<.5&&.5+.5*Ve(E*53+D*91,77)<.75*(s.wing.drape??1)*it(-.3,-.75,U.v)*(1-it(.32,.5,U.u));if(O&&!Y)return;const H=m(D),G=M(E+(e()-.5)*.06,Ot(H+(e()-.5)*.012,0,1),e()),K=G.width,ot=Math.pow(1-it(7.1,9,E),1.4),Q=v*it(.56,.86,H)*ot*it(6.25,7,E),k=it(.5,.8,H)*it(8.5,9.2,E),Z=Y?s.looks.flank:G.look===s.looks.crown&&E<8.5&&e()<.5*it(.7,.9,H)?s.looks.head:G.look,q=Z.fine?0:Q,st=Z.fine||Z===s.looks.stripe?0:v*it(6,6.7,E)*it(.35,.6,H)*(.35+.65*ot),W=Ve(E*11+H*37,51);if(st>0&&W>.45&&e()<.4*st||Z===s.looks.gorget)return;const j=s.looks.gorget,ft=E>4.6&&E<8.2&&H<.5?Mi(s,E,Math.max(H-.035,0))===j?2:Mi(s,E,Math.max(H-.08,0))===j?1:0:0;if(ft===2)return;const dt=ft===0&&E>4.2&&E<5.6&&H<.4&&Mi(s,E+.5,H)===j,Dt=s.shading,Ft=pp(s,Z,E,H),{gold:Et,glit:Yt}=Ft,Gt=Ft.shade*fp(n,E,D),Xt=Z.loose??0,mt=Ve(E*4.3+H*17,21),ut=Ve(E*3.1-H*23,22),Kt=1+(e()-.5)*ct(.26,.65,Xt),se=K*Z.aspect*Kt*(1+q*(.3+1.3*e()*e())+st*(e()-.5)*.5),oe=e()<.035*Xt+.14*q?1:0;let te=(Z.tilt+(e()-.5)*ct(6,17,Xt)+ut*7*Xt+oe*(8+e()*10))*Ct;const V=(e()-.5)*ct(.17,.72,Xt)+mt*.4*Xt+oe*(e()-.5)*.9+((e()-.5)*.9+W*.45)*st,Se=((e()-.5)*.7+ut*.3)*Xt+((e()-.5)*1.1+W*.5)*st;if((ft||dt)&&(te*=.35),Y)te+=9*Ct;else if(U.u>0&&U.u<1&&Math.abs(U.v)<1.7&&!oe){const Vt=1-it(.9,1.7,Math.abs(U.v));te*=1-.6*Vt}let Qt=Z.lift+q*.9;te=te*(1-.55*k)+q*(14+30*e()*e()+9*W)*Ct;const ge=n.point(Math.min(E+.01,n.sMax),D,l).distanceTo(n.point(Math.max(E-.01,0),D,c))/.02;f.copy(r.p),a.copy(r.n),n.surface(Math.max(E-se*.85/Math.max(ge,.02),0),D,o),h.copy(o.p).addScaledVector(o.n,se*Math.sin(te)).sub(f),h.lengthSq()<1e-8&&h.copy(r.t),h.normalize(),u.copy(a).add(o.n).addScaledVector(h,-a.dot(h)-o.n.dot(h)).normalize(),h.applyAxisAngle(u,V),u.applyAxisAngle(h,Se),Mh(d,u,Z,e);const gt=n.skin(E,D);i.add({...hs(Z,e,Gt,Et,Dt.gold,Yt),root:f,dir:h,normal:u,skinNormal:a,iriNormal:d,width:K*Kt,length:se,cols:Z.fine?5:3,rows:4,curl:ct(.1,.02+e()*.22,Xt),asym:0,bones:cs(t,gt.bones),weights:gt.weights,skinAt:mp(t,E,D,f),rand:e(),coord:n.bodyCoord(E)*.8,gain:Qt,cover:Ot(1-Z.rowStep,.1,.9)})};for(let E=0;E<_.length;E++){const D=_[E];for(const U of[1,-1]){let O=E&1?.5:U>0?1:0,Y=!1;for(let H=0;H<w/2;H++){const G=(U*H%w+w)%w,K=(U*(H+1)%w+w)%w,ot=D[G],Q=D[K];if(Number.isNaN(ot)||Number.isNaN(Q)){Y=!0;continue}Y&&(O=e(),Y=!1);const k=U*H*p/w,Z=U*(H+1)*p/w;n.point(ot,k,P),n.point(Q,Z,L);const{look:q,width:st}=M((ot+Q)/2,m((k+Z)/2)),W=P.distanceTo(L)/(st*(q.spacing??.6));for(;O+W>=1;){const j=(1-O)/W,ft=(e()-.5)*.25*st*q.aspect*q.rowStep/.11,dt=ct(.12,.5,q.loose??0)*(q.fine?1:1+1.8*v*it(6,6.7,(ot+Q)/2));F(Ot(ct(ot,Q,j)+ft*(1+2*(q.loose??0)),.02,n.sMax),ct(k,Z,j)+(e()-.5)*dt*st/.15),O-=1}O+=W}}}}function G1(i,t,e){const{loft:n,species:s}=t,r=s.looks.gorget;if(!r)return;const o={p:new y,n:new y,t:new y},a=[],l=new y,c=new y;let h=n.sMax;for(;h>4.3&&Mi(s,h,0)!==r;)h-=.02;const u=Math.min(h+.5,n.sMax-.3);let d=0,f=1/0;const g=.02,v=.02,p=new Map;{let L=0;for(let F=0;;F++){const E=u-F*g;if(E<4.3)break;F>0&&(L+=n.point(E,0,l).distanceTo(n.point(E+g,0,c))),p.set(F,L)}L=0;for(let F=-1;;F--){const E=u-F*g;if(E>n.sMax-.05)break;L-=n.point(E,0,l).distanceTo(n.point(E-g,0,c)),p.set(F,L)}}for(const[L,F]of p){const E=u-L*g;let D=0;for(let U=0;U*v<=1.3;U++){const O=U*v;if(U>0&&(D+=n.point(E,O,l).distanceTo(n.point(E,O-v,c))),Mi(s,E,O/Math.PI)===r){for(const Y of U===0?[1]:[1,-1])a.push({s:E,a:O*Y,x:D*Y,y:F});d=Math.max(d,Math.hypot(D,F)),f=Math.min(f,Math.hypot(D,F))}}}if(!a.length)return;const m=(L,F)=>{let E=a[0],D=1/0;for(const U of a){const O=(U.x-L)*(U.x-L)+(U.y-F)*(U.y-F);O<D&&(D=O,E=U)}return{q:E,miss:Math.sqrt(D)}},M=new y,w=new y,b=new y,x=new y,A=new y,_=new Ut(3814655),T=new Ut(14036168),N=r.spacing??.8;let C=Math.max(f,r.width*.3),P=0;for(;C<=d+r.width*.3;){const L=Ot((C-f)/(d-f),0,1),F=r.width*ct(.6,1.3,L),E=F*r.aspect,D=Math.max(1,Math.round(Math.PI*2*C/(F*N)));for(let U=0;U<D;U++){const O=(U+(P%2?.5:0))/D*Math.PI*2-Math.PI+(e()-.5)*.12*(F/Math.max(C,F)),{q:Y,miss:H}=m(C*Math.sin(O),C*Math.cos(O));if(H>.03)continue;const G=m(C*Math.sin(O),C*Math.cos(O)-E*.7).miss>.02;n.surface(Y.s,Y.a,o);const K=Math.sign(O)*Math.min(Math.abs(O)*.5,.6)+(e()-.5)*.14,ot=(r.tilt+(e()-.5)*3)*Ct;w.copy(o.p),M.crossVectors(o.n,o.t),M.x<0&&M.multiplyScalar(-1),b.copy(o.t).multiplyScalar(Math.cos(K)).addScaledVector(M,Math.sin(K)).normalize(),x.copy(o.n).multiplyScalar(Math.cos(ot)).addScaledVector(b,-Math.sin(ot)),b.multiplyScalar(Math.cos(ot)).addScaledVector(o.n,Math.sin(ot)),Mh(A,x,r,e);const Q=hs(r,e),k=Ot(L+(e()-.5)*.16,0,1);k<.45?Q.iri.lerp(_,(1-k/.45)*.85):Q.iri.lerp(T,(k-.45)/.55*.8);const Z=mp(t,Y.s,Y.a,w),q=n.skin(Y.s,Y.a),st=.94+e()*.12;i.add({...Q,root:w,dir:b,normal:x,skinNormal:o.n,iriNormal:A,width:F*st,length:E*st,cols:9,rows:6,scallop:!0,cup:.16,curl:.05,asym:0,bones:cs(t,q.bones),weights:q.weights,skinAt:Z,rand:e(),coord:n.bodyCoord(Y.s)*.8,gain:r.lift,cover:G?.25:Ot(1-r.rowStep,.1,.9)})}C+=F*r.aspect*r.rowStep,P++}}function V1(i,t,e,n){const s=t.species.wing,r=t.wings[e],o=Rn(e),a=ke(s.sheen),l=new y,c=new y,h=new y,u=s.broad,d=(N,C,P,L,F,E=null,D=0)=>{const U=t.rest[N.name];new $t().makeRotationFromQuaternion(U.worldQuat).extractBasis(l,c,h),h.applyAxisAngle(c,(n()-.5)*.02),c.applyAxisAngle(h,(n()-.5)*.12);const O=t.index(N.name),Y=.7+n()*.6;i.add({root:U.worldPos,dir:h,normal:c,skinNormal:null,iriNormal:c,width:P,length:C,cols:3,rows:9,round:.75,cup:.12,curl:.012,asym:L*o,base:F.clone().multiplyScalar(Y),tip:E?E.clone().multiplyScalar(Y):F.clone().multiplyScalar(Y*.8),iri:a,iri2:a,iriStrength:E?.07:.22,iriPower:2.5,loose:0,widen:.3,edge:D,closed:E?1:0,bones:[O,0,0,0],weights:[1,0,0,0],rand:n(),coord:o>0?_l:vl,gain:0,cover:o>0?.2:.8,channel:yh})},f=N=>{if(!u)return ct(s.primaryLen[0],s.primaryLen[1],Math.pow(N,.75));const[C,P]=u.peak;return N<=C?ct(s.primaryLen[0],s.primaryLen[1],Math.pow(N/C,.8)):s.primaryLen[1]*ct(1,P,Math.pow((N-C)/(1-C),1.6))};if(r.primaries.forEach((N,C)=>{const P=C/(r.primaries.length-1);d(N,f(P),s.primaryWidth*(u?ct(1.05,.74,P):ct(1.15,.8,P)),ct(.2,.5,P),ke(s.primaryColor??s.color),u?ke(u.primaryTip):null,u?.dusk[0]??0)}),r.secondaries.forEach((N,C)=>{const P=C/(r.secondaries.length-1);d(N,ct(s.secondaryLen[0],s.secondaryLen[1],P),s.secondaryWidth,.15,ke(s.secondaryColor??s.color),u?ke(u.secondaryTip):null,u?.dusk[1]??0)}),u){const N=t.species.looks.covert,C=ke(u.primaryCovert),P=new y,L=new y,F=new y,E=new y,D=(Y,H,G,K,ot,Q,k)=>{const Z=t.rest[Y.name];new $t().makeRotationFromQuaternion(Z.worldQuat).extractBasis(l,c,h),E.copy(c).multiplyScalar(Math.sign(ot));const q=.88+n()*.26;P.copy(Z.worldPos).addScaledVector(h,H+(n()-.5)*.014).addScaledVector(l,(n()-.5)*.012).addScaledVector(c,ot);const st=.04+n()*.05;L.copy(h).applyAxisAngle(c,(n()-.5)*.24),F.copy(E).multiplyScalar(Math.cos(st)).addScaledVector(L,-Math.sin(st)),L.multiplyScalar(Math.cos(st)).addScaledVector(E,Math.sin(st));const W=hs(N,n,k*(.85+.3*n()));if(Q){const j=.8+n()*.4;W.base=Q.clone().multiplyScalar(.45*j),W.tip=Q.clone().multiplyScalar(j)}i.add({...W,root:P,dir:L,normal:F,skinNormal:E,iriNormal:F,width:K*q,length:G*q,cols:3,rows:4,curl:.03+n()*.06,asym:0,bones:[t.index(Y.name),0,0,0],weights:[1,0,0,0],rand:n(),coord:o>0?_l:vl,gain:0,cover:.5})},U=u.coverts.length,O=(Y,H)=>{u.coverts.forEach(([G,K,ot],Q)=>{const k=Q<U-1?2:1;for(let Z=0;Z<k;Z++)D(Y,G,K,ot,.016-Q*.003,H&&Q===U-1?C:null,1)}),D(Y,-.01,.1,.075,-.012,null,1.15),D(Y,.05,.13,.085,-.009,null,1.15)};r.primaries.forEach(Y=>O(Y,!0)),r.secondaries.forEach(Y=>O(Y,!1));return}const g=t.species.looks.covert,v=t.rest[`hand.${e}`],p=t.rest[`forearm.${e}`];new $t().makeRotationFromQuaternion(v.worldQuat).extractBasis(l,c,h);const m=l.clone().multiplyScalar(o),M=c.clone(),w=h.clone(),b=v.worldPos.clone().addScaledVector(w,s.hand),x=[{off:-.02,len:.075,w:.034,lift:.006,n:15},{off:0,len:.1,w:.04,lift:.008,n:14},{off:.024,len:.13,w:.046,lift:.01,n:14},{off:.05,len:.17,w:.05,lift:.012,n:13}],A=new y,_=new y,T=new y;for(const N of x)for(let C=0;C<N.n;C++){const P=ct(-.55,.9,(C+n()*.7)/N.n);P<0?A.copy(v.worldPos).lerp(p.worldPos,-P/.5):A.copy(v.worldPos).lerp(b,P),A.addScaledVector(m,N.off+(n()-.5)*.016).addScaledVector(M,N.lift);const L=.06+n()*.08;_.copy(w).applyAxisAngle(M,o*(.1+n()*.3+(P<0?.25:0))),T.copy(M).multiplyScalar(Math.cos(L)).addScaledVector(_,-Math.sin(L)),_.multiplyScalar(Math.cos(L)).addScaledVector(M,Math.sin(L));const F=t.index(P<0?`forearm.${e}`:`hand.${e}`),E=.8+n()*.4;i.add({...hs(g,n,.8+.3*n()),root:A,dir:_,normal:T,skinNormal:M,iriNormal:T,width:N.w*E,length:N.len*E,cols:3,rows:4,curl:.04+n()*.1,asym:0,bones:[F,0,0,0],weights:[1,0,0,0],rand:n(),coord:o>0?_l:vl,gain:0,cover:.55})}}function W1(i,t,e,n){const{loft:s,species:r}=t,o=r.wing,a=Rn(e),l=a>0?O1:k1,c={p:new y,n:new y,t:new y},h={p:new y,n:new y,t:new y},u=(W,j,ft)=>{const dt=s.wingAt(W,j,a);return s.surface(Ot(dt.s,.02,s.sMax),dt.ang,ft),dt};u(0,0,c),u(1,0,h);const d=c.p.distanceTo(h.p),f=new y,g=new y,v=new y,p=ke(o.primaryColor??o.color),m=ke(o.secondaryColor??o.color),M=ke(o.sheen),w=r.looks.wingCovert,[b,x]=o.covertWidth??[.024,.05],A=o.bladeScale??1,[_,T]=o.covertAspect??[2.2,3.4],N=(W,j,ft,dt,Dt,Ft)=>{const Et=u(W,j,c);u(W+ft/d,j+dt,h),f.copy(c.p).addScaledVector(c.n,Dt),g.copy(h.p).addScaledVector(h.n,Dt+ft*Math.sin(Ft*Ct)).sub(f).normalize(),v.copy(c.n).add(h.n).addScaledVector(g,-c.n.dot(g)-h.n.dot(g)).normalize();const Yt=s.skin(Ot(Et.s,.02,s.sMax),Et.ang);return{bones:cs(t,Yt.bones),weights:Yt.weights}},C=o.broad,[P,L]=C?.restCoverts??[7,.3];for(let W=0;W<P;W++){const j=W/(P-1),ft=ct(.03,L,j*j*.4+j*.6),dt=ct(b,x,j),Dt=dt*ct(_,T,j),Ft=ct(o.rest.width[0],o.rest.width[1],it(0,.35,ft)),Et=Math.max(3,Math.round(2*Ft/(dt*.62)));for(let Yt=0;Yt<Et;Yt++){const Gt=Ot(-.98+2*(Yt+(W%2?.5:0)+(n()-.5)*.3)/Et,-1.02,1.02),Xt=.85+n()*.3,mt=N(ft+(n()-.5)*.012,Gt,Dt*Xt,-Gt*.12+(n()-.5)*.1,.004+j*.004,7+n()*5);i.add({...hs(w,n,.8+.4*n()),root:f,dir:g,normal:v,skinNormal:c.n,iriNormal:v,width:dt*Xt,length:Dt*Xt,cols:3,rows:4,curl:.05+n()*.08,asym:0,...mt,rand:n(),coord:l,gain:0,cover:Ot(1-w.rowStep,.1,.9)})}}for(let W=.42;W<.98;W+=.04)for(const j of[-.82,-.3,.3,.82]){const ft=.85+n()*.3,dt=N(W+(n()-.5)*.02,j+(n()-.5)*.2,.085*ft,-j*.1,.002,4);i.add({...hs(w,n,.7+.3*n()),root:f,dir:g,normal:v,skinNormal:c.n,iriNormal:v,width:.05*ft,length:.085*ft,cols:3,rows:4,curl:.04,asym:0,...dt,rand:n(),coord:l,gain:0,cover:.5})}const F=[];for(let W=0;W<=26;W++)for(let j=0;j<=14;j++)u(W/20,ct(-2.2,2.2,j/14),c),F.push({p:c.p.clone(),n:c.n.clone()});const E=new y,D=W=>{let j=F[0],ft=1/0;for(const dt of F){const Dt=dt.p.distanceToSquared(W);Dt<ft&&(ft=Dt,j=dt)}return E.copy(W).sub(j.p).dot(j.n)},U=r.tail,O=U.droop*Ct,Y=new y(0,-Math.sin(O),-Math.cos(O)),H=new y(0,Math.cos(O),-Math.sin(O)),G=s.center(r.spine.tail,new y).addScaledVector(Y,U.length[1]*o.rest.cross[0]).addScaledVector(H,.035);G.x=o.rest.cross[1]*a,a>0&&G.addScaledVector(H,.014);const K=new y,ot=new y,Q=[],k=C?.restSecondaries??{u:[.2,.3],v:[.82,.3],len:[.19*A,.27*A],width:.066*A},Z=C?.restPrimaries??{u:[.3,.42],v:[.25,-.8],reach:[.52,1],width:[.068*A,.05*A]};for(let W=0;W<o.secondaries;W++){const j=W/(o.secondaries-1);Q.push({u:ct(k.u[0],k.u[1],j),v:ct(k.v[0],k.v[1],j),w:k.width,reach:1,to:null,len:ct(k.len[0],k.len[1],j),dv:-.3,asym:.15})}for(let W=0;W<o.primaries;W++){const j=W/(o.primaries-1);Q.push({u:ct(Z.u[0],Z.u[1],j),v:ct(Z.v[0],Z.v[1],j),w:ct(Z.width[0],Z.width[1],j),reach:ct(Z.reach[0],Z.reach[1],Math.pow(j,.8)),to:G.clone().addScaledVector(H,(1-j)*.05).addScaledVector(Y,-(1-j)*.02),len:0,dv:0,asym:ct(.2,.45,j)})}const q=C?ke(C.primaryTip):null,st=C?ke(C.secondaryTip):null;Q.forEach((W,j)=>{const ft=u(W.u,W.v,c),dt=.016-j*7e-4;f.copy(c.p).addScaledVector(c.n,dt),ot.copy(c.n);let Dt=W.len;W.to?(K.copy(W.to),Dt=K.distanceTo(f)*W.reach):(u(W.u+Dt/d,W.v+W.dv,h),K.copy(h.p).addScaledVector(h.n,dt),ot.add(h.n).normalize());const Ft=.035;for(let mt=0;mt<60;mt++){g.copy(K).sub(f).normalize(),v.copy(ot).addScaledVector(g,-ot.dot(g)).normalize();let ut=!0;for(const Kt of[.25,.45,.65,.85,1])if(E.copy(f).addScaledVector(g,Kt*Dt).addScaledVector(v,-Ft*Dt*Kt*Kt),D(E.clone())<.005+.012*Kt-j*3e-4){ut=!1;break}if(ut)break;K.addScaledVector(ot,.005)}const Et=s.skin(Ot(ft.s,.02,s.sMax),ft.ang),Yt=.75+n()*.5,Gt=j<o.secondaries?m:p,Xt=j<o.secondaries?st:q;i.add({root:f,dir:g,normal:v,skinNormal:null,iriNormal:v,width:W.w,length:Dt,cols:3,rows:9,round:.75,cup:.1,curl:Ft,asym:W.asym*a,base:Gt.clone().multiplyScalar(Yt),tip:Xt?Xt.clone().multiplyScalar(Yt):Gt.clone().multiplyScalar(Yt*.8),iri:M,iri2:M,iriStrength:Xt?.07:.22,iriPower:2.5,loose:0,widen:.2,edge:C?C.dusk[j<o.secondaries?1:0]:0,closed:Xt?.5:0,bones:cs(t,Et.bones),weights:Et.weights,rand:n(),coord:l,gain:0,cover:a>0?.2:.8,channel:yh})})}function X1(i,t,e){const n=t.species.tail,s=ke(n.color),r=n.tip===void 0?null:ke(n.tip),o=ke(n.sheen??4609132),a=ke(n.centralSheen??2058840),l=new y,c=new y,h=new y;for(const u of t.rectrices){const d=t.rest[u.bone.name];new $t().makeRotationFromQuaternion(d.worldQuat).extractBasis(l,c,h);const f=(Math.abs(u.k)-.5)/Math.max(n.rectrices-1,1),g=.85+e()*.3,v=n.outer&&f>=n.outer.from?s.clone().lerp(ke(n.outer.color),.7):s;i.add({root:d.worldPos,dir:h,normal:c,skinNormal:null,iriNormal:c,width:n.width,length:ct(n.length[0],n.length[1],Math.pow(f,1.4)),cols:5,rows:14,round:1,cup:.06,curl:.01,asym:.12*Math.sign(u.k),base:v.clone().multiplyScalar(g),tip:(r??v).clone().multiplyScalar(r?g:g*.8),closed:n.banded?.5:0,iri:f<.1?a:o,iri2:o,iriStrength:f<.1?.13:.2,iriPower:3,loose:0,widen:.45,bones:[t.index(u.bone.name),0,0,0],weights:[1,0,0,0],rand:e(),coord:1,gain:0,cover:u.k>0?.8:.2,channel:yh})}}function q1(i,t=3,e=120,n=80){const{loft:s,species:r}=i,o=new Ic,a={p:new y,n:new y,t:new y},l=new y,c=new Float32Array(n+1),h=Array.from({length:n+1},()=>new y),u=new y,d=qi(r.seed+99),f=560,g=s.sMax-.12,v=[];for(let p=0;p<=e;p++){const m=g-p/e*(g-.05);for(let M=0;M<=n;M++){const w=M/n*Math.PI*2;s.surface(m,w,a),p>0&&(c[M]+=h[M].distanceTo(a.p)),h[M].copy(a.p),v.push({p:a.p.clone(),n:a.n.clone(),d:c[M],s:m,a:w})}}for(let p=0;p<t;p++){const m=t>1?p/(t-1):0,M=ct(.008,.03,m),w=o.pos.length/3;for(let b=0;b<v.length;b++){const x=v[b],A=b%(n+1),_=x.a<=Math.PI?x.a/Math.PI:(2*Math.PI-x.a)/Math.PI,T=Mi(r,x.s,_),N=pp(r,T,x.s,_),{gold:C,glit:P}=N,L=N.shade*fp(s,x.s,x.a);let F=T.fuzz??Math.min(.55+(T.loose??0)*.6,1);for(const U of nn)F*=it(r.eye.radius*1.25,r.eye.radius*2.1,x.p.distanceTo(i.eyes[U].center));F*=1-it(s.sMax-.7,s.sMax-.2,x.s);{const U=s.wingUV(x.s,x.a);U.u>.02&&U.u<.99&&(F*=it(.85,1.15,Math.abs(U.v)))}const E=hs(T,d,L,C,r.shading.gold,P);Mh(u,x.n,T),l.copy(x.p).addScaledVector(x.n,M*(.5+.5*Math.min(F*2,1))*Ot(T.width/.03,.4,1));const D=s.skin(x.s,x.a);o.pos.push(l.x,l.y,l.z),o.nor.push(x.n.x,x.n.y,x.n.z),o.uv.push(A/n*f,x.d),o.root.push(l.x,l.y,l.z),o.hinge.push(1,0,0),o.data.push(m,s.bodyCoord(x.s)*.8,T.lift,F1),o.iriN.push(u.x,u.y,u.z),o.cBase.push(E.base.r,E.base.g,E.base.b,T.fine?0:T.iriStrength*P*(1+C)/4),o.cTip.push(E.tip.r,E.tip.g,E.tip.b,F),o.cIri.push(E.iri.r,E.iri.g,E.iri.b,T.iriPower/32),o.cIri2.push(E.iri2.r,E.iri2.g,E.iri2.b,m),o.edge.push(0,0),o.si.push(...cs(i,D.bones)),o.sw.push(...D.weights)}for(let b=0;b<e;b++)for(let x=0;x<n;x++){const A=w+b*(n+1)+x,_=A+n+1;o.idx.push(A,_,A+1,_,_+1,A+1)}}return o}function Y1(i){const t=qi(i.species.seed),e=new Ic;H1(e,i,t),G1(e,i,t);const n=new Ic;for(const r of nn)V1(n,i,r,t),W1(n,i,r,t);X1(n,i,t);const s=q1(i);return{contour:e.build(),flight:n.build(),fuzz:s.build()}}function K1(i,t=64,e=36,n=.007){const s={p:new y,n:new y,t:new y},{loft:r}=i,o=[],a=[],l=[],c=[],h=new y;for(let d=0;d<=t;d++){const f=d/t*r.sMax;for(let g=0;g<=e;g++){const v=g/e*Math.PI*2,p=r.skin(f,v);r.surface(f,v,s),h.copy(s.p).addScaledVector(s.n,-n),o.push(h.x,h.y,h.z),a.push(...cs(i,p.bones)),l.push(...p.weights)}}for(let d=0;d<t;d++)for(let f=0;f<e;f++){const g=(d+.5)/t*r.sMax;if(g>4.3&&g<9&&Math.cos((f+.5)/e*Math.PI*2)>-.25)continue;const v=d*(e+1)+f,p=v+e+1;c.push(v,v+1,p,p,v+1,p+1)}const u=new Me;return u.setAttribute("position",new ie(o,3)),u.setAttribute("skinIndex",new ga(a,4)),u.setAttribute("skinWeight",new ie(l,4)),u.setIndex(c),u.computeVertexNormals(),u}const gp=`
attribute vec3 aRoot;
attribute vec3 aHinge;
attribute vec4 aData; // rand, body coord, lift gain, channel
uniform float uFluff;
uniform float uLift[8];
uniform float uGorget;
uniform float uCrest;
uniform vec2 uWingSpread;
uniform float uRestCover;
uniform vec2 uWingLift;
uniform vec4 uWingOut;
uniform vec3 uWingPivot;
uniform vec3 uWingSpan;
uniform vec3 uWingChord;
vec3 rotAxis(vec3 v, vec3 k, float c, float s) { return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c); }
// the resting wing swung off the flank: twist about its length, then out about its chord
vec3 wingSwing(vec3 v, bool right) {
  vec2 a = right ? vec2(uWingOut.z, -uWingOut.w) : vec2(-uWingOut.x, uWingOut.y);
  vec3 m = vec3(right ? -1.0 : 1.0, 1.0, 1.0);
  v = rotAxis(v, uWingSpan * m, cos(a.y), sin(a.y));
  return rotAxis(v, uWingChord * m, cos(a.x), sin(a.x));
}`,_p=`
float fCoord = clamp(aData.y, 0.0, 1.0) * 7.0;
float fI = floor(min(fCoord, 6.0));
float fWave = mix(uLift[int(fI)], uLift[int(fI) + 1], fCoord - fI);
float fAng = aData.z * (uFluff + fWave) * (0.6 + 0.8 * aData.x);
fAng += (aData.w > 0.5 && aData.w < 1.5 ? uGorget : 0.0) + (aData.w > 1.5 && aData.w < 2.5 ? uCrest : 0.0);
// wings: ids 2/3 = the resting wing on the body (left/right), 4/5 = the real blades
bool fRest = aData.y > 1.5 && aData.y < 3.5;
bool fReal = aData.y > 3.5;
bool fRight = aData.y > 2.5 && aData.y < 3.5 || aData.y > 4.5;
float fSpread = fRight ? uWingSpread.y : uWingSpread.x;
float fUnfold = smoothstep(0.03, 0.35, fSpread);
// past fully spread the wing is beating too fast to see: the blades go, a blur fan stands in
float fBeat = 1.0 - smoothstep(1.2, 1.6, fSpread);
if (fRest) fAng += (fRight ? uWingLift.y : uWingLift.x) * (0.5 + aData.x);
float fC = cos(fAng), fS = sin(fAng);`,vp=`
vec3 transformed = aData.w > 3.5 ? position + normal * max(fAng, -0.1) * 0.05 : aRoot + rotAxis(position - aRoot, aHinge, fC, fS);
// as the wing spreads the resting wing sinks into the body and the real blades grow out of it
if (fRest) {
  vec3 fPivot = vec3(fRight ? -uWingPivot.x : uWingPivot.x, uWingPivot.yz);
  transformed = fPivot + wingSwing(transformed - fPivot, fRight);
  // (its blades always; its coverts stay as the flank's own cover where the species asks)
  transformed = mix(transformed, aRoot - normal * 0.03, fUnfold * (aData.w > 2.5 ? 1.0 : 1.0 - uRestCover));
}
if (fReal) transformed = mix(aRoot, transformed, fUnfold * fBeat);
`;function Z1(){const i={uFluff:{value:0},uLift:{value:new Float32Array(8)},uGorget:{value:0},uCrest:{value:0},uWingSpread:{value:new kt},uRestCover:{value:0},uWingLift:{value:new kt},uWingOut:{value:new Ae},uWingPivot:{value:new y},uWingSpan:{value:new y(0,0,-1)},uWingChord:{value:new y(0,1,0)},uFlash:{value:1},uGlint:{value:1},uPal:{value:[new jt,new jt,new jt,new jt]}},t=new mn({color:16777215,roughness:.6,metalness:0,side:ze,alphaToCoverage:!0});return t.onBeforeCompile=e=>{Object.assign(e.uniforms,i),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${gp}
attribute vec3 aIriN;
attribute vec4 aBase;
attribute vec4 aTip;
attribute vec4 aIri;
attribute vec4 aIri2;
attribute vec2 aEdge; // dark free edge, closed vane
uniform mat3 uPal[4];
varying vec2 vEdge;
varying vec2 vFUv;
varying vec3 vFData;
varying vec4 vBase;
varying vec4 vTip;
varying vec4 vIri;
varying vec4 vIri2;
varying vec3 vIriN;`).replace("#include <beginnormal_vertex>",`${_p}
vec3 objectNormal = rotAxis(normal, aHinge, fC, fS);
vec3 fIriN = rotAxis(aIriN, aHinge, fC, fS);
if (fRest) { objectNormal = wingSwing(objectNormal, fRight); fIriN = wingSwing(fIriN, fRight); }
vFUv = uv; vFData = vec3(aData.x, aData.w, fAng);
vBase = aBase; vTip = aTip; vIri = aIri; vIri2 = aIri2; vEdge = aEdge;
// the palette: per vertex, so it costs nothing in the fragment shader
if (aData.w > 0.5 && aData.w < 2.5) {
  mat3 m = aData.w < 1.5 ? uPal[0] : uPal[1];
  vIri.rgb = max(m * vIri.rgb, 0.0); vIri2.rgb = max(m * vIri2.rgb, 0.0);
  vBase.rgb = max(m * vBase.rgb, 0.0); vTip.rgb = max(m * vTip.rgb, 0.0);
}
else {
  vBase.rgb = max(uPal[2] * vBase.rgb, 0.0); vTip.rgb = max(uPal[2] * vTip.rgb, 0.0);
  vIri.rgb = max(uPal[3] * vIri.rgb, 0.0); vIri2.rgb = max(uPal[3] * vIri2.rgb, 0.0);
}`).replace("#include <skinnormal_vertex>",`#include <skinnormal_vertex>
#ifdef USE_SKINNING
  fIriN = (skinMatrix * vec4(fIriN, 0.0)).xyz;
#endif
vIriN = normalize(normalMatrix * fIriN);`).replace("#include <begin_vertex>",vp),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlash;
uniform float uGlint;
varying vec2 vEdge;
varying vec2 vFUv;
varying vec3 vFData;
varying vec4 vBase;
varying vec4 vTip;
varying vec4 vIri;
varying vec4 vIri2;
varying vec3 vIriN;
float fIriMask;
float fBarb;
float fEdge;
float fBarbRand;
float fBarbHue;
float fSoft;
float fTilt;
float fFuzz;`).replace("#include <color_fragment>",`#include <color_fragment>
{
  fFuzz = vFData.y > 3.5 ? 1.0 : 0.0;
  if (fFuzz > 0.5) {
    // hairs: thin tapered dashes in columns that run the way the feathers lie, two
    // sets of columns over each other so no grid shows
    float layer = vIri2.a;
    float density = vTip.a * mix(1.0, 0.55, layer);
    // hairs wander together in slow waves, so the coat has locks, not a comb pattern
    float sway = sin(vFUv.y * 11.0 + floor(vFUv.x * 0.07) * 2.1) * 1.3 + sin(vFUv.y * 4.3 + vFUv.x * 0.021) * 2.2;
    float alpha = 0.0, tone = 0.5, dash = 0.0, pick = 0.5;
    // the plushest tracts (belly, flanks, the velvet face): hairs nearly of one tone
    float plush = smoothstep(0.82, 1.0, vTip.a);
    for (int o = 0; o < 2; o++) {
      float fo = float(o);
      float cx = (vFUv.x + sway) * (1.0 + 0.63 * fo) + fo * 17.3 + layer * 5.7;
      float colId = floor(cx);
      float hc = fract(sin(colId * 12.9898 + fo * 4.1 + layer * 9.7) * 43758.5453);
      float len = mix(0.018, 0.045, hc);
      float sy = vFUv.y / len + hc * 13.0;
      float seg = floor(sy), fy = fract(sy);
      float hs = fract(sin((colId + seg * 57.0) * 78.233 + fo * 1.7) * 24634.6345);
      float fx = fract(cx) - 0.5 + (hs - 0.5) * 0.5 * fy + sin(vFUv.y * 70.0 + hc * 40.0) * 0.12;
      float w = 1.0 - smoothstep(0.14, 0.36, abs(fx));
      float taper = smoothstep(0.0, 0.12, fy) * (1.0 - smoothstep(0.5, 1.0, fy));
      float a = step(1.0 - density, hs) * w * taper;
      if (a > alpha) { alpha = a; tone = fract(hs * 7.31); dash = smoothstep(0.25, 0.5, fy) * (1.0 - smoothstep(0.5, 0.8, fy)) * w; pick = fract(hs * 3.17 + hc); }
    }
    // too far to resolve single hairs: their average
    float lodF = clamp(fwidth(vFUv.x) * 1.3, 0.0, 1.0);
    alpha = mix(alpha, density * 0.45, lodF);
    // seen edge-on a shell is a film, not hairs: let it go, the frayed feathers make the outline
    alpha *= smoothstep(0.34, 0.74, abs(dot(normalize(vNormal), normalize(vViewPosition))));
    diffuseColor.rgb = mix(vBase.rgb, vTip.rgb, 0.75) * mix(mix(0.55, 0.75, plush) + mix(0.9, 0.4, plush) * tone, mix(1.0, 0.95, plush), lodF);
    // break up the coverage steps with a little screen noise, or they show as dotted bands
    float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
    diffuseColor.a = clamp(alpha + (ign - 0.5) * 0.3 * min(alpha * 3.0, 1.0), 0.0, 1.0);
    fBarb = 0.0; fEdge = 0.0; fSoft = 1.0; fTilt = 0.35;
    fBarbRand = mix(pick, 0.5, lodF);
    fBarbHue = mix(tone, 0.5, lodF);
    // glints are short dashes on some hairs, not tiles
    fIriMask = mix(step(0.62, pick) * dash * 2.6, 0.4, lodF);
  } else {
  float u = vFUv.x, v = vFUv.y, au = abs(vFUv.x);
  float rnd = vFData.x;
  bool flight = vFData.y > 2.5;
  bool scale = vFData.y > 0.5 && !flight; // gorget, crown: crisp closed vanes
  // gorget scales are scallops whose uv is their true shape: u across, v along, the free
  // edge a semicircle of radius 1 about (0, 0.5)
  bool scallop = scale && vFData.y < 1.5;
  float loose = flight ? 0.0 : vTip.a;
  // the plush underparts (belly, flanks, down): one soft surface, the feathers only just told apart
  float plush = scale ? 0.0 : smoothstep(0.62, 0.85, loose);
  // a closed vane (a parrot's contour feather): the barbs zipped together, a clean round outline
  float closed = flight || scale ? 0.0 : vEdge.y;
  fEdge = 0.0;
  fBarbRand = 0.5;
  // barbs, one per 2 PI of arg. On a blade they run diagonally off the shaft. On contour
  // feathers and scales they are a fan: fine parallel strands that splay from behind the
  // root, like the teeth of a comb or the ribs of a scallop, the outer ones running off
  // the side of the vane before the tip.
  float outline = mix(0.5, 1.0, smoothstep(0.0, 0.5, v)) * pow(max(1.0 - pow(clamp((v - 0.5) / 0.5, 0.0, 1.0), 1.9), 0.0), 0.53);
  float fanX = u * outline / (v + 0.4) * 1.4;
  // a scallop's ridges are its barbs: they fan out a little from the root, the whole comb
  // bends to one side, the spacing is uneven and every scale has its own count
  float sFan = u / (0.5 + 0.6 * v);
  sFan += (fract(rnd * 23.7) - 0.5) * 0.5 * v * v;
  sFan += 0.035 * sin(sFan * 9.0 + rnd * 40.0 + v * 2.5) + 0.018 * sin(sFan * 23.0 + rnd * 91.0 - v * 4.0);
  float arg = scallop ? sFan * mix(8.0, 12.5, fract(rnd * 57.3)) * 6.2832 + rnd * 6.28 : flight ? v * 520.0 - au * 38.0 + rnd * 6.28 : fanX * (scale ? 7.0 : mix(8.5, 6.5, loose)) * 6.2832 + rnd * 6.28;
  float fw = fwidth(arg);
  float lod = smoothstep(1.2, 3.0, fw); // 0 = barbs resolved, 1 = sub-pixel
  float id = floor(arg / 6.2832 + 0.5);
  // a thin bright strand with a dark gap either side
  float h = fract(sin(id * 12.9898 + rnd * 78.233) * 43758.5453);
  float h2 = fract(sin(id * 39.3468 + rnd * 11.135) * 24634.6345);
  // on a scallop the barbs are broad with a thin groove between, each a little wider or narrower
  float strand = scallop ? smoothstep(0.03 + 0.14 * h, 0.3 + 0.3 * h, 0.5 + 0.5 * cos(arg)) : smoothstep(0.3, 0.78, 0.5 + 0.5 * cos(arg));
  float ridge = 0.5 + 0.5 * cos(arg); // 1 on the barb, 0 in the gap between two
  fBarb = (ridge * 2.0 - 1.0) * (1.0 - lod);
  fBarbRand = mix(h2, 0.5, lod);
  float shaft = 1.0 - smoothstep(0.0, flight ? 0.07 : 0.09, au);
  // (a blade is one colour, half way from base to tip, unless it is banded (vEdge.y on a
  // blade): then the base colour runs most of its length and the tip colour ends it)
  float banded = flight ? step(0.25, vEdge.y) : 0.0;
  // (a remex darkens over its outer third; a rectrix (vEdge.y of 0.5) ends in a narrower band)
  vec3 pig = mix(vBase.rgb, vTip.rgb, flight ? mix(0.5, smoothstep(vEdge.y > 0.75 ? 0.56 : 0.7, 0.95, v), banded) : mix(smoothstep(0.3, 1.0, v), 0.62 + 0.3 * v, plush));
  // overlap shadow at the root, where the next feather up covers this one
  // (a lifted feather shows more of itself)
  float cover = vIri2.a * (1.0 - clamp(vFData.z * 1.6, 0.0, 0.8));
  float bare = smoothstep(cover - 0.3, cover + 0.12, v + 0.1 * (1.0 - au));
  float occ = flight ? mix(0.5, 1.0, smoothstep(0.0, 0.25, v)) : mix(scale ? 0.42 : mix(0.74, 0.96, plush), 1.0, bare);
  float edge = scallop ? (v > 0.5 ? length(vec2(u, (v - 0.5) * 2.0)) : au * 0.85) : max(au, (v - 0.55) / 0.45);
  // scales carry a paler fringe on the free edge; soft feathers just vary barb by barb
  // (and a parrot's feather a dusky band there: the scaled look)
  float rim = scale ? -smoothstep(0.8, 1.0, edge) * 0.45 : flight ? 0.0 : -smoothstep(0.8, 0.95, edge) * vEdge.x;
  pig *= occ * (1.0 + (flight ? 0.26 : scale ? 0.35 : 0.0) * fBarb) * (1.0 + rim);
  // soft feathers: the strands carry the colour, between them it is nearly dark
  // (plush feathers: hardly darker between the strands, so no row of them casts a line)
  if (!flight && !scale) pig *= mix(mix(mix(mix(0.3, 0.74, plush), 0.82, closed), mix(1.3, 1.08, plush), strand), 0.86, lod) * (0.88 + 0.24 * mix(h, 0.5, lod));
  fBarbHue = flight || scale ? 0.5 : mix(0.55 * fract(rnd * 5.31) + 0.45 * fract(h2 * 3.7 + h), 0.5, lod * 0.6);
  if (!flight && !scale) {
    // per feather, subtle: a touch warmer or cooler, lighter or darker,
    // and now and then a worn pale tip
    float r1 = fract(rnd * 17.13);
    float r2 = fract(rnd * 41.71);
    pig *= mix(vec3(1.05, 0.98, 0.93), vec3(0.95, 0.98, 1.06), r1);
    pig *= mix(0.87 + 0.26 * r2, 0.76 + 0.08 * r2, plush);
    pig *= 1.0 + 0.2 * step(0.95, fract(rnd * 7.73)) * smoothstep(0.6, 1.0, v);
  }
  if (flight) {
    // blades lie in a stack: each shows a strip along one edge. Shade across that strip
    // (dark where the neighbour sits on it, a paler line on the free edge) so the stack
    // reads as separate feathers. Seen from underneath the other edge is the free one.
    float lead = u * sign(vIri2.a - 0.5) * (gl_FrontFacing ? 1.0 : -1.0);
    float strip = smoothstep(-0.5, 1.0, lead);
    // a parrot's remex (vEdge.x on a blade): the colour is on the outer web, the one toward
    // the leading edge; the inner web, which the next feather covers, is dusky
    // (seen from above: from underneath (vEdge.y of 1, not the tail's 0.5) the whole wing is
    // a duller, paler blue-green, darker only toward the tips)
    bool under = !gl_FrontFacing && vEdge.y > 0.75;
    if (under) {
      vec3 b0 = vBase.rgb;
      vec3 teal = vec3(b0.g * 0.45, (b0.g + b0.b) * 0.62, (b0.g + b0.b) * 0.56);
      pig = mix(teal, teal * 0.3, smoothstep(0.6, 0.98, v));
    } else {
      pig *= 1.0 - 0.8 * vEdge.x * smoothstep(0.2, -0.3, u * sign(vIri2.a - 0.5));
    }
    // each feather its own tone, a touch warmer or cooler than the next
    pig *= mix(vec3(1.12, 0.96, 0.9), vec3(0.9, 0.96, 1.12), rnd);
    pig *= mix(0.42, 1.25, strip * strip);
    // rachis: a pale quill line, fading out toward the tip, with a dark groove beside it
    float quill = 1.0 - smoothstep(0.012, 0.05, au);
    float groove = smoothstep(0.03, 0.07, au) * (1.0 - smoothstep(0.07, 0.16, au));
    pig *= 1.0 - 0.3 * groove;
    pig = mix(pig, vBase.rgb * 2.6 + 0.004, quill * (1.0 - smoothstep(0.55, 0.95, v)) * 0.85);
    // paler worn edge
    pig += vBase.rgb * 1.2 * smoothstep(0.8, 0.98, lead) + vBase.rgb * 0.5 * smoothstep(0.88, 1.0, au);
    // the underside of a blade is paler and catches the light from below
    // (a banded blade is opaque pigment: only a little paler below)
    if (!gl_FrontFacing) pig = pig * mix(2.0, 1.3, banded) + vec3(0.006, 0.006, 0.008) * (0.4 + strip);
    fEdge = (smoothstep(0.8, 0.97, lead) + 0.35 * smoothstep(0.9, 1.0, au)) * (gl_FrontFacing ? 0.3 : 1.0);
  } else {
    pig *= mix(1.0, 0.72, shaft * (scallop ? 0.0 : 0.7 - 0.5 * plush));
    if (!scale) {
      // dust: on a few feathers a white speck, a short thread of lint lying any which way,
      // or a wisp of pale down; commoner on the dark upper parts. Each fades out before it
      // gets thinner than a pixel, so it never sparkles.
      float dark = 1.0 - smoothstep(0.004, 0.02, dot(vBase.rgb, vec3(0.3, 0.5, 0.2)));
      float pick = fract(rnd * 91.7);
      float px = fwidth(v) + 1e-5;
      vec2 sc = vec2(fract(rnd * 13.3) * 1.1 - 0.55, 0.45 + 0.4 * fract(rnd * 29.1));
      vec2 d = vec2((u - sc.x) * 0.55, v - sc.y);
      float speck = step(1.0 - mix(0.006, 0.02, dark), pick) * (1.0 - smoothstep(0.035, 0.085, length(d))) * clamp(0.06 / px - 0.4, 0.0, 1.0);
      float la = fract(rnd * 47.3) * 3.1416;
      vec2 ld = vec2(cos(la), sin(la));
      float along = dot(d, ld), across = dot(d, vec2(-ld.y, ld.x)) + 0.05 * sin(along * 9.0 + rnd * 20.0);
      float lint = step(pick, mix(0.004, 0.016, dark)) * (1.0 - smoothstep(0.012, 0.03, abs(across))) * (1.0 - smoothstep(0.2, 0.3, abs(along))) * clamp(0.022 / px - 0.4, 0.0, 1.0);
      float tuft = step(0.5, pick) * step(pick, 0.5 + mix(0.001, 0.004, dark)) * (1.0 - smoothstep(0.1, 0.3, length(d))) * (0.4 + 0.6 * strand) * clamp(0.15 / px - 0.4, 0.0, 1.0);
      pig = mix(pig, vec3(0.5, 0.5, 0.48), max(speck, lint) * 0.9);
      pig = mix(pig, vec3(0.3, 0.27, 0.27), tuft * 0.8);
    }
  }
  diffuseColor.rgb = pig;
  #ifdef ALPHA_TO_COVERAGE
  if (!flight) {
    float aa = max(fwidth(edge), 1e-4);
    // every barb ends at its own length, and now and then the vane splits
    float cut = mix(scale ? 0.7 : mix(0.62, 0.45, loose), 1.03, h * h) - (h2 < 0.05 + 0.1 * loose ? 0.45 : 0.0);
    // a scallop's rim is a comb: each barb stops at its own length, the grooves open between them
    if (scallop) cut = 1.0 - 0.13 * h2 * h2 - (h < 0.07 ? 0.12 : 0.0);
    cut = mix(cut, 0.99, closed);
    float alive = 1.0 - smoothstep(cut - aa, cut + aa, edge);
    if (scallop) alive *= 1.0 - (1.0 - strand) * smoothstep(0.78, 0.93, edge);
    // toward the edge of a soft feather the barbs stand apart: you see between them
    float open = scale ? 0.0 : smoothstep(mix(0.55, 0.1, loose), mix(0.95, 0.7, loose), max(edge, v * 0.9)) * mix(0.75, 1.0, loose) * (1.0 - closed);
    float gap = (1.0 - strand) * open;
    float fine = alive * (1.0 - gap);
    // too far to resolve barbs: the same thing on average, a soft feathered outline
    float far = mix(1.0 - smoothstep(mix(0.82, 0.5, loose), 1.06, edge) * mix(0.35, 0.8, loose), 1.0 - smoothstep(0.96, 1.04, edge), closed);
    diffuseColor.a = mix(fine, far, lod);
  } else {
    // a few barbs have come unzipped near the edge of the vane
    float notch = step(h2, 0.035) * smoothstep(0.55, 0.75, au) * (1.0 - lod);
    diffuseColor.a = 1.0 - notch * smoothstep(0.2, 0.5, 1.0 - ridge);
  }
  #endif
  // structural colour: on scales the whole exposed disc; on soft feathers it sits on the
  // barbs, so it glitters in streaks rather than tiling
  // every strand shines, some much more than others; too far to tell them apart, their
  // average, with the odd single-feather sparkle so velvet still glints
  float streak = mix(strand * (0.25 + 2.3 * h * h), 0.55 * (1.0 + 1.6 * step(0.9, fract(rnd * 3.77))), lod);
  // scales: the flash runs in fine ridges with dark lines between, still a hint of them when tiny,
  // and a dark line where the scale's free edge lies over the next
  float scaleEdge = 1.0 - 0.6 * smoothstep(0.8, 1.0, edge);
  // (a scallop's covered root still glows a little, so a gap in the row above is not a black hole)
  fIriMask = flight ? 1.0 : scale ? (scallop ? mix(0.3, 1.0, bare) : bare) * mix((0.3 + 0.95 * strand) * (scallop ? 0.62 + 0.85 * h * h : 1.0), 0.62 + 0.18 * ridge, lod) * (1.0 - (scallop ? 0.0 : 0.3) * shaft) * scaleEdge : bare * streak;
  fSoft = (flight || scale) ? 0.0 : 1.0;
  // every barb of a scallop is its own little mirror too, if a steadier one
  fTilt = scallop ? 0.16 : fSoft * 0.35;
  }
}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = clamp((vFData.y > 3.5 ? 0.95 : vFData.y > 2.5 ? 0.8 : vFData.y > 0.5 ? 0.55 : 0.92) + 0.06 * fBarb, 0.08, 1.0);`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{
  vec3 nI = normalize(vIriN + vec3(0.0, 0.0, 1e-5));
  vec3 V = geometryViewDir;
  // on soft feathers every barb is its own little mirror, tilted a bit differently
  float c = clamp(dot(nI, V) + (fBarbRand - 0.5) * fTilt, 0.0, 1.0);
  float power = vIri.a * 32.0;
  float strength = vBase.a * 4.0;
  // hue slides with the angle of incidence
  vec3 colV = mix(vIri2.rgb, vIri.rgb, smoothstep(0.3, 0.8, c));
  // strand by strand the green leans gold or teal
  float fGold = fSoft * clamp((0.4 - fBarbHue) / 0.4, 0.0, 1.0) * 0.85;
  float fTeal = fSoft * clamp((fBarbHue - 0.68) / 0.32, 0.0, 1.0) * 0.6;
  colV = mix(colV, vec3(colV.g * 1.15, colV.g * 1.05, colV.b * 0.25), fGold);
  colV = mix(colV, vec3(colV.r * 0.5, colV.g * 0.95, colV.g * 0.95), fTeal);
  float lobeV = pow(c, power);
  vec3 ambient = (irradiance + iblIrradiance) * RECIPROCAL_PI;
  vec3 flash = colV * lobeV * (ambient * 2.2 + 0.05) * uFlash;
  #if NUM_DIR_LIGHTS > 0
  for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
    vec3 H = normalize(directionalLights[i].direction + V);
    float nh = max(dot(nI, H), 0.0);
    float cl = max(dot(nI, directionalLights[i].direction), 0.0);
    vec3 colL = mix(vIri2.rgb, vIri.rgb, smoothstep(0.3, 0.8, nh));
    colL = mix(colL, vec3(colL.g * 1.15, colL.g * 1.05, colL.b * 0.25), fGold);
    colL = mix(colL, vec3(colL.r * 0.5, colL.g * 0.95, colL.g * 0.95), fTeal);
    flash += colL * pow(nh, power * 8.0) * cl * directionalLights[i].color * 0.35 * uGlint;
  }
  #endif
  // structural colour saturates, it never goes white: a soft ceiling on the
  // brightest channel, all three scaled alike so the hue holds
  // (the ceiling on the flash itself, the ridge and edge mask after it, so the ridges keep their contrast)
  vec3 fl = max(flash * strength, vec3(0.0));
  float fm = max(max(fl.r, fl.g), fl.b);
  fl *= 1.0 / (1.0 + fm / 0.55);
  totalEmissiveRadiance += fl * fIriMask;
  // the free edge of a blade is thin and a little translucent: it picks up the sky
  totalEmissiveRadiance += vec3(0.55, 0.6, 0.75) * fEdge * (ambient * 0.22 + 0.003);
  // downy edge light: thin barbs scatter at grazing angles
  // (clamped: a dot product a hair over 1 would feed pow a negative base, and one NaN
  // pixel becomes a dotted disc once a depth-of-field pass smears it)
  float fres = pow(clamp(1.0 - dot(normal, V), 0.0, 1.0), 3.0);
  reflectedLight.indirectDiffuse += diffuseColor.rgb * ambient * fres * mix(2.5, 1.6, fSoft);
  // matte coat: soft feathers keep almost no mirror highlight
  bool blade = vFData.y > 2.5 && vFData.y < 3.5;
  // even the show scales only flash through their structural colour, not as mirrors
  reflectedLight.directSpecular *= blade ? 0.18 : fSoft > 0.5 ? 0.06 : 0.22;
  reflectedLight.indirectSpecular *= blade ? 0.12 : fSoft > 0.5 ? 0.06 : 0.3;
}`)},t.customProgramCacheKey=()=>"plumage-v47",{material:t,uniforms:i}}function $1(i){const t=new zf({side:ze});return t.onBeforeCompile=e=>{Object.assign(e.uniforms,i),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>${gp}`).replace("#include <begin_vertex>",_p+vp)},t.customProgramCacheKey=()=>"plumage-depth-v5",t}class lr{constructor(t){this.rig=t}rig;pos=[];nor=[];col=[];uv=[];si=[];sw=[];idx=[];add(t,e,n,s,r){const o=this.rig.rest[e],a=new $t().compose(o.worldPos,o.worldQuat,new y(1,1,1)),l=t.index?t.toNonIndexed():t.clone(),c=l.getAttribute("position").clone();l.applyMatrix4(a);const h=l.getAttribute("position"),u=l.getAttribute("normal"),d=l.getAttribute("uv"),f=this.pos.length/3,g=this.rig.index(e),v=new y;for(let p=0;p<h.count;p++){v.fromBufferAttribute(c,p);const m=r?.(v)??n;this.pos.push(h.getX(p),h.getY(p),h.getZ(p)),this.nor.push(u.getX(p),u.getY(p),u.getZ(p)),this.col.push(m.r,m.g,m.b),this.uv.push(d?d.getX(p):0,d?d.getY(p):0),this.si.push(s?this.rig.index(s(v)):g,0,0,0),this.sw.push(1,0,0,0),this.idx.push(f+p)}l.dispose(),t.dispose()}build(){const t=new Me;return t.setAttribute("position",new ie(this.pos,3)),t.setAttribute("normal",new ie(this.nor,3)),t.setAttribute("color",new ie(this.col,3)),t.setAttribute("uv",new ie(this.uv,2)),t.setAttribute("skinIndex",new ga(this.si,4)),t.setAttribute("skinWeight",new ie(this.sw,4)),t.setIndex(this.idx),t.boundingSphere=new On(new y(0,.4,0),2.5),t}}function As(i,t,e,n=10){const s=[],r=[],o=i.length,a=new y,l=new y,c=new y;for(let u=0;u<o;u++){a.copy(i[Math.min(u+1,o-1)]).sub(i[Math.max(u-1,0)]).normalize(),l.crossVectors(e,a).normalize(),c.crossVectors(a,l);const[d,f]=t(u/(o-1));for(let g=0;g<=n;g++){const v=g/n*Math.PI*2;s.push(i[u].x+l.x*Math.cos(v)*d+c.x*Math.sin(v)*f,i[u].y+l.y*Math.cos(v)*d+c.y*Math.sin(v)*f,i[u].z+l.z*Math.cos(v)*d+c.z*Math.sin(v)*f)}}for(let u=0;u<o-1;u++)for(let d=0;d<n;d++){const f=u*(n+1)+d,g=f+n+1;r.push(f,f+1,g,g,f+1,g+1)}const h=new Me;return h.setAttribute("position",new ie(s,3)),h.setIndex(r),h.computeVertexNormals(),h}function Lo(i){const t=[],e=[],n=i[0].length;for(const r of i)for(const o of r)t.push(o.x,o.y,o.z);for(let r=0;r<i.length-1;r++)for(let o=0;o<n-1;o++){const a=r*n+o,l=a+n;e.push(a,a+1,l,l,a+1,l+1)}const s=new Me;return s.setAttribute("position",new ie(t,3)),s.setIndex(e),s.computeVertexNormals(),s}function yl(i,t,e,n,s=!1){const a=[],l=[],c=[];for(let u=0;u<=12;u++){const d=ct(t,e,u/12);for(let f=0;f<=12;f++){const g=ct(-n,n,f/12);let v=Math.sin(g),p=Math.cos(g)*Math.sin(d);const m=Math.cos(g)*Math.cos(d);if(s){const M=v;v=p,p=M}a.push(v*i,p*i,m*i),l.push(v,p,m)}}for(let u=0;u<12;u++)for(let d=0;d<12;d++){const f=u*13+d,g=f+12+1;s?c.push(f,g,f+1,g,g+1,f+1):c.push(f,f+1,g,g,f+1,g+1)}const h=new Me;return h.setAttribute("position",new ie(a,3)),h.setAttribute("normal",new ie(l,3)),h.setIndex(c),h}const Ml={upperOpen:62*Ct,lowerOpen:-72*Ct,nictOpen:150*Ct};function J1(i){const t=i.species,e=t.eye.radius,n=new Ut(t.skin),s=new y(0,1,0),r=new lr(i),o=t.eye.ring,a=new Ut(t.eye.lid??2369067),l=new Ut(o?.color??7829372),c=new Ut(526346);for(const k of nn){const Z=k==="L"?-1:1,q=96,st=7,W=[],j=[],ft=[],dt=new Ut;for(let Gt=0;Gt<=q;Gt++){const Xt=Gt/q*Math.PI*2,mt=Math.cos(Xt),ut=Math.sin(Xt),[Kt,se]=t.eye.open??[43,29],oe=t.eye.open?2:mt*Z>0?1.3:1.6,te=1/Math.pow(Math.pow(Math.abs(mt)/(Kt*Ct),oe)+Math.pow(Math.abs(ut)/(se*Ct),oe),1/oe),V=56*Ct;for(let Se=0;Se<=st;Se++){const Qt=Se/st;if(o){const Pt=ct(Math.sin(te)*e*1.05,e*o.width,Qt),I=Math.pow(Math.sin(Math.PI*Math.min(Qt/.3,1)),.6),S=e*(t.eye.inset+.05)-Pt*Pt/(12*e);W.push(mt*Pt,ut*Pt,ct(Math.cos(te)*e*1.07,S,it(0,.3,Qt))+.015*e*I),dt.copy(l).multiplyScalar((.8+.2*it(0,.25,Qt))*(.95+.05*Math.sin(Xt*46+Qt*9))),j.push(dt.r,dt.g,dt.b);continue}const ge=ct(te,V,Qt),gt=Math.pow(Math.sin(Math.PI*Math.min(Qt/.5,1)),.6),Vt=Math.max(0,Math.sin(Xt*38))*it(.12,.2,Qt)*(1-it(.22,.32,Qt)),Mt=e*(1.05+.02*gt+.004*Vt-.035*it(.5,1,Qt));W.push(Math.sin(ge)*mt*Mt,Math.sin(ge)*ut*Mt,Math.cos(ge)*Mt),dt.copy(l).multiplyScalar(.55+.5*gt).lerp(c,Math.max(Vt*.35,it(.4,.6,Qt))),j.push(dt.r,dt.g,dt.b)}}for(let Gt=0;Gt<q;Gt++)for(let Xt=0;Xt<st;Xt++){const mt=Gt*(st+1)+Xt,ut=mt+st+1;ft.push(mt,ut,mt+1,ut,ut+1,mt+1)}const Dt=new Me;Dt.setAttribute("position",new ie(W,3)),Dt.setAttribute("color",new ie(j,3)),Dt.setIndex(ft),Dt.computeVertexNormals();const Ft=Dt.toNonIndexed(),Et=Ft.getAttribute("color");let Yt=0;r.add(Ft,`eye.${k}`,l,null,()=>dt.fromBufferAttribute(Et,Yt++).clone()),r.add(yl(e*1.04,12*Ct,112*Ct,78*Ct),`lidUpper.${k}`,a),r.add(yl(e*1.036,-106*Ct,16*Ct,78*Ct),`lidLower.${k}`,a)}const h=new Ut(t.legs.color),u=t.legs.perchRadius;for(const k of nn){const Z=Rn(k),q=i.tarsusLength,st=t.legs.toeRadius??.0085,W=st/.0085;r.add(As([0,.25,.5,.75,1,1.15].map(dt=>new y(0,0,dt*q)),dt=>[ct(.011,.017,dt)*W,ct(.011,.017,dt)*W],s,8),`tarsus.${k}`,h);const j=(dt,Dt,Ft,Et,Yt)=>{const Gt=[];for(let mt=0;mt<=14;mt++){const ut=mt/14,Kt=ct(Dt,Ft,ut),se=it(.78,1,ut)*.012,oe=(1-it(0,.2,ut))*.012,te=u+st*.9-se+oe;Gt.push(new y(ct(Et,Yt,ut),-u+te*Math.cos(Kt),te*Math.sin(Kt)))}r.add(As(Gt,mt=>{const ut=mt>.78?ct(.75,.08,(mt-.78)/.22):1+.12*Math.sin(mt*22);return[st*ut,st*ut*.9]},new y(1,0,0),7),`toe.${k}.${dt}`,h.clone().multiplyScalar(1-dt%2*.12))},ft=t.legs.toe/(u+st);t.legs.zygodactyl?(j(1,.05,-ft*.72,-.004*Z,-.03*Z),j(2,-.1,ft*.92,-.004*Z,-.022*Z),j(3,-.1,ft*1.1,.006*Z,.02*Z),j(4,.05,-ft*1,.006*Z,.034*Z)):(j(1,-.12,ft*.95,0,-.03*Z),j(2,-.12,ft*1.1,0,.002*Z),j(3,-.12,ft*.98,0,.034*Z),j(4,.05,-ft*.8,0,-.006*Z))}const d=K1(i),f=new mn({color:16777215,vertexColors:!0,roughness:.9,envMapIntensity:.4,side:ze}),g=new mn({color:n.clone().multiplyScalar(.5),roughness:1,envMapIntensity:.15,side:ze}),v=new ni(d,g);v.name="bird.skin";const p=new ni(r.build(),f);p.name="bird.bare";const m=new lr(i),M=t.bill,w=new Ut(M.color),b=new Ut(2493968),x=k=>ct(1,.17,Math.pow(k,.8))*(k>.95?ct(1,.05,(k-.95)/.05):1),A=(k,Z,q,st)=>{const W=[];for(let ft=0;ft<=26;ft++){const dt=ct(-.07,M.length*st,ft/26),Dt=Math.max(dt/M.length,0);W.push(new y(0,k*M.radius*x(Dt)-M.droop*Dt*Dt,dt))}return As(W,ft=>{const dt=Math.max((ft*(M.length*st+.07)-.07)/M.length,0);return[M.radius*q*x(dt),M.radius*Z*x(dt)]},s,12)},_=k=>{const Z=Math.max(k/M.length,0);return-M.droop*Z*Z};if(M.hook){const k=M.hook,Z=new Ut(k.cere),q=w.clone().multiplyScalar(.86),st=.07,W=12,j=(S,X)=>S>X?Math.sqrt(Math.max(1-Math.pow((S-X)/(1-X),2)*.99,0)):1,ft=k.turn*Ct,dt=(k.top+k.drop)/(1-Math.cos(ft)),Dt=k.top-dt,Ft=(S,X)=>S<=0?X.set(0,k.top,S*st):X.set(0,Dt+dt*Math.cos(ft*S),k.reach*Math.sin(ft*S)),Et=Ft(1,new y),Yt=new y(0,-M.droop,M.length),Gt=new y(0,ct(Yt.y,Et.y,.35),Yt.z+.012),Xt=.5,mt=(S,X)=>{if(S<=0)return X.set(0,0,S*st);if(S<=Xt){const yt=M.length*S/Xt;return X.set(0,_(yt),yt)}const ht=(S-Xt)/(1-Xt),at=(1-ht)*(1-ht),_t=2*ht*(1-ht);return X.set(0,at*Yt.y+_t*Gt.y+ht*ht*Et.y,at*Yt.z+_t*Gt.z+ht*ht*Et.z)},ut=.1,Kt=S=>1+.06*(1-it(ut-.03,ut+.03,S)),se=S=>M.radius*ct(1,.2,Ot(S,0,1))*j(S,.86)*Kt(S),oe=[-1,-.5,...Array.from({length:37},(S,X)=>X/36)],te=new y,V=new y,Se=(S,X)=>{Ft(S,te),mt(S,V);const ht=se(S),at=X*(X===1?Kt(S):1);return Array.from({length:W+1},(_t,yt)=>{const et=-Math.PI/2+Math.PI*yt/W;return new y(ht*Math.sin(et),V.y+(te.y-V.y)*at*Math.cos(et),V.z+(te.z-V.z)*at*Math.cos(et))})},Qt=k.reach*Math.sin(ft*ut);m.add(Lo(oe.map(S=>Se(S,1))),"bill",w,null,S=>S.z<Qt&&S.y>k.top*.3?Z:w.clone().lerp(q,it(0,-k.drop,S.y))),m.add(Lo(oe.map(S=>Se(S,.24))),"bill",b);for(const S of[1,-1]){const X=new ci(.0065,10,8);X.translate(S*M.radius*.6,k.top*.8,Qt*.55),m.add(X,"bill",new Ut(2038295))}const ge=M.length*.97,gt=S=>j(S,.9)*j(1-S,.86),Vt=S=>k.lower*(.75+.25*Math.sin(Math.min(S/.45,1)*Math.PI/2))*(1-.7*Math.pow(Math.max((S-.45)/.55,0),1.5))*gt(S),Mt=S=>k.lowerWidth*ct(1,.55,it(.3,1,S))*gt(S),Pt=(S,X)=>{const ht=ct(-.055,ge,S),at=Vt(S)*X,_t=Mt(S);return Array.from({length:W+1},(yt,et)=>{const rt=-Math.PI/2+Math.PI*et/W;return new y(_t*Math.sin(rt),_(ht)-at*Math.cos(rt),ht)})},I=Array.from({length:29},(S,X)=>X/28);m.add(Lo(I.map(S=>Pt(S,1))),"bill",w.clone().multiplyScalar(.93),()=>"jaw"),m.add(Lo(I.map(S=>Pt(S,.3))),"bill",b,()=>"jaw")}else m.add(A(.4,.58,1,1),"bill",w,null,k=>k.y<_(k.z)+.1*M.radius*x(Math.max(k.z/M.length,0))?b:null),m.add(A(-.36,.5,.9,.985),"bill",w,()=>"jaw",k=>k.y>_(k.z)-.1*M.radius*x(Math.max(k.z/M.length,0))?b:null);const T=M.hook?M.length*.4:.09;for(const k of[1,-1]){const Z=new Me,q=k*M.radius*.8,st=k*M.radius*.72;Z.setAttribute("position",new ie([q,2e-4,-.05,st,2e-4,T,q,-2e-4,-.05,st,2e-4,T,st,-2e-4,T,q,-2e-4,-.05],3)),Z.setAttribute("normal",new ie([k,0,0,k,0,0,k,0,0,k,0,0,k,0,0,k,0,0],3)),m.add(Z,"bill",new Ut(393731),W=>W.y>0?"bill":"jaw")}const N=new lr(i);if(M.hook){const k=new Ut(9069664),Z=new Ut(3812910),q=.012,st=M.length*.62,W=Array.from({length:15},(ft,dt)=>{const Dt=ct(q,st,dt/14);return new y(0,_(Dt)-.009,Dt)}),j=ft=>ft>.8?Math.sqrt(Math.max(1-Math.pow((ft-.8)/.2,2)*.96,0)):1;N.add(As(W,ft=>[ct(.02,.016,ft)*j(ft),ct(.009,.0075,ft)*j(ft)],s,10),"bill",k,ft=>ft.z<M.length*.5?"tongue.1":ft.z<M.length*.7?"tongue.2":"tongue.3",ft=>ft.z>st*.78?Z:null)}else{const k=new Ut(15979474),Z=.04,q=M.length*.8,st=j=>j.z<M.length*.5?"tongue.1":j.z<M.length*.7?"tongue.2":"tongue.3",W=(j,ft,dt,Dt)=>{const Ft=[];for(let Et=0;Et<=14;Et++){const Yt=ct(dt,Dt,Et/14),Gt=Yt/M.length,Xt=Math.max((Gt-.55)/.25,0);Ft.push(new y(ct(j,ft,Et/14),-8e-4*(1-Gt*.7)-M.droop*Gt*Gt-.0028*Xt*Xt,Yt))}return Ft};N.add(As(W(0,0,Z,q-.012),j=>[ct(.0036,.0027,j),ct(.0024,.002,j)],s,8),"bill",k,st);for(const j of[1,-1])N.add(As(W(j*.0011,j*.0015,q-.02,q),ft=>[.0015*Math.sqrt(1-ft*ft*.92),.0014*Math.sqrt(1-ft*ft*.92)],s,6),"bill",k,st)}const C=new gn({color:16777215,vertexColors:!0,roughness:.22,clearcoat:1,clearcoatRoughness:.12,sheen:.4,sheenColor:16770272,emissive:4863540,envMapIntensity:1.1,side:ze}),P=new ni(N.build(),C);P.name="bird.tongue";const L=new mn({color:16777215,vertexColors:!0,roughness:.68,envMapIntensity:.35,side:ze}),F=new ni(m.build(),L);F.name="bird.bill";const E=new lr(i);for(const k of nn){const Z=new ci(e,40,28);Z.rotateX(Math.PI/2);const q=Z.getAttribute("position");for(let W=0;W<q.count;W++){const j=q.getZ(W)/e,ft=1+.028*it(.55,1,j);q.setXYZ(W,q.getX(W)*ft,q.getY(W)*ft,q.getZ(W)*ft)}Z.computeVertexNormals();const st=Z.getAttribute("uv");for(let W=0;W<q.count;W++)st.setXY(W,q.getZ(W)/e,0);E.add(Z,`eye.${k}`,new Ut(1,1,1))}const D=new gn({color:0,roughness:.35,metalness:0,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.1,specularIntensity:.12,ior:1.4}),[U,O]=t.eye.pupil??[.93,.93],Y={uIris:{value:t.eye.iris===void 0?new Ut(.003,.0035,.006):new Ut(t.eye.iris)},uPupil:{value:U},pupilRest:U,pupilPinned:O};D.onBeforeCompile=k=>{k.uniforms.uIris=Y.uIris,k.uniforms.uPupil=Y.uPupil,k.vertexShader=k.vertexShader.replace("#include <common>",`#include <common>
varying float vEyeCos;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vEyeCos = uv.x;`),k.fragmentShader=k.fragmentShader.replace("#include <common>",`#include <common>
varying float vEyeCos;
uniform vec3 uIris;
uniform float uPupil;`).replace("#include <color_fragment>",`#include <color_fragment>
{
  // pupil, iris, dark limbus. The mountain-gem's iris is an umber so dark you only catch it
  // in strong light; a parrot's is brown, and its pupil pins small when it is excited.
  float iris = smoothstep(uPupil, uPupil - 0.07, vEyeCos) * smoothstep(0.55, 0.7, vEyeCos);
  diffuseColor.rgb = mix(vec3(0.0006, 0.0007, 0.0012), uIris, iris);
}`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{
  // What a wet black eye shows is the world: mostly the environment map, plus the canopy
  // overhead as a few pale irregular gaps of sky between leaves (the env map is too soft to
  // carry those), bent by the cornea. No painted catchlight.
  vec3 R = reflect(-geometryViewDir, normal);
  vec3 Rw = normalize((vec4(R, 0.0) * viewMatrix).xyz);
  vec2 q = Rw.xz / (Rw.y + 0.45) * 2.6 + vec2(1.7, 0.4);
  vec2 qi = floor(q), qf = fract(q);
  float gaps = 0.0;
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) {
    vec2 g = vec2(float(i), float(j));
    vec2 h = fract(sin(vec2(dot(qi + g, vec2(127.1, 311.7)), dot(qi + g, vec2(269.5, 183.3)))) * 43758.5453);
    vec2 d = (g + h - qf) * vec2(1.0, 0.6 + 0.8 * h.y);
    gaps = max(gaps, (1.0 - smoothstep(0.08, 0.3 * h.x + 0.12, length(d))) * step(0.45, h.x));
  }
  float up = smoothstep(0.15, 0.6, Rw.y);
  totalEmissiveRadiance += vec3(0.8, 0.95, 0.85) * gaps * up * 0.55;
  // a mirror-sharp highlight of the sun is thousands of nits on one pixel; a depth-of-field
  // pass turns that into a dotted disc. Keep the glints bright but finite.
  reflectedLight.directSpecular = min(reflectedLight.directSpecular, vec3(1.6));
  #ifdef USE_CLEARCOAT
  clearcoatSpecularDirect = min(clearcoatSpecularDirect, vec3(2.2));
  clearcoatSpecularIndirect = min(clearcoatSpecularIndirect, vec3(2.2));
  #endif
}`)};const H=new ni(E.build(),D);H.name="bird.eyes";const G=new lr(i);for(const k of nn)G.add(yl(e*1.045,-100*Ct,100*Ct,80*Ct,!0),`nict.${k}`,new Ut(9348296));const K=new gn({color:16777215,vertexColors:!0,roughness:.45,transparent:!0,opacity:.3,clearcoat:.2,side:ze,depthWrite:!1}),ot=new ni(G.build(),K);ot.name="bird.nict",ot.renderOrder=2;const Q=[v,p,F,P,H,ot];for(const k of Q)k.frustumCulled=!1,k.bind(i.skeleton,new $t);return v.castShadow=!0,F.castShadow=!0,p.castShadow=!0,p.receiveShadow=!0,F.receiveShadow=!0,{meshes:Q,eye:Y,dispose(){for(const k of Q)k.geometry.dispose(),k.material.dispose()}}}const Sl={spread:0,lift:0,droop:0,sweep:0,raise:0,out:0,twist:0};class xp{headYaw=0;headPitch=0;headRoll=0;headShift=new y;headStabil=.85;reachTarget=new y;reachWeight=0;reachDir=new y(0,0,1);reachPin=0;reachRoll=0;bodyYaw=0;bodyPitch=0;bodyRoll=0;bodyShift=new y;chestPitch=0;breath=0;fluff=0;lift=new Float32Array(8);gorget=0;crest=0;lidUpper=0;lidLower=0;nict=0;feetSlope=0;feetScale=1;grip=1;jaw=0;tongueOut=0;tongueCurl=0;carryAt=1;tailPitch=0;tailYaw=0;tailRoll=0;tailFan=0;wing={L:{...Sl},R:{...Sl}};reset(){Object.assign(this,j1),this.headShift.set(0,0,0),this.bodyShift.set(0,0,0),this.lift.fill(0);for(const t of nn)Object.assign(this.wing[t],Sl)}addLift(t,e,n){for(let s=0;s<8;s++){const r=(s/7-t)/e;this.lift[s]+=n*Math.exp(-r*r)}}}const j1=Object.fromEntries(Object.entries(new xp).filter(([,i])=>typeof i=="number")),Qn=new y(1,0,0),cr=new y(0,1,0),bl=new y(0,0,1),Io=new ve;function Q1(i,t){const{bones:e,rest:n,species:s}=i,r=new Yn,o=new ve,a=new ve,l=new ve,c=new ve,h=new ve,u=new ve,d=new ve,f=new ve,g=new y,v=new y,p=new y,m=new y,[M,w]=s.behaviour.neckShare,b={};for(const mt of nn){const ut=n[`hand.${mt}`].quat;b[mt]={out:Qn.clone().applyQuaternion(ut),fan:cr.clone().applyQuaternion(ut)}}{const mt={p:new y,n:new y,t:new y},ut=(te,V)=>{const Se=i.loft.wingAt(te,V,1);return i.loft.surface(Se.s,Se.ang,mt)},Kt=ut(.03,.3).p.clone(),se=ut(.95,0).p.clone().sub(Kt).normalize(),oe=ut(.4,0).n.clone();oe.addScaledVector(se,-oe.dot(se)).normalize(),t.uWingPivot.value.copy(Kt),t.uWingSpan.value.copy(se),t.uWingChord.value.crossVectors(oe,se)}const x=n.bill,A=s.legs.zygodactyl===!0,_=new y(0,-s.bill.droop,s.bill.length).applyQuaternion(x.worldQuat).add(x.worldPos).sub(n.head.worldPos),T=_.length(),N=Math.atan2(_.y,_.z),C=.34,P=new y,L=new y,F=s.bill.length*.65,E=["tongue.1","tongue.2","tongue.3"],D=[.06,.5,.7].map(mt=>mt*s.bill.length),U=[0,.3,.7],O=(mt,ut)=>{const Kt=s.bill.length,se=Math.min(mt,Kt),oe=-2*s.bill.droop*se/(Kt*Kt);return ut.set(0,-s.bill.droop*(se/Kt)*(se/Kt)+oe*(mt-se),mt),-Math.atan(oe)},Y=D.map(()=>new y),H=D.map(()=>new y),G=D.map((mt,ut)=>O(mt,Y[ut])),K=new y,ot=new ve,Q=new $t,k=new y,Z=new y,q=(()=>{const[mt,ut]=s.throat,Kt={p:new y,n:new y,t:new y},se=n.head.worldPos,oe=i.loft.point(ut,0,new y).sub(se),te=i.loft.point(mt,0,new y).sub(se),V=i.loft.surface((mt+ut)/2,0,Kt).p.clone().sub(se),Se=Kt.n.clone(),Qt=i.loft.surface(mt,0,Kt).t.clone();return{chin:oe,rim:te,mid:V,out:Se,down:Qt,span:oe.distanceTo(te),pivot:se.clone().sub(n.chest.worldPos)}})(),st=.12,W=new ve,j=new y,ft=new y,dt=new y,Dt=new y,Ft=n.sternum.worldPos.clone().sub(n.chest.worldPos).setX(0).normalize(),Et=nn.map(mt=>({s:mt,foot:e[`foot.${mt}`],footRest:n[`foot.${mt}`],toes:[1,2,3,4].map(ut=>e[`toe.${mt}.${ut}`]),tarsus:e[`tarsus.${mt}`]})),Yt=()=>{h.copy(l).invert().multiply(c),u.copy(Io).slerp(h,M),d.copy(Io).slerp(h,w)};function Gt(mt,ut,Kt,se,oe,te){return te.copy(n.head.pos).applyQuaternion(oe).add(n.neck2.pos),te.applyQuaternion(se).add(n.neck1.pos),te.applyQuaternion(Kt).add(n.chest.pos),te.add(n.spine.pos),te.applyQuaternion(ut).add(mt),te}const Xt=function(ut){r.set(ut.bodyPitch,ut.bodyYaw,ut.bodyRoll,"YXZ"),o.setFromEuler(r),e.hips.quaternion.copy(o),e.hips.position.copy(n.hips.pos).add(ut.bodyShift),a.setFromAxisAngle(Qn,ut.chestPitch),e.chest.quaternion.copy(a),l.copy(o).multiply(a),e.sternum.position.copy(n.sternum.pos).addScaledVector(Ft,ut.breath*.011),e.sternum.scale.set(1+ut.breath*.028,1,1+ut.breath*.012),r.set(-ut.headPitch,ut.headYaw,ut.headRoll,"YXZ"),c.setFromEuler(r),Yt(),Gt(e.hips.position,o,a,u,d,p),Gt(n.hips.pos,Io,Io,u,d,m),g.copy(m).sub(p).multiplyScalar(Ot(ut.headStabil,0,1)).add(ut.headShift);const Kt=Ot(ut.reachWeight,0,1);if(Kt>0){K.copy(p).add(g),v.copy(ut.reachTarget).sub(K);const Vt=v.length()||1e-6,Mt=Ot(Vt-T,-.24,C);K.addScaledVector(v,Mt/Vt);const Pt=Ot(ut.reachPin,0,1);Pt>0&&K.lerp(v.copy(ut.reachDir).multiplyScalar(-T).add(ut.reachTarget),Pt),v.copy(ut.reachTarget).sub(K).normalize();const I=Ot(Math.atan2(v.x,v.z),-2.2,2.2),S=Ot(Math.asin(Ot(v.y,-1,1))-N,-1.1,1.25);r.set(-S,I,ut.headRoll*(1-Kt),"YXZ"),ot.setFromEuler(r),Pt>0&&(k.crossVectors(cr,v).normalize(),Z.crossVectors(v,k),d.setFromRotationMatrix(Q.makeBasis(k,Z,v)),d.multiply(u.setFromAxisAngle(bl,ut.reachRoll)).multiply(u.setFromAxisAngle(Qn,N)),ot.slerp(d,Pt)),c.slerp(ot,Kt),Yt(),Gt(e.hips.position,o,a,u,d,p),g.lerp(K.sub(p),Kt)}e.neck1.quaternion.copy(u),e.neck2.quaternion.copy(d),f.copy(u).multiply(d).invert().multiply(h),e.head.quaternion.copy(f),P.copy(p).add(g),f.copy(l).invert(),e.neck1.position.copy(n.neck1.pos).add(v.copy(g).multiplyScalar(.22).applyQuaternion(f)),f.copy(l).multiply(u).invert(),e.neck2.position.copy(n.neck2.pos).add(v.copy(g).multiplyScalar(.3).applyQuaternion(f)),f.copy(l).multiply(u).multiply(d).invert(),e.head.position.copy(n.head.pos).add(v.copy(g).multiplyScalar(.48).applyQuaternion(f)),W.set(0,h.y,0,h.w),W.lengthSq()<1e-6&&W.set(0,0,0,1),W.normalize(),e.throat.quaternion.copy(W),g.copy(e.head.position).applyQuaternion(e.neck2.quaternion).add(e.neck2.position).applyQuaternion(e.neck1.quaternion).add(e.neck1.position),j.copy(q.chin).applyQuaternion(h).add(g).sub(ft.copy(q.rim).applyQuaternion(W).add(q.pivot));const se=q.span*.5-j.length(),oe=.5*(se+Math.sqrt(se*se+1e-4));Dt.copy(q.down).applyQuaternion(W).multiplyScalar(oe),e.throat.position.copy(n.throat.pos).add(Dt),f.copy(W).slerp(h,.5),e.gular.quaternion.copy(f),v.copy(q.mid).applyQuaternion(f);const te=Ot(st*(q.span-j.length()),-.006,.03);dt.copy(q.out).applyQuaternion(f),e.gular.position.copy(g).add(q.pivot).add(Dt).multiplyScalar(.5).add(v).addScaledVector(dt,te),P.add(v.copy(_).applyQuaternion(c)),e.jaw.quaternion.copy(n.jaw.quat).multiply(u.setFromAxisAngle(Qn,Ot(ut.jaw,0,1.1)*(s.bill.gape??.31)));const V=Ot(ut.tongueOut,0,1)*F;let Se=0;for(let Vt=0;Vt<3;Vt++){const Mt=O(D[Vt]+V,H[Vt])-G[Vt],Pt=e[E[Vt]];Pt.quaternion.setFromAxisAngle(Qn,Mt-Se+ut.tongueCurl*U[Vt]),Vt===0?Pt.position.copy(n[E[0]].pos).add(H[0]).sub(Y[0]):Pt.position.copy(H[Vt]).sub(H[Vt-1]).sub(Y[Vt]).add(Y[Vt-1]).add(n[E[Vt]].pos).applyQuaternion(u.setFromAxisAngle(Qn,-Se)),Se=Mt}const Qt=Math.max(ut.carryAt,0);L.set(0,-s.bill.droop*Math.min(Qt,1)*Math.min(Qt,1)-(Qt<1?.003*(1-Qt):0),Qt*s.bill.length).applyQuaternion(x.worldQuat).add(x.worldPos).sub(n.head.worldPos),L.applyQuaternion(c).add(P).sub(v.copy(_).applyQuaternion(c));for(const Vt of nn){const Mt=i.eyes[Vt],Pt=ct(Ml.upperOpen,0,it(0,1,ut.lidUpper)),I=ct(Ml.lowerOpen,0,it(0,1,ut.lidLower));Mt.lidUpper.quaternion.copy(n[Mt.lidUpper.name].quat).multiply(u.setFromAxisAngle(Qn,-Pt)),Mt.lidLower.quaternion.copy(n[Mt.lidLower.name].quat).multiply(u.setFromAxisAngle(Qn,-I));const S=-Rn(Vt)*Ml.nictOpen*(1-Ot(ut.nict,0,1));Mt.nict.quaternion.copy(n[Mt.nict.name].quat).multiply(u.setFromAxisAngle(cr,S)),Mt.nict.scale.setScalar(ut.nict>.002?1:.001),Mt.lidUpper.scale.setScalar(ct(.93,1,it(0,.5,ut.lidUpper))),Mt.lidLower.scale.setScalar(ct(.93,1,it(0,.5,ut.lidLower)))}r.set(-ut.tailPitch,ut.tailYaw,ut.tailRoll,"YXZ"),e.tail.quaternion.copy(n.tail.quat).multiply(u.setFromEuler(r));const ge=ct(s.tail.restFan,s.tail.maxFan,Ot(ut.tailFan,-.5,1))*Ct;for(const Vt of i.rectrices)Vt.bone.quaternion.setFromAxisAngle(cr,Vt.k*ge);for(const Vt of nn){const Mt=i.wings[Vt],Pt=ut.wing[Vt],I=it(0,1,Pt.spread);for(let X=0;X<Mt.bones.length;X++)Mt.bones[X].quaternion.copy(Mt.folded[X]).slerp(Mt.spread[X],I);I>0&&(Pt.sweep!==0||Pt.raise!==0)&&(u.setFromAxisAngle(cr,-Rn(Vt)*Pt.sweep*I),d.setFromAxisAngle(bl,Rn(Vt)*Pt.raise*I),Mt.bones[0].quaternion.premultiply(d).premultiply(u));const S=1-I;if(S>0){const X=b[Vt],ht=Mt.bones[1];ht.quaternion.multiply(u.setFromAxisAngle(X.out,-Pt.lift*.3*S)),ht.quaternion.multiply(u.setFromAxisAngle(X.fan,-Rn(Vt)*Pt.droop*S))}}u.setFromAxisAngle(bl,ut.feetSlope);const gt=(1-Ot(ut.grip,0,1))*.6;for(const{s:Vt,foot:Mt,footRest:Pt,toes:I,tarsus:S}of Et){Mt.position.copy(Pt.pos).applyQuaternion(u),Mt.quaternion.copy(u),Mt.scale.setScalar(ut.feetScale);for(let ht=0;ht<4;ht++)I[ht].quaternion.setFromAxisAngle(Qn,ht===3||A&&ht===0?gt:-gt);v.copy(i.ankle[Vt]).sub(Pt.worldPos).multiplyScalar(ut.feetScale).applyQuaternion(u).add(Mt.position),g.copy(i.hipSocket[Vt]).applyQuaternion(o).add(e.hips.position).sub(v);const X=g.length();g.applyQuaternion(d.copy(u).invert()),is(g,Qn,S.quaternion),S.scale.set(1,1,X/i.tarsusLength/ut.feetScale)}t.uFluff.value=ut.fluff,t.uLift.value.set(ut.lift),t.uLift.value[0]+=ut.crest*.9,t.uLift.value[1]+=ut.crest*.7,t.uGorget.value=ut.gorget,t.uCrest.value=ut.crest,t.uWingSpread.value.set(ut.wing.L.spread,ut.wing.R.spread),t.uWingOut.value.set(ut.wing.L.out,ut.wing.L.twist,ut.wing.R.out,ut.wing.R.twist),t.uWingLift.value.set(ut.wing.L.lift,ut.wing.R.lift)};return Xt.tip=P,Xt.carry=L,Xt.billReach=T,Xt}class tS{constructor(t,e=7){this.species=t,this.rng=qi(e)}species;t=0;dt=0;rng;arousal=.3;baseline=.32;attention=null;attentionSpeed=0;freeze=0;saccading=!1;food=[];focus=null;focusId=0;eating=!1;gazeLock=!1;pinGaze=null;quiet=!1;handlers={};lastDir=new y;dir=new y;hasLast=!1;on(t,e){(this.handlers[t]??=[]).push(e)}emit(t,e){for(const n of this.handlers[t]??[])n(e)}excite(t){this.arousal=Ot(this.arousal+t,0,1)}step(t,e){if(this.dt=t,this.t+=t,this.freeze=Math.max(0,this.freeze-t),this.attention&&t>0){if(this.dir.copy(this.attention).sub(e).normalize(),this.hasLast){const n=this.dir.angleTo(this.lastDir)/t;this.attentionSpeed=Cn(this.attentionSpeed,Math.min(n,6),6,t)}this.lastDir.copy(this.dir),this.hasLast=!0}else this.hasLast=!1,this.attentionSpeed=Cn(this.attentionSpeed,0,4,t);this.excite(Math.max(this.attentionSpeed-.25,0)*.5*t),this.arousal=Cn(this.arousal,this.baseline,.14,t)}}class eS{name="posture";a=.3;yaw=new Ti(3.2,.5);follow=0;pitch=new Ti(5,.45);headYaw=0;constructor(t){t.on("saccade",e=>{this.yaw.kick(-e.dyaw*.5),this.pitch.kick(-e.dpitch*.4)}),t.on("fixate",e=>this.headYaw=e.yaw)}update(t,e){this.a=Cn(this.a,t.arousal,2.5,t.dt);const n=this.a;e.fluff+=ct(.2,-.06,n),e.headShift.y+=ct(-.032,.03,n),e.headShift.z+=ct(-.014,.012,n),e.bodyPitch+=ct(-.04,.05,n),e.bodyShift.y+=ct(-.012,.008,n),e.crest+=ct(0,.22,n),e.wing.L.droop+=ct(.05,0,n),e.wing.R.droop+=ct(.05,0,n);const s=t.t;e.bodyRoll+=Ve(s*.17,1)*.022,e.bodyShift.x+=Ve(s*.13,2)*.006,e.bodyPitch+=Ve(s*.21,3)*.012,this.follow=Cn(this.follow,this.headYaw*.14,.9,t.dt),e.bodyYaw+=this.follow+this.yaw.step(0,t.dt)+Ve(s*.11,4)*.025,e.chestPitch+=this.pitch.step(0,t.dt)}}class nS{name="breath";phase=0;update(t,e){const[n,s]=t.species.behaviour.breathHz;this.phase+=t.dt*ct(n,s,t.arousal)*Math.PI*2;const r=Math.sin(this.phase+.45*Math.sin(this.phase))*ct(.75,1.1,t.arousal);e.breath+=r,e.addLift(.42,.2,r*.014),e.tailPitch+=r*.011,e.bodyShift.y+=r*.0012,e.wing.L.lift+=r*.005,e.wing.R.lift+=r*.005}}const iS=i=>i*i*i*(10+i*(-15+6*i));class sS{name="gaze";maxYaw=70*Ct;interest=.5;billOn=.46;pursuit=0;minPitch=-45*Ct;minPitchFood=-50*Ct;cur;from;to;moving=!1;t0=0;dur=.06;amp=0;nextAt=.8;settle=10;burst=0;attYaw=0;attPitch=0;seenYaw=0;seenPitch=0;lastStart=-10;focusSeen=-1;focusAt=0;head=new y(0,.9,.05);d=new y;constructor(t){const e=t.species.behaviour.billUp*Ct;this.cur={yaw:.9,pitch:e,roll:0},this.from={...this.cur},this.to={...this.cur},t.on("startle",()=>{this.nextAt=t.t+.04+t.rng()*.04,this.burst=-1})}moveOn(t){this.burst=0,this.nextAt=Math.min(this.nextAt,t.t+vt(t.rng,.12,.4))}lookAtAttention(t){const e=t.focus??t.attention;return e?(this.d.copy(e).sub(this.head),this.attYaw=Math.atan2(this.d.x,this.d.z),this.attPitch=Math.atan2(this.d.y,Math.hypot(this.d.x,this.d.z)),!0):!1}pick(t,e=!1){const n=t.rng,s=t.species.behaviour.billUp*Ct,r=this.lookAtAttention(t),o=this.cur;let a;if(!e&&this.burst>0)this.burst--,a={yaw:o.yaw+vt(n,-1,1)*13*Ct,pitch:o.pitch+vt(n,-1,1)*8*Ct,roll:o.roll*.5+vt(n,-1,1)*9*Ct};else if(r&&(e||n()<this.interest+.4*t.arousal)){if(this.seenYaw=this.attYaw,this.seenPitch=this.attPitch,(e?0:n())<this.billOn)a={yaw:this.attYaw+vt(n,-5,5)*Ct,pitch:this.attPitch*.8+s+vt(n,-4,14)*Ct,roll:n()<.25?vt(n,-18,18)*Ct:vt(n,-5,5)*Ct};else{const h=vt(n,60,84)*Ct,u=Math.abs(o.yaw-(this.attYaw+h))<Math.abs(o.yaw-(this.attYaw-h))?1:-1;let d=n()<.6?u:-u;Math.abs(this.attYaw+d*h)>this.maxYaw&&(d=-d),a={yaw:this.attYaw+d*h,pitch:s*.6+vt(n,-8,12)*Ct,roll:d*(this.attPitch*.5+vt(n,-4,10)*Ct)}}n()<.35&&(this.burst=1+Math.floor(n()*2))}else{let c=Ot(vt(n,-1,1)*105*Ct,o.yaw-140*Ct,o.yaw+140*Ct);Math.abs(c-o.yaw)<22*Ct&&(c+=Math.sign(c-o.yaw||1)*30*Ct),a={yaw:c,pitch:s*.5+vt(n,-14,24)*Ct,roll:vt(n,-9,9)*Ct},n()<.3&&(this.burst=1+Math.floor(n()*2))}a.yaw=Ot(a.yaw,-this.maxYaw,this.maxYaw),a.pitch=Ot(a.pitch,this.minPitch,52*Ct);const l=t.species.behaviour.parrot?1.7:1;return a.roll=Ot(a.roll*l,-26*Ct*l,26*Ct*l),a}begin(t,e){const[n,s]=t.species.behaviour.saccade;this.from={...this.cur},this.to=e;const r=e.yaw-this.from.yaw,o=e.pitch-this.from.pitch,a=e.roll-this.from.roll;this.amp=Math.hypot(r*Math.cos((e.pitch+this.from.pitch)/2),o,a*.5),this.dur=Math.min(n+s*this.amp/Ct,.095),this.t0=t.t,this.moving=!0,this.lastStart=t.t,t.saccading=!0,t.emit("saccade",{amp:this.amp,dur:this.dur,dyaw:r,dpitch:o})}update(t,e){const n=t.species.behaviour;if(t.pinGaze){e.headYaw+=t.pinGaze[0]*Ct,e.headPitch+=t.pinGaze[1]*Ct,e.headRoll+=t.pinGaze[2]*Ct;return}if(t.focus&&!this.moving&&!t.gazeLock&&this.lookAtAttention(t)){const a=Math.hypot((this.attYaw-this.cur.yaw)*Math.cos(this.attPitch),this.attPitch-this.cur.pitch),l=this.focusSeen!==t.focusId;l&&!this.focusAt&&(this.focusAt=t.t+vt(t.rng,.09,.24)),(l&&t.t>=this.focusAt||!l&&a>6*Ct&&t.t-this.lastStart>.16&&t.rng()<t.dt*9)&&(this.focusSeen=t.focusId,this.focusAt=0,this.burst=0,this.begin(t,{yaw:Ot(this.attYaw,-this.maxYaw,this.maxYaw),pitch:Ot(this.attPitch+(l?vt(t.rng,-3,3)*Ct:0),this.minPitchFood,65*Ct),roll:l?vt(t.rng,-8,8)*Ct:this.cur.roll*.6}))}else if(!this.moving&&!t.quiet&&!t.focus&&!t.gazeLock)if(t.t>=this.nextAt&&(t.freeze<=0||this.burst<0)){const a=this.burst<0;a&&(this.burst=0),this.begin(t,this.pick(t,a))}else t.freeze<=0&&t.t-this.lastStart>.22&&this.lookAtAttention(t)&&Math.hypot((this.attYaw-this.seenYaw)*Math.cos(this.attPitch),this.attPitch-this.seenPitch)>13*Ct&&t.rng()<t.dt*ct(3,9,t.arousal)&&(this.burst=0,this.begin(t,this.pick(t,t.rng()<.5)),this.seenYaw=this.attYaw,this.seenPitch=this.attPitch);if(!this.moving&&this.pursuit>0&&!t.focus&&!t.gazeLock&&t.freeze<=0&&this.lookAtAttention(t)){const a=n.billUp*Ct,l=Ot(this.attYaw,-this.maxYaw,this.maxYaw),c=Ot(this.attPitch*.8+a*.6,this.minPitch,52*Ct),h=Math.hypot((l-this.cur.yaw)*Math.cos(c),c-this.cur.pitch),u=h>14*Ct&&t.t-this.lastStart>.3&&t.rng()<t.dt*5;if(h<28*Ct&&!u){const d=1-Math.exp(-t.dt*3.2*this.pursuit*(.75+.35*Ve(t.t*3.1,31)));this.cur={yaw:this.cur.yaw+(l-this.cur.yaw)*d,pitch:this.cur.pitch+(c-this.cur.pitch)*d,roll:this.cur.roll*(1-d*.5)},this.from={...this.cur},this.to={...this.cur},this.seenYaw=this.attYaw,this.seenPitch=this.attPitch,h>3*Ct&&(this.nextAt=Math.max(this.nextAt,t.t+.25))}else(u||t.t-this.lastStart>.16&&t.rng()<t.dt*10)&&(this.burst=0,this.begin(t,this.pick(t,!0)))}let s,r,o;if(this.moving){const a=(t.t-this.t0)/this.dur;if(a>=1){this.moving=!1,t.saccading=!1,this.cur={...this.to},this.settle=0;const h=Math.abs(this.cur.yaw-this.attYaw)<15*Ct,[u,d]=[ct(n.holdCalm[0],n.holdAlert[0],t.arousal),ct(n.holdCalm[1],n.holdAlert[1],t.arousal)];this.nextAt=t.t+(this.burst<0?.05:this.burst>0?vt(t.rng,.14,.42):EM(t.rng,u,d,1.8)*(h?1.15:1)),t.emit("fixate",{yaw:this.cur.yaw,pitch:this.cur.pitch})}const l=iS(Ot(a,0,1)),c=Math.sin(Math.PI*Ot(a,0,1));s=ct(this.from.yaw,this.to.yaw,l),r=ct(this.from.pitch,this.to.pitch,l)-c*this.amp*.09,o=ct(this.from.roll,this.to.roll,l),e.headShift.y-=c*Math.min(this.amp,1.6)*.012}else{this.settle+=t.dt;const a=Math.exp(-this.settle/.032)*Math.cos(this.settle*24*Math.PI*2)*.04;s=this.cur.yaw+(this.to.yaw-this.from.yaw)*a,r=this.cur.pitch+(this.to.pitch-this.from.pitch)*a,o=this.cur.roll+(this.to.roll-this.from.roll)*a}s+=Ve(t.t*11,11)*.0028+Ve(t.t*.6,12)*.008,r+=Ve(t.t*12,13)*.0028+Ve(t.t*.5,14)*.007,o+=Ve(t.t*.7,15)*.008,e.headYaw+=s,e.headPitch+=r,e.headRoll+=o,e.headShift.x+=Math.sin(s)*.014,e.headShift.z+=(Math.cos(s)-1)*.01-Math.max(r,0)*.018}}class rS{name="blink";t0=-10;full=!1;nextAt=1.5;constructor(t){t.on("saccade",e=>{e.amp>.6&&t.rng()<.45&&t.t-this.t0>.5&&this.start(t,!1)}),t.on("startle",()=>{this.nextAt=t.t+1.2+t.rng()})}start(t,e){this.t0=t.t,this.full=e;const[n,s]=t.species.behaviour.blinkEvery;this.nextAt=t.t+vt(t.rng,n,s)*ct(1.3,.8,t.arousal)}update(t,e){!t.quiet&&t.t>=this.nextAt&&t.freeze<=0&&this.start(t,t.rng()<ct(.3,.08,t.arousal));const n=this.full?1.7:1,s=(t.t-this.t0)/n,r=s<0?0:s<.045?it(0,.045,s):s<.07?1:1-it(.07,.165,s);e.nict+=r,e.lidLower+=r*(this.full?1:.3),e.lidUpper+=r*(this.full?.75:.08);const o=it(.3,.05,t.arousal);e.lidUpper+=o*.22,e.lidLower+=o*.18}}class oS{name="ruffle";kind="puff";t0=-100;nextAt;amp=.6;last=-1e9;constructor(t){const[e,n]=t.species.behaviour.ruffleEvery;this.nextAt=vt(t.rng,e*.5,n*.6),t.on("startle",()=>{this.t0=-100,this.nextAt=Math.max(t.t+vt(t.rng,2.8,5),this.last+t.species.behaviour.ruffleEvery[0])})}trigger(t,e,n){const s=t.rng();this.kind=e??(s<.45?"puff":s<.7?"shake":"throat"),this.t0=t.t,this.last=t.t,this.amp=n??vt(t.rng,.45,.75);const[r,o]=t.species.behaviour.ruffleEvery;this.nextAt=t.t+vt(t.rng,r,o),t.emit("ruffle",{kind:this.kind})}update(t,e){!t.quiet&&t.t>=this.nextAt&&t.freeze<=0&&!t.saccading&&(t.arousal<.7?this.trigger(t):this.nextAt=t.t+1);const n=t.t-this.t0;if(n<0||n>3)return;const s=this.amp;if(this.kind==="throat"){const l=it(0,.12,n)*(1-it(.7,1.25,n));e.gorget+=l*.42*s,e.crest+=l*.38*s,e.addLift(.12,.14,l*.25*s),e.headShift.y+=l*.01;return}for(let l=0;l<8;l++){const c=n-l/7*.2;if(c<=0)continue;const h=it(0,.13,c),u=1-it(.62,1.5,c),d=c>.62?.14*Math.sin((c-.62)*13)*Math.exp(-(c-.62)*3.5):0;e.lift[l]+=s*(h*u+d)*ct(.75,1,l/7)}e.crest+=s*.25*it(0,.1,n)*(1-it(.5,1.1,n));const r=it(.14,.24,n)*(1-it(.55,.85,n)),o=(n-.14)*14*Math.PI*2,a=Math.sin(o)*r;e.bodyRoll+=a*.05*s,e.bodyYaw+=Math.cos(o)*r*.035*s,e.tailYaw+=Math.sin(o-1.2)*r*.16*s,e.tailFan+=r*.55*s+it(0,.2,n)*(1-it(.6,1.4,n))*.25*s;for(const l of["L","R"])e.wing[l].lift+=(r*.11+Math.abs(a)*.05)*s+it(0,.2,n)*(1-it(.7,1.5,n))*.06*s,e.wing[l].droop+=r*.07*s;if(e.bodyShift.y+=r*.008,this.kind==="shake"){const l=it(.1,.2,n)*(1-it(.5,.75,n));e.headRoll+=Math.sin(o*1.15+.8)*l*.3*s,e.headYaw+=Math.cos(o*1.15)*l*.16*s,e.nict+=l,e.lidLower+=l*.6,e.headStabil-=l*.5}}}class aS{name="tail";pitch=new Ti(6.5,.28);fan=new Ti(4.5,.5);yaw=new Ti(5,.4);nextAt;pumps=0;pumpAt=0;constructor(t){const[e,n]=t.species.behaviour.tailEvery;this.nextAt=vt(t.rng,e*.4,n*.5),t.on("startle",s=>{this.pitch.kick(-5*s.strength),this.fan.kick(14*s.strength)}),t.on("saccade",s=>{s.amp>.9&&this.yaw.kick(-s.dyaw*.5)})}flick(t,e=1){this.pitch.kick(-vt(t.rng,3,5.5)*e),this.fan.kick(vt(t.rng,5,11)*e),this.yaw.kick(vt(t.rng,-1.5,1.5)*e)}update(t,e){if(!t.quiet&&t.t>=this.nextAt&&t.freeze<=0){const[n,s]=t.species.behaviour.tailEvery;this.nextAt=t.t+vt(t.rng,n,s),this.pumps=t.rng()<.4?1+Math.floor(t.rng()*2):0,this.pumpAt=t.t+.16,this.flick(t)}this.pumps>0&&t.t>=this.pumpAt&&(this.pumps--,this.pumpAt=t.t+vt(t.rng,.13,.2),this.flick(t,.7)),e.tailPitch+=this.pitch.step(0,t.dt),e.tailFan+=Math.max(this.fan.step(0,t.dt),-.3),e.tailYaw+=this.yaw.step(0,t.dt)}}class Ls{name="wings";t0=-100;nextAt;lead=1;amp=1;stretchT0=-100;stretchSide="L";stretches=0;nextStretch;constructor(t){const[e,n]=t.species.behaviour.wingEvery;this.nextAt=vt(t.rng,e*.5,n*.6),this.nextStretch=vt(t.rng,20,45)}static STRETCH=3.2;stretch(t,e=this.stretches%2===0?"up":t.rng()<.5?"L":"R"){this.stretches++,this.stretchT0=t.t,this.stretchSide=e,this.nextStretch=t.t+vt(t.rng,45,110)}get stretching(){return this.stretchT0>-50}shuffle(t){this.t0=t.t,this.lead=t.rng()<.5?1:-1,this.amp=vt(t.rng,.7,1.2);const[e,n]=t.species.behaviour.wingEvery;this.nextAt=t.t+vt(t.rng,e,n)}update(t,e){t.species.behaviour.parrot&&!t.quiet&&t.t>=this.nextStretch&&t.freeze<=0&&t.arousal<.5&&!t.eating&&!t.focus&&this.stretch(t);const n=t.t-this.stretchT0;if(n>=0&&n<=Ls.STRETCH){const o=it(0,.9,n)*(1-it(Ls.STRETCH-1,Ls.STRETCH,n));if(this.stretchSide==="up"){for(const a of["L","R"]){const l=e.wing[a];l.spread+=o,l.raise+=o*1,l.sweep-=o*.18}e.bodyPitch+=o*.14,e.tailFan+=o*.5,e.addLift(.5,.3,o*.06)}else{const a=this.stretchSide==="L"?1:-1,l=e.wing[this.stretchSide];l.spread+=o*.8,l.sweep-=o*.5,l.raise-=o*.35,e.tailFan+=o*.6,e.tailYaw+=a*o*.25,e.bodyRoll-=a*o*.06,e.addLift(.5,.3,o*.08)}}else n>Ls.STRETCH&&(this.stretchT0=-100);!t.quiet&&t.t>=this.nextAt&&t.freeze<=0&&!this.stretching&&this.shuffle(t);const s=t.t-this.t0;if(s<0||s>1.2)return;for(const o of["L","R"]){const a=s-((o==="L"?1:-1)*this.lead>0?0:.07);if(a<=0)continue;const l=it(0,.07,a)*(1-it(.22,.6,a)),c=Math.sin(a*12*Math.PI*2)*it(.05,.1,a)*(1-it(.2,.42,a));e.wing[o].lift+=(l*.2+c*.06)*this.amp,e.wing[o].droop+=l*.1*this.amp}const r=it(0,.08,s)*(1-it(.15,.5,s));e.bodyShift.y+=r*.006,e.addLift(.5,.25,r*.12)}}class lS{constructor(t){this.mind=t}mind;name="startle";crouch=new Ti(4.2,.42);t0=-100;strength=0;fire(t){const e=this.mind;this.strength=t,this.t0=e.t,e.arousal=Math.max(e.arousal,.6+.4*t),e.freeze=.45+e.rng()*.55,this.crouch.kick(-.9*t),e.emit("startle",{strength:t})}update(t,e){const n=this.crouch.step(0,t.dt);e.bodyShift.y+=n,e.bodyPitch+=-n*2.2,e.headShift.y+=n*.6;const s=t.t-this.t0;if(s<0||s>8)return;const r=this.strength,o=Math.exp(-s/1.6)*Math.min(s/.05,1);e.fluff-=.13*o*r,e.headShift.y+=.02*o*r;const a=Math.exp(-s/.09)*Math.min(s/.03,1);e.wing.L.lift+=a*.42*r,e.wing.R.lift+=a*.42*r,e.lidUpper-=.2*o,e.lidLower-=.2*o}}const wl=i=>i*i*i*(10+i*(-15+6*i)),Do=.06;class cS{constructor(t,e,n,s,r,o=null){this.mind=t,this.solver=e,this.headRest=n,this.pick=s,this.swallowed=r,this.hop=o,t.on("startle",()=>{this.carried>=0&&this.swallowed(this.carried),this.carried=-1,this.release(this.mind,"idle"),this.readyAt=this.mind.t+1.5})}mind;solver;headRest;pick;swallowed;hop;name="forage";reachOut=.3;reachIn=.2;catchRadius=.05;state="idle";id=-1;t0=0;dur=.15;decideAt=0;watchUntil=0;readyAt=0;retried=!1;ignore=new Map;target=new y;w=0;wFrom=0;lean=0;yaw=0;rel=new y;focus=new y;licks=3;carried=-1;hopAt=0;moved=new y;seed(t){return t.food.find(e=>e.id===this.id)}slideFor(t){const e=this.rel.copy(t).sub(this.headRest),n=e.length(),s=Math.atan2(e.x,e.z),r=Math.asin(Ot(e.y/Math.max(n,1e-6),-1,1));if(Math.abs(s)>2||r<-.95||r>1.3||t.y<-.12)return null;const o=n-this.solver.billReach;return o>this.reachOut||o<-this.reachIn?null:o}inView(t){const e=this.rel.copy(t).sub(this.headRest);return Math.abs(Math.atan2(e.x,e.z))<2.2&&e.length()<2.2&&t.y>-.9}release(t,e){this.state=e,this.t0=t.t,this.wFrom=this.w,e==="idle"&&(t.focus=null,t.gazeLock=!1,this.id=-1)}begin(t,e,n){this.state=e,this.t0=t.t,this.dur=n,this.wFrom=this.w}update(t,e){const n=t.t,s=Ot((n-this.t0)/this.dur,0,1);let r=this.seed(t);switch(t.eating=this.state!=="idle"&&this.state!=="watch",this.state){case"idle":{if(this.w=Cn(this.w,0,22,t.dt),n<this.readyAt)break;let o=null,a=1/0;for(const l of t.food){if(!this.inView(l.pos)||(this.ignore.get(l.id)??0)>n&&this.slideFor(l.pos)===null||l.vel.lengthSq()<Do*Do&&this.slideFor(l.pos)===null)continue;const c=l.pos.distanceTo(this.headRest)-(this.slideFor(l.pos)!==null?1:0);c<a&&(a=c,o=l)}o&&(this.id=o.id,this.state="watch",this.decideAt=0,this.watchUntil=n+vt(t.rng,.7,1.5),t.focus=this.focus.copy(o.pos),t.focusId++,t.excite(.25));break}case"watch":{if(this.w=Cn(this.w,0,22,t.dt),!r||!this.inView(r.pos)){this.release(t,"idle");break}if(t.focus=this.focus.copy(r.pos),this.hop?.busy)break;if(this.slideFor(r.pos)===null){if(this.decideAt=0,this.hop&&t.freeze<=0&&(this.hopAt||(this.hopAt=n+vt(t.rng,.45,1.1)),n>=this.hopAt)){const o=r.pos,a=this.hop.spotFor(l=>this.slideFor(this.moved.copy(o).sub(l))!==null);if(this.hopAt=n+vt(t.rng,.5,.9),a!==null&&this.hop.go(t,a)){this.watchUntil=Math.max(this.watchUntil,n+3);break}}r.vel.lengthSq()<Do*Do&&(this.watchUntil=Math.min(this.watchUntil,n+.25)),n>this.watchUntil&&(this.ignore.set(r.id,n+vt(t.rng,25,45)),this.release(t,"idle"),this.readyAt=n+vt(t.rng,.3,1));break}this.hopAt=0,this.decideAt||(this.decideAt=n+vt(t.rng,.35,1.1)),n>=this.decideAt&&!t.saccading&&t.freeze<=0&&(t.gazeLock=!0,this.retried=!1,this.begin(t,"windup",vt(t.rng,.09,.13)),t.emit("strike",{id:r.id}));break}case"windup":{if(!r){this.release(t,"idle");break}const o=Math.sin(s*Math.PI*.5);if(this.rel.copy(r.pos).sub(this.headRest).normalize(),e.headShift.addScaledVector(this.rel,-.03*o),e.bodyShift.y-=.006*o,s>=1){const a=this.slideFor(r.pos)??0;this.lean=a,this.yaw=Math.atan2(r.pos.x-this.headRest.x,r.pos.z-this.headRest.z),this.begin(t,"strike",Ot(.13+Math.abs(a)*.2,.12,.2))}break}case"strike":{if(!r){this.begin(t,"retract",.2);break}this.target.copy(r.pos).addScaledVector(r.vel,(1-s)*this.dur),this.w=this.wFrom+(1-this.wFrom)*(1-Math.pow(1-s,3)),e.jaw+=it(.2,.7,s)*(1-it(.92,1,s)*.88)*.95,s>=1&&(this.solver.tip.distanceTo(r.pos)<this.catchRadius?(this.pick(r.id),this.carried=r.id,t.excite(.1),this.begin(t,"hold",vt(t.rng,.06,.1))):!this.retried&&this.slideFor(r.pos)!==null?(this.retried=!0,this.begin(t,"strike",.1)):(this.ignore.set(r.id,n+vt(t.rng,3,5)),this.begin(t,"retract",.22)));break}case"hold":if(this.w=1,e.jaw+=.1,s>=1){t.focus=null;const o=t.species.behaviour.parrot===!0;this.licks=o?4+Math.floor(t.rng()*3):2,this.begin(t,"eat",o?this.licks*.26+.1:this.licks*.13+.04)}break;case"retract":this.w=this.wFrom*(1-wl(s)),s>=1&&(this.release(t,"idle"),this.readyAt=n+vt(t.rng,.3,.9));break;case"eat":{if(t.species.behaviour.parrot){this.w=this.wFrom*(1-wl(Ot((n-this.t0)/.35,0,1)));const d=Math.sin(Math.PI*(s*this.licks%1));e.carryAt=ct(.96,.6,it(0,1,s)),e.jaw+=.08+.3*d,e.tongueOut+=.08*d,e.headPitch-=.05*it(0,.25,s)*(1-it(.85,1,s)),s>=1&&this.begin(t,"swallow",vt(t.rng,.34,.46));break}this.w=this.wFrom*(1-wl(Ot((n-this.t0)/.2,0,1)));const o=Ot((n-this.t0)/(this.dur-.04)*this.licks,0,this.licks),a=Math.min(Math.floor(o),this.licks-1),l=o>=this.licks?1:o-a,c=1-a/this.licks,h=1-(a+1)/this.licks,u=Math.sin(Math.PI*it(0,.55,l));e.tongueOut+=Ot((c-.72)/.65*u+.04*u,0,1),e.carryAt=ct(c,h+.04,it(.35,1,l)),e.jaw+=.12+.3*Math.sin(Math.PI*it(0,.7,l))-.08*it(.75,1,l),e.headPitch+=.03*Math.sin(Math.PI*l),s>=1&&this.begin(t,"swallow",vt(t.rng,.36,.44));break}case"swallow":{this.w=0;const o=t.species.behaviour.parrot===!0;e.carryAt=o?ct(.6,.08,it(0,.4,s)):.04;const a=Math.sin(Math.PI*it(0,.55,s))*(o?.07:.26);e.headPitch+=a,e.headShift.y+=a*.03,e.jaw+=Math.sin(Math.PI*it(.1,.5,s))*(o?.2:.45);const l=Math.sin(Math.PI*it(.35,.95,s));e.gorget+=l*.16,e.addLift(.2,.12,l*.12),s>.18&&this.carried>=0&&(this.swallowed(this.carried),t.emit("ate",{id:this.carried}),this.carried=-1),s>=1&&(this.release(t,"idle"),this.readyAt=n+vt(t.rng,.4,1.3));break}}this.w>.001&&(e.reachTarget.copy(this.target),e.reachWeight=this.w,e.bodyPitch+=this.w*Ot(this.lean*.75,-.16,.24),e.bodyYaw+=this.w*this.yaw*.14,e.bodyShift.y-=this.w*.008,e.headStabil*=1-this.w)}}class hS{name="mouth";lickEvery=[14,36];singEvery=[30,80];blocked=()=>!1;flicks=[];nextLick;singFrom=-10;singFor=0;bursts=[];nextSing;pump=0;parrot;constructor(t){this.parrot=t.species.behaviour.parrot===!0,this.nextLick=vt(t.rng,5,14),this.nextSing=vt(t.rng,14,34),t.on("ate",()=>{t.rng()<.7&&(this.nextLick=t.t+vt(t.rng,.25,.6))}),t.on("startle",()=>{this.singFor=0,this.flicks.length=0,this.nextLick=t.t+vt(t.rng,8,16),this.nextSing=Math.max(this.nextSing,t.t+vt(t.rng,12,30))})}lick(t,e=vt(t.rng,.56,.68),n=t.rng()<.45?1:t.rng()<.6?2:3){this.flicks.length=0;let s=t.t;for(let r=0;r<n;r++)this.flicks.push({at:s,amp:r===0?e:e*vt(t.rng,.8,1.05)}),s+=vt(t.rng,.21,.3);this.nextLick=t.t+vt(t.rng,this.lickEvery[0],this.lickEvery[1])}sing(t,e=1.6){if(this.singFrom=t.t,this.bursts.length=0,this.parrot){let r=.1;const o=Math.max(2,Math.round(e*2.2));for(let l=0;l<o;l++){const c=vt(t.rng,2.6,3.4);this.bursts.push({at:r,notes:1,hz:c,amp:vt(t.rng,.7,.95)}),r+=1/c+vt(t.rng,.06,.2)}const a=this.bursts[this.bursts.length-1];this.singFor=a.at+1/a.hz+.3,this.nextSing=t.t+this.singFor+vt(t.rng,this.singEvery[0],this.singEvery[1]),this.flicks.length=0,this.nextLick=Math.max(this.nextLick,t.t+this.singFor+vt(t.rng,1.5,5)),t.excite(.25);return}let n=.06;for(;n<e-.2||this.bursts.length===0;){const r=3+Math.floor(t.rng()*3),o=vt(t.rng,13,16.5);this.bursts.push({at:n,notes:r,hz:o,amp:vt(t.rng,.26,.4)}),n+=r/o+(t.rng()<.25?vt(t.rng,.32,.5):vt(t.rng,.1,.22))}const s=this.bursts[this.bursts.length-1];this.singFor=s.at+s.notes/s.hz+.25,this.nextSing=t.t+this.singFor+vt(t.rng,this.singEvery[0],this.singEvery[1]),this.flicks.length=0,this.nextLick=Math.max(this.nextLick,t.t+this.singFor+vt(t.rng,1.5,5))}get singing(){return this.singFor>0}update(t,e){const n=!t.quiet&&!t.gazeLock&&!t.focus&&!t.eating&&t.freeze<=0&&!this.blocked();n&&t.t>=this.nextLick&&t.arousal<.6&&!this.singing&&this.lick(t),n&&t.t>=this.nextSing&&!this.singing&&(t.arousal<.42&&this.flicks.length===0?this.sing(t,vt(t.rng,1.1,2.4)):this.nextSing=t.t+vt(t.rng,4,9));let s=0;for(const h of this.flicks){const u=(t.t-h.at)/.19;u>=0&&u<=1&&(s=Math.max(s,h.amp*Math.sin(Math.PI*Math.pow(it(0,1,u),.8))))}this.flicks.length&&t.t>this.flicks[this.flicks.length-1].at+.2&&(this.flicks.length=0),s>0&&this.parrot?(e.tongueOut+=Math.min(s,.7)*.2,e.jaw+=.14*it(0,.3,s)):s>0&&(e.tongueOut+=Math.min(s,.7),e.tongueCurl+=.16*it(.3,.6,s),e.jaw+=.02*it(0,.3,s));let r=0,o=0,a=0;const l=t.t-this.singFrom;if(this.singFor>0)if(l>this.singFor||this.blocked())this.singFor=0;else for(const h of this.bursts){const u=l-h.at,d=h.notes/h.hz;u<0||u>d||(r=it(0,.03,u)*(1-it(d-.03,d,u)),o=.5-.5*Math.cos(u*h.hz*Math.PI*2),a=h.amp)}this.pump=Cn(this.pump,r,r>this.pump?30:11,t.dt);const c=this.pump;if(!(c<.002&&r===0)){if(this.parrot){e.jaw+=r*a*(.2+.8*o),e.tongueOut+=r*o*.1,e.headPitch+=c*.12+r*o*.06,e.headShift.z+=c*.014,e.headShift.y+=c*.008,e.bodyPitch+=c*.05,e.addLift(.12,.12,c*.3),e.tailFan+=c*.35,e.breath-=c*.5;return}e.jaw+=r*a*(.1+.9*o),e.gorget+=c*.2+r*o*.05,e.addLift(.2,.07,c*.16),e.crest-=c*.14,e.addLift(0,.07,-c*.14),e.addLift(.4,.09,-c*.3),e.breath-=c*.7,e.headPitch+=c*.035+r*o*.012,e.headShift.y-=c*.004,e.headShift.z-=c*.003,e.tailPitch-=c*.03}}}const No=()=>({point:new y,up:new y(0,1,0),tangent:new y(1,0,0),radius:.0405});class uS{constructor(t,e){this.mind=t,this.ground=e,t.on("startle",n=>{if(this.hold||this.phase!=="stand"||t.eating||t.rng()>.55*n.strength)return;const s=vt(t.rng,.1,.2)*(t.rng()<.5?-1:1),r=this.clampX(this.x+s);Math.abs(r-this.x)>.06&&this.go(t,r,.05)})}mind;ground;name="hop";maxHop=.35;homeAfter=[14,30];home=0;hold=!1;x=0;phase="stand";t0=0;dur=.1;x0=0;x1=0;apex=.05;from=No();to=No();here=No();tmp=No();legs=new Ti(5.5,.4);lag=new y;anchor=new y;off=new y;slope=0;scale=1;placed=!1;homeAt=20;lastFood=0;get busy(){return this.phase!=="stand"}clampX(t){return Ot(t,this.ground.range[0],this.ground.range[1])}frame(t,e){return(this.ground.at?.(t,e)??null)||(e.point.set(t,this.ground.root.position.y,this.ground.root.position.z),e.up.set(0,1,0),e.tangent.set(1,0,0),e.radius=this.ground.restRadius),e}reseat(){this.placed=!1}spotFor(t){if(!this.ground.at)return null;const e=this.ground.range[1]-this.ground.range[0];for(let n=.1;n<=e+1e-6;n+=.05)for(const s of[1,-1]){const r=this.x+s*n;if(r<this.ground.range[0]||r>this.ground.range[1])continue;const o=this.ground.at(r,this.tmp);if(o&&t(this.off.copy(o.point).sub(this.here.point)))return this.x+s*Math.min(n,this.maxHop)}return null}place(t,e){return this.x=this.clampX(t),this.frame(this.x,this.here),this.slope=Math.atan2(this.here.tangent.y,this.here.tangent.x),this.scale=this.here.radius/this.ground.restRadius,e.copy(this.here.point),this.x}landed(){this.legs.kick(-1.1),this.follow()}follow(){this.anchor.copy(this.ground.root.position)}go(t,e,n=vt(t.rng,.07,.11)){if(this.hold||this.phase!=="stand"||(e=this.clampX(Ot(e,this.x-this.maxHop,this.x+this.maxHop)),Math.abs(e-this.x)<.03))return!1;this.x0=this.x,this.x1=e,this.frame(this.x0,this.from),this.frame(this.x1,this.to);const s=this.from.point.distanceTo(this.to.point);return this.apex=Ot(.035+s*.13,.04,.08),this.phase="crouch",this.t0=t.t,this.dur=n,t.excite(.15),!0}update(t,e){const n=this.ground.root;this.placed||(this.placed=!0,this.x=this.clampX(n.position.x),this.frame(this.x,this.here),n.position.copy(this.here.point),this.anchor.copy(n.position),this.slope=Math.atan2(this.here.tangent.y,this.here.tangent.x),this.scale=this.here.radius/this.ground.restRadius);const s=t.t,r=Ot((s-this.t0)/this.dur,0,1);let o=1;switch(t.food.length&&(this.lastFood=s),this.phase==="stand"&&!this.hold&&this.homeAfter[1]>0&&!t.quiet&&!t.eating&&t.freeze<=0&&Math.abs(this.x-this.home)>.12&&s-this.lastFood>4&&s>this.homeAt&&(this.go(t,this.home+(this.x-this.home)*.3),this.homeAt=s+vt(t.rng,this.homeAfter[0],this.homeAfter[1])),this.phase){case"crouch":{const l=Math.sin(r*Math.PI*.5);e.bodyShift.y-=.022*l,e.bodyPitch+=.07*l,e.wing.L.lift+=.1*l,e.wing.R.lift+=.1*l,r>=1&&(t.emit("perch",{x:this.x0,push:.45,on:!1,side:0}),this.phase="air",this.t0=s,this.dur=Ot(.12+this.from.point.distanceTo(this.to.point)*.38,.12,.25));break}case"air":{n.position.copy(this.from.point).lerp(this.to.point,r),n.position.y+=4*this.apex*r*(1-r),this.slope=ct(Math.atan2(this.from.tangent.y,this.from.tangent.x),Math.atan2(this.to.tangent.y,this.to.tangent.x),r),this.scale=ct(this.from.radius,this.to.radius,r)/this.ground.restRadius;const l=Math.sin(Math.PI*r);o=1-it(0,.2,r)*(1-it(.75,1,r)),e.bodyShift.y+=.014*(1-r)-.012*l+.008*it(.7,1,r),e.bodyPitch+=.07*(1-r)-.04*l;const c=Math.sign(this.x1-this.x0);e.bodyRoll+=-c*.07*l,e.wing.L.lift+=.1+.3*l,e.wing.R.lift+=.1+.3*l,e.wing.L.droop+=.12*l,e.wing.R.droop+=.12*l,e.tailFan+=.5*l,e.tailPitch+=.12*l,e.fluff-=.05*l,r>=1&&(this.x=this.x1,this.frame(this.x,this.here),n.position.copy(this.here.point),this.phase="land",this.t0=s,this.dur=.28,this.legs.kick(-.75),t.emit("perch",{x:this.x1,push:.55,on:!0,side:0}));break}case"land":{const l=1-it(0,1,r);e.wing.L.lift+=.1*l,e.wing.R.lift+=.1*l,e.tailFan+=.3*l,e.tailPitch-=.1*Math.sin(Math.PI*r)*.8,e.addLift(.55,.3,.14*Math.sin(Math.PI*it(0,.8,r))),r>=1&&(this.phase="stand");break}}const a=this.legs.step(0,t.dt);e.bodyShift.y+=a,e.bodyPitch+=-a*1.6,this.anchor.x=Cn(this.anchor.x,n.position.x,this.phase==="air"?9:16,t.dt),this.anchor.y=Cn(this.anchor.y,n.position.y,this.phase==="air"?9:16,t.dt),this.anchor.z=Cn(this.anchor.z,n.position.z,16,t.dt),this.lag.copy(this.anchor).sub(n.position).clampLength(0,.16),e.headShift.add(this.lag),e.feetSlope=this.slope,e.feetScale=this.scale,e.grip=o,e.bodyRoll+=this.slope*.12}}function dS(i){const t=i.species.wing,e=t.hand+t.primaryLen[1]*.92,n=qi(i.species.seed+501),s=64,r=4,o=new Uint8Array(s*r*4);for(let u=0;u<s;u++){const d=.45+.55*Math.pow(n(),2.2)+(n()<.12?.6:0);for(let f=0;f<r;f++)o.set([255,Math.min(255,d*200),255,255],(f*s+u)*4)}const a=new _a(o,s,r);a.wrapS=os,a.magFilter=a.minFilter=Qe,a.needsUpdate=!0;const l=new Xn({color:new Ut(t.color).multiplyScalar(1.6),alphaMap:a,vertexColors:!0,transparent:!0,depthWrite:!1,side:ze,opacity:0}),c=[],h=i.rest.chest.worldPos;for(const u of nn){const d=Rn(u),f=[],g=[],v=[],p=[],m=28,M=6;for(const x of[-24,-8,8,24]){const A=f.length/3;for(let _=0;_<=m;_++){const T=_/m,N=(-98+172*T)*Ct;for(let C=0;C<=M;C++){const P=C/M,L=Math.tan(x*Ct)*P*e*(.6+.4*Math.cos((T-.5)*Math.PI*2));f.push(d*Math.cos(N)*P*e,L+.04*P,Math.sin(N)*P*e);const F=it(.05,.4,P)*(1-it(.8,1,P))*(.5+.9*Math.pow(Math.abs(T*2-1),2.5))*it(0,.06,T)*(1-it(.94,1,T));g.push(1,1,1,F*(Math.abs(x)<10?.5:.36)),v.push(T*2.2,P)}}for(let _=0;_<m;_++)for(let T=0;T<M;T++){const N=A+_*(M+1)+T,C=N+M+1;p.push(N,C,N+1,C,C+1,N+1)}}const w=new Me;w.setAttribute("position",new ie(f,3)),w.setAttribute("color",new ie(g,4)),w.setAttribute("uv",new ie(v,2)),w.setIndex(p);const b=new me(w,l);b.name=`bird.wingBlur.${u}`,b.frustumCulled=!1,b.visible=!1,b.renderOrder=2,b.position.copy(i.rest[`shoulder.${u}`].worldPos).sub(h),i.bones.chest.add(b),c.push(b)}return{set(u,d=.6){const f=u>.004;for(const g of c)g.visible=f,g.rotation.set(d+(Math.random()-.5)*.16,(Math.random()-.5)*.2,(Math.random()-.5)*.12);f&&(l.opacity=u*(.8+.45*Math.random()),a.offset.x=Math.random())},dispose(){for(const u of c)u.removeFromParent(),u.geometry.dispose();l.dispose(),a.dispose()}}}const Rs=2;class fS{constructor(t,e,n,s,r,o){this.mind=t,this.rig=e,this.root=n,this.hop=s,this.ruffle=r,this.tail=o,this.nextAt=vt(t.rng,this.every[0],this.every[1]),this.blur=dS(e)}mind;rig;root;hop;ruffle;tail;name="flee";awayFor=[2,5];every=[70,200];phase="idle";t0=0;dur=.4;side=1;from=new y;out=new y;hover=new y;landAt=new y;far=new y;landX=0;nextAt;blur;shakeAt=-1;get active(){return this.phase!=="idle"}get perched(){return this.phase==="idle"||this.phase==="ready"||this.phase==="land"}get gone(){return this.phase==="away"}start(){const t=this.mind;return this.active||this.hop.busy?!1:(this.hop.hold=!0,t.emit("startle",{strength:1}),t.arousal=1,t.freeze=0,this.phase="ready",this.t0=t.t,this.dur=vt(t.rng,.3,.48),this.side=t.rng()<.5?1:-1,this.nextAt=t.t+vt(t.rng,this.every[0],this.every[1]),!0)}go(t,e){this.phase=t,this.t0=this.mind.t,this.dur=e}update(t,e){if(this.phase==="idle"&&(!t.quiet&&t.t>=this.nextAt&&!t.eating&&t.freeze<=0&&this.start(),this.shakeAt>0&&t.t>=this.shakeAt&&(this.shakeAt=-1,this.ruffle.trigger(t,"shake",.7)),this.phase==="idle"))return;const n=this.root,s=Ot((t.t-this.t0)/this.dur,0,1);let r=0,o=0,a=.6;switch(t.gazeLock=this.phase!=="land",this.phase){case"ready":{const l=Math.sin(s*Math.PI*.5);e.bodyShift.y-=.04*l,e.bodyShift.z+=.02*l,e.bodyPitch+=.34*l,e.headShift.y-=.012*l,e.fluff-=.12*l,e.tailFan+=.35*l,e.tailPitch-=.12*l,r=.42*it(0,.8,s);const c=Math.sin(t.t*46*Math.PI)*.05*l;for(const h of["L","R"])e.wing[h].lift+=.25*l+c,e.wing[h].droop+=.08*l;s>=1&&(this.from.copy(n.position),this.out.set(this.side*.55,1,.12).normalize(),t.emit("perch",{x:this.from.x,push:1,on:!1,side:.4}),this.go("takeoff",.27));break}case"takeoff":{n.position.copy(this.from).addScaledVector(this.out,.35*s+7.5*s*s*s),r=Rs,o=it(0,.12,s),e.grip=1-it(0,.15,s),e.bodyShift.y+=.03*it(0,.3,s),e.bodyPitch+=ct(.34,.1,it(0,.6,s)),a=.95,e.bodyRoll+=-this.side*.25*s,e.tailFan+=.8,e.tailPitch-=.25,e.fluff-=.14,s>=1&&(n.visible=!1,this.go("away",vt(t.rng,this.awayFor[0],this.awayFor[1])));break}case"away":{r=Rs,s>=1&&(this.landX=this.hop.home+vt(t.rng,-.12,.12),this.landX=this.hop.place(this.landX,this.landAt),this.hover.copy(this.landAt),this.hover.y+=.2,this.far.copy(this.hover).add(new y(-this.side*vt(t.rng,3.2,4.4),vt(t.rng,1.8,3),vt(t.rng,-1.2,-.3))),n.position.copy(this.far),n.visible=!0,this.go("approach",vt(t.rng,.42,.55)));break}case"approach":{const l=1-Math.pow(1-s,3);n.position.copy(this.far).lerp(this.hover,l),r=Rs,o=1,e.grip=0,e.bodyPitch+=ct(.5,-.32,it(.35,1,s)),a=ct(.9,.35,it(.35,1,s)),e.bodyRoll+=this.side*.3*(1-l),e.tailFan+=ct(.3,1,it(.4,1,s)),e.tailPitch-=.3*it(.4,1,s),e.fluff-=.1,s>=1&&this.go("brake",vt(t.rng,.45,.62));break}case"brake":{const l=it(.6,1,s);a=.35,n.position.copy(this.hover).lerp(this.landAt,l),n.position.y+=.015*Math.sin(t.t*31)*(1-l),n.position.x+=.008*Math.sin(t.t*23)*(1-l),r=Rs,o=1,e.grip=it(.8,1,s)*.5,e.bodyPitch-=ct(.32,.05,l),e.bodyShift.y+=.02*(1-l),e.tailFan+=1,e.tailPitch-=ct(.3,.1,l),s>=1&&(n.position.copy(this.landAt),this.hop.landed(),t.emit("perch",{x:this.landAt.x,push:.85,on:!0,side:vt(t.rng,-1,1)}),this.tail.flick(t,1.2),this.go("land",.5));break}case"land":{n.position.copy(this.landAt),r=s<.12?Rs:1-it(.12,.75,s),o=1-it(0,.14,s),e.grip=.5+.5*it(0,.25,s),e.tailFan+=.8*(1-it(0,.8,s));for(const l of["L","R"])e.wing[l].lift+=.3*Math.sin(Math.PI*it(.5,1,s));s>=1&&(this.phase="idle",this.hop.hold=!1,t.gazeLock=!1,this.shakeAt=t.t+vt(t.rng,.25,.6),t.freeze=.3);break}}if(r===Rs&&o>.9&&Math.random()<.3){r=1,o*=.55;const l=Math.random()<.5;for(const c of["L","R"])e.wing[c].sweep=l?vt(Math.random,.7,1):-vt(Math.random,.9,1.25),e.wing[c].raise=(l?-.1:.45)+a*.4}e.wing.L.spread=e.wing.R.spread=r,this.blur.set(o,a),this.hop.follow()}dispose(){this.blur.dispose()}}const pS=[[.44,-.5],[.52,-.25],[.38,-.65]];class mS{constructor(t,e,n){this.billReach=n,this.nextAt=vt(t.rng,this.every[0]*.6,this.every[1]*.7);const s={p:new y,n:new y,t:new y};for(const r of["L","R"])for(const[o,a]of pS){const l=e.loft.wingAt(o,a,Rn(r));e.loft.surface(l.s,l.ang,s),this.spots[r].push(s.p.clone().addScaledVector(s.n,this.tipOff))}this.coord=e.loft.bodyCoord(3.4),this.hips=e.rest.hips.worldPos.clone(),this.headRest=e.rest.head.worldPos.clone(),t.on("startle",()=>{this.active&&(t.gazeLock=!1),this.active=!1})}billReach;name="preen";auto=!1;every=[22,55];blocked=()=>!1;onDone=null;active=!1;wingOut=.44;wingTwist=.42;billDir=new y(.12,-.86,-.5).normalize();billOut=new y(.3,-.92,.05).normalize();tipOff=.03;bodyYaw=.22;bodyRoll=.1;bodyPitch=.06;headRoll=1.2;t0=0;dur=4;side="L";nextAt;coord;hips;headRest;spots={L:[],R:[]};spot=new y;seed=0;tBreak=0;order=[0,1,2];q=new ve;e=new Yn;d=new y;a=new y;b=new y;start(t,e){return this.active||this.blocked()||t.eating?!1:(this.active=!0,this.t0=t.t,this.dur=vt(t.rng,4,5),this.side=e??(t.rng()<.5?"L":"R"),this.seed=t.rng()*100,this.tBreak=vt(t.rng,.42,.58),this.order=t.rng()<.5?[0,1,2]:[2,0,1],this.spot.copy(this.spots[this.side][this.order[0]]),this.nextAt=t.t+this.dur+vt(t.rng,this.every[0],this.every[1]),!0)}update(t,e){if(!this.active&&(this.auto&&!t.quiet&&t.t>=this.nextAt&&(t.arousal<.5&&t.freeze<=0&&!t.focus&&!t.saccading?this.start(t):this.nextAt=t.t+2),!this.active))return;const n=t.t-this.t0,s=this.dur;if(n>=s||this.blocked()){this.active=!1,t.gazeLock=!1,n>=s&&this.onDone?.(t);return}t.gazeLock=!0;const r=Rn(this.side),o=(E,D)=>it(E,D,n),a=s-1.3,l=o(0,.42)*(1-o(s-.6,s-.1)),c=o(.12,.7)*(1-o(s-.95,s-.25)),h=o(.22,.8)*(1-o(a+.2,a+.9)),u=o(.5,.95)*(1-o(a+.18,a+.65)),d=.95,f=ct(d+.3,a,this.tBreak);let g=o(d-.1,d+.22)*(1-o(a,a+.24));g*=1-.75*o(f-.16,f)*(1-o(f+.08,f+.3));const v=ct(f,a,.55),p=this.order[n<f?0:n<v?1:2];this.spot.lerp(this.spots[this.side][p],1-Math.exp(-t.dt*(n<f+.3?14:7)));const m=it(.8,1,g),M=n*9.5*Math.PI*2+this.seed,w=it(-.15,.35,Math.sin(n*5.1+this.seed)+.6*Math.sin(n*2.3+this.seed*1.7)),b=Math.sin(M)*m*w,x=Math.sin(M*.5+1.3)*m*w,A=r*this.bodyYaw*c,_=r*this.bodyRoll*c,T=this.bodyPitch*c;e.bodyYaw+=A,e.bodyRoll+=_,e.bodyPitch+=T,e.bodyShift.x+=r*.012*c,e.tailYaw+=-r*.14*c,e.tailFan+=.12*c,this.e.set(e.bodyPitch,e.bodyYaw,e.bodyRoll,"YXZ"),this.q.setFromEuler(this.e);const N=E=>E.sub(this.hips).applyQuaternion(this.q).add(this.hips).add(e.bodyShift),C=e.wing[this.side];C.out+=l*this.wingOut+b*.012+.03*m*Math.sin(n*3.1+this.seed),C.twist+=l*this.wingTwist+x*.015,C.lift+=l*.05,e.wing[this.side==="L"?"R":"L"].lift+=.05*c;const P=this.d.copy(this.billDir);P.x*=r;const L=this.a.copy(this.spot).addScaledVector(P,-this.billReach);this.b.copy(this.billOut),this.b.x*=r,P.lerp(this.b,1-g).normalize(),L.addScaledVector(P,this.billReach+b*.014),L.z+=x*.006,L.y+=x*.005,N(L),P.applyQuaternion(this.q),e.reachTarget.copy(L),e.reachDir.copy(P),e.reachPin=1,e.reachRoll=r*(this.headRoll+.05*x),e.reachWeight=u,e.headYaw=ct(e.headYaw,r*100*Ct+e.bodyYaw,h),e.headPitch=ct(e.headPitch,-52*Ct,h),e.headRoll=ct(e.headRoll,r*.15,h);const F=this.b.copy(this.spot).addScaledVector(this.d.copy(this.billDir).setX(this.billDir.x*r),-this.billReach);N(F).sub(this.headRest),e.headShift.addScaledVector(F,h*.8),e.headStabil=ct(e.headStabil,.3,h),e.jaw+=(.1+.16*(.5+.5*Math.sin(M+.6)))*m*w,e.nict+=.45*m,e.lidLower+=.3*m,e.lidUpper+=.15*m,e.addLift(this.coord,.09,m*(.08+.04*Math.abs(b))),e.fluff+=.04*c}}function gS(i={}){const t=i.species??hp,e=new cn;e.name="bird";const n=I1(t);e.add(n.rootBone);const s=Y1(n),{material:r,uniforms:o}=Z1();o.uRestCover.value=t.wing.broad?1:0;const a=new ni(s.contour,r);a.name="bird.contour";const l=new ni(s.flight,r);l.name="bird.flight";const c=new ni(s.fuzz,r);c.name="bird.fuzz",c.frustumCulled=!1,c.bind(n.skeleton,new $t),c.receiveShadow=!0;const h=$1(o);for(const G of[a,l])G.customDepthMaterial=h,G.castShadow=!0,G.frustumCulled=!1,G.bind(n.skeleton,new $t),G.receiveShadow=!0;const u=J1(n);e.add(a,l,c,...u.meshes);const d=new xp,f=Q1(n,o),g=new tS(t,i.seed??t.seed),v=new lS(g),p={root:e,at:null,range:[0,0],restRadius:t.legs.perchRadius},m=new uS(g,p),M=new cS(g,f,n.rest.head.worldPos.clone(),G=>Y.onPick?.(G),G=>Y.onSwallow?.(G),m),w=new hS(g),b=new oS(g),x=new aS(g),A=new fS(g,n,e,m,b,x),_=new Ls(g),T=t.behaviour.parrot===!0,N=new mS(g,n,f.billReach);w.blocked=()=>A.active||m.busy||N.active;const C=()=>w.blocked()||M.state!=="idle";N.blocked=()=>A.active||m.busy||g.eating||M.state!=="idle",N.onDone=G=>{_.shuffle(G),G.rng()<.5&&b.trigger(G,"puff",.35)};const P=[new eS(g),new nS,new sS(g),new rS(g),b,x,_,M,w,N,m,v,A];let L=[];const F=[],E=n.rest.head.worldPos.clone(),D=new y,U=new $t;let O=null;const Y={root:e,species:t,rig:n,pose:d,mind:g,layers:P,layer:G=>{const K=P.find(ot=>ot.name===G);if(!K)throw new Error(`no layer ${G}`);return K},plumage:o,feathers:{contour:a,flight:l,fuzz:c},headPosition:G=>n.bones.head.getWorldPosition(G),onPose:null,flee:()=>T?!1:A.start(),preen:G=>N.start(g,G),get preening(){return N.active},get fleeing(){return A.active},get away(){return A.gone},get perched(){return A.perched},sing:G=>!C()&&(w.sing(g,G),!0),stretch:()=>T&&!C()&&!A.active&&(_.stretch(g),!0),get singing(){return w.singing},lick:(G,K)=>!C()&&(w.lick(g,G,K),!0),hopTo:G=>!C()&&m.go(g,G),hopBy:G=>Y.hopTo(m.x+G),get busy(){return C()},ruffle:(G,K)=>b.trigger(g,G,K),update(G){e.updateWorldMatrix(!0,!1),U.copy(e.matrixWorld).invert(),g.attention=O?D.copy(O).applyMatrix4(U):null,g.food.length=0;for(let Q=0;Q<(A.active||N.active?0:L.length);Q++){const k=F[Q]??={id:0,pos:new y,vel:new y};k.id=L[Q].id,k.pos.copy(L[Q].position).applyMatrix4(U),k.vel.copy(L[Q].velocity).transformDirection(U).multiplyScalar(L[Q].velocity.length()),g.food.push(k)}g.step(G,E),d.reset();for(const Q of P)Q.update(g,d);Y.onPose?.(d,g),f(d);const K=T&&w.singing?1:tn.smoothstep(g.arousal,.55,.9),ot=u.eye.pupilRest+(u.eye.pupilPinned-u.eye.pupilRest)*K;u.eye.uPupil.value+=(ot-u.eye.uPupil.value)*(1-Math.exp(-12*G))},setAttention(G){O=G},setFood(G){L=G},setPerch(G,K){p.at=G,p.range=K,m.reseat()},onPick:null,onSwallow:null,billTip(G){return G.copy(f.carry).applyMatrix4(e.matrixWorld)},startle(G=1){A.active||(v.fire(Math.min(Math.max(G,0),1)),!T&&G>=.9&&!g.quiet&&g.rng()<.22&&A.start())},dispose(){s.contour.dispose(),s.flight.dispose(),s.fuzz.dispose(),r.dispose(),h.dispose(),A.dispose(),u.dispose(),n.skeleton.dispose(),H?.()}},H=_S(Y);return Y.update(0),Y}function _S(i){if(typeof window>"u")return null;const t=new URLSearchParams(window.location.search);window.__bird=i;const e=g=>t.has(g)?Number(t.get(g)):null,n={front:[0,22,0],profile:[88,16,0],up:[10,40,8],back:[-110,10,0],three:[38,20,-4]},s=t.get("pose");s&&n[s]&&(i.mind.pinGaze=n[s]);const r=t.get("gaze");if(r){const[g=0,v=0,p=0]=r.split(",").map(Number);i.mind.pinGaze=[g,v,p]}if(t.has("quiet")&&(i.mind.quiet=!0),t.has("sing")){const g=i.onPose;let v=1;i.onPose=(p,m)=>{g?.(p,m),m.t>v&&!i.singing&&i.sing(1.8)&&(v=m.t+4)}}const o=e("jaw"),a=e("tongue"),l=e("arousal"),c=e("fluff"),h=e("spread"),u=e("fan"),d=e("blink");if(l!==null||c!==null||h!==null||u!==null||d!==null||o!==null||a!==null){const g=i.onPose;i.onPose=(v,p)=>{g?.(v,p),o!==null&&(v.jaw=o),a!==null&&(v.tongueOut=a),l!==null&&(p.arousal=p.baseline=l),c!==null&&(v.fluff=c),h!==null&&(v.wing.L.spread=v.wing.R.spread=h),u!==null&&(v.tailFan=u),d!==null&&(v.nict=v.lidLower=v.lidUpper=d)}}t.has("nofuzz")&&i.root.traverse(g=>g.name==="bird.fuzz"&&(g.visible=!1)),t.has("noflash")&&(i.plumage.uFlash.value=i.plumage.uGlint.value=0),t.has("skin")&&i.root.traverse(g=>g.name.match(/contour|flight|fuzz/)&&(g.visible=!1)),t.has("wire")&&i.root.traverse(g=>{const v=g.material;g.name==="bird.skin"&&v&&(v.wireframe=!0,v.color.set(16777215),v.emissive.set(8947848))});let f=null;return t.has("bones")&&(f=new mg(i.rig.rootBone),f.material.depthTest=!1,f.renderOrder=10,i.root.add(f)),()=>{f?.dispose()}}const Dc=[{name:"Purple-throated mountain-gem",gorget:[0,1,1],crown:[0,1,1],body:[0,1,1],sheen:[0,1,1]},{name:"Ruby-throated",gorget:[102,1.3,.78],crown:[-45,.95,.9],body:[170,.55,1.05],sheen:[0,.08,1.9]},{name:"Anna's",gorget:[55,1.05,1.1],crown:[150,1.05,1.05],body:[175,.5,1.1],sheen:[150,.4,1]},{name:"Sapphire-throated",gorget:[-28,1.3,.6],crown:[105,1,1],body:[150,.75,1],sheen:[32,1.15,1]},{name:"Fiery-throated",gorget:[116,1.25,.82],crown:[55,1,.95],body:[185,.7,.95],sheen:[-92,1.2,1.15]}],yi=[.2126,.7152,.0722];function Uo([i,t,e],n=new jt){const s=tn.degToRad(i),r=Math.cos(s),o=Math.sin(s),a=1/3,l=Math.sqrt(a),c=new jt().set(r+a*(1-r),a*(1-r)-l*o,a*(1-r)+l*o,a*(1-r)+l*o,r+a*(1-r),a*(1-r)-l*o,a*(1-r)-l*o,a*(1-r)+l*o,r+a*(1-r)),h=1-t,u=new jt().set(yi[0]*h+t,yi[1]*h,yi[2]*h,yi[0]*h,yi[1]*h+t,yi[2]*h,yi[0]*h,yi[1]*h,yi[2]*h+t);return n.multiplyMatrices(u,c).multiplyScalar(e)}function yp(i){return[Uo(i.gorget),Uo(i.crown),Uo(i.body),Uo(i.sheen)]}const hr=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Sh=`
float lensCoc(float invZ, float focus, float aperture, float maxCoc) {
  // a real lens gets shallower up close; scale that back so a macro look at
  // the eye isn't a smear (blur grows with distance from focus, not 1/f^2)
  float k = focus / 3.3;
  return min(aperture * abs(1.0 / focus - invZ) * k, maxCoc);
}
`,vS=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tColor;
uniform sampler2D tDepth;
uniform float uNear, uFar;
uniform float uFocus;    // view-space distance in focus
uniform float uAperture; // CoC in px for 1/z difference of 1
uniform float uFarCoc;   // px for the sky sphere / cleared depth

void main() {
  float d = texture2D(tDepth, vUv).x;
  float invZ;
  if (d >= 0.99999) {
    // the sky: the 1/z, past infinity, whose blur circle is uFarCoc
    invZ = max(1.0 / uFocus - uFarCoc * 3.3 / (max(uAperture, 1e-3) * uFocus), -1e4);
  } else {
    // perspective depth → 1 / positive view distance
    float z = d * 2.0 - 1.0;
    invZ = (uFar + uNear - z * (uFar - uNear)) / (2.0 * uNear * uFar);
  }
  // NaNs go through as they are: the gather drops them
  gl_FragColor = vec4(texture2D(tColor, vUv).rgb, invZ);
}
`,xS=`
precision highp float;
uniform sampler2D tPack;
uniform int uTile; // device px
uniform float uFocus, uAperture, uMaxCoc;
${Sh}
void main() {
  ivec2 last = textureSize(tPack, 0) - 1;
  ivec2 base = ivec2(gl_FragCoord.xy) * uTile;
  // the CoC grows with |1/focus - 1/z|: the tile's two ends of 1/z are enough
  float lo = 1e9, hi = -1e9;
  for (int y = 0; y < uTile; y++) {
    for (int x = 0; x < uTile; x++) {
      float invZ = texelFetch(tPack, min(base + ivec2(x, y), last), 0).a;
      lo = min(lo, invZ);
      hi = max(hi, invZ);
    }
  }
  gl_FragColor = vec4(max(lensCoc(lo, uFocus, uAperture, uMaxCoc), lensCoc(hi, uFocus, uAperture, uMaxCoc)));
}
`,yS=`
precision highp float;
uniform sampler2D tTile;
void main() {
  ivec2 last = textureSize(tTile, 0) - 1;
  ivec2 p = ivec2(gl_FragCoord.xy);
  float m = 0.0;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) m = max(m, texelFetch(tTile, clamp(p + ivec2(x, y), ivec2(0), last), 0).r);
  }
  gl_FragColor = vec4(m);
}
`,Mp=`
uniform sampler2D tPack; // rgb colour, a = 1 / view distance
uniform sampler2D tTile; // biggest CoC near here
uniform int uTile;
uniform vec2 uTexel;     // dpr / size: CoC numbers are in CSS px
uniform vec2 uSpiral[TAPS]; // (cos, sin) of i * golden angle
uniform float uFocus;
uniform float uAperture;
uniform float uMaxCoc;   // px
${Sh}
const int MIN_TAPS = 8;
const float FULL = 48.0; // the look was set with 48 taps: fewer each weigh more

// p0: the pack's texel at uv, c0: its CoC, seed: a pixel's own two numbers
vec3 gather(vec2 uv, vec4 p0, float c0, vec2 seed) {
  vec3 acc = p0.rgb;
  if (any(isnan(acc)) || any(isinf(acc))) acc = vec3(0.0);
  float wsum = 1.0;
  // the full reach: big enough to catch blurry foreground spilling over a sharp pixel
  float R0 = max(c0, uMaxCoc * 0.5);
  // nothing near blurs further than the tile says (+1: the weight's soft edge),
  // so look no further, with as many taps as keeps them as dense as on the full
  // disc. Even in focus a few stay: the full disc's innermost taps soften the
  // picture a little, and it should look the same.
  float R = min(R0, texelFetch(tTile, ivec2(uv * vec2(textureSize(tPack, 0))) / uTile, 0).r + 1.0);
  float area = (R * R) / (R0 * R0);
  int taps = clamp(int(ceil(float(TAPS) * area)), MIN_TAPS, TAPS);
  float dense = FULL * area / float(taps);
  // rotate the spiral per pixel so a hot speck blurs to a soft disc, not a ring of dots
  float rot = fract(sin(dot(seed, vec2(12.9898, 78.233))) * 43758.5453) * 6.2831853;
  mat2 spin = mat2(cos(rot), sin(rot), -sin(rot), cos(rot));
  float jr = fract(sin(dot(seed, vec2(39.3468, 11.135))) * 24634.6345);
  for (int i = 1; i < taps; i++) {
    float fi = float(i);
    float r = sqrt((fi - jr) / float(taps)) * R;
    vec4 p = texture2D(tPack, uv + spin * uSpiral[i] * r * uTexel);
    float ci = lensCoc(p.a, uFocus, uAperture, uMaxCoc);
    // a tap behind us can't blur over us further than our own blur
    if (p.a * 1.02 < p0.a) ci = min(ci, c0);
    float w = smoothstep(r - 1.0, r + 1.0, ci) * dense;
    vec3 s = p.rgb;
    // one NaN pixel would smear into a dotted disc: drop it
    if (any(isnan(s)) || any(isinf(s))) continue;
    s = min(s, vec3(32.0));
    // out-of-focus highlights bloom into discs a little
    w *= 1.0 + 0.25 * smoothstep(0.6, 1.6, dot(s, vec3(0.333)));
    acc += s * w;
    wsum += w;
  }
  return acc / wsum;
}
`,MS=`
precision highp float;
${Mp}
void main() {
  vec2 size = vec2(textureSize(tPack, 0));
  vec2 uv = (min(floor(gl_FragCoord.xy) * 2.0 + 1.0, size - 1.0) + 0.5) / size;
  vec4 p0 = texture2D(tPack, uv);
  float c0 = lensCoc(p0.a, uFocus, uAperture, uMaxCoc);
  gl_FragColor = vec4(gather(uv, p0, c0, gl_FragCoord.xy), c0);
}
`,SS=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tColor;
uniform sampler2D tDof;  // half size: blurred colour, a = the CoC it was blurred by
uniform float uDof;      // 0 with the lens shut
${Mp}
uniform float uExposure;
uniform vec3 uWhite;     // white balance multiplier (linear)
uniform vec3 uLift;      // display space
uniform vec3 uGamma;
uniform vec3 uGain;
uniform float uSat;
uniform float uContrast;
uniform float uVignette;
uniform float uGrain;
uniform float uTime;
uniform vec2 uRes;
uniform sampler2D tWire;  // the loading drawing: ink where alpha
uniform float uReveal;   // 0 = the drawing on millimetre paper, 1 = the picture
uniform float uDpr;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

// Half size blur is fine where the picture is blurry anyway. Near focus (the
// bird, its feathers) the gather runs here, at full size, as it always did.
const float NEAR = 2.0; // CoC px: below, all full size
const float FAR = 4.0;  // above, all half size
vec3 lens() {
  vec4 p0 = texture2D(tPack, vUv);
  float c0 = lensCoc(p0.a, uFocus, uAperture, uMaxCoc);
  vec3 sharp = vec3(0.0);
  if (c0 < FAR) {
    sharp = gather(vUv, p0, c0, gl_FragCoord.xy);
    if (c0 <= NEAR) return sharp;
  }
  // the four half size texels around, each by how close its sharpness is to
  // ours: a blurry background doesn't take the bird's crisp edge in
  ivec2 last = textureSize(tDof, 0) - 1;
  vec2 q = gl_FragCoord.xy * 0.5 - 0.75; // a texel stands for the odd pixel of its four
  ivec2 i = ivec2(floor(q));
  vec2 f = q - floor(q);
  vec4 soft = vec4(0.0);
  for (int k = 0; k < 4; k++) {
    ivec2 o = ivec2(k & 1, k >> 1);
    vec4 t = texelFetch(tDof, clamp(i + o, ivec2(0), last), 0);
    float d = min(t.a, FAR) - min(c0, FAR); // past FAR blurry is blurry: plain bilinear
    vec2 b = mix(1.0 - f, f, vec2(o));
    soft += vec4(t.rgb, 1.0) * (b.x * b.y + 0.01) / (0.25 + d * d);
  }
  return mix(sharp, soft.rgb / soft.a, smoothstep(NEAR, FAR, c0));
}

void main() {
  vec3 c;
  if (uDof > 0.0) {
    c = lens();
  } else {
    c = texture2D(tColor, vUv).rgb;
    // the gather drops NaNs; with the lens shut this is the first to see them
    if (any(isnan(c)) || any(isinf(c))) c = vec3(0.0);
  }
  c *= uExposure * uWhite;
  // three only defines toneMapping() when the renderer has one: "None" leaves the colour as it is
  #ifdef TONE_MAPPING
  c = toneMapping(c);
  #endif
  c = linearToOutputTexel(vec4(c, 1.0)).rgb;
  // lift / gamma / gain in display space
  c = uGain * (c + uLift * (1.0 - c));
  c = pow(max(c, 0.0), 1.0 / uGamma);
  // soft contrast around mid grey
  c = mix(vec3(0.5), c, uContrast);
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = mix(vec3(l), c, uSat);
  // vignette
  vec2 q = vUv - 0.5;
  q.x *= uRes.x / uRes.y;
  c *= 1.0 - uVignette * smoothstep(0.35, 1.05, length(q));
  // grain, luminance-weighted, a touch stronger in the mids
  float g = hash(vUv * uRes + fract(uTime) * 91.7) - 0.5;
  c += g * uGrain * (0.4 + 0.6 * (1.0 - abs(l - 0.5) * 2.0));
  c = clamp(c, 0.0, 1.0);
  if (uReveal < 1.0) {
    // millimetre paper, in CSS px from the top left so it lines up with the page's own
    vec2 px = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y) / uDpr;
    float line = 0.0;
    vec3 lines = vec3(1.0 / 5.0, 1.0 / 25.0, 1.0 / 50.0);
    vec3 alpha = vec3(0.12, 0.22, 0.35);
    for (int i = 0; i < 3; i++) {
      vec2 f = fract(px * lines[i]);
      float on = max(step(f.x, lines[i] * 1.0), step(f.y, lines[i] * 1.0));
      line = max(line, on * alpha[i]);
    }
    vec3 paper = mix(vec3(0.945, 0.941, 0.910), vec3(0.435, 0.561, 0.416), line);
    float ink = texture2D(tWire, vUv).a;
    paper = mix(paper, vec3(0.17, 0.23, 0.17), ink * 0.85);
    c = mix(paper, c, uReveal);
  }
  gl_FragColor = vec4(c, 1.0);
}
`,bS=8,Tl=Yi?24:48;function wS(i,t){const e=new ls(1,1);e.type=qn;const n=new ln(1,1,{type:yn,samples:t.samples,depthTexture:e,depthBuffer:!0});n.texture.colorSpace=Mn;const s=new ln(1,1,{type:yn,depthBuffer:!1}),r={type:yn,depthBuffer:!1,minFilter:Fe,magFilter:Fe},o=new ln(1,1,r),a=new ln(1,1,r),l=new ln(1,1,{type:yn,depthBuffer:!1,minFilter:Fe,magFilter:Fe}),c=new ln(1,1,{samples:t.samples}),h=new Ut,u=new me(new us(2,2));u.frustumCulled=!1;const d=new ah;d.add(u);const f=new Ma(-1,1,1,-1,0,1),g={uFocus:{value:3.3},uAperture:{value:85},uMaxCoc:{value:14}},v=new xn({vertexShader:hr,fragmentShader:vS,uniforms:{tColor:{value:n.texture},tDepth:{value:e},uNear:{value:.1},uFar:{value:100},uFarCoc:{value:6},uFocus:g.uFocus,uAperture:g.uAperture},depthTest:!1,depthWrite:!1,toneMapped:!1}),p={value:16},m=new xn({vertexShader:hr,fragmentShader:xS,uniforms:{tPack:{value:s.texture},uTile:p,...g},depthTest:!1,depthWrite:!1,toneMapped:!1}),M=new xn({vertexShader:hr,fragmentShader:yS,uniforms:{tTile:{value:o.texture}},depthTest:!1,depthWrite:!1,toneMapped:!1}),w={tPack:{value:s.texture},tTile:{value:a.texture},uTile:p,uTexel:{value:new kt},uSpiral:{value:Array.from({length:Tl},(P,L)=>new kt(Math.cos(L*2.39996323),Math.sin(L*2.39996323)))},...g},b=new xn({vertexShader:hr,fragmentShader:MS,uniforms:w,defines:{TAPS:Tl},depthTest:!1,depthWrite:!1,toneMapped:!1}),x=new xn({vertexShader:hr,fragmentShader:SS,uniforms:{tColor:{value:n.texture},tDof:{value:l.texture},uDof:{value:1},...w,uExposure:{value:1},uWhite:{value:new y(1,1,1)},uLift:{value:new y(0,0,0)},uGamma:{value:new y(1,1,1)},uGain:{value:new y(1,1,1)},uSat:{value:1},uContrast:{value:1},uVignette:{value:.2},uGrain:{value:.025},uTime:{value:0},uRes:{value:new kt(1,1)},tWire:{value:c.texture},uReveal:{value:1},uDpr:{value:1}},depthTest:!1,depthWrite:!1,defines:{TAPS:Tl},toneMapped:!0}),A=[[v,s],[m,o],[M,a],[b,l]];function _(P,L){if(i.setRenderTarget(n),i.render(P,L),x.uniforms.uDof.value=g.uAperture.value>0?1:0,!!x.uniforms.uDof.value)for(const[F,E]of A)u.material=F,i.setRenderTarget(E),i.render(d,f)}const T=new y(0,.9,0),N=new y;let C=3.3;return{dof:b.uniforms,grade:x.uniforms,endDrawing(){c.dispose(),x.uniforms.tWire.value=null},compile(P){const L=i.getRenderTarget();i.setRenderTarget(n);const F=P();for(const[E,D]of A)i.setRenderTarget(D),u.material=E,F.push(i.compileAsync(u,f,d));return u.material=x,i.setRenderTarget(L),Promise.all(F)},prerender(P,L){const F=i.getRenderTarget();_(P,L),u.material=x,i.setRenderTarget(F)},setToneMapping(P){i.toneMapping=P,x.needsUpdate=!0},focusOn(P){T.copy(P)},setSize(P,L,F){const E=Math.floor(P*F),D=Math.floor(L*F);n.setSize(E,D),s.setSize(E,D),p.value=Math.ceil(bS*F),o.setSize(Math.ceil(E/p.value),Math.ceil(D/p.value)),a.setSize(o.width,o.height),l.setSize(Math.ceil(E/2),Math.ceil(D/2)),c.setSize(E,D),x.uniforms.uDpr.value=F,w.uTexel.value.set(F/E,F/D),x.uniforms.uRes.value.set(E,D)},render(P,L,F,E){if(E){x.uniforms.tWire.value=c.texture,i.getClearColor(h);const D=i.getClearAlpha();i.setRenderTarget(c),i.setClearColor(0,0),i.clear(),E(),i.setClearColor(h,D)}N.copy(T).applyMatrix4(L.matrixWorldInverse),C+=(-N.z-C)*.15,g.uFocus.value=Math.max(C,.1),v.uniforms.uNear.value=L.near,v.uniforms.uFar.value=L.far,x.uniforms.uTime.value=F,x.uniforms.uDof.value=0,x.uniforms.uReveal.value>0&&_(P,L),u.material=x,i.setRenderTarget(null),i.render(d,f)}}}const TS=6,ES=.038,Ad=44;function AS(){const i=[];for(let s=0;s<6;s++){const r=s/6*Math.PI*2;i.push(0,.02,0,Math.cos(r)*.009,.017,Math.sin(r)*.009)}const t=new Me;t.setAttribute("position",new ie(i,3));const e=new Xr(.0022,.0028,.016,6);e.translate(0,.027,0);const n=new ci(1,16,12);return n.scale(.02,.021,.02),{fibres:t,beak:e,body:n}}function RS(){const i=[],t=new y(0,.03,0);for(let r=0;r<Ad;r++){const o=r/Ad*Math.PI*2+Math.sin(r*12.7)*.05,a=.35+.12*Math.sin(r*3.1),l=ES*(.9+.15*Math.sin(r*7.3)),c=new y(Math.cos(o)*l,t.y+l*a,Math.sin(o)*l);i.push(t.x,t.y,t.z,c.x,c.y,c.z);for(const h of[.6,.78,.92]){const u=t.clone().lerp(c,h),d=new y(-Math.sin(o),.3,Math.cos(o)).multiplyScalar(l*.07);i.push(u.x,u.y,u.z,u.x+d.x,u.y+d.y,u.z+d.z),i.push(u.x,u.y,u.z,u.x-d.x,u.y+d.y,u.z-d.z)}}const e=new Me;e.setAttribute("position",new ie(i,3));const n=new Xr(8e-4,.0011,.03,5);n.translate(0,.015,0);const s=new ci(1,10,8);return s.scale(.0035,.01,.0035),s.translate(0,-.007,0),{fibres:e,beak:n,body:s}}function CS(i,t="pappus"){const e=t==="fruit",n=e?AS():RS(),s=new xa({color:e?6969914:15921382,transparent:!0,opacity:e?.9:.75,depthWrite:!1}),r=new mn({color:e?5917226:13617332,roughness:.7}),o=new mn({color:e?1839906:3811868,roughness:e?.42:.8}),a=[],l=new y,c=[],h=new y,u=new y,d=new y(0,1,0),f=new ve;let g=1;function v(m,M=null){if(a.filter(x=>x.state==="drift").length>=TS){const x=a.find(A=>A.state==="drift");x&&p(x)}const w=new cn,b=new ha(n.fibres,s);w.add(b,new me(n.beak,r),new me(n.body,o)),w.position.copy(m),w.rotation.set((Math.random()-.5)*.4,Math.random()*6.28,(Math.random()-.5)*.4),w.scale.setScalar(.01),i.add(w),a.push({id:g++,obj:w,fibres:b,position:w.position,velocity:new y,age:0,spin:(Math.random()-.5)*.8,phase:Math.random()*100,state:"drift",carryT:0,swallowAt:-1,wind:M})}function p(m){m.state="gone",i.remove(m.obj)}return{spawn:v,warm:[new ha(n.fibres,s),new me(n.beak,r),new me(n.body,o)],pick(m){const M=a.find(w=>w.id===m&&w.state==="drift");M&&(M.state="carried",M.carryT=0,M.swallowAt=-1)},swallowed(m){const M=a.find(w=>w.id===m&&w.state==="carried");M&&M.swallowAt<0&&(M.swallowAt=M.carryT)},food(){c.length=0;for(const m of a)m.state==="drift"&&c.push(m);return c},update(m,M,w,b){for(const x of a)if(x.state!=="gone"){if(x.age+=m,x.state==="drift"){const A=M*.6+x.phase,_=l.set(Math.sin(A*.9)*.05+Math.sin(A*2.3)*.02,Math.sin(A*1.7)*.02-.035,Math.cos(A*.7)*.03);x.wind&&_.add(x.wind),x.velocity.lerp(_,1-Math.exp(-m*1.5)),x.obj.position.addScaledVector(x.velocity,m),x.obj.rotation.y+=x.spin*m,x.obj.rotation.x=Math.sin(A*1.3)*.12,x.obj.rotation.z=Math.cos(A*1.1)*.12,x.obj.scale.setScalar(Math.min(1,x.obj.scale.x+m*4)),(x.obj.position.y<-1.4||x.age>(x.wind?90:45)||Math.abs(x.obj.position.x)>3.2)&&p(x)}else if(x.state==="carried"){x.carryT+=m,w&&x.obj.position.copy(w(h)),b&&(u.copy(b).sub(x.obj.position).normalize(),x.obj.quaternion.slerp(f.setFromUnitVectors(d,u),1-Math.exp(-m*30)));const A=Math.min(1,x.carryT/.07),_=Math.max(.2,1-x.carryT*1.6);x.fibres.scale.set(1-.85*A,1+.6*A,1-.85*A),x.obj.scale.setScalar(_),x.swallowAt>=0&&(x.obj.scale.setScalar(Math.max(0,.2*(1-(x.carryT-x.swallowAt)*10))),x.carryT-x.swallowAt>.1&&p(x)),(x.carryT>3||!w)&&p(x)}}for(let x=a.length-1;x>=0;x--)a[x].state==="gone"&&a.splice(x,1)}}}const Rd=1e6;function PS(i,t,e=!0){const n=new ci(1,8,6);n.scale(.004,.004,.011);const s=new us(.016,.007);s.translate(.008,0,0);const r=new mn({color:1709586,roughness:.6}),o=new Xn({color:14542044,transparent:!0,opacity:.2,side:ze,depthWrite:!1}),a=[],l=[],c=new y,h=new y,u=new y;let d=Rd,f=10+Math.random()*3,g=!1;function v(m,M=!1){const w=t(),b=m?m.clone():w.clone().add(new y((Math.random()-.5)*.9,.05+Math.random()*.3,.45+Math.random()*.35)),x=b.clone().add(new y(Math.sign(Math.random()-.5)*2.2,.6,-.4)),A=new cn,_=new me(n,r),T=[new me(s,o),new me(s,o)];T[1].rotation.y=Math.PI,A.add(_,...T),A.position.copy(x),i.add(A),a.push({id:d++,obj:A,wings:T,position:A.position,velocity:new y,home:b,goal:b.clone(),age:0,life:M?16:6+Math.random()*8,dartAt:.8,phase:Math.random()*100,state:"fly",carryT:0,swallowAt:-1,dodgedUntil:0,tame:M,yaw:0})}function p(m){m.state="gone",i.remove(m.obj)}return{spawn:v,warm:[new me(n,r),new me(s,o)],owns:m=>m>=Rd,strike(){g=!0},pick(m){const M=a.find(w=>w.id===m&&(w.state==="fly"||w.state==="leave"));M&&(M.state="carried",M.carryT=0)},swallowed(m){const M=a.find(w=>w.id===m&&w.state==="carried");M&&M.swallowAt<0&&(M.swallowAt=M.carryT)},food(){l.length=0;for(const m of a)m.state==="fly"&&m.age>m.dodgedUntil&&l.push(m);return l},update(m,M,w){const b=g;g=!1,e&&M>f&&a.length===0&&(v(),f=M+20+Math.random()*20);for(const x of a){if(x.state==="gone")continue;if(x.age+=m,x.state==="carried"){x.carryT+=m,w&&x.obj.position.copy(w(c));for(const N of x.wings)N.visible=!1;const T=x.swallowAt>=0?Math.max(0,1-(x.carryT-x.swallowAt)*10):1;x.obj.scale.setScalar(T),(x.swallowAt>=0&&T<=0||x.carryT>3||!w)&&p(x);continue}if(x.state==="fly"){if(x.age>x.life)x.state="leave",x.goal.copy(x.position).add(new y(Math.sign(x.position.x-x.home.x||1)*3,1.2,-.5));else if(x.age>x.dartAt){const T=x.tame?.15:1;x.goal.copy(x.home).add(new y((Math.random()-.5)*.4*T,(Math.random()-.5)*.25*T,(Math.random()-.5)*.3*T)),x.dartAt=x.age+.6+Math.random()*1.8}}x.state==="fly"&&!x.tame&&x.age>x.dodgedUntil&&b&&w&&w(c).distanceTo(x.position)<.7&&Math.random()<.75&&(x.dodgedUntil=x.age+1.5,h.copy(x.position).sub(c).normalize(),x.velocity.addScaledVector(h,2.2),x.goal.copy(x.position).addScaledVector(h,.45),x.dartAt=x.age+.8);const A=M*3+x.phase;if(h.set(Math.sin(A*5.1)+Math.sin(A*11.7)*.5,Math.sin(A*6.3+1)+Math.sin(A*13.1)*.4,Math.sin(A*4.7+2)).multiplyScalar(.08),h.addScaledVector(u.copy(x.goal).sub(x.position),x.state==="leave"?2.5:6),x.velocity.lerp(h,1-Math.exp(-m*8)),x.obj.position.addScaledVector(x.velocity,m),x.velocity.x*x.velocity.x+x.velocity.z*x.velocity.z>.01){const T=Math.atan2(x.velocity.x,x.velocity.z);x.yaw=rp(x.yaw,T,4,m)}x.obj.rotation.set(tn.clamp(-x.velocity.y*.6,-.35,.35),x.yaw,0,"YXZ");const _=Math.sin(M*190+x.phase)*.9;x.wings[0].rotation.z=_,x.wings[1].rotation.z=-_,x.state==="leave"&&x.position.distanceTo(x.home)>2.5&&p(x)}for(let x=a.length-1;x>=0;x--)a[x].state==="gone"&&a.splice(x,1)}}}const ti=40,Cd=17;function LS(){const i=document.createElement("canvas");i.width=64,i.height=96;const t=i.getContext("2d");t.strokeStyle="#fff",t.lineCap="round";let e=7;const n=()=>(e=e*16807%2147483647)/2147483647,s=32;t.globalAlpha=.9,t.lineWidth=1.6,t.beginPath(),t.moveTo(s,92),t.quadraticCurveTo(s+2,50,s-1,14),t.stroke();for(let o=0;o<70;o++){const a=n(),l=90-a*76,c=s+(1-a)*1.5,h=n()<.5?-1:1,u=(10+n()*16)*(.55+.8*Math.sin(Math.PI*(.15+a*.8))),d=h*(.5+n()*.7);t.globalAlpha=.25+n()*.45,t.lineWidth=.7+n()*.7,t.beginPath(),t.moveTo(c,l),t.quadraticCurveTo(c+Math.sin(d)*u*.5,l-Math.cos(d)*u*.3,c+Math.sin(d)*u,l-Math.cos(d)*u*(.4+n()*.5)+(n()-.5)*6),t.stroke()}const r=new Tm(i);return r.colorSpace=Xe,r}function IS(i){const{scene:t,camera:e,renderer:n,center:s}=i,r=new cn;r.name="ambient",t.add(r);const o=new Float32Array(ti*3),a=new Float32Array(ti),l=new Float32Array(ti),c=[],h=new Float32Array(ti),u=new Float32Array(ti).fill(-1),d=new Float32Array(ti);for(let Q=0;Q<ti;Q++)l[Q]=Math.random(),c.push(new y);const f=new Me;f.setAttribute("position",new Pe(o,3).setUsage(Jh)),f.setAttribute("aSize",new Pe(a,1).setUsage(Jh)),f.setAttribute("aSeed",new Pe(l,1));const g=new xn({uniforms:{uScale:{value:500},uMinPx:{value:1.2},uTime:{value:0},uFocus:{value:3.3},uAperture:{value:0},uMaxCoc:{value:14},uDpr:{value:1}},vertexShader:`
      attribute float aSize;
      attribute float aSeed;
      uniform float uScale, uMinPx, uTime, uFocus, uAperture, uMaxCoc, uDpr;
      varying float vGlint, vCov;
      ${Sh}
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        float z = -mv.z;
        float px = aSize * uScale / z;
        // the lens's blur circle here, as post works it out (CSS px radius)
        float coc = lensCoc(1.0 / z, uFocus, uAperture, uMaxCoc) * uDpr;
        float sharp = max(px, uMinPx);
        float d = max(sharp, coc * 1.6);
        // the same light spread over a bigger disc, kept from vanishing entirely
        vCov = clamp(px / uMinPx, 0.0, 1.0) * clamp(pow(sharp / d, 2.0) * 1.2, 0.07, 1.0);
        gl_PointSize = aSize > 0.0 ? d : 0.0;
        // a flake turning in the light: mostly dull, now and then it catches
        float k = uTime * (0.6 + aSeed * 1.4) + aSeed * 40.0;
        vGlint = 0.35 + 0.65 * pow(0.5 + 0.5 * sin(k) * sin(k * 2.3 + 1.0), 3.0);
      }`,fragmentShader:`
      varying float vGlint, vCov;
      void main() {
        float r = length(gl_PointCoord - 0.5) * 2.0;
        if (r > 1.0) discard;
        float a = (1.0 - smoothstep(0.4, 1.0, r)) * vCov;
        gl_FragColor = vec4(vec3(1.0, 0.97, 0.9) * vGlint * a * 0.9, 1.0);
      }`,blending:kl,transparent:!0}),v=new Uf(f,g);v.frustumCulled=!1,r.add(v);function p(Q,k,Z,q){k?o.set([k.x,k.y,k.z],Q*3):(o[Q*3]=s.x+(Math.random()-.5)*3.6,o[Q*3+1]=s.y+(Math.random()-.45)*2,o[Q*3+2]=s.z-1.7+Math.random()*3.1),c[Q].copy(Z??new y),h[Q]=0,u[Q]=q,d[Q]=Math.random()<.85?.0025+Math.random()*.003:.006+Math.random()*.005}const m=()=>{for(let Q=0;Q<ti;Q++)if(u[Q]<0)return Q;return-1},M=new us(.04,.06);M.translate(0,.012,0);const w=new mn({color:12893896,map:LS(),roughness:1,side:ze,alphaToCoverage:!0,alphaTest:.04}),b=[],x=new cn,A=new me(new ci(1,8,6).scale(.008,.0075,.02),new mn({color:1380879,roughness:.45})),_=new dh(.014,10).scale(1,.55,1).translate(.014,0,0),T=new Xn({color:14673632,transparent:!0,opacity:.22,side:ze,depthWrite:!1}),N=[new me(_,T),new me(_,T)];for(const Q of N)Q.rotation.order="ZXY",Q.rotation.x=-Math.PI/2,Q.position.y=.004;N[1].scale.x=-1,x.add(A,...N),x.visible=!1,r.add(x);let C=null,P=0,L=2,F=25+Math.random()*40;const E=new y;let D=0;function U(Q=!1){const k=Math.random()<.5?-1:1,Z=Math.random(),q=Q?.25+Math.random()*.2:Z<.4?-.7+Math.random()*.5:Z<.8?-.15+Math.random()*.55:.8+Math.random()*.6,st=Q?s.y+.45:s.y+(Math.random()-.4)*1,W=[],j=6;for(let ft=0;ft<j;ft++){const dt=ft/(j-1);W.push(new y(s.x+k*(-2.6+5.2*dt),st+(Math.random()-.5)*.35+Math.sin(dt*5)*.08,q+(Math.random()-.5)*.4))}C=new Tc(W),D=Math.atan2(W[1].x-W[0].x,W[1].z-W[0].z),P=0,L=2.2+Math.random()*1.4,x.visible=!0,x.position.copy(W[0]),E.copy(W[0])}let O=15+Math.random()*25;function Y(){if(!i.passSeed)return;const Q=Math.random()<.5?-1:1,k=new y(s.x-Q*2.3,s.y+.5+Math.random()*.7,s.z-1.3+Math.random()*2.4);i.passSeed(k,new y(Q*(.07+Math.random()*.05),.012,(Math.random()-.5)*.02))}const H=new y,G=new kt,K=new y;let ot=0;for(let Q=0;Q<Cd;Q++)p(Q,null,null,8+Math.random()*18),h[Q]=Math.random()*u[Q];return{group:r,warm:[new me(M,w)],shed(Q,k,Z){const q=2+Math.floor(Math.random()*2);for(let W=0;W<q;W++){const j=m();if(j<0)break;K.copy(k).multiplyScalar(.06+Math.random()*.08),K.x+=(Math.random()-.5)*.08,K.y+=.02+Math.random()*.06,K.z+=(Math.random()-.5)*.08,p(j,new y(Q.x+(Math.random()-.5)*.08,Q.y+(Math.random()-.5)*.12,Q.z+(Math.random()-.5)*.08),K,4+Math.random()*5),d[j]*=.8}if(!Z)return;const st=new me(M,w);st.position.copy(Q),st.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),st.scale.setScalar(.01),r.add(st),b.push({obj:st,vel:k.clone().multiplyScalar(.3).add(new y(0,.1,0)),away:k.clone().multiplyScalar(.06),age:0,life:16+Math.random()*10,fall:.045+Math.random()*.03,phase:Math.random()*100,spin:(Math.random()-.5)*1.5})},flyBy:U,flyNear(Q,k){return x.visible&&x.position.distanceTo(Q)<k?x.position:null},update(Q){ot+=Q,g.uniforms.uTime.value=ot,n.getDrawingBufferSize(G),g.uniforms.uScale.value=G.y/(2*Math.tan(tn.degToRad(e.fov)/2)),g.uniforms.uMinPx.value=1.3*n.getPixelRatio(),g.uniforms.uDpr.value=n.getPixelRatio();const k=i.dof?.();k&&(g.uniforms.uFocus.value=k.uFocus.value,g.uniforms.uAperture.value=k.uAperture.value,g.uniforms.uMaxCoc.value=k.uMaxCoc.value),H.set(Math.sin(ot*.07)*.025+Math.sin(ot*.19+1)*.01,Math.sin(ot*.11)*.006,Math.cos(ot*.05)*.015);let Z=0;for(let q=0;q<ti;q++)u[q]>=0&&Z++;for(let q=0;q<ti;q++){if(u[q]<0){a[q]=0,Z<Cd&&Math.random()<Q*2&&(p(q,null,null,10+Math.random()*18),Z++);continue}if(h[q]+=Q,h[q]>u[q]){u[q]=-1,a[q]=0;continue}const st=l[q]*50,W=ot*.4+st;K.set(Math.sin(W*1.3)*.012,Math.sin(W*.9+2)*.008-.004,Math.cos(W*1.1)*.01).add(H),c[q].lerp(K,1-Math.exp(-Q*.8)),o[q*3]+=c[q].x*Q,o[q*3+1]+=c[q].y*Q,o[q*3+2]+=c[q].z*Q;const j=h[q]/u[q];a[q]=d[q]*Math.min(1,j*6,(1-j)*6)}f.attributes.position.needsUpdate=!0,f.attributes.aSize.needsUpdate=!0;for(const q of b){q.age+=Q;const st=ot+q.phase;K.set(Math.sin(st*1.4)*.05,-q.fall+Math.sin(st*2.8)*.012,Math.cos(st*1.1)*.03).add(H).addScaledVector(q.away,Math.exp(-q.age*.25)),q.vel.lerp(K,1-Math.exp(-Q*1.2)),q.obj.position.addScaledVector(q.vel,Q),q.obj.rotation.y+=q.spin*Q,q.obj.rotation.z=Math.sin(st*1.4)*.6,q.obj.rotation.x=.3+Math.cos(st*1.1)*.35,q.obj.scale.setScalar(Math.max(0,Math.min(1,q.age*3,(q.life-q.age)*.5)))}for(let q=b.length-1;q>=0;q--)b[q].age>b[q].life&&(r.remove(b[q].obj),b.splice(q,1));if(i.flies!==!1&&Q>0&&ot>F&&!x.visible&&(U(),F=ot+50+Math.random()*70),x.visible&&C)if(P+=Q/L,P>=1)x.visible=!1,C=null;else{E.copy(x.position),C.getPointAt(tn.clamp(P+.8*Math.sin(Math.PI*2*P)/(Math.PI*2),0,1),x.position),x.position.x+=Math.sin(ot*37)*.006,x.position.y+=Math.sin(ot*29+1)*.008;const q=x.position.x-E.x,st=x.position.z-E.z;if(q*q+st*st>1e-8){const j=Math.atan2(q,st);D=rp(D,j,6,Q)}x.rotation.set(tn.clamp(-(x.position.y-E.y)/Math.max(Q,.001)*.4,-.3,.3),D,0,"YXZ");const W=Math.sin(ot*210)*.7;N[0].rotation.z=W,N[1].rotation.z=-W}Q>0&&ot>O&&(Y(),O=ot+35+Math.random()*45)}}}const Gn=i=>`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i}</svg>`,Tn={bird:Gn('<path d="M18.1 17.1A6.2 6.2 0 1 0 8.9 9.4C8.5 10.5 7.2 11.4 3.3 12.4l5.1-.3"/><circle cx="14" cy="11" r="1.9" fill="currentColor" stroke="none"/><circle cx="13.4" cy="10.4" r=".55" fill="#1f3a1c" stroke="none"/>'),parrot:Gn('<path d="M6.5 20.5V11.4a6.6 6.6 0 0 1 12.7-2.5"/><path d="M19.2 8.9c2 .5 3 2.2 2.6 4.6-1.3-.8-2.6-1-4-.6"/><path d="M17.9 12.9c-.5 3.2-2.4 5.7-5.4 7.6"/><circle cx="14.3" cy="9.7" r="1.7"/><circle cx="14.3" cy="9.7" r=".6" fill="currentColor" stroke="none"/>'),fruit:Gn('<circle cx="12" cy="14.5" r="5.6"/><path d="M12 8.9V5.6"/><path d="M12 5.8c1.6-1.6 3.4-1.9 5.2-1"/><path d="M9.6 12.4c.5-.9 1.2-1.4 2.1-1.6" stroke-width="1.2"/>'),food:Gn('<path d="M12 10.5L3.8 8.3M12 10.5L5.5 5.0M12 10.5L8.4 2.8M12 10.5L12.0 2.0M12 10.5L15.6 2.8M12 10.5L18.5 5.0M12 10.5L20.2 8.3" stroke-width="1.1"/><path d="M12 10.5v7"/><path d="M12 17.3c-.9 0-1.3 1-1.1 2.1L12 22l1.1-2.6c.2-1.1-.2-2.1-1.1-2.1z" fill="currentColor"/>'),gnat:Gn('<ellipse cx="12" cy="14.5" rx="3" ry="5"/><circle cx="12" cy="7.6" r="1.9"/><path d="M9.2 11.5C6 8.5 3.5 9.5 3.6 11.8c.1 1.6 2.7 1.8 5.6.9M14.8 11.5c3.2-3 5.7-2 5.6.3-.1 1.6-2.7 1.8-5.6.9M10.6 6 9 3.8M13.4 6 15 3.8"/>'),sound:Gn('<path d="M4 9.5v5h3.5L12 18V6L7.5 9.5H4z"/><path d="M15.5 9a4.5 4.5 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11"/>'),sing:Gn('<path d="M9 18V5.5l10-2V16"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/><path d="M9 9.5l10-2"/>'),ruffle:Gn('<path d="M19.5 4.5C13 5 7.5 9.5 6 17l-1.5 2.5"/><path d="M19.5 4.5c-.5 6-4.5 11-12.5 12.5"/><path d="M9.5 13.5l3.5-3.5M8.5 11h3.5M11.5 8.5h3"/>'),fly:Gn('<path d="M11 16C9.5 10.5 6.5 6.5 2 5c.3 2.6 1.1 4.4 2.4 5.6-.9.2-1.4.2-2 .1 1.2 2.6 2.9 4 5.3 4.4-.6.4-1.2.6-1.9.7C7.6 16.6 9.1 16.9 11 16z"/><path d="M13 16c1.5-5.5 4.5-9.5 9-11-.3 2.6-1.1 4.4-2.4 5.6.9.2 1.4.2 2 .1-1.2 2.6-2.9 4-5.3 4.4.6.4 1.2.6 1.9.7-1.8.8-3.3 1.1-5.2.2z"/>'),palette:Gn('<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.6-1.6 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.7-1.6 1.6-1.6H16a5 5 0 0 0 5-5C21 6.4 17 3 12 3z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10" cy="7" r="1.2"/><circle cx="15" cy="7.2" r="1.2"/>'),settings:Gn('<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>')},DS=220;function NS(i,t=Tn.bird){const e=document.createElement("div");e.className="actions";const n=document.createElement("button");n.type="button",n.className="act-main",n.setAttribute("aria-label","Things to do"),n.setAttribute("aria-expanded","false"),n.innerHTML=`${t}<span class="x" aria-hidden="true"></span>`;const s=document.createElement("div");s.className="act-menu",s.setAttribute("role","menu");const r=i.map((m,M)=>{const w=document.createElement("button");return w.type="button",w.className="act-item",w.dataset.id=m.id,w.setAttribute("role","menuitem"),w.setAttribute("aria-label",m.label),w.style.setProperty("--i",String(i.length-1-M)),w.innerHTML=`${m.icon}<span class="act-label">${m.label}${m.key?`<kbd>${m.key}</kbd>`:""}</span>`,s.append(w),w});e.append(s,n),document.body.append(e);let o=!1;function a(m){o=m,e.classList.toggle("open",m),n.setAttribute("aria-expanded",String(m)),m||c(null)}let l=null;function c(m){l?.classList.remove("lit"),l=m,l?.classList.add("lit")}function h(m){const M=i[r.indexOf(m)];m.classList.remove("fired"),m.offsetWidth,m.classList.add("fired"),M.run()}let u=0,d=!1,f=!1;const g=(m,M)=>{const w=document.elementFromPoint(m,M)?.closest(".act-item");return w&&r.includes(w)?w:null};n.addEventListener("pointerdown",m=>{m.button===0&&(m.stopPropagation(),f=!0,d=!1,n.setPointerCapture(m.pointerId),clearTimeout(u),o||(u=window.setTimeout(()=>{d=!0,a(!0),navigator.vibrate?.(8)},DS)))}),n.addEventListener("pointermove",m=>{d&&c(g(m.clientX,m.clientY))});const v=m=>{if(f){if(f=!1,clearTimeout(u),m.stopPropagation(),d){d=!1;const M=g(m.clientX,m.clientY);M&&h(M),a(!1);return}a(!o)}};n.addEventListener("pointerup",v),n.addEventListener("pointercancel",()=>{f=d=!1,clearTimeout(u)}),n.addEventListener("click",m=>{m.detail===0&&a(!o)});for(const m of r)m.addEventListener("pointerdown",M=>M.stopPropagation()),m.addEventListener("pointerup",M=>M.stopPropagation()),m.addEventListener("click",()=>h(m)),m.addEventListener("pointerenter",()=>c(m)),m.addEventListener("pointerleave",()=>l===m&&c(null));let p=-1;return window.addEventListener("pointerdown",m=>{o&&!d&&!e.contains(m.target)?(a(!1),p=m.pointerId):p=-1}),window.addEventListener("keydown",m=>{m.key==="Escape"&&a(!1)}),{root:e,setOpen:a,isOpen:()=>o,swallows:m=>m.pointerId===p}}const Sp="iguaca-settings";function US(){try{return JSON.parse(localStorage.getItem(Sp)??"{}")}catch{return{}}}function Pd(i){try{localStorage.setItem(Sp,JSON.stringify(i))}catch{}}function FS(i,t={},e=!0){const n=US(),s={},r=document.createElement("button");r.type="button",r.className="set-btn",r.setAttribute("aria-label","Settings"),r.setAttribute("aria-expanded","false"),r.innerHTML=Tn.settings;const o=document.createElement("div");o.className="settings",o.hidden=!0,o.setAttribute("role","dialog"),o.setAttribute("aria-label","Settings");const a=document.createElement("div");a.className="set-head",a.innerHTML="<b>Settings</b>";const l=document.createElement("button");l.type="button",l.className="set-close",l.setAttribute("aria-label","Close settings"),l.innerHTML='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M3 3l8 8M11 3l-8 8"/></svg>',l.addEventListener("click",()=>v(!1)),a.append(l);const c=document.createElement("div");c.className="set-body",o.append(a,c);let h=null;function u(p,m,M,w,b,x,A,_){const T=p in n&&M(n[p])?n[p]:m,N=p in t?t[p]:T;s[p]=T,A(N),_(N),w.addEventListener(b,()=>{const C=x();s[p]=C,_(C),Pd(s)})}for(const p of i){if(p.kind!=="action"&&(h=null),p.kind==="heading"){const w=document.createElement("h5");w.textContent=p.label,c.append(w);continue}if(p.kind==="action"){const w=document.createElement("button");if(w.type="button",w.className="act",w.textContent=p.label,p.key){const b=document.createElement("kbd");b.textContent=p.key,w.append(b)}w.addEventListener("click",()=>p.run()),h||(h=document.createElement("div"),h.className="acts",c.append(h)),h.append(w);continue}const m=document.createElement("label");m.className=`row ${p.kind}`;const M=document.createElement("span");if(M.textContent=p.label,p.kind==="select"){const w=document.createElement("select");for(const b of p.options)w.append(new Option(b,b));u(p.key,p.value,b=>typeof b=="string"&&p.options.includes(b),w,"change",()=>w.value,b=>w.value=b,p.set),m.append(M,w)}else{const w=document.createElement("input");if(p.kind==="toggle")w.type="checkbox",u(p.key,p.value,b=>typeof b=="boolean",w,"change",()=>w.checked,b=>w.checked=b,p.set);else{w.type="range",w.min=String(p.min),w.max=String(p.max),w.step=String(p.step);const b=document.createElement("output"),x=Math.max(0,-Math.floor(Math.log10(p.step)+1e-9)),A=_=>{b.textContent=_.toFixed(x),w.style.setProperty("--p",`${(_-p.min)/(p.max-p.min)*100}%`)};u(p.key,p.value,_=>typeof _=="number",w,"input",()=>Number(w.value),_=>w.value=String(_),_=>(A(_),p.set(_))),M.append(b)}m.append(M,w)}c.append(m)}const d=document.createElement("button");d.type="button",d.className="reset",d.textContent="Reset to defaults",d.addEventListener("click",()=>{Pd({}),location.reload()});const f=c.querySelectorAll(".row"),g=f[f.length-1];g?g.after(d):c.prepend(d);function v(p){o.hidden=!p,r.classList.toggle("on",p),r.setAttribute("aria-expanded",String(p))}return r.addEventListener("pointerdown",p=>p.stopPropagation()),r.addEventListener("click",()=>v(o.hidden)),o.addEventListener("pointerdown",p=>p.stopPropagation()),o.addEventListener("pointerup",p=>p.stopPropagation()),window.addEventListener("keydown",p=>{p.key==="Escape"&&v(!1)}),e&&document.body.append(r,o),{button:r,panel:o,open:v,isOpen:()=>!o.hidden}}const OS=2.5;function kS(i){let t=null,e=null,n=null,s=null,r=0,o=0,a=!1,l=null,c=null,h=null,u=null,d=null;const f=new Set,g=[];let v=-1,p=null;const m=[];function M(){return l??=fetch(`${i}audio.json`).then(E=>E.ok?E.json():{}).catch(()=>({}))}async function w(E){try{const D=await fetch(i+E);return D.ok?await D.arrayBuffer():null}catch{return null}}async function b(E){if(!t||!E)return null;try{return await t.decodeAudioData(E)}catch{return null}}function x(){return c??=M().then(E=>Promise.all((E.calls??[]).map(w)))}function A(){return h??=x().then(async E=>{for(const D of await Promise.all(E.map(b)))D&&g.push(D)})}function _(){return u??=M().then(async E=>{d=E.forest?.length?await b(await w(E.forest[0])):null,a&&L()})}function T(){t=new AudioContext,e=t.createGain(),e.gain.value=0,e.connect(t.destination),s=t.createGain(),s.connect(e),n=t.createGain(),n.gain.value=.72,n.connect(t.destination);const E=t.sampleRate*3,D=t.createBuffer(1,E,t.sampleRate),U=D.getChannelData(0);let O=0;for(let K=0;K<E;K++)O=O*.97+(Math.random()*2-1)*.03,U[K]=O*3+(Math.random()*2-1)*.25;const Y=t.createBufferSource();Y.buffer=D,Y.loop=!0;const H=t.createBiquadFilter();H.type="bandpass",H.frequency.value=2600,H.Q.value=.4;const G=t.createGain();G.gain.value=.035,Y.connect(H).connect(G).connect(s),Y.start();for(let K=0;K<7;K++){const ot=K/6;m.push({pitch:.9+Math.random()*.22,pace:.95+Math.random()*.5,pan:(Math.random()*2-1)*.9,gain:.22*(1-.75*ot)*(.7+Math.random()*.5),next:t.currentTime+.3+Math.random()*1.5})}}function N(E,D,U,O,Y,H){if(!t)return;const G=t.createOscillator();G.type="sine",G.frequency.setValueAtTime(U,E),G.frequency.exponentialRampToValueAtTime(O,E+D);const K=t.createGain();K.gain.setValueAtTime(0,E),K.gain.linearRampToValueAtTime(Y,E+.012),K.gain.setValueAtTime(Y,E+D*.6),K.gain.exponentialRampToValueAtTime(1e-4,E+D),G.connect(K).connect(H),G.start(E),G.stop(E+D+.02)}function C(){if(!t||!s||d)return;const E=t.currentTime+.5;for(const D of m)for(;D.next<E;){const U=t.createStereoPanner();U.pan.value=D.pan,U.connect(s);const O=Math.max(D.next,t.currentTime+.01);N(O,.09,1180*D.pitch,1220*D.pitch,D.gain*.7,U),N(O+.21,.16,1900*D.pitch,2300*D.pitch,D.gain,U),D.next+=D.pace*(.92+Math.random()*.16)*(Math.random()<.12?2:1)}}function P(){if(!t||!e||!d||!a)return;const E=Math.min(OS,d.duration/4),D=t.currentTime+.05,U=t.createBufferSource();U.buffer=d;const O=t.createGain();O.gain.setValueAtTime(0,D),O.gain.linearRampToValueAtTime(.8,D+E),O.gain.setValueAtTime(.8,D+d.duration-E),O.gain.linearRampToValueAtTime(0,D+d.duration),U.connect(O).connect(e),U.start(D),U.stop(D+d.duration+.05),f.add(U),U.onended=()=>f.delete(U),o=window.setTimeout(P,(d.duration-E)*1e3)}function L(){if(!(!t||!s))if(window.clearInterval(r),window.clearTimeout(o),d)s.gain.setTargetAtTime(0,t.currentTime,.4),P();else{for(const E of m)E.next=Math.max(E.next,t.currentTime+.2+Math.random()*1.2);C(),r=window.setInterval(C,200)}}function F(){if(!t||!n||g.length===0)return!1;let E=Math.floor(Math.random()*g.length);g.length>1&&E===v&&(E=(E+1)%g.length),v=E;const D=t.currentTime;p&&(p.gain.gain.setTargetAtTime(0,D,.015),p.src.stop(D+.1));const U=t.createBufferSource();U.buffer=g[E],U.playbackRate.value=.96+Math.random()*.08;const O=t.createGain();U.connect(O).connect(n),U.start();const Y=p={src:U,gain:O};return U.onended=()=>{p===Y&&(p=null)},!0}return{get on(){return a},get loaded(){return{forest:d!==null,calls:g.length}},toggle(){if(t||T(),!t||!e)return!1;a=!a;const E=t.currentTime;if(e.gain.cancelScheduledValues(E),e.gain.setValueAtTime(e.gain.value,E),e.gain.linearRampToValueAtTime(a?.6:0,E+(a?1.2:.4)),window.clearInterval(r),window.clearTimeout(o),!a){for(const D of f)D.stop(E+.45);return f.clear(),a}return t.resume(),L(),A(),_(),a},warm(){x()},call(E=!1){if(!E&&!a||(t||T(),!t))return!1;if(t.resume(),g.length>0)return F();const D=performance.now();return A().then(()=>{performance.now()-D<700&&F()}),!1}}}const Un=document.querySelector("#c"),Ei=new URLSearchParams(location.search),Hr=!Ei.has("nopost"),Ce=Ei.has("gem"),Be=new hM({canvas:Un,antialias:!Hr,powerPreference:"high-performance"}),bp=()=>Math.min(window.devicePixelRatio,Yi?1.5:2);Be.setPixelRatio(bp());Be.outputColorSpace=Xe;Be.toneMappingExposure=1;Be.shadowMap.enabled=!0;Be.shadowMap.type=Sr;const Le=new ah,ne=new vn(30,1,.02,120);ne.position.set(1.55,.85,3);const Ie=new dM(ne,Un);Ie.target.set(Kn-.04,.5,0);Ie.enableDamping=!0;Ie.dampingFactor=.06;Ie.minDistance=1.4;Ie.maxDistance=4.4;Ie.minPolarAngle=1.2;Ie.maxPolarAngle=1.78;Ie.minAzimuthAngle=-.45;Ie.maxAzimuthAngle=.85;Ie.enablePan=!1;Ie.rotateSpeed=.6;Ie.touches.ONE=null;const fa=op(Ce?0:1);{const i=new ah,t=op(Ce?0:1);t.material.uniforms.uEnv.value=1,i.add(t.mesh);const e=new zr(Be);Le.environment=e.fromScene(i,.02).texture,Le.environmentIntensity=1.6,e.dispose()}Le.add(fa.mesh);const Gr=_1();Le.add(Gr.group);const Fn=R1();Fn.use(Gr.group);const Ld=document.querySelector(".loading-label span");let bi=0,Ta=!1,Nc=!0,Ks=Ei.has("drawing");function bh(i){Ks=i,document.body.classList.add("snap"),document.body.classList.toggle("drawing",i),requestAnimationFrame(()=>document.body.classList.remove("snap")),Ta&&!Nc&&(bi=i?0:1)}bh(Ks);function wp(i=!1){i&&(bi=1),Ta=!0,document.body.classList.remove("loading"),Ce||Yr.warm()}const Fo=()=>new Promise(i=>requestAnimationFrame(i));async function BS(){const i=Hr?fn.compile:t=>Promise.all(t());try{await i(()=>[Be.compileAsync(Le,ne)]),await Fo(),await i(()=>[Be.compileAsync(Jo,ne,Le)]),await Fo();for(const t of Tp([Le,Jo]))Be.properties.get(t).programs?.forEach(n=>n.getUniforms());for(const t of zS([Le,Jo]))await Fo(),Be.initTexture(t);await Fo(),Hr&&fn.prerender(Le,ne)}catch{}wp()}function Tp(i){const t=new Set;for(const e of i)e.traverse(n=>{const s=n.material;if(s)for(const r of Array.isArray(s)?s:[s])t.add(r)});return t}function zS(i){const t=new Set;for(const e of Tp(i))for(const n of Object.values(e))n?.isTexture&&!n.isRenderTargetTexture&&t.add(n);return t}const HS=Ei.has("procbranch")?Promise.resolve():v1("./branch.glb",i=>{Ld&&i.lengthComputable&&(Ld.textContent=`${Math.min(100,Math.round(i.loaded/i.total*100))}%`)}).then(i=>{Le.remove(Gr.group),tb(Gr.group),Le.add(i.group),Fn.use(i.group),Dp(i.group),Gc=i.fuzz,zp()}).catch(()=>{}),$o=new $m(15659750,3815462,.6);Le.add($o);const Ze=new mh(16774374,2.2);Ze.position.set(-1.3,3.6,1.5);Ze.castShadow=!0;Ze.shadow.mapSize.set(2048,2048);Ze.shadow.camera.left=Ze.shadow.camera.bottom=-1.2;Ze.shadow.camera.right=Ze.shadow.camera.top=1.2;Ze.shadow.camera.near=.5;Ze.shadow.camera.far=8;Ze.shadow.bias=-.0015;Ze.shadow.normalBias=.025;Ze.shadow.radius=4;Ze.target.position.set(0,.5,0);Yi&&(Ze.shadow.mapSize.set(1024,1024),Object.assign(Ze.shadow.camera,{left:-.85,right:1.42,bottom:-1,top:1.15}));Le.add(Ze,Ze.target);const Hs=new mh(15923944,1.4);Hs.position.set(1.5,1.8,-2.5);Hs.target.position.set(0,.5,0);Le.add(Hs,Hs.target);const Rt=gS(Ce?{species:d1}:{});Ce||($o.color.set(15003370),$o.groundColor.set(2898474),$o.intensity=.95,Ze.color.set(15988462),Ze.intensity=1.55,Hs.color.set(14873070),Hs.intensity=1);const Yr=kS("./audio/");let Uc=!1;function GS(){!Rt.sing(2.2)||Ce||(Yr.call(!0),Uc=!0)}window.__sound=Yr;Rt.root.position.x=Kn;Rt.layer("hop").home=Kn;const wh=new cn;wh.add(Rt.root);Le.add(wh);let El=1;const Id=new y;Rt.mind.on("perch",i=>{Fn.push(i.x,i.push,i.side),Fn.load(i.on?i.x:null)});Fn.load(Kn);Fn.settle();const Fc=new y,Al=new y;let Rl=!1;function VS(i){(Rt.perched||!Rl)&&Al.copy(jo),Rl||Fc.copy(Al),Rl=!0,Fc.lerp(Al,1-Math.exp(-i*8))}function WS(i){Fn.update(i),El=Cn(El,Rt.perched?1:0,25,i),Fn.at(Rt.root.position.x,Id),wh.position.copy(Id).multiplyScalar(El)}const ur=Rt.layer("gaze"),Dd=Rt.billTip.bind(Rt);Yi&&(Rt.feathers.contour.castShadow=!1);const Oc=new Xf,XS=new kt,Ep=new y;let Ap=-1e9;const Nd=new En,li=new y,qS=new y;function YS(i,t){const e=Un.getBoundingClientRect();return XS.set((i-e.left)/e.width*2-1,-((t-e.top)/e.height)*2+1)}const Ud=new y,Fd=new ve;function Th(i,t){Ud.copy(ne.position),Fd.copy(ne.quaternion);const e=Wp();return e&&ne.updateMatrixWorld(),Oc.setFromCamera(YS(i,t),ne),e&&(ne.position.copy(Ud),ne.quaternion.copy(Fd),ne.updateMatrixWorld()),Oc.ray}function Rp(i,t,e,n){return Th(i,t),ne.getWorldDirection(li).negate(),Nd.setFromNormalAndCoplanarPoint(li,qS.set(Rt.root.position.x,.8,0).addScaledVector(li,e)),Oc.ray.intersectPlane(Nd,n)}const Od=new y;let pa=!1;function KS(i){if(Rt.away||Rt.fleeing)return!1;Rt.headPosition(Od).y-=.05;const t=pa?.46:.4;return i.distanceSqToPoint(Od)<t*t}const hi=CS(Le,Ce?"pappus":"fruit"),Zn=PS(Le,()=>Rt.root.getWorldPosition(new y).add(new y(0,.85,0)),Ce);Rt.onPick=i=>Zn.owns(i)?Zn.pick(i):hi.pick(i);Rt.onSwallow=i=>Zn.owns(i)?Zn.swallowed(i):hi.swallowed(i);Rt.mind.on("strike",()=>Zn.strike());const Wi=IS({scene:Le,camera:ne,renderer:Be,center:new y(Kn,.55,0),dof:()=>fn.dof,passSeed:Ce?(i,t)=>hi.spawn(i,t):void 0,flies:Ce}),Jo=new cn;Jo.add(...hi.warm,...Zn.warm,...Wi.warm);let Oo=-1;const kd=new y;function Cp(){Math.random()<.5?Zn.spawn():Wi.flyBy()}const Bd=new y,Cl=new y;Rt.mind.on("ruffle",i=>{if(i.kind==="throat"||Rt.away)return;const t=Math.atan2(ne.position.x-Rt.root.position.x,ne.position.z-Rt.root.position.z)+(Math.random()<.5?-1:1)*(.9+Math.random()*.6);Cl.set(Math.sin(t),0,Math.cos(t)),Rt.root.getWorldPosition(Bd).addScaledVector(Cl,.16).y+=.22+Math.random()*.2,Wi.shed(Bd,Cl,Math.random()<.45)});const ko=[];function zd(i,t){for(let e=0;e<t.length;e++)i.push(t[e])}const Hd=new y;let Pp=0,Lp=0,Ip=0;Un.addEventListener("pointerdown",i=>{Pp=performance.now(),Lp=i.clientX,Ip=i.clientY});const ns=new y,dr=new y,Gd=new y,ZS=3;let Vd=0;function $S(i){if(Rt.away||Rt.fleeing)return;const t=performance.now()/1e3;if(t<Vd||(Rt.root.getWorldPosition(ns),dr.copy(ns),ns.x-=.06,dr.x+=.06,ns.y=dr.y=ns.y+.02,i.distanceSqToSegment(ns,dr,void 0,Gd)>.07*.07))return;const e=Gd.x<(ns.x+dr.x)/2?1:-1,n=.12+Math.random()*.1;(Rt.hopBy(e*n)||Rt.hopBy(-e*n))&&(Vd=t+ZS)}const Wd=new En,Pl=new y,Ll=new y,Xd=new y,JS=new y;let Bo=-1;function jS(i){const t=performance.now();if(!Fn.reach(i,Pl))return void(Bo=-1);if(ne.getWorldDirection(li).negate(),Wd.setFromNormalAndCoplanarPoint(li,Pl),!i.intersectPlane(Wd,Ll))return;const e=(t-Bo)/1e3;Bo>0&&e<.1&&Fn.brush(Pl,JS.copy(Ll).sub(Xd).divideScalar(Math.max(e,1/240)),e),Xd.copy(Ll),Bo=t}window.addEventListener("pointermove",i=>{document.body.classList.toggle("near",i.clientX>window.innerWidth-140&&i.clientY<120);const t=i.target===Un,e=Th(i.clientX,i.clientY),n=t&&KS(e);n&&!pa&&!Rt.singing&&Rt.sing(1.6),pa=n,t&&($S(e),jS(e)),!n&&Rp(i.clientX,i.clientY,.8,Ep)&&(Ap=performance.now())});const qd=new y,Yd=new y;function QS(i,t){return Rt.away?!1:(Rt.root.getWorldPosition(qd).y+=.25,Rt.headPosition(Yd),Th(i,t).distanceSqToSegment(qd,Yd)<.22*.22)}const Kd=document.querySelector(".fs"),Eh=i=>document.body.classList.toggle("clean",i);Ei.has("clean")&&Eh(!0);Kd?.addEventListener("click",async()=>{const i=!document.body.classList.contains("clean");Eh(i);try{i&&!document.fullscreenElement&&await document.documentElement.requestFullscreen?.(),!i&&document.fullscreenElement&&await document.exitFullscreen()}catch{}Kd.blur()});document.addEventListener("fullscreenchange",()=>{document.body.classList.toggle("fullscreen",!!document.fullscreenElement),document.fullscreenElement||Eh(!1)});Un.addEventListener("pointerup",i=>{if(Vr.isOpen())return Vr.open(!1);Gp.swallows(i)||performance.now()-Pp<250&&Math.hypot(i.clientX-Lp,i.clientY-Ip)<6&&(Ce&&Yi&&QS(i.clientX,i.clientY)?Ah():Rp(i.clientX,i.clientY,.6,Hd)&&hi.spawn(Hd))});const fn=wS(Be,{samples:4}),jo=new y;{const i=fn.grade;i.uWhite.value.set(1,1,1.04),Ce?i.uLift.value.set(.015,.005,.022):i.uLift.value.set(.012,.017,.015),i.uGamma.value.set(1,1.04,1),i.uVignette.value=.22}function Dp(i){Rt.setPerch(p1(i),dp)}function tb(i){i.traverse(t=>{const e=t;if(e.isMesh){e.geometry.dispose();for(const n of Array.isArray(e.material)?e.material:[e.material])n.dispose()}})}Dp(Gr.group);let Il=0,xr=1,kc=0;const Bc=Rt.plumage.uPal.value.map(i=>i.clone());let Np=yp(Dc[0]);function Ah(){Il=(Il+1)%Dc.length,Rt.ruffle("throat",.25),Rt.plumage.uPal.value.forEach((i,t)=>Bc[t].copy(i)),Np=yp(Dc[Il]),kc=.05,xr=0}function eb(i){if(xr>=1)return;if(kc>0){kc-=i;return}xr=Math.min(1,xr+i/.55);const t=tn.smoothstep(xr,0,1);Rt.plumage.uPal.value.forEach((e,n)=>{for(let s=0;s<9;s++)e.elements[s]=Bc[n].elements[s]+(Np[n].elements[s]-Bc[n].elements[s])*t})}const nb=[-.45,.85],ib=[Math.PI-.6,-Math.PI+.55];let yr=!1,Oi=-1,Ar=0,Up=0;const Rr=new Rc,Cr=new y;function sb(){if(Oi>=0)return;yr=!yr,Cr.copy(ne.position).sub(Ie.target),Rr.setFromVector3(Cr),Ar=Rr.theta;const i=yr?Math.PI+.35:.41,t=tn.euclideanModulo(i-Ar,Math.PI*2);Up=Ar+(yr?t-Math.PI*2:t),Ie.minAzimuthAngle=-1/0,Ie.maxAzimuthAngle=1/0,Oi=0}function rb(i){Oi<0||(Oi=Math.min(1,Oi+i/1.6),Cr.copy(ne.position).sub(Ie.target),Rr.setFromVector3(Cr),Rr.theta=Ar+(Up-Ar)*tn.smootherstep(Oi,0,1),ne.position.copy(Ie.target).add(Cr.setFromSpherical(Rr)),Oi===1&&(Oi=-1,[Ie.minAzimuthAngle,Ie.maxAzimuthAngle]=yr?ib:nb))}Be.localClippingEnabled=!0;let Ea=!1;const Fp=new En,zc=new En,zo=new y,Dl=new y,Zd=new y,ob=new Xn({color:15660008,wireframe:!0,transparent:!0,opacity:.8,clippingPlanes:[zc]}),Op=["bird.skin","bird.bare","bird.bill","bird.eyes","bird.nict"].map(i=>Rt.root.getObjectByName(i)).filter(i=>!!i),ab=Op.map(i=>i.material),$d=Rt.feathers.contour.material;function kp(i){Ea=i,$d.clippingPlanes=i?[Fp]:null,$d.needsUpdate=!0,Op.forEach((t,e)=>t.material=i?ob:ab[e])}function lb(){Ea&&(Rt.rig.bones.neck2.getWorldPosition(zo),Rt.rig.bones.head.getWorldPosition(Dl),Zd.copy(Dl).sub(zo).normalize(),zo.lerp(Dl,.35),zc.setFromNormalAndCoplanarPoint(Zd,zo),Fp.copy(zc).negate())}let Bp=!0,Jd=!1,Rh=0,Hc=!0,Gc=null;const cb=!Ei.has("nofuzz")&&!Ei.has("skin");function zp(){Rt.feathers.fuzz.visible=Hc&&cb,Gc&&(Gc.visible=Hc)}const hb=Rt.plumage.uFlash.value,ub=Rt.plumage.uGlint.value,Hp=()=>{ne.getWorldDirection(li).negate();const i=new y().crossVectors(li,ne.up).normalize();return new y(Rt.root.position.x,.95+Math.random()*.2,0).addScaledVector(li,Ce?.6:.48).addScaledVector(i,(Math.random()-.5)*(Ce?.5:.4))},db=()=>(Rt.headPosition(jd),ne.getWorldDirection(li).negate(),jd.addScaledVector(li,.24).add(new y(0,-.06,0))),jd=new y,Nl=[[.4,()=>Rt.ruffle("shake")],[3,()=>Zn.spawn(db(),!0)],[10.5,()=>Rt.sing(2.2)],[13.5,()=>Rt.lick(.65,3)],[15,()=>Rt.hopBy(.26)],[17.5,()=>Rt.sing(1.6)],[20,()=>Wi.flyBy(!0)],[22.5,()=>Rt.hopTo(Kn)],[24.5,()=>hi.spawn(Hp())],[30,()=>!Rt.busy&&(Rt.ruffle("puff",.6),!0)],[32,()=>Rt.sing(1.4)]],fb=35;let zi=-1,Mr=0;function Ch(i){zi=i?0:-1,Mr=0,document.body.classList.toggle("demo",i)}function pb(i){if(!(zi<0)){for(zi+=i;Mr<Nl.length&&zi>=Nl[Mr][0];){const[t,e]=Nl[Mr];if(e()===!1&&zi-t<4)break;Mr++}zi>fb&&Ch(!1)}}const Qd={Neutral:Kc,AgX:Yc,ACES:qc,Reinhard:Xc,None:oi},Vr=FS([{kind:"heading",label:"Camera"},{kind:"range",key:"shake",label:"Handheld",value:2.05,min:0,max:3.5,step:.05,set:i=>Rh=i},{kind:"range",key:"dof",label:"Depth of field",value:85,min:0,max:260,step:5,set:i=>fn.dof.uAperture.value=i},{kind:"range",key:"exposure",label:"Exposure",value:1.15,min:.8,max:2.4,step:.05,set:i=>fn.grade.uExposure.value=i},{kind:"heading",label:"Look"},{kind:"select",key:"tonemap",label:"Tone mapping",value:"Neutral",options:Object.keys(Qd),set:i=>fn.setToneMapping(Qd[i])},{kind:"range",key:"contrast",label:"Contrast",value:.87,min:.6,max:1.4,step:.01,set:i=>fn.grade.uContrast.value=i},{kind:"range",key:"sat",label:"Saturation",value:.97,min:.3,max:1.4,step:.01,set:i=>fn.grade.uSat.value=i},{kind:"heading",label:"Bird"},{kind:"toggle",key:"follow",label:"Follows the pointer",value:!0,set:i=>Bp=i},{kind:"range",key:"mood",label:"Calm · alert",value:.32,min:0,max:1,step:.01,set:i=>Rt.mind.baseline=i},{kind:"range",key:"flash",label:"Gorget flash",value:1,min:0,max:2,step:.05,set:i=>{Rt.plumage.uFlash.value=hb*i,Rt.plumage.uGlint.value=ub*i}},{kind:"toggle",key:"fuzz",label:"Down and felt",value:!0,set:i=>{Hc=i,zp()}},{kind:"range",key:"give",label:"Twig give",value:1,min:0,max:3,step:.05,set:i=>Fn.give=i},{kind:"heading",label:"Workbench"},{kind:"action",label:"Demo",key:"D",run:()=>Ch(zi<0)},{kind:"action",label:"Pause",key:"P",run:()=>Vp(!rs)},{kind:"action",label:"Drawing",key:"W",run:()=>bh(!Ks)},{kind:"action",label:"Head wire",key:"H",run:()=>kp(!Ea)}],Ei.has("still")?{shake:0}:{},Ei.has("settings")),Gp=NS([{id:"food",label:Ce?"Drop a seed":"Offer a fruit",icon:Ce?Tn.food:Tn.fruit,run:()=>hi.spawn(Hp())},Ce?{id:"gnat",label:"Let a bug in",key:"G",icon:Tn.gnat,run:Cp}:{id:"sound",label:"Forest sound",icon:Tn.sound,run:()=>{Yr.toggle()}},{id:"sing",label:Ce?"Sing":"Call",icon:Tn.sing,run:GS},{id:"ruffle",label:"Ruffle",key:"R",icon:Tn.ruffle,run:()=>Rt.ruffle("shake")},Ce?{id:"fly",label:"Fly off",key:"F",icon:Tn.fly,run:()=>Rt.flee()}:{id:"stretch",label:"Stretch",key:"S",icon:Tn.fly,run:()=>Rt.stretch()},...Ce?[{id:"palette",label:"Color",key:"C",icon:Tn.palette,run:Ah}]:[]],Ce?Tn.bird:Tn.parrot);Gp.root.addEventListener("pointerdown",()=>Vr.open(!1),!0);const mb={...Ce?{KeyF:()=>Rt.flee()}:{KeyS:()=>Rt.stretch()},KeyR:()=>Rt.ruffle("shake"),KeyB:sb,...Ce?{KeyC:Ah}:{},...Ce?{KeyG:Cp}:{},KeyD:()=>Ch(zi<0),KeyH:()=>kp(!Ea),KeyP:()=>Vp(!rs),KeyW:()=>bh(!Ks)};window.addEventListener("keydown",i=>{if(i.repeat)return;const t=i.target instanceof HTMLElement?i.target:null;if(!(t instanceof HTMLInputElement?t.type!=="range"&&t.type!=="checkbox":t?.closest("select, textarea, [contenteditable]")))if(i.code==="Space"){if(t?.closest("button, a, input"))return;i.preventDefault(),Rt.startle(1)}else!i.metaKey&&!i.ctrlKey&&mb[i.code]?.()});function Aa(){const i=Un.clientWidth||window.innerWidth,t=Un.clientHeight||window.innerHeight;Be.setPixelRatio(bp()),Be.setSize(i,t,!1),fn.setSize(i,t,Be.getPixelRatio()),ne.aspect=i/t,ne.fov=i/t<1?30/Math.max(i/t,.55):30,ne.updateProjectionMatrix()}window.addEventListener("resize",Aa);new ResizeObserver(Aa).observe(Un);Aa();(function i(){matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`).addEventListener("change",()=>{Aa(),i()},{once:!0})})();const gb=matchMedia("(max-width: 640px)");let Ho=0;function _b(i){const t=Vr.isOpen()&&gb.matches?Vr.panel.offsetHeight*.5:0;if(Ho=Cn(Ho,t,9,i),Ho>.5){const e=Un.clientWidth||window.innerWidth,n=Un.clientHeight||window.innerHeight;ne.setViewOffset(e,n,0,Ho,e,n)}else ne.view?.enabled&&ne.clearViewOffset()}HS.then(()=>requestAnimationFrame(()=>BS()));Hr||wp(!0);let rs=!1;function Vp(i){rs=i,document.body.classList.toggle("paused",i)}const Qo=new sg;Qo.connect(document);let ki=0;Be.setAnimationLoop(i=>{Qo.update(i);const t=rs?0:Math.min(Qo.getDelta(),1/20);rs&&Qo.getDelta(),ki+=t,rb(rs?1/60:t),_b(rs?1/60:t),Ie.update(),fa.material.uniforms.uTime.value=ki,fa.mesh.position.copy(ne.position);const e=Bp&&!pa&&performance.now()-Ap<300;Jd&&!e&&ur.moveOn(Rt.mind),Jd=e,ur.interest=e?.95:.35,ur.billOn=e?.8:.46,ur.pursuit=e?1:0;let n=e?null:Wi.flyNear(jo,1.1);if(n&&t>0){const r=kd.distanceTo(n)/t>.1;kd.copy(n),r||(n=null)}n?Oo<0&&(Oo=ki):Oo=-1;const s=n&&ki-Oo<.8?n:null;s&&(ur.interest=.95),Rt.setAttention(e?Ep:s??ne.position),ea.lerp(ss?Ph:Mb,1-Math.exp(-t*6)),Ta&&Nc&&!Ks&&(bi=Math.min(1,bi+t/1.6),bi===1&&(Nc=!1)),bi===1&&Vc&&(Vc=!1,fn.endDrawing(),qp.dispose()),eb(t),ko.length=0,zd(ko,hi.food()),zd(ko,Zn.food()),Rt.setFood(ko),WS(t),Rt.update(t),!Ce&&Rt.singing&&!Uc&&Yr.call(),Uc=Rt.singing,Rt.headPosition(jo),VS(t),lb(),hi.update(t,ki,Dd,jo),Zn.update(t,ki,Dd),Wi.update(t),pb(t),Xp()});const vb=new ve,xb=new Yn,tf=new ve;let ef=3;const Go=new kt;function fr(i,t,e){return Math.sin(i*t+e)*.6+Math.sin(i*t*2.31+e*1.7)*.3+Math.sin(i*t*5.13+e*2.9)*.1}function yb(i,t){i>ef&&(Go.set((Math.random()-.5)*.12,(Math.random()-.5)*.09),ef=i+4+Math.random()*9),Go.multiplyScalar(Math.exp(-.016666666666666666*5));const e=Rh*tn.DEG2RAD,n=(fr(i,.35,1.3)*.16+fr(i,7.3,4.1)*.018+Go.x)*e,s=(fr(i,.27,2.7)*.12+fr(i,8.1,5.9)*.016+Go.y)*e,r=fr(i,.22,.4)*.1*e;return xb.set(s,n,r,"YXZ")}const Ul=document.querySelector(".gyro");Yi&&document.body.classList.add("touch");let ss=!1,ta=null;const Ph=new kt,ea=new kt,Mb=new kt;function nf(i){if(i.beta===null||i.gamma===null)return;const t=screen.orientation?.angle??0,[e,n]=t===90?[i.beta,-i.gamma]:t===270?[-i.beta,i.gamma]:t===180?[-i.gamma,-i.beta]:[i.gamma,i.beta];ta??={x:e,y:n};const s=tn.DEG2RAD;Ph.set(tn.clamp((e-ta.x)*.5,-12,12)*s,tn.clamp((n-ta.y)*.4,-8,8)*s)}Ul?.addEventListener("click",async()=>{if(ss)window.removeEventListener("deviceorientation",nf),ss=!1;else{const i=DeviceOrientationEvent.requestPermission;if(i)try{if(await i()!=="granted")return}catch{return}ta=null,window.addEventListener("deviceorientation",nf),ss=!0}ss||Ph.set(0,0),Ul.classList.toggle("on",ss),Ul.setAttribute("aria-pressed",String(ss))});const sf=new y,pr=new y,rf=new y;function Wp(){return ea.lengthSq()<=1e-8?!1:(pr.copy(ne.position).sub(Ie.target),pr.applyAxisAngle(ne.up,-ea.x),rf.crossVectors(ne.up,pr).normalize(),pr.applyAxisAngle(rf,ea.y),ne.position.copy(Ie.target).add(pr),ne.lookAt(Ie.target),!0)}function Xp(){sf.copy(ne.position),tf.copy(ne.quaternion),Wp(),Rh>0&&ne.quaternion.multiply(vb.setFromEuler(yb(ki))),ne.updateMatrixWorld(),bb(),ne.position.copy(sf),ne.quaternion.copy(tf),ne.updateMatrixWorld()}const qp=new Xn({color:16777215,wireframe:!0}),of=[fa.mesh,Wi.group,Rt.feathers.contour,Rt.feathers.flight,Rt.feathers.fuzz],af=[];let Vc=!0;function Sb(){Vc=!0,of.forEach((i,t)=>{af[t]=i.visible,i.visible=!1}),Le.overrideMaterial=qp,Be.render(Le,ne),Le.overrideMaterial=null,of.forEach((i,t)=>i.visible=af[t])}let lf=!0;function bb(){if(lf&&(lf=!1,Un.classList.remove("pending")),!Hr)return Be.render(Le,ne);fn.focusOn(Fc),fn.grade.uReveal.value=tn.smoothstep(bi,0,1),fn.render(Le,ne,ki,Ta&&bi===1?null:Sb),Lh&&bi===1&&!Ks&&Tb()}let Lh=!0,Vo=new Uint8Array(4),Fl=null,Ol=null;const wb=document.querySelector('meta[name="theme-color"]');function Tb(){if(Ol)return;Lh=!1;const i=Be.getContext();Be.setRenderTarget(null);const t=i.drawingBufferWidth;Vo.length!==t*4&&(Vo=new Uint8Array(t*4)),Fl??=i.createBuffer(),i.bindBuffer(i.PIXEL_PACK_BUFFER,Fl),i.bufferData(i.PIXEL_PACK_BUFFER,Vo.byteLength,i.STREAM_READ),i.readPixels(0,1,t,1,i.RGBA,i.UNSIGNED_BYTE,0),i.bindBuffer(i.PIXEL_PACK_BUFFER,null);const e=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);if(!e)return;Ol=e,i.flush();const n=Vo,s=()=>{const r=i.clientWaitSync(e,0,0);if(r===i.TIMEOUT_EXPIRED)return void setTimeout(s,8);i.deleteSync(e),Ol=null,r!==i.WAIT_FAILED&&(i.bindBuffer(i.PIXEL_PACK_BUFFER,Fl),i.getBufferSubData(i.PIXEL_PACK_BUFFER,0,n),i.bindBuffer(i.PIXEL_PACK_BUFFER,null),Eb(n,t))};setTimeout(s,8)}function Eb(i,t){let e=0,n=0,s=0;const r=9;for(let a=0;a<r;a++){const l=Math.round((a+.5)/r*(t-1))*4;e+=i[l],n+=i[l+1],s+=i[l+2]}const o=`rgb(${Math.round(e/r)}, ${Math.round(n/r)}, ${Math.round(s/r)})`;document.documentElement.style.background=o,wb?.setAttribute("content",o)}let cf=0;window.addEventListener("resize",()=>{clearTimeout(cf),cf=window.setTimeout(()=>Lh=!0,400)});Object.assign(window,{__scene:Le,__camera:ne,__renderer:Be,__controls:Ie,__post:fn,__frame:Xp,__seeds:hi,__insects:Zn,__ambient:Wi,__sway:Fn});
