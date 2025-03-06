(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function eE(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Bh={exports:{}},Ea={},$h={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function tE(){if(Dm)return Ae;Dm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),A=Symbol.iterator;function N(O){return O===null||typeof O!="object"?null:(O=A&&O[A]||O["@@iterator"],typeof O=="function"?O:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,Q={};function q(O,$,le){this.props=O,this.context=$,this.refs=Q,this.updater=le||z}q.prototype.isReactComponent={},q.prototype.setState=function(O,$){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,$,"setState")},q.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function fe(){}fe.prototype=q.prototype;function _e(O,$,le){this.props=O,this.context=$,this.refs=Q,this.updater=le||z}var pe=_e.prototype=new fe;pe.constructor=_e,G(pe,q.prototype),pe.isPureReactComponent=!0;var Ee=Array.isArray,He=Object.prototype.hasOwnProperty,Ie={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function T(O,$,le){var Te,Se={},Ne=null,be=null;if($!=null)for(Te in $.ref!==void 0&&(be=$.ref),$.key!==void 0&&(Ne=""+$.key),$)He.call($,Te)&&!C.hasOwnProperty(Te)&&(Se[Te]=$[Te]);var Me=arguments.length-2;if(Me===1)Se.children=le;else if(1<Me){for(var Be=Array(Me),gt=0;gt<Me;gt++)Be[gt]=arguments[gt+2];Se.children=Be}if(O&&O.defaultProps)for(Te in Me=O.defaultProps,Me)Se[Te]===void 0&&(Se[Te]=Me[Te]);return{$$typeof:r,type:O,key:Ne,ref:be,props:Se,_owner:Ie.current}}function S(O,$){return{$$typeof:r,type:O.type,key:$,ref:O.ref,props:O.props,_owner:O._owner}}function k(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function D(O){var $={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(le){return $[le]})}var L=/\/+/g;function R(O,$){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):$.toString(36)}function tt(O,$,le,Te,Se){var Ne=typeof O;(Ne==="undefined"||Ne==="boolean")&&(O=null);var be=!1;if(O===null)be=!0;else switch(Ne){case"string":case"number":be=!0;break;case"object":switch(O.$$typeof){case r:case e:be=!0}}if(be)return be=O,Se=Se(be),O=Te===""?"."+R(be,0):Te,Ee(Se)?(le="",O!=null&&(le=O.replace(L,"$&/")+"/"),tt(Se,$,le,"",function(gt){return gt})):Se!=null&&(k(Se)&&(Se=S(Se,le+(!Se.key||be&&be.key===Se.key?"":(""+Se.key).replace(L,"$&/")+"/")+O)),$.push(Se)),1;if(be=0,Te=Te===""?".":Te+":",Ee(O))for(var Me=0;Me<O.length;Me++){Ne=O[Me];var Be=Te+R(Ne,Me);be+=tt(Ne,$,le,Be,Se)}else if(Be=N(O),typeof Be=="function")for(O=Be.call(O),Me=0;!(Ne=O.next()).done;)Ne=Ne.value,Be=Te+R(Ne,Me++),be+=tt(Ne,$,le,Be,Se);else if(Ne==="object")throw $=String(O),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return be}function Nt(O,$,le){if(O==null)return O;var Te=[],Se=0;return tt(O,Te,"","",function(Ne){return $.call(le,Ne,Se++)}),Te}function xt(O){if(O._status===-1){var $=O._result;$=$(),$.then(function(le){(O._status===0||O._status===-1)&&(O._status=1,O._result=le)},function(le){(O._status===0||O._status===-1)&&(O._status=2,O._result=le)}),O._status===-1&&(O._status=0,O._result=$)}if(O._status===1)return O._result.default;throw O._result}var je={current:null},Z={transition:null},ce={ReactCurrentDispatcher:je,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Ie};function te(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:Nt,forEach:function(O,$,le){Nt(O,function(){$.apply(this,arguments)},le)},count:function(O){var $=0;return Nt(O,function(){$++}),$},toArray:function(O){return Nt(O,function($){return $})||[]},only:function(O){if(!k(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ae.Component=q,Ae.Fragment=t,Ae.Profiler=o,Ae.PureComponent=_e,Ae.StrictMode=s,Ae.Suspense=g,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Ae.act=te,Ae.cloneElement=function(O,$,le){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Te=G({},O.props),Se=O.key,Ne=O.ref,be=O._owner;if($!=null){if($.ref!==void 0&&(Ne=$.ref,be=Ie.current),$.key!==void 0&&(Se=""+$.key),O.type&&O.type.defaultProps)var Me=O.type.defaultProps;for(Be in $)He.call($,Be)&&!C.hasOwnProperty(Be)&&(Te[Be]=$[Be]===void 0&&Me!==void 0?Me[Be]:$[Be])}var Be=arguments.length-2;if(Be===1)Te.children=le;else if(1<Be){Me=Array(Be);for(var gt=0;gt<Be;gt++)Me[gt]=arguments[gt+2];Te.children=Me}return{$$typeof:r,type:O.type,key:Se,ref:Ne,props:Te,_owner:be}},Ae.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Ae.createElement=T,Ae.createFactory=function(O){var $=T.bind(null,O);return $.type=O,$},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(O){return{$$typeof:p,render:O}},Ae.isValidElement=k,Ae.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:xt}},Ae.memo=function(O,$){return{$$typeof:v,type:O,compare:$===void 0?null:$}},Ae.startTransition=function(O){var $=Z.transition;Z.transition={};try{O()}finally{Z.transition=$}},Ae.unstable_act=te,Ae.useCallback=function(O,$){return je.current.useCallback(O,$)},Ae.useContext=function(O){return je.current.useContext(O)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(O){return je.current.useDeferredValue(O)},Ae.useEffect=function(O,$){return je.current.useEffect(O,$)},Ae.useId=function(){return je.current.useId()},Ae.useImperativeHandle=function(O,$,le){return je.current.useImperativeHandle(O,$,le)},Ae.useInsertionEffect=function(O,$){return je.current.useInsertionEffect(O,$)},Ae.useLayoutEffect=function(O,$){return je.current.useLayoutEffect(O,$)},Ae.useMemo=function(O,$){return je.current.useMemo(O,$)},Ae.useReducer=function(O,$,le){return je.current.useReducer(O,$,le)},Ae.useRef=function(O){return je.current.useRef(O)},Ae.useState=function(O){return je.current.useState(O)},Ae.useSyncExternalStore=function(O,$,le){return je.current.useSyncExternalStore(O,$,le)},Ae.useTransition=function(){return je.current.useTransition()},Ae.version="18.3.1",Ae}var Vm;function Vd(){return Vm||(Vm=1,$h.exports=tE()),$h.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function nE(){if(Om)return Ea;Om=1;var r=Vd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(p,g,v){var E,A={},N=null,z=null;v!==void 0&&(N=""+v),g.key!==void 0&&(N=""+g.key),g.ref!==void 0&&(z=g.ref);for(E in g)s.call(g,E)&&!u.hasOwnProperty(E)&&(A[E]=g[E]);if(p&&p.defaultProps)for(E in g=p.defaultProps,g)A[E]===void 0&&(A[E]=g[E]);return{$$typeof:e,type:p,key:N,ref:z,props:A,_owner:o.current}}return Ea.Fragment=t,Ea.jsx=h,Ea.jsxs=h,Ea}var Lm;function rE(){return Lm||(Lm=1,Bh.exports=nE()),Bh.exports}var V=rE(),Le=Vd();const Er=eE(Le);var fu={},qh={exports:{}},Jt={},Hh={exports:{}},Wh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function iE(){return bm||(bm=1,function(r){function e(Z,ce){var te=Z.length;Z.push(ce);e:for(;0<te;){var O=te-1>>>1,$=Z[O];if(0<o($,ce))Z[O]=ce,Z[te]=$,te=O;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var ce=Z[0],te=Z.pop();if(te!==ce){Z[0]=te;e:for(var O=0,$=Z.length,le=$>>>1;O<le;){var Te=2*(O+1)-1,Se=Z[Te],Ne=Te+1,be=Z[Ne];if(0>o(Se,te))Ne<$&&0>o(be,Se)?(Z[O]=be,Z[Ne]=te,O=Ne):(Z[O]=Se,Z[Te]=te,O=Te);else if(Ne<$&&0>o(be,te))Z[O]=be,Z[Ne]=te,O=Ne;else break e}}return ce}function o(Z,ce){var te=Z.sortIndex-ce.sortIndex;return te!==0?te:Z.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var g=[],v=[],E=1,A=null,N=3,z=!1,G=!1,Q=!1,q=typeof setTimeout=="function"?setTimeout:null,fe=typeof clearTimeout=="function"?clearTimeout:null,_e=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function pe(Z){for(var ce=t(v);ce!==null;){if(ce.callback===null)s(v);else if(ce.startTime<=Z)s(v),ce.sortIndex=ce.expirationTime,e(g,ce);else break;ce=t(v)}}function Ee(Z){if(Q=!1,pe(Z),!G)if(t(g)!==null)G=!0,xt(He);else{var ce=t(v);ce!==null&&je(Ee,ce.startTime-Z)}}function He(Z,ce){G=!1,Q&&(Q=!1,fe(T),T=-1),z=!0;var te=N;try{for(pe(ce),A=t(g);A!==null&&(!(A.expirationTime>ce)||Z&&!D());){var O=A.callback;if(typeof O=="function"){A.callback=null,N=A.priorityLevel;var $=O(A.expirationTime<=ce);ce=r.unstable_now(),typeof $=="function"?A.callback=$:A===t(g)&&s(g),pe(ce)}else s(g);A=t(g)}if(A!==null)var le=!0;else{var Te=t(v);Te!==null&&je(Ee,Te.startTime-ce),le=!1}return le}finally{A=null,N=te,z=!1}}var Ie=!1,C=null,T=-1,S=5,k=-1;function D(){return!(r.unstable_now()-k<S)}function L(){if(C!==null){var Z=r.unstable_now();k=Z;var ce=!0;try{ce=C(!0,Z)}finally{ce?R():(Ie=!1,C=null)}}else Ie=!1}var R;if(typeof _e=="function")R=function(){_e(L)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,Nt=tt.port2;tt.port1.onmessage=L,R=function(){Nt.postMessage(null)}}else R=function(){q(L,0)};function xt(Z){C=Z,Ie||(Ie=!0,R())}function je(Z,ce){T=q(function(){Z(r.unstable_now())},ce)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Z){Z.callback=null},r.unstable_continueExecution=function(){G||z||(G=!0,xt(He))},r.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<Z?Math.floor(1e3/Z):5},r.unstable_getCurrentPriorityLevel=function(){return N},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(Z){switch(N){case 1:case 2:case 3:var ce=3;break;default:ce=N}var te=N;N=ce;try{return Z()}finally{N=te}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Z,ce){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var te=N;N=Z;try{return ce()}finally{N=te}},r.unstable_scheduleCallback=function(Z,ce,te){var O=r.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?O+te:O):te=O,Z){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=te+$,Z={id:E++,callback:ce,priorityLevel:Z,startTime:te,expirationTime:$,sortIndex:-1},te>O?(Z.sortIndex=te,e(v,Z),t(g)===null&&Z===t(v)&&(Q?(fe(T),T=-1):Q=!0,je(Ee,te-O))):(Z.sortIndex=$,e(g,Z),G||z||(G=!0,xt(He))),Z},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(Z){var ce=N;return function(){var te=N;N=ce;try{return Z.apply(this,arguments)}finally{N=te}}}}(Wh)),Wh}var Mm;function sE(){return Mm||(Mm=1,Hh.exports=iE()),Hh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function oE(){if(Um)return Jt;Um=1;var r=Vd(),e=sE();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},A={};function N(n){return g.call(A,n)?!0:g.call(E,n)?!1:v.test(n)?A[n]=!0:(E[n]=!0,!1)}function z(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function G(n,i,a,c){if(i===null||typeof i>"u"||z(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function Q(n,i,a,c,d,m,_){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=_}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){q[n]=new Q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];q[i]=new Q(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){q[n]=new Q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){q[n]=new Q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){q[n]=new Q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){q[n]=new Q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){q[n]=new Q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){q[n]=new Q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){q[n]=new Q(n,5,!1,n.toLowerCase(),null,!1,!1)});var fe=/[\-:]([a-z])/g;function _e(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(fe,_e);q[i]=new Q(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(fe,_e);q[i]=new Q(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(fe,_e);q[i]=new Q(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){q[n]=new Q(n,1,!1,n.toLowerCase(),null,!1,!1)}),q.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){q[n]=new Q(n,1,!1,n.toLowerCase(),null,!0,!0)});function pe(n,i,a,c){var d=q.hasOwnProperty(i)?q[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(G(i,a,d,c)&&(a=null),c||d===null?N(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var Ee=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,He=Symbol.for("react.element"),Ie=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),Nt=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),je=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,O;function $(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var le=!1;function Te(n,i){if(!n||le)return"";le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(F){var c=F}Reflect.construct(n,[],i)}else{try{i.call()}catch(F){c=F}n.call(i.prototype)}else{try{throw Error()}catch(F){c=F}n()}}catch(F){if(F&&c&&typeof F.stack=="string"){for(var d=F.stack.split(`
`),m=c.stack.split(`
`),_=d.length-1,I=m.length-1;1<=_&&0<=I&&d[_]!==m[I];)I--;for(;1<=_&&0<=I;_--,I--)if(d[_]!==m[I]){if(_!==1||I!==1)do if(_--,I--,0>I||d[_]!==m[I]){var P=`
`+d[_].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=_&&0<=I);break}}}finally{le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function Se(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Te(n.type,!1),n;case 11:return n=Te(n.type.render,!1),n;case 1:return n=Te(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case C:return"Fragment";case Ie:return"Portal";case S:return"Profiler";case T:return"StrictMode";case R:return"Suspense";case tt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case L:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Nt:return i=n.displayName||null,i!==null?i:Ne(n.type)||"Memo";case xt:i=n._payload,n=n._init;try{return Ne(n(i))}catch{}}return null}function be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function gt(n){var i=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,m.call(this,_)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function er(n){n._valueTracker||(n._valueTracker=gt(n))}function as(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Dr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ti(n,i){var a=i.checked;return te({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ls(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Me(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Co(n,i){i=i.checked,i!=null&&pe(n,"checked",i,!1)}function Po(n,i){Co(n,i);var a=Me(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?us(n,i.type,a):i.hasOwnProperty("defaultValue")&&us(n,i.type,Me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ja(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function us(n,i,a){(i!=="number"||Dr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var tr=Array.isArray;function nr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function ko(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function cs(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(tr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Me(a)}}function hs(n,i){var a=Me(i.value),c=Me(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function No(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ut(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ct(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ut(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var rr,xo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(rr=rr||document.createElement("div"),rr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=rr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Vr(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Si=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(n){Si.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ii[i]=Ii[n]})});function Do(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ii.hasOwnProperty(n)&&Ii[n]?(""+i).trim():i+"px"}function Vo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Do(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Oo=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lo(n,i){if(i){if(Oo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function bo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ai=null;function ds(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var fs=null,ln=null,Mn=null;function ps(n){if(n=oa(n)){if(typeof fs!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Pl(i),fs(n.stateNode,n.type,i))}}function Un(n){ln?Mn?Mn.push(n):Mn=[n]:ln=n}function Mo(){if(ln){var n=ln,i=Mn;if(Mn=ln=null,ps(n),i)for(n=0;n<i.length;n++)ps(i[n])}}function Ri(n,i){return n(i)}function Uo(){}var ir=!1;function Fo(n,i,a){if(ir)return n(i,a);ir=!0;try{return Ri(n,i,a)}finally{ir=!1,(ln!==null||Mn!==null)&&(Uo(),Mo())}}function nt(n,i){var a=n.stateNode;if(a===null)return null;var c=Pl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ms=!1;if(p)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){ms=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{ms=!1}function Ci(n,i,a,c,d,m,_,I,P){var F=Array.prototype.slice.call(arguments,3);try{i.apply(a,F)}catch(K){this.onError(K)}}var Pi=!1,gs=null,En=!1,jo=null,gc={onError:function(n){Pi=!0,gs=n}};function ys(n,i,a,c,d,m,_,I,P){Pi=!1,gs=null,Ci.apply(gc,arguments)}function Za(n,i,a,c,d,m,_,I,P){if(ys.apply(this,arguments),Pi){if(Pi){var F=gs;Pi=!1,gs=null}else throw Error(t(198));En||(En=!0,jo=F)}}function Tn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ki(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function In(n){if(Tn(n)!==n)throw Error(t(188))}function el(n){var i=n.alternate;if(!i){if(i=Tn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return In(d),n;if(m===c)return In(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var _=!1,I=d.child;I;){if(I===a){_=!0,a=d,c=m;break}if(I===c){_=!0,c=d,a=m;break}I=I.sibling}if(!_){for(I=m.child;I;){if(I===a){_=!0,a=m,c=d;break}if(I===c){_=!0,c=m,a=d;break}I=I.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function zo(n){return n=el(n),n!==null?_s(n):null}function _s(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=_s(n);if(i!==null)return i;n=n.sibling}return null}var vs=e.unstable_scheduleCallback,Bo=e.unstable_cancelCallback,tl=e.unstable_shouldYield,yc=e.unstable_requestPaint,$e=e.unstable_now,nl=e.unstable_getCurrentPriorityLevel,Ni=e.unstable_ImmediatePriority,Or=e.unstable_UserBlockingPriority,un=e.unstable_NormalPriority,$o=e.unstable_LowPriority,rl=e.unstable_IdlePriority,xi=null,en=null;function il(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(xi,n,void 0,(n.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:ol,qo=Math.log,sl=Math.LN2;function ol(n){return n>>>=0,n===0?32:31-(qo(n)/sl|0)|0}var ws=64,Es=4194304;function Lr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Di(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,_=a&268435455;if(_!==0){var I=_&~d;I!==0?c=Lr(I):(m&=_,m!==0&&(c=Lr(m)))}else _=a&~d,_!==0?c=Lr(_):m!==0&&(c=Lr(m));if(c===0)return 0;if(i!==0&&i!==c&&!(i&d)&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if(c&4&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-jt(i),d=1<<a,c|=n[a],i&=~d;return c}function _c(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var _=31-jt(m),I=1<<_,P=d[_];P===-1?(!(I&a)||I&c)&&(d[_]=_c(I,i)):P<=i&&(n.expiredLanes|=I),m&=~I}}function tn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Vi(){var n=ws;return ws<<=1,!(ws&4194240)&&(ws=64),n}function br(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Mr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-jt(i),n[i]=a}function ze(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-jt(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Ur(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-jt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var ke=0;function Fr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var al,Ts,ll,ul,cl,Ho=!1,Fn=[],Tt=null,Sn=null,An=null,jr=new Map,cn=new Map,jn=[],vc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hl(n,i){switch(n){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":jr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":cn.delete(i.pointerId)}}function Ht(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=oa(i),i!==null&&Ts(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function wc(n,i,a,c,d){switch(i){case"focusin":return Tt=Ht(Tt,n,i,a,c,d),!0;case"dragenter":return Sn=Ht(Sn,n,i,a,c,d),!0;case"mouseover":return An=Ht(An,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return jr.set(m,Ht(jr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,cn.set(m,Ht(cn.get(m)||null,n,i,a,c,d)),!0}return!1}function dl(n){var i=Ui(n.target);if(i!==null){var a=Tn(i);if(a!==null){if(i=a.tag,i===13){if(i=ki(a),i!==null){n.blockedOn=i,cl(n.priority,function(){ll(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function or(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Is(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ai=c,a.target.dispatchEvent(c),Ai=null}else return i=oa(a),i!==null&&Ts(i),n.blockedOn=a,!1;i.shift()}return!0}function Oi(n,i,a){or(n)&&a.delete(i)}function fl(){Ho=!1,Tt!==null&&or(Tt)&&(Tt=null),Sn!==null&&or(Sn)&&(Sn=null),An!==null&&or(An)&&(An=null),jr.forEach(Oi),cn.forEach(Oi)}function Rn(n,i){n.blockedOn===i&&(n.blockedOn=null,Ho||(Ho=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,fl)))}function Cn(n){function i(d){return Rn(d,n)}if(0<Fn.length){Rn(Fn[0],n);for(var a=1;a<Fn.length;a++){var c=Fn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Tt!==null&&Rn(Tt,n),Sn!==null&&Rn(Sn,n),An!==null&&Rn(An,n),jr.forEach(i),cn.forEach(i),a=0;a<jn.length;a++)c=jn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<jn.length&&(a=jn[0],a.blockedOn===null);)dl(a),a.blockedOn===null&&jn.shift()}var ar=Ee.ReactCurrentBatchConfig,zr=!0;function Qe(n,i,a,c){var d=ke,m=ar.transition;ar.transition=null;try{ke=1,Wo(n,i,a,c)}finally{ke=d,ar.transition=m}}function Ec(n,i,a,c){var d=ke,m=ar.transition;ar.transition=null;try{ke=4,Wo(n,i,a,c)}finally{ke=d,ar.transition=m}}function Wo(n,i,a,c){if(zr){var d=Is(n,i,a,c);if(d===null)Dc(n,i,c,Li,a),hl(n,c);else if(wc(d,n,i,a,c))c.stopPropagation();else if(hl(n,c),i&4&&-1<vc.indexOf(n)){for(;d!==null;){var m=oa(d);if(m!==null&&al(m),m=Is(n,i,a,c),m===null&&Dc(n,i,c,Li,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Dc(n,i,c,null,a)}}var Li=null;function Is(n,i,a,c){if(Li=null,n=ds(c),n=Ui(n),n!==null)if(i=Tn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ki(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Li=n,null}function Ko(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nl()){case Ni:return 1;case Or:return 4;case un:case $o:return 16;case rl:return 536870912;default:return 16}default:return 16}}var nn=null,Ss=null,Wt=null;function Go(){if(Wt)return Wt;var n,i=Ss,a=i.length,c,d="value"in nn?nn.value:nn.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&i[a-c]===d[m-c];c++);return Wt=d.slice(n,1<c?1-c:void 0)}function As(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function zn(){return!0}function Qo(){return!1}function It(n){function i(a,c,d,m,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=_,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?zn:Qo,this.isPropagationStopped=Qo,this}return te(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zn)},persist:function(){},isPersistent:zn}),i}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rs=It(Pn),Bn=te({},Pn,{view:0,detail:0}),Tc=It(Bn),Cs,lr,Br,bi=te({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$n,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Br&&(Br&&n.type==="mousemove"?(Cs=n.screenX-Br.screenX,lr=n.screenY-Br.screenY):lr=Cs=0,Br=n),Cs)},movementY:function(n){return"movementY"in n?n.movementY:lr}}),Ps=It(bi),Xo=te({},bi,{dataTransfer:0}),pl=It(Xo),ks=te({},Bn,{relatedTarget:0}),Ns=It(ks),ml=te({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),ur=It(ml),gl=te({},Pn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),yl=It(gl),_l=te({},Pn,{data:0}),Yo=It(_l),xs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=vl[n])?!!i[n]:!1}function $n(){return wl}var l=te({},Bn,{key:function(n){if(n.key){var i=xs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=As(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$n,charCode:function(n){return n.type==="keypress"?As(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?As(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=It(l),y=te({},bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=It(y),b=te({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$n}),j=It(b),J=te({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fe=It(J),ht=te({},bi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xe=It(ht),yt=[9,13,27,32],st=p&&"CompositionEvent"in window,hn=null;p&&"documentMode"in document&&(hn=document.documentMode);var rn=p&&"TextEvent"in window&&!hn,Mi=p&&(!st||hn&&8<hn&&11>=hn),Ds=" ",Rf=!1;function Cf(n,i){switch(n){case"keyup":return yt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Vs=!1;function Yv(n,i){switch(n){case"compositionend":return Pf(i);case"keypress":return i.which!==32?null:(Rf=!0,Ds);case"textInput":return n=i.data,n===Ds&&Rf?null:n;default:return null}}function Jv(n,i){if(Vs)return n==="compositionend"||!st&&Cf(n,i)?(n=Go(),Wt=Ss=nn=null,Vs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Mi&&i.locale!=="ko"?null:i.data;default:return null}}var Zv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Zv[n.type]:i==="textarea"}function Nf(n,i,a,c){Un(c),i=Al(i,"onChange"),0<i.length&&(a=new Rs("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Jo=null,Zo=null;function ew(n){Gf(n,0)}function El(n){var i=Us(n);if(as(i))return n}function tw(n,i){if(n==="change")return i}var xf=!1;if(p){var Ic;if(p){var Sc="oninput"in document;if(!Sc){var Df=document.createElement("div");Df.setAttribute("oninput","return;"),Sc=typeof Df.oninput=="function"}Ic=Sc}else Ic=!1;xf=Ic&&(!document.documentMode||9<document.documentMode)}function Vf(){Jo&&(Jo.detachEvent("onpropertychange",Of),Zo=Jo=null)}function Of(n){if(n.propertyName==="value"&&El(Zo)){var i=[];Nf(i,Zo,n,ds(n)),Fo(ew,i)}}function nw(n,i,a){n==="focusin"?(Vf(),Jo=i,Zo=a,Jo.attachEvent("onpropertychange",Of)):n==="focusout"&&Vf()}function rw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return El(Zo)}function iw(n,i){if(n==="click")return El(i)}function sw(n,i){if(n==="input"||n==="change")return El(i)}function ow(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var kn=typeof Object.is=="function"?Object.is:ow;function ea(n,i){if(kn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!kn(n[d],i[d]))return!1}return!0}function Lf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function bf(n,i){var a=Lf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Lf(a)}}function Mf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Mf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Uf(){for(var n=window,i=Dr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Dr(n.document)}return i}function Ac(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function aw(n){var i=Uf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Mf(a.ownerDocument.documentElement,a)){if(c!==null&&Ac(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=bf(a,m);var _=bf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(_.node,_.offset)):(i.setEnd(_.node,_.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var lw=p&&"documentMode"in document&&11>=document.documentMode,Os=null,Rc=null,ta=null,Cc=!1;function Ff(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cc||Os==null||Os!==Dr(c)||(c=Os,"selectionStart"in c&&Ac(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ta&&ea(ta,c)||(ta=c,c=Al(Rc,"onSelect"),0<c.length&&(i=new Rs("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Os)))}function Tl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ls={animationend:Tl("Animation","AnimationEnd"),animationiteration:Tl("Animation","AnimationIteration"),animationstart:Tl("Animation","AnimationStart"),transitionend:Tl("Transition","TransitionEnd")},Pc={},jf={};p&&(jf=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Il(n){if(Pc[n])return Pc[n];if(!Ls[n])return n;var i=Ls[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in jf)return Pc[n]=i[a];return n}var zf=Il("animationend"),Bf=Il("animationiteration"),$f=Il("animationstart"),qf=Il("transitionend"),Hf=new Map,Wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(n,i){Hf.set(n,i),u(i,[n])}for(var kc=0;kc<Wf.length;kc++){var Nc=Wf[kc],uw=Nc.toLowerCase(),cw=Nc[0].toUpperCase()+Nc.slice(1);$r(uw,"on"+cw)}$r(zf,"onAnimationEnd"),$r(Bf,"onAnimationIteration"),$r($f,"onAnimationStart"),$r("dblclick","onDoubleClick"),$r("focusin","onFocus"),$r("focusout","onBlur"),$r(qf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hw=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function Kf(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Za(c,i,void 0,n),n.currentTarget=null}function Gf(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var _=c.length-1;0<=_;_--){var I=c[_],P=I.instance,F=I.currentTarget;if(I=I.listener,P!==m&&d.isPropagationStopped())break e;Kf(d,I,F),m=P}else for(_=0;_<c.length;_++){if(I=c[_],P=I.instance,F=I.currentTarget,I=I.listener,P!==m&&d.isPropagationStopped())break e;Kf(d,I,F),m=P}}}if(En)throw n=jo,En=!1,jo=null,n}function We(n,i){var a=i[Uc];a===void 0&&(a=i[Uc]=new Set);var c=n+"__bubble";a.has(c)||(Qf(i,n,2,!1),a.add(c))}function xc(n,i,a){var c=0;i&&(c|=4),Qf(a,n,c,i)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function ra(n){if(!n[Sl]){n[Sl]=!0,s.forEach(function(a){a!=="selectionchange"&&(hw.has(a)||xc(a,!1,n),xc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Sl]||(i[Sl]=!0,xc("selectionchange",!1,i))}}function Qf(n,i,a,c){switch(Ko(i)){case 1:var d=Qe;break;case 4:d=Ec;break;default:d=Wo}a=d.bind(null,i,a,n),d=void 0,!ms||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Dc(n,i,a,c,d){var m=c;if(!(i&1)&&!(i&2)&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var P=_.tag;if((P===3||P===4)&&(P=_.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;_=_.return}for(;I!==null;){if(_=Ui(I),_===null)return;if(P=_.tag,P===5||P===6){c=m=_;continue e}I=I.parentNode}}c=c.return}Fo(function(){var F=m,K=ds(a),X=[];e:{var W=Hf.get(n);if(W!==void 0){var ee=Rs,ie=n;switch(n){case"keypress":if(As(a)===0)break e;case"keydown":case"keyup":ee=f;break;case"focusin":ie="focus",ee=Ns;break;case"focusout":ie="blur",ee=Ns;break;case"beforeblur":case"afterblur":ee=Ns;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=pl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=j;break;case zf:case Bf:case $f:ee=ur;break;case qf:ee=Fe;break;case"scroll":ee=Tc;break;case"wheel":ee=xe;break;case"copy":case"cut":case"paste":ee=yl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=w}var oe=(i&4)!==0,rt=!oe&&n==="scroll",M=oe?W!==null?W+"Capture":null:W;oe=[];for(var x=F,U;x!==null;){U=x;var Y=U.stateNode;if(U.tag===5&&Y!==null&&(U=Y,M!==null&&(Y=nt(x,M),Y!=null&&oe.push(ia(x,Y,U)))),rt)break;x=x.return}0<oe.length&&(W=new ee(W,ie,null,a,K),X.push({event:W,listeners:oe}))}}if(!(i&7)){e:{if(W=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",W&&a!==Ai&&(ie=a.relatedTarget||a.fromElement)&&(Ui(ie)||ie[cr]))break e;if((ee||W)&&(W=K.window===K?K:(W=K.ownerDocument)?W.defaultView||W.parentWindow:window,ee?(ie=a.relatedTarget||a.toElement,ee=F,ie=ie?Ui(ie):null,ie!==null&&(rt=Tn(ie),ie!==rt||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(ee=null,ie=F),ee!==ie)){if(oe=Ps,Y="onMouseLeave",M="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(oe=w,Y="onPointerLeave",M="onPointerEnter",x="pointer"),rt=ee==null?W:Us(ee),U=ie==null?W:Us(ie),W=new oe(Y,x+"leave",ee,a,K),W.target=rt,W.relatedTarget=U,Y=null,Ui(K)===F&&(oe=new oe(M,x+"enter",ie,a,K),oe.target=U,oe.relatedTarget=rt,Y=oe),rt=Y,ee&&ie)t:{for(oe=ee,M=ie,x=0,U=oe;U;U=bs(U))x++;for(U=0,Y=M;Y;Y=bs(Y))U++;for(;0<x-U;)oe=bs(oe),x--;for(;0<U-x;)M=bs(M),U--;for(;x--;){if(oe===M||M!==null&&oe===M.alternate)break t;oe=bs(oe),M=bs(M)}oe=null}else oe=null;ee!==null&&Xf(X,W,ee,oe,!1),ie!==null&&rt!==null&&Xf(X,rt,ie,oe,!0)}}e:{if(W=F?Us(F):window,ee=W.nodeName&&W.nodeName.toLowerCase(),ee==="select"||ee==="input"&&W.type==="file")var ae=tw;else if(kf(W))if(xf)ae=sw;else{ae=rw;var he=nw}else(ee=W.nodeName)&&ee.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(ae=iw);if(ae&&(ae=ae(n,F))){Nf(X,ae,a,K);break e}he&&he(n,W,F),n==="focusout"&&(he=W._wrapperState)&&he.controlled&&W.type==="number"&&us(W,"number",W.value)}switch(he=F?Us(F):window,n){case"focusin":(kf(he)||he.contentEditable==="true")&&(Os=he,Rc=F,ta=null);break;case"focusout":ta=Rc=Os=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,Ff(X,a,K);break;case"selectionchange":if(lw)break;case"keydown":case"keyup":Ff(X,a,K)}var de;if(st)e:{switch(n){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Vs?Cf(n,a)&&(ge="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(Mi&&a.locale!=="ko"&&(Vs||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Vs&&(de=Go()):(nn=K,Ss="value"in nn?nn.value:nn.textContent,Vs=!0)),he=Al(F,ge),0<he.length&&(ge=new Yo(ge,n,null,a,K),X.push({event:ge,listeners:he}),de?ge.data=de:(de=Pf(a),de!==null&&(ge.data=de)))),(de=rn?Yv(n,a):Jv(n,a))&&(F=Al(F,"onBeforeInput"),0<F.length&&(K=new Yo("onBeforeInput","beforeinput",null,a,K),X.push({event:K,listeners:F}),K.data=de))}Gf(X,i)})}function ia(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Al(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=nt(n,a),m!=null&&c.unshift(ia(n,m,d)),m=nt(n,i),m!=null&&c.push(ia(n,m,d))),n=n.return}return c}function bs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Xf(n,i,a,c,d){for(var m=i._reactName,_=[];a!==null&&a!==c;){var I=a,P=I.alternate,F=I.stateNode;if(P!==null&&P===c)break;I.tag===5&&F!==null&&(I=F,d?(P=nt(a,m),P!=null&&_.unshift(ia(a,P,I))):d||(P=nt(a,m),P!=null&&_.push(ia(a,P,I)))),a=a.return}_.length!==0&&n.push({event:i,listeners:_})}var dw=/\r\n?/g,fw=/\u0000|\uFFFD/g;function Yf(n){return(typeof n=="string"?n:""+n).replace(dw,`
`).replace(fw,"")}function Rl(n,i,a){if(i=Yf(i),Yf(n)!==i&&a)throw Error(t(425))}function Cl(){}var Vc=null,Oc=null;function Lc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var bc=typeof setTimeout=="function"?setTimeout:void 0,pw=typeof clearTimeout=="function"?clearTimeout:void 0,Jf=typeof Promise=="function"?Promise:void 0,mw=typeof queueMicrotask=="function"?queueMicrotask:typeof Jf<"u"?function(n){return Jf.resolve(null).then(n).catch(gw)}:bc;function gw(n){setTimeout(function(){throw n})}function Mc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Cn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Cn(i)}function qr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Zf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),qn="__reactFiber$"+Ms,sa="__reactProps$"+Ms,cr="__reactContainer$"+Ms,Uc="__reactEvents$"+Ms,yw="__reactListeners$"+Ms,_w="__reactHandles$"+Ms;function Ui(n){var i=n[qn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[cr]||a[qn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Zf(n);n!==null;){if(a=n[qn])return a;n=Zf(n)}return i}n=a,a=n.parentNode}return null}function oa(n){return n=n[qn]||n[cr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Pl(n){return n[sa]||null}var Fc=[],Fs=-1;function Hr(n){return{current:n}}function Ke(n){0>Fs||(n.current=Fc[Fs],Fc[Fs]=null,Fs--)}function qe(n,i){Fs++,Fc[Fs]=n.current,n.current=i}var Wr={},Dt=Hr(Wr),Kt=Hr(!1),Fi=Wr;function js(n,i){var a=n.type.contextTypes;if(!a)return Wr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gt(n){return n=n.childContextTypes,n!=null}function kl(){Ke(Kt),Ke(Dt)}function ep(n,i,a){if(Dt.current!==Wr)throw Error(t(168));qe(Dt,i),qe(Kt,a)}function tp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,be(n)||"Unknown",d));return te({},a,c)}function Nl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Wr,Fi=Dt.current,qe(Dt,n),qe(Kt,Kt.current),!0}function np(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=tp(n,i,Fi),c.__reactInternalMemoizedMergedChildContext=n,Ke(Kt),Ke(Dt),qe(Dt,n)):Ke(Kt),qe(Kt,a)}var hr=null,xl=!1,jc=!1;function rp(n){hr===null?hr=[n]:hr.push(n)}function vw(n){xl=!0,rp(n)}function Kr(){if(!jc&&hr!==null){jc=!0;var n=0,i=ke;try{var a=hr;for(ke=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}hr=null,xl=!1}catch(d){throw hr!==null&&(hr=hr.slice(n+1)),vs(Ni,Kr),d}finally{ke=i,jc=!1}}return null}var zs=[],Bs=0,Dl=null,Vl=0,dn=[],fn=0,ji=null,dr=1,fr="";function zi(n,i){zs[Bs++]=Vl,zs[Bs++]=Dl,Dl=n,Vl=i}function ip(n,i,a){dn[fn++]=dr,dn[fn++]=fr,dn[fn++]=ji,ji=n;var c=dr;n=fr;var d=32-jt(c)-1;c&=~(1<<d),a+=1;var m=32-jt(i)+d;if(30<m){var _=d-d%5;m=(c&(1<<_)-1).toString(32),c>>=_,d-=_,dr=1<<32-jt(i)+d|a<<d|c,fr=m+n}else dr=1<<m|a<<d|c,fr=n}function zc(n){n.return!==null&&(zi(n,1),ip(n,1,0))}function Bc(n){for(;n===Dl;)Dl=zs[--Bs],zs[Bs]=null,Vl=zs[--Bs],zs[Bs]=null;for(;n===ji;)ji=dn[--fn],dn[fn]=null,fr=dn[--fn],dn[fn]=null,dr=dn[--fn],dn[fn]=null}var sn=null,on=null,Xe=!1,Nn=null;function sp(n,i){var a=yn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function op(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,sn=n,on=qr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,sn=n,on=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ji!==null?{id:dr,overflow:fr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=yn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,sn=n,on=null,!0):!1;default:return!1}}function $c(n){return(n.mode&1)!==0&&(n.flags&128)===0}function qc(n){if(Xe){var i=on;if(i){var a=i;if(!op(n,i)){if($c(n))throw Error(t(418));i=qr(a.nextSibling);var c=sn;i&&op(n,i)?sp(c,a):(n.flags=n.flags&-4097|2,Xe=!1,sn=n)}}else{if($c(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,sn=n}}}function ap(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sn=n}function Ol(n){if(n!==sn)return!1;if(!Xe)return ap(n),Xe=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Lc(n.type,n.memoizedProps)),i&&(i=on)){if($c(n))throw lp(),Error(t(418));for(;i;)sp(n,i),i=qr(i.nextSibling)}if(ap(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){on=qr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}on=null}}else on=sn?qr(n.stateNode.nextSibling):null;return!0}function lp(){for(var n=on;n;)n=qr(n.nextSibling)}function $s(){on=sn=null,Xe=!1}function Hc(n){Nn===null?Nn=[n]:Nn.push(n)}var ww=Ee.ReactCurrentBatchConfig;function aa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(_){var I=d.refs;_===null?delete I[m]:I[m]=_},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ll(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function up(n){var i=n._init;return i(n._payload)}function cp(n){function i(M,x){if(n){var U=M.deletions;U===null?(M.deletions=[x],M.flags|=16):U.push(x)}}function a(M,x){if(!n)return null;for(;x!==null;)i(M,x),x=x.sibling;return null}function c(M,x){for(M=new Map;x!==null;)x.key!==null?M.set(x.key,x):M.set(x.index,x),x=x.sibling;return M}function d(M,x){return M=ti(M,x),M.index=0,M.sibling=null,M}function m(M,x,U){return M.index=U,n?(U=M.alternate,U!==null?(U=U.index,U<x?(M.flags|=2,x):U):(M.flags|=2,x)):(M.flags|=1048576,x)}function _(M){return n&&M.alternate===null&&(M.flags|=2),M}function I(M,x,U,Y){return x===null||x.tag!==6?(x=bh(U,M.mode,Y),x.return=M,x):(x=d(x,U),x.return=M,x)}function P(M,x,U,Y){var ae=U.type;return ae===C?K(M,x,U.props.children,Y,U.key):x!==null&&(x.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===xt&&up(ae)===x.type)?(Y=d(x,U.props),Y.ref=aa(M,x,U),Y.return=M,Y):(Y=su(U.type,U.key,U.props,null,M.mode,Y),Y.ref=aa(M,x,U),Y.return=M,Y)}function F(M,x,U,Y){return x===null||x.tag!==4||x.stateNode.containerInfo!==U.containerInfo||x.stateNode.implementation!==U.implementation?(x=Mh(U,M.mode,Y),x.return=M,x):(x=d(x,U.children||[]),x.return=M,x)}function K(M,x,U,Y,ae){return x===null||x.tag!==7?(x=Qi(U,M.mode,Y,ae),x.return=M,x):(x=d(x,U),x.return=M,x)}function X(M,x,U){if(typeof x=="string"&&x!==""||typeof x=="number")return x=bh(""+x,M.mode,U),x.return=M,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case He:return U=su(x.type,x.key,x.props,null,M.mode,U),U.ref=aa(M,null,x),U.return=M,U;case Ie:return x=Mh(x,M.mode,U),x.return=M,x;case xt:var Y=x._init;return X(M,Y(x._payload),U)}if(tr(x)||ce(x))return x=Qi(x,M.mode,U,null),x.return=M,x;Ll(M,x)}return null}function W(M,x,U,Y){var ae=x!==null?x.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return ae!==null?null:I(M,x,""+U,Y);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case He:return U.key===ae?P(M,x,U,Y):null;case Ie:return U.key===ae?F(M,x,U,Y):null;case xt:return ae=U._init,W(M,x,ae(U._payload),Y)}if(tr(U)||ce(U))return ae!==null?null:K(M,x,U,Y,null);Ll(M,U)}return null}function ee(M,x,U,Y,ae){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(U)||null,I(x,M,""+Y,ae);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case He:return M=M.get(Y.key===null?U:Y.key)||null,P(x,M,Y,ae);case Ie:return M=M.get(Y.key===null?U:Y.key)||null,F(x,M,Y,ae);case xt:var he=Y._init;return ee(M,x,U,he(Y._payload),ae)}if(tr(Y)||ce(Y))return M=M.get(U)||null,K(x,M,Y,ae,null);Ll(x,Y)}return null}function ie(M,x,U,Y){for(var ae=null,he=null,de=x,ge=x=0,wt=null;de!==null&&ge<U.length;ge++){de.index>ge?(wt=de,de=null):wt=de.sibling;var Oe=W(M,de,U[ge],Y);if(Oe===null){de===null&&(de=wt);break}n&&de&&Oe.alternate===null&&i(M,de),x=m(Oe,x,ge),he===null?ae=Oe:he.sibling=Oe,he=Oe,de=wt}if(ge===U.length)return a(M,de),Xe&&zi(M,ge),ae;if(de===null){for(;ge<U.length;ge++)de=X(M,U[ge],Y),de!==null&&(x=m(de,x,ge),he===null?ae=de:he.sibling=de,he=de);return Xe&&zi(M,ge),ae}for(de=c(M,de);ge<U.length;ge++)wt=ee(de,M,ge,U[ge],Y),wt!==null&&(n&&wt.alternate!==null&&de.delete(wt.key===null?ge:wt.key),x=m(wt,x,ge),he===null?ae=wt:he.sibling=wt,he=wt);return n&&de.forEach(function(ni){return i(M,ni)}),Xe&&zi(M,ge),ae}function oe(M,x,U,Y){var ae=ce(U);if(typeof ae!="function")throw Error(t(150));if(U=ae.call(U),U==null)throw Error(t(151));for(var he=ae=null,de=x,ge=x=0,wt=null,Oe=U.next();de!==null&&!Oe.done;ge++,Oe=U.next()){de.index>ge?(wt=de,de=null):wt=de.sibling;var ni=W(M,de,Oe.value,Y);if(ni===null){de===null&&(de=wt);break}n&&de&&ni.alternate===null&&i(M,de),x=m(ni,x,ge),he===null?ae=ni:he.sibling=ni,he=ni,de=wt}if(Oe.done)return a(M,de),Xe&&zi(M,ge),ae;if(de===null){for(;!Oe.done;ge++,Oe=U.next())Oe=X(M,Oe.value,Y),Oe!==null&&(x=m(Oe,x,ge),he===null?ae=Oe:he.sibling=Oe,he=Oe);return Xe&&zi(M,ge),ae}for(de=c(M,de);!Oe.done;ge++,Oe=U.next())Oe=ee(de,M,ge,Oe.value,Y),Oe!==null&&(n&&Oe.alternate!==null&&de.delete(Oe.key===null?ge:Oe.key),x=m(Oe,x,ge),he===null?ae=Oe:he.sibling=Oe,he=Oe);return n&&de.forEach(function(Zw){return i(M,Zw)}),Xe&&zi(M,ge),ae}function rt(M,x,U,Y){if(typeof U=="object"&&U!==null&&U.type===C&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case He:e:{for(var ae=U.key,he=x;he!==null;){if(he.key===ae){if(ae=U.type,ae===C){if(he.tag===7){a(M,he.sibling),x=d(he,U.props.children),x.return=M,M=x;break e}}else if(he.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===xt&&up(ae)===he.type){a(M,he.sibling),x=d(he,U.props),x.ref=aa(M,he,U),x.return=M,M=x;break e}a(M,he);break}else i(M,he);he=he.sibling}U.type===C?(x=Qi(U.props.children,M.mode,Y,U.key),x.return=M,M=x):(Y=su(U.type,U.key,U.props,null,M.mode,Y),Y.ref=aa(M,x,U),Y.return=M,M=Y)}return _(M);case Ie:e:{for(he=U.key;x!==null;){if(x.key===he)if(x.tag===4&&x.stateNode.containerInfo===U.containerInfo&&x.stateNode.implementation===U.implementation){a(M,x.sibling),x=d(x,U.children||[]),x.return=M,M=x;break e}else{a(M,x);break}else i(M,x);x=x.sibling}x=Mh(U,M.mode,Y),x.return=M,M=x}return _(M);case xt:return he=U._init,rt(M,x,he(U._payload),Y)}if(tr(U))return ie(M,x,U,Y);if(ce(U))return oe(M,x,U,Y);Ll(M,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,x!==null&&x.tag===6?(a(M,x.sibling),x=d(x,U),x.return=M,M=x):(a(M,x),x=bh(U,M.mode,Y),x.return=M,M=x),_(M)):a(M,x)}return rt}var qs=cp(!0),hp=cp(!1),bl=Hr(null),Ml=null,Hs=null,Wc=null;function Kc(){Wc=Hs=Ml=null}function Gc(n){var i=bl.current;Ke(bl),n._currentValue=i}function Qc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ws(n,i){Ml=n,Wc=Hs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Qt=!0),n.firstContext=null)}function pn(n){var i=n._currentValue;if(Wc!==n)if(n={context:n,memoizedValue:i,next:null},Hs===null){if(Ml===null)throw Error(t(308));Hs=n,Ml.dependencies={lanes:0,firstContext:n}}else Hs=Hs.next=n;return i}var Bi=null;function Xc(n){Bi===null?Bi=[n]:Bi.push(n)}function dp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Xc(i)):(a.next=d.next,d.next=a),i.interleaved=a,pr(n,c)}function pr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Gr=!1;function Yc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function mr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Qr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Ve&2){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,pr(n,a)}return d=c.interleaved,d===null?(i.next=i,Xc(c)):(i.next=d.next,d.next=i),c.interleaved=i,pr(n,a)}function Ul(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ur(n,a)}}function pp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=_:m=m.next=_,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Fl(n,i,a,c){var d=n.updateQueue;Gr=!1;var m=d.firstBaseUpdate,_=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var P=I,F=P.next;P.next=null,_===null?m=F:_.next=F,_=P;var K=n.alternate;K!==null&&(K=K.updateQueue,I=K.lastBaseUpdate,I!==_&&(I===null?K.firstBaseUpdate=F:I.next=F,K.lastBaseUpdate=P))}if(m!==null){var X=d.baseState;_=0,K=F=P=null,I=m;do{var W=I.lane,ee=I.eventTime;if((c&W)===W){K!==null&&(K=K.next={eventTime:ee,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ie=n,oe=I;switch(W=i,ee=a,oe.tag){case 1:if(ie=oe.payload,typeof ie=="function"){X=ie.call(ee,X,W);break e}X=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=oe.payload,W=typeof ie=="function"?ie.call(ee,X,W):ie,W==null)break e;X=te({},X,W);break e;case 2:Gr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[I]:W.push(I))}else ee={eventTime:ee,lane:W,tag:I.tag,payload:I.payload,callback:I.callback,next:null},K===null?(F=K=ee,P=X):K=K.next=ee,_|=W;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;W=I,I=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(K===null&&(P=X),d.baseState=P,d.firstBaseUpdate=F,d.lastBaseUpdate=K,i=d.shared.interleaved,i!==null){d=i;do _|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Hi|=_,n.lanes=_,n.memoizedState=X}}function mp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var la={},Hn=Hr(la),ua=Hr(la),ca=Hr(la);function $i(n){if(n===la)throw Error(t(174));return n}function Jc(n,i){switch(qe(ca,i),qe(ua,n),qe(Hn,la),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ct(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ct(i,n)}Ke(Hn),qe(Hn,i)}function Ks(){Ke(Hn),Ke(ua),Ke(ca)}function gp(n){$i(ca.current);var i=$i(Hn.current),a=ct(i,n.type);i!==a&&(qe(ua,n),qe(Hn,a))}function Zc(n){ua.current===n&&(Ke(Hn),Ke(ua))}var Ye=Hr(0);function jl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var eh=[];function th(){for(var n=0;n<eh.length;n++)eh[n]._workInProgressVersionPrimary=null;eh.length=0}var zl=Ee.ReactCurrentDispatcher,nh=Ee.ReactCurrentBatchConfig,qi=0,Je=null,dt=null,_t=null,Bl=!1,ha=!1,da=0,Ew=0;function Vt(){throw Error(t(321))}function rh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!kn(n[a],i[a]))return!1;return!0}function ih(n,i,a,c,d,m){if(qi=m,Je=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,zl.current=n===null||n.memoizedState===null?Aw:Rw,n=a(c,d),ha){m=0;do{if(ha=!1,da=0,25<=m)throw Error(t(301));m+=1,_t=dt=null,i.updateQueue=null,zl.current=Cw,n=a(c,d)}while(ha)}if(zl.current=Hl,i=dt!==null&&dt.next!==null,qi=0,_t=dt=Je=null,Bl=!1,i)throw Error(t(300));return n}function sh(){var n=da!==0;return da=0,n}function Wn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Je.memoizedState=_t=n:_t=_t.next=n,_t}function mn(){if(dt===null){var n=Je.alternate;n=n!==null?n.memoizedState:null}else n=dt.next;var i=_t===null?Je.memoizedState:_t.next;if(i!==null)_t=i,dt=n;else{if(n===null)throw Error(t(310));dt=n,n={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},_t===null?Je.memoizedState=_t=n:_t=_t.next=n}return _t}function fa(n,i){return typeof i=="function"?i(n):i}function oh(n){var i=mn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=dt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var _=d.next;d.next=m.next,m.next=_}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var I=_=null,P=null,F=m;do{var K=F.lane;if((qi&K)===K)P!==null&&(P=P.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),c=F.hasEagerState?F.eagerState:n(c,F.action);else{var X={lane:K,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};P===null?(I=P=X,_=c):P=P.next=X,Je.lanes|=K,Hi|=K}F=F.next}while(F!==null&&F!==m);P===null?_=c:P.next=I,kn(c,i.memoizedState)||(Qt=!0),i.memoizedState=c,i.baseState=_,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Je.lanes|=m,Hi|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function ah(n){var i=mn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do m=n(m,_.action),_=_.next;while(_!==d);kn(m,i.memoizedState)||(Qt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function yp(){}function _p(n,i){var a=Je,c=mn(),d=i(),m=!kn(c.memoizedState,d);if(m&&(c.memoizedState=d,Qt=!0),c=c.queue,lh(Ep.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||_t!==null&&_t.memoizedState.tag&1){if(a.flags|=2048,pa(9,wp.bind(null,a,c,d,i),void 0,null),vt===null)throw Error(t(349));qi&30||vp(a,i,d)}return d}function vp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Je.updateQueue,i===null?(i={lastEffect:null,stores:null},Je.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function wp(n,i,a,c){i.value=a,i.getSnapshot=c,Tp(i)&&Ip(n)}function Ep(n,i,a){return a(function(){Tp(i)&&Ip(n)})}function Tp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!kn(n,a)}catch{return!0}}function Ip(n){var i=pr(n,1);i!==null&&On(i,n,1,-1)}function Sp(n){var i=Wn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:n},i.queue=n,n=n.dispatch=Sw.bind(null,Je,n),[i.memoizedState,n]}function pa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Je.updateQueue,i===null?(i={lastEffect:null,stores:null},Je.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Ap(){return mn().memoizedState}function $l(n,i,a,c){var d=Wn();Je.flags|=n,d.memoizedState=pa(1|i,a,void 0,c===void 0?null:c)}function ql(n,i,a,c){var d=mn();c=c===void 0?null:c;var m=void 0;if(dt!==null){var _=dt.memoizedState;if(m=_.destroy,c!==null&&rh(c,_.deps)){d.memoizedState=pa(i,a,m,c);return}}Je.flags|=n,d.memoizedState=pa(1|i,a,m,c)}function Rp(n,i){return $l(8390656,8,n,i)}function lh(n,i){return ql(2048,8,n,i)}function Cp(n,i){return ql(4,2,n,i)}function Pp(n,i){return ql(4,4,n,i)}function kp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Np(n,i,a){return a=a!=null?a.concat([n]):null,ql(4,4,kp.bind(null,i,n),a)}function uh(){}function xp(n,i){var a=mn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&rh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Dp(n,i){var a=mn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&rh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Vp(n,i,a){return qi&21?(kn(a,i)||(a=Vi(),Je.lanes|=a,Hi|=a,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Qt=!0),n.memoizedState=a)}function Tw(n,i){var a=ke;ke=a!==0&&4>a?a:4,n(!0);var c=nh.transition;nh.transition={};try{n(!1),i()}finally{ke=a,nh.transition=c}}function Op(){return mn().memoizedState}function Iw(n,i,a){var c=Zr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Lp(n))bp(i,a);else if(a=dp(n,i,a,c),a!==null){var d=$t();On(a,n,c,d),Mp(a,i,c)}}function Sw(n,i,a){var c=Zr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lp(n))bp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var _=i.lastRenderedState,I=m(_,a);if(d.hasEagerState=!0,d.eagerState=I,kn(I,_)){var P=i.interleaved;P===null?(d.next=d,Xc(i)):(d.next=P.next,P.next=d),i.interleaved=d;return}}catch{}finally{}a=dp(n,i,d,c),a!==null&&(d=$t(),On(a,n,c,d),Mp(a,i,c))}}function Lp(n){var i=n.alternate;return n===Je||i!==null&&i===Je}function bp(n,i){ha=Bl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Mp(n,i,a){if(a&4194240){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ur(n,a)}}var Hl={readContext:pn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},Aw={readContext:pn,useCallback:function(n,i){return Wn().memoizedState=[n,i===void 0?null:i],n},useContext:pn,useEffect:Rp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,$l(4194308,4,kp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return $l(4194308,4,n,i)},useInsertionEffect:function(n,i){return $l(4,2,n,i)},useMemo:function(n,i){var a=Wn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Wn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Iw.bind(null,Je,n),[c.memoizedState,n]},useRef:function(n){var i=Wn();return n={current:n},i.memoizedState=n},useState:Sp,useDebugValue:uh,useDeferredValue:function(n){return Wn().memoizedState=n},useTransition:function(){var n=Sp(!1),i=n[0];return n=Tw.bind(null,n[1]),Wn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Je,d=Wn();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),vt===null)throw Error(t(349));qi&30||vp(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Rp(Ep.bind(null,c,m,n),[n]),c.flags|=2048,pa(9,wp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Wn(),i=vt.identifierPrefix;if(Xe){var a=fr,c=dr;a=(c&~(1<<32-jt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=da++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Ew++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Rw={readContext:pn,useCallback:xp,useContext:pn,useEffect:lh,useImperativeHandle:Np,useInsertionEffect:Cp,useLayoutEffect:Pp,useMemo:Dp,useReducer:oh,useRef:Ap,useState:function(){return oh(fa)},useDebugValue:uh,useDeferredValue:function(n){var i=mn();return Vp(i,dt.memoizedState,n)},useTransition:function(){var n=oh(fa)[0],i=mn().memoizedState;return[n,i]},useMutableSource:yp,useSyncExternalStore:_p,useId:Op,unstable_isNewReconciler:!1},Cw={readContext:pn,useCallback:xp,useContext:pn,useEffect:lh,useImperativeHandle:Np,useInsertionEffect:Cp,useLayoutEffect:Pp,useMemo:Dp,useReducer:ah,useRef:Ap,useState:function(){return ah(fa)},useDebugValue:uh,useDeferredValue:function(n){var i=mn();return dt===null?i.memoizedState=n:Vp(i,dt.memoizedState,n)},useTransition:function(){var n=ah(fa)[0],i=mn().memoizedState;return[n,i]},useMutableSource:yp,useSyncExternalStore:_p,useId:Op,unstable_isNewReconciler:!1};function xn(n,i){if(n&&n.defaultProps){i=te({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function ch(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:te({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Wl={isMounted:function(n){return(n=n._reactInternals)?Tn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=$t(),d=Zr(n),m=mr(c,d);m.payload=i,a!=null&&(m.callback=a),i=Qr(n,m,d),i!==null&&(On(i,n,d,c),Ul(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=$t(),d=Zr(n),m=mr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Qr(n,m,d),i!==null&&(On(i,n,d,c),Ul(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=$t(),c=Zr(n),d=mr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Qr(n,d,c),i!==null&&(On(i,n,c,a),Ul(i,n,c))}};function Up(n,i,a,c,d,m,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,_):i.prototype&&i.prototype.isPureReactComponent?!ea(a,c)||!ea(d,m):!0}function Fp(n,i,a){var c=!1,d=Wr,m=i.contextType;return typeof m=="object"&&m!==null?m=pn(m):(d=Gt(i)?Fi:Dt.current,c=i.contextTypes,m=(c=c!=null)?js(n,d):Wr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Wl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function jp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Wl.enqueueReplaceState(i,i.state,null)}function hh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Yc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=pn(m):(m=Gt(i)?Fi:Dt.current,d.context=js(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(ch(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Wl.enqueueReplaceState(d,d.state,null),Fl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Gs(n,i){try{var a="",c=i;do a+=Se(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function dh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function fh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Pw=typeof WeakMap=="function"?WeakMap:Map;function zp(n,i,a){a=mr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Zl||(Zl=!0,Ph=c),fh(n,i)},a}function Bp(n,i,a){a=mr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){fh(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){fh(n,i),typeof c!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var _=i.stack;this.componentDidCatch(i.value,{componentStack:_!==null?_:""})}),a}function $p(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Pw;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Bw.bind(null,n,i,a),i.then(n,n))}function qp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Hp(n,i,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=mr(-1,1),i.tag=2,Qr(a,i,1))),a.lanes|=1),n)}var kw=Ee.ReactCurrentOwner,Qt=!1;function Bt(n,i,a,c){i.child=n===null?hp(i,null,a,c):qs(i,n.child,a,c)}function Wp(n,i,a,c,d){a=a.render;var m=i.ref;return Ws(i,d),c=ih(n,i,a,c,m,d),a=sh(),n!==null&&!Qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,gr(n,i,d)):(Xe&&a&&zc(i),i.flags|=1,Bt(n,i,c,d),i.child)}function Kp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Lh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Gp(n,i,m,c,d)):(n=su(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!(n.lanes&d)){var _=m.memoizedProps;if(a=a.compare,a=a!==null?a:ea,a(_,c)&&n.ref===i.ref)return gr(n,i,d)}return i.flags|=1,n=ti(m,c),n.ref=i.ref,n.return=i,i.child=n}function Gp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(ea(m,c)&&n.ref===i.ref)if(Qt=!1,i.pendingProps=c=m,(n.lanes&d)!==0)n.flags&131072&&(Qt=!0);else return i.lanes=n.lanes,gr(n,i,d)}return ph(n,i,a,c,d)}function Qp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(Xs,an),an|=a;else{if(!(a&1073741824))return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qe(Xs,an),an|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,qe(Xs,an),an|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,qe(Xs,an),an|=c;return Bt(n,i,d,a),i.child}function Xp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function ph(n,i,a,c,d){var m=Gt(a)?Fi:Dt.current;return m=js(i,m),Ws(i,d),a=ih(n,i,a,c,m,d),c=sh(),n!==null&&!Qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,gr(n,i,d)):(Xe&&c&&zc(i),i.flags|=1,Bt(n,i,a,d),i.child)}function Yp(n,i,a,c,d){if(Gt(a)){var m=!0;Nl(i)}else m=!1;if(Ws(i,d),i.stateNode===null)Gl(n,i),Fp(i,a,c),hh(i,a,c,d),c=!0;else if(n===null){var _=i.stateNode,I=i.memoizedProps;_.props=I;var P=_.context,F=a.contextType;typeof F=="object"&&F!==null?F=pn(F):(F=Gt(a)?Fi:Dt.current,F=js(i,F));var K=a.getDerivedStateFromProps,X=typeof K=="function"||typeof _.getSnapshotBeforeUpdate=="function";X||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==c||P!==F)&&jp(i,_,c,F),Gr=!1;var W=i.memoizedState;_.state=W,Fl(i,c,_,d),P=i.memoizedState,I!==c||W!==P||Kt.current||Gr?(typeof K=="function"&&(ch(i,a,K,c),P=i.memoizedState),(I=Gr||Up(i,a,I,c,W,P,F))?(X||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),_.props=c,_.state=P,_.context=F,c=I):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{_=i.stateNode,fp(n,i),I=i.memoizedProps,F=i.type===i.elementType?I:xn(i.type,I),_.props=F,X=i.pendingProps,W=_.context,P=a.contextType,typeof P=="object"&&P!==null?P=pn(P):(P=Gt(a)?Fi:Dt.current,P=js(i,P));var ee=a.getDerivedStateFromProps;(K=typeof ee=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==X||W!==P)&&jp(i,_,c,P),Gr=!1,W=i.memoizedState,_.state=W,Fl(i,c,_,d);var ie=i.memoizedState;I!==X||W!==ie||Kt.current||Gr?(typeof ee=="function"&&(ch(i,a,ee,c),ie=i.memoizedState),(F=Gr||Up(i,a,F,c,W,ie,P)||!1)?(K||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ie,P),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ie,P)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ie),_.props=c,_.state=ie,_.context=P,c=F):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(i.flags|=1024),c=!1)}return mh(n,i,a,c,m,d)}function mh(n,i,a,c,d,m){Xp(n,i);var _=(i.flags&128)!==0;if(!c&&!_)return d&&np(i,a,!1),gr(n,i,m);c=i.stateNode,kw.current=i;var I=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&_?(i.child=qs(i,n.child,null,m),i.child=qs(i,null,I,m)):Bt(n,i,I,m),i.memoizedState=c.state,d&&np(i,a,!0),i.child}function Jp(n){var i=n.stateNode;i.pendingContext?ep(n,i.pendingContext,i.pendingContext!==i.context):i.context&&ep(n,i.context,!1),Jc(n,i.containerInfo)}function Zp(n,i,a,c,d){return $s(),Hc(d),i.flags|=256,Bt(n,i,a,c),i.child}var gh={dehydrated:null,treeContext:null,retryLane:0};function yh(n){return{baseLanes:n,cachePool:null,transitions:null}}function em(n,i,a){var c=i.pendingProps,d=Ye.current,m=!1,_=(i.flags&128)!==0,I;if((I=_)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Ye,d&1),n===null)return qc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(_=c.children,n=c.fallback,m?(c=i.mode,m=i.child,_={mode:"hidden",children:_},!(c&1)&&m!==null?(m.childLanes=0,m.pendingProps=_):m=ou(_,c,0,null),n=Qi(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=yh(a),i.memoizedState=gh,n):_h(i,_));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return Nw(n,i,_,c,I,d,a);if(m){m=c.fallback,_=i.mode,d=n.child,I=d.sibling;var P={mode:"hidden",children:c.children};return!(_&1)&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=ti(d,P),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=ti(I,m):(m=Qi(m,_,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,_=n.child.memoizedState,_=_===null?yh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},m.memoizedState=_,m.childLanes=n.childLanes&~a,i.memoizedState=gh,c}return m=n.child,n=m.sibling,c=ti(m,{mode:"visible",children:c.children}),!(i.mode&1)&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function _h(n,i){return i=ou({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Kl(n,i,a,c){return c!==null&&Hc(c),qs(i,n.child,null,a),n=_h(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Nw(n,i,a,c,d,m,_){if(a)return i.flags&256?(i.flags&=-257,c=dh(Error(t(422))),Kl(n,i,_,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=ou({mode:"visible",children:c.children},d,0,null),m=Qi(m,d,_,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,i.mode&1&&qs(i,n.child,null,_),i.child.memoizedState=yh(_),i.memoizedState=gh,m);if(!(i.mode&1))return Kl(n,i,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(t(419)),c=dh(m,c,void 0),Kl(n,i,_,c)}if(I=(_&n.childLanes)!==0,Qt||I){if(c=vt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|_)?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,pr(n,d),On(c,n,d,-1))}return Oh(),c=dh(Error(t(421))),Kl(n,i,_,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=$w.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,on=qr(d.nextSibling),sn=i,Xe=!0,Nn=null,n!==null&&(dn[fn++]=dr,dn[fn++]=fr,dn[fn++]=ji,dr=n.id,fr=n.overflow,ji=i),i=_h(i,c.children),i.flags|=4096,i)}function tm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Qc(n.return,i,a)}function vh(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function nm(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Bt(n,i,c.children,a),c=Ye.current,c&2)c=c&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&tm(n,a,i);else if(n.tag===19)tm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Ye,c),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&jl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),vh(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&jl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}vh(i,!0,a,null,m);break;case"together":vh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Gl(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function gr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Hi|=i.lanes,!(a&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ti(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ti(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function xw(n,i,a){switch(i.tag){case 3:Jp(i),$s();break;case 5:gp(i);break;case 1:Gt(i.type)&&Nl(i);break;case 4:Jc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;qe(bl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(qe(Ye,Ye.current&1),i.flags|=128,null):a&i.child.childLanes?em(n,i,a):(qe(Ye,Ye.current&1),n=gr(n,i,a),n!==null?n.sibling:null);qe(Ye,Ye.current&1);break;case 19:if(c=(a&i.childLanes)!==0,n.flags&128){if(c)return nm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Ye,Ye.current),c)break;return null;case 22:case 23:return i.lanes=0,Qp(n,i,a)}return gr(n,i,a)}var rm,wh,im,sm;rm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},wh=function(){},im=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,$i(Hn.current);var m=null;switch(a){case"input":d=Ti(n,d),c=Ti(n,c),m=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),m=[];break;case"textarea":d=ko(n,d),c=ko(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Cl)}Lo(a,c);var _;a=null;for(F in d)if(!c.hasOwnProperty(F)&&d.hasOwnProperty(F)&&d[F]!=null)if(F==="style"){var I=d[F];for(_ in I)I.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(o.hasOwnProperty(F)?m||(m=[]):(m=m||[]).push(F,null));for(F in c){var P=c[F];if(I=d!=null?d[F]:void 0,c.hasOwnProperty(F)&&P!==I&&(P!=null||I!=null))if(F==="style")if(I){for(_ in I)!I.hasOwnProperty(_)||P&&P.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in P)P.hasOwnProperty(_)&&I[_]!==P[_]&&(a||(a={}),a[_]=P[_])}else a||(m||(m=[]),m.push(F,a)),a=P;else F==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,I=I?I.__html:void 0,P!=null&&I!==P&&(m=m||[]).push(F,P)):F==="children"?typeof P!="string"&&typeof P!="number"||(m=m||[]).push(F,""+P):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(o.hasOwnProperty(F)?(P!=null&&F==="onScroll"&&We("scroll",n),m||I===P||(m=[])):(m=m||[]).push(F,P))}a&&(m=m||[]).push("style",a);var F=m;(i.updateQueue=F)&&(i.flags|=4)}},sm=function(n,i,a,c){a!==c&&(i.flags|=4)};function ma(n,i){if(!Xe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ot(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Dw(n,i,a){var c=i.pendingProps;switch(Bc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(i),null;case 1:return Gt(i.type)&&kl(),Ot(i),null;case 3:return c=i.stateNode,Ks(),Ke(Kt),Ke(Dt),th(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ol(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Nn!==null&&(xh(Nn),Nn=null))),wh(n,i),Ot(i),null;case 5:Zc(i);var d=$i(ca.current);if(a=i.type,n!==null&&i.stateNode!=null)im(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Ot(i),null}if(n=$i(Hn.current),Ol(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[qn]=i,c[sa]=m,n=(i.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<na.length;d++)We(na[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":ls(c,m),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},We("invalid",c);break;case"textarea":cs(c,m),We("invalid",c)}Lo(a,m),d=null;for(var _ in m)if(m.hasOwnProperty(_)){var I=m[_];_==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&Rl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Rl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(_)&&I!=null&&_==="onScroll"&&We("scroll",c)}switch(a){case"input":er(c),Ja(c,m,!0);break;case"textarea":er(c),No(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Cl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ut(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[qn]=i,n[sa]=c,rm(n,i,!1,!1),i.stateNode=n;e:{switch(_=bo(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<na.length;d++)We(na[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":ls(n,c),d=Ti(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),We("invalid",n);break;case"textarea":cs(n,c),d=ko(n,c),We("invalid",n);break;default:d=c}Lo(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var P=I[m];m==="style"?Vo(n,P):m==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&xo(n,P)):m==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Vr(n,P):typeof P=="number"&&Vr(n,""+P):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?P!=null&&m==="onScroll"&&We("scroll",n):P!=null&&pe(n,m,P,_))}switch(a){case"input":er(n),Ja(n,c,!1);break;case"textarea":er(n),No(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?nr(n,!!c.multiple,m,!1):c.defaultValue!=null&&nr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Cl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Ot(i),null;case 6:if(n&&i.stateNode!=null)sm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=$i(ca.current),$i(Hn.current),Ol(i)){if(c=i.stateNode,a=i.memoizedProps,c[qn]=i,(m=c.nodeValue!==a)&&(n=sn,n!==null))switch(n.tag){case 3:Rl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Rl(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[qn]=i,i.stateNode=c}return Ot(i),null;case 13:if(Ke(Ye),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&on!==null&&i.mode&1&&!(i.flags&128))lp(),$s(),i.flags|=98560,m=!1;else if(m=Ol(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[qn]=i}else $s(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;Ot(i),m=!1}else Nn!==null&&(xh(Nn),Nn=null),m=!0;if(!m)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,i.mode&1&&(n===null||Ye.current&1?ft===0&&(ft=3):Oh())),i.updateQueue!==null&&(i.flags|=4),Ot(i),null);case 4:return Ks(),wh(n,i),n===null&&ra(i.stateNode.containerInfo),Ot(i),null;case 10:return Gc(i.type._context),Ot(i),null;case 17:return Gt(i.type)&&kl(),Ot(i),null;case 19:if(Ke(Ye),m=i.memoizedState,m===null)return Ot(i),null;if(c=(i.flags&128)!==0,_=m.rendering,_===null)if(c)ma(m,!1);else{if(ft!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(_=jl(n),_!==null){for(i.flags|=128,ma(m,!1),c=_.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,_=m.alternate,_===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=_.childLanes,m.lanes=_.lanes,m.child=_.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=_.memoizedProps,m.memoizedState=_.memoizedState,m.updateQueue=_.updateQueue,m.type=_.type,n=_.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Ye,Ye.current&1|2),i.child}n=n.sibling}m.tail!==null&&$e()>Ys&&(i.flags|=128,c=!0,ma(m,!1),i.lanes=4194304)}else{if(!c)if(n=jl(_),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ma(m,!0),m.tail===null&&m.tailMode==="hidden"&&!_.alternate&&!Xe)return Ot(i),null}else 2*$e()-m.renderingStartTime>Ys&&a!==1073741824&&(i.flags|=128,c=!0,ma(m,!1),i.lanes=4194304);m.isBackwards?(_.sibling=i.child,i.child=_):(a=m.last,a!==null?a.sibling=_:i.child=_,m.last=_)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=$e(),i.sibling=null,a=Ye.current,qe(Ye,c?a&1|2:a&1),i):(Ot(i),null);case 22:case 23:return Vh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&i.mode&1?an&1073741824&&(Ot(i),i.subtreeFlags&6&&(i.flags|=8192)):Ot(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Vw(n,i){switch(Bc(i),i.tag){case 1:return Gt(i.type)&&kl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ks(),Ke(Kt),Ke(Dt),th(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Zc(i),null;case 13:if(Ke(Ye),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));$s()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ke(Ye),null;case 4:return Ks(),null;case 10:return Gc(i.type._context),null;case 22:case 23:return Vh(),null;case 24:return null;default:return null}}var Ql=!1,Lt=!1,Ow=typeof WeakSet=="function"?WeakSet:Set,re=null;function Qs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){et(n,i,c)}else a.current=null}function Eh(n,i,a){try{a()}catch(c){et(n,i,c)}}var om=!1;function Lw(n,i){if(Vc=zr,n=Uf(),Ac(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var _=0,I=-1,P=-1,F=0,K=0,X=n,W=null;t:for(;;){for(var ee;X!==a||d!==0&&X.nodeType!==3||(I=_+d),X!==m||c!==0&&X.nodeType!==3||(P=_+c),X.nodeType===3&&(_+=X.nodeValue.length),(ee=X.firstChild)!==null;)W=X,X=ee;for(;;){if(X===n)break t;if(W===a&&++F===d&&(I=_),W===m&&++K===c&&(P=_),(ee=X.nextSibling)!==null)break;X=W,W=X.parentNode}X=ee}a=I===-1||P===-1?null:{start:I,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Oc={focusedElem:n,selectionRange:a},zr=!1,re=i;re!==null;)if(i=re,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,re=n;else for(;re!==null;){i=re;try{var ie=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var oe=ie.memoizedProps,rt=ie.memoizedState,M=i.stateNode,x=M.getSnapshotBeforeUpdate(i.elementType===i.type?oe:xn(i.type,oe),rt);M.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var U=i.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){et(i,i.return,Y)}if(n=i.sibling,n!==null){n.return=i.return,re=n;break}re=i.return}return ie=om,om=!1,ie}function ga(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Eh(i,a,m)}d=d.next}while(d!==c)}}function Xl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Th(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function am(n){var i=n.alternate;i!==null&&(n.alternate=null,am(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[qn],delete i[sa],delete i[Uc],delete i[yw],delete i[_w])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function lm(n){return n.tag===5||n.tag===3||n.tag===4}function um(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||lm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ih(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Cl));else if(c!==4&&(n=n.child,n!==null))for(Ih(n,i,a),n=n.sibling;n!==null;)Ih(n,i,a),n=n.sibling}function Sh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Sh(n,i,a),n=n.sibling;n!==null;)Sh(n,i,a),n=n.sibling}var St=null,Dn=!1;function Xr(n,i,a){for(a=a.child;a!==null;)cm(n,i,a),a=a.sibling}function cm(n,i,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(xi,a)}catch{}switch(a.tag){case 5:Lt||Qs(a,i);case 6:var c=St,d=Dn;St=null,Xr(n,i,a),St=c,Dn=d,St!==null&&(Dn?(n=St,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):St.removeChild(a.stateNode));break;case 18:St!==null&&(Dn?(n=St,a=a.stateNode,n.nodeType===8?Mc(n.parentNode,a):n.nodeType===1&&Mc(n,a),Cn(n)):Mc(St,a.stateNode));break;case 4:c=St,d=Dn,St=a.stateNode.containerInfo,Dn=!0,Xr(n,i,a),St=c,Dn=d;break;case 0:case 11:case 14:case 15:if(!Lt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,_=m.destroy;m=m.tag,_!==void 0&&(m&2||m&4)&&Eh(a,i,_),d=d.next}while(d!==c)}Xr(n,i,a);break;case 1:if(!Lt&&(Qs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){et(a,i,I)}Xr(n,i,a);break;case 21:Xr(n,i,a);break;case 22:a.mode&1?(Lt=(c=Lt)||a.memoizedState!==null,Xr(n,i,a),Lt=c):Xr(n,i,a);break;default:Xr(n,i,a)}}function hm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Ow),i.forEach(function(c){var d=qw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Vn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,_=i,I=_;e:for(;I!==null;){switch(I.tag){case 5:St=I.stateNode,Dn=!1;break e;case 3:St=I.stateNode.containerInfo,Dn=!0;break e;case 4:St=I.stateNode.containerInfo,Dn=!0;break e}I=I.return}if(St===null)throw Error(t(160));cm(m,_,d),St=null,Dn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(F){et(d,i,F)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)dm(i,n),i=i.sibling}function dm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vn(i,n),Kn(n),c&4){try{ga(3,n,n.return),Xl(3,n)}catch(oe){et(n,n.return,oe)}try{ga(5,n,n.return)}catch(oe){et(n,n.return,oe)}}break;case 1:Vn(i,n),Kn(n),c&512&&a!==null&&Qs(a,a.return);break;case 5:if(Vn(i,n),Kn(n),c&512&&a!==null&&Qs(a,a.return),n.flags&32){var d=n.stateNode;try{Vr(d,"")}catch(oe){et(n,n.return,oe)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,_=a!==null?a.memoizedProps:m,I=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&Co(d,m),bo(I,_);var F=bo(I,m);for(_=0;_<P.length;_+=2){var K=P[_],X=P[_+1];K==="style"?Vo(d,X):K==="dangerouslySetInnerHTML"?xo(d,X):K==="children"?Vr(d,X):pe(d,K,X,F)}switch(I){case"input":Po(d,m);break;case"textarea":hs(d,m);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ee=m.value;ee!=null?nr(d,!!m.multiple,ee,!1):W!==!!m.multiple&&(m.defaultValue!=null?nr(d,!!m.multiple,m.defaultValue,!0):nr(d,!!m.multiple,m.multiple?[]:"",!1))}d[sa]=m}catch(oe){et(n,n.return,oe)}}break;case 6:if(Vn(i,n),Kn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(oe){et(n,n.return,oe)}}break;case 3:if(Vn(i,n),Kn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Cn(i.containerInfo)}catch(oe){et(n,n.return,oe)}break;case 4:Vn(i,n),Kn(n);break;case 13:Vn(i,n),Kn(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Ch=$e())),c&4&&hm(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(Lt=(F=Lt)||K,Vn(i,n),Lt=F):Vn(i,n),Kn(n),c&8192){if(F=n.memoizedState!==null,(n.stateNode.isHidden=F)&&!K&&n.mode&1)for(re=n,K=n.child;K!==null;){for(X=re=K;re!==null;){switch(W=re,ee=W.child,W.tag){case 0:case 11:case 14:case 15:ga(4,W,W.return);break;case 1:Qs(W,W.return);var ie=W.stateNode;if(typeof ie.componentWillUnmount=="function"){c=W,a=W.return;try{i=c,ie.props=i.memoizedProps,ie.state=i.memoizedState,ie.componentWillUnmount()}catch(oe){et(c,a,oe)}}break;case 5:Qs(W,W.return);break;case 22:if(W.memoizedState!==null){mm(X);continue}}ee!==null?(ee.return=W,re=ee):mm(X)}K=K.sibling}e:for(K=null,X=n;;){if(X.tag===5){if(K===null){K=X;try{d=X.stateNode,F?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=X.stateNode,P=X.memoizedProps.style,_=P!=null&&P.hasOwnProperty("display")?P.display:null,I.style.display=Do("display",_))}catch(oe){et(n,n.return,oe)}}}else if(X.tag===6){if(K===null)try{X.stateNode.nodeValue=F?"":X.memoizedProps}catch(oe){et(n,n.return,oe)}}else if((X.tag!==22&&X.tag!==23||X.memoizedState===null||X===n)&&X.child!==null){X.child.return=X,X=X.child;continue}if(X===n)break e;for(;X.sibling===null;){if(X.return===null||X.return===n)break e;K===X&&(K=null),X=X.return}K===X&&(K=null),X.sibling.return=X.return,X=X.sibling}}break;case 19:Vn(i,n),Kn(n),c&4&&hm(n);break;case 21:break;default:Vn(i,n),Kn(n)}}function Kn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(lm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Vr(d,""),c.flags&=-33);var m=um(n);Sh(n,m,d);break;case 3:case 4:var _=c.stateNode.containerInfo,I=um(n);Ih(n,I,_);break;default:throw Error(t(161))}}catch(P){et(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function bw(n,i,a){re=n,fm(n)}function fm(n,i,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,m=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Ql;if(!_){var I=d.alternate,P=I!==null&&I.memoizedState!==null||Lt;I=Ql;var F=Lt;if(Ql=_,(Lt=P)&&!F)for(re=d;re!==null;)_=re,P=_.child,_.tag===22&&_.memoizedState!==null?gm(d):P!==null?(P.return=_,re=P):gm(d);for(;m!==null;)re=m,fm(m),m=m.sibling;re=d,Ql=I,Lt=F}pm(n)}else d.subtreeFlags&8772&&m!==null?(m.return=d,re=m):pm(n)}}function pm(n){for(;re!==null;){var i=re;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:Lt||Xl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Lt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:xn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&mp(i,m,c);break;case 3:var _=i.updateQueue;if(_!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}mp(i,_,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var F=i.alternate;if(F!==null){var K=F.memoizedState;if(K!==null){var X=K.dehydrated;X!==null&&Cn(X)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Lt||i.flags&512&&Th(i)}catch(W){et(i,i.return,W)}}if(i===n){re=null;break}if(a=i.sibling,a!==null){a.return=i.return,re=a;break}re=i.return}}function mm(n){for(;re!==null;){var i=re;if(i===n){re=null;break}var a=i.sibling;if(a!==null){a.return=i.return,re=a;break}re=i.return}}function gm(n){for(;re!==null;){var i=re;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Xl(4,i)}catch(P){et(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(P){et(i,d,P)}}var m=i.return;try{Th(i)}catch(P){et(i,m,P)}break;case 5:var _=i.return;try{Th(i)}catch(P){et(i,_,P)}}}catch(P){et(i,i.return,P)}if(i===n){re=null;break}var I=i.sibling;if(I!==null){I.return=i.return,re=I;break}re=i.return}}var Mw=Math.ceil,Yl=Ee.ReactCurrentDispatcher,Ah=Ee.ReactCurrentOwner,gn=Ee.ReactCurrentBatchConfig,Ve=0,vt=null,ot=null,At=0,an=0,Xs=Hr(0),ft=0,ya=null,Hi=0,Jl=0,Rh=0,_a=null,Xt=null,Ch=0,Ys=1/0,yr=null,Zl=!1,Ph=null,Yr=null,eu=!1,Jr=null,tu=0,va=0,kh=null,nu=-1,ru=0;function $t(){return Ve&6?$e():nu!==-1?nu:nu=$e()}function Zr(n){return n.mode&1?Ve&2&&At!==0?At&-At:ww.transition!==null?(ru===0&&(ru=Vi()),ru):(n=ke,n!==0||(n=window.event,n=n===void 0?16:Ko(n.type)),n):1}function On(n,i,a,c){if(50<va)throw va=0,kh=null,Error(t(185));Mr(n,a,c),(!(Ve&2)||n!==vt)&&(n===vt&&(!(Ve&2)&&(Jl|=a),ft===4&&ei(n,At)),Yt(n,c),a===1&&Ve===0&&!(i.mode&1)&&(Ys=$e()+500,xl&&Kr()))}function Yt(n,i){var a=n.callbackNode;sr(n,i);var c=Di(n,n===vt?At:0);if(c===0)a!==null&&Bo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Bo(a),i===1)n.tag===0?vw(_m.bind(null,n)):rp(_m.bind(null,n)),mw(function(){!(Ve&6)&&Kr()}),a=null;else{switch(Fr(c)){case 1:a=Ni;break;case 4:a=Or;break;case 16:a=un;break;case 536870912:a=rl;break;default:a=un}a=Rm(a,ym.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function ym(n,i){if(nu=-1,ru=0,Ve&6)throw Error(t(327));var a=n.callbackNode;if(Js()&&n.callbackNode!==a)return null;var c=Di(n,n===vt?At:0);if(c===0)return null;if(c&30||c&n.expiredLanes||i)i=iu(n,c);else{i=c;var d=Ve;Ve|=2;var m=wm();(vt!==n||At!==i)&&(yr=null,Ys=$e()+500,Ki(n,i));do try{jw();break}catch(I){vm(n,I)}while(!0);Kc(),Yl.current=m,Ve=d,ot!==null?i=0:(vt=null,At=0,i=ft)}if(i!==0){if(i===2&&(d=tn(n),d!==0&&(c=d,i=Nh(n,d))),i===1)throw a=ya,Ki(n,0),ei(n,c),Yt(n,$e()),a;if(i===6)ei(n,c);else{if(d=n.current.alternate,!(c&30)&&!Uw(d)&&(i=iu(n,c),i===2&&(m=tn(n),m!==0&&(c=m,i=Nh(n,m))),i===1))throw a=ya,Ki(n,0),ei(n,c),Yt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Gi(n,Xt,yr);break;case 3:if(ei(n,c),(c&130023424)===c&&(i=Ch+500-$e(),10<i)){if(Di(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){$t(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=bc(Gi.bind(null,n,Xt,yr),i);break}Gi(n,Xt,yr);break;case 4:if(ei(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var _=31-jt(c);m=1<<_,_=i[_],_>d&&(d=_),c&=~m}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Mw(c/1960))-c,10<c){n.timeoutHandle=bc(Gi.bind(null,n,Xt,yr),c);break}Gi(n,Xt,yr);break;case 5:Gi(n,Xt,yr);break;default:throw Error(t(329))}}}return Yt(n,$e()),n.callbackNode===a?ym.bind(null,n):null}function Nh(n,i){var a=_a;return n.current.memoizedState.isDehydrated&&(Ki(n,i).flags|=256),n=iu(n,i),n!==2&&(i=Xt,Xt=a,i!==null&&xh(i)),n}function xh(n){Xt===null?Xt=n:Xt.push.apply(Xt,n)}function Uw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!kn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ei(n,i){for(i&=~Rh,i&=~Jl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-jt(i),c=1<<a;n[a]=-1,i&=~c}}function _m(n){if(Ve&6)throw Error(t(327));Js();var i=Di(n,0);if(!(i&1))return Yt(n,$e()),null;var a=iu(n,i);if(n.tag!==0&&a===2){var c=tn(n);c!==0&&(i=c,a=Nh(n,c))}if(a===1)throw a=ya,Ki(n,0),ei(n,i),Yt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Gi(n,Xt,yr),Yt(n,$e()),null}function Dh(n,i){var a=Ve;Ve|=1;try{return n(i)}finally{Ve=a,Ve===0&&(Ys=$e()+500,xl&&Kr())}}function Wi(n){Jr!==null&&Jr.tag===0&&!(Ve&6)&&Js();var i=Ve;Ve|=1;var a=gn.transition,c=ke;try{if(gn.transition=null,ke=1,n)return n()}finally{ke=c,gn.transition=a,Ve=i,!(Ve&6)&&Kr()}}function Vh(){an=Xs.current,Ke(Xs)}function Ki(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,pw(a)),ot!==null)for(a=ot.return;a!==null;){var c=a;switch(Bc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&kl();break;case 3:Ks(),Ke(Kt),Ke(Dt),th();break;case 5:Zc(c);break;case 4:Ks();break;case 13:Ke(Ye);break;case 19:Ke(Ye);break;case 10:Gc(c.type._context);break;case 22:case 23:Vh()}a=a.return}if(vt=n,ot=n=ti(n.current,null),At=an=i,ft=0,ya=null,Rh=Jl=Hi=0,Xt=_a=null,Bi!==null){for(i=0;i<Bi.length;i++)if(a=Bi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var _=m.next;m.next=d,c.next=_}a.pending=c}Bi=null}return n}function vm(n,i){do{var a=ot;try{if(Kc(),zl.current=Hl,Bl){for(var c=Je.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Bl=!1}if(qi=0,_t=dt=Je=null,ha=!1,da=0,Ah.current=null,a===null||a.return===null){ft=1,ya=i,ot=null;break}e:{var m=n,_=a.return,I=a,P=i;if(i=At,I.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var F=P,K=I,X=K.tag;if(!(K.mode&1)&&(X===0||X===11||X===15)){var W=K.alternate;W?(K.updateQueue=W.updateQueue,K.memoizedState=W.memoizedState,K.lanes=W.lanes):(K.updateQueue=null,K.memoizedState=null)}var ee=qp(_);if(ee!==null){ee.flags&=-257,Hp(ee,_,I,m,i),ee.mode&1&&$p(m,F,i),i=ee,P=F;var ie=i.updateQueue;if(ie===null){var oe=new Set;oe.add(P),i.updateQueue=oe}else ie.add(P);break e}else{if(!(i&1)){$p(m,F,i),Oh();break e}P=Error(t(426))}}else if(Xe&&I.mode&1){var rt=qp(_);if(rt!==null){!(rt.flags&65536)&&(rt.flags|=256),Hp(rt,_,I,m,i),Hc(Gs(P,I));break e}}m=P=Gs(P,I),ft!==4&&(ft=2),_a===null?_a=[m]:_a.push(m),m=_;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var M=zp(m,P,i);pp(m,M);break e;case 1:I=P;var x=m.type,U=m.stateNode;if(!(m.flags&128)&&(typeof x.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(Yr===null||!Yr.has(U)))){m.flags|=65536,i&=-i,m.lanes|=i;var Y=Bp(m,I,i);pp(m,Y);break e}}m=m.return}while(m!==null)}Tm(a)}catch(ae){i=ae,ot===a&&a!==null&&(ot=a=a.return);continue}break}while(!0)}function wm(){var n=Yl.current;return Yl.current=Hl,n===null?Hl:n}function Oh(){(ft===0||ft===3||ft===2)&&(ft=4),vt===null||!(Hi&268435455)&&!(Jl&268435455)||ei(vt,At)}function iu(n,i){var a=Ve;Ve|=2;var c=wm();(vt!==n||At!==i)&&(yr=null,Ki(n,i));do try{Fw();break}catch(d){vm(n,d)}while(!0);if(Kc(),Ve=a,Yl.current=c,ot!==null)throw Error(t(261));return vt=null,At=0,ft}function Fw(){for(;ot!==null;)Em(ot)}function jw(){for(;ot!==null&&!tl();)Em(ot)}function Em(n){var i=Am(n.alternate,n,an);n.memoizedProps=n.pendingProps,i===null?Tm(n):ot=i,Ah.current=null}function Tm(n){var i=n;do{var a=i.alternate;if(n=i.return,i.flags&32768){if(a=Vw(a,i),a!==null){a.flags&=32767,ot=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ft=6,ot=null;return}}else if(a=Dw(a,i,an),a!==null){ot=a;return}if(i=i.sibling,i!==null){ot=i;return}ot=i=n}while(i!==null);ft===0&&(ft=5)}function Gi(n,i,a){var c=ke,d=gn.transition;try{gn.transition=null,ke=1,zw(n,i,a,c)}finally{gn.transition=d,ke=c}return null}function zw(n,i,a,c){do Js();while(Jr!==null);if(Ve&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(ze(n,m),n===vt&&(ot=vt=null,At=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||eu||(eu=!0,Rm(un,function(){return Js(),null})),m=(a.flags&15990)!==0,a.subtreeFlags&15990||m){m=gn.transition,gn.transition=null;var _=ke;ke=1;var I=Ve;Ve|=4,Ah.current=null,Lw(n,a),dm(a,n),aw(Oc),zr=!!Vc,Oc=Vc=null,n.current=a,bw(a),yc(),Ve=I,ke=_,gn.transition=m}else n.current=a;if(eu&&(eu=!1,Jr=n,tu=d),m=n.pendingLanes,m===0&&(Yr=null),il(a.stateNode),Yt(n,$e()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Zl)throw Zl=!1,n=Ph,Ph=null,n;return tu&1&&n.tag!==0&&Js(),m=n.pendingLanes,m&1?n===kh?va++:(va=0,kh=n):va=0,Kr(),null}function Js(){if(Jr!==null){var n=Fr(tu),i=gn.transition,a=ke;try{if(gn.transition=null,ke=16>n?16:n,Jr===null)var c=!1;else{if(n=Jr,Jr=null,tu=0,Ve&6)throw Error(t(331));var d=Ve;for(Ve|=4,re=n.current;re!==null;){var m=re,_=m.child;if(re.flags&16){var I=m.deletions;if(I!==null){for(var P=0;P<I.length;P++){var F=I[P];for(re=F;re!==null;){var K=re;switch(K.tag){case 0:case 11:case 15:ga(8,K,m)}var X=K.child;if(X!==null)X.return=K,re=X;else for(;re!==null;){K=re;var W=K.sibling,ee=K.return;if(am(K),K===F){re=null;break}if(W!==null){W.return=ee,re=W;break}re=ee}}}var ie=m.alternate;if(ie!==null){var oe=ie.child;if(oe!==null){ie.child=null;do{var rt=oe.sibling;oe.sibling=null,oe=rt}while(oe!==null)}}re=m}}if(m.subtreeFlags&2064&&_!==null)_.return=m,re=_;else e:for(;re!==null;){if(m=re,m.flags&2048)switch(m.tag){case 0:case 11:case 15:ga(9,m,m.return)}var M=m.sibling;if(M!==null){M.return=m.return,re=M;break e}re=m.return}}var x=n.current;for(re=x;re!==null;){_=re;var U=_.child;if(_.subtreeFlags&2064&&U!==null)U.return=_,re=U;else e:for(_=x;re!==null;){if(I=re,I.flags&2048)try{switch(I.tag){case 0:case 11:case 15:Xl(9,I)}}catch(ae){et(I,I.return,ae)}if(I===_){re=null;break e}var Y=I.sibling;if(Y!==null){Y.return=I.return,re=Y;break e}re=I.return}}if(Ve=d,Kr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(xi,n)}catch{}c=!0}return c}finally{ke=a,gn.transition=i}}return!1}function Im(n,i,a){i=Gs(a,i),i=zp(n,i,1),n=Qr(n,i,1),i=$t(),n!==null&&(Mr(n,1,i),Yt(n,i))}function et(n,i,a){if(n.tag===3)Im(n,n,a);else for(;i!==null;){if(i.tag===3){Im(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Yr===null||!Yr.has(c))){n=Gs(a,n),n=Bp(i,n,1),i=Qr(i,n,1),n=$t(),i!==null&&(Mr(i,1,n),Yt(i,n));break}}i=i.return}}function Bw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=$t(),n.pingedLanes|=n.suspendedLanes&a,vt===n&&(At&a)===a&&(ft===4||ft===3&&(At&130023424)===At&&500>$e()-Ch?Ki(n,0):Rh|=a),Yt(n,i)}function Sm(n,i){i===0&&(n.mode&1?(i=Es,Es<<=1,!(Es&130023424)&&(Es=4194304)):i=1);var a=$t();n=pr(n,i),n!==null&&(Mr(n,i,a),Yt(n,a))}function $w(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Sm(n,a)}function qw(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Sm(n,a)}var Am;Am=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Kt.current)Qt=!0;else{if(!(n.lanes&a)&&!(i.flags&128))return Qt=!1,xw(n,i,a);Qt=!!(n.flags&131072)}else Qt=!1,Xe&&i.flags&1048576&&ip(i,Vl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Gl(n,i),n=i.pendingProps;var d=js(i,Dt.current);Ws(i,a),d=ih(null,i,c,n,d,a);var m=sh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Gt(c)?(m=!0,Nl(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Yc(i),d.updater=Wl,i.stateNode=d,d._reactInternals=i,hh(i,c,n,a),i=mh(null,i,c,!0,m,a)):(i.tag=0,Xe&&m&&zc(i),Bt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Gl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Ww(c),n=xn(c,n),d){case 0:i=ph(null,i,c,n,a);break e;case 1:i=Yp(null,i,c,n,a);break e;case 11:i=Wp(null,i,c,n,a);break e;case 14:i=Kp(null,i,c,xn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xn(c,d),ph(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xn(c,d),Yp(n,i,c,d,a);case 3:e:{if(Jp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,fp(n,i),Fl(i,c,null,a);var _=i.memoizedState;if(c=_.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Gs(Error(t(423)),i),i=Zp(n,i,c,a,d);break e}else if(c!==d){d=Gs(Error(t(424)),i),i=Zp(n,i,c,a,d);break e}else for(on=qr(i.stateNode.containerInfo.firstChild),sn=i,Xe=!0,Nn=null,a=hp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if($s(),c===d){i=gr(n,i,a);break e}Bt(n,i,c,a)}i=i.child}return i;case 5:return gp(i),n===null&&qc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,_=d.children,Lc(c,d)?_=null:m!==null&&Lc(c,m)&&(i.flags|=32),Xp(n,i),Bt(n,i,_,a),i.child;case 6:return n===null&&qc(i),null;case 13:return em(n,i,a);case 4:return Jc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=qs(i,null,c,a):Bt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xn(c,d),Wp(n,i,c,d,a);case 7:return Bt(n,i,i.pendingProps,a),i.child;case 8:return Bt(n,i,i.pendingProps.children,a),i.child;case 12:return Bt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,_=d.value,qe(bl,c._currentValue),c._currentValue=_,m!==null)if(kn(m.value,_)){if(m.children===d.children&&!Kt.current){i=gr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){_=m.child;for(var P=I.firstContext;P!==null;){if(P.context===c){if(m.tag===1){P=mr(-1,a&-a),P.tag=2;var F=m.updateQueue;if(F!==null){F=F.shared;var K=F.pending;K===null?P.next=P:(P.next=K.next,K.next=P),F.pending=P}}m.lanes|=a,P=m.alternate,P!==null&&(P.lanes|=a),Qc(m.return,a,i),I.lanes|=a;break}P=P.next}}else if(m.tag===10)_=m.type===i.type?null:m.child;else if(m.tag===18){if(_=m.return,_===null)throw Error(t(341));_.lanes|=a,I=_.alternate,I!==null&&(I.lanes|=a),Qc(_,a,i),_=m.sibling}else _=m.child;if(_!==null)_.return=m;else for(_=m;_!==null;){if(_===i){_=null;break}if(m=_.sibling,m!==null){m.return=_.return,_=m;break}_=_.return}m=_}Bt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ws(i,a),d=pn(d),c=c(d),i.flags|=1,Bt(n,i,c,a),i.child;case 14:return c=i.type,d=xn(c,i.pendingProps),d=xn(c.type,d),Kp(n,i,c,d,a);case 15:return Gp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xn(c,d),Gl(n,i),i.tag=1,Gt(c)?(n=!0,Nl(i)):n=!1,Ws(i,a),Fp(i,c,d),hh(i,c,d,a),mh(null,i,c,!0,n,a);case 19:return nm(n,i,a);case 22:return Qp(n,i,a)}throw Error(t(156,i.tag))};function Rm(n,i){return vs(n,i)}function Hw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,i,a,c){return new Hw(n,i,a,c)}function Lh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ww(n){if(typeof n=="function")return Lh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===L)return 11;if(n===Nt)return 14}return 2}function ti(n,i){var a=n.alternate;return a===null?(a=yn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function su(n,i,a,c,d,m){var _=2;if(c=n,typeof n=="function")Lh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case C:return Qi(a.children,d,m,i);case T:_=8,d|=8;break;case S:return n=yn(12,a,i,d|2),n.elementType=S,n.lanes=m,n;case R:return n=yn(13,a,i,d),n.elementType=R,n.lanes=m,n;case tt:return n=yn(19,a,i,d),n.elementType=tt,n.lanes=m,n;case je:return ou(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:_=10;break e;case D:_=9;break e;case L:_=11;break e;case Nt:_=14;break e;case xt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=yn(_,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Qi(n,i,a,c){return n=yn(7,n,c,i),n.lanes=a,n}function ou(n,i,a,c){return n=yn(22,n,c,i),n.elementType=je,n.lanes=a,n.stateNode={isHidden:!1},n}function bh(n,i,a){return n=yn(6,n,null,i),n.lanes=a,n}function Mh(n,i,a){return i=yn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Kw(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=br(0),this.expirationTimes=br(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=br(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Uh(n,i,a,c,d,m,_,I,P){return n=new Kw(n,i,a,I,P),i===1?(i=1,m===!0&&(i|=8)):i=0,m=yn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(m),n}function Gw(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ie,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Cm(n){if(!n)return Wr;n=n._reactInternals;e:{if(Tn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Gt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gt(a))return tp(n,a,i)}return i}function Pm(n,i,a,c,d,m,_,I,P){return n=Uh(a,c,!0,n,d,m,_,I,P),n.context=Cm(null),a=n.current,c=$t(),d=Zr(a),m=mr(c,d),m.callback=i??null,Qr(a,m,d),n.current.lanes=d,Mr(n,d,c),Yt(n,c),n}function au(n,i,a,c){var d=i.current,m=$t(),_=Zr(d);return a=Cm(a),i.context===null?i.context=a:i.pendingContext=a,i=mr(m,_),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Qr(d,i,_),n!==null&&(On(n,d,_,m),Ul(n,d,_)),_}function lu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function km(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Fh(n,i){km(n,i),(n=n.alternate)&&km(n,i)}function Qw(){return null}var Nm=typeof reportError=="function"?reportError:function(n){console.error(n)};function jh(n){this._internalRoot=n}uu.prototype.render=jh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));au(n,i,null,null)},uu.prototype.unmount=jh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Wi(function(){au(null,n,null,null)}),i[cr]=null}};function uu(n){this._internalRoot=n}uu.prototype.unstable_scheduleHydration=function(n){if(n){var i=ul();n={blockedOn:null,target:n,priority:i};for(var a=0;a<jn.length&&i!==0&&i<jn[a].priority;a++);jn.splice(a,0,n),a===0&&dl(n)}};function zh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function cu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function xm(){}function Xw(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var F=lu(_);m.call(F)}}var _=Pm(i,c,n,0,null,!1,!1,"",xm);return n._reactRootContainer=_,n[cr]=_.current,ra(n.nodeType===8?n.parentNode:n),Wi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var F=lu(P);I.call(F)}}var P=Uh(n,0,!1,null,null,!1,!1,"",xm);return n._reactRootContainer=P,n[cr]=P.current,ra(n.nodeType===8?n.parentNode:n),Wi(function(){au(i,P,a,c)}),P}function hu(n,i,a,c,d){var m=a._reactRootContainer;if(m){var _=m;if(typeof d=="function"){var I=d;d=function(){var P=lu(_);I.call(P)}}au(i,_,n,d)}else _=Xw(a,i,n,d,c);return lu(_)}al=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Lr(i.pendingLanes);a!==0&&(Ur(i,a|1),Yt(i,$e()),!(Ve&6)&&(Ys=$e()+500,Kr()))}break;case 13:Wi(function(){var c=pr(n,1);if(c!==null){var d=$t();On(c,n,1,d)}}),Fh(n,1)}},Ts=function(n){if(n.tag===13){var i=pr(n,134217728);if(i!==null){var a=$t();On(i,n,134217728,a)}Fh(n,134217728)}},ll=function(n){if(n.tag===13){var i=Zr(n),a=pr(n,i);if(a!==null){var c=$t();On(a,n,i,c)}Fh(n,i)}},ul=function(){return ke},cl=function(n,i){var a=ke;try{return ke=n,i()}finally{ke=a}},fs=function(n,i,a){switch(i){case"input":if(Po(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Pl(c);if(!d)throw Error(t(90));as(c),Po(c,d)}}}break;case"textarea":hs(n,a);break;case"select":i=a.value,i!=null&&nr(n,!!a.multiple,i,!1)}},Ri=Dh,Uo=Wi;var Yw={usingClientEntryPoint:!1,Events:[oa,Us,Pl,Un,Mo,Dh]},wa={findFiberByHostInstance:Ui,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jw={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=zo(n),n===null?null:n.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||Qw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{xi=du.inject(Jw),en=du}catch{}}return Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yw,Jt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zh(i))throw Error(t(200));return Gw(n,i,null,a)},Jt.createRoot=function(n,i){if(!zh(n))throw Error(t(299));var a=!1,c="",d=Nm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Uh(n,1,!1,null,null,a,!1,c,d),n[cr]=i.current,ra(n.nodeType===8?n.parentNode:n),new jh(i)},Jt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=zo(i),n=n===null?null:n.stateNode,n},Jt.flushSync=function(n){return Wi(n)},Jt.hydrate=function(n,i,a){if(!cu(i))throw Error(t(200));return hu(null,n,i,!0,a)},Jt.hydrateRoot=function(n,i,a){if(!zh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",_=Nm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),i=Pm(i,null,n,1,a??null,d,!1,m,_),n[cr]=i.current,ra(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new uu(i)},Jt.render=function(n,i,a){if(!cu(i))throw Error(t(200));return hu(null,n,i,!1,a)},Jt.unmountComponentAtNode=function(n){if(!cu(n))throw Error(t(40));return n._reactRootContainer?(Wi(function(){hu(null,null,n,!1,function(){n._reactRootContainer=null,n[cr]=null})}),!0):!1},Jt.unstable_batchedUpdates=Dh,Jt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!cu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return hu(n,i,a,!1,c)},Jt.version="18.3.1-next-f1338f8080-20240426",Jt}var Fm;function aE(){if(Fm)return qh.exports;Fm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),qh.exports=oE(),qh.exports}var jm;function lE(){if(jm)return fu;jm=1;var r=aE();return fu.createRoot=r.createRoot,fu.hydrateRoot=r.hydrateRoot,fu}var uE=lE();const vo=({activeScreen:r,setScreen:e,cartCount:t=0})=>V.jsxs("nav",{className:"fixed bottom-0 left-0 w-full bg-white p-4 flex justify-around shadow-md",children:[V.jsx("button",{onClick:()=>e("home"),className:r==="home"?"text-blue-500 font-semibold":"text-gray-500",children:"홈"}),V.jsxs("button",{onClick:()=>e("cart"),className:r==="cart"?"text-blue-500 font-semibold":"text-gray-500",children:["장바구니 ",t>0?`(${t})`:""]}),V.jsx("button",{onClick:()=>e("paid"),className:r==="paid"?"text-blue-500 font-semibold":"text-gray-500",children:"주문 내역"}),V.jsx("button",{onClick:()=>e("myinfo"),className:r==="myinfo"?"text-blue-500 font-semibold":"text-gray-500",children:"내 정보"})]});var sd=function(r,e){return sd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,s){t.__proto__=s}||function(t,s){for(var o in s)s.hasOwnProperty(o)&&(t[o]=s[o])},sd(r,e)},ro=function(){return ro=Object.assign||function(r){for(var e,t=1,s=arguments.length;t<s;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r},ro.apply(this,arguments)};function cE(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]])}return t}var Kh,yy="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js",hE=(Kh=null,function(r){return r===void 0&&(r=yy),Kh||(Kh=new Promise(function(e,t){var s=document.createElement("script");s.src=r,s.onload=function(){var o;if(!((o=window==null?void 0:window.daum)===null||o===void 0)&&o.Postcode)return e(window.daum.Postcode);t(new Error("Script is loaded successfully, but cannot find Postcode module. Check your scriptURL property."))},s.onerror=function(o){return t(o)},s.id="daum_postcode_script",document.body.appendChild(s)}))}),dE=Er.createElement("p",null,"현재 Daum 우편번호 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요."),fE={width:"100%",height:400},pE={scriptUrl:yy,errorMessage:dE,autoClose:!0},mE=function(r){function e(){var t=r!==null&&r.apply(this,arguments)||this;return t.mounted=!1,t.wrap=Le.createRef(),t.state={hasError:!1,completed:!1},t.initiate=function(s){if(t.wrap.current){var o=t.props;o.scriptUrl,o.className,o.style;var u=o.defaultQuery,h=o.autoClose;o.errorMessage;var p=o.onComplete,g=o.onClose,v=o.onResize,E=o.onSearch,A=cE(o,["scriptUrl","className","style","defaultQuery","autoClose","errorMessage","onComplete","onClose","onResize","onSearch"]);new s(ro(ro({},A),{oncomplete:function(N){p&&p(N),t.setState({completed:!0})},onsearch:E,onresize:v,onclose:g,width:"100%",height:"100%"})).embed(t.wrap.current,{q:u,autoClose:h})}},t.onError=function(s){console.error(s),t.setState({hasError:!0})},t}return function(t,s){function o(){this.constructor=t}sd(t,s),t.prototype=s===null?Object.create(s):(o.prototype=s.prototype,new o)}(e,r),e.prototype.componentDidMount=function(){var t=this.initiate,s=this.onError,o=this.props.scriptUrl;o&&(this.mounted||(hE(o).then(t).catch(s),this.mounted=!0))},e.prototype.render=function(){var t=this.props,s=t.className,o=t.style,u=t.errorMessage,h=t.autoClose,p=this.state,g=p.hasError,v=p.completed;return h===!0&&v===!0?null:Er.createElement("div",{ref:this.wrap,className:s,style:ro(ro({},fE),o)},g&&u)},e.defaultProps=pE,e}(Le.Component),zm={};/**
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
 */const _y=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},gE=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],p=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},vy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,p=h?r[o+1]:0,g=o+2<r.length,v=g?r[o+2]:0,E=u>>2,A=(u&3)<<4|p>>4;let N=(p&15)<<2|v>>6,z=v&63;g||(z=64,h||(N=64)),s.push(t[E],t[A],t[N],t[z])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(_y(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):gE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],p=o<r.length?t[r.charAt(o)]:0;++o;const v=o<r.length?t[r.charAt(o)]:64;++o;const A=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||p==null||v==null||A==null)throw new yE;const N=u<<2|p>>4;if(s.push(N),v!==64){const z=p<<4&240|v>>2;if(s.push(z),A!==64){const G=v<<6&192|A;s.push(G)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class yE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _E=function(r){const e=_y(r);return vy.encodeByteArray(e,!0)},Nu=function(r){return _E(r).replace(/\./g,"")},wy=function(r){try{return vy.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wE=()=>vE().__FIREBASE_DEFAULTS__,EE=()=>{if(typeof process>"u"||typeof zm>"u")return;const r=zm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},TE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&wy(r[1]);return e&&JSON.parse(e)},Yu=()=>{try{return wE()||EE()||TE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Ey=r=>{var e,t;return(t=(e=Yu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},IE=r=>{const e=Ey(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Ty=()=>{var r;return(r=Yu())===null||r===void 0?void 0:r.config},Iy=r=>{var e;return(e=Yu())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class SE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function AE(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Nu(JSON.stringify(t)),Nu(JSON.stringify(h)),""].join(".")}/**
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
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function CE(){var r;const e=(r=Yu())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function PE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function NE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xE(){const r=Ft();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function DE(){return!CE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function VE(){try{return typeof indexedDB=="object"}catch{return!1}}function OE(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const LE="FirebaseError";class Nr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=LE,Object.setPrototypeOf(this,Nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,za.prototype.create)}}class za{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?bE(u,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new Nr(o,p,s)}}function bE(r,e){return r.replace(ME,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const ME=/\{\$([^}]+)}/g;function UE(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function xu(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(Bm(u)&&Bm(h)){if(!xu(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Bm(r){return r!==null&&typeof r=="object"}/**
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
 */function Ba(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function FE(r,e){const t=new jE(r,e);return t.subscribe.bind(t)}class jE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");zE(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Gh),o.error===void 0&&(o.error=Gh),o.complete===void 0&&(o.complete=Gh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zE(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Gh(){}/**
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
 */function Pt(r){return r&&r._delegate?r._delegate:r}class Ji{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xi="[DEFAULT]";/**
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
 */class BE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new SE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qE(e))try{this.getOrInitializeService({instanceIdentifier:Xi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Xi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xi){return this.instances.has(e)}getOptions(e=Xi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:$E(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xi){return this.component?this.component.multipleInstances?e:Xi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $E(r){return r===Xi?void 0:r}function qE(r){return r.instantiationMode==="EAGER"}/**
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
 */class HE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new BE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Re;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Re||(Re={}));const WE={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},KE=Re.INFO,GE={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},QE=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=GE[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Od{constructor(e){this.name=e,this._logLevel=KE,this._logHandler=QE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const XE=(r,e)=>e.some(t=>r instanceof t);let $m,qm;function YE(){return $m||($m=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JE(){return qm||(qm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sy=new WeakMap,od=new WeakMap,Ay=new WeakMap,Qh=new WeakMap,Ld=new WeakMap;function ZE(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(ui(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Sy.set(t,r)}).catch(()=>{}),Ld.set(e,r),e}function eT(r){if(od.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});od.set(r,e)}let ad={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return od.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Ay.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ui(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function tT(r){ad=r(ad)}function nT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(Xh(this),e,...t);return Ay.set(s,e.sort?e.sort():[e]),ui(s)}:JE().includes(r)?function(...e){return r.apply(Xh(this),e),ui(Sy.get(this))}:function(...e){return ui(r.apply(Xh(this),e))}}function rT(r){return typeof r=="function"?nT(r):(r instanceof IDBTransaction&&eT(r),XE(r,YE())?new Proxy(r,ad):r)}function ui(r){if(r instanceof IDBRequest)return ZE(r);if(Qh.has(r))return Qh.get(r);const e=rT(r);return e!==r&&(Qh.set(r,e),Ld.set(e,r)),e}const Xh=r=>Ld.get(r);function iT(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),p=ui(h);return s&&h.addEventListener("upgradeneeded",g=>{s(ui(h.result),g.oldVersion,g.newVersion,ui(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),p.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),p}const sT=["get","getKey","getAll","getAllKeys","count"],oT=["put","add","delete","clear"],Yh=new Map;function Hm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Yh.get(e))return Yh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=oT.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||sT.includes(t)))return;const u=async function(h,...p){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(p.shift())),(await Promise.all([v[t](...p),o&&g.done]))[0]};return Yh.set(e,u),u}tT(r=>({...r,get:(e,t,s)=>Hm(e,t)||r.get(e,t,s),has:(e,t)=>!!Hm(e,t)||r.has(e,t)}));/**
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
 */class aT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lT(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function lT(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ld="@firebase/app",Wm="0.11.0";/**
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
 */const Sr=new Od("@firebase/app"),uT="@firebase/app-compat",cT="@firebase/analytics-compat",hT="@firebase/analytics",dT="@firebase/app-check-compat",fT="@firebase/app-check",pT="@firebase/auth",mT="@firebase/auth-compat",gT="@firebase/database",yT="@firebase/data-connect",_T="@firebase/database-compat",vT="@firebase/functions",wT="@firebase/functions-compat",ET="@firebase/installations",TT="@firebase/installations-compat",IT="@firebase/messaging",ST="@firebase/messaging-compat",AT="@firebase/performance",RT="@firebase/performance-compat",CT="@firebase/remote-config",PT="@firebase/remote-config-compat",kT="@firebase/storage",NT="@firebase/storage-compat",xT="@firebase/firestore",DT="@firebase/vertexai",VT="@firebase/firestore-compat",OT="firebase",LT="11.3.0";/**
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
 */const ud="[DEFAULT]",bT={[ld]:"fire-core",[uT]:"fire-core-compat",[hT]:"fire-analytics",[cT]:"fire-analytics-compat",[fT]:"fire-app-check",[dT]:"fire-app-check-compat",[pT]:"fire-auth",[mT]:"fire-auth-compat",[gT]:"fire-rtdb",[yT]:"fire-data-connect",[_T]:"fire-rtdb-compat",[vT]:"fire-fn",[wT]:"fire-fn-compat",[ET]:"fire-iid",[TT]:"fire-iid-compat",[IT]:"fire-fcm",[ST]:"fire-fcm-compat",[AT]:"fire-perf",[RT]:"fire-perf-compat",[CT]:"fire-rc",[PT]:"fire-rc-compat",[kT]:"fire-gcs",[NT]:"fire-gcs-compat",[xT]:"fire-fst",[VT]:"fire-fst-compat",[DT]:"fire-vertex","fire-js":"fire-js",[OT]:"fire-js-all"};/**
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
 */const Du=new Map,MT=new Map,cd=new Map;function Km(r,e){try{r.container.addComponent(e)}catch(t){Sr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function uo(r){const e=r.name;if(cd.has(e))return Sr.debug(`There were multiple attempts to register component ${e}.`),!1;cd.set(e,r);for(const t of Du.values())Km(t,r);for(const t of MT.values())Km(t,r);return!0}function bd(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function _n(r){return r==null?!1:r.settings!==void 0}/**
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
 */const UT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ci=new za("app","Firebase",UT);/**
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
 */class FT{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ji("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ci.create("app-deleted",{appName:this._name})}}/**
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
 */const wo=LT;function Ry(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ud,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw ci.create("bad-app-name",{appName:String(o)});if(t||(t=Ty()),!t)throw ci.create("no-options");const u=Du.get(o);if(u){if(xu(t,u.options)&&xu(s,u.config))return u;throw ci.create("duplicate-app",{appName:o})}const h=new HE(o);for(const g of cd.values())h.addComponent(g);const p=new FT(t,s,h);return Du.set(o,p),p}function Cy(r=ud){const e=Du.get(r);if(!e&&r===ud&&Ty())return Ry();if(!e)throw ci.create("no-app",{appName:r});return e}function hi(r,e,t){var s;let o=(s=bT[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const p=[`Unable to register library "${o}" with version "${e}":`];u&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sr.warn(p.join(" "));return}uo(new Ji(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const jT="firebase-heartbeat-database",zT=1,xa="firebase-heartbeat-store";let Jh=null;function Py(){return Jh||(Jh=iT(jT,zT,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(xa)}catch(t){console.warn(t)}}}}).catch(r=>{throw ci.create("idb-open",{originalErrorMessage:r.message})})),Jh}async function BT(r){try{const t=(await Py()).transaction(xa),s=await t.objectStore(xa).get(ky(r));return await t.done,s}catch(e){if(e instanceof Nr)Sr.warn(e.message);else{const t=ci.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sr.warn(t.message)}}}async function Gm(r,e){try{const s=(await Py()).transaction(xa,"readwrite");await s.objectStore(xa).put(e,ky(r)),await s.done}catch(t){if(t instanceof Nr)Sr.warn(t.message);else{const s=ci.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Sr.warn(s.message)}}}function ky(r){return`${r.name}!${r.options.appId}`}/**
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
 */const $T=1024,qT=30;class HT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new KT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Qm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>qT){const h=GT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Sr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Qm(),{heartbeatsToSend:s,unsentEntries:o}=WT(this._heartbeatsCache.heartbeats),u=Nu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Sr.warn(t),""}}}function Qm(){return new Date().toISOString().substring(0,10)}function WT(r,e=$T){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Xm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Xm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class KT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VE()?OE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await BT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Gm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Gm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Xm(r){return Nu(JSON.stringify({version:2,heartbeats:r})).length}function GT(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
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
 */function QT(r){uo(new Ji("platform-logger",e=>new aT(e),"PRIVATE")),uo(new Ji("heartbeat",e=>new HT(e),"PRIVATE")),hi(ld,Wm,r),hi(ld,Wm,"esm2017"),hi("fire-js","")}QT("");var XT="firebase",YT="11.3.0";/**
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
 */hi(XT,YT,"app");var Ym=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var di,Ny;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,T){function S(){}S.prototype=T.prototype,C.D=T.prototype,C.prototype=new S,C.prototype.constructor=C,C.C=function(k,D,L){for(var R=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)R[tt-2]=arguments[tt];return T.prototype[D].apply(k,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,T,S){S||(S=0);var k=Array(16);if(typeof T=="string")for(var D=0;16>D;++D)k[D]=T.charCodeAt(S++)|T.charCodeAt(S++)<<8|T.charCodeAt(S++)<<16|T.charCodeAt(S++)<<24;else for(D=0;16>D;++D)k[D]=T[S++]|T[S++]<<8|T[S++]<<16|T[S++]<<24;T=C.g[0],S=C.g[1],D=C.g[2];var L=C.g[3],R=T+(L^S&(D^L))+k[0]+3614090360&4294967295;T=S+(R<<7&4294967295|R>>>25),R=L+(D^T&(S^D))+k[1]+3905402710&4294967295,L=T+(R<<12&4294967295|R>>>20),R=D+(S^L&(T^S))+k[2]+606105819&4294967295,D=L+(R<<17&4294967295|R>>>15),R=S+(T^D&(L^T))+k[3]+3250441966&4294967295,S=D+(R<<22&4294967295|R>>>10),R=T+(L^S&(D^L))+k[4]+4118548399&4294967295,T=S+(R<<7&4294967295|R>>>25),R=L+(D^T&(S^D))+k[5]+1200080426&4294967295,L=T+(R<<12&4294967295|R>>>20),R=D+(S^L&(T^S))+k[6]+2821735955&4294967295,D=L+(R<<17&4294967295|R>>>15),R=S+(T^D&(L^T))+k[7]+4249261313&4294967295,S=D+(R<<22&4294967295|R>>>10),R=T+(L^S&(D^L))+k[8]+1770035416&4294967295,T=S+(R<<7&4294967295|R>>>25),R=L+(D^T&(S^D))+k[9]+2336552879&4294967295,L=T+(R<<12&4294967295|R>>>20),R=D+(S^L&(T^S))+k[10]+4294925233&4294967295,D=L+(R<<17&4294967295|R>>>15),R=S+(T^D&(L^T))+k[11]+2304563134&4294967295,S=D+(R<<22&4294967295|R>>>10),R=T+(L^S&(D^L))+k[12]+1804603682&4294967295,T=S+(R<<7&4294967295|R>>>25),R=L+(D^T&(S^D))+k[13]+4254626195&4294967295,L=T+(R<<12&4294967295|R>>>20),R=D+(S^L&(T^S))+k[14]+2792965006&4294967295,D=L+(R<<17&4294967295|R>>>15),R=S+(T^D&(L^T))+k[15]+1236535329&4294967295,S=D+(R<<22&4294967295|R>>>10),R=T+(D^L&(S^D))+k[1]+4129170786&4294967295,T=S+(R<<5&4294967295|R>>>27),R=L+(S^D&(T^S))+k[6]+3225465664&4294967295,L=T+(R<<9&4294967295|R>>>23),R=D+(T^S&(L^T))+k[11]+643717713&4294967295,D=L+(R<<14&4294967295|R>>>18),R=S+(L^T&(D^L))+k[0]+3921069994&4294967295,S=D+(R<<20&4294967295|R>>>12),R=T+(D^L&(S^D))+k[5]+3593408605&4294967295,T=S+(R<<5&4294967295|R>>>27),R=L+(S^D&(T^S))+k[10]+38016083&4294967295,L=T+(R<<9&4294967295|R>>>23),R=D+(T^S&(L^T))+k[15]+3634488961&4294967295,D=L+(R<<14&4294967295|R>>>18),R=S+(L^T&(D^L))+k[4]+3889429448&4294967295,S=D+(R<<20&4294967295|R>>>12),R=T+(D^L&(S^D))+k[9]+568446438&4294967295,T=S+(R<<5&4294967295|R>>>27),R=L+(S^D&(T^S))+k[14]+3275163606&4294967295,L=T+(R<<9&4294967295|R>>>23),R=D+(T^S&(L^T))+k[3]+4107603335&4294967295,D=L+(R<<14&4294967295|R>>>18),R=S+(L^T&(D^L))+k[8]+1163531501&4294967295,S=D+(R<<20&4294967295|R>>>12),R=T+(D^L&(S^D))+k[13]+2850285829&4294967295,T=S+(R<<5&4294967295|R>>>27),R=L+(S^D&(T^S))+k[2]+4243563512&4294967295,L=T+(R<<9&4294967295|R>>>23),R=D+(T^S&(L^T))+k[7]+1735328473&4294967295,D=L+(R<<14&4294967295|R>>>18),R=S+(L^T&(D^L))+k[12]+2368359562&4294967295,S=D+(R<<20&4294967295|R>>>12),R=T+(S^D^L)+k[5]+4294588738&4294967295,T=S+(R<<4&4294967295|R>>>28),R=L+(T^S^D)+k[8]+2272392833&4294967295,L=T+(R<<11&4294967295|R>>>21),R=D+(L^T^S)+k[11]+1839030562&4294967295,D=L+(R<<16&4294967295|R>>>16),R=S+(D^L^T)+k[14]+4259657740&4294967295,S=D+(R<<23&4294967295|R>>>9),R=T+(S^D^L)+k[1]+2763975236&4294967295,T=S+(R<<4&4294967295|R>>>28),R=L+(T^S^D)+k[4]+1272893353&4294967295,L=T+(R<<11&4294967295|R>>>21),R=D+(L^T^S)+k[7]+4139469664&4294967295,D=L+(R<<16&4294967295|R>>>16),R=S+(D^L^T)+k[10]+3200236656&4294967295,S=D+(R<<23&4294967295|R>>>9),R=T+(S^D^L)+k[13]+681279174&4294967295,T=S+(R<<4&4294967295|R>>>28),R=L+(T^S^D)+k[0]+3936430074&4294967295,L=T+(R<<11&4294967295|R>>>21),R=D+(L^T^S)+k[3]+3572445317&4294967295,D=L+(R<<16&4294967295|R>>>16),R=S+(D^L^T)+k[6]+76029189&4294967295,S=D+(R<<23&4294967295|R>>>9),R=T+(S^D^L)+k[9]+3654602809&4294967295,T=S+(R<<4&4294967295|R>>>28),R=L+(T^S^D)+k[12]+3873151461&4294967295,L=T+(R<<11&4294967295|R>>>21),R=D+(L^T^S)+k[15]+530742520&4294967295,D=L+(R<<16&4294967295|R>>>16),R=S+(D^L^T)+k[2]+3299628645&4294967295,S=D+(R<<23&4294967295|R>>>9),R=T+(D^(S|~L))+k[0]+4096336452&4294967295,T=S+(R<<6&4294967295|R>>>26),R=L+(S^(T|~D))+k[7]+1126891415&4294967295,L=T+(R<<10&4294967295|R>>>22),R=D+(T^(L|~S))+k[14]+2878612391&4294967295,D=L+(R<<15&4294967295|R>>>17),R=S+(L^(D|~T))+k[5]+4237533241&4294967295,S=D+(R<<21&4294967295|R>>>11),R=T+(D^(S|~L))+k[12]+1700485571&4294967295,T=S+(R<<6&4294967295|R>>>26),R=L+(S^(T|~D))+k[3]+2399980690&4294967295,L=T+(R<<10&4294967295|R>>>22),R=D+(T^(L|~S))+k[10]+4293915773&4294967295,D=L+(R<<15&4294967295|R>>>17),R=S+(L^(D|~T))+k[1]+2240044497&4294967295,S=D+(R<<21&4294967295|R>>>11),R=T+(D^(S|~L))+k[8]+1873313359&4294967295,T=S+(R<<6&4294967295|R>>>26),R=L+(S^(T|~D))+k[15]+4264355552&4294967295,L=T+(R<<10&4294967295|R>>>22),R=D+(T^(L|~S))+k[6]+2734768916&4294967295,D=L+(R<<15&4294967295|R>>>17),R=S+(L^(D|~T))+k[13]+1309151649&4294967295,S=D+(R<<21&4294967295|R>>>11),R=T+(D^(S|~L))+k[4]+4149444226&4294967295,T=S+(R<<6&4294967295|R>>>26),R=L+(S^(T|~D))+k[11]+3174756917&4294967295,L=T+(R<<10&4294967295|R>>>22),R=D+(T^(L|~S))+k[2]+718787259&4294967295,D=L+(R<<15&4294967295|R>>>17),R=S+(L^(D|~T))+k[9]+3951481745&4294967295,C.g[0]=C.g[0]+T&4294967295,C.g[1]=C.g[1]+(D+(R<<21&4294967295|R>>>11))&4294967295,C.g[2]=C.g[2]+D&4294967295,C.g[3]=C.g[3]+L&4294967295}s.prototype.u=function(C,T){T===void 0&&(T=C.length);for(var S=T-this.blockSize,k=this.B,D=this.h,L=0;L<T;){if(D==0)for(;L<=S;)o(this,C,L),L+=this.blockSize;if(typeof C=="string"){for(;L<T;)if(k[D++]=C.charCodeAt(L++),D==this.blockSize){o(this,k),D=0;break}}else for(;L<T;)if(k[D++]=C[L++],D==this.blockSize){o(this,k),D=0;break}}this.h=D,this.o+=T},s.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var T=1;T<C.length-8;++T)C[T]=0;var S=8*this.o;for(T=C.length-8;T<C.length;++T)C[T]=S&255,S/=256;for(this.u(C),C=Array(16),T=S=0;4>T;++T)for(var k=0;32>k;k+=8)C[S++]=this.g[T]>>>k&255;return C};function u(C,T){var S=p;return Object.prototype.hasOwnProperty.call(S,C)?S[C]:S[C]=T(C)}function h(C,T){this.h=T;for(var S=[],k=!0,D=C.length-1;0<=D;D--){var L=C[D]|0;k&&L==T||(S[D]=L,k=!1)}this.g=S}var p={};function g(C){return-128<=C&&128>C?u(C,function(T){return new h([T|0],0>T?-1:0)}):new h([C|0],0>C?-1:0)}function v(C){if(isNaN(C)||!isFinite(C))return A;if(0>C)return q(v(-C));for(var T=[],S=1,k=0;C>=S;k++)T[k]=C/S|0,S*=4294967296;return new h(T,0)}function E(C,T){if(C.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C.charAt(0)=="-")return q(E(C.substring(1),T));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=v(Math.pow(T,8)),k=A,D=0;D<C.length;D+=8){var L=Math.min(8,C.length-D),R=parseInt(C.substring(D,D+L),T);8>L?(L=v(Math.pow(T,L)),k=k.j(L).add(v(R))):(k=k.j(S),k=k.add(v(R)))}return k}var A=g(0),N=g(1),z=g(16777216);r=h.prototype,r.m=function(){if(Q(this))return-q(this).m();for(var C=0,T=1,S=0;S<this.g.length;S++){var k=this.i(S);C+=(0<=k?k:4294967296+k)*T,T*=4294967296}return C},r.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(G(this))return"0";if(Q(this))return"-"+q(this).toString(C);for(var T=v(Math.pow(C,6)),S=this,k="";;){var D=Ee(S,T).g;S=fe(S,D.j(T));var L=((0<S.g.length?S.g[0]:S.h)>>>0).toString(C);if(S=D,G(S))return L+k;for(;6>L.length;)L="0"+L;k=L+k}},r.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function G(C){if(C.h!=0)return!1;for(var T=0;T<C.g.length;T++)if(C.g[T]!=0)return!1;return!0}function Q(C){return C.h==-1}r.l=function(C){return C=fe(this,C),Q(C)?-1:G(C)?0:1};function q(C){for(var T=C.g.length,S=[],k=0;k<T;k++)S[k]=~C.g[k];return new h(S,~C.h).add(N)}r.abs=function(){return Q(this)?q(this):this},r.add=function(C){for(var T=Math.max(this.g.length,C.g.length),S=[],k=0,D=0;D<=T;D++){var L=k+(this.i(D)&65535)+(C.i(D)&65535),R=(L>>>16)+(this.i(D)>>>16)+(C.i(D)>>>16);k=R>>>16,L&=65535,R&=65535,S[D]=R<<16|L}return new h(S,S[S.length-1]&-2147483648?-1:0)};function fe(C,T){return C.add(q(T))}r.j=function(C){if(G(this)||G(C))return A;if(Q(this))return Q(C)?q(this).j(q(C)):q(q(this).j(C));if(Q(C))return q(this.j(q(C)));if(0>this.l(z)&&0>C.l(z))return v(this.m()*C.m());for(var T=this.g.length+C.g.length,S=[],k=0;k<2*T;k++)S[k]=0;for(k=0;k<this.g.length;k++)for(var D=0;D<C.g.length;D++){var L=this.i(k)>>>16,R=this.i(k)&65535,tt=C.i(D)>>>16,Nt=C.i(D)&65535;S[2*k+2*D]+=R*Nt,_e(S,2*k+2*D),S[2*k+2*D+1]+=L*Nt,_e(S,2*k+2*D+1),S[2*k+2*D+1]+=R*tt,_e(S,2*k+2*D+1),S[2*k+2*D+2]+=L*tt,_e(S,2*k+2*D+2)}for(k=0;k<T;k++)S[k]=S[2*k+1]<<16|S[2*k];for(k=T;k<2*T;k++)S[k]=0;return new h(S,0)};function _e(C,T){for(;(C[T]&65535)!=C[T];)C[T+1]+=C[T]>>>16,C[T]&=65535,T++}function pe(C,T){this.g=C,this.h=T}function Ee(C,T){if(G(T))throw Error("division by zero");if(G(C))return new pe(A,A);if(Q(C))return T=Ee(q(C),T),new pe(q(T.g),q(T.h));if(Q(T))return T=Ee(C,q(T)),new pe(q(T.g),T.h);if(30<C.g.length){if(Q(C)||Q(T))throw Error("slowDivide_ only works with positive integers.");for(var S=N,k=T;0>=k.l(C);)S=He(S),k=He(k);var D=Ie(S,1),L=Ie(k,1);for(k=Ie(k,2),S=Ie(S,2);!G(k);){var R=L.add(k);0>=R.l(C)&&(D=D.add(S),L=R),k=Ie(k,1),S=Ie(S,1)}return T=fe(C,D.j(T)),new pe(D,T)}for(D=A;0<=C.l(T);){for(S=Math.max(1,Math.floor(C.m()/T.m())),k=Math.ceil(Math.log(S)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),L=v(S),R=L.j(T);Q(R)||0<R.l(C);)S-=k,L=v(S),R=L.j(T);G(L)&&(L=N),D=D.add(L),C=fe(C,R)}return new pe(D,C)}r.A=function(C){return Ee(this,C).h},r.and=function(C){for(var T=Math.max(this.g.length,C.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)&C.i(k);return new h(S,this.h&C.h)},r.or=function(C){for(var T=Math.max(this.g.length,C.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)|C.i(k);return new h(S,this.h|C.h)},r.xor=function(C){for(var T=Math.max(this.g.length,C.g.length),S=[],k=0;k<T;k++)S[k]=this.i(k)^C.i(k);return new h(S,this.h^C.h)};function He(C){for(var T=C.g.length+1,S=[],k=0;k<T;k++)S[k]=C.i(k)<<1|C.i(k-1)>>>31;return new h(S,C.h)}function Ie(C,T){var S=T>>5;T%=32;for(var k=C.g.length-S,D=[],L=0;L<k;L++)D[L]=0<T?C.i(L+S)>>>T|C.i(L+S+1)<<32-T:C.i(L+S);return new h(D,C.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Ny=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=E,di=h}).apply(typeof Ym<"u"?Ym:typeof self<"u"?self:typeof window<"u"?window:{});var pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xy,Ta,Dy,wu,hd,Vy,Oy,Ly;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof pu=="object"&&pu];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var b=l[w];if(!(b in y))break e;y=y[b]}l=l[l.length-1],w=y[l],f=f(w),f!=w&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,w=!1,b={next:function(){if(!w&&y<l.length){var j=y++;return{value:f(j,l[j]),done:!1}}return w=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function v(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function E(l,f,y){return l.call.apply(l.bind,arguments)}function A(l,f,y){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,w),l.apply(f,b)}}return function(){return l.apply(f,arguments)}}function N(l,f,y){return N=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:A,N.apply(null,arguments)}function z(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function G(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(w,b,j){for(var J=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)J[Fe-2]=arguments[Fe];return f.prototype[b].apply(w,J)}}function Q(l){const f=l.length;if(0<f){const y=Array(f);for(let w=0;w<f;w++)y[w]=l[w];return y}return[]}function q(l,f){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(g(w)){const b=l.length||0,j=w.length||0;l.length=b+j;for(let J=0;J<j;J++)l[b+J]=w[J]}else l.push(w)}}class fe{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function _e(l){return/^[\s\xa0]*$/.test(l)}function pe(){var l=p.navigator;return l&&(l=l.userAgent)?l:""}function Ee(l){return Ee[" "](l),l}Ee[" "]=function(){};var He=pe().indexOf("Gecko")!=-1&&!(pe().toLowerCase().indexOf("webkit")!=-1&&pe().indexOf("Edge")==-1)&&!(pe().indexOf("Trident")!=-1||pe().indexOf("MSIE")!=-1)&&pe().indexOf("Edge")==-1;function Ie(l,f,y){for(const w in l)f.call(y,l[w],w,l)}function C(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function T(l){const f={};for(const y in l)f[y]=l[y];return f}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,f){let y,w;for(let b=1;b<arguments.length;b++){w=arguments[b];for(y in w)l[y]=w[y];for(let j=0;j<S.length;j++)y=S[j],Object.prototype.hasOwnProperty.call(w,y)&&(l[y]=w[y])}}function D(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function L(l){p.setTimeout(()=>{throw l},0)}function R(){var l=ce;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class tt{constructor(){this.h=this.g=null}add(f,y){const w=Nt.get();w.set(f,y),this.h?this.h.next=w:this.g=w,this.h=w}}var Nt=new fe(()=>new xt,l=>l.reset());class xt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let je,Z=!1,ce=new tt,te=()=>{const l=p.Promise.resolve(void 0);je=()=>{l.then(O)}};var O=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(y){L(y)}var f=Nt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Z=!1};function $(){this.s=this.s,this.C=this.C}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var Te=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};p.addEventListener("test",y,f),p.removeEventListener("test",y,f)}catch{}return l}();function Se(l,f){if(le.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(He){e:{try{Ee(f.nodeName);var b=!0;break e}catch{}b=!1}b||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ne[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Se.aa.h.call(this)}}G(Se,le);var Ne={2:"touch",3:"pen",4:"mouse"};Se.prototype.h=function(){Se.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),Me=0;function Be(l,f,y,w,b){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!w,this.ha=b,this.key=++Me,this.da=this.fa=!1}function gt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function er(l){this.src=l,this.g={},this.h=0}er.prototype.add=function(l,f,y,w,b){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var J=Dr(l,f,w,b);return-1<J?(f=l[J],y||(f.fa=!1)):(f=new Be(f,this.src,j,!!w,b),f.fa=y,l.push(f)),f};function as(l,f){var y=f.type;if(y in l.g){var w=l.g[y],b=Array.prototype.indexOf.call(w,f,void 0),j;(j=0<=b)&&Array.prototype.splice.call(w,b,1),j&&(gt(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Dr(l,f,y,w){for(var b=0;b<l.length;++b){var j=l[b];if(!j.da&&j.listener==f&&j.capture==!!y&&j.ha==w)return b}return-1}var Ti="closure_lm_"+(1e6*Math.random()|0),ls={};function Co(l,f,y,w,b){if(Array.isArray(f)){for(var j=0;j<f.length;j++)Co(l,f[j],y,w,b);return null}return y=No(y),l&&l[be]?l.K(f,y,v(w)?!!w.capture:!1,b):Po(l,f,y,!1,w,b)}function Po(l,f,y,w,b,j){if(!f)throw Error("Invalid event type");var J=v(b)?!!b.capture:!!b,Fe=cs(l);if(Fe||(l[Ti]=Fe=new er(l)),y=Fe.add(f,y,w,J,j),y.proxy)return y;if(w=Ja(),y.proxy=w,w.src=l,w.listener=y,l.addEventListener)Te||(b=J),b===void 0&&(b=!1),l.addEventListener(f.toString(),w,b);else if(l.attachEvent)l.attachEvent(nr(f.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Ja(){function l(y){return f.call(l.src,l.listener,y)}const f=ko;return l}function us(l,f,y,w,b){if(Array.isArray(f))for(var j=0;j<f.length;j++)us(l,f[j],y,w,b);else w=v(w)?!!w.capture:!!w,y=No(y),l&&l[be]?(l=l.i,f=String(f).toString(),f in l.g&&(j=l.g[f],y=Dr(j,y,w,b),-1<y&&(gt(j[y]),Array.prototype.splice.call(j,y,1),j.length==0&&(delete l.g[f],l.h--)))):l&&(l=cs(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Dr(f,y,w,b)),(y=-1<l?f[l]:null)&&tr(y))}function tr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[be])as(f.i,l);else{var y=l.type,w=l.proxy;f.removeEventListener?f.removeEventListener(y,w,l.capture):f.detachEvent?f.detachEvent(nr(y),w):f.addListener&&f.removeListener&&f.removeListener(w),(y=cs(f))?(as(y,l),y.h==0&&(y.src=null,f[Ti]=null)):gt(l)}}}function nr(l){return l in ls?ls[l]:ls[l]="on"+l}function ko(l,f){if(l.da)l=!0;else{f=new Se(f,this);var y=l.listener,w=l.ha||l.src;l.fa&&tr(l),l=y.call(w,f)}return l}function cs(l){return l=l[Ti],l instanceof er?l:null}var hs="__closure_events_fn_"+(1e9*Math.random()>>>0);function No(l){return typeof l=="function"?l:(l[hs]||(l[hs]=function(f){return l.handleEvent(f)}),l[hs])}function ut(){$.call(this),this.i=new er(this),this.M=this,this.F=null}G(ut,$),ut.prototype[be]=!0,ut.prototype.removeEventListener=function(l,f,y,w){us(this,l,f,y,w)};function ct(l,f){var y,w=l.F;if(w)for(y=[];w;w=w.F)y.push(w);if(l=l.M,w=f.type||f,typeof f=="string")f=new le(f,l);else if(f instanceof le)f.target=f.target||l;else{var b=f;f=new le(w,l),k(f,b)}if(b=!0,y)for(var j=y.length-1;0<=j;j--){var J=f.g=y[j];b=rr(J,w,!0,f)&&b}if(J=f.g=l,b=rr(J,w,!0,f)&&b,b=rr(J,w,!1,f)&&b,y)for(j=0;j<y.length;j++)J=f.g=y[j],b=rr(J,w,!1,f)&&b}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],w=0;w<y.length;w++)gt(y[w]);delete l.g[f],l.h--}}this.F=null},ut.prototype.K=function(l,f,y,w){return this.i.add(String(l),f,!1,y,w)},ut.prototype.L=function(l,f,y,w){return this.i.add(String(l),f,!0,y,w)};function rr(l,f,y,w){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var b=!0,j=0;j<f.length;++j){var J=f[j];if(J&&!J.da&&J.capture==y){var Fe=J.listener,ht=J.ha||J.src;J.fa&&as(l.i,J),b=Fe.call(ht,w)!==!1&&b}}return b&&!w.defaultPrevented}function xo(l,f,y){if(typeof l=="function")y&&(l=N(l,y));else if(l&&typeof l.handleEvent=="function")l=N(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:p.setTimeout(l,f||0)}function Vr(l){l.g=xo(()=>{l.g=null,l.i&&(l.i=!1,Vr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Ii extends ${constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Vr(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Si(l){$.call(this),this.h=l,this.g={}}G(Si,$);var Do=[];function Vo(l){Ie(l.g,function(f,y){this.g.hasOwnProperty(y)&&tr(f)},l),l.g={}}Si.prototype.N=function(){Si.aa.N.call(this),Vo(this)},Si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oo=p.JSON.stringify,Lo=p.JSON.parse,bo=class{stringify(l){return p.JSON.stringify(l,void 0)}parse(l){return p.JSON.parse(l,void 0)}};function Ai(){}Ai.prototype.h=null;function ds(l){return l.h||(l.h=l.i())}function fs(){}var ln={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mn(){le.call(this,"d")}G(Mn,le);function ps(){le.call(this,"c")}G(ps,le);var Un={},Mo=null;function Ri(){return Mo=Mo||new ut}Un.La="serverreachability";function Uo(l){le.call(this,Un.La,l)}G(Uo,le);function ir(l){const f=Ri();ct(f,new Uo(f))}Un.STAT_EVENT="statevent";function Fo(l,f){le.call(this,Un.STAT_EVENT,l),this.stat=f}G(Fo,le);function nt(l){const f=Ri();ct(f,new Fo(f,l))}Un.Ma="timingevent";function ms(l,f){le.call(this,Un.Ma,l),this.size=f}G(ms,le);function wn(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){l()},f)}function Ci(){this.g=!0}Ci.prototype.xa=function(){this.g=!1};function Pi(l,f,y,w,b,j){l.info(function(){if(l.g)if(j)for(var J="",Fe=j.split("&"),ht=0;ht<Fe.length;ht++){var xe=Fe[ht].split("=");if(1<xe.length){var yt=xe[0];xe=xe[1];var st=yt.split("_");J=2<=st.length&&st[1]=="type"?J+(yt+"="+xe+"&"):J+(yt+"=redacted&")}}else J=null;else J=j;return"XMLHTTP REQ ("+w+") [attempt "+b+"]: "+f+`
`+y+`
`+J})}function gs(l,f,y,w,b,j,J){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+b+"]: "+f+`
`+y+`
`+j+" "+J})}function En(l,f,y,w){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+gc(l,y)+(w?" "+w:"")})}function jo(l,f){l.info(function(){return"TIMEOUT: "+f})}Ci.prototype.info=function(){};function gc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var w=y[l];if(!(2>w.length)){var b=w[1];if(Array.isArray(b)&&!(1>b.length)){var j=b[0];if(j!="noop"&&j!="stop"&&j!="close")for(var J=1;J<b.length;J++)b[J]=""}}}}return Oo(y)}catch{return f}}var ys={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Za={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Tn;function ki(){}G(ki,Ai),ki.prototype.g=function(){return new XMLHttpRequest},ki.prototype.i=function(){return{}},Tn=new ki;function In(l,f,y,w){this.j=l,this.i=f,this.l=y,this.R=w||1,this.U=new Si(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new el}function el(){this.i=null,this.g="",this.h=!1}var zo={},_s={};function vs(l,f,y){l.L=1,l.v=Ur(tn(f)),l.m=y,l.P=!0,Bo(l,null)}function Bo(l,f){l.F=Date.now(),$e(l),l.A=tn(l.v);var y=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),jr(y.i,"t",w),l.C=0,y=l.j.J,l.h=new el,l.g=_l(l.j,y?f:null,!l.m),0<l.O&&(l.M=new Ii(N(l.Y,l,l.g),l.O)),f=l.U,y=l.g,w=l.ca;var b="readystatechange";Array.isArray(b)||(b&&(Do[0]=b.toString()),b=Do);for(var j=0;j<b.length;j++){var J=Co(y,b[j],w||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),ir(),Pi(l.i,l.u,l.A,l.l,l.R,l.m)}In.prototype.ca=function(l){l=l.target;const f=this.M;f&&Wt(l)==3?f.j():this.Y(l)},In.prototype.Y=function(l){try{if(l==this.g)e:{const st=Wt(this.g);var f=this.g.Ba();const hn=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||Go(this.g)))){this.J||st!=4||f==7||(f==8||0>=hn?ir(3):ir(2)),Ni(this);var y=this.g.Z();this.X=y;t:if(tl(this)){var w=Go(this.g);l="";var b=w.length,j=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),Or(this);var J="";break t}this.h.i=new p.TextDecoder}for(f=0;f<b;f++)this.h.h=!0,l+=this.h.i.decode(w[f],{stream:!(j&&f==b-1)});w.length=0,this.h.g+=l,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,gs(this.i,this.u,this.A,this.l,this.R,st,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,ht=this.g;if((Fe=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_e(Fe)){var xe=Fe;break t}}xe=null}if(y=xe)En(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$o(this,y);else{this.o=!1,this.s=3,nt(12),un(this),Or(this);break e}}if(this.P){y=!0;let rn;for(;!this.J&&this.C<J.length;)if(rn=yc(this,J),rn==_s){st==4&&(this.s=4,nt(14),y=!1),En(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==zo){this.s=4,nt(15),En(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else En(this.i,this.l,rn,null),$o(this,rn);if(tl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||J.length!=0||this.h.h||(this.s=1,nt(16),y=!1),this.o=this.o&&y,!y)En(this.i,this.l,J,"[Invalid Chunked Response]"),un(this),Or(this);else if(0<J.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),Xo(yt),yt.M=!0,nt(11))}}else En(this.i,this.l,J,null),$o(this,J);st==4&&un(this),this.o&&!this.J&&(st==4?Ns(this.j,this):(this.o=!1,$e(this)))}else As(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),un(this),Or(this)}}}catch{}finally{}};function tl(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function yc(l,f){var y=l.C,w=f.indexOf(`
`,y);return w==-1?_s:(y=Number(f.substring(y,w)),isNaN(y)?zo:(w+=1,w+y>f.length?_s:(f=f.slice(w,w+y),l.C=w+y,f)))}In.prototype.cancel=function(){this.J=!0,un(this)};function $e(l){l.S=Date.now()+l.I,nl(l,l.I)}function nl(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=wn(N(l.ba,l),f)}function Ni(l){l.B&&(p.clearTimeout(l.B),l.B=null)}In.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(jo(this.i,this.A),this.L!=2&&(ir(),nt(17)),un(this),this.s=2,Or(this)):nl(this,this.S-l)};function Or(l){l.j.G==0||l.J||Ns(l.j,l)}function un(l){Ni(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,Vo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function $o(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||jt(y.h,l))){if(!l.K&&jt(y.h,l)&&y.G==3){try{var w=y.Da.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var b=w;if(b[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)ks(y),Pn(y);else break e;Ps(y),nt(18)}}else y.za=b[1],0<y.za-y.T&&37500>b[2]&&y.F&&y.v==0&&!y.C&&(y.C=wn(N(y.Za,y),6e3));if(1>=il(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else ur(y,11)}else if((l.K||y.g==l)&&ks(y),!_e(f))for(b=y.Da.g.parse(f),f=0;f<b.length;f++){let xe=b[f];if(y.T=xe[0],xe=xe[1],y.G==2)if(xe[0]=="c"){y.K=xe[1],y.ia=xe[2];const yt=xe[3];yt!=null&&(y.la=yt,y.j.info("VER="+y.la));const st=xe[4];st!=null&&(y.Aa=st,y.j.info("SVER="+y.Aa));const hn=xe[5];hn!=null&&typeof hn=="number"&&0<hn&&(w=1.5*hn,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const rn=l.g;if(rn){const Mi=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mi){var j=w.h;j.g||Mi.indexOf("spdy")==-1&&Mi.indexOf("quic")==-1&&Mi.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(qo(j,j.h),j.h=null))}if(w.D){const Ds=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ds&&(w.ya=Ds,ze(w.I,w.D,Ds))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var J=l;if(w.qa=yl(w,w.J?w.ia:null,w.W),J.K){sl(w.h,J);var Fe=J,ht=w.L;ht&&(Fe.I=ht),Fe.B&&(Ni(Fe),$e(Fe)),w.g=J}else bi(w);0<y.i.length&&Bn(y)}else xe[0]!="stop"&&xe[0]!="close"||ur(y,7);else y.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?ur(y,7):It(y):xe[0]!="noop"&&y.l&&y.l.ta(xe),y.v=0)}}ir(4)}catch{}}var rl=class{constructor(l,f){this.g=l,this.map=f}};function xi(l){this.l=l||10,p.PerformanceNavigationTiming?(l=p.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function en(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function il(l){return l.h?1:l.g?l.g.size:0}function jt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function qo(l,f){l.g?l.g.add(f):l.h=f}function sl(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}xi.prototype.cancel=function(){if(this.i=ol(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ol(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return Q(l.i)}function ws(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,w=0;w<y;w++)f.push(l[w]);return f}f=[],y=0;for(w in l)f[y++]=l[w];return f}function Es(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const w in l)f[y++]=w;return f}}}function Lr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=Es(l),w=ws(l),b=w.length,j=0;j<b;j++)f.call(void 0,w[j],y&&y[j],l)}var Di=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _c(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var w=l[y].indexOf("="),b=null;if(0<=w){var j=l[y].substring(0,w);b=l[y].substring(w+1)}else j=l[y];f(j,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function sr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof sr){this.h=l.h,Vi(this,l.j),this.o=l.o,this.g=l.g,br(this,l.s),this.l=l.l;var f=l.i,y=new Fn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),Mr(this,y),this.m=l.m}else l&&(f=String(l).match(Di))?(this.h=!1,Vi(this,f[1]||"",!0),this.o=ke(f[2]||""),this.g=ke(f[3]||"",!0),br(this,f[4]),this.l=ke(f[5]||"",!0),Mr(this,f[6]||"",!0),this.m=ke(f[7]||"")):(this.h=!1,this.i=new Fn(null,this.h))}sr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Fr(f,Ts,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Fr(f,Ts,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Fr(y,y.charAt(0)=="/"?ul:ll,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Fr(y,Ho)),l.join("")};function tn(l){return new sr(l)}function Vi(l,f,y){l.j=y?ke(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function br(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function Mr(l,f,y){f instanceof Fn?(l.i=f,jn(l.i,l.h)):(y||(f=Fr(f,cl)),l.i=new Fn(f,l.h))}function ze(l,f,y){l.i.set(f,y)}function Ur(l){return ze(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ke(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Fr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,al),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function al(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Ts=/[#\/\?@]/g,ll=/[#\?:]/g,ul=/[#\?]/g,cl=/[#\?@]/g,Ho=/#/g;function Fn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Tt(l){l.g||(l.g=new Map,l.h=0,l.i&&_c(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}r=Fn.prototype,r.add=function(l,f){Tt(this),this.i=null,l=cn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function Sn(l,f){Tt(l),f=cn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function An(l,f){return Tt(l),f=cn(l,f),l.g.has(f)}r.forEach=function(l,f){Tt(this),this.g.forEach(function(y,w){y.forEach(function(b){l.call(f,b,w,this)},this)},this)},r.na=function(){Tt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let w=0;w<f.length;w++){const b=l[w];for(let j=0;j<b.length;j++)y.push(f[w])}return y},r.V=function(l){Tt(this);let f=[];if(typeof l=="string")An(this,l)&&(f=f.concat(this.g.get(cn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},r.set=function(l,f){return Tt(this),this.i=null,l=cn(this,l),An(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},r.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function jr(l,f,y){Sn(l,f),0<y.length&&(l.i=null,l.g.set(cn(l,f),Q(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var w=f[y];const j=encodeURIComponent(String(w)),J=this.V(w);for(w=0;w<J.length;w++){var b=j;J[w]!==""&&(b+="="+encodeURIComponent(String(J[w]))),l.push(b)}}return this.i=l.join("&")};function cn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function jn(l,f){f&&!l.j&&(Tt(l),l.i=null,l.g.forEach(function(y,w){var b=w.toLowerCase();w!=b&&(Sn(this,w),jr(this,b,y))},l)),l.j=f}function vc(l,f){const y=new Ci;if(p.Image){const w=new Image;w.onload=z(Ht,y,"TestLoadImage: loaded",!0,f,w),w.onerror=z(Ht,y,"TestLoadImage: error",!1,f,w),w.onabort=z(Ht,y,"TestLoadImage: abort",!1,f,w),w.ontimeout=z(Ht,y,"TestLoadImage: timeout",!1,f,w),p.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else f(!1)}function hl(l,f){const y=new Ci,w=new AbortController,b=setTimeout(()=>{w.abort(),Ht(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:w.signal}).then(j=>{clearTimeout(b),j.ok?Ht(y,"TestPingServer: ok",!0,f):Ht(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(b),Ht(y,"TestPingServer: error",!1,f)})}function Ht(l,f,y,w,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),w(y)}catch{}}function wc(){this.g=new bo}function dl(l,f,y){const w=y||"";try{Lr(l,function(b,j){let J=b;v(b)&&(J=Oo(b)),f.push(w+j+"="+encodeURIComponent(J))})}catch(b){throw f.push(w+"type="+encodeURIComponent("_badmap")),b}}function or(l){this.l=l.Ub||null,this.j=l.eb||!1}G(or,Ai),or.prototype.g=function(){return new Oi(this.l,this.j)},or.prototype.i=function(l){return function(){return l}}({});function Oi(l,f){ut.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}G(Oi,ut),r=Oi.prototype,r.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Cn(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||p).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rn(this)),this.readyState=0},r.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function fl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}r.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Rn(this):Cn(this),this.readyState==3&&fl(this)}},r.Ra=function(l){this.g&&(this.response=this.responseText=l,Rn(this))},r.Qa=function(l){this.g&&(this.response=l,Rn(this))},r.ga=function(){this.g&&Rn(this)};function Rn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Cn(l)}r.setRequestHeader=function(l,f){this.u.append(l,f)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function Cn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ar(l){let f="";return Ie(l,function(y,w){f+=w,f+=":",f+=y,f+=`\r
`}),f}function zr(l,f,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=ar(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):ze(l,f,y))}function Qe(l){ut.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}G(Qe,ut);var Ec=/^https?$/i,Wo=["POST","PUT"];r=Qe.prototype,r.Ha=function(l){this.J=l},r.ea=function(l,f,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tn.g(),this.v=this.o?ds(this.o):ds(Tn),this.g.onreadystatechange=N(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(j){Li(this,j);return}if(l=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var b in w)y.set(b,w[b]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())y.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),b=p.FormData&&l instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Wo,f,void 0))||w||b||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,J]of y)this.g.setRequestHeader(j,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ss(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){Li(this,j)}};function Li(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Is(l),nn(l)}function Is(l){l.A||(l.A=!0,ct(l,"complete"),ct(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ct(this,"complete"),ct(this,"abort"),nn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nn(this,!0)),Qe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ko(this):this.bb())},r.bb=function(){Ko(this)};function Ko(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Wt(l)!=4||l.Z()!=2)){if(l.u&&Wt(l)==4)xo(l.Ea,0,l);else if(ct(l,"readystatechange"),Wt(l)==4){l.h=!1;try{const J=l.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var w;if(w=J===0){var b=String(l.D).match(Di)[1]||null;!b&&p.self&&p.self.location&&(b=p.self.location.protocol.slice(0,-1)),w=!Ec.test(b?b.toLowerCase():"")}y=w}if(y)ct(l,"complete"),ct(l,"success");else{l.m=6;try{var j=2<Wt(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",Is(l)}}finally{nn(l)}}}}function nn(l,f){if(l.g){Ss(l);const y=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ct(l,"ready");try{y.onreadystatechange=w}catch{}}}function Ss(l){l.I&&(p.clearTimeout(l.I),l.I=null)}r.isActive=function(){return!!this.g};function Wt(l){return l.g?l.g.readyState:0}r.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Lo(f)}};function Go(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function As(l){const f={};l=(l.g&&2<=Wt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(_e(l[w]))continue;var y=D(l[w]);const b=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=f[b]||[];f[b]=j,j.push(y)}C(f,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function Qo(l){this.Aa=0,this.i=[],this.j=new Ci,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zn("baseRetryDelayMs",5e3,l),this.cb=zn("retryDelaySeedMs",1e4,l),this.Wa=zn("forwardChannelMaxRetries",2,l),this.wa=zn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new xi(l&&l.concurrentRequestLimit),this.Da=new wc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Qo.prototype,r.la=8,r.G=1,r.connect=function(l,f,y,w){nt(0),this.W=l,this.H=f||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=yl(this,null,this.W),Bn(this)};function It(l){if(Rs(l),l.G==3){var f=l.U++,y=tn(l.I);if(ze(y,"SID",l.K),ze(y,"RID",f),ze(y,"TYPE","terminate"),lr(l,y),f=new In(l,l.j,f),f.L=2,f.v=Ur(tn(y)),y=!1,p.navigator&&p.navigator.sendBeacon)try{y=p.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&p.Image&&(new Image().src=f.v,y=!0),y||(f.g=_l(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$e(f)}gl(l)}function Pn(l){l.g&&(Xo(l),l.g.cancel(),l.g=null)}function Rs(l){Pn(l),l.u&&(p.clearTimeout(l.u),l.u=null),ks(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&p.clearTimeout(l.s),l.s=null)}function Bn(l){if(!en(l.h)&&!l.s){l.s=!0;var f=l.Ga;je||te(),Z||(je(),Z=!0),ce.add(f,l),l.B=0}}function Tc(l,f){return il(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=wn(N(l.Ga,l,f),ml(l,l.B)),l.B++,!0)}r.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const b=new In(this,this.j,l);let j=this.o;if(this.S&&(j?(j=T(j),k(j,this.S)):j=this.S),this.m!==null||this.O||(b.H=j,j=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Br(this,b,f),y=tn(this.I),ze(y,"RID",l),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),lr(this,y),j&&(this.O?f="headers="+encodeURIComponent(String(ar(j)))+"&"+f:this.m&&zr(y,this.m,j)),qo(this.h,b),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",f),ze(y,"SID","null"),b.T=!0,vs(b,y,null)):vs(b,y,f),this.G=2}}else this.G==3&&(l?Cs(this,l):this.i.length==0||en(this.h)||Cs(this))};function Cs(l,f){var y;f?y=f.l:y=l.U++;const w=tn(l.I);ze(w,"SID",l.K),ze(w,"RID",y),ze(w,"AID",l.T),lr(l,w),l.m&&l.o&&zr(w,l.m,l.o),y=new In(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Br(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),qo(l.h,y),vs(y,w,f)}function lr(l,f){l.H&&Ie(l.H,function(y,w){ze(f,w,y)}),l.l&&Lr({},function(y,w){ze(f,w,y)})}function Br(l,f,y){y=Math.min(l.i.length,y);var w=l.l?N(l.l.Na,l.l,l):null;e:{var b=l.i;let j=-1;for(;;){const J=["count="+y];j==-1?0<y?(j=b[0].g,J.push("ofs="+j)):j=0:J.push("ofs="+j);let Fe=!0;for(let ht=0;ht<y;ht++){let xe=b[ht].g;const yt=b[ht].map;if(xe-=j,0>xe)j=Math.max(0,b[ht].g-100),Fe=!1;else try{dl(yt,J,"req"+xe+"_")}catch{w&&w(yt)}}if(Fe){w=J.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,w}function bi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;je||te(),Z||(je(),Z=!0),ce.add(f,l),l.v=0}}function Ps(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=wn(N(l.Fa,l),ml(l,l.v)),l.v++,!0)}r.Fa=function(){if(this.u=null,pl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=wn(N(this.ab,this),l)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),Pn(this),pl(this))};function Xo(l){l.A!=null&&(p.clearTimeout(l.A),l.A=null)}function pl(l){l.g=new In(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=tn(l.qa);ze(f,"RID","rpc"),ze(f,"SID",l.K),ze(f,"AID",l.T),ze(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&ze(f,"TO",l.ja),ze(f,"TYPE","xmlhttp"),lr(l,f),l.m&&l.o&&zr(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Ur(tn(f)),y.m=null,y.P=!0,Bo(y,l)}r.Za=function(){this.C!=null&&(this.C=null,Pn(this),Ps(this),nt(19))};function ks(l){l.C!=null&&(p.clearTimeout(l.C),l.C=null)}function Ns(l,f){var y=null;if(l.g==f){ks(l),Xo(l),l.g=null;var w=2}else if(jt(l.h,f))y=f.D,sl(l.h,f),w=1;else return;if(l.G!=0){if(f.o)if(w==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var b=l.B;w=Ri(),ct(w,new ms(w,y)),Bn(l)}else bi(l);else if(b=f.s,b==3||b==0&&0<f.X||!(w==1&&Tc(l,f)||w==2&&Ps(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),b){case 1:ur(l,5);break;case 4:ur(l,10);break;case 3:ur(l,6);break;default:ur(l,2)}}}function ml(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function ur(l,f){if(l.j.info("Error code "+f),f==2){var y=N(l.fb,l),w=l.Xa;const b=!w;w=new sr(w||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Vi(w,"https"),Ur(w),b?vc(w.toString(),y):hl(w.toString(),y)}else nt(2);l.G=0,l.l&&l.l.sa(f),gl(l),Rs(l)}r.fb=function(l){l?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function gl(l){if(l.G=0,l.ka=[],l.l){const f=ol(l.h);(f.length!=0||l.i.length!=0)&&(q(l.ka,f),q(l.ka,l.i),l.h.i.length=0,Q(l.i),l.i.length=0),l.l.ra()}}function yl(l,f,y){var w=y instanceof sr?tn(y):new sr(y);if(w.g!="")f&&(w.g=f+"."+w.g),br(w,w.s);else{var b=p.location;w=b.protocol,f=f?f+"."+b.hostname:b.hostname,b=+b.port;var j=new sr(null);w&&Vi(j,w),f&&(j.g=f),b&&br(j,b),y&&(j.l=y),w=j}return y=l.D,f=l.ya,y&&f&&ze(w,y,f),ze(w,"VER",l.la),lr(l,w),w}function _l(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Qe(new or({eb:y})):new Qe(l.pa),f.Ha(l.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yo(){}r=Yo.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function xs(){}xs.prototype.g=function(l,f){return new zt(l,f)};function zt(l,f){ut.call(this),this.g=new Qo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!_e(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!_e(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new $n(this)}G(zt,ut),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){It(this.g)},zt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Oo(l),l=y);f.i.push(new rl(f.Ya++,l)),f.G==3&&Bn(f)},zt.prototype.N=function(){this.g.l=null,delete this.j,It(this.g),delete this.g,zt.aa.N.call(this)};function vl(l){Mn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}G(vl,Mn);function wl(){ps.call(this),this.status=1}G(wl,ps);function $n(l){this.g=l}G($n,Yo),$n.prototype.ua=function(){ct(this.g,"a")},$n.prototype.ta=function(l){ct(this.g,new vl(l))},$n.prototype.sa=function(l){ct(this.g,new wl)},$n.prototype.ra=function(){ct(this.g,"b")},xs.prototype.createWebChannel=xs.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,Ly=function(){return new xs},Oy=function(){return Ri()},Vy=Un,hd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ys.NO_ERROR=0,ys.TIMEOUT=8,ys.HTTP_ERROR=6,wu=ys,Za.COMPLETE="complete",Dy=Za,fs.EventType=ln,ln.OPEN="a",ln.CLOSE="b",ln.ERROR="c",ln.MESSAGE="d",ut.prototype.listen=ut.prototype.K,Ta=fs,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,xy=Qe}).apply(typeof pu<"u"?pu:typeof self<"u"?self:typeof window<"u"?window:{});const Jm="@firebase/firestore",Zm="4.7.7";/**
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
 */class Mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
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
 */let Eo="11.3.0";/**
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
 */const Zi=new Od("@firebase/firestore");function Zs(){return Zi.logLevel}function ne(r,...e){if(Zi.logLevel<=Re.DEBUG){const t=e.map(Md);Zi.debug(`Firestore (${Eo}): ${r}`,...t)}}function Ar(r,...e){if(Zi.logLevel<=Re.ERROR){const t=e.map(Md);Zi.error(`Firestore (${Eo}): ${r}`,...t)}}function co(r,...e){if(Zi.logLevel<=Re.WARN){const t=e.map(Md);Zi.warn(`Firestore (${Eo}): ${r}`,...t)}}function Md(r){if(typeof r=="string")return r;try{/**
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
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
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
 */function me(r="Unexpected state"){const e=`FIRESTORE (${Eo}) INTERNAL ASSERTION FAILED: `+r;throw Ar(e),new Error(e)}function Ue(r,e){r||me()}function we(r,e){return r}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends Nr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class by{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Mt.UNAUTHENTICATED))}shutdown(){}}class ZT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class eI{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new fi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new fi,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},p=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>p(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new fi)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string"),new by(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new Mt(e)}}class tI{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class nI{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new tI(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rI{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,_n(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Ue(this.o===void 0);const s=u=>{u.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new eg(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ue(typeof t.token=="string"),this.R=t.token,new eg(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function iI(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(){return new TextEncoder}/**
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
 */class My{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=iI(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Ce(r,e){return r<e?-1:r>e?1:0}function fd(r,e){const t=dd().encode(r),s=dd().encode(e);for(let o=0;o<Math.min(t.length,s.length);o++){const u=Ce(t[o],s[o]);if(u!==0)return u}return Ce(t.length,s.length)}function ho(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
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
 */const tg=-62135596800,ng=1e6;class pt{static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*ng);return new pt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<tg)throw new se(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ng}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-tg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new pt(0,0))}static max(){return new ve(new pt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const rg="__name__";class Gn{constructor(e,t,s){t===void 0?t=0:t>e.length&&me(),s===void 0?s=e.length-t:s>e.length-t&&me(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Gn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Gn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Gn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Ce(e.length,t.length)}static compareSegments(e,t){const s=Gn.isNumericId(e),o=Gn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Gn.extractNumericId(e).compare(Gn.extractNumericId(t)):fd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return di.fromString(e.substring(4,e.length-2))}}class Ge extends Gn{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new se(H.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ge(t)}static emptyPath(){return new Ge([])}}const sI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends Gn{construct(e,t,s){return new Ct(e,t,s)}static isValidIdentifier(e){return sI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===rg}static keyField(){return new Ct([rg])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new se(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new se(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new se(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(u(),o++)}if(u(),h)throw new se(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(t)}static emptyPath(){return new Ct([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(Ge.fromString(e))}static fromName(e){return new ue(Ge.fromString(e).popFirst(5))}static empty(){return new ue(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new Ge(e.slice()))}}/**
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
 */const Da=-1;function oI(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=ve.fromTimestamp(s===1e9?new pt(t+1,0):new pt(t,s));return new gi(o,ue.empty(),e)}function aI(r){return new gi(r.readTime,r.key,Da)}class gi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new gi(ve.min(),ue.empty(),Da)}static max(){return new gi(ve.max(),ue.empty(),Da)}}function lI(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ue.comparator(r.documentKey,e.documentKey),t!==0?t:Ce(r.largestBatchId,e.largestBatchId))}/**
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
 */const uI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function To(r){if(r.code!==H.FAILED_PRECONDITION||r.message!==uI)throw r;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):B.reject(t)}static resolve(e){return new B((t,s)=>{t(e)})}static reject(e){return new B((t,s)=>{s(e)})}static waitFor(e){return new B((t,s)=>{let o=0,u=0,h=!1;e.forEach(p=>{++o,p.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=B.resolve(!1);for(const s of e)t=t.next(o=>o?B.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new B((s,o)=>{const u=e.length,h=new Array(u);let p=0;for(let g=0;g<u;g++){const v=g;t(e[v]).next(E=>{h[v]=E,++p,p===u&&s(h)},E=>o(E))}})}static doWhile(e,t){return new B((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function hI(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Io(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Ju{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.oe(s),this._e=s=>t.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Ju.ae=-1;/**
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
 */const Ud=-1;function Zu(r){return r==null}function Vu(r){return r===0&&1/r==-1/0}function dI(r){return typeof r=="number"&&Number.isInteger(r)&&!Vu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Uy="";function fI(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=ig(e)),e=pI(r.get(t),e);return ig(e)}function pI(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case Uy:t+="";break;default:t+=u}}return t}function ig(r){return r+Uy+""}/**
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
 */function sg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ns(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Fy(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||Rt.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mu(this.root,e,this.comparator,!1)}getReverseIterator(){return new mu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mu(this.root,e,this.comparator,!0)}}class mu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Rt{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Rt.RED,this.left=o??Rt.EMPTY,this.right=u??Rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Rt(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Rt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}Rt.EMPTY=null,Rt.RED=!0,Rt.BLACK=!1;Rt.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,t,s,o,u){return this}insert(e,t,s){return new Rt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class mt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new og(this.data.getIterator())}getIteratorFrom(e){return new og(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new mt(this.comparator);return t.data=e,t}}class og{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ln{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new Ln([])}unionWith(e){let t=new mt(Ct.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ln(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ho(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new jy("Invalid base64 string: "+u):u}}(e);return new kt(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new kt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const mI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yi(r){if(Ue(!!r),typeof r=="string"){let e=0;const t=mI.exec(r);if(Ue(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:it(r.seconds),nanos:it(r.nanos)}}function it(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function _i(r){return typeof r=="string"?kt.fromBase64String(r):kt.fromUint8Array(r)}/**
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
 */const zy="server_timestamp",By="__type__",$y="__previous_value__",qy="__local_write_time__";function Fd(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[By])===null||t===void 0?void 0:t.stringValue)===zy}function ec(r){const e=r.mapValue.fields[$y];return Fd(e)?ec(e):e}function Va(r){const e=yi(r.mapValue.fields[qy].timestampValue);return new pt(e.seconds,e.nanos)}/**
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
 */class gI{constructor(e,t,s,o,u,h,p,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=v}}const Ou="(default)";class Oa{constructor(e,t){this.projectId=e,this.database=t||Ou}static empty(){return new Oa("","")}get isDefaultDatabase(){return this.database===Ou}isEqual(e){return e instanceof Oa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Hy="__type__",yI="__max__",gu={mapValue:{}},Wy="__vector__",Lu="value";function vi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Fd(r)?4:vI(r)?9007199254740991:_I(r)?10:11:me()}function Zn(r,e){if(r===e)return!0;const t=vi(r);if(t!==vi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Va(r).isEqual(Va(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=yi(o.timestampValue),p=yi(u.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return _i(o.bytesValue).isEqual(_i(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return it(o.geoPointValue.latitude)===it(u.geoPointValue.latitude)&&it(o.geoPointValue.longitude)===it(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return it(o.integerValue)===it(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=it(o.doubleValue),p=it(u.doubleValue);return h===p?Vu(h)===Vu(p):isNaN(h)&&isNaN(p)}return!1}(r,e);case 9:return ho(r.arrayValue.values||[],e.arrayValue.values||[],Zn);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},p=u.mapValue.fields||{};if(sg(h)!==sg(p))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(p[g]===void 0||!Zn(h[g],p[g])))return!1;return!0}(r,e);default:return me()}}function La(r,e){return(r.values||[]).find(t=>Zn(t,e))!==void 0}function fo(r,e){if(r===e)return 0;const t=vi(r),s=vi(e);if(t!==s)return Ce(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ce(r.booleanValue,e.booleanValue);case 2:return function(u,h){const p=it(u.integerValue||u.doubleValue),g=it(h.integerValue||h.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1}(r,e);case 3:return ag(r.timestampValue,e.timestampValue);case 4:return ag(Va(r),Va(e));case 5:return fd(r.stringValue,e.stringValue);case 6:return function(u,h){const p=_i(u),g=_i(h);return p.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(u,h){const p=u.split("/"),g=h.split("/");for(let v=0;v<p.length&&v<g.length;v++){const E=Ce(p[v],g[v]);if(E!==0)return E}return Ce(p.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,h){const p=Ce(it(u.latitude),it(h.latitude));return p!==0?p:Ce(it(u.longitude),it(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return lg(r.arrayValue,e.arrayValue);case 10:return function(u,h){var p,g,v,E;const A=u.fields||{},N=h.fields||{},z=(p=A[Lu])===null||p===void 0?void 0:p.arrayValue,G=(g=N[Lu])===null||g===void 0?void 0:g.arrayValue,Q=Ce(((v=z==null?void 0:z.values)===null||v===void 0?void 0:v.length)||0,((E=G==null?void 0:G.values)===null||E===void 0?void 0:E.length)||0);return Q!==0?Q:lg(z,G)}(r.mapValue,e.mapValue);case 11:return function(u,h){if(u===gu.mapValue&&h===gu.mapValue)return 0;if(u===gu.mapValue)return 1;if(h===gu.mapValue)return-1;const p=u.fields||{},g=Object.keys(p),v=h.fields||{},E=Object.keys(v);g.sort(),E.sort();for(let A=0;A<g.length&&A<E.length;++A){const N=fd(g[A],E[A]);if(N!==0)return N;const z=fo(p[g[A]],v[E[A]]);if(z!==0)return z}return Ce(g.length,E.length)}(r.mapValue,e.mapValue);default:throw me()}}function ag(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ce(r,e);const t=yi(r),s=yi(e),o=Ce(t.seconds,s.seconds);return o!==0?o:Ce(t.nanos,s.nanos)}function lg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=fo(t[o],s[o]);if(u)return u}return Ce(t.length,s.length)}function po(r){return pd(r)}function pd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=yi(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return _i(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return ue.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=pd(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${pd(t.fields[h])}`;return o+"}"}(r.mapValue):me()}function Eu(r){switch(vi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ec(r);return e?16+Eu(e):16;case 5:return 2*r.stringValue.length;case 6:return _i(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Eu(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return ns(s.fields,(u,h)=>{o+=u.length+Eu(h)}),o}(r.mapValue);default:throw me()}}function ug(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function md(r){return!!r&&"integerValue"in r}function jd(r){return!!r&&"arrayValue"in r}function cg(r){return!!r&&"nullValue"in r}function hg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Tu(r){return!!r&&"mapValue"in r}function _I(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Hy])===null||t===void 0?void 0:t.stringValue)===Wy}function Ra(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return ns(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ra(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ra(r.arrayValue.values[t]);return e}return Object.assign({},r)}function vI(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===yI}/**
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
 */class vn{constructor(e){this.value=e}static empty(){return new vn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Tu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ra(t)}setAll(e){let t=Ct.emptyPath(),s={},o=[];e.forEach((h,p)=>{if(!t.isImmediateParentOf(p)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=p.popLast()}h?s[p.lastSegment()]=Ra(h):o.push(p.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Tu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Zn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Tu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ns(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new vn(Ra(this.value))}}function Ky(r){const e=[];return ns(r.fields,(t,s)=>{const o=new Ct([t]);if(Tu(s)){const u=Ky(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new Ln(e)}/**
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
 */class Ut{constructor(e,t,s,o,u,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=p}static newInvalidDocument(e){return new Ut(e,0,ve.min(),ve.min(),ve.min(),vn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ut(e,1,t,ve.min(),s,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,ve.min(),ve.min(),vn.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,ve.min(),ve.min(),vn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bu{constructor(e,t){this.position=e,this.inclusive=t}}function dg(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=ue.comparator(ue.fromName(h.referenceValue),t.key):s=fo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function fg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Zn(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Mu{constructor(e,t="asc"){this.field=e,this.dir=t}}function wI(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Gy{}class lt extends Gy{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new TI(e,t,s):t==="array-contains"?new AI(e,s):t==="in"?new RI(e,s):t==="not-in"?new CI(e,s):t==="array-contains-any"?new PI(e,s):new lt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new II(e,s):new SI(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(fo(t,this.value)):t!==null&&vi(this.value)===vi(t)&&this.matchesComparison(fo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class bn extends Gy{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new bn(e,t)}matches(e){return Qy(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Qy(r){return r.op==="and"}function Xy(r){return EI(r)&&Qy(r)}function EI(r){for(const e of r.filters)if(e instanceof bn)return!1;return!0}function gd(r){if(r instanceof lt)return r.field.canonicalString()+r.op.toString()+po(r.value);if(Xy(r))return r.filters.map(e=>gd(e)).join(",");{const e=r.filters.map(t=>gd(t)).join(",");return`${r.op}(${e})`}}function Yy(r,e){return r instanceof lt?function(s,o){return o instanceof lt&&s.op===o.op&&s.field.isEqual(o.field)&&Zn(s.value,o.value)}(r,e):r instanceof bn?function(s,o){return o instanceof bn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,p)=>u&&Yy(h,o.filters[p]),!0):!1}(r,e):void me()}function Jy(r){return r instanceof lt?function(t){return`${t.field.canonicalString()} ${t.op} ${po(t.value)}`}(r):r instanceof bn?function(t){return t.op.toString()+" {"+t.getFilters().map(Jy).join(" ,")+"}"}(r):"Filter"}class TI extends lt{constructor(e,t,s){super(e,t,s),this.key=ue.fromName(s.referenceValue)}matches(e){const t=ue.comparator(e.key,this.key);return this.matchesComparison(t)}}class II extends lt{constructor(e,t){super(e,"in",t),this.keys=Zy("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class SI extends lt{constructor(e,t){super(e,"not-in",t),this.keys=Zy("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Zy(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ue.fromName(s.referenceValue))}class AI extends lt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return jd(t)&&La(t.arrayValue,this.value)}}class RI extends lt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&La(this.value.arrayValue,t)}}class CI extends lt{constructor(e,t){super(e,"not-in",t)}matches(e){if(La(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!La(this.value.arrayValue,t)}}class PI extends lt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!jd(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>La(this.value.arrayValue,s))}}/**
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
 */class kI{constructor(e,t=null,s=[],o=[],u=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=p,this.le=null}}function pg(r,e=null,t=[],s=[],o=null,u=null,h=null){return new kI(r,e,t,s,o,u,h)}function zd(r){const e=we(r);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>gd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),Zu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>po(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>po(s)).join(",")),e.le=t}return e.le}function Bd(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!wI(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Yy(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!fg(r.startAt,e.startAt)&&fg(r.endAt,e.endAt)}function yd(r){return ue.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class $a{constructor(e,t=null,s=[],o=[],u=null,h="F",p=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=p,this.endAt=g,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function NI(r,e,t,s,o,u,h,p){return new $a(r,e,t,s,o,u,h,p)}function tc(r){return new $a(r)}function mg(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function e_(r){return r.collectionGroup!==null}function Ca(r){const e=we(r);if(e.he===null){e.he=[];const t=new Set;for(const u of e.explicitOrderBy)e.he.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new mt(Ct.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(v=>{v.isInequality()&&(p=p.add(v.field))})}),p})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.he.push(new Mu(u,s))}),t.has(Ct.keyField().canonicalString())||e.he.push(new Mu(Ct.keyField(),s))}return e.he}function Qn(r){const e=we(r);return e.Pe||(e.Pe=xI(e,Ca(r))),e.Pe}function xI(r,e){if(r.limitType==="F")return pg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Mu(o.field,u)});const t=r.endAt?new bu(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new bu(r.startAt.position,r.startAt.inclusive):null;return pg(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function _d(r,e){const t=r.filters.concat([e]);return new $a(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function vd(r,e,t){return new $a(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function nc(r,e){return Bd(Qn(r),Qn(e))&&r.limitType===e.limitType}function t_(r){return`${zd(Qn(r))}|lt:${r.limitType}`}function eo(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>Jy(o)).join(", ")}]`),Zu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>po(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>po(o)).join(",")),`Target(${s})`}(Qn(r))}; limitType=${r.limitType})`}function rc(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ue.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of Ca(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,p,g){const v=dg(h,p,g);return h.inclusive?v<=0:v<0}(s.startAt,Ca(s),o)||s.endAt&&!function(h,p,g){const v=dg(h,p,g);return h.inclusive?v>=0:v>0}(s.endAt,Ca(s),o))}(r,e)}function DI(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function n_(r){return(e,t)=>{let s=!1;for(const o of Ca(r)){const u=VI(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function VI(r,e,t){const s=r.field.isKeyField()?ue.comparator(e.key,t.key):function(u,h,p){const g=h.data.field(u),v=p.data.field(u);return g!==null&&v!==null?fo(g,v):me()}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return me()}}/**
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
 */class rs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ns(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return Fy(this.inner)}size(){return this.innerSize}}/**
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
 */const OI=new Ze(ue.comparator);function Rr(){return OI}const r_=new Ze(ue.comparator);function Ia(...r){let e=r_;for(const t of r)e=e.insert(t.key,t);return e}function i_(r){let e=r_;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Yi(){return Pa()}function s_(){return Pa()}function Pa(){return new rs(r=>r.toString(),(r,e)=>r.isEqual(e))}const LI=new Ze(ue.comparator),bI=new mt(ue.comparator);function Pe(...r){let e=bI;for(const t of r)e=e.add(t);return e}const MI=new mt(Ce);function UI(){return MI}/**
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
 */function $d(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vu(e)?"-0":e}}function o_(r){return{integerValue:""+r}}function FI(r,e){return dI(e)?o_(e):$d(r,e)}/**
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
 */class ic{constructor(){this._=void 0}}function jI(r,e,t){return r instanceof ba?function(o,u){const h={fields:{[By]:{stringValue:zy},[qy]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Fd(u)&&(u=ec(u)),u&&(h.fields[$y]=u),{mapValue:h}}(t,e):r instanceof Ma?l_(r,e):r instanceof Ua?u_(r,e):function(o,u){const h=a_(o,u),p=gg(h)+gg(o.Ie);return md(h)&&md(o.Ie)?o_(p):$d(o.serializer,p)}(r,e)}function zI(r,e,t){return r instanceof Ma?l_(r,e):r instanceof Ua?u_(r,e):t}function a_(r,e){return r instanceof Uu?function(s){return md(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class ba extends ic{}class Ma extends ic{constructor(e){super(),this.elements=e}}function l_(r,e){const t=c_(e);for(const s of r.elements)t.some(o=>Zn(o,s))||t.push(s);return{arrayValue:{values:t}}}class Ua extends ic{constructor(e){super(),this.elements=e}}function u_(r,e){let t=c_(e);for(const s of r.elements)t=t.filter(o=>!Zn(o,s));return{arrayValue:{values:t}}}class Uu extends ic{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function gg(r){return it(r.integerValue||r.doubleValue)}function c_(r){return jd(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class BI{constructor(e,t){this.field=e,this.transform=t}}function $I(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Ma&&o instanceof Ma||s instanceof Ua&&o instanceof Ua?ho(s.elements,o.elements,Zn):s instanceof Uu&&o instanceof Uu?Zn(s.Ie,o.Ie):s instanceof ba&&o instanceof ba}(r.transform,e.transform)}class qI{constructor(e,t){this.version=e,this.transformResults=t}}class Tr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Tr}static exists(e){return new Tr(void 0,e)}static updateTime(e){return new Tr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Iu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class sc{}function h_(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new f_(r.key,Tr.none()):new qa(r.key,r.data,Tr.none());{const t=r.data,s=vn.empty();let o=new mt(Ct.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new is(r.key,s,new Ln(o.toArray()),Tr.none())}}function HI(r,e,t){r instanceof qa?function(o,u,h){const p=o.value.clone(),g=_g(o.fieldTransforms,u,h.transformResults);p.setAll(g),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(r,e,t):r instanceof is?function(o,u,h){if(!Iu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const p=_g(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(d_(o)),g.setAll(p),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(r,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function ka(r,e,t,s){return r instanceof qa?function(u,h,p,g){if(!Iu(u.precondition,h))return p;const v=u.value.clone(),E=vg(u.fieldTransforms,g,h);return v.setAll(E),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(r,e,t,s):r instanceof is?function(u,h,p,g){if(!Iu(u.precondition,h))return p;const v=vg(u.fieldTransforms,g,h),E=h.data;return E.setAll(d_(u)),E.setAll(v),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(A=>A.field))}(r,e,t,s):function(u,h,p){return Iu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p}(r,e,t)}function WI(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=a_(s.transform,o||null);u!=null&&(t===null&&(t=vn.empty()),t.set(s.field,u))}return t||null}function yg(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&ho(s,o,(u,h)=>$I(u,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class qa extends sc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class is extends sc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function d_(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function _g(r,e,t){const s=new Map;Ue(r.length===t.length);for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,p=e.data.field(u.field);s.set(u.field,zI(h,p,t[o]))}return s}function vg(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,jI(u,h,e))}return s}class f_ extends sc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KI extends sc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class GI{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&HI(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ka(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ka(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=s_();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let p=this.applyToLocalView(h,u.mutatedFields);p=t.has(o.key)?null:p;const g=h_(h,p);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(ve.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&ho(this.mutations,e.mutations,(t,s)=>yg(t,s))&&ho(this.baseMutations,e.baseMutations,(t,s)=>yg(t,s))}}class qd{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ue(e.mutations.length===s.length);let o=function(){return LI}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new qd(e,t,s,o)}}/**
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
 */class QI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class XI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var at,De;function YI(r){switch(r){case H.OK:return me();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return me()}}function p_(r){if(r===void 0)return Ar("GRPC error has no .code"),H.UNKNOWN;switch(r){case at.OK:return H.OK;case at.CANCELLED:return H.CANCELLED;case at.UNKNOWN:return H.UNKNOWN;case at.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case at.INTERNAL:return H.INTERNAL;case at.UNAVAILABLE:return H.UNAVAILABLE;case at.UNAUTHENTICATED:return H.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case at.NOT_FOUND:return H.NOT_FOUND;case at.ALREADY_EXISTS:return H.ALREADY_EXISTS;case at.PERMISSION_DENIED:return H.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case at.ABORTED:return H.ABORTED;case at.OUT_OF_RANGE:return H.OUT_OF_RANGE;case at.UNIMPLEMENTED:return H.UNIMPLEMENTED;case at.DATA_LOSS:return H.DATA_LOSS;default:return me()}}(De=at||(at={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const JI=new di([4294967295,4294967295],0);function wg(r){const e=dd().encode(r),t=new Ny;return t.update(e),new Uint8Array(t.digest())}function Eg(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new di([t,s],0),new di([o,u],0)]}class Hd{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Sa(`Invalid padding: ${t}`);if(s<0)throw new Sa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Sa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Sa(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=di.fromNumber(this.Ee)}Ae(e,t,s){let o=e.add(t.multiply(di.fromNumber(s)));return o.compare(JI)===1&&(o=new di([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=wg(e),[s,o]=Eg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ae(s,o,u);if(!this.Re(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Hd(u,o,t);return s.forEach(p=>h.insert(p)),h}insert(e){if(this.Ee===0)return;const t=wg(e),[s,o]=Eg(t);for(let u=0;u<this.hashCount;u++){const h=this.Ae(s,o,u);this.Ve(h)}}Ve(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Sa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class oc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ha.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new oc(ve.min(),o,new Ze(Ce),Rr(),Pe())}}class Ha{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ha(s,t,Pe(),Pe(),Pe())}}/**
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
 */class Su{constructor(e,t,s,o){this.me=e,this.removedTargetIds=t,this.key=s,this.fe=o}}class m_{constructor(e,t){this.targetId=e,this.ge=t}}class g_{constructor(e,t,s=kt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Tg{constructor(){this.pe=0,this.ye=Ig(),this.we=kt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Pe(),t=Pe(),s=Pe();return this.ye.forEach((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:me()}}),new Ha(this.we,this.Se,e,t,s)}Me(){this.be=!1,this.ye=Ig()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ue(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class ZI{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Rr(),this.$e=yu(),this.Ue=yu(),this.Ke=new Ze(Ce)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const s=this.He(t);switch(e.state){case 0:this.Je(t)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(t);break;case 3:this.Je(t)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),s.Ce(e.resumeToken));break;default:me()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((s,o)=>{this.Je(o)&&t(o)})}Ze(e){const t=e.targetId,s=e.ge.count,o=this.Xe(t);if(o){const u=o.target;if(yd(u))if(s===0){const h=new ue(u.path);this.ze(t,h,Ut.newNoDocument(h,ve.min()))}else Ue(s===1);else{const h=this.et(t);if(h!==s){const p=this.tt(e),g=p?this.nt(p,e,h):1;if(g!==0){this.Ye(t);const v=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,v)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,p;try{h=_i(s).toUint8Array()}catch(g){if(g instanceof jy)return co("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new Hd(h,o,u)}catch(g){return co(g instanceof Sa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.Ee===0?null:p}nt(e,t,s){return t.ge.count===s-this.st(e,t.targetId)?0:2}st(e,t){const s=this.ke.getRemoteKeysForTarget(t);let o=0;return s.forEach(u=>{const h=this.ke.it(),p=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.ze(t,u,null),o++)}),o}ot(e){const t=new Map;this.qe.forEach((u,h)=>{const p=this.Xe(h);if(p){if(u.current&&yd(p.target)){const g=new ue(p.target.path);this._t(g).has(h)||this.ut(h,g)||this.ze(h,g,Ut.newNoDocument(g,e))}u.ve&&(t.set(h,u.Fe()),u.Me())}});let s=Pe();this.Ue.forEach((u,h)=>{let p=!0;h.forEachWhile(g=>{const v=this.Xe(g);return!v||v.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)}),p&&(s=s.add(u))}),this.Qe.forEach((u,h)=>h.setReadTime(e));const o=new oc(e,t,this.Ke,this.Qe,s);return this.Qe=Rr(),this.$e=yu(),this.Ue=yu(),this.Ke=new Ze(Ce),o}Ge(e,t){if(!this.Je(e))return;const s=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,s),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,s){if(!this.Je(e))return;const o=this.He(e);this.ut(e,t)?o.xe(t,1):o.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),s&&(this.Qe=this.Qe.insert(t,s))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Tg,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new mt(Ce),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new mt(Ce),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Tg),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function yu(){return new Ze(ue.comparator)}function Ig(){return new Ze(ue.comparator)}const e0={asc:"ASCENDING",desc:"DESCENDING"},t0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},n0={and:"AND",or:"OR"};class r0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wd(r,e){return r.useProto3Json||Zu(e)?e:{value:e}}function Fu(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function y_(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function i0(r,e){return Fu(r,e.toTimestamp())}function Xn(r){return Ue(!!r),ve.fromTimestamp(function(t){const s=yi(t);return new pt(s.seconds,s.nanos)}(r))}function Wd(r,e){return Ed(r,e).canonicalString()}function Ed(r,e){const t=function(o){return new Ge(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function __(r){const e=Ge.fromString(r);return Ue(I_(e)),e}function Td(r,e){return Wd(r.databaseId,e.path)}function Zh(r,e){const t=__(e);if(t.get(1)!==r.databaseId.projectId)throw new se(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new se(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ue(w_(t))}function v_(r,e){return Wd(r.databaseId,e)}function s0(r){const e=__(r);return e.length===4?Ge.emptyPath():w_(e)}function Id(r){return new Ge(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function w_(r){return Ue(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Sg(r,e,t){return{name:Td(r,e),fields:t.value.mapValue.fields}}function o0(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=function(v,E){return v.useProto3Json?(Ue(E===void 0||typeof E=="string"),kt.fromBase64String(E||"")):(Ue(E===void 0||E instanceof Buffer||E instanceof Uint8Array),kt.fromUint8Array(E||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,p=h&&function(v){const E=v.code===void 0?H.UNKNOWN:p_(v.code);return new se(E,v.message||"")}(h);t=new g_(s,o,u,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Zh(r,s.document.name),u=Xn(s.document.updateTime),h=s.document.createTime?Xn(s.document.createTime):ve.min(),p=new vn({mapValue:{fields:s.document.fields}}),g=Ut.newFoundDocument(o,u,h,p),v=s.targetIds||[],E=s.removedTargetIds||[];t=new Su(v,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Zh(r,s.document),u=s.readTime?Xn(s.readTime):ve.min(),h=Ut.newNoDocument(o,u),p=s.removedTargetIds||[];t=new Su([],p,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Zh(r,s.document),u=s.removedTargetIds||[];t=new Su([],u,o,null)}else{if(!("filter"in e))return me();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new XI(o,u),p=s.targetId;t=new m_(p,h)}}return t}function a0(r,e){let t;if(e instanceof qa)t={update:Sg(r,e.key,e.value)};else if(e instanceof f_)t={delete:Td(r,e.key)};else if(e instanceof is)t={update:Sg(r,e.key,e.data),updateMask:g0(e.fieldMask)};else{if(!(e instanceof KI))return me();t={verify:Td(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const p=h.transform;if(p instanceof ba)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Ma)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Ua)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Uu)return{fieldPath:h.field.canonicalString(),increment:p.Ie};throw me()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:i0(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:me()}(r,e.precondition)),t}function l0(r,e){return r&&r.length>0?(Ue(e!==void 0),r.map(t=>function(o,u){let h=o.updateTime?Xn(o.updateTime):Xn(u);return h.isEqual(ve.min())&&(h=Xn(u)),new qI(h,o.transformResults||[])}(t,e))):[]}function u0(r,e){return{documents:[v_(r,e.path)]}}function c0(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=v_(r,o);const u=function(v){if(v.length!==0)return T_(bn.create(v,"and"))}(e.filters);u&&(t.structuredQuery.where=u);const h=function(v){if(v.length!==0)return v.map(E=>function(N){return{field:to(N.field),direction:f0(N.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const p=wd(r,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=function(v){return{before:v.inclusive,values:v.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(v){return{before:!v.inclusive,values:v.position}}(e.endAt)),{ht:t,parent:o}}function h0(r){let e=s0(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ue(s===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=function(A){const N=E_(A);return N instanceof bn&&Xy(N)?N.getFilters():[N]}(t.where));let h=[];t.orderBy&&(h=function(A){return A.map(N=>function(G){return new Mu(no(G.field),function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(G.direction))}(N))}(t.orderBy));let p=null;t.limit&&(p=function(A){let N;return N=typeof A=="object"?A.value:A,Zu(N)?null:N}(t.limit));let g=null;t.startAt&&(g=function(A){const N=!!A.before,z=A.values||[];return new bu(z,N)}(t.startAt));let v=null;return t.endAt&&(v=function(A){const N=!A.before,z=A.values||[];return new bu(z,N)}(t.endAt)),NI(e,o,h,u,p,"F",g,v)}function d0(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function E_(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=no(t.unaryFilter.field);return lt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=no(t.unaryFilter.field);return lt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=no(t.unaryFilter.field);return lt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=no(t.unaryFilter.field);return lt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(r):r.fieldFilter!==void 0?function(t){return lt.create(no(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return bn.create(t.compositeFilter.filters.map(s=>E_(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return me()}}(t.compositeFilter.op))}(r):me()}function f0(r){return e0[r]}function p0(r){return t0[r]}function m0(r){return n0[r]}function to(r){return{fieldPath:r.canonicalString()}}function no(r){return Ct.fromServerFormat(r.fieldPath)}function T_(r){return r instanceof lt?function(t){if(t.op==="=="){if(hg(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NAN"}};if(cg(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(hg(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NOT_NAN"}};if(cg(t.value))return{unaryFilter:{field:to(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:to(t.field),op:p0(t.op),value:t.value}}}(r):r instanceof bn?function(t){const s=t.getFilters().map(o=>T_(o));return s.length===1?s[0]:{compositeFilter:{op:m0(t.op),filters:s}}}(r):me()}function g0(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function I_(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class li{constructor(e,t,s,o,u=ve.min(),h=ve.min(),p=kt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(e){return new li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class y0{constructor(e){this.Tt=e}}function _0(r){const e=h0({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?vd(e,e.limit,"L"):e}/**
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
 */class v0{constructor(){this.Tn=new w0}addToCollectionParentIndex(e,t){return this.Tn.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(gi.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(gi.min())}updateCollectionGroup(e,t,s){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class w0{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new mt(Ge.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new mt(Ge.comparator)).toArray()}}/**
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
 */const Ag={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},S_=41943040;class Zt{static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(S_,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);/**
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
 */class mo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new mo(0)}static Kn(){return new mo(-1)}}/**
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
 */const Rg="LruGarbageCollector",E0=1048576;function Cg([r,e],[t,s]){const o=Ce(r,t);return o===0?Ce(e,s):o}class T0{constructor(e){this.Hn=e,this.buffer=new mt(Cg),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Cg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class I0{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ne(Rg,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Io(t)?ne(Rg,"Ignoring IndexedDB error during garbage collection: ",t):await To(t)}await this.er(3e5)})}}class S0{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return B.resolve(Ju.ae);const s=new T0(t);return this.tr.forEachTarget(e,o=>s.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>s.Zn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.tr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),B.resolve(Ag)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ag):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let s,o,u,h,p,g,v;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(A=>(A>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${A}`),o=this.params.maximumSequenceNumbersToCollect):o=A,h=Date.now(),this.nthSequenceNumber(e,o))).next(A=>(s=A,p=Date.now(),this.removeTargets(e,s,t))).next(A=>(u=A,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(A=>(v=Date.now(),Zs()<=Re.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${u} targets in `+(g-p)+`ms
	Removed ${A} documents in `+(v-g)+`ms
Total Duration: ${v-E}ms`),B.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:A})))}}function A0(r,e){return new S0(r,e)}/**
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
 */class R0{constructor(){this.changes=new rs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?B.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class C0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class P0{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&ka(s.mutation,o,Ln.empty(),pt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Pe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Pe()){const o=Yi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=Ia();return u.forEach((p,g)=>{h=h.insert(p,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Yi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Pe()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,p)=>{t.set(h,p)})})}computeViews(e,t,s,o){let u=Rr();const h=Pa(),p=function(){return Pa()}();return t.forEach((g,v)=>{const E=s.get(v.key);o.has(v.key)&&(E===void 0||E.mutation instanceof is)?u=u.insert(v.key,v):E!==void 0?(h.set(v.key,E.mutation.getFieldMask()),ka(E.mutation,v,E.mutation.getFieldMask(),pt.now())):h.set(v.key,Ln.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((v,E)=>h.set(v,E)),t.forEach((v,E)=>{var A;return p.set(v,new C0(E,(A=h.get(v))!==null&&A!==void 0?A:null))}),p))}recalculateAndSaveOverlays(e,t){const s=Pa();let o=new Ze((h,p)=>h-p),u=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const p of h)p.keys().forEach(g=>{const v=t.get(g);if(v===null)return;let E=s.get(g)||Ln.empty();E=p.applyToLocalView(v,E),s.set(g,E);const A=(o.get(p.batchId)||Pe()).add(g);o=o.insert(p.batchId,A)})}).next(()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),v=g.key,E=g.value,A=s_();E.forEach(N=>{if(!u.has(N)){const z=h_(t.get(N),s.get(N));z!==null&&A.set(N,z),u=u.add(N)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,A))}return B.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return ue.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):e_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):B.resolve(Yi());let p=Da,g=u;return h.next(v=>B.forEach(v,(E,A)=>(p<A.largestBatchId&&(p=A.largestBatchId),u.get(E)?B.resolve():this.remoteDocumentCache.getEntry(e,E).next(N=>{g=g.insert(E,N)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,g,v,Pe())).next(E=>({batchId:p,changes:i_(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ue(t)).next(s=>{let o=Ia();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Ia();return this.indexManager.getCollectionParents(e,u).next(p=>B.forEach(p,g=>{const v=function(A,N){return new $a(N,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(E=>{E.forEach((A,N)=>{h=h.insert(A,N)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,v)=>{const E=v.getKey();h.get(E)===null&&(h=h.insert(E,Ut.newInvalidDocument(E)))});let p=Ia();return h.forEach((g,v)=>{const E=u.get(g);E!==void 0&&ka(E.mutation,v,Ln.empty(),pt.now()),rc(t,v)&&(p=p.insert(g,v))}),p})}}/**
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
 */class k0{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return B.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:Xn(o.createTime)}}(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(o){return{name:o.name,query:_0(o.bundledQuery),readTime:Xn(o.readTime)}}(t)),B.resolve()}}/**
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
 */class N0{constructor(){this.overlays=new Ze(ue.comparator),this.Rr=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Yi();return B.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Et(e,t,u)}),B.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(s)),B.resolve()}getOverlaysForCollection(e,t,s){const o=Yi(),u=t.length+1,h=new ue(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const g=p.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return B.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Ze((v,E)=>v-E);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let E=u.get(v.largestBatchId);E===null&&(E=Yi(),u=u.insert(v.largestBatchId,E)),E.set(v.getKey(),v)}}const p=Yi(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((v,E)=>p.set(v,E)),!(p.size()>=o)););return B.resolve(p)}Et(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new QI(t,s));let u=this.Rr.get(t);u===void 0&&(u=Pe(),this.Rr.set(t,u)),this.Rr.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(e){return B.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,B.resolve()}}/**
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
 */class Kd{constructor(){this.Vr=new mt(Et.mr),this.gr=new mt(Et.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const s=new Et(e,t);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.wr(new Et(e,t))}Sr(e,t){e.forEach(s=>this.removeReference(s,t))}br(e){const t=new ue(new Ge([])),s=new Et(t,e),o=new Et(t,e+1),u=[];return this.gr.forEachInRange([s,o],h=>{this.wr(h),u.push(h.key)}),u}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ue(new Ge([])),s=new Et(t,e),o=new Et(t,e+1);let u=Pe();return this.gr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new Et(e,0),s=this.Vr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Et{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ue.comparator(e.key,t.key)||Ce(e.Cr,t.Cr)}static pr(e,t){return Ce(e.Cr,t.Cr)||ue.comparator(e.key,t.key)}}/**
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
 */class D0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new mt(Et.mr)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new GI(u,t,s,o);this.mutationQueue.push(h);for(const p of o)this.Mr=this.Mr.add(new Et(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return B.resolve(h)}lookupMutationBatch(e,t){return B.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Nr(s),u=o<0?0:o;return B.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?Ud:this.Fr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Et(t,0),o=new Et(t,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([s,o],h=>{const p=this.Or(h.Cr);u.push(p)}),B.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new mt(Ce);return t.forEach(o=>{const u=new Et(o,0),h=new Et(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,h],p=>{s=s.add(p.Cr)})}),B.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;ue.isDocumentKey(u)||(u=u.child(""));const h=new Et(new ue(u),0);let p=new mt(Ce);return this.Mr.forEachWhile(g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(p=p.add(g.Cr)),!0)},h),B.resolve(this.Br(p))}Br(e){const t=[];return e.forEach(s=>{const o=this.Or(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ue(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return B.forEach(t.mutations,o=>{const u=new Et(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,t){const s=new Et(t,0),o=this.Mr.firstAfterOrEqual(s);return B.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class V0{constructor(e){this.kr=e,this.docs=function(){return new Ze(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.kr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return B.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let s=Rr();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ut.newInvalidDocument(o))}),B.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Rr();const h=t.path,p=new ue(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:v,value:{document:E}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||lI(aI(E),s)<=0||(o.has(E.key)||rc(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return B.resolve(u)}getAllFromCollectionGroup(e,t,s,o){me()}qr(e,t){return B.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new O0(this)}getSize(e){return B.resolve(this.size)}}class O0 extends R0{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(s)}),B.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class L0{constructor(e){this.persistence=e,this.Qr=new rs(t=>zd(t),Bd),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Kd,this.targetCount=0,this.Kr=mo.Un()}forEachTarget(e,t){return this.Qr.forEach((s,o)=>t(o)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.$r&&(this.$r=t),B.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new mo(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.zn(t),B.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Qr.forEach((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.Qr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)}),B.waitFor(u).next(()=>o)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const s=this.Qr.get(t)||null;return B.resolve(s)}addMatchingKeys(e,t,s){return this.Ur.yr(t,s),B.resolve()}removeMatchingKeys(e,t,s){this.Ur.Sr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),B.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),B.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Ur.vr(t);return B.resolve(s)}containsKey(e,t){return B.resolve(this.Ur.containsKey(t))}}/**
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
 */class A_{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Ju(0),this.zr=!1,this.zr=!0,this.jr=new x0,this.referenceDelegate=e(this),this.Hr=new L0(this),this.indexManager=new v0,this.remoteDocumentCache=function(o){return new V0(o)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new y0(t),this.Yr=new k0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new N0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Wr[e.toKey()];return s||(s=new D0(t,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new b0(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next(u=>this.referenceDelegate.Xr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}ei(e,t){return B.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,t)))}}class b0 extends cI{constructor(e){super(),this.currentSequenceNumber=e}}class Gd{constructor(e){this.persistence=e,this.ti=new Kd,this.ni=null}static ri(e){return new Gd(e)}get ii(){if(this.ni)return this.ni;throw me()}addReference(e,t,s){return this.ti.addReference(s,t),this.ii.delete(s.toString()),B.resolve()}removeReference(e,t,s){return this.ti.removeReference(s,t),this.ii.add(s.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),B.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(o=>this.ii.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ii.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.ii,s=>{const o=ue.fromPath(s);return this.si(e,o).next(u=>{u||t.removeEntry(o,ve.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(s=>{s?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return B.or([()=>B.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class ju{constructor(e,t){this.persistence=e,this.oi=new rs(s=>fI(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=A0(this,t)}static ri(e,t){return new ju(e,t)}Zr(){}Xr(e){return B.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}sr(e){let t=0;return this.rr(e,s=>{t++}).next(()=>t)}rr(e,t){return B.forEach(this.oi,(s,o)=>this.ar(e,s,o).next(u=>u?B.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.qr(e,h=>this.ar(e,h,t).next(p=>{p||(s++,u.removeEntry(h,ve.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),B.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),B.resolve()}removeReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),B.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),B.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Eu(e.data.value)),t}ar(e,t,s){return B.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.oi.get(t);return B.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Qd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Hi=s,this.Ji=o}static Yi(e,t){let s=Pe(),o=Pe();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Qd(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class U0{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return DE()?8:hI(Ft())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.rs(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ss(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new M0;return this._s(e,t,h).next(p=>{if(u.result=p,this.Xi)return this.us(e,t,h,p.size)})}).next(()=>u.result)}us(e,t,s,o){return s.documentReadCount<this.es?(Zs()<=Re.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",eo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),B.resolve()):(Zs()<=Re.DEBUG&&ne("QueryEngine","Query:",eo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(Zs()<=Re.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",eo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qn(t))):B.resolve())}rs(e,t){if(mg(t))return B.resolve(null);let s=Qn(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=vd(t,null,"F"),s=Qn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Pe(...u);return this.ns.getDocuments(e,h).next(p=>this.indexManager.getMinOffset(e,s).next(g=>{const v=this.cs(t,p);return this.ls(t,v,h,g.readTime)?this.rs(e,vd(t,null,"F")):this.hs(e,v,t,g)}))})))}ss(e,t,s,o){return mg(t)||o.isEqual(ve.min())?B.resolve(null):this.ns.getDocuments(e,s).next(u=>{const h=this.cs(t,u);return this.ls(t,h,s,o)?B.resolve(null):(Zs()<=Re.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),eo(t)),this.hs(e,h,t,oI(o,Da)).next(p=>p))})}cs(e,t){let s=new mt(n_(e));return t.forEach((o,u)=>{rc(e,u)&&(s=s.add(u))}),s}ls(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}_s(e,t,s){return Zs()<=Re.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",eo(t)),this.ns.getDocumentsMatchingQuery(e,t,gi.min(),s)}hs(e,t,s,o){return this.ns.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */const Xd="LocalStore",F0=3e8;class j0{constructor(e,t,s,o){this.persistence=e,this.Ps=t,this.serializer=o,this.Ts=new Ze(Ce),this.Is=new rs(u=>zd(u),Bd),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new P0(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function z0(r,e,t,s){return new j0(r,e,t,s)}async function R_(r,e){const t=we(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.As(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],p=[];let g=Pe();for(const v of o){h.push(v.batchId);for(const E of v.mutations)g=g.add(E.key)}for(const v of u){p.push(v.batchId);for(const E of v.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next(v=>({Rs:v,removedBatchIds:h,addedBatchIds:p}))})})}function B0(r,e){const t=we(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.ds.newChangeBuffer({trackRemovals:!0});return function(p,g,v,E){const A=v.batch,N=A.keys();let z=B.resolve();return N.forEach(G=>{z=z.next(()=>E.getEntry(g,G)).next(Q=>{const q=v.docVersions.get(G);Ue(q!==null),Q.version.compareTo(q)<0&&(A.applyToRemoteDocument(Q,v),Q.isValidDocument()&&(Q.setReadTime(v.commitVersion),E.addEntry(Q)))})}),z.next(()=>p.mutationQueue.removeMutationBatch(g,A))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let g=Pe();for(let v=0;v<p.mutationResults.length;++v)p.mutationResults[v].transformResults.length>0&&(g=g.add(p.batch.mutations[v].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function C_(r){const e=we(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function $0(r,e){const t=we(r),s=e.snapshotVersion;let o=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=t.ds.newChangeBuffer({trackRemovals:!0});o=t.Ts;const p=[];e.targetChanges.forEach((E,A)=>{const N=o.get(A);if(!N)return;p.push(t.Hr.removeMatchingKeys(u,E.removedDocuments,A).next(()=>t.Hr.addMatchingKeys(u,E.addedDocuments,A)));let z=N.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(A)!==null?z=z.withResumeToken(kt.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):E.resumeToken.approximateByteSize()>0&&(z=z.withResumeToken(E.resumeToken,s)),o=o.insert(A,z),function(Q,q,fe){return Q.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=F0?!0:fe.addedDocuments.size+fe.modifiedDocuments.size+fe.removedDocuments.size>0}(N,z,E)&&p.push(t.Hr.updateTargetData(u,z))});let g=Rr(),v=Pe();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(u,E))}),p.push(q0(u,h,e.documentUpdates).next(E=>{g=E.Vs,v=E.fs})),!s.isEqual(ve.min())){const E=t.Hr.getLastRemoteSnapshotVersion(u).next(A=>t.Hr.setTargetsMetadata(u,u.currentSequenceNumber,s));p.push(E)}return B.waitFor(p).next(()=>h.apply(u)).next(()=>t.localDocuments.getLocalViewOfDocuments(u,g,v)).next(()=>g)}).then(u=>(t.Ts=o,u))}function q0(r,e,t){let s=Pe(),o=Pe();return t.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let h=Rr();return t.forEach((p,g)=>{const v=u.get(p);g.isFoundDocument()!==v.isFoundDocument()&&(o=o.add(p)),g.isNoDocument()&&g.version.isEqual(ve.min())?(e.removeEntry(p,g.readTime),h=h.insert(p,g)):!v.isValidDocument()||g.version.compareTo(v.version)>0||g.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(g),h=h.insert(p,g)):ne(Xd,"Ignoring outdated watch update for ",p,". Current version:",v.version," Watch version:",g.version)}),{Vs:h,fs:o}})}function H0(r,e){const t=we(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Ud),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function W0(r,e){const t=we(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Hr.getTargetData(s,e).next(u=>u?(o=u,B.resolve(o)):t.Hr.allocateTargetId(s).next(h=>(o=new li(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Hr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.Ts.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(s.targetId,s),t.Is.set(e,s.targetId)),s})}async function Sd(r,e,t){const s=we(r),o=s.Ts.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Io(h))throw h;ne(Xd,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ts=s.Ts.remove(e),s.Is.delete(o.target)}function Pg(r,e,t){const s=we(r);let o=ve.min(),u=Pe();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,v,E){const A=we(g),N=A.Is.get(E);return N!==void 0?B.resolve(A.Ts.get(N)):A.Hr.getTargetData(v,E)}(s,h,Qn(e)).next(p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(h,p.targetId).next(g=>{u=g})}).next(()=>s.Ps.getDocumentsMatchingQuery(h,e,t?o:ve.min(),t?u:Pe())).next(p=>(K0(s,DI(e),p),{documents:p,gs:u})))}function K0(r,e,t){let s=r.Es.get(e)||ve.min();t.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Es.set(e,s)}class kg{constructor(){this.activeTargetIds=UI()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class G0{constructor(){this.ho=new kg,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,s){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new kg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Q0{To(e){}shutdown(){}}/**
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
 */const Ng="ConnectivityMonitor";class xg{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ne(Ng,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ne(Ng,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _u=null;function Ad(){return _u===null?_u=function(){return 268435456+Math.round(2147483648*Math.random())}():_u++,"0x"+_u.toString(16)}/**
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
 */const ed="RestConnection",X0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Y0{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===Ou?`project_id=${s}`:`project_id=${s}&database_id=${o}`}So(e,t,s,o,u){const h=Ad(),p=this.bo(e,t.toUriEncodedString());ne(ed,`Sending RPC '${e}' ${h}:`,p,s);const g={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(g,o,u),this.vo(e,p,g,s).then(v=>(ne(ed,`Received RPC '${e}' ${h}: `,v),v),v=>{throw co(ed,`RPC '${e}' ${h} failed with error: `,v,"url: ",p,"request:",s),v})}Co(e,t,s,o,u,h){return this.So(e,t,s,o,u)}Do(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Eo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}bo(e,t){const s=X0[e];return`${this.po}/v1/${t}:${s}`}terminate(){}}/**
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
 */class J0{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const bt="WebChannelConnection";class Z0 extends Y0{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,s,o){const u=Ad();return new Promise((h,p)=>{const g=new xy;g.setWithCredentials(!0),g.listenOnce(Dy.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case wu.NO_ERROR:const E=g.getResponseJson();ne(bt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),h(E);break;case wu.TIMEOUT:ne(bt,`RPC '${e}' ${u} timed out`),p(new se(H.DEADLINE_EXCEEDED,"Request time out"));break;case wu.HTTP_ERROR:const A=g.getStatus();if(ne(bt,`RPC '${e}' ${u} failed with status:`,A,"response text:",g.getResponseText()),A>0){let N=g.getResponseJson();Array.isArray(N)&&(N=N[0]);const z=N==null?void 0:N.error;if(z&&z.status&&z.message){const G=function(q){const fe=q.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(fe)>=0?fe:H.UNKNOWN}(z.status);p(new se(G,z.message))}else p(new se(H.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new se(H.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{ne(bt,`RPC '${e}' ${u} completed.`)}});const v=JSON.stringify(o);ne(bt,`RPC '${e}' ${u} sending request:`,o),g.send(t,"POST",v,s,15)})}Wo(e,t,s){const o=Ad(),u=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Ly(),p=Oy(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Do(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const E=u.join("");ne(bt,`Creating RPC '${e}' stream ${o}: ${E}`,g);const A=h.createWebChannel(E,g);let N=!1,z=!1;const G=new J0({Fo:q=>{z?ne(bt,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(N||(ne(bt,`Opening RPC '${e}' stream ${o} transport.`),A.open(),N=!0),ne(bt,`RPC '${e}' stream ${o} sending:`,q),A.send(q))},Mo:()=>A.close()}),Q=(q,fe,_e)=>{q.listen(fe,pe=>{try{_e(pe)}catch(Ee){setTimeout(()=>{throw Ee},0)}})};return Q(A,Ta.EventType.OPEN,()=>{z||(ne(bt,`RPC '${e}' stream ${o} transport opened.`),G.Qo())}),Q(A,Ta.EventType.CLOSE,()=>{z||(z=!0,ne(bt,`RPC '${e}' stream ${o} transport closed`),G.Uo())}),Q(A,Ta.EventType.ERROR,q=>{z||(z=!0,co(bt,`RPC '${e}' stream ${o} transport errored:`,q),G.Uo(new se(H.UNAVAILABLE,"The operation could not be completed")))}),Q(A,Ta.EventType.MESSAGE,q=>{var fe;if(!z){const _e=q.data[0];Ue(!!_e);const pe=_e,Ee=(pe==null?void 0:pe.error)||((fe=pe[0])===null||fe===void 0?void 0:fe.error);if(Ee){ne(bt,`RPC '${e}' stream ${o} received error:`,Ee);const He=Ee.status;let Ie=function(S){const k=at[S];if(k!==void 0)return p_(k)}(He),C=Ee.message;Ie===void 0&&(Ie=H.INTERNAL,C="Unknown error status: "+He+" with message "+Ee.message),z=!0,G.Uo(new se(Ie,C)),A.close()}else ne(bt,`RPC '${e}' stream ${o} received:`,_e),G.Ko(_e)}}),Q(p,Vy.STAT_EVENT,q=>{q.stat===hd.PROXY?ne(bt,`RPC '${e}' stream ${o} detected buffering proxy`):q.stat===hd.NOPROXY&&ne(bt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{G.$o()},0),G}}function td(){return typeof document<"u"?document:null}/**
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
 */function ac(r){return new r0(r,!0)}/**
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
 */class P_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.Ti=e,this.timerId=t,this.Go=s,this.zo=o,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Dg="PersistentStream";class k_{constructor(e,t,s,o,u,h,p,g){this.Ti=e,this.n_=s,this.r_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new P_(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Ar(t.toString()),Ar("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.i_===t&&this.V_(s,o)},s=>{e(()=>{const o=new se(H.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)})})}V_(e,t){const s=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{s(()=>this.m_(o))}),this.stream.onMessage(o=>{s(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ne(Dg,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(ne(Dg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eS extends k_{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=o0(this.serializer,e),s=function(u){if(!("targetChange"in u))return ve.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?ve.min():h.readTime?Xn(h.readTime):ve.min()}(e);return this.listener.p_(t,s)}y_(e){const t={};t.database=Id(this.serializer),t.addTarget=function(u,h){let p;const g=h.target;if(p=yd(g)?{documents:u0(u,g)}:{query:c0(u,g).ht},p.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){p.resumeToken=y_(u,h.resumeToken);const v=wd(u,h.expectedCount);v!==null&&(p.expectedCount=v)}else if(h.snapshotVersion.compareTo(ve.min())>0){p.readTime=Fu(u,h.snapshotVersion.toTimestamp());const v=wd(u,h.expectedCount);v!==null&&(p.expectedCount=v)}return p}(this.serializer,e);const s=d0(this.serializer,e);s&&(t.labels=s),this.I_(t)}w_(e){const t={};t.database=Id(this.serializer),t.removeTarget=e,this.I_(t)}}class tS extends k_{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=l0(e.writeResults,e.commitTime),s=Xn(e.commitTime);return this.listener.v_(s,t)}C_(){const e={};e.database=Id(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>a0(this.serializer,s))};this.I_(t)}}/**
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
 */class nS{}class rS extends nS{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new se(H.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.So(e,Ed(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new se(H.UNKNOWN,u.toString())})}Co(e,t,s,o,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,p])=>this.connection.Co(e,Ed(t,s),o,h,p,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new se(H.UNKNOWN,h.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class iS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ar(t),this.N_=!1):ne("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const es="RemoteStore";class sS{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(h=>{s.enqueueAndForget(async()=>{ss(this)&&(ne(es,"Restarting streams for network reachability change."),await async function(g){const v=we(g);v.W_.add(4),await Wa(v),v.j_.set("Unknown"),v.W_.delete(4),await lc(v)}(this))})}),this.j_=new iS(s,o)}}async function lc(r){if(ss(r))for(const e of r.G_)await e(!0)}async function Wa(r){for(const e of r.G_)await e(!1)}function N_(r,e){const t=we(r);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),ef(t)?Zd(t):So(t).c_()&&Jd(t,e))}function Yd(r,e){const t=we(r),s=So(t);t.K_.delete(e),s.c_()&&x_(t,e),t.K_.size===0&&(s.c_()?s.P_():ss(t)&&t.j_.set("Unknown"))}function Jd(r,e){if(r.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}So(r).y_(e)}function x_(r,e){r.H_.Ne(e),So(r).w_(e)}function Zd(r){r.H_=new ZI({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>r.K_.get(e)||null,it:()=>r.datastore.serializer.databaseId}),So(r).start(),r.j_.B_()}function ef(r){return ss(r)&&!So(r).u_()&&r.K_.size>0}function ss(r){return we(r).W_.size===0}function D_(r){r.H_=void 0}async function oS(r){r.j_.set("Online")}async function aS(r){r.K_.forEach((e,t)=>{Jd(r,e)})}async function lS(r,e){D_(r),ef(r)?(r.j_.q_(e),Zd(r)):r.j_.set("Unknown")}async function uS(r,e,t){if(r.j_.set("Online"),e instanceof g_&&e.state===2&&e.cause)try{await async function(o,u){const h=u.cause;for(const p of u.targetIds)o.K_.has(p)&&(await o.remoteSyncer.rejectListen(p,h),o.K_.delete(p),o.H_.removeTarget(p))}(r,e)}catch(s){ne(es,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await zu(r,s)}else if(e instanceof Su?r.H_.We(e):e instanceof m_?r.H_.Ze(e):r.H_.je(e),!t.isEqual(ve.min()))try{const s=await C_(r.localStore);t.compareTo(s)>=0&&await function(u,h){const p=u.H_.ot(h);return p.targetChanges.forEach((g,v)=>{if(g.resumeToken.approximateByteSize()>0){const E=u.K_.get(v);E&&u.K_.set(v,E.withResumeToken(g.resumeToken,h))}}),p.targetMismatches.forEach((g,v)=>{const E=u.K_.get(g);if(!E)return;u.K_.set(g,E.withResumeToken(kt.EMPTY_BYTE_STRING,E.snapshotVersion)),x_(u,g);const A=new li(E.target,g,v,E.sequenceNumber);Jd(u,A)}),u.remoteSyncer.applyRemoteEvent(p)}(r,t)}catch(s){ne(es,"Failed to raise snapshot:",s),await zu(r,s)}}async function zu(r,e,t){if(!Io(e))throw e;r.W_.add(1),await Wa(r),r.j_.set("Offline"),t||(t=()=>C_(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ne(es,"Retrying IndexedDB access"),await t(),r.W_.delete(1),await lc(r)})}function V_(r,e){return e().catch(t=>zu(r,t,e))}async function uc(r){const e=we(r),t=wi(e);let s=e.U_.length>0?e.U_[e.U_.length-1].batchId:Ud;for(;cS(e);)try{const o=await H0(e.localStore,s);if(o===null){e.U_.length===0&&t.P_();break}s=o.batchId,hS(e,o)}catch(o){await zu(e,o)}O_(e)&&L_(e)}function cS(r){return ss(r)&&r.U_.length<10}function hS(r,e){r.U_.push(e);const t=wi(r);t.c_()&&t.S_&&t.b_(e.mutations)}function O_(r){return ss(r)&&!wi(r).u_()&&r.U_.length>0}function L_(r){wi(r).start()}async function dS(r){wi(r).C_()}async function fS(r){const e=wi(r);for(const t of r.U_)e.b_(t.mutations)}async function pS(r,e,t){const s=r.U_.shift(),o=qd.from(s,e,t);await V_(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await uc(r)}async function mS(r,e){e&&wi(r).S_&&await async function(s,o){if(function(h){return YI(h)&&h!==H.ABORTED}(o.code)){const u=s.U_.shift();wi(s).h_(),await V_(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await uc(s)}}(r,e),O_(r)&&L_(r)}async function Vg(r,e){const t=we(r);t.asyncQueue.verifyOperationInProgress(),ne(es,"RemoteStore received new credentials");const s=ss(t);t.W_.add(3),await Wa(t),s&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await lc(t)}async function gS(r,e){const t=we(r);e?(t.W_.delete(2),await lc(t)):e||(t.W_.add(2),await Wa(t),t.j_.set("Unknown"))}function So(r){return r.J_||(r.J_=function(t,s,o){const u=we(t);return u.M_(),new eS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:oS.bind(null,r),No:aS.bind(null,r),Lo:lS.bind(null,r),p_:uS.bind(null,r)}),r.G_.push(async e=>{e?(r.J_.h_(),ef(r)?Zd(r):r.j_.set("Unknown")):(await r.J_.stop(),D_(r))})),r.J_}function wi(r){return r.Y_||(r.Y_=function(t,s,o){const u=we(t);return u.M_(),new tS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:dS.bind(null,r),Lo:mS.bind(null,r),D_:fS.bind(null,r),v_:pS.bind(null,r)}),r.G_.push(async e=>{e?(r.Y_.h_(),await uc(r)):(await r.Y_.stop(),r.U_.length>0&&(ne(es,`Stopping write stream with ${r.U_.length} pending writes`),r.U_=[]))})),r.Y_}/**
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
 */class tf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new fi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,p=new tf(e,t,h,o,u);return p.start(s),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nf(r,e){if(Ar("AsyncQueue",`${e}: ${r}`),Io(r))return new se(H.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class so{static emptySet(e){return new so(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ue.comparator(t.key,s.key):(t,s)=>ue.comparator(t.key,s.key),this.keyedMap=Ia(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof so)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new so;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Og{constructor(){this.Z_=new Ze(ue.comparator)}track(e){const t=e.doc.key,s=this.Z_.get(t);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(t):e.type===1&&s.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):me():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class go{constructor(e,t,s,o,u,h,p,g,v){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=v}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach(p=>{h.push({type:0,doc:p})}),new go(e,t,so.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class yS{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class _S{constructor(){this.queries=Lg(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,s){const o=we(t),u=o.queries;o.queries=Lg(),u.forEach((h,p)=>{for(const g of p.ta)g.onError(s)})})(this,new se(H.ABORTED,"Firestore shutting down"))}}function Lg(){return new rs(r=>t_(r),nc)}async function b_(r,e){const t=we(r);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.na()&&e.ra()&&(s=2):(u=new yS,s=e.ra()?0:1);try{switch(s){case 0:u.ea=await t.onListen(o,!0);break;case 1:u.ea=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const p=nf(h,`Initialization of query '${eo(e.query)}' failed`);return void e.onError(p)}t.queries.set(o,u),u.ta.push(e),e.sa(t.onlineState),u.ea&&e.oa(u.ea)&&rf(t)}async function M_(r,e){const t=we(r),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.ta.indexOf(e);h>=0&&(u.ta.splice(h,1),u.ta.length===0?o=e.ra()?0:1:!u.na()&&e.ra()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function vS(r,e){const t=we(r);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const p of h.ta)p.oa(o)&&(s=!0);h.ea=o}}s&&rf(t)}function wS(r,e,t){const s=we(r),o=s.queries.get(e);if(o)for(const u of o.ta)u.onError(t);s.queries.delete(e)}function rf(r){r.ia.forEach(e=>{e.next()})}var Rd,bg;(bg=Rd||(Rd={}))._a="default",bg.Cache="cache";class U_{constructor(e,t,s){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new go(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const s=t!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Rd.Cache}}/**
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
 */class F_{constructor(e){this.key=e}}class j_{constructor(e){this.key=e}}class ES{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Pe(),this.mutatedKeys=Pe(),this.ya=n_(e),this.wa=new so(this.ya)}get Sa(){return this.fa}ba(e,t){const s=t?t.Da:new Og,o=t?t.wa:this.wa;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,p=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,v=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,A)=>{const N=o.get(E),z=rc(this.query,A)?A:null,G=!!N&&this.mutatedKeys.has(N.key),Q=!!z&&(z.hasLocalMutations||this.mutatedKeys.has(z.key)&&z.hasCommittedMutations);let q=!1;N&&z?N.data.isEqual(z.data)?G!==Q&&(s.track({type:3,doc:z}),q=!0):this.va(N,z)||(s.track({type:2,doc:z}),q=!0,(g&&this.ya(z,g)>0||v&&this.ya(z,v)<0)&&(p=!0)):!N&&z?(s.track({type:0,doc:z}),q=!0):N&&!z&&(s.track({type:1,doc:N}),q=!0,(g||v)&&(p=!0)),q&&(z?(h=h.add(z),u=Q?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{wa:h,Da:s,ls:p,mutatedKeys:u}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const h=e.Da.X_();h.sort((E,A)=>function(z,G){const Q=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return Q(z)-Q(G)}(E.type,A.type)||this.ya(E.doc,A.doc)),this.Ca(s),o=o!=null&&o;const p=t&&!o?this.Fa():[],g=this.pa.size===0&&this.current&&!o?1:0,v=g!==this.ga;return this.ga=g,h.length!==0||v?{snapshot:new go(this.query,e.wa,u,h,e.mutatedKeys,g===0,v,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:p}:{Ma:p}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Og,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Pe(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const t=[];return e.forEach(s=>{this.pa.has(s)||t.push(new j_(s))}),this.pa.forEach(s=>{e.has(s)||t.push(new F_(s))}),t}Oa(e){this.fa=e.gs,this.pa=Pe();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return go.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const sf="SyncEngine";class TS{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class IS{constructor(e){this.key=e,this.Ba=!1}}class SS{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.La={},this.ka=new rs(p=>t_(p),nc),this.qa=new Map,this.Qa=new Set,this.$a=new Ze(ue.comparator),this.Ua=new Map,this.Ka=new Kd,this.Wa={},this.Ga=new Map,this.za=mo.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function AS(r,e,t=!0){const s=W_(r);let o;const u=s.ka.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.Na()):o=await z_(s,e,t,!0),o}async function RS(r,e){const t=W_(r);await z_(t,e,!0,!1)}async function z_(r,e,t,s){const o=await W0(r.localStore,Qn(e)),u=o.targetId,h=r.sharedClientState.addLocalQueryTarget(u,t);let p;return s&&(p=await CS(r,e,u,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&N_(r.remoteStore,o),p}async function CS(r,e,t,s,o){r.Ha=(A,N,z)=>async function(Q,q,fe,_e){let pe=q.view.ba(fe);pe.ls&&(pe=await Pg(Q.localStore,q.query,!1).then(({documents:C})=>q.view.ba(C,pe)));const Ee=_e&&_e.targetChanges.get(q.targetId),He=_e&&_e.targetMismatches.get(q.targetId)!=null,Ie=q.view.applyChanges(pe,Q.isPrimaryClient,Ee,He);return Ug(Q,q.targetId,Ie.Ma),Ie.snapshot}(r,A,N,z);const u=await Pg(r.localStore,e,!0),h=new ES(e,u.gs),p=h.ba(u.documents),g=Ha.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),v=h.applyChanges(p,r.isPrimaryClient,g);Ug(r,t,v.Ma);const E=new TS(e,t,h);return r.ka.set(e,E),r.qa.has(t)?r.qa.get(t).push(e):r.qa.set(t,[e]),v.snapshot}async function PS(r,e,t){const s=we(r),o=s.ka.get(e),u=s.qa.get(o.targetId);if(u.length>1)return s.qa.set(o.targetId,u.filter(h=>!nc(h,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Sd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Yd(s.remoteStore,o.targetId),Cd(s,o.targetId)}).catch(To)):(Cd(s,o.targetId),await Sd(s.localStore,o.targetId,!0))}async function kS(r,e){const t=we(r),s=t.ka.get(e),o=t.qa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Yd(t.remoteStore,s.targetId))}async function NS(r,e,t){const s=MS(r);try{const o=await function(h,p){const g=we(h),v=pt.now(),E=p.reduce((z,G)=>z.add(G.key),Pe());let A,N;return g.persistence.runTransaction("Locally write mutations","readwrite",z=>{let G=Rr(),Q=Pe();return g.ds.getEntries(z,E).next(q=>{G=q,G.forEach((fe,_e)=>{_e.isValidDocument()||(Q=Q.add(fe))})}).next(()=>g.localDocuments.getOverlayedDocuments(z,G)).next(q=>{A=q;const fe=[];for(const _e of p){const pe=WI(_e,A.get(_e.key).overlayedDocument);pe!=null&&fe.push(new is(_e.key,pe,Ky(pe.value.mapValue),Tr.exists(!0)))}return g.mutationQueue.addMutationBatch(z,v,fe,p)}).next(q=>{N=q;const fe=q.applyToLocalDocumentSet(A,Q);return g.documentOverlayCache.saveOverlays(z,q.batchId,fe)})}).then(()=>({batchId:N.batchId,changes:i_(A)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,p,g){let v=h.Wa[h.currentUser.toKey()];v||(v=new Ze(Ce)),v=v.insert(p,g),h.Wa[h.currentUser.toKey()]=v}(s,o.batchId,t),await Ka(s,o.changes),await uc(s.remoteStore)}catch(o){const u=nf(o,"Failed to persist write");t.reject(u)}}async function B_(r,e){const t=we(r);try{const s=await $0(t.localStore,e);e.targetChanges.forEach((o,u)=>{const h=t.Ua.get(u);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Ba=!0:o.modifiedDocuments.size>0?Ue(h.Ba):o.removedDocuments.size>0&&(Ue(h.Ba),h.Ba=!1))}),await Ka(t,s,e)}catch(s){await To(s)}}function Mg(r,e,t){const s=we(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.ka.forEach((u,h)=>{const p=h.view.sa(e);p.snapshot&&o.push(p.snapshot)}),function(h,p){const g=we(h);g.onlineState=p;let v=!1;g.queries.forEach((E,A)=>{for(const N of A.ta)N.sa(p)&&(v=!0)}),v&&rf(g)}(s.eventManager,e),o.length&&s.La.p_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function xS(r,e,t){const s=we(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Ua.get(e),u=o&&o.key;if(u){let h=new Ze(ue.comparator);h=h.insert(u,Ut.newNoDocument(u,ve.min()));const p=Pe().add(u),g=new oc(ve.min(),new Map,new Ze(Ce),h,p);await B_(s,g),s.$a=s.$a.remove(u),s.Ua.delete(e),of(s)}else await Sd(s.localStore,e,!1).then(()=>Cd(s,e,t)).catch(To)}async function DS(r,e){const t=we(r),s=e.batch.batchId;try{const o=await B0(t.localStore,e);q_(t,s,null),$_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ka(t,o)}catch(o){await To(o)}}async function VS(r,e,t){const s=we(r);try{const o=await function(h,p){const g=we(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let E;return g.mutationQueue.lookupMutationBatch(v,p).next(A=>(Ue(A!==null),E=A.keys(),g.mutationQueue.removeMutationBatch(v,A))).next(()=>g.mutationQueue.performConsistencyCheck(v)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(v,E,p)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,E)).next(()=>g.localDocuments.getDocuments(v,E))})}(s.localStore,e);q_(s,e,t),$_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ka(s,o)}catch(o){await To(o)}}function $_(r,e){(r.Ga.get(e)||[]).forEach(t=>{t.resolve()}),r.Ga.delete(e)}function q_(r,e,t){const s=we(r);let o=s.Wa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Wa[s.currentUser.toKey()]=o}}function Cd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.qa.get(e))r.ka.delete(s),t&&r.La.Ja(s,t);r.qa.delete(e),r.isPrimaryClient&&r.Ka.br(e).forEach(s=>{r.Ka.containsKey(s)||H_(r,s)})}function H_(r,e){r.Qa.delete(e.path.canonicalString());const t=r.$a.get(e);t!==null&&(Yd(r.remoteStore,t),r.$a=r.$a.remove(e),r.Ua.delete(t),of(r))}function Ug(r,e,t){for(const s of t)s instanceof F_?(r.Ka.addReference(s.key,e),OS(r,s)):s instanceof j_?(ne(sf,"Document no longer in limbo: "+s.key),r.Ka.removeReference(s.key,e),r.Ka.containsKey(s.key)||H_(r,s.key)):me()}function OS(r,e){const t=e.key,s=t.path.canonicalString();r.$a.get(t)||r.Qa.has(s)||(ne(sf,"New document in limbo: "+t),r.Qa.add(s),of(r))}function of(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const e=r.Qa.values().next().value;r.Qa.delete(e);const t=new ue(Ge.fromString(e)),s=r.za.next();r.Ua.set(s,new IS(t)),r.$a=r.$a.insert(t,s),N_(r.remoteStore,new li(Qn(tc(t.path)),s,"TargetPurposeLimboResolution",Ju.ae))}}async function Ka(r,e,t){const s=we(r),o=[],u=[],h=[];s.ka.isEmpty()||(s.ka.forEach((p,g)=>{h.push(s.Ha(g,e,t).then(v=>{var E;if((v||t)&&s.isPrimaryClient){const A=v?!v.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,A?"current":"not-current")}if(v){o.push(v);const A=Qd.Yi(g.targetId,v);u.push(A)}}))}),await Promise.all(h),s.La.p_(o),await async function(g,v){const E=we(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>B.forEach(v,N=>B.forEach(N.Hi,z=>E.persistence.referenceDelegate.addReference(A,N.targetId,z)).next(()=>B.forEach(N.Ji,z=>E.persistence.referenceDelegate.removeReference(A,N.targetId,z)))))}catch(A){if(!Io(A))throw A;ne(Xd,"Failed to update sequence numbers: "+A)}for(const A of v){const N=A.targetId;if(!A.fromCache){const z=E.Ts.get(N),G=z.snapshotVersion,Q=z.withLastLimboFreeSnapshotVersion(G);E.Ts=E.Ts.insert(N,Q)}}}(s.localStore,u))}async function LS(r,e){const t=we(r);if(!t.currentUser.isEqual(e)){ne(sf,"User change. New user:",e.toKey());const s=await R_(t.localStore,e);t.currentUser=e,function(u,h){u.Ga.forEach(p=>{p.forEach(g=>{g.reject(new se(H.CANCELLED,h))})}),u.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ka(t,s.Rs)}}function bS(r,e){const t=we(r),s=t.Ua.get(e);if(s&&s.Ba)return Pe().add(s.key);{let o=Pe();const u=t.qa.get(e);if(!u)return o;for(const h of u){const p=t.ka.get(h);o=o.unionWith(p.view.Sa)}return o}}function W_(r){const e=we(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=B_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xS.bind(null,e),e.La.p_=vS.bind(null,e.eventManager),e.La.Ja=wS.bind(null,e.eventManager),e}function MS(r){const e=we(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=VS.bind(null,e),e}class Bu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ac(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return z0(this.persistence,new U0,e.initialUser,this.serializer)}Xa(e){return new A_(Gd.ri,this.serializer)}Za(e){return new G0}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bu.provider={build:()=>new Bu};class US extends Bu{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Ue(this.persistence.referenceDelegate instanceof ju);const s=this.persistence.referenceDelegate.garbageCollector;return new I0(s,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new A_(s=>ju.ri(s,t),this.serializer)}}class Pd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Mg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=LS.bind(null,this.syncEngine),await gS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _S}()}createDatastore(e){const t=ac(e.databaseInfo.databaseId),s=function(u){return new Z0(u)}(e.databaseInfo);return function(u,h,p,g){return new rS(u,h,p,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,p){return new sS(s,o,u,h,p)}(this.localStore,this.datastore,e.asyncQueue,t=>Mg(this.syncEngine,t,0),function(){return xg.D()?new xg:new Q0}())}createSyncEngine(e,t){return function(o,u,h,p,g,v,E){const A=new SS(o,u,h,p,g,v);return E&&(A.ja=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=we(o);ne(es,"RemoteStore shutting down."),u.W_.add(5),await Wa(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Pd.provider={build:()=>new Pd};/**
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
 */class K_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Ar("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Ei="FirestoreClient";class FS{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Mt.UNAUTHENTICATED,this.clientId=My.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ne(Ei,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ne(Ei,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=nf(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function nd(r,e){r.asyncQueue.verifyOperationInProgress(),ne(Ei,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await R_(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Fg(r,e){r.asyncQueue.verifyOperationInProgress();const t=await jS(r);ne(Ei,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>Vg(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>Vg(e.remoteStore,o)),r._onlineComponents=e}async function jS(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ne(Ei,"Using user provided OfflineComponentProvider");try{await nd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;co("Error using user provided cache. Falling back to memory cache: "+t),await nd(r,new Bu)}}else ne(Ei,"Using default OfflineComponentProvider"),await nd(r,new US(void 0));return r._offlineComponents}async function G_(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ne(Ei,"Using user provided OnlineComponentProvider"),await Fg(r,r._uninitializedComponentsProvider._online)):(ne(Ei,"Using default OnlineComponentProvider"),await Fg(r,new Pd))),r._onlineComponents}function zS(r){return G_(r).then(e=>e.syncEngine)}async function kd(r){const e=await G_(r),t=e.eventManager;return t.onListen=AS.bind(null,e.syncEngine),t.onUnlisten=PS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=RS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=kS.bind(null,e.syncEngine),t}function BS(r,e,t={}){const s=new fi;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,p,g,v){const E=new K_({next:N=>{E.su(),h.enqueueAndForget(()=>M_(u,A));const z=N.docs.has(p);!z&&N.fromCache?v.reject(new se(H.UNAVAILABLE,"Failed to get document because the client is offline.")):z&&N.fromCache&&g&&g.source==="server"?v.reject(new se(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(N)},error:N=>v.reject(N)}),A=new U_(tc(p.path),E,{includeMetadataChanges:!0,Ta:!0});return b_(u,A)}(await kd(r),r.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const jg=new Map;/**
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
 */function X_(r,e,t){if(!t)throw new se(H.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function $S(r,e,t,s){if(e===!0&&s===!0)throw new se(H.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function zg(r){if(!ue.isDocumentKey(r))throw new se(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Bg(r){if(ue.isDocumentKey(r))throw new se(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function cc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":me()}function pi(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new se(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=cc(r);throw new se(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */const Y_="firestore.googleapis.com",$g=!0;class qg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new se(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Y_,this.ssl=$g}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:$g;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=S_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<E0)throw new se(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$S("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Q_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qg(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new JT;switch(s.type){case"firstParty":return new nI(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new se(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=jg.get(t);s&&(ne("ComponentProvider","Removing Datastore"),jg.delete(t),s.terminate())}(this),Promise.resolve()}}function qS(r,e,t,s={}){var o;const u=(r=pi(r,hc))._getSettings(),h=`${e}:${t}`;if(u.host!==Y_&&u.host!==h&&co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let p,g;if(typeof s.mockUserToken=="string")p=s.mockUserToken,g=Mt.MOCK_USER;else{p=AE(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new se(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Mt(v)}r._authCredentials=new ZT(new by(p,g))}}/**
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
 */class Ao{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ao(this.firestore,e,this._query)}}class qt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}}class mi extends Ao{constructor(e,t,s){super(e,t,tc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new ue(e))}withConverter(e){return new mi(this.firestore,e,this._path)}}function J_(r,e,...t){if(r=Pt(r),X_("collection","path",e),r instanceof hc){const s=Ge.fromString(e,...t);return Bg(s),new mi(r,null,s)}{if(!(r instanceof qt||r instanceof mi))throw new se(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ge.fromString(e,...t));return Bg(s),new mi(r.firestore,null,s)}}function af(r,e,...t){if(r=Pt(r),arguments.length===1&&(e=My.newId()),X_("doc","path",e),r instanceof hc){const s=Ge.fromString(e,...t);return zg(s),new qt(r,null,new ue(s))}{if(!(r instanceof qt||r instanceof mi))throw new se(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ge.fromString(e,...t));return zg(s),new qt(r.firestore,r instanceof mi?r.converter:null,new ue(s))}}/**
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
 */const Hg="AsyncQueue";class Wg{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new P_(this,"async_queue_retry"),this.Su=()=>{const s=td();s&&ne(Hg,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const t=td();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=td();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new fi;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Io(e))throw e;ne(Hg,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const o=function(h){let p=h.message||"";return h.stack&&(p=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),p}(s);throw Ar("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.pu=!1,s))));return this.bu=t,t}enqueueAfterDelay(e,t,s){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const o=tf.createAndSchedule(this,e,t,s,u=>this.Fu(u));return this.fu.push(o),o}Du(){this.gu&&me()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function Kg(r){return function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1}(r,["next","error","complete"])}class Fa extends hc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Wg,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wg(e),this._firestoreClient=void 0,await e}}}function HS(r,e){const t=typeof r=="object"?r:Cy(),s=typeof r=="string"?r:Ou,o=bd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=IE("firestore");u&&qS(o,...u)}return o}function lf(r){if(r._terminated)throw new se(H.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||WS(r),r._firestoreClient}function WS(r){var e,t,s;const o=r._freezeSettings(),u=function(p,g,v,E){return new gI(p,g,v,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,Q_(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new FS(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}}(r._componentsProvider))}/**
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
 */class yo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yo(kt.fromBase64String(e))}catch(t){throw new se(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new yo(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class uf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class cf{constructor(e){this._methodName=e}}/**
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
 */class hf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
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
 */const KS=/^__.*__$/;class GS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,t,this.fieldTransforms):new qa(e,this.data,t,this.fieldTransforms)}}function Z_(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class ff{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new ff(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.$u(e),o}Uu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return $u(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(Z_(this.Lu)&&KS.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class QS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ac(e)}ju(e,t,s,o=!1){return new ff({Lu:e,methodName:t,zu:s,path:Ct.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ev(r){const e=r._freezeSettings(),t=ac(r._databaseId);return new QS(r._databaseId,!!e.ignoreUndefinedProperties,t)}function XS(r,e,t,s,o,u={}){const h=r.ju(u.merge||u.mergeFields?2:0,e,t,o);rv("Data must be an object, but it was:",h,s);const p=tv(s,h);let g,v;if(u.merge)g=new Ln(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const A of u.mergeFields){const N=JS(e,A,t);if(!h.contains(N))throw new se(H.INVALID_ARGUMENT,`Field '${N}' is specified in your field mask but missing from your input data.`);eA(E,N)||E.push(N)}g=new Ln(E),v=h.fieldTransforms.filter(A=>g.covers(A.field))}else g=null,v=h.fieldTransforms;return new GS(new vn(p),g,v)}class pf extends cf{_toFieldTransform(e){return new BI(e.path,new ba)}isEqual(e){return e instanceof pf}}function YS(r,e,t,s=!1){return mf(t,r.ju(s?4:3,e))}function mf(r,e){if(nv(r=Pt(r)))return rv("Unsupported field value:",e,r),tv(r,e);if(r instanceof cf)return function(s,o){if(!Z_(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const p of s){let g=mf(p,o.Ku(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=Pt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return FI(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=pt.fromDate(s);return{timestampValue:Fu(o.serializer,u)}}if(s instanceof pt){const u=new pt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Fu(o.serializer,u)}}if(s instanceof hf)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof yo)return{bytesValue:y_(o.serializer,s._byteString)};if(s instanceof qt){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.Wu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Wd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof df)return function(h,p){return{mapValue:{fields:{[Hy]:{stringValue:Wy},[Lu]:{arrayValue:{values:h.toArray().map(v=>{if(typeof v!="number")throw p.Wu("VectorValues must only contain numeric values.");return $d(p.serializer,v)})}}}}}}(s,o);throw o.Wu(`Unsupported field value: ${cc(s)}`)}(r,e)}function tv(r,e){const t={};return Fy(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ns(r,(s,o)=>{const u=mf(o,e.qu(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function nv(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof pt||r instanceof hf||r instanceof yo||r instanceof qt||r instanceof cf||r instanceof df)}function rv(r,e,t){if(!nv(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=cc(t);throw s==="an object"?e.Wu(r+" a custom object"):e.Wu(r+" "+s)}}function JS(r,e,t){if((e=Pt(e))instanceof uf)return e._internalPath;if(typeof e=="string")return iv(r,e);throw $u("Field path arguments must be of type string or ",r,!1,void 0,t)}const ZS=new RegExp("[~\\*/\\[\\]]");function iv(r,e,t){if(e.search(ZS)>=0)throw $u(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new uf(...e.split("."))._internalPath}catch{throw $u(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function $u(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new se(H.INVALID_ARGUMENT,p+r+g)}function eA(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class sv{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(gf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class tA extends sv{data(){return super.data()}}function gf(r,e){return typeof e=="string"?iv(r,e):e instanceof uf?e._internalPath:e._delegate._internalPath}/**
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
 */function nA(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new se(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yf{}class rA extends yf{}function iA(r,e,...t){let s=[];e instanceof yf&&s.push(e),s=s.concat(t),function(u){const h=u.filter(g=>g instanceof _f).length,p=u.filter(g=>g instanceof dc).length;if(h>1||h>0&&p>0)throw new se(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class dc extends rA{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new dc(e,t,s)}_apply(e){const t=this._parse(e);return ov(e._query,t),new Ao(e.firestore,e.converter,_d(e._query,t))}_parse(e){const t=ev(e.firestore);return function(u,h,p,g,v,E,A){let N;if(v.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new se(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){Qg(A,E);const G=[];for(const Q of A)G.push(Gg(g,u,Q));N={arrayValue:{values:G}}}else N=Gg(g,u,A)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||Qg(A,E),N=YS(p,h,A,E==="in"||E==="not-in");return lt.create(v,E,N)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function sA(r,e,t){const s=e,o=gf("where",r);return dc._create(o,s,t)}class _f extends yf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new _f(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:bn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,u){let h=o;const p=u.getFlattenedFilters();for(const g of p)ov(h,g),h=_d(h,g)}(e._query,t),new Ao(e.firestore,e.converter,_d(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Gg(r,e,t){if(typeof(t=Pt(t))=="string"){if(t==="")throw new se(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!e_(e)&&t.indexOf("/")!==-1)throw new se(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ge.fromString(t));if(!ue.isDocumentKey(s))throw new se(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return ug(r,new ue(s))}if(t instanceof qt)return ug(r,t._key);throw new se(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${cc(t)}.`)}function Qg(r,e){if(!Array.isArray(r)||r.length===0)throw new se(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ov(r,e){const t=function(o,u){for(const h of o)for(const p of h.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new se(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class oA{convertValue(e,t="none"){switch(vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(_i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ns(e,(o,u)=>{s[o]=this.convertValue(u,t)}),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[Lu].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>it(h.doubleValue));return new df(u)}convertGeoPoint(e){return new hf(it(e.latitude),it(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=ec(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Va(e));default:return null}}convertTimestamp(e){const t=yi(e);return new pt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);Ue(I_(s));const o=new Oa(s.get(1),s.get(3)),u=new ue(s.popFirst(5));return o.isEqual(t)||Ar(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function aA(r,e,t){let s;return s=r?r.toFirestore(e):e,s}/**
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
 */class Aa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class av extends sv{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Au(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(gf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Au extends av{data(e={}){return super.data(e)}}class lA{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Aa(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Au(this._firestore,this._userDataWriter,s.key,s,new Aa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(p=>{const g=new Au(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Aa(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(p=>u||p.type!==3).map(p=>{const g=new Au(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Aa(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let v=-1,E=-1;return p.type!==0&&(v=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),E=h.indexOf(p.doc.key)),{type:uA(p.type),doc:g,oldIndex:v,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function uA(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}/**
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
 */function cA(r){r=pi(r,qt);const e=pi(r.firestore,Fa);return BS(lf(e),r._key).then(t=>hv(e,r,t))}class lv extends oA{constructor(e){super(),this.firestore=e}convertBytes(e){return new yo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,t)}}function uv(r,e,t){r=pi(r,qt);const s=pi(r.firestore,Fa),o=aA(r.converter,e);return hA(s,[XS(ev(s),"setDoc",r._key,o,r.converter!==null,t).toMutation(r._key,Tr.none())])}function cv(r,...e){var t,s,o;r=Pt(r);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Kg(e[h])||(u=e[h],h++);const p={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(Kg(e[h])){const A=e[h];e[h]=(t=A.next)===null||t===void 0?void 0:t.bind(A),e[h+1]=(s=A.error)===null||s===void 0?void 0:s.bind(A),e[h+2]=(o=A.complete)===null||o===void 0?void 0:o.bind(A)}let g,v,E;if(r instanceof qt)v=pi(r.firestore,Fa),E=tc(r._key.path),g={next:A=>{e[h]&&e[h](hv(v,r,A))},error:e[h+1],complete:e[h+2]};else{const A=pi(r,Ao);v=pi(A.firestore,Fa),E=A._query;const N=new lv(v);g={next:z=>{e[h]&&e[h](new lA(v,N,A,z))},error:e[h+1],complete:e[h+2]},nA(r._query)}return function(N,z,G,Q){const q=new K_(Q),fe=new U_(z,q,G);return N.asyncQueue.enqueueAndForget(async()=>b_(await kd(N),fe)),()=>{q.su(),N.asyncQueue.enqueueAndForget(async()=>M_(await kd(N),fe))}}(lf(v),E,p,g)}function hA(r,e){return function(s,o){const u=new fi;return s.asyncQueue.enqueueAndForget(async()=>NS(await zS(s),o,u)),u.promise}(lf(r),e)}function hv(r,e,t){const s=t.docs.get(e._key),o=new lv(r);return new av(r,o,e._key,s,new Aa(t.hasPendingWrites,t.fromCache),e.converter)}function dA(){return new pf("serverTimestamp")}(function(e,t=!0){(function(o){Eo=o})(wo),uo(new Ji("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),p=new Fa(new eI(s.getProvider("auth-internal")),new rI(h,s.getProvider("app-check-internal")),function(v,E){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new se(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oa(v.options.projectId,E)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),hi(Jm,Zm,e),hi(Jm,Zm,"esm2017")})();const fA={apiKey:"AIzaSyBF3MnSIBJxIGNl5F2PmdOJMxoffKG6bCQ",projectId:"food-del-6b5bf"},pA=Ry(fA),Ga=HS(pA);function vf(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function dv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mA=dv,fv=new za("auth","Firebase",dv());/**
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
 */const qu=new Od("@firebase/auth");function gA(r,...e){qu.logLevel<=Re.WARN&&qu.warn(`Auth (${wo}): ${r}`,...e)}function Ru(r,...e){qu.logLevel<=Re.ERROR&&qu.error(`Auth (${wo}): ${r}`,...e)}/**
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
 */function Cr(r,...e){throw wf(r,...e)}function Yn(r,...e){return wf(r,...e)}function pv(r,e,t){const s=Object.assign(Object.assign({},mA()),{[e]:t});return new za("auth","Firebase",s).create(e,{appName:r.name})}function Ir(r){return pv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return fv.create(r,...e)}function ye(r,e,...t){if(!r)throw wf(e,...t)}function _r(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ru(e),new Error(e)}function Pr(r,e){r||_r(e)}/**
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
 */function Nd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function yA(){return Xg()==="http:"||Xg()==="https:"}function Xg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function _A(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yA()||kE()||"connection"in navigator)?navigator.onLine:!0}function vA(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Qa{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pr(t>e,"Short delay should be less than long delay!"),this.isMobile=RE()||NE()}get(){return _A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ef(r,e){Pr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class mv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const wA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const EA=new Qa(3e4,6e4);function Ro(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function xr(r,e,t,s,o={}){return gv(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const p=Ba(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const v=Object.assign({method:e,headers:g},u);return PE()||(v.referrerPolicy="no-referrer"),mv.fetch()(_v(r,r.config.apiHost,t,p),v)})}async function gv(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},wA),e);try{const o=new IA(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw vu(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const p=u.ok?h.errorMessage:h.error.message,[g,v]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw vu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw vu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw vu(r,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw pv(r,E,v);Cr(r,E)}}catch(o){if(o instanceof Nr)throw o;Cr(r,"network-request-failed",{message:String(o)})}}async function yv(r,e,t,s,o={}){const u=await xr(r,e,t,s,o);return"mfaPendingCredential"in u&&Cr(r,"multi-factor-auth-required",{_serverResponse:u}),u}function _v(r,e,t,s){const o=`${e}${t}?${s}`;return r.config.emulator?Ef(r.config,o):`${r.config.apiScheme}://${o}`}function TA(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class IA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Yn(this.auth,"network-request-failed")),EA.get())})}}function vu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Yn(r,e,s);return o.customData._tokenResponse=t,o}function Yg(r){return r!==void 0&&r.enterprise!==void 0}class SA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return TA(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function AA(r,e){return xr(r,"GET","/v2/recaptchaConfig",Ro(r,e))}/**
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
 */async function RA(r,e){return xr(r,"POST","/v1/accounts:delete",e)}async function vv(r,e){return xr(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Na(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CA(r,e=!1){const t=Pt(r),s=await t.getIdToken(e),o=Tf(s);ye(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Na(rd(o.auth_time)),issuedAtTime:Na(rd(o.iat)),expirationTime:Na(rd(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function rd(r){return Number(r)*1e3}function Tf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Ru("JWT malformed, contained fewer than 3 sections"),null;try{const o=wy(t);return o?JSON.parse(o):(Ru("Failed to decode base64 JWT payload"),null)}catch(o){return Ru("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Jg(r){const e=Tf(r);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _o(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Nr&&PA(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function PA({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class kA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Na(this.lastLoginAt),this.creationTime=Na(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hu(r){var e;const t=r.auth,s=await r.getIdToken(),o=await _o(r,vv(t,{idToken:s}));ye(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?wv(u.providerUserInfo):[],p=xA(r.providerData,h),g=r.isAnonymous,v=!(r.email&&u.passwordHash)&&!(p!=null&&p.length),E=g?v:!1,A={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new xd(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,A)}async function NA(r){const e=Pt(r);await Hu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xA(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function wv(r){return r.map(e=>{var{providerId:t}=e,s=vf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function DA(r,e){const t=await gv(r,{},async()=>{const s=Ba({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=_v(r,o,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",mv.fetch()(h,{method:"POST",headers:p,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function VA(r,e){return xr(r,"POST","/v2/accounts:revokeToken",Ro(r,e))}/**
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
 */class oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const t=Jg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await DA(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new oo;return s&&(ye(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ye(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ye(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oo,this.toJSON())}_performRefresh(){return _r("not implemented")}}/**
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
 */function ri(r,e){ye(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class vr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=vf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new xd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await _o(this,this.stsTokenManager.getToken(this.auth,e));return ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return CA(this,e)}reload(){return NA(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Hu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject(Ir(this.auth));const e=await this.getIdToken();return await _o(this,RA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,p,g,v,E;const A=(s=t.displayName)!==null&&s!==void 0?s:void 0,N=(o=t.email)!==null&&o!==void 0?o:void 0,z=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,G=(h=t.photoURL)!==null&&h!==void 0?h:void 0,Q=(p=t.tenantId)!==null&&p!==void 0?p:void 0,q=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,fe=(v=t.createdAt)!==null&&v!==void 0?v:void 0,_e=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:pe,emailVerified:Ee,isAnonymous:He,providerData:Ie,stsTokenManager:C}=t;ye(pe&&C,e,"internal-error");const T=oo.fromJSON(this.name,C);ye(typeof pe=="string",e,"internal-error"),ri(A,e.name),ri(N,e.name),ye(typeof Ee=="boolean",e,"internal-error"),ye(typeof He=="boolean",e,"internal-error"),ri(z,e.name),ri(G,e.name),ri(Q,e.name),ri(q,e.name),ri(fe,e.name),ri(_e,e.name);const S=new vr({uid:pe,auth:e,email:N,emailVerified:Ee,displayName:A,isAnonymous:He,photoURL:G,phoneNumber:z,tenantId:Q,stsTokenManager:T,createdAt:fe,lastLoginAt:_e});return Ie&&Array.isArray(Ie)&&(S.providerData=Ie.map(k=>Object.assign({},k))),q&&(S._redirectEventId=q),S}static async _fromIdTokenResponse(e,t,s=!1){const o=new oo;o.updateFromServerResponse(t);const u=new vr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Hu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ye(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?wv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new oo;p.updateFromIdToken(s);const g=new vr({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new xd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,v),g}}/**
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
 */const Zg=new Map;function wr(r){Pr(r instanceof Function,"Expected a class definition");let e=Zg.get(r);return e?(Pr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Zg.set(r,e),e)}/**
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
 */class Ev{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ev.type="NONE";const ey=Ev;/**
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
 */function Cu(r,e,t){return`firebase:${r}:${e}:${t}`}class ao{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Cu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Cu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ao(wr(ey),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||wr(ey);const h=Cu(s,e.config.apiKey,e.name);let p=null;for(const v of t)try{const E=await v._get(h);if(E){const A=vr._fromJSON(e,E);v!==u&&(p=A),u=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new ao(u,e,s):(u=g[0],p&&await u._set(h,p.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new ao(u,e,s))}}/**
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
 */function ty(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Av(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cv(e))return"Blackberry";if(Pv(e))return"Webos";if(Iv(e))return"Safari";if((e.includes("chrome/")||Sv(e))&&!e.includes("edge/"))return"Chrome";if(Rv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Tv(r=Ft()){return/firefox\//i.test(r)}function Iv(r=Ft()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sv(r=Ft()){return/crios\//i.test(r)}function Av(r=Ft()){return/iemobile/i.test(r)}function Rv(r=Ft()){return/android/i.test(r)}function Cv(r=Ft()){return/blackberry/i.test(r)}function Pv(r=Ft()){return/webos/i.test(r)}function If(r=Ft()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function OA(r=Ft()){var e;return If(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LA(){return xE()&&document.documentMode===10}function kv(r=Ft()){return If(r)||Rv(r)||Pv(r)||Cv(r)||/windows phone/i.test(r)||Av(r)}/**
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
 */function Nv(r,e=[]){let t;switch(r){case"Browser":t=ty(Ft());break;case"Worker":t=`${ty(Ft())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${wo}/${s}`}/**
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
 */class bA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,p)=>{try{const g=e(u);h(g)}catch(g){p(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MA(r,e={}){return xr(r,"GET","/v2/passwordPolicy",Ro(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=6;class FA{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:UA,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,p;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(p=g.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class jA{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ny(this),this.idTokenSubscription=new ny(this),this.beforeStateQueue=new bA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await ao.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await vv(this,{idToken:e}),s=await vr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(_n(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===p)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Hu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject(Ir(this));const t=e?Pt(e):null;return t&&ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject(Ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject(Ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MA(this),t=new FA(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new za("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await VA(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wr(e)||this._popupRedirectResolver;ye(t,this,"argument-error"),this.redirectPersistenceManager=await ao.create(this,[wr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(p,this,"internal-error"),p.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(_n(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&gA(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function os(r){return Pt(r)}class ny{constructor(e){this.auth=e,this.observer=null,this.addObserver=FE(t=>this.observer=t)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zA(r){fc=r}function xv(r){return fc.loadJS(r)}function BA(){return fc.recaptchaEnterpriseScript}function $A(){return fc.gapiScript}function qA(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class HA{constructor(){this.enterprise=new WA}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class WA{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const KA="recaptcha-enterprise",Dv="NO_RECAPTCHA";class GA{constructor(e){this.type=KA,this.auth=os(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,p)=>{AA(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const v=new SA(g);return u.tenantId==null?u._agentRecaptchaConfig=v:u._tenantRecaptchaConfigs[u.tenantId]=v,h(v.siteKey)}}).catch(g=>{p(g)})})}function o(u,h,p){const g=window.grecaptcha;Yg(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(v=>{h(v)}).catch(()=>{h(Dv)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new HA().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(p=>{if(!t&&Yg(window.grecaptcha))o(p,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=BA();g.length!==0&&(g+=p),xv(g).then(()=>{o(p,u,h)}).catch(v=>{h(v)})}}).catch(p=>{h(p)})})}}async function ry(r,e,t,s=!1,o=!1){const u=new GA(r);let h;if(o)h=Dv;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const p=Object.assign({},e);return s?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function QA(r,e,t,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await ry(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await ry(r,e,t,t==="getOobCode");return s(r,p)}else return Promise.reject(h)})}/**
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
 */function XA(r,e){const t=bd(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(xu(u,e??{}))return o;Cr(o,"already-initialized")}return t.initialize({options:e})}function YA(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(wr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function JA(r,e,t){const s=os(r);ye(s._canInitEmulator,s,"emulator-config-failed"),ye(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=Vv(e),{host:h,port:p}=ZA(e),g=p===null?"":`:${p}`;s.config.emulator={url:`${u}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),eR()}function Vv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function ZA(r){const e=Vv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:iy(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:iy(h)}}}function iy(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function eR(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Ov{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _r("not implemented")}_getIdTokenResponse(e){return _r("not implemented")}_linkToIdToken(e,t){return _r("not implemented")}_getReauthenticationResolver(e){return _r("not implemented")}}async function tR(r,e){return xr(r,"POST","/v1/accounts:sendOobCode",Ro(r,e))}async function nR(r,e){return tR(r,e)}/**
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
 */async function lo(r,e){return yv(r,"POST","/v1/accounts:signInWithIdp",Ro(r,e))}/**
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
 */const rR="http://localhost";class ts extends Ov{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Cr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=vf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new ts(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return lo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,lo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,lo(e,t)}buildRequest(){const e={requestUri:rR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ba(t)}return e}}/**
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
 */class Lv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Xa extends Lv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ii extends Xa{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ii.credential(e.oauthAccessToken)}catch{return null}}}ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";ii.PROVIDER_ID="facebook.com";/**
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
 */class si extends Xa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ts._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return si.credential(t,s)}catch{return null}}}si.GOOGLE_SIGN_IN_METHOD="google.com";si.PROVIDER_ID="google.com";/**
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
 */class oi extends Xa{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.GITHUB_SIGN_IN_METHOD="github.com";oi.PROVIDER_ID="github.com";/**
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
 */class ai extends Xa{constructor(){super("twitter.com")}static credential(e,t){return ts._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ai.credential(t,s)}catch{return null}}}ai.TWITTER_SIGN_IN_METHOD="twitter.com";ai.PROVIDER_ID="twitter.com";/**
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
 */async function bv(r,e){return yv(r,"POST","/v1/accounts:signUp",Ro(r,e))}/**
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
 */class kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await vr._fromIdTokenResponse(e,s,o),h=sy(s);return new kr({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=sy(s);return new kr({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function sy(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function iR(r){var e;if(_n(r.app))return Promise.reject(Ir(r));const t=os(r);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new kr({user:t.currentUser,providerId:null,operationType:"signIn"});const s=await bv(t,{returnSecureToken:!0}),o=await kr._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(o.user),o}/**
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
 */class Wu extends Nr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Wu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Wu(e,t,s,o)}}function Mv(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Wu._fromErrorAndOperation(r,u,e,s):u})}async function sR(r,e,t=!1){const s=await _o(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return kr._forOperation(r,"link",s)}/**
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
 */async function oR(r,e,t=!1){const{auth:s}=r;if(_n(s.app))return Promise.reject(Ir(s));const o="reauthenticate";try{const u=await _o(r,Mv(s,o,e,r),t);ye(u.idToken,s,"internal-error");const h=Tf(u.idToken);ye(h,s,"internal-error");const{sub:p}=h;return ye(r.uid===p,s,"user-mismatch"),kr._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Cr(s,"user-mismatch"),u}}/**
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
 */async function aR(r,e,t=!1){if(_n(r.app))return Promise.reject(Ir(r));const s="signIn",o=await Mv(r,s,e),u=await kr._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}/**
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
 */async function lR(r){const e=os(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function uR(r,e,t){if(_n(r.app))return Promise.reject(Ir(r));const s=os(r),h=await QA(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",bv).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&lR(r),g}),p=await kr._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(p.user),p}async function cR(r,e){const t=Pt(r),o={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()},{email:u}=await nR(t.auth,o);u!==r.email&&await r.reload()}/**
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
 */async function hR(r,e){return xr(r,"POST","/v1/accounts:update",e)}/**
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
 */async function dR(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Pt(r),u={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await _o(s,hR(s.auth,u));s.displayName=h.displayName||null,s.photoURL=h.photoUrl||null;const p=s.providerData.find(({providerId:g})=>g==="password");p&&(p.displayName=s.displayName,p.photoURL=s.photoURL),await s._updateTokensIfNecessary(h)}function fR(r,e,t,s){return Pt(r).onIdTokenChanged(e,t,s)}function pR(r,e,t){return Pt(r).beforeAuthStateChanged(e,t)}function Uv(r,e,t,s){return Pt(r).onAuthStateChanged(e,t,s)}function mR(r){return Pt(r).signOut()}const Ku="__sak";/**
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
 */class Fv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ku,"1"),this.storage.removeItem(Ku),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const gR=1e3,yR=10;class jv extends Fv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);LA()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,yR):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},gR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jv.type="LOCAL";const _R=jv;/**
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
 */class zv extends Fv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zv.type="SESSION";const Bv=zv;/**
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
 */function vR(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new pc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async v=>v(t.origin,u)),g=await vR(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pc.receivers=[];/**
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
 */function Sf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class wR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((p,g)=>{const v=Sf("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(A){const N=A;if(N.data.eventId===v)switch(N.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(N.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function Jn(){return window}function ER(r){Jn().location.href=r}/**
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
 */function $v(){return typeof Jn().WorkerGlobalScope<"u"&&typeof Jn().importScripts=="function"}async function TR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IR(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function SR(){return $v()?self:null}/**
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
 */const qv="firebaseLocalStorageDb",AR=1,Gu="firebaseLocalStorage",Hv="fbase_key";class Ya{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function mc(r,e){return r.transaction([Gu],e?"readwrite":"readonly").objectStore(Gu)}function RR(){const r=indexedDB.deleteDatabase(qv);return new Ya(r).toPromise()}function Dd(){const r=indexedDB.open(qv,AR);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Gu,{keyPath:Hv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Gu)?e(s):(s.close(),await RR(),e(await Dd()))})})}async function oy(r,e,t){const s=mc(r,!0).put({[Hv]:e,value:t});return new Ya(s).toPromise()}async function CR(r,e){const t=mc(r,!1).get(e),s=await new Ya(t).toPromise();return s===void 0?null:s.value}function ay(r,e){const t=mc(r,!0).delete(e);return new Ya(t).toPromise()}const PR=800,kR=3;class Wv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>kR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $v()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pc._getInstance(SR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await TR(),!this.activeServiceWorker)return;this.sender=new wR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dd();return await oy(e,Ku,"1"),await ay(e,Ku),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>oy(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>CR(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ay(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=mc(o,!1).getAll();return new Ya(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wv.type="LOCAL";const NR=Wv;new Qa(3e4,6e4);/**
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
 */function xR(r,e){return e?wr(e):(ye(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Af extends Ov{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return lo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return lo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function DR(r){return aR(r.auth,new Af(r),r.bypassAuthState)}function VR(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),oR(t,new Af(r),r.bypassAuthState)}async function OR(r){const{auth:e,user:t}=r;return ye(t,e,"internal-error"),sR(t,new Af(r),r.bypassAuthState)}/**
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
 */class Kv{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:p}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DR;case"linkViaPopup":case"linkViaRedirect":return OR;case"reauthViaPopup":case"reauthViaRedirect":return VR;default:Cr(this.auth,"internal-error")}}resolve(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const LR=new Qa(2e3,1e4);class io extends Kv{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,io.currentPopupAction&&io.currentPopupAction.cancel(),io.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Pr(this.filter.length===1,"Popup operations only handle one event");const e=Sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Yn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,io.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LR.get())};e()}}io.currentPopupAction=null;/**
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
 */const bR="pendingRedirect",Pu=new Map;class MR extends Kv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Pu.get(this.auth._key());if(!e){try{const s=await UR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Pu.set(this.auth._key(),e)}return this.bypassAuthState||Pu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function UR(r,e){const t=zR(e),s=jR(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function FR(r,e){Pu.set(r._key(),e)}function jR(r){return wr(r._redirectPersistence)}function zR(r){return Cu(bR,r.config.apiKey,r.name)}async function BR(r,e,t=!1){if(_n(r.app))return Promise.reject(Ir(r));const s=os(r),o=xR(s,e),h=await new MR(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const $R=10*60*1e3;class qR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Gv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Yn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$R&&this.cachedEventUids.clear(),this.cachedEventUids.has(ly(e))}saveEventToCache(e){this.cachedEventUids.add(ly(e)),this.lastProcessedEventTime=Date.now()}}function ly(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Gv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gv(r);default:return!1}}/**
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
 */async function WR(r,e={}){return xr(r,"GET","/v1/projects",e)}/**
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
 */const KR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GR=/^https?/;async function QR(r){if(r.config.emulator)return;const{authorizedDomains:e}=await WR(r);for(const t of e)try{if(XR(t))return}catch{}Cr(r,"unauthorized-domain")}function XR(r){const e=Nd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!GR.test(t))return!1;if(KR.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const YR=new Qa(3e4,6e4);function uy(){const r=Jn().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function JR(r){return new Promise((e,t)=>{var s,o,u;function h(){uy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uy(),t(Yn(r,"network-request-failed"))},timeout:YR.get()})}if(!((o=(s=Jn().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=Jn().gapi)===null||u===void 0)&&u.load)h();else{const p=qA("iframefcb");return Jn()[p]=()=>{gapi.load?h():t(Yn(r,"network-request-failed"))},xv(`${$A()}?onload=${p}`).catch(g=>t(g))}}).catch(e=>{throw ku=null,e})}let ku=null;function ZR(r){return ku=ku||JR(r),ku}/**
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
 */const eC=new Qa(5e3,15e3),tC="__/auth/iframe",nC="emulator/auth/iframe",rC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sC(r){const e=r.config;ye(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Ef(e,nC):`https://${r.config.authDomain}/${tC}`,s={apiKey:e.apiKey,appName:r.name,v:wo},o=iC.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ba(s).slice(1)}`}async function oC(r){const e=await ZR(r),t=Jn().gapi;return ye(t,r,"internal-error"),e.open({where:document.body,url:sC(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rC,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Yn(r,"network-request-failed"),p=Jn().setTimeout(()=>{u(h)},eC.get());function g(){Jn().clearTimeout(p),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const aC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lC=500,uC=600,cC="_blank",hC="http://localhost";class cy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dC(r,e,t,s=lC,o=uC){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g=Object.assign(Object.assign({},aC),{width:s.toString(),height:o.toString(),top:u,left:h}),v=Ft().toLowerCase();t&&(p=Sv(v)?cC:t),Tv(v)&&(e=e||hC,g.scrollbars="yes");const E=Object.entries(g).reduce((N,[z,G])=>`${N}${z}=${G},`,"");if(OA(v)&&p!=="_self")return fC(e||"",p),new cy(null);const A=window.open(e||"",p,E);ye(A,r,"popup-blocked");try{A.focus()}catch{}return new cy(A)}function fC(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const pC="__/auth/handler",mC="emulator/auth/handler",gC=encodeURIComponent("fac");async function hy(r,e,t,s,o,u){ye(r.config.authDomain,r,"auth-domain-config-required"),ye(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:wo,eventId:o};if(e instanceof Lv){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",UE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,A]of Object.entries({}))h[E]=A}if(e instanceof Xa){const E=e.getScopes().filter(A=>A!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const p=h;for(const E of Object.keys(p))p[E]===void 0&&delete p[E];const g=await r._getAppCheckToken(),v=g?`#${gC}=${encodeURIComponent(g)}`:"";return`${yC(r)}?${Ba(p).slice(1)}${v}`}function yC({config:r}){return r.emulator?Ef(r,mC):`https://${r.authDomain}/${pC}`}/**
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
 */const id="webStorageSupport";class _C{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bv,this._completeRedirectFn=BR,this._overrideRedirectResult=FR}async _openPopup(e,t,s,o){var u;Pr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await hy(e,t,s,Nd(),o);return dC(e,h,Sf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await hy(e,t,s,Nd(),o);return ER(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Pr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await oC(e),s=new qR(e);return t.register("authEvent",o=>(ye(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(id,{type:id},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[id];h!==void 0&&t(!!h),Cr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=QR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return kv()||Iv()||If()}}const vC=_C;var dy="@firebase/auth",fy="1.9.0";/**
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
 */class wC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function EC(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TC(r){uo(new Ji("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;ye(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nv(r)},v=new jA(s,o,u,g);return YA(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),uo(new Ji("auth-internal",e=>{const t=os(e.getProvider("auth").getImmediate());return(s=>new wC(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),hi(dy,fy,EC(r)),hi(dy,fy,"esm2017")}/**
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
 */const IC=5*60,SC=Iy("authIdTokenMaxAge")||IC;let py=null;const AC=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>SC)return;const o=t==null?void 0:t.token;py!==o&&(py=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function ja(r=Cy()){const e=bd(r,"auth");if(e.isInitialized())return e.getImmediate();const t=XA(r,{popupRedirectResolver:vC,persistence:[NR,_R,Bv]}),s=Iy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=AC(u.toString());pR(t,h,()=>h(t.currentUser)),fR(t,p=>h(p))}}const o=Ey("auth");return o&&JA(t,`http://${o}`),t}function RC(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}zA({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Yn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",RC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TC("Browser");const CC=({setScreen:r,cart:e,setCart:t,setAddress:s})=>{const[o,u]=Le.useState(null);Le.useEffect(()=>{const C=ja(),T=Uv(C,S=>{u(S)});return()=>T()},[]);const[h,p]=Le.useState(""),[g,v]=Le.useState(""),[E,A]=Le.useState(!1),N=["전체","세트메뉴","면류","밥류","요리류","사이드","음료"],[z,G]=Le.useState("전체"),[Q,q]=Le.useState([]);Le.useEffect(()=>{const C=J_(Ga,"menu"),T=cv(C,S=>{const k=S.docs.map(D=>({id:D.id,...D.data()}));q(k)},S=>console.error("메뉴 데이터를 불러오는 중 오류:",S));return()=>T()},[]);const fe=C=>{t(T=>T.find(k=>k.id===C.id)?T.map(k=>k.id===C.id?{...k,quantity:k.quantity+1}:k):[...T,{...C,quantity:1}])},_e=C=>{p(C.address),A(!1)},pe=h&&g?`${h} ${g}`:h;Le.useEffect(()=>{s(pe)},[pe,s]);const Ee=()=>{if(z!=="전체"){const C=Q.filter(T=>T.category===z);return V.jsxs("div",{children:[V.jsx("h2",{className:"text-xl font-bold mt-4 mb-2",children:z}),C.map(T=>V.jsxs("div",{className:"bg-white p-4 mb-2 rounded-lg shadow-md flex items-center",children:[T.image&&V.jsx("img",{src:T.image,alt:T.name,className:"w-16 h-16 rounded-lg mr-4"}),V.jsxs("div",{className:"flex-1",children:[V.jsx("h2",{className:"text-lg font-semibold",children:T.name}),V.jsxs("p",{className:"text-gray-500",children:["₩",Number(T.price).toLocaleString()]}),T.description&&V.jsxs("p",{className:"text-gray-500",children:["설명: ",T.description]})]}),V.jsx("button",{className:"bg-blue-500 text-white px-4 py-2 rounded-lg",onClick:()=>fe(T),children:"추가"})]},T.id))]})}else return N.filter(C=>C!=="전체").map(C=>{const T=Q.filter(S=>S.category===C);return T.length===0?null:V.jsxs("div",{children:[V.jsx("h2",{className:"text-xl font-bold mt-4 mb-2",children:C}),T.map(S=>V.jsxs("div",{className:"bg-white p-4 mb-2 rounded-lg shadow-md flex items-center",children:[S.image&&V.jsx("img",{src:S.image,alt:S.name,className:"w-16 h-16 rounded-lg mr-4"}),V.jsxs("div",{className:"flex-1",children:[V.jsx("h2",{className:"text-lg font-semibold",children:S.name}),V.jsxs("p",{className:"text-gray-500",children:["₩",Number(S.price).toLocaleString()]}),S.description&&V.jsxs("p",{className:"text-gray-500",children:["설명: ",S.description]})]}),V.jsx("button",{className:"bg-blue-500 text-white px-4 py-2 rounded-lg",onClick:()=>fe(S),children:"추가"})]},S.id))]},C)})};return V.jsxs("div",{className:"min-h-screen bg-gray-100 p-4 pb-32 relative",children:[V.jsxs("header",{className:"bg-white p-4 rounded-lg shadow-md flex justify-between items-center",children:[V.jsxs("div",{children:[V.jsx("h1",{className:"text-xl font-bold",children:"중화반점"}),V.jsxs("p",{className:"text-gray-500",children:["영업시간: ","11:00 - 22:00"]}),V.jsx("p",{className:"text-gray-500",children:"최소 주문 금액: ₩20000"})]}),V.jsx("button",{className:"bg-gray-800 text-white px-4 py-2 rounded",onClick:()=>{if(o){const C=ja();mR(C).then(()=>{alert("로그아웃 되었습니다."),r("home")}).catch(T=>{alert(T.message)})}else r("login")},children:o?"로그아웃":"로그인"})]}),V.jsxs("div",{className:"my-4 bg-white p-4 rounded-lg shadow-md",children:[V.jsx("label",{className:"block text-gray-700 mb-2",children:"배달 받을 주소"}),pe?V.jsxs("p",{className:"mb-2 text-gray-700",children:["전체 주소: ",pe]}):V.jsx("p",{className:"mb-2 text-gray-700",children:"주소가 설정되지 않았습니다."}),V.jsx("button",{className:"bg-green-500 text-white px-4 py-2 rounded",onClick:()=>A(!0),children:"주소 검색"}),E&&V.jsx("div",{className:"mt-2",children:V.jsx(mE,{onComplete:_e})}),h&&V.jsxs("div",{className:"mt-4",children:[V.jsx("label",{className:"block text-gray-700 mb-2",children:"상세 주소"}),V.jsx("input",{type:"text",value:g,onChange:C=>v(C.target.value),placeholder:"상세 주소를 입력하세요",className:"w-full p-2 border border-gray-300 rounded"})]})]}),V.jsx("div",{className:"mb-4",children:V.jsx("div",{className:"flex space-x-4 overflow-x-auto p-2",children:N.map(C=>V.jsx("button",{onClick:()=>G(C),className:`px-4 py-2 rounded-lg whitespace-nowrap ${z===C?"bg-blue-500 text-white":"bg-gray-200 text-gray-700"}`,children:C},C))})}),V.jsx("div",{className:"mt-4",children:Ee()}),V.jsx(vo,{activeScreen:"home",setScreen:r,cartCount:e.reduce((C,T)=>C+T.quantity,0)})]})};var Qv={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},my=Er.createContext&&Er.createContext(Qv),PC=["attr","size","title"];function kC(r,e){if(r==null)return{};var t=NC(r,e),s,o;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);for(o=0;o<u.length;o++)s=u[o],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(t[s]=r[s])}return t}function NC(r,e){if(r==null)return{};var t={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(e.indexOf(s)>=0)continue;t[s]=r[s]}return t}function Qu(){return Qu=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Qu.apply(this,arguments)}function gy(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,s)}return t}function Xu(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?gy(Object(t),!0).forEach(function(s){xC(r,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):gy(Object(t)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(t,s))})}return r}function xC(r,e,t){return e=DC(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function DC(r){var e=VC(r,"string");return typeof e=="symbol"?e:e+""}function VC(r,e){if(typeof r!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var s=t.call(r,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function Xv(r){return r&&r.map((e,t)=>Er.createElement(e.tag,Xu({key:t},e.attr),Xv(e.child)))}function OC(r){return e=>Er.createElement(LC,Qu({attr:Xu({},r.attr)},e),Xv(r.child))}function LC(r){var e=t=>{var{attr:s,size:o,title:u}=r,h=kC(r,PC),p=o||t.size||"1em",g;return t.className&&(g=t.className),r.className&&(g=(g?g+" ":"")+r.className),Er.createElement("svg",Qu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,h,{className:g,style:Xu(Xu({color:r.color||t.color},t.style),r.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),u&&Er.createElement("title",null,u),r.children)};return my!==void 0?Er.createElement(my.Consumer,null,t=>e(t)):e(Qv)}function bC(r){return OC({attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Square_Minus"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M18.438,20.938H5.564a2.5,2.5,0,0,1-2.5-2.5V5.564a2.5,2.5,0,0,1,2.5-2.5H18.438a2.5,2.5,0,0,1,2.5,2.5V18.438A2.5,2.5,0,0,1,18.438,20.938ZM5.564,4.064a1.5,1.5,0,0,0-1.5,1.5V18.438a1.5,1.5,0,0,0,1.5,1.5H18.438a1.5,1.5,0,0,0,1.5-1.5V5.564a1.5,1.5,0,0,0-1.5-1.5Z"},child:[]},{tag:"path",attr:{d:"M9,12.5a.5.5,0,0,1,0-1h6a.5.5,0,0,1,0,1Z"},child:[]}]}]}]})(r)}const MC=({cart:r,setScreen:e,setOrders:t,setCart:s,address:o})=>{const u=()=>{const E="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";let A="";for(let N=0;N<4;N++)A+=E.charAt(Math.floor(Math.random()*E.length));return A},p=r.reduce((E,A)=>E+A.price*A.quantity,0),g=()=>{if(!o||o.trim()===""){alert("주소를 설정해야 합니다. 먼저 주소를 입력해 주세요."),e("home");return}p<2e4||(t(E=>[...E,{id:u(),items:r}]),s([]),e("orders"))},v=E=>{s(A=>A.map(N=>N.id===E?N.quantity>1?{...N,quantity:N.quantity-1}:null:N).filter(N=>N!==null))};return V.jsxs("div",{className:"min-h-screen bg-gray-100 p-4 pb-32",children:[V.jsx("header",{className:"bg-white p-4 rounded-lg shadow-md text-center",children:V.jsx("h1",{className:"text-xl font-bold",children:"장바구니"})}),V.jsx("div",{className:"mt-4",children:r.length>0?r.map((E,A)=>V.jsxs("div",{className:"bg-white p-4 mb-2 rounded-lg shadow-md flex items-center",children:[V.jsx("img",{src:E.image,alt:E.name,className:"w-16 h-16 rounded-lg mr-4"}),V.jsxs("div",{className:"flex-1",children:[V.jsx("h2",{className:"text-lg font-semibold",children:E.name}),V.jsxs("p",{className:"text-gray-500",children:["₩",(E.price*E.quantity).toLocaleString()]})]}),V.jsxs("div",{className:"flex items-center",children:[V.jsxs("span",{className:"mx-2",children:[E.quantity,"개"]}),V.jsx(bC,{size:"3rem",onClick:()=>v(E.id)})]})]},A)):V.jsx("p",{className:"text-center text-gray-500",children:"장바구니가 비어 있습니다."})}),r.length>0&&V.jsx("button",{className:"w-full bg-green-500 text-white p-4 rounded-lg mt-4 disabled:opacity-50",onClick:g,disabled:p<2e4,children:p<2e4?`최소 주문 금액은 ₩${2e4.toLocaleString()} 이상이어야 합니다.`:"주문하기"}),V.jsx(vo,{activeScreen:"cart",setScreen:e,cartCount:r.reduce((E,A)=>E+A.quantity,0)})]})},UC=({orders:r,setScreen:e})=>{const t=r.reduce((s,o)=>{const u=o.items.reduce((h,p)=>h+p.price*p.quantity,0);return s+u},0);return V.jsxs("div",{className:"min-h-screen bg-gray-100 p-4 pb-32",children:[V.jsx("header",{className:"bg-white p-4 rounded-lg shadow-md text-center",children:V.jsx("h1",{className:"text-xl font-bold",children:"주문 내역"})}),V.jsx("div",{className:"mt-4",children:r.length>0?r.map((s,o)=>{const u=s.items.reduce((h,p)=>h+p.price*p.quantity,0);return V.jsxs("div",{className:"bg-white p-4 mb-2 rounded-lg shadow-md",children:[V.jsxs("h2",{className:"text-lg font-semibold",children:["주문 #",s.id]}),s.items.map((h,p)=>V.jsxs("p",{className:"text-gray-500",children:[h.name," x ",h.quantity," - ₩",(h.price*h.quantity).toLocaleString()]},p)),V.jsxs("p",{className:"mt-2 font-bold",children:["주문 총액: ₩",u.toLocaleString()]})]},o)}):V.jsx("p",{className:"text-center text-gray-500",children:"주문 내역이 없습니다."})}),r.length>0&&V.jsx("button",{onClick:()=>e("payment"),className:"w-full bg-blue-500 text-white p-4 rounded-lg mt-4",children:"결제하기"}),V.jsx("div",{className:"fixed bottom-20 left-0 w-full px-4",children:V.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md text-center",children:[V.jsx("h1",{className:"text-xl font-bold",children:"전체 주문 총액"}),V.jsxs("p",{className:"text-lg font-semibold",children:["₩",t.toLocaleString()]})]})}),V.jsx(vo,{activeScreen:"orders",setScreen:e})]})},FC=({orders:r,setScreen:e,address:t,userId:s})=>{const o=r.reduce((N,z)=>{const G=z.items.reduce((Q,q)=>Q+q.price*q.quantity,0);return N+G},0),u=r.map(N=>({id:N.id,items:N.items.map(({id:z,name:G,category:Q,price:q,quantity:fe})=>({id:z,name:G,category:Q,price:q,quantity:fe}))})),h=async()=>{try{const N=r[0].id;await uv(af(Ga,"orders",N),{orders:u,overallTotal:o,address:t,userId:s,createdAt:dA()}),alert("결제가 완료되었습니다. 주문 내역이 저장되었습니다."),e("paid")}catch(N){console.error("Error saving order: ",N),alert("주문 저장에 실패했습니다.")}},p=async()=>{alert("카카오 간편결제를 선택하셨습니다."),await h()},g=async()=>{alert("토스 간편결제를 선택하셨습니다."),await h()},v=async()=>{alert("카드 결제를 선택하셨습니다."),await h()},E=async()=>{alert("현장 현금 결제를 선택하셨습니다."),await h()},A=async()=>{alert("현장 카드 결제를 선택하셨습니다."),await h()};return V.jsxs("div",{className:"min-h-screen bg-gray-100 p-4 pb-32",children:[V.jsxs("header",{className:"bg-white p-4 rounded-lg shadow-md text-center",children:[V.jsx("h1",{className:"text-xl font-bold",children:"결제 화면"}),t?V.jsxs("p",{className:"text-gray-500 mt-2 font-bold",children:["배달 주소: ",t]}):V.jsx("p",{className:"text-gray-500 mt-2",children:"주소가 설정되지 않았습니다."})]}),V.jsx("div",{className:"mt-4",children:V.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md text-center",children:[V.jsx("h2",{className:"text-lg font-bold",children:"총 결제 금액"}),V.jsxs("p",{className:"text-gray-500",children:["₩",o.toLocaleString()]})]})}),V.jsxs("div",{className:"mt-4",children:[V.jsx("h2",{className:"text-lg font-bold mb-2",children:"결제 방법 선택"}),V.jsxs("div",{className:"flex flex-col space-y-2",children:[V.jsx("button",{className:"w-full bg-yellow-500 text-white p-4 rounded-lg",onClick:p,children:"카카오 간편결제"}),V.jsx("button",{className:"w-full bg-blue-500 text-white p-4 rounded-lg",onClick:g,children:"토스 간편결제"}),V.jsx("button",{className:"w-full bg-green-500 text-white p-4 rounded-lg",onClick:v,children:"카드 결제"}),V.jsxs("div",{className:"flex space-x-2",children:[V.jsx("button",{className:"w-1/2 bg-purple-500 text-white p-4 rounded-lg",onClick:E,children:"현장 현금 결제"}),V.jsx("button",{className:"w-1/2 bg-indigo-500 text-white p-4 rounded-lg",onClick:A,children:"현장 카드 결제"})]})]})]}),V.jsx(vo,{activeScreen:"payment",setScreen:e})]})},jC=({setScreen:r})=>{const[e,t]=Le.useState(""),[s,o]=Le.useState(""),u=h=>{h.preventDefault(),console.log("로그인 시도:",{username:e,password:s}),r("home")};return V.jsx("div",{className:"min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4",children:V.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-md w-full max-w-md",children:[V.jsx("h1",{className:"text-2xl font-bold mb-4 text-center",children:"로그인"}),V.jsxs("form",{onSubmit:u,children:[V.jsxs("div",{className:"mb-4",children:[V.jsx("label",{className:"block text-gray-700 mb-2",children:"아이디"}),V.jsx("input",{type:"text",value:e,onChange:h=>t(h.target.value),placeholder:"아이디 입력",className:"w-full p-2 border border-gray-300 rounded"})]}),V.jsxs("div",{className:"mb-4",children:[V.jsx("label",{className:"block text-gray-700 mb-2",children:"비밀번호"}),V.jsx("input",{type:"password",value:s,onChange:h=>o(h.target.value),placeholder:"비밀번호 입력",className:"w-full p-2 border border-gray-300 rounded"})]}),V.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white py-2 rounded-lg",children:"로그인"})]}),V.jsxs("div",{className:"mt-4 text-center",children:[V.jsx("p",{children:"계정이 없으신가요?"}),V.jsx("button",{className:"mt-2 text-blue-500 underline",onClick:()=>r("signup"),children:"회원가입"})]})]})})},zC=({setScreen:r})=>{const[e,t]=Le.useState(""),[s,o]=Le.useState(""),[u,h]=Le.useState(""),[p,g]=Le.useState(""),[v,E]=Le.useState(""),A=N=>{if(N.preventDefault(),p!==v){alert("비밀번호가 일치하지 않습니다.");return}const z=ja();uR(z,s,p).then(G=>{const Q=G.user;return dR(Q,{displayName:e}).then(()=>cR(Q)).then(()=>uv(af(Ga,"users",Q.uid),{uid:Q.uid,username:e,email:s,phone:u,points:0,createdAt:new Date}))}).then(()=>{alert("회원가입 성공! 인증 이메일을 확인해주세요."),r("login")}).catch(G=>{console.error("회원가입 오류:",G),alert(G.message)})};return V.jsx("div",{className:"min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4",children:V.jsxs("div",{className:"bg-white p-8 rounded-lg shadow-md w-full max-w-md",children:[V.jsx("h1",{className:"text-2xl font-bold mb-4 text-center",children:"회원가입"}),V.jsxs("form",{onSubmit:A,children:[V.jsxs("div",{className:"mb-4",children:[V.jsx("label",{className:"block text-gray-700 mb-2",children:"아이디"}),V.jsx("input",{type:"text",value:e,onChange:N=>t(N.target.value),placeholder:"아이디 입력",className:"w-full p-2 border border-gray-300 rounded"})]}),V.jsxs("div",{className:"mb-4",children:[V.jsx("label",{className:"block text-gray-700 mb-2",children:"이메일"}),V.jsx("input",{type:"email",value:s,onChange:N=>o(N.target.value),placeholder:"이메일 입력",className:"w-full p-2 border border-gray-300 rounded"})]}),V.jsxs("div",{className:"mb-4",children:[V.jsx("label",{className:"block text-gray-700 mb-2",children:"전화번호(배달 시 연락 용도로 사용)"}),V.jsx("input",{type:"tel",value:u,onChange:N=>h(N.target.value),placeholder:"전화번호 입력",className:"w-full p-2 border border-gray-300 rounded"})]}),V.jsxs("div",{className:"mb-4",children:[V.jsx("label",{className:"block text-gray-700 mb-2",children:"비밀번호"}),V.jsx("input",{type:"password",value:p,onChange:N=>g(N.target.value),placeholder:"비밀번호 입력",className:"w-full p-2 border border-gray-300 rounded"})]}),V.jsxs("div",{className:"mb-4",children:[V.jsx("label",{className:"block text-gray-700 mb-2",children:"비밀번호 확인"}),V.jsx("input",{type:"password",value:v,onChange:N=>E(N.target.value),placeholder:"비밀번호 확인 입력",className:"w-full p-2 border border-gray-300 rounded"})]}),V.jsx("button",{type:"submit",className:"w-full bg-green-500 text-white py-2 rounded-lg",children:"회원가입"})]}),V.jsxs("div",{className:"mt-4 text-center",children:[V.jsx("p",{children:"이미 계정이 있으신가요?"}),V.jsx("button",{className:"mt-2 text-blue-500 underline",onClick:()=>r("login"),children:"로그인"})]})]})})},BC=({setScreen:r})=>{const[e,t]=Le.useState(null),[s,o]=Le.useState(!0),h=ja().currentUser;return Le.useEffect(()=>{if(h){const p=af(Ga,"users",h.uid);cA(p).then(g=>{g.exists()?t(g.data()):console.log("사용자 데이터가 없습니다.")}).catch(g=>{console.error("사용자 정보를 불러오는 중 오류:",g)}).finally(()=>{o(!1)})}else o(!1)},[h]),V.jsxs("div",{className:"min-h-screen bg-gray-100 p-4",children:[V.jsx("header",{className:"bg-white p-4 rounded-lg shadow-md flex justify-between items-center text-center",children:V.jsx("h1",{className:"text-xl font-bold",children:"내 정보"})}),V.jsx("div",{className:"mt-4 bg-white p-4 rounded-lg shadow-md",children:s?V.jsx("p",{children:"내 정보를 불러오는 중..."}):e?V.jsxs("div",{className:"space-y-2",children:[V.jsxs("p",{children:[V.jsx("strong",{children:"이름:"})," ",e.username]}),V.jsxs("p",{children:[V.jsx("strong",{children:"이메일:"})," ",e.email]}),V.jsxs("p",{children:[V.jsx("strong",{children:"전화번호:"})," ",e.phoneNumber]}),V.jsxs("p",{children:[V.jsx("strong",{children:"포인트:"})," ",e.points]})]}):V.jsx("p",{children:"사용자 정보가 존재하지 않습니다."})}),V.jsx(vo,{activeScreen:"myinfo",setScreen:r})]})},$C=({setScreen:r,userId:e})=>{if(!e)return V.jsxs("div",{className:"min-h-screen bg-gray-100 flex flex-col justify-center items-center",children:[V.jsx("p",{className:"text-xl mb-4",children:"주문 내역을 확인하려면 로그인이 필요합니다."}),V.jsx("button",{onClick:()=>r("login"),className:"bg-blue-500 text-white p-4 rounded-lg",children:"로그인 하러 가기"})]});const[t,s]=Le.useState([]),[o,u]=Le.useState(!0);return Le.useEffect(()=>{const h=J_(Ga,"orders"),p=iA(h,sA("userId","==",e)),g=cv(p,v=>{const E=[];v.forEach(A=>{E.push({id:A.id,...A.data()})}),s(E),u(!1)},v=>{console.error("결제 완료 주문 내역을 불러오는 중 에러 발생: ",v),u(!1)});return()=>g()},[e]),o?V.jsx("div",{className:"p-4",children:"Loading..."}):V.jsxs("div",{className:"min-h-screen bg-gray-100 p-4 pb-32",children:[V.jsx("header",{className:"bg-white p-4 rounded-lg shadow-md text-center",children:V.jsx("h1",{className:"text-xl font-bold",children:"결제 완료 주문 내역"})}),V.jsx("div",{className:"mt-4",children:t.length>0?t.map(h=>{var g;const p=h.createdAt?h.createdAt.toDate().toLocaleString():"";return V.jsxs("div",{className:"bg-white p-4 mb-2 rounded-lg shadow-md",children:[V.jsxs("h2",{className:"text-lg font-semibold",children:["주문 ID: ",h.id]}),V.jsxs("p",{className:"text-gray-500",children:["총 결제 금액: ₩",(g=h.overallTotal)==null?void 0:g.toLocaleString()]}),h.address&&V.jsxs("p",{className:"text-gray-500",children:["배송 주소: ",h.address]}),p&&V.jsxs("p",{className:"text-gray-500",children:["결제일: ",p]})]},h.id)}):V.jsxs("p",{className:"text-center text-gray-500",children:["결제된 주문 내역이 없습니다. ",e]})}),V.jsx(vo,{activeScreen:"paid",setScreen:r})]})},qC=()=>{const[r,e]=Le.useState("home"),[t,s]=Le.useState([]),[o,u]=Le.useState([]),[h,p]=Le.useState(""),[g,v]=Le.useState(null);return Le.useEffect(()=>{const E=ja(),A=Uv(E,N=>{N?v(N.uid):iR(E).then(z=>{v(z.user.uid)}).catch(z=>{console.error("익명 로그인 에러:",z)})});return()=>A()},[]),g?V.jsxs(V.Fragment,{children:[r==="home"&&V.jsx(CC,{setScreen:e,cart:t,setCart:s,address:h,setAddress:p}),r==="cart"&&V.jsx(MC,{cart:t,setScreen:e,setOrders:u,setCart:s,address:h}),r==="orders"&&V.jsx(UC,{orders:o,setScreen:e}),r==="payment"&&V.jsx(FC,{orders:o,address:h,setScreen:e,userId:g}),r==="login"&&V.jsx(jC,{setScreen:e}),r==="signup"&&V.jsx(zC,{setScreen:e}),r==="myinfo"&&V.jsx(BC,{setScreen:e}),r==="paid"&&V.jsx($C,{userId:g,setScreen:e})]}):V.jsx("div",{className:"min-h-screen flex justify-center items-center",children:"Loading..."})};uE.createRoot(document.getElementById("root")).render(V.jsx(Le.StrictMode,{children:V.jsx(qC,{})}));
