<template>
    <div id="myDoctor">
        <!--<div class="mydoctor-group" v-if="groups.length">-->
            <!--<h2>我的医生团队</h2>-->
            <!--<ul>-->
                <!--<li v-for="(item,index) in groups" v-show="index<3 || (index>2 && moregroup)">-->
                    <!--<a :href="'#/group/'+item.rid">-->
                        <!--<img :src="IMGURL+item.photo+'@120w_120h_90Q.jpg'" :onerror="defaultImg" class="head-pic" v-if="item.photo">-->
                        <!--<img src="../assets/head_default@2x.png" alt="" class="head-pic" v-if="!item.photo">-->
                        <!--<div class="right">-->
                            <!--<p class="doctor-group-name">{{item.name}} {{item.title}}</p>-->
                            <!--<p class="hosp-name">{{item.hospital}}<span>{{item.dept}}</span></p>-->
                        <!--</div>-->
                    <!--</a>-->
                <!--</li>-->
            <!--</ul>-->
            <!--<p class="load-more" @click="loadMore">{{openclose}}</p>-->
        <!--</div>-->
        <div class="mydoctor-list" v-if="doctors.length">
            <h2>我的医生</h2>
            <ul>
                <li v-for="item in doctors">
                    <a :href="'#/clinic/'+ item.rid">
                        <img :src="IMGURL+item.photo+'@120w_120h_90Q.jpg'" :onerror="defaultImg" class="head-pic">
                        <div class="right">
                            <p class="doctor-name"><span>{{item.name}}</span>{{item.title}}</p>
                            <p class="hosp-name">{{item.hospital}}<span>{{item.dept}}</span></p>
                            <p class="good-at">擅长：{{item.goodat}}</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="no-list" v-show="noList">
            暂无关注的医生和团队
        </div>
    </div>
</template>
<script>
import api from '../server'
import { mapState } from 'vuex'
import navigate from '../utils/navigate'
export default{
    data(){
        return {
            IMGURL:api.BASEIMGURL,
            defaultImg: 'this.src="' + require('../assets/icon_yizhu@2x.png') + '"',//默认图片
            groups:[],
            doctors:[],
            noList:false,
            moregroup:false,
        }
    },
    computed:{
      ...mapState({
        token:state=>state.token
      }),
      openclose(){
        if(this.moregroup){
          return '收起'
        }else {
          return '加载更多'
        }
      }
    },
    watch:{
      token(){
        if(this.$store.state.phone && this.$store.state.token){
          this.getattion();
        }else {
          var routername = this.$route.name;
          location.href = '#/login/'+encodeURIComponent(routername)
        }
      }
    },
    created:function () {
      var _this = this;
      if(this.$store.state.prefrom){//如果不是第一次进来
        if(this.$store.state.phone && this.$store.state.token){
          _this.getattion();
        }else {//不是第一次进来如果没有登录跳去登录
          var routername = _this.$route.name;
          location.href = '#/login/'+encodeURIComponent(routername)
        }
      }else {//如果是第一次进来
        if(this.$store.state.phone && this.$store.state.token){
            _this.getattion();
        }else if(navigate()=='other' && (!this.$store.state.phone || !this.$store.state.token)){
          var routername = _this.$route.name;
          location.href = '#/login/'+encodeURIComponent(routername)
        }else if(this.$store.state.openid && navigate()=='wechat'){
          _this.getattion();
        }
      }
    },

    methods:{
        getattion(){
            const _this=this;
            api.getmydoclist({}).then(res=>{
                if(res.code=='000'){
                    var data = JSON.parse(res.data);
                    console.log(JSON.parse(res.data).doctors);
                    _this.groups=data.groups;
                    _this.doctors=data.doctors;
                    if(data.groups.length<1 && data.doctors.length<1){
                        _this.noList = true
                    }
                    $('body').show();
                }
            })
        },
        loadMore(){
           this.moregroup = !this.moregroup;
        }
    }
}
</script>
<style lang="less">
#myDoctor{
    background: #f6f6f6;
    .mydoctor-group,.mydoctor-list{padding:0 12px;background: #fff;}
    .mydoctor-group{box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);margin-bottom: .1rem;}
    h2{height: 0.4rem;line-height: 0.4rem;color:#999;font-size: 0.14rem;}
    li{padding: 0.1rem 0;width: 100%;overflow: hidden;position: relative;margin: 0;display: block}
    li:after{content: "";width: 100%;height: 1px;position: absolute;left: 0;top: 0;transform: scale(1,0.5);background: #e9e9e9;}
    li .head-pic{width: 0.48rem;height: 0.48rem;border-radius: 50%;margin-right: 0.12rem;float: left}
    li .right{float: left;width: calc(~'100% - 0.68rem')}
    li .doctor-group-name{color: #333;font-size: 0.16rem;padding-top: 0.1rem;}
    li .hosp-name{color:#666;font-size:0.12rem;margin-top: 0.03rem}
    li .hosp-name span{margin-left: 0.1rem;}
    li .doctor-name span{color: #333;font-size: .16rem;padding-right: 0.1rem;}
    .mydoctor-list{font-size: 0.12rem;color:#666;border:1px solid #f6f6f6;}
    li .good-at{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;margin-top: 0.03rem;}
    .no-list{font-size: .16rem;color: #666;text-align: center;background-color: #fff;position: fixed;height: 100%;
        width: 100%;max-width: 750px;line-height: 6rem;}
    .load-more{font-size: .14rem;text-align: center;padding: .2rem 0;color: #666;}
}
</style>
