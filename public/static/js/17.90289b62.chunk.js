(this["webpackJsonpaion-ndc-batam"]=this["webpackJsonpaion-ndc-batam"]||[]).push([[17],{508:function(a,e,t){"use strict";function s(){var a=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==a&&void 0!==a&&this.setState(a)}function n(a){this.setState(function(e){var t=this.constructor.getDerivedStateFromProps(a,e);return null!==t&&void 0!==t?t:null}.bind(this))}function r(a,e){try{var t=this.props,s=this.state;this.props=a,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,s)}finally{this.props=t,this.state=s}}function c(a){var e=a.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof a.getDerivedStateFromProps&&"function"!==typeof e.getSnapshotBeforeUpdate)return a;var t=null,c=null,l=null;if("function"===typeof e.componentWillMount?t="componentWillMount":"function"===typeof e.UNSAFE_componentWillMount&&(t="UNSAFE_componentWillMount"),"function"===typeof e.componentWillReceiveProps?c="componentWillReceiveProps":"function"===typeof e.UNSAFE_componentWillReceiveProps&&(c="UNSAFE_componentWillReceiveProps"),"function"===typeof e.componentWillUpdate?l="componentWillUpdate":"function"===typeof e.UNSAFE_componentWillUpdate&&(l="UNSAFE_componentWillUpdate"),null!==t||null!==c||null!==l){var o=a.displayName||a.name,i="function"===typeof a.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+o+" uses "+i+" but also contains the following legacy lifecycles:"+(null!==t?"\n  "+t:"")+(null!==c?"\n  "+c:"")+(null!==l?"\n  "+l:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof a.getDerivedStateFromProps&&(e.componentWillMount=s,e.componentWillReceiveProps=n),"function"===typeof e.getSnapshotBeforeUpdate){if("function"!==typeof e.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=r;var m=e.componentDidUpdate;e.componentDidUpdate=function(a,e,t){var s=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:t;m.call(this,a,e,s)}}return a}t.r(e),t.d(e,"polyfill",(function(){return c})),s.__suppressDeprecationWarning=!0,n.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0},529:function(a,e,t){"use strict";t.d(e,"a",(function(){return n}));var s=t(2),n=t.n(s).a.createContext({})},620:function(a,e,t){"use strict";var s=t(18),n=t(31),r=t(2),c=t.n(r),l=t(508),o=t(9),i=t.n(o),m=t(154),p=t.n(m),u=t(529),v=t(81),d={tag:v.q,activeTab:i.a.any,className:i.a.string,cssModule:i.a.object},g=function(a){function e(e){var t;return(t=a.call(this,e)||this).state={activeTab:t.props.activeTab},t}return Object(n.a)(e,a),e.getDerivedStateFromProps=function(a,e){return e.activeTab!==a.activeTab?{activeTab:a.activeTab}:null},e.prototype.render=function(){var a=this.props,e=a.className,t=a.cssModule,n=a.tag,r=Object(v.n)(this.props,Object.keys(d)),l=Object(v.m)(p()("tab-content",e),t);return c.a.createElement(u.a.Provider,{value:{activeTabId:this.state.activeTab}},c.a.createElement(n,Object(s.a)({},r,{className:l})))},e}(r.Component);Object(l.polyfill)(g),e.a=g,g.propTypes=d,g.defaultProps={tag:"div"}},621:function(a,e,t){"use strict";t.d(e,"a",(function(){return d}));var s=t(18),n=t(44),r=t(2),c=t.n(r),l=t(9),o=t.n(l),i=t(154),m=t.n(i),p=t(529),u=t(81),v={tag:u.q,className:o.a.string,cssModule:o.a.object,tabId:o.a.any};function d(a){var e=a.className,t=a.cssModule,r=a.tabId,l=a.tag,o=Object(n.a)(a,["className","cssModule","tabId","tag"]),i=function(a){return Object(u.m)(m()("tab-pane",e,{active:r===a}),t)};return c.a.createElement(p.a.Consumer,null,(function(a){var e=a.activeTabId;return c.a.createElement(l,Object(s.a)({},o,{className:i(e)}))}))}d.propTypes=v,d.defaultProps={tag:"div"}},622:function(a,e,t){"use strict";var s=t(18),n=t(44),r=t(2),c=t.n(r),l=t(9),o=t.n(l),i=t(154),m=t.n(i),p=t(81),u={tag:p.q,flush:o.a.bool,className:o.a.string,cssModule:o.a.object,horizontal:o.a.oneOfType([o.a.bool,o.a.string])},v=function(a){var e=a.className,t=a.cssModule,r=a.tag,l=a.flush,o=a.horizontal,i=Object(n.a)(a,["className","cssModule","tag","flush","horizontal"]),u=Object(p.m)(m()(e,"list-group",l?"list-group-flush":function(a){return!1!==a&&(!0===a||"xs"===a?"list-group-horizontal":"list-group-horizontal-"+a)}(o)),t);return c.a.createElement(r,Object(s.a)({},i,{className:u}))};v.propTypes=u,v.defaultProps={tag:"ul",horizontal:!1},e.a=v},623:function(a,e,t){"use strict";var s=t(18),n=t(44),r=t(2),c=t.n(r),l=t(9),o=t.n(l),i=t(154),m=t.n(i),p=t(81),u={tag:p.q,active:o.a.bool,disabled:o.a.bool,color:o.a.string,action:o.a.bool,className:o.a.any,cssModule:o.a.object},v=function(a){a.preventDefault()},d=function(a){var e=a.className,t=a.cssModule,r=a.tag,l=a.active,o=a.disabled,i=a.action,u=a.color,d=Object(n.a)(a,["className","cssModule","tag","active","disabled","action","color"]),g=Object(p.m)(m()(e,!!l&&"active",!!o&&"disabled",!!i&&"list-group-item-action",!!u&&"list-group-item-"+u,"list-group-item"),t);return o&&(d.onClick=v),c.a.createElement(r,Object(s.a)({},d,{className:g}))};d.propTypes=u,d.defaultProps={tag:"li"},e.a=d},707:function(a,e,t){"use strict";t.r(e);var s=t(105),n=t(156),r=t(157),c=t(160),l=t(159),o=t(158),i=t(2),m=t.n(i),p=t(703),u=t(700),v=t(701),d=t(620),g=t(621),f=t(622),E=t(623),b=t(154),h=t.n(b),N=function(a){Object(l.a)(t,a);var e=Object(o.a)(t);function t(a){var s;return Object(n.a)(this,t),(s=e.call(this,a)).toggle=s.toggle.bind(Object(c.a)(s)),s.state={activeTab:"1"},s}return Object(r.a)(t,[{key:"toggle",value:function(a){this.state.activeTab!==a&&this.setState({activeTab:a})}},{key:"render",value:function(){var a=this,e=this.props;e.children,Object(s.a)(e,["children"]);return m.a.createElement(m.a.Fragment,null,m.a.createElement(p.a,{tabs:!0},m.a.createElement(u.a,null,m.a.createElement(v.a,{className:h()({active:"1"===this.state.activeTab}),onClick:function(){a.toggle("1")}},m.a.createElement("i",{className:"icon-calendar mr-2"}),m.a.createElement("strong",null,"Schadule")))),m.a.createElement(d.a,{activeTab:this.state.activeTab},m.a.createElement(g.a,{tabId:"1"},m.a.createElement(f.a,{className:"list-group-accent",tag:"div"},m.a.createElement(E.a,{className:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},"Today"),m.a.createElement(E.a,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-warning list-group-item-divider"},m.a.createElement("div",{className:"avatar float-right"},m.a.createElement("img",{className:"img-avatar",src:"assets/img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"})),m.a.createElement("div",null,"Meeting with ",m.a.createElement("strong",null,"Lucas")," "),m.a.createElement("small",{className:"text-muted mr-3"},m.a.createElement("i",{className:"icon-calendar"}),"\xa0 1 - 3pm"),m.a.createElement("small",{className:"text-muted"},m.a.createElement("i",{className:"icon-location-pin"})," Palo Alto, CA")),m.a.createElement(E.a,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-info list-group-item-divider"},m.a.createElement("div",{className:"avatar float-right"},m.a.createElement("img",{className:"img-avatar",src:"assets/img/avatars/4.jpg",alt:"admin@bootstrapmaster.com"})),m.a.createElement("div",null,"Skype with ",m.a.createElement("strong",null,"Megan")),m.a.createElement("small",{className:"text-muted mr-3"},m.a.createElement("i",{className:"icon-calendar"}),"\xa0 4 - 5pm"),m.a.createElement("small",{className:"text-muted"},m.a.createElement("i",{className:"icon-social-skype"})," On-line")),m.a.createElement(E.a,{className:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},"Tomorrow"),m.a.createElement(E.a,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-danger list-group-item-divider"},m.a.createElement("div",null,"New UI Project - ",m.a.createElement("strong",null,"deadline")),m.a.createElement("small",{className:"text-muted mr-3"},m.a.createElement("i",{className:"icon-calendar"}),"\xa0 10 - 11pm"),m.a.createElement("small",{className:"text-muted"},m.a.createElement("i",{className:"icon-home"}),"\xa0 creativeLabs HQ"),m.a.createElement("div",{className:"avatars-stack mt-2"},m.a.createElement("div",{className:"avatar avatar-xs"},m.a.createElement("img",{src:"assets/img/avatars/2.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),m.a.createElement("div",{className:"avatar avatar-xs"},m.a.createElement("img",{src:"assets/img/avatars/3.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),m.a.createElement("div",{className:"avatar avatar-xs"},m.a.createElement("img",{src:"assets/img/avatars/4.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),m.a.createElement("div",{className:"avatar avatar-xs"},m.a.createElement("img",{src:"assets/img/avatars/5.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),m.a.createElement("div",{className:"avatar avatar-xs"},m.a.createElement("img",{src:"assets/img/avatars/6.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})))),m.a.createElement(E.a,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-success list-group-item-divider"},m.a.createElement("div",null,m.a.createElement("strong",null,"#10 Startups.Garden")," Meetup"),m.a.createElement("small",{className:"text-muted mr-3"},m.a.createElement("i",{className:"icon-calendar"}),"\xa0 1 - 3pm"),m.a.createElement("small",{className:"text-muted"},m.a.createElement("i",{className:"icon-location-pin"}),"\xa0 Palo Alto, CA")),m.a.createElement(E.a,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-primary list-group-item-divider"},m.a.createElement("div",null,m.a.createElement("strong",null,"Team meeting")),m.a.createElement("small",{className:"text-muted mr-3"},m.a.createElement("i",{className:"icon-calendar"}),"\xa0 4 - 6pm"),m.a.createElement("small",{className:"text-muted"},m.a.createElement("i",{className:"icon-home"}),"\xa0 creativeLabs HQ"),m.a.createElement("div",{className:"avatars-stack mt-2"},m.a.createElement("div",{className:"avatar avatar-xs"},m.a.createElement("img",{src:"assets/img/avatars/2.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),m.a.createElement("div",{className:"avatar avatar-xs"},m.a.createElement("img",{src:"assets/img/avatars/3.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),m.a.createElement("div",{className:"avatar avatar-xs"},m.a.createElement("img",{src:"assets/img/avatars/4.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),m.a.createElement("div",{className:"avatar avatar-xs"},m.a.createElement("img",{src:"assets/img/avatars/5.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),m.a.createElement("div",{className:"avatar avatar-xs"},m.a.createElement("img",{src:"assets/img/avatars/6.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),m.a.createElement("div",{className:"avatar avatar-xs"},m.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),m.a.createElement("div",{className:"avatar avatar-xs"},m.a.createElement("img",{src:"assets/img/avatars/8.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}))))))))}}]),t}(i.Component);N.defaultProps={},e.default=N}}]);