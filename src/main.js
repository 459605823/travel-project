// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决低版本浏览器不支持promise的问题
import 'babel-polyfill'
// 使用VueAwesomeSwiper做轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index.js'
import 'swiper/dist/css/swiper.css'
// 解决移动端click事件延迟执行问题
import fastClick from 'fastclick'
// 重置基本样子使其在不同浏览器下显示效果相同
import 'styles/reset.css'
// 该css样式用于解决移动端1像素边框问题
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
