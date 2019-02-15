# travel-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# 项目知识点

### 多页应用和单页应用的区别
- 多页应用：它是页面跳转时返回一个HTML文件。所具备的优点是：首屏时间快，SEO效果好；缺点是：页面之间切换慢。
- 单页应用：它是页面跳转时利用JavaScript渲染出一个页面。所具备的优点是：页面切换时间短；缺点是：首屏时间稍慢，SEO效果差，因为搜素引擎只识别HTML页面的内容，但是不识别JavaScript渲染出来的页面。
- 解决单页面首屏展示时间慢的问题：[1、页面分离法](https://www.jianshu.com/p/00b51e4e2b2e)；[2、数据渐进式预加载方案](http://www.iteye.com/news/32370)



### 如何全局使用一个CSS文件
这个CSS样式是所有组件公用的，使用的方式是在main.js中导入，比如：<br>
`import './assets/styles/reset.css'`<br>

在这个项目中全局还使用了一个解决移动端1px边框问题的border.css文件，需要使用的话十分简单，比如要在该元素的下面添加一个1px的边框，那么使用以下类名即可：<br>
`<div class="border-bottom">当前城市</div> `<br>

假如要修改1px边框的颜色或者其他样式，我们可以这么来做：<br>
```css
.border-bottom:before {
  border-color: #777;
}
.border-bottom:after {
  border-color: #777;
}
```


### vue-cli项目中文件路径的别名
[resolve.alias](https://www.webpackjs.com/configuration/resolve/#resolve-alias)创建 import 或 require 的别名，来确保模块引入变得更简单
```js
resolve: {
  extensions: ['.js', '.vue', '.json'],
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('src'),
    'styles':resolve('src/assets/styles'),
  }
},
```
### 防止网页加载图片时发生抖动
1. 将图片用div包裹
2. 设置div的overflow为hidden，height为0，padding-bottom为相应图片宽高比撑开高度
3. 设置图片width为100%
4. 这样在图片未加载完成时，div会撑开高度，防止页面发生滚动

### [vue-awesome-swiper插件](https://github.com/surmon-china/vue-awesome-swiper)
移动端轮播插件
```js
// 安装vue-awesome-swiper
npm install vue-awesome-swiper --save
// 全局引入使用
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
// 组件内使用
<template>
  // 外层使用一层div包裹，在图片未加载完成时，div撑开高度，防止下部内容发生抖动 
  <div class="wrapper">
   <swiper :options="swiperOption" v-if="showSwiper">
     // 一个swiper-slide就是一页,直接在swiper-slide上使用v-for就是循环输出多个swiper-slide也就是多个页面 
     <swiper-slide v-for="item of swiperList" :key="item.id">
       <img class="swiper-img" :src="item.imgUrl" />
     </swiper-slide>
     // 页码内容
     <div class="swiper-pagination"  slot="pagination"></div>
   </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        // 配置显示页码项
        pagination: '.swiper-pagination',
        // 支持循环轮播
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

```


### 为什么使用axios这个工具来发送ajax获取后台数据？
目前知道发送ajax的手段有以下几种：
- 原生ajax请求
- jQuery中封装好的ajax请求
- 浏览器自带的fetch函数<br>

在vue项目中发送ajax请求的工具有以下两种：
- vue-resource
- axios
- 那么为什么最后官方推荐使用axios来作为发送ajax请求的工具呢？因为axios十分的强大，可以实现跨平台的数据请求，比如axios在浏览器端可以发送XHR的请求，在node服务端上又可以发送http请求，[点击查看更加详细的信息](https://www.cnblogs.com/xiaohuochai/p/7628756.html)<br>



**使用axios开发步骤：** 
- 安装aixos：`npm install axios --save`
- 在单个组件中导入它：`import axios from 'axios'`
- 来看看一个简单的代码实例：
```js
import axios from 'axios'
export default {
  name: 'Home',
  methods: {
    getHomeInfo () {
      axios.get('static/mock/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      console.log(res)
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
```
此时的数据都为本地写死的假数据，当项目上线时请求都是线上的数据，那就要重新修改开发时项目中的数据地址，此时可以使用webpack-dev-server提供的proxyTable对请求进行转发
- 首先请求地址修改为后台接口地址，比如`axios.get('/api/index.json').then(this.getHomeInfoSucc)`；
- 转发地址，即我们请求后台接口地址的时候，开发时会将线上地址转发为本地地址，具体代码如下：
```js
proxyTable: {
   '/api': {
     target: 'http://localhost:8080',
     pathRewrite: {
       '^/api': '/static/mock'
     }
   }
 },
```
以上代码的位置在vue-cli项目中的config文件夹下的index.js文件中。它的含义是：当页面请求后台地址是api格式开头时，那么就将请求转移到本地端口为8080的本地服务器，将地址转换成/statick/mock。

### [Better-scroll](https://github.com/ustbhuangyi/better-scroll)

- 下载安装：`npm install better-scroll --save`

```js
import Bscroll from 'better-scroll'
// html结构
<template>
  <div class="wrapper">
    <ul class="content">
      <li>...</li>
      <li>...</li>
      ...
    </ul>
    // 这里可以放一些其它的 DOM，但不会影响滚动 
  </div>
</template>
// better-scroll 是作用在外层 wrapper 容器上的，滚动的部分是 content 元素
// better-scroll 只处理容器（wrapper）的第一个子元素（content）的滚动，其它的元素会被忽略。
let scroll = new BScroll('.wrapper')
```

### 使用keep-alive优化网页性能
当用户在城市选择页和首页之间切换时，如果用户选择的城市没有发生改变，但回到主页时仍然会请求数据，这就造成了不必要的网络流量以及网页性能上的开支。为了解决这个问题，我们需要使用keep-alive这个关键标签。<br>

使用keep-alive提高网页的方法十分简单，只要在根组件这么来就可以了：
```js
<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

```
以上代码的意思就是通过router-view展示出来的数据只需要从后台调用一次就够了，因为keep-alive这个标签，它有将请求过来的数据保存在本地的作用，以后每次页面调用同样的数据时，都会优先调用本地的。<br>

但是这么写的话，问题又来了，假如我们改变了数据，但是页面还是从本地获取旧的数据，此时就轮到activated这个生命周期函数发挥功效的时候了，看官网介绍：**activated是keep-alive 组件激活时调用。** 下面我们看看具体代码：
```js
  //借助在keep-live状态中，mounted()只加载一次的特点
  //我们可以通过判断改变后的值与原来的值是否相等，然后再决定是否再一次调用后台数据接口
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
```



