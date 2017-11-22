<template>
  <div id="freedoclist">

    <div class="header">
      <!--<div class="left">-->
        <!--<span class="active">医院</span>&emsp;<img src="../assets/icon_zixun_yiyuan@2x.png" alt="down">-->
      <!--</div>-->
      <!--<div class="right">-->
        <!--<span>科室</span>&emsp;<img src="../assets/icon_zixun_keshi@2x.png" alt="down">-->
      <!--</div>-->
      <div class="filterdept" @click="filterdept()">
        筛选科室
        <img src="../assets/icon_zixun_keshi@2x.png" alt="down">
      </div>
    </div>
    <div class="doc-box" v-if="!showdeptlist">
      <div class="doc-list">
        <a class="doc-item" :href="'#/clinic/' + doc.rid" v-for="doc in doclist">
          <div class="doc-img">
            <img :src="BASEIMGURL + doc.photo" :onerror="defaultImg">
          </div>
          <div class="doc-info">
            <p>
              <span class="doc-name">{{doc.name}}</span>
              <span class="tag-one">{{doc.title}}</span>
            </p>
            <p>{{doc.hospital}}  {{doc.dept}}</p>
            <p class="good-at">擅长：{{doc.goodat}}</p>
            <p>
              <i v-if="doc.doctortag">{{doc.doctortag}}</i> <i v-if="doc.averagetag">{{doc.averagetag}}</i>
            </p>
            <div class="freebtn">
              <img src="../assets/tag_mianfeizixun.png" alt="" v-if="doc.remaintime !== '抢光了'">
              <img src="../assets/jinri@2x.png" alt="" class="none" v-if="doc.remaintime == '抢光了'">
            </div>
          </div>
        </a>
    </div>
    <div class="no-dept" v-show="!showdoclist">
      <img src="../assets/nonepatient.png">
      <p>该科室暂无医生哦</p>
    </div>
    </div>
    <div class="content dept-list-box" v-if="showdeptlist">
      <div class="left-box">
        <a :class="{'active':activenum == n.rid}" v-for="n in deptlist" @click="seclectdept(n)" >{{n.name}}</a>
      </div>
      <div class="right-box">
        <a  v-for="n in deptchildrenlist" @click="getdoclist(n.rid)">{{n.name}}</a>
      </div>
    </div>
  </div>
</template>
<script>
  import api from '../server';
  import Loading from '../components/Loading.vue';
  import {mapState} from 'vuex'
  import navigate from '../utils/navigate'
  export  default {
    data(){
      return{
        showdoclist:true,
        showdeptlist:false,
        doclist:[],
        deptlist:[],
        deptchildrenlist:[],
        defaultImg: 'this.src="' + require('../assets/icon_yizhu@2x.png') + '"',//默认图片
        BASEIMGURL:api.BASEIMGURL,
        activenum:'3',
        deptid:'',
      }
    },
    components:{
      Loading
    },
    computed:{
      ...mapState({
        token:state=>state.token
      })
    },
    watch:{
      token(){
        if(this.$store.state.phone && this.$store.state.token){
          this.getdoclist(this.deptid);
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
          _this.getdoclist(this.deptid);
        }else {//不是第一次进来如果没有登录跳去登录
          var routername = _this.$route.name;
          location.href = '#/login/'+encodeURIComponent(routername)
        }
      }else {//如果是第一次进来
        if(this.$store.state.phone && this.$store.state.token){
            _this.getdoclist(this.deptid);
        }else if(navigate()=='other' && (!this.$store.state.phone || !this.$store.state.token)){
          var routername = _this.$route.name;
          location.href = '#/login/'+encodeURIComponent(routername)
        }
      }
    },
    methods:{
      filterdept(){
        this.showdoclist=!this.showdoclist;
        this.showdeptlist=!this.showdeptlist;
        api.getdepttype({}).then(res=>{
          if(res.code == '000'){
            this.deptlist=JSON.parse(res.data);
            this.deptchildrenlist=this.deptlist[0].children;
          }
        })
      },
      seclectdept(item){
        this.activenum = item.rid;
        this.deptchildrenlist = item.children;
      },
      getdoclist(id){
        var _this = this;
        api.getfreedoclist({//获取医生列表
          "deptid":id,
          "freetype":"1",// 义诊类型  2.会员义诊 1.免费义诊
          "startpageno":"0",// 分页 页码
          "num":'0',//分页大小
        }).then(res=>{
          if(res.code == '000'){
            var data = JSON.parse(res.data);
            if(data.length>0){
              _this.doclist=JSON.parse(res.data);
              console.log(_this.doclist)
            }else {
              _this.doclist = [];
              _this.showdoclist = false;
            }
          }else if(res.code === '10007'){
            var routername = _this.$route.name;
            location.href = '#/login/'+encodeURIComponent(routername)
          }
        });
       if(this.showdeptlist){
         this.showdeptlist = false;
       }
      }
    }
  }
</script>
<style lang="less">
  #freedoclist{
    font-size: 12px;width: 100%;
    .header{border-bottom:1px solid #E9E9E9;padding:.13rem;height:.45rem;box-sizing: border-box}
    .header div{font-size: .14rem;color:#999;}
    .header div img{float: right;margin-top: .06rem;}
    .header div span.active{color: #00A560;}
    .header img{width: .14rem; vertical-align: middle; margin-left: .05rem; opacity: 0.6;}
    .left{border-right: 1px solid #E9E9E9;}
    .doc-box{height: auto;position: relative;padding-left: .1rem;}
    .doc-list .doc-item{padding-left: 0.12rem;display: flex;padding-top: 0.12rem;box-sizing: border-box;}
    .doc-list .doc-item .doc-img{width: 0.55rem;position: relative;margin-right: 0.12rem;overflow: hidden;margin-top:.05rem;}
    .doc-list .doc-item img{width: 0.48rem;height: 0.48rem;border-radius: 50%}
    .doc-list .doc-img span{position: absolute;top:0.45rem;background:#6bd1a1;color:#fff;font-size: 0.12rem; border-radius: 40%;z-index: 99;padding: 0.01rem 0.02rem;left: 0.13rem;}
    .doc-item .doc-info{flex: 1;border-bottom:1px solid #e9e9e9;position: relative}
    .doc-item .doc-info p{color:#666;line-height: 0.22rem;}
    .doc-item .doc-info p:last-child{margin-top: 0.05rem;}
    .doc-item .doc-info .doc-name{color:#333;font-size: 0.14rem;margin-right: 0.05rem;}
    .doc-item .tag-one{font-size: 12px;color: #999999;border-radius: 0.02rem;padding:0.01rem 0.02rem;margin:0 0.05rem;}
    .doc-item .doc-info .good-at{color:#999;overflow: hidden;max-height: 0.4rem;width: 2.8rem;margin-bottom: .06rem;}
    .doc-item .doc-info i{font-size: 0.12rem;height: 0.16rem;border: 1px solid #6bd1a1;color: #6bd1a1;display: inline-block;text-align: center;line-height: 0.16rem;border-radius: 0.02rem;margin-right: 0.05rem;padding: 0 .03rem;}
    .doc-item .doc-info .freebtn{position: relative;width: 100%;text-align: right;}
    .doc-item .doc-info .freebtn img{width: .54rem;height: .18rem;border-radius: 0;margin-right: .12rem}
    .doc-item .doc-info .freebtn img.none{width: 1rem;}

    //科室筛选
    .content{position:fixed;background: #fff;font-size: .16rem;height: calc(~'100% - .45rem');overflow:hidden;
      width: 100%;max-width: 750px;opacity: 1;visibility:visible;transition: all .2s ease;left: 0;top:.45rem;}
    .content>div{float: left; height: 100%; overflow-x: hidden; overflow-y: auto;}
    .left-box{width: 40%}
    .left-box a{display:block;height: .4rem;text-align: center;color: #666666;width: 100%;border-right: 1px solid rgba(1,1,1,.1);
      line-height: .4rem;border-bottom: 1px solid rgba(1,1,1,.1);background-color: rgba(1,1,1,.03)}
    .left-box a.active{background: #fff;border-right-color: transparent;}
    .right-box{width: 56%;position: absolute;right: 0}
    .right-box a{display: block;width: 100%;height: .4rem;line-height: .4rem;color: #666666;border-bottom: 1px solid rgba(1,1,1,.1)}
    .no-dept{
      width: 100%;overflow: hidden;text-align: center;
      img{width: 1.92rem;height: 1.92rem;margin-top: .5rem;margin-bottom: .3rem}
      p{font-size: .16rem;color: #333;}
    }
  }
</style>
