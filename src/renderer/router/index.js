import Vue from 'vue'
import Router from 'vue-router'

// 一级页面
import MyDashboard from '@/components/MyDashboard.vue'
import MyXianyuPage from '@/components/MyXianyuPage.vue'
import MyToutiaoPage from '@/components/MyToutiaoPage.vue'
import MyWeixinPage from '@/components/MyWeixinPage.vue'
import MyHaoshengPage from '@/components/MyHaoshengPage.vue'
import MySettings from '@/components/MySettings.vue'

// 二级页面
import DraftPage from '@/components/MyXianyuPage/DraftPage.vue'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'my-dashboard',
      component: MyDashboard
    },
    {
      path: '/my-xianyu-page',
      name: 'my-xianyu-page',
      component: MyXianyuPage,
    },
    {
      path: '/my-toutiao-page',
      name: 'my-toutiao-page',
      component: MyToutiaoPage
    },
    {
      path: '/my-weixin-page',
      name: 'my-weixin-page',
      component: MyWeixinPage
    },
    {
      path: '/my-haosheng-page',
      name: 'my-haosheng-page',
      component: MyHaoshengPage
    },
    {
      path: '/my-settings',
      name: 'my-settings',
      component: MySettings
    },
    // 二级页面
    {
      path: '/xianyu-add-goods/:url',
      name: 'xianyu-add-goods',
      components: {
        default: MyXianyuPage,
        content: DraftPage
      },
      props: {
        default: false,
        content: true
      }
    },
    {
      path: '*',
      redirect: '/'
    }
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
  ]
})
