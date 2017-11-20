<template>
  <div id="myconsult">
    <div class="consult-box">
      <div class="consult-list">
        <a href="javascript:void(0)" class="consult-item">
          <div class="icon-pic">
            <img src="../assets/icon_lizhizixun.png" alt="">
          </div>
          <div class="consult-info">
            <div class="title">
              <span class="left">历史咨询</span>
              <span class="date">17/10/09</span>
            </div>
            <div class="clear"></div>
            <p class="content">咨询结束，您与马振医生的图问咨询已超过48小时您与马振医生的图问咨询已超过48小时您与马振医生的图问咨询已超过48小时您与马振医生的图问咨询已超过48小时</p>
          </div>
        </a>
      </div>
      <div class="consult-list" v-for="n in consList">
        <a href="javascript:void(0)" class="consult-item">
          <div class="icon-pic">
            <img :src="BASEIMGURL + n.doctorphoto" alt="" :onerror="defaultImg">
          </div>
          <div class="consult-info">
            <div class="title">
              <span class="left">{{n.doctorname}}</span>
              <span class="date">{{n.date}}</span>
            </div>
            <div class="clear"></div>
            <p class="msg">哈哈哈哈，呵呵呵呵呵呵呵呵呵呵。</p><a class="tuwen">图文咨询</a>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import api from '../server'
  export default {
    data(){
      return{
        consList:[],
        defaultImg: 'this.src="' + require('../assets/icon_yizhu@2x.png') + '"',//默认图片
        BASEIMGURL:api.BASEIMGURL,
      }
    },
    created(){
      var _this = this;
      api.getmyconsult({}).then(function (res) {
        if(res.code === '000'){
          console.log(JSON.parse(res.data));
          _this.consList = JSON.parse(res.data);
        }
      })
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
            float: left;
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
