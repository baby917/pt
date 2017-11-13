<template>
  <div id="orderpay">
    <div class="prize">
      邓建军－图文咨询服务<span>20.00元</span>
    </div>
    <div class="grayline"></div>
    <div class="payway">
      <div class="title">支付方式</div>
      <div class="wechatpay">
        <label for="weixin">
          <input type="radio" id="weixin" checked="checked"><i></i>
          <p>
            <img src="../assets/icon-weixin@2x.png" alt=""><span>微信支付</span>
          </p>
        </label>
      </div>
    </div>
    <div class="bottom-box">
      合计： <span>20元</span>
      <div class="paybtn">确认支付</div>
    </div>
  </div>
</template>
<script>

</script>
<style lang="less">
  #orderpay{
    font-size: 16px;width: 100%;color: #666666;height: 100%;position: relative;
    .prize{
      height:.54rem;
      padding: .19rem .12rem;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(220,220,220,.5);
      span{
        float: right;
        color: #FDA023;
      }
    }
    .grayline{height: .1rem;width: 100%;background-color: #eee}
    .payway{
      box-sizing: border-box;padding-left: .12rem;
      .title{
        height: .32rem;font-size: .14rem;line-height: .32rem;border-bottom:1px solid #E1E1E1;
      }
      .wechatpay{
        label{
          width: 100%;height: .62rem;display: flex;line-height: 0.6rem;align-items: center;
          span{color:#444;font-size: 0.16rem;}
          input[type='radio']{opacity: 0;position: absolute;left:-1rem;top:-1rem;};
          input[type='radio'] ~i{width:0.18rem;height: 0.18rem;background: url("../assets/iconfont-goucopy@2x.png") no-repeat center;background-size: 100%};
          input[type='radio']:checked ~i{width:0.18rem;height: 0.18rem;background: url("../assets/iconfont-goucopy@2x.png") no-repeat center;background-size: 100%};
          p{
            border-bottom:1px solid #E1E1E1;width: 100%;margin-left: .16rem;
          }
          img{width: 0.4rem;height: 0.4rem;margin:0  0.16rem 0 0;vertical-align: middle}
        }
      }

    }
    .bottom-box{
      height: .44rem;width: 100%;position: absolute;bottom: 0;box-shadow: 0 -1px 0 0 rgba(0,0,0,0.15);font-size: 16px;color: #666666;line-height: .44rem;box-sizing: border-box;padding-left: .12rem;
      span{font-size: .18rem;color: #FDA023;}
      .paybtn{
        float: right;
        width: 1.8rem;
        height: .44rem;
        color: #fff;
        background: #00A560;
        box-shadow: 0 -1px 0 0 #00A560;
        text-align: center;
      }
    }
  }
</style>
