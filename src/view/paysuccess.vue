<template>
  <div id="paysuccess">
    <div class="payresult">
      <div class="pay-img">
        <img src="../assets/icon_paysucceed@2x.png" alt="">
      </div>
      <div class="pay-text">
        支付成功
      </div>
      <div class="order-num">
        <p>
          订单：PREGD172676367784<br>
          <span>您可以在我的订单中查看您的订单</span>
        </p>
      </div>
      <a class="problem">
        去描述问题
      </a>
    </div>
  </div>
</template>
<script>

</script>
<style lang="less">
  #paysuccess{
    font-size: 14px;
    color: #333333;
    width: 100%;
    height: 100%;
    .payresult{
      box-sizing: border-box;
      padding: .4rem .8rem;
      text-align: center;
      .pay-img img{
        width: 2rem;
        height: 2rem;
      }
      .pay-text{
        font-size: .2rem;
        color: #00A560;
        margin:.4rem 0 .15rem;
      }
      .order-num{
        line-height: .22rem;
        margin-bottom:.4rem;
        p{
          font-size: .14rem;
          color: #333333;
          span{
            color: #3F3F3F;
            font-size: .12rem;
          }
        }
      }
      .problem{
        display: block;
        background: #FFFFFF;
        border: 1px solid #00A560;
        border-radius: 4px;
        width:1.8rem;
        height: .44rem;
        line-height: .44rem;
        text-align: center;
        font-size: .18rem;
        color: #00A560;
        margin: 0 auto;
      }
    }
  }
</style>
