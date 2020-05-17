import Vue from 'vue'
import Router from 'vue-router'

import MyDashboard from '@/components/MyDashboard.vue'

import MyXianyuPage from '@/components/MyXianyuPage.vue'
import TodoListPage from '@/components/MyXianyuPage/TodoListPage.vue'
import InSellingPage from '@/components/MyXianyuPage/InSellingPage.vue'
import SoldOutPage from '@/components/MyXianyuPage/SoldOutPage.vue'
import DraftPage from '@/components/MyXianyuPage/DraftPage.vue'

import MyToutiaoPage from '@/components/MyToutiaoPage.vue'
import MyWeixinPage from '@/components/MyWeixinPage.vue'
import MyHaoshengPage from '@/components/MyHaoshengPage.vue'
import MySettings from '@/components/MySettings.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    {
      path: '/',
      name: 'my-dashboard',
      component: MyDashboard
    },
    {
      path: '/my-xianyu-page',
      name: 'my-xianyu-page',
      component: MyXianyuPage,
      children: [
        {
          path: 'todo-list-page',
          component: TodoListPage,
        },
        {
          path: 'in-selling-page',
          component: InSellingPage,
        },
        {
          path: 'sold-out-page',
          component: SoldOutPage,
        },
        {
          path: 'draft-page',
          component: DraftPage,
        }
      ]
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
    {
      path: '*',
      redirect: '/'
    }
  ]
})
