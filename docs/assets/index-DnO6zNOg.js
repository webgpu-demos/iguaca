(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Zc="187",Ds={ROTATE:0,DOLLY:1,PAN:2},Is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},a0=0,Kh=1,l0=2,Sr=1,c0=2,mr=3,Wi=0,un=1,ze=2,Ns=0,br=1,Gl=2,Zh=3,$h=4,h0=5,Ls=100,u0=101,d0=102,f0=103,p0=104,m0=200,g0=201,_0=202,v0=203,yf=204,Mf=205,x0=206,y0=207,M0=208,S0=209,b0=210,w0=211,T0=212,E0=213,A0=214,Wl=0,Xl=1,ql=2,Pr=3,Yl=4,Kl=5,Zl=6,$l=7,Sf=0,R0=1,C0=2,ai=0,bf=1,$c=2,wf=3,Jc=4,Tf=5,jc=6,Qc=7,Jh="attached",P0="detached",Ef=300,ks=301,Lr=302,Na=303,Fa=304,as=1e3,ri=1001,aa=1002,ke=1003,Af=1004,gr=1005,Qe=1006,Zo=1007,oi=1008,An=1009,Rf=1010,Cf=1011,Ir=1012,th=1013,qn=1014,Fn=1015,gn=1016,eh=1017,nh=1018,Bs=1020,Pf=35902,Lf=35899,If=1021,Df=1022,Gn=1023,Xi=1026,Hi=1027,ih=1028,sh=1029,ls=1030,rh=1031,oh=1033,$o=33776,Jo=33777,jo=33778,Qo=33779,Jl=35840,jl=35841,Ql=35842,tc=35843,ec=36196,nc=37492,ic=37496,sc=37488,rc=37489,la=37490,oc=37491,ac=37808,lc=37809,cc=37810,hc=37811,uc=37812,dc=37813,fc=37814,pc=37815,mc=37816,gc=37817,_c=37818,vc=37819,xc=37820,yc=37821,Mc=36492,Sc=36494,bc=36495,wc=36283,Tc=36284,ca=36285,Ec=36286,Dr=2300,Nr=2301,Ua=2302,jh=2303,Qh=2400,tu=2401,eu=2402,L0=2500,I0=0,Nf=1,Ac=2,D0=3200,Rc=0,N0=1,zi="",Xe="srgb",Sn="srgb-linear",ha="linear",we="srgb",Oa=7680,F0=519,U0=512,O0=513,k0=514,Ff=515,B0=516,z0=517,Uf=518,Of=519,kf=35044,nu=35048,iu="300 es",Wn=2e3,Fr=2001;function V0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function H0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ur(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function G0(){const s=Ur("canvas");return s.style.display="block",s}const su={};function ua(...s){const t="THREE."+s.shift();console.log(t,...s)}function Bf(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Jt(...s){s=Bf(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function re(...s){s=Bf(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Fs(...s){const t=s.join(" ");t in su||(su[t]=!0,Jt(...s))}function W0(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const X0={[Wl]:Wl,[ql]:Zl,[Yl]:Yl,[Pr]:Kl,[Xl]:Xl,[Zl]:ql,[$l]:$l,[Kl]:Pr};class Yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ru=1234567;const wr=Math.PI/180,zs=180/Math.PI;function di(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[s&255]+an[s>>8&255]+an[s>>16&255]+an[s>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ce(s,t,e){return Math.max(t,Math.min(e,s))}function ah(s,t){return(s%t+t)%t}function q0(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Y0(s,t,e){return s!==t?(e-s)/(t-s):0}function Tr(s,t,e){return(1-e)*s+e*t}function K0(s,t,e,n){return Tr(s,t,1-Math.exp(-e*n))}function Z0(s,t=1){return t-Math.abs(ah(s,t*2)-t)}function $0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function J0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function j0(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Q0(s,t){return s+Math.random()*(t-s)}function tm(s){return s*(.5-Math.random())}function em(s){s!==void 0&&(ru=s);let t=ru+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nm(s){return s*wr}function im(s){return s*zs}function sm(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function rm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function zf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function om(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:Jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ma(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function lh(s,t){if(t.constructor===Float32Array)return s;const e=Ma(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function ch(s,t){if(t.constructor===Float32Array)return s;const e=Ma(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}const tn={DEG2RAD:wr,RAD2DEG:zs,generateUUID:di,clamp:ce,euclideanModulo:ah,mapLinear:q0,inverseLerp:Y0,lerp:Tr,damp:K0,pingpong:Z0,smoothstep:$0,smootherstep:J0,randInt:j0,randFloat:Q0,randFloatSpread:tm,seededRandom:em,degToRad:nm,radToDeg:im,isPowerOfTwo:sm,ceilPowerOfTwo:rm,floorPowerOfTwo:zf,setQuaternionFromProperEuler:om,normalize:ch,denormalize:lh};class Ht{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ve{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(u!==v||l!==d||c!==f||h!==g){let p=l*d+c*f+h*g+u*v;p<0&&(d=-d,f=-f,g=-g,v=-v,p=-p);let m=1-a;if(p<.9995){const M=Math.acos(p),T=Math.sin(M);m=Math.sin(m*M)/T,a=Math.sin(a*M)/T,l=l*m+d*a,c=c*m+f*a,h=h*m+g*a,u=u*m+v*a}else{l=l*m+d*a,c=c*m+f*a,h=h*m+g*a,u=u*m+v*a;const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class y{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ou.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ou.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ka.copy(this).projectOnVector(t),this.sub(ka)}reflect(t){return this.sub(ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ka=new y,ou=new ve;class ee{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],p=i[3],m=i[6],M=i[1],T=i[4],E=i[7],x=i[2],A=i[5],_=i[8];return r[0]=o*v+a*M+l*x,r[3]=o*p+a*T+l*A,r[6]=o*m+a*E+l*_,r[1]=c*v+h*M+u*x,r[4]=c*p+h*T+u*A,r[7]=c*m+h*E+u*_,r[2]=d*v+f*M+g*x,r[5]=d*p+f*T+g*A,r[8]=d*m+f*E+g*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=d*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ba.makeScale(t,e)),this}rotate(t){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ba.makeRotation(-t)),this}translate(t,e){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new ee,au=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lu=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function am(){const s={enabled:!0,workingColorSpace:Sn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===we&&(i.r=wi(i.r),i.g=wi(i.g),i.b=wi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===we&&(i.r=Us(i.r),i.g=Us(i.g),i.b=Us(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===zi?ha:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Sn]:{primaries:t,whitePoint:n,transfer:ha,toXYZ:au,fromXYZ:lu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:n,transfer:we,toXYZ:au,fromXYZ:lu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),s}const pe=am();function wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ps;class lm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ps===void 0&&(ps=Ur("canvas")),ps.width=t.width,ps.height=t.height;const i=ps.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ps}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ur("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wi(e[n]/255)*255):e[n]=wi(e[n]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cm=0;class hh{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=di(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(za(i[o].image)):r.push(za(i[o]))}else r=za(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function za(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?lm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}let hm=0;const Va=new y;class qe extends Yi{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=ri,i=ri,r=Qe,o=oi,a=Gn,l=An,c=qe.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=di(),this.name="",this.source=new hh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Va).x}get height(){return this.source.getSize(Va).y}get depth(){return this.source.getSize(Va).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ef)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case as:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case as:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Ef;qe.DEFAULT_ANISOTROPY=1;class Re{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,E=(f+1)/2,x=(m+1)/2,A=(h+d)/4,_=(u+v)/4,w=(g+p)/4;return T>E&&T>x?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=A/n,r=_/n):E>x?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=A/i,r=w/i):x<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),n=_/r,i=w/r),this.set(n,i,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class um extends Yi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];const i=n.count;for(let r=0;r<i;r++)this.textures[r]=new qe({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new hh(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nn extends um{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vf extends qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dm extends qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ke,this.minFilter=ke,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class Qt{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,v,p)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/ms.setFromMatrixColumn(t,0).length(),r=1/ms.setFromMatrixColumn(t,1).length(),o=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fm,t,pm)}lookAt(t,e,n){const i=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Pi.crossVectors(n,bn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Pi.crossVectors(n,bn)),Pi.normalize(),Qr.crossVectors(bn,Pi),i[0]=Pi.x,i[4]=Qr.x,i[8]=bn.x,i[1]=Pi.y,i[5]=Qr.y,i[9]=bn.y,i[2]=Pi.z,i[6]=Qr.z,i[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],p=n[10],m=n[14],M=n[3],T=n[7],E=n[11],x=n[15],A=i[0],_=i[4],w=i[8],N=i[12],C=i[1],I=i[5],L=i[9],F=i[13],b=i[2],D=i[6],U=i[10],O=i[14],q=i[3],V=i[7],H=i[11],Y=i[15];return r[0]=o*A+a*C+l*b+c*q,r[4]=o*_+a*I+l*D+c*V,r[8]=o*w+a*L+l*U+c*H,r[12]=o*N+a*F+l*O+c*Y,r[1]=h*A+u*C+d*b+f*q,r[5]=h*_+u*I+d*D+f*V,r[9]=h*w+u*L+d*U+f*H,r[13]=h*N+u*F+d*O+f*Y,r[2]=g*A+v*C+p*b+m*q,r[6]=g*_+v*I+p*D+m*V,r[10]=g*w+v*L+p*U+m*H,r[14]=g*N+v*F+p*O+m*Y,r[3]=M*A+T*C+E*b+x*q,r[7]=M*_+T*I+E*D+x*V,r[11]=M*w+T*L+E*U+x*H,r[15]=M*N+T*F+E*O+x*Y,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],p=t[11],m=t[15],M=l*f-c*d,T=a*f-c*u,E=a*d-l*u,x=o*f-c*h,A=o*d-l*h,_=o*u-a*h;return e*(v*M-p*T+m*E)-n*(g*M-p*x+m*A)+i*(g*T-v*x+m*_)-r*(g*E-v*A+p*_)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],p=t[14],m=t[15],M=e*a-n*o,T=e*l-i*o,E=e*c-r*o,x=n*l-i*a,A=n*c-r*a,_=i*c-r*l,w=h*v-u*g,N=h*p-d*g,C=h*m-f*g,I=u*p-d*v,L=u*m-f*v,F=d*m-f*p,b=M*F-T*L+E*I+x*C-A*N+_*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/b;return t[0]=(a*F-l*L+c*I)*D,t[1]=(i*L-n*F-r*I)*D,t[2]=(v*_-p*A+m*x)*D,t[3]=(d*A-u*_-f*x)*D,t[4]=(l*C-o*F-c*N)*D,t[5]=(e*F-i*C+r*N)*D,t[6]=(p*E-g*_-m*T)*D,t[7]=(h*_-d*E+f*T)*D,t[8]=(o*L-a*C+c*w)*D,t[9]=(n*C-e*L-r*w)*D,t[10]=(g*A-v*E+m*M)*D,t[11]=(u*E-h*A-f*M)*D,t[12]=(a*N-o*I-l*w)*D,t[13]=(e*I-n*N+i*w)*D,t[14]=(v*T-g*x-p*M)*D,t[15]=(h*x-u*T+d*M)*D,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,v=o*h,p=o*u,m=a*u,M=l*c,T=l*h,E=l*u,x=n.x,A=n.y,_=n.z;return i[0]=(1-(v+m))*x,i[1]=(f+E)*x,i[2]=(g-T)*x,i[3]=0,i[4]=(f-E)*A,i[5]=(1-(d+m))*A,i[6]=(p+M)*A,i[7]=0,i[8]=(g+T)*_,i[9]=(p-M)*_,i[10]=(1-(d+v))*_,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ms.set(i[0],i[1],i[2]).length();const a=ms.set(i[4],i[5],i[6]).length(),l=ms.set(i[8],i[9],i[10]).length();r<0&&(o=-o),zn.copy(this);const c=1/o,h=1/a,u=1/l;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,e.setFromRotationMatrix(zn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Wn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let g,v;if(l)g=r/(o-r),v=o*r/(o-r);else if(a===Wn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Fr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Wn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let g,v;if(l)g=1/(o-r),v=o/(o-r);else if(a===Wn)g=-2/(o-r),v=-(o+r)/(o-r);else if(a===Fr)g=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ms=new y,zn=new Qt,fm=new y(0,0,0),pm=new y(1,1,1),Pi=new y,Qr=new y,bn=new y,cu=new Qt,hu=new ve;class Yn{constructor(t=0,e=0,n=0,i=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hu.setFromEuler(this),this.setFromQuaternion(hu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class uh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mm=0;const uu=new y,gs=new ve,mi=new Qt,to=new y,$s=new y,gm=new y,_m=new ve,du=new y(1,0,0),fu=new y(0,1,0),pu=new y(0,0,1),mu={type:"added"},vm={type:"removed"},_s={type:"childadded",child:null},Ha={type:"childremoved",child:null};class Ne extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new y,e=new Yn,n=new ve,i=new y(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qt},normalMatrix:{value:new ee}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(du,t)}rotateY(t){return this.rotateOnAxis(fu,t)}rotateZ(t){return this.rotateOnAxis(pu,t)}translateOnAxis(t,e){return uu.copy(t).applyQuaternion(this.quaternion),this.position.add(uu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(du,t)}translateY(t){return this.translateOnAxis(fu,t)}translateZ(t){return this.translateOnAxis(pu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?to.copy(t):to.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt($s,to,this.up):mi.lookAt(to,$s,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),gs.setFromRotationMatrix(mi),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mu),_s.child=t,this.dispatchEvent(_s),_s.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vm),Ha.child=t,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mu),_s.child=t,this.dispatchEvent(_s),_s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,gm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,_m,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ne.DEFAULT_UP=new y(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class hn extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xm={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},eo={h:0,s:0,l:0};function Wa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ot{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=ah(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Wa(o,r,t+1/3),this.g=Wa(o,r,t),this.b=Wa(o,r,t-1/3)}return pe.colorSpaceToWorking(this,i),this}setStyle(t,e=Xe){function n(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=Hf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return pe.workingToColorSpace(ln.copy(this),t),Math.round(ce(ln.r*255,0,255))*65536+Math.round(ce(ln.g*255,0,255))*256+Math.round(ce(ln.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(ln.copy(this),e);const n=ln.r,i=ln.g,r=ln.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=Xe){pe.workingToColorSpace(ln.copy(this),t);const e=ln.r,n=ln.g,i=ln.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(eo);const n=Tr(Li.h,eo.h,e),i=Tr(Li.s,eo.s,e),r=Tr(Li.l,eo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new Ot;Ot.NAMES=Hf;class dh extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Vn=new y,gi=new y,Xa=new y,_i=new y,vs=new y,xs=new y,gu=new y,qa=new y,Ya=new y,Ka=new y,Za=new Re,$a=new Re,Ja=new Re;class Nn{constructor(t=new y,e=new y,n=new y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Vn.subVectors(t,e),i.cross(Vn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Vn.subVectors(i,e),gi.subVectors(n,e),Xa.subVectors(t,e);const o=Vn.dot(Vn),a=Vn.dot(gi),l=Vn.dot(Xa),c=gi.dot(gi),h=gi.dot(Xa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Za.setScalar(0),$a.setScalar(0),Ja.setScalar(0),Za.fromBufferAttribute(t,e),$a.fromBufferAttribute(t,n),Ja.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Za,r.x),o.addScaledVector($a,r.y),o.addScaledVector(Ja,r.z),o}static isFrontFacing(t,e,n,i){return Vn.subVectors(n,e),gi.subVectors(t,e),Vn.cross(gi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Vn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Nn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;vs.subVectors(i,n),xs.subVectors(r,n),qa.subVectors(t,n);const l=vs.dot(qa),c=xs.dot(qa);if(l<=0&&c<=0)return e.copy(n);Ya.subVectors(t,i);const h=vs.dot(Ya),u=xs.dot(Ya);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(vs,o);Ka.subVectors(t,r);const f=vs.dot(Ka),g=xs.dot(Ka);if(g>=0&&f<=g)return e.copy(r);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(xs,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return gu.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(gu,a);const m=1/(p+v+d);return o=v*m,a=d*m,e.copy(n).addScaledVector(vs,o).addScaledVector(xs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class fi{constructor(t=new y(1/0,1/0,1/0),e=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(t.matrixWorld),this.expandByPoint(Hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),no.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),no.copy(n.boundingBox)),no.applyMatrix4(t.matrixWorld),this.union(no)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Js),io.subVectors(this.max,Js),ys.subVectors(t.a,Js),Ms.subVectors(t.b,Js),Ss.subVectors(t.c,Js),Ii.subVectors(Ms,ys),Di.subVectors(Ss,Ms),ji.subVectors(ys,Ss);let e=[0,-Ii.z,Ii.y,0,-Di.z,Di.y,0,-ji.z,ji.y,Ii.z,0,-Ii.x,Di.z,0,-Di.x,ji.z,0,-ji.x,-Ii.y,Ii.x,0,-Di.y,Di.x,0,-ji.y,ji.x,0];return!ja(e,ys,Ms,Ss,io)||(e=[1,0,0,0,1,0,0,0,1],!ja(e,ys,Ms,Ss,io))?!1:(so.crossVectors(Ii,Di),e=[so.x,so.y,so.z],ja(e,ys,Ms,Ss,io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const vi=[new y,new y,new y,new y,new y,new y,new y,new y],Hn=new y,no=new fi,ys=new y,Ms=new y,Ss=new y,Ii=new y,Di=new y,ji=new y,Js=new y,io=new y,so=new y,Qi=new y;function ja(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Qi.fromArray(s,r);const a=i.x*Math.abs(Qi.x)+i.y*Math.abs(Qi.y)+i.z*Math.abs(Qi.z),l=t.dot(Qi),c=e.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const He=new y,ro=new Ht;let ym=0;class Le extends Yi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ym++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kf,this.updateRanges=[],this.gpuType=Fn,this.version=0,this._normalizationScale=t!==void 0?Ma(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ro.fromBufferAttribute(this,e),ro.applyMatrix3(t),this.setXY(e,ro.x,ro.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):lh(t,this.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):ch(t,this.array)}}class Sa extends Le{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gf extends Le{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends Le{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Mm=new fi,js=new y,Qa=new y;class kn{constructor(t=new y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Mm.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);const e=js.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(js,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(Qa)),this.expandByPoint(js.copy(t.center).sub(Qa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Sm=0;const Pn=new Qt,tl=new Ne,bs=new y,wn=new fi,Qs=new fi,je=new y;class Se extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(V0(t)?Gf:Sa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return tl.lookAt(t),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];wn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new y,1/0);return}if(t){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(wn.min,Qs.min),wn.expandByPoint(je),je.addVectors(wn.max,Qs.max),wn.expandByPoint(je)):(wn.expandByPoint(Qs.min),wn.expandByPoint(Qs.max))}wn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)je.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(je));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)je.fromBufferAttribute(a,c),l&&(bs.fromBufferAttribute(t,c),je.add(bs)),i=Math.max(i,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Le(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)a[N]=new y,l[N]=new y;const h=new y,u=new y,d=new y,f=new Ht,g=new Ht,v=new Ht,p=new y,m=new y;function M(N,C,I){c[N]=c[C]=c[I]=1,h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,I),f.fromBufferAttribute(r,N),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,I),u.sub(h),d.sub(h),g.sub(f),v.sub(f);const L=1/(g.x*v.y-v.x*g.y);isFinite(L)&&(p.copy(u).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(L),m.copy(d).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(L),a[N].add(p),a[C].add(p),a[I].add(p),l[N].add(m),l[C].add(m),l[I].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let N=0,C=T.length;N<C;++N){const I=T[N],L=I.start,F=I.count;for(let b=L,D=L+F;b<D;b+=3)M(t.getX(b+0),t.getX(b+1),t.getX(b+2))}const E=new y,x=new y,A=new y,_=new y;function w(N){A.fromBufferAttribute(i,N),_.copy(A);const C=a[N];E.copy(C),E.sub(A.multiplyScalar(A.dot(C))).normalize(),x.crossVectors(_,C);const L=x.dot(l[N])<0?-1:1;o.setXYZW(N,E.x,E.y,E.z,L)}for(let N=0,C=n.count;N<C;++N)c[N]&&w(N);this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new y,r=new y,o=new y,a=new y,l=new y,c=new y,h=new y,u=new y;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new Le(d,h,u)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=kf,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=_u(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});const e=_u(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}}function _u(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=di()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}const fn=new y;class fh{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?Ma(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ua("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new fh(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ua("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){const e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):lh(t,this.data.array)}_normalize(t){const e=this._normalizationScale;return e!==void 0?Math.round(t*e):ch(t,this.data.array)}}const el=new y,wm=new y,Tm=new ee;class En{constructor(t=new y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=el.subVectors(n,e).cross(wm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(el),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Tm.getNormalMatrix(t),i=this.coplanarPoint(el).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Em=0;class li extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=di(),this.name="",this.type="Material",this.blending=br,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=Mf,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=F0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oa,this.stencilZFail=Oa,this.stencilZPass=Oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new En().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ht().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ht().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const xi=new y,nl=new y,oo=new y,ao=new y;class Gs{constructor(t=new y,e=new y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){nl.copy(t).add(e).multiplyScalar(.5),oo.copy(e).sub(t).normalize(),ao.copy(this.origin).sub(nl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(oo),a=ao.dot(this.direction),l=-ao.dot(oo),c=ao.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(nl).addScaledVector(oo,d),f}intersectSphere(t,e){if(t.radius<0)return null;xi.subVectors(t.center,this.origin);const n=xi.dot(this.direction),i=xi.dot(xi)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,n,i,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,g=e.x-o.x,v=e.y-o.y,p=e.z-o.z,m=n.x-o.x,M=n.y-o.y,T=n.z-o.z,E=Math.abs(l),x=Math.abs(c),A=Math.abs(h);let _,w,N,C,I,L,F,b,D,U,O,q;if(E>=x&&E>=A?(N=l,L=u,D=g,q=m,l>=0?(_=c,w=h,C=d,I=f,F=v,b=p,U=M,O=T):(_=h,w=c,C=f,I=d,F=p,b=v,U=T,O=M)):x>=A?(N=c,L=d,D=v,q=M,c>=0?(_=h,w=l,C=f,I=u,F=p,b=g,U=T,O=m):(_=l,w=h,C=u,I=f,F=g,b=p,U=m,O=T)):(N=h,L=f,D=p,q=T,h>=0?(_=l,w=c,C=u,I=d,F=g,b=v,U=m,O=M):(_=c,w=l,C=d,I=u,F=v,b=g,U=M,O=m)),N===0)return null;const V=_/N,H=w/N,Y=1/N,at=C-V*L,Q=I-H*L,k=F-V*D,Z=b-H*D,X=U-V*q,ct=O-H*q,J=X*Z-ct*k,tt=at*ct-Q*X,ot=k*Q-Z*at;if(i){if(J<0||tt<0||ot<0)return null}else if((J<0||tt<0||ot<0)&&(J>0||tt>0||ot>0))return null;const ft=J+tt+ot;if(ft===0)return null;const Rt=Y*(J*L+tt*D+ot*q);return(ft>0?Rt<0:Rt>0)?null:this.at(Rt/ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xn extends li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Sf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const vu=new Qt,ts=new Gs,lo=new kn,xu=new y,co=new y,ho=new y,uo=new y,il=new y,fo=new y,yu=new y,po=new y;class _e extends Ne{constructor(t=new Se,e=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(il.fromBufferAttribute(u,t),o?fo.addScaledVector(il,h):fo.addScaledVector(il.sub(e),h))}e.add(fo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(lo.containsPoint(ts.origin)===!1&&(ts.intersectSphere(lo,xu)===null||ts.origin.distanceToSquared(xu)>(t.far-t.near)**2))&&(vu.copy(r).invert(),ts.copy(t.ray).applyMatrix4(vu),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),T=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let E=M,x=T;E<x;E+=3){const A=a.getX(E),_=a.getX(E+1),w=a.getX(E+2);i=mo(this,m,t,n,c,h,u,A,_,w),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const M=a.getX(p),T=a.getX(p+1),E=a.getX(p+2);i=mo(this,o,t,n,c,h,u,M,T,E),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],m=o[p.materialIndex],M=Math.max(p.start,f.start),T=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let E=M,x=T;E<x;E+=3){const A=E,_=E+1,w=E+2;i=mo(this,m,t,n,c,h,u,A,_,w),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=g,m=v;p<m;p+=3){const M=p,T=p+1,E=p+2;i=mo(this,o,t,n,c,h,u,M,T,E),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Am(s,t,e,n,i,r,o,a){let l;if(t.side===un?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Wi,a),l===null)return null;po.copy(a),po.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(po);return c<e.near||c>e.far?null:{distance:c,point:po.clone(),object:s}}function mo(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,co),s.getVertexPosition(l,ho),s.getVertexPosition(c,uo);const h=Am(s,t,e,n,co,ho,uo,yu);if(h){const u=new y;Nn.getBarycoord(yu,co,ho,uo,u),i&&(h.uv=Nn.getInterpolatedAttribute(i,a,l,c,u,new Ht)),r&&(h.uv1=Nn.getInterpolatedAttribute(r,a,l,c,u,new Ht)),o&&(h.normal=Nn.getInterpolatedAttribute(o,a,l,c,u,new y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new y,materialIndex:0};Nn.getNormal(co,ho,uo,d.normal),h.face=d,h.barycoord=u}return h}const tr=new Re,Mu=new Re,Su=new Re,Rm=new Re,bu=new Qt,go=new y,sl=new kn,wu=new Qt,rl=new Gs;class ni extends _e{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jh,this.bindMatrix=new Qt,this.bindMatrixInverse=new Qt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new fi),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,go),this.boundingBox.expandByPoint(go)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new kn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,go),this.boundingSphere.expandByPoint(go)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sl.copy(this.boundingSphere),sl.applyMatrix4(i),t.ray.intersectsSphere(sl)!==!1&&(wu.copy(i).invert(),rl.copy(t.ray).applyMatrix4(wu),!(this.boundingBox!==null&&rl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,rl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Re,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Jh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===P0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Jt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Mu.fromBufferAttribute(i.attributes.skinIndex,t),Su.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(tr.copy(e),e.set(0,0,0,0)):(tr.set(e.x,e.y,e.z,1),e.set(0,0,0)),tr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=Su.getComponent(r);if(o!==0){const a=Mu.getComponent(r);bu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Rm.copy(tr).applyMatrix4(bu),o)}}return e.isVector4&&(e.w=tr.w),e.applyMatrix4(this.bindMatrixInverse)}}class ph extends Ne{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ba extends qe{constructor(t=null,e=1,n=1,i,r,o,a,l,c=ke,h=ke,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tu=new Qt,Cm=new Qt;class wa{constructor(t=[],e=[]){this.uuid=di(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Jt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Qt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Qt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:Cm;Tu.multiplyMatrices(a,e[r]),Tu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new wa(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ba(e,t,t,Gn,Fn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(Jt("Skeleton: No bone found with UUID:",r),o=new ph),this.bones.push(o),this.boneInverses.push(new Qt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class da extends Le{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ws=new Qt,Eu=new Qt,_o=[],Au=new fi,Pm=new Qt,er=new _e,nr=new kn;class Lm extends _e{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new da(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Pm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new fi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),Au.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(Au)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),nr.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(nr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),nr.copy(this.boundingSphere),nr.applyMatrix4(n),t.ray.intersectsSphere(nr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ws),Eu.multiplyMatrices(n,ws),er.matrixWorld=Eu,er.raycast(t,_o);for(let o=0,a=_o.length;o<a;o++){const l=_o[o];l.instanceId=r,l.object=this,e.push(l)}_o.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new da(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ba(new Float32Array(i*this.count),i,this.count,ih,Fn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const es=new kn,Im=new Ht(.5,.5),vo=new y;class Or{constructor(t=new En,e=new En,n=new En,i=new En,r=new En,o=new En){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],p=r[10],m=r[11],M=r[12],T=r[13],E=r[14],x=r[15];if(i[0].setComponents(c-o,f-h,m-g,x-M).normalize(),i[1].setComponents(c+o,f+h,m+g,x+M).normalize(),i[2].setComponents(c+a,f+u,m+v,x+T).normalize(),i[3].setComponents(c-a,f-u,m-v,x-T).normalize(),n)i[4].setComponents(l,d,p,E).normalize(),i[5].setComponents(c-l,f-d,m-p,x-E).normalize();else if(i[4].setComponents(c-l,f-d,m-p,x-E).normalize(),e===Wn)i[5].setComponents(c+l,f+d,m+p,x+E).normalize();else if(e===Fr)i[5].setComponents(l,d,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){es.center.set(0,0,0);const e=Im.distanceTo(t.center);return es.radius=.7071067811865476+e,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(vo.x=i.normal.x>0?t.max.x:t.min.x,vo.y=i.normal.y>0?t.max.y:t.min.y,vo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(vo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Ru=new Qt;class mh{constructor(){this.coordinateSystem=Wn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){const r=e[i];Ru.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Or),n[i].setFromProjectionMatrix(Ru,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Or),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new mh().copy(this)}}class Ta extends li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fa=new y,pa=new y,Cu=new Qt,ir=new Gs,xo=new kn,ol=new y,Pu=new y;class gh extends Ne{constructor(t=new Se,e=new Ta){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)fa.fromBufferAttribute(e,i-1),pa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=fa.distanceTo(pa);t.setAttribute("lineDistance",new oe(n,1))}else Jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(i),xo.radius+=r,t.ray.intersectsSphere(xo)===!1)return;Cu.copy(i).invert(),ir.copy(t.ray).applyMatrix4(Cu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=c){const m=h.getX(v),M=h.getX(v+1),T=yo(this,t,ir,l,m,M,v);T&&e.push(T)}if(this.isLineLoop){const v=h.getX(g-1),p=h.getX(f),m=yo(this,t,ir,l,v,p,g-1);m&&e.push(m)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,p=g-1;v<p;v+=c){const m=yo(this,t,ir,l,v,v+1,v);m&&e.push(m)}if(this.isLineLoop){const v=yo(this,t,ir,l,g-1,f,g-1);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yo(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(fa.fromBufferAttribute(a,i),pa.fromBufferAttribute(a,r),e.distanceSqToSegment(fa,pa,ol,Pu)>n)return;ol.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ol);if(!(c<t.near||c>t.far))return{distance:c,point:Pu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Lu=new y,Iu=new y;class ma extends gh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Lu.fromBufferAttribute(e,i),Iu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Lu.distanceTo(Iu);t.setAttribute("lineDistance",new oe(n,1))}else Jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dm extends gh{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Wf extends li{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Du=new Qt,Cc=new Gs,Mo=new kn,So=new y;class Xf extends Ne{constructor(t=new Se,e=new Wf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(i),Mo.radius+=r,t.ray.intersectsSphere(Mo)===!1)return;Du.copy(i).invert(),Cc.copy(t.ray).applyMatrix4(Du);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const p=c.getX(g);So.fromBufferAttribute(u,p),Nu(So,p,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)So.fromBufferAttribute(u,g),Nu(So,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Nu(s,t,e,n,i,r,o){const a=Cc.distanceSqToPoint(s);if(a<e){const l=new y;Cc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class qf extends qe{constructor(t=[],e=ks,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nm extends qe{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cs extends qe{constructor(t,e,n=qn,i,r,o,a=ke,l=ke,c,h=Xi,u=1){if(h!==Xi&&h!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Yf extends cs{constructor(t,e=qn,n=ks,i,r,o=ke,a=ke,l,c=Xi){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Kf extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Xr extends Se{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(u,2));function g(v,p,m,M,T,E,x,A,_,w,N){const C=E/_,I=x/w,L=E/2,F=x/2,b=A/2,D=_+1,U=w+1;let O=0,q=0;const V=new y;for(let H=0;H<U;H++){const Y=H*I-F;for(let at=0;at<D;at++){const Q=at*C-L;V[v]=Q*M,V[p]=Y*T,V[m]=b,c.push(V.x,V.y,V.z),V[v]=0,V[p]=0,V[m]=A>0?1:-1,h.push(V.x,V.y,V.z),u.push(at/_),u.push(1-H/w),O+=1}}for(let H=0;H<w;H++)for(let Y=0;Y<_;Y++){const at=d+Y+D*H,Q=d+Y+D*(H+1),k=d+(Y+1)+D*(H+1),Z=d+(Y+1)+D*H;l.push(at,Q,Z),l.push(Q,k,Z),q+=6}a.addGroup(f,q,N),f+=q,d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class _h extends Se{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new y,h=new Ht;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(a,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _h(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class qr extends Se{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],p=n/2;let m=0;M(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(d,3)),this.setAttribute("uv",new oe(f,2));function M(){const E=new y,x=new y;let A=0;const _=(e-t)/n;for(let w=0;w<=r;w++){const N=[],C=w/r,I=C*(e-t)+t;for(let L=0;L<=i;L++){const F=L/i,b=F*l+a,D=Math.sin(b),U=Math.cos(b);x.x=I*D,x.y=-C*n+p,x.z=I*U,u.push(x.x,x.y,x.z),E.set(D,_,U).normalize(),d.push(E.x,E.y,E.z),f.push(F,1-C),N.push(g++)}v.push(N)}for(let w=0;w<i;w++)for(let N=0;N<r;N++){const C=v[N][w],I=v[N+1][w],L=v[N+1][w+1],F=v[N][w+1];(t>0||N!==0)&&(h.push(C,I,F),A+=3),(e>0||N!==r-1)&&(h.push(I,L,F),A+=3)}c.addGroup(m,A,0),m+=A}function T(E){const x=g,A=new Ht,_=new y;let w=0;const N=E===!0?t:e,C=E===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,p*C,0),d.push(0,C,0),f.push(.5,.5),g++;const I=g;for(let L=0;L<=i;L++){const b=L/i*l+a,D=Math.cos(b),U=Math.sin(b);_.x=N*U,_.y=p*C,_.z=N*D,u.push(_.x,_.y,_.z),d.push(0,C,0),A.x=D*.5+.5,A.y=U*.5*C+.5,f.push(A.x,A.y),g++}for(let L=0;L<i;L++){const F=x+L,b=I+L;E===!0?h.push(b,b+1,F):h.push(b+1,b,F),w+=3}c.addGroup(m,w,E===!0?1:2),m+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fm{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Ht:new y);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new y,i=[],r=[],o=[],a=new y,l=new Qt;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new y)}r[0]=new y,o[0]=new y;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ce(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(ce(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}}function vh(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Fu=new y,Uu=new y,al=new vh,ll=new vh,cl=new vh;class Pc extends Fm{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new y){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Uu.subVectors(i[0],i[1]).add(i[0]),c=Uu);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Fu.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Fu),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),al.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,p),ll.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,p),cl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,p)}else this.curveType==="catmullrom"&&(al.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ll.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),cl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(al.calc(l),ll.calc(l),cl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new y().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class fs extends Se{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],v=[],p=[];for(let m=0;m<h;m++){const M=m*d-o;for(let T=0;T<c;T++){const E=T*u-r;g.push(E,-M,0),v.push(0,0,1),p.push(T/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const T=M+c*m,E=M+c*(m+1),x=M+1+c*(m+1),A=M+1+c*m;f.push(T,E,A),f.push(E,x,A)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fs(t.width,t.height,t.widthSegments,t.heightSegments)}}class hi extends Se{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new y,d=new y,f=[],g=[],v=[],p=[];for(let m=0;m<=n;m++){const M=[],T=m/n,E=o+T*a,x=t*Math.cos(E),A=Math.sqrt(t*t-x*x);let _=0;m===0&&o===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let w=0;w<=e;w++){const N=w/e,C=i+N*r;u.x=-A*Math.cos(C),u.y=x,u.z=A*Math.sin(C),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),p.push(N+_,1-T),M.push(c++)}h.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){const T=h[m][M+1],E=h[m][M],x=h[m+1][M],A=h[m+1][M+1];(m!==0||o>0)&&f.push(T,E,A),(m!==n-1||l<Math.PI)&&f.push(E,x,A)}this.setIndex(f),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Vs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(Ou(i))i.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Ou(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function pn(s){const t={};for(let e=0;e<s.length;e++){const n=Vs(s[e]);for(const i in n)t[i]=n[i]}return t}function Ou(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Um(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Zf(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const Om={clone:Vs,merge:pn};var km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mn extends li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=km,this.fragmentShader=Bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=Um(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Ot().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ht().fromArray(i.value);break;case"v3":this.uniforms[n].value=new y().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Re().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ee().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Qt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class zm extends mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _n extends li{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vn extends _n{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ht(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ot(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ot(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ot(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Fs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Fs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class $f extends li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=D0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vm extends li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Oi(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function _r(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Hm(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function ku(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function Gm(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class Ws{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Wm extends Ws{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qh,endingEnd:Qh}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case tu:r=t,a=2*e-n;break;case eu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case tu:o=t,l=2*n-e;break;case eu:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),v=g*g,p=v*g,m=-d*p+2*d*v-d*g,M=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,T=(-1-f)*p+(1.5+f)*v+.5*g,E=f*p-f*v;for(let x=0;x!==a;++x)r[x]=m*o[h+x]+M*o[c+x]+T*o[l+x]+E*o[u+x];return r}}class Xm extends Ws{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class qm extends Ws{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ym extends Ws{interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){const g=(n-e)/(i-e),v=1-g;for(let p=0;p!==a;++p)r[p]=o[c+p]*v+o[l+p]*g;return r}const d=a*2,f=t-1;for(let g=0;g!==a;++g){const v=o[c+g],p=o[l+g],m=f*d+g*2,M=u[m],T=u[m+1],E=t*d+g*2,x=h[E],A=h[E+1],_=Zm(n,e,M,x,i);r[g]=Jf(_,v,T,A,p)}return r}}function Jf(s,t,e,n,i){const r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function Km(s,t,e,n,i){const r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function Zm(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){const a=Jf(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;const l=Km(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}class $n{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Oi(e,this.TimeBufferType),this.values=Oi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Oi(t.times,Array),values:Oi(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),_r(t.settings)&&(n.settings={inTangents:Oi(t.settings.inTangents,Array),outTangents:Oi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new qm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new Ym(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Dr:e=this.InterpolantFactoryMethodDiscrete;break;case Nr:e=this.InterpolantFactoryMethodLinear;break;case Ua:e=this.InterpolantFactoryMethodSmooth;break;case jh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return Ua;case this.InterpolantFactoryMethodBezier:return jh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;_r(this.settings)&&(Bu(this.settings.inTangents,t),Bu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;_r(this.settings)&&(zu(this.settings.inTangents,t),zu(this.settings.outTangents,t))}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(re("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(re("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){re("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){re("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&H0(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){re("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ua,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const v=e[u+g];if(v!==e[d+g]||v!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,_r(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Bu(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function zu(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Nr;class Xs extends $n{constructor(t,e,n){super(t,e,n)}}Xs.prototype.ValueTypeName="bool";Xs.prototype.ValueBufferType=Array;Xs.prototype.DefaultInterpolation=Dr;Xs.prototype.InterpolantFactoryMethodLinear=void 0;Xs.prototype.InterpolantFactoryMethodSmooth=void 0;class jf extends $n{constructor(t,e,n,i){super(t,e,n,i)}}jf.prototype.ValueTypeName="color";class kr extends $n{constructor(t,e,n,i){super(t,e,n,i)}}kr.prototype.ValueTypeName="number";class $m extends Ws{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)ve.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Br extends $n{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new $m(this.times,this.values,this.getValueSize(),t)}}Br.prototype.ValueTypeName="quaternion";Br.prototype.InterpolantFactoryMethodSmooth=void 0;class qs extends $n{constructor(t,e,n){super(t,e,n)}}qs.prototype.ValueTypeName="string";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=Dr;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class ga extends $n{constructor(t,e,n,i){super(t,e,n,i)}}ga.prototype.ValueTypeName="vector";class Jm{constructor(t="",e=-1,n=[],i=L0){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=di(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Qm(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push($n.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Hm(l);l=ku(l,1,h),c=ku(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new kr(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function jm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return kr;case"vector":case"vector2":case"vector3":case"vector4":return ga;case"color":return jf;case"quaternion":return Br;case"bool":case"boolean":return Xs;case"string":return qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Qm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=jm(s.type);if(s.times===void 0){const n=[],i=[];Gm(s.keys,n,i,"value"),s.times=n,s.values=i}let e;return t.parse!==void 0?e=t.parse(s):e=new t(s.name,s.times,s.values,s.interpolation),_r(s.settings)&&(e.settings={inTangents:Oi(s.settings.inTangents,Float32Array),outTangents:Oi(s.settings.outTangents,Float32Array)}),e}const bi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Vu(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Vu(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Vu(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class tg{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const eg=new tg;class Ys{constructor(t){this.manager=t!==void 0?t:eg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}}Ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const yi={};class ng extends Error{constructor(t,e){super(t),this.response=e}}class Qf extends Ys{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=bi.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(yi[t]!==void 0){yi[t].push({onLoad:e,onProgress:n,onError:i});return}yi[t]=[],yi[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Jt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=yi[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const p=new ReadableStream({start(m){M();function M(){u.read().then(({done:T,value:E})=>{if(T)m.close();else{v+=E.byteLength;const x=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let A=0,_=h.length;A<_;A++){const w=h[A];w.onProgress&&w.onProgress(x)}m.enqueue(E),M()}},T=>{m.error(T)})}}});return new Response(p)}else throw new ng(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{bi.add(`file:${t}`,c);const h=yi[t];delete yi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=yi[t];if(h===void 0)throw this.manager.itemError(t),c;delete yi[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ts=new WeakMap;class ig extends Ys{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=bi.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=Ts.get(o);u===void 0&&(u=[],Ts.set(o,u)),u.push({onLoad:e,onError:i})}return o}const a=Ur("img");function l(){h(),e&&e(this);const u=Ts.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}Ts.delete(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),bi.remove(`image:${t}`);const d=Ts.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(u)}Ts.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),bi.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}}class sg extends Ys{constructor(t){super(t)}load(t,e,n,i){const r=new qe,o=new ig(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Ea extends Ne{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class rg extends Ea{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const hl=new Qt,Hu=new y,Gu=new y;class xh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hu),Gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){hl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(hl,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Fr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const bo=new y,wo=new ve,Jn=new y;class tp extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(bo,wo,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,wo,Jn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(bo,wo,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,wo,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new y,Wu=new Ht,Xu=new Ht;class Mn extends tp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,Wu,Xu),e.subVectors(Xu,Wu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class og extends xh{constructor(){super(new Mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=zs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class ag extends Ea{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new og}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class lg extends xh{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0}}class cg extends Ea{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Aa extends tp{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class hg extends xh{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yh extends Ea{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new hg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Er{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const ul=new WeakMap;class ug extends Ys{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Jt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Jt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=bi.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{ul.has(o)===!0?(i&&i(ul.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}const a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return bi.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),ul.set(l,c),bi.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});bi.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Es=-90,As=1;class Lc extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Mn(Es,As,t,e);i.layers=this.layers,this.add(i);const r=new Mn(Es,As,t,e);r.layers=this.layers,this.add(r);const o=new Mn(Es,As,t,e);o.layers=this.layers,this.add(o);const a=new Mn(Es,As,t,e);a.layers=this.layers,this.add(a);const l=new Mn(Es,As,t,e);l.layers=this.layers,this.add(l);const c=new Mn(Es,As,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=v,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class dg extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}class fg{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=pg.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function pg(){this._document.hidden===!1&&this.reset()}const Mh="\\[\\]\\.:\\/",mg=new RegExp("["+Mh+"]","g"),Sh="[^"+Mh+"]",gg="[^"+Mh.replace("\\.","")+"]",_g=/((?:WC+[\/:])*)/.source.replace("WC",Sh),vg=/(WCOD+)?/.source.replace("WCOD",gg),xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sh),yg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sh),Mg=new RegExp("^"+_g+vg+xg+yg+"$"),Sg=["material","materials","bones","map"];class bg{constructor(t,e,n){const i=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Te{constructor(t,e,n){this.path=e,this.parsedPath=n||Te.parseTrackName(e),this.node=Te.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Te.Composite(t,e,n):new Te(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mg,"")}static parseTrackName(t){const e=Mg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Sg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=Te.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;re("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Te.Composite=bg;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const qu=new Qt;class ep{constructor(t,e,n=0,i=1/0){this.ray=new Gs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new uh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):re("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return qu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qu),this}intersectObject(t,e=!0,n=[]){return Ic(t,this,n,e),n.sort(Yu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Ic(t[i],this,n,e);return n.sort(Yu),n}}function Yu(s,t){return s.distance-t.distance}function Ic(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Ic(r[o],t,e,!0)}}class Dc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ce(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Fi=new y,To=new Qt,dl=new Qt;class wg extends ma{constructor(t){const e=np(t),n=new Se,i=[],r=[];for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new oe(i,3)),n.setAttribute("color",new oe(r,3));const o=new Ta({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;const a=new Ot(255),l=new Ot(65280);this.setColors(a,l)}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");dl.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){const a=e[r];a.parent&&a.parent.isBone&&(To.multiplyMatrices(dl,a.matrixWorld),Fi.setFromMatrixPosition(To),i.setXYZ(o,Fi.x,Fi.y,Fi.z),To.multiplyMatrices(dl,a.parent.matrixWorld),Fi.setFromMatrixPosition(To),i.setXYZ(o+1,Fi.x,Fi.y,Fi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){const i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,t.r,t.g,t.b),i.setXYZ(r+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function np(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push(...np(s.children[e]));return t}class Tg extends Yi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ku(s,t,e,n){const i=Eg(n);switch(e){case If:return s*t;case ih:return s*t/i.components*i.byteLength;case sh:return s*t/i.components*i.byteLength;case ls:return s*t*2/i.components*i.byteLength;case rh:return s*t*2/i.components*i.byteLength;case Df:return s*t*3/i.components*i.byteLength;case Gn:return s*t*4/i.components*i.byteLength;case oh:return s*t*4/i.components*i.byteLength;case $o:case Jo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case jo:case Qo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jl:case tc:return Math.max(s,16)*Math.max(t,8)/4;case Jl:case Ql:return Math.max(s,8)*Math.max(t,8)/2;case ec:case nc:case sc:case rc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ic:case la:case oc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case lc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case cc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case hc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case uc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case dc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case fc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case pc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case mc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case gc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case _c:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case vc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case xc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case yc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Mc:case Sc:case bc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case wc:case Tc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ca:case Ec:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Eg(s){switch(s){case An:case Rf:return{byteLength:1,components:1};case Ir:case Cf:case gn:return{byteLength:2,components:1};case eh:case nh:return{byteLength:2,components:4};case qn:case th:case Fn:return{byteLength:4,components:1};case Pf:case Lf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zc}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zc);function ip(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ag(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Rg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cg=`#ifdef USE_ALPHAHASH
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
#endif`,Pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ig=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ng=`#ifdef USE_AOMAP
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
#endif`,Fg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ug=`#ifdef USE_BATCHING
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
#endif`,Og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vg=`#ifdef USE_IRIDESCENCE
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
#endif`,Hg=`#ifdef USE_BUMPMAP
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
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jg=`#define PI 3.141592653589793
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
} // validated`,jg=`vec3 transformedNormal = objectNormal;
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
#endif`,Qg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i_="gl_FragColor = linearToOutputTexel( gl_FragColor );",s_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r_=`#ifdef USE_ENVMAP
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
#endif`,o_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,a_=`#ifdef USE_ENVMAP
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
#endif`,l_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c_=`#ifdef USE_ENVMAP
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
#endif`,h_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p_=`#ifdef USE_GRADIENTMAP
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
}`,m_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,__=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,x_=`#ifdef USE_ENVMAP
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
#endif`,y_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w_=`PhysicalMaterial material;
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
#endif`,T_=`uniform sampler2D dfgLUT;
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
}`,E_=`
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
#endif`,A_=`#if defined( RE_IndirectDiffuse )
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
#endif`,R_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,P_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,U_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O_=`#if defined( USE_POINTS_UV )
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
#endif`,k_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V_=`#if defined( USE_MORPHCOLORS )
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
#endif`,H_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G_=`#ifdef USE_MORPHTARGETS
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
#endif`,W_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,q_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$_=`#ifdef USE_NORMALMAP
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
#endif`,J_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ev=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ov=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,av=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dv=`float getShadowMask() {
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
}`,fv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pv=`#ifdef USE_SKINNING
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
#endif`,mv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gv=`#ifdef USE_SKINNING
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
#endif`,_v=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mv=`#ifdef USE_TRANSMISSION
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
#endif`,Sv=`#ifdef USE_TRANSMISSION
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
#endif`,bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ev=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rv=`uniform sampler2D t2D;
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
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pv=`uniform float backgroundBlurriness;
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
}`,Lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dv=`#include <common>
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
}`,Nv=`#if DEPTH_PACKING == 3200
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
}`,Fv=`#define DISTANCE
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
}`,Uv=`#define DISTANCE
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
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bv=`uniform float scale;
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
}`,zv=`uniform vec3 diffuse;
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
}`,Vv=`#include <common>
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
}`,Hv=`uniform vec3 diffuse;
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
}`,Gv=`#define LAMBERT
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
}`,Wv=`#define LAMBERT
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
}`,Xv=`#define MATCAP
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
}`,qv=`#define MATCAP
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
}`,Yv=`#define NORMAL
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
}`,Kv=`#define NORMAL
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
}`,Zv=`#define PHONG
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
}`,$v=`#define PHONG
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
}`,Jv=`#define STANDARD
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
}`,jv=`#define STANDARD
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
}`,Qv=`#define TOON
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
}`,tx=`#define TOON
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
}`,ex=`uniform float size;
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#include <common>
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
}`,sx=`uniform vec3 color;
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
}`,rx=`uniform float rotation;
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
}`,ox=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:Rg,alphahash_pars_fragment:Cg,alphamap_fragment:Pg,alphamap_pars_fragment:Lg,alphatest_fragment:Ig,alphatest_pars_fragment:Dg,aomap_fragment:Ng,aomap_pars_fragment:Fg,batching_pars_vertex:Ug,batching_vertex:Og,begin_vertex:kg,beginnormal_vertex:Bg,bsdfs:zg,iridescence_fragment:Vg,bumpmap_pars_fragment:Hg,clipping_planes_fragment:Gg,clipping_planes_pars_fragment:Wg,clipping_planes_pars_vertex:Xg,clipping_planes_vertex:qg,color_fragment:Yg,color_pars_fragment:Kg,color_pars_vertex:Zg,color_vertex:$g,common:Jg,defaultnormal_vertex:jg,displacementmap_pars_vertex:Qg,displacementmap_vertex:t_,emissivemap_fragment:e_,emissivemap_pars_fragment:n_,colorspace_fragment:i_,colorspace_pars_fragment:s_,envmap_fragment:r_,envmap_common_pars_fragment:o_,envmap_pars_fragment:a_,envmap_pars_vertex:l_,envmap_physical_pars_fragment:x_,envmap_vertex:c_,fog_vertex:h_,fog_pars_vertex:u_,fog_fragment:d_,fog_pars_fragment:f_,gradientmap_pars_fragment:p_,lightmap_pars_fragment:m_,lights_lambert_fragment:g_,lights_lambert_pars_fragment:__,lights_pars_begin:v_,lights_toon_fragment:y_,lights_toon_pars_fragment:M_,lights_phong_fragment:S_,lights_phong_pars_fragment:b_,lights_physical_fragment:w_,lights_physical_pars_fragment:T_,lights_fragment_begin:E_,lights_fragment_maps:A_,lights_fragment_end:R_,lightprobes_pars_fragment:C_,logdepthbuf_fragment:P_,logdepthbuf_pars_fragment:L_,logdepthbuf_pars_vertex:I_,logdepthbuf_vertex:D_,map_fragment:N_,map_pars_fragment:F_,map_particle_fragment:U_,map_particle_pars_fragment:O_,metalnessmap_fragment:k_,metalnessmap_pars_fragment:B_,morphinstance_vertex:z_,morphcolor_vertex:V_,morphnormal_vertex:H_,morphtarget_pars_vertex:G_,morphtarget_vertex:W_,normal_fragment_begin:X_,normal_fragment_maps:q_,normal_pars_fragment:Y_,normal_pars_vertex:K_,normal_vertex:Z_,normalmap_pars_fragment:$_,clearcoat_normal_fragment_begin:J_,clearcoat_normal_fragment_maps:j_,clearcoat_pars_fragment:Q_,iridescence_pars_fragment:tv,opaque_fragment:ev,packing:nv,premultiplied_alpha_fragment:iv,project_vertex:sv,dithering_fragment:rv,dithering_pars_fragment:ov,roughnessmap_fragment:av,roughnessmap_pars_fragment:lv,shadowmap_pars_fragment:cv,shadowmap_pars_vertex:hv,shadowmap_vertex:uv,shadowmask_pars_fragment:dv,skinbase_vertex:fv,skinning_pars_vertex:pv,skinning_vertex:mv,skinnormal_vertex:gv,specularmap_fragment:_v,specularmap_pars_fragment:vv,tonemapping_fragment:xv,tonemapping_pars_fragment:yv,transmission_fragment:Mv,transmission_pars_fragment:Sv,uv_pars_fragment:bv,uv_pars_vertex:wv,uv_vertex:Tv,worldpos_vertex:Ev,background_vert:Av,background_frag:Rv,backgroundCube_vert:Cv,backgroundCube_frag:Pv,cube_vert:Lv,cube_frag:Iv,depth_vert:Dv,depth_frag:Nv,distance_vert:Fv,distance_frag:Uv,equirect_vert:Ov,equirect_frag:kv,linedashed_vert:Bv,linedashed_frag:zv,meshbasic_vert:Vv,meshbasic_frag:Hv,meshlambert_vert:Gv,meshlambert_frag:Wv,meshmatcap_vert:Xv,meshmatcap_frag:qv,meshnormal_vert:Yv,meshnormal_frag:Kv,meshphong_vert:Zv,meshphong_frag:$v,meshphysical_vert:Jv,meshphysical_frag:jv,meshtoon_vert:Qv,meshtoon_frag:tx,points_vert:ex,points_frag:nx,shadow_vert:ix,shadow_frag:sx,sprite_vert:rx,sprite_frag:ox},Nt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},ii={basic:{uniforms:pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:pn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:pn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:pn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:pn([Nt.points,Nt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:pn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:pn([Nt.common,Nt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:pn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:pn([Nt.sprite,Nt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:pn([Nt.common,Nt.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:pn([Nt.lights,Nt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};ii.physical={uniforms:pn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const Eo={r:0,b:0,g:0},ax=new Qt,sp=new ee;sp.set(-1,0,0,0,1,0,0,0,1);function lx(s,t,e,n,i,r){const o=new Ot(0);let a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const E=M.backgroundBlurriness>0;T=t.get(T,E)}return T}function g(M){let T=!1;const E=f(M);E===null?p(o,a):E&&E.isColor&&(p(E,1),T=!0);const x=s.xr.getEnvironmentBlendMode();x==="additive"?e.buffers.color.setClear(0,0,0,1,r):x==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(M,T){const E=f(T);E&&E.isCubeTexture?(c===void 0&&(c=new _e(new Xr(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Vs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ax.makeRotationFromEuler(T.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sp),c.material.toneMapped=pe.getTransfer(E.colorSpace)!==we,(h!==E||u!==E.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=E,u=E.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new _e(new fs(2,2),new mn({name:"BackgroundMaterial",uniforms:Vs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=pe.getTransfer(E.colorSpace)!==we,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||u!==E.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=E,u=E.version,d=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,T){M.getRGB(Eo,Zf(s)),e.buffers.color.setClear(Eo.r,Eo.g,Eo.b,T,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),a=T,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(o,a)},render:g,addToRenderList:v,dispose:m}}function cx(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(I,L,F,b,D){let U=!1;const O=u(I,b,F,L);r!==O&&(r=O,c(r.object)),U=f(I,b,F,D),U&&g(I,b,F,D),D!==null&&t.update(D,s.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,E(I,L,F,b),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function u(I,L,F,b){const D=b.wireframe===!0;let U=n[L.id];U===void 0&&(U={},n[L.id]=U);const O=I.isInstancedMesh===!0?I.id:0;let q=U[O];q===void 0&&(q={},U[O]=q);let V=q[F.id];V===void 0&&(V={},q[F.id]=V);let H=V[D];return H===void 0&&(H=d(l()),V[D]=H),H}function d(I){const L=[],F=[],b=[];for(let D=0;D<e;D++)L[D]=0,F[D]=0,b[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:b,object:I,attributes:{},index:null}}function f(I,L,F,b){const D=r.attributes,U=L.attributes;let O=0;const q=F.getAttributes();for(const V in q)if(q[V].location>=0){const Y=D[V];let at=U[V];if(at===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(at=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(at=I.instanceColor)),Y===void 0||Y.attribute!==at||at&&Y.data!==at.data)return!0;O++}return r.attributesNum!==O||r.index!==b}function g(I,L,F,b){const D={},U=L.attributes;let O=0;const q=F.getAttributes();for(const V in q)if(q[V].location>=0){let Y=U[V];Y===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));const at={};at.attribute=Y,Y&&Y.data&&(at.data=Y.data),D[V]=at,O++}r.attributes=D,r.attributesNum=O,r.index=b}function v(){const I=r.newAttributes;for(let L=0,F=I.length;L<F;L++)I[L]=0}function p(I){m(I,0)}function m(I,L){const F=r.newAttributes,b=r.enabledAttributes,D=r.attributeDivisors;F[I]=1,b[I]===0&&(s.enableVertexAttribArray(I),b[I]=1),D[I]!==L&&(s.vertexAttribDivisor(I,L),D[I]=L)}function M(){const I=r.newAttributes,L=r.enabledAttributes;for(let F=0,b=L.length;F<b;F++)L[F]!==I[F]&&(s.disableVertexAttribArray(F),L[F]=0)}function T(I,L,F,b,D,U,O){O===!0?s.vertexAttribIPointer(I,L,F,D,U):s.vertexAttribPointer(I,L,F,b,D,U)}function E(I,L,F,b){v();const D=b.attributes,U=F.getAttributes(),O=L.defaultAttributeValues;for(const q in U){const V=U[q];if(V.location>=0){let H=D[q];if(H===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(H=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(H=I.instanceColor)),H!==void 0){const Y=H.normalized,at=H.itemSize,Q=t.get(H);if(Q===void 0)continue;const k=Q.buffer,Z=Q.type,X=Q.bytesPerElement,ct=Z===s.INT||Z===s.UNSIGNED_INT||H.gpuType===th;if(H.isInterleavedBufferAttribute){const J=H.data,tt=J.isInterleavedBuffer===!0?J.stride:J.itemSize,ot=H.offset;if(J.isInstancedInterleavedBuffer||J.isInstancedBufferAttribute){for(let ft=0;ft<V.locationSize;ft++)m(V.location+ft,J.meshPerAttribute);I.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ft=0;ft<V.locationSize;ft++)p(V.location+ft);s.bindBuffer(s.ARRAY_BUFFER,k);for(let ft=0;ft<V.locationSize;ft++)T(V.location+ft,at/V.locationSize,Z,Y,tt*X,(ot+at/V.locationSize*ft)*X,ct)}else{if(H.isInstancedBufferAttribute){for(let J=0;J<V.locationSize;J++)m(V.location+J,H.meshPerAttribute);I.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let J=0;J<V.locationSize;J++)p(V.location+J);s.bindBuffer(s.ARRAY_BUFFER,k);for(let J=0;J<V.locationSize;J++)T(V.location+J,at/V.locationSize,Z,Y,at*X,at/V.locationSize*J*X,ct)}}else if(O!==void 0){const Y=O[q];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(V.location,Y);break;case 3:s.vertexAttrib3fv(V.location,Y);break;case 4:s.vertexAttrib4fv(V.location,Y);break;default:s.vertexAttrib1fv(V.location,Y)}}}}M()}function x(){N();for(const I in n){const L=n[I];for(const F in L){const b=L[F];for(const D in b){const U=b[D];for(const O in U)h(U[O].object),delete U[O];delete b[D]}}delete n[I]}}function A(I){if(n[I.id]===void 0)return;const L=n[I.id];for(const F in L){const b=L[F];for(const D in b){const U=b[D];for(const O in U)h(U[O].object),delete U[O];delete b[D]}}delete n[I.id]}function _(I){for(const L in n){const F=n[L];for(const b in F){const D=F[b];if(D[I.id]===void 0)continue;const U=D[I.id];for(const O in U)h(U[O].object),delete U[O];delete D[I.id]}}}function w(I){for(const L in n){const F=n[L],b=I.isInstancedMesh===!0?I.id:0,D=F[b];if(D!==void 0){for(const U in D){const O=D[U];for(const q in O)h(O[q].object),delete O[q];delete D[U]}delete F[b],Object.keys(F).length===0&&delete n[L]}}}function N(){C(),o=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:N,resetDefaultState:C,dispose:x,releaseStatesOfGeometry:A,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:p,disableUnusedAttributes:M}}function hx(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ux(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const _=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(_){return!(_!==Gn&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){const w=_===gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==An&&_!==Fn&&!w&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Jt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Jt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:E,maxSamples:x,samples:A}}function dx(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new En,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const M=r?0:n,T=M*4;let E=m.clippingState||null;l.value=E,E=h(g,d,T,f);for(let x=0;x!==T;++x)E[x]=e[x];m.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=f+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,E=f;T!==v;++T,E+=4)o.copy(u[T]).applyMatrix4(M,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}class bh extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new qf(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Xr(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Ns});r.uniforms.tEquirect.value=e;const o=new _e(i,r),a=e.minFilter;return e.minFilter===oi&&(e.minFilter=Qe),new Lc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Zu=256,fx=3,px=20,rp=256,op=16,mx=3,gx=new y,_x=new Ot;class zr{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Lc(1,10,null),this._boxMesh=new _e(new Xr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=gx}=r,l=this._renderer;this._setSize(o);const c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);const u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,v=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(t.background=l.getClearColor(_x));const p=new Lc(n,i,h);return p.position.copy(a),p.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,t.background=v,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Zu,zf(t))}_fromTexture(t,e){t.mapping===ks||t.mapping===Lr?this._setSize(t.image.length===0?Zu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){const t=this._cubeSize,e=$u(t,!1,!1),n=Math.log2(t)-fx;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){const e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=$u(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){const i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;const o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ks||t.mapping===Lr?(this._cubemapMaterial===null&&(this._cubemapMaterial=ju()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ju()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=vx(),this._integrationMaterial=xx());const e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/op);for(let o=0;o<=n;o++){const a=zr.lodToRoughness(o,n);if(o>n-mx)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{const l=a>0?Math.log2(e)+.5*Math.log2(6/(rp*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=yx());const n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}}function $u(s,t,e){return new bh(s,{minFilter:oi,generateMipmaps:t,type:gn,colorSpace:Sn,depthBuffer:e})}function Yr(s,t,e){return new mn({name:s,uniforms:t,vertexShader:ue.cube_vert,fragmentShader:e,side:un,blending:Ns,depthTest:!1,depthWrite:!1})}function vx(){return Yr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${rp}u

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
	`)}function xx(){return Yr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:op}},`

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
	`)}function yx(){return Yr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${px}
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
	`)}function Ju(){return Yr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function ju(){return Yr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Mx(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Na||f===Fa)if(t.has(d)){const g=t.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new bh(g.height);return v.fromEquirectangularTexture(s,d),t.set(d,v),d.addEventListener("dispose",c),a(v.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,g=f===Na||f===Fa,v=f===ks||f===Lr;if(g||v){let p=e.get(d);const m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new zr(s)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const M=d.image;return g&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new zr(s)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function a(d,f){return f===Na?d.mapping=ks:f===Fa&&(d.mapping=Lr),d}function l(d){let f=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){const f=d.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(d){const f=d.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Sx(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Fs("WebGLRenderer: "+n+" extension not supported."),i}}}function bx(s,t,e,n){const i={},r=new WeakMap,o=new FinalizationRegistry(g=>delete i[g]);function a(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(const p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",a),delete i[g.id],o.unregister(g);const v=r.get(g);v&&(t.remove(v),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,v){return i[v.id]!==void 0||(v.addEventListener("dispose",a),i[v.id]=new WeakRef(v),o.register(v,v.id,v),e.memory.geometries++),v}function h(g){const v=g.attributes;for(const p in v)t.update(v[p],s.ARRAY_BUFFER)}function u(g){const v=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const M=v!==null?v.array.length:p.array.length/3-1,T=p.count>=65535?Gf:Sa,E=new T(Math.ceil(M/3)*6,1),x=E.array;if(v!==null){const _=v.array;m=v.version;for(let w=0,N=0;w<M;w+=3){const C=_[w+0],I=_[w+1],L=_[w+2];x[N++]=C,x[N++]=I,x[N++]=I,x[N++]=L,x[N++]=L,x[N++]=C}}else{m=p.version;for(let _=0,w=0;_<M;_+=3){const N=_+0,C=_+1,I=_+2;x[w++]=N,x[w++]=C,x[w++]=C,x[w++]=I,x[w++]=I,x[w++]=N}}E.version=m;const A=r.get(g);A&&t.remove(A),r.set(g,E)}function d(g){const v=r.get(g);if(v){const p=g.index;p!==null&&v.version<p.version&&u(g)}else u(g);return r.get(g)}function f(){for(const g in i){const v=i[g].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function wx(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let p=0;p<f;p++)v+=d[p];e.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Tx(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:re("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ex(s,t,e){const n=new WeakMap,i=new Re;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let C=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",C)};var f=C;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),p===!0&&(E=3);let x=a.attributes.position.count*E,A=1;x>t.maxTextureSize&&(A=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const _=new Float32Array(x*A*4*u),w=new Vf(_,x,A,u);w.type=Fn,w.needsUpdate=!0;const N=E*4;for(let I=0;I<u;I++){const L=m[I],F=M[I],b=T[I],D=x*A*4*I;for(let U=0;U<L.count;U++){const O=U*N;g===!0&&(i.fromBufferAttribute(L,U),_[D+O+0]=i.x,_[D+O+1]=i.y,_[D+O+2]=i.z,_[D+O+3]=0),v===!0&&(i.fromBufferAttribute(F,U),_[D+O+4]=i.x,_[D+O+5]=i.y,_[D+O+6]=i.z,_[D+O+7]=0),p===!0&&(i.fromBufferAttribute(b,U),_[D+O+8]=i.x,_[D+O+9]=i.y,_[D+O+10]=i.z,_[D+O+11]=b.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new Ht(x,A)},n.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Ax(s,t,e,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const Rx={[bf]:"LINEAR_TONE_MAPPING",[$c]:"REINHARD_TONE_MAPPING",[wf]:"CINEON_TONE_MAPPING",[Jc]:"ACES_FILMIC_TONE_MAPPING",[jc]:"AGX_TONE_MAPPING",[Qc]:"NEUTRAL_TONE_MAPPING",[Tf]:"CUSTOM_TONE_MAPPING"};function Cx(s,t,e,n,i,r){const o=new nn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null,c=null;const h=new Se;h.setAttribute("position",new oe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new oe([0,2,0,0,2,0],2));const u=new zm({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new _e(h,u),f=new Aa(-1,1,1,-1,0,1);let g=null,v=null,p=!1,m,M=null,T=[],E=!1;this.setSize=function(x,A){o.setSize(x,A),a!==null&&a.setSize(x,A),l!==null&&l.setSize(x,A);for(let _=0;_<T.length;_++){const w=T[_];w.setSize&&w.setSize(x,A)}},this.setEffects=function(x){T=x,E=T.length>0&&T[0].isRenderPass===!0;const A=o.width,_=o.height;T.length>0&&a===null&&(a=new nn(A,_,{type:gn,depthBuffer:!1,stencilBuffer:!1}),l=new nn(A,_,{type:gn,depthBuffer:!1,stencilBuffer:!1}));const w=i===!0&&T.some(N=>N.needsDepthTexture===!0);w!==(o.depthTexture!==null)&&(w===!0&&c===null&&(c=new cs(A,_),r===!0&&(c.format=Hi,c.type=Bs)),o.dispose(),o.depthTexture=w?c:null,o.resolveDepthBuffer=w,o.storeMultisampledDepthBuffer=w);for(let N=0;N<T.length;N++){const C=T[N];C.setSize&&C.setSize(A,_),w&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(x,A){if(p||x.toneMapping===ai&&T.length===0)return!1;if(M=A,A!==null){const _=A.width,w=A.height;(o.width!==_||o.height!==w)&&this.setSize(_,w)}return E===!1&&x.setRenderTarget(o),m=x.toneMapping,x.toneMapping=ai,!0},this.hasRenderPass=function(){return E},this.end=function(x,A){x.toneMapping=m,p=!0;let _=o,w=a;for(let N=0;N<T.length;N++){const C=T[N];C.enabled!==!1&&(C.render(x,w,_,A),C.needsSwap!==!1&&(_=w,w=w===a?l:a))}if(g!==x.outputColorSpace||v!==x.toneMapping){g=x.outputColorSpace,v=x.toneMapping,u.defines={},pe.getTransfer(g)===we&&(u.defines.SRGB_TRANSFER="");const N=Rx[v];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,x.setRenderTarget(M),x.render(d,f),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}const ap=new qe,lp=new cs(1,1),cp=new Yf(1),hp=new Vf,up=new dm,dp=new qf,Qu=[],td=[],ed=new Float32Array(16),nd=new Float32Array(9),id=new Float32Array(4);function Ks(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Qu[i];if(r===void 0&&(r=new Float32Array(i),Qu[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ke(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ra(s,t){let e=td[t];e===void 0&&(e=new Int32Array(t),td[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Px(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Lx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2fv(this.addr,t),Ke(e,t)}}function Ix(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;s.uniform3fv(this.addr,t),Ke(e,t)}}function Dx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4fv(this.addr,t),Ke(e,t)}}function Nx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Ye(e,n))return;id.set(n),s.uniformMatrix2fv(this.addr,!1,id),Ke(e,n)}}function Fx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Ye(e,n))return;nd.set(n),s.uniformMatrix3fv(this.addr,!1,nd),Ke(e,n)}}function Ux(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Ye(e,n))return;ed.set(n),s.uniformMatrix4fv(this.addr,!1,ed),Ke(e,n)}}function Ox(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function kx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2iv(this.addr,t),Ke(e,t)}}function Bx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;s.uniform3iv(this.addr,t),Ke(e,t)}}function zx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4iv(this.addr,t),Ke(e,t)}}function Vx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Hx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;s.uniform2uiv(this.addr,t),Ke(e,t)}}function Gx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;s.uniform3uiv(this.addr,t),Ke(e,t)}}function Wx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;s.uniform4uiv(this.addr,t),Ke(e,t)}}function Ca(s){return s.version===0&&(s.compareFunction=Of,s.needsUpdate=!0),s}function Xx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Ca(lp):r=ap,e.setTexture2D(t||r,i)}function qx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||up,i)}function Yx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Ca(cp):r=dp,e.setTextureCube(t||r,i)}function Kx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||hp,i)}function Zx(s){switch(s){case 5126:return Px;case 35664:return Lx;case 35665:return Ix;case 35666:return Dx;case 35674:return Nx;case 35675:return Fx;case 35676:return Ux;case 5124:case 35670:return Ox;case 35667:case 35671:return kx;case 35668:case 35672:return Bx;case 35669:case 35673:return zx;case 5125:return Vx;case 36294:return Hx;case 36295:return Gx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return qx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return Kx}}function $x(s,t){s.uniform1fv(this.addr,t)}function Jx(s,t){const e=Ks(t,this.size,2);s.uniform2fv(this.addr,e)}function jx(s,t){const e=Ks(t,this.size,3);s.uniform3fv(this.addr,e)}function Qx(s,t){const e=Ks(t,this.size,4);s.uniform4fv(this.addr,e)}function ty(s,t){const e=Ks(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ey(s,t){const e=Ks(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ny(s,t){const e=Ks(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function iy(s,t){s.uniform1iv(this.addr,t)}function sy(s,t){s.uniform2iv(this.addr,t)}function ry(s,t){s.uniform3iv(this.addr,t)}function oy(s,t){s.uniform4iv(this.addr,t)}function ay(s,t){s.uniform1uiv(this.addr,t)}function ly(s,t){s.uniform2uiv(this.addr,t)}function cy(s,t){s.uniform3uiv(this.addr,t)}function hy(s,t){s.uniform4uiv(this.addr,t)}function uy(s,t,e){const n=this.cache,i=t.length,r=Ra(e,i);Ye(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Ca(lp):o=ap;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function dy(s,t,e){const n=this.cache,i=t.length,r=Ra(e,i);Ye(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||up,r[o])}function fy(s,t,e){const n=this.cache,i=t.length,r=Ra(e,i);Ye(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Ca(cp):o=dp;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function py(s,t,e){const n=this.cache,i=t.length,r=Ra(e,i);Ye(n,r)||(s.uniform1iv(this.addr,r),Ke(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||hp,r[o])}function my(s){switch(s){case 5126:return $x;case 35664:return Jx;case 35665:return jx;case 35666:return Qx;case 35674:return ty;case 35675:return ey;case 35676:return ny;case 5124:case 35670:return iy;case 35667:case 35671:return sy;case 35668:case 35672:return ry;case 35669:case 35673:return oy;case 5125:return ay;case 36294:return ly;case 36295:return cy;case 36296:return hy;case 35678:case 36198:case 36298:case 36306:case 35682:return uy;case 35679:case 36299:case 36307:return dy;case 35680:case 36300:case 36308:case 36293:return fy;case 36289:case 36303:case 36311:case 36292:return py}}class gy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zx(e.type)}}class _y{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=my(e.type)}}class vy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const fl=/(\w+)(\])?(\[|\.)?/g;function sd(s,t){s.seq.push(t),s.map[t.id]=t}function xy(s,t,e){const n=s.name,i=n.length;for(fl.lastIndex=0;;){const r=fl.exec(n),o=fl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){sd(e,c===void 0?new gy(a,s,t):new _y(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new vy(a),sd(e,u)),e=u}}}class ta{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);xy(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function rd(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const yy=37297;let My=0;function Sy(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const od=new ee;function by(s){pe._getMatrix(od,pe.workingColorSpace,s);const t=`mat3( ${od.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(s)){case ha:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ad(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Sy(s.getShaderSource(t),a)}else return r}function wy(s,t){const e=by(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Ty={[bf]:"Linear",[$c]:"Reinhard",[wf]:"Cineon",[Jc]:"ACESFilmic",[jc]:"AgX",[Qc]:"Neutral",[Tf]:"Custom"};function Ey(s,t){const e=Ty[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ao=new y;function Ay(){pe.getLuminanceCoefficients(Ao);const s=Ao.x.toFixed(4),t=Ao.y.toFixed(4),e=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ry(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function Cy(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Py(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function vr(s){return s!==""}function ld(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function cd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ly=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(s){return s.replace(Ly,Iy)}function Iy(s,t){const e=ue[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Nc(e)}const Dy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hd(s){return s.replace(Dy,Ny)}function Ny(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ud(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Fy={[Sr]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function Uy(s){return Fy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Oy={[Lr]:"ENVMAP_MODE_REFRACTION"};function ky(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Oy[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const By={[Sf]:"ENVMAP_BLENDING_MULTIPLY",[R0]:"ENVMAP_BLENDING_MIX",[C0]:"ENVMAP_BLENDING_ADD"};function zy(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":By[s.combine]||"ENVMAP_BLENDING_NONE"}function Vy(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Uy(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ky(e),u=zy(e),d=Ry(e),f=Cy(r),g=i.createProgram();let v,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(vr).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(vr).join(`
`),p.length>0&&(p+=`
`)):(v=[ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),p=[ud(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?ue.tonemapping_pars_fragment:"",e.toneMapping!==ai?Ey("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,wy("linearToOutputTexel",e.outputColorSpace),Ay(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vr).join(`
`)),o=Nc(o),o=ld(o,e),o=cd(o,e),a=Nc(a),a=ld(a,e),a=cd(a,e),o=hd(o),a=hd(a),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",e.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=m+v+o,T=m+p+a,E=rd(i,i.VERTEX_SHADER,M),x=rd(i,i.FRAGMENT_SHADER,T);i.attachShader(g,E),i.attachShader(g,x),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(C){if(s.debug.checkShaderErrors){const I=i.getProgramInfoLog(g)||"",L=i.getShaderInfoLog(E)||"",F=i.getShaderInfoLog(x)||"",b=I.trim(),D=L.trim(),U=F.trim();let O=!0,q=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,E,x);else{const V=ad(i,E,"vertex"),H=ad(i,x,"fragment");re("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+b+`
`+V+`
`+H)}else b!==""?Jt("WebGLProgram: Program Info Log:",b):(D===""||U==="")&&(q=!1);q&&(C.diagnostics={runnable:O,programLog:b,vertexShader:{log:D,prefix:v},fragmentShader:{log:U,prefix:p}})}i.deleteShader(E),i.deleteShader(x),_=new ta(i,g),w=Py(i,g)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(g,yy)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=My++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=x,this}let Hy=0;class Gy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Wy(t),e.set(t,n)),n}}class Wy{constructor(t){this.id=Hy++,this.code=t,this.usedTimes=0}}function Xy(s){return s===ls||s===la||s===ca}function qy(s,t,e,n,i,r){const o=new uh,a=new Gy,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,w,N,C,I,L){const F=C.fog,b=I.geometry,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=t.get(_.envMap||D,U),q=d[_.type];let V=n.precision;_.precision!==null&&(V=n.getMaxPrecision(_.precision),V!==_.precision&&Jt("WebGLProgram.getParameters:",_.precision,"not supported, using",V,"instead."));const H=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,Y=H!==void 0?H.length:0;let at=0;b.morphAttributes.position!==void 0&&(at=1),b.morphAttributes.normal!==void 0&&(at=2),b.morphAttributes.color!==void 0&&(at=3);let Q,k,Z,X;if(q){const Dt=ii[q];Q=Dt.vertexShader,k=Dt.fragmentShader}else{Q=_.vertexShader,k=_.fragmentShader;const Dt=a.getVertexShaderStage(_),be=a.getFragmentShaderStage(_);a.update(_,Dt,be),Z=Dt.id,X=be.id}const ct=s.getRenderTarget(),J=s.state.buffers.depth.getReversed(),tt=I.isInstancedMesh===!0,ot=I.isBatchedMesh===!0,ft=!!_.map,Rt=!!_.matcap,Bt=!!O,kt=Bt&&O.isPMREMTexture===!0,ie=!!_.aoMap,wt=!!_.lightMap,Ct=!!_.bumpMap&&_.wireframe===!1,Lt=!!_.normalMap,Gt=!!_.displacementMap,Wt=!!_.emissiveMap,it=!!_.metalnessMap,yt=!!_.roughnessMap,Ft=_.anisotropy>0,B=_.clearcoat>0,se=_.diffuseRoughness>0,zt=_.dispersion>0,Xt=_.retroreflectivity>0,pt=_.iridescence>0,de=_.sheen>0,Vt=_.transmission>0,Zt=Ft&&!!_.anisotropyMap,P=B&&!!_.clearcoatMap,S=B&&!!_.clearcoatNormalMap,G=B&&!!_.clearcoatRoughnessMap,ut=se&&!!_.diffuseRoughnessMap,rt=pt&&!!_.iridescenceMap,mt=pt&&!!_.iridescenceThicknessMap,gt=de&&!!_.sheenColorMap,st=de&&!!_.sheenRoughnessMap,ht=!!_.specularMap,St=!!_.specularColorMap,z=!!_.specularIntensityMap,dt=Vt&&!!_.transmissionMap,lt=Vt&&!!_.thicknessMap,bt=!!_.gradientMap,xt=!!_.alphaMap,Mt=_.alphaTest>0,jt=!!_.alphaHash,he=!!_.extensions;let vt=ai;_.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(vt=s.toneMapping);const te=kt?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,le={shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:Q,fragmentShader:k,defines:_.defines,customVertexShaderID:Z,customFragmentShaderID:X,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:V,batching:ot,batchingColor:ot&&I._colorsTexture!==null,instancing:tt,instancingColor:tt&&I.instanceColor!==null,instancingMorph:tt&&I.morphTexture!==null,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ft,matcap:Rt,envMap:Bt,envMapMode:Bt&&O.mapping,envMapPMREM:kt,envMapMaxLod:kt?te.length-1:null,envMapSize:kt?te[0].width:null,aoMap:ie,lightMap:wt,bumpMap:Ct,normalMap:Lt,displacementMap:Gt,emissiveMap:Wt,normalMapObjectSpace:Lt&&_.normalMapType===N0,normalMapTangentSpace:Lt&&_.normalMapType===Rc,packedNormalMap:Lt&&_.normalMapType===Rc&&Xy(_.normalMap.format),metalnessMap:it,roughnessMap:yt,anisotropy:Ft,anisotropyMap:Zt,clearcoat:B,clearcoatMap:P,clearcoatNormalMap:S,clearcoatRoughnessMap:G,diffuseRoughness:se,diffuseRoughnessMap:ut,dispersion:zt,retroreflection:Xt,iridescence:pt,iridescenceMap:rt,iridescenceThicknessMap:mt,sheen:de,sheenColorMap:gt,sheenRoughnessMap:st,specularMap:ht,specularColorMap:St,specularIntensityMap:z,transmission:Vt,transmissionMap:dt,thicknessMap:lt,gradientMap:bt,opaque:_.transparent===!1&&_.blending===br&&_.alphaToCoverage===!1,alphaMap:xt,alphaTest:Mt,alphaHash:jt,combine:_.combine,mapUv:ft&&f(_.map.channel),aoMapUv:ie&&f(_.aoMap.channel),lightMapUv:wt&&f(_.lightMap.channel),bumpMapUv:Ct&&f(_.bumpMap.channel),normalMapUv:Lt&&f(_.normalMap.channel),displacementMapUv:Gt&&f(_.displacementMap.channel),emissiveMapUv:Wt&&f(_.emissiveMap.channel),metalnessMapUv:it&&f(_.metalnessMap.channel),roughnessMapUv:yt&&f(_.roughnessMap.channel),anisotropyMapUv:Zt&&f(_.anisotropyMap.channel),clearcoatMapUv:P&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ut&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:rt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:st&&f(_.sheenRoughnessMap.channel),specularMapUv:ht&&f(_.specularMap.channel),specularColorMapUv:St&&f(_.specularColorMap.channel),specularIntensityMapUv:z&&f(_.specularIntensityMap.channel),transmissionMapUv:dt&&f(_.transmissionMap.channel),thicknessMapUv:lt&&f(_.thicknessMap.channel),alphaMapUv:xt&&f(_.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(Lt||Ft),vertexNormals:!!b.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!b.attributes.uv&&(ft||xt),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||b.attributes.normal===void 0&&Lt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:J,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:b.attributes.position!==void 0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:at,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:L.filter(Dt=>Dt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:vt,decodeVideoTexture:ft&&_.map.isVideoTexture===!0&&pe.getTransfer(_.map.colorSpace)===we,decodeVideoTextureEmissive:Wt&&_.emissiveMap.isVideoTexture===!0&&pe.getTransfer(_.emissiveMap.colorSpace)===we,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ze,flipSided:_.side===un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:he&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&_.extensions.multiDraw===!0||ot)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return le.vertexUv1s=l.has(1),le.vertexUv2s=l.has(2),le.vertexUv3s=l.has(3),l.clear(),le}function v(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const N in _.defines)w.push(N),w.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(p(w,_),m(w,_),w.push(s.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function m(_,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.diffuseRoughness&&o.enable(25),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function M(_){const w=d[_.type];let N;if(w){const C=ii[w];N=Om.clone(C.uniforms)}else N=_.uniforms;return N}function T(_,w){let N=h.get(w);return N!==void 0?++N.usedTimes:(N=new Vy(s,w,_,i),c.push(N),h.set(w,N)),N}function E(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function x(_){a.remove(_)}function A(){a.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:M,acquireProgram:T,releaseProgram:E,releaseShaderCache:x,programs:c,dispose:A}}function Yy(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Ky(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function dd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function fd(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,g,v,p,m){let M=s[t];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:o(d),groupOrder:v,renderOrder:d.renderOrder,z:p,group:m},s[t]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=o(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=p,M.group=m),t++,M}function l(d,f,g,v,p,m,M){M.reversedDepth===!0&&(p=-p);const T=a(d,f,g,v,p,m);g.transmission>0?n.push(T):g.transparent===!0?i.push(T):e.push(T)}function c(d,f,g,v,p,m){const M=a(d,f,g,v,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?i.unshift(M):e.unshift(M)}function h(d,f){e.length>1&&e.sort(d||Ky),n.length>1&&n.sort(f||dd),i.length>1&&i.sort(f||dd)}function u(){for(let d=t,f=s.length;d<f;d++){const g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function Zy(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new fd,s.set(n,[o])):i>=r.length?(o=new fd,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function $y(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new y,color:new Ot};break;case"SpotLight":e={position:new y,direction:new y,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new y,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new y,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new y,halfWidth:new y,halfHeight:new y};break}return s[t.id]=e,e}}}function Jy(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let jy=0;function Qy(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function tM(s){const t=new $y,e=Jy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new y);const i=new y,r=new Qt,o=new Qt;function a(c){let h=0,u=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,v=0,p=0,m=0,M=0,T=0,E=0,x=0,A=0,_=0,w=0,N=0,C=0;c.sort(Qy);for(let L=0,F=c.length;L<F;L++){const b=c[L],D=b.color,U=b.intensity,O=b.distance;let q=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===ls?q=b.shadow.map.texture:q=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)h+=D.r*U,u+=D.g*U,d+=D.b*U;else if(b.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(b.sh.coefficients[V],U);C++}else if(b.isSunLight){const V=t.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const H=b.shadow,Y=e.get(b);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[g]=Y,n.sunShadowMap[g]=q;const at=H.getViewportCount();for(let Q=0;Q<at;Q++)n.sunShadowMatrix[v+Q]=H.getMatrix(Q),n.sunShadowCascade[v+Q]=H._cascadeData[Q];v+=at,g++}n.sun[f]=V,f++}else if(b.isDirectionalLight){const V=t.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const H=b.shadow,Y=e.get(b);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=b.shadow.matrix,x++}n.directional[p]=V,p++}else if(b.isSpotLight){const V=t.get(b);V.position.setFromMatrixPosition(b.matrixWorld),V.color.copy(D).multiplyScalar(U),V.distance=O,V.coneCos=Math.cos(b.angle),V.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),V.decay=b.decay,n.spot[M]=V;const H=b.shadow;if(b.map&&(n.spotLightMap[w]=b.map,w++,H.updateMatrices(b),b.castShadow&&N++),n.spotLightMatrix[M]=H.matrix,b.castShadow){const Y=e.get(b);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,n.spotShadow[M]=Y,n.spotShadowMap[M]=q,_++}M++}else if(b.isRectAreaLight){const V=t.get(b);V.color.copy(D).multiplyScalar(U),V.halfWidth.set(b.width*.5,0,0),V.halfHeight.set(0,b.height*.5,0),n.rectArea[T]=V,T++}else if(b.isPointLight){const V=t.get(b);if(V.color.copy(b.color).multiplyScalar(b.intensity),V.distance=b.distance,V.decay=b.decay,b.castShadow){const H=b.shadow,Y=e.get(b);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,Y.shadowCameraNear=H.camera.near,Y.shadowCameraFar=H.camera.far,n.pointShadow[m]=Y,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=b.shadow.matrix,A++}n.point[m]=V,m++}else if(b.isHemisphereLight){const V=t.get(b);V.skyColor.copy(b.color).multiplyScalar(U),V.groundColor.copy(b.groundColor).multiplyScalar(U),n.hemi[E]=V,E++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.sunLength!==f||I.directionalLength!==p||I.pointLength!==m||I.spotLength!==M||I.rectAreaLength!==T||I.hemiLength!==E||I.numSunShadows!==g||I.numDirectionalShadows!==x||I.numPointShadows!==A||I.numSpotShadows!==_||I.numSpotMaps!==w||I.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=T,n.point.length=m,n.hemi.length=E,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.directionalShadowMatrix.length=x,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+w-N,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=C,I.sunLength=f,I.directionalLength=p,I.pointLength=m,I.spotLength=M,I.rectAreaLength=T,I.hemiLength=E,I.numSunShadows=g,I.numDirectionalShadows=x,I.numPointShadows=A,I.numSpotShadows=_,I.numSpotMaps=w,I.numLightProbes=C,n.version=jy++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,p=0;const m=h.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){const E=c[M];if(E.isSunLight){const x=n.sun[u];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),u++}else if(E.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(E.isSpotLight){const x=n.spot[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),g++}else if(E.isRectAreaLight){const x=n.rectArea[v];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const x=n.hemi[p];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function pd(s){const t=new tM(s),e=[],n=[],i=[];function r(u){h.camera=u,e.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}const h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function eM(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new pd(s),t.set(i,[a])):r>=o.length?(a=new pd(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const nM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iM=`uniform sampler2D shadow_pass;
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
}`,sM=[new y(1,0,0),new y(-1,0,0),new y(0,1,0),new y(0,-1,0),new y(0,0,1),new y(0,0,-1)],rM=[new y(0,-1,0),new y(0,-1,0),new y(0,0,1),new y(0,0,-1),new y(0,-1,0),new y(0,-1,0)],md=new Qt,sr=new y,pl=new y;function oM(s,t,e){let n=new Or;const i=new Ht,r=new Ht,o=new Re,a=new $f,l=new Vm,c={},h=e.maxTextureSize,u={[Wi]:un,[un]:Wi,[ze]:ze},d=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:nM,fragmentShader:iM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _e(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sr;let m=this.type;this.render=function(A,_,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===c0&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sr);const N=s.getRenderTarget(),C=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Ns),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=m!==this.type;F&&_.traverse(function(b){b.material&&(Array.isArray(b.material)?b.material.forEach(D=>D.needsUpdate=!0):b.material.needsUpdate=!0)});for(let b=0,D=A.length;b<D;b++){const U=A[b],O=U.shadow;if(O===void 0){Jt("WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const q=O.getFrameExtents();i.multiply(q),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/q.x),i.x=r.x*q.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/q.y),i.y=r.y*q.y,O.mapSize.y=r.y));const V=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=V,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===mr){if(U.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new nn(i.x,i.y,{format:ls,type:gn,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),O.map.texture.name=U.name+".shadowMap",O.map.depthTexture=new cs(i.x,i.y,Fn),O.map.depthTexture.name=U.name+".shadowMapDepth",O.map.depthTexture.format=Xi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ke,O.map.depthTexture.magFilter=ke}else U.isPointLight?(O.map=new bh(i.x),O.map.depthTexture=new Yf(i.x,qn)):(O.map=new nn(i.x,i.y),O.map.depthTexture=new cs(i.x,i.y,qn)),O.map.depthTexture.name=U.name+".shadowMap",O.map.depthTexture.format=Xi,this.type===Sr?(O.map.depthTexture.compareFunction=V?Uf:Ff,O.map.depthTexture.minFilter=Qe,O.map.depthTexture.magFilter=Qe):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ke,O.map.depthTexture.magFilter=ke);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);const H=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();U.isPointLight!==!0&&O.updateMatrices(U,w);const Y=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:w.layers;for(let at=0;at<H;at++){const Q=O.getCamera(at);if(U.isPointLight){const k=O.camera,Z=O.matrix,X=U.distance||k.far;X!==k.far&&(k.far=X,k.updateProjectionMatrix()),sr.setFromMatrixPosition(U.matrixWorld),k.position.copy(sr),pl.copy(k.position),pl.add(sM[at]),k.up.copy(rM[at]),k.lookAt(pl),k.updateMatrixWorld(),Z.makeTranslation(-sr.x,-sr.y,-sr.z),md.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),O._frustum.setFromProjectionMatrix(md,k.coordinateSystem,k.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,at),s.clear();else{at===0&&(s.setRenderTarget(O.map),s.clear());const k=O.getViewport(at);o.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),L.viewport(o)}n=O.getFrustum(at),E(_,w,Q,U,Y,this.type)}O.isPointLightShadow!==!0&&this.type===mr&&M(O,w),O.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(N,C,I)};function M(A,_){const w=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new nn(i.x,i.y,{format:ls,type:gn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(_,null,w,d,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(_,null,w,f,v,null)}function T(A,_,w,N){let C=null;const I=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)C=I;else if(C=w.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const L=C.uuid,F=_.uuid;let b=c[L];b===void 0&&(b={},c[L]=b);let D=b[F];D===void 0&&(D=C.clone(),b[F]=D,_.addEventListener("dispose",x)),C=D}if(C.visible=_.visible,C.wireframe=_.wireframe,N===mr?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:u[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,w.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const L=s.properties.get(C);L.light=w}return C}function E(A,_,w,N,C,I){if(A.visible===!1)return;if(A.layers.test(C)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&I===mr)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);const b=t.update(A),D=A.material;if(Array.isArray(D)){const U=b.groups;for(let O=0,q=U.length;O<q;O++){const V=U[O],H=D[V.materialIndex];if(H&&H.visible){const Y=T(A,H,N,I);A.onBeforeShadow(s,A,_,w,b,Y,V),s.renderBufferDirect(w,null,b,Y,A,V),A.onAfterShadow(s,A,_,w,b,Y,V)}}}else if(D.visible){const U=T(A,D,N,I);A.onBeforeShadow(s,A,_,w,b,U,null),s.renderBufferDirect(w,null,b,U,A,null),A.onAfterShadow(s,A,_,w,b,U,null)}}const F=A.children;for(let b=0,D=F.length;b<D;b++)E(F[b],_,w,N,C,I)}function x(A){A.target.removeEventListener("dispose",x);for(const w in c){const N=c[w],C=A.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}function aM(s,t){function e(){let z=!1;const dt=new Re;let lt=null;const bt=new Re(0,0,0,0);return{setMask:function(xt){lt!==xt&&!z&&(s.colorMask(xt,xt,xt,xt),lt=xt)},setLocked:function(xt){z=xt},setClear:function(xt,Mt,jt,he,vt){vt===!0&&(xt*=he,Mt*=he,jt*=he),dt.set(xt,Mt,jt,he),bt.equals(dt)===!1&&(s.clearColor(xt,Mt,jt,he),bt.copy(dt))},reset:function(){z=!1,lt=null,bt.set(-1,0,0,0)}}}function n(){let z=!1,dt=!1,lt=null,bt=null,xt=null;return{setReversed:function(Mt){if(dt!==Mt){const jt=t.get("EXT_clip_control");Mt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),dt=Mt;const he=xt;xt=null,this.setClear(he)}},getReversed:function(){return dt},setTest:function(Mt){Mt?J(s.DEPTH_TEST):tt(s.DEPTH_TEST)},setMask:function(Mt){lt!==Mt&&!z&&(s.depthMask(Mt),lt=Mt)},setFunc:function(Mt){if(dt&&(Mt=X0[Mt]),bt!==Mt){switch(Mt){case Wl:s.depthFunc(s.NEVER);break;case Xl:s.depthFunc(s.ALWAYS);break;case ql:s.depthFunc(s.LESS);break;case Pr:s.depthFunc(s.LEQUAL);break;case Yl:s.depthFunc(s.EQUAL);break;case Kl:s.depthFunc(s.GEQUAL);break;case Zl:s.depthFunc(s.GREATER);break;case $l:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}bt=Mt}},setLocked:function(Mt){z=Mt},setClear:function(Mt){xt!==Mt&&(xt=Mt,dt&&(Mt=1-Mt),s.clearDepth(Mt))},reset:function(){z=!1,lt=null,bt=null,xt=null,dt=!1}}}function i(){let z=!1,dt=null,lt=null,bt=null,xt=null,Mt=null,jt=null,he=null,vt=null;return{setTest:function(te){z||(te?J(s.STENCIL_TEST):tt(s.STENCIL_TEST))},setMask:function(te){dt!==te&&!z&&(s.stencilMask(te),dt=te)},setFunc:function(te,le,Dt){(lt!==te||bt!==le||xt!==Dt)&&(s.stencilFunc(te,le,Dt),lt=te,bt=le,xt=Dt)},setOp:function(te,le,Dt){(Mt!==te||jt!==le||he!==Dt)&&(s.stencilOp(te,le,Dt),Mt=te,jt=le,he=Dt)},setLocked:function(te){z=te},setClear:function(te){vt!==te&&(s.clearStencil(te),vt=te)},reset:function(){z=!1,dt=null,lt=null,bt=null,xt=null,Mt=null,jt=null,he=null,vt=null}}}const r=new e,o=new n,a=new i;let l={};const c=new WeakMap;let h={},u={},d={},f=new WeakMap,g=[],v=null,p=!1,m=null,M=null,T=null,E=null,x=null,A=null,_=null,w=new Ot(0,0,0),N=0,C=!1,I=null,L=null,F=null,b=null,D=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,q=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),O=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),O=q>=2);let H=null,Y={};const at=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),k=new Re().fromArray(at),Z=new Re().fromArray(Q);function X(z,dt,lt,bt){const xt=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(z,Mt),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let jt=0;jt<lt;jt++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,bt,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(dt+jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return Mt}const ct={};ct[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),ct[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ct[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(s.DEPTH_TEST),o.setFunc(Pr),Ct(!1),Lt(Kh),J(s.CULL_FACE),ie(Ns);function J(z){h[z]!==!0&&(s.enable(z),h[z]=!0)}function tt(z){h[z]!==!1&&(s.disable(z),h[z]=!1)}function ot(z,dt){return d[z]!==dt?(s.bindFramebuffer(z,dt),d[z]=dt,z===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=dt),z===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function ft(z,dt){let lt=g,bt=!1;if(z){lt=f.get(dt),lt===void 0&&(lt=[],f.set(dt,lt));const xt=z.textures;if(lt.length!==xt.length||lt[0]!==s.COLOR_ATTACHMENT0){for(let Mt=0,jt=xt.length;Mt<jt;Mt++)lt[Mt]=s.COLOR_ATTACHMENT0+Mt;lt.length=xt.length,bt=!0}}else lt[0]!==s.BACK&&(lt[0]=s.BACK,bt=!0);bt&&s.drawBuffers(lt)}function Rt(z){return v!==z?(s.useProgram(z),v=z,!0):!1}const Bt={[Ls]:s.FUNC_ADD,[u0]:s.FUNC_SUBTRACT,[d0]:s.FUNC_REVERSE_SUBTRACT};Bt[f0]=s.MIN,Bt[p0]=s.MAX;const kt={[m0]:s.ZERO,[g0]:s.ONE,[_0]:s.SRC_COLOR,[yf]:s.SRC_ALPHA,[b0]:s.SRC_ALPHA_SATURATE,[M0]:s.DST_COLOR,[x0]:s.DST_ALPHA,[v0]:s.ONE_MINUS_SRC_COLOR,[Mf]:s.ONE_MINUS_SRC_ALPHA,[S0]:s.ONE_MINUS_DST_COLOR,[y0]:s.ONE_MINUS_DST_ALPHA,[w0]:s.CONSTANT_COLOR,[T0]:s.ONE_MINUS_CONSTANT_COLOR,[E0]:s.CONSTANT_ALPHA,[A0]:s.ONE_MINUS_CONSTANT_ALPHA};function ie(z,dt,lt,bt,xt,Mt,jt,he,vt,te){if(z===Ns){p===!0&&(tt(s.BLEND),p=!1);return}if(p===!1&&(J(s.BLEND),p=!0),z!==h0){if(z!==m||te!==C){if((M!==Ls||x!==Ls)&&(s.blendEquation(s.FUNC_ADD),M=Ls,x=Ls),te)switch(z){case br:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gl:s.blendFunc(s.ONE,s.ONE);break;case Zh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $h:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:re("WebGLState: Invalid blending: ",z);break}else switch(z){case br:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Gl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Zh:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $h:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",z);break}T=null,E=null,A=null,_=null,w.set(0,0,0),N=0,m=z,C=te}return}xt=xt||dt,Mt=Mt||lt,jt=jt||bt,(dt!==M||xt!==x)&&(s.blendEquationSeparate(Bt[dt],Bt[xt]),M=dt,x=xt),(lt!==T||bt!==E||Mt!==A||jt!==_)&&(s.blendFuncSeparate(kt[lt],kt[bt],kt[Mt],kt[jt]),T=lt,E=bt,A=Mt,_=jt),(he.equals(w)===!1||vt!==N)&&(s.blendColor(he.r,he.g,he.b,vt),w.copy(he),N=vt),m=z,C=!1}function wt(z,dt){z.side===ze?tt(s.CULL_FACE):J(s.CULL_FACE);let lt=z.side===un;dt&&(lt=!lt),Ct(lt),z.blending===br&&z.transparent===!1?ie(Ns):ie(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const bt=z.stencilWrite;a.setTest(bt),bt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Wt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(z){I!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),I=z)}function Lt(z){z!==a0?(J(s.CULL_FACE),z!==L&&(z===Kh?s.cullFace(s.BACK):z===l0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):tt(s.CULL_FACE),L=z}function Gt(z){z!==F&&(O&&s.lineWidth(z),F=z)}function Wt(z,dt,lt){z?(J(s.POLYGON_OFFSET_FILL),(b!==dt||D!==lt)&&(b=dt,D=lt,o.getReversed()&&(dt=-dt,lt=-lt),s.polygonOffset(dt,lt))):tt(s.POLYGON_OFFSET_FILL)}function it(z){z?J(s.SCISSOR_TEST):tt(s.SCISSOR_TEST)}function yt(z){z===void 0&&(z=s.TEXTURE0+U-1),H!==z&&(s.activeTexture(z),H=z)}function Ft(z,dt,lt){lt===void 0&&(H===null?lt=s.TEXTURE0+U-1:lt=H);let bt=Y[lt];bt===void 0&&(bt={type:void 0,texture:void 0},Y[lt]=bt),(bt.type!==z||bt.texture!==dt)&&(H!==lt&&(s.activeTexture(lt),H=lt),s.bindTexture(z,dt||ct[z]),bt.type=z,bt.texture=dt)}function B(){const z=Y[H];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function se(){try{s.compressedTexImage2D(...arguments)}catch(z){re("WebGLState:",z)}}function zt(){try{s.compressedTexImage3D(...arguments)}catch(z){re("WebGLState:",z)}}function Xt(){try{s.texSubImage2D(...arguments)}catch(z){re("WebGLState:",z)}}function pt(){try{s.texSubImage3D(...arguments)}catch(z){re("WebGLState:",z)}}function de(){try{s.compressedTexSubImage2D(...arguments)}catch(z){re("WebGLState:",z)}}function Vt(){try{s.compressedTexSubImage3D(...arguments)}catch(z){re("WebGLState:",z)}}function Zt(){try{s.texStorage2D(...arguments)}catch(z){re("WebGLState:",z)}}function P(){try{s.texStorage3D(...arguments)}catch(z){re("WebGLState:",z)}}function S(){try{s.texImage2D(...arguments)}catch(z){re("WebGLState:",z)}}function G(){try{s.texImage3D(...arguments)}catch(z){re("WebGLState:",z)}}function ut(z){return u[z]!==void 0?u[z]:s.getParameter(z)}function rt(z,dt){u[z]!==dt&&(s.pixelStorei(z,dt),u[z]=dt)}function mt(z){k.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),k.copy(z))}function gt(z){Z.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),Z.copy(z))}function st(z,dt){let lt=c.get(dt);lt===void 0&&(lt=new WeakMap,c.set(dt,lt));let bt=lt.get(z);bt===void 0&&(bt=s.getUniformBlockIndex(dt,z.name),s.uniformBlockBinding(dt,bt,bt),lt.set(z,bt))}function ht(z,dt,lt){const xt=c.get(dt).get(z);l[xt]!==lt&&(s.bindBufferBase(s.UNIFORM_BUFFER,xt,lt),l[xt]=lt)}function St(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},H=null,Y={},d={},l={},f=new WeakMap,g=[],v=null,p=!1,m=null,M=null,T=null,E=null,x=null,A=null,_=null,w=new Ot(0,0,0),N=0,C=!1,I=null,L=null,F=null,b=null,D=null,k.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:tt,bindFramebuffer:ot,drawBuffers:ft,useProgram:Rt,setBlending:ie,setMaterial:wt,setFlipSided:Ct,setCullFace:Lt,setLineWidth:Gt,setPolygonOffset:Wt,setScissorTest:it,activeTexture:yt,bindTexture:Ft,unbindTexture:B,compressedTexImage2D:se,compressedTexImage3D:zt,texImage2D:S,texImage3D:G,pixelStorei:rt,getParameter:ut,updateUBOMapping:st,uniformBlockBinding:ht,texStorage2D:Zt,texStorage3D:P,texSubImage2D:Xt,texSubImage3D:pt,compressedTexSubImage2D:de,compressedTexSubImage3D:Vt,scissor:mt,viewport:gt,reset:St}}function lM(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ht,h=new WeakMap,u=new Set;let d;const f=new WeakMap,g=new Set,v=new FinalizationRegistry(P=>g.delete(P));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,S){return p?new OffscreenCanvas(P,S):Ur("canvas")}function M(P,S,G){let ut=1;const rt=Zt(P);if((rt.width>G||rt.height>G)&&(ut=G/Math.max(rt.width,rt.height)),ut<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const mt=Math.floor(ut*rt.width),gt=Math.floor(ut*rt.height);d===void 0&&(d=m(mt,gt));const st=S?m(mt,gt):d;return st.width=mt,st.height=gt,st.getContext("2d").drawImage(P,0,0,mt,gt),Jt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+mt+"x"+gt+")."),st}else return"data"in P&&Jt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),P;return P}function T(P){return P.generateMipmaps}function E(P){s.generateMipmap(P)}function x(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(P,S,G,ut,rt,mt=!1){if(P!==null){if(s[P]!==void 0)return s[P];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let gt;ut&&(gt=t.get("EXT_texture_norm16"),gt||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=S;if(S===s.RED&&(G===s.FLOAT&&(st=s.R32F),G===s.HALF_FLOAT&&(st=s.R16F),G===s.UNSIGNED_BYTE&&(st=s.R8),G===s.UNSIGNED_SHORT&&gt&&(st=gt.R16_EXT),G===s.SHORT&&gt&&(st=gt.R16_SNORM_EXT)),S===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(st=s.R8UI),G===s.UNSIGNED_SHORT&&(st=s.R16UI),G===s.UNSIGNED_INT&&(st=s.R32UI),G===s.BYTE&&(st=s.R8I),G===s.SHORT&&(st=s.R16I),G===s.INT&&(st=s.R32I)),S===s.RG&&(G===s.FLOAT&&(st=s.RG32F),G===s.HALF_FLOAT&&(st=s.RG16F),G===s.UNSIGNED_BYTE&&(st=s.RG8),G===s.UNSIGNED_SHORT&&gt&&(st=gt.RG16_EXT),G===s.SHORT&&gt&&(st=gt.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(st=s.RG8UI),G===s.UNSIGNED_SHORT&&(st=s.RG16UI),G===s.UNSIGNED_INT&&(st=s.RG32UI),G===s.BYTE&&(st=s.RG8I),G===s.SHORT&&(st=s.RG16I),G===s.INT&&(st=s.RG32I)),S===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(st=s.RGB8UI),G===s.UNSIGNED_SHORT&&(st=s.RGB16UI),G===s.UNSIGNED_INT&&(st=s.RGB32UI),G===s.BYTE&&(st=s.RGB8I),G===s.SHORT&&(st=s.RGB16I),G===s.INT&&(st=s.RGB32I)),S===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(st=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(st=s.RGBA16UI),G===s.UNSIGNED_INT&&(st=s.RGBA32UI),G===s.BYTE&&(st=s.RGBA8I),G===s.SHORT&&(st=s.RGBA16I),G===s.INT&&(st=s.RGBA32I)),S===s.RGB&&(G===s.UNSIGNED_SHORT&&gt&&(st=gt.RGB16_EXT),G===s.SHORT&&gt&&(st=gt.RGB16_SNORM_EXT),G===s.UNSIGNED_INT_5_9_9_9_REV&&(st=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(st=s.R11F_G11F_B10F)),S===s.RGBA){const ht=mt?ha:pe.getTransfer(rt);G===s.FLOAT&&(st=s.RGBA32F),G===s.HALF_FLOAT&&(st=s.RGBA16F),G===s.UNSIGNED_BYTE&&(st=ht===we?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT&&gt&&(st=gt.RGBA16_EXT),G===s.SHORT&&gt&&(st=gt.RGBA16_SNORM_EXT),G===s.UNSIGNED_SHORT_4_4_4_4&&(st=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(st=s.RGB5_A1)}return(st===s.R16F||st===s.R32F||st===s.RG16F||st===s.RG32F||st===s.RGBA16F||st===s.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function _(P,S){let G;return P?S===null||S===qn||S===Bs?G=s.DEPTH24_STENCIL8:S===Fn?G=s.DEPTH32F_STENCIL8:S===Ir&&(G=s.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qn||S===Bs?G=s.DEPTH_COMPONENT24:S===Fn?G=s.DEPTH_COMPONENT32F:S===Ir&&(G=s.DEPTH_COMPONENT16),G}function w(P,S){return T(P)===!0||P.isFramebufferTexture&&P.minFilter!==ke&&P.minFilter!==Qe?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function N(P){const S=new WeakRef(P);n.get(P).__ref=S,g.add(S),v.register(P,S,S)}function C(P){const S=n.get(P).__ref;S!==void 0&&(g.delete(S),v.unregister(S))}function I(P){F(P.target)}function L(P){b(P.target)}function F(P){P.removeEventListener("dispose",I),C(P),U(P),P.isVideoTexture&&h.delete(P),P.isHTMLTexture&&u.delete(P)}function b(P){P.removeEventListener("dispose",L),C(P),q(P)}function D(){for(const P of g){const S=P.deref();S!==void 0&&(S.isRenderTarget===!0?b(S):F(S))}g.clear(),u.clear()}function U(P){const S=n.get(P);if(S.__webglInit===void 0)return;const G=P.source,ut=f.get(G);if(ut){const rt=ut[S.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&O(P),Object.keys(ut).length===0&&f.delete(G)}n.remove(P)}function O(P){const S=n.get(P);s.deleteTexture(S.__webglTexture);const G=P.source,ut=f.get(G);delete ut[S.__cacheKey],o.memory.textures--}function q(P){const S=n.get(P);S.__depthDisposeCallback&&S.__depthDisposeCallback();const G=P.depthTexture;if(G&&G.renderTarget===P&&F(G),P.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(S.__webglFramebuffer[rt]))for(let mt=0;mt<S.__webglFramebuffer[rt].length;mt++)s.deleteFramebuffer(S.__webglFramebuffer[rt][mt]);else s.deleteFramebuffer(S.__webglFramebuffer[rt]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[rt])}else{if(Array.isArray(S.__webglFramebuffer))for(let rt=0;rt<S.__webglFramebuffer.length;rt++)s.deleteFramebuffer(S.__webglFramebuffer[rt]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let rt=0;rt<S.__webglColorRenderbuffer.length;rt++)S.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[rt]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const ut=P.textures;for(let rt=0,mt=ut.length;rt<mt;rt++){const gt=n.get(ut[rt]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(ut[rt])}n.remove(P)}let V=0;function H(){V=0}function Y(){return V}function at(P){V=P}function Q(){const P=V;return P>=i.maxTextures&&Jt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),V+=1,P}function k(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.mipmapsAutoUpdate),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function Z(P,S){const G=n.get(P);if(P.isVideoTexture&&de(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const ut=P.image;if(ut===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(G,P,S);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+S)}function X(P,S){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){wt(G,P,S);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+S)}function ct(P,S){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){wt(G,P,S);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+S)}function J(P,S){const G=n.get(P);if(P.version>0&&G.__version!==P.version){Ct(G,P,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+S)}const tt={[as]:s.REPEAT,[ri]:s.CLAMP_TO_EDGE,[aa]:s.MIRRORED_REPEAT},ot={[ke]:s.NEAREST,[Af]:s.NEAREST_MIPMAP_NEAREST,[gr]:s.NEAREST_MIPMAP_LINEAR,[Qe]:s.LINEAR,[Zo]:s.LINEAR_MIPMAP_NEAREST,[oi]:s.LINEAR_MIPMAP_LINEAR},ft={[U0]:s.NEVER,[Of]:s.ALWAYS,[O0]:s.LESS,[Ff]:s.LEQUAL,[k0]:s.EQUAL,[Uf]:s.GEQUAL,[B0]:s.GREATER,[z0]:s.NOTEQUAL};function Rt(P,S){if(S.type===Fn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Qe||S.magFilter===Zo||S.magFilter===gr||S.magFilter===oi||S.minFilter===Qe||S.minFilter===Zo||S.minFilter===gr||S.minFilter===oi)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,tt[S.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,tt[S.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,tt[S.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,ot[S.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,ot[S.minFilter]),S.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,ft[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ke||S.minFilter!==gr&&S.minFilter!==oi||S.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Bt(P,S){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",I),N(S));const ut=S.source;let rt=f.get(ut);rt===void 0&&(rt={},f.set(ut,rt));const mt=k(S);if(mt!==P.__cacheKey){rt[mt]===void 0&&(rt[mt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),rt[mt].usedTimes++;const gt=rt[P.__cacheKey];gt!==void 0&&(rt[P.__cacheKey].usedTimes--,gt.usedTimes===0&&O(S)),P.__cacheKey=mt,P.__webglTexture=rt[mt].texture}return G}function kt(P,S,G){return Math.floor(Math.floor(P/G)/S)}function ie(P,S,G,ut){const mt=P.updateRanges;if(mt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,G,ut,S.data);else{mt.sort((z,dt)=>z.start-dt.start);let gt=0;for(let z=1;z<mt.length;z++){const dt=mt[gt],lt=mt[z],bt=dt.start+dt.count,xt=kt(lt.start,S.width,4),Mt=kt(dt.start,S.width,4);lt.start<=bt+1&&xt===Mt&&kt(lt.start+lt.count-1,S.width,4)===xt?dt.count=Math.max(dt.count,lt.start+lt.count-dt.start):(++gt,mt[gt]=lt)}mt.length=gt+1;const st=e.getParameter(s.UNPACK_ROW_LENGTH),ht=e.getParameter(s.UNPACK_SKIP_PIXELS),St=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let z=0,dt=mt.length;z<dt;z++){const lt=mt[z],bt=Math.floor(lt.start/4),xt=Math.ceil(lt.count/4),Mt=bt%S.width,jt=Math.floor(bt/S.width),he=xt,vt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Mt),e.pixelStorei(s.UNPACK_SKIP_ROWS,jt),e.texSubImage2D(s.TEXTURE_2D,0,Mt,jt,he,vt,G,ut,S.data)}P.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,st),e.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(s.UNPACK_SKIP_ROWS,St)}}function wt(P,S,G){let ut=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ut=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ut=s.TEXTURE_3D);const rt=Bt(P,S),mt=S.source;e.bindTexture(ut,P.__webglTexture,s.TEXTURE0+G);const gt=n.get(mt);if(mt.version!==gt.__version||rt===!0){if(e.activeTexture(s.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const vt=pe.getPrimaries(pe.workingColorSpace),te=S.colorSpace===zi?null:pe.getPrimaries(S.colorSpace),le=S.colorSpace===zi||vt===te?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,le)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let ht=M(S.image,!1,i.maxTextureSize);ht=Vt(S,ht);const St=r.convert(S.format,S.colorSpace),z=r.convert(S.type);let dt=A(S.internalFormat,St,z,S.normalized,S.colorSpace,S.isVideoTexture);Rt(ut,S);let lt;const bt=S.mipmaps,xt=S.isVideoTexture!==!0,Mt=gt.__version===void 0||rt===!0,jt=mt.dataReady,he=w(S,ht);if(S.isDepthTexture)dt=_(S.format===Hi,S.type),Mt&&(xt?e.texStorage2D(s.TEXTURE_2D,1,dt,ht.width,ht.height):e.texImage2D(s.TEXTURE_2D,0,dt,ht.width,ht.height,0,St,z,null));else if(S.isDataTexture)if(bt.length>0){xt&&Mt&&e.texStorage2D(s.TEXTURE_2D,he,dt,bt[0].width,bt[0].height);for(let vt=0,te=bt.length;vt<te;vt++)lt=bt[vt],xt?jt&&e.texSubImage2D(s.TEXTURE_2D,vt,0,0,lt.width,lt.height,St,z,lt.data):e.texImage2D(s.TEXTURE_2D,vt,dt,lt.width,lt.height,0,St,z,lt.data);S.generateMipmaps=!1}else xt?(Mt&&e.texStorage2D(s.TEXTURE_2D,he,dt,ht.width,ht.height),jt&&ie(S,ht,St,z)):e.texImage2D(s.TEXTURE_2D,0,dt,ht.width,ht.height,0,St,z,ht.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){xt&&Mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,he,dt,bt[0].width,bt[0].height,ht.depth);for(let vt=0,te=bt.length;vt<te;vt++)if(lt=bt[vt],S.format!==Gn)if(St!==null)if(xt){if(jt)if(S.layerUpdates.size>0){const le=Ku(lt.width,lt.height,S.format,S.type);for(const Dt of S.layerUpdates){const be=lt.data.subarray(Dt*le/lt.data.BYTES_PER_ELEMENT,(Dt+1)*le/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,Dt,lt.width,lt.height,1,St,be)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,0,lt.width,lt.height,ht.depth,St,lt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,vt,dt,lt.width,lt.height,ht.depth,0,lt.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xt?jt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,vt,0,0,0,lt.width,lt.height,ht.depth,St,z,lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,vt,dt,lt.width,lt.height,ht.depth,0,St,z,lt.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{xt&&Mt&&e.texStorage2D(s.TEXTURE_2D,he,dt,bt[0].width,bt[0].height);for(let vt=0,te=bt.length;vt<te;vt++)lt=bt[vt],S.format!==Gn?St!==null?xt?jt&&e.compressedTexSubImage2D(s.TEXTURE_2D,vt,0,0,lt.width,lt.height,St,lt.data):e.compressedTexImage2D(s.TEXTURE_2D,vt,dt,lt.width,lt.height,0,lt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?jt&&e.texSubImage2D(s.TEXTURE_2D,vt,0,0,lt.width,lt.height,St,z,lt.data):e.texImage2D(s.TEXTURE_2D,vt,dt,lt.width,lt.height,0,St,z,lt.data)}else if(S.isDataArrayTexture)if(xt){if(Mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,he,dt,ht.width,ht.height,ht.depth),jt)if(S.layerUpdates.size>0){const vt=Ku(ht.width,ht.height,S.format,S.type);for(const te of S.layerUpdates){const le=ht.data.subarray(te*vt/ht.data.BYTES_PER_ELEMENT,(te+1)*vt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,te,ht.width,ht.height,1,St,z,le)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,St,z,ht.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,dt,ht.width,ht.height,ht.depth,0,St,z,ht.data);else if(S.isData3DTexture)xt?(Mt&&e.texStorage3D(s.TEXTURE_3D,he,dt,ht.width,ht.height,ht.depth),jt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,St,z,ht.data)):e.texImage3D(s.TEXTURE_3D,0,dt,ht.width,ht.height,ht.depth,0,St,z,ht.data);else if(S.isFramebufferTexture){if(Mt)if(xt)e.texStorage2D(s.TEXTURE_2D,he,dt,ht.width,ht.height);else{let vt=ht.width,te=ht.height;for(let le=0;le<he;le++)e.texImage2D(s.TEXTURE_2D,le,dt,vt,te,0,St,z,null),vt>>=1,te>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){const vt=s.canvas;if(vt.hasAttribute("layoutsubtree")||vt.setAttribute("layoutsubtree","true"),ht.parentNode!==vt){vt.appendChild(ht),u.add(S),vt.onpaint=te=>{const le=te.changedElements;for(const Dt of u)le.includes(Dt.image)&&(Dt.needsUpdate=!0)},vt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ht);else{const le=s.RGBA,Dt=s.RGBA,be=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,le,Dt,be,ht)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(bt.length>0){if(xt&&Mt){const vt=Zt(bt[0]);e.texStorage2D(s.TEXTURE_2D,he,dt,vt.width,vt.height)}for(let vt=0,te=bt.length;vt<te;vt++)lt=bt[vt],xt?jt&&e.texSubImage2D(s.TEXTURE_2D,vt,0,0,St,z,lt):e.texImage2D(s.TEXTURE_2D,vt,dt,St,z,lt);S.generateMipmaps=!1}else if(xt){if(Mt){const vt=Zt(ht);e.texStorage2D(s.TEXTURE_2D,he,dt,vt.width,vt.height)}jt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,z,ht)}else e.texImage2D(s.TEXTURE_2D,0,dt,St,z,ht);T(S)&&S.mipmapsAutoUpdate===!0&&E(ut),gt.__version=mt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Ct(P,S,G){if(S.image.length!==6)return;const ut=Bt(P,S),rt=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+G);const mt=n.get(rt);if(rt.version!==mt.__version||ut===!0){e.activeTexture(s.TEXTURE0+G);const gt=pe.getPrimaries(pe.workingColorSpace),st=S.colorSpace===zi?null:pe.getPrimaries(S.colorSpace),ht=S.colorSpace===zi||gt===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const St=S.isCompressedTexture||S.image[0].isCompressedTexture,z=S.image[0]&&S.image[0].isDataTexture,dt=[];for(let Dt=0;Dt<6;Dt++)!St&&!z?dt[Dt]=M(S.image[Dt],!0,i.maxCubemapSize):dt[Dt]=z?S.image[Dt].image:S.image[Dt],dt[Dt]=Vt(S,dt[Dt]);const lt=dt[0],bt=r.convert(S.format,S.colorSpace),xt=r.convert(S.type);let Mt=A(S.internalFormat,bt,xt,S.normalized,S.colorSpace);const jt=S.isVideoTexture!==!0,he=mt.__version===void 0||ut===!0,vt=rt.dataReady;let te=w(S,lt);Rt(s.TEXTURE_CUBE_MAP,S);let le;if(S.isDepthTexture){if(Mt=_(S.format===Hi,S.type),he)if(jt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,Mt,lt.width,lt.height);else for(let Dt=0;Dt<6;Dt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Mt,lt.width,lt.height,0,bt,xt,null)}else if(St){jt&&he&&e.texStorage2D(s.TEXTURE_CUBE_MAP,te,Mt,lt.width,lt.height);for(let Dt=0;Dt<6;Dt++){le=dt[Dt].mipmaps;for(let be=0;be<le.length;be++){const $e=le[be];S.format!==Gn?bt!==null?jt?vt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,be,0,0,$e.width,$e.height,bt,$e.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,be,Mt,$e.width,$e.height,0,$e.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?vt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,be,0,0,$e.width,$e.height,bt,xt,$e.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,be,Mt,$e.width,$e.height,0,bt,xt,$e.data)}}}else{if(le=S.mipmaps,jt&&he){le.length>0&&te++;const Dt=Zt(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,te,Mt,Dt.width,Dt.height)}for(let Dt=0;Dt<6;Dt++)if(z){jt?vt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,dt[Dt].width,dt[Dt].height,bt,xt,dt[Dt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Mt,dt[Dt].width,dt[Dt].height,0,bt,xt,dt[Dt].data);for(let be=0;be<le.length;be++){const Ri=le[be].image[Dt].image;jt?vt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,be+1,0,0,Ri.width,Ri.height,bt,xt,Ri.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,be+1,Mt,Ri.width,Ri.height,0,bt,xt,Ri.data)}}else{jt?vt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,bt,xt,dt[Dt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Mt,bt,xt,dt[Dt]);for(let be=0;be<le.length;be++){const $e=le[be];jt?vt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,be+1,0,0,bt,xt,$e.image[Dt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,be+1,Mt,bt,xt,$e.image[Dt])}}}T(S)&&S.mipmapsAutoUpdate===!0&&E(s.TEXTURE_CUBE_MAP),mt.__version=rt.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Lt(P,S,G,ut,rt,mt){const gt=r.convert(G.format,G.colorSpace),st=r.convert(G.type),ht=A(G.internalFormat,gt,st,G.normalized,G.colorSpace),St=n.get(S),z=n.get(G);if(z.__renderTarget=S,!St.__hasExternalTextures){const dt=Math.max(1,S.width>>mt),lt=Math.max(1,S.height>>mt);rt===s.TEXTURE_3D||rt===s.TEXTURE_2D_ARRAY?e.texImage3D(rt,mt,ht,dt,lt,S.depth,0,gt,st,null):e.texImage2D(rt,mt,ht,dt,lt,0,gt,st,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),pt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,rt,z.__webglTexture,0,Xt(S)):(rt===s.TEXTURE_2D||rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ut,rt,z.__webglTexture,mt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(P,S,G){if(s.bindRenderbuffer(s.RENDERBUFFER,P),S.depthBuffer){const ut=S.depthTexture,rt=ut&&ut.isDepthTexture?ut.type:null,mt=_(S.stencilBuffer,rt),gt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt(S),mt,S.width,S.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt(S),mt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,mt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,P)}else{const ut=S.textures;for(let rt=0;rt<ut.length;rt++){const mt=ut[rt],gt=r.convert(mt.format,mt.colorSpace),st=r.convert(mt.type),ht=A(mt.internalFormat,gt,st,mt.normalized,mt.colorSpace);pt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt(S),ht,S.width,S.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt(S),ht,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ht,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Wt(P,S,G){const ut=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const rt=n.get(S.depthTexture);rt.__renderTarget=S;const mt=ut?S.depthTexture.image[0]:S.depthTexture.image;(!rt.__webglTexture||mt.width!==S.width||mt.height!==S.height)&&(mt.width=S.width,mt.height=S.height,S.depthTexture.needsUpdate=!0),ut?J(S.depthTexture,0):Z(S.depthTexture,0);const gt=rt.__webglTexture,st=Xt(S),ht=ut?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,St=S.depthTexture.format===Hi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===Xi)pt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,St,ht,gt,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,St,ht,gt,0);else if(S.depthTexture.format===Hi)pt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,St,ht,gt,0,st):s.framebufferTexture2D(s.FRAMEBUFFER,St,ht,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(P){const S=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const ut=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ut){const rt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ut.removeEventListener("dispose",rt)};ut.addEventListener("dispose",rt),S.__depthDisposeCallback=rt}S.__boundDepthTexture=ut}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let ut=0;ut<6;ut++)Wt(S.__webglFramebuffer[ut],P,ut);else P.texture.mipmaps.length>0?Wt(S.__webglFramebuffer[0],P,0):Wt(S.__webglFramebuffer,P,0);else if(G){S.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ut]),S.__webglDepthbuffer[ut]===void 0)S.__webglDepthbuffer[ut]=s.createRenderbuffer(),Gt(S.__webglDepthbuffer[ut],P,!1);else{const rt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=S.__webglDepthbuffer[ut];s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,mt)}}else if(P.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Gt(S.__webglDepthbuffer,P,!1);else{const rt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,mt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function yt(P,S,G){const ut=n.get(P);S!==void 0&&Lt(ut.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&it(P)}function Ft(P){const S=P.texture,G=n.get(P),ut=n.get(S);P.addEventListener("dispose",L),N(P);const rt=P.textures,mt=P.isWebGLCubeRenderTarget===!0,gt=rt.length>1;if(gt||(ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture()),ut.__version=S.version,o.memory.textures++),mt){G.__webglFramebuffer=[];for(let st=0;st<6;st++)if(S.mipmaps.length>0){G.__webglFramebuffer[st]=[];for(let ht=0;ht<S.mipmaps.length;ht++)G.__webglFramebuffer[st][ht]=s.createFramebuffer()}else G.__webglFramebuffer[st]=s.createFramebuffer()}else{if(S.mipmaps.length>0){G.__webglFramebuffer=[];for(let st=0;st<S.mipmaps.length;st++)G.__webglFramebuffer[st]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(gt)for(let st=0,ht=rt.length;st<ht;st++){const St=n.get(rt[st]);St.__webglTexture===void 0&&(St.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&pt(P)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let st=0;st<rt.length;st++){const ht=rt[st];G.__webglColorRenderbuffer[st]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[st]);const St=r.convert(ht.format,ht.colorSpace),z=r.convert(ht.type),dt=A(ht.internalFormat,St,z,ht.normalized,ht.colorSpace,P.isXRRenderTarget===!0),lt=Xt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,dt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,G.__webglColorRenderbuffer[st])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Gt(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(mt){e.bindTexture(s.TEXTURE_CUBE_MAP,ut.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,S);for(let st=0;st<6;st++)if(S.mipmaps.length>0)for(let ht=0;ht<S.mipmaps.length;ht++)Lt(G.__webglFramebuffer[st][ht],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+st,ht);else Lt(G.__webglFramebuffer[st],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);T(S)?E(s.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let st=0,ht=rt.length;st<ht;st++){const St=rt[st],z=n.get(St);let dt=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(dt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,z.__webglTexture),Rt(dt,St),Lt(G.__webglFramebuffer,P,St,s.COLOR_ATTACHMENT0+st,dt,0),T(St)&&E(dt)}e.unbindTexture()}else{let st=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(st=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(st,ut.__webglTexture),Rt(st,S),S.mipmaps.length>0)for(let ht=0;ht<S.mipmaps.length;ht++)Lt(G.__webglFramebuffer[ht],P,S,s.COLOR_ATTACHMENT0,st,ht);else Lt(G.__webglFramebuffer,P,S,s.COLOR_ATTACHMENT0,st,0);T(S)?E(st):S.mipmaps.length>0&&s.texParameteri(st,s.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}P.depthBuffer&&it(P)}function B(P){const S=P.textures;for(let G=0,ut=S.length;G<ut;G++){const rt=S[G];if(T(rt)&&rt.mipmapsAutoUpdate===!0){const mt=x(P),gt=n.get(rt).__webglTexture;e.bindTexture(mt,gt),E(mt),e.unbindTexture()}}}const se=[];function zt(P){if(P.samples>0){if(pt(P)===!1){const S=P.textures,G=P.width,ut=P.height;let rt=s.COLOR_BUFFER_BIT;const mt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=n.get(P),st=S.length>1;if(st)for(let St=0;St<S.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let St=0;St<S.length;St++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(rt|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(rt|=s.STENCIL_BUFFER_BIT)),st){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[St]);const z=n.get(S[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,z,0)}s.blitFramebuffer(0,0,G,ut,0,0,G,ut,rt,s.NEAREST),l===!0&&(se.length=0,se.push(s.COLOR_ATTACHMENT0+St),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&se.push(mt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),st)for(let St=0;St<S.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,gt.__webglColorRenderbuffer[St]);const z=n.get(S[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,z,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const S=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Xt(P){return Math.min(i.maxSamples,P.samples)}function pt(P){const S=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function de(P){const S=o.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function Vt(P,S){const G=P.colorSpace,ut=P.format,rt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Sn&&G!==zi&&(pe.getTransfer(G)===we?(ut!==Gn||rt!==An)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",G)),S}function Zt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=H,this.getTextureUnits=Y,this.setTextureUnits=at,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=ct,this.setTextureCube=J,this.rebindTextures=yt,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=pt,this.dispose=D}function cM(s,t){function e(n,i=zi){let r;const o=pe.getTransfer(i);if(n===An)return s.UNSIGNED_BYTE;if(n===eh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===nh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Pf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Lf)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rf)return s.BYTE;if(n===Cf)return s.SHORT;if(n===Ir)return s.UNSIGNED_SHORT;if(n===th)return s.INT;if(n===qn)return s.UNSIGNED_INT;if(n===Fn)return s.FLOAT;if(n===gn)return s.HALF_FLOAT;if(n===If)return s.ALPHA;if(n===Df)return s.RGB;if(n===Gn)return s.RGBA;if(n===Xi)return s.DEPTH_COMPONENT;if(n===Hi)return s.DEPTH_STENCIL;if(n===ih)return s.RED;if(n===sh)return s.RED_INTEGER;if(n===ls)return s.RG;if(n===rh)return s.RG_INTEGER;if(n===oh)return s.RGBA_INTEGER;if(n===$o||n===Jo||n===jo||n===Qo)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jl||n===jl||n===Ql||n===tc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ec||n===nc||n===ic||n===sc||n===rc||n===la||n===oc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ec||n===nc)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ic)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===sc)return r.COMPRESSED_R11_EAC;if(n===rc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===la)return r.COMPRESSED_RG11_EAC;if(n===oc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===vc||n===xc||n===yc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ac)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_c)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yc)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mc||n===Sc||n===bc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Mc)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wc||n===Tc||n===ca||n===Ec)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===wc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const hM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uM=`
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

}`;class dM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Kf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new mn({vertexShader:hM,fragmentShader:uM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _e(new fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fM extends Yi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",p=new dM,m={},M=e.getContextAttributes();let T=null,E=null;const x=[],A=[],_=new Ht;let w=null,N=null;const C=new Mn;C.viewport=new Re;const I=new Mn;I.viewport=new Re;const L=[C,I],F=new dg;let b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Z=x[k];return Z===void 0&&(Z=new Ga,x[k]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(k){let Z=x[k];return Z===void 0&&(Z=new Ga,x[k]=Z),Z.getGripSpace()},this.getHand=function(k){let Z=x[k];return Z===void 0&&(Z=new Ga,x[k]=Z),Z.getHandSpace()};function U(k){const Z=A.indexOf(k.inputSource);if(Z===-1)return;const X=x[Z];X!==void 0&&(X.update(k.inputSource,k.frame,c||o),X.dispatchEvent({type:k.type,data:k.inputSource}))}function O(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",q);for(let k=0;k<x.length;k++){const Z=A[k];Z!==null&&(A[k]=null,x[k].disconnect(Z))}b=null,D=null,p.reset();for(const k in m)delete m[k];if(t.setRenderTarget(T),f=null,d=null,u=null,i=null,E=null,Q.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(_.width,_.height,!1),N!==null){const k=N.camera;k.fov=N.fov,k.zoom=N.zoom,k.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",O),i.addEventListener("inputsourceschange",q),M.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,ct=null,J=null;M.depth&&(J=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,X=M.stencil?Hi:Xi,ct=M.stencil?Bs:qn);const tt={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(tt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new nn(d.textureWidth,d.textureHeight,{format:Gn,type:An,depthTexture:new cs(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const X={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,X),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new nn(f.framebufferWidth,f.framebufferHeight,{format:Gn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function q(k){for(let Z=0;Z<k.removed.length;Z++){const X=k.removed[Z],ct=A.indexOf(X);ct>=0&&(A[ct]=null,x[ct].disconnect(X))}for(let Z=0;Z<k.added.length;Z++){const X=k.added[Z];let ct=A.indexOf(X);if(ct===-1){for(let tt=0;tt<x.length;tt++)if(tt>=A.length){A.push(X),ct=tt;break}else if(A[tt]===null){A[tt]=X,ct=tt;break}if(ct===-1)break}const J=x[ct];J&&J.connect(X)}}function V(k,Z){Z===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Z.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;let Z=k.near,X=k.far;p.texture!==null&&(p.depthNear>0&&(Z=p.depthNear),p.depthFar>0&&(X=p.depthFar)),F.near=I.near=C.near=Z,F.far=I.far=C.far=X,(b!==F.near||D!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),b=F.near,D=F.far),F.layers.mask=k.layers.mask|6,C.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;const ct=k.parent,J=F.cameras;V(F,ct);for(let tt=0;tt<J.length;tt++)V(J[tt],ct);F.projectionMatrix.copy(C.projectionMatrix),F.projectionMatrixInverse.copy(C.projectionMatrixInverse),N===null&&k.isPerspectiveCamera&&(N={camera:k,fov:k.fov,zoom:k.zoom}),H(k,F,ct)};function H(k,Z,X){X===null?k.matrix.copy(Z.matrixWorld):(k.matrix.copy(X.matrixWorld),k.matrix.invert(),k.matrix.multiply(Z.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Z.projectionMatrix),k.projectionMatrixInverse.copy(Z.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=zs*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(k){return m[k]};let Y=null;function at(k,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){const X=h.views;f!==null&&(t.setRenderTargetFramebuffer(E,f.framebuffer),t.setRenderTarget(E));let ct=!1;X.length!==F.cameras.length&&(F.cameras.length=0,ct=!0);for(let ft=0;ft<X.length;ft++){const Rt=X[ft];let Bt=null;if(f!==null)Bt=f.getViewport(Rt);else{const ie=u.getViewSubImage(d,Rt);Bt=ie.viewport,ft===0&&(t.setRenderTargetTextures(E,ie.colorTexture,ie.depthStencilTexture),t.setRenderTarget(E))}let kt=L[ft];kt===void 0&&(kt=new Mn,kt.layers.enable(ft),kt.viewport=new Re,L[ft]=kt),kt.matrix.fromArray(Rt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Rt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),ft===0&&(F.matrix.copy(kt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ct===!0&&F.cameras.push(kt)}const J=i.enabledFeatures;if(J&&J.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const ft=u.getDepthInformation(X[0]);ft&&ft.isValid&&ft.texture&&p.init(ft,i.renderState)}if(J&&J.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let ft=0;ft<X.length;ft++){const Rt=X[ft].camera;if(Rt){let Bt=m[Rt];Bt||(Bt=new Kf,m[Rt]=Bt);const kt=u.getCameraImage(Rt);Bt.sourceTexture=kt}}}}for(let X=0;X<x.length;X++){const ct=A[X],J=x[X];ct!==null&&J!==void 0&&J.update(ct,Z,c||o)}Y&&Y(k,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Q=new ip;Q.setAnimationLoop(at),this.setAnimationLoop=function(k){Y=k},this.dispose=function(){}}}const pM=new Qt,fp=new ee;fp.set(-1,0,0,0,1,0,0,0,1);function mM(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Zf(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,T,E){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,E)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,T):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===un&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===un&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=t.get(m),T=M.envMap,E=M.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(pM.makeRotationFromEuler(E)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(fp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=T*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===un&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gM(s,t,e,n){let i={},r={};function o(M,T){const E=T.program;n.uniformBlockBinding(M,E,i[M.id])}function a(M,T){let E=i[M.id];E===void 0&&(g(M),E=l(M),i[M.id]=E,M.addEventListener("dispose",p));const x=T.program;n.updateUBOMapping(M,x);const A=t.render.frame;r[M.id]!==A&&(c(M),r[M.id]=A)}function l(M){const T=s.createBuffer(),E=M.__size,x=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,E,x),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function c(M){const T=i[M.id],E=M.uniforms,x=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let A=0,_=E.length;A<_;A++){const w=E[A];if(Array.isArray(w))for(let N=0,C=w.length;N<C;N++)h(w[N],A,N,x);else h(w,A,0,x)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(M,T,E,x){if(d(M,T,E,x)===!0){const A=M.__offset,_=M.value;if(Array.isArray(_)){let w=0;for(let N=0;N<_.length;N++){const C=_[N],I=v(C,!0);u(C,M.__data,w),w+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,A,M.__data)}}function u(M,T,E){typeof M=="number"||typeof M=="boolean"?T[E]=M:M.isMatrix3?(T[E]=M.elements[0],T[E+1]=M.elements[1],T[E+2]=M.elements[2],T[E+3]=0,T[E+4]=M.elements[3],T[E+5]=M.elements[4],T[E+6]=M.elements[5],T[E+7]=0,T[E+8]=M.elements[6],T[E+9]=M.elements[7],T[E+10]=M.elements[8],T[E+11]=0):ArrayBuffer.isView(M)?T.set(M.subarray(0,T.length-E),E):M.toArray(T,E)}function d(M,T,E,x){const A=M.value,_=T+"_"+E;if(Array.isArray(A)){x[_]===void 0&&(x[_]=[]);const w=x[_];let N=!1;for(let C=0;C<A.length;C++)f(A[C],w,C)===!0&&(N=!0);return N}return f(A,x,_)}function f(M,T,E){if(T[E]===void 0)return typeof M=="number"||typeof M=="boolean"?T[E]=M:ArrayBuffer.isView(M)?T[E]=M.slice():T[E]=M.clone(),!0;{const x=T[E];if(typeof M=="number"||typeof M=="boolean"){if(x!==M)return T[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(x.equals(M)===!1)return x.copy(M),!0}}return!1}function g(M){const T=M.uniforms;let E=0;const x=16;for(let _=0,w=T.length;_<w;_++){const N=Array.isArray(T[_])?T[_]:[T[_]];for(let C=0,I=N.length;C<I;C++){const L=N[C],F=Array.isArray(L.value)?L.value:[L.value],b=Array.isArray(T[_])||Array.isArray(L.value);let D=E;for(let O=0,q=F.length;O<q;O++){const V=F[O],H=v(V,b),Y=E%x,at=Y%H.boundary,Q=Y+at;E+=at,Q!==0&&x-Q<H.storage&&(E+=x-Q),O===0&&(D=E),E+=H.storage}const U=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new U((E-D)/Float32Array.BYTES_PER_ELEMENT),L.__offset=D}}const A=E%x;return A>0&&(E+=x-A),M.__size=E,M.__cache={},this}function v(M,T){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=16,E.storage=48):M.isMatrix4?(E.boundary=16,E.storage=64):M.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",M),T===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function p(M){const T=M.target;T.removeEventListener("dispose",p),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function m(){for(const M in i)s.deleteBuffer(i[M]);i={},r={}}return{bind:o,update:a,dispose:m}}const _M=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let jn=null;function vM(){return jn===null&&(jn=new ba(_M,16,16,ls,gn),jn.name="DFG_LUT",jn.minFilter=Qe,jn.magFilter=Qe,jn.wrapS=ri,jn.wrapT=ri,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}class xM{constructor(t={}){const{canvas:e=G0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=An}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const v=f,p=new Set([oh,rh,sh]),m=new Set([An,qn,Ir,Bs,eh,nh]),M=new Uint32Array(4),T=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let x=null,A=null;const _=[],w=[];let N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1,L=null,F=null,b=null,D=null;this._outputColorSpace=Xe;let U=0,O=0,q=null,V=-1,H=null;const Y=new Re,at=new Re;let Q=null;const k=new Ot(0);let Z=0,X=e.width,ct=e.height,J=1,tt=null,ot=null;const ft=new Re(0,0,X,ct),Rt=new Re(0,0,X,ct);let Bt=!1;const kt=new Or,ie=new mh;let wt=!1,Ct=!1;const Lt=new Qt,Gt=new y,Wt=new Re,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Ft(){return q===null?J:1}let B=n;function se(R,W){return e.getContext(R,W)}let zt,Xt,pt,de,Vt,Zt,P,S,G,ut,rt,mt,gt,st,ht,St,z,dt,lt,bt,xt,Mt,jt;try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zc}`),e.addEventListener("webglcontextlost",te,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",Dt,!1),B===null){const W="webgl2";if(B=se(W,R),B===null)throw se(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}he()}catch(R){throw e.removeEventListener("webglcontextlost",te,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),re("WebGLRenderer: "+R.message),R}function he(){zt=new Sx(B),zt.init(),xt=new cM(B,zt),Xt=new ux(B,zt,t,xt),pt=new aM(B,zt),Xt.reversedDepthBuffer&&d&&pt.buffers.depth.setReversed(!0),F=B.createFramebuffer(),b=B.createFramebuffer(),D=B.createFramebuffer(),de=new Tx(B),Vt=new Yy,Zt=new lM(B,zt,pt,Vt,Xt,xt,de),P=new Mx(C),S=new Ag(B),Mt=new cx(B,S),G=new bx(B,S,de,Mt),ut=new Ax(B,G,S,Mt,de),dt=new Ex(B,Xt,Zt),ht=new dx(Vt),rt=new qy(C,P,zt,Xt,Mt,ht),mt=new mM(C,Vt),gt=new Zy,st=new eM(zt),z=new lx(C,P,pt,ut,g,l),St=new oM(C,ut,Xt),jt=new gM(B,de,Xt,pt),lt=new hx(B,zt,de),bt=new wx(B,zt,de),de.programs=rt.programs,C.capabilities=Xt,C.extensions=zt,C.properties=Vt,C.renderLists=gt,C.shadowMap=St,C.state=pt,C.info=de}v!==An&&(N=new Cx(v,e.width,e.height,a,i,r));const vt=new fM(C,B);this.xr=vt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=zt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=zt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(R){R!==void 0&&(J=R,this.setSize(X,ct,!1))},this.getSize=function(R){return R.set(X,ct)},this.setSize=function(R,W,nt=!0){if(vt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,ct=W,e.width=Math.floor(R*J),e.height=Math.floor(W*J),nt===!0&&(e.style.width=R+"px",e.style.height=W+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(X*J,ct*J).floor()},this.setDrawingBufferSize=function(R,W,nt){X=R,ct=W,J=nt,e.width=Math.floor(R*nt),e.height=Math.floor(W*nt),this.setViewport(0,0,R,W)},this.setEffects=function(R){if(v===An){re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let W=0;W<R.length;W++)if(R[W].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(Y)},this.getViewport=function(R){return R.copy(ft)},this.setViewport=function(R,W,nt,K){R.isVector4?ft.set(R.x,R.y,R.z,R.w):ft.set(R,W,nt,K),pt.viewport(Y.copy(ft).multiplyScalar(Ft()).round())},this.getScissor=function(R){return R.copy(Rt)},this.setScissor=function(R,W,nt,K){R.isVector4?Rt.set(R.x,R.y,R.z,R.w):Rt.set(R,W,nt,K),pt.scissor(at.copy(Rt).multiplyScalar(Ft()).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(R){pt.setScissorTest(Bt=R)},this.setOpaqueSort=function(R){tt=R},this.setTransparentSort=function(R){ot=R},this.getClearColor=function(R){return R.copy(z.getClearColor())},this.setClearColor=function(){z.setClearColor(...arguments)},this.getClearAlpha=function(){return z.getClearAlpha()},this.setClearAlpha=function(){z.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,nt=!0){let K=0;if(R){let j=!1;if(q!==null){const Et=q.texture.format;j=p.has(Et)}if(j){const Et=q.texture.type,qt=m.has(Et),Tt=z.getClearColor(),Ut=z.getClearAlpha(),$t=Tt.r,ae=Tt.g,me=Tt.b;qt?(M[0]=$t,M[1]=ae,M[2]=me,M[3]=Ut,B.clearBufferuiv(B.COLOR,0,M)):(T[0]=$t,T[1]=ae,T[2]=me,T[3]=Ut,B.clearBufferiv(B.COLOR,0,T))}else K|=B.COLOR_BUFFER_BIT}W&&(K|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),nt&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),L=R},this.dispose=function(){e.removeEventListener("webglcontextlost",te,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),z.dispose(),gt.dispose(),st.dispose(),Zt.dispose(),Vt.dispose(),P.dispose(),ut.dispose(),G.dispose(),Mt.dispose(),jt.dispose(),rt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",kh),vt.removeEventListener("sessionend",Bh),Zi.stop()};function te(R){R.preventDefault(),ua("WebGLRenderer: Context Lost."),I=!0}function le(){ua("WebGLRenderer: Context Restored."),I=!1;const R=de.autoReset,W=St.enabled,nt=St.autoUpdate,K=St.needsUpdate,j=St.type;he(),de.autoReset=R,St.enabled=W,St.autoUpdate=nt,St.needsUpdate=K,St.type=j}function Dt(R){re("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function be(R){const W=R.target;W.removeEventListener("dispose",be),$e(W)}function $e(R){Ri(R),Vt.remove(R)}function Ri(R){const W=Vt.get(R).programs;W!==void 0&&(W.forEach(function(nt){rt.releaseProgram(nt)}),R.isShaderMaterial&&rt.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,nt,K,j,Et){W===null&&(W=it);const qt=j.isMesh&&j.matrixWorld.determinantAffine()<0,Tt=s0(R,W,nt,K,j);pt.setMaterial(K,qt);let Ut=nt.index,$t=1;if(K.wireframe===!0){if(Ut=G.getWireframeAttribute(nt),Ut===void 0)return;$t=2}const ae=nt.drawRange,me=nt.attributes.position;let Yt=ae.start*$t,ge=(ae.start+ae.count)*$t;Et!==null&&(Yt=Math.max(Yt,Et.start*$t),ge=Math.min(ge,(Et.start+Et.count)*$t)),Ut!==null?(Yt=Math.max(Yt,0),ge=Math.min(ge,Ut.count)):me!=null&&(Yt=Math.max(Yt,0),ge=Math.min(ge,me.count));const Ve=ge-Yt;if(Ve<0||Ve===1/0)return;Mt.setup(j,K,Tt,nt,Ut);let Ce,Ee=lt;if(Ut!==null&&(Ce=S.get(Ut),Ee=bt,Ee.setIndex(Ce)),j.isMesh)K.wireframe===!0?(pt.setLineWidth(K.wireframeLinewidth*Ft()),Ee.setMode(B.LINES)):Ee.setMode(B.TRIANGLES);else if(j.isLine){let rn=K.linewidth;rn===void 0&&(rn=1),pt.setLineWidth(rn*Ft()),j.isLineSegments?Ee.setMode(B.LINES):j.isLineLoop?Ee.setMode(B.LINE_LOOP):Ee.setMode(B.LINE_STRIP)}else j.isPoints?Ee.setMode(B.POINTS):j.isSprite&&Ee.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(zt.get("WEBGL_multi_draw"))Ee.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const rn=j._multiDrawStarts,Kt=j._multiDrawCounts,dn=j._multiDrawCount,ye=Ut?S.get(Ut).bytesPerElement:1,$i=Vt.get(K).currentProgram.getUniforms();for(let on=0;on<dn;on++)$i.setValue(B,"_gl_DrawID",on),Ee.render(rn[on]/ye,Kt[on])}else if(j.isInstancedMesh)Ee.renderInstances(Yt,Ve,j.count);else if(nt.isInstancedBufferGeometry){const rn=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Kt=Math.min(nt.instanceCount,rn);Ee.renderInstances(Yt,Ve,Kt)}else Ee.render(Yt,Ve)};function Oh(R,W,nt,K){L!==null&&R.isNodeMaterial&&L.setObject(K,R),wt===!0&&ht.setState(R,nt,!1),R.transparent===!0&&R.side===ze&&R.forceSinglePass===!1?(R.side=un,R.needsUpdate=!0,Zs(R,W,K),R.side=Wi,R.needsUpdate=!0,Zs(R,W,K),R.side=ze):Zs(R,W,K)}this.compile=function(R,W,nt=null){nt===null&&(nt=R),L!==null&&L.renderStart(R,W,nt),A=st.get(nt),A.init(W),w.push(A),nt.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),R!==nt&&R.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),A.setupLights(),L!==null&&L.updateLights(A.state.lightsArray),Ct=this.localClippingEnabled,wt=ht.init(this.clippingPlanes,Ct),wt===!0&&ht.setGlobalState(this.clippingPlanes,W),L!==null&&St.render(A.state.shadowsArray,nt,W);const K=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Et=j.material;if(Et)if(Array.isArray(Et))for(let qt=0;qt<Et.length;qt++){const Tt=Et[qt];Oh(Tt,nt,W,j),K.add(Tt)}else Oh(Et,nt,W,j),K.add(Et)}),A=w.pop(),L!==null&&L.renderEnd(),K},this.compileAsync=function(R,W,nt=null){const K=this.compile(R,W,nt);return new Promise(j=>{function Et(){if(K.forEach(function(qt){const Ut=Vt.get(qt).currentProgram;(Ut===void 0||Ut.isReady())&&K.delete(qt)}),K.size===0){j(R);return}setTimeout(Et,10)}zt.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Ia=null;function n0(R){Ia&&Ia(R)}function kh(){Zi.stop()}function Bh(){Zi.start()}const Zi=new ip;Zi.setAnimationLoop(n0),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(R){Ia=R,vt.setAnimationLoop(R),R===null?Zi.stop():Zi.start()},vt.addEventListener("sessionstart",kh),vt.addEventListener("sessionend",Bh),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;L!==null&&L.renderStart(R,W);const nt=vt.enabled===!0&&vt.isPresenting===!0,K=N!==null&&(q===null||nt)&&N.begin(C,q);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(W),W=vt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,W,q),A=st.get(R,w.length),A.init(W),A.state.textureUnits=Zt.getTextureUnits(),w.push(A),Lt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?ie.setFromArrayCamera(W):kt.setFromProjectionMatrix(Lt,Wn,W.reversedDepth),Ct=this.localClippingEnabled,wt=ht.init(this.clippingPlanes,Ct),x=gt.get(R,_.length),x.init(),_.push(x),this.info.render.frame++,vt.enabled===!0&&vt.isPresenting===!0){const qt=C.xr.getDepthSensingMesh();qt!==null&&Da(qt,W,-1/0,C.sortObjects)}Da(R,W,0,C.sortObjects),x.finish(),L!==null&&L.updateLights(A.state.lightsArray),C.sortObjects===!0&&x.sort(tt,ot),yt=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,yt&&z.addToRenderList(x,R),this.info.autoReset===!0&&this.info.reset(),wt===!0&&ht.beginShadows();const j=A.state.shadowsArray;if(St.render(j,R,W),wt===!0&&ht.endShadows(),(K&&N.hasRenderPass())===!1){const qt=x.opaque,Tt=x.transmissive;if(A.setupLights(),W.isArrayCamera){const Ut=W.cameras;if(Tt.length>0)for(let $t=0,ae=Ut.length;$t<ae;$t++){const me=Ut[$t];Vh(qt,Tt,R,me)}yt&&z.render(R);for(let $t=0,ae=Ut.length;$t<ae;$t++){const me=Ut[$t];zh(x,R,me,me.viewport)}}else Tt.length>0&&Vh(qt,Tt,R,W),yt&&z.render(R),zh(x,R,W)}q!==null&&O===0&&(Zt.updateMultisampleRenderTarget(q),Zt.updateRenderTargetMipmap(q)),K&&N.end(C),R.isScene===!0&&R.onAfterRender(C,R,W),Mt.resetDefaultState(),V=-1,H=null,w.pop(),w.length>0?(A=w[w.length-1],Zt.setTextureUnits(A.state.textureUnits),wt===!0&&ht.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?x=_[_.length-1]:x=null,L!==null&&L.renderEnd()};function Da(R,W,nt,K){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)nt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)A.pushLight(R),R.castShadow&&A.pushShadow(R);else if(R.isSprite){const qt=W.isArrayCamera?ie:kt;if(!R.frustumCulled||R.intersectsFrustum(qt)){K&&Wt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Lt);const Tt=ut.update(R),Ut=R.material;Ut.visible&&x.push(R,Tt,Ut,nt,Wt.z,null,W)}}else if(R.isMesh||R.isLine||R.isPoints){const qt=W.isArrayCamera?ie:kt;if(!R.frustumCulled||R.intersectsFrustum(qt)){const Tt=ut.update(R),Ut=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Wt.copy(R.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Wt.copy(Tt.boundingSphere.center)),Wt.applyMatrix4(R.matrixWorld).applyMatrix4(Lt)),Array.isArray(Ut)){const $t=Tt.groups;for(let ae=0,me=$t.length;ae<me;ae++){const Yt=$t[ae],ge=Ut[Yt.materialIndex];ge&&ge.visible&&x.push(R,Tt,ge,nt,Wt.z,Yt,W)}}else Ut.visible&&x.push(R,Tt,Ut,nt,Wt.z,null,W)}}}const Et=R.children;for(let qt=0,Tt=Et.length;qt<Tt;qt++)Da(Et[qt],W,nt,K)}function zh(R,W,nt,K){const{opaque:j,transmissive:Et,transparent:qt}=R;A.setupLightsView(nt),wt===!0&&ht.setGlobalState(C.clippingPlanes,nt),K&&pt.viewport(Y.copy(K)),j.length>0&&Jr(j,W,nt),Et.length>0&&Jr(Et,W,nt),qt.length>0&&Jr(qt,W,nt),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Vh(R,W,nt,K){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[K.id]===void 0){const Yt=zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[K.id]=new nn(1,1,{generateMipmaps:!0,type:Yt?gn:An,minFilter:oi,samples:Math.max(4,Xt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}const Et=A.state.transmissionRenderTarget[K.id],qt=K.viewport||Y;Et.setSize(qt.z*C.transmissionResolutionScale,qt.w*C.transmissionResolutionScale);const Tt=C.getRenderTarget(),Ut=C.getActiveCubeFace(),$t=C.getActiveMipmapLevel();C.setRenderTarget(Et),C.getClearColor(k),Z=C.getClearAlpha(),Z<1&&C.setClearColor(16777215,.5),C.clear(),yt&&z.render(nt);const ae=C.toneMapping;C.toneMapping=ai;const me=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),A.setupLightsView(K),wt===!0&&ht.setGlobalState(C.clippingPlanes,K),Jr(R,nt,K),Zt.updateMultisampleRenderTarget(Et),Zt.updateRenderTargetMipmap(Et),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let ge=0,Ve=W.length;ge<Ve;ge++){const Ce=W[ge],{object:Ee,geometry:rn,material:Kt,group:dn}=Ce;if(Kt.side===ze&&Ee.layers.test(K.layers)){const ye=Kt.side;Kt.side=un,Kt.needsUpdate=!0,Hh(Ee,nt,K,rn,Kt,dn),Kt.side=ye,Kt.needsUpdate=!0,Yt=!0}}Yt===!0&&(Zt.updateMultisampleRenderTarget(Et),Zt.updateRenderTargetMipmap(Et))}C.setRenderTarget(Tt,Ut,$t),C.setClearColor(k,Z),me!==void 0&&(K.viewport=me),C.toneMapping=ae}function Jr(R,W,nt){const K=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Et=R.length;j<Et;j++){const qt=R[j],{object:Tt,geometry:Ut,group:$t}=qt;let ae=qt.material;ae.allowOverride===!0&&K!==null&&(ae=K),Tt.layers.test(nt.layers)&&Hh(Tt,W,nt,Ut,ae,$t)}}function Hh(R,W,nt,K,j,Et){L!==null&&j.isNodeMaterial&&L.setObject(R,j),R.onBeforeRender(C,W,nt,K,j,Et),R.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(C,W,nt,K,R,Et),j.transparent===!0&&j.side===ze&&j.forceSinglePass===!1?(j.side=un,j.needsUpdate=!0,C.renderBufferDirect(nt,W,K,j,R,Et),j.side=Wi,j.needsUpdate=!0,C.renderBufferDirect(nt,W,K,j,R,Et),j.side=ze):C.renderBufferDirect(nt,W,K,j,R,Et),R.onAfterRender(C,W,nt,K,j,Et)}function Gh(R){let W=0;for(const nt of R)nt.texture!==null&&W++;return W}function Zs(R,W,nt){W.isScene!==!0&&(W=it);const K=Vt.get(R),j=A.state.lights,Et=A.state.shadowsArray,qt=j.state.version,Tt=rt.getParameters(R,j.state,Et,W,nt,A.state.lightProbeGridArray),Ut=rt.getProgramCacheKey(Tt);let $t=K.programs;K.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?W.environment:null,K.fog=W.fog;const ae=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;K.envMap=P.get(R.envMap||K.environment,ae),K.envMapRotation=K.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",be),$t=new Map,K.programs=$t,K.programVariants=new Map);let me=$t.get(Ut);if(me!==void 0){if(K.currentProgram===me&&K.lightsStateVersion===qt)return Xh(R,Tt),me}else Tt.uniforms=rt.getUniforms(R),L!==null&&R.isNodeMaterial&&L.build(R,nt,Tt),R.onBeforeCompile(Tt,C),me=rt.acquireProgram(Tt,Ut),$t.set(Ut,me),K.uniforms=Tt.uniforms;const Yt=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Yt.clippingPlanes=ht.uniform),Xh(R,Tt),K.needsLights=o0(R),K.lightsStateVersion=qt,K.needsLights&&(Yt.ambientLightColor.value=j.state.ambient,Yt.lightProbe.value=j.state.probe,Yt.sunLights.value=j.state.sun,Yt.sunLightShadows.value=j.state.sunShadow,Yt.directionalLights.value=j.state.directional,Yt.directionalLightShadows.value=j.state.directionalShadow,Yt.spotLights.value=j.state.spot,Yt.spotLightShadows.value=j.state.spotShadow,Yt.rectAreaLights.value=j.state.rectArea,Yt.ltc_1.value=j.state.rectAreaLTC1,Yt.ltc_2.value=j.state.rectAreaLTC2,Yt.pointLights.value=j.state.point,Yt.pointLightShadows.value=j.state.pointShadow,Yt.hemisphereLights.value=j.state.hemi,Yt.sunShadowMatrix.value=j.state.sunShadowMatrix,Yt.sunShadowCascade.value=j.state.sunShadowCascade,Yt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Yt.spotLightMatrix.value=j.state.spotLightMatrix,Yt.spotLightMap.value=j.state.spotLightMap,Yt.pointShadowMatrix.value=j.state.pointShadowMatrix),K.numLightProbeGrids=Gh(A.state.lightProbeGridArray),K.currentProgram=me,K.uniformsList=null,me}function i0(R,W,nt,K,j){const Et=Vt.get(R),qt=Et.currentProgram.id+","+K+","+j;let Tt=Et.programVariants.get(qt);return Tt===void 0?(Tt=Zs(R,W,nt),Et.programVariants.set(qt,Tt)):(Et.currentProgram=Tt,Et.uniformsList=null,Et.outputColorSpace=K,Et.toneMapping=j),Tt}function Wh(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=ta.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Xh(R,W){const nt=Vt.get(R);nt.outputColorSpace=W.outputColorSpace,nt.batching=W.batching,nt.batchingColor=W.batchingColor,nt.instancing=W.instancing,nt.instancingColor=W.instancingColor,nt.instancingMorph=W.instancingMorph,nt.skinning=W.skinning,nt.morphTargets=W.morphTargets,nt.morphNormals=W.morphNormals,nt.morphColors=W.morphColors,nt.morphTargetsCount=W.morphTargetsCount,nt.numClippingPlanes=W.numClippingPlanes,nt.numIntersection=W.numClipIntersection,nt.vertexAlphas=W.vertexAlphas,nt.vertexTangents=W.vertexTangents,nt.toneMapping=W.toneMapping}function s0(R,W,nt,K,j){W.isScene!==!0&&(W=it),Zt.resetTextureUnits();const Et=W.fog,qt=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?W.environment:null,Tt=q===null?C.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:pe.workingColorSpace,Ut=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,$t=P.get(K.envMap||qt,Ut),ae=K.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,me=!!nt.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Yt=!!nt.morphAttributes.position,ge=!!nt.morphAttributes.normal,Ve=!!nt.morphAttributes.color;let Ce=ai;K.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ce=C.toneMapping);const Ee=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,rn=Ee!==void 0?Ee.length:0,Kt=Vt.get(K),dn=A.state.lights;if(wt===!0&&(Ct===!0||R!==H)){const Fe=R===H&&K.id===V;ht.setState(K,R,Fe)}let ye=!1,$i=!1;K.version===Kt.__version?Kt.needsLights&&Kt.lightsStateVersion!==dn.state.version||j.isBatchedMesh&&Kt.batching===!1||!j.isBatchedMesh&&Kt.batching===!0||j.isBatchedMesh&&Kt.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Kt.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Kt.instancing===!1||!j.isInstancedMesh&&Kt.instancing===!0||j.isSkinnedMesh&&Kt.skinning===!1||!j.isSkinnedMesh&&Kt.skinning===!0||j.isInstancedMesh&&Kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Kt.instancingMorph===!1&&j.morphTexture!==null||Kt.envMap!==$t||K.fog===!0&&Kt.fog!==Et||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==ht.numPlanes||Kt.numIntersection!==ht.numIntersection)||Kt.vertexAlphas!==ae||Kt.vertexTangents!==me||Kt.morphTargets!==Yt||Kt.morphNormals!==ge||Kt.morphColors!==Ve||Kt.morphTargetsCount!==rn||Kt.numLightProbeGrids!==Gh(A.state.lightProbeGridArray)?ye=!0:(Kt.outputColorSpace!==Tt||Kt.toneMapping!==Ce)&&($i=!0):(ye=!0,Kt.__version=K.version);let on=Kt.currentProgram;(ye===!0||$i===!0)&&(on=$i===!0?i0(K,W,j,Tt,Ce):Zs(K,W,j),L&&K.isNodeMaterial&&L.onUpdateProgram(K,on,Kt));let jr=!1,Ci=!1,Ji=!1;const xe=on.getUniforms(),en=Kt.uniforms;if(pt.useProgram(on.program)&&(jr=!0,Ci=!0,Ji=!0),K.id!==V&&(V=K.id,Ci=!0),jr||H!==R){pt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),xe.setValue(B,"projectionMatrix",R.projectionMatrix),xe.setValue(B,"viewMatrix",R.matrixWorldInverse);const Je=xe.map.cameraPosition;Je!==void 0&&Je.setValue(B,Gt.setFromMatrixPosition(R.matrixWorld)),Xt.logarithmicDepthBuffer&&xe.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&xe.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),H!==R&&(H=R,Ci=!0,Ji=!0)}if(Kt.needsLights&&(dn.state.sunShadowMap.length>0&&xe.setValue(B,"sunShadowMap",dn.state.sunShadowMap,Zt),dn.state.directionalShadowMap.length>0&&xe.setValue(B,"directionalShadowMap",dn.state.directionalShadowMap,Zt),dn.state.spotShadowMap.length>0&&xe.setValue(B,"spotShadowMap",dn.state.spotShadowMap,Zt),dn.state.pointShadowMap.length>0&&xe.setValue(B,"pointShadowMap",dn.state.pointShadowMap,Zt)),j.isSkinnedMesh){xe.setOptional(B,j,"bindMatrix"),xe.setOptional(B,j,"bindMatrixInverse");const Fe=j.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),xe.setValue(B,"boneTexture",Fe.boneTexture,Zt))}j.isBatchedMesh&&(xe.setOptional(B,j,"batchingTexture"),xe.setValue(B,"batchingTexture",j._matricesTexture,Zt),xe.setOptional(B,j,"batchingIdTexture"),xe.setValue(B,"batchingIdTexture",j._indirectTexture,Zt),xe.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&xe.setValue(B,"batchingColorTexture",j._colorsTexture,Zt));const Bn=nt.morphAttributes;if((Bn.position!==void 0||Bn.normal!==void 0||Bn.color!==void 0)&&dt.update(j,nt,on),(Ci||Kt.receiveShadow!==j.receiveShadow)&&(Kt.receiveShadow=j.receiveShadow,xe.setValue(B,"receiveShadow",j.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&W.environment!==null&&(en.envMapIntensity.value=W.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=vM()),Ci){if(xe.setValue(B,"toneMappingExposure",C.toneMappingExposure),Kt.needsLights&&r0(en,Ji),Et&&K.fog===!0&&mt.refreshFogUniforms(en,Et),mt.refreshMaterialUniforms(en,K,J,ct,A.state.transmissionRenderTarget[R.id]),Kt.needsLights&&Kt.numLightProbeGrids>0){const Fe=E;let Je=0;for(const pi of A.state.lightProbeGridArray)pi.texture!==null&&(Fe.textures[Je]=pi.texture,Fe.min[Je]=pi.boundingBox.min,Fe.max[Je]=pi.boundingBox.max,Fe.resolution[Je]=pi.resolution,Je++);for(const pi in Fe)Fe[pi].length=Je;en.probesSH.value=Fe.textures,en.probesMin.value=Fe.min,en.probesMax.value=Fe.max,en.probesResolution.value=Fe.resolution}ta.upload(B,Wh(Kt),en,Zt)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ta.upload(B,Wh(Kt),en,Zt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&xe.setValue(B,"center",j.center),xe.setValue(B,"modelViewMatrix",j.modelViewMatrix),xe.setValue(B,"normalMatrix",j.normalMatrix),xe.setValue(B,"modelMatrix",j.matrixWorld),K.uniformsGroups!==void 0){const Fe=K.uniformsGroups;for(let Je=0,pi=Fe.length;Je<pi;Je++){const Yh=Fe[Je];jt.update(Yh,on),jt.bind(Yh,on)}}return on}function r0(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.sunLights.needsUpdate=W,R.sunLightShadows.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function o0(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,W,nt){const K=Vt.get(R);K.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Vt.get(R.texture).__webglTexture=W,Vt.get(R.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:nt,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const nt=Vt.get(R);nt.__webglFramebuffer=W,nt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,nt=0){q=R,U=W,O=nt;let K=null,j=!1,Et=!1;if(R){const Tt=Vt.get(R);if(Tt.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(B.FRAMEBUFFER,Tt.__webglFramebuffer),Y.copy(R.viewport),at.copy(R.scissor),Q=R.scissorTest,pt.viewport(Y),pt.scissor(at),pt.setScissorTest(Q),V=-1;return}else if(Tt.__webglFramebuffer===void 0)Zt.setupRenderTarget(R);else if(Tt.__hasExternalTextures)Zt.rebindTextures(R,Vt.get(R.texture).__webglTexture,Vt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ae=R.depthTexture;if(Tt.__boundDepthTexture!==ae){if(ae!==null&&Vt.has(ae)&&(R.width!==ae.image.width||R.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Zt.setupDepthRenderbuffer(R)}}const Ut=R.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(Et=!0);const $t=Vt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($t[W])?K=$t[W][nt]:K=$t[W],j=!0):R.samples>0&&Zt.useMultisampledRTT(R)===!1?K=Vt.get(R).__webglMultisampledFramebuffer:Array.isArray($t)?K=$t[nt]:K=$t,Y.copy(R.viewport),at.copy(R.scissor),Q=R.scissorTest}else Y.copy(ft).multiplyScalar(J).floor(),at.copy(Rt).multiplyScalar(J).floor(),Q=Bt;if(nt!==0&&(K=F),pt.bindFramebuffer(B.FRAMEBUFFER,K)&&pt.drawBuffers(R,K),pt.viewport(Y),pt.scissor(at),pt.setScissorTest(Q),j){const Tt=Vt.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Tt.__webglTexture,nt)}else if(Et){const Tt=W;for(let Ut=0;Ut<R.textures.length;Ut++){const $t=Vt.get(R.textures[Ut]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ut,$t.__webglTexture,nt,Tt)}}else if(R!==null&&nt!==0){const Tt=Vt.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Tt.__webglTexture,nt)}V=-1};function qh(R){const W=Vt.get(R);return(W.__readFormat!==R.format||W.__readType!==R.type)&&(W.__readFormat=R.format,W.__readType=R.type,W.__formatReadable=Xt.textureFormatReadable(R.format),W.__typeReadable=Xt.textureTypeReadable(R.type)),W}this.readRenderTargetPixels=function(R,W,nt,K,j,Et,qt,Tt=0){if(!(R&&R.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qt!==void 0&&(Ut=Ut[qt],Array.isArray(Ut)&&(Ut=Ut[0])),Ut){pt.bindFramebuffer(B.FRAMEBUFFER,Ut);try{const $t=R.textures[Tt],ae=$t.format,me=$t.type;R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Tt);const Yt=qh($t);if(Yt.__formatReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Yt.__typeReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-K&&nt>=0&&nt<=R.height-j&&B.readPixels(W,nt,K,j,xt.convert(ae),xt.convert(me),Et)}finally{const $t=q!==null?Vt.get(q).__webglFramebuffer:null;pt.bindFramebuffer(B.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,W,nt,K,j,Et,qt,Tt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qt!==void 0&&(Ut=Ut[qt],Array.isArray(Ut)&&(Ut=Ut[0])),Ut)if(W>=0&&W<=R.width-K&&nt>=0&&nt<=R.height-j){pt.bindFramebuffer(B.FRAMEBUFFER,Ut);const $t=R.textures[Tt],ae=$t.format,me=$t.type;R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Tt);const Yt=qh($t);if(Yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ge),B.bufferData(B.PIXEL_PACK_BUFFER,Et.byteLength,B.STREAM_READ),B.readPixels(W,nt,K,j,xt.convert(ae),xt.convert(me),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const Ve=q!==null?Vt.get(q).__webglFramebuffer:null;pt.bindFramebuffer(B.FRAMEBUFFER,Ve);const Ce=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await W0(B,Ce,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ge),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Et),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ge),B.deleteSync(Ce),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,nt=0){const K=Math.pow(2,-nt),j=Math.floor(R.image.width*K),Et=Math.floor(R.image.height*K),qt=W!==null?W.x:0,Tt=W!==null?W.y:0;Zt.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,nt,0,0,qt,Tt,j,Et),pt.unbindTexture()},this.copyTextureToTexture=function(R,W,nt=null,K=null,j=0,Et=0){let qt,Tt,Ut,$t,ae,me,Yt,ge,Ve;const Ce=R.isCompressedTexture?R.mipmaps[Et]:R.image;if(nt!==null)qt=nt.max.x-nt.min.x,Tt=nt.max.y-nt.min.y,Ut=nt.isBox3?nt.max.z-nt.min.z:1,$t=nt.min.x,ae=nt.min.y,me=nt.isBox3?nt.min.z:0;else{const xe=Math.pow(2,-j);qt=Math.floor(Ce.width*xe),Tt=Math.floor(Ce.height*xe),R.isDataArrayTexture?Ut=Ce.depth:R.isData3DTexture?Ut=Math.floor(Ce.depth*xe):Ut=1,$t=0,ae=0,me=0}K!==null?(Yt=K.x,ge=K.y,Ve=K.z):(Yt=0,ge=0,Ve=0);const Ee=xt.convert(W.format),rn=xt.convert(W.type);let Kt;W.isData3DTexture?(Zt.setTexture3D(W,0),Kt=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Zt.setTexture2DArray(W,0),Kt=B.TEXTURE_2D_ARRAY):(Zt.setTexture2D(W,0),Kt=B.TEXTURE_2D),pt.activeTexture(B.TEXTURE0),pt.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),pt.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),pt.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const dn=pt.getParameter(B.UNPACK_ROW_LENGTH),ye=pt.getParameter(B.UNPACK_IMAGE_HEIGHT),$i=pt.getParameter(B.UNPACK_SKIP_PIXELS),on=pt.getParameter(B.UNPACK_SKIP_ROWS),jr=pt.getParameter(B.UNPACK_SKIP_IMAGES);pt.pixelStorei(B.UNPACK_ROW_LENGTH,Ce.width),pt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ce.height),pt.pixelStorei(B.UNPACK_SKIP_PIXELS,$t),pt.pixelStorei(B.UNPACK_SKIP_ROWS,ae),pt.pixelStorei(B.UNPACK_SKIP_IMAGES,me);const Ci=R.isDataArrayTexture||R.isData3DTexture,Ji=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const xe=Vt.get(R),en=Vt.get(W),Bn=Vt.get(xe.__renderTarget),Fe=Vt.get(en.__renderTarget);pt.bindFramebuffer(B.READ_FRAMEBUFFER,Bn.__webglFramebuffer),pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Je=0;Je<Ut;Je++)Ci&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Vt.get(R).__webglTexture,j,me+Je),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Vt.get(W).__webglTexture,Et,Ve+Je)),B.blitFramebuffer($t,ae,$t+qt,ae+Tt,Yt,ge,Yt+qt,ge+Tt,B.DEPTH_BUFFER_BIT,B.NEAREST);pt.bindFramebuffer(B.READ_FRAMEBUFFER,null),pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Vt.has(R)){const xe=Vt.get(R),en=Vt.get(W);pt.bindFramebuffer(B.READ_FRAMEBUFFER,b),pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,D);for(let Bn=0;Bn<Ut;Bn++)Ci?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,xe.__webglTexture,j,me+Bn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,xe.__webglTexture,j),Ji?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,en.__webglTexture,Et,Ve+Bn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,en.__webglTexture,Et),j!==0?B.blitFramebuffer($t,ae,$t+qt,ae+Tt,Yt,ge,Yt+qt,ge+Tt,B.COLOR_BUFFER_BIT,B.NEAREST):Ji?B.copyTexSubImage3D(Kt,Et,Yt,ge,Ve+Bn,$t,ae,qt,Tt):B.copyTexSubImage2D(Kt,Et,Yt,ge,$t,ae,qt,Tt);pt.bindFramebuffer(B.READ_FRAMEBUFFER,null),pt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ji?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Kt,Et,Yt,ge,Ve,qt,Tt,Ut,Ee,rn,Ce.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Kt,Et,Yt,ge,Ve,qt,Tt,Ut,Ee,Ce.data):B.texSubImage3D(Kt,Et,Yt,ge,Ve,qt,Tt,Ut,Ee,rn,Ce):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Et,Yt,ge,qt,Tt,Ee,rn,Ce.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Et,Yt,ge,Ce.width,Ce.height,Ee,Ce.data):B.texSubImage2D(B.TEXTURE_2D,Et,Yt,ge,qt,Tt,Ee,rn,Ce);pt.pixelStorei(B.UNPACK_ROW_LENGTH,dn),pt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ye),pt.pixelStorei(B.UNPACK_SKIP_PIXELS,$i),pt.pixelStorei(B.UNPACK_SKIP_ROWS,on),pt.pixelStorei(B.UNPACK_SKIP_IMAGES,jr),Et===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&B.generateMipmap(Kt),pt.unbindTexture()},this.initRenderTarget=function(R){Vt.get(R).__webglFramebuffer===void 0&&Zt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Zt.setTextureCube(R,0):R.isData3DTexture?Zt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Zt.setTexture2DArray(R,0):Zt.setTexture2D(R,0),pt.unbindTexture()},this.resetState=function(){U=0,O=0,q=null,pt.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}const gd={type:"change"},wh={type:"start"},pp={type:"end"},Ro=new Gs,_d=new En,yM=Math.cos(70*tn.DEG2RAD),We=new y,xn=2*Math.PI,Me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ml=1e-6;class MM extends Tg{constructor(t,e=null){super(t,e),this.state=Me.NONE,this.target=new y,this.cursor=new y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ds.ROTATE,MIDDLE:Ds.DOLLY,RIGHT:Ds.PAN},this.touches={ONE:Is.ROTATE,TWO:Is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new y,this._lastQuaternion=new ve,this._lastTargetPosition=new y,this._quat=new ve().setFromUnitVectors(t.up,new y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dc,this._sphericalDelta=new Dc,this._scale=1,this._panOffset=new y,this._rotateStart=new Ht,this._rotateEnd=new Ht,this._rotateDelta=new Ht,this._panStart=new Ht,this._panEnd=new Ht,this._panDelta=new Ht,this._dollyStart=new Ht,this._dollyEnd=new Ht,this._dollyDelta=new Ht,this._dollyDirection=new y,this._mouse=new Ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bM.bind(this),this._onPointerDown=SM.bind(this),this._onPointerUp=wM.bind(this),this._onContextMenu=LM.bind(this),this._onMouseWheel=AM.bind(this),this._onKeyDown=RM.bind(this),this._onTouchStart=CM.bind(this),this._onTouchMove=PM.bind(this),this._onMouseDown=TM.bind(this),this._onMouseMove=EM.bind(this),this._interceptControlDown=IM.bind(this),this._interceptControlUp=DM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Me.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gd),this.update(),this.state=Me.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;We.copy(e).sub(this.target),We.applyQuaternion(this._quat),this._spherical.setFromVector3(We),this.autoRotate&&this.state===Me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=xn:n>Math.PI&&(n-=xn),i<-Math.PI?i+=xn:i>Math.PI&&(i-=xn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(We.setFromSpherical(this._spherical),We.applyQuaternion(this._quatInverse),e.copy(this.target).add(We),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=We.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new y(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=We.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ro.origin.copy(this.object.position),Ro.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ro.direction))<yM?this.object.lookAt(this.target):(_d.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ro.intersectPlane(_d,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ml||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ml||this._lastTargetPosition.distanceToSquared(this.target)>ml?(this.dispatchEvent(gd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?xn/60*this.autoRotateSpeed*t:xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){We.setFromMatrixColumn(e,0),We.multiplyScalar(-t),this._panOffset.add(We)}_panUp(t,e){this.screenSpacePanning===!0?We.setFromMatrixColumn(e,1):(We.setFromMatrixColumn(e,0),We.crossVectors(this.object.up,We)),We.multiplyScalar(t),this._panOffset.add(We)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;We.copy(i).sub(this.target);let r=We.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function SM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function bM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function wM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pp),this.state=Me.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function TM(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Me.DOLLY;break;case Ds.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Me.ROTATE}break;case Ds.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Me.PAN}break;default:this.state=Me.NONE}this.state!==Me.NONE&&this.dispatchEvent(wh)}function EM(s){switch(this.state){case Me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function AM(s){this.enabled===!1||this.enableZoom===!1||this.state!==Me.NONE||(s.preventDefault(),this.dispatchEvent(wh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(pp))}function RM(s){this.enabled!==!1&&this._handleKeyDown(s)}function CM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Is.ROTATE:if(this.enableRotate===!1){this.state=Me.NONE;break}this._handleTouchStartRotate(s),this.state=Me.TOUCH_ROTATE;break;case Is.PAN:if(this.enablePan===!1){this.state=Me.NONE;break}this._handleTouchStartPan(s),this.state=Me.TOUCH_PAN;break;default:this.state=Me.NONE}break;case 2:switch(this.touches.TWO){case Is.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Me.TOUCH_DOLLY_PAN;break;case Is.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Me.TOUCH_DOLLY_ROTATE;break;default:this.state=Me.NONE}break;default:this.state=Me.NONE}this.state!==Me.NONE&&this.dispatchEvent(wh)}function PM(s){switch(this._trackPointer(s),this.state){case Me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Me.NONE}}function LM(s){this.enabled!==!1&&s.preventDefault()}function IM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function DM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ki(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const It=(s,t,e)=>s<t?t:s>e?e:s,NM=s=>It(s,0,1),et=(s,t,e)=>s+(t-s)*e,At=Math.PI/180;function $(s,t,e){const n=NM((e-s)/(t-s));return n*n*(3-2*n)}function Ln(s,t){const e=s.length,n=It(t,0,e-1),i=Math.min(Math.floor(n),e-2),r=n-i,o=s[Math.max(i-1,0)],a=s[i],l=s[i+1],c=s[Math.min(i+2,e-1)];return .5*(2*a+(-o+l)*r+(2*o-5*a+4*l-c)*r*r+(-o+3*a-3*l+c)*r*r*r)}function Cn(s,t,e,n){return et(s,t,1-Math.exp(-e*n))}function mp(s,t,e,n){return s+Math.atan2(Math.sin(t-s),Math.cos(t-s))*(1-Math.exp(-e*n))}function vd(s,t){let e=s*374761393+t*668265263|0;return e=Math.imul(e^e>>>13,1274126177),((e^e>>>16)>>>0)/4294967296}function Ge(s,t=0){const e=Math.floor(s),n=s-e,i=n*n*(3-2*n);return et(vd(e,t),vd(e+1,t),i)*2-1}const _t=(s,t,e)=>t+(e-t)*s();function FM(s,t,e,n=2){return t+(e-t)*Math.pow(s(),n)}class Ti{constructor(t=6,e=.5){this.freq=t,this.zeta=e}freq;zeta;x=0;v=0;step(t,e){const n=this.freq*Math.PI*2,i=Math.max(1,Math.ceil(e*this.freq*8)),r=e/i;for(let o=0;o<i;o++)this.v+=(-n*n*(this.x-t)-2*this.zeta*n*this.v)*r,this.x+=this.v*r;return this.x}kick(t){this.v+=t}}const xd=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}
`,UM=`
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
`,yd=4,OM=`
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
`;function gp(s=0){const t=Ki(7),e=[],n=[];for(let c=0;c<48;c++){const h=(t()-.5)*Math.PI*2,u=(t()-.35)*1.2;e.push(new y(Math.sin(h)*Math.cos(u),Math.sin(u),-Math.cos(h)*Math.cos(u)).normalize()),n.push(new Ht(.06+t()*.14,.15+t()*.6))}const i=new mn({vertexShader:xd,fragmentShader:UM,uniforms:{uTime:{value:0},uEnv:{value:0},uMist:{value:s},uBlobs:{value:e},uBlobR:{value:n},uBlobCos:{value:n.map(c=>Math.cos(c.x))}},side:un,depthWrite:!1}),r=new _e(new hi(50,64,32),i);r.frustumCulled=!1,r.renderOrder=1e3;const o=new nn(1,1,{type:gn,depthBuffer:!1}),a=new mn({vertexShader:xd,fragmentShader:OM,uniforms:{tSky:{value:o.texture},uInv:{value:new Ht(1,1)},uTime:i.uniforms.uTime},side:un,depthWrite:!1}),l=new Ht;return{mesh:r,material:i,draw(c,h){c.getDrawingBufferSize(l);const u=Math.ceil(l.x/yd),d=Math.ceil(l.y/yd);(o.width!==u||o.height!==d)&&o.setSize(u,d),a.uniforms.uInv.value.set(1/l.x,1/l.y);const f=c.getRenderTarget();r.material=i,c.setRenderTarget(o),c.render(r,h),c.setRenderTarget(f),r.material=a}}}const Ue=new Nn,Co=new y,Md=new Ht,Sd=new Ht,bd=new Ht;class kM{constructor(t){this.geometry=t.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(t){return this.weightAttribute=t?this.geometry.getAttribute(t):null,this}build(){const t=this.indexAttribute,e=this.positionAttribute,n=this.weightAttribute,i=t?t.count/3:e.count/3,r=new Float32Array(i);for(let l=0;l<i;l++){let c=1,h=3*l,u=3*l+1,d=3*l+2;t&&(h=t.getX(h),u=t.getX(u),d=t.getX(d)),n&&(c=n.getX(h)+n.getX(u)+n.getX(d)),Ue.a.fromBufferAttribute(e,h),Ue.b.fromBufferAttribute(e,u),Ue.c.fromBufferAttribute(e,d),c*=Ue.getArea(),r[l]=c}const o=new Float32Array(i);let a=0;for(let l=0;l<i;l++)a+=r[l],o[l]=a;return this.distribution=o,this}setRandomGenerator(t){return this.randomFunction=t,this}sample(t,e,n,i){const r=this._sampleFaceIndex();return this._sampleFace(r,t,e,n,i)}_sampleFaceIndex(){const t=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*t)}_binarySearch(t){const e=this.distribution;let n=0,i=e.length-1,r=-1;for(;n<=i;){const o=Math.ceil((n+i)/2);if(o===0||e[o-1]<=t&&e[o]>t){r=o;break}else t<e[o]?i=o-1:n=o+1}return r}_sampleFace(t,e,n,i,r){let o=this.randomFunction(),a=this.randomFunction();o+a>1&&(o=1-o,a=1-a);const l=this.indexAttribute;let c=t*3,h=t*3+1,u=t*3+2;return l&&(c=l.getX(c),h=l.getX(h),u=l.getX(u)),Ue.a.fromBufferAttribute(this.positionAttribute,c),Ue.b.fromBufferAttribute(this.positionAttribute,h),Ue.c.fromBufferAttribute(this.positionAttribute,u),e.set(0,0,0).addScaledVector(Ue.a,o).addScaledVector(Ue.b,a).addScaledVector(Ue.c,1-(o+a)),n!==void 0&&(this.normalAttribute!==void 0?(Ue.a.fromBufferAttribute(this.normalAttribute,c),Ue.b.fromBufferAttribute(this.normalAttribute,h),Ue.c.fromBufferAttribute(this.normalAttribute,u),n.set(0,0,0).addScaledVector(Ue.a,o).addScaledVector(Ue.b,a).addScaledVector(Ue.c,1-(o+a)).normalize()):Ue.getNormal(n)),i!==void 0&&this.colorAttribute!==void 0&&(Ue.a.fromBufferAttribute(this.colorAttribute,c),Ue.b.fromBufferAttribute(this.colorAttribute,h),Ue.c.fromBufferAttribute(this.colorAttribute,u),Co.set(0,0,0).addScaledVector(Ue.a,o).addScaledVector(Ue.b,a).addScaledVector(Ue.c,1-(o+a)),i.r=Co.x,i.g=Co.y,i.b=Co.z),r!==void 0&&this.uvAttribute!==void 0&&(Md.fromBufferAttribute(this.uvAttribute,c),Sd.fromBufferAttribute(this.uvAttribute,h),bd.fromBufferAttribute(this.uvAttribute,u),r.set(0,0).addScaledVector(Md,o).addScaledVector(Sd,a).addScaledVector(bd,1-(o+a))),this}}function wd(s,t){if(t===I0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Ac||t===Nf){let e=s.getIndex();if(e===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===Ac)for(let r=1;r<=n;r++)i.push(e.getX(0)),i.push(e.getX(r)),i.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(e.getX(r)),i.push(e.getX(r+1)),i.push(e.getX(r+2))):(i.push(e.getX(r+2)),i.push(e.getX(r+1)),i.push(e.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}function BM(s){const t=new Map,e=new Map,n=s.clone();return _p(s,n,function(i,r){t.set(r,i),e.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=t.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return e.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function _p(s,t,e){e(s,t);for(let n=0;n<s.children.length;n++)_p(s.children[n],t.children[n],e)}class zM extends Ys{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new XM(e)}),this.register(function(e){return new qM(e)}),this.register(function(e){return new YM(e)}),this.register(function(e){return new n1(e)}),this.register(function(e){return new i1(e)}),this.register(function(e){return new s1(e)}),this.register(function(e){return new ZM(e)}),this.register(function(e){return new $M(e)}),this.register(function(e){return new JM(e)}),this.register(function(e){return new jM(e)}),this.register(function(e){return new WM(e)}),this.register(function(e){return new QM(e)}),this.register(function(e){return new KM(e)}),this.register(function(e){return new e1(e)}),this.register(function(e){return new t1(e)}),this.register(function(e){return new HM(e)}),this.register(function(e){return new Td(e,fe.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Td(e,fe.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new r1(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Er.extractUrlBase(t);o=Er.resolveURL(c,this.path)}else o=Er.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new Qf(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===vp){try{o[fe.KHR_BINARY_GLTF]=new o1(t)}catch(u){i&&i(u);return}r=JSON.parse(o[fe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new x1(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case fe.KHR_MATERIALS_UNLIT:o[u]=new GM;break;case fe.KHR_DRACO_MESH_COMPRESSION:o[u]=new a1(r,this.dracoLoader);break;case fe.KHR_TEXTURE_TRANSFORM:o[u]=new l1;break;case fe.KHR_MESH_QUANTIZATION:o[u]=new c1;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function VM(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}function Be(s,t,e){const n=s.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}const fe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class HM{constructor(t){this.parser=t,this.name=fe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const h=new Ot(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Sn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new yh(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new cg(h),c.distance=u;break;case"spot":c=new ag(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ei(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class GM{constructor(){this.name=fe.KHR_MATERIALS_UNLIT}getMaterialType(){return Xn}extendParams(t,e,n){const i=[];t.color=new Ot(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Sn),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,Xe))}return Promise.all(i)}}class WM{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const n=Be(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class XM{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Be(this.parser,t,this.name)!==null?vn:null}extendMaterialParams(t,e){const n=Be(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Ht(r,r)}return Promise.all(i)}}class qM{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(t){return Be(this.parser,t,this.name)!==null?vn:null}extendMaterialParams(t,e){const n=Be(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return e.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(i)}}class YM{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Be(this.parser,t,this.name)!==null?vn:null}extendMaterialParams(t,e){const n=Be(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class KM{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Be(this.parser,t,this.name)!==null?vn:null}extendMaterialParams(t,e){const n=Be(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class ZM{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_SHEEN}getMaterialType(t){return Be(this.parser,t,this.name)!==null?vn:null}extendMaterialParams(t,e){const n=Be(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];if(e.sheenColor=new Ot(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],Sn)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,Xe)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class $M{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Be(this.parser,t,this.name)!==null?vn:null}extendMaterialParams(t,e){const n=Be(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class JM{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_VOLUME}getMaterialType(t){return Be(this.parser,t,this.name)!==null?vn:null}extendMaterialParams(t,e){const n=Be(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return e.attenuationColor=new Ot().setRGB(r[0],r[1],r[2],Sn),Promise.all(i)}}class jM{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_IOR}getMaterialType(t){return Be(this.parser,t,this.name)!==null?vn:null}extendMaterialParams(t,e){const n=Be(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}}class QM{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Be(this.parser,t,this.name)!==null?vn:null}extendMaterialParams(t,e){const n=Be(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return e.specularColor=new Ot().setRGB(r[0],r[1],r[2],Sn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,Xe)),Promise.all(i)}}class t1{constructor(t){this.parser=t,this.name=fe.EXT_MATERIALS_BUMP}getMaterialType(t){return Be(this.parser,t,this.name)!==null?vn:null}extendMaterialParams(t,e){const n=Be(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(i)}}class e1{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Be(this.parser,t,this.name)!==null?vn:null}extendMaterialParams(t,e){const n=Be(this.parser,t,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class n1{constructor(t){this.parser=t,this.name=fe.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class i1{constructor(t){this.parser=t,this.name=fe.EXT_TEXTURE_WEBP}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class s1{constructor(t){this.parser=t,this.name=fe.EXT_TEXTURE_AVIF}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}}class Td{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class r1{constructor(t){this.name=fe.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Dn.TRIANGLES&&c.mode!==Dn.TRIANGLE_STRIP&&c.mode!==Dn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const v=new Qt,p=new y,m=new ve,M=new y(1,1,1),T=new Lm(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,x),l.SCALE&&M.fromBufferAttribute(l.SCALE,x),T.setMatrixAt(x,v.compose(p,m,M));let E=null;for(const x in l)if(x==="_COLOR_0"){const A=l[x];T.instanceColor=new da(A.array,A.itemSize,A.normalized)}else if(x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"){if(E===null){const _=T.geometry;E=new Se,E.name=_.name;for(const w in _.attributes)E.setAttribute(w,_.attributes[w]);for(const w in _.morphAttributes)E.morphAttributes[w]=_.morphAttributes[w];_.index!==null&&E.setIndex(_.index),E.morphTargetsRelative=_.morphTargetsRelative;for(const w of _.groups)E.addGroup(w.start,w.count,w.materialIndex);_.boundingBox!==null&&(E.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(E.boundingSphere=_.boundingSphere.clone()),E.drawRange.start=_.drawRange.start,E.drawRange.count=_.drawRange.count,E.userData=Object.assign({},_.userData),T.geometry=E}const A=l[x];E.setAttribute(x,new da(A.array,A.itemSize,A.normalized))}Ne.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),f.push(T)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const vp="glTF",rr=12,Ed={JSON:1313821514,BIN:5130562};class o1{constructor(t){this.name=fe.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,rr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==vp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-rr,r=new DataView(t,rr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Ed.JSON){const c=new Uint8Array(t,rr+o,a);this.content=n.decode(c)}else if(l===Ed.BIN){const c=rr+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class a1{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=fe.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Fc[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=Fc[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=Os[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const v=f.attributes[g],p=l[g];p!==void 0&&(v.normalized=p)}u(f)},a,c,Sn,d)})})}}class l1{constructor(){this.name=fe.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){const n=Math.cos(t.rotation),i=Math.sin(t.rotation);t.matrix.set(t.repeat.x*n,t.repeat.y*i,t.offset.x,-t.repeat.x*i,t.repeat.y*n,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}}class c1{constructor(){this.name=fe.KHR_MESH_QUANTIZATION}}class xp extends Ws{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,g=t*c,v=g-c,p=-2*f+3*d,m=f-d,M=1-p,T=m-d+u;for(let E=0;E!==a;E++){const x=o[v+E+a],A=o[v+E+l]*h,_=o[g+E+a],w=o[g+E]*h;r[E]=M*x+T*A+p*_+m*w}return r}}const h1=new ve;class u1 extends xp{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return h1.fromArray(r).normalize().toArray(r),r}}const Dn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Os={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ad={9728:ke,9729:Qe,9984:Af,9985:Zo,9986:gr,9987:oi},Rd={33071:ri,33648:aa,10497:as},gl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Fc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},d1={CUBICSPLINE:void 0,LINEAR:Nr,STEP:Dr},_l={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function f1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new _n({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wi})),s.DefaultMaterial}function ns(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function ei(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function p1(s,t,e){let n=!1,i=!1,r=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function m1(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function g1(s){let t;const e=s.extensions&&s.extensions[fe.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+vl(e.attributes):t=s.indices+":"+vl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+vl(s.targets[n]);return t}function vl(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Uc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const v1=new Qt;class x1{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new VM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?(this.textureLoader=new sg(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new ug(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qf(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ns(r,a,i),ei(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[fe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Er.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=gl[i.type],a=Os[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Le(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=gl[i.type],c=Os[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,p;if(f&&f!==u){const m=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let T=e.cache.get(M);T||(v=new c(a,m*f,i.count*f/h),T=new bm(v,f/h),e.cache.add(M,T)),p=new fh(T,l,d%f/h,g)}else a===null?v=new c(i.count*l):v=new c(a,d,i.count*l),p=new Le(v,l,g);if(i.sparse!==void 0){const m=gl.SCALAR,M=Os[i.sparse.indices.componentType],T=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,x=new M(o[1],T,i.sparse.count*m),A=new c(o[2],E,i.sparse.count*l);a!==null&&(p=new Le(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let _=0,w=x.length;_<w;_++){const N=x[_];if(p.setX(N,A[_*l]),l>=2&&p.setY(N,A[_*l+1]),l>=3&&p.setZ(N,A[_*l+2]),l>=4&&p.setW(N,A[_*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Ad[d.magFilter]||Qe,h.minFilter=Ad[d.minFilter]||oi,h.wrapS=Rd[d.wrapS]||as,h.wrapT=Rd[d.wrapT]||as,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==ke&&h.minFilter!==Qe,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(d=>d.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1,h;if(e.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,g){e.parse(d,f,g)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");h=Promise.resolve(l).then(function(d){return new Promise(function(f,g){let v=f;e.isImageBitmapLoader===!0&&(v=function(p){const m=new qe(p);m.needsUpdate=!0,f(m)}),e.load(Er.resolveURL(d,r.path),v,void 0,g)})})}const u=h.then(function(d){return c===!0&&a.revokeObjectURL(l),ei(d,o),d.userData.mimeType=o.mimeType||_1(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[t]=u,u}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[fe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[fe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[fe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Wf,li.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ta,li.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return _n}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},l=r.extensions||{},c=[];if(l[fe.KHR_MATERIALS_UNLIT]){const u=i[fe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Ot(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Sn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,Xe)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=ze);const h=r.alphaMode||_l.OPAQUE;if(h===_l.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===_l.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Xn&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ht(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Xn&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Xn){const u=r.emissiveFactor;a.emissive=new Ot().setRGB(u[0],u[1],u[2],Sn)}return r.emissiveTexture!==void 0&&o!==Xn&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,Xe)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),ei(u,r),e.associations.set(u,{materials:t}),r.extensions&&ns(i,u,r),u})}createUniqueName(t){const e=Te.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[fe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return Cd(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=g1(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[fe.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Cd(new Se,c,e),c.mode===Dn.TRIANGLE_STRIP?d=d.then(f=>wd(f,Nf)):c.mode===Dn.TRIANGLE_FAN&&(d=d.then(f=>wd(f,Ac))),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?f1(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(async function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const v=h[f],p=o[f];let m;const M=c[f];if(p.mode===Dn.TRIANGLES||p.mode===Dn.TRIANGLE_STRIP||p.mode===Dn.TRIANGLE_FAN||p.mode===void 0){const T=r.isSkinnedMesh===!0,E=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");T&&E===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=T&&E?new ni(v,M):new _e(v,M),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(p.mode===Dn.LINES)m=new ma(v,M);else if(p.mode===Dn.LINE_STRIP)m=new gh(v,M);else if(p.mode===Dn.LINE_LOOP)m=new Dm(v,M);else if(p.mode===Dn.POINTS)m=new Xf(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&m1(m,r),m.name=e.createUniqueName(r.name||"mesh_"+t),ei(m,r),p.extensions&&ns(i,m,p),e.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&ns(i,u[0],r),u[0];const d=new hn;r.extensions&&ns(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Mn(tn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Aa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),ei(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Qt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new wa(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],v=f.target,p=v.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],v=u[3],p=u[4],m=[];for(let T=0,E=d.length;T<E;T++){const x=d[T],A=f[T],_=g[T],w=v[T],N=p[T];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const C=n._createAnimationTracks(x,A,_,w,N);if(C)for(let I=0;I<C.length;I++)m.push(C[I])}const M=new Jm(r,void 0,m);return ei(M,i),M})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,v1)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){const f=h.userData.pivot,g=u[0];h.pivot=new y().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new ph:c.length>1?h=new hn:c.length===1?h=c[0]:h=new Ne,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ei(h,r),r.extensions&&ns(n,h,r),r.matrix!==void 0){const u=new Qt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new hn;n.name&&(r.name=i.createUniqueName(n.name)),ei(r,n),n.extensions&&ns(e,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){const d=l[h];d.parent!==null?r.add(BM(d)):r.add(d)}const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof li||d instanceof qe)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Ui[r.path]===Ui.weights?(c(t),t.isGroup&&t.children.forEach(c)):l.push(a);let h;switch(Ui[r.path]){case Ui.weights:h=kr;break;case Ui.rotation:h=Br;break;case Ui.translation:case Ui.scale:h=ga;break;default:n.itemSize===1?h=kr:h=ga;break}const u=i.interpolation!==void 0?d1[i.interpolation]:Nr,d=this._getArrayFromAccessor(n);for(let f=0,g=l.length;f<g;f++){const v=new h(l[f]+"."+Ui[r.path],e.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Uc(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof Br?u1:xp;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function y1(s,t,e){const n=t.attributes,i=new fi;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new y(l[0],l[1],l[2]),new y(c[0],c[1],c[2])),a.normalized){const h=Uc(Os[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new y,l=new y;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=Uc(Os[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new kn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Cd(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Fc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return pe.workingColorSpace!==Sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pe.workingColorSpace}" not supported.`),ei(s,t),y1(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?p1(s,t.targets,e):s})}const Pd={round:1,cup:.5,fine:!0,spacing:.8,fuzz:0},M1={name:"Lampornis calolaemus",seed:1207,sections:[{y:-.07,z:-.32,a:60,w:.035,rd:.03,rv:.035},{y:.04,z:-.245,a:60,w:.15,rd:.105,rv:.13},{y:.17,z:-.165,a:63,w:.225,rd:.16,rv:.2},{y:.34,z:-.09,a:68,w:.262,rd:.185,rv:.25},{y:.52,z:-.035,a:76,w:.258,rd:.185,rv:.245},{y:.67,z:-.005,a:84,w:.236,rd:.185,rv:.212},{y:.775,z:.008,a:80,w:.205,rd:.182,rv:.19},{y:.887,z:.052,a:62,w:.15,rd:.17,rv:.17},{y:.926,z:.116,a:38,w:.117,rd:.14,rv:.14},{y:.925,z:.195,a:18,w:.066,rd:.09,rv:.07},{y:.905,z:.245,a:8,w:.03,rd:.032,rv:.028}],throat:[4.5,7.3],spine:{tail:.3,hips:1.9,spine:3,chest:4.1,neck1:5.3,neck2:5.95,head:6.55},eye:{s:7.8,phi:.535,radius:.037,inset:.84},bill:{length:.44,radius:.02,droop:.022,color:460551},skin:1840662,shading:{flank:.6,under:.6,patch:.3,gold:5921324,goldAmount:.22},looks:{body:{width:.03,aspect:2.1,rowStep:.3,tilt:13,lift:1,cup:.3,round:.7,loose:.55,fuzz:.3,base:2104356,tip:5195350,iri:4885036,iriGraze:9071132,iriStrength:.12,iriPower:6,iriAlign:0,jitter:.5,sparkle:.6},belly:{width:.033,aspect:2.5,rowStep:.24,tilt:11,lift:1.2,cup:.25,round:.65,loose:.75,base:2630191,tip:6970485,iri:6982186,iriGraze:9071146,iriStrength:.1,iriPower:5,iriAlign:0,jitter:.5,sparkle:.6},flank:{width:.036,aspect:2.8,rowStep:.24,tilt:12,lift:1.3,cup:.2,round:.55,loose:.9,base:2301226,tip:6313066,iri:5925434,iriGraze:6965802,iriStrength:.06,iriPower:4,iriAlign:0,jitter:.5,sparkle:.7},down:{width:.04,aspect:2.6,rowStep:.24,tilt:26,lift:1.4,cup:.15,round:.5,loose:1,base:1840664,tip:4207930,iri:16777215,iriGraze:16777215,iriStrength:0,iriPower:2,iriAlign:0,jitter:.3},back:{width:.03,aspect:2,rowStep:.31,tilt:11,lift:.9,cup:.35,round:.75,loose:.45,fuzz:.3,base:2039078,tip:4867669,iri:3840570,iriGraze:9071128,iriStrength:.24,iriPower:7,iriAlign:0,jitter:.5,sparkle:.45},scapular:{width:.042,aspect:3.3,rowStep:.24,tilt:21,lift:.8,cup:.3,round:.6,loose:.6,fuzz:.4,base:2170408,tip:5327964,iri:3836474,iriGraze:9071128,iriStrength:.2,iriPower:6,iriAlign:0,jitter:.5,sparkle:.5},collar:{width:.027,aspect:1.45,rowStep:.36,tilt:12,lift:.8,cup:.35,round:1,loose:.3,spacing:.7,fuzz:.12,base:1184536,tip:2369580,iri:2072672,iriGraze:678490,iriStrength:.32,iriPower:12,iriAlign:.3,iriAim:[0,.1,1],jitter:.55,sparkle:.6},head:{width:.017,aspect:1.8,rowStep:.34,tilt:12,lift:.45,cup:.35,round:.9,loose:.4,fuzz:.22,base:1184279,tip:2763315,iri:1866320,iriGraze:5263386,iriStrength:.28,iriPower:7,iriAlign:0,jitter:.45,sparkle:.4},mask:{width:.012,aspect:1.7,rowStep:.36,tilt:10,lift:.2,cup:.3,round:.9,loose:.35,fuzz:.25,base:263173,tip:789517,iri:1054752,iriGraze:0,iriStrength:.04,iriPower:4,iriAlign:0,jitter:.2},velvet:{width:.015,aspect:1.6,rowStep:.28,tilt:6,lift:.15,cup:.2,round:.7,loose:.8,fuzz:.7,base:262915,tip:985865,iri:0,iriGraze:0,iriStrength:0,iriPower:2,iriAlign:0,jitter:.2},stripe:{width:.012,aspect:2.6,rowStep:.24,tilt:6,lift:.2,cup:.15,round:.5,loose:.95,fuzz:1,base:11841962,tip:15526885,iri:16777215,iriGraze:16777215,iriStrength:0,iriPower:2,iriAlign:0,jitter:.2},covert:{width:.046,aspect:2.6,rowStep:.33,tilt:9,lift:.7,cup:.3,round:.7,loose:.4,base:2170151,tip:5129816,iri:3832400,iriGraze:5917226,iriStrength:.18,iriPower:6,iriAlign:0,jitter:.4,sparkle:.5},undertail:{width:.04,aspect:2.9,rowStep:.26,tilt:10,lift:.8,cup:.2,round:.6,loose:.8,base:7827564,tip:13617342,iri:16777215,iriGraze:16777215,iriStrength:0,iriPower:2,iriAlign:0,jitter:.3},wingCovert:{width:.03,aspect:2.3,rowStep:.4,tilt:7,lift:0,cup:.3,round:.8,loose:.22,fuzz:0,base:1512732,tip:4012104,iri:4872824,iriGraze:5917242,iriStrength:.06,iriPower:6,iriAlign:0,jitter:.4,sparkle:.6},gorget:{...Pd,width:.052,aspect:1,rowStep:.3,tilt:8,lift:.5,spacing:.6,base:1706510,tip:4527900,iri:8007935,iriGraze:12595338,iriStrength:2,iriPower:4.2,iriAlign:.74,iriAim:[0,-.5,.87],jitter:.34,channel:"gorget"},crown:{...Pd,width:.019,aspect:1.3,rowStep:.34,tilt:10,lift:.4,fuzz:.45,sparkle:.5,loose:.12,base:330507,tip:662554,iri:1368772,iriGraze:1726680,iriStrength:2.3,iriPower:5,iriAlign:.8,iriAim:[0,-.24,1],jitter:.55,channel:"crown"}},tracts:[{name:"belly",look:"belly",region:{kind:"band",s:[0,3.7],phi:[0,.45],soft:.6}},{name:"flank",look:"flank",region:{kind:"band",s:[1.2,4.2],phi:[.3,.52],soft:.5}},{name:"back",look:"back",region:{kind:"band",s:[.9,6.2],phi:[.55,1]}},{name:"scapular",look:"scapular",region:{kind:"band",s:[3.7,5.6],phi:[.56,.84],soft:.3}},{name:"wingPit",look:"down",region:{kind:"blob",at:[3.8,.44],r:[.3,.035],soft:.5}},{name:"tailCoverts",look:"covert",region:{kind:"band",s:[0,1.15],phi:[0,1]}},{name:"undertail",look:"undertail",region:{kind:"band",s:[0,1.35],phi:[0,.4],soft:.3}},{name:"collar",look:"collar",region:{kind:"blob",at:[4.5,0],r:[.72,.44],soft:.6}},{name:"head",look:"head",region:{kind:"band",s:[6,11],phi:[0,1]}},{name:"velvet",look:"velvet",region:{kind:"blob",at:[8,0],r:[2.25,.63],pow:3,soft:.2}},{name:"mask",look:"mask",region:{kind:"blob",at:[8.3,.5],r:[1,.11]}},{name:"gorget",look:"gorget",region:{kind:"blob",at:[6.35,0],r:[1.4,.27],pow:3}},{name:"chin",look:"gorget",region:{kind:"blob",at:[7.7,0],r:[1.05,.17]}},{name:"crown",look:"crown",region:{kind:"blob",at:[8.5,1],r:[1.3,.4]}},{name:"postocular",look:"stripe",region:{kind:"streak",from:[7.5,.57],to:[6.3,.6],r:[.12,.025]}}],wing:{shoulder:[.185,.64,-.06],upper:.1,fore:.13,hand:.17,primaries:10,secondaries:6,primaryLen:[.34,.9],secondaryLen:[.27,.2],primaryWidth:.062,secondaryWidth:.064,rest:{from:[5.1,93],to:[.6,147],width:[.05,.105,.04],height:.034,cross:[.8,-.02]},color:3878193,sheen:8021618},tail:{rectrices:5,length:[.61,.66],width:.13,droop:62,restFan:.35,maxFan:11,color:1909292},legs:{spread:.075,hip:[.085,.11,-.05],toe:.085,perchRadius:.0405,color:1446159},behaviour:{breathHz:[3.4,5.2],holdCalm:[.4,1.8],holdAlert:[.22,.9],saccade:[.038,42e-5],neckShare:[.22,.3],blinkEvery:[1.8,5.5],ruffleEvery:[60,110],tailEvery:[3,9],wingEvery:[9,22],billUp:14}},Tn={iri:6733892,iriGraze:3116914,iriStrength:.07,iriPower:3,iriAlign:0,jitter:.4,sparkle:.25},yp={name:"Amazona vittata",seed:1493,sections:[{y:-.1,z:-.3,a:58,w:.06,rd:.045,rv:.05},{y:.02,z:-.235,a:58,w:.17,rd:.12,rv:.14},{y:.15,z:-.16,a:61,w:.235,rd:.165,rv:.2},{y:.32,z:-.085,a:66,w:.265,rd:.19,rv:.245},{y:.5,z:-.03,a:74,w:.265,rd:.195,rv:.25},{y:.66,z:0,a:82,w:.245,rd:.195,rv:.225},{y:.78,z:.015,a:78,w:.228,rd:.2,rv:.208},{y:.905,z:.06,a:60,w:.205,rd:.205,rv:.2},{y:.957,z:.128,a:36,w:.19,rd:.188,rv:.182},{y:.948,z:.232,a:4,w:.155,rd:.148,rv:.132},{y:.872,z:.28,a:-32,w:.072,rd:.093,rv:.055}],throat:[4.5,7.3],spine:{tail:.3,hips:1.9,spine:3,chest:4.1,neck1:5.3,neck2:5.95,head:6.55},eye:{s:8.8,phi:.59,radius:.03,inset:.86,bare:2.05,open:[52,47],ring:{color:15130836,width:1.85},lid:12433066,iris:9061398,pupil:[.93,.985]},bill:{length:.054,radius:.062,droop:.004,color:14470576,hook:{top:.093,reach:.096,drop:.078,turn:105,lower:.085,lowerWidth:.072,cere:12891046},gape:.6},skin:1317392,headRuff:0,shading:{flank:.86,under:.82,patch:.14,gold:10139706,goldAmount:.18},looks:{body:{edge:.5,closed:.85,...Tn,width:.062,aspect:1.4,rowStep:.36,tilt:8,lift:.9,cup:.3,round:.95,loose:.12,fuzz:.06,base:2047258,tip:5220408},breast:{edge:.8,closed:.9,...Tn,width:.066,aspect:1.45,rowStep:.36,tilt:8,lift:.9,cup:.32,round:1,loose:.1,fuzz:.05,spacing:.7,base:2310681,tip:5811772},belly:{edge:.28,closed:.65,...Tn,width:.064,aspect:1.5,rowStep:.34,tilt:9,lift:1.1,cup:.28,round:.95,loose:.2,fuzz:.12,base:2902559,tip:7649352},flank:{edge:.3,closed:.65,...Tn,width:.066,aspect:1.6,rowStep:.33,tilt:10,lift:1.2,cup:.26,round:.9,loose:.24,fuzz:.12,base:2442012,tip:6073918},down:{width:.05,aspect:2.2,rowStep:.26,tilt:22,lift:1.3,cup:.15,round:.5,loose:1,base:3818038,tip:7635052,iri:16777215,iriGraze:16777215,iriStrength:0,iriPower:2,iriAlign:0,jitter:.3},back:{edge:.45,closed:.88,...Tn,width:.07,aspect:1.5,rowStep:.36,tilt:8,lift:.8,cup:.32,round:.9,loose:.18,fuzz:.06,base:1783832,tip:4168242},scapular:{edge:.4,closed:.9,...Tn,width:.085,aspect:1.9,rowStep:.34,tilt:10,lift:.7,cup:.3,round:.85,loose:.15,fuzz:.05,base:1783832,tip:3970096},nape:{edge:.95,closed:.92,...Tn,width:.05,aspect:1.35,rowStep:.38,tilt:9,lift:1,cup:.34,round:1,loose:.15,spacing:.7,base:1584917,tip:4102707},head:{edge:.92,closed:.92,...Tn,width:.036,aspect:1.3,rowStep:.4,tilt:8,lift:.6,cup:.34,round:1,loose:.15,fuzz:.05,spacing:.7,base:1518868,tip:4168756},cheek:{edge:.6,closed:.85,...Tn,width:.034,aspect:1.5,rowStep:.36,tilt:7,lift:.4,cup:.3,round:.9,loose:.3,base:2047e3,tip:5614650},lore:{edge:.2,closed:.7,...Tn,width:.014,aspect:1.3,rowStep:.4,tilt:5,lift:.1,cup:.3,round:.9,loose:.3,base:1848598,tip:4694838},forecrown:{edge:.3,closed:.75,width:.022,aspect:1.4,rowStep:.4,tilt:8,lift:.3,cup:.3,round:.9,loose:.3,fuzz:.1,base:4852744,tip:13574936,iri:16734778,iriGraze:11541008,iriStrength:.05,iriPower:3,iriAlign:0,jitter:.4,sparkle:.2},covert:{edge:.4,closed:.88,...Tn,width:.07,aspect:1.8,rowStep:.34,tilt:8,lift:.6,cup:.3,round:.85,loose:.2,base:1915417,tip:4497461},undertail:{edge:.1,closed:.65,...Tn,width:.07,aspect:2.2,rowStep:.3,tilt:9,lift:.8,cup:.2,round:.8,loose:.4,base:3955234,tip:10208846},wingCovert:{edge:.45,closed:.9,...Tn,width:.05,aspect:2,rowStep:.4,tilt:7,lift:0,cup:.3,round:.85,loose:.12,fuzz:0,base:1718039,tip:3905073}},tracts:[{name:"belly",look:"belly",region:{kind:"band",s:[0,3.6],phi:[0,.42],soft:.5}},{name:"flank",look:"flank",region:{kind:"band",s:[1.2,4],phi:[.3,.52],soft:.5}},{name:"breast",look:"breast",region:{kind:"blob",at:[4.9,0],r:[1.6,.5],soft:.4}},{name:"back",look:"back",region:{kind:"band",s:[.9,5.9],phi:[.55,1]}},{name:"scapular",look:"scapular",region:{kind:"band",s:[3.7,5.6],phi:[.56,.84],soft:.3}},{name:"tailCoverts",look:"covert",region:{kind:"band",s:[0,1.15],phi:[0,1]}},{name:"undertail",look:"undertail",region:{kind:"band",s:[0,1.4],phi:[0,.42],soft:.3}},{name:"nape",look:"nape",region:{kind:"band",s:[5.7,7.4],phi:[0,1],soft:.3}},{name:"head",look:"head",region:{kind:"band",s:[7,11],phi:[0,1],soft:.2}},{name:"cheek",look:"cheek",region:{kind:"blob",at:[8.2,.3],r:[.9,.2],soft:.4}},{name:"eye",look:"lore",region:{kind:"blob",at:[8.8,.59],r:[.62,.1],soft:.2}},{name:"forecrown",look:"forecrown",region:{kind:"band",s:[9.7,11],phi:[.62,1],soft:.05}}],wing:{shoulder:[.2,.63,-.06],upper:.19,fore:.23,hand:.19,primaries:10,secondaries:9,primaryLen:[.4,.62],secondaryLen:[.43,.36],primaryWidth:.135,secondaryWidth:.125,rest:{from:[5,96],to:[1.1,150],width:[.08,.16,.06],height:.032,cross:[.3,.06],shade:.25},color:2058794,sheen:4165482,primaryColor:1458319,secondaryColor:2058794,covertWidth:[.05,.1],covertAspect:[1.35,1.75],drape:.9,bladeScale:1.45,broad:{peak:[.68,.84],primaryFan:[58,2],secondaryFan:[68,100],primaryTip:461588,secondaryTip:1723542,dusk:[.85,.4],primaryCovert:1788554,coverts:[[-.03,.08,.06],[0,.1,.066],[.04,.12,.074],[.085,.15,.084]],restCoverts:[11,.56],restSecondaries:{u:[.36,.52],v:[.86,-.1],len:[.27,.34],width:.115},restPrimaries:{u:[.5,.64],v:[.2,-.86],reach:[.62,1],width:[.09,.07]},fold:{elbow:[.27,.45],wrist:[.04,-.6]},open:[38,-26,8],tertials:{count:3,at:[.1,.62],len:[.34,.24],fan:[106,128]},armCoverts:{rows:5,size:[[.07,.056],[.11,.074]],step:.036}}},tail:{rectrices:6,length:[.4,.35],width:.105,droop:66,restFan:1.5,maxFan:9,rootSpread:.011,color:2057255,tip:10338117,sheen:4885066,centralSheen:3836474,banded:!0,outer:{color:1920906,from:.7}},legs:{spread:.1,hip:[.1,.12,-.05],toe:.095,perchRadius:.0405,color:11047532,toeRadius:.013,zygodactyl:!0},behaviour:{breathHz:[.6,1.1],holdCalm:[1.2,4.5],holdAlert:[.5,1.8],saccade:[.09,.0011],neckShare:[.22,.3],blinkEvery:[3,8],ruffleEvery:[50,100],tailEvery:[12,30],wingEvery:[25,60],billUp:2,parrot:!0}},Ei=matchMedia("(pointer: coarse)").matches,S1=yp.legs.perchRadius,Kn=.2;function Mp(s){return S1*Math.min(1-.18*s,2.2)}const Sp=[Kn-.45,Kn+.45];function b1(s,t=Sp){s.updateMatrixWorld(!0);const e=s.getObjectByName("perch"),n=e?w1(e,t[0]-.1,t[1]+.1):null,i=n?n.geometry.getAttribute("position").clone().applyMatrix4(n.matrixWorld).array:new Float32Array,r=new ep;r.ray.direction.set(0,-1,0);const o=[],a=new Map,l=new y,c=new y;function h(d){let f=1/0,g=-1/0;for(let v=0;v<i.length;v+=3)Math.abs(i[v]-d)>.006||(f=Math.min(f,i[v+2]),g=Math.max(g,i[v+2]));return f<=g?(f+g)/2:0}function u(d,f){if(!n)return null;r.ray.origin.set(d,2,h(d)),o.length=0,r.intersectObject(n,!1,o);const g=o[0];return g?f.copy(g.point):null}return(d,f)=>{const g=Math.round(d*1e3);let v=a.get(g);return v===void 0&&(v={point:new y,up:new y,tangent:new y,radius:Mp(d)},u(d,v.point)&&u(d-.03,l)&&u(d+.03,c)?(v.tangent.copy(c).sub(l).normalize(),v.up.set(0,1,0).addScaledVector(v.tangent,-v.tangent.y).normalize()):v=null,a.set(g,v)),v?(f.point.copy(v.point),f.up.copy(v.up),f.tangent.copy(v.tangent),f.radius=v.radius,f):null}}function w1(s,t,e){const n=s.geometry,i=n.getAttribute("position"),r=n.index?n.index.count:i.count,o=h=>n.index?n.index.getX(h):h,a=[];for(let h=0;h<r;h+=3){const u=o(h),d=o(h+1),f=o(h+2),g=Math.min(i.getX(u),i.getX(d),i.getX(f));if(!(Math.max(i.getX(u),i.getX(d),i.getX(f))<t||g>e))for(const p of[u,d,f])a.push(i.getX(p),i.getY(p),i.getZ(p))}const l=new Se;l.setAttribute("position",new oe(a,3));const c=new _e(l,s.material);return c.matrixAutoUpdate=!1,c.matrixWorld.copy(s.matrixWorld),c}function Ld(s,t,e,n,i){const r=s.computeFrenetFrames(e,!1),o=[],a=[],l=[],c=Ki(i),h=Array.from({length:6},()=>({u:c(),a:c()*Math.PI*2,s:.25+c()*.35})),u=new y,d=new y;for(let g=0;g<=e;g++){const v=g/e;s.getPointAt(v,u);const p=r.normals[g],m=r.binormals[g];for(let M=0;M<=n;M++){const T=M/n*Math.PI*2;d.copy(p).multiplyScalar(Math.cos(T)).addScaledVector(m,Math.sin(T));let E=t(v);E*=1+.035*Math.sin(T*7+v*40)+.02*Math.sin(T*13-v*90);for(const x of h){const A=(v-x.u)*18,_=Math.cos(T-x.a);E*=1+x.s*Math.exp(-A*A)*Math.max(_,0)**3}o.push(u.x+d.x*E,u.y+d.y*E,u.z+d.z*E),a.push(v,M/n)}}for(let g=0;g<e;g++)for(let v=0;v<n;v++){const p=g*(n+1)+v,m=p+n+1;l.push(p,p+1,m,m,p+1,m+1)}const f=new Se;return f.setAttribute("position",new oe(o,3)),f.setAttribute("uv",new oe(a,2)),f.setIndex(l),f.computeVertexNormals(),f}function T1(s){const t=new _n({color:16777215,roughness:.92,metalness:0});return t.onBeforeCompile=e=>{e.uniforms.uLen={value:s},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
}`)},t}function E1(){const s=new hn,t=new Pc([new y(-6,-1.414,-.927),new y(-3.2,-.709,-.364),new y(-1.4,-.312,-.11),new y(-.7,-.199,-.039),new y(0,-.041,0),new y(.5,.059,.072),new y(.9,.142,.113),new y(1.3,.193,.077),new y(1.8,.24,.04)]),e=t.getLength(),n=T1(e),i=new y,r=Ld(t,p=>Mp(t.getPointAt(p,i).x)*(p>.97?1-(p-.97)*20:1),320,28,3),o=new _e(r,n);o.name="perch",o.receiveShadow=!0,s.add(o);const a=new Pc([new y(1.07,.11,.26),new y(1.18,.3,.28),new y(1.28,.5,.2),new y(1.41,.7,.09)]),l=new _n({color:5208600,roughness:.65}),c=new _e(Ld(a,p=>.022*(1-p*.6),60,10,9),l);c.castShadow=!0,s.add(c);const h=new vn({color:8372762,roughness:.5,sheen:.5,sheenColor:new Ot(13168720),emissive:2243072}),u=new hi(1,16,12),d=new qr(.006,.008,1,6);d.translate(0,.5,0);const f=Ki(21),g=new y,v=new y;for(let p=0;p<9;p++){const m=.2+p/8*.78;a.getPointAt(m,g),a.getTangentAt(m,v);const M=new y(f()-.5,f()*.6,f()-.5).normalize(),T=.06+f()*.08,E=new _e(d,l);E.position.copy(g),E.quaternion.setFromUnitVectors(new y(0,1,0),M.clone().add(v.clone().multiplyScalar(.4)).normalize()),E.scale.set(1,T,1),s.add(E);const x=g.clone().addScaledVector(M.clone().add(v.clone().multiplyScalar(.4)).normalize(),T);for(let A=0;A<2+Math.floor(f()*3);A++){const _=new _e(u,h),w=.018+f()*.018;_.scale.set(w,w*1.25,w),_.position.copy(x).add(new y(f()-.5,f()-.5,f()-.5).multiplyScalar(.05)),_.castShadow=!0,s.add(_)}}return{group:s}}async function A1(s,t){const n=(await new zM().loadAsync(s,t)).scene;n.traverse(o=>{const a=o;if(a.isMesh){a.receiveShadow=!0,a.castShadow=!/perch|hairs/i.test(a.name);for(const l of Array.isArray(a.material)?a.material:[a.material]){const c=l;c.envMapIntensity=.8}}});const i=n.getObjectByName("perch");let r=null;if(i){r=I1(i),n.add(r);const o=n.getObjectByName("hairs");o&&n.add(R1(i,o.material))}return{group:n,fuzz:r}}function Po(s,t,e,n,i){s[t]=e,s[t+1]=n,s[t+2]=i}function R1(s,t){const e=Ei?7e3:16e3,n=new kM(s).build(),i=Ki(31),r=new y,o=new y,a=new y,l=new y,c=new y,h=new Float32Array(e*9),u=new Float32Array(e*9),d=new Float32Array(e*6);let f=0;for(let p=0;f<e&&p<e*4;p++){if(n.sample(r,o),Math.abs(r.x-Kn)<.17||r.x<-2.8||o.y<-.3&&i()<.7)continue;a.set(i()-.5,i()-.5,i()-.5).cross(o).normalize(),l.crossVectors(o,a);const m=.45+i()*.5,M=.005+i()*i()*.014;c.copy(o).multiplyScalar(1-m).addScaledVector(a,m).normalize();const T=45e-5+i()*3e-4,E=r.addScaledVector(o,-.001),x=f*9;Po(h,x,E.x-l.x*T,E.y-l.y*T,E.z-l.z*T),Po(h,x+3,E.x+l.x*T,E.y+l.y*T,E.z+l.z*T),Po(h,x+6,E.x+c.x*M,E.y+c.y*M,E.z+c.z*M);for(let A=0;A<9;A+=3)Po(u,x+A,o.x,o.y,o.z);d[f*6+2]=1,d[f*6+4]=.5,d[f*6+5]=1,f++}const g=new Se;g.setAttribute("position",new Le(h.slice(0,f*9),3)),g.setAttribute("normal",new Le(u.slice(0,f*9),3)),g.setAttribute("uv",new Le(d.slice(0,f*6),2));const v=new _e(g,t);return v.name="twig.hairs",v.position.copy(s.position),v.quaternion.copy(s.quaternion),v.scale.copy(s.scale),v.receiveShadow=!0,v}const Id=Ei?7:14,C1=.03,P1=-3.25;function L1(s){const t=s.getAttribute("position"),e=s.index?s.index.count:t.count,n=a=>s.index?s.index.getX(a):a,i=new Uint32Array(e);let r=0;for(let a=0;a<e;a+=3){const l=n(a),c=n(a+1),h=n(a+2);Math.max(t.getX(l),t.getX(c),t.getX(h))<=P1||(i[r++]=l,i[r++]=c,i[r++]=h)}const o=new Se;for(const a in s.attributes)o.setAttribute(a,s.attributes[a]);return o.setIndex(new Le(t.count>65535?i.slice(0,r):Uint16Array.from(i.subarray(0,r)),1)),o}function I1(s){const t=s.material,e=L1(s.geometry),n=new hn;n.name="fuzz";for(let i=1;i<=Id;i++){const r=i/Id,o=new _n({map:t.map,normalMap:t.normalMap,color:new Ot(1,1,1),roughness:1,metalness:0,alphaTest:.5,alphaToCoverage:!0,envMapIntensity:.6});o.onBeforeCompile=l=>{l.uniforms.uH={value:r},l.uniforms.uLen={value:C1},l.uniforms.uGrip={value:Kn},l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
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
             // moss where the baked bark is green: cushions, taller, denser
             float green = smoothstep(0.004, 0.03, diffuseColor.g - max(diffuseColor.r, diffuseColor.b) * 0.9);
             // No strand is taller than this (bare bark's reach 0.4 of the height, a cushion's all of
             // it: see tall, below), so a shell above it has nothing here: gone before the noise
             // is worked out, which is most of what a shell costs.
             if (uH >= mix(0.4, 1.05, green)) discard;
             // strands wander as they rise, so each one curls
             vec3 q = vFP * 520.0;
             q += vec3(fn(vFP * 90.0), fn(vFP * 90.0 + 7.3), fn(vFP * 90.0 + 3.1)) * 3.0 * uH;
             vec3 c = floor(q);
             vec3 f = fract(q) - 0.5;
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
           #include <alphatest_fragment>`)};const a=new _e(e,o);a.name=`fuzz.${i}`,a.position.copy(s.position),a.quaternion.copy(s.quaternion),a.scale.copy(s.scale),a.receiveShadow=!0,a.renderOrder=i,n.add(a)}return n}const Pa=-3,D1=1.8,_a=1/(D1-Pa);function or(s){const t=Math.max(0,(s-Pa)*_a);return t*t}function N1(s){return 2*Math.max(0,(s-Pa)*_a)*_a}const F1=`
uniform vec2 uSway;
uniform vec3 uShootRoot;
uniform vec3 uShootAxis;
uniform vec3 uShootMove;
uniform vec3 uShootBend;
uniform vec3 uBudBend;
attribute float aShoot; // 0 twig, 1 the shoot's stem, 2 its flowers
`,U1=`
{
  // the shoot is carried at its root, the rest bends along the twig
  float sx = max(0.0, (mix(transformed.x, uShootRoot.x, min(aShoot, 1.0)) - ${Pa.toFixed(3)}) * ${_a.toFixed(5)});
  transformed.yz += sx * sx * uSway;
  if (aShoot > 0.5) {
    vec3 r = position - uShootRoot;
    float u = clamp(dot(r, uShootAxis) / dot(uShootAxis, uShootAxis), 0.0, 1.0);
    transformed += cross(uShootMove, r) + (uShootBend + step(1.5, aShoot) * uBudBend) * u * u;
  }
}`;class xl{constructor(t,e){this.freq=t,this.zeta=e}freq;zeta;p=new y;v=new y;reset(t){this.p.copy(t),this.v.set(0,0,0)}step(t,e){const n=2*Math.PI*this.freq,i=Math.max(1,Math.ceil(e*this.freq*8)),r=e/i;for(let o=0;o<i;o++){for(const a of["x","y","z"])this.v[a]+=(-n*n*(this.p[a]-t[a])-2*this.zeta*n*this.v[a])*r;this.p.addScaledVector(this.v,r)}return this.p}}function O1(){const s=new Ti(3.4,.2),t=new Ti(2.9,.22),e=new xl(4.5,.45),n=new xl(2.6,.3),i=.5,r=new xl(4.2,.38),o=new y,a=20,l=.4,c=.11;let h=!1;const u=new y,d=new y,f=new y,g=new y,v=new y;let p=!0,m=null;const M={uSway:{value:new Ht},uShootRoot:{value:new y(.95,.04,.1)},uShootAxis:{value:new y(.45,.65,0)},uShootMove:{value:new y},uShootBend:{value:new y},uBudBend:{value:new y}},T=()=>m===null?0:-.005*_.give*or(m)/or(Kn)**2,E=1,x=new WeakSet;function A(w){if(x.has(w))return;x.add(w);const N=w.onBeforeCompile,C=w.customProgramCacheKey();w.onBeforeCompile=(I,L)=>{N.call(w,I,L),Object.assign(I.uniforms,M),I.vertexShader=I.vertexShader.replace("#include <common>",`#include <common>
${F1}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${U1}`)},w.customProgramCacheKey=()=>`${C}|sway`,w.needsUpdate=!0}const _={uniforms:M,patch:A,reach(w,N){if(!h)return!1;const C=M.uShootRoot.value;return u.copy(C).add(M.uShootAxis.value),w.distanceSqToSegment(v.copy(C).lerp(u,.15),u,d,N)<c*c},brush(w,N,C){const I=M.uShootAxis.value,L=tn.clamp(v.copy(w).sub(M.uShootRoot.value).dot(I)/I.lengthSq(),0,1),F=v.copy(I).normalize(),b=tn.clamp(N.length(),.3,2);r.v.addScaledVector(N,a*C*b*(.3+L)).addScaledVector(F,-r.v.dot(F)*.8),r.v.length()>l&&r.v.setLength(l)},give:1,at(w,N){const C=or(w);return N.set(0,s.x*C,t.x*C)},load(w){m=w},settle(){s.x=T(),s.v=t.x=t.v=0,p=!0},push(w,N,C=0){const I=or(w)*E*N*_.give;s.kick(-I),t.kick(I*.35*C)},use(w){w.updateMatrixWorld(!0);const N=[];w.traverse(I=>{const L=I;if(L.isMesh){for(const F of Array.isArray(L.material)?L.material:[L.material])A(F);/^(shoot|buds|hairs)$/.test(L.name)&&N.push(L)}});const C=N.find(I=>I.name==="shoot");if(h=!!C,C){const I=C.geometry.getAttribute("position");C.geometry.computeBoundingBox();const L=C.geometry.boundingBox,F=new y,b=new y;let D=0,U=0;const O=new y;for(let q=0;q<I.count;q++)O.fromBufferAttribute(I,q),O.y<L.min.y+.03&&(F.add(O),D++),O.y>L.max.y-.03&&(b.add(O),U++);F.divideScalar(Math.max(D,1)),b.divideScalar(Math.max(U,1)),M.uShootRoot.value.copy(F),M.uShootAxis.value.copy(b).sub(F)}for(const I of N){const L=I.geometry.getAttribute("position").count;I.geometry.setAttribute("aShoot",new oe(new Float32Array(L).fill(I.name==="shoot"?1:2),1))}p=!0},update(w){if(w<=0)return;s.step(T(),w),t.step(0,w),M.uSway.value.set(s.x,t.x);const N=M.uShootRoot.value,C=M.uShootAxis.value,I=N1(N.x),L=or(N.x),F=M.uShootMove.value.set(0,-I*t.x,I*s.x);f.copy(C).add(v.crossVectors(F,C)),f.y+=L*s.x,f.z+=L*t.x,p&&(p=!1,e.reset(f),n.reset(f),r.reset(o)),e.step(f,w),r.step(o,w),g.copy(f).lerp(e.p,i).add(r.p),n.step(g,w),M.uShootBend.value.copy(g).sub(f),M.uBudBend.value.copy(n.p).sub(g).multiplyScalar(i)}};return _}const Lo=["tail","hips","spine","chest","neck1","neck2","head"];class k1{constructor(t){this.species=t;const e=t.sections;this.count=e.length,this.ys=e.map(n=>n.y),this.zs=e.map(n=>n.z),this.as=e.map(n=>n.a*At),this.ws=e.map(n=>n.w),this.rds=e.map(n=>n.rd),this.rvs=e.map(n=>n.rv)}species;count;ys;zs;as;ws;rds;rvs;a=new y;b=new y;c=new y;get sMax(){return this.count-1}center(t,e){return e.set(0,Ln(this.ys,t),Ln(this.zs,t))}axis(t,e){const n=Ln(this.as,t);return e.set(0,Math.sin(n),Math.cos(n))}point(t,e,n){const i=Ln(this.as,t),r=Math.max(Ln(this.ws,t),.004),o=Math.max(Ln(this.rds,t),.004),a=Math.max(Ln(this.rvs,t),.004),l=Math.cos(e),c=Math.sin(e),h=1+.06*Math.sin(e*2)**2,u=-l*(l>0?a:o)*h,d=Ln(this.ys,t),f=Ln(this.zs,t);n.set(c*r*h,d+Math.cos(i)*u,f-Math.sin(i)*u);const g=this.wingBulge(t,e);if(g>0){const v=Math.hypot(n.x,n.y-d,n.z-f)||1,p=1+g/v;n.set(n.x*p,d+(n.y-d)*p,f+(n.z-f)*p)}return n}surface(t,e,n){const r=It(t,0,this.sMax);this.point(r,e,n.p);const o=Math.max(r-.01,0),a=Math.min(r+.01,this.sMax);return this.point(a,e,this.a).sub(this.point(o,e,this.b)),this.point(r,e+.01,this.b).sub(this.point(r,e-.01,this.c)),n.n.crossVectors(this.b,this.a).normalize(),n.t.copy(this.a).multiplyScalar(-1),n.t.addScaledVector(n.n,-n.t.dot(n.n)).normalize(),n}wingHalfWidth(t){const[e,n,i]=this.species.wing.rest.width;return t<.35?et(e,n,$(0,.35,t)):et(n,i,$(.35,1,t))}wingHalfAngle(t,e){const n=(Ln(this.ws,t)+(Ln(this.rds,t)+Ln(this.rvs,t))/2)/2;return this.wingHalfWidth(e)/Math.max(n,.03)}wingUV(t,e){const n=this.species.wing.rest,i=Math.PI*2;let r=(e%i+i)%i;r>Math.PI&&(r=i-r);const o=(n.from[0]-t)/(n.from[0]-n.to[0]),a=It(o,0,1),l=et(n.from[1],n.to[1],a)*At;return{u:o,v:(r-l)/this.wingHalfAngle(t,a)}}wingAt(t,e,n){const i=this.species.wing.rest,r=et(i.from[0],i.to[0],t),o=et(i.from[1],i.to[1],It(t,0,1))*At+e*this.wingHalfAngle(It(r,0,this.sMax),It(t,0,1));return{s:r,ang:n>0?o:Math.PI*2-o}}wingBulge(t,e){const{u:n,v:i}=this.wingUV(t,e);if(n<=0||n>=1||Math.abs(i)>=1)return 0;const r=1-i*i;return this.species.wing.rest.height*$(0,.1,n)*(1-$(.8,1,n))*r*r}front=null;frontLength(t){if(!this.front){this.front=[0];for(let r=1;r<=this.sMax*20;r++)this.front.push(this.front[r-1]+this.point(r/20,0,this.a).distanceTo(this.point((r-1)/20,0,this.b)))}const n=It(t,0,this.sMax)*20,i=Math.min(Math.floor(n),this.front.length-2);return et(this.front[i],this.front[i+1],n-i)}frontAt(t){this.frontLength(0);const e=this.front;let n=0,i=e.length-1;if(t<=0)return 0;if(t>=e[i])return this.sMax;for(;i-n>1;){const r=n+i>>1;e[r]<=t?n=r:i=r}return(n+(t-e[n])/Math.max(e[i]-e[n],1e-9))/20}weights(t){const e=this.species.spine;for(let n=0;n<Lo.length-1;n++){const i=Lo[n],r=Lo[n+1];if(t<=e[r]||n===Lo.length-2){const o=$(e[i],e[r],t);return[i,1-o,r,o]}}return["head",1,"head",0]}skin(t,e){const n=this.species.spine,i=.5+.5*Math.cos(e),r=this.weights(t),a=.6*($(n.hips-.4,n.spine,t)*(1-$(n.chest+.2,n.neck1+.3,t)))*(.35+.65*i),[l,c]=this.species.throat,h=$(.25,.85,i)*$(l-.9,l,t),u=It((this.frontLength(t)-this.frontLength(l))/(this.frontLength(c)-this.frontLength(l)),0,1),d=new Map,f=(p,m)=>d.set(p,(d.get(p)??0)+m);f(r[0],r[1]*(1-a)*(1-h)),f(r[2],r[3]*(1-a)*(1-h)),f("sternum",a*(1-h*u*(2-u))),f("throat",(1-a)*h*(1-u)*(1-u)),f("gular",h*2*u*(1-u)),f("head",h*u*u);const g=[...d].sort((p,m)=>m[1]-p[1]).slice(0,4);for(;g.length<4;)g.push(["root",0]);const v=g.reduce((p,m)=>p+m[1],0);return{bones:g.map(p=>p[0]),weights:g.map(p=>p[1]/v)}}bodyCoord(t){return 1-It(t/this.sMax,0,1)}}const sn=["L","R"],Rn=s=>s==="L"?1:-1,B1=s=>new y(s[0],s[1],s[2]),yl=new y,Dd=new y,Io=new y,z1=new Qt;function ss(s,t,e=new ve){return Io.copy(s).normalize(),yl.crossVectors(t,Io).normalize(),Dd.crossVectors(Io,yl),e.setFromRotationMatrix(z1.makeBasis(yl,Dd,Io))}const ar=(s,t)=>new y(s.x*t,s.y,s.z);function V1(s){const t=new k1(s),e={},n=[],i={};function r(L,F,b,D=new ve){const U=new ph;U.name=L;const O={pos:new y,quat:new ve,worldPos:b.clone(),worldQuat:D.clone()};if(F){const q=i[F],V=q.worldQuat.clone().invert();O.pos.copy(b).sub(q.worldPos).applyQuaternion(V),O.quat.copy(V).multiply(D),e[F].add(U)}else O.pos.copy(b),O.quat.copy(D);return U.position.copy(O.pos),U.quaternion.copy(O.quat),e[L]=U,i[L]=O,n.push(U),U}const o=L=>t.center(L,new y),a=s.spine,l=r("root",null,new y);r("hips","root",o(a.hips)),r("spine","hips",o(a.spine)),r("chest","spine",o(a.chest)),r("neck1","chest",o(a.neck1)),r("neck2","neck1",o(a.neck2)),r("head","neck2",o(a.head)),r("throat","chest",o(a.head)),r("gular","chest",t.point((s.throat[0]+s.throat[1])/2,0,new y)),r("sternum","chest",t.point(a.spine+.4,0,new y));const c=o(t.sMax),h=t.axis(t.sMax,new y),u=ss(h,new y(0,1,0));r("bill","head",c,u),r("jaw","head",c.clone().add(new y(0,-.012,-.04)),u);const d=new y(0,0,1).applyQuaternion(u),f=new y(0,1,0).applyQuaternion(u),g=s.bill.length,v=L=>c.clone().addScaledVector(d,L*g).addScaledVector(f,-.004-s.bill.droop*L*L);r("tongue.1","jaw",v(.06),u),r("tongue.2","tongue.1",v(.5),u),r("tongue.3","tongue.2",v(.7),u);const p={},m={p:new y,n:new y,t:new y};for(const L of sn){const F=Rn(L);t.surface(s.eye.s,s.eye.phi*Math.PI,m);const b=m.n.clone().multiplyScalar(.7).add(new y(.3,.02,.04)).normalize(),D=m.p.clone().addScaledVector(b,-s.eye.radius*s.eye.inset);b.x*=F,D.x*=F;const U=ss(b,new y(0,1,0));p[L]={side:L,center:D,out:b,eye:r(`eye.${L}`,"head",D,U),lidUpper:r(`lidUpper.${L}`,"head",D,U),lidLower:r(`lidLower.${L}`,"head",D,U),nict:r(`nict.${L}`,"head",D,U)}}const M=s.wing,T={};{const L=B1(M.shoulder),F={p:new y,n:new y,t:new y},b=(wt,Ct,Lt)=>{const Gt=t.wingAt(wt,Ct,1);return t.surface(Gt.s,Gt.ang,F),F.p.clone().addScaledVector(F.n,-Lt)},D=s.tail.droop*At,U=new y(0,-Math.sin(D),-Math.cos(D)),O=new y(0,Math.cos(D),-Math.sin(D)),q=o(a.tail).addScaledVector(U,s.tail.length[1]*M.rest.cross[0]).addScaledVector(O,.03);q.x=M.rest.cross[1];const V=M.broad;let H,Y;V?(H=L.clone().add(b(V.fold.elbow[0],V.fold.elbow[1],.03).sub(L).setLength(M.upper)),Y=H.clone().add(b(V.fold.wrist[0],V.fold.wrist[1],.02).sub(H).setLength(M.fore)),b(.3,0,0)):(H=b(.03,.4,.02),Y=b(.2,-.35,.014));const at=F.n.clone(),Q=q.clone().sub(Y).normalize();at.addScaledVector(Q,-at.dot(Q)).normalize();const k=new y().crossVectors(at,Q),Z=t.axis(a.spine,new y).multiplyScalar(-1),X=new y(0,-Z.z,Z.y);X.z>0&&X.multiplyScalar(-1);const ct=new y(1,0,0),J=(wt,Ct,Lt)=>wt.clone().applyAxisAngle(Ct,Lt),tt=[],ot=(wt,Ct)=>V?J(ct,X,V.open[wt]*At):Ct;tt.push({name:"shoulder",parent:"chest",pos:L,dir:H.clone().sub(L),n:at,sDir:ot(0,ct.clone().multiplyScalar(.85).addScaledVector(Z,.5)),stage:[0,.7,0]}),tt.push({name:"forearm",parent:"shoulder",pos:H,dir:Y.clone().sub(H),n:at,sDir:ot(1,ct.clone().multiplyScalar(.9).addScaledVector(Z,-.35)),stage:[.12,.9,.5]}),tt.push({name:"hand",parent:"forearm",pos:Y,dir:Q,n:at,sDir:ot(2,ct.clone()),stage:[.28,1,.45]});const ft=M.primaries,Rt=M.broad?.primaryFan??[58,-4],Bt=M.broad?.secondaryFan??[82,97];for(let wt=0;wt<ft;wt++){const Ct=wt/(ft-1),Lt=Y.clone().addScaledVector(Q,M.hand*(wt+.4)/ft).addScaledVector(k,(1-Ct)*.04).addScaledVector(at,(1-Ct)*.004),Gt=q.clone().addScaledVector(k,(1-Ct)*.05).sub(Lt).normalize();tt.push({name:`primary#${wt+1}`,parent:"hand",pos:Lt,dir:Gt,n:at,sDir:J(ct,X,et(Rt[0],Rt[1],Math.pow(Ct,M.broad?.85:.62))*At),stage:[.4,1,.35]})}const kt=M.secondaries,ie=V?new y().crossVectors(at,Y.clone().sub(H)).normalize():k;for(let wt=0;wt<kt;wt++){const Ct=wt/(kt-1),Lt=Y.clone().lerp(H,(wt+.7)/(kt+.4)).addScaledVector(ie,V?.02:.03+Ct*.015);tt.push({name:`secondary#${wt+1}`,parent:"forearm",pos:Lt,dir:J(Q,at,et(7,16,Ct)*At),n:at,sDir:J(ct,X,et(Bt[0],Bt[1],Ct)*At),stage:[.2,.95,.25]})}if(V){const wt=new y().crossVectors(at,H.clone().sub(L)).normalize();for(let Ct=0;Ct<V.tertials.count;Ct++){const Lt=V.tertials.count>1?Ct/(V.tertials.count-1):0,Gt=H.clone().lerp(L,et(V.tertials.at[0],V.tertials.at[1],Lt)).addScaledVector(wt,.02);tt.push({name:`tertial#${Ct+1}`,parent:"shoulder",pos:Gt,dir:J(Q,at,et(16,22,Lt)*At),n:at,sDir:J(ct,X,et(V.tertials.fan[0],V.tertials.fan[1],Lt)*At),stage:[.05,.8,0]})}}for(const wt of sn){const Ct=Rn(wt),Lt=yt=>yt.includes("#")?yt.replace("#",`.${wt}.`):`${yt}.${wt}`,Gt={side:wt,bones:[],folded:[],spread:[],primaries:[],secondaries:[],tertials:[],open:[],stage:[]},Wt={chest:new ve},it={chest:i.chest.worldPos};for(const yt of tt){const Ft=Lt(yt.name),B=yt.parent==="chest"?"chest":Lt(yt.parent),se=ss(ar(yt.dir,Ct),ar(yt.n,Ct)),zt=r(Ft,B,ar(yt.pos,Ct),se),Xt=ss(ar(yt.sDir,Ct),ar(X,Ct));Wt[Ft]=Xt,it[Ft]=i[Ft].pos.clone().applyQuaternion(Wt[B]).add(it[B]),Gt.bones.push(zt),Gt.folded.push(i[Ft].quat.clone()),Gt.spread.push(Wt[B].clone().invert().multiply(Xt)),Gt.open.push({pos:it[Ft],quat:Xt}),V&&yt.stage&&Gt.stage.push({from:yt.stage[0],to:yt.stage[1],flex:yt.stage[2]}),yt.name.startsWith("primary")&&Gt.primaries.push(zt),yt.name.startsWith("secondary")&&Gt.secondaries.push(zt),yt.name.startsWith("tertial")&&Gt.tertials.push(zt)}T[wt]=Gt}}const E=s.tail,x=[];{const L=E.droop*At,F=new y(0,-Math.sin(L),-Math.cos(L)),b=new y(0,Math.cos(L),-Math.sin(L)),D=ss(F,b),U=o(a.tail);r("tail","hips",U,D);const O=new y(1,0,0).applyQuaternion(D);for(const q of sn)for(let V=0;V<E.rectrices;V++){const H=(V+.5)*(q==="L"?-1:1),Y=U.clone().addScaledVector(O,H*(E.rootSpread??.006)).addScaledVector(b,-V*.004-(q==="L"?.002:0)).addScaledVector(F,.02),at=D.clone().multiply(new ve().setFromAxisAngle(new y(0,1,0),H*E.restFan*At));x.push({bone:r(`rectrix.${q}.${V+1}`,"tail",Y,at),k:H})}}const A=s.legs,_={},w={};let N=.1;for(const L of sn){const F=Rn(L),b=new y(A.spread*F,0,0);r(`foot.${L}`,"root",b);const D=b.clone().add(new y(0,.014,-.012)),U=new y(A.hip[0]*F,A.hip[1],A.hip[2]);w[L]=D,_[L]=U.clone().sub(i.hips.worldPos),N=U.distanceTo(D),r(`tarsus.${L}`,`foot.${L}`,D,ss(U.clone().sub(D),new y(1,0,0)));for(let O=0;O<4;O++)r(`toe.${L}.${O+1}`,`foot.${L}`,b)}l.updateMatrixWorld(!0);const C=new wa(n),I=new Map(n.map((L,F)=>[L.name,F]));return{species:s,loft:t,rootBone:l,bones:e,list:n,rest:i,skeleton:C,index:L=>{const F=I.get(L);if(F===void 0)throw new Error(`no bone ${L}`);return F},wings:T,rectrices:x,eyes:p,hipSocket:_,ankle:w,tarsusLength:N}}const H1=0,G1=1,W1=2,Th=3,X1=4,q1=2,Y1=3,Do=4,No=5;class Oc{pos=[];nor=[];uv=[];root=[];hinge=[];data=[];iriN=[];cBase=[];cTip=[];cIri=[];cIri2=[];edge=[];si=[];sw=[];idx=[];S=new y;H=new y;P=new y;Nv=new y;In=new y;add(t){const{cols:e,rows:n}=t,i=this.S.crossVectors(t.normal,t.dir).normalize(),r=this.H.crossVectors(t.dir,t.normal).normalize(),o=this.pos.length/3,a=t.width/2;for(let l=0;l<n;l++){const c=l===n-1,h=t.scallop?l/(n-1):n===4?[0,.5,.82,.965][l]:Math.pow(l/(n-1),.9),u=et(1.25,2.1,t.round),d=It((h-.5)/.5,0,1),f=Math.pow(Math.max(1-Math.pow(d,u),0),1/u),g=t.scallop?1:n===4?et(.5,1,$(0,.5,h))*f:et(.4,1,$(0,t.widen??.12,h))*(c?.42:Math.pow(Math.max(1-Math.pow(It((h-.8)/.2,0,1),2.2),0),.45));for(let v=0;v<e;v++){const p=e===1?0:v/(e-1)*2-1,m=p<0?1-t.asym:1+t.asym;let M=p*a*g*m;const T=c&&!t.scallop?h+(1-h)*(1-p*p):h;let E=T*t.length;if(t.scallop){const _=It((h-.5)/.5,0,1),w=p*Math.PI/2;M=et(p*a*et(.72,1,Math.min(h/.5,1)),Math.sin(w)*a,_),E=et(Math.min(h,.5)*t.length,.5*t.length+Math.cos(w)*.5*t.length,_)}const x=t.cup*a*(p*g)*(p*g)+t.curl*t.length*T*T;this.P.copy(t.root).addScaledVector(i,M).addScaledVector(t.dir,E).addScaledVector(t.normal,-x),this.Nv.copy(t.normal).addScaledVector(i,2*t.cup*p*g).addScaledVector(t.dir,2*t.curl*T),this.In.copy(t.iriNormal).addScaledVector(i,.3*t.cup*p*g).addScaledVector(t.dir,.1*(T-.6)).normalize(),t.skinNormal&&this.Nv.normalize().lerp(t.skinNormal,et(.45,.8,Math.min(t.loose*2,1))),this.Nv.normalize(),this.pos.push(this.P.x,this.P.y,this.P.z),this.nor.push(this.Nv.x,this.Nv.y,this.Nv.z),t.scallop?this.uv.push(M/a,E/t.length):this.uv.push(p,T),this.root.push(t.root.x,t.root.y,t.root.z),this.hinge.push(r.x,r.y,r.z),this.data.push(t.rand,t.coord,t.gain,t.channel),this.iriN.push(this.In.x,this.In.y,this.In.z),this.cBase.push(t.base.r,t.base.g,t.base.b,t.iriStrength/4),this.cTip.push(t.tip.r,t.tip.g,t.tip.b,t.loose),this.cIri.push(t.iri.r,t.iri.g,t.iri.b,t.iriPower/32),this.cIri2.push(t.iri2.r,t.iri2.g,t.iri2.b,t.cover),this.edge.push(t.edge??0,t.closed??0);const A=t.skinAt?t.skinAt(this.P):t;this.si.push(...A.bones),this.sw.push(...A.weights)}}for(let l=0;l<n-1;l++)for(let c=0;c<e-1;c++){const h=o+l*e+c,u=h+e;this.idx.push(h,u,h+1,u,u+1,h+1)}}build(){const t=new Se,e=(r,o)=>new Le(new Float32Array(r),o),n=(r,o)=>{const a=new Uint16Array(r.length);for(let l=0;l<r.length;l++)a[l]=Math.round(It(r[l],0,1)*65535);return new Le(a,o,!0)},i=(r,o)=>{const a=new Int16Array(r.length);for(let l=0;l<r.length;l++)a[l]=Math.round(It(r[l],-1,1)*32767);return new Le(a,o,!0)};return t.setAttribute("position",e(this.pos,3)),t.setAttribute("normal",i(this.nor,3)),t.setAttribute("uv",e(this.uv,2)),t.setAttribute("aRoot",e(this.root,3)),t.setAttribute("aHinge",i(this.hinge,3)),t.setAttribute("aData",e(this.data,4)),t.setAttribute("aIriN",i(this.iriN,3)),t.setAttribute("aBase",n(this.cBase,4)),t.setAttribute("aTip",n(this.cTip,4)),t.setAttribute("aIri",n(this.cIri,4)),t.setAttribute("aIri2",n(this.cIri2,4)),t.setAttribute("aEdge",n(this.edge,2)),t.setAttribute("skinIndex",new Le(new Uint16Array(this.si),4)),t.setAttribute("skinWeight",n(this.sw,4)),t.setIndex(new Le(new Uint32Array(this.idx),1)),t.boundingSphere=new kn(new y(0,.4,-.1),2.5),t.boundingBox=new fi(new y(-2,-2,-2),new y(2,3,2)),t}}function K1(s,t,e,n){if(s.kind==="band"){const f=t+(s.soft??0)*(n*2-1);return f>=s.s[0]&&f<=s.s[1]&&e>=s.phi[0]&&e<=s.phi[1]}if(s.kind==="blob"){const f=(t-s.at[0])/s.r[0],g=(e-s.at[1])/s.r[1],v=s.pow??2;return Math.pow(Math.abs(f),v)+Math.pow(Math.abs(g),v)<=1+(s.soft??0)*(n*2-1)}const i=s.from[0]/s.r[0],r=s.from[1]/s.r[1],o=s.to[0]/s.r[0],a=s.to[1]/s.r[1],l=t/s.r[0],c=e/s.r[1],h=o-i,u=a-r,d=It(((l-i)*h+(c-r)*u)/(h*h+u*u),0,1);return Math.hypot(l-i-h*d,c-r-u*d)<=1}function Si(s,t,e,n=.5){let i="body";for(const r of s.tracts)K1(r.region,t,e,n)&&(i=r.look);return s.looks[i]}const Oe=s=>new Ot(s),hs=(s,t)=>t.map(e=>s.index(e)),Z1=new y;function Eh(s,t,e,n){return s.copy(t),e.iriAim&&s.lerp(Z1.set(e.iriAim[0],e.iriAim[1],e.iriAim[2]).normalize(),e.iriAlign).normalize(),n?(s.x+=(n()-.5)*e.jitter,s.y+=(n()-.5)*e.jitter,s.z+=(n()-.5)*e.jitter,s.normalize()):s}function bp(s,t,e){const{u:n,v:i}=s.wingUV(t,e);if(n<.08||n>1.05)return 1;const r=$(.08,.3,n)*(1-$(.9,1.05,n)),o=$(-2,-1.05,i)*(1-$(-.75,-.55,i)),a=$(1.6,1,i)*(1-$(.7,.9,-i+1.6)),l=s.species.wing.rest.shade??.62;return 1-r*Math.max(l*o,i>.8?.25*a:0)}function wp(s,t,e,n){const i=s.shading;let r=1+i.patch*(.6*Ge(e*2.7,5)+.6*Ge(n*8+e*1.3,6)),o=0;const a=t.fine?1:et(.12,1.7,$(-.25,.45,.7*Ge(e*6.1+n*9,41)+.6*Ge(n*21-e*3.3,42)));if(!t.fine){o=t.iriStrength>0&&e<6?$(.05,.6,.7*Ge(e*3.4+n*5,31)+.5*Ge(n*13-e*2,32))*i.goldAmount:0;const l=1-$(4.6,5.6,e);r*=et(1,i.flank,l*$(.2,.55,n)*(1-$(.72,.95,n))),r*=et(1,i.under,$(2.6,.5,e)*(1-$(.4,.7,n)))}return{shade:r,gold:o,glit:a}}function Gi(s,t,e=1,n=0,i=6972448,r=1){const o=(.8+t()*.4)*e,a=Oe(s.iri).lerp(Oe(s.iriGraze),t()*t()*.45);return{base:Oe(s.base).multiplyScalar(o),tip:Oe(s.tip).lerp(Oe(i),n*t()).multiplyScalar(o),iri:a,iri2:Oe(s.iriGraze),iriStrength:s.iriStrength*et(.75+t()*.5,2.6*Math.pow(t(),2.5),s.sparkle??0)*(1+n*1.5)*r,iriPower:s.iriPower*(.8+t()*.5),loose:s.loose??0,round:s.round,cup:s.cup,channel:s.channel==="gorget"?G1:s.channel==="crown"?W1:H1,edge:s.edge??0,closed:s.closed??0}}const Fo=new y,Ml=new y,Rs=new y;function Tp(s,t,e,n){const{loft:i}=s;if(t<i.species.throat[0]-1.1||Math.cos(e)<-.5)return;const r=Math.min(t+.02,i.sMax);i.point(r,e,Fo).sub(i.point(t-.02,e,Rs)).multiplyScalar(1/(r-t+.02)),i.point(t,e+.02,Ml).sub(i.point(t,e-.02,Rs)).multiplyScalar(1/.04);const o=Fo.clone().multiplyScalar(1/Fo.lengthSq()),a=Ml.clone().multiplyScalar(1/Ml.lengthSq()),l=n.clone(),c=Fo.clone().normalize(),h=i.frontLength(t);return u=>{Rs.copy(u).sub(l);const d=Rs.dot(o),f=i.frontAt(h+Rs.dot(c))-t,g=i.skin(It(t+(Math.abs(f)<Math.abs(d)?f:d),0,i.sMax),e+Rs.dot(a));return{bones:hs(s,g.bones),weights:g.weights}}}function $1(s,t,e){const{loft:n,species:i}=t,r={p:new y,n:new y,t:new y},o={p:new y,n:new y,t:new y},a=new y,l=new y,c=new y,h=new y,u=new y,d=new y,f=new y,g=i.eye.radius,v=i.headRuff??1,p=Math.PI*2,m=b=>{const D=(b%p+p)%p;return D<=Math.PI?D/Math.PI:(p-D)/Math.PI},M=(b,D,U=.5)=>{const O=Si(i,b,D,U);let q=O.width;if(!O.fine){const V=Si(i,b-.45,D),H=Si(i,b+.45,D);q=(q*2+(V.fine?q:V.width)+(H.fine?q:H.width))/4}return{look:O,width:q}},T=240,E=40,x=new Float32Array(T).fill(1),A=new Uint16Array(T),_=[],w=new Float32Array(E+1),N=.001;let C=n.sMax-.015;for(;C>.03;){let b=0;for(let U=0;U<=E;U++){const O=U/E*p;w[U]=n.point(Math.min(C+.01,n.sMax),O,l).distanceTo(n.point(C-.01,O,c))/.02,b=Math.max(b,w[U])}const D=N/b;for(let U=0;U<T;U++){const O=U/T*E,q=Math.min(Math.floor(O),E-1),{look:V,width:H}=M(C,m(U/T*p)),Y=H*V.aspect*V.rowStep;if(x[U]+=et(w[q],w[q+1],O-q)*D,x[U]>=Y){x[U]=Math.min(x[U]-Y,Y*.5);const at=A[U]++;(_[at]??=new Float32Array(T).fill(NaN))[U]=C}}C-=D}const I=new y,L=new y,F=(b,D)=>{n.surface(b,D,r);for(const de of sn)if(r.p.distanceTo(t.eyes[de].center)<g*(i.eye.bare??1.02))return;const U=n.wingUV(b,D),O=U.u>.04&&U.u<.97&&Math.abs(U.v)<.9,q=O&&U.v<-.3&&U.u<.5&&.5+.5*Ge(b*53+D*91,77)<.75*(i.wing.drape??1)*$(-.3,-.75,U.v)*(1-$(.32,.5,U.u));if(O&&!q)return;const V=m(D),H=M(b+(e()-.5)*.06,It(V+(e()-.5)*.012,0,1),e()),Y=H.width,at=Math.pow(1-$(7.1,9,b),1.4),Q=v*$(.56,.86,V)*at*$(6.25,7,b),k=$(.5,.8,V)*$(8.5,9.2,b),Z=q?i.looks.flank:H.look===i.looks.crown&&b<8.5&&e()<.5*$(.7,.9,V)?i.looks.head:H.look,X=Z.fine?0:Q,ct=Z.fine||Z===i.looks.stripe?0:v*$(6,6.7,b)*$(.35,.6,V)*(.35+.65*at),J=Ge(b*11+V*37,51);if(ct>0&&J>.45&&e()<.4*ct||Z===i.looks.gorget)return;const tt=i.looks.gorget,ot=b>4.6&&b<8.2&&V<.5?Si(i,b,Math.max(V-.035,0))===tt?2:Si(i,b,Math.max(V-.08,0))===tt?1:0:0;if(ot===2)return;const ft=ot===0&&b>4.2&&b<5.6&&V<.4&&Si(i,b+.5,V)===tt,Rt=i.shading,Bt=wp(i,Z,b,V),{gold:kt,glit:ie}=Bt,wt=Bt.shade*bp(n,b,D),Ct=Z.loose??0,Lt=Ge(b*4.3+V*17,21),Gt=Ge(b*3.1-V*23,22),Wt=1+(e()-.5)*et(.26,.65,Ct),it=Y*Z.aspect*Wt*(1+X*(.3+1.3*e()*e())+ct*(e()-.5)*.5),yt=e()<.035*Ct+.14*X?1:0;let Ft=(Z.tilt+(e()-.5)*et(6,17,Ct)+Gt*7*Ct+yt*(8+e()*10))*At;const B=(e()-.5)*et(.17,.72,Ct)+Lt*.4*Ct+yt*(e()-.5)*.9+((e()-.5)*.9+J*.45)*ct,se=((e()-.5)*.7+Gt*.3)*Ct+((e()-.5)*1.1+J*.5)*ct;if((ot||ft)&&(Ft*=.35),q)Ft+=9*At;else if(U.u>0&&U.u<1&&Math.abs(U.v)<1.7&&!yt){const de=1-$(.9,1.7,Math.abs(U.v));Ft*=1-.6*de}let zt=Z.lift+X*.9;Ft=Ft*(1-.55*k)+X*(14+30*e()*e()+9*J)*At;const Xt=n.point(Math.min(b+.01,n.sMax),D,l).distanceTo(n.point(Math.max(b-.01,0),D,c))/.02;f.copy(r.p),a.copy(r.n),n.surface(Math.max(b-it*.85/Math.max(Xt,.02),0),D,o),h.copy(o.p).addScaledVector(o.n,it*Math.sin(Ft)).sub(f),h.lengthSq()<1e-8&&h.copy(r.t),h.normalize(),u.copy(a).add(o.n).addScaledVector(h,-a.dot(h)-o.n.dot(h)).normalize(),h.applyAxisAngle(u,B),u.applyAxisAngle(h,se),Eh(d,u,Z,e);const pt=n.skin(b,D);s.add({...Gi(Z,e,wt,kt,Rt.gold,ie),root:f,dir:h,normal:u,skinNormal:a,iriNormal:d,width:Y*Wt,length:it,cols:Z.fine?5:3,rows:4,curl:et(.1,.02+e()*.22,Ct),asym:0,bones:hs(t,pt.bones),weights:pt.weights,skinAt:Tp(t,b,D,f),rand:e(),coord:n.bodyCoord(b)*.8,gain:zt,cover:It(1-Z.rowStep,.1,.9)})};for(let b=0;b<_.length;b++){const D=_[b];for(const U of[1,-1]){let O=b&1?.5:U>0?1:0,q=!1;for(let V=0;V<T/2;V++){const H=(U*V%T+T)%T,Y=(U*(V+1)%T+T)%T,at=D[H],Q=D[Y];if(Number.isNaN(at)||Number.isNaN(Q)){q=!0;continue}q&&(O=e(),q=!1);const k=U*V*p/T,Z=U*(V+1)*p/T;n.point(at,k,I),n.point(Q,Z,L);const{look:X,width:ct}=M((at+Q)/2,m((k+Z)/2)),J=I.distanceTo(L)/(ct*(X.spacing??.6));for(;O+J>=1;){const tt=(1-O)/J,ot=(e()-.5)*.25*ct*X.aspect*X.rowStep/.11,ft=et(.12,.5,X.loose??0)*(X.fine?1:1+1.8*v*$(6,6.7,(at+Q)/2));F(It(et(at,Q,tt)+ot*(1+2*(X.loose??0)),.02,n.sMax),et(k,Z,tt)+(e()-.5)*ft*ct/.15),O-=1}O+=J}}}}function J1(s,t,e){const{loft:n,species:i}=t,r=i.looks.gorget;if(!r)return;const o={p:new y,n:new y,t:new y},a=[],l=new y,c=new y;let h=n.sMax;for(;h>4.3&&Si(i,h,0)!==r;)h-=.02;const u=Math.min(h+.5,n.sMax-.3);let d=0,f=1/0;const g=.02,v=.02,p=new Map;{let L=0;for(let F=0;;F++){const b=u-F*g;if(b<4.3)break;F>0&&(L+=n.point(b,0,l).distanceTo(n.point(b+g,0,c))),p.set(F,L)}L=0;for(let F=-1;;F--){const b=u-F*g;if(b>n.sMax-.05)break;L-=n.point(b,0,l).distanceTo(n.point(b-g,0,c)),p.set(F,L)}}for(const[L,F]of p){const b=u-L*g;let D=0;for(let U=0;U*v<=1.3;U++){const O=U*v;if(U>0&&(D+=n.point(b,O,l).distanceTo(n.point(b,O-v,c))),Si(i,b,O/Math.PI)===r){for(const q of U===0?[1]:[1,-1])a.push({s:b,a:O*q,x:D*q,y:F});d=Math.max(d,Math.hypot(D,F)),f=Math.min(f,Math.hypot(D,F))}}}if(!a.length)return;const m=(L,F)=>{let b=a[0],D=1/0;for(const U of a){const O=(U.x-L)*(U.x-L)+(U.y-F)*(U.y-F);O<D&&(D=O,b=U)}return{q:b,miss:Math.sqrt(D)}},M=new y,T=new y,E=new y,x=new y,A=new y,_=new Ot(3814655),w=new Ot(14036168),N=r.spacing??.8;let C=Math.max(f,r.width*.3),I=0;for(;C<=d+r.width*.3;){const L=It((C-f)/(d-f),0,1),F=r.width*et(.6,1.3,L),b=F*r.aspect,D=Math.max(1,Math.round(Math.PI*2*C/(F*N)));for(let U=0;U<D;U++){const O=(U+(I%2?.5:0))/D*Math.PI*2-Math.PI+(e()-.5)*.12*(F/Math.max(C,F)),{q,miss:V}=m(C*Math.sin(O),C*Math.cos(O));if(V>.03)continue;const H=m(C*Math.sin(O),C*Math.cos(O)-b*.7).miss>.02;n.surface(q.s,q.a,o);const Y=Math.sign(O)*Math.min(Math.abs(O)*.5,.6)+(e()-.5)*.14,at=(r.tilt+(e()-.5)*3)*At;T.copy(o.p),M.crossVectors(o.n,o.t),M.x<0&&M.multiplyScalar(-1),E.copy(o.t).multiplyScalar(Math.cos(Y)).addScaledVector(M,Math.sin(Y)).normalize(),x.copy(o.n).multiplyScalar(Math.cos(at)).addScaledVector(E,-Math.sin(at)),E.multiplyScalar(Math.cos(at)).addScaledVector(o.n,Math.sin(at)),Eh(A,x,r,e);const Q=Gi(r,e),k=It(L+(e()-.5)*.16,0,1);k<.45?Q.iri.lerp(_,(1-k/.45)*.85):Q.iri.lerp(w,(k-.45)/.55*.8);const Z=Tp(t,q.s,q.a,T),X=n.skin(q.s,q.a),ct=.94+e()*.12;s.add({...Q,root:T,dir:E,normal:x,skinNormal:o.n,iriNormal:A,width:F*ct,length:b*ct,cols:9,rows:6,scallop:!0,cup:.16,curl:.05,asym:0,bones:hs(t,X.bones),weights:X.weights,skinAt:Z,rand:e(),coord:n.bodyCoord(q.s)*.8,gain:r.lift,cover:H?.25:It(1-r.rowStep,.1,.9)})}C+=F*r.aspect*r.rowStep,I++}}function j1(s,t,e,n){const i=t.species.wing,r=t.wings[e],o=Rn(e),a=Oe(i.sheen),l=new y,c=new y,h=new y,u=i.broad,d=(N,C,I,L,F,b=null,D=0)=>{const U=t.rest[N.name];new Qt().makeRotationFromQuaternion(U.worldQuat).extractBasis(l,c,h),h.applyAxisAngle(c,(n()-.5)*.02),c.applyAxisAngle(h,(n()-.5)*.12);const O=t.index(N.name),q=.7+n()*.6;s.add({root:U.worldPos,dir:h,normal:c,skinNormal:null,iriNormal:c,width:I,length:C,cols:3,rows:9,round:.75,cup:.12,curl:.012,asym:L*o,base:F.clone().multiplyScalar(q),tip:b?b.clone().multiplyScalar(q):F.clone().multiplyScalar(q*.8),iri:a,iri2:a,iriStrength:b?.07:.22,iriPower:2.5,loose:0,widen:.3,edge:D,closed:b?1:0,bones:[O,0,0,0],weights:[1,0,0,0],rand:n(),coord:o>0?Do:No,gain:0,cover:o>0?.2:.8,channel:Th})},f=N=>{if(!u)return et(i.primaryLen[0],i.primaryLen[1],Math.pow(N,.75));const[C,I]=u.peak;return N<=C?et(i.primaryLen[0],i.primaryLen[1],Math.pow(N/C,.8)):i.primaryLen[1]*et(1,I,Math.pow((N-C)/(1-C),1.6))};if(r.primaries.forEach((N,C)=>{const I=C/(r.primaries.length-1);d(N,f(I),i.primaryWidth*(u?et(1.05,.74,I):et(1.15,.8,I)),et(.2,.5,I),Oe(i.primaryColor??i.color),u?Oe(u.primaryTip):null,u?.dusk[0]??0)}),r.secondaries.forEach((N,C)=>{const I=C/(r.secondaries.length-1);d(N,et(i.secondaryLen[0],i.secondaryLen[1],I),i.secondaryWidth,.15,Oe(i.secondaryColor??i.color),u?Oe(u.secondaryTip):null,u?.dusk[1]??0)}),u&&r.tertials.forEach((N,C)=>{const I=r.tertials.length>1?C/(r.tertials.length-1):0,L=Oe(i.secondaryColor??i.color);d(N,et(u.tertials.len[0],u.tertials.len[1],I),i.secondaryWidth*1.05,.1,L,L.clone().multiplyScalar(.7),u.dusk[1]*.5)}),u){const N=t.species.looks.covert,C=Oe(u.primaryCovert),I=new y,L=new y,F=new y,b=new y,D=(it,yt,Ft,B,se,zt,Xt)=>{const pt=t.rest[it.name];new Qt().makeRotationFromQuaternion(pt.worldQuat).extractBasis(l,c,h),b.copy(c).multiplyScalar(Math.sign(se));const de=.88+n()*.26;I.copy(pt.worldPos).addScaledVector(h,yt+(n()-.5)*.014).addScaledVector(l,(n()-.5)*.012).addScaledVector(c,se);const Vt=.04+n()*.05;L.copy(h).applyAxisAngle(c,(n()-.5)*.24),F.copy(b).multiplyScalar(Math.cos(Vt)).addScaledVector(L,-Math.sin(Vt)),L.multiplyScalar(Math.cos(Vt)).addScaledVector(b,Math.sin(Vt));const Zt=Gi(N,n,Xt*(.85+.3*n()));if(zt){const P=.8+n()*.4;Zt.base=zt.clone().multiplyScalar(.45*P),Zt.tip=zt.clone().multiplyScalar(P)}s.add({...Zt,root:I,dir:L,normal:F,skinNormal:b,iriNormal:F,width:B*de,length:Ft*de,cols:3,rows:4,curl:.03+n()*.06,asym:0,bones:[t.index(it.name),0,0,0],weights:[1,0,0,0],rand:n(),coord:o>0?Do:No,gain:0,cover:.5})},U=u.coverts.length,O=(it,yt)=>{u.coverts.forEach(([Ft,B,se],zt)=>{const Xt=zt<U-1?2:1;for(let pt=0;pt<Xt;pt++)D(it,Ft,B,se,.016-zt*.003,yt&&zt===U-1?C:null,1)}),D(it,-.01,.1,.075,-.012,null,1.15),D(it,.05,.13,.085,-.009,null,1.15)};r.primaries.forEach(it=>O(it,!0)),r.secondaries.forEach(it=>O(it,!1)),r.tertials.forEach(it=>O(it,!1));const q=u.armCoverts,[V,H,Y]=r.bones,at=it=>r.open[r.bones.indexOf(it)],Q=new ve,k=(it,yt,Ft,B,se)=>{const zt=at(it),Xt=t.rest[it.name];Q.copy(zt.quat).invert().premultiply(Xt.worldQuat),yt.sub(zt.pos).applyQuaternion(Q).add(Xt.worldPos),Ft.applyQuaternion(Q),B.applyQuaternion(Q),se.applyQuaternion(Q)},Z=at(V).pos,X=at(H).pos,ct=at(Y).pos,J=new y(0,1,0).applyQuaternion(at(V).quat),tt=new y(0,0,1).applyQuaternion(at(Y).quat),ot=new y(o,0,0),ft=new y().crossVectors(J,new y(1,0,0)),Rt=ct.clone().sub(Z),Bt=Rt.length();Rt.normalize();const kt=ft.clone().addScaledVector(Rt,-ft.dot(Rt)).normalize(),ie=X.clone().sub(Z).dot(Rt),wt=X.clone().sub(Z).dot(kt),Ct=it=>it<ie?wt*it/ie:wt*(Bt-it)/(Bt-ie),Lt=(it,yt,Ft,B,se,zt,Xt,pt,de)=>{L.copy(ot).multiplyScalar(Math.cos(Ft*At)).addScaledVector(ft,Math.sin(Ft*At)),b.copy(J).multiplyScalar(Math.sign(zt)*Math.cos(de)).addScaledVector(kt,-Math.sin(de)),I.copy(yt).addScaledVector(J,zt),F.copy(b).multiplyScalar(Math.cos(Xt)).addScaledVector(L,-Math.sin(Xt)),L.multiplyScalar(Math.cos(Xt)).addScaledVector(b,Math.sin(Xt)),k(it,I,L,F,b);const Vt=.88+n()*.26;s.add({...Gi(N,n,pt*(.85+.3*n())),root:I,dir:L,normal:F,skinNormal:b,iriNormal:F,width:se*Vt,length:B*Vt,cols:3,rows:4,curl:.03+n()*.06,asym:0,bones:[t.index(it.name),0,0,0],weights:[1,0,0,0],rand:n(),coord:o>0?Do:No,gain:0,cover:.5})},Gt=new y,Wt=q.size[0][0]*.42;for(const it of[1,-1]){for(let yt=-.02;yt<Bt+.005;yt+=q.step){const Ft=Ct(It(yt,0,Bt)),B=It(yt/Bt,0,1),se=et(118,74,B),zt=yt<ie*.92?V:H;for(let Xt=0;Xt<q.rows;Xt++){const pt=Xt*Wt-.004;if(pt>Ft+(it>0?.012:.05))break;const de=Xt/Math.max(q.rows-1,1);Gt.copy(Z).addScaledVector(Rt,yt+(n()-.5)*q.step*.5+(Xt%2?q.step/2:0)).addScaledVector(kt,pt+(n()-.5)*.008),Lt(zt,Gt,se+(n()-.5)*14,et(q.size[0][0],q.size[1][0],de),et(q.size[0][1],q.size[1][1],de),it*(.021-Xt*.0022),.05+n()*.05,it>0?1:1.15,Xt===0?.6:0)}}for(let yt=q.step*.4;yt<i.hand*.98;yt+=q.step){const Ft=yt/i.hand;for(let B=0;B<2;B++)Gt.copy(ct).addScaledVector(tt,yt+(n()-.5)*.01+(B%2?q.step/2:0)).addScaledVector(kt,B*Wt-.008),Lt(Y,Gt,et(70,36,Ft)+(n()-.5)*12,q.size[0][0]*et(1.05,.8,Ft),q.size[0][1]*et(1,.75,Ft),it*(.017-B*.003),.05+n()*.04,it>0?1:1.15,B===0?.6:0)}}return}const g=t.species.looks.covert,v=t.rest[`hand.${e}`],p=t.rest[`forearm.${e}`];new Qt().makeRotationFromQuaternion(v.worldQuat).extractBasis(l,c,h);const m=l.clone().multiplyScalar(o),M=c.clone(),T=h.clone(),E=v.worldPos.clone().addScaledVector(T,i.hand),x=[{off:-.02,len:.075,w:.034,lift:.006,n:15},{off:0,len:.1,w:.04,lift:.008,n:14},{off:.024,len:.13,w:.046,lift:.01,n:14},{off:.05,len:.17,w:.05,lift:.012,n:13}],A=new y,_=new y,w=new y;for(const N of x)for(let C=0;C<N.n;C++){const I=et(-.55,.9,(C+n()*.7)/N.n);I<0?A.copy(v.worldPos).lerp(p.worldPos,-I/.5):A.copy(v.worldPos).lerp(E,I),A.addScaledVector(m,N.off+(n()-.5)*.016).addScaledVector(M,N.lift);const L=.06+n()*.08;_.copy(T).applyAxisAngle(M,o*(.1+n()*.3+(I<0?.25:0))),w.copy(M).multiplyScalar(Math.cos(L)).addScaledVector(_,-Math.sin(L)),_.multiplyScalar(Math.cos(L)).addScaledVector(M,Math.sin(L));const F=t.index(I<0?`forearm.${e}`:`hand.${e}`),b=.8+n()*.4;s.add({...Gi(g,n,.8+.3*n()),root:A,dir:_,normal:w,skinNormal:M,iriNormal:w,width:N.w*b,length:N.len*b,cols:3,rows:4,curl:.04+n()*.1,asym:0,bones:[F,0,0,0],weights:[1,0,0,0],rand:n(),coord:o>0?Do:No,gain:0,cover:.55})}}function Q1(s,t,e,n){const{loft:i,species:r}=t,o=r.wing,a=Rn(e),l=a>0?q1:Y1,c={p:new y,n:new y,t:new y},h={p:new y,n:new y,t:new y},u=(tt,ot,ft)=>{const Rt=i.wingAt(tt,ot,a);return i.surface(It(Rt.s,.02,i.sMax),Rt.ang,ft),Rt};u(0,0,c),u(1,0,h);const d=c.p.distanceTo(h.p),f=new y,g=new y,v=new y,p=Oe(o.primaryColor??o.color),m=Oe(o.secondaryColor??o.color),M=Oe(o.sheen),T=r.looks.wingCovert,[E,x]=o.covertWidth??[.024,.05],A=o.bladeScale??1,[_,w]=o.covertAspect??[2.2,3.4],N=(tt,ot,ft,Rt,Bt,kt)=>{const ie=u(tt,ot,c);u(tt+ft/d,ot+Rt,h),f.copy(c.p).addScaledVector(c.n,Bt),g.copy(h.p).addScaledVector(h.n,Bt+ft*Math.sin(kt*At)).sub(f).normalize(),v.copy(c.n).add(h.n).addScaledVector(g,-c.n.dot(g)-h.n.dot(g)).normalize();const wt=i.skin(It(ie.s,.02,i.sMax),ie.ang);return{bones:hs(t,wt.bones),weights:wt.weights}},C=o.broad,[I,L]=C?.restCoverts??[7,.3];for(let tt=0;tt<I;tt++){const ot=tt/(I-1),ft=et(.03,L,ot*ot*.4+ot*.6),Rt=et(E,x,ot),Bt=Rt*et(_,w,ot),kt=et(o.rest.width[0],o.rest.width[1],$(0,.35,ft)),ie=Math.max(3,Math.round(2*kt/(Rt*.62)));for(let wt=0;wt<ie;wt++){const Ct=It(-.98+2*(wt+(tt%2?.5:0)+(n()-.5)*.3)/ie,-1.02,1.02),Lt=.85+n()*.3,Gt=N(ft+(n()-.5)*.012,Ct,Bt*Lt,-Ct*.12+(n()-.5)*.1,.004+ot*.004,7+n()*5);s.add({...Gi(T,n,.8+.4*n()),root:f,dir:g,normal:v,skinNormal:c.n,iriNormal:v,width:Rt*Lt,length:Bt*Lt,cols:3,rows:4,curl:.05+n()*.08,asym:0,...Gt,rand:n(),coord:l,gain:0,cover:It(1-T.rowStep,.1,.9)})}}const F=C?{step:.028,across:[-1.38,-1.08,-.77,-.46,-.15,.15,.46,.77,1.08,1.38],len:.115,w:.078}:{step:.04,across:[-.82,-.3,.3,.82],len:.085,w:.05};for(let tt=C?.1:.42;tt<.98;tt+=F.step)for(const ot of F.across){if(tt<.42&&Math.abs(ot)<1)continue;const ft=.85+n()*.3,Rt=N(tt+(n()-.5)*.02,ot+(n()-.5)*.2,F.len*ft,-ot*.1,.002,4);s.add({...Gi(T,n,.7+.3*n()),root:f,dir:g,normal:v,skinNormal:c.n,iriNormal:v,width:F.w*ft,length:F.len*ft,cols:3,rows:4,curl:.04,asym:0,...Rt,rand:n(),coord:l,gain:0,cover:.5})}const b=[];for(let tt=0;tt<=26;tt++)for(let ot=0;ot<=14;ot++)u(tt/20,et(-2.2,2.2,ot/14),c),b.push({p:c.p.clone(),n:c.n.clone()});const D=new y,U=tt=>{let ot=b[0],ft=1/0;for(const Rt of b){const Bt=Rt.p.distanceToSquared(tt);Bt<ft&&(ft=Bt,ot=Rt)}return D.copy(tt).sub(ot.p).dot(ot.n)},O=r.tail,q=O.droop*At,V=new y(0,-Math.sin(q),-Math.cos(q)),H=new y(0,Math.cos(q),-Math.sin(q)),Y=i.center(r.spine.tail,new y).addScaledVector(V,O.length[1]*o.rest.cross[0]).addScaledVector(H,.035);Y.x=o.rest.cross[1]*a,a>0&&Y.addScaledVector(H,.014);const at=new y,Q=new y,k=[],Z=C?.restSecondaries??{u:[.2,.3],v:[.82,.3],len:[.19*A,.27*A],width:.066*A},X=C?.restPrimaries??{u:[.3,.42],v:[.25,-.8],reach:[.52,1],width:[.068*A,.05*A]};for(let tt=0;tt<o.secondaries;tt++){const ot=tt/(o.secondaries-1);k.push({u:et(Z.u[0],Z.u[1],ot),v:et(Z.v[0],Z.v[1],ot),w:Z.width,reach:1,to:null,len:et(Z.len[0],Z.len[1],ot),dv:-.3,asym:.15})}for(let tt=0;tt<o.primaries;tt++){const ot=tt/(o.primaries-1);k.push({u:et(X.u[0],X.u[1],ot),v:et(X.v[0],X.v[1],ot),w:et(X.width[0],X.width[1],ot),reach:et(X.reach[0],X.reach[1],Math.pow(ot,.8)),to:Y.clone().addScaledVector(H,(1-ot)*.05).addScaledVector(V,-(1-ot)*.02),len:0,dv:0,asym:et(.2,.45,ot)})}const ct=C?Oe(C.primaryTip):null,J=C?Oe(C.secondaryTip):null;k.forEach((tt,ot)=>{const ft=u(tt.u,tt.v,c),Rt=.016-ot*7e-4;f.copy(c.p).addScaledVector(c.n,Rt),Q.copy(c.n);let Bt=tt.len;tt.to?(at.copy(tt.to),Bt=at.distanceTo(f)*tt.reach):(u(tt.u+Bt/d,tt.v+tt.dv,h),at.copy(h.p).addScaledVector(h.n,Rt),Q.add(h.n).normalize());const kt=.035;for(let Gt=0;Gt<60;Gt++){g.copy(at).sub(f).normalize(),v.copy(Q).addScaledVector(g,-Q.dot(g)).normalize();let Wt=!0;for(const it of[.25,.45,.65,.85,1])if(D.copy(f).addScaledVector(g,it*Bt).addScaledVector(v,-kt*Bt*it*it),U(D.clone())<.005+.012*it-ot*3e-4){Wt=!1;break}if(Wt)break;at.addScaledVector(Q,.005)}const ie=i.skin(It(ft.s,.02,i.sMax),ft.ang),wt=.75+n()*.5,Ct=ot<o.secondaries?m:p,Lt=ot<o.secondaries?J:ct;s.add({root:f,dir:g,normal:v,skinNormal:null,iriNormal:v,width:tt.w,length:Bt,cols:3,rows:9,round:.75,cup:.1,curl:kt,asym:tt.asym*a,base:Ct.clone().multiplyScalar(wt),tip:Lt?Lt.clone().multiplyScalar(wt):Ct.clone().multiplyScalar(wt*.8),iri:M,iri2:M,iriStrength:Lt?.07:.22,iriPower:2.5,loose:0,widen:.2,edge:C?C.dusk[ot<o.secondaries?1:0]:0,closed:Lt?.5:0,bones:hs(t,ie.bones),weights:ie.weights,rand:n(),coord:l,gain:0,cover:a>0?.2:.8,channel:Th})})}function tS(s,t,e){const n=t.species.tail,i=Oe(n.color),r=n.tip===void 0?null:Oe(n.tip),o=Oe(n.sheen??4609132),a=Oe(n.centralSheen??2058840),l=new y,c=new y,h=new y;for(const u of t.rectrices){const d=t.rest[u.bone.name];new Qt().makeRotationFromQuaternion(d.worldQuat).extractBasis(l,c,h);const f=(Math.abs(u.k)-.5)/Math.max(n.rectrices-1,1),g=.85+e()*.3,v=n.outer&&f>=n.outer.from?i.clone().lerp(Oe(n.outer.color),.7):i;s.add({root:d.worldPos,dir:h,normal:c,skinNormal:null,iriNormal:c,width:n.width,length:et(n.length[0],n.length[1],Math.pow(f,1.4)),cols:5,rows:14,round:1,cup:.06,curl:.01,asym:.12*Math.sign(u.k),base:v.clone().multiplyScalar(g),tip:(r??v).clone().multiplyScalar(r?g:g*.8),closed:n.banded?.5:0,iri:f<.1?a:o,iri2:o,iriStrength:f<.1?.13:.2,iriPower:3,loose:0,widen:.45,bones:[t.index(u.bone.name),0,0,0],weights:[1,0,0,0],rand:e(),coord:1,gain:0,cover:u.k>0?.8:.2,channel:Th})}}function eS(s,t=3,e=120,n=80){const{loft:i,species:r}=s,o=new Oc,a={p:new y,n:new y,t:new y},l=new y,c=new Float32Array(n+1),h=Array.from({length:n+1},()=>new y),u=new y,d=Ki(r.seed+99),f=560,g=i.sMax-.12,v=[];for(let p=0;p<=e;p++){const m=g-p/e*(g-.05);for(let M=0;M<=n;M++){const T=M/n*Math.PI*2;i.surface(m,T,a),p>0&&(c[M]+=h[M].distanceTo(a.p)),h[M].copy(a.p),v.push({p:a.p.clone(),n:a.n.clone(),d:c[M],s:m,a:T})}}for(let p=0;p<t;p++){const m=t>1?p/(t-1):0,M=et(.008,.03,m),T=o.pos.length/3;for(let E=0;E<v.length;E++){const x=v[E],A=E%(n+1),_=x.a<=Math.PI?x.a/Math.PI:(2*Math.PI-x.a)/Math.PI,w=Si(r,x.s,_),N=wp(r,w,x.s,_),{gold:C,glit:I}=N,L=N.shade*bp(i,x.s,x.a);let F=w.fuzz??Math.min(.55+(w.loose??0)*.6,1);for(const U of sn)F*=$(r.eye.radius*1.25,r.eye.radius*2.1,x.p.distanceTo(s.eyes[U].center));F*=1-$(i.sMax-.7,i.sMax-.2,x.s);{const U=i.wingUV(x.s,x.a);U.u>.02&&U.u<.99&&(F*=$(.85,r.wing.broad?1:1.15,Math.abs(U.v)))}const b=Gi(w,d,L,C,r.shading.gold,I);Eh(u,x.n,w),l.copy(x.p).addScaledVector(x.n,M*(.5+.5*Math.min(F*2,1))*It(w.width/.03,.4,1));const D=i.skin(x.s,x.a);o.pos.push(l.x,l.y,l.z),o.nor.push(x.n.x,x.n.y,x.n.z),o.uv.push(A/n*f,x.d),o.root.push(l.x,l.y,l.z),o.hinge.push(1,0,0),o.data.push(m,i.bodyCoord(x.s)*.8,w.lift,X1),o.iriN.push(u.x,u.y,u.z),o.cBase.push(b.base.r,b.base.g,b.base.b,w.fine?0:w.iriStrength*I*(1+C)/4),o.cTip.push(b.tip.r,b.tip.g,b.tip.b,F),o.cIri.push(b.iri.r,b.iri.g,b.iri.b,w.iriPower/32),o.cIri2.push(b.iri2.r,b.iri2.g,b.iri2.b,m),o.edge.push(0,0),o.si.push(...hs(s,D.bones)),o.sw.push(...D.weights)}for(let E=0;E<e;E++)for(let x=0;x<n;x++){const A=T+E*(n+1)+x,_=A+n+1;o.idx.push(A,_,A+1,_,_+1,A+1)}}return o}function nS(s){const t=Ki(s.species.seed),e=new Oc;$1(e,s,t),J1(e,s,t);const n=new Oc;for(const r of sn)j1(n,s,r,t),Q1(n,s,r,t);tS(n,s,t);const i=eS(s);return{contour:e.build(),flight:n.build(),fuzz:i.build()}}function iS(s,t=64,e=36,n=.007){const i={p:new y,n:new y,t:new y},{loft:r}=s,o=[],a=[],l=[],c=[],h=new y;for(let d=0;d<=t;d++){const f=d/t*r.sMax;for(let g=0;g<=e;g++){const v=g/e*Math.PI*2,p=r.skin(f,v);r.surface(f,v,i),h.copy(i.p).addScaledVector(i.n,-n),o.push(h.x,h.y,h.z),a.push(...hs(s,p.bones)),l.push(...p.weights)}}for(let d=0;d<t;d++)for(let f=0;f<e;f++){const g=(d+.5)/t*r.sMax;if(g>4.3&&g<9&&Math.cos((f+.5)/e*Math.PI*2)>-.25)continue;const v=d*(e+1)+f,p=v+e+1;c.push(v,v+1,p,p,v+1,p+1)}const u=new Se;return u.setAttribute("position",new oe(o,3)),u.setAttribute("skinIndex",new Sa(a,4)),u.setAttribute("skinWeight",new oe(l,4)),u.setIndex(c),u.computeVertexNormals(),u}const Ep=`
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
}`,Ap=`
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
float fC = cos(fAng), fS = sin(fAng);`,Rp=`
vec3 transformed = aData.w > 3.5 ? position + normal * max(fAng, -0.1) * 0.05 : aRoot + rotAxis(position - aRoot, aHinge, fC, fS);
// as the wing spreads the resting wing sinks into the body and the real blades grow out of it
if (fRest) {
  vec3 fPivot = vec3(fRight ? -uWingPivot.x : uWingPivot.x, uWingPivot.yz);
  transformed = fPivot + wingSwing(transformed - fPivot, fRight);
  // (its blades always; its coverts stay as the flank's own cover where the species asks)
  transformed = mix(transformed, aRoot - normal * 0.03, fUnfold * (aData.w > 2.5 ? 1.0 : 1.0 - uRestCover));
}
if (fReal) transformed = mix(aRoot, transformed, fUnfold * fBeat);
`;function sS(){const s={uFluff:{value:0},uLift:{value:new Float32Array(8)},uGorget:{value:0},uCrest:{value:0},uWingSpread:{value:new Ht},uRestCover:{value:0},uWingLift:{value:new Ht},uWingOut:{value:new Re},uWingPivot:{value:new y},uWingSpan:{value:new y(0,0,-1)},uWingChord:{value:new y(0,1,0)},uFlash:{value:1},uGlint:{value:1},uPal:{value:[new ee,new ee,new ee,new ee]}},t=new _n({color:16777215,roughness:.6,metalness:0,side:ze,alphaToCoverage:!0});return t.onBeforeCompile=e=>{Object.assign(e.uniforms,s),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
${Ep}
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
varying vec3 vIriN;`).replace("#include <beginnormal_vertex>",`${Ap}
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
vIriN = normalize(normalMatrix * fIriN);`).replace("#include <begin_vertex>",Rp),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
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
}`)},t.customProgramCacheKey=()=>"plumage-v47",{material:t,uniforms:s}}function rS(s){const t=new $f({side:ze});return t.onBeforeCompile=e=>{Object.assign(e.uniforms,s),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>${Ep}`).replace("#include <begin_vertex>",Ap+Rp)},t.customProgramCacheKey=()=>"plumage-depth-v5",t}class lr{constructor(t){this.rig=t}rig;pos=[];nor=[];col=[];uv=[];si=[];sw=[];idx=[];add(t,e,n,i,r){const o=this.rig.rest[e],a=new Qt().compose(o.worldPos,o.worldQuat,new y(1,1,1)),l=t.index?t.toNonIndexed():t.clone(),c=l.getAttribute("position").clone();l.applyMatrix4(a);const h=l.getAttribute("position"),u=l.getAttribute("normal"),d=l.getAttribute("uv"),f=this.pos.length/3,g=this.rig.index(e),v=new y;for(let p=0;p<h.count;p++){v.fromBufferAttribute(c,p);const m=r?.(v)??n;this.pos.push(h.getX(p),h.getY(p),h.getZ(p)),this.nor.push(u.getX(p),u.getY(p),u.getZ(p)),this.col.push(m.r,m.g,m.b),this.uv.push(d?d.getX(p):0,d?d.getY(p):0),this.si.push(i?this.rig.index(i(v)):g,0,0,0),this.sw.push(1,0,0,0),this.idx.push(f+p)}l.dispose(),t.dispose()}build(){const t=new Se;return t.setAttribute("position",new oe(this.pos,3)),t.setAttribute("normal",new oe(this.nor,3)),t.setAttribute("color",new oe(this.col,3)),t.setAttribute("uv",new oe(this.uv,2)),t.setAttribute("skinIndex",new Sa(this.si,4)),t.setAttribute("skinWeight",new oe(this.sw,4)),t.setIndex(this.idx),t.boundingSphere=new kn(new y(0,.4,0),2.5),t}}function Cs(s,t,e,n=10){const i=[],r=[],o=s.length,a=new y,l=new y,c=new y;for(let u=0;u<o;u++){a.copy(s[Math.min(u+1,o-1)]).sub(s[Math.max(u-1,0)]).normalize(),l.crossVectors(e,a).normalize(),c.crossVectors(a,l);const[d,f]=t(u/(o-1));for(let g=0;g<=n;g++){const v=g/n*Math.PI*2;i.push(s[u].x+l.x*Math.cos(v)*d+c.x*Math.sin(v)*f,s[u].y+l.y*Math.cos(v)*d+c.y*Math.sin(v)*f,s[u].z+l.z*Math.cos(v)*d+c.z*Math.sin(v)*f)}}for(let u=0;u<o-1;u++)for(let d=0;d<n;d++){const f=u*(n+1)+d,g=f+n+1;r.push(f,f+1,g,g,f+1,g+1)}const h=new Se;return h.setAttribute("position",new oe(i,3)),h.setIndex(r),h.computeVertexNormals(),h}function Uo(s){const t=[],e=[],n=s[0].length;for(const r of s)for(const o of r)t.push(o.x,o.y,o.z);for(let r=0;r<s.length-1;r++)for(let o=0;o<n-1;o++){const a=r*n+o,l=a+n;e.push(a,a+1,l,l,a+1,l+1)}const i=new Se;return i.setAttribute("position",new oe(t,3)),i.setIndex(e),i.computeVertexNormals(),i}function Sl(s,t,e,n,i=!1){const a=[],l=[],c=[];for(let u=0;u<=12;u++){const d=et(t,e,u/12);for(let f=0;f<=12;f++){const g=et(-n,n,f/12);let v=Math.sin(g),p=Math.cos(g)*Math.sin(d);const m=Math.cos(g)*Math.cos(d);if(i){const M=v;v=p,p=M}a.push(v*s,p*s,m*s),l.push(v,p,m)}}for(let u=0;u<12;u++)for(let d=0;d<12;d++){const f=u*13+d,g=f+12+1;i?c.push(f,g,f+1,g,g+1,f+1):c.push(f,f+1,g,g,f+1,g+1)}const h=new Se;return h.setAttribute("position",new oe(a,3)),h.setAttribute("normal",new oe(l,3)),h.setIndex(c),h}const bl={upperOpen:62*At,lowerOpen:-72*At,nictOpen:150*At};function oS(s){const t=s.species,e=t.eye.radius,n=new Ot(t.skin),i=new y(0,1,0),r=new lr(s),o=t.eye.ring,a=new Ot(t.eye.lid??2369067),l=new Ot(o?.color??7829372),c=new Ot(526346);for(const k of sn){const Z=k==="L"?-1:1,X=96,ct=7,J=[],tt=[],ot=[],ft=new Ot;for(let wt=0;wt<=X;wt++){const Ct=wt/X*Math.PI*2,Lt=Math.cos(Ct),Gt=Math.sin(Ct),[Wt,it]=t.eye.open??[43,29],yt=t.eye.open?2:Lt*Z>0?1.3:1.6,Ft=1/Math.pow(Math.pow(Math.abs(Lt)/(Wt*At),yt)+Math.pow(Math.abs(Gt)/(it*At),yt),1/yt),B=56*At;for(let se=0;se<=ct;se++){const zt=se/ct;if(o){const Zt=et(Math.sin(Ft)*e*1.05,e*o.width,zt),P=Math.pow(Math.sin(Math.PI*Math.min(zt/.3,1)),.6),S=e*(t.eye.inset+.05)-Zt*Zt/(12*e);J.push(Lt*Zt,Gt*Zt,et(Math.cos(Ft)*e*1.07,S,$(0,.3,zt))+.015*e*P),ft.copy(l).multiplyScalar((.8+.2*$(0,.25,zt))*(.95+.05*Math.sin(Ct*46+zt*9))),tt.push(ft.r,ft.g,ft.b);continue}const Xt=et(Ft,B,zt),pt=Math.pow(Math.sin(Math.PI*Math.min(zt/.5,1)),.6),de=Math.max(0,Math.sin(Ct*38))*$(.12,.2,zt)*(1-$(.22,.32,zt)),Vt=e*(1.05+.02*pt+.004*de-.035*$(.5,1,zt));J.push(Math.sin(Xt)*Lt*Vt,Math.sin(Xt)*Gt*Vt,Math.cos(Xt)*Vt),ft.copy(l).multiplyScalar(.55+.5*pt).lerp(c,Math.max(de*.35,$(.4,.6,zt))),tt.push(ft.r,ft.g,ft.b)}}for(let wt=0;wt<X;wt++)for(let Ct=0;Ct<ct;Ct++){const Lt=wt*(ct+1)+Ct,Gt=Lt+ct+1;ot.push(Lt,Gt,Lt+1,Gt,Gt+1,Lt+1)}const Rt=new Se;Rt.setAttribute("position",new oe(J,3)),Rt.setAttribute("color",new oe(tt,3)),Rt.setIndex(ot),Rt.computeVertexNormals();const Bt=Rt.toNonIndexed(),kt=Bt.getAttribute("color");let ie=0;r.add(Bt,`eye.${k}`,l,null,()=>ft.fromBufferAttribute(kt,ie++).clone()),r.add(Sl(e*1.04,12*At,112*At,78*At),`lidUpper.${k}`,a),r.add(Sl(e*1.036,-106*At,16*At,78*At),`lidLower.${k}`,a)}const h=new Ot(t.legs.color),u=t.legs.perchRadius;for(const k of sn){const Z=Rn(k),X=s.tarsusLength,ct=t.legs.toeRadius??.0085,J=ct/.0085;r.add(Cs([0,.25,.5,.75,1,1.15].map(ft=>new y(0,0,ft*X)),ft=>[et(.011,.017,ft)*J,et(.011,.017,ft)*J],i,8),`tarsus.${k}`,h);const tt=(ft,Rt,Bt,kt,ie)=>{const wt=[];for(let Lt=0;Lt<=14;Lt++){const Gt=Lt/14,Wt=et(Rt,Bt,Gt),it=$(.78,1,Gt)*.012,yt=(1-$(0,.2,Gt))*.012,Ft=u+ct*.9-it+yt;wt.push(new y(et(kt,ie,Gt),-u+Ft*Math.cos(Wt),Ft*Math.sin(Wt)))}r.add(Cs(wt,Lt=>{const Gt=Lt>.78?et(.75,.08,(Lt-.78)/.22):1+.12*Math.sin(Lt*22);return[ct*Gt,ct*Gt*.9]},new y(1,0,0),7),`toe.${k}.${ft}`,h.clone().multiplyScalar(1-ft%2*.12))},ot=t.legs.toe/(u+ct);t.legs.zygodactyl?(tt(1,.05,-ot*.72,-.004*Z,-.03*Z),tt(2,-.1,ot*.92,-.004*Z,-.022*Z),tt(3,-.1,ot*1.1,.006*Z,.02*Z),tt(4,.05,-ot*1,.006*Z,.034*Z)):(tt(1,-.12,ot*.95,0,-.03*Z),tt(2,-.12,ot*1.1,0,.002*Z),tt(3,-.12,ot*.98,0,.034*Z),tt(4,.05,-ot*.8,0,-.006*Z))}const d=iS(s),f=new _n({color:16777215,vertexColors:!0,roughness:.9,envMapIntensity:.4,side:ze}),g=new _n({color:n.clone().multiplyScalar(.5),roughness:1,envMapIntensity:.15,side:ze}),v=new ni(d,g);v.name="bird.skin";const p=new ni(r.build(),f);p.name="bird.bare";const m=new lr(s),M=t.bill,T=new Ot(M.color),E=new Ot(2493968),x=k=>et(1,.17,Math.pow(k,.8))*(k>.95?et(1,.05,(k-.95)/.05):1),A=(k,Z,X,ct)=>{const J=[];for(let ot=0;ot<=26;ot++){const ft=et(-.07,M.length*ct,ot/26),Rt=Math.max(ft/M.length,0);J.push(new y(0,k*M.radius*x(Rt)-M.droop*Rt*Rt,ft))}return Cs(J,ot=>{const ft=Math.max((ot*(M.length*ct+.07)-.07)/M.length,0);return[M.radius*X*x(ft),M.radius*Z*x(ft)]},i,12)},_=k=>{const Z=Math.max(k/M.length,0);return-M.droop*Z*Z};if(M.hook){const k=M.hook,Z=new Ot(k.cere),X=T.clone().multiplyScalar(.86),ct=.07,J=12,tt=(S,G)=>S>G?Math.sqrt(Math.max(1-Math.pow((S-G)/(1-G),2)*.99,0)):1,ot=k.turn*At,ft=(k.top+k.drop)/(1-Math.cos(ot)),Rt=k.top-ft,Bt=(S,G)=>S<=0?G.set(0,k.top,S*ct):G.set(0,Rt+ft*Math.cos(ot*S),k.reach*Math.sin(ot*S)),kt=Bt(1,new y),ie=new y(0,-M.droop,M.length),wt=new y(0,et(ie.y,kt.y,.35),ie.z+.012),Ct=.5,Lt=(S,G)=>{if(S<=0)return G.set(0,0,S*ct);if(S<=Ct){const gt=M.length*S/Ct;return G.set(0,_(gt),gt)}const ut=(S-Ct)/(1-Ct),rt=(1-ut)*(1-ut),mt=2*ut*(1-ut);return G.set(0,rt*ie.y+mt*wt.y+ut*ut*kt.y,rt*ie.z+mt*wt.z+ut*ut*kt.z)},Gt=.1,Wt=S=>1+.06*(1-$(Gt-.03,Gt+.03,S)),it=S=>M.radius*et(1,.2,It(S,0,1))*tt(S,.86)*Wt(S),yt=[-1,-.5,...Array.from({length:37},(S,G)=>G/36)],Ft=new y,B=new y,se=(S,G)=>{Bt(S,Ft),Lt(S,B);const ut=it(S),rt=G*(G===1?Wt(S):1);return Array.from({length:J+1},(mt,gt)=>{const st=-Math.PI/2+Math.PI*gt/J;return new y(ut*Math.sin(st),B.y+(Ft.y-B.y)*rt*Math.cos(st),B.z+(Ft.z-B.z)*rt*Math.cos(st))})},zt=k.reach*Math.sin(ot*Gt);m.add(Uo(yt.map(S=>se(S,1))),"bill",T,null,S=>S.z<zt&&S.y>k.top*.3?Z:T.clone().lerp(X,$(0,-k.drop,S.y))),m.add(Uo(yt.map(S=>se(S,.24))),"bill",E);for(const S of[1,-1]){const G=new hi(.0065,10,8);G.translate(S*M.radius*.6,k.top*.8,zt*.55),m.add(G,"bill",new Ot(2038295))}const Xt=M.length*.97,pt=S=>tt(S,.9)*tt(1-S,.86),de=S=>k.lower*(.75+.25*Math.sin(Math.min(S/.45,1)*Math.PI/2))*(1-.7*Math.pow(Math.max((S-.45)/.55,0),1.5))*pt(S),Vt=S=>k.lowerWidth*et(1,.55,$(.3,1,S))*pt(S),Zt=(S,G)=>{const ut=et(-.055,Xt,S),rt=de(S)*G,mt=Vt(S);return Array.from({length:J+1},(gt,st)=>{const ht=-Math.PI/2+Math.PI*st/J;return new y(mt*Math.sin(ht),_(ut)-rt*Math.cos(ht),ut)})},P=Array.from({length:29},(S,G)=>G/28);m.add(Uo(P.map(S=>Zt(S,1))),"bill",T.clone().multiplyScalar(.93),()=>"jaw"),m.add(Uo(P.map(S=>Zt(S,.3))),"bill",E,()=>"jaw")}else m.add(A(.4,.58,1,1),"bill",T,null,k=>k.y<_(k.z)+.1*M.radius*x(Math.max(k.z/M.length,0))?E:null),m.add(A(-.36,.5,.9,.985),"bill",T,()=>"jaw",k=>k.y>_(k.z)-.1*M.radius*x(Math.max(k.z/M.length,0))?E:null);const w=M.hook?M.length*.4:.09;for(const k of[1,-1]){const Z=new Se,X=k*M.radius*.8,ct=k*M.radius*.72;Z.setAttribute("position",new oe([X,2e-4,-.05,ct,2e-4,w,X,-2e-4,-.05,ct,2e-4,w,ct,-2e-4,w,X,-2e-4,-.05],3)),Z.setAttribute("normal",new oe([k,0,0,k,0,0,k,0,0,k,0,0,k,0,0,k,0,0],3)),m.add(Z,"bill",new Ot(393731),J=>J.y>0?"bill":"jaw")}const N=new lr(s);if(M.hook){const k=new Ot(9069664),Z=new Ot(3812910),X=.012,ct=M.length*.62,J=Array.from({length:15},(ot,ft)=>{const Rt=et(X,ct,ft/14);return new y(0,_(Rt)-.009,Rt)}),tt=ot=>ot>.8?Math.sqrt(Math.max(1-Math.pow((ot-.8)/.2,2)*.96,0)):1;N.add(Cs(J,ot=>[et(.02,.016,ot)*tt(ot),et(.009,.0075,ot)*tt(ot)],i,10),"bill",k,ot=>ot.z<M.length*.5?"tongue.1":ot.z<M.length*.7?"tongue.2":"tongue.3",ot=>ot.z>ct*.78?Z:null)}else{const k=new Ot(15979474),Z=.04,X=M.length*.8,ct=tt=>tt.z<M.length*.5?"tongue.1":tt.z<M.length*.7?"tongue.2":"tongue.3",J=(tt,ot,ft,Rt)=>{const Bt=[];for(let kt=0;kt<=14;kt++){const ie=et(ft,Rt,kt/14),wt=ie/M.length,Ct=Math.max((wt-.55)/.25,0);Bt.push(new y(et(tt,ot,kt/14),-8e-4*(1-wt*.7)-M.droop*wt*wt-.0028*Ct*Ct,ie))}return Bt};N.add(Cs(J(0,0,Z,X-.012),tt=>[et(.0036,.0027,tt),et(.0024,.002,tt)],i,8),"bill",k,ct);for(const tt of[1,-1])N.add(Cs(J(tt*.0011,tt*.0015,X-.02,X),ot=>[.0015*Math.sqrt(1-ot*ot*.92),.0014*Math.sqrt(1-ot*ot*.92)],i,6),"bill",k,ct)}const C=new vn({color:16777215,vertexColors:!0,roughness:.22,clearcoat:1,clearcoatRoughness:.12,sheen:.4,sheenColor:16770272,emissive:4863540,envMapIntensity:1.1,side:ze}),I=new ni(N.build(),C);I.name="bird.tongue";const L=new _n({color:16777215,vertexColors:!0,roughness:.68,envMapIntensity:.35,side:ze}),F=new ni(m.build(),L);F.name="bird.bill";const b=new lr(s);for(const k of sn){const Z=new hi(e,40,28);Z.rotateX(Math.PI/2);const X=Z.getAttribute("position");for(let J=0;J<X.count;J++){const tt=X.getZ(J)/e,ot=1+.028*$(.55,1,tt);X.setXYZ(J,X.getX(J)*ot,X.getY(J)*ot,X.getZ(J)*ot)}Z.computeVertexNormals();const ct=Z.getAttribute("uv");for(let J=0;J<X.count;J++)ct.setXY(J,X.getZ(J)/e,0);b.add(Z,`eye.${k}`,new Ot(1,1,1))}const D=new vn({color:0,roughness:.35,metalness:0,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.1,specularIntensity:.12,ior:1.4}),[U,O]=t.eye.pupil??[.93,.93],q={uIris:{value:t.eye.iris===void 0?new Ot(.003,.0035,.006):new Ot(t.eye.iris)},uPupil:{value:U},pupilRest:U,pupilPinned:O};D.onBeforeCompile=k=>{k.uniforms.uIris=q.uIris,k.uniforms.uPupil=q.uPupil,k.vertexShader=k.vertexShader.replace("#include <common>",`#include <common>
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
}`)};const V=new ni(b.build(),D);V.name="bird.eyes";const H=new lr(s);for(const k of sn)H.add(Sl(e*1.045,-100*At,100*At,80*At,!0),`nict.${k}`,new Ot(9348296));const Y=new vn({color:16777215,vertexColors:!0,roughness:.45,transparent:!0,opacity:.3,clearcoat:.2,side:ze,depthWrite:!1}),at=new ni(H.build(),Y);at.name="bird.nict",at.renderOrder=2;const Q=[v,p,F,I,V,at];for(const k of Q)k.frustumCulled=!1,k.bind(s.skeleton,new Qt);return v.castShadow=!0,F.castShadow=!0,p.castShadow=!0,p.receiveShadow=!0,F.receiveShadow=!0,{meshes:Q,eye:q,dispose(){for(const k of Q)k.geometry.dispose(),k.material.dispose()}}}const wl={spread:0,lift:0,droop:0,sweep:0,raise:0,flex:0,out:0,twist:0};class Cp{headYaw=0;headPitch=0;headRoll=0;headShift=new y;headStabil=.85;reachTarget=new y;reachWeight=0;reachDir=new y(0,0,1);reachPin=0;reachRoll=0;bodyYaw=0;bodyPitch=0;bodyRoll=0;bodyShift=new y;chestPitch=0;breath=0;fluff=0;lift=new Float32Array(8);gorget=0;crest=0;lidUpper=0;lidLower=0;nict=0;feetSlope=0;feetScale=1;grip=1;legTuck=0;jaw=0;tongueOut=0;tongueCurl=0;carryAt=1;tailPitch=0;tailYaw=0;tailRoll=0;tailFan=0;wing={L:{...wl},R:{...wl}};reset(){Object.assign(this,aS),this.headShift.set(0,0,0),this.bodyShift.set(0,0,0),this.lift.fill(0);for(const t of sn)Object.assign(this.wing[t],wl)}addLift(t,e,n){for(let i=0;i<8;i++){const r=(i/7-t)/e;this.lift[i]+=n*Math.exp(-r*r)}}}const aS=Object.fromEntries(Object.entries(new Cp).filter(([,s])=>typeof s=="number")),Qn=new y(1,0,0),cr=new y(0,1,0),Tl=new y(0,0,1),Oo=new ve;function lS(s,t){const{bones:e,rest:n,species:i}=s,r=new Yn,o=new ve,a=new ve,l=new ve,c=new ve,h=new ve,u=new ve,d=new ve,f=new ve,g=new ve,v=new y(0,-.045,.03),p=new y,m=new y,M=new y,T=new y,[E,x]=i.behaviour.neckShare,A={};for(const Wt of sn){const it=n[`hand.${Wt}`].quat;A[Wt]={out:Qn.clone().applyQuaternion(it),fan:cr.clone().applyQuaternion(it)}}{const Wt={p:new y,n:new y,t:new y},it=(se,zt)=>{const Xt=s.loft.wingAt(se,zt,1);return s.loft.surface(Xt.s,Xt.ang,Wt)},yt=it(.03,.3).p.clone(),Ft=it(.95,0).p.clone().sub(yt).normalize(),B=it(.4,0).n.clone();B.addScaledVector(Ft,-B.dot(Ft)).normalize(),t.uWingPivot.value.copy(yt),t.uWingSpan.value.copy(Ft),t.uWingChord.value.crossVectors(B,Ft)}const _=n.bill,w=i.legs.zygodactyl===!0,N=new y(0,-i.bill.droop,i.bill.length).applyQuaternion(_.worldQuat).add(_.worldPos).sub(n.head.worldPos),C=N.length(),I=Math.atan2(N.y,N.z),L=.34,F=new y,b=new y,D=i.bill.length*.65,U=["tongue.1","tongue.2","tongue.3"],O=[.06,.5,.7].map(Wt=>Wt*i.bill.length),q=[0,.3,.7],V=(Wt,it)=>{const yt=i.bill.length,Ft=Math.min(Wt,yt),B=-2*i.bill.droop*Ft/(yt*yt);return it.set(0,-i.bill.droop*(Ft/yt)*(Ft/yt)+B*(Wt-Ft),Wt),-Math.atan(B)},H=O.map(()=>new y),Y=O.map(()=>new y),at=O.map((Wt,it)=>V(Wt,H[it])),Q=new y,k=new ve,Z=new Qt,X=new y,ct=new y,J=(()=>{const[Wt,it]=i.throat,yt={p:new y,n:new y,t:new y},Ft=n.head.worldPos,B=s.loft.point(it,0,new y).sub(Ft),se=s.loft.point(Wt,0,new y).sub(Ft),zt=s.loft.surface((Wt+it)/2,0,yt).p.clone().sub(Ft),Xt=yt.n.clone(),pt=s.loft.surface(Wt,0,yt).t.clone();return{chin:B,rim:se,mid:zt,out:Xt,down:pt,span:B.distanceTo(se),pivot:Ft.clone().sub(n.chest.worldPos)}})(),tt=.12,ot=new ve,ft=new y,Rt=new y,Bt=new y,kt=new y,ie=n.sternum.worldPos.clone().sub(n.chest.worldPos).setX(0).normalize(),wt=sn.map(Wt=>({s:Wt,foot:e[`foot.${Wt}`],footRest:n[`foot.${Wt}`],toes:[1,2,3,4].map(it=>e[`toe.${Wt}.${it}`]),tarsus:e[`tarsus.${Wt}`]})),Ct=()=>{h.copy(l).invert().multiply(c),u.copy(Oo).slerp(h,E),d.copy(Oo).slerp(h,x)};function Lt(Wt,it,yt,Ft,B,se){return se.copy(n.head.pos).applyQuaternion(B).add(n.neck2.pos),se.applyQuaternion(Ft).add(n.neck1.pos),se.applyQuaternion(yt).add(n.chest.pos),se.add(n.spine.pos),se.applyQuaternion(it).add(Wt),se}const Gt=function(it){r.set(it.bodyPitch,it.bodyYaw,it.bodyRoll,"YXZ"),o.setFromEuler(r),e.hips.quaternion.copy(o),e.hips.position.copy(n.hips.pos).add(it.bodyShift),a.setFromAxisAngle(Qn,it.chestPitch),e.chest.quaternion.copy(a),l.copy(o).multiply(a),e.sternum.position.copy(n.sternum.pos).addScaledVector(ie,it.breath*.011),e.sternum.scale.set(1+it.breath*.028,1,1+it.breath*.012),r.set(-it.headPitch,it.headYaw,it.headRoll,"YXZ"),c.setFromEuler(r),Ct(),Lt(e.hips.position,o,a,u,d,M),Lt(n.hips.pos,Oo,Oo,u,d,T),p.copy(T).sub(M).multiplyScalar(It(it.headStabil,0,1)).add(it.headShift);const yt=It(it.reachWeight,0,1);if(yt>0){Q.copy(M).add(p),m.copy(it.reachTarget).sub(Q);const P=m.length()||1e-6,S=It(P-C,-.24,L);Q.addScaledVector(m,S/P);const G=It(it.reachPin,0,1);G>0&&Q.lerp(m.copy(it.reachDir).multiplyScalar(-C).add(it.reachTarget),G),m.copy(it.reachTarget).sub(Q).normalize();const ut=It(Math.atan2(m.x,m.z),-2.2,2.2),rt=It(Math.asin(It(m.y,-1,1))-I,-1.1,1.25);r.set(-rt,ut,it.headRoll*(1-yt),"YXZ"),k.setFromEuler(r),G>0&&(X.crossVectors(cr,m).normalize(),ct.crossVectors(m,X),d.setFromRotationMatrix(Z.makeBasis(X,ct,m)),d.multiply(u.setFromAxisAngle(Tl,it.reachRoll)).multiply(u.setFromAxisAngle(Qn,I)),k.slerp(d,G)),c.slerp(k,yt),Ct(),Lt(e.hips.position,o,a,u,d,M),p.lerp(Q.sub(M),yt)}e.neck1.quaternion.copy(u),e.neck2.quaternion.copy(d),f.copy(u).multiply(d).invert().multiply(h),e.head.quaternion.copy(f),F.copy(M).add(p),f.copy(l).invert(),e.neck1.position.copy(n.neck1.pos).add(m.copy(p).multiplyScalar(.22).applyQuaternion(f)),f.copy(l).multiply(u).invert(),e.neck2.position.copy(n.neck2.pos).add(m.copy(p).multiplyScalar(.3).applyQuaternion(f)),f.copy(l).multiply(u).multiply(d).invert(),e.head.position.copy(n.head.pos).add(m.copy(p).multiplyScalar(.48).applyQuaternion(f)),ot.set(0,h.y,0,h.w),ot.lengthSq()<1e-6&&ot.set(0,0,0,1),ot.normalize(),e.throat.quaternion.copy(ot),p.copy(e.head.position).applyQuaternion(e.neck2.quaternion).add(e.neck2.position).applyQuaternion(e.neck1.quaternion).add(e.neck1.position),ft.copy(J.chin).applyQuaternion(h).add(p).sub(Rt.copy(J.rim).applyQuaternion(ot).add(J.pivot));const Ft=J.span*.5-ft.length(),B=.5*(Ft+Math.sqrt(Ft*Ft+1e-4));kt.copy(J.down).applyQuaternion(ot).multiplyScalar(B),e.throat.position.copy(n.throat.pos).add(kt),f.copy(ot).slerp(h,.5),e.gular.quaternion.copy(f),m.copy(J.mid).applyQuaternion(f);const se=It(tt*(J.span-ft.length()),-.006,.03);Bt.copy(J.out).applyQuaternion(f),e.gular.position.copy(p).add(J.pivot).add(kt).multiplyScalar(.5).add(m).addScaledVector(Bt,se),F.add(m.copy(N).applyQuaternion(c)),e.jaw.quaternion.copy(n.jaw.quat).multiply(u.setFromAxisAngle(Qn,It(it.jaw,0,1.1)*(i.bill.gape??.31)));const zt=It(it.tongueOut,0,1)*D;let Xt=0;for(let P=0;P<3;P++){const S=V(O[P]+zt,Y[P])-at[P],G=e[U[P]];G.quaternion.setFromAxisAngle(Qn,S-Xt+it.tongueCurl*q[P]),P===0?G.position.copy(n[U[0]].pos).add(Y[0]).sub(H[0]):G.position.copy(Y[P]).sub(Y[P-1]).sub(H[P]).add(H[P-1]).add(n[U[P]].pos).applyQuaternion(u.setFromAxisAngle(Qn,-Xt)),Xt=S}const pt=Math.max(it.carryAt,0);b.set(0,-i.bill.droop*Math.min(pt,1)*Math.min(pt,1)-(pt<1?.003*(1-pt):0),pt*i.bill.length).applyQuaternion(_.worldQuat).add(_.worldPos).sub(n.head.worldPos),b.applyQuaternion(c).add(F).sub(m.copy(N).applyQuaternion(c));for(const P of sn){const S=s.eyes[P],G=et(bl.upperOpen,0,$(0,1,it.lidUpper)),ut=et(bl.lowerOpen,0,$(0,1,it.lidLower));S.lidUpper.quaternion.copy(n[S.lidUpper.name].quat).multiply(u.setFromAxisAngle(Qn,-G)),S.lidLower.quaternion.copy(n[S.lidLower.name].quat).multiply(u.setFromAxisAngle(Qn,-ut));const rt=-Rn(P)*bl.nictOpen*(1-It(it.nict,0,1));S.nict.quaternion.copy(n[S.nict.name].quat).multiply(u.setFromAxisAngle(cr,rt)),S.nict.scale.setScalar(it.nict>.002?1:.001),S.lidUpper.scale.setScalar(et(.93,1,$(0,.5,it.lidUpper))),S.lidLower.scale.setScalar(et(.93,1,$(0,.5,it.lidLower)))}r.set(-it.tailPitch,it.tailYaw,it.tailRoll,"YXZ"),e.tail.quaternion.copy(n.tail.quat).multiply(u.setFromEuler(r));const de=et(i.tail.restFan,i.tail.maxFan,It(it.tailFan,-.5,1))*At;for(const P of s.rectrices)P.bone.quaternion.setFromAxisAngle(cr,P.k*de);for(const P of sn){const S=s.wings[P],G=it.wing[P];let ut=$(0,1,G.spread);if(S.stage.length>0){const mt=It(G.flex,0,1);for(let gt=0;gt<S.bones.length;gt++){const st=S.stage[gt];S.bones[gt].quaternion.copy(S.folded[gt]).slerp(S.spread[gt],$(st.from,st.to,G.spread)*(1-mt*st.flex))}ut=$(S.stage[0].from,S.stage[0].to,G.spread)}else for(let mt=0;mt<S.bones.length;mt++)S.bones[mt].quaternion.copy(S.folded[mt]).slerp(S.spread[mt],ut);ut>0&&(G.sweep!==0||G.raise!==0)&&(u.setFromAxisAngle(cr,-Rn(P)*G.sweep*ut),d.setFromAxisAngle(Tl,Rn(P)*G.raise*ut),S.bones[0].quaternion.premultiply(d).premultiply(u));const rt=1-ut;if(rt>0){const mt=A[P],gt=S.bones[1];gt.quaternion.multiply(u.setFromAxisAngle(mt.out,-G.lift*.3*rt)),gt.quaternion.multiply(u.setFromAxisAngle(mt.fan,-Rn(P)*G.droop*rt))}}u.setFromAxisAngle(Tl,it.feetSlope);const Vt=(1-It(it.grip,0,1))*.6,Zt=It(it.legTuck,0,1);for(const{s:P,foot:S,footRest:G,toes:ut,tarsus:rt}of wt){S.position.copy(G.pos).applyQuaternion(u),g.copy(u),Zt>0&&(S.position.lerp(p.copy(s.hipSocket[P]).add(v).applyQuaternion(o).add(e.hips.position),Zt),g.slerp(o,Zt)),S.quaternion.copy(g),S.scale.setScalar(it.feetScale);for(let gt=0;gt<4;gt++)ut[gt].quaternion.setFromAxisAngle(Qn,gt===3||w&&gt===0?Vt:-Vt);m.copy(s.ankle[P]).sub(G.worldPos).multiplyScalar(it.feetScale).applyQuaternion(g).add(S.position),p.copy(s.hipSocket[P]).applyQuaternion(o).add(e.hips.position).sub(m);const mt=p.length();p.applyQuaternion(d.copy(g).invert()),ss(p,Qn,rt.quaternion),rt.scale.set(1,1,mt/s.tarsusLength/it.feetScale)}t.uFluff.value=it.fluff,t.uLift.value.set(it.lift),t.uLift.value[0]+=it.crest*.9,t.uLift.value[1]+=it.crest*.7,t.uGorget.value=it.gorget,t.uCrest.value=it.crest,t.uWingSpread.value.set(it.wing.L.spread,it.wing.R.spread),t.uWingOut.value.set(it.wing.L.out,it.wing.L.twist,it.wing.R.out,it.wing.R.twist),t.uWingLift.value.set(it.wing.L.lift,it.wing.R.lift)};return Gt.tip=F,Gt.carry=b,Gt.billReach=C,Gt}class cS{constructor(t,e=7){this.species=t,this.rng=Ki(e)}species;t=0;dt=0;rng;arousal=.3;baseline=.32;attention=null;attentionSpeed=0;freeze=0;saccading=!1;food=[];focus=null;focusId=0;eating=!1;gazeLock=!1;pinGaze=null;quiet=!1;handlers={};lastDir=new y;dir=new y;hasLast=!1;on(t,e){(this.handlers[t]??=[]).push(e)}emit(t,e){for(const n of this.handlers[t]??[])n(e)}excite(t){this.arousal=It(this.arousal+t,0,1)}step(t,e){if(this.dt=t,this.t+=t,this.freeze=Math.max(0,this.freeze-t),this.attention&&t>0){if(this.dir.copy(this.attention).sub(e).normalize(),this.hasLast){const n=this.dir.angleTo(this.lastDir)/t;this.attentionSpeed=Cn(this.attentionSpeed,Math.min(n,6),6,t)}this.lastDir.copy(this.dir),this.hasLast=!0}else this.hasLast=!1,this.attentionSpeed=Cn(this.attentionSpeed,0,4,t);this.excite(Math.max(this.attentionSpeed-.25,0)*.5*t),this.arousal=Cn(this.arousal,this.baseline,.14,t)}}class hS{name="posture";a=.3;yaw=new Ti(3.2,.5);follow=0;pitch=new Ti(5,.45);headYaw=0;constructor(t){t.on("saccade",e=>{this.yaw.kick(-e.dyaw*.5),this.pitch.kick(-e.dpitch*.4)}),t.on("fixate",e=>this.headYaw=e.yaw)}update(t,e){this.a=Cn(this.a,t.arousal,2.5,t.dt);const n=this.a;e.fluff+=et(.2,-.06,n),e.headShift.y+=et(-.032,.03,n),e.headShift.z+=et(-.014,.012,n),e.bodyPitch+=et(-.04,.05,n),e.bodyShift.y+=et(-.012,.008,n),e.crest+=et(0,.22,n),e.wing.L.droop+=et(.05,0,n),e.wing.R.droop+=et(.05,0,n);const i=t.t;e.bodyRoll+=Ge(i*.17,1)*.022,e.bodyShift.x+=Ge(i*.13,2)*.006,e.bodyPitch+=Ge(i*.21,3)*.012,this.follow=Cn(this.follow,this.headYaw*.14,.9,t.dt),e.bodyYaw+=this.follow+this.yaw.step(0,t.dt)+Ge(i*.11,4)*.025,e.chestPitch+=this.pitch.step(0,t.dt)}}class uS{name="breath";phase=0;update(t,e){const[n,i]=t.species.behaviour.breathHz;this.phase+=t.dt*et(n,i,t.arousal)*Math.PI*2;const r=Math.sin(this.phase+.45*Math.sin(this.phase))*et(.75,1.1,t.arousal);e.breath+=r,e.addLift(.42,.2,r*.014),e.tailPitch+=r*.011,e.bodyShift.y+=r*.0012,e.wing.L.lift+=r*.005,e.wing.R.lift+=r*.005}}const dS=s=>s*s*s*(10+s*(-15+6*s));class fS{name="gaze";maxYaw=70*At;interest=.5;billOn=.46;pursuit=0;minPitch=-45*At;minPitchFood=-50*At;cur;from;to;moving=!1;t0=0;dur=.06;amp=0;nextAt=.8;settle=10;burst=0;attYaw=0;attPitch=0;seenYaw=0;seenPitch=0;lastStart=-10;focusSeen=-1;focusAt=0;head=new y(0,.9,.05);d=new y;constructor(t){const e=t.species.behaviour.billUp*At;this.cur={yaw:.9,pitch:e,roll:0},this.from={...this.cur},this.to={...this.cur},t.on("startle",()=>{this.nextAt=t.t+.04+t.rng()*.04,this.burst=-1})}moveOn(t){this.burst=0,this.nextAt=Math.min(this.nextAt,t.t+_t(t.rng,.12,.4))}lookAtAttention(t){const e=t.focus??t.attention;return e?(this.d.copy(e).sub(this.head),this.attYaw=Math.atan2(this.d.x,this.d.z),this.attPitch=Math.atan2(this.d.y,Math.hypot(this.d.x,this.d.z)),!0):!1}pick(t,e=!1){const n=t.rng,i=t.species.behaviour.billUp*At,r=this.lookAtAttention(t),o=this.cur;let a;if(!e&&this.burst>0)this.burst--,a={yaw:o.yaw+_t(n,-1,1)*13*At,pitch:o.pitch+_t(n,-1,1)*8*At,roll:o.roll*.5+_t(n,-1,1)*9*At};else if(r&&(e||n()<this.interest+.4*t.arousal)){if(this.seenYaw=this.attYaw,this.seenPitch=this.attPitch,(e?0:n())<this.billOn)a={yaw:this.attYaw+_t(n,-5,5)*At,pitch:this.attPitch*.8+i+_t(n,-4,14)*At,roll:n()<.25?_t(n,-18,18)*At:_t(n,-5,5)*At};else{const h=_t(n,60,84)*At,u=Math.abs(o.yaw-(this.attYaw+h))<Math.abs(o.yaw-(this.attYaw-h))?1:-1;let d=n()<.6?u:-u;Math.abs(this.attYaw+d*h)>this.maxYaw&&(d=-d),a={yaw:this.attYaw+d*h,pitch:i*.6+_t(n,-8,12)*At,roll:d*(this.attPitch*.5+_t(n,-4,10)*At)}}n()<.35&&(this.burst=1+Math.floor(n()*2))}else{let c=It(_t(n,-1,1)*105*At,o.yaw-140*At,o.yaw+140*At);Math.abs(c-o.yaw)<22*At&&(c+=Math.sign(c-o.yaw||1)*30*At),a={yaw:c,pitch:i*.5+_t(n,-14,24)*At,roll:_t(n,-9,9)*At},n()<.3&&(this.burst=1+Math.floor(n()*2))}a.yaw=It(a.yaw,-this.maxYaw,this.maxYaw),a.pitch=It(a.pitch,this.minPitch,52*At);const l=t.species.behaviour.parrot?1.7:1;return a.roll=It(a.roll*l,-26*At*l,26*At*l),a}begin(t,e){const[n,i]=t.species.behaviour.saccade;this.from={...this.cur},this.to=e;const r=e.yaw-this.from.yaw,o=e.pitch-this.from.pitch,a=e.roll-this.from.roll;this.amp=Math.hypot(r*Math.cos((e.pitch+this.from.pitch)/2),o,a*.5),this.dur=Math.min(n+i*this.amp/At,.095),this.t0=t.t,this.moving=!0,this.lastStart=t.t,t.saccading=!0,t.emit("saccade",{amp:this.amp,dur:this.dur,dyaw:r,dpitch:o})}update(t,e){const n=t.species.behaviour;if(t.pinGaze){e.headYaw+=t.pinGaze[0]*At,e.headPitch+=t.pinGaze[1]*At,e.headRoll+=t.pinGaze[2]*At;return}if(t.focus&&!this.moving&&!t.gazeLock&&this.lookAtAttention(t)){const a=Math.hypot((this.attYaw-this.cur.yaw)*Math.cos(this.attPitch),this.attPitch-this.cur.pitch),l=this.focusSeen!==t.focusId;l&&!this.focusAt&&(this.focusAt=t.t+_t(t.rng,.09,.24)),(l&&t.t>=this.focusAt||!l&&a>6*At&&t.t-this.lastStart>.16&&t.rng()<t.dt*9)&&(this.focusSeen=t.focusId,this.focusAt=0,this.burst=0,this.begin(t,{yaw:It(this.attYaw,-this.maxYaw,this.maxYaw),pitch:It(this.attPitch+(l?_t(t.rng,-3,3)*At:0),this.minPitchFood,65*At),roll:l?_t(t.rng,-8,8)*At:this.cur.roll*.6}))}else if(!this.moving&&!t.quiet&&!t.focus&&!t.gazeLock)if(t.t>=this.nextAt&&(t.freeze<=0||this.burst<0)){const a=this.burst<0;a&&(this.burst=0),this.begin(t,this.pick(t,a))}else t.freeze<=0&&t.t-this.lastStart>.22&&this.lookAtAttention(t)&&Math.hypot((this.attYaw-this.seenYaw)*Math.cos(this.attPitch),this.attPitch-this.seenPitch)>13*At&&t.rng()<t.dt*et(3,9,t.arousal)&&(this.burst=0,this.begin(t,this.pick(t,t.rng()<.5)),this.seenYaw=this.attYaw,this.seenPitch=this.attPitch);if(!this.moving&&this.pursuit>0&&!t.focus&&!t.gazeLock&&t.freeze<=0&&this.lookAtAttention(t)){const a=n.billUp*At,l=It(this.attYaw,-this.maxYaw,this.maxYaw),c=It(this.attPitch*.8+a*.6,this.minPitch,52*At),h=Math.hypot((l-this.cur.yaw)*Math.cos(c),c-this.cur.pitch),u=h>14*At&&t.t-this.lastStart>.3&&t.rng()<t.dt*5;if(h<28*At&&!u){const d=1-Math.exp(-t.dt*3.2*this.pursuit*(.75+.35*Ge(t.t*3.1,31)));this.cur={yaw:this.cur.yaw+(l-this.cur.yaw)*d,pitch:this.cur.pitch+(c-this.cur.pitch)*d,roll:this.cur.roll*(1-d*.5)},this.from={...this.cur},this.to={...this.cur},this.seenYaw=this.attYaw,this.seenPitch=this.attPitch,h>3*At&&(this.nextAt=Math.max(this.nextAt,t.t+.25))}else(u||t.t-this.lastStart>.16&&t.rng()<t.dt*10)&&(this.burst=0,this.begin(t,this.pick(t,!0)))}let i,r,o;if(this.moving){const a=(t.t-this.t0)/this.dur;if(a>=1){this.moving=!1,t.saccading=!1,this.cur={...this.to},this.settle=0;const h=Math.abs(this.cur.yaw-this.attYaw)<15*At,[u,d]=[et(n.holdCalm[0],n.holdAlert[0],t.arousal),et(n.holdCalm[1],n.holdAlert[1],t.arousal)];this.nextAt=t.t+(this.burst<0?.05:this.burst>0?_t(t.rng,.14,.42):FM(t.rng,u,d,1.8)*(h?1.15:1)),t.emit("fixate",{yaw:this.cur.yaw,pitch:this.cur.pitch})}const l=dS(It(a,0,1)),c=Math.sin(Math.PI*It(a,0,1));i=et(this.from.yaw,this.to.yaw,l),r=et(this.from.pitch,this.to.pitch,l)-c*this.amp*.09,o=et(this.from.roll,this.to.roll,l),e.headShift.y-=c*Math.min(this.amp,1.6)*.012}else{this.settle+=t.dt;const a=Math.exp(-this.settle/.032)*Math.cos(this.settle*24*Math.PI*2)*.04;i=this.cur.yaw+(this.to.yaw-this.from.yaw)*a,r=this.cur.pitch+(this.to.pitch-this.from.pitch)*a,o=this.cur.roll+(this.to.roll-this.from.roll)*a}i+=Ge(t.t*11,11)*.0028+Ge(t.t*.6,12)*.008,r+=Ge(t.t*12,13)*.0028+Ge(t.t*.5,14)*.007,o+=Ge(t.t*.7,15)*.008,e.headYaw+=i,e.headPitch+=r,e.headRoll+=o,e.headShift.x+=Math.sin(i)*.014,e.headShift.z+=(Math.cos(i)-1)*.01-Math.max(r,0)*.018}}class pS{name="blink";t0=-10;full=!1;nextAt=1.5;constructor(t){t.on("saccade",e=>{e.amp>.6&&t.rng()<.45&&t.t-this.t0>.5&&this.start(t,!1)}),t.on("startle",()=>{this.nextAt=t.t+1.2+t.rng()})}start(t,e){this.t0=t.t,this.full=e;const[n,i]=t.species.behaviour.blinkEvery;this.nextAt=t.t+_t(t.rng,n,i)*et(1.3,.8,t.arousal)}update(t,e){!t.quiet&&t.t>=this.nextAt&&t.freeze<=0&&this.start(t,t.rng()<et(.3,.08,t.arousal));const n=this.full?1.7:1,i=(t.t-this.t0)/n,r=i<0?0:i<.045?$(0,.045,i):i<.07?1:1-$(.07,.165,i);e.nict+=r,e.lidLower+=r*(this.full?1:.3),e.lidUpper+=r*(this.full?.75:.08);const o=$(.3,.05,t.arousal);e.lidUpper+=o*.22,e.lidLower+=o*.18}}class mS{name="ruffle";kind="puff";t0=-100;nextAt;amp=.6;last=-1e9;constructor(t){const[e,n]=t.species.behaviour.ruffleEvery;this.nextAt=_t(t.rng,e*.5,n*.6),t.on("startle",()=>{this.t0=-100,this.nextAt=Math.max(t.t+_t(t.rng,2.8,5),this.last+t.species.behaviour.ruffleEvery[0])})}trigger(t,e,n){const i=t.rng();this.kind=e??(i<.45?"puff":i<.7?"shake":"throat"),this.t0=t.t,this.last=t.t,this.amp=n??_t(t.rng,.45,.75);const[r,o]=t.species.behaviour.ruffleEvery;this.nextAt=t.t+_t(t.rng,r,o),t.emit("ruffle",{kind:this.kind})}update(t,e){!t.quiet&&t.t>=this.nextAt&&t.freeze<=0&&!t.saccading&&(t.arousal<.7?this.trigger(t):this.nextAt=t.t+1);const n=t.t-this.t0;if(n<0||n>3)return;const i=this.amp;if(this.kind==="throat"){const l=$(0,.12,n)*(1-$(.7,1.25,n));e.gorget+=l*.42*i,e.crest+=l*.38*i,e.addLift(.12,.14,l*.25*i),e.headShift.y+=l*.01;return}for(let l=0;l<8;l++){const c=n-l/7*.2;if(c<=0)continue;const h=$(0,.13,c),u=1-$(.62,1.5,c),d=c>.62?.14*Math.sin((c-.62)*13)*Math.exp(-(c-.62)*3.5):0;e.lift[l]+=i*(h*u+d)*et(.75,1,l/7)}e.crest+=i*.25*$(0,.1,n)*(1-$(.5,1.1,n));const r=$(.14,.24,n)*(1-$(.55,.85,n)),o=(n-.14)*14*Math.PI*2,a=Math.sin(o)*r;e.bodyRoll+=a*.05*i,e.bodyYaw+=Math.cos(o)*r*.035*i,e.tailYaw+=Math.sin(o-1.2)*r*.16*i,e.tailFan+=r*.55*i+$(0,.2,n)*(1-$(.6,1.4,n))*.25*i;for(const l of["L","R"])e.wing[l].lift+=(r*.11+Math.abs(a)*.05)*i+$(0,.2,n)*(1-$(.7,1.5,n))*.06*i,e.wing[l].droop+=r*.07*i;if(e.bodyShift.y+=r*.008,this.kind==="shake"){const l=$(.1,.2,n)*(1-$(.5,.75,n));e.headRoll+=Math.sin(o*1.15+.8)*l*.3*i,e.headYaw+=Math.cos(o*1.15)*l*.16*i,e.nict+=l,e.lidLower+=l*.6,e.headStabil-=l*.5}}}class gS{name="tail";pitch=new Ti(6.5,.28);fan=new Ti(4.5,.5);yaw=new Ti(5,.4);nextAt;pumps=0;pumpAt=0;constructor(t){const[e,n]=t.species.behaviour.tailEvery;this.nextAt=_t(t.rng,e*.4,n*.5),t.on("startle",i=>{this.pitch.kick(-5*i.strength),this.fan.kick(14*i.strength)}),t.on("saccade",i=>{i.amp>.9&&this.yaw.kick(-i.dyaw*.5)})}flick(t,e=1){this.pitch.kick(-_t(t.rng,3,5.5)*e),this.fan.kick(_t(t.rng,5,11)*e),this.yaw.kick(_t(t.rng,-1.5,1.5)*e)}update(t,e){if(!t.quiet&&t.t>=this.nextAt&&t.freeze<=0){const[n,i]=t.species.behaviour.tailEvery;this.nextAt=t.t+_t(t.rng,n,i),this.pumps=t.rng()<.4?1+Math.floor(t.rng()*2):0,this.pumpAt=t.t+.16,this.flick(t)}this.pumps>0&&t.t>=this.pumpAt&&(this.pumps--,this.pumpAt=t.t+_t(t.rng,.13,.2),this.flick(t,.7)),e.tailPitch+=this.pitch.step(0,t.dt),e.tailFan+=Math.max(this.fan.step(0,t.dt),-.3),e.tailYaw+=this.yaw.step(0,t.dt)}}class va{name="wings";t0=-100;nextAt;lead=1;amp=1;stretchT0=-100;stretchSide="L";stretches=0;nextStretch;constructor(t){const[e,n]=t.species.behaviour.wingEvery;this.nextAt=_t(t.rng,e*.5,n*.6),this.nextStretch=_t(t.rng,20,45)}static STRETCH=3.2;static STRETCH_UP=4;stretch(t,e=this.stretches%2===0?"up":t.rng()<.5?"L":"R"){this.stretches++,this.stretchT0=t.t,this.stretchSide=e,this.nextStretch=t.t+_t(t.rng,45,110)}get stretching(){return this.stretchT0>-50}shuffle(t){this.t0=t.t,this.lead=t.rng()<.5?1:-1,this.amp=_t(t.rng,.7,1.2);const[e,n]=t.species.behaviour.wingEvery;this.nextAt=t.t+_t(t.rng,e,n)}update(t,e){t.species.behaviour.parrot&&!t.quiet&&t.t>=this.nextStretch&&t.freeze<=0&&t.arousal<.5&&!t.eating&&!t.focus&&this.stretch(t);const n=t.t-this.stretchT0,i=this.stretchSide==="up"?va.STRETCH_UP:va.STRETCH;if(n>=0&&n<=i){const a=$(0,.9,n)*(1-$(i-1,i,n));if(this.stretchSide==="up"){const l=$(.15,1.7,n)*(1-$(i-1.6,i-.15,n)),c=$(.9,1.9,n)*(1-$(i-2,i-1.1,n)),h=$(1.5,1.9,n)*(1-$(i-2,i-1.6,n)),u=Math.sin(n*9*Math.PI*2)*.022*h;for(const d of["L","R"]){const f=e.wing[d];f.spread+=l,f.flex+=.95-.5*c,f.raise+=.58+.22*c+u*(d==="L"?1:-.8),f.sweep-=.55}e.bodyPitch+=a*.26,e.bodyShift.z-=a*.035,e.bodyShift.y-=a*.012,e.tailFan+=a*.5,e.addLift(.5,.3,a*.07)}else{const l=this.stretchSide==="L"?1:-1,c=e.wing[this.stretchSide];c.spread+=a*.8,c.sweep-=a*.5,c.raise-=a*.35,e.tailFan+=a*.6,e.tailYaw+=l*a*.25,e.bodyRoll-=l*a*.06,e.addLift(.5,.3,a*.08)}}else n>i&&(this.stretchT0=-100);!t.quiet&&t.t>=this.nextAt&&t.freeze<=0&&!this.stretching&&this.shuffle(t);const r=t.t-this.t0;if(r<0||r>1.2)return;for(const a of["L","R"]){const l=r-((a==="L"?1:-1)*this.lead>0?0:.07);if(l<=0)continue;const c=$(0,.07,l)*(1-$(.22,.6,l)),h=Math.sin(l*12*Math.PI*2)*$(.05,.1,l)*(1-$(.2,.42,l));e.wing[a].lift+=(c*.2+h*.06)*this.amp,e.wing[a].droop+=c*.1*this.amp}const o=$(0,.08,r)*(1-$(.15,.5,r));e.bodyShift.y+=o*.006,e.addLift(.5,.25,o*.12)}}class _S{constructor(t){this.mind=t}mind;name="startle";crouch=new Ti(4.2,.42);t0=-100;strength=0;fire(t){const e=this.mind;this.strength=t,this.t0=e.t,e.arousal=Math.max(e.arousal,.6+.4*t),e.freeze=.45+e.rng()*.55,this.crouch.kick(-.9*t),e.emit("startle",{strength:t})}update(t,e){const n=this.crouch.step(0,t.dt);e.bodyShift.y+=n,e.bodyPitch+=-n*2.2,e.headShift.y+=n*.6;const i=t.t-this.t0;if(i<0||i>8)return;const r=this.strength,o=Math.exp(-i/1.6)*Math.min(i/.05,1);e.fluff-=.13*o*r,e.headShift.y+=.02*o*r;const a=Math.exp(-i/.09)*Math.min(i/.03,1);e.wing.L.lift+=a*.42*r,e.wing.R.lift+=a*.42*r,e.lidUpper-=.2*o,e.lidLower-=.2*o}}const El=s=>s*s*s*(10+s*(-15+6*s)),ko=.06;class vS{constructor(t,e,n,i,r,o=null){this.mind=t,this.solver=e,this.headRest=n,this.pick=i,this.swallowed=r,this.hop=o,t.on("startle",()=>{this.carried>=0&&this.swallowed(this.carried),this.carried=-1,this.release(this.mind,"idle"),this.readyAt=this.mind.t+1.5})}mind;solver;headRest;pick;swallowed;hop;name="forage";reachOut=.3;reachIn=.2;catchRadius=.05;state="idle";id=-1;t0=0;dur=.15;decideAt=0;watchUntil=0;readyAt=0;retried=!1;ignore=new Map;target=new y;w=0;wFrom=0;lean=0;yaw=0;rel=new y;focus=new y;licks=3;carried=-1;hopAt=0;moved=new y;seed(t){return t.food.find(e=>e.id===this.id)}slideFor(t){const e=this.rel.copy(t).sub(this.headRest),n=e.length(),i=Math.atan2(e.x,e.z),r=Math.asin(It(e.y/Math.max(n,1e-6),-1,1));if(Math.abs(i)>2||r<-.95||r>1.3||t.y<-.12)return null;const o=n-this.solver.billReach;return o>this.reachOut||o<-this.reachIn?null:o}inView(t){const e=this.rel.copy(t).sub(this.headRest);return Math.abs(Math.atan2(e.x,e.z))<2.2&&e.length()<2.2&&t.y>-.9}release(t,e){this.state=e,this.t0=t.t,this.wFrom=this.w,e==="idle"&&(t.focus=null,t.gazeLock=!1,this.id=-1)}begin(t,e,n){this.state=e,this.t0=t.t,this.dur=n,this.wFrom=this.w}update(t,e){const n=t.t,i=It((n-this.t0)/this.dur,0,1);let r=this.seed(t);switch(t.eating=this.state!=="idle"&&this.state!=="watch",this.state){case"idle":{if(this.w=Cn(this.w,0,22,t.dt),n<this.readyAt)break;let o=null,a=1/0;for(const l of t.food){if(!this.inView(l.pos)||(this.ignore.get(l.id)??0)>n&&this.slideFor(l.pos)===null||l.vel.lengthSq()<ko*ko&&this.slideFor(l.pos)===null)continue;const c=l.pos.distanceTo(this.headRest)-(this.slideFor(l.pos)!==null?1:0);c<a&&(a=c,o=l)}o&&(this.id=o.id,this.state="watch",this.decideAt=0,this.watchUntil=n+_t(t.rng,.7,1.5),t.focus=this.focus.copy(o.pos),t.focusId++,t.excite(.25));break}case"watch":{if(this.w=Cn(this.w,0,22,t.dt),!r||!this.inView(r.pos)){this.release(t,"idle");break}if(t.focus=this.focus.copy(r.pos),this.hop?.busy)break;if(this.slideFor(r.pos)===null){if(this.decideAt=0,this.hop&&t.freeze<=0&&(this.hopAt||(this.hopAt=n+_t(t.rng,.45,1.1)),n>=this.hopAt)){const o=r.pos,a=this.hop.spotFor(l=>this.slideFor(this.moved.copy(o).sub(l))!==null);if(this.hopAt=n+_t(t.rng,.5,.9),a!==null&&this.hop.go(t,a)){this.watchUntil=Math.max(this.watchUntil,n+3);break}}r.vel.lengthSq()<ko*ko&&(this.watchUntil=Math.min(this.watchUntil,n+.25)),n>this.watchUntil&&(this.ignore.set(r.id,n+_t(t.rng,25,45)),this.release(t,"idle"),this.readyAt=n+_t(t.rng,.3,1));break}this.hopAt=0,this.decideAt||(this.decideAt=n+_t(t.rng,.35,1.1)),n>=this.decideAt&&!t.saccading&&t.freeze<=0&&(t.gazeLock=!0,this.retried=!1,this.begin(t,"windup",_t(t.rng,.09,.13)),t.emit("strike",{id:r.id}));break}case"windup":{if(!r){this.release(t,"idle");break}const o=Math.sin(i*Math.PI*.5);if(this.rel.copy(r.pos).sub(this.headRest).normalize(),e.headShift.addScaledVector(this.rel,-.03*o),e.bodyShift.y-=.006*o,i>=1){const a=this.slideFor(r.pos)??0;this.lean=a,this.yaw=Math.atan2(r.pos.x-this.headRest.x,r.pos.z-this.headRest.z),this.begin(t,"strike",It(.13+Math.abs(a)*.2,.12,.2))}break}case"strike":{if(!r){this.begin(t,"retract",.2);break}this.target.copy(r.pos).addScaledVector(r.vel,(1-i)*this.dur),this.w=this.wFrom+(1-this.wFrom)*(1-Math.pow(1-i,3)),e.jaw+=$(.2,.7,i)*(1-$(.92,1,i)*.88)*.95,i>=1&&(this.solver.tip.distanceTo(r.pos)<this.catchRadius?(this.pick(r.id),this.carried=r.id,t.excite(.1),this.begin(t,"hold",_t(t.rng,.06,.1))):!this.retried&&this.slideFor(r.pos)!==null?(this.retried=!0,this.begin(t,"strike",.1)):(this.ignore.set(r.id,n+_t(t.rng,3,5)),this.begin(t,"retract",.22)));break}case"hold":if(this.w=1,e.jaw+=.1,i>=1){t.focus=null;const o=t.species.behaviour.parrot===!0;this.licks=o?4+Math.floor(t.rng()*3):2,this.begin(t,"eat",o?this.licks*.26+.1:this.licks*.13+.04)}break;case"retract":this.w=this.wFrom*(1-El(i)),i>=1&&(this.release(t,"idle"),this.readyAt=n+_t(t.rng,.3,.9));break;case"eat":{if(t.species.behaviour.parrot){this.w=this.wFrom*(1-El(It((n-this.t0)/.35,0,1)));const d=Math.sin(Math.PI*(i*this.licks%1));e.carryAt=et(.96,.6,$(0,1,i)),e.jaw+=.08+.3*d,e.tongueOut+=.08*d,e.headPitch-=.05*$(0,.25,i)*(1-$(.85,1,i)),i>=1&&this.begin(t,"swallow",_t(t.rng,.34,.46));break}this.w=this.wFrom*(1-El(It((n-this.t0)/.2,0,1)));const o=It((n-this.t0)/(this.dur-.04)*this.licks,0,this.licks),a=Math.min(Math.floor(o),this.licks-1),l=o>=this.licks?1:o-a,c=1-a/this.licks,h=1-(a+1)/this.licks,u=Math.sin(Math.PI*$(0,.55,l));e.tongueOut+=It((c-.72)/.65*u+.04*u,0,1),e.carryAt=et(c,h+.04,$(.35,1,l)),e.jaw+=.12+.3*Math.sin(Math.PI*$(0,.7,l))-.08*$(.75,1,l),e.headPitch+=.03*Math.sin(Math.PI*l),i>=1&&this.begin(t,"swallow",_t(t.rng,.36,.44));break}case"swallow":{this.w=0;const o=t.species.behaviour.parrot===!0;e.carryAt=o?et(.6,.08,$(0,.4,i)):.04;const a=Math.sin(Math.PI*$(0,.55,i))*(o?.07:.26);e.headPitch+=a,e.headShift.y+=a*.03,e.jaw+=Math.sin(Math.PI*$(.1,.5,i))*(o?.2:.45);const l=Math.sin(Math.PI*$(.35,.95,i));e.gorget+=l*.16,e.addLift(.2,.12,l*.12),i>.18&&this.carried>=0&&(this.swallowed(this.carried),t.emit("ate",{id:this.carried}),this.carried=-1),i>=1&&(this.release(t,"idle"),this.readyAt=n+_t(t.rng,.4,1.3));break}}this.w>.001&&(e.reachTarget.copy(this.target),e.reachWeight=this.w,e.bodyPitch+=this.w*It(this.lean*.75,-.16,.24),e.bodyYaw+=this.w*this.yaw*.14,e.bodyShift.y-=this.w*.008,e.headStabil*=1-this.w)}}class xS{name="mouth";lickEvery=[14,36];singEvery=[30,80];blocked=()=>!1;flicks=[];nextLick;singFrom=-10;singFor=0;bursts=[];nextSing;pump=0;parrot;constructor(t){this.parrot=t.species.behaviour.parrot===!0,this.nextLick=_t(t.rng,5,14),this.nextSing=_t(t.rng,14,34),t.on("ate",()=>{t.rng()<.7&&(this.nextLick=t.t+_t(t.rng,.25,.6))}),t.on("startle",()=>{this.singFor=0,this.flicks.length=0,this.nextLick=t.t+_t(t.rng,8,16),this.nextSing=Math.max(this.nextSing,t.t+_t(t.rng,12,30))})}lick(t,e=_t(t.rng,.56,.68),n=t.rng()<.45?1:t.rng()<.6?2:3){this.flicks.length=0;let i=t.t;for(let r=0;r<n;r++)this.flicks.push({at:i,amp:r===0?e:e*_t(t.rng,.8,1.05)}),i+=_t(t.rng,.21,.3);this.nextLick=t.t+_t(t.rng,this.lickEvery[0],this.lickEvery[1])}sing(t,e=1.6){if(this.singFrom=t.t,this.bursts.length=0,this.parrot){let r=.1;const o=Math.max(2,Math.round(e*2.2));for(let l=0;l<o;l++){const c=_t(t.rng,2.6,3.4);this.bursts.push({at:r,notes:1,hz:c,amp:_t(t.rng,.7,.95)}),r+=1/c+_t(t.rng,.06,.2)}const a=this.bursts[this.bursts.length-1];this.singFor=a.at+1/a.hz+.3,this.nextSing=t.t+this.singFor+_t(t.rng,this.singEvery[0],this.singEvery[1]),this.flicks.length=0,this.nextLick=Math.max(this.nextLick,t.t+this.singFor+_t(t.rng,1.5,5)),t.excite(.25);return}let n=.06;for(;n<e-.2||this.bursts.length===0;){const r=3+Math.floor(t.rng()*3),o=_t(t.rng,13,16.5);this.bursts.push({at:n,notes:r,hz:o,amp:_t(t.rng,.26,.4)}),n+=r/o+(t.rng()<.25?_t(t.rng,.32,.5):_t(t.rng,.1,.22))}const i=this.bursts[this.bursts.length-1];this.singFor=i.at+i.notes/i.hz+.25,this.nextSing=t.t+this.singFor+_t(t.rng,this.singEvery[0],this.singEvery[1]),this.flicks.length=0,this.nextLick=Math.max(this.nextLick,t.t+this.singFor+_t(t.rng,1.5,5))}get singing(){return this.singFor>0}update(t,e){const n=!t.quiet&&!t.gazeLock&&!t.focus&&!t.eating&&t.freeze<=0&&!this.blocked();n&&t.t>=this.nextLick&&t.arousal<.6&&!this.singing&&this.lick(t),n&&t.t>=this.nextSing&&!this.singing&&(t.arousal<.42&&this.flicks.length===0?this.sing(t,_t(t.rng,1.1,2.4)):this.nextSing=t.t+_t(t.rng,4,9));let i=0;for(const h of this.flicks){const u=(t.t-h.at)/.19;u>=0&&u<=1&&(i=Math.max(i,h.amp*Math.sin(Math.PI*Math.pow($(0,1,u),.8))))}this.flicks.length&&t.t>this.flicks[this.flicks.length-1].at+.2&&(this.flicks.length=0),i>0&&this.parrot?(e.tongueOut+=Math.min(i,.7)*.2,e.jaw+=.14*$(0,.3,i)):i>0&&(e.tongueOut+=Math.min(i,.7),e.tongueCurl+=.16*$(.3,.6,i),e.jaw+=.02*$(0,.3,i));let r=0,o=0,a=0;const l=t.t-this.singFrom;if(this.singFor>0)if(l>this.singFor||this.blocked())this.singFor=0;else for(const h of this.bursts){const u=l-h.at,d=h.notes/h.hz;u<0||u>d||(r=$(0,.03,u)*(1-$(d-.03,d,u)),o=.5-.5*Math.cos(u*h.hz*Math.PI*2),a=h.amp)}this.pump=Cn(this.pump,r,r>this.pump?30:11,t.dt);const c=this.pump;if(!(c<.002&&r===0)){if(this.parrot){e.jaw+=r*a*(.2+.8*o),e.tongueOut+=r*o*.1,e.headPitch+=c*.12+r*o*.06,e.headShift.z+=c*.014,e.headShift.y+=c*.008,e.bodyPitch+=c*.05,e.addLift(.12,.12,c*.3),e.tailFan+=c*.35,e.breath-=c*.5;return}e.jaw+=r*a*(.1+.9*o),e.gorget+=c*.2+r*o*.05,e.addLift(.2,.07,c*.16),e.crest-=c*.14,e.addLift(0,.07,-c*.14),e.addLift(.4,.09,-c*.3),e.breath-=c*.7,e.headPitch+=c*.035+r*o*.012,e.headShift.y-=c*.004,e.headShift.z-=c*.003,e.tailPitch-=c*.03}}}const Bo=()=>({point:new y,up:new y(0,1,0),tangent:new y(1,0,0),radius:.0405});class yS{constructor(t,e){this.mind=t,this.ground=e,t.on("startle",n=>{if(this.hold||this.phase!=="stand"||t.eating||t.rng()>.55*n.strength)return;const i=_t(t.rng,.1,.2)*(t.rng()<.5?-1:1),r=this.clampX(this.x+i);Math.abs(r-this.x)>.06&&this.go(t,r,.05)})}mind;ground;name="hop";maxHop=.35;homeAfter=[14,30];home=0;hold=!1;x=0;phase="stand";t0=0;dur=.1;x0=0;x1=0;apex=.05;from=Bo();to=Bo();here=Bo();tmp=Bo();legs=new Ti(5.5,.4);lag=new y;anchor=new y;off=new y;slope=0;scale=1;placed=!1;homeAt=20;lastFood=0;get busy(){return this.phase!=="stand"}clampX(t){return It(t,this.ground.range[0],this.ground.range[1])}frame(t,e){return(this.ground.at?.(t,e)??null)||(e.point.set(t,this.ground.root.position.y,this.ground.root.position.z),e.up.set(0,1,0),e.tangent.set(1,0,0),e.radius=this.ground.restRadius),e}reseat(){this.placed=!1}spotFor(t){if(!this.ground.at)return null;const e=this.ground.range[1]-this.ground.range[0];for(let n=.1;n<=e+1e-6;n+=.05)for(const i of[1,-1]){const r=this.x+i*n;if(r<this.ground.range[0]||r>this.ground.range[1])continue;const o=this.ground.at(r,this.tmp);if(o&&t(this.off.copy(o.point).sub(this.here.point)))return this.x+i*Math.min(n,this.maxHop)}return null}place(t,e){return this.x=this.clampX(t),this.frame(this.x,this.here),this.slope=Math.atan2(this.here.tangent.y,this.here.tangent.x),this.scale=this.here.radius/this.ground.restRadius,e.copy(this.here.point),this.x}landed(){this.legs.kick(-1.1),this.follow()}follow(){this.anchor.copy(this.ground.root.position)}go(t,e,n=_t(t.rng,.07,.11)){if(this.hold||this.phase!=="stand"||(e=this.clampX(It(e,this.x-this.maxHop,this.x+this.maxHop)),Math.abs(e-this.x)<.03))return!1;this.x0=this.x,this.x1=e,this.frame(this.x0,this.from),this.frame(this.x1,this.to);const i=this.from.point.distanceTo(this.to.point);return this.apex=It(.035+i*.13,.04,.08),this.phase="crouch",this.t0=t.t,this.dur=n,t.excite(.15),!0}update(t,e){const n=this.ground.root;this.placed||(this.placed=!0,this.x=this.clampX(n.position.x),this.frame(this.x,this.here),n.position.copy(this.here.point),this.anchor.copy(n.position),this.slope=Math.atan2(this.here.tangent.y,this.here.tangent.x),this.scale=this.here.radius/this.ground.restRadius);const i=t.t,r=It((i-this.t0)/this.dur,0,1);let o=1;switch(t.food.length&&(this.lastFood=i),this.phase==="stand"&&!this.hold&&this.homeAfter[1]>0&&!t.quiet&&!t.eating&&t.freeze<=0&&Math.abs(this.x-this.home)>.12&&i-this.lastFood>4&&i>this.homeAt&&(this.go(t,this.home+(this.x-this.home)*.3),this.homeAt=i+_t(t.rng,this.homeAfter[0],this.homeAfter[1])),this.phase){case"crouch":{const l=Math.sin(r*Math.PI*.5);e.bodyShift.y-=.022*l,e.bodyPitch+=.07*l,e.wing.L.lift+=.1*l,e.wing.R.lift+=.1*l,r>=1&&(t.emit("perch",{x:this.x0,push:.45,on:!1,side:0}),this.phase="air",this.t0=i,this.dur=It(.12+this.from.point.distanceTo(this.to.point)*.38,.12,.25));break}case"air":{n.position.copy(this.from.point).lerp(this.to.point,r),n.position.y+=4*this.apex*r*(1-r),this.slope=et(Math.atan2(this.from.tangent.y,this.from.tangent.x),Math.atan2(this.to.tangent.y,this.to.tangent.x),r),this.scale=et(this.from.radius,this.to.radius,r)/this.ground.restRadius;const l=Math.sin(Math.PI*r);o=1-$(0,.2,r)*(1-$(.75,1,r)),e.bodyShift.y+=.014*(1-r)-.012*l+.008*$(.7,1,r),e.bodyPitch+=.07*(1-r)-.04*l;const c=Math.sign(this.x1-this.x0);e.bodyRoll+=-c*.07*l,e.wing.L.lift+=.1+.3*l,e.wing.R.lift+=.1+.3*l,e.wing.L.droop+=.12*l,e.wing.R.droop+=.12*l,e.tailFan+=.5*l,e.tailPitch+=.12*l,e.fluff-=.05*l,r>=1&&(this.x=this.x1,this.frame(this.x,this.here),n.position.copy(this.here.point),this.phase="land",this.t0=i,this.dur=.28,this.legs.kick(-.75),t.emit("perch",{x:this.x1,push:.55,on:!0,side:0}));break}case"land":{const l=1-$(0,1,r);e.wing.L.lift+=.1*l,e.wing.R.lift+=.1*l,e.tailFan+=.3*l,e.tailPitch-=.1*Math.sin(Math.PI*r)*.8,e.addLift(.55,.3,.14*Math.sin(Math.PI*$(0,.8,r))),r>=1&&(this.phase="stand");break}}const a=this.legs.step(0,t.dt);e.bodyShift.y+=a,e.bodyPitch+=-a*1.6,this.anchor.x=Cn(this.anchor.x,n.position.x,this.phase==="air"?9:16,t.dt),this.anchor.y=Cn(this.anchor.y,n.position.y,this.phase==="air"?9:16,t.dt),this.anchor.z=Cn(this.anchor.z,n.position.z,16,t.dt),this.lag.copy(this.anchor).sub(n.position).clampLength(0,.16),e.headShift.add(this.lag),e.feetSlope=this.slope,e.feetScale=this.scale,e.grip=o,e.bodyRoll+=this.slope*.12}}function MS(s){const t=s.species.wing,e=t.hand+t.primaryLen[1]*.92,n=Ki(s.species.seed+501),i=64,r=4,o=new Uint8Array(i*r*4);for(let u=0;u<i;u++){const d=.45+.55*Math.pow(n(),2.2)+(n()<.12?.6:0);for(let f=0;f<r;f++)o.set([255,Math.min(255,d*200),255,255],(f*i+u)*4)}const a=new ba(o,i,r);a.wrapS=as,a.magFilter=a.minFilter=Qe,a.needsUpdate=!0;const l=new Xn({color:new Ot(t.color).multiplyScalar(1.6),alphaMap:a,vertexColors:!0,transparent:!0,depthWrite:!1,side:ze,opacity:0}),c=[],h=s.rest.chest.worldPos;for(const u of sn){const d=Rn(u),f=[],g=[],v=[],p=[],m=28,M=6;for(const x of[-24,-8,8,24]){const A=f.length/3;for(let _=0;_<=m;_++){const w=_/m,N=(-98+172*w)*At;for(let C=0;C<=M;C++){const I=C/M,L=Math.tan(x*At)*I*e*(.6+.4*Math.cos((w-.5)*Math.PI*2));f.push(d*Math.cos(N)*I*e,L+.04*I,Math.sin(N)*I*e);const F=$(.05,.4,I)*(1-$(.8,1,I))*(.5+.9*Math.pow(Math.abs(w*2-1),2.5))*$(0,.06,w)*(1-$(.94,1,w));g.push(1,1,1,F*(Math.abs(x)<10?.5:.36)),v.push(w*2.2,I)}}for(let _=0;_<m;_++)for(let w=0;w<M;w++){const N=A+_*(M+1)+w,C=N+M+1;p.push(N,C,N+1,C,C+1,N+1)}}const T=new Se;T.setAttribute("position",new oe(f,3)),T.setAttribute("color",new oe(g,4)),T.setAttribute("uv",new oe(v,2)),T.setIndex(p);const E=new _e(T,l);E.name=`bird.wingBlur.${u}`,E.frustumCulled=!1,E.visible=!1,E.renderOrder=2,E.position.copy(s.rest[`shoulder.${u}`].worldPos).sub(h),s.bones.chest.add(E),c.push(E)}return{set(u,d=.6){const f=u>.004;for(const g of c)g.visible=f,g.rotation.set(d+(Math.random()-.5)*.16,(Math.random()-.5)*.2,(Math.random()-.5)*.12);f&&(l.opacity=u*(.8+.45*Math.random()),a.offset.x=Math.random())},dispose(){for(const u of c)u.removeFromParent(),u.geometry.dispose();l.dispose(),a.dispose()}}}const Ps=2;class SS{constructor(t,e,n,i,r,o){this.mind=t,this.rig=e,this.root=n,this.hop=i,this.ruffle=r,this.tail=o,this.nextAt=_t(t.rng,this.every[0],this.every[1]),this.blur=MS(e)}mind;rig;root;hop;ruffle;tail;name="flee";awayFor=[2,5];every=[70,200];phase="idle";t0=0;dur=.4;side=1;from=new y;out=new y;hover=new y;landAt=new y;far=new y;landX=0;nextAt;blur;shakeAt=-1;get active(){return this.phase!=="idle"}get perched(){return this.phase==="idle"||this.phase==="ready"||this.phase==="land"}get gone(){return this.phase==="away"}start(){const t=this.mind;return this.active||this.hop.busy?!1:(this.hop.hold=!0,t.emit("startle",{strength:1}),t.arousal=1,t.freeze=0,this.phase="ready",this.t0=t.t,this.dur=t.species.behaviour.parrot?_t(t.rng,.5,.65):_t(t.rng,.3,.48),this.side=t.rng()<.5?1:-1,this.nextAt=t.t+_t(t.rng,this.every[0],this.every[1]),!0)}go(t,e){this.phase=t,this.t0=this.mind.t,this.dur=e}update(t,e){if(this.phase==="idle"&&(!t.quiet&&t.t>=this.nextAt&&!t.eating&&t.freeze<=0&&this.start(),this.shakeAt>0&&t.t>=this.shakeAt&&(this.shakeAt=-1,this.ruffle.trigger(t,"shake",.7)),this.phase==="idle"))return;if(t.species.behaviour.parrot){this.flap(t,e);return}const n=this.root,i=It((t.t-this.t0)/this.dur,0,1);let r=0,o=0,a=.6;switch(t.gazeLock=this.phase!=="land",this.phase){case"ready":{const l=Math.sin(i*Math.PI*.5);e.bodyShift.y-=.04*l,e.bodyShift.z+=.02*l,e.bodyPitch+=.34*l,e.headShift.y-=.012*l,e.fluff-=.12*l,e.tailFan+=.35*l,e.tailPitch-=.12*l,r=.42*$(0,.8,i);const c=Math.sin(t.t*46*Math.PI)*.05*l;for(const h of["L","R"])e.wing[h].lift+=.25*l+c,e.wing[h].droop+=.08*l;i>=1&&(this.from.copy(n.position),this.out.set(this.side*.55,1,.12).normalize(),t.emit("perch",{x:this.from.x,push:1,on:!1,side:.4}),this.go("takeoff",.27));break}case"takeoff":{n.position.copy(this.from).addScaledVector(this.out,.35*i+7.5*i*i*i),r=Ps,o=$(0,.12,i),e.grip=1-$(0,.15,i),e.bodyShift.y+=.03*$(0,.3,i),e.bodyPitch+=et(.34,.1,$(0,.6,i)),a=.95,e.bodyRoll+=-this.side*.25*i,e.tailFan+=.8,e.tailPitch-=.25,e.fluff-=.14,i>=1&&(n.visible=!1,this.go("away",_t(t.rng,this.awayFor[0],this.awayFor[1])));break}case"away":{r=Ps,i>=1&&(this.landX=this.hop.home+_t(t.rng,-.12,.12),this.landX=this.hop.place(this.landX,this.landAt),this.hover.copy(this.landAt),this.hover.y+=.2,this.far.copy(this.hover).add(new y(-this.side*_t(t.rng,3.2,4.4),_t(t.rng,1.8,3),_t(t.rng,-1.2,-.3))),n.position.copy(this.far),n.visible=!0,this.go("approach",_t(t.rng,.42,.55)));break}case"approach":{const l=1-Math.pow(1-i,3);n.position.copy(this.far).lerp(this.hover,l),r=Ps,o=1,e.grip=0,e.bodyPitch+=et(.5,-.32,$(.35,1,i)),a=et(.9,.35,$(.35,1,i)),e.bodyRoll+=this.side*.3*(1-l),e.tailFan+=et(.3,1,$(.4,1,i)),e.tailPitch-=.3*$(.4,1,i),e.fluff-=.1,i>=1&&this.go("brake",_t(t.rng,.45,.62));break}case"brake":{const l=$(.6,1,i);a=.35,n.position.copy(this.hover).lerp(this.landAt,l),n.position.y+=.015*Math.sin(t.t*31)*(1-l),n.position.x+=.008*Math.sin(t.t*23)*(1-l),r=Ps,o=1,e.grip=$(.8,1,i)*.5,e.bodyPitch-=et(.32,.05,l),e.bodyShift.y+=.02*(1-l),e.tailFan+=1,e.tailPitch-=et(.3,.1,l),i>=1&&(n.position.copy(this.landAt),this.hop.landed(),t.emit("perch",{x:this.landAt.x,push:.85,on:!0,side:_t(t.rng,-1,1)}),this.tail.flick(t,1.2),this.go("land",.5));break}case"land":{n.position.copy(this.landAt),r=i<.12?Ps:1-$(.12,.75,i),o=1-$(0,.14,i),e.grip=.5+.5*$(0,.25,i),e.tailFan+=.8*(1-$(0,.8,i));for(const l of["L","R"])e.wing[l].lift+=.3*Math.sin(Math.PI*$(.5,1,i));i>=1&&(this.phase="idle",this.hop.hold=!1,t.gazeLock=!1,this.shakeAt=t.t+_t(t.rng,.25,.6),t.freeze=.3);break}}if(r===Ps&&o>.9&&Math.random()<.3){r=1,o*=.55;const l=Math.random()<.5;for(const c of["L","R"])e.wing[c].sweep=l?_t(Math.random,.7,1):-_t(Math.random,.9,1.25),e.wing[c].raise=(l?-.1:.45)+a*.4}e.wing.L.spread=e.wing.R.spread=r,this.blur.set(o,a),this.hop.follow()}beat=0;lastT=0;offset=new y;flap(t,e){const n=this.root,i=It((t.t-this.t0)/this.dur,0,1),r=It(t.t-this.lastT,0,.1);this.lastT=t.t,t.gazeLock=this.phase!=="land";let o=0,a=0,l=-.3,c=-.3,h=0,u=0,d=0,f=0,g=0,v=0,p=0;switch(this.phase){case"ready":{const b=Math.sin(i*Math.PI*.5);e.bodyShift.y-=.05*b,e.bodyShift.z+=.02*b,g=.38*b,e.headShift.y-=.012*b,e.fluff-=.1*b,e.tailFan+=.4*b,e.tailPitch-=.1*b,v=this.side*.3*b,o=.4*$(.15,1,i),f=.9,i>=1&&(this.from.copy(n.position),this.out.set(this.side*.9,.42,.12).normalize(),t.emit("perch",{x:this.from.x,push:1,on:!1,side:.4}),this.beat=-.4,this.go("takeoff",1));break}case"takeoff":{n.position.copy(this.from).addScaledVector(this.out,.12*i+.8*i*i+2.6*i*i*i),o=et(.4,1,$(0,.1,i)),a=et(5.5,8.5,$(0,.3,i)),l=1.2,c=-.5,h=-.2,u=.35,d=.7,f=.9*(1-$(0,.08,i)),e.grip=1-$(0,.12,i),e.legTuck=$(.3,.8,i),e.bodyShift.y-=.05*(1-$(0,.2,i)),g=et(.38,.8,$(0,.6,i)),v=this.side*et(.3,1.05,$(0,.65,i)),e.bodyRoll+=-this.side*.22*$(.1,.6,i),e.tailFan+=.7,e.tailPitch-=.2,e.fluff-=.12,p=$(0,.3,i),i>=1&&(n.visible=!1,this.go("away",_t(t.rng,this.awayFor[0],this.awayFor[1])));break}case"away":{i>=1&&(this.landX=this.hop.home+_t(t.rng,-.12,.12),this.landX=this.hop.place(this.landX,this.landAt),this.hover.copy(this.landAt).add(this.offset.set(-this.side*.14,.13,-.02)),this.far.copy(this.hover).add(this.offset.set(-this.side*_t(t.rng,3.3,3.9),_t(t.rng,.7,1.3),_t(t.rng,-1,-.2))),n.position.copy(this.far),n.visible=!0,this.go("approach",_t(t.rng,1.3,1.55)));break}case"approach":{const b=1-Math.pow(1-i,2.2),D=$(.55,1,i);n.position.copy(this.far).lerp(this.hover,b),n.position.y-=.2*Math.sin(Math.PI*b),o=1,a=et(7,8,D),l=et(.3,1.05,D),c=et(-.65,-.4,D),h=et(-.1,-.3,D),u=et(.15,.5,D),d=et(.45,.65,D),e.grip=0,e.legTuck=1-$(.55,.95,i),g=et(.8,.05,D),v=this.side*et(1.05,.55,D),e.bodyRoll+=this.side*.2*(1-b),e.tailFan+=et(.3,1,$(.4,1,i)),e.tailPitch-=.3*D,e.fluff-=.1,p=1,i>=1&&this.go("brake",_t(t.rng,.55,.7));break}case"brake":{const b=$(.4,1,i);n.position.copy(this.hover).lerp(this.landAt,b),o=1,a=8,l=1.05,c=-.4,h=-.3,u=.5,d=.6,e.grip=$(.75,1,i)*.5,g=-et(.26,.05,b),e.bodyShift.y+=.02*(1-b),v=this.side*et(.55,.2,i),e.tailFan+=1,e.tailPitch-=et(.35,.1,b),p=1-.6*b,i>=1&&(n.position.copy(this.landAt),this.hop.landed(),t.emit("perch",{x:this.landAt.x,push:1,on:!0,side:_t(t.rng,-1,1)}),this.tail.flick(t,1.2),this.go("land",.9));break}case"land":{n.position.copy(this.landAt);const b=Math.sin(Math.PI*$(0,.75,i));o=1-$(.08,.72,i),a=8*(1-$(0,.3,i)),l=.9,c=.1,h=-.3,u=.2,d=.7,f=$(0,.4,i),e.grip=.5+.5*$(0,.25,i),g=.22*b,e.bodyShift.y-=.03*b,e.tailFan+=.8*(1-$(0,.8,i)),e.tailPitch+=.15*b,v=this.side*.2*(1-$(0,.8,i)),i>=1&&(this.phase="idle",this.hop.hold=!1,t.gazeLock=!1,this.shakeAt=t.t+_t(t.rng,.3,.7),t.freeze=.3);break}}this.beat+=a*r;const m=this.beat*Math.PI*2,M=Math.cos(m),T=Math.sin(m),E=.5+.5*M,x=et(c,l,E),A=et(u,h,E),_=Math.cos(x)*Math.cos(A),w=Math.sin(x),N=Math.cos(x)*Math.sin(A),C=w*Math.cos(g)+N*Math.sin(g),I=-w*Math.sin(g)+N*Math.cos(g),L=Math.asin(It(C,-1,1)),F=Math.atan2(I,_);for(const b of["L","R"]){const D=e.wing[b];D.spread=o,D.raise=L,D.sweep=F,D.flex=It(f+d*Math.pow(Math.max(0,-T),.7),0,1)}p>0&&a>0&&n.visible&&(n.position.y-=.02*M*p),e.bodyPitch+=g,e.bodyYaw+=v,e.headYaw+=v*.85,e.headStabil=et(e.headStabil,.1,p),this.hop.follow()}dispose(){this.blur.dispose()}}const bS=[[.44,-.5],[.52,-.25],[.38,-.65]];class wS{constructor(t,e,n){this.billReach=n,this.nextAt=_t(t.rng,this.every[0]*.6,this.every[1]*.7);const i={p:new y,n:new y,t:new y};for(const r of["L","R"])for(const[o,a]of bS){const l=e.loft.wingAt(o,a,Rn(r));e.loft.surface(l.s,l.ang,i),this.spots[r].push(i.p.clone().addScaledVector(i.n,this.tipOff))}this.coord=e.loft.bodyCoord(3.4),this.hips=e.rest.hips.worldPos.clone(),this.headRest=e.rest.head.worldPos.clone(),t.on("startle",()=>{this.active&&(t.gazeLock=!1),this.active=!1})}billReach;name="preen";auto=!1;every=[22,55];blocked=()=>!1;onDone=null;active=!1;wingOut=.44;wingTwist=.42;billDir=new y(.12,-.86,-.5).normalize();billOut=new y(.3,-.92,.05).normalize();tipOff=.03;bodyYaw=.22;bodyRoll=.1;bodyPitch=.06;headRoll=1.2;t0=0;dur=4;side="L";nextAt;coord;hips;headRest;spots={L:[],R:[]};spot=new y;seed=0;tBreak=0;order=[0,1,2];q=new ve;e=new Yn;d=new y;a=new y;b=new y;start(t,e){return this.active||this.blocked()||t.eating?!1:(this.active=!0,this.t0=t.t,this.dur=_t(t.rng,4,5),this.side=e??(t.rng()<.5?"L":"R"),this.seed=t.rng()*100,this.tBreak=_t(t.rng,.42,.58),this.order=t.rng()<.5?[0,1,2]:[2,0,1],this.spot.copy(this.spots[this.side][this.order[0]]),this.nextAt=t.t+this.dur+_t(t.rng,this.every[0],this.every[1]),!0)}update(t,e){if(!this.active&&(this.auto&&!t.quiet&&t.t>=this.nextAt&&(t.arousal<.5&&t.freeze<=0&&!t.focus&&!t.saccading?this.start(t):this.nextAt=t.t+2),!this.active))return;const n=t.t-this.t0,i=this.dur;if(n>=i||this.blocked()){this.active=!1,t.gazeLock=!1,n>=i&&this.onDone?.(t);return}t.gazeLock=!0;const r=Rn(this.side),o=(b,D)=>$(b,D,n),a=i-1.3,l=o(0,.42)*(1-o(i-.6,i-.1)),c=o(.12,.7)*(1-o(i-.95,i-.25)),h=o(.22,.8)*(1-o(a+.2,a+.9)),u=o(.5,.95)*(1-o(a+.18,a+.65)),d=.95,f=et(d+.3,a,this.tBreak);let g=o(d-.1,d+.22)*(1-o(a,a+.24));g*=1-.75*o(f-.16,f)*(1-o(f+.08,f+.3));const v=et(f,a,.55),p=this.order[n<f?0:n<v?1:2];this.spot.lerp(this.spots[this.side][p],1-Math.exp(-t.dt*(n<f+.3?14:7)));const m=$(.8,1,g),M=n*9.5*Math.PI*2+this.seed,T=$(-.15,.35,Math.sin(n*5.1+this.seed)+.6*Math.sin(n*2.3+this.seed*1.7)),E=Math.sin(M)*m*T,x=Math.sin(M*.5+1.3)*m*T,A=r*this.bodyYaw*c,_=r*this.bodyRoll*c,w=this.bodyPitch*c;e.bodyYaw+=A,e.bodyRoll+=_,e.bodyPitch+=w,e.bodyShift.x+=r*.012*c,e.tailYaw+=-r*.14*c,e.tailFan+=.12*c,this.e.set(e.bodyPitch,e.bodyYaw,e.bodyRoll,"YXZ"),this.q.setFromEuler(this.e);const N=b=>b.sub(this.hips).applyQuaternion(this.q).add(this.hips).add(e.bodyShift),C=e.wing[this.side];C.out+=l*this.wingOut+E*.012+.03*m*Math.sin(n*3.1+this.seed),C.twist+=l*this.wingTwist+x*.015,C.lift+=l*.05,e.wing[this.side==="L"?"R":"L"].lift+=.05*c;const I=this.d.copy(this.billDir);I.x*=r;const L=this.a.copy(this.spot).addScaledVector(I,-this.billReach);this.b.copy(this.billOut),this.b.x*=r,I.lerp(this.b,1-g).normalize(),L.addScaledVector(I,this.billReach+E*.014),L.z+=x*.006,L.y+=x*.005,N(L),I.applyQuaternion(this.q),e.reachTarget.copy(L),e.reachDir.copy(I),e.reachPin=1,e.reachRoll=r*(this.headRoll+.05*x),e.reachWeight=u,e.headYaw=et(e.headYaw,r*100*At+e.bodyYaw,h),e.headPitch=et(e.headPitch,-52*At,h),e.headRoll=et(e.headRoll,r*.15,h);const F=this.b.copy(this.spot).addScaledVector(this.d.copy(this.billDir).setX(this.billDir.x*r),-this.billReach);N(F).sub(this.headRest),e.headShift.addScaledVector(F,h*.8),e.headStabil=et(e.headStabil,.3,h),e.jaw+=(.1+.16*(.5+.5*Math.sin(M+.6)))*m*T,e.nict+=.45*m,e.lidLower+=.3*m,e.lidUpper+=.15*m,e.addLift(this.coord,.09,m*(.08+.04*Math.abs(E))),e.fluff+=.04*c}}function TS(s={}){const t=s.species??yp,e=new hn;e.name="bird";const n=V1(t);e.add(n.rootBone);const i=nS(n),{material:r,uniforms:o}=sS();o.uRestCover.value=t.wing.broad?1:0;const a=new ni(i.contour,r);a.name="bird.contour";const l=new ni(i.flight,r);l.name="bird.flight";const c=new ni(i.fuzz,r);c.name="bird.fuzz",c.frustumCulled=!1,c.bind(n.skeleton,new Qt),c.receiveShadow=!0;const h=rS(o);for(const H of[a,l])H.customDepthMaterial=h,H.castShadow=!0,H.frustumCulled=!1,H.bind(n.skeleton,new Qt),H.receiveShadow=!0;const u=oS(n);e.add(a,l,c,...u.meshes);const d=new Cp,f=lS(n,o),g=new cS(t,s.seed??t.seed),v=new _S(g),p={root:e,at:null,range:[0,0],restRadius:t.legs.perchRadius},m=new yS(g,p),M=new vS(g,f,n.rest.head.worldPos.clone(),H=>q.onPick?.(H),H=>q.onSwallow?.(H),m),T=new xS(g),E=new mS(g),x=new gS(g),A=new SS(g,n,e,m,E,x),_=new va(g),w=t.behaviour.parrot===!0,N=new wS(g,n,f.billReach);T.blocked=()=>A.active||m.busy||N.active;const C=()=>T.blocked()||M.state!=="idle";N.blocked=()=>A.active||m.busy||g.eating||M.state!=="idle",N.onDone=H=>{_.shuffle(H),H.rng()<.5&&E.trigger(H,"puff",.35)};const I=[new hS(g),new uS,new fS(g),new pS(g),E,x,_,M,T,N,m,v,A];let L=[];const F=[],b=n.rest.head.worldPos.clone(),D=new y,U=new Qt;let O=null;const q={root:e,species:t,rig:n,pose:d,mind:g,layers:I,layer:H=>{const Y=I.find(at=>at.name===H);if(!Y)throw new Error(`no layer ${H}`);return Y},plumage:o,feathers:{contour:a,flight:l,fuzz:c},headPosition:H=>n.bones.head.getWorldPosition(H),onPose:null,flee:()=>A.start(),preen:H=>N.start(g,H),get preening(){return N.active},get fleeing(){return A.active},get away(){return A.gone},get perched(){return A.perched},sing:H=>!C()&&(T.sing(g,H),!0),stretch:()=>w&&!C()&&!A.active&&(_.stretch(g),!0),get singing(){return T.singing},lick:(H,Y)=>!C()&&(T.lick(g,H,Y),!0),hopTo:H=>!C()&&m.go(g,H),hopBy:H=>q.hopTo(m.x+H),get busy(){return C()},ruffle:(H,Y)=>E.trigger(g,H,Y),update(H){e.updateWorldMatrix(!0,!1),U.copy(e.matrixWorld).invert(),g.attention=O?D.copy(O).applyMatrix4(U):null,g.food.length=0;for(let Q=0;Q<(A.active||N.active?0:L.length);Q++){const k=F[Q]??={id:0,pos:new y,vel:new y};k.id=L[Q].id,k.pos.copy(L[Q].position).applyMatrix4(U),k.vel.copy(L[Q].velocity).transformDirection(U).multiplyScalar(L[Q].velocity.length()),g.food.push(k)}g.step(H,b),d.reset();for(const Q of I)Q.update(g,d);q.onPose?.(d,g),f(d);const Y=w&&T.singing?1:tn.smoothstep(g.arousal,.55,.9),at=u.eye.pupilRest+(u.eye.pupilPinned-u.eye.pupilRest)*Y;u.eye.uPupil.value+=(at-u.eye.uPupil.value)*(1-Math.exp(-12*H))},setAttention(H){O=H},setFood(H){L=H},setPerch(H,Y){p.at=H,p.range=Y,m.reseat()},onPick:null,onSwallow:null,billTip(H){return H.copy(f.carry).applyMatrix4(e.matrixWorld)},startle(H=1){A.active||(v.fire(Math.min(Math.max(H,0),1)),!w&&H>=.9&&!g.quiet&&g.rng()<.22&&A.start())},dispose(){i.contour.dispose(),i.flight.dispose(),i.fuzz.dispose(),r.dispose(),h.dispose(),A.dispose(),u.dispose(),n.skeleton.dispose(),V?.()}},V=ES(q);return q.update(0),q}function ES(s){if(typeof window>"u")return null;const t=new URLSearchParams(window.location.search);window.__bird=s;const e=g=>t.has(g)?Number(t.get(g)):null,n={front:[0,22,0],profile:[88,16,0],up:[10,40,8],back:[-110,10,0],three:[38,20,-4]},i=t.get("pose");i&&n[i]&&(s.mind.pinGaze=n[i]);const r=t.get("gaze");if(r){const[g=0,v=0,p=0]=r.split(",").map(Number);s.mind.pinGaze=[g,v,p]}if(t.has("quiet")&&(s.mind.quiet=!0),t.has("sing")){const g=s.onPose;let v=1;s.onPose=(p,m)=>{g?.(p,m),m.t>v&&!s.singing&&s.sing(1.8)&&(v=m.t+4)}}const o=e("jaw"),a=e("tongue"),l=e("arousal"),c=e("fluff"),h=e("spread"),u=e("fan"),d=e("blink");if(l!==null||c!==null||h!==null||u!==null||d!==null||o!==null||a!==null){const g=s.onPose;s.onPose=(v,p)=>{g?.(v,p),o!==null&&(v.jaw=o),a!==null&&(v.tongueOut=a),l!==null&&(p.arousal=p.baseline=l),c!==null&&(v.fluff=c),h!==null&&(v.wing.L.spread=v.wing.R.spread=h),u!==null&&(v.tailFan=u),d!==null&&(v.nict=v.lidLower=v.lidUpper=d)}}t.has("nofuzz")&&s.root.traverse(g=>g.name==="bird.fuzz"&&(g.visible=!1)),t.has("noflash")&&(s.plumage.uFlash.value=s.plumage.uGlint.value=0),t.has("skin")&&s.root.traverse(g=>g.name.match(/contour|flight|fuzz/)&&(g.visible=!1)),t.has("wire")&&s.root.traverse(g=>{const v=g.material;g.name==="bird.skin"&&v&&(v.wireframe=!0,v.color.set(16777215),v.emissive.set(8947848))});let f=null;return t.has("bones")&&(f=new wg(s.rig.rootBone),f.material.depthTest=!1,f.renderOrder=10,s.root.add(f)),()=>{f?.dispose()}}const kc=[{name:"Purple-throated mountain-gem",gorget:[0,1,1],crown:[0,1,1],body:[0,1,1],sheen:[0,1,1]},{name:"Ruby-throated",gorget:[102,1.3,.78],crown:[-45,.95,.9],body:[170,.55,1.05],sheen:[0,.08,1.9]},{name:"Anna's",gorget:[55,1.05,1.1],crown:[150,1.05,1.05],body:[175,.5,1.1],sheen:[150,.4,1]},{name:"Sapphire-throated",gorget:[-28,1.3,.6],crown:[105,1,1],body:[150,.75,1],sheen:[32,1.15,1]},{name:"Fiery-throated",gorget:[116,1.25,.82],crown:[55,1,.95],body:[185,.7,.95],sheen:[-92,1.2,1.15]}],Mi=[.2126,.7152,.0722];function zo([s,t,e],n=new ee){const i=tn.degToRad(s),r=Math.cos(i),o=Math.sin(i),a=1/3,l=Math.sqrt(a),c=new ee().set(r+a*(1-r),a*(1-r)-l*o,a*(1-r)+l*o,a*(1-r)+l*o,r+a*(1-r),a*(1-r)-l*o,a*(1-r)-l*o,a*(1-r)+l*o,r+a*(1-r)),h=1-t,u=new ee().set(Mi[0]*h+t,Mi[1]*h,Mi[2]*h,Mi[0]*h,Mi[1]*h+t,Mi[2]*h,Mi[0]*h,Mi[1]*h,Mi[2]*h+t);return n.multiplyMatrices(u,c).multiplyScalar(e)}function Pp(s){return[zo(s.gorget),zo(s.crown),zo(s.body),zo(s.sheen)]}const hr=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Ah=`
float lensCoc(float invZ, float focus, float aperture, float maxCoc) {
  // a real lens gets shallower up close; scale that back so a macro look at
  // the eye isn't a smear (blur grows with distance from focus, not 1/f^2)
  float k = focus / 3.3;
  return min(aperture * abs(1.0 / focus - invZ) * k, maxCoc);
}
`,AS=`
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
`,RS=`
precision highp float;
uniform sampler2D tPack;
uniform int uTile; // device px
uniform float uFocus, uAperture, uMaxCoc;
${Ah}
void main() {
  ivec2 last = textureSize(tPack, 0) - 1;
  ivec2 base = ivec2(gl_FragCoord.xy) * uTile;
  // the CoC grows with |1/focus - 1/z|: the tile's two ends of 1/z are enough
  float lo = 1e9, hi = -1e9;
  float dark = 64.0, bright = 0.0;
  for (int y = 0; y < uTile; y++) {
    for (int x = 0; x < uTile; x++) {
      vec4 p = texelFetch(tPack, min(base + ivec2(x, y), last), 0);
      lo = min(lo, p.a);
      hi = max(hi, p.a);
      float l = dot(p.rgb, vec3(0.333));
      // (a NaN pixel is dropped by the gather: it says nothing here either)
      if (l >= 0.0 && l < 64.0) {
        dark = min(dark, l);
        bright = max(bright, l);
      }
    }
  }
  gl_FragColor = vec4(max(lensCoc(lo, uFocus, uAperture, uMaxCoc), lensCoc(hi, uFocus, uAperture, uMaxCoc)), bright, min(dark, bright), 0.0);
}
`,CS=`
precision highp float;
uniform sampler2D tTile;
void main() {
  ivec2 last = textureSize(tTile, 0) - 1;
  ivec2 p = ivec2(gl_FragCoord.xy);
  vec3 m = vec3(0.0, 0.0, 64.0);
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec3 t = texelFetch(tTile, clamp(p + ivec2(x, y), ivec2(0), last), 0).rgb;
      m = vec3(max(m.rg, t.rg), min(m.b, t.b));
    }
  }
  gl_FragColor = vec4(m, 0.0);
}
`,Lp=`
uniform sampler2D tPack; // rgb colour, a = 1 / view distance
uniform sampler2D tTile; // r: biggest CoC near here, g and b: the brightest and the darkest
uniform float uThrift;   // 1: fewer taps where the surroundings are even (0: all of them, to compare)
uniform int uTile;
uniform vec2 uTexel;     // dpr / size: CoC numbers are in CSS px
uniform vec2 uSpiral[TAPS]; // (cos, sin) of i * golden angle
uniform float uFocus;
uniform float uAperture;
uniform float uMaxCoc;   // px
${Ah}
const int MIN_TAPS = 8;
const float FULL = 48.0; // the look was set with 48 taps: fewer each weigh more
// (brightest - darkest) / (brightest + darkest) around a pixel: below EVEN it is all one tone, above UNEVEN it is not
const float EVEN = 0.15;
const float UNEVEN = 0.4;

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
  vec3 tile = texelFetch(tTile, ivec2(uv * vec2(textureSize(tPack, 0))) / uTile, 0).rgb;
  float R = min(R0, tile.r + 1.0);
  float area = (R * R) / (R0 * R0);
  // Where brightest and darkest nearby are close, a quarter of the taps: what they miss
  // of the average is well under the grain. Edges, specks and the bird keep them all.
  float even = 1.0 - smoothstep(EVEN, UNEVEN, (tile.g - tile.b) / (tile.g + tile.b + 0.02));
  int taps = clamp(int(ceil(float(TAPS) * area * mix(1.0, 0.25, even * uThrift))), MIN_TAPS, TAPS);
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
`,PS=`
precision highp float;
${Lp}
void main() {
  vec2 size = vec2(textureSize(tPack, 0));
  vec2 uv = (min(floor(gl_FragCoord.xy) * 2.0 + 1.0, size - 1.0) + 0.5) / size;
  vec4 p0 = texture2D(tPack, uv);
  float c0 = lensCoc(p0.a, uFocus, uAperture, uMaxCoc);
  gl_FragColor = vec4(gather(uv, p0, c0, gl_FragCoord.xy), c0);
}
`,LS=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tColor;
uniform sampler2D tDof;  // half size: blurred colour, a = the CoC it was blurred by
uniform float uDof;      // 0 with the lens shut
${Lp}
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
`,IS=8,Al=Ei?24:48;function DS(s,t){const e=new cs(1,1);e.type=qn;const n=new nn(1,1,{type:gn,samples:t.samples,depthTexture:e,depthBuffer:!0});n.texture.colorSpace=Sn;const i=new nn(1,1,{type:gn,depthBuffer:!1}),r={type:gn,depthBuffer:!1,minFilter:ke,magFilter:ke},o=new nn(1,1,r),a=new nn(1,1,r),l=new nn(1,1,{type:gn,depthBuffer:!1,minFilter:ke,magFilter:ke}),c=new nn(1,1,{samples:t.samples}),h=new Ot,u=new _e(new fs(2,2));u.frustumCulled=!1;const d=new dh;d.add(u);const f=new Aa(-1,1,1,-1,0,1),g={uFocus:{value:3.3},uAperture:{value:85},uMaxCoc:{value:14}},v=new mn({vertexShader:hr,fragmentShader:AS,uniforms:{tColor:{value:n.texture},tDepth:{value:e},uNear:{value:.1},uFar:{value:100},uFarCoc:{value:6},uFocus:g.uFocus,uAperture:g.uAperture},depthTest:!1,depthWrite:!1,toneMapped:!1}),p={value:16},m=new mn({vertexShader:hr,fragmentShader:RS,uniforms:{tPack:{value:i.texture},uTile:p,...g},depthTest:!1,depthWrite:!1,toneMapped:!1}),M=new mn({vertexShader:hr,fragmentShader:CS,uniforms:{tTile:{value:o.texture}},depthTest:!1,depthWrite:!1,toneMapped:!1}),T={tPack:{value:i.texture},tTile:{value:a.texture},uTile:p,uTexel:{value:new Ht},uThrift:{value:1},uSpiral:{value:Array.from({length:Al},(I,L)=>new Ht(Math.cos(L*2.39996323),Math.sin(L*2.39996323)))},...g},E=new mn({vertexShader:hr,fragmentShader:PS,uniforms:T,defines:{TAPS:Al},depthTest:!1,depthWrite:!1,toneMapped:!1}),x=new mn({vertexShader:hr,fragmentShader:LS,uniforms:{tColor:{value:n.texture},tDof:{value:l.texture},uDof:{value:1},...T,uExposure:{value:1},uWhite:{value:new y(1,1,1)},uLift:{value:new y(0,0,0)},uGamma:{value:new y(1,1,1)},uGain:{value:new y(1,1,1)},uSat:{value:1},uContrast:{value:1},uVignette:{value:.2},uGrain:{value:.025},uTime:{value:0},uRes:{value:new Ht(1,1)},tWire:{value:c.texture},uReveal:{value:1},uDpr:{value:1}},depthTest:!1,depthWrite:!1,defines:{TAPS:Al},toneMapped:!0}),A=[[v,i],[m,o],[M,a],[E,l]];function _(I,L){if(s.setRenderTarget(n),s.render(I,L),x.uniforms.uDof.value=g.uAperture.value>0?1:0,!!x.uniforms.uDof.value)for(const[F,b]of A)u.material=F,s.setRenderTarget(b),s.render(d,f)}const w=new y(0,.9,0),N=new y;let C=3.3;return{dof:E.uniforms,grade:x.uniforms,endDrawing(){c.dispose(),x.uniforms.tWire.value=null},compile(I){const L=s.getRenderTarget();s.setRenderTarget(n);const F=I();for(const[b,D]of A)s.setRenderTarget(D),u.material=b,F.push(s.compileAsync(u,f,d));return u.material=x,s.setRenderTarget(L),Promise.all(F)},prerender(I,L){const F=s.getRenderTarget();_(I,L),u.material=x,s.setRenderTarget(F)},setToneMapping(I){s.toneMapping=I,x.needsUpdate=!0},focusOn(I){w.copy(I)},setSize(I,L,F){const b=Math.floor(I*F),D=Math.floor(L*F);n.setSize(b,D),i.setSize(b,D),p.value=Math.ceil(IS*F),o.setSize(Math.ceil(b/p.value),Math.ceil(D/p.value)),a.setSize(o.width,o.height),l.setSize(Math.ceil(b/2),Math.ceil(D/2)),c.setSize(b,D),x.uniforms.uDpr.value=F,T.uTexel.value.set(F/b,F/D),x.uniforms.uRes.value.set(b,D)},render(I,L,F,b){if(b){x.uniforms.tWire.value=c.texture,s.getClearColor(h);const D=s.getClearAlpha();s.setRenderTarget(c),s.setClearColor(0,0),s.clear(),b(),s.setClearColor(h,D)}N.copy(w).applyMatrix4(L.matrixWorldInverse),C+=(-N.z-C)*.15,g.uFocus.value=Math.max(C,.1),v.uniforms.uNear.value=L.near,v.uniforms.uFar.value=L.far,x.uniforms.uTime.value=F,x.uniforms.uDof.value=0,x.uniforms.uReveal.value>0&&_(I,L),u.material=x,s.setRenderTarget(null),s.render(d,f)}}}const NS=6,FS=.038,Nd=44;function US(){const s=[];for(let i=0;i<6;i++){const r=i/6*Math.PI*2;s.push(0,.02,0,Math.cos(r)*.009,.017,Math.sin(r)*.009)}const t=new Se;t.setAttribute("position",new oe(s,3));const e=new qr(.0022,.0028,.016,6);e.translate(0,.027,0);const n=new hi(1,16,12);return n.scale(.02,.021,.02),{fibres:t,beak:e,body:n}}function OS(){const s=[],t=new y(0,.03,0);for(let r=0;r<Nd;r++){const o=r/Nd*Math.PI*2+Math.sin(r*12.7)*.05,a=.35+.12*Math.sin(r*3.1),l=FS*(.9+.15*Math.sin(r*7.3)),c=new y(Math.cos(o)*l,t.y+l*a,Math.sin(o)*l);s.push(t.x,t.y,t.z,c.x,c.y,c.z);for(const h of[.6,.78,.92]){const u=t.clone().lerp(c,h),d=new y(-Math.sin(o),.3,Math.cos(o)).multiplyScalar(l*.07);s.push(u.x,u.y,u.z,u.x+d.x,u.y+d.y,u.z+d.z),s.push(u.x,u.y,u.z,u.x-d.x,u.y+d.y,u.z-d.z)}}const e=new Se;e.setAttribute("position",new oe(s,3));const n=new qr(8e-4,.0011,.03,5);n.translate(0,.015,0);const i=new hi(1,10,8);return i.scale(.0035,.01,.0035),i.translate(0,-.007,0),{fibres:e,beak:n,body:i}}function kS(s,t="pappus"){const e=t==="fruit",n=e?US():OS(),i=new Ta({color:e?6969914:15921382,transparent:!0,opacity:e?.9:.75,depthWrite:!1}),r=new _n({color:e?5917226:13617332,roughness:.7}),o=new _n({color:e?1839906:3811868,roughness:e?.42:.8}),a=[],l=new y,c=[],h=new y,u=new y,d=new y(0,1,0),f=new ve;let g=1;function v(m,M=null){if(a.filter(x=>x.state==="drift").length>=NS){const x=a.find(A=>A.state==="drift");x&&p(x)}const T=new hn,E=new ma(n.fibres,i);T.add(E,new _e(n.beak,r),new _e(n.body,o)),T.position.copy(m),T.rotation.set((Math.random()-.5)*.4,Math.random()*6.28,(Math.random()-.5)*.4),T.scale.setScalar(.01),s.add(T),a.push({id:g++,obj:T,fibres:E,position:T.position,velocity:new y,age:0,spin:(Math.random()-.5)*.8,phase:Math.random()*100,state:"drift",carryT:0,swallowAt:-1,wind:M})}function p(m){m.state="gone",s.remove(m.obj)}return{spawn:v,warm:[new ma(n.fibres,i),new _e(n.beak,r),new _e(n.body,o)],pick(m){const M=a.find(T=>T.id===m&&T.state==="drift");M&&(M.state="carried",M.carryT=0,M.swallowAt=-1)},swallowed(m){const M=a.find(T=>T.id===m&&T.state==="carried");M&&M.swallowAt<0&&(M.swallowAt=M.carryT)},food(){c.length=0;for(const m of a)m.state==="drift"&&c.push(m);return c},update(m,M,T,E){for(const x of a)if(x.state!=="gone"){if(x.age+=m,x.state==="drift"){const A=M*.6+x.phase,_=l.set(Math.sin(A*.9)*.05+Math.sin(A*2.3)*.02,Math.sin(A*1.7)*.02-.035,Math.cos(A*.7)*.03);x.wind&&_.add(x.wind),x.velocity.lerp(_,1-Math.exp(-m*1.5)),x.obj.position.addScaledVector(x.velocity,m),x.obj.rotation.y+=x.spin*m,x.obj.rotation.x=Math.sin(A*1.3)*.12,x.obj.rotation.z=Math.cos(A*1.1)*.12,x.obj.scale.setScalar(Math.min(1,x.obj.scale.x+m*4)),(x.obj.position.y<-1.4||x.age>(x.wind?90:45)||Math.abs(x.obj.position.x)>3.2)&&p(x)}else if(x.state==="carried"){x.carryT+=m,T&&x.obj.position.copy(T(h)),E&&(u.copy(E).sub(x.obj.position).normalize(),x.obj.quaternion.slerp(f.setFromUnitVectors(d,u),1-Math.exp(-m*30)));const A=Math.min(1,x.carryT/.07),_=Math.max(.2,1-x.carryT*1.6);x.fibres.scale.set(1-.85*A,1+.6*A,1-.85*A),x.obj.scale.setScalar(_),x.swallowAt>=0&&(x.obj.scale.setScalar(Math.max(0,.2*(1-(x.carryT-x.swallowAt)*10))),x.carryT-x.swallowAt>.1&&p(x)),(x.carryT>3||!T)&&p(x)}}for(let x=a.length-1;x>=0;x--)a[x].state==="gone"&&a.splice(x,1)}}}const Fd=1e6;function BS(s,t,e=!0){const n=new hi(1,8,6);n.scale(.004,.004,.011);const i=new fs(.016,.007);i.translate(.008,0,0);const r=new _n({color:1709586,roughness:.6}),o=new Xn({color:14542044,transparent:!0,opacity:.2,side:ze,depthWrite:!1}),a=[],l=[],c=new y,h=new y,u=new y;let d=Fd,f=10+Math.random()*3,g=!1;function v(m,M=!1){const T=t(),E=m?m.clone():T.clone().add(new y((Math.random()-.5)*.9,.05+Math.random()*.3,.45+Math.random()*.35)),x=E.clone().add(new y(Math.sign(Math.random()-.5)*2.2,.6,-.4)),A=new hn,_=new _e(n,r),w=[new _e(i,o),new _e(i,o)];w[1].rotation.y=Math.PI,A.add(_,...w),A.position.copy(x),s.add(A),a.push({id:d++,obj:A,wings:w,position:A.position,velocity:new y,home:E,goal:E.clone(),age:0,life:M?16:6+Math.random()*8,dartAt:.8,phase:Math.random()*100,state:"fly",carryT:0,swallowAt:-1,dodgedUntil:0,tame:M,yaw:0})}function p(m){m.state="gone",s.remove(m.obj)}return{spawn:v,warm:[new _e(n,r),new _e(i,o)],owns:m=>m>=Fd,strike(){g=!0},pick(m){const M=a.find(T=>T.id===m&&(T.state==="fly"||T.state==="leave"));M&&(M.state="carried",M.carryT=0)},swallowed(m){const M=a.find(T=>T.id===m&&T.state==="carried");M&&M.swallowAt<0&&(M.swallowAt=M.carryT)},food(){l.length=0;for(const m of a)m.state==="fly"&&m.age>m.dodgedUntil&&l.push(m);return l},update(m,M,T){const E=g;g=!1,e&&M>f&&a.length===0&&(v(),f=M+20+Math.random()*20);for(const x of a){if(x.state==="gone")continue;if(x.age+=m,x.state==="carried"){x.carryT+=m,T&&x.obj.position.copy(T(c));for(const N of x.wings)N.visible=!1;const w=x.swallowAt>=0?Math.max(0,1-(x.carryT-x.swallowAt)*10):1;x.obj.scale.setScalar(w),(x.swallowAt>=0&&w<=0||x.carryT>3||!T)&&p(x);continue}if(x.state==="fly"){if(x.age>x.life)x.state="leave",x.goal.copy(x.position).add(new y(Math.sign(x.position.x-x.home.x||1)*3,1.2,-.5));else if(x.age>x.dartAt){const w=x.tame?.15:1;x.goal.copy(x.home).add(new y((Math.random()-.5)*.4*w,(Math.random()-.5)*.25*w,(Math.random()-.5)*.3*w)),x.dartAt=x.age+.6+Math.random()*1.8}}x.state==="fly"&&!x.tame&&x.age>x.dodgedUntil&&E&&T&&T(c).distanceTo(x.position)<.7&&Math.random()<.75&&(x.dodgedUntil=x.age+1.5,h.copy(x.position).sub(c).normalize(),x.velocity.addScaledVector(h,2.2),x.goal.copy(x.position).addScaledVector(h,.45),x.dartAt=x.age+.8);const A=M*3+x.phase;if(h.set(Math.sin(A*5.1)+Math.sin(A*11.7)*.5,Math.sin(A*6.3+1)+Math.sin(A*13.1)*.4,Math.sin(A*4.7+2)).multiplyScalar(.08),h.addScaledVector(u.copy(x.goal).sub(x.position),x.state==="leave"?2.5:6),x.velocity.lerp(h,1-Math.exp(-m*8)),x.obj.position.addScaledVector(x.velocity,m),x.velocity.x*x.velocity.x+x.velocity.z*x.velocity.z>.01){const w=Math.atan2(x.velocity.x,x.velocity.z);x.yaw=mp(x.yaw,w,4,m)}x.obj.rotation.set(tn.clamp(-x.velocity.y*.6,-.35,.35),x.yaw,0,"YXZ");const _=Math.sin(M*190+x.phase)*.9;x.wings[0].rotation.z=_,x.wings[1].rotation.z=-_,x.state==="leave"&&x.position.distanceTo(x.home)>2.5&&p(x)}for(let x=a.length-1;x>=0;x--)a[x].state==="gone"&&a.splice(x,1)}}}const ti=40,Ud=17;function zS(){const s=document.createElement("canvas");s.width=64,s.height=96;const t=s.getContext("2d");t.strokeStyle="#fff",t.lineCap="round";let e=7;const n=()=>(e=e*16807%2147483647)/2147483647,i=32;t.globalAlpha=.9,t.lineWidth=1.6,t.beginPath(),t.moveTo(i,92),t.quadraticCurveTo(i+2,50,i-1,14),t.stroke();for(let o=0;o<70;o++){const a=n(),l=90-a*76,c=i+(1-a)*1.5,h=n()<.5?-1:1,u=(10+n()*16)*(.55+.8*Math.sin(Math.PI*(.15+a*.8))),d=h*(.5+n()*.7);t.globalAlpha=.25+n()*.45,t.lineWidth=.7+n()*.7,t.beginPath(),t.moveTo(c,l),t.quadraticCurveTo(c+Math.sin(d)*u*.5,l-Math.cos(d)*u*.3,c+Math.sin(d)*u,l-Math.cos(d)*u*(.4+n()*.5)+(n()-.5)*6),t.stroke()}const r=new Nm(s);return r.colorSpace=Xe,r}function VS(s){const{scene:t,camera:e,renderer:n,center:i}=s,r=new hn;r.name="ambient",t.add(r);const o=new Float32Array(ti*3),a=new Float32Array(ti),l=new Float32Array(ti),c=[],h=new Float32Array(ti),u=new Float32Array(ti).fill(-1),d=new Float32Array(ti);for(let Q=0;Q<ti;Q++)l[Q]=Math.random(),c.push(new y);const f=new Se;f.setAttribute("position",new Le(o,3).setUsage(nu)),f.setAttribute("aSize",new Le(a,1).setUsage(nu)),f.setAttribute("aSeed",new Le(l,1));const g=new mn({uniforms:{uScale:{value:500},uMinPx:{value:1.2},uTime:{value:0},uFocus:{value:3.3},uAperture:{value:0},uMaxCoc:{value:14},uDpr:{value:1}},vertexShader:`
      attribute float aSize;
      attribute float aSeed;
      uniform float uScale, uMinPx, uTime, uFocus, uAperture, uMaxCoc, uDpr;
      varying float vGlint, vCov;
      ${Ah}
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
      }`,blending:Gl,transparent:!0}),v=new Xf(f,g);v.frustumCulled=!1,r.add(v);function p(Q,k,Z,X){k?o.set([k.x,k.y,k.z],Q*3):(o[Q*3]=i.x+(Math.random()-.5)*3.6,o[Q*3+1]=i.y+(Math.random()-.45)*2,o[Q*3+2]=i.z-1.7+Math.random()*3.1),c[Q].copy(Z??new y),h[Q]=0,u[Q]=X,d[Q]=Math.random()<.85?.0025+Math.random()*.003:.006+Math.random()*.005}const m=()=>{for(let Q=0;Q<ti;Q++)if(u[Q]<0)return Q;return-1},M=new fs(.04,.06);M.translate(0,.012,0);const T=new _n({color:12893896,map:zS(),roughness:1,side:ze,alphaToCoverage:!0,alphaTest:.04}),E=[],x=new hn,A=new _e(new hi(1,8,6).scale(.008,.0075,.02),new _n({color:1380879,roughness:.45})),_=new _h(.014,10).scale(1,.55,1).translate(.014,0,0),w=new Xn({color:14673632,transparent:!0,opacity:.22,side:ze,depthWrite:!1}),N=[new _e(_,w),new _e(_,w)];for(const Q of N)Q.rotation.order="ZXY",Q.rotation.x=-Math.PI/2,Q.position.y=.004;N[1].scale.x=-1,x.add(A,...N),x.visible=!1,r.add(x);let C=null,I=0,L=2,F=25+Math.random()*40;const b=new y;let D=0;function U(Q=!1){const k=Math.random()<.5?-1:1,Z=Math.random(),X=Q?.25+Math.random()*.2:Z<.4?-.7+Math.random()*.5:Z<.8?-.15+Math.random()*.55:.8+Math.random()*.6,ct=Q?i.y+.45:i.y+(Math.random()-.4)*1,J=[],tt=6;for(let ot=0;ot<tt;ot++){const ft=ot/(tt-1);J.push(new y(i.x+k*(-2.6+5.2*ft),ct+(Math.random()-.5)*.35+Math.sin(ft*5)*.08,X+(Math.random()-.5)*.4))}C=new Pc(J),D=Math.atan2(J[1].x-J[0].x,J[1].z-J[0].z),I=0,L=2.2+Math.random()*1.4,x.visible=!0,x.position.copy(J[0]),b.copy(J[0])}let O=15+Math.random()*25;function q(){if(!s.passSeed)return;const Q=Math.random()<.5?-1:1,k=new y(i.x-Q*2.3,i.y+.5+Math.random()*.7,i.z-1.3+Math.random()*2.4);s.passSeed(k,new y(Q*(.07+Math.random()*.05),.012,(Math.random()-.5)*.02))}const V=new y,H=new Ht,Y=new y;let at=0;for(let Q=0;Q<Ud;Q++)p(Q,null,null,8+Math.random()*18),h[Q]=Math.random()*u[Q];return{group:r,warm:[new _e(M,T)],shed(Q,k,Z){const X=2+Math.floor(Math.random()*2);for(let J=0;J<X;J++){const tt=m();if(tt<0)break;Y.copy(k).multiplyScalar(.06+Math.random()*.08),Y.x+=(Math.random()-.5)*.08,Y.y+=.02+Math.random()*.06,Y.z+=(Math.random()-.5)*.08,p(tt,new y(Q.x+(Math.random()-.5)*.08,Q.y+(Math.random()-.5)*.12,Q.z+(Math.random()-.5)*.08),Y,4+Math.random()*5),d[tt]*=.8}if(!Z)return;const ct=new _e(M,T);ct.position.copy(Q),ct.rotation.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),ct.scale.setScalar(.01),r.add(ct),E.push({obj:ct,vel:k.clone().multiplyScalar(.3).add(new y(0,.1,0)),away:k.clone().multiplyScalar(.06),age:0,life:16+Math.random()*10,fall:.045+Math.random()*.03,phase:Math.random()*100,spin:(Math.random()-.5)*1.5})},flyBy:U,flyNear(Q,k){return x.visible&&x.position.distanceTo(Q)<k?x.position:null},update(Q){at+=Q,g.uniforms.uTime.value=at,n.getDrawingBufferSize(H),g.uniforms.uScale.value=H.y/(2*Math.tan(tn.degToRad(e.fov)/2)),g.uniforms.uMinPx.value=1.3*n.getPixelRatio(),g.uniforms.uDpr.value=n.getPixelRatio();const k=s.dof?.();k&&(g.uniforms.uFocus.value=k.uFocus.value,g.uniforms.uAperture.value=k.uAperture.value,g.uniforms.uMaxCoc.value=k.uMaxCoc.value),V.set(Math.sin(at*.07)*.025+Math.sin(at*.19+1)*.01,Math.sin(at*.11)*.006,Math.cos(at*.05)*.015);let Z=0;for(let X=0;X<ti;X++)u[X]>=0&&Z++;for(let X=0;X<ti;X++){if(u[X]<0){a[X]=0,Z<Ud&&Math.random()<Q*2&&(p(X,null,null,10+Math.random()*18),Z++);continue}if(h[X]+=Q,h[X]>u[X]){u[X]=-1,a[X]=0;continue}const ct=l[X]*50,J=at*.4+ct;Y.set(Math.sin(J*1.3)*.012,Math.sin(J*.9+2)*.008-.004,Math.cos(J*1.1)*.01).add(V),c[X].lerp(Y,1-Math.exp(-Q*.8)),o[X*3]+=c[X].x*Q,o[X*3+1]+=c[X].y*Q,o[X*3+2]+=c[X].z*Q;const tt=h[X]/u[X];a[X]=d[X]*Math.min(1,tt*6,(1-tt)*6)}f.attributes.position.needsUpdate=!0,f.attributes.aSize.needsUpdate=!0;for(const X of E){X.age+=Q;const ct=at+X.phase;Y.set(Math.sin(ct*1.4)*.05,-X.fall+Math.sin(ct*2.8)*.012,Math.cos(ct*1.1)*.03).add(V).addScaledVector(X.away,Math.exp(-X.age*.25)),X.vel.lerp(Y,1-Math.exp(-Q*1.2)),X.obj.position.addScaledVector(X.vel,Q),X.obj.rotation.y+=X.spin*Q,X.obj.rotation.z=Math.sin(ct*1.4)*.6,X.obj.rotation.x=.3+Math.cos(ct*1.1)*.35,X.obj.scale.setScalar(Math.max(0,Math.min(1,X.age*3,(X.life-X.age)*.5)))}for(let X=E.length-1;X>=0;X--)E[X].age>E[X].life&&(r.remove(E[X].obj),E.splice(X,1));if(s.flies!==!1&&Q>0&&at>F&&!x.visible&&(U(),F=at+50+Math.random()*70),x.visible&&C)if(I+=Q/L,I>=1)x.visible=!1,C=null;else{b.copy(x.position),C.getPointAt(tn.clamp(I+.8*Math.sin(Math.PI*2*I)/(Math.PI*2),0,1),x.position),x.position.x+=Math.sin(at*37)*.006,x.position.y+=Math.sin(at*29+1)*.008;const X=x.position.x-b.x,ct=x.position.z-b.z;if(X*X+ct*ct>1e-8){const tt=Math.atan2(X,ct);D=mp(D,tt,6,Q)}x.rotation.set(tn.clamp(-(x.position.y-b.y)/Math.max(Q,.001)*.4,-.3,.3),D,0,"YXZ");const J=Math.sin(at*210)*.7;N[0].rotation.z=J,N[1].rotation.z=-J}Q>0&&at>O&&(q(),O=at+35+Math.random()*45)}}}const In=s=>`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${s}</svg>`,yn={bird:In('<path d="M18.1 17.1A6.2 6.2 0 1 0 8.9 9.4C8.5 10.5 7.2 11.4 3.3 12.4l5.1-.3"/><circle cx="14" cy="11" r="1.9" fill="currentColor" stroke="none"/><circle cx="13.4" cy="10.4" r=".55" fill="#1f3a1c" stroke="none"/>'),parrot:In('<path d="M6.5 20.5V11.4a6.6 6.6 0 0 1 12.7-2.5"/><path d="M19.2 8.9c2 .5 3 2.2 2.6 4.6-1.3-.8-2.6-1-4-.6"/><path d="M17.9 12.9c-.5 3.2-2.4 5.7-5.4 7.6"/><circle cx="14.3" cy="9.7" r="1.7"/><circle cx="14.3" cy="9.7" r=".6" fill="currentColor" stroke="none"/>'),fruit:In('<circle cx="12" cy="14.5" r="5.6"/><path d="M12 8.9V5.6"/><path d="M12 5.8c1.6-1.6 3.4-1.9 5.2-1"/><path d="M9.6 12.4c.5-.9 1.2-1.4 2.1-1.6" stroke-width="1.2"/>'),food:In('<path d="M12 10.5L3.8 8.3M12 10.5L5.5 5.0M12 10.5L8.4 2.8M12 10.5L12.0 2.0M12 10.5L15.6 2.8M12 10.5L18.5 5.0M12 10.5L20.2 8.3" stroke-width="1.1"/><path d="M12 10.5v7"/><path d="M12 17.3c-.9 0-1.3 1-1.1 2.1L12 22l1.1-2.6c.2-1.1-.2-2.1-1.1-2.1z" fill="currentColor"/>'),gnat:In('<ellipse cx="12" cy="14.5" rx="3" ry="5"/><circle cx="12" cy="7.6" r="1.9"/><path d="M9.2 11.5C6 8.5 3.5 9.5 3.6 11.8c.1 1.6 2.7 1.8 5.6.9M14.8 11.5c3.2-3 5.7-2 5.6.3-.1 1.6-2.7 1.8-5.6.9M10.6 6 9 3.8M13.4 6 15 3.8"/>'),sound:In('<path d="M4 9.5v5h3.5L12 18V6L7.5 9.5H4z"/><path d="M15.5 9a4.5 4.5 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11"/>'),sing:In('<path d="M9 18V5.5l10-2V16"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="16" r="2.5"/><path d="M9 9.5l10-2"/>'),ruffle:In('<path d="M19.5 4.5C13 5 7.5 9.5 6 17l-1.5 2.5"/><path d="M19.5 4.5c-.5 6-4.5 11-12.5 12.5"/><path d="M9.5 13.5l3.5-3.5M8.5 11h3.5M11.5 8.5h3"/>'),fly:In('<path d="M11 16C9.5 10.5 6.5 6.5 2 5c.3 2.6 1.1 4.4 2.4 5.6-.9.2-1.4.2-2 .1 1.2 2.6 2.9 4 5.3 4.4-.6.4-1.2.6-1.9.7C7.6 16.6 9.1 16.9 11 16z"/><path d="M13 16c1.5-5.5 4.5-9.5 9-11-.3 2.6-1.1 4.4-2.4 5.6.9.2 1.4.2 2 .1-1.2 2.6-2.9 4-5.3 4.4.6.4 1.2.6 1.9.7-1.8.8-3.3 1.1-5.2.2z"/>'),away:In('<path d="M2.5 16c2.6-4.2 5.9-4.8 9.5-1 3.6-3.8 6.9-3.2 9.5 1"/><path d="M14.5 4.5H19V9"/><path d="M19 4.5l-5 5"/>'),palette:In('<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.8 1.6-1.6 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.7-1.6 1.6-1.6H16a5 5 0 0 0 5-5C21 6.4 17 3 12 3z"/><circle cx="7.5" cy="11" r="1.2"/><circle cx="10" cy="7" r="1.2"/><circle cx="15" cy="7.2" r="1.2"/>'),settings:In('<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>')},HS=220;function GS(s,t=yn.bird){const e=document.createElement("div");e.className="actions";const n=document.createElement("button");n.type="button",n.className="act-main",n.setAttribute("aria-label","Things to do"),n.setAttribute("aria-expanded","false"),n.innerHTML=`${t}<span class="x" aria-hidden="true"></span>`;const i=document.createElement("div");i.className="act-menu",i.setAttribute("role","menu");const r=s.map((m,M)=>{const T=document.createElement("button");return T.type="button",T.className="act-item",T.dataset.id=m.id,T.setAttribute("role","menuitem"),T.setAttribute("aria-label",m.label),T.style.setProperty("--i",String(s.length-1-M)),T.innerHTML=`${m.icon}<span class="act-label">${m.label}${m.key?`<kbd>${m.key}</kbd>`:""}</span>`,i.append(T),T});e.append(i,n),document.body.append(e);let o=!1;function a(m){o=m,e.classList.toggle("open",m),n.setAttribute("aria-expanded",String(m)),m||c(null)}let l=null;function c(m){l?.classList.remove("lit"),l=m,l?.classList.add("lit")}function h(m){const M=s[r.indexOf(m)];m.classList.remove("fired"),m.offsetWidth,m.classList.add("fired"),M.run()}let u=0,d=!1,f=!1;const g=(m,M)=>{const T=document.elementFromPoint(m,M)?.closest(".act-item");return T&&r.includes(T)?T:null};n.addEventListener("pointerdown",m=>{m.button===0&&(m.stopPropagation(),f=!0,d=!1,n.setPointerCapture(m.pointerId),clearTimeout(u),o||(u=window.setTimeout(()=>{d=!0,a(!0),navigator.vibrate?.(8)},HS)))}),n.addEventListener("pointermove",m=>{d&&c(g(m.clientX,m.clientY))});const v=m=>{if(f){if(f=!1,clearTimeout(u),m.stopPropagation(),d){d=!1;const M=g(m.clientX,m.clientY);M&&h(M),a(!1);return}a(!o)}};n.addEventListener("pointerup",v),n.addEventListener("pointercancel",()=>{f=d=!1,clearTimeout(u)}),n.addEventListener("click",m=>{m.detail===0&&a(!o)});for(const m of r)m.addEventListener("pointerdown",M=>M.stopPropagation()),m.addEventListener("pointerup",M=>M.stopPropagation()),m.addEventListener("click",()=>h(m)),m.addEventListener("pointerenter",()=>c(m)),m.addEventListener("pointerleave",()=>l===m&&c(null));let p=-1;return window.addEventListener("pointerdown",m=>{o&&!d&&!e.contains(m.target)?(a(!1),p=m.pointerId):p=-1}),window.addEventListener("keydown",m=>{m.key==="Escape"&&a(!1)}),{root:e,setOpen:a,isOpen:()=>o,swallows:m=>m.pointerId===p}}const Rl=1e3/60,WS=30,XS=12,Od=.84,qS=.7,kd=8e3,Cl=6e4,YS=20,KS=2500,Pl="iguaca.pixels";function ZS(s){let t=1/0,e=kd;try{const A=Number(localStorage.getItem(Pl));A>0&&(t=A,e=Cl)}catch{}let n=!0;const i={w:1,h:1,r:1};let r=Rl,o=-1,a=0,l=!1,c=0;const h=[];let u=0,d=0;const f=[];let g=null,v=null,p=e;const m=()=>Math.min(s.floor,s.cap());function M(A,_){const w=s.cap();if(!n)return w;const N=Math.sqrt(t/Math.max(A*_,1));return N>=w?w:Math.max(m(),Math.floor(N*20+1e-6)/20)}function T(A){t=A>=i.w*i.h*s.cap()**2?1/0:A;try{t===1/0?localStorage.removeItem(Pl):localStorage.setItem(Pl,String(Math.round(t)))}catch{}M(i.w,i.h)!==i.r&&s.onChange()}const E=()=>i.w*i.h*i.r*i.r;function x(A,_,w,N){const C=w>=3||_>r*1.15,I=w>=N*.75;f.push({heavy:C,any:w>0}),f.length>8&&f.shift();const L=C&&f.slice(-4,-1).filter(b=>b.heavy).length>=2;if(!(f.filter(b=>b.any).length>=3||C&&(L||g||v))){if(C)return;g=null,v&&A>=v.until&&(v=null,e=kd,p=A+e),!v&&A>=p&&i.r<s.cap()&&f.length>=4&&f.every(b=>!b.any)&&(v={back:t,until:A+4500},f.length=0,T(E()/Od));return}if(f.length=0,v){const b=v.back;v=null,e=Math.min(Math.max(e,Cl)*3,9e5),p=A+e,T(b);return}if(e=Math.max(e,Cl),p=A+e,(!g||_<g.ref*.87)&&(g={from:t,ref:_,tries:0}),g.tries>=4||i.r<=m()){const{from:b}=g;g=null,r=Math.max(r,_),T(b);return}g.tries+=I?2:1,T(E()*(I?qS:Od))}return{get fps(){return d},ratio(A,_){return(A!==i.w||_!==i.h||M(A,_)!==i.r)&&(a=YS,h.length=u=0),i.w=A,i.h=_,i.r=M(A,_),i.r},hold(A){A!==n&&(n=A,g=v=null,f.length=0,M(i.w,i.h)!==i.r&&s.onChange())},frame(A,_){const w=o<0?0:A-o;if(o=A,!_||w<=0||w>250||document.hidden){h.length=u=0,_&&(c=Math.max(c,A+1e3)),l=l&&_;return}if(l||(l=!0,c=Math.max(c,A+KS)),A<c)return;if(a>0){a--;return}h.push(w),w>r*1.4&&u++;const N=h.length;if(N<XS||N<WS&&u<N*.75)return;d=1e3*N/h.reduce((F,b)=>F+b,0),h.sort((F,b)=>F-b);const C=N-Math.ceil(N*.1);let I=0;for(let F=0;F<C;F++)I+=h[F]/C;const L=u;h.length=u=0,r>Rl&&I<r*.7&&(r=Rl),n&&x(A,I,L,N)}}}const Ip="iguaca-settings";function $S(){try{return JSON.parse(localStorage.getItem(Ip)??"{}")}catch{return{}}}function Bd(s){try{localStorage.setItem(Ip,JSON.stringify(s))}catch{}}function JS(s,t={},e=!0){const n=$S(),i={},r=document.createElement("button");r.type="button",r.className="set-btn",r.setAttribute("aria-label","Settings"),r.setAttribute("aria-expanded","false"),r.innerHTML=yn.settings;const o=document.createElement("div");o.className="settings",o.hidden=!0,o.setAttribute("role","dialog"),o.setAttribute("aria-label","Settings");const a=document.createElement("div");a.className="set-head",a.innerHTML="<b>Settings</b>";const l=document.createElement("button");l.type="button",l.className="set-close",l.setAttribute("aria-label","Close settings"),l.innerHTML='<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M3 3l8 8M11 3l-8 8"/></svg>',l.addEventListener("click",()=>v(!1)),a.append(l);const c=document.createElement("div");c.className="set-body",o.append(a,c);let h=null;function u(p,m,M,T,E,x,A,_){const w=p in n&&M(n[p])?n[p]:m,N=p in t?t[p]:w;i[p]=w,A(N),_(N),T.addEventListener(E,()=>{const C=x();i[p]=C,_(C),Bd(i)})}for(const p of s){if(p.kind!=="action"&&(h=null),p.kind==="heading"){const T=document.createElement("h5");T.textContent=p.label,c.append(T);continue}if(p.kind==="action"){const T=document.createElement("button");if(T.type="button",T.className="act",T.textContent=p.label,p.key){const E=document.createElement("kbd");E.textContent=p.key,T.append(E)}T.addEventListener("click",()=>p.run()),h||(h=document.createElement("div"),h.className="acts",c.append(h)),h.append(T);continue}const m=document.createElement("label");m.className=`row ${p.kind}`;const M=document.createElement("span");if(M.textContent=p.label,p.kind==="select"){const T=document.createElement("select");for(const E of p.options)T.append(new Option(E,E));u(p.key,p.value,E=>typeof E=="string"&&p.options.includes(E),T,"change",()=>T.value,E=>T.value=E,p.set),m.append(M,T)}else{const T=document.createElement("input");if(p.kind==="toggle")T.type="checkbox",u(p.key,p.value,E=>typeof E=="boolean",T,"change",()=>T.checked,E=>T.checked=E,p.set);else{T.type="range",T.min=String(p.min),T.max=String(p.max),T.step=String(p.step);const E=document.createElement("output"),x=Math.max(0,-Math.floor(Math.log10(p.step)+1e-9)),A=_=>{E.textContent=_.toFixed(x),T.style.setProperty("--p",`${(_-p.min)/(p.max-p.min)*100}%`)};u(p.key,p.value,_=>typeof _=="number",T,"input",()=>Number(T.value),_=>T.value=String(_),_=>(A(_),p.set(_))),M.append(E)}m.append(M,T)}c.append(m)}const d=document.createElement("button");d.type="button",d.className="reset",d.textContent="Reset to defaults",d.addEventListener("click",()=>{Bd({}),location.reload()});const f=c.querySelectorAll(".row"),g=f[f.length-1];g?g.after(d):c.prepend(d);function v(p){o.hidden=!p,r.classList.toggle("on",p),r.setAttribute("aria-expanded",String(p))}return r.addEventListener("pointerdown",p=>p.stopPropagation()),r.addEventListener("click",()=>v(o.hidden)),o.addEventListener("pointerdown",p=>p.stopPropagation()),o.addEventListener("pointerup",p=>p.stopPropagation()),window.addEventListener("keydown",p=>{p.key==="Escape"&&v(!1)}),e&&document.body.append(r,o),{button:r,panel:o,open:v,isOpen:()=>!o.hidden}}const jS=2.5;function QS(s){let t=null,e=null,n=null,i=null,r=0,o=0,a=!1,l=null,c=null,h=null,u=null,d=null;const f=new Set,g=[];let v=-1,p=null;const m=[];function M(){return l??=fetch(`${s}audio.json`).then(b=>b.ok?b.json():{}).catch(()=>({}))}async function T(b){try{const D=await fetch(s+b);return D.ok?await D.arrayBuffer():null}catch{return null}}async function E(b){if(!t||!b)return null;try{return await t.decodeAudioData(b)}catch{return null}}function x(){return c??=M().then(b=>Promise.all((b.calls??[]).map(T)))}function A(){return h??=x().then(async b=>{for(const D of await Promise.all(b.map(E)))D&&g.push(D)})}function _(){return u??=M().then(async b=>{d=b.forest?.length?await E(await T(b.forest[0])):null,a&&L()})}function w(){t=new AudioContext,e=t.createGain(),e.gain.value=0,e.connect(t.destination),i=t.createGain(),i.connect(e),n=t.createGain(),n.gain.value=.72,n.connect(t.destination);const b=t.sampleRate*3,D=t.createBuffer(1,b,t.sampleRate),U=D.getChannelData(0);let O=0;for(let Y=0;Y<b;Y++)O=O*.97+(Math.random()*2-1)*.03,U[Y]=O*3+(Math.random()*2-1)*.25;const q=t.createBufferSource();q.buffer=D,q.loop=!0;const V=t.createBiquadFilter();V.type="bandpass",V.frequency.value=2600,V.Q.value=.4;const H=t.createGain();H.gain.value=.035,q.connect(V).connect(H).connect(i),q.start();for(let Y=0;Y<7;Y++){const at=Y/6;m.push({pitch:.9+Math.random()*.22,pace:.95+Math.random()*.5,pan:(Math.random()*2-1)*.9,gain:.22*(1-.75*at)*(.7+Math.random()*.5),next:t.currentTime+.3+Math.random()*1.5})}}function N(b,D,U,O,q,V){if(!t)return;const H=t.createOscillator();H.type="sine",H.frequency.setValueAtTime(U,b),H.frequency.exponentialRampToValueAtTime(O,b+D);const Y=t.createGain();Y.gain.setValueAtTime(0,b),Y.gain.linearRampToValueAtTime(q,b+.012),Y.gain.setValueAtTime(q,b+D*.6),Y.gain.exponentialRampToValueAtTime(1e-4,b+D),H.connect(Y).connect(V),H.start(b),H.stop(b+D+.02)}function C(){if(!t||!i||d)return;const b=t.currentTime+.5;for(const D of m)for(;D.next<b;){const U=t.createStereoPanner();U.pan.value=D.pan,U.connect(i);const O=Math.max(D.next,t.currentTime+.01);N(O,.09,1180*D.pitch,1220*D.pitch,D.gain*.7,U),N(O+.21,.16,1900*D.pitch,2300*D.pitch,D.gain,U),D.next+=D.pace*(.92+Math.random()*.16)*(Math.random()<.12?2:1)}}function I(){if(!t||!e||!d||!a)return;const b=Math.min(jS,d.duration/4),D=t.currentTime+.05,U=t.createBufferSource();U.buffer=d;const O=t.createGain();O.gain.setValueAtTime(0,D),O.gain.linearRampToValueAtTime(.8,D+b),O.gain.setValueAtTime(.8,D+d.duration-b),O.gain.linearRampToValueAtTime(0,D+d.duration),U.connect(O).connect(e),U.start(D),U.stop(D+d.duration+.05),f.add(U),U.onended=()=>f.delete(U),o=window.setTimeout(I,(d.duration-b)*1e3)}function L(){if(!(!t||!i))if(window.clearInterval(r),window.clearTimeout(o),d)i.gain.setTargetAtTime(0,t.currentTime,.4),I();else{for(const b of m)b.next=Math.max(b.next,t.currentTime+.2+Math.random()*1.2);C(),r=window.setInterval(C,200)}}function F(){if(!t||!n||g.length===0)return!1;let b=Math.floor(Math.random()*g.length);g.length>1&&b===v&&(b=(b+1)%g.length),v=b;const D=t.currentTime;p&&(p.gain.gain.setTargetAtTime(0,D,.015),p.src.stop(D+.1));const U=t.createBufferSource();U.buffer=g[b],U.playbackRate.value=.96+Math.random()*.08;const O=t.createGain();U.connect(O).connect(n),U.start();const q=p={src:U,gain:O};return U.onended=()=>{p===q&&(p=null)},!0}return{get on(){return a},get loaded(){return{forest:d!==null,calls:g.length}},toggle(){if(t||w(),!t||!e)return!1;a=!a;const b=t.currentTime;if(e.gain.cancelScheduledValues(b),e.gain.setValueAtTime(e.gain.value,b),e.gain.linearRampToValueAtTime(a?.6:0,b+(a?1.2:.4)),window.clearInterval(r),window.clearTimeout(o),!a){for(const D of f)D.stop(b+.45);return f.clear(),a}return t.resume(),L(),A(),_(),a},warm(){x()},call(b=!1){if(!b&&!a||(t||w(),!t))return!1;if(t.resume(),g.length>0)return F();const D=performance.now();return A().then(()=>{performance.now()-D<700&&F()}),!1}}}const Un=document.querySelector("#c"),Ai=new URLSearchParams(location.search),Vr=!Ai.has("nopost"),Ae=Ai.has("gem"),Pe=new xM({canvas:Un,antialias:!Vr,powerPreference:"high-performance"}),Kr=ZS({cap:()=>Math.min(window.devicePixelRatio,Ei?1.5:2),floor:Ei?.75:.6,onChange:()=>$r()});Pe.outputColorSpace=Xe;Pe.toneMappingExposure=1;Pe.shadowMap.enabled=!0;Pe.shadowMap.type=Sr;const Ie=new dh,ne=new Mn(30,1,.02,120);ne.position.set(1.55,.85,3);const De=new MM(ne,Un);De.target.set(Kn-.04,.5,0);De.enableDamping=!0;De.dampingFactor=.06;De.minDistance=1.4;De.maxDistance=4.4;De.minPolarAngle=1.2;De.maxPolarAngle=1.78;De.minAzimuthAngle=-.45;De.maxAzimuthAngle=.85;De.enablePan=!1;De.rotateSpeed=.6;De.touches.ONE=null;const us=gp(Ae?0:1);{const s=new dh,t=gp(Ae?0:1);t.material.uniforms.uEnv.value=1,s.add(t.mesh);const e=new zr(Pe);Ie.environment=e.fromScene(s,.02).texture,Ie.environmentIntensity=1.6,e.dispose()}Ie.add(us.mesh);const Hr=E1();Ie.add(Hr.group);const On=O1();On.use(Hr.group);const zd=document.querySelector(".loading-label span");let si=0,Gr=!1,Bc=!0,ds=Ai.has("drawing");function Rh(s){ds=s,document.body.classList.add("snap"),document.body.classList.toggle("drawing",s),requestAnimationFrame(()=>document.body.classList.remove("snap")),Gr&&!Bc&&(si=s?0:1)}Rh(ds);function Dp(s=!1){s&&(si=1),Gr=!0,document.body.classList.remove("loading"),Ae||Zr.warm()}const Vo=()=>new Promise(s=>requestAnimationFrame(s));async function tb(){const s=Vr?cn.compile:t=>Promise.all(t());try{await s(()=>[Pe.compileAsync(Ie,ne)]),await Vo(),await s(()=>[Pe.compileAsync(na,ne,Ie)]),await Vo();for(const t of Np([Ie,na]))Pe.properties.get(t).programs?.forEach(n=>n.getUniforms());for(const t of eb([Ie,na]))await Vo(),Pe.initTexture(t);await Vo(),us.draw(Pe,ne),Vr&&cn.prerender(Ie,ne)}catch{}Dp()}function Np(s){const t=new Set;for(const e of s)e.traverse(n=>{const i=n.material;if(i)for(const r of Array.isArray(i)?i:[i])t.add(r)});return t}function eb(s){const t=new Set;for(const e of Np(s))for(const n of Object.values(e))n?.isTexture&&!n.isRenderTargetTexture&&t.add(n);return t}const nb=Ai.has("procbranch")?Promise.resolve():A1("./branch.glb",s=>{zd&&s.lengthComputable&&(zd.textContent=`${Math.min(100,Math.round(s.loaded/s.total*100))}%`)}).then(s=>{Ie.remove(Hr.group),mb(Hr.group),Ie.add(s.group),On.use(s.group),Hp(s.group),Yc=s.fuzz,Zp()}).catch(()=>{}),ea=new rg(15659750,3815462,.6);Ie.add(ea);const Ze=new yh(16774374,2.2);Ze.position.set(-1.3,3.6,1.5);Ze.castShadow=!0;Ze.shadow.mapSize.set(2048,2048);Ze.shadow.camera.left=Ze.shadow.camera.bottom=-1.2;Ze.shadow.camera.right=Ze.shadow.camera.top=1.2;Ze.shadow.camera.near=.5;Ze.shadow.camera.far=8;Ze.shadow.bias=-.0015;Ze.shadow.normalBias=.025;Ze.shadow.radius=4;Ze.target.position.set(0,.5,0);Ei&&(Ze.shadow.mapSize.set(1024,1024),Object.assign(Ze.shadow.camera,{left:-.85,right:1.42,bottom:-1,top:1.15}));Ie.add(Ze,Ze.target);const Hs=new yh(15923944,1.4);Hs.position.set(1.5,1.8,-2.5);Hs.target.position.set(0,.5,0);Ie.add(Hs,Hs.target);const Pt=TS(Ae?{species:M1}:{});Ae||(ea.color.set(15003370),ea.groundColor.set(2898474),ea.intensity=.95,Ze.color.set(15988462),Ze.intensity=1.55,Hs.color.set(14873070),Hs.intensity=1);const Zr=QS("./audio/");let zc=!1;function ib(){!Pt.sing(2.2)||Ae||(Zr.call(!0),zc=!0)}window.__sound=Zr;Pt.root.position.x=Kn;Pt.layer("hop").home=Kn;const Ch=new hn;Ch.add(Pt.root);Ie.add(Ch);let Ll=1;const Vd=new y;Pt.mind.on("perch",s=>{On.push(s.x,s.push,s.side),On.load(s.on?s.x:null)});On.load(Kn);On.settle();const Vc=new y,Il=new y;let Dl=!1;function sb(s){(Pt.perched||!Dl)&&Il.copy(ia),Dl||Vc.copy(Il),Dl=!0,Vc.lerp(Il,1-Math.exp(-s*8))}function rb(s){On.update(s),Ll=Cn(Ll,Pt.perched?1:0,25,s),On.at(Pt.root.position.x,Vd),Ch.position.copy(Vd).multiplyScalar(Ll)}const ur=Pt.layer("gaze"),Hd=Pt.billTip.bind(Pt);Ei&&(Pt.feathers.contour.castShadow=!1);const Hc=new ep,ob=new Ht,Fp=new y;let Up=-1e9;const Gd=new En,ci=new y,ab=new y;function lb(s,t){const e=Un.getBoundingClientRect();return ob.set((s-e.left)/e.width*2-1,-((t-e.top)/e.height)*2+1)}const Wd=new y,Xd=new ve;function Ph(s,t){Wd.copy(ne.position),Xd.copy(ne.quaternion);const e=Qp();return e&&ne.updateMatrixWorld(),Hc.setFromCamera(lb(s,t),ne),e&&(ne.position.copy(Wd),ne.quaternion.copy(Xd),ne.updateMatrixWorld()),Hc.ray}function Op(s,t,e,n){return Ph(s,t),ne.getWorldDirection(ci).negate(),Gd.setFromNormalAndCoplanarPoint(ci,ab.set(Pt.root.position.x,.8,0).addScaledVector(ci,e)),Hc.ray.intersectPlane(Gd,n)}const qd=new y;let xa=!1;function cb(s){if(Pt.away||Pt.fleeing)return!1;Pt.headPosition(qd).y-=.05;const t=xa?.46:.4;return s.distanceSqToPoint(qd)<t*t}const ui=kS(Ie,Ae?"pappus":"fruit"),Zn=BS(Ie,()=>Pt.root.getWorldPosition(new y).add(new y(0,.85,0)),Ae);Pt.onPick=s=>Zn.owns(s)?Zn.pick(s):ui.pick(s);Pt.onSwallow=s=>Zn.owns(s)?Zn.swallowed(s):ui.swallowed(s);Pt.mind.on("strike",()=>Zn.strike());const qi=VS({scene:Ie,camera:ne,renderer:Pe,center:new y(Kn,.55,0),dof:()=>cn.dof,passSeed:Ae?(s,t)=>ui.spawn(s,t):void 0,flies:Ae}),na=new hn;na.add(...ui.warm,...Zn.warm,...qi.warm);let Ho=-1;const Yd=new y;function kp(){Math.random()<.5?Zn.spawn():qi.flyBy()}const Kd=new y,Nl=new y;Pt.mind.on("ruffle",s=>{if(s.kind==="throat"||Pt.away)return;const t=Math.atan2(ne.position.x-Pt.root.position.x,ne.position.z-Pt.root.position.z)+(Math.random()<.5?-1:1)*(.9+Math.random()*.6);Nl.set(Math.sin(t),0,Math.cos(t)),Pt.root.getWorldPosition(Kd).addScaledVector(Nl,.16).y+=.22+Math.random()*.2,qi.shed(Kd,Nl,Math.random()<.45)});const Go=[];function Zd(s,t){for(let e=0;e<t.length;e++)s.push(t[e])}const $d=new y;let Bp=0,zp=0,Vp=0;Un.addEventListener("pointerdown",s=>{Bp=performance.now(),zp=s.clientX,Vp=s.clientY});const is=new y,dr=new y,Jd=new y,hb=3;let jd=0;function ub(s){if(Pt.away||Pt.fleeing)return;const t=performance.now()/1e3;if(t<jd||(Pt.root.getWorldPosition(is),dr.copy(is),is.x-=.06,dr.x+=.06,is.y=dr.y=is.y+.02,s.distanceSqToSegment(is,dr,void 0,Jd)>.07*.07))return;const e=Jd.x<(is.x+dr.x)/2?1:-1,n=.12+Math.random()*.1;(Pt.hopBy(e*n)||Pt.hopBy(-e*n))&&(jd=t+hb)}const Qd=new En,Fl=new y,Ul=new y,tf=new y,db=new y;let Wo=-1;function fb(s){const t=performance.now();if(!On.reach(s,Fl))return void(Wo=-1);if(ne.getWorldDirection(ci).negate(),Qd.setFromNormalAndCoplanarPoint(ci,Fl),!s.intersectPlane(Qd,Ul))return;const e=(t-Wo)/1e3;Wo>0&&e<.1&&On.brush(Fl,db.copy(Ul).sub(tf).divideScalar(Math.max(e,1/240)),e),tf.copy(Ul),Wo=t}window.addEventListener("pointermove",s=>{document.body.classList.toggle("near",s.clientX>window.innerWidth-140&&s.clientY<120);const t=s.target===Un,e=Ph(s.clientX,s.clientY),n=t&&cb(e);n&&!xa&&!Pt.singing&&Pt.sing(1.6),xa=n,t&&(ub(e),fb(e)),!n&&Op(s.clientX,s.clientY,.8,Fp)&&(Up=performance.now())});const ef=new y,nf=new y;function pb(s,t){return Pt.away?!1:(Pt.root.getWorldPosition(ef).y+=.25,Pt.headPosition(nf),Ph(s,t).distanceSqToSegment(ef,nf)<.22*.22)}const sf=document.querySelector(".fs"),Lh=s=>document.body.classList.toggle("clean",s);Ai.has("clean")&&Lh(!0);sf?.addEventListener("click",async()=>{const s=!document.body.classList.contains("clean");Lh(s);try{s&&!document.fullscreenElement&&await document.documentElement.requestFullscreen?.(),!s&&document.fullscreenElement&&await document.exitFullscreen()}catch{}sf.blur()});document.addEventListener("fullscreenchange",()=>{document.body.classList.toggle("fullscreen",!!document.fullscreenElement),document.fullscreenElement||Lh(!1)});Un.addEventListener("pointerup",s=>{if(Wr.isOpen())return Wr.open(!1);Jp.swallows(s)||performance.now()-Bp<250&&Math.hypot(s.clientX-zp,s.clientY-Vp)<6&&(Ae&&Ei&&pb(s.clientX,s.clientY)?Ih():Op(s.clientX,s.clientY,.6,$d)&&ui.spawn($d))});const cn=DS(Pe,{samples:4}),ia=new y;{const s=cn.grade;s.uWhite.value.set(1,1,1.04),Ae?s.uLift.value.set(.015,.005,.022):s.uLift.value.set(.012,.017,.015),s.uGamma.value.set(1,1.04,1),s.uVignette.value=.22}function Hp(s){Pt.setPerch(b1(s),Sp)}function mb(s){s.traverse(t=>{const e=t;if(e.isMesh){e.geometry.dispose();for(const n of Array.isArray(e.material)?e.material:[e.material])n.dispose()}})}Hp(Hr.group);let Ol=0,xr=1,Gc=0;const Wc=Pt.plumage.uPal.value.map(s=>s.clone());let Gp=Pp(kc[0]);function Ih(){Ol=(Ol+1)%kc.length,Pt.ruffle("throat",.25),Pt.plumage.uPal.value.forEach((s,t)=>Wc[t].copy(s)),Gp=Pp(kc[Ol]),Gc=.05,xr=0}function gb(s){if(xr>=1)return;if(Gc>0){Gc-=s;return}xr=Math.min(1,xr+s/.55);const t=tn.smoothstep(xr,0,1);Pt.plumage.uPal.value.forEach((e,n)=>{for(let i=0;i<9;i++)e.elements[i]=Wc[n].elements[i]+(Gp[n].elements[i]-Wc[n].elements[i])*t})}const _b=[-.45,.85],vb=[Math.PI-.6,-Math.PI+.55];let yr=!1,ki=-1,Ar=0,Wp=0;const Rr=new Dc,Cr=new y;function xb(){if(ki>=0)return;yr=!yr,Cr.copy(ne.position).sub(De.target),Rr.setFromVector3(Cr),Ar=Rr.theta;const s=yr?Math.PI+.35:.41,t=tn.euclideanModulo(s-Ar,Math.PI*2);Wp=Ar+(yr?t-Math.PI*2:t),De.minAzimuthAngle=-1/0,De.maxAzimuthAngle=1/0,ki=0}function yb(s){ki<0||(ki=Math.min(1,ki+s/1.6),Cr.copy(ne.position).sub(De.target),Rr.setFromVector3(Cr),Rr.theta=Ar+(Wp-Ar)*tn.smootherstep(ki,0,1),ne.position.copy(De.target).add(Cr.setFromSpherical(Rr)),ki===1&&(ki=-1,[De.minAzimuthAngle,De.maxAzimuthAngle]=yr?vb:_b))}Pe.localClippingEnabled=!0;let La=!1;const Xp=new En,Xc=new En,Xo=new y,kl=new y,rf=new y,Mb=new Xn({color:15660008,wireframe:!0,transparent:!0,opacity:.8,clippingPlanes:[Xc]}),qp=["bird.skin","bird.bare","bird.bill","bird.eyes","bird.nict"].map(s=>Pt.root.getObjectByName(s)).filter(s=>!!s),Sb=qp.map(s=>s.material),of=Pt.feathers.contour.material;function Yp(s){La=s,of.clippingPlanes=s?[Xp]:null,of.needsUpdate=!0,qp.forEach((t,e)=>t.material=s?Mb:Sb[e])}function bb(){La&&(Pt.rig.bones.neck2.getWorldPosition(Xo),Pt.rig.bones.head.getWorldPosition(kl),rf.copy(kl).sub(Xo).normalize(),Xo.lerp(kl,.35),Xc.setFromNormalAndCoplanarPoint(rf,Xo),Xp.copy(Xc).negate())}let Kp=!0,af=!1,Dh=0,qc=!0,Yc=null;const wb=!Ai.has("nofuzz")&&!Ai.has("skin");function Zp(){Pt.feathers.fuzz.visible=qc&&wb,Yc&&(Yc.visible=qc)}const Tb=Pt.plumage.uFlash.value,Eb=Pt.plumage.uGlint.value,$p=()=>{ne.getWorldDirection(ci).negate();const s=new y().crossVectors(ci,ne.up).normalize();return new y(Pt.root.position.x,.95+Math.random()*.2,0).addScaledVector(ci,Ae?.6:.48).addScaledVector(s,(Math.random()-.5)*(Ae?.5:.4))},Ab=()=>(Pt.headPosition(lf),ne.getWorldDirection(ci).negate(),lf.addScaledVector(ci,.24).add(new y(0,-.06,0))),lf=new y,Bl=[[.4,()=>Pt.ruffle("shake")],[3,()=>Zn.spawn(Ab(),!0)],[10.5,()=>Pt.sing(2.2)],[13.5,()=>Pt.lick(.65,3)],[15,()=>Pt.hopBy(.26)],[17.5,()=>Pt.sing(1.6)],[20,()=>qi.flyBy(!0)],[22.5,()=>Pt.hopTo(Kn)],[24.5,()=>ui.spawn($p())],[30,()=>!Pt.busy&&(Pt.ruffle("puff",.6),!0)],[32,()=>Pt.sing(1.4)]],Rb=35;let Vi=-1,Mr=0;function Nh(s){Vi=s?0:-1,Mr=0,document.body.classList.toggle("demo",s)}function Cb(s){if(!(Vi<0)){for(Vi+=s;Mr<Bl.length&&Vi>=Bl[Mr][0];){const[t,e]=Bl[Mr];if(e()===!1&&Vi-t<4)break;Mr++}Vi>Rb&&Nh(!1)}}const cf={Neutral:Qc,AgX:jc,ACES:Jc,Reinhard:$c,None:ai},Wr=JS([{kind:"heading",label:"Camera"},{kind:"range",key:"shake",label:"Handheld",value:2.05,min:0,max:3.5,step:.05,set:s=>Dh=s},{kind:"range",key:"dof",label:"Depth of field",value:85,min:0,max:260,step:5,set:s=>cn.dof.uAperture.value=s},{kind:"range",key:"exposure",label:"Exposure",value:1.15,min:.8,max:2.4,step:.05,set:s=>cn.grade.uExposure.value=s},{kind:"toggle",key:"smooth",label:"Hold 60 fps",value:!0,set:s=>Kr.hold(s)},{kind:"heading",label:"Look"},{kind:"select",key:"tonemap",label:"Tone mapping",value:"Neutral",options:Object.keys(cf),set:s=>cn.setToneMapping(cf[s])},{kind:"range",key:"contrast",label:"Contrast",value:.87,min:.6,max:1.4,step:.01,set:s=>cn.grade.uContrast.value=s},{kind:"range",key:"sat",label:"Saturation",value:.97,min:.3,max:1.4,step:.01,set:s=>cn.grade.uSat.value=s},{kind:"heading",label:"Bird"},{kind:"toggle",key:"follow",label:"Follows the pointer",value:!0,set:s=>Kp=s},{kind:"range",key:"mood",label:"Calm · alert",value:.32,min:0,max:1,step:.01,set:s=>Pt.mind.baseline=s},{kind:"range",key:"flash",label:Ae?"Gorget flash":"Feather sheen",value:1,min:0,max:2,step:.05,set:s=>{Pt.plumage.uFlash.value=Tb*s,Pt.plumage.uGlint.value=Eb*s}},{kind:"toggle",key:"fuzz",label:"Down and felt",value:!0,set:s=>{qc=s,Zp()}},{kind:"range",key:"give",label:"Twig give",value:1,min:0,max:3,step:.05,set:s=>On.give=s},{kind:"heading",label:"Workbench"},{kind:"action",label:"Demo",key:"D",run:()=>Nh(Vi<0)},{kind:"action",label:"Pause",key:"P",run:()=>jp(!os)},{kind:"action",label:"Drawing",key:"W",run:()=>Rh(!ds)},{kind:"action",label:"Head wire",key:"H",run:()=>Yp(!La)}],Ai.has("still")?{shake:0}:{}),Jp=GS([{id:"food",label:Ae?"Drop a seed":"Offer a fruit",icon:Ae?yn.food:yn.fruit,run:()=>ui.spawn($p())},Ae?{id:"gnat",label:"Let a bug in",key:"G",icon:yn.gnat,run:kp}:{id:"sound",label:"Forest sound",icon:yn.sound,run:()=>{Zr.toggle()}},{id:"sing",label:Ae?"Sing":"Call",icon:yn.sing,run:ib},{id:"ruffle",label:"Ruffle",key:"R",icon:yn.ruffle,run:()=>Pt.ruffle("shake")},...Ae?[]:[{id:"stretch",label:"Stretch",key:"S",icon:yn.fly,run:()=>Pt.stretch()}],{id:"fly",label:"Fly off",key:"F",icon:Ae?yn.fly:yn.away,run:()=>Pt.flee()},...Ae?[{id:"palette",label:"Color",key:"C",icon:yn.palette,run:Ih}]:[]],Ae?yn.bird:yn.parrot);Jp.root.addEventListener("pointerdown",()=>Wr.open(!1),!0);const Pb={KeyF:()=>Pt.flee(),...Ae?{}:{KeyS:()=>Pt.stretch()},KeyR:()=>Pt.ruffle("shake"),KeyB:xb,...Ae?{KeyC:Ih}:{},...Ae?{KeyG:kp}:{},KeyD:()=>Nh(Vi<0),KeyH:()=>Yp(!La),KeyP:()=>jp(!os),KeyW:()=>Rh(!ds)};window.addEventListener("keydown",s=>{if(s.repeat)return;const t=s.target instanceof HTMLElement?s.target:null;if(!(t instanceof HTMLInputElement?t.type!=="range"&&t.type!=="checkbox":t?.closest("select, textarea, [contenteditable]")))if(s.code==="Space"){if(t?.closest("button, a, input"))return;s.preventDefault(),Pt.startle(1)}else!s.metaKey&&!s.ctrlKey&&Pb[s.code]?.()});function $r(){const s=Un.clientWidth||window.innerWidth,t=Un.clientHeight||window.innerHeight;Pe.setPixelRatio(Kr.ratio(s,t)),Pe.setSize(s,t,!1),cn.setSize(s,t,Pe.getPixelRatio()),ne.aspect=s/t,ne.fov=s/t<1?30/Math.max(s/t,.55):30,ne.updateProjectionMatrix()}window.addEventListener("resize",$r);new ResizeObserver($r).observe(Un);$r();(function s(){matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`).addEventListener("change",()=>{$r(),s()},{once:!0})})();const Lb=matchMedia("(max-width: 640px)");let qo=0;function Ib(s){const t=Wr.isOpen()&&Lb.matches?Wr.panel.offsetHeight*.5:0;if(qo=Cn(qo,t,9,s),qo>.5){const e=Un.clientWidth||window.innerWidth,n=Un.clientHeight||window.innerHeight;ne.setViewOffset(e,n,0,qo,e,n)}else ne.view?.enabled&&ne.clearViewOffset()}const ya=Ai.has("fps")?document.body.appendChild(document.createElement("div")):null;ya&&(ya.style.cssText="position:fixed;left:12px;bottom:12px;z-index:9;padding:4px 8px;border-radius:6px;background:rgba(0,0,0,.55);color:#fff;font:12px/1.4 ui-monospace,Menlo,monospace;pointer-events:none");let hf=0;function Db(s){!ya||s<hf||(hf=s+500,ya.textContent=`${Kr.fps.toFixed(0)} fps · ×${Pe.getPixelRatio().toFixed(2)}`)}nb.then(()=>requestAnimationFrame(()=>tb()));Vr||Dp(!0);let os=!1;function jp(s){os=s,document.body.classList.toggle("paused",s)}const sa=new fg;sa.connect(document);let Bi=0;Pe.setAnimationLoop(s=>{sa.update(s),Kr.frame(s,Gr&&si===1&&!ds);const t=os?0:Math.min(sa.getDelta(),1/20);os&&sa.getDelta(),Bi+=t,yb(os?1/60:t),Ib(os?1/60:t),De.update(),us.material.uniforms.uTime.value=Bi,us.mesh.position.copy(ne.position);const e=Kp&&!xa&&performance.now()-Up<300;af&&!e&&ur.moveOn(Pt.mind),af=e,ur.interest=e?.95:.35,ur.billOn=e?.8:.46,ur.pursuit=e?1:0;let n=e?null:qi.flyNear(ia,1.1);if(n&&t>0){const r=Yd.distanceTo(n)/t>.1;Yd.copy(n),r||(n=null)}n?Ho<0&&(Ho=Bi):Ho=-1;const i=n&&Bi-Ho<.8?n:null;i&&(ur.interest=.95),Pt.setAttention(e?Fp:i??ne.position),oa.lerp(rs?Fh:Ob,1-Math.exp(-t*6)),Gr&&Bc&&!ds&&(si=Math.min(1,si+t/1.6),si===1&&(Bc=!1)),si===1&&Kc&&(Kc=!1,cn.endDrawing(),e0.dispose()),gb(t),Go.length=0,Zd(Go,ui.food()),Zd(Go,Zn.food()),Pt.setFood(Go),rb(t),Pt.update(t),!Ae&&Pt.singing&&!zc&&Zr.call(),zc=Pt.singing,Pt.headPosition(ia),sb(t),bb(),ui.update(t,Bi,Hd,ia),Zn.update(t,Bi,Hd),qi.update(t),Cb(t),t0(),Db(s)});const Nb=new ve,Fb=new Yn,uf=new ve;let df=3;const Yo=new Ht;function fr(s,t,e){return Math.sin(s*t+e)*.6+Math.sin(s*t*2.31+e*1.7)*.3+Math.sin(s*t*5.13+e*2.9)*.1}function Ub(s,t){s>df&&(Yo.set((Math.random()-.5)*.12,(Math.random()-.5)*.09),df=s+4+Math.random()*9),Yo.multiplyScalar(Math.exp(-.016666666666666666*5));const e=Dh*tn.DEG2RAD,n=(fr(s,.35,1.3)*.16+fr(s,7.3,4.1)*.018+Yo.x)*e,i=(fr(s,.27,2.7)*.12+fr(s,8.1,5.9)*.016+Yo.y)*e,r=fr(s,.22,.4)*.1*e;return Fb.set(i,n,r,"YXZ")}const zl=document.querySelector(".gyro");Ei&&document.body.classList.add("touch");let rs=!1,ra=null;const Fh=new Ht,oa=new Ht,Ob=new Ht;function ff(s){if(s.beta===null||s.gamma===null)return;const t=screen.orientation?.angle??0,[e,n]=t===90?[s.beta,-s.gamma]:t===270?[-s.beta,s.gamma]:t===180?[-s.gamma,-s.beta]:[s.gamma,s.beta];ra??={x:e,y:n};const i=tn.DEG2RAD;Fh.set(tn.clamp((e-ra.x)*.5,-12,12)*i,tn.clamp((n-ra.y)*.4,-8,8)*i)}zl?.addEventListener("click",async()=>{if(rs)window.removeEventListener("deviceorientation",ff),rs=!1;else{const s=DeviceOrientationEvent.requestPermission;if(s)try{if(await s()!=="granted")return}catch{return}ra=null,window.addEventListener("deviceorientation",ff),rs=!0}rs||Fh.set(0,0),zl.classList.toggle("on",rs),zl.setAttribute("aria-pressed",String(rs))});const pf=new y,pr=new y,mf=new y;function Qp(){return oa.lengthSq()<=1e-8?!1:(pr.copy(ne.position).sub(De.target),pr.applyAxisAngle(ne.up,-oa.x),mf.crossVectors(ne.up,pr).normalize(),pr.applyAxisAngle(mf,oa.y),ne.position.copy(De.target).add(pr),ne.lookAt(De.target),!0)}function t0(){pf.copy(ne.position),uf.copy(ne.quaternion),Qp(),Dh>0&&ne.quaternion.multiply(Nb.setFromEuler(Ub(Bi))),ne.updateMatrixWorld(),Bb(),ne.position.copy(pf),ne.quaternion.copy(uf),ne.updateMatrixWorld()}const e0=new Xn({color:16777215,wireframe:!0}),gf=[us.mesh,qi.group,Pt.feathers.contour,Pt.feathers.flight,Pt.feathers.fuzz],_f=[];let Kc=!0;function kb(){Kc=!0,gf.forEach((s,t)=>{_f[t]=s.visible,s.visible=!1}),Ie.overrideMaterial=e0,Pe.render(Ie,ne),Ie.overrideMaterial=null,gf.forEach((s,t)=>s.visible=_f[t])}let vf=!0;function Bb(){if(vf&&(vf=!1,Un.classList.remove("pending")),!Vr)return us.draw(Pe,ne),Pe.render(Ie,ne);cn.focusOn(Vc),cn.grade.uReveal.value=tn.smoothstep(si,0,1),cn.grade.uReveal.value>0&&us.draw(Pe,ne),cn.render(Ie,ne,Bi,Gr&&si===1?null:kb),Uh&&si===1&&!ds&&Vb()}let Uh=!0,Ko=new Uint8Array(4),Vl=null,Hl=null;const zb=document.querySelector('meta[name="theme-color"]');function Vb(){if(Hl)return;Uh=!1;const s=Pe.getContext();Pe.setRenderTarget(null);const t=s.drawingBufferWidth;Ko.length!==t*4&&(Ko=new Uint8Array(t*4)),Vl??=s.createBuffer(),s.bindBuffer(s.PIXEL_PACK_BUFFER,Vl),s.bufferData(s.PIXEL_PACK_BUFFER,Ko.byteLength,s.STREAM_READ),s.readPixels(0,1,t,1,s.RGBA,s.UNSIGNED_BYTE,0),s.bindBuffer(s.PIXEL_PACK_BUFFER,null);const e=s.fenceSync(s.SYNC_GPU_COMMANDS_COMPLETE,0);if(!e)return;Hl=e,s.flush();const n=Ko,i=()=>{const r=s.clientWaitSync(e,0,0);if(r===s.TIMEOUT_EXPIRED)return void setTimeout(i,8);s.deleteSync(e),Hl=null,r!==s.WAIT_FAILED&&(s.bindBuffer(s.PIXEL_PACK_BUFFER,Vl),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,n),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),Hb(n,t))};setTimeout(i,8)}function Hb(s,t){let e=0,n=0,i=0;const r=9;for(let a=0;a<r;a++){const l=Math.round((a+.5)/r*(t-1))*4;e+=s[l],n+=s[l+1],i+=s[l+2]}const o=`rgb(${Math.round(e/r)}, ${Math.round(n/r)}, ${Math.round(i/r)})`;document.documentElement.style.background=o,zb?.setAttribute("content",o)}let xf=0;window.addEventListener("resize",()=>{clearTimeout(xf),xf=window.setTimeout(()=>Uh=!0,400)});Object.assign(window,{__scene:Ie,__camera:ne,__renderer:Pe,__pace:Kr,__controls:De,__post:cn,__frame:t0,__seeds:ui,__insects:Zn,__ambient:qi,__sway:On});
