<template>
  <div id="login">
    <div class="title">
      欢迎使用
    </div>
    <div class="box">
      <input type="phone" placeholder="请输入手机号" class="phone" v-model="phone" @input="change" :class="phoneactive?'active':''" maxlength="11">
      <p class="tips" :class="cantips?'show':''">手机号码输入错误，请重新输入</p>
      <button class="next" @click="next" :class="canclick?'active':''">下一步</button>
    </div>
  </div>
</template>
<script>
  import isPhone from 'validator/lib/isMobilePhone'
  export default {
    data(){
      return{
        phoneactive:false,
        canclick:false,
        cantips:false,
        phone:''
      }
    },
    computed :{
      isphone(){
        return isPhone(this.phone,'zh-CN')
      }
    },
    methods:{
      change(){
        var len = this.phone.length;
        if(len>0){
          this.phoneactive=true;
        }else {
          this.phoneactive = false;
        }

        if(len == 11 && this.isphone){
          this.canclick = true;
          this.cantips= false;
        }else if (len ==11 && !this.isphone){
          this.canclick = false;
          this.cantips = true;
        }else {
          this.canclick = false;
          this.cantips = false;
        }
      },
      next(){//下一步

      }
    }
  }
</script>
<style lang="less">
  #login{
    width: 100%;overflow: hidden;font-size: 12px;
    .title{font-size: .26rem;color: #333;margin-top: .4rem;margin-left: .32rem;margin-bottom: .5rem}
    .box{width: 100%;text-align: center;
      .phone{width: 3.11rem;padding-bottom: .08rem;font-size: .16rem;color: #00a560;border:none;border-bottom: .02rem solid #dfdfdf;margin-bottom: .08rem}
    }
    .tips{font-size: .12rem;color: #F5A623;margin-bottom: .15rem;text-align: left;margin-left: .3rem;opacity: 0}
    .tips.show{opacity: 1}
    .next{
      width: 3.11rem;height: .44rem;border-radius: 4px;background-color: #dfdfdf;font-size: .18rem;color: #fff;
    }
    .phone.active{border-color: #00a560;}
    .next.active{background-color: #00a560}
  }

</style>
