(this["webpackJsonpaion-ndc-batam"]=this["webpackJsonpaion-ndc-batam"]||[]).push([[27],{1200:function(e,a,t){"use strict";t.r(a);var n=t(155),l=t(156),r=t(160),i=t(158),o=t(157),c=t(2),s=t.n(c),d=t(536),m=t(537),u=t(571),f=t(572),h=t(573),g=t(628),p=t(693),E=t(546),v=t(1202),b=t(662),w=t(1193),N=t(627),y=t(586),k=t(1205),S=t(1191),D=t(1192),j=t(1194),M=t(521),O=t.n(M),I=t(522),x=t.n(I),C=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={itemData:[],groupData:[],itemFind:[],modal:!1,uuidRem:""},l.addlist=l.addlist.bind(Object(r.a)(l)),l.itemDelete=l.itemDelete.bind(Object(r.a)(l)),l.editItem=l.editItem.bind(Object(r.a)(l)),l.findItem=l.findItem.bind(Object(r.a)(l)),l.editModal=l.editModal.bind(Object(r.a)(l)),l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.addlist()}},{key:"addlist",value:function(){var e=this;O.a.get("device/list").then((function(e){return e.json()})).then((function(a){e.setState({itemData:a.data})})).catch((function(e){O.a.notifMessage("Anda sedang offline","danger"),x()(".page-loader-wrapper").hide(),console.log(e,"Something Catch error went wrong")})),O.a.get("device-tag/list").then((function(e){return e.json()})).then((function(a){e.setState({groupData:a.data})})).catch((function(e){O.a.notifMessage("Anda sedang offline","danger"),x()(".page-loader-wrapper").hide(),console.log(e,"Something Catch error went wrong")}))}},{key:"addItem",value:function(e){var a=this;x()(".page-loader-wrapper").show(),e.preventDefault();var t={name:x()("#itemname").val(),device_tags_id:x()("#itemgroup").val(),desc:x()("#itemdesc").val()},n=document.getElementsByName("formItem")[0],l=JSON.stringify(t);O.a.postNoAuth("device/store",l).then((function(e){return e.json()})).then((function(e){!0===e.success?(O.a.notifMessage("Device "+e.data.name+" berhasil ditambahkan"),a.addlist(),n.reset()):(O.a.notifMessage("Anda Salah","danger"),x()(".page-loader-wrapper").hide(),console.log("Something Else went wrong"))})).catch((function(e){O.a.notifMessage("Koneksi Anda Salah","danger"),x()(".page-loader-wrapper").hide(),console.log("Something Catch error went wrong",e)}))}},{key:"findItem",value:function(e,a){var t=this;e.preventDefault();var n={uuid:a},l=JSON.stringify(n);O.a.post("device/find",l).then((function(e){return e.json()})).then((function(e){t.setState({itemFind:e.data})})).then((function(){O.a.swalLoading(t.editModal,"Generate data")})).catch((function(e){O.a.notifMessage("Anda sedang offline","danger"),console.log("Something Catch error went wrong",e)}))}},{key:"editItem",value:function(e){var a=this;e.preventDefault();var t={uuid:this.state.itemFind.uuid,name:x()("#editname").val(),device_tags_id:x()("#editgroup").val(),desc:x()("#editdesc").val()},n=JSON.stringify(t);O.a.put("device/update",n).then((function(e){return e.json()})).then((function(e){!0===e.success?(a.editModal(),a.addlist(),O.a.notifMessage("Log berhasil diubah","success")):(O.a.notifMessage("Anda Selalu Salah","danger"),console.log("Something Else went wrong"))})).catch((function(e){O.a.notifMessage(" Anda sedang offline, data tidak tersimpan","danger"),console.log("Something Catch error went wrong",e)}))}},{key:"itemDelete",value:function(){x()(".page-loader-wrapper").show();var e={uuid:this.state.uuidRem},a=JSON.stringify(e);O.a.remove("device/remove",a).then((function(e){return e.json()})).then((function(e){!0===e.success?x()(".page-loader-wrapper").hide():(O.a.notifMessage("Anda Selalu Salah","danger"),x()(".page-loader-wrapper").hide(),console.log("Something Else went wrong"))})).catch((function(e){O.a.notifMessage("Koneksi Anda bermasalah","danger"),x()(".page-loader-wrapper").hide(),console.log("Something Catch error went wrong",e)}))}},{key:"validModal",value:function(e){this.setState({uuidRem:e}),O.a.swalNotif(this.itemDelete,this.addlist)}},{key:"editModal",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){var e=this,a=this.state.itemData,t=this.state.groupData,n=this.state.itemFind;return s.a.createElement("div",{className:"animated fadeIn"},s.a.createElement(d.a,{className:"flex-row"},s.a.createElement(m.a,{xl:"8"},s.a.createElement(u.a,null,s.a.createElement(f.a,{className:"bg-success text-dark"},s.a.createElement("i",{className:"fa fa-align-justify"}),s.a.createElement("strong",null,"Device List")),s.a.createElement(h.a,null,s.a.createElement(g.a,{responsive:!0,hover:!0,size:"sm",className:"tutop"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Name"),s.a.createElement("th",{scope:"col"},"Group"),s.a.createElement("th",{scope:"col"},"Description"),s.a.createElement("th",{scope:"col"},"Action"))),s.a.createElement("tbody",null,a.map((function(a,t){return s.a.createElement("tr",{key:a.uuid},s.a.createElement("td",{className:"text-dark"},t+1),s.a.createElement("td",null,a.name),s.a.createElement("td",null,a.device_tags.name),s.a.createElement("td",null,a.desc),s.a.createElement("td",null,s.a.createElement(p.a,{size:"sm"},s.a.createElement(E.a,{id:"Edit",onClick:function(t){return e.findItem(t,a.uuid)},className:"text-light bg-primary"},s.a.createElement("i",{className:"fa fa-pencil"})),s.a.createElement(v.a,{placement:"bottom",target:"Edit"},"Edit Device"),s.a.createElement(E.a,{id:"Remove",onClick:e.validModal.bind(e,a.uuid),className:"text-light bg-danger"},s.a.createElement("i",{className:"fa fa-close"})),s.a.createElement(v.a,{placement:"bottom",target:"Remove"},"Remove Device"))))}))))))),s.a.createElement(m.a,{xl:"4"},s.a.createElement(u.a,null,s.a.createElement(f.a,{className:"bg-warning text-dark"},s.a.createElement("i",{className:"fa fa-plus"}),s.a.createElement("strong",null,"Add Item")),s.a.createElement(h.a,null,s.a.createElement(b.a,{id:"formItem",name:"formItem",onSubmit:this.addItem.bind(this)},s.a.createElement(d.a,{form:!0},s.a.createElement(m.a,null,s.a.createElement(w.a,null,s.a.createElement(N.a,{htmlFor:"name"},"Name"),s.a.createElement(y.a,{id:"itemname",type:"text",placeholder:"Device Name",autoComplete:"off",required:!0})),s.a.createElement(w.a,null,s.a.createElement(N.a,{htmlFor:"group"},"Group"),s.a.createElement(y.a,{id:"itemgroup",type:"select",required:!0},s.a.createElement("option",{value:"0"},"Please select"),t.map((function(e){return s.a.createElement("option",{key:e.id,value:e.uuid},e.name)})))),s.a.createElement(w.a,null,s.a.createElement(N.a,{htmlFor:"desc"},"Description"),s.a.createElement(y.a,{id:"itemdesc",type:"textarea",placeholder:"Device Description",autoComplete:"off",required:!0})))),s.a.createElement(p.a,{className:"float-right"},s.a.createElement(E.a,{className:"btn-square",type:"submit",color:"primary"},s.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),s.a.createElement(E.a,{className:"btn-square",type:"reset",color:"danger"},s.a.createElement("i",{className:"fa fa-ban"})," Reset"))),s.a.createElement(k.a,{key:n.uuid,isOpen:this.state.modal,backdrop:"static"},s.a.createElement(b.a,{id:"editItem",name:"editItem",onSubmit:this.editItem},s.a.createElement(S.a,{className:"btn-reddit",toggle:function(){return e.setState({modal:!e.state.modal})}},"Edit Device"),s.a.createElement(D.a,null,s.a.createElement(d.a,{form:!0},s.a.createElement(m.a,null,s.a.createElement(w.a,null,s.a.createElement(N.a,{htmlFor:"name"},"Name"),s.a.createElement(y.a,{id:"editname",type:"text",placeholder:"Device Name",autoComplete:"off",defaultValue:n.name,required:!0})),s.a.createElement(w.a,null,s.a.createElement(N.a,{htmlFor:"group"},"Group"),s.a.createElement(y.a,{id:"editgroup",type:"select",required:!0,defaultValue:n.device_tags_id},t.map((function(e){return s.a.createElement("option",{key:e.id,value:e.uuid},e.name)})))),s.a.createElement(w.a,null,s.a.createElement(N.a,{htmlFor:"desc"},"Description"),s.a.createElement(y.a,{id:"editdesc",type:"textarea",placeholder:"Device Description",autoComplete:"off",defaultValue:n.desc,required:!0}))))),s.a.createElement(j.a,null,s.a.createElement(p.a,{className:"float-right"},s.a.createElement(E.a,{className:"btn-square",color:"primary"},"Oke")," ",s.a.createElement(E.a,{className:"btn-square",color:"danger",onClick:function(){return e.setState({modal:!e.state.modal})}},"Cancel")," ")))))))))}}]),t}(c.Component);a.default=C},627:function(e,a,t){"use strict";var n=t(18),l=t(44),r=t(2),i=t.n(r),o=t(9),c=t.n(o),s=t(154),d=t.n(s),m=t(81),u=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:u,order:u,offset:u})]),h={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:m.q,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},p=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,r=e.hidden,o=e.widths,c=e.tag,s=e.check,u=e.size,f=e.for,h=Object(l.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),g=[];o.forEach((function(a,n){var l=e[a];if(delete h[a],l||""===l){var r,i=!n;if(Object(m.k)(l)){var o,c=i?"-":"-"+a+"-";r=p(i,a,l.size),g.push(Object(m.m)(d()(((o={})[r]=l.size||""===l.size,o["order"+c+l.order]=l.order||0===l.order,o["offset"+c+l.offset]=l.offset||0===l.offset,o))),t)}else r=p(i,a,l),g.push(r)}}));var E=Object(m.m)(d()(a,!!r&&"sr-only",!!s&&"form-check-label",!!u&&"col-form-label-"+u,g,!!g.length&&"col-form-label"),t);return i.a.createElement(c,Object(n.a)({htmlFor:f},h,{className:E}))};E.propTypes=h,E.defaultProps=g,a.a=E}}]);