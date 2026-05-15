var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function ee(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function te(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ne(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ne(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ee(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),ne(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ee(a,u),c+=ne(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ee(a,u++),c+=ne(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ne(te(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function re(e,t,n){if(e==null)return e;var r=[],i=0;return ne(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ie(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var j=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},M={map:re,forEach:function(e,t,n){re(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return re(e,function(){t++}),t},toArray:function(e){return re(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=M,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ie}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,j)}catch(e){j(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.4`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&ee(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ee(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function ee(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ee(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),k=Symbol.for(`react.activity`),A=Symbol.for(`react.memo_cache_sentinel`),ee=Symbol.iterator;function te(e){return typeof e!=`object`||!e?null:(e=ee&&e[ee]||e[`@@iterator`],typeof e==`function`?e:null)}var ne=Symbol.for(`react.client.reference`);function re(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ne?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case k:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?re(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}var ie=Array.isArray,j=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},oe=[],se=-1;function ce(e){return{current:e}}function le(e){0>se||(e.current=oe[se],oe[se]=null,se--)}function ue(e,t){se++,oe[se]=e.current,e.current=t}var de=ce(null),fe=ce(null),pe=ce(null),me=ce(null);function he(e,t){switch(ue(pe,t),ue(fe,e),ue(de,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?tf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=tf(t),e=nf(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}le(de),ue(de,e)}function ge(){le(de),le(fe),le(pe)}function _e(e){e.memoizedState!==null&&ue(me,e);var t=de.current,n=nf(t,e.type);t!==n&&(ue(fe,e),ue(de,n))}function N(e){fe.current===e&&(le(de),le(fe)),me.current===e&&(le(me),K._currentValue=ae)}var ve,ye;function be(e){if(ve===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ve=t&&t[1]||``,ye=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ve+e+ye}var xe=!1;function Se(e,t){if(!e||xe)return``;xe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{xe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?be(n):``}function Ce(e,t){switch(e.tag){case 26:case 27:case 5:return be(e.type);case 16:return be(`Lazy`);case 13:return e.child!==t&&t!==null?be(`Suspense Fallback`):be(`Suspense`);case 19:return be(`SuspenseList`);case 0:case 15:return Se(e.type,!1);case 11:return Se(e.type.render,!1);case 1:return Se(e.type,!0);case 31:return be(`Activity`);default:return``}}function we(e){try{var t=``,n=null;do t+=Ce(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Te=Object.prototype.hasOwnProperty,Ee=t.unstable_scheduleCallback,De=t.unstable_cancelCallback,Oe=t.unstable_shouldYield,ke=t.unstable_requestPaint,Ae=t.unstable_now,je=t.unstable_getCurrentPriorityLevel,Me=t.unstable_ImmediatePriority,Ne=t.unstable_UserBlockingPriority,Pe=t.unstable_NormalPriority,Fe=t.unstable_LowPriority,Ie=t.unstable_IdlePriority,Le=t.log,Re=t.unstable_setDisableYieldValue,ze=null,Be=null;function Ve(e){if(typeof Le==`function`&&Re(e),Be&&typeof Be.setStrictMode==`function`)try{Be.setStrictMode(ze,e)}catch{}}var He=Math.clz32?Math.clz32:Ge,Ue=Math.log,We=Math.LN2;function Ge(e){return e>>>=0,e===0?32:31-(Ue(e)/We|0)|0}var Ke=256,qe=262144,Je=4194304;function Ye(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ye(n))):i=Ye(o):i=Ye(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ye(n))):i=Ye(o)):i=Ye(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ze(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Qe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $e(){var e=Je;return Je<<=1,!(Je&62914560)&&(Je=4194304),e}function et(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-He(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&rt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function rt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-He(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function it(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-He(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function at(e,t){var n=t&-t;return n=n&42?1:ot(n),(n&(e.suspendedLanes|t))===0?n:0}function ot(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function st(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ct(){var e=M.p;return e===0?(e=window.event,e===void 0?32:xp(e.type)):e}function lt(e,t){var n=M.p;try{return M.p=e,t()}finally{M.p=n}}var ut=Math.random().toString(36).slice(2),dt=`__reactFiber$`+ut,ft=`__reactProps$`+ut,pt=`__reactContainer$`+ut,mt=`__reactEvents$`+ut,ht=`__reactListeners$`+ut,gt=`__reactHandles$`+ut,_t=`__reactResources$`+ut,vt=`__reactMarker$`+ut;function yt(e){delete e[dt],delete e[ft],delete e[mt],delete e[ht],delete e[gt]}function bt(e){var t=e[dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pt]||n[dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Tf(e);e!==null;){if(n=e[dt])return n;e=Tf(e)}return t}e=n,n=e.parentNode}return null}function xt(e){if(e=e[dt]||e[pt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function St(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ct(e){var t=e[_t];return t||=e[_t]={hoistableStyles:new Map,hoistableScripts:new Map},t}function wt(e){e[vt]=!0}var Tt=new Set,Et={};function Dt(e,t){Ot(e,t),Ot(e+`Capture`,t)}function Ot(e,t){for(Et[e]=t,e=0;e<t.length;e++)Tt.add(t[e])}var kt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),At={},jt={};function Mt(e){return Te.call(jt,e)?!0:Te.call(At,e)?!1:kt.test(e)?jt[e]=!0:(At[e]=!0,!1)}function Nt(e,t,n){if(Mt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Pt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Ft(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function It(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Lt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Rt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zt(e){if(!e._valueTracker){var t=Lt(e)?`checked`:`value`;e._valueTracker=Rt(e,t,``+e[t])}}function Bt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Lt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Vt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ht=/[\n"\\]/g;function Ut(e){return e.replace(Ht,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Wt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+It(t)):e.value!==``+It(t)&&(e.value=``+It(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Kt(e,o,It(n)):Kt(e,o,It(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+It(s):e.removeAttribute(`name`)}function Gt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){zt(e);return}n=n==null?``:``+It(n),t=t==null?n:``+It(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),zt(e)}function Kt(e,t,n){t===`number`&&Vt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+It(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jt(e,t,n){if(t!=null&&(t=``+It(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+It(n)}function Yt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ie(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=It(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),zt(e)}function Xt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Qt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Zt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function $t(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Qt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Qt(e,o,t[o])}function en(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var tn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),nn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rn(e){return nn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function an(){}var on=null;function sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cn=null,ln=null;function un(e){var t=xt(e);if(t&&(e=t.stateNode)){var n=e[ft]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Wt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Ut(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ft]||null;if(!a)throw Error(i(90));Wt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Bt(r)}break a;case`textarea`:Jt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&qt(e,!!n.multiple,t,!1)}}}var dn=!1;function fn(e,t,n){if(dn)return e(t,n);dn=!0;try{return e(t)}finally{if(dn=!1,(cn!==null||ln!==null)&&(Nu(),cn&&(t=cn,e=ln,ln=cn=null,un(t),e)))for(t=0;t<e.length;t++)un(e[t])}}function pn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ft]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var mn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),hn=!1;if(mn)try{var gn={};Object.defineProperty(gn,`passive`,{get:function(){hn=!0}}),window.addEventListener(`test`,gn,gn),window.removeEventListener(`test`,gn,gn)}catch{hn=!1}var _n=null,vn=null,yn=null;function bn(){if(yn)return yn;var e,t=vn,n=t.length,r,i=`value`in _n?_n.value:_n.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return yn=i.slice(e,1<r?1-r:void 0)}function xn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sn(){return!0}function Cn(){return!1}function wn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Sn:Cn,this.isPropagationStopped=Cn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Sn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Sn)},persist:function(){},isPersistent:Sn}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},En=wn(Tn),Dn=h({},Tn,{view:0,detail:0}),On=wn(Dn),kn,An,jn,Mn=h({},Dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Un,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==jn&&(jn&&e.type===`mousemove`?(kn=e.screenX-jn.screenX,An=e.screenY-jn.screenY):An=kn=0,jn=e),kn)},movementY:function(e){return`movementY`in e?e.movementY:An}}),Nn=wn(Mn),Pn=wn(h({},Mn,{dataTransfer:0})),Fn=wn(h({},Dn,{relatedTarget:0})),In=wn(h({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0})),Ln=wn(h({},Tn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Rn=wn(h({},Tn,{data:0})),zn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Bn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Vn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Hn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vn[e])?!!t[e]:!1}function Un(){return Hn}var Wn=wn(h({},Dn,{key:function(e){if(e.key){var t=zn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=xn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Bn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Un,charCode:function(e){return e.type===`keypress`?xn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?xn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Gn=wn(h({},Mn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Kn=wn(h({},Dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Un})),qn=wn(h({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Jn=wn(h({},Mn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Yn=wn(h({},Tn,{newState:0,oldState:0})),Xn=[9,13,27,32],Zn=mn&&`CompositionEvent`in window,Qn=null;mn&&`documentMode`in document&&(Qn=document.documentMode);var $n=mn&&`TextEvent`in window&&!Qn,er=mn&&(!Zn||Qn&&8<Qn&&11>=Qn),tr=` `,nr=!1;function rr(e,t){switch(e){case`keyup`:return Xn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ir(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ar=!1;function or(e,t){switch(e){case`compositionend`:return ir(t);case`keypress`:return t.which===32?(nr=!0,tr):null;case`textInput`:return e=t.data,e===tr&&nr?null:e;default:return null}}function sr(e,t){if(ar)return e===`compositionend`||!Zn&&rr(e,t)?(e=bn(),yn=vn=_n=null,ar=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return er&&t.locale!==`ko`?null:t.data;default:return null}}var cr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!cr[e.type]:t===`textarea`}function ur(e,t,n,r){cn?ln?ln.push(r):ln=[r]:cn=r,t=zd(t,`onChange`),0<t.length&&(n=new En(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var dr=null,fr=null;function pr(e){Md(e,0)}function mr(e){if(Bt(St(e)))return e}function hr(e,t){if(e===`change`)return t}var gr=!1;if(mn){var _r;if(mn){var vr=`oninput`in document;if(!vr){var yr=document.createElement(`div`);yr.setAttribute(`oninput`,`return;`),vr=typeof yr.oninput==`function`}_r=vr}else _r=!1;gr=_r&&(!document.documentMode||9<document.documentMode)}function br(){dr&&(dr.detachEvent(`onpropertychange`,xr),fr=dr=null)}function xr(e){if(e.propertyName===`value`&&mr(fr)){var t=[];ur(t,fr,e,sn(e)),fn(pr,t)}}function Sr(e,t,n){e===`focusin`?(br(),dr=t,fr=n,dr.attachEvent(`onpropertychange`,xr)):e===`focusout`&&br()}function Cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return mr(fr)}function wr(e,t){if(e===`click`)return mr(t)}function Tr(e,t){if(e===`input`||e===`change`)return mr(t)}function Er(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Dr=typeof Object.is==`function`?Object.is:Er;function Or(e,t){if(Dr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Te.call(t,i)||!Dr(e[i],t[i]))return!1}return!0}function kr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ar(e,t){var n=kr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=kr(n)}}function jr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Vt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Vt(e.document)}return t}function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Pr=mn&&`documentMode`in document&&11>=document.documentMode,Fr=null,Ir=null,Lr=null,Rr=!1;function zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rr||Fr==null||Fr!==Vt(r)||(r=Fr,`selectionStart`in r&&Nr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Or(Lr,r)||(Lr=r,r=zd(Ir,`onSelect`),0<r.length&&(t=new En(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Fr)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Vr={animationend:Br(`Animation`,`AnimationEnd`),animationiteration:Br(`Animation`,`AnimationIteration`),animationstart:Br(`Animation`,`AnimationStart`),transitionrun:Br(`Transition`,`TransitionRun`),transitionstart:Br(`Transition`,`TransitionStart`),transitioncancel:Br(`Transition`,`TransitionCancel`),transitionend:Br(`Transition`,`TransitionEnd`)},Hr={},Ur={};mn&&(Ur=document.createElement(`div`).style,`AnimationEvent`in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),`TransitionEvent`in window||delete Vr.transitionend.transition);function Wr(e){if(Hr[e])return Hr[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ur)return Hr[e]=t[n];return e}var Gr=Wr(`animationend`),Kr=Wr(`animationiteration`),qr=Wr(`animationstart`),Jr=Wr(`transitionrun`),Yr=Wr(`transitionstart`),Xr=Wr(`transitioncancel`),Zr=Wr(`transitionend`),Qr=new Map,$r=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);$r.push(`scrollEnd`);function ei(e,t){Qr.set(e,t),Dt(t,[e])}var ti=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ni=[],ri=0,ii=0;function ai(){for(var e=ri,t=ii=ri=0;t<e;){var n=ni[t];ni[t++]=null;var r=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var a=ni[t];if(ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&li(n,i,a)}}function oi(e,t,n,r){ni[ri++]=e,ni[ri++]=t,ni[ri++]=n,ni[ri++]=r,ii|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function si(e,t,n,r){return oi(e,t,n,r),ui(e)}function ci(e,t){return oi(e,null,null,t),ui(e)}function li(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-He(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function ui(e){if(50<wu)throw wu=0,Tu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var di={};function fi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,t,n,r){return new fi(e,t,n,r)}function mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hi(e,t){var n=e.alternate;return n===null?(n=pi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function gi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _i(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)mi(e)&&(s=1);else if(typeof e==`string`)s=Qf(e,n,de.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case k:return e=pi(31,n,t,a),e.elementType=k,e.lanes=o,e;case y:return vi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=pi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=pi(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=pi(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=pi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function vi(e,t,n,r){return e=pi(7,e,r,t),e.lanes=n,e}function yi(e,t,n){return e=pi(6,e,null,t),e.lanes=n,e}function bi(e){var t=pi(18,null,null,0);return t.stateNode=e,t}function xi(e,t,n){return t=pi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Si=new WeakMap;function Ci(e,t){if(typeof e==`object`&&e){var n=Si.get(e);return n===void 0?(t={value:e,source:t,stack:we(t)},Si.set(e,t),t):n}return{value:e,source:t,stack:we(t)}}var wi=[],Ti=0,Ei=null,Di=0,Oi=[],ki=0,Ai=null,ji=1,Mi=``;function Ni(e,t){wi[Ti++]=Di,wi[Ti++]=Ei,Ei=e,Di=t}function Pi(e,t,n){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,Ai=e;var r=ji;e=Mi;var i=32-He(r)-1;r&=~(1<<i),n+=1;var a=32-He(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ji=1<<32-He(t)+i|n<<i|r,Mi=a+e}else ji=1<<a|n<<i|r,Mi=e}function Fi(e){e.return!==null&&(Ni(e,1),Pi(e,1,0))}function Ii(e){for(;e===Ei;)Ei=wi[--Ti],wi[Ti]=null,Di=wi[--Ti],wi[Ti]=null;for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,Mi=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null}function Li(e,t){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,ji=t.id,Mi=t.overflow,Ai=e}var Ri=null,zi=null,Bi=!1,Vi=null,Hi=!1,Ui=Error(i(519));function Wi(e){throw Xi(Ci(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ui}function Gi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[dt]=e,t[ft]=r,n){case`dialog`:z(`cancel`,t),z(`close`,t);break;case`iframe`:case`object`:case`embed`:z(`load`,t);break;case`video`:case`audio`:for(n=0;n<Ad.length;n++)z(Ad[n],t);break;case`source`:z(`error`,t);break;case`img`:case`image`:case`link`:z(`error`,t),z(`load`,t);break;case`details`:z(`toggle`,t);break;case`input`:z(`invalid`,t),Gt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:z(`invalid`,t);break;case`textarea`:z(`invalid`,t),Yt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Gd(t.textContent,n)?(r.popover!=null&&(z(`beforetoggle`,t),z(`toggle`,t)),r.onScroll!=null&&z(`scroll`,t),r.onScrollEnd!=null&&z(`scrollend`,t),r.onClick!=null&&(t.onclick=an),t=!0):t=!1,t||Wi(e,!0)}function Ki(e){for(Ri=e.return;Ri;)switch(Ri.tag){case 5:case 31:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Ri=Ri.return}}function qi(e){if(e!==Ri)return!1;if(!Bi)return Ki(e),Bi=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||rf(e.type,e.memoizedProps)),n=!n),n&&zi&&Wi(e),Ki(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));zi=wf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));zi=wf(e)}else t===27?(t=zi,ff(e.type)?(e=Cf,Cf=null,zi=e):zi=t):zi=Ri?Sf(e.stateNode.nextSibling):null;return!0}function Ji(){zi=Ri=null,Bi=!1}function Yi(){var e=Vi;return e!==null&&(uu===null?uu=e:uu.push.apply(uu,e),Vi=null),e}function Xi(e){Vi===null?Vi=[e]:Vi.push(e)}var Zi=ce(null),Qi=null,$i=null;function ea(e,t,n){ue(Zi,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=Zi.current,le(Zi)}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ra(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),na(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),na(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ia(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Dr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===me.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[K]:e.push(K))}a=a.return}e!==null&&ra(t,e,n,r),t.flags|=262144}function aa(e){for(e=e.firstContext;e!==null;){if(!Dr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){Qi=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sa(e){return la(Qi,e)}function ca(e,t){return Qi===null&&oa(e),la(e,t)}function la(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$i===null){if(e===null)throw Error(i(308));$i=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $i=$i.next=t;return n}var ua=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},da=t.unstable_scheduleCallback,fa=t.unstable_NormalPriority,pa={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ma(){return{controller:new ua,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&da(fa,function(){e.controller.abort()})}var ga=null,_a=0,va=0,ya=null;function ba(e,t){if(ga===null){var n=ga=[];_a=0,va=wd(),ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return _a++,t.then(xa,xa),t}function xa(){if(--_a===0&&ga!==null){ya!==null&&(ya.status=`fulfilled`);var e=ga;ga=null,va=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ca=j.S;j.S=function(e,t){pu=Ae(),typeof t==`object`&&t&&typeof t.then==`function`&&ba(e,t),Ca!==null&&Ca(e,t)};var wa=ce(null);function Ta(){var e=wa.current;return e===null?Yl.pooledCache:e}function Ea(e,t){t===null?ue(wa,wa.current):ue(wa,t.pool)}function Da(){var e=Ta();return e===null?null:{parent:pa._currentValue,pool:e}}var Oa=Error(i(460)),ka=Error(i(474)),Aa=Error(i(542)),ja={then:function(){}};function Ma(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Na(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(an,an),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e;default:if(typeof t.status==`string`)t.then(an,an);else{if(e=Yl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e}throw Fa=t,Oa}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Fa=e,Oa):e}}var Fa=null;function Ia(){if(Fa===null)throw Error(i(459));var e=Fa;return Fa=null,e}function La(e){if(e===Oa||e===Aa)throw Error(i(483))}var Ra=null,za=0;function Ba(e){var t=za;return za+=1,Ra===null&&(Ra=[]),Na(Ra,e,t)}function Va(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ha(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ua(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=hi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&Pa(i)===t.type)?(t=a(t,n.props),Va(t,n),t.return=e,t):(t=_i(n.type,n.key,n.props,null,e.mode,r),Va(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=vi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=yi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=_i(t.type,t.key,t.props,null,e.mode,n),Va(n,t),n.return=e,n;case v:return t=xi(t,e.mode,n),t.return=e,t;case O:return t=Pa(t),f(e,t,n)}if(ie(t)||te(t))return t=vi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ba(t),n);if(t.$$typeof===C)return f(e,ca(e,t),n);Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=Pa(n),p(e,t,n,r)}if(ie(n)||te(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ba(n),r);if(n.$$typeof===C)return p(e,t,ca(e,n),r);Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=Pa(r),m(e,t,n,r,i)}if(ie(r)||te(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ba(r),i);if(r.$$typeof===C)return m(e,t,n,ca(t,r),i);Ha(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),Bi&&Ni(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return Bi&&Ni(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),Bi&&Ni(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),Bi&&Ni(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return Bi&&Ni(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),Bi&&Ni(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&Pa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Va(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=vi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=_i(o.type,o.key,o.props,null,e.mode,c),Va(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=xi(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=Pa(o),b(e,r,o,c)}if(ie(o))return h(e,r,o,c);if(te(o)){if(l=te(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ba(o),c);if(o.$$typeof===C)return b(e,r,ca(e,o),c);Ha(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=yi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{za=0;var i=b(e,t,n,r);return Ra=null,i}catch(t){if(t===Oa||t===Aa)throw t;var a=pi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Wa=Ua(!0),Ga=Ua(!1),Ka=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ja(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Jl&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=ui(e),li(e,null,n),t}return oi(e,r,t,n),ui(e)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $a=!1;function eo(){if($a){var e=ya;if(e!==null)throw e}}function to(e,t,n,r){$a=!1;var i=e.updateQueue;Ka=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(L&f)===f:(r&f)===f){f!==0&&f===va&&($a=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ka=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),iu|=o,e.lanes=o,e.memoizedState=d}}function no(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function P(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)no(n[e],t)}var ro=ce(null),io=ce(0);function ao(e,t){e=nu,ue(io,e),ue(ro,t),nu=e|t.baseLanes}function oo(){ue(io,nu),ue(ro,ro.current)}function so(){nu=io.current,le(ro),le(io)}var co=ce(null),lo=null;function uo(e){var t=e.alternate;ue(go,go.current&1),ue(co,e),lo===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(lo=e)}function fo(e){ue(go,go.current),ue(co,e),lo===null&&(lo=e)}function po(e){e.tag===22?(ue(go,go.current),ue(co,e),lo===null&&(lo=e)):mo(e)}function mo(){ue(go,go.current),ue(co,co.current)}function ho(e){le(co),lo===e&&(lo=null),le(go)}var go=ce(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||yf(n)||bf(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=0,F=null,yo=null,bo=null,I=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function Do(){throw Error(i(321))}function Oo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dr(e[n],t[n]))return!1;return!0}function ko(e,t,n,r,i,a){return vo=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?Ks:qs,So=!1,a=n(r,i),So=!1,xo&&(a=jo(t,n,r,i)),Ao(e),a}function Ao(e){j.H=Gs;var t=yo!==null&&yo.next!==null;if(vo=0,bo=yo=F=null,I=!1,wo=0,To=null,t)throw Error(i(300));e===null||uc||(e=e.dependencies,e!==null&&aa(e)&&(uc=!0))}function jo(e,t,n,r){F=e;var a=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=a)throw Error(i(301));if(a+=1,bo=yo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}j.H=Js,o=t(n,r)}while(xo);return o}function Mo(){var e=j.H,t=e.useState()[0];return t=typeof t.then==`function`?zo(t):t,e=e.useState()[0],(yo===null?null:yo.memoizedState)!==e&&(F.flags|=1024),t}function No(){var e=Co!==0;return Co=0,e}function Po(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Fo(e){if(I){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}I=!1}vo=0,bo=yo=F=null,xo=!1,wo=Co=0,To=null}function Io(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bo===null?F.memoizedState=bo=e:bo=bo.next=e,bo}function Lo(){if(yo===null){var e=F.alternate;e=e===null?null:e.memoizedState}else e=yo.next;var t=bo===null?F.memoizedState:bo.next;if(t!==null)bo=t,yo=e;else{if(e===null)throw F.alternate===null?Error(i(467)):Error(i(310));yo=e,e={memoizedState:yo.memoizedState,baseState:yo.baseState,baseQueue:yo.baseQueue,queue:yo.queue,next:null},bo===null?F.memoizedState=bo=e:bo=bo.next=e}return bo}function Ro(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zo(e){var t=wo;return wo+=1,To===null&&(To=[]),e=Na(To,e,t),t=F,(bo===null?t.memoizedState:bo.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?Ks:qs),e}function Bo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return zo(e);if(e.$$typeof===C)return sa(e)}throw Error(i(438,String(e)))}function Vo(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Ro(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=A;return t.index++,n}function Ho(e,t){return typeof t==`function`?t(e):t}function Uo(e){return Wo(Lo(),yo,e)}function Wo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(vo&f)===f:(L&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===va&&(d=!0);else if((vo&p)===p){u=u.next,p===va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,F.lanes|=p,iu|=p;f=u.action,So&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,F.lanes|=f,iu|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Dr(o,e.memoizedState)&&(uc=!0,d&&(n=ya,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Go(e){var t=Lo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Dr(o,t.memoizedState)||(uc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ko(e,t,n){var r=F,a=Lo(),o=Bi;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Dr((yo||a).memoizedState,n);if(s&&(a.memoizedState=n,uc=!0),a=a.queue,_s(Yo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||bo!==null&&bo.memoizedState.tag&1){if(r.flags|=2048,fs(9,{destroy:void 0},Jo.bind(null,r,a,n,t),null),Yl===null)throw Error(i(349));o||vo&127||qo(r,t,n)}return n}function qo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=Ro(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jo(e,t,n,r){t.value=n,t.getSnapshot=r,Xo(t)&&Zo(e)}function Yo(e,t,n){return n(function(){Xo(t)&&Zo(e)})}function Xo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dr(e,n)}catch{return!0}}function Zo(e){var t=ci(e,2);t!==null&&Ou(t,e,2)}function Qo(e){var t=Io();if(typeof e==`function`){var n=e;if(e=n(),So){Ve(!0);try{n()}finally{Ve(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:e},t}function $o(e,t,n,r){return e.baseState=n,Wo(e,yo,typeof r==`function`?r:Ho)}function es(e,t,n,r,a){if(Hs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};j.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,ts(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ts(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=j.T,o={};j.T=o;try{var s=n(i,r),c=j.S;c!==null&&c(o,s),ns(e,t,s)}catch(n){is(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),j.T=a}}else try{a=n(i,r),ns(e,t,a)}catch(n){is(e,t,n)}}function ns(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){rs(e,t,n)},function(n){return is(e,t,n)}):rs(e,t,n)}function rs(e,t,n){t.status=`fulfilled`,t.value=n,as(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ts(e,n)))}function is(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,as(t),t=t.next;while(t!==r)}e.action=null}function as(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function os(e,t){return t}function ss(e,t){if(Bi){var n=Yl.formState;if(n!==null){a:{var r=F;if(Bi){if(zi){b:{for(var i=zi,a=Hi;i.nodeType!==8;){if(!a){i=null;break b}if(i=Sf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){zi=Sf(i.nextSibling),r=i.data===`F!`;break a}}Wi(r)}r=!1}r&&(t=n[0])}}return n=Io(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:t},n.queue=r,n=zs.bind(null,F,r),r.dispatch=n,r=Qo(!1),a=Vs.bind(null,F,!1,r.queue),r=Io(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=es.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function cs(e){return ls(Lo(),yo,e)}function ls(e,t,n){if(t=Wo(e,t,os)[0],e=Uo(Ho)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=zo(t)}catch(e){throw e===Oa?Aa:e}else r=t;t=Lo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(F.flags|=2048,fs(9,{destroy:void 0},us.bind(null,i,n),null)),[r,a,e]}function us(e,t){e.action=t}function ds(e){var t=Lo(),n=yo;if(n!==null)return ls(t,n,e);Lo(),t=t.memoizedState,n=Lo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function fs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=F.updateQueue,t===null&&(t=Ro(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ps(){return Lo().memoizedState}function ms(e,t,n,r){var i=Io();F.flags|=e,i.memoizedState=fs(1|t,{destroy:void 0},n,r===void 0?null:r)}function hs(e,t,n,r){var i=Lo();r=r===void 0?null:r;var a=i.memoizedState.inst;yo!==null&&r!==null&&Oo(r,yo.memoizedState.deps)?i.memoizedState=fs(t,a,n,r):(F.flags|=e,i.memoizedState=fs(1|t,a,n,r))}function gs(e,t){ms(8390656,8,e,t)}function _s(e,t){hs(2048,8,e,t)}function vs(e){F.flags|=4;var t=F.updateQueue;if(t===null)t=Ro(),F.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ys(e){var t=Lo().memoizedState;return vs({ref:t,nextImpl:e}),function(){if(Jl&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function bs(e,t){return hs(4,2,e,t)}function xs(e,t){return hs(4,4,e,t)}function Ss(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cs(e,t,n){n=n==null?null:n.concat([e]),hs(4,4,Ss.bind(null,t,e),n)}function ws(){}function Ts(e,t){var n=Lo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Oo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Es(e,t){var n=Lo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Oo(t,r[1]))return r[0];if(r=e(),So){Ve(!0);try{e()}finally{Ve(!1)}}return n.memoizedState=[r,t],r}function Ds(e,t,n){return n===void 0||vo&1073741824&&!(L&261930)?e.memoizedState=t:(e.memoizedState=n,e=Du(),F.lanes|=e,iu|=e,n)}function Os(e,t,n,r){return Dr(n,t)?n:ro.current===null?!(vo&42)||vo&1073741824&&!(L&261930)?(uc=!0,e.memoizedState=n):(e=Du(),F.lanes|=e,iu|=e,t):(e=Ds(e,n,r),Dr(e,t)||(uc=!0),e)}function ks(e,t,n,r,i){var a=M.p;M.p=a!==0&&8>a?a:8;var o=j.T,s={};j.T=s,Vs(e,!1,t,n);try{var c=i(),l=j.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Bs(e,t,Sa(c,r),Eu(e)):Bs(e,t,r,Eu(e))}catch(n){Bs(e,t,{then:function(){},status:`rejected`,reason:n},Eu())}finally{M.p=a,o!==null&&s.types!==null&&(o.types=s.types),j.T=o}}function As(){}function js(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Ms(e).queue;ks(e,a,t,ae,n===null?As:function(){return Ns(e),n(r)})}function Ms(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ns(e){var t=Ms(e);t.next===null&&(t=e.alternate.memoizedState),Bs(e,t.next.queue,{},Eu())}function Ps(){return sa(K)}function Fs(){return Lo().memoizedState}function Is(){return Lo().memoizedState}function Ls(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Eu();e=Ya(n);var r=Xa(t,e,n);r!==null&&(Ou(r,t,n),Za(r,t,n)),t={cache:ma()},e.payload=t;return}t=t.return}}function Rs(e,t,n){var r=Eu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Hs(e)?Us(t,n):(n=si(e,t,n,r),n!==null&&(Ou(n,e,r),Ws(n,t,r)))}function zs(e,t,n){Bs(e,t,n,Eu())}function Bs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hs(e))Us(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Dr(s,o))return oi(e,t,i,0),Yl===null&&ai(),!1}catch{}if(n=si(e,t,i,r),n!==null)return Ou(n,e,r),Ws(n,t,r),!0}return!1}function Vs(e,t,n,r){if(r={lane:2,revertLane:wd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Hs(e)){if(t)throw Error(i(479))}else t=si(e,n,r,2),t!==null&&Ou(t,e,2)}function Hs(e){var t=e.alternate;return e===F||t!==null&&t===F}function Us(e,t){xo=I=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ws(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,it(e,n)}}var Gs={readContext:sa,use:Bo,useCallback:Do,useContext:Do,useEffect:Do,useImperativeHandle:Do,useLayoutEffect:Do,useInsertionEffect:Do,useMemo:Do,useReducer:Do,useRef:Do,useState:Do,useDebugValue:Do,useDeferredValue:Do,useTransition:Do,useSyncExternalStore:Do,useId:Do,useHostTransitionStatus:Do,useFormState:Do,useActionState:Do,useOptimistic:Do,useMemoCache:Do,useCacheRefresh:Do};Gs.useEffectEvent=Do;var Ks={readContext:sa,use:Bo,useCallback:function(e,t){return Io().memoizedState=[e,t===void 0?null:t],e},useContext:sa,useEffect:gs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ms(4194308,4,Ss.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ms(4194308,4,e,t)},useInsertionEffect:function(e,t){ms(4,2,e,t)},useMemo:function(e,t){var n=Io();t=t===void 0?null:t;var r=e();if(So){Ve(!0);try{e()}finally{Ve(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Io();if(n!==void 0){var i=n(t);if(So){Ve(!0);try{n(t)}finally{Ve(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Rs.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Io();return e={current:e},t.memoizedState=e},useState:function(e){e=Qo(e);var t=e.queue,n=zs.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ws,useDeferredValue:function(e,t){return Ds(Io(),e,t)},useTransition:function(){var e=Qo(!1);return e=ks.bind(null,F,e.queue,!0,!1),Io().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,a=Io();if(Bi){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Yl===null)throw Error(i(349));L&127||qo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,gs(Yo.bind(null,r,o,e),[e]),r.flags|=2048,fs(9,{destroy:void 0},Jo.bind(null,r,o,n,t),null),n},useId:function(){var e=Io(),t=Yl.identifierPrefix;if(Bi){var n=Mi,r=ji;n=(r&~(1<<32-He(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ps,useFormState:ss,useActionState:ss,useOptimistic:function(e){var t=Io();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Vs.bind(null,F,!0,n),n.dispatch=t,[e,t]},useMemoCache:Vo,useCacheRefresh:function(){return Io().memoizedState=Ls.bind(null,F)},useEffectEvent:function(e){var t=Io(),n={impl:e};return t.memoizedState=n,function(){if(Jl&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},qs={readContext:sa,use:Bo,useCallback:Ts,useContext:sa,useEffect:_s,useImperativeHandle:Cs,useInsertionEffect:bs,useLayoutEffect:xs,useMemo:Es,useReducer:Uo,useRef:ps,useState:function(){return Uo(Ho)},useDebugValue:ws,useDeferredValue:function(e,t){return Os(Lo(),yo.memoizedState,e,t)},useTransition:function(){var e=Uo(Ho)[0],t=Lo().memoizedState;return[typeof e==`boolean`?e:zo(e),t]},useSyncExternalStore:Ko,useId:Fs,useHostTransitionStatus:Ps,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){return $o(Lo(),yo,e,t)},useMemoCache:Vo,useCacheRefresh:Is};qs.useEffectEvent=ys;var Js={readContext:sa,use:Bo,useCallback:Ts,useContext:sa,useEffect:_s,useImperativeHandle:Cs,useInsertionEffect:bs,useLayoutEffect:xs,useMemo:Es,useReducer:Go,useRef:ps,useState:function(){return Go(Ho)},useDebugValue:ws,useDeferredValue:function(e,t){var n=Lo();return yo===null?Ds(n,e,t):Os(n,yo.memoizedState,e,t)},useTransition:function(){var e=Go(Ho)[0],t=Lo().memoizedState;return[typeof e==`boolean`?e:zo(e),t]},useSyncExternalStore:Ko,useId:Fs,useHostTransitionStatus:Ps,useFormState:ds,useActionState:ds,useOptimistic:function(e,t){var n=Lo();return yo===null?(n.baseState=e,[e,n.queue.dispatch]):$o(n,yo,e,t)},useMemoCache:Vo,useCacheRefresh:Is};Js.useEffectEvent=ys;function Ys(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Xs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Eu(),i=Ya(r);i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(Ou(t,e,r),Za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Eu(),i=Ya(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(Ou(t,e,r),Za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Eu(),r=Ya(n);r.tag=2,t!=null&&(r.callback=t),t=Xa(e,r,n),t!==null&&(Ou(t,e,n),Za(t,e,n))}};function Zs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,a):!0}function Qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Xs.enqueueReplaceState(t,t.state,null)}function $s(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function ec(e){ti(e)}function tc(e){console.error(e)}function nc(e){ti(e)}function rc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ic(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function ac(e,t,n){return n=Ya(n),n.tag=3,n.payload={element:null},n.callback=function(){rc(e,t)},n}function oc(e){return e=Ya(e),e.tag=3,e}function sc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ic(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ic(t,n,r),typeof i!=`function`&&(gu===null?gu=new Set([this]):gu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function cc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ia(t,n,a,!0),n=co.current,n!==null){switch(n.tag){case 31:case 13:return lo===null?Bu():n.alternate===null&&ru===0&&(ru=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),ad(e,r,a)),!1;case 22:return n.flags|=65536,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),ad(e,r,a)),!1}throw Error(i(435,n.tag))}return ad(e,r,a),Bu(),!1}if(Bi)return t=co.current,t===null?(r!==Ui&&(t=Error(i(423),{cause:r}),Xi(Ci(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ci(r,n),a=ac(e.stateNode,r,a),Qa(e,a),ru!==4&&(ru=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ui&&(e=Error(i(422),{cause:r}),Xi(Ci(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ci(o,n),lu===null?lu=[o]:lu.push(o),ru!==4&&(ru=2),t===null)return!0;r=Ci(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ac(n.stateNode,r,e),Qa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(gu===null||!gu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=oc(a),sc(a,e,n,r),Qa(n,a),!1}n=n.return}while(n!==null);return!1}var lc=Error(i(461)),uc=!1;function dc(e,t,n,r){t.child=e===null?Ga(t,null,n,r):Wa(t,e.child,n,r)}function fc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return oa(t),r=ko(e,t,n,o,a,i),s=No(),e!==null&&!uc?(Po(e,t,i),Ic(e,t,i)):(Bi&&s&&Fi(t),t.flags|=1,dc(e,t,r,i),t.child)}function pc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!mi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,mc(e,t,a,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Lc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Or:n,n(o,r)&&e.ref===t.ref)return Ic(e,t,i)}return t.flags|=1,e=hi(a,r),e.ref=t.ref,e.return=t,t.child=e}function mc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Or(a,r)&&e.ref===t.ref)if(uc=!1,t.pendingProps=r=a,Lc(e,i))e.flags&131072&&(uc=!0);else return t.lanes=e.lanes,Ic(e,t,i)}return Sc(e,t,n,r,i)}function hc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return _c(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ea(t,a===null?null:a.cachePool),a===null?oo():ao(t,a),po(t);else return r=t.lanes=536870912,_c(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ea(t,null),oo(),mo(t)):(Ea(t,a.cachePool),ao(t,a),mo(t),t.memoizedState=null);return dc(e,t,i,n),t.child}function gc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function _c(e,t,n,r,i){var a=Ta();return a=a===null?null:{parent:pa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ea(t,null),oo(),po(t),e!==null&&ia(e,t,r,!0),t.childLanes=i,null}function vc(e,t){return t=jc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function yc(e,t,n){return Wa(t,e.child,null,n),e=vc(t,t.pendingProps),e.flags|=2,ho(t),t.memoizedState=null,e}function bc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(Bi){if(r.mode===`hidden`)return e=vc(t,r),t.lanes=536870912,gc(null,e);if(fo(t),(e=zi)?(e=vf(e,Hi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,zi=null)):e=null,e===null)throw Wi(t);return t.lanes=536870912,null}return vc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(fo(t),a)if(t.flags&256)t.flags&=-257,t=yc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(uc||ia(e,t,n,!1),a=(n&e.childLanes)!==0,uc||a){if(r=Yl,r!==null&&(s=at(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ci(e,s),Ou(r,e,s),lc;Bu(),t=yc(e,t,n)}else e=o.treeContext,zi=Sf(s.nextSibling),Ri=t,Bi=!0,Vi=null,Hi=!1,e!==null&&Li(t,e),t=vc(t,r),t.flags|=4096;return t}return e=hi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function xc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Sc(e,t,n,r,i){return oa(t),n=ko(e,t,n,r,void 0,i),r=No(),e!==null&&!uc?(Po(e,t,i),Ic(e,t,i)):(Bi&&r&&Fi(t),t.flags|=1,dc(e,t,n,i),t.child)}function Cc(e,t,n,r,i,a){return oa(t),t.updateQueue=null,n=jo(t,r,n,i),Ao(e),r=No(),e!==null&&!uc?(Po(e,t,a),Ic(e,t,a)):(Bi&&r&&Fi(t),t.flags|=1,dc(e,t,n,a),t.child)}function wc(e,t,n,r,i){if(oa(t),t.stateNode===null){var a=di,o=n.contextType;typeof o==`object`&&o&&(a=sa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Xs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},qa(t),o=n.contextType,a.context=typeof o==`object`&&o?sa(o):di,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ys(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Xs.enqueueReplaceState(a,a.state,null),to(t,r,a,i),eo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=$s(n,s);a.props=c;var l=a.context,u=n.contextType;o=di,typeof u==`object`&&u&&(o=sa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Qs(t,a,r,o),Ka=!1;var f=t.memoizedState;a.state=f,to(t,r,a,i),eo(),l=t.memoizedState,s||f!==l||Ka?(typeof d==`function`&&(Ys(t,n,d,r),l=t.memoizedState),(c=Ka||Zs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ja(e,t),o=t.memoizedProps,u=$s(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=di,typeof l==`object`&&l&&(c=sa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Qs(t,a,r,c),Ka=!1,f=t.memoizedState,a.state=f,to(t,r,a,i),eo();var p=t.memoizedState;o!==d||f!==p||Ka||e!==null&&e.dependencies!==null&&aa(e.dependencies)?(typeof s==`function`&&(Ys(t,n,s,r),p=t.memoizedState),(u=Ka||Zs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&aa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,xc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Wa(t,e.child,null,i),t.child=Wa(t,null,n,i)):dc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Ic(e,t,i),e}function Tc(e,t,n,r){return Ji(),t.flags|=256,dc(e,t,n,r),t.child}var Ec={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Dc(e){return{baseLanes:e,cachePool:Da()}}function Oc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=su),e}function kc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(go.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(Bi){if(a?uo(t):mo(t),(e=zi)?(e=vf(e,Hi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Ri=t,zi=null)):e=null,e===null)throw Wi(t);return bf(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(mo(t),a=t.mode,c=jc({mode:`hidden`,children:c},a),r=vi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Dc(n),r.childLanes=Oc(e,s,n),t.memoizedState=Ec,gc(null,r)):(uo(t),Ac(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(uo(t),t.flags&=-257,t=Mc(e,t,n)):t.memoizedState===null?(mo(t),c=r.fallback,a=t.mode,r=jc({mode:`visible`,children:r.children},a),c=vi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Wa(t,e.child,null,n),r=t.child,r.memoizedState=Dc(n),r.childLanes=Oc(e,s,n),t.memoizedState=Ec,t=gc(null,r)):(mo(t),t.child=e.child,t.flags|=128,t=null);else if(uo(t),bf(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Xi({value:r,source:null,stack:null}),t=Mc(e,t,n)}else if(uc||ia(e,t,n,!1),s=(n&e.childLanes)!==0,uc||s){if(s=Yl,s!==null&&(r=at(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ci(e,r),Ou(s,e,r),lc;yf(c)||Bu(),t=Mc(e,t,n)}else yf(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,zi=Sf(c.nextSibling),Ri=t,Bi=!0,Vi=null,Hi=!1,e!==null&&Li(t,e),t=Ac(t,r.children),t.flags|=4096);return t}return a?(mo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=hi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=vi(c,a,n,null),c.flags|=2):c=hi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,gc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Dc(n):(a=c.cachePool,a===null?a=Da():(l=pa._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Oc(e,s,n),t.memoizedState=Ec,gc(e.child,r)):(uo(t),n=e.child,e=n.sibling,n=hi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ac(e,t){return t=jc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function jc(e,t){return e=pi(22,e,null,t),e.lanes=0,e}function Mc(e,t,n){return Wa(t,e.child,null,n),e=Ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Nc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function Pc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Fc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=go.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,ue(go,o),dc(e,t,r,n),r=Bi?Di:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nc(e,n,t);else if(e.tag===19)Nc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Pc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Pc(t,!0,n,null,a,r);break;case`together`:Pc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ic(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),iu|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ia(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=hi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&aa(e))):!0}function Rc(e,t,n){switch(t.tag){case 3:he(t,t.stateNode.containerInfo),ea(t,pa,e.memoizedState.cache),Ji();break;case 27:case 5:_e(t);break;case 4:he(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(uo(t),e=Ic(e,t,n),e===null?null:e.sibling):kc(e,t,n):(uo(t),t.flags|=128,null);uo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(ia(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Fc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(go,go.current),r)break;return null;case 22:return t.lanes=0,hc(e,t,n,t.pendingProps);case 24:ea(t,pa,e.memoizedState.cache)}return Ic(e,t,n)}function zc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)uc=!0;else{if(!Lc(e,n)&&!(t.flags&128))return uc=!1,Rc(e,t,n);uc=!!(e.flags&131072)}else uc=!1,Bi&&t.flags&1048576&&Pi(t,Di,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e==`function`)mi(e)?(r=$s(e,r),t.tag=1,t=wc(null,t,e,r,n)):(t.tag=0,t=Sc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=fc(null,t,e,r,n);break a}else if(a===D){t.tag=14,t=pc(null,t,e,r,n);break a}}throw t=re(e)||e,Error(i(306,t,``))}}return t;case 0:return Sc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=$s(r,t.pendingProps),wc(e,t,r,a,n);case 3:a:{if(he(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ja(e,t),to(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ea(t,pa,r),r!==o.cache&&ra(t,[pa],n,!0),eo(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Tc(e,t,r,n);break a}else if(r!==a){a=Ci(Error(i(424)),t),Xi(a),t=Tc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(zi=Sf(e.firstChild),Ri=t,Bi=!0,Vi=null,Hi=!0,n=Ga(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ji(),r===a){t=Ic(e,t,n);break a}dc(e,t,r,n)}t=t.child}return t;case 26:return xc(e,t),e===null?(n=Uf(t.type,null,t.pendingProps,null))?t.memoizedState=n:Bi||(n=t.type,e=t.pendingProps,r=ef(pe.current).createElement(n),r[dt]=t,r[ft]=e,Jd(r,n,e),wt(r),t.stateNode=r):t.memoizedState=Uf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _e(t),e===null&&Bi&&(r=t.stateNode=Ef(t.type,t.pendingProps,pe.current),Ri=t,Hi=!0,a=zi,ff(t.type)?(Cf=a,zi=Sf(r.firstChild)):zi=a),dc(e,t,t.pendingProps.children,n),xc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Bi&&((a=r=zi)&&(r=gf(r,t.type,t.pendingProps,Hi),r===null?a=!1:(t.stateNode=r,Ri=t,zi=Sf(r.firstChild),Hi=!1,a=!0)),a||Wi(t)),_e(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,rf(a,o)?r=null:s!==null&&rf(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=ko(e,t,Mo,null,null,n),K._currentValue=a),xc(e,t),dc(e,t,r,n),t.child;case 6:return e===null&&Bi&&((e=n=zi)&&(n=_f(n,t.pendingProps,Hi),n===null?e=!1:(t.stateNode=n,Ri=t,zi=null,e=!0)),e||Wi(t)),null;case 13:return kc(e,t,n);case 4:return he(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wa(t,null,r,n):dc(e,t,r,n),t.child;case 11:return fc(e,t,t.type,t.pendingProps,n);case 7:return dc(e,t,t.pendingProps,n),t.child;case 8:return dc(e,t,t.pendingProps.children,n),t.child;case 12:return dc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ea(t,t.type,r.value),dc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,oa(t),a=sa(a),r=r(a),t.flags|=1,dc(e,t,r,n),t.child;case 14:return pc(e,t,t.type,t.pendingProps,n);case 15:return mc(e,t,t.type,t.pendingProps,n);case 19:return Fc(e,t,n);case 31:return bc(e,t,n);case 22:return hc(e,t,n,t.pendingProps);case 24:return oa(t),r=sa(pa),e===null?(a=Ta(),a===null&&(a=Yl,o=ma(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},qa(t),ea(t,pa,a)):((e.lanes&n)!==0&&(Ja(e,t),to(t,null,null,n),eo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ea(t,pa,r),r!==a.cache&&ra(t,[pa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ea(t,pa,r))),dc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Bc(e){e.flags|=4}function Vc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Lu())e.flags|=8192;else throw Fa=ja,ka}else e.flags&=-16777217}function Hc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!$f(t))if(Lu())e.flags|=8192;else throw Fa=ja,ka}function Uc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:$e(),e.lanes|=t,cu|=t)}function Wc(e,t){if(!Bi)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Gc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kc(e,t,n){var r=t.pendingProps;switch(Ii(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gc(t),null;case 1:return Gc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ta(pa),ge(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qi(t)?Bc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yi())),Gc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Bc(t),o===null?(Gc(t),Vc(t,a,null,r,n)):(Gc(t),Hc(t,o))):o?o===e.memoizedState?(Gc(t),t.flags&=-16777217):(Bc(t),Gc(t),Hc(t,o)):(e=e.memoizedProps,e!==r&&Bc(t),Gc(t),Vc(t,a,e,r,n)),null;case 27:if(N(t),n=pe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Bc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Gc(t),null}e=de.current,qi(t)?Gi(t,e):(e=Ef(a,r,n),t.stateNode=e,Bc(t))}return Gc(t),null;case 5:if(N(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Bc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Gc(t),null}if(o=de.current,qi(t))Gi(t,o);else{var s=ef(pe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[dt]=t,o[ft]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Jd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Bc(t)}}return Gc(t),Vc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Bc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=pe.current,qi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ri,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[dt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Gd(e.nodeValue,n)),e||Wi(t,!0)}else e=ef(e).createTextNode(r),e[dt]=t,t.stateNode=e}return Gc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=qi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[dt]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Gc(t),e=!1}else n=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ho(t),t):(ho(t),null);if(t.flags&128)throw Error(i(558))}return Gc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[dt]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Gc(t),a=!1}else a=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ho(t),t):(ho(t),null)}return ho(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Uc(t,t.updateQueue),Gc(t),null);case 4:return ge(),e===null&&Fd(t.stateNode.containerInfo),Gc(t),null;case 10:return ta(t.type),Gc(t),null;case 19:if(le(go),r=t.memoizedState,r===null)return Gc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Wc(r,!1);else{if(ru!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=_o(e),o!==null){for(t.flags|=128,Wc(r,!1),e=o.updateQueue,t.updateQueue=e,Uc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gi(n,e),n=n.sibling;return ue(go,go.current&1|2),Bi&&Ni(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ae()>mu&&(t.flags|=128,a=!0,Wc(r,!1),t.lanes=4194304)}else{if(!a)if(e=_o(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Uc(t,e),Wc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!Bi)return Gc(t),null}else 2*Ae()-r.renderingStartTime>mu&&n!==536870912&&(t.flags|=128,a=!0,Wc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Gc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ae(),e.sibling=null,n=go.current,ue(go,a?n&1|2:n&1),Bi&&Ni(t,r.treeForkCount),e);case 22:case 23:return ho(t),so(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Gc(t),t.subtreeFlags&6&&(t.flags|=8192)):Gc(t),n=t.updateQueue,n!==null&&Uc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&le(wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(pa),Gc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function qc(e,t){switch(Ii(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(pa),ge(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return N(t),null;case 31:if(t.memoizedState!==null){if(ho(t),t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ho(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(go),null;case 4:return ge(),null;case 10:return ta(t.type),null;case 22:case 23:return ho(t),so(),e!==null&&le(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(pa),null;case 25:return null;default:return null}}function Jc(e,t){switch(Ii(t),t.tag){case 3:ta(pa),ge();break;case 26:case 27:case 5:N(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&ho(t);break;case 13:ho(t);break;case 19:le(go);break;case 10:ta(t.type);break;case 22:case 23:ho(t),so(),e!==null&&le(wa);break;case 24:ta(pa)}}function Yc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){id(t,t.return,e)}}function Xc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){id(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){id(t,t.return,e)}}function Zc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{P(t,n)}catch(t){id(e,e.return,t)}}}function Qc(e,t,n){n.props=$s(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){id(e,t,n)}}function $c(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){id(e,t,n)}}function el(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){id(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){id(e,t,n)}else n.current=null}function tl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){id(e,e.return,t)}}function nl(e,t,n){try{var r=e.stateNode;Yd(r,e.type,n,t),r[ft]=t}catch(t){id(e,e.return,t)}}function rl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ff(e.type)||e.tag===4}function il(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||rl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ff(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=an));else if(r!==4&&(r===27&&ff(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(al(e,t,n),e=e.sibling;e!==null;)al(e,t,n),e=e.sibling}function ol(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&ff(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ol(e,t,n),e=e.sibling;e!==null;)ol(e,t,n),e=e.sibling}function sl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Jd(t,r,n),t[dt]=e,t[ft]=n}catch(t){id(e,e.return,t)}}var cl=!1,ll=!1,ul=!1,dl=typeof WeakSet==`function`?WeakSet:Set,fl=null;function pl(e,t){if(e=e.containerInfo,Qd=mp,e=Mr(e),Nr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for($d={focusedElem:e,selectionRange:n},mp=!1,fl=t;fl!==null;)if(t=fl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,fl=e;else for(;fl!==null;){switch(t=fl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=$s(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){id(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)hf(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:hf(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,fl=e;break}fl=t.return}}function ml(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:kl(e,n),r&4&&Yc(5,n);break;case 1:if(kl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){id(n,n.return,e)}else{var i=$s(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){id(n,n.return,e)}}r&64&&Zc(n),r&512&&$c(n,n.return);break;case 3:if(kl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{P(e,t)}catch(e){id(n,n.return,e)}}break;case 27:t===null&&r&4&&sl(n);case 26:case 5:kl(e,n),t===null&&r&4&&tl(n),r&512&&$c(n,n.return);break;case 12:kl(e,n);break;case 31:kl(e,n),r&4&&bl(e,n);break;case 13:kl(e,n),r&4&&xl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=cd.bind(null,n),xf(e,n))));break;case 22:if(r=n.memoizedState!==null||cl,!r){t=t!==null&&t.memoizedState!==null||ll,i=cl;var a=ll;cl=r,(ll=t)&&!a?jl(e,n,(n.subtreeFlags&8772)!=0):kl(e,n),cl=i,ll=a}break;case 30:break;default:kl(e,n)}}function hl(e){var t=e.alternate;t!==null&&(e.alternate=null,hl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&yt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var gl=null,_l=!1;function vl(e,t,n){for(n=n.child;n!==null;)yl(e,t,n),n=n.sibling}function yl(e,t,n){if(Be&&typeof Be.onCommitFiberUnmount==`function`)try{Be.onCommitFiberUnmount(ze,n)}catch{}switch(n.tag){case 26:ll||el(n,t),vl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ll||el(n,t);var r=gl,i=_l;ff(n.type)&&(gl=n.stateNode,_l=!1),vl(e,t,n),Df(n.stateNode),gl=r,_l=i;break;case 5:ll||el(n,t);case 6:if(r=gl,i=_l,gl=null,vl(e,t,n),gl=r,_l=i,gl!==null)if(_l)try{(gl.nodeType===9?gl.body:gl.nodeName===`HTML`?gl.ownerDocument.body:gl).removeChild(n.stateNode)}catch(e){id(n,t,e)}else try{gl.removeChild(n.stateNode)}catch(e){id(n,t,e)}break;case 18:gl!==null&&(_l?(e=gl,pf(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Bp(e)):pf(gl,n.stateNode));break;case 4:r=gl,i=_l,gl=n.stateNode.containerInfo,_l=!0,vl(e,t,n),gl=r,_l=i;break;case 0:case 11:case 14:case 15:Xc(2,n,t),ll||Xc(4,n,t),vl(e,t,n);break;case 1:ll||(el(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Qc(n,t,r)),vl(e,t,n);break;case 21:vl(e,t,n);break;case 22:ll=(r=ll)||n.memoizedState!==null,vl(e,t,n),ll=r;break;default:vl(e,t,n)}}function bl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Bp(e)}catch(e){id(t,t.return,e)}}}function xl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bp(e)}catch(e){id(t,t.return,e)}}function Sl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new dl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new dl),t;default:throw Error(i(435,e.tag))}}function Cl(e,t){var n=Sl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=ld.bind(null,e,t);t.then(r,r)}})}function wl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(ff(c.type)){gl=c.stateNode,_l=!1;break a}break;case 5:gl=c.stateNode,_l=!1;break a;case 3:case 4:gl=c.stateNode.containerInfo,_l=!0;break a}c=c.return}if(gl===null)throw Error(i(160));yl(o,s,a),gl=null,_l=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)El(t,e),t=t.sibling}var Tl=null;function El(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:wl(t,e),Dl(e),r&4&&(Xc(3,e,e.return),Yc(3,e),Xc(5,e,e.return));break;case 1:wl(t,e),Dl(e),r&512&&(ll||n===null||el(n,n.return)),r&64&&cl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=Tl;if(wl(t,e),Dl(e),r&512&&(ll||n===null||el(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[vt]||o[dt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Jd(o,r,n),o[dt]=e,wt(o),r=o;break a;case`link`:var s=Zf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Jd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Zf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Jd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[dt]=e,wt(o),r=o}e.stateNode=r}else W(a,e.type,e.stateNode);else e.stateNode=qf(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&nl(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?W(a,e.type,e.stateNode):qf(a,r,e.memoizedProps))}break;case 27:wl(t,e),Dl(e),r&512&&(ll||n===null||el(n,n.return)),n!==null&&r&4&&nl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(wl(t,e),Dl(e),r&512&&(ll||n===null||el(n,n.return)),e.flags&32){a=e.stateNode;try{Xt(a,``)}catch(t){id(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,nl(e,a,n===null?a:n.memoizedProps)),r&1024&&(ul=!0);break;case 6:if(wl(t,e),Dl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){id(e,e.return,t)}}break;case 3:if(U=null,a=Tl,Tl=Af(t.containerInfo),wl(t,e),Tl=a,Dl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bp(t.containerInfo)}catch(t){id(e,e.return,t)}ul&&(ul=!1,Ol(e));break;case 4:r=Tl,Tl=Af(e.stateNode.containerInfo),wl(t,e),Dl(e),Tl=r;break;case 12:wl(t,e),Dl(e);break;case 31:wl(t,e),Dl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Cl(e,r)));break;case 13:wl(t,e),Dl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(fu=Ae()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Cl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=cl,d=ll;if(cl=u||a,ll=d||l,wl(t,e),ll=d,cl=u,Dl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||cl||ll||Al(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){id(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){id(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?mf(m,!0):mf(l.stateNode,!1)}catch(e){id(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Cl(e,n))));break;case 19:wl(t,e),Dl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Cl(e,r)));break;case 30:break;case 21:break;default:wl(t,e),Dl(e)}}function Dl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(rl(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;ol(e,il(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Xt(o,``),n.flags&=-33),ol(e,il(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;al(e,il(e),s);break;default:throw Error(i(161))}}catch(t){id(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ol(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ol(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function kl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ml(e,t.alternate,t),t=t.sibling}function Al(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Xc(4,t,t.return),Al(t);break;case 1:el(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Qc(t,t.return,n),Al(t);break;case 27:Df(t.stateNode);case 26:case 5:el(t,t.return),Al(t);break;case 22:t.memoizedState===null&&Al(t);break;case 30:Al(t);break;default:Al(t)}e=e.sibling}}function jl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:jl(i,a,n),Yc(4,a);break;case 1:if(jl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){id(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)no(c[i],s)}catch(e){id(r,r.return,e)}}n&&o&64&&Zc(a),$c(a,a.return);break;case 27:sl(a);case 26:case 5:jl(i,a,n),n&&r===null&&o&4&&tl(a),$c(a,a.return);break;case 12:jl(i,a,n);break;case 31:jl(i,a,n),n&&o&4&&bl(i,a);break;case 13:jl(i,a,n),n&&o&4&&xl(i,a);break;case 22:a.memoizedState===null&&jl(i,a,n),$c(a,a.return);break;case 30:break;default:jl(i,a,n)}t=t.sibling}}function Ml(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ha(n))}function Nl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function Pl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fl(e,t,n,r),t=t.sibling}function Fl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Pl(e,t,n,r),i&2048&&Yc(9,t);break;case 1:Pl(e,t,n,r);break;case 3:Pl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(i&2048){Pl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){id(t,t.return,e)}}else Pl(e,t,n,r);break;case 31:Pl(e,t,n,r);break;case 13:Pl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Pl(e,t,n,r):(a._visibility|=2,Il(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Pl(e,t,n,r):Ll(e,t),i&2048&&Ml(o,t);break;case 24:Pl(e,t,n,r),i&2048&&Nl(t.alternate,t);break;default:Pl(e,t,n,r)}}function Il(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Il(a,o,s,c,i),Yc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Il(a,o,s,c,i)):u._visibility&2?Il(a,o,s,c,i):Ll(a,o),i&&l&2048&&Ml(o.alternate,o);break;case 24:Il(a,o,s,c,i),i&&l&2048&&Nl(o.alternate,o);break;default:Il(a,o,s,c,i)}t=t.sibling}}function Ll(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ll(n,r),i&2048&&Ml(r.alternate,r);break;case 24:Ll(n,r),i&2048&&Nl(r.alternate,r);break;default:Ll(n,r)}t=t.sibling}}var Rl=8192;function zl(e,t,n){if(e.subtreeFlags&Rl)for(e=e.child;e!==null;)Bl(e,t,n),e=e.sibling}function Bl(e,t,n){switch(e.tag){case 26:zl(e,t,n),e.flags&Rl&&e.memoizedState!==null&&ep(n,Tl,e.memoizedState,e.memoizedProps);break;case 5:zl(e,t,n);break;case 3:case 4:var r=Tl;Tl=Af(e.stateNode.containerInfo),zl(e,t,n),Tl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Rl,Rl=16777216,zl(e,t,n),Rl=r):zl(e,t,n));break;default:zl(e,t,n)}}function Vl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Hl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];fl=r,Gl(r,e)}Vl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ul(e),e=e.sibling}function Ul(e){switch(e.tag){case 0:case 11:case 15:Hl(e),e.flags&2048&&Xc(9,e,e.return);break;case 3:Hl(e);break;case 12:Hl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Wl(e)):Hl(e);break;default:Hl(e)}}function Wl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];fl=r,Gl(r,e)}Vl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Xc(8,t,t.return),Wl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Wl(t));break;default:Wl(t)}e=e.sibling}}function Gl(e,t){for(;fl!==null;){var n=fl;switch(n.tag){case 0:case 11:case 15:Xc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,fl=r;else a:for(n=e;fl!==null;){r=fl;var i=r.sibling,a=r.return;if(hl(r),r===n){fl=null;break a}if(i!==null){i.return=a,fl=i;break a}fl=a}}}var Kl={getCacheForType:function(e){var t=sa(pa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sa(pa).controller.signal}},ql=typeof WeakMap==`function`?WeakMap:Map,Jl=0,Yl=null,Xl=null,L=0,Zl=0,Ql=null,$l=!1,eu=!1,tu=!1,nu=0,ru=0,iu=0,au=0,ou=0,su=0,cu=0,lu=null,uu=null,du=!1,fu=0,pu=0,mu=1/0,hu=null,gu=null,_u=0,vu=null,yu=null,bu=0,xu=0,Su=null,Cu=null,wu=0,Tu=null;function Eu(){return Jl&2&&L!==0?L&-L:j.T===null?ct():wd()}function Du(){if(su===0)if(!(L&536870912)||Bi){var e=qe;qe<<=1,!(qe&3932160)&&(qe=262144),su=e}else su=536870912;return e=co.current,e!==null&&(e.flags|=32),su}function Ou(e,t,n){(e===Yl&&(Zl===2||Zl===9)||e.cancelPendingCommit!==null)&&(Fu(e,0),Mu(e,L,su,!1)),tt(e,n),(!(Jl&2)||e!==Yl)&&(e===Yl&&(!(Jl&2)&&(au|=n),ru===4&&Mu(e,L,su,!1)),gd(e))}function ku(e,t,n){if(Jl&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ze(e,t),a=r?Uu(e,t):Vu(e,t,!0),o=r;do{if(a===0){eu&&!r&&Mu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!ju(n)){a=Vu(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=lu;var l=c.current.memoizedState.isDehydrated;if(l&&(Fu(c,s).flags|=256),s=Vu(c,s,!1),s!==2){if(tu&&!l){c.errorRecoveryDisabledLanes|=o,au|=o,a=4;break a}o=uu,uu=a,o!==null&&(uu===null?uu=o:uu.push.apply(uu,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Fu(e,0),Mu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:Mu(r,t,su,!$l);break a;case 2:uu=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=fu+300-Ae(),10<a)){if(Mu(r,t,su,!$l),Xe(r,0,!0)!==0)break a;bu=t,r.timeoutHandle=sf(Au.bind(null,r,n,uu,hu,du,t,su,au,cu,$l,o,`Throttled`,-0,0),a);break a}Au(r,n,uu,hu,du,t,su,au,cu,$l,o,null,-0,0)}}break}while(1);gd(e)}function Au(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:an},Bl(t,a,d);var m=(a&62914560)===a?fu-Ae():(a&4194048)===a?pu-Ae():0;if(m=np(d,m),m!==null){bu=a,e.cancelPendingCommit=m(Xu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),Mu(e,a,o,!l);return}}Xu(e,t,a,n,r,i,o,s,c)}function ju(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Dr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mu(e,t,n,r){t&=~ou,t&=~au,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-He(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&rt(e,n,t)}function Nu(){return Jl&6?!0:(_d(0,!1),!1)}function Pu(){if(Xl!==null){if(Zl===0)var e=Xl.return;else e=Xl,$i=Qi=null,Fo(e),Ra=null,za=0,e=Xl;for(;e!==null;)Jc(e.alternate,e),e=e.return;Xl=null}}function Fu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,cf(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),bu=0,Pu(),Yl=e,Xl=n=hi(e.current,null),L=t,Zl=0,Ql=null,$l=!1,eu=Ze(e,t),tu=!1,cu=su=ou=au=iu=ru=0,uu=lu=null,du=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-He(r),a=1<<i;t|=e[i],r&=~a}return nu=t,ai(),n}function Iu(e,t){F=null,j.H=Gs,t===Oa||t===Aa?(t=Ia(),Zl=3):t===ka?(t=Ia(),Zl=4):Zl=t===lc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Ql=t,Xl===null&&(ru=1,rc(e,Ci(t,e.current)))}function Lu(){var e=co.current;return e===null?!0:(L&4194048)===L?lo===null:(L&62914560)===L||L&536870912?e===lo:!1}function Ru(){var e=j.H;return j.H=Gs,e===null?Gs:e}function zu(){var e=j.A;return j.A=Kl,e}function Bu(){ru=4,$l||(L&4194048)!==L&&co.current!==null||(eu=!0),!(iu&134217727)&&!(au&134217727)||Yl===null||Mu(Yl,L,su,!1)}function Vu(e,t,n){var r=Jl;Jl|=2;var i=Ru(),a=zu();(Yl!==e||L!==t)&&(hu=null,Fu(e,t)),t=!1;var o=ru;a:do try{if(Zl!==0&&Xl!==null){var s=Xl,c=Ql;switch(Zl){case 8:Pu(),o=6;break a;case 3:case 2:case 9:case 6:co.current===null&&(t=!0);var l=Zl;if(Zl=0,Ql=null,qu(e,s,c,l),n&&eu){o=0;break a}break;default:l=Zl,Zl=0,Ql=null,qu(e,s,c,l)}}Hu(),o=ru;break}catch(t){Iu(e,t)}while(1);return t&&e.shellSuspendCounter++,$i=Qi=null,Jl=r,j.H=i,j.A=a,Xl===null&&(Yl=null,L=0,ai()),o}function Hu(){for(;Xl!==null;)Gu(Xl)}function Uu(e,t){var n=Jl;Jl|=2;var r=Ru(),a=zu();Yl!==e||L!==t?(hu=null,mu=Ae()+500,Fu(e,t)):eu=Ze(e,t);a:do try{if(Zl!==0&&Xl!==null){t=Xl;var o=Ql;b:switch(Zl){case 1:Zl=0,Ql=null,qu(e,t,o,1);break;case 2:case 9:if(Ma(o)){Zl=0,Ql=null,Ku(t);break}t=function(){Zl!==2&&Zl!==9||Yl!==e||(Zl=7),gd(e)},o.then(t,t);break a;case 3:Zl=7;break a;case 4:Zl=5;break a;case 7:Ma(o)?(Zl=0,Ql=null,Ku(t)):(Zl=0,Ql=null,qu(e,t,o,7));break;case 5:var s=null;switch(Xl.tag){case 26:s=Xl.memoizedState;case 5:case 27:var c=Xl;if(s?$f(s):c.stateNode.complete){Zl=0,Ql=null;var l=c.sibling;if(l!==null)Xl=l;else{var u=c.return;u===null?Xl=null:(Xl=u,Ju(u))}break b}}Zl=0,Ql=null,qu(e,t,o,5);break;case 6:Zl=0,Ql=null,qu(e,t,o,6);break;case 8:Pu(),ru=6;break a;default:throw Error(i(462))}}Wu();break}catch(t){Iu(e,t)}while(1);return $i=Qi=null,j.H=r,j.A=a,Jl=n,Xl===null?(Yl=null,L=0,ai(),ru):0}function Wu(){for(;Xl!==null&&!Oe();)Gu(Xl)}function Gu(e){var t=zc(e.alternate,e,nu);e.memoizedProps=e.pendingProps,t===null?Ju(e):Xl=t}function Ku(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Cc(n,t,t.pendingProps,t.type,void 0,L);break;case 11:t=Cc(n,t,t.pendingProps,t.type.render,t.ref,L);break;case 5:Fo(t);default:Jc(n,t),t=Xl=gi(t,nu),t=zc(n,t,nu)}e.memoizedProps=e.pendingProps,t===null?Ju(e):Xl=t}function qu(e,t,n,r){$i=Qi=null,Fo(t),Ra=null,za=0;var i=t.return;try{if(cc(e,i,t,n,L)){ru=1,rc(e,Ci(n,e.current)),Xl=null;return}}catch(t){if(i!==null)throw Xl=i,t;ru=1,rc(e,Ci(n,e.current)),Xl=null;return}t.flags&32768?(Bi||r===1?e=!0:eu||L&536870912?e=!1:($l=e=!0,(r===2||r===9||r===3||r===6)&&(r=co.current,r!==null&&r.tag===13&&(r.flags|=16384))),Yu(t,e)):Ju(t)}function Ju(e){var t=e;do{if(t.flags&32768){Yu(t,$l);return}e=t.return;var n=Kc(t.alternate,t,nu);if(n!==null){Xl=n;return}if(t=t.sibling,t!==null){Xl=t;return}Xl=t=e}while(t!==null);ru===0&&(ru=5)}function Yu(e,t){do{var n=qc(e.alternate,e);if(n!==null){n.flags&=32767,Xl=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Xl=e;return}Xl=e=n}while(e!==null);ru=6,Xl=null}function Xu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do td();while(_u!==0);if(Jl&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ii,nt(e,n,o,s,c,l),e===Yl&&(Xl=Yl=null,L=0),yu=t,vu=e,bu=n,xu=o,Su=a,Cu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,ud(Pe,function(){return nd(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=j.T,j.T=null,a=M.p,M.p=2,s=Jl,Jl|=4;try{pl(e,t,n)}finally{Jl=s,M.p=a,j.T=r}}_u=1,Zu(),Qu(),$u()}}function Zu(){if(_u===1){_u=0;var e=vu,t=yu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=j.T,j.T=null;var r=M.p;M.p=2;var i=Jl;Jl|=4;try{El(t,e);var a=$d,o=Mr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&jr(s.ownerDocument.documentElement,s)){if(c!==null&&Nr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Ar(s,h),v=Ar(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}mp=!!Qd,$d=Qd=null}finally{Jl=i,M.p=r,j.T=n}}e.current=t,_u=2}}function Qu(){if(_u===2){_u=0;var e=vu,t=yu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=j.T,j.T=null;var r=M.p;M.p=2;var i=Jl;Jl|=4;try{ml(e,t.alternate,t)}finally{Jl=i,M.p=r,j.T=n}}_u=3}}function $u(){if(_u===4||_u===3){_u=0,ke();var e=vu,t=yu,n=bu,r=Cu;t.subtreeFlags&10256||t.flags&10256?_u=5:(_u=0,yu=vu=null,ed(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(gu=null),st(n),t=t.stateNode,Be&&typeof Be.onCommitFiberRoot==`function`)try{Be.onCommitFiberRoot(ze,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=j.T,i=M.p,M.p=2,j.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{j.T=t,M.p=i}}bu&3&&td(),gd(e),i=e.pendingLanes,n&261930&&i&42?e===Tu?wu++:(wu=0,Tu=e):wu=0,_d(0,!1)}}function ed(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function td(){return Zu(),Qu(),$u(),nd()}function nd(){if(_u!==5)return!1;var e=vu,t=xu;xu=0;var n=st(bu),r=j.T,a=M.p;try{M.p=32>n?32:n,j.T=null,n=Su,Su=null;var o=vu,s=bu;if(_u=0,yu=vu=null,bu=0,Jl&6)throw Error(i(331));var c=Jl;if(Jl|=4,Ul(o.current),Fl(o,o.current,s,n),Jl=c,_d(0,!1),Be&&typeof Be.onPostCommitFiberRoot==`function`)try{Be.onPostCommitFiberRoot(ze,o)}catch{}return!0}finally{M.p=a,j.T=r,ed(e,t)}}function rd(e,t,n){t=Ci(n,t),t=ac(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(tt(e,2),gd(e))}function id(e,t,n){if(e.tag===3)rd(e,e,n);else for(;t!==null;){if(t.tag===3){rd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(gu===null||!gu.has(r))){e=Ci(n,e),n=oc(2),r=Xa(t,n,2),r!==null&&(sc(n,r,t,e),tt(r,2),gd(r));break}}t=t.return}}function ad(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ql;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(tu=!0,i.add(n),e=od.bind(null,e,t,n),t.then(e,e))}function od(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Yl===e&&(L&n)===n&&(ru===4||ru===3&&(L&62914560)===L&&300>Ae()-fu?!(Jl&2)&&Fu(e,0):ou|=n,cu===L&&(cu=0)),gd(e)}function sd(e,t){t===0&&(t=$e()),e=ci(e,t),e!==null&&(tt(e,t),gd(e))}function cd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sd(e,n)}function ld(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),sd(e,n)}function ud(e,t){return Ee(e,t)}var dd=null,R=null,fd=!1,pd=!1,md=!1,hd=0;function gd(e){e!==R&&e.next===null&&(R===null?dd=R=e:R=R.next=e),pd=!0,fd||(fd=!0,Cd())}function _d(e,t){if(!md&&pd){md=!0;do for(var n=!1,r=dd;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-He(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Sd(r,a))}else a=L,a=Xe(r,r===Yl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ze(r,a)||(n=!0,Sd(r,a));r=r.next}while(n);md=!1}}function vd(){yd()}function yd(){pd=fd=!1;var e=0;hd!==0&&of()&&(e=hd);for(var t=Ae(),n=null,r=dd;r!==null;){var i=r.next,a=bd(r,t);a===0?(r.next=null,n===null?dd=i:n.next=i,i===null&&(R=n)):(n=r,(e!==0||a&3)&&(pd=!0)),r=i}_u!==0&&_u!==5||_d(e,!1),hd!==0&&(hd=0)}function bd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-He(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Qe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Yl,n=L,n=Xe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Zl===2||Zl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&De(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ze(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&De(r),st(n)){case 2:case 8:n=Ne;break;case 32:n=Pe;break;case 268435456:n=Ie;break;default:n=Pe}return r=xd.bind(null,e),n=Ee(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&De(r),e.callbackPriority=2,e.callbackNode=null,2}function xd(e,t){if(_u!==0&&_u!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(td()&&e.callbackNode!==n)return null;var r=L;return r=Xe(e,e===Yl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(ku(e,r,t),bd(e,Ae()),e.callbackNode!=null&&e.callbackNode===n?xd.bind(null,e):null)}function Sd(e,t){if(td())return null;ku(e,t,!0)}function Cd(){uf(function(){Jl&6?Ee(Me,vd):yd()})}function wd(){if(hd===0){var e=va;e===0&&(e=Ke,Ke<<=1,!(Ke&261888)&&(Ke=256)),hd=e}return hd}function Td(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:rn(``+e)}function Ed(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Dd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Td((i[ft]||null).action),o=r.submitter;o&&(t=(t=o[ft]||null)?Td(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new En(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(hd!==0){var e=o?Ed(i,o):new FormData(i);js(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?Ed(i,o):new FormData(i),js(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Od=0;Od<$r.length;Od++){var kd=$r[Od];ei(kd.toLowerCase(),`on`+(kd[0].toUpperCase()+kd.slice(1)))}ei(Gr,`onAnimationEnd`),ei(Kr,`onAnimationIteration`),ei(qr,`onAnimationStart`),ei(`dblclick`,`onDoubleClick`),ei(`focusin`,`onFocus`),ei(`focusout`,`onBlur`),ei(Jr,`onTransitionRun`),ei(Yr,`onTransitionStart`),ei(Xr,`onTransitionCancel`),ei(Zr,`onTransitionEnd`),Ot(`onMouseEnter`,[`mouseout`,`mouseover`]),Ot(`onMouseLeave`,[`mouseout`,`mouseover`]),Ot(`onPointerEnter`,[`pointerout`,`pointerover`]),Ot(`onPointerLeave`,[`pointerout`,`pointerover`]),Dt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Dt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Dt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Dt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Dt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Dt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Ad=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),jd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Ad));function Md(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ti(e)}i.currentTarget=null,a=c}}}}function z(e,t){var n=t[mt];n===void 0&&(n=t[mt]=new Set);var r=e+`__bubble`;n.has(r)||(Id(t,e,2,!1),n.add(r))}function Nd(e,t,n){var r=0;t&&(r|=4),Id(n,e,r,t)}var Pd=`_reactListening`+Math.random().toString(36).slice(2);function Fd(e){if(!e[Pd]){e[Pd]=!0,Tt.forEach(function(t){t!==`selectionchange`&&(jd.has(t)||Nd(t,!1,e),Nd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pd]||(t[Pd]=!0,Nd(`selectionchange`,!1,t))}}function Id(e,t,n,r){switch(xp(t)){case 2:var i=hp;break;case 8:i=gp;break;default:i=_p}n=i.bind(null,t,n,e),i=void 0,!hn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Ld(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=bt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}fn(function(){var r=a,i=sn(n),s=[];a:{var c=Qr.get(e);if(c!==void 0){var l=En,u=e;switch(e){case`keypress`:if(xn(n)===0)break a;case`keydown`:case`keyup`:l=Wn;break;case`focusin`:u=`focus`,l=Fn;break;case`focusout`:u=`blur`,l=Fn;break;case`beforeblur`:case`afterblur`:l=Fn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Nn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Pn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Kn;break;case Gr:case Kr:case qr:l=In;break;case Zr:l=qn;break;case`scroll`:case`scrollend`:l=On;break;case`wheel`:l=Jn;break;case`copy`:case`cut`:case`paste`:l=Ln;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Gn;break;case`toggle`:case`beforetoggle`:l=Yn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=pn(m,p),g!=null&&d.push(Rd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==on&&(u=n.relatedTarget||n.fromElement)&&(bt(u)||u[pt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?bt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Nn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Gn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:St(l),h=u==null?c:St(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,bt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Bd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Vd(s,c,l,d,!1),u!==null&&f!==null&&Vd(s,f,u,d,!0)}}a:{if(c=r?St(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=hr;else if(lr(c))if(gr)v=Tr;else{v=Cr;var y=Sr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&en(r.elementType)&&(v=hr):v=wr;if(v&&=v(e,r)){ur(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Kt(c,`number`,c.value)}switch(y=r?St(r):window,e){case`focusin`:(lr(y)||y.contentEditable===`true`)&&(Fr=y,Ir=r,Lr=null);break;case`focusout`:Lr=Ir=Fr=null;break;case`mousedown`:Rr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Rr=!1,zr(s,n,i);break;case`selectionchange`:if(Pr)break;case`keydown`:case`keyup`:zr(s,n,i)}var b;if(Zn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ar?rr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(er&&n.locale!==`ko`&&(ar||x!==`onCompositionStart`?x===`onCompositionEnd`&&ar&&(b=bn()):(_n=i,vn=`value`in _n?_n.value:_n.textContent,ar=!0)),y=zd(r,x),0<y.length&&(x=new Rn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ir(n),b!==null&&(x.data=b)))),(b=$n?or(e,n):sr(e,n))&&(x=zd(r,`onBeforeInput`),0<x.length&&(y=new Rn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),Dd(s,e,r,n,i)}Md(s,t)})}function Rd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zd(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=pn(e,n),i!=null&&r.unshift(Rd(e,i,a)),i=pn(e,t),i!=null&&r.push(Rd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Bd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Vd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=pn(n,a),l!=null&&o.unshift(Rd(n,l,c))):i||(l=pn(n,a),l!=null&&o.push(Rd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Hd=/\r\n?/g,Ud=/\u0000|\uFFFD/g;function Wd(e){return(typeof e==`string`?e:``+e).replace(Hd,`
`).replace(Ud,``)}function Gd(e,t){return t=Wd(t),Wd(e)===t}function Kd(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Xt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Xt(e,``+r);break;case`className`:Pt(e,`class`,r);break;case`tabIndex`:Pt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Pt(e,n,r);break;case`style`:$t(e,r,o);break;case`data`:if(t!==`object`){Pt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=rn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Kd(e,t,`name`,a.name,a,null),Kd(e,t,`formEncType`,a.formEncType,a,null),Kd(e,t,`formMethod`,a.formMethod,a,null),Kd(e,t,`formTarget`,a.formTarget,a,null)):(Kd(e,t,`encType`,a.encType,a,null),Kd(e,t,`method`,a.method,a,null),Kd(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=rn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=an);break;case`onScroll`:r!=null&&z(`scroll`,e);break;case`onScrollEnd`:r!=null&&z(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=rn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:z(`beforetoggle`,e),z(`toggle`,e),Nt(e,`popover`,r);break;case`xlinkActuate`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Ft(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Ft(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Nt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=tn.get(n)||n,Nt(e,n,r))}}function qd(e,t,n,r,a,o){switch(n){case`style`:$t(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Xt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Xt(e,``+r);break;case`onScroll`:r!=null&&z(`scroll`,e);break;case`onScrollEnd`:r!=null&&z(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=an);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Et.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ft]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Nt(e,n,r)}}}function Jd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:z(`error`,e),z(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Kd(e,t,o,s,n,null)}}a&&Kd(e,t,`srcSet`,n.srcSet,n,null),r&&Kd(e,t,`src`,n.src,n,null);return;case`input`:z(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Kd(e,t,r,d,n,null)}}Gt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in z(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Kd(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&qt(e,!!r,n,!0):qt(e,!!r,t,!1);return;case`textarea`:for(s in z(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Kd(e,t,s,c,n,null)}Yt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Kd(e,t,l,r,n,null)}return;case`dialog`:z(`beforetoggle`,e),z(`toggle`,e),z(`cancel`,e),z(`close`,e);break;case`iframe`:case`object`:z(`load`,e);break;case`video`:case`audio`:for(r=0;r<Ad.length;r++)z(Ad[r],e);break;case`image`:z(`error`,e),z(`load`,e);break;case`details`:z(`toggle`,e);break;case`embed`:case`source`:case`link`:z(`error`,e),z(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Kd(e,t,u,r,n,null)}return;default:if(en(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&qd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Kd(e,t,c,r,n,null))}function Yd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Kd(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Kd(e,t,p,m,r,f)}}Wt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Kd(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Kd(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?qt(e,!!n,n?[]:``,!1):qt(e,!!n,t,!0)):qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Kd(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Kd(e,t,s,a,r,o)}Jt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Kd(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Kd(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Kd(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Kd(e,t,u,p,r,m)}return;default:if(en(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&qd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||qd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Kd(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Kd(e,t,f,p,r,m)}function Xd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Zd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Xd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Xd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Qd=null,$d=null;function ef(e){return e.nodeType===9?e:e.ownerDocument}function tf(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function nf(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function rf(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var af=null;function of(){var e=window.event;return e&&e.type===`popstate`?e===af?!1:(af=e,!0):(af=null,!1)}var sf=typeof setTimeout==`function`?setTimeout:void 0,cf=typeof clearTimeout==`function`?clearTimeout:void 0,lf=typeof Promise==`function`?Promise:void 0,uf=typeof queueMicrotask==`function`?queueMicrotask:lf===void 0?sf:function(e){return lf.resolve(null).then(e).catch(df)};function df(e){setTimeout(function(){throw e})}function ff(e){return e===`head`}function pf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Bp(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)Df(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,Df(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[vt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&Df(e.ownerDocument.body);n=i}while(n);Bp(t)}function mf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function hf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:hf(n),yt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function gf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[vt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=Sf(e.nextSibling),e===null)break}return null}function _f(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=Sf(e.nextSibling),e===null))return null;return e}function vf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=Sf(e.nextSibling),e===null))return null;return e}function yf(e){return e.data===`$?`||e.data===`$~`}function bf(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function xf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function Sf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var Cf=null;function wf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return Sf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function Tf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function Ef(e,t,n){switch(t=ef(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function Df(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);yt(e)}var Of=new Map,kf=new Set;function Af(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var jf=M.d;M.d={f:Mf,r:Nf,D:If,C:Lf,L:Rf,m:zf,X:Vf,S:Bf,M:Hf};function Mf(){var e=jf.f(),t=Nu();return e||t}function Nf(e){var t=xt(e);t!==null&&t.tag===5&&t.type===`form`?Ns(t):jf.r(e)}var Pf=typeof document>`u`?null:document;function Ff(e,t,n){var r=Pf;if(r&&typeof t==`string`&&t){var i=Ut(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),kf.has(i)||(kf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Jd(t,`link`,e),wt(t),r.head.appendChild(t)))}}function If(e){jf.D(e),Ff(`dns-prefetch`,e,null)}function Lf(e,t){jf.C(e,t),Ff(`preconnect`,e,t)}function Rf(e,t,n){jf.L(e,t,n);var r=Pf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Ut(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Ut(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Ut(n.imageSizes)+`"]`)):i+=`[href="`+Ut(e)+`"]`;var a=i;switch(t){case`style`:a=B(e);break;case`script`:a=H(e)}Of.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),Of.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Wf(a))||t===`script`&&r.querySelector(Kf(a))||(t=r.createElement(`link`),Jd(t,`link`,e),wt(t),r.head.appendChild(t)))}}function zf(e,t){jf.m(e,t);var n=Pf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Ut(r)+`"][href="`+Ut(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=H(e)}if(!Of.has(a)&&(e=h({rel:`modulepreload`,href:e},t),Of.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Kf(a)))return}r=n.createElement(`link`),Jd(r,`link`,e),wt(r),n.head.appendChild(r)}}}function Bf(e,t,n){jf.S(e,t,n);var r=Pf;if(r&&e){var i=Ct(r).hoistableStyles,a=B(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Wf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=Of.get(a))&&Yf(e,n);var c=o=r.createElement(`link`);wt(c),Jd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Jf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Vf(e,t){jf.X(e,t);var n=Pf;if(n&&e){var r=Ct(n).hoistableScripts,i=H(e),a=r.get(i);a||(a=n.querySelector(Kf(i)),a||(e=h({src:e,async:!0},t),(t=Of.get(i))&&Xf(e,t),a=n.createElement(`script`),wt(a),Jd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Hf(e,t){jf.M(e,t);var n=Pf;if(n&&e){var r=Ct(n).hoistableScripts,i=H(e),a=r.get(i);a||(a=n.querySelector(Kf(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=Of.get(i))&&Xf(e,t),a=n.createElement(`script`),wt(a),Jd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Uf(e,t,n,r){var a=(a=pe.current)?Af(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=B(n.href),n=Ct(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=B(n.href);var o=Ct(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Wf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),Of.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Of.set(e,n),o||Gf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=H(n),n=Ct(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function B(e){return`href="`+Ut(e)+`"`}function Wf(e){return`link[rel="stylesheet"][`+e+`]`}function V(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Gf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Jd(t,`link`,n),wt(t),e.head.appendChild(t))}function H(e){return`[src="`+Ut(e)+`"]`}function Kf(e){return`script[async]`+e}function qf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Ut(n.href)+`"]`);if(r)return t.instance=r,wt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),wt(r),Jd(r,`style`,a),Jf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=B(n.href);var o=e.querySelector(Wf(a));if(o)return t.state.loading|=4,t.instance=o,wt(o),o;r=V(n),(a=Of.get(a))&&Yf(r,a),o=(e.ownerDocument||e).createElement(`link`),wt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Jd(o,`link`,r),t.state.loading|=4,Jf(o,n.precedence,e),t.instance=o;case`script`:return o=H(n.src),(a=e.querySelector(Kf(o)))?(t.instance=a,wt(a),a):(r=n,(a=Of.get(o))&&(r=h({},n),Xf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),wt(a),Jd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Jf(r,n.precedence,e));return t.instance}function Jf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Yf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Xf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var U=null;function Zf(e,t,n){if(U===null){var r=new Map,i=U=new Map;i.set(n,r)}else i=U,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[vt]||a[dt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function W(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Qf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function $f(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function ep(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=B(r.href),a=t.querySelector(Wf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=rp.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,wt(a);return}a=t.ownerDocument||t,r=V(r),(i=Of.get(i))&&Yf(r,i),a=a.createElement(`link`),wt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Jd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=rp.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var tp=0;function np(e,t){return e.stylesheets&&e.count===0&&ip(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ip(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&tp===0&&(tp=62500*Zd());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ip(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>tp?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function rp(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ip(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var G=null;function ip(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,G=new Map,t.forEach(ap,e),G=null,rp.call(e))}function ap(e,t){if(!(t.state.loading&4)){var n=G.get(e);if(n)var r=n.get(null);else{n=new Map,G.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=rp.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var K={$$typeof:C,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function op(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=et(0),this.hiddenUpdates=et(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function sp(e,t,n,r,i,a,o,s,c,l,u,d){return e=new op(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=pi(3,null,null,t),e.current=a,a.stateNode=e,t=ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},qa(a),e}function cp(e){return e?(e=di,e):di}function lp(e,t,n,r,i,a){i=cp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ya(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Xa(e,r,t),n!==null&&(Ou(n,e,t),Za(n,e,t))}function up(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function dp(e,t){up(e,t),(e=e.alternate)&&up(e,t)}function fp(e){if(e.tag===13||e.tag===31){var t=ci(e,67108864);t!==null&&Ou(t,e,67108864),dp(e,67108864)}}function pp(e){if(e.tag===13||e.tag===31){var t=Eu();t=ot(t);var n=ci(e,t);n!==null&&Ou(n,e,t),dp(e,t)}}var mp=!0;function hp(e,t,n,r){var i=j.T;j.T=null;var a=M.p;try{M.p=2,_p(e,t,n,r)}finally{M.p=a,j.T=i}}function gp(e,t,n,r){var i=j.T;j.T=null;var a=M.p;try{M.p=8,_p(e,t,n,r)}finally{M.p=a,j.T=i}}function _p(e,t,n,r){if(mp){var i=vp(r);if(i===null)Ld(e,t,r,yp,n),Ap(e,r);else if(Mp(i,e,t,n,r))r.stopPropagation();else if(Ap(e,r),t&4&&-1<kp.indexOf(e)){for(;i!==null;){var a=xt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ye(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-He(o);s.entanglements[1]|=c,o&=~c}gd(a),!(Jl&6)&&(mu=Ae()+500,_d(0,!1))}}break;case 31:case 13:s=ci(a,2),s!==null&&Ou(s,a,2),Nu(),dp(a,2)}if(a=vp(r),a===null&&Ld(e,t,r,yp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ld(e,t,r,null,n)}}function vp(e){return e=sn(e),bp(e)}var yp=null;function bp(e){if(yp=null,e=bt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return yp=e,null}function xp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(je()){case Me:return 2;case Ne:return 8;case Pe:case Fe:return 32;case Ie:return 268435456;default:return 32}default:return 32}}var Sp=!1,Cp=null,wp=null,Tp=null,Ep=new Map,Dp=new Map,Op=[],kp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Ap(e,t){switch(e){case`focusin`:case`focusout`:Cp=null;break;case`dragenter`:case`dragleave`:wp=null;break;case`mouseover`:case`mouseout`:Tp=null;break;case`pointerover`:case`pointerout`:Ep.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Dp.delete(t.pointerId)}}function jp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=xt(t),t!==null&&fp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Mp(e,t,n,r,i){switch(t){case`focusin`:return Cp=jp(Cp,e,t,n,r,i),!0;case`dragenter`:return wp=jp(wp,e,t,n,r,i),!0;case`mouseover`:return Tp=jp(Tp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Ep.set(a,jp(Ep.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Dp.set(a,jp(Dp.get(a)||null,e,t,n,r,i)),!0}return!1}function Np(e){var t=bt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,lt(e.priority,function(){pp(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,lt(e.priority,function(){pp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=vp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);on=r,n.target.dispatchEvent(r),on=null}else return t=xt(n),t!==null&&fp(t),e.blockedOn=n,!1;t.shift()}return!0}function Fp(e,t,n){Pp(e)&&n.delete(t)}function Ip(){Sp=!1,Cp!==null&&Pp(Cp)&&(Cp=null),wp!==null&&Pp(wp)&&(wp=null),Tp!==null&&Pp(Tp)&&(Tp=null),Ep.forEach(Fp),Dp.forEach(Fp)}function Lp(e,n){e.blockedOn===n&&(e.blockedOn=null,Sp||(Sp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Ip)))}var Rp=null;function zp(e){Rp!==e&&(Rp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Rp===e&&(Rp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(bp(r||n)===null)continue;break}var a=xt(n);a!==null&&(e.splice(t,3),t-=3,js(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Bp(e){function t(t){return Lp(t,e)}Cp!==null&&Lp(Cp,e),wp!==null&&Lp(wp,e),Tp!==null&&Lp(Tp,e),Ep.forEach(t),Dp.forEach(t);for(var n=0;n<Op.length;n++){var r=Op[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Op.length&&(n=Op[0],n.blockedOn===null);)Np(n),n.blockedOn===null&&Op.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ft]||null;if(typeof a==`function`)o||zp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ft]||null)s=o.formAction;else if(bp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),zp(n)}}}function Vp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Hp(e){this._internalRoot=e}Up.prototype.render=Hp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;lp(n,Eu(),e,t,null,null)},Up.prototype.unmount=Hp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lp(e.current,2,null,e,null,null),Nu(),t[pt]=null}};function Up(e){this._internalRoot=e}Up.prototype.unstable_scheduleHydration=function(e){if(e){var t=ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Op.length&&t!==0&&t<Op[n].priority;n++);Op.splice(n,0,e),n===0&&Np(e)}};var Wp=n.version;if(Wp!==`19.2.4`)throw Error(i(527,Wp,`19.2.4`));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Gp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:j,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Kp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kp.isDisabled&&Kp.supportsFiber)try{ze=Kp.inject(Gp),Be=Kp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=ec,s=tc,c=nc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=sp(e,1,!1,null,null,n,r,null,o,s,c,Vp),e[pt]=t.current,Fd(e),new Hp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=o((e=>{var t=u();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var r=typeof Object.is==`function`?Object.is:n,i=t.useSyncExternalStore,a=t.useRef,o=t.useEffect,s=t.useMemo,c=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,l,u){var d=a(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=s(function(){function e(e){if(!i){if(i=!0,a=e,e=l(e),u!==void 0&&f.hasValue){var t=f.value;if(u(t,e))return o=t}return o=e}if(t=o,r(a,e))return t;var n=l(e);return u!==void 0&&u(t,n)?(a=e,t):(a=e,o=n)}var i=!1,a,o,s=n===void 0?null:n;return[function(){return e(t())},s===null?void 0:function(){return e(s())}]},[t,n,l,u]);var p=i(e,d[0],d[1]);return o(function(){f.hasValue=!0,f.value=p},[p]),c(p),p}})),v=o(((e,t)=>{t.exports=_()})),y=g(),b=c(u(),1),x=v();function S(e){e()}function C(){let e=null,t=null;return{clear(){e=null,t=null},notify(){S(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){let t=[],n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(n){let r=!0,i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var w={notify(){},get:()=>[]};function T(e,t){let n,r=w,i=0,a=!1;function o(e){u();let t=r.subscribe(e),n=!1;return()=>{n||(n=!0,t(),d())}}function s(){r.notify()}function c(){m.onStateChange&&m.onStateChange()}function l(){return a}function u(){i++,n||(n=t?t.addNestedSub(c):e.subscribe(c),r=C())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=w)}function f(){a||(a=!0,u())}function p(){a&&(a=!1,d())}let m={addNestedSub:o,notifyNestedSubs:s,handleChangeWrapper:c,isSubscribed:l,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>r};return m}var E=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,D=typeof navigator<`u`&&navigator.product===`ReactNative`,O=E||D?b.useLayoutEffect:b.useEffect;Object.prototype;var k=Symbol.for(`react-redux-context`),A=typeof globalThis<`u`?globalThis:{};function ee(){if(!b.createContext)return{};let e=A[k]??=new Map,t=e.get(b.createContext);return t||(t=b.createContext(null),e.set(b.createContext,t)),t}var te=ee();function ne(e){let{children:t,context:n,serverState:r,store:i}=e,a=b.useMemo(()=>({store:i,subscription:T(i),getServerState:r?()=>r:void 0}),[i,r]),o=b.useMemo(()=>i.getState(),[i]);O(()=>{let{subscription:e}=a;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),o!==i.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}},[a,o]);let s=n||te;return b.createElement(s.Provider,{value:a},t)}var re=ne;function ie(e=te){return function(){return b.useContext(e)}}var j=ie();function M(e=te){let t=e===te?j:ie(e),n=()=>{let{store:e}=t();return e};return Object.assign(n,{withTypes:()=>n}),n}var ae=M();function oe(e=te){let t=e===te?ae:M(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var se=oe(),ce=(e,t)=>e===t;function le(e=te){let t=e===te?j:ie(e),n=(e,n={})=>{let{equalityFn:r=ce}=typeof n==`function`?{equalityFn:n}:n,{store:i,subscription:a,getServerState:o}=t();b.useRef(!0);let s=b.useCallback({[e.name](t){return e(t)}}[e.name],[e]),c=(0,x.useSyncExternalStoreWithSelector)(a.addNestedSub,i.getState,o||i.getState,s,r);return b.useDebugValue(c),c};return Object.assign(n,{withTypes:()=>n}),n}var ue=le(),de=`modulepreload`,fe=function(e){return`/UniSchedule/`+e},pe={},me=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=fe(t,n),t in pe)return;pe[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:de,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},he=`popstate`;function ge(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function _e(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return xe(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:Se(t)}return we(t,n,null,e)}function N(e,t){if(e===!1||e==null)throw Error(t)}function ve(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function ye(){return Math.random().toString(36).substring(2,10)}function be(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function xe(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?Ce(t):t,state:n,key:t&&t.key||r||ye(),unstable_mask:i}}function Se({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function Ce(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function we(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ge(e)?e:xe(h.location,e,t);n&&n(r,e),l=u()+1;let d=be(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ge(e)?e:xe(h.location,e,t);n&&n(r,e),l=u();let i=be(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return Te(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(he,d),c=e,()=>{i.removeEventListener(he,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function Te(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),N(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:Se(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function Ee(e,t,n=`/`){return De(e,t,n,!1)}function De(e,t,n,r){let i=Ge((typeof t==`string`?Ce(t):t).pathname||`/`,n);if(i==null)return null;let a=ke(e);je(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=We(i);o=Ve(a[e],t,r)}return o}function Oe(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function ke(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;N(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=$e([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(N(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ke(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ze(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of Ae(e.path))a(e,t,!0,n)}),t}function Ae(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=Ae(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function je(e){e.sort((e,t)=>e.score===t.score?Be(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var Me=/^:[\w-]+$/,Ne=3,Pe=2,Fe=1,Ie=10,Le=-2,Re=e=>e===`*`;function ze(e,t){let n=e.split(`/`),r=n.length;return n.some(Re)&&(r+=Le),t&&(r+=Pe),n.filter(e=>!Re(e)).reduce((e,t)=>e+(Me.test(t)?Ne:t===``?Fe:Ie),r)}function Be(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Ve(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=He({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=He({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:$e([a,u.pathname]),pathnameBase:et($e([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=$e([a,u.pathnameBase]))}return o}function He(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ue(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Ue(e,t=!1,n=!0){ve(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function We(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return ve(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Ge(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Ke=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function qe(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?Ce(e):e,a;return n?(n=n.replace(/\/\/+/g,`/`),a=n.startsWith(`/`)?Je(n.substring(1),`/`):Je(n,t)):a=t,{pathname:a,search:tt(r),hash:nt(i)}}function Je(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Ye(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Xe(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Ze(e){let t=Xe(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Qe(e,t,n,r=!1){let i;typeof e==`string`?i=Ce(e):(i={...e},N(!i.pathname||!i.pathname.includes(`?`),Ye(`?`,`pathname`,`search`,i)),N(!i.pathname||!i.pathname.includes(`#`),Ye(`#`,`pathname`,`hash`,i)),N(!i.search||!i.search.includes(`#`),Ye(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=qe(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var $e=e=>e.join(`/`).replace(/\/\/+/g,`/`),et=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),tt=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,nt=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,rt=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function it(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function at(e){return e.map(e=>e.route.path).filter(Boolean).join(`/`).replace(/\/\/*/g,`/`)||`/`}var ot=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function st(e,t){let n=e;if(typeof n!=`string`||!Ke.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(ot)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Ge(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{ve(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var ct=b.createContext(null);ct.displayName=`DataRouter`;var lt=b.createContext(null);lt.displayName=`DataRouterState`;var ut=b.createContext(!1),dt=b.createContext({isTransitioning:!1});dt.displayName=`ViewTransition`;var ft=b.createContext(new Map);ft.displayName=`Fetchers`;var pt=b.createContext(null);pt.displayName=`Await`;var mt=b.createContext(null);mt.displayName=`Navigation`;var ht=b.createContext(null);ht.displayName=`Location`;var gt=b.createContext({outlet:null,matches:[],isDataRoute:!1});gt.displayName=`Route`;var _t=b.createContext(null);_t.displayName=`RouteError`;var vt=`REACT_ROUTER_ERROR`,yt=`REDIRECT`,bt=`ROUTE_ERROR_RESPONSE`;function xt(e){if(e.startsWith(`${vt}:${yt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function St(e){if(e.startsWith(`${vt}:${bt}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new rt(t.status,t.statusText,t.data)}catch{}}function Ct(e,{relative:t}={}){N(wt(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=b.useContext(mt),{hash:i,pathname:a,search:o}=Mt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:$e([n,a])),r.createHref({pathname:s,search:o,hash:i})}function wt(){return b.useContext(ht)!=null}function Tt(){return N(wt(),`useLocation() may be used only in the context of a <Router> component.`),b.useContext(ht).location}var Et=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function Dt(e){b.useContext(mt).static||b.useLayoutEffect(e)}function Ot(){let{isDataRoute:e}=b.useContext(gt);return e?Zt():kt()}function kt(){N(wt(),`useNavigate() may be used only in the context of a <Router> component.`);let e=b.useContext(ct),{basename:t,navigator:n}=b.useContext(mt),{matches:r}=b.useContext(gt),{pathname:i}=Tt(),a=JSON.stringify(Ze(r)),o=b.useRef(!1);return Dt(()=>{o.current=!0}),b.useCallback((r,s={})=>{if(ve(o.current,Et),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Qe(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:$e([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}var At=b.createContext(null);function jt(e){let t=b.useContext(gt).outlet;return b.useMemo(()=>t&&b.createElement(At.Provider,{value:e},t),[t,e])}function Mt(e,{relative:t}={}){let{matches:n}=b.useContext(gt),{pathname:r}=Tt(),i=JSON.stringify(Ze(n));return b.useMemo(()=>Qe(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function Nt(e,t){return Pt(e,t)}function Pt(e,t,n){N(wt(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=b.useContext(mt),{matches:i}=b.useContext(gt),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;$t(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=Tt(),d;if(t){let e=typeof t==`string`?Ce(t):t;N(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=Ee(e,{pathname:p});ve(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),ve(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Vt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:$e([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:$e([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?b.createElement(ht.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function Ft(){let e=Xt(),t=it(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=b.createElement(b.Fragment,null,b.createElement(`p`,null,`💿 Hey developer 👋`),b.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,b.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,b.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),b.createElement(b.Fragment,null,b.createElement(`h2`,null,`Unexpected Application Error!`),b.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?b.createElement(`pre`,{style:i},n):null,o)}var It=b.createElement(Ft,null),Lt=class extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=St(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:b.createElement(gt.Provider,{value:this.props.routeContext},b.createElement(_t.Provider,{value:e,children:this.props.component}));return this.context?b.createElement(zt,{error:e},t):t}};Lt.contextType=ut;var Rt=new WeakMap;function zt({children:e,error:t}){let{basename:n}=b.useContext(mt);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=xt(t.digest);if(e){let r=Rt.get(t);if(r)throw r;let i=st(e.location,n);if(ot&&!Rt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Rt.set(t,n),n}return b.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function Bt({routeContext:e,match:t,children:n}){let r=b.useContext(ct);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(gt.Provider,{value:e},n)}function Vt(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);N(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:at(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||It,o&&(s<0&&c===0?($t(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?b.createElement(n.route.Component,null):n.route.element?n.route.element:e,b.createElement(Bt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?b.createElement(Lt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Ht(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ut(e){let t=b.useContext(ct);return N(t,Ht(e)),t}function Wt(e){let t=b.useContext(lt);return N(t,Ht(e)),t}function Gt(e){let t=b.useContext(gt);return N(t,Ht(e)),t}function Kt(e){let t=Gt(e),n=t.matches[t.matches.length-1];return N(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function qt(){return Kt(`useRouteId`)}function Jt(){return Wt(`useNavigation`).navigation}function Yt(){let{matches:e,loaderData:t}=Wt(`useMatches`);return b.useMemo(()=>e.map(e=>Oe(e,t)),[e,t])}function Xt(){let e=b.useContext(_t),t=Wt(`useRouteError`),n=Kt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Zt(){let{router:e}=Ut(`useNavigate`),t=Kt(`useNavigate`),n=b.useRef(!1);return Dt(()=>{n.current=!0}),b.useCallback(async(r,i={})=>{ve(n.current,Et),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Qt={};function $t(e,t,n){!t&&!Qt[e]&&(Qt[e]=!0,ve(!1,n))}b.useOptimistic,b.memo(en);function en({routes:e,future:t,state:n,isStatic:r,onError:i}){return Pt(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function tn({to:e,replace:t,state:n,relative:r}){N(wt(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=b.useContext(mt);ve(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=b.useContext(gt),{pathname:o}=Tt(),s=Ot(),c=Qe(e,Ze(a),o,r===`path`),l=JSON.stringify(c);return b.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function nn(e){return jt(e.context)}function rn(e){N(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function an({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){N(!wt(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=b.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=Ce(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=b.useMemo(()=>{let e=Ge(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return ve(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:b.createElement(mt.Provider,{value:c},b.createElement(ht.Provider,{children:t,value:h}))}function on({children:e,location:t}){return Nt(sn(e),t)}function sn(e,t=[]){let n=[];return b.Children.forEach(e,(e,r)=>{if(!b.isValidElement(e))return;let i=[...t,r];if(e.type===b.Fragment){n.push.apply(n,sn(e.props.children,i));return}N(e.type===rn,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),N(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=sn(e.props.children,i)),n.push(a)}),n}var cn=`get`,ln=`application/x-www-form-urlencoded`;function un(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function dn(e){return un(e)&&e.tagName.toLowerCase()===`button`}function fn(e){return un(e)&&e.tagName.toLowerCase()===`form`}function pn(e){return un(e)&&e.tagName.toLowerCase()===`input`}function mn(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function hn(e,t){return e.button===0&&(!t||t===`_self`)&&!mn(e)}var gn=null;function _n(){if(gn===null)try{new FormData(document.createElement(`form`),0),gn=!1}catch{gn=!0}return gn}var vn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function yn(e){return e!=null&&!vn.has(e)?(ve(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ln}"`),null):e}function bn(e,t){let n,r,i,a,o;if(fn(e)){let o=e.getAttribute(`action`);r=o?Ge(o,t):null,n=e.getAttribute(`method`)||cn,i=yn(e.getAttribute(`enctype`))||ln,a=new FormData(e)}else if(dn(e)||pn(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Ge(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||cn,i=yn(e.getAttribute(`formenctype`))||yn(o.getAttribute(`enctype`))||ln,a=new FormData(o,e),!_n()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(un(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=cn,r=null,i=ln,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var xn={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},Sn=/[&><\u2028\u2029]/g;function Cn(e){return e.replace(Sn,e=>xn[e])}function wn(e,t){if(e===!1||e==null)throw Error(t)}function Tn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Ge(i.pathname,t)===`/`?i.pathname=`${t.replace(/\/$/,``)}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,``)}.${r}`,i}async function En(e,t){if(e.id in t)return t[e.id];try{let n=await me(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Dn(e){return e!=null&&typeof e.page==`string`}function On(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function kn(e,t,n){return Pn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await En(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(On).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function An(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function jn(e,t,{includeHydrateFallback:n}={}){return Mn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function Mn(e){return[...new Set(e)]}function Nn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Pn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!Dn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(Nn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function Fn(){let e=b.useContext(ct);return wn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function In(){let e=b.useContext(lt);return wn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Ln=b.createContext(void 0);Ln.displayName=`FrameworkContext`;function Rn(){let e=b.useContext(Ln);return wn(e,`You must render this element inside a <HydratedRouter> element`),e}function zn(e,t){let n=b.useContext(Ln),[r,i]=b.useState(!1),[a,o]=b.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=b.useRef(null);b.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),b.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:Bn(s,p),onBlur:Bn(c,m),onMouseEnter:Bn(l,p),onMouseLeave:Bn(u,m),onTouchStart:Bn(d,p)}]:[a,f,{}]:[!1,f,{}]}function Bn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Vn({page:e,...t}){let{router:n}=Fn(),r=b.useMemo(()=>Ee(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?b.createElement(Un,{page:e,matches:r,...t}):null}function Hn(e){let{manifest:t,routeModules:n}=Rn(),[r,i]=b.useState([]);return b.useEffect(()=>{let r=!1;return kn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Un({page:e,matches:t,...n}){let r=Tt(),{future:i,manifest:a,routeModules:o}=Rn(),{basename:s}=Fn(),{loaderData:c,matches:l}=In(),u=b.useMemo(()=>An(e,t,l,a,r,`data`),[e,t,l,a,r]),d=b.useMemo(()=>An(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=b.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=Tn(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=b.useMemo(()=>jn(d,a),[d,a]),m=Hn(d);return b.createElement(b.Fragment,null,f.map(e=>b.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>b.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>b.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function Wn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}var Gn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Gn&&(window.__reactRouterVersion=`7.13.1`)}catch{}function Kn({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=b.useRef();i.current??=_e({window:r,v5Compat:!0});let a=i.current,[o,s]=b.useState({action:a.action,location:a.location}),c=b.useCallback(e=>{n===!1?s(e):b.startTransition(()=>s(e))},[n]);return b.useLayoutEffect(()=>a.listen(c),[a,c]),b.createElement(an,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function qn({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=b.useState({action:n.action,location:n.location}),o=b.useCallback(e=>{r===!1?a(e):b.startTransition(()=>a(e))},[r]);return b.useLayoutEffect(()=>n.listen(o),[n,o]),b.createElement(an,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}qn.displayName=`unstable_HistoryRouter`;var Jn=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yn=b.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:_}=b.useContext(mt),v=typeof l==`string`&&Jn.test(l),y=st(l,h);l=y.to;let x=Ct(l,{relative:r}),S=Tt(),C=null;if(o){let e=Qe(o,[],S.unstable_mask?S.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:$e([h,e.pathname])),C=g.createHref(e)}let[w,T,E]=zn(n,p),D=nr(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:_});function O(t){e&&e(t),t.defaultPrevented||D(t)}let k=!(y.isExternal||i),A=b.createElement(`a`,{...p,...E,href:(k?C:void 0)||y.absoluteURL||x,onClick:k?O:e,ref:Wn(m,T),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return w&&!v?b.createElement(b.Fragment,null,A,b.createElement(Vn,{page:x})):A});Yn.displayName=`Link`;var Xn=b.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=Mt(a,{relative:c.relative}),d=Tt(),f=b.useContext(lt),{navigator:p,basename:m}=b.useContext(mt),h=f!=null&&fr(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Ge(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,S=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,T;T=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return b.createElement(Yn,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});Xn.displayName=`NavLink`;var Zn=b.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=cn,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=b.useContext(mt),g=ar(),_=or(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&Jn.test(s);return b.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?b.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});Zn.displayName=`Form`;function Qn({getKey:e,storageKey:t,...n}){let r=b.useContext(Ln),{basename:i}=b.useContext(mt),a=Tt(),o=Yt();ur({getKey:e,storageKey:t});let s=b.useMemo(()=>{if(!r||!e)return null;let t=lr(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return b.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${Cn(JSON.stringify(t||sr))}, ${Cn(JSON.stringify(s))})`}})}Qn.displayName=`ScrollRestoration`;function $n(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function er(e){let t=b.useContext(ct);return N(t,$n(e)),t}function tr(e){let t=b.useContext(lt);return N(t,$n(e)),t}function nr(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=Ot(),d=Tt(),f=Mt(e,{relative:o});return b.useCallback(p=>{if(hn(p,t)){p.preventDefault();let t=n===void 0?Se(d)===Se(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?b.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var rr=0,ir=()=>`__${String(++rr)}__`;function ar(){let{router:e}=er(`useSubmit`),{basename:t}=b.useContext(mt),n=qt(),r=e.fetch,i=e.navigate;return b.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=bn(e,t);a.navigate===!1?await r(a.fetcherKey||ir(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function or(e,{relative:t}={}){let{basename:n}=b.useContext(mt),r=b.useContext(gt);N(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...Mt(e||`.`,{relative:t})},o=Tt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:$e([n,a.pathname])),Se(a)}var sr=`react-router-scroll-positions`,cr={};function lr(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Ge(e.pathname,n)||e.pathname},t)),i??=e.key,i}function ur({getKey:e,storageKey:t}={}){let{router:n}=er(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=tr(`useScrollRestoration`),{basename:a}=b.useContext(mt),o=Tt(),s=Yt(),c=Jt();b.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),dr(b.useCallback(()=>{if(c.state===`idle`){let t=lr(o,s,a,e);cr[t]=window.scrollY}try{sessionStorage.setItem(t||sr,JSON.stringify(cr))}catch(e){ve(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(b.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||sr);e&&(cr=JSON.parse(e))}catch{}},[t]),b.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(cr,()=>window.scrollY,e?(t,n)=>lr(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),b.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{ve(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function dr(e,t){let{capture:n}=t||{};b.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function fr(e,{relative:t}={}){let n=b.useContext(dt);N(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=er(`useViewTransitionState`),i=Mt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Ge(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ge(n.nextLocation.pathname,r)||n.nextLocation.pathname;return He(i.pathname,o)!=null||He(i.pathname,a)!=null}function pr(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var mr=typeof Symbol==`function`&&Symbol.observable||`@@observable`,hr=()=>Math.random().toString(36).substring(7).split(``).join(`.`),gr={INIT:`@@redux/INIT${hr()}`,REPLACE:`@@redux/REPLACE${hr()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${hr()}`};function _r(e){if(typeof e!=`object`||!e)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function vr(e,t,n){if(typeof e!=`function`)throw Error(pr(2));if(typeof t==`function`&&typeof n==`function`||typeof n==`function`&&typeof arguments[3]==`function`)throw Error(pr(0));if(typeof t==`function`&&n===void 0&&(n=t,t=void 0),n!==void 0){if(typeof n!=`function`)throw Error(pr(1));return n(vr)(e,t)}let r=e,i=t,a=new Map,o=a,s=0,c=!1;function l(){o===a&&(o=new Map,a.forEach((e,t)=>{o.set(t,e)}))}function u(){if(c)throw Error(pr(3));return i}function d(e){if(typeof e!=`function`)throw Error(pr(4));if(c)throw Error(pr(5));let t=!0;l();let n=s++;return o.set(n,e),function(){if(t){if(c)throw Error(pr(6));t=!1,l(),o.delete(n),a=null}}}function f(e){if(!_r(e))throw Error(pr(7));if(e.type===void 0)throw Error(pr(8));if(typeof e.type!=`string`)throw Error(pr(17));if(c)throw Error(pr(9));try{c=!0,i=r(i,e)}finally{c=!1}return(a=o).forEach(e=>{e()}),e}function p(e){if(typeof e!=`function`)throw Error(pr(10));r=e,f({type:gr.REPLACE})}function m(){let e=d;return{subscribe(t){if(typeof t!=`object`||!t)throw Error(pr(11));function n(){let e=t;e.next&&e.next(u())}return n(),{unsubscribe:e(n)}},[mr](){return this}}}return f({type:gr.INIT}),{dispatch:f,subscribe:d,getState:u,replaceReducer:p,[mr]:m}}function yr(e){Object.keys(e).forEach(t=>{let n=e[t];if(n(void 0,{type:gr.INIT})===void 0)throw Error(pr(12));if(n(void 0,{type:gr.PROBE_UNKNOWN_ACTION()})===void 0)throw Error(pr(13))})}function br(e){let t=Object.keys(e),n={};for(let r=0;r<t.length;r++){let i=t[r];typeof e[i]==`function`&&(n[i]=e[i])}let r=Object.keys(n),i;try{yr(n)}catch(e){i=e}return function(e={},t){if(i)throw i;let a=!1,o={};for(let i=0;i<r.length;i++){let s=r[i],c=n[s],l=e[s],u=c(l,t);if(u===void 0)throw t&&t.type,Error(pr(14));o[s]=u,a||=u!==l}return a||=r.length!==Object.keys(e).length,a?o:e}}function xr(...e){return e.length===0?e=>e:e.length===1?e[0]:e.reduce((e,t)=>(...n)=>e(t(...n)))}function Sr(...e){return t=>(n,r)=>{let i=t(n,r),a=()=>{throw Error(pr(15))},o={getState:i.getState,dispatch:(e,...t)=>a(e,...t)};return a=xr(...e.map(e=>e(o)))(i.dispatch),{...i,dispatch:a}}}function Cr(e){return _r(e)&&`type`in e&&typeof e.type==`string`}var wr=Symbol.for(`immer-nothing`),Tr=Symbol.for(`immer-draftable`),Er=Symbol.for(`immer-state`);function Dr(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Or=Object,kr=Or.getPrototypeOf,Ar=`constructor`,jr=`prototype`,Mr=`configurable`,Nr=`enumerable`,Pr=`writable`,Fr=`value`,Ir=e=>!!e&&!!e[Er];function Lr(e){return e?Br(e)||qr(e)||!!e[Tr]||!!e[Ar]?.[Tr]||Jr(e)||Yr(e):!1}var Rr=Or[jr][Ar].toString(),zr=new WeakMap;function Br(e){if(!e||!Xr(e))return!1;let t=kr(e);if(t===null||t===Or[jr])return!0;let n=Or.hasOwnProperty.call(t,Ar)&&t[Ar];if(n===Object)return!0;if(!Zr(n))return!1;let r=zr.get(n);return r===void 0&&(r=Function.toString.call(n),zr.set(n,r)),r===Rr}function Vr(e,t,n=!0){Hr(e)===0?(n?Reflect.ownKeys(e):Or.keys(e)).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function Hr(e){let t=e[Er];return t?t.type_:qr(e)?1:Jr(e)?2:Yr(e)?3:0}var Ur=(e,t,n=Hr(e))=>n===2?e.has(t):Or[jr].hasOwnProperty.call(e,t),Wr=(e,t,n=Hr(e))=>n===2?e.get(t):e[t],Gr=(e,t,n,r=Hr(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function Kr(e,t){return e===t?e!==0||1/e==1/t:e!==e&&t!==t}var qr=Array.isArray,Jr=e=>e instanceof Map,Yr=e=>e instanceof Set,Xr=e=>typeof e==`object`,Zr=e=>typeof e==`function`,Qr=e=>typeof e==`boolean`;function $r(e){let t=+e;return Number.isInteger(t)&&String(t)===e}var ei=e=>e.copy_||e.base_,ti=e=>e.modified_?e.copy_:e.base_;function ni(e,t){if(Jr(e))return new Map(e);if(Yr(e))return new Set(e);if(qr(e))return Array[jr].slice.call(e);let n=Br(e);if(t===!0||t===`class_only`&&!n){let t=Or.getOwnPropertyDescriptors(e);delete t[Er];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){let i=n[r],a=t[i];a[Pr]===!1&&(a[Pr]=!0,a[Mr]=!0),(a.get||a.set)&&(t[i]={[Mr]:!0,[Pr]:!0,[Nr]:a[Nr],[Fr]:e[i]})}return Or.create(kr(e),t)}else{let t=kr(e);if(t!==null&&n)return{...e};let r=Or.create(t);return Or.assign(r,e)}}function ri(e,t=!1){return oi(e)||Ir(e)||!Lr(e)?e:(Hr(e)>1&&Or.defineProperties(e,{set:ai,add:ai,clear:ai,delete:ai}),Or.freeze(e),t&&Vr(e,(e,t)=>{ri(t,!0)},!1),e)}function ii(){Dr(2)}var ai={[Fr]:ii};function oi(e){return e===null||!Xr(e)?!0:Or.isFrozen(e)}var si=`MapSet`,ci=`Patches`,li=`ArrayMethods`,ui={};function di(e){let t=ui[e];return t||Dr(0,e),t}var fi=e=>!!ui[e],pi,mi=()=>pi,hi=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:fi(si)?di(si):void 0,arrayMethodsPlugin_:fi(li)?di(li):void 0});function gi(e,t){t&&(e.patchPlugin_=di(ci),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function _i(e){vi(e),e.drafts_.forEach(bi),e.drafts_=null}function vi(e){e===pi&&(pi=e.parent_)}var yi=e=>pi=hi(pi,e);function bi(e){let t=e[Er];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function xi(e,t){t.unfinalizedDrafts_=t.drafts_.length;let n=t.drafts_[0];if(e!==void 0&&e!==n){n[Er].modified_&&(_i(t),Dr(4)),Lr(e)&&(e=Si(t,e));let{patchPlugin_:r}=t;r&&r.generateReplacementPatches_(n[Er].base_,e,t)}else e=Si(t,n);return Ci(t,e,!0),_i(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e===wr?void 0:e}function Si(e,t){if(oi(t))return t;let n=t[Er];if(!n)return ji(t,e.handledSet_,e);if(!Ti(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){let{callbacks_:t}=n;if(t)for(;t.length>0;)t.pop()(e);ki(n,e)}return n.copy_}function Ci(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ri(t,n)}function wi(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var Ti=(e,t)=>e.scope_===t,Ei=[];function Di(e,t,n,r){let i=ei(e),a=e.type_;if(r!==void 0&&Wr(i,r,a)===t){Gr(i,r,n,a);return}if(!e.draftLocations_){let t=e.draftLocations_=new Map;Vr(i,(e,n)=>{if(Ir(n)){let r=t.get(n)||[];r.push(e),t.set(n,r)}})}let o=e.draftLocations_.get(t)??Ei;for(let e of o)Gr(i,e,n,a)}function Oi(e,t,n){e.callbacks_.push(function(r){let i=t;if(!i||!Ti(i,r))return;r.mapSetPlugin_?.fixSetContents(i);let a=ti(i);Di(e,i.draft_??i,a,n),ki(i,r)})}function ki(e,t){if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(e.assigned_?.size??0)>0)){let{patchPlugin_:n}=t;if(n){let r=n.getPath(e);r&&n.generatePatches_(e,r,t)}wi(e)}}function Ai(e,t,n){let{scope_:r}=e;if(Ir(n)){let i=n[Er];Ti(i,r)&&i.callbacks_.push(function(){zi(e),Di(e,n,ti(i),t)})}else Lr(n)&&e.callbacks_.push(function(){let i=ei(e);e.type_===3?i.has(n)&&ji(n,r.handledSet_,r):Wr(i,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&ji(Wr(e.copy_,t,e.type_),r.handledSet_,r)})}function ji(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Ir(e)||t.has(e)||!Lr(e)||oi(e)?e:(t.add(e),Vr(e,(r,i)=>{if(Ir(i)){let t=i[Er];Ti(t,n)&&(Gr(e,r,ti(t),e.type_),wi(t))}else Lr(i)&&ji(i,t,n)}),e)}function Mi(e,t){let n=qr(e),r={type_:n?1:0,scope_:t?t.scope_:mi(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0},i=r,a=Ni;n&&(i=[r],a=Pi);let{revoke:o,proxy:s}=Proxy.revocable(i,a);return r.draft_=s,r.revoke_=o,[s,r]}var Ni={get(e,t){if(t===Er)return e;let n=e.scope_.arrayMethodsPlugin_,r=e.type_===1&&typeof t==`string`;if(r&&n?.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);let i=ei(e);if(!Ur(i,t,e.type_))return Ii(e,i,t);let a=i[t];if(e.finalized_||!Lr(a)||r&&e.operationMethod&&n?.isMutatingArrayMethod(e.operationMethod)&&$r(t))return a;if(a===Fi(e.base_,t)){zi(e);let n=e.type_===1?+t:t,r=Vi(e.scope_,a,e,n);return e.copy_[n]=r}return a},has(e,t){return t in ei(e)},ownKeys(e){return Reflect.ownKeys(ei(e))},set(e,t,n){let r=Li(ei(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){let r=Fi(ei(e),t),i=r?.[Er];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(Kr(n,r)&&(n!==void 0||Ur(e.base_,t,e.type_)))return!0;zi(e),Ri(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])?!0:(e.copy_[t]=n,e.assigned_.set(t,!0),Ai(e,t,n),!0)},deleteProperty(e,t){return zi(e),Fi(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),Ri(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){let n=ei(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[Pr]:!0,[Mr]:e.type_!==1||t!==`length`,[Nr]:r[Nr],[Fr]:n[t]}},defineProperty(){Dr(11)},getPrototypeOf(e){return kr(e.base_)},setPrototypeOf(){Dr(12)}},Pi={};for(let e in Ni){let t=Ni[e];Pi[e]=function(){let e=arguments;return e[0]=e[0][0],t.apply(this,e)}}Pi.deleteProperty=function(e,t){return Pi.set.call(this,e,t,void 0)},Pi.set=function(e,t,n){return Ni.set.call(this,e[0],t,n,e[0])};function Fi(e,t){let n=e[Er];return(n?ei(n):e)[t]}function Ii(e,t,n){let r=Li(t,n);return r?Fr in r?r[Fr]:r.get?.call(e.draft_):void 0}function Li(e,t){if(!(t in e))return;let n=kr(e);for(;n;){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=kr(n)}}function Ri(e){e.modified_||(e.modified_=!0,e.parent_&&Ri(e.parent_))}function zi(e){e.copy_||=(e.assigned_=new Map,ni(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Bi=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(e,t,n)=>{if(Zr(e)&&!Zr(t)){let n=t;t=e;let r=this;return function(e=n,...i){return r.produce(e,e=>t.call(this,e,...i))}}Zr(t)||Dr(6),n!==void 0&&!Zr(n)&&Dr(7);let r;if(Lr(e)){let i=yi(this),a=Vi(i,e,void 0),o=!0;try{r=t(a),o=!1}finally{o?_i(i):vi(i)}return gi(i,n),xi(r,i)}else if(!e||!Xr(e)){if(r=t(e),r===void 0&&(r=e),r===wr&&(r=void 0),this.autoFreeze_&&ri(r,!0),n){let t=[],i=[];di(ci).generateReplacementPatches_(e,r,{patches_:t,inversePatches_:i}),n(t,i)}return r}else Dr(1,e)},this.produceWithPatches=(e,t)=>{if(Zr(e))return(t,...n)=>this.produceWithPatches(t,t=>e(t,...n));let n,r;return[this.produce(e,t,(e,t)=>{n=e,r=t}),n,r]},Qr(e?.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),Qr(e?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),Qr(e?.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){Lr(e)||Dr(8),Ir(e)&&(e=Hi(e));let t=yi(this),n=Vi(t,e,void 0);return n[Er].isManual_=!0,vi(t),n}finishDraft(e,t){let n=e&&e[Er];(!n||!n.isManual_)&&Dr(9);let{scope_:r}=n;return gi(r,t),xi(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){let r=t[n];if(r.path.length===0&&r.op===`replace`){e=r.value;break}}n>-1&&(t=t.slice(n+1));let r=di(ci).applyPatches_;return Ir(e)?r(e,t):this.produce(e,e=>r(e,t))}};function Vi(e,t,n,r){let[i,a]=Jr(t)?di(si).proxyMap_(t,n):Yr(t)?di(si).proxySet_(t,n):Mi(t,n);return(n?.scope_??mi()).drafts_.push(i),a.callbacks_=n?.callbacks_??[],a.key_=r,n&&r!==void 0?Oi(n,a,r):a.callbacks_.push(function(e){e.mapSetPlugin_?.fixSetContents(a);let{patchPlugin_:t}=e;a.modified_&&t&&t.generatePatches_(a,[],e)}),i}function Hi(e){return Ir(e)||Dr(10,e),Ui(e)}function Ui(e){if(!Lr(e)||oi(e))return e;let t=e[Er],n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=ni(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=ni(e,!0);return Vr(n,(e,t)=>{Gr(n,e,Ui(t))},r),t&&(t.finalized_=!1),n}var Wi=new Bi().produce;function Gi(e){return({dispatch:t,getState:n})=>r=>i=>typeof i==`function`?i(t,n,e):r(i)}var Ki=Gi(),qi=Gi,Ji=typeof window<`u`&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]==`object`?xr:xr.apply(null,arguments)};typeof window<`u`&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var Yi=e=>e&&typeof e.match==`function`;function Xi(e,t){function n(...n){if(t){let r=t(...n);if(!r)throw Error(za(0));return{type:e,payload:r.payload,...`meta`in r&&{meta:r.meta},...`error`in r&&{error:r.error}}}return{type:e,payload:n[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=t=>Cr(t)&&t.type===e,n}var Zi=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function Qi(e){return Lr(e)?Wi(e,()=>{}):e}function $i(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function ea(e){return typeof e==`boolean`}var ta=()=>function(e){let{thunk:t=!0,immutableCheck:n=!0,serializableCheck:r=!0,actionCreatorCheck:i=!0}=e??{},a=new Zi;return t&&(ea(t)?a.push(Ki):a.push(qi(t.extraArgument))),a},na=`RTK_autoBatch`,ra=e=>t=>{setTimeout(t,e)},ia=(e={type:`raf`})=>t=>(...n)=>{let r=t(...n),i=!0,a=!1,o=!1,s=new Set,c=e.type===`tick`?queueMicrotask:e.type===`raf`?typeof window<`u`&&window.requestAnimationFrame?window.requestAnimationFrame:ra(10):e.type===`callback`?e.queueNotification:ra(e.timeout),l=()=>{o=!1,a&&(a=!1,s.forEach(e=>e()))};return Object.assign({},r,{subscribe(e){let t=r.subscribe(()=>i&&e());return s.add(e),()=>{t(),s.delete(e)}},dispatch(e){try{return i=!e?.meta?.[na],a=!i,a&&(o||(o=!0,c(l))),r.dispatch(e)}finally{i=!0}}})},aa=e=>function(t){let{autoBatch:n=!0}=t??{},r=new Zi(e);return n&&r.push(ia(typeof n==`object`?n:void 0)),r};function oa(e){let t=ta(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:a=!0,preloadedState:o=void 0,enhancers:s=void 0}=e||{},c;if(typeof n==`function`)c=n;else if(_r(n))c=br(n);else throw Error(za(1));let l;l=typeof r==`function`?r(t):t();let u=xr;i&&(u=Ji({trace:!1,...typeof i==`object`&&i}));let d=aa(Sr(...l)),f=typeof s==`function`?s(d):d(),p=u(...f);return vr(c,o,p)}function sa(e){let t={},n=[],r,i={addCase(e,n){let r=typeof e==`string`?e:e.type;if(!r)throw Error(za(28));if(r in t)throw Error(za(29));return t[r]=n,i},addAsyncThunk(e,r){return r.pending&&(t[e.pending.type]=r.pending),r.rejected&&(t[e.rejected.type]=r.rejected),r.fulfilled&&(t[e.fulfilled.type]=r.fulfilled),r.settled&&n.push({matcher:e.settled,reducer:r.settled}),i},addMatcher(e,t){return n.push({matcher:e,reducer:t}),i},addDefaultCase(e){return r=e,i}};return e(i),[t,n,r]}function ca(e){return typeof e==`function`}function la(e,t){let[n,r,i]=sa(t),a;if(ca(e))a=()=>Qi(e());else{let t=Qi(e);a=()=>t}function o(e=a(),t){let o=[n[t.type],...r.filter(({matcher:e})=>e(t)).map(({reducer:e})=>e)];return o.filter(e=>!!e).length===0&&(o=[i]),o.reduce((e,n)=>{if(n)if(Ir(e)){let r=n(e,t);return r===void 0?e:r}else if(Lr(e))return Wi(e,e=>n(e,t));else{let r=n(e,t);if(r===void 0){if(e===null)return e;throw Error(`A case reducer on a non-draftable value must not return undefined`)}return r}return e},e)}return o.getInitialState=a,o}var ua=(e,t)=>Yi(e)?e.match(t):e(t);function da(...e){return t=>e.some(e=>ua(e,t))}var fa=`ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW`,pa=(e=21)=>{let t=``,n=e;for(;n--;)t+=fa[Math.random()*64|0];return t},ma=[`name`,`message`,`stack`,`code`],ha=class{constructor(e,t){this.payload=e,this.meta=t}_type},ga=class{constructor(e,t){this.payload=e,this.meta=t}_type},_a=e=>{if(typeof e==`object`&&e){let t={};for(let n of ma)typeof e[n]==`string`&&(t[n]=e[n]);return t}return{message:String(e)}},va=`External signal was aborted`;(()=>{function e(e,t,n){let r=Xi(e+`/fulfilled`,(e,t,n,r)=>({payload:e,meta:{...r||{},arg:n,requestId:t,requestStatus:`fulfilled`}})),i=Xi(e+`/pending`,(e,t,n)=>({payload:void 0,meta:{...n||{},arg:t,requestId:e,requestStatus:`pending`}})),a=Xi(e+`/rejected`,(e,t,r,i,a)=>({payload:i,error:(n&&n.serializeError||_a)(e||`Rejected`),meta:{...a||{},arg:r,requestId:t,rejectedWithValue:!!i,requestStatus:`rejected`,aborted:e?.name===`AbortError`,condition:e?.name===`ConditionError`}}));function o(e,{signal:o}={}){return(s,c,l)=>{let u=n?.idGenerator?n.idGenerator(e):pa(),d=new AbortController,f,p;function m(e){p=e,d.abort()}o&&(o.aborted?m(va):o.addEventListener(`abort`,()=>m(va),{once:!0}));let h=async function(){let o;try{let a=n?.condition?.(e,{getState:c,extra:l});if(ba(a)&&(a=await a),a===!1||d.signal.aborted)throw{name:`ConditionError`,message:`Aborted due to condition callback returning false.`};let h=new Promise((e,t)=>{f=()=>{t({name:`AbortError`,message:p||`Aborted`})},d.signal.addEventListener(`abort`,f,{once:!0})});s(i(u,e,n?.getPendingMeta?.({requestId:u,arg:e},{getState:c,extra:l}))),o=await Promise.race([h,Promise.resolve(t(e,{dispatch:s,getState:c,extra:l,requestId:u,signal:d.signal,abort:m,rejectWithValue:(e,t)=>new ha(e,t),fulfillWithValue:(e,t)=>new ga(e,t)})).then(t=>{if(t instanceof ha)throw t;return t instanceof ga?r(t.payload,u,e,t.meta):r(t,u,e)})])}catch(t){o=t instanceof ha?a(null,u,e,t.payload,t.meta):a(t,u,e)}finally{f&&d.signal.removeEventListener(`abort`,f)}return n&&!n.dispatchConditionRejection&&a.match(o)&&o.meta.condition||s(o),o}();return Object.assign(h,{abort:m,requestId:u,arg:e,unwrap(){return h.then(ya)}})}}return Object.assign(o,{pending:i,rejected:a,fulfilled:r,settled:da(a,r),typePrefix:e})}return e.withTypes=()=>e,e})();function ya(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function ba(e){return typeof e==`object`&&!!e&&typeof e.then==`function`}var xa=Symbol.for(`rtk-slice-createasyncthunk`);function Sa(e,t){return`${e}/${t}`}function Ca({creators:e}={}){let t=e?.asyncThunk?.[xa];return function(e){let{name:n,reducerPath:r=n}=e;if(!n)throw Error(za(11));let i=(typeof e.reducers==`function`?e.reducers(Ea()):e.reducers)||{},a=Object.keys(i),o={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},s={addCase(e,t){let n=typeof e==`string`?e:e.type;if(!n)throw Error(za(12));if(n in o.sliceCaseReducersByType)throw Error(za(13));return o.sliceCaseReducersByType[n]=t,s},addMatcher(e,t){return o.sliceMatchers.push({matcher:e,reducer:t}),s},exposeAction(e,t){return o.actionCreators[e]=t,s},exposeCaseReducer(e,t){return o.sliceCaseReducersByName[e]=t,s}};a.forEach(r=>{let a=i[r],o={reducerName:r,type:Sa(n,r),createNotation:typeof e.reducers==`function`};Oa(a)?Aa(o,a,s,t):Da(o,a,s)});function c(){let[t={},n=[],r=void 0]=typeof e.extraReducers==`function`?sa(e.extraReducers):[e.extraReducers],i={...t,...o.sliceCaseReducersByType};return la(e.initialState,e=>{for(let t in i)e.addCase(t,i[t]);for(let t of o.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of n)e.addMatcher(t.matcher,t.reducer);r&&e.addDefaultCase(r)})}let l=e=>e,u=new Map,d=new WeakMap,f;function p(e,t){return f||=c(),f(e,t)}function m(){return f||=c(),f.getInitialState()}function h(t,n=!1){function r(e){let i=e[t];return i===void 0&&n&&(i=$i(d,r,m)),i}function i(t=l){return $i($i(u,n,()=>new WeakMap),t,()=>{let r={};for(let[i,a]of Object.entries(e.selectors??{}))r[i]=wa(a,t,()=>$i(d,t,m),n);return r})}return{reducerPath:t,getSelectors:i,get selectors(){return i(r)},selectSlice:r}}let g={name:n,reducer:p,actions:o.actionCreators,caseReducers:o.sliceCaseReducersByName,getInitialState:m,...h(r),injectInto(e,{reducerPath:t,...n}={}){let i=t??r;return e.inject({reducerPath:i,reducer:p},n),{...g,...h(i,!0)}}};return g}}function wa(e,t,n,r){function i(i,...a){let o=t(i);return o===void 0&&r&&(o=n()),e(o,...a)}return i.unwrapped=e,i}var Ta=Ca();function Ea(){function e(e,t){return{_reducerDefinitionType:`asyncThunk`,payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer(e){return Object.assign({[e.name](...t){return e(...t)}}[e.name],{_reducerDefinitionType:`reducer`})},preparedReducer(e,t){return{_reducerDefinitionType:`reducerWithPrepare`,prepare:e,reducer:t}},asyncThunk:e}}function Da({type:e,reducerName:t,createNotation:n},r,i){let a,o;if(`reducer`in r){if(n&&!ka(r))throw Error(za(17));a=r.reducer,o=r.prepare}else a=r;i.addCase(e,a).exposeCaseReducer(t,a).exposeAction(t,o?Xi(e,o):Xi(e))}function Oa(e){return e._reducerDefinitionType===`asyncThunk`}function ka(e){return e._reducerDefinitionType===`reducerWithPrepare`}function Aa({type:e,reducerName:t},n,r,i){if(!i)throw Error(za(18));let{payloadCreator:a,fulfilled:o,pending:s,rejected:c,settled:l,options:u}=n,d=i(e,a,u);r.exposeAction(t,d),o&&r.addCase(d.fulfilled,o),s&&r.addCase(d.pending,s),c&&r.addCase(d.rejected,c),l&&r.addMatcher(d.settled,l),r.exposeCaseReducer(t,{fulfilled:o||ja,pending:s||ja,rejected:c||ja,settled:l||ja})}function ja(){}var Ma=`listener`,Na=`completed`,Pa=`cancelled`;`${Pa}`,`${Na}`,`${Ma}${Pa}`,`${Ma}${Na}`;var{assign:Fa}=Object,Ia=`listenerMiddleware`,La=Fa(Xi(`${Ia}/add`),{withTypes:()=>La});Xi(`${Ia}/removeAll`);var Ra=Fa(Xi(`${Ia}/remove`),{withTypes:()=>Ra});function za(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}function Ba(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function Va(e){let t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),n=t.getDay(),r=n===0?-6:1-n;return t.setDate(t.getDate()+r),Ba(t)}function Ha(e){let[t,n,r]=e.split(`-`).map(Number);return new Date(t,n-1,r,12,0,0,0)}function Ua(e){let t=Ha(e.weekStartKey);return Ba(new Date(t.getFullYear(),t.getMonth(),t.getDate()+e.dayOfWeek))}function Wa(e,t){let n=Ha(e);return n.setDate(n.getDate()+t*7),Ba(n)}function Ga(e,t){let n=Ha(e).getTime(),r=Ha(t).getTime();return Math.round((r-n)/(10080*60*1e3))}function Ka(e){return e%2==1?`нечётная`:`чётная`}function qa(e,t){return Ga(t,e)+1}function Ja(e,t){return Ka(qa(e,t))===`нечётная`?`Нечётная`:`Чёрная`}var Ya=Va(new Date),Xa=[{id:`1`,name:`Демидчик В.И.`,fullNameOfficial:`Демидчик Валерий Иосифович`,position:`доцент, к.т.н.`,rate:1,plannedHoursSpring:592.9},{id:`2`,name:`Беленькая С.С.`,fullNameOfficial:`Беленькая Светлана Сергеевна`,position:`старший преподаватель`,rate:1,plannedHoursSpring:198},{id:`3`,name:`Курило В.С.`,fullNameOfficial:`Курило Владимир Степанович`,position:`старший преподаватель`,rate:1,plannedHoursSpring:51.2},{id:`4`,name:`Полещук Н.Н.`,fullNameOfficial:`Полещук Наталья Николаевна`,position:`старший преподаватель`,rate:1,plannedHoursSpring:715.6},{id:`5`,name:`Максимович Е.С.`,fullNameOfficial:`Максимович Елена Степановна`,position:`зав. кафедрой, к.т.н., доцент`,rate:1,plannedHoursSpring:54.5},{id:`6`,name:`Малый С.В.`,fullNameOfficial:`Малый Сергей Владимирович`,position:`доцент, к.ф.-м.н.`,rate:.5,plannedHoursSpring:81.6},{id:`7`,name:`Мигель А.С.`,fullNameOfficial:`Мигель Антон Сергеевич`,position:`старший преподаватель`,rate:1,plannedHoursSpring:439.1},{id:`8`,name:`Хейдоров И.Э.`,fullNameOfficial:`Хейдоров Игорь Эдуардович`,position:`доцент, к.ф.-м.н.`,rate:1,plannedHoursSpring:77.1},{id:`9`,name:`Черепанова Ю.В.`,fullNameOfficial:`Черепанова Юлия Витальевна`,position:`ассистент, внешний совместитель`,rate:.5,plannedHoursSpring:371.8},{id:`10`,name:`Болотько Т.П.`,fullNameOfficial:`Болотько Тимофей Павлович`,position:`преподаватель-стажёр, внешний совместитель`,rate:.5,plannedHoursSpring:167},{id:`11`,name:`Гринько С.С.`,fullNameOfficial:`Гринько С.С.`,position:`преподаватель`,rate:1},{id:`12`,name:`Романов А.Ф.`,fullNameOfficial:`Романов Анатолий Филипович`,position:`доцент, к.т.н., внешний совместитель`,rate:.5,plannedHoursSpring:155.68},{id:`13`,name:`Демьянюк Д.В.`,fullNameOfficial:`Демьянюк Дмитрий Валентинович`,position:`старший преподаватель, внешний совместитель`,rate:.5,plannedHoursSpring:165.5},{id:`15`,name:`Лектор ЦОС (деканат)`,fullNameOfficial:`Лекции по ЦОС — по основному расписанию`}],Za=[{id:`1`,name:`Прикладная электродинамика (ПЭД)`},{id:`2`,name:`Статистическая радиофизика и теория информации (СРиТИ)`},{id:`3`,name:`Цифровая обработка сигналов (ЦОС)`},{id:`4`,name:`Теория колебаний и волн (ТКиВ)`},{id:`5`,name:`Обеспечение связи в системах Интернета вещей (ОСвСИВ)`},{id:`6`,name:`Кураторский час`},{id:`7`,name:`Учебная практика «Аналоговая и цифровая схемотехника»`},{id:`8`,name:`Компьютерное моделирование электродинамических процессов и систем (КМЭДПиС)`},{id:`9`,name:`Микроволновые системы и технологии (МСиТ)`},{id:`10`,name:`Направленные антенные системы с заданными параметрами (НАСЗП)`},{id:`11`,name:`Разработка веб-приложений и сервисов (РВПиС)`}],Qa=[{id:`au-119`,name:`ауд. 119`,compact:!1,hasProjector:!0,hasInteractiveBoard:!0},{id:`au-115`,name:`ауд. 115`,compact:!1,hasProjector:!0,hasInteractiveBoard:!0},{id:`au-117`,name:`ауд. 117`,compact:!1,hasProjector:!0,hasInteractiveBoard:!0},{id:`au-56`,name:`ауд. 56`,compact:!1,hasProjector:!0,hasInteractiveBoard:!1},{id:`au-45`,name:`ауд. 45 (лаб.)`,compact:!0,hasProjector:!1,hasInteractiveBoard:!1},{id:`au-42`,name:`ауд. 42 (лаб. ЦОС)`,compact:!1,hasProjector:!0,hasInteractiveBoard:!1},{id:`au-44`,name:`ауд. 44 (лаб.)`,compact:!1,hasProjector:!0,hasInteractiveBoard:!1},{id:`au-46`,name:`ауд. 46 (лаб.)`,compact:!0,hasProjector:!1,hasInteractiveBoard:!1},{id:`au-49`,name:`ауд. 49`,compact:!1,hasProjector:!0,hasInteractiveBoard:!1},{id:`au-25`,name:`ауд. 25`,compact:!1,hasProjector:!0,hasInteractiveBoard:!0},{id:`au-41`,name:`ауд. 41`,compact:!1,hasProjector:!0,hasInteractiveBoard:!1},{id:`au-24`,name:`ауд. 24`,compact:!1,hasProjector:!1,hasInteractiveBoard:!1}],$a=[{id:`g2-1rf`,name:`1РФ`,course:2},{id:`g2-2rf`,name:`2РФ`,course:2},{id:`g3-1rf`,name:`1РФ`,course:3},{id:`g3-2rf`,name:`2РФ`,course:3},{id:`g3-3rf`,name:`3РФ`,course:3},{id:`g3-4rf`,name:`4РФ`,course:3},{id:`g3-8rf`,name:`8РФ`,course:3},{id:`g3-601kb`,name:`601КБ`,course:3},{id:`g3-602kb`,name:`602КБ`,course:3},{id:`g6-mag-mat`,name:`Магистратура`,course:6},{id:`g6-mag-nas`,name:`Магистратура · аэрокосмические технологии`,course:6}],eo=[...new Set($a.map(e=>e.course))].sort((e,t)=>e-t),to=[{email:`student@uni`,password:`student`,role:`student`,groupId:`g3-1rf`},{email:`teacher@uni`,password:`teacher`,role:`teacher`,teacherId:`1`},{email:`admin@uni`,password:`admin`,role:`administrator`}],no=Ya;function P(e,t,n,r,i,a,o,s,c){return{id:e,subjectId:t,teacherId:n,auditoriumId:r,groupId:i,type:a,dayOfWeek:o,timeSlot:s,weekStartKey:no,extraInfo:c}}var ro=[P(`1001`,`3`,`4`,`au-42`,`g3-2rf`,`laboratory`,0,0,`Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.`),P(`1002`,`3`,`4`,`au-42`,`g3-4rf`,`laboratory`,0,2,`Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.`),P(`1003`,`2`,`7`,`au-115`,`g3-1rf`,`lecture`,1,0,`Поток: специальности 1РФ, 2РФ, 3РФ, 4РФ, 8РФ.`),P(`1004`,`2`,`9`,`au-49`,`g3-3rf`,`laboratory`,0,0,`Нечётная неделя: 3-я подгруппа.`),P(`1005`,`2`,`9`,`au-49`,`g3-4rf`,`laboratory`,0,2,`Нечётная неделя: 3-я подгруппа.`),P(`1006`,`2`,`9`,`au-49`,`g3-4rf`,`laboratory`,1,2,`Нечётная неделя: 3-я подгруппа.`),P(`1007`,`3`,`4`,`au-42`,`g3-1rf`,`laboratory`,1,2,`Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.`),P(`1008`,`1`,`1`,`au-45`,`g3-602kb`,`laboratory`,1,0,`Чётная неделя: 1-я подгруппа. Нечётная неделя: 2-я подгруппа.`),P(`1051`,`1`,`2`,`au-45`,`g3-602kb`,`laboratory`,1,4,`Чётная неделя: поток 602КБ, 3-я подгруппа. Нечётная неделя: поток 3РФ, 3-я подгруппа. Совместно с Демидчиком В.И.`),P(`1009`,`5`,`3`,`au-44`,`g3-1rf`,`laboratory`,1,2,`3-я подгруппа.`),P(`1010`,`4`,`2`,`au-46`,`g3-1rf`,`laboratory`,1,2,`Нечётная неделя: 3-я подгруппа.`),P(`1011`,`7`,`10`,`au-49`,`g2-2rf`,`laboratory`,0,3,`1-я подгруппа.`),P(`1012`,`2`,`7`,`au-117`,`g3-1rf`,`lecture`,3,0,`Поток: 1–4, 8 радиофизические специальности. Период лекций: 14.02–21.03.`),P(`1013`,`3`,`4`,`au-42`,`g3-2rf`,`laboratory`,2,0,`Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа. По графику кафедры — уточнять совмещение с Демьянюком Д.В.`),P(`1014`,`3`,`4`,`au-42`,`g3-3rf`,`laboratory`,2,2,`Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.`),P(`1015`,`2`,`11`,`au-56`,`g3-3rf`,`laboratory`,2,0,`Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.`),P(`1016`,`2`,`9`,`au-49`,`g3-8rf`,`laboratory`,2,2,`Нечётная неделя: 3-я подгруппа.`),P(`1017`,`4`,`2`,`au-24`,`g3-1rf`,`lecture`,2,2,`Лекции. Поток 1РФ.`),P(`1018`,`1`,`1`,`au-45`,`g3-3rf`,`laboratory`,2,0,`Чётная неделя: 1-я подгруппа. Нечётная неделя: 2-я подгруппа.`),P(`1019`,`1`,`1`,`au-45`,`g3-8rf`,`laboratory`,2,2,`Чётная неделя: 1-я подгруппа. Нечётная неделя: 2-я подгруппа.`),P(`1020`,`8`,`12`,`au-49`,`g3-1rf`,`laboratory`,4,3,`Курсовой проект. По согласованию графика разнесено с лабораторной Малого А.В. на предыдущую пару.`),P(`1021`,`8`,`6`,`au-49`,`g3-1rf`,`laboratory`,4,2,`Чётная неделя: 1-я подгруппа. Нечётная неделя: 2-я подгруппа.`),P(`1022`,`5`,`3`,`au-41`,`g3-1rf`,`lecture`,3,3,`Лекции. Поток 1РФ.`),P(`1061`,`8`,`6`,`au-56`,`g3-1rf`,`laboratory`,4,5,`Нечётная неделя: 3-я подгруппа. Замена аудитории на 49 — по согласованию.`),P(`1023`,`8`,`6`,`au-25`,`g3-1rf`,`lecture`,3,2,`Лекции. Поток 1РФ.`),P(`1024`,`1`,`1`,`au-45`,`g3-601kb`,`laboratory`,3,0,`Чётная неделя: 1-я подгруппа. Нечётная неделя: 2-я подгруппа.`),P(`1025`,`1`,`1`,`au-45`,`g3-2rf`,`laboratory`,3,2,`Чётная неделя: 1-я подгруппа. Нечётная неделя: 2-я подгруппа.`),P(`1026`,`1`,`2`,`au-45`,`g3-601kb`,`laboratory`,3,4,`Чётная неделя: поток 601КБ, 3-я подгруппа. Нечётная неделя: поток 8РФ, 3-я подгруппа. Совместно с Демидчиком В.И.`),P(`1027`,`1`,`2`,`au-45`,`g3-1rf`,`laboratory`,0,4,`Чётная неделя: поток 1РФ, 3-я подгруппа. Нечётная неделя: поток 4РФ, 3-я подгруппа. Совместно с Демидчиком В.И.`),P(`1028`,`4`,`2`,`au-46`,`g3-1rf`,`laboratory`,4,4,`Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.`),P(`1030`,`9`,`5`,`au-41`,`g6-mag-mat`,`lecture`,1,2,`МСиТ, магистратура 7-06-0533-03 (МТМС), 9 студентов. Во вторник по парам: лекции 24.02–24.03 (3-я пара); лабораторная работа 31.03, 05.05–19.05 и лекции 07.04–14.04, 28.04 (4-я); лекции 24.02–24.03 и лабораторная работа 31.03–14.04, 28.04 (5-я); лабораторная работа 07.04–14.04, 28.04 (6-я). Пятница 3-я пара — отдельная строка расписания (лабораторная работа).`),P(`1062`,`9`,`5`,`au-41`,`g6-mag-mat`,`laboratory`,4,2,`Лабораторная работа, даты 27.03–24.04, 08.05. Магистратура 7-06-0533-03.`),P(`1031`,`10`,`5`,`au-41`,`g6-mag-nas`,`lecture`,1,4,`НАСЗП, магистратура 7-06-0533-09 (аэрокосмос), 5 студентов. Чередование по аудитории с потоком МСиТ. Лекции 24.02–14.04, 28.04; лабораторные работы 05.05–19.05.`),P(`1032`,`2`,`7`,`au-56`,`g3-1rf`,`laboratory`,0,2,`Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.`),P(`1033`,`2`,`7`,`au-56`,`g3-8rf`,`laboratory`,5,4,`Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.`),P(`1034`,`2`,`11`,`au-56`,`g3-1rf`,`laboratory`,4,2,`Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа. По расписанию — совместное занятие.`),P(`1035`,`2`,`7`,`au-56`,`g3-4rf`,`laboratory`,5,0,`Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.`),P(`1036`,`11`,`8`,`au-41`,`g3-1rf`,`laboratory`,5,3,`Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.`),P(`1050`,`11`,`8`,`au-41`,`g3-1rf`,`lecture`,5,1,`Лекции. Поток 1РФ.`),P(`1037`,`11`,`8`,`au-49`,`g3-1rf`,`laboratory`,4,5,`Нечётная неделя: 3-я подгруппа.`),P(`1039`,`6`,`2`,`au-56`,`g3-1rf`,`practice`,0,6,`Кураторский час. 3 курс, поток 1РФ.`),P(`1040`,`1`,`1`,`au-119`,`g3-1rf`,`lecture`,0,1,`Общий поток: специальности 1РФ, 2РФ, 3РФ, 4РФ, 8РФ и группы 601КБ, 602КБ (3 курс).`),P(`1041`,`3`,`10`,`au-42`,`g3-601kb`,`laboratory`,0,4,`Нечётная неделя: 3-я подгруппа.`),P(`1042`,`3`,`10`,`au-42`,`g3-3rf`,`laboratory`,1,4,`Чётная неделя: поток 3РФ, 3-я подгруппа. Нечётная неделя: поток 1РФ, 3-я подгруппа.`),P(`1043`,`3`,`10`,`au-42`,`g3-601kb`,`laboratory`,5,5,`Чётная неделя: 2-я подгруппа. Нечётная неделя: 1-я подгруппа.`),P(`1044`,`7`,`10`,`au-49`,`g2-1rf`,`laboratory`,1,5,`2-я подгруппа.`),P(`1045`,`7`,`10`,`au-49`,`g2-2rf`,`laboratory`,2,4,`2-я подгруппа.`),P(`1046`,`7`,`10`,`au-49`,`g2-1rf`,`laboratory`,3,4,`1-я подгруппа.`),P(`1049`,`3`,`15`,`au-117`,`g3-1rf`,`lecture`,4,6,`Поток: 1РФ, 2РФ, 3РФ, 4РФ, 8РФ, 601КБ. Лекцию читает другой преподаватель. Лабораторный практикум по ЦОС у Полещук Н.Н. (аудитория 42).`)],io={lecture:64,laboratory:40,practice:24},ao={"1|1|laboratory|g3-2rf":32};function oo(e){let t=new Map;for(let n of e){let e=`${n.teacherId}|${n.subjectId}|${n.type}|${n.groupId}`;if(t.has(e))continue;let r=ao[e]??io[n.type];t.set(e,{teacherId:n.teacherId,subjectId:n.subjectId,type:n.type,groupId:n.groupId,plannedHours:r})}return[...t.values()]}var so=oo(ro),co=Ta({name:`schedule`,initialState:{lessons:[...ro]},reducers:{addLesson:(e,t)=>{let n=`lesson-${Date.now()}`;e.lessons.push({...t.payload,id:n})},updateLesson:(e,t)=>{let n=e.lessons.findIndex(e=>e.id===t.payload.id);n!==-1&&(e.lessons[n]=t.payload)},moveLesson:(e,t)=>{let n=e.lessons.find(e=>e.id===t.payload.id);n&&(n.dayOfWeek=t.payload.dayOfWeek,n.timeSlot=t.payload.timeSlot)},removeLesson:(e,t)=>{e.lessons=e.lessons.filter(e=>e.id!==t.payload)}}}),{addLesson:lo,updateLesson:uo,moveLesson:fo,removeLesson:po}=co.actions,mo=co.reducer,ho=Ta({name:`user`,initialState:{current:null},reducers:{setUser:(e,t)=>{e.current=t.payload},loginAs:(e,t)=>{let{role:n,groupId:r,teacherId:i}=t.payload;e.current={id:n,name:n===`student`?`Студент`:n===`teacher`?`Преподаватель`:`Администратор`,role:n,groupId:r,teacherId:i}},logout:e=>{e.current=null}}}),{setUser:go,loginAs:_o,logout:vo}=ho.actions,F=ho.reducer,yo=oa({reducer:{schedule:mo,user:F}}),bo=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),I=o(((e,t)=>{t.exports=bo()}))();function xo(){return(0,I.jsx)(`div`,{className:`min-h-screen bg-gray-50`,children:(0,I.jsx)(nn,{})})}var So=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),Co=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),wo=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),To=e=>{let t=wo(e);return t.charAt(0).toUpperCase()+t.slice(1)},Eo={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},Do=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},Oo=(0,b.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,b.createElement)(`svg`,{ref:c,...Eo,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:So(`lucide`,i),...!a&&!Do(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,b.createElement)(e,t)),...Array.isArray(a)?a:[a]])),ko=(e,t)=>{let n=(0,b.forwardRef)(({className:n,...r},i)=>(0,b.createElement)(Oo,{ref:i,iconNode:t,className:So(`lucide-${Co(To(e))}`,`lucide-${e}`,n),...r}));return n.displayName=To(e),n},Ao=ko(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),jo=ko(`book-marked`,[[`path`,{d:`M10 2v8l3-3 3 3V2`,key:`sqw3rj`}],[`path`,{d:`M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20`,key:`k3hazp`}]]),Mo=ko(`book-open`,[[`path`,{d:`M12 7v14`,key:`1akyts`}],[`path`,{d:`M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z`,key:`ruj8y`}]]),No=ko(`building-2`,[[`path`,{d:`M10 12h4`,key:`a56b0p`}],[`path`,{d:`M10 8h4`,key:`1sr2af`}],[`path`,{d:`M14 21v-3a2 2 0 0 0-4 0v3`,key:`1rgiei`}],[`path`,{d:`M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2`,key:`secmi2`}],[`path`,{d:`M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16`,key:`16ra0t`}]]),Po=ko(`calendar`,[[`path`,{d:`M8 2v4`,key:`1cmpym`}],[`path`,{d:`M16 2v4`,key:`4m81vk`}],[`rect`,{width:`18`,height:`18`,x:`3`,y:`4`,rx:`2`,key:`1hopcy`}],[`path`,{d:`M3 10h18`,key:`8toen8`}]]),Fo=ko(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),Io=ko(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),Lo=ko(`chevron-up`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),Ro=ko(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),zo=ko(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),Bo=ko(`funnel`,[[`path`,{d:`M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z`,key:`sc7q7i`}]]),Vo=ko(`graduation-cap`,[[`path`,{d:`M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,key:`j76jl0`}],[`path`,{d:`M22 10v6`,key:`1lu8f3`}],[`path`,{d:`M6 12.5V16a6 3 0 0 0 12 0v-3.5`,key:`1r8lef`}]]),Ho=ko(`map-pin`,[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]),Uo=ko(`pencil`,[[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}],[`path`,{d:`m15 5 4 4`,key:`1mk7zo`}]]),Wo=ko(`save`,[[`path`,{d:`M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`,key:`1c8476`}],[`path`,{d:`M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7`,key:`1ydtos`}],[`path`,{d:`M7 3v4a1 1 0 0 0 1 1h7`,key:`t51u73`}]]),Go=ko(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),Ko=ko(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),qo=ko(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),Jo=ko(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),Yo=ko(`user`,[[`path`,{d:`M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2`,key:`975kel`}],[`circle`,{cx:`12`,cy:`7`,r:`4`,key:`17ys0d`}]]),Xo=ko(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]);function Zo(){let e=Ot();return(0,I.jsxs)(`div`,{className:`min-h-screen flex flex-col`,children:[(0,I.jsx)(`header`,{className:`px-6 py-4 border-b border-gray-200 bg-white`,children:(0,I.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,I.jsx)(Vo,{className:`w-8 h-8 text-gray-700`}),(0,I.jsx)(`span`,{className:`text-xl font-semibold text-gray-900`,children:`UniSchedule`})]})}),(0,I.jsxs)(`main`,{className:`flex-1 flex flex-col items-center justify-center px-6 py-12`,children:[(0,I.jsx)(`h1`,{className:`text-3xl font-bold text-gray-900 mb-2`,children:`Выберите роль`}),(0,I.jsx)(`p`,{className:`text-gray-600 mb-12 text-center max-w-md`,children:`Выберите свою роль для доступа к системе учебного расписания`}),(0,I.jsx)(`div`,{className:`flex flex-wrap gap-6 justify-center max-w-4xl`,children:[{id:`student`,title:`Студент`,description:`Просмотр своего учебного расписания на неделю.`,icon:Vo,color:`text-blue-600`,path:`/student`},{id:`teacher`,title:`Преподаватель`,description:`Просмотр расписания занятий и работа с несколькими группами.`,icon:Mo,color:`text-green-600`,path:`/teacher`},{id:`admin`,title:`Администратор`,description:`Управление расписанием и редактирование учебных занятий.`,icon:Ko,color:`text-purple-600`,path:`/admin`}].map(t=>{let n=t.icon;return(0,I.jsx)(`button`,{onClick:()=>e(`/login/${t.id}`),className:`w-72 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all text-left group`,children:(0,I.jsxs)(`div`,{className:`flex flex-col items-center`,children:[(0,I.jsx)(`div`,{className:`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors`,children:(0,I.jsx)(n,{className:`w-8 h-8 ${t.color}`})}),(0,I.jsx)(`h2`,{className:`text-lg font-semibold text-gray-900 mb-2`,children:t.title}),(0,I.jsx)(`p`,{className:`text-sm text-gray-500 text-center mb-4`,children:t.description}),(0,I.jsx)(`span`,{className:`text-sm font-medium ${t.color} flex items-center gap-1`,children:`Войти →`})]})},t.id)})}),(0,I.jsx)(`p`,{className:`mt-10 text-center text-sm text-gray-500`,children:(0,I.jsx)(Yn,{to:`/handbook`,className:`text-indigo-600 hover:text-indigo-800 font-medium underline-offset-4 hover:underline`,children:`Справочник кафедры: легенда графика и нагрузка по дисциплинам`})})]}),(0,I.jsx)(`footer`,{className:`py-4 text-center text-sm text-gray-500`,children:`© 2026 UniSchedule — Система учебного расписания · ФРКТ БГУ (демоданные)`})]})}var Qo=()=>se(),$o=ue,es={student:{title:`Студент`,subtitle:`Войдите для просмотра расписания`,icon:Vo,color:`text-blue-600`},teacher:{title:`Преподаватель`,subtitle:`Войдите для просмотра расписания`,icon:Mo,color:`text-green-600`},administrator:{title:`Администратор`,subtitle:`Войдите для управления расписанием`,icon:Ko,color:`text-purple-600`}};function ts(){let e=Ot(),t=Qo(),[n,r]=(0,b.useState)(``),[i,a]=(0,b.useState)(``),[o,s]=(0,b.useState)(null),[c,l]=(0,b.useState)(``),u=(0,b.useCallback)(e=>{if(!e||!e.includes(`@`)){s(null);return}let t=to.find(t=>t.email.toLowerCase()===e.toLowerCase());s(t?t.role:null)},[]),d=e=>{let t=e.target.value;r(t),l(``),u(t)},f=r=>{r.preventDefault();let a=to.find(e=>e.email.toLowerCase()===n.toLowerCase());if(!a){l(`Пользователь не найден`);return}if(a.password!==i){l(`Неверный пароль`);return}t(_o({role:a.role,groupId:a.groupId,teacherId:a.teacherId})),a.role===`student`?e(`/student`):a.role===`teacher`?e(`/teacher`):e(`/admin`)},p=o,m=p?es[p]:null,h=m?.icon??Vo;return(0,I.jsxs)(`div`,{className:`min-h-screen flex flex-col bg-gray-50`,children:[(0,I.jsx)(`header`,{className:`px-6 py-4 border-b border-gray-200 bg-white`,children:(0,I.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,I.jsx)(Vo,{className:`w-8 h-8 text-gray-700`}),(0,I.jsx)(`span`,{className:`text-xl font-semibold text-gray-900`,children:`UniSchedule`})]})}),(0,I.jsxs)(`main`,{className:`flex-1 flex flex-col items-center justify-center px-6 py-12`,children:[(0,I.jsx)(Yn,{to:`/`,className:`text-sm text-gray-600 hover:text-gray-900 mb-6 flex items-center gap-1`,children:`← Выбор роли`}),(0,I.jsxs)(`div`,{className:`w-full max-w-md bg-white rounded-xl shadow-md border border-gray-200 p-6`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-3 mb-6`,children:[(0,I.jsx)(`div`,{className:`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center`,children:(0,I.jsx)(h,{className:`w-6 h-6 ${m?.color??`text-gray-600`}`})}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h1`,{className:`text-xl font-bold text-gray-900`,children:m?m.title:`Вход в систему`}),(0,I.jsx)(`p`,{className:`text-sm text-gray-500`,children:m?m.subtitle:`Введите логин для определения роли`})]})]}),(0,I.jsxs)(`form`,{onSubmit:f,className:`space-y-4`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`label`,{className:`block text-sm font-medium text-gray-700 mb-1`,children:`Логин`}),(0,I.jsx)(`input`,{type:`email`,value:n,onChange:d,onBlur:()=>u(n),placeholder:`Введите email`,className:`w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500`})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`label`,{className:`block text-sm font-medium text-gray-700 mb-1`,children:`Пароль`}),(0,I.jsx)(`input`,{type:`password`,value:i,onChange:e=>{a(e.target.value),l(``)},placeholder:`Введите пароль`,className:`w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500`})]}),c&&(0,I.jsx)(`p`,{className:`text-red-500 text-sm`,children:c}),(0,I.jsx)(`button`,{type:`submit`,className:`w-full py-2.5 rounded-lg font-medium text-white flex items-center justify-center gap-2 ${p===`administrator`?`bg-purple-600 hover:bg-purple-700`:p===`teacher`?`bg-green-600 hover:bg-green-700`:`bg-blue-600 hover:bg-blue-700`}`,children:`Продолжить →`})]})]})]}),(0,I.jsx)(`footer`,{className:`py-4 text-center text-sm text-gray-500`,children:`© 2026 UniSchedule — Система учебного расписания`})]})}function ns({title:e,subtitle:t,userRole:n,userGroup:r,onPrevWeek:i,onNextWeek:a,onCurrentWeek:o,showNav:s=!1,isCurrentWeek:c=!0,weekRangeLabel:l=``,academicWeekLine:u,toolbar:d}){let f=Ot();return(0,I.jsxs)(`header`,{className:`bg-white border-b border-gray-200 px-6 py-4`,children:[(0,I.jsxs)(`div`,{className:`flex items-center justify-between flex-wrap gap-4`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,I.jsxs)(`button`,{onClick:()=>f(`/`),className:`flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors`,children:[(0,I.jsx)(Io,{className:`w-5 h-5`}),`Назад`]}),(0,I.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,I.jsx)(`div`,{className:`w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center`,children:(0,I.jsx)(Po,{className:`w-4 h-4 text-primary-600`})}),(0,I.jsx)(`span`,{className:`text-xl font-semibold text-gray-900`,children:`UniSchedule`})]})]}),s&&(0,I.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,I.jsx)(`button`,{type:`button`,onClick:i,className:`w-9 h-9 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50`,"aria-label":`Предыдущая неделя`,children:`←`}),c?(0,I.jsx)(`span`,{className:`px-3 py-1.5 text-sm font-medium text-primary-700 bg-primary-50 rounded-md border border-primary-200 min-w-[9rem] text-center`,children:`Текущая неделя`}):(0,I.jsx)(`button`,{type:`button`,onClick:o,className:`px-3 py-1.5 text-sm font-medium text-primary-800 bg-white rounded-md hover:bg-primary-50 border border-primary-200 max-w-[240px] truncate`,title:`Вернуться к текущей неделе`,children:l||`…`}),(0,I.jsx)(`button`,{type:`button`,onClick:a,className:`w-9 h-9 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50`,"aria-label":`Следующая неделя`,children:`→`})]}),(0,I.jsxs)(`div`,{className:`flex items-center gap-2 text-sm text-gray-600`,children:[(0,I.jsx)(Po,{className:`w-4 h-4`}),n,r&&` • ${r}`]})]}),(0,I.jsxs)(`div`,{className:`mt-4`,children:[(0,I.jsx)(`h1`,{className:`text-2xl font-bold text-gray-900`,children:e}),t&&(0,I.jsx)(`p`,{className:`text-gray-600 mt-2`,children:t}),u&&(0,I.jsx)(`p`,{className:`text-sm font-medium text-primary-800 mt-2 pl-3 border-l-4 border-primary-400`,children:u}),d&&(0,I.jsx)(`div`,{className:`mt-4`,children:d})]})]})}var rs=[{start:`08:00`,end:`09:30`},{start:`09:45`,end:`11:15`},{start:`11:30`,end:`13:00`},{start:`13:30`,end:`15:00`},{start:`15:15`,end:`16:45`},{start:`17:00`,end:`18:30`},{start:`18:40`,end:`20:10`}],is=[`Понедельник`,`Вторник`,`Среда`,`Четверг`,`Пятница`,`Суббота`];function as(e){return Za.find(t=>t.id===e)?.name??``}function os(e){return[...e].sort((e,t)=>{let n=as(e.subjectId),r=as(t.subjectId),i=n.localeCompare(r,`ru`);return i===0?e.id.localeCompare(t.id):i})}function ss(e){return Xa.find(t=>t.id===e)?.name??``}function cs(e){return Qa.find(t=>t.id===e)?.name??``}function ls(e){let t=Qa.find(t=>t.id===e);if(!t)return``;let n=[];return t.compact?n.push(`компактный зал`):n.push(`просторный зал`),n.push(t.hasProjector?`есть проектор`:`без проектора`),t.hasInteractiveBoard&&n.push(`интерактивная доска`),n.join(` · `)}function us(e){return $a.find(t=>t.id===e)?.name??``}function ds(e){return $a.find(t=>t.id===e)?.course??1}function fs(e){return{lecture:`Лекция`,practice:`Практика`,laboratory:`Лабораторная`}[e]??e}function ps(e){return{lecture:{bg:`bg-lecture-bg`,text:`text-lecture-text`},practice:{bg:`bg-practice-bg`,text:`text-practice-text`},laboratory:{bg:`bg-laboratory-bg`,text:`text-laboratory-text`}}[e]??{bg:`bg-gray-100`,text:`text-gray-800`}}function ms(e){return so.find(t=>t.teacherId===e.teacherId&&t.subjectId===e.subjectId&&t.type===e.type&&t.groupId===e.groupId)}function hs(e,t){return t.filter(t=>t.teacherId===e.teacherId&&t.subjectId===e.subjectId&&t.type===e.type&&t.groupId===e.groupId).length*2}function gs(e,t){let n=ms(e);if(!n||n.plannedHours<=0)return null;let r=hs(e,t);return{scheduledHours:r,plannedHours:n.plannedHours,percent:Math.min(100,Math.round(100*r/n.plannedHours))}}function _s(e,t){if(e.progress!=null)return e.progress;if(t?.length){let n=gs(e,t);if(n)return n.percent}let n=parseInt(e.subjectId,10)||0;return Math.min(92,35+n%7*8)}function vs(e){let t=Xa.find(t=>t.id===e);if(t?.plannedHoursSpring!=null&&t.plannedHoursSpring>0)return t.plannedHoursSpring;let n=so.filter(t=>t.teacherId===e).reduce((e,t)=>e+t.plannedHours,0);return n>0?n:null}function ys(e){let t=new Map;for(let n of e)t.set(n.teacherId,(t.get(n.teacherId)??0)+1);let n=new Set;for(let e of Xa)n.add(e.id);for(let e of t.keys())n.add(e);return[...n].map(e=>{let n=Xa.find(t=>t.id===e),r=t.get(e)??0,i=r*2,a=vs(e),o=a!=null&&a>0?Math.min(100,Math.round(100*i/a)):null;return{teacherId:e,teacherName:n?.name||ss(e)||`Преподаватель ${e}`,lessonSlots:r,scheduledHours:i,plannedHours:a,percent:o}}).filter(e=>e.scheduledHours>0||e.plannedHours!=null).sort((e,t)=>e.teacherName.localeCompare(t.teacherName,`ru`))}function bs(e){let t=e.filter(e=>e.plannedHours!=null&&e.plannedHours>0),n=t.reduce((e,t)=>e+t.scheduledHours,0),r=t.reduce((e,t)=>e+(t.plannedHours??0),0),i=r>0?Math.min(100,Math.round(100*n/r)):null;return{withPlanCount:t.length,sumScheduledScoped:n,sumPlannedScoped:r,fillPercent:i,totalScheduledHours:e.reduce((e,t)=>e+t.scheduledHours,0)}}function xs(e,t,n,r,i,a,o){let s=null,c=null,l=o==null?null:Ua({weekStartKey:o,dayOfWeek:t});for(let o of e)if(o.id!==r){if(l!=null){if(Ua(o)!==l||o.timeSlot!==n)continue}else if(o.dayOfWeek!==t||o.timeSlot!==n)continue;i&&o.auditoriumId===i&&(s=o),a&&o.teacherId===a&&(c=o)}return{roomConflict:s,teacherConflict:c}}function Ss(e){let t=new Date(e),n=t.getDay(),r=n===0?-6:1-n;t.setDate(t.getDate()+r);let i=new Date(t),a=new Date(t);return a.setDate(a.getDate()+5),{start:i,end:a}}function Cs(e,t){let n={day:`numeric`,month:`long`};return`${e.toLocaleDateString(`ru-RU`,n)} – ${t.toLocaleDateString(`ru-RU`,n)}`}function ws(e){let t=new Date(e.getFullYear(),e.getMonth(),e.getDate());return Array.from({length:6},(e,n)=>{let r=new Date(t);return r.setDate(t.getDate()+n),r})}function Ts(e){let t=e.getDay();return t===0?null:t===6?5:t-1}function Es(e){let t=new Map;for(let n of e){let e=`${Ua(n)} ${n.timeSlot}`;t.has(e)||t.set(e,[]),t.get(e).push(n)}let n=[],r=e=>{let t=rs[e];return t?`${t.start}–${t.end}`:`${e}`};for(let[e,i]of t){if(i.length<2)continue;let[t,a]=e.split(`\0`),o=parseInt(a,10),s=i[0].weekStartKey,c=i[0].dayOfWeek,l=[],u=new Map,d=new Map;for(let e of i)u.set(e.auditoriumId,(u.get(e.auditoriumId)??0)+1),d.set(e.teacherId,(d.get(e.teacherId)??0)+1);if([...u.values()].some(e=>e>1)&&l.push(`room`),[...d.values()].some(e=>e>1)&&l.push(`teacher`),l.length===0)continue;let f=l.map(e=>e===`room`?`аудитория`:`преподаватель`).join(`, `),p=i.map(e=>`«${as(e.subjectId)}» — ${ss(e.teacherId)}, ${cs(e.auditoriumId)}, ${us(e.groupId)}`);n.push({weekStartKey:s,dayOfWeek:c,timeSlot:o,lessons:i,types:l,description:`${t} (${is[c]??c}), ${r(o)}. Конфликт по: ${f||`несколько занятий в слоте`}. ${p.join(` | `)}`})}return n}var Ds=new Set([`и`,`в`,`к`,`у`,`с`,`о`,`я`,`э`,`ё`,`ь`,`ъ`,`ы`]),Os=new Set(`и.в.во.не.на.по.к.с.со.из.у.о.об.от.за.до.для.при.а.но.как.что.это.то.же.ли.бы.лишь`.split(`.`));function ks(e){return e.toLowerCase().replace(/ё/g,`е`).split(/[^\p{L}\p{N}]+/u).map(e=>e.trim()).filter(e=>e.length>=2&&!Os.has(e))}function As(e){return e.toLowerCase().replace(/ё/g,`е`).split(/[^\p{L}\p{N}]+/u).map(e=>e.trim()).filter(e=>e.length>=1)}function js(e){let t=rs[e.timeSlot],n=t?`${t.start} ${t.end}`:``,r=is[e.dayOfWeek]??``;return[as(e.subjectId),ss(e.teacherId),us(e.groupId),cs(e.auditoriumId),fs(e.type),e.type,r,n,e.weekStartKey,e.extraInfo??``,e.progress==null?``:`прогресс ${e.progress}%`].filter(Boolean).join(` `)}function Ms(e){let t=new Map;for(let n of e)t.set(n,(t.get(n)??0)+1);return t}function Ns(e){return e>0?1+Math.log(e):0}function Ps(e,t){let n=new Map;for(let[r,i]of e){let e=Ns(i)*t(r);e!==0&&n.set(r,e)}return n}function Fs(e,t){let n=t,r=As(n);if(e.length===0)return 0;if(e.length===1){if(Ds.has(e))return 0;let t=0;for(let n of r)n.startsWith(e)?t=Math.max(t,.38+Math.min(.42,e.length/Math.max(n.length,4))):n.includes(e)&&(t=Math.max(t,.14));return n.includes(e)&&(t=Math.max(t,.16)),Math.min(1,t)}if(n.includes(e))return Math.min(1,.52+Math.min(.45,e.length/48));let i=e.split(/\s+/).filter(e=>e.length>0);if(i.length>1){let e=0,t=0;for(let a of i)a.length===1&&Ds.has(a)||(t+=1,(n.includes(a)||r.some(e=>e.startsWith(a)||a.length>=2&&e.includes(a)))&&(e+=1));return t===0?0:Math.min(1,.32+e/t*.54)}let a=e,o=0;for(let e of r)e.startsWith(a)?o=Math.max(o,.3+Math.min(.65,a.length/Math.max(e.length,a.length)*.65)):a.length>=2&&e.includes(a)&&(o=Math.max(o,.26+Math.min(.55,a.length/e.length*.5)));return Math.min(1,o)}function Is(e,t,n){let r=n?.minScore??.001,i=n?.limit??25,a=e.trim();if(!a.length||t.length===0)return[];let o=a.toLowerCase().replace(/ё/g,`е`),s=ks(e),c=t.map(e=>{let t=js(e);return{lesson:e,blobNorm:t.toLowerCase().replace(/ё/g,`е`),tokens:ks(t)}}),l=c.length,u=new Map;for(let{tokens:e}of c){let t=new Set(e);for(let e of t)u.set(e,(u.get(e)??0)+1)}let d=e=>{let t=u.get(e)??0;return Math.log(1+l/(t+1e-9))},f=null,p=new Set(s);s.length>0&&(f=Ps(Ms(s),d));let m=(e,t)=>{let n=0,r=0,i=0;for(let t of e.values())r+=t*t;for(let e of t.values())i+=e*e;let a=e.size<t.size?e:t,o=e.size<t.size?t:e;for(let[e,t]of a){let r=o.get(e);r!=null&&(n+=t*r)}let s=Math.sqrt(r)*Math.sqrt(i);return s>0?n/s:0};function h(e){if(p.size===0)return 0;let t=new Set(e),n=0;for(let e of p)t.has(e)&&(n+=1);return n/p.size}return c.map(({lesson:e,blobNorm:t,tokens:n})=>{let r=Fs(o,t),i=0;if(f!==null&&s.length>0){let e=Ps(Ms(n),d),t=m(f,e),r=h(n);i=r>0?.52*r+.48*t:t}let a=o.length>=8?.42:o.length<=3?.22:.34,c=r>0&&i>0?r*(1-a)+i*a:0;return{lesson:e,score:Math.max(r,i,c)}}).filter(e=>e.score>=r).sort((e,t)=>t.score-e.score).slice(0,i)}function Ls({role:e,onLessonNavigate:t}){let n=$o(e=>e.schedule.lessons),r=$o(e=>e.user.current),[i,a]=(0,b.useState)(``),[o,s]=(0,b.useState)(!1),c=(0,b.useRef)(null),l=(0,b.useMemo)(()=>{if(e===`student`){let e=r?.groupId??`g3-1rf`;return n.filter(t=>t.groupId===e)}if(e===`teacher`){let e=r?.teacherId??`1`;return n.filter(t=>t.teacherId===e)}return n},[n,e,r?.groupId,r?.teacherId]),u=(0,b.useMemo)(()=>{let e=i.trim();return e.length<1?[]:Is(e,l,{limit:15,minScore:.001})},[i,l]);(0,b.useEffect)(()=>{let e=e=>{c.current?.contains(e.target)||s(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let d=e=>{let t=is[e.dayOfWeek]??``,n=rs[e.timeSlot];return`${t}, ${n?`${n.start}–${n.end}`:``} · ${us(e.groupId)} · ${fs(e.type)}`};return(0,I.jsxs)(`div`,{ref:c,className:`relative w-full max-w-xl`,children:[(0,I.jsx)(`label`,{htmlFor:`semantic-search-input`,className:`sr-only`,children:`Семантический поиск по расписанию`}),(0,I.jsxs)(`div`,{className:`flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-primary-400 focus-within:border-primary-400`,children:[(0,I.jsx)(Go,{className:`w-4 h-4 text-gray-400 shrink-0`,"aria-hidden":!0}),(0,I.jsx)(`input`,{id:`semantic-search-input`,type:`search`,value:i,onChange:e=>{a(e.target.value),s(!0)},onFocus:()=>s(!0),placeholder:e===`admin`?`Поиск: предмет, преподаватель, группа, аудитория…`:`Поиск по вашему расписанию…`,className:`min-w-0 flex-1 text-sm text-gray-900 placeholder:text-gray-400 bg-transparent outline-none`,autoComplete:`off`}),i&&(0,I.jsx)(`button`,{type:`button`,onClick:()=>{a(``),s(!1)},className:`p-0.5 rounded text-gray-400 hover:bg-gray-100 hover:text-gray-700`,"aria-label":`Очистить`,children:(0,I.jsx)(Xo,{className:`w-4 h-4`})})]}),o&&i.trim().length>=1&&(0,I.jsx)(`div`,{className:`absolute z-[100] left-0 right-0 top-full mt-1 rounded-lg border border-gray-200 bg-white shadow-lg max-h-[min(70vh,420px)] overflow-y-auto`,children:u.length===0?(0,I.jsx)(`div`,{className:`px-3 py-4 text-sm text-gray-600`,children:`Совпадений нет или слишком короткая буква (попробуйте другую букву или слог).`}):(0,I.jsx)(`ul`,{className:`py-1 divide-y divide-gray-100`,children:u.map(({lesson:n,score:r})=>(0,I.jsx)(`li`,{children:(0,I.jsxs)(`button`,{type:`button`,disabled:!t,onClick:()=>{t?.(n),s(!1)},className:`w-full text-left px-3 py-2.5 hover:bg-gray-50 ${t?`cursor-pointer`:`cursor-default`}`,children:[(0,I.jsx)(`p`,{className:`font-medium text-gray-900 text-sm`,children:as(n.subjectId)}),(0,I.jsx)(`p`,{className:`text-xs text-gray-600 mt-0.5`,children:d(n)}),(0,I.jsxs)(`p`,{className:`text-xs text-gray-500 mt-0.5`,children:[ss(n.teacherId),` · `,cs(n.auditoriumId),n.weekStartKey?` · нед. ${n.weekStartKey}`:``]}),e===`admin`&&n.extraInfo?.trim()&&(0,I.jsxs)(`p`,{className:`text-[11px] text-gray-500 mt-1 line-clamp-3`,title:n.extraInfo,children:[(0,I.jsx)(`span`,{className:`font-medium text-gray-600`,children:`Дополнительная информация. `}),n.extraInfo]}),(0,I.jsxs)(`p`,{className:`text-[10px] text-gray-400 mt-1 tabular-nums`,children:[`Релевантность: `,(r*100).toFixed(0),`%`]}),t&&(0,I.jsx)(`p`,{className:`text-[11px] text-primary-600 mt-1 font-medium`,children:`Перейти к занятию →`})]})},n.id))})})]})}function Rs({lesson:e,showProgress:t=!1,compact:n=!1,showGroupInfo:r,teacherMode:i=!1,showStaffRoomDetails:a,progressLessons:o}){let s=ps(e.type),c=`${ds(e.groupId)} курс · ${us(e.groupId)}`,l=a??i?ls(e.auditoriumId):``,u=e.extraInfo?.trim()??``,d=t&&o?.length?gs(e,o):null,f=_s(e,o);return(0,I.jsxs)(`div`,{className:`rounded-lg p-3 min-w-0 ${s.bg} ${s.text} border border-white/50 ${n?`text-xs`:`text-sm`}`,children:[(0,I.jsx)(`p`,{className:`font-semibold mb-2 truncate`,children:as(e.subjectId)}),i?(0,I.jsxs)(`p`,{className:`flex items-start gap-1.5 text-xs font-medium opacity-95 mb-2 leading-snug`,children:[(0,I.jsx)(Vo,{className:`w-3.5 h-3.5 flex-shrink-0 mt-0.5`}),(0,I.jsx)(`span`,{children:c})]}):(0,I.jsx)(`div`,{className:`space-y-1`,children:(0,I.jsxs)(`p`,{className:`flex items-center gap-1.5 truncate`,children:[(0,I.jsx)(Yo,{className:`w-3.5 h-3.5 flex-shrink-0`}),ss(e.teacherId)]})}),(0,I.jsxs)(`div`,{className:`space-y-1`,children:[(0,I.jsxs)(`p`,{className:`flex items-center gap-1.5 truncate`,children:[(0,I.jsx)(Ho,{className:`w-3.5 h-3.5 flex-shrink-0`}),cs(e.auditoriumId)]}),l&&(0,I.jsx)(`p`,{className:`text-[10px] leading-tight opacity-85 pl-[22px]`,children:l}),u&&(0,I.jsxs)(`div`,{className:`pl-[22px] mt-1 space-y-0.5`,children:[(0,I.jsx)(`p`,{className:`text-[10px] font-semibold leading-tight opacity-95`,children:`Дополнительная информация`}),(0,I.jsx)(`p`,{className:`text-[10px] leading-tight opacity-90 whitespace-pre-wrap break-words`,children:u})]})]}),!i&&r&&(0,I.jsx)(`p`,{className:`text-xs text-gray-600 mt-1 truncate`,children:r}),(0,I.jsxs)(`p`,{className:`flex items-center gap-1.5 mt-2 ${s.text} font-medium`,children:[(0,I.jsx)(Mo,{className:`w-3.5 h-3.5 flex-shrink-0`}),fs(e.type)]}),t&&(0,I.jsxs)(`div`,{className:`mt-2`,children:[(0,I.jsx)(`p`,{className:`text-xs mb-1`,children:`Прогресс к плану`}),d?(0,I.jsxs)(`p`,{className:`text-[11px] opacity-90 mb-1 tabular-nums`,children:[d.scheduledHours,` / `,d.plannedHours,` акад. ч (`,d.percent,`%)`]}):o?.length?(0,I.jsx)(`p`,{className:`text-[11px] opacity-80 mb-1`,children:`Для этой строки нет записи в плане часов.`}):null,(0,I.jsx)(`div`,{className:`h-1.5 bg-white/50 rounded-full overflow-hidden`,children:(0,I.jsx)(`div`,{className:`h-full bg-current rounded-full transition-all`,style:{width:`${f}%`}})})]})]})}var zs=`2026-02-02`;function Bs(){let[e,t]=(0,b.useState)(null);return(0,b.useEffect)(()=>{if(!e)return;let n=window.setTimeout(()=>{document.querySelector(`[data-schedule-lesson-slot="${e.replace(/"/g,``)}"]`)?.scrollIntoView({behavior:`smooth`,block:`center`,inline:`nearest`})},320),r=window.setTimeout(()=>{t(null)},4200);return()=>{window.clearTimeout(n),window.clearTimeout(r)}},[e]),{flashLessonId:e,setFlashLessonId:t}}function Vs(){return(0,I.jsxs)(`colgroup`,{children:[(0,I.jsx)(`col`,{style:{width:`11%`}}),[0,1,2,3,4,5].map(e=>(0,I.jsx)(`col`,{style:{width:`14.833333333333334%`}},e))]})}function Hs(){return(0,I.jsxs)(`colgroup`,{children:[(0,I.jsx)(`col`,{style:{width:`15%`}}),(0,I.jsx)(`col`,{style:{width:`85%`}})]})}function Us(){return(0,I.jsx)(`colgroup`,{children:[0,1,2,3,4,5,6].map(e=>(0,I.jsx)(`col`,{style:{width:`14.285714285714286%`}},e))})}var Ws=`w-full min-w-0`,Gs=`w-full min-w-0 min-h-[4rem] rounded-lg flex items-center justify-center text-xs`;function Ks(){let e=new Date().getDay();return e===0?-1:e===6?5:e-1}function qs(){let e=$o(e=>e.user.current),t=$o(e=>e.schedule.lessons),[n,r]=(0,b.useState)(0),[i,a]=(0,b.useState)(new Set([`lecture`,`practice`,`laboratory`])),{flashLessonId:o,setFlashLessonId:s}=Bs(),c=e?.groupId??`g3-1rf`,l=(0,b.useMemo)(()=>{let e=new Date;return e.setDate(e.getDate()+n*7),e},[n]),{start:u}=(0,b.useMemo)(()=>Ss(l),[l]),d=(0,b.useMemo)(()=>Va(u),[u]),f=Cs(u,(0,b.useMemo)(()=>{let e=new Date(u);return e.setDate(e.getDate()+5),e},[u])),p=(0,b.useMemo)(()=>ws(u),[u]),m=(0,b.useMemo)(()=>t.filter(e=>e.groupId===c&&i.has(e.type)&&e.weekStartKey===d),[t,c,i,d]),h=Ks(),g=n===0,_=e=>{a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},v=(e,t)=>os(m.filter(n=>n.dayOfWeek===e&&n.timeSlot===t)),y=(0,b.useCallback)(e=>{let t=Ga(d,e.weekStartKey);r(e=>e+t),a(t=>{let n=new Set(t);return n.add(e.type),n}),s(e.id)},[d,s]),x=(0,b.useMemo)(()=>Ja(d,zs),[d]);return(0,I.jsxs)(`div`,{className:`min-h-screen`,children:[(0,I.jsx)(ns,{title:`Расписание`,subtitle:f,userRole:`Студент`,userGroup:e?.groupId?us(e.groupId):void 0,showNav:!0,isCurrentWeek:g,weekRangeLabel:f,academicWeekLine:x,onPrevWeek:()=>r(e=>e-1),onNextWeek:()=>r(e=>e+1),onCurrentWeek:()=>r(0),toolbar:(0,I.jsx)(Ls,{role:`student`,onLessonNavigate:y})}),(0,I.jsxs)(`div`,{className:`p-6`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-4 mb-4`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,I.jsx)(Bo,{className:`w-4 h-4 text-gray-500`}),(0,I.jsx)(`span`,{className:`text-sm text-gray-600`,children:`Тип занятия:`})]}),[{type:`lecture`,label:`Лекция`,color:`bg-blue-200`},{type:`practice`,label:`Практика`,color:`bg-green-200`},{type:`laboratory`,label:`Лабораторная`,color:`bg-purple-200`}].map(({type:e,label:t,color:n})=>(0,I.jsxs)(`label`,{className:`flex items-center gap-2 cursor-pointer`,children:[(0,I.jsx)(`input`,{type:`checkbox`,checked:i.has(e),onChange:()=>_(e),className:`sr-only peer`}),(0,I.jsx)(`span`,{className:`w-3 h-3 rounded-full ${n} peer-checked:ring-2 ring-offset-1 ring-gray-400`}),(0,I.jsx)(`span`,{className:`text-sm`,children:t})]},e))]}),(0,I.jsx)(`div`,{className:`bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto`,children:(0,I.jsxs)(`table`,{className:`table-fixed w-full min-w-[1200px] border-collapse`,children:[(0,I.jsx)(Vs,{}),(0,I.jsx)(`thead`,{children:(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`th`,{className:`p-2 text-left text-sm font-medium text-gray-600 border-b border-r border-gray-200 bg-gray-50 min-w-0`,children:`Время`}),is.slice(0,6).map((e,t)=>{let n=p[t];return(0,I.jsxs)(`th`,{className:`p-2 text-center text-sm font-medium border-b border-gray-200 min-w-0 ${g&&h===t?`bg-primary-100 text-primary-800 ring-2 ring-primary-300 ring-inset`:`bg-gray-50 text-gray-600`}`,children:[(0,I.jsx)(`div`,{children:e}),(0,I.jsx)(`div`,{className:`text-xs font-normal opacity-80 mt-0.5`,children:n.toLocaleDateString(`ru-RU`,{day:`numeric`,month:`short`})})]},e)})]})}),(0,I.jsx)(`tbody`,{children:rs.map((e,t)=>(0,I.jsxs)(`tr`,{children:[(0,I.jsxs)(`td`,{className:`p-2 text-sm text-gray-600 border-b border-r border-gray-200 align-top min-w-0`,children:[e.start,` – `,e.end]}),is.slice(0,6).map((e,n)=>{let r=v(n,t),i=g&&h===n,a=o!=null&&r.some(e=>e.id===o);return(0,I.jsx)(`td`,{className:`p-2 border-b border-r border-gray-200 align-top min-w-0 ${i?`bg-primary-50/70`:``} ${a?`ring-2 ring-amber-400 ring-offset-1 rounded-lg`:``}`,children:r.length>0?(0,I.jsx)(`div`,{className:`${Ws} flex flex-col gap-2`,children:r.map(e=>(0,I.jsx)(`div`,{"data-schedule-lesson-slot":e.id,children:(0,I.jsx)(Rs,{lesson:e})},e.id))}):(0,I.jsx)(`div`,{className:`${Gs} bg-gray-50/50`})},n)})]},t))})]})})]})]})}function Js(){let e=new Date().getDay();return e===0?-1:e===6?5:e-1}function Ys(){let e=$o(e=>e.user.current),t=$o(e=>e.schedule.lessons),[n,r]=(0,b.useState)(0),[i,a]=(0,b.useState)(`all`),[o,s]=(0,b.useState)(new Set([`lecture`,`practice`,`laboratory`])),{flashLessonId:c,setFlashLessonId:l}=Bs(),u=e?.teacherId??`1`,d=(0,b.useMemo)(()=>{let e=new Date;return e.setDate(e.getDate()+n*7),e},[n]),{start:f}=(0,b.useMemo)(()=>Ss(d),[d]),p=(0,b.useMemo)(()=>Va(f),[f]),m=Cs(f,(0,b.useMemo)(()=>{let e=new Date(f);return e.setDate(e.getDate()+5),e},[f])),h=(0,b.useMemo)(()=>ws(f),[f]),g=(0,b.useMemo)(()=>t.filter(e=>{if(e.teacherId!==u||!o.has(e.type)||e.weekStartKey!==p)return!1;let t=$a.find(t=>t.id===e.groupId);return!(i!==`all`&&t?.course!==parseInt(i,10))}),[t,u,i,o,p]),_=Js(),v=n===0,y=e=>{s(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},x=(e,t)=>os(g.filter(n=>n.dayOfWeek===e&&n.timeSlot===t)),S=(0,b.useCallback)(e=>{let t=Ga(p,e.weekStartKey);r(e=>e+t),s(t=>{let n=new Set(t);return n.add(e.type),n}),a(String(ds(e.groupId))),l(e.id)},[p,l]),C=(0,b.useMemo)(()=>Ja(p,zs),[p]);return(0,I.jsxs)(`div`,{className:`min-h-screen`,children:[(0,I.jsx)(ns,{title:`Расписание`,subtitle:m,userRole:`Преподаватель`,userGroup:i===`all`?`все курсы`:`${i} курс`,showNav:!0,isCurrentWeek:v,weekRangeLabel:m,academicWeekLine:C,onPrevWeek:()=>r(e=>e-1),onNextWeek:()=>r(e=>e+1),onCurrentWeek:()=>r(0),toolbar:(0,I.jsx)(Ls,{role:`teacher`,onLessonNavigate:S})}),(0,I.jsxs)(`div`,{className:`p-6`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-6 mb-4 flex-wrap`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,I.jsx)(Bo,{className:`w-4 h-4 text-gray-500`}),(0,I.jsx)(`span`,{className:`text-sm text-gray-600`,children:`Курс:`}),(0,I.jsxs)(`select`,{value:i,onChange:e=>a(e.target.value),className:`border border-gray-300 rounded-lg px-3 py-1.5 text-sm`,children:[(0,I.jsx)(`option`,{value:`all`,children:`Все курсы`}),eo.map(e=>(0,I.jsxs)(`option`,{value:String(e),children:[e,` курс`]},e))]})]}),(0,I.jsx)(`div`,{className:`flex items-center gap-4`,children:[{type:`lecture`,label:`Лекция`,color:`bg-blue-200`},{type:`practice`,label:`Практика`,color:`bg-green-200`},{type:`laboratory`,label:`Лабораторная`,color:`bg-purple-200`}].map(({type:e,label:t,color:n})=>(0,I.jsxs)(`label`,{className:`flex items-center gap-2 cursor-pointer`,children:[(0,I.jsx)(`input`,{type:`checkbox`,checked:o.has(e),onChange:()=>y(e),className:`sr-only peer`}),(0,I.jsx)(`span`,{className:`w-3 h-3 rounded-full ${n} peer-checked:ring-2 ring-offset-1 ring-gray-400`}),(0,I.jsx)(`span`,{className:`text-sm`,children:t})]},e))})]}),(0,I.jsx)(`div`,{className:`bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto`,children:(0,I.jsxs)(`table`,{className:`table-fixed w-full min-w-[1200px] border-collapse`,children:[(0,I.jsx)(Vs,{}),(0,I.jsx)(`thead`,{children:(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`th`,{className:`p-2 text-left text-sm font-medium text-gray-600 border-b border-r border-gray-200 bg-gray-50 min-w-0`,children:`Время`}),is.slice(0,6).map((e,t)=>{let n=h[t];return(0,I.jsxs)(`th`,{className:`p-2 text-center text-sm font-medium border-b border-gray-200 min-w-0 ${v&&_===t?`bg-primary-100 text-primary-800 ring-2 ring-primary-300 ring-inset`:`bg-gray-50 text-gray-600`}`,children:[(0,I.jsx)(`div`,{children:e}),(0,I.jsx)(`div`,{className:`text-xs font-normal opacity-80 mt-0.5`,children:n.toLocaleDateString(`ru-RU`,{day:`numeric`,month:`short`})})]},e)})]})}),(0,I.jsx)(`tbody`,{children:rs.map((e,n)=>(0,I.jsxs)(`tr`,{children:[(0,I.jsxs)(`td`,{className:`p-2 text-sm text-gray-600 border-b border-r border-gray-200 align-top min-w-0`,children:[e.start,` – `,e.end]}),is.slice(0,6).map((e,r)=>{let i=x(r,n),a=v&&_===r,o=c!=null&&i.some(e=>e.id===c);return(0,I.jsx)(`td`,{className:`p-2 border-b border-r border-gray-200 align-top min-w-0 ${a?`bg-primary-50/70`:``} ${o?`ring-2 ring-amber-400 ring-offset-1 rounded-lg`:``}`,children:i.length>0?(0,I.jsx)(`div`,{className:`${Ws} flex flex-col gap-2`,children:i.map(e=>(0,I.jsx)(`div`,{"data-schedule-lesson-slot":e.id,title:`${ds(e.groupId)} курс, ${us(e.groupId)}\n${as(e.subjectId)}\n${cs(e.auditoriumId)} — ${ls(e.auditoriumId)}\n${fs(e.type)}`,children:(0,I.jsx)(Rs,{lesson:e,showProgress:!0,teacherMode:!0,progressLessons:t})},e.id))}):(0,I.jsx)(`div`,{className:`${Gs} bg-gray-50/50`})},r)})]},n))})]})})]})]})}var Xs=c(m()),Zs=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Qs(e){let t=Object.prototype.toString.call(e);return t===`[object Window]`||t===`[object global]`}function $s(e){return`nodeType`in e}function ec(e){return e?Qs(e)?e:$s(e)?e.ownerDocument?.defaultView??window:window:window}function tc(e){let{Document:t}=ec(e);return e instanceof t}function nc(e){return Qs(e)?!1:e instanceof ec(e).HTMLElement}function rc(e){return e instanceof ec(e).SVGElement}function ic(e){return e?Qs(e)?e.document:$s(e)?tc(e)?e:nc(e)||rc(e)?e.ownerDocument:document:document:document}var ac=Zs?b.useLayoutEffect:b.useEffect;function oc(e){let t=(0,b.useRef)(e);return ac(()=>{t.current=e}),(0,b.useCallback)(function(){var e=[...arguments];return t.current==null?void 0:t.current(...e)},[])}function sc(){let e=(0,b.useRef)(null);return[(0,b.useCallback)((t,n)=>{e.current=setInterval(t,n)},[]),(0,b.useCallback)(()=>{e.current!==null&&(clearInterval(e.current),e.current=null)},[])]}function cc(e,t){t===void 0&&(t=[e]);let n=(0,b.useRef)(e);return ac(()=>{n.current!==e&&(n.current=e)},t),n}function lc(e,t){let n=(0,b.useRef)();return(0,b.useMemo)(()=>{let t=e(n.current);return n.current=t,t},[...t])}function uc(e){let t=oc(e),n=(0,b.useRef)(null);return[n,(0,b.useCallback)(e=>{e!==n.current&&t?.(e,n.current),n.current=e},[])]}function dc(e){let t=(0,b.useRef)();return(0,b.useEffect)(()=>{t.current=e},[e]),t.current}var fc={};function pc(e,t){return(0,b.useMemo)(()=>{if(t)return t;let n=fc[e]==null?0:fc[e]+1;return fc[e]=n,e+`-`+n},[e,t])}function mc(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>{let r=Object.entries(n);for(let[n,i]of r){let r=t[n];r!=null&&(t[n]=r+e*i)}return t},{...t})}}var hc=mc(1),gc=mc(-1);function _c(e){return`clientX`in e&&`clientY`in e}function vc(e){if(!e)return!1;let{KeyboardEvent:t}=ec(e.target);return t&&e instanceof t}function yc(e){if(!e)return!1;let{TouchEvent:t}=ec(e.target);return t&&e instanceof t}function bc(e){if(yc(e)){if(e.touches&&e.touches.length){let{clientX:t,clientY:n}=e.touches[0];return{x:t,y:n}}else if(e.changedTouches&&e.changedTouches.length){let{clientX:t,clientY:n}=e.changedTouches[0];return{x:t,y:n}}}return _c(e)?{x:e.clientX,y:e.clientY}:null}var xc=Object.freeze({Translate:{toString(e){if(!e)return;let{x:t,y:n}=e;return`translate3d(`+(t?Math.round(t):0)+`px, `+(n?Math.round(n):0)+`px, 0)`}},Scale:{toString(e){if(!e)return;let{scaleX:t,scaleY:n}=e;return`scaleX(`+t+`) scaleY(`+n+`)`}},Transform:{toString(e){if(e)return[xc.Translate.toString(e),xc.Scale.toString(e)].join(` `)}},Transition:{toString(e){let{property:t,duration:n,easing:r}=e;return t+` `+n+`ms `+r}}}),Sc=`a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]`;function Cc(e){return e.matches(Sc)?e:e.querySelector(Sc)}var wc={display:`none`};function Tc(e){let{id:t,value:n}=e;return b.createElement(`div`,{id:t,style:wc},n)}function Ec(e){let{id:t,announcement:n,ariaLiveType:r=`assertive`}=e;return b.createElement(`div`,{id:t,style:{position:`fixed`,top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(100%)`,whiteSpace:`nowrap`},role:`status`,"aria-live":r,"aria-atomic":!0},n)}function Dc(){let[e,t]=(0,b.useState)(``);return{announce:(0,b.useCallback)(e=>{e!=null&&t(e)},[]),announcement:e}}var Oc=(0,b.createContext)(null);function kc(e){let t=(0,b.useContext)(Oc);(0,b.useEffect)(()=>{if(!t)throw Error(`useDndMonitor must be used within a children of <DndContext>`);return t(e)},[e,t])}function Ac(){let[e]=(0,b.useState)(()=>new Set),t=(0,b.useCallback)(t=>(e.add(t),()=>e.delete(t)),[e]);return[(0,b.useCallback)(t=>{let{type:n,event:r}=t;e.forEach(e=>e[n]?.call(e,r))},[e]),t]}var jc={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},Mc={onDragStart(e){let{active:t}=e;return`Picked up draggable item `+t.id+`.`},onDragOver(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was moved over droppable area `+n.id+`.`:`Draggable item `+t.id+` is no longer over a droppable area.`},onDragEnd(e){let{active:t,over:n}=e;return n?`Draggable item `+t.id+` was dropped over droppable area `+n.id:`Draggable item `+t.id+` was dropped.`},onDragCancel(e){let{active:t}=e;return`Dragging was cancelled. Draggable item `+t.id+` was dropped.`}};function Nc(e){let{announcements:t=Mc,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=jc}=e,{announce:a,announcement:o}=Dc(),s=pc(`DndLiveRegion`),[c,l]=(0,b.useState)(!1);if((0,b.useEffect)(()=>{l(!0)},[]),kc((0,b.useMemo)(()=>({onDragStart(e){let{active:n}=e;a(t.onDragStart({active:n}))},onDragMove(e){let{active:n,over:r}=e;t.onDragMove&&a(t.onDragMove({active:n,over:r}))},onDragOver(e){let{active:n,over:r}=e;a(t.onDragOver({active:n,over:r}))},onDragEnd(e){let{active:n,over:r}=e;a(t.onDragEnd({active:n,over:r}))},onDragCancel(e){let{active:n,over:r}=e;a(t.onDragCancel({active:n,over:r}))}}),[a,t])),!c)return null;let u=b.createElement(b.Fragment,null,b.createElement(Tc,{id:r,value:i.draggable}),b.createElement(Ec,{id:s,announcement:o}));return n?(0,Xs.createPortal)(u,n):u}var Pc;(function(e){e.DragStart=`dragStart`,e.DragMove=`dragMove`,e.DragEnd=`dragEnd`,e.DragCancel=`dragCancel`,e.DragOver=`dragOver`,e.RegisterDroppable=`registerDroppable`,e.SetDroppableDisabled=`setDroppableDisabled`,e.UnregisterDroppable=`unregisterDroppable`})(Pc||={});function Fc(){}function Ic(e,t){return(0,b.useMemo)(()=>({sensor:e,options:t??{}}),[e,t])}function Lc(){var e=[...arguments];return(0,b.useMemo)(()=>[...e].filter(e=>e!=null),[...e])}var Rc=Object.freeze({x:0,y:0});function zc(e,t){let n=bc(e);if(!n)return`0 0`;let r={x:(n.x-t.left)/t.width*100,y:(n.y-t.top)/t.height*100};return r.x+`% `+r.y+`%`}function Bc(e,t){let{data:{value:n}}=e,{data:{value:r}}=t;return r-n}function Vc(e,t){if(!e||e.length===0)return null;let[n]=e;return t?n[t]:n}function Hc(e,t){let n=Math.max(t.top,e.top),r=Math.max(t.left,e.left),i=Math.min(t.left+t.width,e.left+e.width),a=Math.min(t.top+t.height,e.top+e.height),o=i-r,s=a-n;if(r<i&&n<a){let n=t.width*t.height,r=e.width*e.height,i=o*s,a=i/(n+r-i);return Number(a.toFixed(4))}return 0}var Uc=e=>{let{collisionRect:t,droppableRects:n,droppableContainers:r}=e,i=[];for(let e of r){let{id:r}=e,a=n.get(r);if(a){let n=Hc(a,t);n>0&&i.push({id:r,data:{droppableContainer:e,value:n}})}}return i.sort(Bc)};function Wc(e,t,n){return{...e,scaleX:t&&n?t.width/n.width:1,scaleY:t&&n?t.height/n.height:1}}function Gc(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:Rc}function Kc(e){return function(t){return[...arguments].slice(1).reduce((t,n)=>({...t,top:t.top+e*n.y,bottom:t.bottom+e*n.y,left:t.left+e*n.x,right:t.right+e*n.x}),{...t})}}var qc=Kc(1);function Jc(e){if(e.startsWith(`matrix3d(`)){let t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith(`matrix(`)){let t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function Yc(e,t,n){let r=Jc(t);if(!r)return e;let{scaleX:i,scaleY:a,x:o,y:s}=r,c=e.left-o-(1-i)*parseFloat(n),l=e.top-s-(1-a)*parseFloat(n.slice(n.indexOf(` `)+1)),u=i?e.width/i:e.width,d=a?e.height/a:e.height;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c}}var Xc={ignoreTransform:!1};function Zc(e,t){t===void 0&&(t=Xc);let n=e.getBoundingClientRect();if(t.ignoreTransform){let{transform:t,transformOrigin:r}=ec(e).getComputedStyle(e);t&&(n=Yc(n,t,r))}let{top:r,left:i,width:a,height:o,bottom:s,right:c}=n;return{top:r,left:i,width:a,height:o,bottom:s,right:c}}function Qc(e){return Zc(e,{ignoreTransform:!0})}function $c(e){let t=e.innerWidth,n=e.innerHeight;return{top:0,left:0,right:t,bottom:n,width:t,height:n}}function el(e,t){return t===void 0&&(t=ec(e).getComputedStyle(e)),t.position===`fixed`}function tl(e,t){t===void 0&&(t=ec(e).getComputedStyle(e));let n=/(auto|scroll|overlay)/;return[`overflow`,`overflowX`,`overflowY`].some(e=>{let r=t[e];return typeof r==`string`?n.test(r):!1})}function nl(e,t){let n=[];function r(i){if(t!=null&&n.length>=t||!i)return n;if(tc(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!nc(i)||rc(i)||n.includes(i))return n;let a=ec(e).getComputedStyle(i);return i!==e&&tl(i,a)&&n.push(i),el(i,a)?n:r(i.parentNode)}return e?r(e):n}function rl(e){let[t]=nl(e,1);return t??null}function il(e){return!Zs||!e?null:Qs(e)?e:$s(e)?tc(e)||e===ic(e).scrollingElement?window:nc(e)?e:null:null}function al(e){return Qs(e)?e.scrollX:e.scrollLeft}function ol(e){return Qs(e)?e.scrollY:e.scrollTop}function sl(e){return{x:al(e),y:ol(e)}}var cl;(function(e){e[e.Forward=1]=`Forward`,e[e.Backward=-1]=`Backward`})(cl||={});function ll(e){return!Zs||!e?!1:e===document.scrollingElement}function ul(e){let t={x:0,y:0},n=ll(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth},r={x:e.scrollWidth-n.width,y:e.scrollHeight-n.height};return{isTop:e.scrollTop<=t.y,isLeft:e.scrollLeft<=t.x,isBottom:e.scrollTop>=r.y,isRight:e.scrollLeft>=r.x,maxScroll:r,minScroll:t}}var dl={x:.2,y:.2};function fl(e,t,n,r,i){let{top:a,left:o,right:s,bottom:c}=n;r===void 0&&(r=10),i===void 0&&(i=dl);let{isTop:l,isBottom:u,isLeft:d,isRight:f}=ul(e),p={x:0,y:0},m={x:0,y:0},h={height:t.height*i.y,width:t.width*i.x};return!l&&a<=t.top+h.height?(p.y=cl.Backward,m.y=r*Math.abs((t.top+h.height-a)/h.height)):!u&&c>=t.bottom-h.height&&(p.y=cl.Forward,m.y=r*Math.abs((t.bottom-h.height-c)/h.height)),!f&&s>=t.right-h.width?(p.x=cl.Forward,m.x=r*Math.abs((t.right-h.width-s)/h.width)):!d&&o<=t.left+h.width&&(p.x=cl.Backward,m.x=r*Math.abs((t.left+h.width-o)/h.width)),{direction:p,speed:m}}function pl(e){if(e===document.scrollingElement){let{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}let{top:t,left:n,right:r,bottom:i}=e.getBoundingClientRect();return{top:t,left:n,right:r,bottom:i,width:e.clientWidth,height:e.clientHeight}}function ml(e){return e.reduce((e,t)=>hc(e,sl(t)),Rc)}function hl(e){return e.reduce((e,t)=>e+al(t),0)}function gl(e){return e.reduce((e,t)=>e+ol(t),0)}function _l(e,t){if(t===void 0&&(t=Zc),!e)return;let{top:n,left:r,bottom:i,right:a}=t(e);rl(e)&&(i<=0||a<=0||n>=window.innerHeight||r>=window.innerWidth)&&e.scrollIntoView({block:`center`,inline:`center`})}var vl=[[`x`,[`left`,`right`],hl],[`y`,[`top`,`bottom`],gl]],yl=class{constructor(e,t){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;let n=nl(t),r=ml(n);this.rect={...e},this.width=e.width,this.height=e.height;for(let[e,t,i]of vl)for(let a of t)Object.defineProperty(this,a,{get:()=>{let t=i(n),o=r[e]-t;return this.rect[a]+o},enumerable:!0});Object.defineProperty(this,`rect`,{enumerable:!1})}},bl=class{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(e=>this.target?.removeEventListener(...e))},this.target=e}add(e,t,n){var r;(r=this.target)==null||r.addEventListener(e,t,n),this.listeners.push([e,t,n])}};function xl(e){let{EventTarget:t}=ec(e);return e instanceof t?e:ic(e)}function Sl(e,t){let n=Math.abs(e.x),r=Math.abs(e.y);return typeof t==`number`?Math.sqrt(n**2+r**2)>t:`x`in t&&`y`in t?n>t.x&&r>t.y:`x`in t?n>t.x:`y`in t?r>t.y:!1}var Cl;(function(e){e.Click=`click`,e.DragStart=`dragstart`,e.Keydown=`keydown`,e.ContextMenu=`contextmenu`,e.Resize=`resize`,e.SelectionChange=`selectionchange`,e.VisibilityChange=`visibilitychange`})(Cl||={});function wl(e){e.preventDefault()}function Tl(e){e.stopPropagation()}var El;(function(e){e.Space=`Space`,e.Down=`ArrowDown`,e.Right=`ArrowRight`,e.Left=`ArrowLeft`,e.Up=`ArrowUp`,e.Esc=`Escape`,e.Enter=`Enter`,e.Tab=`Tab`})(El||={});var Dl={start:[El.Space,El.Enter],cancel:[El.Esc],end:[El.Space,El.Enter,El.Tab]},Ol=(e,t)=>{let{currentCoordinates:n}=t;switch(e.code){case El.Right:return{...n,x:n.x+25};case El.Left:return{...n,x:n.x-25};case El.Down:return{...n,y:n.y+25};case El.Up:return{...n,y:n.y-25}}},kl=class{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;let{event:{target:t}}=e;this.props=e,this.listeners=new bl(ic(t)),this.windowListeners=new bl(ec(t)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Cl.Resize,this.handleCancel),this.windowListeners.add(Cl.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Cl.Keydown,this.handleKeyDown))}handleStart(){let{activeNode:e,onStart:t}=this.props,n=e.node.current;n&&_l(n),t(Rc)}handleKeyDown(e){if(vc(e)){let{active:t,context:n,options:r}=this.props,{keyboardCodes:i=Dl,coordinateGetter:a=Ol,scrollBehavior:o=`smooth`}=r,{code:s}=e;if(i.end.includes(s)){this.handleEnd(e);return}if(i.cancel.includes(s)){this.handleCancel(e);return}let{collisionRect:c}=n.current,l=c?{x:c.left,y:c.top}:Rc;this.referenceCoordinates||=l;let u=a(e,{active:t,context:n.current,currentCoordinates:l});if(u){let t=gc(u,l),r={x:0,y:0},{scrollableAncestors:i}=n.current;for(let n of i){let i=e.code,{isTop:a,isRight:s,isLeft:c,isBottom:l,maxScroll:d,minScroll:f}=ul(n),p=pl(n),m={x:Math.min(i===El.Right?p.right-p.width/2:p.right,Math.max(i===El.Right?p.left:p.left+p.width/2,u.x)),y:Math.min(i===El.Down?p.bottom-p.height/2:p.bottom,Math.max(i===El.Down?p.top:p.top+p.height/2,u.y))},h=i===El.Right&&!s||i===El.Left&&!c,g=i===El.Down&&!l||i===El.Up&&!a;if(h&&m.x!==u.x){let e=n.scrollLeft+t.x,a=i===El.Right&&e<=d.x||i===El.Left&&e>=f.x;if(a&&!t.y){n.scrollTo({left:e,behavior:o});return}a?r.x=n.scrollLeft-e:r.x=i===El.Right?n.scrollLeft-d.x:n.scrollLeft-f.x,r.x&&n.scrollBy({left:-r.x,behavior:o});break}else if(g&&m.y!==u.y){let e=n.scrollTop+t.y,a=i===El.Down&&e<=d.y||i===El.Up&&e>=f.y;if(a&&!t.x){n.scrollTo({top:e,behavior:o});return}a?r.y=n.scrollTop-e:r.y=i===El.Down?n.scrollTop-d.y:n.scrollTop-f.y,r.y&&n.scrollBy({top:-r.y,behavior:o});break}}this.handleMove(e,hc(gc(u,this.referenceCoordinates),r))}}}handleMove(e,t){let{onMove:n}=this.props;e.preventDefault(),n(t)}handleEnd(e){let{onEnd:t}=this.props;e.preventDefault(),this.detach(),t()}handleCancel(e){let{onCancel:t}=this.props;e.preventDefault(),this.detach(),t()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}};kl.activators=[{eventName:`onKeyDown`,handler:(e,t,n)=>{let{keyboardCodes:r=Dl,onActivation:i}=t,{active:a}=n,{code:o}=e.nativeEvent;if(r.start.includes(o)){let t=a.activatorNode.current;return t&&e.target!==t?!1:(e.preventDefault(),i?.({event:e.nativeEvent}),!0)}return!1}}];function Al(e){return!!(e&&`distance`in e)}function jl(e){return!!(e&&`delay`in e)}var Ml=class{constructor(e,t,n){n===void 0&&(n=xl(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=t;let{event:r}=e,{target:i}=r;this.props=e,this.events=t,this.document=ic(i),this.documentListeners=new bl(this.document),this.listeners=new bl(n),this.windowListeners=new bl(ec(i)),this.initialCoordinates=bc(r)??Rc,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){let{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:n}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(Cl.Resize,this.handleCancel),this.windowListeners.add(Cl.DragStart,wl),this.windowListeners.add(Cl.VisibilityChange,this.handleCancel),this.windowListeners.add(Cl.ContextMenu,wl),this.documentListeners.add(Cl.Keydown,this.handleKeydown),t){if(n!=null&&n({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(jl(t)){this.timeoutId=setTimeout(this.handleStart,t.delay),this.handlePending(t);return}if(Al(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,t){let{active:n,onPending:r}=this.props;r(n,e,this.initialCoordinates,t)}handleStart(){let{initialCoordinates:e}=this,{onStart:t}=this.props;e&&(this.activated=!0,this.documentListeners.add(Cl.Click,Tl,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Cl.SelectionChange,this.removeTextSelection),t(e))}handleMove(e){let{activated:t,initialCoordinates:n,props:r}=this,{onMove:i,options:{activationConstraint:a}}=r;if(!n)return;let o=bc(e)??Rc,s=gc(n,o);if(!t&&a){if(Al(a)){if(a.tolerance!=null&&Sl(s,a.tolerance))return this.handleCancel();if(Sl(s,a.distance))return this.handleStart()}if(jl(a)&&Sl(s,a.tolerance))return this.handleCancel();this.handlePending(a,s);return}e.cancelable&&e.preventDefault(),i(o)}handleEnd(){let{onAbort:e,onEnd:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleCancel(){let{onAbort:e,onCancel:t}=this.props;this.detach(),this.activated||e(this.props.active),t()}handleKeydown(e){e.code===El.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}},Nl={cancel:{name:`pointercancel`},move:{name:`pointermove`},end:{name:`pointerup`}},Pl=class extends Ml{constructor(e){let{event:t}=e,n=ic(t.target);super(e,Nl,n)}};Pl.activators=[{eventName:`onPointerDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return!n.isPrimary||n.button!==0?!1:(r?.({event:n}),!0)}}];var Fl={move:{name:`mousemove`},end:{name:`mouseup`}},Il;(function(e){e[e.RightClick=2]=`RightClick`})(Il||={});var Ll=class extends Ml{constructor(e){super(e,Fl,ic(e.event.target))}};Ll.activators=[{eventName:`onMouseDown`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t;return n.button===Il.RightClick?!1:(r?.({event:n}),!0)}}];var Rl={cancel:{name:`touchcancel`},move:{name:`touchmove`},end:{name:`touchend`}},zl=class extends Ml{constructor(e){super(e,Rl)}static setup(){return window.addEventListener(Rl.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(Rl.move.name,e)};function e(){}}};zl.activators=[{eventName:`onTouchStart`,handler:(e,t)=>{let{nativeEvent:n}=e,{onActivation:r}=t,{touches:i}=n;return i.length>1?!1:(r?.({event:n}),!0)}}];var Bl;(function(e){e[e.Pointer=0]=`Pointer`,e[e.DraggableRect=1]=`DraggableRect`})(Bl||={});var Vl;(function(e){e[e.TreeOrder=0]=`TreeOrder`,e[e.ReversedTreeOrder=1]=`ReversedTreeOrder`})(Vl||={});function Hl(e){let{acceleration:t,activator:n=Bl.Pointer,canScroll:r,draggingRect:i,enabled:a,interval:o=5,order:s=Vl.TreeOrder,pointerCoordinates:c,scrollableAncestors:l,scrollableAncestorRects:u,delta:d,threshold:f}=e,p=Wl({delta:d,disabled:!a}),[m,h]=sc(),g=(0,b.useRef)({x:0,y:0}),_=(0,b.useRef)({x:0,y:0}),v=(0,b.useMemo)(()=>{switch(n){case Bl.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case Bl.DraggableRect:return i}},[n,i,c]),y=(0,b.useRef)(null),x=(0,b.useCallback)(()=>{let e=y.current;if(!e)return;let t=g.current.x*_.current.x,n=g.current.y*_.current.y;e.scrollBy(t,n)},[]),S=(0,b.useMemo)(()=>s===Vl.TreeOrder?[...l].reverse():l,[s,l]);(0,b.useEffect)(()=>{if(!a||!l.length||!v){h();return}for(let e of S){if(r?.(e)===!1)continue;let n=u[l.indexOf(e)];if(!n)continue;let{direction:i,speed:a}=fl(e,n,v,t,f);for(let e of[`x`,`y`])p[e][i[e]]||(a[e]=0,i[e]=0);if(a.x>0||a.y>0){h(),y.current=e,m(x,o),g.current=a,_.current=i;return}}g.current={x:0,y:0},_.current={x:0,y:0},h()},[t,x,r,h,a,o,JSON.stringify(v),JSON.stringify(p),m,l,S,u,JSON.stringify(f)])}var Ul={x:{[cl.Backward]:!1,[cl.Forward]:!1},y:{[cl.Backward]:!1,[cl.Forward]:!1}};function Wl(e){let{delta:t,disabled:n}=e,r=dc(t);return lc(e=>{if(n||!r||!e)return Ul;let i={x:Math.sign(t.x-r.x),y:Math.sign(t.y-r.y)};return{x:{[cl.Backward]:e.x[cl.Backward]||i.x===-1,[cl.Forward]:e.x[cl.Forward]||i.x===1},y:{[cl.Backward]:e.y[cl.Backward]||i.y===-1,[cl.Forward]:e.y[cl.Forward]||i.y===1}}},[n,t,r])}function Gl(e,t){let n=t==null?void 0:e.get(t),r=n?n.node.current:null;return lc(e=>t==null?null:r??e??null,[r,t])}function Kl(e,t){return(0,b.useMemo)(()=>e.reduce((e,n)=>{let{sensor:r}=n,i=r.activators.map(e=>({eventName:e.eventName,handler:t(e.handler,n)}));return[...e,...i]},[]),[e,t])}var ql;(function(e){e[e.Always=0]=`Always`,e[e.BeforeDragging=1]=`BeforeDragging`,e[e.WhileDragging=2]=`WhileDragging`})(ql||={});var Jl;(function(e){e.Optimized=`optimized`})(Jl||={});var Yl=new Map;function Xl(e,t){let{dragging:n,dependencies:r,config:i}=t,[a,o]=(0,b.useState)(null),{frequency:s,measure:c,strategy:l}=i,u=(0,b.useRef)(e),d=g(),f=cc(d),p=(0,b.useCallback)(function(e){e===void 0&&(e=[]),!f.current&&o(t=>t===null?e:t.concat(e.filter(e=>!t.includes(e))))},[f]),m=(0,b.useRef)(null),h=lc(t=>{if(d&&!n)return Yl;if(!t||t===Yl||u.current!==e||a!=null){let t=new Map;for(let n of e){if(!n)continue;if(a&&a.length>0&&!a.includes(n.id)&&n.rect.current){t.set(n.id,n.rect.current);continue}let e=n.node.current,r=e?new yl(c(e),e):null;n.rect.current=r,r&&t.set(n.id,r)}return t}return t},[e,a,n,d,c]);return(0,b.useEffect)(()=>{u.current=e},[e]),(0,b.useEffect)(()=>{d||p()},[n,d]),(0,b.useEffect)(()=>{a&&a.length>0&&o(null)},[JSON.stringify(a)]),(0,b.useEffect)(()=>{d||typeof s!=`number`||m.current!==null||(m.current=setTimeout(()=>{p(),m.current=null},s))},[s,d,p,...r]),{droppableRects:h,measureDroppableContainers:p,measuringScheduled:a!=null};function g(){switch(l){case ql.Always:return!1;case ql.BeforeDragging:return n;default:return!n}}}function L(e,t){return lc(n=>e?n||(typeof t==`function`?t(e):e):null,[t,e])}function Zl(e,t){return L(e,t)}function Ql(e){let{callback:t,disabled:n}=e,r=oc(t),i=(0,b.useMemo)(()=>{if(n||typeof window>`u`||window.MutationObserver===void 0)return;let{MutationObserver:e}=window;return new e(r)},[r,n]);return(0,b.useEffect)(()=>()=>i?.disconnect(),[i]),i}function $l(e){let{callback:t,disabled:n}=e,r=oc(t),i=(0,b.useMemo)(()=>{if(n||typeof window>`u`||window.ResizeObserver===void 0)return;let{ResizeObserver:e}=window;return new e(r)},[n]);return(0,b.useEffect)(()=>()=>i?.disconnect(),[i]),i}function eu(e){return new yl(Zc(e),e)}function tu(e,t,n){t===void 0&&(t=eu);let[r,i]=(0,b.useState)(null);function a(){i(r=>{if(!e)return null;if(e.isConnected===!1)return r??n??null;let i=t(e);return JSON.stringify(r)===JSON.stringify(i)?r:i})}let o=Ql({callback(t){if(e)for(let n of t){let{type:t,target:r}=n;if(t===`childList`&&r instanceof HTMLElement&&r.contains(e)){a();break}}}}),s=$l({callback:a});return ac(()=>{a(),e?(s?.observe(e),o?.observe(document.body,{childList:!0,subtree:!0})):(s?.disconnect(),o?.disconnect())},[e]),r}function nu(e){return Gc(e,L(e))}var ru=[];function iu(e){let t=(0,b.useRef)(e),n=lc(n=>e?n&&n!==ru&&e&&t.current&&e.parentNode===t.current.parentNode?n:nl(e):ru,[e]);return(0,b.useEffect)(()=>{t.current=e},[e]),n}function au(e){let[t,n]=(0,b.useState)(null),r=(0,b.useRef)(e),i=(0,b.useCallback)(e=>{let t=il(e.target);t&&n(e=>e?(e.set(t,sl(t)),new Map(e)):null)},[]);return(0,b.useEffect)(()=>{let t=r.current;if(e!==t){a(t);let o=e.map(e=>{let t=il(e);return t?(t.addEventListener(`scroll`,i,{passive:!0}),[t,sl(t)]):null}).filter(e=>e!=null);n(o.length?new Map(o):null),r.current=e}return()=>{a(e),a(t)};function a(e){e.forEach(e=>{il(e)?.removeEventListener(`scroll`,i)})}},[i,e]),(0,b.useMemo)(()=>e.length?t?Array.from(t.values()).reduce((e,t)=>hc(e,t),Rc):ml(e):Rc,[e,t])}function ou(e,t){t===void 0&&(t=[]);let n=(0,b.useRef)(null);return(0,b.useEffect)(()=>{n.current=null},t),(0,b.useEffect)(()=>{let t=e!==Rc;t&&!n.current&&(n.current=e),!t&&n.current&&(n.current=null)},[e]),n.current?gc(e,n.current):Rc}function su(e){(0,b.useEffect)(()=>{if(!Zs)return;let t=e.map(e=>{let{sensor:t}=e;return t.setup==null?void 0:t.setup()});return()=>{for(let e of t)e?.()}},e.map(e=>{let{sensor:t}=e;return t}))}function cu(e,t){return(0,b.useMemo)(()=>e.reduce((e,n)=>{let{eventName:r,handler:i}=n;return e[r]=e=>{i(e,t)},e},{}),[e,t])}function lu(e){return(0,b.useMemo)(()=>e?$c(e):null,[e])}var uu=[];function du(e,t){t===void 0&&(t=Zc);let[n]=e,r=lu(n?ec(n):null),[i,a]=(0,b.useState)(uu);function o(){a(()=>e.length?e.map(e=>ll(e)?r:new yl(t(e),e)):uu)}let s=$l({callback:o});return ac(()=>{s?.disconnect(),o(),e.forEach(e=>s?.observe(e))},[e]),i}function fu(e){if(!e)return null;if(e.children.length>1)return e;let t=e.children[0];return nc(t)?t:e}function pu(e){let{measure:t}=e,[n,r]=(0,b.useState)(null),i=$l({callback:(0,b.useCallback)(e=>{for(let{target:n}of e)if(nc(n)){r(e=>{let r=t(n);return e?{...e,width:r.width,height:r.height}:r});break}},[t])}),[a,o]=uc((0,b.useCallback)(e=>{let n=fu(e);i?.disconnect(),n&&i?.observe(n),r(n?t(n):null)},[t,i]));return(0,b.useMemo)(()=>({nodeRef:a,rect:n,setRef:o}),[n,a,o])}var mu=[{sensor:Pl,options:{}},{sensor:kl,options:{}}],hu={current:{}},gu={draggable:{measure:Qc},droppable:{measure:Qc,strategy:ql.WhileDragging,frequency:Jl.Optimized},dragOverlay:{measure:Zc}},_u=class extends Map{get(e){return e==null?void 0:super.get(e)??void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){return this.get(e)?.node.current??void 0}},vu={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new _u,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Fc},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:gu,measureDroppableContainers:Fc,windowRect:null,measuringScheduled:!1},yu={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:``},dispatch:Fc,draggableNodes:new Map,over:null,measureDroppableContainers:Fc},bu=(0,b.createContext)(yu),xu=(0,b.createContext)(vu);function Su(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new _u}}}function Cu(e,t){switch(t.type){case Pc.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case Pc.DragMove:return e.draggable.active==null?e:{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case Pc.DragEnd:case Pc.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case Pc.RegisterDroppable:{let{element:n}=t,{id:r}=n,i=new _u(e.droppable.containers);return i.set(r,n),{...e,droppable:{...e.droppable,containers:i}}}case Pc.SetDroppableDisabled:{let{id:n,key:r,disabled:i}=t,a=e.droppable.containers.get(n);if(!a||r!==a.key)return e;let o=new _u(e.droppable.containers);return o.set(n,{...a,disabled:i}),{...e,droppable:{...e.droppable,containers:o}}}case Pc.UnregisterDroppable:{let{id:n,key:r}=t,i=e.droppable.containers.get(n);if(!i||r!==i.key)return e;let a=new _u(e.droppable.containers);return a.delete(n),{...e,droppable:{...e.droppable,containers:a}}}default:return e}}function wu(e){let{disabled:t}=e,{active:n,activatorEvent:r,draggableNodes:i}=(0,b.useContext)(bu),a=dc(r),o=dc(n?.id);return(0,b.useEffect)(()=>{if(!t&&!r&&a&&o!=null){if(!vc(a)||document.activeElement===a.target)return;let e=i.get(o);if(!e)return;let{activatorNode:t,node:n}=e;if(!t.current&&!n.current)return;requestAnimationFrame(()=>{for(let e of[t.current,n.current]){if(!e)continue;let t=Cc(e);if(t){t.focus();break}}})}},[r,t,i,o,a]),null}function Tu(e,t){let{transform:n,...r}=t;return e!=null&&e.length?e.reduce((e,t)=>t({transform:e,...r}),n):n}function Eu(e){return(0,b.useMemo)(()=>({draggable:{...gu.draggable,...e?.draggable},droppable:{...gu.droppable,...e?.droppable},dragOverlay:{...gu.dragOverlay,...e?.dragOverlay}}),[e?.draggable,e?.droppable,e?.dragOverlay])}function Du(e){let{activeNode:t,measure:n,initialRect:r,config:i=!0}=e,a=(0,b.useRef)(!1),{x:o,y:s}=typeof i==`boolean`?{x:i,y:i}:i;ac(()=>{if(!o&&!s||!t){a.current=!1;return}if(a.current||!r)return;let e=t?.node.current;if(!e||e.isConnected===!1)return;let i=Gc(n(e),r);if(o||(i.x=0),s||(i.y=0),a.current=!0,Math.abs(i.x)>0||Math.abs(i.y)>0){let t=rl(e);t&&t.scrollBy({top:i.y,left:i.x})}},[t,o,s,r,n])}var Ou=(0,b.createContext)({...Rc,scaleX:1,scaleY:1}),ku;(function(e){e[e.Uninitialized=0]=`Uninitialized`,e[e.Initializing=1]=`Initializing`,e[e.Initialized=2]=`Initialized`})(ku||={});var Au=(0,b.memo)(function(e){let{id:t,accessibility:n,autoScroll:r=!0,children:i,sensors:a=mu,collisionDetection:o=Uc,measuring:s,modifiers:c,...l}=e,[u,d]=(0,b.useReducer)(Cu,void 0,Su),[f,p]=Ac(),[m,h]=(0,b.useState)(ku.Uninitialized),g=m===ku.Initialized,{draggable:{active:_,nodes:v,translate:y},droppable:{containers:x}}=u,S=_==null?null:v.get(_),C=(0,b.useRef)({initial:null,translated:null}),w=(0,b.useMemo)(()=>_==null?null:{id:_,data:S?.data??hu,rect:C},[_,S]),T=(0,b.useRef)(null),[E,D]=(0,b.useState)(null),[O,k]=(0,b.useState)(null),A=cc(l,Object.values(l)),ee=pc(`DndDescribedBy`,t),te=(0,b.useMemo)(()=>x.getEnabled(),[x]),ne=Eu(s),{droppableRects:re,measureDroppableContainers:ie,measuringScheduled:j}=Xl(te,{dragging:g,dependencies:[y.x,y.y],config:ne.droppable}),M=Gl(v,_),ae=(0,b.useMemo)(()=>O?bc(O):null,[O]),oe=Ie(),se=Zl(M,ne.draggable.measure);Du({activeNode:_==null?null:v.get(_),config:oe.layoutShiftCompensation,initialRect:se,measure:ne.draggable.measure});let ce=tu(M,ne.draggable.measure,se),le=tu(M?M.parentElement:null),ue=(0,b.useRef)({activatorEvent:null,active:null,activeNode:M,collisionRect:null,collisions:null,droppableRects:re,draggableNodes:v,draggingNode:null,draggingNodeRect:null,droppableContainers:x,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),de=x.getNodeFor(ue.current.over?.id),fe=pu({measure:ne.dragOverlay.measure}),pe=fe.nodeRef.current??M,me=g?fe.rect??ce:null,he=!!(fe.nodeRef.current&&fe.rect),ge=nu(he?null:ce),_e=lu(pe?ec(pe):null),N=iu(g?de??M:null),ve=du(N),ye=Tu(c,{transform:{x:y.x-ge.x,y:y.y-ge.y,scaleX:1,scaleY:1},activatorEvent:O,active:w,activeNodeRect:ce,containerNodeRect:le,draggingNodeRect:me,over:ue.current.over,overlayNodeRect:fe.rect,scrollableAncestors:N,scrollableAncestorRects:ve,windowRect:_e}),be=ae?hc(ae,y):null,xe=au(N),Se=ou(xe),Ce=ou(xe,[ce]),we=hc(ye,Se),Te=me?qc(me,ye):null,Ee=w&&Te?o({active:w,collisionRect:Te,droppableRects:re,droppableContainers:te,pointerCoordinates:be}):null,De=Vc(Ee,`id`),[Oe,ke]=(0,b.useState)(null),Ae=Wc(he?ye:hc(ye,Ce),Oe?.rect??null,ce),je=(0,b.useRef)(null),Me=(0,b.useCallback)((e,t)=>{let{sensor:n,options:r}=t;if(T.current==null)return;let i=v.get(T.current);if(!i)return;let a=e.nativeEvent;je.current=new n({active:T.current,activeNode:i,event:a,options:r,context:ue,onAbort(e){if(!v.get(e))return;let{onDragAbort:t}=A.current,n={id:e};t?.(n),f({type:`onDragAbort`,event:n})},onPending(e,t,n,r){if(!v.get(e))return;let{onDragPending:i}=A.current,a={id:e,constraint:t,initialCoordinates:n,offset:r};i?.(a),f({type:`onDragPending`,event:a})},onStart(e){let t=T.current;if(t==null)return;let n=v.get(t);if(!n)return;let{onDragStart:r}=A.current,i={activatorEvent:a,active:{id:t,data:n.data,rect:C}};(0,Xs.unstable_batchedUpdates)(()=>{r?.(i),h(ku.Initializing),d({type:Pc.DragStart,initialCoordinates:e,active:t}),f({type:`onDragStart`,event:i}),D(je.current),k(a)})},onMove(e){d({type:Pc.DragMove,coordinates:e})},onEnd:o(Pc.DragEnd),onCancel:o(Pc.DragCancel)});function o(e){return async function(){let{active:t,collisions:n,over:r,scrollAdjustedTranslate:i}=ue.current,o=null;if(t&&i){let{cancelDrop:s}=A.current;o={activatorEvent:a,active:t,collisions:n,delta:i,over:r},e===Pc.DragEnd&&typeof s==`function`&&await Promise.resolve(s(o))&&(e=Pc.DragCancel)}T.current=null,(0,Xs.unstable_batchedUpdates)(()=>{d({type:e}),h(ku.Uninitialized),ke(null),D(null),k(null),je.current=null;let t=e===Pc.DragEnd?`onDragEnd`:`onDragCancel`;if(o){let e=A.current[t];e?.(o),f({type:t,event:o})}})}}},[v]),Ne=Kl(a,(0,b.useCallback)((e,t)=>(n,r)=>{let i=n.nativeEvent,a=v.get(r);if(T.current!==null||!a||i.dndKit||i.defaultPrevented)return;let o={active:a};e(n,t.options,o)===!0&&(i.dndKit={capturedBy:t.sensor},T.current=r,Me(n,t))},[v,Me]));su(a),ac(()=>{ce&&m===ku.Initializing&&h(ku.Initialized)},[ce,m]),(0,b.useEffect)(()=>{let{onDragMove:e}=A.current,{active:t,activatorEvent:n,collisions:r,over:i}=ue.current;if(!t||!n)return;let a={active:t,activatorEvent:n,collisions:r,delta:{x:we.x,y:we.y},over:i};(0,Xs.unstable_batchedUpdates)(()=>{e?.(a),f({type:`onDragMove`,event:a})})},[we.x,we.y]),(0,b.useEffect)(()=>{let{active:e,activatorEvent:t,collisions:n,droppableContainers:r,scrollAdjustedTranslate:i}=ue.current;if(!e||T.current==null||!t||!i)return;let{onDragOver:a}=A.current,o=r.get(De),s=o&&o.rect.current?{id:o.id,rect:o.rect.current,data:o.data,disabled:o.disabled}:null,c={active:e,activatorEvent:t,collisions:n,delta:{x:i.x,y:i.y},over:s};(0,Xs.unstable_batchedUpdates)(()=>{ke(s),a?.(c),f({type:`onDragOver`,event:c})})},[De]),ac(()=>{ue.current={activatorEvent:O,active:w,activeNode:M,collisionRect:Te,collisions:Ee,droppableRects:re,draggableNodes:v,draggingNode:pe,draggingNodeRect:me,droppableContainers:x,over:Oe,scrollableAncestors:N,scrollAdjustedTranslate:we},C.current={initial:me,translated:Te}},[w,M,Ee,Te,v,pe,me,re,x,Oe,N,we]),Hl({...oe,delta:y,draggingRect:Te,pointerCoordinates:be,scrollableAncestors:N,scrollableAncestorRects:ve});let Pe=(0,b.useMemo)(()=>({active:w,activeNode:M,activeNodeRect:ce,activatorEvent:O,collisions:Ee,containerNodeRect:le,dragOverlay:fe,draggableNodes:v,droppableContainers:x,droppableRects:re,over:Oe,measureDroppableContainers:ie,scrollableAncestors:N,scrollableAncestorRects:ve,measuringConfiguration:ne,measuringScheduled:j,windowRect:_e}),[w,M,ce,O,Ee,le,fe,v,x,re,Oe,ie,N,ve,ne,j,_e]),Fe=(0,b.useMemo)(()=>({activatorEvent:O,activators:Ne,active:w,activeNodeRect:ce,ariaDescribedById:{draggable:ee},dispatch:d,draggableNodes:v,over:Oe,measureDroppableContainers:ie}),[O,Ne,w,ce,d,ee,v,Oe,ie]);return b.createElement(Oc.Provider,{value:p},b.createElement(bu.Provider,{value:Fe},b.createElement(xu.Provider,{value:Pe},b.createElement(Ou.Provider,{value:Ae},i)),b.createElement(wu,{disabled:n?.restoreFocus===!1})),b.createElement(Nc,{...n,hiddenTextDescribedById:ee}));function Ie(){let e=E?.autoScrollEnabled===!1,t=typeof r==`object`?r.enabled===!1:r===!1,n=g&&!e&&!t;return typeof r==`object`?{...r,enabled:n}:{enabled:n}}}),ju=(0,b.createContext)(null),Mu=`button`,Nu=`Draggable`;function Pu(e){let{id:t,data:n,disabled:r=!1,attributes:i}=e,a=pc(Nu),{activators:o,activatorEvent:s,active:c,activeNodeRect:l,ariaDescribedById:u,draggableNodes:d,over:f}=(0,b.useContext)(bu),{role:p=Mu,roleDescription:m=`draggable`,tabIndex:h=0}=i??{},g=c?.id===t,_=(0,b.useContext)(g?Ou:ju),[v,y]=uc(),[x,S]=uc(),C=cu(o,t),w=cc(n);return ac(()=>(d.set(t,{id:t,key:a,node:v,activatorNode:x,data:w}),()=>{let e=d.get(t);e&&e.key===a&&d.delete(t)}),[d,t]),{active:c,activatorEvent:s,activeNodeRect:l,attributes:(0,b.useMemo)(()=>({role:p,tabIndex:h,"aria-disabled":r,"aria-pressed":g&&p===Mu?!0:void 0,"aria-roledescription":m,"aria-describedby":u.draggable}),[r,p,h,g,m,u.draggable]),isDragging:g,listeners:r?void 0:C,node:v,over:f,setNodeRef:y,setActivatorNodeRef:S,transform:_}}function Fu(){return(0,b.useContext)(xu)}var Iu=`Droppable`,Lu={timeout:25};function Ru(e){let{data:t,disabled:n=!1,id:r,resizeObserverConfig:i}=e,a=pc(Iu),{active:o,dispatch:s,over:c,measureDroppableContainers:l}=(0,b.useContext)(bu),u=(0,b.useRef)({disabled:n}),d=(0,b.useRef)(!1),f=(0,b.useRef)(null),p=(0,b.useRef)(null),{disabled:m,updateMeasurementsFor:h,timeout:g}={...Lu,...i},_=cc(h??r),v=$l({callback:(0,b.useCallback)(()=>{if(!d.current){d.current=!0;return}p.current!=null&&clearTimeout(p.current),p.current=setTimeout(()=>{l(Array.isArray(_.current)?_.current:[_.current]),p.current=null},g)},[g]),disabled:m||!o}),[y,x]=uc((0,b.useCallback)((e,t)=>{v&&(t&&(v.unobserve(t),d.current=!1),e&&v.observe(e))},[v])),S=cc(t);return(0,b.useEffect)(()=>{!v||!y.current||(v.disconnect(),d.current=!1,v.observe(y.current))},[y,v]),(0,b.useEffect)(()=>(s({type:Pc.RegisterDroppable,element:{id:r,key:a,disabled:n,node:y,rect:f,data:S}}),()=>s({type:Pc.UnregisterDroppable,key:a,id:r})),[r]),(0,b.useEffect)(()=>{n!==u.current.disabled&&(s({type:Pc.SetDroppableDisabled,id:r,key:a,disabled:n}),u.current.disabled=n)},[r,a,n,s]),{active:o,rect:f,isOver:c?.id===r,node:y,over:c,setNodeRef:x}}function zu(e){let{animation:t,children:n}=e,[r,i]=(0,b.useState)(null),[a,o]=(0,b.useState)(null),s=dc(n);return!n&&!r&&s&&i(s),ac(()=>{if(!a)return;let e=r?.key,n=r?.props.id;if(e==null||n==null){i(null);return}Promise.resolve(t(n,a)).then(()=>{i(null)})},[t,r,a]),b.createElement(b.Fragment,null,n,r?(0,b.cloneElement)(r,{ref:o}):null)}var Bu={x:0,y:0,scaleX:1,scaleY:1};function Vu(e){let{children:t}=e;return b.createElement(bu.Provider,{value:yu},b.createElement(Ou.Provider,{value:Bu},t))}var Hu={position:`fixed`,touchAction:`none`},Uu=e=>vc(e)?`transform 250ms ease`:void 0,Wu=(0,b.forwardRef)((e,t)=>{let{as:n,activatorEvent:r,adjustScale:i,children:a,className:o,rect:s,style:c,transform:l,transition:u=Uu}=e;if(!s)return null;let d=i?l:{...l,scaleX:1,scaleY:1},f={...Hu,width:s.width,height:s.height,top:s.top,left:s.left,transform:xc.Transform.toString(d),transformOrigin:i&&r?zc(r,s):void 0,transition:typeof u==`function`?u(r):u,...c};return b.createElement(n,{className:o,style:f,ref:t},a)}),Gu={duration:250,easing:`ease`,keyframes:e=>{let{transform:{initial:t,final:n}}=e;return[{transform:xc.Transform.toString(t)},{transform:xc.Transform.toString(n)}]},sideEffects:(e=>t=>{let{active:n,dragOverlay:r}=t,i={},{styles:a,className:o}=e;if(a!=null&&a.active)for(let[e,t]of Object.entries(a.active))t!==void 0&&(i[e]=n.node.style.getPropertyValue(e),n.node.style.setProperty(e,t));if(a!=null&&a.dragOverlay)for(let[e,t]of Object.entries(a.dragOverlay))t!==void 0&&r.node.style.setProperty(e,t);return o!=null&&o.active&&n.node.classList.add(o.active),o!=null&&o.dragOverlay&&r.node.classList.add(o.dragOverlay),function(){for(let[e,t]of Object.entries(i))n.node.style.setProperty(e,t);o!=null&&o.active&&n.node.classList.remove(o.active)}})({styles:{active:{opacity:`0`}}})};function Ku(e){let{config:t,draggableNodes:n,droppableContainers:r,measuringConfiguration:i}=e;return oc((e,a)=>{if(t===null)return;let o=n.get(e);if(!o)return;let s=o.node.current;if(!s)return;let c=fu(a);if(!c)return;let{transform:l}=ec(a).getComputedStyle(a),u=Jc(l);if(!u)return;let d=typeof t==`function`?t:qu(t);return _l(s,i.draggable.measure),d({active:{id:e,data:o.data,node:s,rect:i.draggable.measure(s)},draggableNodes:n,dragOverlay:{node:a,rect:i.dragOverlay.measure(c)},droppableContainers:r,measuringConfiguration:i,transform:u})})}function qu(e){let{duration:t,easing:n,sideEffects:r,keyframes:i}={...Gu,...e};return e=>{let{active:a,dragOverlay:o,transform:s,...c}=e;if(!t)return;let l={x:o.rect.left-a.rect.left,y:o.rect.top-a.rect.top},u={scaleX:s.scaleX===1?1:a.rect.width*s.scaleX/o.rect.width,scaleY:s.scaleY===1?1:a.rect.height*s.scaleY/o.rect.height},d={x:s.x-l.x,y:s.y-l.y,...u},f=i({...c,active:a,dragOverlay:o,transform:{initial:s,final:d}}),[p]=f,m=f[f.length-1];if(JSON.stringify(p)===JSON.stringify(m))return;let h=r?.({active:a,dragOverlay:o,...c}),g=o.node.animate(f,{duration:t,easing:n,fill:`forwards`});return new Promise(e=>{g.onfinish=()=>{h?.(),e()}})}}var Ju=0;function Yu(e){return(0,b.useMemo)(()=>{if(e!=null)return Ju++,Ju},[e])}var Xu=b.memo(e=>{let{adjustScale:t=!1,children:n,dropAnimation:r,style:i,transition:a,modifiers:o,wrapperElement:s=`div`,className:c,zIndex:l=999}=e,{activatorEvent:u,active:d,activeNodeRect:f,containerNodeRect:p,draggableNodes:m,droppableContainers:h,dragOverlay:g,over:_,measuringConfiguration:v,scrollableAncestors:y,scrollableAncestorRects:x,windowRect:S}=Fu(),C=(0,b.useContext)(Ou),w=Yu(d?.id),T=Tu(o,{activatorEvent:u,active:d,activeNodeRect:f,containerNodeRect:p,draggingNodeRect:g.rect,over:_,overlayNodeRect:g.rect,scrollableAncestors:y,scrollableAncestorRects:x,transform:C,windowRect:S}),E=L(f),D=Ku({config:r,draggableNodes:m,droppableContainers:h,measuringConfiguration:v}),O=E?g.setRef:void 0;return b.createElement(Vu,null,b.createElement(zu,{animation:D},d&&w?b.createElement(Wu,{key:w,id:d.id,ref:O,as:s,activatorEvent:u,adjustScale:t,className:c,transition:a,rect:E,style:{zIndex:l,...i},transform:T},n):null))}),Zu=e=>e.type===`checkbox`,Qu=e=>e instanceof Date,$u=e=>e==null,ed=e=>typeof e==`object`,td=e=>!$u(e)&&!Array.isArray(e)&&ed(e)&&!Qu(e),nd=e=>td(e)&&e.target?Zu(e.target)?e.target.checked:e.target.value:e,rd=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,id=(e,t)=>e.has(rd(t)),ad=e=>{let t=e.constructor&&e.constructor.prototype;return td(t)&&t.hasOwnProperty(`isPrototypeOf`)},od=typeof window<`u`&&window.HTMLElement!==void 0&&typeof document<`u`;function sd(e){if(e instanceof Date)return new Date(e);let t=typeof FileList<`u`&&e instanceof FileList;if(od&&(e instanceof Blob||t))return e;let n=Array.isArray(e);if(!n&&!(td(e)&&ad(e)))return e;let r=n?[]:Object.create(Object.getPrototypeOf(e));for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=sd(e[t]));return r}var cd=e=>/^\w*$/.test(e),ld=e=>e===void 0,ud=e=>Array.isArray(e)?e.filter(Boolean):[],dd=e=>ud(e.replace(/["|']|\]/g,``).split(/\.|\[/)),R=(e,t,n)=>{if(!t||!td(e))return n;let r=(cd(t)?[t]:dd(t)).reduce((e,t)=>$u(e)?e:e[t],e);return ld(r)||r===e?ld(e[t])?n:e[t]:r},fd=e=>typeof e==`boolean`,pd=e=>typeof e==`function`,md=(e,t,n)=>{let r=-1,i=cd(t)?[t]:dd(t),a=i.length,o=a-1;for(;++r<a;){let t=i[r],a=n;if(r!==o){let n=e[t];a=td(n)||Array.isArray(n)?n:isNaN(+i[r+1])?{}:[]}if(t===`__proto__`||t===`constructor`||t===`prototype`)return;e[t]=a,e=e[t]}},hd={BLUR:`blur`,FOCUS_OUT:`focusout`,CHANGE:`change`},gd={onBlur:`onBlur`,onChange:`onChange`,onSubmit:`onSubmit`,onTouched:`onTouched`,all:`all`},_d={max:`max`,min:`min`,maxLength:`maxLength`,minLength:`minLength`,pattern:`pattern`,required:`required`,validate:`validate`},vd=b.createContext(null);vd.displayName=`HookFormControlContext`;var yd=(e,t,n,r=!0)=>{let i={defaultValues:t._defaultValues};for(let a in e)Object.defineProperty(i,a,{get:()=>{let i=a;return t._proxyFormState[i]!==gd.all&&(t._proxyFormState[i]=!r||gd.all),n&&(n[i]=!0),e[i]}});return i},bd=typeof window<`u`?b.useLayoutEffect:b.useEffect,xd=e=>typeof e==`string`,Sd=(e,t,n,r,i)=>xd(e)?(r&&t.watch.add(e),R(n,e,i)):Array.isArray(e)?e.map(e=>(r&&t.watch.add(e),R(n,e))):(r&&(t.watchAll=!0),n),Cd=e=>$u(e)||!ed(e);function wd(e,t,n=new WeakSet){if(Cd(e)||Cd(t))return Object.is(e,t);if(Qu(e)&&Qu(t))return Object.is(e.getTime(),t.getTime());let r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;if(n.has(e)||n.has(t))return!0;n.add(e),n.add(t);for(let a of r){let r=e[a];if(!i.includes(a))return!1;if(a!==`ref`){let e=t[a];if(Qu(r)&&Qu(e)||td(r)&&td(e)||Array.isArray(r)&&Array.isArray(e)?!wd(r,e,n):!Object.is(r,e))return!1}}return!0}var Td=b.createContext(null);Td.displayName=`HookFormContext`;var Ed=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{},Dd=e=>Array.isArray(e)?e:[e],Od=()=>{let e=[];return{get observers(){return e},next:t=>{for(let n of e)n.next&&n.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}};function kd(e,t){let n={};for(let r in e)if(e.hasOwnProperty(r)){let i=e[r],a=t[r];if(i&&td(i)&&a){let e=kd(i,a);td(e)&&(n[r]=e)}else e[r]&&(n[r]=a)}return n}var Ad=e=>td(e)&&!Object.keys(e).length,jd=e=>e.type===`file`,Md=e=>{if(!od)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},z=e=>e.type===`select-multiple`,Nd=e=>e.type===`radio`,Pd=e=>Nd(e)||Zu(e),Fd=e=>Md(e)&&e.isConnected;function Id(e,t){let n=t.slice(0,-1).length,r=0;for(;r<n;)e=ld(e)?r++:e[t[r++]];return e}function Ld(e){for(let t in e)if(e.hasOwnProperty(t)&&!ld(e[t]))return!1;return!0}function Rd(e,t){let n=Array.isArray(t)?t:cd(t)?[t]:dd(t),r=n.length===1?e:Id(e,n),i=n.length-1,a=n[i];return r&&delete r[a],i!==0&&(td(r)&&Ad(r)||Array.isArray(r)&&Ld(r))&&Rd(e,n.slice(0,-1)),e}var zd=e=>{for(let t in e)if(pd(e[t]))return!0;return!1};function Bd(e){return Array.isArray(e)||td(e)&&!zd(e)}function Vd(e,t={}){for(let n in e){let r=e[n];Bd(r)?(t[n]=Array.isArray(r)?[]:{},Vd(r,t[n])):ld(r)||(t[n]=!0)}return t}function Hd(e,t,n){n||=Vd(t);for(let r in e){let i=e[r];if(Bd(i))ld(t)||Cd(n[r])?n[r]=Vd(i,Array.isArray(i)?[]:{}):Hd(i,$u(t)?{}:t[r],n[r]);else{let e=t[r];n[r]=!wd(i,e)}}return n}var Ud={value:!1,isValid:!1},Wd={value:!0,isValid:!0},Gd=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!ld(e[0].attributes.value)?ld(e[0].value)||e[0].value===``?Wd:{value:e[0].value,isValid:!0}:Wd:Ud}return Ud},Kd=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>ld(e)?e:t?e===``?NaN:e&&+e:n&&xd(e)?new Date(e):r?r(e):e,qd={isValid:!1,value:null},Jd=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,qd):qd;function Yd(e){let t=e.ref;return jd(t)?t.files:Nd(t)?Jd(e.refs).value:z(t)?[...t.selectedOptions].map(({value:e})=>e):Zu(t)?Gd(e.refs).value:Kd(ld(t.value)?e.ref.value:t.value,e)}var Xd=(e,t,n,r)=>{let i={};for(let n of e){let e=R(t,n);e&&md(i,n,e._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},Zd=e=>e instanceof RegExp,Qd=e=>ld(e)?e:Zd(e)?e.source:td(e)?Zd(e.value)?e.value.source:e.value:e,$d=e=>({isOnSubmit:!e||e===gd.onSubmit,isOnBlur:e===gd.onBlur,isOnChange:e===gd.onChange,isOnAll:e===gd.all,isOnTouch:e===gd.onTouched}),ef=`AsyncFunction`,tf=e=>!!e&&!!e.validate&&!!(pd(e.validate)&&e.validate.constructor.name===ef||td(e.validate)&&Object.values(e.validate).find(e=>e.constructor.name===ef)),nf=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate),rf=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),af=(e,t,n,r)=>{for(let i of n||Object.keys(e)){let n=R(e,i);if(n){let{_f:e,...a}=n;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],i)&&!r||e.ref&&t(e.ref,e.name)&&!r)return!0;if(af(a,t))break}else if(td(a)&&af(a,t))break}}};function of(e,t,n){let r=R(e,n);if(r||cd(n))return{error:r,name:n};let i=n.split(`.`);for(;i.length;){let r=i.join(`.`),a=R(t,r),o=R(e,r);if(a&&!Array.isArray(a)&&n!==r)return{name:n};if(o&&o.type)return{name:r,error:o};if(o&&o.root&&o.root.type)return{name:`${r}.root`,error:o.root};i.pop()}return{name:n}}var sf=(e,t,n,r)=>{n(e);let{name:i,...a}=e;return Ad(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find(e=>t[e]===(!r||gd.all))},cf=(e,t,n)=>!e||!t||e===t||Dd(e).some(e=>e&&(n?e===t:e.startsWith(t)||t.startsWith(e))),lf=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,uf=(e,t)=>!ud(R(e,t)).length&&Rd(e,t),df=(e,t,n)=>{let r=Dd(R(e,n));return md(r,`root`,t[n]),md(e,n,r),e};function ff(e,t,n=`validate`){if(xd(e)||Array.isArray(e)&&e.every(xd)||fd(e)&&!e)return{type:n,message:xd(e)?e:``,ref:t}}var pf=e=>td(e)&&!Zd(e)?e:{value:e,message:``},mf=async(e,t,n,r,i,a)=>{let{ref:o,refs:s,required:c,maxLength:l,minLength:u,min:d,max:f,pattern:p,validate:m,name:h,valueAsNumber:g,mount:_}=e._f,v=R(n,h);if(!_||t.has(h))return{};let y=s?s[0]:o,b=e=>{i&&y.reportValidity&&(y.setCustomValidity(fd(e)?``:e||``),y.reportValidity())},x={},S=Nd(o),C=Zu(o),w=S||C,T=(g||jd(o))&&ld(o.value)&&ld(v)||Md(o)&&o.value===``||v===``||Array.isArray(v)&&!v.length,E=Ed.bind(null,h,r,x),D=(e,t,n,r=_d.maxLength,i=_d.minLength)=>{let a=e?t:n;x[h]={type:e?r:i,message:a,ref:o,...E(e?r:i,a)}};if(a?!Array.isArray(v)||!v.length:c&&(!w&&(T||$u(v))||fd(v)&&!v||C&&!Gd(s).isValid||S&&!Jd(s).isValid)){let{value:e,message:t}=xd(c)?{value:!!c,message:c}:pf(c);if(e&&(x[h]={type:_d.required,message:t,ref:y,...E(_d.required,t)},!r))return b(t),x}if(!T&&(!$u(d)||!$u(f))){let e,t,n=pf(f),i=pf(d);if(!$u(v)&&!isNaN(v)){let r=o.valueAsNumber||v&&+v;$u(n.value)||(e=r>n.value),$u(i.value)||(t=r<i.value)}else{let r=o.valueAsDate||new Date(v),a=e=>new Date(new Date().toDateString()+` `+e),s=o.type==`time`,c=o.type==`week`;xd(n.value)&&v&&(e=s?a(v)>a(n.value):c?v>n.value:r>new Date(n.value)),xd(i.value)&&v&&(t=s?a(v)<a(i.value):c?v<i.value:r<new Date(i.value))}if((e||t)&&(D(!!e,n.message,i.message,_d.max,_d.min),!r))return b(x[h].message),x}if((l||u)&&!T&&(xd(v)||a&&Array.isArray(v))){let e=pf(l),t=pf(u),n=!$u(e.value)&&v.length>+e.value,i=!$u(t.value)&&v.length<+t.value;if((n||i)&&(D(n,e.message,t.message),!r))return b(x[h].message),x}if(p&&!T&&xd(v)){let{value:e,message:t}=pf(p);if(Zd(e)&&!v.match(e)&&(x[h]={type:_d.pattern,message:t,ref:o,...E(_d.pattern,t)},!r))return b(t),x}if(m){if(pd(m)){let e=ff(await m(v,n),y);if(e&&(x[h]={...e,...E(_d.validate,e.message)},!r))return b(e.message),x}else if(td(m)){let e={};for(let t in m){if(!Ad(e)&&!r)break;let i=ff(await m[t](v,n),y,t);i&&(e={...i,...E(t,i.message)},b(i.message),r&&(x[h]=e))}if(!Ad(e)&&(x[h]={ref:y,...e},!r))return x}}return b(!0),x},hf={mode:gd.onSubmit,reValidateMode:gd.onChange,shouldFocusError:!0};function gf(e={}){let t={...hf,...e},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:pd(t.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1},r={},i=(td(t.defaultValues)||td(t.values))&&sd(t.defaultValues||t.values)||{},a=t.shouldUnregister?{}:sd(i),o={action:!1,mount:!1,watch:!1,keepIsValid:!1},s={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},c,l=0,u={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={...u},f={...d},p={array:Od(),state:Od()},m=t.criteriaMode===gd.all,h=e=>t=>{clearTimeout(l),l=setTimeout(e,t)},g=async e=>{if(!o.keepIsValid&&!t.disabled&&(d.isValid||f.isValid||e)){let e;t.resolver?(e=Ad((await w()).errors),_()):e=await E(r,!0),e!==n.isValid&&p.state.next({isValid:e})}},_=(e,r)=>{!t.disabled&&(d.isValidating||d.validatingFields||f.isValidating||f.validatingFields)&&((e||Array.from(s.mount)).forEach(e=>{e&&(r?md(n.validatingFields,e,r):Rd(n.validatingFields,e))}),p.state.next({validatingFields:n.validatingFields,isValidating:!Ad(n.validatingFields)}))},v=(e,s=[],c,l,u=!0,m=!0)=>{if(l&&c&&!t.disabled){if(o.action=!0,m&&Array.isArray(R(r,e))){let t=c(R(r,e),l.argA,l.argB);u&&md(r,e,t)}if(m&&Array.isArray(R(n.errors,e))){let t=c(R(n.errors,e),l.argA,l.argB);u&&md(n.errors,e,t),uf(n.errors,e)}if((d.touchedFields||f.touchedFields)&&m&&Array.isArray(R(n.touchedFields,e))){let t=c(R(n.touchedFields,e),l.argA,l.argB);u&&md(n.touchedFields,e,t)}(d.dirtyFields||f.dirtyFields)&&(n.dirtyFields=Hd(i,a)),p.state.next({name:e,isDirty:O(e,s),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else md(a,e,s)},y=(e,t)=>{md(n.errors,e,t),p.state.next({errors:n.errors})},b=e=>{n.errors=e,p.state.next({errors:n.errors,isValid:!1})},x=(e,t,n,s)=>{let c=R(r,e);if(c){let r=R(a,e,ld(n)?R(i,e):n);ld(r)||s&&s.defaultChecked||t?md(a,e,t?r:Yd(c._f)):ee(e,r),o.mount&&!o.action&&g()}},S=(e,r,a,o,s)=>{let c=!1,l=!1,u={name:e};if(!t.disabled){if(!a||o){(d.isDirty||f.isDirty)&&(l=n.isDirty,n.isDirty=u.isDirty=O(),c=l!==u.isDirty);let t=wd(R(i,e),r);l=!!R(n.dirtyFields,e),t?Rd(n.dirtyFields,e):md(n.dirtyFields,e,!0),u.dirtyFields=n.dirtyFields,c||=(d.dirtyFields||f.dirtyFields)&&l!==!t}if(a){let t=R(n.touchedFields,e);t||(md(n.touchedFields,e,a),u.touchedFields=n.touchedFields,c||=(d.touchedFields||f.touchedFields)&&t!==a)}c&&s&&p.state.next(u)}return c?u:{}},C=(e,r,i,a)=>{let o=R(n.errors,e),s=(d.isValid||f.isValid)&&fd(r)&&n.isValid!==r;if(t.delayError&&i?(c=h(()=>y(e,i)),c(t.delayError)):(clearTimeout(l),c=null,i?md(n.errors,e,i):Rd(n.errors,e)),(i?!wd(o,i):o)||!Ad(a)||s){let t={...a,...s&&fd(r)?{isValid:r}:{},errors:n.errors,name:e};n={...n,...t},p.state.next(t)}},w=async e=>(_(e,!0),await t.resolver(a,t.context,Xd(e||s.mount,r,t.criteriaMode,t.shouldUseNativeValidation))),T=async e=>{let{errors:t}=await w(e);if(_(e),e)for(let r of e){let e=R(t,r);e?md(n.errors,r,e):Rd(n.errors,r)}else n.errors=t;return t},E=async(r,i,o={valid:!0})=>{for(let c in r){let l=r[c];if(l){let{_f:r,...c}=l;if(r){let c=s.array.has(r.name),u=l._f&&tf(l._f);u&&d.validatingFields&&_([r.name],!0);let f=await mf(l,s.disabled,a,m,t.shouldUseNativeValidation&&!i,c);if(u&&d.validatingFields&&_([r.name]),f[r.name]&&(o.valid=!1,i||e.shouldUseNativeValidation))break;!i&&(R(f,r.name)?c?df(n.errors,f,r.name):md(n.errors,r.name,f[r.name]):Rd(n.errors,r.name))}!Ad(c)&&await E(c,i,o)}}return o.valid},D=()=>{for(let e of s.unMount){let t=R(r,e);t&&(t._f.refs?t._f.refs.every(e=>!Fd(e)):!Fd(t._f.ref))&&de(e)}s.unMount=new Set},O=(e,n)=>!t.disabled&&(e&&n&&md(a,e,n),!wd(M(),i)),k=(e,t,n)=>Sd(e,s,{...o.mount?a:ld(t)?i:xd(e)?{[e]:t}:t},n,t),A=e=>ud(R(o.mount?a:i,e,t.shouldUnregister?R(i,e,[]):[])),ee=(e,t,n={})=>{let i=R(r,e),o=t;if(i){let n=i._f;n&&(!n.disabled&&md(a,e,Kd(t,n)),o=Md(n.ref)&&$u(t)?``:t,z(n.ref)?[...n.ref.options].forEach(e=>e.selected=o.includes(e.value)):n.refs?Zu(n.ref)?n.refs.forEach(e=>{(!e.defaultChecked||!e.disabled)&&(Array.isArray(o)?e.checked=!!o.find(t=>t===e.value):e.checked=o===e.value||!!o)}):n.refs.forEach(e=>e.checked=e.value===o):jd(n.ref)?n.ref.value=``:(n.ref.value=o,n.ref.type||p.state.next({name:e,values:sd(a)})))}(n.shouldDirty||n.shouldTouch)&&S(e,o,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&j(e)},te=(e,t,n)=>{for(let i in t){if(!t.hasOwnProperty(i))return;let a=t[i],o=e+`.`+i,c=R(r,o);(s.array.has(e)||td(a)||c&&!c._f)&&!Qu(a)?te(o,a,n):ee(o,a,n)}},ne=(e,t,c={})=>{let l=R(r,e),u=s.array.has(e),m=sd(t);md(a,e,m),u?(p.array.next({name:e,values:sd(a)}),(d.isDirty||d.dirtyFields||f.isDirty||f.dirtyFields)&&c.shouldDirty&&p.state.next({name:e,dirtyFields:Hd(i,a),isDirty:O(e,m)})):l&&!l._f&&!$u(m)?te(e,m,c):ee(e,m,c),rf(e,s)?p.state.next({...n,name:e,values:sd(a)}):p.state.next({name:o.mount?e:void 0,values:sd(a)})},re=async e=>{o.mount=!0;let i=e.target,l=i.name,u=!0,h=R(r,l),v=e=>{u=Number.isNaN(e)||Qu(e)&&isNaN(e.getTime())||wd(e,R(a,l,e))},y=$d(t.mode),b=$d(t.reValidateMode);if(h){let o,x,T=i.type?Yd(h._f):nd(e),D=e.type===hd.BLUR||e.type===hd.FOCUS_OUT,O=!nf(h._f)&&!t.resolver&&!R(n.errors,l)&&!h._f.deps||lf(D,R(n.touchedFields,l),n.isSubmitted,b,y),k=rf(l,s,D);md(a,l,T),D?(!i||!i.readOnly)&&(h._f.onBlur&&h._f.onBlur(e),c&&c(0)):h._f.onChange&&h._f.onChange(e);let A=S(l,T,D),ee=!Ad(A)||k;if(!D&&p.state.next({name:l,type:e.type,values:sd(a)}),O)return(d.isValid||f.isValid)&&(t.mode===`onBlur`?D&&g():D||g()),ee&&p.state.next({name:l,...k?{}:A});if(!D&&k&&p.state.next({...n}),t.resolver){let{errors:e}=await w([l]);if(_([l]),v(T),u){let t=of(n.errors,r,l),i=of(e,r,t.name||l);o=i.error,l=i.name,x=Ad(e)}}else _([l],!0),o=(await mf(h,s.disabled,a,m,t.shouldUseNativeValidation))[l],_([l]),v(T),u&&(o?x=!1:(d.isValid||f.isValid)&&(x=await E(r,!0)));u&&(h._f.deps&&(!Array.isArray(h._f.deps)||h._f.deps.length>0)&&j(h._f.deps),C(l,x,o,A))}},ie=(e,t)=>{if(R(n.errors,t)&&e.focus)return e.focus(),1},j=async(e,i={})=>{let a,o,c=Dd(e);if(t.resolver){let t=await T(ld(e)?e:c);a=Ad(t),o=e?!c.some(e=>R(t,e)):a}else e?(o=(await Promise.all(c.map(async e=>{let t=R(r,e);return await E(t&&t._f?{[e]:t}:t)}))).every(Boolean),!(!o&&!n.isValid)&&g()):o=a=await E(r);return p.state.next({...!xd(e)||(d.isValid||f.isValid)&&a!==n.isValid?{}:{name:e},...t.resolver||!e?{isValid:a}:{},errors:n.errors}),i.shouldFocus&&!o&&af(r,ie,e?c:s.mount),o},M=(e,t)=>{let r={...o.mount?a:i};return t&&(r=kd(t.dirtyFields?n.dirtyFields:n.touchedFields,r)),ld(e)?r:xd(e)?R(r,e):e.map(e=>R(r,e))},ae=(e,t)=>({invalid:!!R((t||n).errors,e),isDirty:!!R((t||n).dirtyFields,e),error:R((t||n).errors,e),isValidating:!!R(n.validatingFields,e),isTouched:!!R((t||n).touchedFields,e)}),oe=e=>{let t=e?Dd(e):void 0;t?.forEach(e=>Rd(n.errors,e)),t?t.forEach(e=>{p.state.next({name:e,errors:n.errors})}):p.state.next({errors:{}})},se=(e,t,i)=>{let a=(R(r,e,{_f:{}})._f||{}).ref,{ref:o,message:s,type:c,...l}=R(n.errors,e)||{};md(n.errors,e,{...l,...t,ref:a}),p.state.next({name:e,errors:n.errors,isValid:!1}),i&&i.shouldFocus&&a&&a.focus&&a.focus()},ce=(e,t)=>pd(e)?p.state.subscribe({next:n=>`values`in n&&e(k(void 0,t),n)}):k(e,t,!0),le=e=>p.state.subscribe({next:t=>{cf(e.name,t.name,e.exact)&&sf(t,e.formState||d,be,e.reRenderRoot)&&e.callback({values:{...a},...n,...t,defaultValues:i})}}).unsubscribe,ue=e=>(o.mount=!0,f={...f,...e.formState},le({...e,formState:{...u,...e.formState}})),de=(e,o={})=>{for(let c of e?Dd(e):s.mount)s.mount.delete(c),s.array.delete(c),o.keepValue||(Rd(r,c),Rd(a,c)),!o.keepError&&Rd(n.errors,c),!o.keepDirty&&Rd(n.dirtyFields,c),!o.keepTouched&&Rd(n.touchedFields,c),!o.keepIsValidating&&Rd(n.validatingFields,c),!t.shouldUnregister&&!o.keepDefaultValue&&Rd(i,c);p.state.next({values:sd(a)}),p.state.next({...n,...o.keepDirty?{isDirty:O()}:{}}),!o.keepIsValid&&g()},fe=({disabled:e,name:t})=>{if(fd(e)&&o.mount||e||s.disabled.has(t)){let n=s.disabled.has(t)!==!!e;e?s.disabled.add(t):s.disabled.delete(t),n&&o.mount&&!o.action&&g()}},pe=(e,n={})=>{let a=R(r,e),c=fd(n.disabled)||fd(t.disabled);return md(r,e,{...a||{},_f:{...a&&a._f?a._f:{ref:{name:e}},name:e,mount:!0,...n}}),s.mount.add(e),a?fe({disabled:fd(n.disabled)?n.disabled:t.disabled,name:e}):x(e,!0,n.value),{...c?{disabled:n.disabled||t.disabled}:{},...t.progressive?{required:!!n.required,min:Qd(n.min),max:Qd(n.max),minLength:Qd(n.minLength),maxLength:Qd(n.maxLength),pattern:Qd(n.pattern)}:{},name:e,onChange:re,onBlur:re,ref:c=>{if(c){pe(e,n),a=R(r,e);let t=ld(c.value)&&c.querySelectorAll&&c.querySelectorAll(`input,select,textarea`)[0]||c,o=Pd(t),s=a._f.refs||[];if(o?s.find(e=>e===t):t===a._f.ref)return;md(r,e,{_f:{...a._f,...o?{refs:[...s.filter(Fd),t,...Array.isArray(R(i,e))?[{}]:[]],ref:{type:t.type,name:e}}:{ref:t}}}),x(e,!1,void 0,t)}else a=R(r,e,{}),a._f&&(a._f.mount=!1),(t.shouldUnregister||n.shouldUnregister)&&!(id(s.array,e)&&o.action)&&s.unMount.add(e)}}},me=()=>t.shouldFocusError&&af(r,ie,s.mount),he=e=>{fd(e)&&(p.state.next({disabled:e}),af(r,(t,n)=>{let i=R(r,n);i&&(t.disabled=i._f.disabled||e,Array.isArray(i._f.refs)&&i._f.refs.forEach(t=>{t.disabled=i._f.disabled||e}))},0,!1))},ge=(e,i)=>async o=>{let c;o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let l=sd(a);if(p.state.next({isSubmitting:!0}),t.resolver){let{errors:e,values:t}=await w();_(),n.errors=e,l=sd(t)}else await E(r);if(s.disabled.size)for(let e of s.disabled)Rd(l,e);if(Rd(n.errors,`root`),Ad(n.errors)){p.state.next({errors:{}});try{await e(l,o)}catch(e){c=e}}else i&&await i({...n.errors},o),me(),setTimeout(me);if(p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Ad(n.errors)&&!c,submitCount:n.submitCount+1,errors:n.errors}),c)throw c},_e=(e,t={})=>{R(r,e)&&(ld(t.defaultValue)?ne(e,sd(R(i,e))):(ne(e,t.defaultValue),md(i,e,sd(t.defaultValue))),t.keepTouched||Rd(n.touchedFields,e),t.keepDirty||(Rd(n.dirtyFields,e),n.isDirty=t.defaultValue?O(e,sd(R(i,e))):O()),t.keepError||(Rd(n.errors,e),d.isValid&&g()),p.state.next({...n}))},N=(e,c={})=>{let l=e?sd(e):i,u=sd(l),f=Ad(e),m=f?i:u;if(c.keepDefaultValues||(i=l),!c.keepValues){if(c.keepDirtyValues){let e=new Set([...s.mount,...Object.keys(Hd(i,a))]);for(let t of Array.from(e)){let e=R(n.dirtyFields,t),r=R(a,t),i=R(m,t);e&&!ld(r)?md(m,t,r):!e&&!ld(i)&&ne(t,i)}}else{if(od&&ld(e))for(let e of s.mount){let t=R(r,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(Md(e)){let t=e.closest(`form`);if(t){t.reset();break}}}}if(c.keepFieldsRef)for(let e of s.mount)ne(e,R(m,e));else r={}}a=t.shouldUnregister?c.keepDefaultValues?sd(i):{}:sd(m),p.array.next({values:{...m}}),p.state.next({values:{...m}})}s={mount:c.keepDirtyValues?s.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:``},o.mount=!d.isValid||!!c.keepIsValid||!!c.keepDirtyValues||!t.shouldUnregister&&!Ad(m),o.watch=!!t.shouldUnregister,o.keepIsValid=!!c.keepIsValid,o.action=!1,c.keepErrors||(n.errors={}),p.state.next({submitCount:c.keepSubmitCount?n.submitCount:0,isDirty:f?!1:c.keepDirty?n.isDirty:!!(c.keepDefaultValues&&!wd(e,i)),isSubmitted:c.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:f?{}:c.keepDirtyValues?c.keepDefaultValues&&a?Hd(i,a):n.dirtyFields:c.keepDefaultValues&&e?Hd(i,e):c.keepDirty?n.dirtyFields:{},touchedFields:c.keepTouched?n.touchedFields:{},errors:c.keepErrors?n.errors:{},isSubmitSuccessful:c.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:i})},ve=(e,n)=>N(pd(e)?e(a):e,{...t.resetOptions,...n}),ye=(e,t={})=>{let n=R(r,e),i=n&&n._f;if(i){let e=i.refs?i.refs[0]:i.ref;e.focus&&setTimeout(()=>{e.focus(),t.shouldSelect&&pd(e.select)&&e.select()})}},be=e=>{n={...n,...e}},xe={control:{register:pe,unregister:de,getFieldState:ae,handleSubmit:ge,setError:se,_subscribe:le,_runSchema:w,_updateIsValidating:_,_focusError:me,_getWatch:k,_getDirty:O,_setValid:g,_setFieldArray:v,_setDisabledField:fe,_setErrors:b,_getFieldArray:A,_reset:N,_resetDefaultValues:()=>pd(t.defaultValues)&&t.defaultValues().then(e=>{ve(e,t.resetOptions),p.state.next({isLoading:!1})}),_removeUnmounted:D,_disableForm:he,_subjects:p,_proxyFormState:d,get _fields(){return r},get _formValues(){return a},get _state(){return o},set _state(e){o=e},get _defaultValues(){return i},get _names(){return s},set _names(e){s=e},get _formState(){return n},get _options(){return t},set _options(e){t={...t,...e}}},subscribe:ue,trigger:j,register:pe,handleSubmit:ge,watch:ce,setValue:ne,getValues:M,reset:ve,resetField:_e,clearErrors:oe,unregister:de,setError:se,setFocus:ye,getFieldState:ae};return{...xe,formControl:xe}}function _f(e={}){let t=b.useRef(void 0),n=b.useRef(void 0),[r,i]=b.useState({isDirty:!1,isValidating:!1,isLoading:pd(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,isReady:!1,defaultValues:pd(e.defaultValues)?void 0:e.defaultValues});if(!t.current)if(e.formControl)t.current={...e.formControl,formState:r},e.defaultValues&&!pd(e.defaultValues)&&e.formControl.reset(e.defaultValues,e.resetOptions);else{let{formControl:n,...i}=gf(e);t.current={...i,formState:r}}let a=t.current.control;return a._options=e,bd(()=>{let e=a._subscribe({formState:a._proxyFormState,callback:()=>i({...a._formState}),reRenderRoot:!0});return i(e=>({...e,isReady:!0})),a._formState.isReady=!0,e},[a]),b.useEffect(()=>a._disableForm(e.disabled),[a,e.disabled]),b.useEffect(()=>{e.mode&&(a._options.mode=e.mode),e.reValidateMode&&(a._options.reValidateMode=e.reValidateMode)},[a,e.mode,e.reValidateMode]),b.useEffect(()=>{e.errors&&(a._setErrors(e.errors),a._focusError())},[a,e.errors]),b.useEffect(()=>{e.shouldUnregister&&a._subjects.state.next({values:a._getWatch()})},[a,e.shouldUnregister]),b.useEffect(()=>{if(a._proxyFormState.isDirty){let e=a._getDirty();e!==r.isDirty&&a._subjects.state.next({isDirty:e})}},[a,r.isDirty]),b.useEffect(()=>{e.values&&!wd(e.values,n.current)?(a._reset(e.values,{keepFieldsRef:!0,...a._options.resetOptions}),a._options.resetOptions?.keepIsValid||a._setValid(),n.current=e.values,i(e=>({...e}))):a._resetDefaultValues()},[a,e.values]),b.useEffect(()=>{a._state.mount||(a._setValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),t.current.formState=b.useMemo(()=>yd(r,a),[a,r]),t.current}var vf=(e,t,n)=>{if(e&&`reportValidity`in e){let r=R(n,t);e.setCustomValidity(r&&r.message||``),e.reportValidity()}},yf=(e,t)=>{for(let n in t.fields){let r=t.fields[n];r&&r.ref&&`reportValidity`in r.ref?vf(r.ref,n,e):r&&r.refs&&r.refs.forEach(t=>vf(t,n,e))}},bf=(e,t)=>{t.shouldUseNativeValidation&&yf(e,t);let n={};for(let r in e){let i=R(t.fields,r),a=Object.assign(e[r]||{},{ref:i&&i.ref});if(xf(t.names||Object.keys(e),r)){let e=Object.assign({},R(n,r));md(e,`root`,a),md(n,r,e)}else md(n,r,a)}return n},xf=(e,t)=>{let n=Sf(t);return e.some(e=>Sf(e).match(`^${n}\\.\\d+`))};function Sf(e){return e.replace(/\]|\[/g,``)}Object.freeze({status:`aborted`});function Cf(e,t,n){function r(n,r){if(n._zod||Object.defineProperty(n,`_zod`,{value:{def:r,constr:o,traits:new Set},enumerable:!1}),n._zod.traits.has(e))return;n._zod.traits.add(e),t(n,r);let i=o.prototype,a=Object.keys(i);for(let e=0;e<a.length;e++){let t=a[e];t in n||(n[t]=i[t].bind(n))}}let i=n?.Parent??Object;class a extends i{}Object.defineProperty(a,`name`,{value:e});function o(e){var t;let i=n?.Parent?new a:this;r(i,e),(t=i._zod).deferred??(t.deferred=[]);for(let e of i._zod.deferred)e();return i}return Object.defineProperty(o,`init`,{value:r}),Object.defineProperty(o,Symbol.hasInstance,{value:t=>n?.Parent&&t instanceof n.Parent?!0:t?._zod?.traits?.has(e)}),Object.defineProperty(o,`name`,{value:e}),o}var wf=class extends Error{constructor(){super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`)}},Tf={};function Ef(e){return e&&Object.assign(Tf,e),Tf}function Df(e,t){return typeof t==`bigint`?t.toString():t}var Of=`captureStackTrace`in Error?Error.captureStackTrace:(...e)=>{};-Number.MAX_VALUE,Number.MAX_VALUE;function kf(e){return typeof e==`string`?e:e?.message}function Af(e,t,n){let r={...e,path:e.path??[]};return e.message||(r.message=kf(e.inst?._zod.def?.error?.(e))??kf(t?.error?.(e))??kf(n.customError?.(e))??kf(n.localeError?.(e))??`Invalid input`),delete r.inst,delete r.continue,t?.reportInput||delete r.input,r}var jf=(e,t)=>{e.name=`$ZodError`,Object.defineProperty(e,`_zod`,{value:e._zod,enumerable:!1}),Object.defineProperty(e,`issues`,{value:t,enumerable:!1}),e.message=JSON.stringify(t,Df,2),Object.defineProperty(e,`toString`,{value:()=>e.message,enumerable:!1})},Mf=Cf(`$ZodError`,jf),Nf=Cf(`$ZodError`,jf,{Parent:Error}),Pf=e=>(t,n,r,i)=>{let a=r?Object.assign(r,{async:!1}):{async:!1},o=t._zod.run({value:n,issues:[]},a);if(o instanceof Promise)throw new wf;if(o.issues.length){let t=new(i?.Err??e)(o.issues.map(e=>Af(e,a,Ef())));throw Of(t,i?.callee),t}return o.value},Ff=Pf(Nf),If=e=>async(t,n,r,i)=>{let a=r?Object.assign(r,{async:!0}):{async:!0},o=t._zod.run({value:n,issues:[]},a);if(o instanceof Promise&&(o=await o),o.issues.length){let t=new(i?.Err??e)(o.issues.map(e=>Af(e,a,Ef())));throw Of(t,i?.callee),t}return o.value},Lf=If(Nf),Rf=e=>(t,n,r)=>{let i=r?{...r,async:!1}:{async:!1},a=t._zod.run({value:n,issues:[]},i);if(a instanceof Promise)throw new wf;return a.issues.length?{success:!1,error:new(e??Mf)(a.issues.map(e=>Af(e,i,Ef())))}:{success:!0,data:a.value}},zf=e=>async(t,n,r)=>{let i=r?Object.assign(r,{async:!0}):{async:!0},a=t._zod.run({value:n,issues:[]},i);return a instanceof Promise&&(a=await a),a.issues.length?{success:!1,error:new e(a.issues.map(e=>Af(e,i,Ef())))}:{success:!0,data:a.value}};(e=>(t,n,r)=>{let i=r?Object.assign(r,{direction:`backward`}):{direction:`backward`};return Pf(e)(t,n,i)})(Nf),(e=>(t,n,r)=>Pf(e)(t,n,r))(Nf),(e=>async(t,n,r)=>{let i=r?Object.assign(r,{direction:`backward`}):{direction:`backward`};return If(e)(t,n,i)})(Nf),(e=>async(t,n,r)=>If(e)(t,n,r))(Nf),(e=>(t,n,r)=>{let i=r?Object.assign(r,{direction:`backward`}):{direction:`backward`};return Rf(e)(t,n,i)})(Nf),(e=>(t,n,r)=>Rf(e)(t,n,r))(Nf),(e=>async(t,n,r)=>{let i=r?Object.assign(r,{direction:`backward`}):{direction:`backward`};return zf(e)(t,n,i)})(Nf),(e=>async(t,n,r)=>zf(e)(t,n,r))(Nf);function Bf(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}function Vf(e,t){for(var n={};e.length;){var r=e[0],i=r.code,a=r.message,o=r.path.join(`.`);if(!n[o])if(`unionErrors`in r){var s=r.unionErrors[0].errors[0];n[o]={message:s.message,type:s.code}}else n[o]={message:a,type:i};if(`unionErrors`in r&&r.unionErrors.forEach(function(t){return t.errors.forEach(function(t){return e.push(t)})}),t){var c=n[o].types,l=c&&c[r.code];n[o]=Ed(o,t,n,i,l?[].concat(l,r.message):r.message)}e.shift()}return n}function Hf(e,t){for(var n={};e.length;){var r=e[0],i=r.code,a=r.message,o=r.path.join(`.`);if(!n[o])if(r.code===`invalid_union`&&r.errors.length>0){var s=r.errors[0][0];n[o]={message:s.message,type:s.code}}else n[o]={message:a,type:i};if(r.code===`invalid_union`&&r.errors.forEach(function(t){return t.forEach(function(t){return e.push(t)})}),t){var c=n[o].types,l=c&&c[r.code];n[o]=Ed(o,t,n,i,l?[].concat(l,r.message):r.message)}e.shift()}return n}function Uf(e,t,n){if(n===void 0&&(n={}),function(e){return`_def`in e&&typeof e._def==`object`&&`typeName`in e._def}(e))return function(r,i,a){try{return Promise.resolve(Bf(function(){return Promise.resolve(e[n.mode===`sync`?`parse`:`parseAsync`](r,t)).then(function(e){return a.shouldUseNativeValidation&&yf({},a),{errors:{},values:n.raw?Object.assign({},r):e}})},function(e){if(function(e){return Array.isArray(e?.issues)}(e))return{values:{},errors:bf(Vf(e.errors,!a.shouldUseNativeValidation&&a.criteriaMode===`all`),a)};throw e}))}catch(e){return Promise.reject(e)}};if(function(e){return`_zod`in e&&typeof e._zod==`object`}(e))return function(r,i,a){try{return Promise.resolve(Bf(function(){return Promise.resolve((n.mode===`sync`?Ff:Lf)(e,r,t)).then(function(e){return a.shouldUseNativeValidation&&yf({},a),{errors:{},values:n.raw?Object.assign({},r):e}})},function(e){if(function(e){return e instanceof Mf}(e))return{values:{},errors:bf(Hf(e.issues,!a.shouldUseNativeValidation&&a.criteriaMode===`all`),a)};throw e}))}catch(e){return Promise.reject(e)}};throw Error(`Invalid input: not a Zod schema`)}var B;(function(e){e.assertEqual=e=>{};function t(e){}e.assertIs=t;function n(e){throw Error()}e.assertNever=n,e.arrayToEnum=e=>{let t={};for(let n of e)t[n]=n;return t},e.getValidEnumValues=t=>{let n=e.objectKeys(t).filter(e=>typeof t[t[e]]!=`number`),r={};for(let e of n)r[e]=t[e];return e.objectValues(r)},e.objectValues=t=>e.objectKeys(t).map(function(e){return t[e]}),e.objectKeys=typeof Object.keys==`function`?e=>Object.keys(e):e=>{let t=[];for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t},e.find=(e,t)=>{for(let n of e)if(t(n))return n},e.isInteger=typeof Number.isInteger==`function`?e=>Number.isInteger(e):e=>typeof e==`number`&&Number.isFinite(e)&&Math.floor(e)===e;function r(e,t=` | `){return e.map(e=>typeof e==`string`?`'${e}'`:e).join(t)}e.joinValues=r,e.jsonStringifyReplacer=(e,t)=>typeof t==`bigint`?t.toString():t})(B||={});var Wf;(function(e){e.mergeShapes=(e,t)=>({...e,...t})})(Wf||={});var V=B.arrayToEnum([`string`,`nan`,`number`,`integer`,`float`,`boolean`,`date`,`bigint`,`symbol`,`function`,`undefined`,`null`,`array`,`object`,`unknown`,`promise`,`void`,`never`,`map`,`set`]),Gf=e=>{switch(typeof e){case`undefined`:return V.undefined;case`string`:return V.string;case`number`:return Number.isNaN(e)?V.nan:V.number;case`boolean`:return V.boolean;case`function`:return V.function;case`bigint`:return V.bigint;case`symbol`:return V.symbol;case`object`:return Array.isArray(e)?V.array:e===null?V.null:e.then&&typeof e.then==`function`&&e.catch&&typeof e.catch==`function`?V.promise:typeof Map<`u`&&e instanceof Map?V.map:typeof Set<`u`&&e instanceof Set?V.set:typeof Date<`u`&&e instanceof Date?V.date:V.object;default:return V.unknown}},H=B.arrayToEnum([`invalid_type`,`invalid_literal`,`custom`,`invalid_union`,`invalid_union_discriminator`,`invalid_enum_value`,`unrecognized_keys`,`invalid_arguments`,`invalid_return_type`,`invalid_date`,`invalid_string`,`too_small`,`too_big`,`invalid_intersection_types`,`not_multiple_of`,`not_finite`]),Kf=class e extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name=`ZodError`,this.issues=e}format(e){let t=e||function(e){return e.message},n={_errors:[]},r=e=>{for(let i of e.issues)if(i.code===`invalid_union`)i.unionErrors.map(r);else if(i.code===`invalid_return_type`)r(i.returnTypeError);else if(i.code===`invalid_arguments`)r(i.argumentsError);else if(i.path.length===0)n._errors.push(t(i));else{let e=n,r=0;for(;r<i.path.length;){let n=i.path[r];r===i.path.length-1?(e[n]=e[n]||{_errors:[]},e[n]._errors.push(t(i))):e[n]=e[n]||{_errors:[]},e=e[n],r++}}};return r(this),n}static assert(t){if(!(t instanceof e))throw Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,B.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=e=>e.message){let t=Object.create(null),n=[];for(let r of this.issues)if(r.path.length>0){let n=r.path[0];t[n]=t[n]||[],t[n].push(e(r))}else n.push(e(r));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}};Kf.create=e=>new Kf(e);var qf=(e,t)=>{let n;switch(e.code){case H.invalid_type:n=e.received===V.undefined?`Required`:`Expected ${e.expected}, received ${e.received}`;break;case H.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,B.jsonStringifyReplacer)}`;break;case H.unrecognized_keys:n=`Unrecognized key(s) in object: ${B.joinValues(e.keys,`, `)}`;break;case H.invalid_union:n=`Invalid input`;break;case H.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${B.joinValues(e.options)}`;break;case H.invalid_enum_value:n=`Invalid enum value. Expected ${B.joinValues(e.options)}, received '${e.received}'`;break;case H.invalid_arguments:n=`Invalid function arguments`;break;case H.invalid_return_type:n=`Invalid function return type`;break;case H.invalid_date:n=`Invalid date`;break;case H.invalid_string:typeof e.validation==`object`?`includes`in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position==`number`&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):`startsWith`in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:`endsWith`in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:B.assertNever(e.validation):n=e.validation===`regex`?`Invalid`:`Invalid ${e.validation}`;break;case H.too_small:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at least`:`more than`} ${e.minimum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at least`:`over`} ${e.minimum} character(s)`:e.type===`number`||e.type===`bigint`?`Number must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${e.minimum}`:e.type===`date`?`Date must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${new Date(Number(e.minimum))}`:`Invalid input`;break;case H.too_big:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at most`:`less than`} ${e.maximum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at most`:`under`} ${e.maximum} character(s)`:e.type===`number`?`Number must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`bigint`?`BigInt must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`date`?`Date must be ${e.exact?`exactly`:e.inclusive?`smaller than or equal to`:`smaller than`} ${new Date(Number(e.maximum))}`:`Invalid input`;break;case H.custom:n=`Invalid input`;break;case H.invalid_intersection_types:n=`Intersection results could not be merged`;break;case H.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case H.not_finite:n=`Number must be finite`;break;default:n=t.defaultError,B.assertNever(e)}return{message:n}},Jf=qf;function Yf(){return Jf}var Xf=e=>{let{data:t,path:n,errorMaps:r,issueData:i}=e,a=[...n,...i.path||[]],o={...i,path:a};if(i.message!==void 0)return{...i,path:a,message:i.message};let s=``,c=r.filter(e=>!!e).slice().reverse();for(let e of c)s=e(o,{data:t,defaultError:s}).message;return{...i,path:a,message:s}};function U(e,t){let n=Yf(),r=Xf({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,n,n===qf?void 0:qf].filter(e=>!!e)});e.common.issues.push(r)}var Zf=class e{constructor(){this.value=`valid`}dirty(){this.value===`valid`&&(this.value=`dirty`)}abort(){this.value!==`aborted`&&(this.value=`aborted`)}static mergeArray(e,t){let n=[];for(let r of t){if(r.status===`aborted`)return W;r.status===`dirty`&&e.dirty(),n.push(r.value)}return{status:e.value,value:n}}static async mergeObjectAsync(t,n){let r=[];for(let e of n){let t=await e.key,n=await e.value;r.push({key:t,value:n})}return e.mergeObjectSync(t,r)}static mergeObjectSync(e,t){let n={};for(let r of t){let{key:t,value:i}=r;if(t.status===`aborted`||i.status===`aborted`)return W;t.status===`dirty`&&e.dirty(),i.status===`dirty`&&e.dirty(),t.value!==`__proto__`&&(i.value!==void 0||r.alwaysSet)&&(n[t.value]=i.value)}return{status:e.value,value:n}}},W=Object.freeze({status:`aborted`}),Qf=e=>({status:`dirty`,value:e}),$f=e=>({status:`valid`,value:e}),ep=e=>e.status===`aborted`,tp=e=>e.status===`dirty`,np=e=>e.status===`valid`,rp=e=>typeof Promise<`u`&&e instanceof Promise,G;(function(e){e.errToObj=e=>typeof e==`string`?{message:e}:e||{},e.toString=e=>typeof e==`string`?e:e?.message})(G||={});var ip=class{constructor(e,t,n,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=r}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},ap=(e,t)=>{if(np(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error(`Validation failed but no issues detected.`);return{success:!1,get error(){return this._error||=new Kf(e.common.issues),this._error}}};function K(e){if(!e)return{};let{errorMap:t,invalid_type_error:n,required_error:r,description:i}=e;if(t&&(n||r))throw Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(t,i)=>{let{message:a}=e;return t.code===`invalid_enum_value`?{message:a??i.defaultError}:i.data===void 0?{message:a??r??i.defaultError}:t.code===`invalid_type`?{message:a??n??i.defaultError}:{message:i.defaultError}},description:i}}var op=class{get description(){return this._def.description}_getType(e){return Gf(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:Gf(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Zf,ctx:{common:e.parent.common,data:e.data,parsedType:Gf(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(rp(t))throw Error(`Synchronous parse encountered promise.`);return t}_parseAsync(e){let t=this._parse(e);return Promise.resolve(t)}parse(e,t){let n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){let n={common:{issues:[],async:t?.async??!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Gf(e)};return ap(n,this._parseSync({data:e,path:n.path,parent:n}))}"~validate"(e){let t={common:{issues:[],async:!!this[`~standard`].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Gf(e)};if(!this[`~standard`].async)try{let n=this._parseSync({data:e,path:[],parent:t});return np(n)?{value:n.value}:{issues:t.common.issues}}catch(e){e?.message?.toLowerCase()?.includes(`encountered`)&&(this[`~standard`].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(e=>np(e)?{value:e.value}:{issues:t.common.issues})}async parseAsync(e,t){let n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){let n={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Gf(e)},r=this._parse({data:e,path:n.path,parent:n});return ap(n,await(rp(r)?r:Promise.resolve(r)))}refine(e,t){let n=e=>typeof t==`string`||t===void 0?{message:t}:typeof t==`function`?t(e):t;return this._refinement((t,r)=>{let i=e(t),a=()=>r.addIssue({code:H.custom,...n(t)});return typeof Promise<`u`&&i instanceof Promise?i.then(e=>e?!0:(a(),!1)):i?!0:(a(),!1)})}refinement(e,t){return this._refinement((n,r)=>e(n)?!0:(r.addIssue(typeof t==`function`?t(n,r):t),!1))}_refinement(e){return new lm({schema:this,typeName:q.ZodEffects,effect:{type:`refinement`,refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this[`~standard`]={version:1,vendor:`zod`,validate:e=>this[`~validate`](e)}}optional(){return um.create(this,this._def)}nullable(){return dm.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Wp.create(this)}promise(){return cm.create(this,this._def)}or(e){return qp.create([this,e],this._def)}and(e){return Zp.create(this,e,this._def)}transform(e){return new lm({...K(this._def),schema:this,typeName:q.ZodEffects,effect:{type:`transform`,transform:e}})}default(e){let t=typeof e==`function`?e:()=>e;return new fm({...K(this._def),innerType:this,defaultValue:t,typeName:q.ZodDefault})}brand(){return new hm({typeName:q.ZodBranded,type:this,...K(this._def)})}catch(e){let t=typeof e==`function`?e:()=>e;return new pm({...K(this._def),innerType:this,catchValue:t,typeName:q.ZodCatch})}describe(e){let t=this.constructor;return new t({...this._def,description:e})}pipe(e){return gm.create(this,e)}readonly(){return _m.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},sp=/^c[^\s-]{8,}$/i,cp=/^[0-9a-z]+$/,lp=/^[0-9A-HJKMNP-TV-Z]{26}$/i,up=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,dp=/^[a-z0-9_-]{21}$/i,fp=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,pp=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,mp=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,hp=`^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`,gp,_p=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,vp=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,yp=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,bp=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,xp=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Sp=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Cp=`((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`,wp=RegExp(`^${Cp}$`);function Tp(e){let t=`[0-5]\\d`;e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision??(t=`${t}(\\.\\d+)?`);let n=e.precision?`+`:`?`;return`([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`}function Ep(e){return RegExp(`^${Tp(e)}$`)}function Dp(e){let t=`${Cp}T${Tp(e)}`,n=[];return n.push(e.local?`Z?`:`Z`),e.offset&&n.push(`([+-]\\d{2}:?\\d{2})`),t=`${t}(${n.join(`|`)})`,RegExp(`^${t}$`)}function Op(e,t){return!!((t===`v4`||!t)&&_p.test(e)||(t===`v6`||!t)&&yp.test(e))}function kp(e,t){if(!fp.test(e))return!1;try{let[n]=e.split(`.`);if(!n)return!1;let r=n.replace(/-/g,`+`).replace(/_/g,`/`).padEnd(n.length+(4-n.length%4)%4,`=`),i=JSON.parse(atob(r));return!(typeof i!=`object`||!i||`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&i.alg!==t)}catch{return!1}}function Ap(e,t){return!!((t===`v4`||!t)&&vp.test(e)||(t===`v6`||!t)&&bp.test(e))}var jp=class e extends op{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==V.string){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.string,received:t.parsedType}),W}let t=new Zf,n;for(let r of this._def.checks)if(r.kind===`min`)e.data.length<r.value&&(n=this._getOrReturnCtx(e,n),U(n,{code:H.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`max`)e.data.length>r.value&&(n=this._getOrReturnCtx(e,n),U(n,{code:H.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`length`){let i=e.data.length>r.value,a=e.data.length<r.value;(i||a)&&(n=this._getOrReturnCtx(e,n),i?U(n,{code:H.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}):a&&U(n,{code:H.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}),t.dirty())}else if(r.kind===`email`)mp.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`email`,code:H.invalid_string,message:r.message}),t.dirty());else if(r.kind===`emoji`)gp||=new RegExp(hp,`u`),gp.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`emoji`,code:H.invalid_string,message:r.message}),t.dirty());else if(r.kind===`uuid`)up.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`uuid`,code:H.invalid_string,message:r.message}),t.dirty());else if(r.kind===`nanoid`)dp.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`nanoid`,code:H.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid`)sp.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`cuid`,code:H.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid2`)cp.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`cuid2`,code:H.invalid_string,message:r.message}),t.dirty());else if(r.kind===`ulid`)lp.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`ulid`,code:H.invalid_string,message:r.message}),t.dirty());else if(r.kind===`url`)try{new URL(e.data)}catch{n=this._getOrReturnCtx(e,n),U(n,{validation:`url`,code:H.invalid_string,message:r.message}),t.dirty()}else r.kind===`regex`?(r.regex.lastIndex=0,r.regex.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`regex`,code:H.invalid_string,message:r.message}),t.dirty())):r.kind===`trim`?e.data=e.data.trim():r.kind===`includes`?e.data.includes(r.value,r.position)||(n=this._getOrReturnCtx(e,n),U(n,{code:H.invalid_string,validation:{includes:r.value,position:r.position},message:r.message}),t.dirty()):r.kind===`toLowerCase`?e.data=e.data.toLowerCase():r.kind===`toUpperCase`?e.data=e.data.toUpperCase():r.kind===`startsWith`?e.data.startsWith(r.value)||(n=this._getOrReturnCtx(e,n),U(n,{code:H.invalid_string,validation:{startsWith:r.value},message:r.message}),t.dirty()):r.kind===`endsWith`?e.data.endsWith(r.value)||(n=this._getOrReturnCtx(e,n),U(n,{code:H.invalid_string,validation:{endsWith:r.value},message:r.message}),t.dirty()):r.kind===`datetime`?Dp(r).test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{code:H.invalid_string,validation:`datetime`,message:r.message}),t.dirty()):r.kind===`date`?wp.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{code:H.invalid_string,validation:`date`,message:r.message}),t.dirty()):r.kind===`time`?Ep(r).test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{code:H.invalid_string,validation:`time`,message:r.message}),t.dirty()):r.kind===`duration`?pp.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`duration`,code:H.invalid_string,message:r.message}),t.dirty()):r.kind===`ip`?Op(e.data,r.version)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`ip`,code:H.invalid_string,message:r.message}),t.dirty()):r.kind===`jwt`?kp(e.data,r.alg)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`jwt`,code:H.invalid_string,message:r.message}),t.dirty()):r.kind===`cidr`?Ap(e.data,r.version)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`cidr`,code:H.invalid_string,message:r.message}),t.dirty()):r.kind===`base64`?xp.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`base64`,code:H.invalid_string,message:r.message}),t.dirty()):r.kind===`base64url`?Sp.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`base64url`,code:H.invalid_string,message:r.message}),t.dirty()):B.assertNever(r);return{status:t.value,value:e.data}}_regex(e,t,n){return this.refinement(t=>e.test(t),{validation:t,code:H.invalid_string,...G.errToObj(n)})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}email(e){return this._addCheck({kind:`email`,...G.errToObj(e)})}url(e){return this._addCheck({kind:`url`,...G.errToObj(e)})}emoji(e){return this._addCheck({kind:`emoji`,...G.errToObj(e)})}uuid(e){return this._addCheck({kind:`uuid`,...G.errToObj(e)})}nanoid(e){return this._addCheck({kind:`nanoid`,...G.errToObj(e)})}cuid(e){return this._addCheck({kind:`cuid`,...G.errToObj(e)})}cuid2(e){return this._addCheck({kind:`cuid2`,...G.errToObj(e)})}ulid(e){return this._addCheck({kind:`ulid`,...G.errToObj(e)})}base64(e){return this._addCheck({kind:`base64`,...G.errToObj(e)})}base64url(e){return this._addCheck({kind:`base64url`,...G.errToObj(e)})}jwt(e){return this._addCheck({kind:`jwt`,...G.errToObj(e)})}ip(e){return this._addCheck({kind:`ip`,...G.errToObj(e)})}cidr(e){return this._addCheck({kind:`cidr`,...G.errToObj(e)})}datetime(e){return typeof e==`string`?this._addCheck({kind:`datetime`,precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:`datetime`,precision:e?.precision===void 0?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...G.errToObj(e?.message)})}date(e){return this._addCheck({kind:`date`,message:e})}time(e){return typeof e==`string`?this._addCheck({kind:`time`,precision:null,message:e}):this._addCheck({kind:`time`,precision:e?.precision===void 0?null:e?.precision,...G.errToObj(e?.message)})}duration(e){return this._addCheck({kind:`duration`,...G.errToObj(e)})}regex(e,t){return this._addCheck({kind:`regex`,regex:e,...G.errToObj(t)})}includes(e,t){return this._addCheck({kind:`includes`,value:e,position:t?.position,...G.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:`startsWith`,value:e,...G.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:`endsWith`,value:e,...G.errToObj(t)})}min(e,t){return this._addCheck({kind:`min`,value:e,...G.errToObj(t)})}max(e,t){return this._addCheck({kind:`max`,value:e,...G.errToObj(t)})}length(e,t){return this._addCheck({kind:`length`,value:e,...G.errToObj(t)})}nonempty(e){return this.min(1,G.errToObj(e))}trim(){return new e({...this._def,checks:[...this._def.checks,{kind:`trim`}]})}toLowerCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toLowerCase`}]})}toUpperCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toUpperCase`}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind===`datetime`)}get isDate(){return!!this._def.checks.find(e=>e.kind===`date`)}get isTime(){return!!this._def.checks.find(e=>e.kind===`time`)}get isDuration(){return!!this._def.checks.find(e=>e.kind===`duration`)}get isEmail(){return!!this._def.checks.find(e=>e.kind===`email`)}get isURL(){return!!this._def.checks.find(e=>e.kind===`url`)}get isEmoji(){return!!this._def.checks.find(e=>e.kind===`emoji`)}get isUUID(){return!!this._def.checks.find(e=>e.kind===`uuid`)}get isNANOID(){return!!this._def.checks.find(e=>e.kind===`nanoid`)}get isCUID(){return!!this._def.checks.find(e=>e.kind===`cuid`)}get isCUID2(){return!!this._def.checks.find(e=>e.kind===`cuid2`)}get isULID(){return!!this._def.checks.find(e=>e.kind===`ulid`)}get isIP(){return!!this._def.checks.find(e=>e.kind===`ip`)}get isCIDR(){return!!this._def.checks.find(e=>e.kind===`cidr`)}get isBase64(){return!!this._def.checks.find(e=>e.kind===`base64`)}get isBase64url(){return!!this._def.checks.find(e=>e.kind===`base64url`)}get minLength(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}};jp.create=e=>new jp({checks:[],typeName:q.ZodString,coerce:e?.coerce??!1,...K(e)});function Mp(e,t){let n=(e.toString().split(`.`)[1]||``).length,r=(t.toString().split(`.`)[1]||``).length,i=n>r?n:r;return Number.parseInt(e.toFixed(i).replace(`.`,``))%Number.parseInt(t.toFixed(i).replace(`.`,``))/10**i}var Np=class e extends op{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==V.number){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.number,received:t.parsedType}),W}let t,n=new Zf;for(let r of this._def.checks)r.kind===`int`?B.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),U(t,{code:H.invalid_type,expected:`integer`,received:`float`,message:r.message}),n.dirty()):r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),U(t,{code:H.too_small,minimum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),U(t,{code:H.too_big,maximum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`multipleOf`?Mp(e.data,r.value)!==0&&(t=this._getOrReturnCtx(e,t),U(t,{code:H.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):r.kind===`finite`?Number.isFinite(e.data)||(t=this._getOrReturnCtx(e,t),U(t,{code:H.not_finite,message:r.message}),n.dirty()):B.assertNever(r);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit(`min`,e,!0,G.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,G.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,G.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,G.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:G.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}int(e){return this._addCheck({kind:`int`,message:G.toString(e)})}positive(e){return this._addCheck({kind:`min`,value:0,inclusive:!1,message:G.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:0,inclusive:!1,message:G.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:0,inclusive:!0,message:G.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:0,inclusive:!0,message:G.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:G.toString(t)})}finite(e){return this._addCheck({kind:`finite`,message:G.toString(e)})}safe(e){return this._addCheck({kind:`min`,inclusive:!0,value:-(2**53-1),message:G.toString(e)})._addCheck({kind:`max`,inclusive:!0,value:2**53-1,message:G.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind===`int`||e.kind===`multipleOf`&&B.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let n of this._def.checks)if(n.kind===`finite`||n.kind===`int`||n.kind===`multipleOf`)return!0;else n.kind===`min`?(t===null||n.value>t)&&(t=n.value):n.kind===`max`&&(e===null||n.value<e)&&(e=n.value);return Number.isFinite(t)&&Number.isFinite(e)}};Np.create=e=>new Np({checks:[],typeName:q.ZodNumber,coerce:e?.coerce||!1,...K(e)});var Pp=class e extends op{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==V.bigint)return this._getInvalidInput(e);let t,n=new Zf;for(let r of this._def.checks)r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),U(t,{code:H.too_small,type:`bigint`,minimum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),U(t,{code:H.too_big,type:`bigint`,maximum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`multipleOf`?e.data%r.value!==BigInt(0)&&(t=this._getOrReturnCtx(e,t),U(t,{code:H.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):B.assertNever(r);return{status:n.value,value:e.data}}_getInvalidInput(e){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.bigint,received:t.parsedType}),W}gte(e,t){return this.setLimit(`min`,e,!0,G.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,G.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,G.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,G.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:G.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}positive(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!1,message:G.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!1,message:G.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!0,message:G.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!0,message:G.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:G.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}};Pp.create=e=>new Pp({checks:[],typeName:q.ZodBigInt,coerce:e?.coerce??!1,...K(e)});var Fp=class extends op{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==V.boolean){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.boolean,received:t.parsedType}),W}return $f(e.data)}};Fp.create=e=>new Fp({typeName:q.ZodBoolean,coerce:e?.coerce||!1,...K(e)});var Ip=class e extends op{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==V.date){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.date,received:t.parsedType}),W}if(Number.isNaN(e.data.getTime()))return U(this._getOrReturnCtx(e),{code:H.invalid_date}),W;let t=new Zf,n;for(let r of this._def.checks)r.kind===`min`?e.data.getTime()<r.value&&(n=this._getOrReturnCtx(e,n),U(n,{code:H.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:`date`}),t.dirty()):r.kind===`max`?e.data.getTime()>r.value&&(n=this._getOrReturnCtx(e,n),U(n,{code:H.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:`date`}),t.dirty()):B.assertNever(r);return{status:t.value,value:new Date(e.data.getTime())}}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}min(e,t){return this._addCheck({kind:`min`,value:e.getTime(),message:G.toString(t)})}max(e,t){return this._addCheck({kind:`max`,value:e.getTime(),message:G.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e==null?null:new Date(e)}get maxDate(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e==null?null:new Date(e)}};Ip.create=e=>new Ip({checks:[],coerce:e?.coerce||!1,typeName:q.ZodDate,...K(e)});var Lp=class extends op{_parse(e){if(this._getType(e)!==V.symbol){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.symbol,received:t.parsedType}),W}return $f(e.data)}};Lp.create=e=>new Lp({typeName:q.ZodSymbol,...K(e)});var Rp=class extends op{_parse(e){if(this._getType(e)!==V.undefined){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.undefined,received:t.parsedType}),W}return $f(e.data)}};Rp.create=e=>new Rp({typeName:q.ZodUndefined,...K(e)});var zp=class extends op{_parse(e){if(this._getType(e)!==V.null){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.null,received:t.parsedType}),W}return $f(e.data)}};zp.create=e=>new zp({typeName:q.ZodNull,...K(e)});var Bp=class extends op{constructor(){super(...arguments),this._any=!0}_parse(e){return $f(e.data)}};Bp.create=e=>new Bp({typeName:q.ZodAny,...K(e)});var Vp=class extends op{constructor(){super(...arguments),this._unknown=!0}_parse(e){return $f(e.data)}};Vp.create=e=>new Vp({typeName:q.ZodUnknown,...K(e)});var Hp=class extends op{_parse(e){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.never,received:t.parsedType}),W}};Hp.create=e=>new Hp({typeName:q.ZodNever,...K(e)});var Up=class extends op{_parse(e){if(this._getType(e)!==V.undefined){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.void,received:t.parsedType}),W}return $f(e.data)}};Up.create=e=>new Up({typeName:q.ZodVoid,...K(e)});var Wp=class e extends op{_parse(e){let{ctx:t,status:n}=this._processInputParams(e),r=this._def;if(t.parsedType!==V.array)return U(t,{code:H.invalid_type,expected:V.array,received:t.parsedType}),W;if(r.exactLength!==null){let e=t.data.length>r.exactLength.value,i=t.data.length<r.exactLength.value;(e||i)&&(U(t,{code:e?H.too_big:H.too_small,minimum:i?r.exactLength.value:void 0,maximum:e?r.exactLength.value:void 0,type:`array`,inclusive:!0,exact:!0,message:r.exactLength.message}),n.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(U(t,{code:H.too_small,minimum:r.minLength.value,type:`array`,inclusive:!0,exact:!1,message:r.minLength.message}),n.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(U(t,{code:H.too_big,maximum:r.maxLength.value,type:`array`,inclusive:!0,exact:!1,message:r.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map((e,n)=>r.type._parseAsync(new ip(t,e,t.path,n)))).then(e=>Zf.mergeArray(n,e));let i=[...t.data].map((e,n)=>r.type._parseSync(new ip(t,e,t.path,n)));return Zf.mergeArray(n,i)}get element(){return this._def.type}min(t,n){return new e({...this._def,minLength:{value:t,message:G.toString(n)}})}max(t,n){return new e({...this._def,maxLength:{value:t,message:G.toString(n)}})}length(t,n){return new e({...this._def,exactLength:{value:t,message:G.toString(n)}})}nonempty(e){return this.min(1,e)}};Wp.create=(e,t)=>new Wp({type:e,minLength:null,maxLength:null,exactLength:null,typeName:q.ZodArray,...K(t)});function Gp(e){if(e instanceof Kp){let t={};for(let n in e.shape){let r=e.shape[n];t[n]=um.create(Gp(r))}return new Kp({...e._def,shape:()=>t})}else if(e instanceof Wp)return new Wp({...e._def,type:Gp(e.element)});else if(e instanceof um)return um.create(Gp(e.unwrap()));else if(e instanceof dm)return dm.create(Gp(e.unwrap()));else if(e instanceof Qp)return Qp.create(e.items.map(e=>Gp(e)));else return e}var Kp=class e extends op{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape();return this._cached={shape:e,keys:B.objectKeys(e)},this._cached}_parse(e){if(this._getType(e)!==V.object){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.object,received:t.parsedType}),W}let{status:t,ctx:n}=this._processInputParams(e),{shape:r,keys:i}=this._getCached(),a=[];if(!(this._def.catchall instanceof Hp&&this._def.unknownKeys===`strip`))for(let e in n.data)i.includes(e)||a.push(e);let o=[];for(let e of i){let t=r[e],i=n.data[e];o.push({key:{status:`valid`,value:e},value:t._parse(new ip(n,i,n.path,e)),alwaysSet:e in n.data})}if(this._def.catchall instanceof Hp){let e=this._def.unknownKeys;if(e===`passthrough`)for(let e of a)o.push({key:{status:`valid`,value:e},value:{status:`valid`,value:n.data[e]}});else if(e===`strict`)a.length>0&&(U(n,{code:H.unrecognized_keys,keys:a}),t.dirty());else if(e!==`strip`)throw Error(`Internal ZodObject error: invalid unknownKeys value.`)}else{let e=this._def.catchall;for(let t of a){let r=n.data[t];o.push({key:{status:`valid`,value:t},value:e._parse(new ip(n,r,n.path,t)),alwaysSet:t in n.data})}}return n.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of o){let n=await t.key,r=await t.value;e.push({key:n,value:r,alwaysSet:t.alwaysSet})}return e}).then(e=>Zf.mergeObjectSync(t,e)):Zf.mergeObjectSync(t,o)}get shape(){return this._def.shape()}strict(t){return G.errToObj,new e({...this._def,unknownKeys:`strict`,...t===void 0?{}:{errorMap:(e,n)=>{let r=this._def.errorMap?.(e,n).message??n.defaultError;return e.code===`unrecognized_keys`?{message:G.errToObj(t).message??r}:{message:r}}}})}strip(){return new e({...this._def,unknownKeys:`strip`})}passthrough(){return new e({...this._def,unknownKeys:`passthrough`})}extend(t){return new e({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new e({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:q.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(t){return new e({...this._def,catchall:t})}pick(t){let n={};for(let e of B.objectKeys(t))t[e]&&this.shape[e]&&(n[e]=this.shape[e]);return new e({...this._def,shape:()=>n})}omit(t){let n={};for(let e of B.objectKeys(this.shape))t[e]||(n[e]=this.shape[e]);return new e({...this._def,shape:()=>n})}deepPartial(){return Gp(this)}partial(t){let n={};for(let e of B.objectKeys(this.shape)){let r=this.shape[e];t&&!t[e]?n[e]=r:n[e]=r.optional()}return new e({...this._def,shape:()=>n})}required(t){let n={};for(let e of B.objectKeys(this.shape))if(t&&!t[e])n[e]=this.shape[e];else{let t=this.shape[e];for(;t instanceof um;)t=t._def.innerType;n[e]=t}return new e({...this._def,shape:()=>n})}keyof(){return am(B.objectKeys(this.shape))}};Kp.create=(e,t)=>new Kp({shape:()=>e,unknownKeys:`strip`,catchall:Hp.create(),typeName:q.ZodObject,...K(t)}),Kp.strictCreate=(e,t)=>new Kp({shape:()=>e,unknownKeys:`strict`,catchall:Hp.create(),typeName:q.ZodObject,...K(t)}),Kp.lazycreate=(e,t)=>new Kp({shape:e,unknownKeys:`strip`,catchall:Hp.create(),typeName:q.ZodObject,...K(t)});var qp=class extends op{_parse(e){let{ctx:t}=this._processInputParams(e),n=this._def.options;function r(e){for(let t of e)if(t.result.status===`valid`)return t.result;for(let n of e)if(n.result.status===`dirty`)return t.common.issues.push(...n.ctx.common.issues),n.result;let n=e.map(e=>new Kf(e.ctx.common.issues));return U(t,{code:H.invalid_union,unionErrors:n}),W}if(t.common.async)return Promise.all(n.map(async e=>{let n={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:n}),ctx:n}})).then(r);{let e,r=[];for(let i of n){let n={...t,common:{...t.common,issues:[]},parent:null},a=i._parseSync({data:t.data,path:t.path,parent:n});if(a.status===`valid`)return a;a.status===`dirty`&&!e&&(e={result:a,ctx:n}),n.common.issues.length&&r.push(n.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let i=r.map(e=>new Kf(e));return U(t,{code:H.invalid_union,unionErrors:i}),W}}get options(){return this._def.options}};qp.create=(e,t)=>new qp({options:e,typeName:q.ZodUnion,...K(t)});var Jp=e=>e instanceof rm?Jp(e.schema):e instanceof lm?Jp(e.innerType()):e instanceof im?[e.value]:e instanceof om?e.options:e instanceof sm?B.objectValues(e.enum):e instanceof fm?Jp(e._def.innerType):e instanceof Rp?[void 0]:e instanceof zp?[null]:e instanceof um?[void 0,...Jp(e.unwrap())]:e instanceof dm?[null,...Jp(e.unwrap())]:e instanceof hm||e instanceof _m?Jp(e.unwrap()):e instanceof pm?Jp(e._def.innerType):[],Yp=class e extends op{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==V.object)return U(t,{code:H.invalid_type,expected:V.object,received:t.parsedType}),W;let n=this.discriminator,r=t.data[n],i=this.optionsMap.get(r);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(U(t,{code:H.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),W)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){let i=new Map;for(let e of n){let n=Jp(e.shape[t]);if(!n.length)throw Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(let r of n){if(i.has(r))throw Error(`Discriminator property ${String(t)} has duplicate value ${String(r)}`);i.set(r,e)}}return new e({typeName:q.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:i,...K(r)})}};function Xp(e,t){let n=Gf(e),r=Gf(t);if(e===t)return{valid:!0,data:e};if(n===V.object&&r===V.object){let n=B.objectKeys(t),r=B.objectKeys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};for(let n of r){let r=Xp(e[n],t[n]);if(!r.valid)return{valid:!1};i[n]=r.data}return{valid:!0,data:i}}else if(n===V.array&&r===V.array){if(e.length!==t.length)return{valid:!1};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=Xp(i,a);if(!o.valid)return{valid:!1};n.push(o.data)}return{valid:!0,data:n}}else if(n===V.date&&r===V.date&&+e==+t)return{valid:!0,data:e};else return{valid:!1}}var Zp=class extends op{_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=(e,r)=>{if(ep(e)||ep(r))return W;let i=Xp(e.value,r.value);return i.valid?((tp(e)||tp(r))&&t.dirty(),{status:t.value,value:i.data}):(U(n,{code:H.invalid_intersection_types}),W)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([e,t])=>r(e,t)):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}};Zp.create=(e,t,n)=>new Zp({left:e,right:t,typeName:q.ZodIntersection,...K(n)});var Qp=class e extends op{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==V.array)return U(n,{code:H.invalid_type,expected:V.array,received:n.parsedType}),W;if(n.data.length<this._def.items.length)return U(n,{code:H.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),W;!this._def.rest&&n.data.length>this._def.items.length&&(U(n,{code:H.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),t.dirty());let r=[...n.data].map((e,t)=>{let r=this._def.items[t]||this._def.rest;return r?r._parse(new ip(n,e,n.path,t)):null}).filter(e=>!!e);return n.common.async?Promise.all(r).then(e=>Zf.mergeArray(t,e)):Zf.mergeArray(t,r)}get items(){return this._def.items}rest(t){return new e({...this._def,rest:t})}};Qp.create=(e,t)=>{if(!Array.isArray(e))throw Error(`You must pass an array of schemas to z.tuple([ ... ])`);return new Qp({items:e,typeName:q.ZodTuple,rest:null,...K(t)})};var $p=class e extends op{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==V.object)return U(n,{code:H.invalid_type,expected:V.object,received:n.parsedType}),W;let r=[],i=this._def.keyType,a=this._def.valueType;for(let e in n.data)r.push({key:i._parse(new ip(n,e,n.path,e)),value:a._parse(new ip(n,n.data[e],n.path,e)),alwaysSet:e in n.data});return n.common.async?Zf.mergeObjectAsync(t,r):Zf.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof op?new e({keyType:t,valueType:n,typeName:q.ZodRecord,...K(r)}):new e({keyType:jp.create(),valueType:t,typeName:q.ZodRecord,...K(n)})}},em=class extends op{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==V.map)return U(n,{code:H.invalid_type,expected:V.map,received:n.parsedType}),W;let r=this._def.keyType,i=this._def.valueType,a=[...n.data.entries()].map(([e,t],a)=>({key:r._parse(new ip(n,e,n.path,[a,`key`])),value:i._parse(new ip(n,t,n.path,[a,`value`]))}));if(n.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let n of a){let r=await n.key,i=await n.value;if(r.status===`aborted`||i.status===`aborted`)return W;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}})}else{let e=new Map;for(let n of a){let r=n.key,i=n.value;if(r.status===`aborted`||i.status===`aborted`)return W;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}}}};em.create=(e,t,n)=>new em({valueType:t,keyType:e,typeName:q.ZodMap,...K(n)});var tm=class e extends op{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==V.set)return U(n,{code:H.invalid_type,expected:V.set,received:n.parsedType}),W;let r=this._def;r.minSize!==null&&n.data.size<r.minSize.value&&(U(n,{code:H.too_small,minimum:r.minSize.value,type:`set`,inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&n.data.size>r.maxSize.value&&(U(n,{code:H.too_big,maximum:r.maxSize.value,type:`set`,inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());let i=this._def.valueType;function a(e){let n=new Set;for(let r of e){if(r.status===`aborted`)return W;r.status===`dirty`&&t.dirty(),n.add(r.value)}return{status:t.value,value:n}}let o=[...n.data.values()].map((e,t)=>i._parse(new ip(n,e,n.path,t)));return n.common.async?Promise.all(o).then(e=>a(e)):a(o)}min(t,n){return new e({...this._def,minSize:{value:t,message:G.toString(n)}})}max(t,n){return new e({...this._def,maxSize:{value:t,message:G.toString(n)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}};tm.create=(e,t)=>new tm({valueType:e,minSize:null,maxSize:null,typeName:q.ZodSet,...K(t)});var nm=class e extends op{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==V.function)return U(t,{code:H.invalid_type,expected:V.function,received:t.parsedType}),W;function n(e,n){return Xf({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Yf(),qf].filter(e=>!!e),issueData:{code:H.invalid_arguments,argumentsError:n}})}function r(e,n){return Xf({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Yf(),qf].filter(e=>!!e),issueData:{code:H.invalid_return_type,returnTypeError:n}})}let i={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof cm){let e=this;return $f(async function(...t){let o=new Kf([]),s=await e._def.args.parseAsync(t,i).catch(e=>{throw o.addIssue(n(t,e)),o}),c=await Reflect.apply(a,this,s);return await e._def.returns._def.type.parseAsync(c,i).catch(e=>{throw o.addIssue(r(c,e)),o})})}else{let e=this;return $f(function(...t){let o=e._def.args.safeParse(t,i);if(!o.success)throw new Kf([n(t,o.error)]);let s=Reflect.apply(a,this,o.data),c=e._def.returns.safeParse(s,i);if(!c.success)throw new Kf([r(s,c.error)]);return c.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new e({...this._def,args:Qp.create(t).rest(Vp.create())})}returns(t){return new e({...this._def,returns:t})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(t,n,r){return new e({args:t||Qp.create([]).rest(Vp.create()),returns:n||Vp.create(),typeName:q.ZodFunction,...K(r)})}},rm=class extends op{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}};rm.create=(e,t)=>new rm({getter:e,typeName:q.ZodLazy,...K(t)});var im=class extends op{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return U(t,{received:t.data,code:H.invalid_literal,expected:this._def.value}),W}return{status:`valid`,value:e.data}}get value(){return this._def.value}};im.create=(e,t)=>new im({value:e,typeName:q.ZodLiteral,...K(t)});function am(e,t){return new om({values:e,typeName:q.ZodEnum,...K(t)})}var om=class e extends op{_parse(e){if(typeof e.data!=`string`){let t=this._getOrReturnCtx(e),n=this._def.values;return U(t,{expected:B.joinValues(n),received:t.parsedType,code:H.invalid_type}),W}if(this._cache||=new Set(this._def.values),!this._cache.has(e.data)){let t=this._getOrReturnCtx(e),n=this._def.values;return U(t,{received:t.data,code:H.invalid_enum_value,options:n}),W}return $f(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(t,n=this._def){return e.create(t,{...this._def,...n})}exclude(t,n=this._def){return e.create(this.options.filter(e=>!t.includes(e)),{...this._def,...n})}};om.create=am;var sm=class extends op{_parse(e){let t=B.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==V.string&&n.parsedType!==V.number){let e=B.objectValues(t);return U(n,{expected:B.joinValues(e),received:n.parsedType,code:H.invalid_type}),W}if(this._cache||=new Set(B.getValidEnumValues(this._def.values)),!this._cache.has(e.data)){let e=B.objectValues(t);return U(n,{received:n.data,code:H.invalid_enum_value,options:e}),W}return $f(e.data)}get enum(){return this._def.values}};sm.create=(e,t)=>new sm({values:e,typeName:q.ZodNativeEnum,...K(t)});var cm=class extends op{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);return t.parsedType!==V.promise&&t.common.async===!1?(U(t,{code:H.invalid_type,expected:V.promise,received:t.parsedType}),W):$f((t.parsedType===V.promise?t.data:Promise.resolve(t.data)).then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}};cm.create=(e,t)=>new cm({type:e,typeName:q.ZodPromise,...K(t)});var lm=class extends op{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===q.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=this._def.effect||null,i={addIssue:e=>{U(n,e),e.fatal?t.abort():t.dirty()},get path(){return n.path}};if(i.addIssue=i.addIssue.bind(i),r.type===`preprocess`){let e=r.transform(n.data,i);if(n.common.async)return Promise.resolve(e).then(async e=>{if(t.value===`aborted`)return W;let r=await this._def.schema._parseAsync({data:e,path:n.path,parent:n});return r.status===`aborted`?W:r.status===`dirty`||t.value===`dirty`?Qf(r.value):r});{if(t.value===`aborted`)return W;let r=this._def.schema._parseSync({data:e,path:n.path,parent:n});return r.status===`aborted`?W:r.status===`dirty`||t.value===`dirty`?Qf(r.value):r}}if(r.type===`refinement`){let e=e=>{let t=r.refinement(e,i);if(n.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error(`Async refinement encountered during synchronous parse operation. Use .parseAsync instead.`);return e};if(n.common.async===!1){let r=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return r.status===`aborted`?W:(r.status===`dirty`&&t.dirty(),e(r.value),{status:t.value,value:r.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(n=>n.status===`aborted`?W:(n.status===`dirty`&&t.dirty(),e(n.value).then(()=>({status:t.value,value:n.value}))))}if(r.type===`transform`)if(n.common.async===!1){let e=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!np(e))return W;let a=r.transform(e.value,i);if(a instanceof Promise)throw Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);return{status:t.value,value:a}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(e=>np(e)?Promise.resolve(r.transform(e.value,i)).then(e=>({status:t.value,value:e})):W);B.assertNever(r)}};lm.create=(e,t,n)=>new lm({schema:e,typeName:q.ZodEffects,effect:t,...K(n)}),lm.createWithPreprocess=(e,t,n)=>new lm({schema:t,effect:{type:`preprocess`,transform:e},typeName:q.ZodEffects,...K(n)});var um=class extends op{_parse(e){return this._getType(e)===V.undefined?$f(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};um.create=(e,t)=>new um({innerType:e,typeName:q.ZodOptional,...K(t)});var dm=class extends op{_parse(e){return this._getType(e)===V.null?$f(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};dm.create=(e,t)=>new dm({innerType:e,typeName:q.ZodNullable,...K(t)});var fm=class extends op{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return t.parsedType===V.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}};fm.create=(e,t)=>new fm({innerType:e,typeName:q.ZodDefault,defaultValue:typeof t.default==`function`?t.default:()=>t.default,...K(t)});var pm=class extends op{_parse(e){let{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return rp(r)?r.then(e=>({status:`valid`,value:e.status===`valid`?e.value:this._def.catchValue({get error(){return new Kf(n.common.issues)},input:n.data})})):{status:`valid`,value:r.status===`valid`?r.value:this._def.catchValue({get error(){return new Kf(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}};pm.create=(e,t)=>new pm({innerType:e,typeName:q.ZodCatch,catchValue:typeof t.catch==`function`?t.catch:()=>t.catch,...K(t)});var mm=class extends op{_parse(e){if(this._getType(e)!==V.nan){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.nan,received:t.parsedType}),W}return{status:`valid`,value:e.data}}};mm.create=e=>new mm({typeName:q.ZodNaN,...K(e)});var hm=class extends op{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}},gm=class e extends op{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?W:e.status===`dirty`?(t.dirty(),Qf(e.value)):this._def.out._parseAsync({data:e.value,path:n.path,parent:n})})();{let e=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?W:e.status===`dirty`?(t.dirty(),{status:`dirty`,value:e.value}):this._def.out._parseSync({data:e.value,path:n.path,parent:n})}}static create(t,n){return new e({in:t,out:n,typeName:q.ZodPipeline})}},_m=class extends op{_parse(e){let t=this._def.innerType._parse(e),n=e=>(np(e)&&(e.value=Object.freeze(e.value)),e);return rp(t)?t.then(e=>n(e)):n(t)}unwrap(){return this._def.innerType}};_m.create=(e,t)=>new _m({innerType:e,typeName:q.ZodReadonly,...K(t)}),Kp.lazycreate;var q;(function(e){e.ZodString=`ZodString`,e.ZodNumber=`ZodNumber`,e.ZodNaN=`ZodNaN`,e.ZodBigInt=`ZodBigInt`,e.ZodBoolean=`ZodBoolean`,e.ZodDate=`ZodDate`,e.ZodSymbol=`ZodSymbol`,e.ZodUndefined=`ZodUndefined`,e.ZodNull=`ZodNull`,e.ZodAny=`ZodAny`,e.ZodUnknown=`ZodUnknown`,e.ZodNever=`ZodNever`,e.ZodVoid=`ZodVoid`,e.ZodArray=`ZodArray`,e.ZodObject=`ZodObject`,e.ZodUnion=`ZodUnion`,e.ZodDiscriminatedUnion=`ZodDiscriminatedUnion`,e.ZodIntersection=`ZodIntersection`,e.ZodTuple=`ZodTuple`,e.ZodRecord=`ZodRecord`,e.ZodMap=`ZodMap`,e.ZodSet=`ZodSet`,e.ZodFunction=`ZodFunction`,e.ZodLazy=`ZodLazy`,e.ZodLiteral=`ZodLiteral`,e.ZodEnum=`ZodEnum`,e.ZodEffects=`ZodEffects`,e.ZodNativeEnum=`ZodNativeEnum`,e.ZodOptional=`ZodOptional`,e.ZodNullable=`ZodNullable`,e.ZodDefault=`ZodDefault`,e.ZodCatch=`ZodCatch`,e.ZodPromise=`ZodPromise`,e.ZodBranded=`ZodBranded`,e.ZodPipeline=`ZodPipeline`,e.ZodReadonly=`ZodReadonly`})(q||={});var vm=jp.create,ym=Np.create;mm.create,Pp.create,Fp.create,Ip.create,Lp.create,Rp.create,zp.create,Bp.create,Vp.create,Hp.create,Up.create;var bm=Wp.create,xm=Kp.create;Kp.strictCreate,qp.create,Yp.create,Zp.create,Qp.create,$p.create,em.create,tm.create,nm.create,rm.create,im.create;var Sm=om.create;sm.create,cm.create,lm.create,um.create,dm.create,lm.createWithPreprocess,gm.create;var Cm=xm({subjectId:vm().min(1,`Выберите предмет`),teacherId:vm().min(1,`Выберите преподавателя`),auditoriumId:vm().min(1,`Выберите аудиторию`),groupIds:bm(vm()).min(1,`Выберите хотя бы одну группу`),type:Sm([`lecture`,`practice`,`laboratory`]),dayOfWeek:ym().min(0).max(5),timeSlot:ym().min(0).max(6),extraInfo:vm().max(2e3,`Не более 2000 символов`).optional()});function wm({isOpen:e,onClose:t,onSubmit:n,initialData:r,lessons:i,scheduleWeekStartKey:a,excludeLessonId:o=null,availableGroups:s,allowMultipleGroups:c}){let{register:l,handleSubmit:u,formState:{errors:d},reset:f,watch:p,setValue:m,getValues:h}=_f({resolver:Uf(Cm),defaultValues:{subjectId:``,teacherId:``,auditoriumId:``,groupIds:[],type:`lecture`,dayOfWeek:0,timeSlot:0,extraInfo:``}}),g=p(`groupIds`),_=p(`dayOfWeek`),v=p(`timeSlot`),y=p(`teacherId`),x=p(`auditoriumId`),S=(0,b.useMemo)(()=>{if(!e||!a)return{room:!1,teacher:!1};let{roomConflict:t,teacherConflict:n}=xs(i,Number(_),Number(v),o??void 0,x,y,a);return{room:!!t,teacher:!!n}},[e,i,_,v,y,x,a,o]);(0,b.useEffect)(()=>{if(e){let e=r?.groupIds&&r.groupIds.length>0?r.groupIds:s[0]?[s[0].id]:[];f({subjectId:r?.subjectId??``,teacherId:r?.teacherId??``,auditoriumId:r?.auditoriumId??``,groupIds:e,type:r?.type??`lecture`,dayOfWeek:r?.dayOfWeek??0,timeSlot:r?.timeSlot??0,extraInfo:r?.extraInfo??``})}},[e,r,f,s]);let C=(e,t)=>{let n=h(`groupIds`);t?n.includes(e)||m(`groupIds`,[...n,e],{shouldValidate:!0}):m(`groupIds`,n.filter(t=>t!==e),{shouldValidate:!0})};return e?(0,I.jsxs)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center`,children:[(0,I.jsx)(`div`,{className:`absolute inset-0 bg-black/50`,onClick:t}),(0,I.jsxs)(`div`,{className:`relative bg-white rounded-xl shadow-xl w-full mx-4 p-6 ${c?`max-w-lg`:`max-w-md`}`,children:[(0,I.jsx)(`h2`,{className:`text-xl font-semibold text-gray-900 mb-4`,children:c?`Добавить занятие`:`Редактировать занятие`}),(0,I.jsxs)(`form`,{onSubmit:u(n),className:`space-y-4`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`label`,{className:`block text-sm font-medium text-gray-700 mb-1`,children:`Предмет`}),(0,I.jsxs)(`select`,{...l(`subjectId`),className:`w-full border border-gray-300 rounded-lg px-3 py-2 text-sm`,children:[(0,I.jsx)(`option`,{value:``,children:`Выберите предмет`}),Za.map(e=>(0,I.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),d.subjectId&&(0,I.jsx)(`p`,{className:`text-red-500 text-xs mt-1`,children:d.subjectId.message})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`label`,{className:`block text-sm font-medium text-gray-700 mb-1`,children:`Преподаватель`}),(0,I.jsxs)(`select`,{...l(`teacherId`),className:`w-full border rounded-lg px-3 py-2 text-sm ${S.teacher?`border-red-500 bg-red-50`:`border-gray-300`}`,children:[(0,I.jsx)(`option`,{value:``,children:`Выберите преподавателя`}),Xa.map(e=>(0,I.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),S.teacher&&(0,I.jsx)(`p`,{className:`text-red-500 text-xs mt-1`,children:`Конфликт: преподаватель уже занят`})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`label`,{className:`block text-sm font-medium text-gray-700 mb-1`,children:`Аудитория`}),(0,I.jsxs)(`select`,{...l(`auditoriumId`),className:`w-full border rounded-lg px-3 py-2 text-sm ${S.room?`border-red-500 bg-red-50`:`border-gray-300`}`,children:[(0,I.jsx)(`option`,{value:``,children:`Выберите аудиторию`}),Qa.map(e=>(0,I.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),S.room&&(0,I.jsx)(`p`,{className:`text-red-500 text-xs mt-1`,children:`Конфликт: аудитория занята`})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`label`,{className:`block text-sm font-medium text-gray-700 mb-1`,children:`Дополнительная информация`}),(0,I.jsx)(`p`,{className:`text-xs text-gray-500 mb-1.5 leading-snug`,children:`Не дублируйте здесь предмет, преподавателя, аудиторию, день и пару — они уже отображаются в карточке. Используйте полные формулировки (например: «чётная неделя», «нечётная неделя», «3-я подгруппа»).`}),(0,I.jsx)(`textarea`,{...l(`extraInfo`),rows:3,className:`w-full border border-gray-300 rounded-lg px-3 py-2 text-sm resize-y min-h-[4.5rem]`}),d.extraInfo&&(0,I.jsx)(`p`,{className:`text-red-500 text-xs mt-1`,children:d.extraInfo.message})]}),c?(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`label`,{className:`block text-sm font-medium text-gray-700 mb-1`,children:`Применить к нескольким группам`}),(0,I.jsx)(`p`,{className:`text-xs text-gray-500 mb-2 leading-snug`,children:`Одинаковое занятие будет создано для каждой отмеченной группы курса — без повторного ввода предмета, преподавателя и времени.`}),(0,I.jsx)(`div`,{className:`max-h-40 overflow-y-auto rounded-lg border border-gray-200 p-2 space-y-1.5`,children:s.length===0?(0,I.jsx)(`p`,{className:`text-sm text-gray-500`,children:`Нет групп для выбранного курса`}):s.map(e=>(0,I.jsxs)(`label`,{className:`flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 rounded px-2 py-1`,children:[(0,I.jsx)(`input`,{type:`checkbox`,checked:g.includes(e.id),onChange:t=>C(e.id,t.target.checked),className:`rounded border-gray-300`}),(0,I.jsxs)(`span`,{children:[e.name,` `,(0,I.jsxs)(`span`,{className:`text-gray-500`,children:[`(`,e.course,` курс)`]})]})]},e.id))}),d.groupIds&&(0,I.jsx)(`p`,{className:`text-red-500 text-xs mt-1`,children:d.groupIds.message})]}):(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`label`,{className:`block text-sm font-medium text-gray-700 mb-1`,children:`Группа`}),(0,I.jsx)(`select`,{value:g[0]??``,onChange:e=>m(`groupIds`,e.target.value?[e.target.value]:[],{shouldValidate:!0}),className:`w-full border border-gray-300 rounded-lg px-3 py-2 text-sm`,children:s.map(e=>(0,I.jsxs)(`option`,{value:e.id,children:[e.name,` (`,e.course,` курс)`]},e.id))}),d.groupIds&&(0,I.jsx)(`p`,{className:`text-red-500 text-xs mt-1`,children:d.groupIds.message})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`label`,{className:`block text-sm font-medium text-gray-700 mb-1`,children:`Тип занятия`}),(0,I.jsxs)(`select`,{...l(`type`),className:`w-full border border-gray-300 rounded-lg px-3 py-2 text-sm`,children:[(0,I.jsx)(`option`,{value:`lecture`,children:`Лекция`}),(0,I.jsx)(`option`,{value:`practice`,children:`Практика`}),(0,I.jsx)(`option`,{value:`laboratory`,children:`Лабораторная`})]})]}),(0,I.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`label`,{className:`block text-sm font-medium text-gray-700 mb-1`,children:`День`}),(0,I.jsx)(`select`,{...l(`dayOfWeek`,{valueAsNumber:!0}),className:`w-full border border-gray-300 rounded-lg px-3 py-2 text-sm`,children:[`Пн`,`Вт`,`Ср`,`Чт`,`Пт`,`Сб`].map((e,t)=>(0,I.jsx)(`option`,{value:t,children:e},t))})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`label`,{className:`block text-sm font-medium text-gray-700 mb-1`,children:`Пара`}),(0,I.jsx)(`select`,{...l(`timeSlot`,{valueAsNumber:!0}),className:`w-full border border-gray-300 rounded-lg px-3 py-2 text-sm`,children:rs.map((e,t)=>(0,I.jsxs)(`option`,{value:t,children:[e.start,`–`,e.end]},t))})]})]}),(0,I.jsxs)(`div`,{className:`flex gap-2 pt-4`,children:[(0,I.jsx)(`button`,{type:`button`,onClick:t,className:`flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50`,children:`Отмена`}),(0,I.jsx)(`button`,{type:`submit`,className:`flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700`,children:`Сохранить`})]})]})]})]}):null}function Tm({isOpen:e,subjectName:t,onConfirm:n,onCancel:r}){return e?(0,I.jsxs)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center`,children:[(0,I.jsx)(`div`,{className:`absolute inset-0 bg-black/50 backdrop-blur-sm`,onClick:r}),(0,I.jsxs)(`div`,{className:`relative bg-white rounded-xl shadow-xl max-w-md w-full mx-4 p-6 text-center`,children:[(0,I.jsx)(`div`,{className:`w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4`,children:(0,I.jsx)(qo,{className:`w-7 h-7 text-red-600`})}),(0,I.jsx)(`h2`,{className:`text-xl font-semibold text-gray-900 mb-2`,children:`Удалить занятие?`}),(0,I.jsxs)(`p`,{className:`text-gray-600 mb-6`,children:[`Вы уверены, что хотите удалить занятие "`,t,`"? Это действие нельзя отменить.`]}),(0,I.jsxs)(`div`,{className:`flex gap-3`,children:[(0,I.jsx)(`button`,{onClick:r,className:`flex-1 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium`,children:`Отмена`}),(0,I.jsx)(`button`,{onClick:n,className:`flex-1 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium`,children:`Удалить`})]})]})]}):null}function Em(e){return`${e.weekStartKey}\u0001${e.dayOfWeek}\u0001${e.timeSlot}`}function Dm({isOpen:e,conflicts:t,onClose:n,onRemoveLesson:r}){let[i,a]=(0,b.useState)(null),[o,s]=(0,b.useState)(new Set);if((0,b.useEffect)(()=>{e||(a(null),s(new Set))},[e]),(0,b.useEffect)(()=>{e&&t.length===0&&n()},[e,t.length,n]),(0,b.useEffect)(()=>{i&&!t.some(e=>Em(e)===i)&&(a(null),s(new Set))},[t,i]),!e)return null;let c=e=>{let t=Em(e);if(i===t){a(null),s(new Set);return}a(t),s(new Set)},l=e=>{let t=[...o].filter(t=>e.some(e=>e.id===t));if(t.length!==0&&window.confirm(`Удалить из расписания записей: ${t.length}. Продолжить? Отменить это действие будет нельзя.`)){for(let e of t)r(e);s(new Set)}},u=e=>{s(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})};return(0,I.jsxs)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4`,children:[(0,I.jsx)(`div`,{className:`absolute inset-0 bg-black/50 backdrop-blur-sm`,onClick:n}),(0,I.jsxs)(`div`,{className:`relative bg-white rounded-xl shadow-xl max-w-xl w-full max-h-[85vh] overflow-hidden flex flex-col`,children:[(0,I.jsxs)(`div`,{className:`p-4 border-b border-gray-200 flex items-center gap-2`,children:[(0,I.jsx)(Jo,{className:`w-6 h-6 text-amber-500 shrink-0`}),(0,I.jsx)(`h2`,{className:`text-lg font-semibold text-gray-900`,children:`Обнаружены конфликты расписания`})]}),(0,I.jsx)(`div`,{className:`overflow-y-auto p-4 space-y-3`,children:t.map(e=>{let t=Em(e),n=i===t;return(0,I.jsxs)(`div`,{className:`rounded-lg border border-red-200 bg-red-50 overflow-hidden text-sm`,children:[(0,I.jsxs)(`div`,{className:`p-3`,children:[(0,I.jsx)(`p`,{className:`font-medium text-red-900 mb-1`,children:e.types.map(e=>e===`room`?`Аудитория`:`Преподаватель`).join(` · `)}),(0,I.jsx)(`p`,{className:`text-red-800 mb-3`,children:e.description}),(0,I.jsx)(`button`,{type:`button`,onClick:()=>c(e),className:`w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white border border-red-300 text-red-900 font-medium hover:bg-red-100/80`,children:n?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Lo,{className:`w-4 h-4`}),`Скрыть исправление`]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Fo,{className:`w-4 h-4`}),`Исправить`]})})]}),n&&(0,I.jsxs)(`div`,{className:`border-t border-red-200 bg-white p-3 space-y-4 text-gray-900`,children:[(0,I.jsxs)(`p`,{className:`text-xs text-gray-600`,children:[`Занятия в одном слоте (неделя `,e.weekStartKey,`):`]}),(0,I.jsx)(`ul`,{className:`space-y-2`,children:e.lessons.map(e=>(0,I.jsxs)(`li`,{className:`flex gap-2 items-start rounded-md border border-gray-200 p-2 text-xs`,children:[(0,I.jsx)(`input`,{type:`checkbox`,checked:o.has(e.id),onChange:()=>u(e.id),className:`mt-0.5 rounded border-gray-300`,"aria-label":`Отметить для удаления`}),(0,I.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,I.jsx)(`p`,{className:`font-medium truncate`,children:as(e.subjectId)}),(0,I.jsxs)(`p`,{className:`text-gray-600`,children:[us(e.groupId),` · `,ss(e.teacherId),` ·`,` `,cs(e.auditoriumId)]})]})]},e.id))}),(0,I.jsxs)(`button`,{type:`button`,disabled:o.size===0,onClick:()=>l(e.lessons),className:`w-full py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed`,children:[`Удалить отмеченные (`,o.size,`)`]})]})]},t)})}),(0,I.jsx)(`div`,{className:`p-4 border-t border-gray-200`,children:(0,I.jsx)(`button`,{type:`button`,onClick:n,className:`w-full py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-medium`,children:`Закрыть`})})]})]})}function Om({isOpen:e,onClose:t,rows:n,sumScheduledScoped:r,sumPlannedScoped:i,totalScheduledHours:a}){return e?(0,I.jsxs)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center p-4`,children:[(0,I.jsx)(`button`,{type:`button`,className:`absolute inset-0 bg-black/40`,"aria-label":`Закрыть`,onClick:t}),(0,I.jsxs)(`div`,{className:`relative bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[85vh] flex flex-col border border-gray-200`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`admin-workload-title`,children:[(0,I.jsxs)(`div`,{className:`p-4 border-b border-gray-200 flex items-start justify-between gap-4`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h2`,{id:`admin-workload-title`,className:`text-lg font-semibold text-gray-900`,children:`Прогресс по преподавателям`}),(0,I.jsxs)(`p`,{className:`text-sm text-gray-600 mt-1`,children:[`В расписании:`,` `,(0,I.jsx)(`strong`,{className:`font-medium text-gray-800`,children:a}),` акад. ч по всем ячейкам (`,2,` ч на пару).`,i>0&&(0,I.jsxs)(I.Fragment,{children:[` `,`Сверка с планом (только преподаватели с известным планом):`,` `,(0,I.jsxs)(`strong`,{className:`font-medium text-gray-800`,children:[r,` / `,i]}),` `,`акад. ч.`]})]})]}),(0,I.jsx)(`button`,{type:`button`,onClick:t,className:`shrink-0 text-gray-500 hover:text-gray-800 text-sm font-medium`,children:`Закрыть`})]}),(0,I.jsxs)(`div`,{className:`overflow-auto flex-1 p-4`,children:[(0,I.jsxs)(`table`,{className:`w-full text-sm border-collapse`,children:[(0,I.jsx)(`thead`,{children:(0,I.jsxs)(`tr`,{className:`border-b border-gray-200 text-left text-gray-600`,children:[(0,I.jsx)(`th`,{className:`py-2 pr-3 font-medium`,children:`Преподаватель`}),(0,I.jsx)(`th`,{className:`py-2 pr-3 font-medium tabular-nums`,children:`Ячеек`}),(0,I.jsx)(`th`,{className:`py-2 pr-3 font-medium tabular-nums`,children:`Занесено, ч`}),(0,I.jsx)(`th`,{className:`py-2 pr-3 font-medium tabular-nums`,children:`План, ч`}),(0,I.jsx)(`th`,{className:`py-2 font-medium tabular-nums`,children:`%`})]})}),(0,I.jsx)(`tbody`,{children:n.map(e=>(0,I.jsxs)(`tr`,{className:`border-b border-gray-100 hover:bg-gray-50/80`,children:[(0,I.jsx)(`td`,{className:`py-2 pr-3 text-gray-900`,children:e.teacherName}),(0,I.jsx)(`td`,{className:`py-2 pr-3 tabular-nums text-gray-700`,children:e.lessonSlots}),(0,I.jsx)(`td`,{className:`py-2 pr-3 tabular-nums text-gray-800 font-medium`,children:e.scheduledHours}),(0,I.jsx)(`td`,{className:`py-2 pr-3 tabular-nums text-gray-700`,children:e.plannedHours==null?`—`:e.plannedHours}),(0,I.jsx)(`td`,{className:`py-2 tabular-nums`,children:e.percent==null?(0,I.jsx)(`span`,{className:`text-gray-400`,children:`—`}):(0,I.jsxs)(`span`,{className:e.percent>=100?`text-emerald-700 font-medium`:e.percent>=80?`text-amber-700`:`text-gray-800`,children:[e.percent,`%`]})})]},e.teacherId))})]}),n.length===0&&(0,I.jsx)(`p`,{className:`text-sm text-gray-500 py-8 text-center`,children:`Нет данных по нагрузке.`})]}),(0,I.jsx)(`div`,{className:`p-4 border-t border-gray-100 text-xs text-gray-500 leading-relaxed`,children:`План: весенние часы из карточки преподавателя или сумма строк индивидуального плана по предметам и группам. Если план не задан, в колонках «План» и «%» стоит прочерк.`})]})]}):null}function km({lesson:e,onEdit:t,onDelete:n}){let{attributes:r,listeners:i,setNodeRef:a,transform:o,isDragging:s}=Pu({id:e.id,data:{lesson:e}}),c=o?{transform:xc.Translate.toString(o)}:void 0,l=`${us(e.groupId)} • ${ds(e.groupId)} курс`;return(0,I.jsxs)(`div`,{ref:a,style:c,className:`relative group/card min-w-0 ${s?`opacity-50 z-50`:``}`,children:[(0,I.jsx)(`div`,{...i,...r,className:`cursor-grab active:cursor-grabbing min-w-0`,onClick:e=>{e.target.closest(`button`)||t(e)},children:(0,I.jsx)(Rs,{lesson:e,compact:!0,showGroupInfo:l,showStaffRoomDetails:!0})}),(0,I.jsxs)(`div`,{className:`absolute top-1 right-1 flex gap-1 opacity-0 group-hover/card:opacity-100 transition-opacity z-10`,onClick:e=>e.stopPropagation(),children:[(0,I.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),t(e)},className:`w-6 h-6 rounded bg-white/90 shadow flex items-center justify-center hover:bg-white text-gray-600 hover:text-blue-600`,title:`Редактировать`,children:(0,I.jsx)(Uo,{className:`w-3 h-3`})}),(0,I.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),n(e)},className:`w-6 h-6 rounded bg-white/90 shadow flex items-center justify-center hover:bg-white text-gray-600 hover:text-red-600`,title:`Удалить`,children:(0,I.jsx)(qo,{className:`w-3 h-3`})})]})]})}function Am({dayOfWeek:e,timeSlot:t,lessons:n,isConflict:r,onEdit:i,onDelete:a,onEmptyClick:o,onAddAnother:s,scheduleReady:c=!0,flashLessonId:l=null}){let{setNodeRef:u,isOver:d}=Ru({id:`cell-${e}-${t}`,data:{dayOfWeek:e,timeSlot:t}}),f=l!=null&&n.some(e=>e.id===l),p=!r&&d?`bg-primary-100/90 ring-2 ring-inset ring-primary-400`:``,m=n.length>0;return(0,I.jsx)(`td`,{ref:u,className:[`border-b border-r border-gray-200 align-top min-w-0 transition-colors`,r?`bg-red-100 p-1.5 ring-2 ring-inset ring-red-500`:`p-2`,p,f?`ring-2 ring-amber-400 ring-offset-2 ring-offset-amber-100 rounded-md z-[1]`:``].filter(Boolean).join(` `),children:m?(0,I.jsxs)(`div`,{className:`${Ws} flex flex-col gap-2`,children:[n.map(e=>(0,I.jsx)(`div`,{"data-schedule-lesson-slot":e.id,children:(0,I.jsx)(km,{lesson:e,onEdit:()=>i(e),onDelete:()=>a(e)})},e.id)),c&&s?(0,I.jsx)(`button`,{type:`button`,onClick:()=>s(e,t),className:`w-full shrink-0 rounded-md border border-dashed border-primary-300/80 py-1.5 text-xs text-primary-700 hover:bg-primary-50/80`,children:`+ Добавить занятие`}):null]}):(0,I.jsx)(`div`,{onClick:()=>c&&o(e,t),className:`${Gs} transition-colors ${c?`bg-gray-50/50 cursor-pointer hover:bg-primary-50 text-gray-400 hover:text-primary-500`:`bg-gray-100 cursor-not-allowed text-gray-300`}`,children:`+`})})}var jm={};jm.version=`0.18.5`;var Mm=1200,Nm=1252,Pm=[874,932,936,949,950,1250,1251,1252,1253,1254,1255,1256,1257,1258,1e4],Fm={0:1252,1:65001,2:65001,77:1e4,128:932,129:949,130:1361,134:936,136:950,161:1253,162:1254,163:1258,177:1255,178:1256,186:1257,204:1251,222:874,238:1250,255:1252,69:6969},Im=function(e){Pm.indexOf(e)!=-1&&(Nm=Fm[0]=e)};function Lm(){Im(1252)}var Rm=function(e){Mm=e,Im(e)};function zm(){Rm(1200),Lm()}function Bm(e){for(var t=[],n=0;n<e.length>>1;++n)t[n]=String.fromCharCode(e.charCodeAt(2*n+1)+(e.charCodeAt(2*n)<<8));return t.join(``)}var Vm=function(e){return String.fromCharCode(e)},Hm=function(e){return String.fromCharCode(e)},Um,Wm=null,Gm=!0,Km=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`;function qm(e){for(var t=``,n=0,r=0,i=0,a=0,o=0,s=0,c=0,l=0;l<e.length;)n=e.charCodeAt(l++),a=n>>2,r=e.charCodeAt(l++),o=(n&3)<<4|r>>4,i=e.charCodeAt(l++),s=(r&15)<<2|i>>6,c=i&63,isNaN(r)?s=c=64:isNaN(i)&&(c=64),t+=Km.charAt(a)+Km.charAt(o)+Km.charAt(s)+Km.charAt(c);return t}function Jm(e){var t=``,n=0,r=0,i=0,a=0,o=0,s=0,c=0;e=e.replace(/[^\w\+\/\=]/g,``);for(var l=0;l<e.length;)a=Km.indexOf(e.charAt(l++)),o=Km.indexOf(e.charAt(l++)),n=a<<2|o>>4,t+=String.fromCharCode(n),s=Km.indexOf(e.charAt(l++)),r=(o&15)<<4|s>>2,s!==64&&(t+=String.fromCharCode(r)),c=Km.indexOf(e.charAt(l++)),i=(s&3)<<6|c,c!==64&&(t+=String.fromCharCode(i));return t}var Ym=(function(){return typeof Buffer<`u`&&typeof process<`u`&&process.versions!==void 0&&!!process.versions.node})(),Xm=(function(){if(typeof Buffer<`u`){var e=!Buffer.from;if(!e)try{Buffer.from(`foo`,`utf8`)}catch{e=!0}return e?function(e,t){return t?new Buffer(e,t):new Buffer(e)}:Buffer.from.bind(Buffer)}return function(){}})();function Zm(e){return Ym?Buffer.alloc?Buffer.alloc(e):new Buffer(e):typeof Uint8Array<`u`?new Uint8Array(e):Array(e)}function Qm(e){return Ym?Buffer.allocUnsafe?Buffer.allocUnsafe(e):new Buffer(e):typeof Uint8Array<`u`?new Uint8Array(e):Array(e)}var $m=function(e){return Ym?Xm(e,`binary`):e.split(``).map(function(e){return e.charCodeAt(0)&255})};function eh(e){if(typeof ArrayBuffer>`u`)return $m(e);for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),r=0;r!=e.length;++r)n[r]=e.charCodeAt(r)&255;return t}function th(e){if(Array.isArray(e))return e.map(function(e){return String.fromCharCode(e)}).join(``);for(var t=[],n=0;n<e.length;++n)t[n]=String.fromCharCode(e[n]);return t.join(``)}function nh(e){if(typeof Uint8Array>`u`)throw Error(`Unsupported`);return new Uint8Array(e)}var rh=Ym?function(e){return Buffer.concat(e.map(function(e){return Buffer.isBuffer(e)?e:Xm(e)}))}:function(e){if(typeof Uint8Array<`u`){var t=0,n=0;for(t=0;t<e.length;++t)n+=e[t].length;var r=new Uint8Array(n),i=0;for(t=0,n=0;t<e.length;n+=i,++t)if(i=e[t].length,e[t]instanceof Uint8Array)r.set(e[t],n);else if(typeof e[t]==`string`)throw`wtf`;else r.set(new Uint8Array(e[t]),n);return r}return[].concat.apply([],e.map(function(e){return Array.isArray(e)?e:[].slice.call(e)}))};function ih(e){for(var t=[],n=0,r=e.length+250,i=Zm(e.length+255),a=0;a<e.length;++a){var o=e.charCodeAt(a);if(o<128)i[n++]=o;else if(o<2048)i[n++]=192|o>>6&31,i[n++]=128|o&63;else if(o>=55296&&o<57344){o=(o&1023)+64;var s=e.charCodeAt(++a)&1023;i[n++]=240|o>>8&7,i[n++]=128|o>>2&63,i[n++]=128|s>>6&15|(o&3)<<4,i[n++]=128|s&63}else i[n++]=224|o>>12&15,i[n++]=128|o>>6&63,i[n++]=128|o&63;n>r&&(t.push(i.slice(0,n)),n=0,i=Zm(65535),r=65530)}return t.push(i.slice(0,n)),rh(t)}var ah=/\u0000/g,oh=/[\u0001-\u0006]/g;function sh(e){for(var t=``,n=e.length-1;n>=0;)t+=e.charAt(n--);return t}function ch(e,t){var n=``+e;return n.length>=t?n:Bg(`0`,t-n.length)+n}function lh(e,t){var n=``+e;return n.length>=t?n:Bg(` `,t-n.length)+n}function uh(e,t){var n=``+e;return n.length>=t?n:n+Bg(` `,t-n.length)}function dh(e,t){var n=``+Math.round(e);return n.length>=t?n:Bg(`0`,t-n.length)+n}function fh(e,t){var n=``+e;return n.length>=t?n:Bg(`0`,t-n.length)+n}var ph=2**32;function mh(e,t){return e>ph||e<-ph?dh(e,t):fh(Math.round(e),t)}function hh(e,t){return t||=0,e.length>=7+t&&(e.charCodeAt(t)|32)==103&&(e.charCodeAt(t+1)|32)==101&&(e.charCodeAt(t+2)|32)==110&&(e.charCodeAt(t+3)|32)==101&&(e.charCodeAt(t+4)|32)==114&&(e.charCodeAt(t+5)|32)==97&&(e.charCodeAt(t+6)|32)==108}var gh=[[`Sun`,`Sunday`],[`Mon`,`Monday`],[`Tue`,`Tuesday`],[`Wed`,`Wednesday`],[`Thu`,`Thursday`],[`Fri`,`Friday`],[`Sat`,`Saturday`]],_h=[[`J`,`Jan`,`January`],[`F`,`Feb`,`February`],[`M`,`Mar`,`March`],[`A`,`Apr`,`April`],[`M`,`May`,`May`],[`J`,`Jun`,`June`],[`J`,`Jul`,`July`],[`A`,`Aug`,`August`],[`S`,`Sep`,`September`],[`O`,`Oct`,`October`],[`N`,`Nov`,`November`],[`D`,`Dec`,`December`]];function vh(e){return e||={},e[0]=`General`,e[1]=`0`,e[2]=`0.00`,e[3]=`#,##0`,e[4]=`#,##0.00`,e[9]=`0%`,e[10]=`0.00%`,e[11]=`0.00E+00`,e[12]=`# ?/?`,e[13]=`# ??/??`,e[14]=`m/d/yy`,e[15]=`d-mmm-yy`,e[16]=`d-mmm`,e[17]=`mmm-yy`,e[18]=`h:mm AM/PM`,e[19]=`h:mm:ss AM/PM`,e[20]=`h:mm`,e[21]=`h:mm:ss`,e[22]=`m/d/yy h:mm`,e[37]=`#,##0 ;(#,##0)`,e[38]=`#,##0 ;[Red](#,##0)`,e[39]=`#,##0.00;(#,##0.00)`,e[40]=`#,##0.00;[Red](#,##0.00)`,e[45]=`mm:ss`,e[46]=`[h]:mm:ss`,e[47]=`mmss.0`,e[48]=`##0.0E+0`,e[49]=`@`,e[56]=`"上午/下午 "hh"時"mm"分"ss"秒 "`,e}var yh={0:`General`,1:`0`,2:`0.00`,3:`#,##0`,4:`#,##0.00`,9:`0%`,10:`0.00%`,11:`0.00E+00`,12:`# ?/?`,13:`# ??/??`,14:`m/d/yy`,15:`d-mmm-yy`,16:`d-mmm`,17:`mmm-yy`,18:`h:mm AM/PM`,19:`h:mm:ss AM/PM`,20:`h:mm`,21:`h:mm:ss`,22:`m/d/yy h:mm`,37:`#,##0 ;(#,##0)`,38:`#,##0 ;[Red](#,##0)`,39:`#,##0.00;(#,##0.00)`,40:`#,##0.00;[Red](#,##0.00)`,45:`mm:ss`,46:`[h]:mm:ss`,47:`mmss.0`,48:`##0.0E+0`,49:`@`,56:`"上午/下午 "hh"時"mm"分"ss"秒 "`},bh={5:37,6:38,7:39,8:40,23:0,24:0,25:0,26:0,27:14,28:14,29:14,30:14,31:14,50:14,51:14,52:14,53:14,54:14,55:14,56:14,57:14,58:14,59:1,60:2,61:3,62:4,67:9,68:10,69:12,70:13,71:14,72:14,73:15,74:16,75:17,76:20,77:21,78:22,79:45,80:46,81:47,82:0},xh={5:`"$"#,##0_);\\("$"#,##0\\)`,63:`"$"#,##0_);\\("$"#,##0\\)`,6:`"$"#,##0_);[Red]\\("$"#,##0\\)`,64:`"$"#,##0_);[Red]\\("$"#,##0\\)`,7:`"$"#,##0.00_);\\("$"#,##0.00\\)`,65:`"$"#,##0.00_);\\("$"#,##0.00\\)`,8:`"$"#,##0.00_);[Red]\\("$"#,##0.00\\)`,66:`"$"#,##0.00_);[Red]\\("$"#,##0.00\\)`,41:`_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)`,42:`_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)`,43:`_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)`,44:`_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)`};function Sh(e,t,n){for(var r=e<0?-1:1,i=e*r,a=0,o=1,s=0,c=1,l=0,u=0,d=Math.floor(i);l<t&&(d=Math.floor(i),s=d*o+a,u=d*l+c,!(i-d<5e-8));)i=1/(i-d),a=o,o=s,c=l,l=u;if(u>t&&(l>t?(u=c,s=a):(u=l,s=o)),!n)return[0,r*s,u];var f=Math.floor(r*s/u);return[f,r*s-f*u,u]}function Ch(e,t,n){if(e>2958465||e<0)return null;var r=e|0,i=Math.floor(86400*(e-r)),a=0,o=[],s={D:r,T:i,u:86400*(e-r)-i,y:0,m:0,d:0,H:0,M:0,S:0,q:0};if(Math.abs(s.u)<1e-6&&(s.u=0),t&&t.date1904&&(r+=1462),s.u>.9999&&(s.u=0,++i==86400&&(s.T=i=0,++r,++s.D)),r===60)o=n?[1317,10,29]:[1900,2,29],a=3;else if(r===0)o=n?[1317,8,29]:[1900,1,0],a=6;else{r>60&&--r;var c=new Date(1900,0,1);c.setDate(c.getDate()+r-1),o=[c.getFullYear(),c.getMonth()+1,c.getDate()],a=c.getDay(),r<60&&(a=(a+6)%7),n&&(a=Ph(c,o))}return s.y=o[0],s.m=o[1],s.d=o[2],s.S=i%60,i=Math.floor(i/60),s.M=i%60,i=Math.floor(i/60),s.H=i,s.q=a,s}var wh=new Date(1899,11,31,0,0,0),Th=wh.getTime(),Eh=new Date(1900,2,1,0,0,0);function Dh(e,t){var n=e.getTime();return t?n-=1461*24*60*60*1e3:e>=Eh&&(n+=1440*60*1e3),(n-(Th+(e.getTimezoneOffset()-wh.getTimezoneOffset())*6e4))/(1440*60*1e3)}function Oh(e){return e.indexOf(`.`)==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/,`$1`)}function kh(e){return e.indexOf(`E`)==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/,`$1E`).replace(/(E[+-])(\d)$/,`$10$2`)}function Ah(e){var t=e<0?12:11,n=Oh(e.toFixed(12));return n.length<=t||(n=e.toPrecision(10),n.length<=t)?n:e.toExponential(5)}function jh(e){var t=Oh(e.toFixed(11));return t.length>(e<0?12:11)||t===`0`||t===`-0`?e.toPrecision(6):t}function Mh(e){var t=Math.floor(Math.log(Math.abs(e))*Math.LOG10E);return Oh(kh((t>=-4&&t<=-1?e.toPrecision(10+t):Math.abs(t)<=9?Ah(e):t===10?e.toFixed(10).substr(0,12):jh(e)).toUpperCase()))}function Nh(e,t){switch(typeof e){case`string`:return e;case`boolean`:return e?`TRUE`:`FALSE`;case`number`:return(e|0)===e?e.toString(10):Mh(e);case`undefined`:return``;case`object`:if(e==null)return``;if(e instanceof Date)return dg(14,Dh(e,t&&t.date1904),t)}throw Error(`unsupported value in General format: `+e)}function Ph(e,t){t[0]-=581;var n=e.getDay();return e<60&&(n=(n+6)%7),n}function Fh(e,t,n,r){var i=``,a=0,o=0,s=n.y,c,l=0;switch(e){case 98:s=n.y+543;case 121:switch(t.length){case 1:case 2:c=s%100,l=2;break;default:c=s%1e4,l=4;break}break;case 109:switch(t.length){case 1:case 2:c=n.m,l=t.length;break;case 3:return _h[n.m-1][1];case 5:return _h[n.m-1][0];default:return _h[n.m-1][2]}break;case 100:switch(t.length){case 1:case 2:c=n.d,l=t.length;break;case 3:return gh[n.q][0];default:return gh[n.q][1]}break;case 104:switch(t.length){case 1:case 2:c=1+(n.H+11)%12,l=t.length;break;default:throw`bad hour format: `+t}break;case 72:switch(t.length){case 1:case 2:c=n.H,l=t.length;break;default:throw`bad hour format: `+t}break;case 77:switch(t.length){case 1:case 2:c=n.M,l=t.length;break;default:throw`bad minute format: `+t}break;case 115:if(t!=`s`&&t!=`ss`&&t!=`.0`&&t!=`.00`&&t!=`.000`)throw`bad second format: `+t;return n.u===0&&(t==`s`||t==`ss`)?ch(n.S,t.length):(o=r>=2?r===3?1e3:100:r===1?10:1,a=Math.round(o*(n.S+n.u)),a>=60*o&&(a=0),t===`s`?a===0?`0`:``+a/o:(i=ch(a,2+r),t===`ss`?i.substr(0,2):`.`+i.substr(2,t.length-1)));case 90:switch(t){case`[h]`:case`[hh]`:c=n.D*24+n.H;break;case`[m]`:case`[mm]`:c=(n.D*24+n.H)*60+n.M;break;case`[s]`:case`[ss]`:c=((n.D*24+n.H)*60+n.M)*60+Math.round(n.S+n.u);break;default:throw`bad abstime format: `+t}l=t.length===3?1:2;break;case 101:c=s,l=1;break}return l>0?ch(c,l):``}function Ih(e){var t=3;if(e.length<=t)return e;for(var n=e.length%t,r=e.substr(0,n);n!=e.length;n+=t)r+=(r.length>0?`,`:``)+e.substr(n,t);return r}var Lh=/%/g;function Rh(e,t,n){var r=t.replace(Lh,``),i=t.length-r.length;return rg(e,r,n*10**(2*i))+Bg(`%`,i)}function zh(e,t,n){for(var r=t.length-1;t.charCodeAt(r-1)===44;)--r;return rg(e,t.substr(0,r),n/10**(3*(t.length-r)))}function Bh(e,t){var n,r=e.indexOf(`E`)-e.indexOf(`.`)-1;if(e.match(/^#+0.0E\+0$/)){if(t==0)return`0.0E+0`;if(t<0)return`-`+Bh(e,-t);var i=e.indexOf(`.`);i===-1&&(i=e.indexOf(`E`));var a=Math.floor(Math.log(t)*Math.LOG10E)%i;if(a<0&&(a+=i),n=(t/10**a).toPrecision(r+1+(i+a)%i),n.indexOf(`e`)===-1){var o=Math.floor(Math.log(t)*Math.LOG10E);for(n.indexOf(`.`)===-1?n=n.charAt(0)+`.`+n.substr(1)+`E+`+(o-n.length+a):n+=`E+`+(o-a);n.substr(0,2)===`0.`;)n=n.charAt(0)+n.substr(2,i)+`.`+n.substr(2+i),n=n.replace(/^0+([1-9])/,`$1`).replace(/^0+\./,`0.`);n=n.replace(/\+-/,`-`)}n=n.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(e,t,n,r){return t+n+r.substr(0,(i+a)%i)+`.`+r.substr(a)+`E`})}else n=t.toExponential(r);return e.match(/E\+00$/)&&n.match(/e[+-]\d$/)&&(n=n.substr(0,n.length-1)+`0`+n.charAt(n.length-1)),e.match(/E\-/)&&n.match(/e\+/)&&(n=n.replace(/e\+/,`e`)),n.replace(`e`,`E`)}var Vh=/# (\?+)( ?)\/( ?)(\d+)/;function Hh(e,t,n){var r=parseInt(e[4],10),i=Math.round(t*r),a=Math.floor(i/r),o=i-a*r,s=r;return n+(a===0?``:``+a)+` `+(o===0?Bg(` `,e[1].length+1+e[4].length):lh(o,e[1].length)+e[2]+`/`+e[3]+ch(s,e[4].length))}function Uh(e,t,n){return n+(t===0?``:``+t)+Bg(` `,e[1].length+2+e[4].length)}var Wh=/^#*0*\.([0#]+)/,Gh=/\).*[0#]/,Kh=/\(###\) ###\\?-####/;function qh(e){for(var t=``,n,r=0;r!=e.length;++r)switch(n=e.charCodeAt(r)){case 35:break;case 63:t+=` `;break;case 48:t+=`0`;break;default:t+=String.fromCharCode(n)}return t}function Jh(e,t){var n=10**t;return``+Math.round(e*n)/n}function Yh(e,t){var n=e-Math.floor(e),r=10**t;return t<(``+Math.round(n*r)).length?0:Math.round(n*r)}function Xh(e,t){return t<(``+Math.round((e-Math.floor(e))*10**t)).length?1:0}function Zh(e){return e<2147483647&&e>-2147483648?``+(e>=0?e|0:e-1|0):``+Math.floor(e)}function Qh(e,t,n){if(e.charCodeAt(0)===40&&!t.match(Gh)){var r=t.replace(/\( */,``).replace(/ \)/,``).replace(/\)/,``);return n>=0?Qh(`n`,r,n):`(`+Qh(`n`,r,-n)+`)`}if(t.charCodeAt(t.length-1)===44)return zh(e,t,n);if(t.indexOf(`%`)!==-1)return Rh(e,t,n);if(t.indexOf(`E`)!==-1)return Bh(t,n);if(t.charCodeAt(0)===36)return`$`+Qh(e,t.substr(t.charAt(1)==` `?2:1),n);var i,a,o,s,c=Math.abs(n),l=n<0?`-`:``;if(t.match(/^00+$/))return l+mh(c,t.length);if(t.match(/^[#?]+$/))return i=mh(n,0),i===`0`&&(i=``),i.length>t.length?i:qh(t.substr(0,t.length-i.length))+i;if(a=t.match(Vh))return Hh(a,c,l);if(t.match(/^#+0+$/))return l+mh(c,t.length-t.indexOf(`0`));if(a=t.match(Wh))return i=Jh(n,a[1].length).replace(/^([^\.]+)$/,`$1.`+qh(a[1])).replace(/\.$/,`.`+qh(a[1])).replace(/\.(\d*)$/,function(e,t){return`.`+t+Bg(`0`,qh(a[1]).length-t.length)}),t.indexOf(`0.`)===-1?i.replace(/^0\./,`.`):i;if(t=t.replace(/^#+([0.])/,`$1`),a=t.match(/^(0*)\.(#*)$/))return l+Jh(c,a[2].length).replace(/\.(\d*[1-9])0*$/,`.$1`).replace(/^(-?\d*)$/,`$1.`).replace(/^0\./,a[1].length?`0.`:`.`);if(a=t.match(/^#{1,3},##0(\.?)$/))return l+Ih(mh(c,0));if(a=t.match(/^#,##0\.([#0]*0)$/))return n<0?`-`+Qh(e,t,-n):Ih(``+(Math.floor(n)+Xh(n,a[1].length)))+`.`+ch(Yh(n,a[1].length),a[1].length);if(a=t.match(/^#,#*,#0/))return Qh(e,t.replace(/^#,#*,/,``),n);if(a=t.match(/^([0#]+)(\\?-([0#]+))+$/))return i=sh(Qh(e,t.replace(/[\\-]/g,``),n)),o=0,sh(sh(t.replace(/\\/g,``)).replace(/[0#]/g,function(e){return o<i.length?i.charAt(o++):e===`0`?`0`:``}));if(t.match(Kh))return i=Qh(e,`##########`,n),`(`+i.substr(0,3)+`) `+i.substr(3,3)+`-`+i.substr(6);var u=``;if(a=t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(a[4].length,7),s=Sh(c,10**o-1,!1),i=``+l,u=rg(`n`,a[1],s[1]),u.charAt(u.length-1)==` `&&(u=u.substr(0,u.length-1)+`0`),i+=u+a[2]+`/`+a[3],u=uh(s[2],o),u.length<a[4].length&&(u=qh(a[4].substr(a[4].length-u.length))+u),i+=u,i;if(a=t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(Math.max(a[1].length,a[4].length),7),s=Sh(c,10**o-1,!0),l+(s[0]||(s[1]?``:`0`))+` `+(s[1]?lh(s[1],o)+a[2]+`/`+a[3]+uh(s[2],o):Bg(` `,2*o+1+a[2].length+a[3].length));if(a=t.match(/^[#0?]+$/))return i=mh(n,0),t.length<=i.length?i:qh(t.substr(0,t.length-i.length))+i;if(a=t.match(/^([#0?]+)\.([#0]+)$/)){i=``+n.toFixed(Math.min(a[2].length,10)).replace(/([^0])0+$/,`$1`),o=i.indexOf(`.`);var d=t.indexOf(`.`)-o,f=t.length-i.length-d;return qh(t.substr(0,d)+i+t.substr(t.length-f))}if(a=t.match(/^00,000\.([#0]*0)$/))return o=Yh(n,a[1].length),n<0?`-`+Qh(e,t,-n):Ih(Zh(n)).replace(/^\d,\d{3}$/,`0$&`).replace(/^\d*$/,function(e){return`00,`+(e.length<3?ch(0,3-e.length):``)+e})+`.`+ch(o,a[1].length);switch(t){case`###,##0.00`:return Qh(e,`#,##0.00`,n);case`###,###`:case`##,###`:case`#,###`:var p=Ih(mh(c,0));return p===`0`?``:l+p;case`###,###.00`:return Qh(e,`###,##0.00`,n).replace(/^0\./,`.`);case`#,###.00`:return Qh(e,`#,##0.00`,n).replace(/^0\./,`.`);default:}throw Error(`unsupported format |`+t+`|`)}function $h(e,t,n){for(var r=t.length-1;t.charCodeAt(r-1)===44;)--r;return rg(e,t.substr(0,r),n/10**(3*(t.length-r)))}function eg(e,t,n){var r=t.replace(Lh,``),i=t.length-r.length;return rg(e,r,n*10**(2*i))+Bg(`%`,i)}function tg(e,t){var n,r=e.indexOf(`E`)-e.indexOf(`.`)-1;if(e.match(/^#+0.0E\+0$/)){if(t==0)return`0.0E+0`;if(t<0)return`-`+tg(e,-t);var i=e.indexOf(`.`);i===-1&&(i=e.indexOf(`E`));var a=Math.floor(Math.log(t)*Math.LOG10E)%i;if(a<0&&(a+=i),n=(t/10**a).toPrecision(r+1+(i+a)%i),!n.match(/[Ee]/)){var o=Math.floor(Math.log(t)*Math.LOG10E);n.indexOf(`.`)===-1?n=n.charAt(0)+`.`+n.substr(1)+`E+`+(o-n.length+a):n+=`E+`+(o-a),n=n.replace(/\+-/,`-`)}n=n.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(e,t,n,r){return t+n+r.substr(0,(i+a)%i)+`.`+r.substr(a)+`E`})}else n=t.toExponential(r);return e.match(/E\+00$/)&&n.match(/e[+-]\d$/)&&(n=n.substr(0,n.length-1)+`0`+n.charAt(n.length-1)),e.match(/E\-/)&&n.match(/e\+/)&&(n=n.replace(/e\+/,`e`)),n.replace(`e`,`E`)}function ng(e,t,n){if(e.charCodeAt(0)===40&&!t.match(Gh)){var r=t.replace(/\( */,``).replace(/ \)/,``).replace(/\)/,``);return n>=0?ng(`n`,r,n):`(`+ng(`n`,r,-n)+`)`}if(t.charCodeAt(t.length-1)===44)return $h(e,t,n);if(t.indexOf(`%`)!==-1)return eg(e,t,n);if(t.indexOf(`E`)!==-1)return tg(t,n);if(t.charCodeAt(0)===36)return`$`+ng(e,t.substr(t.charAt(1)==` `?2:1),n);var i,a,o,s,c=Math.abs(n),l=n<0?`-`:``;if(t.match(/^00+$/))return l+ch(c,t.length);if(t.match(/^[#?]+$/))return i=``+n,n===0&&(i=``),i.length>t.length?i:qh(t.substr(0,t.length-i.length))+i;if(a=t.match(Vh))return Uh(a,c,l);if(t.match(/^#+0+$/))return l+ch(c,t.length-t.indexOf(`0`));if(a=t.match(Wh))return i=(``+n).replace(/^([^\.]+)$/,`$1.`+qh(a[1])).replace(/\.$/,`.`+qh(a[1])),i=i.replace(/\.(\d*)$/,function(e,t){return`.`+t+Bg(`0`,qh(a[1]).length-t.length)}),t.indexOf(`0.`)===-1?i.replace(/^0\./,`.`):i;if(t=t.replace(/^#+([0.])/,`$1`),a=t.match(/^(0*)\.(#*)$/))return l+(``+c).replace(/\.(\d*[1-9])0*$/,`.$1`).replace(/^(-?\d*)$/,`$1.`).replace(/^0\./,a[1].length?`0.`:`.`);if(a=t.match(/^#{1,3},##0(\.?)$/))return l+Ih(``+c);if(a=t.match(/^#,##0\.([#0]*0)$/))return n<0?`-`+ng(e,t,-n):Ih(``+n)+`.`+Bg(`0`,a[1].length);if(a=t.match(/^#,#*,#0/))return ng(e,t.replace(/^#,#*,/,``),n);if(a=t.match(/^([0#]+)(\\?-([0#]+))+$/))return i=sh(ng(e,t.replace(/[\\-]/g,``),n)),o=0,sh(sh(t.replace(/\\/g,``)).replace(/[0#]/g,function(e){return o<i.length?i.charAt(o++):e===`0`?`0`:``}));if(t.match(Kh))return i=ng(e,`##########`,n),`(`+i.substr(0,3)+`) `+i.substr(3,3)+`-`+i.substr(6);var u=``;if(a=t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(a[4].length,7),s=Sh(c,10**o-1,!1),i=``+l,u=rg(`n`,a[1],s[1]),u.charAt(u.length-1)==` `&&(u=u.substr(0,u.length-1)+`0`),i+=u+a[2]+`/`+a[3],u=uh(s[2],o),u.length<a[4].length&&(u=qh(a[4].substr(a[4].length-u.length))+u),i+=u,i;if(a=t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return o=Math.min(Math.max(a[1].length,a[4].length),7),s=Sh(c,10**o-1,!0),l+(s[0]||(s[1]?``:`0`))+` `+(s[1]?lh(s[1],o)+a[2]+`/`+a[3]+uh(s[2],o):Bg(` `,2*o+1+a[2].length+a[3].length));if(a=t.match(/^[#0?]+$/))return i=``+n,t.length<=i.length?i:qh(t.substr(0,t.length-i.length))+i;if(a=t.match(/^([#0]+)\.([#0]+)$/)){i=``+n.toFixed(Math.min(a[2].length,10)).replace(/([^0])0+$/,`$1`),o=i.indexOf(`.`);var d=t.indexOf(`.`)-o,f=t.length-i.length-d;return qh(t.substr(0,d)+i+t.substr(t.length-f))}if(a=t.match(/^00,000\.([#0]*0)$/))return n<0?`-`+ng(e,t,-n):Ih(``+n).replace(/^\d,\d{3}$/,`0$&`).replace(/^\d*$/,function(e){return`00,`+(e.length<3?ch(0,3-e.length):``)+e})+`.`+ch(0,a[1].length);switch(t){case`###,###`:case`##,###`:case`#,###`:var p=Ih(``+c);return p===`0`?``:l+p;default:if(t.match(/\.[0#?]*$/))return ng(e,t.slice(0,t.lastIndexOf(`.`)),n)+qh(t.slice(t.lastIndexOf(`.`)))}throw Error(`unsupported format |`+t+`|`)}function rg(e,t,n){return(n|0)===n?ng(e,t,n):Qh(e,t,n)}function ig(e){for(var t=[],n=!1,r=0,i=0;r<e.length;++r)switch(e.charCodeAt(r)){case 34:n=!n;break;case 95:case 42:case 92:++r;break;case 59:t[t.length]=e.substr(i,r-i),i=r+1}if(t[t.length]=e.substr(i),n===!0)throw Error(`Format |`+e+`| unterminated string `);return t}var ag=/\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;function og(e){for(var t=0,n=``,r=``;t<e.length;)switch(n=e.charAt(t)){case`G`:hh(e,t)&&(t+=6),t++;break;case`"`:for(;e.charCodeAt(++t)!==34&&t<e.length;);++t;break;case`\\`:t+=2;break;case`_`:t+=2;break;case`@`:++t;break;case`B`:case`b`:if(e.charAt(t+1)===`1`||e.charAt(t+1)===`2`)return!0;case`M`:case`D`:case`Y`:case`H`:case`S`:case`E`:case`m`:case`d`:case`y`:case`h`:case`s`:case`e`:case`g`:return!0;case`A`:case`a`:case`上`:if(e.substr(t,3).toUpperCase()===`A/P`||e.substr(t,5).toUpperCase()===`AM/PM`||e.substr(t,5).toUpperCase()===`上午/下午`)return!0;++t;break;case`[`:for(r=n;e.charAt(t++)!==`]`&&t<e.length;)r+=e.charAt(t);if(r.match(ag))return!0;break;case`.`:case`0`:case`#`:for(;t<e.length&&(`0#?.,E+-%`.indexOf(n=e.charAt(++t))>-1||n==`\\`&&e.charAt(t+1)==`-`&&`0#`.indexOf(e.charAt(t+2))>-1););break;case`?`:for(;e.charAt(++t)===n;);break;case`*`:++t,(e.charAt(t)==` `||e.charAt(t)==`*`)&&++t;break;case`(`:case`)`:++t;break;case`1`:case`2`:case`3`:case`4`:case`5`:case`6`:case`7`:case`8`:case`9`:for(;t<e.length&&`0123456789`.indexOf(e.charAt(++t))>-1;);break;case` `:++t;break;default:++t;break}return!1}function sg(e,t,n,r){for(var i=[],a=``,o=0,s=``,c=`t`,l,u,d,f=`H`;o<e.length;)switch(s=e.charAt(o)){case`G`:if(!hh(e,o))throw Error(`unrecognized character `+s+` in `+e);i[i.length]={t:`G`,v:`General`},o+=7;break;case`"`:for(a=``;(d=e.charCodeAt(++o))!==34&&o<e.length;)a+=String.fromCharCode(d);i[i.length]={t:`t`,v:a},++o;break;case`\\`:var p=e.charAt(++o),m=p===`(`||p===`)`?p:`t`;i[i.length]={t:m,v:p},++o;break;case`_`:i[i.length]={t:`t`,v:` `},o+=2;break;case`@`:i[i.length]={t:`T`,v:t},++o;break;case`B`:case`b`:if(e.charAt(o+1)===`1`||e.charAt(o+1)===`2`){if(l==null&&(l=Ch(t,n,e.charAt(o+1)===`2`),l==null))return``;i[i.length]={t:`X`,v:e.substr(o,2)},c=s,o+=2;break}case`M`:case`D`:case`Y`:case`H`:case`S`:case`E`:s=s.toLowerCase();case`m`:case`d`:case`y`:case`h`:case`s`:case`e`:case`g`:if(t<0||l==null&&(l=Ch(t,n),l==null))return``;for(a=s;++o<e.length&&e.charAt(o).toLowerCase()===s;)a+=s;s===`m`&&c.toLowerCase()===`h`&&(s=`M`),s===`h`&&(s=f),i[i.length]={t:s,v:a},c=s;break;case`A`:case`a`:case`上`:var h={t:s,v:s};if(l??=Ch(t,n),e.substr(o,3).toUpperCase()===`A/P`?(l!=null&&(h.v=l.H>=12?`P`:`A`),h.t=`T`,f=`h`,o+=3):e.substr(o,5).toUpperCase()===`AM/PM`?(l!=null&&(h.v=l.H>=12?`PM`:`AM`),h.t=`T`,o+=5,f=`h`):e.substr(o,5).toUpperCase()===`上午/下午`?(l!=null&&(h.v=l.H>=12?`下午`:`上午`),h.t=`T`,o+=5,f=`h`):(h.t=`t`,++o),l==null&&h.t===`T`)return``;i[i.length]=h,c=s;break;case`[`:for(a=s;e.charAt(o++)!==`]`&&o<e.length;)a+=e.charAt(o);if(a.slice(-1)!==`]`)throw`unterminated "[" block: |`+a+`|`;if(a.match(ag)){if(l==null&&(l=Ch(t,n),l==null))return``;i[i.length]={t:`Z`,v:a.toLowerCase()},c=a.charAt(1)}else a.indexOf(`$`)>-1&&(a=(a.match(/\$([^-\[\]]*)/)||[])[1]||`$`,og(e)||(i[i.length]={t:`t`,v:a}));break;case`.`:if(l!=null){for(a=s;++o<e.length&&(s=e.charAt(o))===`0`;)a+=s;i[i.length]={t:`s`,v:a};break}case`0`:case`#`:for(a=s;++o<e.length&&`0#?.,E+-%`.indexOf(s=e.charAt(o))>-1;)a+=s;i[i.length]={t:`n`,v:a};break;case`?`:for(a=s;e.charAt(++o)===s;)a+=s;i[i.length]={t:s,v:a},c=s;break;case`*`:++o,(e.charAt(o)==` `||e.charAt(o)==`*`)&&++o;break;case`(`:case`)`:i[i.length]={t:r===1?`t`:s,v:s},++o;break;case`1`:case`2`:case`3`:case`4`:case`5`:case`6`:case`7`:case`8`:case`9`:for(a=s;o<e.length&&`0123456789`.indexOf(e.charAt(++o))>-1;)a+=e.charAt(o);i[i.length]={t:`D`,v:a};break;case` `:i[i.length]={t:s,v:s},++o;break;case`$`:i[i.length]={t:`t`,v:`$`},++o;break;default:if(`,$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP`.indexOf(s)===-1)throw Error(`unrecognized character `+s+` in `+e);i[i.length]={t:`t`,v:s},++o;break}var g=0,_=0,v;for(o=i.length-1,c=`t`;o>=0;--o)switch(i[o].t){case`h`:case`H`:i[o].t=f,c=`h`,g<1&&(g=1);break;case`s`:(v=i[o].v.match(/\.0+$/))&&(_=Math.max(_,v[0].length-1)),g<3&&(g=3);case`d`:case`y`:case`M`:case`e`:c=i[o].t;break;case`m`:c===`s`&&(i[o].t=`M`,g<2&&(g=2));break;case`X`:break;case`Z`:g<1&&i[o].v.match(/[Hh]/)&&(g=1),g<2&&i[o].v.match(/[Mm]/)&&(g=2),g<3&&i[o].v.match(/[Ss]/)&&(g=3)}switch(g){case 0:break;case 1:l.u>=.5&&(l.u=0,++l.S),l.S>=60&&(l.S=0,++l.M),l.M>=60&&(l.M=0,++l.H);break;case 2:l.u>=.5&&(l.u=0,++l.S),l.S>=60&&(l.S=0,++l.M);break}var y=``,b;for(o=0;o<i.length;++o)switch(i[o].t){case`t`:case`T`:case` `:case`D`:break;case`X`:i[o].v=``,i[o].t=`;`;break;case`d`:case`m`:case`y`:case`h`:case`H`:case`M`:case`s`:case`e`:case`b`:case`Z`:i[o].v=Fh(i[o].t.charCodeAt(0),i[o].v,l,_),i[o].t=`t`;break;case`n`:case`?`:for(b=o+1;i[b]!=null&&((s=i[b].t)===`?`||s===`D`||(s===` `||s===`t`)&&i[b+1]!=null&&(i[b+1].t===`?`||i[b+1].t===`t`&&i[b+1].v===`/`)||i[o].t===`(`&&(s===` `||s===`n`||s===`)`)||s===`t`&&(i[b].v===`/`||i[b].v===` `&&i[b+1]!=null&&i[b+1].t==`?`));)i[o].v+=i[b].v,i[b]={v:``,t:`;`},++b;y+=i[o].v,o=b-1;break;case`G`:i[o].t=`t`,i[o].v=Nh(t,n);break}var x=``,S,C;if(y.length>0){y.charCodeAt(0)==40?(S=t<0&&y.charCodeAt(0)===45?-t:t,C=rg(`n`,y,S)):(S=t<0&&r>1?-t:t,C=rg(`n`,y,S),S<0&&i[0]&&i[0].t==`t`&&(C=C.substr(1),i[0].v=`-`+i[0].v)),b=C.length-1;var w=i.length;for(o=0;o<i.length;++o)if(i[o]!=null&&i[o].t!=`t`&&i[o].v.indexOf(`.`)>-1){w=o;break}var T=i.length;if(w===i.length&&C.indexOf(`E`)===-1){for(o=i.length-1;o>=0;--o)i[o]==null||`n?`.indexOf(i[o].t)===-1||(b>=i[o].v.length-1?(b-=i[o].v.length,i[o].v=C.substr(b+1,i[o].v.length)):b<0?i[o].v=``:(i[o].v=C.substr(0,b+1),b=-1),i[o].t=`t`,T=o);b>=0&&T<i.length&&(i[T].v=C.substr(0,b+1)+i[T].v)}else if(w!==i.length&&C.indexOf(`E`)===-1){for(b=C.indexOf(`.`)-1,o=w;o>=0;--o)if(!(i[o]==null||`n?`.indexOf(i[o].t)===-1)){for(u=i[o].v.indexOf(`.`)>-1&&o===w?i[o].v.indexOf(`.`)-1:i[o].v.length-1,x=i[o].v.substr(u+1);u>=0;--u)b>=0&&(i[o].v.charAt(u)===`0`||i[o].v.charAt(u)===`#`)&&(x=C.charAt(b--)+x);i[o].v=x,i[o].t=`t`,T=o}for(b>=0&&T<i.length&&(i[T].v=C.substr(0,b+1)+i[T].v),b=C.indexOf(`.`)+1,o=w;o<i.length;++o)if(!(i[o]==null||`n?(`.indexOf(i[o].t)===-1&&o!==w)){for(u=i[o].v.indexOf(`.`)>-1&&o===w?i[o].v.indexOf(`.`)+1:0,x=i[o].v.substr(0,u);u<i[o].v.length;++u)b<C.length&&(x+=C.charAt(b++));i[o].v=x,i[o].t=`t`,T=o}}}for(o=0;o<i.length;++o)i[o]!=null&&`n?`.indexOf(i[o].t)>-1&&(S=r>1&&t<0&&o>0&&i[o-1].v===`-`?-t:t,i[o].v=rg(i[o].t,i[o].v,S),i[o].t=`t`);var E=``;for(o=0;o!==i.length;++o)i[o]!=null&&(E+=i[o].v);return E}var cg=/\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;function lg(e,t){if(t==null)return!1;var n=parseFloat(t[2]);switch(t[1]){case`=`:if(e==n)return!0;break;case`>`:if(e>n)return!0;break;case`<`:if(e<n)return!0;break;case`<>`:if(e!=n)return!0;break;case`>=`:if(e>=n)return!0;break;case`<=`:if(e<=n)return!0;break}return!1}function ug(e,t){var n=ig(e),r=n.length,i=n[r-1].indexOf(`@`);if(r<4&&i>-1&&--r,n.length>4)throw Error(`cannot find right format for |`+n.join(`|`)+`|`);if(typeof t!=`number`)return[4,n.length===4||i>-1?n[n.length-1]:`@`];switch(n.length){case 1:n=i>-1?[`General`,`General`,`General`,n[0]]:[n[0],n[0],n[0],`@`];break;case 2:n=i>-1?[n[0],n[0],n[0],n[1]]:[n[0],n[1],n[0],`@`];break;case 3:n=i>-1?[n[0],n[1],n[0],n[2]]:[n[0],n[1],n[2],`@`];break;case 4:break}var a=t>0?n[0]:t<0?n[1]:n[2];if(n[0].indexOf(`[`)===-1&&n[1].indexOf(`[`)===-1)return[r,a];if(n[0].match(/\[[=<>]/)!=null||n[1].match(/\[[=<>]/)!=null){var o=n[0].match(cg),s=n[1].match(cg);return lg(t,o)?[r,n[0]]:lg(t,s)?[r,n[1]]:[r,n[o!=null&&s!=null?2:1]]}return[r,a]}function dg(e,t,n){n??={};var r=``;switch(typeof e){case`string`:r=e==`m/d/yy`&&n.dateNF?n.dateNF:e;break;case`number`:r=e==14&&n.dateNF?n.dateNF:(n.table==null?yh:n.table)[e],r??=n.table&&n.table[bh[e]]||yh[bh[e]],r??=xh[e]||`General`;break}if(hh(r,0))return Nh(t,n);t instanceof Date&&(t=Dh(t,n.date1904));var i=ug(r,t);if(hh(i[1]))return Nh(t,n);if(t===!0)t=`TRUE`;else if(t===!1)t=`FALSE`;else if(t===``||t==null)return``;return sg(i[1],t,n,i[0])}function fg(e,t){if(typeof t!=`number`){t=+t||-1;for(var n=0;n<392;++n){if(yh[n]==null){t<0&&(t=n);continue}if(yh[n]==e){t=n;break}}t<0&&(t=391)}return yh[t]=e,t}function pg(e){for(var t=0;t!=392;++t)e[t]!==void 0&&fg(e[t],t)}function mg(){yh=vh()}var hg=/[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;function gg(e){var t=typeof e==`number`?yh[e]:e;return t=t.replace(hg,`(\\d+)`),RegExp(`^`+t+`$`)}function _g(e,t,n){var r=-1,i=-1,a=-1,o=-1,s=-1,c=-1;(t.match(hg)||[]).forEach(function(e,t){var l=parseInt(n[t+1],10);switch(e.toLowerCase().charAt(0)){case`y`:r=l;break;case`d`:a=l;break;case`h`:o=l;break;case`s`:c=l;break;case`m`:o>=0?s=l:i=l;break}}),c>=0&&s==-1&&i>=0&&(s=i,i=-1);var l=(``+(r>=0?r:new Date().getFullYear())).slice(-4)+`-`+(`00`+(i>=1?i:1)).slice(-2)+`-`+(`00`+(a>=1?a:1)).slice(-2);l.length==7&&(l=`0`+l),l.length==8&&(l=`20`+l);var u=(`00`+(o>=0?o:0)).slice(-2)+`:`+(`00`+(s>=0?s:0)).slice(-2)+`:`+(`00`+(c>=0?c:0)).slice(-2);return o==-1&&s==-1&&c==-1?l:r==-1&&i==-1&&a==-1?u:l+`T`+u}var vg=(function(){var e={};e.version=`1.2.0`;function t(){for(var e=0,t=Array(256),n=0;n!=256;++n)e=n,e=e&1?-306674912^e>>>1:e>>>1,e=e&1?-306674912^e>>>1:e>>>1,e=e&1?-306674912^e>>>1:e>>>1,e=e&1?-306674912^e>>>1:e>>>1,e=e&1?-306674912^e>>>1:e>>>1,e=e&1?-306674912^e>>>1:e>>>1,e=e&1?-306674912^e>>>1:e>>>1,e=e&1?-306674912^e>>>1:e>>>1,t[n]=e;return typeof Int32Array<`u`?new Int32Array(t):t}var n=t();function r(e){var t=0,n=0,r=0,i=typeof Int32Array<`u`?new Int32Array(4096):Array(4096);for(r=0;r!=256;++r)i[r]=e[r];for(r=0;r!=256;++r)for(n=e[r],t=256+r;t<4096;t+=256)n=i[t]=n>>>8^e[n&255];var a=[];for(r=1;r!=16;++r)a[r-1]=typeof Int32Array<`u`?i.subarray(r*256,r*256+256):i.slice(r*256,r*256+256);return a}var i=r(n),a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14];function b(e,t){for(var r=t^-1,i=0,a=e.length;i<a;)r=r>>>8^n[(r^e.charCodeAt(i++))&255];return~r}function x(e,t){for(var r=t^-1,i=e.length-15,b=0;b<i;)r=y[e[b++]^r&255]^v[e[b++]^r>>8&255]^_[e[b++]^r>>16&255]^g[e[b++]^r>>>24]^h[e[b++]]^m[e[b++]]^p[e[b++]]^f[e[b++]]^d[e[b++]]^u[e[b++]]^l[e[b++]]^c[e[b++]]^s[e[b++]]^o[e[b++]]^a[e[b++]]^n[e[b++]];for(i+=15;b<i;)r=r>>>8^n[(r^e[b++])&255];return~r}function S(e,t){for(var r=t^-1,i=0,a=e.length,o=0,s=0;i<a;)o=e.charCodeAt(i++),o<128?r=r>>>8^n[(r^o)&255]:o<2048?(r=r>>>8^n[(r^(192|o>>6&31))&255],r=r>>>8^n[(r^(128|o&63))&255]):o>=55296&&o<57344?(o=(o&1023)+64,s=e.charCodeAt(i++)&1023,r=r>>>8^n[(r^(240|o>>8&7))&255],r=r>>>8^n[(r^(128|o>>2&63))&255],r=r>>>8^n[(r^(128|s>>6&15|(o&3)<<4))&255],r=r>>>8^n[(r^(128|s&63))&255]):(r=r>>>8^n[(r^(224|o>>12&15))&255],r=r>>>8^n[(r^(128|o>>6&63))&255],r=r>>>8^n[(r^(128|o&63))&255]);return~r}return e.table=n,e.bstr=b,e.buf=x,e.str=S,e})(),yg=(function(){var e={};e.version=`1.2.1`;function t(e,t){for(var n=e.split(`/`),r=t.split(`/`),i=0,a=0,o=Math.min(n.length,r.length);i<o;++i){if(a=n[i].length-r[i].length)return a;if(n[i]!=r[i])return n[i]<r[i]?-1:1}return n.length-r.length}function n(e){if(e.charAt(e.length-1)==`/`)return e.slice(0,-1).indexOf(`/`)===-1?e:n(e.slice(0,-1));var t=e.lastIndexOf(`/`);return t===-1?e:e.slice(0,t+1)}function r(e){if(e.charAt(e.length-1)==`/`)return r(e.slice(0,-1));var t=e.lastIndexOf(`/`);return t===-1?e:e.slice(t+1)}function i(e,t){typeof t==`string`&&(t=new Date(t));var n=t.getHours();n=n<<6|t.getMinutes(),n=n<<5|t.getSeconds()>>>1,e.write_shift(2,n);var r=t.getFullYear()-1980;r=r<<4|t.getMonth()+1,r=r<<5|t.getDate(),e.write_shift(2,r)}function a(e){var t=e.read_shift(2)&65535,n=e.read_shift(2)&65535,r=new Date,i=n&31;n>>>=5;var a=n&15;n>>>=4,r.setMilliseconds(0),r.setFullYear(n+1980),r.setMonth(a-1),r.setDate(i);var o=t&31;t>>>=5;var s=t&63;return t>>>=6,r.setHours(t),r.setMinutes(s),r.setSeconds(o<<1),r}function o(e){$_(e,0);for(var t={},n=0;e.l<=e.length-4;){var r=e.read_shift(2),i=e.read_shift(2),a=e.l+i,o={};switch(r){case 21589:n=e.read_shift(1),n&1&&(o.mtime=e.read_shift(4)),i>5&&(n&2&&(o.atime=e.read_shift(4)),n&4&&(o.ctime=e.read_shift(4))),o.mtime&&(o.mt=new Date(o.mtime*1e3));break}e.l=a,t[r]=o}return t}var s;function c(){return s||={}}function l(e,t){if(e[0]==80&&e[1]==75)return Ve(e,t);if((e[0]|32)==109&&(e[1]|32)==105)return Xe(e,t);if(e.length<512)throw Error(`CFB file size `+e.length+` < 512`);var n=3,r=512,i=0,a=0,o=0,s=0,c=0,l=[],m=e.slice(0,512);$_(m,0);var g=u(m);switch(n=g[0],n){case 3:r=512;break;case 4:r=4096;break;case 0:if(g[1]==0)return Ve(e,t);default:throw Error(`Major Version: Expected 3 or 4 saw `+n)}r!==512&&(m=e.slice(0,r),$_(m,28));var y=e.slice(0,r);d(m,n);var b=m.read_shift(4,`i`);if(n===3&&b!==0)throw Error(`# Directory Sectors: Expected 0 saw `+b);m.l+=4,o=m.read_shift(4,`i`),m.l+=4,m.chk(`00100000`,`Mini Stream Cutoff Size: `),s=m.read_shift(4,`i`),i=m.read_shift(4,`i`),c=m.read_shift(4,`i`),a=m.read_shift(4,`i`);for(var x=-1,S=0;S<109&&(x=m.read_shift(4,`i`),!(x<0));++S)l[S]=x;var C=f(e,r);h(c,a,C,r,l);var w=_(C,o,l,r);w[o].name=`!Directory`,i>0&&s!==O&&(w[s].name=`!MiniFAT`),w[l[0]].name=`!FAT`,w.fat_addrs=l,w.ssz=r;var T={},E=[],D=[],k=[];v(o,w,C,E,i,T,D,s),p(D,k,E),E.shift();var A={FileIndex:D,FullPaths:k};return t&&t.raw&&(A.raw={header:y,sectors:C}),A}function u(e){if(e[e.l]==80&&e[e.l+1]==75)return[0,0];e.chk(k,`Header Signature: `),e.l+=16;var t=e.read_shift(2,`u`);return[e.read_shift(2,`u`),t]}function d(e,t){var n=9;switch(e.l+=2,n=e.read_shift(2)){case 9:if(t!=3)throw Error(`Sector Shift: Expected 9 saw `+n);break;case 12:if(t!=4)throw Error(`Sector Shift: Expected 12 saw `+n);break;default:throw Error(`Sector Shift: Expected 9 or 12 saw `+n)}e.chk(`0600`,`Mini Sector Shift: `),e.chk(`000000000000`,`Reserved: `)}function f(e,t){for(var n=Math.ceil(e.length/t)-1,r=[],i=1;i<n;++i)r[i-1]=e.slice(i*t,(i+1)*t);return r[n-1]=e.slice(n*t),r}function p(e,t,n){for(var r=0,i=0,a=0,o=0,s=0,c=n.length,l=[],u=[];r<c;++r)l[r]=u[r]=r,t[r]=n[r];for(;s<u.length;++s)r=u[s],i=e[r].L,a=e[r].R,o=e[r].C,l[r]===r&&(i!==-1&&l[i]!==i&&(l[r]=l[i]),a!==-1&&l[a]!==a&&(l[r]=l[a])),o!==-1&&(l[o]=r),i!==-1&&r!=l[r]&&(l[i]=l[r],u.lastIndexOf(i)<s&&u.push(i)),a!==-1&&r!=l[r]&&(l[a]=l[r],u.lastIndexOf(a)<s&&u.push(a));for(r=1;r<c;++r)l[r]===r&&(a!==-1&&l[a]!==a?l[r]=l[a]:i!==-1&&l[i]!==i&&(l[r]=l[i]));for(r=1;r<c;++r)if(e[r].type!==0){if(s=r,s!=l[s])do s=l[s],t[r]=t[s]+`/`+t[r];while(s!==0&&l[s]!==-1&&s!=l[s]);l[r]=-1}for(t[0]+=`/`,r=1;r<c;++r)e[r].type!==2&&(t[r]+=`/`)}function m(e,t,n){for(var r=e.start,i=e.size,a=[],o=r;n&&i>0&&o>=0;)a.push(t.slice(o*D,o*D+D)),i-=D,o=G_(n,o*4);return a.length===0?X(0):rh(a).slice(0,e.size)}function h(e,t,n,r,i){var a=O;if(e===O){if(t!==0)throw Error(`DIFAT chain shorter than expected`)}else if(e!==-1){var o=n[e],s=(r>>>2)-1;if(!o)return;for(var c=0;c<s&&(a=G_(o,c*4))!==O;++c)i.push(a);h(G_(o,r-4),t-1,n,r,i)}}function g(e,t,n,r,i){var a=[],o=[];i||=[];var s=r-1,c=0,l=0;for(c=t;c>=0;){i[c]=!0,a[a.length]=c,o.push(e[c]);var u=n[Math.floor(c*4/r)];if(l=c*4&s,r<4+l)throw Error(`FAT boundary crossed: `+c+` 4 `+r);if(!e[u])break;c=G_(e[u],l)}return{nodes:a,data:b_([o])}}function _(e,t,n,r){var i=e.length,a=[],o=[],s=[],c=[],l=r-1,u=0,d=0,f=0,p=0;for(u=0;u<i;++u)if(s=[],f=u+t,f>=i&&(f-=i),!o[f]){c=[];var m=[];for(d=f;d>=0;){m[d]=!0,o[d]=!0,s[s.length]=d,c.push(e[d]);var h=n[Math.floor(d*4/r)];if(p=d*4&l,r<4+p)throw Error(`FAT boundary crossed: `+d+` 4 `+r);if(!e[h]||(d=G_(e[h],p),m[d]))break}a[f]={nodes:s,data:b_([c])}}return a}function v(e,t,n,r,i,a,o,s){for(var c=0,l=r.length?2:0,u=t[e].data,d=0,f=0,p;d<u.length;d+=128){var h=u.slice(d,d+128);$_(h,64),f=h.read_shift(2),p=S_(h,0,f-l),r.push(p);var _={name:p,type:h.read_shift(1),color:h.read_shift(1),L:h.read_shift(4,`i`),R:h.read_shift(4,`i`),C:h.read_shift(4,`i`),clsid:h.read_shift(16),state:h.read_shift(4,`i`),start:0,size:0};h.read_shift(2)+h.read_shift(2)+h.read_shift(2)+h.read_shift(2)!==0&&(_.ct=y(h,h.l-8)),h.read_shift(2)+h.read_shift(2)+h.read_shift(2)+h.read_shift(2)!==0&&(_.mt=y(h,h.l-8)),_.start=h.read_shift(4,`i`),_.size=h.read_shift(4,`i`),_.size<0&&_.start<0&&(_.size=_.type=0,_.start=O,_.name=``),_.type===5?(c=_.start,i>0&&c!==O&&(t[c].name=`!StreamData`)):_.size>=4096?(_.storage=`fat`,t[_.start]===void 0&&(t[_.start]=g(n,_.start,t.fat_addrs,t.ssz)),t[_.start].name=_.name,_.content=t[_.start].data.slice(0,_.size)):(_.storage=`minifat`,_.size<0?_.size=0:c!==O&&_.start!==O&&t[c]&&(_.content=m(_,t[c].data,(t[s]||{}).data))),_.content&&$_(_.content,0),a[p]=_,o.push(_)}}function y(e,t){return new Date((W_(e,t+4)/1e7*2**32+W_(e,t)/1e7-11644473600)*1e3)}function b(e,t){return c(),l(s.readFileSync(e),t)}function x(e,t){var n=t&&t.type;switch(n||Ym&&Buffer.isBuffer(e)&&(n=`buffer`),n||`base64`){case`file`:return b(e,t);case`base64`:return l($m(Jm(e)),t);case`binary`:return l($m(e),t)}return l(e,t)}function S(e,t){var n=t||{},r=n.root||`Root Entry`;if(e.FullPaths||=[],e.FileIndex||=[],e.FullPaths.length!==e.FileIndex.length)throw Error(`inconsistent CFB structure`);e.FullPaths.length===0&&(e.FullPaths[0]=r+`/`,e.FileIndex[0]={name:r,type:5}),n.CLSID&&(e.FileIndex[0].clsid=n.CLSID),C(e)}function C(e){var t=`Sh33tJ5`;if(!yg.find(e,`/`+t)){var n=X(4);n[0]=55,n[1]=n[3]=50,n[2]=54,e.FileIndex.push({name:t,type:2,content:n,size:4,L:69,R:69,C:69}),e.FullPaths.push(e.FullPaths[0]+t),w(e)}}function w(e,i){S(e);for(var a=!1,o=!1,s=e.FullPaths.length-1;s>=0;--s){var c=e.FileIndex[s];switch(c.type){case 0:o?a=!0:(e.FileIndex.pop(),e.FullPaths.pop());break;case 1:case 2:case 5:o=!0,isNaN(c.R*c.L*c.C)&&(a=!0),c.R>-1&&c.L>-1&&c.R==c.L&&(a=!0);break;default:a=!0;break}}if(!(!a&&!i)){var l=new Date(1987,1,19),u=0,d=Object.create?Object.create(null):{},f=[];for(s=0;s<e.FullPaths.length;++s)d[e.FullPaths[s]]=!0,e.FileIndex[s].type!==0&&f.push([e.FullPaths[s],e.FileIndex[s]]);for(s=0;s<f.length;++s){var p=n(f[s][0]);o=d[p],o||(f.push([p,{name:r(p).replace(`/`,``),type:1,clsid:ee,ct:l,mt:l,content:null}]),d[p]=!0)}for(f.sort(function(e,n){return t(e[0],n[0])}),e.FullPaths=[],e.FileIndex=[],s=0;s<f.length;++s)e.FullPaths[s]=f[s][0],e.FileIndex[s]=f[s][1];for(s=0;s<f.length;++s){var m=e.FileIndex[s],h=e.FullPaths[s];if(m.name=r(h).replace(`/`,``),m.L=m.R=m.C=-(m.color=1),m.size=m.content?m.content.length:0,m.start=0,m.clsid=m.clsid||ee,s===0)m.C=f.length>1?1:-1,m.size=0,m.type=5;else if(h.slice(-1)==`/`){for(u=s+1;u<f.length&&n(e.FullPaths[u])!=h;++u);for(m.C=u>=f.length?-1:u,u=s+1;u<f.length&&n(e.FullPaths[u])!=n(h);++u);m.R=u>=f.length?-1:u,m.type=1}else n(e.FullPaths[s+1]||``)==n(h)&&(m.R=s+1),m.type=2}}}function T(e,t){var n=t||{};if(n.fileType==`mad`)return Ze(e,n);switch(w(e),n.fileType){case`zip`:return Ue(e,n)}var r=(function(e){for(var t=0,n=0,r=0;r<e.FileIndex.length;++r){var i=e.FileIndex[r];if(i.content){var a=i.content.length;a>0&&(a<4096?t+=a+63>>6:n+=a+511>>9)}}for(var o=e.FullPaths.length+3>>2,s=t+7>>3,c=t+127>>7,l=s+n+o+c,u=l+127>>7,d=u<=109?0:Math.ceil((u-109)/127);l+u+d+127>>7>u;)d=++u<=109?0:Math.ceil((u-109)/127);var f=[1,d,u,c,o,n,t,0];return e.FileIndex[0].size=t<<6,f[7]=(e.FileIndex[0].start=f[0]+f[1]+f[2]+f[3]+f[4]+f[5])+(f[6]+7>>3),f})(e),i=X(r[7]<<9),a=0,o=0;for(a=0;a<8;++a)i.write_shift(1,A[a]);for(a=0;a<8;++a)i.write_shift(2,0);for(i.write_shift(2,62),i.write_shift(2,3),i.write_shift(2,65534),i.write_shift(2,9),i.write_shift(2,6),a=0;a<3;++a)i.write_shift(2,0);for(i.write_shift(4,0),i.write_shift(4,r[2]),i.write_shift(4,r[0]+r[1]+r[2]+r[3]-1),i.write_shift(4,0),i.write_shift(4,4096),i.write_shift(4,r[3]?r[0]+r[1]+r[2]-1:O),i.write_shift(4,r[3]),i.write_shift(-4,r[1]?r[0]-1:O),i.write_shift(4,r[1]),a=0;a<109;++a)i.write_shift(-4,a<r[2]?r[1]+a:-1);if(r[1])for(o=0;o<r[1];++o){for(;a<236+o*127;++a)i.write_shift(-4,a<r[2]?r[1]+a:-1);i.write_shift(-4,o===r[1]-1?O:o+1)}var s=function(e){for(o+=e;a<o-1;++a)i.write_shift(-4,a+1);e&&(++a,i.write_shift(-4,O))};for(o=a=0,o+=r[1];a<o;++a)i.write_shift(-4,te.DIFSECT);for(o+=r[2];a<o;++a)i.write_shift(-4,te.FATSECT);s(r[3]),s(r[4]);for(var c=0,l=0,u=e.FileIndex[0];c<e.FileIndex.length;++c)u=e.FileIndex[c],u.content&&(l=u.content.length,!(l<4096)&&(u.start=o,s(l+511>>9)));for(s(r[6]+7>>3);i.l&511;)i.write_shift(-4,te.ENDOFCHAIN);for(o=a=0,c=0;c<e.FileIndex.length;++c)u=e.FileIndex[c],u.content&&(l=u.content.length,!(!l||l>=4096)&&(u.start=o,s(l+63>>6)));for(;i.l&511;)i.write_shift(-4,te.ENDOFCHAIN);for(a=0;a<r[4]<<2;++a){var d=e.FullPaths[a];if(!d||d.length===0){for(c=0;c<17;++c)i.write_shift(4,0);for(c=0;c<3;++c)i.write_shift(4,-1);for(c=0;c<12;++c)i.write_shift(4,0);continue}u=e.FileIndex[a],a===0&&(u.start=u.size?u.start-1:O);var f=a===0&&n.root||u.name;if(l=2*(f.length+1),i.write_shift(64,f,`utf16le`),i.write_shift(2,l),i.write_shift(1,u.type),i.write_shift(1,u.color),i.write_shift(-4,u.L),i.write_shift(-4,u.R),i.write_shift(-4,u.C),u.clsid)i.write_shift(16,u.clsid,`hex`);else for(c=0;c<4;++c)i.write_shift(4,0);i.write_shift(4,u.state||0),i.write_shift(4,0),i.write_shift(4,0),i.write_shift(4,0),i.write_shift(4,0),i.write_shift(4,u.start),i.write_shift(4,u.size),i.write_shift(4,0)}for(a=1;a<e.FileIndex.length;++a)if(u=e.FileIndex[a],u.size>=4096)if(i.l=u.start+1<<9,Ym&&Buffer.isBuffer(u.content))u.content.copy(i,i.l,0,u.size),i.l+=u.size+511&-512;else{for(c=0;c<u.size;++c)i.write_shift(1,u.content[c]);for(;c&511;++c)i.write_shift(1,0)}for(a=1;a<e.FileIndex.length;++a)if(u=e.FileIndex[a],u.size>0&&u.size<4096)if(Ym&&Buffer.isBuffer(u.content))u.content.copy(i,i.l,0,u.size),i.l+=u.size+63&-64;else{for(c=0;c<u.size;++c)i.write_shift(1,u.content[c]);for(;c&63;++c)i.write_shift(1,0)}if(Ym)i.l=i.length;else for(;i.l<i.length;)i.write_shift(1,0);return i}function E(e,t){var n=e.FullPaths.map(function(e){return e.toUpperCase()}),r=n.map(function(e){var t=e.split(`/`);return t[t.length-(e.slice(-1)==`/`?2:1)]}),i=!1;t.charCodeAt(0)===47?(i=!0,t=n[0].slice(0,-1)+t):i=t.indexOf(`/`)!==-1;var a=t.toUpperCase(),o=i===!0?n.indexOf(a):r.indexOf(a);if(o!==-1)return e.FileIndex[o];var s=!a.match(oh);for(a=a.replace(ah,``),s&&(a=a.replace(oh,`!`)),o=0;o<n.length;++o)if((s?n[o].replace(oh,`!`):n[o]).replace(ah,``)==a||(s?r[o].replace(oh,`!`):r[o]).replace(ah,``)==a)return e.FileIndex[o];return null}var D=64,O=-2,k=`d0cf11e0a1b11ae1`,A=[208,207,17,224,161,177,26,225],ee=`00000000000000000000000000000000`,te={MAXREGSECT:-6,DIFSECT:-4,FATSECT:-3,ENDOFCHAIN:O,FREESECT:-1,HEADER_SIGNATURE:k,HEADER_MINOR_VERSION:`3e00`,MAXREGSID:-6,NOSTREAM:-1,HEADER_CLSID:ee,EntryTypes:[`unknown`,`storage`,`stream`,`lockbytes`,`property`,`root`]};function ne(e,t,n){c();var r=T(e,n);s.writeFileSync(t,r)}function re(e){for(var t=Array(e.length),n=0;n<e.length;++n)t[n]=String.fromCharCode(e[n]);return t.join(``)}function ie(e,t){var n=T(e,t);switch(t&&t.type||`buffer`){case`file`:return c(),s.writeFileSync(t.filename,n),n;case`binary`:return typeof n==`string`?n:re(n);case`base64`:return qm(typeof n==`string`?n:re(n));case`buffer`:if(Ym)return Buffer.isBuffer(n)?n:Xm(n);case`array`:return typeof n==`string`?$m(n):n}return n}var j;function M(e){try{var t=e.InflateRaw,n=new t;if(n._processChunk(new Uint8Array([3,0]),n._finishFlushFlag),n.bytesRead)j=e;else throw Error(`zlib does not expose bytesRead`)}catch(e){console.error(`cannot use native zlib: `+(e.message||e))}}function ae(e,t){if(!j)return ze(e,t);var n=j.InflateRaw,r=new n,i=r._processChunk(e.slice(e.l),r._finishFlushFlag);return e.l+=r.bytesRead,i}function oe(e){return j?j.deflateRawSync(e):je(e)}var se=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ce=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],le=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];function ue(e){var t=(e<<1|e<<11)&139536|(e<<5|e<<15)&558144;return(t>>16|t>>8|t)&255}for(var de=typeof Uint8Array<`u`,fe=de?new Uint8Array(256):[],pe=0;pe<256;++pe)fe[pe]=ue(pe);function me(e,t){var n=fe[e&255];return t<=8?n>>>8-t:(n=n<<8|fe[e>>8&255],t<=16?n>>>16-t:(n=n<<8|fe[e>>16&255],n>>>24-t))}function he(e,t){var n=t&7,r=t>>>3;return(e[r]|(n<=6?0:e[r+1]<<8))>>>n&3}function ge(e,t){var n=t&7,r=t>>>3;return(e[r]|(n<=5?0:e[r+1]<<8))>>>n&7}function _e(e,t){var n=t&7,r=t>>>3;return(e[r]|(n<=4?0:e[r+1]<<8))>>>n&15}function N(e,t){var n=t&7,r=t>>>3;return(e[r]|(n<=3?0:e[r+1]<<8))>>>n&31}function ve(e,t){var n=t&7,r=t>>>3;return(e[r]|(n<=1?0:e[r+1]<<8))>>>n&127}function ye(e,t,n){var r=t&7,i=t>>>3,a=(1<<n)-1,o=e[i]>>>r;return n<8-r||(o|=e[i+1]<<8-r,n<16-r)||(o|=e[i+2]<<16-r,n<24-r)||(o|=e[i+3]<<24-r),o&a}function be(e,t,n){var r=t&7,i=t>>>3;return r<=5?e[i]|=(n&7)<<r:(e[i]|=n<<r&255,e[i+1]=(n&7)>>8-r),t+3}function xe(e,t,n){var r=t&7,i=t>>>3;return n=(n&1)<<r,e[i]|=n,t+1}function Se(e,t,n){var r=t&7,i=t>>>3;return n<<=r,e[i]|=n&255,n>>>=8,e[i+1]=n,t+8}function Ce(e,t,n){var r=t&7,i=t>>>3;return n<<=r,e[i]|=n&255,n>>>=8,e[i+1]=n&255,e[i+2]=n>>>8,t+16}function we(e,t){var n=e.length,r=2*n>t?2*n:t+5,i=0;if(n>=t)return e;if(Ym){var a=Qm(r);if(e.copy)e.copy(a);else for(;i<e.length;++i)a[i]=e[i];return a}else if(de){var o=new Uint8Array(r);if(o.set)o.set(e);else for(;i<n;++i)o[i]=e[i];return o}return e.length=r,e}function Te(e){for(var t=Array(e),n=0;n<e;++n)t[n]=0;return t}function Ee(e,t,n){var r=1,i=0,a=0,o=0,s=0,c=e.length,l=de?new Uint16Array(32):Te(32);for(a=0;a<32;++a)l[a]=0;for(a=c;a<n;++a)e[a]=0;c=e.length;var u=de?new Uint16Array(c):Te(c);for(a=0;a<c;++a)l[i=e[a]]++,r<i&&(r=i),u[a]=0;for(l[0]=0,a=1;a<=r;++a)l[a+16]=s=s+l[a-1]<<1;for(a=0;a<c;++a)s=e[a],s!=0&&(u[a]=l[s+16]++);var d=0;for(a=0;a<c;++a)if(d=e[a],d!=0)for(s=me(u[a],r)>>r-d,o=(1<<r+4-d)-1;o>=0;--o)t[s|o<<d]=d&15|a<<4;return r}var De=de?new Uint16Array(512):Te(512),Oe=de?new Uint16Array(32):Te(32);if(!de){for(var ke=0;ke<512;++ke)De[ke]=0;for(ke=0;ke<32;++ke)Oe[ke]=0}(function(){for(var e=[],t=0;t<32;t++)e.push(5);Ee(e,Oe,32);var n=[];for(t=0;t<=143;t++)n.push(8);for(;t<=255;t++)n.push(9);for(;t<=279;t++)n.push(7);for(;t<=287;t++)n.push(8);Ee(n,De,288)})();var Ae=(function(){for(var e=de?new Uint8Array(32768):[],t=0,n=0;t<le.length-1;++t)for(;n<le[t+1];++n)e[n]=t;for(;n<32768;++n)e[n]=29;var r=de?new Uint8Array(259):[];for(t=0,n=0;t<ce.length-1;++t)for(;n<ce[t+1];++n)r[n]=t;function i(e,t){for(var n=0;n<e.length;){var r=Math.min(65535,e.length-n),i=n+r==e.length;for(t.write_shift(1,+i),t.write_shift(2,r),t.write_shift(2,~r&65535);r-- >0;)t[t.l++]=e[n++]}return t.l}function a(t,n){for(var i=0,a=0,o=de?new Uint16Array(32768):[];a<t.length;){var s=Math.min(65535,t.length-a);if(s<10){for(i=be(n,i,+(a+s==t.length)),i&7&&(i+=8-(i&7)),n.l=i/8|0,n.write_shift(2,s),n.write_shift(2,~s&65535);s-- >0;)n[n.l++]=t[a++];i=n.l*8;continue}i=be(n,i,+(a+s==t.length)+2);for(var c=0;s-- >0;){var l=t[a];c=(c<<5^l)&32767;var u=-1,d=0;if((u=o[c])&&(u|=a&-32768,u>a&&(u-=32768),u<a))for(;t[u+d]==t[a+d]&&d<250;)++d;if(d>2){l=r[d],l<=22?i=Se(n,i,fe[l+1]>>1)-1:(Se(n,i,3),i+=5,Se(n,i,fe[l-23]>>5),i+=3);var f=l<8?0:l-4>>2;f>0&&(Ce(n,i,d-ce[l]),i+=f),l=e[a-u],i=Se(n,i,fe[l]>>3),i-=3;var p=l<4?0:l-2>>1;p>0&&(Ce(n,i,a-u-le[l]),i+=p);for(var m=0;m<d;++m)o[c]=a&32767,c=(c<<5^t[a])&32767,++a;s-=d-1}else l<=143?l+=48:i=xe(n,i,1),i=Se(n,i,fe[l]),o[c]=a&32767,++a}i=Se(n,i,0)-1}return n.l=(i+7)/8|0,n.l}return function(e,t){return e.length<8?i(e,t):a(e,t)}})();function je(e){var t=X(50+Math.floor(e.length*1.1)),n=Ae(e,t);return t.slice(0,n)}var Me=de?new Uint16Array(32768):Te(32768),Ne=de?new Uint16Array(32768):Te(32768),Pe=de?new Uint16Array(128):Te(128),Fe=1,Ie=1;function Le(e,t){var n=N(e,t)+257;t+=5;var r=N(e,t)+1;t+=5;var i=_e(e,t)+4;t+=4;for(var a=0,o=de?new Uint8Array(19):Te(19),s=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],c=1,l=de?new Uint8Array(8):Te(8),u=de?new Uint8Array(8):Te(8),d=o.length,f=0;f<i;++f)o[se[f]]=a=ge(e,t),c<a&&(c=a),l[a]++,t+=3;var p=0;for(l[0]=0,f=1;f<=c;++f)u[f]=p=p+l[f-1]<<1;for(f=0;f<d;++f)(p=o[f])!=0&&(s[f]=u[p]++);var m=0;for(f=0;f<d;++f)if(m=o[f],m!=0){p=fe[s[f]]>>8-m;for(var h=(1<<7-m)-1;h>=0;--h)Pe[p|h<<m]=m&7|f<<3}var g=[];for(c=1;g.length<n+r;)switch(p=Pe[ve(e,t)],t+=p&7,p>>>=3){case 16:for(a=3+he(e,t),t+=2,p=g[g.length-1];a-- >0;)g.push(p);break;case 17:for(a=3+ge(e,t),t+=3;a-- >0;)g.push(0);break;case 18:for(a=11+ve(e,t),t+=7;a-- >0;)g.push(0);break;default:g.push(p),c<p&&(c=p);break}var _=g.slice(0,n),v=g.slice(n);for(f=n;f<286;++f)_[f]=0;for(f=r;f<30;++f)v[f]=0;return Fe=Ee(_,Me,286),Ie=Ee(v,Ne,30),t}function Re(e,t){if(e[0]==3&&!(e[1]&3))return[Zm(t),2];for(var n=0,r=0,i=Qm(t||1<<18),a=0,o=i.length>>>0,s=0,c=0;!(r&1);){if(r=ge(e,n),n+=3,r>>>1)r>>1==1?(s=9,c=5):(n=Le(e,n),s=Fe,c=Ie);else{n&7&&(n+=8-(n&7));var l=e[n>>>3]|e[(n>>>3)+1]<<8;if(n+=32,l>0)for(!t&&o<a+l&&(i=we(i,a+l),o=i.length);l-- >0;)i[a++]=e[n>>>3],n+=8;continue}for(;;){!t&&o<a+32767&&(i=we(i,a+32767),o=i.length);var u=ye(e,n,s),d=r>>>1==1?De[u]:Me[u];if(n+=d&15,d>>>=4,!(d>>>8&255))i[a++]=d;else if(d==256)break;else{d-=257;var f=d<8?0:d-4>>2;f>5&&(f=0);var p=a+ce[d];f>0&&(p+=ye(e,n,f),n+=f),u=ye(e,n,c),d=r>>>1==1?Oe[u]:Ne[u],n+=d&15,d>>>=4;var m=d<4?0:d-2>>1,h=le[d];for(m>0&&(h+=ye(e,n,m),n+=m),!t&&o<p&&(i=we(i,p+100),o=i.length);a<p;)i[a]=i[a-h],++a}}}return t?[i,n+7>>>3]:[i.slice(0,a),n+7>>>3]}function ze(e,t){var n=Re(e.slice(e.l||0),t);return e.l+=n[1],n[0]}function Be(e,t){if(e)typeof console<`u`&&console.error(t);else throw Error(t)}function Ve(e,t){var n=e;$_(n,0);var r={FileIndex:[],FullPaths:[]};S(r,{root:t.root});for(var i=n.length-4;(n[i]!=80||n[i+1]!=75||n[i+2]!=5||n[i+3]!=6)&&i>=0;)--i;n.l=i+4,n.l+=4;var a=n.read_shift(2);for(n.l+=6,n.l=n.read_shift(4),i=0;i<a;++i){n.l+=20;var s=n.read_shift(4),c=n.read_shift(4),l=n.read_shift(2),u=n.read_shift(2),d=n.read_shift(2);n.l+=8;var f=n.read_shift(4),p=o(n.slice(n.l+l,n.l+l+u));n.l+=l+u+d;var m=n.l;n.l=f+4,He(n,s,c,r,p),n.l=m}return r}function He(e,t,n,r,i){e.l+=2;var s=e.read_shift(2),c=e.read_shift(2),l=a(e);if(s&8257)throw Error(`Unsupported ZIP encryption`);for(var u=e.read_shift(4),d=e.read_shift(4),f=e.read_shift(4),p=e.read_shift(2),m=e.read_shift(2),h=``,g=0;g<p;++g)h+=String.fromCharCode(e[e.l++]);if(m){var _=o(e.slice(e.l,e.l+m));(_[21589]||{}).mt&&(l=_[21589].mt),((i||{})[21589]||{}).mt&&(l=i[21589].mt)}e.l+=m;var v=e.slice(e.l,e.l+d);switch(c){case 8:v=ae(e,f);break;case 0:break;default:throw Error(`Unsupported ZIP Compression method `+c)}var y=!1;s&8&&(u=e.read_shift(4),u==134695760&&(u=e.read_shift(4),y=!0),d=e.read_shift(4),f=e.read_shift(4)),d!=t&&Be(y,`Bad compressed size: `+t+` != `+d),f!=n&&Be(y,`Bad uncompressed size: `+n+` != `+f),$e(r,h,v,{unsafe:!0,mt:l})}function Ue(e,t){var n=t||{},r=[],a=[],o=X(1),s=n.compression?8:0,c=0,l=0,u=0,d=0,f=0,p=e.FullPaths[0],m=p,h=e.FileIndex[0],g=[],_=0;for(l=1;l<e.FullPaths.length;++l)if(m=e.FullPaths[l].slice(p.length),h=e.FileIndex[l],!(!h.size||!h.content||m==`Sh33tJ5`)){var v=d,y=X(m.length);for(u=0;u<m.length;++u)y.write_shift(1,m.charCodeAt(u)&127);y=y.slice(0,y.l),g[f]=vg.buf(h.content,0);var b=h.content;s==8&&(b=oe(b)),o=X(30),o.write_shift(4,67324752),o.write_shift(2,20),o.write_shift(2,c),o.write_shift(2,s),h.mt?i(o,h.mt):o.write_shift(4,0),o.write_shift(-4,c&8?0:g[f]),o.write_shift(4,c&8?0:b.length),o.write_shift(4,c&8?0:h.content.length),o.write_shift(2,y.length),o.write_shift(2,0),d+=o.length,r.push(o),d+=y.length,r.push(y),d+=b.length,r.push(b),c&8&&(o=X(12),o.write_shift(-4,g[f]),o.write_shift(4,b.length),o.write_shift(4,h.content.length),d+=o.l,r.push(o)),o=X(46),o.write_shift(4,33639248),o.write_shift(2,0),o.write_shift(2,20),o.write_shift(2,c),o.write_shift(2,s),o.write_shift(4,0),o.write_shift(-4,g[f]),o.write_shift(4,b.length),o.write_shift(4,h.content.length),o.write_shift(2,y.length),o.write_shift(2,0),o.write_shift(2,0),o.write_shift(2,0),o.write_shift(2,0),o.write_shift(4,0),o.write_shift(4,v),_+=o.l,a.push(o),_+=y.length,a.push(y),++f}return o=X(22),o.write_shift(4,101010256),o.write_shift(2,0),o.write_shift(2,0),o.write_shift(2,f),o.write_shift(2,f),o.write_shift(4,_),o.write_shift(4,d),o.write_shift(2,0),rh([rh(r),rh(a),o])}var We={htm:`text/html`,xml:`text/xml`,gif:`image/gif`,jpg:`image/jpeg`,png:`image/png`,mso:`application/x-mso`,thmx:`application/vnd.ms-officetheme`,sh33tj5:`application/octet-stream`};function Ge(e,t){if(e.ctype)return e.ctype;var n=e.name||``,r=n.match(/\.([^\.]+)$/);return r&&We[r[1]]||t&&(r=(n=t).match(/[\.\\]([^\.\\])+$/),r&&We[r[1]])?We[r[1]]:`application/octet-stream`}function Ke(e){for(var t=qm(e),n=[],r=0;r<t.length;r+=76)n.push(t.slice(r,r+76));return n.join(`\r
`)+`\r
`}function qe(e){var t=e.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,function(e){var t=e.charCodeAt(0).toString(16).toUpperCase();return`=`+(t.length==1?`0`+t:t)});t=t.replace(/ $/gm,`=20`).replace(/\t$/gm,`=09`),t.charAt(0)==`
`&&(t=`=0D`+t.slice(1)),t=t.replace(/\r(?!\n)/gm,`=0D`).replace(/\n\n/gm,`
=0A`).replace(/([^\r\n])\n/gm,`$1=0A`);for(var n=[],r=t.split(`\r
`),i=0;i<r.length;++i){var a=r[i];if(a.length==0){n.push(``);continue}for(var o=0;o<a.length;){var s=76,c=a.slice(o,o+s);c.charAt(s-1)==`=`?s--:c.charAt(s-2)==`=`?s-=2:c.charAt(s-3)==`=`&&(s-=3),c=a.slice(o,o+s),o+=s,o<a.length&&(c+=`=`),n.push(c)}}return n.join(`\r
`)}function Je(e){for(var t=[],n=0;n<e.length;++n){for(var r=e[n];n<=e.length&&r.charAt(r.length-1)==`=`;)r=r.slice(0,r.length-1)+e[++n];t.push(r)}for(var i=0;i<t.length;++i)t[i]=t[i].replace(/[=][0-9A-Fa-f]{2}/g,function(e){return String.fromCharCode(parseInt(e.slice(1),16))});return $m(t.join(`\r
`))}function Ye(e,t,n){for(var r=``,i=``,a=``,o,s=0;s<10;++s){var c=t[s];if(!c||c.match(/^\s*$/))break;var l=c.match(/^(.*?):\s*([^\s].*)$/);if(l)switch(l[1].toLowerCase()){case`content-location`:r=l[2].trim();break;case`content-type`:a=l[2].trim();break;case`content-transfer-encoding`:i=l[2].trim();break}}switch(++s,i.toLowerCase()){case`base64`:o=$m(Jm(t.slice(s).join(``)));break;case`quoted-printable`:o=Je(t.slice(s));break;default:throw Error(`Unsupported Content-Transfer-Encoding `+i)}var u=$e(e,r.slice(n.length),o,{unsafe:!0});a&&(u.ctype=a)}function Xe(e,t){if(re(e.slice(0,13)).toLowerCase()!=`mime-version:`)throw Error(`Unsupported MAD header`);var n=t&&t.root||``,r=(Ym&&Buffer.isBuffer(e)?e.toString(`binary`):re(e)).split(`\r
`),i=0,a=``;for(i=0;i<r.length;++i)if(a=r[i],/^Content-Location:/i.test(a)&&(a=a.slice(a.indexOf(`file`)),n||=a.slice(0,a.lastIndexOf(`/`)+1),a.slice(0,n.length)!=n))for(;n.length>0&&(n=n.slice(0,n.length-1),n=n.slice(0,n.lastIndexOf(`/`)+1),a.slice(0,n.length)!=n););var o=(r[1]||``).match(/boundary="(.*?)"/);if(!o)throw Error(`MAD cannot find boundary`);var s=`--`+(o[1]||``),c={FileIndex:[],FullPaths:[]};S(c);var l,u=0;for(i=0;i<r.length;++i){var d=r[i];d!==s&&d!==s+`--`||(u++&&Ye(c,r.slice(l,i),n),l=i)}return c}function Ze(e,t){var n=t||{},r=n.boundary||`SheetJS`;r=`------=`+r;for(var i=[`MIME-Version: 1.0`,`Content-Type: multipart/related; boundary="`+r.slice(2)+`"`,``,``,``],a=e.FullPaths[0],o=a,s=e.FileIndex[0],c=1;c<e.FullPaths.length;++c)if(o=e.FullPaths[c].slice(a.length),s=e.FileIndex[c],!(!s.size||!s.content||o==`Sh33tJ5`)){o=o.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,function(e){return`_x`+e.charCodeAt(0).toString(16)+`_`}).replace(/[\u0080-\uFFFF]/g,function(e){return`_u`+e.charCodeAt(0).toString(16)+`_`});for(var l=s.content,u=Ym&&Buffer.isBuffer(l)?l.toString(`binary`):re(l),d=0,f=Math.min(1024,u.length),p=0,m=0;m<=f;++m)(p=u.charCodeAt(m))>=32&&p<128&&++d;var h=d>=f*4/5;i.push(r),i.push(`Content-Location: `+(n.root||`file:///C:/SheetJS/`)+o),i.push(`Content-Transfer-Encoding: `+(h?`quoted-printable`:`base64`)),i.push(`Content-Type: `+Ge(s,o)),i.push(``),i.push(h?qe(u):Ke(u))}return i.push(r+`--\r
`),i.join(`\r
`)}function Qe(e){var t={};return S(t,e),t}function $e(e,t,n,i){var a=i&&i.unsafe;a||S(e);var o=!a&&yg.find(e,t);if(!o){var s=e.FullPaths[0];t.slice(0,s.length)==s?s=t:(s.slice(-1)!=`/`&&(s+=`/`),s=(s+t).replace(`//`,`/`)),o={name:r(t),type:2},e.FileIndex.push(o),e.FullPaths.push(s),a||yg.utils.cfb_gc(e)}return o.content=n,o.size=n?n.length:0,i&&(i.CLSID&&(o.clsid=i.CLSID),i.mt&&(o.mt=i.mt),i.ct&&(o.ct=i.ct)),o}function et(e,t){S(e);var n=yg.find(e,t);if(n){for(var r=0;r<e.FileIndex.length;++r)if(e.FileIndex[r]==n)return e.FileIndex.splice(r,1),e.FullPaths.splice(r,1),!0}return!1}function tt(e,t,n){S(e);var i=yg.find(e,t);if(i){for(var a=0;a<e.FileIndex.length;++a)if(e.FileIndex[a]==i)return e.FileIndex[a].name=r(n),e.FullPaths[a]=n,!0}return!1}function nt(e){w(e,!0)}return e.find=E,e.read=x,e.parse=l,e.write=ie,e.writeFile=ne,e.utils={cfb_new:Qe,cfb_add:$e,cfb_del:et,cfb_mov:tt,cfb_gc:nt,ReadShift:q_,CheckField:Q_,prep_blob:$_,bconcat:rh,use_zlib:M,_deflateRaw:je,_inflateRaw:ze,consts:te},e})(),bg=void 0;function xg(e){return typeof e==`string`?eh(e):Array.isArray(e)?nh(e):e}function Sg(e,t,n){if(bg!==void 0&&bg.writeFileSync)return n?bg.writeFileSync(e,t,n):bg.writeFileSync(e,t);if(typeof Deno<`u`){if(n&&typeof t==`string`)switch(n){case`utf8`:t=new TextEncoder(n).encode(t);break;case`binary`:t=eh(t);break;default:throw Error(`Unsupported encoding `+n)}return Deno.writeFileSync(e,t)}var r=n==`utf8`?s_(t):t;if(typeof IE_SaveFile<`u`)return IE_SaveFile(r,e);if(typeof Blob<`u`){var i=new Blob([xg(r)],{type:`application/octet-stream`});if(typeof navigator<`u`&&navigator.msSaveBlob)return navigator.msSaveBlob(i,e);if(typeof saveAs<`u`)return saveAs(i,e);if(typeof URL<`u`&&typeof document<`u`&&document.createElement&&URL.createObjectURL){var a=URL.createObjectURL(i);if(typeof chrome==`object`&&typeof(chrome.downloads||{}).download==`function`)return URL.revokeObjectURL&&typeof setTimeout<`u`&&setTimeout(function(){URL.revokeObjectURL(a)},6e4),chrome.downloads.download({url:a,filename:e,saveAs:!0});var o=document.createElement(`a`);if(o.download!=null)return o.download=e,o.href=a,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL&&typeof setTimeout<`u`&&setTimeout(function(){URL.revokeObjectURL(a)},6e4),a}}if(typeof $<`u`&&typeof File<`u`&&typeof Folder<`u`)try{var s=File(e);return s.open(`w`),s.encoding=`binary`,Array.isArray(t)&&(t=th(t)),s.write(t),s.close(),t}catch(e){if(!e.message||!e.message.match(/onstruct/))throw e}throw Error(`cannot save file `+e)}function Cg(e){for(var t=Object.keys(e),n=[],r=0;r<t.length;++r)Object.prototype.hasOwnProperty.call(e,t[r])&&n.push(t[r]);return n}function wg(e,t){for(var n=[],r=Cg(e),i=0;i!==r.length;++i)n[e[r[i]][t]]??(n[e[r[i]][t]]=r[i]);return n}function Tg(e){for(var t=[],n=Cg(e),r=0;r!==n.length;++r)t[e[n[r]]]=n[r];return t}function Eg(e){for(var t=[],n=Cg(e),r=0;r!==n.length;++r)t[e[n[r]]]=parseInt(n[r],10);return t}function Dg(e){for(var t=[],n=Cg(e),r=0;r!==n.length;++r)t[e[n[r]]]??(t[e[n[r]]]=[]),t[e[n[r]]].push(n[r]);return t}var Og=new Date(1899,11,30,0,0,0);function kg(e,t){var n=e.getTime();t&&(n-=1462*24*60*60*1e3);var r=Og.getTime()+(e.getTimezoneOffset()-Og.getTimezoneOffset())*6e4;return(n-r)/(1440*60*1e3)}var Ag=new Date,jg=Og.getTime()+(Ag.getTimezoneOffset()-Og.getTimezoneOffset())*6e4,Mg=Ag.getTimezoneOffset();function Ng(e){var t=new Date;return t.setTime(e*24*60*60*1e3+jg),t.getTimezoneOffset()!==Mg&&t.setTime(t.getTime()+(t.getTimezoneOffset()-Mg)*6e4),t}var Pg=new Date(`2017-02-19T19:06:09.000Z`),Fg=isNaN(Pg.getFullYear())?new Date(`2/19/17`):Pg,Ig=Fg.getFullYear()==2017;function Lg(e,t){var n=new Date(e);if(Ig)return t>0?n.setTime(n.getTime()+n.getTimezoneOffset()*60*1e3):t<0&&n.setTime(n.getTime()-n.getTimezoneOffset()*60*1e3),n;if(e instanceof Date)return e;if(Fg.getFullYear()==1917&&!isNaN(n.getFullYear())){var r=n.getFullYear();return e.indexOf(``+r)>-1||n.setFullYear(n.getFullYear()+100),n}var i=e.match(/\d+/g)||[`2017`,`2`,`19`,`0`,`0`,`0`],a=new Date(+i[0],i[1]-1,+i[2],+i[3]||0,+i[4]||0,+i[5]||0);return e.indexOf(`Z`)>-1&&(a=new Date(a.getTime()-a.getTimezoneOffset()*60*1e3)),a}function Rg(e,t){if(Ym&&Buffer.isBuffer(e)){if(t){if(e[0]==255&&e[1]==254)return s_(e.slice(2).toString(`utf16le`));if(e[1]==254&&e[2]==255)return s_(Bm(e.slice(2).toString(`binary`)))}return e.toString(`binary`)}if(typeof TextDecoder<`u`)try{if(t){if(e[0]==255&&e[1]==254)return s_(new TextDecoder(`utf-16le`).decode(e.slice(2)));if(e[0]==254&&e[1]==255)return s_(new TextDecoder(`utf-16be`).decode(e.slice(2)))}var n={"€":``,"‚":``,ƒ:``,"„":``,"…":``,"†":``,"‡":``,ˆ:``,"‰":``,Š:``,"‹":``,Œ:``,Ž:``,"‘":``,"’":``,"“":``,"”":``,"•":``,"–":``,"—":``,"˜":``,"™":``,š:``,"›":``,œ:``,ž:``,Ÿ:``};return Array.isArray(e)&&(e=new Uint8Array(e)),new TextDecoder(`latin1`).decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g,function(e){return n[e]||e})}catch{}for(var r=[],i=0;i!=e.length;++i)r.push(String.fromCharCode(e[i]));return r.join(``)}function zg(e){if(typeof JSON<`u`&&!Array.isArray(e))return JSON.parse(JSON.stringify(e));if(typeof e!=`object`||!e)return e;if(e instanceof Date)return new Date(e.getTime());var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=zg(e[n]));return t}function Bg(e,t){for(var n=``;n.length<t;)n+=e;return n}function Vg(e){var t=Number(e);if(!isNaN(t))return isFinite(t)?t:NaN;if(!/\d/.test(e))return t;var n=1,r=e.replace(/([\d]),([\d])/g,`$1$2`).replace(/[$]/g,``).replace(/[%]/g,function(){return n*=100,``});return!isNaN(t=Number(r))||(r=r.replace(/[(](.*)[)]/,function(e,t){return n=-n,t}),!isNaN(t=Number(r)))?t/n:t}var Hg=[`january`,`february`,`march`,`april`,`may`,`june`,`july`,`august`,`september`,`october`,`november`,`december`];function Ug(e){var t=new Date(e),n=new Date(NaN),r=t.getYear(),i=t.getMonth(),a=t.getDate();if(isNaN(a))return n;var o=e.toLowerCase();if(o.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)){if(o=o.replace(/[^a-z]/g,``).replace(/([^a-z]|^)[ap]m?([^a-z]|$)/,``),o.length>3&&Hg.indexOf(o)==-1)return n}else if(o.match(/[a-z]/))return n;return r<0||r>8099?n:(i>0||a>1)&&r!=101?t:e.match(/[^-0-9:,\/\\]/)?n:t}function J(e,t,n){if(e.FullPaths){if(typeof n==`string`){var r=Ym?Xm(n):ih(n);return yg.utils.cfb_add(e,t,r)}yg.utils.cfb_add(e,t,n)}else e.file(t,n)}function Wg(){return yg.utils.cfb_new()}var Gg=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`,Kg=Tg({"&quot;":`"`,"&apos;":`'`,"&gt;":`>`,"&lt;":`<`,"&amp;":`&`}),qg=/[&<>'"]/g,Jg=/[\u0000-\u0008\u000b-\u001f]/g;function Yg(e){return(e+``).replace(qg,function(e){return Kg[e]}).replace(Jg,function(e){return`_x`+(`000`+e.charCodeAt(0).toString(16)).slice(-4)+`_`})}function Xg(e){return Yg(e).replace(/ /g,`_x0020_`)}var Zg=/[\u0000-\u001f]/g;function Qg(e){return(e+``).replace(qg,function(e){return Kg[e]}).replace(/\n/g,`<br/>`).replace(Zg,function(e){return`&#x`+(`000`+e.charCodeAt(0).toString(16)).slice(-4)+`;`})}function $g(e){return(e+``).replace(qg,function(e){return Kg[e]}).replace(Zg,function(e){return`&#x`+e.charCodeAt(0).toString(16).toUpperCase()+`;`})}function e_(e){return e.replace(/(\r\n|[\r\n])/g,`&#10;`)}function t_(e){switch(e){case 1:case!0:case`1`:case`true`:case`TRUE`:return!0;default:return!1}}function n_(e){for(var t=``,n=0,r=0,i=0,a=0,o=0,s=0;n<e.length;){if(r=e.charCodeAt(n++),r<128){t+=String.fromCharCode(r);continue}if(i=e.charCodeAt(n++),r>191&&r<224){o=(r&31)<<6,o|=i&63,t+=String.fromCharCode(o);continue}if(a=e.charCodeAt(n++),r<240){t+=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63);continue}o=e.charCodeAt(n++),s=((r&7)<<18|(i&63)<<12|(a&63)<<6|o&63)-65536,t+=String.fromCharCode(55296+(s>>>10&1023)),t+=String.fromCharCode(56320+(s&1023))}return t}function r_(e){var t=Zm(2*e.length),n,r,i=1,a=0,o=0,s;for(r=0;r<e.length;r+=i)i=1,(s=e.charCodeAt(r))<128?n=s:s<224?(n=(s&31)*64+(e.charCodeAt(r+1)&63),i=2):s<240?(n=(s&15)*4096+(e.charCodeAt(r+1)&63)*64+(e.charCodeAt(r+2)&63),i=3):(i=4,n=(s&7)*262144+(e.charCodeAt(r+1)&63)*4096+(e.charCodeAt(r+2)&63)*64+(e.charCodeAt(r+3)&63),n-=65536,o=55296+(n>>>10&1023),n=56320+(n&1023)),o!==0&&(t[a++]=o&255,t[a++]=o>>>8,o=0),t[a++]=n%256,t[a++]=n>>>8;return t.slice(0,a).toString(`ucs2`)}function i_(e){return Xm(e,`binary`).toString(`utf8`)}var a_=`foo bar bazâð£`,o_=Ym&&(i_(a_)==n_(a_)&&i_||r_(a_)==n_(a_)&&r_)||n_,s_=Ym?function(e){return Xm(e,`utf8`).toString(`binary`)}:function(e){for(var t=[],n=0,r=0,i=0;n<e.length;)switch(r=e.charCodeAt(n++),!0){case r<128:t.push(String.fromCharCode(r));break;case r<2048:t.push(String.fromCharCode(192+(r>>6))),t.push(String.fromCharCode(128+(r&63)));break;case r>=55296&&r<57344:r-=55296,i=e.charCodeAt(n++)-56320+(r<<10),t.push(String.fromCharCode(240+(i>>18&7))),t.push(String.fromCharCode(144+(i>>12&63))),t.push(String.fromCharCode(128+(i>>6&63))),t.push(String.fromCharCode(128+(i&63)));break;default:t.push(String.fromCharCode(224+(r>>12))),t.push(String.fromCharCode(128+(r>>6&63))),t.push(String.fromCharCode(128+(r&63)))}return t.join(``)},c_=(function(){var e=[[`nbsp`,` `],[`middot`,`·`],[`quot`,`"`],[`apos`,`'`],[`gt`,`>`],[`lt`,`<`],[`amp`,`&`]].map(function(e){return[RegExp(`&`+e[0]+`;`,`ig`),e[1]]});return function(t){for(var n=t.replace(/^[\t\n\r ]+/,``).replace(/[\t\n\r ]+$/,``).replace(/>\s+/g,`>`).replace(/\s+</g,`<`).replace(/[\t\n\r ]+/g,` `).replace(/<\s*[bB][rR]\s*\/?>/g,`
`).replace(/<[^>]*>/g,``),r=0;r<e.length;++r)n=n.replace(e[r][0],e[r][1]);return n}})(),l_=/(^\s|\s$|\n)/;function u_(e,t){return`<`+e+(t.match(l_)?` xml:space="preserve"`:``)+`>`+t+`</`+e+`>`}function d_(e){return Cg(e).map(function(t){return` `+t+`="`+e[t]+`"`}).join(``)}function Y(e,t,n){return`<`+e+(n==null?``:d_(n))+(t==null?`/`:(t.match(l_)?` xml:space="preserve"`:``)+`>`+t+`</`+e)+`>`}function f_(e,t){try{return e.toISOString().replace(/\.\d*/,``)}catch(e){if(t)throw e}return``}function p_(e,t){switch(typeof e){case`string`:var n=Y(`vt:lpwstr`,Yg(e));return t&&(n=n.replace(/&quot;/g,`_x0022_`)),n;case`number`:return Y((e|0)==e?`vt:i4`:`vt:r8`,Yg(String(e)));case`boolean`:return Y(`vt:bool`,e?`true`:`false`)}if(e instanceof Date)return Y(`vt:filetime`,f_(e));throw Error(`Unable to serialize `+e)}var m_={CORE_PROPS:`http://schemas.openxmlformats.org/package/2006/metadata/core-properties`,CUST_PROPS:`http://schemas.openxmlformats.org/officeDocument/2006/custom-properties`,EXT_PROPS:`http://schemas.openxmlformats.org/officeDocument/2006/extended-properties`,CT:`http://schemas.openxmlformats.org/package/2006/content-types`,RELS:`http://schemas.openxmlformats.org/package/2006/relationships`,TCMNT:`http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments`,dc:`http://purl.org/dc/elements/1.1/`,dcterms:`http://purl.org/dc/terms/`,dcmitype:`http://purl.org/dc/dcmitype/`,mx:`http://schemas.microsoft.com/office/mac/excel/2008/main`,r:`http://schemas.openxmlformats.org/officeDocument/2006/relationships`,sjs:`http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties`,vt:`http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes`,xsi:`http://www.w3.org/2001/XMLSchema-instance`,xsd:`http://www.w3.org/2001/XMLSchema`},h_=[`http://schemas.openxmlformats.org/spreadsheetml/2006/main`,`http://purl.oclc.org/ooxml/spreadsheetml/main`,`http://schemas.microsoft.com/office/excel/2006/main`,`http://schemas.microsoft.com/office/excel/2006/2`],g_={o:`urn:schemas-microsoft-com:office:office`,x:`urn:schemas-microsoft-com:office:excel`,ss:`urn:schemas-microsoft-com:office:spreadsheet`,dt:`uuid:C2F41010-65B3-11d1-A29F-00AA00C14882`,mv:`http://macVmlSchemaUri`,v:`urn:schemas-microsoft-com:vml`,html:`http://www.w3.org/TR/REC-html40`};function __(e,t){for(var n=1-2*(e[t+7]>>>7),r=((e[t+7]&127)<<4)+(e[t+6]>>>4&15),i=e[t+6]&15,a=5;a>=0;--a)i=i*256+e[t+a];return r==2047?i==0?n*(1/0):NaN:(r==0?r=-1022:(r-=1023,i+=2**52),n*2**(r-52)*i)}function v_(e,t,n){var r=(t<0||1/t==-1/0?1:0)<<7,i=0,a=0,o=r?-t:t;isFinite(o)?o==0?i=a=0:(i=Math.floor(Math.log(o)/Math.LN2),a=o*2**(52-i),i<=-1023&&(!isFinite(a)||a<2**52)?i=-1022:(a-=2**52,i+=1023)):(i=2047,a=isNaN(t)?26985:0);for(var s=0;s<=5;++s,a/=256)e[n+s]=a&255;e[n+6]=(i&15)<<4|a&15,e[n+7]=i>>4|r}var y_=function(e){for(var t=[],n=10240,r=0;r<e[0].length;++r)if(e[0][r])for(var i=0,a=e[0][r].length;i<a;i+=n)t.push.apply(t,e[0][r].slice(i,i+n));return t},b_=Ym?function(e){return e[0].length>0&&Buffer.isBuffer(e[0][0])?Buffer.concat(e[0].map(function(e){return Buffer.isBuffer(e)?e:Xm(e)})):y_(e)}:y_,x_=function(e,t,n){for(var r=[],i=t;i<n;i+=2)r.push(String.fromCharCode(H_(e,i)));return r.join(``).replace(ah,``)},S_=Ym?function(e,t,n){return Buffer.isBuffer(e)?e.toString(`utf16le`,t,n).replace(ah,``):x_(e,t,n)}:x_,C_=function(e,t,n){for(var r=[],i=t;i<t+n;++i)r.push((`0`+e[i].toString(16)).slice(-2));return r.join(``)},w_=Ym?function(e,t,n){return Buffer.isBuffer(e)?e.toString(`hex`,t,t+n):C_(e,t,n)}:C_,T_=function(e,t,n){for(var r=[],i=t;i<n;i++)r.push(String.fromCharCode(V_(e,i)));return r.join(``)},E_=Ym?function(e,t,n){return Buffer.isBuffer(e)?e.toString(`utf8`,t,n):T_(e,t,n)}:T_,D_=function(e,t){var n=W_(e,t);return n>0?E_(e,t+4,t+4+n-1):``},O_=D_,k_=function(e,t){var n=W_(e,t);return n>0?E_(e,t+4,t+4+n-1):``},A_=k_,j_=function(e,t){var n=2*W_(e,t);return n>0?E_(e,t+4,t+4+n-1):``},M_=j_,N_=function(e,t){var n=W_(e,t);return n>0?S_(e,t+4,t+4+n):``},P_=N_,F_=function(e,t){var n=W_(e,t);return n>0?E_(e,t+4,t+4+n):``},I_=F_,L_=function(e,t){return __(e,t)},R_=L_,z_=function(e){return Array.isArray(e)||typeof Uint8Array<`u`&&e instanceof Uint8Array};Ym&&(O_=function(e,t){if(!Buffer.isBuffer(e))return D_(e,t);var n=e.readUInt32LE(t);return n>0?e.toString(`utf8`,t+4,t+4+n-1):``},A_=function(e,t){if(!Buffer.isBuffer(e))return k_(e,t);var n=e.readUInt32LE(t);return n>0?e.toString(`utf8`,t+4,t+4+n-1):``},M_=function(e,t){if(!Buffer.isBuffer(e))return j_(e,t);var n=2*e.readUInt32LE(t);return e.toString(`utf16le`,t+4,t+4+n-1)},P_=function(e,t){if(!Buffer.isBuffer(e))return N_(e,t);var n=e.readUInt32LE(t);return e.toString(`utf16le`,t+4,t+4+n)},I_=function(e,t){if(!Buffer.isBuffer(e))return F_(e,t);var n=e.readUInt32LE(t);return e.toString(`utf8`,t+4,t+4+n)},R_=function(e,t){return Buffer.isBuffer(e)?e.readDoubleLE(t):L_(e,t)},z_=function(e){return Buffer.isBuffer(e)||Array.isArray(e)||typeof Uint8Array<`u`&&e instanceof Uint8Array});function B_(){S_=function(e,t,n){return Um.utils.decode(1200,e.slice(t,n)).replace(ah,``)},E_=function(e,t,n){return Um.utils.decode(65001,e.slice(t,n))},O_=function(e,t){var n=W_(e,t);return n>0?Um.utils.decode(Nm,e.slice(t+4,t+4+n-1)):``},A_=function(e,t){var n=W_(e,t);return n>0?Um.utils.decode(Mm,e.slice(t+4,t+4+n-1)):``},M_=function(e,t){var n=2*W_(e,t);return n>0?Um.utils.decode(1200,e.slice(t+4,t+4+n-1)):``},P_=function(e,t){var n=W_(e,t);return n>0?Um.utils.decode(1200,e.slice(t+4,t+4+n)):``},I_=function(e,t){var n=W_(e,t);return n>0?Um.utils.decode(65001,e.slice(t+4,t+4+n)):``}}Um!==void 0&&B_();var V_=function(e,t){return e[t]},H_=function(e,t){return e[t+1]*256+e[t]},U_=function(e,t){var n=e[t+1]*256+e[t];return n<32768?n:(65535-n+1)*-1},W_=function(e,t){return e[t+3]*(1<<24)+(e[t+2]<<16)+(e[t+1]<<8)+e[t]},G_=function(e,t){return e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]},K_=function(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]};function q_(e,t){var n=``,r,i,a=[],o,s,c,l;switch(t){case`dbcs`:if(l=this.l,Ym&&Buffer.isBuffer(this))n=this.slice(this.l,this.l+2*e).toString(`utf16le`);else for(c=0;c<e;++c)n+=String.fromCharCode(H_(this,l)),l+=2;e*=2;break;case`utf8`:n=E_(this,this.l,this.l+e);break;case`utf16le`:e*=2,n=S_(this,this.l,this.l+e);break;case`wstr`:if(Um!==void 0)n=Um.utils.decode(Mm,this.slice(this.l,this.l+2*e));else return q_.call(this,e,`dbcs`);e=2*e;break;case`lpstr-ansi`:n=O_(this,this.l),e=4+W_(this,this.l);break;case`lpstr-cp`:n=A_(this,this.l),e=4+W_(this,this.l);break;case`lpwstr`:n=M_(this,this.l),e=4+2*W_(this,this.l);break;case`lpp4`:e=4+W_(this,this.l),n=P_(this,this.l),e&2&&(e+=2);break;case`8lpp4`:e=4+W_(this,this.l),n=I_(this,this.l),e&3&&(e+=4-(e&3));break;case`cstr`:for(e=0,n=``;(o=V_(this,this.l+ e++))!==0;)a.push(Vm(o));n=a.join(``);break;case`_wstr`:for(e=0,n=``;(o=H_(this,this.l+e))!==0;)a.push(Vm(o)),e+=2;e+=2,n=a.join(``);break;case`dbcs-cont`:for(n=``,l=this.l,c=0;c<e;++c){if(this.lens&&this.lens.indexOf(l)!==-1)return o=V_(this,l),this.l=l+1,s=q_.call(this,e-c,o?`dbcs-cont`:`sbcs-cont`),a.join(``)+s;a.push(Vm(H_(this,l))),l+=2}n=a.join(``),e*=2;break;case`cpstr`:if(Um!==void 0){n=Um.utils.decode(Mm,this.slice(this.l,this.l+e));break}case`sbcs-cont`:for(n=``,l=this.l,c=0;c!=e;++c){if(this.lens&&this.lens.indexOf(l)!==-1)return o=V_(this,l),this.l=l+1,s=q_.call(this,e-c,o?`dbcs-cont`:`sbcs-cont`),a.join(``)+s;a.push(Vm(V_(this,l))),l+=1}n=a.join(``);break;default:switch(e){case 1:return r=V_(this,this.l),this.l++,r;case 2:return r=(t===`i`?U_:H_)(this,this.l),this.l+=2,r;case 4:case-4:return t===`i`||!(this[this.l+3]&128)?(r=(e>0?G_:K_)(this,this.l),this.l+=4,r):(i=W_(this,this.l),this.l+=4,i);case 8:case-8:if(t===`f`)return i=e==8?R_(this,this.l):R_([this[this.l+7],this[this.l+6],this[this.l+5],this[this.l+4],this[this.l+3],this[this.l+2],this[this.l+1],this[this.l+0]],0),this.l+=8,i;e=8;case 16:n=w_(this,this.l,e);break}}return this.l+=e,n}var J_=function(e,t,n){e[n]=t&255,e[n+1]=t>>>8&255,e[n+2]=t>>>16&255,e[n+3]=t>>>24&255},Y_=function(e,t,n){e[n]=t&255,e[n+1]=t>>8&255,e[n+2]=t>>16&255,e[n+3]=t>>24&255},X_=function(e,t,n){e[n]=t&255,e[n+1]=t>>>8&255};function Z_(e,t,n){var r=0,i=0;if(n===`dbcs`){for(i=0;i!=t.length;++i)X_(this,t.charCodeAt(i),this.l+2*i);r=2*t.length}else if(n===`sbcs`){if(Um!==void 0&&Nm==874)for(i=0;i!=t.length;++i){var a=Um.utils.encode(Nm,t.charAt(i));this[this.l+i]=a[0]}else for(t=t.replace(/[^\x00-\x7F]/g,`_`),i=0;i!=t.length;++i)this[this.l+i]=t.charCodeAt(i)&255;r=t.length}else if(n===`hex`){for(;i<e;++i)this[this.l++]=parseInt(t.slice(2*i,2*i+2),16)||0;return this}else if(n===`utf16le`){var o=Math.min(this.l+e,this.length);for(i=0;i<Math.min(t.length,e);++i){var s=t.charCodeAt(i);this[this.l++]=s&255,this[this.l++]=s>>8}for(;this.l<o;)this[this.l++]=0;return this}else switch(e){case 1:r=1,this[this.l]=t&255;break;case 2:r=2,this[this.l]=t&255,t>>>=8,this[this.l+1]=t&255;break;case 3:r=3,this[this.l]=t&255,t>>>=8,this[this.l+1]=t&255,t>>>=8,this[this.l+2]=t&255;break;case 4:r=4,J_(this,t,this.l);break;case 8:if(r=8,n===`f`){v_(this,t,this.l);break}case 16:break;case-4:r=4,Y_(this,t,this.l);break}return this.l+=r,this}function Q_(e,t){var n=w_(this,this.l,e.length>>1);if(n!==e)throw Error(t+`Expected `+e+` saw `+n);this.l+=e.length>>1}function $_(e,t){e.l=t,e.read_shift=q_,e.chk=Q_,e.write_shift=Z_}function ev(e,t){e.l+=t}function X(e){var t=Zm(e);return $_(t,0),t}function tv(){var e=[],t=Ym?256:2048,n=function(e){var t=X(e);return $_(t,0),t},r=n(t),i=function(){r&&=(r.length>r.l&&(r=r.slice(0,r.l),r.l=r.length),r.length>0&&e.push(r),null)},a=function(e){return r&&e<r.length-r.l?r:(i(),r=n(Math.max(e+1,t)))};return{next:a,push:function(e){i(),r=e,r.l??=r.length,a(t)},end:function(){return i(),rh(e)},_bufs:e}}function Z(e,t,n,r){var i=+t,a;if(!isNaN(i)){r||=_E[i].p||(n||[]).length||0,a=1+(i>=128?1:0)+1,r>=128&&++a,r>=16384&&++a,r>=2097152&&++a;var o=e.next(a);i<=127?o.write_shift(1,i):(o.write_shift(1,(i&127)+128),o.write_shift(1,i>>7));for(var s=0;s!=4;++s)if(r>=128)o.write_shift(1,(r&127)+128),r>>=7;else{o.write_shift(1,r);break}r>0&&z_(n)&&e.push(n)}}function nv(e,t,n){var r=zg(e);if(t.s?(r.cRel&&(r.c+=t.s.c),r.rRel&&(r.r+=t.s.r)):(r.cRel&&(r.c+=t.c),r.rRel&&(r.r+=t.r)),!n||n.biff<12){for(;r.c>=256;)r.c-=256;for(;r.r>=65536;)r.r-=65536}return r}function rv(e,t,n){var r=zg(e);return r.s=nv(r.s,t.s,n),r.e=nv(r.e,t.s,n),r}function iv(e,t){if(e.cRel&&e.c<0)for(e=zg(e);e.c<0;)e.c+=t>8?16384:256;if(e.rRel&&e.r<0)for(e=zg(e);e.r<0;)e.r+=t>8?1048576:t>5?65536:16384;var n=gv(e);return!e.cRel&&e.cRel!=null&&(n=fv(n)),!e.rRel&&e.rRel!=null&&(n=cv(n)),n}function av(e,t){return e.s.r==0&&!e.s.rRel&&e.e.r==(t.biff>=12?1048575:t.biff>=8?65536:16384)&&!e.e.rRel?(e.s.cRel?``:`$`)+dv(e.s.c)+`:`+(e.e.cRel?``:`$`)+dv(e.e.c):e.s.c==0&&!e.s.cRel&&e.e.c==(t.biff>=12?16383:255)&&!e.e.cRel?(e.s.rRel?``:`$`)+sv(e.s.r)+`:`+(e.e.rRel?``:`$`)+sv(e.e.r):iv(e.s,t.biff)+`:`+iv(e.e,t.biff)}function ov(e){return parseInt(lv(e),10)-1}function sv(e){return``+(e+1)}function cv(e){return e.replace(/([A-Z]|^)(\d+)$/,`$1$$$2`)}function lv(e){return e.replace(/\$(\d+)$/,`$1`)}function uv(e){for(var t=pv(e),n=0,r=0;r!==t.length;++r)n=26*n+t.charCodeAt(r)-64;return n-1}function dv(e){if(e<0)throw Error(`invalid column `+e);var t=``;for(++e;e;e=Math.floor((e-1)/26))t=String.fromCharCode((e-1)%26+65)+t;return t}function fv(e){return e.replace(/^([A-Z])/,`$$$1`)}function pv(e){return e.replace(/^\$([A-Z])/,`$1`)}function mv(e){return e.replace(/(\$?[A-Z]*)(\$?\d*)/,`$1,$2`).split(`,`)}function hv(e){for(var t=0,n=0,r=0;r<e.length;++r){var i=e.charCodeAt(r);i>=48&&i<=57?t=10*t+(i-48):i>=65&&i<=90&&(n=26*n+(i-64))}return{c:n-1,r:t-1}}function gv(e){for(var t=e.c+1,n=``;t;t=(t-1)/26|0)n=String.fromCharCode((t-1)%26+65)+n;return n+(e.r+1)}function _v(e){var t=e.indexOf(`:`);return t==-1?{s:hv(e),e:hv(e)}:{s:hv(e.slice(0,t)),e:hv(e.slice(t+1))}}function vv(e,t){return t===void 0||typeof t==`number`?vv(e.s,e.e):(typeof e!=`string`&&(e=gv(e)),typeof t!=`string`&&(t=gv(t)),e==t?e:e+`:`+t)}function yv(e){var t={s:{c:0,r:0},e:{c:0,r:0}},n=0,r=0,i=0,a=e.length;for(n=0;r<a&&!((i=e.charCodeAt(r)-64)<1||i>26);++r)n=26*n+i;for(t.s.c=--n,n=0;r<a&&!((i=e.charCodeAt(r)-48)<0||i>9);++r)n=10*n+i;if(t.s.r=--n,r===a||i!=10)return t.e.c=t.s.c,t.e.r=t.s.r,t;for(++r,n=0;r!=a&&!((i=e.charCodeAt(r)-64)<1||i>26);++r)n=26*n+i;for(t.e.c=--n,n=0;r!=a&&!((i=e.charCodeAt(r)-48)<0||i>9);++r)n=10*n+i;return t.e.r=--n,t}function bv(e,t){var n=e.t==`d`&&t instanceof Date;if(e.z!=null)try{return e.w=dg(e.z,n?kg(t):t)}catch{}try{return e.w=dg((e.XF||{}).numFmtId||(n?14:0),n?kg(t):t)}catch{return``+t}}function xv(e,t,n){return e==null||e.t==null||e.t==`z`?``:e.w===void 0?(e.t==`d`&&!e.z&&n&&n.dateNF&&(e.z=n.dateNF),e.t==`e`?vy[e.v]||e.v:t==null?bv(e,e.v):bv(e,t)):e.w}function Sv(e,t){var n=t&&t.sheet?t.sheet:`Sheet1`,r={};return r[n]=e,{SheetNames:[n],Sheets:r}}function Cv(e,t,n){var r=n||{},i=e?Array.isArray(e):r.dense;Wm!=null&&i==null&&(i=Wm);var a=e||(i?[]:{}),o=0,s=0;if(a&&r.origin!=null){if(typeof r.origin==`number`)o=r.origin;else{var c=typeof r.origin==`string`?hv(r.origin):r.origin;o=c.r,s=c.c}a[`!ref`]||=`A1:A1`}var l={s:{c:1e7,r:1e7},e:{c:0,r:0}};if(a[`!ref`]){var u=yv(a[`!ref`]);l.s.c=u.s.c,l.s.r=u.s.r,l.e.c=Math.max(l.e.c,u.e.c),l.e.r=Math.max(l.e.r,u.e.r),o==-1&&(l.e.r=o=u.e.r+1)}for(var d=0;d!=t.length;++d)if(t[d]){if(!Array.isArray(t[d]))throw Error(`aoa_to_sheet expects an array of arrays`);for(var f=0;f!=t[d].length;++f)if(t[d][f]!==void 0){var p={v:t[d][f]},m=o+d,h=s+f;if(l.s.r>m&&(l.s.r=m),l.s.c>h&&(l.s.c=h),l.e.r<m&&(l.e.r=m),l.e.c<h&&(l.e.c=h),t[d][f]&&typeof t[d][f]==`object`&&!Array.isArray(t[d][f])&&!(t[d][f]instanceof Date))p=t[d][f];else if(Array.isArray(p.v)&&(p.f=t[d][f][1],p.v=p.v[0]),p.v===null)if(p.f)p.t=`n`;else if(r.nullError)p.t=`e`,p.v=0;else if(r.sheetStubs)p.t=`z`;else continue;else typeof p.v==`number`?p.t=`n`:typeof p.v==`boolean`?p.t=`b`:p.v instanceof Date?(p.z=r.dateNF||yh[14],r.cellDates?(p.t=`d`,p.w=dg(p.z,kg(p.v))):(p.t=`n`,p.v=kg(p.v),p.w=dg(p.z,p.v))):p.t=`s`;if(i)a[m]||(a[m]=[]),a[m][h]&&a[m][h].z&&(p.z=a[m][h].z),a[m][h]=p;else{var g=gv({c:h,r:m});a[g]&&a[g].z&&(p.z=a[g].z),a[g]=p}}}return l.s.c<1e7&&(a[`!ref`]=vv(l)),a}function wv(e,t){return Cv(null,e,t)}function Tv(e){return e.read_shift(4,`i`)}function Ev(e,t){return t||=X(4),t.write_shift(4,e),t}function Dv(e){var t=e.read_shift(4);return t===0?``:e.read_shift(t,`dbcs`)}function Ov(e,t){var n=!1;return t??=(n=!0,X(4+2*e.length)),t.write_shift(4,e.length),e.length>0&&t.write_shift(0,e,`dbcs`),n?t.slice(0,t.l):t}function kv(e){return{ich:e.read_shift(2),ifnt:e.read_shift(2)}}function Av(e,t){return t||=X(4),t.write_shift(2,e.ich||0),t.write_shift(2,e.ifnt||0),t}function jv(e,t){var n=e.l,r=e.read_shift(1),i=Dv(e),a=[],o={t:i,h:i};if(r&1){for(var s=e.read_shift(4),c=0;c!=s;++c)a.push(kv(e));o.r=a}else o.r=[{ich:0,ifnt:0}];return e.l=n+t,o}function Mv(e,t){var n=!1;return t??=(n=!0,X(15+4*e.t.length)),t.write_shift(1,0),Ov(e.t,t),n?t.slice(0,t.l):t}var Nv=jv;function Pv(e,t){var n=!1;return t??=(n=!0,X(23+4*e.t.length)),t.write_shift(1,1),Ov(e.t,t),t.write_shift(4,1),Av({ich:0,ifnt:0},t),n?t.slice(0,t.l):t}function Fv(e){var t=e.read_shift(4),n=e.read_shift(2);return n+=e.read_shift(1)<<16,e.l++,{c:t,iStyleRef:n}}function Iv(e,t){return t??=X(8),t.write_shift(-4,e.c),t.write_shift(3,e.iStyleRef||e.s),t.write_shift(1,0),t}function Lv(e){var t=e.read_shift(2);return t+=e.read_shift(1)<<16,e.l++,{c:-1,iStyleRef:t}}function Rv(e,t){return t??=X(4),t.write_shift(3,e.iStyleRef||e.s),t.write_shift(1,0),t}var zv=Dv,Bv=Ov;function Vv(e){var t=e.read_shift(4);return t===0||t===4294967295?``:e.read_shift(t,`dbcs`)}function Hv(e,t){var n=!1;return t??=(n=!0,X(127)),t.write_shift(4,e.length>0?e.length:4294967295),e.length>0&&t.write_shift(0,e,`dbcs`),n?t.slice(0,t.l):t}var Uv=Dv,Wv=Vv,Gv=Hv;function Kv(e){var t=e.slice(e.l,e.l+4),n=t[0]&1,r=t[0]&2;e.l+=4;var i=r===0?R_([0,0,0,0,t[0]&252,t[1],t[2],t[3]],0):G_(t,0)>>2;return n?i/100:i}function qv(e,t){t??=X(4);var n=0,r=0,i=e*100;if(e==(e|0)&&e>=-536870912&&e<1<<29?r=1:i==(i|0)&&i>=-536870912&&i<1<<29&&(r=1,n=1),r)t.write_shift(-4,((n?i:e)<<2)+(n+2));else throw Error(`unsupported RkNumber `+e)}function Jv(e){var t={s:{},e:{}};return t.s.r=e.read_shift(4),t.e.r=e.read_shift(4),t.s.c=e.read_shift(4),t.e.c=e.read_shift(4),t}function Yv(e,t){return t||=X(16),t.write_shift(4,e.s.r),t.write_shift(4,e.e.r),t.write_shift(4,e.s.c),t.write_shift(4,e.e.c),t}var Xv=Jv,Zv=Yv;function Qv(e){if(e.length-e.l<8)throw`XLS Xnum Buffer underflow`;return e.read_shift(8,`f`)}function $v(e,t){return(t||X(8)).write_shift(8,e,`f`)}function ey(e){var t={},n=e.read_shift(1)>>>1,r=e.read_shift(1),i=e.read_shift(2,`i`),a=e.read_shift(1),o=e.read_shift(1),s=e.read_shift(1);switch(e.l++,n){case 0:t.auto=1;break;case 1:t.index=r;var c=_y[r];c&&(t.rgb=$b(c));break;case 2:t.rgb=$b([a,o,s]);break;case 3:t.theme=r;break}return i!=0&&(t.tint=i>0?i/32767:i/32768),t}function ty(e,t){if(t||=X(8),!e||e.auto)return t.write_shift(4,0),t.write_shift(4,0),t;e.index==null?e.theme==null?(t.write_shift(1,5),t.write_shift(1,0)):(t.write_shift(1,6),t.write_shift(1,e.theme)):(t.write_shift(1,2),t.write_shift(1,e.index));var n=e.tint||0;if(n>0?n*=32767:n<0&&(n*=32768),t.write_shift(2,n),!e.rgb||e.theme!=null)t.write_shift(2,0),t.write_shift(1,0),t.write_shift(1,0);else{var r=e.rgb||`FFFFFF`;typeof r==`number`&&(r=(`000000`+r.toString(16)).slice(-6)),t.write_shift(1,parseInt(r.slice(0,2),16)),t.write_shift(1,parseInt(r.slice(2,4),16)),t.write_shift(1,parseInt(r.slice(4,6),16)),t.write_shift(1,255)}return t}function ny(e){var t=e.read_shift(1);return e.l++,{fBold:t&1,fItalic:t&2,fUnderline:t&4,fStrikeout:t&8,fOutline:t&16,fShadow:t&32,fCondense:t&64,fExtend:t&128}}function ry(e,t){t||=X(2);var n=(e.italic?2:0)|(e.strike?8:0)|(e.outline?16:0)|(e.shadow?32:0)|(e.condense?64:0)|(e.extend?128:0);return t.write_shift(1,n),t.write_shift(1,0),t}var iy=2,ay=3,oy=11,sy=19,cy=64,ly=65,uy=71,dy=4108,fy=4126,py=80,my={1:{n:`CodePage`,t:iy},2:{n:`Category`,t:py},3:{n:`PresentationFormat`,t:py},4:{n:`ByteCount`,t:ay},5:{n:`LineCount`,t:ay},6:{n:`ParagraphCount`,t:ay},7:{n:`SlideCount`,t:ay},8:{n:`NoteCount`,t:ay},9:{n:`HiddenCount`,t:ay},10:{n:`MultimediaClipCount`,t:ay},11:{n:`ScaleCrop`,t:oy},12:{n:`HeadingPairs`,t:dy},13:{n:`TitlesOfParts`,t:fy},14:{n:`Manager`,t:py},15:{n:`Company`,t:py},16:{n:`LinksUpToDate`,t:oy},17:{n:`CharacterCount`,t:ay},19:{n:`SharedDoc`,t:oy},22:{n:`HyperlinksChanged`,t:oy},23:{n:`AppVersion`,t:ay,p:`version`},24:{n:`DigSig`,t:ly},26:{n:`ContentType`,t:py},27:{n:`ContentStatus`,t:py},28:{n:`Language`,t:py},29:{n:`Version`,t:py},255:{},2147483648:{n:`Locale`,t:sy},2147483651:{n:`Behavior`,t:sy},1919054434:{}},hy={1:{n:`CodePage`,t:iy},2:{n:`Title`,t:py},3:{n:`Subject`,t:py},4:{n:`Author`,t:py},5:{n:`Keywords`,t:py},6:{n:`Comments`,t:py},7:{n:`Template`,t:py},8:{n:`LastAuthor`,t:py},9:{n:`RevNumber`,t:py},10:{n:`EditTime`,t:cy},11:{n:`LastPrinted`,t:cy},12:{n:`CreatedDate`,t:cy},13:{n:`ModifiedDate`,t:cy},14:{n:`PageCount`,t:ay},15:{n:`WordCount`,t:ay},16:{n:`CharCount`,t:ay},17:{n:`Thumbnail`,t:uy},18:{n:`Application`,t:py},19:{n:`DocSecurity`,t:ay},255:{},2147483648:{n:`Locale`,t:sy},2147483651:{n:`Behavior`,t:sy},1919054434:{}};function gy(e){return e.map(function(e){return[e>>16&255,e>>8&255,e&255]})}var _y=zg(gy([0,16777215,16711680,65280,255,16776960,16711935,65535,0,16777215,16711680,65280,255,16776960,16711935,65535,8388608,32768,128,8421376,8388736,32896,12632256,8421504,10066431,10040166,16777164,13434879,6684774,16744576,26316,13421823,128,16711935,16776960,65535,8388736,8388608,32896,255,52479,13434879,13434828,16777113,10079487,16751052,13408767,16764057,3368703,3394764,10079232,16763904,16750848,16737792,6710937,9868950,13158,3381606,13056,3355392,10040064,10040166,3355545,3355443,16777215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])),vy={0:`#NULL!`,7:`#DIV/0!`,15:`#VALUE!`,23:`#REF!`,29:`#NAME?`,36:`#NUM!`,42:`#N/A`,43:`#GETTING_DATA`,255:`#WTF?`},yy={"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":`workbooks`,"application/vnd.ms-excel.sheet.macroEnabled.main+xml":`workbooks`,"application/vnd.ms-excel.sheet.binary.macroEnabled.main":`workbooks`,"application/vnd.ms-excel.addin.macroEnabled.main+xml":`workbooks`,"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":`workbooks`,"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":`sheets`,"application/vnd.ms-excel.worksheet":`sheets`,"application/vnd.ms-excel.binIndexWs":`TODO`,"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":`charts`,"application/vnd.ms-excel.chartsheet":`charts`,"application/vnd.ms-excel.macrosheet+xml":`macros`,"application/vnd.ms-excel.macrosheet":`macros`,"application/vnd.ms-excel.intlmacrosheet":`TODO`,"application/vnd.ms-excel.binIndexMs":`TODO`,"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":`dialogs`,"application/vnd.ms-excel.dialogsheet":`dialogs`,"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml":`strs`,"application/vnd.ms-excel.sharedStrings":`strs`,"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":`styles`,"application/vnd.ms-excel.styles":`styles`,"application/vnd.openxmlformats-package.core-properties+xml":`coreprops`,"application/vnd.openxmlformats-officedocument.custom-properties+xml":`custprops`,"application/vnd.openxmlformats-officedocument.extended-properties+xml":`extprops`,"application/vnd.openxmlformats-officedocument.customXmlProperties+xml":`TODO`,"application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":`TODO`,"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":`comments`,"application/vnd.ms-excel.comments":`comments`,"application/vnd.ms-excel.threadedcomments+xml":`threadedcomments`,"application/vnd.ms-excel.person+xml":`people`,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":`metadata`,"application/vnd.ms-excel.sheetMetadata":`metadata`,"application/vnd.ms-excel.pivotTable":`TODO`,"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":`TODO`,"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":`TODO`,"application/vnd.ms-office.chartcolorstyle+xml":`TODO`,"application/vnd.ms-office.chartstyle+xml":`TODO`,"application/vnd.ms-office.chartex+xml":`TODO`,"application/vnd.ms-excel.calcChain":`calcchains`,"application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":`calcchains`,"application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":`TODO`,"application/vnd.ms-office.activeX":`TODO`,"application/vnd.ms-office.activeX+xml":`TODO`,"application/vnd.ms-excel.attachedToolbars":`TODO`,"application/vnd.ms-excel.connections":`TODO`,"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":`TODO`,"application/vnd.ms-excel.externalLink":`links`,"application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":`links`,"application/vnd.ms-excel.pivotCacheDefinition":`TODO`,"application/vnd.ms-excel.pivotCacheRecords":`TODO`,"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":`TODO`,"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":`TODO`,"application/vnd.ms-excel.queryTable":`TODO`,"application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":`TODO`,"application/vnd.ms-excel.userNames":`TODO`,"application/vnd.ms-excel.revisionHeaders":`TODO`,"application/vnd.ms-excel.revisionLog":`TODO`,"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":`TODO`,"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":`TODO`,"application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":`TODO`,"application/vnd.ms-excel.tableSingleCells":`TODO`,"application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":`TODO`,"application/vnd.ms-excel.slicer":`TODO`,"application/vnd.ms-excel.slicerCache":`TODO`,"application/vnd.ms-excel.slicer+xml":`TODO`,"application/vnd.ms-excel.slicerCache+xml":`TODO`,"application/vnd.ms-excel.wsSortMap":`TODO`,"application/vnd.ms-excel.table":`TODO`,"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":`TODO`,"application/vnd.openxmlformats-officedocument.theme+xml":`themes`,"application/vnd.openxmlformats-officedocument.themeOverride+xml":`TODO`,"application/vnd.ms-excel.Timeline+xml":`TODO`,"application/vnd.ms-excel.TimelineCache+xml":`TODO`,"application/vnd.ms-office.vbaProject":`vba`,"application/vnd.ms-office.vbaProjectSignature":`TODO`,"application/vnd.ms-office.volatileDependencies":`TODO`,"application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":`TODO`,"application/vnd.ms-excel.controlproperties+xml":`TODO`,"application/vnd.openxmlformats-officedocument.model+data":`TODO`,"application/vnd.ms-excel.Survey+xml":`TODO`,"application/vnd.openxmlformats-officedocument.drawing+xml":`drawings`,"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":`TODO`,"application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":`TODO`,"application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":`TODO`,"application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":`TODO`,"application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":`TODO`,"application/vnd.openxmlformats-officedocument.vmlDrawing":`TODO`,"application/vnd.openxmlformats-package.relationships+xml":`rels`,"application/vnd.openxmlformats-officedocument.oleObject":`TODO`,"image/png":`TODO`,sheet:`js`},by={workbooks:{xlsx:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml`,xlsm:`application/vnd.ms-excel.sheet.macroEnabled.main+xml`,xlsb:`application/vnd.ms-excel.sheet.binary.macroEnabled.main`,xlam:`application/vnd.ms-excel.addin.macroEnabled.main+xml`,xltx:`application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml`},strs:{xlsx:`application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml`,xlsb:`application/vnd.ms-excel.sharedStrings`},comments:{xlsx:`application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml`,xlsb:`application/vnd.ms-excel.comments`},sheets:{xlsx:`application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml`,xlsb:`application/vnd.ms-excel.worksheet`},charts:{xlsx:`application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml`,xlsb:`application/vnd.ms-excel.chartsheet`},dialogs:{xlsx:`application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml`,xlsb:`application/vnd.ms-excel.dialogsheet`},macros:{xlsx:`application/vnd.ms-excel.macrosheet+xml`,xlsb:`application/vnd.ms-excel.macrosheet`},metadata:{xlsx:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml`,xlsb:`application/vnd.ms-excel.sheetMetadata`},styles:{xlsx:`application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml`,xlsb:`application/vnd.ms-excel.styles`}};function xy(){return{workbooks:[],sheets:[],charts:[],dialogs:[],macros:[],rels:[],strs:[],comments:[],threadedcomments:[],links:[],coreprops:[],extprops:[],custprops:[],themes:[],styles:[],calcchains:[],vba:[],drawings:[],metadata:[],people:[],TODO:[],xmlns:``}}function Sy(e,t){var n=Dg(yy),r=[],i;r[r.length]=Gg,r[r.length]=Y(`Types`,null,{xmlns:m_.CT,"xmlns:xsd":m_.xsd,"xmlns:xsi":m_.xsi}),r=r.concat([[`xml`,`application/xml`],[`bin`,`application/vnd.ms-excel.sheet.binary.macroEnabled.main`],[`vml`,`application/vnd.openxmlformats-officedocument.vmlDrawing`],[`data`,`application/vnd.openxmlformats-officedocument.model+data`],[`bmp`,`image/bmp`],[`png`,`image/png`],[`gif`,`image/gif`],[`emf`,`image/x-emf`],[`wmf`,`image/x-wmf`],[`jpg`,`image/jpeg`],[`jpeg`,`image/jpeg`],[`tif`,`image/tiff`],[`tiff`,`image/tiff`],[`pdf`,`application/pdf`],[`rels`,`application/vnd.openxmlformats-package.relationships+xml`]].map(function(e){return Y(`Default`,null,{Extension:e[0],ContentType:e[1]})}));var a=function(n){e[n]&&e[n].length>0&&(i=e[n][0],r[r.length]=Y(`Override`,null,{PartName:(i[0]==`/`?``:`/`)+i,ContentType:by[n][t.bookType]||by[n].xlsx}))},o=function(n){(e[n]||[]).forEach(function(e){r[r.length]=Y(`Override`,null,{PartName:(e[0]==`/`?``:`/`)+e,ContentType:by[n][t.bookType]||by[n].xlsx})})},s=function(t){(e[t]||[]).forEach(function(e){r[r.length]=Y(`Override`,null,{PartName:(e[0]==`/`?``:`/`)+e,ContentType:n[t][0]})})};return a(`workbooks`),o(`sheets`),o(`charts`),s(`themes`),[`strs`,`styles`].forEach(a),[`coreprops`,`extprops`,`custprops`].forEach(s),s(`vba`),s(`comments`),s(`threadedcomments`),s(`drawings`),o(`metadata`),s(`people`),r.length>2&&(r[r.length]=`</Types>`,r[1]=r[1].replace(`/>`,`>`)),r.join(``)}var Cy={WB:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument`,SHEET:`http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument`,HLINK:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink`,VML:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing`,XPATH:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath`,XMISS:`http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing`,XLINK:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink`,CXML:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml`,CXMLP:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps`,CMNT:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments`,CORE_PROPS:`http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties`,EXT_PROPS:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties`,CUST_PROPS:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties`,SST:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings`,STY:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles`,THEME:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme`,CHART:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart`,CHARTEX:`http://schemas.microsoft.com/office/2014/relationships/chartEx`,CS:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet`,WS:[`http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet`,`http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet`],DS:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet`,MS:`http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet`,IMG:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/image`,DRAW:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing`,XLMETA:`http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata`,TCMNT:`http://schemas.microsoft.com/office/2017/10/relationships/threadedComment`,PEOPLE:`http://schemas.microsoft.com/office/2017/10/relationships/person`,VBA:`http://schemas.microsoft.com/office/2006/relationships/vbaProject`};function wy(e){var t=e.lastIndexOf(`/`);return e.slice(0,t+1)+`_rels/`+e.slice(t+1)+`.rels`}function Ty(e){var t=[Gg,Y(`Relationships`,null,{xmlns:m_.RELS})];return Cg(e[`!id`]).forEach(function(n){t[t.length]=Y(`Relationship`,null,e[`!id`][n])}),t.length>2&&(t[t.length]=`</Relationships>`,t[1]=t[1].replace(`/>`,`>`)),t.join(``)}function Ey(e,t,n,r,i,a){if(i||={},e[`!id`]||={},e[`!idx`]||=1,t<0)for(t=e[`!idx`];e[`!id`][`rId`+t];++t);if(e[`!idx`]=t+1,i.Id=`rId`+t,i.Type=r,i.Target=n,a?i.TargetMode=a:[Cy.HLINK,Cy.XPATH,Cy.XMISS].indexOf(i.Type)>-1&&(i.TargetMode=`External`),e[`!id`][i.Id])throw Error(`Cannot rewrite rId `+t);return e[`!id`][i.Id]=i,e[(`/`+i.Target).replace(`//`,`/`)]=i,t}function Dy(e){var t=[Gg];t.push(`<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
`),t.push(`  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>
`);for(var n=0;n<e.length;++n)t.push(`  <manifest:file-entry manifest:full-path="`+e[n][0]+`" manifest:media-type="`+e[n][1]+`"/>
`);return t.push(`</manifest:manifest>`),t.join(``)}function Oy(e,t,n){return[`  <rdf:Description rdf:about="`+e+`">
`,`    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/`+(n||`odf`)+`#`+t+`"/>
`,`  </rdf:Description>
`].join(``)}function ky(e,t){return[`  <rdf:Description rdf:about="`+e+`">
`,`    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="`+t+`"/>
`,`  </rdf:Description>
`].join(``)}function Ay(e){var t=[Gg];t.push(`<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
`);for(var n=0;n!=e.length;++n)t.push(Oy(e[n][0],e[n][1])),t.push(ky(``,e[n][0]));return t.push(Oy(``,`Document`,`pkg`)),t.push(`</rdf:RDF>`),t.join(``)}function jy(){return`<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS `+jm.version+`</meta:generator></office:meta></office:document-meta>`}var My=[[`cp:category`,`Category`],[`cp:contentStatus`,`ContentStatus`],[`cp:keywords`,`Keywords`],[`cp:lastModifiedBy`,`LastAuthor`],[`cp:lastPrinted`,`LastPrinted`],[`cp:revision`,`RevNumber`],[`cp:version`,`Version`],[`dc:creator`,`Author`],[`dc:description`,`Comments`],[`dc:identifier`,`Identifier`],[`dc:language`,`Language`],[`dc:subject`,`Subject`],[`dc:title`,`Title`],[`dcterms:created`,`CreatedDate`,`date`],[`dcterms:modified`,`ModifiedDate`,`date`]];function Ny(e,t,n,r,i){i[e]!=null||t==null||t===``||(i[e]=t,t=Yg(t),r[r.length]=n?Y(e,t,n):u_(e,t))}function Py(e,t){var n=t||{},r=[Gg,Y(`cp:coreProperties`,null,{"xmlns:cp":m_.CORE_PROPS,"xmlns:dc":m_.dc,"xmlns:dcterms":m_.dcterms,"xmlns:dcmitype":m_.dcmitype,"xmlns:xsi":m_.xsi})],i={};if(!e&&!n.Props)return r.join(``);e&&(e.CreatedDate!=null&&Ny(`dcterms:created`,typeof e.CreatedDate==`string`?e.CreatedDate:f_(e.CreatedDate,n.WTF),{"xsi:type":`dcterms:W3CDTF`},r,i),e.ModifiedDate!=null&&Ny(`dcterms:modified`,typeof e.ModifiedDate==`string`?e.ModifiedDate:f_(e.ModifiedDate,n.WTF),{"xsi:type":`dcterms:W3CDTF`},r,i));for(var a=0;a!=My.length;++a){var o=My[a],s=n.Props&&n.Props[o[1]]!=null?n.Props[o[1]]:e?e[o[1]]:null;s===!0?s=`1`:s===!1?s=`0`:typeof s==`number`&&(s=String(s)),s!=null&&Ny(o[0],s,null,r,i)}return r.length>2&&(r[r.length]=`</cp:coreProperties>`,r[1]=r[1].replace(`/>`,`>`)),r.join(``)}var Fy=[[`Application`,`Application`,`string`],[`AppVersion`,`AppVersion`,`string`],[`Company`,`Company`,`string`],[`DocSecurity`,`DocSecurity`,`string`],[`Manager`,`Manager`,`string`],[`HyperlinksChanged`,`HyperlinksChanged`,`bool`],[`SharedDoc`,`SharedDoc`,`bool`],[`LinksUpToDate`,`LinksUpToDate`,`bool`],[`ScaleCrop`,`ScaleCrop`,`bool`],[`HeadingPairs`,`HeadingPairs`,`raw`],[`TitlesOfParts`,`TitlesOfParts`,`raw`]],Iy=[`Worksheets`,`SheetNames`,`NamedRanges`,`DefinedNames`,`Chartsheets`,`ChartNames`];function Ly(e){var t=[],n=Y;return e||={},e.Application=`SheetJS`,t[t.length]=Gg,t[t.length]=Y(`Properties`,null,{xmlns:m_.EXT_PROPS,"xmlns:vt":m_.vt}),Fy.forEach(function(r){if(e[r[1]]!==void 0){var i;switch(r[2]){case`string`:i=Yg(String(e[r[1]]));break;case`bool`:i=e[r[1]]?`true`:`false`;break}i!==void 0&&(t[t.length]=n(r[0],i))}}),t[t.length]=n(`HeadingPairs`,n(`vt:vector`,n(`vt:variant`,`<vt:lpstr>Worksheets</vt:lpstr>`)+n(`vt:variant`,n(`vt:i4`,String(e.Worksheets))),{size:2,baseType:`variant`})),t[t.length]=n(`TitlesOfParts`,n(`vt:vector`,e.SheetNames.map(function(e){return`<vt:lpstr>`+Yg(e)+`</vt:lpstr>`}).join(``),{size:e.Worksheets,baseType:`lpstr`})),t.length>2&&(t[t.length]=`</Properties>`,t[1]=t[1].replace(`/>`,`>`)),t.join(``)}function Ry(e){var t=[Gg,Y(`Properties`,null,{xmlns:m_.CUST_PROPS,"xmlns:vt":m_.vt})];if(!e)return t.join(``);var n=1;return Cg(e).forEach(function(r){++n,t[t.length]=Y(`property`,p_(e[r],!0),{fmtid:`{D5CDD505-2E9C-101B-9397-08002B2CF9AE}`,pid:n,name:Yg(r)})}),t.length>2&&(t[t.length]=`</Properties>`,t[1]=t[1].replace(`/>`,`>`)),t.join(``)}var zy={Title:`Title`,Subject:`Subject`,Author:`Author`,Keywords:`Keywords`,Comments:`Description`,LastAuthor:`LastAuthor`,RevNumber:`Revision`,Application:`AppName`,LastPrinted:`LastPrinted`,CreatedDate:`Created`,ModifiedDate:`LastSaved`,Category:`Category`,Manager:`Manager`,Company:`Company`,AppVersion:`Version`,ContentStatus:`ContentStatus`,Identifier:`Identifier`,Language:`Language`};function By(e,t){var n=[];return Cg(zy).map(function(e){for(var t=0;t<My.length;++t)if(My[t][1]==e)return My[t];for(t=0;t<Fy.length;++t)if(Fy[t][1]==e)return Fy[t];throw e}).forEach(function(r){if(e[r[1]]!=null){var i=t&&t.Props&&t.Props[r[1]]!=null?t.Props[r[1]]:e[r[1]];switch(r[2]){case`date`:i=new Date(i).toISOString().replace(/\.\d*Z/,`Z`);break}typeof i==`number`?i=String(i):i===!0||i===!1?i=i?`1`:`0`:i instanceof Date&&(i=new Date(i).toISOString().replace(/\.\d*Z/,``)),n.push(u_(zy[r[1]]||r[1],i))}}),Y(`DocumentProperties`,n.join(``),{xmlns:g_.o})}function Vy(e,t){var n=[`Worksheets`,`SheetNames`],r=`CustomDocumentProperties`,i=[];return e&&Cg(e).forEach(function(t){if(Object.prototype.hasOwnProperty.call(e,t)){for(var r=0;r<My.length;++r)if(t==My[r][1])return;for(r=0;r<Fy.length;++r)if(t==Fy[r][1])return;for(r=0;r<n.length;++r)if(t==n[r])return;var a=e[t],o=`string`;typeof a==`number`?(o=`float`,a=String(a)):a===!0||a===!1?(o=`boolean`,a=a?`1`:`0`):a=String(a),i.push(Y(Xg(t),a,{"dt:dt":o}))}}),t&&Cg(t).forEach(function(n){if(Object.prototype.hasOwnProperty.call(t,n)&&!(e&&Object.prototype.hasOwnProperty.call(e,n))){var r=t[n],a=`string`;typeof r==`number`?(a=`float`,r=String(r)):r===!0||r===!1?(a=`boolean`,r=r?`1`:`0`):r instanceof Date?(a=`dateTime.tz`,r=r.toISOString()):r=String(r),i.push(Y(Xg(n),r,{"dt:dt":a}))}}),`<`+r+` xmlns="`+g_.o+`">`+i.join(``)+`</`+r+`>`}function Hy(e){var t=(typeof e==`string`?new Date(Date.parse(e)):e).getTime()/1e3+11644473600,n=t%2**32,r=(t-n)/2**32;n*=1e7,r*=1e7;var i=n/2**32|0;i>0&&(n%=2**32,r+=i);var a=X(8);return a.write_shift(4,n),a.write_shift(4,r),a}function Uy(e,t){var n=X(4),r=X(4);switch(n.write_shift(4,e==80?31:e),e){case 3:r.write_shift(-4,t);break;case 5:r=X(8),r.write_shift(8,t,`f`);break;case 11:r.write_shift(4,t?1:0);break;case 64:r=Hy(t);break;case 31:case 80:for(r=X(4+2*(t.length+1)+(t.length%2?0:2)),r.write_shift(4,t.length+1),r.write_shift(0,t,`dbcs`);r.l!=r.length;)r.write_shift(1,0);break;default:throw Error(`TypedPropertyValue unrecognized type `+e+` `+t)}return rh([n,r])}var Wy=[`CodePage`,`Thumbnail`,`_PID_LINKBASE`,`_PID_HLINKS`,`SystemIdentifier`,`FMTID`];function Gy(e){switch(typeof e){case`boolean`:return 11;case`number`:return(e|0)==e?3:5;case`string`:return 31;case`object`:if(e instanceof Date)return 64;break}return-1}function Ky(e,t,n){var r=X(8),i=[],a=[],o=8,s=0,c=X(8),l=X(8);if(c.write_shift(4,2),c.write_shift(4,1200),l.write_shift(4,1),a.push(c),i.push(l),o+=8+c.length,!t){l=X(8),l.write_shift(4,0),i.unshift(l);var u=[X(4)];for(u[0].write_shift(4,e.length),s=0;s<e.length;++s){var d=e[s][0];for(c=X(8+2*(d.length+1)+(d.length%2?0:2)),c.write_shift(4,s+2),c.write_shift(4,d.length+1),c.write_shift(0,d,`dbcs`);c.l!=c.length;)c.write_shift(1,0);u.push(c)}c=rh(u),a.unshift(c),o+=8+c.length}for(s=0;s<e.length;++s)if(!(t&&!t[e[s][0]])&&!(Wy.indexOf(e[s][0])>-1||Iy.indexOf(e[s][0])>-1)&&e[s][1]!=null){var f=e[s][1],p=0;if(t){p=+t[e[s][0]];var m=n[p];if(m.p==`version`&&typeof f==`string`){var h=f.split(`.`);f=(h[0]<<16)+(+h[1]||0)}c=Uy(m.t,f)}else{var g=Gy(f);g==-1&&(g=31,f=String(f)),c=Uy(g,f)}a.push(c),l=X(8),l.write_shift(4,t?p:2+s),i.push(l),o+=8+c.length}var _=8*(a.length+1);for(s=0;s<a.length;++s)i[s].write_shift(4,_),_+=a[s].length;return r.write_shift(4,o),r.write_shift(4,a.length),rh([r].concat(i,a))}function qy(e,t,n,r,i,a){var o=X(i?68:48),s=[o];o.write_shift(2,65534),o.write_shift(2,0),o.write_shift(4,842412599),o.write_shift(16,yg.utils.consts.HEADER_CLSID,`hex`),o.write_shift(4,i?2:1),o.write_shift(16,t,`hex`),o.write_shift(4,i?68:48);var c=Ky(e,n,r);if(s.push(c),i){var l=Ky(i,null,null);o.write_shift(16,a,`hex`),o.write_shift(4,68+c.length),s.push(l)}return rh(s)}function Jy(e,t){t||=X(e);for(var n=0;n<e;++n)t.write_shift(1,0);return t}function Yy(e,t){return e.read_shift(t)===1}function Xy(e,t){return t||=X(2),t.write_shift(2,+!!e),t}function Zy(e){return e.read_shift(2,`u`)}function Qy(e,t){return t||=X(2),t.write_shift(2,e),t}function $y(e,t,n){return n||=X(2),n.write_shift(1,t==`e`?+e:+!!e),n.write_shift(1,t==`e`?1:0),n}function eb(e,t,n){var r=e.read_shift(n&&n.biff>=12?2:1),i=`sbcs-cont`,a=Mm;n&&n.biff>=8&&(Mm=1200),!n||n.biff==8?e.read_shift(1)&&(i=`dbcs-cont`):n.biff==12&&(i=`wstr`),n.biff>=2&&n.biff<=5&&(i=`cpstr`);var o=r?e.read_shift(r,i):``;return Mm=a,o}function tb(e){var t=e.t||``,n=1,r=X(3+(n>1?2:0));r.write_shift(2,t.length),r.write_shift(1,(n>1?8:0)|1),n>1&&r.write_shift(2,n);var i=X(2*t.length);return i.write_shift(2*t.length,t,`utf16le`),rh([r,i])}function nb(e,t,n){var r;if(n){if(n.biff>=2&&n.biff<=5)return e.read_shift(t,`cpstr`);if(n.biff>=12)return e.read_shift(t,`dbcs-cont`)}return r=e.read_shift(1)===0?e.read_shift(t,`sbcs-cont`):e.read_shift(t,`dbcs-cont`),r}function rb(e,t,n){var r=e.read_shift(n&&n.biff==2?1:2);return r===0?(e.l++,``):nb(e,r,n)}function ib(e,t,n){if(n.biff>5)return rb(e,t,n);var r=e.read_shift(1);return r===0?(e.l++,``):e.read_shift(r,n.biff<=4||!e.lens?`cpstr`:`sbcs-cont`)}function ab(e,t,n){return n||=X(3+2*e.length),n.write_shift(2,e.length),n.write_shift(1,1),n.write_shift(31,e,`utf16le`),n}function ob(e,t){t||=X(6+e.length*2),t.write_shift(4,1+e.length);for(var n=0;n<e.length;++n)t.write_shift(2,e.charCodeAt(n));return t.write_shift(2,0),t}function sb(e){var t=X(512),n=0,r=e.Target;r.slice(0,7)==`file://`&&(r=r.slice(7));var i=r.indexOf(`#`),a=i>-1?31:23;switch(r.charAt(0)){case`#`:a=28;break;case`.`:a&=-3;break}t.write_shift(4,2),t.write_shift(4,a);var o=[8,6815827,6619237,4849780,83];for(n=0;n<o.length;++n)t.write_shift(4,o[n]);if(a==28)r=r.slice(1),ob(r,t);else if(a&2){for(o=`e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b`.split(` `),n=0;n<o.length;++n)t.write_shift(1,parseInt(o[n],16));var s=i>-1?r.slice(0,i):r;for(t.write_shift(4,2*(s.length+1)),n=0;n<s.length;++n)t.write_shift(2,s.charCodeAt(n));t.write_shift(2,0),a&8&&ob(i>-1?r.slice(i+1):``,t)}else{for(o=`03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46`.split(` `),n=0;n<o.length;++n)t.write_shift(1,parseInt(o[n],16));for(var c=0;r.slice(c*3,c*3+3)==`../`||r.slice(c*3,c*3+3)==`..\\`;)++c;for(t.write_shift(2,c),t.write_shift(4,r.length-3*c+1),n=0;n<r.length-3*c;++n)t.write_shift(1,r.charCodeAt(n+3*c)&255);for(t.write_shift(1,0),t.write_shift(2,65535),t.write_shift(2,57005),n=0;n<6;++n)t.write_shift(4,0)}return t.slice(0,t.l)}function cb(e,t,n,r){return r||=X(6),r.write_shift(2,e),r.write_shift(2,t),r.write_shift(2,n||0),r}function lb(e,t,n){var r=n.biff>8?4:2;return[e.read_shift(r),e.read_shift(r,`i`),e.read_shift(r,`i`)]}function ub(e){var t=e.read_shift(2),n=e.read_shift(2),r=e.read_shift(2),i=e.read_shift(2);return{s:{c:r,r:t},e:{c:i,r:n}}}function db(e,t){return t||=X(8),t.write_shift(2,e.s.r),t.write_shift(2,e.e.r),t.write_shift(2,e.s.c),t.write_shift(2,e.e.c),t}function fb(e,t,n){var r=1536,i=16;switch(n.bookType){case`biff8`:break;case`biff5`:r=1280,i=8;break;case`biff4`:r=4,i=6;break;case`biff3`:r=3,i=6;break;case`biff2`:r=2,i=4;break;case`xla`:break;default:throw Error(`unsupported BIFF version`)}var a=X(i);return a.write_shift(2,r),a.write_shift(2,t),i>4&&a.write_shift(2,29282),i>6&&a.write_shift(2,1997),i>8&&(a.write_shift(2,49161),a.write_shift(2,1),a.write_shift(2,1798),a.write_shift(2,0)),a}function pb(e,t){var n=!t||t.biff==8,r=X(n?112:54);for(r.write_shift(t.biff==8?2:1,7),n&&r.write_shift(1,0),r.write_shift(4,859007059),r.write_shift(4,5458548|(n?0:536870912));r.l<r.length;)r.write_shift(1,n?0:32);return r}function mb(e,t){var n=!t||t.biff>=8?2:1,r=X(8+n*e.name.length);r.write_shift(4,e.pos),r.write_shift(1,e.hs||0),r.write_shift(1,e.dt),r.write_shift(1,e.name.length),t.biff>=8&&r.write_shift(1,1),r.write_shift(n*e.name.length,e.name,t.biff<8?`sbcs`:`utf16le`);var i=r.slice(0,r.l);return i.l=r.l,i}function hb(e,t){var n=X(8);n.write_shift(4,e.Count),n.write_shift(4,e.Unique);for(var r=[],i=0;i<e.length;++i)r[i]=tb(e[i],t);var a=rh([n].concat(r));return a.parts=[n.length].concat(r.map(function(e){return e.length})),a}function gb(){var e=X(18);return e.write_shift(2,0),e.write_shift(2,0),e.write_shift(2,29280),e.write_shift(2,17600),e.write_shift(2,56),e.write_shift(2,0),e.write_shift(2,0),e.write_shift(2,1),e.write_shift(2,500),e}function _b(e){var t=X(18),n=1718;return e&&e.RTL&&(n|=64),t.write_shift(2,n),t.write_shift(4,0),t.write_shift(4,64),t.write_shift(4,0),t.write_shift(4,0),t}function vb(e,t){var n=e.name||`Arial`,r=t&&t.biff==5,i=X(r?15+n.length:16+2*n.length);return i.write_shift(2,(e.sz||12)*20),i.write_shift(4,0),i.write_shift(2,400),i.write_shift(4,0),i.write_shift(2,0),i.write_shift(1,n.length),r||i.write_shift(1,1),i.write_shift((r?1:2)*n.length,n,r?`sbcs`:`utf16le`),i}function yb(e,t,n,r){var i=X(10);return cb(e,t,r,i),i.write_shift(4,n),i}function bb(e,t,n,r,i){var a=!i||i.biff==8,o=X(8+ +a+(1+a)*n.length);return cb(e,t,r,o),o.write_shift(2,n.length),a&&o.write_shift(1,1),o.write_shift((1+a)*n.length,n,a?`utf16le`:`sbcs`),o}function xb(e,t,n,r){var i=n&&n.biff==5;r||=X(i?3+t.length:5+2*t.length),r.write_shift(2,e),r.write_shift(i?1:2,t.length),i||r.write_shift(1,1),r.write_shift((i?1:2)*t.length,t,i?`sbcs`:`utf16le`);var a=r.length>r.l?r.slice(0,r.l):r;return a.l??=a.length,a}function Sb(e,t){var n=t.biff==8||!t.biff?4:2,r=X(2*n+6);return r.write_shift(n,e.s.r),r.write_shift(n,e.e.r+1),r.write_shift(2,e.s.c),r.write_shift(2,e.e.c+1),r.write_shift(2,0),r}function Cb(e,t,n,r){var i=n&&n.biff==5;r||=X(i?16:20),r.write_shift(2,0),e.style?(r.write_shift(2,e.numFmtId||0),r.write_shift(2,65524)):(r.write_shift(2,e.numFmtId||0),r.write_shift(2,t<<4));var a=0;return e.numFmtId>0&&i&&(a|=1024),r.write_shift(4,a),r.write_shift(4,0),i||r.write_shift(4,0),r.write_shift(2,0),r}function wb(e){var t=X(8);return t.write_shift(4,0),t.write_shift(2,e[0]?e[0]+1:0),t.write_shift(2,e[1]?e[1]+1:0),t}function Tb(e,t,n,r,i,a){var o=X(8);return cb(e,t,r,o),$y(n,a,o),o}function Eb(e,t,n,r){var i=X(14);return cb(e,t,r,i),$v(n,i),i}function Db(e,t,n){if(n.biff<8)return Ob(e,t,n);for(var r=[],i=e.l+t,a=e.read_shift(n.biff>8?4:2);a--!==0;)r.push(lb(e,n.biff>8?12:6,n));if(e.l!=i)throw Error(`Bad ExternSheet: `+e.l+` != `+i);return r}function Ob(e,t,n){e[e.l+1]==3&&e[e.l]++;var r=eb(e,t,n);return r.charCodeAt(0)==3?r.slice(1):r}function kb(e){var t=X(2+e.length*8);t.write_shift(2,e.length);for(var n=0;n<e.length;++n)db(e[n],t);return t}function Ab(e){var t=X(24),n=hv(e[0]);t.write_shift(2,n.r),t.write_shift(2,n.r),t.write_shift(2,n.c),t.write_shift(2,n.c);for(var r=`d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b`.split(` `),i=0;i<16;++i)t.write_shift(1,parseInt(r[i],16));return rh([t,sb(e[1])])}function jb(e){var t=e[1].Tooltip,n=X(10+2*(t.length+1));n.write_shift(2,2048);var r=hv(e[0]);n.write_shift(2,r.r),n.write_shift(2,r.r),n.write_shift(2,r.c),n.write_shift(2,r.c);for(var i=0;i<t.length;++i)n.write_shift(2,t.charCodeAt(i));return n.write_shift(2,0),n}function Mb(e){return e||=X(4),e.write_shift(2,1),e.write_shift(2,1),e}function Nb(e,t,n){if(!n.cellStyles)return ev(e,t);var r=n&&n.biff>=12?4:2,i=e.read_shift(r),a=e.read_shift(r),o=e.read_shift(r),s=e.read_shift(r),c=e.read_shift(2);r==2&&(e.l+=2);var l={s:i,e:a,w:o,ixfe:s,flags:c};return(n.biff>=5||!n.biff)&&(l.level=c>>8&7),l}function Pb(e,t){var n=X(12);n.write_shift(2,t),n.write_shift(2,t),n.write_shift(2,e.width*256),n.write_shift(2,0);var r=0;return e.hidden&&(r|=1),n.write_shift(1,r),r=e.level||0,n.write_shift(1,r),n.write_shift(2,0),n}function Fb(e){for(var t=X(2*e),n=0;n<e;++n)t.write_shift(2,n+1);return t}function Ib(e,t,n){var r=X(15);return yE(r,e,t),r.write_shift(8,n,`f`),r}function Lb(e,t,n){var r=X(9);return yE(r,e,t),r.write_shift(2,n),r}var Rb=(function(){var e={1:437,2:850,3:1252,4:1e4,100:852,101:866,102:865,103:861,104:895,105:620,106:737,107:857,120:950,121:949,122:936,123:932,124:874,125:1255,126:1256,150:10007,151:10029,152:10006,200:1250,201:1251,202:1254,203:1253,0:20127,8:865,9:437,10:850,11:437,13:437,14:850,15:437,16:850,17:437,18:850,19:932,20:850,21:437,22:850,23:865,24:437,25:437,26:850,27:437,28:863,29:850,31:852,34:852,35:852,36:860,37:850,38:866,55:850,64:852,77:936,78:949,79:950,80:874,87:1252,88:1252,89:1252,108:863,134:737,135:852,136:857,204:1257,255:16969},t=Tg({1:437,2:850,3:1252,4:1e4,100:852,101:866,102:865,103:861,104:895,105:620,106:737,107:857,120:950,121:949,122:936,123:932,124:874,125:1255,126:1256,150:10007,151:10029,152:10006,200:1250,201:1251,202:1254,203:1253,0:20127});function n(t,n){var r=[],i=Zm(1);switch(n.type){case`base64`:i=$m(Jm(t));break;case`binary`:i=$m(t);break;case`buffer`:case`array`:i=t;break}$_(i,0);var a=i.read_shift(1),o=!!(a&136),s=!1,c=!1;switch(a){case 2:break;case 3:break;case 48:s=!0,o=!0;break;case 49:s=!0,o=!0;break;case 131:break;case 139:break;case 140:c=!0;break;case 245:break;default:throw Error(`DBF Unsupported Version: `+a.toString(16))}var l=0,u=521;a==2&&(l=i.read_shift(2)),i.l+=3,a!=2&&(l=i.read_shift(4)),l>1048576&&(l=1e6),a!=2&&(u=i.read_shift(2));var d=i.read_shift(2),f=n.codepage||1252;a!=2&&(i.l+=16,i.read_shift(1),i[i.l]!==0&&(f=e[i[i.l]]),i.l+=1,i.l+=2),c&&(i.l+=36);for(var p=[],m={},h=Math.min(i.length,a==2?521:u-10-(s?264:0)),g=c?32:11;i.l<h&&i[i.l]!=13;)switch(m={},m.name=Um.utils.decode(f,i.slice(i.l,i.l+g)).replace(/[\u0000\r\n].*$/g,``),i.l+=g,m.type=String.fromCharCode(i.read_shift(1)),a!=2&&!c&&(m.offset=i.read_shift(4)),m.len=i.read_shift(1),a==2&&(m.offset=i.read_shift(2)),m.dec=i.read_shift(1),m.name.length&&p.push(m),a!=2&&(i.l+=c?13:14),m.type){case`B`:(!s||m.len!=8)&&n.WTF&&console.log(`Skipping `+m.name+`:`+m.type);break;case`G`:case`P`:n.WTF&&console.log(`Skipping `+m.name+`:`+m.type);break;case`+`:case`0`:case`@`:case`C`:case`D`:case`F`:case`I`:case`L`:case`M`:case`N`:case`O`:case`T`:case`Y`:break;default:throw Error(`Unknown Field Type: `+m.type)}if(i[i.l]!==13&&(i.l=u-1),i.read_shift(1)!==13)throw Error(`DBF Terminator not found `+i.l+` `+i[i.l]);i.l=u;var _=0,v=0;for(r[0]=[],v=0;v!=p.length;++v)r[0][v]=p[v].name;for(;l-- >0;){if(i[i.l]===42){i.l+=d;continue}for(++i.l,r[++_]=[],v=0,v=0;v!=p.length;++v){var y=i.slice(i.l,i.l+p[v].len);i.l+=p[v].len,$_(y,0);var b=Um.utils.decode(f,y);switch(p[v].type){case`C`:b.trim().length&&(r[_][v]=b.replace(/\s+$/,``));break;case`D`:b.length===8?r[_][v]=new Date(+b.slice(0,4),b.slice(4,6)-1,+b.slice(6,8)):r[_][v]=b;break;case`F`:r[_][v]=parseFloat(b.trim());break;case`+`:case`I`:r[_][v]=c?y.read_shift(-4,`i`)^2147483648:y.read_shift(4,`i`);break;case`L`:switch(b.trim().toUpperCase()){case`Y`:case`T`:r[_][v]=!0;break;case`N`:case`F`:r[_][v]=!1;break;case``:case`?`:break;default:throw Error(`DBF Unrecognized L:|`+b+`|`)}break;case`M`:if(!o)throw Error(`DBF Unexpected MEMO for type `+a.toString(16));r[_][v]=`##MEMO##`+(c?parseInt(b.trim(),10):y.read_shift(4));break;case`N`:b=b.replace(/\u0000/g,``).trim(),b&&b!=`.`&&(r[_][v]=+b||0);break;case`@`:r[_][v]=new Date(y.read_shift(-8,`f`)-621356832e5);break;case`T`:r[_][v]=new Date((y.read_shift(4)-2440588)*864e5+y.read_shift(4));break;case`Y`:r[_][v]=y.read_shift(4,`i`)/1e4+y.read_shift(4,`i`)/1e4*2**32;break;case`O`:r[_][v]=-y.read_shift(-8,`f`);break;case`B`:if(s&&p[v].len==8){r[_][v]=y.read_shift(8,`f`);break}case`G`:case`P`:y.l+=p[v].len;break;case`0`:if(p[v].name===`_NullFlags`)break;default:throw Error(`DBF Unsupported data type `+p[v].type)}}}if(a!=2&&i.l<i.length&&i[i.l++]!=26)throw Error(`DBF EOF Marker missing `+(i.l-1)+` of `+i.length+` `+i[i.l-1].toString(16));return n&&n.sheetRows&&(r=r.slice(0,n.sheetRows)),n.DBF=p,r}function r(e,t){var r=t||{};r.dateNF||=`yyyymmdd`;var i=wv(n(e,r),r);return i[`!cols`]=r.DBF.map(function(e){return{wch:e.len,DBF:e}}),delete r.DBF,i}function i(e,t){try{return Sv(r(e,t),t)}catch(e){if(t&&t.WTF)throw e}return{SheetNames:[],Sheets:{}}}var a={B:8,C:250,L:1,D:8,"?":0,"":0};function o(e,n){var r=n||{};if(+r.codepage>=0&&Rm(+r.codepage),r.type==`string`)throw Error(`Cannot write DBF to JS string`);var i=tv(),o=MD(e,{header:1,raw:!0,cellDates:!0}),s=o[0],c=o.slice(1),l=e[`!cols`]||[],u=0,d=0,f=0,p=1;for(u=0;u<s.length;++u){if(((l[u]||{}).DBF||{}).name){s[u]=l[u].DBF.name,++f;continue}if(s[u]!=null){if(++f,typeof s[u]==`number`&&(s[u]=s[u].toString(10)),typeof s[u]!=`string`)throw Error(`DBF Invalid column name `+s[u]+` |`+typeof s[u]+`|`);if(s.indexOf(s[u])!==u){for(d=0;d<1024;++d)if(s.indexOf(s[u]+`_`+d)==-1){s[u]+=`_`+d;break}}}}var m=yv(e[`!ref`]),h=[],g=[],_=[];for(u=0;u<=m.e.c-m.s.c;++u){var v=``,y=``,b=0,x=[];for(d=0;d<c.length;++d)c[d][u]!=null&&x.push(c[d][u]);if(x.length==0||s[u]==null){h[u]=`?`;continue}for(d=0;d<x.length;++d){switch(typeof x[d]){case`number`:y=`B`;break;case`string`:y=`C`;break;case`boolean`:y=`L`;break;case`object`:y=x[d]instanceof Date?`D`:`C`;break;default:y=`C`}b=Math.max(b,String(x[d]).length),v=v&&v!=y?`C`:y}b>250&&(b=250),y=((l[u]||{}).DBF||{}).type,y==`C`&&l[u].DBF.len>b&&(b=l[u].DBF.len),v==`B`&&y==`N`&&(v=`N`,_[u]=l[u].DBF.dec,b=l[u].DBF.len),g[u]=v==`C`||y==`N`?b:a[v]||0,p+=g[u],h[u]=v}var S=i.next(32);for(S.write_shift(4,318902576),S.write_shift(4,c.length),S.write_shift(2,296+32*f),S.write_shift(2,p),u=0;u<4;++u)S.write_shift(4,0);for(S.write_shift(4,0|(+t[Nm]||3)<<8),u=0,d=0;u<s.length;++u)if(s[u]!=null){var C=i.next(32),w=(s[u].slice(-10)+`\0\0\0\0\0\0\0\0\0\0\0`).slice(0,11);C.write_shift(1,w,`sbcs`),C.write_shift(1,h[u]==`?`?`C`:h[u],`sbcs`),C.write_shift(4,d),C.write_shift(1,g[u]||a[h[u]]||0),C.write_shift(1,_[u]||0),C.write_shift(1,2),C.write_shift(4,0),C.write_shift(1,0),C.write_shift(4,0),C.write_shift(4,0),d+=g[u]||a[h[u]]||0}var T=i.next(264);for(T.write_shift(4,13),u=0;u<65;++u)T.write_shift(4,0);for(u=0;u<c.length;++u){var E=i.next(p);for(E.write_shift(1,0),d=0;d<s.length;++d)if(s[d]!=null)switch(h[d]){case`L`:E.write_shift(1,c[u][d]==null?63:c[u][d]?84:70);break;case`B`:E.write_shift(8,c[u][d]||0,`f`);break;case`N`:var D=`0`;for(typeof c[u][d]==`number`&&(D=c[u][d].toFixed(_[d]||0)),f=0;f<g[d]-D.length;++f)E.write_shift(1,32);E.write_shift(1,D,`sbcs`);break;case`D`:c[u][d]?(E.write_shift(4,(`0000`+c[u][d].getFullYear()).slice(-4),`sbcs`),E.write_shift(2,(`00`+(c[u][d].getMonth()+1)).slice(-2),`sbcs`),E.write_shift(2,(`00`+c[u][d].getDate()).slice(-2),`sbcs`)):E.write_shift(8,`00000000`,`sbcs`);break;case`C`:var O=String(c[u][d]==null?``:c[u][d]).slice(0,g[d]);for(E.write_shift(1,O,`sbcs`),f=0;f<g[d]-O.length;++f)E.write_shift(1,32);break}}return i.next(1).write_shift(1,26),i.end()}return{to_workbook:i,to_sheet:r,from_sheet:o}})(),zb=(function(){var e={AA:`À`,BA:`Á`,CA:`Â`,DA:195,HA:`Ä`,JA:197,AE:`È`,BE:`É`,CE:`Ê`,HE:`Ë`,AI:`Ì`,BI:`Í`,CI:`Î`,HI:`Ï`,AO:`Ò`,BO:`Ó`,CO:`Ô`,DO:213,HO:`Ö`,AU:`Ù`,BU:`Ú`,CU:`Û`,HU:`Ü`,Aa:`à`,Ba:`á`,Ca:`â`,Da:227,Ha:`ä`,Ja:229,Ae:`è`,Be:`é`,Ce:`ê`,He:`ë`,Ai:`ì`,Bi:`í`,Ci:`î`,Hi:`ï`,Ao:`ò`,Bo:`ó`,Co:`ô`,Do:245,Ho:`ö`,Au:`ù`,Bu:`ú`,Cu:`û`,Hu:`ü`,KC:`Ç`,Kc:`ç`,q:`æ`,z:`œ`,a:`Æ`,j:`Œ`,DN:209,Dn:241,Hy:255,S:169,c:170,R:174,"B ":180,0:176,1:177,2:178,3:179,5:181,6:182,7:183,Q:185,k:186,b:208,i:216,l:222,s:240,y:248,"!":161,'"':162,"#":163,"(":164,"%":165,"'":167,"H ":168,"+":171,";":187,"<":188,"=":189,">":190,"?":191,"{":223},t=RegExp(`\x1BN(`+Cg(e).join(`|`).replace(/\|\|\|/,`|\\||`).replace(/([?()+])/g,`\\$1`)+`|\\|)`,`gm`),n=function(t,n){var r=e[n];return typeof r==`number`?Hm(r):r},r=function(e,t,n){var r=t.charCodeAt(0)-32<<4|n.charCodeAt(0)-48;return r==59?e:Hm(r)};e[`|`]=254;function i(e,t){switch(t.type){case`base64`:return a(Jm(e),t);case`binary`:return a(e,t);case`buffer`:return a(Ym&&Buffer.isBuffer(e)?e.toString(`binary`):th(e),t);case`array`:return a(Rg(e),t)}throw Error(`Unrecognized type `+t.type)}function a(e,i){var a=e.split(/[\n\r]+/),o=-1,s=-1,c=0,l=0,u=[],d=[],f=null,p={},m=[],h=[],g=[],_=0,v;for(+i.codepage>=0&&Rm(+i.codepage);c!==a.length;++c){_=0;var y=a[c].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g,r).replace(t,n),b=y.replace(/;;/g,`\0`).split(`;`).map(function(e){return e.replace(/\u0000/g,`;`)}),x=b[0],S;if(y.length>0)switch(x){case`ID`:break;case`E`:break;case`B`:break;case`O`:break;case`W`:break;case`P`:b[1].charAt(0)==`P`&&d.push(y.slice(3).replace(/;;/g,`;`));break;case`C`:var C=!1,w=!1,T=!1,E=!1,D=-1,O=-1;for(l=1;l<b.length;++l)switch(b[l].charAt(0)){case`A`:break;case`X`:s=parseInt(b[l].slice(1))-1,w=!0;break;case`Y`:for(o=parseInt(b[l].slice(1))-1,w||(s=0),v=u.length;v<=o;++v)u[v]=[];break;case`K`:S=b[l].slice(1),S.charAt(0)===`"`?S=S.slice(1,S.length-1):S===`TRUE`?S=!0:S===`FALSE`?S=!1:isNaN(Vg(S))?isNaN(Ug(S).getDate())||(S=Lg(S)):(S=Vg(S),f!==null&&og(f)&&(S=Ng(S))),Um!==void 0&&typeof S==`string`&&(i||{}).type!=`string`&&(i||{}).codepage&&(S=Um.utils.decode(i.codepage,S)),C=!0;break;case`E`:E=!0;var k=aS(b[l].slice(1),{r:o,c:s});u[o][s]=[u[o][s],k];break;case`S`:T=!0,u[o][s]=[u[o][s],`S5S`];break;case`G`:break;case`R`:D=parseInt(b[l].slice(1))-1;break;case`C`:O=parseInt(b[l].slice(1))-1;break;default:if(i&&i.WTF)throw Error(`SYLK bad record `+y)}if(C&&(u[o][s]&&u[o][s].length==2?u[o][s][0]=S:u[o][s]=S,f=null),T){if(E)throw Error(`SYLK shared formula cannot have own formula`);var A=D>-1&&u[D][O];if(!A||!A[1])throw Error(`SYLK shared formula cannot find base`);u[o][s][1]=cS(A[1],{r:o-D,c:s-O})}break;case`F`:var ee=0;for(l=1;l<b.length;++l)switch(b[l].charAt(0)){case`X`:s=parseInt(b[l].slice(1))-1,++ee;break;case`Y`:for(o=parseInt(b[l].slice(1))-1,v=u.length;v<=o;++v)u[v]=[];break;case`M`:_=parseInt(b[l].slice(1))/20;break;case`F`:break;case`G`:break;case`P`:f=d[parseInt(b[l].slice(1))];break;case`S`:break;case`D`:break;case`N`:break;case`W`:for(g=b[l].slice(1).split(` `),v=parseInt(g[0],10);v<=parseInt(g[1],10);++v)_=parseInt(g[2],10),h[v-1]=_===0?{hidden:!0}:{wch:_},ix(h[v-1]);break;case`C`:s=parseInt(b[l].slice(1))-1,h[s]||(h[s]={});break;case`R`:o=parseInt(b[l].slice(1))-1,m[o]||(m[o]={}),_>0?(m[o].hpt=_,m[o].hpx=sx(_)):_===0&&(m[o].hidden=!0);break;default:if(i&&i.WTF)throw Error(`SYLK bad record `+y)}ee<1&&(f=null);break;default:if(i&&i.WTF)throw Error(`SYLK bad record `+y)}}return m.length>0&&(p[`!rows`]=m),h.length>0&&(p[`!cols`]=h),i&&i.sheetRows&&(u=u.slice(0,i.sheetRows)),[u,p]}function o(e,t){var n=i(e,t),r=n[0],a=n[1],o=wv(r,t);return Cg(a).forEach(function(e){o[e]=a[e]}),o}function s(e,t){return Sv(o(e,t),t)}function c(e,t,n,r){var i=`C;Y`+(n+1)+`;X`+(r+1)+`;K`;switch(e.t){case`n`:i+=e.v||0,e.f&&!e.F&&(i+=`;E`+sS(e.f,{r:n,c:r}));break;case`b`:i+=e.v?`TRUE`:`FALSE`;break;case`e`:i+=e.w||e.v;break;case`d`:i+=`"`+(e.w||e.v)+`"`;break;case`s`:i+=`"`+e.v.replace(/"/g,``).replace(/;/g,`;;`)+`"`;break}return i}function l(e,t){t.forEach(function(t,n){var r=`F;W`+(n+1)+` `+(n+1)+` `;t.hidden?r+=`0`:(typeof t.width==`number`&&!t.wpx&&(t.wpx=tx(t.width)),typeof t.wpx==`number`&&!t.wch&&(t.wch=nx(t.wpx)),typeof t.wch==`number`&&(r+=Math.round(t.wch))),r.charAt(r.length-1)!=` `&&e.push(r)})}function u(e,t){t.forEach(function(t,n){var r=`F;`;t.hidden?r+=`M0;`:t.hpt?r+=`M`+20*t.hpt+`;`:t.hpx&&(r+=`M`+20*ox(t.hpx)+`;`),r.length>2&&e.push(r+`R`+(n+1))})}function d(e,t){var n=[`ID;PWXL;N;E`],r=[],i=yv(e[`!ref`]),a,o=Array.isArray(e),s=`\r
`;n.push(`P;PGeneral`),n.push(`F;P0;DG0G8;M255`),e[`!cols`]&&l(n,e[`!cols`]),e[`!rows`]&&u(n,e[`!rows`]),n.push(`B;Y`+(i.e.r-i.s.r+1)+`;X`+(i.e.c-i.s.c+1)+`;D`+[i.s.c,i.s.r,i.e.c,i.e.r].join(` `));for(var d=i.s.r;d<=i.e.r;++d)for(var f=i.s.c;f<=i.e.c;++f){var p=gv({r:d,c:f});a=o?(e[d]||[])[f]:e[p],!(!a||a.v==null&&(!a.f||a.F))&&r.push(c(a,e,d,f,t))}return n.join(s)+s+r.join(s)+s+`E`+s}return{to_workbook:s,to_sheet:o,from_sheet:d}})(),Bb=(function(){function e(e,n){switch(n.type){case`base64`:return t(Jm(e),n);case`binary`:return t(e,n);case`buffer`:return t(Ym&&Buffer.isBuffer(e)?e.toString(`binary`):th(e),n);case`array`:return t(Rg(e),n)}throw Error(`Unrecognized type `+n.type)}function t(e,t){for(var n=e.split(`
`),r=-1,i=-1,a=0,o=[];a!==n.length;++a){if(n[a].trim()===`BOT`){o[++r]=[],i=0;continue}if(!(r<0)){var s=n[a].trim().split(`,`),c=s[0],l=s[1];++a;for(var u=n[a]||``;(u.match(/["]/g)||[]).length&1&&a<n.length-1;)u+=`
`+n[++a];switch(u=u.trim(),+c){case-1:if(u===`BOT`){o[++r]=[],i=0;continue}else if(u!==`EOD`)throw Error(`Unrecognized DIF special command `+u);break;case 0:u===`TRUE`?o[r][i]=!0:u===`FALSE`?o[r][i]=!1:isNaN(Vg(l))?isNaN(Ug(l).getDate())?o[r][i]=l:o[r][i]=Lg(l):o[r][i]=Vg(l),++i;break;case 1:u=u.slice(1,u.length-1),u=u.replace(/""/g,`"`),Gm&&u&&u.match(/^=".*"$/)&&(u=u.slice(2,-1)),o[r][i++]=u===``?null:u;break}if(u===`EOD`)break}}return t&&t.sheetRows&&(o=o.slice(0,t.sheetRows)),o}function n(t,n){return wv(e(t,n),n)}function r(e,t){return Sv(n(e,t),t)}return{to_workbook:r,to_sheet:n,from_sheet:(function(){var e=function(e,t,n,r,i){e.push(t),e.push(n+`,`+r),e.push(`"`+i.replace(/"/g,`""`)+`"`)},t=function(e,t,n,r){e.push(t+`,`+n),e.push(t==1?`"`+r.replace(/"/g,`""`)+`"`:r)};return function(n){var r=[],i=yv(n[`!ref`]),a,o=Array.isArray(n);e(r,`TABLE`,0,1,`sheetjs`),e(r,`VECTORS`,0,i.e.r-i.s.r+1,``),e(r,`TUPLES`,0,i.e.c-i.s.c+1,``),e(r,`DATA`,0,0,``);for(var s=i.s.r;s<=i.e.r;++s){t(r,-1,0,`BOT`);for(var c=i.s.c;c<=i.e.c;++c){var l=gv({r:s,c});if(a=o?(n[s]||[])[c]:n[l],!a){t(r,1,0,``);continue}switch(a.t){case`n`:var u=Gm?a.w:a.v;!u&&a.v!=null&&(u=a.v),u==null?Gm&&a.f&&!a.F?t(r,1,0,`=`+a.f):t(r,1,0,``):t(r,0,u,`V`);break;case`b`:t(r,0,a.v?1:0,a.v?`TRUE`:`FALSE`);break;case`s`:t(r,1,0,!Gm||isNaN(a.v)?a.v:`="`+a.v+`"`);break;case`d`:a.w||=dg(a.z||yh[14],kg(Lg(a.v))),Gm?t(r,0,a.w,`V`):t(r,1,0,a.w);break;default:t(r,1,0,``)}}}return t(r,-1,0,`EOD`),r.join(`\r
`)}})()}})(),Vb=(function(){function e(e){return e.replace(/\\b/g,`\\`).replace(/\\c/g,`:`).replace(/\\n/g,`
`)}function t(e){return e.replace(/\\/g,`\\b`).replace(/:/g,`\\c`).replace(/\n/g,`\\n`)}function n(t,n){for(var r=t.split(`
`),i=-1,a=-1,o=0,s=[];o!==r.length;++o){var c=r[o].trim().split(`:`);if(c[0]===`cell`){var l=hv(c[1]);if(s.length<=l.r)for(i=s.length;i<=l.r;++i)s[i]||(s[i]=[]);switch(i=l.r,a=l.c,c[2]){case`t`:s[i][a]=e(c[3]);break;case`v`:s[i][a]=+c[3];break;case`vtf`:var u=c[c.length-1];case`vtc`:switch(c[3]){case`nl`:s[i][a]=!!+c[4];break;default:s[i][a]=+c[4];break}c[2]==`vtf`&&(s[i][a]=[s[i][a],u])}}}return n&&n.sheetRows&&(s=s.slice(0,n.sheetRows)),s}function r(e,t){return wv(n(e,t),t)}function i(e,t){return Sv(r(e,t),t)}var a=[`socialcalc:version:1.5`,`MIME-Version: 1.0`,`Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave`].join(`
`),o=[`--SocialCalcSpreadsheetControlSave`,`Content-type: text/plain; charset=UTF-8`].join(`
`)+`
`,s=[`# SocialCalc Spreadsheet Control Save`,`part:sheet`].join(`
`),c=`--SocialCalcSpreadsheetControlSave--`;function l(e){if(!e||!e[`!ref`])return``;for(var n=[],r=[],i,a=``,o=_v(e[`!ref`]),s=Array.isArray(e),c=o.s.r;c<=o.e.r;++c)for(var l=o.s.c;l<=o.e.c;++l)if(a=gv({r:c,c:l}),i=s?(e[c]||[])[l]:e[a],!(!i||i.v==null||i.t===`z`)){switch(r=[`cell`,a,`t`],i.t){case`s`:case`str`:r.push(t(i.v));break;case`n`:i.f?(r[2]=`vtf`,r[3]=`n`,r[4]=i.v,r[5]=t(i.f)):(r[2]=`v`,r[3]=i.v);break;case`b`:r[2]=`vt`+(i.f?`f`:`c`),r[3]=`nl`,r[4]=i.v?`1`:`0`,r[5]=t(i.f||(i.v?`TRUE`:`FALSE`));break;case`d`:var u=kg(Lg(i.v));r[2]=`vtc`,r[3]=`nd`,r[4]=``+u,r[5]=i.w||dg(i.z||yh[14],u);break;case`e`:continue}n.push(r.join(`:`))}return n.push(`sheet:c:`+(o.e.c-o.s.c+1)+`:r:`+(o.e.r-o.s.r+1)+`:tvf:1`),n.push(`valueformat:1:text-wiki`),n.join(`
`)}function u(e){return[a,o,s,o,l(e),c].join(`
`)}return{to_workbook:i,to_sheet:r,from_sheet:u}})(),Hb=(function(){function e(e,t,n,r,i){i.raw?t[n][r]=e:e===``||(e===`TRUE`?t[n][r]=!0:e===`FALSE`?t[n][r]=!1:isNaN(Vg(e))?isNaN(Ug(e).getDate())?t[n][r]=e:t[n][r]=Lg(e):t[n][r]=Vg(e))}function t(t,n){var r=n||{},i=[];if(!t||t.length===0)return i;for(var a=t.split(/[\r\n]/),o=a.length-1;o>=0&&a[o].length===0;)--o;for(var s=10,c=0,l=0;l<=o;++l)c=a[l].indexOf(` `),c==-1?c=a[l].length:c++,s=Math.max(s,c);for(l=0;l<=o;++l){i[l]=[];var u=0;for(e(a[l].slice(0,s).trim(),i,l,u,r),u=1;u<=(a[l].length-s)/10+1;++u)e(a[l].slice(s+(u-1)*10,s+u*10).trim(),i,l,u,r)}return r.sheetRows&&(i=i.slice(0,r.sheetRows)),i}var n={44:`,`,9:`	`,59:`;`,124:`|`},r={44:3,9:2,59:1,124:0};function i(e){for(var t={},i=!1,a=0,o=0;a<e.length;++a)(o=e.charCodeAt(a))==34?i=!i:!i&&o in n&&(t[o]=(t[o]||0)+1);for(a in o=[],t)Object.prototype.hasOwnProperty.call(t,a)&&o.push([t[a],a]);if(!o.length)for(a in t=r,t)Object.prototype.hasOwnProperty.call(t,a)&&o.push([t[a],a]);return o.sort(function(e,t){return e[0]-t[0]||r[e[1]]-r[t[1]]}),n[o.pop()[1]]||44}function a(e,t){var n=t||{},r=``;Wm!=null&&n.dense==null&&(n.dense=Wm);var a=n.dense?[]:{},o={s:{c:0,r:0},e:{c:0,r:0}};e.slice(0,4)==`sep=`?e.charCodeAt(5)==13&&e.charCodeAt(6)==10?(r=e.charAt(4),e=e.slice(7)):e.charCodeAt(5)==13||e.charCodeAt(5)==10?(r=e.charAt(4),e=e.slice(6)):r=i(e.slice(0,1024)):r=n&&n.FS?n.FS:i(e.slice(0,1024));var s=0,c=0,l=0,u=0,d=0,f=r.charCodeAt(0),p=!1,m=0,h=e.charCodeAt(0);e=e.replace(/\r\n/gm,`
`);var g=n.dateNF==null?null:gg(n.dateNF);function _(){var t=e.slice(u,d),r={};if(t.charAt(0)==`"`&&t.charAt(t.length-1)==`"`&&(t=t.slice(1,-1).replace(/""/g,`"`)),t.length===0)r.t=`z`;else if(n.raw)r.t=`s`,r.v=t;else if(t.trim().length===0)r.t=`s`,r.v=t;else if(t.charCodeAt(0)==61)t.charCodeAt(1)==34&&t.charCodeAt(t.length-1)==34?(r.t=`s`,r.v=t.slice(2,-1).replace(/""/g,`"`)):lS(t)?(r.t=`n`,r.f=t.slice(1)):(r.t=`s`,r.v=t);else if(t==`TRUE`)r.t=`b`,r.v=!0;else if(t==`FALSE`)r.t=`b`,r.v=!1;else if(!isNaN(l=Vg(t)))r.t=`n`,n.cellText!==!1&&(r.w=t),r.v=l;else if(!isNaN(Ug(t).getDate())||g&&t.match(g)){r.z=n.dateNF||yh[14];var i=0;g&&t.match(g)&&(t=_g(t,n.dateNF,t.match(g)||[]),i=1),n.cellDates?(r.t=`d`,r.v=Lg(t,i)):(r.t=`n`,r.v=kg(Lg(t,i))),n.cellText!==!1&&(r.w=dg(r.z,r.v instanceof Date?kg(r.v):r.v)),n.cellNF||delete r.z}else r.t=`s`,r.v=t;if(r.t==`z`||(n.dense?(a[s]||(a[s]=[]),a[s][c]=r):a[gv({c,r:s})]=r),u=d+1,h=e.charCodeAt(u),o.e.c<c&&(o.e.c=c),o.e.r<s&&(o.e.r=s),m==f)++c;else if(c=0,++s,n.sheetRows&&n.sheetRows<=s)return!0}outer:for(;d<e.length;++d)switch(m=e.charCodeAt(d)){case 34:h===34&&(p=!p);break;case f:case 10:case 13:if(!p&&_())break outer;break;default:break}return d-u>0&&_(),a[`!ref`]=vv(o),a}function o(e,n){return!(n&&n.PRN)||n.FS||e.slice(0,4)==`sep=`||e.indexOf(`	`)>=0||e.indexOf(`,`)>=0||e.indexOf(`;`)>=0?a(e,n):wv(t(e,n),n)}function s(e,t){var n=``,r=t.type==`string`?[0,0,0,0]:bD(e,t);switch(t.type){case`base64`:n=Jm(e);break;case`binary`:n=e;break;case`buffer`:n=t.codepage==65001?e.toString(`utf8`):t.codepage&&Um!==void 0?Um.utils.decode(t.codepage,e):Ym&&Buffer.isBuffer(e)?e.toString(`binary`):th(e);break;case`array`:n=Rg(e);break;case`string`:n=e;break;default:throw Error(`Unrecognized type `+t.type)}return r[0]==239&&r[1]==187&&r[2]==191?n=o_(n.slice(3)):t.type!=`string`&&t.type!=`buffer`&&t.codepage==65001?n=o_(n):t.type==`binary`&&Um!==void 0&&t.codepage&&(n=Um.utils.decode(t.codepage,Um.utils.encode(28591,n))),n.slice(0,19)==`socialcalc:version:`?Vb.to_sheet(t.type==`string`?n:o_(n),t):o(n,t)}function c(e,t){return Sv(s(e,t),t)}function l(e){for(var t=[],n=yv(e[`!ref`]),r,i=Array.isArray(e),a=n.s.r;a<=n.e.r;++a){for(var o=[],s=n.s.c;s<=n.e.c;++s){var c=gv({r:a,c:s});if(r=i?(e[a]||[])[s]:e[c],!r||r.v==null){o.push(`          `);continue}for(var l=(r.w||(xv(r),r.w)||``).slice(0,10);l.length<10;)l+=` `;o.push(l+(s===0?` `:``))}t.push(o.join(``))}return t.join(`
`)}return{to_workbook:c,to_sheet:s,from_sheet:l}})(),Ub=(function(){function e(e,t,n){if(e){$_(e,e.l||0);for(var r=n.Enum||j;e.l<e.length;){var i=e.read_shift(2),a=r[i]||r[65535],o=e.read_shift(2),s=e.l+o,c=a.f&&a.f(e,o,n);if(e.l=s,t(c,a,i))return}}}function t(e,t){switch(t.type){case`base64`:return n($m(Jm(e)),t);case`binary`:return n($m(e),t);case`buffer`:case`array`:return n(e,t)}throw`Unsupported type `+t.type}function n(t,n){if(!t)return t;var r=n||{};Wm!=null&&r.dense==null&&(r.dense=Wm);var i=r.dense?[]:{},a=`Sheet1`,o=``,s=0,c={},l=[],u=[],d={s:{r:0,c:0},e:{r:0,c:0}},f=r.sheetRows||0;if(t[2]==0&&(t[3]==8||t[3]==9)&&t.length>=16&&t[14]==5&&t[15]===108)throw Error(`Unsupported Works 3 for Mac file`);if(t[2]==2)r.Enum=j,e(t,function(e,t,n){switch(n){case 0:r.vers=e,e>=4096&&(r.qpro=!0);break;case 6:d=e;break;case 204:e&&(o=e);break;case 222:o=e;break;case 15:case 51:r.qpro||(e[1].v=e[1].v.slice(1));case 13:case 14:case 16:n==14&&(e[2]&112)==112&&(e[2]&15)>1&&(e[2]&15)<15&&(e[1].z=r.dateNF||yh[14],r.cellDates&&(e[1].t=`d`,e[1].v=Ng(e[1].v))),r.qpro&&e[3]>s&&(i[`!ref`]=vv(d),c[a]=i,l.push(a),i=r.dense?[]:{},d={s:{r:0,c:0},e:{r:0,c:0}},s=e[3],a=o||`Sheet`+(s+1),o=``);var u=r.dense?(i[e[0].r]||[])[e[0].c]:i[gv(e[0])];if(u){u.t=e[1].t,u.v=e[1].v,e[1].z!=null&&(u.z=e[1].z),e[1].f!=null&&(u.f=e[1].f);break}r.dense?(i[e[0].r]||(i[e[0].r]=[]),i[e[0].r][e[0].c]=e[1]):i[gv(e[0])]=e[1];break;default:}},r);else if(t[2]==26||t[2]==14)r.Enum=M,t[2]==14&&(r.qpro=!0,t.l=0),e(t,function(e,t,n){switch(n){case 204:a=e;break;case 22:e[1].v=e[1].v.slice(1);case 23:case 24:case 25:case 37:case 39:case 40:if(e[3]>s&&(i[`!ref`]=vv(d),c[a]=i,l.push(a),i=r.dense?[]:{},d={s:{r:0,c:0},e:{r:0,c:0}},s=e[3],a=`Sheet`+(s+1)),f>0&&e[0].r>=f)break;r.dense?(i[e[0].r]||(i[e[0].r]=[]),i[e[0].r][e[0].c]=e[1]):i[gv(e[0])]=e[1],d.e.c<e[0].c&&(d.e.c=e[0].c),d.e.r<e[0].r&&(d.e.r=e[0].r);break;case 27:e[14e3]&&(u[e[14e3][0]]=e[14e3][1]);break;case 1537:u[e[0]]=e[1],e[0]==s&&(a=e[1]);break;default:break}},r);else throw Error(`Unrecognized LOTUS BOF `+t[2]);if(i[`!ref`]=vv(d),c[o||a]=i,l.push(o||a),!u.length)return{SheetNames:l,Sheets:c};for(var p={},m=[],h=0;h<u.length;++h)c[l[h]]?(m.push(u[h]||l[h]),p[u[h]]=c[u[h]]||c[l[h]]):(m.push(u[h]),p[u[h]]={"!ref":`A1`});return{SheetNames:m,Sheets:p}}function r(e,t){var n=t||{};if(+n.codepage>=0&&Rm(+n.codepage),n.type==`string`)throw Error(`Cannot write WK1 to JS string`);var r=tv(),i=yv(e[`!ref`]),o=Array.isArray(e),s=[];Q(r,0,a(1030)),Q(r,6,c(i));for(var l=Math.min(i.e.r,8191),u=i.s.r;u<=l;++u)for(var f=sv(u),m=i.s.c;m<=i.e.c;++m){u===i.s.r&&(s[m]=dv(m));var g=s[m]+f,_=o?(e[u]||[])[m]:e[g];if(!(!_||_.t==`z`))if(_.t==`n`)(_.v|0)==_.v&&_.v>=-32768&&_.v<=32767?Q(r,13,p(u,m,_.v)):Q(r,14,h(u,m,_.v));else{var v=xv(_);Q(r,15,d(u,m,v.slice(0,239)))}}return Q(r,1),r.end()}function i(e,t){var n=t||{};if(+n.codepage>=0&&Rm(+n.codepage),n.type==`string`)throw Error(`Cannot write WK3 to JS string`);var r=tv();Q(r,0,o(e));for(var i=0,a=0;i<e.SheetNames.length;++i)(e.Sheets[e.SheetNames[i]]||{})[`!ref`]&&Q(r,27,ie(e.SheetNames[i],a++));var s=0;for(i=0;i<e.SheetNames.length;++i){var c=e.Sheets[e.SheetNames[i]];if(!(!c||!c[`!ref`])){for(var l=yv(c[`!ref`]),u=Array.isArray(c),d=[],f=Math.min(l.e.r,8191),p=l.s.r;p<=f;++p)for(var m=sv(p),h=l.s.c;h<=l.e.c;++h){p===l.s.r&&(d[h]=dv(h));var g=d[h]+m,_=u?(c[p]||[])[h]:c[g];if(!(!_||_.t==`z`))if(_.t==`n`)Q(r,23,E(p,h,s,_.v));else{var v=xv(_);Q(r,22,C(p,h,s,v.slice(0,239)))}}++s}}return Q(r,1),r.end()}function a(e){var t=X(2);return t.write_shift(2,e),t}function o(e){var t=X(26);t.write_shift(2,4096),t.write_shift(2,4),t.write_shift(4,0);for(var n=0,r=0,i=0,a=0;a<e.SheetNames.length;++a){var o=e.SheetNames[a],s=e.Sheets[o];if(!(!s||!s[`!ref`])){++i;var c=_v(s[`!ref`]);n<c.e.r&&(n=c.e.r),r<c.e.c&&(r=c.e.c)}}return n>8191&&(n=8191),t.write_shift(2,n),t.write_shift(1,i),t.write_shift(1,r),t.write_shift(2,0),t.write_shift(2,0),t.write_shift(1,1),t.write_shift(1,2),t.write_shift(4,0),t.write_shift(4,0),t}function s(e,t,n){var r={s:{c:0,r:0},e:{c:0,r:0}};return t==8&&n.qpro?(r.s.c=e.read_shift(1),e.l++,r.s.r=e.read_shift(2),r.e.c=e.read_shift(1),e.l++,r.e.r=e.read_shift(2),r):(r.s.c=e.read_shift(2),r.s.r=e.read_shift(2),t==12&&n.qpro&&(e.l+=2),r.e.c=e.read_shift(2),r.e.r=e.read_shift(2),t==12&&n.qpro&&(e.l+=2),r.s.c==65535&&(r.s.c=r.e.c=r.s.r=r.e.r=0),r)}function c(e){var t=X(8);return t.write_shift(2,e.s.c),t.write_shift(2,e.s.r),t.write_shift(2,e.e.c),t.write_shift(2,e.e.r),t}function l(e,t,n){var r=[{c:0,r:0},{t:`n`,v:0},0,0];return n.qpro&&n.vers!=20768?(r[0].c=e.read_shift(1),r[3]=e.read_shift(1),r[0].r=e.read_shift(2),e.l+=2):(r[2]=e.read_shift(1),r[0].c=e.read_shift(2),r[0].r=e.read_shift(2)),r}function u(e,t,n){var r=e.l+t,i=l(e,t,n);if(i[1].t=`s`,n.vers==20768){e.l++;var a=e.read_shift(1);return i[1].v=e.read_shift(a,`utf8`),i}return n.qpro&&e.l++,i[1].v=e.read_shift(r-e.l,`cstr`),i}function d(e,t,n){var r=X(7+n.length);r.write_shift(1,255),r.write_shift(2,t),r.write_shift(2,e),r.write_shift(1,39);for(var i=0;i<r.length;++i){var a=n.charCodeAt(i);r.write_shift(1,a>=128?95:a)}return r.write_shift(1,0),r}function f(e,t,n){var r=l(e,t,n);return r[1].v=e.read_shift(2,`i`),r}function p(e,t,n){var r=X(7);return r.write_shift(1,255),r.write_shift(2,t),r.write_shift(2,e),r.write_shift(2,n,`i`),r}function m(e,t,n){var r=l(e,t,n);return r[1].v=e.read_shift(8,`f`),r}function h(e,t,n){var r=X(13);return r.write_shift(1,255),r.write_shift(2,t),r.write_shift(2,e),r.write_shift(8,n,`f`),r}function g(e,t,n){var r=e.l+t,i=l(e,t,n);if(i[1].v=e.read_shift(8,`f`),n.qpro)e.l=r;else{var a=e.read_shift(2);b(e.slice(e.l,e.l+a),i),e.l+=a}return i}function _(e,t,n){var r=t&32768;return t&=-32769,t=(r?e:0)+(t>=8192?t-16384:t),(r?``:`$`)+(n?dv(t):sv(t))}var v={51:[`FALSE`,0],52:[`TRUE`,0],70:[`LEN`,1],80:[`SUM`,69],81:[`AVERAGEA`,69],82:[`COUNTA`,69],83:[`MINA`,69],84:[`MAXA`,69],111:[`T`,1]},y=`.........+.-.*./.^.=.<>.<=.>=.<.>.....&.......`.split(`.`);function b(e,t){$_(e,0);for(var n=[],r=0,i=``,a=``,o=``,s=``;e.l<e.length;){var c=e[e.l++];switch(c){case 0:n.push(e.read_shift(8,`f`));break;case 1:a=_(t[0].c,e.read_shift(2),!0),i=_(t[0].r,e.read_shift(2),!1),n.push(a+i);break;case 2:var l=_(t[0].c,e.read_shift(2),!0),u=_(t[0].r,e.read_shift(2),!1);a=_(t[0].c,e.read_shift(2),!0),i=_(t[0].r,e.read_shift(2),!1),n.push(l+u+`:`+a+i);break;case 3:if(e.l<e.length){console.error(`WK1 premature formula end`);return}break;case 4:n.push(`(`+n.pop()+`)`);break;case 5:n.push(e.read_shift(2));break;case 6:for(var d=``;c=e[e.l++];)d+=String.fromCharCode(c);n.push(`"`+d.replace(/"/g,`""`)+`"`);break;case 8:n.push(`-`+n.pop());break;case 23:n.push(`+`+n.pop());break;case 22:n.push(`NOT(`+n.pop()+`)`);break;case 20:case 21:s=n.pop(),o=n.pop(),n.push([`AND`,`OR`][c-20]+`(`+o+`,`+s+`)`);break;default:if(c<32&&y[c])s=n.pop(),o=n.pop(),n.push(o+y[c]+s);else if(v[c]){if(r=v[c][1],r==69&&(r=e[e.l++]),r>n.length){console.error(`WK1 bad formula parse 0x`+c.toString(16)+`:|`+n.join(`|`)+`|`);return}var f=n.slice(-r);n.length-=r,n.push(v[c][0]+`(`+f.join(`,`)+`)`)}else if(c<=7)return console.error(`WK1 invalid opcode `+c.toString(16));else if(c<=24)return console.error(`WK1 unsupported op `+c.toString(16));else if(c<=30)return console.error(`WK1 invalid opcode `+c.toString(16));else if(c<=115)return console.error(`WK1 unsupported function opcode `+c.toString(16));else return console.error(`WK1 unrecognized opcode `+c.toString(16))}}n.length==1?t[1].f=``+n[0]:console.error(`WK1 bad formula parse |`+n.join(`|`)+`|`)}function x(e){var t=[{c:0,r:0},{t:`n`,v:0},0];return t[0].r=e.read_shift(2),t[3]=e[e.l++],t[0].c=e[e.l++],t}function S(e,t){var n=x(e,t);return n[1].t=`s`,n[1].v=e.read_shift(t-4,`cstr`),n}function C(e,t,n,r){var i=X(6+r.length);i.write_shift(2,e),i.write_shift(1,n),i.write_shift(1,t),i.write_shift(1,39);for(var a=0;a<r.length;++a){var o=r.charCodeAt(a);i.write_shift(1,o>=128?95:o)}return i.write_shift(1,0),i}function w(e,t){var n=x(e,t);n[1].v=e.read_shift(2);var r=n[1].v>>1;if(n[1].v&1)switch(r&7){case 0:r=(r>>3)*5e3;break;case 1:r=(r>>3)*500;break;case 2:r=(r>>3)/20;break;case 3:r=(r>>3)/200;break;case 4:r=(r>>3)/2e3;break;case 5:r=(r>>3)/2e4;break;case 6:r=(r>>3)/16;break;case 7:r=(r>>3)/64;break}return n[1].v=r,n}function T(e,t){var n=x(e,t),r=e.read_shift(4),i=e.read_shift(4),a=e.read_shift(2);if(a==65535)return r===0&&i===3221225472?(n[1].t=`e`,n[1].v=15):r===0&&i===3489660928?(n[1].t=`e`,n[1].v=42):n[1].v=0,n;var o=a&32768;return a=(a&32767)-16446,n[1].v=(1-o*2)*(i*2**(a+32)+r*2**a),n}function E(e,t,n,r){var i=X(14);if(i.write_shift(2,e),i.write_shift(1,n),i.write_shift(1,t),r==0)return i.write_shift(4,0),i.write_shift(4,0),i.write_shift(2,65535),i;var a=0,o=0,s=0,c=0;return r<0&&(a=1,r=-r),o=Math.log2(r)|0,r/=2**(o-31),c=r>>>0,c&2147483648||(r/=2,++o,c=r>>>0),r-=c,c|=2147483648,c>>>=0,r*=2**32,s=r>>>0,i.write_shift(4,s),i.write_shift(4,c),o+=16383+(a?32768:0),i.write_shift(2,o),i}function D(e,t){var n=T(e,14);return e.l+=t-14,n}function O(e,t){var n=x(e,t),r=e.read_shift(4);return n[1].v=r>>6,n}function k(e,t){var n=x(e,t),r=e.read_shift(8,`f`);return n[1].v=r,n}function A(e,t){var n=k(e,14);return e.l+=t-10,n}function ee(e,t){return e[e.l+t-1]==0?e.read_shift(t,`cstr`):``}function te(e,t){var n=e[e.l++];n>t-1&&(n=t-1);for(var r=``;r.length<n;)r+=String.fromCharCode(e[e.l++]);return r}function ne(e,t,n){if(!(!n.qpro||t<21)){var r=e.read_shift(1);return e.l+=17,e.l+=1,e.l+=2,[r,e.read_shift(t-21,`cstr`)]}}function re(e,t){for(var n={},r=e.l+t;e.l<r;){var i=e.read_shift(2);if(i==14e3){for(n[i]=[0,``],n[i][0]=e.read_shift(2);e[e.l];)n[i][1]+=String.fromCharCode(e[e.l]),e.l++;e.l++}}return n}function ie(e,t){var n=X(5+e.length);n.write_shift(2,14e3),n.write_shift(2,t);for(var r=0;r<e.length;++r){var i=e.charCodeAt(r);n[n.l++]=i>127?95:i}return n[n.l++]=0,n}var j={0:{n:`BOF`,f:Zy},1:{n:`EOF`},2:{n:`CALCMODE`},3:{n:`CALCORDER`},4:{n:`SPLIT`},5:{n:`SYNC`},6:{n:`RANGE`,f:s},7:{n:`WINDOW1`},8:{n:`COLW1`},9:{n:`WINTWO`},10:{n:`COLW2`},11:{n:`NAME`},12:{n:`BLANK`},13:{n:`INTEGER`,f},14:{n:`NUMBER`,f:m},15:{n:`LABEL`,f:u},16:{n:`FORMULA`,f:g},24:{n:`TABLE`},25:{n:`ORANGE`},26:{n:`PRANGE`},27:{n:`SRANGE`},28:{n:`FRANGE`},29:{n:`KRANGE1`},32:{n:`HRANGE`},35:{n:`KRANGE2`},36:{n:`PROTEC`},37:{n:`FOOTER`},38:{n:`HEADER`},39:{n:`SETUP`},40:{n:`MARGINS`},41:{n:`LABELFMT`},42:{n:`TITLES`},43:{n:`SHEETJS`},45:{n:`GRAPH`},46:{n:`NGRAPH`},47:{n:`CALCCOUNT`},48:{n:`UNFORMATTED`},49:{n:`CURSORW12`},50:{n:`WINDOW`},51:{n:`STRING`,f:u},55:{n:`PASSWORD`},56:{n:`LOCKED`},60:{n:`QUERY`},61:{n:`QUERYNAME`},62:{n:`PRINT`},63:{n:`PRINTNAME`},64:{n:`GRAPH2`},65:{n:`GRAPHNAME`},66:{n:`ZOOM`},67:{n:`SYMSPLIT`},68:{n:`NSROWS`},69:{n:`NSCOLS`},70:{n:`RULER`},71:{n:`NNAME`},72:{n:`ACOMM`},73:{n:`AMACRO`},74:{n:`PARSE`},102:{n:`PRANGES??`},103:{n:`RRANGES??`},104:{n:`FNAME??`},105:{n:`MRANGES??`},204:{n:`SHEETNAMECS`,f:ee},222:{n:`SHEETNAMELP`,f:te},65535:{n:``}},M={0:{n:`BOF`},1:{n:`EOF`},2:{n:`PASSWORD`},3:{n:`CALCSET`},4:{n:`WINDOWSET`},5:{n:`SHEETCELLPTR`},6:{n:`SHEETLAYOUT`},7:{n:`COLUMNWIDTH`},8:{n:`HIDDENCOLUMN`},9:{n:`USERRANGE`},10:{n:`SYSTEMRANGE`},11:{n:`ZEROFORCE`},12:{n:`SORTKEYDIR`},13:{n:`FILESEAL`},14:{n:`DATAFILLNUMS`},15:{n:`PRINTMAIN`},16:{n:`PRINTSTRING`},17:{n:`GRAPHMAIN`},18:{n:`GRAPHSTRING`},19:{n:`??`},20:{n:`ERRCELL`},21:{n:`NACELL`},22:{n:`LABEL16`,f:S},23:{n:`NUMBER17`,f:T},24:{n:`NUMBER18`,f:w},25:{n:`FORMULA19`,f:D},26:{n:`FORMULA1A`},27:{n:`XFORMAT`,f:re},28:{n:`DTLABELMISC`},29:{n:`DTLABELCELL`},30:{n:`GRAPHWINDOW`},31:{n:`CPA`},32:{n:`LPLAUTO`},33:{n:`QUERY`},34:{n:`HIDDENSHEET`},35:{n:`??`},37:{n:`NUMBER25`,f:O},38:{n:`??`},39:{n:`NUMBER27`,f:k},40:{n:`FORMULA28`,f:A},142:{n:`??`},147:{n:`??`},150:{n:`??`},151:{n:`??`},152:{n:`??`},153:{n:`??`},154:{n:`??`},155:{n:`??`},156:{n:`??`},163:{n:`??`},174:{n:`??`},175:{n:`??`},176:{n:`??`},177:{n:`??`},184:{n:`??`},185:{n:`??`},186:{n:`??`},187:{n:`??`},188:{n:`??`},195:{n:`??`},201:{n:`??`},204:{n:`SHEETNAMECS`,f:ee},205:{n:`??`},206:{n:`??`},207:{n:`??`},208:{n:`??`},256:{n:`??`},259:{n:`??`},260:{n:`??`},261:{n:`??`},262:{n:`??`},263:{n:`??`},265:{n:`??`},266:{n:`??`},267:{n:`??`},268:{n:`??`},270:{n:`??`},271:{n:`??`},384:{n:`??`},389:{n:`??`},390:{n:`??`},393:{n:`??`},396:{n:`??`},512:{n:`??`},514:{n:`??`},513:{n:`??`},516:{n:`??`},517:{n:`??`},640:{n:`??`},641:{n:`??`},642:{n:`??`},643:{n:`??`},644:{n:`??`},645:{n:`??`},646:{n:`??`},647:{n:`??`},648:{n:`??`},658:{n:`??`},659:{n:`??`},660:{n:`??`},661:{n:`??`},662:{n:`??`},665:{n:`??`},666:{n:`??`},768:{n:`??`},772:{n:`??`},1537:{n:`SHEETINFOQP`,f:ne},1600:{n:`??`},1602:{n:`??`},1793:{n:`??`},1794:{n:`??`},1795:{n:`??`},1796:{n:`??`},1920:{n:`??`},2048:{n:`??`},2049:{n:`??`},2052:{n:`??`},2688:{n:`??`},10998:{n:`??`},12849:{n:`??`},28233:{n:`??`},28484:{n:`??`},65535:{n:``}};return{sheet_to_wk1:r,book_to_wk3:i,to_workbook:t}})(),Wb=/^\s|\s$|[\t\n\r]/;function Gb(e,t){if(!t.bookSST)return``;var n=[Gg];n[n.length]=Y(`sst`,null,{xmlns:h_[0],count:e.Count,uniqueCount:e.Unique});for(var r=0;r!=e.length;++r)if(e[r]!=null){var i=e[r],a=`<si>`;i.r?a+=i.r:(a+=`<t`,i.t||=``,i.t.match(Wb)&&(a+=` xml:space="preserve"`),a+=`>`+Yg(i.t)+`</t>`),a+=`</si>`,n[n.length]=a}return n.length>2&&(n[n.length]=`</sst>`,n[1]=n[1].replace(`/>`,`>`)),n.join(``)}function Kb(e){return[e.read_shift(4),e.read_shift(4)]}function qb(e,t){return t||=X(8),t.write_shift(4,e.Count),t.write_shift(4,e.Unique),t}var Jb=Mv;function Yb(e){var t=tv();Z(t,159,qb(e));for(var n=0;n<e.length;++n)Z(t,19,Jb(e[n]));return Z(t,160),t.end()}function Xb(e){if(Um!==void 0)return Um.utils.encode(Nm,e);for(var t=[],n=e.split(``),r=0;r<n.length;++r)t[r]=n[r].charCodeAt(0);return t}function Zb(e){var t=0,n,r=Xb(e),i=r.length+1,a,o,s,c,l;for(n=Zm(i),n[0]=r.length,a=1;a!=i;++a)n[a]=r[a-1];for(a=i-1;a>=0;--a)o=n[a],s=t&16384?1:0,c=t<<1&32767,l=s|c,t=l^o;return t^52811}var Qb=(function(){function e(e,n){switch(n.type){case`base64`:return t(Jm(e),n);case`binary`:return t(e,n);case`buffer`:return t(Ym&&Buffer.isBuffer(e)?e.toString(`binary`):th(e),n);case`array`:return t(Rg(e),n)}throw Error(`Unrecognized type `+n.type)}function t(e,t){var n=(t||{}).dense?[]:{},r=e.match(/\\trowd.*?\\row\b/g);if(!r.length)throw Error(`RTF missing table`);var i={s:{c:0,r:0},e:{c:0,r:r.length-1}};return r.forEach(function(e,t){Array.isArray(n)&&(n[t]=[]);for(var r=/\\\w+\b/g,a=0,o,s=-1;o=r.exec(e);){switch(o[0]){case`\\cell`:var c=e.slice(a,r.lastIndex-o[0].length);if(c[0]==` `&&(c=c.slice(1)),++s,c.length){var l={v:c,t:`s`};Array.isArray(n)?n[t][s]=l:n[gv({r:t,c:s})]=l}break}a=r.lastIndex}s>i.e.c&&(i.e.c=s)}),n[`!ref`]=vv(i),n}function n(t,n){return Sv(e(t,n),n)}function r(e){for(var t=[`{\\rtf1\\ansi`],n=yv(e[`!ref`]),r,i=Array.isArray(e),a=n.s.r;a<=n.e.r;++a){t.push(`\\trowd\\trautofit1`);for(var o=n.s.c;o<=n.e.c;++o)t.push(`\\cellx`+(o+1));for(t.push(`\\pard\\intbl`),o=n.s.c;o<=n.e.c;++o){var s=gv({r:a,c:o});r=i?(e[a]||[])[o]:e[s],!(!r||r.v==null&&(!r.f||r.F))&&(t.push(` `+(r.w||(xv(r),r.w))),t.push(`\\cell`))}t.push(`\\pard\\intbl\\row`)}return t.join(``)+`}`}return{to_workbook:n,to_sheet:e,from_sheet:r}})();function $b(e){for(var t=0,n=1;t!=3;++t)n=n*256+(e[t]>255?255:e[t]<0?0:e[t]);return n.toString(16).toUpperCase().slice(1)}var ex=6;function tx(e){return Math.floor((e+Math.round(128/ex)/256)*ex)}function nx(e){return Math.floor((e-5)/ex*100+.5)/100}function rx(e){return Math.round((e*ex+5)/ex*256)/256}function ix(e){e.width?(e.wpx=tx(e.width),e.wch=nx(e.wpx),e.MDW=ex):e.wpx?(e.wch=nx(e.wpx),e.width=rx(e.wch),e.MDW=ex):typeof e.wch==`number`&&(e.width=rx(e.wch),e.wpx=tx(e.width),e.MDW=ex),e.customWidth&&delete e.customWidth}var ax=96;function ox(e){return e*96/ax}function sx(e){return e*ax/96}function cx(e){var t=[`<numFmts>`];return[[5,8],[23,26],[41,44],[50,392]].forEach(function(n){for(var r=n[0];r<=n[1];++r)e[r]!=null&&(t[t.length]=Y(`numFmt`,null,{numFmtId:r,formatCode:Yg(e[r])}))}),t.length===1?``:(t[t.length]=`</numFmts>`,t[0]=Y(`numFmts`,null,{count:t.length-2}).replace(`/>`,`>`),t.join(``))}function lx(e){var t=[];return t[t.length]=Y(`cellXfs`,null),e.forEach(function(e){t[t.length]=Y(`xf`,null,e)}),t[t.length]=`</cellXfs>`,t.length===2?``:(t[0]=Y(`cellXfs`,null,{count:t.length-2}).replace(`/>`,`>`),t.join(``))}function ux(e,t){var n=[Gg,Y(`styleSheet`,null,{xmlns:h_[0],"xmlns:vt":m_.vt})],r;return e.SSF&&(r=cx(e.SSF))!=null&&(n[n.length]=r),n[n.length]=`<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>`,n[n.length]=`<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>`,n[n.length]=`<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>`,n[n.length]=`<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>`,(r=lx(t.cellXfs))&&(n[n.length]=r),n[n.length]=`<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>`,n[n.length]=`<dxfs count="0"/>`,n[n.length]=`<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>`,n.length>2&&(n[n.length]=`</styleSheet>`,n[1]=n[1].replace(`/>`,`>`)),n.join(``)}function dx(e,t){return[e.read_shift(2),Dv(e,t-2)]}function fx(e,t,n){n||=X(6+4*t.length),n.write_shift(2,e),Ov(t,n);var r=n.length>n.l?n.slice(0,n.l):n;return n.l??=n.length,r}function px(e,t,n){var r={};r.sz=e.read_shift(2)/20;var i=ny(e,2,n);switch(i.fItalic&&(r.italic=1),i.fCondense&&(r.condense=1),i.fExtend&&(r.extend=1),i.fShadow&&(r.shadow=1),i.fOutline&&(r.outline=1),i.fStrikeout&&(r.strike=1),e.read_shift(2)===700&&(r.bold=1),e.read_shift(2)){case 1:r.vertAlign=`superscript`;break;case 2:r.vertAlign=`subscript`;break}var a=e.read_shift(1);a!=0&&(r.underline=a);var o=e.read_shift(1);o>0&&(r.family=o);var s=e.read_shift(1);switch(s>0&&(r.charset=s),e.l++,r.color=ey(e,8),e.read_shift(1)){case 1:r.scheme=`major`;break;case 2:r.scheme=`minor`;break}return r.name=Dv(e,t-21),r}function mx(e,t){t||=X(153),t.write_shift(2,e.sz*20),ry(e,t),t.write_shift(2,e.bold?700:400);var n=0;e.vertAlign==`superscript`?n=1:e.vertAlign==`subscript`&&(n=2),t.write_shift(2,n),t.write_shift(1,e.underline||0),t.write_shift(1,e.family||0),t.write_shift(1,e.charset||0),t.write_shift(1,0),ty(e.color,t);var r=0;return e.scheme==`major`&&(r=1),e.scheme==`minor`&&(r=2),t.write_shift(1,r),Ov(e.name,t),t.length>t.l?t.slice(0,t.l):t}var hx=[`none`,`solid`,`mediumGray`,`darkGray`,`lightGray`,`darkHorizontal`,`darkVertical`,`darkDown`,`darkUp`,`darkGrid`,`darkTrellis`,`lightHorizontal`,`lightVertical`,`lightDown`,`lightUp`,`lightGrid`,`lightTrellis`,`gray125`,`gray0625`],gx,_x=ev;function vx(e,t){t||=X(84),gx||=Tg(hx);var n=gx[e.patternType];n??=40,t.write_shift(4,n);var r=0;if(n!=40)for(ty({auto:1},t),ty({auto:1},t);r<12;++r)t.write_shift(4,0);else{for(;r<4;++r)t.write_shift(4,0);for(;r<12;++r)t.write_shift(4,0)}return t.length>t.l?t.slice(0,t.l):t}function yx(e,t){var n=e.l+t,r=e.read_shift(2),i=e.read_shift(2);return e.l=n,{ixfe:r,numFmtId:i}}function bx(e,t,n){return n||=X(16),n.write_shift(2,t||0),n.write_shift(2,e.numFmtId||0),n.write_shift(2,0),n.write_shift(2,0),n.write_shift(2,0),n.write_shift(1,0),n.write_shift(1,0),n.write_shift(1,0),n.write_shift(1,0),n.write_shift(1,0),n.write_shift(1,0),n}function xx(e,t){return t||=X(10),t.write_shift(1,0),t.write_shift(1,0),t.write_shift(4,0),t.write_shift(4,0),t}var Sx=ev;function Cx(e,t){return t||=X(51),t.write_shift(1,0),xx(null,t),xx(null,t),xx(null,t),xx(null,t),xx(null,t),t.length>t.l?t.slice(0,t.l):t}function wx(e,t){return t||=X(52),t.write_shift(4,e.xfId),t.write_shift(2,1),t.write_shift(1,+e.builtinId),t.write_shift(1,0),Hv(e.name||``,t),t.length>t.l?t.slice(0,t.l):t}function Tx(e,t,n){var r=X(2052);return r.write_shift(4,e),Hv(t,r),Hv(n,r),r.length>r.l?r.slice(0,r.l):r}function Ex(e,t){if(t){var n=0;[[5,8],[23,26],[41,44],[50,392]].forEach(function(e){for(var r=e[0];r<=e[1];++r)t[r]!=null&&++n}),n!=0&&(Z(e,615,Ev(n)),[[5,8],[23,26],[41,44],[50,392]].forEach(function(n){for(var r=n[0];r<=n[1];++r)t[r]!=null&&Z(e,44,fx(r,t[r]))}),Z(e,616))}}function Dx(e){var t=1;t!=0&&(Z(e,611,Ev(t)),Z(e,43,mx({sz:12,color:{theme:1},name:`Calibri`,family:2,scheme:`minor`})),Z(e,612))}function Ox(e){var t=2;t!=0&&(Z(e,603,Ev(t)),Z(e,45,vx({patternType:`none`})),Z(e,45,vx({patternType:`gray125`})),Z(e,604))}function kx(e){var t=1;t!=0&&(Z(e,613,Ev(t)),Z(e,46,Cx({})),Z(e,614))}function Ax(e){Z(e,626,Ev(1)),Z(e,47,bx({numFmtId:0,fontId:0,fillId:0,borderId:0},65535)),Z(e,627)}function jx(e,t){Z(e,617,Ev(t.length)),t.forEach(function(t){Z(e,47,bx(t,0))}),Z(e,618)}function Mx(e){Z(e,619,Ev(1)),Z(e,48,wx({xfId:0,builtinId:0,name:`Normal`})),Z(e,620)}function Nx(e){Z(e,505,Ev(0)),Z(e,506)}function Px(e){Z(e,508,Tx(0,`TableStyleMedium9`,`PivotStyleMedium4`)),Z(e,509)}function Fx(e,t){var n=tv();return Z(n,278),Ex(n,e.SSF),Dx(n,e),Ox(n,e),kx(n,e),Ax(n,e),jx(n,t.cellXfs),Mx(n,e),Nx(n,e),Px(n,e),Z(n,279),n.end()}function Ix(e,t){if(t&&t.themeXLSX)return t.themeXLSX;if(e&&typeof e.raw==`string`)return e.raw;var n=[Gg];return n[n.length]=`<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">`,n[n.length]=`<a:themeElements>`,n[n.length]=`<a:clrScheme name="Office">`,n[n.length]=`<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>`,n[n.length]=`<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>`,n[n.length]=`<a:dk2><a:srgbClr val="1F497D"/></a:dk2>`,n[n.length]=`<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>`,n[n.length]=`<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>`,n[n.length]=`<a:accent2><a:srgbClr val="C0504D"/></a:accent2>`,n[n.length]=`<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>`,n[n.length]=`<a:accent4><a:srgbClr val="8064A2"/></a:accent4>`,n[n.length]=`<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>`,n[n.length]=`<a:accent6><a:srgbClr val="F79646"/></a:accent6>`,n[n.length]=`<a:hlink><a:srgbClr val="0000FF"/></a:hlink>`,n[n.length]=`<a:folHlink><a:srgbClr val="800080"/></a:folHlink>`,n[n.length]=`</a:clrScheme>`,n[n.length]=`<a:fontScheme name="Office">`,n[n.length]=`<a:majorFont>`,n[n.length]=`<a:latin typeface="Cambria"/>`,n[n.length]=`<a:ea typeface=""/>`,n[n.length]=`<a:cs typeface=""/>`,n[n.length]=`<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>`,n[n.length]=`<a:font script="Hang" typeface="맑은 고딕"/>`,n[n.length]=`<a:font script="Hans" typeface="宋体"/>`,n[n.length]=`<a:font script="Hant" typeface="新細明體"/>`,n[n.length]=`<a:font script="Arab" typeface="Times New Roman"/>`,n[n.length]=`<a:font script="Hebr" typeface="Times New Roman"/>`,n[n.length]=`<a:font script="Thai" typeface="Tahoma"/>`,n[n.length]=`<a:font script="Ethi" typeface="Nyala"/>`,n[n.length]=`<a:font script="Beng" typeface="Vrinda"/>`,n[n.length]=`<a:font script="Gujr" typeface="Shruti"/>`,n[n.length]=`<a:font script="Khmr" typeface="MoolBoran"/>`,n[n.length]=`<a:font script="Knda" typeface="Tunga"/>`,n[n.length]=`<a:font script="Guru" typeface="Raavi"/>`,n[n.length]=`<a:font script="Cans" typeface="Euphemia"/>`,n[n.length]=`<a:font script="Cher" typeface="Plantagenet Cherokee"/>`,n[n.length]=`<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>`,n[n.length]=`<a:font script="Tibt" typeface="Microsoft Himalaya"/>`,n[n.length]=`<a:font script="Thaa" typeface="MV Boli"/>`,n[n.length]=`<a:font script="Deva" typeface="Mangal"/>`,n[n.length]=`<a:font script="Telu" typeface="Gautami"/>`,n[n.length]=`<a:font script="Taml" typeface="Latha"/>`,n[n.length]=`<a:font script="Syrc" typeface="Estrangelo Edessa"/>`,n[n.length]=`<a:font script="Orya" typeface="Kalinga"/>`,n[n.length]=`<a:font script="Mlym" typeface="Kartika"/>`,n[n.length]=`<a:font script="Laoo" typeface="DokChampa"/>`,n[n.length]=`<a:font script="Sinh" typeface="Iskoola Pota"/>`,n[n.length]=`<a:font script="Mong" typeface="Mongolian Baiti"/>`,n[n.length]=`<a:font script="Viet" typeface="Times New Roman"/>`,n[n.length]=`<a:font script="Uigh" typeface="Microsoft Uighur"/>`,n[n.length]=`<a:font script="Geor" typeface="Sylfaen"/>`,n[n.length]=`</a:majorFont>`,n[n.length]=`<a:minorFont>`,n[n.length]=`<a:latin typeface="Calibri"/>`,n[n.length]=`<a:ea typeface=""/>`,n[n.length]=`<a:cs typeface=""/>`,n[n.length]=`<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>`,n[n.length]=`<a:font script="Hang" typeface="맑은 고딕"/>`,n[n.length]=`<a:font script="Hans" typeface="宋体"/>`,n[n.length]=`<a:font script="Hant" typeface="新細明體"/>`,n[n.length]=`<a:font script="Arab" typeface="Arial"/>`,n[n.length]=`<a:font script="Hebr" typeface="Arial"/>`,n[n.length]=`<a:font script="Thai" typeface="Tahoma"/>`,n[n.length]=`<a:font script="Ethi" typeface="Nyala"/>`,n[n.length]=`<a:font script="Beng" typeface="Vrinda"/>`,n[n.length]=`<a:font script="Gujr" typeface="Shruti"/>`,n[n.length]=`<a:font script="Khmr" typeface="DaunPenh"/>`,n[n.length]=`<a:font script="Knda" typeface="Tunga"/>`,n[n.length]=`<a:font script="Guru" typeface="Raavi"/>`,n[n.length]=`<a:font script="Cans" typeface="Euphemia"/>`,n[n.length]=`<a:font script="Cher" typeface="Plantagenet Cherokee"/>`,n[n.length]=`<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>`,n[n.length]=`<a:font script="Tibt" typeface="Microsoft Himalaya"/>`,n[n.length]=`<a:font script="Thaa" typeface="MV Boli"/>`,n[n.length]=`<a:font script="Deva" typeface="Mangal"/>`,n[n.length]=`<a:font script="Telu" typeface="Gautami"/>`,n[n.length]=`<a:font script="Taml" typeface="Latha"/>`,n[n.length]=`<a:font script="Syrc" typeface="Estrangelo Edessa"/>`,n[n.length]=`<a:font script="Orya" typeface="Kalinga"/>`,n[n.length]=`<a:font script="Mlym" typeface="Kartika"/>`,n[n.length]=`<a:font script="Laoo" typeface="DokChampa"/>`,n[n.length]=`<a:font script="Sinh" typeface="Iskoola Pota"/>`,n[n.length]=`<a:font script="Mong" typeface="Mongolian Baiti"/>`,n[n.length]=`<a:font script="Viet" typeface="Arial"/>`,n[n.length]=`<a:font script="Uigh" typeface="Microsoft Uighur"/>`,n[n.length]=`<a:font script="Geor" typeface="Sylfaen"/>`,n[n.length]=`</a:minorFont>`,n[n.length]=`</a:fontScheme>`,n[n.length]=`<a:fmtScheme name="Office">`,n[n.length]=`<a:fillStyleLst>`,n[n.length]=`<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>`,n[n.length]=`<a:gradFill rotWithShape="1">`,n[n.length]=`<a:gsLst>`,n[n.length]=`<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>`,n[n.length]=`<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>`,n[n.length]=`<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>`,n[n.length]=`</a:gsLst>`,n[n.length]=`<a:lin ang="16200000" scaled="1"/>`,n[n.length]=`</a:gradFill>`,n[n.length]=`<a:gradFill rotWithShape="1">`,n[n.length]=`<a:gsLst>`,n[n.length]=`<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>`,n[n.length]=`<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>`,n[n.length]=`</a:gsLst>`,n[n.length]=`<a:lin ang="16200000" scaled="0"/>`,n[n.length]=`</a:gradFill>`,n[n.length]=`</a:fillStyleLst>`,n[n.length]=`<a:lnStyleLst>`,n[n.length]=`<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>`,n[n.length]=`<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>`,n[n.length]=`<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>`,n[n.length]=`</a:lnStyleLst>`,n[n.length]=`<a:effectStyleLst>`,n[n.length]=`<a:effectStyle>`,n[n.length]=`<a:effectLst>`,n[n.length]=`<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>`,n[n.length]=`</a:effectLst>`,n[n.length]=`</a:effectStyle>`,n[n.length]=`<a:effectStyle>`,n[n.length]=`<a:effectLst>`,n[n.length]=`<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>`,n[n.length]=`</a:effectLst>`,n[n.length]=`</a:effectStyle>`,n[n.length]=`<a:effectStyle>`,n[n.length]=`<a:effectLst>`,n[n.length]=`<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>`,n[n.length]=`</a:effectLst>`,n[n.length]=`<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>`,n[n.length]=`<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>`,n[n.length]=`</a:effectStyle>`,n[n.length]=`</a:effectStyleLst>`,n[n.length]=`<a:bgFillStyleLst>`,n[n.length]=`<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>`,n[n.length]=`<a:gradFill rotWithShape="1">`,n[n.length]=`<a:gsLst>`,n[n.length]=`<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>`,n[n.length]=`<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>`,n[n.length]=`<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>`,n[n.length]=`</a:gsLst>`,n[n.length]=`<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>`,n[n.length]=`</a:gradFill>`,n[n.length]=`<a:gradFill rotWithShape="1">`,n[n.length]=`<a:gsLst>`,n[n.length]=`<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>`,n[n.length]=`<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>`,n[n.length]=`</a:gsLst>`,n[n.length]=`<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>`,n[n.length]=`</a:gradFill>`,n[n.length]=`</a:bgFillStyleLst>`,n[n.length]=`</a:fmtScheme>`,n[n.length]=`</a:themeElements>`,n[n.length]=`<a:objectDefaults>`,n[n.length]=`<a:spDef>`,n[n.length]=`<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>`,n[n.length]=`</a:spDef>`,n[n.length]=`<a:lnDef>`,n[n.length]=`<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>`,n[n.length]=`</a:lnDef>`,n[n.length]=`</a:objectDefaults>`,n[n.length]=`<a:extraClrSchemeLst/>`,n[n.length]=`</a:theme>`,n.join(``)}function Lx(e,t){return{flags:e.read_shift(4),version:e.read_shift(4),name:Dv(e,t-8)}}function Rx(e){var t=X(12+2*e.name.length);return t.write_shift(4,e.flags),t.write_shift(4,e.version),Ov(e.name,t),t.slice(0,t.l)}function zx(e){for(var t=[],n=e.read_shift(4);n-- >0;)t.push([e.read_shift(4),e.read_shift(4)]);return t}function Bx(e){var t=X(4+8*e.length);t.write_shift(4,e.length);for(var n=0;n<e.length;++n)t.write_shift(4,e[n][0]),t.write_shift(4,e[n][1]);return t}function Vx(e,t){var n=X(8+2*t.length);return n.write_shift(4,e),Ov(t,n),n.slice(0,n.l)}function Hx(e){return e.l+=4,e.read_shift(4)!=0}function Ux(e,t){var n=X(8);return n.write_shift(4,e),n.write_shift(4,t?1:0),n}function Wx(){var e=tv();return Z(e,332),Z(e,334,Ev(1)),Z(e,335,Rx({name:`XLDAPR`,version:12e4,flags:3496657072})),Z(e,336),Z(e,339,Vx(1,`XLDAPR`)),Z(e,52),Z(e,35,Ev(514)),Z(e,4096,Ev(0)),Z(e,4097,Qy(1)),Z(e,36),Z(e,53),Z(e,340),Z(e,337,Ux(1,!0)),Z(e,51,Bx([[1,0]])),Z(e,338),Z(e,333),e.end()}function Gx(){var e=[Gg];return e.push(`<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">
  <metadataTypes count="1">
    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>
  </metadataTypes>
  <futureMetadata name="XLDAPR" count="1">
    <bk>
      <extLst>
        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">
          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>
        </ext>
      </extLst>
    </bk>
  </futureMetadata>
  <cellMetadata count="1">
    <bk>
      <rc t="1" v="0"/>
    </bk>
  </cellMetadata>
</metadata>`),e.join(``)}function Kx(e){var t={};t.i=e.read_shift(4);var n={};n.r=e.read_shift(4),n.c=e.read_shift(4),t.r=gv(n);var r=e.read_shift(1);return r&2&&(t.l=`1`),r&8&&(t.a=`1`),t}var qx=1024;function Jx(e,t){for(var n=[21600,21600],r=[`m0,0l0`,n[1],n[0],n[1],n[0],`0xe`].join(`,`),i=[Y(`xml`,null,{"xmlns:v":g_.v,"xmlns:o":g_.o,"xmlns:x":g_.x,"xmlns:mv":g_.mv}).replace(/\/>/,`>`),Y(`o:shapelayout`,Y(`o:idmap`,null,{"v:ext":`edit`,data:e}),{"v:ext":`edit`}),Y(`v:shapetype`,[Y(`v:stroke`,null,{joinstyle:`miter`}),Y(`v:path`,null,{gradientshapeok:`t`,"o:connecttype":`rect`})].join(``),{id:`_x0000_t202`,"o:spt":202,coordsize:n.join(`,`),path:r})];qx<e*1e3;)qx+=1e3;return t.forEach(function(e){var t=hv(e[0]),n={color2:`#BEFF82`,type:`gradient`};n.type==`gradient`&&(n.angle=`-180`);var r=Y(`v:fill`,n.type==`gradient`?Y(`o:fill`,null,{type:`gradientUnscaled`,"v:ext":`view`}):null,n);++qx,i=i.concat([`<v:shape`+d_({id:`_x0000_s`+qx,type:`#_x0000_t202`,style:`position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10`+(e[1].hidden?`;visibility:hidden`:``),fillcolor:`#ECFAD4`,strokecolor:`#edeaa1`})+`>`,r,Y(`v:shadow`,null,{on:`t`,obscured:`t`}),Y(`v:path`,null,{"o:connecttype":`none`}),`<v:textbox><div style="text-align:left"></div></v:textbox>`,`<x:ClientData ObjectType="Note">`,`<x:MoveWithCells/>`,`<x:SizeWithCells/>`,u_(`x:Anchor`,[t.c+1,0,t.r+1,0,t.c+3,20,t.r+5,20].join(`,`)),u_(`x:AutoFill`,`False`),u_(`x:Row`,String(t.r)),u_(`x:Column`,String(t.c)),e[1].hidden?``:`<x:Visible/>`,`</x:ClientData>`,`</v:shape>`])}),i.push(`</xml>`),i.join(``)}function Yx(e){var t=[Gg,Y(`comments`,null,{xmlns:h_[0]})],n=[];return t.push(`<authors>`),e.forEach(function(e){e[1].forEach(function(e){var r=Yg(e.a);n.indexOf(r)==-1&&(n.push(r),t.push(`<author>`+r+`</author>`)),e.T&&e.ID&&n.indexOf(`tc=`+e.ID)==-1&&(n.push(`tc=`+e.ID),t.push(`<author>tc=`+e.ID+`</author>`))})}),n.length==0&&(n.push(`SheetJ5`),t.push(`<author>SheetJ5</author>`)),t.push(`</authors>`),t.push(`<commentList>`),e.forEach(function(e){var r=0,i=[];if(e[1][0]&&e[1][0].T&&e[1][0].ID?r=n.indexOf(`tc=`+e[1][0].ID):e[1].forEach(function(e){e.a&&(r=n.indexOf(Yg(e.a))),i.push(e.t||``)}),t.push(`<comment ref="`+e[0]+`" authorId="`+r+`"><text>`),i.length<=1)t.push(u_(`t`,Yg(i[0]||``)));else{for(var a=`Comment:
    `+i[0]+`
`,o=1;o<i.length;++o)a+=`Reply:
    `+i[o]+`
`;t.push(u_(`t`,Yg(a)))}t.push(`</text></comment>`)}),t.push(`</commentList>`),t.length>2&&(t[t.length]=`</comments>`,t[1]=t[1].replace(`/>`,`>`)),t.join(``)}function Xx(e,t,n){var r=[Gg,Y(`ThreadedComments`,null,{xmlns:m_.TCMNT}).replace(/[\/]>/,`>`)];return e.forEach(function(e){var i=``;(e[1]||[]).forEach(function(a,o){if(!a.T){delete a.ID;return}a.a&&t.indexOf(a.a)==-1&&t.push(a.a);var s={ref:e[0],id:`{54EE7951-7262-4200-6969-`+(`000000000000`+ n.tcid++).slice(-12)+`}`};o==0?i=s.id:s.parentId=i,a.ID=s.id,a.a&&(s.personId=`{54EE7950-7262-4200-6969-`+(`000000000000`+t.indexOf(a.a)).slice(-12)+`}`),r.push(Y(`threadedComment`,u_(`text`,a.t||``),s))})}),r.push(`</ThreadedComments>`),r.join(``)}function Zx(e){var t=[Gg,Y(`personList`,null,{xmlns:m_.TCMNT,"xmlns:x":h_[0]}).replace(/[\/]>/,`>`)];return e.forEach(function(e,n){t.push(Y(`person`,null,{displayName:e,id:`{54EE7950-7262-4200-6969-`+(`000000000000`+n).slice(-12)+`}`,userId:e,providerId:`None`}))}),t.push(`</personList>`),t.join(``)}function Qx(e){var t={};t.iauthor=e.read_shift(4);var n=Xv(e,16);return t.rfx=n.s,t.ref=gv(n.s),e.l+=16,t}function $x(e,t){return t??=X(36),t.write_shift(4,e[1].iauthor),Zv(e[0],t),t.write_shift(4,0),t.write_shift(4,0),t.write_shift(4,0),t.write_shift(4,0),t}var eS=Dv;function tS(e){return Ov(e.slice(0,54))}function nS(e){var t=tv(),n=[];return Z(t,628),Z(t,630),e.forEach(function(e){e[1].forEach(function(e){n.indexOf(e.a)>-1||(n.push(e.a.slice(0,54)),Z(t,632,tS(e.a)))})}),Z(t,631),Z(t,633),e.forEach(function(e){e[1].forEach(function(r){r.iauthor=n.indexOf(r.a),Z(t,635,$x([{s:hv(e[0]),e:hv(e[0])},r])),r.t&&r.t.length>0&&Z(t,637,Pv(r)),Z(t,636),delete r.iauthor})}),Z(t,634),Z(t,629),t.end()}function rS(e,t){t.FullPaths.forEach(function(n,r){if(r!=0){var i=n.replace(/[^\/]*[\/]/,`/_VBA_PROJECT_CUR/`);i.slice(-1)!==`/`&&yg.utils.cfb_add(e,i,t.FileIndex[r].content)}})}var iS=[`xlsb`,`xlsm`,`xlam`,`biff8`,`xla`],aS=(function(){var e=/(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g,t={r:0,c:0};function n(e,n,r,i){var a=!1,o=!1;r.length==0?o=!0:r.charAt(0)==`[`&&(o=!0,r=r.slice(1,-1)),i.length==0?a=!0:i.charAt(0)==`[`&&(a=!0,i=i.slice(1,-1));var s=r.length>0?parseInt(r,10)|0:0,c=i.length>0?parseInt(i,10)|0:0;return a?c+=t.c:--c,o?s+=t.r:--s,n+(a?``:`$`)+dv(c)+(o?``:`$`)+sv(s)}return function(r,i){return t=i,r.replace(e,n)}})(),oS=/(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g,sS=(function(){return function(e,t){return e.replace(oS,function(e,n,r,i,a,o){var s=uv(i)-(r?0:t.c),c=ov(o)-(a?0:t.r),l=c==0?``:a?c+1:`[`+c+`]`,u=s==0?``:r?s+1:`[`+s+`]`;return n+`R`+l+`C`+u})}})();function cS(e,t){return e.replace(oS,function(e,n,r,i,a,o){return n+(r==`$`?r+i:dv(uv(i)+t.c))+(a==`$`?a+o:sv(ov(o)+t.r))})}function lS(e){return e.length!=1}function uS(e){e.l+=1}function dS(e,t){var n=e.read_shift(t==1?1:2);return[n&16383,n>>14&1,n>>15&1]}function fS(e,t,n){var r=2;if(n){if(n.biff>=2&&n.biff<=5)return pS(e,t,n);n.biff==12&&(r=4)}var i=e.read_shift(r),a=e.read_shift(r),o=dS(e,2),s=dS(e,2);return{s:{r:i,c:o[0],cRel:o[1],rRel:o[2]},e:{r:a,c:s[0],cRel:s[1],rRel:s[2]}}}function pS(e){var t=dS(e,2),n=dS(e,2),r=e.read_shift(1),i=e.read_shift(1);return{s:{r:t[0],c:r,cRel:t[1],rRel:t[2]},e:{r:n[0],c:i,cRel:n[1],rRel:n[2]}}}function mS(e,t,n){if(n.biff<8)return pS(e,t,n);var r=e.read_shift(n.biff==12?4:2),i=e.read_shift(n.biff==12?4:2),a=dS(e,2),o=dS(e,2);return{s:{r,c:a[0],cRel:a[1],rRel:a[2]},e:{r:i,c:o[0],cRel:o[1],rRel:o[2]}}}function hS(e,t,n){if(n&&n.biff>=2&&n.biff<=5)return gS(e,t,n);var r=e.read_shift(n&&n.biff==12?4:2),i=dS(e,2);return{r,c:i[0],cRel:i[1],rRel:i[2]}}function gS(e){var t=dS(e,2),n=e.read_shift(1);return{r:t[0],c:n,cRel:t[1],rRel:t[2]}}function _S(e){var t=e.read_shift(2),n=e.read_shift(2);return{r:t,c:n&255,fQuoted:!!(n&16384),cRel:n>>15,rRel:n>>15}}function vS(e,t,n){var r=n&&n.biff?n.biff:8;if(r>=2&&r<=5)return yS(e,t,n);var i=e.read_shift(r>=12?4:2),a=e.read_shift(2),o=(a&16384)>>14,s=(a&32768)>>15;if(a&=16383,s==1)for(;i>524287;)i-=1048576;if(o==1)for(;a>8191;)a-=16384;return{r:i,c:a,cRel:o,rRel:s}}function yS(e){var t=e.read_shift(2),n=e.read_shift(1),r=(t&32768)>>15,i=(t&16384)>>14;return t&=16383,r==1&&t>=8192&&(t-=16384),i==1&&n>=128&&(n-=256),{r:t,c:n,cRel:i,rRel:r}}function bS(e,t,n){return[(e[e.l++]&96)>>5,fS(e,n.biff>=2&&n.biff<=5?6:8,n)]}function xS(e,t,n){var r=(e[e.l++]&96)>>5,i=e.read_shift(2,`i`),a=8;if(n)switch(n.biff){case 5:e.l+=12,a=6;break;case 12:a=12;break}return[r,i,fS(e,a,n)]}function SS(e,t,n){var r=(e[e.l++]&96)>>5;return e.l+=n&&n.biff>8?12:n.biff<8?6:8,[r]}function CS(e,t,n){var r=(e[e.l++]&96)>>5,i=e.read_shift(2),a=8;if(n)switch(n.biff){case 5:e.l+=12,a=6;break;case 12:a=12;break}return e.l+=a,[r,i]}function wS(e,t,n){return[(e[e.l++]&96)>>5,mS(e,t-1,n)]}function TS(e,t,n){var r=(e[e.l++]&96)>>5;return e.l+=n.biff==2?6:n.biff==12?14:7,[r]}function ES(e){var t=e[e.l+1]&1;return e.l+=4,[t,1]}function DS(e,t,n){e.l+=2;for(var r=e.read_shift(n&&n.biff==2?1:2),i=[],a=0;a<=r;++a)i.push(e.read_shift(n&&n.biff==2?1:2));return i}function OS(e,t,n){var r=e[e.l+1]&255?1:0;return e.l+=2,[r,e.read_shift(n&&n.biff==2?1:2)]}function kS(e,t,n){var r=e[e.l+1]&255?1:0;return e.l+=2,[r,e.read_shift(n&&n.biff==2?1:2)]}function AS(e){var t=e[e.l+1]&255?1:0;return e.l+=2,[t,e.read_shift(2)]}function jS(e,t,n){var r=e[e.l+1]&255?1:0;return e.l+=n&&n.biff==2?3:4,[r]}function MS(e){return[e.read_shift(1),e.read_shift(1)]}function NS(e){return e.read_shift(2),MS(e,2)}function PS(e){return e.read_shift(2),MS(e,2)}function FS(e,t,n){var r=(e[e.l]&96)>>5;return e.l+=1,[r,hS(e,0,n)]}function IS(e,t,n){var r=(e[e.l]&96)>>5;return e.l+=1,[r,vS(e,0,n)]}function LS(e,t,n){var r=(e[e.l]&96)>>5;e.l+=1;var i=e.read_shift(2);return n&&n.biff==5&&(e.l+=12),[r,i,hS(e,0,n)]}function RS(e,t,n){var r=(e[e.l]&96)>>5;e.l+=1;var i=e.read_shift(n&&n.biff<=3?1:2);return[JC[i],qC[i],r]}function zS(e,t,n){var r=e[e.l++],i=e.read_shift(1),a=n&&n.biff<=3?[r==88?-1:0,e.read_shift(1)]:BS(e);return[i,(a[0]===0?qC:KC)[a[1]]]}function BS(e){return[e[e.l+1]>>7,e.read_shift(2)&32767]}function VS(e,t,n){e.l+=n&&n.biff==2?3:4}function HS(e,t,n){return e.l++,n&&n.biff==12?[e.read_shift(4,`i`),0]:[e.read_shift(2),e.read_shift(n&&n.biff==2?1:2)]}function US(e){return e.l++,vy[e.read_shift(1)]}function WS(e){return e.l++,e.read_shift(2)}function GS(e){return e.l++,e.read_shift(1)!==0}function KS(e){return e.l++,Qv(e,8)}function qS(e,t,n){return e.l++,eb(e,t-1,n)}function JS(e,t){var n=[e.read_shift(1)];if(t==12)switch(n[0]){case 2:n[0]=4;break;case 4:n[0]=16;break;case 0:n[0]=1;break;case 1:n[0]=2;break}switch(n[0]){case 4:n[1]=Yy(e,1)?`TRUE`:`FALSE`,t!=12&&(e.l+=7);break;case 37:case 16:n[1]=vy[e[e.l]],e.l+=t==12?4:8;break;case 0:e.l+=8;break;case 1:n[1]=Qv(e,8);break;case 2:n[1]=ib(e,0,{biff:t>0&&t<8?2:t});break;default:throw Error(`Bad SerAr: `+n[0])}return n}function YS(e,t,n){for(var r=e.read_shift(n.biff==12?4:2),i=[],a=0;a!=r;++a)i.push((n.biff==12?Xv:ub)(e,8));return i}function XS(e,t,n){var r=0,i=0;n.biff==12?(r=e.read_shift(4),i=e.read_shift(4)):(i=1+e.read_shift(1),r=1+e.read_shift(2)),n.biff>=2&&n.biff<8&&(--r,--i==0&&(i=256));for(var a=0,o=[];a!=r&&(o[a]=[]);++a)for(var s=0;s!=i;++s)o[a][s]=JS(e,n.biff);return o}function ZS(e,t,n){var r=e.read_shift(1)>>>5&3,i=!n||n.biff>=8?4:2,a=e.read_shift(i);switch(n.biff){case 2:e.l+=5;break;case 3:case 4:e.l+=8;break;case 5:e.l+=12;break}return[r,0,a]}function QS(e,t,n){return n.biff==5?$S(e,t,n):[e.read_shift(1)>>>5&3,e.read_shift(2),e.read_shift(4)]}function $S(e){var t=e.read_shift(1)>>>5&3,n=e.read_shift(2,`i`);e.l+=8;var r=e.read_shift(2);return e.l+=12,[t,n,r]}function eC(e,t,n){var r=e.read_shift(1)>>>5&3;return e.l+=n&&n.biff==2?3:4,[r,e.read_shift(n&&n.biff==2?1:2)]}function tC(e,t,n){return[e.read_shift(1)>>>5&3,e.read_shift(n&&n.biff==2?1:2)]}function nC(e,t,n){var r=e.read_shift(1)>>>5&3;return e.l+=4,n.biff<8&&e.l--,n.biff==12&&(e.l+=2),[r]}function rC(e,t,n){var r=(e[e.l++]&96)>>5,i=e.read_shift(2),a=4;if(n)switch(n.biff){case 5:a=15;break;case 12:a=6;break}return e.l+=a,[r,i]}var iC=ev,aC=ev,oC=ev;function sC(e,t,n){return e.l+=2,[_S(e,4,n)]}function cC(e){return e.l+=6,[]}var lC=sC,uC=cC,dC=cC,fC=sC;function pC(e){return e.l+=2,[Zy(e),e.read_shift(2)&1]}var mC=sC,hC=pC,gC=cC,_C=sC,vC=sC,yC=[`Data`,`All`,`Headers`,`??`,`?Data2`,`??`,`?DataHeaders`,`??`,`Totals`,`??`,`??`,`??`,`?DataTotals`,`??`,`??`,`??`,`?Current`];function bC(e){e.l+=2;var t=e.read_shift(2),n=e.read_shift(2),r=e.read_shift(4),i=e.read_shift(2),a=e.read_shift(2),o=yC[n>>2&31];return{ixti:t,coltype:n&3,rt:o,idx:r,c:i,C:a}}function xC(e){return e.l+=2,[e.read_shift(4)]}function SC(e,t,n){return e.l+=5,e.l+=2,e.l+=n.biff==2?1:4,[`PTGSHEET`]}function CC(e,t,n){return e.l+=n.biff==2?4:5,[`PTGENDSHEET`]}function wC(e){return[e.read_shift(1)>>>5&3,e.read_shift(2)]}function TC(e){return[e.read_shift(1)>>>5&3,e.read_shift(2)]}function EC(e){return e.l+=4,[0,0]}var DC={1:{n:`PtgExp`,f:HS},2:{n:`PtgTbl`,f:oC},3:{n:`PtgAdd`,f:uS},4:{n:`PtgSub`,f:uS},5:{n:`PtgMul`,f:uS},6:{n:`PtgDiv`,f:uS},7:{n:`PtgPower`,f:uS},8:{n:`PtgConcat`,f:uS},9:{n:`PtgLt`,f:uS},10:{n:`PtgLe`,f:uS},11:{n:`PtgEq`,f:uS},12:{n:`PtgGe`,f:uS},13:{n:`PtgGt`,f:uS},14:{n:`PtgNe`,f:uS},15:{n:`PtgIsect`,f:uS},16:{n:`PtgUnion`,f:uS},17:{n:`PtgRange`,f:uS},18:{n:`PtgUplus`,f:uS},19:{n:`PtgUminus`,f:uS},20:{n:`PtgPercent`,f:uS},21:{n:`PtgParen`,f:uS},22:{n:`PtgMissArg`,f:uS},23:{n:`PtgStr`,f:qS},26:{n:`PtgSheet`,f:SC},27:{n:`PtgEndSheet`,f:CC},28:{n:`PtgErr`,f:US},29:{n:`PtgBool`,f:GS},30:{n:`PtgInt`,f:WS},31:{n:`PtgNum`,f:KS},32:{n:`PtgArray`,f:TS},33:{n:`PtgFunc`,f:RS},34:{n:`PtgFuncVar`,f:zS},35:{n:`PtgName`,f:ZS},36:{n:`PtgRef`,f:FS},37:{n:`PtgArea`,f:bS},38:{n:`PtgMemArea`,f:eC},39:{n:`PtgMemErr`,f:iC},40:{n:`PtgMemNoMem`,f:aC},41:{n:`PtgMemFunc`,f:tC},42:{n:`PtgRefErr`,f:nC},43:{n:`PtgAreaErr`,f:SS},44:{n:`PtgRefN`,f:IS},45:{n:`PtgAreaN`,f:wS},46:{n:`PtgMemAreaN`,f:wC},47:{n:`PtgMemNoMemN`,f:TC},57:{n:`PtgNameX`,f:QS},58:{n:`PtgRef3d`,f:LS},59:{n:`PtgArea3d`,f:xS},60:{n:`PtgRefErr3d`,f:rC},61:{n:`PtgAreaErr3d`,f:CS},255:{}},OC={64:32,96:32,65:33,97:33,66:34,98:34,67:35,99:35,68:36,100:36,69:37,101:37,70:38,102:38,71:39,103:39,72:40,104:40,73:41,105:41,74:42,106:42,75:43,107:43,76:44,108:44,77:45,109:45,78:46,110:46,79:47,111:47,88:34,120:34,89:57,121:57,90:58,122:58,91:59,123:59,92:60,124:60,93:61,125:61},kC={1:{n:`PtgElfLel`,f:pC},2:{n:`PtgElfRw`,f:_C},3:{n:`PtgElfCol`,f:lC},6:{n:`PtgElfRwV`,f:vC},7:{n:`PtgElfColV`,f:fC},10:{n:`PtgElfRadical`,f:mC},11:{n:`PtgElfRadicalS`,f:gC},13:{n:`PtgElfColS`,f:uC},15:{n:`PtgElfColSV`,f:dC},16:{n:`PtgElfRadicalLel`,f:hC},25:{n:`PtgList`,f:bC},29:{n:`PtgSxName`,f:xC},255:{}},AC={0:{n:`PtgAttrNoop`,f:EC},1:{n:`PtgAttrSemi`,f:jS},2:{n:`PtgAttrIf`,f:kS},4:{n:`PtgAttrChoose`,f:DS},8:{n:`PtgAttrGoto`,f:OS},16:{n:`PtgAttrSum`,f:VS},32:{n:`PtgAttrBaxcel`,f:ES},33:{n:`PtgAttrBaxcel`,f:ES},64:{n:`PtgAttrSpace`,f:NS},65:{n:`PtgAttrSpaceSemi`,f:PS},128:{n:`PtgAttrIfError`,f:AS},255:{}};function jC(e,t,n,r){if(r.biff<8)return ev(e,t);for(var i=e.l+t,a=[],o=0;o!==n.length;++o)switch(n[o][0]){case`PtgArray`:n[o][1]=XS(e,0,r),a.push(n[o][1]);break;case`PtgMemArea`:n[o][2]=YS(e,n[o][1],r),a.push(n[o][2]);break;case`PtgExp`:r&&r.biff==12&&(n[o][1][1]=e.read_shift(4),a.push(n[o][1]));break;case`PtgList`:case`PtgElfRadicalS`:case`PtgElfColS`:case`PtgElfColSV`:throw`Unsupported `+n[o][0];default:break}return t=i-e.l,t!==0&&a.push(ev(e,t)),a}function MC(e,t,n){for(var r=e.l+t,i,a,o=[];r!=e.l;)t=r-e.l,a=e[e.l],i=DC[a]||DC[OC[a]],(a===24||a===25)&&(i=(a===24?kC:AC)[e[e.l+1]]),!i||!i.f?ev(e,t):o.push([i.n,i.f(e,t,n)]);return o}function NC(e){for(var t=[],n=0;n<e.length;++n){for(var r=e[n],i=[],a=0;a<r.length;++a){var o=r[a];if(o)switch(o[0]){case 2:i.push(`"`+o[1].replace(/"/g,`""`)+`"`);break;default:i.push(o[1])}else i.push(``)}t.push(i.join(`,`))}return t.join(`;`)}var PC={PtgAdd:`+`,PtgConcat:`&`,PtgDiv:`/`,PtgEq:`=`,PtgGe:`>=`,PtgGt:`>`,PtgLe:`<=`,PtgLt:`<`,PtgMul:`*`,PtgNe:`<>`,PtgPower:`^`,PtgSub:`-`};function FC(e,t){if(!e&&!(t&&t.biff<=5&&t.biff>=2))throw Error(`empty sheet name`);return/[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e)?`'`+e+`'`:e}function IC(e,t,n){if(!e)return`SH33TJSERR0`;if(n.biff>8&&(!e.XTI||!e.XTI[t]))return e.SheetNames[t];if(!e.XTI)return`SH33TJSERR6`;var r=e.XTI[t];if(n.biff<8)return t>1e4&&(t-=65536),t<0&&(t=-t),t==0?``:e.XTI[t-1];if(!r)return`SH33TJSERR1`;var i=``;if(n.biff>8)switch(e[r[0]][0]){case 357:return i=r[1]==-1?`#REF`:e.SheetNames[r[1]],r[1]==r[2]?i:i+`:`+e.SheetNames[r[2]];case 358:return n.SID==null?`SH33TJSSAME`+e[r[0]][0]:e.SheetNames[n.SID];case 355:default:return`SH33TJSSRC`+e[r[0]][0]}switch(e[r[0]][0][0]){case 1025:return i=r[1]==-1?`#REF`:e.SheetNames[r[1]]||`SH33TJSERR3`,r[1]==r[2]?i:i+`:`+e.SheetNames[r[2]];case 14849:return e[r[0]].slice(1).map(function(e){return e.Name}).join(`;;`);default:return e[r[0]][0][3]?(i=r[1]==-1?`#REF`:e[r[0]][0][3][r[1]]||`SH33TJSERR4`,r[1]==r[2]?i:i+`:`+e[r[0]][0][3][r[2]]):`SH33TJSERR2`}}function LC(e,t,n){var r=IC(e,t,n);return r==`#REF`?r:FC(r,n)}function RC(e,t,n,r,i){var a=i&&i.biff||8,o={s:{c:0,r:0},e:{c:0,r:0}},s=[],c,l,u,d=0,f=0,p,m=``;if(!e[0]||!e[0][0])return``;for(var h=-1,g=``,_=0,v=e[0].length;_<v;++_){var y=e[0][_];switch(y[0]){case`PtgUminus`:s.push(`-`+s.pop());break;case`PtgUplus`:s.push(`+`+s.pop());break;case`PtgPercent`:s.push(s.pop()+`%`);break;case`PtgAdd`:case`PtgConcat`:case`PtgDiv`:case`PtgEq`:case`PtgGe`:case`PtgGt`:case`PtgLe`:case`PtgLt`:case`PtgMul`:case`PtgNe`:case`PtgPower`:case`PtgSub`:if(c=s.pop(),l=s.pop(),h>=0){switch(e[0][h][1][0]){case 0:g=Bg(` `,e[0][h][1][1]);break;case 1:g=Bg(`\r`,e[0][h][1][1]);break;default:if(g=``,i.WTF)throw Error(`Unexpected PtgAttrSpaceType `+e[0][h][1][0])}l+=g,h=-1}s.push(l+PC[y[0]]+c);break;case`PtgIsect`:c=s.pop(),l=s.pop(),s.push(l+` `+c);break;case`PtgUnion`:c=s.pop(),l=s.pop(),s.push(l+`,`+c);break;case`PtgRange`:c=s.pop(),l=s.pop(),s.push(l+`:`+c);break;case`PtgAttrChoose`:break;case`PtgAttrGoto`:break;case`PtgAttrIf`:break;case`PtgAttrIfError`:break;case`PtgRef`:u=nv(y[1][1],o,i),s.push(iv(u,a));break;case`PtgRefN`:u=n?nv(y[1][1],n,i):y[1][1],s.push(iv(u,a));break;case`PtgRef3d`:d=y[1][1],u=nv(y[1][2],o,i),m=LC(r,d,i),s.push(m+`!`+iv(u,a));break;case`PtgFunc`:case`PtgFuncVar`:var b=y[1][0],x=y[1][1];b||=0,b&=127;var S=b==0?[]:s.slice(-b);s.length-=b,x===`User`&&(x=S.shift()),s.push(x+`(`+S.join(`,`)+`)`);break;case`PtgBool`:s.push(y[1]?`TRUE`:`FALSE`);break;case`PtgInt`:s.push(y[1]);break;case`PtgNum`:s.push(String(y[1]));break;case`PtgStr`:s.push(`"`+y[1].replace(/"/g,`""`)+`"`);break;case`PtgErr`:s.push(y[1]);break;case`PtgAreaN`:p=rv(y[1][1],n?{s:n}:o,i),s.push(av(p,i));break;case`PtgArea`:p=rv(y[1][1],o,i),s.push(av(p,i));break;case`PtgArea3d`:d=y[1][1],p=y[1][2],m=LC(r,d,i),s.push(m+`!`+av(p,i));break;case`PtgAttrSum`:s.push(`SUM(`+s.pop()+`)`);break;case`PtgAttrBaxcel`:case`PtgAttrSemi`:break;case`PtgName`:f=y[1][2];var C=(r.names||[])[f-1]||(r[0]||[])[f],w=C?C.Name:`SH33TJSNAME`+String(f);w&&w.slice(0,6)==`_xlfn.`&&!i.xlfn&&(w=w.slice(6)),s.push(w);break;case`PtgNameX`:var T=y[1][1];f=y[1][2];var E;if(i.biff<=5)T<0&&(T=-T),r[T]&&(E=r[T][f]);else{var D=``;if(((r[T]||[])[0]||[])[0]==14849||(((r[T]||[])[0]||[])[0]==1025?r[T][f]&&r[T][f].itab>0&&(D=r.SheetNames[r[T][f].itab-1]+`!`):D=r.SheetNames[f-1]+`!`),r[T]&&r[T][f])D+=r[T][f].Name;else if(r[0]&&r[0][f])D+=r[0][f].Name;else{var O=(IC(r,T,i)||``).split(`;;`);O[f-1]?D=O[f-1]:D+=`SH33TJSERRX`}s.push(D);break}E||={Name:`SH33TJSERRY`},s.push(E.Name);break;case`PtgParen`:var k=`(`,A=`)`;if(h>=0){switch(g=``,e[0][h][1][0]){case 2:k=Bg(` `,e[0][h][1][1])+k;break;case 3:k=Bg(`\r`,e[0][h][1][1])+k;break;case 4:A=Bg(` `,e[0][h][1][1])+A;break;case 5:A=Bg(`\r`,e[0][h][1][1])+A;break;default:if(i.WTF)throw Error(`Unexpected PtgAttrSpaceType `+e[0][h][1][0])}h=-1}s.push(k+s.pop()+A);break;case`PtgRefErr`:s.push(`#REF!`);break;case`PtgRefErr3d`:s.push(`#REF!`);break;case`PtgExp`:u={c:y[1][1],r:y[1][0]};var ee={c:n.c,r:n.r};if(r.sharedf[gv(u)]){var te=r.sharedf[gv(u)];s.push(RC(te,o,ee,r,i))}else{var ne=!1;for(c=0;c!=r.arrayf.length;++c)if(l=r.arrayf[c],!(u.c<l[0].s.c||u.c>l[0].e.c)&&!(u.r<l[0].s.r||u.r>l[0].e.r)){s.push(RC(l[1],o,ee,r,i)),ne=!0;break}ne||s.push(y[1])}break;case`PtgArray`:s.push(`{`+NC(y[1])+`}`);break;case`PtgMemArea`:break;case`PtgAttrSpace`:case`PtgAttrSpaceSemi`:h=_;break;case`PtgTbl`:break;case`PtgMemErr`:break;case`PtgMissArg`:s.push(``);break;case`PtgAreaErr`:s.push(`#REF!`);break;case`PtgAreaErr3d`:s.push(`#REF!`);break;case`PtgList`:s.push(`Table`+y[1].idx+`[#`+y[1].rt+`]`);break;case`PtgMemAreaN`:case`PtgMemNoMemN`:case`PtgAttrNoop`:case`PtgSheet`:case`PtgEndSheet`:break;case`PtgMemFunc`:break;case`PtgMemNoMem`:break;case`PtgElfCol`:case`PtgElfColS`:case`PtgElfColSV`:case`PtgElfColV`:case`PtgElfLel`:case`PtgElfRadical`:case`PtgElfRadicalLel`:case`PtgElfRadicalS`:case`PtgElfRw`:case`PtgElfRwV`:throw Error(`Unsupported ELFs`);case`PtgSxName`:throw Error(`Unrecognized Formula Token: `+String(y));default:throw Error(`Unrecognized Formula Token: `+String(y))}if(i.biff!=3&&h>=0&&[`PtgAttrSpace`,`PtgAttrSpaceSemi`,`PtgAttrGoto`].indexOf(e[0][_][0])==-1){y=e[0][h];var re=!0;switch(y[1][0]){case 4:re=!1;case 0:g=Bg(` `,y[1][1]);break;case 5:re=!1;case 1:g=Bg(`\r`,y[1][1]);break;default:if(g=``,i.WTF)throw Error(`Unexpected PtgAttrSpaceType `+y[1][0])}s.push((re?g:``)+s.pop()+(re?``:g)),h=-1}}if(s.length>1&&i.WTF)throw Error(`bad formula stack`);return s[0]}function zC(e){if(e==null){var t=X(8);return t.write_shift(1,3),t.write_shift(1,0),t.write_shift(2,0),t.write_shift(2,0),t.write_shift(2,65535),t}else if(typeof e==`number`)return $v(e);return $v(0)}function BC(e,t,n,r,i){var a=cb(t,n,i),o=zC(e.v),s=X(6);s.write_shift(2,33),s.write_shift(4,0);for(var c=X(e.bf.length),l=0;l<e.bf.length;++l)c[l]=e.bf[l];return rh([a,o,s,c])}function VC(e,t,n){var r=MC(e,e.read_shift(4),n),i=e.read_shift(4);return[r,i>0?jC(e,i,r,n):null]}var HC=VC,UC=VC,WC=VC,GC=VC,KC={0:`BEEP`,1:`OPEN`,2:`OPEN.LINKS`,3:`CLOSE.ALL`,4:`SAVE`,5:`SAVE.AS`,6:`FILE.DELETE`,7:`PAGE.SETUP`,8:`PRINT`,9:`PRINTER.SETUP`,10:`QUIT`,11:`NEW.WINDOW`,12:`ARRANGE.ALL`,13:`WINDOW.SIZE`,14:`WINDOW.MOVE`,15:`FULL`,16:`CLOSE`,17:`RUN`,22:`SET.PRINT.AREA`,23:`SET.PRINT.TITLES`,24:`SET.PAGE.BREAK`,25:`REMOVE.PAGE.BREAK`,26:`FONT`,27:`DISPLAY`,28:`PROTECT.DOCUMENT`,29:`PRECISION`,30:`A1.R1C1`,31:`CALCULATE.NOW`,32:`CALCULATION`,34:`DATA.FIND`,35:`EXTRACT`,36:`DATA.DELETE`,37:`SET.DATABASE`,38:`SET.CRITERIA`,39:`SORT`,40:`DATA.SERIES`,41:`TABLE`,42:`FORMAT.NUMBER`,43:`ALIGNMENT`,44:`STYLE`,45:`BORDER`,46:`CELL.PROTECTION`,47:`COLUMN.WIDTH`,48:`UNDO`,49:`CUT`,50:`COPY`,51:`PASTE`,52:`CLEAR`,53:`PASTE.SPECIAL`,54:`EDIT.DELETE`,55:`INSERT`,56:`FILL.RIGHT`,57:`FILL.DOWN`,61:`DEFINE.NAME`,62:`CREATE.NAMES`,63:`FORMULA.GOTO`,64:`FORMULA.FIND`,65:`SELECT.LAST.CELL`,66:`SHOW.ACTIVE.CELL`,67:`GALLERY.AREA`,68:`GALLERY.BAR`,69:`GALLERY.COLUMN`,70:`GALLERY.LINE`,71:`GALLERY.PIE`,72:`GALLERY.SCATTER`,73:`COMBINATION`,74:`PREFERRED`,75:`ADD.OVERLAY`,76:`GRIDLINES`,77:`SET.PREFERRED`,78:`AXES`,79:`LEGEND`,80:`ATTACH.TEXT`,81:`ADD.ARROW`,82:`SELECT.CHART`,83:`SELECT.PLOT.AREA`,84:`PATTERNS`,85:`MAIN.CHART`,86:`OVERLAY`,87:`SCALE`,88:`FORMAT.LEGEND`,89:`FORMAT.TEXT`,90:`EDIT.REPEAT`,91:`PARSE`,92:`JUSTIFY`,93:`HIDE`,94:`UNHIDE`,95:`WORKSPACE`,96:`FORMULA`,97:`FORMULA.FILL`,98:`FORMULA.ARRAY`,99:`DATA.FIND.NEXT`,100:`DATA.FIND.PREV`,101:`FORMULA.FIND.NEXT`,102:`FORMULA.FIND.PREV`,103:`ACTIVATE`,104:`ACTIVATE.NEXT`,105:`ACTIVATE.PREV`,106:`UNLOCKED.NEXT`,107:`UNLOCKED.PREV`,108:`COPY.PICTURE`,109:`SELECT`,110:`DELETE.NAME`,111:`DELETE.FORMAT`,112:`VLINE`,113:`HLINE`,114:`VPAGE`,115:`HPAGE`,116:`VSCROLL`,117:`HSCROLL`,118:`ALERT`,119:`NEW`,120:`CANCEL.COPY`,121:`SHOW.CLIPBOARD`,122:`MESSAGE`,124:`PASTE.LINK`,125:`APP.ACTIVATE`,126:`DELETE.ARROW`,127:`ROW.HEIGHT`,128:`FORMAT.MOVE`,129:`FORMAT.SIZE`,130:`FORMULA.REPLACE`,131:`SEND.KEYS`,132:`SELECT.SPECIAL`,133:`APPLY.NAMES`,134:`REPLACE.FONT`,135:`FREEZE.PANES`,136:`SHOW.INFO`,137:`SPLIT`,138:`ON.WINDOW`,139:`ON.DATA`,140:`DISABLE.INPUT`,142:`OUTLINE`,143:`LIST.NAMES`,144:`FILE.CLOSE`,145:`SAVE.WORKBOOK`,146:`DATA.FORM`,147:`COPY.CHART`,148:`ON.TIME`,149:`WAIT`,150:`FORMAT.FONT`,151:`FILL.UP`,152:`FILL.LEFT`,153:`DELETE.OVERLAY`,155:`SHORT.MENUS`,159:`SET.UPDATE.STATUS`,161:`COLOR.PALETTE`,162:`DELETE.STYLE`,163:`WINDOW.RESTORE`,164:`WINDOW.MAXIMIZE`,166:`CHANGE.LINK`,167:`CALCULATE.DOCUMENT`,168:`ON.KEY`,169:`APP.RESTORE`,170:`APP.MOVE`,171:`APP.SIZE`,172:`APP.MINIMIZE`,173:`APP.MAXIMIZE`,174:`BRING.TO.FRONT`,175:`SEND.TO.BACK`,185:`MAIN.CHART.TYPE`,186:`OVERLAY.CHART.TYPE`,187:`SELECT.END`,188:`OPEN.MAIL`,189:`SEND.MAIL`,190:`STANDARD.FONT`,191:`CONSOLIDATE`,192:`SORT.SPECIAL`,193:`GALLERY.3D.AREA`,194:`GALLERY.3D.COLUMN`,195:`GALLERY.3D.LINE`,196:`GALLERY.3D.PIE`,197:`VIEW.3D`,198:`GOAL.SEEK`,199:`WORKGROUP`,200:`FILL.GROUP`,201:`UPDATE.LINK`,202:`PROMOTE`,203:`DEMOTE`,204:`SHOW.DETAIL`,206:`UNGROUP`,207:`OBJECT.PROPERTIES`,208:`SAVE.NEW.OBJECT`,209:`SHARE`,210:`SHARE.NAME`,211:`DUPLICATE`,212:`APPLY.STYLE`,213:`ASSIGN.TO.OBJECT`,214:`OBJECT.PROTECTION`,215:`HIDE.OBJECT`,216:`SET.EXTRACT`,217:`CREATE.PUBLISHER`,218:`SUBSCRIBE.TO`,219:`ATTRIBUTES`,220:`SHOW.TOOLBAR`,222:`PRINT.PREVIEW`,223:`EDIT.COLOR`,224:`SHOW.LEVELS`,225:`FORMAT.MAIN`,226:`FORMAT.OVERLAY`,227:`ON.RECALC`,228:`EDIT.SERIES`,229:`DEFINE.STYLE`,240:`LINE.PRINT`,243:`ENTER.DATA`,249:`GALLERY.RADAR`,250:`MERGE.STYLES`,251:`EDITION.OPTIONS`,252:`PASTE.PICTURE`,253:`PASTE.PICTURE.LINK`,254:`SPELLING`,256:`ZOOM`,259:`INSERT.OBJECT`,260:`WINDOW.MINIMIZE`,265:`SOUND.NOTE`,266:`SOUND.PLAY`,267:`FORMAT.SHAPE`,268:`EXTEND.POLYGON`,269:`FORMAT.AUTO`,272:`GALLERY.3D.BAR`,273:`GALLERY.3D.SURFACE`,274:`FILL.AUTO`,276:`CUSTOMIZE.TOOLBAR`,277:`ADD.TOOL`,278:`EDIT.OBJECT`,279:`ON.DOUBLECLICK`,280:`ON.ENTRY`,281:`WORKBOOK.ADD`,282:`WORKBOOK.MOVE`,283:`WORKBOOK.COPY`,284:`WORKBOOK.OPTIONS`,285:`SAVE.WORKSPACE`,288:`CHART.WIZARD`,289:`DELETE.TOOL`,290:`MOVE.TOOL`,291:`WORKBOOK.SELECT`,292:`WORKBOOK.ACTIVATE`,293:`ASSIGN.TO.TOOL`,295:`COPY.TOOL`,296:`RESET.TOOL`,297:`CONSTRAIN.NUMERIC`,298:`PASTE.TOOL`,302:`WORKBOOK.NEW`,305:`SCENARIO.CELLS`,306:`SCENARIO.DELETE`,307:`SCENARIO.ADD`,308:`SCENARIO.EDIT`,309:`SCENARIO.SHOW`,310:`SCENARIO.SHOW.NEXT`,311:`SCENARIO.SUMMARY`,312:`PIVOT.TABLE.WIZARD`,313:`PIVOT.FIELD.PROPERTIES`,314:`PIVOT.FIELD`,315:`PIVOT.ITEM`,316:`PIVOT.ADD.FIELDS`,318:`OPTIONS.CALCULATION`,319:`OPTIONS.EDIT`,320:`OPTIONS.VIEW`,321:`ADDIN.MANAGER`,322:`MENU.EDITOR`,323:`ATTACH.TOOLBARS`,324:`VBAActivate`,325:`OPTIONS.CHART`,328:`VBA.INSERT.FILE`,330:`VBA.PROCEDURE.DEFINITION`,336:`ROUTING.SLIP`,338:`ROUTE.DOCUMENT`,339:`MAIL.LOGON`,342:`INSERT.PICTURE`,343:`EDIT.TOOL`,344:`GALLERY.DOUGHNUT`,350:`CHART.TREND`,352:`PIVOT.ITEM.PROPERTIES`,354:`WORKBOOK.INSERT`,355:`OPTIONS.TRANSITION`,356:`OPTIONS.GENERAL`,370:`FILTER.ADVANCED`,373:`MAIL.ADD.MAILER`,374:`MAIL.DELETE.MAILER`,375:`MAIL.REPLY`,376:`MAIL.REPLY.ALL`,377:`MAIL.FORWARD`,378:`MAIL.NEXT.LETTER`,379:`DATA.LABEL`,380:`INSERT.TITLE`,381:`FONT.PROPERTIES`,382:`MACRO.OPTIONS`,383:`WORKBOOK.HIDE`,384:`WORKBOOK.UNHIDE`,385:`WORKBOOK.DELETE`,386:`WORKBOOK.NAME`,388:`GALLERY.CUSTOM`,390:`ADD.CHART.AUTOFORMAT`,391:`DELETE.CHART.AUTOFORMAT`,392:`CHART.ADD.DATA`,393:`AUTO.OUTLINE`,394:`TAB.ORDER`,395:`SHOW.DIALOG`,396:`SELECT.ALL`,397:`UNGROUP.SHEETS`,398:`SUBTOTAL.CREATE`,399:`SUBTOTAL.REMOVE`,400:`RENAME.OBJECT`,412:`WORKBOOK.SCROLL`,413:`WORKBOOK.NEXT`,414:`WORKBOOK.PREV`,415:`WORKBOOK.TAB.SPLIT`,416:`FULL.SCREEN`,417:`WORKBOOK.PROTECT`,420:`SCROLLBAR.PROPERTIES`,421:`PIVOT.SHOW.PAGES`,422:`TEXT.TO.COLUMNS`,423:`FORMAT.CHARTTYPE`,424:`LINK.FORMAT`,425:`TRACER.DISPLAY`,430:`TRACER.NAVIGATE`,431:`TRACER.CLEAR`,432:`TRACER.ERROR`,433:`PIVOT.FIELD.GROUP`,434:`PIVOT.FIELD.UNGROUP`,435:`CHECKBOX.PROPERTIES`,436:`LABEL.PROPERTIES`,437:`LISTBOX.PROPERTIES`,438:`EDITBOX.PROPERTIES`,439:`PIVOT.REFRESH`,440:`LINK.COMBO`,441:`OPEN.TEXT`,442:`HIDE.DIALOG`,443:`SET.DIALOG.FOCUS`,444:`ENABLE.OBJECT`,445:`PUSHBUTTON.PROPERTIES`,446:`SET.DIALOG.DEFAULT`,447:`FILTER`,448:`FILTER.SHOW.ALL`,449:`CLEAR.OUTLINE`,450:`FUNCTION.WIZARD`,451:`ADD.LIST.ITEM`,452:`SET.LIST.ITEM`,453:`REMOVE.LIST.ITEM`,454:`SELECT.LIST.ITEM`,455:`SET.CONTROL.VALUE`,456:`SAVE.COPY.AS`,458:`OPTIONS.LISTS.ADD`,459:`OPTIONS.LISTS.DELETE`,460:`SERIES.AXES`,461:`SERIES.X`,462:`SERIES.Y`,463:`ERRORBAR.X`,464:`ERRORBAR.Y`,465:`FORMAT.CHART`,466:`SERIES.ORDER`,467:`MAIL.LOGOFF`,468:`CLEAR.ROUTING.SLIP`,469:`APP.ACTIVATE.MICROSOFT`,470:`MAIL.EDIT.MAILER`,471:`ON.SHEET`,472:`STANDARD.WIDTH`,473:`SCENARIO.MERGE`,474:`SUMMARY.INFO`,475:`FIND.FILE`,476:`ACTIVE.CELL.FONT`,477:`ENABLE.TIPWIZARD`,478:`VBA.MAKE.ADDIN`,480:`INSERTDATATABLE`,481:`WORKGROUP.OPTIONS`,482:`MAIL.SEND.MAILER`,485:`AUTOCORRECT`,489:`POST.DOCUMENT`,491:`PICKLIST`,493:`VIEW.SHOW`,494:`VIEW.DEFINE`,495:`VIEW.DELETE`,509:`SHEET.BACKGROUND`,510:`INSERT.MAP.OBJECT`,511:`OPTIONS.MENONO`,517:`MSOCHECKS`,518:`NORMAL`,519:`LAYOUT`,520:`RM.PRINT.AREA`,521:`CLEAR.PRINT.AREA`,522:`ADD.PRINT.AREA`,523:`MOVE.BRK`,545:`HIDECURR.NOTE`,546:`HIDEALL.NOTES`,547:`DELETE.NOTE`,548:`TRAVERSE.NOTES`,549:`ACTIVATE.NOTES`,620:`PROTECT.REVISIONS`,621:`UNPROTECT.REVISIONS`,647:`OPTIONS.ME`,653:`WEB.PUBLISH`,667:`NEWWEBQUERY`,673:`PIVOT.TABLE.CHART`,753:`OPTIONS.SAVE`,755:`OPTIONS.SPELL`,808:`HIDEALL.INKANNOTS`},qC={0:`COUNT`,1:`IF`,2:`ISNA`,3:`ISERROR`,4:`SUM`,5:`AVERAGE`,6:`MIN`,7:`MAX`,8:`ROW`,9:`COLUMN`,10:`NA`,11:`NPV`,12:`STDEV`,13:`DOLLAR`,14:`FIXED`,15:`SIN`,16:`COS`,17:`TAN`,18:`ATAN`,19:`PI`,20:`SQRT`,21:`EXP`,22:`LN`,23:`LOG10`,24:`ABS`,25:`INT`,26:`SIGN`,27:`ROUND`,28:`LOOKUP`,29:`INDEX`,30:`REPT`,31:`MID`,32:`LEN`,33:`VALUE`,34:`TRUE`,35:`FALSE`,36:`AND`,37:`OR`,38:`NOT`,39:`MOD`,40:`DCOUNT`,41:`DSUM`,42:`DAVERAGE`,43:`DMIN`,44:`DMAX`,45:`DSTDEV`,46:`VAR`,47:`DVAR`,48:`TEXT`,49:`LINEST`,50:`TREND`,51:`LOGEST`,52:`GROWTH`,53:`GOTO`,54:`HALT`,55:`RETURN`,56:`PV`,57:`FV`,58:`NPER`,59:`PMT`,60:`RATE`,61:`MIRR`,62:`IRR`,63:`RAND`,64:`MATCH`,65:`DATE`,66:`TIME`,67:`DAY`,68:`MONTH`,69:`YEAR`,70:`WEEKDAY`,71:`HOUR`,72:`MINUTE`,73:`SECOND`,74:`NOW`,75:`AREAS`,76:`ROWS`,77:`COLUMNS`,78:`OFFSET`,79:`ABSREF`,80:`RELREF`,81:`ARGUMENT`,82:`SEARCH`,83:`TRANSPOSE`,84:`ERROR`,85:`STEP`,86:`TYPE`,87:`ECHO`,88:`SET.NAME`,89:`CALLER`,90:`DEREF`,91:`WINDOWS`,92:`SERIES`,93:`DOCUMENTS`,94:`ACTIVE.CELL`,95:`SELECTION`,96:`RESULT`,97:`ATAN2`,98:`ASIN`,99:`ACOS`,100:`CHOOSE`,101:`HLOOKUP`,102:`VLOOKUP`,103:`LINKS`,104:`INPUT`,105:`ISREF`,106:`GET.FORMULA`,107:`GET.NAME`,108:`SET.VALUE`,109:`LOG`,110:`EXEC`,111:`CHAR`,112:`LOWER`,113:`UPPER`,114:`PROPER`,115:`LEFT`,116:`RIGHT`,117:`EXACT`,118:`TRIM`,119:`REPLACE`,120:`SUBSTITUTE`,121:`CODE`,122:`NAMES`,123:`DIRECTORY`,124:`FIND`,125:`CELL`,126:`ISERR`,127:`ISTEXT`,128:`ISNUMBER`,129:`ISBLANK`,130:`T`,131:`N`,132:`FOPEN`,133:`FCLOSE`,134:`FSIZE`,135:`FREADLN`,136:`FREAD`,137:`FWRITELN`,138:`FWRITE`,139:`FPOS`,140:`DATEVALUE`,141:`TIMEVALUE`,142:`SLN`,143:`SYD`,144:`DDB`,145:`GET.DEF`,146:`REFTEXT`,147:`TEXTREF`,148:`INDIRECT`,149:`REGISTER`,150:`CALL`,151:`ADD.BAR`,152:`ADD.MENU`,153:`ADD.COMMAND`,154:`ENABLE.COMMAND`,155:`CHECK.COMMAND`,156:`RENAME.COMMAND`,157:`SHOW.BAR`,158:`DELETE.MENU`,159:`DELETE.COMMAND`,160:`GET.CHART.ITEM`,161:`DIALOG.BOX`,162:`CLEAN`,163:`MDETERM`,164:`MINVERSE`,165:`MMULT`,166:`FILES`,167:`IPMT`,168:`PPMT`,169:`COUNTA`,170:`CANCEL.KEY`,171:`FOR`,172:`WHILE`,173:`BREAK`,174:`NEXT`,175:`INITIATE`,176:`REQUEST`,177:`POKE`,178:`EXECUTE`,179:`TERMINATE`,180:`RESTART`,181:`HELP`,182:`GET.BAR`,183:`PRODUCT`,184:`FACT`,185:`GET.CELL`,186:`GET.WORKSPACE`,187:`GET.WINDOW`,188:`GET.DOCUMENT`,189:`DPRODUCT`,190:`ISNONTEXT`,191:`GET.NOTE`,192:`NOTE`,193:`STDEVP`,194:`VARP`,195:`DSTDEVP`,196:`DVARP`,197:`TRUNC`,198:`ISLOGICAL`,199:`DCOUNTA`,200:`DELETE.BAR`,201:`UNREGISTER`,204:`USDOLLAR`,205:`FINDB`,206:`SEARCHB`,207:`REPLACEB`,208:`LEFTB`,209:`RIGHTB`,210:`MIDB`,211:`LENB`,212:`ROUNDUP`,213:`ROUNDDOWN`,214:`ASC`,215:`DBCS`,216:`RANK`,219:`ADDRESS`,220:`DAYS360`,221:`TODAY`,222:`VDB`,223:`ELSE`,224:`ELSE.IF`,225:`END.IF`,226:`FOR.CELL`,227:`MEDIAN`,228:`SUMPRODUCT`,229:`SINH`,230:`COSH`,231:`TANH`,232:`ASINH`,233:`ACOSH`,234:`ATANH`,235:`DGET`,236:`CREATE.OBJECT`,237:`VOLATILE`,238:`LAST.ERROR`,239:`CUSTOM.UNDO`,240:`CUSTOM.REPEAT`,241:`FORMULA.CONVERT`,242:`GET.LINK.INFO`,243:`TEXT.BOX`,244:`INFO`,245:`GROUP`,246:`GET.OBJECT`,247:`DB`,248:`PAUSE`,251:`RESUME`,252:`FREQUENCY`,253:`ADD.TOOLBAR`,254:`DELETE.TOOLBAR`,255:`User`,256:`RESET.TOOLBAR`,257:`EVALUATE`,258:`GET.TOOLBAR`,259:`GET.TOOL`,260:`SPELLING.CHECK`,261:`ERROR.TYPE`,262:`APP.TITLE`,263:`WINDOW.TITLE`,264:`SAVE.TOOLBAR`,265:`ENABLE.TOOL`,266:`PRESS.TOOL`,267:`REGISTER.ID`,268:`GET.WORKBOOK`,269:`AVEDEV`,270:`BETADIST`,271:`GAMMALN`,272:`BETAINV`,273:`BINOMDIST`,274:`CHIDIST`,275:`CHIINV`,276:`COMBIN`,277:`CONFIDENCE`,278:`CRITBINOM`,279:`EVEN`,280:`EXPONDIST`,281:`FDIST`,282:`FINV`,283:`FISHER`,284:`FISHERINV`,285:`FLOOR`,286:`GAMMADIST`,287:`GAMMAINV`,288:`CEILING`,289:`HYPGEOMDIST`,290:`LOGNORMDIST`,291:`LOGINV`,292:`NEGBINOMDIST`,293:`NORMDIST`,294:`NORMSDIST`,295:`NORMINV`,296:`NORMSINV`,297:`STANDARDIZE`,298:`ODD`,299:`PERMUT`,300:`POISSON`,301:`TDIST`,302:`WEIBULL`,303:`SUMXMY2`,304:`SUMX2MY2`,305:`SUMX2PY2`,306:`CHITEST`,307:`CORREL`,308:`COVAR`,309:`FORECAST`,310:`FTEST`,311:`INTERCEPT`,312:`PEARSON`,313:`RSQ`,314:`STEYX`,315:`SLOPE`,316:`TTEST`,317:`PROB`,318:`DEVSQ`,319:`GEOMEAN`,320:`HARMEAN`,321:`SUMSQ`,322:`KURT`,323:`SKEW`,324:`ZTEST`,325:`LARGE`,326:`SMALL`,327:`QUARTILE`,328:`PERCENTILE`,329:`PERCENTRANK`,330:`MODE`,331:`TRIMMEAN`,332:`TINV`,334:`MOVIE.COMMAND`,335:`GET.MOVIE`,336:`CONCATENATE`,337:`POWER`,338:`PIVOT.ADD.DATA`,339:`GET.PIVOT.TABLE`,340:`GET.PIVOT.FIELD`,341:`GET.PIVOT.ITEM`,342:`RADIANS`,343:`DEGREES`,344:`SUBTOTAL`,345:`SUMIF`,346:`COUNTIF`,347:`COUNTBLANK`,348:`SCENARIO.GET`,349:`OPTIONS.LISTS.GET`,350:`ISPMT`,351:`DATEDIF`,352:`DATESTRING`,353:`NUMBERSTRING`,354:`ROMAN`,355:`OPEN.DIALOG`,356:`SAVE.DIALOG`,357:`VIEW.GET`,358:`GETPIVOTDATA`,359:`HYPERLINK`,360:`PHONETIC`,361:`AVERAGEA`,362:`MAXA`,363:`MINA`,364:`STDEVPA`,365:`VARPA`,366:`STDEVA`,367:`VARA`,368:`BAHTTEXT`,369:`THAIDAYOFWEEK`,370:`THAIDIGIT`,371:`THAIMONTHOFYEAR`,372:`THAINUMSOUND`,373:`THAINUMSTRING`,374:`THAISTRINGLENGTH`,375:`ISTHAIDIGIT`,376:`ROUNDBAHTDOWN`,377:`ROUNDBAHTUP`,378:`THAIYEAR`,379:`RTD`,380:`CUBEVALUE`,381:`CUBEMEMBER`,382:`CUBEMEMBERPROPERTY`,383:`CUBERANKEDMEMBER`,384:`HEX2BIN`,385:`HEX2DEC`,386:`HEX2OCT`,387:`DEC2BIN`,388:`DEC2HEX`,389:`DEC2OCT`,390:`OCT2BIN`,391:`OCT2HEX`,392:`OCT2DEC`,393:`BIN2DEC`,394:`BIN2OCT`,395:`BIN2HEX`,396:`IMSUB`,397:`IMDIV`,398:`IMPOWER`,399:`IMABS`,400:`IMSQRT`,401:`IMLN`,402:`IMLOG2`,403:`IMLOG10`,404:`IMSIN`,405:`IMCOS`,406:`IMEXP`,407:`IMARGUMENT`,408:`IMCONJUGATE`,409:`IMAGINARY`,410:`IMREAL`,411:`COMPLEX`,412:`IMSUM`,413:`IMPRODUCT`,414:`SERIESSUM`,415:`FACTDOUBLE`,416:`SQRTPI`,417:`QUOTIENT`,418:`DELTA`,419:`GESTEP`,420:`ISEVEN`,421:`ISODD`,422:`MROUND`,423:`ERF`,424:`ERFC`,425:`BESSELJ`,426:`BESSELK`,427:`BESSELY`,428:`BESSELI`,429:`XIRR`,430:`XNPV`,431:`PRICEMAT`,432:`YIELDMAT`,433:`INTRATE`,434:`RECEIVED`,435:`DISC`,436:`PRICEDISC`,437:`YIELDDISC`,438:`TBILLEQ`,439:`TBILLPRICE`,440:`TBILLYIELD`,441:`PRICE`,442:`YIELD`,443:`DOLLARDE`,444:`DOLLARFR`,445:`NOMINAL`,446:`EFFECT`,447:`CUMPRINC`,448:`CUMIPMT`,449:`EDATE`,450:`EOMONTH`,451:`YEARFRAC`,452:`COUPDAYBS`,453:`COUPDAYS`,454:`COUPDAYSNC`,455:`COUPNCD`,456:`COUPNUM`,457:`COUPPCD`,458:`DURATION`,459:`MDURATION`,460:`ODDLPRICE`,461:`ODDLYIELD`,462:`ODDFPRICE`,463:`ODDFYIELD`,464:`RANDBETWEEN`,465:`WEEKNUM`,466:`AMORDEGRC`,467:`AMORLINC`,468:`CONVERT`,724:`SHEETJS`,469:`ACCRINT`,470:`ACCRINTM`,471:`WORKDAY`,472:`NETWORKDAYS`,473:`GCD`,474:`MULTINOMIAL`,475:`LCM`,476:`FVSCHEDULE`,477:`CUBEKPIMEMBER`,478:`CUBESET`,479:`CUBESETCOUNT`,480:`IFERROR`,481:`COUNTIFS`,482:`SUMIFS`,483:`AVERAGEIF`,484:`AVERAGEIFS`},JC={2:1,3:1,10:0,15:1,16:1,17:1,18:1,19:0,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:2,30:2,31:3,32:1,33:1,34:0,35:0,38:1,39:2,40:3,41:3,42:3,43:3,44:3,45:3,47:3,48:2,53:1,61:3,63:0,65:3,66:3,67:1,68:1,69:1,70:1,71:1,72:1,73:1,74:0,75:1,76:1,77:1,79:2,80:2,83:1,85:0,86:1,89:0,90:1,94:0,95:0,97:2,98:1,99:1,101:3,102:3,105:1,106:1,108:2,111:1,112:1,113:1,114:1,117:2,118:1,119:4,121:1,126:1,127:1,128:1,129:1,130:1,131:1,133:1,134:1,135:1,136:2,137:2,138:2,140:1,141:1,142:3,143:4,144:4,161:1,162:1,163:1,164:1,165:2,172:1,175:2,176:2,177:3,178:2,179:1,184:1,186:1,189:3,190:1,195:3,196:3,197:1,198:1,199:3,201:1,207:4,210:3,211:1,212:2,213:2,214:1,215:1,225:0,229:1,230:1,231:1,232:1,233:1,234:1,235:3,244:1,247:4,252:2,257:1,261:1,271:1,273:4,274:2,275:2,276:2,277:3,278:3,279:1,280:3,281:3,282:3,283:1,284:1,285:2,286:4,287:3,288:2,289:4,290:3,291:3,292:3,293:4,294:1,295:3,296:1,297:3,298:1,299:2,300:3,301:3,302:4,303:2,304:2,305:2,306:2,307:2,308:2,309:3,310:2,311:2,312:2,313:2,314:2,315:2,316:4,325:2,326:2,327:2,328:2,331:2,332:2,337:2,342:1,343:1,346:2,347:1,350:4,351:3,352:1,353:2,360:1,368:1,369:1,370:1,371:1,372:1,373:1,374:1,375:1,376:1,377:1,378:1,382:3,385:1,392:1,393:1,396:2,397:2,398:2,399:1,400:1,401:1,402:1,403:1,404:1,405:1,406:1,407:1,408:1,409:1,410:1,414:4,415:1,416:1,417:2,420:1,421:1,422:2,424:1,425:2,426:2,427:2,428:2,430:3,438:3,439:3,440:3,443:2,444:2,445:2,446:2,447:6,448:6,449:2,450:2,464:2,468:3,476:2,479:1,480:2,65535:0};function YC(e){return(`of:=`+e.replace(oS,`$1[.$2$3$4$5]`).replace(/\]:\[/g,`:`)).replace(/;/g,`|`).replace(/,/g,`;`)}function XC(e){return e.replace(/\./,`!`)}var ZC=typeof Map<`u`;function QC(e,t,n){var r=0,i=e.length;if(n){if(ZC?n.has(t):Object.prototype.hasOwnProperty.call(n,t)){for(var a=ZC?n.get(t):n[t];r<a.length;++r)if(e[a[r]].t===t)return e.Count++,a[r]}}else for(;r<i;++r)if(e[r].t===t)return e.Count++,r;return e[i]={t},e.Count++,e.Unique++,n&&(ZC?(n.has(t)||n.set(t,[]),n.get(t).push(i)):(Object.prototype.hasOwnProperty.call(n,t)||(n[t]=[]),n[t].push(i))),i}function $C(e,t){var n={min:e+1,max:e+1},r=-1;return t.MDW&&(ex=t.MDW),t.width==null?t.wpx==null?t.wch!=null&&(r=t.wch):r=nx(t.wpx):n.customWidth=1,r>-1?(n.width=rx(r),n.customWidth=1):t.width!=null&&(n.width=t.width),t.hidden&&(n.hidden=!0),t.level!=null&&(n.outlineLevel=n.level=t.level),n}function ew(e,t){if(e){var n=[.7,.7,.75,.75,.3,.3];t==`xlml`&&(n=[1,1,1,1,.5,.5]),e.left??=n[0],e.right??=n[1],e.top??=n[2],e.bottom??=n[3],e.header??=n[4],e.footer??=n[5]}}function tw(e,t,n){var r=n.revssf[t.z==null?`General`:t.z],i=60,a=e.length;if(r==null&&n.ssf){for(;i<392;++i)if(n.ssf[i]==null){fg(t.z,i),n.ssf[i]=t.z,n.revssf[t.z]=r=i;break}}for(i=0;i!=a;++i)if(e[i].numFmtId===r)return i;return e[a]={numFmtId:r,fontId:0,fillId:0,borderId:0,xfId:0,applyNumberFormat:1},a}function nw(e,t,n){if(e&&e[`!ref`]){var r=yv(e[`!ref`]);if(r.e.c<r.s.c||r.e.r<r.s.r)throw Error(`Bad range (`+n+`): `+e[`!ref`])}}function rw(e){if(e.length===0)return``;for(var t=`<mergeCells count="`+e.length+`">`,n=0;n!=e.length;++n)t+=`<mergeCell ref="`+vv(e[n])+`"/>`;return t+`</mergeCells>`}function iw(e,t,n,r,i){var a=!1,o={},s=null;if(r.bookType!==`xlsx`&&t.vbaraw){var c=t.SheetNames[n];try{t.Workbook&&(c=t.Workbook.Sheets[n].CodeName||c)}catch{}a=!0,o.codeName=s_(Yg(c))}if(e&&e[`!outline`]){var l={summaryBelow:1,summaryRight:1};e[`!outline`].above&&(l.summaryBelow=0),e[`!outline`].left&&(l.summaryRight=0),s=(s||``)+Y(`outlinePr`,null,l)}!a&&!s||(i[i.length]=Y(`sheetPr`,s,o))}var aw=[`objects`,`scenarios`,`selectLockedCells`,`selectUnlockedCells`],ow=[`formatColumns`,`formatRows`,`formatCells`,`insertColumns`,`insertRows`,`insertHyperlinks`,`deleteColumns`,`deleteRows`,`sort`,`autoFilter`,`pivotTables`];function sw(e){var t={sheet:1};return aw.forEach(function(n){e[n]!=null&&e[n]&&(t[n]=`1`)}),ow.forEach(function(n){e[n]!=null&&!e[n]&&(t[n]=`0`)}),e.password&&(t.password=Zb(e.password).toString(16).toUpperCase()),Y(`sheetProtection`,null,t)}function cw(e){return ew(e),Y(`pageMargins`,null,e)}function lw(e,t){for(var n=[`<cols>`],r,i=0;i!=t.length;++i)(r=t[i])&&(n[n.length]=Y(`col`,null,$C(i,r)));return n[n.length]=`</cols>`,n.join(``)}function uw(e,t,n,r){var i=typeof e.ref==`string`?e.ref:vv(e.ref);n.Workbook||={Sheets:[]},n.Workbook.Names||(n.Workbook.Names=[]);var a=n.Workbook.Names,o=_v(i);o.s.r==o.e.r&&(o.e.r=_v(t[`!ref`]).e.r,i=vv(o));for(var s=0;s<a.length;++s){var c=a[s];if(c.Name==`_xlnm._FilterDatabase`&&c.Sheet==r){c.Ref=`'`+n.SheetNames[r]+`'!`+i;break}}return s==a.length&&a.push({Name:`_xlnm._FilterDatabase`,Sheet:r,Ref:`'`+n.SheetNames[r]+`'!`+i}),Y(`autoFilter`,null,{ref:i})}function dw(e,t,n,r){var i={workbookViewId:`0`};return(((r||{}).Workbook||{}).Views||[])[0]&&(i.rightToLeft=r.Workbook.Views[0].RTL?`1`:`0`),Y(`sheetViews`,Y(`sheetView`,null,i),{})}function fw(e,t,n,r){if(e.c&&n[`!comments`].push([t,e.c]),e.v===void 0&&typeof e.f!=`string`||e.t===`z`&&!e.f)return``;var i=``,a=e.t,o=e.v;if(e.t!==`z`)switch(e.t){case`b`:i=e.v?`1`:`0`;break;case`n`:i=``+e.v;break;case`e`:i=vy[e.v];break;case`d`:r&&r.cellDates?i=Lg(e.v,-1).toISOString():(e=zg(e),e.t=`n`,i=``+(e.v=kg(Lg(e.v)))),e.z===void 0&&(e.z=yh[14]);break;default:i=e.v;break}var s=u_(`v`,Yg(i)),c={r:t},l=tw(r.cellXfs,e,r);switch(l!==0&&(c.s=l),e.t){case`n`:break;case`d`:c.t=`d`;break;case`b`:c.t=`b`;break;case`e`:c.t=`e`;break;case`z`:break;default:if(e.v==null){delete e.t;break}if(e.v.length>32767)throw Error(`Text length must not exceed 32767 characters`);if(r&&r.bookSST){s=u_(`v`,``+QC(r.Strings,e.v,r.revStrings)),c.t=`s`;break}c.t=`str`;break}if(e.t!=a&&(e.t=a,e.v=o),typeof e.f==`string`&&e.f){var u=e.F&&e.F.slice(0,t.length)==t?{t:`array`,ref:e.F}:null;s=Y(`f`,Yg(e.f),u)+(e.v==null?``:s)}return e.l&&n[`!links`].push([t,e.l]),e.D&&(c.cm=1),Y(`c`,s,c)}function pw(e,t,n,r){var i=[],a=[],o=yv(e[`!ref`]),s=``,c,l=``,u=[],d=0,f=0,p=e[`!rows`],m=Array.isArray(e),h={r:l},g,_=-1;for(f=o.s.c;f<=o.e.c;++f)u[f]=dv(f);for(d=o.s.r;d<=o.e.r;++d){for(a=[],l=sv(d),f=o.s.c;f<=o.e.c;++f){c=u[f]+l;var v=m?(e[d]||[])[f]:e[c];v!==void 0&&(s=fw(v,c,e,t,n,r))!=null&&a.push(s)}(a.length>0||p&&p[d])&&(h={r:l},p&&p[d]&&(g=p[d],g.hidden&&(h.hidden=1),_=-1,g.hpx?_=ox(g.hpx):g.hpt&&(_=g.hpt),_>-1&&(h.ht=_,h.customHeight=1),g.level&&(h.outlineLevel=g.level)),i[i.length]=Y(`row`,a.join(``),h))}if(p)for(;d<p.length;++d)p&&p[d]&&(h={r:d+1},g=p[d],g.hidden&&(h.hidden=1),_=-1,g.hpx?_=ox(g.hpx):g.hpt&&(_=g.hpt),_>-1&&(h.ht=_,h.customHeight=1),g.level&&(h.outlineLevel=g.level),i[i.length]=Y(`row`,``,h));return i.join(``)}function mw(e,t,n,r){var i=[Gg,Y(`worksheet`,null,{xmlns:h_[0],"xmlns:r":m_.r})],a=n.SheetNames[e],o=0,s=``,c=n.Sheets[a];c??={};var l=c[`!ref`]||`A1`,u=yv(l);if(u.e.c>16383||u.e.r>1048575){if(t.WTF)throw Error(`Range `+l+` exceeds format limit A1:XFD1048576`);u.e.c=Math.min(u.e.c,16383),u.e.r=Math.min(u.e.c,1048575),l=vv(u)}r||={},c[`!comments`]=[];var d=[];iw(c,n,e,t,i),i[i.length]=Y(`dimension`,null,{ref:l}),i[i.length]=dw(c,t,e,n),t.sheetFormat&&(i[i.length]=Y(`sheetFormatPr`,null,{defaultRowHeight:t.sheetFormat.defaultRowHeight||`16`,baseColWidth:t.sheetFormat.baseColWidth||`10`,outlineLevelRow:t.sheetFormat.outlineLevelRow||`7`})),c[`!cols`]!=null&&c[`!cols`].length>0&&(i[i.length]=lw(c,c[`!cols`])),i[o=i.length]=`<sheetData/>`,c[`!links`]=[],c[`!ref`]!=null&&(s=pw(c,t,e,n,r),s.length>0&&(i[i.length]=s)),i.length>o+1&&(i[i.length]=`</sheetData>`,i[o]=i[o].replace(`/>`,`>`)),c[`!protect`]&&(i[i.length]=sw(c[`!protect`])),c[`!autofilter`]!=null&&(i[i.length]=uw(c[`!autofilter`],c,n,e)),c[`!merges`]!=null&&c[`!merges`].length>0&&(i[i.length]=rw(c[`!merges`]));var f=-1,p,m=-1;return c[`!links`].length>0&&(i[i.length]=`<hyperlinks>`,c[`!links`].forEach(function(e){e[1].Target&&(p={ref:e[0]},e[1].Target.charAt(0)!=`#`&&(m=Ey(r,-1,Yg(e[1].Target).replace(/#.*$/,``),Cy.HLINK),p[`r:id`]=`rId`+m),(f=e[1].Target.indexOf(`#`))>-1&&(p.location=Yg(e[1].Target.slice(f+1))),e[1].Tooltip&&(p.tooltip=Yg(e[1].Tooltip)),i[i.length]=Y(`hyperlink`,null,p))}),i[i.length]=`</hyperlinks>`),delete c[`!links`],c[`!margins`]!=null&&(i[i.length]=cw(c[`!margins`])),(!t||t.ignoreEC||t.ignoreEC==null)&&(i[i.length]=u_(`ignoredErrors`,Y(`ignoredError`,null,{numberStoredAsText:1,sqref:l}))),d.length>0&&(m=Ey(r,-1,`../drawings/drawing`+(e+1)+`.xml`,Cy.DRAW),i[i.length]=Y(`drawing`,null,{"r:id":`rId`+m}),c[`!drawing`]=d),c[`!comments`].length>0&&(m=Ey(r,-1,`../drawings/vmlDrawing`+(e+1)+`.vml`,Cy.VML),i[i.length]=Y(`legacyDrawing`,null,{"r:id":`rId`+m}),c[`!legacy`]=m),i.length>1&&(i[i.length]=`</worksheet>`,i[1]=i[1].replace(`/>`,`>`)),i.join(``)}function hw(e,t){var n={},r=e.l+t;n.r=e.read_shift(4),e.l+=4;var i=e.read_shift(2);e.l+=1;var a=e.read_shift(1);return e.l=r,a&7&&(n.level=a&7),a&16&&(n.hidden=!0),a&32&&(n.hpt=i/20),n}function gw(e,t,n){var r=X(145),i=(n[`!rows`]||[])[e]||{};r.write_shift(4,e),r.write_shift(4,0);var a=320;i.hpx?a=ox(i.hpx)*20:i.hpt&&(a=i.hpt*20),r.write_shift(2,a),r.write_shift(1,0);var o=0;i.level&&(o|=i.level),i.hidden&&(o|=16),(i.hpx||i.hpt)&&(o|=32),r.write_shift(1,o),r.write_shift(1,0);var s=0,c=r.l;r.l+=4;for(var l={r:e,c:0},u=0;u<16;++u)if(!(t.s.c>u+1<<10||t.e.c<u<<10)){for(var d=-1,f=-1,p=u<<10;p<u+1<<10;++p)l.c=p,(Array.isArray(n)?(n[l.r]||[])[l.c]:n[gv(l)])&&(d<0&&(d=p),f=p);d<0||(++s,r.write_shift(4,d),r.write_shift(4,f))}var m=r.l;return r.l=c,r.write_shift(4,s),r.l=m,r.length>r.l?r.slice(0,r.l):r}function _w(e,t,n,r){var i=gw(r,n,t);(i.length>17||(t[`!rows`]||[])[r])&&Z(e,0,i)}var vw=Xv,yw=Zv;function bw(){}function xw(e,t){var n={},r=e[e.l];return++e.l,n.above=!(r&64),n.left=!(r&128),e.l+=18,n.name=zv(e,t-19),n}function Sw(e,t,n){n??=X(84+4*e.length);var r=192;t&&(t.above&&(r&=-65),t.left&&(r&=-129)),n.write_shift(1,r);for(var i=1;i<3;++i)n.write_shift(1,0);return ty({auto:1},n),n.write_shift(-4,-1),n.write_shift(-4,-1),Bv(e,n),n.slice(0,n.l)}function Cw(e){return[Fv(e)]}function ww(e,t,n){return n??=X(8),Iv(t,n)}function Tw(e){return[Lv(e)]}function Ew(e,t,n){return n??=X(4),Rv(t,n)}function Dw(e){return[Fv(e),e.read_shift(1),`b`]}function Ow(e,t,n){return n??=X(9),Iv(t,n),n.write_shift(1,e.v?1:0),n}function kw(e){return[Lv(e),e.read_shift(1),`b`]}function Aw(e,t,n){return n??=X(5),Rv(t,n),n.write_shift(1,e.v?1:0),n}function jw(e){return[Fv(e),e.read_shift(1),`e`]}function Mw(e,t,n){return n??=X(9),Iv(t,n),n.write_shift(1,e.v),n}function Nw(e){return[Lv(e),e.read_shift(1),`e`]}function Pw(e,t,n){return n??=X(8),Rv(t,n),n.write_shift(1,e.v),n.write_shift(2,0),n.write_shift(1,0),n}function Fw(e){return[Fv(e),e.read_shift(4),`s`]}function Iw(e,t,n){return n??=X(12),Iv(t,n),n.write_shift(4,t.v),n}function Lw(e){return[Lv(e),e.read_shift(4),`s`]}function Rw(e,t,n){return n??=X(8),Rv(t,n),n.write_shift(4,t.v),n}function zw(e){return[Fv(e),Qv(e),`n`]}function Bw(e,t,n){return n??=X(16),Iv(t,n),$v(e.v,n),n}function Vw(e){return[Lv(e),Qv(e),`n`]}function Hw(e,t,n){return n??=X(12),Rv(t,n),$v(e.v,n),n}function Uw(e){return[Fv(e),Kv(e),`n`]}function Ww(e,t,n){return n??=X(12),Iv(t,n),qv(e.v,n),n}function Gw(e){return[Lv(e),Kv(e),`n`]}function Kw(e,t,n){return n??=X(8),Rv(t,n),qv(e.v,n),n}function qw(e){return[Fv(e),jv(e),`is`]}function Jw(e){return[Fv(e),Dv(e),`str`]}function Yw(e,t,n){return n??=X(12+4*e.v.length),Iv(t,n),Ov(e.v,n),n.length>n.l?n.slice(0,n.l):n}function Xw(e){return[Lv(e),Dv(e),`str`]}function Zw(e,t,n){return n??=X(8+4*e.v.length),Rv(t,n),Ov(e.v,n),n.length>n.l?n.slice(0,n.l):n}function Qw(e,t,n){var r=e.l+t,i=Fv(e);i.r=n[`!row`];var a=[i,e.read_shift(1),`b`];return n.cellFormula?(e.l+=2,a[3]=RC(UC(e,r-e.l,n),null,i,n.supbooks,n)):e.l=r,a}function $w(e,t,n){var r=e.l+t,i=Fv(e);i.r=n[`!row`];var a=[i,e.read_shift(1),`e`];return n.cellFormula?(e.l+=2,a[3]=RC(UC(e,r-e.l,n),null,i,n.supbooks,n)):e.l=r,a}function eT(e,t,n){var r=e.l+t,i=Fv(e);i.r=n[`!row`];var a=[i,Qv(e),`n`];return n.cellFormula?(e.l+=2,a[3]=RC(UC(e,r-e.l,n),null,i,n.supbooks,n)):e.l=r,a}function tT(e,t,n){var r=e.l+t,i=Fv(e);i.r=n[`!row`];var a=[i,Dv(e),`str`];return n.cellFormula?(e.l+=2,a[3]=RC(UC(e,r-e.l,n),null,i,n.supbooks,n)):e.l=r,a}var nT=Xv,rT=Zv;function iT(e,t){return t??=X(4),t.write_shift(4,e),t}function aT(e,t){var n=e.l+t,r=Xv(e,16),i=Vv(e),a=Dv(e),o=Dv(e),s=Dv(e);e.l=n;var c={rfx:r,relId:i,loc:a,display:s};return o&&(c.Tooltip=o),c}function oT(e,t){var n=X(50+4*(e[1].Target.length+(e[1].Tooltip||``).length));Zv({s:hv(e[0]),e:hv(e[0])},n),Gv(`rId`+t,n);var r=e[1].Target.indexOf(`#`);return Ov((r==-1?``:e[1].Target.slice(r+1))||``,n),Ov(e[1].Tooltip||``,n),Ov(``,n),n.slice(0,n.l)}function sT(){}function cT(e,t,n){var r=e.l+t,i=Jv(e,16),a=e.read_shift(1),o=[i];return o[2]=a,n.cellFormula?o[1]=HC(e,r-e.l,n):e.l=r,o}function lT(e,t,n){var r=e.l+t,i=[Xv(e,16)];return n.cellFormula&&(i[1]=GC(e,r-e.l,n)),e.l=r,i}function uT(e,t,n){n??=X(18);var r=$C(e,t);n.write_shift(-4,e),n.write_shift(-4,e),n.write_shift(4,(r.width||10)*256),n.write_shift(4,0);var i=0;return t.hidden&&(i|=1),typeof r.width==`number`&&(i|=2),t.level&&(i|=t.level<<8),n.write_shift(2,i),n}var dT=[`left`,`right`,`top`,`bottom`,`header`,`footer`];function fT(e){var t={};return dT.forEach(function(n){t[n]=Qv(e,8)}),t}function pT(e,t){return t??=X(48),ew(e),dT.forEach(function(n){$v(e[n],t)}),t}function mT(e){var t=e.read_shift(2);return e.l+=28,{RTL:t&32}}function hT(e,t,n){n??=X(30);var r=924;return(((t||{}).Views||[])[0]||{}).RTL&&(r|=32),n.write_shift(2,r),n.write_shift(4,0),n.write_shift(4,0),n.write_shift(4,0),n.write_shift(1,0),n.write_shift(1,0),n.write_shift(2,0),n.write_shift(2,100),n.write_shift(2,0),n.write_shift(2,0),n.write_shift(2,0),n.write_shift(4,0),n}function gT(e){var t=X(24);return t.write_shift(4,4),t.write_shift(4,1),Zv(e,t),t}function _T(e,t){return t??=X(66),t.write_shift(2,e.password?Zb(e.password):0),t.write_shift(4,1),[[`objects`,!1],[`scenarios`,!1],[`formatCells`,!0],[`formatColumns`,!0],[`formatRows`,!0],[`insertColumns`,!0],[`insertRows`,!0],[`insertHyperlinks`,!0],[`deleteColumns`,!0],[`deleteRows`,!0],[`selectLockedCells`,!1],[`sort`,!0],[`autoFilter`,!0],[`pivotTables`,!0],[`selectUnlockedCells`,!1]].forEach(function(n){n[1]?t.write_shift(4,e[n[0]]!=null&&!e[n[0]]?1:0):t.write_shift(4,e[n[0]]!=null&&e[n[0]]?0:1)}),t}function vT(){}function yT(){}function bT(e,t,n,r,i,a,o){if(t.v===void 0)return!1;var s=``;switch(t.t){case`b`:s=t.v?`1`:`0`;break;case`d`:t=zg(t),t.z=t.z||yh[14],t.v=kg(Lg(t.v)),t.t=`n`;break;case`n`:case`e`:s=``+t.v;break;default:s=t.v;break}var c={r:n,c:r};switch(c.s=tw(i.cellXfs,t,i),t.l&&a[`!links`].push([gv(c),t.l]),t.c&&a[`!comments`].push([gv(c),t.c]),t.t){case`s`:case`str`:return i.bookSST?(s=QC(i.Strings,t.v,i.revStrings),c.t=`s`,c.v=s,o?Z(e,18,Rw(t,c)):Z(e,7,Iw(t,c))):(c.t=`str`,o?Z(e,17,Zw(t,c)):Z(e,6,Yw(t,c))),!0;case`n`:return t.v==(t.v|0)&&t.v>-1e3&&t.v<1e3?o?Z(e,13,Kw(t,c)):Z(e,2,Ww(t,c)):o?Z(e,16,Hw(t,c)):Z(e,5,Bw(t,c)),!0;case`b`:return c.t=`b`,o?Z(e,15,Aw(t,c)):Z(e,4,Ow(t,c)),!0;case`e`:return c.t=`e`,o?Z(e,14,Pw(t,c)):Z(e,3,Mw(t,c)),!0}return o?Z(e,12,Ew(t,c)):Z(e,1,ww(t,c)),!0}function xT(e,t,n,r){var i=yv(t[`!ref`]||`A1`),a,o=``,s=[];Z(e,145);var c=Array.isArray(t),l=i.e.r;t[`!rows`]&&(l=Math.max(i.e.r,t[`!rows`].length-1));for(var u=i.s.r;u<=l;++u){o=sv(u),_w(e,t,i,u);var d=!1;if(u<=i.e.r)for(var f=i.s.c;f<=i.e.c;++f){u===i.s.r&&(s[f]=dv(f)),a=s[f]+o;var p=c?(t[u]||[])[f]:t[a];if(!p){d=!1;continue}d=bT(e,p,u,f,r,t,d)}}Z(e,146)}function ST(e,t){!t||!t[`!merges`]||(Z(e,177,iT(t[`!merges`].length)),t[`!merges`].forEach(function(t){Z(e,176,rT(t))}),Z(e,178))}function CT(e,t){!t||!t[`!cols`]||(Z(e,390),t[`!cols`].forEach(function(t,n){t&&Z(e,60,uT(n,t))}),Z(e,391))}function wT(e,t){!t||!t[`!ref`]||(Z(e,648),Z(e,649,gT(yv(t[`!ref`]))),Z(e,650))}function TT(e,t,n){t[`!links`].forEach(function(t){t[1].Target&&Z(e,494,oT(t,Ey(n,-1,t[1].Target.replace(/#.*$/,``),Cy.HLINK)))}),delete t[`!links`]}function ET(e,t,n,r){if(t[`!comments`].length>0){var i=Ey(r,-1,`../drawings/vmlDrawing`+(n+1)+`.vml`,Cy.VML);Z(e,551,Gv(`rId`+i)),t[`!legacy`]=i}}function DT(e,t,n,r){if(t[`!autofilter`]){var i=t[`!autofilter`],a=typeof i.ref==`string`?i.ref:vv(i.ref);n.Workbook||={Sheets:[]},n.Workbook.Names||(n.Workbook.Names=[]);var o=n.Workbook.Names,s=_v(a);s.s.r==s.e.r&&(s.e.r=_v(t[`!ref`]).e.r,a=vv(s));for(var c=0;c<o.length;++c){var l=o[c];if(l.Name==`_xlnm._FilterDatabase`&&l.Sheet==r){l.Ref=`'`+n.SheetNames[r]+`'!`+a;break}}c==o.length&&o.push({Name:`_xlnm._FilterDatabase`,Sheet:r,Ref:`'`+n.SheetNames[r]+`'!`+a}),Z(e,161,Zv(yv(a))),Z(e,162)}}function OT(e,t,n){Z(e,133),Z(e,137,hT(t,n)),Z(e,138),Z(e,134)}function kT(e,t){t[`!protect`]&&Z(e,535,_T(t[`!protect`]))}function AT(e,t,n,r){var i=tv(),a=n.SheetNames[e],o=n.Sheets[a]||{},s=a;try{n&&n.Workbook&&(s=n.Workbook.Sheets[e].CodeName||s)}catch{}var c=yv(o[`!ref`]||`A1`);if(c.e.c>16383||c.e.r>1048575){if(t.WTF)throw Error(`Range `+(o[`!ref`]||`A1`)+` exceeds format limit A1:XFD1048576`);c.e.c=Math.min(c.e.c,16383),c.e.r=Math.min(c.e.c,1048575)}return o[`!links`]=[],o[`!comments`]=[],Z(i,129),(n.vbaraw||o[`!outline`])&&Z(i,147,Sw(s,o[`!outline`])),Z(i,148,yw(c)),OT(i,o,n.Workbook),CT(i,o,e,t,n),xT(i,o,e,t,n),kT(i,o),DT(i,o,n,e),ST(i,o),TT(i,o,r),o[`!margins`]&&Z(i,476,pT(o[`!margins`])),(!t||t.ignoreEC||t.ignoreEC==null)&&wT(i,o),ET(i,o,e,r),Z(i,130),i.end()}function jT(e,t){return e.l+=10,{name:Dv(e,t-10)}}var MT=[[`allowRefreshQuery`,!1,`bool`],[`autoCompressPictures`,!0,`bool`],[`backupFile`,!1,`bool`],[`checkCompatibility`,!1,`bool`],[`CodeName`,``],[`date1904`,!1,`bool`],[`defaultThemeVersion`,0,`int`],[`filterPrivacy`,!1,`bool`],[`hidePivotFieldList`,!1,`bool`],[`promptedSolutions`,!1,`bool`],[`publishItems`,!1,`bool`],[`refreshAllConnections`,!1,`bool`],[`saveExternalLinkValues`,!0,`bool`],[`showBorderUnselectedTables`,!0,`bool`],[`showInkAnnotation`,!0,`bool`],[`showObjects`,`all`],[`showPivotChartFilter`,!1,`bool`],[`updateLinks`,`userSet`]];function NT(e){return!e.Workbook||!e.Workbook.WBProps?`false`:t_(e.Workbook.WBProps.date1904)?`true`:`false`}var PT=`][*?/\\`.split(``);function FT(e,t){if(e.length>31){if(t)return!1;throw Error(`Sheet names cannot exceed 31 chars`)}var n=!0;return PT.forEach(function(r){if(e.indexOf(r)!=-1){if(!t)throw Error(`Sheet name cannot contain : \\ / ? * [ ]`);n=!1}}),n}function IT(e,t,n){e.forEach(function(r,i){FT(r);for(var a=0;a<i;++a)if(r==e[a])throw Error(`Duplicate Sheet Name: `+r);if(n){var o=t&&t[i]&&t[i].CodeName||r;if(o.charCodeAt(0)==95&&o.length>22)throw Error(`Bad Code Name: Worksheet`+o)}})}function LT(e){if(!e||!e.SheetNames||!e.Sheets)throw Error(`Invalid Workbook`);if(!e.SheetNames.length)throw Error(`Workbook is empty`);var t=e.Workbook&&e.Workbook.Sheets||[];IT(e.SheetNames,t,!!e.vbaraw);for(var n=0;n<e.SheetNames.length;++n)nw(e.Sheets[e.SheetNames[n]],e.SheetNames[n],n)}function RT(e){var t=[Gg];t[t.length]=Y(`workbook`,null,{xmlns:h_[0],"xmlns:r":m_.r});var n=e.Workbook&&(e.Workbook.Names||[]).length>0,r={codeName:`ThisWorkbook`};e.Workbook&&e.Workbook.WBProps&&(MT.forEach(function(t){e.Workbook.WBProps[t[0]]!=null&&e.Workbook.WBProps[t[0]]!=t[1]&&(r[t[0]]=e.Workbook.WBProps[t[0]])}),e.Workbook.WBProps.CodeName&&(r.codeName=e.Workbook.WBProps.CodeName,delete r.CodeName)),t[t.length]=Y(`workbookPr`,null,r);var i=e.Workbook&&e.Workbook.Sheets||[],a=0;if(i&&i[0]&&i[0].Hidden){for(t[t.length]=`<bookViews>`,a=0;a!=e.SheetNames.length&&!(!i[a]||!i[a].Hidden);++a);a==e.SheetNames.length&&(a=0),t[t.length]=`<workbookView firstSheet="`+a+`" activeTab="`+a+`"/>`,t[t.length]=`</bookViews>`}for(t[t.length]=`<sheets>`,a=0;a!=e.SheetNames.length;++a){var o={name:Yg(e.SheetNames[a].slice(0,31))};if(o.sheetId=``+(a+1),o[`r:id`]=`rId`+(a+1),i[a])switch(i[a].Hidden){case 1:o.state=`hidden`;break;case 2:o.state=`veryHidden`;break}t[t.length]=Y(`sheet`,null,o)}return t[t.length]=`</sheets>`,n&&(t[t.length]=`<definedNames>`,e.Workbook&&e.Workbook.Names&&e.Workbook.Names.forEach(function(e){var n={name:e.Name};e.Comment&&(n.comment=e.Comment),e.Sheet!=null&&(n.localSheetId=``+e.Sheet),e.Hidden&&(n.hidden=`1`),e.Ref&&(t[t.length]=Y(`definedName`,Yg(e.Ref),n))}),t[t.length]=`</definedNames>`),t.length>2&&(t[t.length]=`</workbook>`,t[1]=t[1].replace(`/>`,`>`)),t.join(``)}function zT(e,t){var n={};return n.Hidden=e.read_shift(4),n.iTabID=e.read_shift(4),n.strRelID=Wv(e,t-8),n.name=Dv(e),n}function BT(e,t){return t||=X(127),t.write_shift(4,e.Hidden),t.write_shift(4,e.iTabID),Gv(e.strRelID,t),Ov(e.name.slice(0,31),t),t.length>t.l?t.slice(0,t.l):t}function VT(e,t){var n={},r=e.read_shift(4);n.defaultThemeVersion=e.read_shift(4);var i=t>8?Dv(e):``;return i.length>0&&(n.CodeName=i),n.autoCompressPictures=!!(r&65536),n.backupFile=!!(r&64),n.checkCompatibility=!!(r&4096),n.date1904=!!(r&1),n.filterPrivacy=!!(r&8),n.hidePivotFieldList=!!(r&1024),n.promptedSolutions=!!(r&16),n.publishItems=!!(r&2048),n.refreshAllConnections=!!(r&262144),n.saveExternalLinkValues=!!(r&128),n.showBorderUnselectedTables=!!(r&4),n.showInkAnnotation=!!(r&32),n.showObjects=[`all`,`placeholders`,`none`][r>>13&3],n.showPivotChartFilter=!!(r&32768),n.updateLinks=[`userSet`,`never`,`always`][r>>8&3],n}function HT(e,t){t||=X(72);var n=0;return e&&e.filterPrivacy&&(n|=8),t.write_shift(4,n),t.write_shift(4,0),Bv(e&&e.CodeName||`ThisWorkbook`,t),t.slice(0,t.l)}function UT(e,t,n){var r=e.l+t;e.l+=4,e.l+=1;var i=e.read_shift(4),a=Uv(e),o=WC(e,0,n),s=Vv(e);e.l=r;var c={Name:a,Ptg:o};return i<268435455&&(c.Sheet=i),s&&(c.Comment=s),c}function WT(e,t){Z(e,143);for(var n=0;n!=t.SheetNames.length;++n)Z(e,156,BT({Hidden:t.Workbook&&t.Workbook.Sheets&&t.Workbook.Sheets[n]&&t.Workbook.Sheets[n].Hidden||0,iTabID:n+1,strRelID:`rId`+(n+1),name:t.SheetNames[n]}));Z(e,144)}function GT(e,t){t||=X(127);for(var n=0;n!=4;++n)t.write_shift(4,0);return Ov(`SheetJS`,t),Ov(jm.version,t),Ov(jm.version,t),Ov(`7262`,t),t.length>t.l?t.slice(0,t.l):t}function KT(e,t){return t||=X(29),t.write_shift(-4,0),t.write_shift(-4,460),t.write_shift(4,28800),t.write_shift(4,17600),t.write_shift(4,500),t.write_shift(4,e),t.write_shift(4,e),t.write_shift(1,120),t.length>t.l?t.slice(0,t.l):t}function qT(e,t){if(!(!t.Workbook||!t.Workbook.Sheets)){for(var n=t.Workbook.Sheets,r=0,i=-1,a=-1;r<n.length;++r)!n[r]||!n[r].Hidden&&i==-1?i=r:n[r].Hidden==1&&a==-1&&(a=r);a>i||(Z(e,135),Z(e,158,KT(i)),Z(e,136))}}function JT(e,t){var n=tv();return Z(n,131),Z(n,128,GT()),Z(n,153,HT(e.Workbook&&e.Workbook.WBProps||null)),qT(n,e,t),WT(n,e,t),Z(n,132),n.end()}function YT(e,t,n){return(t.slice(-4)===`.bin`?JT:RT)(e,n)}function XT(e,t,n,r,i){return(t.slice(-4)===`.bin`?AT:mw)(e,n,r,i)}function ZT(e,t,n){return(t.slice(-4)===`.bin`?Fx:ux)(e,n)}function QT(e,t,n){return(t.slice(-4)===`.bin`?Yb:Gb)(e,n)}function $T(e,t,n){return(t.slice(-4)===`.bin`?nS:Yx)(e,n)}function eE(e){return(e.slice(-4)===`.bin`?Wx:Gx)()}function tE(e,t){var n=[];return e.Props&&n.push(By(e.Props,t)),e.Custprops&&n.push(Vy(e.Props,e.Custprops,t)),n.join(``)}function nE(){return``}function rE(e,t){var n=[`<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>`];return t.cellXfs.forEach(function(e,t){var r=[];r.push(Y(`NumberFormat`,null,{"ss:Format":Yg(yh[e.numFmtId])}));var i={"ss:ID":`s`+(21+t)};n.push(Y(`Style`,r.join(``),i))}),Y(`Styles`,n.join(``))}function iE(e){return Y(`NamedRange`,null,{"ss:Name":e.Name,"ss:RefersTo":`=`+sS(e.Ref,{r:0,c:0})})}function aE(e){if(!((e||{}).Workbook||{}).Names)return``;for(var t=e.Workbook.Names,n=[],r=0;r<t.length;++r){var i=t[r];i.Sheet??(i.Name.match(/^_xlfn\./)||n.push(iE(i)))}return Y(`Names`,n.join(``))}function oE(e,t,n,r){if(!e||!((r||{}).Workbook||{}).Names)return``;for(var i=r.Workbook.Names,a=[],o=0;o<i.length;++o){var s=i[o];s.Sheet==n&&(s.Name.match(/^_xlfn\./)||a.push(iE(s)))}return a.join(``)}function sE(e,t,n,r){if(!e)return``;var i=[];if(e[`!margins`]&&(i.push(`<PageSetup>`),e[`!margins`].header&&i.push(Y(`Header`,null,{"x:Margin":e[`!margins`].header})),e[`!margins`].footer&&i.push(Y(`Footer`,null,{"x:Margin":e[`!margins`].footer})),i.push(Y(`PageMargins`,null,{"x:Bottom":e[`!margins`].bottom||`0.75`,"x:Left":e[`!margins`].left||`0.7`,"x:Right":e[`!margins`].right||`0.7`,"x:Top":e[`!margins`].top||`0.75`})),i.push(`</PageSetup>`)),r&&r.Workbook&&r.Workbook.Sheets&&r.Workbook.Sheets[n])if(r.Workbook.Sheets[n].Hidden)i.push(Y(`Visible`,r.Workbook.Sheets[n].Hidden==1?`SheetHidden`:`SheetVeryHidden`,{}));else{for(var a=0;a<n&&!(r.Workbook.Sheets[a]&&!r.Workbook.Sheets[a].Hidden);++a);a==n&&i.push(`<Selected/>`)}return((((r||{}).Workbook||{}).Views||[])[0]||{}).RTL&&i.push(`<DisplayRightToLeft/>`),e[`!protect`]&&(i.push(u_(`ProtectContents`,`True`)),e[`!protect`].objects&&i.push(u_(`ProtectObjects`,`True`)),e[`!protect`].scenarios&&i.push(u_(`ProtectScenarios`,`True`)),e[`!protect`].selectLockedCells!=null&&!e[`!protect`].selectLockedCells?i.push(u_(`EnableSelection`,`NoSelection`)):e[`!protect`].selectUnlockedCells!=null&&!e[`!protect`].selectUnlockedCells&&i.push(u_(`EnableSelection`,`UnlockedCells`)),[[`formatCells`,`AllowFormatCells`],[`formatColumns`,`AllowSizeCols`],[`formatRows`,`AllowSizeRows`],[`insertColumns`,`AllowInsertCols`],[`insertRows`,`AllowInsertRows`],[`insertHyperlinks`,`AllowInsertHyperlinks`],[`deleteColumns`,`AllowDeleteCols`],[`deleteRows`,`AllowDeleteRows`],[`sort`,`AllowSort`],[`autoFilter`,`AllowFilter`],[`pivotTables`,`AllowUsePivotTables`]].forEach(function(t){e[`!protect`][t[0]]&&i.push(`<`+t[1]+`/>`)})),i.length==0?``:Y(`WorksheetOptions`,i.join(``),{xmlns:g_.x})}function cE(e){return e.map(function(e){return Y(`Comment`,Y(`ss:Data`,e_(e.t||``),{xmlns:`http://www.w3.org/TR/REC-html40`}),{"ss:Author":e.a})}).join(``)}function lE(e,t,n,r,i,a,o){if(!e||e.v==null&&e.f==null)return``;var s={};if(e.f&&(s[`ss:Formula`]=`=`+Yg(sS(e.f,o))),e.F&&e.F.slice(0,t.length)==t){var c=hv(e.F.slice(t.length+1));s[`ss:ArrayRange`]=`RC:R`+(c.r==o.r?``:`[`+(c.r-o.r)+`]`)+`C`+(c.c==o.c?``:`[`+(c.c-o.c)+`]`)}if(e.l&&e.l.Target&&(s[`ss:HRef`]=Yg(e.l.Target),e.l.Tooltip&&(s[`x:HRefScreenTip`]=Yg(e.l.Tooltip))),n[`!merges`])for(var l=n[`!merges`],u=0;u!=l.length;++u)l[u].s.c!=o.c||l[u].s.r!=o.r||(l[u].e.c>l[u].s.c&&(s[`ss:MergeAcross`]=l[u].e.c-l[u].s.c),l[u].e.r>l[u].s.r&&(s[`ss:MergeDown`]=l[u].e.r-l[u].s.r));var d=``,f=``;switch(e.t){case`z`:if(!r.sheetStubs)return``;break;case`n`:d=`Number`,f=String(e.v);break;case`b`:d=`Boolean`,f=e.v?`1`:`0`;break;case`e`:d=`Error`,f=vy[e.v];break;case`d`:d=`DateTime`,f=new Date(e.v).toISOString(),e.z??=e.z||yh[14];break;case`s`:d=`String`,f=$g(e.v||``);break}s[`ss:StyleID`]=`s`+(21+tw(r.cellXfs,e,r)),s[`ss:Index`]=o.c+1;var p=e.v==null?``:f,m=e.t==`z`?``:`<Data ss:Type="`+d+`">`+p+`</Data>`;return(e.c||[]).length>0&&(m+=cE(e.c)),Y(`Cell`,m,s)}function uE(e,t){var n=`<Row ss:Index="`+(e+1)+`"`;return t&&(t.hpt&&!t.hpx&&(t.hpx=sx(t.hpt)),t.hpx&&(n+=` ss:AutoFitHeight="0" ss:Height="`+t.hpx+`"`),t.hidden&&(n+=` ss:Hidden="1"`)),n+`>`}function dE(e,t,n,r){if(!e[`!ref`])return``;var i=yv(e[`!ref`]),a=e[`!merges`]||[],o=0,s=[];e[`!cols`]&&e[`!cols`].forEach(function(e,t){ix(e);var n=!!e.width,r=$C(t,e),i={"ss:Index":t+1};n&&(i[`ss:Width`]=tx(r.width)),e.hidden&&(i[`ss:Hidden`]=`1`),s.push(Y(`Column`,null,i))});for(var c=Array.isArray(e),l=i.s.r;l<=i.e.r;++l){for(var u=[uE(l,(e[`!rows`]||[])[l])],d=i.s.c;d<=i.e.c;++d){var f=!1;for(o=0;o!=a.length;++o)if(!(a[o].s.c>d)&&!(a[o].s.r>l)&&!(a[o].e.c<d)&&!(a[o].e.r<l)){(a[o].s.c!=d||a[o].s.r!=l)&&(f=!0);break}if(!f){var p={r:l,c:d},m=gv(p),h=c?(e[l]||[])[d]:e[m];u.push(lE(h,m,e,t,n,r,p))}}u.push(`</Row>`),u.length>2&&s.push(u.join(``))}return s.join(``)}function fE(e,t,n){var r=[],i=n.SheetNames[e],a=n.Sheets[i],o=a?oE(a,t,e,n):``;return o.length>0&&r.push(`<Names>`+o+`</Names>`),o=a?dE(a,t,e,n):``,o.length>0&&r.push(`<Table>`+o+`</Table>`),r.push(sE(a,t,e,n)),r.join(``)}function pE(e,t){t||={},e.SSF||=zg(yh),e.SSF&&(mg(),pg(e.SSF),t.revssf=Eg(e.SSF),t.revssf[e.SSF[65535]]=0,t.ssf=e.SSF,t.cellXfs=[],tw(t.cellXfs,{},{revssf:{General:0}}));var n=[];n.push(tE(e,t)),n.push(nE(e,t)),n.push(``),n.push(``);for(var r=0;r<e.SheetNames.length;++r)n.push(Y(`Worksheet`,fE(r,t,e),{"ss:Name":Yg(e.SheetNames[r])}));return n[2]=rE(e,t),n[3]=aE(e,t),Gg+Y(`Workbook`,n.join(``),{xmlns:g_.ss,"xmlns:o":g_.o,"xmlns:x":g_.x,"xmlns:ss":g_.ss,"xmlns:dt":g_.dt,"xmlns:html":g_.html})}var mE={SI:`e0859ff2f94f6810ab9108002b27b3d9`,DSI:`02d5cdd59c2e1b10939708002b2cf9ae`,UDI:`05d5cdd59c2e1b10939708002b2cf9ae`};function hE(e,t){var n=[],r=[],i=[],a=0,o,s=wg(my,`n`),c=wg(hy,`n`);if(e.Props)for(o=Cg(e.Props),a=0;a<o.length;++a)(Object.prototype.hasOwnProperty.call(s,o[a])?n:Object.prototype.hasOwnProperty.call(c,o[a])?r:i).push([o[a],e.Props[o[a]]]);if(e.Custprops)for(o=Cg(e.Custprops),a=0;a<o.length;++a)Object.prototype.hasOwnProperty.call(e.Props||{},o[a])||(Object.prototype.hasOwnProperty.call(s,o[a])?n:Object.prototype.hasOwnProperty.call(c,o[a])?r:i).push([o[a],e.Custprops[o[a]]]);var l=[];for(a=0;a<i.length;++a)Wy.indexOf(i[a][0])>-1||Iy.indexOf(i[a][0])>-1||i[a][1]!=null&&l.push(i[a]);r.length&&yg.utils.cfb_add(t,`/SummaryInformation`,qy(r,mE.SI,c,hy)),(n.length||l.length)&&yg.utils.cfb_add(t,`/DocumentSummaryInformation`,qy(n,mE.DSI,s,my,l.length?l:null,mE.UDI))}function gE(e,t){var n=t||{},r=yg.utils.cfb_new({root:`R`}),i=`/Workbook`;switch(n.bookType||`xls`){case`xls`:n.bookType=`biff8`;case`xla`:n.bookType||=`xla`;case`biff8`:i=`/Workbook`,n.biff=8;break;case`biff5`:i=`/Book`,n.biff=5;break;default:throw Error(`invalid type `+n.bookType+` for XLS CFB`)}return yg.utils.cfb_add(r,i,FE(e,n)),n.biff==8&&(e.Props||e.Custprops)&&hE(e,r),n.biff==8&&e.vbaraw&&rS(r,yg.read(e.vbaraw,{type:typeof e.vbaraw==`string`?`binary`:`buffer`})),r}var _E={0:{f:hw},1:{f:Cw},2:{f:Uw},3:{f:jw},4:{f:Dw},5:{f:zw},6:{f:Jw},7:{f:Fw},8:{f:tT},9:{f:eT},10:{f:Qw},11:{f:$w},12:{f:Tw},13:{f:Gw},14:{f:Nw},15:{f:kw},16:{f:Vw},17:{f:Xw},18:{f:Lw},19:{f:jv},20:{},21:{},22:{},23:{},24:{},25:{},26:{},27:{},28:{},29:{},30:{},31:{},32:{},33:{},34:{},35:{T:1},36:{T:-1},37:{T:1},38:{T:-1},39:{f:UT},40:{},42:{},43:{f:px},44:{f:dx},45:{f:_x},46:{f:Sx},47:{f:yx},48:{},49:{f:Tv},50:{},51:{f:zx},52:{T:1},53:{T:-1},54:{T:1},55:{T:-1},56:{T:1},57:{T:-1},58:{},59:{},60:{f:Nb},62:{f:qw},63:{f:Kx},64:{f:vT},65:{},66:{},67:{},68:{},69:{},70:{},128:{},129:{T:1},130:{T:-1},131:{T:1,f:ev,p:0},132:{T:-1},133:{T:1},134:{T:-1},135:{T:1},136:{T:-1},137:{T:1,f:mT},138:{T:-1},139:{T:1},140:{T:-1},141:{T:1},142:{T:-1},143:{T:1},144:{T:-1},145:{T:1},146:{T:-1},147:{f:xw},148:{f:vw,p:16},151:{f:sT},152:{},153:{f:VT},154:{},155:{},156:{f:zT},157:{},158:{},159:{T:1,f:Kb},160:{T:-1},161:{T:1,f:Xv},162:{T:-1},163:{T:1},164:{T:-1},165:{T:1},166:{T:-1},167:{},168:{},169:{},170:{},171:{},172:{T:1},173:{T:-1},174:{},175:{},176:{f:nT},177:{T:1},178:{T:-1},179:{T:1},180:{T:-1},181:{T:1},182:{T:-1},183:{T:1},184:{T:-1},185:{T:1},186:{T:-1},187:{T:1},188:{T:-1},189:{T:1},190:{T:-1},191:{T:1},192:{T:-1},193:{T:1},194:{T:-1},195:{T:1},196:{T:-1},197:{T:1},198:{T:-1},199:{T:1},200:{T:-1},201:{T:1},202:{T:-1},203:{T:1},204:{T:-1},205:{T:1},206:{T:-1},207:{T:1},208:{T:-1},209:{T:1},210:{T:-1},211:{T:1},212:{T:-1},213:{T:1},214:{T:-1},215:{T:1},216:{T:-1},217:{T:1},218:{T:-1},219:{T:1},220:{T:-1},221:{T:1},222:{T:-1},223:{T:1},224:{T:-1},225:{T:1},226:{T:-1},227:{T:1},228:{T:-1},229:{T:1},230:{T:-1},231:{T:1},232:{T:-1},233:{T:1},234:{T:-1},235:{T:1},236:{T:-1},237:{T:1},238:{T:-1},239:{T:1},240:{T:-1},241:{T:1},242:{T:-1},243:{T:1},244:{T:-1},245:{T:1},246:{T:-1},247:{T:1},248:{T:-1},249:{T:1},250:{T:-1},251:{T:1},252:{T:-1},253:{T:1},254:{T:-1},255:{T:1},256:{T:-1},257:{T:1},258:{T:-1},259:{T:1},260:{T:-1},261:{T:1},262:{T:-1},263:{T:1},264:{T:-1},265:{T:1},266:{T:-1},267:{T:1},268:{T:-1},269:{T:1},270:{T:-1},271:{T:1},272:{T:-1},273:{T:1},274:{T:-1},275:{T:1},276:{T:-1},277:{},278:{T:1},279:{T:-1},280:{T:1},281:{T:-1},282:{T:1},283:{T:1},284:{T:-1},285:{T:1},286:{T:-1},287:{T:1},288:{T:-1},289:{T:1},290:{T:-1},291:{T:1},292:{T:-1},293:{T:1},294:{T:-1},295:{T:1},296:{T:-1},297:{T:1},298:{T:-1},299:{T:1},300:{T:-1},301:{T:1},302:{T:-1},303:{T:1},304:{T:-1},305:{T:1},306:{T:-1},307:{T:1},308:{T:-1},309:{T:1},310:{T:-1},311:{T:1},312:{T:-1},313:{T:-1},314:{T:1},315:{T:-1},316:{T:1},317:{T:-1},318:{T:1},319:{T:-1},320:{T:1},321:{T:-1},322:{T:1},323:{T:-1},324:{T:1},325:{T:-1},326:{T:1},327:{T:-1},328:{T:1},329:{T:-1},330:{T:1},331:{T:-1},332:{T:1},333:{T:-1},334:{T:1},335:{f:Lx},336:{T:-1},337:{f:Hx,T:1},338:{T:-1},339:{T:1},340:{T:-1},341:{T:1},342:{T:-1},343:{T:1},344:{T:-1},345:{T:1},346:{T:-1},347:{T:1},348:{T:-1},349:{T:1},350:{T:-1},351:{},352:{},353:{T:1},354:{T:-1},355:{f:Wv},357:{},358:{},359:{},360:{T:1},361:{},362:{f:Db},363:{},364:{},366:{},367:{},368:{},369:{},370:{},371:{},372:{T:1},373:{T:-1},374:{T:1},375:{T:-1},376:{T:1},377:{T:-1},378:{T:1},379:{T:-1},380:{T:1},381:{T:-1},382:{T:1},383:{T:-1},384:{T:1},385:{T:-1},386:{T:1},387:{T:-1},388:{T:1},389:{T:-1},390:{T:1},391:{T:-1},392:{T:1},393:{T:-1},394:{T:1},395:{T:-1},396:{},397:{},398:{},399:{},400:{},401:{T:1},403:{},404:{},405:{},406:{},407:{},408:{},409:{},410:{},411:{},412:{},413:{},414:{},415:{},416:{},417:{},418:{},419:{},420:{},421:{},422:{T:1},423:{T:1},424:{T:-1},425:{T:-1},426:{f:cT},427:{f:lT},428:{},429:{T:1},430:{T:-1},431:{T:1},432:{T:-1},433:{T:1},434:{T:-1},435:{T:1},436:{T:-1},437:{T:1},438:{T:-1},439:{T:1},440:{T:-1},441:{T:1},442:{T:-1},443:{T:1},444:{T:-1},445:{T:1},446:{T:-1},447:{T:1},448:{T:-1},449:{T:1},450:{T:-1},451:{T:1},452:{T:-1},453:{T:1},454:{T:-1},455:{T:1},456:{T:-1},457:{T:1},458:{T:-1},459:{T:1},460:{T:-1},461:{T:1},462:{T:-1},463:{T:1},464:{T:-1},465:{T:1},466:{T:-1},467:{T:1},468:{T:-1},469:{T:1},470:{T:-1},471:{},472:{},473:{T:1},474:{T:-1},475:{},476:{f:fT},477:{},478:{},479:{T:1},480:{T:-1},481:{T:1},482:{T:-1},483:{T:1},484:{T:-1},485:{f:bw},486:{T:1},487:{T:-1},488:{T:1},489:{T:-1},490:{T:1},491:{T:-1},492:{T:1},493:{T:-1},494:{f:aT},495:{T:1},496:{T:-1},497:{T:1},498:{T:-1},499:{},500:{T:1},501:{T:-1},502:{T:1},503:{T:-1},504:{},505:{T:1},506:{T:-1},507:{},508:{T:1},509:{T:-1},510:{T:1},511:{T:-1},512:{},513:{},514:{T:1},515:{T:-1},516:{T:1},517:{T:-1},518:{T:1},519:{T:-1},520:{T:1},521:{T:-1},522:{},523:{},524:{},525:{},526:{},527:{},528:{T:1},529:{T:-1},530:{T:1},531:{T:-1},532:{T:1},533:{T:-1},534:{},535:{},536:{},537:{},538:{T:1},539:{T:-1},540:{T:1},541:{T:-1},542:{T:1},548:{},549:{},550:{f:Wv},551:{},552:{},553:{},554:{T:1},555:{T:-1},556:{T:1},557:{T:-1},558:{T:1},559:{T:-1},560:{T:1},561:{T:-1},562:{},564:{},565:{T:1},566:{T:-1},569:{T:1},570:{T:-1},572:{},573:{T:1},574:{T:-1},577:{},578:{},579:{},580:{},581:{},582:{},583:{},584:{},585:{},586:{},587:{},588:{T:-1},589:{},590:{T:1},591:{T:-1},592:{T:1},593:{T:-1},594:{T:1},595:{T:-1},596:{},597:{T:1},598:{T:-1},599:{T:1},600:{T:-1},601:{T:1},602:{T:-1},603:{T:1},604:{T:-1},605:{T:1},606:{T:-1},607:{},608:{T:1},609:{T:-1},610:{},611:{T:1},612:{T:-1},613:{T:1},614:{T:-1},615:{T:1},616:{T:-1},617:{T:1},618:{T:-1},619:{T:1},620:{T:-1},625:{},626:{T:1},627:{T:-1},628:{T:1},629:{T:-1},630:{T:1},631:{T:-1},632:{f:eS},633:{T:1},634:{T:-1},635:{T:1,f:Qx},636:{T:-1},637:{f:Nv},638:{T:1},639:{},640:{T:-1},641:{T:1},642:{T:-1},643:{T:1},644:{},645:{T:-1},646:{T:1},648:{T:1},649:{},650:{T:-1},651:{f:jT},652:{},653:{T:1},654:{T:-1},655:{T:1},656:{T:-1},657:{T:1},658:{T:-1},659:{},660:{T:1},661:{},662:{T:-1},663:{},664:{T:1},665:{},666:{T:-1},667:{},668:{},669:{},671:{T:1},672:{T:-1},673:{T:1},674:{T:-1},675:{},676:{},677:{},678:{},679:{},680:{},681:{},1024:{},1025:{},1026:{T:1},1027:{T:-1},1028:{T:1},1029:{T:-1},1030:{},1031:{T:1},1032:{T:-1},1033:{T:1},1034:{T:-1},1035:{},1036:{},1037:{},1038:{T:1},1039:{T:-1},1040:{},1041:{T:1},1042:{T:-1},1043:{},1044:{},1045:{},1046:{T:1},1047:{T:-1},1048:{T:1},1049:{T:-1},1050:{},1051:{T:1},1052:{T:1},1053:{f:yT},1054:{T:1},1055:{},1056:{T:1},1057:{T:-1},1058:{T:1},1059:{T:-1},1061:{},1062:{T:1},1063:{T:-1},1064:{T:1},1065:{T:-1},1066:{T:1},1067:{T:-1},1068:{T:1},1069:{T:-1},1070:{T:1},1071:{T:-1},1072:{T:1},1073:{T:-1},1075:{T:1},1076:{T:-1},1077:{T:1},1078:{T:-1},1079:{T:1},1080:{T:-1},1081:{T:1},1082:{T:-1},1083:{T:1},1084:{T:-1},1085:{},1086:{T:1},1087:{T:-1},1088:{T:1},1089:{T:-1},1090:{T:1},1091:{T:-1},1092:{T:1},1093:{T:-1},1094:{T:1},1095:{T:-1},1096:{},1097:{T:1},1098:{},1099:{T:-1},1100:{T:1},1101:{T:-1},1102:{},1103:{},1104:{},1105:{},1111:{},1112:{},1113:{T:1},1114:{T:-1},1115:{T:1},1116:{T:-1},1117:{},1118:{T:1},1119:{T:-1},1120:{T:1},1121:{T:-1},1122:{T:1},1123:{T:-1},1124:{T:1},1125:{T:-1},1126:{},1128:{T:1},1129:{T:-1},1130:{},1131:{T:1},1132:{T:-1},1133:{T:1},1134:{T:-1},1135:{T:1},1136:{T:-1},1137:{T:1},1138:{T:-1},1139:{T:1},1140:{T:-1},1141:{},1142:{T:1},1143:{T:-1},1144:{T:1},1145:{T:-1},1146:{},1147:{T:1},1148:{T:-1},1149:{T:1},1150:{T:-1},1152:{T:1},1153:{T:-1},1154:{T:-1},1155:{T:-1},1156:{T:-1},1157:{T:1},1158:{T:-1},1159:{T:1},1160:{T:-1},1161:{T:1},1162:{T:-1},1163:{T:1},1164:{T:-1},1165:{T:1},1166:{T:-1},1167:{T:1},1168:{T:-1},1169:{T:1},1170:{T:-1},1171:{},1172:{T:1},1173:{T:-1},1177:{},1178:{T:1},1180:{},1181:{},1182:{},2048:{T:1},2049:{T:-1},2050:{},2051:{T:1},2052:{T:-1},2053:{},2054:{},2055:{T:1},2056:{T:-1},2057:{T:1},2058:{T:-1},2060:{},2067:{},2068:{T:1},2069:{T:-1},2070:{},2071:{},2072:{T:1},2073:{T:-1},2075:{},2076:{},2077:{T:1},2078:{T:-1},2079:{},2080:{T:1},2081:{T:-1},2082:{},2083:{T:1},2084:{T:-1},2085:{T:1},2086:{T:-1},2087:{T:1},2088:{T:-1},2089:{T:1},2090:{T:-1},2091:{},2092:{},2093:{T:1},2094:{T:-1},2095:{},2096:{T:1},2097:{T:-1},2098:{T:1},2099:{T:-1},2100:{T:1},2101:{T:-1},2102:{},2103:{T:1},2104:{T:-1},2105:{},2106:{T:1},2107:{T:-1},2108:{},2109:{T:1},2110:{T:-1},2111:{T:1},2112:{T:-1},2113:{T:1},2114:{T:-1},2115:{},2116:{},2117:{},2118:{T:1},2119:{T:-1},2120:{},2121:{T:1},2122:{T:-1},2123:{T:1},2124:{T:-1},2125:{},2126:{T:1},2127:{T:-1},2128:{},2129:{T:1},2130:{T:-1},2131:{T:1},2132:{T:-1},2133:{T:1},2134:{},2135:{},2136:{},2137:{T:1},2138:{T:-1},2139:{T:1},2140:{T:-1},2141:{},3072:{},3073:{},4096:{T:1},4097:{T:-1},5002:{T:1},5003:{T:-1},5081:{T:1},5082:{T:-1},5083:{},5084:{T:1},5085:{T:-1},5086:{T:1},5087:{T:-1},5088:{},5089:{},5090:{},5092:{T:1},5093:{T:-1},5094:{},5095:{T:1},5096:{T:-1},5097:{},5099:{},65535:{n:``}};function Q(e,t,n,r){var i=t;if(!isNaN(i)){var a=r||(n||[]).length||0,o=e.next(4);o.write_shift(2,i),o.write_shift(2,a),a>0&&z_(n)&&e.push(n)}}function vE(e,t,n,r){var i=r||(n||[]).length||0;if(i<=8224)return Q(e,t,n,i);var a=t;if(!isNaN(a)){for(var o=n.parts||[],s=0,c=0,l=0;l+(o[s]||8224)<=8224;)l+=o[s]||8224,s++;var u=e.next(4);for(u.write_shift(2,a),u.write_shift(2,l),e.push(n.slice(c,c+l)),c+=l;c<i;){for(u=e.next(4),u.write_shift(2,60),l=0;l+(o[s]||8224)<=8224;)l+=o[s]||8224,s++;u.write_shift(2,l),e.push(n.slice(c,c+l)),c+=l}}}function yE(e,t,n){return e||=X(7),e.write_shift(2,t),e.write_shift(2,n),e.write_shift(2,0),e.write_shift(1,0),e}function bE(e,t,n,r){var i=X(9);return yE(i,e,t),$y(n,r||`b`,i),i}function xE(e,t,n){var r=X(8+2*n.length);return yE(r,e,t),r.write_shift(1,n.length),r.write_shift(n.length,n,`sbcs`),r.l<r.length?r.slice(0,r.l):r}function SE(e,t,n,r){if(t.v!=null)switch(t.t){case`d`:case`n`:var i=t.t==`d`?kg(Lg(t.v)):t.v;i==(i|0)&&i>=0&&i<65536?Q(e,2,Lb(n,r,i)):Q(e,3,Ib(n,r,i));return;case`b`:case`e`:Q(e,5,bE(n,r,t.v,t.t));return;case`s`:case`str`:Q(e,4,xE(n,r,(t.v||``).slice(0,255)));return}Q(e,1,yE(null,n,r))}function CE(e,t,n,r){var i=Array.isArray(t),a=yv(t[`!ref`]||`A1`),o,s=``,c=[];if(a.e.c>255||a.e.r>16383){if(r.WTF)throw Error(`Range `+(t[`!ref`]||`A1`)+` exceeds format limit A1:IV16384`);a.e.c=Math.min(a.e.c,255),a.e.r=Math.min(a.e.c,16383),o=vv(a)}for(var l=a.s.r;l<=a.e.r;++l){s=sv(l);for(var u=a.s.c;u<=a.e.c;++u){l===a.s.r&&(c[u]=dv(u)),o=c[u]+s;var d=i?(t[l]||[])[u]:t[o];d&&SE(e,d,l,u,r)}}}function wE(e,t){var n=t||{};Wm!=null&&n.dense==null&&(n.dense=Wm);for(var r=tv(),i=0,a=0;a<e.SheetNames.length;++a)e.SheetNames[a]==n.sheet&&(i=a);if(i==0&&n.sheet&&e.SheetNames[0]!=n.sheet)throw Error(`Sheet not found: `+n.sheet);return Q(r,n.biff==4?1033:n.biff==3?521:9,fb(e,16,n)),CE(r,e.Sheets[e.SheetNames[i]],i,n,e),Q(r,10),r.end()}function TE(e,t,n){Q(e,49,vb({sz:12,color:{theme:1},name:`Arial`,family:2,scheme:`minor`},n))}function EE(e,t,n){t&&[[5,8],[23,26],[41,44],[50,392]].forEach(function(r){for(var i=r[0];i<=r[1];++i)t[i]!=null&&Q(e,1054,xb(i,t[i],n))})}function DE(e,t){var n=X(19);n.write_shift(4,2151),n.write_shift(4,0),n.write_shift(4,0),n.write_shift(2,3),n.write_shift(1,1),n.write_shift(4,0),Q(e,2151,n),n=X(39),n.write_shift(4,2152),n.write_shift(4,0),n.write_shift(4,0),n.write_shift(2,3),n.write_shift(1,0),n.write_shift(4,0),n.write_shift(2,1),n.write_shift(4,4),n.write_shift(2,0),db(yv(t[`!ref`]||`A1`),n),n.write_shift(4,4),Q(e,2152,n)}function OE(e,t){for(var n=0;n<16;++n)Q(e,224,Cb({numFmtId:0,style:!0},0,t));t.cellXfs.forEach(function(n){Q(e,224,Cb(n,0,t))})}function kE(e,t){for(var n=0;n<t[`!links`].length;++n){var r=t[`!links`][n];Q(e,440,Ab(r)),r[1].Tooltip&&Q(e,2048,jb(r))}delete t[`!links`]}function AE(e,t){if(t){var n=0;t.forEach(function(t,r){++n<=256&&t&&Q(e,125,Pb($C(r,t),r))})}}function jE(e,t,n,r,i){var a=16+tw(i.cellXfs,t,i);if(t.v==null&&!t.bf){Q(e,513,cb(n,r,a));return}if(t.bf)Q(e,6,BC(t,n,r,i,a));else switch(t.t){case`d`:case`n`:Q(e,515,Eb(n,r,t.t==`d`?kg(Lg(t.v)):t.v,a,i));break;case`b`:case`e`:Q(e,517,Tb(n,r,t.v,a,i,t.t));break;case`s`:case`str`:i.bookSST?Q(e,253,yb(n,r,QC(i.Strings,t.v,i.revStrings),a,i)):Q(e,516,bb(n,r,(t.v||``).slice(0,255),a,i));break;default:Q(e,513,cb(n,r,a))}}function ME(e,t,n){var r=tv(),i=n.SheetNames[e],a=n.Sheets[i]||{},o=(n||{}).Workbook||{},s=(o.Sheets||[])[e]||{},c=Array.isArray(a),l=t.biff==8,u,d=``,f=[],p=yv(a[`!ref`]||`A1`),m=l?65536:16384;if(p.e.c>255||p.e.r>=m){if(t.WTF)throw Error(`Range `+(a[`!ref`]||`A1`)+` exceeds format limit A1:IV16384`);p.e.c=Math.min(p.e.c,255),p.e.r=Math.min(p.e.c,m-1)}Q(r,2057,fb(n,16,t)),Q(r,13,Qy(1)),Q(r,12,Qy(100)),Q(r,15,Xy(!0)),Q(r,17,Xy(!1)),Q(r,16,$v(.001)),Q(r,95,Xy(!0)),Q(r,42,Xy(!1)),Q(r,43,Xy(!1)),Q(r,130,Qy(1)),Q(r,128,wb([0,0])),Q(r,131,Xy(!1)),Q(r,132,Xy(!1)),l&&AE(r,a[`!cols`]),Q(r,512,Sb(p,t)),l&&(a[`!links`]=[]);for(var h=p.s.r;h<=p.e.r;++h){d=sv(h);for(var g=p.s.c;g<=p.e.c;++g){h===p.s.r&&(f[g]=dv(g)),u=f[g]+d;var _=c?(a[h]||[])[g]:a[u];_&&(jE(r,_,h,g,t),l&&_.l&&a[`!links`].push([u,_.l]))}}var v=s.CodeName||s.name||i;return l&&Q(r,574,_b((o.Views||[])[0])),l&&(a[`!merges`]||[]).length&&Q(r,229,kb(a[`!merges`])),l&&kE(r,a),Q(r,442,ab(v,t)),l&&DE(r,a),Q(r,10),r.end()}function NE(e,t,n){var r=tv(),i=(e||{}).Workbook||{},a=i.Sheets||[],o=i.WBProps||{},s=n.biff==8,c=n.biff==5;Q(r,2057,fb(e,5,n)),n.bookType==`xla`&&Q(r,135),Q(r,225,s?Qy(1200):null),Q(r,193,Jy(2)),c&&Q(r,191),c&&Q(r,192),Q(r,226),Q(r,92,pb(`SheetJS`,n)),Q(r,66,Qy(s?1200:1252)),s&&Q(r,353,Qy(0)),s&&Q(r,448),Q(r,317,Fb(e.SheetNames.length)),s&&e.vbaraw&&Q(r,211),s&&e.vbaraw&&Q(r,442,ab(o.CodeName||`ThisWorkbook`,n)),Q(r,156,Qy(17)),Q(r,25,Xy(!1)),Q(r,18,Xy(!1)),Q(r,19,Qy(0)),s&&Q(r,431,Xy(!1)),s&&Q(r,444,Qy(0)),Q(r,61,gb(n)),Q(r,64,Xy(!1)),Q(r,141,Qy(0)),Q(r,34,Xy(NT(e)==`true`)),Q(r,14,Xy(!0)),s&&Q(r,439,Xy(!1)),Q(r,218,Qy(0)),TE(r,e,n),EE(r,e.SSF,n),OE(r,n),s&&Q(r,352,Xy(!1));var l=r.end(),u=tv();s&&Q(u,140,Mb()),s&&n.Strings&&vE(u,252,hb(n.Strings,n)),Q(u,10);var d=u.end(),f=tv(),p=0,m=0;for(m=0;m<e.SheetNames.length;++m)p+=(s?12:11)+(s?2:1)*e.SheetNames[m].length;var h=l.length+p+d.length;for(m=0;m<e.SheetNames.length;++m){var g=a[m]||{};Q(f,133,mb({pos:h,hs:g.Hidden||0,dt:0,name:e.SheetNames[m]},n)),h+=t[m].length}var _=f.end();if(p!=_.length)throw Error(`BS8 `+p+` != `+_.length);var v=[];return l.length&&v.push(l),_.length&&v.push(_),d.length&&v.push(d),rh(v)}function PE(e,t){var n=t||{},r=[];e&&!e.SSF&&(e.SSF=zg(yh)),e&&e.SSF&&(mg(),pg(e.SSF),n.revssf=Eg(e.SSF),n.revssf[e.SSF[65535]]=0,n.ssf=e.SSF),n.Strings=[],n.Strings.Count=0,n.Strings.Unique=0,gD(n),n.cellXfs=[],tw(n.cellXfs,{},{revssf:{General:0}}),e.Props||={};for(var i=0;i<e.SheetNames.length;++i)r[r.length]=ME(i,n,e);return r.unshift(NE(e,r,n)),rh(r)}function FE(e,t){for(var n=0;n<=e.SheetNames.length;++n){var r=e.Sheets[e.SheetNames[n]];!r||!r[`!ref`]||_v(r[`!ref`]).e.c>255&&typeof console<`u`&&console.error&&console.error(`Worksheet '`+e.SheetNames[n]+`' extends beyond column IV (255).  Data may be lost.`)}var i=t||{};switch(i.biff||2){case 8:case 5:return PE(e,t);case 4:case 3:case 2:return wE(e,t)}throw Error(`invalid type `+i.bookType+` for BIFF`)}function IE(e,t,n,r){for(var i=e[`!merges`]||[],a=[],o=t.s.c;o<=t.e.c;++o){for(var s=0,c=0,l=0;l<i.length;++l)if(!(i[l].s.r>n||i[l].s.c>o)&&!(i[l].e.r<n||i[l].e.c<o)){if(i[l].s.r<n||i[l].s.c<o){s=-1;break}s=i[l].e.r-i[l].s.r+1,c=i[l].e.c-i[l].s.c+1;break}if(!(s<0)){var u=gv({r:n,c:o}),d=r.dense?(e[n]||[])[o]:e[u],f=d&&d.v!=null&&(d.h||Qg(d.w||(xv(d),d.w)||``))||``,p={};s>1&&(p.rowspan=s),c>1&&(p.colspan=c),r.editable?f=`<span contenteditable="true">`+f+`</span>`:d&&(p[`data-t`]=d&&d.t||`z`,d.v!=null&&(p[`data-v`]=d.v),d.z!=null&&(p[`data-z`]=d.z),d.l&&(d.l.Target||`#`).charAt(0)!=`#`&&(f=`<a href="`+d.l.Target+`">`+f+`</a>`)),p.id=(r.id||`sjs`)+`-`+u,a.push(Y(`td`,f,p))}}return`<tr>`+a.join(``)+`</tr>`}var LE=`<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>`,RE=`</body></html>`;function zE(e,t,n){return[].join(``)+`<table`+(n&&n.id?` id="`+n.id+`"`:``)+`>`}function BE(e,t){var n=t||{},r=n.header==null?LE:n.header,i=n.footer==null?RE:n.footer,a=[r],o=_v(e[`!ref`]);n.dense=Array.isArray(e),a.push(zE(e,o,n));for(var s=o.s.r;s<=o.e.r;++s)a.push(IE(e,o,s,n));return a.push(`</table>`+i),a.join(``)}function VE(e,t,n){var r=n||{};Wm!=null&&(r.dense=Wm);var i=0,a=0;if(r.origin!=null)if(typeof r.origin==`number`)i=r.origin;else{var o=typeof r.origin==`string`?hv(r.origin):r.origin;i=o.r,a=o.c}var s=t.getElementsByTagName(`tr`),c=Math.min(r.sheetRows||1e7,s.length),l={s:{r:0,c:0},e:{r:i,c:a}};if(e[`!ref`]){var u=_v(e[`!ref`]);l.s.r=Math.min(l.s.r,u.s.r),l.s.c=Math.min(l.s.c,u.s.c),l.e.r=Math.max(l.e.r,u.e.r),l.e.c=Math.max(l.e.c,u.e.c),i==-1&&(l.e.r=i=u.e.r+1)}var d=[],f=0,p=e[`!rows`]||=[],m=0,h=0,g=0,_=0,v=0,y=0;for(e[`!cols`]||=[];m<s.length&&h<c;++m){var b=s[m];if(WE(b)){if(r.display)continue;p[h]={hidden:!0}}var x=b.children;for(g=_=0;g<x.length;++g){var S=x[g];if(!(r.display&&WE(S))){var C=S.hasAttribute(`data-v`)?S.getAttribute(`data-v`):S.hasAttribute(`v`)?S.getAttribute(`v`):c_(S.innerHTML),w=S.getAttribute(`data-z`)||S.getAttribute(`z`);for(f=0;f<d.length;++f){var T=d[f];T.s.c==_+a&&T.s.r<h+i&&h+i<=T.e.r&&(_=T.e.c+1-a,f=-1)}y=+S.getAttribute(`colspan`)||1,((v=+S.getAttribute(`rowspan`)||1)>1||y>1)&&d.push({s:{r:h+i,c:_+a},e:{r:h+i+(v||1)-1,c:_+a+(y||1)-1}});var E={t:`s`,v:C},D=S.getAttribute(`data-t`)||S.getAttribute(`t`)||``;C!=null&&(C.length==0?E.t=D||`z`:r.raw||C.trim().length==0||D==`s`||(C===`TRUE`?E={t:`b`,v:!0}:C===`FALSE`?E={t:`b`,v:!1}:isNaN(Vg(C))?isNaN(Ug(C).getDate())||(E={t:`d`,v:Lg(C)},r.cellDates||(E={t:`n`,v:kg(E.v)}),E.z=r.dateNF||yh[14]):E={t:`n`,v:Vg(C)})),E.z===void 0&&w!=null&&(E.z=w);var O=``,k=S.getElementsByTagName(`A`);if(k&&k.length)for(var A=0;A<k.length&&!(k[A].hasAttribute(`href`)&&(O=k[A].getAttribute(`href`),O.charAt(0)!=`#`));++A);O&&O.charAt(0)!=`#`&&(E.l={Target:O}),r.dense?(e[h+i]||(e[h+i]=[]),e[h+i][_+a]=E):e[gv({c:_+a,r:h+i})]=E,l.e.c<_+a&&(l.e.c=_+a),_+=y}}++h}return d.length&&(e[`!merges`]=(e[`!merges`]||[]).concat(d)),l.e.r=Math.max(l.e.r,h-1+i),e[`!ref`]=vv(l),h>=c&&(e[`!fullref`]=vv((l.e.r=s.length-m+h-1+i,l))),e}function HE(e,t){return VE((t||{}).dense?[]:{},e,t)}function UE(e,t){return Sv(HE(e,t),t)}function WE(e){var t=``,n=GE(e);return n&&(t=n(e).getPropertyValue(`display`)),t||=e.style&&e.style.display,t===`none`}function GE(e){return e.ownerDocument.defaultView&&typeof e.ownerDocument.defaultView.getComputedStyle==`function`?e.ownerDocument.defaultView.getComputedStyle:typeof getComputedStyle==`function`?getComputedStyle:null}var KE=(function(){var e=[`<office:master-styles>`,`<style:master-page style:name="mp1" style:page-layout-name="mp1">`,`<style:header/>`,`<style:header-left style:display="false"/>`,`<style:footer/>`,`<style:footer-left style:display="false"/>`,`</style:master-page>`,`</office:master-styles>`].join(``),t=`<office:document-styles `+d_({"xmlns:office":`urn:oasis:names:tc:opendocument:xmlns:office:1.0`,"xmlns:table":`urn:oasis:names:tc:opendocument:xmlns:table:1.0`,"xmlns:style":`urn:oasis:names:tc:opendocument:xmlns:style:1.0`,"xmlns:text":`urn:oasis:names:tc:opendocument:xmlns:text:1.0`,"xmlns:draw":`urn:oasis:names:tc:opendocument:xmlns:drawing:1.0`,"xmlns:fo":`urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,"xmlns:dc":`http://purl.org/dc/elements/1.1/`,"xmlns:number":`urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0`,"xmlns:svg":`urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0`,"xmlns:of":`urn:oasis:names:tc:opendocument:xmlns:of:1.2`,"office:version":`1.2`})+`>`+e+`</office:document-styles>`;return function(){return Gg+t}})(),qE=(function(){var e=function(e){return Yg(e).replace(/  +/g,function(e){return`<text:s text:c="`+e.length+`"/>`}).replace(/\t/g,`<text:tab/>`).replace(/\n/g,`</text:p><text:p>`).replace(/^ /,`<text:s/>`).replace(/ $/,`<text:s/>`)},t=`          <table:table-cell />
`,n=`          <table:covered-table-cell/>
`,r=function(r,i,a){var o=[];o.push(`      <table:table table:name="`+Yg(i.SheetNames[a])+`" table:style-name="ta1">
`);var s=0,c=0,l=_v(r[`!ref`]||`A1`),u=r[`!merges`]||[],d=0,f=Array.isArray(r);if(r[`!cols`])for(c=0;c<=l.e.c;++c)o.push(`        <table:table-column`+(r[`!cols`][c]?` table:style-name="co`+r[`!cols`][c].ods+`"`:``)+`></table:table-column>
`);var p=``,m=r[`!rows`]||[];for(s=0;s<l.s.r;++s)p=m[s]?` table:style-name="ro`+m[s].ods+`"`:``,o.push(`        <table:table-row`+p+`></table:table-row>
`);for(;s<=l.e.r;++s){for(p=m[s]?` table:style-name="ro`+m[s].ods+`"`:``,o.push(`        <table:table-row`+p+`>
`),c=0;c<l.s.c;++c)o.push(t);for(;c<=l.e.c;++c){var h=!1,g={},_=``;for(d=0;d!=u.length;++d)if(!(u[d].s.c>c)&&!(u[d].s.r>s)&&!(u[d].e.c<c)&&!(u[d].e.r<s)){(u[d].s.c!=c||u[d].s.r!=s)&&(h=!0),g[`table:number-columns-spanned`]=u[d].e.c-u[d].s.c+1,g[`table:number-rows-spanned`]=u[d].e.r-u[d].s.r+1;break}if(h){o.push(n);continue}var v=gv({r:s,c}),y=f?(r[s]||[])[c]:r[v];if(y&&y.f&&(g[`table:formula`]=Yg(YC(y.f)),y.F&&y.F.slice(0,v.length)==v)){var b=_v(y.F);g[`table:number-matrix-columns-spanned`]=b.e.c-b.s.c+1,g[`table:number-matrix-rows-spanned`]=b.e.r-b.s.r+1}if(!y){o.push(t);continue}switch(y.t){case`b`:_=y.v?`TRUE`:`FALSE`,g[`office:value-type`]=`boolean`,g[`office:boolean-value`]=y.v?`true`:`false`;break;case`n`:_=y.w||String(y.v||0),g[`office:value-type`]=`float`,g[`office:value`]=y.v||0;break;case`s`:case`str`:_=y.v==null?``:y.v,g[`office:value-type`]=`string`;break;case`d`:_=y.w||Lg(y.v).toISOString(),g[`office:value-type`]=`date`,g[`office:date-value`]=Lg(y.v).toISOString(),g[`table:style-name`]=`ce1`;break;default:o.push(t);continue}var x=e(_);if(y.l&&y.l.Target){var S=y.l.Target;S=S.charAt(0)==`#`?`#`+XC(S.slice(1)):S,S.charAt(0)!=`#`&&!S.match(/^\w+:/)&&(S=`../`+S),x=Y(`text:a`,x,{"xlink:href":S.replace(/&/g,`&amp;`)})}o.push(`          `+Y(`table:table-cell`,Y(`text:p`,x,{}),g)+`
`)}o.push(`        </table:table-row>
`)}return o.push(`      </table:table>
`),o.join(``)},i=function(e,t){e.push(` <office:automatic-styles>
`),e.push(`  <number:date-style style:name="N37" number:automatic-order="true">
`),e.push(`   <number:month number:style="long"/>
`),e.push(`   <number:text>/</number:text>
`),e.push(`   <number:day number:style="long"/>
`),e.push(`   <number:text>/</number:text>
`),e.push(`   <number:year/>
`),e.push(`  </number:date-style>
`);var n=0;t.SheetNames.map(function(e){return t.Sheets[e]}).forEach(function(t){if(t&&t[`!cols`]){for(var r=0;r<t[`!cols`].length;++r)if(t[`!cols`][r]){var i=t[`!cols`][r];if(i.width==null&&i.wpx==null&&i.wch==null)continue;ix(i),i.ods=n;var a=t[`!cols`][r].wpx+`px`;e.push(`  <style:style style:name="co`+n+`" style:family="table-column">
`),e.push(`   <style:table-column-properties fo:break-before="auto" style:column-width="`+a+`"/>
`),e.push(`  </style:style>
`),++n}}});var r=0;t.SheetNames.map(function(e){return t.Sheets[e]}).forEach(function(t){if(t&&t[`!rows`]){for(var n=0;n<t[`!rows`].length;++n)if(t[`!rows`][n]){t[`!rows`][n].ods=r;var i=t[`!rows`][n].hpx+`px`;e.push(`  <style:style style:name="ro`+r+`" style:family="table-row">
`),e.push(`   <style:table-row-properties fo:break-before="auto" style:row-height="`+i+`"/>
`),e.push(`  </style:style>
`),++r}}}),e.push(`  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">
`),e.push(`   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>
`),e.push(`  </style:style>
`),e.push(`  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>
`),e.push(` </office:automatic-styles>
`)};return function(e,t){var n=[Gg],a=d_({"xmlns:office":`urn:oasis:names:tc:opendocument:xmlns:office:1.0`,"xmlns:table":`urn:oasis:names:tc:opendocument:xmlns:table:1.0`,"xmlns:style":`urn:oasis:names:tc:opendocument:xmlns:style:1.0`,"xmlns:text":`urn:oasis:names:tc:opendocument:xmlns:text:1.0`,"xmlns:draw":`urn:oasis:names:tc:opendocument:xmlns:drawing:1.0`,"xmlns:fo":`urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,"xmlns:dc":`http://purl.org/dc/elements/1.1/`,"xmlns:meta":`urn:oasis:names:tc:opendocument:xmlns:meta:1.0`,"xmlns:number":`urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0`,"xmlns:presentation":`urn:oasis:names:tc:opendocument:xmlns:presentation:1.0`,"xmlns:svg":`urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0`,"xmlns:chart":`urn:oasis:names:tc:opendocument:xmlns:chart:1.0`,"xmlns:dr3d":`urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0`,"xmlns:math":`http://www.w3.org/1998/Math/MathML`,"xmlns:form":`urn:oasis:names:tc:opendocument:xmlns:form:1.0`,"xmlns:script":`urn:oasis:names:tc:opendocument:xmlns:script:1.0`,"xmlns:ooo":`http://openoffice.org/2004/office`,"xmlns:ooow":`http://openoffice.org/2004/writer`,"xmlns:oooc":`http://openoffice.org/2004/calc`,"xmlns:dom":`http://www.w3.org/2001/xml-events`,"xmlns:xforms":`http://www.w3.org/2002/xforms`,"xmlns:xsd":`http://www.w3.org/2001/XMLSchema`,"xmlns:xsi":`http://www.w3.org/2001/XMLSchema-instance`,"xmlns:sheet":`urn:oasis:names:tc:opendocument:sh33tjs:1.0`,"xmlns:rpt":`http://openoffice.org/2005/report`,"xmlns:of":`urn:oasis:names:tc:opendocument:xmlns:of:1.2`,"xmlns:xhtml":`http://www.w3.org/1999/xhtml`,"xmlns:grddl":`http://www.w3.org/2003/g/data-view#`,"xmlns:tableooo":`http://openoffice.org/2009/table`,"xmlns:drawooo":`http://openoffice.org/2010/draw`,"xmlns:calcext":`urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0`,"xmlns:loext":`urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0`,"xmlns:field":`urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0`,"xmlns:formx":`urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0`,"xmlns:css3t":`http://www.w3.org/TR/css3-text/`,"office:version":`1.2`}),o=d_({"xmlns:config":`urn:oasis:names:tc:opendocument:xmlns:config:1.0`,"office:mimetype":`application/vnd.oasis.opendocument.spreadsheet`});t.bookType==`fods`?(n.push(`<office:document`+a+o+`>
`),n.push(jy().replace(/office:document-meta/g,`office:meta`))):n.push(`<office:document-content`+a+`>
`),i(n,e),n.push(`  <office:body>
`),n.push(`    <office:spreadsheet>
`);for(var s=0;s!=e.SheetNames.length;++s)n.push(r(e.Sheets[e.SheetNames[s]],e,s,t));return n.push(`    </office:spreadsheet>
`),n.push(`  </office:body>
`),t.bookType==`fods`?n.push(`</office:document>`):n.push(`</office:document-content>`),n.join(``)}})();function JE(e,t){if(t.bookType==`fods`)return qE(e,t);var n=Wg(),r=``,i=[],a=[];return r=`mimetype`,J(n,r,`application/vnd.oasis.opendocument.spreadsheet`),r=`content.xml`,J(n,r,qE(e,t)),i.push([r,`text/xml`]),a.push([r,`ContentFile`]),r=`styles.xml`,J(n,r,KE(e,t)),i.push([r,`text/xml`]),a.push([r,`StylesFile`]),r=`meta.xml`,J(n,r,Gg+jy()),i.push([r,`text/xml`]),a.push([r,`MetadataFile`]),r=`manifest.rdf`,J(n,r,Ay(a)),i.push([r,`application/rdf+xml`]),r=`META-INF/manifest.xml`,J(n,r,Dy(i)),n}function YE(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function XE(e){return typeof TextEncoder<`u`?new TextEncoder().encode(e):$m(s_(e))}function ZE(e,t){outer:for(var n=0;n<=e.length-t.length;++n){for(var r=0;r<t.length;++r)if(e[n+r]!=t[r])continue outer;return!0}return!1}function QE(e){var t=e.reduce(function(e,t){return e+t.length},0),n=new Uint8Array(t),r=0;return e.forEach(function(e){n.set(e,r),r+=e.length}),n}function $E(e,t,n){var r=Math.floor(n==0?0:Math.LOG10E*Math.log(Math.abs(n)))+6176-20,i=n/10**(r-6176);e[t+15]|=r>>7,e[t+14]|=(r&127)<<1;for(var a=0;i>=1;++a,i/=256)e[t+a]=i&255;e[t+15]|=n>=0?0:128}function eD(e,t){var n=t?t[0]:0,r=e[n]&127;varint:if(e[n++]>=128&&(r|=(e[n]&127)<<7,e[n++]<128||(r|=(e[n]&127)<<14,e[n++]<128)||(r|=(e[n]&127)<<21,e[n++]<128)||(r+=(e[n]&127)*2**28,++n,e[n++]<128)||(r+=(e[n]&127)*2**35,++n,e[n++]<128)||(r+=(e[n]&127)*2**42,++n,e[n++]<128)))break varint;return t&&(t[0]=n),r}function tD(e){var t=new Uint8Array(7);t[0]=e&127;var n=1;sz:if(e>127){if(t[n-1]|=128,t[n]=e>>7&127,++n,e<=16383||(t[n-1]|=128,t[n]=e>>14&127,++n,e<=2097151)||(t[n-1]|=128,t[n]=e>>21&127,++n,e<=268435455)||(t[n-1]|=128,t[n]=e/256>>>21&127,++n,e<=34359738367)||(t[n-1]|=128,t[n]=e/65536>>>21&127,++n,e<=4398046511103))break sz;t[n-1]|=128,t[n]=e/16777216>>>21&127,++n}return t.slice(0,n)}function nD(e){var t=0,n=e[t]&127;varint:if(e[t++]>=128){if(n|=(e[t]&127)<<7,e[t++]<128||(n|=(e[t]&127)<<14,e[t++]<128)||(n|=(e[t]&127)<<21,e[t++]<128))break varint;n|=(e[t]&127)<<28}return n}function rD(e){for(var t=[],n=[0];n[0]<e.length;){var r=n[0],i=eD(e,n),a=i&7;i=Math.floor(i/8);var o=0,s;if(i==0)break;switch(a){case 0:for(var c=n[0];e[n[0]++]>=128;);s=e.slice(c,n[0]);break;case 5:o=4,s=e.slice(n[0],n[0]+o),n[0]+=o;break;case 1:o=8,s=e.slice(n[0],n[0]+o),n[0]+=o;break;case 2:o=eD(e,n),s=e.slice(n[0],n[0]+o),n[0]+=o;break;default:throw Error(`PB Type ${a} for Field ${i} at offset ${r}`)}var l={data:s,type:a};t[i]==null?t[i]=[l]:t[i].push(l)}return t}function iD(e){var t=[];return e.forEach(function(e,n){e.forEach(function(e){e.data&&(t.push(tD(n*8+e.type)),e.type==2&&t.push(tD(e.data.length)),t.push(e.data))})}),QE(t)}function aD(e){for(var t=[],n=[0];n[0]<e.length;){var r=eD(e,n),i=rD(e.slice(n[0],n[0]+r));n[0]+=r;var a={id:nD(i[1][0].data),messages:[]};i[2].forEach(function(t){var r=rD(t.data),i=nD(r[3][0].data);a.messages.push({meta:r,data:e.slice(n[0],n[0]+i)}),n[0]+=i}),i[3]?.[0]&&(a.merge=nD(i[3][0].data)>>>0>0),t.push(a)}return t}function oD(e){var t=[];return e.forEach(function(e){var n=[];n[1]=[{data:tD(e.id),type:0}],n[2]=[],e.merge!=null&&(n[3]=[{data:tD(+!!e.merge),type:0}]);var r=[];e.messages.forEach(function(e){r.push(e.data),e.meta[3]=[{type:0,data:tD(e.data.length)}],n[2].push({data:iD(e.meta),type:2})});var i=iD(n);t.push(tD(i.length)),t.push(i),r.forEach(function(e){return t.push(e)})}),QE(t)}function sD(e,t){if(e!=0)throw Error(`Unexpected Snappy chunk type ${e}`);for(var n=[0],r=eD(t,n),i=[];n[0]<t.length;){var a=t[n[0]]&3;if(a==0){var o=t[n[0]++]>>2;if(o<60)++o;else{var s=o-59;o=t[n[0]],s>1&&(o|=t[n[0]+1]<<8),s>2&&(o|=t[n[0]+2]<<16),s>3&&(o|=t[n[0]+3]<<24),o>>>=0,o++,n[0]+=s}i.push(t.slice(n[0],n[0]+o)),n[0]+=o;continue}else{var c=0,l=0;if(a==1?(l=(t[n[0]]>>2&7)+4,c=(t[n[0]++]&224)<<3,c|=t[n[0]++]):(l=(t[n[0]++]>>2)+1,a==2?(c=t[n[0]]|t[n[0]+1]<<8,n[0]+=2):(c=(t[n[0]]|t[n[0]+1]<<8|t[n[0]+2]<<16|t[n[0]+3]<<24)>>>0,n[0]+=4)),i=[QE(i)],c==0)throw Error(`Invalid offset 0`);if(c>i[0].length)throw Error(`Invalid offset beyond length`);if(l>=c)for(i.push(i[0].slice(-c)),l-=c;l>=i[i.length-1].length;)i.push(i[i.length-1]),l-=i[i.length-1].length;i.push(i[0].slice(-c,-c+l))}}var u=QE(i);if(u.length!=r)throw Error(`Unexpected length: ${u.length} != ${r}`);return u}function cD(e){for(var t=[],n=0;n<e.length;){var r=e[n++],i=e[n]|e[n+1]<<8|e[n+2]<<16;n+=3,t.push(sD(r,e.slice(n,n+i))),n+=i}if(n!==e.length)throw Error(`data is not a valid framed stream!`);return QE(t)}function lD(e){for(var t=[],n=0;n<e.length;){var r=Math.min(e.length-n,268435455),i=new Uint8Array(4);t.push(i);var a=tD(r),o=a.length;t.push(a),r<=60?(o++,t.push(new Uint8Array([r-1<<2]))):r<=256?(o+=2,t.push(new Uint8Array([240,r-1&255]))):r<=65536?(o+=3,t.push(new Uint8Array([244,r-1&255,r-1>>8&255]))):r<=16777216?(o+=4,t.push(new Uint8Array([248,r-1&255,r-1>>8&255,r-1>>16&255]))):r<=4294967296&&(o+=5,t.push(new Uint8Array([252,r-1&255,r-1>>8&255,r-1>>16&255,r-1>>>24&255]))),t.push(e.slice(n,n+r)),o+=r,i[0]=0,i[1]=o&255,i[2]=o>>8&255,i[3]=o>>16&255,n+=r}return QE(t)}function uD(e,t){var n=new Uint8Array(32),r=YE(n),i=12,a=0;switch(n[0]=5,e.t){case`n`:n[1]=2,$E(n,i,e.v),a|=1,i+=16;break;case`b`:n[1]=6,r.setFloat64(i,e.v?1:0,!0),a|=2,i+=8;break;case`s`:if(t.indexOf(e.v)==-1)throw Error(`Value ${e.v} missing from SST!`);n[1]=3,r.setUint32(i,t.indexOf(e.v),!0),a|=8,i+=4;break;default:throw`unsupported cell type `+e.t}return r.setUint32(8,a,!0),n.slice(0,i)}function dD(e,t){var n=new Uint8Array(32),r=YE(n),i=12,a=0;switch(n[0]=3,e.t){case`n`:n[2]=2,r.setFloat64(i,e.v,!0),a|=32,i+=8;break;case`b`:n[2]=6,r.setFloat64(i,e.v?1:0,!0),a|=32,i+=8;break;case`s`:if(t.indexOf(e.v)==-1)throw Error(`Value ${e.v} missing from SST!`);n[2]=3,r.setUint32(i,t.indexOf(e.v),!0),a|=16,i+=4;break;default:throw`unsupported cell type `+e.t}return r.setUint32(4,a,!0),n.slice(0,i)}function fD(e){return eD(rD(e)[1][0].data)}function pD(e,t,n){if(!e[6]?.[0]||!e[7]?.[0])throw`Mutation only works on post-BNC storages!`;if(e[8]?.[0]?.data&&nD(e[8][0].data)>0)throw`Math only works with normal offsets`;for(var r=0,i=YE(e[7][0].data),a=0,o=[],s=YE(e[4][0].data),c=0,l=[],u=0;u<t.length;++u){if(t[u]==null){i.setUint16(u*2,65535,!0),s.setUint16(u*2,65535);continue}i.setUint16(u*2,a,!0),s.setUint16(u*2,c,!0);var d,f;switch(typeof t[u]){case`string`:d=uD({t:`s`,v:t[u]},n),f=dD({t:`s`,v:t[u]},n);break;case`number`:d=uD({t:`n`,v:t[u]},n),f=dD({t:`n`,v:t[u]},n);break;case`boolean`:d=uD({t:`b`,v:t[u]},n),f=dD({t:`b`,v:t[u]},n);break;default:throw Error(`Unsupported value `+t[u])}o.push(d),a+=d.length,l.push(f),c+=f.length,++r}for(e[2][0].data=tD(r);u<e[7][0].data.length/2;++u)i.setUint16(u*2,65535,!0),s.setUint16(u*2,65535,!0);return e[6][0].data=QE(o),e[3][0].data=QE(l),r}function mD(e,t){if(!t||!t.numbers)throw Error("Must pass a `numbers` option -- check the README");var n=e.Sheets[e.SheetNames[0]];e.SheetNames.length>1&&console.error(`The Numbers writer currently writes only the first table`);var r=_v(n[`!ref`]);r.s.r=r.s.c=0;var i=!1;r.e.c>9&&(i=!0,r.e.c=9),r.e.r>49&&(i=!0,r.e.r=49),i&&console.error(`The Numbers writer is currently limited to ${vv(r)}`);var a=MD(n,{range:r,header:1}),o=[`~Sh33tJ5~`];a.forEach(function(e){return e.forEach(function(e){typeof e==`string`&&o.push(e)})});var s={},c=[],l=yg.read(t.numbers,{type:`base64`});l.FileIndex.map(function(e,t){return[e,l.FullPaths[t]]}).forEach(function(e){var t=e[0],n=e[1];if(t.type==2&&t.name.match(/\.iwa/)){var r=t.content;aD(cD(r)).forEach(function(e){c.push(e.id),s[e.id]={deps:[],location:n,type:nD(e.messages[0].meta[1][0].data)}})}}),c.sort(function(e,t){return e-t});var u=c.filter(function(e){return e>1}).map(function(e){return[e,tD(e)]});l.FileIndex.map(function(e,t){return[e,l.FullPaths[t]]}).forEach(function(e){var t=e[0];e[1],t.name.match(/\.iwa/)&&aD(cD(t.content)).forEach(function(e){e.messages.forEach(function(t){u.forEach(function(t){e.messages.some(function(e){return nD(e.meta[1][0].data)!=11006&&ZE(e.data,t[1])})&&s[t[0]].deps.push(e.id)})})})});for(var d=yg.find(l,s[1].location),f=aD(cD(d.content)),p,m=0;m<f.length;++m){var h=f[m];h.id==1&&(p=h)}var g=fD(rD(p.messages[0].data)[1][0].data);for(d=yg.find(l,s[g].location),f=aD(cD(d.content)),m=0;m<f.length;++m)h=f[m],h.id==g&&(p=h);for(g=fD(rD(p.messages[0].data)[2][0].data),d=yg.find(l,s[g].location),f=aD(cD(d.content)),m=0;m<f.length;++m)h=f[m],h.id==g&&(p=h);for(g=fD(rD(p.messages[0].data)[2][0].data),d=yg.find(l,s[g].location),f=aD(cD(d.content)),m=0;m<f.length;++m)h=f[m],h.id==g&&(p=h);var _=rD(p.messages[0].data);_[6][0].data=tD(r.e.r+1),_[7][0].data=tD(r.e.c+1);for(var v=fD(_[46][0].data),y=yg.find(l,s[v].location),b=aD(cD(y.content)),x=0;x<b.length&&b[x].id!=v;++x);if(b[x].id!=v)throw`Bad ColumnRowUIDMapArchive`;var S=rD(b[x].messages[0].data);S[1]=[],S[2]=[],S[3]=[];for(var C=0;C<=r.e.c;++C){var w=[];w[1]=w[2]=[{type:0,data:tD(C+420690)}],S[1].push({type:2,data:iD(w)}),S[2].push({type:0,data:tD(C)}),S[3].push({type:0,data:tD(C)})}S[4]=[],S[5]=[],S[6]=[];for(var T=0;T<=r.e.r;++T)w=[],w[1]=w[2]=[{type:0,data:tD(T+726270)}],S[4].push({type:2,data:iD(w)}),S[5].push({type:0,data:tD(T)}),S[6].push({type:0,data:tD(T)});b[x].messages[0].data=iD(S),y.content=lD(oD(b)),y.size=y.content.length,delete _[46];var E=rD(_[4][0].data);E[7][0].data=tD(r.e.r+1);var D=fD(rD(E[1][0].data)[2][0].data);if(y=yg.find(l,s[D].location),b=aD(cD(y.content)),b[0].id!=D)throw`Bad HeaderStorageBucket`;var O=rD(b[0].messages[0].data);for(T=0;T<a.length;++T){var k=rD(O[2][0].data);k[1][0].data=tD(T),k[4][0].data=tD(a[T].length),O[2][T]={type:O[2][0].type,data:iD(k)}}b[0].messages[0].data=iD(O),y.content=lD(oD(b)),y.size=y.content.length;var A=fD(E[2][0].data);if(y=yg.find(l,s[A].location),b=aD(cD(y.content)),b[0].id!=A)throw`Bad HeaderStorageBucket`;for(O=rD(b[0].messages[0].data),C=0;C<=r.e.c;++C)k=rD(O[2][0].data),k[1][0].data=tD(C),k[4][0].data=tD(r.e.r+1),O[2][C]={type:O[2][0].type,data:iD(k)};b[0].messages[0].data=iD(O),y.content=lD(oD(b)),y.size=y.content.length;var ee=fD(E[4][0].data);(function(){for(var e=yg.find(l,s[ee].location),t=aD(cD(e.content)),n,r=0;r<t.length;++r){var i=t[r];i.id==ee&&(n=i)}var a=rD(n.messages[0].data);a[3]=[];var c=[];o.forEach(function(e,t){c[1]=[{type:0,data:tD(t)}],c[2]=[{type:0,data:tD(1)}],c[3]=[{type:2,data:XE(e)}],a[3].push({type:2,data:iD(c)})}),n.messages[0].data=iD(a),e.content=lD(oD(t)),e.size=e.content.length})();var te=rD(E[3][0].data),ne=te[1][0];delete te[2];var re=rD(ne.data),ie=fD(re[2][0].data);(function(){for(var e=yg.find(l,s[ie].location),t=aD(cD(e.content)),n,i=0;i<t.length;++i){var c=t[i];c.id==ie&&(n=c)}var u=rD(n.messages[0].data);delete u[6],delete te[7];var d=new Uint8Array(u[5][0].data);u[5]=[];for(var f=0,p=0;p<=r.e.r;++p){var m=rD(d);f+=pD(m,a[p],o),m[1][0].data=tD(p),u[5].push({data:iD(m),type:2})}u[1]=[{type:0,data:tD(r.e.c+1)}],u[2]=[{type:0,data:tD(r.e.r+1)}],u[3]=[{type:0,data:tD(f)}],u[4]=[{type:0,data:tD(r.e.r+1)}],n.messages[0].data=iD(u),e.content=lD(oD(t)),e.size=e.content.length})(),ne.data=iD(re),E[3][0].data=iD(te),_[4][0].data=iD(E),p.messages[0].data=iD(_);var j=lD(oD(f));return d.content=j,d.size=d.content.length,l}function hD(e){return function(t){for(var n=0;n!=e.length;++n){var r=e[n];t[r[0]]===void 0&&(t[r[0]]=r[1]),r[2]===`n`&&(t[r[0]]=Number(t[r[0]]))}}}function gD(e){hD([[`cellDates`,!1],[`bookSST`,!1],[`bookType`,`xlsx`],[`compression`,!1],[`WTF`,!1]])(e)}function _D(e,t){return t.bookType==`ods`?JE(e,t):t.bookType==`numbers`?mD(e,t):t.bookType==`xlsb`?vD(e,t):yD(e,t)}function vD(e,t){qx=1024,e&&!e.SSF&&(e.SSF=zg(yh)),e&&e.SSF&&(mg(),pg(e.SSF),t.revssf=Eg(e.SSF),t.revssf[e.SSF[65535]]=0,t.ssf=e.SSF),t.rels={},t.wbrels={},t.Strings=[],t.Strings.Count=0,t.Strings.Unique=0,ZC?t.revStrings=new Map:(t.revStrings={},t.revStrings.foo=[],delete t.revStrings.foo);var n=t.bookType==`xlsb`?`bin`:`xml`,r=iS.indexOf(t.bookType)>-1,i=xy();gD(t||={});var a=Wg(),o=``,s=0;if(t.cellXfs=[],tw(t.cellXfs,{},{revssf:{General:0}}),e.Props||={},o=`docProps/core.xml`,J(a,o,Py(e.Props,t)),i.coreprops.push(o),Ey(t.rels,2,o,Cy.CORE_PROPS),o=`docProps/app.xml`,!(e.Props&&e.Props.SheetNames))if(!e.Workbook||!e.Workbook.Sheets)e.Props.SheetNames=e.SheetNames;else{for(var c=[],l=0;l<e.SheetNames.length;++l)(e.Workbook.Sheets[l]||{}).Hidden!=2&&c.push(e.SheetNames[l]);e.Props.SheetNames=c}for(e.Props.Worksheets=e.Props.SheetNames.length,J(a,o,Ly(e.Props,t)),i.extprops.push(o),Ey(t.rels,3,o,Cy.EXT_PROPS),e.Custprops!==e.Props&&Cg(e.Custprops||{}).length>0&&(o=`docProps/custom.xml`,J(a,o,Ry(e.Custprops,t)),i.custprops.push(o),Ey(t.rels,4,o,Cy.CUST_PROPS)),s=1;s<=e.SheetNames.length;++s){var u={"!id":{}},d=e.Sheets[e.SheetNames[s-1]];switch((d||{})[`!type`]||`sheet`){default:o=`xl/worksheets/sheet`+s+`.`+n,J(a,o,XT(s-1,o,t,e,u)),i.sheets.push(o),Ey(t.wbrels,-1,`worksheets/sheet`+s+`.`+n,Cy.WS[0])}if(d){var f=d[`!comments`],p=!1,m=``;f&&f.length>0&&(m=`xl/comments`+s+`.`+n,J(a,m,$T(f,m,t)),i.comments.push(m),Ey(u,-1,`../comments`+s+`.`+n,Cy.CMNT),p=!0),d[`!legacy`]&&p&&J(a,`xl/drawings/vmlDrawing`+s+`.vml`,Jx(s,d[`!comments`])),delete d[`!comments`],delete d[`!legacy`]}u[`!id`].rId1&&J(a,wy(o),Ty(u))}return t.Strings!=null&&t.Strings.length>0&&(o=`xl/sharedStrings.`+n,J(a,o,QT(t.Strings,o,t)),i.strs.push(o),Ey(t.wbrels,-1,`sharedStrings.`+n,Cy.SST)),o=`xl/workbook.`+n,J(a,o,YT(e,o,t)),i.workbooks.push(o),Ey(t.rels,1,o,Cy.WB),o=`xl/theme/theme1.xml`,J(a,o,Ix(e.Themes,t)),i.themes.push(o),Ey(t.wbrels,-1,`theme/theme1.xml`,Cy.THEME),o=`xl/styles.`+n,J(a,o,ZT(e,o,t)),i.styles.push(o),Ey(t.wbrels,-1,`styles.`+n,Cy.STY),e.vbaraw&&r&&(o=`xl/vbaProject.bin`,J(a,o,e.vbaraw),i.vba.push(o),Ey(t.wbrels,-1,`vbaProject.bin`,Cy.VBA)),o=`xl/metadata.`+n,J(a,o,eE(o)),i.metadata.push(o),Ey(t.wbrels,-1,`metadata.`+n,Cy.XLMETA),J(a,`[Content_Types].xml`,Sy(i,t)),J(a,`_rels/.rels`,Ty(t.rels)),J(a,`xl/_rels/workbook.`+n+`.rels`,Ty(t.wbrels)),delete t.revssf,delete t.ssf,a}function yD(e,t){qx=1024,e&&!e.SSF&&(e.SSF=zg(yh)),e&&e.SSF&&(mg(),pg(e.SSF),t.revssf=Eg(e.SSF),t.revssf[e.SSF[65535]]=0,t.ssf=e.SSF),t.rels={},t.wbrels={},t.Strings=[],t.Strings.Count=0,t.Strings.Unique=0,ZC?t.revStrings=new Map:(t.revStrings={},t.revStrings.foo=[],delete t.revStrings.foo);var n=`xml`,r=iS.indexOf(t.bookType)>-1,i=xy();gD(t||={});var a=Wg(),o=``,s=0;if(t.cellXfs=[],tw(t.cellXfs,{},{revssf:{General:0}}),e.Props||={},o=`docProps/core.xml`,J(a,o,Py(e.Props,t)),i.coreprops.push(o),Ey(t.rels,2,o,Cy.CORE_PROPS),o=`docProps/app.xml`,!(e.Props&&e.Props.SheetNames))if(!e.Workbook||!e.Workbook.Sheets)e.Props.SheetNames=e.SheetNames;else{for(var c=[],l=0;l<e.SheetNames.length;++l)(e.Workbook.Sheets[l]||{}).Hidden!=2&&c.push(e.SheetNames[l]);e.Props.SheetNames=c}e.Props.Worksheets=e.Props.SheetNames.length,J(a,o,Ly(e.Props,t)),i.extprops.push(o),Ey(t.rels,3,o,Cy.EXT_PROPS),e.Custprops!==e.Props&&Cg(e.Custprops||{}).length>0&&(o=`docProps/custom.xml`,J(a,o,Ry(e.Custprops,t)),i.custprops.push(o),Ey(t.rels,4,o,Cy.CUST_PROPS));var u=[`SheetJ5`];for(t.tcid=0,s=1;s<=e.SheetNames.length;++s){var d={"!id":{}},f=e.Sheets[e.SheetNames[s-1]];switch((f||{})[`!type`]||`sheet`){default:o=`xl/worksheets/sheet`+s+`.`+n,J(a,o,mw(s-1,t,e,d)),i.sheets.push(o),Ey(t.wbrels,-1,`worksheets/sheet`+s+`.`+n,Cy.WS[0])}if(f){var p=f[`!comments`],m=!1,h=``;if(p&&p.length>0){var g=!1;p.forEach(function(e){e[1].forEach(function(e){e.T==1&&(g=!0)})}),g&&(h=`xl/threadedComments/threadedComment`+s+`.`+n,J(a,h,Xx(p,u,t)),i.threadedcomments.push(h),Ey(d,-1,`../threadedComments/threadedComment`+s+`.`+n,Cy.TCMNT)),h=`xl/comments`+s+`.`+n,J(a,h,Yx(p,t)),i.comments.push(h),Ey(d,-1,`../comments`+s+`.`+n,Cy.CMNT),m=!0}f[`!legacy`]&&m&&J(a,`xl/drawings/vmlDrawing`+s+`.vml`,Jx(s,f[`!comments`])),delete f[`!comments`],delete f[`!legacy`]}d[`!id`].rId1&&J(a,wy(o),Ty(d))}return t.Strings!=null&&t.Strings.length>0&&(o=`xl/sharedStrings.`+n,J(a,o,Gb(t.Strings,t)),i.strs.push(o),Ey(t.wbrels,-1,`sharedStrings.`+n,Cy.SST)),o=`xl/workbook.`+n,J(a,o,RT(e,t)),i.workbooks.push(o),Ey(t.rels,1,o,Cy.WB),o=`xl/theme/theme1.xml`,J(a,o,Ix(e.Themes,t)),i.themes.push(o),Ey(t.wbrels,-1,`theme/theme1.xml`,Cy.THEME),o=`xl/styles.`+n,J(a,o,ux(e,t)),i.styles.push(o),Ey(t.wbrels,-1,`styles.`+n,Cy.STY),e.vbaraw&&r&&(o=`xl/vbaProject.bin`,J(a,o,e.vbaraw),i.vba.push(o),Ey(t.wbrels,-1,`vbaProject.bin`,Cy.VBA)),o=`xl/metadata.`+n,J(a,o,Gx()),i.metadata.push(o),Ey(t.wbrels,-1,`metadata.`+n,Cy.XLMETA),u.length>1&&(o=`xl/persons/person.xml`,J(a,o,Zx(u,t)),i.people.push(o),Ey(t.wbrels,-1,`persons/person.xml`,Cy.PEOPLE)),J(a,`[Content_Types].xml`,Sy(i,t)),J(a,`_rels/.rels`,Ty(t.rels)),J(a,`xl/_rels/workbook.`+n+`.rels`,Ty(t.wbrels)),delete t.revssf,delete t.ssf,a}function bD(e,t){var n=``;switch((t||{}).type||`base64`){case`buffer`:return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]];case`base64`:n=Jm(e.slice(0,12));break;case`binary`:n=e;break;case`array`:return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]];default:throw Error(`Unrecognized type `+(t&&t.type||`undefined`))}return[n.charCodeAt(0),n.charCodeAt(1),n.charCodeAt(2),n.charCodeAt(3),n.charCodeAt(4),n.charCodeAt(5),n.charCodeAt(6),n.charCodeAt(7)]}function xD(e,t){switch(t.type){case`base64`:case`binary`:break;case`buffer`:case`array`:t.type=``;break;case`file`:return Sg(t.file,yg.write(e,{type:Ym?`buffer`:``}));case`string`:throw Error(`'string' output type invalid for '`+t.bookType+`' files`);default:throw Error(`Unrecognized type `+t.type)}return yg.write(e,t)}function SD(e,t){var n=zg(t||{});return CD(_D(e,n),n)}function CD(e,t){var n={},r=Ym?`nodebuffer`:typeof Uint8Array<`u`?`array`:`string`;if(t.compression&&(n.compression=`DEFLATE`),t.password)n.type=r;else switch(t.type){case`base64`:n.type=`base64`;break;case`binary`:n.type=`string`;break;case`string`:throw Error(`'string' output type invalid for '`+t.bookType+`' files`);case`buffer`:case`file`:n.type=r;break;default:throw Error(`Unrecognized type `+t.type)}var i=e.FullPaths?yg.write(e,{fileType:`zip`,type:{nodebuffer:`buffer`,string:`binary`}[n.type]||n.type,compression:!!t.compression}):e.generate(n);if(typeof Deno<`u`&&typeof i==`string`){if(t.type==`binary`||t.type==`base64`)return i;i=new Uint8Array(eh(i))}return t.password&&typeof encrypt_agile<`u`?xD(encrypt_agile(i,t.password),t):t.type===`file`?Sg(t.file,i):t.type==`string`?o_(i):i}function wD(e,t){var n=t||{};return xD(gE(e,n),n)}function TD(e,t,n){n||=``;var r=n+e;switch(t.type){case`base64`:return qm(s_(r));case`binary`:return s_(r);case`string`:return e;case`file`:return Sg(t.file,r,`utf8`);case`buffer`:return Ym?Xm(r,`utf8`):typeof TextEncoder<`u`?new TextEncoder().encode(r):TD(r,{type:`binary`}).split(``).map(function(e){return e.charCodeAt(0)})}throw Error(`Unrecognized type `+t.type)}function ED(e,t){switch(t.type){case`base64`:return qm(e);case`binary`:return e;case`string`:return e;case`file`:return Sg(t.file,e,`binary`);case`buffer`:return Ym?Xm(e,`binary`):e.split(``).map(function(e){return e.charCodeAt(0)})}throw Error(`Unrecognized type `+t.type)}function DD(e,t){switch(t.type){case`string`:case`base64`:case`binary`:for(var n=``,r=0;r<e.length;++r)n+=String.fromCharCode(e[r]);return t.type==`base64`?qm(n):t.type==`string`?o_(n):n;case`file`:return Sg(t.file,e);case`buffer`:return e;default:throw Error(`Unrecognized type `+t.type)}}function OD(e,t){zm(),LT(e);var n=zg(t||{});if(n.cellStyles&&(n.cellNF=!0,n.sheetStubs=!0),n.type==`array`){n.type=`binary`;var r=OD(e,n);return n.type=`array`,eh(r)}var i=0;if(n.sheet&&(i=typeof n.sheet==`number`?n.sheet:e.SheetNames.indexOf(n.sheet),!e.SheetNames[i]))throw Error(`Sheet not found: `+n.sheet+` : `+typeof n.sheet);switch(n.bookType||`xlsb`){case`xml`:case`xlml`:return TD(pE(e,n),n);case`slk`:case`sylk`:return TD(zb.from_sheet(e.Sheets[e.SheetNames[i]],n),n);case`htm`:case`html`:return TD(BE(e.Sheets[e.SheetNames[i]],n),n);case`txt`:return ED(ID(e.Sheets[e.SheetNames[i]],n),n);case`csv`:return TD(FD(e.Sheets[e.SheetNames[i]],n),n,`﻿`);case`dif`:return TD(Bb.from_sheet(e.Sheets[e.SheetNames[i]],n),n);case`dbf`:return DD(Rb.from_sheet(e.Sheets[e.SheetNames[i]],n),n);case`prn`:return TD(Hb.from_sheet(e.Sheets[e.SheetNames[i]],n),n);case`rtf`:return TD(Qb.from_sheet(e.Sheets[e.SheetNames[i]],n),n);case`eth`:return TD(Vb.from_sheet(e.Sheets[e.SheetNames[i]],n),n);case`fods`:return TD(JE(e,n),n);case`wk1`:return DD(Ub.sheet_to_wk1(e.Sheets[e.SheetNames[i]],n),n);case`wk3`:return DD(Ub.book_to_wk3(e,n),n);case`biff2`:n.biff||=2;case`biff3`:n.biff||=3;case`biff4`:return n.biff||=4,DD(FE(e,n),n);case`biff5`:n.biff||=5;case`biff8`:case`xla`:case`xls`:return n.biff||=8,wD(e,n);case`xlsx`:case`xlsm`:case`xlam`:case`xlsb`:case`numbers`:case`ods`:return SD(e,n);default:throw Error(`Unrecognized bookType |`+n.bookType+`|`)}}function kD(e){if(!e.bookType){var t={xls:`biff8`,htm:`html`,slk:`sylk`,socialcalc:`eth`,Sh33tJS:`WTF`},n=e.file.slice(e.file.lastIndexOf(`.`)).toLowerCase();n.match(/^\.[a-z]+$/)&&(e.bookType=n.slice(1)),e.bookType=t[e.bookType]||e.bookType}}function AD(e,t,n){var r=n||{};return r.type=`file`,r.file=t,kD(r),OD(e,r)}function jD(e,t,n,r,i,a,o,s){var c=sv(n),l=s.defval,u=s.raw||!Object.prototype.hasOwnProperty.call(s,`raw`),d=!0,f=i===1?[]:{};if(i!==1)if(Object.defineProperty)try{Object.defineProperty(f,`__rowNum__`,{value:n,enumerable:!1})}catch{f.__rowNum__=n}else f.__rowNum__=n;if(!o||e[n])for(var p=t.s.c;p<=t.e.c;++p){var m=o?e[n][p]:e[r[p]+c];if(m===void 0||m.t===void 0){if(l===void 0)continue;a[p]!=null&&(f[a[p]]=l);continue}var h=m.v;switch(m.t){case`z`:if(h==null)break;continue;case`e`:h=h==0?null:void 0;break;case`s`:case`d`:case`b`:case`n`:break;default:throw Error(`unrecognized type `+m.t)}if(a[p]!=null){if(h==null)if(m.t==`e`&&h===null)f[a[p]]=null;else if(l!==void 0)f[a[p]]=l;else if(u&&h===null)f[a[p]]=null;else continue;else f[a[p]]=u&&(m.t!==`n`||m.t===`n`&&s.rawNumbers!==!1)?h:xv(m,h,s);h!=null&&(d=!1)}}return{row:f,isempty:d}}function MD(e,t){if(e==null||e[`!ref`]==null)return[];var n={t:`n`,v:0},r=0,i=1,a=[],o=0,s=``,c={s:{r:0,c:0},e:{r:0,c:0}},l=t||{},u=l.range==null?e[`!ref`]:l.range;switch(l.header===1?r=1:l.header===`A`?r=2:Array.isArray(l.header)?r=3:l.header??(r=0),typeof u){case`string`:c=yv(u);break;case`number`:c=yv(e[`!ref`]),c.s.r=u;break;default:c=u}r>0&&(i=0);var d=sv(c.s.r),f=[],p=[],m=0,h=0,g=Array.isArray(e),_=c.s.r,v=0,y={};g&&!e[_]&&(e[_]=[]);var b=l.skipHidden&&e[`!cols`]||[],x=l.skipHidden&&e[`!rows`]||[];for(v=c.s.c;v<=c.e.c;++v)if(!(b[v]||{}).hidden)switch(f[v]=dv(v),n=g?e[_][v]:e[f[v]+d],r){case 1:a[v]=v-c.s.c;break;case 2:a[v]=f[v];break;case 3:a[v]=l.header[v-c.s.c];break;default:if(n??={w:`__EMPTY`,t:`s`},s=o=xv(n,null,l),h=y[o]||0,!h)y[o]=1;else{do s=o+`_`+ h++;while(y[s]);y[o]=h,y[s]=1}a[v]=s}for(_=c.s.r+i;_<=c.e.r;++_)if(!(x[_]||{}).hidden){var S=jD(e,c,_,f,r,a,g,l);(S.isempty===!1||(r===1?l.blankrows!==!1:l.blankrows))&&(p[m++]=S.row)}return p.length=m,p}var ND=/"/g;function PD(e,t,n,r,i,a,o,s){for(var c=!0,l=[],u=``,d=sv(n),f=t.s.c;f<=t.e.c;++f)if(r[f]){var p=s.dense?(e[n]||[])[f]:e[r[f]+d];if(p==null)u=``;else if(p.v!=null){c=!1,u=``+(s.rawNumbers&&p.t==`n`?p.v:xv(p,null,s));for(var m=0,h=0;m!==u.length;++m)if((h=u.charCodeAt(m))===i||h===a||h===34||s.forceQuotes){u=`"`+u.replace(ND,`""`)+`"`;break}u==`ID`&&(u=`"ID"`)}else p.f!=null&&!p.F?(c=!1,u=`=`+p.f,u.indexOf(`,`)>=0&&(u=`"`+u.replace(ND,`""`)+`"`)):u=``;l.push(u)}return s.blankrows===!1&&c?null:l.join(o)}function FD(e,t){var n=[],r=t??{};if(e==null||e[`!ref`]==null)return``;var i=yv(e[`!ref`]),a=r.FS===void 0?`,`:r.FS,o=a.charCodeAt(0),s=r.RS===void 0?`
`:r.RS,c=s.charCodeAt(0),l=RegExp((a==`|`?`\\|`:a)+`+$`),u=``,d=[];r.dense=Array.isArray(e);for(var f=r.skipHidden&&e[`!cols`]||[],p=r.skipHidden&&e[`!rows`]||[],m=i.s.c;m<=i.e.c;++m)(f[m]||{}).hidden||(d[m]=dv(m));for(var h=0,g=i.s.r;g<=i.e.r;++g)(p[g]||{}).hidden||(u=PD(e,i,g,d,o,c,a,r),u!=null&&(r.strip&&(u=u.replace(l,``)),(u||r.blankrows!==!1)&&n.push((h++?s:``)+u)));return delete r.dense,n.join(``)}function ID(e,t){t||={},t.FS=`	`,t.RS=`
`;var n=FD(e,t);return Um===void 0||t.type==`string`?n:`ÿþ`+Um.utils.encode(1200,n,`str`)}function LD(e){var t=``,n,r=``;if(e==null||e[`!ref`]==null)return[];var i=yv(e[`!ref`]),a=``,o=[],s,c=[],l=Array.isArray(e);for(s=i.s.c;s<=i.e.c;++s)o[s]=dv(s);for(var u=i.s.r;u<=i.e.r;++u)for(a=sv(u),s=i.s.c;s<=i.e.c;++s)if(t=o[s]+a,n=l?(e[u]||[])[s]:e[t],r=``,n!==void 0){if(n.F!=null){if(t=n.F,!n.f)continue;r=n.f,t.indexOf(`:`)==-1&&(t=t+`:`+t)}if(n.f!=null)r=n.f;else if(n.t==`z`)continue;else if(n.t==`n`&&n.v!=null)r=``+n.v;else if(n.t==`b`)r=n.v?`TRUE`:`FALSE`;else if(n.w!==void 0)r=`'`+n.w;else if(n.v===void 0)continue;else r=n.t==`s`?`'`+n.v:``+n.v;c[c.length]=t+`=`+r}return c}function RD(e,t,n){var r=n||{},i=+!r.skipHeader,a=e||{},o=0,s=0;if(a&&r.origin!=null)if(typeof r.origin==`number`)o=r.origin;else{var c=typeof r.origin==`string`?hv(r.origin):r.origin;o=c.r,s=c.c}var l,u={s:{c:0,r:0},e:{c:s,r:o+t.length-1+i}};if(a[`!ref`]){var d=yv(a[`!ref`]);u.e.c=Math.max(u.e.c,d.e.c),u.e.r=Math.max(u.e.r,d.e.r),o==-1&&(o=d.e.r+1,u.e.r=o+t.length-1+i)}else o==-1&&(o=0,u.e.r=t.length-1+i);var f=r.header||[],p=0;t.forEach(function(e,t){Cg(e).forEach(function(n){(p=f.indexOf(n))==-1&&(f[p=f.length]=n);var c=e[n],u=`z`,d=``,m=gv({c:s+p,r:o+t+i});l=BD(a,m),c&&typeof c==`object`&&!(c instanceof Date)?a[m]=c:(typeof c==`number`?u=`n`:typeof c==`boolean`?u=`b`:typeof c==`string`?u=`s`:c instanceof Date?(u=`d`,r.cellDates||(u=`n`,c=kg(c)),d=r.dateNF||yh[14]):c===null&&r.nullError&&(u=`e`,c=0),l?(l.t=u,l.v=c,delete l.w,delete l.R,d&&(l.z=d)):a[m]=l={t:u,v:c},d&&(l.z=d))})}),u.e.c=Math.max(u.e.c,s+f.length-1);var m=sv(o);if(i)for(p=0;p<f.length;++p)a[dv(p+s)+m]={t:`s`,v:f[p]};return a[`!ref`]=vv(u),a}function zD(e,t){return RD(null,e,t)}function BD(e,t,n){if(typeof t==`string`){if(Array.isArray(e)){var r=hv(t);return e[r.r]||(e[r.r]=[]),e[r.r][r.c]||(e[r.r][r.c]={t:`z`})}return e[t]||(e[t]={t:`z`})}return typeof t==`number`?BD(e,gv({r:t,c:n||0})):BD(e,gv(t))}function VD(e,t){if(typeof t==`number`){if(t>=0&&e.SheetNames.length>t)return t;throw Error(`Cannot find sheet # `+t)}else if(typeof t==`string`){var n=e.SheetNames.indexOf(t);if(n>-1)return n;throw Error(`Cannot find sheet name |`+t+`|`)}else throw Error(`Cannot find sheet |`+t+`|`)}function HD(){return{SheetNames:[],Sheets:{}}}function UD(e,t,n,r){var i=1;if(!n)for(;i<=65535&&e.SheetNames.indexOf(n=`Sheet`+i)!=-1;++i,n=void 0);if(!n||e.SheetNames.length>=65535)throw Error(`Too many worksheets`);if(r&&e.SheetNames.indexOf(n)>=0){var a=n.match(/(^.*?)(\d+)$/);i=a&&+a[2]||0;var o=a&&a[1]||n;for(++i;i<=65535&&e.SheetNames.indexOf(n=o+i)!=-1;++i);}if(FT(n),e.SheetNames.indexOf(n)>=0)throw Error(`Worksheet with name |`+n+`| already exists!`);return e.SheetNames.push(n),e.Sheets[n]=t,n}function WD(e,t,n){e.Workbook||={},e.Workbook.Sheets||(e.Workbook.Sheets=[]);var r=VD(e,t);switch(e.Workbook.Sheets[r]||(e.Workbook.Sheets[r]={}),n){case 0:case 1:case 2:break;default:throw Error(`Bad sheet visibility setting `+n)}e.Workbook.Sheets[r].Hidden=n}function GD(e,t){return e.z=t,e}function KD(e,t,n){return t?(e.l={Target:t},n&&(e.l.Tooltip=n)):delete e.l,e}function qD(e,t,n){return KD(e,`#`+t,n)}function JD(e,t,n){e.c||=[],e.c.push({t,a:n||`SheetJS`})}function YD(e,t,n,r){for(var i=typeof t==`string`?yv(t):t,a=typeof t==`string`?t:vv(t),o=i.s.r;o<=i.e.r;++o)for(var s=i.s.c;s<=i.e.c;++s){var c=BD(e,o,s);c.t=`n`,c.F=a,delete c.v,o==i.s.r&&s==i.s.c&&(c.f=n,r&&(c.D=!0))}return e}var XD={encode_col:dv,encode_row:sv,encode_cell:gv,encode_range:vv,decode_col:uv,decode_row:ov,split_cell:mv,decode_cell:hv,decode_range:_v,format_cell:xv,sheet_add_aoa:Cv,sheet_add_json:RD,sheet_add_dom:VE,aoa_to_sheet:wv,json_to_sheet:zD,table_to_sheet:HE,table_to_book:UE,sheet_to_csv:FD,sheet_to_txt:ID,sheet_to_json:MD,sheet_to_html:BE,sheet_to_formulae:LD,sheet_to_row_object_array:MD,sheet_get_cell:BD,book_new:HD,book_append_sheet:UD,book_set_sheet_visibility:WD,cell_set_number_format:GD,cell_set_hyperlink:KD,cell_set_internal_link:qD,cell_add_comment:JD,sheet_set_array_formula:YD,consts:{SHEET_VISIBLE:0,SHEET_HIDDEN:1,SHEET_VERY_HIDDEN:2}};jm.version;var ZD=[`Понедельник`,`Вторник`,`Среда`,`Четверг`,`Пятница`];function QD(e,t=`raspisanie.xlsx`){let n=[[`Неделя (Пн)`,`День`,`Время`,`Предмет`,`Преподаватель`,`Аудитория`,`Группа`,`Тип`,`Дополнительная информация`]],r=[...e].sort((e,t)=>e.weekStartKey===t.weekStartKey?e.dayOfWeek===t.dayOfWeek?e.timeSlot===t.timeSlot?as(e.subjectId).localeCompare(as(t.subjectId)):e.timeSlot-t.timeSlot:e.dayOfWeek-t.dayOfWeek:e.weekStartKey.localeCompare(t.weekStartKey));for(let e of r){let t=rs[e.timeSlot],r=t?`${t.start}–${t.end}`:``;n.push([e.weekStartKey,ZD[e.dayOfWeek]??``,r,as(e.subjectId),ss(e.teacherId),cs(e.auditoriumId),us(e.groupId),fs(e.type),e.extraInfo?.trim()??``])}let i=XD.book_new(),a=XD.aoa_to_sheet(n);XD.book_append_sheet(i,a,`Расписание`),AD(i,t)}function $D(){let e=new Date().getDay();return e===0?-1:e===6?5:e-1}function eO(e,t){let n=new Date(e,t,1),r=new Date(e,t+1,0),i=new Date(n),a=n.getDay(),o=a===0?-6:1-a;i.setDate(n.getDate()+o);let s=[],c=new Date(i);for(;s.length<6;){let e=[];for(let t=0;t<7;t++)e.push(new Date(c)),c.setDate(c.getDate()+1);if(s.push(e),c>r&&c.getMonth()!==t)break}return s}function tO(){let e=Qo(),t=$o(e=>e.schedule.lessons),[n,r]=(0,b.useState)(!1),[i,a]=(0,b.useState)(null),[o,s]=(0,b.useState)(!1),[c,l]=(0,b.useState)(null),[u,d]=(0,b.useState)(!1),[f,p]=(0,b.useState)(!1),[m,h]=(0,b.useState)(null),[g,_]=(0,b.useState)(`week`),[v,y]=(0,b.useState)(0),[x,S]=(0,b.useState)(``),[C,w]=(0,b.useState)(``),[T,E]=(0,b.useState)(`all`),[D,O]=(0,b.useState)(`all`),k=x!==``&&C!==``,[A,ee]=(0,b.useState)(null),[te,ne]=(0,b.useState)(0),[re,ie]=(0,b.useState)(()=>{let e=new Date;return new Date(e.getFullYear(),e.getMonth(),1)}),{start:j,end:M}=(0,b.useMemo)(()=>{let e=new Date;return e.setDate(e.getDate()+te*7),Ss(e)},[te]),ae=(0,b.useMemo)(()=>Va(j),[j]),oe=Cs(j,M),se=(0,b.useMemo)(()=>ws(j),[j]),ce=$D(),le=te===0,ue=(0,b.useMemo)(()=>Ja(ae,zs),[ae]),{flashLessonId:de,setFlashLessonId:fe}=Bs(),pe=(0,b.useCallback)(e=>{let t=Ga(ae,e.weekStartKey);ne(e=>e+t),_(`week`),y(e.dayOfWeek);let n=$a.find(t=>t.id===e.groupId);n&&(S(String(n.course)),w(e.groupId)),E(`all`),O(`all`),fe(e.id)},[ae,fe]),me=Lc(Ic(Pl,{activationConstraint:{distance:8}})),he=(0,b.useMemo)(()=>{if(x===``)return[];let e=parseInt(x,10);return $a.filter(t=>t.course===e)},[x]),ge=(0,b.useMemo)(()=>{if(!k)return[];let e=parseInt(x,10);return t.filter(t=>!($a.find(e=>e.id===t.groupId)?.course!==e||t.groupId!==C))},[t,x,C,k]),_e=(0,b.useMemo)(()=>{if(!k)return[];let e=new Set(ge.map(e=>e.teacherId));return e.size===0?Xa:Xa.filter(t=>e.has(t.id))},[ge,k]),N=(0,b.useMemo)(()=>{if(!k)return[];let e=new Set(ge.map(e=>e.auditoriumId));return e.size===0?Qa:Qa.filter(t=>e.has(t.id))},[ge,k]);(0,b.useEffect)(()=>{if(C!==``){let e=$a.find(e=>e.id===C);x!==``&&e&&e.course!==parseInt(x,10)&&w(``)}},[x,C]),(0,b.useEffect)(()=>{T!==`all`&&!_e.some(e=>e.id===T)&&E(`all`)},[_e,T]),(0,b.useEffect)(()=>{D!==`all`&&!N.some(e=>e.id===D)&&O(`all`)},[N,D]);let ve=(0,b.useMemo)(()=>{if(!k)return[];let e=parseInt(x,10),n=t.filter(t=>!($a.find(e=>e.id===t.groupId)?.course!==e||t.groupId!==C||T!==`all`&&t.teacherId!==T||D!==`all`&&t.auditoriumId!==D));return g!==`month`&&(n=n.filter(e=>e.weekStartKey===ae)),n},[t,x,C,T,D,k,g,ae]),ye=(0,b.useMemo)(()=>{if(!k)return[];let e=parseInt(x,10);return t.filter(t=>!(t.weekStartKey!==ae||$a.find(e=>e.id===t.groupId)?.course!==e||t.groupId!==C))},[t,k,x,C,ae]),be=(0,b.useCallback)((e,t)=>os(ve.filter(n=>n.dayOfWeek===e&&n.timeSlot===t)),[ve]),xe=(0,b.useCallback)((e,n)=>{let r=Ba(se[e]),i=t.filter(e=>Ua(e)===r&&e.timeSlot===n);if(i.length<2)return!1;let a=new Map,o=new Map;for(let e of i)a.set(e.auditoriumId,(a.get(e.auditoriumId)??0)+1),o.set(e.teacherId,(o.get(e.teacherId)??0)+1);return[...a.values()].some(e=>e>1)||[...o.values()].some(e=>e>1)},[t,se]),Se=(0,b.useMemo)(()=>t.filter(e=>e.weekStartKey===ae),[t,ae]),Ce=(0,b.useMemo)(()=>{if(!k||T===`all`)return null;let e=parseInt(x,10),t=Se.filter(t=>!($a.find(e=>e.id===t.groupId)?.course!==e||t.groupId!==C||t.teacherId!==T||D!==`all`&&t.auditoriumId!==D)).length*2,n=Xa.find(e=>e.id===T)?.plannedHoursSpring;return n!=null&&n>0?`Нагрузка в выборке: ${t} ч из ${n} ч по плану на весну (2 акад. ч на ячейку).`:`В выборке у преподавателя: ${t} акад. ч по текущим фильтрам группы и аудитории.`},[Se,k,x,C,T,D]),we=(0,b.useMemo)(()=>Es(t),[t]),Te=we.length,Ee=(0,b.useMemo)(()=>ys(t),[t]),De=(0,b.useMemo)(()=>bs(Ee),[Ee]),Oe=e=>h(String(e.active.id)),ke=t=>{h(null);let{active:n,over:r}=t;if(!r)return;let i=String(r.id);if(!i.startsWith(`cell-`))return;let[,a,o]=i.split(`-`),s=parseInt(a,10),c=parseInt(o,10);e(fo({id:String(n.id),dayOfWeek:s,timeSlot:c}))},Ae=e=>{k&&(a(null),ee(e??null),r(!0))},je=e=>{a(e.id),ee(null),r(!0)},Me=e=>{l(e),s(!0)},Ne=()=>{c&&(e(po(c.id)),l(null),s(!1))},Pe=()=>{k&&QD(ve,`UniSchedule_${new Date().toISOString().slice(0,10)}.xlsx`)},Fe=(0,b.useCallback)(()=>{if(!k||ye.length===0)return;let n=Wa(ae,1),r=Ha(n),i=new Date(r);i.setDate(i.getDate()+4);let a=Cs(r,i);if(!window.confirm(`Скопировать ${ye.length} занятий выбранной группы на следующую неделю (${a})? Уже занятые слоты будут пропущены.`))return;let o=0,s=0;for(let r of ye){if(t.some(e=>e.weekStartKey===n&&e.groupId===r.groupId&&e.dayOfWeek===r.dayOfWeek&&e.timeSlot===r.timeSlot)){s+=1;continue}let{id:i,...a}=r;e(lo({...a,weekStartKey:n})),o+=1}o===0?window.alert(`Не скопировано ни одного занятия: все слоты на следующей неделе уже заняты.`):window.alert(s>0?`Готово: скопировано ${o}, пропущено (слот занят) — ${s}.`:`Готово: скопировано ${o} занятий.`)},[k,ye,ae,t,e]),Ie=n=>{let a=n.extraInfo?.trim()||void 0,{groupIds:o,...s}=n,c=A?.weekStartKey??ae;if(i){let n=t.find(e=>e.id===i);n&&e(uo({...n,...s,groupId:o[0],extraInfo:a}))}else{let t=A?A.dayOfWeek:s.dayOfWeek,n=A?A.timeSlot:s.timeSlot;for(let r of o)e(lo({subjectId:s.subjectId,teacherId:s.teacherId,auditoriumId:s.auditoriumId,groupId:r,type:s.type,dayOfWeek:t,timeSlot:n,weekStartKey:c,extraInfo:a}))}r(!1),ee(null)},Le=i?t.find(e=>e.id===i):null,Re=()=>(0,I.jsxs)(`table`,{className:`table-fixed w-full min-w-[1200px] border-collapse`,children:[(0,I.jsx)(Vs,{}),(0,I.jsx)(`thead`,{children:(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`th`,{className:`p-2 text-left text-sm font-medium text-gray-600 border-b border-r border-gray-200 bg-gray-50 min-w-0`,children:`Время`}),is.slice(0,6).map((e,t)=>{let n=se[t];return(0,I.jsxs)(`th`,{className:`p-2 text-center text-sm font-medium border-b border-gray-200 min-w-0 ${le&&ce===t?`bg-primary-100 text-primary-800 ring-2 ring-primary-300 ring-inset`:`bg-gray-50 text-gray-600`}`,children:[(0,I.jsx)(`div`,{children:e}),(0,I.jsx)(`div`,{className:`text-xs font-normal opacity-80 mt-0.5`,children:n.toLocaleDateString(`ru-RU`,{day:`numeric`,month:`short`})})]},e)})]})}),(0,I.jsx)(`tbody`,{children:rs.map((e,t)=>(0,I.jsxs)(`tr`,{children:[(0,I.jsxs)(`td`,{className:`p-2 text-sm text-gray-600 border-b border-r border-gray-200 align-top min-w-0`,children:[e.start,`–`,e.end]}),is.slice(0,6).map((e,n)=>(0,I.jsx)(Am,{dayOfWeek:n,timeSlot:t,lessons:be(n,t),isConflict:xe(n,t),onEdit:je,onDelete:Me,onEmptyClick:(e,t)=>Ae({dayOfWeek:e,timeSlot:t,weekStartKey:ae}),onAddAnother:(e,t)=>Ae({dayOfWeek:e,timeSlot:t,weekStartKey:ae}),scheduleReady:k,flashLessonId:de},n))]},t))})]}),ze=()=>(0,I.jsxs)(`table`,{className:`table-fixed w-full min-w-[640px] border-collapse`,children:[(0,I.jsx)(Hs,{}),(0,I.jsx)(`thead`,{children:(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`th`,{className:`p-2 text-left text-sm font-medium text-gray-600 border-b border-r border-gray-200 bg-gray-50 min-w-0`,children:`Время`}),(0,I.jsx)(`th`,{className:`p-2 text-center text-sm font-medium border-b border-gray-200 min-w-0 ${le&&ce===v?`bg-primary-100 text-primary-800`:`bg-gray-50 text-gray-600`}`,children:is[v]})]})}),(0,I.jsx)(`tbody`,{children:rs.map((e,t)=>(0,I.jsxs)(`tr`,{children:[(0,I.jsxs)(`td`,{className:`p-2 text-sm text-gray-600 border-b border-r border-gray-200 align-top min-w-0`,children:[e.start,`–`,e.end]}),(0,I.jsx)(Am,{dayOfWeek:v,timeSlot:t,lessons:be(v,t),isConflict:xe(v,t),onEdit:je,onDelete:Me,onEmptyClick:(e,t)=>Ae({dayOfWeek:v,timeSlot:t,weekStartKey:ae}),onAddAnother:(e,t)=>Ae({dayOfWeek:v,timeSlot:t,weekStartKey:ae}),scheduleReady:k,flashLessonId:de})]},t))})]}),Be=(0,b.useMemo)(()=>eO(re.getFullYear(),re.getMonth()),[re]);return(0,I.jsxs)(`div`,{className:`min-h-screen`,children:[(0,I.jsx)(ns,{title:`Управление расписанием`,subtitle:oe,userRole:`Администратор`,showNav:!0,isCurrentWeek:le,weekRangeLabel:oe,academicWeekLine:ue,onPrevWeek:()=>ne(e=>e-1),onNextWeek:()=>ne(e=>e+1),onCurrentWeek:()=>{ne(0);let e=new Date;ie(new Date(e.getFullYear(),e.getMonth(),1))},toolbar:(0,I.jsx)(Ls,{role:`admin`,onLessonNavigate:pe})}),(0,I.jsxs)(`div`,{className:`p-6`,children:[(0,I.jsxs)(`div`,{className:`flex items-center justify-between mb-4 flex-wrap gap-4`,children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,I.jsx)(`button`,{type:`button`,onClick:()=>Ae(),disabled:!k,title:k?void 0:`Сначала выберите курс и группу`,className:`px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`,children:`+ Добавить занятие`}),(0,I.jsxs)(`button`,{type:`button`,onClick:Pe,disabled:!k,title:k?void 0:`Сначала выберите курс и группу`,className:`px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`,children:[(0,I.jsx)(Wo,{className:`w-4 h-4`}),`Сохранить`]}),(0,I.jsxs)(`button`,{type:`button`,onClick:Fe,disabled:!k||ye.length===0,title:k?ye.length===0?`На этой неделе нет занятий для выбранной группы`:`Повторить расписание группы на следующую календарную неделю`:`Сначала выберите курс и группу`,className:`px-4 py-2 border border-gray-300 text-gray-800 rounded-lg hover:bg-gray-50 font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`,children:[(0,I.jsx)(Ro,{className:`w-4 h-4`}),`Копировать на след. неделю`]})]}),(0,I.jsxs)(`div`,{className:`flex items-center gap-6 flex-wrap`,children:[(0,I.jsxs)(`button`,{type:`button`,onClick:()=>p(!0),disabled:t.length===0,title:`Разбивка по каждому преподавателю: занесено часов и план`,className:`flex flex-col items-end gap-0.5 text-left min-w-[200px] rounded-lg px-2 py-1.5 transition-colors ${t.length===0?`opacity-50 cursor-not-allowed`:`hover:bg-primary-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-1`}`,children:[(0,I.jsx)(`span`,{className:`text-sm text-gray-700`,children:De.fillPercent==null?(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`span`,{className:`font-medium text-gray-800`,children:De.totalScheduledHours}),(0,I.jsx)(`span`,{className:`text-gray-500`,children:` акад. ч в расписании`}),(0,I.jsx)(`span`,{className:`block text-xs text-amber-700 mt-0.5`,children:`Сводный план не задан ни у одного преподавателя`})]}):(0,I.jsx)(I.Fragment,{})}),(0,I.jsx)(`span`,{className:`text-[11px] text-gray-500 w-full`,children:`Нагрузка преподавателей — подробнее`}),(0,I.jsx)(`div`,{className:`w-full max-w-[200px] h-2 bg-gray-200 rounded-full overflow-hidden`,children:(0,I.jsx)(`div`,{className:`h-full rounded-full ${De.fillPercent!=null&&De.fillPercent>=100?`bg-emerald-500`:`bg-primary-500`}`,style:{width:`${De.fillPercent==null?0:De.fillPercent}%`}})})]}),(0,I.jsx)(`button`,{type:`button`,onClick:()=>Te>0&&d(!0),className:`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm ${Te>0?`bg-red-100 text-red-700 hover:bg-red-200 cursor-pointer`:`bg-green-100 text-green-700 cursor-default`}`,children:Te>0?`Конфликты: ${Te}`:`✓ Нет конфликтов`})]})]}),(0,I.jsxs)(`div`,{className:`flex flex-wrap gap-4 mb-4 items-center`,children:[(0,I.jsx)(`div`,{className:`flex rounded-lg border border-gray-200 overflow-hidden`,children:[`day`,`week`,`month`].map(e=>(0,I.jsx)(`button`,{type:`button`,onClick:()=>_(e),className:`px-4 py-2 text-sm font-medium ${g===e?`bg-primary-600 text-white`:`bg-white text-gray-600 hover:bg-gray-50`}`,children:e===`day`?`День`:e===`week`?`Неделя`:`Месяц`},e))}),g!==`month`&&(0,I.jsxs)(`span`,{className:`text-sm text-gray-600`,children:[`Неделя: `,oe]}),g===`day`&&(0,I.jsx)(`div`,{className:`flex gap-2 flex-wrap`,children:[`Пн`,`Вт`,`Ср`,`Чт`,`Пт`,`Сб`].map((e,t)=>(0,I.jsx)(`button`,{type:`button`,onClick:()=>y(t),className:`px-3 py-1.5 rounded-lg text-sm font-medium ${v===t?`bg-primary-600 text-white`:`bg-gray-100 text-gray-600 hover:bg-gray-200`}`,children:e},e))}),(0,I.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 ml-auto`,children:[(0,I.jsxs)(`select`,{value:x,onChange:e=>{S(e.target.value),w(``),E(`all`),O(`all`)},className:`border border-gray-300 rounded-lg px-3 py-1.5 text-sm`,children:[(0,I.jsx)(`option`,{value:``,children:`Выберите курс`}),eo.map(e=>(0,I.jsxs)(`option`,{value:e,children:[e,` курс`]},e))]}),(0,I.jsxs)(`select`,{value:C,disabled:x===``,onChange:e=>{w(e.target.value),E(`all`),O(`all`)},className:`border border-gray-300 rounded-lg px-3 py-1.5 text-sm disabled:bg-gray-100 disabled:text-gray-500`,children:[(0,I.jsx)(`option`,{value:``,children:x===``?`Сначала курс`:`Выберите группу`}),he.map(e=>(0,I.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,I.jsxs)(`select`,{value:T,disabled:!k,onChange:e=>E(e.target.value),className:`border border-gray-300 rounded-lg px-3 py-1.5 text-sm disabled:bg-gray-100 disabled:text-gray-500`,children:[(0,I.jsx)(`option`,{value:`all`,children:`Все преподаватели`}),_e.map(e=>(0,I.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,I.jsxs)(`select`,{value:D,disabled:!k,onChange:e=>O(e.target.value),className:`border border-gray-300 rounded-lg px-3 py-1.5 text-sm disabled:bg-gray-100 disabled:text-gray-500`,children:[(0,I.jsx)(`option`,{value:`all`,children:`Все аудитории`}),N.map(e=>(0,I.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),Ce&&(0,I.jsx)(`span`,{className:`text-xs text-gray-500 max-w-md leading-snug`,title:Ce,children:Ce})]})]}),(0,I.jsxs)(`div`,{className:`flex items-center gap-4 mb-4`,children:[(0,I.jsx)(`span`,{className:`w-3 h-3 rounded-full bg-lecture-bg`}),` Лекция`,(0,I.jsx)(`span`,{className:`w-3 h-3 rounded-full bg-practice-bg`}),` Практика`,(0,I.jsx)(`span`,{className:`w-3 h-3 rounded-full bg-laboratory-bg`}),` Лабораторная`]}),!k&&(0,I.jsxs)(`div`,{className:`mb-4 p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-950 text-sm`,children:[`Выберите `,(0,I.jsx)(`strong`,{children:`курс`}),` и `,(0,I.jsx)(`strong`,{children:`группу`}),` — таблица расписания появится только после выбора обоих фильтров.`]}),(0,I.jsxs)(Au,{sensors:me,onDragStart:Oe,onDragEnd:ke,children:[(0,I.jsxs)(`div`,{className:`bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto p-2`,children:[g===`day`&&ze(),g===`week`&&Re(),g===`month`&&(0,I.jsxs)(`div`,{className:`w-full overflow-x-auto`,children:[(0,I.jsxs)(`div`,{className:`flex items-center justify-between mb-4 px-2`,children:[(0,I.jsx)(`button`,{type:`button`,onClick:()=>ie(e=>new Date(e.getFullYear(),e.getMonth()-1,1)),className:`px-3 py-1 rounded border border-gray-300 hover:bg-gray-50`,children:`←`}),(0,I.jsx)(`h3`,{className:`text-lg font-semibold text-gray-900`,children:re.toLocaleDateString(`ru-RU`,{month:`long`,year:`numeric`})}),(0,I.jsx)(`button`,{type:`button`,onClick:()=>ie(e=>new Date(e.getFullYear(),e.getMonth()+1,1)),className:`px-3 py-1 rounded border border-gray-300 hover:bg-gray-50`,children:`→`})]}),(0,I.jsxs)(`table`,{className:`table-fixed w-full border-collapse min-w-[900px]`,children:[(0,I.jsx)(Us,{}),(0,I.jsx)(`thead`,{children:(0,I.jsx)(`tr`,{children:[`Пн`,`Вт`,`Ср`,`Чт`,`Пт`,`Сб`,`Вс`].map(e=>(0,I.jsx)(`th`,{className:`p-2 text-center text-xs font-semibold text-gray-600 bg-gray-100 border border-gray-200 min-w-0`,children:e},e))})}),(0,I.jsx)(`tbody`,{children:Be.map((e,t)=>(0,I.jsx)(`tr`,{children:e.map((e,t)=>{let n=e.getMonth()===re.getMonth(),r=Ts(e),i=r===null,a=Va(e),o=r!==null&&n?ve.filter(e=>e.dayOfWeek===r&&e.weekStartKey===a):[],s=new Date().toDateString()===e.toDateString();return(0,I.jsxs)(`td`,{className:`align-top border border-gray-200 p-1 min-w-0 h-[156px] min-h-[156px] max-h-[156px] overflow-hidden ${n?i?`bg-gray-100`:`bg-white`:`bg-gray-50 text-gray-400`} ${s?`ring-2 ring-primary-400 ring-inset`:``}`,children:[(0,I.jsx)(`div`,{className:`text-xs font-semibold mb-1 shrink-0`,children:e.getDate()}),n&&!i&&(0,I.jsx)(`div`,{className:`space-y-1 overflow-y-auto overflow-x-hidden max-h-[120px] min-h-0`,children:o.slice(0,6).map(e=>{let t=as(e.subjectId),n=t.length>20?`${t.slice(0,20)}…`:t,r=ps(e.type);return(0,I.jsxs)(`button`,{type:`button`,onClick:()=>je(e),className:`block w-full text-left text-[10px] leading-tight p-1 rounded truncate border border-white/40 hover:brightness-95 ${r.bg} ${r.text}`,title:t,children:[rs[e.timeSlot]?.start,` `,n]},e.id)})})]},t)})},t))})]}),(0,I.jsx)(`p`,{className:`text-xs text-gray-500 mt-2 px-2`,children:`В ячейке — занятия с этой календарной датой (неделя и день). Клик по занятию открывает редактирование.`})]})]}),(0,I.jsx)(Xu,{children:m?(()=>{let e=t.find(e=>e.id===m);return e?(0,I.jsx)(`div`,{className:`w-52 min-w-[12rem] max-w-[14rem] pointer-events-none shadow-lg rounded-lg`,children:(0,I.jsx)(Rs,{lesson:e,compact:!0,showGroupInfo:`${us(e.groupId)} • ${ds(e.groupId)} курс`,showStaffRoomDetails:!0})}):null})():null})]}),(0,I.jsx)(wm,{isOpen:n,onClose:()=>{r(!1),ee(null)},onSubmit:Ie,availableGroups:he,allowMultipleGroups:!i,initialData:Le?{subjectId:Le.subjectId,teacherId:Le.teacherId,auditoriumId:Le.auditoriumId,groupIds:[Le.groupId],type:Le.type,dayOfWeek:Le.dayOfWeek,timeSlot:Le.timeSlot,extraInfo:Le.extraInfo}:A?{dayOfWeek:A.dayOfWeek,timeSlot:A.timeSlot,groupIds:[C]}:k?{groupIds:[C]}:void 0,lessons:t,scheduleWeekStartKey:Le?.weekStartKey??A?.weekStartKey??ae,excludeLessonId:i}),(0,I.jsx)(Tm,{isOpen:o,subjectName:c?as(c.subjectId):``,onConfirm:Ne,onCancel:()=>{s(!1),l(null)}}),(0,I.jsx)(Dm,{isOpen:u,conflicts:we,onClose:()=>d(!1),onRemoveLesson:t=>e(po(t))}),(0,I.jsx)(Om,{isOpen:f,onClose:()=>p(!1),rows:Ee,sumScheduledScoped:De.sumScheduledScoped,sumPlannedScoped:De.sumPlannedScoped,totalScheduledHours:De.totalScheduledHours})]})]})}var nO=[{discipline:`Прикладная электродинамика (итого по потокам)`,direction:`РФ и КТ / КБ`,specialization:`Демидчик В.И. — совокупная нагрузка по ПЭД`,totalHoursListed:592.9},{discipline:`Теория колебаний и волн`,direction:`РФ и КТ`,specialization:`Беленькая С.С. — ТКиВ по сводке`,totalHoursListed:197},{discipline:`Цифровая обработка сигналов`,direction:`РФ и КТ`,specialization:`Полещук Н.Н. — лабораторный комплекс ЦОС`,totalHoursListed:715.6},{discipline:`Статистическая радиофизика и теория информации`,direction:`РФ и КТ`,specialization:`Мигель А.С. — СРиТИ`,totalHoursListed:439.1}],rO=[{teacherId:`1`,discipline:`Прикладная электродинамика (ПЭД)`,semesterTotalHours:592.9},{teacherId:`2`,discipline:`Теория колебаний и волн (ТКиВ)`,semesterTotalHours:197},{teacherId:`2`,discipline:`Кураторский час`,note:`3к 1РФ`,semesterTotalHours:void 0},{teacherId:`2`,discipline:`Прикладная электродинамика`,note:`лабораторные 3-й подгруппы совместно с Демидчиком В.И.`,semesterTotalHours:void 0},{teacherId:`3`,discipline:`Обеспечение связи в системах Интернета вещей (ОСвСИВ)`,semesterTotalHours:51.2},{teacherId:`4`,discipline:`Цифровая обработка сигналов (ЦОС)`,semesterTotalHours:715.6},{teacherId:`4`,discipline:`Компьютерное моделирование электродинамических процессов и систем (КМЭДПиС)`,note:`лаб. пт 3-я (1/2 пг) по графику — у Малого С.В.; у Полещук — слот в ауд. 56/49 в общем плане`,semesterTotalHours:void 0},{teacherId:`5`,discipline:`Микроволновые системы и технологии (МСиТ)`,semesterTotalHours:31.7},{teacherId:`5`,discipline:`Направленные антенные системы с заданными параметрами`,semesterTotalHours:22.8},{teacherId:`6`,discipline:`КМЭДПиС (весна + осень/смежные строки)`,semesterTotalHours:81.6},{teacherId:`7`,discipline:`Статистическая радиофизика и теория информации (СРиТИ)`,note:`в плане также ПИ и КБ (лаборатории и практика по сводке); в сетке — потоки 1–4, 8 РФ и лаборатории у Черепановой Ю.В. (3-я подгруппа)`,semesterTotalHours:439.1},{teacherId:`8`,discipline:`Разработка веб-приложений и сервисов (РВПиС)`,semesterTotalHours:77.1},{teacherId:`9`,discipline:`Нагрузка по плану (в т.ч. ЦОС / смежные строки)`,semesterTotalHours:371.8,note:`СРиТИ — лаб. 3-й подгруппы по расписанию; суммарно ~371,8 ч в сводке пользователя`},{teacherId:`10`,discipline:`Учебная практика «Аналоговая и цифровая схемотехника»`,semesterTotalHours:167},{teacherId:`10`,discipline:`Цифровая обработка сигналов (3-я подгруппа)`,note:`нагрузка в общем плане кафедры`,semesterTotalHours:void 0},{teacherId:`11`,discipline:`Статистическая радиофизика и теория информации`,note:`отдельная строка плана не указана`,semesterTotalHours:void 0},{teacherId:`12`,discipline:`КМЭДПиС`,semesterTotalHours:155.68},{teacherId:`13`,discipline:`Цифровая обработка сигналов (ЦОС)`,semesterTotalHours:165.5}],iO=`Факультет радиофизики и компьютерных технологий Белорусского государственного университета`,aO=`Кафедра радиофизики и цифровых медиа технологий`,oO=`Источники файлов (UTF-8): «Нагрузка 2025–2026 30.10.2025», «График работы весна 2026» — полные машинные расшифровки встроены в приложение (раздел справочника).`,sO=[{code:`ЧН / НН`,meaning:`чётная неделя / нечётная неделя (в карточках занятий пишется полностью вместо аббревиатур)`},{code:`ЛК / ЛБ`,meaning:`лекция / лабораторная работа`},{code:`ПЭД`,meaning:`прикладная электродинамика (график весны и телефонный сэмпл)`},{code:`СРиТИ`,meaning:`статистическая радиофизика и теория информации`},{code:`ЦОС`,meaning:`цифровая обработка сигналов`},{code:`ТКиВ`,meaning:`тематика курса «Теория колебаний и волн»`},{code:`ОСвСИВ`,meaning:`основы СВЧ и интегральных устройств / электродинамика СВЧ`},{code:`КМЭПиС / КМЭДПиС`,meaning:`компьютерная микроэлектроника и программируемые интегральные системы`},{code:`МСиТ`,meaning:`микроволновые системы и технологии`},{code:`УП АиЦ`,meaning:`учебная практика по аналоговой и цифровой схемотехнике`},{code:`РВПиС`,meaning:`радиоволновые процессы и системы`},{code:`601КБ / 602КБ`,meaning:`потоки направления «Кибербезопасность»`},{code:`РФ: 1–8 и пг.`,meaning:`радиофизические потоки; «пг» в графиках — подгруппа (в карточках расписания пишется как «N-я подгруппа»)`}],cO=rO.map(e=>({teacherId:e.teacherId,discipline:e.discipline,specialization:e.specialization,hours:e.semesterTotalHours,note:e.note}));function lO(){return nO.map(e=>({discipline:e.discipline,specialization:e.specialization,hours:e.totalHoursListed}))}var uO=`=== FILE: C:\\Users\\Lenovo\\AppData\\Roaming\\Cursor\\User\\workspaceStorage\\86fb6c45b922ebc75145df9c1489c4b2\\pdfs\\2299abc5-399c-447a-b2f8-47f070eb3522\\Нагрузка 2025-2026 30.10.2025 (1).pdf pages: 10 ===\r
\r
--- page 1 ---\r
\r
 Кафедра радиофизики и цифровых медиа технологий\r
лекции\r
практические/семинарские занятия\r
лабораторные занятия\r
лекции (ауд.)\r
лекции (ДОТ)\r
семинарские/практич. занятия (ауд.)\r
семинарские/практич. занятия (ДОТ)\r
лабораторные занятия (ауд.)\r
лабораторные занятия (ДОТ)\r
УСР (ауд.)\r
УСР (ДОТ)\r
текущие\r
индивидуальные\r
групповые перед экзаменом\r
контрольных работ\r
рефератов\r
др. видов письменных работ 2\r
лекции (ауд.)\r
лекции (ДОТ)\r
семинарские/практич. занятия (ауд.)\r
семинарские/практич. занятия (ДОТ)\r
лабораторные занятия (ауд.)\r
лабораторные занятия (ДОТ)\r
УСР (ауд.)\r
УСР (ДОТ)\r
текущие\r
индивидуальные\r
групповые перед экзаменом\r
контрольных работ\r
рефератов\r
др. видов письменных работ 2\r
1\r
2\r
3\r
4\r
5\r
6\r
7\r
8\r
9\r
10\r
11\r
12\r
13\r
14\r
15\r
16\r
17\r
18\r
19\r
20\r
21\r
22\r
23\r
24\r
25\r
26\r
27\r
28\r
29\r
30\r
31\r
32\r
33\r
34\r
35\r
36\r
37\r
38\r
39\r
40\r
41\r
42\r
43\r
45\r
46\r
47\r
48\r
49\r
50\r
51\r
52\r
53\r
54\r
55\r
56\r
57\r
58\r
59\r
60\r
61\r
62\r
63\r
64\r
Теория колебаний и \r
волн\r
РФ и КТ\r
3,5\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Фотоника и прикладные \r
компьютерные \r
е\r
о о\r
1\r
2\r
16\r
16\r
48\r
16\r
1,6\r
2\r
8\r
8,0\r
83,60\r
83,60\r
Теория колебаний и \r
волн\r
РФ и КТ\r
3,5\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Информатика,программ\r
ируемые электроника и \r
измерительные системы\r
1\r
3\r
21\r
21\r
72\r
24\r
1,6\r
2\r
10,5\r
10,5\r
120,60\r
120,60\r
Теория колебаний и \r
волн\r
РФ и КТ\r
3,5\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Компьютерное \r
проектирование и \r
технологии \r
микроэлектронных \r
систем\r
1\r
3\r
18\r
1,6\r
2\r
9\r
9,0\r
21,60\r
21,60\r
Прикладная \r
электродинамика\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
1\r
3\r
21\r
1,6\r
2\r
5,3\r
5,3\r
10,5\r
24,7\r
24,70\r
Прикладная \r
электродинамика\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Аэрокосмические \r
технологии\r
1\r
3\r
21\r
32\r
1,6\r
2\r
5\r
5\r
10\r
55,6\r
55,60\r
Прикладная \r
электродинамика\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Фотоника и прикладные \r
компьютерные \r
технологии\r
1\r
2\r
16\r
16\r
40\r
16\r
1,6\r
2\r
4\r
4\r
8\r
75,6\r
75,60\r
Прикладная \r
электродинамика\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Компьютерное \r
проектирование и \r
технологии \r
микроэлектронных \r
1\r
3\r
18\r
18\r
60\r
24\r
1,6\r
2\r
4,5\r
4,5\r
9\r
105,6\r
105,60\r
Прикладная \r
электродинамика\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Информатика,программ\r
ируемые электроника и \r
измерительные системы\r
1\r
3\r
21\r
60\r
24\r
1,6\r
2\r
5,3\r
5,3\r
10,5\r
108,7\r
108,70\r
Прикладная \r
электродинамика\r
РФ и КТ\r
3,6\r
очная\r
 6-05-0533-12  \r
Кибербезопастность. \r
Профилизация \r
Безопастность \r
компьютерных \r
технологий и систем.\r
1\r
3\r
24\r
24\r
60\r
24\r
1,6\r
2\r
6\r
6\r
12\r
111,6\r
111,60\r
Прикладная \r
электродинамика\r
РФ и КТ\r
3,6\r
очная\r
 6-05-0533-12  \r
Кибербезопастность. \r
Профилизация \r
Безопастность \r
компьютерных \r
технологий и систем.\r
1\r
3\r
23\r
23\r
60\r
24\r
1,6\r
2\r
5,8\r
5,8\r
11,5\r
110,7\r
110,70\r
План распределения педагогической нагрузки между педагогическими работниками\r
  на 2025- 2026 учебный год\r
штатные преподаватели, совместители, преподаватели, работающие на условиях почасовой оплаты \r
Факультет радиофизики и компьютерных технологий\r
Белорусский государственный университет\r
УТВЕРЖДАЮ\r
Проректор по учебной работе и \r
образовательным инновациям\r
О.Г. Прохоренко\r
2025\r
1\r
Демидчик Валерий \r
Иосифович\r
доцент\r
1,00\r
к.т.н.\r
доцент\r
Всего за год\r
Подпись преподавателя\r
Руководство\r
Количество групп\r
дипломными (выпускными) работами (проектами)\r
магистерскими дессертациями\r
аспирантами3\r
ВЕСЕННИЙ СЕМЕСТР\r
Виды занятий (часов)\r
Консультации\r
Проверка\r
Экзамен, дифференцированный зачет\r
Зачет\r
Всего за семестр\r
учебной практикой\r
Иные виды работ \r
Всего за семестр\r
Количество \r
студентов \r
(по видам \r
занятий), \r
включая \r
иностр. \r
студентов\r
Количество подгрупп\r
Количество иностр.студентов\r
Проверка\r
ОСЕННИЙ СЕМЕСТР\r
Виды занятий (часов)\r
Доля ставки\r
рецензирование квалификационных работ\r
Итоговая аттестация\r
Факультет\r
Преподаваемая дисциплина1\r
Ученое звание\r
№ \r
п/п \r
Фамилия, Имя, \r
Отчество \r
(полностью)\r
Зачет\r
Консультации\r
Должность\r
Количество потоков\r
Специальность (направление специальности), \r
специализация (профилизация)\r
Форма обучения (очная, заочная,дистанционная)\r
Курс\r
Ученая степень\r
Экзамен,дифференцированный зачет\r
производственной практикой\r
курсовыми работами\r
Штатные преподаватели\r
\r
\r
--- page 2 ---\r
\r
Участие в ГЭК  по \r
приему  госэкзамена  по \r
специальности \r
Радиофизика 1-31 04 02  \r
56   чел.\r
РФ и КТ\r
4,8\r
очная\r
РФ\r
56\r
4\r
4\r
28\r
32,00\r
ИТОГО\r
25\r
120\r
40\r
4,8\r
6\r
27,5\r
27,5\r
226\r
36\r
280\r
112\r
11,2\r
14\r
35,9\r
35,9\r
71,5\r
596,5\r
28\r
850,30\r
Интерфейсы \r
микроконтролллерных \r
систем\r
РФ и КТ\r
4,7\r
очная\r
1-31 04 02 Радиофизика \r
1\r
1\r
2\r
12\r
12\r
32\r
64\r
2\r
6\r
4,2\r
108,20\r
108,20\r
Интерфейсы \r
микроконтролллерных \r
систем\r
РФ и КТ\r
4,7\r
очная\r
1-31 04 03 07-02 \r
Прикладная \r
информатика \r
1\r
1\r
7\r
7\r
32\r
1,6\r
3,5\r
2,5\r
39,60\r
39,60\r
Мультимидийные \r
технологии мобильной \r
связи\r
РФ и КТ\r
4,7\r
очная\r
1-31 04 03 07-02 \r
Прикладная \r
информатика \r
1\r
1\r
1\r
7\r
7\r
32\r
28\r
1,6\r
2\r
1,8\r
1,8\r
3,5\r
70,70\r
70,70\r
Программирование \r
микроконтроллеров\r
РФ и КТ\r
3,5\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
1\r
1\r
3\r
21\r
21\r
32\r
72\r
24\r
1,6\r
2\r
10,5\r
10,5\r
152,60\r
152,60\r
Беспроводная связь, \r
интерфейсы и \r
протоколы современных \r
систем передачи данных\r
РФ и КТ\r
3,5\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
1\r
1\r
1\r
7\r
7\r
28\r
20\r
8\r
1,4\r
3,5\r
2,5\r
63,40\r
63,40\r
Обеспечение связи в \r
системах Интернета \r
вещей\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
1\r
1\r
1\r
7\r
7\r
24\r
20\r
1,20\r
3,5\r
2,5\r
51,2\r
51,20\r
Руководство курсовыми \r
работами \r
РФ и КТ\r
2\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
5\r
28,75\r
28,75\r
Руководство курсовыми \r
работами\r
РФ и КТ\r
3\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
4\r
35\r
35\r
Руководство курсовыми \r
работами\r
РФ и КТ\r
4\r
очная\r
РФ, ПИ\r
4\r
35\r
35\r
Руководство диплом \r
работой\r
РФ и КТ\r
4\r
очная\r
РФ,ПИ\r
4\r
88\r
104\r
16\r
9,5\r
218\r
9,5 диф. зачет по \r
производственной практике \r
ИТОГО\r
124\r
216\r
32\r
8\r
2\r
16,8\r
12,3\r
14\r
9,2\r
435\r
24\r
20\r
1\r
4\r
3\r
51\r
88\r
99\r
104\r
16\r
10\r
802\r
Теория колебаний и \r
волн\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
1\r
1\r
21\r
32\r
1,6\r
2\r
10,5\r
5,3\r
10,5\r
61,9\r
61,90\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
3\r
21\r
84\r
12\r
96\r
96,00\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Аэрокосмические \r
технологии\r
3\r
20\r
84\r
12\r
96\r
96,00\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Фотоника и прикладные \r
компьютерные \r
технологии\r
2\r
16\r
56\r
8\r
64\r
64,00\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Компьютерное \r
проектирование и \r
технологии \r
микроэлектронных \r
систем\r
3\r
18\r
84\r
12\r
96\r
96,00\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Информатика,программ\r
ируемые электроника и \r
измерительные системы\r
3\r
21\r
84\r
12\r
96\r
96\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
3\r
21\r
72\r
12\r
15,8\r
99,80\r
99,80\r
3\r
Полещук Наталья \r
Николаевна\r
старший преподаватель\r
1,00\r
Курило Владимир \r
Степанович\r
старший преподаватель\r
1,0\r
2\r
Компьютерные сети\r
РФ и КТ\r
3,5\r
очная\r
\r
\r
--- page 3 ---\r
\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Фотоника и прикладные \r
компьютерные \r
технологии\r
2\r
16\r
48\r
8\r
12\r
68,00\r
68,00\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Информатика,программ\r
ируемые электроника и \r
измерительные системы\r
3\r
21\r
72\r
12\r
15,8\r
99,80\r
99,80\r
Руководство курсовыми \r
работами\r
РФ и КТ\r
2\r
очная\r
РФ,ПИ\r
2\r
11,5\r
11,50\r
ИТОГО\r
392\r
56\r
448\r
32\r
192\r
32\r
1,6\r
2\r
54,1\r
5,3\r
10,5\r
330\r
12\r
789\r
Основы радиофизики и \r
цифровых технологий\r
РФ и КТ\r
2,3\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
1\r
1\r
23\r
10\r
10\r
10\r
Обратные задачи \r
радиофизики\r
РФ и КТ\r
4,7\r
очная\r
1-31 04 02 Радиофизика \r
1\r
1\r
12\r
32\r
2\r
4,2\r
37,80\r
37,80\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Аэрокосмические \r
технологии\r
3\r
20\r
72\r
24\r
96,00\r
96,00\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Компьютерное \r
проектирование и \r
технологии \r
микроэлектронных \r
систем\r
3\r
18\r
72\r
24\r
96,00\r
96,00\r
Микроволновые \r
системы и технологии\r
РФ и КТ\r
1,2 \r
маг\r
очная\r
7-06-0533-03 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация: \r
Материалы и \r
технологии \r
микроволновых и \r
микроэлектронных \r
систем\r
1\r
1\r
1\r
9\r
24\r
1,2\r
2\r
4,5\r
31,7\r
31,70\r
Направленные антенные \r
системы с заданными \r
параметрами\r
РФ и КТ\r
1,2,м\r
аг\r
очная\r
7-06-0533-09 \r
Аэрокосмические \r
технологии \r
Профилизация: \r
Проектирование и \r
управление \r
летательными \r
аппаратами\r
1\r
1\r
1\r
5\r
20\r
1\r
1,8\r
22,8\r
22,80\r
Руководство курсовыми \r
работами\r
РФ и КТ\r
2\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
4\r
23\r
23,00\r
Руководство курсовыми \r
работами\r
РФ и КТ\r
3\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
4\r
35\r
35,00\r
Руководство курсовой и  \r
дипломной работой\r
РФ и КТ\r
4\r
очная\r
РФ,ПИ\r
2\r
44\r
17,5\r
52\r
8\r
121,50\r
Руководство \r
магистерской \r
дессиртацией \r
РФ и КТ\r
2\r
очная\r
7-06-0533-03 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация: \r
Радиофизика, \r
электроника и \r
информатика\r
3\r
49,5\r
60\r
12\r
1,8\r
123\r
1,8 -исследование по \r
направлению маг. Дисс.\r
Руководство аспирантом \r
О Сучан\r
РФ и КТ\r
2\r
очная\r
асп.\r
1\r
100\r
100\r
Участие в ГЭК  по \r
защите дипломных \r
работ  по специальности \r
Радиофизика 1-31 04 02  \r
56   чел.\r
РФ и КТ\r
4\r
очная\r
1-31 04 02 Радиофизика\r
56\r
28\r
28\r
ИТОГО\r
42\r
144\r
48\r
1,6\r
4,2\r
240\r
44\r
2,2\r
2\r
4,5\r
1,8\r
54,5\r
93,5\r
75,5\r
52\r
60\r
100\r
20\r
28\r
1,8\r
725,1\r
Технические средства и \r
методы защиты \r
информации\r
РФ и КТ\r
4,7\r
очная\r
 1-31 04 03 07-02 \r
Прикладная \r
информатика \r
(информационные \r
технологии \r
телекоммуникационных \r
систем) \r
1\r
7\r
20\r
4\r
24\r
24,00\r
РФ и КТ\r
4,7\r
очная\r
 1-31 04 03 07-02 \r
Прикладная \r
информатика \r
(информационные \r
технологии \r
телекоммуникационных \r
систем) \r
6\r
47\r
168\r
23,5\r
11,8\r
203,3\r
203,30\r
Максимович Елена \r
Степановна\r
зав.кафедрой\r
1.0\r
к.т.н.\r
доцент\r
4\r
Цифровая обработка \r
сигналов\r
РФ и КТ\r
очная\r
3,6\r
Теория колебаний и \r
волн\r
РФ и КТ\r
3,5\r
очная\r
\r
\r
--- page 4 ---\r
\r
РФ и КТ\r
4,7\r
очная\r
 1-98 01 01 -02 \r
Компьютерная \r
безопасность \r
(радиофизические \r
методы и программно-\r
технические средства)\r
6\r
49\r
168\r
24,5\r
12,3\r
204,8\r
204,80\r
РФ и КТ\r
4,7\r
очная\r
1-31 04 02 Радиофизика \r
7\r
56\r
28\r
14\r
42\r
42,00\r
РФ и КТ\r
4,7\r
очная\r
1-31 04 04 \r
Аэрокосмические \r
радиоэлектронные и \r
информационные \r
системы и технологии\r
3\r
21\r
10,5\r
5,3\r
15,8\r
15,80\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
3\r
21\r
60\r
24\r
84\r
84,00\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Аэрокосмические \r
технологии\r
3\r
20\r
60\r
24\r
84\r
84,00\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
3\r
21\r
15,8\r
5,3\r
21,1\r
21,10\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Аэрокосмические \r
технологии\r
3\r
20\r
15\r
5\r
20\r
20,00\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Компьютерное \r
проектирование и \r
технологии \r
микроэлектронных \r
систем\r
3\r
18\r
72\r
24\r
13,5\r
4,5\r
114\r
114,00\r
ИТОГО\r
356\r
4\r
86,5\r
43,4\r
489,9\r
192\r
72\r
44,3\r
14,8\r
323,1\r
813\r
РФ и КТ\r
3,5\r
очная\r
6-05-0533-11 \r
Прикладная \r
информатика. \r
Профилизация \r
Интелектуальные и \r
киберфизические \r
системы.\r
4\r
29\r
80\r
32\r
21,8\r
133,8\r
133,80\r
РФ и КТ\r
3,5\r
очная\r
 6-05-0533-11 \r
Прикладная \r
информатика. \r
Профилизация Анализ \r
больших данных и \r
биоинформатика.\r
3\r
24\r
60\r
24\r
18\r
102,00\r
102,00\r
РФ и КТ\r
3,5\r
очная\r
 6-05-0533-12  \r
Кибербезопастность. \r
Профилизация \r
Безопастность \r
компьютерных \r
технологий и систем.\r
3\r
24\r
60\r
24\r
18\r
102,00\r
102,00\r
РФ и КТ\r
3,5\r
очная\r
6-05-0533-12  \r
Кибербезопастность. \r
Профилизация \r
Киберустойчивость и \r
безопастость \r
киберфизических \r
систем.\r
3\r
23\r
60\r
24\r
17,3\r
101,3\r
101,30\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Фотоника и прикладные \r
компьютерные \r
технологии\r
2\r
16\r
48\r
16\r
12\r
4\r
80,00\r
80\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
3\r
21\r
72\r
24\r
96\r
96\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Аэрокосмические \r
технологии\r
3\r
20\r
72\r
24\r
96\r
96\r
6\r
5\r
Беленькая \r
Светлана \r
Сергеевна\r
старший преподаватель\r
1,00\r
старший преподаватель\r
Мигель Антон \r
Сергеевич\r
Статистическая \r
радиофизика\r
Прикладная \r
электродинамика\r
Теория информиции и \r
основы статистической \r
радиофизики\r
Статистическая \r
радиофизика и теория \r
информации\r
1,0\r
Статистическая \r
радиофизика и теория \r
информации\r
\r
\r
--- page 5 ---\r
\r
Статистическая \r
радиофизика \r
РФ и КТ\r
4,7\r
очная\r
1-31 04 04 \r
Аэрокосмические \r
радиоэлектронные и \r
информационные \r
системы и технологии\r
3\r
21\r
84\r
24\r
108\r
108,00\r
ИТОГО\r
344\r
128\r
75,1\r
547,1\r
192\r
64\r
12\r
4\r
272\r
819\r
Технологии \r
проектирования \r
программного \r
обеспечения\r
РФ и КТ\r
3,5\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
1\r
1\r
2\r
14\r
14\r
28\r
40\r
16\r
1,4\r
7\r
4,9\r
97,30\r
97,3\r
Автоматизированная \r
обработка звуковых \r
сигналов и речи\r
РФ и КТ\r
4,7\r
очная\r
 1-31 04 03 07-02 \r
Прикладная \r
информатика \r
(информационные \r
технологии \r
телекоммуникационных \r
систем)\r
1\r
1\r
1\r
7\r
32\r
20\r
8\r
1,6\r
1,8\r
1,8\r
2,5\r
67,70\r
67,7\r
 6-05-0533-11 \r
Прикладная \r
информатика. \r
Профилизация \r
Интелектуальные и \r
киберфизические \r
системы.\r
1\r
1\r
4\r
29\r
32\r
1,60\r
2\r
14,50\r
50,10\r
50,1\r
  6-05-0533-11 \r
Прикладная \r
информатика. \r
Профилизация Анализ \r
больших данных и \r
биоинформатика.\r
1\r
3\r
24\r
1,60\r
2\r
12,00\r
15,60\r
15,6\r
 6-05-0533-12  \r
Кибербезопастность. \r
Профилизация \r
Безопастность \r
компьютерных \r
технологий и систем.\r
1\r
3\r
24\r
1,60\r
2\r
12,00\r
15,60\r
15,6\r
6-05-0533-12  \r
Кибербезопастность. \r
Профилизация \r
Киберустойчивость и \r
безопастость \r
киберфизических \r
систем.\r
1\r
3\r
23\r
1,60\r
2\r
11,50\r
15,10\r
15,1\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
1\r
3\r
21\r
2,2\r
2\r
10,5\r
14,7\r
14,7\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Аэрокосмические \r
технологии\r
1\r
1\r
3\r
20\r
44\r
2,2\r
2\r
10\r
58,2\r
58,2\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Фотоника и прикладные \r
компьютерные \r
технологии\r
1\r
2\r
16\r
2,2\r
2\r
8\r
12,2\r
12,2\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Компьютерное \r
проектирование и \r
технологии \r
микроэлектронных \r
систем\r
1\r
3\r
18\r
2,2\r
2\r
9\r
13,2\r
13,2\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Информатика,программ\r
ируемые электроника и \r
измерительные системы\r
1\r
3\r
21\r
2,2\r
2\r
10,5\r
14,7\r
14,7\r
Мультимедийные \r
системы и среды\r
РФ и КТ\r
4,7\r
очная\r
 1-31 04 03 07-02 \r
Прикладная \r
информатика \r
(информационные \r
технологии \r
телекоммуникационных \r
систем)\r
1\r
2\r
6\r
47\r
32\r
3,2\r
4\r
23,5\r
62,70\r
62,7\r
1-31 04  02 Радиофизика\r
1\r
3\r
7\r
56\r
32\r
5\r
6\r
28\r
70,80\r
70,8\r
1-31 04 04 \r
Аэрокосмические \r
радиоэлектронные и \r
информационные \r
системы и технологии\r
1\r
3\r
21\r
1,60\r
2\r
10,50\r
14,10\r
14,1\r
к.ф.-м.н.\r
доцент\r
Статистическая \r
радиофизика и теория \r
информации\r
РФ и КТ\r
3,6\r
3,5\r
очная\r
очная\r
7\r
Хейдоров Игорь \r
Эдуардович\r
доцент\r
1,0\r
Теория информиции и \r
основы статистической \r
радиофизики\r
РФ и КТ\r
\r
\r
--- page 6 ---\r
\r
1-31 04 03 07-02 \r
Прикладная \r
информатика \r
(информационные \r
технологии \r
телекоммуникационных \r
систем)\r
1\r
2\r
6\r
47\r
32\r
3,20\r
4\r
23,50\r
62,70\r
62,7\r
 1-98 01 01 -02 \r
Компьютерная \r
безопасность \r
(радиофизические \r
методы и программно-\r
технические средства)\r
2\r
6\r
49\r
3,20\r
4\r
24,50\r
31,70\r
31,7\r
Руководство курсовыми \r
работами\r
РФ и КТ\r
2\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
5\r
28,75\r
28,75\r
Руководство \r
курсовывми работами\r
РФ и КТ\r
3\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
7\r
61,25\r
61,25\r
Руководств \r
магистерскими \r
работами\r
РФ и КТ\r
1\r
очная\r
7-06-0533-03 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация: \r
Материалы и \r
технологии \r
микроволновых и \r
микроэлектронных \r
систем\r
1\r
20\r
20\r
Участие в ГЭК 63 по \r
приему \r
государственного \r
экзамена и защите \r
дипломных работ\r
РФ и КТ\r
4\r
очная\r
1-98 01 01 -02 \r
Компьютерная \r
безопасность \r
(радиофизические \r
методы и программно-\r
технические средства)\r
49\r
49\r
49\r
ИТОГО\r
188\r
60\r
8\r
16\r
25,4\r
28\r
8,8\r
1,8\r
160\r
7,4\r
503,4\r
44\r
11\r
10\r
48\r
113\r
90\r
20\r
49\r
775,4\r
354\r
1632\r
8\r
324\r
40\r
36\r
215\r
58\r
202\r
21\r
2889\r
180\r
876\r
280\r
27\r
28\r
150\r
60\r
135\r
4\r
1740\r
182\r
276\r
156\r
80\r
100\r
36\r
105\r
11\r
5574\r
ИТОГО:\r
Статистическая \r
радиофизика\r
РФ и КТ\r
4,7\r
очная\r
\r
\r
--- page 7 ---\r
\r
Основы радиофизики и \r
цифровых технологий\r
РФ и КТ\r
2,3\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
1\r
1\r
23\r
22\r
16\r
1,6\r
5,8\r
8,1\r
53,50\r
53,50\r
Компьютерное \r
моделирование \r
электродинамических \r
процессов и систем\r
РФ и КТ\r
4,7\r
очная\r
1-31 04  02 Радиофизика\r
1\r
1\r
4\r
32\r
28\r
1,4\r
11,2\r
40,60\r
40,60\r
Компьютерное \r
моделирование \r
электродинамических \r
процессов и систем\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
1\r
1\r
3\r
21\r
32\r
1,6\r
7,4\r
41,00\r
41,00\r
Вычислительная \r
радиофизика\r
РФ и КТ\r
1,1 \r
маг\r
очная\r
7-06-0533-03 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация: \r
Материалы и \r
технологии \r
микроволновых и \r
микроэлектронных \r
систем\r
1\r
1\r
1\r
9\r
9\r
32\r
40\r
1,60\r
2\r
4,5\r
5\r
84,60\r
84,60\r
Руководство курсовой \r
работой\r
РФ и КТ\r
2\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Р\r
ф\r
2\r
11,5\r
11,50\r
Руководство курсовой \r
работой\r
РФ и КТ\r
3\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Р\r
ф\r
4\r
35\r
35,00\r
Участие в ГЭК  по \r
защите дипломных \r
работ\r
РФ и КТ\r
4\r
очная\r
 1-31 04 03 07-02 \r
Прикладная \r
информатика \r
(информационные \r
технологии \r
телекоммуникационных \r
систем)\r
47\r
23,5\r
23,50\r
Руководство аспирантом \r
Мигель А.С.\r
РФ и КТ\r
2\r
очная\r
РФ\r
1\r
100\r
100\r
Руководство \r
магистерской работой\r
РФ и КТ\r
2\r
очная\r
РФ\r
1\r
16,5\r
20\r
4\r
40,50\r
ИТОГО\r
82\r
16\r
40\r
4,6\r
2\r
4,5\r
5,8\r
4,5\r
19,3\r
178,70\r
32\r
1,6\r
7,4\r
41\r
16,5\r
46,5\r
20\r
100\r
27,5\r
430,2\r
Теория колебаний и \r
волн\r
РФ и КТ\r
3,5\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
1\r
1\r
3\r
21\r
32\r
60\r
24\r
1,6\r
2\r
10,5\r
10,50\r
140,6\r
141\r
Теория колебаний и \r
волн\r
РФ и КТ\r
3,5\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Аэрокосмические \r
технологии\r
1\r
1\r
3\r
20\r
32\r
1,60\r
2\r
10\r
10\r
55,60\r
56\r
ИТОГО\r
64\r
60\r
24\r
3,2\r
4\r
20,5\r
20,5\r
196\r
196,2\r
3\r
Технические средства и \r
методы защиты \r
информации\r
РФ и КТ\r
4,7\r
очная\r
1-98 01 01 -02 \r
Компьютерная \r
безопасность \r
(радиофизические \r
методы и программно-\r
технические средства)\r
6\r
49\r
144\r
48\r
192,00\r
192,00\r
ИТОГО\r
144\r
48\r
192\r
192\r
Системы мобильной \r
связи\r
РФ и КТ\r
4,7\r
очная\r
1-31 04 02 Радиофизика\r
1\r
1\r
2\r
12\r
12\r
32\r
56\r
1,60\r
2\r
3\r
3\r
6\r
103,6\r
103,6\r
Теория колебаний и \r
волн\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
3\r
21\r
60\r
24\r
84\r
84\r
ИТОГО\r
32\r
56\r
1,6\r
2\r
3\r
3\r
6\r
104\r
60\r
24\r
84\r
187,6\r
5\r
Кугейко Михаил \r
Михайлович\r
профессор\r
0,25\r
д.ф-м.н.\r
профессор\r
Руководство дипломной \r
работой\r
РФ и КТ\r
4\r
очная\r
РФ,ПИ\r
3\r
66\r
26,25\r
78\r
12\r
182,25\r
ИТОГО\r
66\r
26,25\r
78\r
12\r
182,25\r
Статистические методы \r
обработки акустических \r
сигналов\r
РФ и КТ\r
4,7\r
очная\r
1-31 04 02 Радиофизика\r
1\r
1\r
12\r
32\r
20\r
12\r
1,6\r
3\r
3\r
4,2\r
75,80\r
75,8\r
Руководство курсовой и \r
дипломной работой\r
РФ и КТ\r
4\r
очная\r
РФ,ПИ\r
5\r
110\r
43,75\r
130\r
20\r
303,75\r
ИТОГО\r
32\r
20\r
12\r
2\r
3\r
3\r
4\r
76\r
110\r
44\r
130\r
20\r
379,55\r
Компьютерное \r
моделирование \r
электродинамических \r
процессов и систем\r
РФ и КТ\r
4,7\r
очная\r
1-31 04  02 Радиофизика\r
4\r
32\r
112\r
16\r
128\r
128\r
Разработка веб-\r
приложений и сервисов\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
1\r
1\r
2\r
14\r
14\r
24\r
40\r
1,2\r
7\r
4,9\r
77,10\r
77,1\r
6\r
4\r
Курило Владимир \r
Степанович\r
старший преподаватель\r
0,25\r
7\r
Мигель Антон \r
Сергеевич\r
старший преподаватель\r
0.25\r
Хейдоров Игорь \r
Эдуардович\r
Внутренние совместители \r
2\r
Демидчик Валерий \r
Иосифович\r
доцент\r
0,25\r
к.т.н.\r
c 01.10.2025\r
доцент\r
0,50\r
1\r
Малый Сергей \r
Владимирович\r
доцент\r
0,5\r
к.ф.-м.н.\r
Беленькая \r
Светлана \r
Сергеевна\r
старший преподаватель\r
0,25\r
c 01.10.2025\r
\r
\r
--- page 8 ---\r
\r
ИТОГО\r
24\r
152\r
1,2\r
23\r
4,9\r
205\r
205,1\r
Статистическая \r
радиофизика и теория \r
информации\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Информатика,программ\r
ируемые электроника и \r
измерительные системы\r
3\r
21\r
72\r
24\r
15,8\r
5,3\r
117,1\r
117,1\r
Статистическая \r
радиофизика\r
РФ и КТ\r
4,7\r
очная\r
1-31 04 02 Радиофизика\r
7\r
56\r
196\r
56\r
252\r
252\r
ИТОГО\r
196\r
56\r
252\r
72\r
24\r
15,8\r
5,3\r
117,1\r
369,1\r
Электронные приборы \r
СВЧ диапазона\r
РФ и КТ\r
4,7\r
очная\r
1-31 04 02 Радиофизика \r
1\r
1\r
2\r
12\r
12\r
32\r
48\r
8\r
1,60\r
2,00\r
3\r
3\r
6\r
103,6\r
103,6\r
Компьютерное моделие \r
электродинамических \r
процессов и систем\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
3\r
21\r
72\r
12\r
10,5\r
94,5\r
61,18\r
155,68\r
Курсовой проект 7 чел.7*\r
Руководство \r
дипломными и \r
курсовыми работами\r
РФ и КТ\r
4\r
очная\r
РФ и ПИ\r
2\r
44\r
17,5\r
52\r
8\r
121,5\r
ИТОГО\r
32\r
48\r
8\r
1,6\r
2\r
3\r
3\r
6\r
104\r
72\r
12\r
10,5\r
94,5\r
44\r
79\r
52\r
8\r
380,8\r
266\r
16\r
716\r
12\r
136\r
14\r
10\r
57\r
15\r
37\r
28\r
1307\r
32\r
204\r
60\r
2\r
26\r
5\r
7\r
220\r
237\r
195\r
260\r
20\r
100\r
40\r
28\r
2522,8\r
Учебная \r
практика"Аналоговая и \r
цифровая схемотехника"\r
РФ и КТ\r
2,4\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
(Радиофизика и \r
цифровые технологии; \r
Фотоника и прикладные \r
компьютерные \r
технологии)\r
4\r
46\r
23\r
23\r
144\r
167\r
Руководство курсовыми  \r
работами\r
РФ и КТ\r
2\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
4\r
23\r
23\r
Руководство \r
дипломными и \r
курсовыми работами\r
РФ и КТ\r
4\r
очная\r
РФ и ПИ\r
2\r
44\r
17,5\r
52\r
8\r
121,5\r
Компьютерное моделие \r
электродинамических \r
процессов и систем\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
5\r
43,70\r
43,7\r
Курсовой проект 5 чел.\r
ИТОГО\r
23\r
23\r
144\r
44\r
84\r
52\r
8\r
355,20\r
Цифровая обработка \r
сигналов\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Компьютерное \r
проектирование и \r
технологии \r
микроэлектронных \r
систем\r
3\r
18\r
72\r
12\r
14\r
97,50\r
97,50\r
Цифровая обработка \r
сигналов\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-12  \r
Кибербезопастность. \r
Профилизация \r
Безопастность \r
компьютерных \r
технологий и систем.\r
2\r
16\r
48\r
8\r
12\r
68\r
68,00\r
Мультимедийные \r
системы и среды\r
РФ и КТ\r
4,7\r
очная\r
1-31 04 03 07-02 \r
Прикладная \r
информатика \r
(информационные \r
технологии \r
телекоммуникационных \r
систем)\r
6\r
47\r
168\r
24\r
23,8\r
11,8\r
227,6\r
227,60\r
ИТОГО\r
168\r
24\r
23,8\r
11,8\r
227,6\r
120\r
20\r
26\r
166\r
393,10\r
Цифровая обработка \r
сигналов\r
РФ и КТ\r
4,7\r
очная\r
1-31 04  02 Радиофизика\r
7\r
56\r
168\r
28\r
42,00\r
238\r
238\r
Цифровая обработка \r
сигналов\r
РФ и КТ\r
4,7\r
очная\r
1-31 04 04 \r
Аэрокосмические \r
радиоэлектронные и \r
информационные \r
системы и технологии\r
3\r
21\r
72\r
12\r
15,8\r
99,8\r
99,8\r
Цифровая обработка \r
сигналов\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-12  \r
Кибербезопастность. \r
Профилизация \r
Безопастность \r
компьютерных \r
технологий и систем.\r
1\r
8\r
24\r
4\r
6\r
34\r
34\r
ИТОГО\r
240\r
40\r
57,8\r
337,8\r
24\r
4\r
6\r
34\r
372\r
Технические средства и \r
методы защиты \r
информации\r
РФ и КТ\r
4,7\r
очная\r
 1-98 01 01 -02 \r
Компьютерная \r
безопасность \r
(радиофизические \r
методы и программно-\r
технические средства)\r
1\r
2\r
6\r
49\r
32\r
3,2\r
4\r
24,5\r
24,50\r
88,2\r
88\r
2\r
Полещук Наталья \r
Николаевна\r
9\r
Болотько Тимофей \r
Павлович\r
преподаватель -стажер\r
0,5\r
с 01.10.2025\r
1\r
Романов Анатолий \r
Филипович\r
доцент\r
0,5\r
к.т.н.\r
доцент\r
старший преподаватель\r
0,50\r
8\r
Черепанова Юлия \r
Витальевна\r
ассистент \r
0,50\r
c 19.09.2025\r
3\r
Демьянюк \r
Дмитрий \r
Валентинович\r
старший преподаватель\r
0.5\r
Внешние совместители\r
ИТОГО:\r
\r
\r
--- page 9 ---\r
\r
Технические средства и \r
методы защиты \r
информации\r
РФ и КТ\r
4,7\r
очная\r
1-31 04 03 07-02 \r
Прикладная \r
информатика \r
(информационные \r
технологии \r
телекоммуникационных \r
систем) \r
1\r
1\r
7\r
1,6\r
1,8\r
2,5\r
5,9\r
6\r
Радиофизические \r
методы защиты \r
информации и \r
электромагнитная \r
совместимость\r
РФ и КТ\r
2,3 \r
маг\r
очная\r
7-06-0533-08 \r
Кибербезопастность\r
1\r
1\r
1\r
8\r
12\r
14\r
40\r
1,3\r
2\r
4\r
73,3\r
73,30\r
Кибербезопасность в \r
аэрокосмических \r
технологиях\r
РФ и КТ\r
2,3 \r
маг\r
очная\r
7-06-0533-09 \r
Аэрокосмические \r
технологии \r
Профилизация: \r
Проектирование и \r
управление \r
летательными \r
аппаратами\r
1\r
1\r
1\r
5\r
10\r
10\r
24\r
1\r
1,3\r
1,8\r
48,1\r
48,10\r
Компьютерное моделие \r
электродинамических \r
процессов и систем\r
РФ и КТ\r
3,6\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии Профилизация \r
Радиофизика и цифровые \r
технологии\r
9\r
78,7\r
78,70\r
Курсовой проект 7 чел.\r
Участие в ГЭК  по \r
приему \r
государственного \r
экзамена и  по  защите \r
дипломных работ\r
РФ и КТ\r
4,8\r
очная\r
 1-31 04 03 07-02 \r
Прикладная \r
информатика \r
(информационные \r
технологии \r
телекоммуникационных \r
систем)\r
47\r
2\r
47\r
49\r
2 ч обзорных лекций \r
гос.экзамен\r
Руководсво  курсовыми \r
работами\r
РФ и КТ\r
2\r
очная\r
6-05-0533-12 \r
Кибербезопасность \r
Профилизация: \r
Киберустойчивость и \r
безопасность \r
киберфизических \r
систем\r
6\r
34,5\r
34,50\r
Руководство курсовыми  \r
работами\r
РФ и КТ\r
3\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии Профилизация \r
Радиофизика и цифровые \r
технологии\r
2\r
17,5\r
17,50\r
ИТОГО\r
54\r
24\r
64\r
7,1\r
6\r
27,6\r
28,5\r
4,3\r
215,5\r
2\r
130,7\r
47\r
395\r
1-31 04  02 Радиофизика\r
1\r
3\r
7\r
56\r
32\r
4,8\r
6\r
28\r
70,8\r
71\r
1-31 04 04 \r
Аэрокосмические \r
радиоэлектронные и \r
информационные \r
системы и технологии\r
1\r
3\r
21\r
1,6\r
2\r
10,5\r
14,1\r
14\r
1-31 04 03 07-02 \r
Прикладная \r
информатика \r
(информационные \r
технологии \r
телекоммуникационных \r
систем)\r
1\r
2\r
6\r
47\r
32\r
3,2\r
4\r
23,5\r
62,7\r
62,70\r
 1-98 01 01 -02 \r
Компьютерная \r
безопасность \r
(радиофизические \r
методы и программно-\r
технические средства)\r
2\r
6\r
49\r
3,2\r
4\r
24,5\r
31,7\r
31,70\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
1\r
1\r
21\r
1,6\r
2\r
10,5\r
14,1\r
14,10\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Фотоника и прикладные \r
компьютерные \r
технологии\r
1\r
1\r
2\r
16\r
32\r
1,6\r
2\r
8\r
43,6\r
44\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Компьютерное \r
проектирование и \r
технологии \r
микроэлектронных \r
систем\r
1\r
3\r
18\r
1,6\r
2\r
9\r
12,6\r
13\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Компьютерное \r
проектирование и \r
технологии \r
микроэлектронных \r
систем\r
1\r
3\r
21\r
1,6\r
2\r
10,5\r
14,1\r
14\r
 6-05-0533-12  \r
Кибербезопастность. \r
Профилизация \r
Безопастность \r
компьютерных \r
технологий и систем.\r
1\r
1\r
3\r
24\r
32\r
1,6\r
2\r
12\r
47,6\r
48\r
4\r
Яскевич Вячеслав \r
Эдуардович\r
доцент\r
Цифровая обработка \r
сигналов\r
РФ и КТ\r
4,7\r
очная\r
Цифровая обработка \r
сигналов\r
РФ и КТ\r
3,6\r
очная\r
5\r
Чугай Константин \r
Николаевич\r
доцент\r
0,5\r
к.т.н.\r
доцент\r
0,5\r
к.т.н.\r
доцент\r
\r
\r
--- page 10 ---\r
\r
Участие в ГЭК по \r
приему гос. экзамена и \r
зищите дипломных \r
работ\r
РФ и КТ\r
4,8\r
очная\r
1-31 04  02 Радиофизика\r
56\r
56\r
56,00\r
Руководство аспирантом \r
Черепанова Ю.В.\r
РФ и КТ\r
1\r
очная\r
РФ\r
1\r
80\r
80,00\r
ИТОГО\r
64\r
12,8\r
16\r
86,5\r
179,3\r
64\r
8\r
10\r
50\r
132\r
80\r
56\r
447\r
Обратные задачи \r
радиофизики\r
РФ и КТ\r
4,7\r
очная\r
1-31 04 02 Радиофизика \r
2\r
12\r
40\r
3\r
3\r
46\r
46\r
Участие в ГЭК по \r
защите дипломных \r
работ\r
РФ и КТ\r
4,8\r
очная\r
1-31 04 02 Радиофизика \r
56\r
28\r
28\r
Руководство \r
курсовывми работами\r
РФ и КТ\r
2\r
очная\r
6-05-0533-05 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация \r
Радиофизика и \r
цифровые технологии\r
1\r
5,75\r
5,75\r
Руководство \r
дипломными работами\r
РФ и КТ\r
4\r
очная\r
1-31 04 02 Радиофизика \r
1\r
22\r
8,75\r
26\r
4\r
60,75\r
Направленные антенные \r
системы с заданными \r
параметрами\r
РФ и КТ\r
1,2 \r
маг\r
очная\r
7-06-0533-09 \r
Аэрокосмические \r
технологии \r
Профилизация: \r
Проектирование и \r
управление \r
летательными \r
аппаратами\r
1\r
5\r
28\r
1,3\r
1,3\r
30,6\r
30,60\r
Микроволновые \r
системы и технологии\r
РФ и КТ\r
1,2 \r
маг\r
очная\r
7-06-0533-03 \r
Радиофизика и \r
информационные \r
технологии \r
Профилизация: \r
Материалы и \r
технологии \r
микроволновых и \r
микроэлектронных \r
систем\r
1\r
9\r
24\r
2,8\r
2,8\r
29,6\r
29,60\r
ИТОГО\r
40\r
3\r
3\r
46\r
52\r
4,1\r
4,1\r
60,2\r
22\r
14,5\r
26\r
4\r
28\r
201\r
118\r
24\r
512\r
64\r
19,9\r
22\r
112,2\r
14,8\r
115\r
4,3\r
1016\r
64\r
196\r
24\r
8\r
10\r
36\r
4\r
73\r
282,7\r
146\r
66\r
229\r
78\r
80\r
12\r
131\r
2 163\r
Участие в ГЭК по \r
приему \r
государственного \r
экзамена по \r
специальности \r
Радиофизика 56 чел.\r
РФ и КТ\r
4\r
очная\r
1-31 04  02 Радиофизика\r
28\r
28\r
Участие в ГЭК по \r
защите дипломных \r
работ по специальности \r
Радиофизика 56 чел.\r
РФ и КТ\r
4\r
очная\r
1-31 04  02 Радиофизика\r
28\r
28\r
ИТОГО\r
Итого:\r
56\r
56\r
738 24\r
16\r
2860 20 524\r
74\r
68\r
384\r
87\r
354\r
54\r
5212\r
276\r
1276\r
364\r
37\r
38\r
212\r
69\r
208\r
12\r
2242\r
146\r
484\r
700\r
494\r
100\r
280\r
88\r
320\r
11\r
10316\r
Зав. Кафедрой\r
Е.С. Максимович\r
Председатель \r
профбюро\r
Ю.Г. Василевский\r
Декан\r
Д.В. Ушаков\r
ИТОГО:\r
6\r
Шкадаревич \r
Алексей \r
Петрович\r
академик\r
0.25\r
к.т.н.\r
доцент\r
1\r
д.ф.-м.н.\r
Кныш Валерий \r
Петрович\r
доцент\r
Итого по кафедре:\r
Почасовая оплата\r
\r
\r
`,dO=`=== FILE: C:\\Users\\Lenovo\\AppData\\Roaming\\Cursor\\User\\workspaceStorage\\86fb6c45b922ebc75145df9c1489c4b2\\pdfs\\d457c61e-b5e4-4d5a-b5ba-8562ae9942f9\\График работы весна 2026.pdf pages: 11 ===\r
\r
--- page 1 ---\r
\r
ЧН - четная неделя, НН- нечетная неделя, ЛК - лекция\r
Беленькая С.С.\r
Демидчик В.И.\r
Курило В.С.\r
Максимович Е.С.\r
Малый С.В.\r
Мигель А.С.\r
Полещук Н.Н.\r
Черепанова Ю.В.\r
Хейдоров И.Э.\r
Яскевич В.Э.\r
Болотько Т.П.\r
Гринько С.С.\r
Романов А.Ф.\r
Демьянюк Д.В.\r
Чугай К.Н.\r
П\r
о\r
н\r
е\r
д\r
е\r
л\r
ь\r
н\r
и\r
к\r
1-я пара 9:\r
00-10:20\r
2-я пара 10:\r
30-11:50\r
ПЭД (лекция) ауд. 119\r
РФ:1,2,3,4,8\r
КБ: 601,602\r
3-я пара 12:\r
00-13:20\r
СРиТИ\r
ЧН: 1РФ 3пг ауд.56 \r
ПЭД\r
ЧН: 1РФ 1пг ауд.45\r
НН: 1РФ 2пг ауд.45\r
ЦОС\r
ЧН: 4РФ 2пг ауд.42\r
НН: 4РФ 1пг ауд.42\r
СРиТИ\r
ЧН: 1РФ 2пг ауд.704\r
НН: 1РФ 1пг ауд.704\r
4-я пара 13:\r
50-15:10\r
УП АиЦСхемотехника\r
2к 2РФ 1пг ауд.49\r
5-я пара 15:\r
20-16:40\r
ПЭД\r
ЧН: 1РФ 3пг ауд.45\r
НН: 4РФ 3пг ауд.45\r
ЦОС\r
НН: 601КБ 3пг ауд.42\r
6-я пара 17:\r
00-18:20\r
7-я пара 18:\r
30-19:50\r
Кураторский час ауд.56\r
1Ф\r
8-я пара 20:\r
00-21:20\r
В\r
т\r
о\r
р\r
н\r
и\r
к\r
1-я пара 9:\r
00-10:20\r
ПЭД\r
ЧН: 602КБ 1пг ауд.45\r
НН: 602КБ 2пг ауд.45\r
 \r
СРиТИ (лекция) ауд. 115\r
РФ: 1,2,3,4,8\r
2-я пара 10:\r
30-11:50\r
3-я пара 12:\r
00-13:20\r
ПЭД\r
ЧН: 4РФ 1пг ауд.45\r
НН: 4РФ 2пг ауд.45\r
ОСвСИВ\r
1РФ 3пг ауд.44\r
ТКиВ\r
1РФ 3пг ауд.46\r
Направ антенны\r
ЛБ - 05.05-19.05\r
ЛК - 24.02-14.04, 28.04 МСиТ\r
  \r
ЛК - 24.02-24.03\r
ЛБ - 31.03, 05.05-19.05\r
ЛК - 07.04-14.04, 28.04  МСиТ\r
  \r
ЛК - 24.02-24.03 \r
ЛБ - 31.03-14.04, 28.04\r
  \r
ЛБ - 07.04-14.04, 28.04 \r
ЦОС\r
ЧН: 1РФ 2пг ауд.42\r
НН: 1РФ 1пг ауд.42\r
СРиТИ\r
НН: 4РФ 3пг ауд.49\r
4-я пара 13:\r
50-15:10\r
5-я пара 15:\r
20-16:40\r
ПЭД\r
ЧН: 602КБ 3пг ауд. 45\r
НН: 3РФ 3пг ауд.45\r
УП АиЦСхемотехника\r
2к 1РФ 2пг ауд.49\r
6-я пара 17:\r
00-18:20\r
7-я пара 18:\r
30-19:50\r
8-я пара 20:\r
00-21:20\r
С\r
р\r
е\r
д\r
а\r
1-я пара 9:\r
00-10:20\r
ПЭД\r
ЧН: 3РФ 1пг ауд.45\r
НН: 3РФ 2пг ауд.45\r
ТКиВ\r
НН: 1РФ 3пг ауд.46\r
ЦОС\r
ЧН: 2РФ 2пг ауд.42\r
НН: 2РФ 1пг ауд.42\r
СРиТИ\r
НН: 3РФ 3пг ауд.49\r
СРиТИ\r
ЧН: 3РФ 2пг ауд.56\r
НН: 3РФ 1пг ауд.56\r
2-я пара 10:\r
30-11:50\r
3-я пара 12:\r
00-13:20\r
ПЭД\r
ЧН: 8РФ 1пг ауд.45\r
НН: 8РФ 2пг ауд.45\r
ТКиВ (лекция) ауд.24\r
1РФ\r
СРиТИ\r
НН: 8РФ 3пг ауд.49\r
4-я пара 13:\r
50-15:10\r
5-я пара 15:\r
20-16:40\r
УП АиЦСхемотехника\r
2к 2РФ 2пг ауд.49\r
6-я пара 17:\r
00-18:20\r
7-я пара 18:\r
30-19:50\r
8-я пара 20:\r
00-21:20\r
Ч\r
е\r
т\r
в\r
е\r
р\r
г\r
1-я пара 9:\r
00-10:20\r
ПЭД\r
ЧН: 601КБ 1пг ауд.45\r
НН: 601КБ 2пг ауд.45\r
с 14.02 по 21.03\r
СРиТИ (лекция) ауд. 117\r
РФ: 1,2,3,4,8\r
2-я пара 10:\r
30-11:50\r
3-я пара 12:\r
00-13:20\r
СРиТИ\r
ЧН: 2РФ 2пг ауд.56\r
НН: 2РФ 1пг ауд.56\r
ПЭД\r
ЧН: 2РФ 1пг ауд.45\r
НН: 2РФ 2пг ауд.45\r
КМЭДПиС(лекции) \r
ауд. 25\r
1РФ\r
ЦОС\r
ЧН: 3РФ 2пг ауд.42\r
НН: 3РФ 1пг ауд.42\r
4-я пара 13:\r
50-15:10\r
ОСвСИВ(лекция) ауд.41\r
5-я пара 15:\r
20-16:40\r
ПЭД\r
ЧН: :601КБ 3пг ауд.45\r
НН: 8РФ 3пг ауд.45\r
ЦОС\r
ЧН: 3РФ 3пг ауд.42\r
НН: 1рф 3пг ауд.42\r
УП АиЦСхемотехника\r
2к 1РФ 1пг ауд.49\r
6-я пара 17:\r
00-18:20\r
7-я пара 18:\r
30-19:50\r
8-я пара 20:\r
00-21:20\r
П\r
я\r
т\r
н\r
и\r
ц\r
а\r
1-я пара 9:\r
00-10:20\r
2-я пара 10:\r
30-11:50\r
3-я пара 12:\r
00-13:20\r
МСиТ\r
ауд.41\r
ЛБ - 27.03-24.04, 08.05 \r
ЛБ - 27.03-24.04, 08.05 \r
КМЭПиС\r
ЧН: 1РФ 1пг ауд. 49\r
НН: 1РФ 2пг ауд.49\r
4-я пара 13:\r
50-15:10\r
5-я пара 15:\r
20-16:40\r
ТКиВ\r
ЧН: 1РФ 2пг ауд. 46\r
НН: 1РФ 1пг ауд. 46\r
КМЭПиС\r
НН: 1РФ 3пг ауд.49\r
6-я пара 17:\r
00-18:20\r
7-я пара 18:\r
30-19:50\r
ЦОС(лекция) ауд.117\r
РФ:1,2,3,4,8\r
8-я пара 20:\r
00-21:20\r
ЦОС(лекция) ауд.117\r
601 КБ\r
С\r
у\r
б\r
б\r
о\r
т\r
а\r
1-я пара 9:\r
00-10:20\r
СРиТИ\r
ЧН: 4РФ 2пг ауд.56\r
НН: 4РФ 1пг ауд.56\r
ЦОС\r
4РФ 3пг ауд. 49\r
2-я пара 10:\r
30-11:50\r
РВПиС(лекция) ауд.41\r
1РФ\r
3-я пара 12:\r
00-13:20\r
4-я пара 13:\r
50-15:10\r
РВПиС\r
ЧН: 1РФ 2пг ауд.41\r
НН: 1РФ 1пг ауд.41\r
5-я пара 15:\r
20-16:40\r
СРиТИ\r
ЧН: 8РФ 2пг ауд.56\r
НН: 8РФ 1пг ауд.56\r
ЦОС\r
ЧН: 601КБ 2пг ауд.42\r
НН: 601КБ 1пг ауд.42\r
6-я пара 17:\r
00-18:20\r
7-я пара 18:\r
30-19:50\r
8-я пара 20:\r
00-21:20\r
\r
\r
--- page 2 ---\r
\r
Расписание занятий учебной лаборатории № 41 кафедры радиофизики и цифровых медиа технологий\r
Расписание занятий учебной лаборатории № 42 кафедры радиофизики и цифровых медиа технологий\r
Понедельник\r
Вторник\r
Среда\r
Четверг\r
Пятница\r
Суббота\r
Понедельник\r
Вторник\r
Среда\r
Четверг\r
Пятница\r
Суббота\r
1-я пара 9:00-\r
10:25\r
22.04 сдача отчетов по \r
практике 4к РФ\r
23.04 сдача отчетов по \r
практике 4к РФ\r
1-я пара 9:00-\r
10:25\r
Полещук Н.Н.\r
ЦОС\r
ЧН: 2РФ 2пг\r
НН: 2РФ 1пг\r
Демьянюк Д.В.\r
ЦОС\r
4РФ 3пг\r
2-я пара 10:35-\r
12:00\r
Хейдоров И.Э.\r
РВПиС(лекция)\r
1РФ\r
2-я пара 10:35-\r
12:00\r
3-я пара 12:10-\r
13:35\r
Максимович Е.С.\r
Направ антенны\r
12.00: ЛБ - 05.05-19.05\r
ЛК - 24.02-14.04, 28.04 МСиТ\r
  \r
ЛК - 24.02-24.03\r
13.50: ЛБ - 31.03, 05.05-19.05\r
ЛК - 07.04-14.04, 28.04  МСиТ\r
  \r
15.20: ЛК - 24.02-24.03 \r
ЛБ - 31.03-14.04, 28.04\r
  \r
17.00: ЛБ - 07.04-14.04, 28.04 \r
08.04 аттестация \r
магистрантов\r
Максимович Е.С.\r
МСиТ\r
ауд.41\r
ЛБ - 27.03-24.04, 08.05 \r
ЛБ - 27.03-24.04, 08.05 \r
3-я пара 12:10-\r
13:35\r
Полещук Н.Н.\r
ЦОС\r
ЧН: 4РФ 2пг\r
НН: 4РФ 1пг\r
Полещук Н.Н.\r
ЦОС\r
ЧН: 1РФ 2пг\r
НН: 1РФ 1пг\r
Полещук Н.Н.\r
ЦОС\r
ЧН: 3РФ 2пг\r
НН: 3РФ 1пг\r
4-я пара 14:00-\r
15:25\r
Курило В.С.\r
ОСвСИВ(лекция)\r
1РФ\r
Хейдоров И.Э.\r
РВПиС\r
ЧН: 1РФ 2пг\r
НН: 1РФ 1пг\r
4-я пара 14:00-\r
15:25\r
5-я пара 15:35-\r
17:00\r
5-я пара 15:35-\r
17:00\r
Болотько Т.П.\r
ЦОС\r
НН: 601КБ 3пг\r
Болотько Т.П.\r
ЦОС\r
ЧН: 3РФ 3пг\r
НН: 1рф 3пг\r
Болотько Т.П.\r
ЦОС\r
ЧН: 601КБ 2пг\r
НН: 601КБ 1пг\r
6-я пара 17:20-\r
18:45\r
6-я пара 17:20-\r
18:45\r
7-я пара 18:55-\r
20:20\r
7-я пара 18:55-\r
20:20\r
8-я пара 20:30-\r
21:55\r
8-я пара 20:30-\r
21:55\r
Расписание занятий учебной лаборатории № 49 кафедры радиофизики и цифровых медиа технологий\r
Расписание занятий учебной лаборатории № 56 кафедры радиофизики и цифровых медиа технологий\r
Понедельник\r
Вторник\r
Среда\r
Четверг\r
Пятница\r
Суббота\r
Понедельник\r
Вторник\r
Среда\r
Четверг\r
Пятница\r
Суббота\r
1-я пара 9:00-\r
10:25\r
Черепанова Ю.В.\r
СРиТИ\r
НН: 3РФ 3пг\r
1-я пара 9:00-\r
10:25\r
Гринько С.С.\r
СРиТИ\r
ЧН: 3РФ 2пг\r
НН: 3РФ 1пг\r
Мигель А.С.\r
СРиТИ\r
ЧН: 4РФ 2пг \r
НН: 4РФ 1пг \r
2-я пара 10:35-\r
12:00\r
2-я пара 10:35-\r
12:00\r
3-я пара 12:10-\r
13:35\r
Гринько С.С.\r
СРиТИ\r
ЧН: 1РФ 2пг\r
НН: 1РФ 1пг\r
Черепанова Ю.В.\r
СРиТИ\r
НН: 4РФ 3пг\r
Черепанова Ю.В.\r
СРиТИ\r
НН: 8РФ 3пг\r
Полещук Н.Н.\r
КМЭПиС\r
ЧН: 1РФ 1пг \r
НН: 1РФ 2пг\r
3-я пара 12:10-\r
13:35\r
ЧН: Беленькая СС\r
СРиТИ\r
1РФ 3пг\r
Беленькая С.С.\r
СРиТИ\r
ЧН: 2РФ 2пг\r
НН: 2РФ 1пг \r
4-я пара 14:00-\r
15:25\r
4-я пара 14:00-\r
15:25\r
5-я пара 15:35-\r
17:00\r
Полещук Н.Н.\r
КМЭПиС\r
НН: 1РФ 3пг\r
5-я пара 15:35-\r
17:00\r
Мигель А.С.\r
СРиТИ\r
ЧН: 8РФ 2пг ауд.56\r
НН: 8РФ 1пг ауд.56\r
6-я пара 17:20-\r
18:45\r
6-я пара 17:20-\r
18:45\r
7-я пара 18:55-\r
20:20\r
7-я пара 18:55-\r
20:20\r
Беленькая С.С.\r
Кураторский час\r
3к 1РФ\r
8-я пара 20:30-\r
21:55\r
8-я пара 20:30-\r
21:55\r
Расписание занятий учебной лаборатории № 45 кафедры радиофизики и цифровых медиа технологий\r
Понедельник\r
Вторник\r
Среда\r
Четверг\r
Пятница\r
Суббота\r
1-я пара 9:00-\r
10:25\r
Демидчик В.И.\r
ПЭД\r
ЧН: 602КБ 1пг\r
НН: 602КБ 2пг\r
Демидчик В.И.\r
ПЭД\r
ЧН: 3РФ 1пг\r
НН: 3РФ 2пг\r
Демидчик В.И.\r
ПЭД\r
ЧН: 601КБ 1пг\r
НН: 601КБ 2пг\r
2-я пара 10:35-\r
12:00\r
3-я пара 12:10-\r
13:35\r
Демидчик В.И.\r
ПЭД\r
ЧН: 1РФ 1пг\r
НН: 1РФ 2пг\r
Демидчик В.И.\r
ПЭД\r
ЧН: 4РФ 1пг\r
НН: 4РФ 2пг\r
Демидчик В.И.\r
ПЭД\r
ЧН: 8РФ 1пг\r
НН: 8РФ 2пг\r
Демидчик В.И.\r
ПЭД\r
ЧН: 2РФ 1пг\r
НН: 2РФ 2пг\r
4-я пара 14:00-\r
15:25\r
5-я пара 15:35-\r
17:00\r
Беленькая С.С.\r
ПЭД\r
ЧН: 1РФ 3пг\r
НН: 4РФ 3пг\r
Беленькая С.С.\r
ПЭД\r
ЧН: 602КБ 3пг\r
НН: 3РФ 3пг\r
Беленькая С.С.\r
ПЭД\r
ЧН: 601КБ 3пг\r
НН: 8РФ 3пг\r
6-я пара 17:20-\r
18:45\r
7-я пара 18:55-\r
20:20\r
8-я пара 20:30-\r
21:55\r
\r
\r
--- page 3 ---\r
\r
РФ 1\r
  \r
  \r
  \r
  \r
 21 чел\r
№\r
3 курс РФ ФИО\r
№ пг 2 ШТ № пг 3 шт\r
ДИСЦИПЛИНА\r
1МОиИО\r
Владыко Антон Евгеньевич\r
1\r
1\r
кол-во подгрупп\r
2 Казакевич Николай Витальевич\r
2\r
2\r
СРиТИ 3ПГ\r
 ПЭД 3 ПГ\r
 ЦОС 3 ПГ\r
 ИАД 1 ПГ + МОиИО 2 ПГ = 3 пг\r
 ТКиВ 3пг\r
  \r
 С\\к\r
 КМЭПиС 3 ПГ\r
 ОПТОЭ 3 пг\r
 ОСвСИВ 3 пг\r
  \r
 РВПиС 2пг в субботу\r
  \r
  \r
 Ориентировка деления на ИАД и МОиИО на основе их делаем список группы не п\r
3 Климошевский Тимофей Дмитр-ч\r
3\r
3\r
4 МозгОв Сергей Владимирович\r
4\r
4\r
5 Мороз Авенир Владимирович\r
5\r
5\r
6 Радевич Юлиана Геннадьевна\r
6\r
6\r
7 Цыбульская Анастасия Сергеевна\r
7\r
7\r
8МОиИО\r
Гончаров Александр Владимир-ч\r
8\r
1\r
9 Ляхович Виктория Андреевна\r
9\r
2\r
10 Пирог Елизавета Дмитриевна\r
10\r
3\r
11 РЕгес Кирилл Вячеславович\r
1\r
4\r
12 Шабловский Артём Алексеевич\r
2\r
5\r
13 Юркевич Егор Сергеевич\r
3\r
6\r
14 Пуровская Варвара Владимировна\r
4\r
7\r
15ИАД\r
Богданович Антон Александрович\r
5\r
1\r
16 Гарбуз Анна Анатольевна\r
6\r
2\r
17 КугАйдо Артём Александрович\r
7\r
3\r
18 Лазарук Сергей Евгеньевич\r
8\r
4\r
19 Садовский Алексей Андреевич\r
9\r
5\r
20 Суходолец Ксения Андреевна\r
10\r
6\r
21 Шершнёв Артём Денисович\r
11\r
7\r
РФ \r
 2 \r
  \r
  \r
  \r
 17 чел\r
1МОииО\r
Барсуков Глеб Дмитриевич\r
1\r
1\r
СРиТИ 2ПГ\r
 ПЭД 2 ПГ\r
 ЦОС 2 ПГ\r
  \r
 ИАД 1 ПГ МОиИО 1 ПГ = 2 пг в субботу\r
 СНОРиР 1 пг+ КПП 1 пг= 2 пг\r
  \r
 С\\к\r
 Оптоэл 3 пг\r
 Оптоэл датч 3 пг\r
 Лаз диаг 2 пг \r
  \r
 Ориентировка деления на ИАД и МОиИО на основе их делаем список группы не п\r
2 КукО Ульяна Алексеевна\r
2\r
2\r
3 Придыбайло Артем Дмитриевич\r
3\r
3\r
4 Сосновский Данила Евгеньевич\r
4\r
4\r
5 Фёдоров Артём Александрович\r
5\r
5\r
6 Чембрович Владислав Сергеевич\r
6\r
1\r
7 ШИша Никита Александрович\r
7\r
2\r
8 ИАД\r
Бондарева Анастасия Константиновна\r
1\r
3\r
9 Быкович Павел Александрович\r
2\r
4\r
10 Гаель Мария Дмитриевна\r
3\r
5\r
11 Громыко Ирина Юрьевна\r
4\r
1\r
12 Зеков Павел Евгеньевич\r
5\r
2\r
13 КОпко Юрий Геннадьевич\r
6\r
3\r
14 Отян Назар Станиславович\r
7\r
4\r
15 Серапин Тимофей Сергеевич\r
8\r
5\r
РФ\r
  3\r
  \r
  \r
  \r
  \r
  17 чел\r
1 ИАД\r
Бегляк Владислав Юрьевич\r
1\r
1\r
СРиТИ 3ПГ\r
 ПЭД 3 ПГ\r
 ЦОС 3 ПГ\r
 ИАД 1 ПГ МОиИО 1 ПГ = 2 пг в субботу\r
  \r
 С/к \r
  \r
 МЭТМиНЭ 3 пг\r
 Осн Сен 3 пг\r
 ЧМПМиНЭ 3 пг\r
  \r
 УИППвМЭ 2 пг + МиНЭ 1 пг = 3 пг\r
 Ориентировка деления УИППвМЭ + МиНЭ на основе их делаем список группы не\r
2МОиИО\r
Бурик Егор Владимирович\r
1\r
2\r
3 ИАД\r
Гуляй Арсений Валерьевич\r
2\r
3\r
4 ИАД\r
Дорощенко Алексей Владимир-ч\r
3\r
4\r
5 ИАД\r
Жданович Роман Сергеевич\r
4\r
5\r
6 ИАД\r
Жук Дарья Дмитриевна\r
5\r
6\r
7МОиИО\r
Калиновский Артём Андреевич\r
2\r
1\r
8ИАД\r
Калиновский Никита Валерьевич\r
3\r
2\r
9МОиИО\r
Малевич Николай Дмитриевич\r
4\r
3\r
10МОиИО\r
Мандрик Александр Сергеевич\r
5\r
4\r
11МОиИО\r
Отт Никита Андресович\r
6\r
5\r
12 ИАД\r
Потоцкий Алексей Сергеевич\r
6\r
6\r
13 ИАД\r
Свиридчук Валерия Витальевна\r
7\r
1\r
14МОиИО\r
Стручистый Евгений Егорович\r
7\r
2\r
15 ИАД\r
Турабоев Арслан Рамзизович\r
8\r
3\r
16 ИАД\r
Чуприс Илья Кириллович\r
9\r
4\r
17МОиИО\r
Шевчук Павел Эдуардович\r
8\r
5\r
РФ\r
  4 \r
  \r
  \r
  \r
  \r
 21 чел\r
1 ИАД\r
Алексеев Михаил Романович (в)\r
1\r
СРиТИ 3ПГ\r
 ПЭД 3 ПГ\r
 ЦОС 3 ПГ\r
 ИАД 2 ПГ + МОиИО 1 ПГ = 3 пг\r
  \r
  \r
  \r
 С\\к\r
 ПЭ 3 пг\r
 ЭДиУС 3 пг\r
 Энергообеспеч 3 пг позже\r
 Аддитивные ТдляПЭУ 3 пг позже\r
  \r
 Ориентировка деления на ИАД и МОиИО на основе их делаем список группы не п\r
2 Байрамов Гасан Асимович\r
2\r
3 Виденеев Кирилл Андреевич\r
3\r
4 Возчиков Николай Андреевич\r
4\r
5 Гапоник Виктория Николаевна\r
5\r
6 Иванов Андрей Сергеевич (в)\r
6\r
7 Цыганкова Алиса Юрьевна\r
7\r
8ИАД\r
Барабанов Дмитрий Александрович (в)\r
1\r
9 Воронцов Ярослав Андреевич\r
2\r
10 Гуд Степан Иванович (в)\r
3\r
11 Кедич Мирон Дмитриевич (в)\r
4\r
12 Скобликов Евгений Петрович\r
5\r
13 Степура Максим Алексеевич\r
6\r
14 Шелегович Илья Сергеевич\r
7\r
15МОиИО\r
Бачище Даниил Юрьевич\r
1\r
16 Кизик Богдан Валерьевич (в)\r
2\r
17 Кильчицкий Александр Юрьевич\r
3\r
18 Кузич Павел Александрович\r
4\r
19 Сугаков Данила Владимирович (в)\r
5\r
20 Труханович Владимир Андреевич\r
6\r
\r
\r
--- page 4 ---\r
\r
21 Шмат Роман Николаевич\r
7\r
РФ \r
 8\r
  \r
  \r
  \r
  \r
  \r
  19\r
 чел\r
1МОиИО\r
Блинков Кирилл Алексеевич\r
1\r
СРиТИ 3ПГ\r
 ПЭД 3 ПГ\r
 ЦОС 3 ПГ\r
 ИАД 2 ПГ + МОиИО 1 ПГ = 3 пг\r
  \r
  \r
 С\\к \r
 Основы ТУиН 3 пг\r
 БиУМКА 3 пг\r
 ЦОСи ВА 3 пг \r
 ПСКЗиВО 2 пг + СПиОМПиОвП 1 пг = 3 пг\r
  \r
  \r
 Ориентировка деления \r
 ИАД+ МОиИО и ПСКАЗиВО+ СПиОМПиОвП на основе их делаем список группы\r
  в идеале деление должно совпасть\r
  ИАД с ПСКАЗиВО, по 2 пг\r
 а МОиИО с СПиОМПиОвП по 1 пг\r
 тогда не надо будет на вечер выносить лабы\r
2ИАД1пг\r
Воянец Дарья Эдуардовна\r
2\r
3МОиИО\r
Дощанов Никита Вадимович\r
3\r
4ИАД1пг\r
Духнов Павел Дмитриевич\r
4\r
5ИАД1пг\r
Калюта Алеся Васильевна\r
5\r
6МОиИО\r
Костюк Дмитрий Александрович\r
6\r
7МОиИО\r
Мультан Александр Андреевич\r
1\r
8ИАД2пг\r
Полуянов Архип Васильевич\r
2\r
9ИАД2пг\r
Стома Владислав Александрович\r
3\r
10ИАД2пг\r
Ткачук Алеся Олеговна\r
4\r
11ИАД2пг\r
Трифонов Матвей Вадимович\r
5\r
12ИАД2пг\r
Улезко Данила Алексеевич\r
6\r
13ИАД1пг\r
Ухова Виктория Алексеевна\r
1\r
14ИАД2пг\r
Худоченко Алексей Геннадьевич\r
2\r
15ИАД1пг\r
Цалко Никита Владимирович\r
3\r
16ИАД1пг\r
Шакуров Александр Ильясович\r
4\r
17ИАД2пг\r
Шацкий Матвей Павлович\r
5\r
18ИАД1пг\r
Янчукевич Глеб Владиславович\r
6\r
КБ 601\r
  \r
  \r
  \r
 24 чел\r
3 курс КБ  ФИО\r
№ пг 3 шт № пг 4 шт\r
ДИСЦИПЛИНА кол-во подгрупп\r
1 Баборико Егор Олегович\r
1\r
1\r
2 Будько Александр Игоревич\r
2\r
2 БИС 3 ПГ\r
 ЦОС 3 ПГ\r
 ИАД 3 ПГ\r
 МОиИО 3 ПГ\r
 ПЭД 3 ПГ\r
  \r
  \r
 С\\к\r
 ФОХиОИ 4 пг\r
 ТиБИВ 4 пг\r
3 Грушко Владислав Андреевич\r
3\r
3\r
4 Губин Роман Сергеевич\r
4\r
4\r
5 Гуща Мирослав Николаевич\r
5\r
5\r
6 Калач Николай Владимирович\r
6\r
6\r
7 Круталевич Артём Александрович\r
7\r
1\r
8 Курочкин Антон Сергеевич\r
8\r
2\r
9 Лось Мария Вячеславовна\r
1\r
3\r
10 Малышиц Андрей Андреевич\r
2\r
4\r
11 Матыркин Владислав Александрович\r
3\r
5\r
12 Остапчук Никита Евгеньевич\r
4\r
6\r
13 Павлова Диана Максимовна\r
5\r
1\r
14 Понкратов Алексей Максимович\r
6\r
2\r
15 Рундыгин Артём Денисович\r
7\r
3\r
16 Сейтжанов Джелалетдин Азадович\r
8\r
4\r
17 Селедцов Даниил Игоревич\r
1\r
5\r
18 Смольский Илья Витальевич\r
2\r
6\r
19 Стрежик Антон Александрович\r
3\r
1\r
20 Тимшина Анастасия Артёмовна\r
4\r
2\r
21 Трушко Денис Игоревич\r
5\r
3\r
22 Шапель Никита Александрович\r
6\r
4\r
23 Шкулепа Марк Александрович\r
7\r
5\r
8\r
6\r
7\r
КБ 602\r
  \r
  \r
  \r
 22 чел\r
1 Астраух Виктор Ильич\r
1\r
1 БИС 3 ПГ\r
 ЦОС 3 ПГ\r
 ИАД 3 ПГ\r
 МОиИО 3 ПГ\r
 ПЭД 3 ПГ\r
 ЭДиУС 3 пг \r
  \r
  \r
 С\\к\r
 ФОХиОИ 4 пг\r
 ТиБПСиВ 4 пг\r
2 Бородун Юрий Андреевич\r
2\r
2\r
3 Гец Артур Витальевич\r
3\r
3\r
4 Дировский Матвей Сергеевич\r
4\r
4\r
5 Дятчик Владимир Александрович\r
5\r
5\r
6 Дятчик Владислав Александрович\r
6\r
1\r
7 Жамойтин Игнат Александрович\r
7\r
2\r
8 Ивлева Людмила Павловна\r
1\r
3\r
9 Капустин Александр Сергеевич\r
2\r
4\r
10 Криштоп Владислав Владимирович\r
3\r
5\r
11 Кузьмич Александр Константинович\r
4\r
6\r
12 Куприянов Тимофей Александрович\r
5\r
1\r
13 Мазаник Евгений Дмитриевич\r
6\r
2\r
14 Селецкий Глеб Андреевич\r
7\r
3\r
15 Серба Арсений Русланович\r
8\r
4\r
16 Толпинец Александр Вадимович\r
1\r
5\r
17 Туз Андрей Николаевич\r
2\r
6\r
18 Хваль Максим Сергеевич\r
3\r
1\r
19 Черник Алексей Сергеевич\r
4\r
2\r
20 Чернов Дмитрий Сергеевич\r
5\r
3\r
21 Шевеленко Василий Сергеевич\r
6\r
4\r
22 Шклянков Михаил Михайлович\r
7\r
5\r
23 Гуща Максим Геннадьевич восстановл\r
24 Лысенко Иван Михайлович отчисл\r
ПИ\r
  5\r
  \r
  \r
  \r
  \r
3 курс ПИ  ФИО\r
№ пг 3 шт № пг 4 шт\r
ДИСЦИПЛИНА кол-во подгрупп\r
1\r
Воробей Евгений Валерьевич\r
1 БИС 4 пг\r
 МОиИО 4 пг \r
 ЦОС-ВА 4 пг\r
  \r
  \r
2 Гардееня Артём Сергеевич\r
2\r
3 Голик Владислав Алексеевич\r
3\r
4 Голуб Александра Владимировна\r
4\r
\r
\r
--- page 5 ---\r
\r
 30 чел\r
5 Гринкевич Владислав Андреевич\r
5\r
  \r
  \r
  \r
 С\\К\r
 ОДвКиИС 4 пг\r
 ТОВ иК 4 пг\r
 СВР 2 пг + СДР 2пг = 4 пг \r
 СПиОМПиОвП 2 пг + ПСКЗиВО 2 п= 4 пг\r
  \r
 Ориентировка деления\r
  на СВР+ СДР \r
  и СПиОМПиОвП + ПСКЗиВО \r
 на основе их делаем список группы не по алфавиту\r
 в идеале деление должно совпасть\r
  \r
 СВР с СПиОМПиОвП  и\r
 СДР с ПСКЗиВО \r
 Или\r
 СВР с ПСКЗиВО и\r
 СДР с СПиОМПиОвП\r
  \r
 Тогда не надо будет выносить на вечер лабы\r
6 Желябин Николай Дмитриевич\r
6\r
7 Игнатенко Анастасия Ивановна\r
7\r
8 Карней Александр Игоревич\r
1\r
9 Кузьменков Леонид Павлович\r
2\r
10 Лавшук Иван Сергеевич\r
3\r
11 Лаптинский Алексей Юрьевич\r
4\r
12 Маковский Егор Вадимович\r
5\r
13 Панасенко Александра Викторовна\r
6\r
14 Постников Демьян Андреевич\r
7\r
15 Рабцевич Карина Викторовна\r
1\r
16 Роик Варвара Александровна\r
2\r
17 Романкевич Алексей Юрьевич\r
3\r
18 Романчик Егор Сергеевич\r
4\r
19 Седич Владислав Юрьевич\r
5\r
20 Синявский Артём Евгеньевич\r
6\r
21 Сиренко Иван Владиславович\r
7\r
22 Скробатун Артём Игоревич\r
8\r
23 Слесаренко Антон Владимирович\r
1\r
24 Смолич Федор Андреевич\r
2\r
25 Троянов Александр Юрьевич\r
3\r
26 Ушаков Александр Дмитриевич\r
4\r
27 Цеханович Дарья Анатольевна\r
5\r
28 Цуканов Александр Сергеевич\r
6\r
29 Чирич Вероника Андреевна\r
7\r
30 Щегляк Станислав Петрович\r
8\r
ПИ\r
  7\r
  \r
  \r
  \r
  \r
 23 чел\r
1 Бутько Арсений Сергеевич\r
1\r
БИС 3 пг\r
 ИАД 3 пг\r
 МОиИО 3 пг \r
  \r
 С\\К\r
 БИОинф 3 пг\r
 ПТАБД 3 пг\r
 ДСМ 3 пг\r
 ЦОС-ВА 3 пг\r
  \r
 Пожелание группы, оставить такое деление\r
2 Григорьев Максим Дмитриевич\r
2\r
3 Гусева Алёна Юрьевна\r
3\r
4 Кисель Валерия Игоревна\r
4\r
5 Клименко Пётр Валерьевич\r
5\r
6 Колешко Владислав Дмитриевич\r
6\r
7 Коцур Дмитрий Денисович\r
7\r
8 Мельник Максим Юрьевич\r
8\r
9 Морозов Андрей Алексеевич\r
1\r
10 Околот Данила Андреевич\r
2\r
11 Панасенко Александра Викторовна\r
3\r
12 Поляков Иван Денисович\r
4\r
13 Попко Анастасия Вячеславовна\r
5\r
14 Просвиркин Олег Алексеевич\r
6\r
15 Размыслович Арианна Александровна\r
7\r
16 Савич Станислав Вячеславович\r
8\r
17 Савко Артём Витальевич\r
1\r
18 Судиловский Левон Левонович\r
2\r
19 Сушко Софья Михайловна\r
3\r
20 Тихончук Владислав Алексеевич\r
4\r
21 Тишинков Алексей Андреевич\r
5\r
22 Уткевич Максим Юрьевич\r
6\r
23 Харевич Николай Александрович\r
7\r
24 Харитонюк Александр Александрович\r
8\r
\r
\r
--- page 6 ---\r
\r
№\r
ФИО\r
курс\r
группа\r
специальность\r
Даты обучения на ВФ БГУ\r
1\r
Владыко Антон Евгеньевич \r
3\r
1\r
рф\r
09.03.26 - 14.03.26\r
2\r
Казакевич Николай Витальевич\r
3\r
1\r
рф\r
23.03.26 - 28.03.26\r
3\r
Кугайдо Артем Александрович\r
3\r
1\r
рф\r
27.04.26 - 30.04.26\r
4\r
Лазарук Сергей Евгеньевич\r
3\r
1\r
рф\r
ЭВП 05.05\r
5\r
Мозгов Сергей Владимирович\r
3\r
1\r
рф\r
6\r
Садовский Алексей Андреевич\r
3\r
1\r
рф\r
7\r
Чуприс Илья Кириллович\r
3\r
3\r
рф\r
8\r
Алексеев Михаил Романович\r
3\r
4\r
рф\r
9\r
Барабанов Дмитрий Александрович\r
3\r
4\r
рф\r
10\r
Гуд Степан Иванович\r
3\r
4\r
рф\r
11\r
Иванов Андрей Сергеевич\r
3\r
4\r
рф\r
12\r
Кедич Мирон Дмитриевич\r
3\r
4\r
рф\r
13\r
Кизик Богдан Валерьевич\r
3\r
4\r
рф\r
14\r
Сугаков Данила Владимирович\r
3\r
4\r
рф\r
15\r
Будько Александр Игоревич\r
3\r
601\r
кб\r
16\r
Грушко Владислав Андреевич\r
3\r
601\r
кб\r
17\r
Гуща Мирослав Николаевич\r
3\r
601\r
кб\r
18\r
Курочкин Антон Сергеевич\r
3\r
601\r
кб\r
19\r
Шкулепа Марк Александрович\r
3\r
601\r
кб\r
20\r
Жамойтин Игнат Александрович\r
3\r
602\r
кб\r
21\r
Криштоп Владислав Владимирович\r
3\r
602\r
кб\r
22\r
Куприянов Тимофей Александрович\r
3\r
602\r
кб\r
23\r
Голик Владислав Алексеевич\r
3\r
5\r
пи\r
24\r
Лавшук Иван Сергеевич\r
3\r
5\r
пи\r
25\r
Лаптинский Алексей Юрьевич\r
3\r
5\r
пи\r
26\r
Маковский Егор Вадимович\r
3\r
5\r
пи\r
27\r
Постников Демьян Андреевич\r
3\r
5\r
пи\r
28\r
Романкевич Алексей Юрьевич\r
3\r
5\r
пи\r
29\r
Седич Владислав Юрьевич\r
3\r
5\r
пи\r
30\r
Синявский Артём Евгеньевич\r
3\r
5\r
пи\r
31\r
Троянов Александр Юрьевич\r
3\r
5\r
пи\r
32\r
Ушаков Александр Дмитриевич\r
3\r
5\r
пи\r
33\r
Морозов Андрей Алексеевич\r
3\r
7\r
пи\r
34\r
Поляков Иван Денисович\r
3\r
7\r
пи\r
35\r
Тишинков Алексей Андреевич\r
3\r
7\r
пи\r
\r
\r
--- page 7 ---\r
\r
1 РФ 21чел.\r
1\r
Владыко Антон Евгеньевич\r
6,59\r
2\r
Казакевич Николай Витальевич\r
6,72\r
3\r
Климошевский Тимофей Дмитр-ч\r
7,1\r
4\r
МозгОв Сергей Владимирович\r
7,31\r
5\r
Мороз Авенир Владимирович\r
6,93\r
6\r
Радевич Юлиана Геннадьевна\r
7,76\r
7\r
Цыбульская Анастасия Сергеевна\r
8,97\r
1\r
Гончаров Александр Владимир-ч\r
6,39\r
2\r
Ляхович Виктория Андреевна\r
8,21\r
3\r
Пирог Елизавета Дмитриевна\r
6,47\r
4\r
РЕгес Кирилл Вячеславович\r
7,55\r
5\r
Шабловский Артём Алексеевич\r
8,24\r
6\r
Юркевич Егор Сергеевич\r
6,59\r
7\r
Пуровская Варвара Владимировна\r
7,03\r
1\r
Богданович Антон Александрович\r
6,39\r
2\r
Гарбуз Анна Анатольевна\r
6,38\r
3\r
КугАйдо Артём Александрович\r
7,38\r
4\r
Лазарук Сергей Евгеньевич\r
7,79\r
5\r
Садовский Алексей Андреевич\r
6,41\r
6\r
Суходолец Ксения Андреевна\r
6,9\r
7\r
Шершнёв Артём Денисович\r
6,76\r
2 РФ 15 чел.\r
1\r
Барсуков Глеб Дмитриевич\r
4,79\r
2\r
КукО Ульяна Алексеевна\r
6,55\r
3\r
Придыбайло Артем Дмитриевич\r
5,21\r
4\r
Сосновский Данила Евгеньевич\r
6,25\r
5\r
Фёдоров Артём Александрович\r
7,83\r
6\r
Чембрович Владислав Сергеевич\r
6\r
7\r
ШИша Никита Александрович\r
5,25\r
1\r
Бондарева Анастасия Константиновна\r
5,67\r
2\r
Быкович Павел Александрович\r
6,66\r
3\r
Гаель Мария Дмитриевна\r
5,14\r
4\r
Громыко Ирина Юрьевна\r
6,11\r
5\r
Зеков Павел Евгеньевич\r
5,5\r
6\r
КОпко Юрий Геннадьевич\r
5,82\r
7\r
Отян Назар Станиславович\r
5,18\r
8\r
Серапин Тимофей Сергеевич\r
6,07\r
3 РФ 17 чел.\r
1\r
Бегляк Владислав Юрьевич\r
6,9\r
2\r
Бурик Егор Владимирович\r
6,3\r
3\r
Гуляй Арсений Валерьевич\r
6,3\r
4\r
Дорощенко Алексей Владимир-ч\r
5,67\r
5\r
Жданович Роман Сергеевич\r
7,58\r
6\r
Жук Дарья Дмитриевна\r
7,57\r
1\r
Калиновский Артём Андреевич\r
6,07\r
2\r
Калиновский Никита Валерьевич\r
6,1\r
3\r
Малевич Николай Дмитриевич\r
6,53\r
4\r
Мандрик Александр Сергеевич\r
6,13\r
5\r
Отт Никита Андресович\r
6,6\r
6\r
Потоцкий Алексей Сергеевич\r
7,33\r
1\r
Свиридчук Валерия Витальевна\r
5,77\r
2\r
Стручистый Евгений Егорович\r
8,53\r
3\r
Турабоев Арслан Рамзизович\r
7,5\r
4\r
Чуприс Илья Кириллович\r
8,12\r
5\r
Шевчук Павел Эдуардович\r
7,83\r
4 РФ 21чел.\r
1\r
Алексеев Михаил Романович (в)\r
8,94\r
2\r
Виденеев Кирилл Андреевич\r
7,67\r
3\r
Возчиков Николай Андреевич\r
7,55\r
4\r
Воронцов Ярослав Андреевич\r
8,37\r
5\r
Иванов Андрей Сергеевич (в)\r
7,97\r
6\r
Кизик Богдан Валерьевич (в)\r
6,97\r
7\r
Степура Максим Алексеевич\r
6,53\r
1\r
Байрамов Гасан Асимович\r
7,03\r
2\r
Гапоник Виктория Николаевна\r
8,07\r
3\r
Кильчицкий Александр Юрьевич\r
7,48\r
4\r
Кузич Павел Александрович\r
7,55\r
5\r
Скобликов Евгений Петрович\r
8,42\r
\r
\r
--- page 8 ---\r
\r
6\r
Цыганкова Алиса Юрьевна\r
8,07\r
7\r
Шелегович Илья Сергеевич\r
8,73\r
1\r
Барабанов Дмитрий Александрович (в)\r
7,73\r
2\r
Бачище Даниил Юрьевич\r
6,03\r
3\r
Гуд Степан Иванович (в)\r
8,1\r
4\r
Кедич Мирон Дмитриевич (в)\r
7,9\r
5\r
Сугаков Данила Владимирович (в)\r
8,17\r
6\r
Труханович Владимир Андреевич\r
9,13\r
7\r
Шмат Роман Николаевич\r
7,5\r
8 РФ 19 чел.\r
1\r
Блинков Кирилл Алексеевич\r
5,67\r
2\r
Воянец Дарья Эдуардовна\r
6,8\r
3\r
Дощанов Никита Вадимович\r
5,13\r
4\r
Духнов Павел Дмитриевич\r
5,73\r
5\r
Калюта Алеся Васильевна\r
5,6\r
6\r
Костюк Дмитрий Александрович\r
5,7\r
1\r
Мультан Александр Андреевич\r
5,07\r
2\r
Полуянов Архип Васильевич\r
6,5\r
3\r
Стома Владислав Александрович\r
5,69\r
4\r
Ткачук Алеся Олеговна\r
6,7\r
5\r
Трифонов Матвей Вадимович\r
6,73\r
6\r
Улезко Данила Алексеевич\r
6,41\r
1\r
Ухова Виктория Алексеевна\r
6,43\r
2\r
Худоченко Алексей Геннадьевич\r
6,17\r
3\r
Цалко Никита Владимирович\r
8,37\r
4\r
Шакуров Александр Ильясович\r
6,97\r
5\r
Шацкий Матвей Павлович\r
5,6\r
6\r
Янчукевич Глеб Владиславович\r
7,3\r
601 КБ 23 чел.\r
1\r
Баборико Егор Олегович\r
6,81\r
2\r
Будько Александр Игоревич\r
7,18\r
3\r
Грушко Владислав Андреевич\r
7,48\r
4\r
Губин Роман Сергеевич\r
6,34\r
5\r
Гуща Мирослав Николаевич\r
7,31\r
6\r
Калач Николай Владимирович\r
6,31\r
7\r
Круталевич Артём Александрович\r
7,06\r
8\r
Курочкин Антон Сергеевич\r
7,33\r
1\r
Лось Мария Вячеславовна\r
7,22\r
2\r
Малышиц Андрей Андреевич\r
5,38\r
3\r
Матыркин Владислав Александрович\r
8,19\r
4\r
Остапчук Никита Евгеньевич\r
7,34\r
5\r
Павлова Диана Максимовна\r
7,94\r
6\r
Понкратов Алексей Максимович\r
7,31\r
7\r
Рундыгин Артём Денисович\r
7,41\r
8\r
Сейтжанов Джелалетдин Азадович\r
6,58\r
1\r
Селедцов Даниил Игоревич\r
7,25\r
2\r
Смольский Илья Витальевич\r
7,09\r
3\r
Стрежик Антон Александрович\r
6,91\r
4\r
Тимшина Анастасия Артёмовна\r
8,06\r
5\r
Трушко Денис Игоревич\r
6,58\r
6\r
Шапель Никита Александрович\r
7,34\r
7\r
Шкулепа Марк Александрович\r
8,33\r
602 КБ 22чел.\r
1\r
Астраух Виктор Ильич\r
6,1\r
2\r
Бородун Юрий Андреевич\r
5,66\r
3\r
Гец Артур Витальевич\r
5,63\r
4\r
Дировский Матвей Сергеевич\r
6,1\r
5\r
Дятчик Владимир Александрович\r
5,87\r
6\r
Дятчик Владислав Александрович\r
6,77\r
7\r
Жамойтин Игнат Александрович\r
7,84\r
8\r
Гуща Максим Геннадьевич (восстановл)\r
6,03\r
1\r
Ивлева Людмила Павловна\r
7,71\r
2\r
Капустин Александр Сергеевич\r
5,73\r
3\r
Криштоп Владислав Владимирович\r
7,53\r
4\r
Куприянов Тимофей Александрович\r
7,23\r
5\r
Мазаник Евгений Дмитриевич\r
7\r
6\r
Селецкий Глеб Андреевич\r
6,94\r
7\r
Серба Арсений Русланович\r
6,47\r
\r
\r
--- page 9 ---\r
\r
1\r
Толпинец Александр Вадимович\r
6,55\r
2\r
Туз Андрей Николаевич\r
5,93\r
3\r
Хваль Максим Сергеевич\r
6\r
4\r
Черник Алексей Сергеевич\r
7,58\r
5\r
Чернов Дмитрий Сергеевич\r
5,52\r
6\r
Шевеленко Василий Сергеевич\r
9,34\r
7\r
Шклянков Михаил Михайлович\r
6,19\r
\r
\r
--- page 10 ---\r
\r
1 РФ 21чел.\r
1\r
Владыко Антон Евгеньевич\r
6,59\r
2\r
Казакевич Николай Витальевич\r
6,72\r
3\r
Климошевский Тимофей Дмитр-ч\r
7,1\r
4\r
МозгОв Сергей Владимирович\r
7,31\r
5\r
Мороз Авенир Владимирович\r
6,93\r
6\r
Радевич Юлиана Геннадьевна\r
7,76\r
7\r
Цыбульская Анастасия Сергеевна\r
8,97\r
1\r
Гончаров Александр Владимир-ч\r
6,39\r
2\r
Ляхович Виктория Андреевна\r
8,21\r
3\r
Пирог Елизавета Дмитриевна\r
6,47\r
4\r
РЕгес Кирилл Вячеславович\r
7,55\r
5\r
Шабловский Артём Алексеевич\r
8,24\r
6\r
Юркевич Егор Сергеевич\r
6,59\r
7\r
Пуровская Варвара Владимировна\r
7,03\r
1\r
Богданович Антон Александрович\r
6,39\r
2\r
Гарбуз Анна Анатольевна\r
6,38\r
3\r
КугАйдо Артём Александрович\r
7,38\r
4\r
Лазарук Сергей Евгеньевич\r
7,79\r
5\r
Садовский Алексей Андреевич\r
6,41\r
6\r
Суходолец Ксения Андреевна\r
6,9\r
7\r
Шершнёв Артём Денисович\r
6,76\r
2 РФ 15 чел.\r
1\r
Барсуков Глеб Дмитриевич\r
4,79\r
2\r
КукО Ульяна Алексеевна\r
6,55\r
3\r
Придыбайло Артем Дмитриевич\r
5,21\r
4\r
Сосновский Данила Евгеньевич\r
6,25\r
5\r
Фёдоров Артём Александрович\r
7,83\r
6\r
Чембрович Владислав Сергеевич\r
6\r
7\r
ШИша Никита Александрович\r
5,25\r
1\r
Бондарева Анастасия Константиновна\r
5,67\r
2\r
Быкович Павел Александрович\r
6,66\r
3\r
Гаель Мария Дмитриевна\r
5,14\r
4\r
Громыко Ирина Юрьевна\r
6,11\r
5\r
Зеков Павел Евгеньевич\r
5,5\r
6\r
КОпко Юрий Геннадьевич\r
5,82\r
7\r
Отян Назар Станиславович\r
5,18\r
8\r
Серапин Тимофей Сергеевич\r
6,07\r
3 РФ 17 чел.\r
1\r
Бегляк Владислав Юрьевич\r
6,9\r
2\r
Бурик Егор Владимирович\r
6,3\r
3\r
Гуляй Арсений Валерьевич\r
6,3\r
4\r
Дорощенко Алексей Владимир-ч\r
5,67\r
5\r
Жданович Роман Сергеевич\r
7,58\r
6\r
Жук Дарья Дмитриевна\r
7,57\r
1\r
Калиновский Артём Андреевич\r
6,07\r
2\r
Калиновский Никита Валерьевич\r
6,1\r
3\r
Малевич Николай Дмитриевич\r
6,53\r
4\r
Мандрик Александр Сергеевич\r
6,13\r
5\r
Отт Никита Андресович\r
6,6\r
6\r
Потоцкий Алексей Сергеевич\r
7,33\r
1\r
Свиридчук Валерия Витальевна\r
5,77\r
2\r
Стручистый Евгений Егорович\r
8,53\r
3\r
Турабоев Арслан Рамзизович\r
7,5\r
4\r
Чуприс Илья Кириллович\r
8,12\r
5\r
Шевчук Павел Эдуардович\r
7,83\r
4 РФ 21чел.\r
1\r
Байрамов Гасан Асимович\r
8,94\r
2\r
Виденеев Кирилл Андреевич\r
7,67\r
3\r
Гапоник Виктория Николаевна\r
7,55\r
4\r
Гуд Степан Иванович (в)\r
8,37\r
5\r
Иванов Андрей Сергеевич (в)\r
7,97\r
6\r
Кедич Мирон Дмитриевич (в)\r
6,97\r
7\r
Цыганкова Алиса Юрьевна\r
6,53\r
1\r
Алексеев Михаил Романович (в)\r
7,03\r
2\r
Барабанов Дмитрий Александрович (в)\r
8,07\r
3\r
Возчиков Николай Андреевич\r
7,48\r
4\r
Кильчицкий Александр Юрьевич\r
7,55\r
\r
\r
--- page 11 ---\r
\r
5\r
Кузич Павел Александрович\r
8,42\r
6\r
Скобликов Евгений Петрович\r
8,07\r
7\r
Шелегович Илья Сергеевич\r
8,73\r
1\r
Бачище Даниил Юрьевич\r
7,73\r
2\r
Воронцов Ярослав Андреевич\r
6,03\r
3\r
Кизик Богдан Валерьевич (в)\r
8,1\r
4\r
Степура Максим Алексеевич\r
7,9\r
5\r
Сугаков Данила Владимирович (в)\r
8,17\r
6\r
Труханович Владимир Андреевич\r
9,13\r
7\r
Шмат Роман Николаевич\r
7,5\r
8 РФ 19 чел.\r
1\r
Блинков Кирилл Алексеевич\r
5,67\r
2\r
Воянец Дарья Эдуардовна\r
6,8\r
3\r
Дощанов Никита Вадимович\r
5,13\r
4\r
Духнов Павел Дмитриевич\r
5,73\r
5\r
Калюта Алеся Васильевна\r
5,6\r
6\r
Костюк Дмитрий Александрович\r
5,7\r
1\r
Мультан Александр Андреевич\r
5,07\r
2\r
Полуянов Архип Васильевич\r
6,5\r
3\r
Стома Владислав Александрович\r
5,69\r
4\r
Ткачук Алеся Олеговна\r
6,7\r
5\r
Трифонов Матвей Вадимович\r
6,73\r
6\r
Улезко Данила Алексеевич\r
6,41\r
1\r
Ухова Виктория Алексеевна\r
6,43\r
2\r
Худоченко Алексей Геннадьевич\r
6,17\r
3\r
Цалко Никита Владимирович\r
8,37\r
4\r
Шакуров Александр Ильясович\r
6,97\r
5\r
Шацкий Матвей Павлович\r
5,6\r
6\r
Янчукевич Глеб Владиславович\r
7,3\r
\r
\r
`,fO=uO,pO=dO;function mO(){let[e,t]=(0,b.useState)(`legend`),n=e=>{let t=Xa.find(t=>t.id===e);return t?t.fullNameOfficial?`${t.name} (${t.fullNameOfficial})`:t.name:e},r=(0,b.useMemo)(()=>lO(),[]),i=(n,r)=>(0,I.jsx)(`button`,{type:`button`,onClick:()=>t(n),className:`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${e===n?`bg-indigo-600 text-white`:`bg-gray-100 text-gray-700 hover:bg-gray-200`}`,children:r},n),a=e=>(0,I.jsx)(`pre`,{className:`text-[11px] sm:text-xs font-mono leading-relaxed whitespace-pre-wrap break-words max-h-[70vh] overflow-auto p-4 bg-gray-50 rounded-lg border border-gray-200 text-gray-800`,children:e});return(0,I.jsxs)(`div`,{className:`min-h-screen flex flex-col bg-white`,children:[(0,I.jsx)(`header`,{className:`px-6 py-4 border-b border-gray-200 flex items-center gap-4`,children:(0,I.jsxs)(Yn,{to:`/`,className:`inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium`,children:[(0,I.jsx)(Ao,{className:`w-4 h-4`}),`На главную`]})}),(0,I.jsxs)(`main`,{className:`flex-1 max-w-6xl mx-auto px-6 py-10 w-full`,children:[(0,I.jsxs)(`div`,{className:`flex items-start gap-3 mb-8`,children:[(0,I.jsx)(`div`,{className:`p-3 rounded-xl bg-indigo-50 text-indigo-700`,children:(0,I.jsx)(No,{className:`w-8 h-8`})}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`p`,{className:`text-sm uppercase tracking-wide text-gray-500 font-medium`,children:iO}),(0,I.jsx)(`h1`,{className:`text-2xl font-bold text-gray-900 mt-1`,children:aO}),(0,I.jsx)(`p`,{className:`text-sm text-gray-600 mt-2`,children:oO})]})]}),(0,I.jsxs)(`div`,{className:`flex flex-wrap gap-2 mb-8`,children:[i(`legend`,`Обозначения`),i(`catalog`,`Каталог часов`),i(`load`,`Нагрузка по таблице`),i(`rawLoad`,`Полный текст: нагрузка`),i(`rawGraphic`,`Полный текст: график`)]}),e===`legend`&&(0,I.jsxs)(`section`,{children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-2 mb-4`,children:[(0,I.jsx)(jo,{className:`w-5 h-5 text-gray-700`}),(0,I.jsx)(`h2`,{className:`text-lg font-semibold text-gray-900`,children:`Обозначения и аббревиатуры из графика`})]}),(0,I.jsx)(`div`,{className:`rounded-lg border border-gray-200 overflow-hidden`,children:(0,I.jsxs)(`table`,{className:`w-full text-sm`,children:[(0,I.jsx)(`thead`,{className:`bg-gray-50 text-left text-gray-600`,children:(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`th`,{className:`px-4 py-2 font-medium`,children:`Код / сокращение`}),(0,I.jsx)(`th`,{className:`px-4 py-2 font-medium`,children:`Значение`})]})}),(0,I.jsx)(`tbody`,{className:`divide-y divide-gray-100`,children:sO.map(e=>(0,I.jsxs)(`tr`,{className:`bg-white hover:bg-gray-50/80`,children:[(0,I.jsx)(`td`,{className:`px-4 py-2 font-mono text-xs sm:text-sm text-indigo-800`,children:e.code}),(0,I.jsx)(`td`,{className:`px-4 py-2 text-gray-800`,children:e.meaning})]},e.code))})]})})]}),e===`catalog`&&(0,I.jsxs)(`section`,{children:[(0,I.jsx)(`h2`,{className:`text-lg font-semibold text-gray-900 mb-4`,children:`Строки общего каталога (часы без ФИО в колонках)`}),(0,I.jsx)(`div`,{className:`rounded-lg border border-gray-200 overflow-x-auto`,children:(0,I.jsxs)(`table`,{className:`w-full text-sm min-w-[640px]`,children:[(0,I.jsx)(`thead`,{className:`bg-gray-50`,children:(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`th`,{className:`px-4 py-3 text-left`,children:`Дисциплина (фрагмент)`}),(0,I.jsx)(`th`,{className:`px-4 py-3 text-left`,children:`Профиль / пояснение`}),(0,I.jsx)(`th`,{className:`px-4 py-3 text-right`,children:`Часы (план)`})]})}),(0,I.jsx)(`tbody`,{className:`divide-y divide-gray-100`,children:r.map((e,t)=>(0,I.jsxs)(`tr`,{className:`hover:bg-gray-50/90`,children:[(0,I.jsx)(`td`,{className:`px-4 py-3`,children:e.discipline}),(0,I.jsx)(`td`,{className:`px-4 py-3 text-gray-600`,children:e.specialization}),(0,I.jsx)(`td`,{className:`px-4 py-3 tabular-nums text-right`,children:e.hours??`—`})]},t))})]})})]}),e===`load`&&(0,I.jsxs)(`section`,{children:[(0,I.jsx)(`h2`,{className:`text-lg font-semibold text-gray-900 mb-4`,children:`Разбор по преподавателям и дисциплинам из плана`}),(0,I.jsx)(`p`,{className:`text-sm text-gray-600 mb-4`,children:`Ниже строки восстановлены по машинному тексту документа; при противоречиях ориентируйтесь на полную расшифровку PDF во вкладке «PDF нагрузка».`}),(0,I.jsx)(`div`,{className:`rounded-lg border border-gray-200 overflow-x-auto shadow-sm`,children:(0,I.jsxs)(`table`,{className:`w-full text-sm min-w-[640px]`,children:[(0,I.jsx)(`thead`,{className:`bg-gray-50 text-left text-gray-600`,children:(0,I.jsxs)(`tr`,{children:[(0,I.jsx)(`th`,{className:`px-4 py-3 font-medium`,children:`Исполнитель (как в приложении)`}),(0,I.jsx)(`th`,{className:`px-4 py-3 font-medium`,children:`Дисциплина / блок работ`}),(0,I.jsx)(`th`,{className:`px-4 py-3 font-medium`,children:`Профиль / код подраздела`}),(0,I.jsx)(`th`,{className:`px-4 py-3 whitespace-nowrap`,children:`Часы`}),(0,I.jsx)(`th`,{className:`px-4 py-3 font-medium`,children:`Примечание`})]})}),(0,I.jsx)(`tbody`,{className:`divide-y divide-gray-100`,children:cO.map((e,t)=>(0,I.jsxs)(`tr`,{className:`bg-white hover:bg-gray-50/80`,children:[(0,I.jsx)(`td`,{className:`px-4 py-3`,children:n(e.teacherId)}),(0,I.jsx)(`td`,{className:`px-4 py-3 text-gray-800`,children:e.discipline}),(0,I.jsx)(`td`,{className:`px-4 py-3 text-gray-600`,children:e.specialization??`—`}),(0,I.jsx)(`td`,{className:`px-4 py-3 tabular-nums`,children:e.hours===void 0?`—`:e.hours}),(0,I.jsx)(`td`,{className:`px-4 py-3 text-gray-500 text-xs max-w-[220px]`,children:e.note??`—`})]},`${e.teacherId}-${t}`))})]})})]}),e===`rawLoad`&&(0,I.jsxs)(`section`,{children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-2 mb-4`,children:[(0,I.jsx)(zo,{className:`w-5 h-5`}),(0,I.jsx)(`h2`,{className:`text-lg font-semibold text-gray-900`,children:`Полный текст «Нагрузка 2025–2026 (30.10.2025)»`})]}),(0,I.jsx)(`p`,{className:`text-xs text-gray-500 mb-2`,children:`Извлечение PyMuPDF, UTF-8. Набор столбцов возможен только в текстовом порядке.`}),a(fO)]}),e===`rawGraphic`&&(0,I.jsxs)(`section`,{children:[(0,I.jsxs)(`div`,{className:`flex items-center gap-2 mb-4`,children:[(0,I.jsx)(zo,{className:`w-5 h-5`}),(0,I.jsx)(`h2`,{className:`text-lg font-semibold text-gray-900`,children:`Полный текст «График работы весна 2026»`})]}),(0,I.jsx)(`p`,{className:`text-xs text-gray-500 mb-2`,children:`В тексте таблицы ячейки часто следуют в вертикальном порядке — используйте вместе с PDF-просмотрщиком.`}),a(pO)]})]}),(0,I.jsx)(`footer`,{className:`py-6 text-center text-sm text-gray-500 border-t border-gray-100`,children:"UniSchedule · текстовые выдержки зашиты в сборке из `src/data/pdf/*.txt`."})]})}function hO(){return(0,I.jsxs)(on,{children:[(0,I.jsxs)(rn,{path:`/`,element:(0,I.jsx)(xo,{}),children:[(0,I.jsx)(rn,{index:!0,element:(0,I.jsx)(Zo,{})}),(0,I.jsx)(rn,{path:`handbook`,element:(0,I.jsx)(mO,{})}),(0,I.jsx)(rn,{path:`login/:role`,element:(0,I.jsx)(ts,{})}),(0,I.jsx)(rn,{path:`student`,element:(0,I.jsx)(qs,{})}),(0,I.jsx)(rn,{path:`teacher`,element:(0,I.jsx)(Ys,{})}),(0,I.jsx)(rn,{path:`admin`,element:(0,I.jsx)(tO,{})})]}),(0,I.jsx)(rn,{path:`*`,element:(0,I.jsx)(tn,{to:`/`,replace:!0})})]})}(0,y.createRoot)(document.getElementById(`root`)).render((0,I.jsx)(b.StrictMode,{children:(0,I.jsx)(re,{store:yo,children:(0,I.jsx)(Kn,{children:(0,I.jsx)(hO,{})})})}));