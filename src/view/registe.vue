<template>
  <div id="register">
    <p class="title">
      验证码发送至:
    </p>
    <div class="phone-code">
      <span>18280266584</span>
      <span>获取验证码</span>
    </div>
    <div class="get-code">
      <input type="text" placeholder="请输入验证码">
      <span>20s</span>
    </div>
    <p class="tips">验证码输入错误，请重新输入</p>
    <button class="btn">注册/登录</button>
    <check-icon :value.sync="demo1" type="plain">注册即表示，您已阅读并同意 <span>《乐乐医服务协议》</span></check-icon>
  </div>
</template>

<script>
  import {CheckIcon} from 'vux'
  export default {
    components:{
      CheckIcon
    },
    data(){
      return {
        demo1:false
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
      width: 100%;overflow: hidden;padding-bottom: .08rem;border-bottom: 2px solid #dfdfdf;margin-bottom: .08rem;
      input{float: left;border: none;font-size: .16rem;color: #00a560;}
      span{float: right;font-size: .14rem;color: #666;}
    }
    .tips{
      font-size: .12rem;color: #F5A623;margin-bottom: .15rem;
    }
    .btn{
      width: 100%;height: .44rem;background: #DFDFDF;border-radius: 4px;font-size: .18rem;color: #fff;margin-bottom: .14rem;
    }
    [class^="weui-icon-"]:before, [class*=" weui-icon-"]:before{margin-left: 0;}
    .weui-icon-circle{font-size: .16rem}
    .weui-icon-success-circle{font-size: .16rem}
    .vux-check-icon > span{font-size: .12rem;color: #666;}
    .vux-check-icon > span span{color: #00a560}


  }
</style>
