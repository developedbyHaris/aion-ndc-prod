(this["webpackJsonpaion-ndc-batam"]=this["webpackJsonpaion-ndc-batam"]||[]).push([[25],{567:function(e,t,n){"use strict";var o=n(18),r=n(44),a=n(2),i=n.n(a),c=n(9),l=n.n(c),s=n(154),u=n.n(s),d=n(81),f={tag:d.q,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,n=e.cssModule,a=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),l=Object(d.m)(u()(t,"card-footer"),n);return i.a.createElement(a,Object(o.a)({},c,{className:l}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},588:function(e,t,n){"use strict";var o=n(505);t.__esModule=!0,t.getScrollbarWidth=i,t.setScrollbarWidth=c,t.isBodyOverflowing=l,t.getOriginalBodyPadding=function(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)},t.conditionallyUpdateScrollbar=function(){var e=i(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;l()&&c(n+e)},t.setGlobalCssModule=function(e){r=e},t.mapToCssModules=function(e,t){void 0===e&&(e="");void 0===t&&(t=r);return t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e},t.omit=function(e,t){var n={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(n[o]=e[o])})),n},t.pick=function(e,t){var n,o=Array.isArray(t)?t:[t],r=o.length,a={};for(;r>0;)n=o[r-=1],a[n]=e[n];return a},t.warnOnce=u,t.deprecated=function(e,t){return function(n,o,r){null!==n[o]&&"undefined"!==typeof n[o]&&u('"'+o+'" property of "'+r+'" has been deprecated.\n'+t);for(var a=arguments.length,i=new Array(a>3?a-3:0),c=3;c<a;c++)i[c-3]=arguments[c];return e.apply(void 0,[n,o,r].concat(i))}},t.DOMElement=f,t.isReactRefObj=b,t.toNumber=function(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===h(e))return NaN;if(g(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=g(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var o=/^0b[01]+$/i.test(e);return o||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),o?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e},t.isObject=g,t.isFunction=v,t.findDOMElements=E,t.isArrayOrNodeList=O,t.getTarget=function(e,t){var n=E(e);return t?O(n)?n:null===n?[]:[n]:O(n)?n[0]:n},t.addMultipleEventListeners=function(e,t,n,o){var r=e;O(r)||(r=[r]);var a=n;"string"===typeof a&&(a=a.split(/\s+/));if(!O(r)||"function"!==typeof t||!Array.isArray(a))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(a,(function(e){Array.prototype.forEach.call(r,(function(n){n.addEventListener(e,t,o)}))})),function(){Array.prototype.forEach.call(a,(function(e){Array.prototype.forEach.call(r,(function(n){n.removeEventListener(e,t,o)}))}))}},t.focusableElements=t.defaultToggleEvents=t.canUseDOM=t.PopperPlacements=t.keyCodes=t.TransitionStatuses=t.TransitionPropTypeKeys=t.TransitionTimeouts=t.tagPropType=t.targetPropType=void 0;var r,a=o(n(9));function i(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function c(e){document.body.style.paddingRight=e>0?e+"px":null}function l(){return document.body.clientWidth<window.innerWidth}var s={};function u(e){s[e]||("undefined"!==typeof console&&console.error(e),s[e]=!0)}var d="object"===typeof window&&window.Element||function(){};function f(e,t,n){if(!(e[t]instanceof d))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var p=a.default.oneOfType([a.default.string,a.default.func,f,a.default.shape({current:a.default.any})]);t.targetPropType=p;var y=a.default.oneOfType([a.default.func,a.default.string,a.default.shape({$$typeof:a.default.symbol,render:a.default.func}),a.default.arrayOf(a.default.oneOfType([a.default.func,a.default.string,a.default.shape({$$typeof:a.default.symbol,render:a.default.func})]))]);t.tagPropType=y;t.TransitionTimeouts={Fade:150,Collapse:350,Modal:300,Carousel:600};t.TransitionPropTypeKeys=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"];t.TransitionStatuses={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};t.keyCodes={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80};t.PopperPlacements=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];var m=!("undefined"===typeof window||!window.document||!window.document.createElement);function b(e){return!(!e||"object"!==typeof e)&&"current"in e}function h(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function g(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function v(e){if(!g(e))return!1;var t=h(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function E(e){if(b(e))return e.current;if(v(e))return e();if("string"===typeof e&&m){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function O(e){return null!==e&&(Array.isArray(e)||m&&"number"===typeof e.length)}t.canUseDOM=m;t.defaultToggleEvents=["touchstart","click"];t.focusableElements=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},651:function(e,t,n){"use strict";n.r(t);var o=n(105),r=n(156),a=n(157),i=n(159),c=n(158),l=n(2),s=n.n(l),u=n(567),d=n(531),f=n(533),p=n(154),y=n.n(p),m=n(588),b=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.cssModule,r=e.header,a=e.mainText,i=e.icon,c=e.color,l=e.footer,p=e.link,b=(e.children,e.variant),h=Object(o.a)(e,["className","cssModule","header","mainText","icon","color","footer","link","children","variant"]),g="0"===b?{card:"p-3",icon:"p-3",lead:"mt-2"}:"1"===b?{card:"p-0",icon:"p-4",lead:"pt-2"}:{card:"p-0",icon:"p-4 px-5",lead:"pt-3"},v={style:"clearfix",color:c,icon:i,classes:""};v.classes=Object(m.mapToCssModules)(y()(t,v.style,g.card),n);var E={style:"h5 mb-0",color:c,classes:""};E.classes=y()(E.style,"text-"+v.color,g.lead);return s.a.createElement(d.a,null,s.a.createElement(f.a,Object.assign({className:v.classes},h),function(e){var t=y()(e,"bg-"+v.color,g.icon,"font-2xl mr-3 float-left");return s.a.createElement("i",{className:t})}(v.icon),s.a.createElement("div",{className:E.classes},r),s.a.createElement("div",{className:"text-muted text-uppercase font-weight-bold font-xs"},a)),function(){if(l)return s.a.createElement(u.a,{className:"px-3 py-2"},s.a.createElement("a",{className:"font-weight-bold font-xs btn-block text-muted",href:p},"View More",s.a.createElement("i",{className:"fa fa-angle-right float-right font-lg"})))}())}}]),n}(l.Component);b.defaultProps={header:"$1,999.50",mainText:"Income",icon:"fa fa-cogs",color:"primary",variant:"0",link:"#"},t.default=b}}]);