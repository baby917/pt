<template>
  <div id="app">
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import {Cell} from 'vux'
  export default {
    components:{
      Cell
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    beforeCreate(){

//    var _this = this;
//    setTimeout(function () {
//      console.log(_this.$route)
//    },100);
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
  #app{width: 100%;max-width: 750px;margin: 0 auto;}
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
