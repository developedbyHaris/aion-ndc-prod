(this["webpackJsonpaion-ndc-batam"]=this["webpackJsonpaion-ndc-batam"]||[]).push([[24],{696:function(e,t,a){},820:function(e,t,a){"use strict";a.r(t);var n=a(796),o=a(156),i=a(157),r=a(161),s=a(159),l=a(158),c=a(2),u=a.n(c),m=a(505),d=a(517),h=a(518),g=a(526),f=a(532),p=a(533),E=a(817),v=a(809),b=a(534),D=a(591),S=a(810),y=a(811),N=a(631),w=a(545),k=a(543),O=a(544),L=a(575),C=a(511),T=a.n(C),I=a(512),x=a.n(I),M=a(594),R=(a(696),a(513)),j=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=n.props.suggestions,a=e.currentTarget.value;n.props.validinData(!0);var o=t.filter((function(e){return e.toString().toLowerCase().indexOf(a.toString().toLowerCase())>-1}));n.setState({activeSuggestion:0,filteredSuggestions:o,showSuggestions:!0,userInput:e.currentTarget.value})},n.onClick=function(e){n.setState({activeSuggestion:0,filteredSuggestions:[],showSuggestions:!1,userInput:e.currentTarget.innerText}),n.props.validinData(!1)},n.onKeyDown=function(e){var t=n.state,a=t.activeSuggestion,o=t.filteredSuggestions;if(n.props.validinData(!1),13===e.keyCode)n.setState({activeSuggestion:0,showSuggestions:!1,userInput:o[a]});else if(38===e.keyCode){if(0===a)return;n.setState({activeSuggestion:a-1})}else if(40===e.keyCode){if(a-1===o.length)return;n.setState({activeSuggestion:a+1})}},n.state={activeSuggestion:0,filteredSuggestions:[],showSuggestions:!1,userInput:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e,t=this.onChange,a=this.onClick,n=this.onKeyDown,o=this.state,i=o.activeSuggestion,r=o.filteredSuggestions,s=o.showSuggestions,l=o.userInput;return s&&l&&(e=r.length?u.a.createElement("ul",{className:"suggestions"},r.map((function(e,t){var n;return t===i&&(n="suggestion-active"),u.a.createElement("li",{className:n,key:e,onClick:a},e)}))):u.a.createElement("div",{className:"no-suggestions text-danger"},u.a.createElement("em",null,"Customer/Divisi/Vendor belum teridentifikasi!"))),u.a.createElement(c.Fragment,null,u.a.createElement(k.a,{className:"mt-2"},u.a.createElement(w.a,{id:"customer_origin",name:"customer_origin",placeholder:"Requested by...",type:"text",onChange:t,onKeyDown:n,value:l,autoComplete:"off"}),u.a.createElement(O.a,{addonType:"prepend"},u.a.createElement(R.a,null,u.a.createElement("i",{className:"fa fa-binoculars"})))),e)}}]),a}(c.Component);j.defaultProps={suggestions:[]};var P=j,F=a(697),A=a(612),q=a.n(A),U=a(83),V=a.n(U),J=u.a.lazy((function(){return Promise.all([a.e(15),a.e(28)]).then(a.bind(null,816))})),H=u.a.lazy((function(){return a.e(25).then(a.bind(null,632))})),Y=u.a.lazy((function(){return a.e(3).then(a.bind(null,563))})),B=function(){return u.a.createElement("div",{className:"loader"},u.a.createElement(m.a,{style:{width:"1.5rem",height:"1.5rem"},color:"primary"}))},K=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).hideLoader=function(){i.setState({loader:!1})},i.showLoader=function(){i.setState({loader:!0,logData:[],logIsData:[],noData:!0})},i.showData=function(){i.setState({noData:!1})},i.hideData=function(){i.setState({noData:!0})},i.fetchMoreData=function(){var e=i.state,t=e.currentPage,a=e.todosPerPage,o=e.logData,r=e.logIsData;if(r.length>=o.length)i.setState({hasMore:!1});else{var s=t+1,l=s*a,c=l-a,u=o.slice(c,l);setTimeout((function(){i.setState({logIsData:[].concat(Object(n.a)(r),Object(n.a)(u)),currentPage:s})}),1e3)}},i.getData=function(e){var t=i.state.active,a=e.target.value;e.preventDefault(),i.setState({openInput:!1,validinData:!0,Selection:e.target.value,active:!t}),T.a.get("customer-origin/list").then((function(e){return e.json()})).then((function(e){if("INTERNAL"===a){var t=e.data.filter((function(e){return"INTERNAL"===e.type})).map((function(e){return e.name}));i.setState({inData:t,openInput:!i.state.openInput,reqLable:"Division Name ..."})}else if("CUSTOMER"===a){var n=e.data.filter((function(e){return"CUSTOMER"===e.type})).map((function(e){return e.name}));i.setState({inData:n,openInput:!i.state.openInput,reqLable:"Customer Name ..."})}else if("VENDOR"===a){var o=e.data.filter((function(e){return"VENDOR"===e.type})).map((function(e){return e.name}));i.setState({inData:o,openInput:!i.state.openInput,reqLable:"Vendor Name ..."})}else{var r=e.data.filter((function(e){return"OTHER"===e.type})).map((function(e){return e.name}));i.setState({inData:r,openInput:!i.state.openInput,reqLable:"Other Name ..."})}})).catch((function(e){T.a.notifMessage("Anda sedang offline","danger"),console.log(e)}))},i.modules={toolbar:[["bold","italic","underline","link"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}]],clipboard:{matchVisual:!1}},i.formats=["bold","italic","underline","link","list","bullet","indent"],i.state={logData:[],logIsData:[],currentPage:1,todosPerPage:10,hasMore:!0,editData:[],reqLable:"",inputDate:new Date,periodeDate:new Date,labelDate:"",openDetail:!1,openInput:!1,openForm:!1,openFilter:!1,reload:!1,inData:[],validinData:!0,dOpen:0,dClose:0,dImportant:0,dUrgent:0,byStatus:"",noData:!0,filter:"",uuidRem:"",loader:!1,Selection:"",active:!1,editorHtml:"",editorText:""},i.togleDetail=i.togleDetail.bind(Object(r.a)(i)),i.togleFilter=i.togleFilter.bind(Object(r.a)(i)),i.showlist=i.showlist.bind(Object(r.a)(i)),i.showPeriode=i.showPeriode.bind(Object(r.a)(i)),i.togleForm=i.togleForm.bind(Object(r.a)(i)),i.filterList=i.filterList.bind(Object(r.a)(i)),i.validModal=i.validModal.bind(Object(r.a)(i)),i.doRemove=i.doRemove.bind(Object(r.a)(i)),i.virtualData=i.virtualData.bind(Object(r.a)(i)),i.validinData=i.validinData.bind(Object(r.a)(i)),i.quillInput=i.quillInput.bind(Object(r.a)(i)),i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.showPeriode()}},{key:"quillInput",value:function(e){var t=x()(e).text();this.setState({editorHtml:e,editorText:t})}},{key:"validinData",value:function(e){this.setState({validinData:e})}},{key:"validModal",value:function(e){this.setState({uuidRem:e},T.a.swalNotif(this.doRemove,this.showPeriode))}},{key:"togleDetail",value:function(){this.setState({openDetail:!this.state.openDetail})}},{key:"togleForm",value:function(){this.setState({openForm:!this.state.openForm,Selection:"",active:!1,openInput:!1,validinData:!0,editorHtml:"",inputDate:new Date,inData:[]}),document.addLog.reset()}},{key:"togleFilter",value:function(){this.setState({openFilter:!this.state.openFilter})}},{key:"virtualData",value:function(e){this.setState({logData:e});var t=this.state,a=t.todosPerPage,n=t.logData,o=n.slice(0,a);o.length>=n.length?this.setState({hasMore:!1,logIsData:o,currentPage:1}):this.setState({hasMore:!0,logIsData:o,currentPage:1})}},{key:"doRemove",value:function(){var e={uuid:this.state.uuidRem},t=JSON.stringify(e);T.a.remove("log/delete",t).then((function(e){return e.json()})).then((function(e){!0!==e.success&&(T.a.notifMessage(" Anda Salah","danger"),console.log("Something Else went wrong"))})).catch((function(e){T.a.notifMessage(" Koneksi Anda Salah","danger"),console.log("Something Catch error went wrong",e)}))}},{key:"sImportant",value:function(){var e=this,t=JSON.stringify({status:"IMPORTANT"});T.a.post("log/count/by/status",t).then((function(e){return e.json()})).then((function(t){e.setState({dImportant:t.data})}))}},{key:"sUrgent",value:function(){var e=this,t=JSON.stringify({status:"URGENT"});T.a.post("log/count/by/status",t).then((function(e){return e.json()})).then((function(t){e.setState({dUrgent:t.data})}))}},{key:"sClose",value:function(){var e=this,t=JSON.stringify({status:"CLOSE"});T.a.post("log/count/by/status",t).then((function(e){return e.json()})).then((function(t){e.setState({dClose:t.data})}))}},{key:"sOpen",value:function(){var e=this,t=JSON.stringify({status:"OPEN"});T.a.post("log/count/by/status",t).then((function(e){return e.json()})).then((function(t){e.setState({dOpen:t.data})})).catch((function(e){T.a.notifMessage("Anda sedang offline","danger"),console.log(e)}))}},{key:"getByStatus",value:function(e){var t=this,a=this;this.showLoader();var n={status:e},o=JSON.stringify(n);T.a.post("log/list/by/status",o).then((function(e){return e.json()})).then((function(e){if(!0===e.success)if(0===e.data.length)t.setState({logData:[]}),t.setState({noData:!1}),a.hideLoader();else{var n=e.data.sort((function(e,t){return t.date>e.date?1:-1}));t.setState({noData:!0}),t.virtualData(n),a.hideLoader()}else T.a.notifMessage("Anda Salah","danger"),a.hideLoader(),console.log("Something Else went wrong")})).catch((function(e){T.a.notifMessage("Koneksi Anda Salah","danger"),a.hideLoader(),console.log("Something Catch error went wrong",e)}))}},{key:"addLog",value:function(e){var t=this;e.preventDefault();var a={date:this.state.inputDate,shift:[{name:"-"},{name:"-"}],customer_origin:x()("#customer_origin").val(),note:this.state.editorHtml,troubleshoot_progress:"",result:"",status:"OPEN",update_progress:""},n=JSON.stringify(a);T.a.post("log/store",n).then((function(e){return e.json()})).then((function(e){!0===e.success?(T.a.notifMessage("Log Baru berhasil ditambahkan","success"),t.showPeriode()):(T.a.notifMessage("Anda Salah","danger"),console.log("Something Else went wrong"))})).then((function(){t.togleForm()})).catch((function(e){T.a.notifMessage("Koneksi Anda Salah","danger"),t.hideLoader(),console.log("Something Catch error went wrong",e)}))}},{key:"showlist",value:function(e){var t=this,a=this;this.showLoader(),e.preventDefault(),x()("#cari").val(""),T.a.get("log/list").then((function(e){return e.json()})).then((function(e){if(0===e.data.length)t.setState({logData:[],noData:!1,openFilter:!1,labelDate:"All The Time"}),a.hideLoader();else{var n=e.data.sort((function(e,t){return t.date>e.date?1:-1}));t.setState({noData:!0,openFilter:!1,labelDate:"All The Time"}),t.virtualData(n),a.hideLoader()}})).catch((function(e){T.a.notifMessage("Anda sedang offline","danger"),a.hideLoader(),console.log(e)}))}},{key:"onChange",value:function(e){this.setState({periodeDate:e},(function(){this.showPeriode()}))}},{key:"showPeriode",value:function(){var e=this,t=this;this.showLoader(),x()("#cari").val("");var a=this.state.periodeDate,n=V()(a).format("MMMM YYYY"),o={month:a.getMonth()+1,year:a.getFullYear()},i=JSON.stringify(o);T.a.post("log/list/by/month/and/year",i).then((function(e){return e.json()})).then((function(a){if(0===a.data.length)e.setState({logData:[],noData:!1,openFilter:!1,labelDate:n}),t.hideLoader();else{var o=a.data.sort((function(e,t){return t.date>e.date?1:-1}));e.setState({noData:!0,openFilter:!1,labelDate:n}),t.virtualData(o),t.hideLoader()}e.sOpen(),e.sClose(),e.sUrgent(),e.sImportant()})).catch((function(e){T.a.notifMessage("Anda sedang offline","danger"),t.hideLoader(),console.log(e)}))}},{key:"filterList",value:function(e){var t=this,a=this;this.showLoader(),e.preventDefault();var n=x()("#cari").val(),o=n.toLowerCase();T.a.get("log/list").then((function(e){return e.json()})).then((function(e){return e.data.sort((function(e,t){return t.date>e.date?1:-1})).filter((function(e){return Object.keys(e).some((function(t){return"string"===typeof e[t]&&e[t].toLowerCase().includes(o)}))}))})).then((function(e){0===e.length?(t.setState({logData:[],noData:!1,labelDate:"All The Time | Serching for "+n.toUpperCase()}),a.hideLoader()):(t.setState({noData:!0,labelDate:"All The Time | Serching for : "+n.toUpperCase()}),t.virtualData(e),a.hideLoader())})).catch((function(e){T.a.notifMessage("Anda sedang offline","danger"),a.hideLoader(),console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.logIsData,n=t.logData,o=t.Selection,i=a,r=function(){return u.a.createElement("div",{className:"text-center p-2"},u.a.createElement(m.a,{style:{width:"1.5rem",height:"1.5rem"},color:"primary"}),u.a.createElement("hr",null),u.a.createElement("span",null,"Load ",u.a.createElement("strong",{className:"text-primary"},a.length,"/",n.length)," Data"))};return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(d.a,null,u.a.createElement(h.a,{xs:"12",sm:"6",md:"3"},u.a.createElement(c.Suspense,{fallback:B()},u.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0"},u.a.createElement(H,{onClick:this.getByStatus.bind(this,"IMPORTANT"),header:this.state.dImportant.toString(),mainText:"Important",icon:"fa fa-star",color:"primary",variant:"1"})))),u.a.createElement(h.a,{xs:"12",sm:"6",md:"3"},u.a.createElement(c.Suspense,{fallback:B()},u.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0"},u.a.createElement(H,{onClick:this.getByStatus.bind(this,"CLOSE"),header:this.state.dClose.toString(),mainText:"Complete",icon:"fa fa-coffee",color:"success",variant:"1"})))),u.a.createElement(h.a,{xs:"12",sm:"6",md:"3"},u.a.createElement(c.Suspense,{fallback:B()},u.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0"},u.a.createElement(H,{onClick:this.getByStatus.bind(this,"OPEN"),header:this.state.dOpen.toString(),mainText:"Open",icon:"fa fa-cogs",color:"warning",variant:"1"})))),u.a.createElement(h.a,{xs:"12",sm:"6",md:"3"},u.a.createElement(c.Suspense,{fallback:B()},u.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0"},u.a.createElement(H,{onClick:this.getByStatus.bind(this,"URGENT"),header:this.state.dUrgent.toString(),mainText:"Urgent",icon:"fa fa-heartbeat",color:"danger",variant:"1"}))))),u.a.createElement(f.a,{className:"m-0 mb-2"},u.a.createElement(p.a,{className:"btn-stack-overflow btn-brand",id:"newLog",onClick:this.togleForm},u.a.createElement("i",{className:"fa fa-cogs bg-transparent"}),u.a.createElement("span",{className:"m-0 font-weight-bold"},"Log Baru"),u.a.createElement("i",{className:"fa fa-plus float-right mr-0 bg-transparent",id:"tambah"}),u.a.createElement(E.a,{placement:"bottom",target:"tambah"},"Tambah Data")),u.a.createElement(v.a,{isOpen:this.state.openForm},u.a.createElement(b.a,{className:"text-muted"},u.a.createElement(d.a,null,u.a.createElement(h.a,{sm:"6"},u.a.createElement(D.a,{id:"addLog",className:"container",name:"addLog",onSubmit:this.addLog.bind(this),onReset:this.togleForm},u.a.createElement(S.a,{row:!0},u.a.createElement(h.a,{md:"3"},u.a.createElement(y.a,{htmlFor:"date-input"},u.a.createElement("strong",null,"Date/Time"))),u.a.createElement(h.a,{xs:"12",md:"7"},u.a.createElement(M.DateTimePicker,{id:"date",format:"LLL",max:new Date,value:this.state.inputDate,onChange:function(t){return e.setState({inputDate:t})}}))),u.a.createElement(S.a,{row:!0},u.a.createElement(h.a,{md:"3"},u.a.createElement(y.a,{htmlFor:"textarea-input"},u.a.createElement("strong",null,"Requester"))),u.a.createElement(h.a,{xs:"12",md:"9"},u.a.createElement(N.a,{"data-toggle":"buttons"},u.a.createElement(g.a,{outline:!0,className:"INTERNAL"===o?"active":null,id:"INTERNAL",value:"INTERNAL",color:"primary",onClick:this.getData},"Internal"),u.a.createElement(g.a,{outline:!0,className:"CUSTOMER"===o?"active":null,id:"CUSTOMER",value:"CUSTOMER",color:"primary",onClick:this.getData},"Customer"),u.a.createElement(g.a,{outline:!0,className:"VENDOR"===o?"active":null,id:"VENDOR",value:"VENDOR",color:"primary",onClick:this.getData},"Vendor"),u.a.createElement(g.a,{outline:!0,className:"OTHER"===o?"active":null,id:"OTHER",value:"OTHER",color:"primary",onClick:this.getData},"Other")),u.a.createElement(v.a,{isOpen:this.state.openInput},u.a.createElement(P,{key:this.state.inData,suggestions:this.state.inData,validinData:this.validinData})))),u.a.createElement(S.a,{row:!0},u.a.createElement(h.a,{md:"3"},u.a.createElement(y.a,{htmlFor:"textarea-input"},u.a.createElement("strong",null,"Issue"))),u.a.createElement(h.a,{xs:"12",md:"9"},u.a.createElement(q.a,{id:"note",name:"issue-input",theme:"snow",placeholder:"Write something...",onChange:this.quillInput,value:this.state.editorHtml,modules:this.modules,formats:this.formats,readOnly:this.state.validinData}),u.a.createElement(w.a,{required:!0,type:"text",defaultValue:this.state.editorText,style:{height:"0px",opacity:0}}))),u.a.createElement(S.a,{row:!0},u.a.createElement(h.a,{align:"right"},u.a.createElement(g.a,{disabled:this.state.validinData,hidden:this.state.validinData,className:"btn-square animated fadeIn",type:"submit",color:"primary"},u.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),u.a.createElement(g.a,{className:"btn-square",type:"reset",color:"danger"},u.a.createElement("i",{className:"fa fa-ban"})," Cancel"))))))))),u.a.createElement(f.a,{className:"m-0"},u.a.createElement(p.a,{className:"btn-css3 btn-brand",id:"headingTwo",onClick:this.togleFilter},u.a.createElement("i",{className:"fa fa-desktop bg-transparent"}),u.a.createElement("span",{className:"m-0 font-weight-bold"},"Daily Work Report | Periode ",this.state.labelDate),u.a.createElement("i",{id:"filter",className:"fa fa-filter float-right bg-transparent mr-0"}),u.a.createElement(E.a,{placement:"bottom",target:"filter"},"Filter Data")),u.a.createElement(v.a,{isOpen:this.state.openFilter},u.a.createElement(b.a,null,u.a.createElement(d.a,null,u.a.createElement(h.a,{xs:"12",md:"1"},u.a.createElement(y.a,{htmlFor:"date-input",className:"text-muted"},u.a.createElement("strong",null,"Periode"))),u.a.createElement(h.a,{xs:"12",md:"3",className:"mb-1"},u.a.createElement(M.DateTimePicker,{id:"dateFilter",placeholder:"Select periode...",onChange:this.onChange.bind(this),max:new Date,format:"MMMM YYYY",views:["year"],time:!1,footer:!1})),u.a.createElement(h.a,{xs:"12",md:"4",className:"mb-1"},u.a.createElement(g.a,{outline:!0,color:"primary",className:"",onClick:this.showlist},u.a.createElement("i",{className:"fa fa-calendar-check-o mr-2"}),"All The Time")),u.a.createElement(h.a,{xs:"12",md:"4",className:"mb-1"},u.a.createElement(D.a,{id:"caridata",name:"caridata",onSubmit:this.filterList},u.a.createElement(k.a,null,u.a.createElement(w.a,{type:"text",id:"cari",name:"cari",defaultValue:"",placeholder:"Pencarian...",required:!0}),u.a.createElement(O.a,{addonType:"prepend"},u.a.createElement(g.a,{type:"submit",color:"primary"},u.a.createElement("i",{className:"fa fa-search"})))))))))),u.a.createElement(F.a,{dataLength:this.state.logIsData.length,next:this.fetchMoreData,className:"mb-3 bg-light",hasMore:this.state.hasMore,loader:this.state.logIsData.length?u.a.createElement(r,null):null,endMessage:u.a.createElement("p",{align:"center"},"Load ",u.a.createElement("strong",{className:"text-primary"},this.state.logIsData.length,"/",this.state.logData.length)," Data.")},u.a.createElement(L.a,{hover:!0,bordered:!0,responsive:!0,className:"numeral"},u.a.createElement("thead",{className:"btn-xing",align:"center"},u.a.createElement("tr",null,u.a.createElement("th",{scope:"row",hidden:!0},"uuid"),u.a.createElement("th",{scope:"row"},"Day"),u.a.createElement("th",{scope:"row",width:"130px"},"Date"),u.a.createElement("th",{scope:"row"},"Time"),u.a.createElement("th",{scope:"row"},"Status"),u.a.createElement("th",{scope:"row"},"Requester"),u.a.createElement("th",{scope:"row"},"Issue"),u.a.createElement("th",{scope:"row",width:"10%"},"Opened by"),u.a.createElement("th",{scope:"row",width:"10%"},"Last Update by"),u.a.createElement("th",{scope:"row"},"Action"))),u.a.createElement("tbody",null,u.a.createElement("tr",{hidden:!this.state.loader},u.a.createElement("td",{colSpan:"12",className:"bg-light text-center"},this.state.loader?u.a.createElement(B,null):null)),i.map((function(t,a){return u.a.createElement(J,{key:a,daily:t,showPeriode:e.showPeriode,validModal:e.validModal})})),u.a.createElement("tr",{hidden:this.state.noData},u.a.createElement("td",{colSpan:"12",className:"bg-light text-muted"},"No Data Available ..."))))),u.a.createElement(Y,null))}}]),a}(c.Component);t.default=K}}]);