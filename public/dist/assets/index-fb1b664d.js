(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Sh(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Rh(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Je(s)?KT(s):Rh(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Je(t))return t;if(De(t))return t}}const qT=/;(?![^(]*\))/g,HT=/:([^]+)/,WT=/\/\*.*?\*\//gs;function KT(t){const e={};return t.replace(WT,"").split(qT).forEach(n=>{if(n){const s=n.split(HT);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function kh(t){let e="";if(Je(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const s=kh(t[n]);s&&(e+=s+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const zT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",GT=Sh(zT);function Mm(t){return!!t||t===""}function QT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=vl(t[s],e[s]);return n}function vl(t,e){if(t===e)return!0;let n=Uf(t),s=Uf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=$r(t),s=$r(e),n||s)return t===e;if(n=Q(t),s=Q(e),n||s)return n&&s?QT(t,e):!1;if(n=De(t),s=De(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!vl(t[o],e[o]))return!1}}return String(t)===String(e)}function YT(t,e){return t.findIndex(n=>vl(n,e))}const Nt=t=>Je(t)?t:t==null?"":Q(t)||De(t)&&(t.toString===Um||!se(t.toString))?JSON.stringify(t,Lm,2):String(t),Lm=(t,e)=>e&&e.__v_isRef?Lm(t,e.value):yi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:El(e)?{[`Set(${e.size})`]:[...e.values()]}:De(e)&&!Q(e)&&!$m(e)?String(e):e,Pe={},_i=[],an=()=>{},XT=()=>!1,JT=/^on[^a-z]/,wl=t=>JT.test(t),Ah=t=>t.startsWith("onUpdate:"),Tt=Object.assign,Nh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ZT=Object.prototype.hasOwnProperty,pe=(t,e)=>ZT.call(t,e),Q=Array.isArray,yi=t=>go(t)==="[object Map]",El=t=>go(t)==="[object Set]",Uf=t=>go(t)==="[object Date]",se=t=>typeof t=="function",Je=t=>typeof t=="string",$r=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Fm=t=>De(t)&&se(t.then)&&se(t.catch),Um=Object.prototype.toString,go=t=>Um.call(t),eb=t=>go(t).slice(8,-1),$m=t=>go(t)==="[object Object]",Oh=t=>Je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ga=Sh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},tb=/-(\w)/g,Ri=Tl(t=>t.replace(tb,(e,n)=>n?n.toUpperCase():"")),nb=/\B([A-Z])/g,Hi=Tl(t=>t.replace(nb,"-$1").toLowerCase()),Vm=Tl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cc=Tl(t=>t?`on${Vm(t)}`:""),Vr=(t,e)=>!Object.is(t,e),ma=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Na=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Br=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $f;const sb=()=>$f||($f=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Mt;class Bm{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Mt,!e&&Mt&&(this.index=(Mt.scopes||(Mt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Mt;try{return Mt=this,e()}finally{Mt=n}}}on(){Mt=this}off(){Mt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function ib(t){return new Bm(t)}function rb(t,e=Mt){e&&e.active&&e.effects.push(t)}function ob(){return Mt}function ab(t){Mt&&Mt.cleanups.push(t)}const Dh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},jm=t=>(t.w&us)>0,qm=t=>(t.n&us)>0,lb=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=us},cb=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];jm(i)&&!qm(i)?i.delete(t):e[n++]=i,i.w&=~us,i.n&=~us}e.length=n}},lu=new WeakMap;let mr=0,us=1;const cu=30;let nn;const Fs=Symbol(""),uu=Symbol("");class xh{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,rb(this,s)}run(){if(!this.active)return this.fn();let e=nn,n=is;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=nn,nn=this,is=!0,us=1<<++mr,mr<=cu?lb(this):Vf(this),this.fn()}finally{mr<=cu&&cb(this),us=1<<--mr,nn=this.parent,is=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){nn===this?this.deferStop=!0:this.active&&(Vf(this),this.onStop&&this.onStop(),this.active=!1)}}function Vf(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let is=!0;const Hm=[];function Wi(){Hm.push(is),is=!1}function Ki(){const t=Hm.pop();is=t===void 0?!0:t}function Bt(t,e,n){if(is&&nn){let s=lu.get(t);s||lu.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Dh()),Wm(i)}}function Wm(t,e){let n=!1;mr<=cu?qm(t)||(t.n|=us,n=!jm(t)):n=!t.has(nn),n&&(t.add(nn),nn.deps.push(t))}function Bn(t,e,n,s,i,r){const o=lu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t)){const l=Br(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?Oh(n)&&a.push(o.get("length")):(a.push(o.get(Fs)),yi(t)&&a.push(o.get(uu)));break;case"delete":Q(t)||(a.push(o.get(Fs)),yi(t)&&a.push(o.get(uu)));break;case"set":yi(t)&&a.push(o.get(Fs));break}if(a.length===1)a[0]&&hu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);hu(Dh(l))}}function hu(t,e){const n=Q(t)?t:[...t];for(const s of n)s.computed&&Bf(s);for(const s of n)s.computed||Bf(s)}function Bf(t,e){(t!==nn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ub=Sh("__proto__,__v_isRef,__isVue"),Km=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($r)),hb=Ph(),db=Ph(!1,!0),fb=Ph(!0),jf=pb();function pb(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ye(this);for(let r=0,o=this.length;r<o;r++)Bt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ye)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Wi();const s=ye(this)[e].apply(this,n);return Ki(),s}}),t}function Ph(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Nb:Xm:e?Ym:Qm).get(s))return s;const o=Q(s);if(!t&&o&&pe(jf,i))return Reflect.get(jf,i,r);const a=Reflect.get(s,i,r);return($r(i)?Km.has(i):ub(i))||(t||Bt(s,"get",i),e)?a:re(a)?o&&Oh(i)?a:a.value:De(a)?t?Jm(a):mo(a):a}}const gb=zm(),mb=zm(!0);function zm(t=!1){return function(n,s,i,r){let o=n[s];if(ki(o)&&re(o)&&!re(i))return!1;if(!t&&(!Oa(i)&&!ki(i)&&(o=ye(o),i=ye(i)),!Q(n)&&re(o)&&!re(i)))return o.value=i,!0;const a=Q(n)&&Oh(s)?Number(s)<n.length:pe(n,s),l=Reflect.set(n,s,i,r);return n===ye(r)&&(a?Vr(i,o)&&Bn(n,"set",s,i):Bn(n,"add",s,i)),l}}function _b(t,e){const n=pe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Bn(t,"delete",e,void 0),s}function yb(t,e){const n=Reflect.has(t,e);return(!$r(e)||!Km.has(e))&&Bt(t,"has",e),n}function vb(t){return Bt(t,"iterate",Q(t)?"length":Fs),Reflect.ownKeys(t)}const Gm={get:hb,set:gb,deleteProperty:_b,has:yb,ownKeys:vb},wb={get:fb,set(t,e){return!0},deleteProperty(t,e){return!0}},Eb=Tt({},Gm,{get:db,set:mb}),Mh=t=>t,bl=t=>Reflect.getPrototypeOf(t);function Qo(t,e,n=!1,s=!1){t=t.__v_raw;const i=ye(t),r=ye(e);n||(e!==r&&Bt(i,"get",e),Bt(i,"get",r));const{has:o}=bl(i),a=s?Mh:n?Uh:jr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Yo(t,e=!1){const n=this.__v_raw,s=ye(n),i=ye(t);return e||(t!==i&&Bt(s,"has",t),Bt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Xo(t,e=!1){return t=t.__v_raw,!e&&Bt(ye(t),"iterate",Fs),Reflect.get(t,"size",t)}function qf(t){t=ye(t);const e=ye(this);return bl(e).has.call(e,t)||(e.add(t),Bn(e,"add",t,t)),this}function Hf(t,e){e=ye(e);const n=ye(this),{has:s,get:i}=bl(n);let r=s.call(n,t);r||(t=ye(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Vr(e,o)&&Bn(n,"set",t,e):Bn(n,"add",t,e),this}function Wf(t){const e=ye(this),{has:n,get:s}=bl(e);let i=n.call(e,t);i||(t=ye(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Bn(e,"delete",t,void 0),r}function Kf(){const t=ye(this),e=t.size!==0,n=t.clear();return e&&Bn(t,"clear",void 0,void 0),n}function Jo(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ye(o),l=e?Mh:t?Uh:jr;return!t&&Bt(a,"iterate",Fs),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function Zo(t,e,n){return function(...s){const i=this.__v_raw,r=ye(i),o=yi(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Mh:e?Uh:jr;return!e&&Bt(r,"iterate",l?uu:Fs),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Qn(t){return function(...e){return t==="delete"?!1:this}}function Tb(){const t={get(r){return Qo(this,r)},get size(){return Xo(this)},has:Yo,add:qf,set:Hf,delete:Wf,clear:Kf,forEach:Jo(!1,!1)},e={get(r){return Qo(this,r,!1,!0)},get size(){return Xo(this)},has:Yo,add:qf,set:Hf,delete:Wf,clear:Kf,forEach:Jo(!1,!0)},n={get(r){return Qo(this,r,!0)},get size(){return Xo(this,!0)},has(r){return Yo.call(this,r,!0)},add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear"),forEach:Jo(!0,!1)},s={get(r){return Qo(this,r,!0,!0)},get size(){return Xo(this,!0)},has(r){return Yo.call(this,r,!0)},add:Qn("add"),set:Qn("set"),delete:Qn("delete"),clear:Qn("clear"),forEach:Jo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Zo(r,!1,!1),n[r]=Zo(r,!0,!1),e[r]=Zo(r,!1,!0),s[r]=Zo(r,!0,!0)}),[t,n,e,s]}const[bb,Ib,Cb,Sb]=Tb();function Lh(t,e){const n=e?t?Sb:Cb:t?Ib:bb;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(pe(n,i)&&i in s?n:s,i,r)}const Rb={get:Lh(!1,!1)},kb={get:Lh(!1,!0)},Ab={get:Lh(!0,!1)},Qm=new WeakMap,Ym=new WeakMap,Xm=new WeakMap,Nb=new WeakMap;function Ob(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Db(t){return t.__v_skip||!Object.isExtensible(t)?0:Ob(eb(t))}function mo(t){return ki(t)?t:Fh(t,!1,Gm,Rb,Qm)}function xb(t){return Fh(t,!1,Eb,kb,Ym)}function Jm(t){return Fh(t,!0,wb,Ab,Xm)}function Fh(t,e,n,s,i){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Db(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function vi(t){return ki(t)?vi(t.__v_raw):!!(t&&t.__v_isReactive)}function ki(t){return!!(t&&t.__v_isReadonly)}function Oa(t){return!!(t&&t.__v_isShallow)}function Zm(t){return vi(t)||ki(t)}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function e_(t){return Na(t,"__v_skip",!0),t}const jr=t=>De(t)?mo(t):t,Uh=t=>De(t)?Jm(t):t;function t_(t){is&&nn&&(t=ye(t),Wm(t.dep||(t.dep=Dh())))}function n_(t,e){t=ye(t),t.dep&&hu(t.dep)}function re(t){return!!(t&&t.__v_isRef===!0)}function G(t){return i_(t,!1)}function s_(t){return i_(t,!0)}function i_(t,e){return re(t)?t:new Pb(t,e)}class Pb{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ye(e),this._value=n?e:jr(e)}get value(){return t_(this),this._value}set value(e){const n=this.__v_isShallow||Oa(e)||ki(e);e=n?e:ye(e),Vr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:jr(e),n_(this))}}function F(t){return re(t)?t.value:t}const Mb={get:(t,e,n)=>F(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return re(i)&&!re(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function r_(t){return vi(t)?t:new Proxy(t,Mb)}var o_;class Lb{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[o_]=!1,this._dirty=!0,this.effect=new xh(e,()=>{this._dirty||(this._dirty=!0,n_(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ye(this);return t_(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}o_="__v_isReadonly";function Fb(t,e,n=!1){let s,i;const r=se(t);return r?(s=t,i=an):(s=t.get,i=t.set),new Lb(s,i,r||!i,n)}function rs(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Il(r,e,n)}return i}function zt(t,e,n,s){if(se(t)){const r=rs(t,e,n,s);return r&&Fm(r)&&r.catch(o=>{Il(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(zt(t[r],e,n,s));return i}function Il(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){rs(l,null,10,[t,o,a]);return}}Ub(t,n,i,s)}function Ub(t,e,n,s=!0){console.error(t)}let qr=!1,du=!1;const mt=[];let yn=0;const wi=[];let Dn=null,Rs=0;const a_=Promise.resolve();let $h=null;function l_(t){const e=$h||a_;return t?e.then(this?t.bind(this):t):e}function $b(t){let e=yn+1,n=mt.length;for(;e<n;){const s=e+n>>>1;Hr(mt[s])<t?e=s+1:n=s}return e}function Vh(t){(!mt.length||!mt.includes(t,qr&&t.allowRecurse?yn+1:yn))&&(t.id==null?mt.push(t):mt.splice($b(t.id),0,t),c_())}function c_(){!qr&&!du&&(du=!0,$h=a_.then(h_))}function Vb(t){const e=mt.indexOf(t);e>yn&&mt.splice(e,1)}function Bb(t){Q(t)?wi.push(...t):(!Dn||!Dn.includes(t,t.allowRecurse?Rs+1:Rs))&&wi.push(t),c_()}function zf(t,e=qr?yn+1:0){for(;e<mt.length;e++){const n=mt[e];n&&n.pre&&(mt.splice(e,1),e--,n())}}function u_(t){if(wi.length){const e=[...new Set(wi)];if(wi.length=0,Dn){Dn.push(...e);return}for(Dn=e,Dn.sort((n,s)=>Hr(n)-Hr(s)),Rs=0;Rs<Dn.length;Rs++)Dn[Rs]();Dn=null,Rs=0}}const Hr=t=>t.id==null?1/0:t.id,jb=(t,e)=>{const n=Hr(t)-Hr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function h_(t){du=!1,qr=!0,mt.sort(jb);const e=an;try{for(yn=0;yn<mt.length;yn++){const n=mt[yn];n&&n.active!==!1&&rs(n,null,14)}}finally{yn=0,mt.length=0,u_(),qr=!1,$h=null,(mt.length||wi.length)&&h_()}}function qb(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Pe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||Pe;d&&(i=n.map(f=>Je(f)?f.trim():f)),h&&(i=n.map(Br))}let a,l=s[a=Cc(e)]||s[a=Cc(Ri(e))];!l&&r&&(l=s[a=Cc(Hi(e))]),l&&zt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,zt(c,t,6,i)}}function d_(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!se(t)){const l=c=>{const u=d_(c,e,!0);u&&(a=!0,Tt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(De(t)&&s.set(t,null),null):(Q(r)?r.forEach(l=>o[l]=null):Tt(o,r),De(t)&&s.set(t,o),o)}function Cl(t,e){return!t||!wl(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(t,e[0].toLowerCase()+e.slice(1))||pe(t,Hi(e))||pe(t,e))}let Wt=null,f_=null;function Da(t){const e=Wt;return Wt=t,f_=t&&t.type.__scopeId||null,e}function gn(t,e=Wt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&np(-1);const r=Da(e);let o;try{o=t(...i)}finally{Da(r),s._d&&np(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Sc(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:_}=t;let w,b;const A=Da(t);try{if(n.shapeFlag&4){const D=i||s;w=_n(u.call(D,D,h,r,f,d,g)),b=l}else{const D=e;w=_n(D.length>1?D(r,{attrs:l,slots:a,emit:c}):D(r,null)),b=e.props?l:Hb(l)}}catch(D){Sr.length=0,Il(D,t,1),w=be(ln)}let C=w;if(b&&_!==!1){const D=Object.keys(b),{shapeFlag:Y}=C;D.length&&Y&7&&(o&&D.some(Ah)&&(b=Wb(b,o)),C=hs(C,b))}return n.dirs&&(C=hs(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),w=C,Da(A),w}const Hb=t=>{let e;for(const n in t)(n==="class"||n==="style"||wl(n))&&((e||(e={}))[n]=t[n]);return e},Wb=(t,e)=>{const n={};for(const s in t)(!Ah(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Kb(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Gf(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Cl(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Gf(s,o,c):!0:!!o;return!1}function Gf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Cl(n,r))return!0}return!1}function zb({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Gb=t=>t.__isSuspense;function Qb(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):Bb(t)}function _a(t,e){if(ot){let n=ot.provides;const s=ot.parent&&ot.parent.provides;s===n&&(n=ot.provides=Object.create(s)),n[t]=e}}function Gt(t,e,n=!1){const s=ot||Wt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&se(e)?e.call(s.proxy):e}}const ea={};function Ir(t,e,n){return p_(t,e,n)}function p_(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Pe){const a=ot;let l,c=!1,u=!1;if(re(t)?(l=()=>t.value,c=Oa(t)):vi(t)?(l=()=>t,s=!0):Q(t)?(u=!0,c=t.some(C=>vi(C)||Oa(C)),l=()=>t.map(C=>{if(re(C))return C.value;if(vi(C))return Os(C);if(se(C))return rs(C,a,2)})):se(t)?e?l=()=>rs(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),zt(t,a,3,[d])}:l=an,e&&s){const C=l;l=()=>Os(C())}let h,d=C=>{h=b.onStop=()=>{rs(C,a,4)}},f;if(Kr)if(d=an,e?n&&zt(e,a,3,[l(),u?[]:void 0,d]):l(),i==="sync"){const C=$0();f=C.__watcherHandles||(C.__watcherHandles=[])}else return an;let g=u?new Array(t.length).fill(ea):ea;const _=()=>{if(b.active)if(e){const C=b.run();(s||c||(u?C.some((D,Y)=>Vr(D,g[Y])):Vr(C,g)))&&(h&&h(),zt(e,a,3,[C,g===ea?void 0:u&&g[0]===ea?[]:g,d]),g=C)}else b.run()};_.allowRecurse=!!e;let w;i==="sync"?w=_:i==="post"?w=()=>At(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),w=()=>Vh(_));const b=new xh(l,w);e?n?_():g=b.run():i==="post"?At(b.run.bind(b),a&&a.suspense):b.run();const A=()=>{b.stop(),a&&a.scope&&Nh(a.scope.effects,b)};return f&&f.push(A),A}function Yb(t,e,n){const s=this.proxy,i=Je(t)?t.includes(".")?g_(s,t):()=>s[t]:t.bind(s,s);let r;se(e)?r=e:(r=e.handler,n=e);const o=ot;Ai(this);const a=p_(i,r.bind(s),n);return o?Ai(o):Us(),a}function g_(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Os(t,e){if(!De(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),re(t))Os(t.value,e);else if(Q(t))for(let n=0;n<t.length;n++)Os(t[n],e);else if(El(t)||yi(t))t.forEach(n=>{Os(n,e)});else if($m(t))for(const n in t)Os(t[n],e);return t}function Xb(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return w_(()=>{t.isMounted=!0}),E_(()=>{t.isUnmounting=!0}),t}const qt=[Function,Array],Jb={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qt,onEnter:qt,onAfterEnter:qt,onEnterCancelled:qt,onBeforeLeave:qt,onLeave:qt,onAfterLeave:qt,onLeaveCancelled:qt,onBeforeAppear:qt,onAppear:qt,onAfterAppear:qt,onAppearCancelled:qt},setup(t,{slots:e}){const n=Ol(),s=Xb();let i;return()=>{const r=e.default&&__(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const _ of r)if(_.type!==ln){o=_;break}}const a=ye(t),{mode:l}=a;if(s.isLeaving)return Rc(o);const c=Qf(o);if(!c)return Rc(o);const u=fu(c,a,s,n);pu(c,u);const h=n.subTree,d=h&&Qf(h);let f=!1;const{getTransitionKey:g}=c.type;if(g){const _=g();i===void 0?i=_:_!==i&&(i=_,f=!0)}if(d&&d.type!==ln&&(!ks(c,d)||f)){const _=fu(d,a,s,n);if(pu(d,_),l==="out-in")return s.isLeaving=!0,_.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Rc(o);l==="in-out"&&c.type!==ln&&(_.delayLeave=(w,b,A)=>{const C=m_(s,d);C[String(d.key)]=d,w._leaveCb=()=>{b(),w._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=A})}return o}}},Zb=Jb;function m_(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function fu(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:_,onAppear:w,onAfterAppear:b,onAppearCancelled:A}=e,C=String(t.key),D=m_(n,t),Y=(q,Re)=>{q&&zt(q,s,9,Re)},le=(q,Re)=>{const Ee=Re[1];Y(q,Re),Q(q)?q.every(ut=>ut.length<=1)&&Ee():q.length<=1&&Ee()},me={mode:r,persisted:o,beforeEnter(q){let Re=a;if(!n.isMounted)if(i)Re=_||a;else return;q._leaveCb&&q._leaveCb(!0);const Ee=D[C];Ee&&ks(t,Ee)&&Ee.el._leaveCb&&Ee.el._leaveCb(),Y(Re,[q])},enter(q){let Re=l,Ee=c,ut=u;if(!n.isMounted)if(i)Re=w||l,Ee=b||c,ut=A||u;else return;let ht=!1;const Jt=q._enterCb=Nn=>{ht||(ht=!0,Nn?Y(ut,[q]):Y(Ee,[q]),me.delayedLeave&&me.delayedLeave(),q._enterCb=void 0)};Re?le(Re,[q,Jt]):Jt()},leave(q,Re){const Ee=String(t.key);if(q._enterCb&&q._enterCb(!0),n.isUnmounting)return Re();Y(h,[q]);let ut=!1;const ht=q._leaveCb=Jt=>{ut||(ut=!0,Re(),Jt?Y(g,[q]):Y(f,[q]),q._leaveCb=void 0,D[Ee]===t&&delete D[Ee])};D[Ee]=t,d?le(d,[q,ht]):ht()},clone(q){return fu(q,e,n,s)}};return me}function Rc(t){if(Sl(t))return t=hs(t),t.children=null,t}function Qf(t){return Sl(t)?t.children?t.children[0]:void 0:t}function pu(t,e){t.shapeFlag&6&&t.component?pu(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function __(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ge?(o.patchFlag&128&&i++,s=s.concat(__(o.children,e,a))):(e||o.type!==ln)&&s.push(a!=null?hs(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function y_(t){return se(t)?{setup:t,name:t.name}:t}const ya=t=>!!t.type.__asyncLoader,Sl=t=>t.type.__isKeepAlive;function e0(t,e){v_(t,"a",e)}function t0(t,e){v_(t,"da",e)}function v_(t,e,n=ot){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Rl(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Sl(i.parent.vnode)&&n0(s,e,n,i),i=i.parent}}function n0(t,e,n,s){const i=Rl(e,t,s,!0);T_(()=>{Nh(s[e],i)},n)}function Rl(t,e,n=ot,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Wi(),Ai(n);const a=zt(e,n,t,o);return Us(),Ki(),a});return s?i.unshift(r):i.push(r),r}}const zn=t=>(e,n=ot)=>(!Kr||t==="sp")&&Rl(t,(...s)=>e(...s),n),s0=zn("bm"),w_=zn("m"),i0=zn("bu"),r0=zn("u"),E_=zn("bum"),T_=zn("um"),b_=zn("sp"),o0=zn("rtg"),a0=zn("rtc");function l0(t,e=ot){Rl("ec",t,e)}function Be(t,e){const n=Wt;if(n===null)return t;const s=Dl(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Pe]=e[r];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&Os(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ts(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Wi(),zt(l,n,8,[t.el,a,t,e]),Ki())}}const c0=Symbol();function Bh(t,e,n,s){let i;const r=n&&n[s];if(Q(t)||Je(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(De(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const gu=t=>t?P_(t)?Dl(t)||t.proxy:gu(t.parent):null,Cr=Tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gu(t.parent),$root:t=>gu(t.root),$emit:t=>t.emit,$options:t=>jh(t),$forceUpdate:t=>t.f||(t.f=()=>Vh(t.update)),$nextTick:t=>t.n||(t.n=l_.bind(t.proxy)),$watch:t=>Yb.bind(t)}),kc=(t,e)=>t!==Pe&&!t.__isScriptSetup&&pe(t,e),u0={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(kc(s,e))return o[e]=1,s[e];if(i!==Pe&&pe(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&pe(c,e))return o[e]=3,r[e];if(n!==Pe&&pe(n,e))return o[e]=4,n[e];mu&&(o[e]=0)}}const u=Cr[e];let h,d;if(u)return e==="$attrs"&&Bt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Pe&&pe(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,pe(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return kc(i,e)?(i[e]=n,!0):s!==Pe&&pe(s,e)?(s[e]=n,!0):pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Pe&&pe(t,o)||kc(e,o)||(a=r[0])&&pe(a,o)||pe(s,o)||pe(Cr,o)||pe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let mu=!0;function h0(t){const e=jh(t),n=t.proxy,s=t.ctx;mu=!1,e.beforeCreate&&Yf(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:_,deactivated:w,beforeDestroy:b,beforeUnmount:A,destroyed:C,unmounted:D,render:Y,renderTracked:le,renderTriggered:me,errorCaptured:q,serverPrefetch:Re,expose:Ee,inheritAttrs:ut,components:ht,directives:Jt,filters:Nn}=e;if(c&&d0(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Ae in o){const Ie=o[Ae];se(Ie)&&(s[Ae]=Ie.bind(n))}if(i){const Ae=i.call(n,n);De(Ae)&&(t.data=mo(Ae))}if(mu=!0,r)for(const Ae in r){const Ie=r[Ae],Zt=se(Ie)?Ie.bind(n,n):se(Ie.get)?Ie.get.bind(n,n):an,Es=!se(Ie)&&se(Ie.set)?Ie.set.bind(n):an,en=Ht({get:Zt,set:Es});Object.defineProperty(s,Ae,{enumerable:!0,configurable:!0,get:()=>en.value,set:kt=>en.value=kt})}if(a)for(const Ae in a)I_(a[Ae],s,n,Ae);if(l){const Ae=se(l)?l.call(n):l;Reflect.ownKeys(Ae).forEach(Ie=>{_a(Ie,Ae[Ie])})}u&&Yf(u,t,"c");function He(Ae,Ie){Q(Ie)?Ie.forEach(Zt=>Ae(Zt.bind(n))):Ie&&Ae(Ie.bind(n))}if(He(s0,h),He(w_,d),He(i0,f),He(r0,g),He(e0,_),He(t0,w),He(l0,q),He(a0,le),He(o0,me),He(E_,A),He(T_,D),He(b_,Re),Q(Ee))if(Ee.length){const Ae=t.exposed||(t.exposed={});Ee.forEach(Ie=>{Object.defineProperty(Ae,Ie,{get:()=>n[Ie],set:Zt=>n[Ie]=Zt})})}else t.exposed||(t.exposed={});Y&&t.render===an&&(t.render=Y),ut!=null&&(t.inheritAttrs=ut),ht&&(t.components=ht),Jt&&(t.directives=Jt)}function d0(t,e,n=an,s=!1){Q(t)&&(t=_u(t));for(const i in t){const r=t[i];let o;De(r)?"default"in r?o=Gt(r.from||i,r.default,!0):o=Gt(r.from||i):o=Gt(r),re(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Yf(t,e,n){zt(Q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function I_(t,e,n,s){const i=s.includes(".")?g_(n,s):()=>n[s];if(Je(t)){const r=e[t];se(r)&&Ir(i,r)}else if(se(t))Ir(i,t.bind(n));else if(De(t))if(Q(t))t.forEach(r=>I_(r,e,n,s));else{const r=se(t.handler)?t.handler.bind(n):e[t.handler];se(r)&&Ir(i,r,t)}}function jh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>xa(l,c,o,!0)),xa(l,e,o)),De(e)&&r.set(e,l),l}function xa(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&xa(t,r,n,!0),i&&i.forEach(o=>xa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=f0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const f0={data:Xf,props:Is,emits:Is,methods:Is,computed:Is,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Is,directives:Is,watch:g0,provide:Xf,inject:p0};function Xf(t,e){return e?t?function(){return Tt(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function p0(t,e){return Is(_u(t),_u(e))}function _u(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function Is(t,e){return t?Tt(Tt(Object.create(null),t),e):e}function g0(t,e){if(!t)return e;if(!e)return t;const n=Tt(Object.create(null),t);for(const s in e)n[s]=St(t[s],e[s]);return n}function m0(t,e,n,s=!1){const i={},r={};Na(r,Al,1),t.propsDefaults=Object.create(null),C_(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:xb(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function _0(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ye(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Cl(t.emitsOptions,d))continue;const f=e[d];if(l)if(pe(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const g=Ri(d);i[g]=yu(l,a,g,f,t,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{C_(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!pe(e,h)&&((u=Hi(h))===h||!pe(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=yu(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!pe(e,h))&&(delete r[h],c=!0)}c&&Bn(t,"set","$attrs")}function C_(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ga(l))continue;const c=e[l];let u;i&&pe(i,u=Ri(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Cl(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ye(n),c=a||Pe;for(let u=0;u<r.length;u++){const h=r[u];n[h]=yu(i,l,h,c[h],t,!pe(c,h))}}return o}function yu(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=pe(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&se(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Ai(i),s=c[n]=l.call(null,e),Us())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Hi(n))&&(s=!0))}return s}function S_(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!se(t)){const u=h=>{l=!0;const[d,f]=S_(h,e,!0);Tt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return De(t)&&s.set(t,_i),_i;if(Q(r))for(let u=0;u<r.length;u++){const h=Ri(r[u]);Jf(h)&&(o[h]=Pe)}else if(r)for(const u in r){const h=Ri(u);if(Jf(h)){const d=r[u],f=o[h]=Q(d)||se(d)?{type:d}:Object.assign({},d);if(f){const g=tp(Boolean,f.type),_=tp(String,f.type);f[0]=g>-1,f[1]=_<0||g<_,(g>-1||pe(f,"default"))&&a.push(h)}}}const c=[o,a];return De(t)&&s.set(t,c),c}function Jf(t){return t[0]!=="$"}function Zf(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ep(t,e){return Zf(t)===Zf(e)}function tp(t,e){return Q(e)?e.findIndex(n=>ep(n,t)):se(e)&&ep(e,t)?0:-1}const R_=t=>t[0]==="_"||t==="$stable",qh=t=>Q(t)?t.map(_n):[_n(t)],y0=(t,e,n)=>{if(e._n)return e;const s=gn((...i)=>qh(e(...i)),n);return s._c=!1,s},k_=(t,e,n)=>{const s=t._ctx;for(const i in t){if(R_(i))continue;const r=t[i];if(se(r))e[i]=y0(i,r,s);else if(r!=null){const o=qh(r);e[i]=()=>o}}},A_=(t,e)=>{const n=qh(e);t.slots.default=()=>n},v0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ye(e),Na(e,"_",n)):k_(e,t.slots={})}else t.slots={},e&&A_(t,e);Na(t.slots,Al,1)},w0=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Tt(i,e),!n&&a===1&&delete i._):(r=!e.$stable,k_(e,i)),o=e}else e&&(A_(t,e),o={default:1});if(r)for(const a in i)!R_(a)&&!(a in o)&&delete i[a]};function N_(){return{app:null,config:{isNativeTag:XT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let E0=0;function T0(t,e){return function(s,i=null){se(s)||(s=Object.assign({},s)),i!=null&&!De(i)&&(i=null);const r=N_(),o=new Set;let a=!1;const l=r.app={_uid:E0++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:V0,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&se(c.install)?(o.add(c),c.install(l,...u)):se(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=be(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Dl(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function vu(t,e,n,s,i=!1){if(Q(t)){t.forEach((d,f)=>vu(d,e&&(Q(e)?e[f]:e),n,s,i));return}if(ya(s)&&!i)return;const r=s.shapeFlag&4?Dl(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Pe?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Je(c)?(u[c]=null,pe(h,c)&&(h[c]=null)):re(c)&&(c.value=null)),se(l))rs(l,a,12,[o,u]);else{const d=Je(l),f=re(l);if(d||f){const g=()=>{if(t.f){const _=d?pe(h,l)?h[l]:u[l]:l.value;i?Q(_)&&Nh(_,r):Q(_)?_.includes(r)||_.push(r):d?(u[l]=[r],pe(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,pe(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,At(g,n)):g()}}}const At=Qb;function b0(t){return I0(t)}function I0(t,e){const n=sb();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=an,insertStaticContent:g}=t,_=(p,m,v,E=null,I=null,O=null,L=!1,N=null,x=!!m.dynamicChildren)=>{if(p===m)return;p&&!ks(p,m)&&(E=M(p),kt(p,I,O,!0),p=null),m.patchFlag===-2&&(x=!1,m.dynamicChildren=null);const{type:S,ref:H,shapeFlag:$}=m;switch(S){case kl:w(p,m,v,E);break;case ln:b(p,m,v,E);break;case va:p==null&&A(m,v,E,L);break;case Ge:ht(p,m,v,E,I,O,L,N,x);break;default:$&1?Y(p,m,v,E,I,O,L,N,x):$&6?Jt(p,m,v,E,I,O,L,N,x):($&64||$&128)&&S.process(p,m,v,E,I,O,L,N,x,fe)}H!=null&&I&&vu(H,p&&p.ref,O,m||p,!m)},w=(p,m,v,E)=>{if(p==null)s(m.el=a(m.children),v,E);else{const I=m.el=p.el;m.children!==p.children&&c(I,m.children)}},b=(p,m,v,E)=>{p==null?s(m.el=l(m.children||""),v,E):m.el=p.el},A=(p,m,v,E)=>{[p.el,p.anchor]=g(p.children,m,v,E,p.el,p.anchor)},C=({el:p,anchor:m},v,E)=>{let I;for(;p&&p!==m;)I=d(p),s(p,v,E),p=I;s(m,v,E)},D=({el:p,anchor:m})=>{let v;for(;p&&p!==m;)v=d(p),i(p),p=v;i(m)},Y=(p,m,v,E,I,O,L,N,x)=>{L=L||m.type==="svg",p==null?le(m,v,E,I,O,L,N,x):Re(p,m,I,O,L,N,x)},le=(p,m,v,E,I,O,L,N)=>{let x,S;const{type:H,props:$,shapeFlag:W,transition:ee,dirs:oe}=p;if(x=p.el=o(p.type,O,$&&$.is,$),W&8?u(x,p.children):W&16&&q(p.children,x,null,E,I,O&&H!=="foreignObject",L,N),oe&&Ts(p,null,E,"created"),$){for(const Ce in $)Ce!=="value"&&!ga(Ce)&&r(x,Ce,null,$[Ce],O,p.children,E,I,U);"value"in $&&r(x,"value",null,$.value),(S=$.onVnodeBeforeMount)&&pn(S,E,p)}me(x,p,p.scopeId,L,E),oe&&Ts(p,null,E,"beforeMount");const Ne=(!I||I&&!I.pendingBranch)&&ee&&!ee.persisted;Ne&&ee.beforeEnter(x),s(x,m,v),((S=$&&$.onVnodeMounted)||Ne||oe)&&At(()=>{S&&pn(S,E,p),Ne&&ee.enter(x),oe&&Ts(p,null,E,"mounted")},I)},me=(p,m,v,E,I)=>{if(v&&f(p,v),E)for(let O=0;O<E.length;O++)f(p,E[O]);if(I){let O=I.subTree;if(m===O){const L=I.vnode;me(p,L,L.scopeId,L.slotScopeIds,I.parent)}}},q=(p,m,v,E,I,O,L,N,x=0)=>{for(let S=x;S<p.length;S++){const H=p[S]=N?Jn(p[S]):_n(p[S]);_(null,H,m,v,E,I,O,L,N)}},Re=(p,m,v,E,I,O,L)=>{const N=m.el=p.el;let{patchFlag:x,dynamicChildren:S,dirs:H}=m;x|=p.patchFlag&16;const $=p.props||Pe,W=m.props||Pe;let ee;v&&bs(v,!1),(ee=W.onVnodeBeforeUpdate)&&pn(ee,v,m,p),H&&Ts(m,p,v,"beforeUpdate"),v&&bs(v,!0);const oe=I&&m.type!=="foreignObject";if(S?Ee(p.dynamicChildren,S,N,v,E,oe,O):L||Ie(p,m,N,null,v,E,oe,O,!1),x>0){if(x&16)ut(N,m,$,W,v,E,I);else if(x&2&&$.class!==W.class&&r(N,"class",null,W.class,I),x&4&&r(N,"style",$.style,W.style,I),x&8){const Ne=m.dynamicProps;for(let Ce=0;Ce<Ne.length;Ce++){const We=Ne[Ce],tn=$[We],li=W[We];(li!==tn||We==="value")&&r(N,We,tn,li,I,p.children,v,E,U)}}x&1&&p.children!==m.children&&u(N,m.children)}else!L&&S==null&&ut(N,m,$,W,v,E,I);((ee=W.onVnodeUpdated)||H)&&At(()=>{ee&&pn(ee,v,m,p),H&&Ts(m,p,v,"updated")},E)},Ee=(p,m,v,E,I,O,L)=>{for(let N=0;N<m.length;N++){const x=p[N],S=m[N],H=x.el&&(x.type===Ge||!ks(x,S)||x.shapeFlag&70)?h(x.el):v;_(x,S,H,null,E,I,O,L,!0)}},ut=(p,m,v,E,I,O,L)=>{if(v!==E){if(v!==Pe)for(const N in v)!ga(N)&&!(N in E)&&r(p,N,v[N],null,L,m.children,I,O,U);for(const N in E){if(ga(N))continue;const x=E[N],S=v[N];x!==S&&N!=="value"&&r(p,N,S,x,L,m.children,I,O,U)}"value"in E&&r(p,"value",v.value,E.value)}},ht=(p,m,v,E,I,O,L,N,x)=>{const S=m.el=p?p.el:a(""),H=m.anchor=p?p.anchor:a("");let{patchFlag:$,dynamicChildren:W,slotScopeIds:ee}=m;ee&&(N=N?N.concat(ee):ee),p==null?(s(S,v,E),s(H,v,E),q(m.children,v,H,I,O,L,N,x)):$>0&&$&64&&W&&p.dynamicChildren?(Ee(p.dynamicChildren,W,v,I,O,L,N),(m.key!=null||I&&m===I.subTree)&&O_(p,m,!0)):Ie(p,m,v,H,I,O,L,N,x)},Jt=(p,m,v,E,I,O,L,N,x)=>{m.slotScopeIds=N,p==null?m.shapeFlag&512?I.ctx.activate(m,v,E,L,x):Nn(m,v,E,I,O,L,x):ar(p,m,x)},Nn=(p,m,v,E,I,O,L)=>{const N=p.component=x0(p,E,I);if(Sl(p)&&(N.ctx.renderer=fe),P0(N),N.asyncDep){if(I&&I.registerDep(N,He),!p.el){const x=N.subTree=be(ln);b(null,x,m,v)}return}He(N,p,m,v,I,O,L)},ar=(p,m,v)=>{const E=m.component=p.component;if(Kb(p,m,v))if(E.asyncDep&&!E.asyncResolved){Ae(E,m,v);return}else E.next=m,Vb(E.update),E.update();else m.el=p.el,E.vnode=m},He=(p,m,v,E,I,O,L)=>{const N=()=>{if(p.isMounted){let{next:H,bu:$,u:W,parent:ee,vnode:oe}=p,Ne=H,Ce;bs(p,!1),H?(H.el=oe.el,Ae(p,H,L)):H=oe,$&&ma($),(Ce=H.props&&H.props.onVnodeBeforeUpdate)&&pn(Ce,ee,H,oe),bs(p,!0);const We=Sc(p),tn=p.subTree;p.subTree=We,_(tn,We,h(tn.el),M(tn),p,I,O),H.el=We.el,Ne===null&&zb(p,We.el),W&&At(W,I),(Ce=H.props&&H.props.onVnodeUpdated)&&At(()=>pn(Ce,ee,H,oe),I)}else{let H;const{el:$,props:W}=m,{bm:ee,m:oe,parent:Ne}=p,Ce=ya(m);if(bs(p,!1),ee&&ma(ee),!Ce&&(H=W&&W.onVnodeBeforeMount)&&pn(H,Ne,m),bs(p,!0),$&&ie){const We=()=>{p.subTree=Sc(p),ie($,p.subTree,p,I,null)};Ce?m.type.__asyncLoader().then(()=>!p.isUnmounted&&We()):We()}else{const We=p.subTree=Sc(p);_(null,We,v,E,p,I,O),m.el=We.el}if(oe&&At(oe,I),!Ce&&(H=W&&W.onVnodeMounted)){const We=m;At(()=>pn(H,Ne,We),I)}(m.shapeFlag&256||Ne&&ya(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&p.a&&At(p.a,I),p.isMounted=!0,m=v=E=null}},x=p.effect=new xh(N,()=>Vh(S),p.scope),S=p.update=()=>x.run();S.id=p.uid,bs(p,!0),S()},Ae=(p,m,v)=>{m.component=p;const E=p.vnode.props;p.vnode=m,p.next=null,_0(p,m.props,E,v),w0(p,m.children,v),Wi(),zf(),Ki()},Ie=(p,m,v,E,I,O,L,N,x=!1)=>{const S=p&&p.children,H=p?p.shapeFlag:0,$=m.children,{patchFlag:W,shapeFlag:ee}=m;if(W>0){if(W&128){Es(S,$,v,E,I,O,L,N,x);return}else if(W&256){Zt(S,$,v,E,I,O,L,N,x);return}}ee&8?(H&16&&U(S,I,O),$!==S&&u(v,$)):H&16?ee&16?Es(S,$,v,E,I,O,L,N,x):U(S,I,O,!0):(H&8&&u(v,""),ee&16&&q($,v,E,I,O,L,N,x))},Zt=(p,m,v,E,I,O,L,N,x)=>{p=p||_i,m=m||_i;const S=p.length,H=m.length,$=Math.min(S,H);let W;for(W=0;W<$;W++){const ee=m[W]=x?Jn(m[W]):_n(m[W]);_(p[W],ee,v,null,I,O,L,N,x)}S>H?U(p,I,O,!0,!1,$):q(m,v,E,I,O,L,N,x,$)},Es=(p,m,v,E,I,O,L,N,x)=>{let S=0;const H=m.length;let $=p.length-1,W=H-1;for(;S<=$&&S<=W;){const ee=p[S],oe=m[S]=x?Jn(m[S]):_n(m[S]);if(ks(ee,oe))_(ee,oe,v,null,I,O,L,N,x);else break;S++}for(;S<=$&&S<=W;){const ee=p[$],oe=m[W]=x?Jn(m[W]):_n(m[W]);if(ks(ee,oe))_(ee,oe,v,null,I,O,L,N,x);else break;$--,W--}if(S>$){if(S<=W){const ee=W+1,oe=ee<H?m[ee].el:E;for(;S<=W;)_(null,m[S]=x?Jn(m[S]):_n(m[S]),v,oe,I,O,L,N,x),S++}}else if(S>W)for(;S<=$;)kt(p[S],I,O,!0),S++;else{const ee=S,oe=S,Ne=new Map;for(S=oe;S<=W;S++){const Pt=m[S]=x?Jn(m[S]):_n(m[S]);Pt.key!=null&&Ne.set(Pt.key,S)}let Ce,We=0;const tn=W-oe+1;let li=!1,Mf=0;const lr=new Array(tn);for(S=0;S<tn;S++)lr[S]=0;for(S=ee;S<=$;S++){const Pt=p[S];if(We>=tn){kt(Pt,I,O,!0);continue}let fn;if(Pt.key!=null)fn=Ne.get(Pt.key);else for(Ce=oe;Ce<=W;Ce++)if(lr[Ce-oe]===0&&ks(Pt,m[Ce])){fn=Ce;break}fn===void 0?kt(Pt,I,O,!0):(lr[fn-oe]=S+1,fn>=Mf?Mf=fn:li=!0,_(Pt,m[fn],v,null,I,O,L,N,x),We++)}const Lf=li?C0(lr):_i;for(Ce=Lf.length-1,S=tn-1;S>=0;S--){const Pt=oe+S,fn=m[Pt],Ff=Pt+1<H?m[Pt+1].el:E;lr[S]===0?_(null,fn,v,Ff,I,O,L,N,x):li&&(Ce<0||S!==Lf[Ce]?en(fn,v,Ff,2):Ce--)}}},en=(p,m,v,E,I=null)=>{const{el:O,type:L,transition:N,children:x,shapeFlag:S}=p;if(S&6){en(p.component.subTree,m,v,E);return}if(S&128){p.suspense.move(m,v,E);return}if(S&64){L.move(p,m,v,fe);return}if(L===Ge){s(O,m,v);for(let $=0;$<x.length;$++)en(x[$],m,v,E);s(p.anchor,m,v);return}if(L===va){C(p,m,v);return}if(E!==2&&S&1&&N)if(E===0)N.beforeEnter(O),s(O,m,v),At(()=>N.enter(O),I);else{const{leave:$,delayLeave:W,afterLeave:ee}=N,oe=()=>s(O,m,v),Ne=()=>{$(O,()=>{oe(),ee&&ee()})};W?W(O,oe,Ne):Ne()}else s(O,m,v)},kt=(p,m,v,E=!1,I=!1)=>{const{type:O,props:L,ref:N,children:x,dynamicChildren:S,shapeFlag:H,patchFlag:$,dirs:W}=p;if(N!=null&&vu(N,null,v,p,!0),H&256){m.ctx.deactivate(p);return}const ee=H&1&&W,oe=!ya(p);let Ne;if(oe&&(Ne=L&&L.onVnodeBeforeUnmount)&&pn(Ne,m,p),H&6)T(p.component,v,E);else{if(H&128){p.suspense.unmount(v,E);return}ee&&Ts(p,null,m,"beforeUnmount"),H&64?p.type.remove(p,m,v,I,fe,E):S&&(O!==Ge||$>0&&$&64)?U(S,m,v,!1,!0):(O===Ge&&$&384||!I&&H&16)&&U(x,m,v),E&&ai(p)}(oe&&(Ne=L&&L.onVnodeUnmounted)||ee)&&At(()=>{Ne&&pn(Ne,m,p),ee&&Ts(p,null,m,"unmounted")},v)},ai=p=>{const{type:m,el:v,anchor:E,transition:I}=p;if(m===Ge){Go(v,E);return}if(m===va){D(p);return}const O=()=>{i(v),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(p.shapeFlag&1&&I&&!I.persisted){const{leave:L,delayLeave:N}=I,x=()=>L(v,O);N?N(p.el,O,x):x()}else O()},Go=(p,m)=>{let v;for(;p!==m;)v=d(p),i(p),p=v;i(m)},T=(p,m,v)=>{const{bum:E,scope:I,update:O,subTree:L,um:N}=p;E&&ma(E),I.stop(),O&&(O.active=!1,kt(L,p,m,v)),N&&At(N,m),At(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},U=(p,m,v,E=!1,I=!1,O=0)=>{for(let L=O;L<p.length;L++)kt(p[L],m,v,E,I)},M=p=>p.shapeFlag&6?M(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),j=(p,m,v)=>{p==null?m._vnode&&kt(m._vnode,null,null,!0):_(m._vnode||null,p,m,null,null,null,v),zf(),u_(),m._vnode=p},fe={p:_,um:kt,m:en,r:ai,mt:Nn,mc:q,pc:Ie,pbc:Ee,n:M,o:t};let $e,ie;return e&&([$e,ie]=e(fe)),{render:j,hydrate:$e,createApp:T0(j,$e)}}function bs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function O_(t,e,n=!1){const s=t.children,i=e.children;if(Q(s)&&Q(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Jn(i[r]),a.el=o.el),n||O_(o,a)),a.type===kl&&(a.el=o.el)}}function C0(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const S0=t=>t.__isTeleport,Ge=Symbol(void 0),kl=Symbol(void 0),ln=Symbol(void 0),va=Symbol(void 0),Sr=[];let rn=null;function _e(t=!1){Sr.push(rn=t?null:[])}function R0(){Sr.pop(),rn=Sr[Sr.length-1]||null}let Wr=1;function np(t){Wr+=t}function D_(t){return t.dynamicChildren=Wr>0?rn||_i:null,R0(),Wr>0&&rn&&rn.push(t),t}function ke(t,e,n,s,i,r){return D_(y(t,e,n,s,i,r,!0))}function wa(t,e,n,s,i){return D_(be(t,e,n,s,i,!0))}function wu(t){return t?t.__v_isVNode===!0:!1}function ks(t,e){return t.type===e.type&&t.key===e.key}const Al="__vInternal",x_=({key:t})=>t??null,Ea=({ref:t,ref_key:e,ref_for:n})=>t!=null?Je(t)||re(t)||se(t)?{i:Wt,r:t,k:e,f:!!n}:t:null;function y(t,e=null,n=null,s=0,i=null,r=t===Ge?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&x_(e),ref:e&&Ea(e),scopeId:f_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Wt};return a?(Hh(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Je(n)?8:16),Wr>0&&!o&&rn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&rn.push(l),l}const be=k0;function k0(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===c0)&&(t=ln),wu(t)){const a=hs(t,e,!0);return n&&Hh(a,n),Wr>0&&!r&&rn&&(a.shapeFlag&6?rn[rn.indexOf(t)]=a:rn.push(a)),a.patchFlag|=-2,a}if(U0(t)&&(t=t.__vccOpts),e){e=A0(e);let{class:a,style:l}=e;a&&!Je(a)&&(e.class=kh(a)),De(l)&&(Zm(l)&&!Q(l)&&(l=Tt({},l)),e.style=Rh(l))}const o=Je(t)?1:Gb(t)?128:S0(t)?64:De(t)?4:se(t)?2:0;return y(t,e,n,s,i,o,r,!0)}function A0(t){return t?Zm(t)||Al in t?Tt({},t):t:null}function hs(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?N0(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&x_(a),ref:e&&e.ref?n&&i?Q(i)?i.concat(Ea(e)):[i,Ea(e)]:Ea(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hs(t.ssContent),ssFallback:t.ssFallback&&hs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Lt(t=" ",e=0){return be(kl,null,t,e)}function Nl(t,e){const n=be(va,null,t);return n.staticCount=e,n}function Pa(t="",e=!1){return e?(_e(),wa(ln,null,t)):be(ln,null,t)}function _n(t){return t==null||typeof t=="boolean"?be(ln):Q(t)?be(Ge,null,t.slice()):typeof t=="object"?Jn(t):be(kl,null,String(t))}function Jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hs(t)}function Hh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Hh(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Al in e)?e._ctx=Wt:i===3&&Wt&&(Wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:Wt},n=32):(e=String(e),s&64?(n=16,e=[Lt(e)]):n=8);t.children=e,t.shapeFlag|=n}function N0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=kh([e.class,s.class]));else if(i==="style")e.style=Rh([e.style,s.style]);else if(wl(i)){const r=e[i],o=s[i];o&&r!==o&&!(Q(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function pn(t,e,n,s=null){zt(t,e,7,[n,s])}const O0=N_();let D0=0;function x0(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||O0,r={uid:D0++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:S_(s,i),emitsOptions:d_(s,i),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:s.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=qb.bind(null,r),t.ce&&t.ce(r),r}let ot=null;const Ol=()=>ot||Wt,Ai=t=>{ot=t,t.scope.on()},Us=()=>{ot&&ot.scope.off(),ot=null};function P_(t){return t.vnode.shapeFlag&4}let Kr=!1;function P0(t,e=!1){Kr=e;const{props:n,children:s}=t.vnode,i=P_(t);m0(t,n,i,e),v0(t,s);const r=i?M0(t,e):void 0;return Kr=!1,r}function M0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=e_(new Proxy(t.ctx,u0));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?F0(t):null;Ai(t),Wi();const r=rs(s,t,0,[t.props,i]);if(Ki(),Us(),Fm(r)){if(r.then(Us,Us),e)return r.then(o=>{sp(t,o,e)}).catch(o=>{Il(o,t,0)});t.asyncDep=r}else sp(t,r,e)}else M_(t,e)}function sp(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=r_(e)),M_(t,n)}let ip;function M_(t,e,n){const s=t.type;if(!t.render){if(!e&&ip&&!s.render){const i=s.template||jh(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Tt(Tt({isCustomElement:r,delimiters:a},o),l);s.render=ip(i,c)}}t.render=s.render||an}Ai(t),Wi(),h0(t),Ki(),Us()}function L0(t){return new Proxy(t.attrs,{get(e,n){return Bt(t,"get","$attrs"),e[n]}})}function F0(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=L0(t))},slots:t.slots,emit:t.emit,expose:e}}function Dl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(r_(e_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cr)return Cr[n](t)},has(e,n){return n in e||n in Cr}}))}function U0(t){return se(t)&&"__vccOpts"in t}const Ht=(t,e)=>Fb(t,e,Kr);function L_(t,e,n){const s=arguments.length;return s===2?De(e)&&!Q(e)?wu(e)?be(t,null,[e]):be(t,e):be(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&wu(n)&&(n=[n]),be(t,e,n))}const F_=Symbol(""),$0=()=>Gt(F_),V0="3.2.45",B0="http://www.w3.org/2000/svg",As=typeof document<"u"?document:null,rp=As&&As.createElement("template"),j0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?As.createElementNS(B0,t):As.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>As.createTextNode(t),createComment:t=>As.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>As.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{rp.innerHTML=s?`<svg>${t}</svg>`:t;const a=rp.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function q0(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function H0(t,e,n){const s=t.style,i=Je(n);if(n&&!i){for(const r in n)Eu(s,r,n[r]);if(e&&!Je(e))for(const r in e)n[r]==null&&Eu(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const op=/\s*!important$/;function Eu(t,e,n){if(Q(n))n.forEach(s=>Eu(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=W0(t,e);op.test(n)?t.setProperty(Hi(s),n.replace(op,""),"important"):t[s]=n}}const ap=["Webkit","Moz","ms"],Ac={};function W0(t,e){const n=Ac[e];if(n)return n;let s=Ri(e);if(s!=="filter"&&s in t)return Ac[e]=s;s=Vm(s);for(let i=0;i<ap.length;i++){const r=ap[i]+s;if(r in t)return Ac[e]=r}return e}const lp="http://www.w3.org/1999/xlink";function K0(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(lp,e.slice(6,e.length)):t.setAttributeNS(lp,e,n);else{const r=GT(e);n==null||r&&!Mm(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function z0(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Mm(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Ns(t,e,n,s){t.addEventListener(e,n,s)}function G0(t,e,n,s){t.removeEventListener(e,n,s)}function Q0(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Y0(e);if(s){const c=r[e]=Z0(s,i);Ns(t,a,c,l)}else o&&(G0(t,a,o,l),r[e]=void 0)}}const cp=/(?:Once|Passive|Capture)$/;function Y0(t){let e;if(cp.test(t)){e={};let s;for(;s=t.match(cp);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hi(t.slice(2)),e]}let Nc=0;const X0=Promise.resolve(),J0=()=>Nc||(X0.then(()=>Nc=0),Nc=Date.now());function Z0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;zt(eI(s,n.value),e,5,[s])};return n.value=t,n.attached=J0(),n}function eI(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const up=/^on[a-z]/,tI=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?q0(t,s,i):e==="style"?H0(t,n,s):wl(e)?Ah(e)||Q0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):nI(t,e,s,i))?z0(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),K0(t,e,s,i))};function nI(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&up.test(e)&&se(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||up.test(e)&&Je(n)?!1:e in t}const sI={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Zb.props;const Ma=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>ma(e,n):e};function iI(t){t.target.composing=!0}function hp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const _t={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Ma(i);const r=s||i.props&&i.props.type==="number";Ns(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Br(a)),t._assign(a)}),n&&Ns(t,"change",()=>{t.value=t.value.trim()}),e||(Ns(t,"compositionstart",iI),Ns(t,"compositionend",hp),Ns(t,"change",hp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Ma(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Br(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},zi={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=El(e);Ns(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Br(La(o)):La(o));t._assign(t.multiple?i?new Set(r):r:r[0])}),t._assign=Ma(s)},mounted(t,{value:e}){dp(t,e)},beforeUpdate(t,e,n){t._assign=Ma(n)},updated(t,{value:e}){dp(t,e)}};function dp(t,e){const n=t.multiple;if(!(n&&!Q(e)&&!El(e))){for(let s=0,i=t.options.length;s<i;s++){const r=t.options[s],o=La(r);if(n)Q(e)?r.selected=YT(e,o)>-1:r.selected=e.has(o);else if(vl(La(r),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function La(t){return"_value"in t?t._value:t.value}const rI=Tt({patchProp:tI},j0);let fp;function oI(){return fp||(fp=b0(rI))}const aI=(...t)=>{const e=oI().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=lI(s);if(!i)return;const r=e._component;!se(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function lI(t){return Je(t)?document.querySelector(t):t}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const hi=typeof window<"u";function cI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Te=Object.assign;function Oc(t,e){const n={};for(const s in e){const i=e[s];n[s]=hn(i)?i.map(t):t(i)}return n}const Rr=()=>{},hn=Array.isArray,uI=/\/$/,hI=t=>t.replace(uI,"");function Dc(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=gI(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function dI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function pp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function fI(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Ni(e.matched[s],n.matched[i])&&U_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ni(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function U_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!pI(t[n],e[n]))return!1;return!0}function pI(t,e){return hn(t)?gp(t,e):hn(e)?gp(e,t):t===e}function gp(t,e){return hn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function gI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var zr;(function(t){t.pop="pop",t.push="push"})(zr||(zr={}));var kr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(kr||(kr={}));function mI(t){if(!t)if(hi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hI(t)}const _I=/^[^#]+#/;function yI(t,e){return t.replace(_I,"#")+e}function vI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const xl=()=>({left:window.pageXOffset,top:window.pageYOffset});function wI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=vI(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function mp(t,e){return(history.state?history.state.position-e:-1)+t}const Tu=new Map;function EI(t,e){Tu.set(t,e)}function TI(t){const e=Tu.get(t);return Tu.delete(t),e}let bI=()=>location.protocol+"//"+location.host;function $_(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),pp(l,"")}return pp(n,t)+s+i}function II(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const f=$_(t,location),g=n.value,_=e.value;let w=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}w=_?d.position-_.position:0}else s(f);i.forEach(b=>{b(n.value,g,{delta:w,type:zr.pop,direction:w?w>0?kr.forward:kr.back:kr.unknown})})};function l(){o=n.value}function c(d){i.push(d);const f=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Te({},d.state,{scroll:xl()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function _p(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?xl():null}}function CI(t){const{history:e,location:n}=window,s={value:$_(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:bI()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Te({},e.state,_p(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Te({},i.value,e.state,{forward:l,scroll:xl()});r(u.current,u,!0);const h=Te({},_p(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function SI(t){t=mI(t);const e=CI(t),n=II(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Te({location:"",base:t,go:s,createHref:yI.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function RI(t){return typeof t=="string"||t&&typeof t=="object"}function V_(t){return typeof t=="string"||typeof t=="symbol"}const Yn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},B_=Symbol("");var yp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yp||(yp={}));function Oi(t,e){return Te(new Error,{type:t,[B_]:!0},e)}function On(t,e){return t instanceof Error&&B_ in t&&(e==null||!!(t.type&e))}const vp="[^/]+?",kI={sensitive:!1,strict:!1,start:!0,end:!0},AI=/[.+*?^${}()[\]/\\]/g;function NI(t,e){const n=Te({},kI,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(AI,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:_,optional:w,regexp:b}=d;r.push({name:g,repeatable:_,optional:w});const A=b||vp;if(A!==vp){f+=10;try{new RegExp(`(${A})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${g}" (${A}): `+D.message)}}let C=_?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;h||(C=w&&c.length<2?`(?:/${C})`:"/"+C),w&&(C+="?"),i+=C,f+=20,w&&(f+=-8),_&&(f+=-20),A===".*"&&(f+=-50)}u.push(f)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=r[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:_,optional:w}=f,b=g in c?c[g]:"";if(hn(b)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const A=hn(b)?b.join("/"):b;if(!A)if(w)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=A}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function OI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function DI(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=OI(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(wp(s))return 1;if(wp(i))return-1}return i.length-s.length}function wp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const xI={type:0,value:""},PI=/[a-zA-Z0-9_]/;function MI(t){if(!t)return[[]];if(t==="/")return[[xI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:PI.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function LI(t,e,n){const s=NI(MI(t.path),n),i=Te(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function FI(t,e){const n=[],s=new Map;e=bp({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const f=!d,g=UI(u);g.aliasOf=d&&d.record;const _=bp(e,u),w=[g];if("alias"in u){const C=typeof u.alias=="string"?[u.alias]:u.alias;for(const D of C)w.push(Te({},g,{components:d?d.record.components:g.components,path:D,aliasOf:d?d.record:g}))}let b,A;for(const C of w){const{path:D}=C;if(h&&D[0]!=="/"){const Y=h.record.path,le=Y[Y.length-1]==="/"?"":"/";C.path=h.record.path+(D&&le+D)}if(b=LI(C,h,_),d?d.alias.push(b):(A=A||b,A!==b&&A.alias.push(b),f&&u.name&&!Tp(b)&&o(u.name)),g.children){const Y=g.children;for(let le=0;le<Y.length;le++)r(Y[le],b,d&&d.children[le])}d=d||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return A?()=>{o(A)}:Rr}function o(u){if(V_(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&DI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!j_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Tp(u)&&s.set(u.record.name,u)}function c(u,h){let d,f={},g,_;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Oi(1,{location:u});_=d.record.name,f=Te(Ep(h.params,d.keys.filter(A=>!A.optional).map(A=>A.name)),u.params&&Ep(u.params,d.keys.map(A=>A.name))),g=d.stringify(f)}else if("path"in u)g=u.path,d=n.find(A=>A.re.test(g)),d&&(f=d.parse(g),_=d.record.name);else{if(d=h.name?s.get(h.name):n.find(A=>A.re.test(h.path)),!d)throw Oi(1,{location:u,currentLocation:h});_=d.record.name,f=Te({},h.params,u.params),g=d.stringify(f)}const w=[];let b=d;for(;b;)w.unshift(b.record),b=b.parent;return{name:_,path:g,params:f,matched:w,meta:VI(w)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Ep(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function UI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:$I(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function $I(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Tp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function VI(t){return t.reduce((e,n)=>Te(e,n.meta),{})}function bp(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function j_(t,e){return e.children.some(n=>n===t||j_(t,n))}const q_=/#/g,BI=/&/g,jI=/\//g,qI=/=/g,HI=/\?/g,H_=/\+/g,WI=/%5B/g,KI=/%5D/g,W_=/%5E/g,zI=/%60/g,K_=/%7B/g,GI=/%7C/g,z_=/%7D/g,QI=/%20/g;function Wh(t){return encodeURI(""+t).replace(GI,"|").replace(WI,"[").replace(KI,"]")}function YI(t){return Wh(t).replace(K_,"{").replace(z_,"}").replace(W_,"^")}function bu(t){return Wh(t).replace(H_,"%2B").replace(QI,"+").replace(q_,"%23").replace(BI,"%26").replace(zI,"`").replace(K_,"{").replace(z_,"}").replace(W_,"^")}function XI(t){return bu(t).replace(qI,"%3D")}function JI(t){return Wh(t).replace(q_,"%23").replace(HI,"%3F")}function ZI(t){return t==null?"":JI(t).replace(jI,"%2F")}function Fa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function eC(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(H_," "),o=r.indexOf("="),a=Fa(o<0?r:r.slice(0,o)),l=o<0?null:Fa(r.slice(o+1));if(a in e){let c=e[a];hn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ip(t){let e="";for(let n in t){const s=t[n];if(n=XI(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(hn(s)?s.map(r=>r&&bu(r)):[s&&bu(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function tC(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=hn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const nC=Symbol(""),Cp=Symbol(""),Kh=Symbol(""),zh=Symbol(""),Iu=Symbol("");function cr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Zn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Oi(4,{from:n,to:e})):h instanceof Error?a(h):RI(h)?a(Oi(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function xc(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(sC(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Zn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=cI(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Zn(d,n,s,r,o)()}))}}return i}function sC(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Sp(t){const e=Gt(Kh),n=Gt(zh),s=Ht(()=>e.resolve(F(t.to))),i=Ht(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Ni.bind(null,u));if(d>-1)return d;const f=Rp(l[c-2]);return c>1&&Rp(u)===f&&h[h.length-1].path!==f?h.findIndex(Ni.bind(null,l[c-2])):d}),r=Ht(()=>i.value>-1&&oC(n.params,s.value.params)),o=Ht(()=>i.value>-1&&i.value===n.matched.length-1&&U_(n.params,s.value.params));function a(l={}){return rC(l)?e[F(t.replace)?"replace":"push"](F(t.to)).catch(Rr):Promise.resolve()}return{route:s,href:Ht(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const iC=y_({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sp,setup(t,{slots:e}){const n=mo(Sp(t)),{options:s}=Gt(Kh),i=Ht(()=>({[kp(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[kp(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:L_("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),mn=iC;function rC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function oC(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!hn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Rp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const kp=(t,e,n)=>t??e??n,aC=y_({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Gt(Iu),i=Ht(()=>t.route||s.value),r=Gt(Cp,0),o=Ht(()=>{let c=F(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ht(()=>i.value.matched[o.value]);_a(Cp,Ht(()=>o.value+1)),_a(nC,a),_a(Iu,i);const l=G();return Ir(()=>[l.value,a.value,t.name],([c,u,h],[d,f,g])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Ni(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Ap(n.default,{Component:d,route:c});const f=h.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,w=L_(d,Te({},g,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Ap(n.default,{Component:w,route:c})||w}}});function Ap(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const G_=aC;function lC(t){const e=FI(t.routes,t),n=t.parseQuery||eC,s=t.stringifyQuery||Ip,i=t.history,r=cr(),o=cr(),a=cr(),l=s_(Yn);let c=Yn;hi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Oc.bind(null,T=>""+T),h=Oc.bind(null,ZI),d=Oc.bind(null,Fa);function f(T,U){let M,j;return V_(T)?(M=e.getRecordMatcher(T),j=U):j=T,e.addRoute(j,M)}function g(T){const U=e.getRecordMatcher(T);U&&e.removeRoute(U)}function _(){return e.getRoutes().map(T=>T.record)}function w(T){return!!e.getRecordMatcher(T)}function b(T,U){if(U=Te({},U||l.value),typeof T=="string"){const p=Dc(n,T,U.path),m=e.resolve({path:p.path},U),v=i.createHref(p.fullPath);return Te(p,m,{params:d(m.params),hash:Fa(p.hash),redirectedFrom:void 0,href:v})}let M;if("path"in T)M=Te({},T,{path:Dc(n,T.path,U.path).path});else{const p=Te({},T.params);for(const m in p)p[m]==null&&delete p[m];M=Te({},T,{params:h(T.params)}),U.params=h(U.params)}const j=e.resolve(M,U),fe=T.hash||"";j.params=u(d(j.params));const $e=dI(s,Te({},T,{hash:YI(fe),path:j.path})),ie=i.createHref($e);return Te({fullPath:$e,hash:fe,query:s===Ip?tC(T.query):T.query||{}},j,{redirectedFrom:void 0,href:ie})}function A(T){return typeof T=="string"?Dc(n,T,l.value.path):Te({},T)}function C(T,U){if(c!==T)return Oi(8,{from:U,to:T})}function D(T){return me(T)}function Y(T){return D(Te(A(T),{replace:!0}))}function le(T){const U=T.matched[T.matched.length-1];if(U&&U.redirect){const{redirect:M}=U;let j=typeof M=="function"?M(T):M;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=A(j):{path:j},j.params={}),Te({query:T.query,hash:T.hash,params:"path"in j?{}:T.params},j)}}function me(T,U){const M=c=b(T),j=l.value,fe=T.state,$e=T.force,ie=T.replace===!0,p=le(M);if(p)return me(Te(A(p),{state:typeof p=="object"?Te({},fe,p.state):fe,force:$e,replace:ie}),U||M);const m=M;m.redirectedFrom=U;let v;return!$e&&fI(s,j,M)&&(v=Oi(16,{to:m,from:j}),Es(j,j,!0,!1)),(v?Promise.resolve(v):Re(m,j)).catch(E=>On(E)?On(E,2)?E:Zt(E):Ae(E,m,j)).then(E=>{if(E){if(On(E,2))return me(Te({replace:ie},A(E.to),{state:typeof E.to=="object"?Te({},fe,E.to.state):fe,force:$e}),U||m)}else E=ut(m,j,!0,ie,fe);return Ee(m,j,E),E})}function q(T,U){const M=C(T,U);return M?Promise.reject(M):Promise.resolve()}function Re(T,U){let M;const[j,fe,$e]=cC(T,U);M=xc(j.reverse(),"beforeRouteLeave",T,U);for(const p of j)p.leaveGuards.forEach(m=>{M.push(Zn(m,T,U))});const ie=q.bind(null,T,U);return M.push(ie),ci(M).then(()=>{M=[];for(const p of r.list())M.push(Zn(p,T,U));return M.push(ie),ci(M)}).then(()=>{M=xc(fe,"beforeRouteUpdate",T,U);for(const p of fe)p.updateGuards.forEach(m=>{M.push(Zn(m,T,U))});return M.push(ie),ci(M)}).then(()=>{M=[];for(const p of T.matched)if(p.beforeEnter&&!U.matched.includes(p))if(hn(p.beforeEnter))for(const m of p.beforeEnter)M.push(Zn(m,T,U));else M.push(Zn(p.beforeEnter,T,U));return M.push(ie),ci(M)}).then(()=>(T.matched.forEach(p=>p.enterCallbacks={}),M=xc($e,"beforeRouteEnter",T,U),M.push(ie),ci(M))).then(()=>{M=[];for(const p of o.list())M.push(Zn(p,T,U));return M.push(ie),ci(M)}).catch(p=>On(p,8)?p:Promise.reject(p))}function Ee(T,U,M){for(const j of a.list())j(T,U,M)}function ut(T,U,M,j,fe){const $e=C(T,U);if($e)return $e;const ie=U===Yn,p=hi?history.state:{};M&&(j||ie?i.replace(T.fullPath,Te({scroll:ie&&p&&p.scroll},fe)):i.push(T.fullPath,fe)),l.value=T,Es(T,U,M,ie),Zt()}let ht;function Jt(){ht||(ht=i.listen((T,U,M)=>{if(!Go.listening)return;const j=b(T),fe=le(j);if(fe){me(Te(fe,{replace:!0}),j).catch(Rr);return}c=j;const $e=l.value;hi&&EI(mp($e.fullPath,M.delta),xl()),Re(j,$e).catch(ie=>On(ie,12)?ie:On(ie,2)?(me(ie.to,j).then(p=>{On(p,20)&&!M.delta&&M.type===zr.pop&&i.go(-1,!1)}).catch(Rr),Promise.reject()):(M.delta&&i.go(-M.delta,!1),Ae(ie,j,$e))).then(ie=>{ie=ie||ut(j,$e,!1),ie&&(M.delta&&!On(ie,8)?i.go(-M.delta,!1):M.type===zr.pop&&On(ie,20)&&i.go(-1,!1)),Ee(j,$e,ie)}).catch(Rr)}))}let Nn=cr(),ar=cr(),He;function Ae(T,U,M){Zt(T);const j=ar.list();return j.length?j.forEach(fe=>fe(T,U,M)):console.error(T),Promise.reject(T)}function Ie(){return He&&l.value!==Yn?Promise.resolve():new Promise((T,U)=>{Nn.add([T,U])})}function Zt(T){return He||(He=!T,Jt(),Nn.list().forEach(([U,M])=>T?M(T):U()),Nn.reset()),T}function Es(T,U,M,j){const{scrollBehavior:fe}=t;if(!hi||!fe)return Promise.resolve();const $e=!M&&TI(mp(T.fullPath,0))||(j||!M)&&history.state&&history.state.scroll||null;return l_().then(()=>fe(T,U,$e)).then(ie=>ie&&wI(ie)).catch(ie=>Ae(ie,T,U))}const en=T=>i.go(T);let kt;const ai=new Set,Go={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,hasRoute:w,getRoutes:_,resolve:b,options:t,push:D,replace:Y,go:en,back:()=>en(-1),forward:()=>en(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ar.add,isReady:Ie,install(T){const U=this;T.component("RouterLink",mn),T.component("RouterView",G_),T.config.globalProperties.$router=U,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>F(l)}),hi&&!kt&&l.value===Yn&&(kt=!0,D(i.location).catch(fe=>{}));const M={};for(const fe in Yn)M[fe]=Ht(()=>l.value[fe]);T.provide(Kh,U),T.provide(zh,mo(M)),T.provide(Iu,l);const j=T.unmount;ai.add(T),T.unmount=function(){ai.delete(T),ai.size<1&&(c=Yn,ht&&ht(),ht=null,l.value=Yn,kt=!1,He=!1),j()}}};return Go}function ci(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function cC(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ni(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ni(c,l))||i.push(l))}return[n,s,i]}function Q_(){return Gt(zh)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw Gi(e)},Gi=function(t){return new Error("Firebase Database ("+Y_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uC=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Pl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(n[u],n[h],n[d],n[f])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(X_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const g=c<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},J_=function(t){const e=X_(t);return Pl.encodeByteArray(e,!0)},Ua=function(t){return J_(t).replace(/\./g,"")},$a=function(t){try{return Pl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(t){return Z_(void 0,t)}function Z_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!dC(n)||(t[n]=Z_(t[n],e[n]));return t}function dC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=()=>fC().__FIREBASE_DEFAULTS__,gC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$a(t[1]);return e&&JSON.parse(e)},Ml=()=>{try{return pC()||gC()||mC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ey=t=>{var e,n;return(n=(e=Ml())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ty=t=>{const e=ey(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},_C=()=>{var t;return(t=Ml())===null||t===void 0?void 0:t.config},ny=t=>{var e;return(e=Ml())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ua(JSON.stringify(n)),Ua(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function yC(){var t;const e=(t=Ml())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function iy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wC(){const t=bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ry(){return Y_.NODE_ADMIN===!0}function oy(){try{return typeof indexedDB=="object"}catch{return!1}}function EC(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC="FirebaseError";class An extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=TC,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qi.prototype.create)}}class Qi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?bC(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new An(i,a,s)}}function bC(t,e){return t.replace(IC,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const IC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t){return JSON.parse(t)}function at(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Qr($a(r[0])||""),n=Qr($a(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},CC=function(t){const e=ay(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},SC=function(t){const e=ay(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Di(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Cu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Va(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ba(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Np(r)&&Np(o)){if(!Ba(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Np(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function _r(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function yr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function kC(t,e){const n=new AC(t,e);return n.subscribe.bind(n)}class AC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");NC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Pc),i.error===void 0&&(i.error=Pc),i.complete===void 0&&(i.complete=Pc);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pc(){}function OC(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,P(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ll=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Gr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(MC(e))try{this.getOrInitializeService({instanceIdentifier:Cs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Cs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cs){return this.instances.has(e)}getOptions(e=Cs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:PC(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Cs){return this.component?this.component.multipleInstances?e:Cs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PC(t){return t===Cs?void 0:t}function MC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const FC={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},UC=ge.INFO,$C={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},VC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=$C[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _o{constructor(e){this.name=e,this._logLevel=UC,this._logHandler=VC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const BC=(t,e)=>e.some(n=>t instanceof n);let Op,Dp;function jC(){return Op||(Op=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qC(){return Dp||(Dp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ly=new WeakMap,Su=new WeakMap,cy=new WeakMap,Mc=new WeakMap,Qh=new WeakMap;function HC(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(os(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ly.set(n,t)}).catch(()=>{}),Qh.set(e,t),e}function WC(t){if(Su.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Su.set(t,e)}let Ru={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Su.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return os(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function KC(t){Ru=t(Ru)}function zC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Lc(this),e,...n);return cy.set(s,e.sort?e.sort():[e]),os(s)}:qC().includes(t)?function(...e){return t.apply(Lc(this),e),os(ly.get(this))}:function(...e){return os(t.apply(Lc(this),e))}}function GC(t){return typeof t=="function"?zC(t):(t instanceof IDBTransaction&&WC(t),BC(t,jC())?new Proxy(t,Ru):t)}function os(t){if(t instanceof IDBRequest)return HC(t);if(Mc.has(t))return Mc.get(t);const e=GC(t);return e!==t&&(Mc.set(t,e),Qh.set(e,t)),e}const Lc=t=>Qh.get(t);function QC(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=os(o);return s&&o.addEventListener("upgradeneeded",l=>{s(os(o.result),l.oldVersion,l.newVersion,os(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const YC=["get","getKey","getAll","getAllKeys","count"],XC=["put","add","delete","clear"],Fc=new Map;function xp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fc.get(e))return Fc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=XC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||YC.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Fc.set(e,r),r}KC(t=>({...t,get:(e,n,s)=>xp(e,n)||t.get(e,n,s),has:(e,n)=>!!xp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ZC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ku="@firebase/app",Pp="0.9.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=new _o("@firebase/app"),eS="@firebase/app-compat",tS="@firebase/analytics-compat",nS="@firebase/analytics",sS="@firebase/app-check-compat",iS="@firebase/app-check",rS="@firebase/auth",oS="@firebase/auth-compat",aS="@firebase/database",lS="@firebase/database-compat",cS="@firebase/functions",uS="@firebase/functions-compat",hS="@firebase/installations",dS="@firebase/installations-compat",fS="@firebase/messaging",pS="@firebase/messaging-compat",gS="@firebase/performance",mS="@firebase/performance-compat",_S="@firebase/remote-config",yS="@firebase/remote-config-compat",vS="@firebase/storage",wS="@firebase/storage-compat",ES="@firebase/firestore",TS="@firebase/firestore-compat",bS="firebase",IS="9.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="[DEFAULT]",CS={[ku]:"fire-core",[eS]:"fire-core-compat",[nS]:"fire-analytics",[tS]:"fire-analytics-compat",[iS]:"fire-app-check",[sS]:"fire-app-check-compat",[rS]:"fire-auth",[oS]:"fire-auth-compat",[aS]:"fire-rtdb",[lS]:"fire-rtdb-compat",[cS]:"fire-fn",[uS]:"fire-fn-compat",[hS]:"fire-iid",[dS]:"fire-iid-compat",[fS]:"fire-fcm",[pS]:"fire-fcm-compat",[gS]:"fire-perf",[mS]:"fire-perf-compat",[_S]:"fire-rc",[yS]:"fire-rc-compat",[vS]:"fire-gcs",[wS]:"fire-gcs-compat",[ES]:"fire-fst",[TS]:"fire-fst-compat","fire-js":"fire-js",[bS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=new Map,Nu=new Map;function SS(t,e){try{t.container.addComponent(e)}catch(n){Hs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cn(t){const e=t.name;if(Nu.has(e))return Hs.debug(`There were multiple attempts to register component ${e}.`),!1;Nu.set(e,t);for(const n of ja.values())SS(n,t);return!0}function Fl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},as=new Qi("app","Firebase",RS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw as.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=IS;function uy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Au,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw as.create("bad-app-name",{appName:String(i)});if(n||(n=_C()),!n)throw as.create("no-options");const r=ja.get(i);if(r){if(Ba(n,r.options)&&Ba(s,r.config))return r;throw as.create("duplicate-app",{appName:i})}const o=new LC(i);for(const l of Nu.values())o.addComponent(l);const a=new kS(n,s,o);return ja.set(i,a),a}function Ul(t=Au){const e=ja.get(t);if(!e&&t===Au)return uy();if(!e)throw as.create("no-app",{appName:t});return e}function $t(t,e,n){var s;let i=(s=CS[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hs.warn(a.join(" "));return}Cn(new dn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS="firebase-heartbeat-database",NS=1,Yr="firebase-heartbeat-store";let Uc=null;function hy(){return Uc||(Uc=QC(AS,NS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yr)}}}).catch(t=>{throw as.create("idb-open",{originalErrorMessage:t.message})})),Uc}async function OS(t){try{return(await hy()).transaction(Yr).objectStore(Yr).get(dy(t))}catch(e){if(e instanceof An)Hs.warn(e.message);else{const n=as.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hs.warn(n.message)}}}async function Mp(t,e){try{const s=(await hy()).transaction(Yr,"readwrite");return await s.objectStore(Yr).put(e,dy(t)),s.done}catch(n){if(n instanceof An)Hs.warn(n.message);else{const s=as.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hs.warn(s.message)}}}function dy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=1024,xS=30*24*60*60*1e3;class PS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=xS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Lp(),{heartbeatsToSend:n,unsentEntries:s}=MS(this._heartbeatsCache.heartbeats),i=Ua(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Lp(){return new Date().toISOString().substring(0,10)}function MS(t,e=DS){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Fp(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Fp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class LS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oy()?EC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await OS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fp(t){return Ua(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(t){Cn(new dn("platform-logger",e=>new JC(e),"PRIVATE")),Cn(new dn("heartbeat",e=>new PS(e),"PRIVATE")),$t(ku,Pp,t),$t(ku,Pp,"esm2017"),$t("fire-js","")}FS("");var US=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Yh=Yh||{},Z=US||self;function qa(){}function $l(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function yo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function $S(t){return Object.prototype.hasOwnProperty.call(t,$c)&&t[$c]||(t[$c]=++VS)}var $c="closure_uid_"+(1e9*Math.random()>>>0),VS=0;function BS(t,e,n){return t.call.apply(t.bind,arguments)}function jS(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function wt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?wt=BS:wt=jS,wt.apply(null,arguments)}function ta(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ct(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function _s(){this.s=this.s,this.o=this.o}var qS=0;_s.prototype.s=!1;_s.prototype.na=function(){!this.s&&(this.s=!0,this.M(),qS!=0)&&$S(this)};_s.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const fy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Xh(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Up(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if($l(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Et.prototype.h=function(){this.defaultPrevented=!0};var HS=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",qa,e),Z.removeEventListener("test",qa,e)}catch{}return t}();function Ha(t){return/^[\s\xa0]*$/.test(t)}var $p=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Vc(t,e){return t<e?-1:t>e?1:0}function Vl(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function vn(t){return Vl().indexOf(t)!=-1}function Jh(t){return Jh[" "](t),t}Jh[" "]=qa;function WS(t){var e=GS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var KS=vn("Opera"),xi=vn("Trident")||vn("MSIE"),py=vn("Edge"),Ou=py||xi,gy=vn("Gecko")&&!(Vl().toLowerCase().indexOf("webkit")!=-1&&!vn("Edge"))&&!(vn("Trident")||vn("MSIE"))&&!vn("Edge"),zS=Vl().toLowerCase().indexOf("webkit")!=-1&&!vn("Edge");function my(){var t=Z.document;return t?t.documentMode:void 0}var Wa;e:{var Bc="",jc=function(){var t=Vl();if(gy)return/rv:([^\);]+)(\)|;)/.exec(t);if(py)return/Edge\/([\d\.]+)/.exec(t);if(xi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(zS)return/WebKit\/(\S+)/.exec(t);if(KS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(jc&&(Bc=jc?jc[1]:""),xi){var qc=my();if(qc!=null&&qc>parseFloat(Bc)){Wa=String(qc);break e}}Wa=Bc}var GS={};function QS(){return WS(function(){let t=0;const e=$p(String(Wa)).split("."),n=$p("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Vc(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Vc(i[2].length==0,r[2].length==0)||Vc(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var Du;if(Z.document&&xi){var Vp=my();Du=Vp||parseInt(Wa,10)||void 0}else Du=void 0;var YS=Du;function Xr(t,e){if(Et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(gy){e:{try{Jh(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:XS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Xr.X.h.call(this)}}ct(Xr,Et);var XS={2:"touch",3:"pen",4:"mouse"};Xr.prototype.h=function(){Xr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var vo="closure_listenable_"+(1e6*Math.random()|0),JS=0;function ZS(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++JS,this.ba=this.ea=!1}function Bl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Zh(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function _y(t){const e={};for(const n in t)e[n]=t[n];return e}const Bp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yy(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Bp.length;r++)n=Bp[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function jl(t){this.src=t,this.g={},this.h=0}jl.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Pu(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new ZS(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function xu(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=fy(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Bl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Pu(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var ed="closure_lm_"+(1e6*Math.random()|0),Hc={};function vy(t,e,n,s,i){if(s&&s.once)return Ey(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)vy(t,e[r],n,s,i);return null}return n=sd(n),t&&t[vo]?t.N(e,n,yo(s)?!!s.capture:!!s,i):wy(t,e,n,!1,s,i)}function wy(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=yo(i)?!!i.capture:!!i,a=nd(t);if(a||(t[ed]=a=new jl(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=eR(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)HS||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(by(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function eR(){function t(n){return e.call(t.src,t.listener,n)}const e=tR;return t}function Ey(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ey(t,e[r],n,s,i);return null}return n=sd(n),t&&t[vo]?t.O(e,n,yo(s)?!!s.capture:!!s,i):wy(t,e,n,!0,s,i)}function Ty(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Ty(t,e[r],n,s,i);else s=yo(s)?!!s.capture:!!s,n=sd(n),t&&t[vo]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Pu(r,n,s,i),-1<n&&(Bl(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=nd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Pu(e,n,s,i)),(n=-1<t?e[t]:null)&&td(n))}function td(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[vo])xu(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(by(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=nd(e))?(xu(n,t),n.h==0&&(n.src=null,e[ed]=null)):Bl(t)}}}function by(t){return t in Hc?Hc[t]:Hc[t]="on"+t}function tR(t,e){if(t.ba)t=!0;else{e=new Xr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&td(t),t=n.call(s,e)}return t}function nd(t){return t=t[ed],t instanceof jl?t:null}var Wc="__closure_events_fn_"+(1e9*Math.random()>>>0);function sd(t){return typeof t=="function"?t:(t[Wc]||(t[Wc]=function(e){return t.handleEvent(e)}),t[Wc])}function it(){_s.call(this),this.i=new jl(this),this.P=this,this.I=null}ct(it,_s);it.prototype[vo]=!0;it.prototype.removeEventListener=function(t,e,n,s){Ty(this,t,e,n,s)};function lt(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Et(e,t);else if(e instanceof Et)e.target=e.target||t;else{var i=e;e=new Et(s,t),yy(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=na(o,s,!0,e)&&i}if(o=e.g=t,i=na(o,s,!0,e)&&i,i=na(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=na(o,s,!1,e)&&i}it.prototype.M=function(){if(it.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Bl(n[s]);delete t.g[e],t.h--}}this.I=null};it.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};it.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function na(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&xu(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var id=Z.JSON.stringify;function nR(){var t=Sy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class sR{constructor(){this.h=this.g=null}add(e,n){const s=Iy.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Iy=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new iR,t=>t.reset());class iR{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function rR(t){Z.setTimeout(()=>{throw t},0)}function Cy(t,e){Mu||oR(),Lu||(Mu(),Lu=!0),Sy.add(t,e)}var Mu;function oR(){var t=Z.Promise.resolve(void 0);Mu=function(){t.then(aR)}}var Lu=!1,Sy=new sR;function aR(){for(var t;t=nR();){try{t.h.call(t.g)}catch(n){rR(n)}var e=Iy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Lu=!1}function ql(t,e){it.call(this),this.h=t||1,this.g=e||Z,this.j=wt(this.lb,this),this.l=Date.now()}ct(ql,it);V=ql.prototype;V.ca=!1;V.R=null;V.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),lt(this,"tick"),this.ca&&(rd(this),this.start()))}};V.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function rd(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}V.M=function(){ql.X.M.call(this),rd(this),delete this.g};function od(t,e,n){if(typeof t=="function")n&&(t=wt(t,n));else if(t&&typeof t.handleEvent=="function")t=wt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function Ry(t){t.g=od(()=>{t.g=null,t.i&&(t.i=!1,Ry(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class lR extends _s{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ry(this)}M(){super.M(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jr(t){_s.call(this),this.h=t,this.g={}}ct(Jr,_s);var jp=[];function ky(t,e,n,s){Array.isArray(n)||(n&&(jp[0]=n.toString()),n=jp);for(var i=0;i<n.length;i++){var r=vy(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ay(t){Zh(t.g,function(e,n){this.g.hasOwnProperty(n)&&td(e)},t),t.g={}}Jr.prototype.M=function(){Jr.X.M.call(this),Ay(this)};Jr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Hl(){this.g=!0}Hl.prototype.Aa=function(){this.g=!1};function cR(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function uR(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function pi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+dR(t,n)+(s?" "+s:"")})}function hR(t,e){t.info(function(){return"TIMEOUT: "+e})}Hl.prototype.info=function(){};function dR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return id(n)}catch{return e}}var ti={},qp=null;function Wl(){return qp=qp||new it}ti.Pa="serverreachability";function Ny(t){Et.call(this,ti.Pa,t)}ct(Ny,Et);function Zr(t){const e=Wl();lt(e,new Ny(e))}ti.STAT_EVENT="statevent";function Oy(t,e){Et.call(this,ti.STAT_EVENT,t),this.stat=e}ct(Oy,Et);function Rt(t){const e=Wl();lt(e,new Oy(e,t))}ti.Qa="timingevent";function Dy(t,e){Et.call(this,ti.Qa,t),this.size=e}ct(Dy,Et);function wo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var Kl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},xy={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ad(){}ad.prototype.h=null;function Hp(t){return t.h||(t.h=t.i())}function Py(){}var Eo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ld(){Et.call(this,"d")}ct(ld,Et);function cd(){Et.call(this,"c")}ct(cd,Et);var Fu;function zl(){}ct(zl,ad);zl.prototype.g=function(){return new XMLHttpRequest};zl.prototype.i=function(){return{}};Fu=new zl;function To(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Jr(this),this.O=fR,t=Ou?125:void 0,this.T=new ql(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new My}function My(){this.i=null,this.g="",this.h=!1}var fR=45e3,Uu={},Ka={};V=To.prototype;V.setTimeout=function(t){this.O=t};function $u(t,e,n){t.K=1,t.v=Ql(jn(e)),t.s=n,t.P=!0,Ly(t,null)}function Ly(t,e){t.F=Date.now(),bo(t),t.A=jn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Hy(n.i,"t",s),t.C=0,n=t.l.H,t.h=new My,t.g=hv(t.l,n?e:null,!t.s),0<t.N&&(t.L=new lR(wt(t.La,t,t.g),t.N)),ky(t.S,t.g,"readystatechange",t.ib),e=t.H?_y(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Zr(),cR(t.j,t.u,t.A,t.m,t.U,t.s)}V.ib=function(t){t=t.target;const e=this.L;e&&Pn(t)==3?e.l():this.La(t)};V.La=function(t){try{if(t==this.g)e:{const u=Pn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Ou||this.g&&(this.h.h||this.g.fa()||Gp(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Zr(3):Zr(2)),Gl(this);var n=this.g.aa();this.Y=n;t:if(Fy(this)){var s=Gp(this.g);t="";var i=s.length,r=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ds(this),Ar(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,uR(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ha(a)){var c=a;break t}}c=null}if(n=c)pi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Vu(this,n);else{this.i=!1,this.o=3,Rt(12),Ds(this),Ar(this);break e}}this.P?(Uy(this,u,o),Ou&&this.i&&u==3&&(ky(this.S,this.T,"tick",this.hb),this.T.start())):(pi(this.j,this.m,o,null),Vu(this,o)),u==4&&Ds(this),this.i&&!this.I&&(u==4?av(this.l,this):(this.i=!1,bo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Rt(12)):(this.o=0,Rt(13)),Ds(this),Ar(this)}}}catch{}finally{}};function Fy(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Uy(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=pR(t,n),i==Ka){e==4&&(t.o=4,Rt(14),s=!1),pi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Uu){t.o=4,Rt(15),pi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else pi(t.j,t.m,i,null),Vu(t,i);Fy(t)&&i!=Ka&&i!=Uu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Rt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),md(e),e.K=!0,Rt(11))):(pi(t.j,t.m,n,"[Invalid Chunked Response]"),Ds(t),Ar(t))}V.hb=function(){if(this.g){var t=Pn(this.g),e=this.g.fa();this.C<e.length&&(Gl(this),Uy(this,t,e),this.i&&t!=4&&bo(this))}};function pR(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Ka:(n=Number(e.substring(n,s)),isNaN(n)?Uu:(s+=1,s+n>e.length?Ka:(e=e.substr(s,n),t.C=s+n,e)))}V.cancel=function(){this.I=!0,Ds(this)};function bo(t){t.V=Date.now()+t.O,$y(t,t.O)}function $y(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=wo(wt(t.gb,t),e)}function Gl(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}V.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(hR(this.j,this.A),this.K!=2&&(Zr(),Rt(17)),Ds(this),this.o=2,Ar(this)):$y(this,this.V-t)};function Ar(t){t.l.G==0||t.I||av(t.l,t)}function Ds(t){Gl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,rd(t.T),Ay(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Vu(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Bu(n.h,t))){if(!t.J&&Bu(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Qa(n),Jl(n);else break e;gd(n),Rt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=wo(wt(n.cb,n),6e3));if(1>=zy(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else xs(n,11)}else if((t.J||n.g==t)&&Qa(n),!Ha(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(ud(r,r.h),r.h=null))}if(s.D){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,Fe(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=uv(s,s.H?s.ka:null,s.V),o.J){Gy(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(Gl(a),bo(a)),s.g=o}else rv(s);0<n.i.length&&Zl(n)}else c[0]!="stop"&&c[0]!="close"||xs(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?xs(n,7):pd(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Zr(4)}catch{}}function gR(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if($l(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function mR(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if($l(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Vy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if($l(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=mR(t),s=gR(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var By=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _R(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $s(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof $s){this.h=e!==void 0?e:t.h,za(this,t.j),this.s=t.s,this.g=t.g,Ga(this,t.m),this.l=t.l,e=t.i;var n=new eo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Wp(this,n),this.o=t.o}else t&&(n=String(t).match(By))?(this.h=!!e,za(this,n[1]||"",!0),this.s=vr(n[2]||""),this.g=vr(n[3]||"",!0),Ga(this,n[4]),this.l=vr(n[5]||"",!0),Wp(this,n[6]||"",!0),this.o=vr(n[7]||"")):(this.h=!!e,this.i=new eo(null,this.h))}$s.prototype.toString=function(){var t=[],e=this.j;e&&t.push(wr(e,Kp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(wr(e,Kp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(wr(n,n.charAt(0)=="/"?wR:vR,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",wr(n,TR)),t.join("")};function jn(t){return new $s(t)}function za(t,e,n){t.j=n?vr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ga(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Wp(t,e,n){e instanceof eo?(t.i=e,bR(t.i,t.h)):(n||(e=wr(e,ER)),t.i=new eo(e,t.h))}function Fe(t,e,n){t.i.set(e,n)}function Ql(t){return Fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function vr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function wr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,yR),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function yR(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Kp=/[#\/\?@]/g,vR=/[#\?:]/g,wR=/[#\?]/g,ER=/[#\?@]/g,TR=/#/g;function eo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ys(t){t.g||(t.g=new Map,t.h=0,t.i&&_R(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=eo.prototype;V.add=function(t,e){ys(this),this.i=null,t=Xi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function jy(t,e){ys(t),e=Xi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function qy(t,e){return ys(t),e=Xi(t,e),t.g.has(e)}V.forEach=function(t,e){ys(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};V.oa=function(){ys(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};V.W=function(t){ys(this);let e=[];if(typeof t=="string")qy(this,t)&&(e=e.concat(this.g.get(Xi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return ys(this),this.i=null,t=Xi(this,t),qy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Hy(t,e,n){jy(t,e),0<n.length&&(t.i=null,t.g.set(Xi(t,e),Xh(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Xi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bR(t,e){e&&!t.j&&(ys(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(jy(this,s),Hy(this,i,n))},t)),t.j=e}var IR=class{constructor(e,n){this.h=e,this.g=n}};function Wy(t){this.l=t||CR,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ga&&Z.g.Ga()&&Z.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var CR=10;function Ky(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function zy(t){return t.h?1:t.g?t.g.size:0}function Bu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ud(t,e){t.g?t.g.add(e):t.h=e}function Gy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Wy.prototype.cancel=function(){if(this.i=Qy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Qy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Xh(t.i)}function hd(){}hd.prototype.stringify=function(t){return Z.JSON.stringify(t,void 0)};hd.prototype.parse=function(t){return Z.JSON.parse(t,void 0)};function SR(){this.g=new hd}function RR(t,e,n){const s=n||"";try{Vy(t,function(i,r){let o=i;yo(i)&&(o=id(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function kR(t,e){const n=new Hl;if(Z.Image){const s=new Image;s.onload=ta(sa,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ta(sa,n,s,"TestLoadImage: error",!1,e),s.onabort=ta(sa,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ta(sa,n,s,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function sa(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Io(t){this.l=t.ac||null,this.j=t.jb||!1}ct(Io,ad);Io.prototype.g=function(){return new Yl(this.l,this.j)};Io.prototype.i=function(t){return function(){return t}}({});function Yl(t,e){it.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=dd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ct(Yl,it);var dd=0;V=Yl.prototype;V.open=function(t,e){if(this.readyState!=dd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,to(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Co(this)),this.readyState=dd};V.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,to(this)),this.g&&(this.readyState=3,to(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Yy(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Yy(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}V.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Co(this):to(this),this.readyState==3&&Yy(this)}};V.Va=function(t){this.g&&(this.response=this.responseText=t,Co(this))};V.Ua=function(t){this.g&&(this.response=t,Co(this))};V.ga=function(){this.g&&Co(this)};function Co(t){t.readyState=4,t.l=null,t.j=null,t.A=null,to(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function to(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Yl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var AR=Z.JSON.parse;function je(t){it.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Xy,this.K=this.L=!1}ct(je,it);var Xy="",NR=/^https?$/i,OR=["POST","PUT"];V=je.prototype;V.Ka=function(t){this.L=t};V.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Fu.g(),this.C=this.u?Hp(this.u):Hp(Fu),this.g.onreadystatechange=wt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){zp(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Z.FormData&&t instanceof Z.FormData,!(0<=fy(OR,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ev(this),0<this.B&&((this.K=DR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=wt(this.qa,this)):this.A=od(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){zp(this,r)}};function DR(t){return xi&&QS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.qa=function(){typeof Yh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,lt(this,"timeout"),this.abort(8))};function zp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Jy(t),Xl(t)}function Jy(t){t.D||(t.D=!0,lt(t,"complete"),lt(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,lt(this,"complete"),lt(this,"abort"),Xl(this))};V.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xl(this,!0)),je.X.M.call(this)};V.Ha=function(){this.s||(this.F||this.v||this.l?Zy(this):this.fb())};V.fb=function(){Zy(this)};function Zy(t){if(t.h&&typeof Yh<"u"&&(!t.C[1]||Pn(t)!=4||t.aa()!=2)){if(t.v&&Pn(t)==4)od(t.Ha,0,t);else if(lt(t,"readystatechange"),Pn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(By)[1]||null;if(!i&&Z.self&&Z.self.location){var r=Z.self.location.protocol;i=r.substr(0,r.length-1)}s=!NR.test(i?i.toLowerCase():"")}n=s}if(n)lt(t,"complete"),lt(t,"success");else{t.m=6;try{var o=2<Pn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Jy(t)}}finally{Xl(t)}}}}function Xl(t,e){if(t.g){ev(t);const n=t.g,s=t.C[0]?qa:null;t.g=null,t.C=null,e||lt(t,"ready");try{n.onreadystatechange=s}catch{}}}function ev(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}function Pn(t){return t.g?t.g.readyState:0}V.aa=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}};V.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),AR(e)}};function Gp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Xy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}V.Ea=function(){return this.m};V.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function tv(t){let e="";return Zh(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function fd(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=tv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Fe(t,e,n))}function ur(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function nv(t){this.Ca=0,this.i=[],this.j=new Hl,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ur("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ur("baseRetryDelayMs",5e3,t),this.bb=ur("retryDelaySeedMs",1e4,t),this.$a=ur("forwardChannelMaxRetries",2,t),this.ta=ur("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Wy(t&&t.concurrentRequestLimit),this.Fa=new SR,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}V=nv.prototype;V.ma=8;V.G=1;function pd(t){if(sv(t),t.G==3){var e=t.U++,n=jn(t.F);Fe(n,"SID",t.I),Fe(n,"RID",e),Fe(n,"TYPE","terminate"),So(t,n),e=new To(t,t.j,e,void 0),e.K=2,e.v=Ql(jn(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon&&(n=Z.navigator.sendBeacon(e.v.toString(),"")),!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=hv(e.l,null),e.g.da(e.v)),e.F=Date.now(),bo(e)}cv(t)}function Jl(t){t.g&&(md(t),t.g.cancel(),t.g=null)}function sv(t){Jl(t),t.u&&(Z.clearTimeout(t.u),t.u=null),Qa(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function Zl(t){Ky(t.h)||t.m||(t.m=!0,Cy(t.Ja,t),t.C=0)}function xR(t,e){return zy(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=wo(wt(t.Ja,t,e),lv(t,t.C)),t.C++,!0)}V.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new To(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=_y(r),yy(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=iv(this,i,e),n=jn(this.F),Fe(n,"RID",t),Fe(n,"CVER",22),this.D&&Fe(n,"X-HTTP-Session-Id",this.D),So(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(tv(r)))+"&"+e:this.o&&fd(n,this.o,r)),ud(this.h,i),this.Ya&&Fe(n,"TYPE","init"),this.O?(Fe(n,"$req",e),Fe(n,"SID","null"),i.Z=!0,$u(i,n,null)):$u(i,n,e),this.G=2}}else this.G==3&&(t?Qp(this,t):this.i.length==0||Ky(this.h)||Qp(this))};function Qp(t,e){var n;e?n=e.m:n=t.U++;const s=jn(t.F);Fe(s,"SID",t.I),Fe(s,"RID",n),Fe(s,"AID",t.T),So(t,s),t.o&&t.s&&fd(s,t.o,t.s),n=new To(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=iv(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ud(t.h,n),$u(n,s,e)}function So(t,e){t.ia&&Zh(t.ia,function(n,s){Fe(e,s,n)}),t.l&&Vy({},function(n,s){Fe(e,s,n)})}function iv(t,e,n){n=Math.min(t.i.length,n);var s=t.l?wt(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{RR(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function rv(t){t.g||t.u||(t.Z=1,Cy(t.Ia,t),t.A=0)}function gd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=wo(wt(t.Ia,t),lv(t,t.A)),t.A++,!0)}V.Ia=function(){if(this.u=null,ov(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=wo(wt(this.eb,this),t)}};V.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Rt(10),Jl(this),ov(this))};function md(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function ov(t){t.g=new To(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=jn(t.sa);Fe(e,"RID","rpc"),Fe(e,"SID",t.I),Fe(e,"CI",t.L?"0":"1"),Fe(e,"AID",t.T),Fe(e,"TYPE","xmlhttp"),So(t,e),t.o&&t.s&&fd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ql(jn(e)),n.s=null,n.P=!0,Ly(n,t)}V.cb=function(){this.v!=null&&(this.v=null,Jl(this),gd(this),Rt(19))};function Qa(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function av(t,e){var n=null;if(t.g==e){Qa(t),md(t),t.g=null;var s=2}else if(Bu(t.h,e))n=e.D,Gy(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Wl(),lt(s,new Dy(s,n)),Zl(t)}else rv(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&xR(t,e)||s==2&&gd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:xs(t,5);break;case 4:xs(t,10);break;case 3:xs(t,6);break;default:xs(t,2)}}}function lv(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function xs(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=wt(t.kb,t);n||(n=new $s("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||za(n,"https"),Ql(n)),kR(n.toString(),s)}else Rt(2);t.G=0,t.l&&t.l.va(e),cv(t),sv(t)}V.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function cv(t){if(t.G=0,t.la=[],t.l){const e=Qy(t.h);(e.length!=0||t.i.length!=0)&&(Up(t.la,e),Up(t.la,t.i),t.h.i.length=0,Xh(t.i),t.i.length=0),t.l.ua()}}function uv(t,e,n){var s=n instanceof $s?jn(n):new $s(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ga(s,s.m);else{var i=Z.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new $s(null,void 0);s&&za(r,s),e&&(r.g=e),i&&Ga(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Fe(s,n,e),Fe(s,"VER",t.ma),So(t,s),s}function hv(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new je(new Io({jb:!0})):new je(t.ra),e.Ka(t.H),e}function dv(){}V=dv.prototype;V.xa=function(){};V.wa=function(){};V.va=function(){};V.ua=function(){};V.Ra=function(){};function Ya(){if(xi&&!(10<=Number(YS)))throw Error("Environmental error: no available transport.")}Ya.prototype.g=function(t,e){return new jt(t,e)};function jt(t,e){it.call(this),this.g=new nv(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ha(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ha(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ji(this)}ct(jt,it);jt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Rt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=uv(t,null,t.V),Zl(t)};jt.prototype.close=function(){pd(this.g)};jt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=id(t),t=n);e.i.push(new IR(e.ab++,t)),e.G==3&&Zl(e)};jt.prototype.M=function(){this.g.l=null,delete this.j,pd(this.g),delete this.g,jt.X.M.call(this)};function fv(t){ld.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ct(fv,ld);function pv(){cd.call(this),this.status=1}ct(pv,cd);function Ji(t){this.g=t}ct(Ji,dv);Ji.prototype.xa=function(){lt(this.g,"a")};Ji.prototype.wa=function(t){lt(this.g,new fv(t))};Ji.prototype.va=function(t){lt(this.g,new pv)};Ji.prototype.ua=function(){lt(this.g,"b")};Ya.prototype.createWebChannel=Ya.prototype.g;jt.prototype.send=jt.prototype.u;jt.prototype.open=jt.prototype.m;jt.prototype.close=jt.prototype.close;Kl.NO_ERROR=0;Kl.TIMEOUT=8;Kl.HTTP_ERROR=6;xy.COMPLETE="complete";Py.EventType=Eo;Eo.OPEN="a";Eo.CLOSE="b";Eo.ERROR="c";Eo.MESSAGE="d";it.prototype.listen=it.prototype.N;je.prototype.listenOnce=je.prototype.O;je.prototype.getLastError=je.prototype.Oa;je.prototype.getLastErrorCode=je.prototype.Ea;je.prototype.getStatus=je.prototype.aa;je.prototype.getResponseJson=je.prototype.Sa;je.prototype.getResponseText=je.prototype.fa;je.prototype.send=je.prototype.da;je.prototype.setWithCredentials=je.prototype.Ka;var PR=function(){return new Ya},MR=function(){return Wl()},Kc=Kl,LR=xy,FR=ti,Yp={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},UR=Io,ia=Py,$R=je;const Xp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi="9.16.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new _o("@firebase/firestore");function Jp(){return Ws.logLevel}function B(t,...e){if(Ws.logLevel<=ge.DEBUG){const n=e.map(_d);Ws.debug(`Firestore (${Zi}): ${t}`,...n)}}function qn(t,...e){if(Ws.logLevel<=ge.ERROR){const n=e.map(_d);Ws.error(`Firestore (${Zi}): ${t}`,...n)}}function ju(t,...e){if(Ws.logLevel<=ge.WARN){const n=e.map(_d);Ws.warn(`Firestore (${Zi}): ${t}`,...n)}}function _d(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${Zi}) INTERNAL ASSERTION FAILED: `+t;throw qn(e),new Error(e)}function Oe(t,e){t||J()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class VR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class BR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jR{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new $n;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new $n,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new $n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Oe(typeof s.accessToken=="string"),new gv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new dt(e)}}class qR{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Oe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class HR{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new qR(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class WR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KR{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.A=n.token,new WR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=zR(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function ve(t,e){return t<e?-1:t>e?1:0}function Pi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Qe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Qe(0,0))}static max(){return new te(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n,s){n===void 0?n=0:n>e.length&&J(),s===void 0?s=e.length-n:s>e.length-n&&J(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return no.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof no?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ue extends no{construct(e,n,s){return new Ue(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new K(R.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const GR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends no{construct(e,n,s){return new yt(e,n,s)}static isValidIdentifier(e){return GR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new K(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new K(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(Ue.fromString(e))}static fromName(e){return new z(Ue.fromString(e).popFirst(5))}static empty(){return new z(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new Ue(e.slice()))}}function QR(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(s===1e9?new Qe(n+1,0):new Qe(n,s));return new ds(i,z.empty(),e)}function YR(t){return new ds(t.readTime,t.key,-1)}class ds{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ds(te.min(),z.empty(),-1)}static max(){return new ds(te.max(),z.empty(),-1)}}function XR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==JR)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,s)=>{n(e)})}static reject(e){return new k((n,s)=>{s(e)})}static waitFor(e){return new k((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=k.resolve(!1);for(const s of e)n=n.next(i=>i?k.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new k((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new k((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function ko(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}yd.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class so{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new so("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof so&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function _v(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t){return t==null}function Xa(t){return t===0&&1/t==-1/0}function tk(t){return typeof t=="number"&&Number.isInteger(t)&&!Xa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new It(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const nk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fs(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=nk.exec(t);if(Oe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mi(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vv(t){const e=t.mapValue.fields.__previous_value__;return yv(e)?vv(e):e}function io(t){const e=fs(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ks(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?yv(t)?4:sk(t)?9007199254740991:10:J()}function Sn(t,e){if(t===e)return!0;const n=Ks(t);if(n!==Ks(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return io(t).isEqual(io(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=fs(s.timestampValue),o=fs(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Mi(s.bytesValue).isEqual(Mi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ze(s.doubleValue),o=ze(i.doubleValue);return r===o?Xa(r)===Xa(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Pi(t.arrayValue.values||[],e.arrayValue.values||[],Sn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Zp(r)!==Zp(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Sn(r[a],o[a])))return!1;return!0}(t,e);default:return J()}}function ro(t,e){return(t.values||[]).find(n=>Sn(n,e))!==void 0}function Li(t,e){if(t===e)return 0;const n=Ks(t),s=Ks(e);if(n!==s)return ve(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ze(i.integerValue||i.doubleValue),a=ze(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return eg(t.timestampValue,e.timestampValue);case 4:return eg(io(t),io(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Mi(i),a=Mi(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=ve(o[l],a[l]);if(c!==0)return c}return ve(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=ve(ze(i.latitude),ze(r.latitude));return o!==0?o:ve(ze(i.longitude),ze(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=Li(o[l],a[l]);if(c)return c}return ve(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ra.mapValue&&r===ra.mapValue)return 0;if(i===ra.mapValue)return 1;if(r===ra.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=ve(a[u],c[u]);if(h!==0)return h;const d=Li(o[a[u]],l[c[u]]);if(d!==0)return d}return ve(a.length,c.length)}(t.mapValue,e.mapValue);default:throw J()}}function eg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=fs(t),s=fs(e),i=ve(n.seconds,s.seconds);return i!==0?i:ve(n.nanos,s.nanos)}function Fi(t){return qu(t)}function qu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=fs(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Mi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=qu(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${qu(s.fields[a])}`;return r+"}"}(t.mapValue):J();var e,n}function Hu(t){return!!t&&"integerValue"in t}function vd(t){return!!t&&"arrayValue"in t}function tg(t){return!!t&&"nullValue"in t}function ng(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ta(t){return!!t&&"mapValue"in t}function Nr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ni(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Nr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Nr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n){this.position=e,this.inclusive=n}}function sg(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=z.comparator(z.fromName(o.referenceValue),n.key):s=Li(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function ig(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{}class Ye extends wv{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new rk(e,n,s):n==="array-contains"?new lk(e,s):n==="in"?new ck(e,s):n==="not-in"?new uk(e,s):n==="array-contains-any"?new hk(e,s):new Ye(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new ok(e,s):new ak(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Li(n,this.value)):n!==null&&Ks(this.value)===Ks(n)&&this.matchesComparison(Li(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Rn extends wv{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Rn(e,n)}matches(e){return Ev(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Ev(t){return t.op==="and"}function Tv(t){return ik(t)&&Ev(t)}function ik(t){for(const e of t.filters)if(e instanceof Rn)return!1;return!0}function Wu(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+Fi(t.value);if(Tv(t))return t.filters.map(e=>Wu(e)).join(",");{const e=t.filters.map(n=>Wu(n)).join(",");return`${t.op}(${e})`}}function bv(t,e){return t instanceof Ye?function(n,s){return s instanceof Ye&&n.op===s.op&&n.field.isEqual(s.field)&&Sn(n.value,s.value)}(t,e):t instanceof Rn?function(n,s){return s instanceof Rn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&bv(r,s.filters[o]),!0):!1}(t,e):void J()}function Iv(t){return t instanceof Ye?function(e){return`${e.field.canonicalString()} ${e.op} ${Fi(e.value)}`}(t):t instanceof Rn?function(e){return e.op.toString()+" {"+e.getFilters().map(Iv).join(" ,")+"}"}(t):"Filter"}class rk extends Ye{constructor(e,n,s){super(e,n,s),this.key=z.fromName(s.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.matchesComparison(n)}}class ok extends Ye{constructor(e,n){super(e,"in",n),this.keys=Cv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ak extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=Cv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Cv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>z.fromName(s.referenceValue))}class lk extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return vd(n)&&ro(n.arrayValue,this.value)}}class ck extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ro(this.value.arrayValue,n)}}class uk extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ro(this.value.arrayValue,n)}}class hk extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!vd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ro(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n="asc"){this.field=e,this.dir=n}}function dk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oa(this.root,e,this.comparator,!1)}getReverseIterator(){return new oa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oa(this.root,e,this.comparator,!0)}}class oa{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??rt.RED,this.left=i??rt.EMPTY,this.right=r??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new rt(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(t,e,n,s,i){return this}insert(t,e,n){return new rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new rg(this.data.getIterator())}getIteratorFrom(e){return new rg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class rg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new Xe(yt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Pi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ta(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Nr(n)}setAll(e){let n=yt.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Nr(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Ta(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Ta(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){ni(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Ot(Nr(this.value))}}function Sv(t){const e=[];return ni(t.fields,(n,s)=>{const i=new yt([n]);if(Ta(s)){const r=Sv(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ft(e,0,te.min(),te.min(),te.min(),Ot.empty(),0)}static newFoundDocument(e,n,s,i){return new ft(e,1,n,te.min(),s,i,0)}static newNoDocument(e,n){return new ft(e,2,n,te.min(),te.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,te.min(),te.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ft=null}}function og(t,e=null,n=[],s=[],i=null,r=null,o=null){return new fk(t,e,n,s,i,r,o)}function wd(t){const e=ne(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Wu(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),ec(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Fi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Fi(s)).join(",")),e.ft=n}return e.ft}function Ed(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ig(t.startAt,e.startAt)&&ig(t.endAt,e.endAt)}function Ku(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function pk(t,e,n,s,i,r,o,a){return new tc(t,e,n,s,i,r,o,a)}function nc(t){return new tc(t)}function ag(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gk(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function mk(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function _k(t){return t.collectionGroup!==null}function Ei(t){const e=ne(t);if(e.dt===null){e.dt=[];const n=mk(e),s=gk(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Or(n)),e.dt.push(new Or(yt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Or(yt.keyField(),r))}}}return e.dt}function Hn(t){const e=ne(t);if(!e._t)if(e.limitType==="F")e._t=og(e.path,e.collectionGroup,Ei(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Ei(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Or(r.field,o))}const s=e.endAt?new Ja(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ja(e.startAt.position,e.startAt.inclusive):null;e._t=og(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function zu(t,e,n){return new tc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sc(t,e){return Ed(Hn(t),Hn(e))&&t.limitType===e.limitType}function Rv(t){return`${wd(Hn(t))}|lt:${t.limitType}`}function Gu(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Iv(s)).join(", ")}]`),ec(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Fi(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Fi(s)).join(",")),`Target(${n})`}(Hn(t))}; limitType=${t.limitType})`}function Td(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Ei(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=sg(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Ei(n),s)||n.endAt&&!function(i,r,o){const a=sg(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Ei(n),s))}(t,e)}function yk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function kv(t){return(e,n)=>{let s=!1;for(const i of Ei(t)){const r=vk(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function vk(t,e,n){const s=t.field.isKeyField()?z.comparator(e.key,n.key):function(i,r,o){const a=r.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Li(a,l):J()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xa(e)?"-0":e}}function Nv(t){return{integerValue:""+t}}function wk(t,e){return tk(e)?Nv(e):Av(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this._=void 0}}function Ek(t,e,n){return t instanceof Za?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof oo?Dv(t,e):t instanceof ao?xv(t,e):function(s,i){const r=Ov(s,i),o=lg(r)+lg(s.gt);return Hu(r)&&Hu(s.gt)?Nv(o):Av(s.yt,o)}(t,e)}function Tk(t,e,n){return t instanceof oo?Dv(t,e):t instanceof ao?xv(t,e):n}function Ov(t,e){return t instanceof el?Hu(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Za extends ic{}class oo extends ic{constructor(e){super(),this.elements=e}}function Dv(t,e){const n=Pv(e);for(const s of t.elements)n.some(i=>Sn(i,s))||n.push(s);return{arrayValue:{values:n}}}class ao extends ic{constructor(e){super(),this.elements=e}}function xv(t,e){let n=Pv(e);for(const s of t.elements)n=n.filter(i=>!Sn(i,s));return{arrayValue:{values:n}}}class el extends ic{constructor(e,n){super(),this.yt=e,this.gt=n}}function lg(t){return ze(t.integerValue||t.doubleValue)}function Pv(t){return vd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function bk(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof oo&&s instanceof oo||n instanceof ao&&s instanceof ao?Pi(n.elements,s.elements,Sn):n instanceof el&&s instanceof el?Sn(n.gt,s.gt):n instanceof Za&&s instanceof Za}(t.transform,e.transform)}class Ik{constructor(e,n){this.version=e,this.transformResults=n}}class cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ba(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rc{}function Mv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bd(t.key,cn.none()):new Ao(t.key,t.data,cn.none());{const n=t.data,s=Ot.empty();let i=new Xe(yt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new vs(t.key,s,new Ft(i.toArray()),cn.none())}}function Ck(t,e,n){t instanceof Ao?function(s,i,r){const o=s.value.clone(),a=ug(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof vs?function(s,i,r){if(!ba(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=ug(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Lv(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function Dr(t,e,n,s){return t instanceof Ao?function(i,r,o,a){if(!ba(i.precondition,r))return o;const l=i.value.clone(),c=hg(i.fieldTransforms,a,r);return l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof vs?function(i,r,o,a){if(!ba(i.precondition,r))return o;const l=hg(i.fieldTransforms,a,r),c=r.data;return c.setAll(Lv(i)),c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(i,r,o){return ba(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Sk(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Ov(s.transform,i||null);r!=null&&(n===null&&(n=Ot.empty()),n.set(s.field,r))}return n||null}function cg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Pi(n,s,(i,r)=>bk(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ao extends rc{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vs extends rc{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Lv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ug(t,e,n){const s=new Map;Oe(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Tk(o,a,n[i]))}return s}function hg(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Ek(r,o,e))}return s}class bd extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rk extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,ue;function Ak(t){switch(t){default:return J();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function Fv(t){if(t===void 0)return qn("GRPC error has no .code"),R.UNKNOWN;switch(t){case Ke.OK:return R.OK;case Ke.CANCELLED:return R.CANCELLED;case Ke.UNKNOWN:return R.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return R.INTERNAL;case Ke.UNAVAILABLE:return R.UNAVAILABLE;case Ke.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Ke.NOT_FOUND:return R.NOT_FOUND;case Ke.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Ke.ABORTED:return R.ABORTED;case Ke.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Ke.DATA_LOSS:return R.DATA_LOSS;default:return J()}}(ue=Ke||(Ke={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ni(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return _v(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=new Ze(z.comparator);function Wn(){return Nk}const Uv=new Ze(z.comparator);function Er(...t){let e=Uv;for(const n of t)e=e.insert(n.key,n);return e}function $v(t){let e=Uv;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ps(){return xr()}function Vv(){return xr()}function xr(){return new er(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ok=new Ze(z.comparator),Dk=new Xe(z.comparator);function ae(...t){let e=Dk;for(const n of t)e=e.add(n);return e}const xk=new Xe(ve);function Bv(){return xk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,No.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new oc(te.min(),i,Bv(),Wn(),ae())}}class No{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new No(s,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class jv{constructor(e,n){this.targetId=e,this.Et=n}}class qv{constructor(e,n,s=It.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class dg{constructor(){this.At=0,this.Rt=pg(),this.bt=It.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ae(),n=ae(),s=ae();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:J()}}),new No(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=pg()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Pk{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Wn(),this.qt=fg(),this.Ut=new Xe(ve)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,s=e.Et.count,i=this.Yt(n);if(i){const r=i.target;if(Ku(r))if(s===0){const o=new z(r.path);this.Qt(n,o,ft.newNoDocument(o,te.min()))}else Oe(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((r,o)=>{const a=this.Yt(o);if(a){if(r.current&&Ku(a.target)){const l=new z(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,ft.newNoDocument(l,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=ae();this.qt.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Yt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new oc(e,n,this.Ut,this.Lt,s);return this.Lt=Wn(),this.qt=fg(),this.Ut=new Xe(ve),i}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new dg,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Xe(ve),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new dg),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function fg(){return new Ze(z.comparator)}function pg(){return new Ze(z.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Lk=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Fk=(()=>({and:"AND",or:"OR"}))();class Uk{constructor(e,n){this.databaseId=e,this.wt=n}}function tl(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hv(t,e){return t.wt?e.toBase64():e.toUint8Array()}function $k(t,e){return tl(t,e.toTimestamp())}function Tn(t){return Oe(!!t),te.fromTimestamp(function(e){const n=fs(e);return new Qe(n.seconds,n.nanos)}(t))}function Id(t,e){return function(n){return new Ue(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Wv(t){const e=Ue.fromString(t);return Oe(Qv(e)),e}function Qu(t,e){return Id(t.databaseId,e.path)}function zc(t,e){const n=Wv(e);if(n.get(1)!==t.databaseId.projectId)throw new K(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(Kv(n))}function Yu(t,e){return Id(t.databaseId,e)}function Vk(t){const e=Wv(t);return e.length===4?Ue.emptyPath():Kv(e)}function Xu(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Kv(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function gg(t,e,n){return{name:Qu(t,e),fields:n.value.mapValue.fields}}function Bk(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,c){return l.wt?(Oe(c===void 0||typeof c=="string"),It.fromBase64String(c||"")):(Oe(c===void 0||c instanceof Uint8Array),It.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?R.UNKNOWN:Fv(l.code);return new K(c,l.message||"")}(o);n=new qv(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=zc(t,s.document.name),r=Tn(s.document.updateTime),o=s.document.createTime?Tn(s.document.createTime):te.min(),a=new Ot({mapValue:{fields:s.document.fields}}),l=ft.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new Ia(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=zc(t,s.document),r=s.readTime?Tn(s.readTime):te.min(),o=ft.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Ia([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=zc(t,s.document),r=s.removedTargetIds||[];n=new Ia([],r,i,null)}else{if(!("filter"in e))return J();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new kk(i),o=s.targetId;n=new jv(o,r)}}return n}function jk(t,e){let n;if(e instanceof Ao)n={update:gg(t,e.key,e.value)};else if(e instanceof bd)n={delete:Qu(t,e.key)};else if(e instanceof vs)n={update:gg(t,e.key,e.data),updateMask:Xk(e.fieldMask)};else{if(!(e instanceof Rk))return J();n={verify:Qu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Za)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof oo)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ao)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof el)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw J()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:$k(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J()}(t,e.precondition)),n}function qk(t,e){return t&&t.length>0?(Oe(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Tn(s.updateTime):Tn(i);return r.isEqual(te.min())&&(r=Tn(i)),new Ik(r,s.transformResults||[])}(n,e))):[]}function Hk(t,e){return{documents:[Yu(t,e.path)]}}function Wk(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Yu(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Yu(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return Gv(Rn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(u){return{field:di(u.field),direction:Gk(u.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(l,c){return l.wt||ec(c)?c:{value:c}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Kk(t){let e=Vk(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Oe(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=zv(u);return h instanceof Rn&&Tv(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Or(fi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ec(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(u){const h=!!u.before,d=u.values||[];return new Ja(d,h)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const h=!u.before,d=u.values||[];return new Ja(d,h)}(n.endAt)),pk(e,i,o,r,a,"F",l,c)}function zk(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return J()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function zv(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=fi(e.unaryFilter.field);return Ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=fi(e.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=fi(e.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=fi(e.unaryFilter.field);return Ye.create(r,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(e){return Ye.create(fi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Rn.create(e.compositeFilter.filters.map(n=>zv(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return J()}}(e.compositeFilter.op))}(t):J()}function Gk(t){return Mk[t]}function Qk(t){return Lk[t]}function Yk(t){return Fk[t]}function di(t){return{fieldPath:t.canonicalString()}}function fi(t){return yt.fromServerFormat(t.fieldPath)}function Gv(t){return t instanceof Ye?function(e){if(e.op==="=="){if(ng(e.value))return{unaryFilter:{field:di(e.field),op:"IS_NAN"}};if(tg(e.value))return{unaryFilter:{field:di(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ng(e.value))return{unaryFilter:{field:di(e.field),op:"IS_NOT_NAN"}};if(tg(e.value))return{unaryFilter:{field:di(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:di(e.field),op:Qk(e.op),value:e.value}}}(t):t instanceof Rn?function(e){const n=e.getFilters().map(s=>Gv(s));return n.length===1?n[0]:{compositeFilter:{op:Yk(e.op),filters:n}}}(t):J()}function Xk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Qv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&Ck(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Dr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Dr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Vv();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=Mv(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(te.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&Pi(this.mutations,e.mutations,(n,s)=>cg(n,s))&&Pi(this.baseMutations,e.baseMutations,(n,s)=>cg(n,s))}}class Cd{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Oe(e.mutations.length===s.length);let i=Ok;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Cd(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n,s,i,r=te.min(),o=te.min(),a=It.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Vs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Vs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Vs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e){this.ie=e}}function tA(t){const e=Kk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(){this.Je=new sA}addToCollectionParentIndex(e,n){return this.Je.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(ds.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(ds.min())}updateCollectionGroup(e,n,s){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class sA{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Xe(Ue.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Xe(Ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ui(0)}static vn(){return new Ui(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(){this.changes=new er(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?k.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Dr(s.mutation,i,Ft.empty(),Qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ae()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ae()){const i=Ps();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Er();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ps();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ae()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=Wn();const o=xr(),a=xr();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof vs)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Dr(u.mutation,c,u.mutation.getFieldMask(),Qe.now())):o.set(c.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new rA(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=xr();let i=new Ze((o,a)=>o-a),r=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||Ft.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||ae()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Vv();u.forEach(d=>{if(!r.has(d)){const f=Mv(n.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return k.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return z.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_k(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):k.resolve(Ps());let a=-1,l=r;return o.next(c=>k.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?k.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,ae())).next(u=>({batchId:a,changes:$v(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(s=>{let i=Er();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Er();return this.indexManager.getCollectionParents(e,i).next(o=>k.forEach(o,a=>{const l=function(c,u){return new tc(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((a,l)=>{const c=l.getKey();i.get(c)===null&&(i=i.insert(c,ft.newInvalidDocument(c)))});let o=Er();return i.forEach((a,l)=>{const c=r.get(a);c!==void 0&&Dr(c.mutation,l,Ft.empty(),Qe.now()),Td(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return k.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Tn(s.createTime)}),k.resolve()}getNamedQuery(e,n){return k.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:tA(s.bundledQuery),readTime:Tn(s.readTime)}}(n)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(){this.overlays=new Ze(z.comparator),this.es=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ps();return k.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.oe(e,n,r)}),k.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),k.resolve()}getOverlaysForCollection(e,n,s){const i=Ps(),r=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Ze((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=Ps(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Ps(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return k.resolve(a)}oe(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Zk(n,s));let r=this.es.get(n);r===void 0&&(r=ae(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(){this.ns=new Xe(tt.ss),this.rs=new Xe(tt.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new tt(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new tt(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new z(new Ue([])),s=new tt(n,e),i=new tt(n,e+1),r=[];return this.rs.forEachInRange([s,i],o=>{this.cs(o),r.push(o.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new z(new Ue([])),s=new tt(n,e),i=new tt(n,e+1);let r=ae();return this.rs.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new tt(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class tt{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return z.comparator(e.key,n.key)||ve(e._s,n._s)}static os(e,n){return ve(e._s,n._s)||z.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Xe(tt.ss)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Jk(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new tt(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return k.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new tt(n,0),i=new tt(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],o=>{const a=this.ys(o._s);r.push(a)}),k.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Xe(ve);return n.forEach(i=>{const r=new tt(i,0),o=new tt(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,o],a=>{s=s.add(a._s)})}),k.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;z.isDocumentKey(r)||(r=r.child(""));const o=new tt(new z(r),0);let a=new Xe(ve);return this.gs.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l._s)),!0)},o),k.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Oe(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return k.forEach(n.mutations,i=>{const r=new tt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new tt(n,0),i=this.gs.firstAfterOrEqual(s);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.Es=e,this.docs=new Ze(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return k.resolve(s?s.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let s=Wn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ft.newInvalidDocument(i))}),k.resolve(s)}getAllFromCollection(e,n,s){let i=Wn();const r=new z(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||XR(YR(l),s)<=0||(i=i.insert(l.key,l.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,n,s,i){J()}As(e,n){return k.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new hA(this)}getSize(e){return k.resolve(this.size)}}class hA extends iA{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),k.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.persistence=e,this.Rs=new er(n=>wd(n),Ed),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Sd,this.targetCount=0,this.vs=Ui.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),k.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ui(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.Dn(n),k.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(r).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return k.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),k.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),k.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return k.resolve(s)}containsKey(e,n){return k.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new yd(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new dA(this),this.indexManager=new nA,this.remoteDocumentCache=function(s){return new uA(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new eA(n),this.Ns=new aA(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new cA(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){B("MemoryPersistence","Starting transaction:",e);const i=new pA(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return k.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class pA extends ZR{constructor(e){super(),this.currentSequenceNumber=e}}class Rd{constructor(e){this.persistence=e,this.Fs=new Sd,this.$s=null}static Bs(e){return new Rd(e)}get Ls(){if(this.$s)return this.$s;throw J()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),k.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),k.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Ls,s=>{const i=z.fromPath(s);return this.qs(e,i).next(r=>{r||n.removeEntry(i,te.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return k.or([()=>k.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=ae(),i=ae();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new kd(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(ag(n))return k.resolve(null);let s=Hn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=zu(n,null,"F"),s=Hn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=ae(...r);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Fi(n,a);return this.$i(n,c,o,l.readTime)?this.ki(e,zu(n,null,"F")):this.Bi(e,c,n,l)}))})))}Oi(e,n,s,i){return ag(n)||i.isEqual(te.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const o=this.Fi(n,r);return this.$i(n,o,s,i)?this.Mi(e,n):(Jp()<=ge.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gu(n)),this.Bi(e,o,n,QR(i,-1)))})}Fi(e,n){let s=new Xe(kv(e));return n.forEach((i,r)=>{Td(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return Jp()<=ge.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Gu(n)),this.Ni.getDocumentsMatchingQuery(e,n,ds.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new Ze(ve),this.Ui=new er(r=>wd(r),Ed),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oA(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function _A(t,e,n,s){return new mA(t,e,n,s)}async function Yv(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=ae();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({ji:c,removedBatchIds:o,addedBatchIds:a}))})})}function yA(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let d=k.resolve();return h.forEach(f=>{d=d.next(()=>c.getEntry(a,f)).next(g=>{const _=l.docVersions.get(f);Oe(_!==null),g.version.compareTo(_)<0&&(u.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),c.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ae();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function Xv(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function vA(t,e){const n=ne(t),s=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(It.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(g,_,w){return g.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(d,f,u)&&a.push(n.Cs.updateTargetData(r,f))});let l=Wn(),c=ae();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(wA(r,o,e.documentUpdates).next(u=>{l=u.Wi,c=u.zi})),!s.isEqual(te.min())){const u=n.Cs.getLastRemoteSnapshotVersion(r).next(h=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return k.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.qi=i,r))}function wA(t,e,n){let s=ae(),i=ae();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=Wn();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function EA(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function TA(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,k.resolve(i)):n.Cs.allocateTargetId(s).next(o=>(i=new Vs(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.qi.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Ju(t,e,n){const s=ne(t),i=s.qi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ko(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(i.target)}function mg(t,e,n){const s=ne(t);let i=te.min(),r=ae();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=ne(a),h=u.Ui.get(c);return h!==void 0?k.resolve(u.qi.get(h)):u.Cs.getTargetData(l,c)}(s,o,Hn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?r:ae())).next(a=>(bA(s,yk(e),a),{documents:a,Hi:r})))}function bA(t,e,n){let s=t.Ki.get(e)||te.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}class _g{constructor(){this.activeTargetIds=Bv()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class IA{constructor(){this.Lr=new _g,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new _g,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const o=this.ho(e,n);B("RestConnection","Sending: ",o,s);const a={};return this.lo(a,i,r),this.fo(e,o,a,s).then(l=>(B("RestConnection","Received: ",l),l),l=>{throw ju("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",s),l})}_o(e,n,s,i,r,o){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Zi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=SA[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,o)=>{const a=new $R;a.setWithCredentials(!0),a.listenOnce(LR.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Kc.NO_ERROR:const c=a.getResponseJson();B("Connection","XHR received:",JSON.stringify(c)),r(c);break;case Kc.TIMEOUT:B("Connection",'RPC "'+e+'" timed out'),o(new K(R.DEADLINE_EXCEEDED,"Request time out"));break;case Kc.HTTP_ERROR:const u=a.getStatus();if(B("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const f=function(g){const _=g.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(_)>=0?_:R.UNKNOWN}(d.status);o(new K(f,d.message))}else o(new K(R.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new K(R.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{B("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=PR(),o=MR(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new UR({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const l=i.join("");B("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,h=!1;const d=new RA({Hr:g=>{h?B("Connection","Not sending because WebChannel is closed:",g):(u||(B("Connection","Opening WebChannel transport."),c.open(),u=!0),B("Connection","WebChannel sending:",g),c.send(g))},Jr:()=>c.close()}),f=(g,_,w)=>{g.listen(_,b=>{try{w(b)}catch(A){setTimeout(()=>{throw A},0)}})};return f(c,ia.EventType.OPEN,()=>{h||B("Connection","WebChannel transport opened.")}),f(c,ia.EventType.CLOSE,()=>{h||(h=!0,B("Connection","WebChannel transport closed"),d.io())}),f(c,ia.EventType.ERROR,g=>{h||(h=!0,ju("Connection","WebChannel transport errored:",g),d.io(new K(R.UNAVAILABLE,"The operation could not be completed")))}),f(c,ia.EventType.MESSAGE,g=>{var _;if(!h){const w=g.data[0];Oe(!!w);const b=w,A=b.error||((_=b[0])===null||_===void 0?void 0:_.error);if(A){B("Connection","WebChannel received error:",A);const C=A.status;let D=function(le){const me=Ke[le];if(me!==void 0)return Fv(me)}(C),Y=A.message;D===void 0&&(D=R.INTERNAL,Y="Unknown error status: "+C+" with message "+A.message),h=!0,d.io(new K(D,Y)),c.close()}else B("Connection","WebChannel received:",w),d.ro(w)}}),f(o,FR.STAT_EVENT,g=>{g.stat===Yp.PROXY?B("Connection","Detected buffering proxy"):g.stat===Yp.NOPROXY&&B("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Gc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(t){return new Uk(t,!0)}class Jv{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,n,s,i,r,o,a,l){this.Hs=e,this.vo=s,this.Vo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Jv(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(qn(n.toString()),qn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.So===n&&this.Go(s,i)},s=>{e(()=>{const i=new K(R.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(i)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.Qo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AA extends Zv{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.yt=r}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=Bk(this.yt,e),s=function(i){if(!("targetChange"in i))return te.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?te.min():r.readTime?Tn(r.readTime):te.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Xu(this.yt),n.addTarget=function(i,r){let o;const a=r.target;return o=Ku(a)?{documents:Hk(i,a)}:{query:Wk(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Hv(i,r.resumeToken):r.snapshotVersion.compareTo(te.min())>0&&(o.readTime=tl(i,r.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=zk(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Xu(this.yt),n.removeTarget=e,this.Bo(n)}}class NA extends Zv{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.yt=r,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=qk(e.writeResults,e.commitTime),s=Tn(e.commitTime);return this.listener.Zo(s,n)}return Oe(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Xu(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>jk(this.yt,s))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=i,this.nu=!1}su(){if(this.nu)throw new K(R.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(R.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection._o(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new K(R.UNKNOWN,r.toString())})}terminate(){this.nu=!0}}class DA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(qn(n),this.ou=!1):B("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{si(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=ne(a);l._u.add(4),await Oo(l),l.gu.set("Unknown"),l._u.delete(4),await lc(l)}(this))})}),this.gu=new DA(s,i)}}async function lc(t){if(si(t))for(const e of t.wu)await e(!0)}async function Oo(t){for(const e of t.wu)await e(!1)}function ew(t,e){const n=ne(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Od(n)?Nd(n):tr(n).ko()&&Ad(n,e))}function tw(t,e){const n=ne(t),s=tr(n);n.du.delete(e),s.ko()&&nw(n,e),n.du.size===0&&(s.ko()?s.Fo():si(n)&&n.gu.set("Unknown"))}function Ad(t,e){t.yu.Ot(e.targetId),tr(t).zo(e)}function nw(t,e){t.yu.Ot(e),tr(t).Ho(e)}function Nd(t){t.yu=new Pk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),tr(t).start(),t.gu.uu()}function Od(t){return si(t)&&!tr(t).No()&&t.du.size>0}function si(t){return ne(t)._u.size===0}function sw(t){t.yu=void 0}async function PA(t){t.du.forEach((e,n)=>{Ad(t,e)})}async function MA(t,e){sw(t),Od(t)?(t.gu.hu(e),Nd(t)):t.gu.set("Unknown")}async function LA(t,e,n){if(t.gu.set("Online"),e instanceof qv&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await nl(t,s)}else if(e instanceof Ia?t.yu.Kt(e):e instanceof jv?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(te.min()))try{const s=await Xv(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.yu.Zt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.du.get(l);c&&i.du.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(It.EMPTY_BYTE_STRING,l.snapshotVersion)),nw(i,a);const c=new Vs(l.target,a,1,l.sequenceNumber);Ad(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){B("RemoteStore","Failed to raise snapshot:",s),await nl(t,s)}}async function nl(t,e,n){if(!ko(e))throw e;t._u.add(1),await Oo(t),t.gu.set("Offline"),n||(n=()=>Xv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await lc(t)})}function iw(t,e){return e().catch(n=>nl(t,n,e))}async function cc(t){const e=ne(t),n=ps(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;FA(e);)try{const i=await EA(e.localStore,s);if(i===null){e.fu.length===0&&n.Fo();break}s=i.batchId,UA(e,i)}catch(i){await nl(e,i)}rw(e)&&ow(e)}function FA(t){return si(t)&&t.fu.length<10}function UA(t,e){t.fu.push(e);const n=ps(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function rw(t){return si(t)&&!ps(t).No()&&t.fu.length>0}function ow(t){ps(t).start()}async function $A(t){ps(t).eu()}async function VA(t){const e=ps(t);for(const n of t.fu)e.Xo(n.mutations)}async function BA(t,e,n){const s=t.fu.shift(),i=Cd.from(s,e,n);await iw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await cc(t)}async function jA(t,e){e&&ps(t).Yo&&await async function(n,s){if(i=s.code,Ak(i)&&i!==R.ABORTED){const r=n.fu.shift();ps(n).Mo(),await iw(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await cc(n)}var i}(t,e),rw(t)&&ow(t)}async function vg(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const s=si(n);n._u.add(3),await Oo(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await lc(n)}async function qA(t,e){const n=ne(t);e?(n._u.delete(2),await lc(n)):e||(n._u.add(2),await Oo(n),n.gu.set("Unknown"))}function tr(t){return t.pu||(t.pu=function(e,n,s){const i=ne(e);return i.su(),new AA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:PA.bind(null,t),Zr:MA.bind(null,t),Wo:LA.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Od(t)?Nd(t):t.gu.set("Unknown")):(await t.pu.stop(),sw(t))})),t.pu}function ps(t){return t.Iu||(t.Iu=function(e,n,s){const i=ne(e);return i.su(),new NA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,s)}(t.datastore,t.asyncQueue,{Yr:$A.bind(null,t),Zr:jA.bind(null,t),tu:VA.bind(null,t),Zo:BA.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await cc(t)):(await t.Iu.stop(),t.fu.length>0&&(B("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new $n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Dd(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xd(t,e){if(qn("AsyncQueue",`${e}: ${t}`),ko(t))return new K(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.comparator=e?(n,s)=>e(n,s)||z.comparator(n.key,s.key):(n,s)=>z.comparator(n.key,s.key),this.keyedMap=Er(),this.sortedSet=new Ze(this.comparator)}static emptySet(e){return new Ti(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ti)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ti;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.Tu=new Ze(z.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):J():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class $i{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new $i(e,n,Ti.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(){this.Au=void 0,this.listeners=[]}}class WA{constructor(){this.queries=new er(e=>Rv(e),sc),this.onlineState="Unknown",this.Ru=new Set}}async function Pd(t,e){const n=ne(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new HA),i)try{r.Au=await n.onListen(s)}catch(o){const a=xd(o,`Initialization of query '${Gu(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&Ld(n)}async function Md(t,e){const n=ne(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function KA(t,e){const n=ne(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Pu(i)&&(s=!0);o.Au=i}}s&&Ld(n)}function zA(t,e,n){const s=ne(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Ld(t){t.Ru.forEach(e=>{e.next()})}class Fd{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new $i(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=$i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e){this.key=e}}class lw{constructor(e){this.key=e}}class GA{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ae(),this.mutatedKeys=ae(),this.Gu=kv(e),this.Qu=new Ti(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new wg,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=Td(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let w=!1;d&&f?d.data.isEqual(f.data)?g!==_&&(s.track({type:3,doc:f}),w=!0):this.Hu(d,f)||(s.track({type:2,doc:f}),w=!0,(l&&this.Gu(f,l)>0||c&&this.Gu(f,c)<0)&&(a=!0)):!d&&f?(s.track({type:0,doc:f}),w=!0):d&&!f&&(s.track({type:1,doc:d}),w=!0,(l||c)&&(a=!0)),w&&(f?(o=o.add(f),r=_?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{Qu:o,zu:s,$i:a,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Eu();r.sort((c,u)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return f(h)-f(d)}(c.type,u.type)||this.Gu(c.doc,u.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,r.length!==0||l?{snapshot:new $i(this.query,e.Qu,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new wg,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ae(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new lw(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new aw(s))}),n}tc(e){this.qu=e.Hi,this.Ku=ae();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return $i.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class QA{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class YA{constructor(e){this.key=e,this.nc=!1}}class XA{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new er(a=>Rv(a),sc),this.rc=new Map,this.oc=new Set,this.uc=new Ze(z.comparator),this.cc=new Map,this.ac=new Sd,this.hc={},this.lc=new Map,this.fc=Ui.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function JA(t,e){const n=lN(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const o=await TA(n.localStore,Hn(e));n.isPrimaryClient&&ew(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await ZA(n,e,s,a==="current",o.resumeToken)}return i}async function ZA(t,e,n,s,i){t._c=(h,d,f)=>async function(g,_,w,b){let A=_.view.Wu(w);A.$i&&(A=await mg(g.localStore,_.query,!1).then(({documents:Y})=>_.view.Wu(Y,A)));const C=b&&b.targetChanges.get(_.targetId),D=_.view.applyChanges(A,g.isPrimaryClient,C);return Tg(g,_.targetId,D.Xu),D.snapshot}(t,h,d,f);const r=await mg(t.localStore,e,!0),o=new GA(e,r.Hi),a=o.Wu(r.documents),l=No.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Tg(t,n,c.Xu);const u=new QA(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function eN(t,e){const n=ne(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!sc(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ju(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),tw(n.remoteStore,s.targetId),Zu(n,s.targetId)}).catch(Ro)):(Zu(n,s.targetId),await Ju(n.localStore,s.targetId,!0))}async function tN(t,e,n){const s=cN(t);try{const i=await function(r,o){const a=ne(r),l=Qe.now(),c=o.reduce((d,f)=>d.add(f.key),ae());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=Wn(),g=ae();return a.Gi.getEntries(d,c).next(_=>{f=_,f.forEach((w,b)=>{b.isValidDocument()||(g=g.add(w))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,f)).next(_=>{u=_;const w=[];for(const b of o){const A=Sk(b,u.get(b.key).overlayedDocument);A!=null&&w.push(new vs(b.key,A,Sv(A.value.mapValue),cn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,w,o)}).next(_=>{h=_;const w=_.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(d,_.batchId,w)})}).then(()=>({batchId:h.batchId,changes:$v(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let l=r.hc[r.currentUser.toKey()];l||(l=new Ze(ve)),l=l.insert(o,a),r.hc[r.currentUser.toKey()]=l}(s,i.batchId,n),await Do(s,i.changes),await cc(s.remoteStore)}catch(i){const r=xd(i,"Failed to persist write");n.reject(r)}}async function cw(t,e){const n=ne(t);try{const s=await vA(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.cc.get(r);o&&(Oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Oe(o.nc):i.removedDocuments.size>0&&(Oe(o.nc),o.nc=!1))}),await Do(n,s,e)}catch(s){await Ro(s)}}function Eg(t,e,n){const s=ne(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=ne(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.bu(o)&&(l=!0)}),l&&Ld(a)}(s.eventManager,e),i.length&&s.sc.Wo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function nN(t,e,n){const s=ne(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let o=new Ze(z.comparator);o=o.insert(r,ft.newNoDocument(r,te.min()));const a=ae().add(r),l=new oc(te.min(),new Map,new Xe(ve),o,a);await cw(s,l),s.uc=s.uc.remove(r),s.cc.delete(e),Ud(s)}else await Ju(s.localStore,e,!1).then(()=>Zu(s,e,n)).catch(Ro)}async function sN(t,e){const n=ne(t),s=e.batch.batchId;try{const i=await yA(n.localStore,e);hw(n,s,null),uw(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Do(n,i)}catch(i){await Ro(i)}}async function iN(t,e,n){const s=ne(t);try{const i=await function(r,o){const a=ne(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.mutationQueue.lookupMutationBatch(l,o).next(u=>(Oe(u!==null),c=u.keys(),a.mutationQueue.removeMutationBatch(l,u))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>a.localDocuments.getDocuments(l,c))})}(s.localStore,e);hw(s,e,n),uw(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Do(s,i)}catch(i){await Ro(i)}}function uw(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function hw(t,e,n){const s=ne(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}function Zu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||dw(t,s)})}function dw(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(tw(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Ud(t))}function Tg(t,e,n){for(const s of n)s instanceof aw?(t.ac.addReference(s.key,e),rN(t,s)):s instanceof lw?(B("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||dw(t,s.key)):J()}function rN(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(B("SyncEngine","New document in limbo: "+n),t.oc.add(s),Ud(t))}function Ud(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new z(Ue.fromString(e)),s=t.fc.next();t.cc.set(s,new YA(n)),t.uc=t.uc.insert(n,s),ew(t.remoteStore,new Vs(Hn(nc(n.path)),s,2,yd.at))}}async function Do(t,e,n){const s=ne(t),i=[],r=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,l)=>{o.push(s._c(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=kd.Ci(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.sc.Wo(i),await async function(a,l){const c=ne(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>k.forEach(l,h=>k.forEach(h.Si,d=>c.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>k.forEach(h.Di,d=>c.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!ko(u))throw u;B("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=c.qi.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);c.qi=c.qi.insert(h,g)}}}(s.localStore,r))}async function oN(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const s=await Yv(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new K(R.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Do(n,s.ji)}}function aN(t,e){const n=ne(t),s=n.cc.get(e);if(s&&s.nc)return ae().add(s.key);{let i=ae();const r=n.rc.get(e);if(!r)return i;for(const o of r){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function lN(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nN.bind(null,e),e.sc.Wo=KA.bind(null,e.eventManager),e.sc.wc=zA.bind(null,e.eventManager),e}function cN(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iN.bind(null,e),e}class uN{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=ac(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return _A(this.persistence,new gA,e.initialUser,this.yt)}yc(e){return new fA(Rd.Bs,this.yt)}gc(e){return new IA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Eg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=oN.bind(null,this.syncEngine),await qA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new WA}createDatastore(e){const n=ac(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new kA(i));var i;return function(r,o,a,l){return new OA(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=a=>Eg(this.syncEngine,a,0),o=yg.C()?new yg:new CA,new xA(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,a,l,c){const u=new XA(s,i,r,o,a,l);return c&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ne(e);B("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Oo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(t,e,n){if(!n)throw new K(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function dN(t,e,n,s){if(e===!0&&s===!0)throw new K(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function bg(t){if(!z.isDocumentKey(t))throw new K(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ig(t){if(z.isDocumentKey(t))throw new K(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $d(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$d(t);throw new K(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=new Map;class Sg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new K(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,dN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new VR;switch(n.type){case"gapi":const s=n.client;return new HR(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new K(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Cg.get(e);n&&(B("ComponentProvider","Removing Datastore"),Cg.delete(e),n.terminate())}(this),Promise.resolve()}}function fN(t,e,n,s={}){var i;const r=(t=Qt(t,uc))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&ju("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=dt.MOCK_USER;else{o=sy(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new K(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new dt(l)}t._authCredentials=new BR(new gv(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ls(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}}class xo{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new xo(this.firestore,e,this._query)}}class ls extends xo{constructor(e,n,s){super(e,n,nc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new z(e))}withConverter(e){return new ls(this.firestore,e,this._path)}}function pw(t,e,...n){if(t=Ve(t),fw("collection","path",e),t instanceof uc){const s=Ue.fromString(e,...n);return Ig(s),new ls(t,null,s)}{if(!(t instanceof xt||t instanceof ls))throw new K(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ue.fromString(e,...n));return Ig(s),new ls(t.firestore,null,s)}}function eh(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=mv.R()),fw("doc","path",e),t instanceof uc){const s=Ue.fromString(e,...n);return bg(s),new xt(t,null,new z(s))}{if(!(t instanceof xt||t instanceof ls))throw new K(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ue.fromString(e,...n));return bg(s),new xt(t.firestore,t instanceof ls?t.converter:null,new z(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):qn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=mv.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{B("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(B("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=xd(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function gN(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Yv(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function mN(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _N(t);B("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>vg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>vg(e.remoteStore,r)),t.onlineComponents=e}async function _N(t){return t.offlineComponents||(B("FirestoreClient","Using default OfflineComponentProvider"),await gN(t,new uN)),t.offlineComponents}async function gw(t){return t.onlineComponents||(B("FirestoreClient","Using default OnlineComponentProvider"),await mN(t,new hN)),t.onlineComponents}function yN(t){return gw(t).then(e=>e.syncEngine)}async function sl(t){const e=await gw(t),n=e.eventManager;return n.onListen=JA.bind(null,e.syncEngine),n.onUnlisten=eN.bind(null,e.syncEngine),n}function vN(t,e,n={}){const s=new $n;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Vd({next:h=>{r.enqueueAndForget(()=>Md(i,u));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new K(R.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new K(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Fd(nc(o.path),c,{includeMetadataChanges:!0,Nu:!0});return Pd(i,u)}(await sl(t),t.asyncQueue,e,n,s)),s.promise}function wN(t,e,n={}){const s=new $n;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,l){const c=new Vd({next:h=>{r.enqueueAndForget(()=>Md(i,u)),h.fromCache&&a.source==="server"?l.reject(new K(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new Fd(o,c,{includeMetadataChanges:!0,Nu:!0});return Pd(i,u)}(await sl(t),t.asyncQueue,e,n,s)),s.promise}class EN{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Jv(this,"async_queue_retry"),this.Wc=()=>{const n=Gc();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Gc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Gc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new $n;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!ko(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw qn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Dd.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&J()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function Rg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class gs extends uc{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new EN,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_w(this),this._firestoreClient.terminate()}}function mw(t,e){const n=typeof t=="object"?t:Ul(),s=typeof t=="string"?t:e||"(default)",i=Fl(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=ty("firestore");r&&fN(i,...r)}return i}function hc(t){return t._firestoreClient||_w(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function _w(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new ek(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new pN(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vi(It.fromBase64String(e))}catch(n){throw new K(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vi(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=/^__.*__$/;class bN{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new vs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ao(e,this.data,n,this.fieldTransforms)}}class yw{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new vs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function vw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class jd{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new jd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return il(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(vw(this.sa)&&TN.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class IN{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||ac(e)}da(e,n,s,i=!1){return new jd({sa:e,methodName:n,fa:s,path:yt.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function ww(t){const e=t._freezeSettings(),n=ac(t._databaseId);return new IN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function CN(t,e,n,s,i,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,i);qd("Data must be an object, but it was:",o,s);const a=Ew(s,o);let l,c;if(r.merge)l=new Ft(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=th(e,h,n);if(!o.contains(d))throw new K(R.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);bw(u,d)||u.push(d)}l=new Ft(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new bN(new Ot(a),l,c)}class pc extends Bd{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof pc}}function SN(t,e,n,s){const i=t.da(1,e,n);qd("Data must be an object, but it was:",i,s);const r=[],o=Ot.empty();ni(s,(l,c)=>{const u=Hd(e,l,n);c=Ve(c);const h=i.ca(u);if(c instanceof pc)r.push(u);else{const d=gc(c,h);d!=null&&(r.push(u),o.set(u,d))}});const a=new Ft(r);return new yw(o,a,i.fieldTransforms)}function RN(t,e,n,s,i,r){const o=t.da(1,e,n),a=[th(e,s,n)],l=[i];if(r.length%2!=0)throw new K(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<r.length;d+=2)a.push(th(e,r[d])),l.push(r[d+1]);const c=[],u=Ot.empty();for(let d=a.length-1;d>=0;--d)if(!bw(c,a[d])){const f=a[d];let g=l[d];g=Ve(g);const _=o.ca(f);if(g instanceof pc)c.push(f);else{const w=gc(g,_);w!=null&&(c.push(f),u.set(f,w))}}const h=new Ft(c);return new yw(u,h,o.fieldTransforms)}function gc(t,e){if(Tw(t=Ve(t)))return qd("Unsupported field value:",e,t),Ew(t,e);if(t instanceof Bd)return function(n,s){if(!vw(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=gc(o,s.aa(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=Ve(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return wk(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Qe.fromDate(n);return{timestampValue:tl(s.yt,i)}}if(n instanceof Qe){const i=new Qe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:tl(s.yt,i)}}if(n instanceof fc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Vi)return{bytesValue:Hv(s.yt,n._byteString)};if(n instanceof xt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Id(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${$d(n)}`)}(t,e)}function Ew(t,e){const n={};return _v(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ni(t,(s,i)=>{const r=gc(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Tw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof fc||t instanceof Vi||t instanceof xt||t instanceof Bd)}function qd(t,e,n){if(!Tw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=$d(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function th(t,e,n){if((e=Ve(e))instanceof dc)return e._internalPath;if(typeof e=="string")return Hd(t,e);throw il("Field path arguments must be of type string or ",t,!1,void 0,n)}const kN=new RegExp("[~\\*/\\[\\]]");function Hd(t,e,n){if(e.search(kN)>=0)throw il(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dc(...e.split("."))._internalPath}catch{throw il(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function il(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new K(R.INVALID_ARGUMENT,a+t+l)}function bw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new AN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Cw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class AN extends Iw{data(){return super.data()}}function Cw(t,e){return typeof e=="string"?Hd(t,e):e instanceof dc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class NN{convertValue(e,n="none"){switch(Ks(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){const s={};return ni(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new fc(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=vv(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(io(e));default:return null}}convertTimestamp(e){const n=fs(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ue.fromString(e);Oe(Qv(s));const i=new so(s.get(1),s.get(3)),r=new z(s.popFirst(5));return i.isEqual(n)||qn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ON(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rw extends Iw{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ca(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Cw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ca extends Rw{data(e={}){return super.data(e)}}class kw{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Tr(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ca(this._firestore,this._userDataWriter,s.key,s,new Tr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const a=new Ca(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Tr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ca(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Tr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:DN(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function DN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(t){t=Qt(t,xt);const e=Qt(t.firestore,gs);return vN(hc(e),t._key).then(n=>Nw(e,t,n))}class Wd extends NN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,n)}}function xN(t){t=Qt(t,xo);const e=Qt(t.firestore,gs),n=hc(e),s=new Wd(e);return Sw(t._query),wN(n,t._query).then(i=>new kw(e,s,t,i))}function PN(t,e,n,...s){t=Qt(t,xt);const i=Qt(t.firestore,gs),r=ww(i);let o;return o=typeof(e=Ve(e))=="string"||e instanceof dc?RN(r,"updateDoc",t._key,e,n,s):SN(r,"updateDoc",t._key,e),zd(i,[o.toMutation(t._key,cn.exists(!0))])}function MN(t){return zd(Qt(t.firestore,gs),[new bd(t._key,cn.none())])}function LN(t,e){const n=Qt(t.firestore,gs),s=eh(t),i=ON(t.converter,e);return zd(n,[CN(ww(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,cn.exists(!1))]).then(()=>s)}function Kd(t,...e){var n,s,i;t=Ve(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Rg(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(Rg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof xt)c=Qt(t.firestore,gs),u=nc(t._key.path),l={next:h=>{e[o]&&e[o](Nw(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Qt(t,xo);c=Qt(h.firestore,gs),u=h._query;const d=new Wd(c);l={next:f=>{e[o]&&e[o](new kw(c,d,h,f))},error:e[o+1],complete:e[o+2]},Sw(t._query)}return function(h,d,f,g){const _=new Vd(g),w=new Fd(d,_,f);return h.asyncQueue.enqueueAndForget(async()=>Pd(await sl(h),w)),()=>{_.bc(),h.asyncQueue.enqueueAndForget(async()=>Md(await sl(h),w))}}(hc(c),u,a,l)}function zd(t,e){return function(n,s){const i=new $n;return n.asyncQueue.enqueueAndForget(async()=>tN(await yN(n),s,i)),i.promise}(hc(t),e)}function Nw(t,e,n){const s=n.docs.get(e._key),i=new Wd(t);return new Rw(t,i,e._key,s,new Tr(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Zi=n})(ei),Cn(new dn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new gs(new jR(n.getProvider("auth-internal")),new KR(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new K(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new so(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),$t(Xp,"3.8.1",t),$t(Xp,"3.8.1","esm2017")})();const Ow=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},FN={},UN=Nl('<div><h3>Ayuda</h3><ul><li>Contacto</li><li>Envios</li><li>Devoluciones</li></ul></div><div><h3>Sobre nosotros</h3><ul><li>Quiénes somos</li><li>Trabaja con nosotros</li><li>Política de privacidad</li></ul></div><div><h3>Legal</h3><ul><li>Política de cookies</li><li>Política de privacidad</li><li>Términos y condiciones</li></ul></div><div><h3>Métodos de pago</h3><i class="fa fa-cc-discover" aria-hidden="true"></i><i class="fa fa-cc-mastercard" aria-hidden="true"></i><i class="fa fa-cc-paypal" aria-hidden="true"></i><i class="fa fa-cc-visa" aria-hidden="true"></i><i class="fa fa-cc-mastercard" aria-hidden="true"></i></div><div><h3>Síguenos</h3><i class="fa fa-instagram"></i><i class="fa fa-twitter"></i><i class="fa fa-youtube-play"></i></div>',5),$N=[UN];function VN(t,e){return _e(),ke("footer",null,$N)}const BN=Ow(FN,[["render",VN]]);function Gd(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Dw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jN=Dw,xw=new Qi("auth","Firebase",Dw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=new _o("@firebase/auth");function Sa(t,...e){kg.logLevel<=ge.ERROR&&kg.error(`Auth (${ei}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,...e){throw Qd(t,...e)}function bn(t,...e){return Qd(t,...e)}function Pw(t,e,n){const s=Object.assign(Object.assign({},jN()),{[e]:n});return new Qi("auth","Firebase",s).create(e,{appName:t.name})}function qN(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Yt(t,"argument-error"),Pw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qd(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return xw.create(t,...e)}function X(t,e,...n){if(!t)throw Qd(e,...n)}function Mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Sa(e),new Error(e)}function Kn(t,e){t||Mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=new Map;function Ln(t){Kn(t instanceof Function,"Expected a class definition");let e=Ag.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ag.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(t,e){const n=Fl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Ba(r,e??{}))return i;Yt(i,"already-initialized")}return n.initialize({options:e})}function WN(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function KN(){return Ng()==="http:"||Ng()==="https:"}function Ng(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KN()||vC()||"connection"in navigator)?navigator.onLine:!0}function GN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=Gh()||iy()}get(){return zN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=new Po(3e4,6e4);function Mo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Lo(t,e,n,s,i={}){return Lw(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Yi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Mw.fetch()(Fw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Lw(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},QN),e);try{const i=new XN(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw aa(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw aa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw aa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw aa(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Pw(t,u,c);Yt(t,u)}}catch(i){if(i instanceof An)throw i;Yt(t,"network-request-failed")}}async function Fo(t,e,n,s,i={}){const r=await Lo(t,e,n,s,i);return"mfaPendingCredential"in r&&Yt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Fw(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Yd(t.config,i):`${t.config.apiScheme}://${i}`}class XN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(bn(this.auth,"network-request-failed")),YN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function aa(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=bn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JN(t,e){return Lo(t,"POST","/v1/accounts:delete",e)}async function ZN(t,e){return Lo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function e1(t,e=!1){const n=Ve(t),s=await n.getIdToken(e),i=Xd(s);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Pr(Qc(i.auth_time)),issuedAtTime:Pr(Qc(i.iat)),expirationTime:Pr(Qc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Qc(t){return Number(t)*1e3}function Xd(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Sa("JWT malformed, contained fewer than 3 sections"),null;try{const i=$a(n);return i?JSON.parse(i):(Sa("Failed to decode base64 JWT payload"),null)}catch(i){return Sa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function t1(t){const e=Xd(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof An&&n1(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function n1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pr(this.lastLoginAt),this.creationTime=Pr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(t){var e;const n=t.auth,s=await t.getIdToken(),i=await lo(t,ZN(n,{idToken:s}));X(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?o1(r.providerUserInfo):[],a=r1(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Uw(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function i1(t){const e=Ve(t);await rl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function r1(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function o1(t){return t.map(e=>{var{providerId:n}=e,s=Gd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(t,e){const n=await Lw(t,{},async()=>{const s=Yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Fw(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Mw.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):t1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await a1(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new co;return s&&(X(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(X(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(X(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return Mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bs{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Gd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new s1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Uw(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await lo(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return e1(this,e)}reload(){return i1(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Bs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await rl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await lo(this,JN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=n.createdAt)!==null&&c!==void 0?c:void 0,A=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:C,emailVerified:D,isAnonymous:Y,providerData:le,stsTokenManager:me}=n;X(C&&me,e,"internal-error");const q=co.fromJSON(this.name,me);X(typeof C=="string",e,"internal-error"),Xn(h,e.name),Xn(d,e.name),X(typeof D=="boolean",e,"internal-error"),X(typeof Y=="boolean",e,"internal-error"),Xn(f,e.name),Xn(g,e.name),Xn(_,e.name),Xn(w,e.name),Xn(b,e.name),Xn(A,e.name);const Re=new Bs({uid:C,auth:e,email:d,emailVerified:D,displayName:h,isAnonymous:Y,photoURL:g,phoneNumber:f,tenantId:_,stsTokenManager:q,createdAt:b,lastLoginAt:A});return le&&Array.isArray(le)&&(Re.providerData=le.map(Ee=>Object.assign({},Ee))),w&&(Re._redirectEventId=w),Re}static async _fromIdTokenResponse(e,n,s=!1){const i=new co;i.updateFromServerResponse(n);const r=new Bs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await rl(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$w.type="NONE";const Og=$w;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t,e,n){return`firebase:${t}:${e}:${n}`}class bi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ra(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ra("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new bi(Ln(Og),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Ln(Og);const o=Ra(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Bs._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new bi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new bi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hw(e))return"Blackberry";if(Ww(e))return"Webos";if(Jd(e))return"Safari";if((e.includes("chrome/")||Bw(e))&&!e.includes("edge/"))return"Chrome";if(qw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Vw(t=bt()){return/firefox\//i.test(t)}function Jd(t=bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bw(t=bt()){return/crios\//i.test(t)}function jw(t=bt()){return/iemobile/i.test(t)}function qw(t=bt()){return/android/i.test(t)}function Hw(t=bt()){return/blackberry/i.test(t)}function Ww(t=bt()){return/webos/i.test(t)}function mc(t=bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function l1(t=bt()){var e;return mc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function c1(){return wC()&&document.documentMode===10}function Kw(t=bt()){return mc(t)||qw(t)||Ww(t)||Hw(t)||/windows phone/i.test(t)||jw(t)}function u1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(t,e=[]){let n;switch(t){case"Browser":n=Dg(bt());break;case"Worker":n=`${Dg(bt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ei}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xg(this),this.idTokenSubscription=new xg(this),this.beforeStateQueue=new h1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xw,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await bi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await rl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ve(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await bi.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return X(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function nr(t){return Ve(t)}class xg{constructor(e){this.auth=e,this.observer=null,this.addObserver=kC(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function f1(t,e,n){const s=nr(t);X(s._canInitEmulator,s,"emulator-config-failed"),X(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Gw(e),{host:o,port:a}=p1(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||g1()}function Gw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function p1(t){const e=Gw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Pg(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Pg(o)}}}function Pg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function g1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mn("not implemented")}_getIdTokenResponse(e){return Mn("not implemented")}_linkToIdToken(e,n){return Mn("not implemented")}_getReauthenticationResolver(e){return Mn("not implemented")}}async function m1(t,e){return Lo(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _1(t,e){return Fo(t,"POST","/v1/accounts:signInWithPassword",Mo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y1(t,e){return Fo(t,"POST","/v1/accounts:signInWithEmailLink",Mo(t,e))}async function v1(t,e){return Fo(t,"POST","/v1/accounts:signInWithEmailLink",Mo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends Zd{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new uo(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new uo(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return _1(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return y1(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return m1(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return v1(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(t,e){return Fo(t,"POST","/v1/accounts:signInWithIdp",Mo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1="http://localhost";class zs extends Zd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Gd(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new zs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ii(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ii(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ii(e,n)}buildRequest(){const e={requestUri:w1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function T1(t){const e=_r(yr(t)).link,n=e?_r(yr(e)).deep_link_id:null,s=_r(yr(t)).deep_link_id;return(s?_r(yr(s)).link:null)||s||n||e||t}class ef{constructor(e){var n,s,i,r,o,a;const l=_r(yr(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(s=l.oobCode)!==null&&s!==void 0?s:null,h=E1((i=l.mode)!==null&&i!==void 0?i:null);X(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=T1(e);try{return new ef(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(){this.providerId=sr.PROVIDER_ID}static credential(e,n){return uo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ef.parseLink(n);return X(s,"argument-error"),uo._fromEmailAndCode(e,s.code,s.tenantId)}}sr.PROVIDER_ID="password";sr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";sr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo extends tf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es extends Uo{constructor(){super("facebook.com")}static credential(e){return zs._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return es.credential(e.oauthAccessToken)}catch{return null}}}es.FACEBOOK_SIGN_IN_METHOD="facebook.com";es.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Uo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zs._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return xn.credential(n,s)}catch{return null}}}xn.GOOGLE_SIGN_IN_METHOD="google.com";xn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends Uo{constructor(){super("github.com")}static credential(e){return zs._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ts.credential(e.oauthAccessToken)}catch{return null}}}ts.GITHUB_SIGN_IN_METHOD="github.com";ts.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends Uo{constructor(){super("twitter.com")}static credential(e,n){return zs._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ns.credential(n,s)}catch{return null}}}ns.TWITTER_SIGN_IN_METHOD="twitter.com";ns.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b1(t,e){return Fo(t,"POST","/v1/accounts:signUp",Mo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Bs._fromIdTokenResponse(e,s,i),o=Mg(s);return new Gs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Mg(s);return new Gs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Mg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends An{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ol.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ol(e,n,s,i)}}function Qw(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ol._fromErrorAndOperation(t,r,e,s):r})}async function I1(t,e,n=!1){const s=await lo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gs._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C1(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await lo(t,Qw(s,i,e,t),n);X(r.idToken,s,"internal-error");const o=Xd(r.idToken);X(o,s,"internal-error");const{sub:a}=o;return X(t.uid===a,s,"user-mismatch"),Gs._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Yt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yw(t,e,n=!1){const s="signIn",i=await Qw(t,s,e),r=await Gs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function S1(t,e){return Yw(nr(t),e)}async function R1(t,e,n){const s=nr(t),i=await b1(s,{returnSecureToken:!0,email:e,password:n}),r=await Gs._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}function k1(t,e,n){return S1(Ve(t),sr.credential(e,n))}function Xw(t,e,n,s){return Ve(t).onIdTokenChanged(e,n,s)}function A1(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function $o(t,e,n,s){return Ve(t).onAuthStateChanged(e,n,s)}function N1(t){return Ve(t).signOut()}const al="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(al,"1"),this.storage.removeItem(al),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(){const t=bt();return Jd(t)||mc(t)}const D1=1e3,x1=10;class Zw extends Jw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=O1()&&u1(),this.fallbackToPolling=Kw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);c1()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,x1):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},D1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zw.type="LOCAL";const P1=Zw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE extends Jw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}eE.type="SESSION";const tE=eE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new _c(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await M1(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_c.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=nf("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(){return window}function F1(t){In().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(){return typeof In().WorkerGlobalScope<"u"&&typeof In().importScripts=="function"}async function U1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function V1(){return nE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE="firebaseLocalStorageDb",B1=1,ll="firebaseLocalStorage",iE="fbase_key";class Vo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yc(t,e){return t.transaction([ll],e?"readwrite":"readonly").objectStore(ll)}function j1(){const t=indexedDB.deleteDatabase(sE);return new Vo(t).toPromise()}function sh(){const t=indexedDB.open(sE,B1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ll,{keyPath:iE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ll)?e(s):(s.close(),await j1(),e(await sh()))})})}async function Lg(t,e,n){const s=yc(t,!0).put({[iE]:e,value:n});return new Vo(s).toPromise()}async function q1(t,e){const n=yc(t,!1).get(e),s=await new Vo(n).toPromise();return s===void 0?null:s.value}function Fg(t,e){const n=yc(t,!0).delete(e);return new Vo(n).toPromise()}const H1=800,W1=3;class rE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>W1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_c._getInstance(V1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await U1(),!this.activeServiceWorker)return;this.sender=new L1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sh();return await Lg(e,al,"1"),await Fg(e,al),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Lg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>q1(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=yc(i,!1).getAll();return new Vo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),H1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rE.type="LOCAL";const K1=rE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function G1(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=bn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",z1().appendChild(s)})}function Q1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Po(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(t,e){return e?Ln(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf extends Zd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ii(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ii(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Y1(t){return Yw(t.auth,new sf(t),t.bypassAuthState)}function X1(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),C1(n,new sf(t),t.bypassAuthState)}async function J1(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),I1(n,new sf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Y1;case"linkViaPopup":case"linkViaRedirect":return J1;case"reauthViaPopup":case"reauthViaRedirect":return X1;default:Yt(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1=new Po(2e3,1e4);async function eO(t,e,n){const s=nr(t);qN(t,e,tf);const i=oE(s,n);return new Ms(s,"signInViaPopup",e,i).executeNotNull()}class Ms extends aE{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ms.currentPopupAction&&Ms.currentPopupAction.cancel(),Ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=nf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Z1.get())};e()}}Ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO="pendingRedirect",ka=new Map;class nO extends aE{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ka.get(this.auth._key());if(!e){try{const s=await sO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ka.set(this.auth._key(),e)}return this.bypassAuthState||ka.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sO(t,e){const n=oO(e),s=rO(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function iO(t,e){ka.set(t._key(),e)}function rO(t){return Ln(t._redirectPersistence)}function oO(t){return Ra(tO,t.config.apiKey,t.name)}async function aO(t,e,n=!1){const s=nr(t),i=oE(s,e),o=await new nO(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO=10*60*1e3;class cO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!lE(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ug(e))}saveEventToCache(e){this.cachedEventUids.add(Ug(e)),this.lastProcessedEventTime=Date.now()}}function Ug(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function lE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hO(t,e={}){return Lo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fO=/^https?/;async function pO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hO(t);for(const n of e)try{if(gO(n))return}catch{}Yt(t,"unauthorized-domain")}function gO(t){const e=nh(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!fO.test(n))return!1;if(dO.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO=new Po(3e4,6e4);function $g(){const t=In().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _O(t){return new Promise((e,n)=>{var s,i,r;function o(){$g(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$g(),n(bn(t,"network-request-failed"))},timeout:mO.get()})}if(!((i=(s=In().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=In().gapi)===null||r===void 0)&&r.load)o();else{const a=Q1("iframefcb");return In()[a]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},G1(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Aa=null,e})}let Aa=null;function yO(t){return Aa=Aa||_O(t),Aa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=new Po(5e3,15e3),wO="__/auth/iframe",EO="emulator/auth/iframe",TO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IO(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yd(e,EO):`https://${t.config.authDomain}/${wO}`,s={apiKey:e.apiKey,appName:t.name,v:ei},i=bO.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Yi(s).slice(1)}`}async function CO(t){const e=await yO(t),n=In().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:IO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:TO,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),a=In().setTimeout(()=>{r(o)},vO.get());function l(){In().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RO=500,kO=600,AO="_blank",NO="http://localhost";class Vg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OO(t,e,n,s=RO,i=kO){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},SO),{width:s.toString(),height:i.toString(),top:r,left:o}),c=bt().toLowerCase();n&&(a=Bw(c)?AO:n),Vw(c)&&(e=e||NO,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(l1(c)&&a!=="_self")return DO(e||"",a),new Vg(null);const h=window.open(e||"",a,u);X(h,t,"popup-blocked");try{h.focus()}catch{}return new Vg(h)}function DO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO="__/auth/handler",PO="emulator/auth/handler";function Bg(t,e,n,s,i,r){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ei,eventId:i};if(e instanceof tf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Cu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Uo){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${MO(t)}?${Yi(a).slice(1)}`}function MO({config:t}){return t.emulator?Yd(t,PO):`https://${t.authDomain}/${xO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="webStorageSupport";class LO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tE,this._completeRedirectFn=aO,this._overrideRedirectResult=iO}async _openPopup(e,n,s,i){var r;Kn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Bg(e,n,s,nh(),i);return OO(e,o,nf())}async _openRedirect(e,n,s,i){return await this._originValidation(e),F1(Bg(e,n,s,nh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await CO(e),s=new cO(e);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yc,{type:Yc},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Yc];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kw()||Jd()||mc()}}const FO=LO;var jg="@firebase/auth",qg="0.21.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function VO(t){Cn(new dn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{X(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),X(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zw(t)},u=new d1(a,l,c);return WN(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Cn(new dn("auth-internal",e=>{const n=nr(e.getProvider("auth").getImmediate());return(s=>new UO(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$t(jg,qg,$O(t)),$t(jg,qg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO=5*60,jO=ny("authIdTokenMaxAge")||BO;let Hg=null;const qO=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>jO)return;const i=n==null?void 0:n.token;Hg!==i&&(Hg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Bo(t=Ul()){const e=Fl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HN(t,{popupRedirectResolver:FO,persistence:[K1,P1,tE]}),s=ny("authTokenSyncURL");if(s){const r=qO(s);A1(n,r,()=>r(n.currentUser)),Xw(n,o=>r(o))}const i=ey("auth");return i&&f1(n,`http://${i}`),n}VO("Browser");const HO=y("img",{id:"logo",src:"",alt:"logo img"},null,-1),WO={id:"div--i"},KO=y("i",{id:"usuario",class:"fa fa-user-circle-o"},null,-1),zO=y("i",{class:"fa fa-sign-out","aria-hidden":"true"},null,-1),GO=y("i",{id:"carrito",class:"fa fa-shopping-cart"},null,-1),QO={id:"nav"},YO={id:"mujer"},XO={id:"hombre"},JO={id:"joyeria"},ZO={id:"electronica"},eD={key:0,id:"privado"},tD={__name:"headeeer",setup(t){var e=G(!1);const n=Bo();return $o(n,s=>{s?e.value=!0:e.value=!1}),(s,i)=>(_e(),ke("header",null,[be(F(mn),{id:"home",to:"/"},{default:gn(()=>[HO]),_:1}),y("div",WO,[F(e)?(_e(),wa(F(mn),{key:1,to:"/inicioSesion"},{default:gn(()=>[zO]),_:1})):(_e(),wa(F(mn),{key:0,to:"/inicioSesion"},{default:gn(()=>[KO]),_:1})),F(e)?(_e(),wa(F(mn),{key:2,to:"/carrito"},{default:gn(()=>[GO]),_:1})):Pa("",!0)]),y("div",QO,[y("ul",null,[y("li",YO,[be(F(mn),{to:"/mujer"},{default:gn(()=>[Lt("Mujer")]),_:1})]),y("li",XO,[be(F(mn),{to:"/hombre"},{default:gn(()=>[Lt("Hombre")]),_:1})]),y("li",JO,[be(F(mn),{to:"/joyeria"},{default:gn(()=>[Lt("Joyeria")]),_:1})]),y("li",ZO,[be(F(mn),{to:"/electronica"},{default:gn(()=>[Lt("Electrónica")]),_:1})]),F(e)?(_e(),ke("li",eD,[be(F(mn),{to:"/privado"},{default:gn(()=>[Lt("Administración")]),_:1})])):Pa("",!0)])])]))}},nD={__name:"App",setup(t){return(e,n)=>(_e(),ke(Ge,null,[be(tD),y("main",null,[be(F(G_))]),be(BN)],64))}},sD="/assets/pexels-ksenia-chernaya-3965548-dff228fb.jpg",iD="/assets/pexels-shattha-pilabut-135620-0b718372.jpg",rD="/assets/pexels-freestocksorg-291762-fb81d0e8.jpg",oD="/assets/pexels-roman-pohorecki-16170-dddadb63.jpg",aD="/assets/pexels-andrea-piacquadio-3775602-929ddeac.jpg",lD="/assets/pexels-andrea-piacquadio-972995-f519d450.jpg",cD="/assets/pexels-karolina-grabowska-5706277-3952bc5b.jpg",uD="/assets/pexels-erik-mclean-4062467-3fb68193.jpg",hD="/assets/pexels-max-fischer-5868737-7c564177.jpg",dD="/assets/pexels-cottonbro-studio-4937350-2ad9077b.jpg",fD="/assets/pexels-anastasia-shuraeva-5704410-b62990a4.jpg",pD={},gD=Nl('<section id="hero"><div class="container"><div id="carousel"><div><img src="'+sD+'" alt=""></div><div><img src="'+iD+'" alt=""></div><div><img src="'+rD+'" alt=""></div><div><img src="'+oD+'" alt=""></div><div><img src="'+aD+'" alt=""></div><div><img src="'+lD+'" alt=""></div><div><img src="'+cD+'" alt=""></div><div><img src="'+uD+'" alt=""></div><div><img src="'+hD+'" alt=""></div></div></div><div id="eslogan-carousel"><h2>Perfila tu estilo, tú eres tu mejor diseñador</h2></div></section><section id="eslogan"><div><div><h2>Bienvenido a DVA Shop</h2><p>Aqui encontraras todo lo que necesites, desde ropa hasta producto electronicos</p><p>¡¡Descubrenos!!</p></div><div><img src="'+dD+'" alt=""></div></div></section><section id="siguenos"><div id="div-big-siguenos"><div><img src="'+fD+'" alt="img-siguenos"></div><div><h2>SÍGUENOS</h2><p>Te esperamos en nuestras redes sociales.</p><p>Aquí sucede todo. No te lo pierdas.</p><i class="fa fa-instagram"></i><i class="fa fa-twitter"></i><i class="fa fa-youtube-play"></i></div></div></section><section id="email"><div><form action=""><h2>Recibe nuestras novedades</h2><p>Suscríbete a nuestra Newsletter y consigue un -10% en tu próxima compra. Disfruta de descuentos y novedades exclusivas.</p><input type="text" placeholder="Escribe tu correo..." required><br><input type="submit" value="Suscribirme"></form></div></section>',4),mD=[gD];function _D(t,e){return _e(),ke("main",null,mD)}const yD=Ow(pD,[["render",_D]]);var vD="firebase",wD="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t(vD,wD,"app");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED=new Map,TD={activated:!1,tokenObservers:[]};function kn(t){return ED.get(t)||Object.assign({},TD)}const Wg={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Gr,await ID(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Gr,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function ID(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},cl=new Qi("appCheck","AppCheck",CD);function SD(t){if(!kn(t).activated)throw cl.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD="firebase-app-check-database",kD=1,ih="firebase-app-check-store";let la=null;function AD(){return la||(la=new Promise((t,e)=>{try{const n=indexedDB.open(RD,kD);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(cl.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(ih,{keyPath:"compositeKey"})}}}catch(n){e(cl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),la)}function ND(t,e){return OD(DD(t),e)}async function OD(t,e){const s=(await AD()).transaction(ih,"readwrite"),r=s.objectStore(ih).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(cl.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function DD(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=new _o("@firebase/app-check");function Kg(t,e){return oy()?ND(t,e).catch(n=>{rh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD={error:"UNKNOWN_ERROR"};function PD(t){return Pl.encodeString(JSON.stringify(t),!1)}async function oh(t,e=!1){const n=t.app;SD(n);const s=kn(n);let i=s.token,r;if(i&&!br(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(br(l)?i=l:await Kg(n,void 0))}if(!e&&i&&br(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await kn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?rh.warn(l.message):rh.error(l),r=l}let a;return i?r?br(i)?a={token:i.token,internalError:r}:a=Gg(r):(a={token:i.token},s.token=i,await Kg(n,i)):a=Gg(r),o&&FD(n,a),a}function MD(t,e,n,s){const{app:i}=t,r=kn(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&br(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),zg(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>zg(t))}function cE(t,e){const n=kn(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function zg(t){const{app:e}=t,n=kn(e);let s=n.tokenRefresher;s||(s=LD(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function LD(t){const{app:e}=t;return new bD(async()=>{const n=kn(e);let s;if(n.token?s=await oh(t,!0):s=await oh(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=kn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Wg.RETRIAL_MIN_WAIT,Wg.RETRIAL_MAX_WAIT)}function FD(t,e){const n=kn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function br(t){return t.expireTimeMillis-Date.now()>0}function Gg(t){return{token:PD(xD),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=kn(this.app);for(const n of e)cE(this.app,n.next);return Promise.resolve()}}function $D(t,e){return new UD(t,e)}function VD(t){return{getToken:e=>oh(t,e),addTokenListener:e=>MD(t,"INTERNAL",e),removeTokenListener:e=>cE(t.app,e)}}const BD="@firebase/app-check",jD="0.6.1",qD="app-check",Qg="app-check-internal";function HD(){Cn(new dn(qD,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return $D(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Qg).initialize()})),Cn(new dn(Qg,t=>{const e=t.getProvider("app-check").getImmediate();return VD(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),$t(BD,jD)}HD();const uE=Symbol("firebaseApp");function vc(t){return Ol()&&Gt(uE,null)||Ul(t)}const Fn=()=>{};function rf(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function WD(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function ii(t){return!!t&&typeof t=="object"}const KD=Object.prototype;function zD(t){return ii(t)&&Object.getPrototypeOf(t)===KD}function of(t){return ii(t)&&t.type==="document"}function GD(t){return ii(t)&&t.type==="collection"}function QD(t){return of(t)||GD(t)}function YD(t){return ii(t)&&t.type==="query"}function XD(t){return ii(t)&&"ref"in t}function JD(t){return ii(t)&&typeof t.bucket=="string"}function ZD(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}function ex(){return!!(Ol()&&Gt(F_,null))}const ca=new WeakMap;function tx(t,e){if(!ca.has(t)){const n=ib(!0);ca.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),ca.delete(t)}}return ca.get(t)}const nx=new WeakMap,ua=new WeakMap;function sx(t){const e=vc(t);if(!ua.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{ua.set(e,r),n(r.value)}];ua.set(e,i)}return ua.get(e)}function ix(t,e){const n=Bo(e);Xw(n,s=>{const i=sx();t.value=s,Array.isArray(i)&&i[1](t)})}const Yg="@firebase/database",Xg="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hE="";function rx(t){hE=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),at(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Qr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Gn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ox(e)}}catch{}return new ax},Ls=dE("localStorage"),ah=dE("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new _o("@firebase/database"),lx=function(){let t=1;return function(){return t++}}(),fE=function(t){const e=DC(t),n=new RC;n.update(e);const s=n.digest();return Pl.encodeByteArray(s)},jo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=jo.apply(null,s):typeof s=="object"?e+=at(s):e+=s,e+=" "}return e};let js=null,Jg=!0;const cx=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ci.logLevel=ge.VERBOSE,js=Ci.log.bind(Ci),e&&ah.set("logging_enabled",!0)):typeof t=="function"?js=t:(js=null,ah.remove("logging_enabled"))},pt=function(...t){if(Jg===!0&&(Jg=!1,js===null&&ah.get("logging_enabled")===!0&&cx(!0)),js){const e=jo.apply(null,t);js(e)}},qo=function(t){return function(...e){pt(t,...e)}},lh=function(...t){const e="FIREBASE INTERNAL ERROR: "+jo(...t);Ci.error(e)},Qs=function(...t){const e=`FIREBASE FATAL ERROR: ${jo(...t)}`;throw Ci.error(e),new Error(e)},Vt=function(...t){const e="FIREBASE WARNING: "+jo(...t);Ci.warn(e)},ux=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Vt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},pE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},hx=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Bi="[MIN_NAME]",Ys="[MAX_NAME]",ir=function(t,e){if(t===e)return 0;if(t===Bi||e===Ys)return-1;if(e===Bi||t===Ys)return 1;{const n=Zg(t),s=Zg(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},dx=function(t,e){return t===e?0:t<e?-1:1},hr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+at(e))},af=function(t){if(typeof t!="object"||t===null)return at(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=at(e[s]),n+=":",n+=af(t[e[s]]);return n+="}",n},gE=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Xt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const mE=function(t){P(!pE(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},fx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},px=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},gx=new RegExp("^-?(0*)\\d{1,10}$"),mx=-2147483648,_x=2147483647,Zg=function(t){if(gx.test(t)){const e=Number(t);if(e>=mx&&e<=_x)return e}return null},Ho=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Vt("Exception was thrown by user callback.",n),e},Math.floor(0))}},yx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Mr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Vt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(pt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Vt(e)}}class ch{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ch.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="5",_E="v",yE="s",vE="r",wE="f",EE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,TE="ls",bE="p",uh="ac",IE="websocket",CE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e,n,s,i,r=!1,o="",a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ls.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ls.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Tx(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function SE(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let s;if(e===IE)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===CE)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Tx(t)&&(n.ns=t.namespace);const i=[];return Xt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(){this.counters_={}}incrementCounter(e,n=1){Gn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return hC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc={},Jc={};function cf(t){const e=t.toString();return Xc[e]||(Xc[e]=new bx),Xc[e]}function Ix(t,e){const n=t.toString();return Jc[n]||(Jc[n]=e()),Jc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ho(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="start",Sx="close",Rx="pLPCommand",kx="pRTLPCB",RE="id",kE="pw",AE="ser",Ax="cb",Nx="seg",Ox="ts",Dx="d",xx="dframe",NE=1870,OE=30,Px=NE-OE,Mx=25e3,Lx=3e4;class gi{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qo(e),this.stats_=cf(n),this.urlFn=l=>(this.appCheckToken&&(l[uh]=this.appCheckToken),SE(n,CE,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Cx(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Lx)),hx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new uf((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===em)this.id=a,this.password=l;else if(o===Sx)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[em]="t",s[AE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Ax]=this.scriptTagHolder.uniqueCallbackIdentifier),s[_E]=lf,this.transportSessionId&&(s[yE]=this.transportSessionId),this.lastSessionId&&(s[TE]=this.lastSessionId),this.applicationId&&(s[bE]=this.applicationId),this.appCheckToken&&(s[uh]=this.appCheckToken),typeof location<"u"&&location.hostname&&EE.test(location.hostname)&&(s[vE]=wE);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gi.forceAllow_=!0}static forceDisallow(){gi.forceDisallow_=!0}static isAvailable(){return gi.forceAllow_?!0:!gi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!fx()&&!px()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=at(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=J_(n),i=gE(s,Px);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[xx]="t",s[RE]=e,s[kE]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=at(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class uf{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=lx(),window[Rx+this.uniqueCallbackIdentifier]=e,window[kx+this.uniqueCallbackIdentifier]=n,this.myIFrame=uf.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){pt("frame writing exception"),a.stack&&pt(a.stack),pt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||pt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[RE]=this.myID,e[kE]=this.myPW,e[AE]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+OE+s.length<=NE;){const o=this.pendingSegs.shift();s=s+"&"+Nx+i+"="+o.seg+"&"+Ox+i+"="+o.ts+"&"+Dx+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Mx)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{pt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx=16384,Ux=45e3;let ul=null;typeof MozWebSocket<"u"?ul=MozWebSocket:typeof WebSocket<"u"&&(ul=WebSocket);class sn{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qo(this.connId),this.stats_=cf(n),this.connURL=sn.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[_E]=lf,typeof location<"u"&&location.hostname&&EE.test(location.hostname)&&(o[vE]=wE),n&&(o[yE]=n),s&&(o[TE]=s),i&&(o[uh]=i),r&&(o[bE]=r),SE(e,IE,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ls.set("previous_websocket_failure",!0);try{let s;ry(),this.mySock=new ul(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){sn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ul!==null&&!sn.forceDisallow_}static previouslyFailed(){return Ls.isInMemoryStorage||Ls.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ls.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Qr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=at(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=gE(n,Fx);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ux))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}sn.responsesRequiredToBeHealthy=2;sn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[gi,sn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=sn&&sn.isAvailable();let s=n&&!sn.previouslyFailed();if(e.webSocketOnly&&(n||Vt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[sn];else{const i=this.transports_=[];for(const r of ho.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);ho.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ho.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x=6e4,Vx=5e3,Bx=10*1024,jx=100*1024,Zc="t",tm="d",qx="s",nm="r",Hx="e",sm="o",im="a",rm="n",om="p",Wx="h";class Kx{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qo("c:"+this.id+":"),this.transportManager_=new ho(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Mr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>jx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Bx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zc in e){const n=e[Zc];n===im?this.upgradeIfSecondaryHealthy_():n===nm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===sm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=hr("t",e),s=hr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:om,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:im,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:rm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=hr("t",e),s=hr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=hr(Zc,e);if(tm in e){const s=e[tm];if(n===Wx)this.onHandshake_(s);else if(n===rm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===qx?this.onConnectionShutdown_(s):n===nm?this.onReset_(s):n===Hx?lh("Server Error: "+s):n===sm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):lh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),lf!==s&&Vt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Mr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($x))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Mr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Vx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:om,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ls.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends xE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Gh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hl}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=32,lm=768;class Le{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Se(){return new Le("")}function he(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ms(t){return t.pieces_.length-t.pieceNum_}function Me(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Le(t.pieces_,e)}function PE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function zx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ME(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function LE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Le(e,0)}function st(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Le)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Le(n,0)}function ce(t){return t.pieceNum_>=t.pieces_.length}function Kt(t,e){const n=he(t),s=he(e);if(n===null)return e;if(n===s)return Kt(Me(t),Me(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function FE(t,e){if(ms(t)!==ms(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function on(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(ms(t)>ms(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Gx{constructor(e,n){this.errorPrefix_=n,this.parts_=ME(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ll(this.parts_[s]);UE(this)}}function Qx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ll(e),UE(t)}function Yx(t){const e=t.parts_.pop();t.byteLength_-=Ll(e),t.parts_.length>0&&(t.byteLength_-=1)}function UE(t){if(t.byteLength_>lm)throw new Error(t.errorPrefix_+"has a key path longer than "+lm+" bytes ("+t.byteLength_+").");if(t.parts_.length>am)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+am+") or object contains a cycle "+Ss(t))}function Ss(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf extends xE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new hf}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=1e3,Xx=60*5*1e3,cm=30*1e3,Jx=1.3,Zx=3e4,eP="server_kill",um=3;class Vn extends DE{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Vn.nextPersistentConnectionId_++,this.log_=qo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=dr,this.maxReconnectDelay_=Xx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ry())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");hf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(at(r)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Gr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Vn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Gn(e,"w")){const s=Di(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Vt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||SC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=cm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=CC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+at(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):lh("Unrecognized action received from server: "+at(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=dr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=dr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Zx&&(this.reconnectDelay_=dr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Jx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Vn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?pt("getToken() completed but was canceled"):(pt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Kx(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,f=>{Vt(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(eP)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Vt(h),l())}}}interrupt(e){pt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Cu(this.interruptReasons_)&&(this.reconnectDelay_=dr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>af(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Le(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){pt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=um&&(this.reconnectDelay_=cm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){pt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=um&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+hE.replace(/\./g,"-")]=1,Gh()?e["framework.cordova"]=1:iy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hl.getInstance().currentlyOnline();return Cu(this.interruptReasons_)&&e}}Vn.nextPersistentConnectionId_=0;Vn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new de(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new de(Bi,e),i=new de(Bi,n);return this.compare(s,i)!==0}minPost(){return de.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha;class $E extends wc{static get __EMPTY_NODE(){return ha}static set __EMPTY_NODE(e){ha=e}compare(e,n){return ir(e.name,n.name)}isDefinedOn(e){throw Gi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return de.MIN}maxPost(){return new de(Ys,ha)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new de(e,ha)}toString(){return".key"}}const Si=new $E;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class nt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??nt.RED,this.left=i??Dt.EMPTY_NODE,this.right=r??Dt.EMPTY_NODE}copy(e,n,s,i,r){return new nt(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Dt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Dt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}nt.RED=!0;nt.BLACK=!1;class tP{copy(e,n,s,i,r){return this}insert(e,n,s){return new nt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Dt{constructor(e,n=Dt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Dt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,nt.BLACK,null,null))}remove(e){return new Dt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,nt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new da(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new da(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new da(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new da(this.root_,null,this.comparator_,!0,e)}}Dt.EMPTY_NODE=new tP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(t,e){return ir(t.name,e.name)}function df(t,e){return ir(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hh;function sP(t){hh=t}const VE=function(t){return typeof t=="number"?"number:"+mE(t):"string:"+t},BE=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Gn(e,".sv"),"Priority must be a string or number.")}else P(t===hh||t.isEmpty(),"priority of unexpected type.");P(t===hh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hm;class et{constructor(e,n=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),BE(this.priorityNode_)}static set __childrenNodeConstructor(e){hm=e}static get __childrenNodeConstructor(){return hm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:he(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=he(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(P(s!==".priority"||ms(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(Me(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+VE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=mE(this.value_):e+=this.value_,this.lazyHash_=fE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=et.VALUE_TYPE_ORDER.indexOf(n),r=et.VALUE_TYPE_ORDER.indexOf(s);return P(i>=0,"Unknown leaf type: "+n),P(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jE,qE;function iP(t){jE=t}function rP(t){qE=t}class oP extends wc{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?ir(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return de.MIN}maxPost(){return new de(Ys,new et("[PRIORITY-POST]",qE))}makePost(e,n){const s=jE(e);return new de(n,new et("[PRIORITY-POST]",s))}toString(){return".priority"}}const vt=new oP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=Math.log(2);class lP{constructor(e){const n=r=>parseInt(Math.log(r)/aP,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const dl=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new nt(d,h.node,nt.BLACK,null,null);{const f=parseInt(u/2,10)+l,g=i(l,f),_=i(f+1,c);return h=t[f],d=n?n(h):h,new nt(d,h.node,nt.BLACK,g,_)}},r=function(l){let c=null,u=null,h=t.length;const d=function(g,_){const w=h-g,b=h;h-=g;const A=i(w+1,b),C=t[w],D=n?n(C):C;f(new nt(D,C.node,_,null,A))},f=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const _=l.nextBitIsOne(),w=Math.pow(2,l.count-(g+1));_?d(w,nt.BLACK):(d(w,nt.BLACK),d(w,nt.RED))}return u},o=new lP(t.length),a=r(o);return new Dt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu;const ui={};class Un{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(ui&&vt,"ChildrenNode.ts has not been loaded"),eu=eu||new Un({".priority":ui},{".priority":vt}),eu}get(e){const n=Di(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Dt?n:null}hasIndex(e){return Gn(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Si,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(de.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=dl(s,e.getCompare()):a=ui;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Un(u,c)}addToIndexes(e,n){const s=Va(this.indexes_,(i,r)=>{const o=Di(this.indexSet_,r);if(P(o,"Missing index implementation for "+r),i===ui)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(de.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),dl(a,o.getCompare())}else return ui;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new de(e.name,a))),l.insert(e,e.node)}});return new Un(s,this.indexSet_)}removeFromIndexes(e,n){const s=Va(this.indexes_,i=>{if(i===ui)return i;{const r=n.get(e.name);return r?i.remove(new de(e.name,r)):i}});return new Un(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr;class we{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&BE(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fr||(fr=new we(new Dt(df),null,Un.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fr}updatePriority(e){return this.children_.isEmpty()?this:new we(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fr:n}}getChild(e){const n=he(e);return n===null?this:this.getImmediateChild(n).getChild(Me(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new de(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?fr:this.priorityNode_;return new we(i,o,r)}}updateChild(e,n){const s=he(e);if(s===null)return n;{P(he(e)!==".priority"||ms(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Me(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(vt,(o,a)=>{n[o]=a.val(e),s++,r&&we.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+VE(this.getPriority().val())+":"),this.forEachChild(vt,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":fE(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new de(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new de(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new de(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,de.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,de.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Wo?-1:0}withIndex(e){if(e===Si||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new we(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Si||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(vt),i=n.getIterator(vt);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Si?null:this.indexMap_.get(e.toString())}}we.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class cP extends we{constructor(){super(new Dt(df),we.EMPTY_NODE,Un.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return we.EMPTY_NODE}isEmpty(){return!1}}const Wo=new cP;Object.defineProperties(de,{MIN:{value:new de(Bi,we.EMPTY_NODE)},MAX:{value:new de(Ys,Wo)}});$E.__EMPTY_NODE=we.EMPTY_NODE;et.__childrenNodeConstructor=we;sP(Wo);rP(Wo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=!0;function gt(t,e=null){if(t===null)return we.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new et(n,gt(e))}if(!(t instanceof Array)&&uP){const n=[];let s=!1;if(Xt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=gt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new de(o,l)))}}),n.length===0)return we.EMPTY_NODE;const r=dl(n,nP,o=>o.name,df);if(s){const o=dl(n,vt.getCompare());return new we(r,gt(e),new Un({".priority":o},{".priority":vt}))}else return new we(r,gt(e),Un.Default)}else{let n=we.EMPTY_NODE;return Xt(t,(s,i)=>{if(Gn(t,s)&&s.substring(0,1)!=="."){const r=gt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(gt(e))}}iP(gt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP extends wc{constructor(e){super(),this.indexPath_=e,P(!ce(e)&&he(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?ir(e.name,n.name):r}makePost(e,n){const s=gt(e),i=we.EMPTY_NODE.updateChild(this.indexPath_,s);return new de(n,i)}maxPost(){const e=we.EMPTY_NODE.updateChild(this.indexPath_,Wo);return new de(Ys,e)}toString(){return ME(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP extends wc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?ir(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return de.MIN}maxPost(){return de.MAX}makePost(e,n){const s=gt(e);return new de(n,s)}toString(){return".value"}}const fP=new dP;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t){return{type:"value",snapshotNode:t}}function gP(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function mP(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function dm(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _P(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=vt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Bi}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ys}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===vt}copy(){const e=new ff;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===vt?n="$priority":t.index_===fP?n="$value":t.index_===Si?n="$key":(P(t.index_ instanceof hP,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=at(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=at(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+at(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=at(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+at(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function pm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==vt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends DE{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=qo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=fl.getListenId_(e,s),a={};this.listens_[o]=a;const l=fm(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Di(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=fl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=fm(e._queryParams),s=e._path.toString(),i=new Gr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Yi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Qr(a.responseText)}catch{Vt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Vt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(){this.rootNode_=we.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(){return{value:null,children:new Map}}function HE(t,e,n){if(ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=he(e);t.children.has(s)||t.children.set(s,pl());const i=t.children.get(s);e=Me(e),HE(i,e,n)}}function dh(t,e,n){t.value!==null?n(e,t.value):vP(t,(s,i)=>{const r=new Le(e.toString()+"/"+s);dh(i,r,n)})}function vP(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Xt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=10*1e3,EP=30*1e3,TP=5*60*1e3;class bP{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new wP(e);const s=gm+(EP-gm)*Math.random();Mr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Xt(e,(i,r)=>{r>0&&Gn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Mr(this.reportStats_.bind(this),Math.floor(Math.random()*2*TP))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wn||(wn={}));function WE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function KE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function zE(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=wn.ACK_USER_WRITE,this.source=WE()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Le(e));return new gl(Se(),n,this.revert)}}else return P(he(this.path)===e,"operationForChild called for unrelated child."),new gl(Me(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=wn.OVERWRITE}operationForChild(e){return ce(this.path)?new Xs(this.source,Se(),this.snap.getImmediateChild(e)):new Xs(this.source,Me(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=wn.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new Le(e));return n.isEmpty()?null:n.value?new Xs(this.source,Se(),n.value):new fo(this.source,Se(),n)}else return P(he(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fo(this.source,Me(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=he(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function IP(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(_P(o.childName,o.snapshotNode))}),pr(t,i,"child_removed",e,s,n),pr(t,i,"child_added",e,s,n),pr(t,i,"child_moved",r,s,n),pr(t,i,"child_changed",e,s,n),pr(t,i,"value",e,s,n),i}function pr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>SP(t,a,l)),o.forEach(a=>{const l=CP(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function CP(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function SP(t,e,n){if(e.childName==null||n.childName==null)throw Gi("Should only compare child_ events.");const s=new de(e.childName,e.snapshotNode),i=new de(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(t,e){return{eventCache:t,serverCache:e}}function Lr(t,e,n,s){return GE(new pf(e,n,s),t.serverCache)}function QE(t,e,n,s){return GE(t.eventCache,new pf(e,n,s))}function fh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Js(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tu;const RP=()=>(tu||(tu=new Dt(dx)),tu);class xe{constructor(e,n=RP()){this.value=e,this.children=n}static fromObject(e){let n=new xe(null);return Xt(e,(s,i)=>{n=n.set(new Le(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Se(),value:this.value};if(ce(e))return null;{const s=he(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Me(e),n);return r!=null?{path:st(new Le(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=he(e),s=this.children.get(n);return s!==null?s.subtree(Me(e)):new xe(null)}}set(e,n){if(ce(e))return new xe(n,this.children);{const s=he(e),r=(this.children.get(s)||new xe(null)).set(Me(e),n),o=this.children.insert(s,r);return new xe(this.value,o)}}remove(e){if(ce(e))return this.children.isEmpty()?new xe(null):new xe(null,this.children);{const n=he(e),s=this.children.get(n);if(s){const i=s.remove(Me(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new xe(null):new xe(this.value,r)}else return this}}get(e){if(ce(e))return this.value;{const n=he(e),s=this.children.get(n);return s?s.get(Me(e)):null}}setTree(e,n){if(ce(e))return n;{const s=he(e),r=(this.children.get(s)||new xe(null)).setTree(Me(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new xe(this.value,o)}}fold(e){return this.fold_(Se(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(st(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Se(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ce(e))return null;{const r=he(e),o=this.children.get(r);return o?o.findOnPath_(Me(e),st(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Se(),n)}foreachOnPath_(e,n,s){if(ce(e))return this;{this.value&&s(n,this.value);const i=he(e),r=this.children.get(i);return r?r.foreachOnPath_(Me(e),st(n,i),s):new xe(null)}}foreach(e){this.foreach_(Se(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(st(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.writeTree_=e}static empty(){return new un(new xe(null))}}function Fr(t,e,n){if(ce(e))return new un(new xe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Kt(i,e);return r=r.updateChild(o,n),new un(t.writeTree_.set(i,r))}else{const i=new xe(n),r=t.writeTree_.setTree(e,i);return new un(r)}}}function mm(t,e,n){let s=t;return Xt(n,(i,r)=>{s=Fr(s,st(e,i),r)}),s}function _m(t,e){if(ce(e))return un.empty();{const n=t.writeTree_.setTree(e,new xe(null));return new un(n)}}function ph(t,e){return ri(t,e)!=null}function ri(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Kt(n.path,e)):null}function ym(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(vt,(s,i)=>{e.push(new de(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new de(s,i.value))}),e}function cs(t,e){if(ce(e))return t;{const n=ri(t,e);return n!=null?new un(new xe(n)):new un(t.writeTree_.subtree(e))}}function gh(t){return t.writeTree_.isEmpty()}function ji(t,e){return YE(Se(),t.writeTree_,e)}function YE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(P(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=YE(st(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(st(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(t,e){return nT(e,t)}function kP(t,e,n,s,i){P(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Fr(t.visibleWrites,e,n)),t.lastWriteId=s}function AP(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function NP(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&OP(a,s.path)?i=!1:on(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return DP(t),!0;if(s.snap)t.visibleWrites=_m(t.visibleWrites,s.path);else{const a=s.children;Xt(a,l=>{t.visibleWrites=_m(t.visibleWrites,st(s.path,l))})}return!0}else return!1}function OP(t,e){if(t.snap)return on(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&on(st(t.path,n),e))return!0;return!1}function DP(t){t.visibleWrites=JE(t.allWrites,xP,Se()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function xP(t){return t.visible}function JE(t,e,n){let s=un.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)on(n,o)?(a=Kt(n,o),s=Fr(s,a,r.snap)):on(o,n)&&(a=Kt(o,n),s=Fr(s,Se(),r.snap.getChild(a)));else if(r.children){if(on(n,o))a=Kt(n,o),s=mm(s,a,r.children);else if(on(o,n))if(a=Kt(o,n),ce(a))s=mm(s,Se(),r.children);else{const l=Di(r.children,he(a));if(l){const c=l.getChild(Me(a));s=Fr(s,Se(),c)}}}else throw Gi("WriteRecord should have .snap or .children")}}return s}function ZE(t,e,n,s,i){if(!s&&!i){const r=ri(t.visibleWrites,e);if(r!=null)return r;{const o=cs(t.visibleWrites,e);if(gh(o))return n;if(n==null&&!ph(o,Se()))return null;{const a=n||we.EMPTY_NODE;return ji(o,a)}}}else{const r=cs(t.visibleWrites,e);if(!i&&gh(r))return n;if(!i&&n==null&&!ph(r,Se()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(on(c.path,e)||on(e,c.path))},a=JE(t.allWrites,o,e),l=n||we.EMPTY_NODE;return ji(a,l)}}}function PP(t,e,n){let s=we.EMPTY_NODE;const i=ri(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(vt,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=cs(t.visibleWrites,e);return n.forEachChild(vt,(o,a)=>{const l=ji(cs(r,new Le(o)),a);s=s.updateImmediateChild(o,l)}),ym(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=cs(t.visibleWrites,e);return ym(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function MP(t,e,n,s,i){P(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=st(e,n);if(ph(t.visibleWrites,r))return null;{const o=cs(t.visibleWrites,r);return gh(o)?i.getChild(n):ji(o,i.getChild(n))}}function LP(t,e,n,s){const i=st(e,n),r=ri(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=cs(t.visibleWrites,i);return ji(o,s.getNode().getImmediateChild(n))}else return null}function FP(t,e){return ri(t.visibleWrites,e)}function UP(t,e,n,s,i,r,o){let a;const l=cs(t.visibleWrites,e),c=ri(l,Se());if(c!=null)a=c;else if(n!=null)a=ji(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function $P(){return{visibleWrites:un.empty(),allWrites:[],lastWriteId:-1}}function mh(t,e,n,s){return ZE(t.writeTree,t.treePath,e,n,s)}function eT(t,e){return PP(t.writeTree,t.treePath,e)}function vm(t,e,n,s){return MP(t.writeTree,t.treePath,e,n,s)}function ml(t,e){return FP(t.writeTree,st(t.treePath,e))}function VP(t,e,n,s,i,r){return UP(t.writeTree,t.treePath,e,n,s,i,r)}function gf(t,e,n){return LP(t.writeTree,t.treePath,e,n)}function tT(t,e){return nT(st(t.treePath,e),t.writeTree)}function nT(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,dm(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,mP(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,gP(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,dm(s,e.snapshotNode,i.oldSnap));else throw Gi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const sT=new jP;class mf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new pf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gf(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Js(this.viewCache_),r=VP(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function qP(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function HP(t,e,n,s,i){const r=new BP;let o,a;if(n.type===wn.OVERWRITE){const c=n;c.source.fromUser?o=_h(t,e,c.path,c.snap,s,i,r):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ce(c.path),o=_l(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===wn.MERGE){const c=n;c.source.fromUser?o=KP(t,e,c.path,c.children,s,i,r):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=yh(t,e,c.path,c.children,s,i,a,r))}else if(n.type===wn.ACK_USER_WRITE){const c=n;c.revert?o=QP(t,e,c.path,s,i,r):o=zP(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===wn.LISTEN_COMPLETE)o=GP(t,e,n.path,s,r);else throw Gi("Unknown operation type: "+n.type);const l=r.getChanges();return WP(e,o,l),{viewCache:o,changes:l}}function WP(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=fh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(pP(fh(e)))}}function iT(t,e,n,s,i,r){const o=e.eventCache;if(ml(s,n)!=null)return e;{let a,l;if(ce(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Js(e),u=c instanceof we?c:we.EMPTY_NODE,h=eT(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=mh(s,Js(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=he(n);if(c===".priority"){P(ms(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=vm(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Me(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=vm(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=gf(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Lr(e,a,o.isFullyInitialized()||ce(n),t.filter.filtersNodes())}}function _l(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ce(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=he(n);if(!l.isCompleteForPath(n)&&ms(n)>1)return e;const g=Me(n),w=l.getNode().getImmediateChild(f).updateChild(g,s);f===".priority"?c=u.updatePriority(l.getNode(),w):c=u.updateChild(l.getNode(),f,w,g,sT,null)}const h=QE(e,c,l.isFullyInitialized()||ce(n),u.filtersNodes()),d=new mf(i,h,r);return iT(t,h,n,i,d,a)}function _h(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new mf(i,e,r);if(ce(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Lr(e,c,!0,t.filter.filtersNodes());else{const h=he(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Lr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Me(n),f=a.getNode().getImmediateChild(h);let g;if(ce(d))g=s;else{const _=u.getCompleteChild(h);_!=null?PE(d)===".priority"&&_.getChild(LE(d)).isEmpty()?g=_:g=_.updateChild(d,s):g=we.EMPTY_NODE}if(f.equals(g))l=e;else{const _=t.filter.updateChild(a.getNode(),h,g,d,u,o);l=Lr(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function wm(t,e){return t.eventCache.isCompleteForChild(e)}function KP(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=st(n,l);wm(e,he(u))&&(a=_h(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=st(n,l);wm(e,he(u))||(a=_h(t,a,u,c,i,r,o))}),a}function Em(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function yh(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ce(n)?c=s:c=new xe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=Em(t,f,d);l=_l(t,l,new Le(h),g,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),_=Em(t,g,d);l=_l(t,l,new Le(h),_,i,r,o,a)}}),l}function zP(t,e,n,s,i,r,o){if(ml(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ce(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return _l(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ce(n)){let c=new xe(null);return l.getNode().forEachChild(Si,(u,h)=>{c=c.set(new Le(u),h)}),yh(t,e,n,c,i,r,a,o)}else return e}else{let c=new xe(null);return s.foreach((u,h)=>{const d=st(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),yh(t,e,n,c,i,r,a,o)}}function GP(t,e,n,s,i){const r=e.serverCache,o=QE(e,r.getNode(),r.isFullyInitialized()||ce(n),r.isFiltered());return iT(t,o,n,s,sT,i)}function QP(t,e,n,s,i,r){let o;if(ml(s,n)!=null)return e;{const a=new mf(s,e,i),l=e.eventCache.getNode();let c;if(ce(n)||he(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=mh(s,Js(e));else{const h=e.serverCache.getNode();P(h instanceof we,"serverChildren would be complete if leaf node"),u=eT(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=he(n);let h=gf(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Me(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,we.EMPTY_NODE,Me(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=mh(s,Js(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ml(s,Se())!=null,Lr(e,c,o,t.filter.filtersNodes())}}function YP(t,e){const n=Js(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(he(e)).isEmpty())?n.getChild(e):null}function Tm(t,e,n,s){e.type===wn.MERGE&&e.source.queryId!==null&&(P(Js(t.viewCache_),"We should always have a full cache before handling merges"),P(fh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=HP(t.processor_,i,e,n,s);return qP(t.processor_,r.viewCache),P(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,XP(t,r.changes,r.viewCache.eventCache.getNode(),null)}function XP(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return IP(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bm;function JP(t){P(!bm,"__referenceConstructor has already been defined"),bm=t}function _f(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return P(r!=null,"SyncTree gave us an op for an invalid query."),Tm(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Tm(o,e,n,s));return r}}function yf(t,e){let n=null;for(const s of t.views.values())n=n||YP(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Im;function ZP(t){P(!Im,"__referenceConstructor has already been defined"),Im=t}class Cm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xe(null),this.pendingWriteTree_=$P(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function eM(t,e,n,s,i){return kP(t.pendingWriteTree_,e,n,s,i),i?Tc(t,new Xs(WE(),e,n)):[]}function mi(t,e,n=!1){const s=AP(t.pendingWriteTree_,e);if(NP(t.pendingWriteTree_,e)){let r=new xe(null);return s.snap!=null?r=r.set(Se(),!0):Xt(s.children,o=>{r=r.set(new Le(o),!0)}),Tc(t,new gl(s.path,r,n))}else return[]}function Ec(t,e,n){return Tc(t,new Xs(KE(),e,n))}function tM(t,e,n){const s=xe.fromObject(n);return Tc(t,new fo(KE(),e,s))}function nM(t,e,n,s){const i=lT(t,s);if(i!=null){const r=cT(i),o=r.path,a=r.queryId,l=Kt(o,e),c=new Xs(zE(a),l,n);return uT(t,o,c)}else return[]}function sM(t,e,n,s){const i=lT(t,s);if(i){const r=cT(i),o=r.path,a=r.queryId,l=Kt(o,e),c=xe.fromObject(n),u=new fo(zE(a),l,c);return uT(t,o,u)}else return[]}function rT(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Kt(o,e),c=yf(a,l);if(c)return c});return ZE(i,e,r,n,!0)}function Tc(t,e){return oT(e,t.syncPointTree_,null,XE(t.pendingWriteTree_,Se()))}function oT(t,e,n,s){if(ce(t.path))return aT(t,e,n,s);{const i=e.get(Se());n==null&&i!=null&&(n=yf(i,Se()));let r=[];const o=he(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=tT(s,o);r=r.concat(oT(a,l,c,u))}return i&&(r=r.concat(_f(i,t,s,n))),r}}function aT(t,e,n,s){const i=e.get(Se());n==null&&i!=null&&(n=yf(i,Se()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=tT(s,o),u=t.operationForChild(o);u&&(r=r.concat(aT(u,a,l,c)))}),i&&(r=r.concat(_f(i,t,s,n))),r}function lT(t,e){return t.tagToQueryMap.get(e)}function cT(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Le(t.substr(0,e))}}function uT(t,e,n){const s=t.syncPointTree_.get(e);P(s,"Missing sync point for query tag that we're tracking");const i=XE(t.pendingWriteTree_,e);return _f(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vf(n)}node(){return this.node_}}class wf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=st(this.path_,e);return new wf(this.syncTree_,n)}node(){return rT(this.syncTree_,this.path_)}}const iM=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Sm=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return rM(t[".sv"],e,n);if(typeof t[".sv"]=="object")return oM(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},rM=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},oM=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&P(!1,"Unexpected increment value: "+s);const i=e.node();if(P(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},aM=function(t,e,n,s){return Ef(e,new wf(n,t),s)},lM=function(t,e,n){return Ef(t,new vf(e),n)};function Ef(t,e,n){const s=t.getPriority().val(),i=Sm(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Sm(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new et(a,gt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new et(i))),o.forEachChild(vt,(a,l)=>{const c=Ef(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function bf(t,e){let n=e instanceof Le?e:new Le(e),s=t,i=he(n);for(;i!==null;){const r=Di(s.node.children,i)||{children:{},childCount:0};s=new Tf(i,s,r),n=Me(n),i=he(n)}return s}function rr(t){return t.node.value}function hT(t,e){t.node.value=e,vh(t)}function dT(t){return t.node.childCount>0}function cM(t){return rr(t)===void 0&&!dT(t)}function bc(t,e){Xt(t.node.children,(n,s)=>{e(new Tf(n,t,s))})}function fT(t,e,n,s){n&&!s&&e(t),bc(t,i=>{fT(i,e,!0,s)}),n&&s&&e(t)}function uM(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ko(t){return new Le(t.parent===null?t.name:Ko(t.parent)+"/"+t.name)}function vh(t){t.parent!==null&&hM(t.parent,t.name,t)}function hM(t,e,n){const s=cM(n),i=Gn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,vh(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,vh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dM=/[\[\].#$\/\u0000-\u001F\u007F]/,fM=/[\[\].#$\u0000-\u001F\u007F]/,nu=10*1024*1024,pT=function(t){return typeof t=="string"&&t.length!==0&&!dM.test(t)},pM=function(t){return typeof t=="string"&&t.length!==0&&!fM.test(t)},gM=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),pM(t)},gT=function(t,e,n){const s=n instanceof Le?new Gx(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ss(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ss(s)+" with contents = "+e.toString());if(pE(e))throw new Error(t+"contains "+e.toString()+" "+Ss(s));if(typeof e=="string"&&e.length>nu/3&&Ll(e)>nu)throw new Error(t+"contains a string greater than "+nu+" utf8 bytes "+Ss(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Xt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!pT(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ss(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Qx(s,o),gT(t,a,s),Yx(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ss(s)+" in addition to actual children.")}},mM=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!pT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!gM(n))throw new Error(OC(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _M{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yM(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!FE(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function oi(t,e,n){yM(t,n),vM(t,s=>on(s,e)||on(e,s))}function vM(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(wM(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function wM(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();js&&pt("event: "+n.toString()),Ho(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM="repo_interrupt",TM=25;class bM{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _M,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=pl(),this.transactionQueueTree_=new Tf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function IM(t,e,n){if(t.stats_=cf(t.repoInfo_),t.forceRestClient_||yx())t.server_=new fl(t.repoInfo_,(s,i,r,o)=>{Rm(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>km(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{at(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Vn(t.repoInfo_,e,(s,i,r,o)=>{Rm(t,s,i,r,o)},s=>{km(t,s)},s=>{SM(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Ix(t.repoInfo_,()=>new bP(t.stats_,t.server_)),t.infoData_=new yP,t.infoSyncTree_=new Cm({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Ec(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),If(t,"connected",!1),t.serverSyncTree_=new Cm({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);oi(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function CM(t){const n=t.infoData_.getNode(new Le(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function mT(t){return iM({timestamp:CM(t)})}function Rm(t,e,n,s,i){t.dataUpdateCount++;const r=new Le(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Va(n,c=>gt(c));o=sM(t.serverSyncTree_,r,l,i)}else{const l=gt(n);o=nM(t.serverSyncTree_,r,l,i)}else if(s){const l=Va(n,c=>gt(c));o=tM(t.serverSyncTree_,r,l)}else{const l=gt(n);o=Ec(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Sf(t,r)),oi(t.eventQueue_,a,o)}function km(t,e){If(t,"connected",e),e===!1&&kM(t)}function SM(t,e){Xt(e,(n,s)=>{If(t,n,s)})}function If(t,e,n){const s=new Le("/.info/"+e),i=gt(n);t.infoData_.updateSnapshot(s,i);const r=Ec(t.infoSyncTree_,s,i);oi(t.eventQueue_,s,r)}function RM(t){return t.nextWriteId_++}function kM(t){_T(t,"onDisconnectEvents");const e=mT(t),n=pl();dh(t.onDisconnect_,Se(),(i,r)=>{const o=aM(i,r,t.serverSyncTree_,e);HE(n,i,o)});let s=[];dh(n,Se(),(i,r)=>{s=s.concat(Ec(t.serverSyncTree_,i,r));const o=DM(t,i);Sf(t,o)}),t.onDisconnect_=pl(),oi(t.eventQueue_,Se(),s)}function AM(t){t.persistentConnection_&&t.persistentConnection_.interrupt(EM)}function _T(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),pt(n,...e)}function yT(t,e,n){return rT(t.serverSyncTree_,e,n)||we.EMPTY_NODE}function Cf(t,e=t.transactionQueueTree_){if(e||Ic(t,e),rr(e)){const n=wT(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&NM(t,Ko(e),n)}else dT(e)&&bc(e,n=>{Cf(t,n)})}function NM(t,e,n){const s=n.map(c=>c.currentWriteId),i=yT(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];P(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Kt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{_T(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(mi(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ic(t,bf(t.transactionQueueTree_,e)),Cf(t,t.transactionQueueTree_),oi(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Ho(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Vt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Sf(t,e)}},o)}function Sf(t,e){const n=vT(t,e),s=Ko(n),i=wT(t,n);return OM(t,i,s),s}function OM(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Kt(n,l.path);let u=!1,h;if(P(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(mi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=TM)u=!0,h="maxretry",i=i.concat(mi(t.serverSyncTree_,l.currentWriteId,!0));else{const d=yT(t,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){gT("transaction failed: Data returned ",f,l.path);let g=gt(f);typeof f=="object"&&f!=null&&Gn(f,".priority")||(g=g.updatePriority(d.getPriority()));const w=l.currentWriteId,b=mT(t),A=lM(g,d,b);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=A,l.currentWriteId=RM(t),o.splice(o.indexOf(w),1),i=i.concat(eM(t.serverSyncTree_,l.path,A,l.currentWriteId,l.applyLocally)),i=i.concat(mi(t.serverSyncTree_,w,!0))}else u=!0,h="nodata",i=i.concat(mi(t.serverSyncTree_,l.currentWriteId,!0))}oi(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ic(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ho(s[a]);Cf(t,t.transactionQueueTree_)}function vT(t,e){let n,s=t.transactionQueueTree_;for(n=he(e);n!==null&&rr(s)===void 0;)s=bf(s,n),e=Me(e),n=he(e);return s}function wT(t,e){const n=[];return ET(t,e,n),n.sort((s,i)=>s.order-i.order),n}function ET(t,e,n){const s=rr(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);bc(e,i=>{ET(t,i,n)})}function Ic(t,e){const n=rr(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,hT(e,n.length>0?n:void 0)}bc(e,s=>{Ic(t,s)})}function DM(t,e){const n=Ko(vT(t,e)),s=bf(t.transactionQueueTree_,e);return uM(s,i=>{su(t,i)}),su(t,s),fT(s,i=>{su(t,i)}),n}function su(t,e){const n=rr(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(mi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?hT(e,void 0):n.length=r+1,oi(t.eventQueue_,Ko(e),i);for(let o=0;o<s.length;o++)Ho(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xM(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function PM(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Vt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Am=function(t,e){const n=MM(t),s=n.namespace;n.domain==="firebase.com"&&Qs(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Qs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ux();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ex(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Le(n.pathString)}},MM=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=xM(t.substring(u,h)));const d=PM(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),n=e.substring(g+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ce(this._path)?null:PE(this._path)}get ref(){return new or(this._repo,this._path)}get _queryIdentifier(){const e=pm(this._queryParams),n=af(e);return n==="{}"?"default":n}get _queryObject(){return pm(this._queryParams)}isEqual(e){if(e=Ve(e),!(e instanceof Rf))return!1;const n=this._repo===e._repo,s=FE(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+zx(this._path)}}class or extends Rf{constructor(e,n){super(e,n,new ff,!1)}get parent(){const e=LE(this._path);return e===null?null:new or(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}JP(or);ZP(or);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LM="FIREBASE_DATABASE_EMULATOR_HOST",wh={};let FM=!1;function UM(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Qs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pt("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Am(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[LM]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Am(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new ch(ch.OWNER):new wx(t.name,t.options,e);mM("Invalid Firebase Database URL",o),ce(o.path)||Qs("Database URL must point to the root of a Firebase Database (not including a child path).");const h=VM(a,t,u,new vx(t.name,n));return new BM(h,t)}function $M(t,e){const n=wh[e];(!n||n[t.key]!==t)&&Qs(`Database ${e}(${t.repoInfo_}) has already been deleted.`),AM(t),delete n[t.key]}function VM(t,e,n,s){let i=wh[e.name];i||(i={},wh[e.name]=i);let r=i[t.toURLString()];return r&&Qs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new bM(t,FM,n,s),i[t.toURLString()]=r,r}class BM{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(IM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new or(this._repo,Se())),this._rootInternal}_delete(){return this._rootInternal!==null&&($M(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qs("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jM(t){rx(ei),Cn(new dn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return UM(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),$t(Yg,Xg,t),$t(Yg,Xg,"esm2017")}Vn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Vn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};jM();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT="firebasestorage.googleapis.com",bT="storageBucket",qM=2*60*1e3,HM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends An{constructor(e,n,s=0){super(iu(e),`Firebase Storage: ${n} (${iu(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,qe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return iu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function iu(t){return"storage/"+t}function kf(){const t="An unknown error occurred, please check the error payload for server response.";return new qe("unknown",t)}function WM(t){return new qe("object-not-found","Object '"+t+"' does not exist.")}function KM(t){return new qe("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function zM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new qe("unauthenticated",t)}function GM(){return new qe("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function QM(t){return new qe("unauthorized","User does not have permission to access '"+t+"'.")}function YM(){return new qe("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function XM(){return new qe("canceled","User canceled the upload/download.")}function JM(t){return new qe("invalid-url","Invalid URL '"+t+"'.")}function ZM(t){return new qe("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function eL(){return new qe("no-default-bucket","No default bucket found. Did you set the '"+bT+"' property when initializing the app?")}function tL(){return new qe("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function nL(){return new qe("no-download-url","The given file does not have any download URLs.")}function sL(t){return new qe("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Eh(t){return new qe("invalid-argument",t)}function IT(){return new qe("app-deleted","The Firebase app was deleted.")}function iL(t){return new qe("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ur(t,e){return new qe("invalid-format","String does not match format '"+t+"': "+e)}function gr(t){throw new qe("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Ut.makeFromUrl(e,n)}catch{return new Ut(e,"")}if(s.path==="")return s;throw ZM(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},_=n===TT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",b=new RegExp(`^https?://${_}/${i}/${w}`,"i"),C=[{regex:a,indices:l,postModify:r},{regex:f,indices:g,postModify:c},{regex:b,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<C.length;D++){const Y=C[D],le=Y.regex.exec(e);if(le){const me=le[Y.indices.bucket];let q=le[Y.indices.path];q||(q=""),s=new Ut(me,q),Y.postModify(s);break}}if(s==null)throw JM(e);return s}}class rL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oL(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...w){c||(c=!0,e.apply(null,w))}function h(w){i=setTimeout(()=>{i=null,t(f,l())},w)}function d(){r&&clearTimeout(r)}function f(w,...b){if(c){d();return}if(w){d(),u.call(null,w,...b);return}if(l()||o){d(),u.call(null,w,...b);return}s<64&&(s*=2);let C;a===1?(a=2,C=0):C=(s+Math.random())*1e3,h(C)}let g=!1;function _(w){g||(g=!0,d(),!c&&(i!==null?(w||(a=2),clearTimeout(i),h(0)):w||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,_(!0)},n),_}function aL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lL(t){return t!==void 0}function cL(t){return typeof t=="object"&&!Array.isArray(t)}function Af(t){return typeof t=="string"||t instanceof String}function Nm(t){return Nf()&&t instanceof Blob}function Nf(){return typeof Blob<"u"&&!yC()}function Om(t,e,n,s){if(s<e)throw Eh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Eh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function CT(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(qs||(qs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uL(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{constructor(e,n,s,i,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new fa(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===qs.NO_ERROR,l=r.getStatus();if(!a||uL(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===qs.ABORT;s(!1,new fa(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new fa(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());lL(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=kf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?IT():XM();o(l)}else{const l=YM();o(l)}};this.canceled_?n(!1,new fa(!1,null,!0)):this.backoffId_=oL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fa{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function dL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function fL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function gL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mL(t,e,n,s,i,r,o=!0){const a=CT(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return pL(c,e),dL(c,n),fL(c,r),gL(c,s),new hL(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _L(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yL(...t){const e=_L();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Nf())return new Blob(t);throw new qe("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function vL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wL(t){if(typeof atob>"u")throw sL("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ru{constructor(e,n){this.data=e,this.contentType=n||null}}function EL(t,e){switch(t){case En.RAW:return new ru(ST(e));case En.BASE64:case En.BASE64URL:return new ru(RT(t,e));case En.DATA_URL:return new ru(bL(e),IL(e))}throw kf()}function ST(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function TL(t){let e;try{e=decodeURIComponent(t)}catch{throw Ur(En.DATA_URL,"Malformed data URL.")}return ST(e)}function RT(t,e){switch(t){case En.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw Ur(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case En.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw Ur(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=wL(e)}catch(i){throw i.message.includes("polyfill")?i:Ur(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class kT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ur(En.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=CL(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function bL(t){const e=new kT(t);return e.base64?RT(En.BASE64,e.rest):TL(e.rest)}function IL(t){return new kT(t).contentType}function CL(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n){let s=0,i="";Nm(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Nm(this.data_)){const s=this.data_,i=vL(s,e,n);return i===null?null:new ss(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new ss(s,!0)}}static getBlob(...e){if(Nf()){const n=e.map(s=>s instanceof ss?s.data_:s);return new ss(yL.apply(null,n))}else{const n=e.map(o=>Af(o)?EL(En.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new ss(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(t){let e;try{e=JSON.parse(t)}catch{return null}return cL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function RL(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function NT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kL(t,e){return e}class Ct{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||kL}}let pa=null;function AL(t){return!Af(t)||t.length<2?t:NT(t)}function OT(){if(pa)return pa;const t=[];t.push(new Ct("bucket")),t.push(new Ct("generation")),t.push(new Ct("metageneration")),t.push(new Ct("name","fullPath",!0));function e(r,o){return AL(o)}const n=new Ct("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new Ct("size");return i.xform=s,t.push(i),t.push(new Ct("timeCreated")),t.push(new Ct("updated")),t.push(new Ct("md5Hash",null,!0)),t.push(new Ct("cacheControl",null,!0)),t.push(new Ct("contentDisposition",null,!0)),t.push(new Ct("contentEncoding",null,!0)),t.push(new Ct("contentLanguage",null,!0)),t.push(new Ct("contentType",null,!0)),t.push(new Ct("metadata","customMetadata",!0)),pa=t,pa}function NL(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new Ut(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function OL(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return NL(s,t),s}function DT(t,e,n){const s=AT(e);return s===null?null:OL(t,s,n)}function DL(t,e,n,s){const i=AT(e);if(i===null||!Af(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=Of(d,n,s),g=CT({alt:"media",token:c});return f+g})[0]}function xL(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class xT{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(t){if(!t)throw kf()}function PL(t,e){function n(s,i){const r=DT(t,i,e);return PT(r!==null),r}return n}function ML(t,e){function n(s,i){const r=DT(t,i,e);return PT(r!==null),DL(r,i,t.host,t._protocol)}return n}function MT(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=GM():i=zM():n.getStatus()===402?i=KM(t.bucket):n.getStatus()===403?i=QM(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function LL(t){const e=MT(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=WM(t.path)),r.serverResponse=i.serverResponse,r}return n}function FL(t,e,n){const s=e.fullServerUrl(),i=Of(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new xT(i,r,ML(t,n),o);return a.errorHandler=LL(e),a}function UL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function $L(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=UL(null,e)),s}function VL(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let C="";for(let D=0;D<2;D++)C=C+Math.random().toString().slice(2);return C}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=$L(e,s,i),u=xL(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=ss.getBlob(h,s,d);if(f===null)throw tL();const g={name:c.fullPath},_=Of(r,t.host,t._protocol),w="POST",b=t.maxUploadRetryTime,A=new xT(_,w,PL(t,n),b);return A.urlParams=g,A.headers=o,A.body=f.uploadData(),A.errorHandler=MT(e),A}class BL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=qs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=qs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=qs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw gr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw gr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw gr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw gr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw gr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class jL extends BL{initXhr(){this.xhr_.responseType="text"}}function LT(){return new jL}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this._service=e,n instanceof Ut?this._location=n:this._location=Ut.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Zs(e,n)}get root(){const e=new Ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return NT(this._location.path)}get storage(){return this._service}get parent(){const e=SL(this._location.path);if(e===null)return null;const n=new Ut(this._location.bucket,e);return new Zs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw iL(e)}}function qL(t,e,n){t._throwIfRoot("uploadBytes");const s=VL(t.storage,t._location,OT(),new ss(e,!0),n);return t.storage.makeRequestWithTokens(s,LT).then(i=>({metadata:i,ref:t}))}function HL(t){t._throwIfRoot("getDownloadURL");const e=FL(t.storage,t._location,OT());return t.storage.makeRequestWithTokens(e,LT).then(n=>{if(n===null)throw nL();return n})}function WL(t,e){const n=RL(t._location.path,e),s=new Ut(t._location.bucket,n);return new Zs(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KL(t){return/^[A-Za-z]+:\/\//.test(t)}function zL(t,e){return new Zs(t,e)}function FT(t,e){if(t instanceof Df){const n=t;if(n._bucket==null)throw eL();const s=new Zs(n,n._bucket);return e!=null?FT(s,e):s}else return e!==void 0?WL(t,e):t}function GL(t,e){if(e&&KL(e)){if(t instanceof Df)return zL(t,e);throw Eh("To use ref(service, url), the first argument must be a Storage instance.")}else return FT(t,e)}function Dm(t,e){const n=e==null?void 0:e[bT];return n==null?null:Ut.makeFromBucketSpec(n,t)}function QL(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:sy(i,t.app.options.projectId))}class Df{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=TT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qM,this._maxUploadRetryTime=HM,this._requests=new Set,i!=null?this._bucket=Ut.makeFromBucketSpec(i,this._host):this._bucket=Dm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ut.makeFromBucketSpec(this._url,e):this._bucket=Dm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Om("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Om("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Zs(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new rL(IT());{const o=mL(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const xm="@firebase/storage",Pm="0.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="storage";function YL(t,e,n){return t=Ve(t),qL(t,e,n)}function XL(t){return t=Ve(t),HL(t)}function JL(t,e){return t=Ve(t),GL(t,e)}function ZL(t=Ul(),e){t=Ve(t);const s=Fl(t,UT).getImmediate({identifier:e}),i=ty("storage");return i&&eF(s,...i),s}function eF(t,e,n,s={}){QL(t,e,n,s)}function tF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Df(n,s,i,e,ei)}function nF(){Cn(new dn(UT,tF,"PUBLIC").setMultipleInstances(!0)),$t(xm,Pm,""),$t(xm,Pm,"esm2017")}nF();const ou=new WeakMap;function $T(t,e){return ou.has(e)||ou.set(e,t||{f:{},r:{},s:{},u:{}}),ou.get(e)}function sF(t,e,n,s){if(!t)return n;const[i,r]=VT(t);if(!i)return n;const o=$T(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function iF(t,e,n,s){if(!t)return;const[i,r]=VT(t);if(!i)return;const o=$T(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}),a}function VT(t){return QD(t)||YD(t)?["f",t.path]:XD(t)?["r",t.toString()]:JD(t)?["s",t.toString()]:[]}const au=new WeakMap;function rF(t,e,n){const s=vc();au.has(s)||au.set(s,new Map);const i=au.get(s),r=iF(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):Fn}const oF={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Th(t,e,n,s){if(!zD(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,d]=u;Object.getOwnPropertyNames(a).forEach(f=>{const g=Object.getOwnPropertyDescriptor(a,f);g&&!g.enumerable&&Object.defineProperty(h,f,g)});for(const f in a){const g=a[f];if(g==null||g instanceof Date||g instanceof Qe||g instanceof fc)h[f]=g;else if(of(g)){const _=c+f;h[f]=_ in n?l[f]:g.path,d[_]=g.converter?g:g.withConverter(s.converter)}else if(Array.isArray(g)){h[f]=Array(g.length);for(let _=0;_<g.length;_++){const w=g[_];w&&w.path in r&&(h[f][_]=r[w.path])}o(g,l[f]||h[f],c+f+".",[h[f],d])}else ii(g)?(h[f]={},o(g,l[f],c+f+".",[h[f],d])):h[f]=g}}return o(t,e,"",i),i}const xf={reset:!1,wait:!0,maxRefDepth:2,converter:oF,snapshotOptions:{serverTimestamps:"estimate"}};function yl(t){for(const e in t)t[e].unsub()}function bh(t,e,n,s,i,r,o,a,l){const[c,u]=Th(s.data(t.snapshotOptions),rf(e,n),i,t);r.set(e,n,c),Ih(t,e,n,i,u,r,o,a,l)}function aF({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=Fn;return a.once?Aw(t).then(u=>{u.exists()?bh(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=Kd(t,u=>{u.exists()?bh(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),yl(l)}}function Ih(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(_=>c.indexOf(_)<0).forEach(_=>{s[_].unsub(),delete s[_]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const d=c.length,f=Object.create(null);function g(_){_ in f&&++h>=d&&a(n)}c.forEach(_=>{const w=s[_],b=i[_],A=`${n}.${_}`;if(f[A]=!0,w)if(w.path!==b.path)w.unsub();else return;s[_]={data:()=>rf(e,A),unsub:aF({ref:b,target:e,path:A,depth:o,ops:r,resolve:g.bind(null,A),reject:l},t),path:b.path}})}function lF(t,e,n,s,i,r){const o=Object.assign({},xf,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let d=G(c?[]:t.value);c||n.set(t,h,[]);const f=s;let g,_=Fn;const w=[],b={added:({newIndex:C,doc:D})=>{w.splice(C,0,Object.create(null));const Y=w[C],[le,me]=Th(D.data(l),void 0,Y,o);n.add(F(d),C,le),Ih(o,d,`${h}.${C}`,Y,me,n,0,s.bind(null,D),i)},modified:({oldIndex:C,newIndex:D,doc:Y})=>{const le=F(d),me=w[C],q=le[C],[Re,Ee]=Th(Y.data(l),q,me,o);w.splice(D,0,me),n.remove(le,C),n.add(le,D,Re),Ih(o,d,`${h}.${D}`,me,Ee,n,0,s,i)},removed:({oldIndex:C})=>{const D=F(d);n.remove(D,C),yl(w.splice(C,1)[0])}};function A(C){const D=C.docChanges(a);if(!g&&D.length){g=!0;let Y=0;const le=D.length,me=Object.create(null);for(let q=0;q<le;q++)me[D[q].doc.id]=!0;s=q=>{q&&q.id in me&&++Y>=le&&(c&&(n.set(t,h,F(d)),d=t),f(F(d)),s=Fn)}}D.forEach(Y=>{b[Y.type](Y)}),D.length||(c&&(n.set(t,h,F(d)),d=t),s(F(d)))}return u?xN(e).then(A).catch(i):_=Kd(e,A,i),C=>{if(_(),C){const D=typeof C=="function"?C():[];n.set(t,h,D)}w.forEach(yl)}}function cF(t,e,n,s,i,r){const o=Object.assign({},xf,r),a="value",l=Object.create(null);s=ZD(s,()=>rf(t,a));let c=Fn;function u(h){h.exists()?bh(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?Aw(e).then(u).catch(i):c=Kd(e,u,i),h=>{if(c(),h){const d=typeof h=="function"?h():null;n.set(t,a,d)}yl(l)}}function uF(t,e){let n=Fn;const s=Object.assign({},xf,e),i=F(t),r=s.target||G();ex()&&(s.once=!0),r.value=sF(i,s.ssrKey,r.value,vc());let o=r.value===void 0;const a=G(!1),l=G(),c=s_(),u=ob();let h=Fn;function d(){let _=F(t);const w=new Promise((b,A)=>{if(n(s.reset),!_)return n=Fn,b(null);a.value=o,o=!0,_.converter||(_=_.withConverter(s.converter)),n=(of(_)?cF:lF)(r,_,hF,b,A,s)}).catch(b=>(c.value===w&&(l.value=b),Promise.reject(b))).finally(()=>{c.value===w&&(a.value=!1)});c.value=w}let f=Fn;re(t)&&(f=Ir(t,d)),d(),i&&(h=rF(c.value,i,s.ssrKey)),Ol()&&b_(()=>c.value),u&&ab(g);function g(_=s.reset){f(),h(),n(_)}return Object.defineProperties(r,{error:{get:()=>l},data:{get:()=>r},pending:{get:()=>a},promise:{get:()=>c},stop:{get:()=>g}})}const hF={set:(t,e,n)=>WD(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function dF(t,e){return uF(t,{target:G([]),...e})}function BT(t){return mw(vc(t))}function fF(t){return(e,n)=>{const s=tx(e,n).run(()=>G(t));nx.set(e,s),ix(s,e)}}function pF(t,{firebaseApp:e,modules:n=[]}){t.provide(uE,e);for(const s of n)t.use(s.bind(null,e))}const Pf=uy({apiKey:"AIzaSyA-tyFLsP_vTGAjNZ6JsI1m3sPkUEVVf2E",authDomain:"dva-shop-12d28.firebaseapp.com",projectId:"dva-shop-12d28",storageBucket:"dva-shop-12d28.appspot.com",messagingSenderId:"187218928506",appId:"1:187218928506:web:3b4adf71c795f7b5cdacc3",measurementId:"G-Z3S6M8ZS4K"}),qi=Bo(Pf),gF=mw(Pf),mF=ZL(),ws=dF(pw(gF,"productos")),_F=["onClick"],yF={class:"div--product--img"},vF=["src"],wF={class:"info--div--product"},zo={__name:"producto",props:["productos"],setup(t){const e=t;function n(s){po.push(`/producto/${s}`)}return(s,i)=>(_e(!0),ke(Ge,null,Bh(e.productos,r=>(_e(),ke("div",{class:"div--producto",onClick:o=>n(r.id)},[y("div",yF,[y("img",{src:r.image},null,8,vF)]),y("div",wF,[y("h2",null,Nt(r.title),1),y("p",null,Nt(r.price)+" €",1)])],8,_F))),256))}},EF={id:"div--select"},TF=y("option",{disabled:"",value:""},"Orden",-1),bF=y("option",{value:"desc"},"Descendente",-1),IF=y("option",{value:"asc"},"Ascendente",-1),CF=[TF,bF,IF],SF={class:"div--container"},RF={__name:"MujerView",setup(t){var e=G([]);e.value=ws.value.filter(i=>i.category=="women's clothing");var n=G("");function s(){n.value=="asc"?e.value.sort(function(i,r){return r.price-i.price}):n.value=="desc"&&e.value.sort(function(i,r){return i.price-r.price})}return(i,r)=>(_e(),ke(Ge,null,[y("div",EF,[Be(y("select",{id:"select","onUpdate:modelValue":r[0]||(r[0]=o=>re(n)?n.value=o:n=o)},CF,512),[[zi,F(n)]]),y("button",{onClick:s,class:"ordenarProductos"},"Ordenar")]),y("div",SF,[be(zo,{productos:F(e)},null,8,["productos"])]),Lt("` ")],64))}},kF={id:"div--select"},AF=y("option",{disabled:"",value:""},"Orden",-1),NF=y("option",{value:"desc"},"Descendente",-1),OF=y("option",{value:"asc"},"Ascendente",-1),DF=[AF,NF,OF],xF={class:"div--container"},PF={__name:"HombreView",setup(t){var e=G([]);e.value=ws.value.filter(i=>i.category=="men's clothing");var n=G("");function s(){n.value=="asc"?e.value.sort(function(i,r){return r.price-i.price}):n.value=="desc"&&e.value.sort(function(i,r){return i.price-r.price})}return(i,r)=>(_e(),ke(Ge,null,[y("div",kF,[Be(y("select",{id:"select","onUpdate:modelValue":r[0]||(r[0]=o=>re(n)?n.value=o:n=o)},DF,512),[[zi,F(n)]]),y("button",{onClick:s,class:"ordenarProductos"},"Ordenar")]),y("div",xF,[be(zo,{productos:F(e)},null,8,["productos"])]),Lt("` ")],64))}},MF={id:"div--select"},LF=y("option",{disabled:"",value:""},"Orden",-1),FF=y("option",{value:"desc"},"Descendente",-1),UF=y("option",{value:"asc"},"Ascendente",-1),$F=[LF,FF,UF],VF={class:"div--container"},BF={__name:"NiñoView",setup(t){var e=G([]);e.value=ws.value.filter(i=>i.category=="kid");var n=G("");function s(){n.value=="asc"?e.value.sort(function(i,r){return r.price-i.price}):n.value=="desc"&&e.value.sort(function(i,r){return i.price-r.price})}return(i,r)=>(_e(),ke(Ge,null,[y("div",MF,[Be(y("select",{id:"select","onUpdate:modelValue":r[0]||(r[0]=o=>re(n)?n.value=o:n=o)},$F,512),[[zi,F(n)]]),y("button",{onClick:s,class:"ordenarProductos"},"Ordenar")]),y("div",VF,[be(zo,{productos:F(e)},null,8,["productos"])]),Lt("` ")],64))}},jF={id:"product--container"},qF={id:"imagenes"},HF=["src"],WF={id:"info"},KF=Nl('<option disabled value="">Talla</option><option value="XS">XS</option><option value="S">S</option><option value="M">M</option><option value="L">L</option><option value="XL">XL</option>',6),zF=[KF],GF=y("br",null,null,-1),QF=y("label",null,"Cantidad: ",-1),YF=y("br",null,null,-1),XF=y("div",{class:"pretext"},[y("i",{class:"fa fa-cart-plus"}),Lt(" ADD TO CART ")],-1),JF=[XF],ZF={key:2},eU={__name:"ProductoView",setup(t){var e=G(!1),n=G("");const s=Bo();$o(s,h=>{h?(e.value=!0,n.value=h.uid):e.value=!1});const i=Q_();var r=G([]),o=G(""),a=G(1);r.value=ws.value.filter(h=>h.id==i.params.id);var l=G([]);localStorage.carrito!=null?l.value=JSON.parse(localStorage.carrito):l.value=[];var c=G();function u(){if(r.value[0].category=="men's clothing"||r.value[0].category=="women's clothing")if(o.value=="")alert("Debe escoger una talla");else{c={id:r.value[0].id,category:r.value[0].category,image:r.value[0].image,title:r.value[0].title,price:r.value[0].price,size:o.value,amount:a.value,idUser:n.value};var h=!1;for(let f=0;f<l.value.length;f++)l.value[f].id==c.id&&l.value[f].size==c.size&&l.value[f].idUser==c.idUser&&(l.value[f].amount+=a.value,h=!0);h||l.value.push(c),localStorage.setItem("carrito",JSON.stringify(l.value))}else{c={id:r.value[0].id,category:r.value[0].category,image:r.value[0].image,title:r.value[0].title,price:r.value[0].price,amount:a.value,idUser:n.value};var d=!1;for(let f=0;f<l.value.length;f++)l.value[f].id==c.id&&l.value[f].size==c.size&&l.value[f].idUser==c.idUser&&(l.value[f].amount+=a.value,d=!0);d||l.value.push(c),localStorage.setItem("carrito",JSON.stringify(l.value))}}return(h,d)=>(_e(),ke("div",jF,[y("div",qF,[y("img",{src:F(r)[0].image,alt:""},null,8,HF)]),y("div",WF,[y("h1",null,Nt(F(r)[0].title),1),y("p",null,Nt(F(r)[0].description),1),y("p",null,Nt(F(r)[0].price)+" €",1),y("p",null,"Valoracion: "+Nt(F(r)[0].rating),1),F(r)[0].category!=="jewelery"&&F(r)[0].category!=="electronics"?Be((_e(),ke("select",{key:0,"onUpdate:modelValue":d[0]||(d[0]=f=>re(o)?o.value=f:o=f),name:"",id:""},zF,512)),[[zi,F(o)]]):Pa("",!0),GF,QF,Be(y("input",{"onUpdate:modelValue":d[1]||(d[1]=f=>re(a)?a.value=f:a=f),type:"number",min:"1",max:"20",id:"cantidad-producto"},null,512),[[_t,F(a)]]),YF,F(e)?(_e(),ke("button",{key:1,onClick:d[2]||(d[2]=(...f)=>u&&u(...f)),class:"addtocart"},JF)):(_e(),ke("p",ZF,"Debe estar logueado para comprar"))])]))}},tU={id:"product--container"},nU={id:"imagenes"},sU=["src"],iU={id:"info"},rU={id:"registro"},oU=y("h2",null,"Edita el producto",-1),aU=y("br",null,null,-1),lU=y("br",null,null,-1),cU=y("br",null,null,-1),uU=y("br",null,null,-1),hU={__name:"ProductoPrivadoView",setup(t){const e=BT(),n=Q_();var s=G([]);G(""),G(1),s.value=ws.value.filter(d=>d.id==n.params.id);var i=G(s.value[0].title),r=G(s.value[0].rating),o=G(s.value[0].price),a=G(s.value[0].category),l=G(s.value[0].description);const c=eh(e,"productos",s.value[0].id);function u(){PN(c,{title:i.value,rating:r.value,price:o.value,category:a.value,description:l.value}),alert("Producto editado")}function h(){MN(eh(e,"productos",s.value[0].id)),alert("Producto eliminado")}return(d,f)=>(_e(),ke("div",tU,[y("div",nU,[y("img",{src:F(s)[0].image,alt:""},null,8,sU)]),y("div",iU,[y("div",rU,[oU,Be(y("input",{placeholder:"Nombre",type:"text","onUpdate:modelValue":f[0]||(f[0]=g=>re(i)?i.value=g:i=g)},null,512),[[_t,F(i)]]),aU,Be(y("textarea",{name:"",id:"",cols:"30",rows:"10","onUpdate:modelValue":f[1]||(f[1]=g=>re(l)?l.value=g:l=g)},null,512),[[_t,F(l)]]),Be(y("input",{placeholder:"Valoracion",type:"number","onUpdate:modelValue":f[2]||(f[2]=g=>re(r)?r.value=g:r=g)},null,512),[[_t,F(r)]]),lU,Be(y("input",{placeholder:"Precio",type:"number","onUpdate:modelValue":f[3]||(f[3]=g=>re(o)?o.value=g:o=g)},null,512),[[_t,F(o)]]),cU,Be(y("input",{placeholder:"Categoria",type:"text","onUpdate:modelValue":f[4]||(f[4]=g=>re(a)?a.value=g:a=g)},null,512),[[_t,F(a)]]),uU,y("input",{onClick:u,type:"submit",id:"editar-submit",value:"Editar"})]),y("i",{onClick:h,class:"fa fa-trash",style:{"font-size":"36px"},"aria-hidden":"true"})])]))}},dU={id:"user--div"},fU={id:"registro"},pU=y("h2",null,"Registrarse",-1),gU=y("br",null,null,-1),mU=y("br",null,null,-1),_U=y("div",{id:"registrarse"},[y("h2",null,"Inicio de sesión"),y("input",{placeholder:"Usuario",type:"text"}),y("br"),y("input",{placeholder:"Contraseña",type:"password"}),y("br"),y("input",{type:"submit",id:"registrarse-submit",value:"Registrarse"})],-1),yU={__name:"RegistroView",setup(t){var e=G(""),n=G("");function s(){R1(qi,e.value,n.value).then(i=>{i.user}).catch(i=>{i.code,i.message})}return(i,r)=>(_e(),ke("div",dU,[y("div",fU,[pU,Be(y("input",{placeholder:"Usuario",type:"text","onUpdate:modelValue":r[0]||(r[0]=o=>re(e)?e.value=o:e=o)},null,512),[[_t,F(e)]]),gU,Be(y("input",{placeholder:"Contraseña",type:"password","onUpdate:modelValue":r[1]||(r[1]=o=>re(n)?n.value=o:n=o)},null,512),[[_t,F(n)]]),mU,y("input",{onClick:s,type:"submit",id:"registrarse-submit",value:"Registrarse"})]),_U]))}},vU={id:"div--select"},wU=y("option",{disabled:"",value:""},"Orden",-1),EU=y("option",{value:"desc"},"Descendente",-1),TU=y("option",{value:"asc"},"Ascendente",-1),bU=[wU,EU,TU],IU={class:"div--container"},CU={__name:"joyeriaView",setup(t){var e=G([]);e.value=ws.value.filter(i=>i.category=="jewelery");var n=G("");function s(){n.value=="asc"?e.value.sort(function(i,r){return r.price-i.price}):n.value=="desc"&&e.value.sort(function(i,r){return i.price-r.price})}return(i,r)=>(_e(),ke(Ge,null,[y("div",vU,[Be(y("select",{id:"select","onUpdate:modelValue":r[0]||(r[0]=o=>re(n)?n.value=o:n=o)},bU,512),[[zi,F(n)]]),y("button",{onClick:s,class:"ordenarProductos"},"Ordenar")]),y("div",IU,[be(zo,{productos:F(e)},null,8,["productos"])]),Lt("` ")],64))}},SU={id:"div--select"},RU=y("option",{disabled:"",value:""},"Orden",-1),kU=y("option",{value:"desc"},"Descendente",-1),AU=y("option",{value:"asc"},"Ascendente",-1),NU=[RU,kU,AU],OU={class:"div--container"},DU={__name:"ElectronicaView",setup(t){var e=G([]);e.value=ws.value.filter(i=>i.category=="electronics");var n=G("");function s(){n.value=="asc"?e.value.sort(function(i,r){return r.price-i.price}):n.value=="desc"&&e.value.sort(function(i,r){return i.price-r.price})}return(i,r)=>(_e(),ke(Ge,null,[y("div",SU,[Be(y("select",{id:"select","onUpdate:modelValue":r[0]||(r[0]=o=>re(n)?n.value=o:n=o)},NU,512),[[zi,F(n)]]),y("button",{onClick:s,class:"ordenarProductos"},"Ordenar")]),y("div",OU,[be(zo,{productos:F(e)},null,8,["productos"])]),Lt("` ")],64))}},xU={id:"container--cesta--productos"},PU={id:"productos"},MU={id:"cesta-producto"},LU=["src"],FU={key:0},UU={class:"pPrecio"},$U=y("div",{class:"div-delete-producto"},null,-1),VU={class:"div-actualizar-producto"},BU=y("label",null,"Cantidad: ",-1),jU=["onChange","onUpdate:modelValue"],qU=["onClick"],HU={id:"cesta"},WU={id:"subtotal"},KU={id:"gastosdeEnvio"},zU={id:"total"},GU=y("button",{id:"tramitarPedido"},"Tramitar pedido",-1),QU={__name:"CarritoView",setup(t){var e=G(""),n=3;G("");const s=Bo();var i=G([]),r=G([]);i.value=JSON.parse(localStorage.carrito),$o(s,c=>{c&&(e.value=c.uid,r.value=i.value.filter(u=>u.idUser==e.value),console.log(r.value))});function o(c,u){for(let h=0;h<i.value.length;h++)i.value[h].category=="men's clothing"||i.value[h].category=="women's clothing"?i.value[h].id==c&&i.value[h].idUser==e.value&&i.value[h].size==u&&i.value.splice(h,1):i.value[h].id==c&&i.value[h].idUser==e.value&&i.value.splice(h,1);for(let h=0;h<r.value.length;h++)r.value[h].category=="men's clothing"||r.value[h].category=="women's clothing"?r.value[h].id==c&&r.value[h].idUser==e.value&&r.value[h].size==u&&r.value.splice(h,1):r.value[h].id==c&&r.value[h].idUser==e.value&&r.value.splice(h,1);localStorage.carrito=JSON.stringify(i.value)}function a(c,u,h){for(let d=0;d<i.value.length;d++)i.value[d].category=="men's clothing"||i.value[d].category=="women's clothing"?i.value[d].id==c&&i.value[d].idUser==e.value&&i.value[d].size==u&&(i.value[d].amount=h):i.value[d].id==c&&i.value[d].idUser==e.value&&(i.value[d].amount=h);for(let d=0;d<r.value.length;d++)r.value[d].category=="men's clothing"||r.value[d].category=="women's clothing"?r.value[d].id==c&&r.value[d].idUser==e.value&&r.value[d].size==u&&(r.value[d].amount=h):r.value[d].id==c&&r.value[d].idUser==e.value&&(r.value[d].amount=h);localStorage.carrito=JSON.stringify(i.value)}function l(){let c=0;for(let u=0;u<r.value.length;u++)c+=r.value[u].price*r.value[u].amount;return c}return(c,u)=>(_e(),ke("div",xU,[y("div",PU,[(_e(!0),ke(Ge,null,Bh(F(r),h=>(_e(),ke("div",MU,[y("div",null,[y("img",{src:h.image,alt:""},null,8,LU)]),y("div",null,[y("h3",null,Nt(h.title),1),h.category!=="jewelery"&&h.category!=="electronics"?(_e(),ke("p",FU,"Talla: "+Nt(h.size),1)):Pa("",!0),y("p",UU,Nt(h.price)+" €",1)]),$U,y("div",VU,[BU,Be(y("input",{type:"number",min:"1",max:"20",class:"cantidadProducto",onChange:d=>a(h.id,h.size,h.amount),"onUpdate:modelValue":d=>h.amount=d,name:"cantidadProducto"},null,40,jU),[[_t,h.amount]]),y("i",{onClick:d=>o(h.id,h.size),class:"papelera fa fa-trash"},null,8,qU)])]))),256))]),y("div",HU,[y("p",WU,"Subtotal: "+Nt(l().toFixed(2))+" €",1),y("p",KU,"Gastos de envio: "+Nt(F(n))+" €",1),y("p",zU,"Total: "+Nt((l()+F(n)).toFixed(2))+" €",1),GU])]))}},YU={id:"product--container"},XU={id:"info"},JU={id:"registro"},ZU=y("h2",null,"Crear producto",-1),e$=y("br",null,null,-1),t$=y("br",null,null,-1),n$=y("br",null,null,-1),s$=y("br",null,null,-1),i$=y("label",{for:""},"Subir archivo",-1),r$={__name:"productoNuevoView",setup(t){const e=BT();var n=G(""),s=G(""),i=G(""),r=G(),o=G(""),a=G();function l(){const u={title:n.value,description:s.value,rating:i.value,price:r.value,category:o.value,image:a.value};LN(pw(e,"productos"),u)}function c(u){const h=u.target.files[0],d=JL(mF,h.name);YL(d,h).then(f=>{console.log("Uploaded a blob or file!"),XL(d).then(g=>{a.value=g})})}return(u,h)=>(_e(),ke("div",YU,[y("div",XU,[y("div",JU,[ZU,Be(y("input",{placeholder:"Nombre",type:"text","onUpdate:modelValue":h[0]||(h[0]=d=>re(n)?n.value=d:n=d)},null,512),[[_t,F(n)]]),e$,Be(y("textarea",{placeholder:"Descripcion","onUpdate:modelValue":h[1]||(h[1]=d=>re(s)?s.value=d:s=d),name:"",id:"",cols:"30",rows:"10"},null,512),[[_t,F(s)]]),Be(y("input",{placeholder:"Valoracion",type:"number","onUpdate:modelValue":h[2]||(h[2]=d=>re(i)?i.value=d:i=d)},null,512),[[_t,F(i)]]),t$,Be(y("input",{placeholder:"Precio",type:"number","onUpdate:modelValue":h[3]||(h[3]=d=>re(r)?r.value=d:r=d)},null,512),[[_t,F(r)]]),n$,Be(y("input",{placeholder:"Categoria",type:"text","onUpdate:modelValue":h[4]||(h[4]=d=>re(o)?o.value=d:o=d)},null,512),[[_t,F(o)]]),s$,i$,y("input",{ref:"file",onChange:c,type:"file"},null,544),y("input",{onClick:l,type:"submit",id:"crear-submit",value:"crear"})])])]))}},o$={id:"user--div"},a$={id:"registro"},l$=y("h2",null,"Inicio se sesión",-1),c$=y("br",null,null,-1),u$=y("br",null,null,-1),h$=Nl(`<div id="registrarse"><h2>Registrarse</h2><input type="text" id="userName" placeholder="Nombre de usuario" required><input type="text" id="name" placeholder="Nombre" required><input type="text" id="surname" placeholder="Apellidos" required><input type="tel" id="tel" pattern="[0-9]{9}" placeholder="Telefono" required><input type="email" id="email-btn" placeholder="Correo" required><input type="password" id="password" pattern="(?=^.{8,}$)((?=.*d)|(?=.*W+))(?![.\r
        ])(?=.*[A-Z])(?=.*[a-z]).*$" placeholder="Contraseña" required><br><input type="submit" id="registrarse-submit" value="Registrarse"></div><div id="registro--div--respuesta"><p id="p-registro-respuesta"></p><p id="p2-registro-respuesta"></p></div>`,2),d$={__name:"inicioSesion",setup(t){var e=G(""),n=G("");function s(){k1(qi,e.value,n.value).then(r=>{r.user}).catch(r=>{r.code,r.message})}function i(){eO(qi,new xn).then(r=>{r.user}).catch(r=>{r.code,r.message})}return(r,o)=>(_e(),ke("div",o$,[y("div",a$,[l$,Be(y("input",{placeholder:"Usuario",type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>re(e)?e.value=a:e=a)},null,512),[[_t,F(e)]]),c$,Be(y("input",{placeholder:"Contraseña",type:"password","onUpdate:modelValue":o[1]||(o[1]=a=>re(n)?n.value=a:n=a)},null,512),[[_t,F(n)]]),u$,y("input",{onClick:s,type:"submit",id:"registrarse-submit",value:"Registrarse"}),y("i",{onClick:i,class:"fa fa-google",style:{"font-size":"25px"},"aria-hidden":"true"})]),h$]))}},f$=["onClick"],p$={class:"div--product--img"},g$=["src"],m$={class:"info--div--product"},_$=y("button",null,"Editar Producto",-1),y$={__name:"productoPrivado",props:["productosPrivados"],setup(t){const e=t;function n(s){po.push(`/productoPrivado/${s}`)}return(s,i)=>(_e(!0),ke(Ge,null,Bh(e.productosPrivados,r=>(_e(),ke("div",{class:"div--producto",onClick:o=>n(r.id)},[y("div",p$,[y("img",{src:r.image},null,8,g$)]),y("div",m$,[y("h2",null,Nt(r.title),1),_$])],8,f$))),256))}},v$=y("h2",null,"ZONA PRIVADA",-1),w$={class:"div--container",style:{gap:"1%"}},E$={__name:"privado",setup(t){var e=G([]);e.value=ws.value;var n=G("");$o(qi,r=>{r&&(r.uid,n.value=r.email)});function s(){N1(qi).then(()=>{po.push("/inicioSesion")}).catch(r=>{})}function i(){po.push("/productoNuevo")}return(r,o)=>(_e(),ke(Ge,null,[v$,y("h2",null,"Bienvenido "+Nt(F(n)),1),Lt(),y("button",{onClick:s},"Salir"),y("button",{onClick:i},"Producto nuevo"),y("div",w$,[be(y$,{productosPrivados:F(e)},null,8,["productosPrivados"])])],64))}};const jT=aI(nD);jT.use(pF,{firebaseApp:Pf,modules:[fF()]});var Ch=!1;$o(qi,t=>{t?(t.uid,Ch=!0):Ch=!1});const T$=[{path:"/",name:"home",component:yD},{path:"/mujer",name:"mujer",component:RF},{path:"/producto/:id",name:"producto",component:eU},{path:"/hombre",name:"hombre",component:PF},{path:"/registro",name:"registro",component:yU},{path:"/carrito",name:"carrito",component:QU},{path:"/niño",name:"niño",component:BF},{path:"/joyeria",name:"joyeria",component:CU},{path:"/electronica",name:"electronica",component:DU},{path:"/inicioSesion",name:"inicioSesion",component:d$},{path:"/privado",name:"privado",component:E$,beforeEnter:(t,e)=>!!Ch},{path:"/productoPrivado/:id",name:"productoPrivado",component:hU},{path:"/productoNuevo",name:"productoNuevo",component:r$}],po=lC({history:SI(),routes:T$});jT.use(po).mount("#page");
