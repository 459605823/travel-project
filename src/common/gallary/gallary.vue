<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，Swiper更新。
        observeParents: true,
        // 当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-container
    overflow: visible
  .container
    display:flex
    flex-direction:column
    justify-content:center
    position: fixed
    left:0
    top:0
    right:0
    bottom:0
    background:#000
    z-index:99
    .wrapper
      width:100%
      padding-bottom:100%
      height:0
      .gallary-img
        width:100%
      .swiper-pagination
        bottom: -1rem
        color: #fff
</style>
