(this["webpackJsonpaion-ndc-batam"]=this["webpackJsonpaion-ndc-batam"]||[]).push([[9],{509:function(e,a,t){var n=t(161),s=t(567),o=t(568),r="http://api.ndcbatam.co.id/api/",c=new n({encodingType:"aes"}).get("key").token,i=t(510);t(569),t(570),e.exports={postNoAuth:function(e,a){return fetch(r+e,{headers:{"Content-Type":"application/json"},method:"POST",body:a})},get:function(e){return fetch(r+e,{headers:{Accept:"application/json",Authorization:"Bearer "+c},method:"GET"})},post:function(e,a){return fetch(r+e,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+c},method:"POST",body:a})},postImage:function(e,a){return fetch(r+e,{headers:{Accept:"application/json",Authorization:"Bearer "+c},method:"POST",body:a})},putImage:function(e,a){return fetch(r+e,{headers:{Accept:"application/json",Authorization:"Bearer "+c},method:"PUT",body:a})},remove:function(e,a){return fetch(r+e,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+c},method:"DELETE",body:a})},put:function(e,a){return fetch(r+e,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+c},method:"PUT",body:a})},notifMessage:function(e,a){i.notify({message:e},{element:"body",type:a,animate:{enter:"animate__animated animate__fadeInDown",exit:"animate__animated animate__fadeOutUp"},onShow:function(){this.css({width:"90%",height:"auto"})}})},swalNotif:function(e,a){var t=o(s.mixin({customClass:{confirmButton:"btn btn-square btn-lg btn-primary mr-2",cancelButton:"btn btn-square btn-lg btn-danger"},buttonsStyling:!1}));t.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Delete",cancelButtonText:"Cancel"}).then((function(n){n.value&&(e(),t.fire("Deleted!","Your file has been deleted.","success").then((function(){a()})))}))},swalToken:function(){o(s).fire({title:"Sorry, your session has expired",text:"Your previous actions has been canceled, please Login again to continue!",icon:"warning",width:"90%",allowOutsideClick:!1,showClass:{popup:"animated shakeX"}}).then((function(){window.location.reload()}))}}},511:function(e,a,t){"use strict";var n=t(18),s=t(44),o=t(2),r=t.n(o),c=t(9),i=t.n(c),l=t(154),u=t.n(l),d=t(81),p={tag:d.q,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,o=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),i=Object(d.m)(u()(a,"input-group-text"),t);return r.a.createElement(o,Object(n.a)({},c,{className:i}))};m.propTypes=p,m.defaultProps={tag:"span"},a.a=m},514:function(e,a,t){"use strict";var n=t(18),s=t(44),o=t(2),r=t.n(o),c=t(9),i=t.n(c),l=t(154),u=t.n(l),d=t(81),p=i.a.oneOfType([i.a.number,i.a.string]),m={tag:d.q,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},f={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var a=e.className,t=e.cssModule,o=e.noGutters,c=e.tag,i=e.form,l=e.widths,p=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];l.forEach((function(a,t){var n=e[a];if(delete p[a],n){var s=!t;m.push(s?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var f=Object(d.m)(u()(a,o?"no-gutters":null,i?"form-row":"row",m),t);return r.a.createElement(c,Object(n.a)({},p,{className:f}))};b.propTypes=m,b.defaultProps=f,a.a=b},515:function(e,a,t){"use strict";var n=t(18),s=t(44),o=t(2),r=t.n(o),c=t(9),i=t.n(c),l=t(154),u=t.n(l),d=t(81),p=i.a.oneOfType([i.a.number,i.a.string]),m=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:p,offset:p})]),f={tag:d.q,xs:m,sm:m,md:m,lg:m,xl:m,className:i.a.string,cssModule:i.a.object,widths:i.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,o=e.widths,c=e.tag,i=Object(s.a)(e,["className","cssModule","widths","tag"]),l=[];o.forEach((function(a,n){var s=e[a];if(delete i[a],s||""===s){var o=!n;if(Object(d.k)(s)){var r,c=o?"-":"-"+a+"-",p=g(o,a,s.size);l.push(Object(d.m)(u()(((r={})[p]=s.size||""===s.size,r["order"+c+s.order]=s.order||0===s.order,r["offset"+c+s.offset]=s.offset||0===s.offset,r)),t))}else{var m=g(o,a,s);l.push(m)}}})),l.length||l.push("col");var p=Object(d.m)(u()(a,l),t);return r.a.createElement(c,Object(n.a)({},i,{className:p}))};h.propTypes=f,h.defaultProps=b,a.a=h},523:function(e,a,t){"use strict";var n=t(18),s=t(44),o=t(504),r=t(31),c=t(2),i=t.n(c),l=t(9),u=t.n(l),d=t(154),p=t.n(d),m=t(81),f={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:m.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],o=e.block,r=e.className,c=e.close,l=e.cssModule,u=e.color,d=e.outline,f=e.size,b=e.tag,g=e.innerRef,h=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);c&&"undefined"===typeof h.children&&(h.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(d?"-outline":"")+"-"+u,j=Object(m.m)(p()(r,{close:c},c||"btn",c||v,!!f&&"btn-"+f,!!o&&"btn-block",{active:a,disabled:this.props.disabled}),l);h.href&&"button"===b&&(b="a");var y=c?"Close":null;return i.a.createElement(b,Object(n.a)({type:"button"===b&&h.onClick?"button":void 0},h,{className:j,ref:g,onClick:this.onClick,"aria-label":t||y}))},a}(i.a.Component);b.propTypes=f,b.defaultProps={color:"secondary",tag:"button"},a.a=b},528:function(e,a,t){"use strict";var n=t(18),s=t(44),o=t(2),r=t.n(o),c=t(9),i=t.n(c),l=t(154),u=t.n(l),d=t(81),p={tag:d.q,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},m=function(e){var a=e.className,t=e.cssModule,o=e.color,c=e.body,i=e.inverse,l=e.outline,p=e.tag,m=e.innerRef,f=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.m)(u()(a,"card",!!i&&"text-white",!!c&&"card-body",!!o&&(l?"border":"bg")+"-"+o),t);return r.a.createElement(p,Object(n.a)({},f,{className:b,ref:m}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},529:function(e,a,t){"use strict";var n=t(18),s=t(44),o=t(2),r=t.n(o),c=t(9),i=t.n(c),l=t(154),u=t.n(l),d=t(81),p={tag:d.q,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,o=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),i=Object(d.m)(u()(a,"card-header"),t);return r.a.createElement(o,Object(n.a)({},c,{className:i}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},530:function(e,a,t){"use strict";var n=t(18),s=t(44),o=t(2),r=t.n(o),c=t(9),i=t.n(c),l=t(154),u=t.n(l),d=t(81),p={tag:d.q,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},m=function(e){var a=e.className,t=e.cssModule,o=e.innerRef,c=e.tag,i=Object(s.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.m)(u()(a,"card-body"),t);return r.a.createElement(c,Object(n.a)({},i,{className:l,ref:o}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},539:function(e,a,t){"use strict";var n=t(18),s=t(44),o=t(2),r=t.n(o),c=t(9),i=t.n(c),l=t(154),u=t.n(l),d=t(81),p={tag:d.q,size:i.a.string,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,o=e.tag,c=e.size,i=Object(s.a)(e,["className","cssModule","tag","size"]),l=Object(d.m)(u()(a,"input-group",c?"input-group-"+c:null),t);return r.a.createElement(o,Object(n.a)({},i,{className:l}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},540:function(e,a,t){"use strict";var n=t(18),s=t(44),o=t(2),r=t.n(o),c=t(9),i=t.n(c),l=t(154),u=t.n(l),d=t(81),p=t(511),m={tag:d.q,addonType:i.a.oneOf(["prepend","append"]).isRequired,children:i.a.node,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,o=e.tag,c=e.addonType,i=e.children,l=Object(s.a)(e,["className","cssModule","tag","addonType","children"]),m=Object(d.m)(u()(a,"input-group-"+c),t);return"string"===typeof i?r.a.createElement(o,Object(n.a)({},l,{className:m}),r.a.createElement(p.a,{children:i})):r.a.createElement(o,Object(n.a)({},l,{className:m,children:i}))};f.propTypes=m,f.defaultProps={tag:"div"},a.a=f},541:function(e,a,t){"use strict";var n=t(18),s=t(44),o=t(504),r=t(31),c=t(2),i=t.n(c),l=t(9),u=t.n(l),d=t(154),p=t.n(d),m=t(81),f={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.focus=t.focus.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.type,r=e.bsSize,c=e.valid,l=e.invalid,u=e.tag,d=e.addon,f=e.plaintext,b=e.innerRef,g=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(o)>-1,v=new RegExp("\\D","g"),j=u||("select"===o||"textarea"===o?o:"input"),y="form-control";f?(y+="-plaintext",j=u||"input"):"file"===o?y+="-file":"range"===o?y+="-range":h&&(y=d?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(m.s)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var O=Object(m.m)(p()(a,l&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,y),t);return("input"===j||u&&"function"===typeof u)&&(g.type=o),g.children&&!f&&"select"!==o&&"string"===typeof j&&"select"!==j&&(Object(m.s)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(j,Object(n.a)({},g,{ref:b,className:O,"aria-invalid":l}))},a}(i.a.Component);b.propTypes=f,b.defaultProps={type:"text"},a.a=b},551:function(e,a,t){e.exports=t.p+"static/media/ndc.bf697e60.gif"},552:function(e,a,t){"use strict";var n=t(18),s=t(44),o=t(2),r=t.n(o),c=t(9),i=t.n(c),l=t(154),u=t.n(l),d=t(81),p={tag:d.q,className:i.a.string,cssModule:i.a.object},m=function(e){var a=e.className,t=e.cssModule,o=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),i=Object(d.m)(u()(a,"card-footer"),t);return r.a.createElement(o,Object(n.a)({},c,{className:i}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},577:function(e,a,t){"use strict";var n=t(18),s=t(44),o=t(504),r=t(31),c=t(2),i=t.n(c),l=t(9),u=t.n(l),d=t(154),p=t.n(d),m=t(81),f={children:u.a.node,inline:u.a.bool,tag:m.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.submit=t.submit.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.inline,r=e.tag,c=e.innerRef,l=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(m.m)(p()(a,!!o&&"form-inline"),t);return i.a.createElement(r,Object(n.a)({},l,{ref:c,className:u}))},a}(c.Component);b.propTypes=f,b.defaultProps={tag:"form"},a.a=b},706:function(e,a,t){"use strict";t.r(a);var n=t(156),s=t(157),o=t(159),r=t(158),c=t(2),i=t.n(c),l=t(576),u=t(514),d=t(515),p=t(528),m=t(529),f=t(530),b=t(577),g=t(539),h=t(540),v=t(511),j=t(541),y=t(523),O=t(552),N=t(551),E=t.n(N),w=t(509),T=t.n(w),M=t(510),x=t.n(M),k=t(161),C=t.n(k),R=function(e){Object(o.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"dologin",value:function(e){e.preventDefault();var a={email:x()("#username").val(),password:x()("#password").val()},t=JSON.stringify(a);T.a.postNoAuth("auth/login",t).then((function(e){return e.json()})).then((function(e){!0===e.success?(new C.a({encodingType:"aes"}).set("key",e.data),localStorage.exp=(new Date).getTime(),window.location.reload()):(T.a.notifMessage("User atau Password Anda Salah","danger"),console.log("Something Else went wrong"))})).catch((function(e){T.a.notifMessage("User atau Password Anda Salah","danger"),console.log("Something Catch error went wrong",e)}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"app flex-row align-items-center animated fadeIn login-page"},i.a.createElement(l.a,null,i.a.createElement(u.a,{className:"justify-content-center"},i.a.createElement(d.a,{xs:"auto",className:"login-box"},i.a.createElement(p.a,{className:"p-4"},i.a.createElement(m.a,{style:{backgroundColor:"#fff"}},i.a.createElement("div",{className:"logo"},i.a.createElement("a",{href:"/"},i.a.createElement("img",{src:E.a,alt:"ndc-logo"})),i.a.createElement("small",{className:"text-muted"},i.a.createElement("b",null,"AION Application")),i.a.createElement("small",{className:"text-muted"},i.a.createElement("b",null,"NDC Batam Monitoring tools")))),i.a.createElement(f.a,null,i.a.createElement(b.a,{onSubmit:this.dologin.bind(this)},i.a.createElement(g.a,{className:"mb-3"},i.a.createElement(h.a,{addonType:"prepend"},i.a.createElement(v.a,null,i.a.createElement("div",{className:" text-primary"},"@"))),i.a.createElement(j.a,{required:!0,type:"email",id:"username",placeholder:"Email",autoComplete:"Email"})),i.a.createElement(g.a,{className:"mb-3"},i.a.createElement(h.a,{addonType:"prepend"},i.a.createElement(v.a,null,i.a.createElement("i",{className:"icon-lock text-primary"}))),i.a.createElement(j.a,{required:!0,type:"password",id:"password",placeholder:"Password",autoComplete:"current-password"})),i.a.createElement(u.a,null,i.a.createElement(d.a,{xs:"12"},i.a.createElement(y.a,{block:!0,type:"submit",color:"primary"},i.a.createElement("b",null,"Login")))))),i.a.createElement(O.a,{className:"text-muted",style:{backgroundColor:"#fff"}},"\xa9 2018-2020 ",i.a.createElement("a",{href:"http://ndcbatam.co.id/#team"},i.a.createElement("b",null,"NDC Batam")),". All Right Reserved"))))))}}]),t}(c.Component);a.default=R}}]);