(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{8069:function(t,e,n){"use strict";n.r(e);var r=n("da67"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"9dce":function(t,e,n){"use strict";var r=n("fcd2"),i=n.n(r);i.a},d537:function(t,e,n){"use strict";(function(t){n("6cdc");r(n("66fd"));var e=r(n("f75a"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},da67:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("4795")),i=n("dde5");function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return l(t)||s(t,e)||c(t,e)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t,e){if(t){if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done);a=!0)if(o.push(r.value),e&&o.length===e)break}catch(c){u=!0,i=c}finally{try{a||null==n["return"]||n["return"]()}finally{if(u)throw i}}return o}}function l(t){if(Array.isArray(t))return t}function d(t,e,n,r,i,o,a){try{var u=t[o](a),c=u.value}catch(f){return void n(f)}u.done?e(c):Promise.resolve(c).then(r,i)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){d(o,r,i,a,u,"next",t)}function u(t){d(o,r,i,a,u,"throw",t)}a(void 0)}))}}var v=[{title:"新品推荐",icon:"../../static/images/icon/newProd.png"},{title:"限时特惠",icon:"../../static/images/icon/timePrice.png"},{title:"每日疯抢",icon:"../../static/images/icon/neweveryday.png"}],g={data:function(){return{tags:v,tagList:[],noticeList:[],swiperImgs:[],prodListDaily:[],prodListHot:[],prodListMore:[]}},created:function(){var t=this;return p(r.default.mark((function e(){var n,o;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([(0,i.getTagList)(),(0,i.getNoticeList)(),(0,i.getSwiperImgs)(),(0,i.getProdList)(1),(0,i.getProdList)(2),(0,i.getProdList)(3)]);case 2:n=e.sent,o=a(n,6),t.tagList=o[0],t.noticeList=o[1],t.swiperImgs=o[2],t.prodListDaily=o[3],t.prodListHot=o[4],t.prodListMore=o[5];case 10:case"end":return e.stop()}}),e)})))()},onShareAppMessage:function(){return{}}};e.default=g},f6f1:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},f75a:function(t,e,n){"use strict";n.r(e);var r=n("f6f1"),i=n("8069");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("9dce");var a,u=n("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"2bd678f9",null,!1,r["a"],a);e["default"]=c.exports},fcd2:function(t,e,n){}},[["d537","common/runtime","common/vendor"]]]);