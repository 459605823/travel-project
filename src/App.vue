<template>
  <div id="app">
    <!-- keep-alive标签将渲染过的组建缓存，避免重复加载json文件 -->
    <keep-alive>
      <!-- 显示当前路由地址所对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
