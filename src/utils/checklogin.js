import store from '../store/store'
import navigate from './navigate'

//检查是否登录的问题==================
export default function (fc,routername) {
  if(store.state.prefrom){//如果不是第一次进来
    if(store.state.phone && store.state.token){
      fc()
    }else {//不是第一次进来如果没有登录跳去登录
      location.href = '#/login/'+encodeURIComponent(routername)
    }
  }else {//如果是第一次进来
    if(store.state.phone && store.state.token){
      fc()
    }else if(navigate()=='other' && (!store.state.phone || !store.state.token)){
      location.href = '#/login/'+encodeURIComponent(routername)
    }else if(store.state.openid && navigate()=='wechat'){
      fc()
    }
  }
}
