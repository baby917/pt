webpackJsonp([9],{109:function(e,t,n){"use strict";function o(e){n(178)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(180),s=n(181),r=n(1),d=o,a=r(i.a,s.a,!1,d,null,null);t.default=a.exports},144:function(e,t,n){"use strict";function o(e,t){return(0,s.default)(e),t in r&&r[t].test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var i=n(145),s=function(e){return e&&e.__esModule?e:{default:e}}(i),r={"ar-DZ":/^(\+?213|0)(5|6|7)\d{8}$/,"ar-SY":/^(!?(\+?963)|0)?9\d{8}$/,"ar-SA":/^(!?(\+?966)|0)?5\d{8}$/,"en-US":/^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,"cs-CZ":/^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"de-DE":/^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,"da-DK":/^(\+?45)?(\d{8})$/,"el-GR":/^(\+?30)?(69\d{8})$/,"en-AU":/^(\+?61|0)4\d{8}$/,"en-GB":/^(\+?44|0)7\d{9}$/,"en-HK":/^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,"en-IN":/^(\+?91|0)?[789]\d{9}$/,"en-NG":/^(\+?234|0)?[789]\d{9}$/,"en-NZ":/^(\+?64|0)2\d{7,9}$/,"en-ZA":/^(\+?27|0)\d{9}$/,"en-ZM":/^(\+?26)?09[567]\d{7}$/,"es-ES":/^(\+?34)?(6\d{1}|7[1234])\d{7}$/,"fi-FI":/^(\+?358|0)\s?(4(0|1|2|4|5)?|50)\s?(\d\s?){4,8}\d$/,"fr-FR":/^(\+?33|0)[67]\d{8}$/,"he-IL":/^(\+972|0)([23489]|5[0248]|77)[1-9]\d{6}/,"hu-HU":/^(\+?36)(20|30|70)\d{7}$/,"it-IT":/^(\+?39)?\s?3\d{2} ?\d{6,7}$/,"ja-JP":/^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/,"ms-MY":/^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,"nb-NO":/^(\+?47)?[49]\d{7}$/,"nl-BE":/^(\+?32|0)4?\d{8}$/,"nn-NO":/^(\+?47)?[49]\d{7}$/,"pl-PL":/^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,"pt-BR":/^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,"pt-PT":/^(\+?351)?9[1236]\d{7}$/,"ro-RO":/^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,"en-PK":/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,"ru-RU":/^(\+?7|8)?9\d{9}$/,"sr-RS":/^(\+3816|06)[- \d]{5,9}$/,"tr-TR":/^(\+?90|0)?5\d{9}$/,"vi-VN":/^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,"zh-CN":/^(\+?0?86\-?)?1[345789]\d{9}$/,"zh-TW":/^(\+?886\-?|0)?9\d{8}$/};r["en-CA"]=r["en-US"],r["fr-BE"]=r["nl-BE"],r["zh-HK"]=r["en-HK"],e.exports=t.default},145:function(e,t,n){"use strict";function o(e){if("string"!=typeof e)throw new TypeError("This library (validator.js) validates strings only")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o,e.exports=t.default},178:function(e,t,n){var o=n(179);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(3)("3711d6e2",o,!0)},179:function(e,t,n){t=e.exports=n(2)(void 0),t.push([e.i,"#login{width:100%;overflow:hidden;font-size:12px}#login .title{font-size:.26rem;color:#333;margin-top:.4rem;margin-left:.32rem;margin-bottom:.5rem}#login .box{width:100%;text-align:center}#login .box .phone{width:3.11rem;padding-bottom:.08rem;font-size:.16rem;color:#00a560;border:none;border-bottom:.02rem solid #dfdfdf;margin-bottom:.08rem}#login .tips{font-size:.12rem;color:#f5a623;margin-bottom:.15rem;text-align:left;margin-left:.3rem;opacity:0}#login .tips.show{opacity:1}#login .next{width:3.11rem;height:.44rem;border-radius:4px;background-color:#dfdfdf;font-size:.18rem;color:#fff}#login .phone.active{border-color:#00a560}#login .next.active{background-color:#00a560}",""])},180:function(e,t,n){"use strict";var o=n(144),i=n.n(o);t.a={data:function(){return{phoneactive:!1,canclick:!1,cantips:!1,phone:""}},created:function(){},computed:{isphone:function(){return i()(this.phone,"zh-CN")}},methods:{change:function(){var e=this.phone.length;this.phoneactive=e>0,11==e&&this.isphone?(this.canclick=!0,this.cantips=!1):11!=e||this.isphone?(this.canclick=!1,this.cantips=!1):(this.canclick=!1,this.cantips=!0)},next:function(){this.isphone&&this.$router.push("/register/"+this.phone+"/"+encodeURIComponent(this.$route.params.routername))}}}},181:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("div",{staticClass:"title"},[e._v("\n    欢迎使用\n  ")]),e._v(" "),n("div",{staticClass:"box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"phone",class:e.phoneactive?"active":"",attrs:{type:"phone",placeholder:"请输入手机号",maxlength:"11"},domProps:{value:e.phone},on:{input:[function(t){t.target.composing||(e.phone=t.target.value)},e.change]}}),e._v(" "),n("p",{staticClass:"tips",class:e.cantips?"show":""},[e._v("手机号码输入错误，请重新输入")]),e._v(" "),n("button",{staticClass:"next",class:e.canclick?"active":"",on:{click:e.next}},[e._v("下一步")])])])},i=[],s={render:o,staticRenderFns:i};t.a=s}});
//# sourceMappingURL=9.js.map?05bc4e066552bbcddec2