<template>
  <div id="app" :class="{'show':appShow}">
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import api from './server'
  import navigate from './utils/navigate'
  import {Cell} from 'vux'
  export default {
    components:{
      Cell
    },
    data () {
      return {
        msg: '',
        appShow:false
      }
    },
    beforeCreate(){
      var _this = this;
      var bower = navigate();
      //取url中的search
      let paramObj = {};
      if(location.search){
        const paramStr = location.search.split('?')[1];
        const temp = paramStr.split('&');
        temp.map(function (item) {
          paramObj[item.split('=')[0]] = item.split('=')[1];
        });
      };
      if(bower == 'wechat'){
        if(!paramObj.code){
          const href = encodeURIComponent(location.origin + '/' + location.hash);
          let appid = '';
          if(api.MODEL === 'dev'){
            appid = 'wx46a9ea4777569785';
          }else if(api.MODEL === 'dist'){
            appid = 'wxf7335c0beef7ae9c';
          }
          location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+ appid +'&redirect_uri='+ href +'&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect';
        }
        localStorage.getOpenIdTimes = localStorage.getOpenIdTimes || 0; //当接口错误防止多次循环调用
        if(paramObj.code && localStorage.code != paramObj.code){ //获取openid和userid
          localStorage.code = paramObj.code;
          api.getOpenId({code:paramObj.code}).then(function (res) {
            localStorage.getOpenIdTimes ++;
            if(res.code === '000'){
              localStorage.removeItem('getOpenIdTimes');
              const data = JSON.parse(res.data);
              console.log(data);
              _this.appShow =true;
            if(data.subscribe == '1'){
              _this.$store.state.openid = localStorage.openid = data.openId || '';
              _this.$store.state.token = localStorage.token = data.token || '';
              _this.$store.state.phone = localStorage.phone = data.phone || '';
            }else {
              _this.$router.replace('/error');//去关注
            }
            }else {
              if(localStorage.getOpenIdTimes < 2){
                const href = encodeURIComponent(location.origin + '/' + location.hash);
                let appid = '';
                if(api.MODEL === 'dev'){
                  appid = 'wx46a9ea4777569785';
                }else if(api.MODEL === 'dist'){
                  appid = 'wxf7335c0beef7ae9c';
                }
                location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+ appid +'&redirect_uri='+ href +'&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect';
              }else {
                _this.appShow = true;
                _this.$router.replace('/error');
                localStorage.getOpenIdTimes = 0;
              }
            }
          })
        }else {
          setTimeout(function () {
            _this.appShow = true;
          },0)

        }
      }


    },
    created(){
      (function calcHtmlFontSize() {//设置rem
        let width = document.body.clientWidth;
        if(width < 320) width = 320;
        else if(width > 750) width = 750;
        document.getElementsByTagName('html')[0].style.fontSize = width*100/375 + 'px';
        window.onresize = function () {
          let width = document.body.clientWidth;
          if(width < 320) width = 320;
          else if(width > 750) width = 750;
          document.getElementsByTagName('html')[0].style.fontSize = width*100/375 + 'px';
        };
      })();
    },
    mounted(){

    }
  }
</script>

<style lang="less">
  html{font-size:100px}
  html,body,#app{height: 100%;background: #fff;font-family:'Microsoft YaHei','宋体',sans-serif;}
  #app{width: 100%;max-width: 750px;margin: 0 auto;opacity: 0}
  #app.show{opacity: 1}
  *{margin: 0;padding: 0}
  i{font-style:normal}
  input::-webkit-input-placeholder{color: #ccc}
  a{text-decoration: none;color: inherit;}
  button{border:none};
  button,input{outline: none}
  .clear{clear: both}



  .vux-x-dialog{font-size: 0;}
  .weui-mask{background: rgba(0,0,0,.3)!important;}
  /*.weui-dialog{width: 2.66rem !important;max-width: 2.7rem !important;border-top: 4px solid #00a560}*/
  /*.weui-dialog__hd{padding: .15rem 0 .2rem 0 !important;color: #666;font-size: .18rem}*/
  /*.weui-dialog__bd{font-size: .14rem!important;color: #333!important;padding:0 0 .2rem 0!important;min-height: .14rem!important;}*/
  .weui-dialog__hd {
    padding: 0.2em 1em 0.2em !important;
  }
  .weui-dialog__bd{
    font-size: .16rem!important;
  }
  .weui-dialog__bd{
    padding: 1.6em 1.6em 0.8em;
  }
  /*.weui-dialog__bd > div{padding:0 0.12rem;}*/
  /*.weui-dialog__bd > div span{color:#00a560}*/
  /*.weui-dialog__ft{font-size: .18rem!important;}*/
  /*.weui-dialog__btn_default{color: #999 !important;height: .52rem!important;}*/
  /*.weui-dialog__btn_primary{color: #00a560 !important;height: .52rem!important;}*/
  /*.weui-dialog__ft:after{border: none!important;}*/
  /*.weui-dialog__btn:after{border-left: none!important;}*/
</style>
