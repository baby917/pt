webpackJsonp([7],{115:function(t,o,s){"use strict";function n(t){s(210)}Object.defineProperty(o,"__esModule",{value:!0});var e=s(212),i=s(213),c=s(1),l=n,a=c(e.a,i.a,!1,l,null,null);o.default=a.exports},126:function(t,o,s){t.exports=s.p+"img/icon_yizhu@2x.png?5517edf19dc71a40f55323ec201dfcfe"},127:function(t,o,s){"use strict";var n=s(9),e=s(4),i=s.n(e);o.a=function(t,o){n.a.state.prefrom?n.a.state.phone&&n.a.state.token?t():location.href="#/login/"+encodeURIComponent(o):n.a.state.phone&&n.a.state.token?t():"other"!=i()()||n.a.state.phone&&n.a.state.token?n.a.state.openid&&"wechat"==i()()&&t():location.href="#/login/"+encodeURIComponent(o)}},210:function(t,o,s){var n=s(211);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);s(3)("2818c1fa",n,!0)},211:function(t,o,s){o=t.exports=s(2)(void 0),o.push([t.i,"#myconsult{font-size:12px;color:#999;width:100%}#myconsult .consult-box{padding:.16rem 0 0 .12rem}#myconsult .consult-box .consult-list{margin-bottom:.16rem}#myconsult .consult-box .consult-list .consult-item{height:auto;display:-webkit-box;display:-ms-flexbox;display:flex}#myconsult .consult-box .consult-list .consult-item .icon-pic{margin-right:.12rem}#myconsult .consult-box .consult-list .consult-item .icon-pic img{width:.48rem;height:.48rem;border-radius:100px}#myconsult .consult-box .consult-list .consult-item .consult-info{width:2.86rem;border-bottom:1px solid #f2f2f2;height:.62rem}#myconsult .consult-box .consult-list .consult-item .consult-info .title{font-size:16px;color:#333;width:100%;height:.22rem;margin-bottom:.06rem}#myconsult .consult-box .consult-list .consult-item .consult-info .title .left{float:left}#myconsult .consult-box .consult-list .consult-item .consult-info .title .date{font-size:12px;color:#999;float:right;line-height:.22rem}#myconsult .consult-box .consult-list .consult-item .consult-info .content{font-size:12px;color:#999;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#myconsult .consult-box .consult-list .consult-item .consult-info .msg{float:left;width:calc(100% - .8rem);word-wrap:normal;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#myconsult .consult-box .consult-list .consult-item .consult-info .tuwen{float:right;width:.6rem;height:.18rem;background:#6bd2a1;border-radius:2px;color:#fff;text-align:center}",""])},212:function(t,o,s){"use strict";var n=s(8),e=s(21),i=s(4),c=(s.n(i),s(127)),l=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t};o.a={data:function(){return{consList:[],defaultImg:'this.src="'+s(126)+'"',BASEIMGURL:n.a.BASEIMGURL}},computed:l({},Object(e.b)({token:function(t){return t.token}})),watch:{token:function(){if(this.$store.state.phone&&this.$store.state.token)this.getlist();else{var t=this.$route.name;location.href="#/login/"+encodeURIComponent(t)}}},created:function(){var t=this.$route.name;Object(c.a)(this.getlist,t)},methods:{getlist:function(){var t=this;n.a.getmyconsult({}).then(function(o){if("000"===o.code)t.consList=JSON.parse(o.data);else if("10007"===o.code){var s=t.$route.name;location.href="#/login/"+encodeURIComponent(s)}})}}}},213:function(t,o,s){"use strict";var n=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{attrs:{id:"myconsult"}},[s("div",{staticClass:"consult-box"},[t._m(0),t._v(" "),t._l(t.consList,function(o){return"freeservice"==o.catalogcode?s("div",{staticClass:"consult-list"},[s("a",{staticClass:"consult-item",attrs:{href:"#/chat/"+o.servicedetailid+"/1"}},[s("div",{staticClass:"icon-pic"},[s("img",{attrs:{src:t.BASEIMGURL+o.doctorphoto,alt:"",onerror:t.defaultImg}})]),t._v(" "),s("div",{staticClass:"consult-info"},[s("div",{staticClass:"title"},[s("span",{staticClass:"left"},[t._v(t._s(o.doctorname))]),t._v(" "),s("span",{staticClass:"date"},[t._v(t._s(o.date))])]),t._v(" "),s("div",{staticClass:"clear"}),t._v(" "),s("p",{staticClass:"msg"},[t._v(t._s(o.msg))]),s("a",{staticClass:"tuwen"},[t._v("免费义诊")])])])]):t._e()})],2)])},e=[function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"consult-list"},[n("a",{staticClass:"consult-item",attrs:{href:"#/historyconsult"}},[n("div",{staticClass:"icon-pic"},[n("img",{attrs:{src:s(214),alt:""}})]),t._v(" "),n("div",{staticClass:"consult-info"},[n("div",{staticClass:"title"},[n("span",{staticClass:"left"},[t._v("历史咨询")])]),t._v(" "),n("div",{staticClass:"clear"}),t._v(" "),n("p",{staticClass:"content"},[t._v("点击查看历史咨询")])])])])}],i={render:n,staticRenderFns:e};o.a=i},214:function(t,o,s){t.exports=s.p+"img/icon_lizhizixun.png?7f85390864a99a0615381338b74087ec"}});
//# sourceMappingURL=7.js.map?2bf7895a97179171110d