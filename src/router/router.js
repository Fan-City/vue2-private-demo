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
      path: '/svgPage',
      component: Layout,
      redirect: "svgPage",
      children: [
        {
          path: 'svgPage',
          component: resolve => require(['@/views/svgPage/index'], resolve),
          name: 'svgPage',
          meta: { title: 'SVG库', icon: 'icon', noCache: true}
        }
      ]
    },
    {
      path: '/echarts',
      component: Layout,
      redirect: "noRedirect",
      alwaysShow: true,
      meta: { title: "Echarts", icon: "chart", noCache: false },
      children: [
        {
          path: '/echartsBar',
          component: resolve => require(['@/views/echarts/echartsBar'], resolve),
          name: '柱状体',
          meta: { title: '柱状体', icon: 'chart', noCache: true}
        },
        {
          path: '/echartsLine',
          component: resolve => require(['@/views/echarts/echartsLine'], resolve),
          name: '折线图',
          meta: { title: '折线图', icon: 'chart', noCache: true}
        },
        {
          path: '/echartsPie',
          component: resolve => require(['@/views/echarts/pie'], resolve),
          name: '饼图',
          meta: { title: '饼图', icon: 'chart', noCache: true}
        },
        {
          path: '/echartsMap',
          component: resolve => require(['@/views/echarts/echartsMap/index'], resolve),
          name: '地图',
          meta: { title: '地图', icon: 'chart', noCache: true}
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
          meta: { title: '地球', icon: 'international', noCache: true}
        }
      ]
    },
    {
      path: '/inputPage',
      component: Layout,
      redirect: "inputPage",
      alwaysShow: true,
      meta: { title: "ELEMENT", icon: "edit", noCache: false },
      children: [
        {
          path: '/formSelectPage',
          name: 'formSelectPage',
          component: resolve => require(['@/views/elementUI/formSelectPage'], resolve),
          meta: { title: 'formSelectPage', icon: 'edit', noCache: true}
        },
        {
          path: '/inputPage',
          name: 'inputPage',
          component: resolve => require(['@/views/elementUI/inputPage'], resolve),
          meta: { title: 'ELINPUT', icon: 'edit', noCache: true}
        },
        {
          path: '/cascader',
          name: 'cascader',
          component: resolve => require(['@/views/elementUI/cascader'], resolve),
          meta: { title: 'cascader', icon: 'edit', noCache: true}
        }
      ]
    },
    {
      path: '/lyricsScrolling',
      component: Layout,
      redirect: "lyricsScrolling",
      children: [
        {
          path: 'lyricsScrolling',
          component: resolve => require(['@/views/lyricsScrolling/index'], resolve),
          name: 'lyricsScrolling',
          meta: { title: '歌词滚动', icon: 'documentation', noCache: true}
        }
      ]
    },
    {
      path: '/honeycomb',
      component: Layout,
      redirect: "honeycomb",
      children: [
        {
          path: 'honeycomb',
          component: resolve => require(['@/views/honeycomb/index'], resolve),
          name: 'honeycomb',
          meta: { title: '横向蜂窝图', icon: 'honeycomb', noCache: true}
        }
      ]
    },
    {
      path: '/down',
      component: Layout,
      redirect: "down",
      meta: { title: "ELEMENT", icon: "documentation", noCache: false },
      children: [
        {
          path: 'downword',
          component: resolve => require(['@/views/downWord/index'], resolve),
          name: 'downword',
          meta: { title: '下载WORD', icon: 'documentation', noCache: true}
        }, 
        {
          path: 'downloadEditer',
          component: resolve => require(['@/views/downWord/downloadEditer'], resolve),
          name: 'downloadEditer',
          meta: { title: '下载富文本', icon: 'documentation', noCache: true}
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
