(this.webpackJsonpreact_antd_admin_template=this.webpackJsonpreact_antd_admin_template||[]).push([[29],{1330:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function c(e,t,r,n){var a=t&&t.prototype instanceof u?t:u,i=Object.create(a.prototype),o=new O(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return x()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var c=b(o,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,o),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=c;var s={};function u(){}function d(){}function h(){}var f={};f[a]=function(){return this};var p=Object.getPrototypeOf,m=p&&p(p(L([])));m&&m!==t&&r.call(m,a)&&(f=m);var v=h.prototype=u.prototype=Object.create(f);function y(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function g(e,t){var n;this._invoke=function(a,i){function o(){return new t((function(n,o){!function n(a,i,o,c){var s=l(e[a],e,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"===typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,c)}),(function(e){n("throw",e,o,c)})):t.resolve(d).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,c)}))}c(s.arg)}(a,i,n,o)}))}return n=n?n.then(o,o):o()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:x}}function x(){return{value:void 0,done:!0}}return d.prototype=v.constructor=h,h.constructor=d,h[o]=d.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,o in e||(e[o]="GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(g.prototype),g.prototype[i]=function(){return this},e.AsyncIterator=g,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new g(c(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(v),v[o]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),w(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;w(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},1359:function(e,t,r){"use strict";r.r(t);r(488);var n=r(487),a=(r(240),r(122)),i=(r(87),r(29)),o=(r(141),r(51)),c=r(810),l=r.n(c);function s(e,t,r,n,a,i,o){try{var c=e[i](o),l=c.value}catch(s){return void r(s)}c.done?t(l):Promise.resolve(l).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){s(i,n,a,o,c,"next",e)}function c(e){s(i,n,a,o,c,"throw",e)}o(void 0)}))}}var d=r(43),h=r(44),f=r(56),p=r(55),m=(r(532),r(530)),v=r(0),y=r.n(v),g=r(178),b=r(481),E=(r(176),r(105)),w=(r(544),r(531)),O=(r(236),r(71)),L=(r(233),r(144)),x=L.a.TextArea,k=function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"render",value:function(){var e=this.props,t=e.visible,r=e.onCancel,n=e.onOk,a=e.form,i=e.confirmLoading,o=e.currentRowData,c=a.getFieldDecorator,l=o.id,s=o.name,u=o.role,d=o.description,h={labelCol:{sm:{span:4}},wrapperCol:{sm:{span:16}}};return y.a.createElement(E.a,{title:"\u7f16\u8f91",visible:t,onCancel:r,onOk:n,confirmLoading:i},y.a.createElement(O.a,h,y.a.createElement(O.a.Item,{label:"\u7528\u6237ID:"},c("id",{initialValue:l})(y.a.createElement(L.a,{disabled:!0}))),y.a.createElement(O.a.Item,{label:"\u7528\u6237\u540d\u79f0:"},c("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d\u79f0!"}],initialValue:s})(y.a.createElement(L.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d\u79f0"}))),y.a.createElement(O.a.Item,{label:"\u7528\u6237\u89d2\u8272:"},c("role",{initialValue:u})(y.a.createElement(w.a,{style:{width:120},disabled:"admin"===l},y.a.createElement(w.a.Option,{value:"admin"},"admin"),y.a.createElement(w.a.Option,{value:"editor"},"editor"),y.a.createElement(w.a.Option,{value:"guest"},"guest")))),y.a.createElement(O.a.Item,{label:"\u7528\u6237\u63cf\u8ff0:"},c("description",{initialValue:d})(y.a.createElement(x,{rows:4,placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u63cf\u8ff0"})))))}}]),r}(v.Component),U=O.a.create({name:"EditUserForm"})(k),j=L.a.TextArea,I=function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(d.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).validatUserID=function(){var e=u(l.a.mark((function e(t,r,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=9;break}return/^[a-zA-Z0-9]{1,6}$/.test(r)||n("\u7528\u6237ID\u5fc5\u987b\u4e3a1-6\u4f4d\u6570\u5b57\u6216\u5b57\u6bcd\u7ec4\u5408"),e.next=4,Object(g.f)(r);case 4:a=e.sent,a.data.status&&n("\u8be5\u7528\u6237ID\u5df2\u5b58\u5728"),e.next=10;break;case 9:n("\u8bf7\u8f93\u5165\u7528\u6237ID");case 10:n();case 11:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),e}return Object(h.a)(r,[{key:"render",value:function(){var e=this.props,t=e.visible,r=e.onCancel,n=e.onOk,a=e.form,i=e.confirmLoading,o=a.getFieldDecorator,c={labelCol:{sm:{span:4}},wrapperCol:{sm:{span:16}}};return y.a.createElement(E.a,{title:"\u7f16\u8f91",visible:t,onCancel:r,onOk:n,confirmLoading:i},y.a.createElement(O.a,c,y.a.createElement(O.a.Item,{label:"\u7528\u6237ID:"},o("id",{rules:[{required:!0,validator:this.validatUserID}]})(y.a.createElement(L.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237ID"}))),y.a.createElement(O.a.Item,{label:"\u7528\u6237\u540d\u79f0:"},o("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d\u79f0!"}]})(y.a.createElement(L.a,{placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d\u79f0"}))),y.a.createElement(O.a.Item,{label:"\u7528\u6237\u89d2\u8272:"},o("role",{initialValue:"admin"})(y.a.createElement(w.a,{style:{width:120}},y.a.createElement(w.a.Option,{value:"admin"},"admin"),y.a.createElement(w.a.Option,{value:"guest"},"guest")))),y.a.createElement(O.a.Item,{label:"\u7528\u6237\u63cf\u8ff0:"},o("description",{})(y.a.createElement(j,{rows:4,placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u63cf\u8ff0"})))))}}]),r}(v.Component),C=O.a.create({name:"AddUserForm"})(I),_=m.a.Column,M=function(e){Object(f.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(d.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={users:[],editUserModalVisible:!1,editUserModalLoading:!1,currentRowData:{},addUserModalVisible:!1,addUserModalLoading:!1},e.getUsers=u(l.a.mark((function t(){var r,n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(g.d)();case 2:r=t.sent,n=r.data,a=n.users,0===n.status&&e.setState({users:a});case 5:case"end":return t.stop()}}),t)}))),e.handleEditUser=function(t){e.setState({currentRowData:Object.assign({},t),editUserModalVisible:!0})},e.handleDeleteUser=function(t){var r=t.id;"admin"!==r?Object(g.b)({id:r}).then((function(t){o.a.success("\u5220\u9664\u6210\u529f"),e.getUsers()})):o.a.error("\u4e0d\u80fd\u5220\u9664\u7ba1\u7406\u5458\u7528\u6237\uff01")},e.handleEditUserOk=function(t){var r=e.editUserFormRef.props.form;r.validateFields((function(t,n){t||(e.setState({editModalLoading:!0}),Object(g.c)(n).then((function(t){r.resetFields(),e.setState({editUserModalVisible:!1,editUserModalLoading:!1}),o.a.success("\u7f16\u8f91\u6210\u529f!"),e.getUsers()})).catch((function(e){o.a.success("\u7f16\u8f91\u5931\u8d25,\u8bf7\u91cd\u8bd5!")})))}))},e.handleCancel=function(t){e.setState({editUserModalVisible:!1,addUserModalVisible:!1})},e.handleAddUser=function(t){e.setState({addUserModalVisible:!0})},e.handleAddUserOk=function(t){var r=e.addUserFormRef.props.form;r.validateFields((function(t,n){t||(e.setState({addUserModalLoading:!0}),Object(g.a)(n).then((function(t){r.resetFields(),e.setState({addUserModalVisible:!1,addUserModalLoading:!1}),o.a.success("\u6dfb\u52a0\u6210\u529f!"),e.getUsers()})).catch((function(e){o.a.success("\u6dfb\u52a0\u5931\u8d25,\u8bf7\u91cd\u8bd5!")})))}))},e}return Object(h.a)(r,[{key:"componentDidMount",value:function(){this.getUsers()}},{key:"render",value:function(){var e=this,t=this.state.users,r=y.a.createElement("span",null,y.a.createElement(i.a,{type:"primary",onClick:this.handleAddUser},"\u6dfb\u52a0\u7528\u6237"));return y.a.createElement("div",{className:"app-container"},y.a.createElement(b.a,{title:"\u7528\u6237\u7ba1\u7406",source:"\u5728\u8fd9\u91cc\uff0c\u4f60\u53ef\u4ee5\u5bf9\u7cfb\u7edf\u4e2d\u7684\u7528\u6237\u8fdb\u884c\u7ba1\u7406\uff0c\u4f8b\u5982\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7528\u6237\uff0c\u6216\u8005\u4fee\u6539\u7cfb\u7edf\u4e2d\u5df2\u7ecf\u5b58\u5728\u7684\u7528\u6237\u3002"}),y.a.createElement("br",null),y.a.createElement(n.a,{title:r},y.a.createElement(m.a,{bordered:!0,rowKey:"id",dataSource:t,pagination:!1},y.a.createElement(_,{title:"\u7528\u6237ID",dataIndex:"id",key:"id",align:"center"}),y.a.createElement(_,{title:"\u7528\u6237\u540d\u79f0",dataIndex:"name",key:"name",align:"center"}),y.a.createElement(_,{title:"\u7528\u6237\u89d2\u8272",dataIndex:"role",key:"role",align:"center"}),y.a.createElement(_,{title:"\u7528\u6237\u63cf\u8ff0",dataIndex:"description",key:"description",align:"center"}),y.a.createElement(_,{title:"\u64cd\u4f5c",key:"action",width:195,align:"center",render:function(t,r){return y.a.createElement("span",null,y.a.createElement(i.a,{type:"primary",shape:"circle",icon:"edit",title:"\u7f16\u8f91",onClick:e.handleEditUser.bind(null,r)}),y.a.createElement(a.a,{type:"vertical"}),y.a.createElement(i.a,{type:"primary",shape:"circle",icon:"delete",title:"\u5220\u9664",onClick:e.handleDeleteUser.bind(null,r)}))}}))),y.a.createElement(U,{currentRowData:this.state.currentRowData,wrappedComponentRef:function(t){return e.editUserFormRef=t},visible:this.state.editUserModalVisible,confirmLoading:this.state.editUserModalLoading,onCancel:this.handleCancel,onOk:this.handleEditUserOk}),y.a.createElement(C,{wrappedComponentRef:function(t){return e.addUserFormRef=t},visible:this.state.addUserModalVisible,confirmLoading:this.state.addUserModalLoading,onCancel:this.handleCancel,onOk:this.handleAddUserOk}))}}]),r}(v.Component);t.default=M},481:function(e,t,r){"use strict";r(488);var n=r(487),a=r(0),i=r.n(a),o=r(43),c=r(44),l=function(){function e(t){Object(o.a)(this,e),this.opts=t||{},this.source=t.source,this.output=t.output,this.delay=t.delay||120,this.chain={parent:null,dom:this.output,val:[]},"function"!==typeof this.opts.done&&(this.opts.done=function(){})}return Object(c.a)(e,[{key:"init",value:function(){this.chain.val=this.convert(this.source,this.chain.val)}},{key:"convert",value:function(e,t){for(var r=Array.from(e.childNodes),n=0;n<r.length;n++){var a=r[n];if(3===a.nodeType)t=t.concat(a.nodeValue.split(""));else if(1===a.nodeType){var i=[];i=this.convert(a,i),t.push({dom:a,val:i})}}return t}},{key:"print",value:function(e,t,r){setTimeout((function(){e.appendChild(document.createTextNode(t)),r()}),this.delay)}},{key:"play",value:function(e){var t=this;if(e.val.length){var r=e.val.shift();if("string"===typeof r)this.print(e.dom,r,(function(){t.play(e)}));else{var n=r.dom.cloneNode();e.dom.appendChild(n),this.play({parent:e,dom:n,val:r.val})}}else e.parent?this.play(e.parent):this.opts.done()}},{key:"start",value:function(){this.init(),this.play(this.chain)}}]),e}(),s=function(e){var t=e.title,r=e.source,o=Object(a.useRef)(),c=Object(a.useRef)();return Object(a.useEffect)((function(){new l({source:o.current,output:c.current,delay:30}).start()}),[]),i.a.createElement(n.a,{bordered:!1,className:"card-item",title:t},i.a.createElement("div",{style:{display:"none"},ref:o,dangerouslySetInnerHTML:{__html:r}}),i.a.createElement("div",{ref:c}))};s.defaultProps={title:"",source:""};t.a=s},810:function(e,t,r){e.exports=r(1330)}}]);