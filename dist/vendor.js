!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=109)}({109:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();!function(r,a){void 0!==e&&"object"==i(t)?e.exports=a(r):void 0!==(o=function(){return a(r)}.call(t,n,t,e))&&(e.exports=o)}(window,function(e){function t(){if(!p){p=!0;for(var t=0;t<h.length;t++)h[t].fn.call(e,h[t].ctx);h=[]}v=!0}function n(){"complete"===document.readyState&&t()}function o(r,o){return p?void setTimeout(function(){r(o)},1):(h.push({fn:r,ctx:o}),void("complete"===document.readyState||!document.attachEvent&&"interactive"===document.readyState?setTimeout(t,1):y||(document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),e.addEventListener("load",t,!1)):(document.attachEvent("onreadystatechange",n),e.attachEvent("onload",t)),y=!0)))}function c(e){var t=s(e),n=t;return e.Data&&(n=s(e.Data)),n}function u(e){return Object.prototype.toString.call(e).replace(/\[object (\w+)\]/,"$1").toLowerCase()}function l(e){return"function"===u(e)}function s(e){return"object"==(void 0===e?"undefined":i(e))?e:JSON&&JSON.parse?JSON.parse(e):new Function("return "+e)()}function f(e){return"object"==(void 0===e?"undefined":i(e))&&"[object object]"==Object.prototype.toString.call(e).toLowerCase()&&!e.length}function d(t){if(e.WebViewJavascriptBridge)return t(WebViewJavascriptBridge);if(e.WVJBCallbacks)return e.WVJBCallbacks.push(t);e.WVJBCallbacks=[t];var n=document.createElement("iframe");n.style.display="none",n.src="wvjbscheme://__BRIDGE_LOADED__",document.documentElement.appendChild(n),setTimeout(function(){document.documentElement.removeChild(n)},0)}var v=!1,h=[],p=!1,y=!1,g=navigator.userAgent,m=function(){var e=g.match(/HARHeshenghuo\/(.*)/);return e&&e.length?e[1]:""}(),b=function(e){var t=m.split(".");e=e.split(".");for(var n=0,r=void 0,o=void 0;n<t.length;n++){if(r=parseInt(e[n],10)||0,o=parseInt(t[n],10)||0,r>o)return-1;if(o>r)return 1}return 0}("5.5.0")>-1,k=function(){return!!b||void 0!==e.app}(),S=function(){function t(){r(this,t),this.version=m,this.isApp=k}return a(t,[{key:"noConflict",value:function(t){return e.hsh===H&&(e.hsh=H),t&&e.hsh===w&&(e.Jheshenghuo=w),w}},{key:"hshReady",value:function(e,t){return v?void e():void(b?o(e,t):this.ready()?(v=!0,this.ready(e)):(v=!0,e()))}},{key:"ready",value:function(e){return e?void e():k}},{key:"callHandler",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?null:arguments[1],n=arguments.length<=2||void 0===arguments[2]?function(){}:arguments[2];l(t)&&(n=t,t=null),d(function(r){r.callHandler(e,t,function(e){var t=c(e);n(t)})})}},{key:"registerHandler",value:function(e,t){d(function(n){n.registerHandler(e,t)})}},{key:"getToken",value:function(e){if(b)this.callHandler("getToken",function(t){e({HARToken:t.token})});else{var t=app.getToken();e(s(t))}}},{key:"call",value:function(e,t,n){return f(t)&&(t=JSON.stringify(t)),n?app.call(e,t,n):app.call(e,t)}},{key:"callHAR",value:function(e,t){var n=arguments.length<=2||void 0===arguments[2]?"":arguments[2];f(t)&&(t=JSON.stringify(t)),app.callHAR(e,t,n)}},{key:"share",value:function(t){var n=arguments.length<=1||void 0===arguments[1]?function(){}:arguments[1],r={};r=f(t)&&t.desc?{title:t.title,text:t.desc,imageUrl:t.imgUrl,url:t.link}:s(t),b?this.callHandler("share",r,function(e){console.log(e),this.registerHandler("share",function(e){var t=c(e);n(t)})}.bind(this)):(e.share=function(){n.apply(void 0,arguments)},alert(r),this.call("share",r,"share"))}},{key:"registerShare",value:function(t,n){var r={};r=f(t)&&t.desc?{title:t.title,text:t.desc,imageUrl:t.imgUrl,url:t.link}:s(t),b?this.callHandler("registerShare",r,function(e){console.log(e),this.registerHandler("registerShare",function(e){var t=c(e);n(t)})}.bind(this)):(e.registerShareCallBack=function(){n.apply(void 0,arguments)},this.callHAR("registerShare",r,"registerShareCallBack"))}}]),t}(),w=new S,H=new S;return H})}});
//# sourceMappingURL=vendor.js.map?e6bc8e71898ddaa7d1fb