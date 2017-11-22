<template>
  <div id="orderList">
    <div class="list" v-for="n in orderlist" v-if="n.catalogcode=='freeservice'">
      <div class="list-top">
        <span class="type">{{n.catalogname}}</span><span class="user">{{n.patientname}}</span>
        <span class="status" v-if="n.orderstatus==0">未支付</span>
        <span class="status" v-if="n.orderstatus==1">进行中</span>
        <span class="status" v-if="n.orderstatus==4 || n.orderstatus == 6">已完成</span>
        <span class="status" v-if="n.orderstatus==8">退款</span>
        <span class="status" v-if="n.orderstatus==32">待支付</span>

      </div>
      <div class="doc-info">
        <img src="../assets/portrait@2x.png">
        <div class="info-text">
          <p>{{n.doctorname}}&emsp;<span>{{n.title}}</span></p>
          <p>{{n.hospital}}&emsp;{{n.dept}}</p>
        </div>
      </div>
      <div class="list-foot">
        <span class="price">订单金额：<span>{{n.price}}</span></span>
        <a class="buy-again" :href="'#/clinic/'+n.doctorid">再次购买</a>
      </div>
    </div>
    <div class="no-more" v-show="noMore">暂无更多数据</div>
  </div>
</template>
<script>
  import api from '../server'
  import {mapState} from 'vuex'
  import navigate from '../utils/navigate'
  export default {
    data(){
      return{
        orderlist:[],
        startpageno:0,
        isScroll:true,
        noMore:false
      }
    },
    computed:{
      ...mapState({
        openid:state=>state.openid
      })
    },
    watch:{
      openid(){
        if(this.$store.state.phone && this.$store.state.token){
          this.getorderlist();
        }else {
          var routername = this.$route.name;
          location.href = '#/login/'+encodeURIComponent(routername)
        }
      }
    },
    created(){
      var _this = this;
      if(this.$store.state.prefrom){//如果不是第一次进来
        if(this.$store.state.phone && this.$store.state.token){
          _this.getorderlist();
        }else {//不是第一次进来如果没有登录跳去登录
          var routername = _this.$route.name;
          location.href = '#/login/'+encodeURIComponent(routername)
        }
      }else {//如果是第一次进来
        if(this.$store.state.phone && this.$store.state.token){
          _this.getorderlist();
        }else if(navigate()=='other' && (!this.$store.state.phone || !this.$store.state.token)){
          var routername = _this.$route.name;
          location.href = '#/login/'+encodeURIComponent(routername)
        }
      }
    },
    mounted(){
      const _this = this;
      $(window).scroll(function () {
        if(_this.isScroll){
          var scrollTop = $(this).scrollTop();    //滚动条距离顶部的高度
          var scrollHeight = $(document).height();   //当前页面的总高度
          var clientHeight = $(this).height();    //当前可视的页面高度
          if(scrollTop + clientHeight >= scrollHeight){   //距离顶部+当前高度 >=文档总高度 即代表滑动到底部 count++;
            _this.startpageno++;
            _this.getorderlist();
          }
        }
      })
    },
    methods:{
      getorderlist(){
        var _this = this;
        this.isScroll = false;
        api.getorderlist({startpageno:this.startpageno}).then(function (res) {
          if(res.code === '000'){
            _this.isScroll = true;
            _this.orderlist = _this.orderlist.concat(JSON.parse(res.data));
            if(JSON.parse(res.data)<10){
              _this.isScroll = false;
              _this.noMore = true;
            }
          }else if(res.code === '10007'){
            var routername = _this.$route.name;
            location.href='#/login/'+encodeURIComponent(routername)
          }
        })
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
    .no-more{
      width: 100%;text-align: center;font-size: .14rem;color: #333;padding: .1rem 0;
    }
  }
</style>
