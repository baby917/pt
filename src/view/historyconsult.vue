<template>
  <div id="historyconsult">
    <!--<Loading v-if="loadShow"></Loading>-->
    <div class="consult-box" >
      <div class="consult-list">
        <a class="consult-item" :href="'#/chat/' + n.servicedetailid+'/2'" v-for="n in consultList">
          <div class="doc-img">
            <img :src="BASEIMGURL + n.doctorphoto" :onerror="defaultImg">
          </div>
          <div class="consult-info">
            <p>
              <span class="doc-name">{{n.doctorname}}</span>
              <span class="tag-one">{{n.dept}}</span>
              <span class="already">已完成</span>
            </p>
            <p>
              {{n.date}}
              <i>免费义诊</i>
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
    import  api from '../server';
    import Loading from '../components/Loading.vue';
    export default {
      components:{
        Loading
      },
      data(){
        return{
//          loadShow:true,
          consultList:[],
          defaultImg: 'this.src="' + require('../assets/icon_yizhu@2x.png') + '"',//默认图片
          BASEIMGURL:api.BASEIMGURL,
        }
      },
      mounted(){
        var _this = this;
        api.historyconsult({'startpageno':'0'}).then(res =>{
//          this.loadShow = false;
          if(res.code == '000'){
            var listData = JSON.parse(res.data);
            listData.forEach(function (item) { //筛选免费咨询列表
              if(item.catalogcode =='freeservice'){
                _this.consultList.push(item)
              }
            })
            console.log(_this.consultList)
          }
        })
      }
    }
</script>
<style lang="less">
  #historyconsult{
    font-size: .12rem;
    color: #333333;
    width: 100%;
    height: 100%;
    .consult-box{height: auto;position: relative;padding-left: .1rem;}
    .consult-list .consult-item{padding-left: 0.12rem;height: .77rem;display: flex;padding-top: 0.12rem;box-sizing: border-box;}
    .consult-list .consult-item .doc-img{width: 0.55rem;position: relative;margin-right: 0.12rem;overflow: hidden;}
    .consult-list .consult-item img{width: 0.48rem;height: 0.48rem;border-radius: 50%}
    .consult-list .doc-img span{position: absolute;top:0.45rem;background:#6bd1a1;color:#fff;font-size: 0.12rem; border-radius: 40%;z-index: 99;padding: 0.01rem 0.02rem;left: 0.13rem;}
    .consult-item .consult-info{flex: 1;border-bottom:1px solid #e9e9e9;position: relative}
    .consult-item .consult-info p{color:#999;line-height: 0.22rem;}
    .consult-item .consult-info p:last-child{margin-top: 0.05rem;}
    .consult-item .consult-info .doc-name{color:#333;font-size: 0.16rem;margin-right: 0.05rem;}
    .consult-item .tag-one{font-size: 12px;color: #666;border-radius: 0.02rem;padding:0.01rem 0.02rem;margin:0 0.05rem;}
    .consult-item .already{float: right;color: #666;margin-right: .13rem;}
    .consult-item .consult-info i{float:right;font-size: 0.12rem;height: 0.16rem;color: #6bd1a1;text-align: center;line-height: 0.16rem;background: #6BD2A1;border-radius: 2px;margin-right: 0.13rem;padding: 0 .06rem;color: #fff;margin-top: .04rem;}
  }
</style>
