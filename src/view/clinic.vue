<template>
  <section id="clinic">
    <div class="content">
      <div class="doctor-box">
        <div class="doctor-info-box">
          <img :src="BASEIMGURL + doctorInfo.photo" :onerror="defaultImg" alt="医生头像">
          <div class="doctor-info">
            <p><span class="doc-name">{{doctorInfo.name}}</span> {{doctorInfo.title}}</p>
            <p>{{doctorInfo.servicedesc}}</p>
            <p><span class="tag" v-if="doctorInfo.doctortag">{{doctorInfo.doctortag}}</span><span class="tag" v-if="doctorInfo.drespond" >{{doctorInfo.drespond}}</span></p>
          </div>
        </div>
        <div class="doc-value">
          <div class="item-value">
            <p>{{doctorInfo.servicecount}}</p>
            <span>咨询</span>
          </div>
          <div class="item-value middle">
            <p>{{comment.percent}}%</p>
            <span>好评</span>
          </div>
          <div class="item-value">
            <p>{{comment.commentnum}}</p>
            <span>评价</span>
          </div>
        </div>
      </div>
      <div class="consult-type" v-if="services.length > 0">
        <div :class="['type-item',{'active':checknum == n}]" v-for="(item,n) in services" @click="checkService(n,item)">
          <img src="../assets/wzs_icon_tuwen_Default@2x.png" alt="" class="appointment" v-if="item.code =='freeservice'">
          <img src="../assets/wzs_icon_phone_Default@2x.png" alt="" class="outpatient" v-if="item.code == 'reservationCall'">
          <i v-if="checknum == '0' && item.code =='freeservice'"><img src="../assets/wzs_icon_tuwen_yz@2x.png" alt=""></i>
          <p>{{item.name}}</p>
          <p :class="{'tuwenprize':item.code == 'freeservice'}">{{item.price}}{{item.desc}}</p>
        </div>
      </div>
      <div class="consult-text" v-if="tuwenShow && services.length >0">
        <img src="../assets/tuwendisabled.png" alt="" > 通过图片、文字、语音咨询
      </div>
      <div class="consult-text" v-if="!tuwenShow && services.length >0">
        <img src="../assets/wzs_icon_phone_small@2x.png" alt="" > 与专家充分沟通
      </div>
      <div class="divide"></div>
      <div class="dept-info">
        <h5>医院科室</h5>
        <p>{{doctorInfo.hospital}} {{doctorInfo.dept}}</p>
      </div>
      <div class="good-at">
        <h5>擅长</h5>
        <p>{{doctorInfo.goodat}}</p>
      </div>
      <div class="text-info">
        <h5>简介</h5>
        <p>{{doctorInfo.info}}
        </p>
      </div>
      <!--<confirm v-model="show" :title="title" @on-confirm="onConfirm"</confirm>-->
    </div>
    <a class="btn" @click="tuwenPopup" v-if="tuwenShow && services.length >0">图文咨询（免费）</a>
    <a class="btn" v-if="!tuwenShow && services.length >0" href="http://www.leley.com/pt.html">下载APP体验电话咨询</a>
    <popup v-model="showPop">
      <div class="patient-box">
        <div class="patient-box-content" @click.stop="">
          <p class="title">为谁咨询<a href="#/patientcreate">添加</a></p>
          <div class="patient-list-box" v-if="patients.length > 0">
            <div class="list-box" @click.stop="">
              <div class="patient-item" v-for="data in patients" @click="enterTalk(data.rid)">
                <swipeout>
                  <swipeout-item  transition-mode="follow">
                    <div slot="right-menu">
                      <swipeout-button @click.native="showPlugin(data.rid,$event)" type="warn">
                        <img src="../assets/jzr_icon_delete@2x.png" alt="">
                      </swipeout-button>
                    </div>
                    <div slot="content" class="swipe-content">
                      <div class="patient-name">
                        姓名<br>
                        <span class="name">{{data.name}}</span>
                        <!--<img src="../assets/jzr_icon_yrz@2x.png" alt="">-->
                      </div>
                      <div class="paitent-detail">
                        <p>性别 <span>{{data.sex}}</span></p>
                        <p>年龄 <span>{{data.age}}岁</span></p>
                        <p>关系 <span>{{data.relation}}</span></p>
                      </div>
                    </div>
                  </swipeout-item>
                </swipeout>
              </div>
            </div>
            <div class="service-promise">
              服务承诺<br>
              1、医生在24小时内进行回复，如未回复全额退款。<br>
              2、有疑问可咨询客服400-181-6160（9:00-22:00）<br>
            </div>
          </div>
          <div class="none-patient" v-if="patients.length == '0'">
            <img src="../assets/nonepatient.png" alt=""><br>
            暂无就诊人信息，请点击右上角创建
          </div>
        </div>
      </div>
    </popup>
  </section>
</template>
<script>
  import {SwipeoutItem, SwipeoutButton,Swipeout,Popup,Confirm,TransferDomDirective as TransferDom} from 'vux';
  import api from '../server';
  import checklogin from '../utils/checklogin'
  import {mapState} from 'vuex'
  export default {
    directives: {
      TransferDom
    },
    components:{
      SwipeoutItem,
      SwipeoutButton,
      Swipeout,
      Popup,
      Confirm
    },

    data(){
      return {
        showPop: false,
        doctorId:this.$route.params.rid,
        doctorInfo:{},
        comment:{},
        BASEIMGURL:api.BASEIMGURL,
        defaultImg: 'this.src="' + require('../assets/icon_yizhu@2x.png') + '"',//默认图片
        services:[],
        patients:[],
        orderDetail:{},
        checknum:'0',
        showConfirm:true,
        tuwenShow:false
      }
    },
    computed:{
      ...mapState({
        token:state=>state.token,
      }),

    },
    watch:{
      token(){
        if(this.$store.state.phone && this.$store.state.token){
          this.getdoctorclinic();
        }else {
          var routername = this.$route.fullPath.substring(1,this.$route.fullPath.length);
          location.href = '#/login/'+encodeURIComponent(routername)
        }
      },
    },
    created(){
      var routername = this.$route.fullPath.substring(1,this.$route.fullPath.length);
      checklogin(this.getdoctorclinic,routername)
    },
    methods: {
      getdoctorclinic(){//获取微诊所信息
        var _this =this;
        api.doctorclinic({doctorid:this.doctorId}).then(res=>{
          if(res.code == '000'){
            this.doctorInfo = JSON.parse(res.data);
            //注册分享
            this.$wechat.onMenuShareTimeline({//朋友圈
              title:this.doctorInfo.name+'微诊所',
              link:location.href,
              imgUrl:'http://img.leley.com/images/leleyun_p/lelyun_logo.png',
            });
            this.$wechat.onMenuShareAppMessage({//朋友
              title:this.doctorInfo.name+'微诊所',
              desc:JSON.parse(res.data).goodat,
              link:location.href,
              imgUrl:'http://img.leley.com/images/leleyun_p/lelyun_logo.png',
            });
            this.comment = this.doctorInfo.comment;
            let openService=[];
            this.doctorInfo.services.forEach(function (val) {
              if(val.code == 'reservationCall'){
                openService.push(val);
              }
              if(val.code == 'freeservice'){
                openService.push(val);
                _this.tuwenShow=true;
              }
            });
            this.services = openService;
          }
        });
      },
      getPatients(){
        api.getpatients({}).then(res=>{
          if(res.code == '000'){
            this.patients = JSON.parse(res.data);
          }
        })
      },
      showPlugin(id,event) {
        event.cancelBubble = true;
        var _this=this;
        this.$vux.confirm.show({
          content: '确认删除吗？',
          onConfirm () {
            api.deletepatient({"rid":id}).then(res=>{
              if(res.code == '000'){
                api.getpatients({}).then(res=>{
                  if(res.code == '000'){
                    _this.patients = JSON.parse(res.data);
                  }
                })
              }
            })
          }
        })
      },

      tuwenPopup(){
        this.showPop = true;
        this.getPatients();
      },
      checkService(num,item){
        this.checknum = num;
        if(item.code == 'freeservice'){
          this.tuwenShow=true;
        }else {
          this.tuwenShow=false;
        }
      },
      enterTalk(id){
        var obj={
          "patientid":id,
          "doctorServiceId":this.services[0].rid
        };
        api.ordercreate(obj).then(res=>{
          if(res.code == '000'){
            this.orderDetail=JSON.parse(res.data);
            location.href='#/chat/' + this.orderDetail.servicedetailid +'/'+ '1';
            api.paycallback({'orderNo':this.orderDetail.orderno}).then(res =>{
              if(res.code == '000'){

              }
            })
          }
        });
      },
    },


  }
</script>
<style lang="less">
  #clinic{font-size: 0.14rem;
    .top{top:0.4rem;}
    .content{width: 100%;position:absolute;height: calc(~'100% - .5rem');overflow: auto}
    .doctor-box{height: 1.48rem;background: url("../assets/bg_weizhensuo@2x.png") no-repeat center;background-size: cover;padding-top: 0.15rem;}
    .doctor-info-box{display: flex;height: 0.68rem;width: 100%;}
    .doctor-info-box img{margin-left: 0.1rem;width: 0.66rem;height: 0.66rem;border-radius: 50%;border:0.02rem solid rgba(255,255,255,0.5);}
    .doctor-info-box .doctor-info{flex: 1;color:#fff;padding-top: 0.05rem;margin-left: 0.1rem;}
    .doctor-info-box .doc-name{font-size: 0.18rem;}
    .doctor-info-box .doctor-info p:nth-child(2){font-size: 0.12rem;}
    .doctor-info p:first-child{margin-bottom: 0.04rem;}
    .doctor-info p:last-child{margin-top: 0.06rem;}
    .doctor-info-box .tag{font-size: 0.1rem;background: #fff;color:#00A560;height: 0.16rem;display: inline-block;border-radius: 0.24rem;padding:0 0.08rem;line-height: 0.16rem;margin-right: 0.1rem; }
    .doc-value{display: flex;flex-flow: row nowrap;justify-content: center;align-items: center;color: #fff;height: 0.48rem;margin-top: 0.3rem;}
    .doc-value .item-value{flex: 1;text-align: center}
    .doc-value .item-value p{font-size: 0.18rem;line-height: 0.18rem;}
    .doc-value .item-value span{font-size: 0.12rem;}
    .doc-value .item-value.middle{position: relative}
    .doc-value .middle:before,.doc-value .middle:after{content: "";width: 0.01rem;height: 0.25rem;position:absolute; left:0;top:0.1rem;background: rgba(255,255,255,0.3);transform:scale(0.5,1)}
    .doc-value .middle:after{content: "";left: auto;right:0}
    .consult-type{height: 1.25rem;padding: 0.17rem 0.12rem .17rem;box-sizing: border-box;display: flex;flex-flow: row nowrap;justify-content: flex-start;align-items: center;border-bottom: 1px solid #E9E9E9;}
    .consult-type .type-item{width: 1.1rem;height: 0.9rem;margin-right: 0.1rem;text-align: center;color: #666;position: relative;border: 1px solid #eee;}
    .consult-type .type-item.active{border:1px solid #11CC7D;color: #11CC7D}
    .consult-type .type-item.active:before{content: '';position: absolute;left: 0;top:0;width: 0.24rem;height: 0.22rem;background: url("../assets/hlw_gou@2x.png") no-repeat ;background-size: contain}
    .consult-type .type-item.active i{position: absolute;right: .28rem;top:.08rem;width:.28rem;height:.18rem;}
    .consult-type .type-item.active i img{width:.28rem;height:.18rem;}
    .consult-type .type-item.active p.tuwenprize{text-decoration: line-through;color: #999999;}
    .consult-type .type-item:only-child{border:1px solid #00A560;color: #00A560}
    .consult-type .type-item:only-child p{color: #00A560}
    .consult-type .type-item:only-child:before{content: '';position: absolute;left: 0;top:0;width: 0.24rem;height: 0.22rem;background: url("../assets/hlw_gou@2x.png") no-repeat ;background-size: contain}
    .appointment{width: 0.18rem;height: 0.18rem;padding-top: 0.18rem;}
    .outpatient{width: 0.18rem;height: 0.18rem;padding-top: 0.18rem;}
    .type-item p:first-of-type{font-size: 0.14rem;}
    .type-item p:last-of-type{font-size: 0.12rem;color: #999}
    .consult-text{text-align: center;line-height: .44rem;font-size: .14rem;color: #666666;}
    .consult-text img{width: .12rem;height: .12rem;vertical-align: middle}
    .divide{height: .1rem;width: 100%;background-color: #eee}
    .dept-info{min-height: 0.65rem;margin-left: 0.12rem;overflow: hidden;border-bottom: 1px solid #e9e9e9;}
    h5{color: #999;line-height: 0.3rem;font-weight: normal;padding-top: 0.05rem;}
    h5 + p{font-size: 0.14rem;color: #666}
    .good-at,.text-info{margin-left: 0.12rem;overflow: hidden;border-bottom: 1px solid #e9e9e9;padding-bottom: 0.12rem;}
    .btn{width: 100%;height: 0.49rem;line-height: 0.49rem;display: block;text-align: center;font-size: 0.18rem;background: #00A560;position: fixed;left: 0;bottom: 0;color: #ffffff;z-index: 100}

  }
  .patient-box{width: 100%;height: 100%;overflow: hidden}
  .patient-box .patient-box-content{width: 100%;max-height: 5.2rem;background-color: #F6F6F6;}
  .patient-box .patient-box-content p{height: .4rem;line-height:.4rem;text-align: center;font-size: .16rem;color: #666666;position: relative;box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10);background-color: #fff}
  .patient-box .patient-box-content p a{position: absolute;width: .54rem;height: .24rem;line-height:.24rem;margin-top:.08rem;font-size: .14rem;color: #00A560;border: 1px solid #00A560;border-radius: 2px;right: .12rem;}
  .patient-box .patient-box-content .patient-list-box{box-sizing: border-box;padding: .1rem .1rem 0;height: 4rem;}
  .patient-box .patient-box-content .patient-list-box .list-box{overflow-y: auto;height: 3.1rem;}
  .patient-box .patient-box-content .patient-list-box .patient-item{width: 100%;height: .86rem;background-color: #fff;margin-bottom: .1rem;}
  .patient-box .patient-box-content .patient-list-box .patient-item .swipe-content{height: .86rem;box-sizing: border-box;padding: .08rem .13rem;box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10);border-radius: .04rem;}
  .patient-box .patient-box-content .patient-list-box .patient-item .swipe-content .patient-name{font-size: .12rem;color: #999999;height: .4rem;}
  .patient-box .patient-box-content .patient-list-box .patient-item .swipe-content .patient-name .name{font-size: .16rem;color: #333;display: block;margin-top: .03rem;}
  .patient-box .patient-box-content .patient-list-box .patient-item .swipe-content .patient-name img{float:right;width: .4rem;height: .15rem;margin-right:.1rem;}
  .patient-box .patient-box-content .patient-list-box .patient-item .swipe-content .paitent-detail p{
    font-size: .12rem;display: inline-block;color: #999;box-shadow: none;
  }
  .patient-box .patient-box-content .patient-list-box .patient-item .swipe-content .paitent-detail p:nth-of-type(2){
    margin: 0 .84rem;
  }
  .patient-box .patient-box-content .patient-list-box .patient-item .swipe-content .paitent-detail p span{
    color: #666666;
  }
  .patient-box .patient-box-content .patient-list-box .service-promise{position: fixed;height: .74rem;box-sizing: border-box;padding: .12rem;font-size: .12rem;color: #666666;bottom: 0;box-shadow: 0 -2px 2px 0 rgba(0,0,0,0.08);width: 95%;background-color: #fff;}
  .patient-box .patient-box-content .none-patient{background: #fff;text-align: center;font-size: .14rem;color: #999999;height: 100%;box-sizing: border-box;padding-top: 1rem;}
  .patient-box .patient-box-content .none-patient img{width: 1.8rem;height: 1.8rem;margin-bottom: .28rem;}

  .vux-swipeout-button-warn{background-color: #F6F6F6!important;}
  .vux-swipeout-button img{width: .48rem;height: .48rem;vertical-align: middle}
  /*.weui-dialog__bd:first-child{padding: 0.28rem 0.2rem 0.4rem !important;}*/
  /*.weui-dialog{width: 2.66rem !important;height: 1.52rem !important;}*/
  /*.weui-dialog__btn_primary{color: #00A560 !important;}*/
  /*.weui-dialog__btn_default{color: #666 !important;}*/
  /*.weui-dialog__hd{padding: 0.2rem 0.2rem 0.1rem !important;font-size: 0.16rem !important;}*/
  /*.weui-dialog__title{color:#333;font-size: 0.14rem}*/
  /*.weui-dialog__btn{font-size: .18rem;display: block;}*/
  /*.weui-dialog__ft{height: .44rem;line-height: .44rem}*/

</style>
