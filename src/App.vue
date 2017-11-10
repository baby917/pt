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
//    console.log(this.$store.state.aa)
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
</style>
