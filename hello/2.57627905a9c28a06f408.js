(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{79:function(e,t,n){var o=n(80);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,a);o.locals&&(e.exports=o.locals)},80:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=(n(79),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}());var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));n.slides=e.slides;return n.slides.shift(),n.slides=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(n.slides),[{meta:{note:"",className:"",background:"default"},content:"<h2>finish</h2>"}]),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.a.Component),r(t,[{key:"componentDidMount",value:function(){n.e(0).then(n.bind(null,7))}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.loadedBespoke&&!this.loaded&&(window.slide.bespoke.on("activate",function(e){localStorage.setItem("page",JSON.stringify({date:Date.now(),page:e.index}))}),this.loaded=!0)}},{key:"render",value:function(){var e=window.slide?window.slide.bespoke.slide()-1<0?0:window.slide.bespoke.slide()-1:0;return a.a.createElement("div",{className:"host-container"},a.a.createElement("div",{className:"host-note"},window.slide?a.a.createElement("pre",null,location.hash&&1!=~~location.hash.match(/#(.*)/)[1]?this.slides[e].meta.note:""):null),a.a.createElement("div",{className:"host-info"},a.a.createElement("h2",null,"next"),a.a.createElement("article",{className:"host-next-slide"},this.slides.map(function(e,t){return a.a.createElement("section",{key:t,className:e.meta.className,"data-bespoke-backdrop":e.meta.background,dangerouslySetInnerHTML:{__html:e.context}})}))))}}]),t}();t.default=i}}]);