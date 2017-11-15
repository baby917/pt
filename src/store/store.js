import Vue from 'vue'
import Vuex from 'vuex'
import userAgent from '../utils/navigate'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    userAgent:userAgent(),
    token:'721e03f78a384654838a875aec2573751510711510507',
    phone:'18602825020'
  }
});
export default store;
