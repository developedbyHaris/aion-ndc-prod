(this["webpackJsonpaion-ndc-batam"]=this["webpackJsonpaion-ndc-batam"]||[]).push([[16,26],{505:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},537:function(e,t,n){"use strict";var a=n(18),o=n(44),r=n(2),s=n.n(r),i=n(9),c=n.n(i),l=n(154),u=n.n(l),d=n(81),f=c.a.oneOfType([c.a.number,c.a.string]),p={tag:d.q,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},m={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,n=e.cssModule,r=e.noGutters,i=e.tag,c=e.form,l=e.widths,f=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];l.forEach((function(t,n){var a=e[t];if(delete f[t],a){var o=!n;p.push(o?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var m=Object(d.m)(u()(t,r?"no-gutters":null,c?"form-row":"row",p),n);return s.a.createElement(i,Object(a.a)({},f,{className:m}))};g.propTypes=p,g.defaultProps=m,t.a=g},538:function(e,t,n){"use strict";var a=n(18),o=n(44),r=n(2),s=n.n(r),i=n(9),c=n.n(i),l=n(154),u=n.n(l),d=n(81),f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),m={tag:d.q,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},y=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},h=function(e){var t=e.className,n=e.cssModule,r=e.widths,i=e.tag,c=Object(o.a)(e,["className","cssModule","widths","tag"]),l=[];r.forEach((function(t,a){var o=e[t];if(delete c[t],o||""===o){var r=!a;if(Object(d.k)(o)){var s,i=r?"-":"-"+t+"-",f=y(r,t,o.size);l.push(Object(d.m)(u()(((s={})[f]=o.size||""===o.size,s["order"+i+o.order]=o.order||0===o.order,s["offset"+i+o.offset]=o.offset||0===o.offset,s)),n))}else{var p=y(r,t,o);l.push(p)}}})),l.length||l.push("col");var f=Object(d.m)(u()(t,l),n);return s.a.createElement(i,Object(a.a)({},c,{className:f}))};h.propTypes=m,h.defaultProps=g,t.a=h},552:function(e,t,n){"use strict";var a=n(18),o=n(44),r=n(2),s=n.n(r),i=n(9),c=n.n(i),l=n(154),u=n.n(l),d=n(81),f={tag:d.q,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,n=e.cssModule,r=e.tag,i=Object(o.a)(e,["className","cssModule","tag"]),c=Object(d.m)(u()(t,"card-footer"),n);return s.a.createElement(r,Object(a.a)({},i,{className:c}))};p.propTypes=f,p.defaultProps={tag:"div"},t.a=p},565:function(e,t,n){"use strict";var a=n(505);t.__esModule=!0,t.getScrollbarWidth=s,t.setScrollbarWidth=i,t.isBodyOverflowing=c,t.getOriginalBodyPadding=function(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)},t.conditionallyUpdateScrollbar=function(){var e=s(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;c()&&i(n+e)},t.setGlobalCssModule=function(e){o=e},t.mapToCssModules=function(e,t){void 0===e&&(e="");void 0===t&&(t=o);return t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e},t.omit=function(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n},t.pick=function(e,t){var n,a=Array.isArray(t)?t:[t],o=a.length,r={};for(;o>0;)n=a[o-=1],r[n]=e[n];return r},t.warnOnce=u,t.deprecated=function(e,t){return function(n,a,o){null!==n[a]&&"undefined"!==typeof n[a]&&u('"'+a+'" property of "'+o+'" has been deprecated.\n'+t);for(var r=arguments.length,s=new Array(r>3?r-3:0),i=3;i<r;i++)s[i-3]=arguments[i];return e.apply(void 0,[n,a,o].concat(s))}},t.DOMElement=f,t.isReactRefObj=y,t.toNumber=function(e){var t=typeof e;if("number"===t)return e;if("symbol"===t||"object"===t&&"[object Symbol]"===h(e))return NaN;if(b(e)){var n="function"===typeof e.valueOf?e.valueOf():e;e=b(n)?""+n:n}if("string"!==t)return 0===e?e:+e;e=e.replace(/^\s+|\s+$/g,"");var a=/^0b[01]+$/i.test(e);return a||/^0o[0-7]+$/i.test(e)?parseInt(e.slice(2),a?2:8):/^[-+]0x[0-9a-f]+$/i.test(e)?NaN:+e},t.isObject=b,t.isFunction=v,t.findDOMElements=E,t.isArrayOrNodeList=O,t.getTarget=function(e,t){var n=E(e);return t?O(n)?n:null===n?[]:[n]:O(n)?n[0]:n},t.addMultipleEventListeners=function(e,t,n,a){var o=e;O(o)||(o=[o]);var r=n;"string"===typeof r&&(r=r.split(/\s+/));if(!O(o)||"function"!==typeof t||!Array.isArray(r))throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");return Array.prototype.forEach.call(r,(function(e){Array.prototype.forEach.call(o,(function(n){n.addEventListener(e,t,a)}))})),function(){Array.prototype.forEach.call(r,(function(e){Array.prototype.forEach.call(o,(function(n){n.removeEventListener(e,t,a)}))}))}},t.focusableElements=t.defaultToggleEvents=t.canUseDOM=t.PopperPlacements=t.keyCodes=t.TransitionStatuses=t.TransitionPropTypeKeys=t.TransitionTimeouts=t.tagPropType=t.targetPropType=void 0;var o,r=a(n(9));function s(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function i(e){document.body.style.paddingRight=e>0?e+"px":null}function c(){return document.body.clientWidth<window.innerWidth}var l={};function u(e){l[e]||("undefined"!==typeof console&&console.error(e),l[e]=!0)}var d="object"===typeof window&&window.Element||function(){};function f(e,t,n){if(!(e[t]instanceof d))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var p=r.default.oneOfType([r.default.string,r.default.func,f,r.default.shape({current:r.default.any})]);t.targetPropType=p;var m=r.default.oneOfType([r.default.func,r.default.string,r.default.shape({$$typeof:r.default.symbol,render:r.default.func}),r.default.arrayOf(r.default.oneOfType([r.default.func,r.default.string,r.default.shape({$$typeof:r.default.symbol,render:r.default.func})]))]);t.tagPropType=m;t.TransitionTimeouts={Fade:150,Collapse:350,Modal:300,Carousel:600};t.TransitionPropTypeKeys=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"];t.TransitionStatuses={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};t.keyCodes={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80};t.PopperPlacements=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];var g=!("undefined"===typeof window||!window.document||!window.document.createElement);function y(e){return!(!e||"object"!==typeof e)&&"current"in e}function h(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function b(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function v(e){if(!b(e))return!1;var t=h(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}function E(e){if(y(e))return e.current;if(v(e))return e();if("string"===typeof e&&g){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function O(e){return null!==e&&(Array.isArray(e)||g&&"number"===typeof e.length)}t.canUseDOM=g;t.defaultToggleEvents=["touchstart","click"];t.focusableElements=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},606:function(e,t,n){"use strict";n.r(t);var a=n(105),o=n(156),r=n(157),s=n(159),i=n(158),c=n(2),l=n.n(c),u=n(552),d=n(526),f=n(528),p=n(154),m=n.n(p),g=n(565),y=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.cssModule,o=e.header,r=e.mainText,s=e.icon,i=e.color,c=e.footer,p=e.link,y=(e.children,e.variant),h=Object(a.a)(e,["className","cssModule","header","mainText","icon","color","footer","link","children","variant"]),b="0"===y?{card:"p-3",icon:"p-3",lead:"mt-2"}:"1"===y?{card:"p-0",icon:"p-4",lead:"pt-2"}:{card:"p-0",icon:"p-4 px-5",lead:"pt-3"},v={style:"clearfix",color:i,icon:s,classes:""};v.classes=Object(g.mapToCssModules)(m()(t,v.style,b.card),n);var E={style:"h5 mb-0",color:i,classes:""};E.classes=m()(E.style,"text-"+v.color,b.lead);return l.a.createElement(d.a,null,l.a.createElement(f.a,Object.assign({className:v.classes},h),function(e){var t=m()(e,"bg-"+v.color,b.icon,"font-2xl mr-3 float-left");return l.a.createElement("i",{className:t})}(v.icon),l.a.createElement("div",{className:E.classes},o),l.a.createElement("div",{className:"text-muted text-uppercase font-weight-bold font-xs"},r)),function(){if(c)return l.a.createElement(u.a,{className:"px-3 py-2"},l.a.createElement("a",{className:"font-weight-bold font-xs btn-block text-muted",href:p},"View More",l.a.createElement("i",{className:"fa fa-angle-right float-right font-lg"})))}())}}]),n}(c.Component);y.defaultProps={header:"$1,999.50",mainText:"Income",icon:"fa fa-cogs",color:"primary",variant:"0",link:"#"},t.default=y},694:function(e,t,n){"use strict";n.r(t);var a=n(156),o=n(157),r=n(159),s=n(158),i=n(2),c=n.n(i),l=n(537),u=n(538),d=n(509),f=n.n(d),p=n(606),m=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(a.a)(this,n),(o=t.call(this,e)).state={dOpen:"0",dClose:"0",dImportant:"0",dUrgent:"0"},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.sOpen(),this.sClose(),this.sUrgent(),this.sImportant()}},{key:"sImportant",value:function(){var e=this,t=JSON.stringify({status:"IMPORTANT"});f.a.post("log/count/by/status",t).then((function(e){return e.json()})).then((function(t){e.setState({dImportant:t.data})}))}},{key:"sUrgent",value:function(){var e=this,t=JSON.stringify({status:"URGENT"});f.a.post("log/count/by/status",t).then((function(e){return e.json()})).then((function(t){e.setState({dUrgent:t.data})}))}},{key:"sClose",value:function(){var e=this,t=JSON.stringify({status:"CLOSE"});f.a.post("log/count/by/status",t).then((function(e){return e.json()})).then((function(t){e.setState({dClose:t.data})}))}},{key:"sOpen",value:function(){var e=this,t=JSON.stringify({status:"OPEN"});f.a.post("log/count/by/status",t).then((function(e){return e.json()})).then((function(t){e.setState({dOpen:t.data})})).catch((function(e){f.a.notifMessage("Anda sedang offline","danger"),console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(l.a,null,c.a.createElement(u.a,{xs:"12",sm:"6",md:"6",lg:"3"},c.a.createElement(p.default,{header:this.state.dImportant.toString(),mainText:"Important",icon:"fa fa-star",color:"primary",variant:"1"})),c.a.createElement(u.a,{xs:"12",sm:"6",md:"6",lg:"3"},c.a.createElement(p.default,{header:this.state.dClose.toString(),mainText:"Complete",icon:"fa fa-coffee",color:"success",variant:"1"})),c.a.createElement(u.a,{xs:"12",sm:"6",md:"6",lg:"3"},c.a.createElement(p.default,{header:this.state.dOpen.toString(),mainText:"Open",icon:"fa fa-cogs",color:"warning",variant:"1"})),c.a.createElement(u.a,{xs:"12",sm:"6",md:"6",lg:"3"},c.a.createElement(p.default,{header:this.state.dUrgent.toString(),mainText:"Urgent",icon:"fa fa-heartbeat",color:"danger",variant:"1"}))))}}]),n}(i.Component);t.default=m}}]);