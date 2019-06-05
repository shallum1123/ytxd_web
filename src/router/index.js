import Vue from 'vue'
import Login from '@/components/Login.vue'
// import hellow from '@/components/HelloWorld.vue'
import Router from 'vue-router'
import home from '@/components/homeAdministration/home.vue'
import contenthree from '@/components/contentAdministration/contenthree.vue'
// import contentwo from '@/components/contentTwoAdministration/contentwo.vue'
import honor from '@/components/honorAdminidtration/kehu.vue'
// import fwb from '@/components/honorAdminidtration/fwb.vue'


Vue.use(Router)

export default new Router({
  // base:'/community/',
  routes: [
    {
      path: '/login',
      component: Login,
      hidden: true
    },
    {
      path: '/',
      redirect: '/login'
    },
      {
        path: '/price',
        name: '图片管理',
        component: home
      },
      {
        path:'/content',
        name:'内容管理',
        component:contenthree
      },{
        path:'/honor',
        name:'客户垂询数据',
        component:honor
      },
  ]
})
