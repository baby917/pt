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

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
