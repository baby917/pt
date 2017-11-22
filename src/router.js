import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes:[
    {
      path:'/login/:routername',
      component:function (resolve) {
        require(['./view/login.vue'],resolve)
      },
      name:'login',
      meta:{
        title:'登录'
      }
    },
    {
      path:'/login',
      redirect:'/login/0'
    },
    {
      path:'/register/:phone/:routername',
      component:function (resolve) {
        require(['./view/registe.vue'],resolve)
      },
      name:'register',
      meta:{
        title:'注册'
      }
    },
    {
      path:'/orderlist',
      component:function (resolve) {
        require(['./view/orderlist.vue'],resolve)
      },
      name:'orderlist',
      meta:{
        title:'订单查询'
      }
    },
    {
      path:'/orderdetail',
      component:function (resolve) {
        require(['./view/orderdetail.vue'],resolve)
      },
      name:'orderdetail',
      meta:{
        title:'订单详情'
      }
    },
    {
      path:'/freedoclist',
      component:function (resolve) {
        require(['./view/freedoclist.vue'],resolve)
      },
      name:'freedoclist',
      meta:{
        title:'免费咨询医生列表'
      }
    },
    {
      path:'/myconsult',
      component:function (resolve) {
        require(['./view/myconsult.vue'],resolve)
      },
      name:'myconsult',
      meta:{
        title:'我的咨询'
      }
    },
    {
      path:'/orderpay',
      component:function (resolve) {
        require(['./view/orderpay.vue'],resolve)
      },
      name:'orderpay',
      meta:{
        title:'订单支付'
      }
    },
    {
      path:'/clinic/:rid',
      component:function (resolve) {
        require(['./view/clinic.vue'],resolve)
      },
      name:'clinic',
      meta:{
        title:'微诊所'
      }
    },
    {
      path:'/patientcreate',
      component:function (resolve) {
        require(['./view/patientcreate.vue'],resolve)
      },
      name:'patientcreate',
      meta:{
        title:'添加就诊人'
      }
    },
    {
      path:'/paysuccess',
      component:function (resolve) {
        require(['./view/paysuccess.vue'],resolve)
      },
      name:'paysuccess',
      meta:{
        title:'支付成功'
      }
    },
    {
      path:'/historyconsult',
      component:function (resolve) {
        require(['./view/historyconsult.vue'],resolve)
      },
      name:'historyconsult',
      meta:{
        title:'历史咨询'
      }
    },
    {
      path:'/chat/:servicedetailid/:status',
      component:function (resolve) {
        require(['./view/chat.vue'],resolve)
      },
      name:'chat',
      meta:{
        title:'聊天'
      }
    },
    {
      path:'/error',
      component:function (resolve) {
        require(['./view/error.vue'],resolve)
      },
      name:'error',
      meta:{
        title:'关注公众号'
      }
    },
    {
      path:'/mydoctor',
      component:function (resolve) {
        require(['./view/mydoctor.vue'],resolve)
      },
      name:'mydoctor',
      meta:{
        title:'我的医生'
      }
    },



  ]
})
