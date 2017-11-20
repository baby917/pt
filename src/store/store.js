import Vue from 'vue'
import Vuex from 'vuex'
import userAgent from '../utils/navigate'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    userAgent:userAgent(),
    token:'09c2304f8a584c2aba5f1480d0d2c3d21510889054766',
    phone:'18602825020',
    openid:""
  }
});
export default store;
