var PS=Object.defineProperty;var zS=(o,e,i)=>e in o?PS(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var ai=(o,e,i)=>zS(o,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function BS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Of={exports:{}},Eo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function IS(){if(_g)return Eo;_g=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Eo.Fragment=e,Eo.jsx=i,Eo.jsxs=i,Eo}var vg;function FS(){return vg||(vg=1,Of.exports=IS()),Of.exports}var We=FS(),Pf={exports:{}},Jt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function HS(){if(Sg)return Jt;Sg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),x=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function v(U,tt,_t){this.props=U,this.context=tt,this.refs=M,this.updater=_t||b}v.prototype.isReactComponent={},v.prototype.setState=function(U,tt){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,tt,"setState")},v.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function B(){}B.prototype=v.prototype;function w(U,tt,_t){this.props=U,this.context=tt,this.refs=M,this.updater=_t||b}var P=w.prototype=new B;P.constructor=w,C(P,v.prototype),P.isPureReactComponent=!0;var nt=Array.isArray;function F(){}var O={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function D(U,tt,_t){var W=_t.ref;return{$$typeof:o,type:U,key:tt,ref:W!==void 0?W:null,props:_t}}function R(U,tt){return D(U.type,tt,U.props)}function V(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function lt(U){var tt={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(_t){return tt[_t]})}var st=/\/+/g;function pt(U,tt){return typeof U=="object"&&U!==null&&U.key!=null?lt(""+U.key):tt.toString(36)}function ht(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(F,F):(U.status="pending",U.then(function(tt){U.status==="pending"&&(U.status="fulfilled",U.value=tt)},function(tt){U.status==="pending"&&(U.status="rejected",U.reason=tt)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function L(U,tt,_t,W,ot){var xt=typeof U;(xt==="undefined"||xt==="boolean")&&(U=null);var vt=!1;if(U===null)vt=!0;else switch(xt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(U.$$typeof){case o:case e:vt=!0;break;case _:return vt=U._init,L(vt(U._payload),tt,_t,W,ot)}}if(vt)return ot=ot(U),vt=W===""?"."+pt(U,0):W,nt(ot)?(_t="",vt!=null&&(_t=vt.replace(st,"$&/")+"/"),L(ot,tt,_t,"",function(re){return re})):ot!=null&&(V(ot)&&(ot=R(ot,_t+(ot.key==null||U&&U.key===ot.key?"":(""+ot.key).replace(st,"$&/")+"/")+vt)),tt.push(ot)),1;vt=0;var kt=W===""?".":W+":";if(nt(U))for(var Bt=0;Bt<U.length;Bt++)W=U[Bt],xt=kt+pt(W,Bt),vt+=L(W,tt,_t,xt,ot);else if(Bt=y(U),typeof Bt=="function")for(U=Bt.call(U),Bt=0;!(W=U.next()).done;)W=W.value,xt=kt+pt(W,Bt++),vt+=L(W,tt,_t,xt,ot);else if(xt==="object"){if(typeof U.then=="function")return L(ht(U),tt,_t,W,ot);throw tt=String(U),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return vt}function q(U,tt,_t){if(U==null)return U;var W=[],ot=0;return L(U,W,"","",function(xt){return tt.call(_t,xt,ot++)}),W}function j(U){if(U._status===-1){var tt=U._result;tt=tt(),tt.then(function(_t){(U._status===0||U._status===-1)&&(U._status=1,U._result=_t)},function(_t){(U._status===0||U._status===-1)&&(U._status=2,U._result=_t)}),U._status===-1&&(U._status=0,U._result=tt)}if(U._status===1)return U._result.default;throw U._result}var yt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Et={map:q,forEach:function(U,tt,_t){q(U,function(){tt.apply(this,arguments)},_t)},count:function(U){var tt=0;return q(U,function(){tt++}),tt},toArray:function(U){return q(U,function(tt){return tt})||[]},only:function(U){if(!V(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return Jt.Activity=S,Jt.Children=Et,Jt.Component=v,Jt.Fragment=i,Jt.Profiler=l,Jt.PureComponent=w,Jt.StrictMode=r,Jt.Suspense=m,Jt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,Jt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return O.H.useMemoCache(U)}},Jt.cache=function(U){return function(){return U.apply(null,arguments)}},Jt.cacheSignal=function(){return null},Jt.cloneElement=function(U,tt,_t){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var W=C({},U.props),ot=U.key;if(tt!=null)for(xt in tt.key!==void 0&&(ot=""+tt.key),tt)!Q.call(tt,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&tt.ref===void 0||(W[xt]=tt[xt]);var xt=arguments.length-2;if(xt===1)W.children=_t;else if(1<xt){for(var vt=Array(xt),kt=0;kt<xt;kt++)vt[kt]=arguments[kt+2];W.children=vt}return D(U.type,ot,W)},Jt.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},Jt.createElement=function(U,tt,_t){var W,ot={},xt=null;if(tt!=null)for(W in tt.key!==void 0&&(xt=""+tt.key),tt)Q.call(tt,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ot[W]=tt[W]);var vt=arguments.length-2;if(vt===1)ot.children=_t;else if(1<vt){for(var kt=Array(vt),Bt=0;Bt<vt;Bt++)kt[Bt]=arguments[Bt+2];ot.children=kt}if(U&&U.defaultProps)for(W in vt=U.defaultProps,vt)ot[W]===void 0&&(ot[W]=vt[W]);return D(U,xt,ot)},Jt.createRef=function(){return{current:null}},Jt.forwardRef=function(U){return{$$typeof:d,render:U}},Jt.isValidElement=V,Jt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:j}},Jt.memo=function(U,tt){return{$$typeof:p,type:U,compare:tt===void 0?null:tt}},Jt.startTransition=function(U){var tt=O.T,_t={};O.T=_t;try{var W=U(),ot=O.S;ot!==null&&ot(_t,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(F,yt)}catch(xt){yt(xt)}finally{tt!==null&&_t.types!==null&&(tt.types=_t.types),O.T=tt}},Jt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},Jt.use=function(U){return O.H.use(U)},Jt.useActionState=function(U,tt,_t){return O.H.useActionState(U,tt,_t)},Jt.useCallback=function(U,tt){return O.H.useCallback(U,tt)},Jt.useContext=function(U){return O.H.useContext(U)},Jt.useDebugValue=function(){},Jt.useDeferredValue=function(U,tt){return O.H.useDeferredValue(U,tt)},Jt.useEffect=function(U,tt){return O.H.useEffect(U,tt)},Jt.useEffectEvent=function(U){return O.H.useEffectEvent(U)},Jt.useId=function(){return O.H.useId()},Jt.useImperativeHandle=function(U,tt,_t){return O.H.useImperativeHandle(U,tt,_t)},Jt.useInsertionEffect=function(U,tt){return O.H.useInsertionEffect(U,tt)},Jt.useLayoutEffect=function(U,tt){return O.H.useLayoutEffect(U,tt)},Jt.useMemo=function(U,tt){return O.H.useMemo(U,tt)},Jt.useOptimistic=function(U,tt){return O.H.useOptimistic(U,tt)},Jt.useReducer=function(U,tt,_t){return O.H.useReducer(U,tt,_t)},Jt.useRef=function(U){return O.H.useRef(U)},Jt.useState=function(U){return O.H.useState(U)},Jt.useSyncExternalStore=function(U,tt,_t){return O.H.useSyncExternalStore(U,tt,_t)},Jt.useTransition=function(){return O.H.useTransition()},Jt.version="19.2.4",Jt}var xg;function Ch(){return xg||(xg=1,Pf.exports=HS()),Pf.exports}var $i=Ch();const ql=BS($i);var zf={exports:{}},To={},Bf={exports:{}},If={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function GS(){return Mg||(Mg=1,(function(o){function e(L,q){var j=L.length;L.push(q);t:for(;0<j;){var yt=j-1>>>1,Et=L[yt];if(0<l(Et,q))L[yt]=q,L[j]=Et,j=yt;else break t}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var q=L[0],j=L.pop();if(j!==q){L[0]=j;t:for(var yt=0,Et=L.length,U=Et>>>1;yt<U;){var tt=2*(yt+1)-1,_t=L[tt],W=tt+1,ot=L[W];if(0>l(_t,j))W<Et&&0>l(ot,_t)?(L[yt]=ot,L[W]=j,yt=W):(L[yt]=_t,L[tt]=j,yt=tt);else if(W<Et&&0>l(ot,j))L[yt]=ot,L[W]=j,yt=W;else break t}}return q}function l(L,q){var j=L.sortIndex-q.sortIndex;return j!==0?j:L.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,S=null,x=3,y=!1,b=!1,C=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function P(L){for(var q=i(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=L)r(p),q.sortIndex=q.expirationTime,e(m,q);else break;q=i(p)}}function nt(L){if(C=!1,P(L),!b)if(i(m)!==null)b=!0,F||(F=!0,lt());else{var q=i(p);q!==null&&ht(nt,q.startTime-L)}}var F=!1,O=-1,Q=5,D=-1;function R(){return M?!0:!(o.unstable_now()-D<Q)}function V(){if(M=!1,F){var L=o.unstable_now();D=L;var q=!0;try{t:{b=!1,C&&(C=!1,B(O),O=-1),y=!0;var j=x;try{e:{for(P(L),S=i(m);S!==null&&!(S.expirationTime>L&&R());){var yt=S.callback;if(typeof yt=="function"){S.callback=null,x=S.priorityLevel;var Et=yt(S.expirationTime<=L);if(L=o.unstable_now(),typeof Et=="function"){S.callback=Et,P(L),q=!0;break e}S===i(m)&&r(m),P(L)}else r(m);S=i(m)}if(S!==null)q=!0;else{var U=i(p);U!==null&&ht(nt,U.startTime-L),q=!1}}break t}finally{S=null,x=j,y=!1}q=void 0}}finally{q?lt():F=!1}}}var lt;if(typeof w=="function")lt=function(){w(V)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,pt=st.port2;st.port1.onmessage=V,lt=function(){pt.postMessage(null)}}else lt=function(){v(V,0)};function ht(L,q){O=v(function(){L(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(L){switch(x){case 1:case 2:case 3:var q=3;break;default:q=x}var j=x;x=q;try{return L()}finally{x=j}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(L,q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var j=x;x=L;try{return q()}finally{x=j}},o.unstable_scheduleCallback=function(L,q,j){var yt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?yt+j:yt):j=yt,L){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=j+Et,L={id:_++,callback:q,priorityLevel:L,startTime:j,expirationTime:Et,sortIndex:-1},j>yt?(L.sortIndex=j,e(p,L),i(m)===null&&L===i(p)&&(C?(B(O),O=-1):C=!0,ht(nt,j-yt))):(L.sortIndex=Et,e(m,L),b||y||(b=!0,F||(F=!0,lt()))),L},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(L){var q=x;return function(){var j=x;x=q;try{return L.apply(this,arguments)}finally{x=j}}}})(If)),If}var yg;function VS(){return yg||(yg=1,Bf.exports=GS()),Bf.exports}var Ff={exports:{}},Sn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function XS(){if(Eg)return Sn;Eg=1;var o=Ch();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Sn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Sn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},Sn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Sn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Sn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,S=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:x,fetchPriority:y}):_==="script"&&r.d.X(m,{crossOrigin:S,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Sn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Sn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,S=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Sn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Sn.requestFormReset=function(m){r.d.r(m)},Sn.unstable_batchedUpdates=function(m,p){return m(p)},Sn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Sn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Sn.version="19.2.4",Sn}var Tg;function kS(){if(Tg)return Ff.exports;Tg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ff.exports=XS(),Ff.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function WS(){if(Ag)return To;Ag=1;var o=VS(),e=Ch(),i=kS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var g=!1,E=u.child;E;){if(E===a){g=!0,a=u,s=f;break}if(E===s){g=!0,s=u,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,s=u;break}if(E===s){g=!0,s=f,a=u;break}E=E.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),w=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),nt=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var st=Symbol.for("react.client.reference");function pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===st?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case nt:return"Suspense";case F:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case w:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:pt(t.type)||"Memo";case Q:n=t._payload,t=t._init;try{return pt(t(n))}catch{}}return null}var ht=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},yt=[],Et=-1;function U(t){return{current:t}}function tt(t){0>Et||(t.current=yt[Et],yt[Et]=null,Et--)}function _t(t,n){Et++,yt[Et]=t.current,t.current=n}var W=U(null),ot=U(null),xt=U(null),vt=U(null);function kt(t,n){switch(_t(xt,n),_t(ot,t),_t(W,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Hm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Hm(n),t=Gm(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}tt(W),_t(W,t)}function Bt(){tt(W),tt(ot),tt(xt)}function re(t){t.memoizedState!==null&&_t(vt,t);var n=W.current,a=Gm(n,t.type);n!==a&&(_t(ot,t),_t(W,a))}function G(t){ot.current===t&&(tt(W),tt(ot)),vt.current===t&&(tt(vt),So._currentValue=j)}var oe,le;function Ee(t){if(oe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);oe=n&&n[1]||"",le=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+oe+t+le}var Yt=!1;function he(t,n){if(!t||Yt)return"";Yt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var dt=function(){throw Error()};if(Object.defineProperty(dt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(dt,[])}catch(it){var J=it}Reflect.construct(t,[],dt)}else{try{dt.call()}catch(it){J=it}t.call(dt.prototype)}}else{try{throw Error()}catch(it){J=it}(dt=t())&&typeof dt.catch=="function"&&dt.catch(function(){})}}catch(it){if(it&&J&&typeof it.stack=="string")return[it.stack,J.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],E=f[1];if(g&&E){var z=g.split(`
`),K=E.split(`
`);for(u=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;u<K.length&&!K[u].includes("DetermineComponentFrameRoot");)u++;if(s===z.length||u===K.length)for(s=z.length-1,u=K.length-1;1<=s&&0<=u&&z[s]!==K[u];)u--;for(;1<=s&&0<=u;s--,u--)if(z[s]!==K[u]){if(s!==1||u!==1)do if(s--,u--,0>u||z[s]!==K[u]){var ut=`
`+z[s].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=s&&0<=u);break}}}finally{Yt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ee(a):""}function se(t,n){switch(t.tag){case 26:case 27:case 5:return Ee(t.type);case 16:return Ee("Lazy");case 13:return t.child!==n&&n!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return he(t.type,!1);case 11:return he(t.type.render,!1);case 1:return he(t.type,!0);case 31:return Ee("Activity");default:return""}}function $t(t){try{var n="",a=null;do n+=se(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var He=Object.prototype.hasOwnProperty,N=o.unstable_scheduleCallback,T=o.unstable_cancelCallback,rt=o.unstable_shouldYield,St=o.unstable_requestPaint,gt=o.unstable_now,Mt=o.unstable_getCurrentPriorityLevel,Vt=o.unstable_ImmediatePriority,wt=o.unstable_UserBlockingPriority,Ct=o.unstable_NormalPriority,ee=o.unstable_LowPriority,Tt=o.unstable_IdlePriority,Ft=o.log,ue=o.unstable_setDisableYieldValue,jt=null,Rt=null;function Qt(t){if(typeof Ft=="function"&&ue(t),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(jt,t)}catch{}}var Kt=Math.clz32?Math.clz32:Lt,Ve=Math.log,H=Math.LN2;function Lt(t){return t>>>=0,t===0?32:31-(Ve(t)/H|0)|0}var ct=256,mt=262144,At=4194304;function Wt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function de(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?u=Wt(s):(g&=E,g!==0?u=Wt(g):a||(a=E&~t,a!==0&&(u=Wt(a))))):(E=s&~f,E!==0?u=Wt(E):g!==0?u=Wt(g):a||(a=s&~t,a!==0&&(u=Wt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Pe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ze(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Te(){var t=At;return At<<=1,(At&62914560)===0&&(At=4194304),t}function bn(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function _n(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ri(t,n,a,s,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,z=t.expirationTimes,K=t.hiddenUpdates;for(a=g&~a;0<a;){var ut=31-Kt(a),dt=1<<ut;E[ut]=0,z[ut]=-1;var J=K[ut];if(J!==null)for(K[ut]=null,ut=0;ut<J.length;ut++){var it=J[ut];it!==null&&(it.lane&=-536870913)}a&=~dt}s!==0&&vr(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function vr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Kt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Us(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Kt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Ls(t,n){var a=n&-n;return a=(a&42)!==0?1:ea(a),(a&(t.suspendedLanes|n))!==0?0:a}function ea(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Sr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ha(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:cg(t.type))}function Ns(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var li=Math.random().toString(36).slice(2),an="__reactFiber$"+li,vn="__reactProps$"+li,na="__reactContainer$"+li,A="__reactEvents$"+li,X="__reactListeners$"+li,$="__reactHandles$"+li,et="__reactResources$"+li,Y="__reactMarker$"+li;function bt(t){delete t[an],delete t[vn],delete t[A],delete t[X],delete t[$]}function Dt(t){var n=t[an];if(n)return n;for(var a=t.parentNode;a;){if(n=a[na]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=jm(t);t!==null;){if(a=t[an])return a;t=jm(t)}return n}t=a,a=t.parentNode}return null}function Nt(t){if(t=t[an]||t[na]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function zt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Xt(t){var n=t[et];return n||(n=t[et]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ot(t){t[Y]=!0}var qt=new Set,_e={};function Re(t,n){Ce(t,n),Ce(t+"Capture",n)}function Ce(t,n){for(_e[t]=n,t=0;t<n.length;t++)qt.add(n[t])}var En=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xe={},Ht={};function fn(t){return He.call(Ht,t)?!0:He.call(xe,t)?!1:En.test(t)?Ht[t]=!0:(xe[t]=!0,!1)}function ve(t,n,a){if(fn(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Rn(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Cn(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Ke(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xr(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Zn(t){if(!t._valueTracker){var n=xr(t)?"checked":"value";t._valueTracker=Qe(t,n,""+t[n])}}function Mr(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=xr(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function hn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Os=/[\n"\\]/g;function wn(t){return t.replace(Os,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yr(t,n,a,s,u,f,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ke(n)):t.value!==""+Ke(n)&&(t.value=""+Ke(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?Cu(t,g,Ke(n)):a!=null?Cu(t,g,Ke(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Ke(E):t.removeAttribute("name")}function Oh(t,n,a,s,u,f,g,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Zn(t);return}a=a!=null?""+Ke(a):"",n=n!=null?""+Ke(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Zn(t)}function Cu(t,n,a){n==="number"&&hn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Er(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Ke(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ph(t,n,a){if(n!=null&&(n=""+Ke(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ke(a):""}function zh(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ht(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Ke(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Zn(t)}function Tr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Dv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Dv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ih(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Bh(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&Bh(t,f,n[f])}function wu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Lv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bo(t){return Lv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ci(){}var Du=null;function Uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ar=null,br=null;function Fh(t){var n=Nt(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;t:switch(t=n.stateNode,n.type){case"input":if(yr(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+wn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[vn]||null;if(!u)throw Error(r(90));yr(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Mr(s)}break t;case"textarea":Ph(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Er(t,!!a.multiple,n,!1)}}}var Lu=!1;function Hh(t,n,a){if(Lu)return t(n,a);Lu=!0;try{var s=t(n);return s}finally{if(Lu=!1,(Ar!==null||br!==null)&&(Tl(),Ar&&(n=Ar,t=br,br=Ar=null,Fh(n),t)))for(n=0;n<t.length;n++)Fh(t[n])}}function Ps(t,n){var a=t.stateNode;if(a===null)return null;var s=a[vn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=!1;if(wi)try{var zs={};Object.defineProperty(zs,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",zs,zs),window.removeEventListener("test",zs,zs)}catch{Nu=!1}var ia=null,Ou=null,Io=null;function Gh(){if(Io)return Io;var t,n=Ou,a=n.length,s,u="value"in ia?ia.value:ia.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===u[f-s];s++);return Io=u.slice(t,1<s?1-s:void 0)}function Fo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ho(){return!0}function Vh(){return!1}function Dn(t){function n(a,s,u,f,g){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ho:Vh,this.isPropagationStopped=Vh,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ho)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ho)},persist:function(){},isPersistent:Ho}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=Dn(Ga),Bs=S({},Ga,{view:0,detail:0}),Nv=Dn(Bs),Pu,zu,Is,Vo=S({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Iu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(Pu=t.screenX-Is.screenX,zu=t.screenY-Is.screenY):zu=Pu=0,Is=t),Pu)},movementY:function(t){return"movementY"in t?t.movementY:zu}}),Xh=Dn(Vo),Ov=S({},Vo,{dataTransfer:0}),Pv=Dn(Ov),zv=S({},Bs,{relatedTarget:0}),Bu=Dn(zv),Bv=S({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=Dn(Bv),Fv=S({},Ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hv=Dn(Fv),Gv=S({},Ga,{data:0}),kh=Dn(Gv),Vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=kv[t])?!!n[t]:!1}function Iu(){return Wv}var qv=S({},Bs,{key:function(t){if(t.key){var n=Vv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Iu,charCode:function(t){return t.type==="keypress"?Fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Yv=Dn(qv),jv=S({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wh=Dn(jv),Zv=S({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Iu}),Kv=Dn(Zv),Qv=S({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jv=Dn(Qv),$v=S({},Vo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),t0=Dn($v),e0=S({},Ga,{newState:0,oldState:0}),n0=Dn(e0),i0=[9,13,27,32],Fu=wi&&"CompositionEvent"in window,Fs=null;wi&&"documentMode"in document&&(Fs=document.documentMode);var a0=wi&&"TextEvent"in window&&!Fs,qh=wi&&(!Fu||Fs&&8<Fs&&11>=Fs),Yh=" ",jh=!1;function Zh(t,n){switch(t){case"keyup":return i0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function r0(t,n){switch(t){case"compositionend":return Kh(n);case"keypress":return n.which!==32?null:(jh=!0,Yh);case"textInput":return t=n.data,t===Yh&&jh?null:t;default:return null}}function s0(t,n){if(Rr)return t==="compositionend"||!Fu&&Zh(t,n)?(t=Gh(),Io=Ou=ia=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qh&&n.locale!=="ko"?null:n.data;default:return null}}var o0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!o0[t.type]:n==="textarea"}function Jh(t,n,a,s){Ar?br?br.push(s):br=[s]:Ar=s,n=Ul(n,"onChange"),0<n.length&&(a=new Go("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Hs=null,Gs=null;function l0(t){Om(t,0)}function Xo(t){var n=zt(t);if(Mr(n))return t}function $h(t,n){if(t==="change")return n}var td=!1;if(wi){var Hu;if(wi){var Gu="oninput"in document;if(!Gu){var ed=document.createElement("div");ed.setAttribute("oninput","return;"),Gu=typeof ed.oninput=="function"}Hu=Gu}else Hu=!1;td=Hu&&(!document.documentMode||9<document.documentMode)}function nd(){Hs&&(Hs.detachEvent("onpropertychange",id),Gs=Hs=null)}function id(t){if(t.propertyName==="value"&&Xo(Gs)){var n=[];Jh(n,Gs,t,Uu(t)),Hh(l0,n)}}function u0(t,n,a){t==="focusin"?(nd(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",id)):t==="focusout"&&nd()}function c0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xo(Gs)}function f0(t,n){if(t==="click")return Xo(n)}function h0(t,n){if(t==="input"||t==="change")return Xo(n)}function d0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Hn=typeof Object.is=="function"?Object.is:d0;function Vs(t,n){if(Hn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!He.call(n,u)||!Hn(t[u],n[u]))return!1}return!0}function ad(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rd(t,n){var a=ad(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ad(a)}}function sd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?sd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function od(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=hn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=hn(t.document)}return n}function Vu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var p0=wi&&"documentMode"in document&&11>=document.documentMode,Cr=null,Xu=null,Xs=null,ku=!1;function ld(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ku||Cr==null||Cr!==hn(s)||(s=Cr,"selectionStart"in s&&Vu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Xs&&Vs(Xs,s)||(Xs=s,s=Ul(Xu,"onSelect"),0<s.length&&(n=new Go("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Cr)))}function Va(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var wr={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},Wu={},ud={};wi&&(ud=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);function Xa(t){if(Wu[t])return Wu[t];if(!wr[t])return t;var n=wr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in ud)return Wu[t]=n[a];return t}var cd=Xa("animationend"),fd=Xa("animationiteration"),hd=Xa("animationstart"),m0=Xa("transitionrun"),g0=Xa("transitionstart"),_0=Xa("transitioncancel"),dd=Xa("transitionend"),pd=new Map,qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qu.push("scrollEnd");function ui(t,n){pd.set(t,n),Re(n,[t])}var ko=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Kn=[],Dr=0,Yu=0;function Wo(){for(var t=Dr,n=Yu=Dr=0;n<t;){var a=Kn[n];Kn[n++]=null;var s=Kn[n];Kn[n++]=null;var u=Kn[n];Kn[n++]=null;var f=Kn[n];if(Kn[n++]=null,s!==null&&u!==null){var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}f!==0&&md(a,u,f)}}function qo(t,n,a,s){Kn[Dr++]=t,Kn[Dr++]=n,Kn[Dr++]=a,Kn[Dr++]=s,Yu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function ju(t,n,a,s){return qo(t,n,a,s),Yo(t)}function ka(t,n){return qo(t,null,null,n),Yo(t)}function md(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Kt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Yo(t){if(50<fo)throw fo=0,af=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ur={};function v0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,n,a,s){return new v0(t,n,a,s)}function Zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Di(t,n){var a=t.alternate;return a===null?(a=Gn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function gd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function jo(t,n,a,s,u,f){var g=0;if(s=t,typeof t=="function")Zu(t)&&(g=1);else if(typeof t=="string")g=ES(t,a,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=Gn(31,a,n,u),t.elementType=D,t.lanes=f,t;case C:return Wa(a.children,u,f,n);case M:g=8,u|=24;break;case v:return t=Gn(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case nt:return t=Gn(13,a,n,u),t.elementType=nt,t.lanes=f,t;case F:return t=Gn(19,a,n,u),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:g=10;break t;case B:g=9;break t;case P:g=11;break t;case O:g=14;break t;case Q:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Gn(g,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function Wa(t,n,a,s){return t=Gn(7,t,s,n),t.lanes=a,t}function Ku(t,n,a){return t=Gn(6,t,null,n),t.lanes=a,t}function _d(t){var n=Gn(18,null,null,0);return n.stateNode=t,n}function Qu(t,n,a){return n=Gn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var vd=new WeakMap;function Qn(t,n){if(typeof t=="object"&&t!==null){var a=vd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:$t(n)},vd.set(t,n),n)}return{value:t,source:n,stack:$t(n)}}var Lr=[],Nr=0,Zo=null,ks=0,Jn=[],$n=0,aa=null,gi=1,_i="";function Ui(t,n){Lr[Nr++]=ks,Lr[Nr++]=Zo,Zo=t,ks=n}function Sd(t,n,a){Jn[$n++]=gi,Jn[$n++]=_i,Jn[$n++]=aa,aa=t;var s=gi;t=_i;var u=32-Kt(s)-1;s&=~(1<<u),a+=1;var f=32-Kt(n)+u;if(30<f){var g=u-u%5;f=(s&(1<<g)-1).toString(32),s>>=g,u-=g,gi=1<<32-Kt(n)+u|a<<u|s,_i=f+t}else gi=1<<f|a<<u|s,_i=t}function Ju(t){t.return!==null&&(Ui(t,1),Sd(t,1,0))}function $u(t){for(;t===Zo;)Zo=Lr[--Nr],Lr[Nr]=null,ks=Lr[--Nr],Lr[Nr]=null;for(;t===aa;)aa=Jn[--$n],Jn[$n]=null,_i=Jn[--$n],Jn[$n]=null,gi=Jn[--$n],Jn[$n]=null}function xd(t,n){Jn[$n++]=gi,Jn[$n++]=_i,Jn[$n++]=aa,gi=n.id,_i=n.overflow,aa=t}var dn=null,Be=null,ge=!1,ra=null,ti=!1,tc=Error(r(519));function sa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ws(Qn(n,t)),tc}function Md(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[an]=t,n[vn]=s,a){case"dialog":fe("cancel",n),fe("close",n);break;case"iframe":case"object":case"embed":fe("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)fe(po[a],n);break;case"source":fe("error",n);break;case"img":case"image":case"link":fe("error",n),fe("load",n);break;case"details":fe("toggle",n);break;case"input":fe("invalid",n),Oh(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":fe("invalid",n);break;case"textarea":fe("invalid",n),zh(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Im(n.textContent,a)?(s.popover!=null&&(fe("beforetoggle",n),fe("toggle",n)),s.onScroll!=null&&fe("scroll",n),s.onScrollEnd!=null&&fe("scrollend",n),s.onClick!=null&&(n.onclick=Ci),n=!0):n=!1,n||sa(t,!0)}function yd(t){for(dn=t.return;dn;)switch(dn.tag){case 5:case 31:case 13:ti=!1;return;case 27:case 3:ti=!0;return;default:dn=dn.return}}function Or(t){if(t!==dn)return!1;if(!ge)return yd(t),ge=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Sf(t.type,t.memoizedProps)),a=!a),a&&Be&&sa(t),yd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Be=Ym(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Be=Ym(t)}else n===27?(n=Be,xa(t.type)?(t=Tf,Tf=null,Be=t):Be=n):Be=dn?ni(t.stateNode.nextSibling):null;return!0}function qa(){Be=dn=null,ge=!1}function ec(){var t=ra;return t!==null&&(On===null?On=t:On.push.apply(On,t),ra=null),t}function Ws(t){ra===null?ra=[t]:ra.push(t)}var nc=U(null),Ya=null,Li=null;function oa(t,n,a){_t(nc,n._currentValue),n._currentValue=a}function Ni(t){t._currentValue=nc.current,tt(nc)}function ic(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function ac(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=u;for(var z=0;z<n.length;z++)if(E.context===n[z]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),ic(f.return,a,t),s||(g=null);break t}f=E.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),ic(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Pr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var E=u.type;Hn(u.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(u===vt.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(So):t=[So])}u=u.return}t!==null&&ac(n,t,a,s),n.flags|=262144}function Ko(t){for(t=t.firstContext;t!==null;){if(!Hn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ja(t){Ya=t,Li=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function pn(t){return Ed(Ya,t)}function Qo(t,n){return Ya===null&&ja(t),Ed(t,n)}function Ed(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Li===null){if(t===null)throw Error(r(308));Li=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Li=Li.next=n;return a}var S0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},x0=o.unstable_scheduleCallback,M0=o.unstable_NormalPriority,Je={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rc(){return{controller:new S0,data:new Map,refCount:0}}function qs(t){t.refCount--,t.refCount===0&&x0(M0,function(){t.controller.abort()})}var Ys=null,sc=0,zr=0,Br=null;function y0(t,n){if(Ys===null){var a=Ys=[];sc=0,zr=cf(),Br={status:"pending",value:void 0,then:function(s){a.push(s)}}}return sc++,n.then(Td,Td),n}function Td(){if(--sc===0&&Ys!==null){Br!==null&&(Br.status="fulfilled");var t=Ys;Ys=null,zr=0,Br=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function E0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Ad=L.S;L.S=function(t,n){lm=gt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&y0(t,n),Ad!==null&&Ad(t,n)};var Za=U(null);function oc(){var t=Za.current;return t!==null?t:ze.pooledCache}function Jo(t,n){n===null?_t(Za,Za.current):_t(Za,n.pool)}function bd(){var t=oc();return t===null?null:{parent:Je._currentValue,pool:t}}var Ir=Error(r(460)),lc=Error(r(474)),$o=Error(r(542)),tl={then:function(){}};function Rd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Cd(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ci,Ci),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Dd(t),t;default:if(typeof n.status=="string")n.then(Ci,Ci);else{if(t=ze,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Dd(t),t}throw Qa=n,Ir}}function Ka(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Qa=a,Ir):a}}var Qa=null;function wd(){if(Qa===null)throw Error(r(459));var t=Qa;return Qa=null,t}function Dd(t){if(t===Ir||t===$o)throw Error(r(483))}var Fr=null,js=0;function el(t){var n=js;return js+=1,Fr===null&&(Fr=[]),Cd(Fr,t,n)}function Zs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function nl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Ud(t){function n(k,I){if(t){var Z=k.deletions;Z===null?(k.deletions=[I],k.flags|=16):Z.push(I)}}function a(k,I){if(!t)return null;for(;I!==null;)n(k,I),I=I.sibling;return null}function s(k){for(var I=new Map;k!==null;)k.key!==null?I.set(k.key,k):I.set(k.index,k),k=k.sibling;return I}function u(k,I){return k=Di(k,I),k.index=0,k.sibling=null,k}function f(k,I,Z){return k.index=Z,t?(Z=k.alternate,Z!==null?(Z=Z.index,Z<I?(k.flags|=67108866,I):Z):(k.flags|=67108866,I)):(k.flags|=1048576,I)}function g(k){return t&&k.alternate===null&&(k.flags|=67108866),k}function E(k,I,Z,ft){return I===null||I.tag!==6?(I=Ku(Z,k.mode,ft),I.return=k,I):(I=u(I,Z),I.return=k,I)}function z(k,I,Z,ft){var Gt=Z.type;return Gt===C?ut(k,I,Z.props.children,ft,Z.key):I!==null&&(I.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===Q&&Ka(Gt)===I.type)?(I=u(I,Z.props),Zs(I,Z),I.return=k,I):(I=jo(Z.type,Z.key,Z.props,null,k.mode,ft),Zs(I,Z),I.return=k,I)}function K(k,I,Z,ft){return I===null||I.tag!==4||I.stateNode.containerInfo!==Z.containerInfo||I.stateNode.implementation!==Z.implementation?(I=Qu(Z,k.mode,ft),I.return=k,I):(I=u(I,Z.children||[]),I.return=k,I)}function ut(k,I,Z,ft,Gt){return I===null||I.tag!==7?(I=Wa(Z,k.mode,ft,Gt),I.return=k,I):(I=u(I,Z),I.return=k,I)}function dt(k,I,Z){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return I=Ku(""+I,k.mode,Z),I.return=k,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case y:return Z=jo(I.type,I.key,I.props,null,k.mode,Z),Zs(Z,I),Z.return=k,Z;case b:return I=Qu(I,k.mode,Z),I.return=k,I;case Q:return I=Ka(I),dt(k,I,Z)}if(ht(I)||lt(I))return I=Wa(I,k.mode,Z,null),I.return=k,I;if(typeof I.then=="function")return dt(k,el(I),Z);if(I.$$typeof===w)return dt(k,Qo(k,I),Z);nl(k,I)}return null}function J(k,I,Z,ft){var Gt=I!==null?I.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Gt!==null?null:E(k,I,""+Z,ft);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case y:return Z.key===Gt?z(k,I,Z,ft):null;case b:return Z.key===Gt?K(k,I,Z,ft):null;case Q:return Z=Ka(Z),J(k,I,Z,ft)}if(ht(Z)||lt(Z))return Gt!==null?null:ut(k,I,Z,ft,null);if(typeof Z.then=="function")return J(k,I,el(Z),ft);if(Z.$$typeof===w)return J(k,I,Qo(k,Z),ft);nl(k,Z)}return null}function it(k,I,Z,ft,Gt){if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return k=k.get(Z)||null,E(I,k,""+ft,Gt);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case y:return k=k.get(ft.key===null?Z:ft.key)||null,z(I,k,ft,Gt);case b:return k=k.get(ft.key===null?Z:ft.key)||null,K(I,k,ft,Gt);case Q:return ft=Ka(ft),it(k,I,Z,ft,Gt)}if(ht(ft)||lt(ft))return k=k.get(Z)||null,ut(I,k,ft,Gt,null);if(typeof ft.then=="function")return it(k,I,Z,el(ft),Gt);if(ft.$$typeof===w)return it(k,I,Z,Qo(I,ft),Gt);nl(I,ft)}return null}function Pt(k,I,Z,ft){for(var Gt=null,Me=null,It=I,ne=I=0,me=null;It!==null&&ne<Z.length;ne++){It.index>ne?(me=It,It=null):me=It.sibling;var ye=J(k,It,Z[ne],ft);if(ye===null){It===null&&(It=me);break}t&&It&&ye.alternate===null&&n(k,It),I=f(ye,I,ne),Me===null?Gt=ye:Me.sibling=ye,Me=ye,It=me}if(ne===Z.length)return a(k,It),ge&&Ui(k,ne),Gt;if(It===null){for(;ne<Z.length;ne++)It=dt(k,Z[ne],ft),It!==null&&(I=f(It,I,ne),Me===null?Gt=It:Me.sibling=It,Me=It);return ge&&Ui(k,ne),Gt}for(It=s(It);ne<Z.length;ne++)me=it(It,k,ne,Z[ne],ft),me!==null&&(t&&me.alternate!==null&&It.delete(me.key===null?ne:me.key),I=f(me,I,ne),Me===null?Gt=me:Me.sibling=me,Me=me);return t&&It.forEach(function(Aa){return n(k,Aa)}),ge&&Ui(k,ne),Gt}function Zt(k,I,Z,ft){if(Z==null)throw Error(r(151));for(var Gt=null,Me=null,It=I,ne=I=0,me=null,ye=Z.next();It!==null&&!ye.done;ne++,ye=Z.next()){It.index>ne?(me=It,It=null):me=It.sibling;var Aa=J(k,It,ye.value,ft);if(Aa===null){It===null&&(It=me);break}t&&It&&Aa.alternate===null&&n(k,It),I=f(Aa,I,ne),Me===null?Gt=Aa:Me.sibling=Aa,Me=Aa,It=me}if(ye.done)return a(k,It),ge&&Ui(k,ne),Gt;if(It===null){for(;!ye.done;ne++,ye=Z.next())ye=dt(k,ye.value,ft),ye!==null&&(I=f(ye,I,ne),Me===null?Gt=ye:Me.sibling=ye,Me=ye);return ge&&Ui(k,ne),Gt}for(It=s(It);!ye.done;ne++,ye=Z.next())ye=it(It,k,ne,ye.value,ft),ye!==null&&(t&&ye.alternate!==null&&It.delete(ye.key===null?ne:ye.key),I=f(ye,I,ne),Me===null?Gt=ye:Me.sibling=ye,Me=ye);return t&&It.forEach(function(OS){return n(k,OS)}),ge&&Ui(k,ne),Gt}function Oe(k,I,Z,ft){if(typeof Z=="object"&&Z!==null&&Z.type===C&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case y:t:{for(var Gt=Z.key;I!==null;){if(I.key===Gt){if(Gt=Z.type,Gt===C){if(I.tag===7){a(k,I.sibling),ft=u(I,Z.props.children),ft.return=k,k=ft;break t}}else if(I.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===Q&&Ka(Gt)===I.type){a(k,I.sibling),ft=u(I,Z.props),Zs(ft,Z),ft.return=k,k=ft;break t}a(k,I);break}else n(k,I);I=I.sibling}Z.type===C?(ft=Wa(Z.props.children,k.mode,ft,Z.key),ft.return=k,k=ft):(ft=jo(Z.type,Z.key,Z.props,null,k.mode,ft),Zs(ft,Z),ft.return=k,k=ft)}return g(k);case b:t:{for(Gt=Z.key;I!==null;){if(I.key===Gt)if(I.tag===4&&I.stateNode.containerInfo===Z.containerInfo&&I.stateNode.implementation===Z.implementation){a(k,I.sibling),ft=u(I,Z.children||[]),ft.return=k,k=ft;break t}else{a(k,I);break}else n(k,I);I=I.sibling}ft=Qu(Z,k.mode,ft),ft.return=k,k=ft}return g(k);case Q:return Z=Ka(Z),Oe(k,I,Z,ft)}if(ht(Z))return Pt(k,I,Z,ft);if(lt(Z)){if(Gt=lt(Z),typeof Gt!="function")throw Error(r(150));return Z=Gt.call(Z),Zt(k,I,Z,ft)}if(typeof Z.then=="function")return Oe(k,I,el(Z),ft);if(Z.$$typeof===w)return Oe(k,I,Qo(k,Z),ft);nl(k,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,I!==null&&I.tag===6?(a(k,I.sibling),ft=u(I,Z),ft.return=k,k=ft):(a(k,I),ft=Ku(Z,k.mode,ft),ft.return=k,k=ft),g(k)):a(k,I)}return function(k,I,Z,ft){try{js=0;var Gt=Oe(k,I,Z,ft);return Fr=null,Gt}catch(It){if(It===Ir||It===$o)throw It;var Me=Gn(29,It,null,k.mode);return Me.lanes=ft,Me.return=k,Me}finally{}}}var Ja=Ud(!0),Ld=Ud(!1),la=!1;function uc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ca(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ae&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Yo(t),md(t,null,a),n}return qo(t,s,n,a),Yo(t)}function Ks(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Us(t,a)}}function fc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var hc=!1;function Qs(){if(hc){var t=Br;if(t!==null)throw t}}function Js(t,n,a,s){hc=!1;var u=t.updateQueue;la=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var z=E,K=z.next;z.next=null,g===null?f=K:g.next=K,g=z;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==g&&(E===null?ut.firstBaseUpdate=K:E.next=K,ut.lastBaseUpdate=z))}if(f!==null){var dt=u.baseState;g=0,ut=K=z=null,E=f;do{var J=E.lane&-536870913,it=J!==E.lane;if(it?(pe&J)===J:(s&J)===J){J!==0&&J===zr&&(hc=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Pt=t,Zt=E;J=n;var Oe=a;switch(Zt.tag){case 1:if(Pt=Zt.payload,typeof Pt=="function"){dt=Pt.call(Oe,dt,J);break t}dt=Pt;break t;case 3:Pt.flags=Pt.flags&-65537|128;case 0:if(Pt=Zt.payload,J=typeof Pt=="function"?Pt.call(Oe,dt,J):Pt,J==null)break t;dt=S({},dt,J);break t;case 2:la=!0}}J=E.callback,J!==null&&(t.flags|=64,it&&(t.flags|=8192),it=u.callbacks,it===null?u.callbacks=[J]:it.push(J))}else it={lane:J,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?(K=ut=it,z=dt):ut=ut.next=it,g|=J;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;it=E,E=it.next,it.next=null,u.lastBaseUpdate=it,u.shared.pending=null}}while(!0);ut===null&&(z=dt),u.baseState=z,u.firstBaseUpdate=K,u.lastBaseUpdate=ut,f===null&&(u.shared.lanes=0),ma|=g,t.lanes=g,t.memoizedState=dt}}function Nd(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Od(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Nd(a[t],n)}var Hr=U(null),il=U(0);function Pd(t,n){t=Vi,_t(il,t),_t(Hr,n),Vi=t|n.baseLanes}function dc(){_t(il,Vi),_t(Hr,Hr.current)}function pc(){Vi=il.current,tt(Hr),tt(il)}var Vn=U(null),ei=null;function fa(t){var n=t.alternate;_t(qe,qe.current&1),_t(Vn,t),ei===null&&(n===null||Hr.current!==null||n.memoizedState!==null)&&(ei=t)}function mc(t){_t(qe,qe.current),_t(Vn,t),ei===null&&(ei=t)}function zd(t){t.tag===22?(_t(qe,qe.current),_t(Vn,t),ei===null&&(ei=t)):ha()}function ha(){_t(qe,qe.current),_t(Vn,Vn.current)}function Xn(t){tt(Vn),ei===t&&(ei=null),tt(qe)}var qe=U(0);function al(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||yf(a)||Ef(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Oi=0,te=null,Le=null,$e=null,rl=!1,Gr=!1,$a=!1,sl=0,$s=0,Vr=null,T0=0;function Xe(){throw Error(r(321))}function gc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Hn(t[a],n[a]))return!1;return!0}function _c(t,n,a,s,u,f){return Oi=f,te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?Sp:Lc,$a=!1,f=a(s,u),$a=!1,Gr&&(f=Id(n,a,s,u)),Bd(t),f}function Bd(t){L.H=no;var n=Le!==null&&Le.next!==null;if(Oi=0,$e=Le=te=null,rl=!1,$s=0,Vr=null,n)throw Error(r(300));t===null||tn||(t=t.dependencies,t!==null&&Ko(t)&&(tn=!0))}function Id(t,n,a,s){te=t;var u=0;do{if(Gr&&(Vr=null),$s=0,Gr=!1,25<=u)throw Error(r(301));if(u+=1,$e=Le=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=xp,f=n(a,s)}while(Gr);return f}function A0(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?to(n):n,t=t.useState()[0],(Le!==null?Le.memoizedState:null)!==t&&(te.flags|=1024),n}function vc(){var t=sl!==0;return sl=0,t}function Sc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function xc(t){if(rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}rl=!1}Oi=0,$e=Le=te=null,Gr=!1,$s=sl=0,Vr=null}function Tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?te.memoizedState=$e=t:$e=$e.next=t,$e}function Ye(){if(Le===null){var t=te.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var n=$e===null?te.memoizedState:$e.next;if(n!==null)$e=n,Le=t;else{if(t===null)throw te.alternate===null?Error(r(467)):Error(r(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},$e===null?te.memoizedState=$e=t:$e=$e.next=t}return $e}function ol(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(t){var n=$s;return $s+=1,Vr===null&&(Vr=[]),t=Cd(Vr,t,n),n=te,($e===null?n.memoizedState:$e.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?Sp:Lc),t}function ll(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return to(t);if(t.$$typeof===w)return pn(t)}throw Error(r(438,String(t)))}function Mc(t){var n=null,a=te.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=te.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ol(),te.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=R;return n.index++,a}function Pi(t,n){return typeof n=="function"?n(t):n}function ul(t){var n=Ye();return yc(n,Le,t)}function yc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var E=g=null,z=null,K=n,ut=!1;do{var dt=K.lane&-536870913;if(dt!==K.lane?(pe&dt)===dt:(Oi&dt)===dt){var J=K.revertLane;if(J===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),dt===zr&&(ut=!0);else if((Oi&J)===J){K=K.next,J===zr&&(ut=!0);continue}else dt={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},z===null?(E=z=dt,g=f):z=z.next=dt,te.lanes|=J,ma|=J;dt=K.action,$a&&a(f,dt),f=K.hasEagerState?K.eagerState:a(f,dt)}else J={lane:dt,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},z===null?(E=z=J,g=f):z=z.next=J,te.lanes|=dt,ma|=dt;K=K.next}while(K!==null&&K!==n);if(z===null?g=f:z.next=E,!Hn(f,t.memoizedState)&&(tn=!0,ut&&(a=Br,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=z,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Ec(t){var n=Ye(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);Hn(f,n.memoizedState)||(tn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Fd(t,n,a){var s=te,u=Ye(),f=ge;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Hn((Le||u).memoizedState,a);if(g&&(u.memoizedState=a,tn=!0),u=u.queue,bc(Vd.bind(null,s,u,t),[t]),u.getSnapshot!==n||g||$e!==null&&$e.memoizedState.tag&1){if(s.flags|=2048,Xr(9,{destroy:void 0},Gd.bind(null,s,u,a,n),null),ze===null)throw Error(r(349));f||(Oi&127)!==0||Hd(s,n,a)}return a}function Hd(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=te.updateQueue,n===null?(n=ol(),te.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Gd(t,n,a,s){n.value=a,n.getSnapshot=s,Xd(n)&&kd(t)}function Vd(t,n,a){return a(function(){Xd(n)&&kd(t)})}function Xd(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Hn(t,a)}catch{return!0}}function kd(t){var n=ka(t,2);n!==null&&Pn(n,t,2)}function Tc(t){var n=Tn();if(typeof t=="function"){var a=t;if(t=a(),$a){Qt(!0);try{a()}finally{Qt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:t},n}function Wd(t,n,a,s){return t.baseState=a,yc(t,Le,typeof s=="function"?s:Pi)}function b0(t,n,a,s,u){if(hl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};L.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,qd(n,f)):(f.next=a.next,n.pending=a.next=f)}}function qd(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=L.T,g={};L.T=g;try{var E=a(u,s),z=L.S;z!==null&&z(g,E),Yd(t,n,E)}catch(K){Ac(t,n,K)}finally{f!==null&&g.types!==null&&(f.types=g.types),L.T=f}}else try{f=a(u,s),Yd(t,n,f)}catch(K){Ac(t,n,K)}}function Yd(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){jd(t,n,s)},function(s){return Ac(t,n,s)}):jd(t,n,a)}function jd(t,n,a){n.status="fulfilled",n.value=a,Zd(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,qd(t,a)))}function Ac(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Zd(n),n=n.next;while(n!==s)}t.action=null}function Zd(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Kd(t,n){return n}function Qd(t,n){if(ge){var a=ze.formState;if(a!==null){t:{var s=te;if(ge){if(Be){e:{for(var u=Be,f=ti;u.nodeType!==8;){if(!f){u=null;break e}if(u=ni(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Be=ni(u.nextSibling),s=u.data==="F!";break t}}sa(s)}s=!1}s&&(n=a[0])}}return a=Tn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kd,lastRenderedState:n},a.queue=s,a=gp.bind(null,te,s),s.dispatch=a,s=Tc(!1),f=Uc.bind(null,te,!1,s.queue),s=Tn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=b0.bind(null,te,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Jd(t){var n=Ye();return $d(n,Le,t)}function $d(t,n,a){if(n=yc(t,n,Kd)[0],t=ul(Pi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=to(n)}catch(g){throw g===Ir?$o:g}else s=n;n=Ye();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(te.flags|=2048,Xr(9,{destroy:void 0},R0.bind(null,u,a),null)),[s,f,t]}function R0(t,n){t.action=n}function tp(t){var n=Ye(),a=Le;if(a!==null)return $d(n,a,t);Ye(),n=n.memoizedState,a=Ye();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Xr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=te.updateQueue,n===null&&(n=ol(),te.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function ep(){return Ye().memoizedState}function cl(t,n,a,s){var u=Tn();te.flags|=t,u.memoizedState=Xr(1|n,{destroy:void 0},a,s===void 0?null:s)}function fl(t,n,a,s){var u=Ye();s=s===void 0?null:s;var f=u.memoizedState.inst;Le!==null&&s!==null&&gc(s,Le.memoizedState.deps)?u.memoizedState=Xr(n,f,a,s):(te.flags|=t,u.memoizedState=Xr(1|n,f,a,s))}function np(t,n){cl(8390656,8,t,n)}function bc(t,n){fl(2048,8,t,n)}function C0(t){te.flags|=4;var n=te.updateQueue;if(n===null)n=ol(),te.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function ip(t){var n=Ye().memoizedState;return C0({ref:n,nextImpl:t}),function(){if((Ae&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function ap(t,n){return fl(4,2,t,n)}function rp(t,n){return fl(4,4,t,n)}function sp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function op(t,n,a){a=a!=null?a.concat([t]):null,fl(4,4,sp.bind(null,n,t),a)}function Rc(){}function lp(t,n){var a=Ye();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&gc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function up(t,n){var a=Ye();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&gc(n,s[1]))return s[0];if(s=t(),$a){Qt(!0);try{t()}finally{Qt(!1)}}return a.memoizedState=[s,n],s}function Cc(t,n,a){return a===void 0||(Oi&1073741824)!==0&&(pe&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=cm(),te.lanes|=t,ma|=t,a)}function cp(t,n,a,s){return Hn(a,n)?a:Hr.current!==null?(t=Cc(t,a,s),Hn(t,n)||(tn=!0),t):(Oi&42)===0||(Oi&1073741824)!==0&&(pe&261930)===0?(tn=!0,t.memoizedState=a):(t=cm(),te.lanes|=t,ma|=t,n)}function fp(t,n,a,s,u){var f=q.p;q.p=f!==0&&8>f?f:8;var g=L.T,E={};L.T=E,Uc(t,!1,n,a);try{var z=u(),K=L.S;if(K!==null&&K(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ut=E0(z,s);eo(t,n,ut,qn(t))}else eo(t,n,s,qn(t))}catch(dt){eo(t,n,{then:function(){},status:"rejected",reason:dt},qn())}finally{q.p=f,g!==null&&E.types!==null&&(g.types=E.types),L.T=g}}function w0(){}function wc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=hp(t).queue;fp(t,u,n,j,a===null?w0:function(){return dp(t),a(s)})}function hp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function dp(t){var n=hp(t);n.next===null&&(n=t.alternate.memoizedState),eo(t,n.next.queue,{},qn())}function Dc(){return pn(So)}function pp(){return Ye().memoizedState}function mp(){return Ye().memoizedState}function D0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=qn();t=ua(a);var s=ca(n,t,a);s!==null&&(Pn(s,n,a),Ks(s,n,a)),n={cache:rc()},t.payload=n;return}n=n.return}}function U0(t,n,a){var s=qn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},hl(t)?_p(n,a):(a=ju(t,n,a,s),a!==null&&(Pn(a,t,s),vp(a,n,s)))}function gp(t,n,a){var s=qn();eo(t,n,a,s)}function eo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(hl(t))_p(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,E=f(g,a);if(u.hasEagerState=!0,u.eagerState=E,Hn(E,g))return qo(t,n,u,0),ze===null&&Wo(),!1}catch{}finally{}if(a=ju(t,n,u,s),a!==null)return Pn(a,t,s),vp(a,n,s),!0}return!1}function Uc(t,n,a,s){if(s={lane:2,revertLane:cf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},hl(t)){if(n)throw Error(r(479))}else n=ju(t,a,s,2),n!==null&&Pn(n,t,2)}function hl(t){var n=t.alternate;return t===te||n!==null&&n===te}function _p(t,n){Gr=rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function vp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Us(t,a)}}var no={readContext:pn,use:ll,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};no.useEffectEvent=Xe;var Sp={readContext:pn,use:ll,useCallback:function(t,n){return Tn().memoizedState=[t,n===void 0?null:n],t},useContext:pn,useEffect:np,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,cl(4194308,4,sp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return cl(4194308,4,t,n)},useInsertionEffect:function(t,n){cl(4,2,t,n)},useMemo:function(t,n){var a=Tn();n=n===void 0?null:n;var s=t();if($a){Qt(!0);try{t()}finally{Qt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Tn();if(a!==void 0){var u=a(n);if($a){Qt(!0);try{a(n)}finally{Qt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=U0.bind(null,te,t),[s.memoizedState,t]},useRef:function(t){var n=Tn();return t={current:t},n.memoizedState=t},useState:function(t){t=Tc(t);var n=t.queue,a=gp.bind(null,te,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Rc,useDeferredValue:function(t,n){var a=Tn();return Cc(a,t,n)},useTransition:function(){var t=Tc(!1);return t=fp.bind(null,te,t.queue,!0,!1),Tn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=te,u=Tn();if(ge){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ze===null)throw Error(r(349));(pe&127)!==0||Hd(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,np(Vd.bind(null,s,f,t),[t]),s.flags|=2048,Xr(9,{destroy:void 0},Gd.bind(null,s,f,a,n),null),a},useId:function(){var t=Tn(),n=ze.identifierPrefix;if(ge){var a=_i,s=gi;a=(s&~(1<<32-Kt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=sl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=T0++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Dc,useFormState:Qd,useActionState:Qd,useOptimistic:function(t){var n=Tn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Uc.bind(null,te,!0,a),a.dispatch=n,[t,n]},useMemoCache:Mc,useCacheRefresh:function(){return Tn().memoizedState=D0.bind(null,te)},useEffectEvent:function(t){var n=Tn(),a={impl:t};return n.memoizedState=a,function(){if((Ae&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Lc={readContext:pn,use:ll,useCallback:lp,useContext:pn,useEffect:bc,useImperativeHandle:op,useInsertionEffect:ap,useLayoutEffect:rp,useMemo:up,useReducer:ul,useRef:ep,useState:function(){return ul(Pi)},useDebugValue:Rc,useDeferredValue:function(t,n){var a=Ye();return cp(a,Le.memoizedState,t,n)},useTransition:function(){var t=ul(Pi)[0],n=Ye().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Fd,useId:pp,useHostTransitionStatus:Dc,useFormState:Jd,useActionState:Jd,useOptimistic:function(t,n){var a=Ye();return Wd(a,Le,t,n)},useMemoCache:Mc,useCacheRefresh:mp};Lc.useEffectEvent=ip;var xp={readContext:pn,use:ll,useCallback:lp,useContext:pn,useEffect:bc,useImperativeHandle:op,useInsertionEffect:ap,useLayoutEffect:rp,useMemo:up,useReducer:Ec,useRef:ep,useState:function(){return Ec(Pi)},useDebugValue:Rc,useDeferredValue:function(t,n){var a=Ye();return Le===null?Cc(a,t,n):cp(a,Le.memoizedState,t,n)},useTransition:function(){var t=Ec(Pi)[0],n=Ye().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:Fd,useId:pp,useHostTransitionStatus:Dc,useFormState:tp,useActionState:tp,useOptimistic:function(t,n){var a=Ye();return Le!==null?Wd(a,Le,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Mc,useCacheRefresh:mp};xp.useEffectEvent=ip;function Nc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Oc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=qn(),u=ua(s);u.payload=n,a!=null&&(u.callback=a),n=ca(t,u,s),n!==null&&(Pn(n,t,s),Ks(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=qn(),u=ua(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ca(t,u,s),n!==null&&(Pn(n,t,s),Ks(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=qn(),s=ua(a);s.tag=2,n!=null&&(s.callback=n),n=ca(t,s,a),n!==null&&(Pn(n,t,a),Ks(n,t,a))}};function Mp(t,n,a,s,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(u,f):!0}function yp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Oc.enqueueReplaceState(n,n.state,null)}function tr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Ep(t){ko(t)}function Tp(t){console.error(t)}function Ap(t){ko(t)}function dl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function bp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Pc(t,n,a){return a=ua(a),a.tag=3,a.payload={element:null},a.callback=function(){dl(t,n)},a}function Rp(t){return t=ua(t),t.tag=3,t}function Cp(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){bp(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){bp(n,a,s),typeof u!="function"&&(ga===null?ga=new Set([this]):ga.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function L0(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Pr(n,a,u,!0),a=Vn.current,a!==null){switch(a.tag){case 31:case 13:return ei===null?Al():a.alternate===null&&ke===0&&(ke=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===tl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),of(t,s,u)),!1;case 22:return a.flags|=65536,s===tl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),of(t,s,u)),!1}throw Error(r(435,a.tag))}return of(t,s,u),Al(),!1}if(ge)return n=Vn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==tc&&(t=Error(r(422),{cause:s}),Ws(Qn(t,a)))):(s!==tc&&(n=Error(r(423),{cause:s}),Ws(Qn(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Qn(s,a),u=Pc(t.stateNode,s,u),fc(t,u),ke!==4&&(ke=2)),!1;var f=Error(r(520),{cause:s});if(f=Qn(f,a),co===null?co=[f]:co.push(f),ke!==4&&(ke=2),n===null)return!0;s=Qn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Pc(a.stateNode,s,t),fc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ga===null||!ga.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Rp(u),Cp(u,t,a,s),fc(a,u),!1}a=a.return}while(a!==null);return!1}var zc=Error(r(461)),tn=!1;function mn(t,n,a,s){n.child=t===null?Ld(n,null,a,s):Ja(n,t.child,a,s)}function wp(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var E in s)E!=="ref"&&(g[E]=s[E])}else g=s;return ja(n),s=_c(t,n,a,g,f,u),E=vc(),t!==null&&!tn?(Sc(t,n,u),zi(t,n,u)):(ge&&E&&Ju(n),n.flags|=1,mn(t,n,s,u),n.child)}function Dp(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Zu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Up(t,n,f,s,u)):(t=jo(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!kc(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(g,s)&&t.ref===n.ref)return zi(t,n,u)}return n.flags|=1,t=Di(f,s),t.ref=n.ref,t.return=n,n.child=t}function Up(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Vs(f,s)&&t.ref===n.ref)if(tn=!1,n.pendingProps=s=f,kc(t,u))(t.flags&131072)!==0&&(tn=!0);else return n.lanes=t.lanes,zi(t,n,u)}return Bc(t,n,a,s,u)}function Lp(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return Np(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Jo(n,f!==null?f.cachePool:null),f!==null?Pd(n,f):dc(),zd(n);else return s=n.lanes=536870912,Np(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Jo(n,f.cachePool),Pd(n,f),ha(),n.memoizedState=null):(t!==null&&Jo(n,null),dc(),ha());return mn(t,n,u,a),n.child}function io(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Np(t,n,a,s,u){var f=oc();return f=f===null?null:{parent:Je._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Jo(n,null),dc(),zd(n),t!==null&&Pr(t,n,s,!0),n.childLanes=u,null}function pl(t,n){return n=gl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Op(t,n,a){return Ja(n,t.child,null,a),t=pl(n,n.pendingProps),t.flags|=2,Xn(n),n.memoizedState=null,t}function N0(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ge){if(s.mode==="hidden")return t=pl(n,s),n.lanes=536870912,io(null,t);if(mc(n),(t=Be)?(t=qm(t,ti),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:aa!==null?{id:gi,overflow:_i}:null,retryLane:536870912,hydrationErrors:null},a=_d(t),a.return=n,n.child=a,dn=n,Be=null)):t=null,t===null)throw sa(n);return n.lanes=536870912,null}return pl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(mc(n),u)if(n.flags&256)n.flags&=-257,n=Op(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(tn||Pr(t,n,a,!1),u=(a&t.childLanes)!==0,tn||u){if(s=ze,s!==null&&(g=Ls(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,ka(t,g),Pn(s,t,g),zc;Al(),n=Op(t,n,a)}else t=f.treeContext,Be=ni(g.nextSibling),dn=n,ge=!0,ra=null,ti=!1,t!==null&&xd(n,t),n=pl(n,s),n.flags|=4096;return n}return t=Di(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ml(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Bc(t,n,a,s,u){return ja(n),a=_c(t,n,a,s,void 0,u),s=vc(),t!==null&&!tn?(Sc(t,n,u),zi(t,n,u)):(ge&&s&&Ju(n),n.flags|=1,mn(t,n,a,u),n.child)}function Pp(t,n,a,s,u,f){return ja(n),n.updateQueue=null,a=Id(n,s,a,u),Bd(t),s=vc(),t!==null&&!tn?(Sc(t,n,f),zi(t,n,f)):(ge&&s&&Ju(n),n.flags|=1,mn(t,n,a,f),n.child)}function zp(t,n,a,s,u){if(ja(n),n.stateNode===null){var f=Ur,g=a.contextType;typeof g=="object"&&g!==null&&(f=pn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Oc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},uc(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?pn(g):Ur,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Nc(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Oc.enqueueReplaceState(f,f.state,null),Js(n,s,f,u),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,z=tr(a,E);f.props=z;var K=f.context,ut=a.contextType;g=Ur,typeof ut=="object"&&ut!==null&&(g=pn(ut));var dt=a.getDerivedStateFromProps;ut=typeof dt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||K!==g)&&yp(n,f,s,g),la=!1;var J=n.memoizedState;f.state=J,Js(n,s,f,u),Qs(),K=n.memoizedState,E||J!==K||la?(typeof dt=="function"&&(Nc(n,a,dt,s),K=n.memoizedState),(z=la||Mp(n,a,z,s,J,K,g))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=K),f.props=s,f.state=K,f.context=g,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,cc(t,n),g=n.memoizedProps,ut=tr(a,g),f.props=ut,dt=n.pendingProps,J=f.context,K=a.contextType,z=Ur,typeof K=="object"&&K!==null&&(z=pn(K)),E=a.getDerivedStateFromProps,(K=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==dt||J!==z)&&yp(n,f,s,z),la=!1,J=n.memoizedState,f.state=J,Js(n,s,f,u),Qs();var it=n.memoizedState;g!==dt||J!==it||la||t!==null&&t.dependencies!==null&&Ko(t.dependencies)?(typeof E=="function"&&(Nc(n,a,E,s),it=n.memoizedState),(ut=la||Mp(n,a,ut,s,J,it,z)||t!==null&&t.dependencies!==null&&Ko(t.dependencies))?(K||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,it,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,it,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&J===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&J===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=it),f.props=s,f.state=it,f.context=z,s=ut):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&J===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&J===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,ml(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Ja(n,t.child,null,u),n.child=Ja(n,null,a,u)):mn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=zi(t,n,u),t}function Bp(t,n,a,s){return qa(),n.flags|=256,mn(t,n,a,s),n.child}var Ic={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fc(t){return{baseLanes:t,cachePool:bd()}}function Hc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Wn),t}function Ip(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(qe.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(ge){if(u?fa(n):ha(),(t=Be)?(t=qm(t,ti),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:aa!==null?{id:gi,overflow:_i}:null,retryLane:536870912,hydrationErrors:null},a=_d(t),a.return=n,n.child=a,dn=n,Be=null)):t=null,t===null)throw sa(n);return Ef(t)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,u?(ha(),u=n.mode,E=gl({mode:"hidden",children:E},u),s=Wa(s,u,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=Fc(a),s.childLanes=Hc(t,g,a),n.memoizedState=Ic,io(null,s)):(fa(n),Gc(n,E))}var z=t.memoizedState;if(z!==null&&(E=z.dehydrated,E!==null)){if(f)n.flags&256?(fa(n),n.flags&=-257,n=Vc(t,n,a)):n.memoizedState!==null?(ha(),n.child=t.child,n.flags|=128,n=null):(ha(),E=s.fallback,u=n.mode,s=gl({mode:"visible",children:s.children},u),E=Wa(E,u,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,Ja(n,t.child,null,a),s=n.child,s.memoizedState=Fc(a),s.childLanes=Hc(t,g,a),n.memoizedState=Ic,n=io(null,s));else if(fa(n),Ef(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var K=g.dgst;g=K,s=Error(r(419)),s.stack="",s.digest=g,Ws({value:s,source:null,stack:null}),n=Vc(t,n,a)}else if(tn||Pr(t,n,a,!1),g=(a&t.childLanes)!==0,tn||g){if(g=ze,g!==null&&(s=Ls(g,a),s!==0&&s!==z.retryLane))throw z.retryLane=s,ka(t,s),Pn(g,t,s),zc;yf(E)||Al(),n=Vc(t,n,a)}else yf(E)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Be=ni(E.nextSibling),dn=n,ge=!0,ra=null,ti=!1,t!==null&&xd(n,t),n=Gc(n,s.children),n.flags|=4096);return n}return u?(ha(),E=s.fallback,u=n.mode,z=t.child,K=z.sibling,s=Di(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,K!==null?E=Di(K,E):(E=Wa(E,u,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,io(null,s),s=n.child,E=t.child.memoizedState,E===null?E=Fc(a):(u=E.cachePool,u!==null?(z=Je._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=bd(),E={baseLanes:E.baseLanes|a,cachePool:u}),s.memoizedState=E,s.childLanes=Hc(t,g,a),n.memoizedState=Ic,io(t.child,s)):(fa(n),a=t.child,t=a.sibling,a=Di(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Gc(t,n){return n=gl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function gl(t,n){return t=Gn(22,t,null,n),t.lanes=0,t}function Vc(t,n,a){return Ja(n,t.child,null,a),t=Gc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Fp(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),ic(t.return,n,a)}function Xc(t,n,a,s,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function Hp(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var g=qe.current,E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,_t(qe,g),mn(t,n,s,a),s=ge?ks:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fp(t,a,n);else if(t.tag===19)Fp(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&al(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Xc(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&al(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Xc(n,!0,a,null,f,s);break;case"together":Xc(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function zi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ma|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Pr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Di(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Di(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function kc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ko(t)))}function O0(t,n,a){switch(n.tag){case 3:kt(n,n.stateNode.containerInfo),oa(n,Je,t.memoizedState.cache),qa();break;case 27:case 5:re(n);break;case 4:kt(n,n.stateNode.containerInfo);break;case 10:oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,mc(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ip(t,n,a):(fa(n),t=zi(t,n,a),t!==null?t.sibling:null);fa(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Pr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Hp(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_t(qe,qe.current),s)break;return null;case 22:return n.lanes=0,Lp(t,n,a,n.pendingProps);case 24:oa(n,Je,t.memoizedState.cache)}return zi(t,n,a)}function Gp(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)tn=!0;else{if(!kc(t,a)&&(n.flags&128)===0)return tn=!1,O0(t,n,a);tn=(t.flags&131072)!==0}else tn=!1,ge&&(n.flags&1048576)!==0&&Sd(n,ks,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Ka(n.elementType),n.type=t,typeof t=="function")Zu(t)?(s=tr(t,s),n.tag=1,n=zp(null,n,t,s,a)):(n.tag=0,n=Bc(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===P){n.tag=11,n=wp(null,n,t,s,a);break t}else if(u===O){n.tag=14,n=Dp(null,n,t,s,a);break t}}throw n=pt(t)||t,Error(r(306,n,""))}}return n;case 0:return Bc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=tr(s,n.pendingProps),zp(t,n,s,u,a);case 3:t:{if(kt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,cc(t,n),Js(n,s,null,a);var g=n.memoizedState;if(s=g.cache,oa(n,Je,s),s!==f.cache&&ac(n,[Je],a,!0),Qs(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Bp(t,n,s,a);break t}else if(s!==u){u=Qn(Error(r(424)),n),Ws(u),n=Bp(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Be=ni(t.firstChild),dn=n,ge=!0,ra=null,ti=!0,a=Ld(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(qa(),s===u){n=zi(t,n,a);break t}mn(t,n,s,a)}n=n.child}return n;case 26:return ml(t,n),t===null?(a=Jm(n.type,null,n.pendingProps,null))?n.memoizedState=a:ge||(a=n.type,t=n.pendingProps,s=Ll(xt.current).createElement(a),s[an]=n,s[vn]=t,gn(s,a,t),Ot(s),n.stateNode=s):n.memoizedState=Jm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return re(n),t===null&&ge&&(s=n.stateNode=Zm(n.type,n.pendingProps,xt.current),dn=n,ti=!0,u=Be,xa(n.type)?(Tf=u,Be=ni(s.firstChild)):Be=u),mn(t,n,n.pendingProps.children,a),ml(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ge&&((u=s=Be)&&(s=cS(s,n.type,n.pendingProps,ti),s!==null?(n.stateNode=s,dn=n,Be=ni(s.firstChild),ti=!1,u=!0):u=!1),u||sa(n)),re(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Sf(u,f)?s=null:g!==null&&Sf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=_c(t,n,A0,null,null,a),So._currentValue=u),ml(t,n),mn(t,n,s,a),n.child;case 6:return t===null&&ge&&((t=a=Be)&&(a=fS(a,n.pendingProps,ti),a!==null?(n.stateNode=a,dn=n,Be=null,t=!0):t=!1),t||sa(n)),null;case 13:return Ip(t,n,a);case 4:return kt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ja(n,null,s,a):mn(t,n,s,a),n.child;case 11:return wp(t,n,n.type,n.pendingProps,a);case 7:return mn(t,n,n.pendingProps,a),n.child;case 8:return mn(t,n,n.pendingProps.children,a),n.child;case 12:return mn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,oa(n,n.type,s.value),mn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,ja(n),u=pn(u),s=s(u),n.flags|=1,mn(t,n,s,a),n.child;case 14:return Dp(t,n,n.type,n.pendingProps,a);case 15:return Up(t,n,n.type,n.pendingProps,a);case 19:return Hp(t,n,a);case 31:return N0(t,n,a);case 22:return Lp(t,n,a,n.pendingProps);case 24:return ja(n),s=pn(Je),t===null?(u=oc(),u===null&&(u=ze,f=rc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},uc(n),oa(n,Je,u)):((t.lanes&a)!==0&&(cc(t,n),Js(n,null,null,a),Qs()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),oa(n,Je,s)):(s=f.cache,oa(n,Je,s),s!==u.cache&&ac(n,[Je],a,!0))),mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Bi(t){t.flags|=4}function Wc(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(pm())t.flags|=8192;else throw Qa=tl,lc}else t.flags&=-16777217}function Vp(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ig(n))if(pm())t.flags|=8192;else throw Qa=tl,lc}function _l(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Te():536870912,t.lanes|=n,Yr|=n)}function ao(t,n){if(!ge)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ie(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function P0(t,n,a){var s=n.pendingProps;switch($u(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(n),null;case 1:return Ie(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ni(Je),Bt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Or(n)?Bi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ec())),Ie(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Bi(n),f!==null?(Ie(n),Vp(n,f)):(Ie(n),Wc(n,u,null,s,a))):f?f!==t.memoizedState?(Bi(n),Ie(n),Vp(n,f)):(Ie(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Bi(n),Ie(n),Wc(n,u,t,s,a)),null;case 27:if(G(n),a=xt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Bi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ie(n),null}t=W.current,Or(n)?Md(n):(t=Zm(u,s,a),n.stateNode=t,Bi(n))}return Ie(n),null;case 5:if(G(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Bi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ie(n),null}if(f=W.current,Or(n))Md(n);else{var g=Ll(xt.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(u,{is:s.is}):g.createElement(u)}}f[an]=n,f[vn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(gn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Bi(n)}}return Ie(n),Wc(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Bi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=xt.current,Or(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=dn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[an]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Im(t.nodeValue,a)),t||sa(n,!0)}else t=Ll(t).createTextNode(s),t[an]=n,n.stateNode=t}return Ie(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Or(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[an]=n}else qa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ie(n),t=!1}else a=ec(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Xn(n),n):(Xn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ie(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Or(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[an]=n}else qa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ie(n),u=!1}else u=ec(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Xn(n),n):(Xn(n),null)}return Xn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),_l(n,n.updateQueue),Ie(n),null);case 4:return Bt(),t===null&&pf(n.stateNode.containerInfo),Ie(n),null;case 10:return Ni(n.type),Ie(n),null;case 19:if(tt(qe),s=n.memoizedState,s===null)return Ie(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)ao(s,!1);else{if(ke!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=al(t),f!==null){for(n.flags|=128,ao(s,!1),t=f.updateQueue,n.updateQueue=t,_l(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)gd(a,t),a=a.sibling;return _t(qe,qe.current&1|2),ge&&Ui(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&gt()>yl&&(n.flags|=128,u=!0,ao(s,!1),n.lanes=4194304)}else{if(!u)if(t=al(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,_l(n,t),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!ge)return Ie(n),null}else 2*gt()-s.renderingStartTime>yl&&a!==536870912&&(n.flags|=128,u=!0,ao(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=gt(),t.sibling=null,a=qe.current,_t(qe,u?a&1|2:a&1),ge&&Ui(n,s.treeForkCount),t):(Ie(n),null);case 22:case 23:return Xn(n),pc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ie(n),n.subtreeFlags&6&&(n.flags|=8192)):Ie(n),a=n.updateQueue,a!==null&&_l(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&tt(Za),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ni(Je),Ie(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function z0(t,n){switch($u(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ni(Je),Bt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return G(n),null;case 31:if(n.memoizedState!==null){if(Xn(n),n.alternate===null)throw Error(r(340));qa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Xn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));qa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return tt(qe),null;case 4:return Bt(),null;case 10:return Ni(n.type),null;case 22:case 23:return Xn(n),pc(),t!==null&&tt(Za),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ni(Je),null;case 25:return null;default:return null}}function Xp(t,n){switch($u(n),n.tag){case 3:Ni(Je),Bt();break;case 26:case 27:case 5:G(n);break;case 4:Bt();break;case 31:n.memoizedState!==null&&Xn(n);break;case 13:Xn(n);break;case 19:tt(qe);break;case 10:Ni(n.type);break;case 22:case 23:Xn(n),pc(),t!==null&&tt(Za);break;case 24:Ni(Je)}}function ro(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==u)}}catch(E){De(n,n.return,E)}}function da(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var g=s.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,u=n;var z=a,K=E;try{K()}catch(ut){De(u,z,ut)}}}s=s.next}while(s!==f)}}catch(ut){De(n,n.return,ut)}}function kp(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Od(n,a)}catch(s){De(t,t.return,s)}}}function Wp(t,n,a){a.props=tr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){De(t,n,s)}}function so(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){De(t,n,u)}}function vi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){De(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){De(t,n,u)}else a.current=null}function qp(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){De(t,t.return,u)}}function qc(t,n,a){try{var s=t.stateNode;aS(s,t.type,a,n),s[vn]=n}catch(u){De(t,t.return,u)}}function Yp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&xa(t.type)||t.tag===4}function Yc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Yp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&xa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ci));else if(s!==4&&(s===27&&xa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(jc(t,n,a),t=t.sibling;t!==null;)jc(t,n,a),t=t.sibling}function vl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&xa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(vl(t,n,a),t=t.sibling;t!==null;)vl(t,n,a),t=t.sibling}function jp(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);gn(n,s,a),n[an]=t,n[vn]=a}catch(f){De(t,t.return,f)}}var Ii=!1,en=!1,Zc=!1,Zp=typeof WeakSet=="function"?WeakSet:Set,ln=null;function B0(t,n){if(t=t.containerInfo,_f=Fl,t=od(t),Vu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,E=-1,z=-1,K=0,ut=0,dt=t,J=null;e:for(;;){for(var it;dt!==a||u!==0&&dt.nodeType!==3||(E=g+u),dt!==f||s!==0&&dt.nodeType!==3||(z=g+s),dt.nodeType===3&&(g+=dt.nodeValue.length),(it=dt.firstChild)!==null;)J=dt,dt=it;for(;;){if(dt===t)break e;if(J===a&&++K===u&&(E=g),J===f&&++ut===s&&(z=g),(it=dt.nextSibling)!==null)break;dt=J,J=dt.parentNode}dt=it}a=E===-1||z===-1?null:{start:E,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(vf={focusedElem:t,selectionRange:a},Fl=!1,ln=n;ln!==null;)if(n=ln,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,ln=t;else for(;ln!==null;){switch(n=ln,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Pt=tr(a.type,u);t=s.getSnapshotBeforeUpdate(Pt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Zt){De(a,a.return,Zt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Mf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Mf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,ln=t;break}ln=n.return}}function Kp(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Hi(t,a),s&4&&ro(5,a);break;case 1:if(Hi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){De(a,a.return,g)}else{var u=tr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){De(a,a.return,g)}}s&64&&kp(a),s&512&&so(a,a.return);break;case 3:if(Hi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Od(t,n)}catch(g){De(a,a.return,g)}}break;case 27:n===null&&s&4&&jp(a);case 26:case 5:Hi(t,a),n===null&&s&4&&qp(a),s&512&&so(a,a.return);break;case 12:Hi(t,a);break;case 31:Hi(t,a),s&4&&$p(t,a);break;case 13:Hi(t,a),s&4&&tm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=q0.bind(null,a),hS(t,a))));break;case 22:if(s=a.memoizedState!==null||Ii,!s){n=n!==null&&n.memoizedState!==null||en,u=Ii;var f=en;Ii=s,(en=n)&&!f?Gi(t,a,(a.subtreeFlags&8772)!==0):Hi(t,a),Ii=u,en=f}break;case 30:break;default:Hi(t,a)}}function Qp(t){var n=t.alternate;n!==null&&(t.alternate=null,Qp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&bt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ge=null,Un=!1;function Fi(t,n,a){for(a=a.child;a!==null;)Jp(t,n,a),a=a.sibling}function Jp(t,n,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(jt,a)}catch{}switch(a.tag){case 26:en||vi(a,n),Fi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:en||vi(a,n);var s=Ge,u=Un;xa(a.type)&&(Ge=a.stateNode,Un=!1),Fi(t,n,a),go(a.stateNode),Ge=s,Un=u;break;case 5:en||vi(a,n);case 6:if(s=Ge,u=Un,Ge=null,Fi(t,n,a),Ge=s,Un=u,Ge!==null)if(Un)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(a.stateNode)}catch(f){De(a,n,f)}else try{Ge.removeChild(a.stateNode)}catch(f){De(a,n,f)}break;case 18:Ge!==null&&(Un?(t=Ge,km(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),es(t)):km(Ge,a.stateNode));break;case 4:s=Ge,u=Un,Ge=a.stateNode.containerInfo,Un=!0,Fi(t,n,a),Ge=s,Un=u;break;case 0:case 11:case 14:case 15:da(2,a,n),en||da(4,a,n),Fi(t,n,a);break;case 1:en||(vi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Wp(a,n,s)),Fi(t,n,a);break;case 21:Fi(t,n,a);break;case 22:en=(s=en)||a.memoizedState!==null,Fi(t,n,a),en=s;break;default:Fi(t,n,a)}}function $p(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{es(t)}catch(a){De(n,n.return,a)}}}function tm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{es(t)}catch(a){De(n,n.return,a)}}function I0(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Zp),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Zp),n;default:throw Error(r(435,t.tag))}}function Sl(t,n){var a=I0(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Y0.bind(null,t,s);s.then(u,u)}})}function Ln(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,g=n,E=g;t:for(;E!==null;){switch(E.tag){case 27:if(xa(E.type)){Ge=E.stateNode,Un=!1;break t}break;case 5:Ge=E.stateNode,Un=!1;break t;case 3:case 4:Ge=E.stateNode.containerInfo,Un=!0;break t}E=E.return}if(Ge===null)throw Error(r(160));Jp(f,g,u),Ge=null,Un=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)em(n,t),n=n.sibling}var ci=null;function em(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ln(n,t),Nn(t),s&4&&(da(3,t,t.return),ro(3,t),da(5,t,t.return));break;case 1:Ln(n,t),Nn(t),s&512&&(en||a===null||vi(a,a.return)),s&64&&Ii&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=ci;if(Ln(n,t),Nn(t),s&512&&(en||a===null||vi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Y]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),gn(f,s,a),f[an]=t,Ot(f),s=f;break t;case"link":var g=eg("link","href",u).get(s+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(f=g[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break e}}f=u.createElement(s),gn(f,s,a),u.head.appendChild(f);break;case"meta":if(g=eg("meta","content",u).get(s+(a.content||""))){for(E=0;E<g.length;E++)if(f=g[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break e}}f=u.createElement(s),gn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[an]=t,Ot(f),s=f}t.stateNode=s}else ng(u,t.type,t.stateNode);else t.stateNode=tg(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?ng(u,t.type,t.stateNode):tg(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&qc(t,t.memoizedProps,a.memoizedProps)}break;case 27:Ln(n,t),Nn(t),s&512&&(en||a===null||vi(a,a.return)),a!==null&&s&4&&qc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Ln(n,t),Nn(t),s&512&&(en||a===null||vi(a,a.return)),t.flags&32){u=t.stateNode;try{Tr(u,"")}catch(Pt){De(t,t.return,Pt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,qc(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Zc=!0);break;case 6:if(Ln(n,t),Nn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Pt){De(t,t.return,Pt)}}break;case 3:if(Pl=null,u=ci,ci=Nl(n.containerInfo),Ln(n,t),ci=u,Nn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{es(n.containerInfo)}catch(Pt){De(t,t.return,Pt)}Zc&&(Zc=!1,nm(t));break;case 4:s=ci,ci=Nl(t.stateNode.containerInfo),Ln(n,t),Nn(t),ci=s;break;case 12:Ln(n,t),Nn(t);break;case 31:Ln(n,t),Nn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Sl(t,s)));break;case 13:Ln(n,t),Nn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ml=gt()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Sl(t,s)));break;case 22:u=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,K=Ii,ut=en;if(Ii=K||u,en=ut||z,Ln(n,t),en=ut,Ii=K,Nn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||Ii||en||er(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=z.stateNode;var dt=z.memoizedProps.style,J=dt!=null&&dt.hasOwnProperty("display")?dt.display:null;E.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(Pt){De(z,z.return,Pt)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(Pt){De(z,z.return,Pt)}}}else if(n.tag===18){if(a===null){z=n;try{var it=z.stateNode;u?Wm(it,!0):Wm(z.stateNode,!1)}catch(Pt){De(z,z.return,Pt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Sl(t,a))));break;case 19:Ln(n,t),Nn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Sl(t,s)));break;case 30:break;case 21:break;default:Ln(n,t),Nn(t)}}function Nn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Yp(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Yc(t);vl(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(Tr(g,""),a.flags&=-33);var E=Yc(t);vl(t,E,g);break;case 3:case 4:var z=a.stateNode.containerInfo,K=Yc(t);jc(t,K,z);break;default:throw Error(r(161))}}catch(ut){De(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function nm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;nm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Hi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Kp(t,n.alternate,n),n=n.sibling}function er(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:da(4,n,n.return),er(n);break;case 1:vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Wp(n,n.return,a),er(n);break;case 27:go(n.stateNode);case 26:case 5:vi(n,n.return),er(n);break;case 22:n.memoizedState===null&&er(n);break;case 30:er(n);break;default:er(n)}t=t.sibling}}function Gi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Gi(u,f,a),ro(4,f);break;case 1:if(Gi(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(K){De(s,s.return,K)}if(s=f,u=s.updateQueue,u!==null){var E=s.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Nd(z[u],E)}catch(K){De(s,s.return,K)}}a&&g&64&&kp(f),so(f,f.return);break;case 27:jp(f);case 26:case 5:Gi(u,f,a),a&&s===null&&g&4&&qp(f),so(f,f.return);break;case 12:Gi(u,f,a);break;case 31:Gi(u,f,a),a&&g&4&&$p(u,f);break;case 13:Gi(u,f,a),a&&g&4&&tm(u,f);break;case 22:f.memoizedState===null&&Gi(u,f,a),so(f,f.return);break;case 30:break;default:Gi(u,f,a)}n=n.sibling}}function Kc(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&qs(a))}function Qc(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t))}function fi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)im(t,n,a,s),n=n.sibling}function im(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:fi(t,n,a,s),u&2048&&ro(9,n);break;case 1:fi(t,n,a,s);break;case 3:fi(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t)));break;case 12:if(u&2048){fi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,E=f.onPostCommit;typeof E=="function"&&E(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){De(n,n.return,z)}}else fi(t,n,a,s);break;case 31:fi(t,n,a,s);break;case 13:fi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?fi(t,n,a,s):oo(t,n):f._visibility&2?fi(t,n,a,s):(f._visibility|=2,kr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Kc(g,n);break;case 24:fi(t,n,a,s),u&2048&&Qc(n.alternate,n);break;default:fi(t,n,a,s)}}function kr(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,E=a,z=s,K=g.flags;switch(g.tag){case 0:case 11:case 15:kr(f,g,E,z,u),ro(8,g);break;case 23:break;case 22:var ut=g.stateNode;g.memoizedState!==null?ut._visibility&2?kr(f,g,E,z,u):oo(f,g):(ut._visibility|=2,kr(f,g,E,z,u)),u&&K&2048&&Kc(g.alternate,g);break;case 24:kr(f,g,E,z,u),u&&K&2048&&Qc(g.alternate,g);break;default:kr(f,g,E,z,u)}n=n.sibling}}function oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:oo(a,s),u&2048&&Kc(s.alternate,s);break;case 24:oo(a,s),u&2048&&Qc(s.alternate,s);break;default:oo(a,s)}n=n.sibling}}var lo=8192;function Wr(t,n,a){if(t.subtreeFlags&lo)for(t=t.child;t!==null;)am(t,n,a),t=t.sibling}function am(t,n,a){switch(t.tag){case 26:Wr(t,n,a),t.flags&lo&&t.memoizedState!==null&&TS(a,ci,t.memoizedState,t.memoizedProps);break;case 5:Wr(t,n,a);break;case 3:case 4:var s=ci;ci=Nl(t.stateNode.containerInfo),Wr(t,n,a),ci=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=lo,lo=16777216,Wr(t,n,a),lo=s):Wr(t,n,a));break;default:Wr(t,n,a)}}function rm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];ln=s,om(s,t)}rm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sm(t),t=t.sibling}function sm(t){switch(t.tag){case 0:case 11:case 15:uo(t),t.flags&2048&&da(9,t,t.return);break;case 3:uo(t);break;case 12:uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,xl(t)):uo(t);break;default:uo(t)}}function xl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];ln=s,om(s,t)}rm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:da(8,n,n.return),xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,xl(n));break;default:xl(n)}t=t.sibling}}function om(t,n){for(;ln!==null;){var a=ln;switch(a.tag){case 0:case 11:case 15:da(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,ln=s;else t:for(a=t;ln!==null;){s=ln;var u=s.sibling,f=s.return;if(Qp(s),s===a){ln=null;break t}if(u!==null){u.return=f,ln=u;break t}ln=f}}}var F0={getCacheForType:function(t){var n=pn(Je),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return pn(Je).controller.signal}},H0=typeof WeakMap=="function"?WeakMap:Map,Ae=0,ze=null,ce=null,pe=0,we=0,kn=null,pa=!1,qr=!1,Jc=!1,Vi=0,ke=0,ma=0,nr=0,$c=0,Wn=0,Yr=0,co=null,On=null,tf=!1,Ml=0,lm=0,yl=1/0,El=null,ga=null,rn=0,_a=null,jr=null,Xi=0,ef=0,nf=null,um=null,fo=0,af=null;function qn(){return(Ae&2)!==0&&pe!==0?pe&-pe:L.T!==null?cf():Ha()}function cm(){if(Wn===0)if((pe&536870912)===0||ge){var t=mt;mt<<=1,(mt&3932160)===0&&(mt=262144),Wn=t}else Wn=536870912;return t=Vn.current,t!==null&&(t.flags|=32),Wn}function Pn(t,n,a){(t===ze&&(we===2||we===9)||t.cancelPendingCommit!==null)&&(Zr(t,0),va(t,pe,Wn,!1)),_n(t,a),((Ae&2)===0||t!==ze)&&(t===ze&&((Ae&2)===0&&(nr|=a),ke===4&&va(t,pe,Wn,!1)),Si(t))}function fm(t,n,a){if((Ae&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Pe(t,n),u=s?X0(t,n):sf(t,n,!0),f=s;do{if(u===0){qr&&!s&&va(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!G0(a)){u=sf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;u=co;var z=E.current.memoizedState.isDehydrated;if(z&&(Zr(E,g).flags|=256),g=sf(E,g,!1),g!==2){if(Jc&&!z){E.errorRecoveryDisabledLanes|=f,nr|=f,u=4;break t}f=On,On=u,f!==null&&(On===null?On=f:On.push.apply(On,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){Zr(t,0),va(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:va(s,n,Wn,!pa);break t;case 2:On=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Ml+300-gt(),10<u)){if(va(s,n,Wn,!pa),de(s,0,!0)!==0)break t;Xi=n,s.timeoutHandle=Vm(hm.bind(null,s,a,On,El,tf,n,Wn,nr,Yr,pa,f,"Throttled",-0,0),u);break t}hm(s,a,On,El,tf,n,Wn,nr,Yr,pa,f,null,-0,0)}}break}while(!0);Si(t)}function hm(t,n,a,s,u,f,g,E,z,K,ut,dt,J,it){if(t.timeoutHandle=-1,dt=n.subtreeFlags,dt&8192||(dt&16785408)===16785408){dt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ci},am(n,f,dt);var Pt=(f&62914560)===f?Ml-gt():(f&4194048)===f?lm-gt():0;if(Pt=AS(dt,Pt),Pt!==null){Xi=f,t.cancelPendingCommit=Pt(xm.bind(null,t,n,f,a,s,u,g,E,z,ut,dt,null,J,it)),va(t,f,g,!K);return}}xm(t,n,f,a,s,u,g,E,z)}function G0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Hn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function va(t,n,a,s){n&=~$c,n&=~nr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Kt(u),g=1<<f;s[f]=-1,u&=~g}a!==0&&vr(t,a,n)}function Tl(){return(Ae&6)===0?(ho(0),!1):!0}function rf(){if(ce!==null){if(we===0)var t=ce.return;else t=ce,Li=Ya=null,xc(t),Fr=null,js=0,t=ce;for(;t!==null;)Xp(t.alternate,t),t=t.return;ce=null}}function Zr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,oS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Xi=0,rf(),ze=t,ce=a=Di(t.current,null),pe=n,we=0,kn=null,pa=!1,qr=Pe(t,n),Jc=!1,Yr=Wn=$c=nr=ma=ke=0,On=co=null,tf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Kt(s),f=1<<u;n|=t[u],s&=~f}return Vi=n,Wo(),a}function dm(t,n){te=null,L.H=no,n===Ir||n===$o?(n=wd(),we=3):n===lc?(n=wd(),we=4):we=n===zc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kn=n,ce===null&&(ke=1,dl(t,Qn(n,t.current)))}function pm(){var t=Vn.current;return t===null?!0:(pe&4194048)===pe?ei===null:(pe&62914560)===pe||(pe&536870912)!==0?t===ei:!1}function mm(){var t=L.H;return L.H=no,t===null?no:t}function gm(){var t=L.A;return L.A=F0,t}function Al(){ke=4,pa||(pe&4194048)!==pe&&Vn.current!==null||(qr=!0),(ma&134217727)===0&&(nr&134217727)===0||ze===null||va(ze,pe,Wn,!1)}function sf(t,n,a){var s=Ae;Ae|=2;var u=mm(),f=gm();(ze!==t||pe!==n)&&(El=null,Zr(t,n)),n=!1;var g=ke;t:do try{if(we!==0&&ce!==null){var E=ce,z=kn;switch(we){case 8:rf(),g=6;break t;case 3:case 2:case 9:case 6:Vn.current===null&&(n=!0);var K=we;if(we=0,kn=null,Kr(t,E,z,K),a&&qr){g=0;break t}break;default:K=we,we=0,kn=null,Kr(t,E,z,K)}}V0(),g=ke;break}catch(ut){dm(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Li=Ya=null,Ae=s,L.H=u,L.A=f,ce===null&&(ze=null,pe=0,Wo()),g}function V0(){for(;ce!==null;)_m(ce)}function X0(t,n){var a=Ae;Ae|=2;var s=mm(),u=gm();ze!==t||pe!==n?(El=null,yl=gt()+500,Zr(t,n)):qr=Pe(t,n);t:do try{if(we!==0&&ce!==null){n=ce;var f=kn;e:switch(we){case 1:we=0,kn=null,Kr(t,n,f,1);break;case 2:case 9:if(Rd(f)){we=0,kn=null,vm(n);break}n=function(){we!==2&&we!==9||ze!==t||(we=7),Si(t)},f.then(n,n);break t;case 3:we=7;break t;case 4:we=5;break t;case 7:Rd(f)?(we=0,kn=null,vm(n)):(we=0,kn=null,Kr(t,n,f,7));break;case 5:var g=null;switch(ce.tag){case 26:g=ce.memoizedState;case 5:case 27:var E=ce;if(g?ig(g):E.stateNode.complete){we=0,kn=null;var z=E.sibling;if(z!==null)ce=z;else{var K=E.return;K!==null?(ce=K,bl(K)):ce=null}break e}}we=0,kn=null,Kr(t,n,f,5);break;case 6:we=0,kn=null,Kr(t,n,f,6);break;case 8:rf(),ke=6;break t;default:throw Error(r(462))}}k0();break}catch(ut){dm(t,ut)}while(!0);return Li=Ya=null,L.H=s,L.A=u,Ae=a,ce!==null?0:(ze=null,pe=0,Wo(),ke)}function k0(){for(;ce!==null&&!rt();)_m(ce)}function _m(t){var n=Gp(t.alternate,t,Vi);t.memoizedProps=t.pendingProps,n===null?bl(t):ce=n}function vm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Pp(a,n,n.pendingProps,n.type,void 0,pe);break;case 11:n=Pp(a,n,n.pendingProps,n.type.render,n.ref,pe);break;case 5:xc(n);default:Xp(a,n),n=ce=gd(n,Vi),n=Gp(a,n,Vi)}t.memoizedProps=t.pendingProps,n===null?bl(t):ce=n}function Kr(t,n,a,s){Li=Ya=null,xc(n),Fr=null,js=0;var u=n.return;try{if(L0(t,u,n,a,pe)){ke=1,dl(t,Qn(a,t.current)),ce=null;return}}catch(f){if(u!==null)throw ce=u,f;ke=1,dl(t,Qn(a,t.current)),ce=null;return}n.flags&32768?(ge||s===1?t=!0:qr||(pe&536870912)!==0?t=!1:(pa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Vn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Sm(n,t)):bl(n)}function bl(t){var n=t;do{if((n.flags&32768)!==0){Sm(n,pa);return}t=n.return;var a=P0(n.alternate,n,Vi);if(a!==null){ce=a;return}if(n=n.sibling,n!==null){ce=n;return}ce=n=t}while(n!==null);ke===0&&(ke=5)}function Sm(t,n){do{var a=z0(t.alternate,t);if(a!==null){a.flags&=32767,ce=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ce=t;return}ce=t=a}while(t!==null);ke=6,ce=null}function xm(t,n,a,s,u,f,g,E,z){t.cancelPendingCommit=null;do Rl();while(rn!==0);if((Ae&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Yu,Ri(t,a,f,g,E,z),t===ze&&(ce=ze=null,pe=0),jr=n,_a=t,Xi=a,ef=f,nf=u,um=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,j0(Ct,function(){return Am(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=L.T,L.T=null,u=q.p,q.p=2,g=Ae,Ae|=4;try{B0(t,n,a)}finally{Ae=g,q.p=u,L.T=s}}rn=1,Mm(),ym(),Em()}}function Mm(){if(rn===1){rn=0;var t=_a,n=jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var s=q.p;q.p=2;var u=Ae;Ae|=4;try{em(n,t);var f=vf,g=od(t.containerInfo),E=f.focusedElem,z=f.selectionRange;if(g!==E&&E&&E.ownerDocument&&sd(E.ownerDocument.documentElement,E)){if(z!==null&&Vu(E)){var K=z.start,ut=z.end;if(ut===void 0&&(ut=K),"selectionStart"in E)E.selectionStart=K,E.selectionEnd=Math.min(ut,E.value.length);else{var dt=E.ownerDocument||document,J=dt&&dt.defaultView||window;if(J.getSelection){var it=J.getSelection(),Pt=E.textContent.length,Zt=Math.min(z.start,Pt),Oe=z.end===void 0?Zt:Math.min(z.end,Pt);!it.extend&&Zt>Oe&&(g=Oe,Oe=Zt,Zt=g);var k=rd(E,Zt),I=rd(E,Oe);if(k&&I&&(it.rangeCount!==1||it.anchorNode!==k.node||it.anchorOffset!==k.offset||it.focusNode!==I.node||it.focusOffset!==I.offset)){var Z=dt.createRange();Z.setStart(k.node,k.offset),it.removeAllRanges(),Zt>Oe?(it.addRange(Z),it.extend(I.node,I.offset)):(Z.setEnd(I.node,I.offset),it.addRange(Z))}}}}for(dt=[],it=E;it=it.parentNode;)it.nodeType===1&&dt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<dt.length;E++){var ft=dt[E];ft.element.scrollLeft=ft.left,ft.element.scrollTop=ft.top}}Fl=!!_f,vf=_f=null}finally{Ae=u,q.p=s,L.T=a}}t.current=n,rn=2}}function ym(){if(rn===2){rn=0;var t=_a,n=jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var s=q.p;q.p=2;var u=Ae;Ae|=4;try{Kp(t,n.alternate,n)}finally{Ae=u,q.p=s,L.T=a}}rn=3}}function Em(){if(rn===4||rn===3){rn=0,St();var t=_a,n=jr,a=Xi,s=um;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?rn=5:(rn=0,jr=_a=null,Tm(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ga=null),Sr(a),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(jt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=L.T,u=q.p,q.p=2,L.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var E=s[g];f(E.value,{componentStack:E.stack})}}finally{L.T=n,q.p=u}}(Xi&3)!==0&&Rl(),Si(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===af?fo++:(fo=0,af=t):fo=0,ho(0)}}function Tm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,qs(n)))}function Rl(){return Mm(),ym(),Em(),Am()}function Am(){if(rn!==5)return!1;var t=_a,n=ef;ef=0;var a=Sr(Xi),s=L.T,u=q.p;try{q.p=32>a?32:a,L.T=null,a=nf,nf=null;var f=_a,g=Xi;if(rn=0,jr=_a=null,Xi=0,(Ae&6)!==0)throw Error(r(331));var E=Ae;if(Ae|=4,sm(f.current),im(f,f.current,g,a),Ae=E,ho(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(jt,f)}catch{}return!0}finally{q.p=u,L.T=s,Tm(t,n)}}function bm(t,n,a){n=Qn(a,n),n=Pc(t.stateNode,n,2),t=ca(t,n,2),t!==null&&(_n(t,2),Si(t))}function De(t,n,a){if(t.tag===3)bm(t,t,a);else for(;n!==null;){if(n.tag===3){bm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ga===null||!ga.has(s))){t=Qn(a,t),a=Rp(2),s=ca(n,a,2),s!==null&&(Cp(a,s,n,t),_n(s,2),Si(s));break}}n=n.return}}function of(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new H0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Jc=!0,u.add(a),t=W0.bind(null,t,n,a),n.then(t,t))}function W0(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ze===t&&(pe&a)===a&&(ke===4||ke===3&&(pe&62914560)===pe&&300>gt()-Ml?(Ae&2)===0&&Zr(t,0):$c|=a,Yr===pe&&(Yr=0)),Si(t)}function Rm(t,n){n===0&&(n=Te()),t=ka(t,n),t!==null&&(_n(t,n),Si(t))}function q0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Rm(t,a)}function Y0(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Rm(t,a)}function j0(t,n){return N(t,n)}var Cl=null,Qr=null,lf=!1,wl=!1,uf=!1,Sa=0;function Si(t){t!==Qr&&t.next===null&&(Qr===null?Cl=Qr=t:Qr=Qr.next=t),wl=!0,lf||(lf=!0,K0())}function ho(t,n){if(!uf&&wl){uf=!0;do for(var a=!1,s=Cl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var g=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Kt(42|t)+1)-1,f&=u&~(g&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Um(s,f))}else f=pe,f=de(s,s===ze?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Pe(s,f)||(a=!0,Um(s,f));s=s.next}while(a);uf=!1}}function Z0(){Cm()}function Cm(){wl=lf=!1;var t=0;Sa!==0&&sS()&&(t=Sa);for(var n=gt(),a=null,s=Cl;s!==null;){var u=s.next,f=wm(s,n);f===0?(s.next=null,a===null?Cl=u:a.next=u,u===null&&(Qr=a)):(a=s,(t!==0||(f&3)!==0)&&(wl=!0)),s=u}rn!==0&&rn!==5||ho(t),Sa!==0&&(Sa=0)}function wm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Kt(f),E=1<<g,z=u[g];z===-1?((E&a)===0||(E&s)!==0)&&(u[g]=Ze(E,n)):z<=n&&(t.expiredLanes|=E),f&=~E}if(n=ze,a=pe,a=de(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(we===2||we===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&T(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Pe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&T(s),Sr(a)){case 2:case 8:a=wt;break;case 32:a=Ct;break;case 268435456:a=Tt;break;default:a=Ct}return s=Dm.bind(null,t),a=N(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&T(s),t.callbackPriority=2,t.callbackNode=null,2}function Dm(t,n){if(rn!==0&&rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Rl()&&t.callbackNode!==a)return null;var s=pe;return s=de(t,t===ze?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(fm(t,s,n),wm(t,gt()),t.callbackNode!=null&&t.callbackNode===a?Dm.bind(null,t):null)}function Um(t,n){if(Rl())return null;fm(t,n,!0)}function K0(){lS(function(){(Ae&6)!==0?N(Vt,Z0):Cm()})}function cf(){if(Sa===0){var t=zr;t===0&&(t=ct,ct<<=1,(ct&261888)===0&&(ct=256)),Sa=t}return Sa}function Lm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Bo(""+t)}function Nm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Q0(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Lm((u[vn]||null).action),g=s.submitter;g&&(n=(n=g[vn]||null)?Lm(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var E=new Go("action","action",null,s,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Sa!==0){var z=g?Nm(u,g):new FormData(u);wc(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(E.preventDefault(),z=g?Nm(u,g):new FormData(u),wc(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var ff=0;ff<qu.length;ff++){var hf=qu[ff],J0=hf.toLowerCase(),$0=hf[0].toUpperCase()+hf.slice(1);ui(J0,"on"+$0)}ui(cd,"onAnimationEnd"),ui(fd,"onAnimationIteration"),ui(hd,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(m0,"onTransitionRun"),ui(g0,"onTransitionStart"),ui(_0,"onTransitionCancel"),ui(dd,"onTransitionEnd"),Ce("onMouseEnter",["mouseout","mouseover"]),Ce("onMouseLeave",["mouseout","mouseover"]),Ce("onPointerEnter",["pointerout","pointerover"]),Ce("onPointerLeave",["pointerout","pointerover"]),Re("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Re("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Re("onBeforeInput",["compositionend","keypress","textInput","paste"]),Re("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Re("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Re("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function Om(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var E=s[g],z=E.instance,K=E.currentTarget;if(E=E.listener,z!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=K;try{f(u)}catch(ut){ko(ut)}u.currentTarget=null,f=z}else for(g=0;g<s.length;g++){if(E=s[g],z=E.instance,K=E.currentTarget,E=E.listener,z!==f&&u.isPropagationStopped())break t;f=E,u.currentTarget=K;try{f(u)}catch(ut){ko(ut)}u.currentTarget=null,f=z}}}}function fe(t,n){var a=n[A];a===void 0&&(a=n[A]=new Set);var s=t+"__bubble";a.has(s)||(Pm(n,t,2,!1),a.add(s))}function df(t,n,a){var s=0;n&&(s|=4),Pm(a,t,s,n)}var Dl="_reactListening"+Math.random().toString(36).slice(2);function pf(t){if(!t[Dl]){t[Dl]=!0,qt.forEach(function(a){a!=="selectionchange"&&(tS.has(a)||df(a,!1,t),df(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Dl]||(n[Dl]=!0,df("selectionchange",!1,n))}}function Pm(t,n,a,s){switch(cg(n)){case 2:var u=CS;break;case 8:u=wS;break;default:u=wf}a=u.bind(null,n,a,t),u=void 0,!Nu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function mf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var E=s.stateNode.containerInfo;if(E===u)break;if(g===4)for(g=s.return;g!==null;){var z=g.tag;if((z===3||z===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;E!==null;){if(g=Dt(E),g===null)return;if(z=g.tag,z===5||z===6||z===26||z===27){s=f=g;continue t}E=E.parentNode}}s=s.return}Hh(function(){var K=f,ut=Uu(a),dt=[];t:{var J=pd.get(t);if(J!==void 0){var it=Go,Pt=t;switch(t){case"keypress":if(Fo(a)===0)break t;case"keydown":case"keyup":it=Yv;break;case"focusin":Pt="focus",it=Bu;break;case"focusout":Pt="blur",it=Bu;break;case"beforeblur":case"afterblur":it=Bu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=Kv;break;case cd:case fd:case hd:it=Iv;break;case dd:it=Jv;break;case"scroll":case"scrollend":it=Nv;break;case"wheel":it=t0;break;case"copy":case"cut":case"paste":it=Hv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Wh;break;case"toggle":case"beforetoggle":it=n0}var Zt=(n&4)!==0,Oe=!Zt&&(t==="scroll"||t==="scrollend"),k=Zt?J!==null?J+"Capture":null:J;Zt=[];for(var I=K,Z;I!==null;){var ft=I;if(Z=ft.stateNode,ft=ft.tag,ft!==5&&ft!==26&&ft!==27||Z===null||k===null||(ft=Ps(I,k),ft!=null&&Zt.push(mo(I,ft,Z))),Oe)break;I=I.return}0<Zt.length&&(J=new it(J,Pt,null,a,ut),dt.push({event:J,listeners:Zt}))}}if((n&7)===0){t:{if(J=t==="mouseover"||t==="pointerover",it=t==="mouseout"||t==="pointerout",J&&a!==Du&&(Pt=a.relatedTarget||a.fromElement)&&(Dt(Pt)||Pt[na]))break t;if((it||J)&&(J=ut.window===ut?ut:(J=ut.ownerDocument)?J.defaultView||J.parentWindow:window,it?(Pt=a.relatedTarget||a.toElement,it=K,Pt=Pt?Dt(Pt):null,Pt!==null&&(Oe=c(Pt),Zt=Pt.tag,Pt!==Oe||Zt!==5&&Zt!==27&&Zt!==6)&&(Pt=null)):(it=null,Pt=K),it!==Pt)){if(Zt=Xh,ft="onMouseLeave",k="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(Zt=Wh,ft="onPointerLeave",k="onPointerEnter",I="pointer"),Oe=it==null?J:zt(it),Z=Pt==null?J:zt(Pt),J=new Zt(ft,I+"leave",it,a,ut),J.target=Oe,J.relatedTarget=Z,ft=null,Dt(ut)===K&&(Zt=new Zt(k,I+"enter",Pt,a,ut),Zt.target=Z,Zt.relatedTarget=Oe,ft=Zt),Oe=ft,it&&Pt)e:{for(Zt=eS,k=it,I=Pt,Z=0,ft=k;ft;ft=Zt(ft))Z++;ft=0;for(var Gt=I;Gt;Gt=Zt(Gt))ft++;for(;0<Z-ft;)k=Zt(k),Z--;for(;0<ft-Z;)I=Zt(I),ft--;for(;Z--;){if(k===I||I!==null&&k===I.alternate){Zt=k;break e}k=Zt(k),I=Zt(I)}Zt=null}else Zt=null;it!==null&&zm(dt,J,it,Zt,!1),Pt!==null&&Oe!==null&&zm(dt,Oe,Pt,Zt,!0)}}t:{if(J=K?zt(K):window,it=J.nodeName&&J.nodeName.toLowerCase(),it==="select"||it==="input"&&J.type==="file")var Me=$h;else if(Qh(J))if(td)Me=h0;else{Me=c0;var It=u0}else it=J.nodeName,!it||it.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?K&&wu(K.elementType)&&(Me=$h):Me=f0;if(Me&&(Me=Me(t,K))){Jh(dt,Me,a,ut);break t}It&&It(t,J,K),t==="focusout"&&K&&J.type==="number"&&K.memoizedProps.value!=null&&Cu(J,"number",J.value)}switch(It=K?zt(K):window,t){case"focusin":(Qh(It)||It.contentEditable==="true")&&(Cr=It,Xu=K,Xs=null);break;case"focusout":Xs=Xu=Cr=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,ld(dt,a,ut);break;case"selectionchange":if(p0)break;case"keydown":case"keyup":ld(dt,a,ut)}var ne;if(Fu)t:{switch(t){case"compositionstart":var me="onCompositionStart";break t;case"compositionend":me="onCompositionEnd";break t;case"compositionupdate":me="onCompositionUpdate";break t}me=void 0}else Rr?Zh(t,a)&&(me="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(qh&&a.locale!=="ko"&&(Rr||me!=="onCompositionStart"?me==="onCompositionEnd"&&Rr&&(ne=Gh()):(ia=ut,Ou="value"in ia?ia.value:ia.textContent,Rr=!0)),It=Ul(K,me),0<It.length&&(me=new kh(me,t,null,a,ut),dt.push({event:me,listeners:It}),ne?me.data=ne:(ne=Kh(a),ne!==null&&(me.data=ne)))),(ne=a0?r0(t,a):s0(t,a))&&(me=Ul(K,"onBeforeInput"),0<me.length&&(It=new kh("onBeforeInput","beforeinput",null,a,ut),dt.push({event:It,listeners:me}),It.data=ne)),Q0(dt,t,K,a,ut)}Om(dt,n)})}function mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ul(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ps(t,a),u!=null&&s.unshift(mo(t,u,f)),u=Ps(t,n),u!=null&&s.push(mo(t,u,f))),t.tag===3)return s;t=t.return}return[]}function eS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function zm(t,n,a,s,u){for(var f=n._reactName,g=[];a!==null&&a!==s;){var E=a,z=E.alternate,K=E.stateNode;if(E=E.tag,z!==null&&z===s)break;E!==5&&E!==26&&E!==27||K===null||(z=K,u?(K=Ps(a,f),K!=null&&g.unshift(mo(a,K,z))):u||(K=Ps(a,f),K!=null&&g.push(mo(a,K,z)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var nS=/\r\n?/g,iS=/\u0000|\uFFFD/g;function Bm(t){return(typeof t=="string"?t:""+t).replace(nS,`
`).replace(iS,"")}function Im(t,n){return n=Bm(n),Bm(t)===n}function Ne(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Tr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Tr(t,""+s);break;case"className":Rn(t,"class",s);break;case"tabIndex":Rn(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Rn(t,a,s);break;case"style":Ih(t,s,f);break;case"data":if(n!=="object"){Rn(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Bo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ne(t,n,"name",u.name,u,null),Ne(t,n,"formEncType",u.formEncType,u,null),Ne(t,n,"formMethod",u.formMethod,u,null),Ne(t,n,"formTarget",u.formTarget,u,null)):(Ne(t,n,"encType",u.encType,u,null),Ne(t,n,"method",u.method,u,null),Ne(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Bo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ci);break;case"onScroll":s!=null&&fe("scroll",t);break;case"onScrollEnd":s!=null&&fe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Bo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":fe("beforetoggle",t),fe("toggle",t),ve(t,"popover",s);break;case"xlinkActuate":Cn(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Cn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Cn(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Cn(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Cn(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Cn(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Cn(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Cn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Cn(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ve(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Uv.get(a)||a,ve(t,a,s))}}function gf(t,n,a,s,u,f){switch(a){case"style":Ih(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Tr(t,s):(typeof s=="number"||typeof s=="bigint")&&Tr(t,""+s);break;case"onScroll":s!=null&&fe("scroll",t);break;case"onScrollEnd":s!=null&&fe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ci);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_e.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):ve(t,a,s)}}}function gn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":fe("error",t),fe("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(t,n,f,g,a,null)}}u&&Ne(t,n,"srcSet",a.srcSet,a,null),s&&Ne(t,n,"src",a.src,a,null);return;case"input":fe("invalid",t);var E=f=g=u=null,z=null,K=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":u=ut;break;case"type":g=ut;break;case"checked":z=ut;break;case"defaultChecked":K=ut;break;case"value":f=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Ne(t,n,s,ut,a,null)}}Oh(t,f,E,z,K,g,u,!1);return;case"select":fe("invalid",t),s=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":f=E;break;case"defaultValue":g=E;break;case"multiple":s=E;default:Ne(t,n,u,E,a,null)}n=f,a=g,t.multiple=!!s,n!=null?Er(t,!!s,n,!1):a!=null&&Er(t,!!s,a,!0);return;case"textarea":fe("invalid",t),f=u=s=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":s=E;break;case"defaultValue":u=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ne(t,n,g,E,a,null)}zh(t,s,u,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ne(t,n,z,s,a,null)}return;case"dialog":fe("beforetoggle",t),fe("toggle",t),fe("cancel",t),fe("close",t);break;case"iframe":case"object":fe("load",t);break;case"video":case"audio":for(s=0;s<po.length;s++)fe(po[s],t);break;case"image":fe("error",t),fe("load",t);break;case"details":fe("toggle",t);break;case"embed":case"source":case"link":fe("error",t),fe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in a)if(a.hasOwnProperty(K)&&(s=a[K],s!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(t,n,K,s,a,null)}return;default:if(wu(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&gf(t,n,ut,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Ne(t,n,E,s,a,null))}function aS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,E=null,z=null,K=null,ut=null;for(it in a){var dt=a[it];if(a.hasOwnProperty(it)&&dt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":z=dt;default:s.hasOwnProperty(it)||Ne(t,n,it,null,s,dt)}}for(var J in s){var it=s[J];if(dt=a[J],s.hasOwnProperty(J)&&(it!=null||dt!=null))switch(J){case"type":f=it;break;case"name":u=it;break;case"checked":K=it;break;case"defaultChecked":ut=it;break;case"value":g=it;break;case"defaultValue":E=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:it!==dt&&Ne(t,n,J,it,s,dt)}}yr(t,g,E,z,K,ut,f,u);return;case"select":it=g=E=J=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":it=z;default:s.hasOwnProperty(f)||Ne(t,n,f,null,s,z)}for(u in s)if(f=s[u],z=a[u],s.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":J=f;break;case"defaultValue":E=f;break;case"multiple":g=f;default:f!==z&&Ne(t,n,u,f,s,z)}n=E,a=g,s=it,J!=null?Er(t,!!a,J,!1):!!s!=!!a&&(n!=null?Er(t,!!a,n,!0):Er(t,!!a,a?[]:"",!1));return;case"textarea":it=J=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ne(t,n,E,null,s,u)}for(g in s)if(u=s[g],f=a[g],s.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":J=u;break;case"defaultValue":it=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ne(t,n,g,u,s,f)}Ph(t,J,it);return;case"option":for(var Pt in a)if(J=a[Pt],a.hasOwnProperty(Pt)&&J!=null&&!s.hasOwnProperty(Pt))switch(Pt){case"selected":t.selected=!1;break;default:Ne(t,n,Pt,null,s,J)}for(z in s)if(J=s[z],it=a[z],s.hasOwnProperty(z)&&J!==it&&(J!=null||it!=null))switch(z){case"selected":t.selected=J&&typeof J!="function"&&typeof J!="symbol";break;default:Ne(t,n,z,J,s,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Zt in a)J=a[Zt],a.hasOwnProperty(Zt)&&J!=null&&!s.hasOwnProperty(Zt)&&Ne(t,n,Zt,null,s,J);for(K in s)if(J=s[K],it=a[K],s.hasOwnProperty(K)&&J!==it&&(J!=null||it!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(r(137,n));break;default:Ne(t,n,K,J,s,it)}return;default:if(wu(n)){for(var Oe in a)J=a[Oe],a.hasOwnProperty(Oe)&&J!==void 0&&!s.hasOwnProperty(Oe)&&gf(t,n,Oe,void 0,s,J);for(ut in s)J=s[ut],it=a[ut],!s.hasOwnProperty(ut)||J===it||J===void 0&&it===void 0||gf(t,n,ut,J,s,it);return}}for(var k in a)J=a[k],a.hasOwnProperty(k)&&J!=null&&!s.hasOwnProperty(k)&&Ne(t,n,k,null,s,J);for(dt in s)J=s[dt],it=a[dt],!s.hasOwnProperty(dt)||J===it||J==null&&it==null||Ne(t,n,dt,J,s,it)}function Fm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function rS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,g=u.initiatorType,E=u.duration;if(f&&E&&Fm(g)){for(g=0,E=u.responseEnd,s+=1;s<a.length;s++){var z=a[s],K=z.startTime;if(K>E)break;var ut=z.transferSize,dt=z.initiatorType;ut&&Fm(dt)&&(z=z.responseEnd,g+=ut*(z<E?1:(E-K)/(z-K)))}if(--s,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var _f=null,vf=null;function Ll(t){return t.nodeType===9?t:t.ownerDocument}function Hm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Sf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xf=null;function sS(){var t=window.event;return t&&t.type==="popstate"?t===xf?!1:(xf=t,!0):(xf=null,!1)}var Vm=typeof setTimeout=="function"?setTimeout:void 0,oS=typeof clearTimeout=="function"?clearTimeout:void 0,Xm=typeof Promise=="function"?Promise:void 0,lS=typeof queueMicrotask=="function"?queueMicrotask:typeof Xm<"u"?function(t){return Xm.resolve(null).then(t).catch(uS)}:Vm;function uS(t){setTimeout(function(){throw t})}function xa(t){return t==="head"}function km(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),es(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")go(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,go(a);for(var f=a.firstChild;f;){var g=f.nextSibling,E=f.nodeName;f[Y]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&go(t.ownerDocument.body);a=u}while(a);es(n)}function Wm(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Mf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Mf(a),bt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function cS(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Y])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ni(t.nextSibling),t===null)break}return null}function fS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ni(t.nextSibling),t===null))return null;return t}function qm(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ni(t.nextSibling),t===null))return null;return t}function yf(t){return t.data==="$?"||t.data==="$~"}function Ef(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function hS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ni(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Tf=null;function Ym(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ni(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function jm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Zm(t,n,a){switch(n=Ll(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function go(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);bt(t)}var ii=new Map,Km=new Set;function Nl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ki=q.d;q.d={f:dS,r:pS,D:mS,C:gS,L:_S,m:vS,X:xS,S:SS,M:MS};function dS(){var t=ki.f(),n=Tl();return t||n}function pS(t){var n=Nt(t);n!==null&&n.tag===5&&n.type==="form"?dp(n):ki.r(t)}var Jr=typeof document>"u"?null:document;function Qm(t,n,a){var s=Jr;if(s&&typeof n=="string"&&n){var u=wn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Km.has(u)||(Km.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),gn(n,"link",t),Ot(n),s.head.appendChild(n)))}}function mS(t){ki.D(t),Qm("dns-prefetch",t,null)}function gS(t,n){ki.C(t,n),Qm("preconnect",t,n)}function _S(t,n,a){ki.L(t,n,a);var s=Jr;if(s&&t&&n){var u='link[rel="preload"][as="'+wn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+wn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+wn(a.imageSizes)+'"]')):u+='[href="'+wn(t)+'"]';var f=u;switch(n){case"style":f=$r(t);break;case"script":f=ts(t)}ii.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ii.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(_o(f))||n==="script"&&s.querySelector(vo(f))||(n=s.createElement("link"),gn(n,"link",t),Ot(n),s.head.appendChild(n)))}}function vS(t,n){ki.m(t,n);var a=Jr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+wn(s)+'"][href="'+wn(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ts(t)}if(!ii.has(f)&&(t=S({rel:"modulepreload",href:t},n),ii.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}s=a.createElement("link"),gn(s,"link",t),Ot(s),a.head.appendChild(s)}}}function SS(t,n,a){ki.S(t,n,a);var s=Jr;if(s&&t){var u=Xt(s).hoistableStyles,f=$r(t);n=n||"default";var g=u.get(f);if(!g){var E={loading:0,preload:null};if(g=s.querySelector(_o(f)))E.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ii.get(f))&&Af(t,a);var z=g=s.createElement("link");Ot(z),gn(z,"link",t),z._p=new Promise(function(K,ut){z.onload=K,z.onerror=ut}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Ol(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:E},u.set(f,g)}}}function xS(t,n){ki.X(t,n);var a=Jr;if(a&&t){var s=Xt(a).hoistableScripts,u=ts(t),f=s.get(u);f||(f=a.querySelector(vo(u)),f||(t=S({src:t,async:!0},n),(n=ii.get(u))&&bf(t,n),f=a.createElement("script"),Ot(f),gn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function MS(t,n){ki.M(t,n);var a=Jr;if(a&&t){var s=Xt(a).hoistableScripts,u=ts(t),f=s.get(u);f||(f=a.querySelector(vo(u)),f||(t=S({src:t,async:!0,type:"module"},n),(n=ii.get(u))&&bf(t,n),f=a.createElement("script"),Ot(f),gn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Jm(t,n,a,s){var u=(u=xt.current)?Nl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$r(a.href),a=Xt(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$r(a.href);var f=Xt(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(_o(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ii.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ii.set(t,a),f||yS(u,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ts(a),a=Xt(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function $r(t){return'href="'+wn(t)+'"'}function _o(t){return'link[rel="stylesheet"]['+t+"]"}function $m(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function yS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),gn(n,"link",a),Ot(n),t.head.appendChild(n))}function ts(t){return'[src="'+wn(t)+'"]'}function vo(t){return"script[async]"+t}function tg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+wn(a.href)+'"]');if(s)return n.instance=s,Ot(s),s;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Ot(s),gn(s,"style",u),Ol(s,a.precedence,t),n.instance=s;case"stylesheet":u=$r(a.href);var f=t.querySelector(_o(u));if(f)return n.state.loading|=4,n.instance=f,Ot(f),f;s=$m(a),(u=ii.get(u))&&Af(s,u),f=(t.ownerDocument||t).createElement("link"),Ot(f);var g=f;return g._p=new Promise(function(E,z){g.onload=E,g.onerror=z}),gn(f,"link",s),n.state.loading|=4,Ol(f,a.precedence,t),n.instance=f;case"script":return f=ts(a.src),(u=t.querySelector(vo(f)))?(n.instance=u,Ot(u),u):(s=a,(u=ii.get(f))&&(s=S({},a),bf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),Ot(u),gn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ol(s,a.precedence,t));return n.instance}function Ol(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,g=0;g<s.length;g++){var E=s[g];if(E.dataset.precedence===n)f=E;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Af(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Pl=null;function eg(t,n,a){if(Pl===null){var s=new Map,u=Pl=new Map;u.set(a,s)}else u=Pl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Y]||f[an]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var E=s.get(g);E?E.push(f):s.set(g,[f])}}return s}function ng(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function ES(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ig(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function TS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=$r(s.href),f=n.querySelector(_o(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=zl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Ot(f);return}f=n.ownerDocument||n,s=$m(s),(u=ii.get(u))&&Af(s,u),f=f.createElement("link"),Ot(f);var g=f;g._p=new Promise(function(E,z){g.onload=E,g.onerror=z}),gn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=zl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Rf=0;function AS(t,n){return t.stylesheets&&t.count===0&&Il(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Il(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Rf===0&&(Rf=62500*rS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Il(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Rf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Il(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Bl=null;function Il(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bl=new Map,n.forEach(bS,t),Bl=null,zl.call(t))}function bS(t,n){if(!(n.state.loading&4)){var a=Bl.get(t);if(a)var s=a.get(null);else{a=new Map,Bl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,u),a.set(g,u),this.count++,s=zl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var So={$$typeof:w,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function RS(t,n,a,s,u,f,g,E,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bn(0),this.hiddenUpdates=bn(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function ag(t,n,a,s,u,f,g,E,z,K,ut,dt){return t=new RS(t,n,a,g,z,K,ut,dt,E),n=1,f===!0&&(n|=24),f=Gn(3,null,null,n),t.current=f,f.stateNode=t,n=rc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},uc(f),t}function rg(t){return t?(t=Ur,t):Ur}function sg(t,n,a,s,u,f){u=rg(u),s.context===null?s.context=u:s.pendingContext=u,s=ua(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ca(t,s,n),a!==null&&(Pn(a,t,n),Ks(a,t,n))}function og(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Cf(t,n){og(t,n),(t=t.alternate)&&og(t,n)}function lg(t){if(t.tag===13||t.tag===31){var n=ka(t,67108864);n!==null&&Pn(n,t,67108864),Cf(t,67108864)}}function ug(t){if(t.tag===13||t.tag===31){var n=qn();n=ea(n);var a=ka(t,n);a!==null&&Pn(a,t,n),Cf(t,n)}}var Fl=!0;function CS(t,n,a,s){var u=L.T;L.T=null;var f=q.p;try{q.p=2,wf(t,n,a,s)}finally{q.p=f,L.T=u}}function wS(t,n,a,s){var u=L.T;L.T=null;var f=q.p;try{q.p=8,wf(t,n,a,s)}finally{q.p=f,L.T=u}}function wf(t,n,a,s){if(Fl){var u=Df(s);if(u===null)mf(t,n,s,Hl,a),fg(t,s);else if(US(u,t,n,a,s))s.stopPropagation();else if(fg(t,s),n&4&&-1<DS.indexOf(t)){for(;u!==null;){var f=Nt(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Wt(f.pendingLanes);if(g!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var z=1<<31-Kt(g);E.entanglements[1]|=z,g&=~z}Si(f),(Ae&6)===0&&(yl=gt()+500,ho(0))}}break;case 31:case 13:E=ka(f,2),E!==null&&Pn(E,f,2),Tl(),Cf(f,2)}if(f=Df(s),f===null&&mf(t,n,s,Hl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else mf(t,n,s,null,a)}}function Df(t){return t=Uu(t),Uf(t)}var Hl=null;function Uf(t){if(Hl=null,t=Dt(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Hl=t,null}function cg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case Vt:return 2;case wt:return 8;case Ct:case ee:return 32;case Tt:return 268435456;default:return 32}default:return 32}}var Lf=!1,Ma=null,ya=null,Ea=null,xo=new Map,Mo=new Map,Ta=[],DS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function fg(t,n){switch(t){case"focusin":case"focusout":Ma=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":Ea=null;break;case"pointerover":case"pointerout":xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function yo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Nt(n),n!==null&&lg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function US(t,n,a,s,u){switch(n){case"focusin":return Ma=yo(Ma,t,n,a,s,u),!0;case"dragenter":return ya=yo(ya,t,n,a,s,u),!0;case"mouseover":return Ea=yo(Ea,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return xo.set(f,yo(xo.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Mo.set(f,yo(Mo.get(f)||null,t,n,a,s,u)),!0}return!1}function hg(t){var n=Dt(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ns(t.priority,function(){ug(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ns(t.priority,function(){ug(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Df(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Du=s,a.target.dispatchEvent(s),Du=null}else return n=Nt(a),n!==null&&lg(n),t.blockedOn=a,!1;n.shift()}return!0}function dg(t,n,a){Gl(t)&&a.delete(n)}function LS(){Lf=!1,Ma!==null&&Gl(Ma)&&(Ma=null),ya!==null&&Gl(ya)&&(ya=null),Ea!==null&&Gl(Ea)&&(Ea=null),xo.forEach(dg),Mo.forEach(dg)}function Vl(t,n){t.blockedOn===n&&(t.blockedOn=null,Lf||(Lf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,LS)))}var Xl=null;function pg(t){Xl!==t&&(Xl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Xl===t&&(Xl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Uf(s||a)===null)continue;break}var f=Nt(a);f!==null&&(t.splice(n,3),n-=3,wc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function es(t){function n(z){return Vl(z,t)}Ma!==null&&Vl(Ma,t),ya!==null&&Vl(ya,t),Ea!==null&&Vl(Ea,t),xo.forEach(n),Mo.forEach(n);for(var a=0;a<Ta.length;a++){var s=Ta[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ta.length&&(a=Ta[0],a.blockedOn===null);)hg(a),a.blockedOn===null&&Ta.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],g=u[vn]||null;if(typeof f=="function")g||pg(a);else if(g){var E=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[vn]||null)E=g.formAction;else if(Uf(u)!==null)continue}else E=g.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),pg(a)}}}function mg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Nf(t){this._internalRoot=t}kl.prototype.render=Nf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=qn();sg(a,s,t,n,null,null)},kl.prototype.unmount=Nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;sg(t.current,2,null,t,null,null),Tl(),n[na]=null}};function kl(t){this._internalRoot=t}kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ha();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ta.length&&n!==0&&n<Ta[a].priority;a++);Ta.splice(a,0,t),a===0&&hg(t)}};var gg=e.version;if(gg!=="19.2.4")throw Error(r(527,gg,"19.2.4"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var NS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{jt=Wl.inject(NS),Rt=Wl}catch{}}return To.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Ep,f=Tp,g=Ap;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=ag(t,1,!1,null,null,a,s,null,u,f,g,mg),t[na]=n.current,pf(t),new Nf(n)},To.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Ep,g=Tp,E=Ap,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=ag(t,1,!0,n,a??null,s,u,z,f,g,E,mg),n.context=rg(null),a=n.current,s=qn(),s=ea(s),u=ua(s),u.callback=null,ca(a,u,s),a=s,n.current.lanes=a,_n(n,a),Si(n),t[na]=n.current,pf(t),new kl(n)},To.version="19.2.4",To}var bg;function qS(){if(bg)return zf.exports;bg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),zf.exports=WS(),zf.exports}var YS=qS();const Rg=o=>{let e;const i=new Set,r=(p,_)=>{const S=typeof p=="function"?p(e):p;if(!Object.is(S,e)){const x=e;e=_??(typeof S!="object"||S===null)?S:Object.assign({},e,S),i.forEach(y=>y(e,x))}},l=()=>e,d={setState:r,getState:l,getInitialState:()=>m,subscribe:p=>(i.add(p),()=>i.delete(p))},m=e=o(r,l,d);return d},jS=(o=>o?Rg(o):Rg),ZS=o=>o;function KS(o,e=ZS){const i=ql.useSyncExternalStore(o.subscribe,ql.useCallback(()=>e(o.getState()),[o,e]),ql.useCallback(()=>e(o.getInitialState()),[o,e]));return ql.useDebugValue(i),i}const Cg=o=>{const e=jS(o),i=r=>KS(e,r);return Object.assign(i,e),i},QS=(o=>o?Cg(o):Cg),wg="goclaw:token",ta=QS(o=>({token:localStorage.getItem(wg)??"",connected:!1,snapshot:null,setToken:e=>{localStorage.setItem(wg,e),o({token:e})},setConnected:e=>o({connected:e}),setSnapshot:e=>o({snapshot:e})}));class JS{constructor(){ai(this,"es",null);ai(this,"retryDelay",1e3);ai(this,"maxRetry",3e4);ai(this,"token","");ai(this,"handlers",{snapshot:new Set,connected:new Set,disconnected:new Set})}connect(e){this.token=e,this.doConnect()}doConnect(){this.es&&this.es.close();const e=`/office/events?token=${encodeURIComponent(this.token)}`;this.es=new EventSource(e),this.es.onopen=()=>{this.retryDelay=1e3,this.handlers.connected.forEach(i=>i())},this.es.onmessage=i=>{try{const r=JSON.parse(i.data);this.handlers.snapshot.forEach(l=>l(r))}catch{}},this.es.onerror=()=>{var i;this.handlers.disconnected.forEach(r=>r()),(i=this.es)==null||i.close(),this.es=null,setTimeout(()=>this.doConnect(),this.retryDelay),this.retryDelay=Math.min(this.retryDelay*2,this.maxRetry)}}disconnect(){this.es&&(this.es.close(),this.es=null)}on(e,i){return e==="snapshot"?(this.handlers.snapshot.add(i),()=>this.handlers.snapshot.delete(i)):e==="connected"?(this.handlers.connected.add(i),()=>this.handlers.connected.delete(i)):(this.handlers.disconnected.add(i),()=>this.handlers.disconnected.delete(i))}}function $S(o){const e=ta(l=>l.setSnapshot),i=ta(l=>l.setConnected),r=$i.useRef(null);$i.useEffect(()=>{if(!o)return;const l=new JS;return r.current=l,l.on("snapshot",e),l.on("connected",()=>i(!0)),l.on("disconnected",()=>i(!1)),l.connect(o),()=>{l.disconnect(),r.current=null}},[o,e,i])}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wh="165",tx=0,Dg=1,ex=2,J_=1,nx=2,Ki=3,za=0,In=1,Qi=2,Oa=0,xs=1,Ug=2,Lg=3,Ng=4,ix=5,fr=100,ax=101,rx=102,sx=103,ox=104,lx=200,ux=201,cx=202,fx=203,xh=204,Mh=205,hx=206,dx=207,px=208,mx=209,gx=210,_x=211,vx=212,Sx=213,xx=214,Mx=0,yx=1,Ex=2,_u=3,Tx=4,Ax=5,bx=6,Rx=7,$_=0,Cx=1,wx=2,Pa=0,Dx=1,Ux=2,Lx=3,Nx=4,Ox=5,Px=6,zx=7,tv=300,Es=301,Ts=302,yh=303,Eh=304,Tu=306,Th=1e3,dr=1001,Ah=1002,oi=1003,Bx=1004,Yl=1005,mi=1006,Hf=1007,pr=1008,Ba=1009,Ix=1010,Fx=1011,vu=1012,ev=1013,As=1014,Na=1015,Au=1016,nv=1017,iv=1018,bs=1020,Hx=35902,Gx=1021,Vx=1022,Ei=1023,Xx=1024,kx=1025,Ms=1026,Rs=1027,Wx=1028,av=1029,qx=1030,rv=1031,sv=1033,Gf=33776,Vf=33777,Xf=33778,kf=33779,Og=35840,Pg=35841,zg=35842,Bg=35843,Ig=36196,Fg=37492,Hg=37496,Gg=37808,Vg=37809,Xg=37810,kg=37811,Wg=37812,qg=37813,Yg=37814,jg=37815,Zg=37816,Kg=37817,Qg=37818,Jg=37819,$g=37820,t_=37821,Wf=36492,e_=36494,n_=36495,Yx=36283,i_=36284,a_=36285,r_=36286,jx=3200,Zx=3201,ov=0,Kx=1,La="",xi="srgb",Fa="srgb-linear",Dh="display-p3",bu="display-p3-linear",Su="linear",Fe="srgb",xu="rec709",Mu="p3",ns=7680,s_=519,Qx=512,Jx=513,$x=514,lv=515,tM=516,eM=517,nM=518,iM=519,o_=35044,l_="300 es",Ji=2e3,yu=2001;class ws{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qf=Math.PI/180,bh=180/Math.PI;function Uo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xn[o&255]+xn[o>>8&255]+xn[o>>16&255]+xn[o>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[i&63|128]+xn[i>>8&255]+"-"+xn[i>>16&255]+xn[i>>24&255]+xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]).toLowerCase()}function Bn(o,e,i){return Math.max(e,Math.min(i,o))}function aM(o,e){return(o%e+e)%e}function Yf(o,e,i){return(1-i)*o+i*e}function Ao(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function zn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Se{constructor(e=0,i=0){Se.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Bn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ae{constructor(e,i,r,l,c,h,d,m,p){ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],S=r[7],x=r[2],y=r[5],b=r[8],C=l[0],M=l[3],v=l[6],B=l[1],w=l[4],P=l[7],nt=l[2],F=l[5],O=l[8];return c[0]=h*C+d*B+m*nt,c[3]=h*M+d*w+m*F,c[6]=h*v+d*P+m*O,c[1]=p*C+_*B+S*nt,c[4]=p*M+_*w+S*F,c[7]=p*v+_*P+S*O,c[2]=x*C+y*B+b*nt,c[5]=x*M+y*w+b*F,c[8]=x*v+y*P+b*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-r*c*_+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],S=_*h-d*p,x=d*m-_*c,y=p*c-h*m,b=i*S+r*x+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=S*C,e[1]=(l*p-_*r)*C,e[2]=(d*r-l*h)*C,e[3]=x*C,e[4]=(_*i-l*m)*C,e[5]=(l*c-d*i)*C,e[6]=y*C,e[7]=(r*m-p*i)*C,e[8]=(h*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(jf.makeScale(e,i)),this}rotate(e){return this.premultiply(jf.makeRotation(-e)),this}translate(e,i){return this.premultiply(jf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jf=new ae;function uv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Eu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function rM(){const o=Eu("canvas");return o.style.display="block",o}const u_={};function cv(o){o in u_||(u_[o]=!0,console.warn(o))}function sM(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const c_=new ae().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),f_=new ae().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jl={[Fa]:{transfer:Su,primaries:xu,toReference:o=>o,fromReference:o=>o},[xi]:{transfer:Fe,primaries:xu,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[bu]:{transfer:Su,primaries:Mu,toReference:o=>o.applyMatrix3(f_),fromReference:o=>o.applyMatrix3(c_)},[Dh]:{transfer:Fe,primaries:Mu,toReference:o=>o.convertSRGBToLinear().applyMatrix3(f_),fromReference:o=>o.applyMatrix3(c_).convertLinearToSRGB()}},oM=new Set([Fa,bu]),Ue={enabled:!0,_workingColorSpace:Fa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!oM.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=jl[e].toReference,l=jl[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return jl[o].primaries},getTransfer:function(o){return o===La?Su:jl[o].transfer}};function ys(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Zf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let is;class lM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{is===void 0&&(is=Eu("canvas")),is.width=e.width,is.height=e.height;const r=is.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=is}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Eu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ys(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ys(i[r]/255)*255):i[r]=ys(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uM=0;class fv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Kf(l[h].image)):c.push(Kf(l[h]))}else c=Kf(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Kf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?lM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cM=0;class Fn extends ws{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=dr,l=dr,c=mi,h=pr,d=Ei,m=Ba,p=Fn.DEFAULT_ANISOTROPY,_=La){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Uo(),this.name="",this.source=new fv(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Th:e.x=e.x-Math.floor(e.x);break;case dr:e.x=e.x<0?0:1;break;case Ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Th:e.y=e.y-Math.floor(e.y);break;case dr:e.y=e.y<0?0:1;break;case Ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=tv;Fn.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,i=0,r=0,l=1){cn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],_=m[4],S=m[8],x=m[1],y=m[5],b=m[9],C=m[2],M=m[6],v=m[10];if(Math.abs(_-x)<.01&&Math.abs(S-C)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(S+C)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(p+1)/2,P=(y+1)/2,nt=(v+1)/2,F=(_+x)/4,O=(S+C)/4,Q=(b+M)/4;return w>P&&w>nt?w<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(w),l=F/r,c=O/r):P>nt?P<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),r=F/l,c=Q/l):nt<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(nt),r=O/c,l=Q/c),this.set(r,l,c,i),this}let B=Math.sqrt((M-b)*(M-b)+(S-C)*(S-C)+(x-_)*(x-_));return Math.abs(B)<.001&&(B=1),this.x=(M-b)/B,this.y=(S-C)/B,this.z=(x-_)/B,this.w=Math.acos((p+y+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fM extends ws{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new cn(0,0,e,i),this.scissorTest=!1,this.viewport=new cn(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new Fn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new fv(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gr extends fM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class hv extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hM extends Fn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],S=r[l+3];const x=c[h+0],y=c[h+1],b=c[h+2],C=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=S;return}if(d===1){e[i+0]=x,e[i+1]=y,e[i+2]=b,e[i+3]=C;return}if(S!==C||m!==x||p!==y||_!==b){let M=1-d;const v=m*x+p*y+_*b+S*C,B=v>=0?1:-1,w=1-v*v;if(w>Number.EPSILON){const nt=Math.sqrt(w),F=Math.atan2(nt,v*B);M=Math.sin(M*F)/nt,d=Math.sin(d*F)/nt}const P=d*B;if(m=m*M+x*P,p=p*M+y*P,_=_*M+b*P,S=S*M+C*P,M===1-d){const nt=1/Math.sqrt(m*m+p*p+_*_+S*S);m*=nt,p*=nt,_*=nt,S*=nt}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=S}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],S=c[h],x=c[h+1],y=c[h+2],b=c[h+3];return e[i]=d*b+_*S+m*y-p*x,e[i+1]=m*b+_*x+p*S-d*y,e[i+2]=p*b+_*y+d*x-m*S,e[i+3]=_*b-d*S-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),S=d(c/2),x=m(r/2),y=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=x*_*S+p*y*b,this._y=p*y*S-x*_*b,this._z=p*_*b+x*y*S,this._w=p*_*S-x*y*b;break;case"YXZ":this._x=x*_*S+p*y*b,this._y=p*y*S-x*_*b,this._z=p*_*b-x*y*S,this._w=p*_*S+x*y*b;break;case"ZXY":this._x=x*_*S-p*y*b,this._y=p*y*S+x*_*b,this._z=p*_*b+x*y*S,this._w=p*_*S-x*y*b;break;case"ZYX":this._x=x*_*S-p*y*b,this._y=p*y*S+x*_*b,this._z=p*_*b-x*y*S,this._w=p*_*S+x*y*b;break;case"YZX":this._x=x*_*S+p*y*b,this._y=p*y*S+x*_*b,this._z=p*_*b-x*y*S,this._w=p*_*S-x*y*b;break;case"XZY":this._x=x*_*S-p*y*b,this._y=p*y*S-x*_*b,this._z=p*_*b+x*y*S,this._w=p*_*S+x*y*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],S=i[10],x=r+d+S;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(_-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(r>d&&r>S){const y=2*Math.sqrt(1+r-d-S);this._w=(_-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>S){const y=2*Math.sqrt(1+d-r-S);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+S-r-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bn(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-r*p,this._z=c*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),S=Math.sin((1-i)*_)/p,x=Math.sin(i*_)/p;return this._w=h*S+this._w*x,this._x=r*S+this._x*x,this._y=l*S+this._y*x,this._z=c*S+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(e=0,i=0,r=0){at.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(h_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(h_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),_=2*(d*i-c*l),S=2*(c*r-h*i);return this.x=i+m*p+h*S-d*_,this.y=r+m*_+d*p-c*S,this.z=l+m*S+c*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Qf.copy(this).projectOnVector(e),this.sub(Qf)}reflect(e){return this.sub(Qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Bn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qf=new at,h_=new Lo;class No{constructor(e=new at(1/0,1/0,1/0),i=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(hi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(hi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=hi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,hi):hi.fromBufferAttribute(c,h),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Zl.copy(r.boundingBox)),Zl.applyMatrix4(e.matrixWorld),this.union(Zl)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),Kl.subVectors(this.max,bo),as.subVectors(e.a,bo),rs.subVectors(e.b,bo),ss.subVectors(e.c,bo),ba.subVectors(rs,as),Ra.subVectors(ss,rs),ir.subVectors(as,ss);let i=[0,-ba.z,ba.y,0,-Ra.z,Ra.y,0,-ir.z,ir.y,ba.z,0,-ba.x,Ra.z,0,-Ra.x,ir.z,0,-ir.x,-ba.y,ba.x,0,-Ra.y,Ra.x,0,-ir.y,ir.x,0];return!Jf(i,as,rs,ss,Kl)||(i=[1,0,0,0,1,0,0,0,1],!Jf(i,as,rs,ss,Kl))?!1:(Ql.crossVectors(ba,Ra),i=[Ql.x,Ql.y,Ql.z],Jf(i,as,rs,ss,Kl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wi=[new at,new at,new at,new at,new at,new at,new at,new at],hi=new at,Zl=new No,as=new at,rs=new at,ss=new at,ba=new at,Ra=new at,ir=new at,bo=new at,Kl=new at,Ql=new at,ar=new at;function Jf(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){ar.fromArray(o,c);const d=l.x*Math.abs(ar.x)+l.y*Math.abs(ar.y)+l.z*Math.abs(ar.z),m=e.dot(ar),p=i.dot(ar),_=r.dot(ar);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const dM=new No,Ro=new at,$f=new at;class Uh{constructor(e=new at,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):dM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const i=Ro.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ro,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($f.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add($f)),this.expandByPoint(Ro.copy(e.center).sub($f))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qi=new at,th=new at,Jl=new at,Ca=new at,eh=new at,$l=new at,nh=new at;class pM{constructor(e=new at,i=new at(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=qi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,i),qi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){th.copy(e).add(i).multiplyScalar(.5),Jl.copy(i).sub(e).normalize(),Ca.copy(this.origin).sub(th);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Jl),d=Ca.dot(this.direction),m=-Ca.dot(Jl),p=Ca.lengthSq(),_=Math.abs(1-h*h);let S,x,y,b;if(_>0)if(S=h*m-d,x=h*d-m,b=c*_,S>=0)if(x>=-b)if(x<=b){const C=1/_;S*=C,x*=C,y=S*(S+h*x+2*d)+x*(h*S+x+2*m)+p}else x=c,S=Math.max(0,-(h*x+d)),y=-S*S+x*(x+2*m)+p;else x=-c,S=Math.max(0,-(h*x+d)),y=-S*S+x*(x+2*m)+p;else x<=-b?(S=Math.max(0,-(-h*c+d)),x=S>0?-c:Math.min(Math.max(-c,-m),c),y=-S*S+x*(x+2*m)+p):x<=b?(S=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(S=Math.max(0,-(h*c+d)),x=S>0?c:Math.min(Math.max(-c,-m),c),y=-S*S+x*(x+2*m)+p);else x=h>0?-c:c,S=Math.max(0,-(h*x+d)),y=-S*S+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(th).addScaledVector(Jl,x),y}intersectSphere(e,i){qi.subVectors(e.center,this.origin);const r=qi.dot(this.direction),l=qi.dot(qi)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),_>=0?(c=(e.min.y-x.y)*_,h=(e.max.y-x.y)*_):(c=(e.max.y-x.y)*_,h=(e.min.y-x.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),S>=0?(d=(e.min.z-x.z)*S,m=(e.max.z-x.z)*S):(d=(e.max.z-x.z)*S,m=(e.min.z-x.z)*S),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,i,r,l,c){eh.subVectors(i,e),$l.subVectors(r,e),nh.crossVectors(eh,$l);let h=this.direction.dot(nh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ca.subVectors(this.origin,e);const m=d*this.direction.dot($l.crossVectors(Ca,$l));if(m<0)return null;const p=d*this.direction.dot(eh.cross(Ca));if(p<0||m+p>h)return null;const _=-d*Ca.dot(nh);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,i,r,l,c,h,d,m,p,_,S,x,y,b,C,M){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,_,S,x,y,b,C,M)}set(e,i,r,l,c,h,d,m,p,_,S,x,y,b,C,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=S,v[14]=x,v[3]=y,v[7]=b,v[11]=C,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/os.setFromMatrixColumn(e,0).length(),c=1/os.setFromMatrixColumn(e,1).length(),h=1/os.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const x=h*_,y=h*S,b=d*_,C=d*S;i[0]=m*_,i[4]=-m*S,i[8]=p,i[1]=y+b*p,i[5]=x-C*p,i[9]=-d*m,i[2]=C-x*p,i[6]=b+y*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*_,y=m*S,b=p*_,C=p*S;i[0]=x+C*d,i[4]=b*d-y,i[8]=h*p,i[1]=h*S,i[5]=h*_,i[9]=-d,i[2]=y*d-b,i[6]=C+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*_,y=m*S,b=p*_,C=p*S;i[0]=x-C*d,i[4]=-h*S,i[8]=b+y*d,i[1]=y+b*d,i[5]=h*_,i[9]=C-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*_,y=h*S,b=d*_,C=d*S;i[0]=m*_,i[4]=b*p-y,i[8]=x*p+C,i[1]=m*S,i[5]=C*p+x,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*_,i[4]=C-x*S,i[8]=b*S+y,i[1]=S,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=y*S+b,i[10]=x-C*S}else if(e.order==="XZY"){const x=h*m,y=h*p,b=d*m,C=d*p;i[0]=m*_,i[4]=-S,i[8]=p*_,i[1]=x*S+C,i[5]=h*_,i[9]=y*S-b,i[2]=b*S-y,i[6]=d*_,i[10]=C*S+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mM,e,gM)}lookAt(e,i,r){const l=this.elements;return Yn.subVectors(e,i),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),wa.crossVectors(r,Yn),wa.lengthSq()===0&&(Math.abs(r.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),wa.crossVectors(r,Yn)),wa.normalize(),tu.crossVectors(Yn,wa),l[0]=wa.x,l[4]=tu.x,l[8]=Yn.x,l[1]=wa.y,l[5]=tu.y,l[9]=Yn.y,l[2]=wa.z,l[6]=tu.z,l[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],S=r[5],x=r[9],y=r[13],b=r[2],C=r[6],M=r[10],v=r[14],B=r[3],w=r[7],P=r[11],nt=r[15],F=l[0],O=l[4],Q=l[8],D=l[12],R=l[1],V=l[5],lt=l[9],st=l[13],pt=l[2],ht=l[6],L=l[10],q=l[14],j=l[3],yt=l[7],Et=l[11],U=l[15];return c[0]=h*F+d*R+m*pt+p*j,c[4]=h*O+d*V+m*ht+p*yt,c[8]=h*Q+d*lt+m*L+p*Et,c[12]=h*D+d*st+m*q+p*U,c[1]=_*F+S*R+x*pt+y*j,c[5]=_*O+S*V+x*ht+y*yt,c[9]=_*Q+S*lt+x*L+y*Et,c[13]=_*D+S*st+x*q+y*U,c[2]=b*F+C*R+M*pt+v*j,c[6]=b*O+C*V+M*ht+v*yt,c[10]=b*Q+C*lt+M*L+v*Et,c[14]=b*D+C*st+M*q+v*U,c[3]=B*F+w*R+P*pt+nt*j,c[7]=B*O+w*V+P*ht+nt*yt,c[11]=B*Q+w*lt+P*L+nt*Et,c[15]=B*D+w*st+P*q+nt*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],S=e[6],x=e[10],y=e[14],b=e[3],C=e[7],M=e[11],v=e[15];return b*(+c*m*S-l*p*S-c*d*x+r*p*x+l*d*y-r*m*y)+C*(+i*m*y-i*p*x+c*h*x-l*h*y+l*p*_-c*m*_)+M*(+i*p*S-i*d*y-c*h*S+r*h*y+c*d*_-r*p*_)+v*(-l*d*_-i*m*S+i*d*x+l*h*S-r*h*x+r*m*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],S=e[9],x=e[10],y=e[11],b=e[12],C=e[13],M=e[14],v=e[15],B=S*M*p-C*x*p+C*m*y-d*M*y-S*m*v+d*x*v,w=b*x*p-_*M*p-b*m*y+h*M*y+_*m*v-h*x*v,P=_*C*p-b*S*p+b*d*y-h*C*y-_*d*v+h*S*v,nt=b*S*m-_*C*m-b*d*x+h*C*x+_*d*M-h*S*M,F=i*B+r*w+l*P+c*nt;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=B*O,e[1]=(C*x*c-S*M*c-C*l*y+r*M*y+S*l*v-r*x*v)*O,e[2]=(d*M*c-C*m*c+C*l*p-r*M*p-d*l*v+r*m*v)*O,e[3]=(S*m*c-d*x*c-S*l*p+r*x*p+d*l*y-r*m*y)*O,e[4]=w*O,e[5]=(_*M*c-b*x*c+b*l*y-i*M*y-_*l*v+i*x*v)*O,e[6]=(b*m*c-h*M*c-b*l*p+i*M*p+h*l*v-i*m*v)*O,e[7]=(h*x*c-_*m*c+_*l*p-i*x*p-h*l*y+i*m*y)*O,e[8]=P*O,e[9]=(b*S*c-_*C*c-b*r*y+i*C*y+_*r*v-i*S*v)*O,e[10]=(h*C*c-b*d*c+b*r*p-i*C*p-h*r*v+i*d*v)*O,e[11]=(_*d*c-h*S*c-_*r*p+i*S*p+h*r*y-i*d*y)*O,e[12]=nt*O,e[13]=(_*C*l-b*S*l+b*r*x-i*C*x-_*r*M+i*S*M)*O,e[14]=(b*d*l-h*C*l-b*r*m+i*C*m+h*r*M-i*d*M)*O,e[15]=(h*S*l-_*d*l+_*r*m-i*S*m-h*r*x+i*d*x)*O,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,_=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,S=d+d,x=c*p,y=c*_,b=c*S,C=h*_,M=h*S,v=d*S,B=m*p,w=m*_,P=m*S,nt=r.x,F=r.y,O=r.z;return l[0]=(1-(C+v))*nt,l[1]=(y+P)*nt,l[2]=(b-w)*nt,l[3]=0,l[4]=(y-P)*F,l[5]=(1-(x+v))*F,l[6]=(M+B)*F,l[7]=0,l[8]=(b+w)*O,l[9]=(M-B)*O,l[10]=(1-(x+C))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=os.set(l[0],l[1],l[2]).length();const h=os.set(l[4],l[5],l[6]).length(),d=os.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],di.copy(this);const p=1/c,_=1/h,S=1/d;return di.elements[0]*=p,di.elements[1]*=p,di.elements[2]*=p,di.elements[4]*=_,di.elements[5]*=_,di.elements[6]*=_,di.elements[8]*=S,di.elements[9]*=S,di.elements[10]*=S,i.setFromRotationMatrix(di),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Ji){const m=this.elements,p=2*c/(i-e),_=2*c/(r-l),S=(i+e)/(i-e),x=(r+l)/(r-l);let y,b;if(d===Ji)y=-(h+c)/(h-c),b=-2*h*c/(h-c);else if(d===yu)y=-h/(h-c),b=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=_,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Ji){const m=this.elements,p=1/(i-e),_=1/(r-l),S=1/(h-c),x=(i+e)*p,y=(r+l)*_;let b,C;if(d===Ji)b=(h+c)*S,C=-2*S;else if(d===yu)b=c*S,C=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=C,m[14]=-b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const os=new at,di=new je,mM=new at(0,0,0),gM=new at(1,1,1),wa=new at,tu=new at,Yn=new at,d_=new je,p_=new Lo;class bi{constructor(e=0,i=0,r=0,l=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],S=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Bn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Bn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Bn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Bn(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Bn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Bn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return d_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(d_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return p_.setFromEuler(this),this.setFromQuaternion(p_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class dv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _M=0;const m_=new at,ls=new Lo,Yi=new je,eu=new at,Co=new at,vM=new at,SM=new Lo,g_=new at(1,0,0),__=new at(0,1,0),v_=new at(0,0,1),S_={type:"added"},xM={type:"removed"},us={type:"childadded",child:null},ih={type:"childremoved",child:null};class yn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new at,i=new bi,r=new Lo,l=new at(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new ae}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return ls.setFromAxisAngle(e,i),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,i){return ls.setFromAxisAngle(e,i),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(g_,e)}rotateY(e){return this.rotateOnAxis(__,e)}rotateZ(e){return this.rotateOnAxis(v_,e)}translateOnAxis(e,i){return m_.copy(e).applyQuaternion(this.quaternion),this.position.add(m_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(g_,e)}translateY(e){return this.translateOnAxis(__,e)}translateZ(e){return this.translateOnAxis(v_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?eu.copy(e):eu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Co,eu,this.up):Yi.lookAt(eu,Co,this.up),this.quaternion.setFromRotationMatrix(Yi),l&&(Yi.extractRotation(l.matrixWorld),ls.setFromRotationMatrix(Yi),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(S_),us.child=e,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(xM),ih.child=e,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(S_),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,vM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,SM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const c=i[r];(c.matrixWorldAutoUpdate===!0||e===!0)&&c.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++){const d=l[c];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const S=m[p];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),S=h(e.shapes),x=h(e.skeletons),y=h(e.animations),b=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}yn.DEFAULT_UP=new at(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new at,ji=new at,ah=new at,Zi=new at,cs=new at,fs=new at,x_=new at,rh=new at,sh=new at,oh=new at;class yi{constructor(e=new at,i=new at,r=new at){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),pi.subVectors(e,i),l.cross(pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){pi.subVectors(l,i),ji.subVectors(r,i),ah.subVectors(e,i);const h=pi.dot(pi),d=pi.dot(ji),m=pi.dot(ah),p=ji.dot(ji),_=ji.dot(ah),S=h*p-d*d;if(S===0)return c.set(0,0,0),null;const x=1/S,y=(p*m-d*_)*x,b=(h*_-d*m)*x;return c.set(1-y-b,b,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Zi)===null?!1:Zi.x>=0&&Zi.y>=0&&Zi.x+Zi.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,Zi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Zi.x),m.addScaledVector(h,Zi.y),m.addScaledVector(d,Zi.z),m)}static isFrontFacing(e,i,r,l){return pi.subVectors(r,i),ji.subVectors(e,i),pi.cross(ji).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),pi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return yi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;cs.subVectors(l,r),fs.subVectors(c,r),rh.subVectors(e,r);const m=cs.dot(rh),p=fs.dot(rh);if(m<=0&&p<=0)return i.copy(r);sh.subVectors(e,l);const _=cs.dot(sh),S=fs.dot(sh);if(_>=0&&S<=_)return i.copy(l);const x=m*S-_*p;if(x<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(cs,h);oh.subVectors(e,c);const y=cs.dot(oh),b=fs.dot(oh);if(b>=0&&y<=b)return i.copy(c);const C=y*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(r).addScaledVector(fs,d);const M=_*b-y*S;if(M<=0&&S-_>=0&&y-b>=0)return x_.subVectors(c,l),d=(S-_)/(S-_+(y-b)),i.copy(l).addScaledVector(x_,d);const v=1/(M+C+x);return h=C*v,d=x*v,i.copy(r).addScaledVector(cs,h).addScaledVector(fs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Da={h:0,s:0,l:0},nu={h:0,s:0,l:0};function lh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class be{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ue.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ue.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ue.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ue.workingColorSpace){if(e=aM(e,1),i=Bn(i,0,1),r=Bn(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=lh(h,c,e+1/3),this.g=lh(h,c,e),this.b=lh(h,c,e-1/3)}return Ue.toWorkingColorSpace(this,l),this}setStyle(e,i=xi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=xi){const r=pv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}copyLinearToSRGB(e){return this.r=Zf(e.r),this.g=Zf(e.g),this.b=Zf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Ue.fromWorkingColorSpace(Mn.copy(this),e),Math.round(Bn(Mn.r*255,0,255))*65536+Math.round(Bn(Mn.g*255,0,255))*256+Math.round(Bn(Mn.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ue.workingColorSpace){Ue.fromWorkingColorSpace(Mn.copy(this),i);const r=Mn.r,l=Mn.g,c=Mn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const S=h-d;switch(p=_<=.5?S/(h+d):S/(2-h-d),h){case r:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-r)/S+2;break;case c:m=(r-l)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(Mn.copy(this),i),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=xi){Ue.fromWorkingColorSpace(Mn.copy(this),e);const i=Mn.r,r=Mn.g,l=Mn.b;return e!==xi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Da),this.setHSL(Da.h+e,Da.s+i,Da.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Da),e.getHSL(nu);const r=Yf(Da.h,nu.h,i),l=Yf(Da.s,nu.s,i),c=Yf(Da.l,nu.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new be;be.NAMES=pv;let MM=0;class Oo extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=xs,this.side=za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=Mh,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=_u,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(r.blending=this.blending),this.side!==za&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==xh&&(r.blendSrc=this.blendSrc),this.blendDst!==Mh&&(r.blendDst=this.blendDst),this.blendEquation!==fr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==_u&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mv extends Oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=$_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nn=new at,iu=new Se;class Ai{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=o_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return cv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)iu.fromBufferAttribute(this,i),iu.applyMatrix3(e),this.setXY(i,iu.x,iu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix3(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix4(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyNormalMatrix(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.transformDirection(e),this.setXYZ(i,nn.x,nn.y,nn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ao(i,this.array)),i}setX(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ao(i,this.array)),i}setY(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ao(i,this.array)),i}setZ(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ao(i,this.array)),i}setW(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array),c=zn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==o_&&(e.usage=this.usage),e}}class gv extends Ai{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class _v extends Ai{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class mr extends Ai{constructor(e,i,r){super(new Float32Array(e),i,r)}}let yM=0;const ri=new je,uh=new yn,hs=new at,jn=new No,wo=new No,un=new at;class _r extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uv(e)?_v:gv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ae().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,i,r){return ri.makeTranslation(e,i,r),this.applyMatrix4(ri),this}scale(e,i,r){return ri.makeScale(e,i,r),this.applyMatrix4(ri),this}lookAt(e){return uh.lookAt(e),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const c=e[r];i.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new mr(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new No);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];jn.setFromBufferAttribute(c),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];wo.setFromBufferAttribute(d),this.morphTargetsRelative?(un.addVectors(jn.min,wo.min),jn.expandByPoint(un),un.addVectors(jn.max,wo.max),jn.expandByPoint(un)):(jn.expandByPoint(wo.min),jn.expandByPoint(wo.max))}jn.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)un.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(un));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)un.fromBufferAttribute(d,p),m&&(hs.fromBufferAttribute(e,p),un.add(hs)),l=Math.max(l,r.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Q=0;Q<r.count;Q++)d[Q]=new at,m[Q]=new at;const p=new at,_=new at,S=new at,x=new Se,y=new Se,b=new Se,C=new at,M=new at;function v(Q,D,R){p.fromBufferAttribute(r,Q),_.fromBufferAttribute(r,D),S.fromBufferAttribute(r,R),x.fromBufferAttribute(c,Q),y.fromBufferAttribute(c,D),b.fromBufferAttribute(c,R),_.sub(p),S.sub(p),y.sub(x),b.sub(x);const V=1/(y.x*b.y-b.x*y.y);isFinite(V)&&(C.copy(_).multiplyScalar(b.y).addScaledVector(S,-y.y).multiplyScalar(V),M.copy(S).multiplyScalar(y.x).addScaledVector(_,-b.x).multiplyScalar(V),d[Q].add(C),d[D].add(C),d[R].add(C),m[Q].add(M),m[D].add(M),m[R].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let Q=0,D=B.length;Q<D;++Q){const R=B[Q],V=R.start,lt=R.count;for(let st=V,pt=V+lt;st<pt;st+=3)v(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const w=new at,P=new at,nt=new at,F=new at;function O(Q){nt.fromBufferAttribute(l,Q),F.copy(nt);const D=d[Q];w.copy(D),w.sub(nt.multiplyScalar(nt.dot(D))).normalize(),P.crossVectors(F,D);const V=P.dot(m[Q])<0?-1:1;h.setXYZW(Q,w.x,w.y,w.z,V)}for(let Q=0,D=B.length;Q<D;++Q){const R=B[Q],V=R.start,lt=R.count;for(let st=V,pt=V+lt;st<pt;st+=3)O(e.getX(st+0)),O(e.getX(st+1)),O(e.getX(st+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ai(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new at,c=new at,h=new at,d=new at,m=new at,p=new at,_=new at,S=new at;if(e)for(let x=0,y=e.count;x<y;x+=3){const b=e.getX(x+0),C=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),_.subVectors(h,c),S.subVectors(l,c),_.cross(S),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),d.add(_),m.add(_),p.add(_),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,c),S.subVectors(l,c),_.cross(S),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)un.fromBufferAttribute(e,i),un.normalize(),e.setXYZ(i,un.x,un.y,un.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,S=d.normalized,x=new p.constructor(m.length*_);let y=0,b=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*_;for(let v=0;v<_;v++)x[b++]=p[y++]}return new Ai(x,_,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new _r,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,S=p.length;_<S;_++){const x=p[_],y=e(x,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let S=0,x=p.length;S<x;S++){const y=p[S];_.push(y.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],S=c[p];for(let x=0,y=S.length;x<y;x++)_.push(S[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const S=h[p];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const M_=new je,rr=new pM,au=new Uh,y_=new at,ds=new at,ps=new at,ms=new at,ch=new at,ru=new at,su=new Se,ou=new Se,lu=new Se,E_=new at,T_=new at,A_=new at,uu=new at,cu=new at;class Ti extends yn{constructor(e=new _r,i=new mv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){ru.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],S=c[m];_!==0&&(ch.fromBufferAttribute(S,e),h?ru.addScaledVector(ch,_):ru.addScaledVector(ch.sub(i),_))}i.add(ru)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),au.copy(r.boundingSphere),au.applyMatrix4(c),rr.copy(e.ray).recast(e.near),!(au.containsPoint(rr.origin)===!1&&(rr.intersectSphere(au,y_)===null||rr.origin.distanceToSquared(y_)>(e.far-e.near)**2))&&(M_.copy(c).invert(),rr.copy(e.ray).applyMatrix4(M_),!(r.boundingBox!==null&&rr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,rr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,S=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=x.length;b<C;b++){const M=x[b],v=h[M.materialIndex],B=Math.max(M.start,y.start),w=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let P=B,nt=w;P<nt;P+=3){const F=d.getX(P),O=d.getX(P+1),Q=d.getX(P+2);l=fu(this,v,e,r,p,_,S,F,O,Q),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=b,v=C;M<v;M+=3){const B=d.getX(M),w=d.getX(M+1),P=d.getX(M+2);l=fu(this,h,e,r,p,_,S,B,w,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=x.length;b<C;b++){const M=x[b],v=h[M.materialIndex],B=Math.max(M.start,y.start),w=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let P=B,nt=w;P<nt;P+=3){const F=P,O=P+1,Q=P+2;l=fu(this,v,e,r,p,_,S,F,O,Q),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=b,v=C;M<v;M+=3){const B=M,w=M+1,P=M+2;l=fu(this,h,e,r,p,_,S,B,w,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function EM(o,e,i,r,l,c,h,d){let m;if(e.side===In?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===za,d),m===null)return null;cu.copy(d),cu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(cu);return p<i.near||p>i.far?null:{distance:p,point:cu.clone(),object:o}}function fu(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,ds),o.getVertexPosition(m,ps),o.getVertexPosition(p,ms);const _=EM(o,e,i,r,ds,ps,ms,uu);if(_){l&&(su.fromBufferAttribute(l,d),ou.fromBufferAttribute(l,m),lu.fromBufferAttribute(l,p),_.uv=yi.getInterpolation(uu,ds,ps,ms,su,ou,lu,new Se)),c&&(su.fromBufferAttribute(c,d),ou.fromBufferAttribute(c,m),lu.fromBufferAttribute(c,p),_.uv1=yi.getInterpolation(uu,ds,ps,ms,su,ou,lu,new Se)),h&&(E_.fromBufferAttribute(h,d),T_.fromBufferAttribute(h,m),A_.fromBufferAttribute(h,p),_.normal=yi.getInterpolation(uu,ds,ps,ms,E_,T_,A_,new at),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new at,materialIndex:0};yi.getNormal(ds,ps,ms,S.normal),_.face=S}return _}class Po extends _r{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],S=[];let x=0,y=0;b("z","y","x",-1,-1,r,i,e,h,c,0),b("z","y","x",1,-1,r,i,-e,h,c,1),b("x","z","y",1,1,e,r,i,l,h,2),b("x","z","y",1,-1,e,r,-i,l,h,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new mr(p,3)),this.setAttribute("normal",new mr(_,3)),this.setAttribute("uv",new mr(S,2));function b(C,M,v,B,w,P,nt,F,O,Q,D){const R=P/O,V=nt/Q,lt=P/2,st=nt/2,pt=F/2,ht=O+1,L=Q+1;let q=0,j=0;const yt=new at;for(let Et=0;Et<L;Et++){const U=Et*V-st;for(let tt=0;tt<ht;tt++){const _t=tt*R-lt;yt[C]=_t*B,yt[M]=U*w,yt[v]=pt,p.push(yt.x,yt.y,yt.z),yt[C]=0,yt[M]=0,yt[v]=F>0?1:-1,_.push(yt.x,yt.y,yt.z),S.push(tt/O),S.push(1-Et/Q),q+=1}}for(let Et=0;Et<Q;Et++)for(let U=0;U<O;U++){const tt=x+U+ht*Et,_t=x+U+ht*(Et+1),W=x+(U+1)+ht*(Et+1),ot=x+(U+1)+ht*Et;m.push(tt,_t,ot),m.push(_t,W,ot),j+=6}d.addGroup(y,j,D),y+=j,x+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function An(o){const e={};for(let i=0;i<o.length;i++){const r=Cs(o[i]);for(const l in r)e[l]=r[l]}return e}function TM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function vv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ue.workingColorSpace}const AM={clone:Cs,merge:An};var bM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ia extends Oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bM,this.fragmentShader=RM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=TM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Sv extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=Ji}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ua=new at,b_=new Se,R_=new Se;class si extends Sv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=bh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bh*2*Math.atan(Math.tan(qf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ua.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ua.x,Ua.y).multiplyScalar(-e/Ua.z),Ua.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ua.x,Ua.y).multiplyScalar(-e/Ua.z)}getViewSize(e,i){return this.getViewBounds(e,b_,R_),i.subVectors(R_,b_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(qf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,_s=1;class CM extends yn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(gs,_s,e,i);l.layers=this.layers,this.add(l);const c=new si(gs,_s,e,i);c.layers=this.layers,this.add(c);const h=new si(gs,_s,e,i);h.layers=this.layers,this.add(h);const d=new si(gs,_s,e,i);d.layers=this.layers,this.add(d);const m=new si(gs,_s,e,i);m.layers=this.layers,this.add(m);const p=new si(gs,_s,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ji)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===yu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(S,x,y),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class xv extends Fn{constructor(e,i,r,l,c,h,d,m,p,_){e=e!==void 0?e:[],i=i!==void 0?i:Es,super(e,i,r,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wM extends gr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new xv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:mi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Po(5,5,5),c=new Ia({name:"CubemapFromEquirect",uniforms:Cs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Oa});c.uniforms.tEquirect.value=i;const h=new Ti(l,c),d=i.minFilter;return i.minFilter===pr&&(i.minFilter=mi),new CM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}const fh=new at,DM=new at,UM=new ae;class ur{constructor(e=new at(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=fh.subVectors(r,i).cross(DM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(fh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||UM.getNormalMatrix(e),l=this.coplanarPoint(fh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new Uh,hu=new at;class Lh{constructor(e=new ur,i=new ur,r=new ur,l=new ur,c=new ur,h=new ur){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ji){const r=this.planes,l=e.elements,c=l[0],h=l[1],d=l[2],m=l[3],p=l[4],_=l[5],S=l[6],x=l[7],y=l[8],b=l[9],C=l[10],M=l[11],v=l[12],B=l[13],w=l[14],P=l[15];if(r[0].setComponents(m-c,x-p,M-y,P-v).normalize(),r[1].setComponents(m+c,x+p,M+y,P+v).normalize(),r[2].setComponents(m+h,x+_,M+b,P+B).normalize(),r[3].setComponents(m-h,x-_,M-b,P-B).normalize(),r[4].setComponents(m-d,x-S,M-C,P-w).normalize(),i===Ji)r[5].setComponents(m+d,x+S,M+C,P+w).normalize();else if(i===yu)r[5].setComponents(d,S,C,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(hu.x=l.normal.x>0?e.max.x:e.min.x,hu.y=l.normal.y>0?e.max.y:e.min.y,hu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(hu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function LM(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,S=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,_),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,m,p){const _=m.array,S=m._updateRange,x=m.updateRanges;if(o.bindBuffer(p,d),S.count===-1&&x.length===0&&o.bufferSubData(p,0,_),x.length!==0){for(let y=0,b=x.length;y<b;y++){const C=x[y];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}S.count!==-1&&(o.bufferSubData(p,S.offset*_.BYTES_PER_ELEMENT,_,S.offset,S.count),S.count=-1),m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}class zo extends _r{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,S=e/d,x=i/m,y=[],b=[],C=[],M=[];for(let v=0;v<_;v++){const B=v*x-h;for(let w=0;w<p;w++){const P=w*S-c;b.push(P,-B,0),C.push(0,0,1),M.push(w/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let B=0;B<d;B++){const w=B+p*v,P=B+p*(v+1),nt=B+1+p*(v+1),F=B+1+p*v;y.push(w,P,F),y.push(P,nt,F)}this.setIndex(y),this.setAttribute("position",new mr(b,3)),this.setAttribute("normal",new mr(C,3)),this.setAttribute("uv",new mr(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.widthSegments,e.heightSegments)}}var NM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OM=`#ifdef USE_ALPHAHASH
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
#endif`,PM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FM=`#ifdef USE_AOMAP
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
#endif`,HM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,VM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,XM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qM=`#ifdef USE_IRIDESCENCE
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
#endif`,YM=`#ifdef USE_BUMPMAP
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
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ey=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,ny=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,iy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ay=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ry=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ly=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uy="gl_FragColor = linearToOutputTexel( gl_FragColor );",cy=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,fy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dy=`#ifdef USE_ENVMAP
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
#endif`,py=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,my=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_y=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xy=`#ifdef USE_GRADIENTMAP
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
}`,My=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ty=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Ay=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,by=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Uy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ly=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ny=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Oy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Py=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,By=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vy=`#if defined( USE_POINTS_UV )
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
#endif`,Xy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ky=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jy=`#ifdef USE_MORPHTARGETS
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
#endif`,Zy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ky=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eE=`#ifdef USE_NORMALMAP
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
#endif`,nE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,_E=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SE=`#ifdef USE_SKINNING
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
#endif`,xE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ME=`#ifdef USE_SKINNING
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
#endif`,yE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AE=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bE=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RE=`#ifdef USE_TRANSMISSION
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
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NE=`uniform sampler2D t2D;
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
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`#include <common>
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
}`,FE=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,HE=`#define DISTANCE
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
}`,GE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`uniform float scale;
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
}`,WE=`uniform vec3 diffuse;
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
}`,qE=`#include <common>
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
}`,YE=`uniform vec3 diffuse;
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
}`,jE=`#define LAMBERT
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
}`,ZE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,KE=`#define MATCAP
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
}`,QE=`#define MATCAP
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
}`,JE=`#define NORMAL
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
}`,$E=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tT=`#define PHONG
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
}`,eT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,nT=`#define STANDARD
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
}`,iT=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,aT=`#define TOON
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
}`,rT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sT=`uniform float size;
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
}`,oT=`uniform vec3 diffuse;
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
}`,lT=`#include <common>
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
}`,uT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,cT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,fT=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:NM,alphahash_pars_fragment:OM,alphamap_fragment:PM,alphamap_pars_fragment:zM,alphatest_fragment:BM,alphatest_pars_fragment:IM,aomap_fragment:FM,aomap_pars_fragment:HM,batching_pars_vertex:GM,batching_vertex:VM,begin_vertex:XM,beginnormal_vertex:kM,bsdfs:WM,iridescence_fragment:qM,bumpmap_pars_fragment:YM,clipping_planes_fragment:jM,clipping_planes_pars_fragment:ZM,clipping_planes_pars_vertex:KM,clipping_planes_vertex:QM,color_fragment:JM,color_pars_fragment:$M,color_pars_vertex:ty,color_vertex:ey,common:ny,cube_uv_reflection_fragment:iy,defaultnormal_vertex:ay,displacementmap_pars_vertex:ry,displacementmap_vertex:sy,emissivemap_fragment:oy,emissivemap_pars_fragment:ly,colorspace_fragment:uy,colorspace_pars_fragment:cy,envmap_fragment:fy,envmap_common_pars_fragment:hy,envmap_pars_fragment:dy,envmap_pars_vertex:py,envmap_physical_pars_fragment:Ay,envmap_vertex:my,fog_vertex:gy,fog_pars_vertex:_y,fog_fragment:vy,fog_pars_fragment:Sy,gradientmap_pars_fragment:xy,lightmap_pars_fragment:My,lights_lambert_fragment:yy,lights_lambert_pars_fragment:Ey,lights_pars_begin:Ty,lights_toon_fragment:by,lights_toon_pars_fragment:Ry,lights_phong_fragment:Cy,lights_phong_pars_fragment:wy,lights_physical_fragment:Dy,lights_physical_pars_fragment:Uy,lights_fragment_begin:Ly,lights_fragment_maps:Ny,lights_fragment_end:Oy,logdepthbuf_fragment:Py,logdepthbuf_pars_fragment:zy,logdepthbuf_pars_vertex:By,logdepthbuf_vertex:Iy,map_fragment:Fy,map_pars_fragment:Hy,map_particle_fragment:Gy,map_particle_pars_fragment:Vy,metalnessmap_fragment:Xy,metalnessmap_pars_fragment:ky,morphinstance_vertex:Wy,morphcolor_vertex:qy,morphnormal_vertex:Yy,morphtarget_pars_vertex:jy,morphtarget_vertex:Zy,normal_fragment_begin:Ky,normal_fragment_maps:Qy,normal_pars_fragment:Jy,normal_pars_vertex:$y,normal_vertex:tE,normalmap_pars_fragment:eE,clearcoat_normal_fragment_begin:nE,clearcoat_normal_fragment_maps:iE,clearcoat_pars_fragment:aE,iridescence_pars_fragment:rE,opaque_fragment:sE,packing:oE,premultiplied_alpha_fragment:lE,project_vertex:uE,dithering_fragment:cE,dithering_pars_fragment:fE,roughnessmap_fragment:hE,roughnessmap_pars_fragment:dE,shadowmap_pars_fragment:pE,shadowmap_pars_vertex:mE,shadowmap_vertex:gE,shadowmask_pars_fragment:_E,skinbase_vertex:vE,skinning_pars_vertex:SE,skinning_vertex:xE,skinnormal_vertex:ME,specularmap_fragment:yE,specularmap_pars_fragment:EE,tonemapping_fragment:TE,tonemapping_pars_fragment:AE,transmission_fragment:bE,transmission_pars_fragment:RE,uv_pars_fragment:CE,uv_pars_vertex:wE,uv_vertex:DE,worldpos_vertex:UE,background_vert:LE,background_frag:NE,backgroundCube_vert:OE,backgroundCube_frag:PE,cube_vert:zE,cube_frag:BE,depth_vert:IE,depth_frag:FE,distanceRGBA_vert:HE,distanceRGBA_frag:GE,equirect_vert:VE,equirect_frag:XE,linedashed_vert:kE,linedashed_frag:WE,meshbasic_vert:qE,meshbasic_frag:YE,meshlambert_vert:jE,meshlambert_frag:ZE,meshmatcap_vert:KE,meshmatcap_frag:QE,meshnormal_vert:JE,meshnormal_frag:$E,meshphong_vert:tT,meshphong_frag:eT,meshphysical_vert:nT,meshphysical_frag:iT,meshtoon_vert:aT,meshtoon_frag:rT,points_vert:sT,points_frag:oT,shadow_vert:lT,shadow_frag:uT,sprite_vert:cT,sprite_frag:fT},Ut={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},Mi={basic:{uniforms:An([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:An([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new be(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:An([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:An([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:An([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new be(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:An([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:An([Ut.points,Ut.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:An([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:An([Ut.common,Ut.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:An([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:An([Ut.sprite,Ut.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:An([Ut.common,Ut.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:An([Ut.lights,Ut.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Mi.physical={uniforms:An([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const du={r:0,b:0,g:0},or=new bi,hT=new je;function dT(o,e,i,r,l,c,h){const d=new be(0);let m=c===!0?0:1,p,_,S=null,x=0,y=null;function b(B){let w=B.isScene===!0?B.background:null;return w&&w.isTexture&&(w=(B.backgroundBlurriness>0?i:e).get(w)),w}function C(B){let w=!1;const P=b(B);P===null?v(d,m):P&&P.isColor&&(v(P,1),w=!0);const nt=o.xr.getEnvironmentBlendMode();nt==="additive"?r.buffers.color.setClear(0,0,0,1,h):nt==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(B,w){const P=b(w);P&&(P.isCubeTexture||P.mapping===Tu)?(_===void 0&&(_=new Ti(new Po(1,1,1),new Ia({name:"BackgroundCubeMaterial",uniforms:Cs(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(nt,F,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),or.copy(w.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),_.material.uniforms.envMap.value=P,_.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(hT.makeRotationFromEuler(or)),_.material.toneMapped=Ue.getTransfer(P.colorSpace)!==Fe,(S!==P||x!==P.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,S=P,x=P.version,y=o.toneMapping),_.layers.enableAll(),B.unshift(_,_.geometry,_.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Ti(new zo(2,2),new Ia({name:"BackgroundMaterial",uniforms:Cs(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:za,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(P.colorSpace)!==Fe,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(S!==P||x!==P.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,S=P,x=P.version,y=o.toneMapping),p.layers.enableAll(),B.unshift(p,p.geometry,p.material,0,0,null))}function v(B,w){B.getRGB(du,vv(o)),r.buffers.color.setClear(du.r,du.g,du.b,w,h)}return{getClearColor:function(){return d},setClearColor:function(B,w=1){d.set(B),m=w,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(B){m=B,v(d,m)},render:C,addToRenderList:M}}function pT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(R,V,lt,st,pt){let ht=!1;const L=S(st,lt,V);c!==L&&(c=L,p(c.object)),ht=y(R,st,lt,pt),ht&&b(R,st,lt,pt),pt!==null&&e.update(pt,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,P(R,V,lt,st),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(pt).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function S(R,V,lt){const st=lt.wireframe===!0;let pt=r[R.id];pt===void 0&&(pt={},r[R.id]=pt);let ht=pt[V.id];ht===void 0&&(ht={},pt[V.id]=ht);let L=ht[st];return L===void 0&&(L=x(m()),ht[st]=L),L}function x(R){const V=[],lt=[],st=[];for(let pt=0;pt<i;pt++)V[pt]=0,lt[pt]=0,st[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:lt,attributeDivisors:st,object:R,attributes:{},index:null}}function y(R,V,lt,st){const pt=c.attributes,ht=V.attributes;let L=0;const q=lt.getAttributes();for(const j in q)if(q[j].location>=0){const Et=pt[j];let U=ht[j];if(U===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(U=R.instanceColor)),Et===void 0||Et.attribute!==U||U&&Et.data!==U.data)return!0;L++}return c.attributesNum!==L||c.index!==st}function b(R,V,lt,st){const pt={},ht=V.attributes;let L=0;const q=lt.getAttributes();for(const j in q)if(q[j].location>=0){let Et=ht[j];Et===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(Et=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(Et=R.instanceColor));const U={};U.attribute=Et,Et&&Et.data&&(U.data=Et.data),pt[j]=U,L++}c.attributes=pt,c.attributesNum=L,c.index=st}function C(){const R=c.newAttributes;for(let V=0,lt=R.length;V<lt;V++)R[V]=0}function M(R){v(R,0)}function v(R,V){const lt=c.newAttributes,st=c.enabledAttributes,pt=c.attributeDivisors;lt[R]=1,st[R]===0&&(o.enableVertexAttribArray(R),st[R]=1),pt[R]!==V&&(o.vertexAttribDivisor(R,V),pt[R]=V)}function B(){const R=c.newAttributes,V=c.enabledAttributes;for(let lt=0,st=V.length;lt<st;lt++)V[lt]!==R[lt]&&(o.disableVertexAttribArray(lt),V[lt]=0)}function w(R,V,lt,st,pt,ht,L){L===!0?o.vertexAttribIPointer(R,V,lt,pt,ht):o.vertexAttribPointer(R,V,lt,st,pt,ht)}function P(R,V,lt,st){C();const pt=st.attributes,ht=lt.getAttributes(),L=V.defaultAttributeValues;for(const q in ht){const j=ht[q];if(j.location>=0){let yt=pt[q];if(yt===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(yt=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(yt=R.instanceColor)),yt!==void 0){const Et=yt.normalized,U=yt.itemSize,tt=e.get(yt);if(tt===void 0)continue;const _t=tt.buffer,W=tt.type,ot=tt.bytesPerElement,xt=W===o.INT||W===o.UNSIGNED_INT||yt.gpuType===ev;if(yt.isInterleavedBufferAttribute){const vt=yt.data,kt=vt.stride,Bt=yt.offset;if(vt.isInstancedInterleavedBuffer){for(let re=0;re<j.locationSize;re++)v(j.location+re,vt.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let re=0;re<j.locationSize;re++)M(j.location+re);o.bindBuffer(o.ARRAY_BUFFER,_t);for(let re=0;re<j.locationSize;re++)w(j.location+re,U/j.locationSize,W,Et,kt*ot,(Bt+U/j.locationSize*re)*ot,xt)}else{if(yt.isInstancedBufferAttribute){for(let vt=0;vt<j.locationSize;vt++)v(j.location+vt,yt.meshPerAttribute);R.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let vt=0;vt<j.locationSize;vt++)M(j.location+vt);o.bindBuffer(o.ARRAY_BUFFER,_t);for(let vt=0;vt<j.locationSize;vt++)w(j.location+vt,U/j.locationSize,W,Et,U*ot,U/j.locationSize*vt*ot,xt)}}else if(L!==void 0){const Et=L[q];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(j.location,Et);break;case 3:o.vertexAttrib3fv(j.location,Et);break;case 4:o.vertexAttrib4fv(j.location,Et);break;default:o.vertexAttrib1fv(j.location,Et)}}}}B()}function nt(){Q();for(const R in r){const V=r[R];for(const lt in V){const st=V[lt];for(const pt in st)_(st[pt].object),delete st[pt];delete V[lt]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const V=r[R.id];for(const lt in V){const st=V[lt];for(const pt in st)_(st[pt].object),delete st[pt];delete V[lt]}delete r[R.id]}function O(R){for(const V in r){const lt=r[V];if(lt[R.id]===void 0)continue;const st=lt[R.id];for(const pt in st)_(st[pt].object),delete st[pt];delete lt[R.id]}}function Q(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:D,dispose:nt,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:M,disableUnusedAttributes:B}}function mT(o,e,i){let r;function l(p){r=p}function c(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,S){S!==0&&(o.drawArraysInstanced(r,p,_,S),i.update(_,r,S))}function d(p,_,S){if(S===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<S;y++)this.render(p[y],_[y]);else{x.multiDrawArraysWEBGL(r,p,0,_,0,S);let y=0;for(let b=0;b<S;b++)y+=_[b];i.update(y,r,1)}}function m(p,_,S,x){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)h(p[b],_[b],x[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,S);let b=0;for(let C=0;C<S;C++)b+=_[C];for(let C=0;C<x.length;C++)i.update(b,r,x[C])}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function gT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==Ei&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const O=F===Au&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ba&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Na&&!O)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const S=i.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),C=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),B=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=y>0,nt=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:S,maxTextures:x,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:C,maxAttributes:M,maxVertexUniforms:v,maxVaryings:B,maxFragmentUniforms:w,vertexTextures:P,maxSamples:nt}}function _T(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new ur,d=new ae,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const y=S.length!==0||x||r!==0||l;return l=x,r=S.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,x){i=_(S,x,0)},this.setState=function(S,x,y){const b=S.clippingPlanes,C=S.clipIntersection,M=S.clipShadows,v=o.get(S);if(!l||b===null||b.length===0||c&&!M)c?_(null):p();else{const B=c?0:r,w=B*4;let P=v.clippingState||null;m.value=P,P=_(b,x,w,y);for(let nt=0;nt!==w;++nt)P[nt]=i[nt];v.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(S,x,y,b){const C=S!==null?S.length:0;let M=null;if(C!==0){if(M=m.value,b!==!0||M===null){const v=y+C*4,B=x.matrixWorldInverse;d.getNormalMatrix(B),(M===null||M.length<v)&&(M=new Float32Array(v));for(let w=0,P=y;w!==C;++w,P+=4)h.copy(S[w]).applyMatrix4(B,d),h.normal.toArray(M,P),M[P+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function vT(o){let e=new WeakMap;function i(h,d){return d===yh?h.mapping=Es:d===Eh&&(h.mapping=Ts),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===yh||d===Eh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new wM(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class yv extends Sv{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ss=4,C_=[.125,.215,.35,.446,.526,.582],hr=20,hh=new yv,w_=new be;let dh=null,ph=0,mh=0,gh=!1;const cr=(1+Math.sqrt(5))/2,vs=1/cr,D_=[new at(-cr,vs,0),new at(cr,vs,0),new at(-vs,0,cr),new at(vs,0,cr),new at(0,cr,-vs),new at(0,cr,vs),new at(-1,1,-1),new at(1,1,-1),new at(-1,1,1),new at(1,1,1)];class U_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dh,ph,mh),this._renderer.xr.enabled=gh,e.scissorTest=!1,pu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Es||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Au,format:Ei,colorSpace:Fa,depthBuffer:!1},l=L_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=L_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ST(c)),this._blurMaterial=xT(c,e,i)}return l}_compileMaterial(e){const i=new Ti(this._lodPlanes[0],e);this._renderer.compile(i,hh)}_sceneToCubeUV(e,i,r,l){const d=new si(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,x=_.toneMapping;_.getClearColor(w_),_.toneMapping=Pa,_.autoClear=!1;const y=new mv({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),b=new Ti(new Po,y);let C=!1;const M=e.background;M?M.isColor&&(y.color.copy(M),e.background=null,C=!0):(y.color.copy(w_),C=!0);for(let v=0;v<6;v++){const B=v%3;B===0?(d.up.set(0,m[v],0),d.lookAt(p[v],0,0)):B===1?(d.up.set(0,0,m[v]),d.lookAt(0,p[v],0)):(d.up.set(0,m[v],0),d.lookAt(0,0,p[v]));const w=this._cubeSize;pu(l,B*w,v>2?w:0,w,w),_.setRenderTarget(l),C&&_.render(b,d),_.render(e,d)}b.geometry.dispose(),b.material.dispose(),_.toneMapping=x,_.autoClear=S,e.background=M}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Es||e.mapping===Ts;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=O_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Ti(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;pu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,hh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=D_[(l-c-1)%D_.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,S=new Ti(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*hr-1),C=c/b,M=isFinite(c)?1+Math.floor(_*C):hr;M>hr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${hr}`);const v=[];let B=0;for(let O=0;O<hr;++O){const Q=O/C,D=Math.exp(-Q*Q/2);v.push(D),O===0?B+=D:O<M&&(B+=2*D)}for(let O=0;O<v.length;O++)v[O]=v[O]/B;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:w}=this;x.dTheta.value=b,x.mipInt.value=w-r;const P=this._sizeLods[l],nt=3*P*(l>w-Ss?l-w+Ss:0),F=4*(this._cubeSize-P);pu(i,nt,F,3*P,2*P),m.setRenderTarget(i),m.render(S,hh)}}function ST(o){const e=[],i=[],r=[];let l=o;const c=o-Ss+1+C_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Ss?m=C_[h-o+Ss-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),_=-p,S=1+p,x=[_,_,S,_,S,S,_,_,S,S,_,S],y=6,b=6,C=3,M=2,v=1,B=new Float32Array(C*b*y),w=new Float32Array(M*b*y),P=new Float32Array(v*b*y);for(let F=0;F<y;F++){const O=F%3*2/3-1,Q=F>2?0:-1,D=[O,Q,0,O+2/3,Q,0,O+2/3,Q+1,0,O,Q,0,O+2/3,Q+1,0,O,Q+1,0];B.set(D,C*b*F),w.set(x,M*b*F);const R=[F,F,F,F,F,F];P.set(R,v*b*F)}const nt=new _r;nt.setAttribute("position",new Ai(B,C)),nt.setAttribute("uv",new Ai(w,M)),nt.setAttribute("faceIndex",new Ai(P,v)),e.push(nt),l>Ss&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function L_(o,e,i){const r=new gr(o,e,i);return r.texture.mapping=Tu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pu(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function xT(o,e,i){const r=new Float32Array(hr),l=new at(0,1,0);return new Ia({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function N_(){return new Ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function O_(){return new Ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Nh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function MT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===yh||m===Eh,_=m===Es||m===Ts;if(p||_){let S=e.get(d);const x=S!==void 0?S.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new U_(o)),S=p?i.fromEquirectangular(d,S):i.fromCubemap(d,S),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),S.texture;if(S!==void 0)return S.texture;{const y=d.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new U_(o)),S=p?i.fromEquirectangular(d):i.fromCubemap(d),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),d.addEventListener("dispose",c),S.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function yT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&cv("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function ET(o,e,i,r){const l={},c=new WeakMap;function h(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);for(const b in x.morphAttributes){const C=x.morphAttributes[b];for(let M=0,v=C.length;M<v;M++)e.remove(C[M])}x.removeEventListener("dispose",h),delete l[x.id];const y=c.get(x);y&&(e.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(S,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(S){const x=S.attributes;for(const b in x)e.update(x[b],o.ARRAY_BUFFER);const y=S.morphAttributes;for(const b in y){const C=y[b];for(let M=0,v=C.length;M<v;M++)e.update(C[M],o.ARRAY_BUFFER)}}function p(S){const x=[],y=S.index,b=S.attributes.position;let C=0;if(y!==null){const B=y.array;C=y.version;for(let w=0,P=B.length;w<P;w+=3){const nt=B[w+0],F=B[w+1],O=B[w+2];x.push(nt,F,F,O,O,nt)}}else if(b!==void 0){const B=b.array;C=b.version;for(let w=0,P=B.length/3-1;w<P;w+=3){const nt=w+0,F=w+1,O=w+2;x.push(nt,F,F,O,O,nt)}}else return;const M=new(uv(x)?_v:gv)(x,1);M.version=C;const v=c.get(S);v&&e.remove(v),c.set(S,M)}function _(S){const x=c.get(S);if(x){const y=S.index;y!==null&&x.version<y.version&&p(S)}else p(S);return c.get(S)}return{get:d,update:m,getWireframeAttribute:_}}function TT(o,e,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,y){o.drawElements(r,y,c,x*h),i.update(y,r,1)}function p(x,y,b){b!==0&&(o.drawElementsInstanced(r,y,c,x*h,b),i.update(y,r,b))}function _(x,y,b){if(b===0)return;const C=e.get("WEBGL_multi_draw");if(C===null)for(let M=0;M<b;M++)this.render(x[M]/h,y[M]);else{C.multiDrawElementsWEBGL(r,y,0,c,x,0,b);let M=0;for(let v=0;v<b;v++)M+=y[v];i.update(M,r,1)}}function S(x,y,b,C){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)p(x[v]/h,y[v],C[v]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,x,0,C,0,b);let v=0;for(let B=0;B<b;B++)v+=y[B];for(let B=0;B<C.length;B++)i.update(v,r,C[B])}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=S}function AT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function bT(o,e,i){const r=new WeakMap,l=new cn;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==S){let R=function(){Q.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let P=0;b===!0&&(P=1),C===!0&&(P=2),M===!0&&(P=3);let nt=d.attributes.position.count*P,F=1;nt>e.maxTextureSize&&(F=Math.ceil(nt/e.maxTextureSize),nt=e.maxTextureSize);const O=new Float32Array(nt*F*4*S),Q=new hv(O,nt,F,S);Q.type=Na,Q.needsUpdate=!0;const D=P*4;for(let V=0;V<S;V++){const lt=v[V],st=B[V],pt=w[V],ht=nt*F*4*V;for(let L=0;L<lt.count;L++){const q=L*D;b===!0&&(l.fromBufferAttribute(lt,L),O[ht+q+0]=l.x,O[ht+q+1]=l.y,O[ht+q+2]=l.z,O[ht+q+3]=0),C===!0&&(l.fromBufferAttribute(st,L),O[ht+q+4]=l.x,O[ht+q+5]=l.y,O[ht+q+6]=l.z,O[ht+q+7]=0),M===!0&&(l.fromBufferAttribute(pt,L),O[ht+q+8]=l.x,O[ht+q+9]=l.y,O[ht+q+10]=l.z,O[ht+q+11]=pt.itemSize===4?l.w:1)}}x={count:S,texture:Q,size:new Se(nt,F)},r.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function RT(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,S=e.get(m,_);if(l.get(S)!==p&&(e.update(S),l.set(S,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return S}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}class Ev extends Fn{constructor(e,i,r,l,c,h,d,m,p,_=Ms){if(_!==Ms&&_!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Ms&&(r=As),r===void 0&&_===Rs&&(r=bs),super(null,l,c,h,d,m,_,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:oi,this.minFilter=m!==void 0?m:oi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const Tv=new Fn,Av=new Ev(1,1);Av.compareFunction=lv;const bv=new hv,Rv=new hM,Cv=new xv,P_=[],z_=[],B_=new Float32Array(16),I_=new Float32Array(9),F_=new Float32Array(4);function Ds(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=P_[l];if(c===void 0&&(c=new Float32Array(l),P_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function sn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function on(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Ru(o,e){let i=z_[e];i===void 0&&(i=new Int32Array(e),z_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function CT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function wT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(sn(i,e))return;o.uniform2fv(this.addr,e),on(i,e)}}function DT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(sn(i,e))return;o.uniform3fv(this.addr,e),on(i,e)}}function UT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(sn(i,e))return;o.uniform4fv(this.addr,e),on(i,e)}}function LT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(sn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),on(i,e)}else{if(sn(i,r))return;F_.set(r),o.uniformMatrix2fv(this.addr,!1,F_),on(i,r)}}function NT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(sn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),on(i,e)}else{if(sn(i,r))return;I_.set(r),o.uniformMatrix3fv(this.addr,!1,I_),on(i,r)}}function OT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(sn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),on(i,e)}else{if(sn(i,r))return;B_.set(r),o.uniformMatrix4fv(this.addr,!1,B_),on(i,r)}}function PT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function zT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(sn(i,e))return;o.uniform2iv(this.addr,e),on(i,e)}}function BT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(sn(i,e))return;o.uniform3iv(this.addr,e),on(i,e)}}function IT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(sn(i,e))return;o.uniform4iv(this.addr,e),on(i,e)}}function FT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function HT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(sn(i,e))return;o.uniform2uiv(this.addr,e),on(i,e)}}function GT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(sn(i,e))return;o.uniform3uiv(this.addr,e),on(i,e)}}function VT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(sn(i,e))return;o.uniform4uiv(this.addr,e),on(i,e)}}function XT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const c=this.type===o.SAMPLER_2D_SHADOW?Av:Tv;i.setTexture2D(e||c,l)}function kT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Rv,l)}function WT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Cv,l)}function qT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||bv,l)}function YT(o){switch(o){case 5126:return CT;case 35664:return wT;case 35665:return DT;case 35666:return UT;case 35674:return LT;case 35675:return NT;case 35676:return OT;case 5124:case 35670:return PT;case 35667:case 35671:return zT;case 35668:case 35672:return BT;case 35669:case 35673:return IT;case 5125:return FT;case 36294:return HT;case 36295:return GT;case 36296:return VT;case 35678:case 36198:case 36298:case 36306:case 35682:return XT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return qT}}function jT(o,e){o.uniform1fv(this.addr,e)}function ZT(o,e){const i=Ds(e,this.size,2);o.uniform2fv(this.addr,i)}function KT(o,e){const i=Ds(e,this.size,3);o.uniform3fv(this.addr,i)}function QT(o,e){const i=Ds(e,this.size,4);o.uniform4fv(this.addr,i)}function JT(o,e){const i=Ds(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function $T(o,e){const i=Ds(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function tA(o,e){const i=Ds(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function eA(o,e){o.uniform1iv(this.addr,e)}function nA(o,e){o.uniform2iv(this.addr,e)}function iA(o,e){o.uniform3iv(this.addr,e)}function aA(o,e){o.uniform4iv(this.addr,e)}function rA(o,e){o.uniform1uiv(this.addr,e)}function sA(o,e){o.uniform2uiv(this.addr,e)}function oA(o,e){o.uniform3uiv(this.addr,e)}function lA(o,e){o.uniform4uiv(this.addr,e)}function uA(o,e,i){const r=this.cache,l=e.length,c=Ru(i,l);sn(r,c)||(o.uniform1iv(this.addr,c),on(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Tv,c[h])}function cA(o,e,i){const r=this.cache,l=e.length,c=Ru(i,l);sn(r,c)||(o.uniform1iv(this.addr,c),on(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Rv,c[h])}function fA(o,e,i){const r=this.cache,l=e.length,c=Ru(i,l);sn(r,c)||(o.uniform1iv(this.addr,c),on(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Cv,c[h])}function hA(o,e,i){const r=this.cache,l=e.length,c=Ru(i,l);sn(r,c)||(o.uniform1iv(this.addr,c),on(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||bv,c[h])}function dA(o){switch(o){case 5126:return jT;case 35664:return ZT;case 35665:return KT;case 35666:return QT;case 35674:return JT;case 35675:return $T;case 35676:return tA;case 5124:case 35670:return eA;case 35667:case 35671:return nA;case 35668:case 35672:return iA;case 35669:case 35673:return aA;case 5125:return rA;case 36294:return sA;case 36295:return oA;case 36296:return lA;case 35678:case 36198:case 36298:case 36306:case 35682:return uA;case 35679:case 36299:case 36307:return cA;case 35680:case 36300:case 36308:case 36293:return fA;case 36289:case 36303:case 36311:case 36292:return hA}}class pA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=YT(i.type)}}class mA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=dA(i.type)}}class gA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const _h=/(\w+)(\])?(\[|\.)?/g;function H_(o,e){o.seq.push(e),o.map[e.id]=e}function _A(o,e,i){const r=o.name,l=r.length;for(_h.lastIndex=0;;){const c=_h.exec(r),h=_h.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){H_(i,p===void 0?new pA(d,o,e):new mA(d,o,e));break}else{let S=i.map[d];S===void 0&&(S=new gA(d),H_(i,S)),i=S}}}class gu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);_A(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function G_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const vA=37297;let SA=0;function xA(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}function MA(o){const e=Ue.getPrimaries(Ue.workingColorSpace),i=Ue.getPrimaries(o);let r;switch(e===i?r="":e===Mu&&i===xu?r="LinearDisplayP3ToLinearSRGB":e===xu&&i===Mu&&(r="LinearSRGBToLinearDisplayP3"),o){case Fa:case bu:return[r,"LinearTransferOETF"];case xi:case Dh:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function V_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const h=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+xA(o.getShaderSource(e),h)}else return l}function yA(o,e){const i=MA(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function EA(o,e){let i;switch(e){case Dx:i="Linear";break;case Ux:i="Reinhard";break;case Lx:i="OptimizedCineon";break;case Nx:i="ACESFilmic";break;case Px:i="AgX";break;case zx:i="Neutral";break;case Ox:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function TA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function AA(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function bA(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Do(o){return o!==""}function X_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function k_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rh(o){return o.replace(RA,wA)}const CA=new Map;function wA(o,e){let i=ie[e];if(i===void 0){const r=CA.get(e);if(r!==void 0)i=ie[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Rh(i)}const DA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W_(o){return o.replace(DA,UA)}function UA(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function q_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===J_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===nx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function NA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Es:case Ts:e="ENVMAP_TYPE_CUBE";break;case Tu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function PA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case $_:e="ENVMAP_BLENDING_MULTIPLY";break;case Cx:e="ENVMAP_BLENDING_MIX";break;case wx:e="ENVMAP_BLENDING_ADD";break}return e}function zA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function BA(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=LA(i),p=NA(i),_=OA(i),S=PA(i),x=zA(i),y=TA(i),b=AA(c),C=l.createProgram();let M,v,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Do).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Do).join(`
`),v.length>0&&(v+=`
`)):(M=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),v=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Pa?"#define TONE_MAPPING":"",i.toneMapping!==Pa?ie.tonemapping_pars_fragment:"",i.toneMapping!==Pa?EA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,yA("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Do).join(`
`)),h=Rh(h),h=X_(h,i),h=k_(h,i),d=Rh(d),d=X_(d,i),d=k_(d,i),h=W_(h),d=W_(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===l_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===l_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const w=B+M+h,P=B+v+d,nt=G_(l,l.VERTEX_SHADER,w),F=G_(l,l.FRAGMENT_SHADER,P);l.attachShader(C,nt),l.attachShader(C,F),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function O(V){if(o.debug.checkShaderErrors){const lt=l.getProgramInfoLog(C).trim(),st=l.getShaderInfoLog(nt).trim(),pt=l.getShaderInfoLog(F).trim();let ht=!0,L=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,nt,F);else{const q=V_(l,nt,"vertex"),j=V_(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+q+`
`+j)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(st===""||pt==="")&&(L=!1);L&&(V.diagnostics={runnable:ht,programLog:lt,vertexShader:{log:st,prefix:M},fragmentShader:{log:pt,prefix:v}})}l.deleteShader(nt),l.deleteShader(F),Q=new gu(l,C),D=bA(l,C)}let Q;this.getUniforms=function(){return Q===void 0&&O(this),Q};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,vA)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=SA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=nt,this.fragmentShader=F,this}let IA=0;class FA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new HA(e),i.set(e,r)),r}}class HA{constructor(e){this.id=IA++,this.code=e,this.usedTimes=0}}function GA(o,e,i,r,l,c,h){const d=new dv,m=new FA,p=new Set,_=[],S=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,R,V,lt,st){const pt=lt.fog,ht=st.geometry,L=D.isMeshStandardMaterial?lt.environment:null,q=(D.isMeshStandardMaterial?i:e).get(D.envMap||L),j=q&&q.mapping===Tu?q.image.height:null,yt=b[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const Et=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,U=Et!==void 0?Et.length:0;let tt=0;ht.morphAttributes.position!==void 0&&(tt=1),ht.morphAttributes.normal!==void 0&&(tt=2),ht.morphAttributes.color!==void 0&&(tt=3);let _t,W,ot,xt;if(yt){const Te=Mi[yt];_t=Te.vertexShader,W=Te.fragmentShader}else _t=D.vertexShader,W=D.fragmentShader,m.update(D),ot=m.getVertexShaderID(D),xt=m.getFragmentShaderID(D);const vt=o.getRenderTarget(),kt=st.isInstancedMesh===!0,Bt=st.isBatchedMesh===!0,re=!!D.map,G=!!D.matcap,oe=!!q,le=!!D.aoMap,Ee=!!D.lightMap,Yt=!!D.bumpMap,he=!!D.normalMap,se=!!D.displacementMap,$t=!!D.emissiveMap,He=!!D.metalnessMap,N=!!D.roughnessMap,T=D.anisotropy>0,rt=D.clearcoat>0,St=D.dispersion>0,gt=D.iridescence>0,Mt=D.sheen>0,Vt=D.transmission>0,wt=T&&!!D.anisotropyMap,Ct=rt&&!!D.clearcoatMap,ee=rt&&!!D.clearcoatNormalMap,Tt=rt&&!!D.clearcoatRoughnessMap,Ft=gt&&!!D.iridescenceMap,ue=gt&&!!D.iridescenceThicknessMap,jt=Mt&&!!D.sheenColorMap,Rt=Mt&&!!D.sheenRoughnessMap,Qt=!!D.specularMap,Kt=!!D.specularColorMap,Ve=!!D.specularIntensityMap,H=Vt&&!!D.transmissionMap,Lt=Vt&&!!D.thicknessMap,ct=!!D.gradientMap,mt=!!D.alphaMap,At=D.alphaTest>0,Wt=!!D.alphaHash,de=!!D.extensions;let Pe=Pa;D.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(Pe=o.toneMapping);const Ze={shaderID:yt,shaderType:D.type,shaderName:D.name,vertexShader:_t,fragmentShader:W,defines:D.defines,customVertexShaderID:ot,customFragmentShaderID:xt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:Bt,batchingColor:Bt&&st._colorsTexture!==null,instancing:kt,instancingColor:kt&&st.instanceColor!==null,instancingMorph:kt&&st.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:Fa,alphaToCoverage:!!D.alphaToCoverage,map:re,matcap:G,envMap:oe,envMapMode:oe&&q.mapping,envMapCubeUVHeight:j,aoMap:le,lightMap:Ee,bumpMap:Yt,normalMap:he,displacementMap:x&&se,emissiveMap:$t,normalMapObjectSpace:he&&D.normalMapType===Kx,normalMapTangentSpace:he&&D.normalMapType===ov,metalnessMap:He,roughnessMap:N,anisotropy:T,anisotropyMap:wt,clearcoat:rt,clearcoatMap:Ct,clearcoatNormalMap:ee,clearcoatRoughnessMap:Tt,dispersion:St,iridescence:gt,iridescenceMap:Ft,iridescenceThicknessMap:ue,sheen:Mt,sheenColorMap:jt,sheenRoughnessMap:Rt,specularMap:Qt,specularColorMap:Kt,specularIntensityMap:Ve,transmission:Vt,transmissionMap:H,thicknessMap:Lt,gradientMap:ct,opaque:D.transparent===!1&&D.blending===xs&&D.alphaToCoverage===!1,alphaMap:mt,alphaTest:At,alphaHash:Wt,combine:D.combine,mapUv:re&&C(D.map.channel),aoMapUv:le&&C(D.aoMap.channel),lightMapUv:Ee&&C(D.lightMap.channel),bumpMapUv:Yt&&C(D.bumpMap.channel),normalMapUv:he&&C(D.normalMap.channel),displacementMapUv:se&&C(D.displacementMap.channel),emissiveMapUv:$t&&C(D.emissiveMap.channel),metalnessMapUv:He&&C(D.metalnessMap.channel),roughnessMapUv:N&&C(D.roughnessMap.channel),anisotropyMapUv:wt&&C(D.anisotropyMap.channel),clearcoatMapUv:Ct&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:ee&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&C(D.sheenRoughnessMap.channel),specularMapUv:Qt&&C(D.specularMap.channel),specularColorMapUv:Kt&&C(D.specularColorMap.channel),specularIntensityMapUv:Ve&&C(D.specularIntensityMap.channel),transmissionMapUv:H&&C(D.transmissionMap.channel),thicknessMapUv:Lt&&C(D.thicknessMap.channel),alphaMapUv:mt&&C(D.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(he||T),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ht.attributes.uv&&(re||mt),fog:!!pt,useFog:D.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:st.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:tt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:Pe,decodeVideoTexture:re&&D.map.isVideoTexture===!0&&Ue.getTransfer(D.map.colorSpace)===Fe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Qi,flipSided:D.side===In,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:de&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:de&&D.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ze.vertexUv1s=p.has(1),Ze.vertexUv2s=p.has(2),Ze.vertexUv3s=p.has(3),p.clear(),Ze}function v(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)R.push(V),R.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(B(R,D),w(R,D),R.push(o.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function B(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function w(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.skinning&&d.enable(4),R.morphTargets&&d.enable(5),R.morphNormals&&d.enable(6),R.morphColors&&d.enable(7),R.premultipliedAlpha&&d.enable(8),R.shadowMapEnabled&&d.enable(9),R.doubleSided&&d.enable(10),R.flipSided&&d.enable(11),R.useDepthPacking&&d.enable(12),R.dithering&&d.enable(13),R.transmission&&d.enable(14),R.sheen&&d.enable(15),R.opaque&&d.enable(16),R.pointsUvs&&d.enable(17),R.decodeVideoTexture&&d.enable(18),R.alphaToCoverage&&d.enable(19),D.push(d.mask)}function P(D){const R=b[D.type];let V;if(R){const lt=Mi[R];V=AM.clone(lt.uniforms)}else V=D.uniforms;return V}function nt(D,R){let V;for(let lt=0,st=_.length;lt<st;lt++){const pt=_[lt];if(pt.cacheKey===R){V=pt,++V.usedTimes;break}}return V===void 0&&(V=new BA(o,R,D,c),_.push(V)),V}function F(D){if(--D.usedTimes===0){const R=_.indexOf(D);_[R]=_[_.length-1],_.pop(),D.destroy()}}function O(D){m.remove(D)}function Q(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:P,acquireProgram:nt,releaseProgram:F,releaseShaderCache:O,programs:_,dispose:Q}}function VA(){let o=new WeakMap;function e(c){let h=o.get(c);return h===void 0&&(h={},o.set(c,h)),h}function i(c){o.delete(c)}function r(c,h,d){o.get(c)[h]=d}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function XA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Y_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function j_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(S,x,y,b,C,M){let v=o[e];return v===void 0?(v={id:S.id,object:S,geometry:x,material:y,groupOrder:b,renderOrder:S.renderOrder,z:C,group:M},o[e]=v):(v.id=S.id,v.object=S,v.geometry=x,v.material=y,v.groupOrder=b,v.renderOrder=S.renderOrder,v.z=C,v.group=M),e++,v}function d(S,x,y,b,C,M){const v=h(S,x,y,b,C,M);y.transmission>0?r.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(S,x,y,b,C,M){const v=h(S,x,y,b,C,M);y.transmission>0?r.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(S,x){i.length>1&&i.sort(S||XA),r.length>1&&r.sort(x||Y_),l.length>1&&l.sort(x||Y_)}function _(){for(let S=e,x=o.length;S<x;S++){const y=o[S];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function kA(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new j_,o.set(r,[h])):l>=c.length?(h=new j_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function WA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new at,color:new be};break;case"SpotLight":i={position:new at,direction:new at,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new at,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new at,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new at,halfWidth:new at,halfHeight:new at};break}return o[e.id]=i,i}}}function qA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let YA=0;function jA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function ZA(o){const e=new WA,i=qA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new at);const l=new at,c=new je,h=new je;function d(p){let _=0,S=0,x=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,b=0,C=0,M=0,v=0,B=0,w=0,P=0,nt=0,F=0,O=0;p.sort(jA);for(let D=0,R=p.length;D<R;D++){const V=p[D],lt=V.color,st=V.intensity,pt=V.distance,ht=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=lt.r*st,S+=lt.g*st,x+=lt.b*st;else if(V.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(V.sh.coefficients[L],st);O++}else if(V.isDirectionalLight){const L=e.get(V);if(L.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const q=V.shadow,j=i.get(V);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,r.directionalShadow[y]=j,r.directionalShadowMap[y]=ht,r.directionalShadowMatrix[y]=V.shadow.matrix,B++}r.directional[y]=L,y++}else if(V.isSpotLight){const L=e.get(V);L.position.setFromMatrixPosition(V.matrixWorld),L.color.copy(lt).multiplyScalar(st),L.distance=pt,L.coneCos=Math.cos(V.angle),L.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),L.decay=V.decay,r.spot[C]=L;const q=V.shadow;if(V.map&&(r.spotLightMap[nt]=V.map,nt++,q.updateMatrices(V),V.castShadow&&F++),r.spotLightMatrix[C]=q.matrix,V.castShadow){const j=i.get(V);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,r.spotShadow[C]=j,r.spotShadowMap[C]=ht,P++}C++}else if(V.isRectAreaLight){const L=e.get(V);L.color.copy(lt).multiplyScalar(st),L.halfWidth.set(V.width*.5,0,0),L.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=L,M++}else if(V.isPointLight){const L=e.get(V);if(L.color.copy(V.color).multiplyScalar(V.intensity),L.distance=V.distance,L.decay=V.decay,V.castShadow){const q=V.shadow,j=i.get(V);j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,r.pointShadow[b]=j,r.pointShadowMap[b]=ht,r.pointShadowMatrix[b]=V.shadow.matrix,w++}r.point[b]=L,b++}else if(V.isHemisphereLight){const L=e.get(V);L.skyColor.copy(V.color).multiplyScalar(st),L.groundColor.copy(V.groundColor).multiplyScalar(st),r.hemi[v]=L,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=S,r.ambient[2]=x;const Q=r.hash;(Q.directionalLength!==y||Q.pointLength!==b||Q.spotLength!==C||Q.rectAreaLength!==M||Q.hemiLength!==v||Q.numDirectionalShadows!==B||Q.numPointShadows!==w||Q.numSpotShadows!==P||Q.numSpotMaps!==nt||Q.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=M,r.point.length=b,r.hemi.length=v,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=P+nt-F,r.spotLightMap.length=nt,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=O,Q.directionalLength=y,Q.pointLength=b,Q.spotLength=C,Q.rectAreaLength=M,Q.hemiLength=v,Q.numDirectionalShadows=B,Q.numPointShadows=w,Q.numSpotShadows=P,Q.numSpotMaps=nt,Q.numLightProbes=O,r.version=YA++)}function m(p,_){let S=0,x=0,y=0,b=0,C=0;const M=_.matrixWorldInverse;for(let v=0,B=p.length;v<B;v++){const w=p[v];if(w.isDirectionalLight){const P=r.directional[S];P.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),S++}else if(w.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(M),P.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),y++}else if(w.isRectAreaLight){const P=r.rectArea[b];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(M),h.identity(),c.copy(w.matrixWorld),c.premultiply(M),h.extractRotation(c),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(h),P.halfHeight.applyMatrix4(h),b++}else if(w.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(M),x++}else if(w.isHemisphereLight){const P=r.hemi[C];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:r}}function Z_(o){const e=new ZA(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function KA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new Z_(o),e.set(l,[d])):c>=h.length?(d=new Z_(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}class QA extends Oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JA extends Oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eb(o,e,i){let r=new Lh;const l=new Se,c=new Se,h=new cn,d=new QA({depthPacking:Zx}),m=new JA,p={},_=i.maxTextureSize,S={[za]:In,[In]:za,[Qi]:Qi},x=new Ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:$A,fragmentShader:tb}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const b=new _r;b.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ti(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J_;let v=this.type;this.render=function(F,O,Q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;const D=o.getRenderTarget(),R=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(Oa),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const st=v!==Ki&&this.type===Ki,pt=v===Ki&&this.type!==Ki;for(let ht=0,L=F.length;ht<L;ht++){const q=F[ht],j=q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const yt=j.getFrameExtents();if(l.multiply(yt),c.copy(j.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/yt.x),l.x=c.x*yt.x,j.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/yt.y),l.y=c.y*yt.y,j.mapSize.y=c.y)),j.map===null||st===!0||pt===!0){const U=this.type!==Ki?{minFilter:oi,magFilter:oi}:{};j.map!==null&&j.map.dispose(),j.map=new gr(l.x,l.y,U),j.map.texture.name=q.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const Et=j.getViewportCount();for(let U=0;U<Et;U++){const tt=j.getViewport(U);h.set(c.x*tt.x,c.y*tt.y,c.x*tt.z,c.y*tt.w),lt.viewport(h),j.updateMatrices(q,U),r=j.getFrustum(),P(O,Q,j.camera,q,this.type)}j.isPointLightShadow!==!0&&this.type===Ki&&B(j,Q),j.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(D,R,V)};function B(F,O){const Q=e.update(C);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,y.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new gr(l.x,l.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(O,null,Q,x,C,null),y.uniforms.shadow_pass.value=F.mapPass.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(O,null,Q,y,C,null)}function w(F,O,Q,D){let R=null;const V=Q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)R=V;else if(R=Q.isPointLight===!0?m:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const lt=R.uuid,st=O.uuid;let pt=p[lt];pt===void 0&&(pt={},p[lt]=pt);let ht=pt[st];ht===void 0&&(ht=R.clone(),pt[st]=ht,O.addEventListener("dispose",nt)),R=ht}if(R.visible=O.visible,R.wireframe=O.wireframe,D===Ki?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:S[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,Q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const lt=o.properties.get(R);lt.light=Q}return R}function P(F,O,Q,D,R){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===Ki)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,F.matrixWorld);const st=e.update(F),pt=F.material;if(Array.isArray(pt)){const ht=st.groups;for(let L=0,q=ht.length;L<q;L++){const j=ht[L],yt=pt[j.materialIndex];if(yt&&yt.visible){const Et=w(F,yt,D,R);F.onBeforeShadow(o,F,O,Q,st,Et,j),o.renderBufferDirect(Q,null,st,Et,F,j),F.onAfterShadow(o,F,O,Q,st,Et,j)}}}else if(pt.visible){const ht=w(F,pt,D,R);F.onBeforeShadow(o,F,O,Q,st,ht,null),o.renderBufferDirect(Q,null,st,ht,F,null),F.onAfterShadow(o,F,O,Q,st,ht,null)}}const lt=F.children;for(let st=0,pt=lt.length;st<pt;st++)P(lt[st],O,Q,D,R)}function nt(F){F.target.removeEventListener("dispose",nt);for(const Q in p){const D=p[Q],R=F.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function nb(o){function e(){let H=!1;const Lt=new cn;let ct=null;const mt=new cn(0,0,0,0);return{setMask:function(At){ct!==At&&!H&&(o.colorMask(At,At,At,At),ct=At)},setLocked:function(At){H=At},setClear:function(At,Wt,de,Pe,Ze){Ze===!0&&(At*=Pe,Wt*=Pe,de*=Pe),Lt.set(At,Wt,de,Pe),mt.equals(Lt)===!1&&(o.clearColor(At,Wt,de,Pe),mt.copy(Lt))},reset:function(){H=!1,ct=null,mt.set(-1,0,0,0)}}}function i(){let H=!1,Lt=null,ct=null,mt=null;return{setTest:function(At){At?xt(o.DEPTH_TEST):vt(o.DEPTH_TEST)},setMask:function(At){Lt!==At&&!H&&(o.depthMask(At),Lt=At)},setFunc:function(At){if(ct!==At){switch(At){case Mx:o.depthFunc(o.NEVER);break;case yx:o.depthFunc(o.ALWAYS);break;case Ex:o.depthFunc(o.LESS);break;case _u:o.depthFunc(o.LEQUAL);break;case Tx:o.depthFunc(o.EQUAL);break;case Ax:o.depthFunc(o.GEQUAL);break;case bx:o.depthFunc(o.GREATER);break;case Rx:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ct=At}},setLocked:function(At){H=At},setClear:function(At){mt!==At&&(o.clearDepth(At),mt=At)},reset:function(){H=!1,Lt=null,ct=null,mt=null}}}function r(){let H=!1,Lt=null,ct=null,mt=null,At=null,Wt=null,de=null,Pe=null,Ze=null;return{setTest:function(Te){H||(Te?xt(o.STENCIL_TEST):vt(o.STENCIL_TEST))},setMask:function(Te){Lt!==Te&&!H&&(o.stencilMask(Te),Lt=Te)},setFunc:function(Te,bn,_n){(ct!==Te||mt!==bn||At!==_n)&&(o.stencilFunc(Te,bn,_n),ct=Te,mt=bn,At=_n)},setOp:function(Te,bn,_n){(Wt!==Te||de!==bn||Pe!==_n)&&(o.stencilOp(Te,bn,_n),Wt=Te,de=bn,Pe=_n)},setLocked:function(Te){H=Te},setClear:function(Te){Ze!==Te&&(o.clearStencil(Te),Ze=Te)},reset:function(){H=!1,Lt=null,ct=null,mt=null,At=null,Wt=null,de=null,Pe=null,Ze=null}}}const l=new e,c=new i,h=new r,d=new WeakMap,m=new WeakMap;let p={},_={},S=new WeakMap,x=[],y=null,b=!1,C=null,M=null,v=null,B=null,w=null,P=null,nt=null,F=new be(0,0,0),O=0,Q=!1,D=null,R=null,V=null,lt=null,st=null;const pt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ht=!1,L=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(q)[1]),ht=L>=1):q.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),ht=L>=2);let j=null,yt={};const Et=o.getParameter(o.SCISSOR_BOX),U=o.getParameter(o.VIEWPORT),tt=new cn().fromArray(Et),_t=new cn().fromArray(U);function W(H,Lt,ct,mt){const At=new Uint8Array(4),Wt=o.createTexture();o.bindTexture(H,Wt),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let de=0;de<ct;de++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,mt,0,o.RGBA,o.UNSIGNED_BYTE,At):o.texImage2D(Lt+de,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,At);return Wt}const ot={};ot[o.TEXTURE_2D]=W(o.TEXTURE_2D,o.TEXTURE_2D,1),ot[o.TEXTURE_CUBE_MAP]=W(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[o.TEXTURE_2D_ARRAY]=W(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ot[o.TEXTURE_3D]=W(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),h.setClear(0),xt(o.DEPTH_TEST),c.setFunc(_u),Yt(!1),he(Dg),xt(o.CULL_FACE),le(Oa);function xt(H){p[H]!==!0&&(o.enable(H),p[H]=!0)}function vt(H){p[H]!==!1&&(o.disable(H),p[H]=!1)}function kt(H,Lt){return _[H]!==Lt?(o.bindFramebuffer(H,Lt),_[H]=Lt,H===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Lt),H===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Bt(H,Lt){let ct=x,mt=!1;if(H){ct=S.get(Lt),ct===void 0&&(ct=[],S.set(Lt,ct));const At=H.textures;if(ct.length!==At.length||ct[0]!==o.COLOR_ATTACHMENT0){for(let Wt=0,de=At.length;Wt<de;Wt++)ct[Wt]=o.COLOR_ATTACHMENT0+Wt;ct.length=At.length,mt=!0}}else ct[0]!==o.BACK&&(ct[0]=o.BACK,mt=!0);mt&&o.drawBuffers(ct)}function re(H){return y!==H?(o.useProgram(H),y=H,!0):!1}const G={[fr]:o.FUNC_ADD,[ax]:o.FUNC_SUBTRACT,[rx]:o.FUNC_REVERSE_SUBTRACT};G[sx]=o.MIN,G[ox]=o.MAX;const oe={[lx]:o.ZERO,[ux]:o.ONE,[cx]:o.SRC_COLOR,[xh]:o.SRC_ALPHA,[gx]:o.SRC_ALPHA_SATURATE,[px]:o.DST_COLOR,[hx]:o.DST_ALPHA,[fx]:o.ONE_MINUS_SRC_COLOR,[Mh]:o.ONE_MINUS_SRC_ALPHA,[mx]:o.ONE_MINUS_DST_COLOR,[dx]:o.ONE_MINUS_DST_ALPHA,[_x]:o.CONSTANT_COLOR,[vx]:o.ONE_MINUS_CONSTANT_COLOR,[Sx]:o.CONSTANT_ALPHA,[xx]:o.ONE_MINUS_CONSTANT_ALPHA};function le(H,Lt,ct,mt,At,Wt,de,Pe,Ze,Te){if(H===Oa){b===!0&&(vt(o.BLEND),b=!1);return}if(b===!1&&(xt(o.BLEND),b=!0),H!==ix){if(H!==C||Te!==Q){if((M!==fr||w!==fr)&&(o.blendEquation(o.FUNC_ADD),M=fr,w=fr),Te)switch(H){case xs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ug:o.blendFunc(o.ONE,o.ONE);break;case Lg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ng:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case xs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Ug:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Lg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ng:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}v=null,B=null,P=null,nt=null,F.set(0,0,0),O=0,C=H,Q=Te}return}At=At||Lt,Wt=Wt||ct,de=de||mt,(Lt!==M||At!==w)&&(o.blendEquationSeparate(G[Lt],G[At]),M=Lt,w=At),(ct!==v||mt!==B||Wt!==P||de!==nt)&&(o.blendFuncSeparate(oe[ct],oe[mt],oe[Wt],oe[de]),v=ct,B=mt,P=Wt,nt=de),(Pe.equals(F)===!1||Ze!==O)&&(o.blendColor(Pe.r,Pe.g,Pe.b,Ze),F.copy(Pe),O=Ze),C=H,Q=!1}function Ee(H,Lt){H.side===Qi?vt(o.CULL_FACE):xt(o.CULL_FACE);let ct=H.side===In;Lt&&(ct=!ct),Yt(ct),H.blending===xs&&H.transparent===!1?le(Oa):le(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),l.setMask(H.colorWrite);const mt=H.stencilWrite;h.setTest(mt),mt&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),$t(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?xt(o.SAMPLE_ALPHA_TO_COVERAGE):vt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(H){D!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),D=H)}function he(H){H!==tx?(xt(o.CULL_FACE),H!==R&&(H===Dg?o.cullFace(o.BACK):H===ex?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):vt(o.CULL_FACE),R=H}function se(H){H!==V&&(ht&&o.lineWidth(H),V=H)}function $t(H,Lt,ct){H?(xt(o.POLYGON_OFFSET_FILL),(lt!==Lt||st!==ct)&&(o.polygonOffset(Lt,ct),lt=Lt,st=ct)):vt(o.POLYGON_OFFSET_FILL)}function He(H){H?xt(o.SCISSOR_TEST):vt(o.SCISSOR_TEST)}function N(H){H===void 0&&(H=o.TEXTURE0+pt-1),j!==H&&(o.activeTexture(H),j=H)}function T(H,Lt,ct){ct===void 0&&(j===null?ct=o.TEXTURE0+pt-1:ct=j);let mt=yt[ct];mt===void 0&&(mt={type:void 0,texture:void 0},yt[ct]=mt),(mt.type!==H||mt.texture!==Lt)&&(j!==ct&&(o.activeTexture(ct),j=ct),o.bindTexture(H,Lt||ot[H]),mt.type=H,mt.texture=Lt)}function rt(){const H=yt[j];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function St(){try{o.compressedTexImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function gt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Mt(){try{o.texSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Vt(){try{o.texSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function wt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ct(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ee(){try{o.texStorage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Tt(){try{o.texStorage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ft(){try{o.texImage2D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{o.texImage3D.apply(o,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function jt(H){tt.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),tt.copy(H))}function Rt(H){_t.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),_t.copy(H))}function Qt(H,Lt){let ct=m.get(Lt);ct===void 0&&(ct=new WeakMap,m.set(Lt,ct));let mt=ct.get(H);mt===void 0&&(mt=o.getUniformBlockIndex(Lt,H.name),ct.set(H,mt))}function Kt(H,Lt){const mt=m.get(Lt).get(H);d.get(Lt)!==mt&&(o.uniformBlockBinding(Lt,mt,H.__bindingPointIndex),d.set(Lt,mt))}function Ve(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},j=null,yt={},_={},S=new WeakMap,x=[],y=null,b=!1,C=null,M=null,v=null,B=null,w=null,P=null,nt=null,F=new be(0,0,0),O=0,Q=!1,D=null,R=null,V=null,lt=null,st=null,tt.set(0,0,o.canvas.width,o.canvas.height),_t.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),h.reset()}return{buffers:{color:l,depth:c,stencil:h},enable:xt,disable:vt,bindFramebuffer:kt,drawBuffers:Bt,useProgram:re,setBlending:le,setMaterial:Ee,setFlipSided:Yt,setCullFace:he,setLineWidth:se,setPolygonOffset:$t,setScissorTest:He,activeTexture:N,bindTexture:T,unbindTexture:rt,compressedTexImage2D:St,compressedTexImage3D:gt,texImage2D:Ft,texImage3D:ue,updateUBOMapping:Qt,uniformBlockBinding:Kt,texStorage2D:ee,texStorage3D:Tt,texSubImage2D:Mt,texSubImage3D:Vt,compressedTexSubImage2D:wt,compressedTexSubImage3D:Ct,scissor:jt,viewport:Rt,reset:Ve}}function ib(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Se,_=new WeakMap;let S;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,T){return y?new OffscreenCanvas(N,T):Eu("canvas")}function C(N,T,rt){let St=1;const gt=He(N);if((gt.width>rt||gt.height>rt)&&(St=rt/Math.max(gt.width,gt.height)),St<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Mt=Math.floor(St*gt.width),Vt=Math.floor(St*gt.height);S===void 0&&(S=b(Mt,Vt));const wt=T?b(Mt,Vt):S;return wt.width=Mt,wt.height=Vt,wt.getContext("2d").drawImage(N,0,0,Mt,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+Mt+"x"+Vt+")."),wt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),N;return N}function M(N){return N.generateMipmaps&&N.minFilter!==oi&&N.minFilter!==mi}function v(N){o.generateMipmap(N)}function B(N,T,rt,St,gt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Mt=T;if(T===o.RED&&(rt===o.FLOAT&&(Mt=o.R32F),rt===o.HALF_FLOAT&&(Mt=o.R16F),rt===o.UNSIGNED_BYTE&&(Mt=o.R8)),T===o.RED_INTEGER&&(rt===o.UNSIGNED_BYTE&&(Mt=o.R8UI),rt===o.UNSIGNED_SHORT&&(Mt=o.R16UI),rt===o.UNSIGNED_INT&&(Mt=o.R32UI),rt===o.BYTE&&(Mt=o.R8I),rt===o.SHORT&&(Mt=o.R16I),rt===o.INT&&(Mt=o.R32I)),T===o.RG&&(rt===o.FLOAT&&(Mt=o.RG32F),rt===o.HALF_FLOAT&&(Mt=o.RG16F),rt===o.UNSIGNED_BYTE&&(Mt=o.RG8)),T===o.RG_INTEGER&&(rt===o.UNSIGNED_BYTE&&(Mt=o.RG8UI),rt===o.UNSIGNED_SHORT&&(Mt=o.RG16UI),rt===o.UNSIGNED_INT&&(Mt=o.RG32UI),rt===o.BYTE&&(Mt=o.RG8I),rt===o.SHORT&&(Mt=o.RG16I),rt===o.INT&&(Mt=o.RG32I)),T===o.RGB&&rt===o.UNSIGNED_INT_5_9_9_9_REV&&(Mt=o.RGB9_E5),T===o.RGBA){const Vt=gt?Su:Ue.getTransfer(St);rt===o.FLOAT&&(Mt=o.RGBA32F),rt===o.HALF_FLOAT&&(Mt=o.RGBA16F),rt===o.UNSIGNED_BYTE&&(Mt=Vt===Fe?o.SRGB8_ALPHA8:o.RGBA8),rt===o.UNSIGNED_SHORT_4_4_4_4&&(Mt=o.RGBA4),rt===o.UNSIGNED_SHORT_5_5_5_1&&(Mt=o.RGB5_A1)}return(Mt===o.R16F||Mt===o.R32F||Mt===o.RG16F||Mt===o.RG32F||Mt===o.RGBA16F||Mt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Mt}function w(N,T){let rt;return N?T===null||T===As||T===bs?rt=o.DEPTH24_STENCIL8:T===Na?rt=o.DEPTH32F_STENCIL8:T===vu&&(rt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===As||T===bs?rt=o.DEPTH_COMPONENT24:T===Na?rt=o.DEPTH_COMPONENT32F:T===vu&&(rt=o.DEPTH_COMPONENT16),rt}function P(N,T){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==oi&&N.minFilter!==mi?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function nt(N){const T=N.target;T.removeEventListener("dispose",nt),O(T),T.isVideoTexture&&_.delete(T)}function F(N){const T=N.target;T.removeEventListener("dispose",F),D(T)}function O(N){const T=r.get(N);if(T.__webglInit===void 0)return;const rt=N.source,St=x.get(rt);if(St){const gt=St[T.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&Q(N),Object.keys(St).length===0&&x.delete(rt)}r.remove(N)}function Q(N){const T=r.get(N);o.deleteTexture(T.__webglTexture);const rt=N.source,St=x.get(rt);delete St[T.__cacheKey],h.memory.textures--}function D(N){const T=r.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let St=0;St<6;St++){if(Array.isArray(T.__webglFramebuffer[St]))for(let gt=0;gt<T.__webglFramebuffer[St].length;gt++)o.deleteFramebuffer(T.__webglFramebuffer[St][gt]);else o.deleteFramebuffer(T.__webglFramebuffer[St]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[St])}else{if(Array.isArray(T.__webglFramebuffer))for(let St=0;St<T.__webglFramebuffer.length;St++)o.deleteFramebuffer(T.__webglFramebuffer[St]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let St=0;St<T.__webglColorRenderbuffer.length;St++)T.__webglColorRenderbuffer[St]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[St]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const rt=N.textures;for(let St=0,gt=rt.length;St<gt;St++){const Mt=r.get(rt[St]);Mt.__webglTexture&&(o.deleteTexture(Mt.__webglTexture),h.memory.textures--),r.remove(rt[St])}r.remove(N)}let R=0;function V(){R=0}function lt(){const N=R;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),R+=1,N}function st(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function pt(N,T){const rt=r.get(N);if(N.isVideoTexture&&se(N),N.isRenderTargetTexture===!1&&N.version>0&&rt.__version!==N.version){const St=N.image;if(St===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(St.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_t(rt,N,T);return}}i.bindTexture(o.TEXTURE_2D,rt.__webglTexture,o.TEXTURE0+T)}function ht(N,T){const rt=r.get(N);if(N.version>0&&rt.__version!==N.version){_t(rt,N,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,rt.__webglTexture,o.TEXTURE0+T)}function L(N,T){const rt=r.get(N);if(N.version>0&&rt.__version!==N.version){_t(rt,N,T);return}i.bindTexture(o.TEXTURE_3D,rt.__webglTexture,o.TEXTURE0+T)}function q(N,T){const rt=r.get(N);if(N.version>0&&rt.__version!==N.version){W(rt,N,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture,o.TEXTURE0+T)}const j={[Th]:o.REPEAT,[dr]:o.CLAMP_TO_EDGE,[Ah]:o.MIRRORED_REPEAT},yt={[oi]:o.NEAREST,[Bx]:o.NEAREST_MIPMAP_NEAREST,[Yl]:o.NEAREST_MIPMAP_LINEAR,[mi]:o.LINEAR,[Hf]:o.LINEAR_MIPMAP_NEAREST,[pr]:o.LINEAR_MIPMAP_LINEAR},Et={[Qx]:o.NEVER,[iM]:o.ALWAYS,[Jx]:o.LESS,[lv]:o.LEQUAL,[$x]:o.EQUAL,[nM]:o.GEQUAL,[tM]:o.GREATER,[eM]:o.NOTEQUAL};function U(N,T){if(T.type===Na&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===mi||T.magFilter===Hf||T.magFilter===Yl||T.magFilter===pr||T.minFilter===mi||T.minFilter===Hf||T.minFilter===Yl||T.minFilter===pr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,j[T.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,j[T.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,j[T.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,yt[T.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,yt[T.minFilter]),T.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,Et[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===oi||T.minFilter!==Yl&&T.minFilter!==pr||T.type===Na&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const rt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function tt(N,T){let rt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",nt));const St=T.source;let gt=x.get(St);gt===void 0&&(gt={},x.set(St,gt));const Mt=st(T);if(Mt!==N.__cacheKey){gt[Mt]===void 0&&(gt[Mt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,rt=!0),gt[Mt].usedTimes++;const Vt=gt[N.__cacheKey];Vt!==void 0&&(gt[N.__cacheKey].usedTimes--,Vt.usedTimes===0&&Q(T)),N.__cacheKey=Mt,N.__webglTexture=gt[Mt].texture}return rt}function _t(N,T,rt){let St=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(St=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(St=o.TEXTURE_3D);const gt=tt(N,T),Mt=T.source;i.bindTexture(St,N.__webglTexture,o.TEXTURE0+rt);const Vt=r.get(Mt);if(Mt.version!==Vt.__version||gt===!0){i.activeTexture(o.TEXTURE0+rt);const wt=Ue.getPrimaries(Ue.workingColorSpace),Ct=T.colorSpace===La?null:Ue.getPrimaries(T.colorSpace),ee=T.colorSpace===La||wt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Tt=C(T.image,!1,l.maxTextureSize);Tt=$t(T,Tt);const Ft=c.convert(T.format,T.colorSpace),ue=c.convert(T.type);let jt=B(T.internalFormat,Ft,ue,T.colorSpace,T.isVideoTexture);U(St,T);let Rt;const Qt=T.mipmaps,Kt=T.isVideoTexture!==!0,Ve=Vt.__version===void 0||gt===!0,H=Mt.dataReady,Lt=P(T,Tt);if(T.isDepthTexture)jt=w(T.format===Rs,T.type),Ve&&(Kt?i.texStorage2D(o.TEXTURE_2D,1,jt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,Ft,ue,null));else if(T.isDataTexture)if(Qt.length>0){Kt&&Ve&&i.texStorage2D(o.TEXTURE_2D,Lt,jt,Qt[0].width,Qt[0].height);for(let ct=0,mt=Qt.length;ct<mt;ct++)Rt=Qt[ct],Kt?H&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Rt.width,Rt.height,Ft,ue,Rt.data):i.texImage2D(o.TEXTURE_2D,ct,jt,Rt.width,Rt.height,0,Ft,ue,Rt.data);T.generateMipmaps=!1}else Kt?(Ve&&i.texStorage2D(o.TEXTURE_2D,Lt,jt,Tt.width,Tt.height),H&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt.width,Tt.height,Ft,ue,Tt.data)):i.texImage2D(o.TEXTURE_2D,0,jt,Tt.width,Tt.height,0,Ft,ue,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Kt&&Ve&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,jt,Qt[0].width,Qt[0].height,Tt.depth);for(let ct=0,mt=Qt.length;ct<mt;ct++)if(Rt=Qt[ct],T.format!==Ei)if(Ft!==null)if(Kt){if(H)if(T.layerUpdates.size>0){for(const At of T.layerUpdates){const Wt=Rt.width*Rt.height;i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,At,Rt.width,Rt.height,1,Ft,Rt.data.slice(Wt*At,Wt*(At+1)),0,0)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,Rt.width,Rt.height,Tt.depth,Ft,Rt.data,0,0)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ct,jt,Rt.width,Rt.height,Tt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?H&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ct,0,0,0,Rt.width,Rt.height,Tt.depth,Ft,ue,Rt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ct,jt,Rt.width,Rt.height,Tt.depth,0,Ft,ue,Rt.data)}else{Kt&&Ve&&i.texStorage2D(o.TEXTURE_2D,Lt,jt,Qt[0].width,Qt[0].height);for(let ct=0,mt=Qt.length;ct<mt;ct++)Rt=Qt[ct],T.format!==Ei?Ft!==null?Kt?H&&i.compressedTexSubImage2D(o.TEXTURE_2D,ct,0,0,Rt.width,Rt.height,Ft,Rt.data):i.compressedTexImage2D(o.TEXTURE_2D,ct,jt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?H&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Rt.width,Rt.height,Ft,ue,Rt.data):i.texImage2D(o.TEXTURE_2D,ct,jt,Rt.width,Rt.height,0,Ft,ue,Rt.data)}else if(T.isDataArrayTexture)if(Kt){if(Ve&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,jt,Tt.width,Tt.height,Tt.depth),H)if(T.layerUpdates.size>0){let ct;switch(ue){case o.UNSIGNED_BYTE:switch(Ft){case o.ALPHA:ct=1;break;case o.LUMINANCE:ct=1;break;case o.LUMINANCE_ALPHA:ct=2;break;case o.RGB:ct=3;break;case o.RGBA:ct=4;break;default:throw new Error(`Unknown texel size for format ${Ft}.`)}break;case o.UNSIGNED_SHORT_4_4_4_4:case o.UNSIGNED_SHORT_5_5_5_1:case o.UNSIGNED_SHORT_5_6_5:ct=1;break;default:throw new Error(`Unknown texel size for type ${ue}.`)}const mt=Tt.width*Tt.height*ct;for(const At of T.layerUpdates)i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,At,Tt.width,Tt.height,1,Ft,ue,Tt.data.slice(mt*At,mt*(At+1)));T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ft,ue,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,jt,Tt.width,Tt.height,Tt.depth,0,Ft,ue,Tt.data);else if(T.isData3DTexture)Kt?(Ve&&i.texStorage3D(o.TEXTURE_3D,Lt,jt,Tt.width,Tt.height,Tt.depth),H&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ft,ue,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,jt,Tt.width,Tt.height,Tt.depth,0,Ft,ue,Tt.data);else if(T.isFramebufferTexture){if(Ve)if(Kt)i.texStorage2D(o.TEXTURE_2D,Lt,jt,Tt.width,Tt.height);else{let ct=Tt.width,mt=Tt.height;for(let At=0;At<Lt;At++)i.texImage2D(o.TEXTURE_2D,At,jt,ct,mt,0,Ft,ue,null),ct>>=1,mt>>=1}}else if(Qt.length>0){if(Kt&&Ve){const ct=He(Qt[0]);i.texStorage2D(o.TEXTURE_2D,Lt,jt,ct.width,ct.height)}for(let ct=0,mt=Qt.length;ct<mt;ct++)Rt=Qt[ct],Kt?H&&i.texSubImage2D(o.TEXTURE_2D,ct,0,0,Ft,ue,Rt):i.texImage2D(o.TEXTURE_2D,ct,jt,Ft,ue,Rt);T.generateMipmaps=!1}else if(Kt){if(Ve){const ct=He(Tt);i.texStorage2D(o.TEXTURE_2D,Lt,jt,ct.width,ct.height)}H&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ft,ue,Tt)}else i.texImage2D(o.TEXTURE_2D,0,jt,Ft,ue,Tt);M(T)&&v(St),Vt.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function W(N,T,rt){if(T.image.length!==6)return;const St=tt(N,T),gt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+rt);const Mt=r.get(gt);if(gt.version!==Mt.__version||St===!0){i.activeTexture(o.TEXTURE0+rt);const Vt=Ue.getPrimaries(Ue.workingColorSpace),wt=T.colorSpace===La?null:Ue.getPrimaries(T.colorSpace),Ct=T.colorSpace===La||Vt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const ee=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,Ft=[];for(let mt=0;mt<6;mt++)!ee&&!Tt?Ft[mt]=C(T.image[mt],!0,l.maxCubemapSize):Ft[mt]=Tt?T.image[mt].image:T.image[mt],Ft[mt]=$t(T,Ft[mt]);const ue=Ft[0],jt=c.convert(T.format,T.colorSpace),Rt=c.convert(T.type),Qt=B(T.internalFormat,jt,Rt,T.colorSpace),Kt=T.isVideoTexture!==!0,Ve=Mt.__version===void 0||St===!0,H=gt.dataReady;let Lt=P(T,ue);U(o.TEXTURE_CUBE_MAP,T);let ct;if(ee){Kt&&Ve&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,Qt,ue.width,ue.height);for(let mt=0;mt<6;mt++){ct=Ft[mt].mipmaps;for(let At=0;At<ct.length;At++){const Wt=ct[At];T.format!==Ei?jt!==null?Kt?H&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At,0,0,Wt.width,Wt.height,jt,Wt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At,Qt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?H&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At,0,0,Wt.width,Wt.height,jt,Rt,Wt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At,Qt,Wt.width,Wt.height,0,jt,Rt,Wt.data)}}}else{if(ct=T.mipmaps,Kt&&Ve){ct.length>0&&Lt++;const mt=He(Ft[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,Qt,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Tt){Kt?H&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Ft[mt].width,Ft[mt].height,jt,Rt,Ft[mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Qt,Ft[mt].width,Ft[mt].height,0,jt,Rt,Ft[mt].data);for(let At=0;At<ct.length;At++){const de=ct[At].image[mt].image;Kt?H&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At+1,0,0,de.width,de.height,jt,Rt,de.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At+1,Qt,de.width,de.height,0,jt,Rt,de.data)}}else{Kt?H&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,jt,Rt,Ft[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Qt,jt,Rt,Ft[mt]);for(let At=0;At<ct.length;At++){const Wt=ct[At];Kt?H&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At+1,0,0,jt,Rt,Wt.image[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,At+1,Qt,jt,Rt,Wt.image[mt])}}}M(T)&&v(o.TEXTURE_CUBE_MAP),Mt.__version=gt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ot(N,T,rt,St,gt,Mt){const Vt=c.convert(rt.format,rt.colorSpace),wt=c.convert(rt.type),Ct=B(rt.internalFormat,Vt,wt,rt.colorSpace);if(!r.get(T).__hasExternalTextures){const Tt=Math.max(1,T.width>>Mt),Ft=Math.max(1,T.height>>Mt);gt===o.TEXTURE_3D||gt===o.TEXTURE_2D_ARRAY?i.texImage3D(gt,Mt,Ct,Tt,Ft,T.depth,0,Vt,wt,null):i.texImage2D(gt,Mt,Ct,Tt,Ft,0,Vt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),he(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,St,gt,r.get(rt).__webglTexture,0,Yt(T)):(gt===o.TEXTURE_2D||gt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,St,gt,r.get(rt).__webglTexture,Mt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function xt(N,T,rt){if(o.bindRenderbuffer(o.RENDERBUFFER,N),T.depthBuffer){const St=T.depthTexture,gt=St&&St.isDepthTexture?St.type:null,Mt=w(T.stencilBuffer,gt),Vt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=Yt(T);he(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,Mt,T.width,T.height):rt?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,Mt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Mt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Vt,o.RENDERBUFFER,N)}else{const St=T.textures;for(let gt=0;gt<St.length;gt++){const Mt=St[gt],Vt=c.convert(Mt.format,Mt.colorSpace),wt=c.convert(Mt.type),Ct=B(Mt.internalFormat,Vt,wt,Mt.colorSpace),ee=Yt(T);rt&&he(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,ee,Ct,T.width,T.height):he(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ee,Ct,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ct,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function vt(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pt(T.depthTexture,0);const St=r.get(T.depthTexture).__webglTexture,gt=Yt(T);if(T.depthTexture.format===Ms)he(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(T.depthTexture.format===Rs)he(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function kt(N){const T=r.get(N),rt=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(rt)throw new Error("target.depthTexture not supported in Cube render targets");vt(T.__webglFramebuffer,N)}else if(rt){T.__webglDepthbuffer=[];for(let St=0;St<6;St++)i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[St]),T.__webglDepthbuffer[St]=o.createRenderbuffer(),xt(T.__webglDepthbuffer[St],N,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),xt(T.__webglDepthbuffer,N,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function Bt(N,T,rt){const St=r.get(N);T!==void 0&&ot(St.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),rt!==void 0&&kt(N)}function re(N){const T=N.texture,rt=r.get(N),St=r.get(T);N.addEventListener("dispose",F);const gt=N.textures,Mt=N.isWebGLCubeRenderTarget===!0,Vt=gt.length>1;if(Vt||(St.__webglTexture===void 0&&(St.__webglTexture=o.createTexture()),St.__version=T.version,h.memory.textures++),Mt){rt.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0){rt.__webglFramebuffer[wt]=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)rt.__webglFramebuffer[wt][Ct]=o.createFramebuffer()}else rt.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){rt.__webglFramebuffer=[];for(let wt=0;wt<T.mipmaps.length;wt++)rt.__webglFramebuffer[wt]=o.createFramebuffer()}else rt.__webglFramebuffer=o.createFramebuffer();if(Vt)for(let wt=0,Ct=gt.length;wt<Ct;wt++){const ee=r.get(gt[wt]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&he(N)===!1){rt.__webglMultisampledFramebuffer=o.createFramebuffer(),rt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let wt=0;wt<gt.length;wt++){const Ct=gt[wt];rt.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,rt.__webglColorRenderbuffer[wt]);const ee=c.convert(Ct.format,Ct.colorSpace),Tt=c.convert(Ct.type),Ft=B(Ct.internalFormat,ee,Tt,Ct.colorSpace,N.isXRRenderTarget===!0),ue=Yt(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,ue,Ft,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,rt.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(rt.__webglDepthRenderbuffer=o.createRenderbuffer(),xt(rt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Mt){i.bindTexture(o.TEXTURE_CUBE_MAP,St.__webglTexture),U(o.TEXTURE_CUBE_MAP,T);for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ct=0;Ct<T.mipmaps.length;Ct++)ot(rt.__webglFramebuffer[wt][Ct],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Ct);else ot(rt.__webglFramebuffer[wt],N,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);M(T)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let wt=0,Ct=gt.length;wt<Ct;wt++){const ee=gt[wt],Tt=r.get(ee);i.bindTexture(o.TEXTURE_2D,Tt.__webglTexture),U(o.TEXTURE_2D,ee),ot(rt.__webglFramebuffer,N,ee,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),M(ee)&&v(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(wt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,St.__webglTexture),U(wt,T),T.mipmaps&&T.mipmaps.length>0)for(let Ct=0;Ct<T.mipmaps.length;Ct++)ot(rt.__webglFramebuffer[Ct],N,T,o.COLOR_ATTACHMENT0,wt,Ct);else ot(rt.__webglFramebuffer,N,T,o.COLOR_ATTACHMENT0,wt,0);M(T)&&v(wt),i.unbindTexture()}N.depthBuffer&&kt(N)}function G(N){const T=N.textures;for(let rt=0,St=T.length;rt<St;rt++){const gt=T[rt];if(M(gt)){const Mt=N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Vt=r.get(gt).__webglTexture;i.bindTexture(Mt,Vt),v(Mt),i.unbindTexture()}}}const oe=[],le=[];function Ee(N){if(N.samples>0){if(he(N)===!1){const T=N.textures,rt=N.width,St=N.height;let gt=o.COLOR_BUFFER_BIT;const Mt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Vt=r.get(N),wt=T.length>1;if(wt)for(let Ct=0;Ct<T.length;Ct++)i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Ct=0;Ct<T.length;Ct++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(gt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(gt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Ct]);const ee=r.get(T[Ct]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ee,0)}o.blitFramebuffer(0,0,rt,St,0,0,rt,St,gt,o.NEAREST),m===!0&&(oe.length=0,le.length=0,oe.push(o.COLOR_ATTACHMENT0+Ct),N.depthBuffer&&N.resolveDepthBuffer===!1&&(oe.push(Mt),le.push(Mt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,le)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,oe))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let Ct=0;Ct<T.length;Ct++){i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[Ct]);const ee=r.get(T[Ct]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.TEXTURE_2D,ee,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const T=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Yt(N){return Math.min(l.maxSamples,N.samples)}function he(N){const T=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function se(N){const T=h.render.frame;_.get(N)!==T&&(_.set(N,T),N.update())}function $t(N,T){const rt=N.colorSpace,St=N.format,gt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||rt!==Fa&&rt!==La&&(Ue.getTransfer(rt)===Fe?(St!==Ei||gt!==Ba)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",rt)),T}function He(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=V,this.setTexture2D=pt,this.setTexture2DArray=ht,this.setTexture3D=L,this.setTextureCube=q,this.rebindTextures=Bt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=he}function ab(o,e){function i(r,l=La){let c;const h=Ue.getTransfer(l);if(r===Ba)return o.UNSIGNED_BYTE;if(r===nv)return o.UNSIGNED_SHORT_4_4_4_4;if(r===iv)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Hx)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Ix)return o.BYTE;if(r===Fx)return o.SHORT;if(r===vu)return o.UNSIGNED_SHORT;if(r===ev)return o.INT;if(r===As)return o.UNSIGNED_INT;if(r===Na)return o.FLOAT;if(r===Au)return o.HALF_FLOAT;if(r===Gx)return o.ALPHA;if(r===Vx)return o.RGB;if(r===Ei)return o.RGBA;if(r===Xx)return o.LUMINANCE;if(r===kx)return o.LUMINANCE_ALPHA;if(r===Ms)return o.DEPTH_COMPONENT;if(r===Rs)return o.DEPTH_STENCIL;if(r===Wx)return o.RED;if(r===av)return o.RED_INTEGER;if(r===qx)return o.RG;if(r===rv)return o.RG_INTEGER;if(r===sv)return o.RGBA_INTEGER;if(r===Gf||r===Vf||r===Xf||r===kf)if(h===Fe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Gf)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Gf)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Og||r===Pg||r===zg||r===Bg)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Og)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pg)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zg)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bg)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ig||r===Fg||r===Hg)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Ig||r===Fg)return h===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Hg)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Gg||r===Vg||r===Xg||r===kg||r===Wg||r===qg||r===Yg||r===jg||r===Zg||r===Kg||r===Qg||r===Jg||r===$g||r===t_)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Gg)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Vg)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xg)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===kg)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wg)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qg)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yg)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jg)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Zg)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kg)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qg)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jg)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$g)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===t_)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wf||r===e_||r===n_)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Wf)return h===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===e_)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===n_)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Yx||r===i_||r===a_||r===r_)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Wf)return c.COMPRESSED_RED_RGTC1_EXT;if(r===i_)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===a_)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===r_)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bs?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class rb extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class mu extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sb={type:"move"};class vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),v=this._getHandJoint(p,C);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const _=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],x=_.position.distanceTo(S.position),y=.02,b=.005;p.inputState.pinching&&x>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(sb)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new mu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const ob=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lb=`
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

}`;class ub{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Fn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ia({vertexShader:ob,fragmentShader:lb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ti(new zo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class cb extends ws{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,S=null,x=null,y=null,b=null;const C=new ub,M=i.getContextAttributes();let v=null,B=null;const w=[],P=[],nt=new Se;let F=null;const O=new si;O.layers.enable(1),O.viewport=new cn;const Q=new si;Q.layers.enable(2),Q.viewport=new cn;const D=[O,Q],R=new rb;R.layers.enable(1),R.layers.enable(2);let V=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ot=w[W];return ot===void 0&&(ot=new vh,w[W]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(W){let ot=w[W];return ot===void 0&&(ot=new vh,w[W]=ot),ot.getGripSpace()},this.getHand=function(W){let ot=w[W];return ot===void 0&&(ot=new vh,w[W]=ot),ot.getHandSpace()};function st(W){const ot=P.indexOf(W.inputSource);if(ot===-1)return;const xt=w[ot];xt!==void 0&&(xt.update(W.inputSource,W.frame,p||h),xt.dispatchEvent({type:W.type,data:W.inputSource}))}function pt(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",pt),l.removeEventListener("inputsourceschange",ht);for(let W=0;W<w.length;W++){const ot=P[W];ot!==null&&(P[W]=null,w[W].disconnect(ot))}V=null,lt=null,C.reset(),e.setRenderTarget(v),y=null,x=null,S=null,l=null,B=null,_t.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(nt.width,nt.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){d=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(W){p=W},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return S},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(v=e.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",pt),l.addEventListener("inputsourceschange",ht),M.xrCompatible!==!0&&await i.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(nt),l.renderState.layers===void 0){const ot={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,ot),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),B=new gr(y.framebufferWidth,y.framebufferHeight,{format:Ei,type:Ba,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let ot=null,xt=null,vt=null;M.depth&&(vt=M.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ot=M.stencil?Rs:Ms,xt=M.stencil?bs:As);const kt={colorFormat:i.RGBA8,depthFormat:vt,scaleFactor:c};S=new XRWebGLBinding(l,i),x=S.createProjectionLayer(kt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),B=new gr(x.textureWidth,x.textureHeight,{format:Ei,type:Ba,depthTexture:new Ev(x.textureWidth,x.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),_t.setContext(l),_t.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function ht(W){for(let ot=0;ot<W.removed.length;ot++){const xt=W.removed[ot],vt=P.indexOf(xt);vt>=0&&(P[vt]=null,w[vt].disconnect(xt))}for(let ot=0;ot<W.added.length;ot++){const xt=W.added[ot];let vt=P.indexOf(xt);if(vt===-1){for(let Bt=0;Bt<w.length;Bt++)if(Bt>=P.length){P.push(xt),vt=Bt;break}else if(P[Bt]===null){P[Bt]=xt,vt=Bt;break}if(vt===-1)break}const kt=w[vt];kt&&kt.connect(xt)}}const L=new at,q=new at;function j(W,ot,xt){L.setFromMatrixPosition(ot.matrixWorld),q.setFromMatrixPosition(xt.matrixWorld);const vt=L.distanceTo(q),kt=ot.projectionMatrix.elements,Bt=xt.projectionMatrix.elements,re=kt[14]/(kt[10]-1),G=kt[14]/(kt[10]+1),oe=(kt[9]+1)/kt[5],le=(kt[9]-1)/kt[5],Ee=(kt[8]-1)/kt[0],Yt=(Bt[8]+1)/Bt[0],he=re*Ee,se=re*Yt,$t=vt/(-Ee+Yt),He=$t*-Ee;ot.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(He),W.translateZ($t),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const N=re+$t,T=G+$t,rt=he-He,St=se+(vt-He),gt=oe*G/T*N,Mt=le*G/T*N;W.projectionMatrix.makePerspective(rt,St,gt,Mt,N,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function yt(W,ot){ot===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ot.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;C.texture!==null&&(W.near=C.depthNear,W.far=C.depthFar),R.near=Q.near=O.near=W.near,R.far=Q.far=O.far=W.far,(V!==R.near||lt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),V=R.near,lt=R.far,O.near=V,O.far=lt,Q.near=V,Q.far=lt,O.updateProjectionMatrix(),Q.updateProjectionMatrix(),W.updateProjectionMatrix());const ot=W.parent,xt=R.cameras;yt(R,ot);for(let vt=0;vt<xt.length;vt++)yt(xt[vt],ot);xt.length===2?j(R,O,Q):R.projectionMatrix.copy(O.projectionMatrix),Et(W,R,ot)};function Et(W,ot,xt){xt===null?W.matrix.copy(ot.matrixWorld):(W.matrix.copy(xt.matrixWorld),W.matrix.invert(),W.matrix.multiply(ot.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ot.projectionMatrix),W.projectionMatrixInverse.copy(ot.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=bh*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(W){m=W,x!==null&&(x.fixedFoveation=W),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=W)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let U=null;function tt(W,ot){if(_=ot.getViewerPose(p||h),b=ot,_!==null){const xt=_.views;y!==null&&(e.setRenderTargetFramebuffer(B,y.framebuffer),e.setRenderTarget(B));let vt=!1;xt.length!==R.cameras.length&&(R.cameras.length=0,vt=!0);for(let Bt=0;Bt<xt.length;Bt++){const re=xt[Bt];let G=null;if(y!==null)G=y.getViewport(re);else{const le=S.getViewSubImage(x,re);G=le.viewport,Bt===0&&(e.setRenderTargetTextures(B,le.colorTexture,x.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(B))}let oe=D[Bt];oe===void 0&&(oe=new si,oe.layers.enable(Bt),oe.viewport=new cn,D[Bt]=oe),oe.matrix.fromArray(re.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(re.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(G.x,G.y,G.width,G.height),Bt===0&&(R.matrix.copy(oe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),vt===!0&&R.cameras.push(oe)}const kt=l.enabledFeatures;if(kt&&kt.includes("depth-sensing")){const Bt=S.getDepthInformation(xt[0]);Bt&&Bt.isValid&&Bt.texture&&C.init(e,Bt,l.renderState)}}for(let xt=0;xt<w.length;xt++){const vt=P[xt],kt=w[xt];vt!==null&&kt!==void 0&&kt.update(vt,ot,p||h)}U&&U(W,ot),ot.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ot}),b=null}const _t=new Mv;_t.setAnimationLoop(tt),this.setAnimationLoop=function(W){U=W},this.dispose=function(){}}}const lr=new bi,fb=new je;function hb(o,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,vv(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,B,w,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),S(M,v)):v.isMeshPhongMaterial?(c(M,v),_(M,v)):v.isMeshStandardMaterial?(c(M,v),x(M,v),v.isMeshPhysicalMaterial&&y(M,v,P)):v.isMeshMatcapMaterial?(c(M,v),b(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),C(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,B,w):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===In&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===In&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const B=e.get(v),w=B.envMap,P=B.envMapRotation;w&&(M.envMap.value=w,lr.copy(P),lr.x*=-1,lr.y*=-1,lr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),M.envMapRotation.value.setFromMatrix4(fb.makeRotationFromEuler(lr)),M.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,B,w){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*B,M.scale.value=w*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function _(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function S(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,B){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===In&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,v){v.matcap&&(M.matcap.value=v.matcap)}function C(M,v){const B=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function db(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,w){const P=w.program;r.uniformBlockBinding(B,P)}function p(B,w){let P=l[B.id];P===void 0&&(b(B),P=_(B),l[B.id]=P,B.addEventListener("dispose",M));const nt=w.program;r.updateUBOMapping(B,nt);const F=e.render.frame;c[B.id]!==F&&(x(B),c[B.id]=F)}function _(B){const w=S();B.__bindingPointIndex=w;const P=o.createBuffer(),nt=B.__size,F=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,nt,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,w,P),P}function S(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(B){const w=l[B.id],P=B.uniforms,nt=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,w);for(let F=0,O=P.length;F<O;F++){const Q=Array.isArray(P[F])?P[F]:[P[F]];for(let D=0,R=Q.length;D<R;D++){const V=Q[D];if(y(V,F,D,nt)===!0){const lt=V.__offset,st=Array.isArray(V.value)?V.value:[V.value];let pt=0;for(let ht=0;ht<st.length;ht++){const L=st[ht],q=C(L);typeof L=="number"||typeof L=="boolean"?(V.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,lt+pt,V.__data)):L.isMatrix3?(V.__data[0]=L.elements[0],V.__data[1]=L.elements[1],V.__data[2]=L.elements[2],V.__data[3]=0,V.__data[4]=L.elements[3],V.__data[5]=L.elements[4],V.__data[6]=L.elements[5],V.__data[7]=0,V.__data[8]=L.elements[6],V.__data[9]=L.elements[7],V.__data[10]=L.elements[8],V.__data[11]=0):(L.toArray(V.__data,pt),pt+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(B,w,P,nt){const F=B.value,O=w+"_"+P;if(nt[O]===void 0)return typeof F=="number"||typeof F=="boolean"?nt[O]=F:nt[O]=F.clone(),!0;{const Q=nt[O];if(typeof F=="number"||typeof F=="boolean"){if(Q!==F)return nt[O]=F,!0}else if(Q.equals(F)===!1)return Q.copy(F),!0}return!1}function b(B){const w=B.uniforms;let P=0;const nt=16;for(let O=0,Q=w.length;O<Q;O++){const D=Array.isArray(w[O])?w[O]:[w[O]];for(let R=0,V=D.length;R<V;R++){const lt=D[R],st=Array.isArray(lt.value)?lt.value:[lt.value];for(let pt=0,ht=st.length;pt<ht;pt++){const L=st[pt],q=C(L),j=P%nt;j!==0&&nt-j<q.boundary&&(P+=nt-j),lt.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=P,P+=q.storage}}}const F=P%nt;return F>0&&(P+=nt-F),B.__size=P,B.__cache={},this}function C(B){const w={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(w.boundary=4,w.storage=4):B.isVector2?(w.boundary=8,w.storage=8):B.isVector3||B.isColor?(w.boundary=16,w.storage=12):B.isVector4?(w.boundary=16,w.storage=16):B.isMatrix3?(w.boundary=48,w.storage=48):B.isMatrix4?(w.boundary=64,w.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),w}function M(B){const w=B.target;w.removeEventListener("dispose",M);const P=h.indexOf(w.__bindingPointIndex);h.splice(P,1),o.deleteBuffer(l[w.id]),delete l[w.id],delete c[w.id]}function v(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}class pb{constructor(e={}){const{canvas:i=rM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=h;const y=new Uint32Array(4),b=new Int32Array(4);let C=null,M=null;const v=[],B=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xi,this.toneMapping=Pa,this.toneMappingExposure=1;const w=this;let P=!1,nt=0,F=0,O=null,Q=-1,D=null;const R=new cn,V=new cn;let lt=null;const st=new be(0);let pt=0,ht=i.width,L=i.height,q=1,j=null,yt=null;const Et=new cn(0,0,ht,L),U=new cn(0,0,ht,L);let tt=!1;const _t=new Lh;let W=!1,ot=!1;const xt=new je,vt=new at,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function re(){return O===null?q:1}let G=r;function oe(A,X){return i.getContext(A,X)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wh}`),i.addEventListener("webglcontextlost",Lt,!1),i.addEventListener("webglcontextrestored",ct,!1),i.addEventListener("webglcontextcreationerror",mt,!1),G===null){const X="webgl2";if(G=oe(X,A),G===null)throw oe(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let le,Ee,Yt,he,se,$t,He,N,T,rt,St,gt,Mt,Vt,wt,Ct,ee,Tt,Ft,ue,jt,Rt,Qt,Kt;function Ve(){le=new yT(G),le.init(),Rt=new ab(G,le),Ee=new gT(G,le,e,Rt),Yt=new nb(G),he=new AT(G),se=new VA,$t=new ib(G,le,Yt,se,Ee,Rt,he),He=new vT(w),N=new MT(w),T=new LM(G),Qt=new pT(G,T),rt=new ET(G,T,he,Qt),St=new RT(G,rt,T,he),Ft=new bT(G,Ee,$t),Ct=new _T(se),gt=new GA(w,He,N,le,Ee,Qt,Ct),Mt=new hb(w,se),Vt=new kA,wt=new KA(le),Tt=new dT(w,He,N,Yt,St,x,m),ee=new eb(w,St,Ee),Kt=new db(G,he,Ee,Yt),ue=new mT(G,le,he),jt=new TT(G,le,he),he.programs=gt.programs,w.capabilities=Ee,w.extensions=le,w.properties=se,w.renderLists=Vt,w.shadowMap=ee,w.state=Yt,w.info=he}Ve();const H=new cb(w,G);this.xr=H,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=le.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=le.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(ht,L,!1))},this.getSize=function(A){return A.set(ht,L)},this.setSize=function(A,X,$=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ht=A,L=X,i.width=Math.floor(A*q),i.height=Math.floor(X*q),$===!0&&(i.style.width=A+"px",i.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(ht*q,L*q).floor()},this.setDrawingBufferSize=function(A,X,$){ht=A,L=X,q=$,i.width=Math.floor(A*$),i.height=Math.floor(X*$),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(Et)},this.setViewport=function(A,X,$,et){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,X,$,et),Yt.viewport(R.copy(Et).multiplyScalar(q).round())},this.getScissor=function(A){return A.copy(U)},this.setScissor=function(A,X,$,et){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,X,$,et),Yt.scissor(V.copy(U).multiplyScalar(q).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(A){Yt.setScissorTest(tt=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){yt=A},this.getClearColor=function(A){return A.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(A=!0,X=!0,$=!0){let et=0;if(A){let Y=!1;if(O!==null){const bt=O.texture.format;Y=bt===sv||bt===rv||bt===av}if(Y){const bt=O.texture.type,Dt=bt===Ba||bt===As||bt===vu||bt===bs||bt===nv||bt===iv,Nt=Tt.getClearColor(),zt=Tt.getClearAlpha(),Xt=Nt.r,Ot=Nt.g,qt=Nt.b;Dt?(y[0]=Xt,y[1]=Ot,y[2]=qt,y[3]=zt,G.clearBufferuiv(G.COLOR,0,y)):(b[0]=Xt,b[1]=Ot,b[2]=qt,b[3]=zt,G.clearBufferiv(G.COLOR,0,b))}else et|=G.COLOR_BUFFER_BIT}X&&(et|=G.DEPTH_BUFFER_BIT),$&&(et|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Lt,!1),i.removeEventListener("webglcontextrestored",ct,!1),i.removeEventListener("webglcontextcreationerror",mt,!1),Vt.dispose(),wt.dispose(),se.dispose(),He.dispose(),N.dispose(),St.dispose(),Qt.dispose(),Kt.dispose(),gt.dispose(),H.dispose(),H.removeEventListener("sessionstart",bn),H.removeEventListener("sessionend",_n),Ri.stop()};function Lt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const A=he.autoReset,X=ee.enabled,$=ee.autoUpdate,et=ee.needsUpdate,Y=ee.type;Ve(),he.autoReset=A,ee.enabled=X,ee.autoUpdate=$,ee.needsUpdate=et,ee.type=Y}function mt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function At(A){const X=A.target;X.removeEventListener("dispose",At),Wt(X)}function Wt(A){de(A),se.remove(A)}function de(A){const X=se.get(A).programs;X!==void 0&&(X.forEach(function($){gt.releaseProgram($)}),A.isShaderMaterial&&gt.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,$,et,Y,bt){X===null&&(X=kt);const Dt=Y.isMesh&&Y.matrixWorld.determinant()<0,Nt=an(A,X,$,et,Y);Yt.setMaterial(et,Dt);let zt=$.index,Xt=1;if(et.wireframe===!0){if(zt=rt.getWireframeAttribute($),zt===void 0)return;Xt=2}const Ot=$.drawRange,qt=$.attributes.position;let _e=Ot.start*Xt,Re=(Ot.start+Ot.count)*Xt;bt!==null&&(_e=Math.max(_e,bt.start*Xt),Re=Math.min(Re,(bt.start+bt.count)*Xt)),zt!==null?(_e=Math.max(_e,0),Re=Math.min(Re,zt.count)):qt!=null&&(_e=Math.max(_e,0),Re=Math.min(Re,qt.count));const Ce=Re-_e;if(Ce<0||Ce===1/0)return;Qt.setup(Y,et,Nt,$,zt);let En,xe=ue;if(zt!==null&&(En=T.get(zt),xe=jt,xe.setIndex(En)),Y.isMesh)et.wireframe===!0?(Yt.setLineWidth(et.wireframeLinewidth*re()),xe.setMode(G.LINES)):xe.setMode(G.TRIANGLES);else if(Y.isLine){let Ht=et.linewidth;Ht===void 0&&(Ht=1),Yt.setLineWidth(Ht*re()),Y.isLineSegments?xe.setMode(G.LINES):Y.isLineLoop?xe.setMode(G.LINE_LOOP):xe.setMode(G.LINE_STRIP)}else Y.isPoints?xe.setMode(G.POINTS):Y.isSprite&&xe.setMode(G.TRIANGLES);if(Y.isBatchedMesh)Y._multiDrawInstances!==null?xe.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances):xe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)xe.renderInstances(_e,Ce,Y.count);else if($.isInstancedBufferGeometry){const Ht=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,fn=Math.min($.instanceCount,Ht);xe.renderInstances(_e,Ce,fn)}else xe.render(_e,Ce)};function Pe(A,X,$){A.transparent===!0&&A.side===Qi&&A.forceSinglePass===!1?(A.side=In,A.needsUpdate=!0,Ha(A,X,$),A.side=za,A.needsUpdate=!0,Ha(A,X,$),A.side=Qi):Ha(A,X,$)}this.compile=function(A,X,$=null){$===null&&($=A),M=wt.get($),M.init(X),B.push(M),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),A!==$&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(M.pushLight(Y),Y.castShadow&&M.pushShadow(Y))}),M.setupLights();const et=new Set;return A.traverse(function(Y){const bt=Y.material;if(bt)if(Array.isArray(bt))for(let Dt=0;Dt<bt.length;Dt++){const Nt=bt[Dt];Pe(Nt,$,Y),et.add(Nt)}else Pe(bt,$,Y),et.add(bt)}),B.pop(),M=null,et},this.compileAsync=function(A,X,$=null){const et=this.compile(A,X,$);return new Promise(Y=>{function bt(){if(et.forEach(function(Dt){se.get(Dt).currentProgram.isReady()&&et.delete(Dt)}),et.size===0){Y(A);return}setTimeout(bt,10)}le.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Ze=null;function Te(A){Ze&&Ze(A)}function bn(){Ri.stop()}function _n(){Ri.start()}const Ri=new Mv;Ri.setAnimationLoop(Te),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(A){Ze=A,H.setAnimationLoop(A),A===null?Ri.stop():Ri.start()},H.addEventListener("sessionstart",bn),H.addEventListener("sessionend",_n),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(X),X=H.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,X,O),M=wt.get(A,B.length),M.init(X),B.push(M),xt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),_t.setFromProjectionMatrix(xt),ot=this.localClippingEnabled,W=Ct.init(this.clippingPlanes,ot),C=Vt.get(A,v.length),C.init(),v.push(C),H.enabled===!0&&H.isPresenting===!0){const bt=w.xr.getDepthSensingMesh();bt!==null&&vr(bt,X,-1/0,w.sortObjects)}vr(A,X,0,w.sortObjects),C.finish(),w.sortObjects===!0&&C.sort(j,yt),Bt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Bt&&Tt.addToRenderList(C,A),this.info.render.frame++,W===!0&&Ct.beginShadows();const $=M.state.shadowsArray;ee.render($,A,X),W===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=C.opaque,Y=C.transmissive;if(M.setupLights(),X.isArrayCamera){const bt=X.cameras;if(Y.length>0)for(let Dt=0,Nt=bt.length;Dt<Nt;Dt++){const zt=bt[Dt];Ls(et,Y,A,zt)}Bt&&Tt.render(A);for(let Dt=0,Nt=bt.length;Dt<Nt;Dt++){const zt=bt[Dt];Us(C,A,zt,zt.viewport)}}else Y.length>0&&Ls(et,Y,A,X),Bt&&Tt.render(A),Us(C,A,X);O!==null&&($t.updateMultisampleRenderTarget(O),$t.updateRenderTargetMipmap(O)),A.isScene===!0&&A.onAfterRender(w,A,X),Qt.resetDefaultState(),Q=-1,D=null,B.pop(),B.length>0?(M=B[B.length-1],W===!0&&Ct.setGlobalState(w.clippingPlanes,M.state.camera)):M=null,v.pop(),v.length>0?C=v[v.length-1]:C=null};function vr(A,X,$,et){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||_t.intersectsSprite(A)){et&&vt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xt);const Dt=St.update(A),Nt=A.material;Nt.visible&&C.push(A,Dt,Nt,$,vt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||_t.intersectsObject(A))){const Dt=St.update(A),Nt=A.material;if(et&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),vt.copy(A.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),vt.copy(Dt.boundingSphere.center)),vt.applyMatrix4(A.matrixWorld).applyMatrix4(xt)),Array.isArray(Nt)){const zt=Dt.groups;for(let Xt=0,Ot=zt.length;Xt<Ot;Xt++){const qt=zt[Xt],_e=Nt[qt.materialIndex];_e&&_e.visible&&C.push(A,Dt,_e,$,vt.z,qt)}}else Nt.visible&&C.push(A,Dt,Nt,$,vt.z,null)}}const bt=A.children;for(let Dt=0,Nt=bt.length;Dt<Nt;Dt++)vr(bt[Dt],X,$,et)}function Us(A,X,$,et){const Y=A.opaque,bt=A.transmissive,Dt=A.transparent;M.setupLightsView($),W===!0&&Ct.setGlobalState(w.clippingPlanes,$),et&&Yt.viewport(R.copy(et)),Y.length>0&&ea(Y,X,$),bt.length>0&&ea(bt,X,$),Dt.length>0&&ea(Dt,X,$),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function Ls(A,X,$,et){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;M.state.transmissionRenderTarget[et.id]===void 0&&(M.state.transmissionRenderTarget[et.id]=new gr(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?Au:Ba,minFilter:pr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const bt=M.state.transmissionRenderTarget[et.id],Dt=et.viewport||R;bt.setSize(Dt.z,Dt.w);const Nt=w.getRenderTarget();w.setRenderTarget(bt),w.getClearColor(st),pt=w.getClearAlpha(),pt<1&&w.setClearColor(16777215,.5),Bt?Tt.render($):w.clear();const zt=w.toneMapping;w.toneMapping=Pa;const Xt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),M.setupLightsView(et),W===!0&&Ct.setGlobalState(w.clippingPlanes,et),ea(A,$,et),$t.updateMultisampleRenderTarget(bt),$t.updateRenderTargetMipmap(bt),le.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let qt=0,_e=X.length;qt<_e;qt++){const Re=X[qt],Ce=Re.object,En=Re.geometry,xe=Re.material,Ht=Re.group;if(xe.side===Qi&&Ce.layers.test(et.layers)){const fn=xe.side;xe.side=In,xe.needsUpdate=!0,Sr(Ce,$,et,En,xe,Ht),xe.side=fn,xe.needsUpdate=!0,Ot=!0}}Ot===!0&&($t.updateMultisampleRenderTarget(bt),$t.updateRenderTargetMipmap(bt))}w.setRenderTarget(Nt),w.setClearColor(st,pt),Xt!==void 0&&(et.viewport=Xt),w.toneMapping=zt}function ea(A,X,$){const et=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,bt=A.length;Y<bt;Y++){const Dt=A[Y],Nt=Dt.object,zt=Dt.geometry,Xt=et===null?Dt.material:et,Ot=Dt.group;Nt.layers.test($.layers)&&Sr(Nt,X,$,zt,Xt,Ot)}}function Sr(A,X,$,et,Y,bt){A.onBeforeRender(w,X,$,et,Y,bt),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(w,X,$,et,A,bt),Y.transparent===!0&&Y.side===Qi&&Y.forceSinglePass===!1?(Y.side=In,Y.needsUpdate=!0,w.renderBufferDirect($,X,et,Y,A,bt),Y.side=za,Y.needsUpdate=!0,w.renderBufferDirect($,X,et,Y,A,bt),Y.side=Qi):w.renderBufferDirect($,X,et,Y,A,bt),A.onAfterRender(w,X,$,et,Y,bt)}function Ha(A,X,$){X.isScene!==!0&&(X=kt);const et=se.get(A),Y=M.state.lights,bt=M.state.shadowsArray,Dt=Y.state.version,Nt=gt.getParameters(A,Y.state,bt,X,$),zt=gt.getProgramCacheKey(Nt);let Xt=et.programs;et.environment=A.isMeshStandardMaterial?X.environment:null,et.fog=X.fog,et.envMap=(A.isMeshStandardMaterial?N:He).get(A.envMap||et.environment),et.envMapRotation=et.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Xt===void 0&&(A.addEventListener("dispose",At),Xt=new Map,et.programs=Xt);let Ot=Xt.get(zt);if(Ot!==void 0){if(et.currentProgram===Ot&&et.lightsStateVersion===Dt)return li(A,Nt),Ot}else Nt.uniforms=gt.getUniforms(A),A.onBuild($,Nt,w),A.onBeforeCompile(Nt,w),Ot=gt.acquireProgram(Nt,zt),Xt.set(zt,Ot),et.uniforms=Nt.uniforms;const qt=et.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qt.clippingPlanes=Ct.uniform),li(A,Nt),et.needsLights=na(A),et.lightsStateVersion=Dt,et.needsLights&&(qt.ambientLightColor.value=Y.state.ambient,qt.lightProbe.value=Y.state.probe,qt.directionalLights.value=Y.state.directional,qt.directionalLightShadows.value=Y.state.directionalShadow,qt.spotLights.value=Y.state.spot,qt.spotLightShadows.value=Y.state.spotShadow,qt.rectAreaLights.value=Y.state.rectArea,qt.ltc_1.value=Y.state.rectAreaLTC1,qt.ltc_2.value=Y.state.rectAreaLTC2,qt.pointLights.value=Y.state.point,qt.pointLightShadows.value=Y.state.pointShadow,qt.hemisphereLights.value=Y.state.hemi,qt.directionalShadowMap.value=Y.state.directionalShadowMap,qt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,qt.spotShadowMap.value=Y.state.spotShadowMap,qt.spotLightMatrix.value=Y.state.spotLightMatrix,qt.spotLightMap.value=Y.state.spotLightMap,qt.pointShadowMap.value=Y.state.pointShadowMap,qt.pointShadowMatrix.value=Y.state.pointShadowMatrix),et.currentProgram=Ot,et.uniformsList=null,Ot}function Ns(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=gu.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function li(A,X){const $=se.get(A);$.outputColorSpace=X.outputColorSpace,$.batching=X.batching,$.batchingColor=X.batchingColor,$.instancing=X.instancing,$.instancingColor=X.instancingColor,$.instancingMorph=X.instancingMorph,$.skinning=X.skinning,$.morphTargets=X.morphTargets,$.morphNormals=X.morphNormals,$.morphColors=X.morphColors,$.morphTargetsCount=X.morphTargetsCount,$.numClippingPlanes=X.numClippingPlanes,$.numIntersection=X.numClipIntersection,$.vertexAlphas=X.vertexAlphas,$.vertexTangents=X.vertexTangents,$.toneMapping=X.toneMapping}function an(A,X,$,et,Y){X.isScene!==!0&&(X=kt),$t.resetTextureUnits();const bt=X.fog,Dt=et.isMeshStandardMaterial?X.environment:null,Nt=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Fa,zt=(et.isMeshStandardMaterial?N:He).get(et.envMap||Dt),Xt=et.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ot=!!$.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),qt=!!$.morphAttributes.position,_e=!!$.morphAttributes.normal,Re=!!$.morphAttributes.color;let Ce=Pa;et.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ce=w.toneMapping);const En=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,xe=En!==void 0?En.length:0,Ht=se.get(et),fn=M.state.lights;if(W===!0&&(ot===!0||A!==D)){const hn=A===D&&et.id===Q;Ct.setState(et,A,hn)}let ve=!1;et.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==fn.state.version||Ht.outputColorSpace!==Nt||Y.isBatchedMesh&&Ht.batching===!1||!Y.isBatchedMesh&&Ht.batching===!0||Y.isBatchedMesh&&Ht.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ht.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ht.instancing===!1||!Y.isInstancedMesh&&Ht.instancing===!0||Y.isSkinnedMesh&&Ht.skinning===!1||!Y.isSkinnedMesh&&Ht.skinning===!0||Y.isInstancedMesh&&Ht.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ht.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ht.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ht.instancingMorph===!1&&Y.morphTexture!==null||Ht.envMap!==zt||et.fog===!0&&Ht.fog!==bt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Ct.numPlanes||Ht.numIntersection!==Ct.numIntersection)||Ht.vertexAlphas!==Xt||Ht.vertexTangents!==Ot||Ht.morphTargets!==qt||Ht.morphNormals!==_e||Ht.morphColors!==Re||Ht.toneMapping!==Ce||Ht.morphTargetsCount!==xe)&&(ve=!0):(ve=!0,Ht.__version=et.version);let Rn=Ht.currentProgram;ve===!0&&(Rn=Ha(et,X,Y));let Cn=!1,Ke=!1,xr=!1;const Qe=Rn.getUniforms(),Zn=Ht.uniforms;if(Yt.useProgram(Rn.program)&&(Cn=!0,Ke=!0,xr=!0),et.id!==Q&&(Q=et.id,Ke=!0),Cn||D!==A){Qe.setValue(G,"projectionMatrix",A.projectionMatrix),Qe.setValue(G,"viewMatrix",A.matrixWorldInverse);const hn=Qe.map.cameraPosition;hn!==void 0&&hn.setValue(G,vt.setFromMatrixPosition(A.matrixWorld)),Ee.logarithmicDepthBuffer&&Qe.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Qe.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),D!==A&&(D=A,Ke=!0,xr=!0)}if(Y.isSkinnedMesh){Qe.setOptional(G,Y,"bindMatrix"),Qe.setOptional(G,Y,"bindMatrixInverse");const hn=Y.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Qe.setValue(G,"boneTexture",hn.boneTexture,$t))}Y.isBatchedMesh&&(Qe.setOptional(G,Y,"batchingTexture"),Qe.setValue(G,"batchingTexture",Y._matricesTexture,$t),Qe.setOptional(G,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Qe.setValue(G,"batchingColorTexture",Y._colorsTexture,$t));const Mr=$.morphAttributes;if((Mr.position!==void 0||Mr.normal!==void 0||Mr.color!==void 0)&&Ft.update(Y,$,Rn),(Ke||Ht.receiveShadow!==Y.receiveShadow)&&(Ht.receiveShadow=Y.receiveShadow,Qe.setValue(G,"receiveShadow",Y.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Zn.envMap.value=zt,Zn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&X.environment!==null&&(Zn.envMapIntensity.value=X.environmentIntensity),Ke&&(Qe.setValue(G,"toneMappingExposure",w.toneMappingExposure),Ht.needsLights&&vn(Zn,xr),bt&&et.fog===!0&&Mt.refreshFogUniforms(Zn,bt),Mt.refreshMaterialUniforms(Zn,et,q,L,M.state.transmissionRenderTarget[A.id]),gu.upload(G,Ns(Ht),Zn,$t)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(gu.upload(G,Ns(Ht),Zn,$t),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Qe.setValue(G,"center",Y.center),Qe.setValue(G,"modelViewMatrix",Y.modelViewMatrix),Qe.setValue(G,"normalMatrix",Y.normalMatrix),Qe.setValue(G,"modelMatrix",Y.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const hn=et.uniformsGroups;for(let Os=0,wn=hn.length;Os<wn;Os++){const yr=hn[Os];Kt.update(yr,Rn),Kt.bind(yr,Rn)}}return Rn}function vn(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function na(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return nt},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(A,X,$){se.get(A.texture).__webglTexture=X,se.get(A.depthTexture).__webglTexture=$;const et=se.get(A);et.__hasExternalTextures=!0,et.__autoAllocateDepthBuffer=$===void 0,et.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),et.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const $=se.get(A);$.__webglFramebuffer=X,$.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,$=0){O=A,nt=X,F=$;let et=!0,Y=null,bt=!1,Dt=!1;if(A){const zt=se.get(A);zt.__useDefaultFramebuffer!==void 0?(Yt.bindFramebuffer(G.FRAMEBUFFER,null),et=!1):zt.__webglFramebuffer===void 0?$t.setupRenderTarget(A):zt.__hasExternalTextures&&$t.rebindTextures(A,se.get(A.texture).__webglTexture,se.get(A.depthTexture).__webglTexture);const Xt=A.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Dt=!0);const Ot=se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ot[X])?Y=Ot[X][$]:Y=Ot[X],bt=!0):A.samples>0&&$t.useMultisampledRTT(A)===!1?Y=se.get(A).__webglMultisampledFramebuffer:Array.isArray(Ot)?Y=Ot[$]:Y=Ot,R.copy(A.viewport),V.copy(A.scissor),lt=A.scissorTest}else R.copy(Et).multiplyScalar(q).floor(),V.copy(U).multiplyScalar(q).floor(),lt=tt;if(Yt.bindFramebuffer(G.FRAMEBUFFER,Y)&&et&&Yt.drawBuffers(A,Y),Yt.viewport(R),Yt.scissor(V),Yt.setScissorTest(lt),bt){const zt=se.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+X,zt.__webglTexture,$)}else if(Dt){const zt=se.get(A.texture),Xt=X||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,zt.__webglTexture,$||0,Xt)}Q=-1},this.readRenderTargetPixels=function(A,X,$,et,Y,bt,Dt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt){Yt.bindFramebuffer(G.FRAMEBUFFER,Nt);try{const zt=A.texture,Xt=zt.format,Ot=zt.type;if(!Ee.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-et&&$>=0&&$<=A.height-Y&&G.readPixels(X,$,et,Y,Rt.convert(Xt),Rt.convert(Ot),bt)}finally{const zt=O!==null?se.get(O).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(A,X,$,et,Y,bt,Dt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Dt!==void 0&&(Nt=Nt[Dt]),Nt){Yt.bindFramebuffer(G.FRAMEBUFFER,Nt);try{const zt=A.texture,Xt=zt.format,Ot=zt.type;if(!Ee.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-et&&$>=0&&$<=A.height-Y){const qt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,qt),G.bufferData(G.PIXEL_PACK_BUFFER,bt.byteLength,G.STREAM_READ),G.readPixels(X,$,et,Y,Rt.convert(Xt),Rt.convert(Ot),0),G.flush();const _e=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);await sM(G,_e,4);try{G.bindBuffer(G.PIXEL_PACK_BUFFER,qt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,bt)}finally{G.deleteBuffer(qt),G.deleteSync(_e)}return bt}}finally{const zt=O!==null?se.get(O).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function(A,X=null,$=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const et=Math.pow(2,-$),Y=Math.floor(A.image.width*et),bt=Math.floor(A.image.height*et),Dt=X!==null?X.x:0,Nt=X!==null?X.y:0;$t.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,$,0,0,Dt,Nt,Y,bt),Yt.unbindTexture()},this.copyTextureToTexture=function(A,X,$=null,et=null,Y=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),et=arguments[0]||null,A=arguments[1],X=arguments[2],Y=arguments[3]||0,$=null);let bt,Dt,Nt,zt,Xt,Ot;$!==null?(bt=$.max.x-$.min.x,Dt=$.max.y-$.min.y,Nt=$.min.x,zt=$.min.y):(bt=A.image.width,Dt=A.image.height,Nt=0,zt=0),et!==null?(Xt=et.x,Ot=et.y):(Xt=0,Ot=0);const qt=Rt.convert(X.format),_e=Rt.convert(X.type);$t.setTexture2D(X,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const Re=G.getParameter(G.UNPACK_ROW_LENGTH),Ce=G.getParameter(G.UNPACK_IMAGE_HEIGHT),En=G.getParameter(G.UNPACK_SKIP_PIXELS),xe=G.getParameter(G.UNPACK_SKIP_ROWS),Ht=G.getParameter(G.UNPACK_SKIP_IMAGES),fn=A.isCompressedTexture?A.mipmaps[Y]:A.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,fn.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,fn.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Nt),G.pixelStorei(G.UNPACK_SKIP_ROWS,zt),A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Y,Xt,Ot,bt,Dt,qt,_e,fn.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Y,Xt,Ot,fn.width,fn.height,qt,fn.data):G.texSubImage2D(G.TEXTURE_2D,Y,Xt,Ot,qt,_e,fn),G.pixelStorei(G.UNPACK_ROW_LENGTH,Re),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ce),G.pixelStorei(G.UNPACK_SKIP_PIXELS,En),G.pixelStorei(G.UNPACK_SKIP_ROWS,xe),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ht),Y===0&&X.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Yt.unbindTexture()},this.copyTextureToTexture3D=function(A,X,$=null,et=null,Y=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,et=arguments[1]||null,A=arguments[2],X=arguments[3],Y=arguments[4]||0);let bt,Dt,Nt,zt,Xt,Ot,qt,_e,Re;const Ce=A.isCompressedTexture?A.mipmaps[Y]:A.image;$!==null?(bt=$.max.x-$.min.x,Dt=$.max.y-$.min.y,Nt=$.max.z-$.min.z,zt=$.min.x,Xt=$.min.y,Ot=$.min.z):(bt=Ce.width,Dt=Ce.height,Nt=Ce.depth,zt=0,Xt=0,Ot=0),et!==null?(qt=et.x,_e=et.y,Re=et.z):(qt=0,_e=0,Re=0);const En=Rt.convert(X.format),xe=Rt.convert(X.type);let Ht;if(X.isData3DTexture)$t.setTexture3D(X,0),Ht=G.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)$t.setTexture2DArray(X,0),Ht=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,X.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,X.unpackAlignment);const fn=G.getParameter(G.UNPACK_ROW_LENGTH),ve=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Rn=G.getParameter(G.UNPACK_SKIP_PIXELS),Cn=G.getParameter(G.UNPACK_SKIP_ROWS),Ke=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ce.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ce.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,zt),G.pixelStorei(G.UNPACK_SKIP_ROWS,Xt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ot),A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Ht,Y,qt,_e,Re,bt,Dt,Nt,En,xe,Ce.data):X.isCompressedArrayTexture?G.compressedTexSubImage3D(Ht,Y,qt,_e,Re,bt,Dt,Nt,En,Ce.data):G.texSubImage3D(Ht,Y,qt,_e,Re,bt,Dt,Nt,En,xe,Ce),G.pixelStorei(G.UNPACK_ROW_LENGTH,fn),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ve),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Rn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Cn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ke),Y===0&&X.generateMipmaps&&G.generateMipmap(Ht),Yt.unbindTexture()},this.initRenderTarget=function(A){se.get(A).__webglFramebuffer===void 0&&$t.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?$t.setTextureCube(A,0):A.isData3DTexture?$t.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?$t.setTexture2DArray(A,0):$t.setTexture2D(A,0),Yt.unbindTexture()},this.resetState=function(){nt=0,F=0,O=null,Yt.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Dh?"display-p3":"srgb",i.unpackColorSpace=Ue.workingColorSpace===bu?"display-p3":"srgb"}}class mb extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class gb extends Oo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ov,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wv extends yn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const Sh=new je,K_=new at,Q_=new at;class _b{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lh,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;K_.setFromMatrixPosition(e.matrixWorld),i.position.copy(K_),Q_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Q_),i.updateMatrixWorld(),Sh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Sh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vb extends _b{constructor(){super(new yv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sb extends wv{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new vb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xb extends wv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);class Mb{constructor(){ai(this,"renderer",null);ai(this,"scene",null);ai(this,"camera",null);ai(this,"animationId",null);ai(this,"handleResize",()=>{!this.camera||!this.renderer||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))});ai(this,"animate",()=>{this.animationId=requestAnimationFrame(this.animate),this.renderer&&this.scene&&this.camera&&this.renderer.render(this.scene,this.camera)})}init(e){this.renderer=new pb({canvas:e,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(657935),this.scene=new mb,this.camera=new si(45,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,15,20),this.camera.lookAt(0,0,0);const i=new xb(16777215,.6);this.scene.add(i);const r=new Sb(16777215,.8);r.position.set(10,20,10),this.scene.add(r);const l=new Ti(new zo(50,50),new gb({color:1710628}));l.rotation.x=-Math.PI/2,this.scene.add(l),window.addEventListener("resize",this.handleResize),this.animate()}update(e){}dispose(){var e,i;window.removeEventListener("resize",this.handleResize),this.animationId!==null&&cancelAnimationFrame(this.animationId),(e=this.renderer)==null||e.dispose(),(i=this.scene)==null||i.clear(),this.renderer=null,this.scene=null,this.camera=null}}function yb(o){const e=$i.useRef(null),i=ta(r=>r.snapshot);$i.useEffect(()=>{if(!o.current)return;const r=new Mb;return r.init(o.current),e.current=r,()=>{r.dispose(),e.current=null}},[o]),$i.useEffect(()=>{i&&e.current&&e.current.update(i)},[i])}function Eb(){const o=ta(l=>l.setToken),[e,i]=$i.useState(""),r=l=>{l.preventDefault(),e.trim()&&o(e.trim())};return We.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-[#0a0a0f]",children:We.jsxs("form",{onSubmit:r,className:"bg-[#12121a] border border-[#2a2a3a] rounded-lg p-8 w-96",children:[We.jsx("h1",{className:"text-xl font-semibold text-white mb-2",children:"Agent Office 3D"}),We.jsx("p",{className:"text-sm text-gray-400 mb-6",children:"Enter your gateway token to connect."}),We.jsx("input",{type:"password",value:e,onChange:l=>i(l.target.value),placeholder:"Gateway token",className:"w-full px-4 py-2 bg-[#1a1a24] border border-[#2a2a3a] rounded text-white placeholder-gray-500 focus:outline-none focus:border-[#4a4a5a] mb-4",autoFocus:!0}),We.jsx("button",{type:"submit",className:"w-full py-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded font-medium transition-colors",children:"Connect"})]})})}function Tb(){const o=ta(c=>c.connected),e=ta(c=>c.snapshot),i=e?Object.keys(e.agents).length:0,r=(e==null?void 0:e.gateway.version)??"-",l=(e==null?void 0:e.gateway.eventCount)??0;return We.jsxs("div",{className:"fixed top-4 left-4 flex items-center gap-4 text-sm",children:[We.jsxs("div",{className:"flex items-center gap-2 bg-black/50 px-3 py-1.5 rounded",children:[We.jsx("span",{className:`w-2 h-2 rounded-full ${o?"bg-green-500":"bg-gray-500"}`}),We.jsx("span",{className:"text-white/80",children:o?"LIVE":"OFFLINE"})]}),We.jsxs("div",{className:"bg-black/50 px-3 py-1.5 rounded text-white/60",children:[i," agents"]}),We.jsxs("div",{className:"bg-black/50 px-3 py-1.5 rounded text-white/60",children:["v",r]}),We.jsxs("div",{className:"bg-black/50 px-3 py-1.5 rounded text-white/60",children:[l.toLocaleString()," events"]})]})}function Ab(){const o=ta(i=>i.connected),e=ta(i=>i.token);return o||!e?null:We.jsx("div",{className:"fixed top-0 left-0 right-0 bg-yellow-600 text-black text-center py-2 text-sm font-medium z-50",children:"Reconnecting to gateway..."})}function bb(){const o=ta(i=>i.token),e=$i.useRef(null);return $S(o),yb(e),o?We.jsxs(We.Fragment,{children:[We.jsx("canvas",{ref:e,className:"absolute inset-0 w-full h-full"}),We.jsx(Tb,{}),We.jsx(Ab,{})]}):We.jsx(Eb,{})}YS.createRoot(document.getElementById("root")).render(We.jsx($i.StrictMode,{children:We.jsx(bb,{})}));
