(this.webpackJsonpreact_antd_admin_template=this.webpackJsonpreact_antd_admin_template||[]).push([[26],{1269:function(e,t,a){},1362:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(234),a(89)),o=(a(235),a(62)),l=(a(488),a(487)),c=a(49),s=a(758),u=a(1265),d=a(1266),p=a.n(d),h=a(1267),m=a.n(h),f=(a(1268),a(1269),function(){var e=Object(n.useState)(s.EditorState.createEmpty()),t=Object(c.a)(e,2),a=t[0],d=t[1];return r.a.createElement("div",null,r.a.createElement(l.a,{bordered:!1},r.a.createElement(u.Editor,{editorState:a,onEditorStateChange:function(e){return d(e)},wrapperClassName:"wrapper-class",editorClassName:"editor-class",toolbarClassName:"toolbar-class",localization:{locale:"zh"}})),r.a.createElement("br",null),r.a.createElement(i.a,{gutter:10},r.a.createElement(o.a,{span:12},r.a.createElement(l.a,{title:"\u540c\u6b65\u8f6c\u6362HTML",bordered:!1,style:{minHeight:200}},a&&p()(Object(s.convertToRaw)(a.getCurrentContent())))),r.a.createElement(o.a,{span:12},r.a.createElement(l.a,{title:"\u540c\u6b65\u8f6c\u6362MarkDown",bordered:!1,style:{minHeight:200}},a&&m()(Object(s.convertToRaw)(a.getCurrentContent()))))))}),v=a(481);t.default=function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(v.a,{title:"\u65b0\u624b\u5f15\u5bfc",source:'\n    \u6b64\u9875\u9762\u7528\u5230\u7684\u5bcc\u6587\u672c\u7f16\u8f91\u5668\u662f<a href="https://github.com/jpuri/react-draft-wysiwyg">react-draft-wysiwyg</a>\u3002\n  '}),r.a.createElement("br",null),r.a.createElement(f,null))}},481:function(e,t,a){"use strict";a(488);var n=a(487),r=a(0),i=a.n(r),o=a(43),l=a(44),c=function(){function e(t){Object(o.a)(this,e),this.opts=t||{},this.source=t.source,this.output=t.output,this.delay=t.delay||120,this.chain={parent:null,dom:this.output,val:[]},"function"!==typeof this.opts.done&&(this.opts.done=function(){})}return Object(l.a)(e,[{key:"init",value:function(){this.chain.val=this.convert(this.source,this.chain.val)}},{key:"convert",value:function(e,t){for(var a=Array.from(e.childNodes),n=0;n<a.length;n++){var r=a[n];if(3===r.nodeType)t=t.concat(r.nodeValue.split(""));else if(1===r.nodeType){var i=[];i=this.convert(r,i),t.push({dom:r,val:i})}}return t}},{key:"print",value:function(e,t,a){setTimeout((function(){e.appendChild(document.createTextNode(t)),a()}),this.delay)}},{key:"play",value:function(e){var t=this;if(e.val.length){var a=e.val.shift();if("string"===typeof a)this.print(e.dom,a,(function(){t.play(e)}));else{var n=a.dom.cloneNode();e.dom.appendChild(n),this.play({parent:e,dom:n,val:a.val})}}else e.parent?this.play(e.parent):this.opts.done()}},{key:"start",value:function(){this.init(),this.play(this.chain)}}]),e}(),s=function(e){var t=e.title,a=e.source,o=Object(r.useRef)(),l=Object(r.useRef)();return Object(r.useEffect)((function(){new c({source:o.current,output:l.current,delay:30}).start()}),[]),i.a.createElement(n.a,{bordered:!1,className:"card-item",title:t},i.a.createElement("div",{style:{display:"none"},ref:o,dangerouslySetInnerHTML:{__html:a}}),i.a.createElement("div",{ref:l}))};s.defaultProps={title:"",source:""};t.a=s}}]);