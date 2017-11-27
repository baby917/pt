<template>
  <div id="orderDetail">
      <div class="order-title">
        <span>图文咨询</span>
        <span>进行中</span>
      </div>
      <div class="doc-info">
        <div class="doc-box">
          <img src="../assets/portrait@2x.png">
          <div class="info">
            <p>姚强 <span>主任医师</span></p>
            <p>四川大学华西第二医院 产科</p>
          </div>
        </div>
      </div>
      <div class="list-box">
        <div class="list">
          <span>就诊人</span>
          <span>廖丹阳</span>
        </div>
        <div class="list">
          <span>实付款</span>
          <span class="price">¥20.00</span>
        </div>
      </div>
      <div class="order-box">
        <p>订单号：<span>PRJASDKJHASKJDHASKJD</span></p>
        <p>下单时间：<span>2017-12-12 13:53:04</span></p>
        <p>完成时间：<span>2017-11-11 13:53:04</span></p>
      </div>
      <div class="btn-box">
        <button class="evaluate">查看评价</button>
        <button class="buy-again">再次购买</button>
      </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>
<style lang="less">
  #orderDetail{
    font-size: 12px;width: 100%;min-height: 100%;background-color: #f2f2f2;
    .order-title{
      padding:.12rem;overflow: hidden;background-color: #fff;
      span:first-child{float: left;font-size: .14rem;color: #00A560;}
      span:last-child{float: right;font-size: .14rem;color: #666;}
    }
    .doc-info{
      padding: 0 .12rem;background-color: #fff;
      .doc-box{
        width: 100%;height: .8rem;background-color: #f2f2f2;overflow: hidden;
        >img{float: left;width: .48rem;height: .48rem;border-radius: .48rem;margin-left: .11rem;margin-top: .14rem;margin-right: .1rem}
        .info{float: left;margin-top: .14rem;
          p:first-child{font-size: .16rem;color: #333;margin-bottom: .04rem;span{color: #666;}}
          p:last-child{font-size: .12rem;color: #666;}
        }
      }
    }
    .list-box{
      padding-left: .12rem;overflow: hidden;background-color: #fff;margin-bottom: .1rem;
      .list{width: 100%;height: .44rem;line-height: .44rem;
        span:first-child{float: left;font-size: .14rem;color: #333}
        span:last-child{float: right;font-size: .14rem;color: #333;margin-right: .12rem;}
        span.price{color: #F5A623;font-size: .16rem;}
      }
      .list:first-child{border-bottom: 1px solid #e9e9e9}
    }
    .order-box{
      padding: .18rem .1rem;background-color: #fff;
      p{font-size: .14rem;color: #666;span{color: #999;}}
      p:not(:last-child){margin-bottom: .16rem}
    }
    .btn-box{
      position: fixed;bottom: 0;left: 0;width: 100%;height: .49rem;background-color: #fff;text-align: right;line-height: .49rem;
      button{margin-right: .12rem}
      .evaluate{width: .63rem;height: .24rem;border: 1px solid #F5A623;border-radius: 4px;background-color: transparent;font-size: .14rem;color: #F5A623;}
      .buy-again{width: .63rem;height: .24rem;border: 1px solid #00a560;border-radius: 4px;background-color: transparent;font-size: .14rem;color: #00a560;}
    }

  }
</style>
