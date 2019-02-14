(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{157:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n.n(a),o=n(0),u=n.n(o),i=n(3),c=n.n(i),l=n(62),s=n(22),p={changeFromScheme:function(e){return{type:s.a.CHANGE_FROM_SCHEME,payload:{scheme:e}}},changeToScheme:function(e){return{type:s.a.CHANGE_TO_SCHEME,payload:{scheme:e}}},changeInputText:function(e){return{type:s.a.CHANGE_INPUT_TEXT,payload:{text:e}}},changeOutputText:function(e){return{type:s.a.CHANGE_OUTPUT_TEXT,payload:{text:e}}},convert:function(){return{type:s.a.CONVERT}}},f=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this)._onChange=function(e){t.props.onChange(e.target.value)},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.selectedItem,n=e.items;return u.a.createElement("select",{onChange:this._onChange,value:t},n.map(function(e){return u.a.createElement("option",{key:e.key,value:e.key},e.text)}))},t}(u.a.Component);f.propTypes={selectedItem:c.a.string,items:c.a.arrayOf(c.a.object),onChange:c.a.func};var d=n(1);var h=Object(l.b)(function(e){return{selectedItem:e.fromScheme,items:d.a.FROM_SCHEMES}},function(e){return{onChange:function(t){e(p.changeFromScheme(t))}}})(f),m=n(161),v={fontSize:"21px"},g=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this)._onChange=function(e){t.props.onChange(e.target.value)},t}return r()(t,e),t.prototype.render=function(){return u.a.createElement("textarea",{rows:"5",class:"form-control",onChange:this._onChange,style:v,value:this.props.text})},t}(u.a.Component);g.propTypes={text:c.a.string,onChange:c.a.func};var y=Object(l.b)(function(e){return{text:e.inputText}},function(e){return{onChange:function(t){e(p.changeInputText(t))}}})(g);var C=Object(l.b)(function(e){return{text:e.outputText}},function(e){return{onChange:function(t){e(p.changeOutputText(t))}}})(g);var b=Object(l.b)(function(e){return{selectedItem:e.toScheme,items:d.a.TO_SCHEMES}},function(e){return{onChange:function(t){e(p.changeToScheme(t))}}})(f),E={width:"100%",fontSize:"18pt"},w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return u.a.createElement("div",null,u.a.createElement(m.a,{subpage:""}),u.a.createElement("hr",null),u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"col-md-3"},u.a.createElement("h2",null,"From"),u.a.createElement(h,null),u.a.createElement("button",{type:"button",className:"btn btn-warning btn-sm",onClick:this.props.onInputClearClick},"Clear")),u.a.createElement("div",{className:"col-md-9"},u.a.createElement(y,null),u.a.createElement("button",{type:"button",className:"btn btn-success center",style:E,onClick:this.props.onConvert},"↓ Convert ↓"))),u.a.createElement("hr",null),u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"col-md-3"},u.a.createElement("h2",null,"To"),u.a.createElement(b,null),u.a.createElement("button",{type:"button",className:"btn btn-warning btn-sm",onClick:this.props.onOutputClearClick},"Clear")),u.a.createElement("div",{className:"col-md-9"},u.a.createElement(C,null))),u.a.createElement("hr",null))},t}(u.a.Component);w.propTypes={onInputClearClick:c.a.func,onOutputClearClick:c.a.func,onConvert:c.a.func};t.default=Object(l.b)(null,function(e){return{onInputClearClick:function(){e(p.changeInputText(""))},onOutputClearClick:function(){e(p.changeOutputText(""))},onConvert:function(){e(p.convert())}}})(w)},158:function(e,t,n){"use strict";var a=n(11);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(162)),o=a(n(163)),u=a(n(9)),i=a(n(64)),c=a(n(65)),l=a(n(3)),s=a(n(0)),p=n(28),f=n(159);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/YangZhuang/"+e)}var h={activeClassName:l.default.string,activeStyle:l.default.object},m=function(e){function t(t){var n;n=e.call(this,t)||this,(0,c.default)((0,i.default)((0,i.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,i.default)((0,i.default)(n))),n}(0,u.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,u=void 0===a?this.defaultGetProps:a,i=t.onClick,c=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var v=d(n);return s.default.createElement(p.Link,(0,o.default)({to:v,state:l,getProps:u,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return i&&i(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:l,replace:h})),!0}},m))},t}(s.default.Component);m.propTypes=(0,o.default)({},h,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var v=s.default.forwardRef(function(e,t){return s.default.createElement(m,(0,o.default)({innerRef:t},e))});t.default=v;var g=function(e,t){window.___navigate(d(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},159:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return d});var a=n(0),r=n.n(a),o=n(3),u=n.n(o),i=n(158),c=n.n(i);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return i.withPrefix}),n.d(t,"navigate",function(){return i.navigate}),n.d(t,"push",function(){return i.push}),n.d(t,"replace",function(){return i.replace}),n.d(t,"navigateTo",function(){return i.navigateTo});var l=n(160),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var p=n(39);n.d(t,"parsePath",function(){return p.a});var f=r.a.createContext({}),d=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},160:function(e,t,n){var a;e.exports=(a=n(164))&&a.default||a},161:function(e,t,n){"use strict";var a=n(9),r=n.n(a),o=n(159),u=n(3),i=n.n(u),c=n(0),l=n.n(c),s=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.renderLink=function(e,t){var n=this.props.subpage===e;return l.a.createElement("li",{className:n?"active":""},l.a.createElement(o.Link,{to:e},t))},n.render=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Yang Zhuang Orthography Converter"),l.a.createElement("p",null,"This tool converts between Liao and Lee orthography. The latter orthography has not been finalised and is subject to change."),l.a.createElement("ul",{className:"nav nav-tabs"},this.renderLink("","Converter"),this.renderLink("/documentation","Documentation")))},t}(l.a.Component);s.propTypes={subpage:i.a.string},t.a=s},162:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},163:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},164:function(e,t,n){"use strict";n.r(t);n(17);var a=n(0),r=n.n(a),o=n(3),u=n.n(o),i=n(66),c=n(4),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=l}}]);
//# sourceMappingURL=component---src-pages-index-js-042bf5e8feae663faed5.js.map