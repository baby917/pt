<template>
  <div id="orderList">
    <div class="list">
      <div class="list-top">
        <span class="type">图文咨询</span><span class="user">廖丹阳</span><span class="status">已完成</span>
      </div>
      <div class="doc-info">
        <img src="../assets/portrait@2x.png">
        <div class="info-text">
          <p>姚强&emsp;<span>主任医师</span></p>
          <p>四川大学华西第二医院&emsp;产科</p>
        </div>
      </div>
      <div class="list-foot">
        <span class="price">订单金额：<span>¥9.90</span></span>
        <span class="buy-again">再次购买</span>
      </div>
    </div>
    <div class="list">

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
  #orderList{
    font-size: 12px;width: 100%;overflow: hidden;min-height: 100%;background-color: #f2f2f2;
    .list{
      width: 3.55rem;height: 1.4rem;margin: .1rem auto;background: #FFFFFF;box-shadow: 0 1px 1px 0 rgba(0,0,0,0.15);
      border-radius: 4px;overflow: hidden;position: relative;
      .list-top{
        margin-top: .12rem;padding: 0 .08rem;overflow: hidden;margin-bottom: .11rem;
        .type{width: .6rem;height: .18rem;float: left;border-radius: 2px;background-color: #6BD2A1;font-size: .12rem;
        color: #fff;text-align: center;line-height: .18rem;margin-right: .1rem}
        .user{
          font-size: .14rem;float:left;color: #666;
        }
        .status{
          float: right;font-size: .14rem;color: #666;
        }
      }
      .doc-info{
        height: .48rem;padding-left: .12rem;overflow: hidden;
        img{float: left;width: .48rem;height: .48rem;border-radius: .48rem;margin-right: .1rem}
        .info-text{float: left;
          p:first-child{font-size: .16rem;color: #333;margin-bottom: .04rem;span{color: #666}}
          p:last-child{font-size: .12rem;color: #666;}
        }
      }
      .list-foot{
        position: absolute;height: .41rem;bottom: 0;left: 0;width: 100%;overflow: hidden;border-top: 1px solid #e9e9e9;
        line-height: .41rem;
        .price{
          float: left;margin-left: .1rem;font-size: .12rem;color: #333;
          span{font-size: .16rem;color: #151515}
        }
        .buy-again{
          float: right;width: .72rem;height: .28rem;border: 1px solid #00A560;margin-right: .12rem;margin-top: .07rem;
          border-radius: 2px;font-size: .13rem;color: #00a560;text-align: center;line-height: .28rem;
        }
      }
    }
  }
</style>
