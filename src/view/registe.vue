<template>
  <div id="register">
    <p class="title">
      验证码发送至:
    </p>
    <div class="phone-code">
      <span>{{phone}}</span>
      <span @click="getcode">获取验证码</span>
    </div>
    <div class="get-code" :class="{'active':canlogin}">
      <input type="text" placeholder="请输入验证码" v-model="code" maxlength="6">
      <span v-show="time">{{time}}s</span>
    </div>
    <p class="tips">验证码输入错误，请重新输入</p>
    <button class="btn" :class="{'active':canlogin}" @click="login">注册/登录</button>
    <check-icon :value.sync="agree" type="plain">注册即表示，您已阅读并同意 <span>《乐乐医服务协议》</span></check-icon>
  </div>
</template>

<script>
  import api from '../server'
  import navigate from '../utils/navigate'
  import {CheckIcon} from 'vux'
  export default {
    components:{
      CheckIcon
    },
    data(){
      return {
        phone:'',
        code:'',
        time:'',
        canclick:true,
        agree:true
      }
    },
    created(){
      this.phone = this.$route.params.phone//电话
    },
    computed:{
      canlogin(){
        return (this.code.length>0 && this.agree)
      }
    },
    methods:{
      getcode(){//获取验证码
        var _this = this;
        if(this.canclick){
          this.canclick = false
        }else {
          return false;
        }
        this.time = 20;
        var t=setInterval(function () {
          if(_this.time>0){
            _this.time --;
          }else {
            clearInterval(t);
            _this.canclick = true;
          }
        },1000);
        var data = {
          phone:this.phone
        };
        api.sendcode(data).then(function (res) {
          _this.$vux.toast.text('验证码发送成功','top')
        })
      },
      login(){
        var _this = this;
        if(this.canlogin){
          var openid;
          if(navigate() == 'wechat'){
            openid = _this.$store.state.openid;
          }
          var data = {
            cellPhone:this.phone,
            code:this.code,
            openId:openid
          };
          api.login(data).then(function (res) {
            if(res.code == '000'){
              var data=JSON.parse(res.data);
              _this.$store.state.token = localStorage.token = data.token || '';
              _this.$store.state.phone = localStorage.phone = data.cellPhone || '';
              var routername = _this.$route.params.routername;
              if(routername){//如果是其他页面跳过来登录的。
                location.href = '#/'+decodeURIComponent(routername)
              }else {

              }
            }
          })
        }
      }
    }
  }
</script>
<style lang="less">
  #register{
    font-size: 12px;width: 3.11rem;overflow: hidden;margin: 0 auto;
    .title{
      font-size: .26rem;color: #333;margin-top: .4rem;margin-bottom: .14rem;
    }
    .phone-code{
      width: 100%;overflow: hidden;margin-bottom: .14rem;
      span:first-child{float: left;font-size: .16rem;color: #333}
      span:last-child{float: right;font-size: .14rem;color: #00a560}
    }
    .get-code{
      &.active{border-color: #00a560}
      width: 100%;overflow: hidden;padding-bottom: .08rem;border-bottom: 2px solid #dfdfdf;margin-bottom: .08rem;
      input{float: left;border: none;font-size: .16rem;color: #00a560;}
      span{float: right;font-size: .14rem;color: #666;}
    }
    .tips{
      font-size: .12rem;color: #F5A623;margin-bottom: .15rem;opacity: 0;
    }
    .btn{
      &.active{background-color: #00a560}
      width: 100%;height: .44rem;background: #DFDFDF;border-radius: 4px;font-size: .18rem;color: #fff;margin-bottom: .14rem;
    }
    [class^="weui-icon-"]:before, [class*=" weui-icon-"]:before{margin-left: 0;}
    .weui-icon-circle{font-size: .16rem}
    .weui-icon-success-circle{font-size: .16rem}
    .vux-check-icon > span{font-size: .12rem;color: #666;}
    .vux-check-icon > span span{color: #00a560}


  }
</style>
