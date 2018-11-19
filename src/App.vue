<template>
  <div id="app">
    <!-- keep-alive标签将渲染过的组建缓存，避免重复加载json文件 -->
   <!-- exclude除了detail组件不被缓存,这样每次选择就会请求新的数据 -->
    <!-- <keep-alive exclude="Detail"> -->
    <keep-alive>
      <!-- 显示当前路由地址所对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  // name作用
  // 1.递归组件调用自身时使用
  // 2.对某个页面取消缓存exclude时使用
  // 3.vue-dev-tools组件名称
  name: 'App'
}
</script>

<style>
</style>
