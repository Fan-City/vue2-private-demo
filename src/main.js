import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

// 自定义指令
import Directive from './utils/instruct/index.js';
Vue.use(Directive);

// 引用UI框架
import Element from 'element-ui'
import '@/assets/styles/element-variables.scss'

import './assets/icons/index' // icon

// 样式
import "@/styles/index.scss"

// 全局通用方法的引用和注册
import {
  guid
} from '@/utils/index'
Vue.prototype.guid = guid

// 注册全局消息
Vue.prototype.msgSuccess = function (msg) { this.$message({ showClose: true, message: msg, type: 'success' }) }
Vue.prototype.msgError = function (msg) { this.$message({ showClose: true, message: msg, type: 'error' }) }
Vue.prototype.msgWarning = function (msg) { this.$message({ showClose: true, message: msg, type: 'warning' }) }

Vue.use(Element, {size:'medium'})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
