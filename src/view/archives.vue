<template>
    <div id="archives" v-show="isShow">
        <div class="tips">
            <img src="../assets/icon_tips_red.png"><span>医生对您的病情信息了解并定期回访，请准确完善资料！</span>
        </div>
        <div class="phone-code" v-if="!isPhone">
            <div class="phone-title">
                手机验证
            </div>
          <div class="phone-list">
                <img src="../assets/phone@2x.png"><input type="number" placeholder="请输入手机号" v-model="userInfo.phone" :readonly="isPhone" oninput="if(value.length>11)value=value.slice(0,11)">
            </div>
            <div class="phone-list">
                <img src="../assets/login_icon_yanzheng@2x.png"><input type="number" placeholder="请输入验证码" v-model="code" oninput="if(value.length>6)value=value.slice(0,6)">
                <button class="get-code" :class="{grey:!canClick}" :disabled="!canClick" @click="getCode">{{codeVal}}</button>
            </div>
        </div>
        <div class="divide"></div>
        <div class="info-title">
            病情资料完善
        </div>
        <ul>
            <!--<li>-->
                <!--<span class="title">手机号</span>-->
                <!--<input type="text" v-model="userInfo.phone" class="text fr phone" readonly="readonly">-->
            <!--</li>-->

            <li>
                <span class="title">真实姓名</span>
                <input type="text" v-model="userInfo.patientname" class="text fr" placeholder="请输入您的姓名"/>
            </li>
            <li>
                <selector title="性别" :options="sexList" v-model="userInfo.patientgender" placeholder="请选择"></selector>
            </li>
            <li>
                <datetime title="出生年月" v-model="patientbirthdate" :min-year=1900 :max-year='maxyear' cancel-text="取消" confirm-text="确认" placeholder="请选择" :class="{placeholder:!patientbirthdate}"></datetime>
            </li>
            <!--<li>-->
                <!--<selector title="手术方式" :options="templateList" v-model="userInfo.template" placeholder="请选择"></selector>-->
            <!--</li>-->
            <li>
                <datetime  title="手术日期" v-model="userInfo.starttime" :min-year=1900 :max-year=2100 cancel-text="取消" confirm-text="确认" placeholder="请选择" :class="{placeholder:!userInfo.starttime}"></datetime>
            </li>
        </ul>
        <button href="javascript:;" class="sure active" @click='commit()' :disabled="commitBoolean">加入随访</button>
    </div>
</template>
<script>
import api from '../server'
import {Selector, Group, Calendar, Cell ,Datetime } from 'vux'
import isMobilePhone from 'validator/lib/isMobilePhone'
import { mapState } from 'vuex'

export default {
    components: {
        Calendar,
        Group,
        Cell,
        Selector,
        Datetime
    },
    data () {
        return {
            userInfo:{
                planid : '',
                patientname : '',
                phone : '',
                starttime :'',
                patientgender : '',
                template : '',
                creator:'-1'
            },
            code:'',
            patientbirthdate : '',
            sexList: [{key: '1', value: '男'}, {key: '2', value: '女'}],
            templateList: [],
            suid : '',
            isPhone:false,
            isShow:false,
            codeVal:'获取验证码',
            canClick:true,
            commitBoolean:false
        }
    },
    computed:{
        canCommit(){
            return this.userInfo.patientname && this.userInfo.patientgender && this.patientbirthdate && this.userInfo.starttime
        },
        'phoneInputVer'(){
            return isMobilePhone(this.userInfo.phone.toString(),'zh-CN')
        },
        ...mapState({
//            userId:state => state.userId,
            openId:state => state.openid
        }),
        'maxyear'(){
            return (new Date()).getFullYear();
        }
    },
    mounted(){
        //解决fixed键盘问题
        var h=$(window).height();
        $(window).resize(function() {
            if($(window).height()<h){
                $('.sure').hide();
            }
            if($(window).height()>=h){
                $('.sure').show();
            }
        });
        //解决selector默认颜色
        $('.weui-select').css('color','#ccc');
        const _this = this;
        if(api.MODEL === 'dev'){
            this.suid="575f6e8d56c9711e340b94b6";
        }else if(api.MODEL === 'dist'){
            this.suid="574816725b3f48cd9dfc30df";
        }
//        api.wtemplatelist(this.suid,function (res) {//获取手术方式
//            if(res.code === '000'){
//                const data = JSON.parse(res.data);
//                data.map(function (item) {
//                    _this.templateList.push({
//                        key : item.id,
//                        value : item.name
//                    })
//                });
//            }
//        });
        if(this.$store.state.openid){
           this.getInfo()
        }
    },
    watch:{
        openId(){
            this.getInfo();
        }
    },
    methods:{
        getInfo(){//需要openId的方法
            const _this = this;
            api.checkFu(this.$store.state.openid).then(function (res) { //查询是否开启随访服务
                if(res.code === '000'){
                    if(res.data && !res.data.url && res.data.planid){
//                        location.replace(res.data.url)
                      _this.$router.replace('/archivesstatus/'+1);
                    }else
                      if(res.data && res.data.planid && res.data.url){
                      location.replace(res.data.url)
                    }else {
                        _this.isShow = true;
                        _this.userInfo.planid =res.data && res.data.planid || '';
                    }
                }
            });
            api.getUserInfo(this.$store.state.openid).then(function (res) {//获取个人信息
                if(res.code === '000'){
//                    _this.userInfo.patientname = res.data.username;
                    if(res.data.cellPhone){
                        _this.userInfo.phone = res.data.cellPhone;
                        _this.isPhone = true;
                    }
                }
            });
        },
        commit(){
            const _this = this;
            if(!this.userInfo.phone){
                this.$vux.toast.text('请输入手机号码','top');
                return false;
            }
            if(!this.phoneInputVer){
                this.$vux.toast.text('请输入正确的手机号码！','top');
                return false;
            }
            if(!this.code && !this.isPhone){
                this.$vux.toast.text('请输入验证码','top');
                return false;
            }
            _this.commitBoolean = true;
            setTimeout(function () {
                _this.commitBoolean = false;
            },5000);
            if(this.canCommit){
                this.userInfo.patientbirthdate = new Date(this.patientbirthdate+'').getTime();
                this.userInfo.suid = this.suid;
                if(this.isPhone){//如果有电话直接执行随访
                    api.commitTemplateBaseInfo(this.userInfo,function (res) {
                        if(res.code === '000'){
//                            _this.wxSend();
                            _this.$router.push('/archivesstatus/'+encodeURIComponent(JSON.parse(res.data).url));
                        }else {
                           _this.$vux.toast.text(res.msg,'top')
                        }
                    })
                }else {//没有绑定电话
                    var modal = {
                        cellPhone : _this.userInfo.phone,
                        code : _this.code,
                        openId : this.$store.state.openid
                    };
                    api.login(modal).then(function (res) {
                        if(res.code === '000'){
                            api.commitTemplateBaseInfo(_this.userInfo,function (res) {
                                if(res.code === '000'){
//                                    _this.wxSend();
                                    _this.$router.push('/archivesstatus/'+encodeURIComponent(JSON.parse(res.data).url));
                                }else {
                                    _this.$vux.toast.text(res.msg,'top')
                                }
                            })
                        }else {
                            _this.$vux.toast.text(res.msg,'top');
                        }
                    })
                }
            }else{
                if(!this.userInfo.patientname) this.$vux.toast.text('请输入真实姓名', 'top');
                else if(!this.userInfo.patientgender) this.$vux.toast.text('请选择性别', 'top');
                else if(!this.patientbirthdate) this.$vux.toast.text('请选择出生年月', 'top');
//                else if(!this.userInfo.template) this.$vux.toast.text('请选择手术方式', 'top');
                else if(!this.userInfo.starttime) this.$vux.toast.text('请选择手术日期', 'top');
            }
        },
        getCode(){ //获取验证码
            const _this = this;
            if(!this.phoneInputVer){
                _this.$vux.toast.text('请输入正确的手机号码！','top');
                return false;
            }
            _this.codeVal = 30;
            _this.canClick = false;
            var t = setInterval(function () {
                if(_this.codeVal == 0){
                    _this.codeVal='再次获取';
                    _this.canClick = true;
                    clearInterval(t);
                }else {
                    _this.codeVal--
                }
            },1000);
            api.sendcode({phone:this.userInfo.phone}).then(function (res) {
                if(res.code === '000'){
                    _this.$vux.toast.text('发送验证码成功')
                }
            })
        },
//        wxSend(){//微信发送消息
//            const _this = this;
//            api.wxSendImg(this.$store.state.openId).then(function (res) {
//
//            })
//        }

    }
}
</script>

<style lang="less">
#archives{
    /*min-height: 100%;*/
    font-size: 12px;
    background-color: #f2f2f2;
    /*padding-bottom: .5rem;*/
    .tips{
        font-size: 12px;
        height: .3rem;
        padding: 0 .12rem;
        background-color: #fef3f0;
        img{height: .14rem;vertical-align:middle;margin-right: .08rem;}
        span{color: #fe7b4f;vertical-align:middle;display: inline-block;height: 100%;line-height: .3rem}
    }

    //手机验证
    .phone-code{
        background-color: #fff;
        overflow: hidden;
        /*padding-bottom: .2rem;*/
        .phone-title{
            height: .4rem;
            padding-left: .12rem;
            font-size: .14rem;
            color: #999;
            line-height: .4rem;
            border-bottom: 1px solid #e9e9e9;
        }
        .phone-list{
            padding: .12rem 0;
            margin-left: .12rem;
            border-bottom: 1px solid #e9e9e9;
            overflow: hidden;
            position: relative;
            img{height: .24rem;vertical-align: middle;margin-right: .12rem;}
            input{outline:none;font-size: .14rem;color: #333;border: none;vertical-align: middle}
            .get-code{
                position:absolute;outline: none;border: none;height: .29rem;width: .99rem;text-align: center;color: #fff;
                font-size: .14rem;border-radius: 100px;background-color: #01a7e1;right: .12rem;margin-top:-.15rem;top: 50%;
            }
            .get-code.grey{background-color: #dfdfdf;}
            input::-webkit-input-placeholder{color: #ccc}
        }
        /*.phone-list:last-child{margin-top: .2rem}*/
    }
    //分割线
    .divide{width: 100%;height: .1rem;background-color: #f2f2f2;}

    .info-title{height: .4rem;padding-left: .12rem;line-height: .4rem;font-size: .14rem;color: #999;border-bottom: 1px solid #e9e9e9;background-color: #fff;}



    .fr{float: right}
    ul{font-size: 0;background-color: #fff;}
    ul li{font-size:.14rem;margin-left:.12rem;width:calc(~'100% - .24rem');padding-right:.12rem;height: 0.48rem;line-height: 0.48rem;border-bottom: 1px solid #e9e9e9;list-style: none;}
    .weui-cell{padding:0 !important;margin:0 !important;color:#666!important;}
    span.title,.weui-label{color:#666;width: 1.2rem;}
    .weui-cell__ft{color: #333}
    .phone{color:#aaa !important;}

    .weui-cell_access .weui-cell__ft{font-size: 0.14rem;color:#333;padding-right: 0 !important;}
    input.text,span.date{line-height: inherit;color:#333;font-size:0.14rem;border:none;text-align: right;outline: none;width: 80%}
    .weui-cell_select .weui-select{padding-right: 0;text-align: right !important;}
    select { text-align: right ;width: 100%;height:.44rem;direction: rtl;}
    option { text-align: right;height: inherit;direction: ltr;}
    .weui-cell_select .weui-cell__bd:after{right: -1rem !important;}
    .weui-cell_access .weui-cell__ft:after{right:-1rem !important;}

    .weui-select{font-family: 'Microsoft YaHei';}
    .placeholder .vux-datetime-value{color:#ccc;}
}
    .vux-popup-dialog{font-size: 0.14rem !important;}
    .sure{position:fixed;width: 100%;height: 0.44rem;line-height: 0.44rem;font-size:0.18rem;color:#fff;background: #dfdfdf;display: block;text-align: center;bottom: 0;}
    .sure.active{background: linear-gradient(to left, #5dd0f8, #01A7E1);border: none;outline: none;}

</style>
