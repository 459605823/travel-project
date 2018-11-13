// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端click事件延迟执行问题
import fastClick from 'fastclick'
// 重置基本样子使其在不同浏览器下显示效果相同
import './assets/styles/reset.css'
// 该css样式用于解决移动端1像素边框问题
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
