(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[151],{94184:function(e,t){var o;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var l=typeof o;if("string"===l||"number"===l)e.push(o);else if(Array.isArray(o)){if(o.length){var u=r.apply(null,o);u&&e.push(u)}}else if("object"===l){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var a in o)n.call(o,a)&&o[a]&&e.push(a)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0!==(o=(function(){return r}).apply(t,[]))&&(e.exports=o)}()},10227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,o,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},31551:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(92648).Z,r=o(17273).Z,l=n(o(67294)),u=o(41003),a=o(67795),f=o(54465),i=o(72692),c=o(48245),s=o(69246),p=o(10227),d=o(33468);let v=new Set;function h(e,t,o,n){if(u.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let r=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+o+"%"+r;if(v.has(l))return;v.add(l)}Promise.resolve(e.prefetch(t,o,n)).catch(e=>{})}}function y(e){return"string"==typeof e?e:a.formatUrl(e)}let b=l.default.forwardRef(function(e,t){let o,n;let{href:a,as:v,children:b,prefetch:g,passHref:_,replace:m,shallow:C,scroll:M,locale:j,onClick:k,onMouseEnter:x,onTouchStart:E,legacyBehavior:O=!1}=e,P=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=b,O&&("string"==typeof o||"number"==typeof o)&&(o=l.default.createElement("a",null,o));let S=!1!==g,w=l.default.useContext(i.RouterContext),L=l.default.useContext(c.AppRouterContext),R=null!=w?w:L,I=!w,{href:T,as:A}=l.default.useMemo(()=>{if(!w){let e=y(a);return{href:e,as:v?y(v):e}}let[e,t]=u.resolveHref(w,a,!0);return{href:e,as:v?u.resolveHref(w,v):t||e}},[w,a,v]),D=l.default.useRef(T),K=l.default.useRef(A);O&&(n=l.default.Children.only(o));let N=O?n&&"object"==typeof n&&n.ref:t,[U,H,B]=s.useIntersection({rootMargin:"200px"}),Z=l.default.useCallback(e=>{(K.current!==A||D.current!==T)&&(B(),K.current=A,D.current=T),U(e),N&&("function"==typeof N?N(e):"object"==typeof N&&(N.current=e))},[A,N,T,B,U]);l.default.useEffect(()=>{R&&H&&S&&h(R,T,A,{locale:j})},[A,T,H,j,S,null==w?void 0:w.locale,R]);let q={ref:Z,onClick(e){O||"function"!=typeof k||k(e),O&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,o,n,r,a,f,i,c,s){let{nodeName:p}=e.currentTarget,d="A"===p.toUpperCase();if(d&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u.isLocalURL(o)))return;e.preventDefault();let v=()=>{"beforePopState"in t?t[r?"replace":"push"](o,n,{shallow:a,locale:i,scroll:f}):t[r?"replace":"push"](n||o,{forceOptimisticNavigation:!s})};c?l.default.startTransition(v):v()}(e,R,T,A,m,C,M,j,I,S)},onMouseEnter(e){O||"function"!=typeof x||x(e),O&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),R&&(S||!I)&&h(R,T,A,{locale:j,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){O||"function"!=typeof E||E(e),O&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),R&&(S||!I)&&h(R,T,A,{locale:j,priority:!0,bypassPrefetchedCheck:!0})}};if(!O||_||"a"===n.type&&!("href"in n.props)){let e=void 0!==j?j:null==w?void 0:w.locale,t=(null==w?void 0:w.isLocaleDomain)&&p.getDomainLocale(A,e,null==w?void 0:w.locales,null==w?void 0:w.domainLocales);q.href=t||d.addBasePath(f.addLocale(A,e,null==w?void 0:w.defaultLocale))}return O?l.default.cloneElement(n,q):l.default.createElement("a",Object.assign({},P,q),o)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},69246:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:o,disabled:f}=e,i=f||!l,[c,s]=n.useState(!1),p=n.useRef(null),d=n.useCallback(e=>{p.current=e},[]);n.useEffect(()=>{if(l){if(i||c)return;let e=p.current;if(e&&e.tagName){let n=function(e,t,o){let{id:n,observer:r,elements:l}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===o.root&&e.margin===o.margin);if(n&&(t=u.get(n)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:l,elements:r},a.push(o),u.set(o,t),t}(o);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),u.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:o});return n}}else if(!c){let e=r.requestIdleCallback(()=>s(!0));return()=>r.cancelIdleCallback(e)}},[i,o,t,c,p.current]);let v=n.useCallback(()=>{s(!1)},[]);return[d,c,v]};var n=o(67294),r=o(44686);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,o){e.exports=o(83121)},41664:function(e,t,o){e.exports=o(31551)},4298:function(e,t,o){e.exports=o(63573)}}]);