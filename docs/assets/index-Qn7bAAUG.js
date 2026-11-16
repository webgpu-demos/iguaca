(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Gc="187",Ls={ROTATE:0,DOLLY:1,PAN:2},Cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jp=0,Hh=1,Qp=2,Sr=1,t0=2,mr=3,Gi=0,pn=1,Be=2,Is=0,br=1,Fl=2,Gh=3,Vh=4,e0=5,Rs=100,n0=101,i0=102,s0=103,r0=104,o0=200,a0=201,l0=202,c0=203,hf=204,uf=205,h0=206,u0=207,d0=208,f0=209,p0=210,m0=211,g0=212,_0=213,v0=214,Ol=0,kl=1,Bl=2,Pr=3,zl=4,Hl=5,Gl=6,Vl=7,df=0,x0=1,y0=2,oi=0,ff=1,Vc=2,pf=3,Wc=4,mf=5,Xc=6,qc=7,Wh="attached",M0="detached",gf=300,Fs=301,Lr=302,Pa=303,La=304,os=1e3,si=1001,na=1002,Fe=1003,_f=1004,gr=1005,je=1006,Wo=1007,ri=1008,An=1009,vf=1010,xf=1011,Ir=1012,Yc=1013,qn=1014,Nn=1015,yn=1016,Kc=1017,Zc=1018,Os=1020,yf=35902,Mf=35899,Sf=1021,bf=1022,Vn=1023,Vi=1026,Hi=1027,$c=1028,Jc=1029,as=1030,jc=1031,Qc=1033,Xo=33776,qo=33777,Yo=33778,Ko=33779,Wl=35840,Xl=35841,ql=35842,Yl=35843,Kl=36196,Zl=37492,$l=37496,Jl=37488,jl=37489,ia=37490,Ql=37491,tc=37808,ec=37809,nc=37810,ic=37811,sc=37812,rc=37813,oc=37814,ac=37815,lc=37816,cc=37817,hc=37818,uc=37819,dc=37820,fc=37821,pc=36492,mc=36494,gc=36495,_c=36283,vc=36284,sa=36285,xc=36286,Dr=2300,Nr=2301,Ia=2302,Xh=2303,qh=2400,Yh=2401,Kh=2402,S0=2500,b0=0,wf=1,yc=2,w0=3200,Mc=0,T0=1,Bi="",We="srgb",Mn="srgb-linear",ra="linear",we="srgb",Da=7680,E0=519,A0=512,R0=513,C0=514,Tf=515,P0=516,L0=517,Ef=518,Af=519,Rf=35044,Zh=35048,$h="300 es",Wn=2e3,Ur=2001;function I0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function D0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function N0(){const i=Fr("canvas");return i.style.display="block",i}const Jh={};function oa(...i){const t="THREE."+i.shift();console.log(t,...i)}function Cf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=Cf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Qt(...i){i=Cf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ds(...i){const t=i.join(" ");t in Jh||(Jh[t]=!0,Xt(...i))}function U0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const F0={[Ol]:Ol,[Bl]:Gl,[zl]:zl,[Pr]:Hl,[kl]:kl,[Gl]:Bl,[Vl]:Vl,[Hl]:Pr};class Xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jh=1234567;const wr=Math.PI/180,ks=180/Math.PI;function ui(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function oe(i,t,e){return Math.max(t,Math.min(e,i))}function th(i,t){return(i%t+t)%t}function O0(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function k0(i,t,e){return i!==t?(e-i)/(t-i):0}function Tr(i,t,e){return(1-e)*i+e*t}function B0(i,t,e,n){return Tr(i,t,1-Math.exp(-e*n))}function z0(i,t=1){return t-Math.abs(th(i,t*2)-t)}function H0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function G0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function V0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function W0(i,t){return i+Math.random()*(t-i)}function X0(i){return i*(.5-Math.random())}function q0(i){i!==void 0&&(jh=i);let t=jh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Y0(i){return i*wr}function K0(i){return i*ks}function Z0(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function $0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Pf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function J0(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:Xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ma(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function eh(i,t){if(t.constructor===Float32Array)return i;const e=ma(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function nh(i,t){if(t.constructor===Float32Array)return i;const e=ma(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}const Qe={DEG2RAD:wr,RAD2DEG:ks,generateUUID:ui,clamp:oe,euclideanModulo:th,mapLinear:O0,inverseLerp:k0,lerp:Tr,damp:B0,pingpong:z0,smoothstep:H0,smootherstep:G0,randInt:V0,randFloat:W0,randFloatSpread:X0,seededRandom:q0,degToRad:Y0,radToDeg:K0,isPowerOfTwo:Z0,ceilPowerOfTwo:$0,floorPowerOfTwo:Pf,setQuaternionFromProperEuler:J0,normalize:nh,denormalize:eh};class Ot{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ve{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(u!==v||l!==d||c!==f||h!==g){let p=l*d+c*f+h*g+u*v;p<0&&(d=-d,f=-f,g=-g,v=-v,p=-p);let m=1-a;if(p<.9995){const M=Math.acos(p),T=Math.sin(M);m=Math.sin(m*M)/T,a=Math.sin(a*M)/T,l=l*m+d*a,c=c*m+f*a,h=h*m+g*a,u=u*m+v*a}else{l=l*m+d*a,c=c*m+f*a,h=h*m+g*a,u=u*m+v*a;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class y{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Na.copy(this).projectOnVector(t),this.sub(Na)}reflect(t){return this.sub(Na.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new y,Qh=new ve;class Jt{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],p=s[3],m=s[6],M=s[1],T=s[4],b=s[7],x=s[2],A=s[5],_=s[8];return r[0]=o*v+a*M+l*x,r[3]=o*p+a*T+l*A,r[6]=o*m+a*b+l*_,r[1]=c*v+h*M+u*x,r[4]=c*p+h*T+u*A,r[7]=c*m+h*b+u*_,r[2]=d*v+f*M+g*x,r[5]=d*p+f*T+g*A,r[8]=d*m+f*b+g*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ua.makeScale(t,e)),this}rotate(t){return Ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ua.makeRotation(-t)),this}translate(t,e){return Ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ua.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new Jt,tu=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eu=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function j0(){const i={enabled:!0,workingColorSpace:Mn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===we&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===we&&(s.r=Ns(s.r),s.g=Ns(s.g),s.b=Ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?ra:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mn]:{primaries:t,whitePoint:n,transfer:ra,toXYZ:tu,fromXYZ:eu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:n,transfer:we,toXYZ:tu,fromXYZ:eu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),i}const de=j0();function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let us;class Q0{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{us===void 0&&(us=Fr("canvas")),us.width=t.width,us.height=t.height;const s=us.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=us}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wi(e[n]/255)*255):e[n]=wi(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tm=0;class ih{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=ui(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fa(s[o].image)):r.push(Fa(s[o]))}else r=Fa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Q0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}let em=0;const Oa=new y;class Xe extends Xi{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=si,s=si,r=je,o=ri,a=Vn,l=An,c=Xe.DEFAULT_ANISOTROPY,h=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=ui(),this.name="",this.source=new ih(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Oa).x}get height(){return this.source.getSize(Oa).y}get depth(){return this.source.getSize(Oa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case os:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case os:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=gf;Xe.DEFAULT_ANISOTROPY=1;class Ae{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,b=(f+1)/2,x=(m+1)/2,A=(h+d)/4,_=(u+v)/4,w=(g+p)/4;return T>b&&T>x?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=A/n,r=_/n):b>x?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=w/s):x<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(x),n=_/r,s=w/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nm extends Xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Xe({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ih(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class an extends nm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Lf extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class im extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class Yt{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,v,p)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),o=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sm,t,rm)}lookAt(t,e,n){const s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Ci.crossVectors(n,Sn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Ci.crossVectors(n,Sn)),Ci.normalize(),$r.crossVectors(Sn,Ci),s[0]=Ci.x,s[4]=$r.x,s[8]=Sn.x,s[1]=Ci.y,s[5]=$r.y,s[9]=Sn.y,s[2]=Ci.z,s[6]=$r.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],M=n[3],T=n[7],b=n[11],x=n[15],A=s[0],_=s[4],w=s[8],N=s[12],P=s[1],D=s[5],L=s[9],k=s[13],E=s[2],I=s[6],F=s[10],O=s[14],K=s[3],H=s[7],V=s[11],Y=s[15];return r[0]=o*A+a*P+l*E+c*K,r[4]=o*_+a*D+l*I+c*H,r[8]=o*w+a*L+l*F+c*V,r[12]=o*N+a*k+l*O+c*Y,r[1]=h*A+u*P+d*E+f*K,r[5]=h*_+u*D+d*I+f*H,r[9]=h*w+u*L+d*F+f*V,r[13]=h*N+u*k+d*O+f*Y,r[2]=g*A+v*P+p*E+m*K,r[6]=g*_+v*D+p*I+m*H,r[10]=g*w+v*L+p*F+m*V,r[14]=g*N+v*k+p*O+m*Y,r[3]=M*A+T*P+b*E+x*K,r[7]=M*_+T*D+b*I+x*H,r[11]=M*w+T*L+b*F+x*V,r[15]=M*N+T*k+b*O+x*Y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15],M=l*f-c*d,T=a*f-c*u,b=a*d-l*u,x=o*f-c*h,A=o*d-l*h,_=o*u-a*h;return e*(v*M-p*T+m*b)-n*(g*M-p*x+m*A)+s*(g*T-v*x+m*_)-r*(g*b-v*A+p*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],M=e*a-n*o,T=e*l-s*o,b=e*c-r*o,x=n*l-s*a,A=n*c-r*a,_=s*c-r*l,w=h*v-u*g,N=h*p-d*g,P=h*m-f*g,D=u*p-d*v,L=u*m-f*v,k=d*m-f*p,E=M*k-T*L+b*D+x*P-A*N+_*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/E;return t[0]=(a*k-l*L+c*D)*I,t[1]=(s*L-n*k-r*D)*I,t[2]=(v*_-p*A+m*x)*I,t[3]=(d*A-u*_-f*x)*I,t[4]=(l*P-o*k-c*N)*I,t[5]=(e*k-s*P+r*N)*I,t[6]=(p*b-g*_-m*T)*I,t[7]=(h*_-d*b+f*T)*I,t[8]=(o*L-a*P+c*w)*I,t[9]=(n*P-e*L-r*w)*I,t[10]=(g*A-v*b+m*M)*I,t[11]=(u*b-h*A-f*M)*I,t[12]=(a*N-o*D-l*w)*I,t[13]=(e*D-n*N+s*w)*I,t[14]=(v*T-g*x-p*M)*I,t[15]=(h*x-u*T+d*M)*I,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,v=o*h,p=o*u,m=a*u,M=l*c,T=l*h,b=l*u,x=n.x,A=n.y,_=n.z;return s[0]=(1-(v+m))*x,s[1]=(f+b)*x,s[2]=(g-T)*x,s[3]=0,s[4]=(f-b)*A,s[5]=(1-(d+m))*A,s[6]=(p+M)*A,s[7]=0,s[8]=(g+T)*_,s[9]=(p-M)*_,s[10]=(1-(d+v))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ds.set(s[0],s[1],s[2]).length();const a=ds.set(s[4],s[5],s[6]).length(),l=ds.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Bn.copy(this);const c=1/o,h=1/a,u=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,e.setFromRotationMatrix(Bn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Wn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===Wn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ur)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Wn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===Wn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Ur)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ds=new y,Bn=new Yt,sm=new y(0,0,0),rm=new y(1,1,1),Ci=new y,$r=new y,Sn=new y,nu=new Yt,iu=new ve;class Yn{constructor(t=0,e=0,n=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return iu.setFromEuler(this),this.setFromQuaternion(iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let om=0;const su=new y,fs=new ve,pi=new Yt,Jr=new y,$s=new y,am=new y,lm=new ve,ru=new y(1,0,0),ou=new y(0,1,0),au=new y(0,0,1),lu={type:"added"},cm={type:"removed"},ps={type:"childadded",child:null},ka={type:"childremoved",child:null};class De extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new y,e=new Yn,n=new ve,s=new y(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Jt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(ru,t)}rotateY(t){return this.rotateOnAxis(ou,t)}rotateZ(t){return this.rotateOnAxis(au,t)}translateOnAxis(t,e){return su.copy(t).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ru,t)}translateY(t){return this.translateOnAxis(ou,t)}translateZ(t){return this.translateOnAxis(au,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jr.copy(t):Jr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt($s,Jr,this.up):pi.lookAt(Jr,$s,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(pi),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lu),ps.child=t,this.dispatchEvent(ps),ps.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cm),ka.child=t,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lu),ps.child=t,this.dispatchEvent(ps),ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,am),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,lm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}De.DEFAULT_UP=new y(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class cn extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hm={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new cn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const If={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},jr={h:0,s:0,l:0};function za(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=de.workingColorSpace){if(t=th(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=za(o,r,t+1/3),this.g=za(o,r,t),this.b=za(o,r,t-1/3)}return de.colorSpaceToWorking(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=If[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return de.workingToColorSpace(on.copy(this),t),Math.round(oe(on.r*255,0,255))*65536+Math.round(oe(on.g*255,0,255))*256+Math.round(oe(on.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(on.copy(this),e);const n=on.r,s=on.g,r=on.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=We){de.workingToColorSpace(on.copy(this),t);const e=on.r,n=on.g,s=on.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(jr);const n=Tr(Pi.h,jr.h,e),s=Tr(Pi.s,jr.s,e),r=Tr(Pi.l,jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new Nt;Nt.NAMES=If;class rh extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const zn=new y,mi=new y,Ha=new y,gi=new y,ms=new y,gs=new y,cu=new y,Ga=new y,Va=new y,Wa=new y,Xa=new Ae,qa=new Ae,Ya=new Ae;class Dn{constructor(t=new y,e=new y,n=new y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),zn.subVectors(t,e),s.cross(zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){zn.subVectors(s,e),mi.subVectors(n,e),Ha.subVectors(t,e);const o=zn.dot(zn),a=zn.dot(mi),l=zn.dot(Ha),c=mi.dot(mi),h=mi.dot(Ha),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Xa.setScalar(0),qa.setScalar(0),Ya.setScalar(0),Xa.fromBufferAttribute(t,e),qa.fromBufferAttribute(t,n),Ya.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Xa,r.x),o.addScaledVector(qa,r.y),o.addScaledVector(Ya,r.z),o}static isFrontFacing(t,e,n,s){return zn.subVectors(n,e),mi.subVectors(t,e),zn.cross(mi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),zn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Dn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ms.subVectors(s,n),gs.subVectors(r,n),Ga.subVectors(t,n);const l=ms.dot(Ga),c=gs.dot(Ga);if(l<=0&&c<=0)return e.copy(n);Va.subVectors(t,s);const h=ms.dot(Va),u=gs.dot(Va);if(h>=0&&u<=h)return e.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(ms,o);Wa.subVectors(t,r);const f=ms.dot(Wa),g=gs.dot(Wa);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(gs,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return cu.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(cu,a);const m=1/(p+v+d);return o=v*m,a=d*m,e.copy(n).addScaledVector(ms,o).addScaledVector(gs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class di{constructor(t=new y(1/0,1/0,1/0),e=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(t.matrixWorld),this.union(Qr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),to.subVectors(this.max,Js),_s.subVectors(t.a,Js),vs.subVectors(t.b,Js),xs.subVectors(t.c,Js),Li.subVectors(vs,_s),Ii.subVectors(xs,vs),Ji.subVectors(_s,xs);let e=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-Ji.z,Ji.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,Ji.z,0,-Ji.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-Ji.y,Ji.x,0];return!Ka(e,_s,vs,xs,to)||(e=[1,0,0,0,1,0,0,0,1],!Ka(e,_s,vs,xs,to))?!1:(eo.crossVectors(Li,Ii),e=[eo.x,eo.y,eo.z],Ka(e,_s,vs,xs,to))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const _i=[new y,new y,new y,new y,new y,new y,new y,new y],Hn=new y,Qr=new di,_s=new y,vs=new y,xs=new y,Li=new y,Ii=new y,Ji=new y,Js=new y,to=new y,eo=new y,ji=new y;function Ka(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ji.fromArray(i,r);const a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=t.dot(ji),c=e.dot(ji),h=n.dot(ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const He=new y,no=new Ot;let um=0;class Pe extends Xi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:um++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rf,this.updateRanges=[],this.gpuType=Nn,this.version=0,this._normalizationScale=t!==void 0?ma(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)no.fromBufferAttribute(this,e),no.applyMatrix3(t),this.setXY(e,no.x,no.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):eh(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):nh(t,this.array)}}class ga extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Df extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}const dm=new di,js=new y,Za=new y;class On{constructor(t=new y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):dm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);const e=js.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(Za)),this.expandByPoint(js.copy(t.center).sub(Za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let fm=0;const Pn=new Yt,$a=new De,ys=new y,bn=new di,Qs=new di,Je=new y;class Me extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(I0(t)?Df:ga)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return $a.lookAt(t),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new On);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new y,1/0);return}if(t){const n=this.boundingSphere.center;if(bn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(bn.min,Qs.min),bn.expandByPoint(Je),Je.addVectors(bn.max,Qs.max),bn.expandByPoint(Je)):(bn.expandByPoint(Qs.min),bn.expandByPoint(Qs.max))}bn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Je));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Je.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(t,c),Je.add(ys)),s=Math.max(s,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Pe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)a[N]=new y,l[N]=new y;const h=new y,u=new y,d=new y,f=new Ot,g=new Ot,v=new Ot,p=new y,m=new y;function M(N,P,D){c[N]=c[P]=c[D]=1,h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,P),d.fromBufferAttribute(n,D),f.fromBufferAttribute(r,N),g.fromBufferAttribute(r,P),v.fromBufferAttribute(r,D),u.sub(h),d.sub(h),g.sub(f),v.sub(f);const L=1/(g.x*v.y-v.x*g.y);isFinite(L)&&(p.copy(u).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(L),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(L),a[N].add(p),a[P].add(p),a[D].add(p),l[N].add(m),l[P].add(m),l[D].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let N=0,P=T.length;N<P;++N){const D=T[N],L=D.start,k=D.count;for(let E=L,I=L+k;E<I;E+=3)M(t.getX(E+0),t.getX(E+1),t.getX(E+2))}const b=new y,x=new y,A=new y,_=new y;function w(N){A.fromBufferAttribute(s,N),_.copy(A);const P=a[N];b.copy(P),b.sub(A.multiplyScalar(A.dot(P))).normalize(),x.crossVectors(_,P);const L=x.dot(l[N])<0?-1:1;o.setXYZW(N,b.x,b.y,b.z,L)}for(let N=0,P=n.count;N<P;++N)c[N]&&w(N);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new y,r=new y,o=new y,a=new y,l=new y,c=new y,h=new y,u=new y;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new Pe(d,h,u)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Rf,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=hu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=hu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function hu(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ui()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}const un=new y;class oh{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?ma(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){oa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Pe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new oh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){oa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):eh(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):nh(t,this.data.array)}}const Ja=new y,mm=new y,gm=new Jt;class En{constructor(t=new y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ja.subVectors(n,e).cross(mm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Ja),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gm.getNormalMatrix(t),s=this.coplanarPoint(Ja).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let _m=0;class ai extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=br,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hf,this.blendDst=uf,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=E0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Da,this.stencilZFail=Da,this.stencilZPass=Da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Nt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new En().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ot().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const vi=new y,ja=new y,io=new y,so=new y;class Gs{constructor(t=new y,e=new y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ja.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),so.copy(this.origin).sub(ja);const r=t.distanceTo(e)*.5,o=-this.direction.dot(io),a=so.dot(this.direction),l=-so.dot(io),c=so.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ja).addScaledVector(io,d),f}intersectSphere(t,e){if(t.radius<0)return null;vi.subVectors(t.center,this.origin);const n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,g=e.x-o.x,v=e.y-o.y,p=e.z-o.z,m=n.x-o.x,M=n.y-o.y,T=n.z-o.z,b=Math.abs(l),x=Math.abs(c),A=Math.abs(h);let _,w,N,P,D,L,k,E,I,F,O,K;if(b>=x&&b>=A?(N=l,L=u,I=g,K=m,l>=0?(_=c,w=h,P=d,D=f,k=v,E=p,F=M,O=T):(_=h,w=c,P=f,D=d,k=p,E=v,F=T,O=M)):x>=A?(N=c,L=d,I=v,K=M,c>=0?(_=h,w=l,P=f,D=u,k=p,E=g,F=T,O=m):(_=l,w=h,P=u,D=f,k=g,E=p,F=m,O=T)):(N=h,L=f,I=p,K=T,h>=0?(_=l,w=c,P=u,D=d,k=g,E=v,F=m,O=M):(_=c,w=l,P=d,D=u,k=v,E=g,F=M,O=m)),N===0)return null;const H=_/N,V=w/N,Y=1/N,Q=P-H*L,q=D-V*L,U=k-H*I,Z=E-V*I,W=F-H*K,st=O-V*K,J=W*Z-st*U,ut=Q*st-q*W,pt=U*q-Z*Q;if(s){if(J<0||ut<0||pt<0)return null}else if((J<0||ut<0||pt<0)&&(J>0||ut>0||pt>0))return null;const lt=J+ut+pt;if(lt===0)return null;const Et=Y*(J*L+ut*I+pt*K);return(lt>0?Et<0:Et>0)?null:this.at(Et/lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xn extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const uu=new Yt,Qi=new Gs,ro=new On,du=new y,oo=new y,ao=new y,lo=new y,Qa=new y,co=new y,fu=new y,ho=new y;class me extends De{constructor(t=new Me,e=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Qa.fromBufferAttribute(u,t),o?co.addScaledVector(Qa,h):co.addScaledVector(Qa.sub(e),h))}e.add(co)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(r),Qi.copy(t.ray).recast(t.near),!(ro.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(ro,du)===null||Qi.origin.distanceToSquared(du)>(t.far-t.near)**2))&&(uu.copy(r).invert(),Qi.copy(t.ray).applyMatrix4(uu),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),T=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let b=M,x=T;b<x;b+=3){const A=a.getX(b),_=a.getX(b+1),w=a.getX(b+2);s=uo(this,m,t,n,c,h,u,A,_,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const M=a.getX(p),T=a.getX(p+1),b=a.getX(p+2);s=uo(this,o,t,n,c,h,u,M,T,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),T=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=M,x=T;b<x;b+=3){const A=b,_=b+1,w=b+2;s=uo(this,m,t,n,c,h,u,A,_,w),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const M=p,T=p+1,b=p+2;s=uo(this,o,t,n,c,h,u,M,T,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function vm(i,t,e,n,s,r,o,a){let l;if(t.side===pn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Gi,a),l===null)return null;ho.copy(a),ho.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ho);return c<e.near||c>e.far?null:{distance:c,point:ho.clone(),object:i}}function uo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,oo),i.getVertexPosition(l,ao),i.getVertexPosition(c,lo);const h=vm(i,t,e,n,oo,ao,lo,fu);if(h){const u=new y;Dn.getBarycoord(fu,oo,ao,lo,u),s&&(h.uv=Dn.getInterpolatedAttribute(s,a,l,c,u,new Ot)),r&&(h.uv1=Dn.getInterpolatedAttribute(r,a,l,c,u,new Ot)),o&&(h.normal=Dn.getInterpolatedAttribute(o,a,l,c,u,new y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new y,materialIndex:0};Dn.getNormal(oo,ao,lo,d.normal),h.face=d,h.barycoord=u}return h}const tr=new Ae,pu=new Ae,mu=new Ae,xm=new Ae,gu=new Yt,fo=new y,tl=new On,_u=new Yt,el=new Gs;class ni extends me{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wh,this.bindMatrix=new Yt,this.bindMatrixInverse=new Yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new di),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,fo),this.boundingBox.expandByPoint(fo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new On),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,fo),this.boundingSphere.expandByPoint(fo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tl.copy(this.boundingSphere),tl.applyMatrix4(s),t.ray.intersectsSphere(tl)!==!1&&(_u.copy(s).invert(),el.copy(t.ray).applyMatrix4(_u),!(this.boundingBox!==null&&el.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,el)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Ae,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Wh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===M0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Xt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;pu.fromBufferAttribute(s.attributes.skinIndex,t),mu.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(tr.copy(e),e.set(0,0,0,0)):(tr.set(e.x,e.y,e.z,1),e.set(0,0,0)),tr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=mu.getComponent(r);if(o!==0){const a=pu.getComponent(r);gu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(xm.copy(tr).applyMatrix4(gu),o)}}return e.isVector4&&(e.w=tr.w),e.applyMatrix4(this.bindMatrixInverse)}}class ah extends De{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _a extends Xe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Fe,h=Fe,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vu=new Yt,ym=new Yt;class va{constructor(t=[],e=[]){this.uuid=ui(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Xt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Yt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Yt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:ym;vu.multiplyMatrices(a,e[r]),vu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new va(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new _a(e,t,t,Vn,Nn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let o=e[r];o===void 0&&(Xt("Skeleton: No bone found with UUID:",r),o=new ah),this.bones.push(o),this.boneInverses.push(new Yt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const o=e[s];t.bones.push(o.uuid);const a=n[s];t.boneInverses.push(a.toArray())}return t}}class aa extends Pe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ms=new Yt,xu=new Yt,po=[],yu=new di,Mm=new Yt,er=new me,nr=new On;class Sm extends me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new aa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Mm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),yu.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(yu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new On),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),nr.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),t.ray.intersectsSphere(nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ms),xu.multiplyMatrices(n,Ms),er.matrixWorld=xu,er.raycast(t,po);for(let o=0,a=po.length;o<a;o++){const l=po[o];l.instanceId=r,l.object=this,e.push(l)}po.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new aa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _a(new Float32Array(s*this.count),s,this.count,$c,Nn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ts=new On,bm=new Ot(.5,.5),mo=new y;class Or{constructor(t=new En,e=new En,n=new En,s=new En,r=new En,o=new En){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],p=r[10],m=r[11],M=r[12],T=r[13],b=r[14],x=r[15];if(s[0].setComponents(c-o,f-h,m-g,x-M).normalize(),s[1].setComponents(c+o,f+h,m+g,x+M).normalize(),s[2].setComponents(c+a,f+u,m+v,x+T).normalize(),s[3].setComponents(c-a,f-u,m-v,x-T).normalize(),n)s[4].setComponents(l,d,p,b).normalize(),s[5].setComponents(c-l,f-d,m-p,x-b).normalize();else if(s[4].setComponents(c-l,f-d,m-p,x-b).normalize(),e===Wn)s[5].setComponents(c+l,f+d,m+p,x+b).normalize();else if(e===Ur)s[5].setComponents(l,d,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){ts.center.set(0,0,0);const e=bm.distanceTo(t.center);return ts.radius=.7071067811865476+e,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(mo.x=s.normal.x>0?t.max.x:t.min.x,mo.y=s.normal.y>0?t.max.y:t.min.y,mo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(mo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Mu=new Yt;class lh{constructor(){this.coordinateSystem=Wn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){const r=e[s];Mu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Or),n[s].setFromProjectionMatrix(Mu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Or),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new lh().copy(this)}}class xa extends ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const la=new y,ca=new y,Su=new Yt,ir=new Gs,go=new On,nl=new y,bu=new y;class ch extends De{constructor(t=new Me,e=new xa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)la.fromBufferAttribute(e,s-1),ca.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=la.distanceTo(ca);t.setAttribute("lineDistance",new ne(n,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),go.radius+=r,t.ray.intersectsSphere(go)===!1)return;Su.copy(s).invert(),ir.copy(t.ray).applyMatrix4(Su);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=c){const m=h.getX(v),M=h.getX(v+1),T=_o(this,t,ir,l,m,M,v);T&&e.push(T)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(f),m=_o(this,t,ir,l,v,p,g-1);m&&e.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=c){const m=_o(this,t,ir,l,v,v+1,v);m&&e.push(m)}if(this.isLineLoop){const v=_o(this,t,ir,l,g-1,f,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _o(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(la.fromBufferAttribute(a,s),ca.fromBufferAttribute(a,r),e.distanceSqToSegment(la,ca,nl,bu)>n)return;nl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(nl);if(!(c<t.near||c>t.far))return{distance:c,point:bu.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const wu=new y,Tu=new y;class ha extends ch{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)wu.fromBufferAttribute(e,s),Tu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wu.distanceTo(Tu);t.setAttribute("lineDistance",new ne(n,1))}else Xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wm extends ch{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Nf extends ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Eu=new Yt,Sc=new Gs,vo=new On,xo=new y;class Uf extends De{constructor(t=new Me,e=new Nf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),vo.radius+=r,t.ray.intersectsSphere(vo)===!1)return;Eu.copy(s).invert(),Sc.copy(t.ray).applyMatrix4(Eu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const p=c.getX(g);xo.fromBufferAttribute(u,p),Au(xo,p,l,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)xo.fromBufferAttribute(u,g),Au(xo,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Au(i,t,e,n,s,r,o){const a=Sc.distanceSqToPoint(i);if(a<e){const l=new y;Sc.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ff extends Xe{constructor(t=[],e=Fs,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Tm extends Xe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ls extends Xe{constructor(t,e,n=qn,s,r,o,a=Fe,l=Fe,c,h=Vi,u=1){if(h!==Vi&&h!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ih(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Of extends ls{constructor(t,e=qn,n=Fs,s,r,o=Fe,a=Fe,l,c=Vi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class kf extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wr extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(v,p,m,M,T,b,x,A,_,w,N){const P=b/_,D=x/w,L=b/2,k=x/2,E=A/2,I=_+1,F=w+1;let O=0,K=0;const H=new y;for(let V=0;V<F;V++){const Y=V*D-k;for(let Q=0;Q<I;Q++){const q=Q*P-L;H[v]=q*M,H[p]=Y*T,H[m]=E,c.push(H.x,H.y,H.z),H[v]=0,H[p]=0,H[m]=A>0?1:-1,h.push(H.x,H.y,H.z),u.push(Q/_),u.push(1-V/w),O+=1}}for(let V=0;V<w;V++)for(let Y=0;Y<_;Y++){const Q=d+Y+I*V,q=d+Y+I*(V+1),U=d+(Y+1)+I*(V+1),Z=d+(Y+1)+I*V;l.push(Q,q,Z),l.push(q,U,Z),K+=6}a.addGroup(f,K,N),f+=K,d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class hh extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new y,h=new Ot;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hh(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xr extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],p=n/2;let m=0;M(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function M(){const b=new y,x=new y;let A=0;const _=(e-t)/n;for(let w=0;w<=r;w++){const N=[],P=w/r,D=P*(e-t)+t;for(let L=0;L<=s;L++){const k=L/s,E=k*l+a,I=Math.sin(E),F=Math.cos(E);x.x=D*I,x.y=-P*n+p,x.z=D*F,u.push(x.x,x.y,x.z),b.set(I,_,F).normalize(),d.push(b.x,b.y,b.z),f.push(k,1-P),N.push(g++)}v.push(N)}for(let w=0;w<s;w++)for(let N=0;N<r;N++){const P=v[N][w],D=v[N+1][w],L=v[N+1][w+1],k=v[N][w+1];(t>0||N!==0)&&(h.push(P,D,k),A+=3),(e>0||N!==r-1)&&(h.push(D,L,k),A+=3)}c.addGroup(m,A,0),m+=A}function T(b){const x=g,A=new Ot,_=new y;let w=0;const N=b===!0?t:e,P=b===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,p*P,0),d.push(0,P,0),f.push(.5,.5),g++;const D=g;for(let L=0;L<=s;L++){const E=L/s*l+a,I=Math.cos(E),F=Math.sin(E);_.x=N*F,_.y=p*P,_.z=N*I,u.push(_.x,_.y,_.z),d.push(0,P,0),A.x=I*.5+.5,A.y=F*.5*P+.5,f.push(A.x,A.y),g++}for(let L=0;L<s;L++){const k=x+L,E=D+L;b===!0?h.push(E,E+1,k):h.push(E+1,E,k),w+=3}c.addGroup(m,w,b===!0?1:2),m+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Em{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Ot:new y);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new y,s=[],r=[],o=[],a=new y,l=new Yt;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new y)}r[0]=new y,o[0]=new y;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(oe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(oe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}function uh(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Ru=new y,Cu=new y,il=new uh,sl=new uh,rl=new uh;class bc extends Em{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new y){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Cu.subVectors(s[0],s[1]).add(s[0]),c=Cu);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ru.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ru),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),il.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,p),sl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,p),rl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(il.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),sl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),rl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(il.calc(l),sl.calc(l),rl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new y().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class hs extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const M=m*d-o;for(let T=0;T<c;T++){const b=T*u-r;g.push(b,-M,0),v.push(0,0,1),p.push(T/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const T=M+c*m,b=M+c*(m+1),x=M+1+c*(m+1),A=M+1+c*m;f.push(T,b,A),f.push(b,x,A)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.width,t.height,t.widthSegments,t.heightSegments)}}class ci extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new y,d=new y,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const M=[],T=m/n,b=o+T*a,x=t*Math.cos(b),A=Math.sqrt(t*t-x*x);let _=0;m===0&&o===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){const N=w/e,P=s+N*r;u.x=-A*Math.cos(P),u.y=x,u.z=A*Math.sin(P),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(N+_,1-T),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){const T=h[m][M+1],b=h[m][M],x=h[m+1][M],A=h[m+1][M+1];(m!==0||o>0)&&f.push(T,b,A),(m!==n-1||l<Math.PI)&&f.push(b,x,A)}this.setIndex(f),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Bs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Pu(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Pu(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function dn(i){const t={};for(let e=0;e<i.length;e++){const n=Bs(i[e]);for(const s in n)t[s]=n[s]}return t}function Pu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Am(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Bf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}const Rm={clone:Bs,merge:dn};var Cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cm,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=Am(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Nt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"v3":this.uniforms[n].value=new y().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Yt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Lm extends xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mn extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gn extends mn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ot(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Ds('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Ds('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class zf extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Im extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Fi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function _r(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Dm(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Lu(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)s[o++]=i[a+l]}return s}function Nm(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}class Vs{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Um extends Vs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qh,endingEnd:qh}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yh:r=t,a=2*e-n;break;case Kh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yh:o=t,l=2*n-e;break;case Kh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),v=g*g,p=v*g,m=-d*p+2*d*v-d*g,M=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,T=(-1-f)*p+(1.5+f)*v+.5*g,b=f*p-f*v;for(let x=0;x!==a;++x)r[x]=m*o[h+x]+M*o[c+x]+T*o[l+x]+b*o[u+x];return r}}class Fm extends Vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class Om extends Vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class km extends Vs{interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){const g=(n-e)/(s-e),v=1-g;for(let p=0;p!==a;++p)r[p]=o[c+p]*v+o[l+p]*g;return r}const d=a*2,f=t-1;for(let g=0;g!==a;++g){const v=o[c+g],p=o[l+g],m=f*d+g*2,M=u[m],T=u[m+1],b=t*d+g*2,x=h[b],A=h[b+1],_=zm(n,e,M,x,s);r[g]=Hf(_,v,T,A,p)}return r}}function Hf(i,t,e,n,s){const r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Bm(i,t,e,n,s){const r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function zm(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){const a=Hf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;const l=Bm(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}class $n{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fi(e,this.TimeBufferType),this.values=Fi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Fi(t.times,Array),values:Fi(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),_r(t.settings)&&(n.settings={inTangents:Fi(t.settings.inTangents,Array),outTangents:Fi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Om(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Um(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new km(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Dr:e=this.InterpolantFactoryMethodDiscrete;break;case Nr:e=this.InterpolantFactoryMethodLinear;break;case Ia:e=this.InterpolantFactoryMethodSmooth;break;case Xh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return Ia;case this.InterpolantFactoryMethodBezier:return Xh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;_r(this.settings)&&(Iu(this.settings.inTangents,t),Iu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;_r(this.settings)&&(Du(this.settings.inTangents,t),Du(this.settings.outTangents,t))}return this}trim(t,e){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Qt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Qt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&D0(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){Qt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ia,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=e[u+g];if(v!==e[d+g]||v!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,_r(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}}function Iu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Du(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Nr;class Ws extends $n{constructor(t,e,n){super(t,e,n)}}Ws.prototype.ValueTypeName="bool";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=Dr;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Gf extends $n{constructor(t,e,n,s){super(t,e,n,s)}}Gf.prototype.ValueTypeName="color";class kr extends $n{constructor(t,e,n,s){super(t,e,n,s)}}kr.prototype.ValueTypeName="number";class Hm extends Vs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e);let c=t*a;for(let h=c+a;c!==h;c+=4)ve.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Br extends $n{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Hm(this.times,this.values,this.getValueSize(),t)}}Br.prototype.ValueTypeName="quaternion";Br.prototype.InterpolantFactoryMethodSmooth=void 0;class Xs extends $n{constructor(t,e,n){super(t,e,n)}}Xs.prototype.ValueTypeName="string";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=Dr;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;class ua extends $n{constructor(t,e,n,s){super(t,e,n,s)}}ua.prototype.ValueTypeName="vector";class Gm{constructor(t="",e=-1,n=[],s=S0){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=ui(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Wm(n[o]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push($n.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Dm(l);l=Lu(l,1,h),c=Lu(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new kr(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function Vm(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return kr;case"vector":case"vector2":case"vector3":case"vector4":return ua;case"color":return Gf;case"quaternion":return Br;case"bool":case"boolean":return Ws;case"string":return Xs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Wm(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Vm(i.type);if(i.times===void 0){const n=[],s=[];Nm(i.keys,n,s,"value"),i.times=n,i.values=s}let e;return t.parse!==void 0?e=t.parse(i):e=new t(i.name,i.times,i.values,i.interpolation),_r(i.settings)&&(e.settings={inTangents:Fi(i.settings.inTangents,Float32Array),outTangents:Fi(i.settings.outTangents,Float32Array)}),e}const Si={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Nu(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Nu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Nu(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Xm{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const qm=new Xm;class qs{constructor(t){this.manager=t!==void 0?t:qm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}qs.DEFAULT_MATERIAL_NAME="__DEFAULT";const xi={};class Ym extends Error{constructor(t,e){super(t),this.response=e}}class Vf extends qs{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Si.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(xi[t]!==void 0){xi[t].push({onLoad:e,onProgress:n,onError:s});return}xi[t]=[],xi[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Xt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=xi[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const p=new ReadableStream({start(m){M();function M(){u.read().then(({done:T,value:b})=>{if(T)m.close();else{v+=b.byteLength;const x=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let A=0,_=h.length;A<_;A++){const w=h[A];w.onProgress&&w.onProgress(x)}m.enqueue(b),M()}},T=>{m.error(T)})}}});return new Response(p)}else throw new Ym(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Si.add(`file:${t}`,c);const h=xi[t];delete xi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=xi[t];if(h===void 0)throw this.manager.itemError(t),c;delete xi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ss=new WeakMap;class Km extends qs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Si.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=Ss.get(o);u===void 0&&(u=[],Ss.set(o,u)),u.push({onLoad:e,onError:s})}return o}const a=Fr("img");function l(){h(),e&&e(this);const u=Ss.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Ss.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),Si.remove(`image:${t}`);const d=Ss.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Ss.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Si.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class Zm extends qs{constructor(t){super(t)}load(t,e,n,s){const r=new Xe,o=new Km(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class ya extends De{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class $m extends ya{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ol=new Yt,Uu=new y,Fu=new y;class dh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Uu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uu),Fu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ol,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ur||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yo=new y,Mo=new ve,Jn=new y;class Wf extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(yo,Mo,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,Mo,Jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(yo,Mo,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,Mo,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Di=new y,Ou=new Ot,ku=new Ot;class vn extends Wf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,Ou,ku),e.subVectors(ku,Ou)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Jm extends dh{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=ks*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class jm extends ya{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Jm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class Qm extends dh{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0}}class tg extends ya{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ma extends Wf{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class eg extends dh{constructor(){super(new Ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fh extends ya{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new eg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Er{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const al=new WeakMap;class ng extends qs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Xt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Xt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Si.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{al.has(o)===!0?(s&&s(al.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}const a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Si.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),al.set(l,c),Si.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Si.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const bs=-90,ws=1;class wc extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(bs,ws,t,e);s.layers=this.layers,this.add(s);const r=new vn(bs,ws,t,e);r.layers=this.layers,this.add(r);const o=new vn(bs,ws,t,e);o.layers=this.layers,this.add(o);const a=new vn(bs,ws,t,e);a.layers=this.layers,this.add(a);const l=new vn(bs,ws,t,e);l.layers=this.layers,this.add(l);const c=new vn(bs,ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ig extends vn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class sg{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=rg.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function rg(){this._document.hidden===!1&&this.reset()}const ph="\\[\\]\\.:\\/",og=new RegExp("["+ph+"]","g"),mh="[^"+ph+"]",ag="[^"+ph.replace("\\.","")+"]",lg=/((?:WC+[\/:])*)/.source.replace("WC",mh),cg=/(WCOD+)?/.source.replace("WCOD",ag),hg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mh),ug=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mh),dg=new RegExp("^"+lg+cg+hg+ug+"$"),fg=["material","materials","bones","map"];class pg{constructor(t,e,n){const s=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Te{constructor(t,e,n){this.path=e,this.parsedPath=n||Te.parseTrackName(e),this.node=Te.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Te.Composite(t,e,n):new Te(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(og,"")}static parseTrackName(t){const e=dg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);fg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=Te.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[s];if(o===void 0){const c=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Te.Composite=pg;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Bu=new Yt;class Xf{constructor(t,e,n=0,s=1/0){this.ray=new Gs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new sh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Qt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Bu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bu),this}intersectObject(t,e=!0,n=[]){return Tc(t,this,n,e),n.sort(zu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Tc(t[s],this,n,e);return n.sort(zu),n}}function zu(i,t){return i.distance-t.distance}function Tc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Tc(r[o],t,e,!0)}}class Ec{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=oe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ni=new y,So=new Yt,ll=new Yt;class mg extends ha{constructor(t){const e=qf(t),n=new Me,s=[],r=[];for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new ne(s,3)),n.setAttribute("color",new ne(r,3));const o=new xa({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;const a=new Nt(255),l=new Nt(65280);this.setColors(a,l)}updateMatrixWorld(t){const e=this.bones,n=this.geometry,s=n.getAttribute("position");ll.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){const a=e[r];a.parent&&a.parent.isBone&&(So.multiplyMatrices(ll,a.matrixWorld),Ni.setFromMatrixPosition(So),s.setXYZ(o,Ni.x,Ni.y,Ni.z),So.multiplyMatrices(ll,a.parent.matrixWorld),Ni.setFromMatrixPosition(So),s.setXYZ(o+1,Ni.x,Ni.y,Ni.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){const s=this.geometry.getAttribute("color");for(let r=0;r<s.count;r+=2)s.setXYZ(r,t.r,t.g,t.b),s.setXYZ(r+1,e.r,e.g,e.b);return s.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function qf(i){const t=[];i.isBone===!0&&t.push(i);for(let e=0;e<i.children.length;e++)t.push(...qf(i.children[e]));return t}class gg extends Xi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Hu(i,t,e,n){const s=_g(n);switch(e){case Sf:return i*t;case $c:return i*t/s.components*s.byteLength;case Jc:return i*t/s.components*s.byteLength;case as:return i*t*2/s.components*s.byteLength;case jc:return i*t*2/s.components*s.byteLength;case bf:return i*t*3/s.components*s.byteLength;case Vn:return i*t*4/s.components*s.byteLength;case Qc:return i*t*4/s.components*s.byteLength;case Xo:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yo:case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xl:case Yl:return Math.max(i,16)*Math.max(t,8)/4;case Wl:case ql:return Math.max(i,8)*Math.max(t,8)/2;case Kl:case Zl:case Jl:case jl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $l:case ia:case Ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ic:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case oc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ac:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case lc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case uc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case dc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pc:case mc:case gc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _c:case vc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sa:case xc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _g(i){switch(i){case An:case vf:return{byteLength:1,components:1};case Ir:case xf:case yn:return{byteLength:2,components:1};case Kc:case Zc:return{byteLength:2,components:4};case qn:case Yc:case Nn:return{byteLength:4,components:1};case yf:case Mf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gc}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gc);function Yf(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function vg(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var xg=`#ifdef USE_ALPHAHASH
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
}`,le={alphahash_fragment:xg,alphahash_pars_fragment:yg,alphamap_fragment:Mg,alphamap_pars_fragment:Sg,alphatest_fragment:bg,alphatest_pars_fragment:wg,aomap_fragment:Tg,aomap_pars_fragment:Eg,batching_pars_vertex:Ag,batching_vertex:Rg,begin_vertex:Cg,beginnormal_vertex:Pg,bsdfs:Lg,iridescence_fragment:Ig,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Ng,clipping_planes_pars_fragment:Ug,clipping_planes_pars_vertex:Fg,clipping_planes_vertex:Og,color_fragment:kg,color_pars_fragment:Bg,color_pars_vertex:zg,color_vertex:Hg,common:Gg,defaultnormal_vertex:Vg,displacementmap_pars_vertex:Wg,displacementmap_vertex:Xg,emissivemap_fragment:qg,emissivemap_pars_fragment:Yg,colorspace_fragment:Kg,colorspace_pars_fragment:Zg,envmap_fragment:$g,envmap_common_pars_fragment:Jg,envmap_pars_fragment:jg,envmap_pars_vertex:Qg,envmap_physical_pars_fragment:h_,envmap_vertex:t_,fog_vertex:e_,fog_pars_vertex:n_,fog_fragment:i_,fog_pars_fragment:s_,gradientmap_pars_fragment:r_,lightmap_pars_fragment:o_,lights_lambert_fragment:a_,lights_lambert_pars_fragment:l_,lights_pars_begin:c_,lights_toon_fragment:u_,lights_toon_pars_fragment:d_,lights_phong_fragment:f_,lights_phong_pars_fragment:p_,lights_physical_fragment:m_,lights_physical_pars_fragment:g_,lights_fragment_begin:__,lights_fragment_maps:v_,lights_fragment_end:x_,lightprobes_pars_fragment:y_,logdepthbuf_fragment:M_,logdepthbuf_pars_fragment:S_,logdepthbuf_pars_vertex:b_,logdepthbuf_vertex:w_,map_fragment:T_,map_pars_fragment:E_,map_particle_fragment:A_,map_particle_pars_fragment:R_,metalnessmap_fragment:C_,metalnessmap_pars_fragment:P_,morphinstance_vertex:L_,morphcolor_vertex:I_,morphnormal_vertex:D_,morphtarget_pars_vertex:N_,morphtarget_vertex:U_,normal_fragment_begin:F_,normal_fragment_maps:O_,normal_pars_fragment:k_,normal_pars_vertex:B_,normal_vertex:z_,normalmap_pars_fragment:H_,clearcoat_normal_fragment_begin:G_,clearcoat_normal_fragment_maps:V_,clearcoat_pars_fragment:W_,iridescence_pars_fragment:X_,opaque_fragment:q_,packing:Y_,premultiplied_alpha_fragment:K_,project_vertex:Z_,dithering_fragment:$_,dithering_pars_fragment:J_,roughnessmap_fragment:j_,roughnessmap_pars_fragment:Q_,shadowmap_pars_fragment:tv,shadowmap_pars_vertex:ev,shadowmap_vertex:nv,shadowmask_pars_fragment:iv,skinbase_vertex:sv,skinning_pars_vertex:rv,skinning_vertex:ov,skinnormal_vertex:av,specularmap_fragment:lv,specularmap_pars_fragment:cv,tonemapping_fragment:hv,tonemapping_pars_fragment:uv,transmission_fragment:dv,transmission_pars_fragment:fv,uv_pars_fragment:pv,uv_pars_vertex:mv,uv_vertex:gv,worldpos_vertex:_v,background_vert:vv,background_frag:xv,backgroundCube_vert:yv,backgroundCube_frag:Mv,cube_vert:Sv,cube_frag:bv,depth_vert:wv,depth_frag:Tv,distance_vert:Ev,distance_frag:Av,equirect_vert:Rv,equirect_frag:Cv,linedashed_vert:Pv,linedashed_frag:Lv,meshbasic_vert:Iv,meshbasic_frag:Dv,meshlambert_vert:Nv,meshlambert_frag:Uv,meshmatcap_vert:Fv,meshmatcap_frag:Ov,meshnormal_vert:kv,meshnormal_frag:Bv,meshphong_vert:zv,meshphong_frag:Hv,meshphysical_vert:Gv,meshphysical_frag:Vv,meshtoon_vert:Wv,meshtoon_frag:Xv,points_vert:qv,points_frag:Yv,shadow_vert:Kv,shadow_frag:Zv,sprite_vert:$v,sprite_frag:Jv},Lt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ii={basic:{uniforms:dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:dn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:dn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:dn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:dn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:dn([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:dn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:dn([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:dn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:dn([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:dn([Lt.common,Lt.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:dn([Lt.lights,Lt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};ii.physical={uniforms:dn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const bo={r:0,b:0,g:0},jv=new Yt,Kf=new Jt;Kf.set(-1,0,0,0,1,0,0,0,1);function Qv(i,t,e,n,s,r){const o=new Nt(0);let a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const b=M.backgroundBlurriness>0;T=t.get(T,b)}return T}function g(M){let T=!1;const b=f(M);b===null?p(o,a):b&&b.isColor&&(p(b,1),T=!0);const x=i.xr.getEnvironmentBlendMode();x==="additive"?e.buffers.color.setClear(0,0,0,1,r):x==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,T){const b=f(T);b&&b.isCubeTexture?(c===void 0&&(c=new me(new Wr(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Bs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jv.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Kf),c.material.toneMapped=de.getTransfer(b.colorSpace)!==we,(h!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new me(new hs(2,2),new xn({name:"BackgroundMaterial",uniforms:Bs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=de.getTransfer(b.colorSpace)!==we,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,T){M.getRGB(bo,Bf(i)),e.buffers.color.setClear(bo.r,bo.g,bo.b,T,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),a=T,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:g,addToRenderList:v,dispose:m}}function tx(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(D,L,k,E,I){let F=!1;const O=u(D,E,k,L);r!==O&&(r=O,c(r.object)),F=f(D,E,k,I),F&&g(D,E,k,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,b(D,L,k,E),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function u(D,L,k,E){const I=E.wireframe===!0;let F=n[L.id];F===void 0&&(F={},n[L.id]=F);const O=D.isInstancedMesh===!0?D.id:0;let K=F[O];K===void 0&&(K={},F[O]=K);let H=K[k.id];H===void 0&&(H={},K[k.id]=H);let V=H[I];return V===void 0&&(V=d(l()),H[I]=V),V}function d(D){const L=[],k=[],E=[];for(let I=0;I<e;I++)L[I]=0,k[I]=0,E[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:E,object:D,attributes:{},index:null}}function f(D,L,k,E){const I=r.attributes,F=L.attributes;let O=0;const K=k.getAttributes();for(const H in K)if(K[H].location>=0){const Y=I[H];let Q=F[H];if(Q===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Y===void 0||Y.attribute!==Q||Q&&Y.data!==Q.data)return!0;O++}return r.attributesNum!==O||r.index!==E}function g(D,L,k,E){const I={},F=L.attributes;let O=0;const K=k.getAttributes();for(const H in K)if(K[H].location>=0){let Y=F[H];Y===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor));const Q={};Q.attribute=Y,Y&&Y.data&&(Q.data=Y.data),I[H]=Q,O++}r.attributes=I,r.attributesNum=O,r.index=E}function v(){const D=r.newAttributes;for(let L=0,k=D.length;L<k;L++)D[L]=0}function p(D){m(D,0)}function m(D,L){const k=r.newAttributes,E=r.enabledAttributes,I=r.attributeDivisors;k[D]=1,E[D]===0&&(i.enableVertexAttribArray(D),E[D]=1),I[D]!==L&&(i.vertexAttribDivisor(D,L),I[D]=L)}function M(){const D=r.newAttributes,L=r.enabledAttributes;for(let k=0,E=L.length;k<E;k++)L[k]!==D[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function T(D,L,k,E,I,F,O){O===!0?i.vertexAttribIPointer(D,L,k,I,F):i.vertexAttribPointer(D,L,k,E,I,F)}function b(D,L,k,E){v();const I=E.attributes,F=k.getAttributes(),O=L.defaultAttributeValues;for(const K in F){const H=F[K];if(H.location>=0){let V=I[K];if(V===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(V=D.instanceColor)),V!==void 0){const Y=V.normalized,Q=V.itemSize,q=t.get(V);if(q===void 0)continue;const U=q.buffer,Z=q.type,W=q.bytesPerElement,st=Z===i.INT||Z===i.UNSIGNED_INT||V.gpuType===Yc;if(V.isInterleavedBufferAttribute){const J=V.data,ut=J.isInterleavedBuffer===!0?J.stride:J.itemSize,pt=V.offset;if(J.isInstancedInterleavedBuffer||J.isInstancedBufferAttribute){for(let lt=0;lt<H.locationSize;lt++)m(H.location+lt,J.meshPerAttribute);D.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let lt=0;lt<H.locationSize;lt++)p(H.location+lt);i.bindBuffer(i.ARRAY_BUFFER,U);for(let lt=0;lt<H.locationSize;lt++)T(H.location+lt,Q/H.locationSize,Z,Y,ut*W,(pt+Q/H.locationSize*lt)*W,st)}else{if(V.isInstancedBufferAttribute){for(let J=0;J<H.locationSize;J++)m(H.location+J,V.meshPerAttribute);D.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let J=0;J<H.locationSize;J++)p(H.location+J);i.bindBuffer(i.ARRAY_BUFFER,U);for(let J=0;J<H.locationSize;J++)T(H.location+J,Q/H.locationSize,Z,Y,Q*W,Q/H.locationSize*J*W,st)}}else if(O!==void 0){const Y=O[K];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(H.location,Y);break;case 3:i.vertexAttrib3fv(H.location,Y);break;case 4:i.vertexAttrib4fv(H.location,Y);break;default:i.vertexAttrib1fv(H.location,Y)}}}}M()}function x(){N();for(const D in n){const L=n[D];for(const k in L){const E=L[k];for(const I in E){const F=E[I];for(const O in F)h(F[O].object),delete F[O];delete E[I]}}delete n[D]}}function A(D){if(n[D.id]===void 0)return;const L=n[D.id];for(const k in L){const E=L[k];for(const I in E){const F=E[I];for(const O in F)h(F[O].object),delete F[O];delete E[I]}}delete n[D.id]}function _(D){for(const L in n){const k=n[L];for(const E in k){const I=k[E];if(I[D.id]===void 0)continue;const F=I[D.id];for(const O in F)h(F[O].object),delete F[O];delete I[D.id]}}}function w(D){for(const L in n){const k=n[L],E=D.isInstancedMesh===!0?D.id:0,I=k[E];if(I!==void 0){for(const F in I){const O=I[F];for(const K in O)h(O[K].object),delete O[K];delete I[F]}delete k[E],Object.keys(k).length===0&&delete n[L]}}}function N(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:P,dispose:x,releaseStatesOfGeometry:A,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function ex(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function nx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Vn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){const w=_===yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==An&&_!==Nn&&!w&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Xt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Xt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:b,maxSamples:x,samples:A}}function ix(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new En,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const M=r?0:n,T=M*4;let b=m.clippingState||null;l.value=b,b=h(g,d,T,f);for(let x=0;x!==T;++x)b[x]=e[x];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=f+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,b=f;T!==v;++T,b+=4)o.copy(u[T]).applyMatrix4(M,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}class gh extends an{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ff(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wr(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Is});r.uniforms.tEquirect.value=e;const o=new me(s,r),a=e.minFilter;return e.minFilter===ri&&(e.minFilter=je),new wc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Gu=256,sx=3,rx=20,Zf=256,$f=16,ox=3,ax=new y,lx=new Nt;class zr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new wc(1,10,null),this._boxMesh=new me(new Wr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=ax}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(lx));const p=new wc(n,s,h);return p.position.copy(a),p.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Gu,Pf(t))}_fromTexture(t,e){t.mapping===Fs||t.mapping===Lr?this._setSize(t.image.length===0?Gu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=Vu(t,!1,!1),n=Math.log2(t)-sx;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Vu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Fs||t.mapping===Lr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=cx(),this._integrationMaterial=hx());const e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/$f);for(let o=0;o<=n;o++){const a=zr.lodToRoughness(o,n);if(o>n-ox)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(Zf*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=ux());const n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}}function Vu(i,t,e){return new gh(i,{minFilter:ri,generateMipmaps:t,type:yn,colorSpace:Mn,depthBuffer:e})}function qr(i,t,e){return new xn({name:i,uniforms:t,vertexShader:le.cube_vert,fragmentShader:e,side:pn,blending:Is,depthTest:!1,depthWrite:!1})}function cx(){return qr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function Wu(){return qr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Xu(){return qr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function dx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Pa||f===La)if(t.has(d)){const g=t.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new gh(g.height);return v.fromEquirectangularTexture(i,d),t.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,g=f===Pa||f===La,v=f===Fs||f===Lr;if(g||v){let p=e.get(d);const m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new zr(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const M=d.image;return g&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new zr(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===Pa?d.mapping=Fs:f===La&&(d.mapping=Lr),d}function l(d){let f=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){const f=d.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function fx(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ds("WebGLRenderer: "+n+" extension not supported."),s}}}function px(i,t,e,n){const s={},r=new WeakMap,o=new FinalizationRegistry(g=>delete s[g]);function a(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(const p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete s[g.id],o.unregister(g);const v=r.get(g);v&&(t.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),e.memory.geometries++),v}function h(g){const v=g.attributes;for(const p in v)t.update(v[p],i.ARRAY_BUFFER)}function u(g){const v=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const M=v!==null?v.array.length:p.array.length/3-1,T=p.count>=65535?Df:ga,b=new T(Math.ceil(M/3)*6,1),x=b.array;if(v!==null){const _=v.array;m=v.version;for(let w=0,N=0;w<M;w+=3){const P=_[w+0],D=_[w+1],L=_[w+2];x[N++]=P,x[N++]=D,x[N++]=D,x[N++]=L,x[N++]=L,x[N++]=P}}else{m=p.version;for(let _=0,w=0;_<M;_+=3){const N=_+0,P=_+1,D=_+2;x[w++]=N,x[w++]=P,x[w++]=P,x[w++]=D,x[w++]=D,x[w++]=N}}b.version=m;const A=r.get(g);A&&t.remove(A),r.set(g,b)}function d(g){const v=r.get(g);if(v){const p=g.index;p!==null&&v.version<p.version&&u(g)}else u(g);return r.get(g)}function f(){for(const g in s){const v=s[g].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function mx(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let p=0;p<f;p++)v+=d[p];e.update(v,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function gx(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Qt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function _x(i,t,e){const n=new WeakMap,s=new Ae;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let P=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",P)};var f=P;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),p===!0&&(b=3);let x=a.attributes.position.count*b,A=1;x>t.maxTextureSize&&(A=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const _=new Float32Array(x*A*4*u),w=new Lf(_,x,A,u);w.type=Nn,w.needsUpdate=!0;const N=b*4;for(let D=0;D<u;D++){const L=m[D],k=M[D],E=T[D],I=x*A*4*D;for(let F=0;F<L.count;F++){const O=F*N;g===!0&&(s.fromBufferAttribute(L,F),_[I+O+0]=s.x,_[I+O+1]=s.y,_[I+O+2]=s.z,_[I+O+3]=0),v===!0&&(s.fromBufferAttribute(k,F),_[I+O+4]=s.x,_[I+O+5]=s.y,_[I+O+6]=s.z,_[I+O+7]=0),p===!0&&(s.fromBufferAttribute(E,F),_[I+O+8]=s.x,_[I+O+9]=s.y,_[I+O+10]=s.z,_[I+O+11]=E.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new Ot(x,A)},n.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function vx(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const xx={[ff]:"LINEAR_TONE_MAPPING",[Vc]:"REINHARD_TONE_MAPPING",[pf]:"CINEON_TONE_MAPPING",[Wc]:"ACES_FILMIC_TONE_MAPPING",[Xc]:"AGX_TONE_MAPPING",[qc]:"NEUTRAL_TONE_MAPPING",[mf]:"CUSTOM_TONE_MAPPING"};function yx(i,t,e,n,s,r){const o=new an(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new Me;h.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ne([0,2,0,0,2,0],2));const u=new Lm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new me(h,u),f=new Ma(-1,1,1,-1,0,1);let g=null,v=null,p=!1,m,M=null,T=[],b=!1;this.setSize=function(x,A){o.setSize(x,A),a!==null&&a.setSize(x,A),l!==null&&l.setSize(x,A);for(let _=0;_<T.length;_++){const w=T[_];w.setSize&&w.setSize(x,A)}},this.setEffects=function(x){T=x,b=T.length>0&&T[0].isRenderPass===!0;const A=o.width,_=o.height;T.length>0&&a===null&&(a=new an(A,_,{type:yn,depthBuffer:!1,stencilBuffer:!1}),l=new an(A,_,{type:yn,depthBuffer:!1,stencilBuffer:!1}));const w=s===!0&&T.some(N=>N.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new ls(A,_),r===!0&&(c.format=Hi,c.type=Os)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let N=0;N<T.length;N++){const P=T[N];P.setSize&&P.setSize(A,_),w&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(x,A){if(p||x.toneMapping===oi&&T.length===0)return!1;if(M=A,A!==null){const _=A.width,w=A.height;(o.width!==_||o.height!==w)&&this.setSize(_,w)}return b===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=oi,!0},this.hasRenderPass=function(){return b},this.end=function(x,A){x.toneMapping=m,p=!0;let _=o,w=a;for(let N=0;N<T.length;N++){const P=T[N];P.enabled!==!1&&(P.render(x,w,_,A),P.needsSwap!==!1&&(_=w,w=w===a?l:a))}if(g!==x.outputColorSpace||v!==x.toneMapping){g=x.outputColorSpace,v=x.toneMapping,u.defines={},de.getTransfer(g)===we&&(u.defines.SRGB_TRANSFER="");const N=xx[v];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,x.setRenderTarget(M),x.render(d,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const Jf=new Xe,jf=new ls(1,1),Qf=new Of(1),tp=new Lf,ep=new im,np=new Ff,qu=[],Yu=[],Ku=new Float32Array(16),Zu=new Float32Array(9),$u=new Float32Array(4);function Ys(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=qu[s];if(r===void 0&&(r=new Float32Array(s),qu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Sa(i,t){let e=Yu[t];e===void 0&&(e=new Int32Array(t),Yu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2fv(this.addr,t),Ye(e,t)}}function bx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;i.uniform3fv(this.addr,t),Ye(e,t)}}function wx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4fv(this.addr,t),Ye(e,t)}}function Tx(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;$u.set(n),i.uniformMatrix2fv(this.addr,!1,$u),Ye(e,n)}}function Ex(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Zu.set(n),i.uniformMatrix3fv(this.addr,!1,Zu),Ye(e,n)}}function Ax(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,n))return;Ku.set(n),i.uniformMatrix4fv(this.addr,!1,Ku),Ye(e,n)}}function Rx(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2iv(this.addr,t),Ye(e,t)}}function Px(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3iv(this.addr,t),Ye(e,t)}}function Lx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4iv(this.addr,t),Ye(e,t)}}function Ix(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;i.uniform2uiv(this.addr,t),Ye(e,t)}}function Nx(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;i.uniform3uiv(this.addr,t),Ye(e,t)}}function Ux(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;i.uniform4uiv(this.addr,t),Ye(e,t)}}function ba(i){return i.version===0&&(i.compareFunction=Af,i.needsUpdate=!0),i}function Fx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ba(jf):r=Jf,e.setTexture2D(t||r,s)}function Ox(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ep,s)}function kx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ba(Qf):r=np,e.setTextureCube(t||r,s)}function Bx(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||tp,s)}function zx(i){switch(i){case 5126:return Mx;case 35664:return Sx;case 35665:return bx;case 35666:return wx;case 35674:return Tx;case 35675:return Ex;case 35676:return Ax;case 5124:case 35670:return Rx;case 35667:case 35671:return Cx;case 35668:case 35672:return Px;case 35669:case 35673:return Lx;case 5125:return Ix;case 36294:return Dx;case 36295:return Nx;case 36296:return Ux;case 35678:case 36198:case 36298:case 36306:case 35682:return Fx;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return Bx}}function Hx(i,t){i.uniform1fv(this.addr,t)}function Gx(i,t){const e=Ys(t,this.size,2);i.uniform2fv(this.addr,e)}function Vx(i,t){const e=Ys(t,this.size,3);i.uniform3fv(this.addr,e)}function Wx(i,t){const e=Ys(t,this.size,4);i.uniform4fv(this.addr,e)}function Xx(i,t){const e=Ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qx(i,t){const e=Ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yx(i,t){const e=Ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Kx(i,t){i.uniform1iv(this.addr,t)}function Zx(i,t){i.uniform2iv(this.addr,t)}function $x(i,t){i.uniform3iv(this.addr,t)}function Jx(i,t){i.uniform4iv(this.addr,t)}function jx(i,t){i.uniform1uiv(this.addr,t)}function Qx(i,t){i.uniform2uiv(this.addr,t)}function ty(i,t){i.uniform3uiv(this.addr,t)}function ey(i,t){i.uniform4uiv(this.addr,t)}function ny(i,t,e){const n=this.cache,s=t.length,r=Sa(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ba(jf):o=Jf;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function iy(i,t,e){const n=this.cache,s=t.length,r=Sa(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ep,r[o])}function sy(i,t,e){const n=this.cache,s=t.length,r=Sa(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=ba(Qf):o=np;for(let a=0;a!==s;++a)e.setTextureCube(t[a]||o,r[a])}function ry(i,t,e){const n=this.cache,s=t.length,r=Sa(e,s);qe(n,r)||(i.uniform1iv(this.addr,r),Ye(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||tp,r[o])}function oy(i){switch(i){case 5126:return Hx;case 35664:return Gx;case 35665:return Vx;case 35666:return Wx;case 35674:return Xx;case 35675:return qx;case 35676:return Yx;case 5124:case 35670:return Kx;case 35667:case 35671:return Zx;case 35668:case 35672:return $x;case 35669:case 35673:return Jx;case 5125:return jx;case 36294:return Qx;case 36295:return ty;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ry}}class ay{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zx(e.type)}}class ly{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=oy(e.type)}}class cy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const cl=/(\w+)(\])?(\[|\.)?/g;function Ju(i,t){i.seq.push(t),i.map[t.id]=t}function hy(i,t,e){const n=i.name,s=n.length;for(cl.lastIndex=0;;){const r=cl.exec(n),o=cl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ju(e,c===void 0?new ay(a,i,t):new ly(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new cy(a),Ju(e,u)),e=u}}}class Zo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);hy(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ju(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const uy=37297;let dy=0;function fy(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Qu=new Jt;function py(i){de._getMatrix(Qu,de.workingColorSpace,i);const t=`mat3( ${Qu.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(i)){case ra:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function td(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+fy(i.getShaderSource(t),a)}else return r}function my(i,t){const e=py(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const gy={[ff]:"Linear",[Vc]:"Reinhard",[pf]:"Cineon",[Wc]:"ACESFilmic",[Xc]:"AgX",[qc]:"Neutral",[mf]:"Custom"};function _y(i,t){const e=gy[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wo=new y;function vy(){de.getLuminanceCoefficients(wo);const i=wo.x.toFixed(4),t=wo.y.toFixed(4),e=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function yy(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function My(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function vr(i){return i!==""}function ed(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function nd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(i){return i.replace(Sy,by)}function by(i,t){const e=le[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ac(e)}const wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(i){return i.replace(wy,Ty)}function Ty(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sd(i){let t=`precision ${i.precision} float;
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
`)):(v=[sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),p=[sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?le.tonemapping_pars_fragment:"",e.toneMapping!==oi?_y("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,my("linearToOutputTexel",e.outputColorSpace),vy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vr).join(`
`)),o=Ac(o),o=ed(o,e),o=nd(o,e),a=Ac(a),a=ed(a,e),a=nd(a,e),o=id(o),a=id(a),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===$h?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=m+v+o,T=m+p+a,b=ju(s,s.VERTEX_SHADER,M),x=ju(s,s.FRAGMENT_SHADER,T);s.attachShader(g,b),s.attachShader(g,x),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(P){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(g)||"",L=s.getShaderInfoLog(b)||"",k=s.getShaderInfoLog(x)||"",E=D.trim(),I=L.trim(),F=k.trim();let O=!0,K=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,b,x);else{const H=td(s,b,"vertex"),V=td(s,x,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+E+`
`+H+`
`+V)}else E!==""?Xt("WebGLProgram: Program Info Log:",E):(I===""||F==="")&&(K=!1);K&&(P.diagnostics={runnable:O,programLog:E,vertexShader:{log:I,prefix:v},fragmentShader:{log:F,prefix:p}})}s.deleteShader(b),s.deleteShader(x),_=new Zo(s,g),w=My(s,g)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,uy)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dy++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=x,this}let Dy=0;class Ny{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Uy(t),e.set(t,n)),n}}class Uy{constructor(t){this.id=Dy++,this.code=t,this.usedTimes=0}}function Fy(i){return i===as||i===ia||i===sa}function Oy(i,t,e,n,s,r){const o=new sh,a=new Ny,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,w,N,P,D,L){const k=P.fog,E=D.geometry,I=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=t.get(_.envMap||I,F),K=d[_.type];let H=n.precision;_.precision!==null&&(H=n.getMaxPrecision(_.precision),H!==_.precision&&Xt("WebGLProgram.getParameters:",_.precision,"not supported, using",H,"instead."));const V=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,Y=V!==void 0?V.length:0;let Q=0;E.morphAttributes.position!==void 0&&(Q=1),E.morphAttributes.normal!==void 0&&(Q=2),E.morphAttributes.color!==void 0&&(Q=3);let q,U,Z,W;if(K){const Pt=ii[K];q=Pt.vertexShader,U=Pt.fragmentShader}else{q=_.vertexShader,U=_.fragmentShader;const Pt=a.getVertexShaderStage(_),be=a.getFragmentShaderStage(_);a.update(_,Pt,be),Z=Pt.id,W=be.id}const st=i.getRenderTarget(),J=i.state.buffers.depth.getReversed(),ut=D.isInstancedMesh===!0,pt=D.isBatchedMesh===!0,lt=!!_.map,Et=!!_.matcap,Gt=!!O,Ft=Gt&&O.isPMREMTexture===!0,ue=!!_.aoMap,Wt=!!_.lightMap,$t=!!_.bumpMap&&_.wireframe===!1,It=!!_.normalMap,dt=!!_.displacementMap,Zt=!!_.emissiveMap,ee=!!_.metalnessMap,ce=!!_.roughnessMap,ie=_.anisotropy>0,G=_.clearcoat>0,Se=_.diffuseRoughness>0,jt=_.dispersion>0,ge=_.retroreflectivity>0,mt=_.iridescence>0,Ht=_.sheen>0,yt=_.transmission>0,Ct=ie&&!!_.anisotropyMap,C=G&&!!_.clearcoatMap,S=G&&!!_.clearcoatNormalMap,X=G&&!!_.clearcoatRoughnessMap,ct=Se&&!!_.diffuseRoughnessMap,ot=mt&&!!_.iridescenceMap,gt=mt&&!!_.iridescenceThicknessMap,xt=Ht&&!!_.sheenColorMap,et=Ht&&!!_.sheenRoughnessMap,rt=!!_.specularMap,St=!!_.specularColorMap,B=!!_.specularIntensityMap,at=yt&&!!_.transmissionMap,nt=yt&&!!_.thicknessMap,bt=!!_.gradientMap,vt=!!_.alphaMap,Mt=_.alphaTest>0,qt=!!_.alphaHash,ae=!!_.extensions;let ft=oi;_.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ft=i.toneMapping);const Kt=Ft?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,re={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:q,fragmentShader:U,defines:_.defines,customVertexShaderID:Z,customFragmentShaderID:W,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:H,batching:pt,batchingColor:pt&&D._colorsTexture!==null,instancing:ut,instancingColor:ut&&D.instanceColor!==null,instancingMorph:ut&&D.morphTexture!==null,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:lt,matcap:Et,envMap:Gt,envMapMode:Gt&&O.mapping,envMapPMREM:Ft,envMapMaxLod:Ft?Kt.length-1:null,envMapSize:Ft?Kt[0].width:null,aoMap:ue,lightMap:Wt,bumpMap:$t,normalMap:It,displacementMap:dt,emissiveMap:Zt,normalMapObjectSpace:It&&_.normalMapType===T0,normalMapTangentSpace:It&&_.normalMapType===Mc,packedNormalMap:It&&_.normalMapType===Mc&&Fy(_.normalMap.format),metalnessMap:ee,roughnessMap:ce,anisotropy:ie,anisotropyMap:Ct,clearcoat:G,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:X,diffuseRoughness:Se,diffuseRoughnessMap:ct,dispersion:jt,retroreflection:ge,iridescence:mt,iridescenceMap:ot,iridescenceThicknessMap:gt,sheen:Ht,sheenColorMap:xt,sheenRoughnessMap:et,specularMap:rt,specularColorMap:St,specularIntensityMap:B,transmission:yt,transmissionMap:at,thicknessMap:nt,gradientMap:bt,opaque:_.transparent===!1&&_.blending===br&&_.alphaToCoverage===!1,alphaMap:vt,alphaTest:Mt,alphaHash:qt,combine:_.combine,mapUv:lt&&f(_.map.channel),aoMapUv:ue&&f(_.aoMap.channel),lightMapUv:Wt&&f(_.lightMap.channel),bumpMapUv:$t&&f(_.bumpMap.channel),normalMapUv:It&&f(_.normalMap.channel),displacementMapUv:dt&&f(_.displacementMap.channel),emissiveMapUv:Zt&&f(_.emissiveMap.channel),metalnessMapUv:ee&&f(_.metalnessMap.channel),roughnessMapUv:ce&&f(_.roughnessMap.channel),anisotropyMapUv:Ct&&f(_.anisotropyMap.channel),clearcoatMapUv:C&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ct&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ot&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:et&&f(_.sheenRoughnessMap.channel),specularMapUv:rt&&f(_.specularMap.channel),specularColorMapUv:St&&f(_.specularColorMap.channel),specularIntensityMapUv:B&&f(_.specularIntensityMap.channel),transmissionMapUv:at&&f(_.transmissionMap.channel),thicknessMapUv:nt&&f(_.thicknessMap.channel),alphaMapUv:vt&&f(_.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(It||ie),vertexNormals:!!E.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!E.attributes.uv&&(lt||vt),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||E.attributes.normal===void 0&&It===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:J,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:E.attributes.position!==void 0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:Q,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:L.filter(Pt=>Pt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:lt&&_.map.isVideoTexture===!0&&de.getTransfer(_.map.colorSpace)===we,decodeVideoTextureEmissive:Zt&&_.emissiveMap.isVideoTexture===!0&&de.getTransfer(_.emissiveMap.colorSpace)===we,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Be,flipSided:_.side===pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ae&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&_.extensions.multiDraw===!0||pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function v(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)w.push(N),w.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(p(w,_),m(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function m(_,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function M(_){const w=d[_.type];let N;if(w){const P=ii[w];N=Rm.clone(P.uniforms)}else N=_.uniforms;return N}function T(_,w){let N=h.get(w);return N!==void 0?++N.usedTimes:(N=new Iy(i,w,_,s),c.push(N),h.set(w,N)),N}function b(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function x(_){a.remove(_)}function A(){a.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:M,acquireProgram:T,releaseProgram:b,releaseShaderCache:x,programs:c,dispose:A}}function ky(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function By(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function rd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function od(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,v,p,m){let M=i[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:m},i[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=o(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=p,M.group=m),t++,M}function l(d,f,g,v,p,m,M){M.reversedDepth===!0&&(p=-p);const T=a(d,f,g,v,p,m);g.transmission>0?n.push(T):g.transparent===!0?s.push(T):e.push(T)}function c(d,f,g,v,p,m){const M=a(d,f,g,v,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(d,f){e.length>1&&e.sort(d||By),n.length>1&&n.sort(f||rd),s.length>1&&s.sort(f||rd)}function u(){for(let d=t,f=i.length;d<f;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function zy(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new od,i.set(n,[o])):s>=r.length?(o=new od,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Hy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new y,color:new Nt};break;case"SpotLight":e={position:new y,direction:new y,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new y,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new y,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new y,halfWidth:new y,halfHeight:new y};break}return i[t.id]=e,e}}}function Gy(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Vy=0;function Wy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Xy(i){const t=new Hy,e=Gy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new y);const s=new y,r=new Yt,o=new Yt;function a(c){let h=0,u=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,M=0,T=0,b=0,x=0,A=0,_=0,w=0,N=0,P=0;c.sort(Wy);for(let L=0,k=c.length;L<k;L++){const E=c[L],I=E.color,F=E.intensity,O=E.distance;let K=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===as?K=E.shadow.map.texture:K=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)h+=I.r*F,u+=I.g*F,d+=I.b*F;else if(E.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(E.sh.coefficients[H],F);P++}else if(E.isSunLight){const H=t.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const V=E.shadow,Y=e.get(E);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[g]=Y,n.sunShadowMap[g]=K;const Q=V.getViewportCount();for(let q=0;q<Q;q++)n.sunShadowMatrix[v+q]=V.getMatrix(q),n.sunShadowCascade[v+q]=V._cascadeData[q];v+=Q,g++}n.sun[f]=H,f++}else if(E.isDirectionalLight){const H=t.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const V=E.shadow,Y=e.get(E);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=E.shadow.matrix,x++}n.directional[p]=H,p++}else if(E.isSpotLight){const H=t.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(I).multiplyScalar(F),H.distance=O,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,n.spot[M]=H;const V=E.shadow;if(E.map&&(n.spotLightMap[w]=E.map,w++,V.updateMatrices(E),E.castShadow&&N++),n.spotLightMatrix[M]=V.matrix,E.castShadow){const Y=e.get(E);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,n.spotShadow[M]=Y,n.spotShadowMap[M]=K,_++}M++}else if(E.isRectAreaLight){const H=t.get(E);H.color.copy(I).multiplyScalar(F),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),n.rectArea[T]=H,T++}else if(E.isPointLight){const H=t.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),H.distance=E.distance,H.decay=E.decay,E.castShadow){const V=E.shadow,Y=e.get(E);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,Y.shadowCameraNear=V.camera.near,Y.shadowCameraFar=V.camera.far,n.pointShadow[m]=Y,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=E.shadow.matrix,A++}n.point[m]=H,m++}else if(E.isHemisphereLight){const H=t.get(E);H.skyColor.copy(E.color).multiplyScalar(F),H.groundColor.copy(E.groundColor).multiplyScalar(F),n.hemi[b]=H,b++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==M||D.rectAreaLength!==T||D.hemiLength!==b||D.numSunShadows!==g||D.numDirectionalShadows!==x||D.numPointShadows!==A||D.numSpotShadows!==_||D.numSpotMaps!==w||D.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=T,n.point.length=m,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.directionalShadowMatrix.length=x,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+w-N,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=P,D.sunLength=f,D.directionalLength=p,D.pointLength=m,D.spotLength=M,D.rectAreaLength=T,D.hemiLength=b,D.numSunShadows=g,D.numDirectionalShadows=x,D.numPointShadows=A,D.numSpotShadows=_,D.numSpotMaps=w,D.numLightProbes=P,n.version=Vy++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,p=0;const m=h.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){const b=c[M];if(b.isSunLight){const x=n.sun[u];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),u++}else if(b.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(b.isSpotLight){const x=n.spot[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),g++}else if(b.isRectAreaLight){const x=n.rectArea[v];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const x=n.hemi[p];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function ad(i){const t=new Xy(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function o(u){u.isLightProbeGrid?s.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function qy(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ad(i),t.set(s,[a])):r>=o.length?(a=new ad(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Yy=`void main() {
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
}`,Zy=[new y(1,0,0),new y(-1,0,0),new y(0,1,0),new y(0,-1,0),new y(0,0,1),new y(0,0,-1)],$y=[new y(0,-1,0),new y(0,-1,0),new y(0,0,1),new y(0,0,-1),new y(0,-1,0),new y(0,-1,0)],ld=new Yt,sr=new y,hl=new y;function Jy(i,t,e){let n=new Or;const s=new Ot,r=new Ot,o=new Ae,a=new zf,l=new Im,c={},h=e.maxTextureSize,u={[Gi]:pn,[pn]:Gi,[Be]:Be},d=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:Yy,fragmentShader:Ky}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new me(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sr;let m=this.type;this.render=function(A,_,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===t0&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sr);const N=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Is),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const k=m!==this.type;k&&_.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(I=>I.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,I=A.length;E<I;E++){const F=A[E],O=F.shadow;if(O===void 0){Xt("WebGLShadowMap:",F,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const K=O.getFrameExtents();s.multiply(K),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,O.mapSize.y=r.y));const H=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=H,O.map===null||k===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===mr){if(F.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new an(s.x,s.y,{format:as,type:yn,minFilter:je,magFilter:je,generateMipmaps:!1}),O.map.texture.name=F.name+".shadowMap",O.map.depthTexture=new ls(s.x,s.y,Nn),O.map.depthTexture.name=F.name+".shadowMapDepth",O.map.depthTexture.format=Vi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Fe,O.map.depthTexture.magFilter=Fe}else F.isPointLight?(O.map=new gh(s.x),O.map.depthTexture=new Of(s.x,qn)):(O.map=new an(s.x,s.y),O.map.depthTexture=new ls(s.x,s.y,qn)),O.map.depthTexture.name=F.name+".shadowMap",O.map.depthTexture.format=Vi,this.type===Sr?(O.map.depthTexture.compareFunction=H?Ef:Tf,O.map.depthTexture.minFilter=je,O.map.depthTexture.magFilter=je):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Fe,O.map.depthTexture.magFilter=Fe);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);const V=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();F.isPointLight!==!0&&O.updateMatrices(F,w);const Y=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:w.layers;for(let Q=0;Q<V;Q++){const q=O.getCamera(Q);if(F.isPointLight){const U=O.camera,Z=O.matrix,W=F.distance||U.far;W!==U.far&&(U.far=W,U.updateProjectionMatrix()),sr.setFromMatrixPosition(F.matrixWorld),U.position.copy(sr),hl.copy(U.position),hl.add(Zy[Q]),U.up.copy($y[Q]),U.lookAt(hl),U.updateMatrixWorld(),Z.makeTranslation(-sr.x,-sr.y,-sr.z),ld.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),O._frustum.setFromProjectionMatrix(ld,U.coordinateSystem,U.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(O.map),i.clear());const U=O.getViewport(Q);o.set(r.x*U.x,r.y*U.y,r.x*U.z,r.y*U.w),L.viewport(o)}n=O.getFrustum(Q),b(_,w,q,F,Y,this.type)}O.isPointLightShadow!==!0&&this.type===mr&&M(O,w),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(N,P,D)};function M(A,_){const w=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new an(s.x,s.y,{format:as,type:yn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(_,null,w,d,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(_,null,w,f,v,null)}function T(A,_,w,N){let P=null;const D=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)P=D;else if(P=w.isPointLight===!0?l:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const L=P.uuid,k=_.uuid;let E=c[L];E===void 0&&(E={},c[L]=E);let I=E[k];I===void 0&&(I=P.clone(),E[k]=I,_.addEventListener("dispose",x)),P=I}if(P.visible=_.visible,P.wireframe=_.wireframe,N===mr?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:u[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,w.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const L=i.properties.get(P);L.light=w}return P}function b(A,_,w,N,P,D){if(A.visible===!1)return;if(A.layers.test(P)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===mr)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);const E=t.update(A),I=A.material;if(Array.isArray(I)){const F=E.groups;for(let O=0,K=F.length;O<K;O++){const H=F[O],V=I[H.materialIndex];if(V&&V.visible){const Y=T(A,V,N,D);A.onBeforeShadow(i,A,_,w,E,Y,H),i.renderBufferDirect(w,null,E,Y,A,H),A.onAfterShadow(i,A,_,w,E,Y,H)}}}else if(I.visible){const F=T(A,I,N,D);A.onBeforeShadow(i,A,_,w,E,F,null),i.renderBufferDirect(w,null,E,F,A,null),A.onAfterShadow(i,A,_,w,E,F,null)}}const k=A.children;for(let E=0,I=k.length;E<I;E++)b(k[E],_,w,N,P,D)}function x(A){A.target.removeEventListener("dispose",x);for(const w in c){const N=c[w],P=A.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}}function jy(i,t){function e(){let B=!1;const at=new Ae;let nt=null;const bt=new Ae(0,0,0,0);return{setMask:function(vt){nt!==vt&&!B&&(i.colorMask(vt,vt,vt,vt),nt=vt)},setLocked:function(vt){B=vt},setClear:function(vt,Mt,qt,ae,ft){ft===!0&&(vt*=ae,Mt*=ae,qt*=ae),at.set(vt,Mt,qt,ae),bt.equals(at)===!1&&(i.clearColor(vt,Mt,qt,ae),bt.copy(at))},reset:function(){B=!1,nt=null,bt.set(-1,0,0,0)}}}function n(){let B=!1,at=!1,nt=null,bt=null,vt=null;return{setReversed:function(Mt){if(at!==Mt){const qt=t.get("EXT_clip_control");Mt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),at=Mt;const ae=vt;vt=null,this.setClear(ae)}},getReversed:function(){return at},setTest:function(Mt){Mt?J(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(Mt){nt!==Mt&&!B&&(i.depthMask(Mt),nt=Mt)},setFunc:function(Mt){if(at&&(Mt=F0[Mt]),bt!==Mt){switch(Mt){case Ol:i.depthFunc(i.NEVER);break;case kl:i.depthFunc(i.ALWAYS);break;case Bl:i.depthFunc(i.LESS);break;case Pr:i.depthFunc(i.LEQUAL);break;case zl:i.depthFunc(i.EQUAL);break;case Hl:i.depthFunc(i.GEQUAL);break;case Gl:i.depthFunc(i.GREATER);break;case Vl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=Mt}},setLocked:function(Mt){B=Mt},setClear:function(Mt){vt!==Mt&&(vt=Mt,at&&(Mt=1-Mt),i.clearDepth(Mt))},reset:function(){B=!1,nt=null,bt=null,vt=null,at=!1}}}function s(){let B=!1,at=null,nt=null,bt=null,vt=null,Mt=null,qt=null,ae=null,ft=null;return{setTest:function(Kt){B||(Kt?J(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(Kt){at!==Kt&&!B&&(i.stencilMask(Kt),at=Kt)},setFunc:function(Kt,re,Pt){(nt!==Kt||bt!==re||vt!==Pt)&&(i.stencilFunc(Kt,re,Pt),nt=Kt,bt=re,vt=Pt)},setOp:function(Kt,re,Pt){(Mt!==Kt||qt!==re||ae!==Pt)&&(i.stencilOp(Kt,re,Pt),Mt=Kt,qt=re,ae=Pt)},setLocked:function(Kt){B=Kt},setClear:function(Kt){ft!==Kt&&(i.clearStencil(Kt),ft=Kt)},reset:function(){B=!1,at=null,nt=null,bt=null,vt=null,Mt=null,qt=null,ae=null,ft=null}}}const r=new e,o=new n,a=new s;let l={};const c=new WeakMap;let h={},u={},d={},f=new WeakMap,g=[],v=null,p=!1,m=null,M=null,T=null,b=null,x=null,A=null,_=null,w=new Nt(0,0,0),N=0,P=!1,D=null,L=null,k=null,E=null,I=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,K=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=K>=2);let V=null,Y={};const Q=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),U=new Ae().fromArray(Q),Z=new Ae().fromArray(q);function W(B,at,nt,bt){const vt=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(B,Mt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<nt;qt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(at+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return Mt}const st={};st[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(Pr),$t(!1),It(Hh),J(i.CULL_FACE),ue(Is);function J(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function ut(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function pt(B,at){return d[B]!==at?(i.bindFramebuffer(B,at),d[B]=at,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=at),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=at),!0):!1}function lt(B,at){let nt=g,bt=!1;if(B){nt=f.get(at),nt===void 0&&(nt=[],f.set(at,nt));const vt=B.textures;if(nt.length!==vt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,qt=vt.length;Mt<qt;Mt++)nt[Mt]=i.COLOR_ATTACHMENT0+Mt;nt.length=vt.length,bt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,bt=!0);bt&&i.drawBuffers(nt)}function Et(B){return v!==B?(i.useProgram(B),v=B,!0):!1}const Gt={[Rs]:i.FUNC_ADD,[n0]:i.FUNC_SUBTRACT,[i0]:i.FUNC_REVERSE_SUBTRACT};Gt[s0]=i.MIN,Gt[r0]=i.MAX;const Ft={[o0]:i.ZERO,[a0]:i.ONE,[l0]:i.SRC_COLOR,[hf]:i.SRC_ALPHA,[p0]:i.SRC_ALPHA_SATURATE,[d0]:i.DST_COLOR,[h0]:i.DST_ALPHA,[c0]:i.ONE_MINUS_SRC_COLOR,[uf]:i.ONE_MINUS_SRC_ALPHA,[f0]:i.ONE_MINUS_DST_COLOR,[u0]:i.ONE_MINUS_DST_ALPHA,[m0]:i.CONSTANT_COLOR,[g0]:i.ONE_MINUS_CONSTANT_COLOR,[_0]:i.CONSTANT_ALPHA,[v0]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(B,at,nt,bt,vt,Mt,qt,ae,ft,Kt){if(B===Is){p===!0&&(ut(i.BLEND),p=!1);return}if(p===!1&&(J(i.BLEND),p=!0),B!==e0){if(B!==m||Kt!==P){if((M!==Rs||x!==Rs)&&(i.blendEquation(i.FUNC_ADD),M=Rs,x=Rs),Kt)switch(B){case br:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fl:i.blendFunc(i.ONE,i.ONE);break;case Gh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Vh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",B);break}else switch(B){case br:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gh:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vh:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",B);break}T=null,b=null,A=null,_=null,w.set(0,0,0),N=0,m=B,P=Kt}return}vt=vt||at,Mt=Mt||nt,qt=qt||bt,(at!==M||vt!==x)&&(i.blendEquationSeparate(Gt[at],Gt[vt]),M=at,x=vt),(nt!==T||bt!==b||Mt!==A||qt!==_)&&(i.blendFuncSeparate(Ft[nt],Ft[bt],Ft[Mt],Ft[qt]),T=nt,b=bt,A=Mt,_=qt),(ae.equals(w)===!1||ft!==N)&&(i.blendColor(ae.r,ae.g,ae.b,ft),w.copy(ae),N=ft),m=B,P=!1}function Wt(B,at){B.side===Be?ut(i.CULL_FACE):J(i.CULL_FACE);let nt=B.side===pn;at&&(nt=!nt),$t(nt),B.blending===br&&B.transparent===!1?ue(Is):ue(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const bt=B.stencilWrite;a.setTest(bt),bt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Zt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(B){D!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),D=B)}function It(B){B!==jp?(J(i.CULL_FACE),B!==L&&(B===Hh?i.cullFace(i.BACK):B===Qp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),L=B}function dt(B){B!==k&&(O&&i.lineWidth(B),k=B)}function Zt(B,at,nt){B?(J(i.POLYGON_OFFSET_FILL),(E!==at||I!==nt)&&(E=at,I=nt,o.getReversed()&&(at=-at,nt=-nt),i.polygonOffset(at,nt))):ut(i.POLYGON_OFFSET_FILL)}function ee(B){B?J(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function ce(B){B===void 0&&(B=i.TEXTURE0+F-1),V!==B&&(i.activeTexture(B),V=B)}function ie(B,at,nt){nt===void 0&&(V===null?nt=i.TEXTURE0+F-1:nt=V);let bt=Y[nt];bt===void 0&&(bt={type:void 0,texture:void 0},Y[nt]=bt),(bt.type!==B||bt.texture!==at)&&(V!==nt&&(i.activeTexture(nt),V=nt),i.bindTexture(B,at||st[B]),bt.type=B,bt.texture=at)}function G(){const B=Y[V];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Se(){try{i.compressedTexImage2D(...arguments)}catch(B){Qt("WebGLState:",B)}}function jt(){try{i.compressedTexImage3D(...arguments)}catch(B){Qt("WebGLState:",B)}}function ge(){try{i.texSubImage2D(...arguments)}catch(B){Qt("WebGLState:",B)}}function mt(){try{i.texSubImage3D(...arguments)}catch(B){Qt("WebGLState:",B)}}function Ht(){try{i.compressedTexSubImage2D(...arguments)}catch(B){Qt("WebGLState:",B)}}function yt(){try{i.compressedTexSubImage3D(...arguments)}catch(B){Qt("WebGLState:",B)}}function Ct(){try{i.texStorage2D(...arguments)}catch(B){Qt("WebGLState:",B)}}function C(){try{i.texStorage3D(...arguments)}catch(B){Qt("WebGLState:",B)}}function S(){try{i.texImage2D(...arguments)}catch(B){Qt("WebGLState:",B)}}function X(){try{i.texImage3D(...arguments)}catch(B){Qt("WebGLState:",B)}}function ct(B){return u[B]!==void 0?u[B]:i.getParameter(B)}function ot(B,at){u[B]!==at&&(i.pixelStorei(B,at),u[B]=at)}function gt(B){U.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),U.copy(B))}function xt(B){Z.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Z.copy(B))}function et(B,at){let nt=c.get(at);nt===void 0&&(nt=new WeakMap,c.set(at,nt));let bt=nt.get(B);bt===void 0&&(bt=i.getUniformBlockIndex(at,B.name),i.uniformBlockBinding(at,bt,bt),nt.set(B,bt))}function rt(B,at,nt){const vt=c.get(at).get(B);l[vt]!==nt&&(i.bindBufferBase(i.UNIFORM_BUFFER,vt,nt),l[vt]=nt)}function St(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},V=null,Y={},d={},l={},f=new WeakMap,g=[],v=null,p=!1,m=null,M=null,T=null,b=null,x=null,A=null,_=null,w=new Nt(0,0,0),N=0,P=!1,D=null,L=null,k=null,E=null,I=null,U.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:ut,bindFramebuffer:pt,drawBuffers:lt,useProgram:Et,setBlending:ue,setMaterial:Wt,setFlipSided:$t,setCullFace:It,setLineWidth:dt,setPolygonOffset:Zt,setScissorTest:ee,activeTexture:ce,bindTexture:ie,unbindTexture:G,compressedTexImage2D:Se,compressedTexImage3D:jt,texImage2D:S,texImage3D:X,pixelStorei:ot,getParameter:ct,updateUBOMapping:et,uniformBlockBinding:rt,texStorage2D:Ct,texStorage3D:C,texSubImage2D:ge,texSubImage3D:mt,compressedTexSubImage2D:Ht,compressedTexSubImage3D:yt,scissor:gt,viewport:xt,reset:St}}function Qy(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,h=new WeakMap,u=new Set;let d;const f=new WeakMap,g=new Set,v=new FinalizationRegistry(C=>g.delete(C));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,S){return p?new OffscreenCanvas(C,S):Fr("canvas")}function M(C,S,X){let ct=1;const ot=Ct(C);if((ot.width>X||ot.height>X)&&(ct=X/Math.max(ot.width,ot.height)),ct<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const gt=Math.floor(ct*ot.width),xt=Math.floor(ct*ot.height);d===void 0&&(d=m(gt,xt));const et=S?m(gt,xt):d;return et.width=gt,et.height=xt,et.getContext("2d").drawImage(C,0,0,gt,xt),Xt("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+gt+"x"+xt+")."),et}else return"data"in C&&Xt("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),C;return C}function T(C){return C.generateMipmaps}function b(C){i.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(C,S,X,ct,ot,gt=!1){if(C!==null){if(i[C]!==void 0)return i[C];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let xt;ct&&(xt=t.get("EXT_texture_norm16"),xt||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=S;if(S===i.RED&&(X===i.FLOAT&&(et=i.R32F),X===i.HALF_FLOAT&&(et=i.R16F),X===i.UNSIGNED_BYTE&&(et=i.R8),X===i.UNSIGNED_SHORT&&xt&&(et=xt.R16_EXT),X===i.SHORT&&xt&&(et=xt.R16_SNORM_EXT)),S===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.R8UI),X===i.UNSIGNED_SHORT&&(et=i.R16UI),X===i.UNSIGNED_INT&&(et=i.R32UI),X===i.BYTE&&(et=i.R8I),X===i.SHORT&&(et=i.R16I),X===i.INT&&(et=i.R32I)),S===i.RG&&(X===i.FLOAT&&(et=i.RG32F),X===i.HALF_FLOAT&&(et=i.RG16F),X===i.UNSIGNED_BYTE&&(et=i.RG8),X===i.UNSIGNED_SHORT&&xt&&(et=xt.RG16_EXT),X===i.SHORT&&xt&&(et=xt.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RG8UI),X===i.UNSIGNED_SHORT&&(et=i.RG16UI),X===i.UNSIGNED_INT&&(et=i.RG32UI),X===i.BYTE&&(et=i.RG8I),X===i.SHORT&&(et=i.RG16I),X===i.INT&&(et=i.RG32I)),S===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RGB8UI),X===i.UNSIGNED_SHORT&&(et=i.RGB16UI),X===i.UNSIGNED_INT&&(et=i.RGB32UI),X===i.BYTE&&(et=i.RGB8I),X===i.SHORT&&(et=i.RGB16I),X===i.INT&&(et=i.RGB32I)),S===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(et=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(et=i.RGBA16UI),X===i.UNSIGNED_INT&&(et=i.RGBA32UI),X===i.BYTE&&(et=i.RGBA8I),X===i.SHORT&&(et=i.RGBA16I),X===i.INT&&(et=i.RGBA32I)),S===i.RGB&&(X===i.UNSIGNED_SHORT&&xt&&(et=xt.RGB16_EXT),X===i.SHORT&&xt&&(et=xt.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(et=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(et=i.R11F_G11F_B10F)),S===i.RGBA){const rt=gt?ra:de.getTransfer(ot);X===i.FLOAT&&(et=i.RGBA32F),X===i.HALF_FLOAT&&(et=i.RGBA16F),X===i.UNSIGNED_BYTE&&(et=rt===we?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&xt&&(et=xt.RGBA16_EXT),X===i.SHORT&&xt&&(et=xt.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function _(C,S){let X;return C?S===null||S===qn||S===Os?X=i.DEPTH24_STENCIL8:S===Nn?X=i.DEPTH32F_STENCIL8:S===Ir&&(X=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qn||S===Os?X=i.DEPTH_COMPONENT24:S===Nn?X=i.DEPTH_COMPONENT32F:S===Ir&&(X=i.DEPTH_COMPONENT16),X}function w(C,S){return T(C)===!0||C.isFramebufferTexture&&C.minFilter!==Fe&&C.minFilter!==je?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function N(C){const S=new WeakRef(C);n.get(C).__ref=S,g.add(S),v.register(C,S,S)}function P(C){const S=n.get(C).__ref;S!==void 0&&(g.delete(S),v.unregister(S))}function D(C){k(C.target)}function L(C){E(C.target)}function k(C){C.removeEventListener("dispose",D),P(C),F(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function E(C){C.removeEventListener("dispose",L),P(C),K(C)}function I(){for(const C of g){const S=C.deref();S!==void 0&&(S.isRenderTarget===!0?E(S):k(S))}g.clear(),u.clear()}function F(C){const S=n.get(C);if(S.__webglInit===void 0)return;const X=C.source,ct=f.get(X);if(ct){const ot=ct[S.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&O(C),Object.keys(ct).length===0&&f.delete(X)}n.remove(C)}function O(C){const S=n.get(C);i.deleteTexture(S.__webglTexture);const X=C.source,ct=f.get(X);delete ct[S.__cacheKey],o.memory.textures--}function K(C){const S=n.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();const X=C.depthTexture;if(X&&X.renderTarget===C&&k(X),C.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(S.__webglFramebuffer[ot]))for(let gt=0;gt<S.__webglFramebuffer[ot].length;gt++)i.deleteFramebuffer(S.__webglFramebuffer[ot][gt]);else i.deleteFramebuffer(S.__webglFramebuffer[ot]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ot])}else{if(Array.isArray(S.__webglFramebuffer))for(let ot=0;ot<S.__webglFramebuffer.length;ot++)i.deleteFramebuffer(S.__webglFramebuffer[ot]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ot=0;ot<S.__webglColorRenderbuffer.length;ot++)S.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ot]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const ct=C.textures;for(let ot=0,gt=ct.length;ot<gt;ot++){const xt=n.get(ct[ot]);xt.__webglTexture&&(i.deleteTexture(xt.__webglTexture),o.memory.textures--),n.remove(ct[ot])}n.remove(C)}let H=0;function V(){H=0}function Y(){return H}function Q(C){H=C}function q(){const C=H;return C>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,C}function U(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Z(C,S){const X=n.get(C);if(C.isVideoTexture&&Ht(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&X.__version!==C.version){const ct=C.image;if(ct===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Wt(X,C,S);return}}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+S)}function W(C,S){const X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){Wt(X,C,S);return}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+S)}function st(C,S){const X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){Wt(X,C,S);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+S)}function J(C,S){const X=n.get(C);if(C.version>0&&X.__version!==C.version){$t(X,C,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+S)}const ut={[os]:i.REPEAT,[si]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},pt={[Fe]:i.NEAREST,[_f]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[je]:i.LINEAR,[Wo]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},lt={[A0]:i.NEVER,[Af]:i.ALWAYS,[R0]:i.LESS,[Tf]:i.LEQUAL,[C0]:i.EQUAL,[Ef]:i.GEQUAL,[P0]:i.GREATER,[L0]:i.NOTEQUAL};function Et(C,S){if(S.type===Nn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===je||S.magFilter===Wo||S.magFilter===gr||S.magFilter===ri||S.minFilter===je||S.minFilter===Wo||S.minFilter===gr||S.minFilter===ri)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ut[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ut[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ut[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,pt[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,pt[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,lt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Fe||S.minFilter!==gr&&S.minFilter!==ri||S.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Gt(C,S){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",D),N(S));const ct=S.source;let ot=f.get(ct);ot===void 0&&(ot={},f.set(ct,ot));const gt=U(S);if(gt!==C.__cacheKey){ot[gt]===void 0&&(ot[gt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ot[gt].usedTimes++;const xt=ot[C.__cacheKey];xt!==void 0&&(ot[C.__cacheKey].usedTimes--,xt.usedTimes===0&&O(S)),C.__cacheKey=gt,C.__webglTexture=ot[gt].texture}return X}function Ft(C,S,X){return Math.floor(Math.floor(C/X)/S)}function ue(C,S,X,ct){const gt=C.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,X,ct,S.data);else{gt.sort((B,at)=>B.start-at.start);let xt=0;for(let B=1;B<gt.length;B++){const at=gt[xt],nt=gt[B],bt=at.start+at.count,vt=Ft(nt.start,S.width,4),Mt=Ft(at.start,S.width,4);nt.start<=bt+1&&vt===Mt&&Ft(nt.start+nt.count-1,S.width,4)===vt?at.count=Math.max(at.count,nt.start+nt.count-at.start):(++xt,gt[xt]=nt)}gt.length=xt+1;const et=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),St=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let B=0,at=gt.length;B<at;B++){const nt=gt[B],bt=Math.floor(nt.start/4),vt=Math.ceil(nt.count/4),Mt=bt%S.width,qt=Math.floor(bt/S.width),ae=vt,ft=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Mt),e.pixelStorei(i.UNPACK_SKIP_ROWS,qt),e.texSubImage2D(i.TEXTURE_2D,0,Mt,qt,ae,ft,X,ct,S.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,et),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,St)}}function Wt(C,S,X){let ct=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ct=i.TEXTURE_3D);const ot=Gt(C,S),gt=S.source;e.bindTexture(ct,C.__webglTexture,i.TEXTURE0+X);const xt=n.get(gt);if(gt.version!==xt.__version||ot===!0){if(e.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ft=de.getPrimaries(de.workingColorSpace),Kt=S.colorSpace===Bi?null:de.getPrimaries(S.colorSpace),re=S.colorSpace===Bi||ft===Kt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let rt=M(S.image,!1,s.maxTextureSize);rt=yt(S,rt);const St=r.convert(S.format,S.colorSpace),B=r.convert(S.type);let at=A(S.internalFormat,St,B,S.normalized,S.colorSpace,S.isVideoTexture);Et(ct,S);let nt;const bt=S.mipmaps,vt=S.isVideoTexture!==!0,Mt=xt.__version===void 0||ot===!0,qt=gt.dataReady,ae=w(S,rt);if(S.isDepthTexture)at=_(S.format===Hi,S.type),Mt&&(vt?e.texStorage2D(i.TEXTURE_2D,1,at,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,at,rt.width,rt.height,0,St,B,null));else if(S.isDataTexture)if(bt.length>0){vt&&Mt&&e.texStorage2D(i.TEXTURE_2D,ae,at,bt[0].width,bt[0].height);for(let ft=0,Kt=bt.length;ft<Kt;ft++)nt=bt[ft],vt?qt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,nt.width,nt.height,St,B,nt.data):e.texImage2D(i.TEXTURE_2D,ft,at,nt.width,nt.height,0,St,B,nt.data);S.generateMipmaps=!1}else vt?(Mt&&e.texStorage2D(i.TEXTURE_2D,ae,at,rt.width,rt.height),qt&&ue(S,rt,St,B)):e.texImage2D(i.TEXTURE_2D,0,at,rt.width,rt.height,0,St,B,rt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){vt&&Mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ae,at,bt[0].width,bt[0].height,rt.depth);for(let ft=0,Kt=bt.length;ft<Kt;ft++)if(nt=bt[ft],S.format!==Vn)if(St!==null)if(vt){if(qt)if(S.layerUpdates.size>0){const re=Hu(nt.width,nt.height,S.format,S.type);for(const Pt of S.layerUpdates){const be=nt.data.subarray(Pt*re/nt.data.BYTES_PER_ELEMENT,(Pt+1)*re/nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,Pt,nt.width,nt.height,1,St,be)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,nt.width,nt.height,rt.depth,St,nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,at,nt.width,nt.height,rt.depth,0,nt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vt?qt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,nt.width,nt.height,rt.depth,St,B,nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,at,nt.width,nt.height,rt.depth,0,St,B,nt.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{vt&&Mt&&e.texStorage2D(i.TEXTURE_2D,ae,at,bt[0].width,bt[0].height);for(let ft=0,Kt=bt.length;ft<Kt;ft++)nt=bt[ft],S.format!==Vn?St!==null?vt?qt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,nt.width,nt.height,St,nt.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,at,nt.width,nt.height,0,nt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?qt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,nt.width,nt.height,St,B,nt.data):e.texImage2D(i.TEXTURE_2D,ft,at,nt.width,nt.height,0,St,B,nt.data)}else if(S.isDataArrayTexture)if(vt){if(Mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ae,at,rt.width,rt.height,rt.depth),qt)if(S.layerUpdates.size>0){const ft=Hu(rt.width,rt.height,S.format,S.type);for(const Kt of S.layerUpdates){const re=rt.data.subarray(Kt*ft/rt.data.BYTES_PER_ELEMENT,(Kt+1)*ft/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Kt,rt.width,rt.height,1,St,B,re)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,St,B,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,at,rt.width,rt.height,rt.depth,0,St,B,rt.data);else if(S.isData3DTexture)vt?(Mt&&e.texStorage3D(i.TEXTURE_3D,ae,at,rt.width,rt.height,rt.depth),qt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,St,B,rt.data)):e.texImage3D(i.TEXTURE_3D,0,at,rt.width,rt.height,rt.depth,0,St,B,rt.data);else if(S.isFramebufferTexture){if(Mt)if(vt)e.texStorage2D(i.TEXTURE_2D,ae,at,rt.width,rt.height);else{let ft=rt.width,Kt=rt.height;for(let re=0;re<ae;re++)e.texImage2D(i.TEXTURE_2D,re,at,ft,Kt,0,St,B,null),ft>>=1,Kt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){const ft=i.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),rt.parentNode!==ft){ft.appendChild(rt),u.add(S),ft.onpaint=Kt=>{const re=Kt.changedElements;for(const Pt of u)re.includes(Pt.image)&&(Pt.needsUpdate=!0)},ft.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{const re=i.RGBA,Pt=i.RGBA,be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,re,Pt,be,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(bt.length>0){if(vt&&Mt){const ft=Ct(bt[0]);e.texStorage2D(i.TEXTURE_2D,ae,at,ft.width,ft.height)}for(let ft=0,Kt=bt.length;ft<Kt;ft++)nt=bt[ft],vt?qt&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,St,B,nt):e.texImage2D(i.TEXTURE_2D,ft,at,St,B,nt);S.generateMipmaps=!1}else if(vt){if(Mt){const ft=Ct(rt);e.texStorage2D(i.TEXTURE_2D,ae,at,ft.width,ft.height)}qt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,B,rt)}else e.texImage2D(i.TEXTURE_2D,0,at,St,B,rt);T(S)&&S.mipmapsAutoUpdate===!0&&b(ct),xt.__version=gt.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function $t(C,S,X){if(S.image.length!==6)return;const ct=Gt(C,S),ot=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+X);const gt=n.get(ot);if(ot.version!==gt.__version||ct===!0){e.activeTexture(i.TEXTURE0+X);const xt=de.getPrimaries(de.workingColorSpace),et=S.colorSpace===Bi?null:de.getPrimaries(S.colorSpace),rt=S.colorSpace===Bi||xt===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const St=S.isCompressedTexture||S.image[0].isCompressedTexture,B=S.image[0]&&S.image[0].isDataTexture,at=[];for(let Pt=0;Pt<6;Pt++)!St&&!B?at[Pt]=M(S.image[Pt],!0,s.maxCubemapSize):at[Pt]=B?S.image[Pt].image:S.image[Pt],at[Pt]=yt(S,at[Pt]);const nt=at[0],bt=r.convert(S.format,S.colorSpace),vt=r.convert(S.type);let Mt=A(S.internalFormat,bt,vt,S.normalized,S.colorSpace);const qt=S.isVideoTexture!==!0,ae=gt.__version===void 0||ct===!0,ft=ot.dataReady;let Kt=w(S,nt);Et(i.TEXTURE_CUBE_MAP,S);let re;if(S.isDepthTexture){if(Mt=_(S.format===Hi,S.type),ae)if(qt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,Mt,nt.width,nt.height);else for(let Pt=0;Pt<6;Pt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Mt,nt.width,nt.height,0,bt,vt,null)}else if(St){qt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Kt,Mt,nt.width,nt.height);for(let Pt=0;Pt<6;Pt++){re=at[Pt].mipmaps;for(let be=0;be<re.length;be++){const Ze=re[be];S.format!==Vn?bt!==null?qt?ft&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,be,0,0,Ze.width,Ze.height,bt,Ze.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,be,Mt,Ze.width,Ze.height,0,Ze.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,be,0,0,Ze.width,Ze.height,bt,vt,Ze.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,be,Mt,Ze.width,Ze.height,0,bt,vt,Ze.data)}}}else{if(re=S.mipmaps,qt&&ae){re.length>0&&Kt++;const Pt=Ct(at[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Kt,Mt,Pt.width,Pt.height)}for(let Pt=0;Pt<6;Pt++)if(B){qt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,0,0,at[Pt].width,at[Pt].height,bt,vt,at[Pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Mt,at[Pt].width,at[Pt].height,0,bt,vt,at[Pt].data);for(let be=0;be<re.length;be++){const Ai=re[be].image[Pt].image;qt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,be+1,0,0,Ai.width,Ai.height,bt,vt,Ai.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,be+1,Mt,Ai.width,Ai.height,0,bt,vt,Ai.data)}}else{qt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,0,0,bt,vt,at[Pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Mt,bt,vt,at[Pt]);for(let be=0;be<re.length;be++){const Ze=re[be];qt?ft&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,be+1,0,0,bt,vt,Ze.image[Pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,be+1,Mt,bt,vt,Ze.image[Pt])}}}T(S)&&S.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),gt.__version=ot.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function It(C,S,X,ct,ot,gt){const xt=r.convert(X.format,X.colorSpace),et=r.convert(X.type),rt=A(X.internalFormat,xt,et,X.normalized,X.colorSpace),St=n.get(S),B=n.get(X);if(B.__renderTarget=S,!St.__hasExternalTextures){const at=Math.max(1,S.width>>gt),nt=Math.max(1,S.height>>gt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,gt,rt,at,nt,S.depth,0,xt,et,null):e.texImage2D(ot,gt,rt,at,nt,0,xt,et,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),mt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,ot,B.__webglTexture,0,ge(S)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,ot,B.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(C,S,X){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){const ct=S.depthTexture,ot=ct&&ct.isDepthTexture?ct.type:null,gt=_(S.stencilBuffer,ot),xt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;mt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(S),gt,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(S),gt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,gt,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,C)}else{const ct=S.textures;for(let ot=0;ot<ct.length;ot++){const gt=ct[ot],xt=r.convert(gt.format,gt.colorSpace),et=r.convert(gt.type),rt=A(gt.internalFormat,xt,et,gt.normalized,gt.colorSpace);mt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(S),rt,S.width,S.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(S),rt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,rt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Zt(C,S,X){const ct=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ot=n.get(S.depthTexture);ot.__renderTarget=S;const gt=ct?S.depthTexture.image[0]:S.depthTexture.image;(!ot.__webglTexture||gt.width!==S.width||gt.height!==S.height)&&(gt.width=S.width,gt.height=S.height,S.depthTexture.needsUpdate=!0),ct?J(S.depthTexture,0):Z(S.depthTexture,0);const xt=ot.__webglTexture,et=ge(S),rt=ct?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,St=S.depthTexture.format===Hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Vi)mt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,St,rt,xt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,St,rt,xt,0);else if(S.depthTexture.format===Hi)mt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,St,rt,xt,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,St,rt,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ee(C){const S=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const ct=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ct){const ot=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ct.removeEventListener("dispose",ot)};ct.addEventListener("dispose",ot),S.__depthDisposeCallback=ot}S.__boundDepthTexture=ct}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(X)for(let ct=0;ct<6;ct++)Zt(S.__webglFramebuffer[ct],C,ct);else C.texture.mipmaps.length>0?Zt(S.__webglFramebuffer[0],C,0):Zt(S.__webglFramebuffer,C,0);else if(X){S.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ct]),S.__webglDepthbuffer[ct]===void 0)S.__webglDepthbuffer[ct]=i.createRenderbuffer(),dt(S.__webglDepthbuffer[ct],C,!1);else{const ot=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=S.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,gt)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),dt(S.__webglDepthbuffer,C,!1);else{const ot=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,gt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(C,S,X){const ct=n.get(C);S!==void 0&&It(ct.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&ee(C)}function ie(C){const S=C.texture,X=n.get(C),ct=n.get(S);C.addEventListener("dispose",L),N(C);const ot=C.textures,gt=C.isWebGLCubeRenderTarget===!0,xt=ot.length>1;if(xt||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=S.version,o.memory.textures++),gt){X.__webglFramebuffer=[];for(let et=0;et<6;et++)if(S.mipmaps.length>0){X.__webglFramebuffer[et]=[];for(let rt=0;rt<S.mipmaps.length;rt++)X.__webglFramebuffer[et][rt]=i.createFramebuffer()}else X.__webglFramebuffer[et]=i.createFramebuffer()}else{if(S.mipmaps.length>0){X.__webglFramebuffer=[];for(let et=0;et<S.mipmaps.length;et++)X.__webglFramebuffer[et]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(xt)for(let et=0,rt=ot.length;et<rt;et++){const St=n.get(ot[et]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&mt(C)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let et=0;et<ot.length;et++){const rt=ot[et];X.__webglColorRenderbuffer[et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[et]);const St=r.convert(rt.format,rt.colorSpace),B=r.convert(rt.type),at=A(rt.internalFormat,St,B,rt.normalized,rt.colorSpace,C.isXRRenderTarget===!0),nt=ge(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,at,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,X.__webglColorRenderbuffer[et])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(X.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),Et(i.TEXTURE_CUBE_MAP,S);for(let et=0;et<6;et++)if(S.mipmaps.length>0)for(let rt=0;rt<S.mipmaps.length;rt++)It(X.__webglFramebuffer[et][rt],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,rt);else It(X.__webglFramebuffer[et],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);T(S)?b(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(xt){for(let et=0,rt=ot.length;et<rt;et++){const St=ot[et],B=n.get(St);let at=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(at=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,B.__webglTexture),Et(at,St),It(X.__webglFramebuffer,C,St,i.COLOR_ATTACHMENT0+et,at,0),T(St)&&b(at)}e.unbindTexture()}else{let et=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(et=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(et,ct.__webglTexture),Et(et,S),S.mipmaps.length>0)for(let rt=0;rt<S.mipmaps.length;rt++)It(X.__webglFramebuffer[rt],C,S,i.COLOR_ATTACHMENT0,et,rt);else It(X.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,et,0);T(S)?b(et):S.mipmaps.length>0&&i.texParameteri(et,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&ee(C)}function G(C){const S=C.textures;for(let X=0,ct=S.length;X<ct;X++){const ot=S[X];if(T(ot)&&ot.mipmapsAutoUpdate===!0){const gt=x(C),xt=n.get(ot).__webglTexture;e.bindTexture(gt,xt),b(gt),e.unbindTexture()}}}const Se=[];function jt(C){if(C.samples>0){if(mt(C)===!1){const S=C.textures,X=C.width,ct=C.height;let ot=i.COLOR_BUFFER_BIT;const gt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(C),et=S.length>1;if(et)for(let St=0;St<S.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let St=0;St<S.length;St++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[St]);const B=n.get(S[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,B,0)}i.blitFramebuffer(0,0,X,ct,0,0,X,ct,ot,i.NEAREST),l===!0&&(Se.length=0,Se.push(i.COLOR_ATTACHMENT0+St),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Se.push(gt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),et)for(let St=0;St<S.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,xt.__webglColorRenderbuffer[St]);const B=n.get(S[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,B,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ge(C){return Math.min(s.maxSamples,C.samples)}function mt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ht(C){const S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function yt(C,S){const X=C.colorSpace,ct=C.format,ot=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==Mn&&X!==Bi&&(de.getTransfer(X)===we?(ct!==Vn||ot!==An)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",X)),S}function Ct(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=V,this.getTextureUnits=Y,this.setTextureUnits=Q,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=st,this.setTextureCube=J,this.rebindTextures=ce,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=It,this.useMultisampledRTT=mt,this.dispose=I}function tM(i,t){function e(n,s=Bi){let r;const o=de.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===Kc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Mf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vf)return i.BYTE;if(n===xf)return i.SHORT;if(n===Ir)return i.UNSIGNED_SHORT;if(n===Yc)return i.INT;if(n===qn)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===yn)return i.HALF_FLOAT;if(n===Sf)return i.ALPHA;if(n===bf)return i.RGB;if(n===Vn)return i.RGBA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===$c)return i.RED;if(n===Jc)return i.RED_INTEGER;if(n===as)return i.RG;if(n===jc)return i.RG_INTEGER;if(n===Qc)return i.RGBA_INTEGER;if(n===Xo||n===qo||n===Yo||n===Ko)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wl||n===Xl||n===ql||n===Yl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kl||n===Zl||n===$l||n===Jl||n===jl||n===ia||n===Ql)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kl||n===Zl)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$l)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Jl)return r.COMPRESSED_R11_EAC;if(n===jl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ia)return r.COMPRESSED_RG11_EAC;if(n===Ql)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tc||n===ec||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ec)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ic)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ac)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pc||n===mc||n===gc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pc)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_c||n===vc||n===sa||n===xc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_c)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const eM=`
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

}`;class iM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new kf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new xn({vertexShader:eM,fragmentShader:nM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sM extends Xi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",p=new iM,m={},M=e.getContextAttributes();let T=null,b=null;const x=[],A=[],_=new Ot;let w=null,N=null;const P=new vn;P.viewport=new Ae;const D=new vn;D.viewport=new Ae;const L=[P,D],k=new ig;let E=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Z=x[U];return Z===void 0&&(Z=new Ba,x[U]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(U){let Z=x[U];return Z===void 0&&(Z=new Ba,x[U]=Z),Z.getGripSpace()},this.getHand=function(U){let Z=x[U];return Z===void 0&&(Z=new Ba,x[U]=Z),Z.getHandSpace()};function F(U){const Z=A.indexOf(U.inputSource);if(Z===-1)return;const W=x[Z];W!==void 0&&(W.update(U.inputSource,U.frame,c||o),W.dispatchEvent({type:U.type,data:U.inputSource}))}function O(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",K);for(let U=0;U<x.length;U++){const Z=A[U];Z!==null&&(A[U]=null,x[U].disconnect(Z))}E=null,I=null,p.reset();for(const U in m)delete m[U];if(t.setRenderTarget(T),f=null,d=null,u=null,s=null,b=null,q.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(_.width,_.height,!1),N!==null){const U=N.camera;U.fov=N.fov,U.zoom=N.zoom,U.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",O),s.addEventListener("inputsourceschange",K),M.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,st=null,J=null;M.depth&&(J=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=M.stencil?Hi:Vi,st=M.stencil?Os:qn);const ut={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new an(d.textureWidth,d.textureHeight,{format:Vn,type:An,depthTexture:new ls(d.textureWidth,d.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const W={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,W),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new an(f.framebufferWidth,f.framebufferHeight,{format:Vn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),q.setContext(s),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(U){for(let Z=0;Z<U.removed.length;Z++){const W=U.removed[Z],st=A.indexOf(W);st>=0&&(A[st]=null,x[st].disconnect(W))}for(let Z=0;Z<U.added.length;Z++){const W=U.added[Z];let st=A.indexOf(W);if(st===-1){for(let ut=0;ut<x.length;ut++)if(ut>=A.length){A.push(W),st=ut;break}else if(A[ut]===null){A[ut]=W,st=ut;break}if(st===-1)break}const J=x[st];J&&J.connect(W)}}function H(U,Z){Z===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Z.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;let Z=U.near,W=U.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(W=p.depthFar)),k.near=D.near=P.near=Z,k.far=D.far=P.far=W,(E!==k.near||I!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),E=k.near,I=k.far),k.layers.mask=U.layers.mask|6,P.layers.mask=k.layers.mask&-5,D.layers.mask=k.layers.mask&-3;const st=U.parent,J=k.cameras;H(k,st);for(let ut=0;ut<J.length;ut++)H(J[ut],st);k.projectionMatrix.copy(P.projectionMatrix),k.projectionMatrixInverse.copy(P.projectionMatrixInverse),N===null&&U.isPerspectiveCamera&&(N={camera:U,fov:U.fov,zoom:U.zoom}),V(U,k,st)};function V(U,Z,W){W===null?U.matrix.copy(Z.matrixWorld):(U.matrix.copy(W.matrixWorld),U.matrix.invert(),U.matrix.multiply(Z.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(Z.projectionMatrix),U.projectionMatrixInverse.copy(Z.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=ks*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(U){return m[U]};let Y=null;function Q(U,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){const W=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let st=!1;W.length!==k.cameras.length&&(k.cameras.length=0,st=!0);for(let lt=0;lt<W.length;lt++){const Et=W[lt];let Gt=null;if(f!==null)Gt=f.getViewport(Et);else{const ue=u.getViewSubImage(d,Et);Gt=ue.viewport,lt===0&&(t.setRenderTargetTextures(b,ue.colorTexture,ue.depthStencilTexture),t.setRenderTarget(b))}let Ft=L[lt];Ft===void 0&&(Ft=new vn,Ft.layers.enable(lt),Ft.viewport=new Ae,L[lt]=Ft),Ft.matrix.fromArray(Et.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(Et.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),lt===0&&(k.matrix.copy(Ft.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),st===!0&&k.cameras.push(Ft)}const J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const lt=u.getDepthInformation(W[0]);lt&&lt.isValid&&lt.texture&&p.init(lt,s.renderState)}if(J&&J.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let lt=0;lt<W.length;lt++){const Et=W[lt].camera;if(Et){let Gt=m[Et];Gt||(Gt=new kf,m[Et]=Gt);const Ft=u.getCameraImage(Et);Gt.sourceTexture=Ft}}}}for(let W=0;W<x.length;W++){const st=A[W],J=x[W];st!==null&&J!==void 0&&J.update(st,Z,c||o)}Y&&Y(U,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const q=new Yf;q.setAnimationLoop(Q),this.setAnimationLoop=function(U){Y=U},this.dispose=function(){}}}const rM=new Yt,ip=new Jt;ip.set(-1,0,0,0,1,0,0,0,1);function oM(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Bf(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,T,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,T):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===pn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===pn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=t.get(m),T=M.envMap,b=M.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(rM.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ip),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=T*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function aM(i,t,e,n){let s={},r={};function o(M,T){const b=T.program;n.uniformBlockBinding(M,b,s[M.id])}function a(M,T){let b=s[M.id];b===void 0&&(g(M),b=l(M),s[M.id]=b,M.addEventListener("dispose",p));const x=T.program;n.updateUBOMapping(M,x);const A=t.render.frame;r[M.id]!==A&&(c(M),r[M.id]=A)}function l(M){const T=i.createBuffer(),b=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,b,x),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function c(M){const T=s[M.id],b=M.uniforms,x=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let A=0,_=b.length;A<_;A++){const w=b[A];if(Array.isArray(w))for(let N=0,P=w.length;N<P;N++)h(w[N],A,N,x);else h(w,A,0,x)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,T,b,x){if(d(M,T,b,x)===!0){const A=M.__offset,_=M.value;if(Array.isArray(_)){let w=0;for(let N=0;N<_.length;N++){const P=_[N],D=v(P,!0);u(P,M.__data,w),w+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,M.__data)}}function u(M,T,b){typeof M=="number"||typeof M=="boolean"?T[b]=M:M.isMatrix3?(T[b]=M.elements[0],T[b+1]=M.elements[1],T[b+2]=M.elements[2],T[b+3]=0,T[b+4]=M.elements[3],T[b+5]=M.elements[4],T[b+6]=M.elements[5],T[b+7]=0,T[b+8]=M.elements[6],T[b+9]=M.elements[7],T[b+10]=M.elements[8],T[b+11]=0):ArrayBuffer.isView(M)?T.set(M.subarray(0,T.length-b),b):M.toArray(T,b)}function d(M,T,b,x){const A=M.value,_=T+"_"+b;if(Array.isArray(A)){x[_]===void 0&&(x[_]=[]);const w=x[_];let N=!1;for(let P=0;P<A.length;P++)f(A[P],w,P)===!0&&(N=!0);return N}return f(A,x,_)}function f(M,T,b){if(T[b]===void 0)return typeof M=="number"||typeof M=="boolean"?T[b]=M:ArrayBuffer.isView(M)?T[b]=M.slice():T[b]=M.clone(),!0;{const x=T[b];if(typeof M=="number"||typeof M=="boolean"){if(x!==M)return T[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(x.equals(M)===!1)return x.copy(M),!0}}return!1}function g(M){const T=M.uniforms;let b=0;const x=16;for(let _=0,w=T.length;_<w;_++){const N=Array.isArray(T[_])?T[_]:[T[_]];for(let P=0,D=N.length;P<D;P++){const L=N[P],k=Array.isArray(L.value)?L.value:[L.value],E=Array.isArray(T[_])||Array.isArray(L.value);let I=b;for(let O=0,K=k.length;O<K;O++){const H=k[O],V=v(H,E),Y=b%x,Q=Y%V.boundary,q=Y+Q;b+=Q,q!==0&&x-q<V.storage&&(b+=x-q),O===0&&(I=b),b+=V.storage}const F=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new F((b-I)/Float32Array.BYTES_PER_ELEMENT),L.__offset=I}}const A=b%x;return A>0&&(b+=x-A),M.__size=b,M.__cache={},this}function v(M,T){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=16,b.storage=48):M.isMatrix4?(b.boundary=16,b.storage=64):M.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",M),T===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(M){const T=M.target;T.removeEventListener("dispose",p),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(const M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:o,update:a,dispose:m}}const lM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let jn=null;function cM(){return jn===null&&(jn=new _a(lM,16,16,as,yn),jn.name="DFG_LUT",jn.minFilter=je,jn.magFilter=je,jn.wrapS=si,jn.wrapT=si,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}class hM{constructor(t={}){const{canvas:e=N0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=An}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const v=f,p=new Set([Qc,jc,Jc]),m=new Set([An,qn,Ir,Os,Kc,Zc]),M=new Uint32Array(4),T=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let x=null,A=null;const _=[],w=[];let N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,L=null,k=null,E=null,I=null;this._outputColorSpace=We;let F=0,O=0,K=null,H=-1,V=null;const Y=new Ae,Q=new Ae;let q=null;const U=new Nt(0);let Z=0,W=e.width,st=e.height,J=1,ut=null,pt=null;const lt=new Ae(0,0,W,st),Et=new Ae(0,0,W,st);let Gt=!1;const Ft=new Or,ue=new lh;let Wt=!1,$t=!1;const It=new Yt,dt=new y,Zt=new Ae,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function ie(){return K===null?J:1}let G=n;function Se(R,z){return e.getContext(R,z)}let jt,ge,mt,Ht,yt,Ct,C,S,X,ct,ot,gt,xt,et,rt,St,B,at,nt,bt,vt,Mt,qt;try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gc}`),e.addEventListener("webglcontextlost",Kt,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),G===null){const z="webgl2";if(G=Se(z,R),G===null)throw Se(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ae()}catch(R){throw e.removeEventListener("webglcontextlost",Kt,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),Qt("WebGLRenderer: "+R.message),R}function ae(){jt=new fx(G),jt.init(),vt=new tM(G,jt),ge=new nx(G,jt,t,vt),mt=new jy(G,jt),ge.reversedDepthBuffer&&d&&mt.buffers.depth.setReversed(!0),k=G.createFramebuffer(),E=G.createFramebuffer(),I=G.createFramebuffer(),Ht=new gx(G),yt=new ky,Ct=new Qy(G,jt,mt,yt,ge,vt,Ht),C=new dx(P),S=new vg(G),Mt=new tx(G,S),X=new px(G,S,Ht,Mt),ct=new vx(G,X,S,Mt,Ht),at=new _x(G,ge,Ct),rt=new ix(yt),ot=new Oy(P,C,jt,ge,Mt,rt),gt=new oM(P,yt),xt=new zy,et=new qy(jt),B=new Qv(P,C,mt,ct,g,l),St=new Jy(P,ct,ge),qt=new aM(G,Ht,ge,mt),nt=new ex(G,jt,Ht),bt=new mx(G,jt,Ht),Ht.programs=ot.programs,P.capabilities=ge,P.extensions=jt,P.properties=yt,P.renderLists=xt,P.shadowMap=St,P.state=mt,P.info=Ht}v!==An&&(N=new yx(v,e.width,e.height,a,s,r));const ft=new sM(P,G);this.xr=ft,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=jt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=jt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(R){R!==void 0&&(J=R,this.setSize(W,st,!1))},this.getSize=function(R){return R.set(W,st)},this.setSize=function(R,z,tt=!0){if(ft.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,st=z,e.width=Math.floor(R*J),e.height=Math.floor(z*J),tt===!0&&(e.style.width=R+"px",e.style.height=z+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,R,z)},this.getDrawingBufferSize=function(R){return R.set(W*J,st*J).floor()},this.setDrawingBufferSize=function(R,z,tt){W=R,st=z,J=tt,e.width=Math.floor(R*tt),e.height=Math.floor(z*tt),this.setViewport(0,0,R,z)},this.setEffects=function(R){if(v===An){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let z=0;z<R.length;z++)if(R[z].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(Y)},this.getViewport=function(R){return R.copy(lt)},this.setViewport=function(R,z,tt,$){R.isVector4?lt.set(R.x,R.y,R.z,R.w):lt.set(R,z,tt,$),mt.viewport(Y.copy(lt).multiplyScalar(ie()).round())},this.getScissor=function(R){return R.copy(Et)},this.setScissor=function(R,z,tt,$){R.isVector4?Et.set(R.x,R.y,R.z,R.w):Et.set(R,z,tt,$),mt.scissor(Q.copy(Et).multiplyScalar(ie()).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(R){mt.setScissorTest(Gt=R)},this.setOpaqueSort=function(R){ut=R},this.setTransparentSort=function(R){pt=R},this.getClearColor=function(R){return R.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(R=!0,z=!0,tt=!0){let $=0;if(R){let j=!1;if(K!==null){const Tt=K.texture.format;j=p.has(Tt)}if(j){const Tt=K.texture.type,kt=m.has(Tt),wt=B.getClearColor(),Dt=B.getClearAlpha(),Vt=wt.r,se=wt.g,fe=wt.b;kt?(M[0]=Vt,M[1]=se,M[2]=fe,M[3]=Dt,G.clearBufferuiv(G.COLOR,0,M)):(T[0]=Vt,T[1]=se,T[2]=fe,T[3]=Dt,G.clearBufferiv(G.COLOR,0,T))}else $|=G.COLOR_BUFFER_BIT}z&&($|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),tt&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),L=R},this.dispose=function(){e.removeEventListener("webglcontextlost",Kt,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),B.dispose(),xt.dispose(),et.dispose(),Ct.dispose(),yt.dispose(),C.dispose(),ct.dispose(),X.dispose(),Mt.dispose(),qt.dispose(),ot.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",Lh),ft.removeEventListener("sessionend",Ih),Ki.stop()};function Kt(R){R.preventDefault(),oa("WebGLRenderer: Context Lost."),D=!0}function re(){oa("WebGLRenderer: Context Restored."),D=!1;const R=Ht.autoReset,z=St.enabled,tt=St.autoUpdate,$=St.needsUpdate,j=St.type;ae(),Ht.autoReset=R,St.enabled=z,St.autoUpdate=tt,St.needsUpdate=$,St.type=j}function Pt(R){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function be(R){const z=R.target;z.removeEventListener("dispose",be),Ze(z)}function Ze(R){Ai(R),yt.remove(R)}function Ai(R){const z=yt.get(R).programs;z!==void 0&&(z.forEach(function(tt){ot.releaseProgram(tt)}),R.isShaderMaterial&&ot.releaseShaderCache(R))}this.renderBufferDirect=function(R,z,tt,$,j,Tt){z===null&&(z=ee);const kt=j.isMesh&&j.matrixWorld.determinantAffine()<0,wt=Zp(R,z,tt,$,j);mt.setMaterial($,kt);let Dt=tt.index,Vt=1;if($.wireframe===!0){if(Dt=X.getWireframeAttribute(tt),Dt===void 0)return;Vt=2}const se=tt.drawRange,fe=tt.attributes.position;let Bt=se.start*Vt,pe=(se.start+se.count)*Vt;Tt!==null&&(Bt=Math.max(Bt,Tt.start*Vt),pe=Math.min(pe,(Tt.start+Tt.count)*Vt)),Dt!==null?(Bt=Math.max(Bt,0),pe=Math.min(pe,Dt.count)):fe!=null&&(Bt=Math.max(Bt,0),pe=Math.min(pe,fe.count));const ze=pe-Bt;if(ze<0||ze===1/0)return;Mt.setup(j,$,wt,tt,Dt);let Re,Ee=nt;if(Dt!==null&&(Re=S.get(Dt),Ee=bt,Ee.setIndex(Re)),j.isMesh)$.wireframe===!0?(mt.setLineWidth($.wireframeLinewidth*ie()),Ee.setMode(G.LINES)):Ee.setMode(G.TRIANGLES);else if(j.isLine){let nn=$.linewidth;nn===void 0&&(nn=1),mt.setLineWidth(nn*ie()),j.isLineSegments?Ee.setMode(G.LINES):j.isLineLoop?Ee.setMode(G.LINE_LOOP):Ee.setMode(G.LINE_STRIP)}else j.isPoints?Ee.setMode(G.POINTS):j.isSprite&&Ee.setMode(G.TRIANGLES);if(j.isBatchedMesh)if(jt.get("WEBGL_multi_draw"))Ee.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const nn=j._multiDrawStarts,zt=j._multiDrawCounts,hn=j._multiDrawCount,xe=Dt?S.get(Dt).bytesPerElement:1,Zi=yt.get($).currentProgram.getUniforms();for(let sn=0;sn<hn;sn++)Zi.setValue(G,"_gl_DrawID",sn),Ee.render(nn[sn]/xe,zt[sn])}else if(j.isInstancedMesh)Ee.renderInstances(Bt,ze,j.count);else if(tt.isInstancedBufferGeometry){const nn=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,zt=Math.min(tt.instanceCount,nn);Ee.renderInstances(Bt,ze,zt)}else Ee.render(Bt,ze)};function Ph(R,z,tt,$){L!==null&&R.isNodeMaterial&&L.setObject($,R),Wt===!0&&rt.setState(R,tt,!1),R.transparent===!0&&R.side===Be&&R.forceSinglePass===!1?(R.side=pn,R.needsUpdate=!0,Zs(R,z,$),R.side=Gi,R.needsUpdate=!0,Zs(R,z,$),R.side=Be):Zs(R,z,$)}this.compile=function(R,z,tt=null){tt===null&&(tt=R),L!==null&&L.renderStart(R,z,tt),A=et.get(tt),A.init(z),w.push(A),tt.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),R!==tt&&R.traverseVisible(function(j){j.isLight&&j.layers.test(z.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),A.setupLights(),L!==null&&L.updateLights(A.state.lightsArray),$t=this.localClippingEnabled,Wt=rt.init(this.clippingPlanes,$t),Wt===!0&&rt.setGlobalState(this.clippingPlanes,z),L!==null&&St.render(A.state.shadowsArray,tt,z);const $=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let kt=0;kt<Tt.length;kt++){const wt=Tt[kt];Ph(wt,tt,z,j),$.add(wt)}else Ph(Tt,tt,z,j),$.add(Tt)}),A=w.pop(),L!==null&&L.renderEnd(),$},this.compileAsync=function(R,z,tt=null){const $=this.compile(R,z,tt);return new Promise(j=>{function Tt(){if($.forEach(function(kt){const Dt=yt.get(kt).currentProgram;(Dt===void 0||Dt.isReady())&&$.delete(kt)}),$.size===0){j(R);return}setTimeout(Tt,10)}jt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Ra=null;function Yp(R){Ra&&Ra(R)}function Lh(){Ki.stop()}function Ih(){Ki.start()}const Ki=new Yf;Ki.setAnimationLoop(Yp),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(R){Ra=R,ft.setAnimationLoop(R),R===null?Ki.stop():Ki.start()},ft.addEventListener("sessionstart",Lh),ft.addEventListener("sessionend",Ih),this.render=function(R,z){if(z!==void 0&&z.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(R,z);const tt=ft.enabled===!0&&ft.isPresenting===!0,$=N!==null&&(K===null||tt)&&N.begin(P,K);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(z),z=ft.getCamera()),R.isScene===!0&&R.onBeforeRender(P,R,z,K),A=et.get(R,w.length),A.init(z),A.state.textureUnits=Ct.getTextureUnits(),w.push(A),It.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?ue.setFromArrayCamera(z):Ft.setFromProjectionMatrix(It,Wn,z.reversedDepth),$t=this.localClippingEnabled,Wt=rt.init(this.clippingPlanes,$t),x=xt.get(R,_.length),x.init(),_.push(x),this.info.render.frame++,ft.enabled===!0&&ft.isPresenting===!0){const kt=P.xr.getDepthSensingMesh();kt!==null&&Ca(kt,z,-1/0,P.sortObjects)}Ca(R,z,0,P.sortObjects),x.finish(),L!==null&&L.updateLights(A.state.lightsArray),P.sortObjects===!0&&x.sort(ut,pt),ce=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,ce&&B.addToRenderList(x,R),this.info.autoReset===!0&&this.info.reset(),Wt===!0&&rt.beginShadows();const j=A.state.shadowsArray;if(St.render(j,R,z),Wt===!0&&rt.endShadows(),($&&N.hasRenderPass())===!1){const kt=x.opaque,wt=x.transmissive;if(A.setupLights(),z.isArrayCamera){const Dt=z.cameras;if(wt.length>0)for(let Vt=0,se=Dt.length;Vt<se;Vt++){const fe=Dt[Vt];Nh(kt,wt,R,fe)}ce&&B.render(R);for(let Vt=0,se=Dt.length;Vt<se;Vt++){const fe=Dt[Vt];Dh(x,R,fe,fe.viewport)}}else wt.length>0&&Nh(kt,wt,R,z),ce&&B.render(R),Dh(x,R,z)}K!==null&&O===0&&(Ct.updateMultisampleRenderTarget(K),Ct.updateRenderTargetMipmap(K)),$&&N.end(P),R.isScene===!0&&R.onAfterRender(P,R,z),Mt.resetDefaultState(),H=-1,V=null,w.pop(),w.length>0?(A=w[w.length-1],Ct.setTextureUnits(A.state.textureUnits),Wt===!0&&rt.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?x=_[_.length-1]:x=null,L!==null&&L.renderEnd()};function Ca(R,z,tt,$){if(R.visible===!1)return;if(R.layers.test(z.layers)){if(R.isGroup)tt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(z);else if(R.isLight)A.pushLight(R),R.castShadow&&A.pushShadow(R);else if(R.isSprite){const kt=z.isArrayCamera?ue:Ft;if(!R.frustumCulled||R.intersectsFrustum(kt)){$&&Zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(It);const wt=ct.update(R),Dt=R.material;Dt.visible&&x.push(R,wt,Dt,tt,Zt.z,null,z)}}else if(R.isMesh||R.isLine||R.isPoints){const kt=z.isArrayCamera?ue:Ft;if(!R.frustumCulled||R.intersectsFrustum(kt)){const wt=ct.update(R),Dt=R.material;if($&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Zt.copy(R.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Zt.copy(wt.boundingSphere.center)),Zt.applyMatrix4(R.matrixWorld).applyMatrix4(It)),Array.isArray(Dt)){const Vt=wt.groups;for(let se=0,fe=Vt.length;se<fe;se++){const Bt=Vt[se],pe=Dt[Bt.materialIndex];pe&&pe.visible&&x.push(R,wt,pe,tt,Zt.z,Bt,z)}}else Dt.visible&&x.push(R,wt,Dt,tt,Zt.z,null,z)}}}const Tt=R.children;for(let kt=0,wt=Tt.length;kt<wt;kt++)Ca(Tt[kt],z,tt,$)}function Dh(R,z,tt,$){const{opaque:j,transmissive:Tt,transparent:kt}=R;A.setupLightsView(tt),Wt===!0&&rt.setGlobalState(P.clippingPlanes,tt),$&&mt.viewport(Y.copy($)),j.length>0&&Kr(j,z,tt),Tt.length>0&&Kr(Tt,z,tt),kt.length>0&&Kr(kt,z,tt),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Nh(R,z,tt,$){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[$.id]===void 0){const Bt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[$.id]=new an(1,1,{generateMipmaps:!0,type:Bt?yn:An,minFilter:ri,samples:Math.max(4,ge.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}const Tt=A.state.transmissionRenderTarget[$.id],kt=$.viewport||Y;Tt.setSize(kt.z*P.transmissionResolutionScale,kt.w*P.transmissionResolutionScale);const wt=P.getRenderTarget(),Dt=P.getActiveCubeFace(),Vt=P.getActiveMipmapLevel();P.setRenderTarget(Tt),P.getClearColor(U),Z=P.getClearAlpha(),Z<1&&P.setClearColor(16777215,.5),P.clear(),ce&&B.render(tt);const se=P.toneMapping;P.toneMapping=oi;const fe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),A.setupLightsView($),Wt===!0&&rt.setGlobalState(P.clippingPlanes,$),Kr(R,tt,$),Ct.updateMultisampleRenderTarget(Tt),Ct.updateRenderTargetMipmap(Tt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let pe=0,ze=z.length;pe<ze;pe++){const Re=z[pe],{object:Ee,geometry:nn,material:zt,group:hn}=Re;if(zt.side===Be&&Ee.layers.test($.layers)){const xe=zt.side;zt.side=pn,zt.needsUpdate=!0,Uh(Ee,tt,$,nn,zt,hn),zt.side=xe,zt.needsUpdate=!0,Bt=!0}}Bt===!0&&(Ct.updateMultisampleRenderTarget(Tt),Ct.updateRenderTargetMipmap(Tt))}P.setRenderTarget(wt,Dt,Vt),P.setClearColor(U,Z),fe!==void 0&&($.viewport=fe),P.toneMapping=se}function Kr(R,z,tt){const $=z.isScene===!0?z.overrideMaterial:null;for(let j=0,Tt=R.length;j<Tt;j++){const kt=R[j],{object:wt,geometry:Dt,group:Vt}=kt;let se=kt.material;se.allowOverride===!0&&$!==null&&(se=$),wt.layers.test(tt.layers)&&Uh(wt,z,tt,Dt,se,Vt)}}function Uh(R,z,tt,$,j,Tt){L!==null&&j.isNodeMaterial&&L.setObject(R,j),R.onBeforeRender(P,z,tt,$,j,Tt),R.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(P,z,tt,$,R,Tt),j.transparent===!0&&j.side===Be&&j.forceSinglePass===!1?(j.side=pn,j.needsUpdate=!0,P.renderBufferDirect(tt,z,$,j,R,Tt),j.side=Gi,j.needsUpdate=!0,P.renderBufferDirect(tt,z,$,j,R,Tt),j.side=Be):P.renderBufferDirect(tt,z,$,j,R,Tt),R.onAfterRender(P,z,tt,$,j,Tt)}function Fh(R){let z=0;for(const tt of R)tt.texture!==null&&z++;return z}function Zs(R,z,tt){z.isScene!==!0&&(z=ee);const $=yt.get(R),j=A.state.lights,Tt=A.state.shadowsArray,kt=j.state.version,wt=ot.getParameters(R,j.state,Tt,z,tt,A.state.lightProbeGridArray),Dt=ot.getProgramCacheKey(wt);let Vt=$.programs;$.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?z.environment:null,$.fog=z.fog;const se=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;$.envMap=C.get(R.envMap||$.environment,se),$.envMapRotation=$.environment!==null&&R.envMap===null?z.environmentRotation:R.envMapRotation,Vt===void 0&&(R.addEventListener("dispose",be),Vt=new Map,$.programs=Vt,$.programVariants=new Map);let fe=Vt.get(Dt);if(fe!==void 0){if($.currentProgram===fe&&$.lightsStateVersion===kt)return kh(R,wt),fe}else wt.uniforms=ot.getUniforms(R),L!==null&&R.isNodeMaterial&&L.build(R,tt,wt),R.onBeforeCompile(wt,P),fe=ot.acquireProgram(wt,Dt),Vt.set(Dt,fe),$.uniforms=wt.uniforms;const Bt=$.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Bt.clippingPlanes=rt.uniform),kh(R,wt),$.needsLights=Jp(R),$.lightsStateVersion=kt,$.needsLights&&(Bt.ambientLightColor.value=j.state.ambient,Bt.lightProbe.value=j.state.probe,Bt.sunLights.value=j.state.sun,Bt.sunLightShadows.value=j.state.sunShadow,Bt.directionalLights.value=j.state.directional,Bt.directionalLightShadows.value=j.state.directionalShadow,Bt.spotLights.value=j.state.spot,Bt.spotLightShadows.value=j.state.spotShadow,Bt.rectAreaLights.value=j.state.rectArea,Bt.ltc_1.value=j.state.rectAreaLTC1,Bt.ltc_2.value=j.state.rectAreaLTC2,Bt.pointLights.value=j.state.point,Bt.pointLightShadows.value=j.state.pointShadow,Bt.hemisphereLights.value=j.state.hemi,Bt.sunShadowMatrix.value=j.state.sunShadowMatrix,Bt.sunShadowCascade.value=j.state.sunShadowCascade,Bt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Bt.spotLightMatrix.value=j.state.spotLightMatrix,Bt.spotLightMap.value=j.state.spotLightMap,Bt.pointShadowMatrix.value=j.state.pointShadowMatrix),$.numLightProbeGrids=Fh(A.state.lightProbeGridArray),$.currentProgram=fe,$.uniformsList=null,fe}function Kp(R,z,tt,$,j){const Tt=yt.get(R),kt=Tt.currentProgram.id+","+$+","+j;let wt=Tt.programVariants.get(kt);return wt===void 0?(wt=Zs(R,z,tt),Tt.programVariants.set(kt,wt)):(Tt.currentProgram=wt,Tt.uniformsList=null,Tt.outputColorSpace=$,Tt.toneMapping=j),wt}function Oh(R){if(R.uniformsList===null){const z=R.currentProgram.getUniforms();R.uniformsList=Zo.seqWithValue(z.seq,R.uniforms)}return R.uniformsList}function kh(R,z){const tt=yt.get(R);tt.outputColorSpace=z.outputColorSpace,tt.batching=z.batching,tt.batchingColor=z.batchingColor,tt.instancing=z.instancing,tt.instancingColor=z.instancingColor,tt.instancingMorph=z.instancingMorph,tt.skinning=z.skinning,tt.morphTargets=z.morphTargets,tt.morphNormals=z.morphNormals,tt.morphColors=z.morphColors,tt.morphTargetsCount=z.morphTargetsCount,tt.numClippingPlanes=z.numClippingPlanes,tt.numIntersection=z.numClipIntersection,tt.vertexAlphas=z.vertexAlphas,tt.vertexTangents=z.vertexTangents,tt.toneMapping=z.toneMapping}function Zp(R,z,tt,$,j){z.isScene!==!0&&(z=ee),Ct.resetTextureUnits();const Tt=z.fog,kt=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?z.environment:null,wt=K===null?P.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:de.workingColorSpace,Dt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Vt=C.get($.envMap||kt,Dt),se=$.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,fe=!!tt.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Bt=!!tt.morphAttributes.position,pe=!!tt.morphAttributes.normal,ze=!!tt.morphAttributes.color;let Re=oi;$.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Re=P.toneMapping);const Ee=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,nn=Ee!==void 0?Ee.length:0,zt=yt.get($),hn=A.state.lights;if(Wt===!0&&($t===!0||R!==V)){const Ne=R===V&&$.id===H;rt.setState($,R,Ne)}let xe=!1,Zi=!1;$.version===zt.__version?zt.needsLights&&zt.lightsStateVersion!==hn.state.version||j.isBatchedMesh&&zt.batching===!1||!j.isBatchedMesh&&zt.batching===!0||j.isBatchedMesh&&zt.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&zt.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&zt.instancing===!1||!j.isInstancedMesh&&zt.instancing===!0||j.isSkinnedMesh&&zt.skinning===!1||!j.isSkinnedMesh&&zt.skinning===!0||j.isInstancedMesh&&zt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&zt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&zt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&zt.instancingMorph===!1&&j.morphTexture!==null||zt.envMap!==Vt||$.fog===!0&&zt.fog!==Tt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==rt.numPlanes||zt.numIntersection!==rt.numIntersection)||zt.vertexAlphas!==se||zt.vertexTangents!==fe||zt.morphTargets!==Bt||zt.morphNormals!==pe||zt.morphColors!==ze||zt.morphTargetsCount!==nn||zt.numLightProbeGrids!==Fh(A.state.lightProbeGridArray)?xe=!0:(zt.outputColorSpace!==wt||zt.toneMapping!==Re)&&(Zi=!0):(xe=!0,zt.__version=$.version);let sn=zt.currentProgram;(xe===!0||Zi===!0)&&(sn=Zi===!0?Kp($,z,j,wt,Re):Zs($,z,j),L&&$.isNodeMaterial&&L.onUpdateProgram($,sn,zt));let Zr=!1,Ri=!1,$i=!1;const _e=sn.getUniforms(),tn=zt.uniforms;if(mt.useProgram(sn.program)&&(Zr=!0,Ri=!0,$i=!0),$.id!==H&&(H=$.id,Ri=!0),Zr||V!==R){mt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),_e.setValue(G,"projectionMatrix",R.projectionMatrix),_e.setValue(G,"viewMatrix",R.matrixWorldInverse);const $e=_e.map.cameraPosition;$e!==void 0&&$e.setValue(G,dt.setFromMatrixPosition(R.matrixWorld)),ge.logarithmicDepthBuffer&&_e.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&_e.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),V!==R&&(V=R,Ri=!0,$i=!0)}if(zt.needsLights&&(hn.state.sunShadowMap.length>0&&_e.setValue(G,"sunShadowMap",hn.state.sunShadowMap,Ct),hn.state.directionalShadowMap.length>0&&_e.setValue(G,"directionalShadowMap",hn.state.directionalShadowMap,Ct),hn.state.spotShadowMap.length>0&&_e.setValue(G,"spotShadowMap",hn.state.spotShadowMap,Ct),hn.state.pointShadowMap.length>0&&_e.setValue(G,"pointShadowMap",hn.state.pointShadowMap,Ct)),j.isSkinnedMesh){_e.setOptional(G,j,"bindMatrix"),_e.setOptional(G,j,"bindMatrixInverse");const Ne=j.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),_e.setValue(G,"boneTexture",Ne.boneTexture,Ct))}j.isBatchedMesh&&(_e.setOptional(G,j,"batchingTexture"),_e.setValue(G,"batchingTexture",j._matricesTexture,Ct),_e.setOptional(G,j,"batchingIdTexture"),_e.setValue(G,"batchingIdTexture",j._indirectTexture,Ct),_e.setOptional(G,j,"batchingColorTexture"),j._colorsTexture!==null&&_e.setValue(G,"batchingColorTexture",j._colorsTexture,Ct));const kn=tt.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&at.update(j,tt,sn),(Ri||zt.receiveShadow!==j.receiveShadow)&&(zt.receiveShadow=j.receiveShadow,_e.setValue(G,"receiveShadow",j.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&z.environment!==null&&(tn.envMapIntensity.value=z.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=cM()),Ri){if(_e.setValue(G,"toneMappingExposure",P.toneMappingExposure),zt.needsLights&&$p(tn,$i),Tt&&$.fog===!0&&gt.refreshFogUniforms(tn,Tt),gt.refreshMaterialUniforms(tn,$,J,st,A.state.transmissionRenderTarget[R.id]),zt.needsLights&&zt.numLightProbeGrids>0){const Ne=b;let $e=0;for(const fi of A.state.lightProbeGridArray)fi.texture!==null&&(Ne.textures[$e]=fi.texture,Ne.min[$e]=fi.boundingBox.min,Ne.max[$e]=fi.boundingBox.max,Ne.resolution[$e]=fi.resolution,$e++);for(const fi in Ne)Ne[fi].length=$e;tn.probesSH.value=Ne.textures,tn.probesMin.value=Ne.min,tn.probesMax.value=Ne.max,tn.probesResolution.value=Ne.resolution}Zo.upload(G,Oh(zt),tn,Ct)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Zo.upload(G,Oh(zt),tn,Ct),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&_e.setValue(G,"center",j.center),_e.setValue(G,"modelViewMatrix",j.modelViewMatrix),_e.setValue(G,"normalMatrix",j.normalMatrix),_e.setValue(G,"modelMatrix",j.matrixWorld),$.uniformsGroups!==void 0){const Ne=$.uniformsGroups;for(let $e=0,fi=Ne.length;$e<fi;$e++){const zh=Ne[$e];qt.update(zh,sn),qt.bind(zh,sn)}}return sn}function $p(R,z){R.ambientLightColor.needsUpdate=z,R.lightProbe.needsUpdate=z,R.sunLights.needsUpdate=z,R.sunLightShadows.needsUpdate=z,R.directionalLights.needsUpdate=z,R.directionalLightShadows.needsUpdate=z,R.pointLights.needsUpdate=z,R.pointLightShadows.needsUpdate=z,R.spotLights.needsUpdate=z,R.spotLightShadows.needsUpdate=z,R.rectAreaLights.needsUpdate=z,R.hemisphereLights.needsUpdate=z}function Jp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(R,z,tt){const $=yt.get(R);$.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),yt.get(R.texture).__webglTexture=z,yt.get(R.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:tt,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,z){const tt=yt.get(R);tt.__webglFramebuffer=z,tt.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(R,z=0,tt=0){K=R,F=z,O=tt;let $=null,j=!1,Tt=!1;if(R){const wt=yt.get(R);if(wt.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(G.FRAMEBUFFER,wt.__webglFramebuffer),Y.copy(R.viewport),Q.copy(R.scissor),q=R.scissorTest,mt.viewport(Y),mt.scissor(Q),mt.setScissorTest(q),H=-1;return}else if(wt.__webglFramebuffer===void 0)Ct.setupRenderTarget(R);else if(wt.__hasExternalTextures)Ct.rebindTextures(R,yt.get(R.texture).__webglTexture,yt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const se=R.depthTexture;if(wt.__boundDepthTexture!==se){if(se!==null&&yt.has(se)&&(R.width!==se.image.width||R.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ct.setupDepthRenderbuffer(R)}}const Dt=R.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(Tt=!0);const Vt=yt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Vt[z])?$=Vt[z][tt]:$=Vt[z],j=!0):R.samples>0&&Ct.useMultisampledRTT(R)===!1?$=yt.get(R).__webglMultisampledFramebuffer:Array.isArray(Vt)?$=Vt[tt]:$=Vt,Y.copy(R.viewport),Q.copy(R.scissor),q=R.scissorTest}else Y.copy(lt).multiplyScalar(J).floor(),Q.copy(Et).multiplyScalar(J).floor(),q=Gt;if(tt!==0&&($=k),mt.bindFramebuffer(G.FRAMEBUFFER,$)&&mt.drawBuffers(R,$),mt.viewport(Y),mt.scissor(Q),mt.setScissorTest(q),j){const wt=yt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+z,wt.__webglTexture,tt)}else if(Tt){const wt=z;for(let Dt=0;Dt<R.textures.length;Dt++){const Vt=yt.get(R.textures[Dt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Dt,Vt.__webglTexture,tt,wt)}}else if(R!==null&&tt!==0){const wt=yt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,wt.__webglTexture,tt)}H=-1};function Bh(R){const z=yt.get(R);return(z.__readFormat!==R.format||z.__readType!==R.type)&&(z.__readFormat=R.format,z.__readType=R.type,z.__formatReadable=ge.textureFormatReadable(R.format),z.__typeReadable=ge.textureTypeReadable(R.type)),z}this.readRenderTargetPixels=function(R,z,tt,$,j,Tt,kt,wt=0){if(!(R&&R.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&kt!==void 0&&(Dt=Dt[kt],Array.isArray(Dt)&&(Dt=Dt[0])),Dt){mt.bindFramebuffer(G.FRAMEBUFFER,Dt);try{const Vt=R.textures[wt],se=Vt.format,fe=Vt.type;R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+wt);const Bt=Bh(Vt);if(Bt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=R.width-$&&tt>=0&&tt<=R.height-j&&G.readPixels(z,tt,$,j,vt.convert(se),vt.convert(fe),Tt)}finally{const Vt=K!==null?yt.get(K).__webglFramebuffer:null;mt.bindFramebuffer(G.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(R,z,tt,$,j,Tt,kt,wt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=yt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&kt!==void 0&&(Dt=Dt[kt],Array.isArray(Dt)&&(Dt=Dt[0])),Dt)if(z>=0&&z<=R.width-$&&tt>=0&&tt<=R.height-j){mt.bindFramebuffer(G.FRAMEBUFFER,Dt);const Vt=R.textures[wt],se=Vt.format,fe=Vt.type;R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+wt);const Bt=Bh(Vt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,pe),G.bufferData(G.PIXEL_PACK_BUFFER,Tt.byteLength,G.STREAM_READ),G.readPixels(z,tt,$,j,vt.convert(se),vt.convert(fe),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);const ze=K!==null?yt.get(K).__webglFramebuffer:null;mt.bindFramebuffer(G.FRAMEBUFFER,ze);const Re=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await U0(G,Re,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,pe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Tt),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(pe),G.deleteSync(Re),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,z=null,tt=0){const $=Math.pow(2,-tt),j=Math.floor(R.image.width*$),Tt=Math.floor(R.image.height*$),kt=z!==null?z.x:0,wt=z!==null?z.y:0;Ct.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,tt,0,0,kt,wt,j,Tt),mt.unbindTexture()},this.copyTextureToTexture=function(R,z,tt=null,$=null,j=0,Tt=0){let kt,wt,Dt,Vt,se,fe,Bt,pe,ze;const Re=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(tt!==null)kt=tt.max.x-tt.min.x,wt=tt.max.y-tt.min.y,Dt=tt.isBox3?tt.max.z-tt.min.z:1,Vt=tt.min.x,se=tt.min.y,fe=tt.isBox3?tt.min.z:0;else{const _e=Math.pow(2,-j);kt=Math.floor(Re.width*_e),wt=Math.floor(Re.height*_e),R.isDataArrayTexture?Dt=Re.depth:R.isData3DTexture?Dt=Math.floor(Re.depth*_e):Dt=1,Vt=0,se=0,fe=0}$!==null?(Bt=$.x,pe=$.y,ze=$.z):(Bt=0,pe=0,ze=0);const Ee=vt.convert(z.format),nn=vt.convert(z.type);let zt;z.isData3DTexture?(Ct.setTexture3D(z,0),zt=G.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Ct.setTexture2DArray(z,0),zt=G.TEXTURE_2D_ARRAY):(Ct.setTexture2D(z,0),zt=G.TEXTURE_2D),mt.activeTexture(G.TEXTURE0),mt.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,z.flipY),mt.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),mt.pixelStorei(G.UNPACK_ALIGNMENT,z.unpackAlignment);const hn=mt.getParameter(G.UNPACK_ROW_LENGTH),xe=mt.getParameter(G.UNPACK_IMAGE_HEIGHT),Zi=mt.getParameter(G.UNPACK_SKIP_PIXELS),sn=mt.getParameter(G.UNPACK_SKIP_ROWS),Zr=mt.getParameter(G.UNPACK_SKIP_IMAGES);mt.pixelStorei(G.UNPACK_ROW_LENGTH,Re.width),mt.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Re.height),mt.pixelStorei(G.UNPACK_SKIP_PIXELS,Vt),mt.pixelStorei(G.UNPACK_SKIP_ROWS,se),mt.pixelStorei(G.UNPACK_SKIP_IMAGES,fe);const Ri=R.isDataArrayTexture||R.isData3DTexture,$i=z.isDataArrayTexture||z.isData3DTexture;if(R.isDepthTexture){const _e=yt.get(R),tn=yt.get(z),kn=yt.get(_e.__renderTarget),Ne=yt.get(tn.__renderTarget);mt.bindFramebuffer(G.READ_FRAMEBUFFER,kn.__webglFramebuffer),mt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let $e=0;$e<Dt;$e++)Ri&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,yt.get(R).__webglTexture,j,fe+$e),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,yt.get(z).__webglTexture,Tt,ze+$e)),G.blitFramebuffer(Vt,se,Vt+kt,se+wt,Bt,pe,Bt+kt,pe+wt,G.DEPTH_BUFFER_BIT,G.NEAREST);mt.bindFramebuffer(G.READ_FRAMEBUFFER,null),mt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||yt.has(R)){const _e=yt.get(R),tn=yt.get(z);mt.bindFramebuffer(G.READ_FRAMEBUFFER,E),mt.bindFramebuffer(G.DRAW_FRAMEBUFFER,I);for(let kn=0;kn<Dt;kn++)Ri?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,_e.__webglTexture,j,fe+kn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,_e.__webglTexture,j),$i?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,tn.__webglTexture,Tt,ze+kn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,tn.__webglTexture,Tt),j!==0?G.blitFramebuffer(Vt,se,Vt+kt,se+wt,Bt,pe,Bt+kt,pe+wt,G.COLOR_BUFFER_BIT,G.NEAREST):$i?G.copyTexSubImage3D(zt,Tt,Bt,pe,ze+kn,Vt,se,kt,wt):G.copyTexSubImage2D(zt,Tt,Bt,pe,Vt,se,kt,wt);mt.bindFramebuffer(G.READ_FRAMEBUFFER,null),mt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else $i?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(zt,Tt,Bt,pe,ze,kt,wt,Dt,Ee,nn,Re.data):z.isCompressedArrayTexture?G.compressedTexSubImage3D(zt,Tt,Bt,pe,ze,kt,wt,Dt,Ee,Re.data):G.texSubImage3D(zt,Tt,Bt,pe,ze,kt,wt,Dt,Ee,nn,Re):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Tt,Bt,pe,kt,wt,Ee,nn,Re.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Tt,Bt,pe,Re.width,Re.height,Ee,Re.data):G.texSubImage2D(G.TEXTURE_2D,Tt,Bt,pe,kt,wt,Ee,nn,Re);mt.pixelStorei(G.UNPACK_ROW_LENGTH,hn),mt.pixelStorei(G.UNPACK_IMAGE_HEIGHT,xe),mt.pixelStorei(G.UNPACK_SKIP_PIXELS,Zi),mt.pixelStorei(G.UNPACK_SKIP_ROWS,sn),mt.pixelStorei(G.UNPACK_SKIP_IMAGES,Zr),Tt===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&G.generateMipmap(zt),mt.unbindTexture()},this.initRenderTarget=function(R){yt.get(R).__webglFramebuffer===void 0&&Ct.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Ct.setTextureCube(R,0):R.isData3DTexture?Ct.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ct.setTexture2DArray(R,0):Ct.setTexture2D(R,0),mt.unbindTexture()},this.resetState=function(){F=0,O=0,K=null,mt.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}}const cd={type:"change"},_h={type:"start"},sp={type:"end"},To=new Gs,hd=new En,uM=Math.cos(70*Qe.DEG2RAD),Ve=new y,_n=2*Math.PI,ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ul=1e-6;class dM extends gg{constructor(t,e=null){super(t,e),this.state=ye.NONE,this.target=new y,this.cursor=new y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ls.ROTATE,MIDDLE:Ls.DOLLY,RIGHT:Ls.PAN},this.touches={ONE:Cs.ROTATE,TWO:Cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new y,this._lastQuaternion=new ve,this._lastTargetPosition=new y,this._quat=new ve().setFromUnitVectors(t.up,new y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ec,this._sphericalDelta=new Ec,this._scale=1,this._panOffset=new y,this._rotateStart=new Ot,this._rotateEnd=new Ot,this._rotateDelta=new Ot,this._panStart=new Ot,this._panEnd=new Ot,this._panDelta=new Ot,this._dollyStart=new Ot,this._dollyEnd=new Ot,this._dollyDelta=new Ot,this._dollyDirection=new y,this._mouse=new Ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=pM.bind(this),this._onPointerDown=fM.bind(this),this._onPointerUp=mM.bind(this),this._onContextMenu=SM.bind(this),this._onMouseWheel=vM.bind(this),this._onKeyDown=xM.bind(this),this._onTouchStart=yM.bind(this),this._onTouchMove=MM.bind(this),this._onMouseDown=gM.bind(this),this._onMouseMove=_M.bind(this),this._interceptControlDown=bM.bind(this),this._interceptControlUp=wM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ye.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cd),this.update(),this.state=ye.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ve.copy(e).sub(this.target),Ve.applyQuaternion(this._quat),this._spherical.setFromVector3(Ve),this.autoRotate&&this.state===ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=_n:n>Math.PI&&(n-=_n),s<-Math.PI?s+=_n:s>Math.PI&&(s-=_n),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ve.setFromSpherical(this._spherical),Ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ve.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new y(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(To.origin.copy(this.object.position),To.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(To.direction))<uM?this.object.lookAt(this.target):(hd.setFromNormalAndCoplanarPoint(this.object.up,this.target),To.intersectPlane(hd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ul||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ul||this._lastTargetPosition.distanceToSquared(this.target)>ul?(this.dispatchEvent(cd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?_n/60*this.autoRotateSpeed*t:_n/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ve.setFromMatrixColumn(e,0),Ve.multiplyScalar(-t),this._panOffset.add(Ve)}_panUp(t,e){this.screenSpacePanning===!0?Ve.setFromMatrixColumn(e,1):(Ve.setFromMatrixColumn(e,0),Ve.crossVectors(this.object.up,Ve)),Ve.multiplyScalar(t),this._panOffset.add(Ve)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ve.copy(s).sub(this.target);let r=Ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/e.clientHeight),this._rotateUp(_n*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-_n*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(_n*this._rotateDelta.x/e.clientHeight),this._rotateUp(_n*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function fM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function pM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function mM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sp),this.state=ye.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function gM(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ye.DOLLY;break;case Ls.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ye.ROTATE}break;case Ls.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ye.PAN}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(_h)}function _M(i){switch(this.state){case ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function vM(i){this.enabled===!1||this.enableZoom===!1||this.state!==ye.NONE||(i.preventDefault(),this.dispatchEvent(_h),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(sp))}function xM(i){this.enabled!==!1&&this._handleKeyDown(i)}function yM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Cs.ROTATE:if(this.enableRotate===!1){this.state=ye.NONE;break}this._handleTouchStartRotate(i),this.state=ye.TOUCH_ROTATE;break;case Cs.PAN:if(this.enablePan===!1){this.state=ye.NONE;break}this._handleTouchStartPan(i),this.state=ye.TOUCH_PAN;break;default:this.state=ye.NONE}break;case 2:switch(this.touches.TWO){case Cs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ye.TOUCH_DOLLY_PAN;break;case Cs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ye.TOUCH_DOLLY_ROTATE;break;default:this.state=ye.NONE}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(_h)}function MM(i){switch(this._trackPointer(i),this.state){case ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ye.NONE}}function SM(i){this.enabled!==!1&&i.preventDefault()}function bM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function qi(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const Ut=(i,t,e)=>i<t?t:i>e?e:i,TM=i=>Ut(i,0,1),ht=(i,t,e)=>i+(t-i)*e,Rt=Math.PI/180;function it(i,t,e){const n=TM((e-i)/(t-i));return n*n*(3-2*n)}function Ln(i,t){const e=i.length,n=Ut(t,0,e-1),s=Math.min(Math.floor(n),e-2),r=n-s,o=i[Math.max(s-1,0)],a=i[s],l=i[s+1],c=i[Math.min(s+2,e-1)];return .5*(2*a+(-o+l)*r+(2*o-5*a+4*l-c)*r*r+(-o+3*a-3*l+c)*r*r*r)}function Cn(i,t,e,n){return ht(i,t,1-Math.exp(-e*n))}function rp(i,t,e,n){return i+Math.atan2(Math.sin(t-i),Math.cos(t-i))*(1-Math.exp(-e*n))}function ud(i,t){let e=i*374761393+t*668265263|0;return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function Ge(i,t=0){const e=Math.floor(i),n=i-e,s=n*n*(3-2*n);return ht(ud(e,t),ud(e+1,t),s)*2-1}const _t=(i,t,e)=>t+(e-t)*i();function EM(i,t,e,n=2){return t+(e-t)*Math.pow(i(),n)}class Ti{constructor(t=6,e=.5){this.freq=t,this.zeta=e}freq;zeta;x=0;v=0;step(t,e){const n=this.freq*Math.PI*2,s=Math.max(1,Math.ceil(e*this.freq*8)),r=e/s;for(let o=0;o<s;o++)this.v+=(-n*n*(this.x-t)-2*this.zeta*n*this.v)*r,this.x+=this.v*r;return this.x}kick(t){this.v+=t}}const AM=`
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
`;function op(i=0){const t=qi(7),e=[],n=[];for(let o=0;o<48;o++){const a=(t()-.5)*Math.PI*2,l=(t()-.35)*1.2;e.push(new y(Math.sin(a)*Math.cos(l),Math.sin(l),-Math.cos(a)*Math.cos(l)).normalize()),n.push(new Ot(.06+t()*.14,.15+t()*.6))}const s=new xn({vertexShader:AM,fragmentShader:RM,uniforms:{uTime:{value:0},uEnv:{value:0},uMist:{value:i},uBlobs:{value:e},uBlobR:{value:n},uBlobCos:{value:n.map(o=>Math.cos(o.x))}},side:pn,depthWrite:!1}),r=new me(new ci(50,64,32),s);return r.frustumCulled=!1,r.renderOrder=1e3,{mesh:r,material:s}}const Ue=new Dn,Eo=new y,dd=new Ot,fd=new Ot,pd=new Ot;class CM{constructor(t){this.geometry=t.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(t){return this.weightAttribute=t?this.geometry.getAttribute(t):null,this}build(){const t=this.indexAttribute,e=this.positionAttribute,n=this.weightAttribute,s=t?t.count/3:e.count/3,r=new Float32Array(s);for(let l=0;l<s;l++){let c=1,h=3*l,u=3*l+1,d=3*l+2;t&&(h=t.getX(h),u=t.getX(u),d=t.getX(d)),n&&(c=n.getX(h)+n.getX(u)+n.getX(d)),Ue.a.fromBufferAttribute(e,h),Ue.b.fromBufferAttribute(e,u),Ue.c.fromBufferAttribute(e,d),c*=Ue.getArea(),r[l]=c}const o=new Float32Array(s);let a=0;for(let l=0;l<s;l++)a+=r[l],o[l]=a;return this.distribution=o,this}setRandomGenerator(t){return this.randomFunction=t,this}sample(t,e,n,s){const r=this._sampleFaceIndex();return this._sampleFace(r,t,e,n,s)}_sampleFaceIndex(){const t=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*t)}_binarySearch(t){const e=this.distribution;let n=0,s=e.length-1,r=-1;for(;n<=s;){const o=Math.ceil((n+s)/2);if(o===0||e[o-1]<=t&&e[o]>t){r=o;break}else t<e[o]?s=o-1:n=o+1}return r}_sampleFace(t,e,n,s,r){let o=this.randomFunction(),a=this.randomFunction();o+a>1&&(o=1-o,a=1-a);const l=this.indexAttribute;let c=t*3,h=t*3+1,u=t*3+2;return l&&(c=l.getX(c),h=l.getX(h),u=l.getX(u)),Ue.a.fromBufferAttribute(this.positionAttribute,c),Ue.b.fromBufferAttribute(this.positionAttribute,h),Ue.c.fromBufferAttribute(this.positionAttribute,u),e.set(0,0,0).addScaledVector(Ue.a,o).addScaledVector(Ue.b,a).addScaledVector(Ue.c,1-(o+a)),n!==void 0&&(this.normalAttribute!==void 0?(Ue.a.fromBufferAttribute(this.normalAttribute,c),Ue.b.fromBufferAttribute(this.normalAttribute,h),Ue.c.fromBufferAttribute(this.normalAttribute,u),n.set(0,0,0).addScaledVector(Ue.a,o).addScaledVector(Ue.b,a).addScaledVector(Ue.c,1-(o+a)).normalize()):Ue.getNormal(n)),s!==void 0&&this.colorAttribute!==void 0&&(Ue.a.fromBufferAttribute(this.colorAttribute,c),Ue.b.fromBufferAttribute(this.colorAttribute,h),Ue.c.fromBufferAttribute(this.colorAttribute,u),Eo.set(0,0,0).addScaledVector(Ue.a,o).addScaledVector(Ue.b,a).addScaledVector(Ue.c,1-(o+a)),s.r=Eo.x,s.g=Eo.y,s.b=Eo.z),r!==void 0&&this.uvAttribute!==void 0&&(dd.fromBufferAttribute(this.uvAttribute,c),fd.fromBufferAttribute(this.uvAttribute,h),pd.fromBufferAttribute(this.uvAttribute,u),r.set(0,0).addScaledVector(dd,o).addScaledVector(fd,a).addScaledVector(pd,1-(o+a))),this}}function md(i,t){if(t===b0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===yc||t===wf){let e=i.getIndex();if(e===null){const r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=e.count-2,s=[];if(t===yc)for(let r=1;r<=n;r++)s.push(e.getX(0)),s.push(e.getX(r)),s.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(e.getX(r)),s.push(e.getX(r+1)),s.push(e.getX(r+2))):(s.push(e.getX(r+2)),s.push(e.getX(r+1)),s.push(e.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}function PM(i){const t=new Map,e=new Map,n=i.clone();return ap(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=t.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return e.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function ap(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)ap(i.children[n],t.children[n],e)}class LM extends qs{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new FM(e)}),this.register(function(e){return new OM(e)}),this.register(function(e){return new kM(e)}),this.register(function(e){return new YM(e)}),this.register(function(e){return new KM(e)}),this.register(function(e){return new ZM(e)}),this.register(function(e){return new zM(e)}),this.register(function(e){return new HM(e)}),this.register(function(e){return new GM(e)}),this.register(function(e){return new VM(e)}),this.register(function(e){return new UM(e)}),this.register(function(e){return new WM(e)}),this.register(function(e){return new BM(e)}),this.register(function(e){return new qM(e)}),this.register(function(e){return new XM(e)}),this.register(function(e){return new DM(e)}),this.register(function(e){return new gd(e,he.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new gd(e,he.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new $M(e)})}load(t,e,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Er.extractUrlBase(t);o=Er.resolveURL(c,this.path)}else o=Er.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){s?s(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new Vf(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===lp){try{o[he.KHR_BINARY_GLTF]=new JM(t)}catch(u){s&&s(u);return}r=JSON.parse(o[he.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new h1(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case he.KHR_MATERIALS_UNLIT:o[u]=new NM;break;case he.KHR_DRACO_MESH_COMPRESSION:o[u]=new jM(r,this.dracoLoader);break;case he.KHR_TEXTURE_TRANSFORM:o[u]=new QM;break;case he.KHR_MESH_QUANTIZATION:o[u]=new t1;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(t,e){const n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}}function IM(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}function Oe(i,t,e){const n=i.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}const he={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class DM{constructor(t){this.parser=t,this.name=he.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let s=e.cache.get(n);if(s)return s;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const h=new Nt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Mn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new fh(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new tg(h),c.distance=u;break;case"spot":c=new jm(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ei(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),s=Promise.resolve(c),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class NM{constructor(){this.name=he.KHR_MATERIALS_UNLIT}getMaterialType(){return Xn}extendParams(t,e,n){const s=[];t.color=new Nt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Mn),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,We))}return Promise.all(s)}}class UM{constructor(t){this.parser=t,this.name=he.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class FM{constructor(t){this.parser=t,this.name=he.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Ot(r,r)}return Promise.all(s)}}class OM{constructor(t){this.parser=t,this.name=he.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];return e.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}}class kM{constructor(t){this.parser=t,this.name=he.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class BM{constructor(t){this.parser=t,this.name=he.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class zM{constructor(t){this.parser=t,this.name=he.KHR_MATERIALS_SHEEN}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];if(e.sheenColor=new Nt(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],Mn)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,We)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class HM{constructor(t){this.parser=t,this.name=he.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class GM{constructor(t){this.parser=t,this.name=he.KHR_MATERIALS_VOLUME}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return e.attenuationColor=new Nt().setRGB(r[0],r[1],r[2],Mn),Promise.all(s)}}class VM{constructor(t){this.parser=t,this.name=he.KHR_MATERIALS_IOR}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}}class WM{constructor(t){this.parser=t,this.name=he.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return e.specularColor=new Nt().setRGB(r[0],r[1],r[2],Mn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,We)),Promise.all(s)}}class XM{constructor(t){this.parser=t,this.name=he.EXT_MATERIALS_BUMP}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(s)}}class qM{constructor(t){this.parser=t,this.name=he.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Oe(this.parser,t,this.name)!==null?gn:null}extendMaterialParams(t,e){const n=Oe(this.parser,t,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class YM{constructor(t){this.parser=t,this.name=he.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class KM{constructor(t){this.parser=t,this.name=he.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class ZM{constructor(t){this.parser=t,this.name=he.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class gd{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}class $M{constructor(t){this.name=he.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=e.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==In.TRIANGLES&&c.mode!==In.TRIANGLE_STRIP&&c.mode!==In.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const v=new Yt,p=new y,m=new ve,M=new y(1,1,1),T=new Sm(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&M.fromBufferAttribute(l.SCALE,x),T.setMatrixAt(x,v.compose(p,m,M));let b=null;for(const x in l)if(x==="_COLOR_0"){const A=l[x];T.instanceColor=new aa(A.array,A.itemSize,A.normalized)}else if(x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"){if(b===null){const _=T.geometry;b=new Me,b.name=_.name;for(const w in _.attributes)b.setAttribute(w,_.attributes[w]);for(const w in _.morphAttributes)b.morphAttributes[w]=_.morphAttributes[w];_.index!==null&&b.setIndex(_.index),b.morphTargetsRelative=_.morphTargetsRelative;for(const w of _.groups)b.addGroup(w.start,w.count,w.materialIndex);_.boundingBox!==null&&(b.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(b.boundingSphere=_.boundingSphere.clone()),b.drawRange.start=_.drawRange.start,b.drawRange.count=_.drawRange.count,b.userData=Object.assign({},_.userData),T.geometry=b}const A=l[x];b.setAttribute(x,new aa(A.array,A.itemSize,A.normalized))}De.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),f.push(T)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const lp="glTF",rr=12,_d={JSON:1313821514,BIN:5130562};class JM{constructor(t){this.name=he.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,rr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==lp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-rr,r=new DataView(t,rr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===_d.JSON){const c=new Uint8Array(t,rr+o,a);this.content=n.decode(c)}else if(l===_d.BIN){const c=rr+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class jM{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=he.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Rc[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=Rc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=Us[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],p=l[g];p!==void 0&&(v.normalized=p)}u(f)},a,c,Mn,d)})})}}class QM{constructor(){this.name=he.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){const n=Math.cos(t.rotation),s=Math.sin(t.rotation);t.matrix.set(t.repeat.x*n,t.repeat.y*s,t.offset.x,-t.repeat.x*s,t.repeat.y*n,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}}class t1{constructor(){this.name=he.KHR_MESH_QUANTIZATION}}class cp extends Vs{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-e,u=(n-e)/h,d=u*u,f=d*u,g=t*c,v=g-c,p=-2*f+3*d,m=f-d,M=1-p,T=m-d+u;for(let b=0;b!==a;b++){const x=o[v+b+a],A=o[v+b+l]*h,_=o[g+b+a],w=o[g+b]*h;r[b]=M*x+T*A+p*_+m*w}return r}}const e1=new ve;class n1 extends cp{interpolate_(t,e,n,s){const r=super.interpolate_(t,e,n,s);return e1.fromArray(r).normalize().toArray(r),r}}const In={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Us={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vd={9728:Fe,9729:je,9984:_f,9985:Wo,9986:gr,9987:ri},xd={33071:si,33648:na,10497:os},dl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Rc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},i1={CUBICSPLINE:void 0,LINEAR:Nr,STEP:Dr},fl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function s1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new mn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gi})),i.DefaultMaterial}function es(i,t,e){for(const n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ei(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function r1(i,t,e){let n=!1,s=!1,r=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function o1(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function a1(i){let t;const e=i.extensions&&i.extensions[he.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+pl(e.attributes):t=i.indices+":"+pl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+pl(i.targets[n]);return t}function pl(i){let t="";const e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Cc(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function l1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const c1=new Yt;class h1{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new IM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new Zm(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ng(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vf(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return es(r,a,s),ei(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){const o=e[s].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){const o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const s=t(e[n]);if(s)return s}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let s=0;s<e.length;s++){const r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[he.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Er.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){const e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){const o=dl[s.type],a=Us[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Pe(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=dl[s.type],c=Us[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,p;if(f&&f!==u){const m=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count;let T=e.cache.get(M);T||(v=new c(a,m*f,s.count*f/h),T=new pm(v,f/h),e.cache.add(M,T)),p=new oh(T,l,d%f/h,g)}else a===null?v=new c(s.count*l):v=new c(a,d,s.count*l),p=new Pe(v,l,g);if(s.sparse!==void 0){const m=dl.SCALAR,M=Us[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,x=new M(o[1],T,s.sparse.count*m),A=new c(o[2],b,s.sparse.count*l);a!==null&&(p=new Pe(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let _=0,w=x.length;_<w;_++){const N=x[_];if(p.setX(N,A[_*l]),l>=2&&p.setY(N,A[_*l+1]),l>=3&&p.setZ(N,A[_*l+2]),l>=4&&p.setW(N,A[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const s=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=vd[d.magFilter]||je,h.minFilter=vd[d.minFilter]||ri,h.wrapS=xd[d.wrapS]||os,h.wrapT=xd[d.wrapT]||os,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Fe&&h.minFilter!==je,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(d=>d.clone());const o=s.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1,h;if(e.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,g){e.parse(d,f,g)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,g){let v=f;e.isImageBitmapLoader===!0&&(v=function(p){const m=new Xe(p);m.needsUpdate=!0,f(m)}),e.load(Er.resolveURL(d,r.path),v,void 0,g)})})}const u=h.then(function(d){return c===!0&&a.revokeObjectURL(l),ei(d,o),d.userData.mimeType=o.mimeType||l1(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[t]=u,u}assignTexture(t,e,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[he.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[he.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[he.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Nf,ai.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new xa,ai.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return mn}loadMaterial(t){const e=this,n=this.json,s=this.extensions,r=n.materials[t];let o;const a={},l=r.extensions||{},c=[];if(l[he.KHR_MATERIALS_UNLIT]){const u=s[he.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Nt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Mn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,We)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Be);const h=r.alphaMode||fl.OPAQUE;if(h===fl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===fl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Xn&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ot(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Xn&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Xn){const u=r.emissiveFactor;a.emissive=new Nt().setRGB(u[0],u[1],u[2],Mn)}return r.emissiveTexture!==void 0&&o!==Xn&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,We)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),ei(u,r),e.associations.set(u,{materials:t}),r.extensions&&es(s,u,r),u})}createUniqueName(t){const e=Te.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[he.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return yd(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=a1(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[he.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=yd(new Me,c,e),c.mode===In.TRIANGLE_STRIP?d=d.then(f=>md(f,wf)):c.mode===In.TRIANGLE_FAN&&(d=d.then(f=>md(f,yc))),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?s1(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],p=o[f];let m;const M=c[f];if(p.mode===In.TRIANGLES||p.mode===In.TRIANGLE_STRIP||p.mode===In.TRIANGLE_FAN||p.mode===void 0){const T=r.isSkinnedMesh===!0,b=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");T&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=T&&b?new ni(v,M):new me(v,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===In.LINES)m=new ha(v,M);else if(p.mode===In.LINE_STRIP)m=new ch(v,M);else if(p.mode===In.LINE_LOOP)m=new wm(v,M);else if(p.mode===In.POINTS)m=new Uf(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&o1(m,r),m.name=e.createUniqueName(r.name||"mesh_"+t),ei(m,r),p.extensions&&es(s,m,p),e.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&es(s,u[0],r),u[0];const d=new cn;r.extensions&&es(s,d,r),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new vn(Qe.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new Ma(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ei(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Yt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new va(a,l)})}loadAnimation(t){const e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],g=s.samplers[f.sampler],v=f.target,p=v.node,m=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],v=u[3],p=u[4],m=[];for(let T=0,b=d.length;T<b;T++){const x=d[T],A=f[T],_=g[T],w=v[T],N=p[T];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const P=n._createAnimationTracks(x,A,_,w,N);if(P)for(let D=0;D<P.length;D++)m.push(P[D])}const M=new Gm(r,void 0,m);return ei(M,s),M})}createNodeMesh(t){const e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(t){const e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,c1)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,g=u[0];h.pivot=new y().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new ah:c.length>1?h=new cn:c.length===1?h=c[0]:h=new De,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ei(h,r),r.extensions&&es(n,h,r),r.matrix!==void 0){const u=new Yt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],s=this,r=new cn;n.name&&(r.name=s.createUniqueName(n.name)),ei(r,n),n.extensions&&es(e,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){const d=l[h];d.parent!==null?r.add(PM(d)):r.add(d)}const c=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof ai||d instanceof Xe)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(t,e,n,s,r){const o=[],a=t.name?t.name:t.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Ui[r.path]===Ui.weights?(c(t),t.isGroup&&t.children.forEach(c)):l.push(a);let h;switch(Ui[r.path]){case Ui.weights:h=kr;break;case Ui.rotation:h=Br;break;case Ui.translation:case Ui.scale:h=ua;break;default:n.itemSize===1?h=kr:h=ua;break}const u=s.interpolation!==void 0?i1[s.interpolation]:Nr,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){const v=new h(l[f]+"."+Ui[r.path],e.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Cc(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const s=this instanceof Br?n1:cp;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function u1(i,t,e){const n=t.attributes,s=new di;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new y(l[0],l[1],l[2]),new y(c[0],c[1],c[2])),a.normalized){const h=Cc(Us[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new y,l=new y;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=Cc(Us[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new On;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function yd(i,t,e){const n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=Rc[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){const o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return de.workingColorSpace!==Mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${de.workingColorSpace}" not supported.`),ei(i,t),u1(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?r1(i,t.targets,e):i})}const Md={round:1,cup:.5,fine:!0,spacing:.8,fuzz:0},d1={name:"Lampornis calolaemus",seed:1207,sections:[{y:-.07,z:-.32,a:60,w:.035,rd:.03,rv:.035},{y:.04,z:-.245,a:60,w:.15,rd:.105,rv:.13},{y:.17,z:-.165,a:63,w:.225,rd:.16,rv:.2},{y:.34,z:-.09,a:68,w:.262,rd:.185,rv:.25},{y:.52,z:-.035,a:76,w:.258,rd:.185,rv:.245},{y:.67,z:-.005,a:84,w:.236,rd:.185,rv:.212},{y:.775,z:.008,a:80,w:.205,rd:.182,rv:.19},{y:.887,z:.052,a:62,w:.15,rd:.17,rv:.17},{y:.926,z:.116,a:38,w:.117,rd:.14,rv:.14},{y:.925,z:.195,a:18,w:.066,rd:.09,rv:.07},{y:.905,z:.245,a:8,w:.03,rd:.032,rv:.028}],throat:[4.5,7.3],spine:{tail:.3,hips:1.9,spine:3,chest:4.1,neck1:5.3,neck2:5.95,head:6.55},eye:{s:7.8,phi:.535,radius:.037,inset:.84},bill:{length:.44,radius:.02,droop:.022,color:460551},skin:1840662,shading:{flank:.6,under:.6,patch:.3,gold:5921324,goldAmount:.22},looks:{body:{width:.03,aspect:2.1,rowStep:.3,tilt:13,lift:1,cup:.3,round:.7,loose:.55,fuzz:.3,base:2104356,tip:5195350,iri:4885036,iriGraze:9071132,iriStrength:.12,iriPower:6,iriAlign:0,jitter:.5,sparkle:.6},belly:{width:.033,aspect:2.5,rowStep:.24,tilt:11,lift:1.2,cup:.25,round:.65,loose:.75,base:2630191,tip:6970485,iri:6982186,iriGraze:9071146,iriStrength:.1,iriPower:5,iriAlign:0,jitter:.5,sparkle:.6},flank:{width:.036,aspect:2.8,rowStep:.24,tilt:12,lift:1.3,cup:.2,round:.55,loose:.9,base:2301226,tip:6313066,iri:5925434,iriGraze:6965802,iriStrength:.06,iriPower:4,iriAlign:0,jitter:.5,sparkle:.7},down:{width:.04,aspect:2.6,rowStep:.24,tilt:26,lift:1.4,cup:.15,round:.5,loose:1,base:1840664,tip:4207930,iri:16777215,iriGraze:16777215,iriStrength:0,iriPower:2,iriAlign:0,jitter:.3},back:{width:.03,aspect:2,rowStep:.31,tilt:11,lift:.9,cup:.35,round:.75,loose:.45,fuzz:.3,base:2039078,tip:4867669,iri:3840570,iriGraze:9071128,iriStrength:.24,iriPower:7,iriAlign:0,jitter:.5,sparkle:.45},scapular:{width:.042,aspect:3.3,rowStep:.24,tilt:21,lift:.8,cup:.3,round:.6,loose:.6,fuzz:.4,base:2170408,tip:5327964,iri:3836474,iriGraze:9071128,iriStrength:.2,iriPower:6,iriAlign:0,jitter:.5,sparkle:.5},collar:{width:.027,aspect:1.45,rowStep:.36,tilt:12,lift:.8,cup:.35,round:1,loose:.3,spacing:.7,fuzz:.12,base:1184536,tip:2369580,iri:2072672,iriGraze:678490,iriStrength:.32,iriPower:12,iriAlign:.3,iriAim:[0,.1,1],jitter:.55,sparkle:.6},head:{width:.017,aspect:1.8,rowStep:.34,tilt:12,lift:.45,cup:.35,round:.9,loose:.4,fuzz:.22,base:1184279,tip:2763315,iri:1866320,iriGraze:5263386,iriStrength:.28,iriPower:7,iriAlign:0,jitter:.45,sparkle:.4},mask:{width:.012,aspect:1.7,rowStep:.36,tilt:10,lift:.2,cup:.3,round:.9,loose:.35,fuzz:.25,base:263173,tip:789517,iri:1054752,iriGraze:0,iriStrength:.04,iriPower:4,iriAlign:0,jitter:.2},velvet:{width:.015,aspect:1.6,rowStep:.28,tilt:6,lift:.15,cup:.2,round:.7,loose:.8,fuzz:.7,base:262915,tip:985865,iri:0,iriGraze:0,iriStrength:0,iriPower:2,iriAlign:0,jitter:.2},stripe:{width:.012,aspect:2.6,rowStep:.24,tilt:6,lift:.2,cup:.15,round:.5,loose:.95,fuzz:1,base:11841962,tip:15526885,iri:16777215,iriGraze:16777215,iriStrength:0,iriPower:2,iriAlign:0,jitter:.2},covert:{width:.046,aspect:2.6,rowStep:.33,tilt:9,lift:.7,cup:.3,round:.7,loose:.4,base:2170151,tip:5129816,iri:3832400,iriGraze:5917226,iriStrength:.18,iriPower:6,iriAlign:0,jitter:.4,sparkle:.5},undertail:{width:.04,aspect:2.9,rowStep:.26,tilt:10,lift:.8,cup:.2,round:.6,loose:.8,base:7827564,tip:13617342,iri:16777215,iriGraze:16777215,iriStrength:0,iriPower:2,iriAlign:0,jitter:.3},wingCovert:{width:.03,aspect:2.3,rowStep:.4,tilt:7,lift:0,cup:.3,round:.8,loose:.22,fuzz:0,base:1512732,tip:4012104,iri:4872824,iriGraze:5917242,iriStrength:.06,iriPower:6,iriAlign:0,jitter:.4,sparkle:.6},gorget:{...Md,width:.052,aspect:1,rowStep:.3,tilt:8,lift:.5,spacing:.6,base:1706510,tip:4527900,iri:8007935,iriGraze:12595338,iriStrength:2,iriPower:4.2,iriAlign:.74,iriAim:[0,-.5,.87],jitter:.34,channel:"gorget"},crown:{...Md,width:.019,aspect:1.3,rowStep:.34,tilt:10,lift:.4,fuzz:.45,sparkle:.5,loose:.12,base:330507,tip:662554,iri:1368772,iriGraze:1726680,iriStrength:2.3,iriPower:5,iriAlign:.8,iriAim:[0,-.24,1],jitter:.55,channel:"crown"}},tracts:[{name:"belly",look:"belly",region:{kind:"band",s:[0,3.7],phi:[0,.45],soft:.6}},{name:"flank",look:"flank",region:{kind:"band",s:[1.2,4.2],phi:[.3,.52],soft:.5}},{name:"back",look:"back",region:{kind:"band",s:[.9,6.2],phi:[.55,1]}},{name:"scapular",look:"scapular",region:{kind:"band",s:[3.7,5.6],phi:[.56,.84],soft:.3}},{name:"wingPit",look:"down",region:{kind:"blob",at:[3.8,.44],r:[.3,.035],soft:.5}},{name:"tailCoverts",look:"covert",region:{kind:"band",s:[0,1.15],phi:[0,1]}},{name:"undertail",look:"undertail",region:{kind:"band",s:[0,1.35],phi:[0,.4],soft:.3}},{name:"collar",look:"collar",region:{kind:"blob",at:[4.5,0],r:[.72,.44],soft:.6}},{name:"head",look:"head",region:{kind:"band",s:[6,11],phi:[0,1]}},{name:"velvet",look:"velvet",region:{kind:"blob",at:[8,0],r:[2.25,.63],pow:3,soft:.2}},{name:"mask",look:"mask",region:{kind:"blob",at:[8.3,.5],r:[1,.11]}},{name:"gorget",look:"gorget",region:{kind:"blob",at:[6.35,0],r:[1.4,.27],pow:3}},{name:"chin",look:"gorget",region:{kind:"blob",at:[7.7,0],r:[1.05,.17]}},{name:"crown",look:"crown",region:{kind:"blob",at:[8.5,1],r:[1.3,.4]}},{name:"postocular",look:"stripe",region:{kind:"streak",from:[7.5,.57],to:[6.3,.6],r:[.12,.025]}}],wing:{shoulder:[.185,.64,-.06],upper:.1,fore:.13,hand:.17,primaries:10,secondaries:6,primaryLen:[.34,.9],secondaryLen:[.27,.2],primaryWidth:.062,secondaryWidth:.064,rest:{from:[5.1,93],to:[.6,147],width:[.05,.105,.04],height:.034,cross:[.8,-.02]},color:3878193,sheen:8021618},tail:{rectrices:5,length:[.61,.66],width:.13,droop:62,restFan:.35,maxFan:11,color:1909292},legs:{spread:.075,hip:[.085,.11,-.05],toe:.085,perchRadius:.0405,color:1446159},behaviour:{breathHz:[3.4,5.2],holdCalm:[.4,1.8],holdAlert:[.22,.9],saccade:[.038,42e-5],neckShare:[.22,.3],blinkEvery:[1.8,5.5],ruffleEvery:[60,110],tailEvery:[3,9],wingEvery:[9,22],billUp:14}},wn={iri:6733892,iriGraze:3116914,iriStrength:.07,iriPower:3,iriAlign:0,jitter:.4,sparkle:.25},hp={name:"Amazona vittata",seed:1493,sections:[{y:-.1,z:-.3,a:58,w:.06,rd:.045,rv:.05},{y:.02,z:-.235,a:58,w:.17,rd:.12,rv:.14},{y:.15,z:-.16,a:61,w:.235,rd:.165,rv:.2},{y:.32,z:-.085,a:66,w:.265,rd:.19,rv:.245},{y:.5,z:-.03,a:74,w:.265,rd:.195,rv:.25},{y:.66,z:0,a:82,w:.245,rd:.195,rv:.225},{y:.78,z:.015,a:78,w:.228,rd:.2,rv:.208},{y:.905,z:.06,a:60,w:.205,rd:.205,rv:.2},{y:.957,z:.128,a:36,w:.19,rd:.188,rv:.182},{y:.948,z:.232,a:4,w:.155,rd:.148,rv:.132},{y:.872,z:.28,a:-32,w:.072,rd:.093,rv:.055}],throat:[4.5,7.3],spine:{tail:.3,hips:1.9,spine:3,chest:4.1,neck1:5.3,neck2:5.95,head:6.55},eye:{s:8.8,phi:.59,radius:.03,inset:.86,bare:2.05,open:[52,47],ring:{color:15130836,width:1.85},lid:12433066,iris:9061398,pupil:[.93,.985]},bill:{length:.054,radius:.062,droop:.004,color:14470576,hook:{top:.093,reach:.096,drop:.078,turn:105,lower:.085,lowerWidth:.072,cere:12891046},gape:.6},skin:1317392,headRuff:0,shading:{flank:.86,under:.82,patch:.14,gold:10139706,goldAmount:.18},looks:{body:{edge:.5,closed:.85,...wn,width:.062,aspect:1.4,rowStep:.36,tilt:8,lift:.9,cup:.3,round:.95,loose:.12,fuzz:.06,base:2047258,tip:5220408},breast:{edge:.8,closed:.9,...wn,width:.066,aspect:1.45,rowStep:.36,tilt:8,lift:.9,cup:.32,round:1,loose:.1,fuzz:.05,spacing:.7,base:2310681,tip:5811772},belly:{edge:.28,closed:.65,...wn,width:.064,aspect:1.5,rowStep:.34,tilt:9,lift:1.1,cup:.28,round:.95,loose:.2,fuzz:.12,base:2902559,tip:7649352},flank:{edge:.3,closed:.65,...wn,width:.066,aspect:1.6,rowStep:.33,tilt:10,lift:1.2,cup:.26,round:.9,loose:.24,fuzz:.12,base:2442012,tip:6073918},down:{width:.05,aspect:2.2,rowStep:.26,tilt:22,lift:1.3,cup:.15,round:.5,loose:1,base:3818038,tip:7635052,iri:16777215,iriGraze:16777215,iriStrength:0,iriPower:2,iriAlign:0,jitter:.3},back:{edge:.45,closed:.88,...wn,width:.07,aspect:1.5,rowStep:.36,tilt:8,lift:.8,cup:.32,round:.9,loose:.18,fuzz:.06,base:1783832,tip:4168242},scapular:{edge:.4,closed:.9,...wn,width:.085,aspect:1.9,rowStep:.34,tilt:10,lift:.7,cup:.3,round:.85,loose:.15,fuzz:.05,base:1783832,tip:3970096},nape:{edge:.95,closed:.92,...wn,width:.05,aspect:1.35,rowStep:.38,tilt:9,lift:1,cup:.34,round:1,loose:.15,spacing:.7,base:1584917,tip:4102707},head:{edge:.92,closed:.92,...wn,width:.036,aspect:1.3,rowStep:.4,tilt:8,lift:.6,cup:.34,round:1,loose:.15,fuzz:.05,spacing:.7,base:1518868,tip:4168756},cheek:{edge:.6,closed:.85,...wn,width:.034,aspect:1.5,rowStep:.36,tilt:7,lift:.4,cup:.3,round:.9,loose:.3,base:2047e3,tip:5614650},lore:{edge:.2,closed:.7,...wn,width:.014,aspect:1.3,rowStep:.4,tilt:5,lift:.1,cup:.3,round:.9,loose:.3,base:1848598,tip:4694838},forecrown:{edge:.3,closed:.75,width:.022,aspect:1.4,rowStep:.4,tilt:8,lift:.3,cup:.3,round:.9,loose:.3,fuzz:.1,base:4852744,tip:13574936,iri:16734778,iriGraze:11541008,iriStrength:.05,iriPower:3,iriAlign:0,jitter:.4,sparkle:.2},covert:{edge:.4,closed:.88,...wn,width:.07,aspect:1.8,rowStep:.34,tilt:8,lift:.6,cup:.3,round:.85,loose:.2,base:1915417,tip:4497461},undertail:{edge:.1,closed:.65,...wn,width:.07,aspect:2.2,rowStep:.3,tilt:9,lift:.8,cup:.2,round:.8,loose:.4,base:3955234,tip:10208846},wingCovert:{edge:.45,closed:.9,...wn,width:.05,aspect:2,rowStep:.4,tilt:7,lift:0,cup:.3,round:.85,loose:.12,fuzz:0,base:1718039,tip:3905073}},tracts:[{name:"belly",look:"belly",region:{kind:"band",s:[0,3.6],phi:[0,.42],soft:.5}},{name:"flank",look:"flank",region:{kind:"band",s:[1.2,4],phi:[.3,.52],soft:.5}},{name:"breast",look:"breast",region:{kind:"blob",at:[4.9,0],r:[1.6,.5],soft:.4}},{name:"back",look:"back",region:{kind:"band",s:[.9,5.9],phi:[.55,1]}},{name:"scapular",look:"scapular",region:{kind:"band",s:[3.7,5.6],phi:[.56,.84],soft:.3}},{name:"wingPit",look:"down",region:{kind:"blob",at:[3.8,.44],r:[.3,.035],soft:.5}},{name:"tailCoverts",look:"covert",region:{kind:"band",s:[0,1.15],phi:[0,1]}},{name:"undertail",look:"undertail",region:{kind:"band",s:[0,1.4],phi:[0,.42],soft:.3}},{name:"nape",look:"nape",region:{kind:"band",s:[5.7,7.4],phi:[0,1],soft:.3}},{name:"head",look:"head",region:{kind:"band",s:[7,11],phi:[0,1],soft:.2}},{name:"cheek",look:"cheek",region:{kind:"blob",at:[8.2,.3],r:[.9,.2],soft:.4}},{name:"eye",look:"lore",region:{kind:"blob",at:[8.8,.59],r:[.62,.1],soft:.2}},{name:"forecrown",look:"forecrown",region:{kind:"band",s:[9.7,11],phi:[.62,1],soft:.05}}],wing:{shoulder:[.2,.63,-.06],upper:.19,fore:.23,hand:.19,primaries:10,secondaries:9,primaryLen:[.44,.7],secondaryLen:[.42,.36],primaryWidth:.115,secondaryWidth:.125,rest:{from:[5,96],to:[1.1,150],width:[.07,.14,.055],height:.032,cross:[.3,.06]},color:2058794,sheen:4889178,primaryColor:1520506,secondaryColor:2058794,covertWidth:[.05,.09],covertAspect:[1.35,1.8],drape:0,bladeScale:1.45},tail:{rectrices:6,length:[.5,.44],width:.16,droop:66,restFan:.6,maxFan:10,color:3111466,tip:9420606,sheen:5937738,centralSheen:3836474},legs:{spread:.1,hip:[.1,.12,-.05],toe:.095,perchRadius:.0405,color:11047532,toeRadius:.013,zygodactyl:!0},behaviour:{breathHz:[.6,1.1],holdCalm:[1.2,4.5],holdAlert:[.5,1.8],saccade:[.09,.0011],neckShare:[.22,.3],blinkEvery:[3,8],ruffleEvery:[50,100],tailEvery:[12,30],wingEvery:[25,60],billUp:2,parrot:!0}},Yi=matchMedia("(pointer: coarse)").matches,f1=hp.legs.perchRadius,Kn=.2;function up(i){return f1*Math.min(1-.18*i,2.2)}const dp=[Kn-.45,Kn+.45];function p1(i,t=dp){i.updateMatrixWorld(!0);const e=i.getObjectByName("perch"),n=e?m1(e,t[0]-.1,t[1]+.1):null,s=n?n.geometry.getAttribute("position").clone().applyMatrix4(n.matrixWorld).array:new Float32Array,r=new Xf;r.ray.direction.set(0,-1,0);const o=[],a=new Map,l=new y,c=new y;function h(d){let f=1/0,g=-1/0;for(let v=0;v<s.length;v+=3)Math.abs(s[v]-d)>.006||(f=Math.min(f,s[v+2]),g=Math.max(g,s[v+2]));return f<=g?(f+g)/2:0}function u(d,f){if(!n)return null;r.ray.origin.set(d,2,h(d)),o.length=0,r.intersectObject(n,!1,o);const g=o[0];return g?f.copy(g.point):null}return(d,f)=>{const g=Math.round(d*1e3);let v=a.get(g);return v===void 0&&(v={point:new y,up:new y,tangent:new y,radius:up(d)},u(d,v.point)&&u(d-.03,l)&&u(d+.03,c)?(v.tangent.copy(c).sub(l).normalize(),v.up.set(0,1,0).addScaledVector(v.tangent,-v.tangent.y).normalize()):v=null,a.set(g,v)),v?(f.point.copy(v.point),f.up.copy(v.up),f.tangent.copy(v.tangent),f.radius=v.radius,f):null}}function m1(i,t,e){const n=i.geometry,s=n.getAttribute("position"),r=n.index?n.index.count:s.count,o=h=>n.index?n.index.getX(h):h,a=[];for(let h=0;h<r;h+=3){const u=o(h),d=o(h+1),f=o(h+2),g=Math.min(s.getX(u),s.getX(d),s.getX(f));if(!(Math.max(s.getX(u),s.getX(d),s.getX(f))<t||g>e))for(const p of[u,d,f])a.push(s.getX(p),s.getY(p),s.getZ(p))}const l=new Me;l.setAttribute("position",new ne(a,3));const c=new me(l,i.material);return c.matrixAutoUpdate=!1,c.matrixWorld.copy(i.matrixWorld),c}function Sd(i,t,e,n,s){const r=i.computeFrenetFrames(e,!1),o=[],a=[],l=[],c=qi(s),h=Array.from({length:6},()=>({u:c(),a:c()*Math.PI*2,s:.25+c()*.35})),u=new y,d=new y;for(let g=0;g<=e;g++){const v=g/e;i.getPointAt(v,u);const p=r.normals[g],m=r.binormals[g];for(let M=0;M<=n;M++){const T=M/n*Math.PI*2;d.copy(p).multiplyScalar(Math.cos(T)).addScaledVector(m,Math.sin(T));let b=t(v);b*=1+.035*Math.sin(T*7+v*40)+.02*Math.sin(T*13-v*90);for(const x of h){const A=(v-x.u)*18,_=Math.cos(T-x.a);b*=1+x.s*Math.exp(-A*A)*Math.max(_,0)**3}o.push(u.x+d.x*b,u.y+d.y*b,u.z+d.z*b),a.push(v,M/n)}}for(let g=0;g<e;g++)for(let v=0;v<n;v++){const p=g*(n+1)+v,m=p+n+1;l.push(p,p+1,m,m,p+1,m+1)}const f=new Me;return f.setAttribute("position",new ne(o,3)),f.setAttribute("uv",new ne(a,2)),f.setIndex(l),f.computeVertexNormals(),f}function g1(i){const t=new mn({color:16777215,roughness:.92,metalness:0});return t.onBeforeCompile=e=>{e.uniforms.uLen={value:i},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
}`)},t}function _1(){const i=new cn,t=new bc([new y(-6,-1.414,-.927),new y(-3.2,-.709,-.364),new y(-1.4,-.312,-.11),new y(-.7,-.199,-.039),new y(0,-.041,0),new y(.5,.059,.072),new y(.9,.142,.113),new y(1.3,.193,.077),new y(1.8,.24,.04)]),e=t.getLength(),n=g1(e),s=new y,r=Sd(t,p=>up(t.getPointAt(p,s).x)*(p>.97?1-(p-.97)*20:1),320,28,3),o=new me(r,n);o.name="perch",o.receiveShadow=!0,i.add(o);const a=new bc([new y(1.07,.11,.26),new y(1.18,.3,.28),new y(1.28,.5,.2),new y(1.41,.7,.09)]),l=new mn({color:5208600,roughness:.65}),c=new me(Sd(a,p=>.022*(1-p*.6),60,10,9),l);c.castShadow=!0,i.add(c);const h=new gn({color:8372762,roughness:.5,sheen:.5,sheenColor:new Nt(13168720),emissive:2243072}),u=new ci(1,16,12),d=new Xr(.006,.008,1,6);d.translate(0,.5,0);const f=qi(21),g=new y,v=new y;for(let p=0;p<9;p++){const m=.2+p/8*.78;a.getPointAt(m,g),a.getTangentAt(m,v);const M=new y(f()-.5,f()*.6,f()-.5).normalize(),T=.06+f()*.08,b=new me(d,l);b.position.copy(g),b.quaternion.setFromUnitVectors(new y(0,1,0),M.clone().add(v.clone().multiplyScalar(.4)).normalize()),b.scale.set(1,T,1),i.add(b);const x=g.clone().addScaledVector(M.clone().add(v.clone().multiplyScalar(.4)).normalize(),T);for(let A=0;A<2+Math.floor(f()*3);A++){const _=new me(u,h),w=.018+f()*.018;_.scale.set(w,w*1.25,w),_.position.copy(x).add(new y(f()-.5,f()-.5,f()-.5).multiplyScalar(.05)),_.castShadow=!0,i.add(_)}}return{group:i}}async function v1(i,t){const n=(await new LM().loadAsync(i,t)).scene;n.traverse(o=>{const a=o;if(a.isMesh){a.receiveShadow=!0,a.castShadow=!/perch|hairs/i.test(a.name);for(const l of Array.isArray(a.material)?a.material:[a.material]){const c=l;c.envMapIntensity=.8}}});const s=n.getObjectByName("perch");let r=null;if(s){r=b1(s),n.add(r);const o=n.getObjectByName("hairs");o&&n.add(x1(s,o.material))}return{group:n,fuzz:r}}function Ao(i,t,e,n,s){i[t]=e,i[t+1]=n,i[t+2]=s}function x1(i,t){const e=Yi?7e3:16e3,n=new CM(i).build(),s=qi(31),r=new y,o=new y,a=new y,l=new y,c=new y,h=new Float32Array(e*9),u=new Float32Array(e*9),d=new Float32Array(e*6);let f=0;for(let p=0;f<e&&p<e*4;p++){if(n.sample(r,o),Math.abs(r.x-Kn)<.17||r.x<-2.8||o.y<-.3&&s()<.7)continue;a.set(s()-.5,s()-.5,s()-.5).cross(o).normalize(),l.crossVectors(o,a);const m=.45+s()*.5,M=.005+s()*s()*.014;c.copy(o).multiplyScalar(1-m).addScaledVector(a,m).normalize();const T=45e-5+s()*3e-4,b=r.addScaledVector(o,-.001),x=f*9;Ao(h,x,b.x-l.x*T,b.y-l.y*T,b.z-l.z*T),Ao(h,x+3,b.x+l.x*T,b.y+l.y*T,b.z+l.z*T),Ao(h,x+6,b.x+c.x*M,b.y+c.y*M,b.z+c.z*M);for(let A=0;A<9;A+=3)Ao(u,x+A,o.x,o.y,o.z);d[f*6+2]=1,d[f*6+4]=.5,d[f*6+5]=1,f++}const g=new Me;g.setAttribute("position",new Pe(h.slice(0,f*9),3)),g.setAttribute("normal",new Pe(u.slice(0,f*9),3)),g.setAttribute("uv",new Pe(d.slice(0,f*6),2));const v=new me(g,t);return v.name="twig.hairs",v.position.copy(i.position),v.quaternion.copy(i.quaternion),v.scale.copy(i.scale),v.receiveShadow=!0,v}const bd=Yi?7:14,y1=.03,M1=-3.25;function S1(i){const t=i.getAttribute("position"),e=i.index?i.index.count:t.count,n=a=>i.index?i.index.getX(a):a,s=new Uint32Array(e);let r=0;for(let a=0;a<e;a+=3){const l=n(a),c=n(a+1),h=n(a+2);Math.max(t.getX(l),t.getX(c),t.getX(h))<=M1||(s[r++]=l,s[r++]=c,s[r++]=h)}const o=new Me;for(const a in i.attributes)o.setAttribute(a,i.attributes[a]);return o.setIndex(new Pe(t.count>65535?s.slice(0,r):Uint16Array.from(s.subarray(0,r)),1)),o}function b1(i){const t=i.material,e=S1(i.geometry),n=new cn;n.name="fuzz";for(let s=1;s<=bd;s++){const r=s/bd,o=new mn({map:t.map,normalMap:t.normalMap,color:new Nt(1,1,1),roughness:1,metalness:0,alphaTest:.5,alphaToCoverage:!0,envMapIntensity:.6});o.onBeforeCompile=l=>{l.uniforms.uH={value:r},l.uniforms.uLen={value:y1},l.uniforms.uGrip={value:Kn},l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
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
}`;class ml{constructor(t,e){this.freq=t,this.zeta=e}freq;zeta;p=new y;v=new y;reset(t){this.p.copy(t),this.v.set(0,0,0)}step(t,e){const n=2*Math.PI*this.freq,s=Math.max(1,Math.ceil(e*this.freq*8)),r=e/s;for(let o=0;o<s;o++){for(const a of["x","y","z"])this.v[a]+=(-n*n*(this.p[a]-t[a])-2*this.zeta*n*this.v[a])*r;this.p.addScaledVector(this.v,r)}return this.p}}function R1(){const i=new Ti(3.4,.2),t=new Ti(2.9,.22),e=new ml(4.5,.45),n=new ml(2.6,.3),s=.5,r=new ml(4.2,.38),o=new y,a=20,l=.4,c=.11;let h=!1;const u=new y,d=new y,f=new y,g=new y,v=new y;let p=!0,m=null;const M={uSway:{value:new Ot},uShootRoot:{value:new y(.95,.04,.1)},uShootAxis:{value:new y(.45,.65,0)},uShootMove:{value:new y},uShootBend:{value:new y},uBudBend:{value:new y}},T=()=>m===null?0:-.005*_.give*or(m)/or(Kn)**2,b=1,x=new WeakSet;function A(w){if(x.has(w))return;x.add(w);const N=w.onBeforeCompile,P=w.customProgramCacheKey();w.onBeforeCompile=(D,L)=>{N.call(w,D,L),Object.assign(D.uniforms,M),D.vertexShader=D.vertexShader.replace("#include <common>",`#include <common>
${E1}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${A1}`)},w.customProgramCacheKey=()=>`${P}|sway`,w.needsUpdate=!0}const _={uniforms:M,patch:A,reach(w,N){if(!h)return!1;const P=M.uShootRoot.value;return u.copy(P).add(M.uShootAxis.value),w.distanceSqToSegment(v.copy(P).lerp(u,.15),u,d,N)<c*c},brush(w,N,P){const D=M.uShootAxis.value,L=Qe.clamp(v.copy(w).sub(M.uShootRoot.value).dot(D)/D.lengthSq(),0,1),k=v.copy(D).normalize(),E=Qe.clamp(N.length(),.3,2);r.v.addScaledVector(N,a*P*E*(.3+L)).addScaledVector(k,-r.v.dot(k)*.8),r.v.length()>l&&r.v.setLength(l)},give:1,at(w,N){const P=or(w);return N.set(0,i.x*P,t.x*P)},load(w){m=w},settle(){i.x=T(),i.v=t.x=t.v=0,p=!0},push(w,N,P=0){const D=or(w)*b*N*_.give;i.kick(-D),t.kick(D*.35*P)},use(w){w.updateMatrixWorld(!0);const N=[];w.traverse(D=>{const L=D;if(L.isMesh){for(const k of Array.isArray(L.material)?L.material:[L.material])A(k);/^(shoot|buds|hairs)$/.test(L.name)&&N.push(L)}});const P=N.find(D=>D.name==="shoot");if(h=!!P,P){const D=P.geometry.getAttribute("position");P.geometry.computeBoundingBox();const L=P.geometry.boundingBox,k=new y,E=new y;let I=0,F=0;const O=new y;for(let K=0;K<D.count;K++)O.fromBufferAttribute(D,K),O.y<L.min.y+.03&&(k.add(O),I++),O.y>L.max.y-.03&&(E.add(O),F++);k.divideScalar(Math.max(I,1)),E.divideScalar(Math.max(F,1)),M.uShootRoot.value.copy(k),M.uShootAxis.value.copy(E).sub(k)}for(const D of N){const L=D.geometry.getAttribute("position").count;D.geometry.setAttribute("aShoot",new ne(new Float32Array(L).fill(D.name==="shoot"?1:2),1))}p=!0},update(w){if(w<=0)return;i.step(T(),w),t.step(0,w),M.uSway.value.set(i.x,t.x);const N=M.uShootRoot.value,P=M.uShootAxis.value,D=T1(N.x),L=or(N.x),k=M.uShootMove.value.set(0,-D*t.x,D*i.x);f.copy(P).add(v.crossVectors(k,P)),f.y+=L*i.x,f.z+=L*t.x,p&&(p=!1,e.reset(f),n.reset(f),r.reset(o)),e.step(f,w),r.step(o,w),g.copy(f).lerp(e.p,s).add(r.p),n.step(g,w),M.uShootBend.value.copy(g).sub(f),M.uBudBend.value.copy(n.p).sub(g).multiplyScalar(s)}};return _}const Ro=["tail","hips","spine","chest","neck1","neck2","head"];class C1{constructor(t){this.species=t;const e=t.sections;this.count=e.length,this.ys=e.map(n=>n.y),this.zs=e.map(n=>n.z),this.as=e.map(n=>n.a*Rt),this.ws=e.map(n=>n.w),this.rds=e.map(n=>n.rd),this.rvs=e.map(n=>n.rv)}species;count;ys;zs;as;ws;rds;rvs;a=new y;b=new y;c=new y;get sMax(){return this.count-1}center(t,e){return e.set(0,Ln(this.ys,t),Ln(this.zs,t))}axis(t,e){const n=Ln(this.as,t);return e.set(0,Math.sin(n),Math.cos(n))}point(t,e,n){const s=Ln(this.as,t),r=Math.max(Ln(this.ws,t),.004),o=Math.max(Ln(this.rds,t),.004),a=Math.max(Ln(this.rvs,t),.004),l=Math.cos(e),c=Math.sin(e),h=1+.06*Math.sin(e*2)**2,u=-l*(l>0?a:o)*h,d=Ln(this.ys,t),f=Ln(this.zs,t);n.set(c*r*h,d+Math.cos(s)*u,f-Math.sin(s)*u);const g=this.wingBulge(t,e);if(g>0){const v=Math.hypot(n.x,n.y-d,n.z-f)||1,p=1+g/v;n.set(n.x*p,d+(n.y-d)*p,f+(n.z-f)*p)}return n}surface(t,e,n){const r=Ut(t,0,this.sMax);this.point(r,e,n.p);const o=Math.max(r-.01,0),a=Math.min(r+.01,this.sMax);return this.point(a,e,this.a).sub(this.point(o,e,this.b)),this.point(r,e+.01,this.b).sub(this.point(r,e-.01,this.c)),n.n.crossVectors(this.b,this.a).normalize(),n.t.copy(this.a).multiplyScalar(-1),n.t.addScaledVector(n.n,-n.t.dot(n.n)).normalize(),n}wingHalfWidth(t){const[e,n,s]=this.species.wing.rest.width;return t<.35?ht(e,n,it(0,.35,t)):ht(n,s,it(.35,1,t))}wingHalfAngle(t,e){const n=(Ln(this.ws,t)+(Ln(this.rds,t)+Ln(this.rvs,t))/2)/2;return this.wingHalfWidth(e)/Math.max(n,.03)}wingUV(t,e){const n=this.species.wing.rest,s=Math.PI*2;let r=(e%s+s)%s;r>Math.PI&&(r=s-r);const o=(n.from[0]-t)/(n.from[0]-n.to[0]),a=Ut(o,0,1),l=ht(n.from[1],n.to[1],a)*Rt;return{u:o,v:(r-l)/this.wingHalfAngle(t,a)}}wingAt(t,e,n){const s=this.species.wing.rest,r=ht(s.from[0],s.to[0],t),o=ht(s.from[1],s.to[1],Ut(t,0,1))*Rt+e*this.wingHalfAngle(Ut(r,0,this.sMax),Ut(t,0,1));return{s:r,ang:n>0?o:Math.PI*2-o}}wingBulge(t,e){const{u:n,v:s}=this.wingUV(t,e);if(n<=0||n>=1||Math.abs(s)>=1)return 0;const r=1-s*s;return this.species.wing.rest.height*it(0,.1,n)*(1-it(.8,1,n))*r*r}front=null;frontLength(t){if(!this.front){this.front=[0];for(let r=1;r<=this.sMax*20;r++)this.front.push(this.front[r-1]+this.point(r/20,0,this.a).distanceTo(this.point((r-1)/20,0,this.b)))}const n=Ut(t,0,this.sMax)*20,s=Math.min(Math.floor(n),this.front.length-2);return ht(this.front[s],this.front[s+1],n-s)}frontAt(t){this.frontLength(0);const e=this.front;let n=0,s=e.length-1;if(t<=0)return 0;if(t>=e[s])return this.sMax;for(;s-n>1;){const r=n+s>>1;e[r]<=t?n=r:s=r}return(n+(t-e[n])/Math.max(e[s]-e[n],1e-9))/20}weights(t){const e=this.species.spine;for(let n=0;n<Ro.length-1;n++){const s=Ro[n],r=Ro[n+1];if(t<=e[r]||n===Ro.length-2){const o=it(e[s],e[r],t);return[s,1-o,r,o]}}return["head",1,"head",0]}skin(t,e){const n=this.species.spine,s=.5+.5*Math.cos(e),r=this.weights(t),a=.6*(it(n.hips-.4,n.spine,t)*(1-it(n.chest+.2,n.neck1+.3,t)))*(.35+.65*s),[l,c]=this.species.throat,h=it(.25,.85,s)*it(l-.9,l,t),u=Ut((this.frontLength(t)-this.frontLength(l))/(this.frontLength(c)-this.frontLength(l)),0,1),d=new Map,f=(p,m)=>d.set(p,(d.get(p)??0)+m);f(r[0],r[1]*(1-a)*(1-h)),f(r[2],r[3]*(1-a)*(1-h)),f("sternum",a*(1-h*u*(2-u))),f("throat",(1-a)*h*(1-u)*(1-u)),f("gular",h*2*u*(1-u)),f("head",h*u*u);const g=[...d].sort((p,m)=>m[1]-p[1]).slice(0,4);for(;g.length<4;)g.push(["root",0]);const v=g.reduce((p,m)=>p+m[1],0);return{bones:g.map(p=>p[0]),weights:g.map(p=>p[1]/v)}}bodyCoord(t){return 1-Ut(t/this.sMax,0,1)}}const en=["L","R"],Rn=i=>i==="L"?1:-1,P1=i=>new y(i[0],i[1],i[2]),gl=new y,wd=new y,Co=new y,L1=new Yt;function is(i,t,e=new ve){return Co.copy(i).normalize(),gl.crossVectors(t,Co).normalize(),wd.crossVectors(Co,gl),e.setFromRotationMatrix(L1.makeBasis(gl,wd,Co))}const ar=(i,t)=>new y(i.x*t,i.y,i.z);function I1(i){const t=new C1(i),e={},n=[],s={};function r(L,k,E,I=new ve){const F=new ah;F.name=L;const O={pos:new y,quat:new ve,worldPos:E.clone(),worldQuat:I.clone()};if(k){const K=s[k],H=K.worldQuat.clone().invert();O.pos.copy(E).sub(K.worldPos).applyQuaternion(H),O.quat.copy(H).multiply(I),e[k].add(F)}else O.pos.copy(E),O.quat.copy(I);return F.position.copy(O.pos),F.quaternion.copy(O.quat),e[L]=F,s[L]=O,n.push(F),F}const o=L=>t.center(L,new y),a=i.spine,l=r("root",null,new y);r("hips","root",o(a.hips)),r("spine","hips",o(a.spine)),r("chest","spine",o(a.chest)),r("neck1","chest",o(a.neck1)),r("neck2","neck1",o(a.neck2)),r("head","neck2",o(a.head)),r("throat","chest",o(a.head)),r("gular","chest",t.point((i.throat[0]+i.throat[1])/2,0,new y)),r("sternum","chest",t.point(a.spine+.4,0,new y));const c=o(t.sMax),h=t.axis(t.sMax,new y),u=is(h,new y(0,1,0));r("bill","head",c,u),r("jaw","head",c.clone().add(new y(0,-.012,-.04)),u);const d=new y(0,0,1).applyQuaternion(u),f=new y(0,1,0).applyQuaternion(u),g=i.bill.length,v=L=>c.clone().addScaledVector(d,L*g).addScaledVector(f,-.004-i.bill.droop*L*L);r("tongue.1","jaw",v(.06),u),r("tongue.2","tongue.1",v(.5),u),r("tongue.3","tongue.2",v(.7),u);const p={},m={p:new y,n:new y,t:new y};for(const L of en){const k=Rn(L);t.surface(i.eye.s,i.eye.phi*Math.PI,m);const E=m.n.clone().multiplyScalar(.7).add(new y(.3,.02,.04)).normalize(),I=m.p.clone().addScaledVector(E,-i.eye.radius*i.eye.inset);E.x*=k,I.x*=k;const F=is(E,new y(0,1,0));p[L]={side:L,center:I,out:E,eye:r(`eye.${L}`,"head",I,F),lidUpper:r(`lidUpper.${L}`,"head",I,F),lidLower:r(`lidLower.${L}`,"head",I,F),nict:r(`nict.${L}`,"head",I,F)}}const M=i.wing,T={};{const L=P1(M.shoulder),k={p:new y,n:new y,t:new y},E=(lt,Et,Gt)=>{const Ft=t.wingAt(lt,Et,1);return t.surface(Ft.s,Ft.ang,k),k.p.clone().addScaledVector(k.n,-Gt)},I=i.tail.droop*Rt,F=new y(0,-Math.sin(I),-Math.cos(I)),O=new y(0,Math.cos(I),-Math.sin(I)),K=o(a.tail).addScaledVector(F,i.tail.length[1]*M.rest.cross[0]).addScaledVector(O,.03);K.x=M.rest.cross[1];const H=E(.03,.4,.02),V=E(.2,-.35,.014),Y=k.n.clone(),Q=K.clone().sub(V).normalize();Y.addScaledVector(Q,-Y.dot(Q)).normalize();const q=new y().crossVectors(Y,Q),U=t.axis(a.spine,new y).multiplyScalar(-1),Z=new y(0,-U.z,U.y);Z.z>0&&Z.multiplyScalar(-1);const W=new y(1,0,0),st=(lt,Et,Gt)=>lt.clone().applyAxisAngle(Et,Gt),J=[];J.push({name:"shoulder",parent:"chest",pos:L,dir:H.clone().sub(L),n:Y,sDir:W.clone().multiplyScalar(.85).addScaledVector(U,.5)}),J.push({name:"forearm",parent:"shoulder",pos:H,dir:V.clone().sub(H),n:Y,sDir:W.clone().multiplyScalar(.9).addScaledVector(U,-.35)}),J.push({name:"hand",parent:"forearm",pos:V,dir:Q,n:Y,sDir:W.clone()});const ut=M.primaries;for(let lt=0;lt<ut;lt++){const Et=lt/(ut-1),Gt=V.clone().addScaledVector(Q,M.hand*(lt+.4)/ut).addScaledVector(q,(1-Et)*.04).addScaledVector(Y,(1-Et)*.004),Ft=K.clone().addScaledVector(q,(1-Et)*.05).sub(Gt).normalize();J.push({name:`primary#${lt+1}`,parent:"hand",pos:Gt,dir:Ft,n:Y,sDir:st(W,Z,ht(58,-4,Math.pow(Et,.62))*Rt)})}const pt=M.secondaries;for(let lt=0;lt<pt;lt++){const Et=lt/(pt-1),Gt=V.clone().lerp(H,(lt+.7)/(pt+.4)).addScaledVector(q,.03+Et*.015);J.push({name:`secondary#${lt+1}`,parent:"forearm",pos:Gt,dir:st(Q,Y,ht(7,16,Et)*Rt),n:Y,sDir:st(W,Z,ht(82,97,Et)*Rt)})}for(const lt of en){const Et=Rn(lt),Gt=Wt=>Wt.includes("#")?Wt.replace("#",`.${lt}.`):`${Wt}.${lt}`,Ft={side:lt,bones:[],folded:[],spread:[],primaries:[],secondaries:[]},ue={chest:new ve};for(const Wt of J){const $t=Gt(Wt.name),It=Wt.parent==="chest"?"chest":Gt(Wt.parent),dt=is(ar(Wt.dir,Et),ar(Wt.n,Et)),Zt=r($t,It,ar(Wt.pos,Et),dt),ee=is(ar(Wt.sDir,Et),ar(Z,Et));ue[$t]=ee,Ft.bones.push(Zt),Ft.folded.push(s[$t].quat.clone()),Ft.spread.push(ue[It].clone().invert().multiply(ee)),Wt.name.startsWith("primary")&&Ft.primaries.push(Zt),Wt.name.startsWith("secondary")&&Ft.secondaries.push(Zt)}T[lt]=Ft}}const b=i.tail,x=[];{const L=b.droop*Rt,k=new y(0,-Math.sin(L),-Math.cos(L)),E=new y(0,Math.cos(L),-Math.sin(L)),I=is(k,E),F=o(a.tail);r("tail","hips",F,I);const O=new y(1,0,0).applyQuaternion(I);for(const K of en)for(let H=0;H<b.rectrices;H++){const V=(H+.5)*(K==="L"?-1:1),Y=F.clone().addScaledVector(O,V*.006).addScaledVector(E,-H*.004-(K==="L"?.002:0)).addScaledVector(k,.02),Q=I.clone().multiply(new ve().setFromAxisAngle(new y(0,1,0),V*b.restFan*Rt));x.push({bone:r(`rectrix.${K}.${H+1}`,"tail",Y,Q),k:V})}}const A=i.legs,_={},w={};let N=.1;for(const L of en){const k=Rn(L),E=new y(A.spread*k,0,0);r(`foot.${L}`,"root",E);const I=E.clone().add(new y(0,.014,-.012)),F=new y(A.hip[0]*k,A.hip[1],A.hip[2]);w[L]=I,_[L]=F.clone().sub(s.hips.worldPos),N=F.distanceTo(I),r(`tarsus.${L}`,`foot.${L}`,I,is(F.clone().sub(I),new y(1,0,0)));for(let O=0;O<4;O++)r(`toe.${L}.${O+1}`,`foot.${L}`,E)}l.updateMatrixWorld(!0);const P=new va(n),D=new Map(n.map((L,k)=>[L.name,k]));return{species:i,loft:t,rootBone:l,bones:e,list:n,rest:s,skeleton:P,index:L=>{const k=D.get(L);if(k===void 0)throw new Error(`no bone ${L}`);return k},wings:T,rectrices:x,eyes:p,hipSocket:_,ankle:w,tarsusLength:N}}const D1=0,N1=1,U1=2,vh=3,F1=4,O1=2,k1=3,Td=4,Ed=5;class Pc{pos=[];nor=[];uv=[];root=[];hinge=[];data=[];iriN=[];cBase=[];cTip=[];cIri=[];cIri2=[];edge=[];si=[];sw=[];idx=[];S=new y;H=new y;P=new y;Nv=new y;In=new y;add(t){const{cols:e,rows:n}=t,s=this.S.crossVectors(t.normal,t.dir).normalize(),r=this.H.crossVectors(t.dir,t.normal).normalize(),o=this.pos.length/3,a=t.width/2;for(let l=0;l<n;l++){const c=l===n-1,h=t.scallop?l/(n-1):n===4?[0,.5,.82,.965][l]:Math.pow(l/(n-1),.9),u=ht(1.25,2.1,t.round),d=Ut((h-.5)/.5,0,1),f=Math.pow(Math.max(1-Math.pow(d,u),0),1/u),g=t.scallop?1:n===4?ht(.5,1,it(0,.5,h))*f:ht(.4,1,it(0,t.widen??.12,h))*(c?.42:Math.pow(Math.max(1-Math.pow(Ut((h-.8)/.2,0,1),2.2),0),.45));for(let v=0;v<e;v++){const p=e===1?0:v/(e-1)*2-1,m=p<0?1-t.asym:1+t.asym;let M=p*a*g*m;const T=c&&!t.scallop?h+(1-h)*(1-p*p):h;let b=T*t.length;if(t.scallop){const _=Ut((h-.5)/.5,0,1),w=p*Math.PI/2;M=ht(p*a*ht(.72,1,Math.min(h/.5,1)),Math.sin(w)*a,_),b=ht(Math.min(h,.5)*t.length,.5*t.length+Math.cos(w)*.5*t.length,_)}const x=t.cup*a*(p*g)*(p*g)+t.curl*t.length*T*T;this.P.copy(t.root).addScaledVector(s,M).addScaledVector(t.dir,b).addScaledVector(t.normal,-x),this.Nv.copy(t.normal).addScaledVector(s,2*t.cup*p*g).addScaledVector(t.dir,2*t.curl*T),this.In.copy(t.iriNormal).addScaledVector(s,.3*t.cup*p*g).addScaledVector(t.dir,.1*(T-.6)).normalize(),t.skinNormal&&this.Nv.normalize().lerp(t.skinNormal,ht(.45,.8,Math.min(t.loose*2,1))),this.Nv.normalize(),this.pos.push(this.P.x,this.P.y,this.P.z),this.nor.push(this.Nv.x,this.Nv.y,this.Nv.z),t.scallop?this.uv.push(M/a,b/t.length):this.uv.push(p,T),this.root.push(t.root.x,t.root.y,t.root.z),this.hinge.push(r.x,r.y,r.z),this.data.push(t.rand,t.coord,t.gain,t.channel),this.iriN.push(this.In.x,this.In.y,this.In.z),this.cBase.push(t.base.r,t.base.g,t.base.b,t.iriStrength/4),this.cTip.push(t.tip.r,t.tip.g,t.tip.b,t.loose),this.cIri.push(t.iri.r,t.iri.g,t.iri.b,t.iriPower/32),this.cIri2.push(t.iri2.r,t.iri2.g,t.iri2.b,t.cover),this.edge.push(t.edge??0,t.closed??0);const A=t.skinAt?t.skinAt(this.P):t;this.si.push(...A.bones),this.sw.push(...A.weights)}}for(let l=0;l<n-1;l++)for(let c=0;c<e-1;c++){const h=o+l*e+c,u=h+e;this.idx.push(h,u,h+1,u,u+1,h+1)}}build(){const t=new Me,e=(r,o)=>new Pe(new Float32Array(r),o),n=(r,o)=>{const a=new Uint16Array(r.length);for(let l=0;l<r.length;l++)a[l]=Math.round(Ut(r[l],0,1)*65535);return new Pe(a,o,!0)},s=(r,o)=>{const a=new Int16Array(r.length);for(let l=0;l<r.length;l++)a[l]=Math.round(Ut(r[l],-1,1)*32767);return new Pe(a,o,!0)};return t.setAttribute("position",e(this.pos,3)),t.setAttribute("normal",s(this.nor,3)),t.setAttribute("uv",e(this.uv,2)),t.setAttribute("aRoot",e(this.root,3)),t.setAttribute("aHinge",s(this.hinge,3)),t.setAttribute("aData",e(this.data,4)),t.setAttribute("aIriN",s(this.iriN,3)),t.setAttribute("aBase",n(this.cBase,4)),t.setAttribute("aTip",n(this.cTip,4)),t.setAttribute("aIri",n(this.cIri,4)),t.setAttribute("aIri2",n(this.cIri2,4)),t.setAttribute("aEdge",n(this.edge,2)),t.setAttribute("skinIndex",new Pe(new Uint16Array(this.si),4)),t.setAttribute("skinWeight",n(this.sw,4)),t.setIndex(new Pe(new Uint32Array(this.idx),1)),t.boundingSphere=new On(new y(0,.4,-.1),2.5),t.boundingBox=new di(new y(-2,-2,-2),new y(2,3,2)),t}}function B1(i,t,e,n){if(i.kind==="band"){const f=t+(i.soft??0)*(n*2-1);return f>=i.s[0]&&f<=i.s[1]&&e>=i.phi[0]&&e<=i.phi[1]}if(i.kind==="blob"){const f=(t-i.at[0])/i.r[0],g=(e-i.at[1])/i.r[1],v=i.pow??2;return Math.pow(Math.abs(f),v)+Math.pow(Math.abs(g),v)<=1+(i.soft??0)*(n*2-1)}const s=i.from[0]/i.r[0],r=i.from[1]/i.r[1],o=i.to[0]/i.r[0],a=i.to[1]/i.r[1],l=t/i.r[0],c=e/i.r[1],h=o-s,u=a-r,d=Ut(((l-s)*h+(c-r)*u)/(h*h+u*u),0,1);return Math.hypot(l-s-h*d,c-r-u*d)<=1}function Mi(i,t,e,n=.5){let s="body";for(const r of i.tracts)B1(r.region,t,e,n)&&(s=r.look);return i.looks[s]}const ln=i=>new Nt(i),cs=(i,t)=>t.map(e=>i.index(e)),z1=new y;function xh(i,t,e,n){return i.copy(t),e.iriAim&&i.lerp(z1.set(e.iriAim[0],e.iriAim[1],e.iriAim[2]).normalize(),e.iriAlign).normalize(),n?(i.x+=(n()-.5)*e.jitter,i.y+=(n()-.5)*e.jitter,i.z+=(n()-.5)*e.jitter,i.normalize()):i}function fp(i,t,e){const{u:n,v:s}=i.wingUV(t,e);if(n<.08||n>1.05)return 1;const r=it(.08,.3,n)*(1-it(.9,1.05,n)),o=it(-2,-1.05,s)*(1-it(-.75,-.55,s)),a=it(1.6,1,s)*(1-it(.7,.9,-s+1.6));return 1-r*Math.max(.62*o,s>.8?.25*a:0)}function pp(i,t,e,n){const s=i.shading;let r=1+s.patch*(.6*Ge(e*2.7,5)+.6*Ge(n*8+e*1.3,6)),o=0;const a=t.fine?1:ht(.12,1.7,it(-.25,.45,.7*Ge(e*6.1+n*9,41)+.6*Ge(n*21-e*3.3,42)));if(!t.fine){o=t.iriStrength>0&&e<6?it(.05,.6,.7*Ge(e*3.4+n*5,31)+.5*Ge(n*13-e*2,32))*s.goldAmount:0;const l=1-it(4.6,5.6,e);r*=ht(1,s.flank,l*it(.2,.55,n)*(1-it(.72,.95,n))),r*=ht(1,s.under,it(2.6,.5,e)*(1-it(.4,.7,n)))}return{shade:r,gold:o,glit:a}}function zs(i,t,e=1,n=0,s=6972448,r=1){const o=(.8+t()*.4)*e,a=ln(i.iri).lerp(ln(i.iriGraze),t()*t()*.45);return{base:ln(i.base).multiplyScalar(o),tip:ln(i.tip).lerp(ln(s),n*t()).multiplyScalar(o),iri:a,iri2:ln(i.iriGraze),iriStrength:i.iriStrength*ht(.75+t()*.5,2.6*Math.pow(t(),2.5),i.sparkle??0)*(1+n*1.5)*r,iriPower:i.iriPower*(.8+t()*.5),loose:i.loose??0,round:i.round,cup:i.cup,channel:i.channel==="gorget"?N1:i.channel==="crown"?U1:D1,edge:i.edge??0,closed:i.closed??0}}const Po=new y,_l=new y,Ts=new y;function mp(i,t,e,n){const{loft:s}=i;if(t<s.species.throat[0]-1.1||Math.cos(e)<-.5)return;const r=Math.min(t+.02,s.sMax);s.point(r,e,Po).sub(s.point(t-.02,e,Ts)).multiplyScalar(1/(r-t+.02)),s.point(t,e+.02,_l).sub(s.point(t,e-.02,Ts)).multiplyScalar(1/.04);const o=Po.clone().multiplyScalar(1/Po.lengthSq()),a=_l.clone().multiplyScalar(1/_l.lengthSq()),l=n.clone(),c=Po.clone().normalize(),h=s.frontLength(t);return u=>{Ts.copy(u).sub(l);const d=Ts.dot(o),f=s.frontAt(h+Ts.dot(c))-t,g=s.skin(Ut(t+(Math.abs(f)<Math.abs(d)?f:d),0,s.sMax),e+Ts.dot(a));return{bones:cs(i,g.bones),weights:g.weights}}}function H1(i,t,e){const{loft:n,species:s}=t,r={p:new y,n:new y,t:new y},o={p:new y,n:new y,t:new y},a=new y,l=new y,c=new y,h=new y,u=new y,d=new y,f=new y,g=s.eye.radius,v=s.headRuff??1,p=Math.PI*2,m=E=>{const I=(E%p+p)%p;return I<=Math.PI?I/Math.PI:(p-I)/Math.PI},M=(E,I,F=.5)=>{const O=Mi(s,E,I,F);let K=O.width;if(!O.fine){const H=Mi(s,E-.45,I),V=Mi(s,E+.45,I);K=(K*2+(H.fine?K:H.width)+(V.fine?K:V.width))/4}return{look:O,width:K}},T=240,b=40,x=new Float32Array(T).fill(1),A=new Uint16Array(T),_=[],w=new Float32Array(b+1),N=.001;let P=n.sMax-.015;for(;P>.03;){let E=0;for(let F=0;F<=b;F++){const O=F/b*p;w[F]=n.point(Math.min(P+.01,n.sMax),O,l).distanceTo(n.point(P-.01,O,c))/.02,E=Math.max(E,w[F])}const I=N/E;for(let F=0;F<T;F++){const O=F/T*b,K=Math.min(Math.floor(O),b-1),{look:H,width:V}=M(P,m(F/T*p)),Y=V*H.aspect*H.rowStep;if(x[F]+=ht(w[K],w[K+1],O-K)*I,x[F]>=Y){x[F]=Math.min(x[F]-Y,Y*.5);const Q=A[F]++;(_[Q]??=new Float32Array(T).fill(NaN))[F]=P}}P-=I}const D=new y,L=new y,k=(E,I)=>{n.surface(E,I,r);for(const Ht of en)if(r.p.distanceTo(t.eyes[Ht].center)<g*(s.eye.bare??1.02))return;const F=n.wingUV(E,I),O=F.u>.04&&F.u<.97&&Math.abs(F.v)<.9,K=O&&F.v<-.3&&F.u<.5&&.5+.5*Ge(E*53+I*91,77)<.75*(s.wing.drape??1)*it(-.3,-.75,F.v)*(1-it(.32,.5,F.u));if(O&&!K)return;const H=m(I),V=M(E+(e()-.5)*.06,Ut(H+(e()-.5)*.012,0,1),e()),Y=V.width,Q=Math.pow(1-it(7.1,9,E),1.4),q=v*it(.56,.86,H)*Q*it(6.25,7,E),U=it(.5,.8,H)*it(8.5,9.2,E),Z=K?s.looks.flank:V.look===s.looks.crown&&E<8.5&&e()<.5*it(.7,.9,H)?s.looks.head:V.look,W=Z.fine?0:q,st=Z.fine||Z===s.looks.stripe?0:v*it(6,6.7,E)*it(.35,.6,H)*(.35+.65*Q),J=Ge(E*11+H*37,51);if(st>0&&J>.45&&e()<.4*st||Z===s.looks.gorget)return;const ut=s.looks.gorget,pt=E>4.6&&E<8.2&&H<.5?Mi(s,E,Math.max(H-.035,0))===ut?2:Mi(s,E,Math.max(H-.08,0))===ut?1:0:0;if(pt===2)return;const lt=pt===0&&E>4.2&&E<5.6&&H<.4&&Mi(s,E+.5,H)===ut,Et=s.shading,Gt=pp(s,Z,E,H),{gold:Ft,glit:ue}=Gt,Wt=Gt.shade*fp(n,E,I),$t=Z.loose??0,It=Ge(E*4.3+H*17,21),dt=Ge(E*3.1-H*23,22),Zt=1+(e()-.5)*ht(.26,.65,$t),ee=Y*Z.aspect*Zt*(1+W*(.3+1.3*e()*e())+st*(e()-.5)*.5),ce=e()<.035*$t+.14*W?1:0;let ie=(Z.tilt+(e()-.5)*ht(6,17,$t)+dt*7*$t+ce*(8+e()*10))*Rt;const G=(e()-.5)*ht(.17,.72,$t)+It*.4*$t+ce*(e()-.5)*.9+((e()-.5)*.9+J*.45)*st,Se=((e()-.5)*.7+dt*.3)*$t+((e()-.5)*1.1+J*.5)*st;if((pt||lt)&&(ie*=.35),K)ie+=9*Rt;else if(F.u>0&&F.u<1&&Math.abs(F.v)<1.7&&!ce){const Ht=1-it(.9,1.7,Math.abs(F.v));ie*=1-.6*Ht}let jt=Z.lift+W*.9;ie=ie*(1-.55*U)+W*(14+30*e()*e()+9*J)*Rt;const ge=n.point(Math.min(E+.01,n.sMax),I,l).distanceTo(n.point(Math.max(E-.01,0),I,c))/.02;f.copy(r.p),a.copy(r.n),n.surface(Math.max(E-ee*.85/Math.max(ge,.02),0),I,o),h.copy(o.p).addScaledVector(o.n,ee*Math.sin(ie)).sub(f),h.lengthSq()<1e-8&&h.copy(r.t),h.normalize(),u.copy(a).add(o.n).addScaledVector(h,-a.dot(h)-o.n.dot(h)).normalize(),h.applyAxisAngle(u,G),u.applyAxisAngle(h,Se),xh(d,u,Z,e);const mt=n.skin(E,I);i.add({...zs(Z,e,Wt,Ft,Et.gold,ue),root:f,dir:h,normal:u,skinNormal:a,iriNormal:d,width:Y*Zt,length:ee,cols:Z.fine?5:3,rows:4,curl:ht(.1,.02+e()*.22,$t),asym:0,bones:cs(t,mt.bones),weights:mt.weights,skinAt:mp(t,E,I,f),rand:e(),coord:n.bodyCoord(E)*.8,gain:jt,cover:Ut(1-Z.rowStep,.1,.9)})};for(let E=0;E<_.length;E++){const I=_[E];for(const F of[1,-1]){let O=E&1?.5:F>0?1:0,K=!1;for(let H=0;H<T/2;H++){const V=(F*H%T+T)%T,Y=(F*(H+1)%T+T)%T,Q=I[V],q=I[Y];if(Number.isNaN(Q)||Number.isNaN(q)){K=!0;continue}K&&(O=e(),K=!1);const U=F*H*p/T,Z=F*(H+1)*p/T;n.point(Q,U,D),n.point(q,Z,L);const{look:W,width:st}=M((Q+q)/2,m((U+Z)/2)),J=D.distanceTo(L)/(st*(W.spacing??.6));for(;O+J>=1;){const ut=(1-O)/J,pt=(e()-.5)*.25*st*W.aspect*W.rowStep/.11,lt=ht(.12,.5,W.loose??0)*(W.fine?1:1+1.8*v*it(6,6.7,(Q+q)/2));k(Ut(ht(Q,q,ut)+pt*(1+2*(W.loose??0)),.02,n.sMax),ht(U,Z,ut)+(e()-.5)*lt*st/.15),O-=1}O+=J}}}}function G1(i,t,e){const{loft:n,species:s}=t,r=s.looks.gorget;if(!r)return;const o={p:new y,n:new y,t:new y},a=[],l=new y,c=new y;let h=n.sMax;for(;h>4.3&&Mi(s,h,0)!==r;)h-=.02;const u=Math.min(h+.5,n.sMax-.3);let d=0,f=1/0;const g=.02,v=.02,p=new Map;{let L=0;for(let k=0;;k++){const E=u-k*g;if(E<4.3)break;k>0&&(L+=n.point(E,0,l).distanceTo(n.point(E+g,0,c))),p.set(k,L)}L=0;for(let k=-1;;k--){const E=u-k*g;if(E>n.sMax-.05)break;L-=n.point(E,0,l).distanceTo(n.point(E-g,0,c)),p.set(k,L)}}for(const[L,k]of p){const E=u-L*g;let I=0;for(let F=0;F*v<=1.3;F++){const O=F*v;if(F>0&&(I+=n.point(E,O,l).distanceTo(n.point(E,O-v,c))),Mi(s,E,O/Math.PI)===r){for(const K of F===0?[1]:[1,-1])a.push({s:E,a:O*K,x:I*K,y:k});d=Math.max(d,Math.hypot(I,k)),f=Math.min(f,Math.hypot(I,k))}}}if(!a.length)return;const m=(L,k)=>{let E=a[0],I=1/0;for(const F of a){const O=(F.x-L)*(F.x-L)+(F.y-k)*(F.y-k);O<I&&(I=O,E=F)}return{q:E,miss:Math.sqrt(I)}},M=new y,T=new y,b=new y,x=new y,A=new y,_=new Nt(3814655),w=new Nt(14036168),N=r.spacing??.8;let P=Math.max(f,r.width*.3),D=0;for(;P<=d+r.width*.3;){const L=Ut((P-f)/(d-f),0,1),k=r.width*ht(.6,1.3,L),E=k*r.aspect,I=Math.max(1,Math.round(Math.PI*2*P/(k*N)));for(let F=0;F<I;F++){const O=(F+(D%2?.5:0))/I*Math.PI*2-Math.PI+(e()-.5)*.12*(k/Math.max(P,k)),{q:K,miss:H}=m(P*Math.sin(O),P*Math.cos(O));if(H>.03)continue;const V=m(P*Math.sin(O),P*Math.cos(O)-E*.7).miss>.02;n.surface(K.s,K.a,o);const Y=Math.sign(O)*Math.min(Math.abs(O)*.5,.6)+(e()-.5)*.14,Q=(r.tilt+(e()-.5)*3)*Rt;T.copy(o.p),M.crossVectors(o.n,o.t),M.x<0&&M.multiplyScalar(-1),b.copy(o.t).multiplyScalar(Math.cos(Y)).addScaledVector(M,Math.sin(Y)).normalize(),x.copy(o.n).multiplyScalar(Math.cos(Q)).addScaledVector(b,-Math.sin(Q)),b.multiplyScalar(Math.cos(Q)).addScaledVector(o.n,Math.sin(Q)),xh(A,x,r,e);const q=zs(r,e),U=Ut(L+(e()-.5)*.16,0,1);U<.45?q.iri.lerp(_,(1-U/.45)*.85):q.iri.lerp(w,(U-.45)/.55*.8);const Z=mp(t,K.s,K.a,T),W=n.skin(K.s,K.a),st=.94+e()*.12;i.add({...q,root:T,dir:b,normal:x,skinNormal:o.n,iriNormal:A,width:k*st,length:E*st,cols:9,rows:6,scallop:!0,cup:.16,curl:.05,asym:0,bones:cs(t,W.bones),weights:W.weights,skinAt:Z,rand:e(),coord:n.bodyCoord(K.s)*.8,gain:r.lift,cover:V?.25:Ut(1-r.rowStep,.1,.9)})}P+=k*r.aspect*r.rowStep,D++}}function V1(i,t,e,n){const s=t.species.wing,r=t.wings[e],o=Rn(e),a=ln(s.sheen),l=new y,c=new y,h=new y,u=(_,w,N,P,D)=>{const L=t.rest[_.name];new Yt().makeRotationFromQuaternion(L.worldQuat).extractBasis(l,c,h),h.applyAxisAngle(c,(n()-.5)*.02),c.applyAxisAngle(h,(n()-.5)*.12);const k=t.index(_.name),E=.7+n()*.6;i.add({root:L.worldPos,dir:h,normal:c,skinNormal:null,iriNormal:c,width:N,length:w,cols:3,rows:9,round:.75,cup:.12,curl:.012,asym:P*o,base:D.clone().multiplyScalar(E),tip:D.clone().multiplyScalar(E*.8),iri:a,iri2:a,iriStrength:.22,iriPower:2.5,loose:0,widen:.3,bones:[k,0,0,0],weights:[1,0,0,0],rand:n(),coord:o>0?Td:Ed,gain:0,cover:o>0?.2:.8,channel:vh})};r.primaries.forEach((_,w)=>{const N=w/(r.primaries.length-1);u(_,ht(s.primaryLen[0],s.primaryLen[1],Math.pow(N,.75)),s.primaryWidth*ht(1.15,.8,N),ht(.2,.5,N),ln(s.primaryColor??s.color))}),r.secondaries.forEach((_,w)=>{const N=w/(r.secondaries.length-1);u(_,ht(s.secondaryLen[0],s.secondaryLen[1],N),s.secondaryWidth,.15,ln(s.secondaryColor??s.color))});const d=t.species.looks.covert,f=t.rest[`hand.${e}`],g=t.rest[`forearm.${e}`];new Yt().makeRotationFromQuaternion(f.worldQuat).extractBasis(l,c,h);const v=l.clone().multiplyScalar(o),p=c.clone(),m=h.clone(),M=f.worldPos.clone().addScaledVector(m,s.hand),T=[{off:-.02,len:.075,w:.034,lift:.006,n:15},{off:0,len:.1,w:.04,lift:.008,n:14},{off:.024,len:.13,w:.046,lift:.01,n:14},{off:.05,len:.17,w:.05,lift:.012,n:13}],b=new y,x=new y,A=new y;for(const _ of T)for(let w=0;w<_.n;w++){const N=ht(-.55,.9,(w+n()*.7)/_.n);N<0?b.copy(f.worldPos).lerp(g.worldPos,-N/.5):b.copy(f.worldPos).lerp(M,N),b.addScaledVector(v,_.off+(n()-.5)*.016).addScaledVector(p,_.lift);const P=.06+n()*.08;x.copy(m).applyAxisAngle(p,o*(.1+n()*.3+(N<0?.25:0))),A.copy(p).multiplyScalar(Math.cos(P)).addScaledVector(x,-Math.sin(P)),x.multiplyScalar(Math.cos(P)).addScaledVector(p,Math.sin(P));const D=t.index(N<0?`forearm.${e}`:`hand.${e}`),L=.8+n()*.4;i.add({...zs(d,n,.8+.3*n()),root:b,dir:x,normal:A,skinNormal:p,iriNormal:A,width:_.w*L,length:_.len*L,cols:3,rows:4,curl:.04+n()*.1,asym:0,bones:[D,0,0,0],weights:[1,0,0,0],rand:n(),coord:o>0?Td:Ed,gain:0,cover:.55})}}function W1(i,t,e,n){const{loft:s,species:r}=t,o=r.wing,a=Rn(e),l=a>0?O1:k1,c={p:new y,n:new y,t:new y},h={p:new y,n:new y,t:new y},u=(Q,q,U)=>{const Z=s.wingAt(Q,q,a);return s.surface(Ut(Z.s,.02,s.sMax),Z.ang,U),Z};u(0,0,c),u(1,0,h);const d=c.p.distanceTo(h.p),f=new y,g=new y,v=new y,p=ln(o.primaryColor??o.color),m=ln(o.secondaryColor??o.color),M=ln(o.sheen),T=r.looks.wingCovert,[b,x]=o.covertWidth??[.024,.05],A=o.bladeScale??1,[_,w]=o.covertAspect??[2.2,3.4],N=(Q,q,U,Z,W,st)=>{const J=u(Q,q,c);u(Q+U/d,q+Z,h),f.copy(c.p).addScaledVector(c.n,W),g.copy(h.p).addScaledVector(h.n,W+U*Math.sin(st*Rt)).sub(f).normalize(),v.copy(c.n).add(h.n).addScaledVector(g,-c.n.dot(g)-h.n.dot(g)).normalize();const ut=s.skin(Ut(J.s,.02,s.sMax),J.ang);return{bones:cs(t,ut.bones),weights:ut.weights}},P=7;for(let Q=0;Q<P;Q++){const q=Q/(P-1),U=ht(.03,.3,q*q*.4+q*.6),Z=ht(b,x,q),W=Z*ht(_,w,q),st=ht(o.rest.width[0],o.rest.width[1],it(0,.35,U)),J=Math.max(3,Math.round(2*st/(Z*.62)));for(let ut=0;ut<J;ut++){const pt=Ut(-.98+2*(ut+(Q%2?.5:0)+(n()-.5)*.3)/J,-1.02,1.02),lt=.85+n()*.3,Et=N(U+(n()-.5)*.012,pt,W*lt,-pt*.12+(n()-.5)*.1,.004+q*.004,7+n()*5);i.add({...zs(T,n,.8+.4*n()),root:f,dir:g,normal:v,skinNormal:c.n,iriNormal:v,width:Z*lt,length:W*lt,cols:3,rows:4,curl:.05+n()*.08,asym:0,...Et,rand:n(),coord:l,gain:0,cover:Ut(1-T.rowStep,.1,.9)})}}for(let Q=.42;Q<.98;Q+=.04)for(const q of[-.82,-.3,.3,.82]){const U=.85+n()*.3,Z=N(Q+(n()-.5)*.02,q+(n()-.5)*.2,.085*U,-q*.1,.002,4);i.add({...zs(T,n,.7+.3*n()),root:f,dir:g,normal:v,skinNormal:c.n,iriNormal:v,width:.05*U,length:.085*U,cols:3,rows:4,curl:.04,asym:0,...Z,rand:n(),coord:l,gain:0,cover:.5})}const D=[];for(let Q=0;Q<=26;Q++)for(let q=0;q<=14;q++)u(Q/20,ht(-2.2,2.2,q/14),c),D.push({p:c.p.clone(),n:c.n.clone()});const L=new y,k=Q=>{let q=D[0],U=1/0;for(const Z of D){const W=Z.p.distanceToSquared(Q);W<U&&(U=W,q=Z)}return L.copy(Q).sub(q.p).dot(q.n)},E=r.tail,I=E.droop*Rt,F=new y(0,-Math.sin(I),-Math.cos(I)),O=new y(0,Math.cos(I),-Math.sin(I)),K=s.center(r.spine.tail,new y).addScaledVector(F,E.length[1]*o.rest.cross[0]).addScaledVector(O,.035);K.x=o.rest.cross[1]*a,a>0&&K.addScaledVector(O,.014);const H=new y,V=new y,Y=[];for(let Q=0;Q<o.secondaries;Q++){const q=Q/(o.secondaries-1);Y.push({u:ht(.2,.3,q),v:ht(.82,.3,q),w:.066*A,reach:1,to:null,len:ht(.19,.27,q)*A,dv:-.3,asym:.15})}for(let Q=0;Q<o.primaries;Q++){const q=Q/(o.primaries-1);Y.push({u:ht(.3,.42,q),v:ht(.25,-.8,q),w:ht(.068,.05,q)*A,reach:ht(.52,1,Math.pow(q,.8)),to:K.clone().addScaledVector(O,(1-q)*.05).addScaledVector(F,-(1-q)*.02),len:0,dv:0,asym:ht(.2,.45,q)})}Y.forEach((Q,q)=>{const U=u(Q.u,Q.v,c),Z=.016-q*7e-4;f.copy(c.p).addScaledVector(c.n,Z),V.copy(c.n);let W=Q.len;Q.to?(H.copy(Q.to),W=H.distanceTo(f)*Q.reach):(u(Q.u+W/d,Q.v+Q.dv,h),H.copy(h.p).addScaledVector(h.n,Z),V.add(h.n).normalize());const st=.035;for(let lt=0;lt<60;lt++){g.copy(H).sub(f).normalize(),v.copy(V).addScaledVector(g,-V.dot(g)).normalize();let Et=!0;for(const Gt of[.25,.45,.65,.85,1])if(L.copy(f).addScaledVector(g,Gt*W).addScaledVector(v,-st*W*Gt*Gt),k(L.clone())<.005+.012*Gt-q*3e-4){Et=!1;break}if(Et)break;H.addScaledVector(V,.005)}const J=s.skin(Ut(U.s,.02,s.sMax),U.ang),ut=.75+n()*.5,pt=q<o.secondaries?m:p;i.add({root:f,dir:g,normal:v,skinNormal:null,iriNormal:v,width:Q.w,length:W,cols:3,rows:9,round:.75,cup:.1,curl:st,asym:Q.asym*a,base:pt.clone().multiplyScalar(ut),tip:pt.clone().multiplyScalar(ut*.8),iri:M,iri2:M,iriStrength:.22,iriPower:2.5,loose:0,widen:.2,bones:cs(t,J.bones),weights:J.weights,rand:n(),coord:l,gain:0,cover:a>0?.2:.8,channel:vh})})}function X1(i,t,e){const n=t.species.tail,s=ln(n.color),r=n.tip===void 0?null:ln(n.tip),o=ln(n.sheen??4609132),a=ln(n.centralSheen??2058840),l=new y,c=new y,h=new y;for(const u of t.rectrices){const d=t.rest[u.bone.name];new Yt().makeRotationFromQuaternion(d.worldQuat).extractBasis(l,c,h);const f=(Math.abs(u.k)-.5)/Math.max(n.rectrices-1,1),g=.85+e()*.3;i.add({root:d.worldPos,dir:h,normal:c,skinNormal:null,iriNormal:c,width:n.width,length:ht(n.length[0],n.length[1],Math.pow(f,1.4)),cols:5,rows:14,round:1,cup:.06,curl:.01,asym:.12*Math.sign(u.k),base:s.clone().multiplyScalar(g),tip:(r??s).clone().multiplyScalar(r?g:g*.8),iri:f<.1?a:o,iri2:o,iriStrength:f<.1?.13:.2,iriPower:3,loose:0,widen:.45,bones:[t.index(u.bone.name),0,0,0],weights:[1,0,0,0],rand:e(),coord:1,gain:0,cover:u.k>0?.8:.2,channel:vh})}}function q1(i,t=3,e=120,n=80){const{loft:s,species:r}=i,o=new Pc,a={p:new y,n:new y,t:new y},l=new y,c=new Float32Array(n+1),h=Array.from({length:n+1},()=>new y),u=new y,d=qi(r.seed+99),f=560,g=s.sMax-.12,v=[];for(let p=0;p<=e;p++){const m=g-p/e*(g-.05);for(let M=0;M<=n;M++){const T=M/n*Math.PI*2;s.surface(m,T,a),p>0&&(c[M]+=h[M].distanceTo(a.p)),h[M].copy(a.p),v.push({p:a.p.clone(),n:a.n.clone(),d:c[M],s:m,a:T})}}for(let p=0;p<t;p++){const m=t>1?p/(t-1):0,M=ht(.008,.03,m),T=o.pos.length/3;for(let b=0;b<v.length;b++){const x=v[b],A=b%(n+1),_=x.a<=Math.PI?x.a/Math.PI:(2*Math.PI-x.a)/Math.PI,w=Mi(r,x.s,_),N=pp(r,w,x.s,_),{gold:P,glit:D}=N,L=N.shade*fp(s,x.s,x.a);let k=w.fuzz??Math.min(.55+(w.loose??0)*.6,1);for(const F of en)k*=it(r.eye.radius*1.25,r.eye.radius*2.1,x.p.distanceTo(i.eyes[F].center));k*=1-it(s.sMax-.7,s.sMax-.2,x.s);{const F=s.wingUV(x.s,x.a);F.u>.02&&F.u<.99&&(k*=it(.85,1.15,Math.abs(F.v)))}const E=zs(w,d,L,P,r.shading.gold,D);xh(u,x.n,w),l.copy(x.p).addScaledVector(x.n,M*(.5+.5*Math.min(k*2,1))*Ut(w.width/.03,.4,1));const I=s.skin(x.s,x.a);o.pos.push(l.x,l.y,l.z),o.nor.push(x.n.x,x.n.y,x.n.z),o.uv.push(A/n*f,x.d),o.root.push(l.x,l.y,l.z),o.hinge.push(1,0,0),o.data.push(m,s.bodyCoord(x.s)*.8,w.lift,F1),o.iriN.push(u.x,u.y,u.z),o.cBase.push(E.base.r,E.base.g,E.base.b,w.fine?0:w.iriStrength*D*(1+P)/4),o.cTip.push(E.tip.r,E.tip.g,E.tip.b,k),o.cIri.push(E.iri.r,E.iri.g,E.iri.b,w.iriPower/32),o.cIri2.push(E.iri2.r,E.iri2.g,E.iri2.b,m),o.edge.push(0,0),o.si.push(...cs(i,I.bones)),o.sw.push(...I.weights)}for(let b=0;b<e;b++)for(let x=0;x<n;x++){const A=T+b*(n+1)+x,_=A+n+1;o.idx.push(A,_,A+1,_,_+1,A+1)}}return o}function Y1(i){const t=qi(i.species.seed),e=new Pc;H1(e,i,t),G1(e,i,t);const n=new Pc;for(const r of en)V1(n,i,r,t),W1(n,i,r,t);X1(n,i,t);const s=q1(i);return{contour:e.build(),flight:n.build(),fuzz:s.build()}}function K1(i,t=64,e=36,n=.007){const s={p:new y,n:new y,t:new y},{loft:r}=i,o=[],a=[],l=[],c=[],h=new y;for(let d=0;d<=t;d++){const f=d/t*r.sMax;for(let g=0;g<=e;g++){const v=g/e*Math.PI*2,p=r.skin(f,v);r.surface(f,v,s),h.copy(s.p).addScaledVector(s.n,-n),o.push(h.x,h.y,h.z),a.push(...cs(i,p.bones)),l.push(...p.weights)}}for(let d=0;d<t;d++)for(let f=0;f<e;f++){const g=(d+.5)/t*r.sMax;if(g>4.3&&g<9&&Math.cos((f+.5)/e*Math.PI*2)>-.25)continue;const v=d*(e+1)+f,p=v+e+1;c.push(v,v+1,p,p,v+1,p+1)}const u=new Me;return u.setAttribute("position",new ne(o,3)),u.setAttribute("skinIndex",new ga(a,4)),u.setAttribute("skinWeight",new ne(l,4)),u.setIndex(c),u.computeVertexNormals(),u}const gp=`
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
  transformed = mix(transformed, aRoot - normal * 0.03, fUnfold);
}
if (fReal) transformed = mix(aRoot, transformed, fUnfold * fBeat);
`;function Z1(){const i={uFluff:{value:0},uLift:{value:new Float32Array(8)},uGorget:{value:0},uCrest:{value:0},uWingSpread:{value:new Ot},uWingLift:{value:new Ot},uWingOut:{value:new Ae},uWingPivot:{value:new y},uWingSpan:{value:new y(0,0,-1)},uWingChord:{value:new y(0,1,0)},uFlash:{value:1},uGlint:{value:1},uPal:{value:[new Jt,new Jt,new Jt,new Jt]}},t=new mn({color:16777215,roughness:.6,metalness:0,side:Be,alphaToCoverage:!0});return t.onBeforeCompile=e=>{Object.assign(e.uniforms,i),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
}`)},t.customProgramCacheKey=()=>"plumage-v47",{material:t,uniforms:i}}function $1(i){const t=new zf({side:Be});return t.onBeforeCompile=e=>{Object.assign(e.uniforms,i),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>${gp}`).replace("#include <begin_vertex>",_p+vp)},t.customProgramCacheKey=()=>"plumage-depth-v5",t}class lr{constructor(t){this.rig=t}rig;pos=[];nor=[];col=[];uv=[];si=[];sw=[];idx=[];add(t,e,n,s,r){const o=this.rig.rest[e],a=new Yt().compose(o.worldPos,o.worldQuat,new y(1,1,1)),l=t.index?t.toNonIndexed():t.clone(),c=l.getAttribute("position").clone();l.applyMatrix4(a);const h=l.getAttribute("position"),u=l.getAttribute("normal"),d=l.getAttribute("uv"),f=this.pos.length/3,g=this.rig.index(e),v=new y;for(let p=0;p<h.count;p++){v.fromBufferAttribute(c,p);const m=r?.(v)??n;this.pos.push(h.getX(p),h.getY(p),h.getZ(p)),this.nor.push(u.getX(p),u.getY(p),u.getZ(p)),this.col.push(m.r,m.g,m.b),this.uv.push(d?d.getX(p):0,d?d.getY(p):0),this.si.push(s?this.rig.index(s(v)):g,0,0,0),this.sw.push(1,0,0,0),this.idx.push(f+p)}l.dispose(),t.dispose()}build(){const t=new Me;return t.setAttribute("position",new ne(this.pos,3)),t.setAttribute("normal",new ne(this.nor,3)),t.setAttribute("color",new ne(this.col,3)),t.setAttribute("uv",new ne(this.uv,2)),t.setAttribute("skinIndex",new ga(this.si,4)),t.setAttribute("skinWeight",new ne(this.sw,4)),t.setIndex(this.idx),t.boundingSphere=new On(new y(0,.4,0),2.5),t}}function Es(i,t,e,n=10){const s=[],r=[],o=i.length,a=new y,l=new y,c=new y;for(let u=0;u<o;u++){a.copy(i[Math.min(u+1,o-1)]).sub(i[Math.max(u-1,0)]).normalize(),l.crossVectors(e,a).normalize(),c.crossVectors(a,l);const[d,f]=t(u/(o-1));for(let g=0;g<=n;g++){const v=g/n*Math.PI*2;s.push(i[u].x+l.x*Math.cos(v)*d+c.x*Math.sin(v)*f,i[u].y+l.y*Math.cos(v)*d+c.y*Math.sin(v)*f,i[u].z+l.z*Math.cos(v)*d+c.z*Math.sin(v)*f)}}for(let u=0;u<o-1;u++)for(let d=0;d<n;d++){const f=u*(n+1)+d,g=f+n+1;r.push(f,f+1,g,g,f+1,g+1)}const h=new Me;return h.setAttribute("position",new ne(s,3)),h.setIndex(r),h.computeVertexNormals(),h}function Lo(i){const t=[],e=[],n=i[0].length;for(const r of i)for(const o of r)t.push(o.x,o.y,o.z);for(let r=0;r<i.length-1;r++)for(let o=0;o<n-1;o++){const a=r*n+o,l=a+n;e.push(a,a+1,l,l,a+1,l+1)}const s=new Me;return s.setAttribute("position",new ne(t,3)),s.setIndex(e),s.computeVertexNormals(),s}function vl(i,t,e,n,s=!1){const a=[],l=[],c=[];for(let u=0;u<=12;u++){const d=ht(t,e,u/12);for(let f=0;f<=12;f++){const g=ht(-n,n,f/12);let v=Math.sin(g),p=Math.cos(g)*Math.sin(d);const m=Math.cos(g)*Math.cos(d);if(s){const M=v;v=p,p=M}a.push(v*i,p*i,m*i),l.push(v,p,m)}}for(let u=0;u<12;u++)for(let d=0;d<12;d++){const f=u*13+d,g=f+12+1;s?c.push(f,g,f+1,g,g+1,f+1):c.push(f,f+1,g,g,f+1,g+1)}const h=new Me;return h.setAttribute("position",new ne(a,3)),h.setAttribute("normal",new ne(l,3)),h.setIndex(c),h}const xl={upperOpen:62*Rt,lowerOpen:-72*Rt,nictOpen:150*Rt};function J1(i){const t=i.species,e=t.eye.radius,n=new Nt(t.skin),s=new y(0,1,0),r=new lr(i),o=t.eye.ring,a=new Nt(t.eye.lid??2369067),l=new Nt(o?.color??7829372),c=new Nt(526346);for(const U of en){const Z=U==="L"?-1:1,W=96,st=7,J=[],ut=[],pt=[],lt=new Nt;for(let Wt=0;Wt<=W;Wt++){const $t=Wt/W*Math.PI*2,It=Math.cos($t),dt=Math.sin($t),[Zt,ee]=t.eye.open??[43,29],ce=t.eye.open?2:It*Z>0?1.3:1.6,ie=1/Math.pow(Math.pow(Math.abs(It)/(Zt*Rt),ce)+Math.pow(Math.abs(dt)/(ee*Rt),ce),1/ce),G=56*Rt;for(let Se=0;Se<=st;Se++){const jt=Se/st;if(o){const Ct=ht(Math.sin(ie)*e*1.05,e*o.width,jt),C=Math.pow(Math.sin(Math.PI*Math.min(jt/.3,1)),.6),S=e*(t.eye.inset+.05)-Ct*Ct/(12*e);J.push(It*Ct,dt*Ct,ht(Math.cos(ie)*e*1.07,S,it(0,.3,jt))+.015*e*C),lt.copy(l).multiplyScalar((.8+.2*it(0,.25,jt))*(.95+.05*Math.sin($t*46+jt*9))),ut.push(lt.r,lt.g,lt.b);continue}const ge=ht(ie,G,jt),mt=Math.pow(Math.sin(Math.PI*Math.min(jt/.5,1)),.6),Ht=Math.max(0,Math.sin($t*38))*it(.12,.2,jt)*(1-it(.22,.32,jt)),yt=e*(1.05+.02*mt+.004*Ht-.035*it(.5,1,jt));J.push(Math.sin(ge)*It*yt,Math.sin(ge)*dt*yt,Math.cos(ge)*yt),lt.copy(l).multiplyScalar(.55+.5*mt).lerp(c,Math.max(Ht*.35,it(.4,.6,jt))),ut.push(lt.r,lt.g,lt.b)}}for(let Wt=0;Wt<W;Wt++)for(let $t=0;$t<st;$t++){const It=Wt*(st+1)+$t,dt=It+st+1;pt.push(It,dt,It+1,dt,dt+1,It+1)}const Et=new Me;Et.setAttribute("position",new ne(J,3)),Et.setAttribute("color",new ne(ut,3)),Et.setIndex(pt),Et.computeVertexNormals();const Gt=Et.toNonIndexed(),Ft=Gt.getAttribute("color");let ue=0;r.add(Gt,`eye.${U}`,l,null,()=>lt.fromBufferAttribute(Ft,ue++).clone()),r.add(vl(e*1.04,12*Rt,112*Rt,78*Rt),`lidUpper.${U}`,a),r.add(vl(e*1.036,-106*Rt,16*Rt,78*Rt),`lidLower.${U}`,a)}const h=new Nt(t.legs.color),u=t.legs.perchRadius;for(const U of en){const Z=Rn(U),W=i.tarsusLength,st=t.legs.toeRadius??.0085,J=st/.0085;r.add(Es([0,.25,.5,.75,1,1.15].map(lt=>new y(0,0,lt*W)),lt=>[ht(.011,.017,lt)*J,ht(.011,.017,lt)*J],s,8),`tarsus.${U}`,h);const ut=(lt,Et,Gt,Ft,ue)=>{const Wt=[];for(let It=0;It<=14;It++){const dt=It/14,Zt=ht(Et,Gt,dt),ee=it(.78,1,dt)*.012,ce=(1-it(0,.2,dt))*.012,ie=u+st*.9-ee+ce;Wt.push(new y(ht(Ft,ue,dt),-u+ie*Math.cos(Zt),ie*Math.sin(Zt)))}r.add(Es(Wt,It=>{const dt=It>.78?ht(.75,.08,(It-.78)/.22):1+.12*Math.sin(It*22);return[st*dt,st*dt*.9]},new y(1,0,0),7),`toe.${U}.${lt}`,h.clone().multiplyScalar(1-lt%2*.12))},pt=t.legs.toe/(u+st);t.legs.zygodactyl?(ut(1,.05,-pt*.72,-.004*Z,-.03*Z),ut(2,-.1,pt*.92,-.004*Z,-.022*Z),ut(3,-.1,pt*1.1,.006*Z,.02*Z),ut(4,.05,-pt*1,.006*Z,.034*Z)):(ut(1,-.12,pt*.95,0,-.03*Z),ut(2,-.12,pt*1.1,0,.002*Z),ut(3,-.12,pt*.98,0,.034*Z),ut(4,.05,-pt*.8,0,-.006*Z))}const d=K1(i),f=new mn({color:16777215,vertexColors:!0,roughness:.9,envMapIntensity:.4,side:Be}),g=new mn({color:n.clone().multiplyScalar(.5),roughness:1,envMapIntensity:.15,side:Be}),v=new ni(d,g);v.name="bird.skin";const p=new ni(r.build(),f);p.name="bird.bare";const m=new lr(i),M=t.bill,T=new Nt(M.color),b=new Nt(2493968),x=U=>ht(1,.17,Math.pow(U,.8))*(U>.95?ht(1,.05,(U-.95)/.05):1),A=(U,Z,W,st)=>{const J=[];for(let pt=0;pt<=26;pt++){const lt=ht(-.07,M.length*st,pt/26),Et=Math.max(lt/M.length,0);J.push(new y(0,U*M.radius*x(Et)-M.droop*Et*Et,lt))}return Es(J,pt=>{const lt=Math.max((pt*(M.length*st+.07)-.07)/M.length,0);return[M.radius*W*x(lt),M.radius*Z*x(lt)]},s,12)},_=U=>{const Z=Math.max(U/M.length,0);return-M.droop*Z*Z};if(M.hook){const U=M.hook,Z=new Nt(U.cere),W=T.clone().multiplyScalar(.86),st=.07,J=12,ut=(S,X)=>S>X?Math.sqrt(Math.max(1-Math.pow((S-X)/(1-X),2)*.99,0)):1,pt=U.turn*Rt,lt=(U.top+U.drop)/(1-Math.cos(pt)),Et=U.top-lt,Gt=(S,X)=>S<=0?X.set(0,U.top,S*st):X.set(0,Et+lt*Math.cos(pt*S),U.reach*Math.sin(pt*S)),Ft=Gt(1,new y),ue=new y(0,-M.droop,M.length),Wt=new y(0,ht(ue.y,Ft.y,.35),ue.z+.012),$t=.5,It=(S,X)=>{if(S<=0)return X.set(0,0,S*st);if(S<=$t){const xt=M.length*S/$t;return X.set(0,_(xt),xt)}const ct=(S-$t)/(1-$t),ot=(1-ct)*(1-ct),gt=2*ct*(1-ct);return X.set(0,ot*ue.y+gt*Wt.y+ct*ct*Ft.y,ot*ue.z+gt*Wt.z+ct*ct*Ft.z)},dt=.1,Zt=S=>1+.06*(1-it(dt-.03,dt+.03,S)),ee=S=>M.radius*ht(1,.2,Ut(S,0,1))*ut(S,.86)*Zt(S),ce=[-1,-.5,...Array.from({length:37},(S,X)=>X/36)],ie=new y,G=new y,Se=(S,X)=>{Gt(S,ie),It(S,G);const ct=ee(S),ot=X*(X===1?Zt(S):1);return Array.from({length:J+1},(gt,xt)=>{const et=-Math.PI/2+Math.PI*xt/J;return new y(ct*Math.sin(et),G.y+(ie.y-G.y)*ot*Math.cos(et),G.z+(ie.z-G.z)*ot*Math.cos(et))})},jt=U.reach*Math.sin(pt*dt);m.add(Lo(ce.map(S=>Se(S,1))),"bill",T,null,S=>S.z<jt&&S.y>U.top*.3?Z:T.clone().lerp(W,it(0,-U.drop,S.y))),m.add(Lo(ce.map(S=>Se(S,.24))),"bill",b);for(const S of[1,-1]){const X=new ci(.0065,10,8);X.translate(S*M.radius*.6,U.top*.8,jt*.55),m.add(X,"bill",new Nt(2038295))}const ge=M.length*.97,mt=S=>ut(S,.9)*ut(1-S,.86),Ht=S=>U.lower*(.75+.25*Math.sin(Math.min(S/.45,1)*Math.PI/2))*(1-.7*Math.pow(Math.max((S-.45)/.55,0),1.5))*mt(S),yt=S=>U.lowerWidth*ht(1,.55,it(.3,1,S))*mt(S),Ct=(S,X)=>{const ct=ht(-.055,ge,S),ot=Ht(S)*X,gt=yt(S);return Array.from({length:J+1},(xt,et)=>{const rt=-Math.PI/2+Math.PI*et/J;return new y(gt*Math.sin(rt),_(ct)-ot*Math.cos(rt),ct)})},C=Array.from({length:29},(S,X)=>X/28);m.add(Lo(C.map(S=>Ct(S,1))),"bill",T.clone().multiplyScalar(.93),()=>"jaw"),m.add(Lo(C.map(S=>Ct(S,.3))),"bill",b,()=>"jaw")}else m.add(A(.4,.58,1,1),"bill",T,null,U=>U.y<_(U.z)+.1*M.radius*x(Math.max(U.z/M.length,0))?b:null),m.add(A(-.36,.5,.9,.985),"bill",T,()=>"jaw",U=>U.y>_(U.z)-.1*M.radius*x(Math.max(U.z/M.length,0))?b:null);const w=M.hook?M.length*.4:.09;for(const U of[1,-1]){const Z=new Me,W=U*M.radius*.8,st=U*M.radius*.72;Z.setAttribute("position",new ne([W,2e-4,-.05,st,2e-4,w,W,-2e-4,-.05,st,2e-4,w,st,-2e-4,w,W,-2e-4,-.05],3)),Z.setAttribute("normal",new ne([U,0,0,U,0,0,U,0,0,U,0,0,U,0,0,U,0,0],3)),m.add(Z,"bill",new Nt(393731),J=>J.y>0?"bill":"jaw")}const N=new lr(i);if(M.hook){const U=new Nt(9069664),Z=new Nt(3812910),W=.012,st=M.length*.62,J=Array.from({length:15},(pt,lt)=>{const Et=ht(W,st,lt/14);return new y(0,_(Et)-.009,Et)}),ut=pt=>pt>.8?Math.sqrt(Math.max(1-Math.pow((pt-.8)/.2,2)*.96,0)):1;N.add(Es(J,pt=>[ht(.02,.016,pt)*ut(pt),ht(.009,.0075,pt)*ut(pt)],s,10),"bill",U,pt=>pt.z<M.length*.5?"tongue.1":pt.z<M.length*.7?"tongue.2":"tongue.3",pt=>pt.z>st*.78?Z:null)}else{const U=new Nt(15979474),Z=.04,W=M.length*.8,st=ut=>ut.z<M.length*.5?"tongue.1":ut.z<M.length*.7?"tongue.2":"tongue.3",J=(ut,pt,lt,Et)=>{const Gt=[];for(let Ft=0;Ft<=14;Ft++){const ue=ht(lt,Et,Ft/14),Wt=ue/M.length,$t=Math.max((Wt-.55)/.25,0);Gt.push(new y(ht(ut,pt,Ft/14),-8e-4*(1-Wt*.7)-M.droop*Wt*Wt-.0028*$t*$t,ue))}return Gt};N.add(Es(J(0,0,Z,W-.012),ut=>[ht(.0036,.0027,ut),ht(.0024,.002,ut)],s,8),"bill",U,st);for(const ut of[1,-1])N.add(Es(J(ut*.0011,ut*.0015,W-.02,W),pt=>[.0015*Math.sqrt(1-pt*pt*.92),.0014*Math.sqrt(1-pt*pt*.92)],s,6),"bill",U,st)}const P=new gn({color:16777215,vertexColors:!0,roughness:.22,clearcoat:1,clearcoatRoughness:.12,sheen:.4,sheenColor:16770272,emissive:4863540,envMapIntensity:1.1,side:Be}),D=new ni(N.build(),P);D.name="bird.tongue";const L=new mn({color:16777215,vertexColors:!0,roughness:.68,envMapIntensity:.35,side:Be}),k=new ni(m.build(),L);k.name="bird.bill";const E=new lr(i);for(const U of en){const Z=new ci(e,40,28);Z.rotateX(Math.PI/2);const W=Z.getAttribute("position");for(let J=0;J<W.count;J++){const ut=W.getZ(J)/e,pt=1+.028*it(.55,1,ut);W.setXYZ(J,W.getX(J)*pt,W.getY(J)*pt,W.getZ(J)*pt)}Z.computeVertexNormals();const st=Z.getAttribute("uv");for(let J=0;J<W.count;J++)st.setXY(J,W.getZ(J)/e,0);E.add(Z,`eye.${U}`,new Nt(1,1,1))}const I=new gn({color:0,roughness:.35,metalness:0,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.1,specularIntensity:.12,ior:1.4}),[F,O]=t.eye.pupil??[.93,.93],K={uIris:{value:t.eye.iris===void 0?new Nt(.003,.0035,.006):new Nt(t.eye.iris)},uPupil:{value:F},pupilRest:F,pupilPinned:O};I.onBeforeCompile=U=>{U.uniforms.uIris=K.uIris,U.uniforms.uPupil=K.uPupil,U.vertexShader=U.vertexShader.replace("#include <common>",`#include <common>
varying float vEyeCos;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vEyeCos = uv.x;`),U.fragmentShader=U.fragmentShader.replace("#include <common>",`#include <common>
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
}`)};const H=new ni(E.build(),I);H.name="bird.eyes";const V=new lr(i);for(const U of en)V.add(vl(e*1.045,-100*Rt,100*Rt,80*Rt,!0),`nict.${U}`,new Nt(9348296));const Y=new gn({color:16777215,vertexColors:!0,roughness:.45,transparent:!0,opacity:.3,clearcoat:.2,side:Be,depthWrite:!1}),Q=new ni(V.build(),Y);Q.name="bird.nict",Q.renderOrder=2;const q=[v,p,k,D,H,Q];for(const U of q)U.frustumCulled=!1,U.bind(i.skeleton,new Yt);return v.castShadow=!0,k.castShadow=!0,p.castShadow=!0,p.receiveShadow=!0,k.receiveShadow=!0,{meshes:q,eye:K,dispose(){for(const U of q)U.geometry.dispose(),U.material.dispose()}}}const yl={spread:0,lift:0,droop:0,sweep:0,raise:0,out:0,twist:0};class xp{headYaw=0;headPitch=0;headRoll=0;headShift=new y;headStabil=.85;reachTarget=new y;reachWeight=0;reachDir=new y(0,0,1);reachPin=0;reachRoll=0;bodyYaw=0;bodyPitch=0;bodyRoll=0;bodyShift=new y;chestPitch=0;breath=0;fluff=0;lift=new Float32Array(8);gorget=0;crest=0;lidUpper=0;lidLower=0;nict=0;feetSlope=0;feetScale=1;grip=1;jaw=0;tongueOut=0;tongueCurl=0;carryAt=1;tailPitch=0;tailYaw=0;tailRoll=0;tailFan=0;wing={L:{...yl},R:{...yl}};reset(){Object.assign(this,j1),this.headShift.set(0,0,0),this.bodyShift.set(0,0,0),this.lift.fill(0);for(const t of en)Object.assign(this.wing[t],yl)}addLift(t,e,n){for(let s=0;s<8;s++){const r=(s/7-t)/e;this.lift[s]+=n*Math.exp(-r*r)}}}const j1=Object.fromEntries(Object.entries(new xp).filter(([,i])=>typeof i=="number")),Qn=new y(1,0,0),cr=new y(0,1,0),Ml=new y(0,0,1),Io=new ve;function Q1(i,t){const{bones:e,rest:n,species:s}=i,r=new Yn,o=new ve,a=new ve,l=new ve,c=new ve,h=new ve,u=new ve,d=new ve,f=new ve,g=new y,v=new y,p=new y,m=new y,[M,T]=s.behaviour.neckShare,b={};for(const It of en){const dt=n[`hand.${It}`].quat;b[It]={out:Qn.clone().applyQuaternion(dt),fan:cr.clone().applyQuaternion(dt)}}{const It={p:new y,n:new y,t:new y},dt=(ie,G)=>{const Se=i.loft.wingAt(ie,G,1);return i.loft.surface(Se.s,Se.ang,It)},Zt=dt(.03,.3).p.clone(),ee=dt(.95,0).p.clone().sub(Zt).normalize(),ce=dt(.4,0).n.clone();ce.addScaledVector(ee,-ce.dot(ee)).normalize(),t.uWingPivot.value.copy(Zt),t.uWingSpan.value.copy(ee),t.uWingChord.value.crossVectors(ce,ee)}const x=n.bill,A=s.legs.zygodactyl===!0,_=new y(0,-s.bill.droop,s.bill.length).applyQuaternion(x.worldQuat).add(x.worldPos).sub(n.head.worldPos),w=_.length(),N=Math.atan2(_.y,_.z),P=.34,D=new y,L=new y,k=s.bill.length*.65,E=["tongue.1","tongue.2","tongue.3"],I=[.06,.5,.7].map(It=>It*s.bill.length),F=[0,.3,.7],O=(It,dt)=>{const Zt=s.bill.length,ee=Math.min(It,Zt),ce=-2*s.bill.droop*ee/(Zt*Zt);return dt.set(0,-s.bill.droop*(ee/Zt)*(ee/Zt)+ce*(It-ee),It),-Math.atan(ce)},K=I.map(()=>new y),H=I.map(()=>new y),V=I.map((It,dt)=>O(It,K[dt])),Y=new y,Q=new ve,q=new Yt,U=new y,Z=new y,W=(()=>{const[It,dt]=s.throat,Zt={p:new y,n:new y,t:new y},ee=n.head.worldPos,ce=i.loft.point(dt,0,new y).sub(ee),ie=i.loft.point(It,0,new y).sub(ee),G=i.loft.surface((It+dt)/2,0,Zt).p.clone().sub(ee),Se=Zt.n.clone(),jt=i.loft.surface(It,0,Zt).t.clone();return{chin:ce,rim:ie,mid:G,out:Se,down:jt,span:ce.distanceTo(ie),pivot:ee.clone().sub(n.chest.worldPos)}})(),st=.12,J=new ve,ut=new y,pt=new y,lt=new y,Et=new y,Gt=n.sternum.worldPos.clone().sub(n.chest.worldPos).setX(0).normalize(),Ft=en.map(It=>({s:It,foot:e[`foot.${It}`],footRest:n[`foot.${It}`],toes:[1,2,3,4].map(dt=>e[`toe.${It}.${dt}`]),tarsus:e[`tarsus.${It}`]})),ue=()=>{h.copy(l).invert().multiply(c),u.copy(Io).slerp(h,M),d.copy(Io).slerp(h,T)};function Wt(It,dt,Zt,ee,ce,ie){return ie.copy(n.head.pos).applyQuaternion(ce).add(n.neck2.pos),ie.applyQuaternion(ee).add(n.neck1.pos),ie.applyQuaternion(Zt).add(n.chest.pos),ie.add(n.spine.pos),ie.applyQuaternion(dt).add(It),ie}const $t=function(dt){r.set(dt.bodyPitch,dt.bodyYaw,dt.bodyRoll,"YXZ"),o.setFromEuler(r),e.hips.quaternion.copy(o),e.hips.position.copy(n.hips.pos).add(dt.bodyShift),a.setFromAxisAngle(Qn,dt.chestPitch),e.chest.quaternion.copy(a),l.copy(o).multiply(a),e.sternum.position.copy(n.sternum.pos).addScaledVector(Gt,dt.breath*.011),e.sternum.scale.set(1+dt.breath*.028,1,1+dt.breath*.012),r.set(-dt.headPitch,dt.headYaw,dt.headRoll,"YXZ"),c.setFromEuler(r),ue(),Wt(e.hips.position,o,a,u,d,p),Wt(n.hips.pos,Io,Io,u,d,m),g.copy(m).sub(p).multiplyScalar(Ut(dt.headStabil,0,1)).add(dt.headShift);const Zt=Ut(dt.reachWeight,0,1);if(Zt>0){Y.copy(p).add(g),v.copy(dt.reachTarget).sub(Y);const Ht=v.length()||1e-6,yt=Ut(Ht-w,-.24,P);Y.addScaledVector(v,yt/Ht);const Ct=Ut(dt.reachPin,0,1);Ct>0&&Y.lerp(v.copy(dt.reachDir).multiplyScalar(-w).add(dt.reachTarget),Ct),v.copy(dt.reachTarget).sub(Y).normalize();const C=Ut(Math.atan2(v.x,v.z),-2.2,2.2),S=Ut(Math.asin(Ut(v.y,-1,1))-N,-1.1,1.25);r.set(-S,C,dt.headRoll*(1-Zt),"YXZ"),Q.setFromEuler(r),Ct>0&&(U.crossVectors(cr,v).normalize(),Z.crossVectors(v,U),d.setFromRotationMatrix(q.makeBasis(U,Z,v)),d.multiply(u.setFromAxisAngle(Ml,dt.reachRoll)).multiply(u.setFromAxisAngle(Qn,N)),Q.slerp(d,Ct)),c.slerp(Q,Zt),ue(),Wt(e.hips.position,o,a,u,d,p),g.lerp(Y.sub(p),Zt)}e.neck1.quaternion.copy(u),e.neck2.quaternion.copy(d),f.copy(u).multiply(d).invert().multiply(h),e.head.quaternion.copy(f),D.copy(p).add(g),f.copy(l).invert(),e.neck1.position.copy(n.neck1.pos).add(v.copy(g).multiplyScalar(.22).applyQuaternion(f)),f.copy(l).multiply(u).invert(),e.neck2.position.copy(n.neck2.pos).add(v.copy(g).multiplyScalar(.3).applyQuaternion(f)),f.copy(l).multiply(u).multiply(d).invert(),e.head.position.copy(n.head.pos).add(v.copy(g).multiplyScalar(.48).applyQuaternion(f)),J.set(0,h.y,0,h.w),J.lengthSq()<1e-6&&J.set(0,0,0,1),J.normalize(),e.throat.quaternion.copy(J),g.copy(e.head.position).applyQuaternion(e.neck2.quaternion).add(e.neck2.position).applyQuaternion(e.neck1.quaternion).add(e.neck1.position),ut.copy(W.chin).applyQuaternion(h).add(g).sub(pt.copy(W.rim).applyQuaternion(J).add(W.pivot));const ee=W.span*.5-ut.length(),ce=.5*(ee+Math.sqrt(ee*ee+1e-4));Et.copy(W.down).applyQuaternion(J).multiplyScalar(ce),e.throat.position.copy(n.throat.pos).add(Et),f.copy(J).slerp(h,.5),e.gular.quaternion.copy(f),v.copy(W.mid).applyQuaternion(f);const ie=Ut(st*(W.span-ut.length()),-.006,.03);lt.copy(W.out).applyQuaternion(f),e.gular.position.copy(g).add(W.pivot).add(Et).multiplyScalar(.5).add(v).addScaledVector(lt,ie),D.add(v.copy(_).applyQuaternion(c)),e.jaw.quaternion.copy(n.jaw.quat).multiply(u.setFromAxisAngle(Qn,Ut(dt.jaw,0,1.1)*(s.bill.gape??.31)));const G=Ut(dt.tongueOut,0,1)*k;let Se=0;for(let Ht=0;Ht<3;Ht++){const yt=O(I[Ht]+G,H[Ht])-V[Ht],Ct=e[E[Ht]];Ct.quaternion.setFromAxisAngle(Qn,yt-Se+dt.tongueCurl*F[Ht]),Ht===0?Ct.position.copy(n[E[0]].pos).add(H[0]).sub(K[0]):Ct.position.copy(H[Ht]).sub(H[Ht-1]).sub(K[Ht]).add(K[Ht-1]).add(n[E[Ht]].pos).applyQuaternion(u.setFromAxisAngle(Qn,-Se)),Se=yt}const jt=Math.max(dt.carryAt,0);L.set(0,-s.bill.droop*Math.min(jt,1)*Math.min(jt,1)-(jt<1?.003*(1-jt):0),jt*s.bill.length).applyQuaternion(x.worldQuat).add(x.worldPos).sub(n.head.worldPos),L.applyQuaternion(c).add(D).sub(v.copy(_).applyQuaternion(c));for(const Ht of en){const yt=i.eyes[Ht],Ct=ht(xl.upperOpen,0,it(0,1,dt.lidUpper)),C=ht(xl.lowerOpen,0,it(0,1,dt.lidLower));yt.lidUpper.quaternion.copy(n[yt.lidUpper.name].quat).multiply(u.setFromAxisAngle(Qn,-Ct)),yt.lidLower.quaternion.copy(n[yt.lidLower.name].quat).multiply(u.setFromAxisAngle(Qn,-C));const S=-Rn(Ht)*xl.nictOpen*(1-Ut(dt.nict,0,1));yt.nict.quaternion.copy(n[yt.nict.name].quat).multiply(u.setFromAxisAngle(cr,S)),yt.nict.scale.setScalar(dt.nict>.002?1:.001),yt.lidUpper.scale.setScalar(ht(.93,1,it(0,.5,dt.lidUpper))),yt.lidLower.scale.setScalar(ht(.93,1,it(0,.5,dt.lidLower)))}r.set(-dt.tailPitch,dt.tailYaw,dt.tailRoll,"YXZ"),e.tail.quaternion.copy(n.tail.quat).multiply(u.setFromEuler(r));const ge=ht(s.tail.restFan,s.tail.maxFan,Ut(dt.tailFan,-.5,1))*Rt;for(const Ht of i.rectrices)Ht.bone.quaternion.setFromAxisAngle(cr,Ht.k*ge);for(const Ht of en){const yt=i.wings[Ht],Ct=dt.wing[Ht],C=it(0,1,Ct.spread);for(let X=0;X<yt.bones.length;X++)yt.bones[X].quaternion.copy(yt.folded[X]).slerp(yt.spread[X],C);C>0&&(Ct.sweep!==0||Ct.raise!==0)&&(u.setFromAxisAngle(cr,-Rn(Ht)*Ct.sweep*C),d.setFromAxisAngle(Ml,Rn(Ht)*Ct.raise*C),yt.bones[0].quaternion.premultiply(d).premultiply(u));const S=1-C;if(S>0){const X=b[Ht],ct=yt.bones[1];ct.quaternion.multiply(u.setFromAxisAngle(X.out,-Ct.lift*.3*S)),ct.quaternion.multiply(u.setFromAxisAngle(X.fan,-Rn(Ht)*Ct.droop*S))}}u.setFromAxisAngle(Ml,dt.feetSlope);const mt=(1-Ut(dt.grip,0,1))*.6;for(const{s:Ht,foot:yt,footRest:Ct,toes:C,tarsus:S}of Ft){yt.position.copy(Ct.pos).applyQuaternion(u),yt.quaternion.copy(u),yt.scale.setScalar(dt.feetScale);for(let ct=0;ct<4;ct++)C[ct].quaternion.setFromAxisAngle(Qn,ct===3||A&&ct===0?mt:-mt);v.copy(i.ankle[Ht]).sub(Ct.worldPos).multiplyScalar(dt.feetScale).applyQuaternion(u).add(yt.position),g.copy(i.hipSocket[Ht]).applyQuaternion(o).add(e.hips.position).sub(v);const X=g.length();g.applyQuaternion(d.copy(u).invert()),is(g,Qn,S.quaternion),S.scale.set(1,1,X/i.tarsusLength/dt.feetScale)}t.uFluff.value=dt.fluff,t.uLift.value.set(dt.lift),t.uLift.value[0]+=dt.crest*.9,t.uLift.value[1]+=dt.crest*.7,t.uGorget.value=dt.gorget,t.uCrest.value=dt.crest,t.uWingSpread.value.set(dt.wing.L.spread,dt.wing.R.spread),t.uWingOut.value.set(dt.wing.L.out,dt.wing.L.twist,dt.wing.R.out,dt.wing.R.twist),t.uWingLift.value.set(dt.wing.L.lift,dt.wing.R.lift)};return $t.tip=D,$t.carry=L,$t.billReach=w,$t}class tS{constructor(t,e=7){this.species=t,this.rng=qi(e)}species;t=0;dt=0;rng;arousal=.3;baseline=.32;attention=null;attentionSpeed=0;freeze=0;saccading=!1;food=[];focus=null;focusId=0;eating=!1;gazeLock=!1;pinGaze=null;quiet=!1;handlers={};lastDir=new y;dir=new y;hasLast=!1;on(t,e){(this.handlers[t]??=[]).push(e)}emit(t,e){for(const n of this.handlers[t]??[])n(e)}excite(t){this.arousal=Ut(this.arousal+t,0,1)}step(t,e){if(this.dt=t,this.t+=t,this.freeze=Math.max(0,this.freeze-t),this.attention&&t>0){if(this.dir.copy(this.attention).sub(e).normalize(),this.hasLast){const n=this.dir.angleTo(this.lastDir)/t;this.attentionSpeed=Cn(this.attentionSpeed,Math.min(n,6),6,t)}this.lastDir.copy(this.dir),this.hasLast=!0}else this.hasLast=!1,this.attentionSpeed=Cn(this.attentionSpeed,0,4,t);this.excite(Math.max(this.attentionSpeed-.25,0)*.5*t),this.arousal=Cn(this.arousal,this.baseline,.14,t)}}class eS{name="posture";a=.3;yaw=new Ti(3.2,.5);follow=0;pitch=new Ti(5,.45);headYaw=0;constructor(t){t.on("saccade",e=>{this.yaw.kick(-e.dyaw*.5),this.pitch.kick(-e.dpitch*.4)}),t.on("fixate",e=>this.headYaw=e.yaw)}update(t,e){this.a=Cn(this.a,t.arousal,2.5,t.dt);const n=this.a;e.fluff+=ht(.2,-.06,n),e.headShift.y+=ht(-.032,.03,n),e.headShift.z+=ht(-.014,.012,n),e.bodyPitch+=ht(-.04,.05,n),e.bodyShift.y+=ht(-.012,.008,n),e.crest+=ht(0,.22,n),e.wing.L.droop+=ht(.05,0,n),e.wing.R.droop+=ht(.05,0,n);const s=t.t;e.bodyRoll+=Ge(s*.17,1)*.022,e.bodyShift.x+=Ge(s*.13,2)*.006,e.bodyPitch+=Ge(s*.21,3)*.012,this.follow=Cn(this.follow,this.headYaw*.14,.9,t.dt),e.bodyYaw+=this.follow+this.yaw.step(0,t.dt)+Ge(s*.11,4)*.025,e.chestPitch+=this.pitch.step(0,t.dt)}}class nS{name="breath";phase=0;update(t,e){const[n,s]=t.species.behaviour.breathHz;this.phase+=t.dt*ht(n,s,t.arousal)*Math.PI*2;const r=Math.sin(this.phase+.45*Math.sin(this.phase))*ht(.75,1.1,t.arousal);e.breath+=r,e.addLift(.42,.2,r*.014),e.tailPitch+=r*.011,e.bodyShift.y+=r*.0012,e.wing.L.lift+=r*.005,e.wing.R.lift+=r*.005}}const iS=i=>i*i*i*(10+i*(-15+6*i));class sS{name="gaze";maxYaw=70*Rt;interest=.5;billOn=.46;pursuit=0;minPitch=-45*Rt;minPitchFood=-50*Rt;cur;from;to;moving=!1;t0=0;dur=.06;amp=0;nextAt=.8;settle=10;burst=0;attYaw=0;attPitch=0;seenYaw=0;seenPitch=0;lastStart=-10;focusSeen=-1;focusAt=0;head=new y(0,.9,.05);d=new y;constructor(t){const e=t.species.behaviour.billUp*Rt;this.cur={yaw:.9,pitch:e,roll:0},this.from={...this.cur},this.to={...this.cur},t.on("startle",()=>{this.nextAt=t.t+.04+t.rng()*.04,this.burst=-1})}moveOn(t){this.burst=0,this.nextAt=Math.min(this.nextAt,t.t+_t(t.rng,.12,.4))}lookAtAttention(t){const e=t.focus??t.attention;return e?(this.d.copy(e).sub(this.head),this.attYaw=Math.atan2(this.d.x,this.d.z),this.attPitch=Math.atan2(this.d.y,Math.hypot(this.d.x,this.d.z)),!0):!1}pick(t,e=!1){const n=t.rng,s=t.species.behaviour.billUp*Rt,r=this.lookAtAttention(t),o=this.cur;let a;if(!e&&this.burst>0)this.burst--,a={yaw:o.yaw+_t(n,-1,1)*13*Rt,pitch:o.pitch+_t(n,-1,1)*8*Rt,roll:o.roll*.5+_t(n,-1,1)*9*Rt};else if(r&&(e||n()<this.interest+.4*t.arousal)){if(this.seenYaw=this.attYaw,this.seenPitch=this.attPitch,(e?0:n())<this.billOn)a={yaw:this.attYaw+_t(n,-5,5)*Rt,pitch:this.attPitch*.8+s+_t(n,-4,14)*Rt,roll:n()<.25?_t(n,-18,18)*Rt:_t(n,-5,5)*Rt};else{const h=_t(n,60,84)*Rt,u=Math.abs(o.yaw-(this.attYaw+h))<Math.abs(o.yaw-(this.attYaw-h))?1:-1;let d=n()<.6?u:-u;Math.abs(this.attYaw+d*h)>this.maxYaw&&(d=-d),a={yaw:this.attYaw+d*h,pitch:s*.6+_t(n,-8,12)*Rt,roll:d*(this.attPitch*.5+_t(n,-4,10)*Rt)}}n()<.35&&(this.burst=1+Math.floor(n()*2))}else{let c=Ut(_t(n,-1,1)*105*Rt,o.yaw-140*Rt,o.yaw+140*Rt);Math.abs(c-o.yaw)<22*Rt&&(c+=Math.sign(c-o.yaw||1)*30*Rt),a={yaw:c,pitch:s*.5+_t(n,-14,24)*Rt,roll:_t(n,-9,9)*Rt},n()<.3&&(this.burst=1+Math.floor(n()*2))}a.yaw=Ut(a.yaw,-this.maxYaw,this.maxYaw),a.pitch=Ut(a.pitch,this.minPitch,52*Rt);const l=t.species.behaviour.parrot?1.7:1;return a.roll=Ut(a.roll*l,-26*Rt*l,26*Rt*l),a}begin(t,e){const[n,s]=t.species.behaviour.saccade;this.from={...this.cur},this.to=e;const r=e.yaw-this.from.yaw,o=e.pitch-this.from.pitch,a=e.roll-this.from.roll;this.amp=Math.hypot(r*Math.cos((e.pitch+this.from.pitch)/2),o,a*.5),this.dur=Math.min(n+s*this.amp/Rt,.095),this.t0=t.t,this.moving=!0,this.lastStart=t.t,t.saccading=!0,t.emit("saccade",{amp:this.amp,dur:this.dur,dyaw:r,dpitch:o})}update(t,e){const n=t.species.behaviour;if(t.pinGaze){e.headYaw+=t.pinGaze[0]*Rt,e.headPitch+=t.pinGaze[1]*Rt,e.headRoll+=t.pinGaze[2]*Rt;return}if(t.focus&&!this.moving&&!t.gazeLock&&this.lookAtAttention(t)){const a=Math.hypot((this.attYaw-this.cur.yaw)*Math.cos(this.attPitch),this.attPitch-this.cur.pitch),l=this.focusSeen!==t.focusId;l&&!this.focusAt&&(this.focusAt=t.t+_t(t.rng,.09,.24)),(l&&t.t>=this.focusAt||!l&&a>6*Rt&&t.t-this.lastStart>.16&&t.rng()<t.dt*9)&&(this.focusSeen=t.focusId,this.focusAt=0,this.burst=0,this.begin(t,{yaw:Ut(this.attYaw,-this.maxYaw,this.maxYaw),pitch:Ut(this.attPitch+(l?_t(t.rng,-3,3)*Rt:0),this.minPitchFood,65*Rt),roll:l?_t(t.rng,-8,8)*Rt:this.cur.roll*.6}))}else if(!this.moving&&!t.quiet&&!t.focus&&!t.gazeLock)if(t.t>=this.nextAt&&(t.freeze<=0||this.burst<0)){const a=this.burst<0;a&&(this.burst=0),this.begin(t,this.pick(t,a))}else t.freeze<=0&&t.t-this.lastStart>.22&&this.lookAtAttention(t)&&Math.hypot((this.attYaw-this.seenYaw)*Math.cos(this.attPitch),this.attPitch-this.seenPitch)>13*Rt&&t.rng()<t.dt*ht(3,9,t.arousal)&&(this.burst=0,this.begin(t,this.pick(t,t.rng()<.5)),this.seenYaw=this.attYaw,this.seenPitch=this.attPitch);if(!this.moving&&this.pursuit>0&&!t.focus&&!t.gazeLock&&t.freeze<=0&&this.lookAtAttention(t)){const a=n.billUp*Rt,l=Ut(this.attYaw,-this.maxYaw,this.maxYaw),c=Ut(this.attPitch*.8+a*.6,this.minPitch,52*Rt),h=Math.hypot((l-this.cur.yaw)*Math.cos(c),c-this.cur.pitch),u=h>14*Rt&&t.t-this.lastStart>.3&&t.rng()<t.dt*5;if(h<28*Rt&&!u){const d=1-Math.exp(-t.dt*3.2*this.pursuit*(.75+.35*Ge(t.t*3.1,31)));this.cur={yaw:this.cur.yaw+(l-this.cur.yaw)*d,pitch:this.cur.pitch+(c-this.cur.pitch)*d,roll:this.cur.roll*(1-d*.5)},this.from={...this.cur},this.to={...this.cur},this.seenYaw=this.attYaw,this.seenPitch=this.attPitch,h>3*Rt&&(this.nextAt=Math.max(this.nextAt,t.t+.25))}else(u||t.t-this.lastStart>.16&&t.rng()<t.dt*10)&&(this.burst=0,this.begin(t,this.pick(t,!0)))}let s,r,o;if(this.moving){const a=(t.t-this.t0)/this.dur;if(a>=1){this.moving=!1,t.saccading=!1,this.cur={...this.to},this.settle=0;const h=Math.abs(this.cur.yaw-this.attYaw)<15*Rt,[u,d]=[ht(n.holdCalm[0],n.holdAlert[0],t.arousal),ht(n.holdCalm[1],n.holdAlert[1],t.arousal)];this.nextAt=t.t+(this.burst<0?.05:this.burst>0?_t(t.rng,.14,.42):EM(t.rng,u,d,1.8)*(h?1.15:1)),t.emit("fixate",{yaw:this.cur.yaw,pitch:this.cur.pitch})}const l=iS(Ut(a,0,1)),c=Math.sin(Math.PI*Ut(a,0,1));s=ht(this.from.yaw,this.to.yaw,l),r=ht(this.from.pitch,this.to.pitch,l)-c*this.amp*.09,o=ht(this.from.roll,this.to.roll,l),e.headShift.y-=c*Math.min(this.amp,1.6)*.012}else{this.settle+=t.dt;const a=Math.exp(-this.settle/.032)*Math.cos(this.settle*24*Math.PI*2)*.04;s=this.cur.yaw+(this.to.yaw-this.from.yaw)*a,r=this.cur.pitch+(this.to.pitch-this.from.pitch)*a,o=this.cur.roll+(this.to.roll-this.from.roll)*a}s+=Ge(t.t*11,11)*.0028+Ge(t.t*.6,12)*.008,r+=Ge(t.t*12,13)*.0028+Ge(t.t*.5,14)*.007,o+=Ge(t.t*.7,15)*.008,e.headYaw+=s,e.headPitch+=r,e.headRoll+=o,e.headShift.x+=Math.sin(s)*.014,e.headShift.z+=(Math.cos(s)-1)*.01-Math.max(r,0)*.018}}class rS{name="blink";t0=-10;full=!1;nextAt=1.5;constructor(t){t.on("saccade",e=>{e.amp>.6&&t.rng()<.45&&t.t-this.t0>.5&&this.start(t,!1)}),t.on("startle",()=>{this.nextAt=t.t+1.2+t.rng()})}start(t,e){this.t0=t.t,this.full=e;const[n,s]=t.species.behaviour.blinkEvery;this.nextAt=t.t+_t(t.rng,n,s)*ht(1.3,.8,t.arousal)}update(t,e){!t.quiet&&t.t>=this.nextAt&&t.freeze<=0&&this.start(t,t.rng()<ht(.3,.08,t.arousal));const n=this.full?1.7:1,s=(t.t-this.t0)/n,r=s<0?0:s<.045?it(0,.045,s):s<.07?1:1-it(.07,.165,s);e.nict+=r,e.lidLower+=r*(this.full?1:.3),e.lidUpper+=r*(this.full?.75:.08);const o=it(.3,.05,t.arousal);e.lidUpper+=o*.22,e.lidLower+=o*.18}}class oS{name="ruffle";kind="puff";t0=-100;nextAt;amp=.6;last=-1e9;constructor(t){const[e,n]=t.species.behaviour.ruffleEvery;this.nextAt=_t(t.rng,e*.5,n*.6),t.on("startle",()=>{this.t0=-100,this.nextAt=Math.max(t.t+_t(t.rng,2.8,5),this.last+t.species.behaviour.ruffleEvery[0])})}trigger(t,e,n){const s=t.rng();this.kind=e??(s<.45?"puff":s<.7?"shake":"throat"),this.t0=t.t,this.last=t.t,this.amp=n??_t(t.rng,.45,.75);const[r,o]=t.species.behaviour.ruffleEvery;this.nextAt=t.t+_t(t.rng,r,o),t.emit("ruffle",{kind:this.kind})}update(t,e){!t.quiet&&t.t>=this.nextAt&&t.freeze<=0&&!t.saccading&&(t.arousal<.7?this.trigger(t):this.nextAt=t.t+1);const n=t.t-this.t0;if(n<0||n>3)return;const s=this.amp;if(this.kind==="throat"){const l=it(0,.12,n)*(1-it(.7,1.25,n));e.gorget+=l*.42*s,e.crest+=l*.38*s,e.addLift(.12,.14,l*.25*s),e.headShift.y+=l*.01;return}for(let l=0;l<8;l++){const c=n-l/7*.2;if(c<=0)continue;const h=it(0,.13,c),u=1-it(.62,1.5,c),d=c>.62?.14*Math.sin((c-.62)*13)*Math.exp(-(c-.62)*3.5):0;e.lift[l]+=s*(h*u+d)*ht(.75,1,l/7)}e.crest+=s*.25*it(0,.1,n)*(1-it(.5,1.1,n));const r=it(.14,.24,n)*(1-it(.55,.85,n)),o=(n-.14)*14*Math.PI*2,a=Math.sin(o)*r;e.bodyRoll+=a*.05*s,e.bodyYaw+=Math.cos(o)*r*.035*s,e.tailYaw+=Math.sin(o-1.2)*r*.16*s,e.tailFan+=r*.55*s+it(0,.2,n)*(1-it(.6,1.4,n))*.25*s;for(const l of["L","R"])e.wing[l].lift+=(r*.11+Math.abs(a)*.05)*s+it(0,.2,n)*(1-it(.7,1.5,n))*.06*s,e.wing[l].droop+=r*.07*s;if(e.bodyShift.y+=r*.008,this.kind==="shake"){const l=it(.1,.2,n)*(1-it(.5,.75,n));e.headRoll+=Math.sin(o*1.15+.8)*l*.3*s,e.headYaw+=Math.cos(o*1.15)*l*.16*s,e.nict+=l,e.lidLower+=l*.6,e.headStabil-=l*.5}}}class aS{name="tail";pitch=new Ti(6.5,.28);fan=new Ti(4.5,.5);yaw=new Ti(5,.4);nextAt;pumps=0;pumpAt=0;constructor(t){const[e,n]=t.species.behaviour.tailEvery;this.nextAt=_t(t.rng,e*.4,n*.5),t.on("startle",s=>{this.pitch.kick(-5*s.strength),this.fan.kick(14*s.strength)}),t.on("saccade",s=>{s.amp>.9&&this.yaw.kick(-s.dyaw*.5)})}flick(t,e=1){this.pitch.kick(-_t(t.rng,3,5.5)*e),this.fan.kick(_t(t.rng,5,11)*e),this.yaw.kick(_t(t.rng,-1.5,1.5)*e)}update(t,e){if(!t.quiet&&t.t>=this.nextAt&&t.freeze<=0){const[n,s]=t.species.behaviour.tailEvery;this.nextAt=t.t+_t(t.rng,n,s),this.pumps=t.rng()<.4?1+Math.floor(t.rng()*2):0,this.pumpAt=t.t+.16,this.flick(t)}this.pumps>0&&t.t>=this.pumpAt&&(this.pumps--,this.pumpAt=t.t+_t(t.rng,.13,.2),this.flick(t,.7)),e.tailPitch+=this.pitch.step(0,t.dt),e.tailFan+=Math.max(this.fan.step(0,t.dt),-.3),e.tailYaw+=this.yaw.step(0,t.dt)}}class Ps{name="wings";t0=-100;nextAt;lead=1;amp=1;stretchT0=-100;stretchSide="L";nextStretch;constructor(t){const[e,n]=t.species.behaviour.wingEvery;this.nextAt=_t(t.rng,e*.5,n*.6),this.nextStretch=_t(t.rng,20,45)}static STRETCH=3.2;stretch(t,e=t.rng()<.5?"L":"R"){this.stretchT0=t.t,this.stretchSide=e,this.nextStretch=t.t+_t(t.rng,45,110)}get stretching(){return this.stretchT0>-50}shuffle(t){this.t0=t.t,this.lead=t.rng()<.5?1:-1,this.amp=_t(t.rng,.7,1.2);const[e,n]=t.species.behaviour.wingEvery;this.nextAt=t.t+_t(t.rng,e,n)}update(t,e){t.species.behaviour.parrot&&!t.quiet&&t.t>=this.nextStretch&&t.freeze<=0&&t.arousal<.5&&!t.eating&&!t.focus&&this.stretch(t);const n=t.t-this.stretchT0;if(n>=0&&n<=Ps.STRETCH){const o=it(0,.9,n)*(1-it(Ps.STRETCH-1,Ps.STRETCH,n)),a=this.stretchSide==="L"?1:-1,l=e.wing[this.stretchSide];l.spread+=o*.8,l.sweep-=o*.5,l.raise-=o*.35,e.tailFan+=o*.6,e.tailYaw+=a*o*.25,e.bodyRoll-=a*o*.06,e.addLift(.5,.3,o*.08)}else n>Ps.STRETCH&&(this.stretchT0=-100);!t.quiet&&t.t>=this.nextAt&&t.freeze<=0&&!this.stretching&&this.shuffle(t);const s=t.t-this.t0;if(s<0||s>1.2)return;for(const o of["L","R"]){const a=s-((o==="L"?1:-1)*this.lead>0?0:.07);if(a<=0)continue;const l=it(0,.07,a)*(1-it(.22,.6,a)),c=Math.sin(a*12*Math.PI*2)*it(.05,.1,a)*(1-it(.2,.42,a));e.wing[o].lift+=(l*.2+c*.06)*this.amp,e.wing[o].droop+=l*.1*this.amp}const r=it(0,.08,s)*(1-it(.15,.5,s));e.bodyShift.y+=r*.006,e.addLift(.5,.25,r*.12)}}class lS{constructor(t){this.mind=t}mind;name="startle";crouch=new Ti(4.2,.42);t0=-100;strength=0;fire(t){const e=this.mind;this.strength=t,this.t0=e.t,e.arousal=Math.max(e.arousal,.6+.4*t),e.freeze=.45+e.rng()*.55,this.crouch.kick(-.9*t),e.emit("startle",{strength:t})}update(t,e){const n=this.crouch.step(0,t.dt);e.bodyShift.y+=n,e.bodyPitch+=-n*2.2,e.headShift.y+=n*.6;const s=t.t-this.t0;if(s<0||s>8)return;const r=this.strength,o=Math.exp(-s/1.6)*Math.min(s/.05,1);e.fluff-=.13*o*r,e.headShift.y+=.02*o*r;const a=Math.exp(-s/.09)*Math.min(s/.03,1);e.wing.L.lift+=a*.42*r,e.wing.R.lift+=a*.42*r,e.lidUpper-=.2*o,e.lidLower-=.2*o}}const Sl=i=>i*i*i*(10+i*(-15+6*i)),Do=.06;class cS{constructor(t,e,n,s,r,o=null){this.mind=t,this.solver=e,this.headRest=n,this.pick=s,this.swallowed=r,this.hop=o,t.on("startle",()=>{this.carried>=0&&this.swallowed(this.carried),this.carried=-1,this.release(this.mind,"idle"),this.readyAt=this.mind.t+1.5})}mind;solver;headRest;pick;swallowed;hop;name="forage";reachOut=.3;reachIn=.2;catchRadius=.05;state="idle";id=-1;t0=0;dur=.15;decideAt=0;watchUntil=0;readyAt=0;retried=!1;ignore=new Map;target=new y;w=0;wFrom=0;lean=0;yaw=0;rel=new y;focus=new y;licks=3;carried=-1;hopAt=0;moved=new y;seed(t){return t.food.find(e=>e.id===this.id)}slideFor(t){const e=this.rel.copy(t).sub(this.headRest),n=e.length(),s=Math.atan2(e.x,e.z),r=Math.asin(Ut(e.y/Math.max(n,1e-6),-1,1));if(Math.abs(s)>2||r<-.95||r>1.3||t.y<-.12)return null;const o=n-this.solver.billReach;return o>this.reachOut||o<-this.reachIn?null:o}inView(t){const e=this.rel.copy(t).sub(this.headRest);return Math.abs(Math.atan2(e.x,e.z))<2.2&&e.length()<2.2&&t.y>-.9}release(t,e){this.state=e,this.t0=t.t,this.wFrom=this.w,e==="idle"&&(t.focus=null,t.gazeLock=!1,this.id=-1)}begin(t,e,n){this.state=e,this.t0=t.t,this.dur=n,this.wFrom=this.w}update(t,e){const n=t.t,s=Ut((n-this.t0)/this.dur,0,1);let r=this.seed(t);switch(t.eating=this.state!=="idle"&&this.state!=="watch",this.state){case"idle":{if(this.w=Cn(this.w,0,22,t.dt),n<this.readyAt)break;let o=null,a=1/0;for(const l of t.food){if(!this.inView(l.pos)||(this.ignore.get(l.id)??0)>n&&this.slideFor(l.pos)===null||l.vel.lengthSq()<Do*Do&&this.slideFor(l.pos)===null)continue;const c=l.pos.distanceTo(this.headRest)-(this.slideFor(l.pos)!==null?1:0);c<a&&(a=c,o=l)}o&&(this.id=o.id,this.state="watch",this.decideAt=0,this.watchUntil=n+_t(t.rng,.7,1.5),t.focus=this.focus.copy(o.pos),t.focusId++,t.excite(.25));break}case"watch":{if(this.w=Cn(this.w,0,22,t.dt),!r||!this.inView(r.pos)){this.release(t,"idle");break}if(t.focus=this.focus.copy(r.pos),this.hop?.busy)break;if(this.slideFor(r.pos)===null){if(this.decideAt=0,this.hop&&t.freeze<=0&&(this.hopAt||(this.hopAt=n+_t(t.rng,.45,1.1)),n>=this.hopAt)){const o=r.pos,a=this.hop.spotFor(l=>this.slideFor(this.moved.copy(o).sub(l))!==null);if(this.hopAt=n+_t(t.rng,.5,.9),a!==null&&this.hop.go(t,a)){this.watchUntil=Math.max(this.watchUntil,n+3);break}}r.vel.lengthSq()<Do*Do&&(this.watchUntil=Math.min(this.watchUntil,n+.25)),n>this.watchUntil&&(this.ignore.set(r.id,n+_t(t.rng,25,45)),this.release(t,"idle"),this.readyAt=n+_t(t.rng,.3,1));break}this.hopAt=0,this.decideAt||(this.decideAt=n+_t(t.rng,.35,1.1)),n>=this.decideAt&&!t.saccading&&t.freeze<=0&&(t.gazeLock=!0,this.retried=!1,this.begin(t,"windup",_t(t.rng,.09,.13)),t.emit("strike",{id:r.id}));break}case"windup":{if(!r){this.release(t,"idle");break}const o=Math.sin(s*Math.PI*.5);if(this.rel.copy(r.pos).sub(this.headRest).normalize(),e.headShift.addScaledVector(this.rel,-.03*o),e.bodyShift.y-=.006*o,s>=1){const a=this.slideFor(r.pos)??0;this.lean=a,this.yaw=Math.atan2(r.pos.x-this.headRest.x,r.pos.z-this.headRest.z),this.begin(t,"strike",Ut(.13+Math.abs(a)*.2,.12,.2))}break}case"strike":{if(!r){this.begin(t,"retract",.2);break}this.target.copy(r.pos).addScaledVector(r.vel,(1-s)*this.dur),this.w=this.wFrom+(1-this.wFrom)*(1-Math.pow(1-s,3)),e.jaw+=it(.2,.7,s)*(1-it(.92,1,s)*.88)*.95,s>=1&&(this.solver.tip.distanceTo(r.pos)<this.catchRadius?(this.pick(r.id),this.carried=r.id,t.excite(.1),this.begin(t,"hold",_t(t.rng,.06,.1))):!this.retried&&this.slideFor(r.pos)!==null?(this.retried=!0,this.begin(t,"strike",.1)):(this.ignore.set(r.id,n+_t(t.rng,3,5)),this.begin(t,"retract",.22)));break}case"hold":if(this.w=1,e.jaw+=.1,s>=1){t.focus=null;const o=t.species.behaviour.parrot===!0;this.licks=o?4+Math.floor(t.rng()*3):2,this.begin(t,"eat",o?this.licks*.26+.1:this.licks*.13+.04)}break;case"retract":this.w=this.wFrom*(1-Sl(s)),s>=1&&(this.release(t,"idle"),this.readyAt=n+_t(t.rng,.3,.9));break;case"eat":{if(t.species.behaviour.parrot){this.w=this.wFrom*(1-Sl(Ut((n-this.t0)/.35,0,1)));const d=Math.sin(Math.PI*(s*this.licks%1));e.carryAt=ht(.96,.6,it(0,1,s)),e.jaw+=.08+.3*d,e.tongueOut+=.08*d,e.headPitch-=.05*it(0,.25,s)*(1-it(.85,1,s)),s>=1&&this.begin(t,"swallow",_t(t.rng,.34,.46));break}this.w=this.wFrom*(1-Sl(Ut((n-this.t0)/.2,0,1)));const o=Ut((n-this.t0)/(this.dur-.04)*this.licks,0,this.licks),a=Math.min(Math.floor(o),this.licks-1),l=o>=this.licks?1:o-a,c=1-a/this.licks,h=1-(a+1)/this.licks,u=Math.sin(Math.PI*it(0,.55,l));e.tongueOut+=Ut((c-.72)/.65*u+.04*u,0,1),e.carryAt=ht(c,h+.04,it(.35,1,l)),e.jaw+=.12+.3*Math.sin(Math.PI*it(0,.7,l))-.08*it(.75,1,l),e.headPitch+=.03*Math.sin(Math.PI*l),s>=1&&this.begin(t,"swallow",_t(t.rng,.36,.44));break}case"swallow":{this.w=0;const o=t.species.behaviour.parrot===!0;e.carryAt=o?ht(.6,.08,it(0,.4,s)):.04;const a=Math.sin(Math.PI*it(0,.55,s))*(o?.07:.26);e.headPitch+=a,e.headShift.y+=a*.03,e.jaw+=Math.sin(Math.PI*it(.1,.5,s))*(o?.2:.45);const l=Math.sin(Math.PI*it(.35,.95,s));e.gorget+=l*.16,e.addLift(.2,.12,l*.12),s>.18&&this.carried>=0&&(this.swallowed(this.carried),t.emit("ate",{id:this.carried}),this.carried=-1),s>=1&&(this.release(t,"idle"),this.readyAt=n+_t(t.rng,.4,1.3));break}}this.w>.001&&(e.reachTarget.copy(this.target),e.reachWeight=this.w,e.bodyPitch+=this.w*Ut(this.lean*.75,-.16,.24),e.bodyYaw+=this.w*this.yaw*.14,e.bodyShift.y-=this.w*.008,e.headStabil*=1-this.w)}}class hS{name="mouth";lickEvery=[14,36];singEvery=[30,80];blocked=()=>!1;flicks=[];nextLick;singFrom=-10;singFor=0;bursts=[];nextSing;pump=0;parrot;constructor(t){this.parrot=t.species.behaviour.parrot===!0,this.nextLick=_t(t.rng,5,14),this.nextSing=_t(t.rng,14,34),t.on("ate",()=>{t.rng()<.7&&(this.nextLick=t.t+_t(t.rng,.25,.6))}),t.on("startle",()=>{this.singFor=0,this.flicks.length=0,this.nextLick=t.t+_t(t.rng,8,16),this.nextSing=Math.max(this.nextSing,t.t+_t(t.rng,12,30))})}lick(t,e=_t(t.rng,.56,.68),n=t.rng()<.45?1:t.rng()<.6?2:3){this.flicks.length=0;let s=t.t;for(let r=0;r<n;r++)this.flicks.push({at:s,amp:r===0?e:e*_t(t.rng,.8,1.05)}),s+=_t(t.rng,.21,.3);this.nextLick=t.t+_t(t.rng,this.lickEvery[0],this.lickEvery[1])}sing(t,e=1.6){if(this.singFrom=t.t,this.bursts.length=0,this.parrot){let r=.1;const o=Math.max(2,Math.round(e*2.2));for(let l=0;l<o;l++){const c=_t(t.rng,2.6,3.4);this.bursts.push({at:r,notes:1,hz:c,amp:_t(t.rng,.7,.95)}),r+=1/c+_t(t.rng,.06,.2)}const a=this.bursts[this.bursts.length-1];this.singFor=a.at+1/a.hz+.3,this.nextSing=t.t+this.singFor+_t(t.rng,this.singEvery[0],this.singEvery[1]),this.flicks.length=0,this.nextLick=Math.max(this.nextLick,t.t+this.singFor+_t(t.rng,1.5,5)),t.excite(.25);return}let n=.06;for(;n<e-.2||this.bursts.length===0;){const r=3+Math.floor(t.rng()*3),o=_t(t.rng,13,16.5);this.bursts.push({at:n,notes:r,hz:o,amp:_t(t.rng,.26,.4)}),n+=r/o+(t.rng()<.25?_t(t.rng,.32,.5):_t(t.rng,.1,.22))}const s=this.bursts[this.bursts.length-1];this.singFor=s.at+s.notes/s.hz+.25,this.nextSing=t.t+this.singFor+_t(t.rng,this.singEvery[0],this.singEvery[1]),this.flicks.length=0,this.nextLick=Math.max(this.nextLick,t.t+this.singFor+_t(t.rng,1.5,5))}get singing(){return this.singFor>0}update(t,e){const n=!t.quiet&&!t.gazeLock&&!t.focus&&!t.eating&&t.freeze<=0&&!this.blocked();n&&t.t>=this.nextLick&&t.arousal<.6&&!this.singing&&this.lick(t),n&&t.t>=this.nextSing&&!this.singing&&(t.arousal<.42&&this.flicks.length===0?this.sing(t,_t(t.rng,1.1,2.4)):this.nextSing=t.t+_t(t.rng,4,9));let s=0;for(const h of this.flicks){const u=(t.t-h.at)/.19;u>=0&&u<=1&&(s=Math.max(s,h.amp*Math.sin(Math.PI*Math.pow(it(0,1,u),.8))))}this.flicks.length&&t.t>this.flicks[this.flicks.length-1].at+.2&&(this.flicks.length=0),s>0&&this.parrot?(e.tongueOut+=Math.min(s,.7)*.2,e.jaw+=.14*it(0,.3,s)):s>0&&(e.tongueOut+=Math.min(s,.7),e.tongueCurl+=.16*it(.3,.6,s),e.jaw+=.02*it(0,.3,s));let r=0,o=0,a=0;const l=t.t-this.singFrom;if(this.singFor>0)if(l>this.singFor||this.blocked())this.singFor=0;else for(const h of this.bursts){const u=l-h.at,d=h.notes/h.hz;u<0||u>d||(r=it(0,.03,u)*(1-it(d-.03,d,u)),o=.5-.5*Math.cos(u*h.hz*Math.PI*2),a=h.amp)}this.pump=Cn(this.pump,r,r>this.pump?30:11,t.dt);const c=this.pump;if(!(c<.002&&r===0)){if(this.parrot){e.jaw+=r*a*(.2+.8*o),e.tongueOut+=r*o*.1,e.headPitch+=c*.12+r*o*.06,e.headShift.z+=c*.014,e.headShift.y+=c*.008,e.bodyPitch+=c*.05,e.addLift(.12,.12,c*.3),e.tailFan+=c*.35,e.breath-=c*.5;return}e.jaw+=r*a*(.1+.9*o),e.gorget+=c*.2+r*o*.05,e.addLift(.2,.07,c*.16),e.crest-=c*.14,e.addLift(0,.07,-c*.14),e.addLift(.4,.09,-c*.3),e.breath-=c*.7,e.headPitch+=c*.035+r*o*.012,e.headShift.y-=c*.004,e.headShift.z-=c*.003,e.tailPitch-=c*.03}}}const No=()=>({point:new y,up:new y(0,1,0),tangent:new y(1,0,0),radius:.0405});class uS{constructor(t,e){this.mind=t,this.ground=e,t.on("startle",n=>{if(this.hold||this.phase!=="stand"||t.eating||t.rng()>.55*n.strength)return;const s=_t(t.rng,.1,.2)*(t.rng()<.5?-1:1),r=this.clampX(this.x+s);Math.abs(r-this.x)>.06&&this.go(t,r,.05)})}mind;ground;name="hop";maxHop=.35;homeAfter=[14,30];home=0;hold=!1;x=0;phase="stand";t0=0;dur=.1;x0=0;x1=0;apex=.05;from=No();to=No();here=No();tmp=No();legs=new Ti(5.5,.4);lag=new y;anchor=new y;off=new y;slope=0;scale=1;placed=!1;homeAt=20;lastFood=0;get busy(){return this.phase!=="stand"}clampX(t){return Ut(t,this.ground.range[0],this.ground.range[1])}frame(t,e){return(this.ground.at?.(t,e)??null)||(e.point.set(t,this.ground.root.position.y,this.ground.root.position.z),e.up.set(0,1,0),e.tangent.set(1,0,0),e.radius=this.ground.restRadius),e}reseat(){this.placed=!1}spotFor(t){if(!this.ground.at)return null;const e=this.ground.range[1]-this.ground.range[0];for(let n=.1;n<=e+1e-6;n+=.05)for(const s of[1,-1]){const r=this.x+s*n;if(r<this.ground.range[0]||r>this.ground.range[1])continue;const o=this.ground.at(r,this.tmp);if(o&&t(this.off.copy(o.point).sub(this.here.point)))return this.x+s*Math.min(n,this.maxHop)}return null}place(t,e){return this.x=this.clampX(t),this.frame(this.x,this.here),this.slope=Math.atan2(this.here.tangent.y,this.here.tangent.x),this.scale=this.here.radius/this.ground.restRadius,e.copy(this.here.point),this.x}landed(){this.legs.kick(-1.1),this.follow()}follow(){this.anchor.copy(this.ground.root.position)}go(t,e,n=_t(t.rng,.07,.11)){if(this.hold||this.phase!=="stand"||(e=this.clampX(Ut(e,this.x-this.maxHop,this.x+this.maxHop)),Math.abs(e-this.x)<.03))return!1;this.x0=this.x,this.x1=e,this.frame(this.x0,this.from),this.frame(this.x1,this.to);const s=this.from.point.distanceTo(this.to.point);return this.apex=Ut(.035+s*.13,.04,.08),this.phase="crouch",this.t0=t.t,this.dur=n,t.excite(.15),!0}update(t,e){const n=this.ground.root;this.placed||(this.placed=!0,this.x=this.clampX(n.position.x),this.frame(this.x,this.here),n.position.copy(this.here.point),this.anchor.copy(n.position),this.slope=Math.atan2(this.here.tangent.y,this.here.tangent.x),this.scale=this.here.radius/this.ground.restRadius);const s=t.t,r=Ut((s-this.t0)/this.dur,0,1);let o=1;switch(t.food.length&&(this.lastFood=s),this.phase==="stand"&&!this.hold&&this.homeAfter[1]>0&&!t.quiet&&!t.eating&&t.freeze<=0&&Math.abs(this.x-this.home)>.12&&s-this.lastFood>4&&s>this.homeAt&&(this.go(t,this.home+(this.x-this.home)*.3),this.homeAt=s+_t(t.rng,this.homeAfter[0],this.homeAfter[1])),this.phase){case"crouch":{const l=Math.sin(r*Math.PI*.5);e.bodyShift.y-=.022*l,e.bodyPitch+=.07*l,e.wing.L.lift+=.1*l,e.wing.R.lift+=.1*l,r>=1&&(t.emit("perch",{x:this.x0,push:.45,on:!1,side:0}),this.phase="air",this.t0=s,this.dur=Ut(.12+this.from.point.distanceTo(this.to.point)*.38,.12,.25));break}case"air":{n.position.copy(this.from.point).lerp(this.to.point,r),n.position.y+=4*this.apex*r*(1-r),this.slope=ht(Math.atan2(this.from.tangent.y,this.from.tangent.x),Math.atan2(this.to.tangent.y,this.to.tangent.x),r),this.scale=ht(this.from.radius,this.to.radius,r)/this.ground.restRadius;const l=Math.sin(Math.PI*r);o=1-it(0,.2,r)*(1-it(.75,1,r)),e.bodyShift.y+=.014*(1-r)-.012*l+.008*it(.7,1,r),e.bodyPitch+=.07*(1-r)-.04*l;const c=Math.sign(this.x1-this.x0);e.bodyRoll+=-c*.07*l,e.wing.L.lift+=.1+.3*l,e.wing.R.lift+=.1+.3*l,e.wing.L.droop+=.12*l,e.wing.R.droop+=.12*l,e.tailFan+=.5*l,e.tailPitch+=.12*l,e.fluff-=.05*l,r>=1&&(this.x=this.x1,this.frame(this.x,this.here),n.position.copy(this.here.point),this.phase="land",this.t0=s,this.dur=.28,this.legs.kick(-.75),t.emit("perch",{x:this.x1,push:.55,on:!0,side:0}));break}case"land":{const l=1-it(0,1,r);e.wing.L.lift+=.1*l,e.wing.R.lift+=.1*l,e.tailFan+=.3*l,e.tailPitch-=.1*Math.sin(Math.PI*r)*.8,e.addLift(.55,.3,.14*Math.sin(Math.PI*it(0,.8,r))),r>=1&&(this.phase="stand");break}}const a=this.legs.step(0,t.dt);e.bodyShift.y+=a,e.bodyPitch+=-a*1.6,this.anchor.x=Cn(this.anchor.x,n.position.x,this.phase==="air"?9:16,t.dt),this.anchor.y=Cn(this.anchor.y,n.position.y,this.phase==="air"?9:16,t.dt),this.anchor.z=Cn(this.anchor.z,n.position.z,16,t.dt),this.lag.copy(this.anchor).sub(n.position).clampLength(0,.16),e.headShift.add(this.lag),e.feetSlope=this.slope,e.feetScale=this.scale,e.grip=o,e.bodyRoll+=this.slope*.12}}function dS(i){const t=i.species.wing,e=t.hand+t.primaryLen[1]*.92,n=qi(i.species.seed+501),s=64,r=4,o=new Uint8Array(s*r*4);for(let u=0;u<s;u++){const d=.45+.55*Math.pow(n(),2.2)+(n()<.12?.6:0);for(let f=0;f<r;f++)o.set([255,Math.min(255,d*200),255,255],(f*s+u)*4)}const a=new _a(o,s,r);a.wrapS=os,a.magFilter=a.minFilter=je,a.needsUpdate=!0;const l=new Xn({color:new Nt(t.color).multiplyScalar(1.6),alphaMap:a,vertexColors:!0,transparent:!0,depthWrite:!1,side:Be,opacity:0}),c=[],h=i.rest.chest.worldPos;for(const u of en){const d=Rn(u),f=[],g=[],v=[],p=[],m=28,M=6;for(const x of[-24,-8,8,24]){const A=f.length/3;for(let _=0;_<=m;_++){const w=_/m,N=(-98+172*w)*Rt;for(let P=0;P<=M;P++){const D=P/M,L=Math.tan(x*Rt)*D*e*(.6+.4*Math.cos((w-.5)*Math.PI*2));f.push(d*Math.cos(N)*D*e,L+.04*D,Math.sin(N)*D*e);const k=it(.05,.4,D)*(1-it(.8,1,D))*(.5+.9*Math.pow(Math.abs(w*2-1),2.5))*it(0,.06,w)*(1-it(.94,1,w));g.push(1,1,1,k*(Math.abs(x)<10?.5:.36)),v.push(w*2.2,D)}}for(let _=0;_<m;_++)for(let w=0;w<M;w++){const N=A+_*(M+1)+w,P=N+M+1;p.push(N,P,N+1,P,P+1,N+1)}}const T=new Me;T.setAttribute("position",new ne(f,3)),T.setAttribute("color",new ne(g,4)),T.setAttribute("uv",new ne(v,2)),T.setIndex(p);const b=new me(T,l);b.name=`bird.wingBlur.${u}`,b.frustumCulled=!1,b.visible=!1,b.renderOrder=2,b.position.copy(i.rest[`shoulder.${u}`].worldPos).sub(h),i.bones.chest.add(b),c.push(b)}return{set(u,d=.6){const f=u>.004;for(const g of c)g.visible=f,g.rotation.set(d+(Math.random()-.5)*.16,(Math.random()-.5)*.2,(Math.random()-.5)*.12);f&&(l.opacity=u*(.8+.45*Math.random()),a.offset.x=Math.random())},dispose(){for(const u of c)u.removeFromParent(),u.geometry.dispose();l.dispose(),a.dispose()}}}const As=2;class fS{constructor(t,e,n,s,r,o){this.mind=t,this.rig=e,this.root=n,this.hop=s,this.ruffle=r,this.tail=o,this.nextAt=_t(t.rng,this.every[0],this.every[1]),this.blur=dS(e)}mind;rig;root;hop;ruffle;tail;name="flee";awayFor=[2,5];every=[70,200];phase="idle";t0=0;dur=.4;side=1;from=new y;out=new y;hover=new y;landAt=new y;far=new y;landX=0;nextAt;blur;shakeAt=-1;get active(){return this.phase!=="idle"}get perched(){return this.phase==="idle"||this.phase==="ready"||this.phase==="land"}get gone(){return this.phase==="away"}start(){const t=this.mind;return this.active||this.hop.busy?!1:(this.hop.hold=!0,t.emit("startle",{strength:1}),t.arousal=1,t.freeze=0,this.phase="ready",this.t0=t.t,this.dur=_t(t.rng,.3,.48),this.side=t.rng()<.5?1:-1,this.nextAt=t.t+_t(t.rng,this.every[0],this.every[1]),!0)}go(t,e){this.phase=t,this.t0=this.mind.t,this.dur=e}update(t,e){if(this.phase==="idle"&&(!t.quiet&&t.t>=this.nextAt&&!t.eating&&t.freeze<=0&&this.start(),this.shakeAt>0&&t.t>=this.shakeAt&&(this.shakeAt=-1,this.ruffle.trigger(t,"shake",.7)),this.phase==="idle"))return;const n=this.root,s=Ut((t.t-this.t0)/this.dur,0,1);let r=0,o=0,a=.6;switch(t.gazeLock=this.phase!=="land",this.phase){case"ready":{const l=Math.sin(s*Math.PI*.5);e.bodyShift.y-=.04*l,e.bodyShift.z+=.02*l,e.bodyPitch+=.34*l,e.headShift.y-=.012*l,e.fluff-=.12*l,e.tailFan+=.35*l,e.tailPitch-=.12*l,r=.42*it(0,.8,s);const c=Math.sin(t.t*46*Math.PI)*.05*l;for(const h of["L","R"])e.wing[h].lift+=.25*l+c,e.wing[h].droop+=.08*l;s>=1&&(this.from.copy(n.position),this.out.set(this.side*.55,1,.12).normalize(),t.emit("perch",{x:this.from.x,push:1,on:!1,side:.4}),this.go("takeoff",.27));break}case"takeoff":{n.position.copy(this.from).addScaledVector(this.out,.35*s+7.5*s*s*s),r=As,o=it(0,.12,s),e.grip=1-it(0,.15,s),e.bodyShift.y+=.03*it(0,.3,s),e.bodyPitch+=ht(.34,.1,it(0,.6,s)),a=.95,e.bodyRoll+=-this.side*.25*s,e.tailFan+=.8,e.tailPitch-=.25,e.fluff-=.14,s>=1&&(n.visible=!1,this.go("away",_t(t.rng,this.awayFor[0],this.awayFor[1])));break}case"away":{r=As,s>=1&&(this.landX=this.hop.home+_t(t.rng,-.12,.12),this.landX=this.hop.place(this.landX,this.landAt),this.hover.copy(this.landAt),this.hover.y+=.2,this.far.copy(this.hover).add(new y(-this.side*_t(t.rng,3.2,4.4),_t(t.rng,1.8,3),_t(t.rng,-1.2,-.3))),n.position.copy(this.far),n.visible=!0,this.go("approach",_t(t.rng,.42,.55)));break}case"approach":{const l=1-Math.pow(1-s,3);n.position.copy(this.far).lerp(this.hover,l),r=As,o=1,e.grip=0,e.bodyPitch+=ht(.5,-.32,it(.35,1,s)),a=ht(.9,.35,it(.35,1,s)),e.bodyRoll+=this.side*.3*(1-l),e.tailFan+=ht(.3,1,it(.4,1,s)),e.tailPitch-=.3*it(.4,1,s),e.fluff-=.1,s>=1&&this.go("brake",_t(t.rng,.45,.62));break}case"brake":{const l=it(.6,1,s);a=.35,n.position.copy(this.hover).lerp(this.landAt,l),n.position.y+=.015*Math.sin(t.t*31)*(1-l),n.position.x+=.008*Math.sin(t.t*23)*(1-l),r=As,o=1,e.grip=it(.8,1,s)*.5,e.bodyPitch-=ht(.32,.05,l),e.bodyShift.y+=.02*(1-l),e.tailFan+=1,e.tailPitch-=ht(.3,.1,l),s>=1&&(n.position.copy(this.landAt),this.hop.landed(),t.emit("perch",{x:this.landAt.x,push:.85,on:!0,side:_t(t.rng,-1,1)}),this.tail.flick(t,1.2),this.go("land",.5));break}case"land":{n.position.copy(this.landAt),r=s<.12?As:1-it(.12,.75,s),o=1-it(0,.14,s),e.grip=.5+.5*it(0,.25,s),e.tailFan+=.8*(1-it(0,.8,s));for(const l of["L","R"])e.wing[l].lift+=.3*Math.sin(Math.PI*it(.5,1,s));s>=1&&(this.phase="idle",this.hop.hold=!1,t.gazeLock=!1,this.shakeAt=t.t+_t(t.rng,.25,.6),t.freeze=.3);break}}if(r===As&&o>.9&&Math.random()<.3){r=1,o*=.55;const l=Math.random()<.5;for(const c of["L","R"])e.wing[c].sweep=l?_t(Math.random,.7,1):-_t(Math.random,.9,1.25),e.wing[c].raise=(l?-.1:.45)+a*.4}e.wing.L.spread=e.wing.R.spread=r,this.blur.set(o,a),this.hop.follow()}dispose(){this.blur.dispose()}}const pS=[[.44,-.5],[.52,-.25],[.38,-.65]];class mS{constructor(t,e,n){this.billReach=n,this.nextAt=_t(t.rng,this.every[0]*.6,this.every[1]*.7);const s={p:new y,n:new y,t:new y};for(const r of["L","R"])for(const[o,a]of pS){const l=e.loft.wingAt(o,a,Rn(r));e.loft.surface(l.s,l.ang,s),this.spots[r].push(s.p.clone().addScaledVector(s.n,this.tipOff))}this.coord=e.loft.bodyCoord(3.4),this.hips=e.rest.hips.worldPos.clone(),this.headRest=e.rest.head.worldPos.clone(),t.on("startle",()=>{this.active&&(t.gazeLock=!1),this.active=!1})}billReach;name="preen";auto=!1;every=[22,55];blocked=()=>!1;onDone=null;active=!1;wingOut=.44;wingTwist=.42;billDir=new y(.12,-.86,-.5).normalize();billOut=new y(.3,-.92,.05).normalize();tipOff=.03;bodyYaw=.22;bodyRoll=.1;bodyPitch=.06;headRoll=1.2;t0=0;dur=4;side="L";nextAt;coord;hips;headRest;spots={L:[],R:[]};spot=new y;seed=0;tBreak=0;order=[0,1,2];q=new ve;e=new Yn;d=new y;a=new y;b=new y;start(t,e){return this.active||this.blocked()||t.eating?!1:(this.active=!0,this.t0=t.t,this.dur=_t(t.rng,4,5),this.side=e??(t.rng()<.5?"L":"R"),this.seed=t.rng()*100,this.tBreak=_t(t.rng,.42,.58),this.order=t.rng()<.5?[0,1,2]:[2,0,1],this.spot.copy(this.spots[this.side][this.order[0]]),this.nextAt=t.t+this.dur+_t(t.rng,this.every[0],this.every[1]),!0)}update(t,e){if(!this.active&&(this.auto&&!t.quiet&&t.t>=this.nextAt&&(t.arousal<.5&&t.freeze<=0&&!t.focus&&!t.saccading?this.start(t):this.nextAt=t.t+2),!this.active))return;const n=t.t-this.t0,s=this.dur;if(n>=s||this.blocked()){this.active=!1,t.gazeLock=!1,n>=s&&this.onDone?.(t);return}t.gazeLock=!0;const r=Rn(this.side),o=(E,I)=>it(E,I,n),a=s-1.3,l=o(0,.42)*(1-o(s-.6,s-.1)),c=o(.12,.7)*(1-o(s-.95,s-.25)),h=o(.22,.8)*(1-o(a+.2,a+.9)),u=o(.5,.95)*(1-o(a+.18,a+.65)),d=.95,f=ht(d+.3,a,this.tBreak);let g=o(d-.1,d+.22)*(1-o(a,a+.24));g*=1-.75*o(f-.16,f)*(1-o(f+.08,f+.3));const v=ht(f,a,.55),p=this.order[n<f?0:n<v?1:2];this.spot.lerp(this.spots[this.side][p],1-Math.exp(-t.dt*(n<f+.3?14:7)));const m=it(.8,1,g),M=n*9.5*Math.PI*2+this.seed,T=it(-.15,.35,Math.sin(n*5.1+this.seed)+.6*Math.sin(n*2.3+this.seed*1.7)),b=Math.sin(M)*m*T,x=Math.sin(M*.5+1.3)*m*T,A=r*this.bodyYaw*c,_=r*this.bodyRoll*c,w=this.bodyPitch*c;e.bodyYaw+=A,e.bodyRoll+=_,e.bodyPitch+=w,e.bodyShift.x+=r*.012*c,e.tailYaw+=-r*.14*c,e.tailFan+=.12*c,this.e.set(e.bodyPitch,e.bodyYaw,e.bodyRoll,"YXZ"),this.q.setFromEuler(this.e);const N=E=>E.sub(this.hips).applyQuaternion(this.q).add(this.hips).add(e.bodyShift),P=e.wing[this.side];P.out+=l*this.wingOut+b*.012+.03*m*Math.sin(n*3.1+this.seed),P.twist+=l*this.wingTwist+x*.015,P.lift+=l*.05,e.wing[this.side==="L"?"R":"L"].lift+=.05*c;const D=this.d.copy(this.billDir);D.x*=r;const L=this.a.copy(this.spot).addScaledVector(D,-this.billReach);this.b.copy(this.billOut),this.b.x*=r,D.lerp(this.b,1-g).normalize(),L.addScaledVector(D,this.billReach+b*.014),L.z+=x*.006,L.y+=x*.005,N(L),D.applyQuaternion(this.q),e.reachTarget.copy(L),e.reachDir.copy(D),e.reachPin=1,e.reachRoll=r*(this.headRoll+.05*x),e.reachWeight=u,e.headYaw=ht(e.headYaw,r*100*Rt+e.bodyYaw,h),e.headPitch=ht(e.headPitch,-52*Rt,h),e.headRoll=ht(e.headRoll,r*.15,h);const k=this.b.copy(this.spot).addScaledVector(this.d.copy(this.billDir).setX(this.billDir.x*r),-this.billReach);N(k).sub(this.headRest),e.headShift.addScaledVector(k,h*.8),e.headStabil=ht(e.headStabil,.3,h),e.jaw+=(.1+.16*(.5+.5*Math.sin(M+.6)))*m*T,e.nict+=.45*m,e.lidLower+=.3*m,e.lidUpper+=.15*m,e.addLift(this.coord,.09,m*(.08+.04*Math.abs(b))),e.fluff+=.04*c}}function gS(i={}){const t=i.species??hp,e=new cn;e.name="bird";const n=I1(t);e.add(n.rootBone);const s=Y1(n),{material:r,uniforms:o}=Z1(),a=new ni(s.contour,r);a.name="bird.contour";const l=new ni(s.flight,r);l.name="bird.flight";const c=new ni(s.fuzz,r);c.name="bird.fuzz",c.frustumCulled=!1,c.bind(n.skeleton,new Yt),c.receiveShadow=!0;const h=$1(o);for(const V of[a,l])V.customDepthMaterial=h,V.castShadow=!0,V.frustumCulled=!1,V.bind(n.skeleton,new Yt),V.receiveShadow=!0;const u=J1(n);e.add(a,l,c,...u.meshes);const d=new xp,f=Q1(n,o),g=new tS(t,i.seed??t.seed),v=new lS(g),p={root:e,at:null,range:[0,0],restRadius:t.legs.perchRadius},m=new uS(g,p),M=new cS(g,f,n.rest.head.worldPos.clone(),V=>K.onPick?.(V),V=>K.onSwallow?.(V),m),T=new hS(g),b=new oS(g),x=new aS(g),A=new fS(g,n,e,m,b,x),_=new Ps(g),w=t.behaviour.parrot===!0,N=new mS(g,n,f.billReach);T.blocked=()=>A.active||m.busy||N.active;const P=()=>T.blocked()||M.state!=="idle";N.blocked=()=>A.active||m.busy||g.eating||M.state!=="idle",N.onDone=V=>{_.shuffle(V),V.rng()<.5&&b.trigger(V,"puff",.35)};const D=[new eS(g),new nS,new sS(g),new rS(g),b,x,_,M,T,N,m,v,A];let L=[];const k=[],E=n.rest.head.worldPos.clone(),I=new y,F=new Yt;let O=null;const K={root:e,species:t,rig:n,pose:d,mind:g,layers:D,layer:V=>{const Y=D.find(Q=>Q.name===V);if(!Y)throw new Error(`no layer ${V}`);return Y},plumage:o,feathers:{contour:a,flight:l,fuzz:c},headPosition:V=>n.bones.head.getWorldPosition(V),onPose:null,flee:()=>w?!1:A.start(),preen:V=>N.start(g,V),get preening(){return N.active},get fleeing(){return A.active},get away(){return A.gone},get perched(){return A.perched},sing:V=>!P()&&(T.sing(g,V),!0),stretch:()=>w&&!P()&&!A.active&&(_.stretch(g),!0),get singing(){return T.singing},lick:(V,Y)=>!P()&&(T.lick(g,V,Y),!0),hopTo:V=>!P()&&m.go(g,V),hopBy:V=>K.hopTo(m.x+V),get busy(){return P()},ruffle:(V,Y)=>b.trigger(g,V,Y),update(V){e.updateWorldMatrix(!0,!1),F.copy(e.matrixWorld).invert(),g.attention=O?I.copy(O).applyMatrix4(F):null,g.food.length=0;for(let q=0;q<(A.active||N.active?0:L.length);q++){const U=k[q]??={id:0,pos:new y,vel:new y};U.id=L[q].id,U.pos.copy(L[q].position).applyMatrix4(F),U.vel.copy(L[q].velocity).transformDirection(F).multiplyScalar(L[q].velocity.length()),g.food.push(U)}g.step(V,E),d.reset();for(const q of D)q.update(g,d);K.onPose?.(d,g),f(d);const Y=w&&T.singing?1:Qe.smoothstep(g.arousal,.55,.9),Q=u.eye.pupilRest+(u.eye.pupilPinned-u.eye.pupilRest)*Y;u.eye.uPupil.value+=(Q-u.eye.uPupil.value)*(1-Math.exp(-12*V))},setAttention(V){O=V},setFood(V){L=V},setPerch(V,Y){p.at=V,p.range=Y,m.reseat()},onPick:null,onSwallow:null,billTip(V){return V.copy(f.carry).applyMatrix4(e.matrixWorld)},startle(V=1){A.active||(v.fire(Math.min(Math.max(V,0),1)),!w&&V>=.9&&!g.quiet&&g.rng()<.22&&A.start())},dispose(){s.contour.dispose(),s.flight.dispose(),s.fuzz.dispose(),r.dispose(),h.dispose(),A.dispose(),u.dispose(),n.skeleton.dispose(),H?.()}},H=_S(K);return K.update(0),K}function _S(i){if(typeof window>"u")return null;const t=new URLSearchParams(window.location.search);window.__bird=i;const e=g=>t.has(g)?Number(t.get(g)):null,n={front:[0,22,0],profile:[88,16,0],up:[10,40,8],back:[-110,10,0],three:[38,20,-4]},s=t.get("pose");s&&n[s]&&(i.mind.pinGaze=n[s]);const r=t.get("gaze");if(r){const[g=0,v=0,p=0]=r.split(",").map(Number);i.mind.pinGaze=[g,v,p]}if(t.has("quiet")&&(i.mind.quiet=!0),t.has("sing")){const g=i.onPose;let v=1;i.onPose=(p,m)=>{g?.(p,m),m.t>v&&!i.singing&&i.sing(1.8)&&(v=m.t+4)}}const o=e("jaw"),a=e("tongue"),l=e("arousal"),c=e("fluff"),h=e("spread"),u=e("fan"),d=e("blink");if(l!==null||c!==null||h!==null||u!==null||d!==null||o!==null||a!==null){const g=i.onPose;i.onPose=(v,p)=>{g?.(v,p),o!==null&&(v.jaw=o),a!==null&&(v.tongueOut=a),l!==null&&(p.arousal=p.baseline=l),c!==null&&(v.fluff=c),h!==null&&(v.wing.L.spread=v.wing.R.spread=h),u!==null&&(v.tailFan=u),d!==null&&(v.nict=v.lidLower=v.lidUpper=d)}}t.has("nofuzz")&&i.root.traverse(g=>g.name==="bird.fuzz"&&(g.visible=!1)),t.has("noflash")&&(i.plumage.uFlash.value=i.plumage.uGlint.value=0),t.has("skin")&&i.root.traverse(g=>g.name.match(/contour|flight|fuzz/)&&(g.visible=!1)),t.has("wire")&&i.root.traverse(g=>{const v=g.material;g.name==="bird.skin"&&v&&(v.wireframe=!0,v.color.set(16777215),v.emissive.set(8947848))});let f=null;return t.has("bones")&&(f=new mg(i.rig.rootBone),f.material.depthTest=!1,f.renderOrder=10,i.root.add(f)),()=>{f?.dispose()}}const Lc=[{name:"Purple-throated mountain-gem",gorget:[0,1,1],crown:[0,1,1],body:[0,1,1],sheen:[0,1,1]},{name:"Ruby-throated",gorget:[102,1.3,.78],crown:[-45,.95,.9],body:[170,.55,1.05],sheen:[0,.08,1.9]},{name:"Anna's",gorget:[55,1.05,1.1],crown:[150,1.05,1.05],body:[175,.5,1.1],sheen:[150,.4,1]},{name:"Sapphire-throated",gorget:[-28,1.3,.6],crown:[105,1,1],body:[150,.75,1],sheen:[32,1.15,1]},{name:"Fiery-throated",gorget:[116,1.25,.82],crown:[55,1,.95],body:[185,.7,.95],sheen:[-92,1.2,1.15]}],yi=[.2126,.7152,.0722];function Uo([i,t,e],n=new Jt){const s=Qe.degToRad(i),r=Math.cos(s),o=Math.sin(s),a=1/3,l=Math.sqrt(a),c=new Jt().set(r+a*(1-r),a*(1-r)-l*o,a*(1-r)+l*o,a*(1-r)+l*o,r+a*(1-r),a*(1-r)-l*o,a*(1-r)-l*o,a*(1-r)+l*o,r+a*(1-r)),h=1-t,u=new Jt().set(yi[0]*h+t,yi[1]*h,yi[2]*h,yi[0]*h,yi[1]*h+t,yi[2]*h,yi[0]*h,yi[1]*h,yi[2]*h+t);return n.multiplyMatrices(u,c).multiplyScalar(e)}function yp(i){return[Uo(i.gorget),Uo(i.crown),Uo(i.body),Uo(i.sheen)]}const hr=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,yh=`
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
${yh}
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
${yh}
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
`,bS=8,bl=Yi?24:48;function wS(i,t){const e=new ls(1,1);e.type=qn;const n=new an(1,1,{type:yn,samples:t.samples,depthTexture:e,depthBuffer:!0});n.texture.colorSpace=Mn;const s=new an(1,1,{type:yn,depthBuffer:!1}),r={type:yn,depthBuffer:!1,minFilter:Fe,magFilter:Fe},o=new an(1,1,r),a=new an(1,1,r),l=new an(1,1,{type:yn,depthBuffer:!1,minFilter:Fe,magFilter:Fe}),c=new an(1,1,{samples:t.samples}),h=new Nt,u=new me(new hs(2,2));u.frustumCulled=!1;const d=new rh;d.add(u);const f=new Ma(-1,1,1,-1,0,1),g={uFocus:{value:3.3},uAperture:{value:85},uMaxCoc:{value:14}},v=new xn({vertexShader:hr,fragmentShader:vS,uniforms:{tColor:{value:n.texture},tDepth:{value:e},uNear:{value:.1},uFar:{value:100},uFarCoc:{value:6},uFocus:g.uFocus,uAperture:g.uAperture},depthTest:!1,depthWrite:!1,toneMapped:!1}),p={value:16},m=new xn({vertexShader:hr,fragmentShader:xS,uniforms:{tPack:{value:s.texture},uTile:p,...g},depthTest:!1,depthWrite:!1,toneMapped:!1}),M=new xn({vertexShader:hr,fragmentShader:yS,uniforms:{tTile:{value:o.texture}},depthTest:!1,depthWrite:!1,toneMapped:!1}),T={tPack:{value:s.texture},tTile:{value:a.texture},uTile:p,uTexel:{value:new Ot},uSpiral:{value:Array.from({length:bl},(D,L)=>new Ot(Math.cos(L*2.39996323),Math.sin(L*2.39996323)))},...g},b=new xn({vertexShader:hr,fragmentShader:MS,uniforms:T,defines:{TAPS:bl},depthTest:!1,depthWrite:!1,toneMapped:!1}),x=new xn({vertexShader:hr,fragmentShader:SS,uniforms:{tColor:{value:n.texture},tDof:{value:l.texture},uDof:{value:1},...T,uExposure:{value:1},uWhite:{value:new y(1,1,1)},uLift:{value:new y(0,0,0)},uGamma:{value:new y(1,1,1)},uGain:{value:new y(1,1,1)},uSat:{value:1},uContrast:{value:1},uVignette:{value:.2},uGrain:{value:.025},uTime:{value:0},uRes:{value:new Ot(1,1)},tWire:{value:c.texture},uReveal:{value:1},uDpr:{value:1}},depthTest:!1,depthWrite:!1,defines:{TAPS:bl},toneMapped:!0}),A=[[v,s],[m,o],[M,a],[b,l]];function _(D,L){if(i.setRenderTarget(n),i.render(D,L),x.uniforms.uDof.value=g.uAperture.value>0?1:0,!!x.uniforms.uDof.value)for(const[k,E]of A)u.material=k,i.setRenderTarget(E),i.render(d,f)}const w=new y(0,.9,0),N=new y;let P=3.3;return{dof:b.uniforms,grade:x.uniforms,endDrawing(){c.dispose(),x.uniforms.tWire.value=null},compile(D){const L=i.getRenderTarget();i.setRenderTarget(n);const k=D();for(const[E,I]of A)i.setRenderTarget(I),u.material=E,k.push(i.compileAsync(u,f,d));return u.material=x,i.setRenderTarget(L),Promise.all(k)},prerender(D,L){const k=i.getRenderTarget();_(D,L),u.material=x,i.setRenderTarget(k)},setToneMapping(D){i.toneMapping=D,x.needsUpdate=!0},focusOn(D){w.copy(D)},setSize(D,L,k){const E=Math.floor(D*k),I=Math.floor(L*k);n.setSize(E,I),s.setSize(E,I),p.value=Math.ceil(bS*k),o.setSize(Math.ceil(E/p.value),Math.ceil(I/p.value)),a.setSize(o.width,o.height),l.setSize(Math.ceil(E/2),Math.ceil(I/2)),c.setSize(E,I),x.uniforms.uDpr.value=k,T.uTexel.value.set(k/E,k/I),x.uniforms.uRes.value.set(E,I)},render(D,L,k,E){if(E){x.uniforms.tWire.value=c.texture,i.getClearColor(h);const I=i.getClearAlpha();i.setRenderTarget(c),i.setClearColor(0,0),i.clear(),E(),i.setClearColor(h,I)}N.copy(w).applyMatrix4(L.matrixWorldInverse),P+=(-N.z-P)*.15,g.uFocus.value=Math.max(P,.1),v.uniforms.uNear.value=L.near,v.uniforms.uFar.value=L.far,x.uniforms.uTime.value=k,x.uniforms.uDof.value=0,x.uniforms.uReveal.value>0&&_(D,L),u.material=x,i.setRenderTarget(null),i.render(d,f)}}}const TS=6,ES=.038,Ad=44;function AS(){const i=[];for(let s=0;s<6;s++){const r=s/6*Math.PI*2;i.push(0,.02,0,Math.cos(r)*.009,.017,Math.sin(r)*.009)}const t=new Me;t.setAttribute("position",new ne(i,3));const e=new Xr(.0022,.0028,.016,6);e.translate(0,.027,0);const n=new ci(1,16,12);return n.scale(.02,.021,.02),{fibres:t,beak:e,body:n}}function RS(){const i=[],t=new y(0,.03,0);for(let r=0;r<Ad;r++){const o=r/Ad*Math.PI*2+Math.sin(r*12.7)*.05,a=.35+.12*Math.sin(r*3.1),l=ES*(.9+.15*Math.sin(r*7.3)),c=new y(Math.cos(o)*l,t.y+l*a,Math.sin(o)*l);i.push(t.x,t.y,t.z,c.x,c.y,c.z);for(const h of[.6,.78,.92]){const u=t.clone().lerp(c,h),d=new y(-Math.sin(o),.3,Math.cos(o)).multiplyScalar(l*.07);i.push(u.x,u.y,u.z,u.x+d.x,u.y+d.y,u.z+d.z),i.push(u.x,u.y,u.z,u.x-d.x,u.y+d.y,u.z-d.z)}}const e=new Me;e.setAttribute("position",new ne(i,3));const n=new Xr(8e-4,.0011,.03,5);n.translate(0,.015,0);const s=new ci(1,10,8);return s.scale(.0035,.01,.0035),s.translate(0,-.007,0),{fibres:e,beak:n,body:s}}function CS(i,t="pappus"){const e=t==="fruit",n=e?AS():RS(),s=new xa({color:e?6969914:15921382,transparent:!0,opacity:e?.9:.75,depthWrite:!1}),r=new mn({color:e?5917226:13617332,roughness:.7}),o=new mn({color:e?1839906:3811868,roughness:e?.42:.8}),a=[],l=new y,c=[],h=new y,u=new y,d=new y(0,1,0),f=new ve;let g=1;function v(m,M=null){if(a.filter(x=>x.state==="drift").length>=TS){const x=a.find(A=>A.state==="drift");x&&p(x)}const T=new cn,b=new ha(n.fibres,s);T.add(b,new me(n.beak,r),new me(n.body,o)),T.position.copy(m),T.rotation.set((Math.random()-.5)*.4,Math.random()*6.28,(Math.random()-.5)*.4),T.scale.setScalar(.01),i.add(T),a.push({id:g++,obj:T,fibres:b,position:T.position,velocity:new y,age:0,spin:(Math.random()-.5)*.8,phase:Math.random()*100,state:"drift",carryT:0,swallowAt:-1,wind:M})}function p(m){m.state="gone",i.remove(m.obj)}return{spawn:v,warm:[new ha(n.fibres,s),new me(n.beak,r),new me(n.body,o)],pick(m){const M=a.find(T=>T.id===m&&T.state==="drift");M&&(M.state="carried",M.carryT=0,M.swallowAt=-1)},swallowed(m){const M=a.find(T=>T.id===m&&T.state==="carried");M&&M.swallowAt<0&&(M.swallowAt=M.carryT)},food(){c.length=0;for(const m of a)m.state==="drift"&&c.push(m);return c},update(m,M,T,b){for(const x of a)if(x.state!=="gone"){if(x.age+=m,x.state==="drift"){const A=M*.6+x.phase,_=l.set(Math.sin(A*.9)*.05+Math.sin(A*2.3)*.02,Math.sin(A*1.7)*.02-.035,Math.cos(A*.7)*.03);x.wind&&_.add(x.wind),x.velocity.lerp(_,1-Math.exp(-m*1.5)),x.obj.position.addScaledVector(x.velocity,m),x.obj.rotation.y+=x.spin*m,x.obj.rotation.x=Math.sin(A*1.3)*.12,x.obj.rotation.z=Math.cos(A*1.1)*.12,x.obj.scale.setScalar(Math.min(1,x.obj.scale.x+m*4)),(x.obj.position.y<-1.4||x.age>(x.wind?90:45)||Math.abs(x.obj.position.x)>3.2)&&p(x)}else if(x.state==="carried"){x.carryT+=m,T&&x.obj.position.copy(T(h)),b&&(u.copy(b).sub(x.obj.position).normalize(),x.obj.quaternion.slerp(f.setFromUnitVectors(d,u),1-Math.exp(-m*30)));const A=Math.min(1,x.carryT/.07),_=Math.max(.2,1-x.carryT*1.6);x.fibres.scale.set(1-.85*A,1+.6*A,1-.85*A),x.obj.scale.setScalar(_),x.swallowAt>=0&&(x.obj.scale.setScalar(Math.max(0,.2*(1-(x.carryT-x.swallowAt)*10))),x.carryT-x.swallowAt>.1&&p(x)),(x.carryT>3||!T)&&p(x)}}for(let x=a.length-1;x>=0;x--)a[x].state==="gone"&&a.splice(x,1)}}}const Rd=1e6;function PS(i,t,e=!0){const n=new ci(1,8,6);n.scale(.004,.004,.011);const s=new hs(.016,.007);s.translate(.008,0,0);const r=new mn({color:1709586,roughness:.6}),o=new Xn({color:14542044,transparent:!0,opacity:.2,side:Be,depthWrite:!1}),a=[],l=[],c=new y,h=new y,u=new y;let d=Rd,f=10+Math.random()*3,g=!1;function v(m,M=!1){const T=t(),b=m?m.clone():T.clone().add(new y((Math.random()-.5)*.9,.05+Math.random()*.3,.45+Math.random()*.35)),x=b.clone().add(new y(Math.sign(Math.random()-.5)*2.2,.6,-.4)),A=new cn,_=new me(n,r),w=[new me(s,o),new me(s,o)];w[1].rotation.y=Math.PI,A.add(_,...w),A.position.copy(x),i.add(A),a.push({id:d++,obj:A,wings:w,position:A.position,velocity:new y,home:b,goal:b.clone(),age:0,life:M?16:6+Math.random()*8,dartAt:.8,phase:Math.random()*100,state:"fly",carryT:0,swallowAt:-1,dodgedUntil:0,tame:M,yaw:0})}function p(m){m.state="gone",i.remove(m.obj)}return{spawn:v,warm:[new me(n,r),new me(s,o)],owns:m=>m>=Rd,strike(){g=!0},pick(m){const M=a.find(T=>T.id===m&&(T.state==="fly"||T.state==="leave"));M&&(M.state="carried",M.carryT=0)},swallowed(m){const M=a.find(T=>T.id===m&&T.state==="carried");M&&M.swallowAt<0&&(M.swallowAt=M.carryT)},food(){l.length=0;for(const m of a)m.state==="fly"&&m.age>m.dodgedUntil&&l.push(m);return l},update(m,M,T){const b=g;g=!1,e&&M>f&&a.length===0&&(v(),f=M+20+Math.random()*20);for(const x of a){if(x.state==="gone")continue;if(x.age+=m,x.state==="carried"){x.carryT+=m,T&&x.obj.position.copy(T(c));for(const N of x.wings)N.visible=!1;const w=x.swallowAt>=0?Math.max(0,1-(x.carryT-x.swallowAt)*10):1;x.obj.scale.setScalar(w),(x.swallowAt>=0&&w<=0||x.carryT>3||!T)&&p(x);continue}if(x.state==="fly"){if(x.age>x.life)x.state="leave",x.goal.copy(x.position).add(new y(Math.sign(x.position.x-x.home.x||1)*3,1.2,-.5));else if(x.age>x.dartAt){const w=x.tame?.15:1;x.goal.copy(x.home).add(new y((Math.random()-.5)*.4*w,(Math.random()-.5)*.25*w,(Math.random()-.5)*.3*w)),x.dartAt=x.age+.6+Math.random()*1.8}}x.state==="fly"&&!x.tame&&x.age>x.dodgedUntil&&b&&T&&T(c).distanceTo(x.position)<.7&&Math.random()<.75&&(x.dodgedUntil=x.age+1.5,h.copy(x.position).sub(c).normalize(),x.velocity.addScaledVector(h,2.2),x.goal.copy(x.position).addScaledVector(h,.45),x.dartAt=x.age+.8);const A=M*3+x.phase;if(h.set(Math.sin(A*5.1)+Math.sin(A*11.7)*.5,Math.sin(A*6.3+1)+Math.sin(A*13.1)*.4,Math.sin(A*4.7+2)).multiplyScalar(.08),h.addScaledVector(u.copy(x.goal).sub(x.position),x.state==="leave"?2.5:6),x.velocity.lerp(h,1-Math.exp(-m*8)),x.obj.position.addScaledVector(x.velocity,m),x.velocity.x*x.velocity.x+x.velocity.z*x.velocity.z>.01){const w=Math.atan2(x.velocity.x,x.velocity.z);x.yaw=rp(x.yaw,w,4,m)}x.obj.rotation.set(Qe.clamp(-x.velocity.y*.6,-.35,.35),x.yaw,0,"YXZ");const _=Math.sin(M*190+x.phase)*.9;x.wings[0].rotation.z=_,x.wings[1].rotation.z=-_,x.state==="leave"&&x.position.distanceTo(x.home)>2.5&&p(x)}for(let x=a.length-1;x>=0;x--)a[x].state==="gone"&&a.splice(x,1)}}}const ti=40,Cd=17;function LS(){const i=document.createElement("canvas");i.width=64,i.height=96;const t=i.getContext("2d");t.strokeStyle="#fff",t.lineCap="round";let e=7;const n=()=>(e=e*16807%2147483647)/2147483647,s=32;t.globalAlpha=.9,t.lineWidth=1.6,t.beginPath(),t.moveTo(s,92),t.quadraticCurveTo(s+2,50,s-1,14),t.stroke();for(let o=0;o<70;o++){const a=n(),l=90-a*76,c=s+(1-a)*1.5,h=n()<.5?-1:1,u=(10+n()*16)*(.55+.8*Math.sin(Math.PI*(.15+a*.8))),d=h*(.5+n()*.7);t.globalAlpha=.25+n()*.45,t.lineWidth=.7+n()*.7,t.beginPath(),t.moveTo(c,l),t.quadraticCurveTo(c+Math.sin(d)*u*.5,l-Math.cos(d)*u*.3,c+Math.sin(d)*u,l-Math.cos(d)*u*(.4+n()*.5)+(n()-.5)*6),t.stroke()}const r=new Tm(i);return r.colorSpace=We,r}function IS(i){const{scene:t,camera:e,renderer:n,center:s}=i,r=new cn;r.name="ambient",t.add(r);const o=new Float32Array(ti*3),a=new Float32Array(ti),l=new Float32Array(ti),c=[],h=new Float32Array(ti),u=new Float32Array(ti).fill(-1),d=new Float32Array(ti);for(let q=0;q<ti;q++)l[q]=Math.random(),c.push(new y);const f=new Me;f.setAttribute("position",new Pe(o,3).setUsage(Zh)),f.setAttribute("aSize",new Pe(a,1).setUsage(Zh)),f.setAttribute("aSeed",new Pe(l,1));const g=new xn({uniforms:{uScale:{value:500},uMinPx:{value:1.2},uTime:{value:0},uFocus:{value:3.3},uAperture:{value:0},uMaxCoc:{value:14},uDpr:{value:1}},vertexShader:`
      attribute float aSize;
      attribute float aSeed;
      uniform float uScale, uMinPx, uTime, uFocus, uAperture, uMaxCoc, uDpr;
      varying float vGlint, vCov;
      ${yh}
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
      }`,blending:Fl,transparent:!0}),v=new Uf(f,g);v.frustumCulled=!1,r.add(v);function p(q,U,Z,W){U?o.set([U.x,U.y,U.z],q*3):(o[q*3]=s.x+(Math.random()-.5)*3.6,o[q*3+1]=s.y+(Math.random()-.45)*2,o[q*3+2]=s.z-1.7+Math.random()*3.1),c[q].copy(Z??new y),h[q]=0,u[q]=W,d[q]=Math.random()<.85?.0025+Math.random()*.003:.006+Math.random()*.005}const m=()=>{for(let q=0;q<ti;q++)if(u[q]<0)return q;return-1},M=new hs(.04,.06);M.translate(0,.012,0);const T=new mn({color:12893896,map:LS(),roughness:1,side:Be,alphaToCoverage:!0,alphaTest:.04}),b=[],x=new cn,A=new me(new ci(1,8,6).scale(.008,.0075,.02),new mn({color:1380879,roughness:.45})),_=new hh(.014,10).scale(1,.55,1).translate(.014,0,0),w=new Xn({color:14673632,transparent:!0,opacity:.22,side:Be,depthWrite:!1}),N=[new me(_,w),new me(_,w)];for(const q of N)q.rotation.order="ZXY",q.rotation.x=-Math.PI/2,q.position.y=.004;N[1].scale.x=-1,x.add(A,...N),x.visible=!1,r.add(x);let P=null,D=0,L=2,k=25+Math.random()*40;const E=new y;let I=0;function F(q=!1){const U=Math.random()<.5?-1:1,Z=Math.random(),W=q?.25+Math.random()*.2:Z<.4?-.7+Math.random()*.5:Z<.8?-.15+Math.random()*.55:.8+Math.random()*.6,st=q?s.y+.45:s.y+(Math.random()-.4)*1,J=[],ut=6;for(let pt=0;pt<ut;pt++){const lt=pt/(ut-1);J.push(new y(s.x+U*(-2.6+5.2*lt),st+(Math.random()-.5)*.35+Math.sin(lt*5)*.08,W+(Math.random()-.5)*.4))}P=new bc(J),I=Math.atan2(J[1].x-J[0].x,J[1].z-J[0].z),D=0,L=2.2+Math.random()*1.4,x.visible=!0,x.position.copy(J[0]),E.copy(J[0])}let O=15+Math.random()*25;function K(){if(!i.passSeed)return;const q=Math.random()<.5?-1:1,U=new y(s.x-q*2.3,s.y+.5+Math.random()*.7,s.z-1.3+Math.random()*2.4);i.passSeed(U,new y(q*(.07+Math.random()*.05),.012,(Math.random()-.5)*.02))}const H=new y,V=new Ot,Y=new y;let Q=0;for(let q=0;q<Cd;q++)p(q,null,null,8+Math.random()*18),h[q]=Math.random()*u[q];return{group:r,warm:[new me(M,T)],shed(q,U,Z){const W=2+Math.floor(Math.random()*2);for(let J=0;J<W;J++){const ut=m();if(ut<0)break;Y.copy(U).multiplyScalar(.06+Math.random()*.08),Y.x+=(Math.random()-.5)*.08,Y.y+=.02+Math.random()*.06,Y.z+=(Math.random()-.5)*.08,p(ut,new y(q.x+(Math.random()-.5)*.08,q.y+(Math.random()-.5)*.12,q.z+(Math.random()-.5)*.08),Y,4+Math.random()*5),d[ut]*=.8}if(!Z)return;const st=new me(M,T);st.position.copy(q),st.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),st.scale.setScalar(.01),r.add(st),b.push({obj:st,vel:U.clone().multiplyScalar(.3).add(new y(0,.1,0)),away:U.clone().multiplyScalar(.06),age:0,life:16+Math.random()*10,fall:.045+Math.random()*.03,phase:Math.random()*100,spin:(Math.random()-.5)*1.5})},flyBy:F,flyNear(q,U){return x.visible&&x.position.distanceTo(q)<U?x.position:null},update(q){Q+=q,g.uniforms.uTime.value=Q,n.getDrawingBufferSize(V),g.uniforms.uScale.value=V.y/(2*Math.tan(Qe.degToRad(e.fov)/2)),g.uniforms.uMinPx.value=1.3*n.getPixelRatio(),g.uniforms.uDpr.value=n.getPixelRatio();const U=i.dof?.();U&&(g.uniforms.uFocus.value=U.uFocus.value,g.uniforms.uAperture.value=U.uAperture.value,g.uniforms.uMaxCoc.value=U.uMaxCoc.value),H.set(Math.sin(Q*.07)*.025+Math.sin(Q*.19+1)*.01,Math.sin(Q*.11)*.006,Math.cos(Q*.05)*.015);let Z=0;for(let W=0;W<ti;W++)u[W]>=0&&Z++;for(let W=0;W<ti;W++){if(u[W]<0){a[W]=0,Z<Cd&&Math.random()<q*2&&(p(W,null,null,10+Math.random()*18),Z++);continue}if(h[W]+=q,h[W]>u[W]){u[W]=-1,a[W]=0;continue}const st=l[W]*50,J=Q*.4+st;Y.set(Math.sin(J*1.3)*.012,Math.sin(J*.9+2)*.008-.004,Math.cos(J*1.1)*.01).add(H),c[W].lerp(Y,1-Math.exp(-q*.8)),o[W*3]+=c[W].x*q,o[W*3+1]+=c[W].y*q,o[W*3+2]+=c[W].z*q;const ut=h[W]/u[W];a[W]=d[W]*Math.min(1,ut*6,(1-ut)*6)}f.attributes.position.needsUpdate=!0,f.attributes.aSize.needsUpdate=!0;for(const W of b){W.age+=q;const st=Q+W.phase;Y.set(Math.sin(st*1.4)*.05,-W.fall+Math.sin(st*2.8)*.012,Math.cos(st*1.1)*.03).add(H).addScaledVector(W.away,Math.exp(-W.age*.25)),W.vel.lerp(Y,1-Math.exp(-q*1.2)),W.obj.position.addScaledVector(W.vel,q),W.obj.rotation.y+=W.spin*q,W.obj.rotation.z=Math.sin(st*1.4)*.6,W.obj.rotation.x=.3+Math.cos(st*1.1)*.35,W.obj.scale.setScalar(Math.max(0,Math.min(1,W.age*3,(W.life-W.age)*.5)))}for(let W=b.length-1;W>=0;W--)b[W].age>b[W].life&&(r.remove(b[W].obj),b.splice(W,1));if(i.flies!==!1&&q>0&&Q>k&&!x.visible&&(F(),k=Q+50+Math.random()*70),x.visible&&P)if(D+=q/L,D>=1)x.visible=!1,P=null;else{E.copy(x.position),P.getPointAt(Qe.clamp(D+.8*Math.sin(Math.PI*2*D)/(Math.PI*2),0,1),x.position),x.position.x+=Math.sin(Q*37)*.006,x.position.y+=Math.sin(Q*29+1)*.008;const W=x.position.x-E.x,st=x.position.z-E.z;if(W*W+st*st>1e-8){const ut=Math.atan2(W,st);I=rp(I,ut,6,q)}x.rotation.set(Qe.clamp(-(x.position.y-E.y)/Math.max(q,.001)*.4,-.3,.3),I,0,"YXZ");const J=Math.sin(Q*210)*.7;N[0].rotation.z=J,N[1].rotation.z=-J}q>0&&Q>O&&(K(),O=Q+35+Math.random()*45)}}}const Gn=i=>`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i}</svg>`,Tn={bird:Gn('<path d="M18.1 17.1A6.2 6.2 0 1 0 8.9 9.4C8.5 10.5 7.2 11.4 3.3 12.4l5.1-.3"/><circle cx="14" cy="11" r="1.9" fill="currentColor" stroke="none"/><circle cx="13.4" cy="10.4" r=".55" fill="#1f3a1c" stroke="none"/>'),parrot:Gn('<path d="M6.5 20.5V11.4a6.6 6.6 0 0 1 12.7-2.5"/><path d="M19.2 8.9c2 .5 3 2.2 2.6 4.6-1.3-.8-2.6-1-4-.6"/><path d="M17.9 12.9c-.5 3.2-2.4 5.7-5.4 7.6"/><circle cx="14.3" cy="9.7" r="1.7"/><circle cx="14.3" cy="9.7" r=".6" fill="currentColor" stroke="none"/>'),fruit:Gn('<circle cx="12" cy="14.5" r="5.6"/><path d="M12 8.9V5.6"/><path d="M12 5.8c1.6-1.6 3.4-1.9 5.2-1"/><path d="M9.6 12.4c.5-.9 1.2-1.4 2.1-1.6" stroke-width="1.2"/>'),food:Gn('<path d="M12 10.5L3.8 8.3M12 10.5L5.5 5.0M12 10.5L8.4 2.8M12 10.5L12.0 2.0M12 10.5L15.6 2.8M12 10.5L18.5 5.0M12 10.5L20.2 8.3" stroke-width="1.1"/><path d="M12 10.5v7"/><path d="M12 17.3c-.9 0-1.3 1-1.1 2.1L12 22l1.1-2.6c.2-1.1-.2-2.1-1.1-2.1z" fill="currentColor"/>'),gnat:Gn('<ellipse cx="12" cy="14.5" rx="3" ry="5"/><circle cx="12" cy="7.6" r="1.9"/><path d="M9.2 11.5C6 8.5 3.5 9.5 3.6 11.8c.1 1.6 2.7 1.8 5.6.9M14.8 11.5c3.2-3 5.7-2 5.6.3-.1 1.6-2.7 1.8-5.6.9M10.6 6 9 3.8M13.4 6 15 3.8"/>'),sound:Gn('<path d="M4 9.5v5h3.5L12 18V6L7.5 9.5H4z"/><path d="M15.5 9a4.5 4.5 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11"/>'),sing:Gn('<path d="M9 18V5.5l10-2V16"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/><path d="M9 9.5l10-2"/>'),ruffle:Gn('<path d="M19.5 4.5C13 5 7.5 9.5 6 17l-1.5 2.5"/><path d="M19.5 4.5c-.5 6-4.5 11-12.5 12.5"/><path d="M9.5 13.5l3.5-3.5M8.5 11h3.5M11.5 8.5h3"/>'),fly:Gn('<path d="M11 16C9.5 10.5 6.5 6.5 2 5c.3 2.6 1.1 4.4 2.4 5.6-.9.2-1.4.2-2 .1 1.2 2.6 2.9 4 5.3 4.4-.6.4-1.2.6-1.9.7C7.6 16.6 9.1 16.9 11 16z"/><path d="M13 16c1.5-5.5 4.5-9.5 9-11-.3 2.6-1.1 4.4-2.4 5.6.9.2 1.4.2 2 .1-1.2 2.6-2.9 4-5.3 4.4.6.4 1.2.6 1.9.7-1.8.8-3.3 1.1-5.2.2z"/>'),palette:Gn('<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.6-1.6 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.7-1.6 1.6-1.6H16a5 5 0 0 0 5-5C21 6.4 17 3 12 3z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10" cy="7" r="1.2"/><circle cx="15" cy="7.2" r="1.2"/>'),settings:Gn('<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>')},DS=220;function NS(i,t=Tn.bird){const e=document.createElement("div");e.className="actions";const n=document.createElement("button");n.type="button",n.className="act-main",n.setAttribute("aria-label","Things to do"),n.setAttribute("aria-expanded","false"),n.innerHTML=`${t}<span class="x" aria-hidden="true"></span>`;const s=document.createElement("div");s.className="act-menu",s.setAttribute("role","menu");const r=i.map((m,M)=>{const T=document.createElement("button");return T.type="button",T.className="act-item",T.dataset.id=m.id,T.setAttribute("role","menuitem"),T.setAttribute("aria-label",m.label),T.style.setProperty("--i",String(i.length-1-M)),T.innerHTML=`${m.icon}<span class="act-label">${m.label}${m.key?`<kbd>${m.key}</kbd>`:""}</span>`,s.append(T),T});e.append(s,n),document.body.append(e);let o=!1;function a(m){o=m,e.classList.toggle("open",m),n.setAttribute("aria-expanded",String(m)),m||c(null)}let l=null;function c(m){l?.classList.remove("lit"),l=m,l?.classList.add("lit")}function h(m){const M=i[r.indexOf(m)];m.classList.remove("fired"),m.offsetWidth,m.classList.add("fired"),M.run()}let u=0,d=!1,f=!1;const g=(m,M)=>{const T=document.elementFromPoint(m,M)?.closest(".act-item");return T&&r.includes(T)?T:null};n.addEventListener("pointerdown",m=>{m.button===0&&(m.stopPropagation(),f=!0,d=!1,n.setPointerCapture(m.pointerId),clearTimeout(u),o||(u=window.setTimeout(()=>{d=!0,a(!0),navigator.vibrate?.(8)},DS)))}),n.addEventListener("pointermove",m=>{d&&c(g(m.clientX,m.clientY))});const v=m=>{if(f){if(f=!1,clearTimeout(u),m.stopPropagation(),d){d=!1;const M=g(m.clientX,m.clientY);M&&h(M),a(!1);return}a(!o)}};n.addEventListener("pointerup",v),n.addEventListener("pointercancel",()=>{f=d=!1,clearTimeout(u)}),n.addEventListener("click",m=>{m.detail===0&&a(!o)});for(const m of r)m.addEventListener("pointerdown",M=>M.stopPropagation()),m.addEventListener("pointerup",M=>M.stopPropagation()),m.addEventListener("click",()=>h(m)),m.addEventListener("pointerenter",()=>c(m)),m.addEventListener("pointerleave",()=>l===m&&c(null));let p=-1;return window.addEventListener("pointerdown",m=>{o&&!d&&!e.contains(m.target)?(a(!1),p=m.pointerId):p=-1}),window.addEventListener("keydown",m=>{m.key==="Escape"&&a(!1)}),{root:e,setOpen:a,isOpen:()=>o,swallows:m=>m.pointerId===p}}const Sp="iguaca-settings";function US(){try{return JSON.parse(localStorage.getItem(Sp)??"{}")}catch{return{}}}function Pd(i){try{localStorage.setItem(Sp,JSON.stringify(i))}catch{}}function FS(i,t={},e=!0){const n=US(),s={},r=document.createElement("button");r.type="button",r.className="set-btn",r.setAttribute("aria-label","Settings"),r.setAttribute("aria-expanded","false"),r.innerHTML=Tn.settings;const o=document.createElement("div");o.className="settings",o.hidden=!0,o.setAttribute("role","dialog"),o.setAttribute("aria-label","Settings");const a=document.createElement("div");a.className="set-head",a.innerHTML="<b>Settings</b>";const l=document.createElement("button");l.type="button",l.className="set-close",l.setAttribute("aria-label","Close settings"),l.innerHTML='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M3 3l8 8M11 3l-8 8"/></svg>',l.addEventListener("click",()=>v(!1)),a.append(l);const c=document.createElement("div");c.className="set-body",o.append(a,c);let h=null;function u(p,m,M,T,b,x,A,_){const w=p in n&&M(n[p])?n[p]:m,N=p in t?t[p]:w;s[p]=w,A(N),_(N),T.addEventListener(b,()=>{const P=x();s[p]=P,_(P),Pd(s)})}for(const p of i){if(p.kind!=="action"&&(h=null),p.kind==="heading"){const T=document.createElement("h5");T.textContent=p.label,c.append(T);continue}if(p.kind==="action"){const T=document.createElement("button");if(T.type="button",T.className="act",T.textContent=p.label,p.key){const b=document.createElement("kbd");b.textContent=p.key,T.append(b)}T.addEventListener("click",()=>p.run()),h||(h=document.createElement("div"),h.className="acts",c.append(h)),h.append(T);continue}const m=document.createElement("label");m.className=`row ${p.kind}`;const M=document.createElement("span");if(M.textContent=p.label,p.kind==="select"){const T=document.createElement("select");for(const b of p.options)T.append(new Option(b,b));u(p.key,p.value,b=>typeof b=="string"&&p.options.includes(b),T,"change",()=>T.value,b=>T.value=b,p.set),m.append(M,T)}else{const T=document.createElement("input");if(p.kind==="toggle")T.type="checkbox",u(p.key,p.value,b=>typeof b=="boolean",T,"change",()=>T.checked,b=>T.checked=b,p.set);else{T.type="range",T.min=String(p.min),T.max=String(p.max),T.step=String(p.step);const b=document.createElement("output"),x=Math.max(0,-Math.floor(Math.log10(p.step)+1e-9)),A=_=>{b.textContent=_.toFixed(x),T.style.setProperty("--p",`${(_-p.min)/(p.max-p.min)*100}%`)};u(p.key,p.value,_=>typeof _=="number",T,"input",()=>Number(T.value),_=>T.value=String(_),_=>(A(_),p.set(_))),M.append(b)}m.append(M,T)}c.append(m)}const d=document.createElement("button");d.type="button",d.className="reset",d.textContent="Reset to defaults",d.addEventListener("click",()=>{Pd({}),location.reload()});const f=c.querySelectorAll(".row"),g=f[f.length-1];g?g.after(d):c.prepend(d);function v(p){o.hidden=!p,r.classList.toggle("on",p),r.setAttribute("aria-expanded",String(p))}return r.addEventListener("pointerdown",p=>p.stopPropagation()),r.addEventListener("click",()=>v(o.hidden)),o.addEventListener("pointerdown",p=>p.stopPropagation()),o.addEventListener("pointerup",p=>p.stopPropagation()),window.addEventListener("keydown",p=>{p.key==="Escape"&&v(!1)}),e&&document.body.append(r,o),{button:r,panel:o,open:v,isOpen:()=>!o.hidden}}const OS=2.5;function kS(i){let t=null,e=null,n=null,s=null,r=0,o=0,a=!1,l=null,c=null,h=null,u=null,d=null;const f=new Set,g=[];let v=-1,p=null;const m=[];function M(){return l??=fetch(`${i}audio.json`).then(E=>E.ok?E.json():{}).catch(()=>({}))}async function T(E){try{const I=await fetch(i+E);return I.ok?await I.arrayBuffer():null}catch{return null}}async function b(E){if(!t||!E)return null;try{return await t.decodeAudioData(E)}catch{return null}}function x(){return c??=M().then(E=>Promise.all((E.calls??[]).map(T)))}function A(){return h??=x().then(async E=>{for(const I of await Promise.all(E.map(b)))I&&g.push(I)})}function _(){return u??=M().then(async E=>{d=E.forest?.length?await b(await T(E.forest[0])):null,a&&L()})}function w(){t=new AudioContext,e=t.createGain(),e.gain.value=0,e.connect(t.destination),s=t.createGain(),s.connect(e),n=t.createGain(),n.gain.value=.72,n.connect(t.destination);const E=t.sampleRate*3,I=t.createBuffer(1,E,t.sampleRate),F=I.getChannelData(0);let O=0;for(let Y=0;Y<E;Y++)O=O*.97+(Math.random()*2-1)*.03,F[Y]=O*3+(Math.random()*2-1)*.25;const K=t.createBufferSource();K.buffer=I,K.loop=!0;const H=t.createBiquadFilter();H.type="bandpass",H.frequency.value=2600,H.Q.value=.4;const V=t.createGain();V.gain.value=.035,K.connect(H).connect(V).connect(s),K.start();for(let Y=0;Y<7;Y++){const Q=Y/6;m.push({pitch:.9+Math.random()*.22,pace:.95+Math.random()*.5,pan:(Math.random()*2-1)*.9,gain:.22*(1-.75*Q)*(.7+Math.random()*.5),next:t.currentTime+.3+Math.random()*1.5})}}function N(E,I,F,O,K,H){if(!t)return;const V=t.createOscillator();V.type="sine",V.frequency.setValueAtTime(F,E),V.frequency.exponentialRampToValueAtTime(O,E+I);const Y=t.createGain();Y.gain.setValueAtTime(0,E),Y.gain.linearRampToValueAtTime(K,E+.012),Y.gain.setValueAtTime(K,E+I*.6),Y.gain.exponentialRampToValueAtTime(1e-4,E+I),V.connect(Y).connect(H),V.start(E),V.stop(E+I+.02)}function P(){if(!t||!s||d)return;const E=t.currentTime+.5;for(const I of m)for(;I.next<E;){const F=t.createStereoPanner();F.pan.value=I.pan,F.connect(s);const O=Math.max(I.next,t.currentTime+.01);N(O,.09,1180*I.pitch,1220*I.pitch,I.gain*.7,F),N(O+.21,.16,1900*I.pitch,2300*I.pitch,I.gain,F),I.next+=I.pace*(.92+Math.random()*.16)*(Math.random()<.12?2:1)}}function D(){if(!t||!e||!d||!a)return;const E=Math.min(OS,d.duration/4),I=t.currentTime+.05,F=t.createBufferSource();F.buffer=d;const O=t.createGain();O.gain.setValueAtTime(0,I),O.gain.linearRampToValueAtTime(.8,I+E),O.gain.setValueAtTime(.8,I+d.duration-E),O.gain.linearRampToValueAtTime(0,I+d.duration),F.connect(O).connect(e),F.start(I),F.stop(I+d.duration+.05),f.add(F),F.onended=()=>f.delete(F),o=window.setTimeout(D,(d.duration-E)*1e3)}function L(){if(!(!t||!s))if(window.clearInterval(r),window.clearTimeout(o),d)s.gain.setTargetAtTime(0,t.currentTime,.4),D();else{for(const E of m)E.next=Math.max(E.next,t.currentTime+.2+Math.random()*1.2);P(),r=window.setInterval(P,200)}}function k(){if(!t||!n||g.length===0)return!1;let E=Math.floor(Math.random()*g.length);g.length>1&&E===v&&(E=(E+1)%g.length),v=E;const I=t.currentTime;p&&(p.gain.gain.setTargetAtTime(0,I,.015),p.src.stop(I+.1));const F=t.createBufferSource();F.buffer=g[E],F.playbackRate.value=.96+Math.random()*.08;const O=t.createGain();F.connect(O).connect(n),F.start();const K=p={src:F,gain:O};return F.onended=()=>{p===K&&(p=null)},!0}return{get on(){return a},get loaded(){return{forest:d!==null,calls:g.length}},toggle(){if(t||w(),!t||!e)return!1;a=!a;const E=t.currentTime;if(e.gain.cancelScheduledValues(E),e.gain.setValueAtTime(e.gain.value,E),e.gain.linearRampToValueAtTime(a?.6:0,E+(a?1.2:.4)),window.clearInterval(r),window.clearTimeout(o),!a){for(const I of f)I.stop(E+.45);return f.clear(),a}return t.resume(),L(),A(),_(),a},warm(){x()},call(E=!1){if(!E&&!a||(t||w(),!t))return!1;if(t.resume(),g.length>0)return k();const I=performance.now();return A().then(()=>{performance.now()-I<700&&k()}),!1}}}const Un=document.querySelector("#c"),Ei=new URLSearchParams(location.search),Hr=!Ei.has("nopost"),Ce=Ei.has("gem"),ke=new hM({canvas:Un,antialias:!Hr,powerPreference:"high-performance"}),bp=()=>Math.min(window.devicePixelRatio,Yi?1.5:2);ke.setPixelRatio(bp());ke.outputColorSpace=We;ke.toneMappingExposure=1;ke.shadowMap.enabled=!0;ke.shadowMap.type=Sr;const Le=new rh,te=new vn(30,1,.02,120);te.position.set(1.55,.85,3);const Ie=new dM(te,Un);Ie.target.set(Kn-.04,.5,0);Ie.enableDamping=!0;Ie.dampingFactor=.06;Ie.minDistance=1.4;Ie.maxDistance=4.4;Ie.minPolarAngle=1.2;Ie.maxPolarAngle=1.78;Ie.minAzimuthAngle=-.45;Ie.maxAzimuthAngle=.85;Ie.enablePan=!1;Ie.rotateSpeed=.6;Ie.touches.ONE=null;const fa=op(Ce?0:1);{const i=new rh,t=op(Ce?0:1);t.material.uniforms.uEnv.value=1,i.add(t.mesh);const e=new zr(ke);Le.environment=e.fromScene(i,.02).texture,Le.environmentIntensity=1.6,e.dispose()}Le.add(fa.mesh);const Gr=_1();Le.add(Gr.group);const Fn=R1();Fn.use(Gr.group);const Ld=document.querySelector(".loading-label span");let bi=0,Ta=!1,Ic=!0,Ks=Ei.has("drawing");function Mh(i){Ks=i,document.body.classList.add("snap"),document.body.classList.toggle("drawing",i),requestAnimationFrame(()=>document.body.classList.remove("snap")),Ta&&!Ic&&(bi=i?0:1)}Mh(Ks);function wp(i=!1){i&&(bi=1),Ta=!0,document.body.classList.remove("loading"),Ce||Yr.warm()}const Fo=()=>new Promise(i=>requestAnimationFrame(i));async function BS(){const i=Hr?fn.compile:t=>Promise.all(t());try{await i(()=>[ke.compileAsync(Le,te)]),await Fo(),await i(()=>[ke.compileAsync(Jo,te,Le)]),await Fo();for(const t of Tp([Le,Jo]))ke.properties.get(t).programs?.forEach(n=>n.getUniforms());for(const t of zS([Le,Jo]))await Fo(),ke.initTexture(t);await Fo(),Hr&&fn.prerender(Le,te)}catch{}wp()}function Tp(i){const t=new Set;for(const e of i)e.traverse(n=>{const s=n.material;if(s)for(const r of Array.isArray(s)?s:[s])t.add(r)});return t}function zS(i){const t=new Set;for(const e of Tp(i))for(const n of Object.values(e))n?.isTexture&&!n.isRenderTargetTexture&&t.add(n);return t}const HS=Ei.has("procbranch")?Promise.resolve():v1("./branch.glb",i=>{Ld&&i.lengthComputable&&(Ld.textContent=`${Math.min(100,Math.round(i.loaded/i.total*100))}%`)}).then(i=>{Le.remove(Gr.group),tb(Gr.group),Le.add(i.group),Fn.use(i.group),Dp(i.group),zc=i.fuzz,zp()}).catch(()=>{}),$o=new $m(15659750,3815462,.6);Le.add($o);const Ke=new fh(16774374,2.2);Ke.position.set(-1.3,3.6,1.5);Ke.castShadow=!0;Ke.shadow.mapSize.set(2048,2048);Ke.shadow.camera.left=Ke.shadow.camera.bottom=-1.2;Ke.shadow.camera.right=Ke.shadow.camera.top=1.2;Ke.shadow.camera.near=.5;Ke.shadow.camera.far=8;Ke.shadow.bias=-.0015;Ke.shadow.normalBias=.025;Ke.shadow.radius=4;Ke.target.position.set(0,.5,0);Yi&&(Ke.shadow.mapSize.set(1024,1024),Object.assign(Ke.shadow.camera,{left:-.85,right:1.42,bottom:-1,top:1.15}));Le.add(Ke,Ke.target);const Hs=new fh(15923944,1.4);Hs.position.set(1.5,1.8,-2.5);Hs.target.position.set(0,.5,0);Le.add(Hs,Hs.target);const At=gS(Ce?{species:d1}:{});Ce||($o.color.set(15003370),$o.groundColor.set(2898474),$o.intensity=.95,Ke.color.set(15988462),Ke.intensity=1.55,Hs.color.set(14873070),Hs.intensity=1);const Yr=kS("./audio/");let Dc=!1;function GS(){!At.sing(2.2)||Ce||(Yr.call(!0),Dc=!0)}window.__sound=Yr;At.root.position.x=Kn;At.layer("hop").home=Kn;const Sh=new cn;Sh.add(At.root);Le.add(Sh);let wl=1;const Id=new y;At.mind.on("perch",i=>{Fn.push(i.x,i.push,i.side),Fn.load(i.on?i.x:null)});Fn.load(Kn);Fn.settle();const Nc=new y,Tl=new y;let El=!1;function VS(i){(At.perched||!El)&&Tl.copy(jo),El||Nc.copy(Tl),El=!0,Nc.lerp(Tl,1-Math.exp(-i*8))}function WS(i){Fn.update(i),wl=Cn(wl,At.perched?1:0,25,i),Fn.at(At.root.position.x,Id),Sh.position.copy(Id).multiplyScalar(wl)}const ur=At.layer("gaze"),Dd=At.billTip.bind(At);Yi&&(At.feathers.contour.castShadow=!1);const Uc=new Xf,XS=new Ot,Ep=new y;let Ap=-1e9;const Nd=new En,li=new y,qS=new y;function YS(i,t){const e=Un.getBoundingClientRect();return XS.set((i-e.left)/e.width*2-1,-((t-e.top)/e.height)*2+1)}const Ud=new y,Fd=new ve;function bh(i,t){Ud.copy(te.position),Fd.copy(te.quaternion);const e=Wp();return e&&te.updateMatrixWorld(),Uc.setFromCamera(YS(i,t),te),e&&(te.position.copy(Ud),te.quaternion.copy(Fd),te.updateMatrixWorld()),Uc.ray}function Rp(i,t,e,n){return bh(i,t),te.getWorldDirection(li).negate(),Nd.setFromNormalAndCoplanarPoint(li,qS.set(At.root.position.x,.8,0).addScaledVector(li,e)),Uc.ray.intersectPlane(Nd,n)}const Od=new y;let pa=!1;function KS(i){if(At.away||At.fleeing)return!1;At.headPosition(Od).y-=.05;const t=pa?.46:.4;return i.distanceSqToPoint(Od)<t*t}const hi=CS(Le,Ce?"pappus":"fruit"),Zn=PS(Le,()=>At.root.getWorldPosition(new y).add(new y(0,.85,0)),Ce);At.onPick=i=>Zn.owns(i)?Zn.pick(i):hi.pick(i);At.onSwallow=i=>Zn.owns(i)?Zn.swallowed(i):hi.swallowed(i);At.mind.on("strike",()=>Zn.strike());const Wi=IS({scene:Le,camera:te,renderer:ke,center:new y(Kn,.55,0),dof:()=>fn.dof,passSeed:Ce?(i,t)=>hi.spawn(i,t):void 0,flies:Ce}),Jo=new cn;Jo.add(...hi.warm,...Zn.warm,...Wi.warm);let Oo=-1;const kd=new y;function Cp(){Math.random()<.5?Zn.spawn():Wi.flyBy()}const Bd=new y,Al=new y;At.mind.on("ruffle",i=>{if(i.kind==="throat"||At.away)return;const t=Math.atan2(te.position.x-At.root.position.x,te.position.z-At.root.position.z)+(Math.random()<.5?-1:1)*(.9+Math.random()*.6);Al.set(Math.sin(t),0,Math.cos(t)),At.root.getWorldPosition(Bd).addScaledVector(Al,.16).y+=.22+Math.random()*.2,Wi.shed(Bd,Al,Math.random()<.45)});const ko=[];function zd(i,t){for(let e=0;e<t.length;e++)i.push(t[e])}const Hd=new y;let Pp=0,Lp=0,Ip=0;Un.addEventListener("pointerdown",i=>{Pp=performance.now(),Lp=i.clientX,Ip=i.clientY});const ns=new y,dr=new y,Gd=new y,ZS=3;let Vd=0;function $S(i){if(At.away||At.fleeing)return;const t=performance.now()/1e3;if(t<Vd||(At.root.getWorldPosition(ns),dr.copy(ns),ns.x-=.06,dr.x+=.06,ns.y=dr.y=ns.y+.02,i.distanceSqToSegment(ns,dr,void 0,Gd)>.07*.07))return;const e=Gd.x<(ns.x+dr.x)/2?1:-1,n=.12+Math.random()*.1;(At.hopBy(e*n)||At.hopBy(-e*n))&&(Vd=t+ZS)}const Wd=new En,Rl=new y,Cl=new y,Xd=new y,JS=new y;let Bo=-1;function jS(i){const t=performance.now();if(!Fn.reach(i,Rl))return void(Bo=-1);if(te.getWorldDirection(li).negate(),Wd.setFromNormalAndCoplanarPoint(li,Rl),!i.intersectPlane(Wd,Cl))return;const e=(t-Bo)/1e3;Bo>0&&e<.1&&Fn.brush(Rl,JS.copy(Cl).sub(Xd).divideScalar(Math.max(e,1/240)),e),Xd.copy(Cl),Bo=t}window.addEventListener("pointermove",i=>{document.body.classList.toggle("near",i.clientX>window.innerWidth-140&&i.clientY<120);const t=i.target===Un,e=bh(i.clientX,i.clientY),n=t&&KS(e);n&&!pa&&!At.singing&&At.sing(1.6),pa=n,t&&($S(e),jS(e)),!n&&Rp(i.clientX,i.clientY,.8,Ep)&&(Ap=performance.now())});const qd=new y,Yd=new y;function QS(i,t){return At.away?!1:(At.root.getWorldPosition(qd).y+=.25,At.headPosition(Yd),bh(i,t).distanceSqToSegment(qd,Yd)<.22*.22)}const Kd=document.querySelector(".fs"),wh=i=>document.body.classList.toggle("clean",i);Ei.has("clean")&&wh(!0);Kd?.addEventListener("click",async()=>{const i=!document.body.classList.contains("clean");wh(i);try{i&&!document.fullscreenElement&&await document.documentElement.requestFullscreen?.(),!i&&document.fullscreenElement&&await document.exitFullscreen()}catch{}Kd.blur()});document.addEventListener("fullscreenchange",()=>{document.body.classList.toggle("fullscreen",!!document.fullscreenElement),document.fullscreenElement||wh(!1)});Un.addEventListener("pointerup",i=>{if(Vr.isOpen())return Vr.open(!1);Gp.swallows(i)||performance.now()-Pp<250&&Math.hypot(i.clientX-Lp,i.clientY-Ip)<6&&(Ce&&Yi&&QS(i.clientX,i.clientY)?Th():Rp(i.clientX,i.clientY,.6,Hd)&&hi.spawn(Hd))});const fn=wS(ke,{samples:4}),jo=new y;{const i=fn.grade;i.uWhite.value.set(1,1,1.04),Ce?i.uLift.value.set(.015,.005,.022):i.uLift.value.set(.012,.017,.015),i.uGamma.value.set(1,1.04,1),i.uVignette.value=.22}function Dp(i){At.setPerch(p1(i),dp)}function tb(i){i.traverse(t=>{const e=t;if(e.isMesh){e.geometry.dispose();for(const n of Array.isArray(e.material)?e.material:[e.material])n.dispose()}})}Dp(Gr.group);let Pl=0,xr=1,Fc=0;const Oc=At.plumage.uPal.value.map(i=>i.clone());let Np=yp(Lc[0]);function Th(){Pl=(Pl+1)%Lc.length,At.ruffle("throat",.25),At.plumage.uPal.value.forEach((i,t)=>Oc[t].copy(i)),Np=yp(Lc[Pl]),Fc=.05,xr=0}function eb(i){if(xr>=1)return;if(Fc>0){Fc-=i;return}xr=Math.min(1,xr+i/.55);const t=Qe.smoothstep(xr,0,1);At.plumage.uPal.value.forEach((e,n)=>{for(let s=0;s<9;s++)e.elements[s]=Oc[n].elements[s]+(Np[n].elements[s]-Oc[n].elements[s])*t})}const nb=[-.45,.85],ib=[Math.PI-.6,-Math.PI+.55];let yr=!1,Oi=-1,Ar=0,Up=0;const Rr=new Ec,Cr=new y;function sb(){if(Oi>=0)return;yr=!yr,Cr.copy(te.position).sub(Ie.target),Rr.setFromVector3(Cr),Ar=Rr.theta;const i=yr?Math.PI+.35:.41,t=Qe.euclideanModulo(i-Ar,Math.PI*2);Up=Ar+(yr?t-Math.PI*2:t),Ie.minAzimuthAngle=-1/0,Ie.maxAzimuthAngle=1/0,Oi=0}function rb(i){Oi<0||(Oi=Math.min(1,Oi+i/1.6),Cr.copy(te.position).sub(Ie.target),Rr.setFromVector3(Cr),Rr.theta=Ar+(Up-Ar)*Qe.smootherstep(Oi,0,1),te.position.copy(Ie.target).add(Cr.setFromSpherical(Rr)),Oi===1&&(Oi=-1,[Ie.minAzimuthAngle,Ie.maxAzimuthAngle]=yr?ib:nb))}ke.localClippingEnabled=!0;let Ea=!1;const Fp=new En,kc=new En,zo=new y,Ll=new y,Zd=new y,ob=new Xn({color:15660008,wireframe:!0,transparent:!0,opacity:.8,clippingPlanes:[kc]}),Op=["bird.skin","bird.bare","bird.bill","bird.eyes","bird.nict"].map(i=>At.root.getObjectByName(i)).filter(i=>!!i),ab=Op.map(i=>i.material),$d=At.feathers.contour.material;function kp(i){Ea=i,$d.clippingPlanes=i?[Fp]:null,$d.needsUpdate=!0,Op.forEach((t,e)=>t.material=i?ob:ab[e])}function lb(){Ea&&(At.rig.bones.neck2.getWorldPosition(zo),At.rig.bones.head.getWorldPosition(Ll),Zd.copy(Ll).sub(zo).normalize(),zo.lerp(Ll,.35),kc.setFromNormalAndCoplanarPoint(Zd,zo),Fp.copy(kc).negate())}let Bp=!0,Jd=!1,Eh=0,Bc=!0,zc=null;const cb=!Ei.has("nofuzz")&&!Ei.has("skin");function zp(){At.feathers.fuzz.visible=Bc&&cb,zc&&(zc.visible=Bc)}const hb=At.plumage.uFlash.value,ub=At.plumage.uGlint.value,Hp=()=>{te.getWorldDirection(li).negate();const i=new y().crossVectors(li,te.up).normalize();return new y(At.root.position.x,.95+Math.random()*.2,0).addScaledVector(li,Ce?.6:.48).addScaledVector(i,(Math.random()-.5)*(Ce?.5:.4))},db=()=>(At.headPosition(jd),te.getWorldDirection(li).negate(),jd.addScaledVector(li,.24).add(new y(0,-.06,0))),jd=new y,Il=[[.4,()=>At.ruffle("shake")],[3,()=>Zn.spawn(db(),!0)],[10.5,()=>At.sing(2.2)],[13.5,()=>At.lick(.65,3)],[15,()=>At.hopBy(.26)],[17.5,()=>At.sing(1.6)],[20,()=>Wi.flyBy(!0)],[22.5,()=>At.hopTo(Kn)],[24.5,()=>hi.spawn(Hp())],[30,()=>!At.busy&&(At.ruffle("puff",.6),!0)],[32,()=>At.sing(1.4)]],fb=35;let zi=-1,Mr=0;function Ah(i){zi=i?0:-1,Mr=0,document.body.classList.toggle("demo",i)}function pb(i){if(!(zi<0)){for(zi+=i;Mr<Il.length&&zi>=Il[Mr][0];){const[t,e]=Il[Mr];if(e()===!1&&zi-t<4)break;Mr++}zi>fb&&Ah(!1)}}const Qd={Neutral:qc,AgX:Xc,ACES:Wc,Reinhard:Vc,None:oi},Vr=FS([{kind:"heading",label:"Camera"},{kind:"range",key:"shake",label:"Handheld",value:2.05,min:0,max:3.5,step:.05,set:i=>Eh=i},{kind:"range",key:"dof",label:"Depth of field",value:85,min:0,max:260,step:5,set:i=>fn.dof.uAperture.value=i},{kind:"range",key:"exposure",label:"Exposure",value:1.15,min:.8,max:2.4,step:.05,set:i=>fn.grade.uExposure.value=i},{kind:"heading",label:"Look"},{kind:"select",key:"tonemap",label:"Tone mapping",value:"Neutral",options:Object.keys(Qd),set:i=>fn.setToneMapping(Qd[i])},{kind:"range",key:"contrast",label:"Contrast",value:.87,min:.6,max:1.4,step:.01,set:i=>fn.grade.uContrast.value=i},{kind:"range",key:"sat",label:"Saturation",value:.97,min:.3,max:1.4,step:.01,set:i=>fn.grade.uSat.value=i},{kind:"heading",label:"Bird"},{kind:"toggle",key:"follow",label:"Follows the pointer",value:!0,set:i=>Bp=i},{kind:"range",key:"mood",label:"Calm · alert",value:.32,min:0,max:1,step:.01,set:i=>At.mind.baseline=i},{kind:"range",key:"flash",label:"Gorget flash",value:1,min:0,max:2,step:.05,set:i=>{At.plumage.uFlash.value=hb*i,At.plumage.uGlint.value=ub*i}},{kind:"toggle",key:"fuzz",label:"Down and felt",value:!0,set:i=>{Bc=i,zp()}},{kind:"range",key:"give",label:"Twig give",value:1,min:0,max:3,step:.05,set:i=>Fn.give=i},{kind:"heading",label:"Workbench"},{kind:"action",label:"Demo",key:"D",run:()=>Ah(zi<0)},{kind:"action",label:"Pause",key:"P",run:()=>Vp(!rs)},{kind:"action",label:"Drawing",key:"W",run:()=>Mh(!Ks)},{kind:"action",label:"Head wire",key:"H",run:()=>kp(!Ea)}],Ei.has("still")?{shake:0}:{},Ei.has("settings")),Gp=NS([{id:"food",label:Ce?"Drop a seed":"Offer a fruit",icon:Ce?Tn.food:Tn.fruit,run:()=>hi.spawn(Hp())},Ce?{id:"gnat",label:"Let a bug in",key:"G",icon:Tn.gnat,run:Cp}:{id:"sound",label:"Forest sound",icon:Tn.sound,run:()=>{Yr.toggle()}},{id:"sing",label:Ce?"Sing":"Call",icon:Tn.sing,run:GS},{id:"ruffle",label:"Ruffle",key:"R",icon:Tn.ruffle,run:()=>At.ruffle("shake")},Ce?{id:"fly",label:"Fly off",key:"F",icon:Tn.fly,run:()=>At.flee()}:{id:"stretch",label:"Stretch",key:"S",icon:Tn.fly,run:()=>At.stretch()},...Ce?[{id:"palette",label:"Color",key:"C",icon:Tn.palette,run:Th}]:[]],Ce?Tn.bird:Tn.parrot);Gp.root.addEventListener("pointerdown",()=>Vr.open(!1),!0);const mb={...Ce?{KeyF:()=>At.flee()}:{KeyS:()=>At.stretch()},KeyR:()=>At.ruffle("shake"),KeyB:sb,...Ce?{KeyC:Th}:{},...Ce?{KeyG:Cp}:{},KeyD:()=>Ah(zi<0),KeyH:()=>kp(!Ea),KeyP:()=>Vp(!rs),KeyW:()=>Mh(!Ks)};window.addEventListener("keydown",i=>{if(i.repeat)return;const t=i.target instanceof HTMLElement?i.target:null;if(!(t instanceof HTMLInputElement?t.type!=="range"&&t.type!=="checkbox":t?.closest("select, textarea, [contenteditable]")))if(i.code==="Space"){if(t?.closest("button, a, input"))return;i.preventDefault(),At.startle(1)}else!i.metaKey&&!i.ctrlKey&&mb[i.code]?.()});function Aa(){const i=Un.clientWidth||window.innerWidth,t=Un.clientHeight||window.innerHeight;ke.setPixelRatio(bp()),ke.setSize(i,t,!1),fn.setSize(i,t,ke.getPixelRatio()),te.aspect=i/t,te.fov=i/t<1?30/Math.max(i/t,.55):30,te.updateProjectionMatrix()}window.addEventListener("resize",Aa);new ResizeObserver(Aa).observe(Un);Aa();(function i(){matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`).addEventListener("change",()=>{Aa(),i()},{once:!0})})();const gb=matchMedia("(max-width: 640px)");let Ho=0;function _b(i){const t=Vr.isOpen()&&gb.matches?Vr.panel.offsetHeight*.5:0;if(Ho=Cn(Ho,t,9,i),Ho>.5){const e=Un.clientWidth||window.innerWidth,n=Un.clientHeight||window.innerHeight;te.setViewOffset(e,n,0,Ho,e,n)}else te.view?.enabled&&te.clearViewOffset()}HS.then(()=>requestAnimationFrame(()=>BS()));Hr||wp(!0);let rs=!1;function Vp(i){rs=i,document.body.classList.toggle("paused",i)}const Qo=new sg;Qo.connect(document);let ki=0;ke.setAnimationLoop(i=>{Qo.update(i);const t=rs?0:Math.min(Qo.getDelta(),1/20);rs&&Qo.getDelta(),ki+=t,rb(rs?1/60:t),_b(rs?1/60:t),Ie.update(),fa.material.uniforms.uTime.value=ki,fa.mesh.position.copy(te.position);const e=Bp&&!pa&&performance.now()-Ap<300;Jd&&!e&&ur.moveOn(At.mind),Jd=e,ur.interest=e?.95:.35,ur.billOn=e?.8:.46,ur.pursuit=e?1:0;let n=e?null:Wi.flyNear(jo,1.1);if(n&&t>0){const r=kd.distanceTo(n)/t>.1;kd.copy(n),r||(n=null)}n?Oo<0&&(Oo=ki):Oo=-1;const s=n&&ki-Oo<.8?n:null;s&&(ur.interest=.95),At.setAttention(e?Ep:s??te.position),ea.lerp(ss?Rh:Mb,1-Math.exp(-t*6)),Ta&&Ic&&!Ks&&(bi=Math.min(1,bi+t/1.6),bi===1&&(Ic=!1)),bi===1&&Hc&&(Hc=!1,fn.endDrawing(),qp.dispose()),eb(t),ko.length=0,zd(ko,hi.food()),zd(ko,Zn.food()),At.setFood(ko),WS(t),At.update(t),!Ce&&At.singing&&!Dc&&Yr.call(),Dc=At.singing,At.headPosition(jo),VS(t),lb(),hi.update(t,ki,Dd,jo),Zn.update(t,ki,Dd),Wi.update(t),pb(t),Xp()});const vb=new ve,xb=new Yn,tf=new ve;let ef=3;const Go=new Ot;function fr(i,t,e){return Math.sin(i*t+e)*.6+Math.sin(i*t*2.31+e*1.7)*.3+Math.sin(i*t*5.13+e*2.9)*.1}function yb(i,t){i>ef&&(Go.set((Math.random()-.5)*.12,(Math.random()-.5)*.09),ef=i+4+Math.random()*9),Go.multiplyScalar(Math.exp(-.016666666666666666*5));const e=Eh*Qe.DEG2RAD,n=(fr(i,.35,1.3)*.16+fr(i,7.3,4.1)*.018+Go.x)*e,s=(fr(i,.27,2.7)*.12+fr(i,8.1,5.9)*.016+Go.y)*e,r=fr(i,.22,.4)*.1*e;return xb.set(s,n,r,"YXZ")}const Dl=document.querySelector(".gyro");Yi&&document.body.classList.add("touch");let ss=!1,ta=null;const Rh=new Ot,ea=new Ot,Mb=new Ot;function nf(i){if(i.beta===null||i.gamma===null)return;const t=screen.orientation?.angle??0,[e,n]=t===90?[i.beta,-i.gamma]:t===270?[-i.beta,i.gamma]:t===180?[-i.gamma,-i.beta]:[i.gamma,i.beta];ta??={x:e,y:n};const s=Qe.DEG2RAD;Rh.set(Qe.clamp((e-ta.x)*.5,-12,12)*s,Qe.clamp((n-ta.y)*.4,-8,8)*s)}Dl?.addEventListener("click",async()=>{if(ss)window.removeEventListener("deviceorientation",nf),ss=!1;else{const i=DeviceOrientationEvent.requestPermission;if(i)try{if(await i()!=="granted")return}catch{return}ta=null,window.addEventListener("deviceorientation",nf),ss=!0}ss||Rh.set(0,0),Dl.classList.toggle("on",ss),Dl.setAttribute("aria-pressed",String(ss))});const sf=new y,pr=new y,rf=new y;function Wp(){return ea.lengthSq()<=1e-8?!1:(pr.copy(te.position).sub(Ie.target),pr.applyAxisAngle(te.up,-ea.x),rf.crossVectors(te.up,pr).normalize(),pr.applyAxisAngle(rf,ea.y),te.position.copy(Ie.target).add(pr),te.lookAt(Ie.target),!0)}function Xp(){sf.copy(te.position),tf.copy(te.quaternion),Wp(),Eh>0&&te.quaternion.multiply(vb.setFromEuler(yb(ki))),te.updateMatrixWorld(),bb(),te.position.copy(sf),te.quaternion.copy(tf),te.updateMatrixWorld()}const qp=new Xn({color:16777215,wireframe:!0}),of=[fa.mesh,Wi.group,At.feathers.contour,At.feathers.flight,At.feathers.fuzz],af=[];let Hc=!0;function Sb(){Hc=!0,of.forEach((i,t)=>{af[t]=i.visible,i.visible=!1}),Le.overrideMaterial=qp,ke.render(Le,te),Le.overrideMaterial=null,of.forEach((i,t)=>i.visible=af[t])}let lf=!0;function bb(){if(lf&&(lf=!1,Un.classList.remove("pending")),!Hr)return ke.render(Le,te);fn.focusOn(Nc),fn.grade.uReveal.value=Qe.smoothstep(bi,0,1),fn.render(Le,te,ki,Ta&&bi===1?null:Sb),Ch&&bi===1&&!Ks&&Tb()}let Ch=!0,Vo=new Uint8Array(4),Nl=null,Ul=null;const wb=document.querySelector('meta[name="theme-color"]');function Tb(){if(Ul)return;Ch=!1;const i=ke.getContext();ke.setRenderTarget(null);const t=i.drawingBufferWidth;Vo.length!==t*4&&(Vo=new Uint8Array(t*4)),Nl??=i.createBuffer(),i.bindBuffer(i.PIXEL_PACK_BUFFER,Nl),i.bufferData(i.PIXEL_PACK_BUFFER,Vo.byteLength,i.STREAM_READ),i.readPixels(0,1,t,1,i.RGBA,i.UNSIGNED_BYTE,0),i.bindBuffer(i.PIXEL_PACK_BUFFER,null);const e=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);if(!e)return;Ul=e,i.flush();const n=Vo,s=()=>{const r=i.clientWaitSync(e,0,0);if(r===i.TIMEOUT_EXPIRED)return void setTimeout(s,8);i.deleteSync(e),Ul=null,r!==i.WAIT_FAILED&&(i.bindBuffer(i.PIXEL_PACK_BUFFER,Nl),i.getBufferSubData(i.PIXEL_PACK_BUFFER,0,n),i.bindBuffer(i.PIXEL_PACK_BUFFER,null),Eb(n,t))};setTimeout(s,8)}function Eb(i,t){let e=0,n=0,s=0;const r=9;for(let a=0;a<r;a++){const l=Math.round((a+.5)/r*(t-1))*4;e+=i[l],n+=i[l+1],s+=i[l+2]}const o=`rgb(${Math.round(e/r)}, ${Math.round(n/r)}, ${Math.round(s/r)})`;document.documentElement.style.background=o,wb?.setAttribute("content",o)}let cf=0;window.addEventListener("resize",()=>{clearTimeout(cf),cf=window.setTimeout(()=>Ch=!0,400)});Object.assign(window,{__scene:Le,__camera:te,__renderer:ke,__controls:Ie,__post:fn,__frame:Xp,__seeds:hi,__insects:Zn,__ambient:Wi,__sway:Fn});
