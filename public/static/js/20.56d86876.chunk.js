(this["webpackJsonpaion-ndc-batam"]=this["webpackJsonpaion-ndc-batam"]||[]).push([[20],{562:function(e,t,a){"use strict";var n=a(18),o=a(44),s=a(2),i=a.n(s),l=a(9),r=a.n(l),c=a(154),d=a.n(c),m=a(81),p={tag:m.q,wrapTag:m.q,toggle:r.a.func,className:r.a.string,cssModule:r.a.object,children:r.a.node,closeAriaLabel:r.a.string,charCode:r.a.oneOfType([r.a.string,r.a.number]),close:r.a.object},u=function(e){var t,a=e.className,s=e.cssModule,l=e.children,r=e.toggle,c=e.tag,p=e.wrapTag,u=e.closeAriaLabel,h=e.charCode,b=e.close,g=Object(o.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),f=Object(m.m)(d()(a,"modal-header"),s);if(!b&&r){var E="number"===typeof h?String.fromCharCode(h):h;t=i.a.createElement("button",{type:"button",onClick:r,className:Object(m.m)("close",s),"aria-label":u},i.a.createElement("span",{"aria-hidden":"true"},E))}return i.a.createElement(p,Object(n.a)({},g,{className:f}),i.a.createElement(c,{className:Object(m.m)("modal-title",s)},l),b||t)};u.propTypes=p,u.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=u},563:function(e,t,a){"use strict";var n=a(18),o=a(44),s=a(2),i=a.n(s),l=a(9),r=a.n(l),c=a(154),d=a.n(c),m=a(81),p={tag:m.q,className:r.a.string,cssModule:r.a.object},u=function(e){var t=e.className,a=e.cssModule,s=e.tag,l=Object(o.a)(e,["className","cssModule","tag"]),r=Object(m.m)(d()(t,"modal-body"),a);return i.a.createElement(s,Object(n.a)({},l,{className:r}))};u.propTypes=p,u.defaultProps={tag:"div"},t.a=u},564:function(e,t,a){"use strict";var n=a(18),o=a(44),s=a(2),i=a.n(s),l=a(9),r=a.n(l),c=a(154),d=a.n(c),m=a(81),p={tag:m.q,className:r.a.string,cssModule:r.a.object},u=function(e){var t=e.className,a=e.cssModule,s=e.tag,l=Object(o.a)(e,["className","cssModule","tag"]),r=Object(m.m)(d()(t,"modal-footer"),a);return i.a.createElement(s,Object(n.a)({},l,{className:r}))};u.propTypes=p,u.defaultProps={tag:"div"},t.a=u},566:function(e,t,a){"use strict";var n=a(517),o=a(18),s=a(504),i=a(31),l=a(2),r=a.n(l),c=a(9),d=a.n(c),m=a(154),p=a.n(m),u=a(155),h=a.n(u),b=a(81),g={children:d.a.node.isRequired,node:d.a.any},f=function(e){function t(){return e.apply(this,arguments)||this}Object(i.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return b.f?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(r.a.Component);f.propTypes=g;var E=f,O=a(535);function k(){}var y=d.a.shape(O.a.propTypes),N={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,scrollable:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:y,modalTransition:y,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func]),unmountOnClose:d.a.bool,returnFocusAfterClose:d.a.bool},v=Object.keys(N),C={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:k,onClosed:k,modalTransition:{timeout:b.e.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.e.Fade},unmountOnClose:!0,returnFocusAfterClose:!0},j=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(s.a)(a)),a.handleBackdropClick=a.handleBackdropClick.bind(Object(s.a)(a)),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(s.a)(a)),a.handleEscape=a.handleEscape.bind(Object(s.a)(a)),a.handleStaticBackdropAnimation=a.handleStaticBackdropAnimation.bind(Object(s.a)(a)),a.handleTab=a.handleTab.bind(Object(s.a)(a)),a.onOpened=a.onOpened.bind(Object(s.a)(a)),a.onClosed=a.onClosed.bind(Object(s.a)(a)),a.manageFocusAfterClose=a.manageFocusAfterClose.bind(Object(s.a)(a)),a.clearBackdropAnimationTimeout=a.clearBackdropAnimationTimeout.bind(Object(s.a)(a)),a.state={isOpen:!1,showStaticBackdropAnimation:!1},a}Object(i.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props,t=e.isOpen,a=e.autoFocus,n=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),a&&this.setFocus()),n&&n(),this._isMounted=!0},a.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),this.props.isOpen&&this.close()),this._isMounted=!1},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||k)(e,t)},a.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||k)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(b.h.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which){var t=this.getFocusableChildren(),a=t.length;if(0!==a){for(var n=this.getFocusedChild(),o=0,s=0;s<a;s+=1)if(t[s]===n){o=s;break}e.shiftKey&&0===o?(e.preventDefault(),t[a-1].focus()):e.shiftKey||o!==a-1||(e.preventDefault(),t[0].focus())}}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&e.keyCode===b.l.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},a.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,document.body.appendChild(this._element)),this._originalBodyPadding=Object(b.i)(),Object(b.g)(),0===t.openCount&&(document.body.className=p()(document.body.className,Object(b.m)("modal-open",this.props.cssModule))),t.openCount+=1},a.destroy=function(){this._element&&(document.body.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},a.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},a.close=function(){if(t.openCount<=1){var e=Object(b.m)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(b.p)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(b.n)(this.props,v);return r.a.createElement("div",Object(o.a)({},a,{className:Object(b.m)(p()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),r.a.createElement("div",{className:Object(b.m)(p()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var a=this.props,s=a.wrapClassName,i=a.modalClassName,l=a.backdropClassName,c=a.cssModule,d=a.isOpen,m=a.backdrop,u=a.role,h=a.labelledBy,g=a.external,f=a.innerRef,k={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":h,role:u,tabIndex:"-1"},y=this.props.fade,N=Object(n.a)({},O.a.defaultProps,{},this.props.modalTransition,{baseClass:y?this.props.modalTransition.baseClass:"",timeout:y?this.props.modalTransition.timeout:0}),v=Object(n.a)({},O.a.defaultProps,{},this.props.backdropTransition,{baseClass:y?this.props.backdropTransition.baseClass:"",timeout:y?this.props.backdropTransition.timeout:0}),C=m&&(y?r.a.createElement(O.a,Object(o.a)({},v,{in:d&&!!m,cssModule:c,className:Object(b.m)(p()("modal-backdrop",l),c)})):r.a.createElement("div",{className:Object(b.m)(p()("modal-backdrop","show",l),c)}));return r.a.createElement(E,{node:this._element},r.a.createElement("div",{className:Object(b.m)(s)},r.a.createElement(O.a,Object(o.a)({},k,N,{in:d,onEntered:this.onOpened,onExited:this.onClosed,cssModule:c,className:Object(b.m)(p()("modal",i,this.state.showStaticBackdropAnimation&&"modal-static"),c),innerRef:f}),g,this.renderModalDialog()),C))}return null},a.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(r.a.Component);j.propTypes=N,j.defaultProps=C,j.openCount=0;t.a=j},717:function(e,t,a){"use strict";a.r(t);var n=a(156),o=a(157),s=a(160),i=a(159),l=a(158),r=a(2),c=a.n(r),d=a(537),m=a(538),p=a(526),u=a(527),h=a(528),b=a(561),g=a(605),f=a(521),E=a(719),O=a(575),k=a(712),y=a(539),N=a(540),v=a(510),C=a(541),j=a(566),w=a(562),_=a(563),T=a(564),A=a(509),M=a.n(A),S=a(513),B=a.n(S),x=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).state={roleData:[],modal:!1,uuidRem:""},o.addlist=o.addlist.bind(Object(s.a)(o)),o.rolerDelete=o.rolerDelete.bind(Object(s.a)(o)),o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.addlist()}},{key:"addlist",value:function(){var e=this;M.a.get("role/list").then((function(e){return e.json()})).then((function(t){e.setState({roleData:t.data})})).catch((function(e){M.a.notifMessage("Anda sedang offline","danger"),B()(".page-loader-wrapper").hide(),console.log("Something Catch error went wrong")}))}},{key:"addRole",value:function(e){var t=this;B()(".page-loader-wrapper").show(),e.preventDefault();var a={name:B()("#rolename").val()},n=document.getElementsByName("formRole")[0],o=JSON.stringify(a);M.a.postNoAuth("role/store",o).then((function(e){return e.json()})).then((function(e){!0===e.success?(M.a.notifMessage("Role "+e.data.name+" berhasil ditambahkan"),t.addlist(),n.reset()):(M.a.notifMessage("Anda Salah","danger"),B()(".page-loader-wrapper").hide(),console.log("Something Else went wrong"))})).catch((function(e){M.a.notifMessage("Koneksi Anda Salah","danger"),B()(".page-loader-wrapper").hide(),console.log("Something Catch error went wrong",e)}))}},{key:"rolerDelete",value:function(e){B()(".page-loader-wrapper").show();var t={uuid:this.state.uuidRem},a=JSON.stringify(t);M.a.remove("role/remove",a).then((function(e){return e.json()})).then((function(e){!0===e.success?B()(".page-loader-wrapper").hide():(M.a.notifMessage("Anda Selalu Salah","danger"),B()(".page-loader-wrapper").hide(),console.log("Something Else went wrong"))})).catch((function(e){M.a.notifMessage("Koneksi Anda bermasalah","danger"),B()(".page-loader-wrapper").hide(),console.log("Something Catch error went wrong",e)}))}},{key:"validModal",value:function(e){this.setState({uuidRem:e}),M.a.swalNotif(this.rolerDelete,this.addlist)}},{key:"render",value:function(){var e=this,t=this.state.roleData;return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(d.a,{className:"flex-row"},c.a.createElement(m.a,{xl:"6"},c.a.createElement(p.a,null,c.a.createElement(u.a,{className:"bg-gray-900 text-light"},c.a.createElement("i",{className:"fa fa-align-justify"})," Role List"),c.a.createElement(h.a,null,c.a.createElement(b.a,{responsive:!0,hover:!0,size:"sm",className:"tutop"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"#"),c.a.createElement("th",{scope:"col"},"Role Name"),c.a.createElement("th",{scope:"col"},"Action"))),c.a.createElement("tbody",null,t.map((function(t,a){return c.a.createElement("tr",{key:t.uuid},c.a.createElement("td",{className:"text-dark"},a+1),c.a.createElement("td",null,t.name),c.a.createElement("td",null,c.a.createElement(g.a,{size:"sm"},c.a.createElement(f.a,{id:"Edit",className:"text-light bg-primary"},c.a.createElement("i",{className:"fa fa-pencil"})),c.a.createElement(E.a,{placement:"bottom",target:"Edit"},"Edit Role"),c.a.createElement(f.a,{id:"Remove",onClick:e.validModal.bind(e,t.uuid),className:"text-light bg-danger"},c.a.createElement("i",{className:"fa fa-close"})),c.a.createElement(E.a,{placement:"bottom",target:"Remove"},"Remove Role"))))}))))))),c.a.createElement(m.a,{xl:4},c.a.createElement(p.a,null,c.a.createElement(u.a,null,"Add Role"),c.a.createElement(h.a,{className:"p-4"},c.a.createElement(O.a,{id:"formRole",name:"formRole",onSubmit:this.addRole.bind(this)},c.a.createElement(d.a,{form:!0},c.a.createElement(m.a,null,c.a.createElement(k.a,null,c.a.createElement(y.a,{className:"mb-3"},c.a.createElement(N.a,{addonType:"prepend"},c.a.createElement(v.a,null,c.a.createElement("i",{className:"icon-shield"}))),c.a.createElement(C.a,{id:"rolename",type:"text",placeholder:"Role Name",required:!0}))))),c.a.createElement(g.a,{className:"float-right"},c.a.createElement(f.a,{className:"btn-square",type:"submit",color:"primary"},c.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),c.a.createElement(f.a,{className:"btn-square",type:"reset",color:"danger"},c.a.createElement("i",{className:"fa fa-ban"})," Reset"))),c.a.createElement(j.a,{isOpen:this.state.modal,className:"modal-sm modal-warning "+this.props.className},c.a.createElement(w.a,null,"Warning"),c.a.createElement(_.a,null,"Anda yakin? Data akan terhapus permanen dan tidak bisa dipulihkan kembali."),c.a.createElement(T.a,null,c.a.createElement(g.a,{className:"float-right"},c.a.createElement(f.a,{className:"btn-square",color:"primary",onClick:this.rolerDelete.bind(this)},"Oke")," ",c.a.createElement(f.a,{className:"btn-square",color:"danger",onClick:this.validModal.bind(this)},"Cancel")," "))))))))}}]),a}(r.Component);t.default=x}}]);