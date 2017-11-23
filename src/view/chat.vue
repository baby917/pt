<template>
  <div id="chat">
    <div class="chat-text-box">
      <p class="tips">请描述病情，等待医生回复。<br>客服电话<a href="tel:4001816106">400-181-6106</a></p>
      <div class="text-area-list">
        <div class="text-area-item" :class="{left:one.pusherName == msg.doctorName,right:one.pusherName !== msg.doctorName}" v-for="(one,index) in chatList">
          <p class="time">{{one.createDate}}</p>
          <div class="inner">
            <img :src="BASEIMGURL + one.headUrl" alt="" class="avatar" :onerror="defaultImg" v-if="one.pusherName==msg.doctorName">
            <img :src="myhead" alt="" class="avatar" :onerror="defaultImg" v-if="one.pusherName!=msg.doctorName">
            <div class="box">
              <p class="doc-name"  v-show="(one.pusherName == msg.doctorName)">{{one.pusherName}}</p>
              <!--文字-->
              <div class="content" v-if="one.secondType==='4001'">
                <img v-show="one.load" src="../assets/loading.gif" style="position: absolute;width: .3rem;left: -.3rem;top: 0.04rem;">
                {{one.content}}
              </div>
              <div class="content" v-if="one.secondType==='4005'">
                <img v-show="one.load" src="../assets/loading.gif" style="position: absolute;width: .3rem;left: -.3rem;top: 0.04rem;">
                <span>[视频，请到乐乐医APP上查看]</span>
              </div>
              <!--图片-->
              <div class="content" v-if="one.secondType==='4003'">
                <img :src="one.content" style="width: 1rem;" alt="error" @click="preview(one.content)">
                <div class="preview-img" v-show="showpreimg" @click="hideview()">
                  <img :src="preimg">
                  <span></span>
                </div>
              </div>
              <div class="content" v-if="one.secondType==='4002'">
                <span class="duration">{{one.duration}}</span>
                <button @click="playMp3($event)"></button>
                <audio :src="one.content"></audio>
              </div>
              <!--<div class="content" v-if="one.type==='merecord'" :style="'width:'+one.w+'rem'">-->
                <!--<img v-show="one.load" src="../assets/loading.gif" style="position: absolute;width: .3rem;left: -.3rem;top: 0.04rem;">-->
                <!--<span class="duration" v-show="!one.load">{{one.duration}}</span>-->
                <!--<button @click="myaudio(one.value,$event,one.load)"></button>-->
              <!--</div>-->
              <!--<div class="content" v-if="one.type==='metext'">-->
                <!--<img src="../assets/loading.gif" style="position: absolute;width: .3rem;left: -.3rem;top: 0.04rem;">-->
                <!--{{one.value}}-->
              <!--</div>-->
              <div class="content" v-if="one.secondType==='4007'">
                <div class="card-box" @click="goclinic(JSON.parse(one.content).r)">
                  <p class="card-title">名片</p>
                  <div class="card-info">
                    <img :src="BASEIMGURL+JSON.parse(one.content).u">
                    <div class="info">
                      <p><span>{{JSON.parse(one.content).n}}</span> {{JSON.parse(one.content).h}}</p>
                      <p>{{JSON.parse(one.content).o1}} {{JSON.parse(one.content).o2}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="blank-block"></div>
    <div class="input-box" v-if="cansend">
      <!--<div class="record">-->
        <!--<img src="../assets/voice.png" v-show="textType=='text'" @click="textType='voice';inputText=''">-->
        <!--<img src="../assets/keybord.png" v-show="textType=='voice'" @click="textType='text'">-->
      <!--</div>-->
      <input type="text"  v-model="inputText"   id="inputBox">
      <!--<button v-show="textType=='voice'" @touchstart="beginVoice" @touchend="endVoice" id="voiceBtn">按住说话</button>-->
      <div class="upload-img" >
          <x-icon type="ios-plus-outline" class="plus" @click.native="uploadimg" v-show="!send"></x-icon>
          <input type="file" id="upLoad" style="display: none" accept="image/*" @change="upchange($event)">
          <div @click="sendmessage" v-show="send">发送</div>
      </div>
      <!--<div class="no-click" v-show="canClick"></div>-->
    </div>
    <!--<div class="loading-modal" v-show="audioloading" @click="firstAudio">-->
      <!--<img src="../assets/audio.gif">-->
    <!--</div>-->
  </div>
</template>
<script>
  import api from '../server'
  import {dateFormat} from 'vux'
  import { mapState } from 'vuex'
  export default {
    data(){
      return {
        myhead:'',
        chatList:[],
        inputText:'',
        servicedetailid:this.$route.params.servicedetailid,
        msg:{},
        defaultImg: 'this.src="' + require('../assets/icon_yizhu@2x.png') + '"',//默认图片
        BASEIMGURL:api.BASEIMGURL,
        send:false,
        cansend:true,
        setint:'',
        timerId : null,
        preimg:'',
        showpreimg:false
      }
    },
    created(){
      if(this.$route.params.status == 2){//如果是历史隐藏掉聊天框
        this.cansend = false;
      }
    },
    computed:{
      ...mapState({
        token:state=>state.token
      }),
    },
    watch:{
      token(){
        var _this = this;
        if(this.$store.state.phone && this.$store.state.token){
          _this.msgApi();
          _this.setint = setInterval(function () {
            _this.msgApi();
          },50000)
        }
      },
      chatList(){
        this.$nextTick(function () {
          setTimeout(function () {
            if($('.text-area-item').last().length){
              $('.text-area-item').last().get(0).scrollIntoView();
            }
          },400);
        })
      },
      inputText(){
        if(this.inputText.length>0){
          this.send=true
        }else {
          this.send = false;
        }
      }
    },
    methods:{
//      inputFocus(){ //解决input框被键盘遮挡
//        let _this=this;
//        var set=setInterval(function () {
////          var pannel = document.getElementById('inputBox');
//          var pannel =_this.$refs.inputBox;
//          pannel.scrollIntoView(false);
//          pannel.scrollIntoViewIfNeeded();
//        },200);
//      },
//      inputBlur(){
//        clearInterval(set);
//      },
//      var timerId = null;

      sendmessage(e){
        var _this = this;
        $(e.currentTarget).blur();
        if(!this.inputText.trim()){
          this.$vux.toast.text('发送信息不能为空','top');
          return false
        }
        var item = {
          createDate:new Date().getFullYear() + '-' +(new Date().getMonth()+1) + '-' + new Date().getDate(),
          url:this.myhead,
          content:this.inputText,
          secondType:'4001',
          load:true
        };
        this.chatList.push(item);
        var obj={
          'oi':_this.servicedetailid,
          'msgType':'txt',
          'content':_this.inputText
        };
        _this.inputText = '';
        api.sendmsg(obj).then(res =>{
          if(res.code == '000'){
            _this.chatList[_this.chatList.length-1].load = false
          }
        })
      },
      uploadimg(){//模拟input file点击
        $('#upLoad').click();
      },
      upchange(e){//file改变事件
        var _this = this;
        var abc = new FormData();
        abc.append("content", e.target.files[0]);
        abc.append('METHOD','uploadimage');
        abc.append('RECDATA',JSON.stringify({code:'chat'}));
        var item = {
          createDate:new Date().getFullYear() + '-' +(new Date().getMonth()+1) + '-' + new Date().getDate(),
          url:this.myhead,
          content:require('../assets/loading.gif'),
          secondType:'4003',
        };
        _this.chatList.push(item);
        api.uploadimg(abc,function (res) {
          if(res.code === '000'){
            var data = JSON.parse(res.data);
            var url = data.urls[0];
            var paname = data.pname[0];
            var obj={
              'oi':_this.servicedetailid,
              'msgType':'img',
              'content':paname
            };
            api.sendmsg(obj).then(function (res) {
              if(res.code === '000'){
                _this.chatList[_this.chatList.length-1].content = url;
              }
            })
          }
        })
      },
      playMp3(e){//播放语音
        var _this = $(e.currentTarget);
        var audio = $(e.currentTarget).next()[0];
        audio.play();
        _this.addClass('change');
        audio.onended = function () {
          _this.removeClass('change')
        };
      },
      preview(url){//预览图片
        this.preimg = url;
        this.showpreimg = true;
      },
      hideview(){//隐藏预览图片
        this.preimg = '';
        this.showpreimg = false;
      },
      goclinic(id){//名片跳去微诊所
        location.href='#/clinic/'+id
      },
      msgApi(){
        var _this = this;
        api.getmsg({'oi':_this.servicedetailid}).then(res =>{
          if(res.code == '000'){
            if(JSON.parse(res.data).status>3){//会诊结束
              _this.$vux.alert.show({
                content:'您的会话已结束！'
              });
              _this.cansend = false;
              clearInterval(this.setint)
            }
            _this.msg = JSON.parse(res.data);
            console.log(JSON.parse(res.data));
            var chatData = _this.msg.list;
//         按时间排序
            chatData.sort(function (a,b) {
              return a.createDate - b.createDate
            });
            chatData.forEach(function (data) {
              var time=data.createDate;
              data.createDate=new Date(time).getFullYear()+'-'+(new Date(time).getMonth()+1)+'-'+new Date(time).getDate();
            });
            _this.chatList=chatData;
            api.getuserinfo({}).then(function (res) {
              if(res.code === '000'){
                var data = JSON.parse(res.data);
                _this.myhead = data.userHead
              }
            })
          }else if(res.code === '10007'){
            var routername = this.$route.fullPath.substring(1,this.$route.fullPath.length);
            location.href = '#/login/'+encodeURIComponent(routername);
            return false;
          }
        })
      }
    },
    mounted(){
      const _this = this;
      //解决fixed键盘问题
      var h=$(window).height();
      $(window).resize(function() {
        if($(window).height()<h){
//          alert(123);
        }
        if($(window).height()>=h){
//          alert(444);
        }
      });
      this.$nextTick(function () {
        setTimeout(function () {
          if($('.text-area-item').last().length){
            $('.text-area-item').last().get(0).scrollIntoView();
          }
        },400);
      });

      if(this.$store.state.phone && this.$store.state.token){
        _this.msgApi();
        _this.setint = setInterval(function () {
          _this.msgApi();
        },50000)
      }
    },
    beforeDestroy(){//路由销毁
      clearInterval(this.setint)
    }

  }
</script>
<style lang="less">
  #chat{
    font-size: 0;
    transition: opacity .2s ease;
    min-height: 100%;
    background-color: #f6f6f6;
    .blank-block{height: .5rem;}
    input:focus{outline: none;-webkit-appearance: none;}
    .chat-text-box{background: #f6f6f6;padding: .12rem;}
    .chat-text-box .tips{font-size: .14rem; color: #999; background: #ebebeb; text-align: center; padding: .1rem;}
    .chat-text-box .tips a{color: #00a560;}
    .text-area-list{}
    .text-area-item{font-size: .14rem;color: #fff;overflow: hidden;margin-bottom: .1rem;background-color: #f6f6f6}
    .text-area-item .time{font-size: .12rem; color: #ccc; text-align: center; width: 2.1rem; margin: .1rem auto; border-radius: .04rem; padding: .02rem 0;}
    .text-area-item .inner{}
    .text-area-item .inner .content{ max-width: 2.6rem;min-width: .4rem; min-height: 0.4rem; margin: 0 .1rem; border-radius: .04rem; padding: .1rem;
      box-sizing: border-box;word-break: break-all;text-align: justify;font-size: .16rem;color: #333;}
    .text-area-item.left .content{background-color: #fff;position: relative}
    .text-area-item.left .content:before{
      content: '';display: inline-block;position:absolute;width: 0;height: 0;background-color: transparent;
      border: .08rem solid #fff;top:.12rem;
      border-left-color: transparent;border-top-color: transparent; border-bottom-color: transparent;left: -.14rem;
    }
    .text-area-item.right .content{background-color: #b0f5bf;position: relative}
    .text-area-item.right .content:after{
      content: '';display: inline-block;position: absolute;width: 0;height: 0;background-color: transparent;
      border: .08rem solid #b0f5bf;right: -.14rem;top: .12rem;
      border-right-color: transparent;border-top-color: transparent; border-bottom-color: transparent;
    }
    .text-area-item .inner .avatar{width: .4rem;height: .4rem;border-radius: 50%;}
    .text-area-item .doc-name{
      color: #666;padding-left: .1rem;font-size: .12rem;
    }

    .text-area-item.left .avatar{float: left;}
    .text-area-item.left .content{float: left;}
    .text-area-item .content button{display: inline-block;width: .16rem;height: .16rem;background-size: 100% 100%;background-color: transparent;border: none;outline: none}
    .text-area-item.left .content button{background-image: url("../assets/static-left.jpg")}
    .text-area-item.left .content button.change{background-image: url("../assets/loading-left.gif")}
    .text-area-item.right .content button{background-image: url("../assets/static-right.jpg")}
    .text-area-item.right .content button.change{background-image: url("../assets/loading-right.gif")}
    .text-area-item.right .content .duration{position: absolute;display:inline-block;width:.3rem;height:.3rem;left: -.3rem;top: .04rem;color: #999;font-size: .12rem;text-align: center;
      line-height: .3rem;}
    .text-area-item.left .content .duration{
      position: absolute;display:inline-block;width:.3rem;height:.3rem;left: .5rem;top: .04rem;color: #999;font-size: .12rem;text-align: center;
      line-height: .3rem;
    }
    .text-area-item.left .box{float: left}
    .text-area-item.right .box{float: right}
    .text-area-item.right .avatar{float: right;}
    .text-area-item.right .content{float: right;}
    .text-area-item.left .content .card-box{
      border: 2px solid #00a560;padding: .1rem;border-radius: 4px;width: 2rem;overflow: hidden;
      .card-title{padding-bottom: .03rem;border-bottom: 1px dashed #e9e9e9;text-align: right;font-size: .14rem;color: #999;}
      .card-info{overflow: hidden;width: 100%;margin-top: .05rem;font-size: 0;}
      .card-info img{width: .36rem;height: .36rem;border-radius: .36rem;float: left;margin-right: .05rem;}
      .card-info .info{float: right;overflow: hidden;width: calc(~'100% - .41rem');
        p{word-break: normal;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}
        p:first-child{font-size: .12rem;color: #999;span{color: #333;font-size: .14rem;}}
        p:last-child{font-size: .14rem;color: #7dcbff
        }
      }
    }

    .input-box{position: fixed; width: 100%; left: 0; bottom: 0; height: .5rem; background: #F4F4F6;line-height: .5rem;
      border-top: 1px solid #e9e9e9;box-shadow: 0 -1px 0 0 #f4f4f6;
      -webkit-touch-callout:none;
      -moz-touch-callout:none;
      -ms-touch-callout:none;
      touch-callout:none;
    }
    .input-box .record{padding:0 .1rem;display: inline-block;}
    .record img{width: .25rem;vertical-align: middle}
    .input-box div .plus{width: .3rem;height: .3rem;vertical-align: middle;}
    .input-box input{height: .4rem;border: none;vertical-align: middle;padding: 0 .1rem;width: 2.55rem;font-size: .14rem;margin-left: .2rem}
    .input-box button{height: .4rem;border: 1px solid #e9e9e9;border-radius:5px;vertical-align: middle;width: 2.75rem;font-size: .14rem;outline: none;background-color: transparent;}
    .input-box button.active{background-color: #dfdfdf}
    .input-box .upload-img{padding-left:.1rem;display: inline-block;}
    .input-box .upload-img div{
      font-size: 12px;
      display: inline-block;
      vertical-align: middle;
      color: rgb(255, 255, 255);
      height: 0.3rem;
      width: 0.4rem;
      background-color: rgb(0, 165, 96);
      text-align: center;
      line-height: .3rem;
      border-radius: 3px
    }
    .input-box .no-click{
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: transparent;
      top: 0;
      left: 0;
    }

    .record-modal{background: rgba(0, 0, 0, 0.4); width: 100%; height: 100%; left: 0; top: 0; position: fixed; z-index: 12;display: none;}
    .record-modal.show{display: block;}
    .record-modal .content{width: 1rem;height: 1rem;position: absolute;top:0;bottom:0;left:0;right: 0;margin: auto;background: #fff;width: 2rem;height: 2rem;}

    .loading-modal{
      position: fixed;width: 100%;height: 100%;left: 0;top: 0;background-color: rgba(1,1,1,.1);text-align: center;
      img{display:inline-block;width: 1rem;height: 1rem;position: absolute;margin-top: -.5rem;top: 50%;margin-left: -.5rem;left: 50%;}
    }


    .preview-img{
      position: fixed;width: 100%;height: 100%;left: 0;top: 0;background-color: rgba(1,1,1,.2);z-index: 1000;
      text-align: center;vertical-align: middle;
      img{vertical-align: middle;width: 80%;}
      span{display: inline-block;height: 100%;vertical-align: middle}
    }
  }
</style>
