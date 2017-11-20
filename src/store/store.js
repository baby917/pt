import Vue from 'vue'
import Vuex from 'vuex'
import userAgent from '../utils/navigate'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    userAgent:userAgent(),
    token:'ff7b1f1b594f45b2a3e047616bb2973a1511141834658',
    phone:'18602825020',
    openid:""
  }
});
export default store;
