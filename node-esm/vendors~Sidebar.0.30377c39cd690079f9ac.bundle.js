(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{393:function(t,e){
/*!
* screenfull
* v3.3.2 - 2017-10-27
* (c) Sindre Sorhus; MIT License
*/
!function(){"use strict";var e="undefined"!=typeof window&&void 0!==window.document?window.document:{},n=void 0!==t&&t.exports,o="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,r=function(){for(var t,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],o=0,r=n.length,i={};o<r;o++)if((t=n[o])&&t[1]in e){for(o=0;o<t.length;o++)i[n[0][o]]=t[o];return i}return!1}(),i={change:r.fullscreenchange,error:r.fullscreenerror},s={request:function(t){var n=r.requestFullscreen;t=t||e.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?t[n]():t[n](o&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){e[r.exitFullscreen]()},toggle:function(t){this.isFullscreen?this.exit():this.request(t)},onchange:function(t){this.on("change",t)},onerror:function(t){this.on("error",t)},on:function(t,n){var o=i[t];o&&e.addEventListener(o,n,!1)},off:function(t,n){var o=i[t];o&&e.removeEventListener(o,n,!1)},raw:r};r?(Object.defineProperties(s,{isFullscreen:{get:function(){return Boolean(e[r.fullscreenElement])}},element:{enumerable:!0,get:function(){return e[r.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(e[r.fullscreenEnabled])}}}),n?t.exports=s:window.screenfull=s):n?t.exports=!1:window.screenfull=!1}()},394:function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},395:function(t,e,n){"use strict";var o=n(394);function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function t(t,e,n,r,i,s){if(s!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},396:function(t,e,n){t.exports=n(395)()},397:function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},i="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return void 0===t?"undefined":o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":o(t)},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=n(3),l=c(a),u=c(n(396));function c(t){return t&&t.__esModule?t:{default:t}}var h={position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"},d={zIndex:2,position:"absolute",top:0,bottom:0,transition:"transform .3s ease-out",WebkitTransition:"-webkit-transform .3s ease-out",willChange:"transform",overflowY:"auto"},f={position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"scroll",WebkitOverflowScrolling:"touch",transition:"left .3s ease-out, right .3s ease-out"},p={zIndex:1,position:"fixed",top:0,left:0,right:0,bottom:0,opacity:0,visibility:"hidden",transition:"opacity .3s ease-out, visibility .3s ease-out",backgroundColor:"rgba(0,0,0,.3)"},b={zIndex:1,position:"fixed",top:0,bottom:0},m=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":o(e))&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={sidebarWidth:t.defaultSidebarWidth,touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null,dragSupported:!1},n.overlayClicked=n.overlayClicked.bind(n),n.onTouchStart=n.onTouchStart.bind(n),n.onTouchMove=n.onTouchMove.bind(n),n.onTouchEnd=n.onTouchEnd.bind(n),n.onScroll=n.onScroll.bind(n),n.saveSidebarRef=n.saveSidebarRef.bind(n),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":o(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.Component),s(e,[{key:"componentDidMount",value:function(){this.setState({dragSupported:"object"===("undefined"==typeof window?"undefined":i(window))&&"ontouchstart"in window}),this.saveSidebarWidth()}},{key:"componentDidUpdate",value:function(){this.isTouching()||this.saveSidebarWidth()}},{key:"onTouchStart",value:function(t){if(!this.isTouching()){var e=t.targetTouches[0];this.setState({touchIdentifier:e.identifier,touchStartX:e.clientX,touchStartY:e.clientY,touchCurrentX:e.clientX,touchCurrentY:e.clientY})}}},{key:"onTouchMove",value:function(t){if(this.isTouching())for(var e=0;e<t.targetTouches.length;e++)if(t.targetTouches[e].identifier===this.state.touchIdentifier){this.setState({touchCurrentX:t.targetTouches[e].clientX,touchCurrentY:t.targetTouches[e].clientY});break}}},{key:"onTouchEnd",value:function(){if(this.isTouching()){var t=this.touchSidebarWidth();(this.props.open&&t<this.state.sidebarWidth-this.props.dragToggleDistance||!this.props.open&&t>this.props.dragToggleDistance)&&this.props.onSetOpen(!this.props.open),this.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})}}},{key:"onScroll",value:function(){this.isTouching()&&this.inCancelDistanceOnScroll()&&this.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})}},{key:"inCancelDistanceOnScroll",value:function(){return this.props.pullRight?Math.abs(this.state.touchCurrentX-this.state.touchStartX)<20:Math.abs(this.state.touchStartX-this.state.touchCurrentX)<20}},{key:"isTouching",value:function(){return null!==this.state.touchIdentifier}},{key:"overlayClicked",value:function(){this.props.open&&this.props.onSetOpen(!1)}},{key:"saveSidebarWidth",value:function(){var t=this.sidebar.offsetWidth;t!==this.state.sidebarWidth&&this.setState({sidebarWidth:t})}},{key:"saveSidebarRef",value:function(t){this.sidebar=t}},{key:"touchSidebarWidth",value:function(){return this.props.pullRight?this.props.open&&window.innerWidth-this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth+this.state.touchStartX-this.state.touchCurrentX:this.state.sidebarWidth:Math.min(window.innerWidth-this.state.touchCurrentX,this.state.sidebarWidth):this.props.open&&this.state.touchStartX<this.state.sidebarWidth?this.state.touchCurrentX>this.state.touchStartX?this.state.sidebarWidth:this.state.sidebarWidth-this.state.touchStartX+this.state.touchCurrentX:Math.min(this.state.touchCurrentX,this.state.sidebarWidth)}},{key:"render",value:function(){var t=r({},d,this.props.styles.sidebar),e=r({},f,this.props.styles.content),n=r({},p,this.props.styles.overlay),o=this.state.dragSupported&&this.props.touch,i=this.isTouching(),s={className:this.props.rootClassName,style:r({},h,this.props.styles.root),role:"navigation"},a=void 0;if(this.props.pullRight?(t.right=0,t.transform="translateX(100%)",t.WebkitTransform="translateX(100%)",this.props.shadow&&(t.boxShadow="-2px 2px 4px rgba(0, 0, 0, 0.15)")):(t.left=0,t.transform="translateX(-100%)",t.WebkitTransform="translateX(-100%)",this.props.shadow&&(t.boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)")),i){var u=this.touchSidebarWidth()/this.state.sidebarWidth;this.props.pullRight?(t.transform="translateX("+100*(1-u)+"%)",t.WebkitTransform="translateX("+100*(1-u)+"%)"):(t.transform="translateX(-"+100*(1-u)+"%)",t.WebkitTransform="translateX(-"+100*(1-u)+"%)"),n.opacity=u,n.visibility="visible"}else this.props.docked?(0!==this.state.sidebarWidth&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)"),this.props.pullRight?e.right=this.state.sidebarWidth+"px":e.left=this.state.sidebarWidth+"px"):this.props.open&&(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)",n.opacity=1,n.visibility="visible");if(!i&&this.props.transitions||(t.transition="none",t.WebkitTransition="none",e.transition="none",n.transition="none"),o)if(this.props.open)s.onTouchStart=this.onTouchStart,s.onTouchMove=this.onTouchMove,s.onTouchEnd=this.onTouchEnd,s.onTouchCancel=this.onTouchEnd,s.onScroll=this.onScroll;else{var c=r({},b,this.props.styles.dragHandle);c.width=this.props.touchHandleWidth,this.props.pullRight?c.right=0:c.left=0,a=l.default.createElement("div",{style:c,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd})}return l.default.createElement("div",s,l.default.createElement("div",{className:this.props.sidebarClassName,style:t,ref:this.saveSidebarRef},this.props.sidebar),l.default.createElement("div",{className:this.props.overlayClassName,style:n,role:"presentation",tabIndex:"0",onClick:this.overlayClicked}),l.default.createElement("div",{className:this.props.contentClassName,style:e},a,this.props.children))}}]),e}();m.propTypes={children:u.default.node.isRequired,styles:u.default.shape({root:u.default.object,sidebar:u.default.object,content:u.default.object,overlay:u.default.object,dragHandle:u.default.object}),rootClassName:u.default.string,sidebarClassName:u.default.string,contentClassName:u.default.string,overlayClassName:u.default.string,sidebar:u.default.node.isRequired,docked:u.default.bool,open:u.default.bool,transitions:u.default.bool,touch:u.default.bool,touchHandleWidth:u.default.number,pullRight:u.default.bool,shadow:u.default.bool,dragToggleDistance:u.default.number,onSetOpen:u.default.func,defaultSidebarWidth:u.default.number},m.defaultProps={docked:!1,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,pullRight:!1,shadow:!0,dragToggleDistance:30,onSetOpen:function(){},styles:{},defaultSidebarWidth:0},e.default=m},398:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=n(397),i=(o=r)&&o.__esModule?o:{default:o};e.default=i.default},403:function(t,e,n){"use strict";n.r(e);var o=n(3),r=n.n(o),i=n(398),s=n.n(i),a=n(393),l=n.n(a),u=n(0),c=function(t){return Object(u.a)({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(t)},h=function(t){return Object(u.a)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(t)},d=n(400),f={sidebar:{minWidth:150,zIndex:1001},overlay:{backgroundColor:"rgba(0, 0, 0, .5)",zIndex:1e3}},p="https://slides.hiroppy.me/Introduce ESM of Node.js",b=["twitter"],m="Introduce ESM of Node.js";e.default=function(t){return r.a.createElement(s.a,{sidebar:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sidebar-social"},Array.isArray(b)&&b.map(function(t){return"twitter"===t?r.a.createElement("a",{key:"twitter",href:"https://twitter.com/intent/tweet?text="+m+" "+p},r.a.createElement(h,null)):"hatena"===t?r.a.createElement("a",{key:"hatena",href:"http://b.hatena.ne.jp/entry/"+p,className:"fa fa-hatena"}):void 0})),r.a.createElement("div",{className:"sidebar-control"},r.a.createElement(d.b,{onClick:function(){return t.goTo(0)}}),r.a.createElement("span",null,t.slideInfo.current," / ",t.slideInfo.total),r.a.createElement(d.d,{onClick:function(){return t.goTo(t.slideInfo.total-1)}})),r.a.createElement("div",null,r.a.createElement(d.c,{onClick:function(){return l.a.enabled?l.a.toggle():void 0}}),r.a.createElement(d.a,{onClick:function(){return t.runPresentationMode()},style:{width:18,height:18}}),r.a.createElement("a",{href:"https://github.com/hiroppy/slides"},r.a.createElement(c,{style:{width:18,height:18,marginTop:8}}))),r.a.createElement("div",{className:"sidebar-contents"},t.contents.map(function(t,e){return r.a.createElement("a",{href:"#"+t.index,key:e},"- ",t.title)})))}(t),shadow:!1,open:t.opened,styles:f,sidebarClassName:"sidebar",onSetOpen:t.onSetOpen},"'")}}}]);