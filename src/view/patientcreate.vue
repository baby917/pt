<template>
  <div id="patientCreate">
    <form class="patient-form" action="">
      <div class="form-content">
        <div class="form-group">
          <span class="title">姓名</span>
          <div class="right-box">
            <input type="text" placeholder="请输入姓名" class="right-box" v-model="name">
          </div>
          <span class="right-arrow"></span>
        </div>
        <div class="form-group">
          <span class="title">性别</span>
          <div class="right-box">
            <popup-picker :data="sex" v-model="sexDefault" placeholder="请选择" value-text-align="left"></popup-picker>
          </div>
          <span class="right-arrow"><img src="../assets/arrowright.png" alt=""></span>
        </div>
        <div class="form-group">
          <div class="title">出生日期</div>
          <div class="right-box">
            <datetime v-model="birthday" :min-year="1900"></datetime>
          </div>
          <span class="right-arrow"><img src="../assets/arrowright.png" alt=""></span>
        </div>
        <div class="form-group">
          <span class="title">与您的关系</span>
          <div class="right-box">
            <popup-picker :data="relation" v-model="relationDefault" placeholder="请选择" value-text-align="left"></popup-picker>
          </div>
          <span class="right-arrow"><img src="../assets/arrowright.png" alt=""></span>
        </div>
      </div>
      <a href="javascript:void(0)" @click="submitform()" :class="['form-btn',{'active':(name && sexDefault.length && relationDefault.length)}]">
        保存
      </a>
    </form>
  </div>
</template>
<script>
    import {PopupPicker,Datetime,Alert} from 'vux';
    import api from '../server';
    export default {
      components:{
        PopupPicker,
        Datetime,
        Alert
      },
      data:function () {
        return{
          name:'',
          sex: [['男', '女']],
          sexDefault:[],
          relationDefault:[],
          birthday:new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),
          relation:[['自己','父亲','母亲','配偶 ','儿子','女儿','兄弟','姐妹','亲戚','朋友','其他']],
        }
      },
      methods:{
        submitform(){

          if(!this.name){
            this.$vux.alert.show({
              content: '姓名不能为空',
            })
            return false;
          }
          if(!(/^[\u4E00-\u9FA5]+$/.test(this.name))){
            this.$vux.alert.show({
              content: '请输入中文',
            })
            return false;
          }
          if(!this.sexDefault.length){
            this.$vux.alert.show({
              content: '请选择性别',
            })
            return false;
          }
          if(!this.relationDefault.length){
            this.$vux.alert.show({
              content: '请选择与您的关系',
            })
            return false;
          }
          var patientsDetail={
            "name":this.name,
            "sex":this.sexDefault.toString(),
            "birthday":this.birthday,
            "relation":this.relationDefault.toString()
          };
          api.addpatient(patientsDetail).then(res=>{
            if(res.code == '000'){
              history.go(-1);
            }
          })
        }
      }
    }
</script>
<style lang="less">
  #patientCreate {
    font-size: .16rem;
    color: #666666;
    width: 100%;
    height: 100%;
    background: #F6F6F6;
    .patient-form {
      overflow: hidden;
      .form-content {
        background-color: #fff;
        box-sizing: border-box;
        padding-left: .12rem;
        .form-group {
          display: flex;
          align-items: center;
          height: .45rem;
          border-bottom: 1px solid #F2F2F2;
          position: relative;
          &:nth-last-of-type(1) {
            border: none;
          }
          .title {
            width: 1rem;
            color: #666;
          }
          .right-box {
            flex: 1;
            border-bottom: 0px;
            color: #333333;
            input {
              border: none;
              outline: none;
              font-size: .16rem;
            }
          ;
          }
          .right-arrow {
            position: absolute;
            right: .13rem;
            img {
              width: .07rem;
              height: .13rem;
            }
          }
        }
      }
      .form-btn {
        display: block;
        width: 80%;
        height: .44rem;
        color: #fff;
        font-size: .18rem;
        line-height: .44rem;
        text-align: center;
        background: #d4d4d4;
        border-radius: .04rem;
        margin: .4rem auto;

      }
      .active{
        background: #00a560;
      }
    }
    .vux-cell-box:before {
      border: none;
    }

  }

</style>
