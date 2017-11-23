import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import { AlertPlugin,ConfirmPlugin,WechatPlugin,ToastPlugin,LoadingPlugin} from 'vux'

//vux一些弹出框调用
Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);
Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
Vue.use(WechatPlugin);


router.beforeEach(function (to, from, next) {//每次路由变化开始
  store.state.prefrom = from.name;//记录上个路由  判断是否第一次进来
  next();
});

router.afterEach(function (to, from) {//每次路由变化结束
  document.title = to.meta.title || '';//设置title
});

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
