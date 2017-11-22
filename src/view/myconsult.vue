<template>
  <div id="myconsult">
    <div class="consult-box">
      <div class="consult-list">
        <a href="#/historyconsult" class="consult-item">
          <div class="icon-pic">
            <img src="../assets/icon_lizhizixun.png" alt="">
          </div>
          <div class="consult-info">
            <div class="title">
              <span class="left">历史咨询</span>
              <!--<span class="date">17/10/09</span>-->
            </div>
            <div class="clear"></div>
            <p class="content">点击查看历史咨询</p>
          </div>
        </a>
      </div>
      <div class="consult-list" v-for="n in consList"  v-if="n.catalogcode=='freeservice'">
        <a :href="'#/chat/'+n.servicedetailid+'/1'" class="consult-item">
          <div class="icon-pic">
            <img :src="BASEIMGURL + n.doctorphoto" alt="" :onerror="defaultImg">
          </div>
          <div class="consult-info">
            <div class="title">
              <span class="left">{{n.doctorname}}</span>
              <span class="date">{{n.date}}</span>
            </div>
            <div class="clear"></div>
            <p class="msg">{{n.msg}}</p><a class="tuwen">图文咨询</a>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import api from '../server'
  import {mapState} from 'vuex'
  import navigate from '../utils/navigate'
  export default {
    data(){
      return{
        consList:[],
        defaultImg: 'this.src="' + require('../assets/icon_yizhu@2x.png') + '"',//默认图片
        BASEIMGURL:api.BASEIMGURL,
      }
    },
    computed:{
      ...mapState({
        token:state=>state.token
      })
    },
    watch:{
      token(){
        if(this.$store.state.phone && this.$store.state.token){
          this.getlist();
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
          _this.getlist();
        }else {//不是第一次进来如果没有登录跳去登录
          var routername = _this.$route.name;
          location.href = '#/login/'+encodeURIComponent(routername)
        }
      }else {//如果是第一次进来
        if(this.$store.state.phone && this.$store.state.token){
            _this.getlist();
        }else if(navigate()=='other' && (!this.$store.state.phone || !this.$store.state.token)){
          var routername = _this.$route.name;
          location.href = '#/login/'+encodeURIComponent(routername)
        }
      }
    },
    methods:{
      getlist(){//获取列表
        var _this = this;
        api.getmyconsult({}).then(function (res) {
          if(res.code === '000'){
            _this.consList = JSON.parse(res.data);
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
  #myconsult{
    font-size: 12px;color: #999999;width: 100%;
    .consult-box{padding: .16rem 0 0 .12rem;
      .consult-list{margin-bottom: .16rem;}
      .consult-list .consult-item{
        height: auto;display: flex;
        .icon-pic{
          margin-right: .12rem;
          img{
            width: .48rem;height: .48rem;
          }
        }
        .consult-info{
          width: 2.86rem;border-bottom: 1px solid #F2F2F2;height: .62rem;
          .title{
            font-size: 16px;color: #333333;width: 100%;height: .22rem;margin-bottom: .06rem;
            .left{float: left}
            .date{
              font-size: 12px;color: #999999;float: right;line-height: .22rem;
            }
          }
          .content{
            font-size: 12px;
            color: #999999;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .msg{
            float: left;width: calc(~'100% - .8rem');word-wrap: normal;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
          }
          .tuwen{
            float: right;
            width: .6rem;
            height: .18rem;
            background: #6BD2A1;
            border-radius: 2px;
            color: #fff;
            text-align: center;
          }
        }
      }

    }
  }
</style>
