(this["webpackJsonpaion-ndc-batam"]=this["webpackJsonpaion-ndc-batam"]||[]).push([[10],{509:function(e,a,t){var n=t(161),o=t(567),s=t(568),r="http://api.ndcbatam.co.id/api/",c=new n({encodingType:"aes"}).get("key").token,i=window.$;e.exports={postNoAuth:function(e,a){return fetch(r+e,{headers:{"Content-Type":"application/json"},method:"POST",body:a})},get:function(e){return fetch(r+e,{headers:{Accept:"application/json",Authorization:"Bearer "+c},method:"GET"})},post:function(e,a){return fetch(r+e,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+c},method:"POST",body:a})},postImage:function(e,a){return fetch(r+e,{headers:{Accept:"application/json",Authorization:"Bearer "+c},method:"POST",body:a})},putImage:function(e,a){return fetch(r+e,{headers:{Accept:"application/json",Authorization:"Bearer "+c},method:"PUT",body:a})},remove:function(e,a){return fetch(r+e,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+c},method:"DELETE",body:a})},put:function(e,a){return fetch(r+e,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+c},method:"PUT",body:a})},notifMessage:function(e,a){i.notify({message:e},{type:a,animate:{enter:"animated fadeInDown",exit:"animated fadeOutUp"}})},swalNotif:function(e,a){var t=s(o);t.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",cancelButtonColor:"#d33"}).then((function(n){n.value&&(e(),t.fire("Deleted!","Your file has been deleted.","success").then((function(){a()})))}))},swalToken:function(){s(o).fire({title:"Sorry, your session has expired",text:"Your previous actions has been canceled, please Login again to continue!",icon:"warning",allowOutsideClick:!1,showClass:{popup:"animated shakeX"}}).then((function(){window.location.reload()}))}}},510:function(e,a,t){"use strict";var n=t(18),o=t(44),s=t(2),r=t.n(s),c=t(9),i=t.n(c),l=t(154),u=t.n(l),d=t(81),p={tag:d.q,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,s=e.tag,c=Object(o.a)(e,["className","cssModule","tag"]),i=Object(d.m)(u()(a,"input-group-text"),t);return r.a.createElement(s,Object(n.a)({},c,{className:i}))};m.propTypes=p,m.defaultProps={tag:"span"},a.a=m},521:function(e,a,t){"use strict";var n=t(18),o=t(44),s=t(504),r=t(31),c=t(2),i=t.n(c),l=t(9),u=t.n(l),d=t(154),p=t.n(d),m=t(81),f={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:m.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],s=e.block,r=e.className,c=e.close,l=e.cssModule,u=e.color,d=e.outline,f=e.size,b=e.tag,g=e.innerRef,h=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof h.children&&(h.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(d?"-outline":"")+"-"+u,y=Object(m.m)(p()(r,{close:c},c||"btn",c||v,!!f&&"btn-"+f,!!s&&"btn-block",{active:a,disabled:this.props.disabled}),l);h.href&&"button"===b&&(b="a");var j=c?"Close":null;return i.a.createElement(b,Object(n.a)({type:"button"===b&&h.onClick?"button":void 0},h,{className:y,ref:g,onClick:this.onClick,"aria-label":t||j}))},a}(i.a.Component);b.propTypes=f,b.defaultProps={color:"secondary",tag:"button"},a.a=b},526:function(e,a,t){"use strict";var n=t(18),o=t(44),s=t(2),r=t.n(s),c=t(9),i=t.n(c),l=t(154),u=t.n(l),d=t(81),p={tag:d.q,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},m=function(e){var a=e.className,t=e.cssModule,s=e.color,c=e.body,i=e.inverse,l=e.outline,p=e.tag,m=e.innerRef,f=Object(o.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.m)(u()(a,"card",!!i&&"text-white",!!c&&"card-body",!!s&&(l?"border":"bg")+"-"+s),t);return r.a.createElement(p,Object(n.a)({},f,{className:b,ref:m}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},527:function(e,a,t){"use strict";var n=t(18),o=t(44),s=t(2),r=t.n(s),c=t(9),i=t.n(c),l=t(154),u=t.n(l),d=t(81),p={tag:d.q,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,s=e.tag,c=Object(o.a)(e,["className","cssModule","tag"]),i=Object(d.m)(u()(a,"card-header"),t);return r.a.createElement(s,Object(n.a)({},c,{className:i}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},528:function(e,a,t){"use strict";var n=t(18),o=t(44),s=t(2),r=t.n(s),c=t(9),i=t.n(c),l=t(154),u=t.n(l),d=t(81),p={tag:d.q,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},m=function(e){var a=e.className,t=e.cssModule,s=e.innerRef,c=e.tag,i=Object(o.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.m)(u()(a,"card-body"),t);return r.a.createElement(c,Object(n.a)({},i,{className:l,ref:s}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},539:function(e,a,t){"use strict";var n=t(18),o=t(44),s=t(2),r=t.n(s),c=t(9),i=t.n(c),l=t(154),u=t.n(l),d=t(81),p={tag:d.q,size:i.a.string,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,s=e.tag,c=e.size,i=Object(o.a)(e,["className","cssModule","tag","size"]),l=Object(d.m)(u()(a,"input-group",c?"input-group-"+c:null),t);return r.a.createElement(s,Object(n.a)({},i,{className:l}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},540:function(e,a,t){"use strict";var n=t(18),o=t(44),s=t(2),r=t.n(s),c=t(9),i=t.n(c),l=t(154),u=t.n(l),d=t(81),p=t(510),m={tag:d.q,addonType:i.a.oneOf(["prepend","append"]).isRequired,children:i.a.node,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,s=e.tag,c=e.addonType,i=e.children,l=Object(o.a)(e,["className","cssModule","tag","addonType","children"]),m=Object(d.m)(u()(a,"input-group-"+c),t);return"string"===typeof i?r.a.createElement(s,Object(n.a)({},l,{className:m}),r.a.createElement(p.a,{children:i})):r.a.createElement(s,Object(n.a)({},l,{className:m,children:i}))};f.propTypes=m,f.defaultProps={tag:"div"},a.a=f},541:function(e,a,t){"use strict";var n=t(18),o=t(44),s=t(504),r=t(31),c=t(2),i=t.n(c),l=t(9),u=t.n(l),d=t(154),p=t.n(d),m=t(81),f={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,r=e.bsSize,c=e.valid,l=e.invalid,u=e.tag,d=e.addon,f=e.plaintext,b=e.innerRef,g=Object(o.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),y=u||("select"===s||"textarea"===s?s:"input"),j="form-control";f?(j+="-plaintext",y=u||"input"):"file"===s?j+="-file":h&&(j=d?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(m.s)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var N=Object(m.m)(p()(a,l&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,j),t);return("input"===y||u&&"function"===typeof u)&&(g.type=s),g.children&&!f&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(m.s)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(y,Object(n.a)({},g,{ref:b,className:N}))},a}(i.a.Component);b.propTypes=f,b.defaultProps={type:"text"},a.a=b},551:function(e,a,t){e.exports=t.p+"static/media/ndc.bf697e60.gif"},552:function(e,a,t){"use strict";var n=t(18),o=t(44),s=t(2),r=t.n(s),c=t(9),i=t.n(c),l=t(154),u=t.n(l),d=t(81),p={tag:d.q,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,s=e.tag,c=Object(o.a)(e,["className","cssModule","tag"]),i=Object(d.m)(u()(a,"card-footer"),t);return r.a.createElement(s,Object(n.a)({},c,{className:i}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},575:function(e,a,t){"use strict";var n=t(18),o=t(44),s=t(504),r=t(31),c=t(2),i=t.n(c),l=t(9),u=t.n(l),d=t(154),p=t.n(d),m=t(81),f={children:u.a.node,inline:u.a.bool,tag:m.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,r=e.tag,c=e.innerRef,l=Object(o.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(m.m)(p()(a,!!s&&"form-inline"),t);return i.a.createElement(r,Object(n.a)({},l,{ref:c,className:u}))},a}(c.Component);b.propTypes=f,b.defaultProps={tag:"form"},a.a=b},704:function(e,a,t){"use strict";t.r(a);var n=t(156),o=t(157),s=t(159),r=t(158),c=t(2),i=t.n(c),l=t(503),u=t(574),d=t(537),p=t(538),m=t(526),f=t(527),b=t(528),g=t(575),h=t(539),v=t(540),y=t(510),j=t(541),N=t(521),E=t(552),O=t(551),w=t.n(O),T=t(509),M=t.n(T),k=t(513),x=t.n(k),C=t(161),R=t.n(C),z=function(){return i.a.createElement("div",{className:"page-loader-wrapper bg-dark"},i.a.createElement("div",{className:"loader"},i.a.createElement(l.a,{style:{width:"3rem",height:"3rem"},color:"primary"})))},P=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var o=arguments.length,s=new Array(o),r=0;r<o;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={loading:!1},e.hideLoader=function(){e.setState({loader:!1})},e.showLoader=function(){e.setState({loader:!0})},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=new XMLHttpRequest;e.open("GET","http://api.ndcbatam.co.id",!0),e.onreadystatechange=function(){4===e.readyState&&404===e.status&&M.a.notifMessage("Database not found, please call your administrator!")},e.send()}},{key:"dologin",value:function(e){var a=this;this.showLoader(),e.preventDefault();var t={email:x()("#username").val(),password:x()("#password").val()},n=JSON.stringify(t);M.a.postNoAuth("auth/login",n).then((function(e){return e.json()})).then((function(e){!0===e.success?(a.hideLoader(),new R.a({encodingType:"aes"}).set("key",e.data),localStorage.exp=(new Date).getTime(),window.location.reload()):(M.a.notifMessage("User atau Password Anda Salah","danger"),a.hideLoader(),console.log("Something Else went wrong"))})).catch((function(e){M.a.notifMessage("User atau Password Anda Salah","danger"),a.hideLoader(),console.log("Something Catch error went wrong",e)}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"app flex-row align-items-center animated fadeIn login-page"},i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"justify-content-center"},i.a.createElement(p.a,{xs:"auto"},this.state.loading?i.a.createElement(z,null):null),i.a.createElement(p.a,{xs:"auto",className:"login-box"},i.a.createElement(m.a,{className:"p-4"},i.a.createElement(f.a,{style:{backgroundColor:"#fff"}},i.a.createElement("div",{className:"logo"},i.a.createElement("a",{href:"/"},i.a.createElement("img",{src:w.a,alt:"ndc-logo"})),i.a.createElement("small",{className:"text-muted"},i.a.createElement("b",null,"NOC Monitoring Tools")),i.a.createElement("small",{className:"text-muted"},i.a.createElement("b",null," NDC Batam")))),i.a.createElement(b.a,null,i.a.createElement(g.a,{onSubmit:this.dologin.bind(this)},i.a.createElement(h.a,{className:"mb-3"},i.a.createElement(v.a,{addonType:"prepend"},i.a.createElement(y.a,null,i.a.createElement("div",{className:" text-primary"},"@"))),i.a.createElement(j.a,{required:!0,type:"email",id:"username",placeholder:"Email",autoComplete:"Email"})),i.a.createElement(h.a,{className:"mb-3"},i.a.createElement(v.a,{addonType:"prepend"},i.a.createElement(y.a,null,i.a.createElement("i",{className:"icon-lock text-primary"}))),i.a.createElement(j.a,{required:!0,type:"password",id:"password",placeholder:"Password",autoComplete:"current-password"})),i.a.createElement(d.a,null,i.a.createElement(p.a,{xs:"12"},i.a.createElement(N.a,{block:!0,type:"submit",color:"primary"},i.a.createElement("b",null,"Login")))))),i.a.createElement(E.a,{className:"text-muted",style:{backgroundColor:"#fff"}},"\xa9 2018-2020 ",i.a.createElement("a",{href:"http://ndcbatam.co.id/#team"},i.a.createElement("b",null,"NDC Batam")),". All Right Reserved"))))))}}]),t}(c.Component);a.default=P}}]);