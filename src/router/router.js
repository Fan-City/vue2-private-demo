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
      meta: { title: "CSS", icon: "color", noCache: false },
      children: [
        {
          path: 'csspage',
          component: resolve => require(['@/views/cssPage/index'], resolve),
          name: 'CSS示例',
          meta: { title: 'CSS示例', icon: 'dashboard', noCache: true, affix: true }
        },
        {
          path: 'cssPageScroll',
          component: resolve => require(['@/views/cssPage/cssPageScroll/index'], resolve),
          name: '滚动样式',
          meta: { title: '滚动样式', icon: 'eye-open', noCache: true, affix: true }
        },
        {
          path: 'mouseSpider',
          component: resolve => require(['@/views/cssPage/mouseSpider/index'], resolve),
          name: '奔跑的蜘蛛',
          meta: { title: '奔跑的蜘蛛', icon: 'bug', noCache: true, affix: true }
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
          path: '/echartsTree',
          component: resolve => require(['@/views/echarts/shuxing'], resolve),
          name: 'shuxing',
          meta: { title: '树形图', icon: 'chart', noCache: true}
        },
        {
          path: '/echartsPraph',
          component: resolve => require(['@/views/echarts/guanxi'], resolve),
          name: 'guanxi',
          meta: { title: '关系图', icon: 'chart', noCache: true}
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
      path: '/elPage',
      component: Layout,
      redirect: "elPage",
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
          path: '/elForm',
          name: 'elForm',
          component: resolve => require(['@/views/elementUI/elForm'], resolve),
          meta: { title: 'elForm', icon: 'edit', noCache: true}
        },
        {
          path: '/inputPage',
          name: 'inputPage',
          component: resolve => require(['@/views/elementUI/inputPage'], resolve),
          meta: { title: 'ELINPUT', icon: 'edit', noCache: true}
        },
        {
          path: '/buildTable',
          name: 'buildTable',
          component: resolve => require(['@/views/elementUI/elTable/bulidTable'], resolve),
          meta: { title: 'buildTable', icon: 'build', noCache: true}
        },
        {
          path: '/selectIncludes',
          name: 'selectIncludes',
          component: resolve => require(['@/views/elementUI/selectIncludes'], resolve),
          meta: { title: 'selectIncludes', icon: 'edit', noCache: true}
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
      meta: { title: "页面下载", icon: "upload", noCache: false },
      children: [
        {
          path: 'downword',
          component: resolve => require(['@/views/downWord/index'], resolve),
          name: 'downword',
          meta: { title: '下载WORD', icon: 'documentation', noCache: true}
        }, 
        {
          path: 'downword1',
          component: resolve => require(['@/views/downWord/index1'], resolve),
          name: 'downword1',
          meta: { title: '下载WORD1', icon: 'documentation', noCache: true}
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
      path: '/eventLoop',
      component: Layout,
      redirect: "eventLoop",
      children: [
        {
          path: 'eventLoop',
          component: resolve => require(['@/views/eventLoop/index'], resolve),
          name: 'eventLoop',
          meta: { title: '多次点击', icon: 'button', noCache: true}
        }
      ]
    },
    {
      path: '/dropPage',
      component: Layout,
      redirect: "dropPage",
      meta: { title: "拖动及滚动", icon: "documentation", noCache: false },
      children: [
        {
          path: 'myDrop',
          component: resolve => require(['@/views/myDrop/index'], resolve),
          name: 'myDrop',
          meta: { title: '原生拖拽', icon: 'clipboard', noCache: true}
        }, 
        {
          path: 'myGard',
          component: resolve => require(['@/views/myDrop/gardH'], resolve),
          name: 'myGard',
          meta: { title: '横向虚拟滚动', icon: 'clipboard', noCache: true}
        }, 
        {
          path: 'myGardz',
          component: resolve => require(['@/views/myDrop/gardZ'], resolve),
          name: 'myGardz',
          meta: { title: '纵向虚拟滚动', icon: 'clipboard', noCache: true}
        }
      ]
    },
    {
      path: '/arcgis',
      component: Layout,
      redirect: "arcgis",
      children: [
        {
          path: 'arcgis',
          component: resolve => require(['@/views/arcgismap/index'], resolve),
          name: 'arcgis',
          meta: { title: 'ditu', icon: 'icon', noCache: true}
        }
      ]
    },
    {
      path: '/compare',
      component: Layout,
      redirect: "compare",
      meta: { title: "对比", icon: "upload", noCache: false },
      children: [
        {
          path: 'editerCompare',
          component: resolve => require(['@/views/editerCompare/index'], resolve),
          name: 'editerCompare',
          meta: { title: '富文本对比', icon: 'icon', noCache: true}
        },
        {
          path: 'textCompare',
          component: resolve => require(['@/views/editerCompare/textCompare'], resolve),
          name: 'textCompare',
          meta: { title: '文本对比', icon: 'icon', noCache: true}
        },
        {
          path: 'diffCompare',
          component: resolve => require(['@/views/editerCompare/diff'], resolve),
          name: 'diffCompare',
          meta: { title: 'diff对比', icon: 'icon', noCache: true}
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
