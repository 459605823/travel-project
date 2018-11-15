<template>
  <!-- 外层使用一层div包裹，在图片未加载完成时，div撑开高度，防止下部内容发生抖动 -->
  <div class="wrapper">
   <swiper :options="swiperOption" v-if="showSwiper">
     <!-- 一个swiper-slide就是一页,直接在swiper-slide上使用v-for就是循环输出多个swiper-slide也就是多个页面 -->
     <swiper-slide v-for="item of swiperList" :key="item.id">
       <img class="swiper-img" :src="item.imgUrl" />
     </swiper-slide>
     <!-- 页码内容 -->
     <div class="swiper-pagination"  slot="pagination"></div>
   </swiper>
  </div>
</template>

<script>
export default {
  name: 'homeSwiper',
  props: {
    swiperList: Array
  },
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

<style lang="stylus" scoped>
 /* 样式穿透：设置所有子组件中的这个类 */
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    width:100%
    overflow:hidden
    height: 0
    padding-bottom: 31.25%
    .swiper-img
      width: 100%
</style>
