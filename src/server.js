/**
 * Created by lw on 2017-5-31.
 */
import axios from 'axios'
import qs from 'qs'
import $ from 'jquery'
import useragent from './utils/navigate'
import store from './store/store'
import Vue from 'vue'

//预发模式
const MODEL = 'dev';

//线上模式
// const MODEL = 'dist';

let APPID;
if(useragent() == 'wechat'){
  APPID =11
}else if(useragent() == 'heshenghuo'){
  APPID = 8
}else {
  APPID = 7
}
let BASEURL,BASEIMGURL,UPLOADIMGURL,FUBASEURL;
if(MODEL === 'dev'){
    BASEURL = 'http://dtapi.weixin.leley.org/';
    BASEIMGURL = 'http://img.leley.org/';
    UPLOADIMGURL = 'http://oss.leley.org:8085/';
    FUBASEURL='http://59.110.18.99:8000'
}
else if(MODEL === 'dist'){
    BASEURL = 'http://47.93.158.251';
    BASEIMGURL = 'http://img.leley.com/';
    UPLOADIMGURL = 'http://oss.leley.com/';
    FUBASEURL='http://api.leley.com'
}

axios.defaults.timeout = 15001;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    const data = {
      PHONE:store.state.phone,
      USERTYPE:2,
      CTYPE:'web',
      TOKEN:store.state.token || 'default',
      APPID:APPID,
      BODY:JSON.stringify(config.data)
    };
    // config.data=$.extend(true,defaultParam,config.data);
    // config.data = Object.assign(defaultParam,config.data);
    if(config.method  === 'post'){
        config.data = qs.stringify(data);
    }
    return config;
},(error) =>{
    // _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});

const errorAlert = function (errorStr) {
    const html = '<div id="modalErrorTips" style="position: fixed;top: 0;left: 0;width:100%;height:100%;text-align: center;font-size: .12rem;opacity: 0;z-index: 999">' +
        '<p style="display:inline-block;background-color: rgba(1,1,1,.7);padding: .1rem .15rem;border-radius: .08rem;color: white;">'+errorStr+'</p>' +
        '</div>';
    $('body').append(html);
    setTimeout(function () {
        $('#modalErrorTips').css({opacity:'1',top:'.15rem',transition:'all .1s linear'})
    },10);
    setTimeout(function () {
        $('#modalErrorTips').css({opacity:'0',top:'0',transition:'all .1s easy-out'})
    },1000);
    setTimeout(function () {
        $('#modalErrorTips').remove();
    },1100);
};
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
    Vue.$vux.loading.hide();
    if(res.data && res.data.code!== '000'
        && res.request.responseURL.indexOf('v1/llyweb/user/getopenid') < 0
        && res.request.responseURL.indexOf('wxUser/bindingPhone') < 0
    ){
        errorAlert(res.data.msg || '接口请求失败');
    }
    return res;
}, (error) => {
    Vue.$vux.loading.hide();
    errorAlert('网络错误，请检查网络设置');
    return Promise.reject(error);
});


//返回一个Promise(发送post请求)
export function fetch(modal) {
    return new Promise((resolve, reject) => {
        Vue.$vux.loading.show();
        const obj = {
            method: 'post'
        };
        modal = $.extend(true,obj,modal);
        axios(obj).then(response =>{
            resolve(response.data)
        }).catch((err)=>{
            reject(err)
        })
    })
}

export default {
    MODEL,
    BASEURL,
    BASEIMGURL,
    UPLOADIMGURL,
    getOpenId(data){//微信获取openid 等信息
      return fetch({
        url: BASEURL + 'v1/llyweb/user/getopenid',
        data: data
      })
    },
    getWxConfig(data){  //获取微信签名
        return fetch({
            url :  BASEURL +'/wx/pt/js/getsign',
            data : data
        })
    },
    login(data){//登录
      return fetch({
        url: BASEURL + 'v1/llyweb/user/register',
        data :data
      })
    },
    hshlogin(data){//和生活登录
      return fetch({
        url : BASEURL + 'v1/llyweb/user/login',
        data : data
      })
    },
    sendcode(data){//发送验证码
      return fetch({
        url: BASEURL + 'v1/llyweb/user/sendCode',
        data:data
      })
    },
    getfreedoclist(data){//医生列表
      return fetch({
        url: BASEURL + '/v1/llyweb/doctor/freeList',
        data:data
      })
  },
    getdepttype(data){//科室列表
      return fetch({
        url: BASEURL + '/v1/llyweb/doctor/depttype',
        data:data
      })
    },
    doctorclinic(data){//医生微诊所
      return fetch({
        url: BASEURL + '/v1/llyweb/doctor/doctorMicroClinic',
        data:data
      })
    },
    getmyconsult(data){//获取我的咨询
      return fetch({
        url: BASEURL + 'v1/llyweb/service/pbackloglist',
        data : data
      })
    },
    historyconsult(data){//获取历史咨询
      return fetch({
        url: BASEURL + '/v1/llyweb/service/advisorylist',
        data : data
      })
    },
    getpatients(data){//患者列表
        return fetch({
          url: BASEURL + '/v1/llyweb/patient/pmypatients',
          data:data
        })
    },
    addpatient(data){//添加患者
      return fetch({
        url: BASEURL + '/v1/llyweb/patient/pmypatientsadd',
        data:data
      })
    },
    deletepatient(data){//删除患者
      return fetch({
        url: BASEURL + '/v1/llyweb/patient/pmypatientsdelete',
        data:data
      })
    },
    ordercreate(data){//生成订单
      return fetch({
        url: BASEURL + '/v1/llyweb/doctor/orderspecialtygeneration',
        data:data
      })
    },
    paycallback(data) { //订单处理
      return fetch({
        url: BASEURL + '/v1/llyweb/order/paycallback',
        data:data
      })
    },
    getmsg(data) { //拉取消息
      return fetch({
        url: BASEURL + '/v1/llyweb/msg/getMsg',
        data:data
      })
    },
    sendmsg(data) { //发送消息
      return fetch({
        url: BASEURL + '/v1/llyweb/msg/sendMsg',
        data:data
      })
    },
    getuserinfo(data){//获取用户信息
      return fetch({
        url: BASEURL + '/v1/llyweb/user/getMyUserInfo',
        data:data
      })
    },
    uploadimg(data,cb){//上传图片
      $.ajax({
        type:'POST',
        data:data,
        url:UPLOADIMGURL+ 'app/v2/image',
        contentType: false,
        processData: false,
        complete: function (XMLHttpRequest, textStatus) {
          var json = '';
          try{
            json = JSON.parse(XMLHttpRequest.responseText);
          }catch(e){
            json = {
              code : '99999',
              msg : '服务器错误'
            }
          }
          cb(json,textStatus);
        }
      })
    },
    getorderlist(data){//获取订单列表
      return fetch({
        url:BASEURL + 'v1/llyweb/doctor/porderlist',
        data:data
      })
    },
    getmydoclist(data){
      return fetch({
        url: BASEURL + 'v1/llyweb/user/attentiondocteamlist',
        data:data
      })
    },
    checkFu(openId){ //查询用户是否开启随访服务
      return fetch({
        url: BASEURL + '/v1/fu/isOpenFu',
        data:{
          openId:openId
        }
      })
    },
    commitTemplateBaseInfo(modal,cb){
      $.ajax({
        type:'post',
        url: FUBASEURL + '/app/v2/wfollowup',
        data : {
          METHOD:'wplansetrow',
          PHONE:'10000000000',
          SIGN:Date.now(),
          TOKEN:"70b0877082184a1584347abd5a5f93af1499766674417",
          RECDATA:JSON.stringify(modal),
          REQTIME:Date.now(),
          CTYPE:"pc",
          USERTYPE:"2",
          VERSION:"2.0"
        },
        complete: function (XMLHttpRequest) {
          let json = '';
          try{
            json = JSON.parse(XMLHttpRequest.responseText);
          }catch(e){
            json = {
              code : '99999',
              msg : '服务器错误'
            }
          }
          cb(json);
        }
      })
    },
    bindingPhone(modal){  //绑定手机号
      return fetch({
        url : BASEURL + '/wx/lly/pt/user/bindingPhone',
        data : modal
      })
    },
    getUserInfo(openId){ //获取个人信息
      return fetch({
        url : BASEURL + '/v1/fu/getUserInfo',
        data : {
          openId : openId
        }
      })
    },





}
