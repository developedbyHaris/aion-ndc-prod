(this["webpackJsonpaion-ndc-batam"]=this["webpackJsonpaion-ndc-batam"]||[]).push([[21],{1199:function(e,a,t){"use strict";t.r(a);var n=t(155),r=t(156),o=t(160),l=t(158),s=t(157),c=t(2),i=t.n(c),d=t(536),u=t(537),m=t(662),p=t(1193),g=t(538),f=t(539),h=t(515),E=t(586),b=t(693),v=t(546),N=t(571),w=t(572),y=t(573),j=t(628),O=t(1202),M=t(1205),k=t(1191),S=t(1192),x=t(627),D=t(1194),G=t(521),C=t.n(G),z=t(522),q=t.n(z),A=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={groupData:[],findData:[],modal:!1,uuidRem:""},r.addlist=r.addlist.bind(Object(o.a)(r)),r.groupDelete=r.groupDelete.bind(Object(o.a)(r)),r.groupEdit=r.groupEdit.bind(Object(o.a)(r)),r.groupFind=r.groupFind.bind(Object(o.a)(r)),r.editModal=r.editModal.bind(Object(o.a)(r)),r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.addlist()}},{key:"addlist",value:function(){var e=this;C.a.get("device-tag/list").then((function(e){return e.json()})).then((function(a){e.setState({groupData:a.data})})).catch((function(e){C.a.notifMessage("Anda sedang offline","danger"),q()(".page-loader-wrapper").hide(),console.log("Something Catch error went wrong",e)}))}},{key:"addGroup",value:function(e){var a=this;q()(".page-loader-wrapper").show(),e.preventDefault();var t={name:q()("#groupname").val()},n=document.getElementsByName("formGroup")[0],r=JSON.stringify(t);C.a.postNoAuth("device-tag/store",r).then((function(e){return e.json()})).then((function(e){!0===e.success?(C.a.notifMessage("Group "+e.data.name+" berhasil ditambahkan"),a.addlist(),n.reset()):(C.a.notifMessage("Anda Salah","danger"),q()(".page-loader-wrapper").hide(),console.log("Something Else went wrong"))})).catch((function(e){C.a.notifMessage("Koneksi Anda Salah","danger"),q()(".page-loader-wrapper").hide(),console.log("Something Catch error went wrong",e)}))}},{key:"groupFind",value:function(e,a){var t=this;e.preventDefault();var n={uuid:a},r=JSON.stringify(n);C.a.post("device-tag/find",r).then((function(e){return e.json()})).then((function(e){t.setState({findData:e.data})})).then((function(){C.a.swalLoading(t.editModal,"Generate data")})).catch((function(e){C.a.notifMessage("Anda sedang offline","danger"),console.log("Something Catch error went wrong",e)}))}},{key:"groupEdit",value:function(e){var a=this;e.preventDefault();var t={uuid:this.state.findData.uuid,name:q()("#editname").val()},n=JSON.stringify(t);C.a.put("device-tag/update",n).then((function(e){return e.json()})).then((function(e){!0===e.success?(a.editModal(),a.addlist(),C.a.notifMessage("Log berhasil diubah","success")):(C.a.notifMessage("Anda Salah","danger"),q()(".page-loader-wrapper").hide(),console.log("Something Else went wrong"))})).catch((function(e){C.a.notifMessage("Koneksi Anda Salah","danger"),q()(".page-loader-wrapper").hide(),console.log("Something Catch error went wrong",e)}))}},{key:"groupDelete",value:function(){q()(".page-loader-wrapper").show();var e={uuid:this.state.uuidRem},a=JSON.stringify(e);C.a.remove("device-tag/remove",a).then((function(e){return e.json()})).then((function(e){!0===e.success?q()(".page-loader-wrapper").hide():(C.a.notifMessage("Anda Selalu Salah","danger"),q()(".page-loader-wrapper").hide(),console.log("Something Else went wrong"))})).catch((function(e){C.a.notifMessage("Koneksi Anda bermasalah","danger"),q()(".page-loader-wrapper").hide(),console.log("Something Catch error went wrong",e)}))}},{key:"editModal",value:function(){this.setState({modal:!this.state.modal})}},{key:"validModal",value:function(e){this.setState({uuidRem:e}),C.a.swalNotif(this.groupDelete,this.addlist)}},{key:"render",value:function(){var e=this,a=this.state.groupData,t=this.state.findData;return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(d.a,{className:"flex-row"},i.a.createElement(u.a,{xl:"7"},i.a.createElement("i",{className:"fa fa-plus mr-2 mb-2 text-muted"}),i.a.createElement("strong",{className:"text-muted"},"Add Group"),i.a.createElement(m.a,{id:"formGroup",name:"formGroup",onSubmit:this.addGroup.bind(this)},i.a.createElement(d.a,{form:!0},i.a.createElement(u.a,{md:"8",xs:"12"},i.a.createElement(p.a,null,i.a.createElement(g.a,null,i.a.createElement(f.a,{addonType:"prepend"},i.a.createElement(h.a,null,i.a.createElement("i",{className:"icon-briefcase"}))),i.a.createElement(E.a,{id:"groupname",name:"groupname",type:"text",placeholder:"Group Name",autoComplete:"off",required:!0})))),i.a.createElement(u.a,{md:"4",xs:"12"},i.a.createElement(b.a,null,i.a.createElement(v.a,{className:"btn-square",type:"submit",color:"primary"},i.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),i.a.createElement(v.a,{className:"btn-square",type:"reset",color:"danger"},i.a.createElement("i",{className:"fa fa-ban"})," Reset"))))))),i.a.createElement("hr",{style:{color:"teal",backgroundColor:"red",height:1}}),i.a.createElement(d.a,{className:"flex-row"},i.a.createElement(u.a,{xl:"8"},i.a.createElement(N.a,null,i.a.createElement(w.a,{className:"bg-danger text-light"},i.a.createElement("i",{className:"fa fa-align-justify"})," ",i.a.createElement("strong",null,"Group List")),i.a.createElement(y.a,null,i.a.createElement(j.a,{responsive:!0,hover:!0,size:"sm",className:"tutop"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{scope:"col"},"#"),i.a.createElement("th",{scope:"col"},"Group"),i.a.createElement("th",{scope:"col"},"Action"))),i.a.createElement("tbody",null,a.map((function(a,t){return i.a.createElement("tr",{key:a.uuid},i.a.createElement("td",{className:"text-dark"},t+1),i.a.createElement("td",null,a.name),i.a.createElement("td",null,i.a.createElement(b.a,{size:"sm"},i.a.createElement(v.a,{id:"Edit",onClick:function(t){return e.groupFind(t,a.uuid)},className:"text-light bg-primary"},i.a.createElement("i",{className:"fa fa-pencil"})),i.a.createElement(O.a,{placement:"bottom",target:"Edit"},"Edit Group"),i.a.createElement(v.a,{id:"Remove",onClick:e.validModal.bind(e,a.uuid),className:"text-light bg-danger"},i.a.createElement("i",{className:"fa fa-close"})),i.a.createElement(O.a,{placement:"bottom",target:"Remove"},"Remove Group"))))})))))))),i.a.createElement(M.a,{isOpen:this.state.modal,backdrop:"static"},i.a.createElement(m.a,{id:"editItem",name:"editItem",onSubmit:this.groupEdit},i.a.createElement(k.a,{className:"btn-reddit",toggle:function(){return e.setState({modal:!e.state.modal})}},"Edit Device"),i.a.createElement(S.a,null,i.a.createElement(d.a,{form:!0},i.a.createElement(u.a,null,i.a.createElement(p.a,null,i.a.createElement(x.a,{htmlFor:"name"},"Group Name"),i.a.createElement(E.a,{id:"editname",type:"text",placeholder:"Group Name",autoComplete:"off",defaultValue:t.name,required:!0}))))),i.a.createElement(D.a,null,i.a.createElement(b.a,{className:"float-right"},i.a.createElement(v.a,{className:"btn-square",color:"primary",onClick:this.editItem},"Oke")," ",i.a.createElement(v.a,{className:"btn-square",color:"danger",onClick:function(){return e.setState({modal:!e.state.modal})}},"Cancel")," ")))))}}]),t}(c.Component);a.default=A},515:function(e,a,t){"use strict";var n=t(18),r=t(44),o=t(2),l=t.n(o),s=t(9),c=t.n(s),i=t(154),d=t.n(i),u=t(81),m={tag:u.q,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,o=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),c=Object(u.m)(d()(a,"input-group-text"),t);return l.a.createElement(o,Object(n.a)({},s,{className:c}))};p.propTypes=m,p.defaultProps={tag:"span"},a.a=p},538:function(e,a,t){"use strict";var n=t(18),r=t(44),o=t(2),l=t.n(o),s=t(9),c=t.n(s),i=t(154),d=t.n(i),u=t(81),m={tag:u.q,size:c.a.string,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,o=e.tag,s=e.size,c=Object(r.a)(e,["className","cssModule","tag","size"]),i=Object(u.m)(d()(a,"input-group",s?"input-group-"+s:null),t);return l.a.createElement(o,Object(n.a)({},c,{className:i}))};p.propTypes=m,p.defaultProps={tag:"div"},a.a=p},539:function(e,a,t){"use strict";var n=t(18),r=t(44),o=t(2),l=t.n(o),s=t(9),c=t.n(s),i=t(154),d=t.n(i),u=t(81),m=t(515),p={tag:u.q,addonType:c.a.oneOf(["prepend","append"]).isRequired,children:c.a.node,className:c.a.string,cssModule:c.a.object},g=function(e){var a=e.className,t=e.cssModule,o=e.tag,s=e.addonType,c=e.children,i=Object(r.a)(e,["className","cssModule","tag","addonType","children"]),p=Object(u.m)(d()(a,"input-group-"+s),t);return"string"===typeof c?l.a.createElement(o,Object(n.a)({},i,{className:p}),l.a.createElement(m.a,{children:c})):l.a.createElement(o,Object(n.a)({},i,{className:p,children:c}))};g.propTypes=p,g.defaultProps={tag:"div"},a.a=g},627:function(e,a,t){"use strict";var n=t(18),r=t(44),o=t(2),l=t.n(o),s=t(9),c=t.n(s),i=t(154),d=t.n(i),u=t(81),m=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:m,order:m,offset:m})]),g={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.q,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},f={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,o=e.hidden,s=e.widths,c=e.tag,i=e.check,m=e.size,p=e.for,g=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),f=[];s.forEach((function(a,n){var r=e[a];if(delete g[a],r||""===r){var o,l=!n;if(Object(u.k)(r)){var s,c=l?"-":"-"+a+"-";o=h(l,a,r.size),f.push(Object(u.m)(d()(((s={})[o]=r.size||""===r.size,s["order"+c+r.order]=r.order||0===r.order,s["offset"+c+r.offset]=r.offset||0===r.offset,s))),t)}else o=h(l,a,r),f.push(o)}}));var E=Object(u.m)(d()(a,!!o&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,f,!!f.length&&"col-form-label"),t);return l.a.createElement(c,Object(n.a)({htmlFor:p},g,{className:E}))};E.propTypes=g,E.defaultProps=f,a.a=E}}]);