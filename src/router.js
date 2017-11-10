import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes:[
    {
      path:'/login',
      component:function (resolve) {
        require(['./view/login.vue'],resolve)
      },
      name:'login',
      meta:{
        title:'登录'
      }
    },
    {
      path:'/register',
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
    }
  ]
})
