webpackJsonp([11],{111:function(t,e,o){"use strict";function r(t){o(192)}Object.defineProperty(e,"__esModule",{value:!0});var s=o(194),i=o(195),n=o(1),a=r,l=n(s.a,i.a,!1,a,null,null);e.default=l.exports},146:function(t,e,o){t.exports=o.p+"img/portrait@2x.png?78b6703403712c5f96f041d488e3f319"},192:function(t,e,o){var r=o(193);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);o(3)("bc0df284",r,!0)},193:function(t,e,o){e=t.exports=o(2)(void 0),e.push([t.i,"#orderList{font-size:12px;width:100%;overflow:hidden;min-height:100%;background-color:#f2f2f2}#orderList .list{width:3.55rem;height:1.4rem;margin:.1rem auto;background:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.15);border-radius:4px;overflow:hidden;position:relative}#orderList .list .list-top{margin-top:.12rem;padding:0 .08rem;overflow:hidden;margin-bottom:.11rem}#orderList .list .list-top .type{width:.6rem;height:.18rem;float:left;border-radius:2px;background-color:#6bd2a1;font-size:.12rem;color:#fff;text-align:center;line-height:.18rem;margin-right:.1rem}#orderList .list .list-top .user{font-size:.14rem;float:left;color:#666}#orderList .list .list-top .status{float:right;font-size:.14rem;color:#666}#orderList .list .doc-info{height:.48rem;padding-left:.12rem;overflow:hidden}#orderList .list .doc-info img{float:left;width:.48rem;height:.48rem;border-radius:.48rem;margin-right:.1rem}#orderList .list .doc-info .info-text{float:left}#orderList .list .doc-info .info-text p:first-child{font-size:.16rem;color:#333;margin-bottom:.04rem}#orderList .list .doc-info .info-text p:first-child span{color:#666}#orderList .list .doc-info .info-text p:last-child{font-size:.12rem;color:#666}#orderList .list .list-foot{position:absolute;height:.41rem;bottom:0;left:0;width:100%;overflow:hidden;border-top:1px solid #e9e9e9;line-height:.41rem}#orderList .list .list-foot .price{float:left;margin-left:.1rem;font-size:.12rem;color:#333}#orderList .list .list-foot .price span{font-size:.16rem;color:#151515}#orderList .list .list-foot .buy-again{float:right;width:.72rem;height:.28rem;border:1px solid #00a560;margin-right:.12rem;margin-top:.07rem;border-radius:2px;font-size:.13rem;color:#00a560;text-align:center;line-height:.28rem}#orderList .no-more{width:100%;text-align:center;font-size:.14rem;color:#333;padding:.1rem 0}",""])},194:function(t,e,o){"use strict";(function(t){var r=o(20),s=o(21),i=o(6),n=o.n(i),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t};e.a={data:function(){return{orderlist:[],startpageno:0,isScroll:!0,noMore:!1}},computed:a({},Object(s.b)({token:function(t){return t.token}})),watch:{token:function(){if(this.$store.state.phone&&this.$store.state.token)this.getorderlist();else{var t=this.$route.name;location.href="#/login/"+encodeURIComponent(t)}}},created:function(){var t=this;if(this.$store.state.prefrom)if(this.$store.state.phone&&this.$store.state.token)t.getorderlist();else{var e=t.$route.name;location.href="#/login/"+encodeURIComponent(e)}else if(this.$store.state.phone&&this.$store.state.token)t.getorderlist();else if(!("other"!=n()()||this.$store.state.phone&&this.$store.state.token)){var e=t.$route.name;location.href="#/login/"+encodeURIComponent(e)}},mounted:function(){var e=this;t(window).scroll(function(){if(e.isScroll){var o=t(this).scrollTop(),r=t(document).height();o+t(this).height()>=r&&(e.startpageno++,e.getorderlist())}})},methods:{getorderlist:function(){var t=this;this.isScroll=!1,r.a.getorderlist({startpageno:this.startpageno}).then(function(e){if("000"===e.code)t.isScroll=!0,t.orderlist=t.orderlist.concat(JSON.parse(e.data)),JSON.parse(e.data)<10&&(t.isScroll=!1,t.noMore=!0);else if("10007"===e.code){var o=t.$route.name;location.href="#/login/"+encodeURIComponent(o)}})}}}}).call(e,o(8))},195:function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"orderList"}},[t._l(t.orderlist,function(e){return"freeservice"==e.catalogcode?r("div",{staticClass:"list"},[r("div",{staticClass:"list-top"},[r("span",{staticClass:"type"},[t._v(t._s(e.catalogname))]),r("span",{staticClass:"user"},[t._v(t._s(e.patientname))]),t._v(" "),0==e.orderstatus?r("span",{staticClass:"status"},[t._v("未支付")]):t._e(),t._v(" "),1==e.orderstatus?r("span",{staticClass:"status"},[t._v("进行中")]):t._e(),t._v(" "),4==e.orderstatus||6==e.orderstatus?r("span",{staticClass:"status"},[t._v("已完成")]):t._e(),t._v(" "),8==e.orderstatus?r("span",{staticClass:"status"},[t._v("退款")]):t._e(),t._v(" "),32==e.orderstatus?r("span",{staticClass:"status"},[t._v("待支付")]):t._e()]),t._v(" "),r("div",{staticClass:"doc-info"},[r("img",{attrs:{src:o(146)}}),t._v(" "),r("div",{staticClass:"info-text"},[r("p",[t._v(t._s(e.doctorname)+" "),r("span",[t._v(t._s(e.title))])]),t._v(" "),r("p",[t._v(t._s(e.hospital)+" "+t._s(e.dept))])])]),t._v(" "),r("div",{staticClass:"list-foot"},[r("span",{staticClass:"price"},[t._v("订单金额："),r("span",[t._v(t._s(e.price))])]),t._v(" "),r("a",{staticClass:"buy-again",attrs:{href:"#/clinic/"+e.doctorid}},[t._v("再次购买")])])]):t._e()}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.noMore,expression:"noMore"}],staticClass:"no-more"},[t._v("暂无更多数据")])],2)},s=[],i={render:r,staticRenderFns:s};e.a=i}});
//# sourceMappingURL=11.js.map?22b6bfdd88c2b6c8b8b5