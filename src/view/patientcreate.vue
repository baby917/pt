<template>
  <div id="patientCreate">
    <div class="patient-form">
      <div class="form-group">
        <span class="title">姓名</span>
        <div class="right-box">
          <input type="text" placeholder="请输入姓名" class="right-box">
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
    <div class="form-btn">
      保存
    </div>
  </div>
</template>
<script>
    import {PopupPicker,Datetime} from 'vux';
    export default {
      components:{
        PopupPicker,
        Datetime
      },
      data:function () {
        return{
          sex: [['男', '女']],
          sexDefault:['男'],
          relationDefault:['配偶'],
          birthday:new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDay(),
          relation:[['配偶','子','女','孙子、孙女或外孙子、外孙女','父母','祖父母或外祖父母','兄、弟、姐、妹','其他']],
        }
      }
    }
</script>
<style lang="less">
  #patientCreate{
    font-size: .16rem;
    color: #666666;
    width: 100%;
    height: 100%;
    background: #F6F6F6;
    .patient-form{
      box-sizing: border-box;
      padding-left: .12rem;
      background-color: #fff;
      overflow: hidden;
      .form-group{
        display: flex;
        align-items: center;
        height: .45rem;
        border-bottom: 1px solid #F2F2F2;
        position: relative;
        &:nth-last-of-type(1){
          border: none;
        }
        .title{
          width:1rem;
          color:#666;
        }
        .right-box{
          flex: 1;
          border-bottom: 0px;
          color: #333333;
          input{
            border: none;
            outline: none;
            font-size: .16rem;
          };
        }
        .right-arrow{
          position: absolute;
          right: .13rem;
          img{
            width: .07rem;
            height: .13rem;
          }
        }
      }

    }
    .form-btn{
      width: 80%;
      height: .44rem;
      color: #fff;
      font-size: .18rem;
      line-height: .44rem;
      text-align: center;
      background: #00A560;
      border-radius: .04rem;
      margin: .4rem auto;
    }
    .vux-cell-box:before{
      border: none;
    }
  }
</style>
