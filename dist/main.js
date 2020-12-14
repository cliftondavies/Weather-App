(()=>{var e={740:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n}\n\n/* --------HTML5 display-role reset for older browsers-------- */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection { display: block; }\n\nbody { line-height: 1; }\n\nol,\nul { list-style: none; }\n\nblockquote,\nq { quotes: none; }\n\nblockquote::before,\nblockquote::after,\nq::before,\nq::after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n",""]);const a=o},122:(e,n,t)=>{"use strict";t.d(n,{Z:()=>b});var r=t(645),o=t.n(r),a=t(667),i=t.n(a),c=t(769),u=t(89),s=t(184),d=t(333),l=t(917),p=o()((function(e){return e[1]})),h=i()(c),f=i()(u),g=i()(s),m=i()(d),v=i()(l);p.push([e.id,"*,\n*::before,\n*::after { box-sizing: border-box; }\n\nbody {\n  font-family: 'Roboto', sans-serif;\n  color: #49392c;\n  overflow-x: hidden;\n}\n\n.overall-wrap {\n  display: flex;\n  align-items: center;\n  padding-left: 225px;\n  height: 100vh;\n  background: radial-gradient(circle, rgba(156, 204, 236, 1) 0%, rgba(234, 244, 251, 1) 100%);\n}\n\n.main-wrap {\n  border: 0.1px solid #6595bb;\n  border-radius: 10px;\n  box-shadow: 7px 7px 15px 2px rgba(101, 149, 187, 0.8);\n  font-weight: 500;\n  background: #04042c;\n  text-align: center;\n}\n\n.notification {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 30px;\n  border-radius: 0 0 5px 5px;\n  padding: 5px;\n  background: rgba(242, 15, 23, 0.8);\n}\n\n.show-notification { display: block; }\n\n.menu-toggle {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  border: none;\n  padding: 0 5px 0 0;\n  font-size: 30px;\n  line-height: 0.8;\n  background: none;\n  cursor: pointer;\n}\n\n.toggle-hide { display: none; }\n\n.current-weather {\n  display: flex;\n  justify-content: center;\n  height: 250px;\n  margin-bottom: 10px;\n  border-radius: 10px 10px 0 0;\n  padding: 30px 10px 15px 10px;\n  color: #fff;\n}\n\n.rainy {\n  background: rgba(4, 20, 68, 0.8) url("+h+") center/cover no-repeat;\n  background-blend-mode: overlay;\n}\n\n.cloudy {\n  background: rgba(4, 20, 68, 0.8) url("+f+") center/cover no-repeat;\n  background-blend-mode: overlay;\n}\n\n.snowy {\n  background: rgba(4, 20, 68, 0.8) url("+g+") center/cover no-repeat;\n  background-blend-mode: overlay;\n}\n\n.foggy {\n  background: rgba(4, 20, 68, 0.8) url("+m+") center/cover no-repeat;\n  background-blend-mode: overlay;\n}\n\n.clear {\n  background: rgba(4, 20, 68, 0.8) url("+v+') center/cover no-repeat;\n  background-blend-mode: overlay;\n}\n\n.location-time,\n.temperature,\n.details {\n  display: flex;\n  flex-direction: column;\n}\n\n.temperature {\n  margin: 0 30px;\n  justify-content: center;\n}\n\n.location {\n  margin-bottom: 10px;\n  font-size: 25px;\n  font-weight: 600;\n  text-shadow: 0 3px rgba(73, 57, 44, 0.2);\n}\n\n.current-weather-temp {\n  margin-bottom: 10px;\n  font-size: 50px;\n  font-weight: 600;\n  text-shadow: 1px 5px rgba(73, 57, 44, 0.5);\n}\n\n.temp-min::after { content: " / "; }\n\n.date,\n.time,\n.feels-like,\n.detail-heading { margin-bottom: 7px; }\n\n.icon-one {\n  margin-bottom: 5px;\n  object-fit: contain;\n}\n\n.description {\n  margin-bottom: 15px;\n  font-size: 20px;\n  font-weight: 600;\n  font-style: italic;\n  text-transform: uppercase;\n  text-shadow: 0 3px rgba(73, 57, 44, 0.2);\n}\n\n.measurement-details { display: flex; }\n\n.measurement-detail {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 0 10px;\n}\n\n.measurement-detail span:last-child { font-size: 14px; }\n\n.forecast {\n  display: flex;\n  justify-content: center;\n  border-radius: 0 0 10px 10px;\n  padding: 15px 0;\n  background: #fff;\n}\n\n.forecast-card {\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-hide {\n  position: absolute;\n  top: 30px;\n  right: 0;\n  left: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 1px solid #f4fcfc;\n  border-top-left-radius: 10px;\n  padding-top: 5px;\n  width: 20%;\n  height: calc(100% - 30px);\n  background: rgba(244, 252, 252, 0.1);\n  transition: all 0.3s ease;\n}\n\n.menu-show { left: calc(100vw - 280px); }\n\n.search-actions { margin-bottom: 15px; }\n\n.search-bar {\n  display: block;\n  margin-bottom: 10px;\n  border: none;\n  border-radius: 15px 0 15px 0;\n  border-bottom: 3px solid rgba(101, 149, 187, 0.8);\n  outline: none;\n  padding: 10px 10px;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.7);\n  transition: 0.2s ease-out;\n}\n\n.search-bar:focus { background: rgba(255, 255, 255, 1); }\n\n.save-location,\n.current-location {\n  display: block;\n  margin-bottom: 1px;\n  border: none;\n  padding: 5px;\n  width: 100%;\n  font-size: 14px;\n  text-align: left;\n  background: rgba(101, 149, 187, 0.25);\n  cursor: pointer;\n}\n\n.saved-locations-heading {\n  margin-bottom: 5px;\n  padding-left: 5px;\n}\n\n.saved-list-item {\n  display: flex;\n  margin-bottom: 1px;\n  background: rgba(101, 149, 187, 0.25);\n}\n\n.city-name {\n  flex: 1;\n  text-align: left;\n}\n\n.city-name,\n.delete-city {\n  border: none;\n  padding: 5px;\n  font-size: 14px;\n  background: none;\n  cursor: pointer;\n}\n\n.menu-bottom {\n  display: flex;\n  justify-content: center;\n  border-top: 3px solid rgba(101, 149, 187, 0.8);\n  padding: 10px;\n  background: rgba(101, 149, 187, 0.25);\n}\n\n.temperature-toggle-wrap {\n  position: relative;\n  margin: 0 5px;\n  border: 2px solid rgba(101, 149, 187, 0.8);\n  border-radius: 10px;\n  width: 35px;\n  line-height: 0;\n  cursor: pointer;\n  transition: 1s ease;\n}\n\n.temperature-toggle {\n  position: absolute;\n  top: -1px;\n  border: 0;\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n  background: #000;\n  cursor: pointer;\n  transition: 1s ease;\n}\n\n.temp-toggle-one {\n  background: #000;\n  transition: 1s ease;\n}\n\n.temp-toggle-two {\n  background: rgba(101, 149, 187, 1);\n  right: 0;\n  transition: 1s ease;\n}\n',""]);const b=p},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},667:e=>{"use strict";e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},666:e=>{var n=function(e){"use strict";var n,t=Object.prototype,r=t.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,n,t){return Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{u({},"")}catch(e){u=function(e,n,t){return e[n]=t}}function s(e,n,t,r){var o=n&&n.prototype instanceof m?n:m,a=Object.create(o.prototype),i=new j(r||[]);return a._invoke=function(e,n,t){var r=l;return function(o,a){if(r===h)throw new Error("Generator is already running");if(r===f){if("throw"===o)throw a;return q()}for(t.method=o,t.arg=a;;){var i=t.delegate;if(i){var c=L(i,t);if(c){if(c===g)continue;return c}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(r===l)throw r=f,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);r=h;var u=d(e,n,t);if("normal"===u.type){if(r=t.done?f:p,u.arg===g)continue;return{value:u.arg,done:t.done}}"throw"===u.type&&(r=f,t.method="throw",t.arg=u.arg)}}}(e,t,i),a}function d(e,n,t){try{return{type:"normal",arg:e.call(n,t)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var l="suspendedStart",p="suspendedYield",h="executing",f="completed",g={};function m(){}function v(){}function b(){}var y={};y[a]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(_([])));w&&w!==t&&r.call(w,a)&&(y=w);var C=b.prototype=m.prototype=Object.create(y);function k(e){["next","throw","return"].forEach((function(n){u(e,n,(function(e){return this._invoke(n,e)}))}))}function S(e,n){function t(o,a,i,c){var u=d(e[o],e,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?n.resolve(l.__await).then((function(e){t("next",e,i,c)}),(function(e){t("throw",e,i,c)})):n.resolve(l).then((function(e){s.value=e,i(s)}),(function(e){return t("throw",e,i,c)}))}c(u.arg)}var o;this._invoke=function(e,r){function a(){return new n((function(n,o){t(e,r,n,o)}))}return o=o?o.then(a,a):a()}}function L(e,t){var r=e.iterator[t.method];if(r===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,L(e,t),"throw"===t.method))return g;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=d(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,g;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,g):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,g)}function A(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function E(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(A,this),this.reset(!0)}function _(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(r.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=n,t.done=!0,t};return i.next=i}}return{next:q}}function q(){return{value:n,done:!0}}return v.prototype=C.constructor=b,b.constructor=v,v.displayName=u(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var n="function"==typeof e&&e.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,c,"GeneratorFunction")),e.prototype=Object.create(C),e},e.awrap=function(e){return{__await:e}},k(S.prototype),S.prototype[i]=function(){return this},e.AsyncIterator=S,e.async=function(n,t,r,o,a){void 0===a&&(a=Promise);var i=new S(s(n,t,r,o),a);return e.isGeneratorFunction(t)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(C),u(C,c,"Generator"),C[a]=function(){return this},C.toString=function(){return"[object Generator]"},e.keys=function(e){var n=[];for(var t in e)n.push(t);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=_,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(r,o){return c.type="throw",c.arg=e,t.next=r,o&&(t.method="next",t.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,n){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=n&&n<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=n,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),g},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),E(t),g}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===e){var r=t.completion;if("throw"===r.type){var o=r.arg;E(t)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:_(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=n),g}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},379:(e,n,t)=>{"use strict";var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function i(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],u=n.base?c[0]+n.base:c[0],s=t[u]||0,d="".concat(u," ").concat(s);t[u]=s+1;var l=i(d),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(a[l].references++,a[l].updater(p)):a.push({identifier:d,updater:g(p,n),references:1}),r.push(d)}return r}function u(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var s,d=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function l(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function p(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,f=0;function g(e,n){var t,r,o;if(n.singleton){var a=f++;t=h||(h=u(n)),r=l.bind(null,t,a,!1),o=l.bind(null,t,a,!0)}else t=u(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var u=c(e,n),s=0;s<t.length;s++){var d=i(t[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}t=u}}}},917:(e,n,t)=>{"use strict";e.exports=t.p+"549d6e7a4146cbfe20ba.jpg"},89:(e,n,t)=>{"use strict";e.exports=t.p+"2642f24106cdd9ccecfc.jpg"},333:(e,n,t)=>{"use strict";e.exports=t.p+"8f6668ebdebbfbde476a.jpg"},769:(e,n,t)=>{"use strict";e.exports=t.p+"7a55a063b83f1dcfd1cf.jpg"},184:(e,n,t)=>{"use strict";e.exports=t.p+"fc4d4922add3c13ce7f0.jpg"}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{"use strict";t(666);var e=t(379),n=t.n(e),r=t(740);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var o=t(122);n()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var a=window.Skycons,i=function(){var e=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=document.createElement(e);return r&&(o.id=r),o.className=n,t&&(o.textContent=t),o},n=e("div","overall-wrap"),t=e("main","main-wrap");document.body.appendChild(n),n.appendChild(t);var r={Clear:"CLEAR_DAY",Clouds:"CLOUDY","50d":"FOG",Snow:"SNOW",Rain:"RAIN",Drizzle:"RAIN",Thunderstorm:"THUNDER_RAIN"},o=function(n,t,r){var o=e("div","measurement-detail"),a=e("span","detail-heading",n),i=e("span",r,t);return o.appendChild(a),o.appendChild(i),o},i=function(n,t,r,o){var a=e("div","forecast-card"),i=e("span","day",n),c=e("canvas",t,"",r);c.setAttribute("width","128"),c.setAttribute("height","128");var u=e("span","forecast-temp",o);return a.appendChild(i),a.appendChild(c),a.appendChild(u),a},c=function(n){var t=e("li","saved-list-item"),r=e("button","city-name",n);r.setAttribute("type","button"),t.appendChild(r);var o=e("button","delete-city","x");return o.setAttribute("type","button"),t.appendChild(o),t},u=function(e,n){var t=new a({monochrome:!1});t.add(e,a[n]),t.play()};return{weatherPage:function(){var r=e("span","notification");n.appendChild(r);var a=e("button","menu-toggle");n.appendChild(a);var s=e("span","toggle-open","☰"),d=e("span","toggle-close toggle-hide","X");a.appendChild(s),a.appendChild(d);var l=e("section","current-weather");t.appendChild(l);var p=e("div","location-time"),h=e("span","location"),f=e("span","date");f.textContent=function(){var e=new Date,n=e.getDate(),t=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],r=e.getFullYear();return"".concat(n," ").concat(t," ").concat(r)}();var g=e("span","time");p.appendChild(h),p.appendChild(f),p.appendChild(g);var m=e("section","temperature"),v=e("span","current-weather-temp");v.setAttribute("data-temperature","");var b=e("div","feels-like"),y=e("span","feel","Feels like, "),x=e("span","feel-temp");x.setAttribute("data-temperature",""),b.append(y),b.append(x);var w=e("div","min-max"),C=e("span","temp-min"),k=e("span","temp-max");k.setAttribute("data-temperature",""),C.setAttribute("data-temperature",""),w.appendChild(C),w.appendChild(k),m.appendChild(v),m.appendChild(b),m.appendChild(w);var S=e("section","details"),L=e("canvas","icon-one","","icon1");L.setAttribute("width","128"),L.setAttribute("height","128");var A=e("span","description"),E=e("div","measurement-details"),j=o("Pressure","","pressure"),_=o("Humidity","","humidity"),q=o("Wind","","wind");E.appendChild(j),E.appendChild(_),E.appendChild(q),S.appendChild(L),S.appendChild(A),S.appendChild(E),l.appendChild(p),l.appendChild(m),l.appendChild(S),u("icon1","PARTLY_CLOUDY_DAY");var N=e("section","forecast");t.appendChild(N);var M=i("Monday","icon2","icon2","3°/14°"),O=i("Tuesday","icon3","icon3","0°/17°"),R=i("Wednesday","icon4","icon4","4°/18°"),T=i("Thursday","icon5","icon5","8°/20°"),P=i("Friday","icon6","icon6","10°/19°");N.appendChild(M),N.appendChild(O),N.appendChild(R),N.appendChild(T),N.appendChild(P),u("icon2","RAIN_SNOW_SHOWERS_DAY"),u("icon3","FOG"),u("icon4","RAIN_SNOW_SHOWERS_NIGHT"),u("icon5","WIND"),u("icon6","HAIL");var F=e("section","menu-hide");n.appendChild(F);var I=e("div","menu-top");F.appendChild(I);var z=e("div","search-actions");I.appendChild(z);var D=e("input","search-bar");D.setAttribute("placeholder","Enter a City...");var G=e("button","save-location","Save this Location");G.setAttribute("type","button");var W=e("button","current-location","Go to Current Location");W.setAttribute("type","button"),z.appendChild(D),z.appendChild(G),z.appendChild(W);var H=e("section","saved-locations");I.appendChild(H);var Y=e("h4","saved-locations-heading","Saved Locations");H.appendChild(Y);var B=e("ul","saved-locations-list");H.appendChild(B);var U=c("London, GB"),Z=c("Buenos Aires, AR"),J=c("Lagos, NG");B.appendChild(U),B.appendChild(Z),B.appendChild(J);var $=e("div","menu-bottom");F.appendChild($);var Q=e("span","celsius","°C");$.appendChild(Q);var X=e("div","temperature-toggle-wrap");X.setAttribute("data-toggle","toggle-unit"),X.setAttribute("data-unit","celsius"),$.appendChild(X);var K=e("button","temperature-toggle");K.setAttribute("data-toggle","toggle-unit"),K.setAttribute("data-unit","celsius"),X.appendChild(K);var V=e("span","fahrenheit","°F");$.appendChild(V)},weatherContent:function(e,n,t,o,a,i,c,s,d,l,p,h,f,g,m,v){var b,y;e.textContent="".concat(h,", ").concat(g.country),t.textContent="".concat(Math.round(p.temp),"° C"),t.setAttribute("data-temp",Math.round(p.temp)),o.textContent="".concat(Math.round(p.feels_like),"° C"),o.setAttribute("data-temp",Math.round(p.feels_like)),a.textContent="".concat(Math.round(p.temp_min),"° C"),a.setAttribute("data-temp",Math.round(p.temp_min)),i.textContent="".concat(Math.round(p.temp_max),"° C"),i.setAttribute("data-temp",Math.round(p.temp_max)),c.textContent="".concat(m[0].description),s.textContent="".concat(p.pressure," HPA"),d.textContent="".concat(p.humidity,"%"),l.textContent="".concat(Math.round(v.speed)," M/S"),n.textContent="UTC ".concat(Math.round(f/3600)),u("icon1",r[m[0].main||m[0].icon]),b=m[0].main,(y=document.querySelector(".current-weather").classList).length>1&&y.remove(y.item(1)),"Rain"===b||"Drizzle"===b||"Thunderstorm"===b?y.add("rainy"):"Snow"===b?y.add("snowy"):"Clouds"===b?y.add("cloudy"):"Clear"===b?y.add("clear"):y.add("foggy")},toggleClass:function(e,n){e.classList.toggle(n)}}}();function c(e,n,t,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){c(a,r,o,i,u,"next",e)}function u(e){c(a,r,o,i,u,"throw",e)}i(void 0)}))}}var s,d,l,p,h,f,g=(s=function(e){var n=document.querySelector(".notification");"g is undefined"===e.message?n.textContent="Please enter a valid city name!":n.textContent=e.message,i.toggleClass(n,"show-notification"),setTimeout((function(){return n.textContent="",i.toggleClass(n,"show-notification"),n}),5e3)},d=function(){var e=u(regeneratorRuntime.mark((function e(n,t){var r,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="https://api.openweathermap.org/data/2.5/weather?lat=".concat(n,"&lon=").concat(t,"&appid=").concat("d2fc07bb9492936033b3e38d100533eb","&units=metric"),e.next=5,fetch(r);case 5:return o=e.sent,e.next=8,o.json();case 8:return a=e.sent,e.abrupt("return",a);case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",s(e.t0));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=u(regeneratorRuntime.mark((function e(n){var t,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="https://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat("d2fc07bb9492936033b3e38d100533eb","&units=metric"),e.next=5,fetch(t);case 5:return r=e.sent,e.next=8,r.json();case 8:return o=e.sent,e.abrupt("return",o);case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",s(e.t0));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n){return e.apply(this,arguments)}}(),p=function(e){var n=e.main,t=e.name,r=e.timezone,o=e.sys,a=e.weather,c=e.wind,u=document.querySelector(".location"),s=document.querySelector(".time"),d=document.querySelector(".current-weather-temp"),l=document.querySelector(".feel-temp"),p=document.querySelector(".temp-min"),h=document.querySelector(".temp-max"),f=document.querySelector(".description"),g=document.querySelector(".pressure"),m=document.querySelector(".humidity"),v=document.querySelector(".wind");i.weatherContent(u,s,d,l,p,h,f,g,m,v,n,t,r,o,a,c)},h=function(){var e=u(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("London");case 3:n=e.sent,p(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=u(regeneratorRuntime.mark((function e(n){var t,r,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.coords,r=t.latitude,o=t.longitude,e.next=4,d(r,o);case 4:a=e.sent,p(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),{userLocation:function(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(f,s)},getWeatherByCityName:l,renderWeatherData:p,errorHandler:s,defaultWeather:h,toggleTemperatureUnit:function(e){var n=document.querySelector(".temperature-toggle-wrap"),t=document.querySelector(".temperature-toggle"),r=document.querySelectorAll("[data-temperature]");"celsius"===e?Array.from(r).forEach((function(e){var r=1.8*Number(e.textContent.match(/[0-9]/g).join(""))+32;e.textContent="".concat(Math.round(r),"° F"),n.setAttribute("data-unit","fahrenheit"),t.setAttribute("data-unit","fahrenheit")})):Array.from(r).forEach((function(e){e.textContent="".concat(e.dataset.temp,"° C"),n.setAttribute("data-unit","celsius"),t.setAttribute("data-unit","celsius")})),i.toggleClass(n,"temp-toggle-one"),i.toggleClass(t,"temp-toggle-two")},toggleMenu:function(){var e=document.querySelector(".toggle-open"),n=document.querySelector(".toggle-close"),t=document.querySelector(".menu-hide");i.toggleClass(e,"toggle-hide"),i.toggleClass(n,"toggle-hide"),i.toggleClass(t,"menu-show")},clearSearchInput:function(e){e.value="",e.blur()}});function m(e,n,t,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(r,o)}i.weatherPage();var v=document.querySelector(".search-bar"),b=document.querySelector(".temperature-toggle-wrap"),y=document.querySelector(".menu-toggle");window.addEventListener("load",(function(){g.defaultWeather().catch(g.errorHandler),g.userLocation()})),v.addEventListener("keypress",function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==n.keyCode){e.next=12;break}return e.prev=1,e.next=4,g.getWeatherByCityName(v.value);case 4:t=e.sent,g.renderWeatherData(t),g.clearSearchInput(v),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),g.errorHandler(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})),function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function i(e){m(a,r,o,i,c,"next",e)}function c(e){m(a,r,o,i,c,"throw",e)}i(void 0)}))});return function(e){return n.apply(this,arguments)}}()),b.addEventListener("click",(function(e){g.toggleTemperatureUnit(e.target.dataset.unit)})),y.addEventListener("click",g.toggleMenu)})()})();