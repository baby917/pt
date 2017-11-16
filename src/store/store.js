import Vue from 'vue'
import Vuex from 'vuex'
import userAgent from '../utils/navigate'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    userAgent:userAgent(),
    token:'a1b29b2581b448d7b3acad1e43e047ae1510797690378',
    phone:'18602825020',
    openid:""

  }
});
export default store;
