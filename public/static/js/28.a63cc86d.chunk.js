(this["webpackJsonpaion-ndc-batam"]=this["webpackJsonpaion-ndc-batam"]||[]).push([[28],{718:function(e,a,t){"use strict";t.r(a);var l=t(699),r=t(2),n=t.n(r),s=t(702),m=t(605),c=t(521),o=t(719),u=t(711),i=t(622),d=t(623),E=t(537),g=t(538),p=t(713),f=t(566),h=t(575),b=t(562),N=t(563),x=t(712),w=t(541),_=t(564),y=t(83),O=t.n(y),C=t(411),S=t.n(C),v=t(509),L=t.n(v),k=t(513),R=t.n(k),T=t(696),j=t.n(T),D=t(578);t(596);a.default=function(e){var a=e.daily,t=e.index,y=e.showPeriode,C=e.validModal,v=Object(r.useState)({editData:[]}),k=Object(l.a)(v,2),T=k[0],A=k[1],M=Object(r.useState)(a.date),P=Object(l.a)(M,2),F=P[0],U=P[1],q=Object(r.useState)(null),z=Object(l.a)(q,2),V=z[0],I=z[1],J=function(e){return"CLOSE"===e?"success":"OPEN"===e?"warning":"URGENT"===e?"danger":"primary"};""===a.troubleshoot_progress&&(a.troubleshoot_progress="-"),""===a.result&&(a.result="-"),""===a.update_progress&&(a.update_progress="-");var G,B=Object(r.useState)(!1),K=Object(l.a)(B,2),H=K[0],Q=K[1],W=function(){return Q(!H)},X=Object(r.useState)(!1),Y=Object(l.a)(X,2),Z=Y[0],$=Y[1],ee=function(){return $(!Z)},ae=a.date,te=a.updatedAt,le=O()(te).locale("id",S.a).format("LLLL"),re=O()(ae).locale("id",S.a),ne=re.format("dddd"),se=re.format("LL"),me=re.format("LT"),ce=a.created_by,oe=a.updated_by;return null===oe&&(oe={name:"-"}),[n.a.createElement("tr",{id:"rowRow",key:a.uuid.toString(),className:"table-"+J(a.status)},n.a.createElement("td",{hidden:!0},a.uuid),n.a.createElement("td",null,ne),n.a.createElement("td",null,se),n.a.createElement("td",null,me),n.a.createElement("td",null,n.a.createElement("h6",null,n.a.createElement(s.a,{pill:!0,color:J(a.status)},n.a.createElement("i",{className:"fa fa-circle mr-1"}),a.status))),n.a.createElement("td",null,a.customer_origin),n.a.createElement("td",null,n.a.createElement(j.a,{charLimit:70,readMoreText:"Read more \u25bc",readLessText:"Read less \u25b2",readMoreClassName:"read-more-less--more",readLessClassName:"read-more-less--less"},a.note)),n.a.createElement("td",null,ce.name),n.a.createElement("td",null,oe.name),n.a.createElement("td",null,n.a.createElement(m.a,{size:"sm"},n.a.createElement(c.a,{id:"Detail",hidden:(G=a.updated_by,null===G),onClick:W,className:"text-light bg-success"},n.a.createElement("i",{className:"fa fa-eye"})),n.a.createElement(o.a,{placement:"bottom",target:"Detail"},"Show Detail"),n.a.createElement(c.a,{id:"Edit",onClick:function(e){return function(e,a){e.preventDefault();var t={uuid:a},l=JSON.stringify(t);L.a.post("log/find",l).then((function(e){return e.json()})).then((function(e){A(e.data),I(e.data.status),ee()})).catch((function(e){L.a.notifMessage("Anda sedang offline","danger"),console.log("Something Catch error went wrong",e)}))}(e,a.uuid)},className:"text-light bg-primary"},n.a.createElement("i",{className:"fa fa-pencil"})),n.a.createElement(o.a,{placement:"bottom",target:"Edit"},"Edit Log"),n.a.createElement(c.a,{id:"Remove",key:ae,onClick:function(){return C(a.uuid)},className:"text-light bg-danger"},n.a.createElement("i",{className:"fa fa-close"})),n.a.createElement(o.a,{placement:"bottom",target:"Remove"},"Remove Log")))),n.a.createElement("tr",{key:t+a.uuid,hidden:!H,className:"bg-gray-200"},n.a.createElement("td",{colSpan:"12",className:"p-0 m-0"},n.a.createElement(u.a,{isOpen:H},n.a.createElement(i.a,{className:"list-group-accent text-muted",onClick:W,tag:"div"},n.a.createElement(d.a,{className:"list-group-item-accent-"+J(a.status)},n.a.createElement(E.a,null,n.a.createElement(g.a,{md:"2"},n.a.createElement(p.a,null,n.a.createElement("strong",null,"Troubleshoot Progress"))),n.a.createElement(g.a,{xs:"12",md:"10"},a.troubleshoot_progress))),n.a.createElement(d.a,{className:"list-group-item-accent-"+J(a.status)},n.a.createElement(E.a,null,n.a.createElement(g.a,{md:"2"},n.a.createElement(p.a,null,n.a.createElement("strong",null,"Result"))),n.a.createElement(g.a,{xs:"12",md:"10"},a.result))),n.a.createElement(d.a,{className:"list-group-item-accent-"+J(a.status)},n.a.createElement(E.a,null,n.a.createElement(g.a,{md:"2"},n.a.createElement(p.a,null,n.a.createElement("strong",null,"Notes"))),n.a.createElement(g.a,{xs:"12",md:"10"},a.update_progress))),n.a.createElement(d.a,{className:"list-group-item-accent-"+J(a.status)},n.a.createElement(E.a,null,n.a.createElement(g.a,{md:"2"},n.a.createElement(p.a,null,n.a.createElement("strong",null,"Last Updated By"))),n.a.createElement(g.a,{xs:"12",md:"4"},oe.name))),n.a.createElement(d.a,{className:"list-group-item-accent-"+J(a.status)},n.a.createElement(E.a,null,n.a.createElement(g.a,{md:"2"},n.a.createElement(p.a,null,n.a.createElement("strong",null,"At"))),n.a.createElement(g.a,{xs:"12",md:"4"},le)))),n.a.createElement(f.a,{key:T.uuid,isOpen:Z,toggle:ee,className:"modal-lg modal-"+J(a.status)},n.a.createElement(h.a,{id:"editLog",name:"editLog",onSubmit:function(e){e.preventDefault();var a={uuid:T.uuid,date:F,shift:[{name:""},{name:""}],customer_origin:R()("#mCustomer_origin").val(),note:R()("#mNote").val(),troubleshoot_progress:R()("#mTroubleshoot_progress").val(),result:R()("#mResult").val(),status:V,update_progress:R()("#mUpdate_progress").val()},t=JSON.stringify(a);L.a.put("log/update",t).then((function(e){return e.json()})).then((function(e){!0===e.success?(y(),ee(),L.a.notifMessage(" Log berhasil diubah","success")):(L.a.notifMessage(" Anda Selalu Salah","danger"),console.log("Something Else went wrong"))})).catch((function(e){L.a.notifMessage(" Koneksi Anda bermasalah","danger"),console.log("Something Catch error went wrong",e)}))}},n.a.createElement(b.a,{toggle:ee},"Edit Log"),n.a.createElement(N.a,null,n.a.createElement(E.a,null,n.a.createElement(g.a,{xs:"12",md:"7"},n.a.createElement(x.a,{row:!0},n.a.createElement(g.a,{md:"3"},n.a.createElement(p.a,{htmlFor:"date-input"},n.a.createElement("strong",null,"Date/Time"))),n.a.createElement(g.a,{xs:"12",md:"9"},n.a.createElement(D.DateTimePicker,{id:"mDate",max:new Date,defaultValue:new Date(F),onChange:function(e){return U(e)}}))),n.a.createElement(x.a,{row:!0},n.a.createElement(g.a,{md:"3"},n.a.createElement(p.a,{htmlFor:"date-input"},n.a.createElement("strong",null,"Status"))),n.a.createElement(g.a,{xs:"12",md:"9"},n.a.createElement(m.a,{id:"mStatus",required:!0,size:"sm"},n.a.createElement(c.a,{size:"sm",className:"btn-pill",color:"ghost-warning",onClick:function(){return I("OPEN")},active:"OPEN"===V},"\u26ab\xa0Open"),n.a.createElement(c.a,{size:"sm",className:"btn-pill",color:"ghost-success",onClick:function(){return I("CLOSE")},active:"CLOSE"===V},"\u26ab\xa0Close"),n.a.createElement(c.a,{size:"sm",className:"btn-pill",color:"ghost-primary",onClick:function(){return I("IMPORTANT")},active:"IMPORTANT"===V},"\u26ab\xa0Important"),n.a.createElement(c.a,{size:"sm",className:"btn-pill",color:"ghost-danger",onClick:function(){return I("URGENT")},active:"URGENT"===V},"\u26ab\xa0Urgent")))),n.a.createElement(x.a,{row:!0},n.a.createElement(g.a,{md:"3"},n.a.createElement(p.a,{htmlFor:"textarea-input"},n.a.createElement("strong",null,"Requester"))),n.a.createElement(g.a,{xs:"12",md:"9"},n.a.createElement(w.a,{id:"mCustomer_origin",name:"mCustomer_origin",type:"text",defaultValue:T.customer_origin,required:!0}))),n.a.createElement(x.a,{row:!0},n.a.createElement(g.a,{md:"3"},n.a.createElement(p.a,{htmlFor:"textarea-input"},n.a.createElement("strong",null,"Issue"))),n.a.createElement(g.a,{xs:"12",md:"9"},n.a.createElement(w.a,{id:"mNote",name:"mNote",type:"textarea",rows:"2",defaultValue:T.note,required:!0})))),n.a.createElement(g.a,{xs:"12",md:"5"},n.a.createElement(x.a,{row:!0},n.a.createElement(g.a,{md:"3"},n.a.createElement(p.a,{htmlFor:"textarea-input"},n.a.createElement("strong",null,"Progress"))),n.a.createElement(g.a,{xs:"12",md:"9"},n.a.createElement(w.a,{id:"mTroubleshoot_progress",type:"textarea",name:"troubleshoot_progress",rows:"2",defaultValue:T.troubleshoot_progress,placeholder:"Add troubleshoot progress..."}))),n.a.createElement(x.a,{row:!0},n.a.createElement(g.a,{md:"3"},n.a.createElement(p.a,{htmlFor:"textarea-input"},n.a.createElement("strong",null,"Result"))),n.a.createElement(g.a,{xs:"12",md:"9"},n.a.createElement(w.a,{id:"mResult",type:"textarea",name:"result",rows:"2",defaultValue:T.result,placeholder:"Add result..."}))),n.a.createElement(x.a,{row:!0},n.a.createElement(g.a,{md:"3"},n.a.createElement(p.a,{htmlFor:"textarea-input"},n.a.createElement("strong",null,"Note"))),n.a.createElement(g.a,{xs:"12",md:"9"},n.a.createElement(w.a,{id:"mUpdate_progress",type:"textarea",name:"update_progress",rows:"2",defaultValue:T.update_progress,placeholder:"Add note ..."})))))),n.a.createElement(_.a,{className:"bg-gray-200"},n.a.createElement(m.a,null,n.a.createElement(c.a,{className:"btn-square float-right",type:"submit",color:"primary"},n.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),n.a.createElement(c.a,{onClick:ee,className:"btn-square float-right",color:"danger"},n.a.createElement("i",{className:"fa fa-close"})," Cancel"))))))))]}}}]);