import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import { AlertPlugin,ConfirmPlugin,WechatPlugin,ToastPlugin,LoadingPlugin} from 'vux'
import regWecaht from './utils/regWechat'
import navigate from './utils/navigate'

//vux一些弹出框调用
Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);
Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
Vue.use(WechatPlugin);


router.beforeEach(function (to, from, next) {//每次路由变化开始
  store.state.prefrom = from.name;//记录上个路由  判断是否第一次进来
  document.title = to.meta.title || '';//设置title
  //注册微信签名
  if(navigate()=='wechat'){
    regWecaht(Vue,next);
  }else {
    next();
  }
});

router.afterEach(function (to, from) {//每次路由变化结束

});
Vue.filter('time',function (value) {
  //聊天时间
  var value = new Date(value);
  var vay = value.getFullYear();
  var vam = value.getMonth()+1;
  var vd = value.getDate();
  var vh = value.getHours();
  var vs = value.getMinutes();
  //当前时间
  var nowtime = new Date();
  var nowy = nowtime.getFullYear();
  var nowm = nowtime.getMonth()+1;
  var nowd = nowtime.getDate();
  var nowh = nowtime.getHours();
  var nows = nowtime.getMinutes();
  if(vay<nowy){//不是今年的
    return vay+'-'+(vam>9?vam:'0'+vam)+'-'+(vd>9?vd:'0'+vd)+' '+(vh>9?vh:'0'+vh)+':'+(vs>9?vs:'0'+vs)
  }else {
    if(vam<nowm){//不是这个月的
      return (vam>9?vam:'0'+vam)+'-'+(vd>9?vd:'0'+vd)+' '+(vh>9?vh:'0'+vh)+':'+(vs>9?vs:'0'+vs)
    }else {
      if(vd == nowd){//当天的
        return (vh>9?vh:'0'+vh)+':'+(vs>9?vs:'0'+vs)
      }else if(nowd - vd ==1){//昨天的
        return '昨天 '+(vh>9?vh:'0'+vh)+':'+(vs>9?vs:'0'+vs)
      }else {//昨天以前的
        return (vam>9?vam:'0'+vam)+'-'+(vd>9?vd:'0'+vd)+' '+(vh>9?vh:'0'+vh)+':'+(vs>9?vs:'0'+vs)
      }
    }
  }

});


new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
