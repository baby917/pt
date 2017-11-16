import Vue from 'vue'
import Vuex from 'vuex'
import userAgent from '../utils/navigate'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    userAgent:userAgent(),
    token:'bf4eec0b5f8b4005a431f08f6ef900fd1510818397372',
    phone:'13709062737',
    openid:""
  }
});
export default store;
