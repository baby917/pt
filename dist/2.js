webpackJsonp([2],{117:function(t,e,i){"use strict";function o(t){i(220)}Object.defineProperty(e,"__esModule",{value:!0});var n=i(223),s=i(235),a=i(1),r=o,c=a(n.a,s.a,!1,r,null,null);e.default=c.exports},126:function(t,e,i){t.exports=i.p+"img/icon_yizhu@2x.png?5517edf19dc71a40f55323ec201dfcfe"},127:function(t,e,i){"use strict";var o=i(9),n=i(4),s=i.n(n);e.a=function(t,e){o.a.state.prefrom?o.a.state.phone&&o.a.state.token?t():location.href="#/login/"+encodeURIComponent(e):o.a.state.phone&&o.a.state.token?t():"other"!=s()()||o.a.state.phone&&o.a.state.token?o.a.state.openid&&"wechat"==s()()&&t():location.href="#/login/"+encodeURIComponent(e)}},128:function(t,e){var i=!1;try{var o=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("test",null,o)}catch(t){}t.exports=i},135:function(t,e,i){"use strict";function o(t){i(136)}var n=i(138),s=i(140),a=i(1),r=o,c=a(n.a,s.a,!1,r,null,null);e.a=c.exports},136:function(t,e,i){var o=i(137);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(3)("30786df1",o,!0)},137:function(t,e,i){e=t.exports=i(2)(void 0),e.push([t.i,".vux-popup-dialog{position:fixed;left:0;bottom:0;width:100%;background:#eee;z-index:501;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.3s;max-height:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch}.vux-popup-dialog.vux-popup-left{width:auto;height:100%;top:0;right:auto;bottom:auto;left:0}.vux-popup-dialog.vux-popup-right{width:auto;height:100%;top:0;right:0;bottom:auto;left:auto}.vux-popup-dialog.vux-popup-top{width:100%;top:0;right:auto;bottom:auto;left:0}.vux-popup-mask{display:block;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);opacity:0;tap-highlight-color:transparent;z-index:-1;transition:opacity .4s}.vux-popup-mask.vux-popup-show{opacity:1}.vux-popup-animate-bottom-enter,.vux-popup-animate-bottom-leave-active{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.vux-popup-animate-left-enter,.vux-popup-animate-left-leave-active{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.vux-popup-animate-right-enter,.vux-popup-animate-right-leave-active{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.vux-popup-animate-top-enter,.vux-popup-animate-top-leave-active{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.vux-modal-open{overflow:hidden;position:fixed;width:100%}",""])},138:function(t,e,i){"use strict";var o=i(139),n=i(25);e.a={name:"popup",props:{value:Boolean,height:{type:String,default:"auto"},width:{type:String,default:"auto"},showMask:{type:Boolean,default:!0},isTransparent:Boolean,hideOnBlur:{type:Boolean,default:!0},position:{type:String,default:"bottom"},maxHeight:String,popupStyle:Object,hideOnDeactivated:{type:Boolean,default:!0}},created:function(){this.$vux&&this.$vux.config&&"VIEW_BOX"===this.$vux.config.$layout&&(this.layout="VIEW_BOX")},mounted:function(){var t=this;this.$overflowScrollingList=document.querySelectorAll(".vux-fix-safari-overflow-scrolling"),this.$nextTick(function(){var e=t;t.popup=new o.a({showMask:e.showMask,container:e.$el,hideOnBlur:e.hideOnBlur,onOpen:function(){e.fixSafariOverflowScrolling("auto"),e.show=!0},onClose:function(){e.show=!1,window.__$vuxPopups&&Object.keys(window.__$vuxPopups).length>1||document.querySelector(".vux-popup-dialog.vux-popup-mask-disabled")||setTimeout(function(){e.fixSafariOverflowScrolling("touch")},300)}}),t.value&&t.popup.show(),t.initialShow=!1})},deactivated:function(){this.hideOnDeactivated&&(this.show=!1),this.removeModalClassName()},methods:{fixSafariOverflowScrolling:function(t){if(this.$overflowScrollingList.length)for(var e=0;e<this.$overflowScrollingList.length;e++)this.$overflowScrollingList[e].style.webkitOverflowScrolling=t},removeModalClassName:function(){"VIEW_BOX"===this.layout&&n.a.removeClass(document.body,"vux-modal-open")}},data:function(){return{layout:"",initialShow:!0,hasFirstShow:!1,show:this.value}},computed:{styles:function(){var t={};if(this.position&&"bottom"!==this.position&&"top"!==this.position?t.width=this.width:t.height=this.height,this.maxHeight&&(t["max-height"]=this.maxHeight),this.isTransparent&&(t.background="transparent"),this.popupStyle)for(var e in this.popupStyle)t[e]=this.popupStyle[e];return t}},watch:{value:function(t){this.show=t},show:function(t){var e=this;this.$emit("input",t),t?(this.popup&&this.popup.show(),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),"VIEW_BOX"===this.layout&&n.a.addClass(document.body,"vux-modal-open"),this.hasFirstShow||(this.$emit("on-first-show"),this.hasFirstShow=!0)):(this.$emit("on-hide"),this.show=!1,this.popup.hide(!1),setTimeout(function(){document.querySelector(".vux-popup-dialog.vux-popup-show")||e.fixSafariOverflowScrolling("touch"),e.removeModalClassName()},200))}},beforeDestroy:function(){this.popup&&this.popup.destroy(),this.fixSafariOverflowScrolling("touch"),this.removeModalClassName()}}},139:function(t,e,i){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=i(128),s="object"===("undefined"==typeof window?"undefined":o(window));s&&(window.__$vuxPopups=window.__$vuxPopups||{});var a=function(t){var e=this;if(s){this.uuid=Math.random().toString(36).substring(3,8),this.params={},"[object Object]"===Object.prototype.toString.call(t)&&(this.params={hideOnBlur:t.hideOnBlur,onOpen:t.onOpen||function(){},onClose:t.onClose||function(){},showMask:t.showMask}),!!document.querySelectorAll(".vux-popup-mask").length<=0&&(this.divMask=document.createElement("a"),this.divMask.className="vux-popup-mask",this.divMask.dataset.uuid="",this.divMask.href="javascript:void(0)",document.body.appendChild(this.divMask));var i=void 0;i=t.container?t.container:document.createElement("div"),i.className+=" vux-popup-dialog vux-popup-dialog-"+this.uuid,this.params.hideOnBlur||(i.className+=" vux-popup-mask-disabled"),this.div=i,t.container||document.body.appendChild(i),this.container=document.querySelector(".vux-popup-dialog-"+this.uuid),this.mask=document.querySelector(".vux-popup-mask"),this.mask.dataset.uuid+=","+this.uuid,this._bindEvents(),t=null,this.containerHandler=function(){e.mask&&!/show/.test(e.mask.className)&&setTimeout(function(){!/show/.test(e.mask.className)&&(e.mask.style.zIndex=-1)},200)},this.container&&this.container.addEventListener("webkitTransitionEnd",this.containerHandler),this.container&&this.container.addEventListener("transitionend",this.containerHandler)}};a.prototype.onClickMask=function(){this.params.hideOnBlur&&this.params.onClose()},a.prototype._bindEvents=function(){this.params.hideOnBlur&&(this.mask.addEventListener("click",this.onClickMask.bind(this),!1),this.mask.addEventListener("touchmove",function(t){return t.preventDefault()},!!n&&{passive:!1}))},a.prototype.show=function(){this.params.showMask&&(this.mask.classList.add("vux-popup-show"),this.mask.style.zIndex=500),this.container.classList.add("vux-popup-show"),this.params.onOpen&&this.params.onOpen(this),s&&(window.__$vuxPopups[this.uuid]=1)},a.prototype.hide=function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.container.classList.remove("vux-popup-show"),document.querySelector(".vux-popup-dialog.vux-popup-show")||(this.mask.classList.remove("vux-popup-show"),setTimeout(function(){t.mask&&!/show/.test(t.mask.className)&&(t.mask.style.zIndex=-1)},400)),!1===e&&this.params.onClose&&this.params.hideOnBlur&&this.params.onClose(this),this.isShow=!1,s&&delete window.__$vuxPopups[this.uuid]},a.prototype.destroy=function(){this.mask.dataset.uuid=this.mask.dataset.uuid.replace(new RegExp(","+this.uuid,"g"),""),this.mask.dataset.uuid?this.hide():(this.mask.removeEventListener("click",this.onClickMask.bind(this),!1),this.mask&&this.mask.parentNode&&this.mask.parentNode.removeChild(this.mask)),this.container.removeEventListener("webkitTransitionEnd",this.containerHandler),this.container.removeEventListener("transitionend",this.containerHandler),s&&delete window.__$vuxPopups[this.uuid]},e.a=a},140:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"vux-popup-animate-"+t.position}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show&&!t.initialShow,expression:"show && !initialShow"}],staticClass:"vux-popup-dialog",class:["vux-popup-"+t.position,t.show?"vux-popup-show":""],style:t.styles},[t._t("default")],2)])},n=[],s={render:o,staticRenderFns:n};e.a=s},141:function(t,e,i){function o(t){return void 0===t?document.body:"string"==typeof t&&0===t.indexOf("?")?document.body:("string"==typeof t&&t.indexOf("?")>0&&(t=t.split("?")[0]),"body"===t||!0===t?document.body:t instanceof window.Node?t:document.querySelector(t))}function n(t){if(!t)return!1;if("string"==typeof t&&t.indexOf("?")>0)try{return JSON.parse(t.split("?")[1]).autoUpdate||!1}catch(t){return!1}return!1}var s=i(26),a={inserted:function(t,e,i){var n=e.value;t.className=t.className?t.className+" v-transfer-dom":"v-transfer-dom";var s=t.parentNode,a=document.createComment(""),r=!1;!1!==n&&(s.replaceChild(a,t),o(n).appendChild(t),r=!0),t.__transferDomData||(t.__transferDomData={parentNode:s,home:a,target:o(n),hasMovedOut:r})},componentUpdated:function(t,e){var i=e.value;if(n(i)){var a=t.__transferDomData,r=a.parentNode,c=a.home,l=a.hasMovedOut;!l&&i?(r.replaceChild(c,t),o(i).appendChild(t),t.__transferDomData=s({},t.__transferDomData,{hasMovedOut:!0,target:o(i)})):l&&!1===i?(r.replaceChild(t,c),t.__transferDomData=s({},t.__transferDomData,{hasMovedOut:!1,target:o(i)})):i&&o(i).appendChild(t)}},unbind:function(t,e){t.className=t.className.replace("v-transfer-dom",""),!0===t.__transferDomData.hasMovedOut&&t.__transferDomData.parentNode&&t.__transferDomData.parentNode.appendChild(t),t.__transferDomData=null}};t.exports=a},154:function(t,e,i){t.exports=i.p+"img/nonepatient.png?3f463354d0c3d4ee67ef455ea562a559"},178:function(t,e,i){t.exports=i.p+"img/hlw_gou@2x.png?426dcdcf472ce771dc223b6b54b51818"},220:function(t,e,i){var o=i(221);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(3)("24fcf314",o,!0)},221:function(t,e,i){e=t.exports=i(2)(void 0),e.push([t.i,"#clinic{font-size:.14rem}#clinic .top{top:.4rem}#clinic .content{width:100%;position:absolute;height:calc(100% - .5rem);overflow:auto}#clinic .doctor-box{height:1.48rem;background:url("+i(222)+') no-repeat 50%;background-size:cover;padding-top:.15rem}#clinic .doctor-info-box{display:-webkit-box;display:-ms-flexbox;display:flex;height:.68rem;width:100%}#clinic .doctor-info-box img{margin-left:.1rem;width:.66rem;height:.66rem;border-radius:50%;border:.02rem solid hsla(0,0%,100%,.5)}#clinic .doctor-info-box .doctor-info{-webkit-box-flex:1;-ms-flex:1;flex:1;color:#fff;padding-top:.05rem;margin-left:.1rem}#clinic .doctor-info-box .doc-name{font-size:.18rem}#clinic .doctor-info-box .doctor-info p:nth-child(2){font-size:.12rem}#clinic .doctor-info p:first-child{margin-bottom:.04rem}#clinic .doctor-info p:last-child{margin-top:.06rem}#clinic .doctor-info-box .tag{font-size:.1rem;background:#fff;color:#00a560;height:.16rem;display:inline-block;border-radius:.24rem;padding:0 .08rem;line-height:.16rem;margin-right:.1rem}#clinic .doc-value{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;height:.48rem;margin-top:.3rem}#clinic .doc-value .item-value{-webkit-box-flex:1;-ms-flex:1;flex:1;text-align:center}#clinic .doc-value .item-value p{font-size:.18rem;line-height:.18rem}#clinic .doc-value .item-value span{font-size:.12rem}#clinic .doc-value .item-value.middle{position:relative}#clinic .doc-value .middle:after,#clinic .doc-value .middle:before{content:"";width:.01rem;height:.25rem;position:absolute;left:0;top:.1rem;background:hsla(0,0%,100%,.3);-webkit-transform:scaleX(.5);transform:scaleX(.5)}#clinic .doc-value .middle:after{content:"";left:auto;right:0}#clinic .consult-type{height:1.25rem;padding:.17rem .12rem;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #e9e9e9}#clinic .consult-type .type-item{width:1.1rem;height:.9rem;margin-right:.1rem;text-align:center;color:#666;position:relative;border:1px solid #eee}#clinic .consult-type .type-item.active{border:1px solid #11cc7d;color:#11cc7d}#clinic .consult-type .type-item.active:before{content:"";position:absolute;left:0;top:0;width:.24rem;height:.22rem;background:url('+i(178)+') no-repeat;background-size:contain}#clinic .consult-type .type-item.active i{position:absolute;right:.28rem;top:.08rem;width:.28rem;height:.18rem}#clinic .consult-type .type-item.active i img{width:.28rem;height:.18rem}#clinic .consult-type .type-item.active p.tuwenprize{text-decoration:line-through;color:#999}#clinic .consult-type .type-item:only-child{border:1px solid #00a560;color:#00a560}#clinic .consult-type .type-item:only-child p{color:#00a560}#clinic .consult-type .type-item:only-child:before{content:"";position:absolute;left:0;top:0;width:.24rem;height:.22rem;background:url('+i(178)+") no-repeat;background-size:contain}#clinic .appointment,#clinic .outpatient{width:.18rem;height:.18rem;padding-top:.18rem}#clinic .type-item p:first-of-type{font-size:.14rem}#clinic .type-item p:last-of-type{font-size:.12rem;color:#999}#clinic .consult-text{text-align:center;line-height:.44rem;font-size:.14rem;color:#666}#clinic .consult-text img{width:.12rem;height:.12rem;vertical-align:middle}#clinic .divide{height:.1rem;width:100%;background-color:#eee}#clinic .dept-info{min-height:.65rem;margin-left:.12rem;overflow:hidden;border-bottom:1px solid #e9e9e9}#clinic h5{color:#999;line-height:.3rem;font-weight:400;padding-top:.05rem}#clinic h5+p{font-size:.14rem;color:#666}#clinic .good-at,#clinic .text-info{margin-left:.12rem;overflow:hidden;border-bottom:1px solid #e9e9e9;padding-bottom:.12rem}#clinic .btn{width:100%;height:.49rem;line-height:.49rem;display:block;text-align:center;font-size:.18rem;background:#00a560;position:fixed;left:0;bottom:0;color:#fff;z-index:100}.patient-box{width:100%;height:100%;overflow:hidden}.patient-box .patient-box-content{width:100%;max-height:5.2rem;background-color:#f6f6f6}.patient-box .patient-box-content p{height:.4rem;line-height:.4rem;text-align:center;font-size:.16rem;color:#666;position:relative;box-shadow:0 1px 1px 0 rgba(0,0,0,.1);background-color:#fff}.patient-box .patient-box-content p a{position:absolute;width:.54rem;height:.24rem;line-height:.24rem;margin-top:.08rem;font-size:.14rem;color:#00a560;border:1px solid #00a560;border-radius:2px;right:.12rem}.patient-box .patient-box-content .patient-list-box{box-sizing:border-box;padding:.1rem .1rem 0;height:4rem}.patient-box .patient-box-content .patient-list-box .list-box{overflow-y:auto;height:3.1rem}.patient-box .patient-box-content .patient-list-box .patient-item{width:100%;height:.86rem;background-color:#fff;margin-bottom:.1rem}.patient-box .patient-box-content .patient-list-box .patient-item .swipe-content{height:.86rem;box-sizing:border-box;padding:.08rem .13rem;box-shadow:0 1px 1px 0 rgba(0,0,0,.1);border-radius:.04rem}.patient-box .patient-box-content .patient-list-box .patient-item .swipe-content .patient-name{font-size:.12rem;color:#999;height:.4rem}.patient-box .patient-box-content .patient-list-box .patient-item .swipe-content .patient-name .name{font-size:.16rem;color:#333;display:block;margin-top:.03rem}.patient-box .patient-box-content .patient-list-box .patient-item .swipe-content .patient-name img{float:right;width:.4rem;height:.15rem;margin-right:.1rem}.patient-box .patient-box-content .patient-list-box .patient-item .swipe-content .paitent-detail p{font-size:.12rem;display:inline-block;color:#999;box-shadow:none}.patient-box .patient-box-content .patient-list-box .patient-item .swipe-content .paitent-detail p:nth-of-type(2){margin:0 .84rem}.patient-box .patient-box-content .patient-list-box .patient-item .swipe-content .paitent-detail p span{color:#666}.patient-box .patient-box-content .patient-list-box .service-promise{position:fixed;height:.74rem;box-sizing:border-box;padding:.12rem;font-size:.12rem;color:#666;bottom:0;box-shadow:0 -2px 2px 0 rgba(0,0,0,.08);width:95%;background-color:#fff}.patient-box .patient-box-content .none-patient{background:#fff;text-align:center;font-size:.14rem;color:#999;height:100%;box-sizing:border-box;padding-top:1rem}.patient-box .patient-box-content .none-patient img{width:1.8rem;height:1.8rem;margin-bottom:.28rem}.vux-swipeout-button-warn{background-color:#f6f6f6!important}.vux-swipeout-button img{width:.48rem;height:.48rem;vertical-align:middle}",""])},222:function(t,e,i){t.exports=i.p+"img/bg_weizhensuo@2x.png?589060a39a228aace9a5679ecb2b5789"},223:function(t,e,i){"use strict";var o=i(224),n=i(227),s=i(230),a=i(135),r=i(28),c=i(141),l=i.n(c),p=i(8),d=(i(127),i(21)),u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t};e.a={directives:{TransferDom:l.a},components:{SwipeoutItem:o.a,SwipeoutButton:n.a,Swipeout:s.a,Popup:a.a,Confirm:r.a},data:function(){return{showPop:!1,doctorId:this.$route.params.rid,doctorInfo:{},comment:{},BASEIMGURL:p.a.BASEIMGURL,defaultImg:'this.src="'+i(126)+'"',services:[],patients:[],orderDetail:{},checknum:"0",showConfirm:!0,tuwenShow:!1}},computed:u({},Object(d.b)({token:function(t){return t.token}})),created:function(){this.getdoctorclinic()},methods:{getdoctorclinic:function(){var t=this,e=this;p.a.doctorclinic({doctorid:this.doctorId}).then(function(i){if("000"==i.code){t.doctorInfo=JSON.parse(i.data),t.$wechat.onMenuShareTimeline({title:t.doctorInfo.name+"微诊所",link:location.href,imgUrl:"http://img.leley.com/images/leleyun_p/lelyun_logo.png"}),t.$wechat.onMenuShareAppMessage({title:t.doctorInfo.name+"微诊所",desc:JSON.parse(i.data).goodat,link:location.href,imgUrl:"http://img.leley.com/images/leleyun_p/lelyun_logo.png"}),t.comment=t.doctorInfo.comment;var o=[];t.doctorInfo.services.forEach(function(t){"reservationCall"==t.code&&o.push(t),"freeservice"==t.code&&(o.push(t),e.tuwenShow=!0)}),t.services=o}})},getPatients:function(){var t=this;p.a.getpatients({}).then(function(e){if("000"==e.code)t.patients=JSON.parse(e.data);else if("10007"===e.code){var i=t.$route.fullPath.substring(1,t.$route.fullPath.length);location.href="#/login/"+encodeURIComponent(i)}})},showPlugin:function(t,e){e.cancelBubble=!0;var i=this;this.$vux.confirm.show({content:"确认删除吗？",onConfirm:function(){p.a.deletepatient({rid:t}).then(function(t){"000"==t.code&&p.a.getpatients({}).then(function(t){"000"==t.code&&(i.patients=JSON.parse(t.data))})})}})},tuwenPopup:function(){this.showPop=!0,this.getPatients()},checkService:function(t,e){this.checknum=t,"freeservice"==e.code?this.tuwenShow=!0:this.tuwenShow=!1},enterTalk:function(t){var e=this,i={patientid:t,doctorServiceId:this.services[0].rid};p.a.ordercreate(i).then(function(t){"000"==t.code&&(e.orderDetail=JSON.parse(t.data),location.href="#/chat/"+e.orderDetail.servicedetailid+"/1",p.a.paycallback({orderNo:e.orderDetail.orderno}).then(function(t){t.code}))})}}}},224:function(t,e,i){"use strict";var o=i(225),n=i(226),s=i(1),a=s(o.a,n.a,!1,null,null,null);e.a=a.exports},225:function(t,e,i){"use strict";e.a={name:"swipeout-item",props:{sensitivity:{type:Number,default:0},autoCloseOnButtonClick:{type:Boolean,default:!0},disabled:Boolean,threshold:{type:Number,default:.3},underlayColor:String,transitionMode:{type:String,default:"reveal"}},mounted:function(){var t=this;this.$nextTick(function(){t.render()})},methods:{render:function(){this.target=this.$refs.content,this.$slots["left-menu"]&&(this.hasLeftMenu=!0,this.caculateMenuWidth("left")),this.$slots["right-menu"]&&(this.hasRightMenu=!0,this.caculateMenuWidth("right"))},caculateMenuWidth:function(t){var e=this.$slots[t+"-menu"][0].children.filter(function(t){return t.tag}),i=0;e.forEach(function(t){var e=t.componentOptions?t.componentOptions.propsData:{};i+=e.width||80}),this[t+"MenuWidth"]=i},onContentClick:function(){-1===this.styles.transform.indexOf("(0px, 0, 0)")&&this._setClose(200)},onItemClick:function(){this.autoCloseOnButtonClick&&this._setClose()},start:function(t){if(!this.disabled&&!this.isOpen&&"button"!==t.target.nodeName.toLowerCase()){if("swipeout"===this.$parent.$options._componentTag){var e=this.$parent.$children.filter(function(t){return-1===t.$data.styles.transform.indexOf("(0px, 0, 0)")});if(e.length>0)return e.forEach(function(t){t.setOffset(0,!0)}),void t.preventDefault()}var i=t.touches?t.touches[0]:t;this.pageX=i.pageX,this.pageY=i.pageY}},move:function(t){if(!this.disabled){if("button"===t.target.nodeName.toLowerCase())return void t.preventDefault();if(void 0===this.pageX)return void t.preventDefault();var e=t.touches?t.touches[0]:t;if(this.distX=e.pageX-this.pageX,this.distY=e.pageY-this.pageY,this.direction||(this.direction=this.distX>0?"left":"right"),("right"===this.direction&&this.distX>0&&this.hasRightMenu||"left"===this.direction&&this.distX<0&&this.hasLeftMenu)&&(this.valid=!0,t.preventDefault()),void 0===this.valid&&(this.distX>0&&!1===this.hasLeftMenu?this.valid=!1:this.distX<0&&!1===this.hasRightMenu?this.valid=!1:Math.abs(this.distX)>this.sensitivity||Math.abs(this.distY)>this.sensitivity?this.valid=Math.abs(this.distX)>Math.abs(this.distY):t.preventDefault()),!0===this.valid){if(Math.abs(this.distX)<=this.menuWidth)this.setOffset(this.distX,!1);else{var i=.5*(Math.abs(this.distX)-this.menuWidth),o=(this.menuWidth+i)*(this.distX<0?-1:1);this.setOffset(o,!1)}t.preventDefault()}}},end:function(t){if(!this.disabled&&"button"!==t.target.nodeName.toLowerCase()){if(!0===this.valid){if(this.distX<0&&"right"===this.direction){var e=this.threshold<=1?this.rightMenuWidth*this.threshold:this.threshold;this.distX<-e?(this.setOffset(-this.rightMenuWidth,!0),this.$emit("on-open"),this.isOpen=!0):this._setClose()}else if(this.distX>0&&"left"===this.direction){var i=this.threshold<=1?this.leftMenuWidth*this.threshold:this.threshold;this.distX>i?(this.setOffset(this.leftMenuWidth,!0),this.$emit("on-open"),this.isOpen=!0):this._setClose()}}else this.pageX;this.pageX=this.pageY=this.valid=void 0,this.direction=""}},setOffset:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments[2];if(this.isAnimated=i,!this.disabled||o){if(("right"===this.direction&&t>0||"left"===this.direction&&t<0)&&(t=0),0===t&&setTimeout(function(){e.isOpen=!1},300),t<0&&Math.abs(t)===this.rightMenuWidth?this.distX=-this.rightMenuWidth:t>0&&Math.abs(t)===this.leftMenuWidth&&(this.distX=this.leftMenuWidth),i&&this.target){this.target&&this.target.classList.add("vux-swipeout-content-animated");var n=function(t,e){return function(){e.classList.remove("vux-swipeout-content-animated"),t.isAnimated=!1,e.removeEventListener("webkitTransitionEnd",n),e.removeEventListener("transitionend",n)}}(this,this.target);this.target.addEventListener("webkitTransitionEnd",n),this.target.addEventListener("transitionend",n)}this.styles.transform="translate3d("+t+"px, 0, 0)"}},_setClose:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.setOffset(0,!0),this.$emit("on-close"),e?setTimeout(function(){t.isOpen=!1},e):this.isOpen=!1,this.distX=0},open:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"right";this.setOffset("right"===t?-this.rightMenuWidth:this.leftMenuWidth,!0,!0)},close:function(){this.setOffset(0,!0,!0)}},computed:{menuWidth:function(){return!this.hasLeftMenu&&this.hasRightMenu?this.rightMenuWidth:this.hasLeftMenu&&!this.hasRightMenu?this.leftMenuWidth:this.hasLeftMenu&&this.hasRightMenu?this.distX<0?this.rightMenuWidth:this.leftMenuWidth:void 0},buttonBoxStyle:function(){return{backgroundColor:this.underlayColor}},leftButtonBoxStyle:function(){var t=JSON.parse(JSON.stringify(this.buttonBoxStyle));if("follow"===this.transitionMode){var e=-1===this.styles.transform.indexOf("(0px, 0, 0)")?this.leftMenuWidth-this.distX:this.leftMenuWidth;t.transform="translate3d(-"+e+"px, 0, 0)"}return t},rightButtonBoxStyle:function(){var t=JSON.parse(JSON.stringify(this.buttonBoxStyle));if("follow"===this.transitionMode){var e=-1===this.styles.transform.indexOf("(0px, 0, 0)")?this.rightMenuWidth-Math.abs(this.distX):this.rightMenuWidth;e<0&&(e=0),this.isAnimated&&(t.transition="transform 0.2s"),t.transform="translate3d("+e+"px, 0, 0)"}return t}},data:function(){return{pageX:void 0,pageY:void 0,distX:0,distY:0,hasLeftMenu:!1,hasRightMenu:!1,animated:!1,isAnimated:!1,isOpen:!1,styles:{transform:"translate3d(0px, 0, 0)"},direction:"",leftMenuWidth:160,rightMenuWidth:160}},watch:{disabled:function(t,e){!0!==t||e||this.setOffset(0,!0,!0)}}}},226:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-swipeout-item",on:{touchstart:t.start,mousedown:t.start,touchmove:t.move,mousemove:t.move,touchend:t.end,mouseup:t.end,touchcancel:t.end}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.distX>=0,expression:"distX >= 0"}],staticClass:"vux-swipeout-button-box vux-swipeout-button-box-left",style:t.leftButtonBoxStyle},[t._t("left-menu")],2),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.distX<=0,expression:"distX <= 0"}],staticClass:"vux-swipeout-button-box",style:t.rightButtonBoxStyle},[t._t("right-menu")],2),t._v(" "),i("div",{ref:"content",staticClass:"vux-swipeout-content",style:t.styles,on:{mousedown:t.onContentClick,touchstart:t.onContentClick}},[t._t("content")],2)])},n=[],s={render:o,staticRenderFns:n};e.a=s},227:function(t,e,i){"use strict";var o=i(228),n=i(229),s=i(1),a=s(o.a,n.a,!1,null,null,null);e.a=a.exports},228:function(t,e,i){"use strict";e.a={name:"swipeout-button",props:{text:String,backgroundColor:String,type:String,width:{type:Number,default:80}},methods:{onButtonClick:function(){"swipeout-item"===this.$parent.$options._componentTag&&this.$parent.onItemClick(this.text)}}}},229:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"vux-swipeout-button",class:{"vux-swipeout-button-primary":"primary"===t.type,"vux-swipeout-button-warn":"warn"===t.type,"vux-swipeout-button-default":"default"===t.type},style:{width:t.width+"px",backgroundColor:t.backgroundColor},attrs:{type:"button"},on:{click:t.onButtonClick}},[t._t("default",[t._v(t._s(t.text))])],2)},n=[],s={render:o,staticRenderFns:n};e.a=s},230:function(t,e,i){"use strict";function o(t){i(231)}var n=i(233),s=i(234),a=i(1),r=o,c=a(n.a,s.a,!1,r,null,null);e.a=c.exports},231:function(t,e,i){var o=i(232);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(3)("0efcd2aa",o,!0)},232:function(t,e,i){e=t.exports=i(2)(void 0),e.push([t.i,".vux-swipeout{width:100%;overflow:hidden}.vux-swipeout-item{position:relative}.vux-swipeout-button-box{position:absolute;top:0;right:0;bottom:0;left:0;font-size:0;text-align:right}.vux-swipeout-button-box-left{text-align:left}.vux-swipeout-button-box>div{height:100%}.vux-swipeout-button{height:100%;text-align:center;font-size:14px;color:#fff;border:none}.vux-swipeout-content{position:relative;background:#fff}.vux-swipeout-content.vux-swipeout-content-animated{transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s}.vux-swipeout-button-primary{background-color:#1aad19}.vux-swipeout-button-warn{background-color:#e64340}.vux-swipeout-button-default{background-color:#c8c7cd}",""])},233:function(t,e,i){"use strict";e.a={name:"swipeout"}},234:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-swipeout"},[t._t("default")],2)},n=[],s={render:o,staticRenderFns:n};e.a=s},235:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{attrs:{id:"clinic"}},[o("div",{staticClass:"content"},[o("div",{staticClass:"doctor-box"},[o("div",{staticClass:"doctor-info-box"},[o("img",{attrs:{src:t.BASEIMGURL+t.doctorInfo.photo,onerror:t.defaultImg,alt:"医生头像"}}),t._v(" "),o("div",{staticClass:"doctor-info"},[o("p",[o("span",{staticClass:"doc-name"},[t._v(t._s(t.doctorInfo.name))]),t._v(" "+t._s(t.doctorInfo.title))]),t._v(" "),o("p",[t._v(t._s(t.doctorInfo.servicedesc))]),t._v(" "),o("p",[t.doctorInfo.doctortag?o("span",{staticClass:"tag"},[t._v(t._s(t.doctorInfo.doctortag))]):t._e(),t.doctorInfo.drespond?o("span",{staticClass:"tag"},[t._v(t._s(t.doctorInfo.drespond))]):t._e()])])]),t._v(" "),o("div",{staticClass:"doc-value"},[o("div",{staticClass:"item-value"},[o("p",[t._v(t._s(t.doctorInfo.servicecount))]),t._v(" "),o("span",[t._v("咨询")])]),t._v(" "),o("div",{staticClass:"item-value middle"},[o("p",[t._v(t._s(t.comment.percent)+"%")]),t._v(" "),o("span",[t._v("好评")])]),t._v(" "),o("div",{staticClass:"item-value"},[o("p",[t._v(t._s(t.comment.commentnum))]),t._v(" "),o("span",[t._v("评价")])])])]),t._v(" "),t.services.length>0?o("div",{staticClass:"consult-type"},t._l(t.services,function(e,n){return o("div",{class:["type-item",{active:t.checknum==n}],on:{click:function(i){t.checkService(n,e)}}},["freeservice"==e.code?o("img",{staticClass:"appointment",attrs:{src:i(236),alt:""}}):t._e(),t._v(" "),"reservationCall"==e.code?o("img",{staticClass:"outpatient",attrs:{src:i(237),alt:""}}):t._e(),t._v(" "),"0"==t.checknum&&"freeservice"==e.code?o("i",[o("img",{attrs:{src:i(238),alt:""}})]):t._e(),t._v(" "),o("p",[t._v(t._s(e.name))]),t._v(" "),o("p",{class:{tuwenprize:"freeservice"==e.code}},[t._v(t._s(e.price)+t._s(e.desc))])])})):t._e(),t._v(" "),t.tuwenShow&&t.services.length>0?o("div",{staticClass:"consult-text"},[o("img",{attrs:{src:i(239),alt:""}}),t._v(" 通过图片、文字、语音咨询\n    ")]):t._e(),t._v(" "),!t.tuwenShow&&t.services.length>0?o("div",{staticClass:"consult-text"},[o("img",{attrs:{src:i(240),alt:""}}),t._v(" 与专家充分沟通\n    ")]):t._e(),t._v(" "),o("div",{staticClass:"divide"}),t._v(" "),o("div",{staticClass:"dept-info"},[o("h5",[t._v("医院科室")]),t._v(" "),o("p",[t._v(t._s(t.doctorInfo.hospital)+" "+t._s(t.doctorInfo.dept))])]),t._v(" "),o("div",{staticClass:"good-at"},[o("h5",[t._v("擅长")]),t._v(" "),o("p",[t._v(t._s(t.doctorInfo.goodat))])]),t._v(" "),o("div",{staticClass:"text-info"},[o("h5",[t._v("简介")]),t._v(" "),o("p",[t._v(t._s(t.doctorInfo.info)+"\n      ")])])]),t._v(" "),t.tuwenShow&&t.services.length>0?o("a",{staticClass:"btn",on:{click:t.tuwenPopup}},[t._v("图文咨询（免费）")]):t._e(),t._v(" "),!t.tuwenShow&&t.services.length>0?o("a",{staticClass:"btn",attrs:{href:"http://www.leley.com/pt.html"}},[t._v("下载APP体验电话咨询")]):t._e(),t._v(" "),o("popup",{model:{value:t.showPop,callback:function(e){t.showPop=e},expression:"showPop"}},[o("div",{staticClass:"patient-box"},[o("div",{staticClass:"patient-box-content",on:{click:function(t){t.stopPropagation()}}},[o("p",{staticClass:"title"},[t._v("为谁咨询"),o("a",{attrs:{href:"#/patientcreate"}},[t._v("添加")])]),t._v(" "),t.patients.length>0?o("div",{staticClass:"patient-list-box"},[o("div",{staticClass:"list-box",on:{click:function(t){t.stopPropagation()}}},t._l(t.patients,function(e){return o("div",{staticClass:"patient-item",on:{click:function(i){t.enterTalk(e.rid)}}},[o("swipeout",[o("swipeout-item",{attrs:{"transition-mode":"follow"}},[o("div",{attrs:{slot:"right-menu"},slot:"right-menu"},[o("swipeout-button",{attrs:{type:"warn"},nativeOn:{click:function(i){t.showPlugin(e.rid,i)}}},[o("img",{attrs:{src:i(241),alt:""}})])],1),t._v(" "),o("div",{staticClass:"swipe-content",attrs:{slot:"content"},slot:"content"},[o("div",{staticClass:"patient-name"},[t._v("\n                      姓名"),o("br"),t._v(" "),o("span",{staticClass:"name"},[t._v(t._s(e.name))])]),t._v(" "),o("div",{staticClass:"paitent-detail"},[o("p",[t._v("性别 "),o("span",[t._v(t._s(e.sex))])]),t._v(" "),o("p",[t._v("年龄 "),o("span",[t._v(t._s(e.age)+"岁")])]),t._v(" "),o("p",[t._v("关系 "),o("span",[t._v(t._s(e.relation))])])])])])],1)],1)})),t._v(" "),o("div",{staticClass:"service-promise"},[t._v("\n            服务承诺"),o("br"),t._v("\n            1、医生在24小时内进行回复，如未回复全额退款。"),o("br"),t._v("\n            2、有疑问可咨询客服400-181-6160（9:00-22:00）"),o("br")])]):t._e(),t._v(" "),"0"==t.patients.length?o("div",{staticClass:"none-patient"},[o("img",{attrs:{src:i(154),alt:""}}),o("br"),t._v("\n          暂无就诊人信息，请点击右上角创建\n        ")]):t._e()])])])],1)},n=[],s={render:o,staticRenderFns:n};e.a=s},236:function(t,e,i){t.exports=i.p+"img/wzs_icon_tuwen_Default@2x.png?f6249c4c39a6d5fad1add487a26690e3"},237:function(t,e,i){t.exports=i.p+"img/wzs_icon_phone_Default@2x.png?1fe40cdf203246e6fce1e6e6e7bbffe1"},238:function(t,e,i){t.exports=i.p+"img/wzs_icon_tuwen_yz@2x.png?3432cd807d3ecbafe4a93e218814a5b8"},239:function(t,e,i){t.exports=i.p+"img/tuwendisabled.png?f8abb89e495c3e9be5e5cca51808100b"},240:function(t,e,i){t.exports=i.p+"img/wzs_icon_phone_small@2x.png?a3cfc529dc58c997abdeacaa904c310b"},241:function(t,e,i){t.exports=i.p+"img/jzr_icon_delete@2x.png?eb407c0c61c8a3bebd0e9cf62cb3b22e"}});
//# sourceMappingURL=2.js.map?2bf7895a97179171110d