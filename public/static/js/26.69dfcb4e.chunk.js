(this["webpackJsonpaion-ndc-batam"]=this["webpackJsonpaion-ndc-batam"]||[]).push([[26],{1201:function(e,t,a){"use strict";a.r(t);var n=a(155),l=a(156),i=a(160),r=a(158),o=a(157),s=a(2),c=a.n(s),d=a(571),m=a(572),u=a(1202),g=a(1190),h=a(573),p=a(536),f=a(537),E=a(662),v=a(1193),b=a(627),S=a(586),D=a(546),y=a(628),w=a(693),N=a(1205),x=a(1191),k=a(1192),F=a(1194),L=a(521),C=a.n(L),O=a(522),j=a.n(O),T=a(614),M=a(692),A=a.n(M),I=a(622),G=a.n(I),_=a(547),B=a(83),R=a.n(B),q=a(164),V=a.n(q),J=a(165),H=a.n(J),P=a(703),z=(a(926),a(927)),Y=a.n(z);R.a.updateLocale("id",V.a),H()();var K=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).showData=function(){l.setState({noData:!1})},l.hideData=function(){l.setState({noData:!0})},l.modules={toolbar:[["bold","italic","underline","link"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}]],clipboard:{matchVisual:!1}},l.formats=["bold","italic","underline","link","list","bullet","indent"],l.state={openForm:!1,groupData:[],groupFind:"",openSelect:!0,devSelect:!0,itemData:[],editorHtml:"",editorText:"",inputDate:new Date,openFilter:!1,logData:[],devSubmit:!1,uuidRem:"",findData:[],vendorData:[],fDevices:[],modalEdit:!1,actionInput:"",editDate:"",labelData:"All Device",lastAction:"",noData:!0},l.getLog=l.getLog.bind(Object(i.a)(l)),l.togleForm=l.togleForm.bind(Object(i.a)(l)),l.listGroup=l.listGroup.bind(Object(i.a)(l)),l.listDeviceByGroup=l.listDeviceByGroup.bind(Object(i.a)(l)),l.listDevice=l.listDevice.bind(Object(i.a)(l)),l.grpSelect=l.grpSelect.bind(Object(i.a)(l)),l.devSelect=l.devSelect.bind(Object(i.a)(l)),l.addLog=l.addLog.bind(Object(i.a)(l)),l.quillInput=l.quillInput.bind(Object(i.a)(l)),l.togleFilter=l.togleFilter.bind(Object(i.a)(l)),l.doRemove=l.doRemove.bind(Object(i.a)(l)),l.findData=l.findData.bind(Object(i.a)(l)),l.doEdit=l.doEdit.bind(Object(i.a)(l)),l.listByGroup=l.listByGroup.bind(Object(i.a)(l)),l.listByDevice=l.listByDevice.bind(Object(i.a)(l)),l.resetFilter=l.resetFilter.bind(Object(i.a)(l)),l.exportLog=l.exportLog.bind(Object(i.a)(l)),l.modEdit=l.modEdit.bind(Object(i.a)(l)),l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getLog()}},{key:"togleFilter",value:function(){this.listGroup(),this.setState({openFilter:!this.state.openFilter,openForm:!1})}},{key:"togleForm",value:function(){this.listGroup(),this.setState({openForm:!this.state.openForm,openFilter:!1,editorHtml:"",inputDate:new Date,devSelect:!0,itemData:[],openSelect:!0}),document.addLog.reset()}},{key:"getLog",value:function(){var e=this;C.a.get("device-log/list").then((function(e){return e.json()})).then((function(t){0===t.data.length&&e.setState({noData:!1}),e.setState({logData:t.data,noData:!0})})).catch((function(e){C.a.notifMessage("Anda sedang offline","danger"),j()(".page-loader-wrapper").hide(),console.log(e,"Something Catch error went wrong")}))}},{key:"listGroup",value:function(){var e=this;C.a.get("device-tag/list").then((function(e){return e.json()})).then((function(t){e.setState({groupData:t.data})})).catch((function(e){C.a.notifMessage("Anda sedang offline","danger"),j()(".page-loader-wrapper").hide(),console.log(e,"Something Catch error went wrong")}))}},{key:"listDevice",value:function(e){var t=this,a={device_tags_id:e},n=JSON.stringify(a);C.a.post("device/list/by/group",n).then((function(e){return e.json()})).then((function(e){t.setState({itemData:e.data})})).then((function(){return t.grpSelect()})).catch((function(e){C.a.notifMessage("Anda sedang offline","danger"),j()(".page-loader-wrapper").hide(),console.log(e,"Something Catch error went wrong")}))}},{key:"listDeviceByGroup",value:function(e){var t=this,a=e.target[e.target.selectedIndex].text,n={device_tags_id:e.target.value},l=JSON.stringify(n);this.listVendor(a),C.a.post("device/list/by/group",l).then((function(e){return e.json()})).then((function(e){t.setState({itemData:e.data})})).then((function(){return t.grpSelect()})).catch((function(e){C.a.notifMessage("Anda sedang offline","danger"),j()(".page-loader-wrapper").hide(),console.log(e,"Something Catch error went wrong")}))}},{key:"listVendor",value:function(e){var t=this,a={type:"VENDOR",unit:e},n=JSON.stringify(a);C.a.post("customer-origin/list/by/desk",n).then((function(e){return e.json()})).then((function(e){t.setState({vendorData:e.data})})).then((function(){return t.grpSelect()})).catch((function(e){C.a.notifMessage("Anda sedang offline","danger"),j()(".page-loader-wrapper").hide(),console.log(e,"Something Catch error went wrong")}))}},{key:"exportLog",value:function(){var e=new P.default("p","pt"),t=j()("#tabelhistory")[0],a=e.autoTableHtmlToJson(t),n=this.state.labelData,l=R()(new Date).format("LLLL"),i=R()(new Date).format("LL"),r=R()().format("YYYY");e.setFontSize(11),e.setTextColor(100),e.autoTable(a.columns,a.data,{didDrawPage:function(t){e.setFontSize(18),e.setTextColor(40),e.addImage(Y.a,"PNG",t.settings.margin.left,40,150,43),e.text("NDC Batam Maintenance Log",210,60),e.setFontSize(14),e.text(n,210,80),e.setFontSize(9);var a="Page "+e.internal.getNumberOfPages();"function"===typeof e.putTotalPages&&(a+=" of {total_pages_count_string}");var l=e.internal.pageSize,i=l.height?l.height:l.getHeight();e.text(a,t.settings.margin.left,i-40),e.text("AION Apps NDC Batam \xa9 2018 - "+r+" NDC Batam. All Right Reserved",t.settings.margin.left,i-27)},margin:{top:112}}),"function"===typeof e.putTotalPages&&e.putTotalPages("{total_pages_count_string}"),e.setFontSize(9),e.text("This report is generated by system.",40,e.lastAutoTable.finalY+20),e.text("Print date : "+l,40,e.lastAutoTable.finalY+33),e.save("Report_Maintenance_"+n+"-"+i+".pdf")}},{key:"listByGroup",value:function(e){var t=this,a=e.target[e.target.selectedIndex].text;this.listDevice(e.target.value);var n={device_tags_id:e.target.value},l=JSON.stringify(n);C.a.post("device-log/list/by/group",l).then((function(e){return e.json()})).then((function(e){t.setState({logData:e.data}),0===e.data.length?t.setState({noData:!1,labelData:a}):t.setState({labelData:a,noData:!0})})).catch((function(e){C.a.notifMessage("Anda sedang offline","danger"),j()(".page-loader-wrapper").hide(),console.log(e,"Something Catch error went wrong")}))}},{key:"listByDevice",value:function(e){var t=this,a=e.target[e.target.selectedIndex].text,n={device_id:e.target.value},l=JSON.stringify(n);C.a.post("device-log/list/by/item",l).then((function(e){return e.json()})).then((function(e){t.setState({logData:e.data}),0===e.data.length?t.setState({noData:!1,labelData:a}):t.setState({labelData:a,noData:!0})})).then((function(){return t.grpSelect()})).catch((function(e){C.a.notifMessage("Anda sedang offline","danger"),j()(".page-loader-wrapper").hide(),console.log(e,"Something Catch error went wrong")}))}},{key:"resetFilter",value:function(){this.getLog(),this.setState({labelData:"All Device",itemData:[],groupData:[],openSelect:!0}),this.togleFilter()}},{key:"addLog",value:function(e){var t=this;e.preventDefault(),this.setState({devSubmit:!0});var a={date:this.state.inputDate,device_id:j()("#itemname").val(),issue:this.state.editorHtml,action:"",vendor:j()("#vendor").val()},n=JSON.stringify(a);C.a.post("device-log/store",n).then((function(e){return e.json()})).then((function(e){!0===e.success?(C.a.notifMessage("Log Baru berhasil ditambahkan","success"),t.getLog()):(C.a.notifMessage("Anda Salah","danger"),console.log("Something Else went wrong")),t.setState({devSubmit:!1})})).then((function(){t.togleForm()})).catch((function(e){C.a.notifMessage("Koneksi Anda Salah","danger"),t.hideLoader(),console.log("Something Catch error went wrong",e),t.setState({devSubmit:!1})}))}},{key:"findGroupByName",value:function(e){var t=this,a={uuid:e},n=JSON.stringify(a);C.a.post("device-tag/find",n).then((function(e){return e.json()})).then((function(e){!0===e.success?t.listVendor(e.data.name):(C.a.notifMessage("Anda Selalu Salah","danger"),console.log("Something Else went wrong"))})).catch((function(e){C.a.notifMessage(" Anda sedang offline, data tidak tersimpan","danger"),console.log("Something Catch error went wrong",e)}))}},{key:"findData",value:function(e,t){var a=this;e.preventDefault(),this.listGroup();var n={uuid:t},l=JSON.stringify(n);C.a.post("device-log/find",l).then((function(e){return e.json()})).then((function(e){var t=e.data.devices.device_tags_id;a.setState({findData:e.data,fDevices:e.data.devices,editorText:e.data.issue,editDate:new Date(e.data.date)}),a.findGroupByName(t),a.listDevice(t)})).then((function(){C.a.swalLoading(a.modEdit,"Generate data")})).catch((function(e){C.a.notifMessage("Anda sedang offline","danger"),console.log("Something Catch error went wrong",e)}))}},{key:"modEdit",value:function(){this.setState({modalEdit:!this.state.modalEdit})}},{key:"doEdit",value:function(e){var t=this;e.preventDefault(),this.setState({devSubmit:!0});var a=this.state,n={uuid:a.findData.uuid,date:a.editDate,device_id:j()("#edititem").val(),issue:a.editorHtml||a.findData.issue,action:a.actionInput||a.findData.action,vendor:j()("#editvendor").val()},l=JSON.stringify(n);C.a.put("device-log/update",l).then((function(e){return e.json()})).then((function(e){!0===e.success?(t.setState({devSubmit:!1}),t.getLog(),C.a.notifMessage("Log berhasil diubah","success")):(C.a.notifMessage("Anda Selalu Salah","danger"),console.log("Something Else went wrong"))})).catch((function(e){C.a.notifMessage(" Anda sedang offline, data tidak tersimpan","danger"),console.log("Something Catch error went wrong",e)})),this.setState({modalEdit:!this.state.modalEdit})}},{key:"doRemove",value:function(){var e={uuid:this.state.uuidRem},t=JSON.stringify(e);C.a.remove("device-log/remove",t).then((function(e){return e.json()})).then((function(e){!0===e.success?j()(".page-loader-wrapper").hide():(C.a.notifMessage("Anda Selalu Salah","danger"),j()(".page-loader-wrapper").hide(),console.log("Something Else went wrong"))})).catch((function(e){C.a.notifMessage("Koneksi Anda bermasalah","danger"),j()(".page-loader-wrapper").hide(),console.log("Something Catch error went wrong",e)}))}},{key:"validModal",value:function(e){this.setState({uuidRem:e}),C.a.swalNotif(this.doRemove,this.getLog)}},{key:"grpSelect",value:function(){0!==this.state.itemData.length?this.setState({openSelect:!1}):this.setState({openSelect:!0,devSelect:!0})}},{key:"devSelect",value:function(e){0!==e.target.value?this.setState({devSelect:!1}):this.setState({devSelect:!0})}},{key:"quillInput",value:function(e){var t=j()(e).text();this.setState({editorHtml:e,editorText:t})}},{key:"render",value:function(){var e=this,t=this.state.groupData,a=this.state.itemData,n=this.state.vendorData,l=this.state.logData,i=this.state.modalEdit,r=this.state.findData,o=this.state.fDevices;return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(d.a,{className:"m-0 mb-2"},c.a.createElement(m.a,{className:"btn-dribbble btn-brand",id:"newLog",onClick:this.togleForm},c.a.createElement("i",{className:"icon-umbrella bg-transparent font-weight-bold"}),c.a.createElement("span",{className:"m-0 font-weight-bold"},"Tambah History"),c.a.createElement("i",{id:"add",className:"fa fa-plus float-right mr-0 bg-transparent"}),c.a.createElement(u.a,{placement:"bottom",target:"add"},"Tambah Data")),c.a.createElement(g.a,{isOpen:this.state.openForm},c.a.createElement(h.a,{className:"text-muted"},c.a.createElement(p.a,null,c.a.createElement(f.a,{sm:"8"},c.a.createElement(E.a,{id:"addLog",className:"container",name:"addLog",onSubmit:this.addLog,onReset:this.togleForm},c.a.createElement(v.a,null,c.a.createElement(p.a,null,c.a.createElement(f.a,{md:"2"},c.a.createElement(b.a,{htmlFor:"date-input"},c.a.createElement("strong",null,"Date/Time"))),c.a.createElement(f.a,{xs:"12",md:"5"},c.a.createElement(T.DateTimePicker,{id:"date",name:"date",format:"LL",time:!1,max:new Date,value:this.state.inputDate,onChange:function(t){return e.setState({inputDate:t})}})))),c.a.createElement(v.a,null,c.a.createElement(p.a,null,c.a.createElement(f.a,{md:"2",lg:"2"},c.a.createElement(b.a,{htmlFor:"select-input"},c.a.createElement("strong",null,"Group"))),c.a.createElement(f.a,{xs:"12",md:"3",lg:"3",className:"mb-2"},c.a.createElement(S.a,{id:"itemgroup",type:"select",required:!0,onChange:this.listDeviceByGroup},c.a.createElement("option",{value:"0"},"Select"),t.map((function(e){return c.a.createElement("option",{key:e.id,value:e.uuid},e.name)})))),c.a.createElement(f.a,{md:"1",lg:"1"},c.a.createElement(b.a,{htmlFor:"select-input2"},c.a.createElement("strong",null,"Device"))),c.a.createElement(f.a,{xs:"12",md:"5",lg:"5"},c.a.createElement(S.a,{id:"itemname",type:"select",disabled:this.state.openSelect,onChange:this.devSelect,required:!0},c.a.createElement("option",{value:"0"},"Select"),a.map((function(e){return c.a.createElement("option",{key:e.id,value:e.uuid},e.name)})))))),c.a.createElement(v.a,{hidden:this.state.devSelect,className:"animated fadeIn"},c.a.createElement(p.a,null,c.a.createElement(f.a,{md:"2",lg:"2"},c.a.createElement(b.a,{htmlFor:"select-input"},c.a.createElement("strong",null,"Vendor"))),c.a.createElement(f.a,{xs:"12",md:"5",lg:"5"},c.a.createElement(S.a,{id:"vendor",type:"select",required:!0},n.map((function(e){return c.a.createElement("option",{key:e.id,value:e.name},e.name)})))))),c.a.createElement(v.a,{hidden:this.state.devSelect,className:"animated fadeIn"},c.a.createElement(p.a,null,c.a.createElement(f.a,{md:"2"},c.a.createElement(b.a,{htmlFor:"textarea-input"},c.a.createElement("strong",null,"Issue"))),c.a.createElement(f.a,{xs:"12",md:"9"},c.a.createElement(G.a,{id:"issue-input",name:"issue-input",theme:"snow",placeholder:"Write something...",onChange:this.quillInput,value:this.state.editorHtml,modules:this.modules,formats:this.formats}),c.a.createElement(S.a,{required:!0,type:"text",defaultValue:this.state.editorText,style:{height:"0px",opacity:0}})))),c.a.createElement(v.a,null,c.a.createElement(p.a,{hidden:this.state.devSelect,className:"animated fadeIn"},c.a.createElement(f.a,{md:"2"}),c.a.createElement(f.a,null,c.a.createElement(D.a,{disabled:this.state.devSubmit,className:"btn-square",type:"submit",color:"primary"},c.a.createElement("i",{className:"fa fa-dot-circle-o"})," ",c.a.createElement("strong",null,"Submit")),c.a.createElement(D.a,{className:"btn-square",type:"reset",color:"danger"},c.a.createElement("i",{className:"fa fa-ban mr-1"}),c.a.createElement("strong",null,"Cancel"))))))))))),c.a.createElement("div",{id:"print"},c.a.createElement(d.a,{className:"m-0"},c.a.createElement(m.a,{className:"btn-css3 btn-brand",id:"headingTwo",onClick:this.togleFilter},c.a.createElement("i",{className:"fa fa-desktop bg-transparent"}),c.a.createElement("span",{className:"m-0 font-weight-bold"},"Maintenance Log | ",this.state.labelData," "),c.a.createElement("i",{id:"filter",className:"fa fa-filter float-right bg-transparent mr-0"}),c.a.createElement(u.a,{placement:"bottom",target:"filter"},"Filter Data")),c.a.createElement(g.a,{isOpen:this.state.openFilter},c.a.createElement(h.a,null,c.a.createElement(p.a,null,c.a.createElement(f.a,{md:"1",lg:"1"},c.a.createElement(b.a,{htmlFor:"select-input"},c.a.createElement("strong",null,"Group"))),c.a.createElement(f.a,{xs:"12",md:"2",lg:"2",className:"mb-3"},c.a.createElement(S.a,{id:"filtergroup",type:"select",required:!0,onChange:this.listByGroup},c.a.createElement("option",{value:"0"},"Select"),t.map((function(e){return c.a.createElement("option",{key:e.id,value:e.uuid,name:e.name},e.name)})))),c.a.createElement(f.a,{md:"1",lg:"1"},c.a.createElement(b.a,{htmlFor:"select-input2"},c.a.createElement("strong",null,"Device"))),c.a.createElement(f.a,{xs:"12",md:"2",lg:"2",className:"mb-3"},c.a.createElement(S.a,{id:"filterdevice",type:"select",disabled:this.state.openSelect,onChange:this.listByDevice},c.a.createElement("option",{value:"0"},"Select"),a.map((function(e){return c.a.createElement("option",{key:e.id,value:e.uuid},e.name)})))),c.a.createElement(f.a,{xs:"12",md:"6"},c.a.createElement(D.a,{outline:!0,color:"danger",className:"btn-square",onClick:this.resetFilter},c.a.createElement("strong",null,c.a.createElement("i",{className:"fa fa-close mr-2"}),"Reset Filter")),c.a.createElement(D.a,{color:"primary",className:"btn-square btn-vimeo ml-1 float-right",onClick:this.exportLog},c.a.createElement("strong",null,c.a.createElement("i",{className:"icon-rocket mr-2"}),"Export Log"))))))),c.a.createElement(y.a,{hover:!0,bordered:!0,responsive:!0,striped:!0,id:"tabelhistory",className:"tabelhistory"},c.a.createElement("thead",{className:"btn-reddit",align:"center"},c.a.createElement("tr",null,c.a.createElement("th",{scope:"row",width:"50px"},"#"),c.a.createElement("th",{scope:"row",width:"220px"},"Date"),c.a.createElement("th",{scope:"row"},"Unit"),c.a.createElement("th",{scope:"row"},"Issue"),c.a.createElement("th",{scope:"row"},"Action"),c.a.createElement("th",{scope:"row"},"Vendor"),c.a.createElement("th",{scope:"row"},c.a.createElement("i",{className:"fa fa-cogs"})))),c.a.createElement("tbody",{className:"bg-light text-center"},l.map((function(t,a){return c.a.createElement("tr",{key:t.uuid},c.a.createElement("td",{className:"text-dark"},a+1),c.a.createElement("td",null,R()(t.date).format("dddd, LL")),c.a.createElement("td",null,t.devices.name),c.a.createElement("td",null,c.a.createElement(A.a,{readMoreText:"Read more \u25bc",readLessText:"Read less \u25b2",readMoreClassName:"read-more-less--more",readLessClassName:"read-more-less--less"},t.issue)),c.a.createElement("td",null,c.a.createElement(A.a,{readMoreText:"Read more \u25bc",readLessText:"Read less \u25b2",readMoreClassName:"read-more-less--more",readLessClassName:"read-more-less--less"},t.action)),c.a.createElement("td",null,t.vendor),c.a.createElement("td",null,c.a.createElement(w.a,{size:"sm"},c.a.createElement(D.a,{id:"Edit"+t.id,onClick:function(a){return e.findData(a,t.uuid)},className:"text-light bg-primary"},c.a.createElement("i",{className:"fa fa-pencil"})),c.a.createElement(u.a,{placement:"bottom",target:"Edit"+t.id},"Edit Device"),c.a.createElement(D.a,{id:"Remove"+t.id,onClick:e.validModal.bind(e,t.uuid),className:"text-light bg-danger"},c.a.createElement("i",{className:"fa fa-close"})),c.a.createElement(u.a,{placement:"bottom",target:"Remove"+t.id},"Remove Device"))))})),c.a.createElement("tr",{hidden:this.state.noData},c.a.createElement("td",{colSpan:"12",className:"bg-cyan text-light",align:"center"},"No data available"))))),c.a.createElement(N.a,{key:r.uuid,isOpen:i,size:"xl",toggle:function(){return e.setState({modalEdit:!i})},backdrop:"static"},c.a.createElement(E.a,{id:"editLogDev",name:"editLogDev",onSubmit:this.doEdit},c.a.createElement(x.a,{className:"btn-reddit",toggle:function(){return e.setState({modalEdit:!e.state.modalEdit})}},c.a.createElement("i",{className:"fa fa-pencil mr-2"}),"Edit History"),c.a.createElement(k.a,null,c.a.createElement(p.a,{className:"mr-2 ml-2"},c.a.createElement(f.a,{xs:"12",md:"8"},c.a.createElement(v.a,null,c.a.createElement(p.a,null,c.a.createElement(f.a,{md:"2"},c.a.createElement(b.a,{htmlFor:"date-Edit"},c.a.createElement("strong",null,"Date/Time"))),c.a.createElement(f.a,{xs:"12",md:"6"},c.a.createElement(T.DateTimePicker,{id:"dateEdit",name:"dateEdit",format:"LL",time:!1,max:new Date,defaultValue:new Date(this.state.editDate),onChange:function(t){return e.setState({editDate:t})}})))),c.a.createElement(v.a,null,c.a.createElement(p.a,null,c.a.createElement(f.a,{md:"2",lg:"2"},c.a.createElement(b.a,{htmlFor:"select-input"},c.a.createElement("strong",null,"Group"))),c.a.createElement(f.a,{xs:"12",md:"3",lg:"3",className:"mb-2"},c.a.createElement(S.a,{id:"editroup",type:"select",onChange:this.listDeviceByGroup,defaultValue:o.device_tags_id},t.map((function(e){return c.a.createElement("option",{key:e.id,value:e.uuid},e.name)})))),c.a.createElement(f.a,{md:"1",lg:"1"},c.a.createElement(b.a,{htmlFor:"select-input2"},c.a.createElement("strong",null,"Device"))),c.a.createElement(f.a,{xs:"12",md:"5",lg:"5"},c.a.createElement(S.a,{id:"edititem",type:"select",onChange:this.devSelect,defaultValue:o.uuid},a.map((function(e){return c.a.createElement("option",{key:e.id,value:e.uuid},e.name)})))))),c.a.createElement(v.a,{className:"animated fadeIn"},c.a.createElement(p.a,null,c.a.createElement(f.a,{md:"2",lg:"2"},c.a.createElement(b.a,{htmlFor:"select-input"},c.a.createElement("strong",null,"Vendor"))),c.a.createElement(f.a,{xs:"12",md:"5",lg:"5"},c.a.createElement(S.a,{id:"editvendor",type:"select",defaultValue:r.vendor},n.map((function(e){return c.a.createElement("option",{key:e.id,value:e.name},e.name)})))))))),c.a.createElement("hr",{style:{color:"teal",backgroundColor:"teal",height:1}}),c.a.createElement(p.a,{className:"mr-2 ml-2"},c.a.createElement(f.a,{md:"6"},c.a.createElement(v.a,null,c.a.createElement(p.a,null,c.a.createElement(f.a,{md:"2"},c.a.createElement(b.a,{htmlFor:"textarea-input"},c.a.createElement("strong",null,"Issue"))),c.a.createElement(f.a,{xs:"12",md:"10"},c.a.createElement(G.a,{id:"issue-input",name:"issue-input",theme:"snow",onChange:this.quillInput,defaultValue:r.issue,modules:this.modules,formats:this.formats}),c.a.createElement(S.a,{required:!0,type:"text",readOnly:this.state.editorText,style:{height:"0px",opacity:0}}))))),c.a.createElement(f.a,{md:"6"},c.a.createElement(v.a,null,c.a.createElement(p.a,null,c.a.createElement(f.a,{md:"2"},c.a.createElement(b.a,{htmlFor:"textarea-input"},c.a.createElement("strong",null,"Action"))),c.a.createElement(f.a,{xs:"12",md:"10"},c.a.createElement(G.a,{id:"action-input",name:"action-input",theme:"snow",onChange:function(t){return e.setState({actionInput:t})},defaultValue:r.action,modules:this.modules,formats:this.formats}))))))),c.a.createElement(F.a,{className:"bg-gray-200"},c.a.createElement(w.a,null,c.a.createElement(D.a,{className:"btn-square float-right",type:"submit",color:"primary",disabled:this.state.devSubmit},c.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),c.a.createElement(D.a,{onClick:function(){return e.setState({modalEdit:!i})},className:"btn-square float-right",color:"danger"},c.a.createElement("i",{className:"fa fa-close"})," Cancel"))))),c.a.createElement(_.a,null))}}]),a}(s.Component);t.default=K},547:function(e,t,a){"use strict";var n=a(155),l=a(156),i=a(158),r=a(157),o=a(2),s=a.n(o),c=a(546),d=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,i=new Array(l),r=0;r<l;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={intervalId:0},e}return Object(l.a)(a,[{key:"scrollStep",value:function(){0===window.pageYOffset&&clearInterval(this.state.intervalId),window.scroll(0,window.pageYOffset-50)}},{key:"scrollToTop",value:function(){var e=setInterval(this.scrollStep.bind(this),16.66);this.setState({intervalId:e})}},{key:"render",value:function(){var e=this;return s.a.createElement(c.a,{title:"Back to top",className:"scroll",onClick:function(){e.scrollToTop()}},s.a.createElement("i",{className:"fa fa-chevron-up arrow-up"}))}}]),a}(o.Component);t.a=d},927:function(e,t,a){e.exports=a.p+"static/media/ndc.363a2a8e.png"}}]);