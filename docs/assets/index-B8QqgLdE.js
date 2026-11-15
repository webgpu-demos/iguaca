(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Bc="187",Ls={ROTATE:0,DOLLY:1,PAN:2},Cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jp=0,Bh=1,jp=2,Sr=1,Qp=2,mr=3,Vi=0,pn=1,Be=2,Is=0,br=1,Nl=2,zh=3,Hh=4,t0=5,Rs=100,e0=101,n0=102,i0=103,s0=104,r0=200,o0=201,a0=202,l0=203,cf=204,hf=205,c0=206,h0=207,u0=208,d0=209,f0=210,p0=211,m0=212,g0=213,_0=214,Ul=0,Fl=1,Ol=2,Pr=3,kl=4,Bl=5,zl=6,Hl=7,uf=0,v0=1,x0=2,oi=0,df=1,zc=2,ff=3,Hc=4,pf=5,Gc=6,Vc=7,Gh="attached",y0="detached",mf=300,Fs=301,Lr=302,Ra=303,Ca=304,as=1e3,si=1001,ta=1002,Ue=1003,gf=1004,gr=1005,je=1006,Go=1007,ri=1008,An=1009,_f=1010,vf=1011,Ir=1012,Wc=1013,qn=1014,Nn=1015,yn=1016,Xc=1017,qc=1018,Os=1020,xf=35902,yf=35899,Mf=1021,Sf=1022,Vn=1023,Wi=1026,Gi=1027,Yc=1028,Kc=1029,ls=1030,Zc=1031,$c=1033,Vo=33776,Wo=33777,Xo=33778,qo=33779,Gl=35840,Vl=35841,Wl=35842,Xl=35843,ql=36196,Yl=37492,Kl=37496,Zl=37488,$l=37489,ea=37490,Jl=37491,jl=37808,Ql=37809,tc=37810,ec=37811,nc=37812,ic=37813,sc=37814,rc=37815,oc=37816,ac=37817,lc=37818,cc=37819,hc=37820,uc=37821,dc=36492,fc=36494,pc=36495,mc=36283,gc=36284,na=36285,_c=36286,Dr=2300,Nr=2301,Pa=2302,Vh=2303,Wh=2400,Xh=2401,qh=2402,M0=2500,S0=0,bf=1,vc=2,b0=3200,xc=0,w0=1,zi="",We="srgb",Mn="srgb-linear",ia="linear",be="srgb",La=7680,E0=519,T0=512,A0=513,R0=514,wf=515,C0=516,P0=517,Ef=518,Tf=519,Af=35044,Yh=35048,Kh="300 es",Wn=2e3,Ur=2001;function L0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function I0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function D0(){const i=Fr("canvas");return i.style.display="block",i}const Zh={};function sa(...i){const t="THREE."+i.shift();console.log(t,...i)}function Rf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=Rf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Qt(...i){i=Rf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ds(...i){const t=i.join(" ");t in Zh||(Zh[t]=!0,Xt(...i))}function N0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const U0={[Ul]:Ul,[Ol]:zl,[kl]:kl,[Pr]:Bl,[Fl]:Fl,[zl]:Ol,[Hl]:Hl,[Bl]:Pr};class qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $h=1234567;const wr=Math.PI/180,ks=180/Math.PI;function ui(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function se(i,t,e){return Math.max(t,Math.min(e,i))}function Jc(i,t){return(i%t+t)%t}function F0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function O0(i,t,e){return i!==t?(e-i)/(t-i):0}function Er(i,t,e){return(1-e)*i+e*t}function k0(i,t,e,n){return Er(i,t,1-Math.exp(-e*n))}function B0(i,t=1){return t-Math.abs(Jc(i,t*2)-t)}function z0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function H0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function G0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function V0(i,t){return i+Math.random()*(t-i)}function W0(i){return i*(.5-Math.random())}function X0(i){i!==void 0&&($h=i);let t=$h+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function q0(i){return i*wr}function Y0(i){return i*ks}function K0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Z0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $0(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:Xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fa(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function jc(i,t){if(t.constructor===Float32Array)return i;const e=fa(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Qc(i,t){if(t.constructor===Float32Array)return i;const e=fa(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const Qe={DEG2RAD:wr,RAD2DEG:ks,generateUUID:ui,clamp:se,euclideanModulo:Jc,mapLinear:F0,inverseLerp:O0,lerp:Er,damp:k0,pingpong:B0,smoothstep:z0,smootherstep:H0,randInt:G0,randFloat:V0,randFloatSpread:W0,seededRandom:X0,degToRad:q0,radToDeg:Y0,isPowerOfTwo:K0,ceilPowerOfTwo:Z0,floorPowerOfTwo:Cf,setQuaternionFromProperEuler:$0,normalize:Qc,denormalize:jc};class Ft{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _e{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(u!==v||l!==d||c!==f||h!==g){let p=l*d+c*f+h*g+u*v;p<0&&(d=-d,f=-f,g=-g,v=-v,p=-p);let m=1-a;if(p<.9995){const M=Math.acos(p),b=Math.sin(M);m=Math.sin(m*M)/b,a=Math.sin(a*M)/b,l=l*m+d*a,c=c*m+f*a,h=h*m+g*a,u=u*m+v*a}else{l=l*m+d*a,c=c*m+f*a,h=h*m+g*a,u=u*m+v*a;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class y{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ia.copy(this).projectOnVector(t),this.sub(Ia)}reflect(t){return this.sub(Ia.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ia=new y,Jh=new _e;class $t{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],M=s[1],b=s[4],S=s[7],x=s[2],T=s[5],_=s[8];return r[0]=o*v+a*M+l*x,r[3]=o*p+a*b+l*T,r[6]=o*m+a*S+l*_,r[1]=c*v+h*M+u*x,r[4]=c*p+h*b+u*T,r[7]=c*m+h*S+u*_,r[2]=d*v+f*M+g*x,r[5]=d*p+f*b+g*T,r[8]=d*m+f*S+g*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Da.makeScale(t,e)),this}rotate(t){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Da.makeRotation(-t)),this}translate(t,e){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Da=new $t,jh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function J0(){const i={enabled:!0,workingColorSpace:Mn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===be&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(s.r=Ns(s.r),s.g=Ns(s.g),s.b=Ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zi?ia:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mn]:{primaries:t,whitePoint:n,transfer:ia,toXYZ:jh,fromXYZ:Qh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:n,transfer:be,toXYZ:jh,fromXYZ:Qh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),i}const he=J0();function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ds;class j0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ds===void 0&&(ds=Fr("canvas")),ds.width=t.width,ds.height=t.height;const s=ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wi(e[n]/255)*255):e[n]=wi(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Q0=0;class th{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=ui(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Na(s[o].image)):r.push(Na(s[o]))}else r=Na(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Na(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?j0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}let tm=0;const Ua=new y;class Xe extends qi{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=si,s=si,r=je,o=ri,a=Vn,l=An,c=Xe.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=ui(),this.name="",this.source=new th(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ua).x}get height(){return this.source.getSize(Ua).y}get depth(){return this.source.getSize(Ua).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case as:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case as:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=mf;Xe.DEFAULT_ANISOTROPY=1;class Ae{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,S=(f+1)/2,x=(m+1)/2,T=(h+d)/4,_=(u+v)/4,w=(g+p)/4;return b>S&&b>x?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=_/n):S>x?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=w/s):x<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(x),n=_/r,s=w/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class em extends qi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Xe({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new th(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class an extends em{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Pf extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nm extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class Yt{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,v,p)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/fs.setFromMatrixColumn(t,0).length(),r=1/fs.setFromMatrixColumn(t,1).length(),o=1/fs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(im,t,sm)}lookAt(t,e,n){const s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ci.crossVectors(n,Sn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ci.crossVectors(n,Sn)),Ci.normalize(),Zr.crossVectors(Sn,Ci),s[0]=Ci.x,s[4]=Zr.x,s[8]=Sn.x,s[1]=Ci.y,s[5]=Zr.y,s[9]=Sn.y,s[2]=Ci.z,s[6]=Zr.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],M=n[3],b=n[7],S=n[11],x=n[15],T=s[0],_=s[4],w=s[8],D=s[12],C=s[1],I=s[5],L=s[9],F=s[13],R=s[2],U=s[6],B=s[10],k=s[14],$=s[3],V=s[7],W=s[11],j=s[15];return r[0]=o*T+a*C+l*R+c*$,r[4]=o*_+a*I+l*U+c*V,r[8]=o*w+a*L+l*B+c*W,r[12]=o*D+a*F+l*k+c*j,r[1]=h*T+u*C+d*R+f*$,r[5]=h*_+u*I+d*U+f*V,r[9]=h*w+u*L+d*B+f*W,r[13]=h*D+u*F+d*k+f*j,r[2]=g*T+v*C+p*R+m*$,r[6]=g*_+v*I+p*U+m*V,r[10]=g*w+v*L+p*B+m*W,r[14]=g*D+v*F+p*k+m*j,r[3]=M*T+b*C+S*R+x*$,r[7]=M*_+b*I+S*U+x*V,r[11]=M*w+b*L+S*B+x*W,r[15]=M*D+b*F+S*k+x*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15],M=l*f-c*d,b=a*f-c*u,S=a*d-l*u,x=o*f-c*h,T=o*d-l*h,_=o*u-a*h;return e*(v*M-p*b+m*S)-n*(g*M-p*x+m*T)+s*(g*b-v*x+m*_)-r*(g*S-v*T+p*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],M=e*a-n*o,b=e*l-s*o,S=e*c-r*o,x=n*l-s*a,T=n*c-r*a,_=s*c-r*l,w=h*v-u*g,D=h*p-d*g,C=h*m-f*g,I=u*p-d*v,L=u*m-f*v,F=d*m-f*p,R=M*F-b*L+S*I+x*C-T*D+_*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/R;return t[0]=(a*F-l*L+c*I)*U,t[1]=(s*L-n*F-r*I)*U,t[2]=(v*_-p*T+m*x)*U,t[3]=(d*T-u*_-f*x)*U,t[4]=(l*C-o*F-c*D)*U,t[5]=(e*F-s*C+r*D)*U,t[6]=(p*S-g*_-m*b)*U,t[7]=(h*_-d*S+f*b)*U,t[8]=(o*L-a*C+c*w)*U,t[9]=(n*C-e*L-r*w)*U,t[10]=(g*T-v*S+m*M)*U,t[11]=(u*S-h*T-f*M)*U,t[12]=(a*D-o*I-l*w)*U,t[13]=(e*I-n*D+s*w)*U,t[14]=(v*b-g*x-p*M)*U,t[15]=(h*x-u*b+d*M)*U,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,v=o*h,p=o*u,m=a*u,M=l*c,b=l*h,S=l*u,x=n.x,T=n.y,_=n.z;return s[0]=(1-(v+m))*x,s[1]=(f+S)*x,s[2]=(g-b)*x,s[3]=0,s[4]=(f-S)*T,s[5]=(1-(d+m))*T,s[6]=(p+M)*T,s[7]=0,s[8]=(g+b)*_,s[9]=(p-M)*_,s[10]=(1-(d+v))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=fs.set(s[0],s[1],s[2]).length();const a=fs.set(s[4],s[5],s[6]).length(),l=fs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Bn.copy(this);const c=1/o,h=1/a,u=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,e.setFromRotationMatrix(Bn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Wn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===Wn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ur)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Wn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===Wn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Ur)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const fs=new y,Bn=new Yt,im=new y(0,0,0),sm=new y(1,1,1),Ci=new y,Zr=new y,Sn=new y,tu=new Yt,eu=new _e;class Yn{constructor(t=0,e=0,n=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return eu.setFromEuler(this),this.setFromQuaternion(eu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class eh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rm=0;const nu=new y,ps=new _e,pi=new Yt,$r=new y,$s=new y,om=new y,am=new _e,iu=new y(1,0,0),su=new y(0,1,0),ru=new y(0,0,1),ou={type:"added"},lm={type:"removed"},ms={type:"childadded",child:null},Fa={type:"childremoved",child:null};class Ie extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new y,e=new Yn,n=new _e,s=new y(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new $t}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(iu,t)}rotateY(t){return this.rotateOnAxis(su,t)}rotateZ(t){return this.rotateOnAxis(ru,t)}translateOnAxis(t,e){return nu.copy(t).applyQuaternion(this.quaternion),this.position.add(nu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(iu,t)}translateY(t){return this.translateOnAxis(su,t)}translateZ(t){return this.translateOnAxis(ru,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$r.copy(t):$r.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt($s,$r,this.up):pi.lookAt($r,$s,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(pi),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ou),ms.child=t,this.dispatchEvent(ms),ms.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lm),Fa.child=t,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ou),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,om),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,am,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ie.DEFAULT_UP=new y(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class cn extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cm={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new cn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function ka(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=Jc(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ka(o,r,t+1/3),this.g=ka(o,r,t),this.b=ka(o,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=Lf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return he.workingToColorSpace(on.copy(this),t),Math.round(se(on.r*255,0,255))*65536+Math.round(se(on.g*255,0,255))*256+Math.round(se(on.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(on.copy(this),e);const n=on.r,s=on.g,r=on.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=We){he.workingToColorSpace(on.copy(this),t);const e=on.r,n=on.g,s=on.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(Jr);const n=Er(Pi.h,Jr.h,e),s=Er(Pi.s,Jr.s,e),r=Er(Pi.l,Jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new Dt;Dt.NAMES=Lf;class nh extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const zn=new y,mi=new y,Ba=new y,gi=new y,gs=new y,_s=new y,au=new y,za=new y,Ha=new y,Ga=new y,Va=new Ae,Wa=new Ae,Xa=new Ae;class Dn{constructor(t=new y,e=new y,n=new y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),zn.subVectors(t,e),s.cross(zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){zn.subVectors(s,e),mi.subVectors(n,e),Ba.subVectors(t,e);const o=zn.dot(zn),a=zn.dot(mi),l=zn.dot(Ba),c=mi.dot(mi),h=mi.dot(Ba),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Va.setScalar(0),Wa.setScalar(0),Xa.setScalar(0),Va.fromBufferAttribute(t,e),Wa.fromBufferAttribute(t,n),Xa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Va,r.x),o.addScaledVector(Wa,r.y),o.addScaledVector(Xa,r.z),o}static isFrontFacing(t,e,n,s){return zn.subVectors(n,e),mi.subVectors(t,e),zn.cross(mi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),zn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Dn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;gs.subVectors(s,n),_s.subVectors(r,n),za.subVectors(t,n);const l=gs.dot(za),c=_s.dot(za);if(l<=0&&c<=0)return e.copy(n);Ha.subVectors(t,s);const h=gs.dot(Ha),u=_s.dot(Ha);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(gs,o);Ga.subVectors(t,r);const f=gs.dot(Ga),g=_s.dot(Ga);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(_s,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return au.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(au,a);const m=1/(p+v+d);return o=v*m,a=d*m,e.copy(n).addScaledVector(gs,o).addScaledVector(_s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class di{constructor(t=new y(1/0,1/0,1/0),e=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),jr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jr.copy(n.boundingBox)),jr.applyMatrix4(t.matrixWorld),this.union(jr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),Qr.subVectors(this.max,Js),vs.subVectors(t.a,Js),xs.subVectors(t.b,Js),ys.subVectors(t.c,Js),Li.subVectors(xs,vs),Ii.subVectors(ys,xs),ji.subVectors(vs,ys);let e=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-ji.z,ji.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,ji.z,0,-ji.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-ji.y,ji.x,0];return!qa(e,vs,xs,ys,Qr)||(e=[1,0,0,0,1,0,0,0,1],!qa(e,vs,xs,ys,Qr))?!1:(to.crossVectors(Li,Ii),e=[to.x,to.y,to.z],qa(e,vs,xs,ys,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const _i=[new y,new y,new y,new y,new y,new y,new y,new y],Hn=new y,jr=new di,vs=new y,xs=new y,ys=new y,Li=new y,Ii=new y,ji=new y,Js=new y,Qr=new y,to=new y,Qi=new y;function qa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qi.fromArray(i,r);const a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=t.dot(Qi),c=e.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const He=new y,eo=new Ft;let hm=0;class Ce extends qi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Af,this.updateRanges=[],this.gpuType=Nn,this.version=0,this._normalizationScale=t!==void 0?fa(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)eo.fromBufferAttribute(this,e),eo.applyMatrix3(t),this.setXY(e,eo.x,eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):jc(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Qc(t,this.array)}}class pa extends Ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class If extends Ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ee extends Ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}const um=new di,js=new y,Ya=new y;class On{constructor(t=new y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):um.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);const e=js.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(Ya)),this.expandByPoint(js.copy(t.center).sub(Ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let dm=0;const Pn=new Yt,Ka=new Ie,Ms=new y,bn=new di,Qs=new di,Je=new y;class Me extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(L0(t)?If:pa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return Ka.lookAt(t),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ee(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new y,1/0);return}if(t){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(bn.min,Qs.min),bn.expandByPoint(Je),Je.addVectors(bn.max,Qs.max),bn.expandByPoint(Je)):(bn.expandByPoint(Qs.min),bn.expandByPoint(Qs.max))}bn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Je));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Je.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(t,c),Je.add(Ms)),s=Math.max(s,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ce(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)a[D]=new y,l[D]=new y;const h=new y,u=new y,d=new y,f=new Ft,g=new Ft,v=new Ft,p=new y,m=new y;function M(D,C,I){c[D]=c[C]=c[I]=1,h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,I),f.fromBufferAttribute(r,D),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,I),u.sub(h),d.sub(h),g.sub(f),v.sub(f);const L=1/(g.x*v.y-v.x*g.y);isFinite(L)&&(p.copy(u).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(L),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(L),a[D].add(p),a[C].add(p),a[I].add(p),l[D].add(m),l[C].add(m),l[I].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let D=0,C=b.length;D<C;++D){const I=b[D],L=I.start,F=I.count;for(let R=L,U=L+F;R<U;R+=3)M(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const S=new y,x=new y,T=new y,_=new y;function w(D){T.fromBufferAttribute(s,D),_.copy(T);const C=a[D];S.copy(C),S.sub(T.multiplyScalar(T.dot(C))).normalize(),x.crossVectors(_,C);const L=x.dot(l[D])<0?-1:1;o.setXYZW(D,S.x,S.y,S.z,L)}for(let D=0,C=n.count;D<C;++D)c[D]&&w(D);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new y,r=new y,o=new y,a=new y,l=new y,c=new y,h=new y,u=new y;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new Ce(d,h,u)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Af,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=lu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=lu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function lu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ui()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const un=new y;class ih{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?fa(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){sa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ih(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){sa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):jc(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):Qc(t,this.data.array)}}const Za=new y,pm=new y,mm=new $t;class Tn{constructor(t=new y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Za.subVectors(n,e).cross(pm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Za),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mm.getNormalMatrix(t),s=this.coplanarPoint(Za).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let gm=0;class ai extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=br,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cf,this.blendDst=hf,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=E0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Dt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Tn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ft().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const vi=new y,$a=new y,no=new y,io=new y;class Gs{constructor(t=new y,e=new y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$a.copy(t).add(e).multiplyScalar(.5),no.copy(e).sub(t).normalize(),io.copy(this.origin).sub($a);const r=t.distanceTo(e)*.5,o=-this.direction.dot(no),a=io.dot(this.direction),l=-io.dot(no),c=io.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($a).addScaledVector(no,d),f}intersectSphere(t,e){if(t.radius<0)return null;vi.subVectors(t.center,this.origin);const n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,g=e.x-o.x,v=e.y-o.y,p=e.z-o.z,m=n.x-o.x,M=n.y-o.y,b=n.z-o.z,S=Math.abs(l),x=Math.abs(c),T=Math.abs(h);let _,w,D,C,I,L,F,R,U,B,k,$;if(S>=x&&S>=T?(D=l,L=u,U=g,$=m,l>=0?(_=c,w=h,C=d,I=f,F=v,R=p,B=M,k=b):(_=h,w=c,C=f,I=d,F=p,R=v,B=b,k=M)):x>=T?(D=c,L=d,U=v,$=M,c>=0?(_=h,w=l,C=f,I=u,F=p,R=g,B=b,k=m):(_=l,w=h,C=u,I=f,F=g,R=p,B=m,k=b)):(D=h,L=f,U=p,$=b,h>=0?(_=l,w=c,C=u,I=d,F=g,R=v,B=m,k=M):(_=c,w=l,C=d,I=u,F=v,R=g,B=M,k=m)),D===0)return null;const V=_/D,W=w/D,j=1/D,Q=C-V*L,X=I-W*L,N=F-V*U,Y=R-W*U,G=B-V*$,st=k-W*$,Z=G*Y-st*N,ut=Q*st-X*G,mt=N*X-Y*Q;if(s){if(Z<0||ut<0||mt<0)return null}else if((Z<0||ut<0||mt<0)&&(Z>0||ut>0||mt>0))return null;const at=Z+ut+mt;if(at===0)return null;const Tt=j*(Z*L+ut*U+mt*$);return(at>0?Tt<0:Tt>0)?null:this.at(Tt/at,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xn extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=uf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cu=new Yt,ts=new Gs,so=new On,hu=new y,ro=new y,oo=new y,ao=new y,Ja=new y,lo=new y,uu=new y,co=new y;class pe extends Ie{constructor(t=new Me,e=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ja.fromBufferAttribute(u,t),o?lo.addScaledVector(Ja,h):lo.addScaledVector(Ja.sub(e),h))}e.add(lo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(so.containsPoint(ts.origin)===!1&&(ts.intersectSphere(so,hu)===null||ts.origin.distanceToSquared(hu)>(t.far-t.near)**2))&&(cu.copy(r).invert(),ts.copy(t.ray).applyMatrix4(cu),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),b=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,x=b;S<x;S+=3){const T=a.getX(S),_=a.getX(S+1),w=a.getX(S+2);s=ho(this,m,t,n,c,h,u,T,_,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const M=a.getX(p),b=a.getX(p+1),S=a.getX(p+2);s=ho(this,o,t,n,c,h,u,M,b,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),b=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,x=b;S<x;S+=3){const T=S,_=S+1,w=S+2;s=ho(this,m,t,n,c,h,u,T,_,w),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const M=p,b=p+1,S=p+2;s=ho(this,o,t,n,c,h,u,M,b,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function _m(i,t,e,n,s,r,o,a){let l;if(t.side===pn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Vi,a),l===null)return null;co.copy(a),co.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(co);return c<e.near||c>e.far?null:{distance:c,point:co.clone(),object:i}}function ho(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ro),i.getVertexPosition(l,oo),i.getVertexPosition(c,ao);const h=_m(i,t,e,n,ro,oo,ao,uu);if(h){const u=new y;Dn.getBarycoord(uu,ro,oo,ao,u),s&&(h.uv=Dn.getInterpolatedAttribute(s,a,l,c,u,new Ft)),r&&(h.uv1=Dn.getInterpolatedAttribute(r,a,l,c,u,new Ft)),o&&(h.normal=Dn.getInterpolatedAttribute(o,a,l,c,u,new y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new y,materialIndex:0};Dn.getNormal(ro,oo,ao,d.normal),h.face=d,h.barycoord=u}return h}const tr=new Ae,du=new Ae,fu=new Ae,vm=new Ae,pu=new Yt,uo=new y,ja=new On,mu=new Yt,Qa=new Gs;class ni extends pe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gh,this.bindMatrix=new Yt,this.bindMatrixInverse=new Yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new di),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,uo),this.boundingBox.expandByPoint(uo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,uo),this.boundingSphere.expandByPoint(uo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ja.copy(this.boundingSphere),ja.applyMatrix4(s),t.ray.intersectsSphere(ja)!==!1&&(mu.copy(s).invert(),Qa.copy(t.ray).applyMatrix4(mu),!(this.boundingBox!==null&&Qa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Qa)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Ae,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Gh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===y0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Xt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;du.fromBufferAttribute(s.attributes.skinIndex,t),fu.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(tr.copy(e),e.set(0,0,0,0)):(tr.set(e.x,e.y,e.z,1),e.set(0,0,0)),tr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=fu.getComponent(r);if(o!==0){const a=du.getComponent(r);pu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(vm.copy(tr).applyMatrix4(pu),o)}}return e.isVector4&&(e.w=tr.w),e.applyMatrix4(this.bindMatrixInverse)}}class sh extends Ie{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ma extends Xe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ue,h=Ue,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gu=new Yt,xm=new Yt;class ga{constructor(t=[],e=[]){this.uuid=ui(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Xt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Yt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Yt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:xm;gu.multiplyMatrices(a,e[r]),gu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new ga(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ma(e,t,t,Vn,Nn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(Xt("Skeleton: No bone found with UUID:",r),o=new sh),this.bones.push(o),this.boneInverses.push(new Yt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class ra extends Ce{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ss=new Yt,_u=new Yt,fo=[],vu=new di,ym=new Yt,er=new pe,nr=new On;class Mm extends pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ra(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ym)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),vu.copy(t.boundingBox).applyMatrix4(Ss),this.boundingBox.union(vu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ss),nr.copy(t.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),t.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ss),_u.multiplyMatrices(n,Ss),er.matrixWorld=_u,er.raycast(t,fo);for(let o=0,a=fo.length;o<a;o++){const l=fo[o];l.instanceId=r,l.object=this,e.push(l)}fo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ra(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ma(new Float32Array(s*this.count),s,this.count,Yc,Nn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const es=new On,Sm=new Ft(.5,.5),po=new y;class Or{constructor(t=new Tn,e=new Tn,n=new Tn,s=new Tn,r=new Tn,o=new Tn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],p=r[10],m=r[11],M=r[12],b=r[13],S=r[14],x=r[15];if(s[0].setComponents(c-o,f-h,m-g,x-M).normalize(),s[1].setComponents(c+o,f+h,m+g,x+M).normalize(),s[2].setComponents(c+a,f+u,m+v,x+b).normalize(),s[3].setComponents(c-a,f-u,m-v,x-b).normalize(),n)s[4].setComponents(l,d,p,S).normalize(),s[5].setComponents(c-l,f-d,m-p,x-S).normalize();else if(s[4].setComponents(c-l,f-d,m-p,x-S).normalize(),e===Wn)s[5].setComponents(c+l,f+d,m+p,x+S).normalize();else if(e===Ur)s[5].setComponents(l,d,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){es.center.set(0,0,0);const e=Sm.distanceTo(t.center);return es.radius=.7071067811865476+e,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(po.x=s.normal.x>0?t.max.x:t.min.x,po.y=s.normal.y>0?t.max.y:t.min.y,po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(po)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const xu=new Yt;class rh{constructor(){this.coordinateSystem=Wn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];xu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Or),n[s].setFromProjectionMatrix(xu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Or),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new rh().copy(this)}}class _a extends ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const oa=new y,aa=new y,yu=new Yt,ir=new Gs,mo=new On,tl=new y,Mu=new y;class oh extends Ie{constructor(t=new Me,e=new _a){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)oa.fromBufferAttribute(e,s-1),aa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=oa.distanceTo(aa);t.setAttribute("lineDistance",new ee(n,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=r,t.ray.intersectsSphere(mo)===!1)return;yu.copy(s).invert(),ir.copy(t.ray).applyMatrix4(yu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=c){const m=h.getX(v),M=h.getX(v+1),b=go(this,t,ir,l,m,M,v);b&&e.push(b)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(f),m=go(this,t,ir,l,v,p,g-1);m&&e.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=c){const m=go(this,t,ir,l,v,v+1,v);m&&e.push(m)}if(this.isLineLoop){const v=go(this,t,ir,l,g-1,f,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function go(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(oa.fromBufferAttribute(a,s),aa.fromBufferAttribute(a,r),e.distanceSqToSegment(oa,aa,tl,Mu)>n)return;tl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(tl);if(!(c<t.near||c>t.far))return{distance:c,point:Mu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Su=new y,bu=new y;class la extends oh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Su.fromBufferAttribute(e,s),bu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Su.distanceTo(bu);t.setAttribute("lineDistance",new ee(n,1))}else Xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bm extends oh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Df extends ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wu=new Yt,yc=new Gs,_o=new On,vo=new y;class Nf extends Ie{constructor(t=new Me,e=new Df){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,t.ray.intersectsSphere(_o)===!1)return;wu.copy(s).invert(),yc.copy(t.ray).applyMatrix4(wu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const p=c.getX(g);vo.fromBufferAttribute(u,p),Eu(vo,p,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)vo.fromBufferAttribute(u,g),Eu(vo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Eu(i,t,e,n,s,r,o){const a=yc.distanceSqToPoint(i);if(a<e){const l=new y;yc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Uf extends Xe{constructor(t=[],e=Fs,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wm extends Xe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cs extends Xe{constructor(t,e,n=qn,s,r,o,a=Ue,l=Ue,c,h=Wi,u=1){if(h!==Wi&&h!==Gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new th(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Ff extends cs{constructor(t,e=qn,n=Fs,s,r,o=Ue,a=Ue,l,c=Wi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Of extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wr extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2));function g(v,p,m,M,b,S,x,T,_,w,D){const C=S/_,I=x/w,L=S/2,F=x/2,R=T/2,U=_+1,B=w+1;let k=0,$=0;const V=new y;for(let W=0;W<B;W++){const j=W*I-F;for(let Q=0;Q<U;Q++){const X=Q*C-L;V[v]=X*M,V[p]=j*b,V[m]=R,c.push(V.x,V.y,V.z),V[v]=0,V[p]=0,V[m]=T>0?1:-1,h.push(V.x,V.y,V.z),u.push(Q/_),u.push(1-W/w),k+=1}}for(let W=0;W<w;W++)for(let j=0;j<_;j++){const Q=d+j+U*W,X=d+j+U*(W+1),N=d+(j+1)+U*(W+1),Y=d+(j+1)+U*W;l.push(Q,X,Y),l.push(X,N,Y),$+=6}a.addGroup(f,$,D),f+=$,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ah extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new y,h=new Ft;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(a,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ah(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xr extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],p=n/2;let m=0;M(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(d,3)),this.setAttribute("uv",new ee(f,2));function M(){const S=new y,x=new y;let T=0;const _=(e-t)/n;for(let w=0;w<=r;w++){const D=[],C=w/r,I=C*(e-t)+t;for(let L=0;L<=s;L++){const F=L/s,R=F*l+a,U=Math.sin(R),B=Math.cos(R);x.x=I*U,x.y=-C*n+p,x.z=I*B,u.push(x.x,x.y,x.z),S.set(U,_,B).normalize(),d.push(S.x,S.y,S.z),f.push(F,1-C),D.push(g++)}v.push(D)}for(let w=0;w<s;w++)for(let D=0;D<r;D++){const C=v[D][w],I=v[D+1][w],L=v[D+1][w+1],F=v[D][w+1];(t>0||D!==0)&&(h.push(C,I,F),T+=3),(e>0||D!==r-1)&&(h.push(I,L,F),T+=3)}c.addGroup(m,T,0),m+=T}function b(S){const x=g,T=new Ft,_=new y;let w=0;const D=S===!0?t:e,C=S===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,p*C,0),d.push(0,C,0),f.push(.5,.5),g++;const I=g;for(let L=0;L<=s;L++){const R=L/s*l+a,U=Math.cos(R),B=Math.sin(R);_.x=D*B,_.y=p*C,_.z=D*U,u.push(_.x,_.y,_.z),d.push(0,C,0),T.x=U*.5+.5,T.y=B*.5*C+.5,f.push(T.x,T.y),g++}for(let L=0;L<s;L++){const F=x+L,R=I+L;S===!0?h.push(R,R+1,F):h.push(R+1,R,F),w+=3}c.addGroup(m,w,S===!0?1:2),m+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Em{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Ft:new y);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new y,s=[],r=[],o=[],a=new y,l=new Yt;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new y)}r[0]=new y,o[0]=new y;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(se(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(se(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}function lh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Tu=new y,Au=new y,el=new lh,nl=new lh,il=new lh;class Mc extends Em{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new y){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Au.subVectors(s[0],s[1]).add(s[0]),c=Au);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Tu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Tu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),el.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,p),nl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,p),il.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(el.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),nl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),il.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(el.calc(l),nl.calc(l),il.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new y().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class us extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const M=m*d-o;for(let b=0;b<c;b++){const S=b*u-r;g.push(S,-M,0),v.push(0,0,1),p.push(b/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const b=M+c*m,S=M+c*(m+1),x=M+1+c*(m+1),T=M+1+c*m;f.push(b,S,T),f.push(S,x,T)}this.setIndex(f),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(v,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.width,t.height,t.widthSegments,t.heightSegments)}}class ci extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new y,d=new y,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const M=[],b=m/n,S=o+b*a,x=t*Math.cos(S),T=Math.sqrt(t*t-x*x);let _=0;m===0&&o===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){const D=w/e,C=s+D*r;u.x=-T*Math.cos(C),u.y=x,u.z=T*Math.sin(C),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(D+_,1-b),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){const b=h[m][M+1],S=h[m][M],x=h[m+1][M],T=h[m+1][M+1];(m!==0||o>0)&&f.push(b,S,T),(m!==n-1||l<Math.PI)&&f.push(S,x,T)}this.setIndex(f),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(v,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Bs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Ru(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ru(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function dn(i){const t={};for(let e=0;e<i.length;e++){const n=Bs(i[e]);for(const s in n)t[s]=n[s]}return t}function Ru(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Tm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const Am={clone:Bs,merge:dn};var Rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rm,this.fragmentShader=Cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=Tm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Dt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ft().fromArray(s.value);break;case"v3":this.uniforms[n].value=new y().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Yt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Pm extends xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mn extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xc,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gn extends mn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ft(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Ds('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Ds('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Bf extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lm extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Oi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function _r(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Im(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Cu(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)s[o++]=i[a+l]}return s}function Dm(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}class Vs{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Nm extends Vs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wh,endingEnd:Wh}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xh:r=t,a=2*e-n;break;case qh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xh:o=t,l=2*n-e;break;case qh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,p=v*g,m=-d*p+2*d*v-d*g,M=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-f)*p+(1.5+f)*v+.5*g,S=f*p-f*v;for(let x=0;x!==a;++x)r[x]=m*o[h+x]+M*o[c+x]+b*o[l+x]+S*o[u+x];return r}}class Um extends Vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class Fm extends Vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class Om extends Vs{interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){const g=(n-e)/(s-e),v=1-g;for(let p=0;p!==a;++p)r[p]=o[c+p]*v+o[l+p]*g;return r}const d=a*2,f=t-1;for(let g=0;g!==a;++g){const v=o[c+g],p=o[l+g],m=f*d+g*2,M=u[m],b=u[m+1],S=t*d+g*2,x=h[S],T=h[S+1],_=Bm(n,e,M,x,s);r[g]=zf(_,v,b,T,p)}return r}}function zf(i,t,e,n,s){const r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function km(i,t,e,n,s){const r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Bm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){const a=zf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;const l=km(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}class $n{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Oi(e,this.TimeBufferType),this.values=Oi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Oi(t.times,Array),values:Oi(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),_r(t.settings)&&(n.settings={inTangents:Oi(t.settings.inTangents,Array),outTangents:Oi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Um(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Nm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new Om(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Dr:e=this.InterpolantFactoryMethodDiscrete;break;case Nr:e=this.InterpolantFactoryMethodLinear;break;case Pa:e=this.InterpolantFactoryMethodSmooth;break;case Vh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return Pa;case this.InterpolantFactoryMethodBezier:return Vh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;_r(this.settings)&&(Pu(this.settings.inTangents,t),Pu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;_r(this.settings)&&(Lu(this.settings.inTangents,t),Lu(this.settings.outTangents,t))}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Qt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Qt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&I0(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){Qt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Pa,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=e[u+g];if(v!==e[d+g]||v!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,_r(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}}function Pu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Lu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Nr;class Ws extends $n{constructor(t,e,n){super(t,e,n)}}Ws.prototype.ValueTypeName="bool";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=Dr;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Hf extends $n{constructor(t,e,n,s){super(t,e,n,s)}}Hf.prototype.ValueTypeName="color";class kr extends $n{constructor(t,e,n,s){super(t,e,n,s)}}kr.prototype.ValueTypeName="number";class zm extends Vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e);let c=t*a;for(let h=c+a;c!==h;c+=4)_e.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Br extends $n{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new zm(this.times,this.values,this.getValueSize(),t)}}Br.prototype.ValueTypeName="quaternion";Br.prototype.InterpolantFactoryMethodSmooth=void 0;class Xs extends $n{constructor(t,e,n){super(t,e,n)}}Xs.prototype.ValueTypeName="string";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=Dr;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;class ca extends $n{constructor(t,e,n,s){super(t,e,n,s)}}ca.prototype.ValueTypeName="vector";class Hm{constructor(t="",e=-1,n=[],s=M0){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=ui(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Vm(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push($n.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Im(l);l=Cu(l,1,h),c=Cu(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new kr(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function Gm(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return kr;case"vector":case"vector2":case"vector3":case"vector4":return ca;case"color":return Hf;case"quaternion":return Br;case"bool":case"boolean":return Ws;case"string":return Xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Vm(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Gm(i.type);if(i.times===void 0){const n=[],s=[];Dm(i.keys,n,s,"value"),i.times=n,i.values=s}let e;return t.parse!==void 0?e=t.parse(i):e=new t(i.name,i.times,i.values,i.interpolation),_r(i.settings)&&(e.settings={inTangents:Oi(i.settings.inTangents,Float32Array),outTangents:Oi(i.settings.outTangents,Float32Array)}),e}const Si={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Iu(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Iu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Iu(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Wm{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Xm=new Wm;class qs{constructor(t){this.manager=t!==void 0?t:Xm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}qs.DEFAULT_MATERIAL_NAME="__DEFAULT";const xi={};class qm extends Error{constructor(t,e){super(t),this.response=e}}class Gf extends qs{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Si.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(xi[t]!==void 0){xi[t].push({onLoad:e,onProgress:n,onError:s});return}xi[t]=[],xi[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Xt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=xi[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const p=new ReadableStream({start(m){M();function M(){u.read().then(({done:b,value:S})=>{if(b)m.close();else{v+=S.byteLength;const x=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let T=0,_=h.length;T<_;T++){const w=h[T];w.onProgress&&w.onProgress(x)}m.enqueue(S),M()}},b=>{m.error(b)})}}});return new Response(p)}else throw new qm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Si.add(`file:${t}`,c);const h=xi[t];delete xi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=xi[t];if(h===void 0)throw this.manager.itemError(t),c;delete xi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const bs=new WeakMap;class Ym extends qs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Si.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=bs.get(o);u===void 0&&(u=[],bs.set(o,u)),u.push({onLoad:e,onError:s})}return o}const a=Fr("img");function l(){h(),e&&e(this);const u=bs.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}bs.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),Si.remove(`image:${t}`);const d=bs.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}bs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Si.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class Km extends qs{constructor(t){super(t)}load(t,e,n,s){const r=new Xe,o=new Ym(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class va extends Ie{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Zm extends va{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const sl=new Yt,Du=new y,Nu=new y;class ch{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Du.setFromMatrixPosition(t.matrixWorld),e.position.copy(Du),Nu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(sl,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ur||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(sl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const xo=new y,yo=new _e,Jn=new y;class Vf extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(xo,yo,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,yo,Jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(xo,yo,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,yo,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Di=new y,Uu=new Ft,Fu=new Ft;class vn extends Vf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,Uu,Fu),e.subVectors(Fu,Uu)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class $m extends ch{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=ks*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Jm extends va{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new $m}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class jm extends ch{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}}class Qm extends va{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class xa extends Vf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class tg extends ch{constructor(){super(new xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hh extends va{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new tg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Tr{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const rl=new WeakMap;class eg extends qs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Xt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Xt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Si.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{rl.has(o)===!0?(s&&s(rl.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}const a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Si.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),rl.set(l,c),Si.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Si.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ws=-90,Es=1;class Sc extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(ws,Es,t,e);s.layers=this.layers,this.add(s);const r=new vn(ws,Es,t,e);r.layers=this.layers,this.add(r);const o=new vn(ws,Es,t,e);o.layers=this.layers,this.add(o);const a=new vn(ws,Es,t,e);a.layers=this.layers,this.add(a);const l=new vn(ws,Es,t,e);l.layers=this.layers,this.add(l);const c=new vn(ws,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ng extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class ig{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=sg.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function sg(){this._document.hidden===!1&&this.reset()}const uh="\\[\\]\\.:\\/",rg=new RegExp("["+uh+"]","g"),dh="[^"+uh+"]",og="[^"+uh.replace("\\.","")+"]",ag=/((?:WC+[\/:])*)/.source.replace("WC",dh),lg=/(WCOD+)?/.source.replace("WCOD",og),cg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dh),hg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dh),ug=new RegExp("^"+ag+lg+cg+hg+"$"),dg=["material","materials","bones","map"];class fg{constructor(t,e,n){const s=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class we{constructor(t,e,n){this.path=e,this.parsedPath=n||we.parseTrackName(e),this.node=we.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new we.Composite(t,e,n):new we(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rg,"")}static parseTrackName(t){const e=ug.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);dg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=we.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[s];if(o===void 0){const c=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}we.Composite=fg;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Ou=new Yt;class Wf{constructor(t,e,n=0,s=1/0){this.ray=new Gs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new eh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ou.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ou),this}intersectObject(t,e=!0,n=[]){return bc(t,this,n,e),n.sort(ku),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)bc(t[s],this,n,e);return n.sort(ku),n}}function ku(i,t){return i.distance-t.distance}function bc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)bc(r[o],t,e,!0)}}class wc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ni=new y,Mo=new Yt,ol=new Yt;class pg extends la{constructor(t){const e=Xf(t),n=new Me,s=[],r=[];for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new ee(s,3)),n.setAttribute("color",new ee(r,3));const o=new _a({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;const a=new Dt(255),l=new Dt(65280);this.setColors(a,l)}updateMatrixWorld(t){const e=this.bones,n=this.geometry,s=n.getAttribute("position");ol.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){const a=e[r];a.parent&&a.parent.isBone&&(Mo.multiplyMatrices(ol,a.matrixWorld),Ni.setFromMatrixPosition(Mo),s.setXYZ(o,Ni.x,Ni.y,Ni.z),Mo.multiplyMatrices(ol,a.parent.matrixWorld),Ni.setFromMatrixPosition(Mo),s.setXYZ(o+1,Ni.x,Ni.y,Ni.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){const s=this.geometry.getAttribute("color");for(let r=0;r<s.count;r+=2)s.setXYZ(r,t.r,t.g,t.b),s.setXYZ(r+1,e.r,e.g,e.b);return s.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Xf(i){const t=[];i.isBone===!0&&t.push(i);for(let e=0;e<i.children.length;e++)t.push(...Xf(i.children[e]));return t}class mg extends qi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Bu(i,t,e,n){const s=gg(n);switch(e){case Mf:return i*t;case Yc:return i*t/s.components*s.byteLength;case Kc:return i*t/s.components*s.byteLength;case ls:return i*t*2/s.components*s.byteLength;case Zc:return i*t*2/s.components*s.byteLength;case Sf:return i*t*3/s.components*s.byteLength;case Vn:return i*t*4/s.components*s.byteLength;case $c:return i*t*4/s.components*s.byteLength;case Vo:case Wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vl:case Xl:return Math.max(i,16)*Math.max(t,8)/4;case Gl:case Wl:return Math.max(i,8)*Math.max(t,8)/2;case ql:case Yl:case Zl:case $l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kl:case ea:case Jl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case tc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case sc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ac:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case dc:case fc:case pc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mc:case gc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case na:case _c:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gg(i){switch(i){case An:case _f:return{byteLength:1,components:1};case Ir:case vf:case yn:return{byteLength:2,components:1};case Xc:case qc:return{byteLength:2,components:4};case qn:case Wc:case Nn:return{byteLength:4,components:1};case xf:case yf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);function qf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _g(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xg=`#ifdef USE_ALPHAHASH
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
#endif`,yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wg=`#ifdef USE_AOMAP
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
#endif`,Tg=`#ifdef USE_BATCHING
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
#endif`,Ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lg=`#ifdef USE_IRIDESCENCE
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
#endif`,Ig=`#ifdef USE_BUMPMAP
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
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hg=`#define PI 3.141592653589793
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
} // validated`,Gg=`vec3 transformedNormal = objectNormal;
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
#endif`,Vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zg=`#ifdef USE_ENVMAP
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
#endif`,$g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
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
#endif`,jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,t_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s_=`#ifdef USE_GRADIENTMAP
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
}`,r_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,c_=`#ifdef USE_ENVMAP
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
#endif`,h_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p_=`PhysicalMaterial material;
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
#endif`,m_=`uniform sampler2D dfgLUT;
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
}`,g_=`
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
#endif`,__=`#if defined( RE_IndirectDiffuse )
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
#endif`,v_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,y_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A_=`#if defined( USE_POINTS_UV )
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
#endif`,R_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,C_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L_=`#if defined( USE_MORPHCOLORS )
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
#endif`,I_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D_=`#ifdef USE_MORPHTARGETS
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
#endif`,N_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,F_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,O_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,z_=`#ifdef USE_NORMALMAP
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
#endif`,H_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,G_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,W_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Y_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ev=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nv=`float getShadowMask() {
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
}`,iv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sv=`#ifdef USE_SKINNING
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
#endif`,rv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ov=`#ifdef USE_SKINNING
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
#endif`,av=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uv=`#ifdef USE_TRANSMISSION
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
#endif`,dv=`#ifdef USE_TRANSMISSION
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
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vv=`uniform sampler2D t2D;
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
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yv=`uniform float backgroundBlurriness;
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
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bv=`#include <common>
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
}`,wv=`#if DEPTH_PACKING == 3200
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
}`,Tv=`#define DISTANCE
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
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`uniform float scale;
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
}`,Pv=`uniform vec3 diffuse;
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
}`,Lv=`#include <common>
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
}`,Iv=`uniform vec3 diffuse;
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
}`,Dv=`#define LAMBERT
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
}`,Nv=`#define LAMBERT
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
}`,Uv=`#define MATCAP
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
}`,Fv=`#define MATCAP
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
}`,Ov=`#define NORMAL
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
}`,kv=`#define NORMAL
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
}`,Bv=`#define PHONG
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
}`,zv=`#define PHONG
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
}`,Hv=`#define STANDARD
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
}`,Gv=`#define STANDARD
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
}`,Vv=`#define TOON
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
}`,Wv=`#define TOON
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
}`,Xv=`uniform float size;
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
}`,qv=`uniform vec3 diffuse;
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
}`,Yv=`#include <common>
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
}`,Kv=`uniform vec3 color;
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
}`,Zv=`uniform float rotation;
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
}`,$v=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:vg,alphahash_pars_fragment:xg,alphamap_fragment:yg,alphamap_pars_fragment:Mg,alphatest_fragment:Sg,alphatest_pars_fragment:bg,aomap_fragment:wg,aomap_pars_fragment:Eg,batching_pars_vertex:Tg,batching_vertex:Ag,begin_vertex:Rg,beginnormal_vertex:Cg,bsdfs:Pg,iridescence_fragment:Lg,bumpmap_pars_fragment:Ig,clipping_planes_fragment:Dg,clipping_planes_pars_fragment:Ng,clipping_planes_pars_vertex:Ug,clipping_planes_vertex:Fg,color_fragment:Og,color_pars_fragment:kg,color_pars_vertex:Bg,color_vertex:zg,common:Hg,defaultnormal_vertex:Gg,displacementmap_pars_vertex:Vg,displacementmap_vertex:Wg,emissivemap_fragment:Xg,emissivemap_pars_fragment:qg,colorspace_fragment:Yg,colorspace_pars_fragment:Kg,envmap_fragment:Zg,envmap_common_pars_fragment:$g,envmap_pars_fragment:Jg,envmap_pars_vertex:jg,envmap_physical_pars_fragment:c_,envmap_vertex:Qg,fog_vertex:t_,fog_pars_vertex:e_,fog_fragment:n_,fog_pars_fragment:i_,gradientmap_pars_fragment:s_,lightmap_pars_fragment:r_,lights_lambert_fragment:o_,lights_lambert_pars_fragment:a_,lights_pars_begin:l_,lights_toon_fragment:h_,lights_toon_pars_fragment:u_,lights_phong_fragment:d_,lights_phong_pars_fragment:f_,lights_physical_fragment:p_,lights_physical_pars_fragment:m_,lights_fragment_begin:g_,lights_fragment_maps:__,lights_fragment_end:v_,lightprobes_pars_fragment:x_,logdepthbuf_fragment:y_,logdepthbuf_pars_fragment:M_,logdepthbuf_pars_vertex:S_,logdepthbuf_vertex:b_,map_fragment:w_,map_pars_fragment:E_,map_particle_fragment:T_,map_particle_pars_fragment:A_,metalnessmap_fragment:R_,metalnessmap_pars_fragment:C_,morphinstance_vertex:P_,morphcolor_vertex:L_,morphnormal_vertex:I_,morphtarget_pars_vertex:D_,morphtarget_vertex:N_,normal_fragment_begin:U_,normal_fragment_maps:F_,normal_pars_fragment:O_,normal_pars_vertex:k_,normal_vertex:B_,normalmap_pars_fragment:z_,clearcoat_normal_fragment_begin:H_,clearcoat_normal_fragment_maps:G_,clearcoat_pars_fragment:V_,iridescence_pars_fragment:W_,opaque_fragment:X_,packing:q_,premultiplied_alpha_fragment:Y_,project_vertex:K_,dithering_fragment:Z_,dithering_pars_fragment:$_,roughnessmap_fragment:J_,roughnessmap_pars_fragment:j_,shadowmap_pars_fragment:Q_,shadowmap_pars_vertex:tv,shadowmap_vertex:ev,shadowmask_pars_fragment:nv,skinbase_vertex:iv,skinning_pars_vertex:sv,skinning_vertex:rv,skinnormal_vertex:ov,specularmap_fragment:av,specularmap_pars_fragment:lv,tonemapping_fragment:cv,tonemapping_pars_fragment:hv,transmission_fragment:uv,transmission_pars_fragment:dv,uv_pars_fragment:fv,uv_pars_vertex:pv,uv_vertex:mv,worldpos_vertex:gv,background_vert:_v,background_frag:vv,backgroundCube_vert:xv,backgroundCube_frag:yv,cube_vert:Mv,cube_frag:Sv,depth_vert:bv,depth_frag:wv,distance_vert:Ev,distance_frag:Tv,equirect_vert:Av,equirect_frag:Rv,linedashed_vert:Cv,linedashed_frag:Pv,meshbasic_vert:Lv,meshbasic_frag:Iv,meshlambert_vert:Dv,meshlambert_frag:Nv,meshmatcap_vert:Uv,meshmatcap_frag:Fv,meshnormal_vert:Ov,meshnormal_frag:kv,meshphong_vert:Bv,meshphong_frag:zv,meshphysical_vert:Hv,meshphysical_frag:Gv,meshtoon_vert:Vv,meshtoon_frag:Wv,points_vert:Xv,points_frag:qv,shadow_vert:Yv,shadow_frag:Kv,sprite_vert:Zv,sprite_frag:$v},Pt={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},ii={basic:{uniforms:dn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:dn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Dt(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:dn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:dn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:dn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Dt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:dn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:dn([Pt.points,Pt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:dn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:dn([Pt.common,Pt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:dn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:dn([Pt.sprite,Pt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:dn([Pt.common,Pt.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:dn([Pt.lights,Pt.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};ii.physical={uniforms:dn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const So={r:0,b:0,g:0},Jv=new Yt,Yf=new $t;Yf.set(-1,0,0,0,1,0,0,0,1);function jv(i,t,e,n,s,r){const o=new Dt(0);let a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){const S=M.backgroundBlurriness>0;b=t.get(b,S)}return b}function g(M){let b=!1;const S=f(M);S===null?p(o,a):S&&S.isColor&&(p(S,1),b=!0);const x=i.xr.getEnvironmentBlendMode();x==="additive"?e.buffers.color.setClear(0,0,0,1,r):x==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,b){const S=f(b);S&&S.isCubeTexture?(c===void 0&&(c=new pe(new Wr(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Bs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Jv.makeRotationFromEuler(b.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Yf),c.material.toneMapped=he.getTransfer(S.colorSpace)!==be,(h!==S||u!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new pe(new us(2,2),new xn({name:"BackgroundMaterial",uniforms:Bs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=he.getTransfer(S.colorSpace)!==be,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||u!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,u=S.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,b){M.getRGB(So,kf(i)),e.buffers.color.setClear(So.r,So.g,So.b,b,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,b=1){o.set(M),a=b,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:g,addToRenderList:v,dispose:m}}function Qv(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(I,L,F,R,U){let B=!1;const k=u(I,R,F,L);r!==k&&(r=k,c(r.object)),B=f(I,R,F,U),B&&g(I,R,F,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,S(I,L,F,R),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function u(I,L,F,R){const U=R.wireframe===!0;let B=n[L.id];B===void 0&&(B={},n[L.id]=B);const k=I.isInstancedMesh===!0?I.id:0;let $=B[k];$===void 0&&($={},B[k]=$);let V=$[F.id];V===void 0&&(V={},$[F.id]=V);let W=V[U];return W===void 0&&(W=d(l()),V[U]=W),W}function d(I){const L=[],F=[],R=[];for(let U=0;U<e;U++)L[U]=0,F[U]=0,R[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:R,object:I,attributes:{},index:null}}function f(I,L,F,R){const U=r.attributes,B=L.attributes;let k=0;const $=F.getAttributes();for(const V in $)if($[V].location>=0){const j=U[V];let Q=B[V];if(Q===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),j===void 0||j.attribute!==Q||Q&&j.data!==Q.data)return!0;k++}return r.attributesNum!==k||r.index!==R}function g(I,L,F,R){const U={},B=L.attributes;let k=0;const $=F.getAttributes();for(const V in $)if($[V].location>=0){let j=B[V];j===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));const Q={};Q.attribute=j,j&&j.data&&(Q.data=j.data),U[V]=Q,k++}r.attributes=U,r.attributesNum=k,r.index=R}function v(){const I=r.newAttributes;for(let L=0,F=I.length;L<F;L++)I[L]=0}function p(I){m(I,0)}function m(I,L){const F=r.newAttributes,R=r.enabledAttributes,U=r.attributeDivisors;F[I]=1,R[I]===0&&(i.enableVertexAttribArray(I),R[I]=1),U[I]!==L&&(i.vertexAttribDivisor(I,L),U[I]=L)}function M(){const I=r.newAttributes,L=r.enabledAttributes;for(let F=0,R=L.length;F<R;F++)L[F]!==I[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function b(I,L,F,R,U,B,k){k===!0?i.vertexAttribIPointer(I,L,F,U,B):i.vertexAttribPointer(I,L,F,R,U,B)}function S(I,L,F,R){v();const U=R.attributes,B=F.getAttributes(),k=L.defaultAttributeValues;for(const $ in B){const V=B[$];if(V.location>=0){let W=U[$];if(W===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),W!==void 0){const j=W.normalized,Q=W.itemSize,X=t.get(W);if(X===void 0)continue;const N=X.buffer,Y=X.type,G=X.bytesPerElement,st=Y===i.INT||Y===i.UNSIGNED_INT||W.gpuType===Wc;if(W.isInterleavedBufferAttribute){const Z=W.data,ut=Z.isInterleavedBuffer===!0?Z.stride:Z.itemSize,mt=W.offset;if(Z.isInstancedInterleavedBuffer||Z.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)m(V.location+at,Z.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let at=0;at<V.locationSize;at++)p(V.location+at);i.bindBuffer(i.ARRAY_BUFFER,N);for(let at=0;at<V.locationSize;at++)b(V.location+at,Q/V.locationSize,Y,j,ut*G,(mt+Q/V.locationSize*at)*G,st)}else{if(W.isInstancedBufferAttribute){for(let Z=0;Z<V.locationSize;Z++)m(V.location+Z,W.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Z=0;Z<V.locationSize;Z++)p(V.location+Z);i.bindBuffer(i.ARRAY_BUFFER,N);for(let Z=0;Z<V.locationSize;Z++)b(V.location+Z,Q/V.locationSize,Y,j,Q*G,Q/V.locationSize*Z*G,st)}}else if(k!==void 0){const j=k[$];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(V.location,j);break;case 3:i.vertexAttrib3fv(V.location,j);break;case 4:i.vertexAttrib4fv(V.location,j);break;default:i.vertexAttrib1fv(V.location,j)}}}}M()}function x(){D();for(const I in n){const L=n[I];for(const F in L){const R=L[F];for(const U in R){const B=R[U];for(const k in B)h(B[k].object),delete B[k];delete R[U]}}delete n[I]}}function T(I){if(n[I.id]===void 0)return;const L=n[I.id];for(const F in L){const R=L[F];for(const U in R){const B=R[U];for(const k in B)h(B[k].object),delete B[k];delete R[U]}}delete n[I.id]}function _(I){for(const L in n){const F=n[L];for(const R in F){const U=F[R];if(U[I.id]===void 0)continue;const B=U[I.id];for(const k in B)h(B[k].object),delete B[k];delete U[I.id]}}}function w(I){for(const L in n){const F=n[L],R=I.isInstancedMesh===!0?I.id:0,U=F[R];if(U!==void 0){for(const B in U){const k=U[B];for(const $ in k)h(k[$].object),delete k[$];delete U[B]}delete F[R],Object.keys(F).length===0&&delete n[L]}}}function D(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:C,dispose:x,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function tx(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ex(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Vn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){const w=_===yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==An&&_!==Nn&&!w&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Xt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Xt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:S,maxSamples:x,samples:T}}function nx(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Tn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const M=r?0:n,b=M*4;let S=m.clippingState||null;l.value=S,S=h(g,d,b,f);for(let x=0;x!==b;++x)S[x]=e[x];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=f+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let b=0,S=f;b!==v;++b,S+=4)o.copy(u[b]).applyMatrix4(M,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}class fh extends an{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Uf(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wr(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Is});r.uniforms.tEquirect.value=e;const o=new pe(s,r),a=e.minFilter;return e.minFilter===ri&&(e.minFilter=je),new Sc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const zu=256,ix=3,sx=20,Kf=256,Zf=16,rx=3,ox=new y,ax=new Dt;class zr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Sc(1,10,null),this._boxMesh=new pe(new Wr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=ox}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(ax));const p=new Sc(n,s,h);return p.position.copy(a),p.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(zu,Cf(t))}_fromTexture(t,e){t.mapping===Fs||t.mapping===Lr?this._setSize(t.image.length===0?zu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Hu(t,!1,!1),n=Math.log2(t)-ix;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Hu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Fs||t.mapping===Lr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Gu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=lx(),this._integrationMaterial=cx());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Zf);for(let o=0;o<=n;o++){const a=zr.lodToRoughness(o,n);if(o>n-rx)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(Kf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=hx());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function Hu(i,t,e){return new fh(i,{minFilter:ri,generateMipmaps:t,type:yn,colorSpace:Mn,depthBuffer:e})}function qr(i,t,e){return new xn({name:i,uniforms:t,vertexShader:ae.cube_vert,fragmentShader:e,side:pn,blending:Is,depthTest:!1,depthWrite:!1})}function lx(){return qr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Kf}u

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
	`)}function cx(){return qr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Zf}},`

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
	`)}function hx(){return qr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${sx}
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
	`)}function Gu(){return qr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Vu(){return qr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ux(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Ra||f===Ca)if(t.has(d)){const g=t.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new fh(g.height);return v.fromEquirectangularTexture(i,d),t.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,g=f===Ra||f===Ca,v=f===Fs||f===Lr;if(g||v){let p=e.get(d);const m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new zr(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const M=d.image;return g&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new zr(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===Ra?d.mapping=Fs:f===Ca&&(d.mapping=Lr),d}function l(d){let f=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){const f=d.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function dx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ds("WebGLRenderer: "+n+" extension not supported."),s}}}function fx(i,t,e,n){const s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(const p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);const v=r.get(g);v&&(t.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),e.memory.geometries++),v}function h(g){const v=g.attributes;for(const p in v)t.update(v[p],i.ARRAY_BUFFER)}function u(g){const v=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const M=v!==null?v.array.length:p.array.length/3-1,b=p.count>=65535?If:pa,S=new b(Math.ceil(M/3)*6,1),x=S.array;if(v!==null){const _=v.array;m=v.version;for(let w=0,D=0;w<M;w+=3){const C=_[w+0],I=_[w+1],L=_[w+2];x[D++]=C,x[D++]=I,x[D++]=I,x[D++]=L,x[D++]=L,x[D++]=C}}else{m=p.version;for(let _=0,w=0;_<M;_+=3){const D=_+0,C=_+1,I=_+2;x[w++]=D,x[w++]=C,x[w++]=C,x[w++]=I,x[w++]=I,x[w++]=D}}S.version=m;const T=r.get(g);T&&t.remove(T),r.set(g,S)}function d(g){const v=r.get(g);if(v){const p=g.index;p!==null&&v.version<p.version&&u(g)}else u(g);return r.get(g)}function f(){for(const g in s){const v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function px(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let p=0;p<f;p++)v+=d[p];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function mx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Qt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function gx(i,t,e){const n=new WeakMap,s=new Ae;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let C=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",C)};var f=C;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),p===!0&&(S=3);let x=a.attributes.position.count*S,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const _=new Float32Array(x*T*4*u),w=new Pf(_,x,T,u);w.type=Nn,w.needsUpdate=!0;const D=S*4;for(let I=0;I<u;I++){const L=m[I],F=M[I],R=b[I],U=x*T*4*I;for(let B=0;B<L.count;B++){const k=B*D;g===!0&&(s.fromBufferAttribute(L,B),_[U+k+0]=s.x,_[U+k+1]=s.y,_[U+k+2]=s.z,_[U+k+3]=0),v===!0&&(s.fromBufferAttribute(F,B),_[U+k+4]=s.x,_[U+k+5]=s.y,_[U+k+6]=s.z,_[U+k+7]=0),p===!0&&(s.fromBufferAttribute(R,B),_[U+k+8]=s.x,_[U+k+9]=s.y,_[U+k+10]=s.z,_[U+k+11]=R.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new Ft(x,T)},n.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function _x(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const vx={[df]:"LINEAR_TONE_MAPPING",[zc]:"REINHARD_TONE_MAPPING",[ff]:"CINEON_TONE_MAPPING",[Hc]:"ACES_FILMIC_TONE_MAPPING",[Gc]:"AGX_TONE_MAPPING",[Vc]:"NEUTRAL_TONE_MAPPING",[pf]:"CUSTOM_TONE_MAPPING"};function xx(i,t,e,n,s,r){const o=new an(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new Me;h.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ee([0,2,0,0,2,0],2));const u=new Pm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new pe(h,u),f=new xa(-1,1,1,-1,0,1);let g=null,v=null,p=!1,m,M=null,b=[],S=!1;this.setSize=function(x,T){o.setSize(x,T),a!==null&&a.setSize(x,T),l!==null&&l.setSize(x,T);for(let _=0;_<b.length;_++){const w=b[_];w.setSize&&w.setSize(x,T)}},this.setEffects=function(x){b=x,S=b.length>0&&b[0].isRenderPass===!0;const T=o.width,_=o.height;b.length>0&&a===null&&(a=new an(T,_,{type:yn,depthBuffer:!1,stencilBuffer:!1}),l=new an(T,_,{type:yn,depthBuffer:!1,stencilBuffer:!1}));const w=s===!0&&b.some(D=>D.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new cs(T,_),r===!0&&(c.format=Gi,c.type=Os)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let D=0;D<b.length;D++){const C=b[D];C.setSize&&C.setSize(T,_),w&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(x,T){if(p||x.toneMapping===oi&&b.length===0)return!1;if(M=T,T!==null){const _=T.width,w=T.height;(o.width!==_||o.height!==w)&&this.setSize(_,w)}return S===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=oi,!0},this.hasRenderPass=function(){return S},this.end=function(x,T){x.toneMapping=m,p=!0;let _=o,w=a;for(let D=0;D<b.length;D++){const C=b[D];C.enabled!==!1&&(C.render(x,w,_,T),C.needsSwap!==!1&&(_=w,w=w===a?l:a))}if(g!==x.outputColorSpace||v!==x.toneMapping){g=x.outputColorSpace,v=x.toneMapping,u.defines={},he.getTransfer(g)===be&&(u.defines.SRGB_TRANSFER="");const D=vx[v];D&&(u.defines[D]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,x.setRenderTarget(M),x.render(d,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const $f=new Xe,Jf=new cs(1,1),jf=new Ff(1),Qf=new Pf,tp=new nm,ep=new Uf,Wu=[],Xu=[],qu=new Float32Array(16),Yu=new Float32Array(9),Ku=new Float32Array(4);function Ys(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Wu[s];if(r===void 0&&(r=new Float32Array(s),Wu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ya(i,t){let e=Xu[t];e===void 0&&(e=new Int32Array(t),Xu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function yx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Mx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function Sx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function bx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function wx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Ku.set(n),i.uniformMatrix2fv(this.addr,!1,Ku),Ye(e,n)}}function Ex(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Yu.set(n),i.uniformMatrix3fv(this.addr,!1,Yu),Ye(e,n)}}function Tx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;qu.set(n),i.uniformMatrix4fv(this.addr,!1,qu),Ye(e,n)}}function Ax(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function Cx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function Px(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function Lx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ix(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function Dx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function Nx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function Ma(i){return i.version===0&&(i.compareFunction=Tf,i.needsUpdate=!0),i}function Ux(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ma(Jf):r=$f,e.setTexture2D(t||r,s)}function Fx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||tp,s)}function Ox(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ma(jf):r=ep,e.setTextureCube(t||r,s)}function kx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qf,s)}function Bx(i){switch(i){case 5126:return yx;case 35664:return Mx;case 35665:return Sx;case 35666:return bx;case 35674:return wx;case 35675:return Ex;case 35676:return Tx;case 5124:case 35670:return Ax;case 35667:case 35671:return Rx;case 35668:case 35672:return Cx;case 35669:case 35673:return Px;case 5125:return Lx;case 36294:return Ix;case 36295:return Dx;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ux;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return kx}}function zx(i,t){i.uniform1fv(this.addr,t)}function Hx(i,t){const e=Ys(t,this.size,2);i.uniform2fv(this.addr,e)}function Gx(i,t){const e=Ys(t,this.size,3);i.uniform3fv(this.addr,e)}function Vx(i,t){const e=Ys(t,this.size,4);i.uniform4fv(this.addr,e)}function Wx(i,t){const e=Ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xx(i,t){const e=Ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qx(i,t){const e=Ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Yx(i,t){i.uniform1iv(this.addr,t)}function Kx(i,t){i.uniform2iv(this.addr,t)}function Zx(i,t){i.uniform3iv(this.addr,t)}function $x(i,t){i.uniform4iv(this.addr,t)}function Jx(i,t){i.uniform1uiv(this.addr,t)}function jx(i,t){i.uniform2uiv(this.addr,t)}function Qx(i,t){i.uniform3uiv(this.addr,t)}function ty(i,t){i.uniform4uiv(this.addr,t)}function ey(i,t,e){const n=this.cache,s=t.length,r=ya(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ma(Jf):o=$f;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function ny(i,t,e){const n=this.cache,s=t.length,r=ya(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||tp,r[o])}function iy(i,t,e){const n=this.cache,s=t.length,r=ya(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Ma(jf):o=ep;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function sy(i,t,e){const n=this.cache,s=t.length,r=ya(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Qf,r[o])}function ry(i){switch(i){case 5126:return zx;case 35664:return Hx;case 35665:return Gx;case 35666:return Vx;case 35674:return Wx;case 35675:return Xx;case 35676:return qx;case 5124:case 35670:return Yx;case 35667:case 35671:return Kx;case 35668:case 35672:return Zx;case 35669:case 35673:return $x;case 5125:return Jx;case 36294:return jx;case 36295:return Qx;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ey;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return sy}}class oy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bx(e.type)}}class ay{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ry(e.type)}}class ly{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const al=/(\w+)(\])?(\[|\.)?/g;function Zu(i,t){i.seq.push(t),i.map[t.id]=t}function cy(i,t,e){const n=i.name,s=n.length;for(al.lastIndex=0;;){const r=al.exec(n),o=al.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Zu(e,c===void 0?new oy(a,i,t):new ay(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new ly(a),Zu(e,u)),e=u}}}class Yo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);cy(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function $u(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const hy=37297;let uy=0;function dy(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ju=new $t;function fy(i){he._getMatrix(Ju,he.workingColorSpace,i);const t=`mat3( ${Ju.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case ia:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ju(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+dy(i.getShaderSource(t),a)}else return r}function py(i,t){const e=fy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const my={[df]:"Linear",[zc]:"Reinhard",[ff]:"Cineon",[Hc]:"ACESFilmic",[Gc]:"AgX",[Vc]:"Neutral",[pf]:"Custom"};function gy(i,t){const e=my[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const bo=new y;function _y(){he.getLuminanceCoefficients(bo);const i=bo.x.toFixed(4),t=bo.y.toFixed(4),e=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function xy(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yy(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function vr(i){return i!==""}function Qu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function td(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const My=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(i){return i.replace(My,Sy)}function Sy(i,t){const e=ae[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ec(e)}const by=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(i){return i.replace(by,wy)}function wy(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const Ey={[Sr]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function Ty(i){return Ey[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ay={[Lr]:"ENVMAP_MODE_REFRACTION"};function Ry(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ay[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Cy={[uf]:"ENVMAP_BLENDING_MULTIPLY",[v0]:"ENVMAP_BLENDING_MIX",[x0]:"ENVMAP_BLENDING_ADD"};function Py(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Cy[i.combine]||"ENVMAP_BLENDING_NONE"}function Ly(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Ty(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Ry(e),u=Py(e),d=vy(e),f=xy(r),g=s.createProgram();let v,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(vr).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(vr).join(`
`),p.length>0&&(p+=`
`)):(v=[nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),p=[nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?ae.tonemapping_pars_fragment:"",e.toneMapping!==oi?gy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,py("linearToOutputTexel",e.outputColorSpace),_y(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vr).join(`
`)),o=Ec(o),o=Qu(o,e),o=td(o,e),a=Ec(a),a=Qu(a,e),a=td(a,e),o=ed(o),a=ed(a),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=m+v+o,b=m+p+a,S=$u(s,s.VERTEX_SHADER,M),x=$u(s,s.FRAGMENT_SHADER,b);s.attachShader(g,S),s.attachShader(g,x),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(C){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(g)||"",L=s.getShaderInfoLog(S)||"",F=s.getShaderInfoLog(x)||"",R=I.trim(),U=L.trim(),B=F.trim();let k=!0,$=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,S,x);else{const V=ju(s,S,"vertex"),W=ju(s,x,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+R+`
`+V+`
`+W)}else R!==""?Xt("WebGLProgram: Program Info Log:",R):(U===""||B==="")&&($=!1);$&&(C.diagnostics={runnable:k,programLog:R,vertexShader:{log:U,prefix:v},fragmentShader:{log:B,prefix:p}})}s.deleteShader(S),s.deleteShader(x),_=new Yo(s,g),w=yy(s,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(g,hy)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=uy++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=x,this}let Iy=0;class Dy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ny(t),e.set(t,n)),n}}class Ny{constructor(t){this.id=Iy++,this.code=t,this.usedTimes=0}}function Uy(i){return i===ls||i===ea||i===na}function Fy(i,t,e,n,s,r){const o=new eh,a=new Dy,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,w,D,C,I,L){const F=C.fog,R=I.geometry,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,k=t.get(_.envMap||U,B),$=d[_.type];let V=n.precision;_.precision!==null&&(V=n.getMaxPrecision(_.precision),V!==_.precision&&Xt("WebGLProgram.getParameters:",_.precision,"not supported, using",V,"instead."));const W=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,j=W!==void 0?W.length:0;let Q=0;R.morphAttributes.position!==void 0&&(Q=1),R.morphAttributes.normal!==void 0&&(Q=2),R.morphAttributes.color!==void 0&&(Q=3);let X,N,Y,G;if($){const Ct=ii[$];X=Ct.vertexShader,N=Ct.fragmentShader}else{X=_.vertexShader,N=_.fragmentShader;const Ct=a.getVertexShaderStage(_),Se=a.getFragmentShaderStage(_);a.update(_,Ct,Se),Y=Ct.id,G=Se.id}const st=i.getRenderTarget(),Z=i.state.buffers.depth.getReversed(),ut=I.isInstancedMesh===!0,mt=I.isBatchedMesh===!0,at=!!_.map,Tt=!!_.matcap,Gt=!!k,kt=Gt&&k.isPMREMTexture===!0,ue=!!_.aoMap,Wt=!!_.lightMap,jt=!!_.bumpMap&&_.wireframe===!1,dt=!!_.normalMap,nt=!!_.displacementMap,Zt=!!_.emissiveMap,Jt=!!_.metalnessMap,me=!!_.roughnessMap,re=_.anisotropy>0,z=_.clearcoat>0,Ee=_.diffuseRoughness>0,ce=_.dispersion>0,ve=_.retroreflectivity>0,_t=_.iridescence>0,Ht=_.sheen>0,At=_.transmission>0,Nt=re&&!!_.anisotropyMap,P=z&&!!_.clearcoatMap,E=z&&!!_.clearcoatNormalMap,q=z&&!!_.clearcoatRoughnessMap,ft=Ee&&!!_.diffuseRoughnessMap,ht=_t&&!!_.iridescenceMap,xt=_t&&!!_.iridescenceThicknessMap,wt=Ht&&!!_.sheenColorMap,rt=Ht&&!!_.sheenRoughnessMap,ot=!!_.specularMap,Mt=!!_.specularColorMap,O=!!_.specularIntensityMap,lt=At&&!!_.transmissionMap,et=At&&!!_.thicknessMap,St=!!_.gradientMap,vt=!!_.alphaMap,yt=_.alphaTest>0,qt=!!_.alphaHash,oe=!!_.extensions;let pt=oi;_.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(pt=i.toneMapping);const Kt=kt?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,ie={shaderID:$,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:N,defines:_.defines,customVertexShaderID:Y,customFragmentShaderID:G,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:V,batching:mt,batchingColor:mt&&I._colorsTexture!==null,instancing:ut,instancingColor:ut&&I.instanceColor!==null,instancingMorph:ut&&I.morphTexture!==null,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:at,matcap:Tt,envMap:Gt,envMapMode:Gt&&k.mapping,envMapPMREM:kt,envMapMaxLod:kt?Kt.length-1:null,envMapSize:kt?Kt[0].width:null,aoMap:ue,lightMap:Wt,bumpMap:jt,normalMap:dt,displacementMap:nt,emissiveMap:Zt,normalMapObjectSpace:dt&&_.normalMapType===w0,normalMapTangentSpace:dt&&_.normalMapType===xc,packedNormalMap:dt&&_.normalMapType===xc&&Uy(_.normalMap.format),metalnessMap:Jt,roughnessMap:me,anisotropy:re,anisotropyMap:Nt,clearcoat:z,clearcoatMap:P,clearcoatNormalMap:E,clearcoatRoughnessMap:q,diffuseRoughness:Ee,diffuseRoughnessMap:ft,dispersion:ce,retroreflection:ve,iridescence:_t,iridescenceMap:ht,iridescenceThicknessMap:xt,sheen:Ht,sheenColorMap:wt,sheenRoughnessMap:rt,specularMap:ot,specularColorMap:Mt,specularIntensityMap:O,transmission:At,transmissionMap:lt,thicknessMap:et,gradientMap:St,opaque:_.transparent===!1&&_.blending===br&&_.alphaToCoverage===!1,alphaMap:vt,alphaTest:yt,alphaHash:qt,combine:_.combine,mapUv:at&&f(_.map.channel),aoMapUv:ue&&f(_.aoMap.channel),lightMapUv:Wt&&f(_.lightMap.channel),bumpMapUv:jt&&f(_.bumpMap.channel),normalMapUv:dt&&f(_.normalMap.channel),displacementMapUv:nt&&f(_.displacementMap.channel),emissiveMapUv:Zt&&f(_.emissiveMap.channel),metalnessMapUv:Jt&&f(_.metalnessMap.channel),roughnessMapUv:me&&f(_.roughnessMap.channel),anisotropyMapUv:Nt&&f(_.anisotropyMap.channel),clearcoatMapUv:P&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ft&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ht&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:rt&&f(_.sheenRoughnessMap.channel),specularMapUv:ot&&f(_.specularMap.channel),specularColorMapUv:Mt&&f(_.specularColorMap.channel),specularIntensityMapUv:O&&f(_.specularIntensityMap.channel),transmissionMapUv:lt&&f(_.transmissionMap.channel),thicknessMapUv:et&&f(_.thicknessMap.channel),alphaMapUv:vt&&f(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(dt||re),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!R.attributes.uv&&(at||vt),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&dt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Z,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Q,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:L.filter(Ct=>Ct.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,decodeVideoTexture:at&&_.map.isVideoTexture===!0&&he.getTransfer(_.map.colorSpace)===be,decodeVideoTextureEmissive:Zt&&_.emissiveMap.isVideoTexture===!0&&he.getTransfer(_.emissiveMap.colorSpace)===be,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Be,flipSided:_.side===pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:oe&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&_.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ie.vertexUv1s=l.has(1),ie.vertexUv2s=l.has(2),ie.vertexUv3s=l.has(3),l.clear(),ie}function v(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)w.push(D),w.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(p(w,_),m(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function m(_,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function M(_){const w=d[_.type];let D;if(w){const C=ii[w];D=Am.clone(C.uniforms)}else D=_.uniforms;return D}function b(_,w){let D=h.get(w);return D!==void 0?++D.usedTimes:(D=new Ly(i,w,_,s),c.push(D),h.set(w,D)),D}function S(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function x(_){a.remove(_)}function T(){a.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:M,acquireProgram:b,releaseProgram:S,releaseShaderCache:x,programs:c,dispose:T}}function Oy(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ky(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function id(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function sd(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,v,p,m){let M=i[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:m},i[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=o(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=p,M.group=m),t++,M}function l(d,f,g,v,p,m,M){M.reversedDepth===!0&&(p=-p);const b=a(d,f,g,v,p,m);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):e.push(b)}function c(d,f,g,v,p,m){const M=a(d,f,g,v,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,f){e.length>1&&e.sort(d||ky),n.length>1&&n.sort(f||id),s.length>1&&s.sort(f||id)}function u(){for(let d=t,f=i.length;d<f;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function By(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new sd,i.set(n,[o])):s>=r.length?(o=new sd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function zy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new y,color:new Dt};break;case"SpotLight":e={position:new y,direction:new y,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new y,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new y,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new y,halfWidth:new y,halfHeight:new y};break}return i[t.id]=e,e}}}function Hy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Gy=0;function Vy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Wy(i){const t=new zy,e=Hy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new y);const s=new y,r=new Yt,o=new Yt;function a(c){let h=0,u=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,M=0,b=0,S=0,x=0,T=0,_=0,w=0,D=0,C=0;c.sort(Vy);for(let L=0,F=c.length;L<F;L++){const R=c[L],U=R.color,B=R.intensity,k=R.distance;let $=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===ls?$=R.shadow.map.texture:$=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=U.r*B,u+=U.g*B,d+=U.b*B;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],B);C++}else if(R.isSunLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,j=e.get(R);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=$;const Q=W.getViewportCount();for(let X=0;X<Q;X++)n.sunShadowMatrix[v+X]=W.getMatrix(X),n.sunShadowCascade[v+X]=W._cascadeData[X];v+=Q,g++}n.sun[f]=V,f++}else if(R.isDirectionalLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,j=e.get(R);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=R.shadow.matrix,x++}n.directional[p]=V,p++}else if(R.isSpotLight){const V=t.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(U).multiplyScalar(B),V.distance=k,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[M]=V;const W=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,W.updateMatrices(R),R.castShadow&&D++),n.spotLightMatrix[M]=W.matrix,R.castShadow){const j=e.get(R);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=$,_++}M++}else if(R.isRectAreaLight){const V=t.get(R);V.color.copy(U).multiplyScalar(B),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[b]=V,b++}else if(R.isPointLight){const V=t.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){const W=R.shadow,j=e.get(R);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=$,n.pointShadowMatrix[m]=R.shadow.matrix,T++}n.point[m]=V,m++}else if(R.isHemisphereLight){const V=t.get(R);V.skyColor.copy(R.color).multiplyScalar(B),V.groundColor.copy(R.groundColor).multiplyScalar(B),n.hemi[S]=V,S++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pt.LTC_FLOAT_1,n.rectAreaLTC2=Pt.LTC_FLOAT_2):(n.rectAreaLTC1=Pt.LTC_HALF_1,n.rectAreaLTC2=Pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.sunLength!==f||I.directionalLength!==p||I.pointLength!==m||I.spotLength!==M||I.rectAreaLength!==b||I.hemiLength!==S||I.numSunShadows!==g||I.numDirectionalShadows!==x||I.numPointShadows!==T||I.numSpotShadows!==_||I.numSpotMaps!==w||I.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=b,n.point.length=m,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.directionalShadowMatrix.length=x,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+w-D,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=C,I.sunLength=f,I.directionalLength=p,I.pointLength=m,I.spotLength=M,I.rectAreaLength=b,I.hemiLength=S,I.numSunShadows=g,I.numDirectionalShadows=x,I.numPointShadows=T,I.numSpotShadows=_,I.numSpotMaps=w,I.numLightProbes=C,n.version=Gy++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,p=0;const m=h.matrixWorldInverse;for(let M=0,b=c.length;M<b;M++){const S=c[M];if(S.isSunLight){const x=n.sun[u];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),u++}else if(S.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(S.isSpotLight){const x=n.spot[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),g++}else if(S.isRectAreaLight){const x=n.rectArea[v];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const x=n.hemi[p];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function rd(i){const t=new Wy(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Xy(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new rd(i),t.set(s,[a])):r>=o.length?(a=new rd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const qy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yy=`uniform sampler2D shadow_pass;
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
}`,Ky=[new y(1,0,0),new y(-1,0,0),new y(0,1,0),new y(0,-1,0),new y(0,0,1),new y(0,0,-1)],Zy=[new y(0,-1,0),new y(0,-1,0),new y(0,0,1),new y(0,0,-1),new y(0,-1,0),new y(0,-1,0)],od=new Yt,sr=new y,ll=new y;function $y(i,t,e){let n=new Or;const s=new Ft,r=new Ft,o=new Ae,a=new Bf,l=new Lm,c={},h=e.maxTextureSize,u={[Vi]:pn,[pn]:Vi,[Be]:Be},d=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:qy,fragmentShader:Yy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new pe(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sr;let m=this.type;this.render=function(T,_,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Qp&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sr);const D=i.getRenderTarget(),C=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Is),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=m!==this.type;F&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(U=>U.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,U=T.length;R<U;R++){const B=T[R],k=B.shadow;if(k===void 0){Xt("WebGLShadowMap:",B,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const $=k.getFrameExtents();s.multiply($),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,k.mapSize.y=r.y));const V=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=V,k.map===null||F===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===mr){if(B.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new an(s.x,s.y,{format:ls,type:yn,minFilter:je,magFilter:je,generateMipmaps:!1}),k.map.texture.name=B.name+".shadowMap",k.map.depthTexture=new cs(s.x,s.y,Nn),k.map.depthTexture.name=B.name+".shadowMapDepth",k.map.depthTexture.format=Wi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ue,k.map.depthTexture.magFilter=Ue}else B.isPointLight?(k.map=new fh(s.x),k.map.depthTexture=new Ff(s.x,qn)):(k.map=new an(s.x,s.y),k.map.depthTexture=new cs(s.x,s.y,qn)),k.map.depthTexture.name=B.name+".shadowMap",k.map.depthTexture.format=Wi,this.type===Sr?(k.map.depthTexture.compareFunction=V?Ef:wf,k.map.depthTexture.minFilter=je,k.map.depthTexture.magFilter=je):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ue,k.map.depthTexture.magFilter=Ue);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);const W=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();B.isPointLight!==!0&&k.updateMatrices(B,w);const j=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:w.layers;for(let Q=0;Q<W;Q++){const X=k.getCamera(Q);if(B.isPointLight){const N=k.camera,Y=k.matrix,G=B.distance||N.far;G!==N.far&&(N.far=G,N.updateProjectionMatrix()),sr.setFromMatrixPosition(B.matrixWorld),N.position.copy(sr),ll.copy(N.position),ll.add(Ky[Q]),N.up.copy(Zy[Q]),N.lookAt(ll),N.updateMatrixWorld(),Y.makeTranslation(-sr.x,-sr.y,-sr.z),od.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),k._frustum.setFromProjectionMatrix(od,N.coordinateSystem,N.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(k.map),i.clear());const N=k.getViewport(Q);o.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),L.viewport(o)}n=k.getFrustum(Q),S(_,w,X,B,j,this.type)}k.isPointLightShadow!==!0&&this.type===mr&&M(k,w),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(D,C,I)};function M(T,_){const w=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new an(s.x,s.y,{format:ls,type:yn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(_,null,w,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(_,null,w,f,v,null)}function b(T,_,w,D){let C=null;const I=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)C=I;else if(C=w.isPointLight===!0?l:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const L=C.uuid,F=_.uuid;let R=c[L];R===void 0&&(R={},c[L]=R);let U=R[F];U===void 0&&(U=C.clone(),R[F]=U,_.addEventListener("dispose",x)),C=U}if(C.visible=_.visible,C.wireframe=_.wireframe,D===mr?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:u[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,w.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const L=i.properties.get(C);L.light=w}return C}function S(T,_,w,D,C,I){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===mr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const R=t.update(T),U=T.material;if(Array.isArray(U)){const B=R.groups;for(let k=0,$=B.length;k<$;k++){const V=B[k],W=U[V.materialIndex];if(W&&W.visible){const j=b(T,W,D,I);T.onBeforeShadow(i,T,_,w,R,j,V),i.renderBufferDirect(w,null,R,j,T,V),T.onAfterShadow(i,T,_,w,R,j,V)}}}else if(U.visible){const B=b(T,U,D,I);T.onBeforeShadow(i,T,_,w,R,B,null),i.renderBufferDirect(w,null,R,B,T,null),T.onAfterShadow(i,T,_,w,R,B,null)}}const F=T.children;for(let R=0,U=F.length;R<U;R++)S(F[R],_,w,D,C,I)}function x(T){T.target.removeEventListener("dispose",x);for(const w in c){const D=c[w],C=T.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function Jy(i,t){function e(){let O=!1;const lt=new Ae;let et=null;const St=new Ae(0,0,0,0);return{setMask:function(vt){et!==vt&&!O&&(i.colorMask(vt,vt,vt,vt),et=vt)},setLocked:function(vt){O=vt},setClear:function(vt,yt,qt,oe,pt){pt===!0&&(vt*=oe,yt*=oe,qt*=oe),lt.set(vt,yt,qt,oe),St.equals(lt)===!1&&(i.clearColor(vt,yt,qt,oe),St.copy(lt))},reset:function(){O=!1,et=null,St.set(-1,0,0,0)}}}function n(){let O=!1,lt=!1,et=null,St=null,vt=null;return{setReversed:function(yt){if(lt!==yt){const qt=t.get("EXT_clip_control");yt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),lt=yt;const oe=vt;vt=null,this.setClear(oe)}},getReversed:function(){return lt},setTest:function(yt){yt?Z(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(yt){et!==yt&&!O&&(i.depthMask(yt),et=yt)},setFunc:function(yt){if(lt&&(yt=U0[yt]),St!==yt){switch(yt){case Ul:i.depthFunc(i.NEVER);break;case Fl:i.depthFunc(i.ALWAYS);break;case Ol:i.depthFunc(i.LESS);break;case Pr:i.depthFunc(i.LEQUAL);break;case kl:i.depthFunc(i.EQUAL);break;case Bl:i.depthFunc(i.GEQUAL);break;case zl:i.depthFunc(i.GREATER);break;case Hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=yt}},setLocked:function(yt){O=yt},setClear:function(yt){vt!==yt&&(vt=yt,lt&&(yt=1-yt),i.clearDepth(yt))},reset:function(){O=!1,et=null,St=null,vt=null,lt=!1}}}function s(){let O=!1,lt=null,et=null,St=null,vt=null,yt=null,qt=null,oe=null,pt=null;return{setTest:function(Kt){O||(Kt?Z(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(Kt){lt!==Kt&&!O&&(i.stencilMask(Kt),lt=Kt)},setFunc:function(Kt,ie,Ct){(et!==Kt||St!==ie||vt!==Ct)&&(i.stencilFunc(Kt,ie,Ct),et=Kt,St=ie,vt=Ct)},setOp:function(Kt,ie,Ct){(yt!==Kt||qt!==ie||oe!==Ct)&&(i.stencilOp(Kt,ie,Ct),yt=Kt,qt=ie,oe=Ct)},setLocked:function(Kt){O=Kt},setClear:function(Kt){pt!==Kt&&(i.clearStencil(Kt),pt=Kt)},reset:function(){O=!1,lt=null,et=null,St=null,vt=null,yt=null,qt=null,oe=null,pt=null}}}const r=new e,o=new n,a=new s;let l={};const c=new WeakMap;let h={},u={},d={},f=new WeakMap,g=[],v=null,p=!1,m=null,M=null,b=null,S=null,x=null,T=null,_=null,w=new Dt(0,0,0),D=0,C=!1,I=null,L=null,F=null,R=null,U=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,$=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=$>=2);let W=null,j={};const Q=i.getParameter(i.SCISSOR_BOX),X=i.getParameter(i.VIEWPORT),N=new Ae().fromArray(Q),Y=new Ae().fromArray(X);function G(O,lt,et,St){const vt=new Uint8Array(4),yt=i.createTexture();i.bindTexture(O,yt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<et;qt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(lt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return yt}const st={};st[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(Pr),jt(!1),dt(Bh),Z(i.CULL_FACE),ue(Is);function Z(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ut(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function mt(O,lt){return d[O]!==lt?(i.bindFramebuffer(O,lt),d[O]=lt,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=lt),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function at(O,lt){let et=g,St=!1;if(O){et=f.get(lt),et===void 0&&(et=[],f.set(lt,et));const vt=O.textures;if(et.length!==vt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,qt=vt.length;yt<qt;yt++)et[yt]=i.COLOR_ATTACHMENT0+yt;et.length=vt.length,St=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,St=!0);St&&i.drawBuffers(et)}function Tt(O){return v!==O?(i.useProgram(O),v=O,!0):!1}const Gt={[Rs]:i.FUNC_ADD,[e0]:i.FUNC_SUBTRACT,[n0]:i.FUNC_REVERSE_SUBTRACT};Gt[i0]=i.MIN,Gt[s0]=i.MAX;const kt={[r0]:i.ZERO,[o0]:i.ONE,[a0]:i.SRC_COLOR,[cf]:i.SRC_ALPHA,[f0]:i.SRC_ALPHA_SATURATE,[u0]:i.DST_COLOR,[c0]:i.DST_ALPHA,[l0]:i.ONE_MINUS_SRC_COLOR,[hf]:i.ONE_MINUS_SRC_ALPHA,[d0]:i.ONE_MINUS_DST_COLOR,[h0]:i.ONE_MINUS_DST_ALPHA,[p0]:i.CONSTANT_COLOR,[m0]:i.ONE_MINUS_CONSTANT_COLOR,[g0]:i.CONSTANT_ALPHA,[_0]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(O,lt,et,St,vt,yt,qt,oe,pt,Kt){if(O===Is){p===!0&&(ut(i.BLEND),p=!1);return}if(p===!1&&(Z(i.BLEND),p=!0),O!==t0){if(O!==m||Kt!==C){if((M!==Rs||x!==Rs)&&(i.blendEquation(i.FUNC_ADD),M=Rs,x=Rs),Kt)switch(O){case br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nl:i.blendFunc(i.ONE,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",O);break}else switch(O){case br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zh:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hh:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",O);break}b=null,S=null,T=null,_=null,w.set(0,0,0),D=0,m=O,C=Kt}return}vt=vt||lt,yt=yt||et,qt=qt||St,(lt!==M||vt!==x)&&(i.blendEquationSeparate(Gt[lt],Gt[vt]),M=lt,x=vt),(et!==b||St!==S||yt!==T||qt!==_)&&(i.blendFuncSeparate(kt[et],kt[St],kt[yt],kt[qt]),b=et,S=St,T=yt,_=qt),(oe.equals(w)===!1||pt!==D)&&(i.blendColor(oe.r,oe.g,oe.b,pt),w.copy(oe),D=pt),m=O,C=!1}function Wt(O,lt){O.side===Be?ut(i.CULL_FACE):Z(i.CULL_FACE);let et=O.side===pn;lt&&(et=!et),jt(et),O.blending===br&&O.transparent===!1?ue(Is):ue(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const St=O.stencilWrite;a.setTest(St),St&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Zt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function jt(O){I!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),I=O)}function dt(O){O!==Jp?(Z(i.CULL_FACE),O!==L&&(O===Bh?i.cullFace(i.BACK):O===jp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),L=O}function nt(O){O!==F&&(k&&i.lineWidth(O),F=O)}function Zt(O,lt,et){O?(Z(i.POLYGON_OFFSET_FILL),(R!==lt||U!==et)&&(R=lt,U=et,o.getReversed()&&(lt=-lt,et=-et),i.polygonOffset(lt,et))):ut(i.POLYGON_OFFSET_FILL)}function Jt(O){O?Z(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function me(O){O===void 0&&(O=i.TEXTURE0+B-1),W!==O&&(i.activeTexture(O),W=O)}function re(O,lt,et){et===void 0&&(W===null?et=i.TEXTURE0+B-1:et=W);let St=j[et];St===void 0&&(St={type:void 0,texture:void 0},j[et]=St),(St.type!==O||St.texture!==lt)&&(W!==et&&(i.activeTexture(et),W=et),i.bindTexture(O,lt||st[O]),St.type=O,St.texture=lt)}function z(){const O=j[W];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Ee(){try{i.compressedTexImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function ce(){try{i.compressedTexImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function ve(){try{i.texSubImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function _t(){try{i.texSubImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Ht(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function At(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function Nt(){try{i.texStorage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function P(){try{i.texStorage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function E(){try{i.texImage2D(...arguments)}catch(O){Qt("WebGLState:",O)}}function q(){try{i.texImage3D(...arguments)}catch(O){Qt("WebGLState:",O)}}function ft(O){return u[O]!==void 0?u[O]:i.getParameter(O)}function ht(O,lt){u[O]!==lt&&(i.pixelStorei(O,lt),u[O]=lt)}function xt(O){N.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),N.copy(O))}function wt(O){Y.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Y.copy(O))}function rt(O,lt){let et=c.get(lt);et===void 0&&(et=new WeakMap,c.set(lt,et));let St=et.get(O);St===void 0&&(St=i.getUniformBlockIndex(lt,O.name),i.uniformBlockBinding(lt,St,St),et.set(O,St))}function ot(O,lt,et){const vt=c.get(lt).get(O);l[vt]!==et&&(i.bindBufferBase(i.UNIFORM_BUFFER,vt,et),l[vt]=et)}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},W=null,j={},d={},l={},f=new WeakMap,g=[],v=null,p=!1,m=null,M=null,b=null,S=null,x=null,T=null,_=null,w=new Dt(0,0,0),D=0,C=!1,I=null,L=null,F=null,R=null,U=null,N.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:ut,bindFramebuffer:mt,drawBuffers:at,useProgram:Tt,setBlending:ue,setMaterial:Wt,setFlipSided:jt,setCullFace:dt,setLineWidth:nt,setPolygonOffset:Zt,setScissorTest:Jt,activeTexture:me,bindTexture:re,unbindTexture:z,compressedTexImage2D:Ee,compressedTexImage3D:ce,texImage2D:E,texImage3D:q,pixelStorei:ht,getParameter:ft,updateUBOMapping:rt,uniformBlockBinding:ot,texStorage2D:Nt,texStorage3D:P,texSubImage2D:ve,texSubImage3D:_t,compressedTexSubImage2D:Ht,compressedTexSubImage3D:At,scissor:xt,viewport:wt,reset:Mt}}function jy(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,h=new WeakMap,u=new Set;let d;const f=new WeakMap,g=new Set,v=new FinalizationRegistry(P=>g.delete(P));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,E){return p?new OffscreenCanvas(P,E):Fr("canvas")}function M(P,E,q){let ft=1;const ht=Nt(P);if((ht.width>q||ht.height>q)&&(ft=q/Math.max(ht.width,ht.height)),ft<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const xt=Math.floor(ft*ht.width),wt=Math.floor(ft*ht.height);d===void 0&&(d=m(xt,wt));const rt=E?m(xt,wt):d;return rt.width=xt,rt.height=wt,rt.getContext("2d").drawImage(P,0,0,xt,wt),Xt("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+xt+"x"+wt+")."),rt}else return"data"in P&&Xt("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),P;return P}function b(P){return P.generateMipmaps}function S(P){i.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(P,E,q,ft,ht,xt=!1){if(P!==null){if(i[P]!==void 0)return i[P];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let wt;ft&&(wt=t.get("EXT_texture_norm16"),wt||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=E;if(E===i.RED&&(q===i.FLOAT&&(rt=i.R32F),q===i.HALF_FLOAT&&(rt=i.R16F),q===i.UNSIGNED_BYTE&&(rt=i.R8),q===i.UNSIGNED_SHORT&&wt&&(rt=wt.R16_EXT),q===i.SHORT&&wt&&(rt=wt.R16_SNORM_EXT)),E===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(rt=i.R8UI),q===i.UNSIGNED_SHORT&&(rt=i.R16UI),q===i.UNSIGNED_INT&&(rt=i.R32UI),q===i.BYTE&&(rt=i.R8I),q===i.SHORT&&(rt=i.R16I),q===i.INT&&(rt=i.R32I)),E===i.RG&&(q===i.FLOAT&&(rt=i.RG32F),q===i.HALF_FLOAT&&(rt=i.RG16F),q===i.UNSIGNED_BYTE&&(rt=i.RG8),q===i.UNSIGNED_SHORT&&wt&&(rt=wt.RG16_EXT),q===i.SHORT&&wt&&(rt=wt.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(rt=i.RG8UI),q===i.UNSIGNED_SHORT&&(rt=i.RG16UI),q===i.UNSIGNED_INT&&(rt=i.RG32UI),q===i.BYTE&&(rt=i.RG8I),q===i.SHORT&&(rt=i.RG16I),q===i.INT&&(rt=i.RG32I)),E===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),q===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),q===i.UNSIGNED_INT&&(rt=i.RGB32UI),q===i.BYTE&&(rt=i.RGB8I),q===i.SHORT&&(rt=i.RGB16I),q===i.INT&&(rt=i.RGB32I)),E===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),q===i.UNSIGNED_INT&&(rt=i.RGBA32UI),q===i.BYTE&&(rt=i.RGBA8I),q===i.SHORT&&(rt=i.RGBA16I),q===i.INT&&(rt=i.RGBA32I)),E===i.RGB&&(q===i.UNSIGNED_SHORT&&wt&&(rt=wt.RGB16_EXT),q===i.SHORT&&wt&&(rt=wt.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(rt=i.R11F_G11F_B10F)),E===i.RGBA){const ot=xt?ia:he.getTransfer(ht);q===i.FLOAT&&(rt=i.RGBA32F),q===i.HALF_FLOAT&&(rt=i.RGBA16F),q===i.UNSIGNED_BYTE&&(rt=ot===be?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&wt&&(rt=wt.RGBA16_EXT),q===i.SHORT&&wt&&(rt=wt.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function _(P,E){let q;return P?E===null||E===qn||E===Os?q=i.DEPTH24_STENCIL8:E===Nn?q=i.DEPTH32F_STENCIL8:E===Ir&&(q=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qn||E===Os?q=i.DEPTH_COMPONENT24:E===Nn?q=i.DEPTH_COMPONENT32F:E===Ir&&(q=i.DEPTH_COMPONENT16),q}function w(P,E){return b(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ue&&P.minFilter!==je?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function D(P){const E=new WeakRef(P);n.get(P).__ref=E,g.add(E),v.register(P,E,E)}function C(P){const E=n.get(P).__ref;E!==void 0&&(g.delete(E),v.unregister(E))}function I(P){F(P.target)}function L(P){R(P.target)}function F(P){P.removeEventListener("dispose",I),C(P),B(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&u.delete(P)}function R(P){P.removeEventListener("dispose",L),C(P),$(P)}function U(){for(const P of g){const E=P.deref();E!==void 0&&(E.isRenderTarget===!0?R(E):F(E))}g.clear(),u.clear()}function B(P){const E=n.get(P);if(E.__webglInit===void 0)return;const q=P.source,ft=f.get(q);if(ft){const ht=ft[E.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&k(P),Object.keys(ft).length===0&&f.delete(q)}n.remove(P)}function k(P){const E=n.get(P);i.deleteTexture(E.__webglTexture);const q=P.source,ft=f.get(q);delete ft[E.__cacheKey],o.memory.textures--}function $(P){const E=n.get(P);E.__depthDisposeCallback&&E.__depthDisposeCallback();const q=P.depthTexture;if(q&&q.renderTarget===P&&F(q),P.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let xt=0;xt<E.__webglFramebuffer[ht].length;xt++)i.deleteFramebuffer(E.__webglFramebuffer[ht][xt]);else i.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)i.deleteFramebuffer(E.__webglFramebuffer[ht]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ft=P.textures;for(let ht=0,xt=ft.length;ht<xt;ht++){const wt=n.get(ft[ht]);wt.__webglTexture&&(i.deleteTexture(wt.__webglTexture),o.memory.textures--),n.remove(ft[ht])}n.remove(P)}let V=0;function W(){V=0}function j(){return V}function Q(P){V=P}function X(){const P=V;return P>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,P}function N(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.mipmapsAutoUpdate),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function Y(P,E){const q=n.get(P);if(P.isVideoTexture&&Ht(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){const ft=P.image;if(ft===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(q,P,E);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+E)}function G(P,E){const q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){Wt(q,P,E);return}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+E)}function st(P,E){const q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){Wt(q,P,E);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+E)}function Z(P,E){const q=n.get(P);if(P.version>0&&q.__version!==P.version){jt(q,P,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+E)}const ut={[as]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[ta]:i.MIRRORED_REPEAT},mt={[Ue]:i.NEAREST,[gf]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[je]:i.LINEAR,[Go]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},at={[T0]:i.NEVER,[Tf]:i.ALWAYS,[A0]:i.LESS,[wf]:i.LEQUAL,[R0]:i.EQUAL,[Ef]:i.GEQUAL,[C0]:i.GREATER,[P0]:i.NOTEQUAL};function Tt(P,E){if(E.type===Nn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===je||E.magFilter===Go||E.magFilter===gr||E.magFilter===ri||E.minFilter===je||E.minFilter===Go||E.minFilter===gr||E.minFilter===ri)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ut[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ut[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ut[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,mt[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,mt[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,at[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ue||E.minFilter!==gr&&E.minFilter!==ri||E.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Gt(P,E){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",I),D(E));const ft=E.source;let ht=f.get(ft);ht===void 0&&(ht={},f.set(ft,ht));const xt=N(E);if(xt!==P.__cacheKey){ht[xt]===void 0&&(ht[xt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ht[xt].usedTimes++;const wt=ht[P.__cacheKey];wt!==void 0&&(ht[P.__cacheKey].usedTimes--,wt.usedTimes===0&&k(E)),P.__cacheKey=xt,P.__webglTexture=ht[xt].texture}return q}function kt(P,E,q){return Math.floor(Math.floor(P/q)/E)}function ue(P,E,q,ft){const xt=P.updateRanges;if(xt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,q,ft,E.data);else{xt.sort((O,lt)=>O.start-lt.start);let wt=0;for(let O=1;O<xt.length;O++){const lt=xt[wt],et=xt[O],St=lt.start+lt.count,vt=kt(et.start,E.width,4),yt=kt(lt.start,E.width,4);et.start<=St+1&&vt===yt&&kt(et.start+et.count-1,E.width,4)===vt?lt.count=Math.max(lt.count,et.start+et.count-lt.start):(++wt,xt[wt]=et)}xt.length=wt+1;const rt=e.getParameter(i.UNPACK_ROW_LENGTH),ot=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let O=0,lt=xt.length;O<lt;O++){const et=xt[O],St=Math.floor(et.start/4),vt=Math.ceil(et.count/4),yt=St%E.width,qt=Math.floor(St/E.width),oe=vt,pt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(i.UNPACK_SKIP_ROWS,qt),e.texSubImage2D(i.TEXTURE_2D,0,yt,qt,oe,pt,q,ft,E.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,rt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function Wt(P,E,q){let ft=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ft=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ft=i.TEXTURE_3D);const ht=Gt(P,E),xt=E.source;e.bindTexture(ft,P.__webglTexture,i.TEXTURE0+q);const wt=n.get(xt);if(xt.version!==wt.__version||ht===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const pt=he.getPrimaries(he.workingColorSpace),Kt=E.colorSpace===zi?null:he.getPrimaries(E.colorSpace),ie=E.colorSpace===zi||pt===Kt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let ot=M(E.image,!1,s.maxTextureSize);ot=At(E,ot);const Mt=r.convert(E.format,E.colorSpace),O=r.convert(E.type);let lt=T(E.internalFormat,Mt,O,E.normalized,E.colorSpace,E.isVideoTexture);Tt(ft,E);let et;const St=E.mipmaps,vt=E.isVideoTexture!==!0,yt=wt.__version===void 0||ht===!0,qt=xt.dataReady,oe=w(E,ot);if(E.isDepthTexture)lt=_(E.format===Gi,E.type),yt&&(vt?e.texStorage2D(i.TEXTURE_2D,1,lt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,lt,ot.width,ot.height,0,Mt,O,null));else if(E.isDataTexture)if(St.length>0){vt&&yt&&e.texStorage2D(i.TEXTURE_2D,oe,lt,St[0].width,St[0].height);for(let pt=0,Kt=St.length;pt<Kt;pt++)et=St[pt],vt?qt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,et.width,et.height,Mt,O,et.data):e.texImage2D(i.TEXTURE_2D,pt,lt,et.width,et.height,0,Mt,O,et.data);E.generateMipmaps=!1}else vt?(yt&&e.texStorage2D(i.TEXTURE_2D,oe,lt,ot.width,ot.height),qt&&ue(E,ot,Mt,O)):e.texImage2D(i.TEXTURE_2D,0,lt,ot.width,ot.height,0,Mt,O,ot.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){vt&&yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,oe,lt,St[0].width,St[0].height,ot.depth);for(let pt=0,Kt=St.length;pt<Kt;pt++)if(et=St[pt],E.format!==Vn)if(Mt!==null)if(vt){if(qt)if(E.layerUpdates.size>0){const ie=Bu(et.width,et.height,E.format,E.type);for(const Ct of E.layerUpdates){const Se=et.data.subarray(Ct*ie/et.data.BYTES_PER_ELEMENT,(Ct+1)*ie/et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,Ct,et.width,et.height,1,Mt,Se)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,et.width,et.height,ot.depth,Mt,et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,lt,et.width,et.height,ot.depth,0,et.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vt?qt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,et.width,et.height,ot.depth,Mt,O,et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,lt,et.width,et.height,ot.depth,0,Mt,O,et.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{vt&&yt&&e.texStorage2D(i.TEXTURE_2D,oe,lt,St[0].width,St[0].height);for(let pt=0,Kt=St.length;pt<Kt;pt++)et=St[pt],E.format!==Vn?Mt!==null?vt?qt&&e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,et.width,et.height,Mt,et.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,lt,et.width,et.height,0,et.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?qt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,et.width,et.height,Mt,O,et.data):e.texImage2D(i.TEXTURE_2D,pt,lt,et.width,et.height,0,Mt,O,et.data)}else if(E.isDataArrayTexture)if(vt){if(yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,oe,lt,ot.width,ot.height,ot.depth),qt)if(E.layerUpdates.size>0){const pt=Bu(ot.width,ot.height,E.format,E.type);for(const Kt of E.layerUpdates){const ie=ot.data.subarray(Kt*pt/ot.data.BYTES_PER_ELEMENT,(Kt+1)*pt/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Kt,ot.width,ot.height,1,Mt,O,ie)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Mt,O,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,ot.width,ot.height,ot.depth,0,Mt,O,ot.data);else if(E.isData3DTexture)vt?(yt&&e.texStorage3D(i.TEXTURE_3D,oe,lt,ot.width,ot.height,ot.depth),qt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Mt,O,ot.data)):e.texImage3D(i.TEXTURE_3D,0,lt,ot.width,ot.height,ot.depth,0,Mt,O,ot.data);else if(E.isFramebufferTexture){if(yt)if(vt)e.texStorage2D(i.TEXTURE_2D,oe,lt,ot.width,ot.height);else{let pt=ot.width,Kt=ot.height;for(let ie=0;ie<oe;ie++)e.texImage2D(i.TEXTURE_2D,ie,lt,pt,Kt,0,Mt,O,null),pt>>=1,Kt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){const pt=i.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),ot.parentNode!==pt){pt.appendChild(ot),u.add(E),pt.onpaint=Kt=>{const ie=Kt.changedElements;for(const Ct of u)ie.includes(Ct.image)&&(Ct.needsUpdate=!0)},pt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ot);else{const ie=i.RGBA,Ct=i.RGBA,Se=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ie,Ct,Se,ot)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(St.length>0){if(vt&&yt){const pt=Nt(St[0]);e.texStorage2D(i.TEXTURE_2D,oe,lt,pt.width,pt.height)}for(let pt=0,Kt=St.length;pt<Kt;pt++)et=St[pt],vt?qt&&e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Mt,O,et):e.texImage2D(i.TEXTURE_2D,pt,lt,Mt,O,et);E.generateMipmaps=!1}else if(vt){if(yt){const pt=Nt(ot);e.texStorage2D(i.TEXTURE_2D,oe,lt,pt.width,pt.height)}qt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,O,ot)}else e.texImage2D(i.TEXTURE_2D,0,lt,Mt,O,ot);b(E)&&E.mipmapsAutoUpdate===!0&&S(ft),wt.__version=xt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function jt(P,E,q){if(E.image.length!==6)return;const ft=Gt(P,E),ht=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);const xt=n.get(ht);if(ht.version!==xt.__version||ft===!0){e.activeTexture(i.TEXTURE0+q);const wt=he.getPrimaries(he.workingColorSpace),rt=E.colorSpace===zi?null:he.getPrimaries(E.colorSpace),ot=E.colorSpace===zi||wt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);const Mt=E.isCompressedTexture||E.image[0].isCompressedTexture,O=E.image[0]&&E.image[0].isDataTexture,lt=[];for(let Ct=0;Ct<6;Ct++)!Mt&&!O?lt[Ct]=M(E.image[Ct],!0,s.maxCubemapSize):lt[Ct]=O?E.image[Ct].image:E.image[Ct],lt[Ct]=At(E,lt[Ct]);const et=lt[0],St=r.convert(E.format,E.colorSpace),vt=r.convert(E.type);let yt=T(E.internalFormat,St,vt,E.normalized,E.colorSpace);const qt=E.isVideoTexture!==!0,oe=xt.__version===void 0||ft===!0,pt=ht.dataReady;let Kt=w(E,et);Tt(i.TEXTURE_CUBE_MAP,E);let ie;if(E.isDepthTexture){if(yt=_(E.format===Gi,E.type),oe)if(qt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,yt,et.width,et.height);else for(let Ct=0;Ct<6;Ct++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,yt,et.width,et.height,0,St,vt,null)}else if(Mt){qt&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Kt,yt,et.width,et.height);for(let Ct=0;Ct<6;Ct++){ie=lt[Ct].mipmaps;for(let Se=0;Se<ie.length;Se++){const Ze=ie[Se];E.format!==Vn?St!==null?qt?pt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Se,0,0,Ze.width,Ze.height,St,Ze.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Se,yt,Ze.width,Ze.height,0,Ze.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Se,0,0,Ze.width,Ze.height,St,vt,Ze.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Se,yt,Ze.width,Ze.height,0,St,vt,Ze.data)}}}else{if(ie=E.mipmaps,qt&&oe){ie.length>0&&Kt++;const Ct=Nt(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Kt,yt,Ct.width,Ct.height)}for(let Ct=0;Ct<6;Ct++)if(O){qt?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,lt[Ct].width,lt[Ct].height,St,vt,lt[Ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,yt,lt[Ct].width,lt[Ct].height,0,St,vt,lt[Ct].data);for(let Se=0;Se<ie.length;Se++){const Ai=ie[Se].image[Ct].image;qt?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Se+1,0,0,Ai.width,Ai.height,St,vt,Ai.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Se+1,yt,Ai.width,Ai.height,0,St,vt,Ai.data)}}else{qt?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,0,0,St,vt,lt[Ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,yt,St,vt,lt[Ct]);for(let Se=0;Se<ie.length;Se++){const Ze=ie[Se];qt?pt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Se+1,0,0,St,vt,Ze.image[Ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Se+1,yt,St,vt,Ze.image[Ct])}}}b(E)&&E.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),xt.__version=ht.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function dt(P,E,q,ft,ht,xt){const wt=r.convert(q.format,q.colorSpace),rt=r.convert(q.type),ot=T(q.internalFormat,wt,rt,q.normalized,q.colorSpace),Mt=n.get(E),O=n.get(q);if(O.__renderTarget=E,!Mt.__hasExternalTextures){const lt=Math.max(1,E.width>>xt),et=Math.max(1,E.height>>xt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,xt,ot,lt,et,E.depth,0,wt,rt,null):e.texImage2D(ht,xt,ot,lt,et,0,wt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),_t(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,ht,O.__webglTexture,0,ve(E)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ft,ht,O.__webglTexture,xt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(P,E,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){const ft=E.depthTexture,ht=ft&&ft.isDepthTexture?ft.type:null,xt=_(E.stencilBuffer,ht),wt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;_t(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(E),xt,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(E),xt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,xt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,wt,i.RENDERBUFFER,P)}else{const ft=E.textures;for(let ht=0;ht<ft.length;ht++){const xt=ft[ht],wt=r.convert(xt.format,xt.colorSpace),rt=r.convert(xt.type),ot=T(xt.internalFormat,wt,rt,xt.normalized,xt.colorSpace);_t(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve(E),ot,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve(E),ot,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ot,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Zt(P,E,q){const ft=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ht=n.get(E.depthTexture);ht.__renderTarget=E;const xt=ft?E.depthTexture.image[0]:E.depthTexture.image;(!ht.__webglTexture||xt.width!==E.width||xt.height!==E.height)&&(xt.width=E.width,xt.height=E.height,E.depthTexture.needsUpdate=!0),ft?Z(E.depthTexture,0):Y(E.depthTexture,0);const wt=ht.__webglTexture,rt=ve(E),ot=ft?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,Mt=E.depthTexture.format===Gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Wi)_t(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,ot,wt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,ot,wt,0);else if(E.depthTexture.format===Gi)_t(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,ot,wt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,ot,wt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Jt(P){const E=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ft=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ft){const ht=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ft.removeEventListener("dispose",ht)};ft.addEventListener("dispose",ht),E.__depthDisposeCallback=ht}E.__boundDepthTexture=ft}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let ft=0;ft<6;ft++)Zt(E.__webglFramebuffer[ft],P,ft);else P.texture.mipmaps.length>0?Zt(E.__webglFramebuffer[0],P,0):Zt(E.__webglFramebuffer,P,0);else if(q){E.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ft]),E.__webglDepthbuffer[ft]===void 0)E.__webglDepthbuffer[ft]=i.createRenderbuffer(),nt(E.__webglDepthbuffer[ft],P,!1);else{const ht=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=E.__webglDepthbuffer[ft];i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,xt)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),nt(E.__webglDepthbuffer,P,!1);else{const ht=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,xt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function me(P,E,q){const ft=n.get(P);E!==void 0&&dt(ft.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Jt(P)}function re(P){const E=P.texture,q=n.get(P),ft=n.get(E);P.addEventListener("dispose",L),D(P);const ht=P.textures,xt=P.isWebGLCubeRenderTarget===!0,wt=ht.length>1;if(wt||(ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture()),ft.__version=E.version,o.memory.textures++),xt){q.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(E.mipmaps.length>0){q.__webglFramebuffer[rt]=[];for(let ot=0;ot<E.mipmaps.length;ot++)q.__webglFramebuffer[rt][ot]=i.createFramebuffer()}else q.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(E.mipmaps.length>0){q.__webglFramebuffer=[];for(let rt=0;rt<E.mipmaps.length;rt++)q.__webglFramebuffer[rt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(wt)for(let rt=0,ot=ht.length;rt<ot;rt++){const Mt=n.get(ht[rt]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&_t(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let rt=0;rt<ht.length;rt++){const ot=ht[rt];q.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[rt]);const Mt=r.convert(ot.format,ot.colorSpace),O=r.convert(ot.type),lt=T(ot.internalFormat,Mt,O,ot.normalized,ot.colorSpace,P.isXRRenderTarget===!0),et=ve(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,et,lt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,q.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xt){e.bindTexture(i.TEXTURE_CUBE_MAP,ft.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,E);for(let rt=0;rt<6;rt++)if(E.mipmaps.length>0)for(let ot=0;ot<E.mipmaps.length;ot++)dt(q.__webglFramebuffer[rt][ot],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ot);else dt(q.__webglFramebuffer[rt],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);b(E)?S(i.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}else if(wt){for(let rt=0,ot=ht.length;rt<ot;rt++){const Mt=ht[rt],O=n.get(Mt);let lt=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(lt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,O.__webglTexture),Tt(lt,Mt),dt(q.__webglFramebuffer,P,Mt,i.COLOR_ATTACHMENT0+rt,lt,0),b(Mt)&&S(lt)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(rt=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,ft.__webglTexture),Tt(rt,E),E.mipmaps.length>0)for(let ot=0;ot<E.mipmaps.length;ot++)dt(q.__webglFramebuffer[ot],P,E,i.COLOR_ATTACHMENT0,rt,ot);else dt(q.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,rt,0);b(E)?S(rt):E.mipmaps.length>0&&i.texParameteri(rt,i.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&Jt(P)}function z(P){const E=P.textures;for(let q=0,ft=E.length;q<ft;q++){const ht=E[q];if(b(ht)&&ht.mipmapsAutoUpdate===!0){const xt=x(P),wt=n.get(ht).__webglTexture;e.bindTexture(xt,wt),S(xt),e.unbindTexture()}}}const Ee=[];function ce(P){if(P.samples>0){if(_t(P)===!1){const E=P.textures,q=P.width,ft=P.height;let ht=i.COLOR_BUFFER_BIT;const xt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,wt=n.get(P),rt=E.length>1;if(rt)for(let Mt=0;Mt<E.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Mt=0;Mt<E.length;Mt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Mt]);const O=n.get(E[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,O,0)}i.blitFramebuffer(0,0,q,ft,0,0,q,ft,ht,i.NEAREST),l===!0&&(Ee.length=0,Ee.push(i.COLOR_ATTACHMENT0+Mt),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Ee.push(xt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ee))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let Mt=0;Mt<E.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,wt.__webglColorRenderbuffer[Mt]);const O=n.get(E[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,wt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,O,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ve(P){return Math.min(s.maxSamples,P.samples)}function _t(P){const E=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ht(P){const E=o.render.frame;h.get(P)!==E&&(h.set(P,E),P.update())}function At(P,E){const q=P.colorSpace,ft=P.format,ht=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==Mn&&q!==zi&&(he.getTransfer(q)===be?(ft!==Vn||ht!==An)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",q)),E}function Nt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=W,this.getTextureUnits=j,this.setTextureUnits=Q,this.setTexture2D=Y,this.setTexture2DArray=G,this.setTexture3D=st,this.setTextureCube=Z,this.rebindTextures=me,this.setupRenderTarget=re,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=_t,this.dispose=U}function Qy(i,t){function e(n,s=zi){let r;const o=he.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===Xc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_f)return i.BYTE;if(n===vf)return i.SHORT;if(n===Ir)return i.UNSIGNED_SHORT;if(n===Wc)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===yn)return i.HALF_FLOAT;if(n===Mf)return i.ALPHA;if(n===Sf)return i.RGB;if(n===Vn)return i.RGBA;if(n===Wi)return i.DEPTH_COMPONENT;if(n===Gi)return i.DEPTH_STENCIL;if(n===Yc)return i.RED;if(n===Kc)return i.RED_INTEGER;if(n===ls)return i.RG;if(n===Zc)return i.RG_INTEGER;if(n===$c)return i.RGBA_INTEGER;if(n===Vo||n===Wo||n===Xo||n===qo)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Vo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Vo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gl||n===Vl||n===Wl||n===Xl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ql||n===Yl||n===Kl||n===Zl||n===$l||n===ea||n===Jl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ql||n===Yl)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Kl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zl)return r.COMPRESSED_R11_EAC;if(n===$l)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ea)return r.COMPRESSED_RG11_EAC;if(n===Jl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ql)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ic)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uc)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dc||n===fc||n===pc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===dc)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mc||n===gc||n===na||n===_c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const tM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eM=`
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

}`;class nM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Of(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xn({vertexShader:tM,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pe(new us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iM extends qi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",p=new nM,m={},M=e.getContextAttributes();let b=null,S=null;const x=[],T=[],_=new Ft;let w=null,D=null;const C=new vn;C.viewport=new Ae;const I=new vn;I.viewport=new Ae;const L=[C,I],F=new ng;let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let Y=x[N];return Y===void 0&&(Y=new Oa,x[N]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(N){let Y=x[N];return Y===void 0&&(Y=new Oa,x[N]=Y),Y.getGripSpace()},this.getHand=function(N){let Y=x[N];return Y===void 0&&(Y=new Oa,x[N]=Y),Y.getHandSpace()};function B(N){const Y=T.indexOf(N.inputSource);if(Y===-1)return;const G=x[Y];G!==void 0&&(G.update(N.inputSource,N.frame,c||o),G.dispatchEvent({type:N.type,data:N.inputSource}))}function k(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",$);for(let N=0;N<x.length;N++){const Y=T[N];Y!==null&&(T[N]=null,x[N].disconnect(Y))}R=null,U=null,p.reset();for(const N in m)delete m[N];if(t.setRenderTarget(b),f=null,d=null,u=null,s=null,S=null,X.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(_.width,_.height,!1),D!==null){const N=D.camera;N.fov=D.fov,N.zoom=D.zoom,N.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",k),s.addEventListener("inputsourceschange",$),M.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let G=null,st=null,Z=null;M.depth&&(Z=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,G=M.stencil?Gi:Wi,st=M.stencil?Os:qn);const ut={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new an(d.textureWidth,d.textureHeight,{format:Vn,type:An,depthTexture:new cs(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const G={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,G),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new an(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),X.setContext(s),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function $(N){for(let Y=0;Y<N.removed.length;Y++){const G=N.removed[Y],st=T.indexOf(G);st>=0&&(T[st]=null,x[st].disconnect(G))}for(let Y=0;Y<N.added.length;Y++){const G=N.added[Y];let st=T.indexOf(G);if(st===-1){for(let ut=0;ut<x.length;ut++)if(ut>=T.length){T.push(G),st=ut;break}else if(T[ut]===null){T[ut]=G,st=ut;break}if(st===-1)break}const Z=x[st];Z&&Z.connect(G)}}function V(N,Y){Y===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(Y.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;let Y=N.near,G=N.far;p.texture!==null&&(p.depthNear>0&&(Y=p.depthNear),p.depthFar>0&&(G=p.depthFar)),F.near=I.near=C.near=Y,F.far=I.far=C.far=G,(R!==F.near||U!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),R=F.near,U=F.far),F.layers.mask=N.layers.mask|6,C.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;const st=N.parent,Z=F.cameras;V(F,st);for(let ut=0;ut<Z.length;ut++)V(Z[ut],st);F.projectionMatrix.copy(C.projectionMatrix),F.projectionMatrixInverse.copy(C.projectionMatrixInverse),D===null&&N.isPerspectiveCamera&&(D={camera:N,fov:N.fov,zoom:N.zoom}),W(N,F,st)};function W(N,Y,G){G===null?N.matrix.copy(Y.matrixWorld):(N.matrix.copy(G.matrixWorld),N.matrix.invert(),N.matrix.multiply(Y.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(Y.projectionMatrix),N.projectionMatrixInverse.copy(Y.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=ks*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(N){return m[N]};let j=null;function Q(N,Y){if(h=Y.getViewerPose(c||o),g=Y,h!==null){const G=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let st=!1;G.length!==F.cameras.length&&(F.cameras.length=0,st=!0);for(let at=0;at<G.length;at++){const Tt=G[at];let Gt=null;if(f!==null)Gt=f.getViewport(Tt);else{const ue=u.getViewSubImage(d,Tt);Gt=ue.viewport,at===0&&(t.setRenderTargetTextures(S,ue.colorTexture,ue.depthStencilTexture),t.setRenderTarget(S))}let kt=L[at];kt===void 0&&(kt=new vn,kt.layers.enable(at),kt.viewport=new Ae,L[at]=kt),kt.matrix.fromArray(Tt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Tt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),at===0&&(F.matrix.copy(kt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),st===!0&&F.cameras.push(kt)}const Z=s.enabledFeatures;if(Z&&Z.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const at=u.getDepthInformation(G[0]);at&&at.isValid&&at.texture&&p.init(at,s.renderState)}if(Z&&Z.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let at=0;at<G.length;at++){const Tt=G[at].camera;if(Tt){let Gt=m[Tt];Gt||(Gt=new Of,m[Tt]=Gt);const kt=u.getCameraImage(Tt);Gt.sourceTexture=kt}}}}for(let G=0;G<x.length;G++){const st=T[G],Z=x[G];st!==null&&Z!==void 0&&Z.update(st,Y,c||o)}j&&j(N,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const X=new qf;X.setAnimationLoop(Q),this.setAnimationLoop=function(N){j=N},this.dispose=function(){}}}const sM=new Yt,np=new $t;np.set(-1,0,0,0,1,0,0,0,1);function rM(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,kf(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,b,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,b):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===pn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===pn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=t.get(m),b=M.envMap,S=M.envMapRotation;b&&(p.envMap.value=b,p.envMapRotation.value.setFromMatrix4(sM.makeRotationFromEuler(S)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(np),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,b){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=b*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function oM(i,t,e,n){let s={},r={};function o(M,b){const S=b.program;n.uniformBlockBinding(M,S,s[M.id])}function a(M,b){let S=s[M.id];S===void 0&&(g(M),S=l(M),s[M.id]=S,M.addEventListener("dispose",p));const x=b.program;n.updateUBOMapping(M,x);const T=t.render.frame;r[M.id]!==T&&(c(M),r[M.id]=T)}function l(M){const b=i.createBuffer(),S=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,S,x),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function c(M){const b=s[M.id],S=M.uniforms,x=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,_=S.length;T<_;T++){const w=S[T];if(Array.isArray(w))for(let D=0,C=w.length;D<C;D++)h(w[D],T,D,x);else h(w,T,0,x)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,b,S,x){if(d(M,b,S,x)===!0){const T=M.__offset,_=M.value;if(Array.isArray(_)){let w=0;for(let D=0;D<_.length;D++){const C=_[D],I=v(C,!0);u(C,M.__data,w),w+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,M.__data)}}function u(M,b,S){typeof M=="number"||typeof M=="boolean"?b[S]=M:M.isMatrix3?(b[S]=M.elements[0],b[S+1]=M.elements[1],b[S+2]=M.elements[2],b[S+3]=0,b[S+4]=M.elements[3],b[S+5]=M.elements[4],b[S+6]=M.elements[5],b[S+7]=0,b[S+8]=M.elements[6],b[S+9]=M.elements[7],b[S+10]=M.elements[8],b[S+11]=0):ArrayBuffer.isView(M)?b.set(M.subarray(0,b.length-S),S):M.toArray(b,S)}function d(M,b,S,x){const T=M.value,_=b+"_"+S;if(Array.isArray(T)){x[_]===void 0&&(x[_]=[]);const w=x[_];let D=!1;for(let C=0;C<T.length;C++)f(T[C],w,C)===!0&&(D=!0);return D}return f(T,x,_)}function f(M,b,S){if(b[S]===void 0)return typeof M=="number"||typeof M=="boolean"?b[S]=M:ArrayBuffer.isView(M)?b[S]=M.slice():b[S]=M.clone(),!0;{const x=b[S];if(typeof M=="number"||typeof M=="boolean"){if(x!==M)return b[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(x.equals(M)===!1)return x.copy(M),!0}}return!1}function g(M){const b=M.uniforms;let S=0;const x=16;for(let _=0,w=b.length;_<w;_++){const D=Array.isArray(b[_])?b[_]:[b[_]];for(let C=0,I=D.length;C<I;C++){const L=D[C],F=Array.isArray(L.value)?L.value:[L.value],R=Array.isArray(b[_])||Array.isArray(L.value);let U=S;for(let k=0,$=F.length;k<$;k++){const V=F[k],W=v(V,R),j=S%x,Q=j%W.boundary,X=j+Q;S+=Q,X!==0&&x-X<W.storage&&(S+=x-X),k===0&&(U=S),S+=W.storage}const B=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new B((S-U)/Float32Array.BYTES_PER_ELEMENT),L.__offset=U}}const T=S%x;return T>0&&(S+=x-T),M.__size=S,M.__cache={},this}function v(M,b){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",M),b===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(M){const b=M.target;b.removeEventListener("dispose",p),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:m}}const aM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let jn=null;function lM(){return jn===null&&(jn=new ma(aM,16,16,ls,yn),jn.name="DFG_LUT",jn.minFilter=je,jn.magFilter=je,jn.wrapS=si,jn.wrapT=si,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}class cM{constructor(t={}){const{canvas:e=D0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=An}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const v=f,p=new Set([$c,Zc,Kc]),m=new Set([An,qn,Ir,Os,Xc,qc]),M=new Uint32Array(4),b=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let x=null,T=null;const _=[],w=[];let D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1,L=null,F=null,R=null,U=null;this._outputColorSpace=We;let B=0,k=0,$=null,V=-1,W=null;const j=new Ae,Q=new Ae;let X=null;const N=new Dt(0);let Y=0,G=e.width,st=e.height,Z=1,ut=null,mt=null;const at=new Ae(0,0,G,st),Tt=new Ae(0,0,G,st);let Gt=!1;const kt=new Or,ue=new rh;let Wt=!1,jt=!1;const dt=new Yt,nt=new y,Zt=new Ae,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let me=!1;function re(){return $===null?Z:1}let z=n;function Ee(A,H){return e.getContext(A,H)}let ce,ve,_t,Ht,At,Nt,P,E,q,ft,ht,xt,wt,rt,ot,Mt,O,lt,et,St,vt,yt,qt;try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bc}`),e.addEventListener("webglcontextlost",Kt,!1),e.addEventListener("webglcontextrestored",ie,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),z===null){const H="webgl2";if(z=Ee(H,A),z===null)throw Ee(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(A){throw e.removeEventListener("webglcontextlost",Kt,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),Qt("WebGLRenderer: "+A.message),A}function oe(){ce=new dx(z),ce.init(),vt=new Qy(z,ce),ve=new ex(z,ce,t,vt),_t=new Jy(z,ce),ve.reversedDepthBuffer&&d&&_t.buffers.depth.setReversed(!0),F=z.createFramebuffer(),R=z.createFramebuffer(),U=z.createFramebuffer(),Ht=new mx(z),At=new Oy,Nt=new jy(z,ce,_t,At,ve,vt,Ht),P=new ux(C),E=new _g(z),yt=new Qv(z,E),q=new fx(z,E,Ht,yt),ft=new _x(z,q,E,yt,Ht),lt=new gx(z,ve,Nt),ot=new nx(At),ht=new Fy(C,P,ce,ve,yt,ot),xt=new rM(C,At),wt=new By,rt=new Xy(ce),O=new jv(C,P,_t,ft,g,l),Mt=new $y(C,ft,ve),qt=new oM(z,Ht,ve,_t),et=new tx(z,ce,Ht),St=new px(z,ce,Ht),Ht.programs=ht.programs,C.capabilities=ve,C.extensions=ce,C.properties=At,C.renderLists=wt,C.shadowMap=Mt,C.state=_t,C.info=Ht}v!==An&&(D=new xx(v,e.width,e.height,a,s,r));const pt=new iM(C,z);this.xr=pt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=ce.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ce.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(G,st,!1))},this.getSize=function(A){return A.set(G,st)},this.setSize=function(A,H,tt=!0){if(pt.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}G=A,st=H,e.width=Math.floor(A*Z),e.height=Math.floor(H*Z),tt===!0&&(e.style.width=A+"px",e.style.height=H+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(G*Z,st*Z).floor()},this.setDrawingBufferSize=function(A,H,tt){G=A,st=H,Z=tt,e.width=Math.floor(A*tt),e.height=Math.floor(H*tt),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(v===An){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(j)},this.getViewport=function(A){return A.copy(at)},this.setViewport=function(A,H,tt,K){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,H,tt,K),_t.viewport(j.copy(at).multiplyScalar(re()).round())},this.getScissor=function(A){return A.copy(Tt)},this.setScissor=function(A,H,tt,K){A.isVector4?Tt.set(A.x,A.y,A.z,A.w):Tt.set(A,H,tt,K),_t.scissor(Q.copy(Tt).multiplyScalar(re()).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(A){_t.setScissorTest(Gt=A)},this.setOpaqueSort=function(A){ut=A},this.setTransparentSort=function(A){mt=A},this.getClearColor=function(A){return A.copy(O.getClearColor())},this.setClearColor=function(){O.setClearColor(...arguments)},this.getClearAlpha=function(){return O.getClearAlpha()},this.setClearAlpha=function(){O.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,tt=!0){let K=0;if(A){let J=!1;if($!==null){const Et=$.texture.format;J=p.has(Et)}if(J){const Et=$.texture.type,Ot=m.has(Et),bt=O.getClearColor(),It=O.getClearAlpha(),Vt=bt.r,ne=bt.g,de=bt.b;Ot?(M[0]=Vt,M[1]=ne,M[2]=de,M[3]=It,z.clearBufferuiv(z.COLOR,0,M)):(b[0]=Vt,b[1]=ne,b[2]=de,b[3]=It,z.clearBufferiv(z.COLOR,0,b))}else K|=z.COLOR_BUFFER_BIT}H&&(K|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&(K|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&z.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Kt,!1),e.removeEventListener("webglcontextrestored",ie,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),O.dispose(),wt.dispose(),rt.dispose(),Nt.dispose(),At.dispose(),P.dispose(),ft.dispose(),q.dispose(),yt.dispose(),qt.dispose(),ht.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Ch),pt.removeEventListener("sessionend",Ph),Zi.stop()};function Kt(A){A.preventDefault(),sa("WebGLRenderer: Context Lost."),I=!0}function ie(){sa("WebGLRenderer: Context Restored."),I=!1;const A=Ht.autoReset,H=Mt.enabled,tt=Mt.autoUpdate,K=Mt.needsUpdate,J=Mt.type;oe(),Ht.autoReset=A,Mt.enabled=H,Mt.autoUpdate=tt,Mt.needsUpdate=K,Mt.type=J}function Ct(A){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Se(A){const H=A.target;H.removeEventListener("dispose",Se),Ze(H)}function Ze(A){Ai(A),At.remove(A)}function Ai(A){const H=At.get(A).programs;H!==void 0&&(H.forEach(function(tt){ht.releaseProgram(tt)}),A.isShaderMaterial&&ht.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,tt,K,J,Et){H===null&&(H=Jt);const Ot=J.isMesh&&J.matrixWorld.determinantAffine()<0,bt=Kp(A,H,tt,K,J);_t.setMaterial(K,Ot);let It=tt.index,Vt=1;if(K.wireframe===!0){if(It=q.getWireframeAttribute(tt),It===void 0)return;Vt=2}const ne=tt.drawRange,de=tt.attributes.position;let Bt=ne.start*Vt,fe=(ne.start+ne.count)*Vt;Et!==null&&(Bt=Math.max(Bt,Et.start*Vt),fe=Math.min(fe,(Et.start+Et.count)*Vt)),It!==null?(Bt=Math.max(Bt,0),fe=Math.min(fe,It.count)):de!=null&&(Bt=Math.max(Bt,0),fe=Math.min(fe,de.count));const ze=fe-Bt;if(ze<0||ze===1/0)return;yt.setup(J,K,bt,tt,It);let Re,Te=et;if(It!==null&&(Re=E.get(It),Te=St,Te.setIndex(Re)),J.isMesh)K.wireframe===!0?(_t.setLineWidth(K.wireframeLinewidth*re()),Te.setMode(z.LINES)):Te.setMode(z.TRIANGLES);else if(J.isLine){let nn=K.linewidth;nn===void 0&&(nn=1),_t.setLineWidth(nn*re()),J.isLineSegments?Te.setMode(z.LINES):J.isLineLoop?Te.setMode(z.LINE_LOOP):Te.setMode(z.LINE_STRIP)}else J.isPoints?Te.setMode(z.POINTS):J.isSprite&&Te.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))Te.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const nn=J._multiDrawStarts,zt=J._multiDrawCounts,hn=J._multiDrawCount,xe=It?E.get(It).bytesPerElement:1,$i=At.get(K).currentProgram.getUniforms();for(let sn=0;sn<hn;sn++)$i.setValue(z,"_gl_DrawID",sn),Te.render(nn[sn]/xe,zt[sn])}else if(J.isInstancedMesh)Te.renderInstances(Bt,ze,J.count);else if(tt.isInstancedBufferGeometry){const nn=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,zt=Math.min(tt.instanceCount,nn);Te.renderInstances(Bt,ze,zt)}else Te.render(Bt,ze)};function Rh(A,H,tt,K){L!==null&&A.isNodeMaterial&&L.setObject(K,A),Wt===!0&&ot.setState(A,tt,!1),A.transparent===!0&&A.side===Be&&A.forceSinglePass===!1?(A.side=pn,A.needsUpdate=!0,Zs(A,H,K),A.side=Vi,A.needsUpdate=!0,Zs(A,H,K),A.side=Be):Zs(A,H,K)}this.compile=function(A,H,tt=null){tt===null&&(tt=A),L!==null&&L.renderStart(A,H,tt),T=rt.get(tt),T.init(H),w.push(T),tt.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),A!==tt&&A.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),jt=this.localClippingEnabled,Wt=ot.init(this.clippingPlanes,jt),Wt===!0&&ot.setGlobalState(this.clippingPlanes,H),L!==null&&Mt.render(T.state.shadowsArray,tt,H);const K=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Et=J.material;if(Et)if(Array.isArray(Et))for(let Ot=0;Ot<Et.length;Ot++){const bt=Et[Ot];Rh(bt,tt,H,J),K.add(bt)}else Rh(Et,tt,H,J),K.add(Et)}),T=w.pop(),L!==null&&L.renderEnd(),K},this.compileAsync=function(A,H,tt=null){const K=this.compile(A,H,tt);return new Promise(J=>{function Et(){if(K.forEach(function(Ot){const It=At.get(Ot).currentProgram;(It===void 0||It.isReady())&&K.delete(Ot)}),K.size===0){J(A);return}setTimeout(Et,10)}ce.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Ta=null;function qp(A){Ta&&Ta(A)}function Ch(){Zi.stop()}function Ph(){Zi.start()}const Zi=new qf;Zi.setAnimationLoop(qp),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(A){Ta=A,pt.setAnimationLoop(A),A===null?Zi.stop():Zi.start()},pt.addEventListener("sessionstart",Ch),pt.addEventListener("sessionend",Ph),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(A,H);const tt=pt.enabled===!0&&pt.isPresenting===!0,K=D!==null&&($===null||tt)&&D.begin(C,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(H),H=pt.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,H,$),T=rt.get(A,w.length),T.init(H),T.state.textureUnits=Nt.getTextureUnits(),w.push(T),dt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),H.isArrayCamera?ue.setFromArrayCamera(H):kt.setFromProjectionMatrix(dt,Wn,H.reversedDepth),jt=this.localClippingEnabled,Wt=ot.init(this.clippingPlanes,jt),x=wt.get(A,_.length),x.init(),_.push(x),this.info.render.frame++,pt.enabled===!0&&pt.isPresenting===!0){const Ot=C.xr.getDepthSensingMesh();Ot!==null&&Aa(Ot,H,-1/0,C.sortObjects)}Aa(A,H,0,C.sortObjects),x.finish(),L!==null&&L.updateLights(T.state.lightsArray),C.sortObjects===!0&&x.sort(ut,mt),me=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,me&&O.addToRenderList(x,A),this.info.autoReset===!0&&this.info.reset(),Wt===!0&&ot.beginShadows();const J=T.state.shadowsArray;if(Mt.render(J,A,H),Wt===!0&&ot.endShadows(),(K&&D.hasRenderPass())===!1){const Ot=x.opaque,bt=x.transmissive;if(T.setupLights(),H.isArrayCamera){const It=H.cameras;if(bt.length>0)for(let Vt=0,ne=It.length;Vt<ne;Vt++){const de=It[Vt];Ih(Ot,bt,A,de)}me&&O.render(A);for(let Vt=0,ne=It.length;Vt<ne;Vt++){const de=It[Vt];Lh(x,A,de,de.viewport)}}else bt.length>0&&Ih(Ot,bt,A,H),me&&O.render(A),Lh(x,A,H)}$!==null&&k===0&&(Nt.updateMultisampleRenderTarget($),Nt.updateRenderTargetMipmap($)),K&&D.end(C),A.isScene===!0&&A.onAfterRender(C,A,H),yt.resetDefaultState(),V=-1,W=null,w.pop(),w.length>0?(T=w[w.length-1],Nt.setTextureUnits(T.state.textureUnits),Wt===!0&&ot.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?x=_[_.length-1]:x=null,L!==null&&L.renderEnd()};function Aa(A,H,tt,K){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)tt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){const Ot=H.isArrayCamera?ue:kt;if(!A.frustumCulled||A.intersectsFrustum(Ot)){K&&Zt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(dt);const bt=ft.update(A),It=A.material;It.visible&&x.push(A,bt,It,tt,Zt.z,null,H)}}else if(A.isMesh||A.isLine||A.isPoints){const Ot=H.isArrayCamera?ue:kt;if(!A.frustumCulled||A.intersectsFrustum(Ot)){const bt=ft.update(A),It=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Zt.copy(A.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Zt.copy(bt.boundingSphere.center)),Zt.applyMatrix4(A.matrixWorld).applyMatrix4(dt)),Array.isArray(It)){const Vt=bt.groups;for(let ne=0,de=Vt.length;ne<de;ne++){const Bt=Vt[ne],fe=It[Bt.materialIndex];fe&&fe.visible&&x.push(A,bt,fe,tt,Zt.z,Bt,H)}}else It.visible&&x.push(A,bt,It,tt,Zt.z,null,H)}}}const Et=A.children;for(let Ot=0,bt=Et.length;Ot<bt;Ot++)Aa(Et[Ot],H,tt,K)}function Lh(A,H,tt,K){const{opaque:J,transmissive:Et,transparent:Ot}=A;T.setupLightsView(tt),Wt===!0&&ot.setGlobalState(C.clippingPlanes,tt),K&&_t.viewport(j.copy(K)),J.length>0&&Yr(J,H,tt),Et.length>0&&Yr(Et,H,tt),Ot.length>0&&Yr(Ot,H,tt),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Ih(A,H,tt,K){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[K.id]===void 0){const Bt=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[K.id]=new an(1,1,{generateMipmaps:!0,type:Bt?yn:An,minFilter:ri,samples:Math.max(4,ve.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}const Et=T.state.transmissionRenderTarget[K.id],Ot=K.viewport||j;Et.setSize(Ot.z*C.transmissionResolutionScale,Ot.w*C.transmissionResolutionScale);const bt=C.getRenderTarget(),It=C.getActiveCubeFace(),Vt=C.getActiveMipmapLevel();C.setRenderTarget(Et),C.getClearColor(N),Y=C.getClearAlpha(),Y<1&&C.setClearColor(16777215,.5),C.clear(),me&&O.render(tt);const ne=C.toneMapping;C.toneMapping=oi;const de=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),T.setupLightsView(K),Wt===!0&&ot.setGlobalState(C.clippingPlanes,K),Yr(A,tt,K),Nt.updateMultisampleRenderTarget(Et),Nt.updateRenderTargetMipmap(Et),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let fe=0,ze=H.length;fe<ze;fe++){const Re=H[fe],{object:Te,geometry:nn,material:zt,group:hn}=Re;if(zt.side===Be&&Te.layers.test(K.layers)){const xe=zt.side;zt.side=pn,zt.needsUpdate=!0,Dh(Te,tt,K,nn,zt,hn),zt.side=xe,zt.needsUpdate=!0,Bt=!0}}Bt===!0&&(Nt.updateMultisampleRenderTarget(Et),Nt.updateRenderTargetMipmap(Et))}C.setRenderTarget(bt,It,Vt),C.setClearColor(N,Y),de!==void 0&&(K.viewport=de),C.toneMapping=ne}function Yr(A,H,tt){const K=H.isScene===!0?H.overrideMaterial:null;for(let J=0,Et=A.length;J<Et;J++){const Ot=A[J],{object:bt,geometry:It,group:Vt}=Ot;let ne=Ot.material;ne.allowOverride===!0&&K!==null&&(ne=K),bt.layers.test(tt.layers)&&Dh(bt,H,tt,It,ne,Vt)}}function Dh(A,H,tt,K,J,Et){L!==null&&J.isNodeMaterial&&L.setObject(A,J),A.onBeforeRender(C,H,tt,K,J,Et),A.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(C,H,tt,K,A,Et),J.transparent===!0&&J.side===Be&&J.forceSinglePass===!1?(J.side=pn,J.needsUpdate=!0,C.renderBufferDirect(tt,H,K,J,A,Et),J.side=Vi,J.needsUpdate=!0,C.renderBufferDirect(tt,H,K,J,A,Et),J.side=Be):C.renderBufferDirect(tt,H,K,J,A,Et),A.onAfterRender(C,H,tt,K,J,Et)}function Nh(A){let H=0;for(const tt of A)tt.texture!==null&&H++;return H}function Zs(A,H,tt){H.isScene!==!0&&(H=Jt);const K=At.get(A),J=T.state.lights,Et=T.state.shadowsArray,Ot=J.state.version,bt=ht.getParameters(A,J.state,Et,H,tt,T.state.lightProbeGridArray),It=ht.getProgramCacheKey(bt);let Vt=K.programs;K.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,K.fog=H.fog;const ne=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;K.envMap=P.get(A.envMap||K.environment,ne),K.envMapRotation=K.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Vt===void 0&&(A.addEventListener("dispose",Se),Vt=new Map,K.programs=Vt,K.programVariants=new Map);let de=Vt.get(It);if(de!==void 0){if(K.currentProgram===de&&K.lightsStateVersion===Ot)return Fh(A,bt),de}else bt.uniforms=ht.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,tt,bt),A.onBeforeCompile(bt,C),de=ht.acquireProgram(bt,It),Vt.set(It,de),K.uniforms=bt.uniforms;const Bt=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Bt.clippingPlanes=ot.uniform),Fh(A,bt),K.needsLights=$p(A),K.lightsStateVersion=Ot,K.needsLights&&(Bt.ambientLightColor.value=J.state.ambient,Bt.lightProbe.value=J.state.probe,Bt.sunLights.value=J.state.sun,Bt.sunLightShadows.value=J.state.sunShadow,Bt.directionalLights.value=J.state.directional,Bt.directionalLightShadows.value=J.state.directionalShadow,Bt.spotLights.value=J.state.spot,Bt.spotLightShadows.value=J.state.spotShadow,Bt.rectAreaLights.value=J.state.rectArea,Bt.ltc_1.value=J.state.rectAreaLTC1,Bt.ltc_2.value=J.state.rectAreaLTC2,Bt.pointLights.value=J.state.point,Bt.pointLightShadows.value=J.state.pointShadow,Bt.hemisphereLights.value=J.state.hemi,Bt.sunShadowMatrix.value=J.state.sunShadowMatrix,Bt.sunShadowCascade.value=J.state.sunShadowCascade,Bt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Bt.spotLightMatrix.value=J.state.spotLightMatrix,Bt.spotLightMap.value=J.state.spotLightMap,Bt.pointShadowMatrix.value=J.state.pointShadowMatrix),K.numLightProbeGrids=Nh(T.state.lightProbeGridArray),K.currentProgram=de,K.uniformsList=null,de}function Yp(A,H,tt,K,J){const Et=At.get(A),Ot=Et.currentProgram.id+","+K+","+J;let bt=Et.programVariants.get(Ot);return bt===void 0?(bt=Zs(A,H,tt),Et.programVariants.set(Ot,bt)):(Et.currentProgram=bt,Et.uniformsList=null,Et.outputColorSpace=K,Et.toneMapping=J),bt}function Uh(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Yo.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function Fh(A,H){const tt=At.get(A);tt.outputColorSpace=H.outputColorSpace,tt.batching=H.batching,tt.batchingColor=H.batchingColor,tt.instancing=H.instancing,tt.instancingColor=H.instancingColor,tt.instancingMorph=H.instancingMorph,tt.skinning=H.skinning,tt.morphTargets=H.morphTargets,tt.morphNormals=H.morphNormals,tt.morphColors=H.morphColors,tt.morphTargetsCount=H.morphTargetsCount,tt.numClippingPlanes=H.numClippingPlanes,tt.numIntersection=H.numClipIntersection,tt.vertexAlphas=H.vertexAlphas,tt.vertexTangents=H.vertexTangents,tt.toneMapping=H.toneMapping}function Kp(A,H,tt,K,J){H.isScene!==!0&&(H=Jt),Nt.resetTextureUnits();const Et=H.fog,Ot=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?H.environment:null,bt=$===null?C.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:he.workingColorSpace,It=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Vt=P.get(K.envMap||Ot,It),ne=K.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,de=!!tt.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Bt=!!tt.morphAttributes.position,fe=!!tt.morphAttributes.normal,ze=!!tt.morphAttributes.color;let Re=oi;K.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Re=C.toneMapping);const Te=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,nn=Te!==void 0?Te.length:0,zt=At.get(K),hn=T.state.lights;if(Wt===!0&&(jt===!0||A!==W)){const De=A===W&&K.id===V;ot.setState(K,A,De)}let xe=!1,$i=!1;K.version===zt.__version?zt.needsLights&&zt.lightsStateVersion!==hn.state.version||J.isBatchedMesh&&zt.batching===!1||!J.isBatchedMesh&&zt.batching===!0||J.isBatchedMesh&&zt.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&zt.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&zt.instancing===!1||!J.isInstancedMesh&&zt.instancing===!0||J.isSkinnedMesh&&zt.skinning===!1||!J.isSkinnedMesh&&zt.skinning===!0||J.isInstancedMesh&&zt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&zt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&zt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&zt.instancingMorph===!1&&J.morphTexture!==null||zt.envMap!==Vt||K.fog===!0&&zt.fog!==Et||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==ot.numPlanes||zt.numIntersection!==ot.numIntersection)||zt.vertexAlphas!==ne||zt.vertexTangents!==de||zt.morphTargets!==Bt||zt.morphNormals!==fe||zt.morphColors!==ze||zt.morphTargetsCount!==nn||zt.numLightProbeGrids!==Nh(T.state.lightProbeGridArray)?xe=!0:(zt.outputColorSpace!==bt||zt.toneMapping!==Re)&&($i=!0):(xe=!0,zt.__version=K.version);let sn=zt.currentProgram;(xe===!0||$i===!0)&&(sn=$i===!0?Yp(K,H,J,bt,Re):Zs(K,H,J),L&&K.isNodeMaterial&&L.onUpdateProgram(K,sn,zt));let Kr=!1,Ri=!1,Ji=!1;const ge=sn.getUniforms(),tn=zt.uniforms;if(_t.useProgram(sn.program)&&(Kr=!0,Ri=!0,Ji=!0),K.id!==V&&(V=K.id,Ri=!0),Kr||W!==A){_t.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ge.setValue(z,"projectionMatrix",A.projectionMatrix),ge.setValue(z,"viewMatrix",A.matrixWorldInverse);const $e=ge.map.cameraPosition;$e!==void 0&&$e.setValue(z,nt.setFromMatrixPosition(A.matrixWorld)),ve.logarithmicDepthBuffer&&ge.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ge.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),W!==A&&(W=A,Ri=!0,Ji=!0)}if(zt.needsLights&&(hn.state.sunShadowMap.length>0&&ge.setValue(z,"sunShadowMap",hn.state.sunShadowMap,Nt),hn.state.directionalShadowMap.length>0&&ge.setValue(z,"directionalShadowMap",hn.state.directionalShadowMap,Nt),hn.state.spotShadowMap.length>0&&ge.setValue(z,"spotShadowMap",hn.state.spotShadowMap,Nt),hn.state.pointShadowMap.length>0&&ge.setValue(z,"pointShadowMap",hn.state.pointShadowMap,Nt)),J.isSkinnedMesh){ge.setOptional(z,J,"bindMatrix"),ge.setOptional(z,J,"bindMatrixInverse");const De=J.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),ge.setValue(z,"boneTexture",De.boneTexture,Nt))}J.isBatchedMesh&&(ge.setOptional(z,J,"batchingTexture"),ge.setValue(z,"batchingTexture",J._matricesTexture,Nt),ge.setOptional(z,J,"batchingIdTexture"),ge.setValue(z,"batchingIdTexture",J._indirectTexture,Nt),ge.setOptional(z,J,"batchingColorTexture"),J._colorsTexture!==null&&ge.setValue(z,"batchingColorTexture",J._colorsTexture,Nt));const kn=tt.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&lt.update(J,tt,sn),(Ri||zt.receiveShadow!==J.receiveShadow)&&(zt.receiveShadow=J.receiveShadow,ge.setValue(z,"receiveShadow",J.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&H.environment!==null&&(tn.envMapIntensity.value=H.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=lM()),Ri){if(ge.setValue(z,"toneMappingExposure",C.toneMappingExposure),zt.needsLights&&Zp(tn,Ji),Et&&K.fog===!0&&xt.refreshFogUniforms(tn,Et),xt.refreshMaterialUniforms(tn,K,Z,st,T.state.transmissionRenderTarget[A.id]),zt.needsLights&&zt.numLightProbeGrids>0){const De=S;let $e=0;for(const fi of T.state.lightProbeGridArray)fi.texture!==null&&(De.textures[$e]=fi.texture,De.min[$e]=fi.boundingBox.min,De.max[$e]=fi.boundingBox.max,De.resolution[$e]=fi.resolution,$e++);for(const fi in De)De[fi].length=$e;tn.probesSH.value=De.textures,tn.probesMin.value=De.min,tn.probesMax.value=De.max,tn.probesResolution.value=De.resolution}Yo.upload(z,Uh(zt),tn,Nt)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Yo.upload(z,Uh(zt),tn,Nt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ge.setValue(z,"center",J.center),ge.setValue(z,"modelViewMatrix",J.modelViewMatrix),ge.setValue(z,"normalMatrix",J.normalMatrix),ge.setValue(z,"modelMatrix",J.matrixWorld),K.uniformsGroups!==void 0){const De=K.uniformsGroups;for(let $e=0,fi=De.length;$e<fi;$e++){const kh=De[$e];qt.update(kh,sn),qt.bind(kh,sn)}}return sn}function Zp(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function $p(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,H,tt){const K=At.get(A);K.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),At.get(A.texture).__webglTexture=H,At.get(A.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:tt,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const tt=At.get(A);tt.__webglFramebuffer=H,tt.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,tt=0){$=A,B=H,k=tt;let K=null,J=!1,Et=!1;if(A){const bt=At.get(A);if(bt.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(z.FRAMEBUFFER,bt.__webglFramebuffer),j.copy(A.viewport),Q.copy(A.scissor),X=A.scissorTest,_t.viewport(j),_t.scissor(Q),_t.setScissorTest(X),V=-1;return}else if(bt.__webglFramebuffer===void 0)Nt.setupRenderTarget(A);else if(bt.__hasExternalTextures)Nt.rebindTextures(A,At.get(A.texture).__webglTexture,At.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ne=A.depthTexture;if(bt.__boundDepthTexture!==ne){if(ne!==null&&At.has(ne)&&(A.width!==ne.image.width||A.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Nt.setupDepthRenderbuffer(A)}}const It=A.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Et=!0);const Vt=At.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Vt[H])?K=Vt[H][tt]:K=Vt[H],J=!0):A.samples>0&&Nt.useMultisampledRTT(A)===!1?K=At.get(A).__webglMultisampledFramebuffer:Array.isArray(Vt)?K=Vt[tt]:K=Vt,j.copy(A.viewport),Q.copy(A.scissor),X=A.scissorTest}else j.copy(at).multiplyScalar(Z).floor(),Q.copy(Tt).multiplyScalar(Z).floor(),X=Gt;if(tt!==0&&(K=F),_t.bindFramebuffer(z.FRAMEBUFFER,K)&&_t.drawBuffers(A,K),_t.viewport(j),_t.scissor(Q),_t.setScissorTest(X),J){const bt=At.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,bt.__webglTexture,tt)}else if(Et){const bt=H;for(let It=0;It<A.textures.length;It++){const Vt=At.get(A.textures[It]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+It,Vt.__webglTexture,tt,bt)}}else if(A!==null&&tt!==0){const bt=At.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,bt.__webglTexture,tt)}V=-1};function Oh(A){const H=At.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=ve.textureFormatReadable(A.format),H.__typeReadable=ve.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,tt,K,J,Et,Ot,bt=0){if(!(A&&A.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=At.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ot!==void 0&&(It=It[Ot],Array.isArray(It)&&(It=It[0])),It){_t.bindFramebuffer(z.FRAMEBUFFER,It);try{const Vt=A.textures[bt],ne=Vt.format,de=Vt.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+bt);const Bt=Oh(Vt);if(Bt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-K&&tt>=0&&tt<=A.height-J&&z.readPixels(H,tt,K,J,vt.convert(ne),vt.convert(de),Et)}finally{const Vt=$!==null?At.get($).__webglFramebuffer:null;_t.bindFramebuffer(z.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(A,H,tt,K,J,Et,Ot,bt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=At.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ot!==void 0&&(It=It[Ot],Array.isArray(It)&&(It=It[0])),It)if(H>=0&&H<=A.width-K&&tt>=0&&tt<=A.height-J){_t.bindFramebuffer(z.FRAMEBUFFER,It);const Vt=A.textures[bt],ne=Vt.format,de=Vt.type;A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+bt);const Bt=Oh(Vt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const fe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,fe),z.bufferData(z.PIXEL_PACK_BUFFER,Et.byteLength,z.STREAM_READ),z.readPixels(H,tt,K,J,vt.convert(ne),vt.convert(de),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const ze=$!==null?At.get($).__webglFramebuffer:null;_t.bindFramebuffer(z.FRAMEBUFFER,ze);const Re=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await N0(z,Re,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,fe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Et),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(fe),z.deleteSync(Re),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,tt=0){const K=Math.pow(2,-tt),J=Math.floor(A.image.width*K),Et=Math.floor(A.image.height*K),Ot=H!==null?H.x:0,bt=H!==null?H.y:0;Nt.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,tt,0,0,Ot,bt,J,Et),_t.unbindTexture()},this.copyTextureToTexture=function(A,H,tt=null,K=null,J=0,Et=0){let Ot,bt,It,Vt,ne,de,Bt,fe,ze;const Re=A.isCompressedTexture?A.mipmaps[Et]:A.image;if(tt!==null)Ot=tt.max.x-tt.min.x,bt=tt.max.y-tt.min.y,It=tt.isBox3?tt.max.z-tt.min.z:1,Vt=tt.min.x,ne=tt.min.y,de=tt.isBox3?tt.min.z:0;else{const ge=Math.pow(2,-J);Ot=Math.floor(Re.width*ge),bt=Math.floor(Re.height*ge),A.isDataArrayTexture?It=Re.depth:A.isData3DTexture?It=Math.floor(Re.depth*ge):It=1,Vt=0,ne=0,de=0}K!==null?(Bt=K.x,fe=K.y,ze=K.z):(Bt=0,fe=0,ze=0);const Te=vt.convert(H.format),nn=vt.convert(H.type);let zt;H.isData3DTexture?(Nt.setTexture3D(H,0),zt=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Nt.setTexture2DArray(H,0),zt=z.TEXTURE_2D_ARRAY):(Nt.setTexture2D(H,0),zt=z.TEXTURE_2D),_t.activeTexture(z.TEXTURE0),_t.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),_t.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),_t.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);const hn=_t.getParameter(z.UNPACK_ROW_LENGTH),xe=_t.getParameter(z.UNPACK_IMAGE_HEIGHT),$i=_t.getParameter(z.UNPACK_SKIP_PIXELS),sn=_t.getParameter(z.UNPACK_SKIP_ROWS),Kr=_t.getParameter(z.UNPACK_SKIP_IMAGES);_t.pixelStorei(z.UNPACK_ROW_LENGTH,Re.width),_t.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Re.height),_t.pixelStorei(z.UNPACK_SKIP_PIXELS,Vt),_t.pixelStorei(z.UNPACK_SKIP_ROWS,ne),_t.pixelStorei(z.UNPACK_SKIP_IMAGES,de);const Ri=A.isDataArrayTexture||A.isData3DTexture,Ji=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const ge=At.get(A),tn=At.get(H),kn=At.get(ge.__renderTarget),De=At.get(tn.__renderTarget);_t.bindFramebuffer(z.READ_FRAMEBUFFER,kn.__webglFramebuffer),_t.bindFramebuffer(z.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let $e=0;$e<It;$e++)Ri&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,At.get(A).__webglTexture,J,de+$e),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,At.get(H).__webglTexture,Et,ze+$e)),z.blitFramebuffer(Vt,ne,Vt+Ot,ne+bt,Bt,fe,Bt+Ot,fe+bt,z.DEPTH_BUFFER_BIT,z.NEAREST);_t.bindFramebuffer(z.READ_FRAMEBUFFER,null),_t.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||At.has(A)){const ge=At.get(A),tn=At.get(H);_t.bindFramebuffer(z.READ_FRAMEBUFFER,R),_t.bindFramebuffer(z.DRAW_FRAMEBUFFER,U);for(let kn=0;kn<It;kn++)Ri?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ge.__webglTexture,J,de+kn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ge.__webglTexture,J),Ji?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,tn.__webglTexture,Et,ze+kn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,tn.__webglTexture,Et),J!==0?z.blitFramebuffer(Vt,ne,Vt+Ot,ne+bt,Bt,fe,Bt+Ot,fe+bt,z.COLOR_BUFFER_BIT,z.NEAREST):Ji?z.copyTexSubImage3D(zt,Et,Bt,fe,ze+kn,Vt,ne,Ot,bt):z.copyTexSubImage2D(zt,Et,Bt,fe,Vt,ne,Ot,bt);_t.bindFramebuffer(z.READ_FRAMEBUFFER,null),_t.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ji?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(zt,Et,Bt,fe,ze,Ot,bt,It,Te,nn,Re.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(zt,Et,Bt,fe,ze,Ot,bt,It,Te,Re.data):z.texSubImage3D(zt,Et,Bt,fe,ze,Ot,bt,It,Te,nn,Re):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Et,Bt,fe,Ot,bt,Te,nn,Re.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Et,Bt,fe,Re.width,Re.height,Te,Re.data):z.texSubImage2D(z.TEXTURE_2D,Et,Bt,fe,Ot,bt,Te,nn,Re);_t.pixelStorei(z.UNPACK_ROW_LENGTH,hn),_t.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xe),_t.pixelStorei(z.UNPACK_SKIP_PIXELS,$i),_t.pixelStorei(z.UNPACK_SKIP_ROWS,sn),_t.pixelStorei(z.UNPACK_SKIP_IMAGES,Kr),Et===0&&H.generateMipmaps===!0&&H.mipmapsAutoUpdate===!0&&z.generateMipmap(zt),_t.unbindTexture()},this.initRenderTarget=function(A){At.get(A).__webglFramebuffer===void 0&&Nt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Nt.setTextureCube(A,0):A.isData3DTexture?Nt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Nt.setTexture2DArray(A,0):Nt.setTexture2D(A,0),_t.unbindTexture()},this.resetState=function(){B=0,k=0,$=null,_t.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}const ad={type:"change"},ph={type:"start"},ip={type:"end"},wo=new Gs,ld=new Tn,hM=Math.cos(70*Qe.DEG2RAD),Ve=new y,_n=2*Math.PI,ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cl=1e-6;class uM extends mg{constructor(t,e=null){super(t,e),this.state=ye.NONE,this.target=new y,this.cursor=new y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ls.ROTATE,MIDDLE:Ls.DOLLY,RIGHT:Ls.PAN},this.touches={ONE:Cs.ROTATE,TWO:Cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new y,this._lastQuaternion=new _e,this._lastTargetPosition=new y,this._quat=new _e().setFromUnitVectors(t.up,new y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wc,this._sphericalDelta=new wc,this._scale=1,this._panOffset=new y,this._rotateStart=new Ft,this._rotateEnd=new Ft,this._rotateDelta=new Ft,this._panStart=new Ft,this._panEnd=new Ft,this._panDelta=new Ft,this._dollyStart=new Ft,this._dollyEnd=new Ft,this._dollyDelta=new Ft,this._dollyDirection=new y,this._mouse=new Ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fM.bind(this),this._onPointerDown=dM.bind(this),this._onPointerUp=pM.bind(this),this._onContextMenu=MM.bind(this),this._onMouseWheel=_M.bind(this),this._onKeyDown=vM.bind(this),this._onTouchStart=xM.bind(this),this._onTouchMove=yM.bind(this),this._onMouseDown=mM.bind(this),this._onMouseMove=gM.bind(this),this._interceptControlDown=SM.bind(this),this._interceptControlUp=bM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ye.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ad),this.update(),this.state=ye.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ve.copy(e).sub(this.target),Ve.applyQuaternion(this._quat),this._spherical.setFromVector3(Ve),this.autoRotate&&this.state===ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=_n:n>Math.PI&&(n-=_n),s<-Math.PI?s+=_n:s>Math.PI&&(s-=_n),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ve.setFromSpherical(this._spherical),Ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ve.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new y(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(wo.origin.copy(this.object.position),wo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wo.direction))<hM?this.object.lookAt(this.target):(ld.setFromNormalAndCoplanarPoint(this.object.up,this.target),wo.intersectPlane(ld,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>cl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cl||this._lastTargetPosition.distanceToSquared(this.target)>cl?(this.dispatchEvent(ad),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?_n/60*this.autoRotateSpeed*t:_n/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ve.setFromMatrixColumn(e,0),Ve.multiplyScalar(-t),this._panOffset.add(Ve)}_panUp(t,e){this.screenSpacePanning===!0?Ve.setFromMatrixColumn(e,1):(Ve.setFromMatrixColumn(e,0),Ve.crossVectors(this.object.up,Ve)),Ve.multiplyScalar(t),this._panOffset.add(Ve)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ve.copy(s).sub(this.target);let r=Ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/e.clientHeight),this._rotateUp(_n*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/e.clientHeight),this._rotateUp(_n*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ft,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function dM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function fM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function pM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ip),this.state=ye.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function mM(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ye.DOLLY;break;case Ls.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ye.ROTATE}break;case Ls.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ye.PAN}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(ph)}function gM(i){switch(this.state){case ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function _M(i){this.enabled===!1||this.enableZoom===!1||this.state!==ye.NONE||(i.preventDefault(),this.dispatchEvent(ph),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ip))}function vM(i){this.enabled!==!1&&this._handleKeyDown(i)}function xM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Cs.ROTATE:if(this.enableRotate===!1){this.state=ye.NONE;break}this._handleTouchStartRotate(i),this.state=ye.TOUCH_ROTATE;break;case Cs.PAN:if(this.enablePan===!1){this.state=ye.NONE;break}this._handleTouchStartPan(i),this.state=ye.TOUCH_PAN;break;default:this.state=ye.NONE}break;case 2:switch(this.touches.TWO){case Cs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ye.TOUCH_DOLLY_PAN;break;case Cs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ye.TOUCH_DOLLY_ROTATE;break;default:this.state=ye.NONE}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(ph)}function yM(i){switch(this._trackPointer(i),this.state){case ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ye.NONE}}function MM(i){this.enabled!==!1&&i.preventDefault()}function SM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yi(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const Ut=(i,t,e)=>i<t?t:i>e?e:i,wM=i=>Ut(i,0,1),ct=(i,t,e)=>i+(t-i)*e,Lt=Math.PI/180;function it(i,t,e){const n=wM((e-i)/(t-i));return n*n*(3-2*n)}function Ln(i,t){const e=i.length,n=Ut(t,0,e-1),s=Math.min(Math.floor(n),e-2),r=n-s,o=i[Math.max(s-1,0)],a=i[s],l=i[s+1],c=i[Math.min(s+2,e-1)];return .5*(2*a+(-o+l)*r+(2*o-5*a+4*l-c)*r*r+(-o+3*a-3*l+c)*r*r*r)}function Cn(i,t,e,n){return ct(i,t,1-Math.exp(-e*n))}function sp(i,t,e,n){return i+Math.atan2(Math.sin(t-i),Math.cos(t-i))*(1-Math.exp(-e*n))}function cd(i,t){let e=i*374761393+t*668265263|0;return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function Ge(i,t=0){const e=Math.floor(i),n=i-e,s=n*n*(3-2*n);return ct(cd(e,t),cd(e+1,t),s)*2-1}const gt=(i,t,e)=>t+(e-t)*i();function EM(i,t,e,n=2){return t+(e-t)*Math.pow(i(),n)}class Ei{constructor(t=6,e=.5){this.freq=t,this.zeta=e}freq;zeta;x=0;v=0;step(t,e){const n=this.freq*Math.PI*2,s=Math.max(1,Math.ceil(e*this.freq*8)),r=e/s;for(let o=0;o<s;o++)this.v+=(-n*n*(this.x-t)-2*this.zeta*n*this.v)*r,this.x+=this.v*r;return this.x}kick(t){this.v+=t}}const TM=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}
`,AM=`
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
`;function rp(i=0){const t=Yi(7),e=[],n=[];for(let o=0;o<48;o++){const a=(t()-.5)*Math.PI*2,l=(t()-.35)*1.2;e.push(new y(Math.sin(a)*Math.cos(l),Math.sin(l),-Math.cos(a)*Math.cos(l)).normalize()),n.push(new Ft(.06+t()*.14,.15+t()*.6))}const s=new xn({vertexShader:TM,fragmentShader:AM,uniforms:{uTime:{value:0},uEnv:{value:0},uMist:{value:i},uBlobs:{value:e},uBlobR:{value:n},uBlobCos:{value:n.map(o=>Math.cos(o.x))}},side:pn,depthWrite:!1}),r=new pe(new ci(50,64,32),s);return r.frustumCulled=!1,r.renderOrder=1e3,{mesh:r,material:s}}const Ne=new Dn,Eo=new y,hd=new Ft,ud=new Ft,dd=new Ft;class RM{constructor(t){this.geometry=t.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(t){return this.weightAttribute=t?this.geometry.getAttribute(t):null,this}build(){const t=this.indexAttribute,e=this.positionAttribute,n=this.weightAttribute,s=t?t.count/3:e.count/3,r=new Float32Array(s);for(let l=0;l<s;l++){let c=1,h=3*l,u=3*l+1,d=3*l+2;t&&(h=t.getX(h),u=t.getX(u),d=t.getX(d)),n&&(c=n.getX(h)+n.getX(u)+n.getX(d)),Ne.a.fromBufferAttribute(e,h),Ne.b.fromBufferAttribute(e,u),Ne.c.fromBufferAttribute(e,d),c*=Ne.getArea(),r[l]=c}const o=new Float32Array(s);let a=0;for(let l=0;l<s;l++)a+=r[l],o[l]=a;return this.distribution=o,this}setRandomGenerator(t){return this.randomFunction=t,this}sample(t,e,n,s){const r=this._sampleFaceIndex();return this._sampleFace(r,t,e,n,s)}_sampleFaceIndex(){const t=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*t)}_binarySearch(t){const e=this.distribution;let n=0,s=e.length-1,r=-1;for(;n<=s;){const o=Math.ceil((n+s)/2);if(o===0||e[o-1]<=t&&e[o]>t){r=o;break}else t<e[o]?s=o-1:n=o+1}return r}_sampleFace(t,e,n,s,r){let o=this.randomFunction(),a=this.randomFunction();o+a>1&&(o=1-o,a=1-a);const l=this.indexAttribute;let c=t*3,h=t*3+1,u=t*3+2;return l&&(c=l.getX(c),h=l.getX(h),u=l.getX(u)),Ne.a.fromBufferAttribute(this.positionAttribute,c),Ne.b.fromBufferAttribute(this.positionAttribute,h),Ne.c.fromBufferAttribute(this.positionAttribute,u),e.set(0,0,0).addScaledVector(Ne.a,o).addScaledVector(Ne.b,a).addScaledVector(Ne.c,1-(o+a)),n!==void 0&&(this.normalAttribute!==void 0?(Ne.a.fromBufferAttribute(this.normalAttribute,c),Ne.b.fromBufferAttribute(this.normalAttribute,h),Ne.c.fromBufferAttribute(this.normalAttribute,u),n.set(0,0,0).addScaledVector(Ne.a,o).addScaledVector(Ne.b,a).addScaledVector(Ne.c,1-(o+a)).normalize()):Ne.getNormal(n)),s!==void 0&&this.colorAttribute!==void 0&&(Ne.a.fromBufferAttribute(this.colorAttribute,c),Ne.b.fromBufferAttribute(this.colorAttribute,h),Ne.c.fromBufferAttribute(this.colorAttribute,u),Eo.set(0,0,0).addScaledVector(Ne.a,o).addScaledVector(Ne.b,a).addScaledVector(Ne.c,1-(o+a)),s.r=Eo.x,s.g=Eo.y,s.b=Eo.z),r!==void 0&&this.uvAttribute!==void 0&&(hd.fromBufferAttribute(this.uvAttribute,c),ud.fromBufferAttribute(this.uvAttribute,h),dd.fromBufferAttribute(this.uvAttribute,u),r.set(0,0).addScaledVector(hd,o).addScaledVector(ud,a).addScaledVector(dd,1-(o+a))),this}}function fd(i,t){if(t===S0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===vc||t===bf){let e=i.getIndex();if(e===null){const r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===vc)for(let r=1;r<=n;r++)s.push(e.getX(0)),s.push(e.getX(r)),s.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(e.getX(r)),s.push(e.getX(r+1)),s.push(e.getX(r+2))):(s.push(e.getX(r+2)),s.push(e.getX(r+1)),s.push(e.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}function CM(i){const t=new Map,e=new Map,n=i.clone();return op(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=t.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return e.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function op(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)op(i.children[n],t.children[n],e)}class PM extends qs{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new UM(e)}),this.register(function(e){return new FM(e)}),this.register(function(e){return new OM(e)}),this.register(function(e){return new qM(e)}),this.register(function(e){return new YM(e)}),this.register(function(e){return new KM(e)}),this.register(function(e){return new BM(e)}),this.register(function(e){return new zM(e)}),this.register(function(e){return new HM(e)}),this.register(function(e){return new GM(e)}),this.register(function(e){return new NM(e)}),this.register(function(e){return new VM(e)}),this.register(function(e){return new kM(e)}),this.register(function(e){return new XM(e)}),this.register(function(e){return new WM(e)}),this.register(function(e){return new IM(e)}),this.register(function(e){return new pd(e,le.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new pd(e,le.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new ZM(e)})}load(t,e,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Tr.extractUrlBase(t);o=Tr.resolveURL(c,this.path)}else o=Tr.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){s?s(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new Gf(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===ap){try{o[le.KHR_BINARY_GLTF]=new $M(t)}catch(u){s&&s(u);return}r=JSON.parse(o[le.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new c1(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case le.KHR_MATERIALS_UNLIT:o[u]=new DM;break;case le.KHR_DRACO_MESH_COMPRESSION:o[u]=new JM(r,this.dracoLoader);break;case le.KHR_TEXTURE_TRANSFORM:o[u]=new jM;break;case le.KHR_MESH_QUANTIZATION:o[u]=new QM;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function LM(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}function Fe(i,t,e){const n=i.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}const le={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class IM{constructor(t){this.parser=t,this.name=le.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const h=new Dt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Mn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new hh(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Qm(h),c.distance=u;break;case"spot":c=new Jm(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ei(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),s=Promise.resolve(c),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class DM{constructor(){this.name=le.KHR_MATERIALS_UNLIT}getMaterialType(){return Xn}extendParams(t,e,n){const s=[];t.color=new Dt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Mn),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,We))}return Promise.all(s)}}class NM{constructor(t){this.parser=t,this.name=le.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=Fe(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class UM{constructor(t){this.parser=t,this.name=le.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Fe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Ft(r,r)}return Promise.all(s)}}class FM{constructor(t){this.parser=t,this.name=le.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Fe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];return e.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}}class OM{constructor(t){this.parser=t,this.name=le.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Fe(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class kM{constructor(t){this.parser=t,this.name=le.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Fe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class BM{constructor(t){this.parser=t,this.name=le.KHR_MATERIALS_SHEEN}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Fe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];if(e.sheenColor=new Dt(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],Mn)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,We)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class zM{constructor(t){this.parser=t,this.name=le.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Fe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class HM{constructor(t){this.parser=t,this.name=le.KHR_MATERIALS_VOLUME}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Fe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return e.attenuationColor=new Dt().setRGB(r[0],r[1],r[2],Mn),Promise.all(s)}}class GM{constructor(t){this.parser=t,this.name=le.KHR_MATERIALS_IOR}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Fe(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}}class VM{constructor(t){this.parser=t,this.name=le.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Fe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return e.specularColor=new Dt().setRGB(r[0],r[1],r[2],Mn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,We)),Promise.all(s)}}class WM{constructor(t){this.parser=t,this.name=le.EXT_MATERIALS_BUMP}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Fe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(s)}}class XM{constructor(t){this.parser=t,this.name=le.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Fe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Fe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class qM{constructor(t){this.parser=t,this.name=le.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class YM{constructor(t){this.parser=t,this.name=le.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class KM{constructor(t){this.parser=t,this.name=le.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class pd{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class ZM{constructor(t){this.name=le.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==In.TRIANGLES&&c.mode!==In.TRIANGLE_STRIP&&c.mode!==In.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const v=new Yt,p=new y,m=new _e,M=new y(1,1,1),b=new Mm(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&M.fromBufferAttribute(l.SCALE,x),b.setMatrixAt(x,v.compose(p,m,M));let S=null;for(const x in l)if(x==="_COLOR_0"){const T=l[x];b.instanceColor=new ra(T.array,T.itemSize,T.normalized)}else if(x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"){if(S===null){const _=b.geometry;S=new Me,S.name=_.name;for(const w in _.attributes)S.setAttribute(w,_.attributes[w]);for(const w in _.morphAttributes)S.morphAttributes[w]=_.morphAttributes[w];_.index!==null&&S.setIndex(_.index),S.morphTargetsRelative=_.morphTargetsRelative;for(const w of _.groups)S.addGroup(w.start,w.count,w.materialIndex);_.boundingBox!==null&&(S.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(S.boundingSphere=_.boundingSphere.clone()),S.drawRange.start=_.drawRange.start,S.drawRange.count=_.drawRange.count,S.userData=Object.assign({},_.userData),b.geometry=S}const T=l[x];S.setAttribute(x,new ra(T.array,T.itemSize,T.normalized))}Ie.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const ap="glTF",rr=12,md={JSON:1313821514,BIN:5130562};class $M{constructor(t){this.name=le.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,rr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==ap)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-rr,r=new DataView(t,rr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===md.JSON){const c=new Uint8Array(t,rr+o,a);this.content=n.decode(c)}else if(l===md.BIN){const c=rr+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class JM{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=le.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Tc[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=Tc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=Us[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],p=l[g];p!==void 0&&(v.normalized=p)}u(f)},a,c,Mn,d)})})}}class jM{constructor(){this.name=le.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){const n=Math.cos(t.rotation),s=Math.sin(t.rotation);t.matrix.set(t.repeat.x*n,t.repeat.y*s,t.offset.x,-t.repeat.x*s,t.repeat.y*n,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}}class QM{constructor(){this.name=le.KHR_MESH_QUANTIZATION}}class lp extends Vs{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-e,u=(n-e)/h,d=u*u,f=d*u,g=t*c,v=g-c,p=-2*f+3*d,m=f-d,M=1-p,b=m-d+u;for(let S=0;S!==a;S++){const x=o[v+S+a],T=o[v+S+l]*h,_=o[g+S+a],w=o[g+S]*h;r[S]=M*x+b*T+p*_+m*w}return r}}const t1=new _e;class e1 extends lp{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return t1.fromArray(r).normalize().toArray(r),r}}const In={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Us={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gd={9728:Ue,9729:je,9984:gf,9985:Go,9986:gr,9987:ri},_d={33071:si,33648:ta,10497:as},hl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Tc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},n1={CUBICSPLINE:void 0,LINEAR:Nr,STEP:Dr},ul={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function i1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new mn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vi})),i.DefaultMaterial}function ns(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ei(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function s1(i,t,e){let n=!1,s=!1,r=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function r1(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function o1(i){let t;const e=i.extensions&&i.extensions[le.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+dl(e.attributes):t=i.indices+":"+dl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+dl(i.targets[n]);return t}function dl(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Ac(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function a1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const l1=new Yt;class c1{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new LM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new Km(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new eg(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gf(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return ns(r,a,s),ei(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const o=e[s].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[le.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Tr.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=hl[s.type],a=Us[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ce(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=hl[s.type],c=Us[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,p;if(f&&f!==u){const m=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let b=e.cache.get(M);b||(v=new c(a,m*f,s.count*f/h),b=new fm(v,f/h),e.cache.add(M,b)),p=new ih(b,l,d%f/h,g)}else a===null?v=new c(s.count*l):v=new c(a,d,s.count*l),p=new Ce(v,l,g);if(s.sparse!==void 0){const m=hl.SCALAR,M=Us[s.sparse.indices.componentType],b=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,x=new M(o[1],b,s.sparse.count*m),T=new c(o[2],S,s.sparse.count*l);a!==null&&(p=new Ce(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let _=0,w=x.length;_<w;_++){const D=x[_];if(p.setX(D,T[_*l]),l>=2&&p.setY(D,T[_*l+1]),l>=3&&p.setZ(D,T[_*l+2]),l>=4&&p.setW(D,T[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const s=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=gd[d.magFilter]||je,h.minFilter=gd[d.minFilter]||ri,h.wrapS=_d[d.wrapS]||as,h.wrapT=_d[d.wrapT]||as,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ue&&h.minFilter!==je,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(d=>d.clone());const o=s.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1,h;if(e.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,g){e.parse(d,f,g)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,g){let v=f;e.isImageBitmapLoader===!0&&(v=function(p){const m=new Xe(p);m.needsUpdate=!0,f(m)}),e.load(Tr.resolveURL(d,r.path),v,void 0,g)})})}const u=h.then(function(d){return c===!0&&a.revokeObjectURL(l),ei(d,o),d.userData.mimeType=o.mimeType||a1(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[t]=u,u}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[le.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[le.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[le.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Df,ai.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new _a,ai.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return mn}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let o;const a={},l=r.extensions||{},c=[];if(l[le.KHR_MATERIALS_UNLIT]){const u=s[le.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Dt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Mn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,We)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Be);const h=r.alphaMode||ul.OPAQUE;if(h===ul.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ul.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Xn&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ft(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Xn&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Xn){const u=r.emissiveFactor;a.emissive=new Dt().setRGB(u[0],u[1],u[2],Mn)}return r.emissiveTexture!==void 0&&o!==Xn&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,We)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),ei(u,r),e.associations.set(u,{materials:t}),r.extensions&&ns(s,u,r),u})}createUniqueName(t){const e=we.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[le.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return vd(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=o1(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[le.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=vd(new Me,c,e),c.mode===In.TRIANGLE_STRIP?d=d.then(f=>fd(f,bf)):c.mode===In.TRIANGLE_FAN&&(d=d.then(f=>fd(f,vc))),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?i1(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],p=o[f];let m;const M=c[f];if(p.mode===In.TRIANGLES||p.mode===In.TRIANGLE_STRIP||p.mode===In.TRIANGLE_FAN||p.mode===void 0){const b=r.isSkinnedMesh===!0,S=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");b&&S===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=b&&S?new ni(v,M):new pe(v,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===In.LINES)m=new la(v,M);else if(p.mode===In.LINE_STRIP)m=new oh(v,M);else if(p.mode===In.LINE_LOOP)m=new bm(v,M);else if(p.mode===In.POINTS)m=new Nf(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&r1(m,r),m.name=e.createUniqueName(r.name||"mesh_"+t),ei(m,r),p.extensions&&ns(s,m,p),e.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&ns(s,u[0],r),u[0];const d=new cn;r.extensions&&ns(s,d,r),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new vn(Qe.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new xa(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ei(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Yt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new ga(a,l)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],g=s.samplers[f.sampler],v=f.target,p=v.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],v=u[3],p=u[4],m=[];for(let b=0,S=d.length;b<S;b++){const x=d[b],T=f[b],_=g[b],w=v[b],D=p[b];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const C=n._createAnimationTracks(x,T,_,w,D);if(C)for(let I=0;I<C.length;I++)m.push(C[I])}const M=new Hm(r,void 0,m);return ei(M,s),M})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,l1)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,g=u[0];h.pivot=new y().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new sh:c.length>1?h=new cn:c.length===1?h=c[0]:h=new Ie,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ei(h,r),r.extensions&&ns(n,h,r),r.matrix!==void 0){const u=new Yt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new cn;n.name&&(r.name=s.createUniqueName(n.name)),ei(r,n),n.extensions&&ns(e,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){const d=l[h];d.parent!==null?r.add(CM(d)):r.add(d)}const c=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof ai||d instanceof Xe)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(t,e,n,s,r){const o=[],a=t.name?t.name:t.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Ui[r.path]===Ui.weights?(c(t),t.isGroup&&t.children.forEach(c)):l.push(a);let h;switch(Ui[r.path]){case Ui.weights:h=kr;break;case Ui.rotation:h=Br;break;case Ui.translation:case Ui.scale:h=ca;break;default:n.itemSize===1?h=kr:h=ca;break}const u=s.interpolation!==void 0?n1[s.interpolation]:Nr,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){const v=new h(l[f]+"."+Ui[r.path],e.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Ac(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof Br?e1:lp;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function h1(i,t,e){const n=t.attributes,s=new di;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new y(l[0],l[1],l[2]),new y(c[0],c[1],c[2])),a.normalized){const h=Ac(Us[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new y,l=new y;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=Ac(Us[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new On;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function vd(i,t,e){const n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Tc[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){const o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return he.workingColorSpace!==Mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${he.workingColorSpace}" not supported.`),ei(i,t),h1(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?s1(i,t.targets,e):i})}const xd={round:1,cup:.5,fine:!0,spacing:.8,fuzz:0},u1={name:"Lampornis calolaemus",seed:1207,sections:[{y:-.07,z:-.32,a:60,w:.035,rd:.03,rv:.035},{y:.04,z:-.245,a:60,w:.15,rd:.105,rv:.13},{y:.17,z:-.165,a:63,w:.225,rd:.16,rv:.2},{y:.34,z:-.09,a:68,w:.262,rd:.185,rv:.25},{y:.52,z:-.035,a:76,w:.258,rd:.185,rv:.245},{y:.67,z:-.005,a:84,w:.236,rd:.185,rv:.212},{y:.775,z:.008,a:80,w:.205,rd:.182,rv:.19},{y:.887,z:.052,a:62,w:.15,rd:.17,rv:.17},{y:.926,z:.116,a:38,w:.117,rd:.14,rv:.14},{y:.925,z:.195,a:18,w:.066,rd:.09,rv:.07},{y:.905,z:.245,a:8,w:.03,rd:.032,rv:.028}],throat:[4.5,7.3],spine:{tail:.3,hips:1.9,spine:3,chest:4.1,neck1:5.3,neck2:5.95,head:6.55},eye:{s:7.8,phi:.535,radius:.037,inset:.84},bill:{length:.44,radius:.02,droop:.022,color:460551},skin:1840662,shading:{flank:.6,under:.6,patch:.3,gold:5921324,goldAmount:.22},looks:{body:{width:.03,aspect:2.1,rowStep:.3,tilt:13,lift:1,cup:.3,round:.7,loose:.55,fuzz:.3,base:2104356,tip:5195350,iri:4885036,iriGraze:9071132,iriStrength:.12,iriPower:6,iriAlign:0,jitter:.5,sparkle:.6},belly:{width:.033,aspect:2.5,rowStep:.24,tilt:11,lift:1.2,cup:.25,round:.65,loose:.75,base:2630191,tip:6970485,iri:6982186,iriGraze:9071146,iriStrength:.1,iriPower:5,iriAlign:0,jitter:.5,sparkle:.6},flank:{width:.036,aspect:2.8,rowStep:.24,tilt:12,lift:1.3,cup:.2,round:.55,loose:.9,base:2301226,tip:6313066,iri:5925434,iriGraze:6965802,iriStrength:.06,iriPower:4,iriAlign:0,jitter:.5,sparkle:.7},down:{width:.04,aspect:2.6,rowStep:.24,tilt:26,lift:1.4,cup:.15,round:.5,loose:1,base:1840664,tip:4207930,iri:16777215,iriGraze:16777215,iriStrength:0,iriPower:2,iriAlign:0,jitter:.3},back:{width:.03,aspect:2,rowStep:.31,tilt:11,lift:.9,cup:.35,round:.75,loose:.45,fuzz:.3,base:2039078,tip:4867669,iri:3840570,iriGraze:9071128,iriStrength:.24,iriPower:7,iriAlign:0,jitter:.5,sparkle:.45},scapular:{width:.042,aspect:3.3,rowStep:.24,tilt:21,lift:.8,cup:.3,round:.6,loose:.6,fuzz:.4,base:2170408,tip:5327964,iri:3836474,iriGraze:9071128,iriStrength:.2,iriPower:6,iriAlign:0,jitter:.5,sparkle:.5},collar:{width:.027,aspect:1.45,rowStep:.36,tilt:12,lift:.8,cup:.35,round:1,loose:.3,spacing:.7,fuzz:.12,base:1184536,tip:2369580,iri:2072672,iriGraze:678490,iriStrength:.32,iriPower:12,iriAlign:.3,iriAim:[0,.1,1],jitter:.55,sparkle:.6},head:{width:.017,aspect:1.8,rowStep:.34,tilt:12,lift:.45,cup:.35,round:.9,loose:.4,fuzz:.22,base:1184279,tip:2763315,iri:1866320,iriGraze:5263386,iriStrength:.28,iriPower:7,iriAlign:0,jitter:.45,sparkle:.4},mask:{width:.012,aspect:1.7,rowStep:.36,tilt:10,lift:.2,cup:.3,round:.9,loose:.35,fuzz:.25,base:263173,tip:789517,iri:1054752,iriGraze:0,iriStrength:.04,iriPower:4,iriAlign:0,jitter:.2},velvet:{width:.015,aspect:1.6,rowStep:.28,tilt:6,lift:.15,cup:.2,round:.7,loose:.8,fuzz:.7,base:262915,tip:985865,iri:0,iriGraze:0,iriStrength:0,iriPower:2,iriAlign:0,jitter:.2},stripe:{width:.012,aspect:2.6,rowStep:.24,tilt:6,lift:.2,cup:.15,round:.5,loose:.95,fuzz:1,base:11841962,tip:15526885,iri:16777215,iriGraze:16777215,iriStrength:0,iriPower:2,iriAlign:0,jitter:.2},covert:{width:.046,aspect:2.6,rowStep:.33,tilt:9,lift:.7,cup:.3,round:.7,loose:.4,base:2170151,tip:5129816,iri:3832400,iriGraze:5917226,iriStrength:.18,iriPower:6,iriAlign:0,jitter:.4,sparkle:.5},undertail:{width:.04,aspect:2.9,rowStep:.26,tilt:10,lift:.8,cup:.2,round:.6,loose:.8,base:7827564,tip:13617342,iri:16777215,iriGraze:16777215,iriStrength:0,iriPower:2,iriAlign:0,jitter:.3},wingCovert:{width:.03,aspect:2.3,rowStep:.4,tilt:7,lift:0,cup:.3,round:.8,loose:.22,fuzz:0,base:1512732,tip:4012104,iri:4872824,iriGraze:5917242,iriStrength:.06,iriPower:6,iriAlign:0,jitter:.4,sparkle:.6},gorget:{...xd,width:.052,aspect:1,rowStep:.3,tilt:8,lift:.5,spacing:.6,base:1706510,tip:4527900,iri:8007935,iriGraze:12595338,iriStrength:2,iriPower:4.2,iriAlign:.74,iriAim:[0,-.5,.87],jitter:.34,channel:"gorget"},crown:{...xd,width:.019,aspect:1.3,rowStep:.34,tilt:10,lift:.4,fuzz:.45,sparkle:.5,loose:.12,base:330507,tip:662554,iri:1368772,iriGraze:1726680,iriStrength:2.3,iriPower:5,iriAlign:.8,iriAim:[0,-.24,1],jitter:.55,channel:"crown"}},tracts:[{name:"belly",look:"belly",region:{kind:"band",s:[0,3.7],phi:[0,.45],soft:.6}},{name:"flank",look:"flank",region:{kind:"band",s:[1.2,4.2],phi:[.3,.52],soft:.5}},{name:"back",look:"back",region:{kind:"band",s:[.9,6.2],phi:[.55,1]}},{name:"scapular",look:"scapular",region:{kind:"band",s:[3.7,5.6],phi:[.56,.84],soft:.3}},{name:"wingPit",look:"down",region:{kind:"blob",at:[3.8,.44],r:[.3,.035],soft:.5}},{name:"tailCoverts",look:"covert",region:{kind:"band",s:[0,1.15],phi:[0,1]}},{name:"undertail",look:"undertail",region:{kind:"band",s:[0,1.35],phi:[0,.4],soft:.3}},{name:"collar",look:"collar",region:{kind:"blob",at:[4.5,0],r:[.72,.44],soft:.6}},{name:"head",look:"head",region:{kind:"band",s:[6,11],phi:[0,1]}},{name:"velvet",look:"velvet",region:{kind:"blob",at:[8,0],r:[2.25,.63],pow:3,soft:.2}},{name:"mask",look:"mask",region:{kind:"blob",at:[8.3,.5],r:[1,.11]}},{name:"gorget",look:"gorget",region:{kind:"blob",at:[6.35,0],r:[1.4,.27],pow:3}},{name:"chin",look:"gorget",region:{kind:"blob",at:[7.7,0],r:[1.05,.17]}},{name:"crown",look:"crown",region:{kind:"blob",at:[8.5,1],r:[1.3,.4]}},{name:"postocular",look:"stripe",region:{kind:"streak",from:[7.5,.57],to:[6.3,.6],r:[.12,.025]}}],wing:{shoulder:[.185,.64,-.06],upper:.1,fore:.13,hand:.17,primaries:10,secondaries:6,primaryLen:[.34,.9],secondaryLen:[.27,.2],primaryWidth:.062,secondaryWidth:.064,rest:{from:[5.1,93],to:[.6,147],width:[.05,.105,.04],height:.034,cross:[.8,-.02]},color:3878193,sheen:8021618},tail:{rectrices:5,length:[.61,.66],width:.13,droop:62,restFan:.35,maxFan:11,color:1909292},legs:{spread:.075,hip:[.085,.11,-.05],toe:.085,perchRadius:.0405,color:1446159},behaviour:{breathHz:[3.4,5.2],holdCalm:[.4,1.8],holdAlert:[.22,.9],saccade:[.038,42e-5],neckShare:[.22,.3],blinkEvery:[1.8,5.5],ruffleEvery:[60,110],tailEvery:[3,9],wingEvery:[9,22],billUp:14}},wn={iri:6733892,iriGraze:3116914,iriStrength:.07,iriPower:3,iriAlign:0,jitter:.4,sparkle:.25},cp={name:"Amazona vittata",seed:1493,sections:[{y:-.1,z:-.3,a:58,w:.06,rd:.045,rv:.05},{y:.02,z:-.235,a:58,w:.17,rd:.12,rv:.14},{y:.15,z:-.16,a:61,w:.235,rd:.165,rv:.2},{y:.32,z:-.085,a:66,w:.265,rd:.19,rv:.245},{y:.5,z:-.03,a:74,w:.265,rd:.195,rv:.25},{y:.66,z:0,a:82,w:.245,rd:.195,rv:.225},{y:.78,z:.015,a:78,w:.228,rd:.2,rv:.208},{y:.905,z:.06,a:60,w:.205,rd:.205,rv:.2},{y:.965,z:.14,a:36,w:.19,rd:.185,rv:.18},{y:.965,z:.24,a:14,w:.14,rd:.14,rv:.125},{y:.94,z:.305,a:0,w:.066,rd:.08,rv:.064}],throat:[4.5,7.3],spine:{tail:.3,hips:1.9,spine:3,chest:4.1,neck1:5.3,neck2:5.95,head:6.55},eye:{s:7.75,phi:.53,radius:.03,inset:.86,bare:1.6,ring:{color:15130836,width:1.36},lid:12433066,iris:9061398,pupil:[.955,.987]},bill:{length:.115,radius:.062,droop:.03,color:13483932,hook:{reach:.127,drop:.066,upper:.046,lower:.03,cere:12168604},gape:.6},skin:1317392,headRuff:0,shading:{flank:.86,under:.82,patch:.14,gold:10139706,goldAmount:.18},looks:{body:{edge:.5,closed:.85,...wn,width:.062,aspect:1.4,rowStep:.36,tilt:8,lift:.9,cup:.3,round:.95,loose:.12,fuzz:.06,base:2047258,tip:5220408},breast:{edge:.8,closed:.9,...wn,width:.066,aspect:1.45,rowStep:.36,tilt:8,lift:.9,cup:.32,round:1,loose:.1,fuzz:.05,spacing:.7,base:2310681,tip:5811772},belly:{edge:.28,closed:.65,...wn,width:.064,aspect:1.5,rowStep:.34,tilt:9,lift:1.1,cup:.28,round:.95,loose:.2,fuzz:.12,base:2902559,tip:7649352},flank:{edge:.3,closed:.65,...wn,width:.066,aspect:1.6,rowStep:.33,tilt:10,lift:1.2,cup:.26,round:.9,loose:.24,fuzz:.12,base:2442012,tip:6073918},down:{width:.05,aspect:2.2,rowStep:.26,tilt:22,lift:1.3,cup:.15,round:.5,loose:1,base:3818038,tip:7635052,iri:16777215,iriGraze:16777215,iriStrength:0,iriPower:2,iriAlign:0,jitter:.3},back:{edge:.45,closed:.88,...wn,width:.07,aspect:1.5,rowStep:.36,tilt:8,lift:.8,cup:.32,round:.9,loose:.18,fuzz:.06,base:1783832,tip:4168242},scapular:{edge:.4,closed:.9,...wn,width:.085,aspect:1.9,rowStep:.34,tilt:10,lift:.7,cup:.3,round:.85,loose:.15,fuzz:.05,base:1783832,tip:3970096},nape:{edge:.95,closed:.92,...wn,width:.05,aspect:1.35,rowStep:.38,tilt:9,lift:1,cup:.34,round:1,loose:.15,spacing:.7,base:1584917,tip:4102707},head:{edge:.92,closed:.92,...wn,width:.036,aspect:1.3,rowStep:.4,tilt:8,lift:.6,cup:.34,round:1,loose:.15,fuzz:.05,spacing:.7,base:1518868,tip:4168756},cheek:{edge:.6,closed:.85,...wn,width:.034,aspect:1.5,rowStep:.36,tilt:7,lift:.4,cup:.3,round:.9,loose:.3,base:2047e3,tip:5614650},lore:{edge:.2,closed:.7,...wn,width:.014,aspect:1.3,rowStep:.4,tilt:5,lift:.1,cup:.3,round:.9,loose:.3,base:1848598,tip:4694838},forecrown:{edge:.3,closed:.75,width:.022,aspect:1.4,rowStep:.4,tilt:8,lift:.3,cup:.3,round:.9,loose:.3,fuzz:.1,base:4852744,tip:13574936,iri:16734778,iriGraze:11541008,iriStrength:.05,iriPower:3,iriAlign:0,jitter:.4,sparkle:.2},covert:{edge:.4,closed:.88,...wn,width:.07,aspect:1.8,rowStep:.34,tilt:8,lift:.6,cup:.3,round:.85,loose:.2,base:1915417,tip:4497461},undertail:{edge:.1,closed:.65,...wn,width:.07,aspect:2.2,rowStep:.3,tilt:9,lift:.8,cup:.2,round:.8,loose:.4,base:3955234,tip:10208846},wingCovert:{edge:.45,closed:.9,...wn,width:.05,aspect:2,rowStep:.4,tilt:7,lift:0,cup:.3,round:.85,loose:.12,fuzz:0,base:1718039,tip:3905073}},tracts:[{name:"belly",look:"belly",region:{kind:"band",s:[0,3.6],phi:[0,.42],soft:.5}},{name:"flank",look:"flank",region:{kind:"band",s:[1.2,4],phi:[.3,.52],soft:.5}},{name:"breast",look:"breast",region:{kind:"blob",at:[4.9,0],r:[1.6,.5],soft:.4}},{name:"back",look:"back",region:{kind:"band",s:[.9,5.9],phi:[.55,1]}},{name:"scapular",look:"scapular",region:{kind:"band",s:[3.7,5.6],phi:[.56,.84],soft:.3}},{name:"wingPit",look:"down",region:{kind:"blob",at:[3.8,.44],r:[.3,.035],soft:.5}},{name:"tailCoverts",look:"covert",region:{kind:"band",s:[0,1.15],phi:[0,1]}},{name:"undertail",look:"undertail",region:{kind:"band",s:[0,1.4],phi:[0,.42],soft:.3}},{name:"nape",look:"nape",region:{kind:"band",s:[5.7,7.4],phi:[0,1],soft:.3}},{name:"head",look:"head",region:{kind:"band",s:[7,11],phi:[0,1],soft:.2}},{name:"cheek",look:"cheek",region:{kind:"blob",at:[7.7,.3],r:[.9,.2],soft:.4}},{name:"eye",look:"lore",region:{kind:"blob",at:[7.75,.53],r:[.62,.1],soft:.2}},{name:"forecrown",look:"forecrown",region:{kind:"band",s:[9.35,11],phi:[.5,1],soft:.06}}],wing:{shoulder:[.2,.63,-.06],upper:.19,fore:.23,hand:.19,primaries:10,secondaries:9,primaryLen:[.44,.7],secondaryLen:[.42,.36],primaryWidth:.115,secondaryWidth:.125,rest:{from:[5,96],to:[1.1,150],width:[.07,.14,.055],height:.032,cross:[.3,.06]},color:2058794,sheen:4889178,primaryColor:1520506,secondaryColor:2058794,covertWidth:[.05,.09],covertAspect:[1.35,1.8],drape:0,bladeScale:1.45},tail:{rectrices:6,length:[.5,.44],width:.16,droop:66,restFan:.6,maxFan:10,color:3111466,tip:9420606,sheen:5937738,centralSheen:3836474},legs:{spread:.1,hip:[.1,.12,-.05],toe:.095,perchRadius:.0405,color:11047532,toeRadius:.013,zygodactyl:!0},behaviour:{breathHz:[.6,1.1],holdCalm:[1.2,4.5],holdAlert:[.5,1.8],saccade:[.09,.0011],neckShare:[.22,.3],blinkEvery:[3,8],ruffleEvery:[50,100],tailEvery:[12,30],wingEvery:[25,60],billUp:2,parrot:!0}},Ki=matchMedia("(pointer: coarse)").matches,d1=cp.legs.perchRadius,Kn=.2;function hp(i){return d1*Math.min(1-.18*i,2.2)}const up=[Kn-.45,Kn+.45];function f1(i,t=up){i.updateMatrixWorld(!0);const e=i.getObjectByName("perch"),n=e?p1(e,t[0]-.1,t[1]+.1):null,s=n?n.geometry.getAttribute("position").clone().applyMatrix4(n.matrixWorld).array:new Float32Array,r=new Wf;r.ray.direction.set(0,-1,0);const o=[],a=new Map,l=new y,c=new y;function h(d){let f=1/0,g=-1/0;for(let v=0;v<s.length;v+=3)Math.abs(s[v]-d)>.006||(f=Math.min(f,s[v+2]),g=Math.max(g,s[v+2]));return f<=g?(f+g)/2:0}function u(d,f){if(!n)return null;r.ray.origin.set(d,2,h(d)),o.length=0,r.intersectObject(n,!1,o);const g=o[0];return g?f.copy(g.point):null}return(d,f)=>{const g=Math.round(d*1e3);let v=a.get(g);return v===void 0&&(v={point:new y,up:new y,tangent:new y,radius:hp(d)},u(d,v.point)&&u(d-.03,l)&&u(d+.03,c)?(v.tangent.copy(c).sub(l).normalize(),v.up.set(0,1,0).addScaledVector(v.tangent,-v.tangent.y).normalize()):v=null,a.set(g,v)),v?(f.point.copy(v.point),f.up.copy(v.up),f.tangent.copy(v.tangent),f.radius=v.radius,f):null}}function p1(i,t,e){const n=i.geometry,s=n.getAttribute("position"),r=n.index?n.index.count:s.count,o=h=>n.index?n.index.getX(h):h,a=[];for(let h=0;h<r;h+=3){const u=o(h),d=o(h+1),f=o(h+2),g=Math.min(s.getX(u),s.getX(d),s.getX(f));if(!(Math.max(s.getX(u),s.getX(d),s.getX(f))<t||g>e))for(const p of[u,d,f])a.push(s.getX(p),s.getY(p),s.getZ(p))}const l=new Me;l.setAttribute("position",new ee(a,3));const c=new pe(l,i.material);return c.matrixAutoUpdate=!1,c.matrixWorld.copy(i.matrixWorld),c}function yd(i,t,e,n,s){const r=i.computeFrenetFrames(e,!1),o=[],a=[],l=[],c=Yi(s),h=Array.from({length:6},()=>({u:c(),a:c()*Math.PI*2,s:.25+c()*.35})),u=new y,d=new y;for(let g=0;g<=e;g++){const v=g/e;i.getPointAt(v,u);const p=r.normals[g],m=r.binormals[g];for(let M=0;M<=n;M++){const b=M/n*Math.PI*2;d.copy(p).multiplyScalar(Math.cos(b)).addScaledVector(m,Math.sin(b));let S=t(v);S*=1+.035*Math.sin(b*7+v*40)+.02*Math.sin(b*13-v*90);for(const x of h){const T=(v-x.u)*18,_=Math.cos(b-x.a);S*=1+x.s*Math.exp(-T*T)*Math.max(_,0)**3}o.push(u.x+d.x*S,u.y+d.y*S,u.z+d.z*S),a.push(v,M/n)}}for(let g=0;g<e;g++)for(let v=0;v<n;v++){const p=g*(n+1)+v,m=p+n+1;l.push(p,p+1,m,m,p+1,m+1)}const f=new Me;return f.setAttribute("position",new ee(o,3)),f.setAttribute("uv",new ee(a,2)),f.setIndex(l),f.computeVertexNormals(),f}function m1(i){const t=new mn({color:16777215,roughness:.92,metalness:0});return t.onBeforeCompile=e=>{e.uniforms.uLen={value:i},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
}`)},t}function g1(){const i=new cn,t=new Mc([new y(-6,-1.414,-.927),new y(-3.2,-.709,-.364),new y(-1.4,-.312,-.11),new y(-.7,-.199,-.039),new y(0,-.041,0),new y(.5,.059,.072),new y(.9,.142,.113),new y(1.3,.193,.077),new y(1.8,.24,.04)]),e=t.getLength(),n=m1(e),s=new y,r=yd(t,p=>hp(t.getPointAt(p,s).x)*(p>.97?1-(p-.97)*20:1),320,28,3),o=new pe(r,n);o.name="perch",o.receiveShadow=!0,i.add(o);const a=new Mc([new y(1.07,.11,.26),new y(1.18,.3,.28),new y(1.28,.5,.2),new y(1.41,.7,.09)]),l=new mn({color:5208600,roughness:.65}),c=new pe(yd(a,p=>.022*(1-p*.6),60,10,9),l);c.castShadow=!0,i.add(c);const h=new gn({color:8372762,roughness:.5,sheen:.5,sheenColor:new Dt(13168720),emissive:2243072}),u=new ci(1,16,12),d=new Xr(.006,.008,1,6);d.translate(0,.5,0);const f=Yi(21),g=new y,v=new y;for(let p=0;p<9;p++){const m=.2+p/8*.78;a.getPointAt(m,g),a.getTangentAt(m,v);const M=new y(f()-.5,f()*.6,f()-.5).normalize(),b=.06+f()*.08,S=new pe(d,l);S.position.copy(g),S.quaternion.setFromUnitVectors(new y(0,1,0),M.clone().add(v.clone().multiplyScalar(.4)).normalize()),S.scale.set(1,b,1),i.add(S);const x=g.clone().addScaledVector(M.clone().add(v.clone().multiplyScalar(.4)).normalize(),b);for(let T=0;T<2+Math.floor(f()*3);T++){const _=new pe(u,h),w=.018+f()*.018;_.scale.set(w,w*1.25,w),_.position.copy(x).add(new y(f()-.5,f()-.5,f()-.5).multiplyScalar(.05)),_.castShadow=!0,i.add(_)}}return{group:i}}async function _1(i,t){const n=(await new PM().loadAsync(i,t)).scene;n.traverse(o=>{const a=o;if(a.isMesh){a.receiveShadow=!0,a.castShadow=!/perch|hairs/i.test(a.name);for(const l of Array.isArray(a.material)?a.material:[a.material]){const c=l;c.envMapIntensity=.8}}});const s=n.getObjectByName("perch");let r=null;if(s){r=S1(s),n.add(r);const o=n.getObjectByName("hairs");o&&n.add(v1(s,o.material))}return{group:n,fuzz:r}}function To(i,t,e,n,s){i[t]=e,i[t+1]=n,i[t+2]=s}function v1(i,t){const e=Ki?7e3:16e3,n=new RM(i).build(),s=Yi(31),r=new y,o=new y,a=new y,l=new y,c=new y,h=new Float32Array(e*9),u=new Float32Array(e*9),d=new Float32Array(e*6);let f=0;for(let p=0;f<e&&p<e*4;p++){if(n.sample(r,o),Math.abs(r.x-Kn)<.17||r.x<-2.8||o.y<-.3&&s()<.7)continue;a.set(s()-.5,s()-.5,s()-.5).cross(o).normalize(),l.crossVectors(o,a);const m=.45+s()*.5,M=.005+s()*s()*.014;c.copy(o).multiplyScalar(1-m).addScaledVector(a,m).normalize();const b=45e-5+s()*3e-4,S=r.addScaledVector(o,-.001),x=f*9;To(h,x,S.x-l.x*b,S.y-l.y*b,S.z-l.z*b),To(h,x+3,S.x+l.x*b,S.y+l.y*b,S.z+l.z*b),To(h,x+6,S.x+c.x*M,S.y+c.y*M,S.z+c.z*M);for(let T=0;T<9;T+=3)To(u,x+T,o.x,o.y,o.z);d[f*6+2]=1,d[f*6+4]=.5,d[f*6+5]=1,f++}const g=new Me;g.setAttribute("position",new Ce(h.slice(0,f*9),3)),g.setAttribute("normal",new Ce(u.slice(0,f*9),3)),g.setAttribute("uv",new Ce(d.slice(0,f*6),2));const v=new pe(g,t);return v.name="twig.hairs",v.position.copy(i.position),v.quaternion.copy(i.quaternion),v.scale.copy(i.scale),v.receiveShadow=!0,v}const Md=Ki?7:14,x1=.03,y1=-3.25;function M1(i){const t=i.getAttribute("position"),e=i.index?i.index.count:t.count,n=a=>i.index?i.index.getX(a):a,s=new Uint32Array(e);let r=0;for(let a=0;a<e;a+=3){const l=n(a),c=n(a+1),h=n(a+2);Math.max(t.getX(l),t.getX(c),t.getX(h))<=y1||(s[r++]=l,s[r++]=c,s[r++]=h)}const o=new Me;for(const a in i.attributes)o.setAttribute(a,i.attributes[a]);return o.setIndex(new Ce(t.count>65535?s.slice(0,r):Uint16Array.from(s.subarray(0,r)),1)),o}function S1(i){const t=i.material,e=M1(i.geometry),n=new cn;n.name="fuzz";for(let s=1;s<=Md;s++){const r=s/Md,o=new mn({map:t.map,normalMap:t.normalMap,color:new Dt(1,1,1),roughness:1,metalness:0,alphaTest:.5,alphaToCoverage:!0,envMapIntensity:.6});o.onBeforeCompile=l=>{l.uniforms.uH={value:r},l.uniforms.uLen={value:x1},l.uniforms.uGrip={value:Kn},l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
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
           #include <alphatest_fragment>`)};const a=new pe(e,o);a.name=`fuzz.${s}`,a.position.copy(i.position),a.quaternion.copy(i.quaternion),a.scale.copy(i.scale),a.receiveShadow=!0,a.renderOrder=s,n.add(a)}return n}const Sa=-3,b1=1.8,ha=1/(b1-Sa);function or(i){const t=Math.max(0,(i-Sa)*ha);return t*t}function w1(i){return 2*Math.max(0,(i-Sa)*ha)*ha}const E1=`
uniform vec2 uSway;
uniform vec3 uShootRoot;
uniform vec3 uShootAxis;
uniform vec3 uShootMove;
uniform vec3 uShootBend;
uniform vec3 uBudBend;
attribute float aShoot; // 0 twig, 1 the shoot's stem, 2 its flowers
`,T1=`
{
  // the shoot is carried at its root, the rest bends along the twig
  float sx = max(0.0, (mix(transformed.x, uShootRoot.x, min(aShoot, 1.0)) - ${Sa.toFixed(3)}) * ${ha.toFixed(5)});
  transformed.yz += sx * sx * uSway;
  if (aShoot > 0.5) {
    vec3 r = position - uShootRoot;
    float u = clamp(dot(r, uShootAxis) / dot(uShootAxis, uShootAxis), 0.0, 1.0);
    transformed += cross(uShootMove, r) + (uShootBend + step(1.5, aShoot) * uBudBend) * u * u;
  }
}`;class fl{constructor(t,e){this.freq=t,this.zeta=e}freq;zeta;p=new y;v=new y;reset(t){this.p.copy(t),this.v.set(0,0,0)}step(t,e){const n=2*Math.PI*this.freq,s=Math.max(1,Math.ceil(e*this.freq*8)),r=e/s;for(let o=0;o<s;o++){for(const a of["x","y","z"])this.v[a]+=(-n*n*(this.p[a]-t[a])-2*this.zeta*n*this.v[a])*r;this.p.addScaledVector(this.v,r)}return this.p}}function A1(){const i=new Ei(3.4,.2),t=new Ei(2.9,.22),e=new fl(4.5,.45),n=new fl(2.6,.3),s=.5,r=new fl(4.2,.38),o=new y,a=20,l=.4,c=.11;let h=!1;const u=new y,d=new y,f=new y,g=new y,v=new y;let p=!0,m=null;const M={uSway:{value:new Ft},uShootRoot:{value:new y(.95,.04,.1)},uShootAxis:{value:new y(.45,.65,0)},uShootMove:{value:new y},uShootBend:{value:new y},uBudBend:{value:new y}},b=()=>m===null?0:-.005*_.give*or(m)/or(Kn)**2,S=1,x=new WeakSet;function T(w){if(x.has(w))return;x.add(w);const D=w.onBeforeCompile,C=w.customProgramCacheKey();w.onBeforeCompile=(I,L)=>{D.call(w,I,L),Object.assign(I.uniforms,M),I.vertexShader=I.vertexShader.replace("#include <common>",`#include <common>
${E1}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${T1}`)},w.customProgramCacheKey=()=>`${C}|sway`,w.needsUpdate=!0}const _={uniforms:M,patch:T,reach(w,D){if(!h)return!1;const C=M.uShootRoot.value;return u.copy(C).add(M.uShootAxis.value),w.distanceSqToSegment(v.copy(C).lerp(u,.15),u,d,D)<c*c},brush(w,D,C){const I=M.uShootAxis.value,L=Qe.clamp(v.copy(w).sub(M.uShootRoot.value).dot(I)/I.lengthSq(),0,1),F=v.copy(I).normalize(),R=Qe.clamp(D.length(),.3,2);r.v.addScaledVector(D,a*C*R*(.3+L)).addScaledVector(F,-r.v.dot(F)*.8),r.v.length()>l&&r.v.setLength(l)},give:1,at(w,D){const C=or(w);return D.set(0,i.x*C,t.x*C)},load(w){m=w},settle(){i.x=b(),i.v=t.x=t.v=0,p=!0},push(w,D,C=0){const I=or(w)*S*D*_.give;i.kick(-I),t.kick(I*.35*C)},use(w){w.updateMatrixWorld(!0);const D=[];w.traverse(I=>{const L=I;if(L.isMesh){for(const F of Array.isArray(L.material)?L.material:[L.material])T(F);/^(shoot|buds|hairs)$/.test(L.name)&&D.push(L)}});const C=D.find(I=>I.name==="shoot");if(h=!!C,C){const I=C.geometry.getAttribute("position");C.geometry.computeBoundingBox();const L=C.geometry.boundingBox,F=new y,R=new y;let U=0,B=0;const k=new y;for(let $=0;$<I.count;$++)k.fromBufferAttribute(I,$),k.y<L.min.y+.03&&(F.add(k),U++),k.y>L.max.y-.03&&(R.add(k),B++);F.divideScalar(Math.max(U,1)),R.divideScalar(Math.max(B,1)),M.uShootRoot.value.copy(F),M.uShootAxis.value.copy(R).sub(F)}for(const I of D){const L=I.geometry.getAttribute("position").count;I.geometry.setAttribute("aShoot",new ee(new Float32Array(L).fill(I.name==="shoot"?1:2),1))}p=!0},update(w){if(w<=0)return;i.step(b(),w),t.step(0,w),M.uSway.value.set(i.x,t.x);const D=M.uShootRoot.value,C=M.uShootAxis.value,I=w1(D.x),L=or(D.x),F=M.uShootMove.value.set(0,-I*t.x,I*i.x);f.copy(C).add(v.crossVectors(F,C)),f.y+=L*i.x,f.z+=L*t.x,p&&(p=!1,e.reset(f),n.reset(f),r.reset(o)),e.step(f,w),r.step(o,w),g.copy(f).lerp(e.p,s).add(r.p),n.step(g,w),M.uShootBend.value.copy(g).sub(f),M.uBudBend.value.copy(n.p).sub(g).multiplyScalar(s)}};return _}const Ao=["tail","hips","spine","chest","neck1","neck2","head"];class R1{constructor(t){this.species=t;const e=t.sections;this.count=e.length,this.ys=e.map(n=>n.y),this.zs=e.map(n=>n.z),this.as=e.map(n=>n.a*Lt),this.ws=e.map(n=>n.w),this.rds=e.map(n=>n.rd),this.rvs=e.map(n=>n.rv)}species;count;ys;zs;as;ws;rds;rvs;a=new y;b=new y;c=new y;get sMax(){return this.count-1}center(t,e){return e.set(0,Ln(this.ys,t),Ln(this.zs,t))}axis(t,e){const n=Ln(this.as,t);return e.set(0,Math.sin(n),Math.cos(n))}point(t,e,n){const s=Ln(this.as,t),r=Math.max(Ln(this.ws,t),.004),o=Math.max(Ln(this.rds,t),.004),a=Math.max(Ln(this.rvs,t),.004),l=Math.cos(e),c=Math.sin(e),h=1+.06*Math.sin(e*2)**2,u=-l*(l>0?a:o)*h,d=Ln(this.ys,t),f=Ln(this.zs,t);n.set(c*r*h,d+Math.cos(s)*u,f-Math.sin(s)*u);const g=this.wingBulge(t,e);if(g>0){const v=Math.hypot(n.x,n.y-d,n.z-f)||1,p=1+g/v;n.set(n.x*p,d+(n.y-d)*p,f+(n.z-f)*p)}return n}surface(t,e,n){const r=Ut(t,0,this.sMax);this.point(r,e,n.p);const o=Math.max(r-.01,0),a=Math.min(r+.01,this.sMax);return this.point(a,e,this.a).sub(this.point(o,e,this.b)),this.point(r,e+.01,this.b).sub(this.point(r,e-.01,this.c)),n.n.crossVectors(this.b,this.a).normalize(),n.t.copy(this.a).multiplyScalar(-1),n.t.addScaledVector(n.n,-n.t.dot(n.n)).normalize(),n}wingHalfWidth(t){const[e,n,s]=this.species.wing.rest.width;return t<.35?ct(e,n,it(0,.35,t)):ct(n,s,it(.35,1,t))}wingHalfAngle(t,e){const n=(Ln(this.ws,t)+(Ln(this.rds,t)+Ln(this.rvs,t))/2)/2;return this.wingHalfWidth(e)/Math.max(n,.03)}wingUV(t,e){const n=this.species.wing.rest,s=Math.PI*2;let r=(e%s+s)%s;r>Math.PI&&(r=s-r);const o=(n.from[0]-t)/(n.from[0]-n.to[0]),a=Ut(o,0,1),l=ct(n.from[1],n.to[1],a)*Lt;return{u:o,v:(r-l)/this.wingHalfAngle(t,a)}}wingAt(t,e,n){const s=this.species.wing.rest,r=ct(s.from[0],s.to[0],t),o=ct(s.from[1],s.to[1],Ut(t,0,1))*Lt+e*this.wingHalfAngle(Ut(r,0,this.sMax),Ut(t,0,1));return{s:r,ang:n>0?o:Math.PI*2-o}}wingBulge(t,e){const{u:n,v:s}=this.wingUV(t,e);if(n<=0||n>=1||Math.abs(s)>=1)return 0;const r=1-s*s;return this.species.wing.rest.height*it(0,.1,n)*(1-it(.8,1,n))*r*r}front=null;frontLength(t){if(!this.front){this.front=[0];for(let r=1;r<=this.sMax*20;r++)this.front.push(this.front[r-1]+this.point(r/20,0,this.a).distanceTo(this.point((r-1)/20,0,this.b)))}const n=Ut(t,0,this.sMax)*20,s=Math.min(Math.floor(n),this.front.length-2);return ct(this.front[s],this.front[s+1],n-s)}frontAt(t){this.frontLength(0);const e=this.front;let n=0,s=e.length-1;if(t<=0)return 0;if(t>=e[s])return this.sMax;for(;s-n>1;){const r=n+s>>1;e[r]<=t?n=r:s=r}return(n+(t-e[n])/Math.max(e[s]-e[n],1e-9))/20}weights(t){const e=this.species.spine;for(let n=0;n<Ao.length-1;n++){const s=Ao[n],r=Ao[n+1];if(t<=e[r]||n===Ao.length-2){const o=it(e[s],e[r],t);return[s,1-o,r,o]}}return["head",1,"head",0]}skin(t,e){const n=this.species.spine,s=.5+.5*Math.cos(e),r=this.weights(t),a=.6*(it(n.hips-.4,n.spine,t)*(1-it(n.chest+.2,n.neck1+.3,t)))*(.35+.65*s),[l,c]=this.species.throat,h=it(.25,.85,s)*it(l-.9,l,t),u=Ut((this.frontLength(t)-this.frontLength(l))/(this.frontLength(c)-this.frontLength(l)),0,1),d=new Map,f=(p,m)=>d.set(p,(d.get(p)??0)+m);f(r[0],r[1]*(1-a)*(1-h)),f(r[2],r[3]*(1-a)*(1-h)),f("sternum",a*(1-h*u*(2-u))),f("throat",(1-a)*h*(1-u)*(1-u)),f("gular",h*2*u*(1-u)),f("head",h*u*u);const g=[...d].sort((p,m)=>m[1]-p[1]).slice(0,4);for(;g.length<4;)g.push(["root",0]);const v=g.reduce((p,m)=>p+m[1],0);return{bones:g.map(p=>p[0]),weights:g.map(p=>p[1]/v)}}bodyCoord(t){return 1-Ut(t/this.sMax,0,1)}}const en=["L","R"],Rn=i=>i==="L"?1:-1,C1=i=>new y(i[0],i[1],i[2]),pl=new y,Sd=new y,Ro=new y,P1=new Yt;function ss(i,t,e=new _e){return Ro.copy(i).normalize(),pl.crossVectors(t,Ro).normalize(),Sd.crossVectors(Ro,pl),e.setFromRotationMatrix(P1.makeBasis(pl,Sd,Ro))}const ar=(i,t)=>new y(i.x*t,i.y,i.z);function L1(i){const t=new R1(i),e={},n=[],s={};function r(L,F,R,U=new _e){const B=new sh;B.name=L;const k={pos:new y,quat:new _e,worldPos:R.clone(),worldQuat:U.clone()};if(F){const $=s[F],V=$.worldQuat.clone().invert();k.pos.copy(R).sub($.worldPos).applyQuaternion(V),k.quat.copy(V).multiply(U),e[F].add(B)}else k.pos.copy(R),k.quat.copy(U);return B.position.copy(k.pos),B.quaternion.copy(k.quat),e[L]=B,s[L]=k,n.push(B),B}const o=L=>t.center(L,new y),a=i.spine,l=r("root",null,new y);r("hips","root",o(a.hips)),r("spine","hips",o(a.spine)),r("chest","spine",o(a.chest)),r("neck1","chest",o(a.neck1)),r("neck2","neck1",o(a.neck2)),r("head","neck2",o(a.head)),r("throat","chest",o(a.head)),r("gular","chest",t.point((i.throat[0]+i.throat[1])/2,0,new y)),r("sternum","chest",t.point(a.spine+.4,0,new y));const c=o(t.sMax),h=t.axis(t.sMax,new y),u=ss(h,new y(0,1,0));r("bill","head",c,u),r("jaw","head",c.clone().add(new y(0,-.012,-.04)),u);const d=new y(0,0,1).applyQuaternion(u),f=new y(0,1,0).applyQuaternion(u),g=i.bill.length,v=L=>c.clone().addScaledVector(d,L*g).addScaledVector(f,-.004-i.bill.droop*L*L);r("tongue.1","jaw",v(.06),u),r("tongue.2","tongue.1",v(.5),u),r("tongue.3","tongue.2",v(.7),u);const p={},m={p:new y,n:new y,t:new y};for(const L of en){const F=Rn(L);t.surface(i.eye.s,i.eye.phi*Math.PI,m);const R=m.n.clone().multiplyScalar(.7).add(new y(.3,.02,.04)).normalize(),U=m.p.clone().addScaledVector(R,-i.eye.radius*i.eye.inset);R.x*=F,U.x*=F;const B=ss(R,new y(0,1,0));p[L]={side:L,center:U,out:R,eye:r(`eye.${L}`,"head",U,B),lidUpper:r(`lidUpper.${L}`,"head",U,B),lidLower:r(`lidLower.${L}`,"head",U,B),nict:r(`nict.${L}`,"head",U,B)}}const M=i.wing,b={};{const L=C1(M.shoulder),F={p:new y,n:new y,t:new y},R=(at,Tt,Gt)=>{const kt=t.wingAt(at,Tt,1);return t.surface(kt.s,kt.ang,F),F.p.clone().addScaledVector(F.n,-Gt)},U=i.tail.droop*Lt,B=new y(0,-Math.sin(U),-Math.cos(U)),k=new y(0,Math.cos(U),-Math.sin(U)),$=o(a.tail).addScaledVector(B,i.tail.length[1]*M.rest.cross[0]).addScaledVector(k,.03);$.x=M.rest.cross[1];const V=R(.03,.4,.02),W=R(.2,-.35,.014),j=F.n.clone(),Q=$.clone().sub(W).normalize();j.addScaledVector(Q,-j.dot(Q)).normalize();const X=new y().crossVectors(j,Q),N=t.axis(a.spine,new y).multiplyScalar(-1),Y=new y(0,-N.z,N.y);Y.z>0&&Y.multiplyScalar(-1);const G=new y(1,0,0),st=(at,Tt,Gt)=>at.clone().applyAxisAngle(Tt,Gt),Z=[];Z.push({name:"shoulder",parent:"chest",pos:L,dir:V.clone().sub(L),n:j,sDir:G.clone().multiplyScalar(.85).addScaledVector(N,.5)}),Z.push({name:"forearm",parent:"shoulder",pos:V,dir:W.clone().sub(V),n:j,sDir:G.clone().multiplyScalar(.9).addScaledVector(N,-.35)}),Z.push({name:"hand",parent:"forearm",pos:W,dir:Q,n:j,sDir:G.clone()});const ut=M.primaries;for(let at=0;at<ut;at++){const Tt=at/(ut-1),Gt=W.clone().addScaledVector(Q,M.hand*(at+.4)/ut).addScaledVector(X,(1-Tt)*.04).addScaledVector(j,(1-Tt)*.004),kt=$.clone().addScaledVector(X,(1-Tt)*.05).sub(Gt).normalize();Z.push({name:`primary#${at+1}`,parent:"hand",pos:Gt,dir:kt,n:j,sDir:st(G,Y,ct(58,-4,Math.pow(Tt,.62))*Lt)})}const mt=M.secondaries;for(let at=0;at<mt;at++){const Tt=at/(mt-1),Gt=W.clone().lerp(V,(at+.7)/(mt+.4)).addScaledVector(X,.03+Tt*.015);Z.push({name:`secondary#${at+1}`,parent:"forearm",pos:Gt,dir:st(Q,j,ct(7,16,Tt)*Lt),n:j,sDir:st(G,Y,ct(82,97,Tt)*Lt)})}for(const at of en){const Tt=Rn(at),Gt=Wt=>Wt.includes("#")?Wt.replace("#",`.${at}.`):`${Wt}.${at}`,kt={side:at,bones:[],folded:[],spread:[],primaries:[],secondaries:[]},ue={chest:new _e};for(const Wt of Z){const jt=Gt(Wt.name),dt=Wt.parent==="chest"?"chest":Gt(Wt.parent),nt=ss(ar(Wt.dir,Tt),ar(Wt.n,Tt)),Zt=r(jt,dt,ar(Wt.pos,Tt),nt),Jt=ss(ar(Wt.sDir,Tt),ar(Y,Tt));ue[jt]=Jt,kt.bones.push(Zt),kt.folded.push(s[jt].quat.clone()),kt.spread.push(ue[dt].clone().invert().multiply(Jt)),Wt.name.startsWith("primary")&&kt.primaries.push(Zt),Wt.name.startsWith("secondary")&&kt.secondaries.push(Zt)}b[at]=kt}}const S=i.tail,x=[];{const L=S.droop*Lt,F=new y(0,-Math.sin(L),-Math.cos(L)),R=new y(0,Math.cos(L),-Math.sin(L)),U=ss(F,R),B=o(a.tail);r("tail","hips",B,U);const k=new y(1,0,0).applyQuaternion(U);for(const $ of en)for(let V=0;V<S.rectrices;V++){const W=(V+.5)*($==="L"?-1:1),j=B.clone().addScaledVector(k,W*.006).addScaledVector(R,-V*.004-($==="L"?.002:0)).addScaledVector(F,.02),Q=U.clone().multiply(new _e().setFromAxisAngle(new y(0,1,0),W*S.restFan*Lt));x.push({bone:r(`rectrix.${$}.${V+1}`,"tail",j,Q),k:W})}}const T=i.legs,_={},w={};let D=.1;for(const L of en){const F=Rn(L),R=new y(T.spread*F,0,0);r(`foot.${L}`,"root",R);const U=R.clone().add(new y(0,.014,-.012)),B=new y(T.hip[0]*F,T.hip[1],T.hip[2]);w[L]=U,_[L]=B.clone().sub(s.hips.worldPos),D=B.distanceTo(U),r(`tarsus.${L}`,`foot.${L}`,U,ss(B.clone().sub(U),new y(1,0,0)));for(let k=0;k<4;k++)r(`toe.${L}.${k+1}`,`foot.${L}`,R)}l.updateMatrixWorld(!0);const C=new ga(n),I=new Map(n.map((L,F)=>[L.name,F]));return{species:i,loft:t,rootBone:l,bones:e,list:n,rest:s,skeleton:C,index:L=>{const F=I.get(L);if(F===void 0)throw new Error(`no bone ${L}`);return F},wings:b,rectrices:x,eyes:p,hipSocket:_,ankle:w,tarsusLength:D}}const I1=0,D1=1,N1=2,mh=3,U1=4,F1=2,O1=3,bd=4,wd=5;class Rc{pos=[];nor=[];uv=[];root=[];hinge=[];data=[];iriN=[];cBase=[];cTip=[];cIri=[];cIri2=[];edge=[];si=[];sw=[];idx=[];S=new y;H=new y;P=new y;Nv=new y;In=new y;add(t){const{cols:e,rows:n}=t,s=this.S.crossVectors(t.normal,t.dir).normalize(),r=this.H.crossVectors(t.dir,t.normal).normalize(),o=this.pos.length/3,a=t.width/2;for(let l=0;l<n;l++){const c=l===n-1,h=t.scallop?l/(n-1):n===4?[0,.5,.82,.965][l]:Math.pow(l/(n-1),.9),u=ct(1.25,2.1,t.round),d=Ut((h-.5)/.5,0,1),f=Math.pow(Math.max(1-Math.pow(d,u),0),1/u),g=t.scallop?1:n===4?ct(.5,1,it(0,.5,h))*f:ct(.4,1,it(0,t.widen??.12,h))*(c?.42:Math.pow(Math.max(1-Math.pow(Ut((h-.8)/.2,0,1),2.2),0),.45));for(let v=0;v<e;v++){const p=e===1?0:v/(e-1)*2-1,m=p<0?1-t.asym:1+t.asym;let M=p*a*g*m;const b=c&&!t.scallop?h+(1-h)*(1-p*p):h;let S=b*t.length;if(t.scallop){const _=Ut((h-.5)/.5,0,1),w=p*Math.PI/2;M=ct(p*a*ct(.72,1,Math.min(h/.5,1)),Math.sin(w)*a,_),S=ct(Math.min(h,.5)*t.length,.5*t.length+Math.cos(w)*.5*t.length,_)}const x=t.cup*a*(p*g)*(p*g)+t.curl*t.length*b*b;this.P.copy(t.root).addScaledVector(s,M).addScaledVector(t.dir,S).addScaledVector(t.normal,-x),this.Nv.copy(t.normal).addScaledVector(s,2*t.cup*p*g).addScaledVector(t.dir,2*t.curl*b),this.In.copy(t.iriNormal).addScaledVector(s,.3*t.cup*p*g).addScaledVector(t.dir,.1*(b-.6)).normalize(),t.skinNormal&&this.Nv.normalize().lerp(t.skinNormal,ct(.45,.8,Math.min(t.loose*2,1))),this.Nv.normalize(),this.pos.push(this.P.x,this.P.y,this.P.z),this.nor.push(this.Nv.x,this.Nv.y,this.Nv.z),t.scallop?this.uv.push(M/a,S/t.length):this.uv.push(p,b),this.root.push(t.root.x,t.root.y,t.root.z),this.hinge.push(r.x,r.y,r.z),this.data.push(t.rand,t.coord,t.gain,t.channel),this.iriN.push(this.In.x,this.In.y,this.In.z),this.cBase.push(t.base.r,t.base.g,t.base.b,t.iriStrength/4),this.cTip.push(t.tip.r,t.tip.g,t.tip.b,t.loose),this.cIri.push(t.iri.r,t.iri.g,t.iri.b,t.iriPower/32),this.cIri2.push(t.iri2.r,t.iri2.g,t.iri2.b,t.cover),this.edge.push(t.edge??0,t.closed??0);const T=t.skinAt?t.skinAt(this.P):t;this.si.push(...T.bones),this.sw.push(...T.weights)}}for(let l=0;l<n-1;l++)for(let c=0;c<e-1;c++){const h=o+l*e+c,u=h+e;this.idx.push(h,u,h+1,u,u+1,h+1)}}build(){const t=new Me,e=(r,o)=>new Ce(new Float32Array(r),o),n=(r,o)=>{const a=new Uint16Array(r.length);for(let l=0;l<r.length;l++)a[l]=Math.round(Ut(r[l],0,1)*65535);return new Ce(a,o,!0)},s=(r,o)=>{const a=new Int16Array(r.length);for(let l=0;l<r.length;l++)a[l]=Math.round(Ut(r[l],-1,1)*32767);return new Ce(a,o,!0)};return t.setAttribute("position",e(this.pos,3)),t.setAttribute("normal",s(this.nor,3)),t.setAttribute("uv",e(this.uv,2)),t.setAttribute("aRoot",e(this.root,3)),t.setAttribute("aHinge",s(this.hinge,3)),t.setAttribute("aData",e(this.data,4)),t.setAttribute("aIriN",s(this.iriN,3)),t.setAttribute("aBase",n(this.cBase,4)),t.setAttribute("aTip",n(this.cTip,4)),t.setAttribute("aIri",n(this.cIri,4)),t.setAttribute("aIri2",n(this.cIri2,4)),t.setAttribute("aEdge",n(this.edge,2)),t.setAttribute("skinIndex",new Ce(new Uint16Array(this.si),4)),t.setAttribute("skinWeight",n(this.sw,4)),t.setIndex(new Ce(new Uint32Array(this.idx),1)),t.boundingSphere=new On(new y(0,.4,-.1),2.5),t.boundingBox=new di(new y(-2,-2,-2),new y(2,3,2)),t}}function k1(i,t,e,n){if(i.kind==="band"){const f=t+(i.soft??0)*(n*2-1);return f>=i.s[0]&&f<=i.s[1]&&e>=i.phi[0]&&e<=i.phi[1]}if(i.kind==="blob"){const f=(t-i.at[0])/i.r[0],g=(e-i.at[1])/i.r[1],v=i.pow??2;return Math.pow(Math.abs(f),v)+Math.pow(Math.abs(g),v)<=1+(i.soft??0)*(n*2-1)}const s=i.from[0]/i.r[0],r=i.from[1]/i.r[1],o=i.to[0]/i.r[0],a=i.to[1]/i.r[1],l=t/i.r[0],c=e/i.r[1],h=o-s,u=a-r,d=Ut(((l-s)*h+(c-r)*u)/(h*h+u*u),0,1);return Math.hypot(l-s-h*d,c-r-u*d)<=1}function Mi(i,t,e,n=.5){let s="body";for(const r of i.tracts)k1(r.region,t,e,n)&&(s=r.look);return i.looks[s]}const ln=i=>new Dt(i),hs=(i,t)=>t.map(e=>i.index(e)),B1=new y;function gh(i,t,e,n){return i.copy(t),e.iriAim&&i.lerp(B1.set(e.iriAim[0],e.iriAim[1],e.iriAim[2]).normalize(),e.iriAlign).normalize(),n?(i.x+=(n()-.5)*e.jitter,i.y+=(n()-.5)*e.jitter,i.z+=(n()-.5)*e.jitter,i.normalize()):i}function dp(i,t,e){const{u:n,v:s}=i.wingUV(t,e);if(n<.08||n>1.05)return 1;const r=it(.08,.3,n)*(1-it(.9,1.05,n)),o=it(-2,-1.05,s)*(1-it(-.75,-.55,s)),a=it(1.6,1,s)*(1-it(.7,.9,-s+1.6));return 1-r*Math.max(.62*o,s>.8?.25*a:0)}function fp(i,t,e,n){const s=i.shading;let r=1+s.patch*(.6*Ge(e*2.7,5)+.6*Ge(n*8+e*1.3,6)),o=0;const a=t.fine?1:ct(.12,1.7,it(-.25,.45,.7*Ge(e*6.1+n*9,41)+.6*Ge(n*21-e*3.3,42)));if(!t.fine){o=t.iriStrength>0&&e<6?it(.05,.6,.7*Ge(e*3.4+n*5,31)+.5*Ge(n*13-e*2,32))*s.goldAmount:0;const l=1-it(4.6,5.6,e);r*=ct(1,s.flank,l*it(.2,.55,n)*(1-it(.72,.95,n))),r*=ct(1,s.under,it(2.6,.5,e)*(1-it(.4,.7,n)))}return{shade:r,gold:o,glit:a}}function zs(i,t,e=1,n=0,s=6972448,r=1){const o=(.8+t()*.4)*e,a=ln(i.iri).lerp(ln(i.iriGraze),t()*t()*.45);return{base:ln(i.base).multiplyScalar(o),tip:ln(i.tip).lerp(ln(s),n*t()).multiplyScalar(o),iri:a,iri2:ln(i.iriGraze),iriStrength:i.iriStrength*ct(.75+t()*.5,2.6*Math.pow(t(),2.5),i.sparkle??0)*(1+n*1.5)*r,iriPower:i.iriPower*(.8+t()*.5),loose:i.loose??0,round:i.round,cup:i.cup,channel:i.channel==="gorget"?D1:i.channel==="crown"?N1:I1,edge:i.edge??0,closed:i.closed??0}}const Co=new y,ml=new y,Ts=new y;function pp(i,t,e,n){const{loft:s}=i;if(t<s.species.throat[0]-1.1||Math.cos(e)<-.5)return;const r=Math.min(t+.02,s.sMax);s.point(r,e,Co).sub(s.point(t-.02,e,Ts)).multiplyScalar(1/(r-t+.02)),s.point(t,e+.02,ml).sub(s.point(t,e-.02,Ts)).multiplyScalar(1/.04);const o=Co.clone().multiplyScalar(1/Co.lengthSq()),a=ml.clone().multiplyScalar(1/ml.lengthSq()),l=n.clone(),c=Co.clone().normalize(),h=s.frontLength(t);return u=>{Ts.copy(u).sub(l);const d=Ts.dot(o),f=s.frontAt(h+Ts.dot(c))-t,g=s.skin(Ut(t+(Math.abs(f)<Math.abs(d)?f:d),0,s.sMax),e+Ts.dot(a));return{bones:hs(i,g.bones),weights:g.weights}}}function z1(i,t,e){const{loft:n,species:s}=t,r={p:new y,n:new y,t:new y},o={p:new y,n:new y,t:new y},a=new y,l=new y,c=new y,h=new y,u=new y,d=new y,f=new y,g=s.eye.radius,v=s.headRuff??1,p=Math.PI*2,m=R=>{const U=(R%p+p)%p;return U<=Math.PI?U/Math.PI:(p-U)/Math.PI},M=(R,U,B=.5)=>{const k=Mi(s,R,U,B);let $=k.width;if(!k.fine){const V=Mi(s,R-.45,U),W=Mi(s,R+.45,U);$=($*2+(V.fine?$:V.width)+(W.fine?$:W.width))/4}return{look:k,width:$}},b=240,S=40,x=new Float32Array(b).fill(1),T=new Uint16Array(b),_=[],w=new Float32Array(S+1),D=.001;let C=n.sMax-.015;for(;C>.03;){let R=0;for(let B=0;B<=S;B++){const k=B/S*p;w[B]=n.point(Math.min(C+.01,n.sMax),k,l).distanceTo(n.point(C-.01,k,c))/.02,R=Math.max(R,w[B])}const U=D/R;for(let B=0;B<b;B++){const k=B/b*S,$=Math.min(Math.floor(k),S-1),{look:V,width:W}=M(C,m(B/b*p)),j=W*V.aspect*V.rowStep;if(x[B]+=ct(w[$],w[$+1],k-$)*U,x[B]>=j){x[B]=Math.min(x[B]-j,j*.5);const Q=T[B]++;(_[Q]??=new Float32Array(b).fill(NaN))[B]=C}}C-=U}const I=new y,L=new y,F=(R,U)=>{n.surface(R,U,r);for(const Ht of en)if(r.p.distanceTo(t.eyes[Ht].center)<g*(s.eye.bare??1.02))return;const B=n.wingUV(R,U),k=B.u>.04&&B.u<.97&&Math.abs(B.v)<.9,$=k&&B.v<-.3&&B.u<.5&&.5+.5*Ge(R*53+U*91,77)<.75*(s.wing.drape??1)*it(-.3,-.75,B.v)*(1-it(.32,.5,B.u));if(k&&!$)return;const V=m(U),W=M(R+(e()-.5)*.06,Ut(V+(e()-.5)*.012,0,1),e()),j=W.width,Q=Math.pow(1-it(7.1,9,R),1.4),X=v*it(.56,.86,V)*Q*it(6.25,7,R),N=it(.5,.8,V)*it(8.5,9.2,R),Y=$?s.looks.flank:W.look===s.looks.crown&&R<8.5&&e()<.5*it(.7,.9,V)?s.looks.head:W.look,G=Y.fine?0:X,st=Y.fine||Y===s.looks.stripe?0:v*it(6,6.7,R)*it(.35,.6,V)*(.35+.65*Q),Z=Ge(R*11+V*37,51);if(st>0&&Z>.45&&e()<.4*st||Y===s.looks.gorget)return;const ut=s.looks.gorget,mt=R>4.6&&R<8.2&&V<.5?Mi(s,R,Math.max(V-.035,0))===ut?2:Mi(s,R,Math.max(V-.08,0))===ut?1:0:0;if(mt===2)return;const at=mt===0&&R>4.2&&R<5.6&&V<.4&&Mi(s,R+.5,V)===ut,Tt=s.shading,Gt=fp(s,Y,R,V),{gold:kt,glit:ue}=Gt,Wt=Gt.shade*dp(n,R,U),jt=Y.loose??0,dt=Ge(R*4.3+V*17,21),nt=Ge(R*3.1-V*23,22),Zt=1+(e()-.5)*ct(.26,.65,jt),Jt=j*Y.aspect*Zt*(1+G*(.3+1.3*e()*e())+st*(e()-.5)*.5),me=e()<.035*jt+.14*G?1:0;let re=(Y.tilt+(e()-.5)*ct(6,17,jt)+nt*7*jt+me*(8+e()*10))*Lt;const z=(e()-.5)*ct(.17,.72,jt)+dt*.4*jt+me*(e()-.5)*.9+((e()-.5)*.9+Z*.45)*st,Ee=((e()-.5)*.7+nt*.3)*jt+((e()-.5)*1.1+Z*.5)*st;if((mt||at)&&(re*=.35),$)re+=9*Lt;else if(B.u>0&&B.u<1&&Math.abs(B.v)<1.7&&!me){const Ht=1-it(.9,1.7,Math.abs(B.v));re*=1-.6*Ht}let ce=Y.lift+G*.9;re=re*(1-.55*N)+G*(14+30*e()*e()+9*Z)*Lt;const ve=n.point(Math.min(R+.01,n.sMax),U,l).distanceTo(n.point(Math.max(R-.01,0),U,c))/.02;f.copy(r.p),a.copy(r.n),n.surface(Math.max(R-Jt*.85/Math.max(ve,.02),0),U,o),h.copy(o.p).addScaledVector(o.n,Jt*Math.sin(re)).sub(f),h.lengthSq()<1e-8&&h.copy(r.t),h.normalize(),u.copy(a).add(o.n).addScaledVector(h,-a.dot(h)-o.n.dot(h)).normalize(),h.applyAxisAngle(u,z),u.applyAxisAngle(h,Ee),gh(d,u,Y,e);const _t=n.skin(R,U);i.add({...zs(Y,e,Wt,kt,Tt.gold,ue),root:f,dir:h,normal:u,skinNormal:a,iriNormal:d,width:j*Zt,length:Jt,cols:Y.fine?5:3,rows:4,curl:ct(.1,.02+e()*.22,jt),asym:0,bones:hs(t,_t.bones),weights:_t.weights,skinAt:pp(t,R,U,f),rand:e(),coord:n.bodyCoord(R)*.8,gain:ce,cover:Ut(1-Y.rowStep,.1,.9)})};for(let R=0;R<_.length;R++){const U=_[R];for(const B of[1,-1]){let k=R&1?.5:B>0?1:0,$=!1;for(let V=0;V<b/2;V++){const W=(B*V%b+b)%b,j=(B*(V+1)%b+b)%b,Q=U[W],X=U[j];if(Number.isNaN(Q)||Number.isNaN(X)){$=!0;continue}$&&(k=e(),$=!1);const N=B*V*p/b,Y=B*(V+1)*p/b;n.point(Q,N,I),n.point(X,Y,L);const{look:G,width:st}=M((Q+X)/2,m((N+Y)/2)),Z=I.distanceTo(L)/(st*(G.spacing??.6));for(;k+Z>=1;){const ut=(1-k)/Z,mt=(e()-.5)*.25*st*G.aspect*G.rowStep/.11,at=ct(.12,.5,G.loose??0)*(G.fine?1:1+1.8*v*it(6,6.7,(Q+X)/2));F(Ut(ct(Q,X,ut)+mt*(1+2*(G.loose??0)),.02,n.sMax),ct(N,Y,ut)+(e()-.5)*at*st/.15),k-=1}k+=Z}}}}function H1(i,t,e){const{loft:n,species:s}=t,r=s.looks.gorget;if(!r)return;const o={p:new y,n:new y,t:new y},a=[],l=new y,c=new y;let h=n.sMax;for(;h>4.3&&Mi(s,h,0)!==r;)h-=.02;const u=Math.min(h+.5,n.sMax-.3);let d=0,f=1/0;const g=.02,v=.02,p=new Map;{let L=0;for(let F=0;;F++){const R=u-F*g;if(R<4.3)break;F>0&&(L+=n.point(R,0,l).distanceTo(n.point(R+g,0,c))),p.set(F,L)}L=0;for(let F=-1;;F--){const R=u-F*g;if(R>n.sMax-.05)break;L-=n.point(R,0,l).distanceTo(n.point(R-g,0,c)),p.set(F,L)}}for(const[L,F]of p){const R=u-L*g;let U=0;for(let B=0;B*v<=1.3;B++){const k=B*v;if(B>0&&(U+=n.point(R,k,l).distanceTo(n.point(R,k-v,c))),Mi(s,R,k/Math.PI)===r){for(const $ of B===0?[1]:[1,-1])a.push({s:R,a:k*$,x:U*$,y:F});d=Math.max(d,Math.hypot(U,F)),f=Math.min(f,Math.hypot(U,F))}}}if(!a.length)return;const m=(L,F)=>{let R=a[0],U=1/0;for(const B of a){const k=(B.x-L)*(B.x-L)+(B.y-F)*(B.y-F);k<U&&(U=k,R=B)}return{q:R,miss:Math.sqrt(U)}},M=new y,b=new y,S=new y,x=new y,T=new y,_=new Dt(3814655),w=new Dt(14036168),D=r.spacing??.8;let C=Math.max(f,r.width*.3),I=0;for(;C<=d+r.width*.3;){const L=Ut((C-f)/(d-f),0,1),F=r.width*ct(.6,1.3,L),R=F*r.aspect,U=Math.max(1,Math.round(Math.PI*2*C/(F*D)));for(let B=0;B<U;B++){const k=(B+(I%2?.5:0))/U*Math.PI*2-Math.PI+(e()-.5)*.12*(F/Math.max(C,F)),{q:$,miss:V}=m(C*Math.sin(k),C*Math.cos(k));if(V>.03)continue;const W=m(C*Math.sin(k),C*Math.cos(k)-R*.7).miss>.02;n.surface($.s,$.a,o);const j=Math.sign(k)*Math.min(Math.abs(k)*.5,.6)+(e()-.5)*.14,Q=(r.tilt+(e()-.5)*3)*Lt;b.copy(o.p),M.crossVectors(o.n,o.t),M.x<0&&M.multiplyScalar(-1),S.copy(o.t).multiplyScalar(Math.cos(j)).addScaledVector(M,Math.sin(j)).normalize(),x.copy(o.n).multiplyScalar(Math.cos(Q)).addScaledVector(S,-Math.sin(Q)),S.multiplyScalar(Math.cos(Q)).addScaledVector(o.n,Math.sin(Q)),gh(T,x,r,e);const X=zs(r,e),N=Ut(L+(e()-.5)*.16,0,1);N<.45?X.iri.lerp(_,(1-N/.45)*.85):X.iri.lerp(w,(N-.45)/.55*.8);const Y=pp(t,$.s,$.a,b),G=n.skin($.s,$.a),st=.94+e()*.12;i.add({...X,root:b,dir:S,normal:x,skinNormal:o.n,iriNormal:T,width:F*st,length:R*st,cols:9,rows:6,scallop:!0,cup:.16,curl:.05,asym:0,bones:hs(t,G.bones),weights:G.weights,skinAt:Y,rand:e(),coord:n.bodyCoord($.s)*.8,gain:r.lift,cover:W?.25:Ut(1-r.rowStep,.1,.9)})}C+=F*r.aspect*r.rowStep,I++}}function G1(i,t,e,n){const s=t.species.wing,r=t.wings[e],o=Rn(e),a=ln(s.sheen),l=new y,c=new y,h=new y,u=(_,w,D,C,I)=>{const L=t.rest[_.name];new Yt().makeRotationFromQuaternion(L.worldQuat).extractBasis(l,c,h),h.applyAxisAngle(c,(n()-.5)*.02),c.applyAxisAngle(h,(n()-.5)*.12);const F=t.index(_.name),R=.7+n()*.6;i.add({root:L.worldPos,dir:h,normal:c,skinNormal:null,iriNormal:c,width:D,length:w,cols:3,rows:9,round:.75,cup:.12,curl:.012,asym:C*o,base:I.clone().multiplyScalar(R),tip:I.clone().multiplyScalar(R*.8),iri:a,iri2:a,iriStrength:.22,iriPower:2.5,loose:0,widen:.3,bones:[F,0,0,0],weights:[1,0,0,0],rand:n(),coord:o>0?bd:wd,gain:0,cover:o>0?.2:.8,channel:mh})};r.primaries.forEach((_,w)=>{const D=w/(r.primaries.length-1);u(_,ct(s.primaryLen[0],s.primaryLen[1],Math.pow(D,.75)),s.primaryWidth*ct(1.15,.8,D),ct(.2,.5,D),ln(s.primaryColor??s.color))}),r.secondaries.forEach((_,w)=>{const D=w/(r.secondaries.length-1);u(_,ct(s.secondaryLen[0],s.secondaryLen[1],D),s.secondaryWidth,.15,ln(s.secondaryColor??s.color))});const d=t.species.looks.covert,f=t.rest[`hand.${e}`],g=t.rest[`forearm.${e}`];new Yt().makeRotationFromQuaternion(f.worldQuat).extractBasis(l,c,h);const v=l.clone().multiplyScalar(o),p=c.clone(),m=h.clone(),M=f.worldPos.clone().addScaledVector(m,s.hand),b=[{off:-.02,len:.075,w:.034,lift:.006,n:15},{off:0,len:.1,w:.04,lift:.008,n:14},{off:.024,len:.13,w:.046,lift:.01,n:14},{off:.05,len:.17,w:.05,lift:.012,n:13}],S=new y,x=new y,T=new y;for(const _ of b)for(let w=0;w<_.n;w++){const D=ct(-.55,.9,(w+n()*.7)/_.n);D<0?S.copy(f.worldPos).lerp(g.worldPos,-D/.5):S.copy(f.worldPos).lerp(M,D),S.addScaledVector(v,_.off+(n()-.5)*.016).addScaledVector(p,_.lift);const C=.06+n()*.08;x.copy(m).applyAxisAngle(p,o*(.1+n()*.3+(D<0?.25:0))),T.copy(p).multiplyScalar(Math.cos(C)).addScaledVector(x,-Math.sin(C)),x.multiplyScalar(Math.cos(C)).addScaledVector(p,Math.sin(C));const I=t.index(D<0?`forearm.${e}`:`hand.${e}`),L=.8+n()*.4;i.add({...zs(d,n,.8+.3*n()),root:S,dir:x,normal:T,skinNormal:p,iriNormal:T,width:_.w*L,length:_.len*L,cols:3,rows:4,curl:.04+n()*.1,asym:0,bones:[I,0,0,0],weights:[1,0,0,0],rand:n(),coord:o>0?bd:wd,gain:0,cover:.55})}}function V1(i,t,e,n){const{loft:s,species:r}=t,o=r.wing,a=Rn(e),l=a>0?F1:O1,c={p:new y,n:new y,t:new y},h={p:new y,n:new y,t:new y},u=(Q,X,N)=>{const Y=s.wingAt(Q,X,a);return s.surface(Ut(Y.s,.02,s.sMax),Y.ang,N),Y};u(0,0,c),u(1,0,h);const d=c.p.distanceTo(h.p),f=new y,g=new y,v=new y,p=ln(o.primaryColor??o.color),m=ln(o.secondaryColor??o.color),M=ln(o.sheen),b=r.looks.wingCovert,[S,x]=o.covertWidth??[.024,.05],T=o.bladeScale??1,[_,w]=o.covertAspect??[2.2,3.4],D=(Q,X,N,Y,G,st)=>{const Z=u(Q,X,c);u(Q+N/d,X+Y,h),f.copy(c.p).addScaledVector(c.n,G),g.copy(h.p).addScaledVector(h.n,G+N*Math.sin(st*Lt)).sub(f).normalize(),v.copy(c.n).add(h.n).addScaledVector(g,-c.n.dot(g)-h.n.dot(g)).normalize();const ut=s.skin(Ut(Z.s,.02,s.sMax),Z.ang);return{bones:hs(t,ut.bones),weights:ut.weights}},C=7;for(let Q=0;Q<C;Q++){const X=Q/(C-1),N=ct(.03,.3,X*X*.4+X*.6),Y=ct(S,x,X),G=Y*ct(_,w,X),st=ct(o.rest.width[0],o.rest.width[1],it(0,.35,N)),Z=Math.max(3,Math.round(2*st/(Y*.62)));for(let ut=0;ut<Z;ut++){const mt=Ut(-.98+2*(ut+(Q%2?.5:0)+(n()-.5)*.3)/Z,-1.02,1.02),at=.85+n()*.3,Tt=D(N+(n()-.5)*.012,mt,G*at,-mt*.12+(n()-.5)*.1,.004+X*.004,7+n()*5);i.add({...zs(b,n,.8+.4*n()),root:f,dir:g,normal:v,skinNormal:c.n,iriNormal:v,width:Y*at,length:G*at,cols:3,rows:4,curl:.05+n()*.08,asym:0,...Tt,rand:n(),coord:l,gain:0,cover:Ut(1-b.rowStep,.1,.9)})}}for(let Q=.42;Q<.98;Q+=.04)for(const X of[-.82,-.3,.3,.82]){const N=.85+n()*.3,Y=D(Q+(n()-.5)*.02,X+(n()-.5)*.2,.085*N,-X*.1,.002,4);i.add({...zs(b,n,.7+.3*n()),root:f,dir:g,normal:v,skinNormal:c.n,iriNormal:v,width:.05*N,length:.085*N,cols:3,rows:4,curl:.04,asym:0,...Y,rand:n(),coord:l,gain:0,cover:.5})}const I=[];for(let Q=0;Q<=26;Q++)for(let X=0;X<=14;X++)u(Q/20,ct(-2.2,2.2,X/14),c),I.push({p:c.p.clone(),n:c.n.clone()});const L=new y,F=Q=>{let X=I[0],N=1/0;for(const Y of I){const G=Y.p.distanceToSquared(Q);G<N&&(N=G,X=Y)}return L.copy(Q).sub(X.p).dot(X.n)},R=r.tail,U=R.droop*Lt,B=new y(0,-Math.sin(U),-Math.cos(U)),k=new y(0,Math.cos(U),-Math.sin(U)),$=s.center(r.spine.tail,new y).addScaledVector(B,R.length[1]*o.rest.cross[0]).addScaledVector(k,.035);$.x=o.rest.cross[1]*a,a>0&&$.addScaledVector(k,.014);const V=new y,W=new y,j=[];for(let Q=0;Q<o.secondaries;Q++){const X=Q/(o.secondaries-1);j.push({u:ct(.2,.3,X),v:ct(.82,.3,X),w:.066*T,reach:1,to:null,len:ct(.19,.27,X)*T,dv:-.3,asym:.15})}for(let Q=0;Q<o.primaries;Q++){const X=Q/(o.primaries-1);j.push({u:ct(.3,.42,X),v:ct(.25,-.8,X),w:ct(.068,.05,X)*T,reach:ct(.52,1,Math.pow(X,.8)),to:$.clone().addScaledVector(k,(1-X)*.05).addScaledVector(B,-(1-X)*.02),len:0,dv:0,asym:ct(.2,.45,X)})}j.forEach((Q,X)=>{const N=u(Q.u,Q.v,c),Y=.016-X*7e-4;f.copy(c.p).addScaledVector(c.n,Y),W.copy(c.n);let G=Q.len;Q.to?(V.copy(Q.to),G=V.distanceTo(f)*Q.reach):(u(Q.u+G/d,Q.v+Q.dv,h),V.copy(h.p).addScaledVector(h.n,Y),W.add(h.n).normalize());const st=.035;for(let at=0;at<60;at++){g.copy(V).sub(f).normalize(),v.copy(W).addScaledVector(g,-W.dot(g)).normalize();let Tt=!0;for(const Gt of[.25,.45,.65,.85,1])if(L.copy(f).addScaledVector(g,Gt*G).addScaledVector(v,-st*G*Gt*Gt),F(L.clone())<.005+.012*Gt-X*3e-4){Tt=!1;break}if(Tt)break;V.addScaledVector(W,.005)}const Z=s.skin(Ut(N.s,.02,s.sMax),N.ang),ut=.75+n()*.5,mt=X<o.secondaries?m:p;i.add({root:f,dir:g,normal:v,skinNormal:null,iriNormal:v,width:Q.w,length:G,cols:3,rows:9,round:.75,cup:.1,curl:st,asym:Q.asym*a,base:mt.clone().multiplyScalar(ut),tip:mt.clone().multiplyScalar(ut*.8),iri:M,iri2:M,iriStrength:.22,iriPower:2.5,loose:0,widen:.2,bones:hs(t,Z.bones),weights:Z.weights,rand:n(),coord:l,gain:0,cover:a>0?.2:.8,channel:mh})})}function W1(i,t,e){const n=t.species.tail,s=ln(n.color),r=n.tip===void 0?null:ln(n.tip),o=ln(n.sheen??4609132),a=ln(n.centralSheen??2058840),l=new y,c=new y,h=new y;for(const u of t.rectrices){const d=t.rest[u.bone.name];new Yt().makeRotationFromQuaternion(d.worldQuat).extractBasis(l,c,h);const f=(Math.abs(u.k)-.5)/Math.max(n.rectrices-1,1),g=.85+e()*.3;i.add({root:d.worldPos,dir:h,normal:c,skinNormal:null,iriNormal:c,width:n.width,length:ct(n.length[0],n.length[1],Math.pow(f,1.4)),cols:5,rows:14,round:1,cup:.06,curl:.01,asym:.12*Math.sign(u.k),base:s.clone().multiplyScalar(g),tip:(r??s).clone().multiplyScalar(r?g:g*.8),iri:f<.1?a:o,iri2:o,iriStrength:f<.1?.13:.2,iriPower:3,loose:0,widen:.45,bones:[t.index(u.bone.name),0,0,0],weights:[1,0,0,0],rand:e(),coord:1,gain:0,cover:u.k>0?.8:.2,channel:mh})}}function X1(i,t=3,e=120,n=80){const{loft:s,species:r}=i,o=new Rc,a={p:new y,n:new y,t:new y},l=new y,c=new Float32Array(n+1),h=Array.from({length:n+1},()=>new y),u=new y,d=Yi(r.seed+99),f=560,g=s.sMax-.12,v=[];for(let p=0;p<=e;p++){const m=g-p/e*(g-.05);for(let M=0;M<=n;M++){const b=M/n*Math.PI*2;s.surface(m,b,a),p>0&&(c[M]+=h[M].distanceTo(a.p)),h[M].copy(a.p),v.push({p:a.p.clone(),n:a.n.clone(),d:c[M],s:m,a:b})}}for(let p=0;p<t;p++){const m=t>1?p/(t-1):0,M=ct(.008,.03,m),b=o.pos.length/3;for(let S=0;S<v.length;S++){const x=v[S],T=S%(n+1),_=x.a<=Math.PI?x.a/Math.PI:(2*Math.PI-x.a)/Math.PI,w=Mi(r,x.s,_),D=fp(r,w,x.s,_),{gold:C,glit:I}=D,L=D.shade*dp(s,x.s,x.a);let F=w.fuzz??Math.min(.55+(w.loose??0)*.6,1);for(const B of en)F*=it(r.eye.radius*1.25,r.eye.radius*2.1,x.p.distanceTo(i.eyes[B].center));F*=1-it(s.sMax-.7,s.sMax-.2,x.s);{const B=s.wingUV(x.s,x.a);B.u>.02&&B.u<.99&&(F*=it(.85,1.15,Math.abs(B.v)))}const R=zs(w,d,L,C,r.shading.gold,I);gh(u,x.n,w),l.copy(x.p).addScaledVector(x.n,M*(.5+.5*Math.min(F*2,1))*Ut(w.width/.03,.4,1));const U=s.skin(x.s,x.a);o.pos.push(l.x,l.y,l.z),o.nor.push(x.n.x,x.n.y,x.n.z),o.uv.push(T/n*f,x.d),o.root.push(l.x,l.y,l.z),o.hinge.push(1,0,0),o.data.push(m,s.bodyCoord(x.s)*.8,w.lift,U1),o.iriN.push(u.x,u.y,u.z),o.cBase.push(R.base.r,R.base.g,R.base.b,w.fine?0:w.iriStrength*I*(1+C)/4),o.cTip.push(R.tip.r,R.tip.g,R.tip.b,F),o.cIri.push(R.iri.r,R.iri.g,R.iri.b,w.iriPower/32),o.cIri2.push(R.iri2.r,R.iri2.g,R.iri2.b,m),o.edge.push(0,0),o.si.push(...hs(i,U.bones)),o.sw.push(...U.weights)}for(let S=0;S<e;S++)for(let x=0;x<n;x++){const T=b+S*(n+1)+x,_=T+n+1;o.idx.push(T,_,T+1,_,_+1,T+1)}}return o}function q1(i){const t=Yi(i.species.seed),e=new Rc;z1(e,i,t),H1(e,i,t);const n=new Rc;for(const r of en)G1(n,i,r,t),V1(n,i,r,t);W1(n,i,t);const s=X1(i);return{contour:e.build(),flight:n.build(),fuzz:s.build()}}function Y1(i,t=64,e=36,n=.007){const s={p:new y,n:new y,t:new y},{loft:r}=i,o=[],a=[],l=[],c=[],h=new y;for(let d=0;d<=t;d++){const f=d/t*r.sMax;for(let g=0;g<=e;g++){const v=g/e*Math.PI*2,p=r.skin(f,v);r.surface(f,v,s),h.copy(s.p).addScaledVector(s.n,-n),o.push(h.x,h.y,h.z),a.push(...hs(i,p.bones)),l.push(...p.weights)}}for(let d=0;d<t;d++)for(let f=0;f<e;f++){const g=(d+.5)/t*r.sMax;if(g>4.3&&g<9&&Math.cos((f+.5)/e*Math.PI*2)>-.25)continue;const v=d*(e+1)+f,p=v+e+1;c.push(v,v+1,p,p,v+1,p+1)}const u=new Me;return u.setAttribute("position",new ee(o,3)),u.setAttribute("skinIndex",new pa(a,4)),u.setAttribute("skinWeight",new ee(l,4)),u.setIndex(c),u.computeVertexNormals(),u}const mp=`
attribute vec3 aRoot;
attribute vec3 aHinge;
attribute vec4 aData; // rand, body coord, lift gain, channel
uniform float uFluff;
uniform float uLift[8];
uniform float uGorget;
uniform float uCrest;
uniform vec2 uWingSpread;
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
}`,gp=`
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
float fC = cos(fAng), fS = sin(fAng);`,_p=`
vec3 transformed = aData.w > 3.5 ? position + normal * max(fAng, -0.1) * 0.05 : aRoot + rotAxis(position - aRoot, aHinge, fC, fS);
// as the wing spreads the resting wing sinks into the body and the real blades grow out of it
if (fRest) {
  vec3 fPivot = vec3(fRight ? -uWingPivot.x : uWingPivot.x, uWingPivot.yz);
  transformed = fPivot + wingSwing(transformed - fPivot, fRight);
  transformed = mix(transformed, aRoot - normal * 0.03, fUnfold);
}
if (fReal) transformed = mix(aRoot, transformed, fUnfold * fBeat);
`;function K1(){const i={uFluff:{value:0},uLift:{value:new Float32Array(8)},uGorget:{value:0},uCrest:{value:0},uWingSpread:{value:new Ft},uWingLift:{value:new Ft},uWingOut:{value:new Ae},uWingPivot:{value:new y},uWingSpan:{value:new y(0,0,-1)},uWingChord:{value:new y(0,1,0)},uFlash:{value:1},uGlint:{value:1},uPal:{value:[new $t,new $t,new $t,new $t]}},t=new mn({color:16777215,roughness:.6,metalness:0,side:Be,alphaToCoverage:!0});return t.onBeforeCompile=e=>{Object.assign(e.uniforms,i),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${mp}
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
varying vec3 vIriN;`).replace("#include <beginnormal_vertex>",`${gp}
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
vIriN = normalize(normalMatrix * fIriN);`).replace("#include <begin_vertex>",_p),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
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
  vec3 pig = mix(vBase.rgb, vTip.rgb, flight ? 0.5 : mix(smoothstep(0.3, 1.0, v), 0.62 + 0.3 * v, plush));
  // overlap shadow at the root, where the next feather up covers this one
  // (a lifted feather shows more of itself)
  float cover = vIri2.a * (1.0 - clamp(vFData.z * 1.6, 0.0, 0.8));
  float bare = smoothstep(cover - 0.3, cover + 0.12, v + 0.1 * (1.0 - au));
  float occ = flight ? mix(0.5, 1.0, smoothstep(0.0, 0.25, v)) : mix(scale ? 0.42 : mix(0.74, 0.96, plush), 1.0, bare);
  float edge = scallop ? (v > 0.5 ? length(vec2(u, (v - 0.5) * 2.0)) : au * 0.85) : max(au, (v - 0.55) / 0.45);
  // scales carry a paler fringe on the free edge; soft feathers just vary barb by barb
  // (and a parrot's feather a dusky band there: the scaled look)
  float rim = scale ? -smoothstep(0.8, 1.0, edge) * 0.45 : -smoothstep(0.8, 0.95, edge) * vEdge.x;
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
    if (!gl_FrontFacing) pig = pig * 2.0 + vec3(0.006, 0.006, 0.008) * (0.4 + strip);
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
}`)},t.customProgramCacheKey=()=>"plumage-v47",{material:t,uniforms:i}}function Z1(i){const t=new Bf({side:Be});return t.onBeforeCompile=e=>{Object.assign(e.uniforms,i),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>${mp}`).replace("#include <begin_vertex>",gp+_p)},t.customProgramCacheKey=()=>"plumage-depth-v5",t}class lr{constructor(t){this.rig=t}rig;pos=[];nor=[];col=[];uv=[];si=[];sw=[];idx=[];add(t,e,n,s,r){const o=this.rig.rest[e],a=new Yt().compose(o.worldPos,o.worldQuat,new y(1,1,1)),l=t.index?t.toNonIndexed():t.clone(),c=l.getAttribute("position").clone();l.applyMatrix4(a);const h=l.getAttribute("position"),u=l.getAttribute("normal"),d=l.getAttribute("uv"),f=this.pos.length/3,g=this.rig.index(e),v=new y;for(let p=0;p<h.count;p++){v.fromBufferAttribute(c,p);const m=r?.(v)??n;this.pos.push(h.getX(p),h.getY(p),h.getZ(p)),this.nor.push(u.getX(p),u.getY(p),u.getZ(p)),this.col.push(m.r,m.g,m.b),this.uv.push(d?d.getX(p):0,d?d.getY(p):0),this.si.push(s?this.rig.index(s(v)):g,0,0,0),this.sw.push(1,0,0,0),this.idx.push(f+p)}l.dispose(),t.dispose()}build(){const t=new Me;return t.setAttribute("position",new ee(this.pos,3)),t.setAttribute("normal",new ee(this.nor,3)),t.setAttribute("color",new ee(this.col,3)),t.setAttribute("uv",new ee(this.uv,2)),t.setAttribute("skinIndex",new pa(this.si,4)),t.setAttribute("skinWeight",new ee(this.sw,4)),t.setIndex(this.idx),t.boundingSphere=new On(new y(0,.4,0),2.5),t}}function Fi(i,t,e,n=10){const s=[],r=[],o=i.length,a=new y,l=new y,c=new y;for(let u=0;u<o;u++){a.copy(i[Math.min(u+1,o-1)]).sub(i[Math.max(u-1,0)]).normalize(),l.crossVectors(e,a).normalize(),c.crossVectors(a,l);const[d,f]=t(u/(o-1));for(let g=0;g<=n;g++){const v=g/n*Math.PI*2;s.push(i[u].x+l.x*Math.cos(v)*d+c.x*Math.sin(v)*f,i[u].y+l.y*Math.cos(v)*d+c.y*Math.sin(v)*f,i[u].z+l.z*Math.cos(v)*d+c.z*Math.sin(v)*f)}}for(let u=0;u<o-1;u++)for(let d=0;d<n;d++){const f=u*(n+1)+d,g=f+n+1;r.push(f,f+1,g,g,f+1,g+1)}const h=new Me;return h.setAttribute("position",new ee(s,3)),h.setIndex(r),h.computeVertexNormals(),h}function gl(i,t,e,n,s=!1){const a=[],l=[],c=[];for(let u=0;u<=12;u++){const d=ct(t,e,u/12);for(let f=0;f<=12;f++){const g=ct(-n,n,f/12);let v=Math.sin(g),p=Math.cos(g)*Math.sin(d);const m=Math.cos(g)*Math.cos(d);if(s){const M=v;v=p,p=M}a.push(v*i,p*i,m*i),l.push(v,p,m)}}for(let u=0;u<12;u++)for(let d=0;d<12;d++){const f=u*13+d,g=f+12+1;s?c.push(f,g,f+1,g,g+1,f+1):c.push(f,f+1,g,g,f+1,g+1)}const h=new Me;return h.setAttribute("position",new ee(a,3)),h.setAttribute("normal",new ee(l,3)),h.setIndex(c),h}const _l={upperOpen:62*Lt,lowerOpen:-72*Lt,nictOpen:150*Lt};function $1(i){const t=i.species,e=t.eye.radius,n=new Dt(t.skin),s=new y(0,1,0),r=new lr(i),o=t.eye.ring,a=new Dt(t.eye.lid??2369067),l=new Dt(o?.color??7829372),c=new Dt(526346);for(const N of en){const Y=N==="L"?-1:1,G=96,st=7,Z=[],ut=[],mt=[],at=new Dt;for(let Wt=0;Wt<=G;Wt++){const jt=Wt/G*Math.PI*2,dt=Math.cos(jt),nt=Math.sin(jt),Zt=dt*Y>0?1.3:1.6,Jt=1/Math.pow(Math.pow(Math.abs(dt)/(43*Lt),Zt)+Math.pow(Math.abs(nt)/(29*Lt),Zt),1/Zt),me=56*Lt;for(let re=0;re<=st;re++){const z=re/st;if(o){const Ht=ct(Math.sin(Jt)*e*1.05,e*o.width,z),At=Math.pow(Math.sin(Math.PI*Math.min(z/.3,1)),.6),Nt=e*(t.eye.inset+.05)-Ht*Ht/(12*e);Z.push(dt*Ht,nt*Ht,ct(Math.cos(Jt)*e*1.07,Nt,it(0,.3,z))+.015*e*At),at.copy(l).multiplyScalar((.8+.2*it(0,.25,z))*(.95+.05*Math.sin(jt*46+z*9))),ut.push(at.r,at.g,at.b);continue}const Ee=ct(Jt,me,z),ce=Math.pow(Math.sin(Math.PI*Math.min(z/.5,1)),.6),ve=Math.max(0,Math.sin(jt*38))*it(.12,.2,z)*(1-it(.22,.32,z)),_t=e*(1.05+.02*ce+.004*ve-.035*it(.5,1,z));Z.push(Math.sin(Ee)*dt*_t,Math.sin(Ee)*nt*_t,Math.cos(Ee)*_t),at.copy(l).multiplyScalar(.55+.5*ce).lerp(c,Math.max(ve*.35,it(.4,.6,z))),ut.push(at.r,at.g,at.b)}}for(let Wt=0;Wt<G;Wt++)for(let jt=0;jt<st;jt++){const dt=Wt*(st+1)+jt,nt=dt+st+1;mt.push(dt,nt,dt+1,nt,nt+1,dt+1)}const Tt=new Me;Tt.setAttribute("position",new ee(Z,3)),Tt.setAttribute("color",new ee(ut,3)),Tt.setIndex(mt),Tt.computeVertexNormals();const Gt=Tt.toNonIndexed(),kt=Gt.getAttribute("color");let ue=0;r.add(Gt,`eye.${N}`,l,null,()=>at.fromBufferAttribute(kt,ue++).clone()),r.add(gl(e*1.04,12*Lt,112*Lt,78*Lt),`lidUpper.${N}`,a),r.add(gl(e*1.036,-106*Lt,16*Lt,78*Lt),`lidLower.${N}`,a)}const h=new Dt(t.legs.color),u=t.legs.perchRadius;for(const N of en){const Y=Rn(N),G=i.tarsusLength,st=t.legs.toeRadius??.0085,Z=st/.0085;r.add(Fi([0,.25,.5,.75,1,1.15].map(at=>new y(0,0,at*G)),at=>[ct(.011,.017,at)*Z,ct(.011,.017,at)*Z],s,8),`tarsus.${N}`,h);const ut=(at,Tt,Gt,kt,ue)=>{const Wt=[];for(let dt=0;dt<=14;dt++){const nt=dt/14,Zt=ct(Tt,Gt,nt),Jt=it(.78,1,nt)*.012,me=(1-it(0,.2,nt))*.012,re=u+st*.9-Jt+me;Wt.push(new y(ct(kt,ue,nt),-u+re*Math.cos(Zt),re*Math.sin(Zt)))}r.add(Fi(Wt,dt=>{const nt=dt>.78?ct(.75,.08,(dt-.78)/.22):1+.12*Math.sin(dt*22);return[st*nt,st*nt*.9]},new y(1,0,0),7),`toe.${N}.${at}`,h.clone().multiplyScalar(1-at%2*.12))},mt=t.legs.toe/(u+st);t.legs.zygodactyl?(ut(1,.05,-mt*.72,-.004*Y,-.03*Y),ut(2,-.1,mt*.92,-.004*Y,-.022*Y),ut(3,-.1,mt*1.1,.006*Y,.02*Y),ut(4,.05,-mt*1,.006*Y,.034*Y)):(ut(1,-.12,mt*.95,0,-.03*Y),ut(2,-.12,mt*1.1,0,.002*Y),ut(3,-.12,mt*.98,0,.034*Y),ut(4,.05,-mt*.8,0,-.006*Y))}const d=Y1(i),f=new mn({color:16777215,vertexColors:!0,roughness:.9,envMapIntensity:.4,side:Be}),g=new mn({color:n.clone().multiplyScalar(.5),roughness:1,envMapIntensity:.15,side:Be}),v=new ni(d,g);v.name="bird.skin";const p=new ni(r.build(),f);p.name="bird.bare";const m=new lr(i),M=t.bill,b=new Dt(M.color),S=new Dt(2493968),x=N=>ct(1,.17,Math.pow(N,.8))*(N>.95?ct(1,.05,(N-.95)/.05):1),T=(N,Y,G,st)=>{const Z=[];for(let mt=0;mt<=26;mt++){const at=ct(-.07,M.length*st,mt/26),Tt=Math.max(at/M.length,0);Z.push(new y(0,N*M.radius*x(Tt)-M.droop*Tt*Tt,at))}return Fi(Z,mt=>{const at=Math.max((mt*(M.length*st+.07)-.07)/M.length,0);return[M.radius*G*x(at),M.radius*Y*x(at)]},s,12)},_=N=>{const Y=Math.max(N/M.length,0);return-M.droop*Y*Y};if(M.hook){const N=M.hook,Y=b.clone().multiplyScalar(.55),G=new Dt(N.cere),st=30,Z=-.3,ut=(dt,nt)=>Array.from({length:st+1},(Zt,Jt)=>nt(ct(dt,1,Jt/st))),mt=(dt,nt)=>dt>nt?Math.sqrt(Math.max(1-Math.pow((dt-nt)/(1-nt),2)*.99,0)):1,at=N.upper*.76,Tt=2*Math.atan((at+N.drop)/N.reach),Gt=N.reach/Math.sin(Tt),kt=dt=>dt<=0?new y(0,at,dt*.16):new y(0,at-Gt*(1-Math.cos(Tt*dt)),Gt*Math.sin(Tt*dt));m.add(Fi(ut(Z,kt),dt=>{const nt=Math.max(ct(Z,1,dt),0);return[M.radius*ct(1,.16,Math.pow(nt,1.5))*mt(nt,.9),N.upper*ct(1,.22,Math.pow(nt,1.3))*mt(nt,.9)]},s,16),"bill",b,null,dt=>dt.z<M.length*.95&&dt.y<_(dt.z)-.004?S:dt.z<.024&&dt.y>_(dt.z)+.012?G:b.clone().lerp(Y,it(.5,1.05,dt.z/N.reach)*it(-.01,-N.drop,dt.y-at*.3)));for(const dt of[1,-1]){const nt=new ci(.0065,10,8);nt.translate(dt*M.radius*.76,at+N.upper*.5,.012),m.add(nt,"bill",new Dt(2038295))}const ue=M.length*.98,Wt=dt=>N.lower*ct(1,.45,Ut(dt/ue,0,1)),jt=dt=>{const nt=dt<=0?dt*.16:dt*ue;return new y(0,_(nt)-Wt(nt),nt)};m.add(Fi(ut(Z,jt),dt=>{const nt=Math.max(ct(Z,1,dt),0);return[M.radius*.88*ct(1,.5,nt)*mt(nt,.82),Wt(nt*ue)*mt(nt,.82)]},s,14),"bill",b.clone().multiplyScalar(.9),()=>"jaw",dt=>dt.y>_(dt.z)-.005?S:null)}else m.add(T(.4,.58,1,1),"bill",b,null,N=>N.y<_(N.z)+.1*M.radius*x(Math.max(N.z/M.length,0))?S:null),m.add(T(-.36,.5,.9,.985),"bill",b,()=>"jaw",N=>N.y>_(N.z)-.1*M.radius*x(Math.max(N.z/M.length,0))?S:null);const w=M.hook?M.length*.4:.09;for(const N of[1,-1]){const Y=new Me,G=N*M.radius*.8,st=N*M.radius*.72;Y.setAttribute("position",new ee([G,2e-4,-.05,st,2e-4,w,G,-2e-4,-.05,st,2e-4,w,st,-2e-4,w,G,-2e-4,-.05],3)),Y.setAttribute("normal",new ee([N,0,0,N,0,0,N,0,0,N,0,0,N,0,0,N,0,0],3)),m.add(Y,"bill",new Dt(393731),Z=>Z.y>0?"bill":"jaw")}const D=new lr(i);if(M.hook){const N=new Dt(9069664),Y=new Dt(3812910),G=.012,st=M.length*.62,Z=Array.from({length:15},(mt,at)=>{const Tt=ct(G,st,at/14);return new y(0,_(Tt)-.009,Tt)}),ut=mt=>mt>.8?Math.sqrt(Math.max(1-Math.pow((mt-.8)/.2,2)*.96,0)):1;D.add(Fi(Z,mt=>[ct(.02,.016,mt)*ut(mt),ct(.009,.0075,mt)*ut(mt)],s,10),"bill",N,mt=>mt.z<M.length*.5?"tongue.1":mt.z<M.length*.7?"tongue.2":"tongue.3",mt=>mt.z>st*.78?Y:null)}else{const N=new Dt(15979474),Y=.04,G=M.length*.8,st=ut=>ut.z<M.length*.5?"tongue.1":ut.z<M.length*.7?"tongue.2":"tongue.3",Z=(ut,mt,at,Tt)=>{const Gt=[];for(let kt=0;kt<=14;kt++){const ue=ct(at,Tt,kt/14),Wt=ue/M.length,jt=Math.max((Wt-.55)/.25,0);Gt.push(new y(ct(ut,mt,kt/14),-8e-4*(1-Wt*.7)-M.droop*Wt*Wt-.0028*jt*jt,ue))}return Gt};D.add(Fi(Z(0,0,Y,G-.012),ut=>[ct(.0036,.0027,ut),ct(.0024,.002,ut)],s,8),"bill",N,st);for(const ut of[1,-1])D.add(Fi(Z(ut*.0011,ut*.0015,G-.02,G),mt=>[.0015*Math.sqrt(1-mt*mt*.92),.0014*Math.sqrt(1-mt*mt*.92)],s,6),"bill",N,st)}const C=new gn({color:16777215,vertexColors:!0,roughness:.22,clearcoat:1,clearcoatRoughness:.12,sheen:.4,sheenColor:16770272,emissive:4863540,envMapIntensity:1.1,side:Be}),I=new ni(D.build(),C);I.name="bird.tongue";const L=new mn({color:16777215,vertexColors:!0,roughness:.68,envMapIntensity:.35,side:Be}),F=new ni(m.build(),L);F.name="bird.bill";const R=new lr(i);for(const N of en){const Y=new ci(e,40,28);Y.rotateX(Math.PI/2);const G=Y.getAttribute("position");for(let Z=0;Z<G.count;Z++){const ut=G.getZ(Z)/e,mt=1+.028*it(.55,1,ut);G.setXYZ(Z,G.getX(Z)*mt,G.getY(Z)*mt,G.getZ(Z)*mt)}Y.computeVertexNormals();const st=Y.getAttribute("uv");for(let Z=0;Z<G.count;Z++)st.setXY(Z,G.getZ(Z)/e,0);R.add(Y,`eye.${N}`,new Dt(1,1,1))}const U=new gn({color:0,roughness:.35,metalness:0,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.1,specularIntensity:.12,ior:1.4}),[B,k]=t.eye.pupil??[.93,.93],$={uIris:{value:t.eye.iris===void 0?new Dt(.003,.0035,.006):new Dt(t.eye.iris)},uPupil:{value:B},pupilRest:B,pupilPinned:k};U.onBeforeCompile=N=>{N.uniforms.uIris=$.uIris,N.uniforms.uPupil=$.uPupil,N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
varying float vEyeCos;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vEyeCos = uv.x;`),N.fragmentShader=N.fragmentShader.replace("#include <common>",`#include <common>
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
}`)};const V=new ni(R.build(),U);V.name="bird.eyes";const W=new lr(i);for(const N of en)W.add(gl(e*1.045,-100*Lt,100*Lt,80*Lt,!0),`nict.${N}`,new Dt(9348296));const j=new gn({color:16777215,vertexColors:!0,roughness:.45,transparent:!0,opacity:.3,clearcoat:.2,side:Be,depthWrite:!1}),Q=new ni(W.build(),j);Q.name="bird.nict",Q.renderOrder=2;const X=[v,p,F,I,V,Q];for(const N of X)N.frustumCulled=!1,N.bind(i.skeleton,new Yt);return v.castShadow=!0,F.castShadow=!0,p.castShadow=!0,p.receiveShadow=!0,F.receiveShadow=!0,{meshes:X,eye:$,dispose(){for(const N of X)N.geometry.dispose(),N.material.dispose()}}}const vl={spread:0,lift:0,droop:0,sweep:0,raise:0,out:0,twist:0};class vp{headYaw=0;headPitch=0;headRoll=0;headShift=new y;headStabil=.85;reachTarget=new y;reachWeight=0;reachDir=new y(0,0,1);reachPin=0;reachRoll=0;bodyYaw=0;bodyPitch=0;bodyRoll=0;bodyShift=new y;chestPitch=0;breath=0;fluff=0;lift=new Float32Array(8);gorget=0;crest=0;lidUpper=0;lidLower=0;nict=0;feetSlope=0;feetScale=1;grip=1;jaw=0;tongueOut=0;tongueCurl=0;carryAt=1;tailPitch=0;tailYaw=0;tailRoll=0;tailFan=0;wing={L:{...vl},R:{...vl}};reset(){Object.assign(this,J1),this.headShift.set(0,0,0),this.bodyShift.set(0,0,0),this.lift.fill(0);for(const t of en)Object.assign(this.wing[t],vl)}addLift(t,e,n){for(let s=0;s<8;s++){const r=(s/7-t)/e;this.lift[s]+=n*Math.exp(-r*r)}}}const J1=Object.fromEntries(Object.entries(new vp).filter(([,i])=>typeof i=="number")),Qn=new y(1,0,0),cr=new y(0,1,0),xl=new y(0,0,1),Po=new _e;function j1(i,t){const{bones:e,rest:n,species:s}=i,r=new Yn,o=new _e,a=new _e,l=new _e,c=new _e,h=new _e,u=new _e,d=new _e,f=new _e,g=new y,v=new y,p=new y,m=new y,[M,b]=s.behaviour.neckShare,S={};for(const dt of en){const nt=n[`hand.${dt}`].quat;S[dt]={out:Qn.clone().applyQuaternion(nt),fan:cr.clone().applyQuaternion(nt)}}{const dt={p:new y,n:new y,t:new y},nt=(re,z)=>{const Ee=i.loft.wingAt(re,z,1);return i.loft.surface(Ee.s,Ee.ang,dt)},Zt=nt(.03,.3).p.clone(),Jt=nt(.95,0).p.clone().sub(Zt).normalize(),me=nt(.4,0).n.clone();me.addScaledVector(Jt,-me.dot(Jt)).normalize(),t.uWingPivot.value.copy(Zt),t.uWingSpan.value.copy(Jt),t.uWingChord.value.crossVectors(me,Jt)}const x=n.bill,T=s.legs.zygodactyl===!0,_=new y(0,-s.bill.droop,s.bill.length).applyQuaternion(x.worldQuat).add(x.worldPos).sub(n.head.worldPos),w=_.length(),D=Math.atan2(_.y,_.z),C=.34,I=new y,L=new y,F=s.bill.length*.65,R=["tongue.1","tongue.2","tongue.3"],U=[.06,.5,.7].map(dt=>dt*s.bill.length),B=[0,.3,.7],k=(dt,nt)=>{const Zt=s.bill.length,Jt=Math.min(dt,Zt),me=-2*s.bill.droop*Jt/(Zt*Zt);return nt.set(0,-s.bill.droop*(Jt/Zt)*(Jt/Zt)+me*(dt-Jt),dt),-Math.atan(me)},$=U.map(()=>new y),V=U.map(()=>new y),W=U.map((dt,nt)=>k(dt,$[nt])),j=new y,Q=new _e,X=new Yt,N=new y,Y=new y,G=(()=>{const[dt,nt]=s.throat,Zt={p:new y,n:new y,t:new y},Jt=n.head.worldPos,me=i.loft.point(nt,0,new y).sub(Jt),re=i.loft.point(dt,0,new y).sub(Jt),z=i.loft.surface((dt+nt)/2,0,Zt).p.clone().sub(Jt),Ee=Zt.n.clone(),ce=i.loft.surface(dt,0,Zt).t.clone();return{chin:me,rim:re,mid:z,out:Ee,down:ce,span:me.distanceTo(re),pivot:Jt.clone().sub(n.chest.worldPos)}})(),st=.12,Z=new _e,ut=new y,mt=new y,at=new y,Tt=new y,Gt=n.sternum.worldPos.clone().sub(n.chest.worldPos).setX(0).normalize(),kt=en.map(dt=>({s:dt,foot:e[`foot.${dt}`],footRest:n[`foot.${dt}`],toes:[1,2,3,4].map(nt=>e[`toe.${dt}.${nt}`]),tarsus:e[`tarsus.${dt}`]})),ue=()=>{h.copy(l).invert().multiply(c),u.copy(Po).slerp(h,M),d.copy(Po).slerp(h,b)};function Wt(dt,nt,Zt,Jt,me,re){return re.copy(n.head.pos).applyQuaternion(me).add(n.neck2.pos),re.applyQuaternion(Jt).add(n.neck1.pos),re.applyQuaternion(Zt).add(n.chest.pos),re.add(n.spine.pos),re.applyQuaternion(nt).add(dt),re}const jt=function(nt){r.set(nt.bodyPitch,nt.bodyYaw,nt.bodyRoll,"YXZ"),o.setFromEuler(r),e.hips.quaternion.copy(o),e.hips.position.copy(n.hips.pos).add(nt.bodyShift),a.setFromAxisAngle(Qn,nt.chestPitch),e.chest.quaternion.copy(a),l.copy(o).multiply(a),e.sternum.position.copy(n.sternum.pos).addScaledVector(Gt,nt.breath*.011),e.sternum.scale.set(1+nt.breath*.028,1,1+nt.breath*.012),r.set(-nt.headPitch,nt.headYaw,nt.headRoll,"YXZ"),c.setFromEuler(r),ue(),Wt(e.hips.position,o,a,u,d,p),Wt(n.hips.pos,Po,Po,u,d,m),g.copy(m).sub(p).multiplyScalar(Ut(nt.headStabil,0,1)).add(nt.headShift);const Zt=Ut(nt.reachWeight,0,1);if(Zt>0){j.copy(p).add(g),v.copy(nt.reachTarget).sub(j);const Ht=v.length()||1e-6,At=Ut(Ht-w,-.24,C);j.addScaledVector(v,At/Ht);const Nt=Ut(nt.reachPin,0,1);Nt>0&&j.lerp(v.copy(nt.reachDir).multiplyScalar(-w).add(nt.reachTarget),Nt),v.copy(nt.reachTarget).sub(j).normalize();const P=Ut(Math.atan2(v.x,v.z),-2.2,2.2),E=Ut(Math.asin(Ut(v.y,-1,1))-D,-1.1,1.25);r.set(-E,P,nt.headRoll*(1-Zt),"YXZ"),Q.setFromEuler(r),Nt>0&&(N.crossVectors(cr,v).normalize(),Y.crossVectors(v,N),d.setFromRotationMatrix(X.makeBasis(N,Y,v)),d.multiply(u.setFromAxisAngle(xl,nt.reachRoll)).multiply(u.setFromAxisAngle(Qn,D)),Q.slerp(d,Nt)),c.slerp(Q,Zt),ue(),Wt(e.hips.position,o,a,u,d,p),g.lerp(j.sub(p),Zt)}e.neck1.quaternion.copy(u),e.neck2.quaternion.copy(d),f.copy(u).multiply(d).invert().multiply(h),e.head.quaternion.copy(f),I.copy(p).add(g),f.copy(l).invert(),e.neck1.position.copy(n.neck1.pos).add(v.copy(g).multiplyScalar(.22).applyQuaternion(f)),f.copy(l).multiply(u).invert(),e.neck2.position.copy(n.neck2.pos).add(v.copy(g).multiplyScalar(.3).applyQuaternion(f)),f.copy(l).multiply(u).multiply(d).invert(),e.head.position.copy(n.head.pos).add(v.copy(g).multiplyScalar(.48).applyQuaternion(f)),Z.set(0,h.y,0,h.w),Z.lengthSq()<1e-6&&Z.set(0,0,0,1),Z.normalize(),e.throat.quaternion.copy(Z),g.copy(e.head.position).applyQuaternion(e.neck2.quaternion).add(e.neck2.position).applyQuaternion(e.neck1.quaternion).add(e.neck1.position),ut.copy(G.chin).applyQuaternion(h).add(g).sub(mt.copy(G.rim).applyQuaternion(Z).add(G.pivot));const Jt=G.span*.5-ut.length(),me=.5*(Jt+Math.sqrt(Jt*Jt+1e-4));Tt.copy(G.down).applyQuaternion(Z).multiplyScalar(me),e.throat.position.copy(n.throat.pos).add(Tt),f.copy(Z).slerp(h,.5),e.gular.quaternion.copy(f),v.copy(G.mid).applyQuaternion(f);const re=Ut(st*(G.span-ut.length()),-.006,.03);at.copy(G.out).applyQuaternion(f),e.gular.position.copy(g).add(G.pivot).add(Tt).multiplyScalar(.5).add(v).addScaledVector(at,re),I.add(v.copy(_).applyQuaternion(c)),e.jaw.quaternion.copy(n.jaw.quat).multiply(u.setFromAxisAngle(Qn,Ut(nt.jaw,0,1.1)*(s.bill.gape??.31)));const z=Ut(nt.tongueOut,0,1)*F;let Ee=0;for(let Ht=0;Ht<3;Ht++){const At=k(U[Ht]+z,V[Ht])-W[Ht],Nt=e[R[Ht]];Nt.quaternion.setFromAxisAngle(Qn,At-Ee+nt.tongueCurl*B[Ht]),Ht===0?Nt.position.copy(n[R[0]].pos).add(V[0]).sub($[0]):Nt.position.copy(V[Ht]).sub(V[Ht-1]).sub($[Ht]).add($[Ht-1]).add(n[R[Ht]].pos).applyQuaternion(u.setFromAxisAngle(Qn,-Ee)),Ee=At}const ce=Math.max(nt.carryAt,0);L.set(0,-s.bill.droop*Math.min(ce,1)*Math.min(ce,1)-(ce<1?.003*(1-ce):0),ce*s.bill.length).applyQuaternion(x.worldQuat).add(x.worldPos).sub(n.head.worldPos),L.applyQuaternion(c).add(I).sub(v.copy(_).applyQuaternion(c));for(const Ht of en){const At=i.eyes[Ht],Nt=ct(_l.upperOpen,0,it(0,1,nt.lidUpper)),P=ct(_l.lowerOpen,0,it(0,1,nt.lidLower));At.lidUpper.quaternion.copy(n[At.lidUpper.name].quat).multiply(u.setFromAxisAngle(Qn,-Nt)),At.lidLower.quaternion.copy(n[At.lidLower.name].quat).multiply(u.setFromAxisAngle(Qn,-P));const E=-Rn(Ht)*_l.nictOpen*(1-Ut(nt.nict,0,1));At.nict.quaternion.copy(n[At.nict.name].quat).multiply(u.setFromAxisAngle(cr,E)),At.nict.scale.setScalar(nt.nict>.002?1:.001),At.lidUpper.scale.setScalar(ct(.93,1,it(0,.5,nt.lidUpper))),At.lidLower.scale.setScalar(ct(.93,1,it(0,.5,nt.lidLower)))}r.set(-nt.tailPitch,nt.tailYaw,nt.tailRoll,"YXZ"),e.tail.quaternion.copy(n.tail.quat).multiply(u.setFromEuler(r));const ve=ct(s.tail.restFan,s.tail.maxFan,Ut(nt.tailFan,-.5,1))*Lt;for(const Ht of i.rectrices)Ht.bone.quaternion.setFromAxisAngle(cr,Ht.k*ve);for(const Ht of en){const At=i.wings[Ht],Nt=nt.wing[Ht],P=it(0,1,Nt.spread);for(let q=0;q<At.bones.length;q++)At.bones[q].quaternion.copy(At.folded[q]).slerp(At.spread[q],P);P>0&&(Nt.sweep!==0||Nt.raise!==0)&&(u.setFromAxisAngle(cr,-Rn(Ht)*Nt.sweep*P),d.setFromAxisAngle(xl,Rn(Ht)*Nt.raise*P),At.bones[0].quaternion.premultiply(d).premultiply(u));const E=1-P;if(E>0){const q=S[Ht],ft=At.bones[1];ft.quaternion.multiply(u.setFromAxisAngle(q.out,-Nt.lift*.3*E)),ft.quaternion.multiply(u.setFromAxisAngle(q.fan,-Rn(Ht)*Nt.droop*E))}}u.setFromAxisAngle(xl,nt.feetSlope);const _t=(1-Ut(nt.grip,0,1))*.6;for(const{s:Ht,foot:At,footRest:Nt,toes:P,tarsus:E}of kt){At.position.copy(Nt.pos).applyQuaternion(u),At.quaternion.copy(u),At.scale.setScalar(nt.feetScale);for(let ft=0;ft<4;ft++)P[ft].quaternion.setFromAxisAngle(Qn,ft===3||T&&ft===0?_t:-_t);v.copy(i.ankle[Ht]).sub(Nt.worldPos).multiplyScalar(nt.feetScale).applyQuaternion(u).add(At.position),g.copy(i.hipSocket[Ht]).applyQuaternion(o).add(e.hips.position).sub(v);const q=g.length();g.applyQuaternion(d.copy(u).invert()),ss(g,Qn,E.quaternion),E.scale.set(1,1,q/i.tarsusLength/nt.feetScale)}t.uFluff.value=nt.fluff,t.uLift.value.set(nt.lift),t.uLift.value[0]+=nt.crest*.9,t.uLift.value[1]+=nt.crest*.7,t.uGorget.value=nt.gorget,t.uCrest.value=nt.crest,t.uWingSpread.value.set(nt.wing.L.spread,nt.wing.R.spread),t.uWingOut.value.set(nt.wing.L.out,nt.wing.L.twist,nt.wing.R.out,nt.wing.R.twist),t.uWingLift.value.set(nt.wing.L.lift,nt.wing.R.lift)};return jt.tip=I,jt.carry=L,jt.billReach=w,jt}class Q1{constructor(t,e=7){this.species=t,this.rng=Yi(e)}species;t=0;dt=0;rng;arousal=.3;baseline=.32;attention=null;attentionSpeed=0;freeze=0;saccading=!1;food=[];focus=null;focusId=0;eating=!1;gazeLock=!1;pinGaze=null;quiet=!1;handlers={};lastDir=new y;dir=new y;hasLast=!1;on(t,e){(this.handlers[t]??=[]).push(e)}emit(t,e){for(const n of this.handlers[t]??[])n(e)}excite(t){this.arousal=Ut(this.arousal+t,0,1)}step(t,e){if(this.dt=t,this.t+=t,this.freeze=Math.max(0,this.freeze-t),this.attention&&t>0){if(this.dir.copy(this.attention).sub(e).normalize(),this.hasLast){const n=this.dir.angleTo(this.lastDir)/t;this.attentionSpeed=Cn(this.attentionSpeed,Math.min(n,6),6,t)}this.lastDir.copy(this.dir),this.hasLast=!0}else this.hasLast=!1,this.attentionSpeed=Cn(this.attentionSpeed,0,4,t);this.excite(Math.max(this.attentionSpeed-.25,0)*.5*t),this.arousal=Cn(this.arousal,this.baseline,.14,t)}}class tS{name="posture";a=.3;yaw=new Ei(3.2,.5);follow=0;pitch=new Ei(5,.45);headYaw=0;constructor(t){t.on("saccade",e=>{this.yaw.kick(-e.dyaw*.5),this.pitch.kick(-e.dpitch*.4)}),t.on("fixate",e=>this.headYaw=e.yaw)}update(t,e){this.a=Cn(this.a,t.arousal,2.5,t.dt);const n=this.a;e.fluff+=ct(.2,-.06,n),e.headShift.y+=ct(-.032,.03,n),e.headShift.z+=ct(-.014,.012,n),e.bodyPitch+=ct(-.04,.05,n),e.bodyShift.y+=ct(-.012,.008,n),e.crest+=ct(0,.22,n),e.wing.L.droop+=ct(.05,0,n),e.wing.R.droop+=ct(.05,0,n);const s=t.t;e.bodyRoll+=Ge(s*.17,1)*.022,e.bodyShift.x+=Ge(s*.13,2)*.006,e.bodyPitch+=Ge(s*.21,3)*.012,this.follow=Cn(this.follow,this.headYaw*.14,.9,t.dt),e.bodyYaw+=this.follow+this.yaw.step(0,t.dt)+Ge(s*.11,4)*.025,e.chestPitch+=this.pitch.step(0,t.dt)}}class eS{name="breath";phase=0;update(t,e){const[n,s]=t.species.behaviour.breathHz;this.phase+=t.dt*ct(n,s,t.arousal)*Math.PI*2;const r=Math.sin(this.phase+.45*Math.sin(this.phase))*ct(.75,1.1,t.arousal);e.breath+=r,e.addLift(.42,.2,r*.014),e.tailPitch+=r*.011,e.bodyShift.y+=r*.0012,e.wing.L.lift+=r*.005,e.wing.R.lift+=r*.005}}const nS=i=>i*i*i*(10+i*(-15+6*i));class iS{name="gaze";maxYaw=70*Lt;interest=.5;billOn=.46;pursuit=0;minPitch=-45*Lt;minPitchFood=-50*Lt;cur;from;to;moving=!1;t0=0;dur=.06;amp=0;nextAt=.8;settle=10;burst=0;attYaw=0;attPitch=0;seenYaw=0;seenPitch=0;lastStart=-10;focusSeen=-1;focusAt=0;head=new y(0,.9,.05);d=new y;constructor(t){const e=t.species.behaviour.billUp*Lt;this.cur={yaw:.9,pitch:e,roll:0},this.from={...this.cur},this.to={...this.cur},t.on("startle",()=>{this.nextAt=t.t+.04+t.rng()*.04,this.burst=-1})}moveOn(t){this.burst=0,this.nextAt=Math.min(this.nextAt,t.t+gt(t.rng,.12,.4))}lookAtAttention(t){const e=t.focus??t.attention;return e?(this.d.copy(e).sub(this.head),this.attYaw=Math.atan2(this.d.x,this.d.z),this.attPitch=Math.atan2(this.d.y,Math.hypot(this.d.x,this.d.z)),!0):!1}pick(t,e=!1){const n=t.rng,s=t.species.behaviour.billUp*Lt,r=this.lookAtAttention(t),o=this.cur;let a;if(!e&&this.burst>0)this.burst--,a={yaw:o.yaw+gt(n,-1,1)*13*Lt,pitch:o.pitch+gt(n,-1,1)*8*Lt,roll:o.roll*.5+gt(n,-1,1)*9*Lt};else if(r&&(e||n()<this.interest+.4*t.arousal)){if(this.seenYaw=this.attYaw,this.seenPitch=this.attPitch,(e?0:n())<this.billOn)a={yaw:this.attYaw+gt(n,-5,5)*Lt,pitch:this.attPitch*.8+s+gt(n,-4,14)*Lt,roll:n()<.25?gt(n,-18,18)*Lt:gt(n,-5,5)*Lt};else{const h=gt(n,60,84)*Lt,u=Math.abs(o.yaw-(this.attYaw+h))<Math.abs(o.yaw-(this.attYaw-h))?1:-1;let d=n()<.6?u:-u;Math.abs(this.attYaw+d*h)>this.maxYaw&&(d=-d),a={yaw:this.attYaw+d*h,pitch:s*.6+gt(n,-8,12)*Lt,roll:d*(this.attPitch*.5+gt(n,-4,10)*Lt)}}n()<.35&&(this.burst=1+Math.floor(n()*2))}else{let c=Ut(gt(n,-1,1)*105*Lt,o.yaw-140*Lt,o.yaw+140*Lt);Math.abs(c-o.yaw)<22*Lt&&(c+=Math.sign(c-o.yaw||1)*30*Lt),a={yaw:c,pitch:s*.5+gt(n,-14,24)*Lt,roll:gt(n,-9,9)*Lt},n()<.3&&(this.burst=1+Math.floor(n()*2))}a.yaw=Ut(a.yaw,-this.maxYaw,this.maxYaw),a.pitch=Ut(a.pitch,this.minPitch,52*Lt);const l=t.species.behaviour.parrot?1.7:1;return a.roll=Ut(a.roll*l,-26*Lt*l,26*Lt*l),a}begin(t,e){const[n,s]=t.species.behaviour.saccade;this.from={...this.cur},this.to=e;const r=e.yaw-this.from.yaw,o=e.pitch-this.from.pitch,a=e.roll-this.from.roll;this.amp=Math.hypot(r*Math.cos((e.pitch+this.from.pitch)/2),o,a*.5),this.dur=Math.min(n+s*this.amp/Lt,.095),this.t0=t.t,this.moving=!0,this.lastStart=t.t,t.saccading=!0,t.emit("saccade",{amp:this.amp,dur:this.dur,dyaw:r,dpitch:o})}update(t,e){const n=t.species.behaviour;if(t.pinGaze){e.headYaw+=t.pinGaze[0]*Lt,e.headPitch+=t.pinGaze[1]*Lt,e.headRoll+=t.pinGaze[2]*Lt;return}if(t.focus&&!this.moving&&!t.gazeLock&&this.lookAtAttention(t)){const a=Math.hypot((this.attYaw-this.cur.yaw)*Math.cos(this.attPitch),this.attPitch-this.cur.pitch),l=this.focusSeen!==t.focusId;l&&!this.focusAt&&(this.focusAt=t.t+gt(t.rng,.09,.24)),(l&&t.t>=this.focusAt||!l&&a>6*Lt&&t.t-this.lastStart>.16&&t.rng()<t.dt*9)&&(this.focusSeen=t.focusId,this.focusAt=0,this.burst=0,this.begin(t,{yaw:Ut(this.attYaw,-this.maxYaw,this.maxYaw),pitch:Ut(this.attPitch+(l?gt(t.rng,-3,3)*Lt:0),this.minPitchFood,65*Lt),roll:l?gt(t.rng,-8,8)*Lt:this.cur.roll*.6}))}else if(!this.moving&&!t.quiet&&!t.focus&&!t.gazeLock)if(t.t>=this.nextAt&&(t.freeze<=0||this.burst<0)){const a=this.burst<0;a&&(this.burst=0),this.begin(t,this.pick(t,a))}else t.freeze<=0&&t.t-this.lastStart>.22&&this.lookAtAttention(t)&&Math.hypot((this.attYaw-this.seenYaw)*Math.cos(this.attPitch),this.attPitch-this.seenPitch)>13*Lt&&t.rng()<t.dt*ct(3,9,t.arousal)&&(this.burst=0,this.begin(t,this.pick(t,t.rng()<.5)),this.seenYaw=this.attYaw,this.seenPitch=this.attPitch);if(!this.moving&&this.pursuit>0&&!t.focus&&!t.gazeLock&&t.freeze<=0&&this.lookAtAttention(t)){const a=n.billUp*Lt,l=Ut(this.attYaw,-this.maxYaw,this.maxYaw),c=Ut(this.attPitch*.8+a*.6,this.minPitch,52*Lt),h=Math.hypot((l-this.cur.yaw)*Math.cos(c),c-this.cur.pitch),u=h>14*Lt&&t.t-this.lastStart>.3&&t.rng()<t.dt*5;if(h<28*Lt&&!u){const d=1-Math.exp(-t.dt*3.2*this.pursuit*(.75+.35*Ge(t.t*3.1,31)));this.cur={yaw:this.cur.yaw+(l-this.cur.yaw)*d,pitch:this.cur.pitch+(c-this.cur.pitch)*d,roll:this.cur.roll*(1-d*.5)},this.from={...this.cur},this.to={...this.cur},this.seenYaw=this.attYaw,this.seenPitch=this.attPitch,h>3*Lt&&(this.nextAt=Math.max(this.nextAt,t.t+.25))}else(u||t.t-this.lastStart>.16&&t.rng()<t.dt*10)&&(this.burst=0,this.begin(t,this.pick(t,!0)))}let s,r,o;if(this.moving){const a=(t.t-this.t0)/this.dur;if(a>=1){this.moving=!1,t.saccading=!1,this.cur={...this.to},this.settle=0;const h=Math.abs(this.cur.yaw-this.attYaw)<15*Lt,[u,d]=[ct(n.holdCalm[0],n.holdAlert[0],t.arousal),ct(n.holdCalm[1],n.holdAlert[1],t.arousal)];this.nextAt=t.t+(this.burst<0?.05:this.burst>0?gt(t.rng,.14,.42):EM(t.rng,u,d,1.8)*(h?1.15:1)),t.emit("fixate",{yaw:this.cur.yaw,pitch:this.cur.pitch})}const l=nS(Ut(a,0,1)),c=Math.sin(Math.PI*Ut(a,0,1));s=ct(this.from.yaw,this.to.yaw,l),r=ct(this.from.pitch,this.to.pitch,l)-c*this.amp*.09,o=ct(this.from.roll,this.to.roll,l),e.headShift.y-=c*Math.min(this.amp,1.6)*.012}else{this.settle+=t.dt;const a=Math.exp(-this.settle/.032)*Math.cos(this.settle*24*Math.PI*2)*.04;s=this.cur.yaw+(this.to.yaw-this.from.yaw)*a,r=this.cur.pitch+(this.to.pitch-this.from.pitch)*a,o=this.cur.roll+(this.to.roll-this.from.roll)*a}s+=Ge(t.t*11,11)*.0028+Ge(t.t*.6,12)*.008,r+=Ge(t.t*12,13)*.0028+Ge(t.t*.5,14)*.007,o+=Ge(t.t*.7,15)*.008,e.headYaw+=s,e.headPitch+=r,e.headRoll+=o,e.headShift.x+=Math.sin(s)*.014,e.headShift.z+=(Math.cos(s)-1)*.01-Math.max(r,0)*.018}}class sS{name="blink";t0=-10;full=!1;nextAt=1.5;constructor(t){t.on("saccade",e=>{e.amp>.6&&t.rng()<.45&&t.t-this.t0>.5&&this.start(t,!1)}),t.on("startle",()=>{this.nextAt=t.t+1.2+t.rng()})}start(t,e){this.t0=t.t,this.full=e;const[n,s]=t.species.behaviour.blinkEvery;this.nextAt=t.t+gt(t.rng,n,s)*ct(1.3,.8,t.arousal)}update(t,e){!t.quiet&&t.t>=this.nextAt&&t.freeze<=0&&this.start(t,t.rng()<ct(.3,.08,t.arousal));const n=this.full?1.7:1,s=(t.t-this.t0)/n,r=s<0?0:s<.045?it(0,.045,s):s<.07?1:1-it(.07,.165,s);e.nict+=r,e.lidLower+=r*(this.full?1:.3),e.lidUpper+=r*(this.full?.75:.08);const o=it(.3,.05,t.arousal);e.lidUpper+=o*.22,e.lidLower+=o*.18}}class rS{name="ruffle";kind="puff";t0=-100;nextAt;amp=.6;last=-1e9;constructor(t){const[e,n]=t.species.behaviour.ruffleEvery;this.nextAt=gt(t.rng,e*.5,n*.6),t.on("startle",()=>{this.t0=-100,this.nextAt=Math.max(t.t+gt(t.rng,2.8,5),this.last+t.species.behaviour.ruffleEvery[0])})}trigger(t,e,n){const s=t.rng();this.kind=e??(s<.45?"puff":s<.7?"shake":"throat"),this.t0=t.t,this.last=t.t,this.amp=n??gt(t.rng,.45,.75);const[r,o]=t.species.behaviour.ruffleEvery;this.nextAt=t.t+gt(t.rng,r,o),t.emit("ruffle",{kind:this.kind})}update(t,e){!t.quiet&&t.t>=this.nextAt&&t.freeze<=0&&!t.saccading&&(t.arousal<.7?this.trigger(t):this.nextAt=t.t+1);const n=t.t-this.t0;if(n<0||n>3)return;const s=this.amp;if(this.kind==="throat"){const l=it(0,.12,n)*(1-it(.7,1.25,n));e.gorget+=l*.42*s,e.crest+=l*.38*s,e.addLift(.12,.14,l*.25*s),e.headShift.y+=l*.01;return}for(let l=0;l<8;l++){const c=n-l/7*.2;if(c<=0)continue;const h=it(0,.13,c),u=1-it(.62,1.5,c),d=c>.62?.14*Math.sin((c-.62)*13)*Math.exp(-(c-.62)*3.5):0;e.lift[l]+=s*(h*u+d)*ct(.75,1,l/7)}e.crest+=s*.25*it(0,.1,n)*(1-it(.5,1.1,n));const r=it(.14,.24,n)*(1-it(.55,.85,n)),o=(n-.14)*14*Math.PI*2,a=Math.sin(o)*r;e.bodyRoll+=a*.05*s,e.bodyYaw+=Math.cos(o)*r*.035*s,e.tailYaw+=Math.sin(o-1.2)*r*.16*s,e.tailFan+=r*.55*s+it(0,.2,n)*(1-it(.6,1.4,n))*.25*s;for(const l of["L","R"])e.wing[l].lift+=(r*.11+Math.abs(a)*.05)*s+it(0,.2,n)*(1-it(.7,1.5,n))*.06*s,e.wing[l].droop+=r*.07*s;if(e.bodyShift.y+=r*.008,this.kind==="shake"){const l=it(.1,.2,n)*(1-it(.5,.75,n));e.headRoll+=Math.sin(o*1.15+.8)*l*.3*s,e.headYaw+=Math.cos(o*1.15)*l*.16*s,e.nict+=l,e.lidLower+=l*.6,e.headStabil-=l*.5}}}class oS{name="tail";pitch=new Ei(6.5,.28);fan=new Ei(4.5,.5);yaw=new Ei(5,.4);nextAt;pumps=0;pumpAt=0;constructor(t){const[e,n]=t.species.behaviour.tailEvery;this.nextAt=gt(t.rng,e*.4,n*.5),t.on("startle",s=>{this.pitch.kick(-5*s.strength),this.fan.kick(14*s.strength)}),t.on("saccade",s=>{s.amp>.9&&this.yaw.kick(-s.dyaw*.5)})}flick(t,e=1){this.pitch.kick(-gt(t.rng,3,5.5)*e),this.fan.kick(gt(t.rng,5,11)*e),this.yaw.kick(gt(t.rng,-1.5,1.5)*e)}update(t,e){if(!t.quiet&&t.t>=this.nextAt&&t.freeze<=0){const[n,s]=t.species.behaviour.tailEvery;this.nextAt=t.t+gt(t.rng,n,s),this.pumps=t.rng()<.4?1+Math.floor(t.rng()*2):0,this.pumpAt=t.t+.16,this.flick(t)}this.pumps>0&&t.t>=this.pumpAt&&(this.pumps--,this.pumpAt=t.t+gt(t.rng,.13,.2),this.flick(t,.7)),e.tailPitch+=this.pitch.step(0,t.dt),e.tailFan+=Math.max(this.fan.step(0,t.dt),-.3),e.tailYaw+=this.yaw.step(0,t.dt)}}class Ps{name="wings";t0=-100;nextAt;lead=1;amp=1;stretchT0=-100;stretchSide="L";nextStretch;constructor(t){const[e,n]=t.species.behaviour.wingEvery;this.nextAt=gt(t.rng,e*.5,n*.6),this.nextStretch=gt(t.rng,20,45)}static STRETCH=3.2;stretch(t,e=t.rng()<.5?"L":"R"){this.stretchT0=t.t,this.stretchSide=e,this.nextStretch=t.t+gt(t.rng,45,110)}get stretching(){return this.stretchT0>-50}shuffle(t){this.t0=t.t,this.lead=t.rng()<.5?1:-1,this.amp=gt(t.rng,.7,1.2);const[e,n]=t.species.behaviour.wingEvery;this.nextAt=t.t+gt(t.rng,e,n)}update(t,e){t.species.behaviour.parrot&&!t.quiet&&t.t>=this.nextStretch&&t.freeze<=0&&t.arousal<.5&&!t.eating&&!t.focus&&this.stretch(t);const n=t.t-this.stretchT0;if(n>=0&&n<=Ps.STRETCH){const o=it(0,.9,n)*(1-it(Ps.STRETCH-1,Ps.STRETCH,n)),a=this.stretchSide==="L"?1:-1,l=e.wing[this.stretchSide];l.spread+=o*.8,l.sweep-=o*.5,l.raise-=o*.35,e.tailFan+=o*.6,e.tailYaw+=a*o*.25,e.bodyRoll-=a*o*.06,e.addLift(.5,.3,o*.08)}else n>Ps.STRETCH&&(this.stretchT0=-100);!t.quiet&&t.t>=this.nextAt&&t.freeze<=0&&!this.stretching&&this.shuffle(t);const s=t.t-this.t0;if(s<0||s>1.2)return;for(const o of["L","R"]){const a=s-((o==="L"?1:-1)*this.lead>0?0:.07);if(a<=0)continue;const l=it(0,.07,a)*(1-it(.22,.6,a)),c=Math.sin(a*12*Math.PI*2)*it(.05,.1,a)*(1-it(.2,.42,a));e.wing[o].lift+=(l*.2+c*.06)*this.amp,e.wing[o].droop+=l*.1*this.amp}const r=it(0,.08,s)*(1-it(.15,.5,s));e.bodyShift.y+=r*.006,e.addLift(.5,.25,r*.12)}}class aS{constructor(t){this.mind=t}mind;name="startle";crouch=new Ei(4.2,.42);t0=-100;strength=0;fire(t){const e=this.mind;this.strength=t,this.t0=e.t,e.arousal=Math.max(e.arousal,.6+.4*t),e.freeze=.45+e.rng()*.55,this.crouch.kick(-.9*t),e.emit("startle",{strength:t})}update(t,e){const n=this.crouch.step(0,t.dt);e.bodyShift.y+=n,e.bodyPitch+=-n*2.2,e.headShift.y+=n*.6;const s=t.t-this.t0;if(s<0||s>8)return;const r=this.strength,o=Math.exp(-s/1.6)*Math.min(s/.05,1);e.fluff-=.13*o*r,e.headShift.y+=.02*o*r;const a=Math.exp(-s/.09)*Math.min(s/.03,1);e.wing.L.lift+=a*.42*r,e.wing.R.lift+=a*.42*r,e.lidUpper-=.2*o,e.lidLower-=.2*o}}const yl=i=>i*i*i*(10+i*(-15+6*i)),Lo=.06;class lS{constructor(t,e,n,s,r,o=null){this.mind=t,this.solver=e,this.headRest=n,this.pick=s,this.swallowed=r,this.hop=o,t.on("startle",()=>{this.carried>=0&&this.swallowed(this.carried),this.carried=-1,this.release(this.mind,"idle"),this.readyAt=this.mind.t+1.5})}mind;solver;headRest;pick;swallowed;hop;name="forage";reachOut=.3;reachIn=.2;catchRadius=.05;state="idle";id=-1;t0=0;dur=.15;decideAt=0;watchUntil=0;readyAt=0;retried=!1;ignore=new Map;target=new y;w=0;wFrom=0;lean=0;yaw=0;rel=new y;focus=new y;licks=3;carried=-1;hopAt=0;moved=new y;seed(t){return t.food.find(e=>e.id===this.id)}slideFor(t){const e=this.rel.copy(t).sub(this.headRest),n=e.length(),s=Math.atan2(e.x,e.z),r=Math.asin(Ut(e.y/Math.max(n,1e-6),-1,1));if(Math.abs(s)>2||r<-.95||r>1.3||t.y<-.12)return null;const o=n-this.solver.billReach;return o>this.reachOut||o<-this.reachIn?null:o}inView(t){const e=this.rel.copy(t).sub(this.headRest);return Math.abs(Math.atan2(e.x,e.z))<2.2&&e.length()<2.2&&t.y>-.9}release(t,e){this.state=e,this.t0=t.t,this.wFrom=this.w,e==="idle"&&(t.focus=null,t.gazeLock=!1,this.id=-1)}begin(t,e,n){this.state=e,this.t0=t.t,this.dur=n,this.wFrom=this.w}update(t,e){const n=t.t,s=Ut((n-this.t0)/this.dur,0,1);let r=this.seed(t);switch(t.eating=this.state!=="idle"&&this.state!=="watch",this.state){case"idle":{if(this.w=Cn(this.w,0,22,t.dt),n<this.readyAt)break;let o=null,a=1/0;for(const l of t.food){if(!this.inView(l.pos)||(this.ignore.get(l.id)??0)>n&&this.slideFor(l.pos)===null||l.vel.lengthSq()<Lo*Lo&&this.slideFor(l.pos)===null)continue;const c=l.pos.distanceTo(this.headRest)-(this.slideFor(l.pos)!==null?1:0);c<a&&(a=c,o=l)}o&&(this.id=o.id,this.state="watch",this.decideAt=0,this.watchUntil=n+gt(t.rng,.7,1.5),t.focus=this.focus.copy(o.pos),t.focusId++,t.excite(.25));break}case"watch":{if(this.w=Cn(this.w,0,22,t.dt),!r||!this.inView(r.pos)){this.release(t,"idle");break}if(t.focus=this.focus.copy(r.pos),this.hop?.busy)break;if(this.slideFor(r.pos)===null){if(this.decideAt=0,this.hop&&t.freeze<=0&&(this.hopAt||(this.hopAt=n+gt(t.rng,.45,1.1)),n>=this.hopAt)){const o=r.pos,a=this.hop.spotFor(l=>this.slideFor(this.moved.copy(o).sub(l))!==null);if(this.hopAt=n+gt(t.rng,.5,.9),a!==null&&this.hop.go(t,a)){this.watchUntil=Math.max(this.watchUntil,n+3);break}}r.vel.lengthSq()<Lo*Lo&&(this.watchUntil=Math.min(this.watchUntil,n+.25)),n>this.watchUntil&&(this.ignore.set(r.id,n+gt(t.rng,25,45)),this.release(t,"idle"),this.readyAt=n+gt(t.rng,.3,1));break}this.hopAt=0,this.decideAt||(this.decideAt=n+gt(t.rng,.35,1.1)),n>=this.decideAt&&!t.saccading&&t.freeze<=0&&(t.gazeLock=!0,this.retried=!1,this.begin(t,"windup",gt(t.rng,.09,.13)),t.emit("strike",{id:r.id}));break}case"windup":{if(!r){this.release(t,"idle");break}const o=Math.sin(s*Math.PI*.5);if(this.rel.copy(r.pos).sub(this.headRest).normalize(),e.headShift.addScaledVector(this.rel,-.03*o),e.bodyShift.y-=.006*o,s>=1){const a=this.slideFor(r.pos)??0;this.lean=a,this.yaw=Math.atan2(r.pos.x-this.headRest.x,r.pos.z-this.headRest.z),this.begin(t,"strike",Ut(.13+Math.abs(a)*.2,.12,.2))}break}case"strike":{if(!r){this.begin(t,"retract",.2);break}this.target.copy(r.pos).addScaledVector(r.vel,(1-s)*this.dur),this.w=this.wFrom+(1-this.wFrom)*(1-Math.pow(1-s,3)),e.jaw+=it(.2,.7,s)*(1-it(.92,1,s)*.88)*.95,s>=1&&(this.solver.tip.distanceTo(r.pos)<this.catchRadius?(this.pick(r.id),this.carried=r.id,t.excite(.1),this.begin(t,"hold",gt(t.rng,.06,.1))):!this.retried&&this.slideFor(r.pos)!==null?(this.retried=!0,this.begin(t,"strike",.1)):(this.ignore.set(r.id,n+gt(t.rng,3,5)),this.begin(t,"retract",.22)));break}case"hold":if(this.w=1,e.jaw+=.1,s>=1){t.focus=null;const o=t.species.behaviour.parrot===!0;this.licks=o?4+Math.floor(t.rng()*3):2,this.begin(t,"eat",o?this.licks*.26+.1:this.licks*.13+.04)}break;case"retract":this.w=this.wFrom*(1-yl(s)),s>=1&&(this.release(t,"idle"),this.readyAt=n+gt(t.rng,.3,.9));break;case"eat":{if(t.species.behaviour.parrot){this.w=this.wFrom*(1-yl(Ut((n-this.t0)/.35,0,1)));const d=Math.sin(Math.PI*(s*this.licks%1));e.carryAt=ct(.96,.6,it(0,1,s)),e.jaw+=.08+.3*d,e.tongueOut+=.08*d,e.headPitch-=.05*it(0,.25,s)*(1-it(.85,1,s)),s>=1&&this.begin(t,"swallow",gt(t.rng,.34,.46));break}this.w=this.wFrom*(1-yl(Ut((n-this.t0)/.2,0,1)));const o=Ut((n-this.t0)/(this.dur-.04)*this.licks,0,this.licks),a=Math.min(Math.floor(o),this.licks-1),l=o>=this.licks?1:o-a,c=1-a/this.licks,h=1-(a+1)/this.licks,u=Math.sin(Math.PI*it(0,.55,l));e.tongueOut+=Ut((c-.72)/.65*u+.04*u,0,1),e.carryAt=ct(c,h+.04,it(.35,1,l)),e.jaw+=.12+.3*Math.sin(Math.PI*it(0,.7,l))-.08*it(.75,1,l),e.headPitch+=.03*Math.sin(Math.PI*l),s>=1&&this.begin(t,"swallow",gt(t.rng,.36,.44));break}case"swallow":{this.w=0;const o=t.species.behaviour.parrot===!0;e.carryAt=o?ct(.6,.08,it(0,.4,s)):.04;const a=Math.sin(Math.PI*it(0,.55,s))*(o?.07:.26);e.headPitch+=a,e.headShift.y+=a*.03,e.jaw+=Math.sin(Math.PI*it(.1,.5,s))*(o?.2:.45);const l=Math.sin(Math.PI*it(.35,.95,s));e.gorget+=l*.16,e.addLift(.2,.12,l*.12),s>.18&&this.carried>=0&&(this.swallowed(this.carried),t.emit("ate",{id:this.carried}),this.carried=-1),s>=1&&(this.release(t,"idle"),this.readyAt=n+gt(t.rng,.4,1.3));break}}this.w>.001&&(e.reachTarget.copy(this.target),e.reachWeight=this.w,e.bodyPitch+=this.w*Ut(this.lean*.75,-.16,.24),e.bodyYaw+=this.w*this.yaw*.14,e.bodyShift.y-=this.w*.008,e.headStabil*=1-this.w)}}class cS{name="mouth";lickEvery=[14,36];singEvery=[30,80];blocked=()=>!1;flicks=[];nextLick;singFrom=-10;singFor=0;bursts=[];nextSing;pump=0;parrot;constructor(t){this.parrot=t.species.behaviour.parrot===!0,this.nextLick=gt(t.rng,5,14),this.nextSing=gt(t.rng,14,34),t.on("ate",()=>{t.rng()<.7&&(this.nextLick=t.t+gt(t.rng,.25,.6))}),t.on("startle",()=>{this.singFor=0,this.flicks.length=0,this.nextLick=t.t+gt(t.rng,8,16),this.nextSing=Math.max(this.nextSing,t.t+gt(t.rng,12,30))})}lick(t,e=gt(t.rng,.56,.68),n=t.rng()<.45?1:t.rng()<.6?2:3){this.flicks.length=0;let s=t.t;for(let r=0;r<n;r++)this.flicks.push({at:s,amp:r===0?e:e*gt(t.rng,.8,1.05)}),s+=gt(t.rng,.21,.3);this.nextLick=t.t+gt(t.rng,this.lickEvery[0],this.lickEvery[1])}sing(t,e=1.6){if(this.singFrom=t.t,this.bursts.length=0,this.parrot){let r=.1;const o=Math.max(2,Math.round(e*2.2));for(let l=0;l<o;l++){const c=gt(t.rng,2.6,3.4);this.bursts.push({at:r,notes:1,hz:c,amp:gt(t.rng,.7,.95)}),r+=1/c+gt(t.rng,.06,.2)}const a=this.bursts[this.bursts.length-1];this.singFor=a.at+1/a.hz+.3,this.nextSing=t.t+this.singFor+gt(t.rng,this.singEvery[0],this.singEvery[1]),this.flicks.length=0,this.nextLick=Math.max(this.nextLick,t.t+this.singFor+gt(t.rng,1.5,5)),t.excite(.25);return}let n=.06;for(;n<e-.2||this.bursts.length===0;){const r=3+Math.floor(t.rng()*3),o=gt(t.rng,13,16.5);this.bursts.push({at:n,notes:r,hz:o,amp:gt(t.rng,.26,.4)}),n+=r/o+(t.rng()<.25?gt(t.rng,.32,.5):gt(t.rng,.1,.22))}const s=this.bursts[this.bursts.length-1];this.singFor=s.at+s.notes/s.hz+.25,this.nextSing=t.t+this.singFor+gt(t.rng,this.singEvery[0],this.singEvery[1]),this.flicks.length=0,this.nextLick=Math.max(this.nextLick,t.t+this.singFor+gt(t.rng,1.5,5))}get singing(){return this.singFor>0}update(t,e){const n=!t.quiet&&!t.gazeLock&&!t.focus&&!t.eating&&t.freeze<=0&&!this.blocked();n&&t.t>=this.nextLick&&t.arousal<.6&&!this.singing&&this.lick(t),n&&t.t>=this.nextSing&&!this.singing&&(t.arousal<.42&&this.flicks.length===0?this.sing(t,gt(t.rng,1.1,2.4)):this.nextSing=t.t+gt(t.rng,4,9));let s=0;for(const h of this.flicks){const u=(t.t-h.at)/.19;u>=0&&u<=1&&(s=Math.max(s,h.amp*Math.sin(Math.PI*Math.pow(it(0,1,u),.8))))}this.flicks.length&&t.t>this.flicks[this.flicks.length-1].at+.2&&(this.flicks.length=0),s>0&&this.parrot?(e.tongueOut+=Math.min(s,.7)*.2,e.jaw+=.14*it(0,.3,s)):s>0&&(e.tongueOut+=Math.min(s,.7),e.tongueCurl+=.16*it(.3,.6,s),e.jaw+=.02*it(0,.3,s));let r=0,o=0,a=0;const l=t.t-this.singFrom;if(this.singFor>0)if(l>this.singFor||this.blocked())this.singFor=0;else for(const h of this.bursts){const u=l-h.at,d=h.notes/h.hz;u<0||u>d||(r=it(0,.03,u)*(1-it(d-.03,d,u)),o=.5-.5*Math.cos(u*h.hz*Math.PI*2),a=h.amp)}this.pump=Cn(this.pump,r,r>this.pump?30:11,t.dt);const c=this.pump;if(!(c<.002&&r===0)){if(this.parrot){e.jaw+=r*a*(.2+.8*o),e.tongueOut+=r*o*.1,e.headPitch+=c*.12+r*o*.06,e.headShift.z+=c*.014,e.headShift.y+=c*.008,e.bodyPitch+=c*.05,e.addLift(.12,.12,c*.3),e.tailFan+=c*.35,e.breath-=c*.5;return}e.jaw+=r*a*(.1+.9*o),e.gorget+=c*.2+r*o*.05,e.addLift(.2,.07,c*.16),e.crest-=c*.14,e.addLift(0,.07,-c*.14),e.addLift(.4,.09,-c*.3),e.breath-=c*.7,e.headPitch+=c*.035+r*o*.012,e.headShift.y-=c*.004,e.headShift.z-=c*.003,e.tailPitch-=c*.03}}}const Io=()=>({point:new y,up:new y(0,1,0),tangent:new y(1,0,0),radius:.0405});class hS{constructor(t,e){this.mind=t,this.ground=e,t.on("startle",n=>{if(this.hold||this.phase!=="stand"||t.eating||t.rng()>.55*n.strength)return;const s=gt(t.rng,.1,.2)*(t.rng()<.5?-1:1),r=this.clampX(this.x+s);Math.abs(r-this.x)>.06&&this.go(t,r,.05)})}mind;ground;name="hop";maxHop=.35;homeAfter=[14,30];home=0;hold=!1;x=0;phase="stand";t0=0;dur=.1;x0=0;x1=0;apex=.05;from=Io();to=Io();here=Io();tmp=Io();legs=new Ei(5.5,.4);lag=new y;anchor=new y;off=new y;slope=0;scale=1;placed=!1;homeAt=20;lastFood=0;get busy(){return this.phase!=="stand"}clampX(t){return Ut(t,this.ground.range[0],this.ground.range[1])}frame(t,e){return(this.ground.at?.(t,e)??null)||(e.point.set(t,this.ground.root.position.y,this.ground.root.position.z),e.up.set(0,1,0),e.tangent.set(1,0,0),e.radius=this.ground.restRadius),e}reseat(){this.placed=!1}spotFor(t){if(!this.ground.at)return null;const e=this.ground.range[1]-this.ground.range[0];for(let n=.1;n<=e+1e-6;n+=.05)for(const s of[1,-1]){const r=this.x+s*n;if(r<this.ground.range[0]||r>this.ground.range[1])continue;const o=this.ground.at(r,this.tmp);if(o&&t(this.off.copy(o.point).sub(this.here.point)))return this.x+s*Math.min(n,this.maxHop)}return null}place(t,e){return this.x=this.clampX(t),this.frame(this.x,this.here),this.slope=Math.atan2(this.here.tangent.y,this.here.tangent.x),this.scale=this.here.radius/this.ground.restRadius,e.copy(this.here.point),this.x}landed(){this.legs.kick(-1.1),this.follow()}follow(){this.anchor.copy(this.ground.root.position)}go(t,e,n=gt(t.rng,.07,.11)){if(this.hold||this.phase!=="stand"||(e=this.clampX(Ut(e,this.x-this.maxHop,this.x+this.maxHop)),Math.abs(e-this.x)<.03))return!1;this.x0=this.x,this.x1=e,this.frame(this.x0,this.from),this.frame(this.x1,this.to);const s=this.from.point.distanceTo(this.to.point);return this.apex=Ut(.035+s*.13,.04,.08),this.phase="crouch",this.t0=t.t,this.dur=n,t.excite(.15),!0}update(t,e){const n=this.ground.root;this.placed||(this.placed=!0,this.x=this.clampX(n.position.x),this.frame(this.x,this.here),n.position.copy(this.here.point),this.anchor.copy(n.position),this.slope=Math.atan2(this.here.tangent.y,this.here.tangent.x),this.scale=this.here.radius/this.ground.restRadius);const s=t.t,r=Ut((s-this.t0)/this.dur,0,1);let o=1;switch(t.food.length&&(this.lastFood=s),this.phase==="stand"&&!this.hold&&this.homeAfter[1]>0&&!t.quiet&&!t.eating&&t.freeze<=0&&Math.abs(this.x-this.home)>.12&&s-this.lastFood>4&&s>this.homeAt&&(this.go(t,this.home+(this.x-this.home)*.3),this.homeAt=s+gt(t.rng,this.homeAfter[0],this.homeAfter[1])),this.phase){case"crouch":{const l=Math.sin(r*Math.PI*.5);e.bodyShift.y-=.022*l,e.bodyPitch+=.07*l,e.wing.L.lift+=.1*l,e.wing.R.lift+=.1*l,r>=1&&(t.emit("perch",{x:this.x0,push:.45,on:!1,side:0}),this.phase="air",this.t0=s,this.dur=Ut(.12+this.from.point.distanceTo(this.to.point)*.38,.12,.25));break}case"air":{n.position.copy(this.from.point).lerp(this.to.point,r),n.position.y+=4*this.apex*r*(1-r),this.slope=ct(Math.atan2(this.from.tangent.y,this.from.tangent.x),Math.atan2(this.to.tangent.y,this.to.tangent.x),r),this.scale=ct(this.from.radius,this.to.radius,r)/this.ground.restRadius;const l=Math.sin(Math.PI*r);o=1-it(0,.2,r)*(1-it(.75,1,r)),e.bodyShift.y+=.014*(1-r)-.012*l+.008*it(.7,1,r),e.bodyPitch+=.07*(1-r)-.04*l;const c=Math.sign(this.x1-this.x0);e.bodyRoll+=-c*.07*l,e.wing.L.lift+=.1+.3*l,e.wing.R.lift+=.1+.3*l,e.wing.L.droop+=.12*l,e.wing.R.droop+=.12*l,e.tailFan+=.5*l,e.tailPitch+=.12*l,e.fluff-=.05*l,r>=1&&(this.x=this.x1,this.frame(this.x,this.here),n.position.copy(this.here.point),this.phase="land",this.t0=s,this.dur=.28,this.legs.kick(-.75),t.emit("perch",{x:this.x1,push:.55,on:!0,side:0}));break}case"land":{const l=1-it(0,1,r);e.wing.L.lift+=.1*l,e.wing.R.lift+=.1*l,e.tailFan+=.3*l,e.tailPitch-=.1*Math.sin(Math.PI*r)*.8,e.addLift(.55,.3,.14*Math.sin(Math.PI*it(0,.8,r))),r>=1&&(this.phase="stand");break}}const a=this.legs.step(0,t.dt);e.bodyShift.y+=a,e.bodyPitch+=-a*1.6,this.anchor.x=Cn(this.anchor.x,n.position.x,this.phase==="air"?9:16,t.dt),this.anchor.y=Cn(this.anchor.y,n.position.y,this.phase==="air"?9:16,t.dt),this.anchor.z=Cn(this.anchor.z,n.position.z,16,t.dt),this.lag.copy(this.anchor).sub(n.position).clampLength(0,.16),e.headShift.add(this.lag),e.feetSlope=this.slope,e.feetScale=this.scale,e.grip=o,e.bodyRoll+=this.slope*.12}}function uS(i){const t=i.species.wing,e=t.hand+t.primaryLen[1]*.92,n=Yi(i.species.seed+501),s=64,r=4,o=new Uint8Array(s*r*4);for(let u=0;u<s;u++){const d=.45+.55*Math.pow(n(),2.2)+(n()<.12?.6:0);for(let f=0;f<r;f++)o.set([255,Math.min(255,d*200),255,255],(f*s+u)*4)}const a=new ma(o,s,r);a.wrapS=as,a.magFilter=a.minFilter=je,a.needsUpdate=!0;const l=new Xn({color:new Dt(t.color).multiplyScalar(1.6),alphaMap:a,vertexColors:!0,transparent:!0,depthWrite:!1,side:Be,opacity:0}),c=[],h=i.rest.chest.worldPos;for(const u of en){const d=Rn(u),f=[],g=[],v=[],p=[],m=28,M=6;for(const x of[-24,-8,8,24]){const T=f.length/3;for(let _=0;_<=m;_++){const w=_/m,D=(-98+172*w)*Lt;for(let C=0;C<=M;C++){const I=C/M,L=Math.tan(x*Lt)*I*e*(.6+.4*Math.cos((w-.5)*Math.PI*2));f.push(d*Math.cos(D)*I*e,L+.04*I,Math.sin(D)*I*e);const F=it(.05,.4,I)*(1-it(.8,1,I))*(.5+.9*Math.pow(Math.abs(w*2-1),2.5))*it(0,.06,w)*(1-it(.94,1,w));g.push(1,1,1,F*(Math.abs(x)<10?.5:.36)),v.push(w*2.2,I)}}for(let _=0;_<m;_++)for(let w=0;w<M;w++){const D=T+_*(M+1)+w,C=D+M+1;p.push(D,C,D+1,C,C+1,D+1)}}const b=new Me;b.setAttribute("position",new ee(f,3)),b.setAttribute("color",new ee(g,4)),b.setAttribute("uv",new ee(v,2)),b.setIndex(p);const S=new pe(b,l);S.name=`bird.wingBlur.${u}`,S.frustumCulled=!1,S.visible=!1,S.renderOrder=2,S.position.copy(i.rest[`shoulder.${u}`].worldPos).sub(h),i.bones.chest.add(S),c.push(S)}return{set(u,d=.6){const f=u>.004;for(const g of c)g.visible=f,g.rotation.set(d+(Math.random()-.5)*.16,(Math.random()-.5)*.2,(Math.random()-.5)*.12);f&&(l.opacity=u*(.8+.45*Math.random()),a.offset.x=Math.random())},dispose(){for(const u of c)u.removeFromParent(),u.geometry.dispose();l.dispose(),a.dispose()}}}const As=2;class dS{constructor(t,e,n,s,r,o){this.mind=t,this.rig=e,this.root=n,this.hop=s,this.ruffle=r,this.tail=o,this.nextAt=gt(t.rng,this.every[0],this.every[1]),this.blur=uS(e)}mind;rig;root;hop;ruffle;tail;name="flee";awayFor=[2,5];every=[70,200];phase="idle";t0=0;dur=.4;side=1;from=new y;out=new y;hover=new y;landAt=new y;far=new y;landX=0;nextAt;blur;shakeAt=-1;get active(){return this.phase!=="idle"}get perched(){return this.phase==="idle"||this.phase==="ready"||this.phase==="land"}get gone(){return this.phase==="away"}start(){const t=this.mind;return this.active||this.hop.busy?!1:(this.hop.hold=!0,t.emit("startle",{strength:1}),t.arousal=1,t.freeze=0,this.phase="ready",this.t0=t.t,this.dur=gt(t.rng,.3,.48),this.side=t.rng()<.5?1:-1,this.nextAt=t.t+gt(t.rng,this.every[0],this.every[1]),!0)}go(t,e){this.phase=t,this.t0=this.mind.t,this.dur=e}update(t,e){if(this.phase==="idle"&&(!t.quiet&&t.t>=this.nextAt&&!t.eating&&t.freeze<=0&&this.start(),this.shakeAt>0&&t.t>=this.shakeAt&&(this.shakeAt=-1,this.ruffle.trigger(t,"shake",.7)),this.phase==="idle"))return;const n=this.root,s=Ut((t.t-this.t0)/this.dur,0,1);let r=0,o=0,a=.6;switch(t.gazeLock=this.phase!=="land",this.phase){case"ready":{const l=Math.sin(s*Math.PI*.5);e.bodyShift.y-=.04*l,e.bodyShift.z+=.02*l,e.bodyPitch+=.34*l,e.headShift.y-=.012*l,e.fluff-=.12*l,e.tailFan+=.35*l,e.tailPitch-=.12*l,r=.42*it(0,.8,s);const c=Math.sin(t.t*46*Math.PI)*.05*l;for(const h of["L","R"])e.wing[h].lift+=.25*l+c,e.wing[h].droop+=.08*l;s>=1&&(this.from.copy(n.position),this.out.set(this.side*.55,1,.12).normalize(),t.emit("perch",{x:this.from.x,push:1,on:!1,side:.4}),this.go("takeoff",.27));break}case"takeoff":{n.position.copy(this.from).addScaledVector(this.out,.35*s+7.5*s*s*s),r=As,o=it(0,.12,s),e.grip=1-it(0,.15,s),e.bodyShift.y+=.03*it(0,.3,s),e.bodyPitch+=ct(.34,.1,it(0,.6,s)),a=.95,e.bodyRoll+=-this.side*.25*s,e.tailFan+=.8,e.tailPitch-=.25,e.fluff-=.14,s>=1&&(n.visible=!1,this.go("away",gt(t.rng,this.awayFor[0],this.awayFor[1])));break}case"away":{r=As,s>=1&&(this.landX=this.hop.home+gt(t.rng,-.12,.12),this.landX=this.hop.place(this.landX,this.landAt),this.hover.copy(this.landAt),this.hover.y+=.2,this.far.copy(this.hover).add(new y(-this.side*gt(t.rng,3.2,4.4),gt(t.rng,1.8,3),gt(t.rng,-1.2,-.3))),n.position.copy(this.far),n.visible=!0,this.go("approach",gt(t.rng,.42,.55)));break}case"approach":{const l=1-Math.pow(1-s,3);n.position.copy(this.far).lerp(this.hover,l),r=As,o=1,e.grip=0,e.bodyPitch+=ct(.5,-.32,it(.35,1,s)),a=ct(.9,.35,it(.35,1,s)),e.bodyRoll+=this.side*.3*(1-l),e.tailFan+=ct(.3,1,it(.4,1,s)),e.tailPitch-=.3*it(.4,1,s),e.fluff-=.1,s>=1&&this.go("brake",gt(t.rng,.45,.62));break}case"brake":{const l=it(.6,1,s);a=.35,n.position.copy(this.hover).lerp(this.landAt,l),n.position.y+=.015*Math.sin(t.t*31)*(1-l),n.position.x+=.008*Math.sin(t.t*23)*(1-l),r=As,o=1,e.grip=it(.8,1,s)*.5,e.bodyPitch-=ct(.32,.05,l),e.bodyShift.y+=.02*(1-l),e.tailFan+=1,e.tailPitch-=ct(.3,.1,l),s>=1&&(n.position.copy(this.landAt),this.hop.landed(),t.emit("perch",{x:this.landAt.x,push:.85,on:!0,side:gt(t.rng,-1,1)}),this.tail.flick(t,1.2),this.go("land",.5));break}case"land":{n.position.copy(this.landAt),r=s<.12?As:1-it(.12,.75,s),o=1-it(0,.14,s),e.grip=.5+.5*it(0,.25,s),e.tailFan+=.8*(1-it(0,.8,s));for(const l of["L","R"])e.wing[l].lift+=.3*Math.sin(Math.PI*it(.5,1,s));s>=1&&(this.phase="idle",this.hop.hold=!1,t.gazeLock=!1,this.shakeAt=t.t+gt(t.rng,.25,.6),t.freeze=.3);break}}if(r===As&&o>.9&&Math.random()<.3){r=1,o*=.55;const l=Math.random()<.5;for(const c of["L","R"])e.wing[c].sweep=l?gt(Math.random,.7,1):-gt(Math.random,.9,1.25),e.wing[c].raise=(l?-.1:.45)+a*.4}e.wing.L.spread=e.wing.R.spread=r,this.blur.set(o,a),this.hop.follow()}dispose(){this.blur.dispose()}}const fS=[[.44,-.5],[.52,-.25],[.38,-.65]];class pS{constructor(t,e,n){this.billReach=n,this.nextAt=gt(t.rng,this.every[0]*.6,this.every[1]*.7);const s={p:new y,n:new y,t:new y};for(const r of["L","R"])for(const[o,a]of fS){const l=e.loft.wingAt(o,a,Rn(r));e.loft.surface(l.s,l.ang,s),this.spots[r].push(s.p.clone().addScaledVector(s.n,this.tipOff))}this.coord=e.loft.bodyCoord(3.4),this.hips=e.rest.hips.worldPos.clone(),this.headRest=e.rest.head.worldPos.clone(),t.on("startle",()=>{this.active&&(t.gazeLock=!1),this.active=!1})}billReach;name="preen";auto=!1;every=[22,55];blocked=()=>!1;onDone=null;active=!1;wingOut=.44;wingTwist=.42;billDir=new y(.12,-.86,-.5).normalize();billOut=new y(.3,-.92,.05).normalize();tipOff=.03;bodyYaw=.22;bodyRoll=.1;bodyPitch=.06;headRoll=1.2;t0=0;dur=4;side="L";nextAt;coord;hips;headRest;spots={L:[],R:[]};spot=new y;seed=0;tBreak=0;order=[0,1,2];q=new _e;e=new Yn;d=new y;a=new y;b=new y;start(t,e){return this.active||this.blocked()||t.eating?!1:(this.active=!0,this.t0=t.t,this.dur=gt(t.rng,4,5),this.side=e??(t.rng()<.5?"L":"R"),this.seed=t.rng()*100,this.tBreak=gt(t.rng,.42,.58),this.order=t.rng()<.5?[0,1,2]:[2,0,1],this.spot.copy(this.spots[this.side][this.order[0]]),this.nextAt=t.t+this.dur+gt(t.rng,this.every[0],this.every[1]),!0)}update(t,e){if(!this.active&&(this.auto&&!t.quiet&&t.t>=this.nextAt&&(t.arousal<.5&&t.freeze<=0&&!t.focus&&!t.saccading?this.start(t):this.nextAt=t.t+2),!this.active))return;const n=t.t-this.t0,s=this.dur;if(n>=s||this.blocked()){this.active=!1,t.gazeLock=!1,n>=s&&this.onDone?.(t);return}t.gazeLock=!0;const r=Rn(this.side),o=(R,U)=>it(R,U,n),a=s-1.3,l=o(0,.42)*(1-o(s-.6,s-.1)),c=o(.12,.7)*(1-o(s-.95,s-.25)),h=o(.22,.8)*(1-o(a+.2,a+.9)),u=o(.5,.95)*(1-o(a+.18,a+.65)),d=.95,f=ct(d+.3,a,this.tBreak);let g=o(d-.1,d+.22)*(1-o(a,a+.24));g*=1-.75*o(f-.16,f)*(1-o(f+.08,f+.3));const v=ct(f,a,.55),p=this.order[n<f?0:n<v?1:2];this.spot.lerp(this.spots[this.side][p],1-Math.exp(-t.dt*(n<f+.3?14:7)));const m=it(.8,1,g),M=n*9.5*Math.PI*2+this.seed,b=it(-.15,.35,Math.sin(n*5.1+this.seed)+.6*Math.sin(n*2.3+this.seed*1.7)),S=Math.sin(M)*m*b,x=Math.sin(M*.5+1.3)*m*b,T=r*this.bodyYaw*c,_=r*this.bodyRoll*c,w=this.bodyPitch*c;e.bodyYaw+=T,e.bodyRoll+=_,e.bodyPitch+=w,e.bodyShift.x+=r*.012*c,e.tailYaw+=-r*.14*c,e.tailFan+=.12*c,this.e.set(e.bodyPitch,e.bodyYaw,e.bodyRoll,"YXZ"),this.q.setFromEuler(this.e);const D=R=>R.sub(this.hips).applyQuaternion(this.q).add(this.hips).add(e.bodyShift),C=e.wing[this.side];C.out+=l*this.wingOut+S*.012+.03*m*Math.sin(n*3.1+this.seed),C.twist+=l*this.wingTwist+x*.015,C.lift+=l*.05,e.wing[this.side==="L"?"R":"L"].lift+=.05*c;const I=this.d.copy(this.billDir);I.x*=r;const L=this.a.copy(this.spot).addScaledVector(I,-this.billReach);this.b.copy(this.billOut),this.b.x*=r,I.lerp(this.b,1-g).normalize(),L.addScaledVector(I,this.billReach+S*.014),L.z+=x*.006,L.y+=x*.005,D(L),I.applyQuaternion(this.q),e.reachTarget.copy(L),e.reachDir.copy(I),e.reachPin=1,e.reachRoll=r*(this.headRoll+.05*x),e.reachWeight=u,e.headYaw=ct(e.headYaw,r*100*Lt+e.bodyYaw,h),e.headPitch=ct(e.headPitch,-52*Lt,h),e.headRoll=ct(e.headRoll,r*.15,h);const F=this.b.copy(this.spot).addScaledVector(this.d.copy(this.billDir).setX(this.billDir.x*r),-this.billReach);D(F).sub(this.headRest),e.headShift.addScaledVector(F,h*.8),e.headStabil=ct(e.headStabil,.3,h),e.jaw+=(.1+.16*(.5+.5*Math.sin(M+.6)))*m*b,e.nict+=.45*m,e.lidLower+=.3*m,e.lidUpper+=.15*m,e.addLift(this.coord,.09,m*(.08+.04*Math.abs(S))),e.fluff+=.04*c}}function mS(i={}){const t=i.species??cp,e=new cn;e.name="bird";const n=L1(t);e.add(n.rootBone);const s=q1(n),{material:r,uniforms:o}=K1(),a=new ni(s.contour,r);a.name="bird.contour";const l=new ni(s.flight,r);l.name="bird.flight";const c=new ni(s.fuzz,r);c.name="bird.fuzz",c.frustumCulled=!1,c.bind(n.skeleton,new Yt),c.receiveShadow=!0;const h=Z1(o);for(const W of[a,l])W.customDepthMaterial=h,W.castShadow=!0,W.frustumCulled=!1,W.bind(n.skeleton,new Yt),W.receiveShadow=!0;const u=$1(n);e.add(a,l,c,...u.meshes);const d=new vp,f=j1(n,o),g=new Q1(t,i.seed??t.seed),v=new aS(g),p={root:e,at:null,range:[0,0],restRadius:t.legs.perchRadius},m=new hS(g,p),M=new lS(g,f,n.rest.head.worldPos.clone(),W=>$.onPick?.(W),W=>$.onSwallow?.(W),m),b=new cS(g),S=new rS(g),x=new oS(g),T=new dS(g,n,e,m,S,x),_=new Ps(g),w=t.behaviour.parrot===!0,D=new pS(g,n,f.billReach);b.blocked=()=>T.active||m.busy||D.active;const C=()=>b.blocked()||M.state!=="idle";D.blocked=()=>T.active||m.busy||g.eating||M.state!=="idle",D.onDone=W=>{_.shuffle(W),W.rng()<.5&&S.trigger(W,"puff",.35)};const I=[new tS(g),new eS,new iS(g),new sS(g),S,x,_,M,b,D,m,v,T];let L=[];const F=[],R=n.rest.head.worldPos.clone(),U=new y,B=new Yt;let k=null;const $={root:e,species:t,rig:n,pose:d,mind:g,layers:I,layer:W=>{const j=I.find(Q=>Q.name===W);if(!j)throw new Error(`no layer ${W}`);return j},plumage:o,feathers:{contour:a,flight:l,fuzz:c},headPosition:W=>n.bones.head.getWorldPosition(W),onPose:null,flee:()=>w?!1:T.start(),preen:W=>D.start(g,W),get preening(){return D.active},get fleeing(){return T.active},get away(){return T.gone},get perched(){return T.perched},sing:W=>!C()&&(b.sing(g,W),!0),stretch:()=>w&&!C()&&!T.active&&(_.stretch(g),!0),get singing(){return b.singing},lick:(W,j)=>!C()&&(b.lick(g,W,j),!0),hopTo:W=>!C()&&m.go(g,W),hopBy:W=>$.hopTo(m.x+W),get busy(){return C()},ruffle:(W,j)=>S.trigger(g,W,j),update(W){e.updateWorldMatrix(!0,!1),B.copy(e.matrixWorld).invert(),g.attention=k?U.copy(k).applyMatrix4(B):null,g.food.length=0;for(let X=0;X<(T.active||D.active?0:L.length);X++){const N=F[X]??={id:0,pos:new y,vel:new y};N.id=L[X].id,N.pos.copy(L[X].position).applyMatrix4(B),N.vel.copy(L[X].velocity).transformDirection(B).multiplyScalar(L[X].velocity.length()),g.food.push(N)}g.step(W,R),d.reset();for(const X of I)X.update(g,d);$.onPose?.(d,g),f(d);const j=w&&b.singing?1:Qe.smoothstep(g.arousal,.55,.9),Q=u.eye.pupilRest+(u.eye.pupilPinned-u.eye.pupilRest)*j;u.eye.uPupil.value+=(Q-u.eye.uPupil.value)*(1-Math.exp(-12*W))},setAttention(W){k=W},setFood(W){L=W},setPerch(W,j){p.at=W,p.range=j,m.reseat()},onPick:null,onSwallow:null,billTip(W){return W.copy(f.carry).applyMatrix4(e.matrixWorld)},startle(W=1){T.active||(v.fire(Math.min(Math.max(W,0),1)),!w&&W>=.9&&!g.quiet&&g.rng()<.22&&T.start())},dispose(){s.contour.dispose(),s.flight.dispose(),s.fuzz.dispose(),r.dispose(),h.dispose(),T.dispose(),u.dispose(),n.skeleton.dispose(),V?.()}},V=gS($);return $.update(0),$}function gS(i){if(typeof window>"u")return null;const t=new URLSearchParams(window.location.search);window.__bird=i;const e=g=>t.has(g)?Number(t.get(g)):null,n={front:[0,22,0],profile:[88,16,0],up:[10,40,8],back:[-110,10,0],three:[38,20,-4]},s=t.get("pose");s&&n[s]&&(i.mind.pinGaze=n[s]);const r=t.get("gaze");if(r){const[g=0,v=0,p=0]=r.split(",").map(Number);i.mind.pinGaze=[g,v,p]}if(t.has("quiet")&&(i.mind.quiet=!0),t.has("sing")){const g=i.onPose;let v=1;i.onPose=(p,m)=>{g?.(p,m),m.t>v&&!i.singing&&i.sing(1.8)&&(v=m.t+4)}}const o=e("jaw"),a=e("tongue"),l=e("arousal"),c=e("fluff"),h=e("spread"),u=e("fan"),d=e("blink");if(l!==null||c!==null||h!==null||u!==null||d!==null||o!==null||a!==null){const g=i.onPose;i.onPose=(v,p)=>{g?.(v,p),o!==null&&(v.jaw=o),a!==null&&(v.tongueOut=a),l!==null&&(p.arousal=p.baseline=l),c!==null&&(v.fluff=c),h!==null&&(v.wing.L.spread=v.wing.R.spread=h),u!==null&&(v.tailFan=u),d!==null&&(v.nict=v.lidLower=v.lidUpper=d)}}t.has("nofuzz")&&i.root.traverse(g=>g.name==="bird.fuzz"&&(g.visible=!1)),t.has("noflash")&&(i.plumage.uFlash.value=i.plumage.uGlint.value=0),t.has("skin")&&i.root.traverse(g=>g.name.match(/contour|flight|fuzz/)&&(g.visible=!1)),t.has("wire")&&i.root.traverse(g=>{const v=g.material;g.name==="bird.skin"&&v&&(v.wireframe=!0,v.color.set(16777215),v.emissive.set(8947848))});let f=null;return t.has("bones")&&(f=new pg(i.rig.rootBone),f.material.depthTest=!1,f.renderOrder=10,i.root.add(f)),()=>{f?.dispose()}}const Cc=[{name:"Purple-throated mountain-gem",gorget:[0,1,1],crown:[0,1,1],body:[0,1,1],sheen:[0,1,1]},{name:"Ruby-throated",gorget:[102,1.3,.78],crown:[-45,.95,.9],body:[170,.55,1.05],sheen:[0,.08,1.9]},{name:"Anna's",gorget:[55,1.05,1.1],crown:[150,1.05,1.05],body:[175,.5,1.1],sheen:[150,.4,1]},{name:"Sapphire-throated",gorget:[-28,1.3,.6],crown:[105,1,1],body:[150,.75,1],sheen:[32,1.15,1]},{name:"Fiery-throated",gorget:[116,1.25,.82],crown:[55,1,.95],body:[185,.7,.95],sheen:[-92,1.2,1.15]}],yi=[.2126,.7152,.0722];function Do([i,t,e],n=new $t){const s=Qe.degToRad(i),r=Math.cos(s),o=Math.sin(s),a=1/3,l=Math.sqrt(a),c=new $t().set(r+a*(1-r),a*(1-r)-l*o,a*(1-r)+l*o,a*(1-r)+l*o,r+a*(1-r),a*(1-r)-l*o,a*(1-r)-l*o,a*(1-r)+l*o,r+a*(1-r)),h=1-t,u=new $t().set(yi[0]*h+t,yi[1]*h,yi[2]*h,yi[0]*h,yi[1]*h+t,yi[2]*h,yi[0]*h,yi[1]*h,yi[2]*h+t);return n.multiplyMatrices(u,c).multiplyScalar(e)}function xp(i){return[Do(i.gorget),Do(i.crown),Do(i.body),Do(i.sheen)]}const hr=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,_h=`
float lensCoc(float invZ, float focus, float aperture, float maxCoc) {
  // a real lens gets shallower up close; scale that back so a macro look at
  // the eye isn't a smear (blur grows with distance from focus, not 1/f^2)
  float k = focus / 3.3;
  return min(aperture * abs(1.0 / focus - invZ) * k, maxCoc);
}
`,_S=`
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
`,vS=`
precision highp float;
uniform sampler2D tPack;
uniform int uTile; // device px
uniform float uFocus, uAperture, uMaxCoc;
${_h}
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
`,xS=`
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
`,yp=`
uniform sampler2D tPack; // rgb colour, a = 1 / view distance
uniform sampler2D tTile; // biggest CoC near here
uniform int uTile;
uniform vec2 uTexel;     // dpr / size: CoC numbers are in CSS px
uniform vec2 uSpiral[TAPS]; // (cos, sin) of i * golden angle
uniform float uFocus;
uniform float uAperture;
uniform float uMaxCoc;   // px
${_h}
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
`,yS=`
precision highp float;
${yp}
void main() {
  vec2 size = vec2(textureSize(tPack, 0));
  vec2 uv = (min(floor(gl_FragCoord.xy) * 2.0 + 1.0, size - 1.0) + 0.5) / size;
  vec4 p0 = texture2D(tPack, uv);
  float c0 = lensCoc(p0.a, uFocus, uAperture, uMaxCoc);
  gl_FragColor = vec4(gather(uv, p0, c0, gl_FragCoord.xy), c0);
}
`,MS=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tColor;
uniform sampler2D tDof;  // half size: blurred colour, a = the CoC it was blurred by
uniform float uDof;      // 0 with the lens shut
${yp}
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
`,SS=8,Ml=Ki?24:48;function bS(i,t){const e=new cs(1,1);e.type=qn;const n=new an(1,1,{type:yn,samples:t.samples,depthTexture:e,depthBuffer:!0});n.texture.colorSpace=Mn;const s=new an(1,1,{type:yn,depthBuffer:!1}),r={type:yn,depthBuffer:!1,minFilter:Ue,magFilter:Ue},o=new an(1,1,r),a=new an(1,1,r),l=new an(1,1,{type:yn,depthBuffer:!1,minFilter:Ue,magFilter:Ue}),c=new an(1,1,{samples:t.samples}),h=new Dt,u=new pe(new us(2,2));u.frustumCulled=!1;const d=new nh;d.add(u);const f=new xa(-1,1,1,-1,0,1),g={uFocus:{value:3.3},uAperture:{value:85},uMaxCoc:{value:14}},v=new xn({vertexShader:hr,fragmentShader:_S,uniforms:{tColor:{value:n.texture},tDepth:{value:e},uNear:{value:.1},uFar:{value:100},uFarCoc:{value:6},uFocus:g.uFocus,uAperture:g.uAperture},depthTest:!1,depthWrite:!1,toneMapped:!1}),p={value:16},m=new xn({vertexShader:hr,fragmentShader:vS,uniforms:{tPack:{value:s.texture},uTile:p,...g},depthTest:!1,depthWrite:!1,toneMapped:!1}),M=new xn({vertexShader:hr,fragmentShader:xS,uniforms:{tTile:{value:o.texture}},depthTest:!1,depthWrite:!1,toneMapped:!1}),b={tPack:{value:s.texture},tTile:{value:a.texture},uTile:p,uTexel:{value:new Ft},uSpiral:{value:Array.from({length:Ml},(I,L)=>new Ft(Math.cos(L*2.39996323),Math.sin(L*2.39996323)))},...g},S=new xn({vertexShader:hr,fragmentShader:yS,uniforms:b,defines:{TAPS:Ml},depthTest:!1,depthWrite:!1,toneMapped:!1}),x=new xn({vertexShader:hr,fragmentShader:MS,uniforms:{tColor:{value:n.texture},tDof:{value:l.texture},uDof:{value:1},...b,uExposure:{value:1},uWhite:{value:new y(1,1,1)},uLift:{value:new y(0,0,0)},uGamma:{value:new y(1,1,1)},uGain:{value:new y(1,1,1)},uSat:{value:1},uContrast:{value:1},uVignette:{value:.2},uGrain:{value:.025},uTime:{value:0},uRes:{value:new Ft(1,1)},tWire:{value:c.texture},uReveal:{value:1},uDpr:{value:1}},depthTest:!1,depthWrite:!1,defines:{TAPS:Ml},toneMapped:!0}),T=[[v,s],[m,o],[M,a],[S,l]];function _(I,L){if(i.setRenderTarget(n),i.render(I,L),x.uniforms.uDof.value=g.uAperture.value>0?1:0,!!x.uniforms.uDof.value)for(const[F,R]of T)u.material=F,i.setRenderTarget(R),i.render(d,f)}const w=new y(0,.9,0),D=new y;let C=3.3;return{dof:S.uniforms,grade:x.uniforms,endDrawing(){c.dispose(),x.uniforms.tWire.value=null},compile(I){const L=i.getRenderTarget();i.setRenderTarget(n);const F=I();for(const[R,U]of T)i.setRenderTarget(U),u.material=R,F.push(i.compileAsync(u,f,d));return u.material=x,i.setRenderTarget(L),Promise.all(F)},prerender(I,L){const F=i.getRenderTarget();_(I,L),u.material=x,i.setRenderTarget(F)},setToneMapping(I){i.toneMapping=I,x.needsUpdate=!0},focusOn(I){w.copy(I)},setSize(I,L,F){const R=Math.floor(I*F),U=Math.floor(L*F);n.setSize(R,U),s.setSize(R,U),p.value=Math.ceil(SS*F),o.setSize(Math.ceil(R/p.value),Math.ceil(U/p.value)),a.setSize(o.width,o.height),l.setSize(Math.ceil(R/2),Math.ceil(U/2)),c.setSize(R,U),x.uniforms.uDpr.value=F,b.uTexel.value.set(F/R,F/U),x.uniforms.uRes.value.set(R,U)},render(I,L,F,R){if(R){x.uniforms.tWire.value=c.texture,i.getClearColor(h);const U=i.getClearAlpha();i.setRenderTarget(c),i.setClearColor(0,0),i.clear(),R(),i.setClearColor(h,U)}D.copy(w).applyMatrix4(L.matrixWorldInverse),C+=(-D.z-C)*.15,g.uFocus.value=Math.max(C,.1),v.uniforms.uNear.value=L.near,v.uniforms.uFar.value=L.far,x.uniforms.uTime.value=F,x.uniforms.uDof.value=0,x.uniforms.uReveal.value>0&&_(I,L),u.material=x,i.setRenderTarget(null),i.render(d,f)}}}const wS=6,ES=.038,Ed=44;function TS(){const i=[];for(let s=0;s<6;s++){const r=s/6*Math.PI*2;i.push(0,.02,0,Math.cos(r)*.009,.017,Math.sin(r)*.009)}const t=new Me;t.setAttribute("position",new ee(i,3));const e=new Xr(.0022,.0028,.016,6);e.translate(0,.027,0);const n=new ci(1,16,12);return n.scale(.02,.021,.02),{fibres:t,beak:e,body:n}}function AS(){const i=[],t=new y(0,.03,0);for(let r=0;r<Ed;r++){const o=r/Ed*Math.PI*2+Math.sin(r*12.7)*.05,a=.35+.12*Math.sin(r*3.1),l=ES*(.9+.15*Math.sin(r*7.3)),c=new y(Math.cos(o)*l,t.y+l*a,Math.sin(o)*l);i.push(t.x,t.y,t.z,c.x,c.y,c.z);for(const h of[.6,.78,.92]){const u=t.clone().lerp(c,h),d=new y(-Math.sin(o),.3,Math.cos(o)).multiplyScalar(l*.07);i.push(u.x,u.y,u.z,u.x+d.x,u.y+d.y,u.z+d.z),i.push(u.x,u.y,u.z,u.x-d.x,u.y+d.y,u.z-d.z)}}const e=new Me;e.setAttribute("position",new ee(i,3));const n=new Xr(8e-4,.0011,.03,5);n.translate(0,.015,0);const s=new ci(1,10,8);return s.scale(.0035,.01,.0035),s.translate(0,-.007,0),{fibres:e,beak:n,body:s}}function RS(i,t="pappus"){const e=t==="fruit",n=e?TS():AS(),s=new _a({color:e?6969914:15921382,transparent:!0,opacity:e?.9:.75,depthWrite:!1}),r=new mn({color:e?5917226:13617332,roughness:.7}),o=new mn({color:e?1839906:3811868,roughness:e?.42:.8}),a=[],l=new y,c=[],h=new y,u=new y,d=new y(0,1,0),f=new _e;let g=1;function v(m,M=null){if(a.filter(x=>x.state==="drift").length>=wS){const x=a.find(T=>T.state==="drift");x&&p(x)}const b=new cn,S=new la(n.fibres,s);b.add(S,new pe(n.beak,r),new pe(n.body,o)),b.position.copy(m),b.rotation.set((Math.random()-.5)*.4,Math.random()*6.28,(Math.random()-.5)*.4),b.scale.setScalar(.01),i.add(b),a.push({id:g++,obj:b,fibres:S,position:b.position,velocity:new y,age:0,spin:(Math.random()-.5)*.8,phase:Math.random()*100,state:"drift",carryT:0,swallowAt:-1,wind:M})}function p(m){m.state="gone",i.remove(m.obj)}return{spawn:v,warm:[new la(n.fibres,s),new pe(n.beak,r),new pe(n.body,o)],pick(m){const M=a.find(b=>b.id===m&&b.state==="drift");M&&(M.state="carried",M.carryT=0,M.swallowAt=-1)},swallowed(m){const M=a.find(b=>b.id===m&&b.state==="carried");M&&M.swallowAt<0&&(M.swallowAt=M.carryT)},food(){c.length=0;for(const m of a)m.state==="drift"&&c.push(m);return c},update(m,M,b,S){for(const x of a)if(x.state!=="gone"){if(x.age+=m,x.state==="drift"){const T=M*.6+x.phase,_=l.set(Math.sin(T*.9)*.05+Math.sin(T*2.3)*.02,Math.sin(T*1.7)*.02-.035,Math.cos(T*.7)*.03);x.wind&&_.add(x.wind),x.velocity.lerp(_,1-Math.exp(-m*1.5)),x.obj.position.addScaledVector(x.velocity,m),x.obj.rotation.y+=x.spin*m,x.obj.rotation.x=Math.sin(T*1.3)*.12,x.obj.rotation.z=Math.cos(T*1.1)*.12,x.obj.scale.setScalar(Math.min(1,x.obj.scale.x+m*4)),(x.obj.position.y<-1.4||x.age>(x.wind?90:45)||Math.abs(x.obj.position.x)>3.2)&&p(x)}else if(x.state==="carried"){x.carryT+=m,b&&x.obj.position.copy(b(h)),S&&(u.copy(S).sub(x.obj.position).normalize(),x.obj.quaternion.slerp(f.setFromUnitVectors(d,u),1-Math.exp(-m*30)));const T=Math.min(1,x.carryT/.07),_=Math.max(.2,1-x.carryT*1.6);x.fibres.scale.set(1-.85*T,1+.6*T,1-.85*T),x.obj.scale.setScalar(_),x.swallowAt>=0&&(x.obj.scale.setScalar(Math.max(0,.2*(1-(x.carryT-x.swallowAt)*10))),x.carryT-x.swallowAt>.1&&p(x)),(x.carryT>3||!b)&&p(x)}}for(let x=a.length-1;x>=0;x--)a[x].state==="gone"&&a.splice(x,1)}}}const Td=1e6;function CS(i,t,e=!0){const n=new ci(1,8,6);n.scale(.004,.004,.011);const s=new us(.016,.007);s.translate(.008,0,0);const r=new mn({color:1709586,roughness:.6}),o=new Xn({color:14542044,transparent:!0,opacity:.2,side:Be,depthWrite:!1}),a=[],l=[],c=new y,h=new y,u=new y;let d=Td,f=10+Math.random()*3,g=!1;function v(m,M=!1){const b=t(),S=m?m.clone():b.clone().add(new y((Math.random()-.5)*.9,.05+Math.random()*.3,.45+Math.random()*.35)),x=S.clone().add(new y(Math.sign(Math.random()-.5)*2.2,.6,-.4)),T=new cn,_=new pe(n,r),w=[new pe(s,o),new pe(s,o)];w[1].rotation.y=Math.PI,T.add(_,...w),T.position.copy(x),i.add(T),a.push({id:d++,obj:T,wings:w,position:T.position,velocity:new y,home:S,goal:S.clone(),age:0,life:M?16:6+Math.random()*8,dartAt:.8,phase:Math.random()*100,state:"fly",carryT:0,swallowAt:-1,dodgedUntil:0,tame:M,yaw:0})}function p(m){m.state="gone",i.remove(m.obj)}return{spawn:v,warm:[new pe(n,r),new pe(s,o)],owns:m=>m>=Td,strike(){g=!0},pick(m){const M=a.find(b=>b.id===m&&(b.state==="fly"||b.state==="leave"));M&&(M.state="carried",M.carryT=0)},swallowed(m){const M=a.find(b=>b.id===m&&b.state==="carried");M&&M.swallowAt<0&&(M.swallowAt=M.carryT)},food(){l.length=0;for(const m of a)m.state==="fly"&&m.age>m.dodgedUntil&&l.push(m);return l},update(m,M,b){const S=g;g=!1,e&&M>f&&a.length===0&&(v(),f=M+20+Math.random()*20);for(const x of a){if(x.state==="gone")continue;if(x.age+=m,x.state==="carried"){x.carryT+=m,b&&x.obj.position.copy(b(c));for(const D of x.wings)D.visible=!1;const w=x.swallowAt>=0?Math.max(0,1-(x.carryT-x.swallowAt)*10):1;x.obj.scale.setScalar(w),(x.swallowAt>=0&&w<=0||x.carryT>3||!b)&&p(x);continue}if(x.state==="fly"){if(x.age>x.life)x.state="leave",x.goal.copy(x.position).add(new y(Math.sign(x.position.x-x.home.x||1)*3,1.2,-.5));else if(x.age>x.dartAt){const w=x.tame?.15:1;x.goal.copy(x.home).add(new y((Math.random()-.5)*.4*w,(Math.random()-.5)*.25*w,(Math.random()-.5)*.3*w)),x.dartAt=x.age+.6+Math.random()*1.8}}x.state==="fly"&&!x.tame&&x.age>x.dodgedUntil&&S&&b&&b(c).distanceTo(x.position)<.7&&Math.random()<.75&&(x.dodgedUntil=x.age+1.5,h.copy(x.position).sub(c).normalize(),x.velocity.addScaledVector(h,2.2),x.goal.copy(x.position).addScaledVector(h,.45),x.dartAt=x.age+.8);const T=M*3+x.phase;if(h.set(Math.sin(T*5.1)+Math.sin(T*11.7)*.5,Math.sin(T*6.3+1)+Math.sin(T*13.1)*.4,Math.sin(T*4.7+2)).multiplyScalar(.08),h.addScaledVector(u.copy(x.goal).sub(x.position),x.state==="leave"?2.5:6),x.velocity.lerp(h,1-Math.exp(-m*8)),x.obj.position.addScaledVector(x.velocity,m),x.velocity.x*x.velocity.x+x.velocity.z*x.velocity.z>.01){const w=Math.atan2(x.velocity.x,x.velocity.z);x.yaw=sp(x.yaw,w,4,m)}x.obj.rotation.set(Qe.clamp(-x.velocity.y*.6,-.35,.35),x.yaw,0,"YXZ");const _=Math.sin(M*190+x.phase)*.9;x.wings[0].rotation.z=_,x.wings[1].rotation.z=-_,x.state==="leave"&&x.position.distanceTo(x.home)>2.5&&p(x)}for(let x=a.length-1;x>=0;x--)a[x].state==="gone"&&a.splice(x,1)}}}const ti=40,Ad=17;function PS(){const i=document.createElement("canvas");i.width=64,i.height=96;const t=i.getContext("2d");t.strokeStyle="#fff",t.lineCap="round";let e=7;const n=()=>(e=e*16807%2147483647)/2147483647,s=32;t.globalAlpha=.9,t.lineWidth=1.6,t.beginPath(),t.moveTo(s,92),t.quadraticCurveTo(s+2,50,s-1,14),t.stroke();for(let o=0;o<70;o++){const a=n(),l=90-a*76,c=s+(1-a)*1.5,h=n()<.5?-1:1,u=(10+n()*16)*(.55+.8*Math.sin(Math.PI*(.15+a*.8))),d=h*(.5+n()*.7);t.globalAlpha=.25+n()*.45,t.lineWidth=.7+n()*.7,t.beginPath(),t.moveTo(c,l),t.quadraticCurveTo(c+Math.sin(d)*u*.5,l-Math.cos(d)*u*.3,c+Math.sin(d)*u,l-Math.cos(d)*u*(.4+n()*.5)+(n()-.5)*6),t.stroke()}const r=new wm(i);return r.colorSpace=We,r}function LS(i){const{scene:t,camera:e,renderer:n,center:s}=i,r=new cn;r.name="ambient",t.add(r);const o=new Float32Array(ti*3),a=new Float32Array(ti),l=new Float32Array(ti),c=[],h=new Float32Array(ti),u=new Float32Array(ti).fill(-1),d=new Float32Array(ti);for(let X=0;X<ti;X++)l[X]=Math.random(),c.push(new y);const f=new Me;f.setAttribute("position",new Ce(o,3).setUsage(Yh)),f.setAttribute("aSize",new Ce(a,1).setUsage(Yh)),f.setAttribute("aSeed",new Ce(l,1));const g=new xn({uniforms:{uScale:{value:500},uMinPx:{value:1.2},uTime:{value:0},uFocus:{value:3.3},uAperture:{value:0},uMaxCoc:{value:14},uDpr:{value:1}},vertexShader:`
      attribute float aSize;
      attribute float aSeed;
      uniform float uScale, uMinPx, uTime, uFocus, uAperture, uMaxCoc, uDpr;
      varying float vGlint, vCov;
      ${_h}
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
      }`,blending:Nl,transparent:!0}),v=new Nf(f,g);v.frustumCulled=!1,r.add(v);function p(X,N,Y,G){N?o.set([N.x,N.y,N.z],X*3):(o[X*3]=s.x+(Math.random()-.5)*3.6,o[X*3+1]=s.y+(Math.random()-.45)*2,o[X*3+2]=s.z-1.7+Math.random()*3.1),c[X].copy(Y??new y),h[X]=0,u[X]=G,d[X]=Math.random()<.85?.0025+Math.random()*.003:.006+Math.random()*.005}const m=()=>{for(let X=0;X<ti;X++)if(u[X]<0)return X;return-1},M=new us(.04,.06);M.translate(0,.012,0);const b=new mn({color:12893896,map:PS(),roughness:1,side:Be,alphaToCoverage:!0,alphaTest:.04}),S=[],x=new cn,T=new pe(new ci(1,8,6).scale(.008,.0075,.02),new mn({color:1380879,roughness:.45})),_=new ah(.014,10).scale(1,.55,1).translate(.014,0,0),w=new Xn({color:14673632,transparent:!0,opacity:.22,side:Be,depthWrite:!1}),D=[new pe(_,w),new pe(_,w)];for(const X of D)X.rotation.order="ZXY",X.rotation.x=-Math.PI/2,X.position.y=.004;D[1].scale.x=-1,x.add(T,...D),x.visible=!1,r.add(x);let C=null,I=0,L=2,F=25+Math.random()*40;const R=new y;let U=0;function B(X=!1){const N=Math.random()<.5?-1:1,Y=Math.random(),G=X?.25+Math.random()*.2:Y<.4?-.7+Math.random()*.5:Y<.8?-.15+Math.random()*.55:.8+Math.random()*.6,st=X?s.y+.45:s.y+(Math.random()-.4)*1,Z=[],ut=6;for(let mt=0;mt<ut;mt++){const at=mt/(ut-1);Z.push(new y(s.x+N*(-2.6+5.2*at),st+(Math.random()-.5)*.35+Math.sin(at*5)*.08,G+(Math.random()-.5)*.4))}C=new Mc(Z),U=Math.atan2(Z[1].x-Z[0].x,Z[1].z-Z[0].z),I=0,L=2.2+Math.random()*1.4,x.visible=!0,x.position.copy(Z[0]),R.copy(Z[0])}let k=15+Math.random()*25;function $(){if(!i.passSeed)return;const X=Math.random()<.5?-1:1,N=new y(s.x-X*2.3,s.y+.5+Math.random()*.7,s.z-1.3+Math.random()*2.4);i.passSeed(N,new y(X*(.07+Math.random()*.05),.012,(Math.random()-.5)*.02))}const V=new y,W=new Ft,j=new y;let Q=0;for(let X=0;X<Ad;X++)p(X,null,null,8+Math.random()*18),h[X]=Math.random()*u[X];return{group:r,warm:[new pe(M,b)],shed(X,N,Y){const G=2+Math.floor(Math.random()*2);for(let Z=0;Z<G;Z++){const ut=m();if(ut<0)break;j.copy(N).multiplyScalar(.06+Math.random()*.08),j.x+=(Math.random()-.5)*.08,j.y+=.02+Math.random()*.06,j.z+=(Math.random()-.5)*.08,p(ut,new y(X.x+(Math.random()-.5)*.08,X.y+(Math.random()-.5)*.12,X.z+(Math.random()-.5)*.08),j,4+Math.random()*5),d[ut]*=.8}if(!Y)return;const st=new pe(M,b);st.position.copy(X),st.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),st.scale.setScalar(.01),r.add(st),S.push({obj:st,vel:N.clone().multiplyScalar(.3).add(new y(0,.1,0)),away:N.clone().multiplyScalar(.06),age:0,life:16+Math.random()*10,fall:.045+Math.random()*.03,phase:Math.random()*100,spin:(Math.random()-.5)*1.5})},flyBy:B,flyNear(X,N){return x.visible&&x.position.distanceTo(X)<N?x.position:null},update(X){Q+=X,g.uniforms.uTime.value=Q,n.getDrawingBufferSize(W),g.uniforms.uScale.value=W.y/(2*Math.tan(Qe.degToRad(e.fov)/2)),g.uniforms.uMinPx.value=1.3*n.getPixelRatio(),g.uniforms.uDpr.value=n.getPixelRatio();const N=i.dof?.();N&&(g.uniforms.uFocus.value=N.uFocus.value,g.uniforms.uAperture.value=N.uAperture.value,g.uniforms.uMaxCoc.value=N.uMaxCoc.value),V.set(Math.sin(Q*.07)*.025+Math.sin(Q*.19+1)*.01,Math.sin(Q*.11)*.006,Math.cos(Q*.05)*.015);let Y=0;for(let G=0;G<ti;G++)u[G]>=0&&Y++;for(let G=0;G<ti;G++){if(u[G]<0){a[G]=0,Y<Ad&&Math.random()<X*2&&(p(G,null,null,10+Math.random()*18),Y++);continue}if(h[G]+=X,h[G]>u[G]){u[G]=-1,a[G]=0;continue}const st=l[G]*50,Z=Q*.4+st;j.set(Math.sin(Z*1.3)*.012,Math.sin(Z*.9+2)*.008-.004,Math.cos(Z*1.1)*.01).add(V),c[G].lerp(j,1-Math.exp(-X*.8)),o[G*3]+=c[G].x*X,o[G*3+1]+=c[G].y*X,o[G*3+2]+=c[G].z*X;const ut=h[G]/u[G];a[G]=d[G]*Math.min(1,ut*6,(1-ut)*6)}f.attributes.position.needsUpdate=!0,f.attributes.aSize.needsUpdate=!0;for(const G of S){G.age+=X;const st=Q+G.phase;j.set(Math.sin(st*1.4)*.05,-G.fall+Math.sin(st*2.8)*.012,Math.cos(st*1.1)*.03).add(V).addScaledVector(G.away,Math.exp(-G.age*.25)),G.vel.lerp(j,1-Math.exp(-X*1.2)),G.obj.position.addScaledVector(G.vel,X),G.obj.rotation.y+=G.spin*X,G.obj.rotation.z=Math.sin(st*1.4)*.6,G.obj.rotation.x=.3+Math.cos(st*1.1)*.35,G.obj.scale.setScalar(Math.max(0,Math.min(1,G.age*3,(G.life-G.age)*.5)))}for(let G=S.length-1;G>=0;G--)S[G].age>S[G].life&&(r.remove(S[G].obj),S.splice(G,1));if(i.flies!==!1&&X>0&&Q>F&&!x.visible&&(B(),F=Q+50+Math.random()*70),x.visible&&C)if(I+=X/L,I>=1)x.visible=!1,C=null;else{R.copy(x.position),C.getPointAt(Qe.clamp(I+.8*Math.sin(Math.PI*2*I)/(Math.PI*2),0,1),x.position),x.position.x+=Math.sin(Q*37)*.006,x.position.y+=Math.sin(Q*29+1)*.008;const G=x.position.x-R.x,st=x.position.z-R.z;if(G*G+st*st>1e-8){const ut=Math.atan2(G,st);U=sp(U,ut,6,X)}x.rotation.set(Qe.clamp(-(x.position.y-R.y)/Math.max(X,.001)*.4,-.3,.3),U,0,"YXZ");const Z=Math.sin(Q*210)*.7;D[0].rotation.z=Z,D[1].rotation.z=-Z}X>0&&Q>k&&($(),k=Q+35+Math.random()*45)}}}const Gn=i=>`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i}</svg>`,En={bird:Gn('<path d="M18.1 17.1A6.2 6.2 0 1 0 8.9 9.4C8.5 10.5 7.2 11.4 3.3 12.4l5.1-.3"/><circle cx="14" cy="11" r="1.9" fill="currentColor" stroke="none"/><circle cx="13.4" cy="10.4" r=".55" fill="#1f3a1c" stroke="none"/>'),parrot:Gn('<path d="M6.5 20.5V11.4a6.6 6.6 0 0 1 12.7-2.5"/><path d="M19.2 8.9c2 .5 3 2.2 2.6 4.6-1.3-.8-2.6-1-4-.6"/><path d="M17.9 12.9c-.5 3.2-2.4 5.7-5.4 7.6"/><circle cx="14.3" cy="9.7" r="1.7"/><circle cx="14.3" cy="9.7" r=".6" fill="currentColor" stroke="none"/>'),fruit:Gn('<circle cx="12" cy="14.5" r="5.6"/><path d="M12 8.9V5.6"/><path d="M12 5.8c1.6-1.6 3.4-1.9 5.2-1"/><path d="M9.6 12.4c.5-.9 1.2-1.4 2.1-1.6" stroke-width="1.2"/>'),food:Gn('<path d="M12 10.5L3.8 8.3M12 10.5L5.5 5.0M12 10.5L8.4 2.8M12 10.5L12.0 2.0M12 10.5L15.6 2.8M12 10.5L18.5 5.0M12 10.5L20.2 8.3" stroke-width="1.1"/><path d="M12 10.5v7"/><path d="M12 17.3c-.9 0-1.3 1-1.1 2.1L12 22l1.1-2.6c.2-1.1-.2-2.1-1.1-2.1z" fill="currentColor"/>'),gnat:Gn('<ellipse cx="12" cy="14.5" rx="3" ry="5"/><circle cx="12" cy="7.6" r="1.9"/><path d="M9.2 11.5C6 8.5 3.5 9.5 3.6 11.8c.1 1.6 2.7 1.8 5.6.9M14.8 11.5c3.2-3 5.7-2 5.6.3-.1 1.6-2.7 1.8-5.6.9M10.6 6 9 3.8M13.4 6 15 3.8"/>'),sound:Gn('<path d="M4 9.5v5h3.5L12 18V6L7.5 9.5H4z"/><path d="M15.5 9a4.5 4.5 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11"/>'),sing:Gn('<path d="M9 18V5.5l10-2V16"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/><path d="M9 9.5l10-2"/>'),ruffle:Gn('<path d="M19.5 4.5C13 5 7.5 9.5 6 17l-1.5 2.5"/><path d="M19.5 4.5c-.5 6-4.5 11-12.5 12.5"/><path d="M9.5 13.5l3.5-3.5M8.5 11h3.5M11.5 8.5h3"/>'),fly:Gn('<path d="M11 16C9.5 10.5 6.5 6.5 2 5c.3 2.6 1.1 4.4 2.4 5.6-.9.2-1.4.2-2 .1 1.2 2.6 2.9 4 5.3 4.4-.6.4-1.2.6-1.9.7C7.6 16.6 9.1 16.9 11 16z"/><path d="M13 16c1.5-5.5 4.5-9.5 9-11-.3 2.6-1.1 4.4-2.4 5.6.9.2 1.4.2 2 .1-1.2 2.6-2.9 4-5.3 4.4.6.4 1.2.6 1.9.7-1.8.8-3.3 1.1-5.2.2z"/>'),palette:Gn('<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.6-1.6 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.7-1.6 1.6-1.6H16a5 5 0 0 0 5-5C21 6.4 17 3 12 3z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10" cy="7" r="1.2"/><circle cx="15" cy="7.2" r="1.2"/>'),settings:Gn('<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>')},IS=220;function DS(i,t=En.bird){const e=document.createElement("div");e.className="actions";const n=document.createElement("button");n.type="button",n.className="act-main",n.setAttribute("aria-label","Things to do"),n.setAttribute("aria-expanded","false"),n.innerHTML=`${t}<span class="x" aria-hidden="true"></span>`;const s=document.createElement("div");s.className="act-menu",s.setAttribute("role","menu");const r=i.map((m,M)=>{const b=document.createElement("button");return b.type="button",b.className="act-item",b.dataset.id=m.id,b.setAttribute("role","menuitem"),b.setAttribute("aria-label",m.label),b.style.setProperty("--i",String(i.length-1-M)),b.innerHTML=`${m.icon}<span class="act-label">${m.label}${m.key?`<kbd>${m.key}</kbd>`:""}</span>`,s.append(b),b});e.append(s,n),document.body.append(e);let o=!1;function a(m){o=m,e.classList.toggle("open",m),n.setAttribute("aria-expanded",String(m)),m||c(null)}let l=null;function c(m){l?.classList.remove("lit"),l=m,l?.classList.add("lit")}function h(m){const M=i[r.indexOf(m)];m.classList.remove("fired"),m.offsetWidth,m.classList.add("fired"),M.run()}let u=0,d=!1,f=!1;const g=(m,M)=>{const b=document.elementFromPoint(m,M)?.closest(".act-item");return b&&r.includes(b)?b:null};n.addEventListener("pointerdown",m=>{m.button===0&&(m.stopPropagation(),f=!0,d=!1,n.setPointerCapture(m.pointerId),clearTimeout(u),o||(u=window.setTimeout(()=>{d=!0,a(!0),navigator.vibrate?.(8)},IS)))}),n.addEventListener("pointermove",m=>{d&&c(g(m.clientX,m.clientY))});const v=m=>{if(f){if(f=!1,clearTimeout(u),m.stopPropagation(),d){d=!1;const M=g(m.clientX,m.clientY);M&&h(M),a(!1);return}a(!o)}};n.addEventListener("pointerup",v),n.addEventListener("pointercancel",()=>{f=d=!1,clearTimeout(u)}),n.addEventListener("click",m=>{m.detail===0&&a(!o)});for(const m of r)m.addEventListener("pointerdown",M=>M.stopPropagation()),m.addEventListener("pointerup",M=>M.stopPropagation()),m.addEventListener("click",()=>h(m)),m.addEventListener("pointerenter",()=>c(m)),m.addEventListener("pointerleave",()=>l===m&&c(null));let p=-1;return window.addEventListener("pointerdown",m=>{o&&!d&&!e.contains(m.target)?(a(!1),p=m.pointerId):p=-1}),window.addEventListener("keydown",m=>{m.key==="Escape"&&a(!1)}),{root:e,setOpen:a,isOpen:()=>o,swallows:m=>m.pointerId===p}}const Mp="iguaca-settings";function NS(){try{return JSON.parse(localStorage.getItem(Mp)??"{}")}catch{return{}}}function Rd(i){try{localStorage.setItem(Mp,JSON.stringify(i))}catch{}}function US(i,t={},e=!0){const n=NS(),s={},r=document.createElement("button");r.type="button",r.className="set-btn",r.setAttribute("aria-label","Settings"),r.setAttribute("aria-expanded","false"),r.innerHTML=En.settings;const o=document.createElement("div");o.className="settings",o.hidden=!0,o.setAttribute("role","dialog"),o.setAttribute("aria-label","Settings");const a=document.createElement("div");a.className="set-head",a.innerHTML="<b>Settings</b>";const l=document.createElement("button");l.type="button",l.className="set-close",l.setAttribute("aria-label","Close settings"),l.innerHTML='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M3 3l8 8M11 3l-8 8"/></svg>',l.addEventListener("click",()=>v(!1)),a.append(l);const c=document.createElement("div");c.className="set-body",o.append(a,c);let h=null;function u(p,m,M,b,S,x,T,_){const w=p in n&&M(n[p])?n[p]:m,D=p in t?t[p]:w;s[p]=w,T(D),_(D),b.addEventListener(S,()=>{const C=x();s[p]=C,_(C),Rd(s)})}for(const p of i){if(p.kind!=="action"&&(h=null),p.kind==="heading"){const b=document.createElement("h5");b.textContent=p.label,c.append(b);continue}if(p.kind==="action"){const b=document.createElement("button");if(b.type="button",b.className="act",b.textContent=p.label,p.key){const S=document.createElement("kbd");S.textContent=p.key,b.append(S)}b.addEventListener("click",()=>p.run()),h||(h=document.createElement("div"),h.className="acts",c.append(h)),h.append(b);continue}const m=document.createElement("label");m.className=`row ${p.kind}`;const M=document.createElement("span");if(M.textContent=p.label,p.kind==="select"){const b=document.createElement("select");for(const S of p.options)b.append(new Option(S,S));u(p.key,p.value,S=>typeof S=="string"&&p.options.includes(S),b,"change",()=>b.value,S=>b.value=S,p.set),m.append(M,b)}else{const b=document.createElement("input");if(p.kind==="toggle")b.type="checkbox",u(p.key,p.value,S=>typeof S=="boolean",b,"change",()=>b.checked,S=>b.checked=S,p.set);else{b.type="range",b.min=String(p.min),b.max=String(p.max),b.step=String(p.step);const S=document.createElement("output"),x=Math.max(0,-Math.floor(Math.log10(p.step)+1e-9)),T=_=>{S.textContent=_.toFixed(x),b.style.setProperty("--p",`${(_-p.min)/(p.max-p.min)*100}%`)};u(p.key,p.value,_=>typeof _=="number",b,"input",()=>Number(b.value),_=>b.value=String(_),_=>(T(_),p.set(_))),M.append(S)}m.append(M,b)}c.append(m)}const d=document.createElement("button");d.type="button",d.className="reset",d.textContent="Reset to defaults",d.addEventListener("click",()=>{Rd({}),location.reload()});const f=c.querySelectorAll(".row"),g=f[f.length-1];g?g.after(d):c.prepend(d);function v(p){o.hidden=!p,r.classList.toggle("on",p),r.setAttribute("aria-expanded",String(p))}return r.addEventListener("pointerdown",p=>p.stopPropagation()),r.addEventListener("click",()=>v(o.hidden)),o.addEventListener("pointerdown",p=>p.stopPropagation()),o.addEventListener("pointerup",p=>p.stopPropagation()),window.addEventListener("keydown",p=>{p.key==="Escape"&&v(!1)}),e&&document.body.append(r,o),{button:r,panel:o,open:v,isOpen:()=>!o.hidden}}const FS=2.5;function OS(i){let t=null,e=null,n=null,s=0,r=0,o=!1,a=null,l=null;const c=[];let h=-1;const u=[];async function d(b){if(!t)return null;try{const S=await fetch(i+b);return S.ok?await t.decodeAudioData(await S.arrayBuffer()):null}catch{return null}}async function f(){let b={};try{const T=await fetch(`${i}audio.json`);T.ok&&(b=await T.json())}catch{}const[S,...x]=await Promise.all([b.forest?.length?d(b.forest[0]):null,...(b.calls??[]).map(d)]);l=S;for(const T of x)T&&c.push(T)}function g(){t=new AudioContext,e=t.createGain(),e.gain.value=0,e.connect(t.destination),n=t.createGain(),n.connect(e);const b=t.sampleRate*3,S=t.createBuffer(1,b,t.sampleRate),x=S.getChannelData(0);let T=0;for(let C=0;C<b;C++)T=T*.97+(Math.random()*2-1)*.03,x[C]=T*3+(Math.random()*2-1)*.25;const _=t.createBufferSource();_.buffer=S,_.loop=!0;const w=t.createBiquadFilter();w.type="bandpass",w.frequency.value=2600,w.Q.value=.4;const D=t.createGain();D.gain.value=.035,_.connect(w).connect(D).connect(n),_.start();for(let C=0;C<7;C++){const I=C/6;u.push({pitch:.9+Math.random()*.22,pace:.95+Math.random()*.5,pan:(Math.random()*2-1)*.9,gain:.22*(1-.75*I)*(.7+Math.random()*.5),next:t.currentTime+.3+Math.random()*1.5})}}function v(b,S,x,T,_,w){if(!t)return;const D=t.createOscillator();D.type="sine",D.frequency.setValueAtTime(x,b),D.frequency.exponentialRampToValueAtTime(T,b+S);const C=t.createGain();C.gain.setValueAtTime(0,b),C.gain.linearRampToValueAtTime(_,b+.012),C.gain.setValueAtTime(_,b+S*.6),C.gain.exponentialRampToValueAtTime(1e-4,b+S),D.connect(C).connect(w),D.start(b),D.stop(b+S+.02)}function p(){if(!t||!n||l)return;const b=t.currentTime+.5;for(const S of u)for(;S.next<b;){const x=t.createStereoPanner();x.pan.value=S.pan,x.connect(n);const T=Math.max(S.next,t.currentTime+.01);v(T,.09,1180*S.pitch,1220*S.pitch,S.gain*.7,x),v(T+.21,.16,1900*S.pitch,2300*S.pitch,S.gain,x),S.next+=S.pace*(.92+Math.random()*.16)*(Math.random()<.12?2:1)}}function m(){if(!t||!e||!l||!o)return;const b=Math.min(FS,l.duration/4),S=t.currentTime+.05,x=t.createBufferSource();x.buffer=l;const T=t.createGain();T.gain.setValueAtTime(0,S),T.gain.linearRampToValueAtTime(.8,S+b),T.gain.setValueAtTime(.8,S+l.duration-b),T.gain.linearRampToValueAtTime(0,S+l.duration),x.connect(T).connect(e),x.start(S),x.stop(S+l.duration+.05),r=window.setTimeout(m,(l.duration-b)*1e3)}function M(){if(!(!t||!n))if(window.clearInterval(s),window.clearTimeout(r),l)n.gain.setTargetAtTime(0,t.currentTime,.4),m();else{for(const b of u)b.next=Math.max(b.next,t.currentTime+.2+Math.random()*1.2);p(),s=window.setInterval(p,200)}}return{get on(){return o},get loaded(){return{forest:l!==null,calls:c.length}},toggle(){if(t||g(),!t||!e)return!1;o=!o;const b=t.currentTime;return e.gain.cancelScheduledValues(b),e.gain.setValueAtTime(e.gain.value,b),e.gain.linearRampToValueAtTime(o?.6:0,b+(o?1.2:.4)),window.clearInterval(s),window.clearTimeout(r),o&&(t.resume(),M(),a??=f().then(()=>{o&&M()}),o)},call(){if(!t||!e||!o||c.length===0)return!1;let b=Math.floor(Math.random()*c.length);c.length>1&&b===h&&(b=(b+1)%c.length),h=b;const S=t.createBufferSource();S.buffer=c[b],S.playbackRate.value=.96+Math.random()*.08;const x=t.createGain();return x.gain.value=1.2,S.connect(x).connect(e),S.start(),!0}}}const Un=document.querySelector("#c"),Ti=new URLSearchParams(location.search),Hr=!Ti.has("nopost"),ke=Ti.has("gem"),Oe=new cM({canvas:Un,antialias:!Hr,powerPreference:"high-performance"}),Sp=()=>Math.min(window.devicePixelRatio,Ki?1.5:2);Oe.setPixelRatio(Sp());Oe.outputColorSpace=We;Oe.toneMappingExposure=1;Oe.shadowMap.enabled=!0;Oe.shadowMap.type=Sr;const Pe=new nh,te=new vn(30,1,.02,120);te.position.set(1.55,.85,3);const Le=new uM(te,Un);Le.target.set(Kn-.04,.5,0);Le.enableDamping=!0;Le.dampingFactor=.06;Le.minDistance=1.4;Le.maxDistance=4.4;Le.minPolarAngle=1.2;Le.maxPolarAngle=1.78;Le.minAzimuthAngle=-.45;Le.maxAzimuthAngle=.85;Le.enablePan=!1;Le.rotateSpeed=.6;Le.touches.ONE=null;const ua=rp(ke?0:1);{const i=new nh,t=rp(ke?0:1);t.material.uniforms.uEnv.value=1,i.add(t.mesh);const e=new zr(Oe);Pe.environment=e.fromScene(i,.02).texture,Pe.environmentIntensity=1.6,e.dispose()}Pe.add(ua.mesh);const Gr=g1();Pe.add(Gr.group);const Fn=A1();Fn.use(Gr.group);const Cd=document.querySelector(".loading-label span");let bi=0,ba=!1,Pc=!0,Ks=Ti.has("drawing");function vh(i){Ks=i,document.body.classList.add("snap"),document.body.classList.toggle("drawing",i),requestAnimationFrame(()=>document.body.classList.remove("snap")),ba&&!Pc&&(bi=i?0:1)}vh(Ks);function bp(i=!1){i&&(bi=1),ba=!0,document.body.classList.remove("loading")}const No=()=>new Promise(i=>requestAnimationFrame(i));async function kS(){const i=Hr?fn.compile:t=>Promise.all(t());try{await i(()=>[Oe.compileAsync(Pe,te)]),await No(),await i(()=>[Oe.compileAsync(Zo,te,Pe)]),await No();for(const t of wp([Pe,Zo]))Oe.properties.get(t).programs?.forEach(n=>n.getUniforms());for(const t of BS([Pe,Zo]))await No(),Oe.initTexture(t);await No(),Hr&&fn.prerender(Pe,te)}catch{}bp()}function wp(i){const t=new Set;for(const e of i)e.traverse(n=>{const s=n.material;if(s)for(const r of Array.isArray(s)?s:[s])t.add(r)});return t}function BS(i){const t=new Set;for(const e of wp(i))for(const n of Object.values(e))n?.isTexture&&!n.isRenderTargetTexture&&t.add(n);return t}const zS=Ti.has("procbranch")?Promise.resolve():_1("./branch.glb",i=>{Cd&&i.lengthComputable&&(Cd.textContent=`${Math.min(100,Math.round(i.loaded/i.total*100))}%`)}).then(i=>{Pe.remove(Gr.group),jS(Gr.group),Pe.add(i.group),Fn.use(i.group),Ip(i.group),Oc=i.fuzz,Bp()}).catch(()=>{}),Ko=new Zm(15659750,3815462,.6);Pe.add(Ko);const Ke=new hh(16774374,2.2);Ke.position.set(-1.3,3.6,1.5);Ke.castShadow=!0;Ke.shadow.mapSize.set(2048,2048);Ke.shadow.camera.left=Ke.shadow.camera.bottom=-1.2;Ke.shadow.camera.right=Ke.shadow.camera.top=1.2;Ke.shadow.camera.near=.5;Ke.shadow.camera.far=8;Ke.shadow.bias=-.0015;Ke.shadow.normalBias=.025;Ke.shadow.radius=4;Ke.target.position.set(0,.5,0);Ki&&(Ke.shadow.mapSize.set(1024,1024),Object.assign(Ke.shadow.camera,{left:-.85,right:1.42,bottom:-1,top:1.15}));Pe.add(Ke,Ke.target);const Hs=new hh(15923944,1.4);Hs.position.set(1.5,1.8,-2.5);Hs.target.position.set(0,.5,0);Pe.add(Hs,Hs.target);const Rt=mS(ke?{species:u1}:{});ke||(Ko.color.set(15003370),Ko.groundColor.set(2898474),Ko.intensity=.95,Ke.color.set(15988462),Ke.intensity=1.55,Hs.color.set(14873070),Hs.intensity=1);const xh=OS("./audio/");let Pd=!1;window.__sound=xh;Rt.root.position.x=Kn;Rt.layer("hop").home=Kn;const yh=new cn;yh.add(Rt.root);Pe.add(yh);let Sl=1;const Ld=new y;Rt.mind.on("perch",i=>{Fn.push(i.x,i.push,i.side),Fn.load(i.on?i.x:null)});Fn.load(Kn);Fn.settle();const Lc=new y,bl=new y;let wl=!1;function HS(i){(Rt.perched||!wl)&&bl.copy($o),wl||Lc.copy(bl),wl=!0,Lc.lerp(bl,1-Math.exp(-i*8))}function GS(i){Fn.update(i),Sl=Cn(Sl,Rt.perched?1:0,25,i),Fn.at(Rt.root.position.x,Ld),yh.position.copy(Ld).multiplyScalar(Sl)}const ur=Rt.layer("gaze"),Id=Rt.billTip.bind(Rt);Ki&&(Rt.feathers.contour.castShadow=!1);const Ic=new Wf,VS=new Ft,Ep=new y;let Tp=-1e9;const Dd=new Tn,li=new y,WS=new y;function XS(i,t){const e=Un.getBoundingClientRect();return VS.set((i-e.left)/e.width*2-1,-((t-e.top)/e.height)*2+1)}const Nd=new y,Ud=new _e;function Mh(i,t){Nd.copy(te.position),Ud.copy(te.quaternion);const e=Vp();return e&&te.updateMatrixWorld(),Ic.setFromCamera(XS(i,t),te),e&&(te.position.copy(Nd),te.quaternion.copy(Ud),te.updateMatrixWorld()),Ic.ray}function Ap(i,t,e,n){return Mh(i,t),te.getWorldDirection(li).negate(),Dd.setFromNormalAndCoplanarPoint(li,WS.set(Rt.root.position.x,.8,0).addScaledVector(li,e)),Ic.ray.intersectPlane(Dd,n)}const Fd=new y;let da=!1;function qS(i){if(Rt.away||Rt.fleeing)return!1;Rt.headPosition(Fd).y-=.05;const t=da?.46:.4;return i.distanceSqToPoint(Fd)<t*t}const hi=RS(Pe,ke?"pappus":"fruit"),Zn=CS(Pe,()=>Rt.root.getWorldPosition(new y).add(new y(0,.85,0)),ke);Rt.onPick=i=>Zn.owns(i)?Zn.pick(i):hi.pick(i);Rt.onSwallow=i=>Zn.owns(i)?Zn.swallowed(i):hi.swallowed(i);Rt.mind.on("strike",()=>Zn.strike());const Xi=LS({scene:Pe,camera:te,renderer:Oe,center:new y(Kn,.55,0),dof:()=>fn.dof,passSeed:ke?(i,t)=>hi.spawn(i,t):void 0,flies:ke}),Zo=new cn;Zo.add(...hi.warm,...Zn.warm,...Xi.warm);let Uo=-1;const Od=new y;function Rp(){Math.random()<.5?Zn.spawn():Xi.flyBy()}const kd=new y,El=new y;Rt.mind.on("ruffle",i=>{if(i.kind==="throat"||Rt.away)return;const t=Math.atan2(te.position.x-Rt.root.position.x,te.position.z-Rt.root.position.z)+(Math.random()<.5?-1:1)*(.9+Math.random()*.6);El.set(Math.sin(t),0,Math.cos(t)),Rt.root.getWorldPosition(kd).addScaledVector(El,.16).y+=.22+Math.random()*.2,Xi.shed(kd,El,Math.random()<.45)});const Fo=[];function Bd(i,t){for(let e=0;e<t.length;e++)i.push(t[e])}const zd=new y;let Cp=0,Pp=0,Lp=0;Un.addEventListener("pointerdown",i=>{Cp=performance.now(),Pp=i.clientX,Lp=i.clientY});const is=new y,dr=new y,Hd=new y,YS=3;let Gd=0;function KS(i){if(Rt.away||Rt.fleeing)return;const t=performance.now()/1e3;if(t<Gd||(Rt.root.getWorldPosition(is),dr.copy(is),is.x-=.06,dr.x+=.06,is.y=dr.y=is.y+.02,i.distanceSqToSegment(is,dr,void 0,Hd)>.07*.07))return;const e=Hd.x<(is.x+dr.x)/2?1:-1,n=.12+Math.random()*.1;(Rt.hopBy(e*n)||Rt.hopBy(-e*n))&&(Gd=t+YS)}const Vd=new Tn,Tl=new y,Al=new y,Wd=new y,ZS=new y;let Oo=-1;function $S(i){const t=performance.now();if(!Fn.reach(i,Tl))return void(Oo=-1);if(te.getWorldDirection(li).negate(),Vd.setFromNormalAndCoplanarPoint(li,Tl),!i.intersectPlane(Vd,Al))return;const e=(t-Oo)/1e3;Oo>0&&e<.1&&Fn.brush(Tl,ZS.copy(Al).sub(Wd).divideScalar(Math.max(e,1/240)),e),Wd.copy(Al),Oo=t}window.addEventListener("pointermove",i=>{document.body.classList.toggle("near",i.clientX>window.innerWidth-140&&i.clientY<120);const t=i.target===Un,e=Mh(i.clientX,i.clientY),n=t&&qS(e);n&&!da&&!Rt.singing&&Rt.sing(1.6),da=n,t&&(KS(e),$S(e)),!n&&Ap(i.clientX,i.clientY,.8,Ep)&&(Tp=performance.now())});const Xd=new y,qd=new y;function JS(i,t){return Rt.away?!1:(Rt.root.getWorldPosition(Xd).y+=.25,Rt.headPosition(qd),Mh(i,t).distanceSqToSegment(Xd,qd)<.22*.22)}const Yd=document.querySelector(".fs"),Sh=i=>document.body.classList.toggle("clean",i);Ti.has("clean")&&Sh(!0);Yd?.addEventListener("click",async()=>{const i=!document.body.classList.contains("clean");Sh(i);try{i&&!document.fullscreenElement&&await document.documentElement.requestFullscreen?.(),!i&&document.fullscreenElement&&await document.exitFullscreen()}catch{}Yd.blur()});document.addEventListener("fullscreenchange",()=>{document.body.classList.toggle("fullscreen",!!document.fullscreenElement),document.fullscreenElement||Sh(!1)});Un.addEventListener("pointerup",i=>{if(Vr.isOpen())return Vr.open(!1);Hp.swallows(i)||performance.now()-Cp<250&&Math.hypot(i.clientX-Pp,i.clientY-Lp)<6&&(ke&&Ki&&JS(i.clientX,i.clientY)?bh():Ap(i.clientX,i.clientY,.6,zd)&&hi.spawn(zd))});const fn=bS(Oe,{samples:4}),$o=new y;{const i=fn.grade;i.uWhite.value.set(1,1,1.04),ke?i.uLift.value.set(.015,.005,.022):i.uLift.value.set(.012,.017,.015),i.uGamma.value.set(1,1.04,1),i.uVignette.value=.22}function Ip(i){Rt.setPerch(f1(i),up)}function jS(i){i.traverse(t=>{const e=t;if(e.isMesh){e.geometry.dispose();for(const n of Array.isArray(e.material)?e.material:[e.material])n.dispose()}})}Ip(Gr.group);let Rl=0,xr=1,Dc=0;const Nc=Rt.plumage.uPal.value.map(i=>i.clone());let Dp=xp(Cc[0]);function bh(){Rl=(Rl+1)%Cc.length,Rt.ruffle("throat",.25),Rt.plumage.uPal.value.forEach((i,t)=>Nc[t].copy(i)),Dp=xp(Cc[Rl]),Dc=.05,xr=0}function QS(i){if(xr>=1)return;if(Dc>0){Dc-=i;return}xr=Math.min(1,xr+i/.55);const t=Qe.smoothstep(xr,0,1);Rt.plumage.uPal.value.forEach((e,n)=>{for(let s=0;s<9;s++)e.elements[s]=Nc[n].elements[s]+(Dp[n].elements[s]-Nc[n].elements[s])*t})}const tb=[-.45,.85],eb=[Math.PI-.6,-Math.PI+.55];let yr=!1,ki=-1,Ar=0,Np=0;const Rr=new wc,Cr=new y;function nb(){if(ki>=0)return;yr=!yr,Cr.copy(te.position).sub(Le.target),Rr.setFromVector3(Cr),Ar=Rr.theta;const i=yr?Math.PI+.35:.41,t=Qe.euclideanModulo(i-Ar,Math.PI*2);Np=Ar+(yr?t-Math.PI*2:t),Le.minAzimuthAngle=-1/0,Le.maxAzimuthAngle=1/0,ki=0}function ib(i){ki<0||(ki=Math.min(1,ki+i/1.6),Cr.copy(te.position).sub(Le.target),Rr.setFromVector3(Cr),Rr.theta=Ar+(Np-Ar)*Qe.smootherstep(ki,0,1),te.position.copy(Le.target).add(Cr.setFromSpherical(Rr)),ki===1&&(ki=-1,[Le.minAzimuthAngle,Le.maxAzimuthAngle]=yr?eb:tb))}Oe.localClippingEnabled=!0;let wa=!1;const Up=new Tn,Uc=new Tn,ko=new y,Cl=new y,Kd=new y,sb=new Xn({color:15660008,wireframe:!0,transparent:!0,opacity:.8,clippingPlanes:[Uc]}),Fp=["bird.skin","bird.bare","bird.bill","bird.eyes","bird.nict"].map(i=>Rt.root.getObjectByName(i)).filter(i=>!!i),rb=Fp.map(i=>i.material),Zd=Rt.feathers.contour.material;function Op(i){wa=i,Zd.clippingPlanes=i?[Up]:null,Zd.needsUpdate=!0,Fp.forEach((t,e)=>t.material=i?sb:rb[e])}function ob(){wa&&(Rt.rig.bones.neck2.getWorldPosition(ko),Rt.rig.bones.head.getWorldPosition(Cl),Kd.copy(Cl).sub(ko).normalize(),ko.lerp(Cl,.35),Uc.setFromNormalAndCoplanarPoint(Kd,ko),Up.copy(Uc).negate())}let kp=!0,$d=!1,wh=0,Fc=!0,Oc=null;const ab=!Ti.has("nofuzz")&&!Ti.has("skin");function Bp(){Rt.feathers.fuzz.visible=Fc&&ab,Oc&&(Oc.visible=Fc)}const lb=Rt.plumage.uFlash.value,cb=Rt.plumage.uGlint.value,zp=()=>{te.getWorldDirection(li).negate();const i=new y().crossVectors(li,te.up).normalize();return new y(Rt.root.position.x,.95+Math.random()*.2,0).addScaledVector(li,.6).addScaledVector(i,(Math.random()-.5)*.5)},hb=()=>(Rt.headPosition(Jd),te.getWorldDirection(li).negate(),Jd.addScaledVector(li,.24).add(new y(0,-.06,0))),Jd=new y,Pl=[[.4,()=>Rt.ruffle("shake")],[3,()=>Zn.spawn(hb(),!0)],[10.5,()=>Rt.sing(2.2)],[13.5,()=>Rt.lick(.65,3)],[15,()=>Rt.hopBy(.26)],[17.5,()=>Rt.sing(1.6)],[20,()=>Xi.flyBy(!0)],[22.5,()=>Rt.hopTo(Kn)],[24.5,()=>hi.spawn(zp())],[30,()=>!Rt.busy&&(Rt.ruffle("puff",.6),!0)],[32,()=>Rt.sing(1.4)]],ub=35;let Hi=-1,Mr=0;function Eh(i){Hi=i?0:-1,Mr=0,document.body.classList.toggle("demo",i)}function db(i){if(!(Hi<0)){for(Hi+=i;Mr<Pl.length&&Hi>=Pl[Mr][0];){const[t,e]=Pl[Mr];if(e()===!1&&Hi-t<4)break;Mr++}Hi>ub&&Eh(!1)}}const jd={Neutral:Vc,AgX:Gc,ACES:Hc,Reinhard:zc,None:oi},Vr=US([{kind:"heading",label:"Camera"},{kind:"range",key:"shake",label:"Handheld",value:2.05,min:0,max:3.5,step:.05,set:i=>wh=i},{kind:"range",key:"dof",label:"Depth of field",value:85,min:0,max:260,step:5,set:i=>fn.dof.uAperture.value=i},{kind:"range",key:"exposure",label:"Exposure",value:1.15,min:.8,max:2.4,step:.05,set:i=>fn.grade.uExposure.value=i},{kind:"heading",label:"Look"},{kind:"select",key:"tonemap",label:"Tone mapping",value:"Neutral",options:Object.keys(jd),set:i=>fn.setToneMapping(jd[i])},{kind:"range",key:"contrast",label:"Contrast",value:.87,min:.6,max:1.4,step:.01,set:i=>fn.grade.uContrast.value=i},{kind:"range",key:"sat",label:"Saturation",value:.97,min:.3,max:1.4,step:.01,set:i=>fn.grade.uSat.value=i},{kind:"heading",label:"Bird"},{kind:"toggle",key:"follow",label:"Follows the pointer",value:!0,set:i=>kp=i},{kind:"range",key:"mood",label:"Calm · alert",value:.32,min:0,max:1,step:.01,set:i=>Rt.mind.baseline=i},{kind:"range",key:"flash",label:"Gorget flash",value:1,min:0,max:2,step:.05,set:i=>{Rt.plumage.uFlash.value=lb*i,Rt.plumage.uGlint.value=cb*i}},{kind:"toggle",key:"fuzz",label:"Down and felt",value:!0,set:i=>{Fc=i,Bp()}},{kind:"range",key:"give",label:"Twig give",value:1,min:0,max:3,step:.05,set:i=>Fn.give=i},{kind:"heading",label:"Workbench"},{kind:"action",label:"Demo",key:"D",run:()=>Eh(Hi<0)},{kind:"action",label:"Pause",key:"P",run:()=>Gp(!os)},{kind:"action",label:"Drawing",key:"W",run:()=>vh(!Ks)},{kind:"action",label:"Head wire",key:"H",run:()=>Op(!wa)}],Ti.has("still")?{shake:0}:{},Ti.has("settings")),Hp=DS([{id:"food",label:ke?"Drop a seed":"Offer a fruit",icon:ke?En.food:En.fruit,run:()=>hi.spawn(zp())},ke?{id:"gnat",label:"Let a bug in",key:"G",icon:En.gnat,run:Rp}:{id:"sound",label:"Forest sound",icon:En.sound,run:()=>{xh.toggle()}},{id:"sing",label:ke?"Sing":"Call",icon:En.sing,run:()=>Rt.sing(2.2)},{id:"ruffle",label:"Ruffle",key:"R",icon:En.ruffle,run:()=>Rt.ruffle("shake")},ke?{id:"fly",label:"Fly off",key:"F",icon:En.fly,run:()=>Rt.flee()}:{id:"stretch",label:"Stretch",key:"S",icon:En.fly,run:()=>Rt.stretch()},...ke?[{id:"palette",label:"Color",key:"C",icon:En.palette,run:bh}]:[]],ke?En.bird:En.parrot);Hp.root.addEventListener("pointerdown",()=>Vr.open(!1),!0);const fb={...ke?{KeyF:()=>Rt.flee()}:{KeyS:()=>Rt.stretch()},KeyR:()=>Rt.ruffle("shake"),KeyB:nb,...ke?{KeyC:bh}:{},...ke?{KeyG:Rp}:{},KeyD:()=>Eh(Hi<0),KeyH:()=>Op(!wa),KeyP:()=>Gp(!os),KeyW:()=>vh(!Ks)};window.addEventListener("keydown",i=>{if(i.repeat)return;const t=i.target instanceof HTMLElement?i.target:null;if(!(t instanceof HTMLInputElement?t.type!=="range"&&t.type!=="checkbox":t?.closest("select, textarea, [contenteditable]")))if(i.code==="Space"){if(t?.closest("button, a, input"))return;i.preventDefault(),Rt.startle(1)}else!i.metaKey&&!i.ctrlKey&&fb[i.code]?.()});function Ea(){const i=Un.clientWidth||window.innerWidth,t=Un.clientHeight||window.innerHeight;Oe.setPixelRatio(Sp()),Oe.setSize(i,t,!1),fn.setSize(i,t,Oe.getPixelRatio()),te.aspect=i/t,te.fov=i/t<1?30/Math.max(i/t,.55):30,te.updateProjectionMatrix()}window.addEventListener("resize",Ea);new ResizeObserver(Ea).observe(Un);Ea();(function i(){matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`).addEventListener("change",()=>{Ea(),i()},{once:!0})})();const pb=matchMedia("(max-width: 640px)");let Bo=0;function mb(i){const t=Vr.isOpen()&&pb.matches?Vr.panel.offsetHeight*.5:0;if(Bo=Cn(Bo,t,9,i),Bo>.5){const e=Un.clientWidth||window.innerWidth,n=Un.clientHeight||window.innerHeight;te.setViewOffset(e,n,0,Bo,e,n)}else te.view?.enabled&&te.clearViewOffset()}zS.then(()=>requestAnimationFrame(()=>kS()));Hr||bp(!0);let os=!1;function Gp(i){os=i,document.body.classList.toggle("paused",i)}const Jo=new ig;Jo.connect(document);let Bi=0;Oe.setAnimationLoop(i=>{Jo.update(i);const t=os?0:Math.min(Jo.getDelta(),1/20);os&&Jo.getDelta(),Bi+=t,ib(os?1/60:t),mb(os?1/60:t),Le.update(),ua.material.uniforms.uTime.value=Bi,ua.mesh.position.copy(te.position);const e=kp&&!da&&performance.now()-Tp<300;$d&&!e&&ur.moveOn(Rt.mind),$d=e,ur.interest=e?.95:.35,ur.billOn=e?.8:.46,ur.pursuit=e?1:0;let n=e?null:Xi.flyNear($o,1.1);if(n&&t>0){const r=Od.distanceTo(n)/t>.1;Od.copy(n),r||(n=null)}n?Uo<0&&(Uo=Bi):Uo=-1;const s=n&&Bi-Uo<.8?n:null;s&&(ur.interest=.95),Rt.setAttention(e?Ep:s??te.position),Qo.lerp(rs?Th:xb,1-Math.exp(-t*6)),ba&&Pc&&!Ks&&(bi=Math.min(1,bi+t/1.6),bi===1&&(Pc=!1)),bi===1&&kc&&(kc=!1,fn.endDrawing(),Xp.dispose()),QS(t),Fo.length=0,Bd(Fo,hi.food()),Bd(Fo,Zn.food()),Rt.setFood(Fo),GS(t),Rt.update(t),!ke&&Rt.singing&&!Pd&&xh.call(),Pd=Rt.singing,Rt.headPosition($o),HS(t),ob(),hi.update(t,Bi,Id,$o),Zn.update(t,Bi,Id),Xi.update(t),db(t),Wp()});const gb=new _e,_b=new Yn,Qd=new _e;let tf=3;const zo=new Ft;function fr(i,t,e){return Math.sin(i*t+e)*.6+Math.sin(i*t*2.31+e*1.7)*.3+Math.sin(i*t*5.13+e*2.9)*.1}function vb(i,t){i>tf&&(zo.set((Math.random()-.5)*.12,(Math.random()-.5)*.09),tf=i+4+Math.random()*9),zo.multiplyScalar(Math.exp(-.016666666666666666*5));const e=wh*Qe.DEG2RAD,n=(fr(i,.35,1.3)*.16+fr(i,7.3,4.1)*.018+zo.x)*e,s=(fr(i,.27,2.7)*.12+fr(i,8.1,5.9)*.016+zo.y)*e,r=fr(i,.22,.4)*.1*e;return _b.set(s,n,r,"YXZ")}const Ll=document.querySelector(".gyro");Ki&&document.body.classList.add("touch");let rs=!1,jo=null;const Th=new Ft,Qo=new Ft,xb=new Ft;function ef(i){if(i.beta===null||i.gamma===null)return;const t=screen.orientation?.angle??0,[e,n]=t===90?[i.beta,-i.gamma]:t===270?[-i.beta,i.gamma]:t===180?[-i.gamma,-i.beta]:[i.gamma,i.beta];jo??={x:e,y:n};const s=Qe.DEG2RAD;Th.set(Qe.clamp((e-jo.x)*.5,-12,12)*s,Qe.clamp((n-jo.y)*.4,-8,8)*s)}Ll?.addEventListener("click",async()=>{if(rs)window.removeEventListener("deviceorientation",ef),rs=!1;else{const i=DeviceOrientationEvent.requestPermission;if(i)try{if(await i()!=="granted")return}catch{return}jo=null,window.addEventListener("deviceorientation",ef),rs=!0}rs||Th.set(0,0),Ll.classList.toggle("on",rs),Ll.setAttribute("aria-pressed",String(rs))});const nf=new y,pr=new y,sf=new y;function Vp(){return Qo.lengthSq()<=1e-8?!1:(pr.copy(te.position).sub(Le.target),pr.applyAxisAngle(te.up,-Qo.x),sf.crossVectors(te.up,pr).normalize(),pr.applyAxisAngle(sf,Qo.y),te.position.copy(Le.target).add(pr),te.lookAt(Le.target),!0)}function Wp(){nf.copy(te.position),Qd.copy(te.quaternion),Vp(),wh>0&&te.quaternion.multiply(gb.setFromEuler(vb(Bi))),te.updateMatrixWorld(),Mb(),te.position.copy(nf),te.quaternion.copy(Qd),te.updateMatrixWorld()}const Xp=new Xn({color:16777215,wireframe:!0}),rf=[ua.mesh,Xi.group,Rt.feathers.contour,Rt.feathers.flight,Rt.feathers.fuzz],of=[];let kc=!0;function yb(){kc=!0,rf.forEach((i,t)=>{of[t]=i.visible,i.visible=!1}),Pe.overrideMaterial=Xp,Oe.render(Pe,te),Pe.overrideMaterial=null,rf.forEach((i,t)=>i.visible=of[t])}let af=!0;function Mb(){if(af&&(af=!1,Un.classList.remove("pending")),!Hr)return Oe.render(Pe,te);fn.focusOn(Lc),fn.grade.uReveal.value=Qe.smoothstep(bi,0,1),fn.render(Pe,te,Bi,ba&&bi===1?null:yb),Ah&&bi===1&&!Ks&&bb()}let Ah=!0,Ho=new Uint8Array(4),Il=null,Dl=null;const Sb=document.querySelector('meta[name="theme-color"]');function bb(){if(Dl)return;Ah=!1;const i=Oe.getContext();Oe.setRenderTarget(null);const t=i.drawingBufferWidth;Ho.length!==t*4&&(Ho=new Uint8Array(t*4)),Il??=i.createBuffer(),i.bindBuffer(i.PIXEL_PACK_BUFFER,Il),i.bufferData(i.PIXEL_PACK_BUFFER,Ho.byteLength,i.STREAM_READ),i.readPixels(0,1,t,1,i.RGBA,i.UNSIGNED_BYTE,0),i.bindBuffer(i.PIXEL_PACK_BUFFER,null);const e=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);if(!e)return;Dl=e,i.flush();const n=Ho,s=()=>{const r=i.clientWaitSync(e,0,0);if(r===i.TIMEOUT_EXPIRED)return void setTimeout(s,8);i.deleteSync(e),Dl=null,r!==i.WAIT_FAILED&&(i.bindBuffer(i.PIXEL_PACK_BUFFER,Il),i.getBufferSubData(i.PIXEL_PACK_BUFFER,0,n),i.bindBuffer(i.PIXEL_PACK_BUFFER,null),wb(n,t))};setTimeout(s,8)}function wb(i,t){let e=0,n=0,s=0;const r=9;for(let a=0;a<r;a++){const l=Math.round((a+.5)/r*(t-1))*4;e+=i[l],n+=i[l+1],s+=i[l+2]}const o=`rgb(${Math.round(e/r)}, ${Math.round(n/r)}, ${Math.round(s/r)})`;document.documentElement.style.background=o,Sb?.setAttribute("content",o)}let lf=0;window.addEventListener("resize",()=>{clearTimeout(lf),lf=window.setTimeout(()=>Ah=!0,400)});Object.assign(window,{__scene:Pe,__camera:te,__renderer:Oe,__controls:Le,__post:fn,__frame:Wp,__seeds:hi,__insects:Zn,__ambient:Xi,__sway:Fn});
