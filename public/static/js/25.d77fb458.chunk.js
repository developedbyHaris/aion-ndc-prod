(this["webpackJsonpaion-ndc-batam"]=this["webpackJsonpaion-ndc-batam"]||[]).push([[25],{670:function(e,t,a){},722:function(e,t,a){"use strict";a.r(t);var n=a(698),o=a(156),r=a(157),s=a(160),i=a(159),l=a(158),c=a(2),u=a.n(c),m=a(503),d=a(537),h=a(538),g=a(521),f=a(526),p=a(527),E=a(719),b=a(711),D=a(528),v=a(575),S=a(712),y=a(713),w=a(605),N=a(541),k=a(539),O=a(540),C=a(561),L=a(509),I=a.n(L),M=a(513),T=a.n(M),x=a(578),P=(a(596),a(670),a(510)),j=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=n.props.suggestions,a=e.currentTarget.value,o=t.filter((function(e){return e.toString().toLowerCase().indexOf(a.toString().toLowerCase())>-1}));n.setState({activeSuggestion:0,filteredSuggestions:o,showSuggestions:!0,userInput:e.currentTarget.value})},n.onClick=function(e){n.setState({activeSuggestion:0,filteredSuggestions:[],showSuggestions:!1,userInput:e.currentTarget.innerText})},n.onKeyDown=function(e){var t=n.state,a=t.activeSuggestion,o=t.filteredSuggestions;if(13===e.keyCode)n.setState({activeSuggestion:0,showSuggestions:!1,userInput:o[a]});else if(38===e.keyCode){if(0===a)return;n.setState({activeSuggestion:a-1})}else if(40===e.keyCode){if(a-1===o.length)return;n.setState({activeSuggestion:a+1})}},n.state={activeSuggestion:0,filteredSuggestions:[],showSuggestions:!1,userInput:""},n}return Object(r.a)(a,[{key:"render",value:function(){var e,t=this.onChange,a=this.onClick,n=this.onKeyDown,o=this.state,r=o.activeSuggestion,s=o.filteredSuggestions,i=o.showSuggestions,l=o.userInput;return i&&l&&(e=s.length?u.a.createElement("ul",{className:"suggestions"},s.map((function(e,t){var n;return t===r&&(n="suggestion-active"),u.a.createElement("li",{className:n,key:e,onClick:a},e)}))):u.a.createElement("div",{className:"no-suggestions text-danger"},u.a.createElement("em",null,"Customer/Divisi/Vendor belum teridentifikasi!"))),u.a.createElement(c.Fragment,null,u.a.createElement(k.a,{className:"mt-2"},u.a.createElement(N.a,{id:"customer_origin",name:"customer_origin",placeholder:"Requested by...",type:"text",onChange:t,onKeyDown:n,value:l,autoComplete:"off",required:!0}),u.a.createElement(O.a,{addonType:"prepend"},u.a.createElement(P.a,null,u.a.createElement("i",{className:"fa fa-binoculars"})))),e)}}]),a}(c.Component);j.defaultProps={suggestions:[]};var F=j,R=a(671),A=a(83),U=a.n(A),q=u.a.lazy((function(){return Promise.all([a.e(15),a.e(28)]).then(a.bind(null,718))})),J=u.a.lazy((function(){return a.e(26).then(a.bind(null,606))})),V=u.a.lazy((function(){return a.e(2).then(a.bind(null,695))})),Y=function(){return u.a.createElement("div",{className:"loader"},u.a.createElement(m.a,{style:{width:"1.5rem",height:"1.5rem"},color:"primary"}))},B=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).hideLoader=function(){r.setState({loader:!1})},r.showLoader=function(){r.setState({loader:!0,logData:[],logIsData:[],noData:!0})},r.showData=function(){r.setState({noData:!1})},r.hideData=function(){r.setState({noData:!0})},r.fetchMoreData=function(){var e=r.state,t=e.currentPage,a=e.todosPerPage,o=e.logData,s=e.logIsData;if(s.length>=o.length)r.setState({hasMore:!1});else{var i=t+1,l=i*a,c=l-a,u=o.slice(c,l);setTimeout((function(){r.setState({logIsData:[].concat(Object(n.a)(s),Object(n.a)(u)),currentPage:i})}),1e3)}},r.getData=function(e){r.setState({openInput:!1}),I.a.get("customer-origin/list").then((function(e){return e.json()})).then((function(t){if("INTERNAL"===e){var a=t.data.filter((function(e){return"INTERNAL"===e.type})).map((function(e){return e.name}));r.setState({inData:a,openInput:!r.state.openInput,reqLable:"Division Name ..."})}else if("CUSTOMER"===e){var n=t.data.filter((function(e){return"CUSTOMER"===e.type})).map((function(e){return e.name}));r.setState({inData:n,openInput:!r.state.openInput,reqLable:"Customer Name ..."})}else if("VENDOR"===e){var o=t.data.filter((function(e){return"VENDOR"===e.type})).map((function(e){return e.name}));r.setState({inData:o,openInput:!r.state.openInput,reqLable:"Vendor Name ..."})}else{var s=t.data.filter((function(e){return"OTHER"===e.type})).map((function(e){return e.name}));r.setState({inData:s,openInput:!r.state.openInput,reqLable:"Other Name ..."})}})).catch((function(e){I.a.notifMessage("Anda sedang offline","danger"),console.log(e)}))},r.state={logData:[],logIsData:[],currentPage:1,todosPerPage:10,hasMore:!0,editData:[],reqLable:"",inputDate:new Date,periodeDate:new Date,labelDate:"",openDetail:!1,openInput:!1,openForm:!1,openFilter:!1,reload:!1,inData:[],dOpen:0,dClose:0,dImportant:0,dUrgent:0,byStatus:"",noData:!0,filter:"",uuidRem:"",loader:!1},r.togleDetail=r.togleDetail.bind(Object(s.a)(r)),r.togleFilter=r.togleFilter.bind(Object(s.a)(r)),r.showlist=r.showlist.bind(Object(s.a)(r)),r.showPeriode=r.showPeriode.bind(Object(s.a)(r)),r.togleForm=r.togleForm.bind(Object(s.a)(r)),r.filterList=r.filterList.bind(Object(s.a)(r)),r.validModal=r.validModal.bind(Object(s.a)(r)),r.doRemove=r.doRemove.bind(Object(s.a)(r)),r.virtualData=r.virtualData.bind(Object(s.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.showPeriode()}},{key:"validModal",value:function(e){this.setState({uuidRem:e},I.a.swalNotif(this.doRemove,this.showPeriode))}},{key:"togleDetail",value:function(){this.setState({openDetail:!this.state.openDetail})}},{key:"togleForm",value:function(){this.setState({openForm:!this.state.openForm,openInput:!1,inData:[]}),document.addLog.reset()}},{key:"togleFilter",value:function(){this.setState({openFilter:!this.state.openFilter})}},{key:"virtualData",value:function(e){this.setState({logData:e});var t=this.state,a=t.todosPerPage,n=t.logData,o=n.slice(0,a);o.length>=n.length?this.setState({hasMore:!1,logIsData:o,currentPage:1}):this.setState({hasMore:!0,logIsData:o,currentPage:1})}},{key:"doRemove",value:function(){var e={uuid:this.state.uuidRem},t=JSON.stringify(e);I.a.remove("log/delete",t).then((function(e){return e.json()})).then((function(e){!0!==e.success&&(I.a.notifMessage(" Anda Salah","danger"),console.log("Something Else went wrong"))})).catch((function(e){I.a.notifMessage(" Koneksi Anda Salah","danger"),console.log("Something Catch error went wrong",e)}))}},{key:"sImportant",value:function(){var e=this,t=JSON.stringify({status:"IMPORTANT"});I.a.post("log/count/by/status",t).then((function(e){return e.json()})).then((function(t){e.setState({dImportant:t.data})}))}},{key:"sUrgent",value:function(){var e=this,t=JSON.stringify({status:"URGENT"});I.a.post("log/count/by/status",t).then((function(e){return e.json()})).then((function(t){e.setState({dUrgent:t.data})}))}},{key:"sClose",value:function(){var e=this,t=JSON.stringify({status:"CLOSE"});I.a.post("log/count/by/status",t).then((function(e){return e.json()})).then((function(t){e.setState({dClose:t.data})}))}},{key:"sOpen",value:function(){var e=this,t=JSON.stringify({status:"OPEN"});I.a.post("log/count/by/status",t).then((function(e){return e.json()})).then((function(t){e.setState({dOpen:t.data})})).catch((function(e){I.a.notifMessage("Anda sedang offline","danger"),console.log(e)}))}},{key:"getByStatus",value:function(e){var t=this,a=this;this.showLoader();var n={status:e},o=JSON.stringify(n);I.a.post("log/list/by/status",o).then((function(e){return e.json()})).then((function(e){if(!0===e.success)if(0===e.data.length)t.setState({logData:[]}),t.setState({noData:!1}),a.hideLoader();else{var n=e.data.sort((function(e,t){return t.date>e.date?1:-1}));t.setState({noData:!0}),t.virtualData(n),a.hideLoader()}else I.a.notifMessage("Anda Salah","danger"),a.hideLoader(),console.log("Something Else went wrong")})).catch((function(e){I.a.notifMessage("Koneksi Anda Salah","danger"),a.hideLoader(),console.log("Something Catch error went wrong",e)}))}},{key:"addLog",value:function(e){var t=this;e.preventDefault();var a={date:this.state.inputDate,shift:[{name:""},{name:""}],customer_origin:T()("#customer_origin").val(),note:T()("#note").val(),troubleshoot_progress:"",result:"",status:"OPEN",update_progress:""},n=JSON.stringify(a);I.a.post("log/store",n).then((function(e){return e.json()})).then((function(e){!0===e.success?(I.a.notifMessage("Log Baru berhasil ditambahkan","success"),t.togleForm(),t.showPeriode()):(I.a.notifMessage("Anda Salah","danger"),console.log("Something Else went wrong"))})).catch((function(e){I.a.notifMessage("Koneksi Anda Salah","danger"),t.hideLoader(),console.log("Something Catch error went wrong",e)}))}},{key:"showlist",value:function(e){var t=this,a=this;this.showLoader(),e.preventDefault(),T()("#cari").val(""),I.a.get("log/list").then((function(e){return e.json()})).then((function(e){if(0===e.data.length)t.setState({logData:[],noData:!1,openFilter:!1,labelDate:"All The Time"}),a.hideLoader();else{var n=e.data.sort((function(e,t){return t.date>e.date?1:-1}));t.setState({noData:!0,openFilter:!1,labelDate:"All The Time"}),t.virtualData(n),a.hideLoader()}})).catch((function(e){I.a.notifMessage("Anda sedang offline","danger"),a.hideLoader(),console.log(e)}))}},{key:"onChange",value:function(e){this.setState({periodeDate:e},(function(){this.showPeriode()}))}},{key:"showPeriode",value:function(){var e=this,t=this;this.showLoader(),T()("#cari").val("");var a=this.state.periodeDate,n=U()(a).format("MMMM YYYY"),o={month:a.getMonth()+1,year:a.getFullYear()},r=JSON.stringify(o);I.a.post("log/list/by/month/and/year",r).then((function(e){return e.json()})).then((function(a){if(0===a.data.length)e.setState({logData:[],noData:!1,openFilter:!1,labelDate:n}),t.hideLoader();else{var o=a.data.sort((function(e,t){return t.date>e.date?1:-1}));e.setState({noData:!0,openFilter:!1,labelDate:n}),t.virtualData(o),t.hideLoader()}e.sOpen(),e.sClose(),e.sUrgent(),e.sImportant()})).catch((function(e){I.a.notifMessage("Anda sedang offline","danger"),t.hideLoader(),console.log(e)}))}},{key:"filterList",value:function(e){var t=this,a=this;this.showLoader(),e.preventDefault();var n=T()("#cari").val(),o=n.toLowerCase();I.a.get("log/list").then((function(e){return e.json()})).then((function(e){return e.data.sort((function(e,t){return t.date>e.date?1:-1})).filter((function(e){return Object.keys(e).some((function(t){return"string"===typeof e[t]&&e[t].toLowerCase().includes(o)}))}))})).then((function(e){0===e.length?(t.setState({logData:[],noData:!1,labelDate:"All The Time | Serching for "+n.toUpperCase()}),a.hideLoader()):(t.setState({noData:!0,labelDate:"All The Time | Serching for : "+n.toUpperCase()}),t.virtualData(e),a.hideLoader())})).catch((function(e){I.a.notifMessage("Anda sedang offline","danger"),a.hideLoader(),console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.logIsData,n=t.logData,o=a,r=function(){return u.a.createElement("div",{className:"text-center p-2"},u.a.createElement(m.a,{style:{width:"1.5rem",height:"1.5rem"},color:"primary"}),u.a.createElement("hr",null),u.a.createElement("span",null,"Load ",u.a.createElement("strong",{className:"text-primary"},a.length,"/",n.length)," Data"))};return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(d.a,null,u.a.createElement(h.a,{xs:"12",sm:"6",md:"3"},u.a.createElement(c.Suspense,{fallback:Y()},u.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0"},u.a.createElement(J,{onClick:this.getByStatus.bind(this,"IMPORTANT"),header:this.state.dImportant.toString(),mainText:"Important",icon:"fa fa-star",color:"primary",variant:"1"})))),u.a.createElement(h.a,{xs:"12",sm:"6",md:"3"},u.a.createElement(c.Suspense,{fallback:Y()},u.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0"},u.a.createElement(J,{onClick:this.getByStatus.bind(this,"CLOSE"),header:this.state.dClose.toString(),mainText:"Complete",icon:"fa fa-coffee",color:"success",variant:"1"})))),u.a.createElement(h.a,{xs:"12",sm:"6",md:"3"},u.a.createElement(c.Suspense,{fallback:Y()},u.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0"},u.a.createElement(J,{onClick:this.getByStatus.bind(this,"OPEN"),header:this.state.dOpen.toString(),mainText:"Open",icon:"fa fa-cogs",color:"warning",variant:"1"})))),u.a.createElement(h.a,{xs:"12",sm:"6",md:"3"},u.a.createElement(c.Suspense,{fallback:Y()},u.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0"},u.a.createElement(J,{onClick:this.getByStatus.bind(this,"URGENT"),header:this.state.dUrgent.toString(),mainText:"Urgent",icon:"fa fa-heartbeat",color:"danger",variant:"1"}))))),u.a.createElement(f.a,{className:"m-0 mb-2"},u.a.createElement(p.a,{className:"btn-stack-overflow btn-brand",id:"newLog",onClick:this.togleForm},u.a.createElement("i",{className:"fa fa-cogs bg-transparent"}),u.a.createElement("span",{className:"m-0 font-weight-bold"},"Log Baru"),u.a.createElement("i",{className:"fa fa-plus float-right mr-0 bg-transparent",id:"tambah"}),u.a.createElement(E.a,{placement:"bottom",target:"tambah"},"Tambah Data")),u.a.createElement(b.a,{isOpen:this.state.openForm},u.a.createElement(D.a,{className:"text-muted"},u.a.createElement(d.a,null,u.a.createElement(h.a,{sm:"6"},u.a.createElement(v.a,{id:"addLog",name:"addLog",onSubmit:this.addLog.bind(this)},u.a.createElement(S.a,{row:!0},u.a.createElement(h.a,{md:"3"},u.a.createElement(y.a,{htmlFor:"date-input"},u.a.createElement("strong",null,"Date/Time"))),u.a.createElement(h.a,{xs:"12",md:"7"},u.a.createElement(x.DateTimePicker,{id:"date",max:new Date,defaultValue:this.state.inputDate,onChange:function(t){return e.setState({inputDate:t})}}))),u.a.createElement(S.a,{row:!0},u.a.createElement(h.a,{md:"3"},u.a.createElement(y.a,{htmlFor:"textarea-input"},u.a.createElement("strong",null,"Requester"))),u.a.createElement(h.a,{xs:"12",md:"9"},u.a.createElement(w.a,{"data-toggle":"buttons"},u.a.createElement(g.a,{outline:!0,color:"primary",onClick:this.getData.bind(this,"INTERNAL")},u.a.createElement(N.a,{type:"radio",name:"options",id:"option1",autoComplete:"off",hidden:!0}),"Internal"),u.a.createElement(g.a,{outline:!0,color:"primary",onClick:this.getData.bind(this,"CUSTOMER")},u.a.createElement(N.a,{type:"radio",name:"options",id:"option2",autoComplete:"off",hidden:!0}),"Customer"),u.a.createElement(g.a,{outline:!0,color:"primary",onClick:this.getData.bind(this,"VENDOR")},u.a.createElement(N.a,{type:"radio",name:"options",id:"option3",autoComplete:"off",hidden:!0}),"Vendor"),u.a.createElement(g.a,{outline:!0,color:"primary",onClick:this.getData.bind(this,"OTHER")},u.a.createElement(N.a,{type:"radio",name:"options",id:"option4",autoComplete:"off",hidden:!0}),"Other")),u.a.createElement(b.a,{isOpen:this.state.openInput},u.a.createElement(F,{key:this.state.inData,suggestions:this.state.inData})))),u.a.createElement(S.a,{row:!0},u.a.createElement(h.a,{md:"3"},u.a.createElement(y.a,{htmlFor:"textarea-input"},u.a.createElement("strong",null,"Issue"))),u.a.createElement(h.a,{xs:"12",md:"9"},u.a.createElement(N.a,{id:"note",type:"textarea",name:"issue-input",rows:"4",placeholder:"Issue...",required:!0}))),u.a.createElement(S.a,{row:!0},u.a.createElement(h.a,{align:"right"},u.a.createElement(g.a,{className:"btn-square",type:"submit",color:"primary"},u.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),u.a.createElement(g.a,{className:"btn-square",type:"reset",color:"danger"},u.a.createElement("i",{className:"fa fa-ban"})," Reset"))))))))),u.a.createElement(f.a,{className:"m-0"},u.a.createElement(p.a,{className:"btn-css3 btn-brand",id:"headingTwo"},u.a.createElement("i",{className:"fa fa-desktop bg-transparent"}),u.a.createElement("span",{className:"m-0 font-weight-bold"},"Daily Work Report | Periode ",this.state.labelDate),u.a.createElement("i",{id:"filter",className:"fa fa-filter float-right bg-transparent mr-0",onClick:this.togleFilter}),u.a.createElement(E.a,{placement:"bottom",target:"filter"},"Filter Data")),u.a.createElement(b.a,{isOpen:this.state.openFilter},u.a.createElement(D.a,null,u.a.createElement(d.a,null,u.a.createElement(h.a,{xs:"12",md:"1"},u.a.createElement(y.a,{htmlFor:"date-input",className:"text-muted"},u.a.createElement("strong",null,"Periode"))),u.a.createElement(h.a,{xs:"12",md:"3",className:"mb-1"},u.a.createElement(x.DateTimePicker,{placeholder:"Select periode...",onChange:this.onChange.bind(this),max:new Date,format:"MMMM YYYY",defaultView:"year",views:["year"],time:!1,footer:!1})),u.a.createElement(h.a,{xs:"12",md:"4",className:"mb-1"},u.a.createElement(g.a,{outline:!0,color:"primary",className:"",onClick:this.showlist},u.a.createElement("i",{className:"fa fa-calendar-check-o mr-2"}),"All The Time")),u.a.createElement(h.a,{xs:"12",md:"4",className:"mb-1"},u.a.createElement(v.a,{id:"caridata",name:"caridata",onSubmit:this.filterList},u.a.createElement(k.a,null,u.a.createElement(N.a,{type:"text",id:"cari",name:"cari",defaultValue:"",placeholder:"Pencarian...",required:!0}),u.a.createElement(O.a,{addonType:"prepend"},u.a.createElement(g.a,{type:"submit",color:"primary"},u.a.createElement("i",{className:"fa fa-search"})))))))))),u.a.createElement(R.a,{dataLength:this.state.logIsData.length,next:this.fetchMoreData,className:"mb-3 bg-light",hasMore:this.state.hasMore,loader:this.state.logIsData.length?u.a.createElement(r,null):null,endMessage:u.a.createElement("p",{style:{textAlign:"center"}},"Load ",u.a.createElement("strong",{className:"text-primary"},this.state.logIsData.length,"/",this.state.logData.length)," Data.")},u.a.createElement(C.a,{hover:!0,bordered:!0,responsive:!0,className:"numeral"},u.a.createElement("thead",{className:"btn-xing",align:"center"},u.a.createElement("tr",null,u.a.createElement("th",{scope:"row",hidden:!0},"uuid"),u.a.createElement("th",{scope:"row"},"Day"),u.a.createElement("th",{scope:"row",width:"130px"},"Date"),u.a.createElement("th",{scope:"row"},"Time"),u.a.createElement("th",{scope:"row"},"Status"),u.a.createElement("th",{scope:"row"},"Requester"),u.a.createElement("th",{scope:"row"},"Issue"),u.a.createElement("th",{scope:"row",width:"10%"},"Opened by"),u.a.createElement("th",{scope:"row",width:"10%"},"Last Update by"),u.a.createElement("th",{scope:"row"},"Action"))),u.a.createElement("tbody",null,u.a.createElement("tr",{hidden:!this.state.loader},u.a.createElement("td",{colSpan:"12",className:"bg-light text-center"},this.state.loader?u.a.createElement(Y,null):null)),o.map((function(t,a){return u.a.createElement(q,{key:a,daily:t,showPeriode:e.showPeriode,validModal:e.validModal})})),u.a.createElement("tr",{hidden:this.state.noData},u.a.createElement("td",{colSpan:"12",className:"bg-light text-muted"},"No Data Available ..."))))),u.a.createElement(V,null))}}]),a}(c.Component);t.default=B}}]);