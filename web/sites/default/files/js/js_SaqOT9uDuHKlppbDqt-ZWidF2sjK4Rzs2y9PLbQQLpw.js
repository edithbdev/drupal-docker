/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={655:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var o=r(609),n=r.n(o)()((function(e){return e[1]}));n.push([e.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}",""]);const i=n},609:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,o){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(n[c]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);o&&n[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),t.push(s))}},t}},62:(e,t,r)=>{"use strict";var o,n=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),c=[];function a(e){for(var t=-1,r=0;r<c.length;r++)if(c[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},o=[],n=0;n<e.length;n++){var i=e[n],s=t.base?i[0]+t.base:i[0],l=r[s]||0,d="".concat(s," ").concat(l);r[s]=l+1;var u=a(d),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(c[u].references++,c[u].updater(p)):c.push({identifier:d,updater:k(p,t),references:1}),o.push(d)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var n=r.nc;n&&(o.nonce=n)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,r,o){var n=r?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,n);else{var i=document.createTextNode(n),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function f(e,t,r){var o=r.css,n=r.media,i=r.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var b=null,h=0;function k(e,t){var r,o,n;if(t.singleton){var i=h++;r=b||(b=l(t)),o=p.bind(null,r,i,!1),n=p.bind(null,r,i,!0)}else r=l(t),o=f.bind(null,r,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var r=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<r.length;o++){var n=a(r[o]);c[n].references--}for(var i=s(e,t),l=0;l<r.length;l++){var d=a(r[l]);0===c[d].references&&(c[d].updater(),c.splice(d,1))}r=i}}}},704:(e,t,r)=>{e.exports=r(79)("./src/core.js")},492:(e,t,r)=>{e.exports=r(79)("./src/engine.js")},273:(e,t,r)=>{e.exports=r(79)("./src/ui.js")},209:(e,t,r)=>{e.exports=r(79)("./src/utils.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0;var o={};(()=>{"use strict";r.r(o),r.d(o,{ClassicEditor:()=>R});var e=r(704),t=r(273),n=r(492),i=r(209);class c extends e.EditorUI{constructor(e,r){super(e),this.view=r,this._toolbarConfig=(0,t.normalizeToolbarConfig)(e.config.get("toolbar")),this._elementReplacer=new i.ElementReplacer}get element(){return this.view.element}init(e){const t=this.editor,r=this.view,o=t.editing.view,n=r.editable,i=o.document.getRoot();n.name=i.rootName,r.render();const c=n.element;this.setEditableElement(n.name,c),r.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(c),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",(({top:e})=>e||0)),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const e=this.editor,t=e.editing.view,r=t.document.getRoot(),o=e.sourceElement,i=e.config.get("placeholder")||o&&"textarea"===o.tagName.toLowerCase()&&o.getAttribute("placeholder");i&&(0,n.enablePlaceholder)({view:t,element:r,text:i,isDirectHost:!1,keepOnFocus:!0})}}var a=r(62),s=r.n(a),l=r(655),d={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};s()(l.Z,d);l.Z.locals;class u extends t.BoxedEditorUIView{constructor(e,r,o={}){super(e),this.stickyPanel=new t.StickyPanelView(e),this.toolbar=new t.ToolbarView(e,{shouldGroupWhenFull:o.shouldToolbarGroupWhenFull}),this.editable=new t.InlineEditableUIView(e,r)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}const p=function(e){return null!=e&&"object"==typeof e};const f="object"==typeof global&&global&&global.Object===Object&&global;var b="object"==typeof self&&self&&self.Object===Object&&self;const h=(f||b||Function("return this")()).Symbol;var k=Object.prototype,v=k.hasOwnProperty,m=k.toString,y=h?h.toStringTag:void 0;const g=function(e){var t=v.call(e,y),r=e[y];try{e[y]=void 0;var o=!0}catch(e){}var n=m.call(e);return o&&(t?e[y]=r:delete e[y]),n};var _=Object.prototype.toString;const w=function(e){return _.call(e)};var j=h?h.toStringTag:void 0;const O=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":j&&j in Object(e)?g(e):w(e)};const x=function(e,t){return function(r){return e(t(r))}}(Object.getPrototypeOf,Object);var E=Function.prototype,T=Object.prototype,S=E.toString,C=T.hasOwnProperty,P=S.call(Object);const F=function(e){if(!p(e)||"[object Object]"!=O(e))return!1;var t=x(e);if(null===t)return!0;var r=C.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&S.call(r)==P};const M=function(e){return p(e)&&1===e.nodeType&&!F(e)};class R extends((0,e.DataApiMixin)((0,e.ElementApiMixin)(e.Editor))){constructor(t,r={}){if(!D(t)&&void 0!==r.initialData)throw new i.CKEditorError("editor-create-initial-data",null);super(r),void 0===this.config.get("initialData")&&this.config.set("initialData",function(e){return D(e)?(0,i.getDataFromElement)(e):e}(t)),D(t)&&(this.sourceElement=t),this.model.document.createRoot();const o=!this.config.get("toolbar.shouldNotGroupWhenFull"),n=new u(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:o});this.ui=new c(this,n),(0,e.attachToForm)(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise((r=>{const o=new this(e,t);r(o.initPlugins().then((()=>o.ui.init(D(e)?e:null))).then((()=>o.data.init(o.config.get("initialData")))).then((()=>o.fire("ready"))).then((()=>o)))}))}}function D(e){return M(e)}})(),(window.CKEditor5=window.CKEditor5||{}).editorClassic=o})();;
!function(t){const e=t.en=t.en||{};e.dictionary=Object.assign(e.dictionary||{},{"HTML object":"HTML object"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var t={142:(t,e,r)=>{"use strict";r.d(e,{Z:()=>i});var o=r(609),n=r.n(o)()((function(t){return t[1]}));n.push([t.id,":root{--ck-html-object-embed-unfocused-outline-width:1px}.ck-widget.html-object-embed{background-color:var(--ck-color-base-foreground);font-size:var(--ck-font-size-base);min-width:calc(76px + var(--ck-spacing-standard));padding:var(--ck-spacing-small);padding-top:calc(var(--ck-font-size-tiny) + var(--ck-spacing-large))}.ck-widget.html-object-embed:not(.ck-widget_selected):not(:hover){outline:var(--ck-html-object-embed-unfocused-outline-width) dashed var(--ck-color-widget-blurred-border)}.ck-widget.html-object-embed:before{background:#999;border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius);color:var(--ck-color-base-background);content:attr(data-html-object-embed-label);font-family:var(--ck-font-face);font-size:var(--ck-font-size-tiny);font-style:normal;font-weight:400;left:var(--ck-spacing-standard);padding:calc(var(--ck-spacing-tiny) + var(--ck-html-object-embed-unfocused-outline-width)) var(--ck-spacing-small) var(--ck-spacing-tiny);position:absolute;top:0;transition:background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck-widget.html-object-embed .ck-widget__type-around .ck-widget__type-around__button.ck-widget__type-around__button_before{margin-left:50px}.ck-widget.html-object-embed .html-object-embed__content{pointer-events:none}div.ck-widget.html-object-embed{margin:1em auto}span.ck-widget.html-object-embed{display:inline-block}",""]);const i=n},609:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,o){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(n[s]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);o&&n[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},62:(t,e,r)=>{"use strict";var o,n=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),s=[];function l(t){for(var e=-1,r=0;r<s.length;r++)if(s[r].identifier===t){e=r;break}return e}function c(t,e){for(var r={},o=[],n=0;n<t.length;n++){var i=t[n],c=e.base?i[0]+e.base:i[0],a=r[c]||0,u="".concat(c," ").concat(a);r[c]=a+1;var m=l(u),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==m?(s[m].references++,s[m].updater(d)):s.push({identifier:u,updater:p(d,e),references:1}),o.push(u)}return o}function a(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var n=r.nc;n&&(o.nonce=n)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var s=i(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var u,m=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function d(t,e,r,o){var n=r?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=m(e,n);else{var i=document.createTextNode(n),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function h(t,e,r){var o=r.css,n=r.media,i=r.sourceMap;if(n?t.setAttribute("media",n):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var f=null,b=0;function p(t,e){var r,o,n;if(e.singleton){var i=b++;r=f||(f=a(e)),o=d.bind(null,r,i,!1),n=d.bind(null,r,i,!0)}else r=a(e),o=h.bind(null,r,e),n=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else n()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=n());var r=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<r.length;o++){var n=l(r[o]);s[n].references--}for(var i=c(t,e),a=0;a<r.length;a++){var u=l(r[a]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}r=i}}}},704:(t,e,r)=>{t.exports=r(79)("./src/core.js")},492:(t,e,r)=>{t.exports=r(79)("./src/engine.js")},209:(t,e,r)=>{t.exports=r(79)("./src/utils.js")},995:(t,e,r)=>{t.exports=r(79)("./src/widget.js")},79:t=>{"use strict";t.exports=CKEditor5.dll}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.nc=void 0;var o={};(()=>{"use strict";r.r(o),r.d(o,{DataFilter:()=>po,DataSchema:()=>He,GeneralHtmlSupport:()=>rn,HtmlComment:()=>sn});var t=r(704),e=r(209);const n=[{model:"codeBlock",view:"pre"},{model:"paragraph",view:"p"},{model:"blockQuote",view:"blockquote"},{model:"listItem",view:"li"},{model:"pageBreak",view:"div"},{model:"rawHtml",view:"div"},{model:"table",view:"table"},{model:"tableRow",view:"tr"},{model:"tableCell",view:"td"},{model:"tableCell",view:"th"},{model:"caption",view:"caption"},{model:"caption",view:"figcaption"},{model:"imageBlock",view:"img"},{model:"imageInline",view:"img"},{model:"htmlP",view:"p",modelSchema:{inheritAllFrom:"$block"}},{model:"htmlBlockquote",view:"blockquote",modelSchema:{inheritAllFrom:"$container"}},{model:"htmlTable",view:"table",modelSchema:{allowWhere:"$block",isBlock:!0}},{model:"htmlTbody",view:"tbody",modelSchema:{allowIn:"htmlTable",isBlock:!1}},{model:"htmlThead",view:"thead",modelSchema:{allowIn:"htmlTable",isBlock:!1}},{model:"htmlTfoot",view:"tfoot",modelSchema:{allowIn:"htmlTable",isBlock:!1}},{model:"htmlCaption",view:"caption",modelSchema:{allowIn:"htmlTable",allowChildren:"$text",isBlock:!1}},{model:"htmlColgroup",view:"colgroup",modelSchema:{allowIn:"htmlTable",allowChildren:"col",isBlock:!1}},{model:"htmlCol",view:"col",modelSchema:{allowIn:"htmlColgroup",isBlock:!1}},{model:"htmlTr",view:"tr",modelSchema:{allowIn:["htmlTable","htmlThead","htmlTbody"],isLimit:!0}},{model:"htmlTd",view:"td",modelSchema:{allowIn:"htmlTr",allowContentOf:"$container",isLimit:!0,isBlock:!1}},{model:"htmlTh",view:"th",modelSchema:{allowIn:"htmlTr",allowContentOf:"$container",isLimit:!0,isBlock:!1}},{model:"htmlFigure",view:"figure",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlFigcaption",view:"figcaption",modelSchema:{allowIn:"htmlFigure",allowChildren:"$text",isBlock:!1}},{model:"htmlAddress",view:"address",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlAside",view:"aside",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlMain",view:"main",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlDetails",view:"details",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlSummary",view:"summary",modelSchema:{allowChildren:"$text",allowIn:"htmlDetails",isBlock:!1}},{model:"htmlDiv",view:"div",paragraphLikeModel:"htmlDivParagraph",modelSchema:{inheritAllFrom:"$container"}},{model:"htmlFieldset",view:"fieldset",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlLegend",view:"legend",modelSchema:{allowIn:"htmlFieldset",allowChildren:"$text"}},{model:"htmlHeader",view:"header",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlFooter",view:"footer",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlForm",view:"form",modelSchema:{inheritAllFrom:"$container",isBlock:!0}},{model:"htmlHgroup",view:"hgroup",modelSchema:{allowChildren:["htmlH1","htmlH2","htmlH3","htmlH4","htmlH5","htmlH6"],isBlock:!1}},{model:"htmlH1",view:"h1",modelSchema:{inheritAllFrom:"$block"}},{model:"htmlH2",view:"h2",modelSchema:{inheritAllFrom:"$block"}},{model:"htmlH3",view:"h3",modelSchema:{inheritAllFrom:"$block"}},{model:"htmlH4",view:"h4",modelSchema:{inheritAllFrom:"$block"}},{model:"htmlH5",view:"h5",modelSchema:{inheritAllFrom:"$block"}},{model:"htmlH6",view:"h6",modelSchema:{inheritAllFrom:"$block"}},{model:"$htmlList",modelSchema:{allowWhere:"$container",allowChildren:["$htmlList","htmlLi"],isBlock:!1}},{model:"htmlDir",view:"dir",modelSchema:{inheritAllFrom:"$htmlList"}},{model:"htmlMenu",view:"menu",modelSchema:{inheritAllFrom:"$htmlList"}},{model:"htmlUl",view:"ul",modelSchema:{inheritAllFrom:"$htmlList"}},{model:"htmlOl",view:"ol",modelSchema:{inheritAllFrom:"$htmlList"}},{model:"htmlLi",view:"li",modelSchema:{allowIn:"$htmlList",allowChildren:"$text",isBlock:!1}},{model:"htmlPre",view:"pre",modelSchema:{inheritAllFrom:"$block"}},{model:"htmlArticle",view:"article",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlSection",view:"section",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlNav",view:"nav",modelSchema:{inheritAllFrom:"$container",isBlock:!1}},{model:"htmlDl",view:"dl",modelSchema:{allowWhere:"$container",allowChildren:["htmlDt","htmlDd"],isBlock:!1}},{model:"htmlDt",view:"dt",modelSchema:{allowChildren:"$block",isBlock:!1}},{model:"htmlDd",view:"dd",modelSchema:{allowChildren:"$block",isBlock:!1}},{model:"htmlCenter",view:"center",modelSchema:{inheritAllFrom:"$container",isBlock:!1}}],i=[{model:"htmlAcronym",view:"acronym",attributeProperties:{copyOnEnter:!0}},{model:"htmlTt",view:"tt",attributeProperties:{copyOnEnter:!0}},{model:"htmlFont",view:"font",attributeProperties:{copyOnEnter:!0}},{model:"htmlTime",view:"time",attributeProperties:{copyOnEnter:!0}},{model:"htmlVar",view:"var",attributeProperties:{copyOnEnter:!0}},{model:"htmlBig",view:"big",attributeProperties:{copyOnEnter:!0}},{model:"htmlSmall",view:"small",attributeProperties:{copyOnEnter:!0}},{model:"htmlSamp",view:"samp",attributeProperties:{copyOnEnter:!0}},{model:"htmlQ",view:"q",attributeProperties:{copyOnEnter:!0}},{model:"htmlOutput",view:"output",attributeProperties:{copyOnEnter:!0}},{model:"htmlKbd",view:"kbd",attributeProperties:{copyOnEnter:!0}},{model:"htmlBdi",view:"bdi",attributeProperties:{copyOnEnter:!0}},{model:"htmlBdo",view:"bdo",attributeProperties:{copyOnEnter:!0}},{model:"htmlAbbr",view:"abbr",attributeProperties:{copyOnEnter:!0}},{model:"htmlA",view:"a",priority:5,coupledAttribute:"linkHref",attributeProperties:{copyOnEnter:!0}},{model:"htmlStrong",view:"strong",coupledAttribute:"bold",attributeProperties:{copyOnEnter:!0,isFormatting:!0}},{model:"htmlB",view:"b",coupledAttribute:"bold",attributeProperties:{copyOnEnter:!0,isFormatting:!0}},{model:"htmlI",view:"i",coupledAttribute:"italic",attributeProperties:{copyOnEnter:!0,isFormatting:!0}},{model:"htmlEm",view:"em",coupledAttribute:"italic",attributeProperties:{copyOnEnter:!0,isFormatting:!0}},{model:"htmlS",view:"s",coupledAttribute:"strikethrough",attributeProperties:{copyOnEnter:!0,isFormatting:!0}},{model:"htmlDel",view:"del",coupledAttribute:"strikethrough",attributeProperties:{copyOnEnter:!0}},{model:"htmlIns",view:"ins",attributeProperties:{copyOnEnter:!0}},{model:"htmlU",view:"u",coupledAttribute:"underline",attributeProperties:{copyOnEnter:!0,isFormatting:!0}},{model:"htmlSub",view:"sub",coupledAttribute:"subscript",attributeProperties:{copyOnEnter:!0,isFormatting:!0}},{model:"htmlSup",view:"sup",coupledAttribute:"superscript",attributeProperties:{copyOnEnter:!0,isFormatting:!0}},{model:"htmlCode",view:"code",coupledAttribute:"code",attributeProperties:{copyOnEnter:!0,isFormatting:!0}},{model:"htmlMark",view:"mark",attributeProperties:{copyOnEnter:!0}},{model:"htmlSpan",view:"span",attributeProperties:{copyOnEnter:!0}},{model:"htmlCite",view:"cite",attributeProperties:{copyOnEnter:!0}},{model:"htmlLabel",view:"label",attributeProperties:{copyOnEnter:!0}},{model:"htmlDfn",view:"dfn",attributeProperties:{copyOnEnter:!0}},{model:"htmlObject",view:"object",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlIframe",view:"iframe",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlInput",view:"input",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlButton",view:"button",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlTextarea",view:"textarea",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlSelect",view:"select",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlVideo",view:"video",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlEmbed",view:"embed",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlOembed",view:"oembed",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlAudio",view:"audio",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlImg",view:"img",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlCanvas",view:"canvas",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlMeter",view:"meter",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlProgress",view:"progress",isObject:!0,modelSchema:{inheritAllFrom:"$inlineObject"}},{model:"htmlScript",view:"script",modelSchema:{allowWhere:["$text","$block"],isInline:!0}},{model:"htmlStyle",view:"style",modelSchema:{allowWhere:["$text","$block"],isInline:!0}},{model:"htmlCustomElement",view:"$customElement",modelSchema:{allowWhere:["$text","$block"],isInline:!0}}];const s=function(){this.__data__=[],this.size=0};const l=function(t,e){return t===e||t!=t&&e!=e};const c=function(t,e){for(var r=t.length;r--;)if(l(t[r][0],e))return r;return-1};var a=Array.prototype.splice;const u=function(t){var e=this.__data__,r=c(e,t);return!(r<0)&&(r==e.length-1?e.pop():a.call(e,r,1),--this.size,!0)};const m=function(t){var e=this.__data__,r=c(e,t);return r<0?void 0:e[r][1]};const d=function(t){return c(this.__data__,t)>-1};const h=function(t,e){var r=this.__data__,o=c(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this};function f(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}f.prototype.clear=s,f.prototype.delete=u,f.prototype.get=m,f.prototype.has=d,f.prototype.set=h;const b=f;const p=function(){this.__data__=new b,this.size=0};const g=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};const v=function(t){return this.__data__.get(t)};const w=function(t){return this.__data__.has(t)};const y="object"==typeof global&&global&&global.Object===Object&&global;var A="object"==typeof self&&self&&self.Object===Object&&self;const j=y||A||Function("return this")();const _=j.Symbol;var S=Object.prototype,O=S.hasOwnProperty,k=S.toString,E=_?_.toStringTag:void 0;const C=function(t){var e=O.call(t,E),r=t[E];try{t[E]=void 0;var o=!0}catch(t){}var n=k.call(t);return o&&(e?t[E]=r:delete t[E]),n};var F=Object.prototype.toString;const $=function(t){return F.call(t)};var x=_?_.toStringTag:void 0;const I=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":x&&x in Object(t)?C(t):$(t)};const P=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};const B=function(t){if(!P(t))return!1;var e=I(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};const T=j["__core-js_shared__"];var R,D=(R=/[^.]+$/.exec(T&&T.keys&&T.keys.IE_PROTO||""))?"Symbol(src)_1."+R:"";const L=function(t){return!!D&&D in t};var M=Function.prototype.toString;const N=function(t){if(null!=t){try{return M.call(t)}catch(t){}try{return t+""}catch(t){}}return""};var V=/^\[object .+?Constructor\]$/,H=Function.prototype,z=Object.prototype,q=H.toString,U=z.hasOwnProperty,W=RegExp("^"+q.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const G=function(t){return!(!P(t)||L(t))&&(B(t)?W:V).test(N(t))};const K=function(t,e){return null==t?void 0:t[e]};const Z=function(t,e){var r=K(t,e);return G(r)?r:void 0};const Q=Z(j,"Map");const J=Z(Object,"create");const X=function(){this.__data__=J?J(null):{},this.size=0};const Y=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var tt=Object.prototype.hasOwnProperty;const et=function(t){var e=this.__data__;if(J){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return tt.call(e,t)?e[t]:void 0};var rt=Object.prototype.hasOwnProperty;const ot=function(t){var e=this.__data__;return J?void 0!==e[t]:rt.call(e,t)};const nt=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=J&&void 0===e?"__lodash_hash_undefined__":e,this};function it(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}it.prototype.clear=X,it.prototype.delete=Y,it.prototype.get=et,it.prototype.has=ot,it.prototype.set=nt;const st=it;const lt=function(){this.size=0,this.__data__={hash:new st,map:new(Q||b),string:new st}};const ct=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};const at=function(t,e){var r=t.__data__;return ct(e)?r["string"==typeof e?"string":"hash"]:r.map};const ut=function(t){var e=at(this,t).delete(t);return this.size-=e?1:0,e};const mt=function(t){return at(this,t).get(t)};const dt=function(t){return at(this,t).has(t)};const ht=function(t,e){var r=at(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this};function ft(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}ft.prototype.clear=lt,ft.prototype.delete=ut,ft.prototype.get=mt,ft.prototype.has=dt,ft.prototype.set=ht;const bt=ft;const pt=function(t,e){var r=this.__data__;if(r instanceof b){var o=r.__data__;if(!Q||o.length<199)return o.push([t,e]),this.size=++r.size,this;r=this.__data__=new bt(o)}return r.set(t,e),this.size=r.size,this};function gt(t){var e=this.__data__=new b(t);this.size=e.size}gt.prototype.clear=p,gt.prototype.delete=g,gt.prototype.get=v,gt.prototype.has=w,gt.prototype.set=pt;const vt=gt;const wt=function(){try{var t=Z(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();const yt=function(t,e,r){"__proto__"==e&&wt?wt(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r};const At=function(t,e,r){(void 0!==r&&!l(t[e],r)||void 0===r&&!(e in t))&&yt(t,e,r)};const jt=function(t){return function(e,r,o){for(var n=-1,i=Object(e),s=o(e),l=s.length;l--;){var c=s[t?l:++n];if(!1===r(i[c],c,i))break}return e}}();var _t="object"==typeof exports&&exports&&!exports.nodeType&&exports,St=_t&&"object"==typeof module&&module&&!module.nodeType&&module,Ot=St&&St.exports===_t?j.Buffer:void 0,kt=Ot?Ot.allocUnsafe:void 0;const Et=function(t,e){if(e)return t.slice();var r=t.length,o=kt?kt(r):new t.constructor(r);return t.copy(o),o};const Ct=j.Uint8Array;const Ft=function(t){var e=new t.constructor(t.byteLength);return new Ct(e).set(new Ct(t)),e};const $t=function(t,e){var r=e?Ft(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)};const xt=function(t,e){var r=-1,o=t.length;for(e||(e=Array(o));++r<o;)e[r]=t[r];return e};var It=Object.create;const Pt=function(){function t(){}return function(e){if(!P(e))return{};if(It)return It(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();const Bt=function(t,e){return function(r){return t(e(r))}};const Tt=Bt(Object.getPrototypeOf,Object);var Rt=Object.prototype;const Dt=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||Rt)};const Lt=function(t){return"function"!=typeof t.constructor||Dt(t)?{}:Pt(Tt(t))};const Mt=function(t){return null!=t&&"object"==typeof t};const Nt=function(t){return Mt(t)&&"[object Arguments]"==I(t)};var Vt=Object.prototype,Ht=Vt.hasOwnProperty,zt=Vt.propertyIsEnumerable;const qt=Nt(function(){return arguments}())?Nt:function(t){return Mt(t)&&Ht.call(t,"callee")&&!zt.call(t,"callee")};const Ut=Array.isArray;const Wt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991};const Gt=function(t){return null!=t&&Wt(t.length)&&!B(t)};const Kt=function(t){return Mt(t)&&Gt(t)};const Zt=function(){return!1};var Qt="object"==typeof exports&&exports&&!exports.nodeType&&exports,Jt=Qt&&"object"==typeof module&&module&&!module.nodeType&&module,Xt=Jt&&Jt.exports===Qt?j.Buffer:void 0;const Yt=(Xt?Xt.isBuffer:void 0)||Zt;var te=Function.prototype,ee=Object.prototype,re=te.toString,oe=ee.hasOwnProperty,ne=re.call(Object);const ie=function(t){if(!Mt(t)||"[object Object]"!=I(t))return!1;var e=Tt(t);if(null===e)return!0;var r=oe.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&re.call(r)==ne};var se={};se["[object Float32Array]"]=se["[object Float64Array]"]=se["[object Int8Array]"]=se["[object Int16Array]"]=se["[object Int32Array]"]=se["[object Uint8Array]"]=se["[object Uint8ClampedArray]"]=se["[object Uint16Array]"]=se["[object Uint32Array]"]=!0,se["[object Arguments]"]=se["[object Array]"]=se["[object ArrayBuffer]"]=se["[object Boolean]"]=se["[object DataView]"]=se["[object Date]"]=se["[object Error]"]=se["[object Function]"]=se["[object Map]"]=se["[object Number]"]=se["[object Object]"]=se["[object RegExp]"]=se["[object Set]"]=se["[object String]"]=se["[object WeakMap]"]=!1;const le=function(t){return Mt(t)&&Wt(t.length)&&!!se[I(t)]};const ce=function(t){return function(e){return t(e)}};var ae="object"==typeof exports&&exports&&!exports.nodeType&&exports,ue=ae&&"object"==typeof module&&module&&!module.nodeType&&module,me=ue&&ue.exports===ae&&y.process;const de=function(){try{var t=ue&&ue.require&&ue.require("util").types;return t||me&&me.binding&&me.binding("util")}catch(t){}}();var he=de&&de.isTypedArray;const fe=he?ce(he):le;const be=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]};var pe=Object.prototype.hasOwnProperty;const ge=function(t,e,r){var o=t[e];pe.call(t,e)&&l(o,r)&&(void 0!==r||e in t)||yt(t,e,r)};const ve=function(t,e,r,o){var n=!r;r||(r={});for(var i=-1,s=e.length;++i<s;){var l=e[i],c=o?o(r[l],t[l],l,r,t):void 0;void 0===c&&(c=t[l]),n?yt(r,l,c):ge(r,l,c)}return r};const we=function(t,e){for(var r=-1,o=Array(t);++r<t;)o[r]=e(r);return o};var ye=/^(?:0|[1-9]\d*)$/;const Ae=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&ye.test(t))&&t>-1&&t%1==0&&t<e};var je=Object.prototype.hasOwnProperty;const _e=function(t,e){var r=Ut(t),o=!r&&qt(t),n=!r&&!o&&Yt(t),i=!r&&!o&&!n&&fe(t),s=r||o||n||i,l=s?we(t.length,String):[],c=l.length;for(var a in t)!e&&!je.call(t,a)||s&&("length"==a||n&&("offset"==a||"parent"==a)||i&&("buffer"==a||"byteLength"==a||"byteOffset"==a)||Ae(a,c))||l.push(a);return l};const Se=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e};var Oe=Object.prototype.hasOwnProperty;const ke=function(t){if(!P(t))return Se(t);var e=Dt(t),r=[];for(var o in t)("constructor"!=o||!e&&Oe.call(t,o))&&r.push(o);return r};const Ee=function(t){return Gt(t)?_e(t,!0):ke(t)};const Ce=function(t){return ve(t,Ee(t))};const Fe=function(t,e,r,o,n,i,s){var l=be(t,r),c=be(e,r),a=s.get(c);if(a)At(t,r,a);else{var u=i?i(l,c,r+"",t,e,s):void 0,m=void 0===u;if(m){var d=Ut(c),h=!d&&Yt(c),f=!d&&!h&&fe(c);u=c,d||h||f?Ut(l)?u=l:Kt(l)?u=xt(l):h?(m=!1,u=Et(c,!0)):f?(m=!1,u=$t(c,!0)):u=[]:ie(c)||qt(c)?(u=l,qt(l)?u=Ce(l):P(l)&&!B(l)||(u=Lt(c))):m=!1}m&&(s.set(c,u),n(u,c,o,i,s),s.delete(c)),At(t,r,u)}};const $e=function t(e,r,o,n,i){e!==r&&jt(r,(function(s,l){if(i||(i=new vt),P(s))Fe(e,r,l,o,t,n,i);else{var c=n?n(be(e,l),s,l+"",e,r,i):void 0;void 0===c&&(c=s),At(e,l,c)}}),Ee)};const xe=function(t){return t};const Ie=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)};var Pe=Math.max;const Be=function(t,e,r){return e=Pe(void 0===e?t.length-1:e,0),function(){for(var o=arguments,n=-1,i=Pe(o.length-e,0),s=Array(i);++n<i;)s[n]=o[e+n];n=-1;for(var l=Array(e+1);++n<e;)l[n]=o[n];return l[e]=r(s),Ie(t,this,l)}};const Te=function(t){return function(){return t}};const Re=wt?function(t,e){return wt(t,"toString",{configurable:!0,enumerable:!1,value:Te(e),writable:!0})}:xe;var De=Date.now;const Le=function(t){var e=0,r=0;return function(){var o=De(),n=16-(o-r);if(r=o,n>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(Re);const Me=function(t,e){return Le(Be(t,e,xe),t+"")};const Ne=function(t,e,r){if(!P(r))return!1;var o=typeof e;return!!("number"==o?Gt(r)&&Ae(e,r.length):"string"==o&&e in r)&&l(r[e],t)};const Ve=function(t){return Me((function(e,r){var o=-1,n=r.length,i=n>1?r[n-1]:void 0,s=n>2?r[2]:void 0;for(i=t.length>3&&"function"==typeof i?(n--,i):void 0,s&&Ne(r[0],r[1],s)&&(i=n<3?void 0:i,n=1),e=Object(e);++o<n;){var l=r[o];l&&t(e,l,o,i)}return e}))}((function(t,e,r,o){$e(t,e,r,o)}));class He extends t.Plugin{constructor(t){super(t),this._definitions=new Map}static get pluginName(){return"DataSchema"}init(){for(const t of n)this.registerBlockElement(t);for(const t of i)this.registerInlineElement(t)}registerBlockElement(t){this._definitions.set(t.model,{...t,isBlock:!0})}registerInlineElement(t){this._definitions.set(t.model,{...t,isInline:!0})}extendBlockElement(t){this._extendDefinition({...t,isBlock:!0})}extendInlineElement(t){this._extendDefinition({...t,isInline:!0})}getDefinitionsForView(t,e){const r=new Set;for(const o of this._getMatchingViewDefinitions(t)){if(e)for(const t of this._getReferences(o.model))r.add(t);r.add(o)}return r}_getMatchingViewDefinitions(t){return Array.from(this._definitions.values()).filter((e=>e.view&&function(t,e){if("string"==typeof t)return t===e;if(t instanceof RegExp)return t.test(e);return!1}(t,e.view)))}*_getReferences(t){const{modelSchema:r}=this._definitions.get(t);if(!r)return;const o=["inheritAllFrom","inheritTypesFrom","allowWhere","allowContentOf","allowAttributesOf"];for(const n of o)for(const o of(0,e.toArray)(r[n]||[])){const e=this._definitions.get(o);o!==t&&e&&(yield*this._getReferences(e.model),yield e)}}_extendDefinition(t){const e=this._definitions.get(t.model),r=Ve({},e,t,((t,e)=>Array.isArray(t)?t.concat(e):void 0));this._definitions.set(t.model,r)}}var ze=r(492),qe=r(995);const Ue=function(t,e){for(var r=-1,o=null==t?0:t.length;++r<o&&!1!==e(t[r],r,t););return t};const We=Bt(Object.keys,Object);var Ge=Object.prototype.hasOwnProperty;const Ke=function(t){if(!Dt(t))return We(t);var e=[];for(var r in Object(t))Ge.call(t,r)&&"constructor"!=r&&e.push(r);return e};const Ze=function(t){return Gt(t)?_e(t):Ke(t)};const Qe=function(t,e){return t&&ve(e,Ze(e),t)};const Je=function(t,e){return t&&ve(e,Ee(e),t)};const Xe=function(t,e){for(var r=-1,o=null==t?0:t.length,n=0,i=[];++r<o;){var s=t[r];e(s,r,t)&&(i[n++]=s)}return i};const Ye=function(){return[]};var tr=Object.prototype.propertyIsEnumerable,er=Object.getOwnPropertySymbols;const rr=er?function(t){return null==t?[]:(t=Object(t),Xe(er(t),(function(e){return tr.call(t,e)})))}:Ye;const or=function(t,e){return ve(t,rr(t),e)};const nr=function(t,e){for(var r=-1,o=e.length,n=t.length;++r<o;)t[n+r]=e[r];return t};const ir=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)nr(e,rr(t)),t=Tt(t);return e}:Ye;const sr=function(t,e){return ve(t,ir(t),e)};const lr=function(t,e,r){var o=e(t);return Ut(t)?o:nr(o,r(t))};const cr=function(t){return lr(t,Ze,rr)};const ar=function(t){return lr(t,Ee,ir)};const ur=Z(j,"DataView");const mr=Z(j,"Promise");const dr=Z(j,"Set");const hr=Z(j,"WeakMap");var fr="[object Map]",br="[object Promise]",pr="[object Set]",gr="[object WeakMap]",vr="[object DataView]",wr=N(ur),yr=N(Q),Ar=N(mr),jr=N(dr),_r=N(hr),Sr=I;(ur&&Sr(new ur(new ArrayBuffer(1)))!=vr||Q&&Sr(new Q)!=fr||mr&&Sr(mr.resolve())!=br||dr&&Sr(new dr)!=pr||hr&&Sr(new hr)!=gr)&&(Sr=function(t){var e=I(t),r="[object Object]"==e?t.constructor:void 0,o=r?N(r):"";if(o)switch(o){case wr:return vr;case yr:return fr;case Ar:return br;case jr:return pr;case _r:return gr}return e});const Or=Sr;var kr=Object.prototype.hasOwnProperty;const Er=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&kr.call(t,"index")&&(r.index=t.index,r.input=t.input),r};const Cr=function(t,e){var r=e?Ft(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)};var Fr=/\w*$/;const $r=function(t){var e=new t.constructor(t.source,Fr.exec(t));return e.lastIndex=t.lastIndex,e};var xr=_?_.prototype:void 0,Ir=xr?xr.valueOf:void 0;const Pr=function(t){return Ir?Object(Ir.call(t)):{}};const Br=function(t,e,r){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return Ft(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return Cr(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return $t(t,r);case"[object Map]":case"[object Set]":return new o;case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return $r(t);case"[object Symbol]":return Pr(t)}};const Tr=function(t){return Mt(t)&&"[object Map]"==Or(t)};var Rr=de&&de.isMap;const Dr=Rr?ce(Rr):Tr;const Lr=function(t){return Mt(t)&&"[object Set]"==Or(t)};var Mr=de&&de.isSet;const Nr=Mr?ce(Mr):Lr;var Vr="[object Arguments]",Hr="[object Function]",zr="[object Object]",qr={};qr[Vr]=qr["[object Array]"]=qr["[object ArrayBuffer]"]=qr["[object DataView]"]=qr["[object Boolean]"]=qr["[object Date]"]=qr["[object Float32Array]"]=qr["[object Float64Array]"]=qr["[object Int8Array]"]=qr["[object Int16Array]"]=qr["[object Int32Array]"]=qr["[object Map]"]=qr["[object Number]"]=qr[zr]=qr["[object RegExp]"]=qr["[object Set]"]=qr["[object String]"]=qr["[object Symbol]"]=qr["[object Uint8Array]"]=qr["[object Uint8ClampedArray]"]=qr["[object Uint16Array]"]=qr["[object Uint32Array]"]=!0,qr["[object Error]"]=qr[Hr]=qr["[object WeakMap]"]=!1;const Ur=function t(e,r,o,n,i,s){var l,c=1&r,a=2&r,u=4&r;if(o&&(l=i?o(e,n,i,s):o(e)),void 0!==l)return l;if(!P(e))return e;var m=Ut(e);if(m){if(l=Er(e),!c)return xt(e,l)}else{var d=Or(e),h=d==Hr||"[object GeneratorFunction]"==d;if(Yt(e))return Et(e,c);if(d==zr||d==Vr||h&&!i){if(l=a||h?{}:Lt(e),!c)return a?sr(e,Je(l,e)):or(e,Qe(l,e))}else{if(!qr[d])return i?e:{};l=Br(e,d,c)}}s||(s=new vt);var f=s.get(e);if(f)return f;s.set(e,l),Nr(e)?e.forEach((function(n){l.add(t(n,r,o,n,e,s))})):Dr(e)&&e.forEach((function(n,i){l.set(i,t(n,r,o,i,e,s))}));var b=m?void 0:(u?a?ar:cr:a?Ee:Ze)(e);return Ue(b||e,(function(n,i){b&&(n=e[i=n]),ge(l,i,t(n,r,o,i,e,s))})),l};const Wr=function(t){return Ur(t,5)};function Gr(t,e,r,o){e&&function(t,e,r){if(e.attributes)for(const[o]of Object.entries(e.attributes))t.removeAttribute(o,r);if(e.styles)for(const o of Object.keys(e.styles))t.removeStyle(o,r);e.classes&&t.removeClass(e.classes,r)}(t,e,o),r&&Kr(t,r,o)}function Kr(t,e,r){if(e.attributes)for(const[o,n]of Object.entries(e.attributes))t.setAttribute(o,n,r);e.styles&&t.setStyle(e.styles,r),e.classes&&t.addClass(e.classes,r)}function Zr(t,e){const r=Wr(t);for(const o in e)Array.isArray(e[o])?r[o]=Array.from(new Set([...t[o]||[],...e[o]])):r[o]={...t[o],...e[o]};return r}function Qr({model:t}){return(e,r)=>r.writer.createElement(t,{htmlContent:e.getCustomProperty("$rawContent")})}function Jr(t,{view:e,isInline:r}){const o=t.t;return(t,{writer:n})=>{const i=o("HTML object"),s=Xr(e,t,n),l=t.getAttribute("htmlAttributes");n.addClass("html-object-embed__content",s),l&&Kr(n,l,s);const c=n.createContainerElement(r?"span":"div",{class:"html-object-embed","data-html-object-embed-label":i},s);return(0,qe.toWidget)(c,n,{widgetLabel:i})}}function Xr(t,e,r){return r.createRawElement(t,null,((t,r)=>{r.setContentOf(t,e.getAttribute("htmlContent"))}))}function Yr({priority:t,view:e}){return(r,o)=>{if(!r)return;const{writer:n}=o,i=n.createAttributeElement(e,null,{priority:t});return Kr(n,r,i),i}}function to({view:t},e){return r=>{r.on(`element:${t}`,((t,r,o)=>{if(!r.modelRange||r.modelRange.isCollapsed)return;const n=e.processViewAttributes(r.viewItem,o);n&&o.writer.setAttribute("htmlAttributes",n,r.modelRange)}),{priority:"low"})}}function eo({model:t}){return e=>{e.on(`attribute:htmlAttributes:${t}`,((t,e,r)=>{if(!r.consumable.consume(e.item,t.name))return;const{attributeOldValue:o,attributeNewValue:n}=e;Gr(r.writer,o,n,r.mapper.toViewElement(e.item))}))}}const ro=function(t,e){for(var r=-1,o=null==t?0:t.length,n=Array(o);++r<o;)n[r]=e(t[r],r,t);return n};const oo=function(t,e,r,o){for(var n=t.length,i=r+(o?1:-1);o?i--:++i<n;)if(e(t[i],i,t))return i;return-1};const no=function(t){return t!=t};const io=function(t,e,r){for(var o=r-1,n=t.length;++o<n;)if(t[o]===e)return o;return-1};const so=function(t,e,r){return e==e?io(t,e,r):oo(t,no,r)};const lo=function(t,e,r,o){for(var n=r-1,i=t.length;++n<i;)if(o(t[n],e))return n;return-1};var co=Array.prototype.splice;const ao=function(t,e,r,o){var n=o?lo:so,i=-1,s=e.length,l=t;for(t===e&&(e=xt(e)),r&&(l=ro(t,ce(r)));++i<s;)for(var c=0,a=e[i],u=r?r(a):a;(c=n(l,u,c,o))>-1;)l!==t&&co.call(l,c,1),co.call(t,c,1);return t};const uo=Me((function(t,e){return t&&t.length&&e&&e.length?ao(t,e):t}));var mo=r(62),ho=r.n(mo),fo=r(142),bo={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};ho()(fo.Z,bo);fo.Z.locals;class po extends t.Plugin{constructor(t){super(t),this._dataSchema=t.plugins.get("DataSchema"),this._allowedAttributes=new ze.Matcher,this._disallowedAttributes=new ze.Matcher,this._allowedElements=new Set,this._disallowedElements=new Set,this._dataInitialized=!1,this._coupledAttributes=null,this._registerElementsAfterInit(),this._registerElementHandlers(),this._registerModelPostFixer()}static get pluginName(){return"DataFilter"}static get requires(){return[He,qe.Widget]}loadAllowedConfig(t){for(const e of t){const t=e.name||/[\s\S]+/,r=Ao(e);this.allowElement(t),r.forEach((t=>this.allowAttributes(t)))}}loadDisallowedConfig(t){for(const e of t){const t=e.name||/[\s\S]+/,r=Ao(e);0==r.length?this.disallowElement(t):r.forEach((t=>this.disallowAttributes(t)))}}allowElement(t){for(const r of this._dataSchema.getDefinitionsForView(t,!0))this._allowedElements.has(r)||(this._allowedElements.add(r),this._dataInitialized&&this.editor.data.once("set",(()=>{this._fireRegisterEvent(r)}),{priority:e.priorities.get("highest")+1}),this._coupledAttributes=null)}disallowElement(t){for(const e of this._dataSchema.getDefinitionsForView(t,!1))this._disallowedElements.add(e.view)}allowAttributes(t){this._allowedAttributes.add(t)}disallowAttributes(t){this._disallowedAttributes.add(t)}processViewAttributes(t,e){return go(t,e,this._disallowedAttributes),go(t,e,this._allowedAttributes)}_registerElementsAfterInit(){this.editor.data.on("init",(()=>{this._dataInitialized=!0;for(const t of this._allowedElements)this._fireRegisterEvent(t)}),{priority:e.priorities.get("highest")+1})}_registerElementHandlers(){this.on("register",((t,r)=>{const o=this.editor.model.schema;if(r.isObject&&!o.isRegistered(r.model))this._registerObjectElement(r);else if(r.isBlock)this._registerBlockElement(r);else{if(!r.isInline)throw new e.CKEditorError("data-filter-invalid-definition",null,r);this._registerInlineElement(r)}t.stop()}),{priority:"lowest"})}_registerModelPostFixer(){const t=this.editor.model;t.document.registerPostFixer((e=>{const r=t.document.differ.getChanges();let o=!1;const n=this._getCoupledAttributesMap();for(const t of r){if("attribute"!=t.type||null!==t.attributeNewValue)continue;const r=n.get(t.attributeKey);if(r)for(const{item:n}of t.range.getWalker({shallow:!0}))for(const t of r)n.hasAttribute(t)&&(e.removeAttribute(t,n),o=!0)}return o}))}_getCoupledAttributesMap(){if(this._coupledAttributes)return this._coupledAttributes;this._coupledAttributes=new Map;for(const t of this._allowedElements)if(t.coupledAttribute&&t.model){const e=this._coupledAttributes.get(t.coupledAttribute);e?e.push(t.model):this._coupledAttributes.set(t.coupledAttribute,[t.model])}}_fireRegisterEvent(t){t.view&&this._disallowedElements.has(t.view)||this.fire(t.view?`register:${t.view}`:"register",t)}_registerObjectElement(t){const r=this.editor,o=r.model.schema,n=r.conversion,{view:i,model:s}=t;o.register(s,t.modelSchema),i&&(o.extend(t.model,{allowAttributes:["htmlAttributes","htmlContent"]}),r.data.registerRawContentMatcher({name:i}),n.for("upcast").elementToElement({view:i,model:Qr(t),converterPriority:e.priorities.get("low")+1}),n.for("upcast").add(to(t,this)),n.for("editingDowncast").elementToStructure({model:{name:s,attributes:["htmlAttributes"]},view:Jr(r,t)}),n.for("dataDowncast").elementToElement({model:s,view:(t,{writer:e})=>Xr(i,t,e)}),n.for("dataDowncast").add(eo(t)))}_registerBlockElement(t){const r=this.editor,o=r.model.schema,n=r.conversion,{view:i,model:s}=t;if(!o.isRegistered(t.model)){if(o.register(t.model,t.modelSchema),!i)return;n.for("upcast").elementToElement({model:s,view:i,converterPriority:e.priorities.get("low")+1}),n.for("downcast").elementToElement({model:s,view:i})}i&&(o.extend(t.model,{allowAttributes:"htmlAttributes"}),n.for("upcast").add(to(t,this)),n.for("downcast").add(eo(t)))}_registerInlineElement(t){const e=this.editor,r=e.model.schema,o=e.conversion,n=t.model;r.extend("$text",{allowAttributes:n}),t.attributeProperties&&r.setAttributeProperties(n,t.attributeProperties),o.for("upcast").add(function({view:t,model:e},r){return o=>{o.on(`element:${t}`,((t,o,n)=>{let i=r.processViewAttributes(o.viewItem,n);if(i||n.consumable.test(o.viewItem,{name:!0})){i=i||{},n.consumable.consume(o.viewItem,{name:!0}),o.modelRange||(o=Object.assign(o,n.convertChildren(o.viewItem,o.modelCursor)));for(const t of o.modelRange.getItems())if(n.schema.checkAttribute(t,e)){const r=Zr(i,t.getAttribute(e)||{});n.writer.setAttribute(e,r,t)}}}),{priority:"low"})}}(t,this)),o.for("downcast").attributeToElement({model:n,view:Yr(t)})}}function go(t,e,r){const o=function(t,{consumable:e},r){const o=r.matchAll(t)||[],n=[];for(const r of o)vo(e,t,r),delete r.match.name,e.consume(t,r.match),n.push(r);return n}(t,e,r),{attributes:n,styles:i,classes:s}=function(t){const e={attributes:new Set,classes:new Set,styles:new Set};for(const r of t)for(const t in e){(r.match[t]||[]).forEach((r=>e[t].add(r)))}return e}(o),l={};if(n.size)for(const t of n)jo(t)||n.delete(t);return n.size&&(l.attributes=wo(n,(e=>t.getAttribute(e)))),i.size&&(l.styles=wo(i,(e=>t.getStyle(e)))),s.size&&(l.classes=Array.from(s)),Object.keys(l).length?l:null}function vo(t,e,r){for(const o of["attributes","classes","styles"]){const n=r.match[o];if(n)for(const r of Array.from(n))t.test(e,{[o]:[r]})||uo(n,r)}}function wo(t,e){const r={};for(const o of t){void 0!==e(o)&&(r[o]=e(o))}return r}function yo(t,e){const{name:r}=t;return ie(t[e])?Object.entries(t[e]).map((([t,o])=>({name:r,[e]:{[t]:o}}))):Array.isArray(t[e])?t[e].map((t=>({name:r,[e]:[t]}))):[t]}function Ao(t){const{name:e,attributes:r,classes:o,styles:n}=t,i=[];return r&&i.push(...yo({name:e,attributes:r},"attributes")),o&&i.push(...yo({name:e,classes:o},"classes")),n&&i.push(...yo({name:e,styles:n},"styles")),i}function jo(t){try{document.createAttribute(t)}catch(t){return!1}return!0}class _o extends t.Plugin{static get requires(){return[po]}static get pluginName(){return"CodeBlockElementSupport"}init(){if(!this.editor.plugins.has("CodeBlockEditing"))return;const t=this.editor.plugins.get(po);t.on("register:pre",((e,r)=>{if("codeBlock"!==r.model)return;const o=this.editor,n=o.model.schema,i=o.conversion;n.extend("codeBlock",{allowAttributes:["htmlAttributes","htmlContentAttributes"]}),i.for("upcast").add(function(t){return e=>{e.on("element:code",((e,r,o)=>{const n=r.viewItem,i=n.parent;function s(e,n){const i=t.processViewAttributes(e,o);i&&o.writer.setAttribute(n,i,r.modelRange)}i&&i.is("element","pre")&&(s(i,"htmlAttributes"),s(n,"htmlContentAttributes"))}),{priority:"low"})}}(t)),i.for("downcast").add((t=>{t.on("attribute:htmlAttributes:codeBlock",((t,e,r)=>{if(!r.consumable.consume(e.item,t.name))return;const{attributeOldValue:o,attributeNewValue:n}=e,i=r.mapper.toViewElement(e.item).parent;Gr(r.writer,o,n,i)})),t.on("attribute:htmlContentAttributes:codeBlock",((t,e,r)=>{if(!r.consumable.consume(e.item,t.name))return;const{attributeOldValue:o,attributeNewValue:n}=e,i=r.mapper.toViewElement(e.item);Gr(r.writer,o,n,i)}))})),e.stop()}))}}class So extends t.Plugin{static get requires(){return[po]}static get pluginName(){return"DualContentModelElementSupport"}init(){this.editor.plugins.get(po).on("register",((t,r)=>{const o=this.editor,n=o.model.schema,i=o.conversion;if(!r.paragraphLikeModel)return;if(n.isRegistered(r.model)||n.isRegistered(r.paragraphLikeModel))return;const s={model:r.paragraphLikeModel,view:r.view};n.register(r.model,r.modelSchema),n.register(s.model,{inheritAllFrom:"$block"}),i.for("upcast").elementToElement({view:r.view,model:(t,{writer:e})=>this._hasBlockContent(t)?e.createElement(r.model):e.createElement(s.model),converterPriority:e.priorities.get("low")+1}),i.for("downcast").elementToElement({view:r.view,model:r.model}),this._addAttributeConversion(r),i.for("downcast").elementToElement({view:s.view,model:s.model}),this._addAttributeConversion(s),t.stop()}))}_hasBlockContent(t){const e=this.editor.editing.view,r=e.domConverter.blockElements;for(const o of e.createRangeIn(t).getItems())if(o.is("element")&&r.includes(o.name))return!0;return!1}_addAttributeConversion(t){const e=this.editor,r=e.conversion,o=e.plugins.get(po);e.model.schema.extend(t.model,{allowAttributes:"htmlAttributes"}),r.for("upcast").add(to(t,o)),r.for("downcast").add(eo(t))}}class Oo extends t.Plugin{static get requires(){return[He]}static get pluginName(){return"HeadingElementSupport"}init(){const t=this.editor;if(!t.plugins.has("HeadingEditing"))return;const e=t.plugins.get(He),r=t.config.get("heading.options"),o=[];for(const t of r)"model"in t&&"view"in t&&(e.registerBlockElement({view:t.view,model:t.model}),o.push(t.model));e.extendBlockElement({model:"htmlHgroup",modelSchema:{allowChildren:o}})}}class ko extends t.Plugin{static get requires(){return[po]}static get pluginName(){return"ImageElementSupport"}init(){const t=this.editor;if(!t.plugins.has("ImageInlineEditing")&&!t.plugins.has("ImageBlockEditing"))return;const e=t.model.schema,r=t.conversion,o=t.plugins.get(po);o.on("register:figure",(()=>{r.for("upcast").add(function(t){return e=>{e.on("element:figure",((e,r,o)=>{const n=r.viewItem;if(!r.modelRange||!n.hasClass("image"))return;const i=t.processViewAttributes(n,o);i&&o.writer.setAttribute("htmlFigureAttributes",i,r.modelRange)}),{priority:"low"})}}(o))})),o.on("register:img",((t,n)=>{"imageBlock"!==n.model&&"imageInline"!==n.model||(e.isRegistered("imageBlock")&&e.extend("imageBlock",{allowAttributes:["htmlAttributes","htmlFigureAttributes","htmlLinkAttributes"]}),e.isRegistered("imageInline")&&e.extend("imageInline",{allowAttributes:["htmlA","htmlAttributes"]}),r.for("upcast").add(function(t){return e=>{e.on("element:img",((e,r,o)=>{if(!r.modelRange)return;const n=r.viewItem,i=n.parent;function s(e,n){const i=t.processViewAttributes(e,o);i&&o.writer.setAttribute(n,i,r.modelRange)}function l(t){r.modelRange&&r.modelRange.getContainedElement().is("element","imageBlock")&&s(t,"htmlLinkAttributes")}s(n,"htmlAttributes"),i.is("element","a")&&l(i)}),{priority:"low"})}}(o)),r.for("downcast").add((t=>{function e(e){t.on(`attribute:${e}:imageInline`,((t,e,r)=>{if(!r.consumable.consume(e.item,t.name))return;const{attributeOldValue:o,attributeNewValue:n}=e,i=r.mapper.toViewElement(e.item);Gr(r.writer,o,n,i)}),{priority:"low"})}function r(e,r){t.on(`attribute:${r}:imageBlock`,((t,r,o)=>{if(!o.consumable.test(r.item,t.name))return;const{attributeOldValue:n,attributeNewValue:i}=r,s=o.mapper.toViewElement(r.item),l=Eo(o.writer,s,e);l&&(Gr(o.writer,n,i,l),o.consumable.consume(r.item,t.name))}),{priority:"low"}),"a"===e&&t.on("attribute:linkHref:imageBlock",((t,e,r)=>{if(!r.consumable.consume(e.item,"attribute:htmlLinkAttributes:imageBlock"))return;const o=r.mapper.toViewElement(e.item),n=Eo(r.writer,o,"a");Kr(r.writer,e.item.getAttribute("htmlLinkAttributes"),n)}),{priority:"low"})}e("htmlAttributes"),r("img","htmlAttributes"),r("figure","htmlFigureAttributes"),r("a","htmlLinkAttributes")})),t.stop())}))}}function Eo(t,e,r){const o=t.createRangeOn(e);for(const{item:t}of o.getWalker())if(t.is("element",r))return t}class Co extends t.Plugin{static get requires(){return[po]}static get pluginName(){return"MediaEmbedElementSupport"}init(){const t=this.editor;if(!t.plugins.has("MediaEmbed")||t.config.get("mediaEmbed.previewsInData"))return;const e=t.model.schema,r=t.conversion,o=this.editor.plugins.get(po),n=this.editor.plugins.get(He),i=t.config.get("mediaEmbed.elementName");n.registerBlockElement({model:"media",view:i}),o.on("register:figure",(()=>{r.for("upcast").add(function(t){return e=>{e.on("element:figure",((e,r,o)=>{const n=r.viewItem;if(!r.modelRange||!n.hasClass("media"))return;const i=t.processViewAttributes(n,o);i&&o.writer.setAttribute("htmlFigureAttributes",i,r.modelRange)}),{priority:"low"})}}(o))})),o.on(`register:${i}`,((t,n)=>{"media"===n.model&&(e.extend("media",{allowAttributes:["htmlAttributes","htmlFigureAttributes"]}),r.for("upcast").add(function(t,e){return t=>{t.on(`element:${e}`,r,{priority:"low"})};function r(e,r,o){function n(e,n){const i=t.processViewAttributes(e,o);i&&o.writer.setAttribute(n,i,r.modelRange)}n(r.viewItem,"htmlAttributes")}}(o,i)),r.for("dataDowncast").add(function(t){return e=>{function r(t,r){e.on(`attribute:${r}:media`,((e,r,o)=>{if(!o.consumable.consume(r.item,e.name))return;const{attributeOldValue:n,attributeNewValue:i}=r,s=o.mapper.toViewElement(r.item),l=function(t,e,r){const o=t.createRangeOn(e);for(const{item:t}of o.getWalker())if(t.is("element",r))return t}(o.writer,s,t);Gr(o.writer,n,i,l)}))}r(t,"htmlAttributes"),r("figure","htmlFigureAttributes")}}(i)),t.stop())}))}}class Fo extends t.Plugin{static get requires(){return[po]}static get pluginName(){return"ScriptElementSupport"}init(){const t=this.editor.plugins.get(po);t.on("register:script",((e,r)=>{const o=this.editor,n=o.model.schema,i=o.conversion;n.register("htmlScript",r.modelSchema),n.extend("htmlScript",{allowAttributes:["htmlAttributes","htmlContent"],isContent:!0}),o.data.registerRawContentMatcher({name:"script"}),i.for("upcast").elementToElement({view:"script",model:Qr(r)}),i.for("upcast").add(to(r,t)),i.for("downcast").elementToElement({model:"htmlScript",view:(t,{writer:e})=>Xr("script",t,e)}),i.for("downcast").add(eo(r)),e.stop()}))}}class $o extends t.Plugin{static get requires(){return[po]}static get pluginName(){return"TableElementSupport"}init(){const t=this.editor;if(!t.plugins.has("TableEditing"))return;const e=t.model.schema,r=t.conversion,o=t.plugins.get(po);o.on("register:figure",(()=>{r.for("upcast").add(function(t){return e=>{e.on("element:figure",((e,r,o)=>{const n=r.viewItem;if(!r.modelRange||!n.hasClass("table"))return;const i=t.processViewAttributes(n,o);i&&o.writer.setAttribute("htmlFigureAttributes",i,r.modelRange)}),{priority:"low"})}}(o))})),o.on("register:table",((t,n)=>{"table"===n.model&&(e.extend("table",{allowAttributes:["htmlAttributes","htmlFigureAttributes","htmlTheadAttributes","htmlTbodyAttributes"]}),r.for("upcast").add(function(t){return e=>{e.on("element:table",((e,r,o)=>{const n=r.viewItem;i(n,"htmlAttributes");for(const t of n.getChildren())t.is("element","thead")&&i(t,"htmlTheadAttributes"),t.is("element","tbody")&&i(t,"htmlTbodyAttributes");function i(e,n){const i=t.processViewAttributes(e,o);i&&o.writer.setAttribute(n,i,r.modelRange)}}),{priority:"low"})}}(o)),r.for("downcast").add((t=>{function e(e,r){t.on(`attribute:${r}:table`,((t,r,o)=>{if(!o.consumable.consume(r.item,t.name))return;const n=o.mapper.toViewElement(r.item),i=function(t,e,r){const o=t.createRangeOn(e);for(const{item:t}of o.getWalker())if(t.is("element",r))return t}(o.writer,n,e);Kr(o.writer,r.attributeNewValue,i)}))}e("table","htmlAttributes"),e("figure","htmlFigureAttributes"),e("thead","htmlTheadAttributes"),e("tbody","htmlTbodyAttributes")})),t.stop())}))}}class xo extends t.Plugin{static get requires(){return[po]}static get pluginName(){return"StyleElementSupport"}init(){const t=this.editor.plugins.get(po);t.on("register:style",((e,r)=>{const o=this.editor,n=o.model.schema,i=o.conversion;n.register("htmlStyle",r.modelSchema),n.extend("htmlStyle",{allowAttributes:["htmlAttributes","htmlContent"],isContent:!0}),o.data.registerRawContentMatcher({name:"style"}),i.for("upcast").elementToElement({view:"style",model:Qr(r)}),i.for("upcast").add(to(r,t)),i.for("downcast").elementToElement({model:"htmlStyle",view:(t,{writer:e})=>Xr("style",t,e)}),i.for("downcast").add(eo(r)),e.stop()}))}}const Io=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};const Po=function(t){return this.__data__.has(t)};function Bo(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new bt;++e<r;)this.add(t[e])}Bo.prototype.add=Bo.prototype.push=Io,Bo.prototype.has=Po;const To=Bo;const Ro=function(t,e){for(var r=-1,o=null==t?0:t.length;++r<o;)if(e(t[r],r,t))return!0;return!1};const Do=function(t,e){return t.has(e)};const Lo=function(t,e,r,o,n,i){var s=1&r,l=t.length,c=e.length;if(l!=c&&!(s&&c>l))return!1;var a=i.get(t),u=i.get(e);if(a&&u)return a==e&&u==t;var m=-1,d=!0,h=2&r?new To:void 0;for(i.set(t,e),i.set(e,t);++m<l;){var f=t[m],b=e[m];if(o)var p=s?o(b,f,m,e,t,i):o(f,b,m,t,e,i);if(void 0!==p){if(p)continue;d=!1;break}if(h){if(!Ro(e,(function(t,e){if(!Do(h,e)&&(f===t||n(f,t,r,o,i)))return h.push(e)}))){d=!1;break}}else if(f!==b&&!n(f,b,r,o,i)){d=!1;break}}return i.delete(t),i.delete(e),d};const Mo=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t,o){r[++e]=[o,t]})),r};const No=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r};var Vo=_?_.prototype:void 0,Ho=Vo?Vo.valueOf:void 0;const zo=function(t,e,r,o,n,i,s){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!i(new Ct(t),new Ct(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return l(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var c=Mo;case"[object Set]":var a=1&o;if(c||(c=No),t.size!=e.size&&!a)return!1;var u=s.get(t);if(u)return u==e;o|=2,s.set(t,e);var m=Lo(c(t),c(e),o,n,i,s);return s.delete(t),m;case"[object Symbol]":if(Ho)return Ho.call(t)==Ho.call(e)}return!1};var qo=Object.prototype.hasOwnProperty;const Uo=function(t,e,r,o,n,i){var s=1&r,l=cr(t),c=l.length;if(c!=cr(e).length&&!s)return!1;for(var a=c;a--;){var u=l[a];if(!(s?u in e:qo.call(e,u)))return!1}var m=i.get(t),d=i.get(e);if(m&&d)return m==e&&d==t;var h=!0;i.set(t,e),i.set(e,t);for(var f=s;++a<c;){var b=t[u=l[a]],p=e[u];if(o)var g=s?o(p,b,u,e,t,i):o(b,p,u,t,e,i);if(!(void 0===g?b===p||n(b,p,r,o,i):g)){h=!1;break}f||(f="constructor"==u)}if(h&&!f){var v=t.constructor,w=e.constructor;v==w||!("constructor"in t)||!("constructor"in e)||"function"==typeof v&&v instanceof v&&"function"==typeof w&&w instanceof w||(h=!1)}return i.delete(t),i.delete(e),h};var Wo="[object Arguments]",Go="[object Array]",Ko="[object Object]",Zo=Object.prototype.hasOwnProperty;const Qo=function(t,e,r,o,n,i){var s=Ut(t),l=Ut(e),c=s?Go:Or(t),a=l?Go:Or(e),u=(c=c==Wo?Ko:c)==Ko,m=(a=a==Wo?Ko:a)==Ko,d=c==a;if(d&&Yt(t)){if(!Yt(e))return!1;s=!0,u=!1}if(d&&!u)return i||(i=new vt),s||fe(t)?Lo(t,e,r,o,n,i):zo(t,e,c,r,o,n,i);if(!(1&r)){var h=u&&Zo.call(t,"__wrapped__"),f=m&&Zo.call(e,"__wrapped__");if(h||f){var b=h?t.value():t,p=f?e.value():e;return i||(i=new vt),n(b,p,r,o,i)}}return!!d&&(i||(i=new vt),Uo(t,e,r,o,n,i))};const Jo=function t(e,r,o,n,i){return e===r||(null==e||null==r||!Mt(e)&&!Mt(r)?e!=e&&r!=r:Qo(e,r,o,n,t,i))};const Xo=function(t,e){return Jo(t,e)};class Yo extends t.Plugin{static get requires(){return[po]}static get pluginName(){return"DocumentListElementSupport"}init(){const t=this.editor;if(!t.plugins.has("DocumentListEditing"))return;const e=t.model.schema,r=t.conversion,o=t.plugins.get(po),n=t.plugins.get("DocumentListEditing");n.registerDowncastStrategy({scope:"item",attributeName:"htmlLiAttributes",setAttributeOnDowncast(t,e,r){Kr(t,e,r)}}),n.registerDowncastStrategy({scope:"list",attributeName:"htmlListAttributes",setAttributeOnDowncast(t,e,r){Kr(t,e,r)}}),o.on("register",((t,n)=>{["ul","ol","li"].includes(n.view)&&(t.stop(),e.checkAttribute("$block","htmlListAttributes")||(e.extend("$block",{allowAttributes:["htmlListAttributes","htmlLiAttributes"]}),e.extend("$blockObject",{allowAttributes:["htmlListAttributes","htmlLiAttributes"]}),e.extend("$container",{allowAttributes:["htmlListAttributes","htmlLiAttributes"]}),r.for("upcast").add((t=>{t.on("element:ul",tn("htmlListAttributes",o),{priority:"low"}),t.on("element:ol",tn("htmlListAttributes",o),{priority:"low"}),t.on("element:li",tn("htmlLiAttributes",o),{priority:"low"})}))))})),n.on("postFixer",((t,{listNodes:e,writer:r})=>{const o=[];for(const{node:n,previous:i}of e){if(!i)continue;const e=n.getAttribute("listIndent"),s=i.getAttribute("listIndent");let l=null;if(e>s?o[s]=i:e<s?(l=o[e],o.length=e):l=i,l){if(l.getAttribute("listType")==n.getAttribute("listType")){const e=l.getAttribute("htmlListAttributes");Xo(n.getAttribute("htmlListAttributes"),e)||(r.setAttribute("htmlListAttributes",e,n),t.return=!0)}if(l.getAttribute("listItemId")==n.getAttribute("listItemId")){const e=l.getAttribute("htmlLiAttributes");Xo(n.getAttribute("htmlLiAttributes"),e)||(r.setAttribute("htmlLiAttributes",e,n),t.return=!0)}}}}))}afterInit(){const t=this.editor;t.commands.get("indentList")&&this.listenTo(t.commands.get("indentList"),"afterExecute",((e,r)=>{t.model.change((t=>{for(const e of r)t.setAttribute("htmlListAttributes",{},e)}))}))}}function tn(t,e){return(r,o,n)=>{const i=o.viewItem;o.modelRange||Object.assign(o,n.convertChildren(o.viewItem,o.modelCursor));const s=e.processViewAttributes(i,n);for(const e of o.modelRange.getItems({shallow:!0}))e.hasAttribute("listItemId")&&(e.hasAttribute(t)||n.writer.setAttribute(t,s||{},e))}}class en extends t.Plugin{static get requires(){return[po,He]}static get pluginName(){return"CustomElementSupport"}init(){const t=this.editor.plugins.get(po),e=this.editor.plugins.get(He);t.on("register:$customElement",((r,o)=>{r.stop();const n=this.editor,i=n.model.schema,s=n.conversion,l=n.editing.view.domConverter.unsafeElements,c=n.data.htmlProcessor.domConverter.preElements;i.register(o.model,o.modelSchema),i.extend(o.model,{allowAttributes:["htmlElementName","htmlAttributes","htmlContent"],isContent:!0}),s.for("upcast").elementToElement({view:/.*/,model:(r,i)=>{if("$comment"==r.name)return;if(!function(t){try{document.createElement(t)}catch(t){return!1}return!0}(r.name))return;if(e.getDefinitionsForView(r.name).size)return;l.includes(r.name)||l.push(r.name),c.includes(r.name)||c.push(r.name);const s=i.writer.createElement(o.model,{htmlElementName:r.name}),a=t.processViewAttributes(r,i);a&&i.writer.setAttribute("htmlAttributes",a,s);const u=new ze.UpcastWriter(r.document).createDocumentFragment(r),m=n.data.processor.toData(u);i.writer.setAttribute("htmlContent",m,s);for(const{item:t}of n.editing.view.createRangeIn(r))i.consumable.consume(t,{name:!0});return s},converterPriority:"low"}),s.for("editingDowncast").elementToElement({model:{name:o.model,attributes:["htmlElementName","htmlAttributes","htmlContent"]},view:(t,{writer:e})=>{const r=t.getAttribute("htmlElementName"),o=e.createRawElement(r);return t.hasAttribute("htmlAttributes")&&Kr(e,t.getAttribute("htmlAttributes"),o),o}}),s.for("dataDowncast").elementToElement({model:{name:o.model,attributes:["htmlElementName","htmlAttributes","htmlContent"]},view:(t,{writer:e})=>{const r=t.getAttribute("htmlElementName"),o=t.getAttribute("htmlContent"),n=e.createRawElement(r,null,((t,e)=>{e.setContentOf(t,o);const r=t.firstChild;for(r.remove();r.firstChild;)t.appendChild(r.firstChild)}));return t.hasAttribute("htmlAttributes")&&Kr(e,t.getAttribute("htmlAttributes"),n),n}})}))}}class rn extends t.Plugin{static get pluginName(){return"GeneralHtmlSupport"}static get requires(){return[po,_o,So,Oo,ko,Co,Fo,$o,xo,Yo,en]}init(){const t=this.editor,e=t.plugins.get(po);e.loadAllowedConfig(t.config.get("htmlSupport.allow")||[]),e.loadDisallowedConfig(t.config.get("htmlSupport.disallow")||[])}getGhsAttributeNameForElement(t){const e=this.editor.plugins.get("DataSchema"),r=Array.from(e.getDefinitionsForView(t,!1));return r&&r.length&&r[0].isInline&&!r[0].isObject?r[0].model:"htmlAttributes"}addModelHtmlClass(t,r,o){const n=this.editor.model,i=this.getGhsAttributeNameForElement(t);n.change((t=>{for(const s of on(n,o,i))nn(t,s,i,"classes",(t=>{for(const o of(0,e.toArray)(r))t.add(o)}))}))}removeModelHtmlClass(t,r,o){const n=this.editor.model,i=this.getGhsAttributeNameForElement(t);n.change((t=>{for(const s of on(n,o,i))nn(t,s,i,"classes",(t=>{for(const o of(0,e.toArray)(r))t.delete(o)}))}))}setModelHtmlAttributes(t,e,r){const o=this.editor.model,n=this.getGhsAttributeNameForElement(t);o.change((t=>{for(const i of on(o,r,n))nn(t,i,n,"attributes",(t=>{for(const[r,o]of Object.entries(e))t.set(r,o)}))}))}removeModelHtmlAttributes(t,r,o){const n=this.editor.model,i=this.getGhsAttributeNameForElement(t);n.change((t=>{for(const s of on(n,o,i))nn(t,s,i,"attributes",(t=>{for(const o of(0,e.toArray)(r))t.delete(o)}))}))}setModelHtmlStyles(t,e,r){const o=this.editor.model,n=this.getGhsAttributeNameForElement(t);o.change((t=>{for(const i of on(o,r,n))nn(t,i,n,"styles",(t=>{for(const[r,o]of Object.entries(e))t.set(r,o)}))}))}removeModelHtmlStyles(t,r,o){const n=this.editor.model,i=this.getGhsAttributeNameForElement(t);n.change((t=>{for(const s of on(n,o,i))nn(t,s,i,"styles",(t=>{for(const o of(0,e.toArray)(r))t.delete(o)}))}))}}function*on(t,e,r){if(e.is("documentSelection")&&e.isCollapsed)t.schema.checkAttributeInSelection(e,r)&&(yield e);else for(const o of function(t,e,r){return e.is("node")||e.is("$text")||e.is("$textProxy")?t.schema.checkAttribute(e,r)?[t.createRangeOn(e)]:[]:t.schema.getValidRanges(t.createSelection(e).getRanges(),r)}(t,e,r))yield*o.getItems({shallow:!0})}function nn(t,e,r,o,n){const i=e.getAttribute(r),s={};for(const t of["attributes","styles","classes"])if(t!=o)i&&i[t]&&(s[t]=i[t]);else{const e="classes"==t?new Set(i&&i[t]||[]):new Map(Object.entries(i&&i[t]||{}));n(e),e.size&&(s[t]="classes"==t?Array.from(e):Object.fromEntries(e))}Object.keys(s).length?e.is("documentSelection")?t.setSelectionAttribute(r,s):t.setAttribute(r,s,e):i&&(e.is("documentSelection")?t.removeSelectionAttribute(r):t.removeAttribute(r,e))}class sn extends t.Plugin{static get pluginName(){return"HtmlComment"}init(){const t=this.editor;t.data.processor.skipComments=!1,t.model.schema.addAttributeCheck(((t,e)=>{if(t.endsWith("$root")&&e.startsWith("$comment"))return!0})),t.conversion.for("upcast").elementToMarker({view:"$comment",model:(t,{writer:r})=>{const o=this.editor.model.document.getRoot(),n=t.getCustomProperty("$rawContent"),i=`$comment:${(0,e.uid)()}`;return r.setAttribute(i,n,o),i}}),t.conversion.for("dataDowncast").markerToElement({model:"$comment",view:(t,{writer:e})=>{const r=this.editor.model.document.getRoot(),o=t.markerName,n=r.getAttribute(o),i=e.createUIElement("$comment");return e.setCustomProperty("$rawContent",n,i),i}}),t.model.document.registerPostFixer((e=>{const r=t.model.document.getRoot(),o=t.model.document.differ.getChangedMarkers().filter((t=>t.name.startsWith("$comment"))).filter((t=>{const e=t.data.newRange;return e&&"$graveyard"===e.root.rootName}));if(0===o.length)return!1;for(const t of o)e.removeMarker(t.name),e.removeAttribute(t.name,r);return!0})),t.data.on("set",(()=>{for(const e of t.model.markers.getMarkersGroup("$comment"))this.removeHtmlComment(e.name)}),{priority:"high"}),t.model.on("deleteContent",((e,[r])=>{for(const e of r.getRanges()){const r=t.model.schema.getLimitElement(e),o=t.model.createPositionAt(r,0),n=t.model.createPositionAt(r,"end");let i;i=o.isTouching(e.start)&&n.isTouching(e.end)?this.getHtmlCommentsInRange(t.model.createRange(o,n)):this.getHtmlCommentsInRange(e,{skipBoundaries:!0});for(const t of i)this.removeHtmlComment(t)}}),{priority:"high"})}createHtmlComment(t,r){const o=(0,e.uid)(),n=this.editor.model,i=n.document.getRoot(),s=`$comment:${o}`;return n.change((e=>{const o=e.createRange(t);return e.addMarker(s,{usingOperation:!0,affectsData:!0,range:o}),e.setAttribute(s,r,i),s}))}removeHtmlComment(t){const e=this.editor,r=e.model.document.getRoot(),o=e.model.markers.get(t);return!!o&&(e.model.change((e=>{e.removeMarker(o),e.removeAttribute(t,r)})),!0)}getHtmlCommentData(t){const e=this.editor,r=e.model.markers.get(t),o=e.model.document.getRoot();return r?{content:o.getAttribute(t),position:r.getStart()}:null}getHtmlCommentsInRange(t,{skipBoundaries:e=!1}={}){const r=!e;return Array.from(this.editor.model.markers.getMarkersGroup("$comment")).filter((e=>function(t,e){const o=t.getRange().start;return(o.isAfter(e.start)||r&&o.isEqual(e.start))&&(o.isBefore(e.end)||r&&o.isEqual(e.end))}(e,t))).map((t=>t.name))}}})(),(window.CKEditor5=window.CKEditor5||{}).htmlSupport=o})();;
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var t={704:(t,e,o)=>{t.exports=o(79)("./src/core.js")},492:(t,e,o)=>{t.exports=o(79)("./src/engine.js")},273:(t,e,o)=>{t.exports=o(79)("./src/ui.js")},209:(t,e,o)=>{t.exports=o(79)("./src/utils.js")},79:t=>{"use strict";t.exports=CKEditor5.dll}},e={};function o(r){var i=e[r];if(void 0!==i)return i.exports;var n=e[r]={exports:{}};return t[r](n,n.exports,o),n.exports}o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{"use strict";o.r(r),o.d(r,{DecoupledEditor:()=>F});var t=o(704),e=o(209),i=o(492);class n extends t.EditorUI{constructor(t,e){super(t),this.view=e}init(){const t=this.editor,e=this.view,o=t.editing.view,r=e.editable,i=o.document.getRoot();r.name=i.rootName,e.render();const n=r.element;this.setEditableElement(r.name,n),e.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(n),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const t=this.view;this.editor.editing.view.detachDomRoot(t.editable.name),t.destroy()}_initToolbar(){const t=this.editor,e=this.view;e.toolbar.fillFromConfig(t.config.get("toolbar"),this.componentFactory),this.addToolbar(e.toolbar)}_initPlaceholder(){const t=this.editor,e=t.editing.view,o=e.document.getRoot(),r=t.sourceElement,n=t.config.get("placeholder")||r&&"textarea"===r.tagName.toLowerCase()&&r.getAttribute("placeholder");n&&(0,i.enablePlaceholder)({view:e,element:o,text:n,isDirectHost:!1,keepOnFocus:!0})}}var s=o(273);class l extends s.EditorUIView{constructor(t,e,o={}){super(t);const r=t.t;this.toolbar=new s.ToolbarView(t,{shouldGroupWhenFull:o.shouldToolbarGroupWhenFull}),this.editable=new s.InlineEditableUIView(t,e,o.editableElement,{label:t=>r("Rich Text Editor. Editing area: %0",t.name)}),this.toolbar.extendTemplate({attributes:{class:["ck-reset_all","ck-rounded-corners"],dir:t.uiLanguageDirection}})}render(){super.render(),this.registerChild([this.toolbar,this.editable])}}const a=function(t){return null!=t&&"object"==typeof t};const c="object"==typeof global&&global&&global.Object===Object&&global;var d="object"==typeof self&&self&&self.Object===Object&&self;const u=(c||d||Function("return this")()).Symbol;var h=Object.prototype,b=h.hasOwnProperty,p=h.toString,g=u?u.toStringTag:void 0;const f=function(t){var e=b.call(t,g),o=t[g];try{t[g]=void 0;var r=!0}catch(t){}var i=p.call(t);return r&&(e?t[g]=o:delete t[g]),i};var m=Object.prototype.toString;const v=function(t){return m.call(t)};var y=u?u.toStringTag:void 0;const w=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":y&&y in Object(t)?f(t):v(t)};const E=function(t,e){return function(o){return t(e(o))}}(Object.getPrototypeOf,Object);var j=Function.prototype,O=Object.prototype,x=j.toString,T=O.hasOwnProperty,D=x.call(Object);const S=function(t){if(!a(t)||"[object Object]"!=w(t))return!1;var e=E(t);if(null===e)return!0;var o=T.call(e,"constructor")&&e.constructor;return"function"==typeof o&&o instanceof o&&x.call(o)==D};const P=function(t){return a(t)&&1===t.nodeType&&!S(t)};class F extends((0,t.DataApiMixin)((0,t.ElementApiMixin)(t.Editor))){constructor(o,r={}){if(!C(o)&&void 0!==r.initialData)throw new e.CKEditorError("editor-create-initial-data",null);super(r),void 0===this.config.get("initialData")&&this.config.set("initialData",function(t){return C(t)?(0,e.getDataFromElement)(t):t}(o)),C(o)&&(this.sourceElement=o,(0,t.secureSourceElement)(this)),this.model.document.createRoot();const i=!this.config.get("toolbar.shouldNotGroupWhenFull"),s=new l(this.locale,this.editing.view,{editableElement:this.sourceElement,shouldToolbarGroupWhenFull:i});this.ui=new n(this,s)}destroy(){const t=this.getData();return this.ui.destroy(),super.destroy().then((()=>{this.sourceElement&&this.updateSourceElement(t)}))}static create(t,o={}){return new Promise((r=>{if(C(t)&&"TEXTAREA"===t.tagName)throw new e.CKEditorError("editor-wrong-element",null);const i=new this(t,o);r(i.initPlugins().then((()=>i.ui.init())).then((()=>i.data.init(i.config.get("initialData")))).then((()=>i.fire("ready"))).then((()=>i)))}))}}function C(t){return P(t)}})(),(window.CKEditor5=window.CKEditor5||{}).editorDecoupled=r})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, debounce) {
  var liveElement;
  var announcements = [];
  Drupal.behaviors.drupalAnnounce = {
    attach: function attach(context) {
      if (!liveElement) {
        liveElement = document.createElement('div');
        liveElement.id = 'drupal-live-announce';
        liveElement.className = 'visually-hidden';
        liveElement.setAttribute('aria-live', 'polite');
        liveElement.setAttribute('aria-busy', 'false');
        document.body.appendChild(liveElement);
      }
    }
  };
  function announce() {
    var text = [];
    var priority = 'polite';
    var announcement;
    var il = announcements.length;
    for (var i = 0; i < il; i++) {
      announcement = announcements.pop();
      text.unshift(announcement.text);
      if (announcement.priority === 'assertive') {
        priority = 'assertive';
      }
    }
    if (text.length) {
      liveElement.innerHTML = '';
      liveElement.setAttribute('aria-busy', 'true');
      liveElement.setAttribute('aria-live', priority);
      liveElement.innerHTML = text.join('\n');
      liveElement.setAttribute('aria-busy', 'false');
    }
  }
  Drupal.announce = function (text, priority) {
    announcements.push({
      text: text,
      priority: priority
    });
    return debounce(announce, 200)();
  };
})(Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, once) {
  var closeMessage = function closeMessage(message) {
    var messageContainer = message.querySelector('[data-drupal-selector="messages-container"]');
    var closeBtnWrapper = document.createElement('div');
    closeBtnWrapper.setAttribute('class', 'messages__button');
    var closeBtn = document.createElement('button');
    closeBtn.setAttribute('type', 'button');
    closeBtn.setAttribute('class', 'messages__close');
    var closeBtnText = document.createElement('span');
    closeBtnText.setAttribute('class', 'visually-hidden');
    closeBtnText.innerText = Drupal.t('Close message');
    messageContainer.appendChild(closeBtnWrapper);
    closeBtnWrapper.appendChild(closeBtn);
    closeBtn.appendChild(closeBtnText);
    closeBtn.addEventListener('click', function () {
      message.classList.add('hidden');
    });
  };
  Drupal.behaviors.messages = {
    attach: function attach(context) {
      once('messages', '[data-drupal-selector="messages"]', context).forEach(closeMessage);
    }
  };
  Drupal.olivero.closeMessage = closeMessage;
})(Drupal, once);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (Drupal) {
  Drupal.Message = function () {
    function _class() {
      var messageWrapper = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      _classCallCheck(this, _class);
      if (!messageWrapper) {
        this.messageWrapper = Drupal.Message.defaultWrapper();
      } else {
        this.messageWrapper = messageWrapper;
      }
    }
    _createClass(_class, [{
      key: "add",
      value: function add(message) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!options.hasOwnProperty('type')) {
          options.type = 'status';
        }
        if (typeof message !== 'string') {
          throw new Error('Message must be a string.');
        }
        Drupal.Message.announce(message, options);
        options.id = options.id ? String(options.id) : "".concat(options.type, "-").concat(Math.random().toFixed(15).replace('0.', ''));
        if (!Drupal.Message.getMessageTypeLabels().hasOwnProperty(options.type)) {
          var type = options.type;
          throw new Error("The message type, ".concat(type, ", is not present in Drupal.Message.getMessageTypeLabels()."));
        }
        this.messageWrapper.appendChild(Drupal.theme('message', {
          text: message
        }, options));
        return options.id;
      }
    }, {
      key: "select",
      value: function select(id) {
        return this.messageWrapper.querySelector("[data-drupal-message-id^=\"".concat(id, "\"]"));
      }
    }, {
      key: "remove",
      value: function remove(id) {
        return this.messageWrapper.removeChild(this.select(id));
      }
    }, {
      key: "clear",
      value: function clear() {
        var _this = this;
        Array.prototype.forEach.call(this.messageWrapper.querySelectorAll('[data-drupal-message-id]'), function (message) {
          _this.messageWrapper.removeChild(message);
        });
      }
    }], [{
      key: "defaultWrapper",
      value: function defaultWrapper() {
        var wrapper = document.querySelector('[data-drupal-messages]');
        if (!wrapper) {
          wrapper = document.querySelector('[data-drupal-messages-fallback]');
          wrapper.removeAttribute('data-drupal-messages-fallback');
          wrapper.setAttribute('data-drupal-messages', '');
          wrapper.classList.remove('hidden');
        }
        return wrapper.innerHTML === '' ? Drupal.Message.messageInternalWrapper(wrapper) : wrapper.firstElementChild;
      }
    }, {
      key: "getMessageTypeLabels",
      value: function getMessageTypeLabels() {
        return {
          status: Drupal.t('Status message'),
          error: Drupal.t('Error message'),
          warning: Drupal.t('Warning message')
        };
      }
    }, {
      key: "announce",
      value: function announce(message, options) {
        if (!options.priority && (options.type === 'warning' || options.type === 'error')) {
          options.priority = 'assertive';
        }
        if (options.announce !== '') {
          Drupal.announce(options.announce || message, options.priority);
        }
      }
    }, {
      key: "messageInternalWrapper",
      value: function messageInternalWrapper(messageWrapper) {
        var innerWrapper = document.createElement('div');
        innerWrapper.setAttribute('class', 'messages__wrapper');
        messageWrapper.insertAdjacentElement('afterbegin', innerWrapper);
        return innerWrapper;
      }
    }]);
    return _class;
  }();
  Drupal.theme.message = function (_ref, _ref2) {
    var text = _ref.text;
    var type = _ref2.type,
      id = _ref2.id;
    var messagesTypes = Drupal.Message.getMessageTypeLabels();
    var messageWrapper = document.createElement('div');
    messageWrapper.setAttribute('class', "messages messages--".concat(type));
    messageWrapper.setAttribute('role', type === 'error' || type === 'warning' ? 'alert' : 'status');
    messageWrapper.setAttribute('data-drupal-message-id', id);
    messageWrapper.setAttribute('data-drupal-message-type', type);
    messageWrapper.setAttribute('aria-label', messagesTypes[type]);
    messageWrapper.innerHTML = "".concat(text);
    return messageWrapper;
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal) {
  Drupal.theme.message = function (_ref, _ref2) {
    var text = _ref.text;
    var type = _ref2.type,
      id = _ref2.id;
    var messagesTypes = Drupal.Message.getMessageTypeLabels();
    var messageWrapper = document.createElement('div');
    messageWrapper.setAttribute('class', "messages-list__item messages messages--".concat(type));
    messageWrapper.setAttribute('data-drupal-selector', 'messages');
    messageWrapper.setAttribute('role', type === 'error' || type === 'warning' ? 'alert' : 'status');
    messageWrapper.setAttribute('aria-labelledby', "".concat(id, "-title"));
    messageWrapper.setAttribute('data-drupal-message-id', id);
    messageWrapper.setAttribute('data-drupal-message-type', type);
    var svg = '';
    if (['error', 'warning', 'status', 'info'].indexOf(type) > -1) {
      svg = '<div class="messages__icon"><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">';
    }
    if (type === 'error') {
      svg += '<path d="M0.117801 16.7381C0.202622 17.9153 0.292289 18.562 0.481317 19.3904C0.922384 21.3161 1.6785 23.0626 2.76178 24.6589C4.58178 27.3355 7.18213 29.3823 10.1993 30.5062C12.458 31.3467 14.942 31.6495 17.3461 31.3782C22.5831 30.7872 27.1246 27.6164 29.4875 22.9027C30.3769 21.132 30.8616 19.3929 31.0797 17.1983C31.1209 16.7768 31.1209 15.1733 31.0797 14.7518C30.8786 12.7195 30.4714 11.1693 29.7032 9.49549C28.3848 6.62269 26.1722 4.18589 23.4289 2.58235C19.4399 0.249712 14.5373 -0.171762 10.1993 1.44389C5.82985 3.07165 2.38372 6.62753 0.915114 11.0215C0.512822 12.223 0.289865 13.2863 0.161423 14.604C0.127495 14.9674 0.0959901 16.4425 0.117801 16.7381ZM4.02924 14.9577C4.2837 12.2108 5.46391 9.69412 7.40024 7.76115C9.15966 6.00743 11.3529 4.89319 13.8224 4.49352C14.4234 4.39905 14.8717 4.36514 15.6012 4.36271C16.6941 4.36271 17.4793 4.45718 18.5093 4.71636C19.2969 4.91257 20.0143 5.17902 20.7873 5.55931C21.2526 5.78943 21.9409 6.18183 21.9554 6.22786C21.9651 6.25692 5.90498 22.3093 5.86621 22.3093C5.82501 22.3093 5.46391 21.6916 5.21915 21.2071C4.51877 19.8071 4.10921 18.2956 4.005 16.7138C3.98077 16.336 3.99288 15.3453 4.02924 14.9577ZM25.3725 9.6384C25.4428 9.7038 25.816 10.3602 26.0341 10.8035C26.6618 12.0776 27.0301 13.359 27.1876 14.8366C27.2385 15.2968 27.2458 16.5225 27.2022 16.9561C27.0859 18.0776 26.8847 18.9786 26.526 19.9669C26.2377 20.7663 25.7748 21.6843 25.2998 22.394C23.8748 24.5232 21.7882 26.1364 19.3987 26.9576C18.1046 27.4009 16.985 27.585 15.5891 27.585C14.8232 27.585 14.4646 27.5607 13.786 27.4541C12.2568 27.2192 10.6574 26.6209 9.40685 25.8191L9.23237 25.7077L17.2879 17.6609C23.3562 11.598 25.3507 9.61903 25.3725 9.6384Z"/>';
    } else if (type === 'warning') {
      svg += '<path d="M16 0C7.16667 0 0 7.16667 0 16C0 24.8333 7.16667 32 16 32C24.8333 32 32 24.8333 32 16C32 7.16667 24.8333 0 16 0ZM18.6667 25.9792C18.6667 26.3542 18.375 26.6667 18.0208 26.6667H14.0208C13.6458 26.6667 13.3333 26.3542 13.3333 25.9792V22.0208C13.3333 21.6458 13.6458 21.3333 14.0208 21.3333H18.0208C18.375 21.3333 18.6667 21.6458 18.6667 22.0208V25.9792ZM18.625 18.8125C18.6042 19.1042 18.2917 19.3333 17.9167 19.3333H14.0625C13.6667 19.3333 13.3542 19.1042 13.3542 18.8125L13 5.875C13 5.72917 13.0625 5.58333 13.2083 5.5C13.3333 5.39583 13.5208 5.33333 13.7083 5.33333H18.2917C18.4792 5.33333 18.6667 5.39583 18.7917 5.5C18.9375 5.58333 19 5.72917 19 5.875L18.625 18.8125Z"/>';
    } else if (type === 'status') {
      svg += '<path d="M26.75 12.625C26.75 12.9792 26.625 13.3125 26.375 13.5625L15.0625 24.875C14.8125 25.125 14.4583 25.2708 14.1042 25.2708C13.7708 25.2708 13.4167 25.125 13.1667 24.875L5.625 17.3333C5.375 17.0833 5.25 16.75 5.25 16.3958C5.25 16.0417 5.375 15.6875 5.625 15.4375L7.52083 13.5625C7.77083 13.3125 8.10417 13.1667 8.45833 13.1667C8.8125 13.1667 9.14583 13.3125 9.39583 13.5625L14.1042 18.2708L22.6042 9.79167C22.8542 9.54167 23.1875 9.39583 23.5417 9.39583C23.8958 9.39583 24.2292 9.54167 24.4792 9.79167L26.375 11.6667C26.625 11.9167 26.75 12.2708 26.75 12.625ZM32 16C32 7.16667 24.8333 0 16 0C7.16667 0 0 7.16667 0 16C0 24.8333 7.16667 32 16 32C24.8333 32 32 24.8333 32 16Z"/>';
    } else if (type === 'info') {
      svg += '<path d="M32,16c0,8.8-7.2,16-16,16S0,24.8,0,16C0,7.2,7.2,0,16,0S32,7.2,32,16z M16.4,5.3c-3.5,0-5.8,1.5-7.5,4.1c-0.2,0.3-0.2,0.8,0.2,1l2.2,1.7c0.3,0.3,0.8,0.2,1.1-0.1c1.2-1.5,1.9-2.3,3.7-2.3c1.3,0,2.9,0.8,2.9,2.1c0,1-0.8,1.5-2.1,2.2c-1.5,0.9-3.5,1.9-3.5,4.6v0.3c0,0.4,0.3,0.8,0.8,0.8h3.6c0.4,0,0.8-0.3,0.8-0.8v-0.1c0-1.8,5.4-1.9,5.4-6.9C23.9,8.1,20.1,5.3,16.4,5.3z M16,21.3c-1.6,0-3,1.3-3,3c0,1.6,1.3,3,3,3s3-1.3,3-3C19,22.6,17.6,21.3,16,21.3z"/>';
    }
    if (['error', 'warning', 'status', 'info'].indexOf(type) > -1) {
      svg += '</svg></div>';
    }
    messageWrapper.innerHTML = "\n    <div class=\"messages__container\" data-drupal-selector=\"messages-container\">\n      <div class=\"messages__header".concat(!svg ? ' no-icon' : '', "\">\n        <h2 class=\"visually-hidden\">").concat(messagesTypes[type], "</h2>\n        ").concat(svg, "\n      </div>\n      <div class=\"messages__content\">\n        ").concat(text, "\n      </div>\n    </div>\n    ");
    Drupal.olivero.closeMessage(messageWrapper);
    return messageWrapper;
  };
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal) {
  var isIE11 = !!document.documentMode;
  if (isIE11) {
    window.CKEditor5 = null;
    var quickEditLabelObserver = null;
    Drupal.editors.ckeditor5 = {
      attach: function attach(element) {
        var editorMessageContainer = document.createElement('div');
        element.parentNode.insertBefore(editorMessageContainer, element);
        var editorMessages = new Drupal.Message(editorMessageContainer);
        editorMessages.add(Drupal.t('A rich text editor is available for this field when used with <a href="@supported-browsers">supported browsers</a> other than Internet Explorer.', {
          '@supported-browsers': 'https://www.drupal.org/docs/system-requirements/browser-requirements'
        }), {
          type: 'warning'
        });
      },
      detach: function detach() {
        var quickEditToolbar = document.querySelector('#quickedit-entity-toolbar .quickedit-toolbar');
        if (quickEditToolbar) {
          quickEditToolbar.classList.remove('ck5-ie11');
          quickEditToolbar.classList.add('icon-pencil');
          quickEditLabelObserver.disconnect();
        }
      },
      onChange: function onChange() {},
      attachInlineEditor: function attachInlineEditor(element) {
        var quickEditToolbar = document.querySelector('#quickedit-entity-toolbar .quickedit-toolbar');
        var notEditableAlert = Drupal.t('Field Not Editable');
        var notEditableMessage = Drupal.t('CKEditor 5 is not compatible with IE11.');
        function quickEditLabelWarnIE11(toolbarLabel) {
          quickEditLabelObserver.disconnect();
          toolbarLabel.innerHTML = "<div><b>".concat(notEditableAlert, "</b><div>").concat(notEditableMessage, "</div></div>");
          quickEditLabelObserver.observe(toolbarLabel, {
            childList: true
          });
        }
        if (quickEditToolbar) {
          quickEditToolbar.classList.add('ck5-ie11');
          quickEditToolbar.classList.remove('icon-pencil');
          element.classList.add('ck5-ie11');
          var toolbarLabel = quickEditToolbar.querySelector('.quickedit-toolbar-label');
          quickEditLabelObserver = new MutationObserver(function (mutations) {
            for (var i = 0; i < mutations.length; i++) {
              if (mutations[i].type === 'childList') {
                quickEditLabelWarnIE11(toolbarLabel);
              }
            }
          });
          quickEditLabelObserver.observe(toolbarLabel, {
            childList: true
          });
        }
      }
    };
  }
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function (Drupal, debounce, CKEditor5, $, once) {
  if (!CKEditor5) {
    return;
  }
  Drupal.CKEditor5Instances = new Map();
  var callbacks = new Map();
  var required = new Set();
  function findFunc(scope, name) {
    if (!scope) {
      return null;
    }
    var parts = name.includes('.') ? name.split('.') : name;
    if (parts.length > 1) {
      return findFunc(scope[parts.shift()], parts);
    }
    return typeof scope[parts[0]] === 'function' ? scope[parts[0]] : null;
  }
  function buildFunc(config) {
    var func = config.func;
    var fn = findFunc(window, func.name);
    if (typeof fn === 'function') {
      var result = func.invoke ? fn.apply(void 0, _toConsumableArray(func.args)) : fn;
      return result;
    }
    return null;
  }
  function buildRegexp(config) {
    var pattern = config.regexp.pattern;
    var main = pattern.match(/\/(.+)\/.*/)[1];
    var options = pattern.match(/\/.+\/(.*)/)[1];
    return new RegExp(main, options);
  }
  function processConfig(config) {
    function processArray(config) {
      return config.map(function (item) {
        if (_typeof(item) === 'object') {
          return processConfig(item);
        }
        return item;
      });
    }
    return Object.entries(config).reduce(function (processed, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      if (_typeof(value) === 'object') {
        if (!value) {
          return processed;
        }
        if (value.hasOwnProperty('func')) {
          processed[key] = buildFunc(value);
        } else if (value.hasOwnProperty('regexp')) {
          processed[key] = buildRegexp(value);
        } else if (Array.isArray(value)) {
          processed[key] = processArray(value);
        } else {
          processed[key] = processConfig(value);
        }
      } else {
        processed[key] = value;
      }
      return processed;
    }, {});
  }
  var setElementId = function setElementId(element) {
    var id = Math.random().toString().slice(2, 9);
    element.setAttribute('data-ckeditor5-id', id);
    return id;
  };
  var getElementId = function getElementId(element) {
    return element.getAttribute('data-ckeditor5-id');
  };
  function selectPlugins(plugins) {
    return plugins.map(function (pluginDefinition) {
      var _pluginDefinition$spl = pluginDefinition.split('.'),
        _pluginDefinition$spl2 = _slicedToArray(_pluginDefinition$spl, 2),
        build = _pluginDefinition$spl2[0],
        name = _pluginDefinition$spl2[1];
      if (CKEditor5[build] && CKEditor5[build][name]) {
        return CKEditor5[build][name];
      }
      console.warn("Failed to load ".concat(build, " - ").concat(name));
      return null;
    });
  }
  function processRules(rulesGroup) {
    try {
      _toConsumableArray(rulesGroup.cssRules).forEach(ckeditor5SelectorProcessing);
    } catch (e) {
      console.warn("Stylesheet ".concat(rulesGroup.href, " not included in CKEditor reset due to the browser's CORS policy."));
    }
  }
  function ckeditor5SelectorProcessing(rule) {
    if (rule.cssRules) {
      processRules(rule);
    }
    if (!rule.selectorText) {
      return;
    }
    var offCanvasId = '#drupal-off-canvas';
    var CKEditorClass = '.ck';
    var styleFence = '[data-drupal-ck-style-fence]';
    if (rule.selectorText.includes(offCanvasId) || rule.selectorText.includes(CKEditorClass)) {
      rule.selectorText = rule.selectorText.split(/,/g).map(function (selector) {
        if (selector.includes(offCanvasId)) {
          return "".concat(selector.trim(), ":not(").concat(styleFence, " *)");
        }
        if (selector.includes(CKEditorClass)) {
          return [selector.trim(), selector.trim().replace(CKEditorClass, "".concat(offCanvasId, " ").concat(styleFence, " ").concat(CKEditorClass))];
        }
        return selector;
      }).flat().join(', ');
    }
  }
  function offCanvasCss(element) {
    var fenceName = 'data-drupal-ck-style-fence';
    var editor = Drupal.CKEditor5Instances.get(element.getAttribute('data-ckeditor5-id'));
    editor.ui.view.element.setAttribute(fenceName, '');
    if (once('ckeditor5-off-canvas-reset', 'body').length) {
      _toConsumableArray(document.styleSheets).forEach(processRules);
      var prefix = "#drupal-off-canvas [".concat(fenceName, "]");
      var addedCss = ["".concat(prefix, " .ck.ck-content {display:block;min-height:5rem;}"), "".concat(prefix, " .ck.ck-content * {display:initial;background:initial;color:initial;padding:initial;}"), "".concat(prefix, " .ck.ck-content li {display:list-item}"), "".concat(prefix, " .ck.ck-content ol li {list-style-type: decimal}"), "".concat(prefix, " .ck[contenteditable], ").concat(prefix, " .ck[contenteditable] * {-webkit-user-modify: read-write;-moz-user-modify: read-write;}")];
      var blockSelectors = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ol', 'ul', 'address', 'article', 'aside', 'blockquote', 'body', 'dd', 'div', 'dl', 'dt', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'header', 'hgroup', 'hr', 'html', 'legend', 'main', 'menu', 'pre', 'section', 'xmp'].map(function (blockElement) {
        return "".concat(prefix, " .ck.ck-content ").concat(blockElement);
      }).join(', \n');
      var blockCss = "".concat(blockSelectors, " { display: block; }");
      var prefixedCss = [].concat(addedCss, [blockCss]).join('\n');
      var offCanvasCssStyle = document.createElement('style');
      offCanvasCssStyle.textContent = prefixedCss;
      offCanvasCssStyle.setAttribute('id', 'ckeditor5-off-canvas-reset');
      document.body.appendChild(offCanvasCssStyle);
    }
  }
  Drupal.editors.ckeditor5 = {
    attach: function attach(element, format) {
      var editorClassic = CKEditor5.editorClassic;
      var _format$editorSetting = format.editorSettings,
        toolbar = _format$editorSetting.toolbar,
        plugins = _format$editorSetting.plugins,
        config = _format$editorSetting.config,
        language = _format$editorSetting.language;
      var extraPlugins = selectPlugins(plugins);
      var pluginConfig = processConfig(config);
      var editorConfig = _objectSpread(_objectSpread({
        extraPlugins: extraPlugins,
        toolbar: toolbar
      }, pluginConfig), {}, {
        language: _objectSpread(_objectSpread({}, pluginConfig.language), language)
      });
      var id = setElementId(element);
      var ClassicEditor = editorClassic.ClassicEditor;
      ClassicEditor.create(element, editorConfig).then(function (editor) {
        Drupal.CKEditor5Instances.set(id, editor);
        if (element.hasAttribute('required')) {
          required.add(id);
          element.removeAttribute('required');
        }
        $(document).on("drupalViewportOffsetChange.ckeditor5.".concat(id), function (event, offsets) {
          editor.ui.viewportOffset = offsets;
        });
        editor.model.document.on('change:data', function () {
          var callback = callbacks.get(id);
          if (callback) {
            if (editor.plugins.has('SourceEditing')) {
              if (editor.plugins.get('SourceEditing').isSourceEditingMode) {
                callback();
                return;
              }
            }
            debounce(callback, 400)();
          }
        });
        var isOffCanvas = element.closest('#drupal-off-canvas');
        if (isOffCanvas) {
          offCanvasCss(element);
        }
      }).catch(function (error) {
        console.info('Debugging can be done with an unminified version of CKEditor by installing from the source file. Consult documentation at https://www.drupal.org/node/3258901');
        console.error(error);
      });
    },
    detach: function detach(element, format, trigger) {
      var id = getElementId(element);
      var editor = Drupal.CKEditor5Instances.get(id);
      if (!editor) {
        return;
      }
      $(document).off("drupalViewportOffsetChange.ckeditor5.".concat(id));
      if (trigger === 'serialize') {
        editor.updateSourceElement();
      } else {
        element.removeAttribute('contentEditable');
        return editor.destroy().then(function () {
          Drupal.CKEditor5Instances.delete(id);
          callbacks.delete(id);
          if (required.has(id)) {
            element.setAttribute('required', 'required');
            required.delete(id);
          }
        }).catch(function (error) {
          console.error(error);
        });
      }
    },
    onChange: function onChange(element, callback) {
      callbacks.set(getElementId(element), callback);
    },
    attachInlineEditor: function attachInlineEditor(element, format, mainToolbarId) {
      var editorDecoupled = CKEditor5.editorDecoupled;
      var _format$editorSetting2 = format.editorSettings,
        toolbar = _format$editorSetting2.toolbar,
        plugins = _format$editorSetting2.plugins,
        pluginConfig = _format$editorSetting2.config,
        language = _format$editorSetting2.language;
      var extraPlugins = selectPlugins(plugins);
      var config = _objectSpread({
        extraPlugins: extraPlugins,
        toolbar: toolbar,
        language: language
      }, processConfig(pluginConfig));
      var id = setElementId(element);
      var DecoupledEditor = editorDecoupled.DecoupledEditor;
      DecoupledEditor.create(element, config).then(function (editor) {
        Drupal.CKEditor5Instances.set(id, editor);
        var toolbar = document.getElementById(mainToolbarId);
        toolbar.appendChild(editor.ui.view.toolbar.element);
        editor.model.document.on('change:data', function () {
          var callback = callbacks.get(id);
          if (callback) {
            debounce(callback, 400)(editor.getData());
          }
        });
      }).catch(function (error) {
        console.error(error);
      });
    }
  };
  Drupal.ckeditor5 = {
    saveCallback: null,
    openDialog: function openDialog(url, saveCallback, dialogSettings) {
      var classes = dialogSettings.dialogClass ? dialogSettings.dialogClass.split(' ') : [];
      classes.push('ui-dialog--narrow');
      dialogSettings.dialogClass = classes.join(' ');
      dialogSettings.autoResize = window.matchMedia('(min-width: 600px)').matches;
      dialogSettings.width = 'auto';
      var ckeditorAjaxDialog = Drupal.ajax({
        dialog: dialogSettings,
        dialogType: 'modal',
        selector: '.ckeditor5-dialog-loading-link',
        url: url,
        progress: {
          type: 'fullscreen'
        },
        submit: {
          editor_object: {}
        }
      });
      ckeditorAjaxDialog.execute();
      Drupal.ckeditor5.saveCallback = saveCallback;
    }
  };
  function redirectTextareaFragmentToCKEditor5Instance() {
    var hash = window.location.hash.substr(1);
    var element = document.getElementById(hash);
    if (element) {
      var editorID = getElementId(element);
      var editor = Drupal.CKEditor5Instances.get(editorID);
      if (editor) {
        editor.sourceElement.nextElementSibling.setAttribute('id', "cke_".concat(hash));
        window.location.replace("#cke_".concat(hash));
      }
    }
  }
  $(window).on('hashchange.ckeditor', redirectTextareaFragmentToCKEditor5Instance);
  $(window).on('dialog:beforecreate', function () {
    $('.ckeditor5-dialog-loading').animate({
      top: '-40px'
    }, function removeDialogLoading() {
      $(this).remove();
    });
  });
  $(window).on('editor:dialogsave', function (e, values) {
    if (Drupal.ckeditor5.saveCallback) {
      Drupal.ckeditor5.saveCallback(values);
    }
  });
  $(window).on('dialog:afterclose', function () {
    if (Drupal.ckeditor5.saveCallback) {
      Drupal.ckeditor5.saveCallback = null;
    }
  });
})(Drupal, Drupal.debounce, CKEditor5, jQuery, once);;
!function(t){const e=t.en=t.en||{};e.dictionary=Object.assign(e.dictionary||{},{Bold:"Bold",Code:"Code",Italic:"Italic",Strikethrough:"Strikethrough",Subscript:"Subscript",Superscript:"Superscript",Underline:"Underline"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var t={415:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var n=i(609),s=i.n(n)()((function(t){return t[1]}));s.push([t.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}",""]);const r=s},609:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(n)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(s[o]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);n&&s[c[0]]||(i&&(c[2]?c[2]="".concat(i," and ").concat(c[2]):c[2]=i),e.push(c))}},e}},62:(t,e,i)=>{"use strict";var n,s=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},r=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),o=[];function a(t){for(var e=-1,i=0;i<o.length;i++)if(o[i].identifier===t){e=i;break}return e}function c(t,e){for(var i={},n=[],s=0;s<t.length;s++){var r=t[s],c=e.base?r[0]+e.base:r[0],l=i[c]||0,u="".concat(c," ").concat(l);i[c]=l+1;var d=a(u),g={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(o[d].references++,o[d].updater(g)):o.push({identifier:u,updater:b(g,e),references:1}),n.push(u)}return n}function l(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var s=i.nc;s&&(n.nonce=s)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var o=r(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var u,d=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function g(t,e,i,n){var s=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=d(e,s);else{var r=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function m(t,e,i){var n=i.css,s=i.media,r=i.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var p=null,h=0;function b(t,e){var i,n,s;if(e.singleton){var r=h++;i=p||(p=l(e)),n=g.bind(null,i,r,!1),s=g.bind(null,i,r,!0)}else i=l(e),n=m.bind(null,i,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=s());var i=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<i.length;n++){var s=a(i[n]);o[s].references--}for(var r=c(t,e),l=0;l<i.length;l++){var u=a(i[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}i=r}}}},704:(t,e,i)=>{t.exports=i(79)("./src/core.js")},181:(t,e,i)=>{t.exports=i(79)("./src/typing.js")},273:(t,e,i)=>{t.exports=i(79)("./src/ui.js")},79:t=>{"use strict";t.exports=CKEditor5.dll}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.nc=void 0;var n={};(()=>{"use strict";i.r(n),i.d(n,{Bold:()=>l,BoldEditing:()=>r,BoldUI:()=>c,Code:()=>f,CodeEditing:()=>g,CodeUI:()=>w,Italic:()=>T,ItalicEditing:()=>y,ItalicUI:()=>E,Strikethrough:()=>N,StrikethroughEditing:()=>A,StrikethroughUI:()=>I,Subscript:()=>F,SubscriptEditing:()=>B,SubscriptUI:()=>U,Superscript:()=>j,SuperscriptEditing:()=>M,SuperscriptUI:()=>V,Underline:()=>H,UnderlineEditing:()=>z,UnderlineUI:()=>q});var t=i(704);class e extends t.Command{constructor(t,e){super(t),this.attributeKey=e}refresh(){const t=this.editor.model,e=t.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,this.attributeKey)}execute(t={}){const e=this.editor.model,i=e.document.selection,n=void 0===t.forceValue?!this.value:t.forceValue;e.change((t=>{if(i.isCollapsed)n?t.setSelectionAttribute(this.attributeKey,!0):t.removeSelectionAttribute(this.attributeKey);else{const s=e.schema.getValidRanges(i.getRanges(),this.attributeKey);for(const e of s)n?t.setAttribute(this.attributeKey,n,e):t.removeAttribute(this.attributeKey,e)}}))}_getValueFromFirstAllowedNode(){const t=this.editor.model,e=t.schema,i=t.document.selection;if(i.isCollapsed)return i.hasAttribute(this.attributeKey);for(const t of i.getRanges())for(const i of t.getItems())if(e.checkAttribute(i,this.attributeKey))return i.hasAttribute(this.attributeKey);return!1}}const s="bold";class r extends t.Plugin{static get pluginName(){return"BoldEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:s}),t.model.schema.setAttributeProperties(s,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:s,view:"strong",upcastAlso:["b",t=>{const e=t.getStyle("font-weight");return e?"bold"==e||Number(e)>=600?{name:!0,styles:["font-weight"]}:void 0:null}]}),t.commands.add(s,new e(t,s)),t.keystrokes.set("CTRL+B",s)}}var o=i(273);const a="bold";class c extends t.Plugin{static get pluginName(){return"BoldUI"}init(){const e=this.editor,i=e.t;e.ui.componentFactory.add(a,(n=>{const s=e.commands.get(a),r=new o.ButtonView(n);return r.set({label:i("Bold"),icon:t.icons.bold,keystroke:"CTRL+B",tooltip:!0,isToggleable:!0}),r.bind("isOn","isEnabled").to(s,"value","isEnabled"),this.listenTo(r,"execute",(()=>{e.execute(a),e.editing.view.focus()})),r}))}}class l extends t.Plugin{static get requires(){return[r,c]}static get pluginName(){return"Bold"}}var u=i(181);const d="code";class g extends t.Plugin{static get pluginName(){return"CodeEditing"}static get requires(){return[u.TwoStepCaretMovement]}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:d}),t.model.schema.setAttributeProperties(d,{isFormatting:!0,copyOnEnter:!1}),t.conversion.attributeToElement({model:d,view:"code",upcastAlso:{styles:{"word-wrap":"break-word"}}}),t.commands.add(d,new e(t,d)),t.plugins.get(u.TwoStepCaretMovement).registerAttribute(d),(0,u.inlineHighlight)(t,d,"code","ck-code_selected")}}var m=i(62),p=i.n(m),h=i(415),b={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};p()(h.Z,b);h.Z.locals;const v="code";class w extends t.Plugin{static get pluginName(){return"CodeUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(v,(i=>{const n=t.commands.get(v),s=new o.ButtonView(i);return s.set({label:e("Code"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m12.5 5.7 5.2 3.9v1.3l-5.6 4c-.1.2-.3.2-.5.2-.3-.1-.6-.7-.6-1l.3-.4 4.7-3.5L11.5 7l-.2-.2c-.1-.3-.1-.6 0-.8.2-.2.5-.4.8-.4a.8.8 0 0 1 .4.1zm-5.2 0L2 9.6v1.3l5.6 4c.1.2.3.2.5.2.3-.1.7-.7.6-1 0-.1 0-.3-.2-.4l-5-3.5L8.2 7l.2-.2c.1-.3.1-.6 0-.8-.2-.2-.5-.4-.8-.4a.8.8 0 0 0-.3.1z"/></svg>',tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(s,"execute",(()=>{t.execute(v),t.editing.view.focus()})),s}))}}class f extends t.Plugin{static get requires(){return[g,w]}static get pluginName(){return"Code"}}const x="italic";class y extends t.Plugin{static get pluginName(){return"ItalicEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:x}),t.model.schema.setAttributeProperties(x,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:x,view:"i",upcastAlso:["em",{styles:{"font-style":"italic"}}]}),t.commands.add(x,new e(t,x)),t.keystrokes.set("CTRL+I",x)}}const S="italic";class E extends t.Plugin{static get pluginName(){return"ItalicUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(S,(i=>{const n=t.commands.get(S),s=new o.ButtonView(i);return s.set({label:e("Italic"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"/></svg>',keystroke:"CTRL+I",tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(s,"execute",(()=>{t.execute(S),t.editing.view.focus()})),s}))}}class T extends t.Plugin{static get requires(){return[y,E]}static get pluginName(){return"Italic"}}const k="strikethrough";class A extends t.Plugin{static get pluginName(){return"StrikethroughEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:k}),t.model.schema.setAttributeProperties(k,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:k,view:"s",upcastAlso:["del","strike",{styles:{"text-decoration":"line-through"}}]}),t.commands.add(k,new e(t,k)),t.keystrokes.set("CTRL+SHIFT+X","strikethrough")}}const C="strikethrough";class I extends t.Plugin{static get pluginName(){return"StrikethroughUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(C,(i=>{const n=t.commands.get(C),s=new o.ButtonView(i);return s.set({label:e("Strikethrough"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.4c-.8-.4-1.5-.9-2.2-1.5a.6.6 0 0 1-.2-.5l.3-.6h1c1 1.2 2.1 1.7 3.7 1.7 1 0 1.8-.3 2.3-.6.6-.4.6-1.2.6-1.3.2-1.2-.9-2.1-.9-2.1h2.1c.3.7.4 1.2.4 1.7v.8l-.6 1.2c-.6.8-1.1 1-1.6 1.2a6 6 0 0 1-2.4.6c-1 0-1.8-.3-2.5-.6zM6.8 9 6 8.3c-.4-.5-.5-.8-.5-1.6 0-.7.1-1.3.5-1.8.4-.6 1-1 1.6-1.3a6.3 6.3 0 0 1 4.7 0 4 4 0 0 1 1.7 1l.3.7c0 .1.2.4-.2.7-.4.2-.9.1-1 0a3 3 0 0 0-1.2-1c-.4-.2-1-.3-2-.4-.7 0-1.4.2-2 .6-.8.6-1 .8-1 1.5 0 .8.5 1 1.2 1.5.6.4 1.1.7 1.9 1H6.8z"/><path d="M3 10.5V9h14v1.5z"/></svg>',keystroke:"CTRL+SHIFT+X",tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(s,"execute",(()=>{t.execute(C),t.editing.view.focus()})),s}))}}class N extends t.Plugin{static get requires(){return[A,I]}static get pluginName(){return"Strikethrough"}}const P="subscript";class B extends t.Plugin{static get pluginName(){return"SubscriptEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:P}),t.model.schema.setAttributeProperties(P,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:P,view:"sub",upcastAlso:[{styles:{"vertical-align":"sub"}}]}),t.commands.add(P,new e(t,P))}}const O="subscript";class U extends t.Plugin{static get pluginName(){return"SubscriptUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(O,(i=>{const n=t.commands.get(O),s=new o.ButtonView(i);return s.set({label:e("Subscript"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.03 10.349 3.818-3.819a.8.8 0 1 1 1.132 1.132L8.16 11.48l3.819 3.818a.8.8 0 1 1-1.132 1.132L7.03 12.61l-3.818 3.82a.8.8 0 1 1-1.132-1.132L5.9 11.48 2.08 7.662A.8.8 0 1 1 3.212 6.53l3.818 3.82zm8.147 7.829h2.549c.254 0 .447.05.58.152a.49.49 0 0 1 .201.413.54.54 0 0 1-.159.393c-.105.108-.266.162-.48.162h-3.594c-.245 0-.435-.066-.572-.197a.621.621 0 0 1-.205-.463c0-.114.044-.265.132-.453a1.62 1.62 0 0 1 .288-.444c.433-.436.824-.81 1.172-1.122.348-.312.597-.517.747-.615.267-.183.49-.368.667-.553.177-.185.312-.375.405-.57.093-.194.139-.384.139-.57a1.008 1.008 0 0 0-.554-.917 1.197 1.197 0 0 0-.56-.133c-.426 0-.761.182-1.005.546a2.332 2.332 0 0 0-.164.39 1.609 1.609 0 0 1-.258.488c-.096.114-.237.17-.423.17a.558.558 0 0 1-.405-.156.568.568 0 0 1-.161-.427c0-.218.05-.446.151-.683.101-.238.252-.453.452-.646s.454-.349.762-.467a2.998 2.998 0 0 1 1.081-.178c.498 0 .923.076 1.274.228a1.916 1.916 0 0 1 1.004 1.032 1.984 1.984 0 0 1-.156 1.794c-.2.32-.405.572-.613.754-.208.182-.558.468-1.048.857-.49.39-.826.691-1.008.906a2.703 2.703 0 0 0-.24.309z"/></svg>',tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(s,"execute",(()=>{t.execute(O),t.editing.view.focus()})),s}))}}class F extends t.Plugin{static get requires(){return[B,U]}static get pluginName(){return"Subscript"}}const L="superscript";class M extends t.Plugin{static get pluginName(){return"SuperscriptEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:L}),t.model.schema.setAttributeProperties(L,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:L,view:"sup",upcastAlso:[{styles:{"vertical-align":"super"}}]}),t.commands.add(L,new e(t,L))}}const R="superscript";class V extends t.Plugin{static get pluginName(){return"SuperscriptUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(R,(i=>{const n=t.commands.get(R),s=new o.ButtonView(i);return s.set({label:e("Superscript"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.677 8.678h2.549c.254 0 .447.05.58.152a.49.49 0 0 1 .201.413.54.54 0 0 1-.159.393c-.105.108-.266.162-.48.162h-3.594c-.245 0-.435-.066-.572-.197a.621.621 0 0 1-.205-.463c0-.114.044-.265.132-.453a1.62 1.62 0 0 1 .288-.444c.433-.436.824-.81 1.172-1.122.348-.312.597-.517.747-.615.267-.183.49-.368.667-.553.177-.185.312-.375.405-.57.093-.194.139-.384.139-.57a1.008 1.008 0 0 0-.554-.917 1.197 1.197 0 0 0-.56-.133c-.426 0-.761.182-1.005.546a2.332 2.332 0 0 0-.164.39 1.609 1.609 0 0 1-.258.488c-.096.114-.237.17-.423.17a.558.558 0 0 1-.405-.156.568.568 0 0 1-.161-.427c0-.218.05-.446.151-.683.101-.238.252-.453.452-.646s.454-.349.762-.467a2.998 2.998 0 0 1 1.081-.178c.498 0 .923.076 1.274.228a1.916 1.916 0 0 1 1.004 1.032 1.984 1.984 0 0 1-.156 1.794c-.2.32-.405.572-.613.754-.208.182-.558.468-1.048.857-.49.39-.826.691-1.008.906a2.703 2.703 0 0 0-.24.309zM7.03 10.349l3.818-3.819a.8.8 0 1 1 1.132 1.132L8.16 11.48l3.819 3.818a.8.8 0 1 1-1.132 1.132L7.03 12.61l-3.818 3.82a.8.8 0 1 1-1.132-1.132L5.9 11.48 2.08 7.662A.8.8 0 1 1 3.212 6.53l3.818 3.82z"/></svg>',tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(s,"execute",(()=>{t.execute(R),t.editing.view.focus()})),s}))}}class j extends t.Plugin{static get requires(){return[M,V]}static get pluginName(){return"Superscript"}}const K="underline";class z extends t.Plugin{static get pluginName(){return"UnderlineEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:K}),t.model.schema.setAttributeProperties(K,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:K,view:"u",upcastAlso:{styles:{"text-decoration":"underline"}}}),t.commands.add(K,new e(t,K)),t.keystrokes.set("CTRL+U","underline")}}const _="underline";class q extends t.Plugin{static get pluginName(){return"UnderlineUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(_,(i=>{const n=t.commands.get(_),s=new o.ButtonView(i);return s.set({label:e("Underline"),icon:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 18v-1.5h14V18zm2.2-8V3.6c0-.4.4-.6.8-.6.3 0 .7.2.7.6v6.2c0 2 1.3 2.8 3.2 2.8 1.9 0 3.4-.9 3.4-2.9V3.6c0-.3.4-.5.8-.5.3 0 .7.2.7.5V10c0 2.7-2.2 4-4.9 4-2.6 0-4.7-1.2-4.7-4z"/></svg>',keystroke:"CTRL+U",tooltip:!0,isToggleable:!0}),s.bind("isOn","isEnabled").to(n,"value","isEnabled"),this.listenTo(s,"execute",(()=>{t.execute(_),t.editing.view.focus()})),s}))}}class H extends t.Plugin{static get requires(){return[z,q]}static get pluginName(){return"Underline"}}})(),(window.CKEditor5=window.CKEditor5||{}).basicStyles=n})();;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.drupalEmphasis=t())}(self,(function(){return function(){var e={"ckeditor5/src/core.js":function(e,t,r){e.exports=r("dll-reference CKEditor5.dll")("./src/core.js")},"dll-reference CKEditor5.dll":function(e){"use strict";e.exports=CKEditor5.dll}},t={};function r(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var o={};return function(){"use strict";r.d(o,{default:function(){return s}});var e=r("ckeditor5/src/core.js");class t extends e.Plugin{static get pluginName(){return"DrupalEmphasisEditing"}init(){this.editor.conversion.for("downcast").attributeToElement({model:"italic",view:"em",converterPriority:"high"})}}var i=t;class n extends e.Plugin{static get requires(){return[i]}static get pluginName(){return"DrupalEmphasis"}}var s={DrupalEmphasis:n}}(),o=o.default}()}));;
!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{"Choose heading":"Choose heading",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Paragraph:"Paragraph","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={609:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var i=n(298),o=n.n(i)()((function(e){return e[1]}));o.push([e.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}",""]);const a=o},298:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var a=0;a<this.length;a++){var r=this[a][0];null!=r&&(o[r]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);i&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},62:(e,t,n)=>{"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function s(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},i=[],o=0;o<e.length;o++){var a=e[o],d=t.base?a[0]+t.base:a[0],c=n[d]||0,l="".concat(d," ").concat(c);n[d]=c+1;var h=s(l),g={css:a[1],media:a[2],sourceMap:a[3]};-1!==h?(r[h].references++,r[h].updater(g)):r.push({identifier:l,updater:f(g,t),references:1}),i.push(l)}return i}function c(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var l,h=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function g(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=h(t,o);else{var a=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function m(e,t,n){var i=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var u=null,p=0;function f(e,t){var n,i,o;if(t.singleton){var a=p++;n=u||(u=c(t)),i=g.bind(null,n,a,!1),o=g.bind(null,n,a,!0)}else n=c(t),i=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=s(n[i]);r[o].references--}for(var a=d(e,t),c=0;c<n.length;c++){var l=s(n[c]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}n=a}}}},704:(e,t,n)=>{e.exports=n(79)("./src/core.js")},492:(e,t,n)=>{e.exports=n(79)("./src/engine.js")},747:(e,t,n)=>{e.exports=n(79)("./src/paragraph.js")},273:(e,t,n)=>{e.exports=n(79)("./src/ui.js")},209:(e,t,n)=>{e.exports=n(79)("./src/utils.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var a=t[i]={id:i,exports:{}};return e[i](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var i={};(()=>{"use strict";n.r(i),n.d(i,{Heading:()=>f,HeadingButtonsUI:()=>w,HeadingEditing:()=>d,HeadingUI:()=>p,Title:()=>y});var e=n(704),t=n(747),o=n(209);class a extends e.Command{constructor(e,t){super(e),this.modelElements=t}refresh(){const e=(0,o.first)(this.editor.model.document.selection.getSelectedBlocks());this.value=!!e&&this.modelElements.includes(e.name)&&e.name,this.isEnabled=!!e&&this.modelElements.some((t=>r(e,t,this.editor.model.schema)))}execute(e){const t=this.editor.model,n=t.document,i=e.value;t.change((e=>{const o=Array.from(n.selection.getSelectedBlocks()).filter((e=>r(e,i,t.schema)));for(const t of o)t.is("element",i)||e.rename(t,i)}))}}function r(e,t,n){return n.checkChild(e.parent,t)&&!n.isObject(e)}const s="paragraph";class d extends e.Plugin{static get pluginName(){return"HeadingEditing"}constructor(e){super(e),e.config.define("heading",{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h2",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h3",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h4",title:"Heading 3",class:"ck-heading_heading3"}]})}static get requires(){return[t.Paragraph]}init(){const e=this.editor,t=e.config.get("heading.options"),n=[];for(const i of t)i.model!==s&&(e.model.schema.register(i.model,{inheritAllFrom:"$block"}),e.conversion.elementToElement(i),n.push(i.model));this._addDefaultH1Conversion(e),e.commands.add("heading",new a(e,n))}afterInit(){const e=this.editor,t=e.commands.get("enter"),n=e.config.get("heading.options");t&&this.listenTo(t,"afterExecute",((t,i)=>{const o=e.model.document.selection.getFirstPosition().parent;n.some((e=>o.is("element",e.model)))&&!o.is("element",s)&&0===o.childCount&&i.writer.rename(o,s)}))}_addDefaultH1Conversion(e){e.conversion.for("upcast").elementToElement({model:"heading1",view:"h1",converterPriority:o.priorities.get("low")+1})}}var c=n(273);function l(e){const t=e.t,n={Paragraph:t("Paragraph"),"Heading 1":t("Heading 1"),"Heading 2":t("Heading 2"),"Heading 3":t("Heading 3"),"Heading 4":t("Heading 4"),"Heading 5":t("Heading 5"),"Heading 6":t("Heading 6")};return e.config.get("heading.options").map((e=>{const t=n[e.title];return t&&t!=e.title&&(e.title=t),e}))}var h=n(62),g=n.n(h),m=n(609),u={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};g()(m.Z,u);m.Z.locals;class p extends e.Plugin{static get pluginName(){return"HeadingUI"}init(){const e=this.editor,t=e.t,n=l(e),i=t("Choose heading"),a=t("Heading");e.ui.componentFactory.add("heading",(t=>{const r={},s=new o.Collection,d=e.commands.get("heading"),l=e.commands.get("paragraph"),h=[d];for(const e of n){const t={type:"button",model:new c.Model({label:e.title,class:e.class,withText:!0})};"paragraph"===e.model?(t.model.bind("isOn").to(l,"value"),t.model.set("commandName","paragraph"),h.push(l)):(t.model.bind("isOn").to(d,"value",(t=>t===e.model)),t.model.set({commandName:"heading",commandValue:e.model})),s.add(t),r[e.model]=e.title}const g=(0,c.createDropdown)(t);return(0,c.addListToDropdown)(g,s),g.buttonView.set({isOn:!1,withText:!0,tooltip:a}),g.extendTemplate({attributes:{class:["ck-heading-dropdown"]}}),g.bind("isEnabled").toMany(h,"isEnabled",((...e)=>e.some((e=>e)))),g.buttonView.bind("label").to(d,"value",l,"value",((e,t)=>{const n=e||t&&"paragraph";return r[n]?r[n]:i})),this.listenTo(g,"execute",(t=>{e.execute(t.source.commandName,t.source.commandValue?{value:t.source.commandValue}:void 0),e.editing.view.focus()})),g}))}}class f extends e.Plugin{static get requires(){return[d,p]}static get pluginName(){return"Heading"}}const v={heading1:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19 9v10h-2v-8h-2V9h4zM4 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V11H4v4.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v4.5z"/></svg>',heading2:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V11H3v4.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1H2a1 1 0 0 1 1 1v4.5zm16.076 8.343V18.5h-6.252c.067-.626.27-1.22.61-1.78.338-.561 1.006-1.305 2.005-2.232.804-.749 1.297-1.257 1.479-1.523.245-.368.368-.732.368-1.092 0-.398-.107-.703-.32-.917-.214-.214-.51-.32-.886-.32-.372 0-.669.111-.889.336-.22.224-.347.596-.38 1.117l-1.778-.178c.106-.982.438-1.686.997-2.114.558-.427 1.257-.64 2.095-.64.918 0 1.64.247 2.164.742.525.495.787 1.11.787 1.847 0 .419-.075.818-.225 1.197-.15.378-.388.775-.714 1.19-.216.275-.605.67-1.168 1.187-.563.516-.92.859-1.07 1.028a3.11 3.11 0 0 0-.365.495h3.542z"/></svg>',heading3:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V11H3v4.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1H2a1 1 0 0 1 1 1v4.5zm9.989 7.53 1.726-.209c.055.44.203.777.445 1.01.24.232.533.349.876.349.368 0 .678-.14.93-.42.251-.279.377-.655.377-1.13 0-.448-.12-.803-.362-1.066a1.153 1.153 0 0 0-.882-.393c-.228 0-.501.044-.819.133l.197-1.453c.482.012.85-.092 1.105-.315.253-.222.38-.517.38-.885 0-.313-.093-.563-.279-.75-.186-.185-.434-.278-.743-.278a1.07 1.07 0 0 0-.78.317c-.216.212-.347.52-.394.927l-1.644-.28c.114-.562.287-1.012.517-1.348.231-.337.553-.601.965-.794a3.24 3.24 0 0 1 1.387-.289c.876 0 1.579.28 2.108.838.436.457.653.973.653 1.549 0 .817-.446 1.468-1.339 1.955.533.114.96.37 1.28.768.319.398.478.878.478 1.441 0 .817-.298 1.513-.895 2.088-.596.576-1.339.864-2.228.864-.842 0-1.54-.243-2.094-.727-.555-.485-.876-1.118-.965-1.901z"/></svg>',heading4:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V11h-5v4.5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v4.5zm13.55 10v-1.873h-3.81v-1.561l4.037-5.91h1.498v5.904h1.156v1.567h-1.156V18.5H17.05zm0-3.44v-3.18l-2.14 3.18h2.14z"/></svg>',heading5:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V11h-5v4.5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v4.5zm9.578 7.607 1.777-.184c.05.402.201.72.45.955a1.223 1.223 0 0 0 1.81-.101c.258-.303.387-.759.387-1.368 0-.572-.128-1-.384-1.286-.256-.285-.59-.428-1-.428-.512 0-.971.226-1.377.679l-1.448-.21.915-4.843h4.716v1.67H15.56l-.28 1.58a2.697 2.697 0 0 1 1.219-.298 2.68 2.68 0 0 1 2.012.863c.55.576.825 1.323.825 2.241a3.36 3.36 0 0 1-.666 2.05c-.605.821-1.445 1.232-2.52 1.232-.86 0-1.56-.23-2.101-.692-.542-.461-.866-1.081-.971-1.86z"/></svg>',heading6:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 8.5h5V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1V11h-5v4.5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v4.5zm15.595 2.973-1.726.19c-.043-.355-.153-.617-.33-.787-.178-.169-.409-.253-.692-.253-.377 0-.695.169-.956.507-.26.339-.424 1.043-.492 2.114.445-.525.997-.787 1.657-.787.745 0 1.383.284 1.914.85.531.568.797 1.3.797 2.197 0 .952-.28 1.716-.838 2.291-.559.576-1.276.864-2.152.864-.94 0-1.712-.365-2.317-1.095-.605-.73-.908-1.927-.908-3.59 0-1.705.316-2.935.946-3.688.63-.753 1.45-1.13 2.457-1.13.706 0 1.291.198 1.755.594.463.395.758.97.885 1.723zm-4.043 3.891c0 .58.133 1.028.4 1.343.266.315.57.473.914.473.33 0 .605-.13.825-.388.22-.258.33-.68.33-1.27 0-.604-.118-1.047-.355-1.329a1.115 1.115 0 0 0-.89-.422c-.342 0-.632.134-.869.403s-.355.666-.355 1.19z"/></svg>'};class w extends e.Plugin{init(){l(this.editor).filter((e=>"paragraph"!==e.model)).map((e=>this._createButton(e)))}_createButton(e){const t=this.editor;t.ui.componentFactory.add(e.model,(n=>{const i=new c.ButtonView(n),o=t.commands.get("heading");return i.label=e.title,i.icon=e.icon||v[e.model],i.tooltip=!0,i.isToggleable=!0,i.bind("isEnabled").to(o),i.bind("isOn").to(o,"value",(t=>t==e.model)),i.on("execute",(()=>{t.execute("heading",{value:e.model}),t.editing.view.focus()})),i}))}}var b=n(492);const x=new Set(["paragraph","heading1","heading2","heading3","heading4","heading5","heading6"]);class y extends e.Plugin{static get pluginName(){return"Title"}static get requires(){return["Paragraph"]}init(){const e=this.editor,t=e.model;this._bodyPlaceholder=null,t.schema.register("title",{isBlock:!0,allowIn:"$root"}),t.schema.register("title-content",{isBlock:!0,allowIn:"title",allowAttributes:["alignment"]}),t.schema.extend("$text",{allowIn:"title-content"}),t.schema.addAttributeCheck((e=>{if(e.endsWith("title-content $text"))return!1})),e.editing.mapper.on("modelToViewPosition",C(e.editing.view)),e.data.mapper.on("modelToViewPosition",C(e.editing.view)),e.conversion.for("downcast").elementToElement({model:"title-content",view:"h1"}),e.conversion.for("downcast").add((e=>e.on("insert:title",((e,t,n)=>{n.consumable.consume(t.item,e.name)})))),e.data.upcastDispatcher.on("element:h1",H,{priority:"high"}),e.data.upcastDispatcher.on("element:h2",H,{priority:"high"}),e.data.upcastDispatcher.on("element:h3",H,{priority:"high"}),t.document.registerPostFixer((e=>this._fixTitleContent(e))),t.document.registerPostFixer((e=>this._fixTitleElement(e))),t.document.registerPostFixer((e=>this._fixBodyElement(e))),t.document.registerPostFixer((e=>this._fixExtraParagraph(e))),this._attachPlaceholders(),this._attachTabPressHandling()}getTitle(e={}){const t=this._getTitleElement().getChild(0);return this.editor.data.stringify(t,e)}getBody(e={}){const t=this.editor,n=t.data,i=t.model,o=t.model.document.getRoot(),a=t.editing.view,r=new b.DowncastWriter(a.document),s=i.createRangeIn(o),d=r.createDocumentFragment(),c=i.createPositionAfter(o.getChild(0)),l=i.createRange(c,i.createPositionAt(o,"end")),h=new Map;for(const e of i.markers){const t=l.getIntersection(e.getRange());t&&h.set(e.name,t)}return n.mapper.clearBindings(),n.mapper.bindElements(o,d),n.downcastDispatcher.convert(s,h,r,e),r.remove(r.createRangeOn(d.getChild(0))),t.data.processor.toData(d)}_getTitleElement(){const e=this.editor.model.document.getRoot();for(const t of e.getChildren())if(T(t))return t}_fixTitleContent(e){const t=this._getTitleElement();if(!t||1===t.maxOffset)return!1;const n=Array.from(t.getChildren());n.shift();for(const i of n)e.move(e.createRangeOn(i),t,"after"),e.rename(i,"paragraph");return!0}_fixTitleElement(e){const t=this.editor.model,n=t.document.getRoot(),i=Array.from(n.getChildren()).filter(T),o=i[0],a=n.getChild(0);if(a.is("element","title"))return P(i,e,t);if(!o&&!x.has(a.name)){const t=e.createElement("title");return e.insert(t,n),e.insertElement("title-content",t),!0}return x.has(a.name)?function(e,t,n){const i=t.createElement("title");t.insert(i,e,"before"),t.insert(e,i,0),t.rename(e,"title-content"),n.schema.removeDisallowedAttributes([e],t)}(a,e,t):e.move(e.createRangeOn(o),n,0),P(i,e,t),!0}_fixBodyElement(e){const t=this.editor.model.document.getRoot();return t.childCount<2&&(this._bodyPlaceholder=e.createElement("paragraph"),e.insert(this._bodyPlaceholder,t,1),!0)}_fixExtraParagraph(e){const t=this.editor.model.document.getRoot(),n=this._bodyPlaceholder;return!!function(e,t){if(!e||!e.is("element","paragraph")||e.childCount)return!1;if(t.childCount<=2||t.getChild(t.childCount-1)!==e)return!1;return!0}(n,t)&&(this._bodyPlaceholder=null,e.remove(n),!0)}_attachPlaceholders(){const e=this.editor,t=e.t,n=e.editing.view,i=n.document.getRoot(),o=e.sourceElement,a=e.config.get("title.placeholder")||t("Type your title"),r=e.config.get("placeholder")||o&&"textarea"===o.tagName.toLowerCase()&&o.getAttribute("placeholder")||t("Type or paste your content here.");let s;e.editing.downcastDispatcher.on("insert:title-content",((e,t,i)=>{(0,b.enablePlaceholder)({view:n,element:i.mapper.toViewElement(t.item),text:a,keepOnFocus:!0})})),n.document.registerPostFixer((e=>{const t=i.getChild(1);let n=!1;return t!==s&&(s&&((0,b.hidePlaceholder)(e,s),e.removeAttribute("data-placeholder",s)),e.setAttribute("data-placeholder",r,t),s=t,n=!0),n=(0,b.needsPlaceholder)(t,!0)&&2===i.childCount&&"p"===t.name?!!(0,b.showPlaceholder)(e,t)||n:!!(0,b.hidePlaceholder)(e,t)||n,n}))}_attachTabPressHandling(){const e=this.editor,t=e.model;e.keystrokes.set("TAB",((e,n)=>{t.change((e=>{const i=t.document.selection,o=Array.from(i.getSelectedBlocks());if(1===o.length&&o[0].is("element","title-content")){const i=t.document.getRoot().getChild(1);e.setSelection(i,0),n()}}))})),e.keystrokes.set("SHIFT + TAB",((n,i)=>{t.change((n=>{const a=t.document.selection;if(!a.isCollapsed)return;const r=e.model.document.getRoot(),s=(0,o.first)(a.getSelectedBlocks()),d=a.getFirstPosition(),c=r.getChild(0);s===r.getChild(1)&&d.isAtStart&&(n.setSelection(c.getChild(0),0),i())}))}))}}function H(e,t,n){const i=t.modelCursor,o=t.viewItem;if(!i.isAtStart||!i.parent.is("element","$root"))return;if(!n.consumable.consume(o,{name:!0}))return;const a=n.writer,r=a.createElement("title"),s=a.createElement("title-content");a.append(s,r),a.insert(r,i),n.convertChildren(o,s),n.updateConversionResult(r,t)}function C(e){return(t,n)=>{const i=n.modelPosition.parent;if(!i.is("element","title"))return;const o=i.parent,a=n.mapper.toViewElement(o);n.viewPosition=e.createPositionAt(a,0),t.stop()}}function T(e){return e.is("element","title")}function P(e,t,n){let i=!1;for(const o of e)0!==o.index&&(_(o,t,n),i=!0);return i}function _(e,t,n){const i=e.getChild(0);i.isEmpty?t.remove(e):(t.move(t.createRangeOn(i),e,"before"),t.rename(i,"paragraph"),t.remove(e),n.schema.removeDisallowedAttributes([i],t))}})(),(window.CKEditor5=window.CKEditor5||{}).heading=i})();;
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={945:(e,r,t)=>{e.exports=t(79)("./src/clipboard.js")},704:(e,r,t)=>{e.exports=t(79)("./src/core.js")},331:(e,r,t)=>{e.exports=t(79)("./src/enter.js")},468:(e,r,t)=>{e.exports=t(79)("./src/select-all.js")},181:(e,r,t)=>{e.exports=t(79)("./src/typing.js")},254:(e,r,t)=>{e.exports=t(79)("./src/undo.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},r={};function t(s){var o=r[s];if(void 0!==o)return o.exports;var n=r[s]={exports:{}};return e[s](n,n.exports,t),n.exports}t.d=(e,r)=>{for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};(()=>{"use strict";t.r(s),t.d(s,{Essentials:()=>a});var e=t(704),r=t(945),o=t(331),n=t(468),i=t(181),l=t(254);class a extends e.Plugin{static get requires(){return[r.Clipboard,o.Enter,n.SelectAll,o.ShiftEnter,i.Typing,l.Undo]}static get pluginName(){return"Essentials"}}})(),(window.CKEditor5=window.CKEditor5||{}).essentials=s})();;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.CKEditor5=t():(e.CKEditor5=e.CKEditor5||{},e.CKEditor5.drupalHtmlEngine=t())}(self,(function(){return function(){var e={"ckeditor5/src/core.js":function(e,t,n){e.exports=n("dll-reference CKEditor5.dll")("./src/core.js")},"dll-reference CKEditor5.dll":function(e){"use strict";e.exports=CKEditor5.dll}},t={};function n(r){var p=t[r];if(void 0!==p)return p.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var r={};return function(){"use strict";n.d(r,{default:function(){return o}});var e=n("ckeditor5/src/core.js");class t{constructor(){this.chunks=[],this.selfClosingTags=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]}build(){return this.chunks.join("")}appendNode(e){e.nodeType===Node.TEXT_NODE?this._appendText(e):e.nodeType===Node.ELEMENT_NODE?this._appendElement(e):e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&this._appendChildren(e)}_appendElement(e){const t=e.nodeName.toLowerCase();this._append("<"),this._append(t),this._appendAttributes(e),this._append(">"),this.selfClosingTags.includes(t)||(this._appendChildren(e),this._append("</"),this._append(t),this._append(">"))}_appendChildren(e){Object.keys(e.childNodes).forEach((t=>{this.appendNode(e.childNodes[t])}))}_appendAttributes(e){Object.keys(e.attributes).forEach((t=>{this._append(" "),this._append(e.attributes[t].name),this._append('="'),this._append(this.constructor._escapeAttribute(e.attributes[t].value)),this._append('"')}))}_appendText(e){const t=document.implementation.createHTMLDocument("").createElement("p");t.textContent=e.textContent,this._append(t.innerHTML)}_append(e){this.chunks.push(e)}static _escapeAttribute(e){return e.replace(/&/g,"&amp;").replace(/'/g,"&apos;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r\n/g,"&#13;").replace(/[\r\n]/g,"&#13;")}}class p{getHtml(e){const n=new t;return n.appendNode(e),n.build()}}class i extends e.Plugin{init(){this.editor.data.processor.htmlWriter=new p}static get pluginName(){return"DrupalHtmlEngine"}}var o={DrupalHtmlEngine:i}}(),r=r.default}()}));;
/*!
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={945:(e,t,n)=>{e.exports=n(79)("./src/clipboard.js")},704:(e,t,n)=>{e.exports=n(79)("./src/core.js")},492:(e,t,n)=>{e.exports=n(79)("./src/engine.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{"use strict";n.r(r),n.d(r,{PasteFromOffice:()=>v});var e=n(704),t=n(945),s=n(492);function i(e,t,n,{blockElements:r,inlineObjectElements:s}){let i=n.createPositionAt(e,"forward"==t?"after":"before");return i=i.getLastMatchingPosition((({item:e})=>e.is("element")&&!r.includes(e.name)&&!s.includes(e.name)),{direction:t}),"forward"==t?i.nodeAfter:i.nodeBefore}function o(e,t){return!!e&&e.is("element")&&t.includes(e.name)}function c(e,t){if(!e.childCount)return;const n=new s.UpcastWriter(e.document),r=function(e,t){const n=t.createRangeIn(e),r=new s.Matcher({name:/^p|h\d+$/,styles:{"mso-list":/.*/}}),i=[];for(const e of n)if("elementStart"===e.type&&r.match(e.item)){const t=u(e.item);i.push({element:e.item,id:t.id,order:t.order,indent:t.indent})}return i}(e,n);if(!r.length)return;let i=null,o=1;r.forEach(((e,c)=>{const u=function(e,t){if(!e)return!0;if(e.id!==t.id)return t.indent-e.indent!=1;const n=t.element.previousSibling;if(!n)return!0;return r=n,!(r.is("element","ol")||r.is("element","ul"));var r}(r[c-1],e),f=u?null:r[c-1],d=(p=e,(m=f)?p.indent-m.indent:p.indent-1);var m,p;if(u&&(i=null,o=1),!i||0!==d){const r=function(e,t){const n=new RegExp(`@list l${e.id}:level${e.indent}\\s*({[^}]*)`,"gi"),r=/mso-level-number-format:([^;]{0,100});/gi,s=/mso-level-start-at:\s{0,100}([0-9]{0,10})\s{0,100};/gi,i=n.exec(t);let o="decimal",c="ol",a=null;if(i&&i[1]){const t=r.exec(i[1]);if(t&&t[1]&&(o=t[1].trim(),c="bullet"!==o&&"image"!==o?"ol":"ul"),"bullet"===o){const t=function(e){const t=function(e){if(e.getChild(0).is("$text"))return null;for(const t of e.getChildren()){if(!t.is("element","span"))continue;const e=t.getChild(0);return e.is("$text")?e:e.getChild(0)}}(e);if(!t)return null;const n=t._data;if("o"===n)return"circle";if("·"===n)return"disc";if("§"===n)return"square";return null}(e.element);t&&(o=t)}else{const e=s.exec(i[1]);e&&e[1]&&(a=parseInt(e[1]))}}return{type:c,startIndex:a,style:l(o)}}(e,t);if(i){if(e.indent>o){const e=i.getChild(i.childCount-1),t=e.getChild(e.childCount-1);i=a(r,t,n),o+=1}else if(e.indent<o){const t=o-e.indent;i=function(e,t){const n=e.getAncestors({parentFirst:!0});let r=null,s=0;for(const e of n)if("ul"!==e.name&&"ol"!==e.name||s++,s===t){r=e;break}return r}(i,t),o=parseInt(e.indent)}}else i=a(r,e.element,n);e.indent<=o&&(i.is("element",r.type)||(i=n.rename(r.type,i)))}const g=function(e,t){return function(e,t){const n=new s.Matcher({name:"span",styles:{"mso-list":"Ignore"}}),r=t.createRangeIn(e);for(const e of r)"elementStart"===e.type&&n.match(e.item)&&t.remove(e.item)}(e,t),t.rename("li",e)}(e.element,n);n.appendChild(g,i)}))}function l(e){if(e.startsWith("arabic-leading-zero"))return"decimal-leading-zero";switch(e){case"alpha-upper":return"upper-alpha";case"alpha-lower":return"lower-alpha";case"roman-upper":return"upper-roman";case"roman-lower":return"lower-roman";case"circle":case"disc":case"square":return e;default:return null}}function a(e,t,n){const r=t.parent,s=n.createElement(e.type),i=r.getChildIndex(t)+1;return n.insertChild(i,s,r),e.style&&n.setStyle("list-style-type",e.style,s),e.startIndex&&e.startIndex>1&&n.setAttribute("start",e.startIndex,s),s}function u(e){const t={},n=e.getStyle("mso-list");if(n){const e=n.match(/(^|\s{1,100})l(\d+)/i),r=n.match(/\s{0,100}lfo(\d+)/i),s=n.match(/\s{0,100}level(\d+)/i);e&&r&&s&&(t.id=e[2],t.order=r[1],t.indent=s[1])}return t}const f=/id=("|')docs-internal-guid-[-0-9a-f]+("|')/i;class d{constructor(e){this.document=e}isActive(e){return f.test(e)}execute(e){const t=new s.UpcastWriter(this.document),{body:n}=e._parsedData;!function(e,t){for(const n of e.getChildren())if(n.is("element","b")&&"normal"===n.getStyle("font-weight")){const r=e.getChildIndex(n);t.remove(n),t.insertChild(r,n.getChildren(),e)}}(n,t),function(e,t){for(const n of t.createRangeIn(e)){const e=n.item;if(e.is("element","li")){const n=e.getChild(0);n&&n.is("element","p")&&t.unwrapElement(n)}}}(n,t),function(e,t){const n=new s.ViewDocument(t.document.stylesProcessor),r=new s.DomConverter(n,{renderingMode:"data"}),c=r.blockElements,l=r.inlineObjectElements,a=[];for(const n of t.createRangeIn(e)){const e=n.item;if(e.is("element","br")){const n=i(e,"forward",t,{blockElements:c,inlineObjectElements:l}),r=i(e,"backward",t,{blockElements:c,inlineObjectElements:l}),s=o(n,c);(o(r,c)||s)&&a.push(e)}}for(const e of a)e.hasClass("Apple-interchange-newline")?t.remove(e):t.replace(e,t.createElement("p"))}(n,t),e.content=n}}function m(e,t){if(!e.childCount)return;const n=new s.UpcastWriter,r=function(e,t){const n=t.createRangeIn(e),r=new s.Matcher({name:/v:(.+)/}),i=[];for(const e of n){if("elementStart"!=e.type)continue;const t=e.item,n=t.previousSibling&&t.previousSibling.name||null;r.match(t)&&t.getAttribute("o:gfxdata")&&"v:shapetype"!==n&&i.push(e.item.getAttribute("id"))}return i}(e,n);!function(e,t,n){const r=n.createRangeIn(t),i=new s.Matcher({name:"img"}),o=[];for(const t of r)if(i.match(t.item)){const n=t.item,r=n.getAttribute("v:shapes")?n.getAttribute("v:shapes").split(" "):[];r.length&&r.every((t=>e.indexOf(t)>-1))?o.push(n):n.getAttribute("src")||o.push(n)}for(const e of o)n.remove(e)}(r,e,n),function(e,t){const n=t.createRangeIn(e),r=new s.Matcher({name:/v:(.+)/}),i=[];for(const e of n)"elementStart"==e.type&&r.match(e.item)&&i.push(e.item);for(const e of i)t.remove(e)}(e,n);const i=function(e,t){const n=t.createRangeIn(e),r=new s.Matcher({name:"img"}),i=[];for(const e of n)r.match(e.item)&&e.item.getAttribute("src").startsWith("file://")&&i.push(e.item);return i}(e,n);i.length&&function(e,t,n){if(e.length===t.length)for(let r=0;r<e.length;r++){const s=`data:${t[r].type};base64,${p(t[r].hex)}`;n.setAttribute("src",s,e[r])}}(i,function(e){if(!e)return[];const t=/{\\pict[\s\S]+?\\bliptag-?\d+(\\blipupi-?\d+)?({\\\*\\blipuid\s?[\da-fA-F]+)?[\s}]*?/,n=new RegExp("(?:("+t.source+"))([\\da-fA-F\\s]+)\\}","g"),r=e.match(n),s=[];if(r)for(const e of r){let n=!1;e.includes("\\pngblip")?n="image/png":e.includes("\\jpegblip")&&(n="image/jpeg"),n&&s.push({hex:e.replace(t,"").replace(/[^\da-fA-F]/g,""),type:n})}return s}(t),n)}function p(e){return btoa(e.match(/\w{2}/g).map((e=>String.fromCharCode(parseInt(e,16)))).join(""))}const g=/<meta\s*name="?generator"?\s*content="?microsoft\s*word\s*\d+"?\/?>/i,h=/xmlns:o="urn:schemas-microsoft-com/i;class y{constructor(e){this.document=e}isActive(e){return g.test(e)||h.test(e)}execute(e){const{body:t,stylesString:n}=e._parsedData;c(t,n),m(t,e.dataTransfer.getData("text/rtf")),e.content=t}}function b(e){return e.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,((e,t)=>1===t.length?" ":Array(t.length+1).join("  ").substr(0,t.length)))}function w(e,t){const n=new DOMParser,r=function(e){return b(b(e)).replace(/(<span\s+style=['"]mso-spacerun:yes['"]>[^\S\r\n]*?)[\r\n]+([^\S\r\n]*<\/span>)/g,"$1$2").replace(/<span\s+style=['"]mso-spacerun:yes['"]><\/span>/g,"").replace(/ <\//g," </").replace(/ <o:p><\/o:p>/g," <o:p></o:p>").replace(/<o:p>(&nbsp;|\u00A0)<\/o:p>/g,"").replace(/>([^\S\r\n]*[\r\n]\s*)</g,"><")}(function(e){const t="</body>",n="</html>",r=e.indexOf(t);if(r<0)return e;const s=e.indexOf(n,r+t.length);return e.substring(0,r+t.length)+(s>=0?e.substring(s):"")}(e=e.replace(/<!--\[if gte vml 1]>/g,""))),i=n.parseFromString(r,"text/html");!function(e){e.querySelectorAll("span[style*=spacerun]").forEach((e=>{const t=e.innerText.length||0;e.innerText=Array(t+1).join("  ").substr(0,t)}))}(i);const o=i.body.innerHTML,c=function(e,t){const n=new s.ViewDocument(t),r=new s.DomConverter(n,{renderingMode:"data"}),i=e.createDocumentFragment(),o=e.body.childNodes;for(;o.length>0;)i.appendChild(o[0]);return r.domToView(i,{skipComments:!0})}(i,t),l=function(e){const t=[],n=[],r=Array.from(e.getElementsByTagName("style"));for(const e of r)e.sheet&&e.sheet.cssRules&&e.sheet.cssRules.length&&(t.push(e.sheet),n.push(e.innerHTML));return{styles:t,stylesString:n.join(" ")}}(i);return{body:c,bodyString:o,styles:l.styles,stylesString:l.stylesString}}class v extends e.Plugin{static get pluginName(){return"PasteFromOffice"}static get requires(){return[t.ClipboardPipeline]}init(){const e=this.editor,t=e.editing.view.document,n=[];n.push(new y(t)),n.push(new d(t)),e.plugins.get("ClipboardPipeline").on("inputTransformation",((r,s)=>{if(s._isTransformedWithPasteFromOffice)return;if(e.model.document.selection.getFirstPosition().parent.is("element","codeBlock"))return;const i=s.dataTransfer.getData("text/html"),o=n.find((e=>e.isActive(i)));o&&(s._parsedData=w(i,t.stylesProcessor),o.execute(s),s._isTransformedWithPasteFromOffice=!0)}),{priority:"high"})}}})(),(window.CKEditor5=window.CKEditor5||{}).pasteFromOffice=r})();;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  Drupal.behaviors.textSummary = {
    attach: function attach(context, settings) {
      once('text-summary', '.js-text-summary', context).forEach(function (summary) {
        var $widget = $(summary).closest('.js-text-format-wrapper');
        var $summary = $widget.find('.js-text-summary-wrapper');
        var $summaryLabel = $summary.find('label').eq(0);
        var $full = $widget.children('.js-form-type-textarea');
        var $fullLabel = $full.find('label').eq(0);
        if ($fullLabel.length === 0) {
          $fullLabel = $('<label></label>').prependTo($full);
        }
        if ($fullLabel.hasClass('visually-hidden')) {
          $fullLabel.html(function (index, oldHtml) {
            return "<span class=\"visually-hidden\">".concat(oldHtml, "</span>");
          });
          $fullLabel.removeClass('visually-hidden');
        }
        var $link = $("<span class=\"field-edit-link\"> (<button type=\"button\" class=\"link link-edit-summary\">".concat(Drupal.t('Hide summary'), "</button>)</span>"));
        var $button = $link.find('button');
        var toggleClick = true;
        $link.on('click', function (e) {
          if (toggleClick) {
            $summary.hide();
            $button.html(Drupal.t('Edit summary'));
            $link.appendTo($fullLabel);
          } else {
            $summary.show();
            $button.html(Drupal.t('Hide summary'));
            $link.appendTo($summaryLabel);
          }
          e.preventDefault();
          toggleClick = !toggleClick;
        }).appendTo($summaryLabel);
        if (summary.value === '') {
          $link.trigger('click');
        }
      });
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, debounce) {
  $.fn.drupalGetSummary = function () {
    var callback = this.data('summaryCallback');
    return this[0] && callback ? callback(this[0]).trim() : '';
  };
  $.fn.drupalSetSummary = function (callback) {
    var self = this;
    if (typeof callback !== 'function') {
      var val = callback;
      callback = function callback() {
        return val;
      };
    }
    return this.data('summaryCallback', callback).off('formUpdated.summary').on('formUpdated.summary', function () {
      self.trigger('summaryUpdated');
    }).trigger('summaryUpdated');
  };
  Drupal.behaviors.formSingleSubmit = {
    attach: function attach() {
      function onFormSubmit(e) {
        var $form = $(e.currentTarget);
        var formValues = $form.serialize();
        var previousValues = $form.attr('data-drupal-form-submit-last');
        if (previousValues === formValues) {
          e.preventDefault();
        } else {
          $form.attr('data-drupal-form-submit-last', formValues);
        }
      }
      $(once('form-single-submit', 'body')).on('submit.singleSubmit', 'form:not([method~="GET"])', onFormSubmit);
    }
  };
  function triggerFormUpdated(element) {
    $(element).trigger('formUpdated');
  }
  function fieldsList(form) {
    return [].map.call(form.querySelectorAll('[name][id]'), function (el) {
      return el.id;
    });
  }
  Drupal.behaviors.formUpdated = {
    attach: function attach(context) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      var $forms = $(once('form-updated', contextIsForm ? $context : $context.find('form')));
      var formFields;
      if ($forms.length) {
        $.makeArray($forms).forEach(function (form) {
          var events = 'change.formUpdated input.formUpdated ';
          var eventHandler = debounce(function (event) {
            triggerFormUpdated(event.target);
          }, 300);
          formFields = fieldsList(form).join(',');
          form.setAttribute('data-drupal-form-fields', formFields);
          $(form).on(events, eventHandler);
        });
      }
      if (contextIsForm) {
        formFields = fieldsList(context).join(',');
        var currentFields = $(context).attr('data-drupal-form-fields');
        if (formFields !== currentFields) {
          triggerFormUpdated(context);
        }
      }
    },
    detach: function detach(context, settings, trigger) {
      var $context = $(context);
      var contextIsForm = $context.is('form');
      if (trigger === 'unload') {
        once.remove('form-updated', contextIsForm ? $context : $context.find('form')).forEach(function (form) {
          form.removeAttribute('data-drupal-form-fields');
          $(form).off('.formUpdated');
        });
      }
    }
  };
  Drupal.behaviors.fillUserInfoFromBrowser = {
    attach: function attach(context, settings) {
      var userInfo = ['name', 'mail', 'homepage'];
      var $forms = $(once('user-info-from-browser', '[data-user-info-from-browser]'));
      if ($forms.length) {
        userInfo.forEach(function (info) {
          var $element = $forms.find("[name=".concat(info, "]"));
          var browserData = localStorage.getItem("Drupal.visitor.".concat(info));
          if (!$element.length) {
            return;
          }
          var emptyValue = $element[0].value === '';
          var defaultValue = $element.attr('data-drupal-default-value') === $element[0].value;
          if (browserData && (emptyValue || defaultValue)) {
            $element.each(function (index, item) {
              item.value = browserData;
            });
          }
        });
      }
      $forms.on('submit', function () {
        userInfo.forEach(function (info) {
          var $element = $forms.find("[name=".concat(info, "]"));
          if ($element.length) {
            localStorage.setItem("Drupal.visitor.".concat(info), $element[0].value);
          }
        });
      });
    }
  };
  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e) {
    var url;
    if (e.type === 'click') {
      url = e.currentTarget.location ? e.currentTarget.location : e.currentTarget;
    } else {
      url = window.location;
    }
    var hash = url.hash.substr(1);
    if (hash) {
      var $target = $("#".concat(hash));
      $('body').trigger('formFragmentLinkClickOrHashChange', [$target]);
      setTimeout(function () {
        return $target.trigger('focus');
      }, 300);
    }
  };
  var debouncedHandleFragmentLinkClickOrHashChange = debounce(handleFragmentLinkClickOrHashChange, 300, true);
  $(window).on('hashchange.form-fragment', debouncedHandleFragmentLinkClickOrHashChange);
  $(document).on('click.form-fragment', 'a[href*="#"]', debouncedHandleFragmentLinkClickOrHashChange);
})(jQuery, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  function DetailsSummarizedContent(node) {
    this.$node = $(node);
    this.setupSummary();
  }
  $.extend(DetailsSummarizedContent, {
    instances: []
  });
  $.extend(DetailsSummarizedContent.prototype, {
    setupSummary: function setupSummary() {
      this.$detailsSummarizedContentWrapper = $(Drupal.theme('detailsSummarizedContentWrapper'));
      this.$node.on('summaryUpdated', $.proxy(this.onSummaryUpdated, this)).trigger('summaryUpdated').find('> summary').append(this.$detailsSummarizedContentWrapper);
    },
    onSummaryUpdated: function onSummaryUpdated() {
      var text = this.$node.drupalGetSummary();
      this.$detailsSummarizedContentWrapper.html(Drupal.theme('detailsSummarizedContentText', text));
    }
  });
  Drupal.behaviors.detailsSummary = {
    attach: function attach(context) {
      DetailsSummarizedContent.instances = DetailsSummarizedContent.instances.concat(once('details', 'details', context).map(function (details) {
        return new DetailsSummarizedContent(details);
      }));
    }
  };
  Drupal.DetailsSummarizedContent = DetailsSummarizedContent;
  Drupal.theme.detailsSummarizedContentWrapper = function () {
    return "<span class=\"summary\"></span>";
  };
  Drupal.theme.detailsSummarizedContentText = function (text) {
    return text ? " (".concat(text, ")") : '';
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  Drupal.behaviors.detailsAria = {
    attach: function attach() {
      $(once('detailsAria', 'body')).on('click.detailsAria', 'summary', function (event) {
        var $summary = $(event.currentTarget);
        var open = $(event.currentTarget.parentNode).attr('open') === 'open' ? 'false' : 'true';
        $summary.attr({
          'aria-expanded': open,
          'aria-pressed': open
        });
      });
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Modernizr, Drupal) {
  function CollapsibleDetails(node) {
    this.$node = $(node);
    this.$node.data('details', this);
    var anchor = window.location.hash && window.location.hash !== '#' ? ", ".concat(window.location.hash) : '';
    if (this.$node.find(".error".concat(anchor)).length) {
      this.$node.attr('open', true);
    }
    this.setupSummaryPolyfill();
  }
  $.extend(CollapsibleDetails, {
    instances: []
  });
  $.extend(CollapsibleDetails.prototype, {
    setupSummaryPolyfill: function setupSummaryPolyfill() {
      var $summary = this.$node.find('> summary');
      $summary.attr('tabindex', '-1');
      $('<span class="details-summary-prefix visually-hidden"></span>').append(this.$node.attr('open') ? Drupal.t('Hide') : Drupal.t('Show')).prependTo($summary).after(document.createTextNode(' '));
      $('<a class="details-title"></a>').attr('href', "#".concat(this.$node.attr('id'))).prepend($summary.contents()).appendTo($summary);
      $summary.append(this.$summary).on('click', $.proxy(this.onSummaryClick, this));
    },
    onSummaryClick: function onSummaryClick(e) {
      this.toggle();
      e.preventDefault();
    },
    toggle: function toggle() {
      var _this = this;
      var isOpen = !!this.$node.attr('open');
      var $summaryPrefix = this.$node.find('> summary span.details-summary-prefix');
      if (isOpen) {
        $summaryPrefix.html(Drupal.t('Show'));
      } else {
        $summaryPrefix.html(Drupal.t('Hide'));
      }
      setTimeout(function () {
        _this.$node.attr('open', !isOpen);
      }, 0);
    }
  });
  Drupal.behaviors.collapse = {
    attach: function attach(context) {
      if (Modernizr.details) {
        return;
      }
      once('collapse', 'details', context).forEach(function (detail) {
        detail.classList.add('collapse-processed');
        CollapsibleDetails.instances.push(new CollapsibleDetails(detail));
      });
    }
  };
  var handleFragmentLinkClickOrHashChange = function handleFragmentLinkClickOrHashChange(e, $target) {
    $target.parents('details').not('[open]').find('> summary').trigger('click');
  };
  $('body').on('formFragmentLinkClickOrHashChange.details', handleFragmentLinkClickOrHashChange);
  Drupal.CollapsibleDetails = CollapsibleDetails;
})(jQuery, Modernizr, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  Drupal.behaviors.entityContentDetailsSummaries = {
    attach: function attach(context) {
      var $context = $(context);
      $context.find('.entity-content-form-revision-information').drupalSetSummary(function (context) {
        var $revisionContext = $(context);
        var revisionCheckbox = $revisionContext.find('.js-form-item-revision input');
        if (revisionCheckbox.is(':checked') || !revisionCheckbox.length && $revisionContext.find('.js-form-item-revision-log textarea').length) {
          return Drupal.t('New revision');
        }
        return Drupal.t('No revision');
      });
      $context.find('details.entity-translation-options').drupalSetSummary(function (context) {
        var $translationContext = $(context);
        var translate;
        var $checkbox = $translationContext.find('.js-form-item-translation-translate input');
        if ($checkbox.length) {
          translate = $checkbox.is(':checked') ? Drupal.t('Needs to be updated') : Drupal.t('Does not need to be updated');
        } else {
          $checkbox = $translationContext.find('.js-form-item-translation-retranslate input');
          translate = $checkbox.is(':checked') ? Drupal.t('Flag other translations as outdated') : Drupal.t('Do not flag other translations as outdated');
        }
        return translate;
      });
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.nodeDetailsSummaries = {
    attach: function attach(context) {
      var $context = $(context);
      $context.find('.node-form-author').drupalSetSummary(function (context) {
        var nameElement = context.querySelector('.field--name-uid input');
        var name = nameElement && nameElement.value;
        var dateElement = context.querySelector('.field--name-created input');
        var date = dateElement && dateElement.value;
        if (name && date) {
          return Drupal.t('By @name on @date', {
            '@name': name,
            '@date': date
          });
        }
        if (name) {
          return Drupal.t('By @name', {
            '@name': name
          });
        }
        if (date) {
          return Drupal.t('Authored on @date', {
            '@date': date
          });
        }
      });
      $context.find('.node-form-options').drupalSetSummary(function (context) {
        var $optionsContext = $(context);
        var values = [];
        if ($optionsContext.find('input').is(':checked')) {
          $optionsContext.find('input:checked').next('label').each(function () {
            values.push(Drupal.checkPlain(this.textContent.trim()));
          });
          return values.join(', ');
        }
        return Drupal.t('Not promoted');
      });
    }
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function (Modernizr, Drupal, once) {
  Drupal.behaviors.date = {
    attach: function attach(context, settings) {
      if (Modernizr.inputtypes.date === false) {
        once('datepicker', '[data-drupal-field-elements="date-time"]').forEach(function (dateTime) {
          var dateInput = dateTime.querySelector('input[type="date"]');
          var timeInput = dateTime.querySelector('input[type="time"]');
          var help = Drupal.theme.dateTimeHelp({
            dateId: "".concat(dateInput.id, "--description"),
            dateDesc: dateInput.dataset.help,
            timeId: "".concat(timeInput.id, "--description"),
            timeDesc: timeInput.dataset.help
          });
          [dateInput, timeInput].forEach(function (input) {
            input.setAttribute('aria-describedby', "".concat(input.id, "--description"));
            input.setAttribute('type', 'text');
          });
          Drupal.DatepickerPolyfill.attachDescription(dateTime, help);
        });
        once('datepicker', '[data-drupal-field-elements="date"]').forEach(function (date) {
          var dateInput = date.querySelector('input[type="date"]');
          var help = Drupal.theme.dateHelp({
            dateDesc: dateInput.dataset.help
          });
          var id = "".concat(date.id, "--description");
          dateInput.setAttribute('aria-describedby', id);
          dateInput.setAttribute('type', 'text');
          Drupal.DatepickerPolyfill.attachDescription(date, help, id);
        });
      }
    }
  };
  Drupal.DatepickerPolyfill = function () {
    function _class() {
      _classCallCheck(this, _class);
    }
    _createClass(_class, null, [{
      key: "attachDescription",
      value: function attachDescription(element, help, id) {
        var description = element.nextElementSibling;
        if (!(description && description.getAttribute('data-drupal-field-elements') === 'description')) {
          description = Drupal.DatepickerPolyfill.descriptionWrapperElement(id);
          element.parentNode.insertBefore(description, element.nextSibling);
        }
        description.insertAdjacentHTML('beforeend', help);
      }
    }, {
      key: "descriptionWrapperElement",
      value: function descriptionWrapperElement(id) {
        var description = document.createElement('div');
        description.classList.add('description');
        description.setAttribute('data-drupal-field-elements', 'description');
        if (id) {
          description.setAttribute('id', id);
        }
        return description;
      }
    }]);
    return _class;
  }();
  Drupal.theme.dateHelp = function (_ref) {
    var dateDesc = _ref.dateDesc;
    return "<div class=\"no-native-datepicker-help\">".concat(dateDesc, "</div>");
  };
  Drupal.theme.dateTimeHelp = function (_ref2) {
    var dateId = _ref2.dateId,
      timeId = _ref2.timeId,
      dateDesc = _ref2.dateDesc,
      timeDesc = _ref2.timeDesc;
    return "<div class=\"no-native-datepicker-help\">\n       <span id=\"".concat(dateId, "\">").concat(dateDesc, "</span> <span id=\"").concat(timeId, "\">").concat(timeDesc, "</span>\n     </div>");
  };
})(Modernizr, Drupal, once);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  var states = {
    postponed: []
  };
  Drupal.states = states;
  function invert(a, invertState) {
    return invertState && typeof a !== 'undefined' ? !a : a;
  }
  function _compare2(a, b) {
    if (a === b) {
      return typeof a === 'undefined' ? a : true;
    }
    return typeof a === 'undefined' || typeof b === 'undefined';
  }
  function ternary(a, b) {
    if (typeof a === 'undefined') {
      return b;
    }
    if (typeof b === 'undefined') {
      return a;
    }
    return a && b;
  }
  Drupal.behaviors.states = {
    attach: function attach(context, settings) {
      var $states = $(context).find('[data-drupal-states]');
      var il = $states.length;
      var _loop = function _loop(i) {
        var config = JSON.parse($states[i].getAttribute('data-drupal-states'));
        Object.keys(config || {}).forEach(function (state) {
          new states.Dependent({
            element: $($states[i]),
            state: states.State.sanitize(state),
            constraints: config[state]
          });
        });
      };
      for (var i = 0; i < il; i++) {
        _loop(i);
      }
      while (states.postponed.length) {
        states.postponed.shift()();
      }
    }
  };
  states.Dependent = function (args) {
    var _this = this;
    $.extend(this, {
      values: {},
      oldValue: null
    }, args);
    this.dependees = this.getDependees();
    Object.keys(this.dependees || {}).forEach(function (selector) {
      _this.initializeDependee(selector, _this.dependees[selector]);
    });
  };
  states.Dependent.comparisons = {
    RegExp: function RegExp(reference, value) {
      return reference.test(value);
    },
    Function: function Function(reference, value) {
      return reference(value);
    },
    Number: function Number(reference, value) {
      return typeof value === 'string' ? _compare2(reference.toString(), value) : _compare2(reference, value);
    }
  };
  states.Dependent.prototype = {
    initializeDependee: function initializeDependee(selector, dependeeStates) {
      var _this2 = this;
      this.values[selector] = {};
      Object.keys(dependeeStates).forEach(function (i) {
        var state = dependeeStates[i];
        if ($.inArray(state, dependeeStates) === -1) {
          return;
        }
        state = states.State.sanitize(state);
        _this2.values[selector][state.name] = null;
        $(selector).on("state:".concat(state), {
          selector: selector,
          state: state
        }, function (e) {
          _this2.update(e.data.selector, e.data.state, e.value);
        });
        new states.Trigger({
          selector: selector,
          state: state
        });
      });
    },
    compare: function compare(reference, selector, state) {
      var value = this.values[selector][state.name];
      if (reference.constructor.name in states.Dependent.comparisons) {
        return states.Dependent.comparisons[reference.constructor.name](reference, value);
      }
      return _compare2(reference, value);
    },
    update: function update(selector, state, value) {
      if (value !== this.values[selector][state.name]) {
        this.values[selector][state.name] = value;
        this.reevaluate();
      }
    },
    reevaluate: function reevaluate() {
      var value = this.verifyConstraints(this.constraints);
      if (value !== this.oldValue) {
        this.oldValue = value;
        value = invert(value, this.state.invert);
        this.element.trigger({
          type: "state:".concat(this.state),
          value: value,
          trigger: true
        });
      }
    },
    verifyConstraints: function verifyConstraints(constraints, selector) {
      var result;
      if ($.isArray(constraints)) {
        var hasXor = $.inArray('xor', constraints) === -1;
        var len = constraints.length;
        for (var i = 0; i < len; i++) {
          if (constraints[i] !== 'xor') {
            var constraint = this.checkConstraints(constraints[i], selector, i);
            if (constraint && (hasXor || result)) {
              return hasXor;
            }
            result = result || constraint;
          }
        }
      } else if ($.isPlainObject(constraints)) {
        for (var n in constraints) {
          if (constraints.hasOwnProperty(n)) {
            result = ternary(result, this.checkConstraints(constraints[n], selector, n));
            if (result === false) {
              return false;
            }
          }
        }
      }
      return result;
    },
    checkConstraints: function checkConstraints(value, selector, state) {
      if (typeof state !== 'string' || /[0-9]/.test(state[0])) {
        state = null;
      } else if (typeof selector === 'undefined') {
        selector = state;
        state = null;
      }
      if (state !== null) {
        state = states.State.sanitize(state);
        return invert(this.compare(value, selector, state), state.invert);
      }
      return this.verifyConstraints(value, selector);
    },
    getDependees: function getDependees() {
      var cache = {};
      var _compare = this.compare;
      this.compare = function (reference, selector, state) {
        (cache[selector] || (cache[selector] = [])).push(state.name);
      };
      this.verifyConstraints(this.constraints);
      this.compare = _compare;
      return cache;
    }
  };
  states.Trigger = function (args) {
    $.extend(this, args);
    if (this.state in states.Trigger.states) {
      this.element = $(this.selector);
      if (!this.element.data("trigger:".concat(this.state))) {
        this.initialize();
      }
    }
  };
  states.Trigger.prototype = {
    initialize: function initialize() {
      var _this3 = this;
      var trigger = states.Trigger.states[this.state];
      if (typeof trigger === 'function') {
        trigger.call(window, this.element);
      } else {
        Object.keys(trigger || {}).forEach(function (event) {
          _this3.defaultTrigger(event, trigger[event]);
        });
      }
      this.element.data("trigger:".concat(this.state), true);
    },
    defaultTrigger: function defaultTrigger(event, valueFn) {
      var oldValue = valueFn.call(this.element);
      this.element.on(event, $.proxy(function (e) {
        var value = valueFn.call(this.element, e);
        if (oldValue !== value) {
          this.element.trigger({
            type: "state:".concat(this.state),
            value: value,
            oldValue: oldValue
          });
          oldValue = value;
        }
      }, this));
      states.postponed.push($.proxy(function () {
        this.element.trigger({
          type: "state:".concat(this.state),
          value: oldValue,
          oldValue: null
        });
      }, this));
    }
  };
  states.Trigger.states = {
    empty: {
      keyup: function keyup() {
        return this.val() === '';
      },
      change: function change() {
        return this.val() === '';
      }
    },
    checked: {
      change: function change() {
        var checked = false;
        this.each(function () {
          checked = $(this).prop('checked');
          return !checked;
        });
        return checked;
      }
    },
    value: {
      keyup: function keyup() {
        if (this.length > 1) {
          return this.filter(':checked').val() || false;
        }
        return this.val();
      },
      change: function change() {
        if (this.length > 1) {
          return this.filter(':checked').val() || false;
        }
        return this.val();
      }
    },
    collapsed: {
      collapsed: function collapsed(e) {
        return typeof e !== 'undefined' && 'value' in e ? e.value : !this.is('[open]');
      }
    }
  };
  states.State = function (state) {
    this.pristine = state;
    this.name = state;
    var process = true;
    do {
      while (this.name.charAt(0) === '!') {
        this.name = this.name.substring(1);
        this.invert = !this.invert;
      }
      if (this.name in states.State.aliases) {
        this.name = states.State.aliases[this.name];
      } else {
        process = false;
      }
    } while (process);
  };
  states.State.sanitize = function (state) {
    if (state instanceof states.State) {
      return state;
    }
    return new states.State(state);
  };
  states.State.aliases = {
    enabled: '!disabled',
    invisible: '!visible',
    invalid: '!valid',
    untouched: '!touched',
    optional: '!required',
    filled: '!empty',
    unchecked: '!checked',
    irrelevant: '!relevant',
    expanded: '!collapsed',
    open: '!collapsed',
    closed: 'collapsed',
    readwrite: '!readonly'
  };
  states.State.prototype = {
    invert: false,
    toString: function toString() {
      return this.name;
    }
  };
  var $document = $(document);
  $document.on('state:disabled', function (e) {
    if (e.trigger) {
      $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggleClass('form-disabled', e.value).find('select, input, textarea').prop('disabled', e.value);
    }
  });
  $document.on('state:required', function (e) {
    if (e.trigger) {
      if (e.value) {
        var label = "label".concat(e.target.id ? "[for=".concat(e.target.id, "]") : '');
        var $label = $(e.target).attr({
          required: 'required',
          'aria-required': 'true'
        }).closest('.js-form-item, .js-form-wrapper').find(label);
        if (!$label.hasClass('js-form-required').length) {
          $label.addClass('js-form-required form-required');
        }
      } else {
        $(e.target).removeAttr('required aria-required').closest('.js-form-item, .js-form-wrapper').find('label.js-form-required').removeClass('js-form-required form-required');
      }
    }
  });
  $document.on('state:visible', function (e) {
    if (e.trigger) {
      $(e.target).closest('.js-form-item, .js-form-submit, .js-form-wrapper').toggle(e.value);
    }
  });
  $document.on('state:checked', function (e) {
    if (e.trigger) {
      $(e.target).closest('.js-form-item, .js-form-wrapper').find('input').prop('checked', e.value).trigger('change');
    }
  });
  $document.on('state:collapsed', function (e) {
    if (e.trigger) {
      if ($(e.target).is('[open]') === e.value) {
        $(e.target).find('> summary').trigger('click');
      }
    }
  });
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
  Drupal.behaviors.menuUiDetailsSummaries = {
    attach: function attach(context) {
      $(context).find('.menu-link-form').drupalSetSummary(function (context) {
        var $context = $(context);
        if ($context.find('.js-form-item-menu-enabled input').is(':checked')) {
          return Drupal.checkPlain($context.find('.js-form-item-menu-title input')[0].value);
        }
        return Drupal.t('Not in menu');
      });
    }
  };
  Drupal.behaviors.menuUiLinkAutomaticTitle = {
    attach: function attach(context) {
      var $context = $(context);
      $context.find('.menu-link-form').each(function () {
        var $this = $(this);
        var $checkbox = $this.find('.js-form-item-menu-enabled input');
        var $linkTitle = $context.find('.js-form-item-menu-title input');
        var $title = $this.closest('form').find('.js-form-item-title-0-value input');
        if (!($checkbox.length && $linkTitle.length && $title.length)) {
          return;
        }
        if ($checkbox.is(':checked') && $linkTitle[0].value.length) {
          $linkTitle.data('menuLinkAutomaticTitleOverridden', true);
        }
        $linkTitle.on('keyup', function () {
          $linkTitle.data('menuLinkAutomaticTitleOverridden', true);
        });
        $checkbox.on('change', function () {
          if ($checkbox.is(':checked')) {
            if (!$linkTitle.data('menuLinkAutomaticTitleOverridden')) {
              $linkTitle[0].value = $title[0].value;
            }
          } else {
            $linkTitle[0].value = '';
            $linkTitle.removeData('menuLinkAutomaticTitleOverridden');
          }
          $checkbox.closest('.vertical-tabs-pane').trigger('summaryUpdated');
          $checkbox.trigger('formUpdated');
        });
        $title.on('keyup', function () {
          if (!$linkTitle.data('menuLinkAutomaticTitleOverridden') && $checkbox.is(':checked')) {
            $linkTitle[0].value = $title[0].value;
            $linkTitle.trigger('formUpdated');
          }
        });
      });
    }
  };
})(jQuery, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, once, tabbable) {
  function isNavOpen(navWrapper) {
    return navWrapper.classList.contains('is-active');
  }
  function toggleNav(props, state) {
    var value = !!state;
    props.navButton.setAttribute('aria-expanded', value);
    if (value) {
      props.body.classList.add('is-overlay-active');
      props.body.classList.add('is-fixed');
      props.navWrapper.classList.add('is-active');
    } else {
      props.body.classList.remove('is-overlay-active');
      props.body.classList.remove('is-fixed');
      props.navWrapper.classList.remove('is-active');
    }
  }
  function init(props) {
    props.navButton.setAttribute('aria-controls', props.navWrapperId);
    props.navButton.setAttribute('aria-expanded', 'false');
    props.navButton.addEventListener('click', function () {
      toggleNav(props, !isNavOpen(props.navWrapper));
    });
    document.addEventListener('keyup', function (e) {
      if (e.key === 'Escape' || e.key === 'Esc') {
        if (props.olivero.areAnySubNavsOpen()) {
          props.olivero.closeAllSubNav();
        } else {
          toggleNav(props, false);
        }
      }
    });
    props.overlay.addEventListener('click', function () {
      toggleNav(props, false);
    });
    props.overlay.addEventListener('touchstart', function () {
      toggleNav(props, false);
    });
    props.header.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' && isNavOpen(props.navWrapper)) {
        var tabbableNavElements = tabbable.tabbable(props.navWrapper);
        tabbableNavElements.unshift(props.navButton);
        var firstTabbableEl = tabbableNavElements[0];
        var lastTabbableEl = tabbableNavElements[tabbableNavElements.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === firstTabbableEl && !props.olivero.isDesktopNav()) {
            lastTabbableEl.focus();
            e.preventDefault();
          }
        } else if (document.activeElement === lastTabbableEl && !props.olivero.isDesktopNav()) {
          firstTabbableEl.focus();
          e.preventDefault();
        }
      }
    });
    window.addEventListener('resize', function () {
      if (props.olivero.isDesktopNav()) {
        toggleNav(props, false);
        props.body.classList.remove('is-overlay-active');
        props.body.classList.remove('is-fixed');
      }
      Drupal.olivero.closeAllSubNav();
    });
    props.navWrapper.addEventListener('click', function (e) {
      if (e.target.matches("[href*=\"".concat(window.location.pathname, "#\"], [href*=\"").concat(window.location.pathname, "#\"] *, [href^=\"#\"], [href^=\"#\"] *"))) {
        toggleNav(props, false);
      }
    });
  }
  Drupal.behaviors.oliveroNavigation = {
    attach: function attach(context) {
      var headerId = 'header';
      var header = once('navigation', "#".concat(headerId), context).shift();
      var navWrapperId = 'header-nav';
      if (header) {
        var navWrapper = header.querySelector("#".concat(navWrapperId));
        var olivero = Drupal.olivero;
        var navButton = context.querySelector('[data-drupal-selector="mobile-nav-button"]');
        var body = context.querySelector('body');
        var overlay = context.querySelector('[data-drupal-selector="header-nav-overlay"]');
        init({
          olivero: olivero,
          header: header,
          navWrapperId: navWrapperId,
          navWrapper: navWrapper,
          navButton: navButton,
          body: body,
          overlay: overlay
        });
      }
    }
  };
})(Drupal, once, tabbable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal) {
  var isDesktopNav = Drupal.olivero.isDesktopNav;
  var secondLevelNavMenus = document.querySelectorAll('[data-drupal-selector="primary-nav-menu-item-has-children"]');
  function toggleSubNav(topLevelMenuItem, toState) {
    var buttonSelector = '[data-drupal-selector="primary-nav-submenu-toggle-button"]';
    var button = topLevelMenuItem.querySelector(buttonSelector);
    var state = toState !== undefined ? toState : button.getAttribute('aria-expanded') !== 'true';
    if (state) {
      if (isDesktopNav()) {
        secondLevelNavMenus.forEach(function (el) {
          el.querySelector(buttonSelector).setAttribute('aria-expanded', 'false');
          el.querySelector('[data-drupal-selector="primary-nav-menu--level-2"]').classList.remove('is-active-menu-parent');
          el.querySelector('[data-drupal-selector="primary-nav-menu-🥕"]').classList.remove('is-active-menu-parent');
        });
      }
      button.setAttribute('aria-expanded', 'true');
      topLevelMenuItem.querySelector('[data-drupal-selector="primary-nav-menu--level-2"]').classList.add('is-active-menu-parent');
      topLevelMenuItem.querySelector('[data-drupal-selector="primary-nav-menu-🥕"]').classList.add('is-active-menu-parent');
    } else {
      button.setAttribute('aria-expanded', 'false');
      topLevelMenuItem.classList.remove('is-touch-event');
      topLevelMenuItem.querySelector('[data-drupal-selector="primary-nav-menu--level-2"]').classList.remove('is-active-menu-parent');
      topLevelMenuItem.querySelector('[data-drupal-selector="primary-nav-menu-🥕"]').classList.remove('is-active-menu-parent');
    }
  }
  Drupal.olivero.toggleSubNav = toggleSubNav;
  function handleBlur(e) {
    if (!Drupal.olivero.isDesktopNav()) return;
    setTimeout(function () {
      var menuParentItem = e.target.closest('[data-drupal-selector="primary-nav-menu-item-has-children"]');
      if (!menuParentItem.contains(document.activeElement)) {
        toggleSubNav(menuParentItem, false);
      }
    }, 200);
  }
  secondLevelNavMenus.forEach(function (el) {
    var button = el.querySelector('[data-drupal-selector="primary-nav-submenu-toggle-button"]');
    button.removeAttribute('aria-hidden');
    button.removeAttribute('tabindex');
    el.addEventListener('touchstart', function () {
      el.classList.add('is-touch-event');
    }, {
      passive: true
    });
    el.addEventListener('mouseover', function () {
      if (isDesktopNav() && !el.classList.contains('is-touch-event')) {
        el.classList.add('is-active-mouseover-event');
        toggleSubNav(el, true);
        setTimeout(function () {
          el.classList.remove('is-active-mouseover-event');
        }, 500);
      }
    });
    button.addEventListener('click', function () {
      if (!el.classList.contains('is-active-mouseover-event')) {
        toggleSubNav(el);
      }
    });
    el.addEventListener('mouseout', function () {
      if (isDesktopNav() && !document.activeElement.matches('[aria-expanded="true"], .is-active-menu-parent *')) {
        toggleSubNav(el, false);
      }
    });
    el.addEventListener('blur', handleBlur, true);
  });
  function closeAllSubNav() {
    secondLevelNavMenus.forEach(function (el) {
      if (el.contains(document.activeElement)) {
        el.querySelector('[data-drupal-selector="primary-nav-submenu-toggle-button"]').focus();
      }
      toggleSubNav(el, false);
    });
  }
  Drupal.olivero.closeAllSubNav = closeAllSubNav;
  function areAnySubNavsOpen() {
    var subNavsAreOpen = false;
    secondLevelNavMenus.forEach(function (el) {
      var button = el.querySelector('[data-drupal-selector="primary-nav-submenu-toggle-button"]');
      var state = button.getAttribute('aria-expanded') === 'true';
      if (state) {
        subNavsAreOpen = true;
      }
    });
    return subNavsAreOpen;
  }
  Drupal.olivero.areAnySubNavsOpen = areAnySubNavsOpen;
  document.addEventListener('keyup', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      if (isDesktopNav()) closeAllSubNav();
    }
  });
  document.addEventListener('touchstart', function (e) {
    if (areAnySubNavsOpen() && !e.target.matches('[data-drupal-selector="header-nav"], [data-drupal-selector="header-nav"] *')) {
      closeAllSubNav();
    }
  }, {
    passive: true
  });
})(Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, once) {
  function transitionToDesktopNavigation(navWrapper, navItem) {
    document.body.classList.remove('is-always-mobile-nav');
    if (navWrapper.clientHeight > navItem.clientHeight) {
      document.body.classList.add('is-always-mobile-nav');
    }
  }
  function checkIfDesktopNavigationWraps(entries) {
    var navItem = document.querySelector('.primary-nav__menu-item');
    if (Drupal.olivero.isDesktopNav() && entries[0].contentRect.height > navItem.clientHeight) {
      var navMediaQuery = window.matchMedia("(max-width: ".concat(window.innerWidth + 5, "px)"));
      document.body.classList.add('is-always-mobile-nav');
      navMediaQuery.addEventListener('change', function () {
        transitionToDesktopNavigation(entries[0].target, navItem);
      }, {
        once: true
      });
    }
  }
  function init(primaryNav) {
    if ('ResizeObserver' in window) {
      var resizeObserver = new ResizeObserver(checkIfDesktopNavigationWraps);
      resizeObserver.observe(primaryNav);
    }
  }
  Drupal.behaviors.automaticMobileNav = {
    attach: function attach(context) {
      once('olivero-automatic-mobile-nav', '[data-drupal-selector="primary-nav-menu--level-1"]', context).forEach(init);
    }
  };
})(Drupal, once);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings) {
  var activeItem = Drupal.url(drupalSettings.path.currentPath);
  $.fn.drupalToolbarMenu = function () {
    var ui = {
      handleOpen: Drupal.t('Extend'),
      handleClose: Drupal.t('Collapse')
    };
    function toggleList($item, switcher) {
      var $toggle = $item.children('.toolbar-box').children('.toolbar-handle');
      switcher = typeof switcher !== 'undefined' ? switcher : !$item.hasClass('open');
      $item.toggleClass('open', switcher);
      $toggle.toggleClass('open', switcher);
      $toggle.find('.action').each(function (index, element) {
        element.textContent = switcher ? ui.handleClose : ui.handleOpen;
      });
    }
    function toggleClickHandler(event) {
      var $toggle = $(event.target);
      var $item = $toggle.closest('li');
      toggleList($item);
      var $openItems = $item.siblings().filter('.open');
      toggleList($openItems, false);
    }
    function linkClickHandler(event) {
      if (!Drupal.toolbar.models.toolbarModel.get('isFixed')) {
        Drupal.toolbar.models.toolbarModel.set('activeTab', null);
      }
      event.stopPropagation();
    }
    function initItems($menu) {
      var options = {
        class: 'toolbar-icon toolbar-handle',
        action: ui.handleOpen,
        text: ''
      };
      $menu.find('li > a').wrap('<div class="toolbar-box">');
      $menu.find('li').each(function (index, element) {
        var $item = $(element);
        if ($item.children('ul.toolbar-menu').length) {
          var $box = $item.children('.toolbar-box');
          var $link = $box.find('a');
          options.text = Drupal.t('@label', {
            '@label': $link.length ? $link[0].textContent : ''
          });
          $item.children('.toolbar-box').append(Drupal.theme('toolbarMenuItemToggle', options));
        }
      });
    }
    function markListLevels($lists, level) {
      level = !level ? 1 : level;
      var $lis = $lists.children('li').addClass("level-".concat(level));
      $lists = $lis.children('ul');
      if ($lists.length) {
        markListLevels($lists, level + 1);
      }
    }
    function openActiveItem($menu) {
      var pathItem = $menu.find("a[href=\"".concat(window.location.pathname, "\"]"));
      if (pathItem.length && !activeItem) {
        activeItem = window.location.pathname;
      }
      if (activeItem) {
        var $activeItem = $menu.find("a[href=\"".concat(activeItem, "\"]")).addClass('menu-item--active');
        var $activeTrail = $activeItem.parentsUntil('.root', 'li').addClass('menu-item--active-trail');
        toggleList($activeTrail, true);
      }
    }
    return this.each(function (selector) {
      var menu = once('toolbar-menu', this);
      if (menu.length) {
        var $menu = $(menu);
        $menu.on('click.toolbar', '.toolbar-box', toggleClickHandler).on('click.toolbar', '.toolbar-box a', linkClickHandler);
        $menu.addClass('root');
        initItems($menu);
        markListLevels($menu);
        openActiveItem($menu);
      }
    });
  };
  Drupal.theme.toolbarMenuItemToggle = function (options) {
    return "<button class=\"".concat(options.class, "\"><span class=\"action\">").concat(options.action, "</span> <span class=\"label\">").concat(options.text, "</span></button>");
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings) {
  var options = $.extend({
    breakpoints: {
      'toolbar.narrow': '',
      'toolbar.standard': '',
      'toolbar.wide': ''
    }
  }, drupalSettings.toolbar, {
    strings: {
      horizontal: Drupal.t('Horizontal orientation'),
      vertical: Drupal.t('Vertical orientation')
    }
  });
  Drupal.behaviors.toolbar = {
    attach: function attach(context) {
      if (!window.matchMedia('only screen').matches) {
        return;
      }
      once('toolbar', '#toolbar-administration', context).forEach(function (toolbar) {
        var model = new Drupal.toolbar.ToolbarModel({
          locked: JSON.parse(localStorage.getItem('Drupal.toolbar.trayVerticalLocked')),
          activeTab: document.getElementById(JSON.parse(localStorage.getItem('Drupal.toolbar.activeTabID'))),
          height: $('#toolbar-administration').outerHeight()
        });
        Drupal.toolbar.models.toolbarModel = model;
        Object.keys(options.breakpoints).forEach(function (label) {
          var mq = options.breakpoints[label];
          var mql = window.matchMedia(mq);
          Drupal.toolbar.mql[label] = mql;
          mql.addListener(Drupal.toolbar.mediaQueryChangeHandler.bind(null, model, label));
          Drupal.toolbar.mediaQueryChangeHandler.call(null, model, label, mql);
        });
        Drupal.toolbar.views.toolbarVisualView = new Drupal.toolbar.ToolbarVisualView({
          el: toolbar,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.toolbarAuralView = new Drupal.toolbar.ToolbarAuralView({
          el: toolbar,
          model: model,
          strings: options.strings
        });
        Drupal.toolbar.views.bodyVisualView = new Drupal.toolbar.BodyVisualView({
          el: toolbar,
          model: model
        });
        model.trigger('change:isFixed', model, model.get('isFixed'));
        model.trigger('change:activeTray', model, model.get('activeTray'));
        var menuModel = new Drupal.toolbar.MenuModel();
        Drupal.toolbar.models.menuModel = menuModel;
        Drupal.toolbar.views.menuVisualView = new Drupal.toolbar.MenuVisualView({
          el: $(toolbar).find('.toolbar-menu-administration').get(0),
          model: menuModel,
          strings: options.strings
        });
        Drupal.toolbar.setSubtrees.done(function (subtrees) {
          menuModel.set('subtrees', subtrees);
          var theme = drupalSettings.ajaxPageState.theme;
          localStorage.setItem("Drupal.toolbar.subtrees.".concat(theme), JSON.stringify(subtrees));
          model.set('areSubtreesLoaded', true);
        });
        Drupal.toolbar.views.toolbarVisualView.loadSubtrees();
        $(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
          model.set('offsets', offsets);
        });
        model.on('change:orientation', function (model, orientation) {
          $(document).trigger('drupalToolbarOrientationChange', orientation);
        }).on('change:activeTab', function (model, tab) {
          $(document).trigger('drupalToolbarTabChange', tab);
        }).on('change:activeTray', function (model, tray) {
          $(document).trigger('drupalToolbarTrayChange', tray);
        });
        if (Drupal.toolbar.models.toolbarModel.get('orientation') === 'horizontal' && Drupal.toolbar.models.toolbarModel.get('activeTab') === null) {
          Drupal.toolbar.models.toolbarModel.set({
            activeTab: $('.toolbar-bar .toolbar-tab:not(.home-toolbar-tab) a').get(0)
          });
        }
        $(window).on({
          'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
            var $toolbar = $('#toolbar-bar');
            $toolbar.css('margin-top', '0');
            if (settings.drupalOffCanvasPosition === 'top') {
              var height = Drupal.offCanvas.getContainer($element).outerHeight();
              $toolbar.css('margin-top', "".concat(height, "px"));
              $element.on('dialogContentResize.off-canvas', function () {
                var newHeight = Drupal.offCanvas.getContainer($element).outerHeight();
                $toolbar.css('margin-top', "".concat(newHeight, "px"));
              });
            }
          },
          'dialog:beforeclose': function dialogBeforeclose() {
            $('#toolbar-bar').css('margin-top', '0');
          }
        });
      });
    }
  };
  Drupal.toolbar = {
    views: {},
    models: {},
    mql: {},
    setSubtrees: new $.Deferred(),
    mediaQueryChangeHandler: function mediaQueryChangeHandler(model, label, mql) {
      switch (label) {
        case 'toolbar.narrow':
          model.set({
            isOriented: mql.matches,
            isTrayToggleVisible: false
          });
          if (!mql.matches || !model.get('orientation')) {
            model.set({
              orientation: 'vertical'
            }, {
              validate: true
            });
          }
          break;
        case 'toolbar.standard':
          model.set({
            isFixed: mql.matches
          });
          break;
        case 'toolbar.wide':
          model.set({
            orientation: mql.matches && !model.get('locked') ? 'horizontal' : 'vertical'
          }, {
            validate: true
          });
          model.set({
            isTrayToggleVisible: mql.matches
          });
          break;
        default:
          break;
      }
    }
  };
  Drupal.theme.toolbarOrientationToggle = function () {
    return '<div class="toolbar-toggle-orientation"><div class="toolbar-lining">' + '<button class="toolbar-icon" type="button"></button>' + '</div></div>';
  };
  Drupal.AjaxCommands.prototype.setToolbarSubtrees = function (ajax, response, status) {
    Drupal.toolbar.setSubtrees.resolve(response.subtrees);
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Backbone, Drupal) {
  Drupal.toolbar.MenuModel = Backbone.Model.extend({
    defaults: {
      subtrees: {}
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarModel = Backbone.Model.extend({
    defaults: {
      activeTab: null,
      activeTray: null,
      isOriented: false,
      isFixed: false,
      areSubtreesLoaded: false,
      isViewportOverflowConstrained: false,
      orientation: 'horizontal',
      locked: false,
      isTrayToggleVisible: true,
      height: null,
      offsets: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    validate: function validate(attributes, options) {
      if (attributes.orientation === 'horizontal' && this.get('locked') && !options.override) {
        return Drupal.t('The toolbar cannot be set to a horizontal orientation when it is locked.');
      }
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, Backbone) {
  Drupal.toolbar.BodyVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:activeTray ', this.render);
      this.listenTo(this.model, 'change:isFixed change:isViewportOverflowConstrained', this.isToolbarFixed);
    },
    isToolbarFixed: function isToolbarFixed() {
      var isViewportOverflowConstrained = this.model.get('isViewportOverflowConstrained');
      $('body').toggleClass('toolbar-fixed', isViewportOverflowConstrained || this.model.get('isFixed'));
    },
    render: function render() {
      $('body').toggleClass('toolbar-tray-open', !!this.model.get('activeTray'));
    }
  });
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Backbone, Drupal) {
  Drupal.toolbar.MenuVisualView = Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.model, 'change:subtrees', this.render);
    },
    render: function render() {
      var _this = this;
      var subtrees = this.model.get('subtrees');
      Object.keys(subtrees || {}).forEach(function (id) {
        $(once('toolbar-subtrees', _this.$el.find("#toolbar-link-".concat(id)))).after(subtrees[id]);
      });
      if ('drupalToolbarMenu' in $.fn) {
        this.$el.children('.toolbar-menu').drupalToolbarMenu();
      }
    }
  });
})(jQuery, Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Backbone, Drupal) {
  Drupal.toolbar.ToolbarAuralView = Backbone.View.extend({
    initialize: function initialize(options) {
      this.strings = options.strings;
      this.listenTo(this.model, 'change:orientation', this.onOrientationChange);
      this.listenTo(this.model, 'change:activeTray', this.onActiveTrayChange);
    },
    onOrientationChange: function onOrientationChange(model, orientation) {
      Drupal.announce(Drupal.t('Tray orientation changed to @orientation.', {
        '@orientation': orientation
      }));
    },
    onActiveTrayChange: function onActiveTrayChange(model, tray) {
      var relevantTray = tray === null ? model.previous('activeTray') : tray;
      if (!relevantTray) {
        return;
      }
      var action = tray === null ? Drupal.t('closed') : Drupal.t('opened');
      var trayNameElement = relevantTray.querySelector('.toolbar-tray-name');
      var text;
      if (trayNameElement !== null) {
        text = Drupal.t('Tray "@tray" @action.', {
          '@tray': trayNameElement.textContent,
          '@action': action
        });
      } else {
        text = Drupal.t('Tray @action.', {
          '@action': action
        });
      }
      Drupal.announce(text);
    }
  });
})(Backbone, Drupal);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings, Backbone) {
  Drupal.toolbar.ToolbarVisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };
      return {
        'click .toolbar-bar .toolbar-tab .trigger': 'onTabClick',
        'click .toolbar-toggle-orientation button': 'onOrientationToggleClick',
        'touchend .toolbar-bar .toolbar-tab .trigger': touchEndToClick,
        'touchend .toolbar-toggle-orientation button': touchEndToClick
      };
    },
    initialize: function initialize(options) {
      this.strings = options.strings;
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented change:isTrayToggleVisible', this.render);
      this.listenTo(this.model, 'change:mqMatches', this.onMediaQueryChange);
      this.listenTo(this.model, 'change:offsets', this.adjustPlacement);
      this.listenTo(this.model, 'change:activeTab change:orientation change:isOriented', this.updateToolbarHeight);
      this.$el.find('.toolbar-tray .toolbar-lining').has('.toolbar-menu').append(Drupal.theme('toolbarOrientationToggle'));
      this.model.trigger('change:activeTab');
    },
    updateToolbarHeight: function updateToolbarHeight() {
      var toolbarTabOuterHeight = $('#toolbar-bar').find('.toolbar-tab').outerHeight() || 0;
      var toolbarTrayHorizontalOuterHeight = $('.is-active.toolbar-tray-horizontal').outerHeight() || 0;
      this.model.set('height', toolbarTabOuterHeight + toolbarTrayHorizontalOuterHeight);
      $('body').css({
        'padding-top': this.model.get('height')
      });
      $('html').css({
        'scroll-padding-top': this.model.get('height')
      });
      this.triggerDisplace();
    },
    triggerDisplace: function triggerDisplace() {
      _.defer(function () {
        Drupal.displace(true);
      });
    },
    render: function render() {
      this.updateTabs();
      this.updateTrayOrientation();
      this.updateBarAttributes();
      $('body').removeClass('toolbar-loading');
      if (this.model.changed.orientation === 'vertical' || this.model.changed.activeTab) {
        this.loadSubtrees();
      }
      return this;
    },
    onTabClick: function onTabClick(event) {
      if (event.currentTarget.hasAttribute('data-toolbar-tray')) {
        var activeTab = this.model.get('activeTab');
        var clickedTab = event.currentTarget;
        this.model.set('activeTab', !activeTab || clickedTab !== activeTab ? clickedTab : null);
        event.preventDefault();
        event.stopPropagation();
      }
    },
    onOrientationToggleClick: function onOrientationToggleClick(event) {
      var orientation = this.model.get('orientation');
      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      var locked = antiOrientation === 'vertical';
      if (locked) {
        localStorage.setItem('Drupal.toolbar.trayVerticalLocked', 'true');
      } else {
        localStorage.removeItem('Drupal.toolbar.trayVerticalLocked');
      }
      this.model.set({
        locked: locked,
        orientation: antiOrientation
      }, {
        validate: true,
        override: true
      });
      event.preventDefault();
      event.stopPropagation();
    },
    updateTabs: function updateTabs() {
      var $tab = $(this.model.get('activeTab'));
      $(this.model.previous('activeTab')).removeClass('is-active').prop('aria-pressed', false);
      $(this.model.previous('activeTray')).removeClass('is-active');
      if ($tab.length > 0) {
        $tab.addClass('is-active').prop('aria-pressed', true);
        var name = $tab.attr('data-toolbar-tray');
        var id = $tab.get(0).id;
        if (id) {
          localStorage.setItem('Drupal.toolbar.activeTabID', JSON.stringify(id));
        }
        var $tray = this.$el.find("[data-toolbar-tray=\"".concat(name, "\"].toolbar-tray"));
        if ($tray.length) {
          $tray.addClass('is-active');
          this.model.set('activeTray', $tray.get(0));
        } else {
          this.model.set('activeTray', null);
        }
      } else {
        this.model.set('activeTray', null);
        localStorage.removeItem('Drupal.toolbar.activeTabID');
      }
    },
    updateBarAttributes: function updateBarAttributes() {
      var isOriented = this.model.get('isOriented');
      if (isOriented) {
        this.$el.find('.toolbar-bar').attr('data-offset-top', '');
      } else {
        this.$el.find('.toolbar-bar').removeAttr('data-offset-top');
      }
      this.$el.toggleClass('toolbar-oriented', isOriented);
    },
    updateTrayOrientation: function updateTrayOrientation() {
      var orientation = this.model.get('orientation');
      var antiOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      $('body').toggleClass('toolbar-vertical', orientation === 'vertical').toggleClass('toolbar-horizontal', orientation === 'horizontal');
      var removeClass = antiOrientation === 'horizontal' ? 'toolbar-tray-horizontal' : 'toolbar-tray-vertical';
      var $trays = this.$el.find('.toolbar-tray').removeClass(removeClass).addClass("toolbar-tray-".concat(orientation));
      var iconClass = "toolbar-icon-toggle-".concat(orientation);
      var iconAntiClass = "toolbar-icon-toggle-".concat(antiOrientation);
      var $orientationToggle = this.$el.find('.toolbar-toggle-orientation').toggle(this.model.get('isTrayToggleVisible'));
      var $orientationToggleButton = $orientationToggle.find('button');
      $orientationToggleButton[0].value = antiOrientation;
      $orientationToggleButton.attr('title', this.strings[antiOrientation]).removeClass(iconClass).addClass(iconAntiClass);
      $orientationToggleButton[0].textContent = this.strings[antiOrientation];
      var dir = document.documentElement.dir;
      var edge = dir === 'rtl' ? 'right' : 'left';
      $trays.removeAttr('data-offset-left data-offset-right data-offset-top');
      $trays.filter('.toolbar-tray-vertical.is-active').attr("data-offset-".concat(edge), '');
      $trays.filter('.toolbar-tray-horizontal.is-active').attr('data-offset-top', '');
    },
    adjustPlacement: function adjustPlacement() {
      var $trays = this.$el.find('.toolbar-tray');
      if (!this.model.get('isOriented')) {
        $trays.removeClass('toolbar-tray-horizontal').addClass('toolbar-tray-vertical');
      }
    },
    loadSubtrees: function loadSubtrees() {
      var $activeTab = $(this.model.get('activeTab'));
      var orientation = this.model.get('orientation');
      if (!this.model.get('areSubtreesLoaded') && typeof $activeTab.data('drupal-subtrees') !== 'undefined' && orientation === 'vertical') {
        var subtreesHash = drupalSettings.toolbar.subtreesHash;
        var theme = drupalSettings.ajaxPageState.theme;
        var endpoint = Drupal.url("toolbar/subtrees/".concat(subtreesHash));
        var cachedSubtreesHash = localStorage.getItem("Drupal.toolbar.subtreesHash.".concat(theme));
        var cachedSubtrees = JSON.parse(localStorage.getItem("Drupal.toolbar.subtrees.".concat(theme)));
        var isVertical = this.model.get('orientation') === 'vertical';
        if (isVertical && subtreesHash === cachedSubtreesHash && cachedSubtrees) {
          Drupal.toolbar.setSubtrees.resolve(cachedSubtrees);
        } else if (isVertical) {
          localStorage.removeItem("Drupal.toolbar.subtreesHash.".concat(theme));
          localStorage.removeItem("Drupal.toolbar.subtrees.".concat(theme));
          Drupal.ajax({
            url: endpoint
          }).execute();
          localStorage.setItem("Drupal.toolbar.subtreesHash.".concat(theme), subtreesHash);
        }
      }
    }
  });
})(jQuery, Drupal, drupalSettings, Backbone);;
/**
 * @file
 * Behaviors for the search widget in the admin toolbar.
 */

(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.adminToolbarSearch = {

    // If extra links have been fetched.
    extraFetched: false,

    attach: function (context) {
      if (context != document) {
        return;
      }

      var $self = this;

      const elements = once('admin-toolbar-search', '#toolbar-bar', context);
      $(elements).each(function () {
        $self.links = [];

        var $searchTab = $(this).find('#admin-toolbar-search-tab')
        var $searchInput = $searchTab.find('#admin-toolbar-search-input');

        if ($searchInput.length === 0) {
          return;
        }

        $searchInput.autocomplete({
          minLength: 2,
          position: { collision : 'fit' },
          source: function (request, response) {
            var data = $self.handleAutocomplete(request.term);
            if (!$self.extraFetched && drupalSettings.adminToolbarSearch.loadExtraLinks) {
              $.getJSON( Drupal.url('admin/admin-toolbar-search'), function ( data ) {
                $(data).each(function () {
                  var item = this;
                  item.label = this.labelRaw + ' ' + this.value;
                  $self.links.push(item);
                });

                $self.extraFetched = true;

                var results = $self.handleAutocomplete(request.term);
                response(results);
              });
            }
            else {
              response(data);
            }
          },
          open: function () {
            var zIndex = $('#toolbar-item-administration-tray')
              .css('z-index') + 1;
            $(this).autocomplete('widget').css('z-index', zIndex);

            return false;
          },
          select: function (event, ui) {
            if (ui.item.value) {
              location.href = ui.item.value;
              return false;
            }
          }
        }).data('ui-autocomplete')._renderItem = (function (ul, item) {
          ul.addClass('admin-toolbar-search-autocomplete-list');
          return $('<li>')
            .append('<div>' + item.labelRaw + ' <span class="admin-toolbar-search-url">' + item.value + '</span></div>')
            .appendTo(ul);
        });

        // Populate the links for search results when the input is pressed.
        $searchInput.focus(function () {
          Drupal.behaviors.adminToolbarSearch.populateLinks($self);
        });

        // Show/hide search input field when mobile tab item is pressed.
        $('#admin-toolbar-mobile-search-tab .toolbar-item', context).click(function (e) {
          e.preventDefault();
          $(this).toggleClass('is-active');
          $searchTab.toggleClass('visible');
          $searchInput.focus();
        });
      });
    },
    getItemLabel: function (item) {
      var breadcrumbs = [];
      $(item).parents().each(function () {
        if ($(this).hasClass('menu-item')) {
          var $link = $(this).find('a:first');
          if ($link.length && !$link.hasClass('admin-toolbar-search-ignore')) {
            breadcrumbs.unshift($link.text());
          }
        }
      });
      return breadcrumbs.join(' > ');
    },
    handleAutocomplete: function (term) {
      var $self = this;
      var keywords = term.split(" "); // Split search terms into list.

      var suggestions = [];
      $self.links.forEach(function (element) {
        var label = element.label.toLowerCase();

        // Add exact matches.
        if (label.indexOf(term.toLowerCase()) >= 0) {
          suggestions.push(element);
        }
        else {
          // Add suggestions where it matches all search terms.
          var matchCount = 0;
          keywords.forEach(function (keyword) {
            if (label.indexOf(keyword.toLowerCase()) >= 0) {
              matchCount++;
            }
          });
          if (matchCount == keywords.length) {
            suggestions.push(element);
          }
        }
      });
      return suggestions;
    },
    /**
     * Populates the links in admin toolbar search.
     */
    populateLinks: function ($self) {
      // Populate only when links array is empty (only the first time).
      if ($self.links.length === 0) {
        var getUrl = window.location;
        var baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
        $('.toolbar-tray a[data-drupal-link-system-path]').each(function () {
          if (this.href !== baseUrl) {
            var label = $self.getItemLabel(this);
            $self.links.push({
              'value': this.href,
              'label': label + ' ' + this.href,
              'labelRaw': Drupal.checkPlain(label)
            });
          }
        });
      }
    },
  };

})(jQuery, Drupal);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
(function ($, Drupal, _ref) {
  var tabbable = _ref.tabbable,
    isTabbable = _ref.isTabbable;
  function TabbingManager() {
    this.stack = [];
  }
  function TabbingContext(options) {
    $.extend(this, {
      level: null,
      $tabbableElements: $(),
      $disabledElements: $(),
      released: false,
      active: false,
      trapFocus: false
    }, options);
  }
  $.extend(TabbingManager.prototype, {
    constrain: function constrain(elements) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref2$trapFocus = _ref2.trapFocus,
        trapFocus = _ref2$trapFocus === void 0 ? false : _ref2$trapFocus;
      var il = this.stack.length;
      for (var i = 0; i < il; i++) {
        this.stack[i].deactivate();
      }
      var tabbableElements = [];
      $(elements).each(function (index, rootElement) {
        tabbableElements = [].concat(_toConsumableArray(tabbableElements), _toConsumableArray(tabbable(rootElement)));
        if (isTabbable(rootElement)) {
          tabbableElements = [].concat(_toConsumableArray(tabbableElements), [rootElement]);
        }
      });
      var tabbingContext = new TabbingContext({
        level: this.stack.length,
        $tabbableElements: $(tabbableElements),
        trapFocus: trapFocus
      });
      this.stack.push(tabbingContext);
      tabbingContext.activate();
      $(document).trigger('drupalTabbingConstrained', tabbingContext);
      return tabbingContext;
    },
    release: function release() {
      var toActivate = this.stack.length - 1;
      while (toActivate >= 0 && this.stack[toActivate].released) {
        toActivate--;
      }
      this.stack.splice(toActivate + 1);
      if (toActivate >= 0) {
        this.stack[toActivate].activate();
      }
    },
    activate: function activate(tabbingContext) {
      var $set = tabbingContext.$tabbableElements;
      var level = tabbingContext.level;
      var $disabledSet = $(tabbable(document.body)).not($set);
      tabbingContext.$disabledElements = $disabledSet;
      var il = $disabledSet.length;
      for (var i = 0; i < il; i++) {
        this.recordTabindex($disabledSet.eq(i), level);
      }
      $disabledSet.prop('tabindex', -1).prop('autofocus', false);
      var $hasFocus = $set.filter('[autofocus]').eq(-1);
      if ($hasFocus.length === 0) {
        $hasFocus = $set.eq(0);
      }
      $hasFocus.trigger('focus');
      if ($set.length && tabbingContext.trapFocus) {
        $set.last().on('keydown.focus-trap', function (event) {
          if (event.key === 'Tab' && !event.shiftKey) {
            event.preventDefault();
            $set.first().focus();
          }
        });
        $set.first().on('keydown.focus-trap', function (event) {
          if (event.key === 'Tab' && event.shiftKey) {
            event.preventDefault();
            $set.last().focus();
          }
        });
      }
    },
    deactivate: function deactivate(tabbingContext) {
      var $set = tabbingContext.$disabledElements;
      var level = tabbingContext.level;
      var il = $set.length;
      tabbingContext.$tabbableElements.first().off('keydown.focus-trap');
      tabbingContext.$tabbableElements.last().off('keydown.focus-trap');
      for (var i = 0; i < il; i++) {
        this.restoreTabindex($set.eq(i), level);
      }
    },
    recordTabindex: function recordTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices') || {};
      tabInfo[level] = {
        tabindex: $el[0].getAttribute('tabindex'),
        autofocus: $el[0].hasAttribute('autofocus')
      };
      $el.data('drupalOriginalTabIndices', tabInfo);
    },
    restoreTabindex: function restoreTabindex($el, level) {
      var tabInfo = $el.data('drupalOriginalTabIndices');
      if (tabInfo && tabInfo[level]) {
        var data = tabInfo[level];
        if (data.tabindex) {
          $el[0].setAttribute('tabindex', data.tabindex);
        } else {
          $el[0].removeAttribute('tabindex');
        }
        if (data.autofocus) {
          $el[0].setAttribute('autofocus', 'autofocus');
        }
        if (level === 0) {
          $el.removeData('drupalOriginalTabIndices');
        } else {
          var levelToDelete = level;
          while (tabInfo.hasOwnProperty(levelToDelete)) {
            delete tabInfo[levelToDelete];
            levelToDelete++;
          }
          $el.data('drupalOriginalTabIndices', tabInfo);
        }
      }
    }
  });
  $.extend(TabbingContext.prototype, {
    release: function release() {
      if (!this.released) {
        this.deactivate();
        this.released = true;
        Drupal.tabbingManager.release(this);
        $(document).trigger('drupalTabbingContextReleased', this);
      }
    },
    activate: function activate() {
      if (!this.active && !this.released) {
        this.active = true;
        Drupal.tabbingManager.activate(this);
        $(document).trigger('drupalTabbingContextActivated', this);
      }
    },
    deactivate: function deactivate() {
      if (this.active) {
        this.active = false;
        Drupal.tabbingManager.deactivate(this);
        $(document).trigger('drupalTabbingContextDeactivated', this);
      }
    }
  });
  if (Drupal.tabbingManager) {
    return;
  }
  Drupal.tabbingManager = new TabbingManager();
})(jQuery, Drupal, window.tabbable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, Backbone) {
  var strings = {
    tabbingReleased: Drupal.t('Tabbing is no longer constrained by the Contextual module.'),
    tabbingConstrained: Drupal.t('Tabbing is constrained to a set of @contextualsCount and the edit mode toggle.'),
    pressEsc: Drupal.t('Press the esc key to exit.')
  };
  function initContextualToolbar(context) {
    if (!Drupal.contextual || !Drupal.contextual.collection) {
      return;
    }
    var contextualToolbar = Drupal.contextualToolbar;
    contextualToolbar.model = new contextualToolbar.StateModel({
      isViewing: localStorage.getItem('Drupal.contextualToolbar.isViewing') !== 'false'
    }, {
      contextualCollection: Drupal.contextual.collection
    });
    var viewOptions = {
      el: $('.toolbar .toolbar-bar .contextual-toolbar-tab'),
      model: contextualToolbar.model,
      strings: strings
    };
    new contextualToolbar.VisualView(viewOptions);
    new contextualToolbar.AuralView(viewOptions);
  }
  Drupal.behaviors.contextualToolbar = {
    attach: function attach(context) {
      if (once('contextualToolbar-init', 'body').length) {
        initContextualToolbar(context);
      }
    }
  };
  Drupal.contextualToolbar = {
    model: null
  };
})(jQuery, Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, Backbone) {
  Drupal.contextualToolbar.StateModel = Backbone.Model.extend({
    defaults: {
      isViewing: true,
      isVisible: false,
      contextualCount: 0,
      tabbingContext: null
    },
    initialize: function initialize(attrs, options) {
      this.listenTo(options.contextualCollection, 'reset remove add', this.countContextualLinks);
      this.listenTo(options.contextualCollection, 'add', this.lockNewContextualLinks);
      this.listenTo(this, 'change:contextualCount', this.updateVisibility);
      this.listenTo(this, 'change:isViewing', function (model, isViewing) {
        options.contextualCollection.each(function (contextualModel) {
          contextualModel.set('isLocked', !isViewing);
        });
      });
    },
    countContextualLinks: function countContextualLinks(contextualModel, contextualCollection) {
      this.set('contextualCount', contextualCollection.length);
    },
    lockNewContextualLinks: function lockNewContextualLinks(contextualModel, contextualCollection) {
      if (!this.get('isViewing')) {
        contextualModel.set('isLocked', true);
      }
    },
    updateVisibility: function updateVisibility() {
      this.set('isVisible', this.get('contextualCount') > 0);
    }
  });
})(Drupal, Backbone);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, Backbone, _) {
  Drupal.contextualToolbar.AuralView = Backbone.View.extend({
    announcedOnce: false,
    initialize: function initialize(options) {
      this.options = options;
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.manageTabbing);
      $(document).on('keyup', _.bind(this.onKeypress, this));
      this.manageTabbing();
    },
    render: function render() {
      this.$el.find('button').attr('aria-pressed', !this.model.get('isViewing'));
      return this;
    },
    manageTabbing: function manageTabbing() {
      var tabbingContext = this.model.get('tabbingContext');
      if (tabbingContext) {
        if (tabbingContext.active) {
          Drupal.announce(this.options.strings.tabbingReleased);
        }
        tabbingContext.release();
      }
      if (!this.model.get('isViewing')) {
        tabbingContext = Drupal.tabbingManager.constrain($('.contextual-toolbar-tab, .contextual'));
        this.model.set('tabbingContext', tabbingContext);
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
    },
    announceTabbingConstraint: function announceTabbingConstraint() {
      var strings = this.options.strings;
      Drupal.announce(Drupal.formatString(strings.tabbingConstrained, {
        '@contextualsCount': Drupal.formatPlural(Drupal.contextual.collection.length, '@count contextual link', '@count contextual links')
      }));
      Drupal.announce(strings.pressEsc);
    },
    onKeypress: function onKeypress(event) {
      if (!this.announcedOnce && event.keyCode === 9 && !this.model.get('isViewing')) {
        this.announceTabbingConstraint();
        this.announcedOnce = true;
      }
      if (event.keyCode === 27) {
        this.model.set('isViewing', true);
      }
    }
  });
})(jQuery, Drupal, Backbone, _);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, Backbone) {
  Drupal.contextualToolbar.VisualView = Backbone.View.extend({
    events: function events() {
      var touchEndToClick = function touchEndToClick(event) {
        event.preventDefault();
        event.target.click();
      };
      return {
        click: function click() {
          this.model.set('isViewing', !this.model.get('isViewing'));
        },
        touchend: touchEndToClick
      };
    },
    initialize: function initialize() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'change:isViewing', this.persist);
    },
    render: function render() {
      this.$el.toggleClass('hidden', !this.model.get('isVisible'));
      this.$el.find('button').toggleClass('is-active', !this.model.get('isViewing'));
      return this;
    },
    persist: function persist(model, isViewing) {
      if (!isViewing) {
        localStorage.setItem('Drupal.contextualToolbar.isViewing', 'false');
      } else {
        localStorage.removeItem('Drupal.contextualToolbar.isViewing');
      }
    }
  });
})(Drupal, Backbone);;
(function ($, Drupal) {
  Drupal.behaviors.adminToolbar = {
    attach: function (context, settings) {

      $('a.toolbar-icon', context).removeAttr('title');

      // Make the toolbar menu navigable with keyboard.
      $('ul.toolbar-menu li.menu-item--expanded a', context).on('focusin', function () {
        $('li.menu-item--expanded', context).removeClass('hover-intent');
        $(this).parents('li.menu-item--expanded').addClass('hover-intent');
      });

      $('ul.toolbar-menu li.menu-item a', context).keydown(function (e) {
        if ((e.shiftKey && (e.keyCode || e.which) == 9)) {
          if ($(this).parent('.menu-item').prev().hasClass('menu-item--expanded')) {
            $(this).parent('.menu-item').prev().addClass('hover-intent');
          }
        }
      });

      $('.toolbar-menu:first-child > .menu-item:not(.menu-item--expanded) a, .toolbar-tab > a', context).on('focusin', function () {
        $('.menu-item--expanded').removeClass('hover-intent');
      });

      $('.toolbar-menu:first-child > .menu-item', context).on('hover', function () {
        $(this, 'a').css("background: #fff;");
      });

      $('ul:not(.toolbar-menu)', context).on({
        mousemove: function () {
          $('li.menu-item--expanded').removeClass('hover-intent');
        },
        hover: function () {
          $('li.menu-item--expanded').removeClass('hover-intent');
        }
      });

      // Always hide the dropdown menu on mobile.
      if (window.matchMedia("(max-width: 767px)").matches && $('body').hasClass('toolbar-tray-open')) {
        $('body').removeClass('toolbar-tray-open');
        $('#toolbar-item-administration').removeClass('is-active');
        $('#toolbar-item-administration-tray').removeClass('is-active');
      };

    }
  };
})(jQuery, Drupal);
;
;/*!
 * hoverIntent v1.8.1 // 2014.08.11 // jQuery v1.9.1+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */

/* hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 */(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (jQuery && !jQuery.fn.hoverIntent) {
    factory(jQuery);
  }
})(function ($) {
  'use strict';

  // default configuration values
  var _cfg = {
    interval: 100,
    sensitivity: 6,
    timeout: 0
  };

  // counter used to generate an ID for each instance
  var INSTANCE_COUNT = 0;

  // current X and Y position of mouse, updated during mousemove tracking (shared across instances)
  var cX, cY;

  // saves the current pointer position coordinates based on the given mousemove event
  var track = function (ev) {
    cX = ev.pageX;
    cY = ev.pageY;
  };

  // compares current and previous mouse positions
  var compare = function (ev,$el,s,cfg) {
    // compare mouse positions to see if pointer has slowed enough to trigger `over` function
    if ( Math.sqrt( (s.pX - cX) * (s.pX - cX) + (s.pY - cY) * (s.pY - cY) ) < cfg.sensitivity ) {
      $el.off(s.event,track);
      delete s.timeoutId;
      // set hoverIntent state as active for this element (permits `out` handler to trigger)
      s.isActive = true;
      // overwrite old mouseenter event coordinates with most recent pointer position
      ev.pageX = cX; ev.pageY = cY;
      // clear coordinate data from state object
      delete s.pX; delete s.pY;
      return cfg.over.apply($el[0],[ev]);
    } else {
      // set previous coordinates for next comparison
      s.pX = cX; s.pY = cY;
      // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
      s.timeoutId = setTimeout( function () {compare(ev, $el, s, cfg);} , cfg.interval );
    }
  };

  // triggers given `out` function at configured `timeout` after a mouseleave and clears state
  var delay = function (ev,$el,s,out) {
    delete $el.data('hoverIntent')[s.id];
    return out.apply($el[0],[ev]);
  };

  $.fn.hoverIntent = function (handlerIn,handlerOut,selector) {
    // instance ID, used as a key to store and retrieve state information on an element
    var instanceId = INSTANCE_COUNT++;

    // extend the default configuration and parse parameters
    var cfg = $.extend({}, _cfg);
    if ( $.isPlainObject(handlerIn) ) {
      cfg = $.extend(cfg, handlerIn);
      if ( !$.isFunction(cfg.out) ) {
        cfg.out = cfg.over;
      }
    } else if ( $.isFunction(handlerOut) ) {
      cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
    } else {
      cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
    }

    // A private function for handling mouse 'hovering'
    var handleHover = function (e) {
      // cloned event to pass to handlers (copy required for event object to be passed in IE)
      var ev = $.extend({},e);

      // the current target of the mouse event, wrapped in a jQuery object
      var $el = $(this);

      // read hoverIntent data from element (or initialize if not present)
      var hoverIntentData = $el.data('hoverIntent');
      if (!hoverIntentData) { $el.data('hoverIntent', (hoverIntentData = {})); }

      // read per-instance state from element (or initialize if not present)
      var state = hoverIntentData[instanceId];
      if (!state) { hoverIntentData[instanceId] = state = { id: instanceId }; }

      // state properties:
      // id = instance ID, used to clean up data
      // timeoutId = timeout ID, reused for tracking mouse position and delaying "out" handler
      // isActive = plugin state, true after `over` is called just until `out` is called
      // pX, pY = previously-measured pointer coordinates, updated at each polling interval
      // event = string representing the namespaced event used for mouse tracking

      // clear any existing timeout
      if (state.timeoutId) { state.timeoutId = clearTimeout(state.timeoutId); }

      // namespaced event used to register and unregister mousemove tracking
      var mousemove = state.event = 'mousemove.hoverIntent.hoverIntent' + instanceId;

      // handle the event, based on its type
      if (e.type === 'mouseenter') {
        // do nothing if already active
        if (state.isActive) { return; }
        // set "previous" X and Y position based on initial entry point
        state.pX = ev.pageX; state.pY = ev.pageY;
        // update "current" X and Y position based on mousemove
        $el.off(mousemove,track).on(mousemove,track);
        // start polling interval (self-calling timeout) to compare mouse coordinates over time
        state.timeoutId = setTimeout( function () {compare(ev,$el,state,cfg);} , cfg.interval );
      } else { // "mouseleave"
        // do nothing if not already active
        if (!state.isActive) { return; }
        // unbind expensive mousemove event
        $el.off(mousemove,track);
        // if hoverIntent state is true, then call the mouseOut function after the specified delay
        state.timeoutId = setTimeout( function () {delay(ev,$el,state,cfg.out);} , cfg.timeout );
      }
    };

    // listen for mouseenter and mouseleave
    return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
  };
});
;
(function ($) {
  $(document).ready(function () {
    $('.toolbar-tray-horizontal li.menu-item--expanded, .toolbar-tray-horizontal ul li.menu-item--expanded .menu-item').hoverIntent({
      over: function () {
        // At the current depth, we should delete all "hover-intent" classes.
        // Other wise we get unwanted behaviour where menu items are expanded while already in hovering other ones.
        $(this).parent().find('li').removeClass('hover-intent');
        $(this).addClass('hover-intent');
      },
      out: function () {
        $(this).removeClass('hover-intent');
      },
      timeout: 250
    });
  });
})(jQuery);
;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings) {
  var pathInfo = drupalSettings.path;
  var escapeAdminPath = sessionStorage.getItem('escapeAdminPath');
  var windowLocation = window.location;
  if (!pathInfo.currentPathIsAdmin && !/destination=/.test(windowLocation.search)) {
    sessionStorage.setItem('escapeAdminPath', windowLocation);
  }
  Drupal.behaviors.escapeAdmin = {
    attach: function attach() {
      var toolbarEscape = once('escapeAdmin', '[data-toolbar-escape-admin]');
      if (toolbarEscape.length && pathInfo.currentPathIsAdmin) {
        if (escapeAdminPath !== null) {
          $(toolbarEscape).attr('href', escapeAdminPath);
        } else {
          toolbarEscape[0].textContent = Drupal.t('Home');
        }
      }
    }
  };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function (Drupal, once) {
  function init(el) {
    var tabs = el.querySelector('.tabs');
    var expandedClass = 'is-expanded';
    var activeTab = tabs.querySelector('.is-active');
    function isTabsMobileLayout() {
      return tabs.querySelector('.tabs__trigger').clientHeight > 0;
    }
    function handleTriggerClick(e) {
      if (!tabs.classList.contains(expandedClass)) {
        e.currentTarget.setAttribute('aria-expanded', 'true');
        tabs.classList.add(expandedClass);
      } else {
        e.currentTarget.setAttribute('aria-expanded', 'false');
        tabs.classList.remove(expandedClass);
      }
    }
    if (isTabsMobileLayout() && !activeTab.matches('.tabs__tab:first-child')) {
      var newActiveTab = activeTab.cloneNode(true);
      var firstTab = tabs.querySelector('.tabs__tab:first-child');
      tabs.insertBefore(newActiveTab, firstTab);
      tabs.removeChild(activeTab);
    }
    tabs.querySelector('.tabs__trigger').addEventListener('click', handleTriggerClick);
  }
  Drupal.behaviors.primaryTabs = {
    attach: function attach(context) {
      once('olivero-tabs', '[data-drupal-nav-primary-tabs]', context).forEach(init);
    }
  };
})(Drupal, once);;
