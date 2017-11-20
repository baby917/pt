import Vue from 'vue'
import Vuex from 'vuex'
import userAgent from '../utils/navigate'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    userAgent:userAgent(),
    token:false,
    phone:false,
    openid:false,
    prefrom:''
  }
});
export default store;
