(this["webpackJsonpaion-ndc-batam"]=this["webpackJsonpaion-ndc-batam"]||[]).push([[21],{526:function(e,a,t){"use strict";var n=t(18),r=t(44),s=t(2),l=t.n(s),c=t(9),o=t.n(c),i=t(154),d=t.n(i),u=t(81),m={tag:u.q,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,s=e.color,c=e.body,o=e.inverse,i=e.outline,m=e.tag,b=e.innerRef,f=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(u.m)(d()(a,"card",!!o&&"text-white",!!c&&"card-body",!!s&&(i?"border":"bg")+"-"+s),t);return l.a.createElement(m,Object(n.a)({},f,{className:p,ref:b}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},527:function(e,a,t){"use strict";var n=t(18),r=t(44),s=t(2),l=t.n(s),c=t(9),o=t.n(c),i=t(154),d=t.n(i),u=t(81),m={tag:u.q,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,s=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),o=Object(u.m)(d()(a,"card-header"),t);return l.a.createElement(s,Object(n.a)({},c,{className:o}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},528:function(e,a,t){"use strict";var n=t(18),r=t(44),s=t(2),l=t.n(s),c=t(9),o=t.n(c),i=t(154),d=t.n(i),u=t(81),m={tag:u.q,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,s=e.innerRef,c=e.tag,o=Object(r.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.m)(d()(a,"card-body"),t);return l.a.createElement(c,Object(n.a)({},o,{className:i,ref:s}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},561:function(e,a,t){"use strict";var n=t(18),r=t(44),s=t(2),l=t.n(s),c=t(9),o=t.n(c),i=t(154),d=t.n(i),u=t(81),m={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:u.q,responsiveTag:u.q,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},b=function(e){var a=e.className,t=e.cssModule,s=e.size,c=e.bordered,o=e.borderless,i=e.striped,m=e.dark,b=e.hover,f=e.responsive,p=e.tag,g=e.responsiveTag,v=e.innerRef,E=Object(r.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),h=Object(u.m)(d()(a,"table",!!s&&"table-"+s,!!c&&"table-bordered",!!o&&"table-borderless",!!i&&"table-striped",!!m&&"table-dark",!!b&&"table-hover"),t),j=l.a.createElement(p,Object(n.a)({},E,{ref:v,className:h}));if(f){var N=Object(u.m)(!0===f?"table-responsive":"table-responsive-"+f,t);return l.a.createElement(g,{className:N},j)}return j};b.propTypes=m,b.defaultProps={tag:"table",responsiveTag:"div"},a.a=b},714:function(e,a,t){"use strict";t.r(a);var n=t(156),r=t(157),s=t(160),l=t(159),c=t(158),o=t(2),i=t.n(o),d=t(537),u=t(538),m=t(526),b=t(527),f=t(528),p=t(561),g=t(702),v=t(509),E=t.n(v),h=t(513),j=t.n(h),N=Object(o.lazy)((function(){return Promise.all([t.e(1),t.e(19)]).then(t.bind(null,697))})),O=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={userData:[]},r.addlist=r.addlist.bind(Object(s.a)(r)),r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.addlist()}},{key:"addlist",value:function(){var e=this;E.a.get("auth/list").then((function(e){return e.json()})).then((function(a){e.setState({userData:a.data}),console.log(JSON.stringify(a.data))})).catch((function(e){E.a.notifMessage("Anda sedang offline","danger"),j()(".page-loader-wrapper").hide(),console.log("Something Catch error went wrong")}))}},{key:"render",value:function(){var e=this.state.userData.filter((function(e){return"Root"!==e.role.name}));return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(d.a,{className:"flex-row"},i.a.createElement(u.a,{xl:8},i.a.createElement(m.a,null,i.a.createElement(b.a,{className:"bg-gray-900 text-light"},i.a.createElement("i",{className:"fa fa-align-justify"})," Users List"),i.a.createElement(f.a,null,i.a.createElement(p.a,{responsive:!0,hover:!0,size:"sm",className:"tutop"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{scope:"col"},"#"),i.a.createElement("th",{scope:"col"},"Name"),i.a.createElement("th",{scope:"col"},"Email"),i.a.createElement("th",{scope:"col"},"Role"),i.a.createElement("th",{scope:"col"},"Status"))),i.a.createElement("tbody",null,e.map((function(e,a){var t=e.is_active;t=!0===t?"Active":"Inactive";var n=function(e){return"Active"===e?"success":"danger"};return i.a.createElement("tr",{key:e.id,className:"table-"+n(t)},i.a.createElement("td",{className:"text-dark"},a+1),i.a.createElement("td",{className:"text-dark"},i.a.createElement("b",null,e.name)),i.a.createElement("td",null,e.email),i.a.createElement("td",null,e.role.name),i.a.createElement("td",null,i.a.createElement(g.a,{color:n(t)},t)))}))))))),i.a.createElement(u.a,{xl:4},i.a.createElement(N,null))))}}]),t}(o.Component);a.default=O}}]);