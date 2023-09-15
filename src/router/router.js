import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/layout'

import noPage from '@/views/404.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: 'csspage',
      children: [
        {
          path: 'csspage',
          component: resolve => require(['@/views/cssPage/index'], resolve),
          name: 'CSS示例',
          meta: { title: 'CSS示例', icon: 'dashboard', noCache: true, affix: true }
        }
      ]
    },
    {
      path: '/echarts',
      component: Layout,
      redirect: "noRedirect",
      alwaysShow: true,
      meta: { title: "Echarts", icon: "slider", noCache: false },
      children: [
        {
          path: '/echartsBar',
          component: resolve => require(['@/views/echarts/echartsBar'], resolve),
          name: '柱状体',
          meta: { title: '柱状体', icon: 'dashboard', noCache: true}
        },
        {
          path: '/echartsLine',
          component: resolve => require(['@/views/echarts/echartsLine'], resolve),
          name: '折线图',
          meta: { title: '折线图', icon: 'dashboard', noCache: true}
        },
        {
          path: '/echartsMap',
          component: resolve => require(['@/views/echarts/echartsMap/index'], resolve),
          name: '地图',
          meta: { title: '地图', icon: 'dashboard', noCache: true}
        }
      ]
    },
    {
      path: '/threeEarth3D',
      component: Layout,
      redirect: "threeEarth3D",
      children: [
        {
          path: 'threeEarth3D',
          component: resolve => require(['@/views/earth3D/index'], resolve),
          name: 'threeEarth3D',
          meta: { title: '地球', icon: 'dashboard', noCache: true}
        }
      ]
    },
    {
      path: '/inputPage',
      component: Layout,
      redirect: "inputPage",
      alwaysShow: true,
      meta: { title: "ELEMENT", icon: "slider", noCache: false },
      children: [
        {
          path: '/selectPage',
          name: 'selectPage',
          component: resolve => require(['@/views/elementUI/selectPage'], resolve),
          meta: { title: 'ELSELECT', icon: 'dashboard', noCache: true}
        },
        {
          path: '/inputPage',
          name: 'inputPage',
          component: resolve => require(['@/views/elementUI/inputPage'], resolve),
          meta: { title: 'ELINPUT', icon: 'dashboard', noCache: true}
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: noPage,
      hidden: true
    }
  ]
})
