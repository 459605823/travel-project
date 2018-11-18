<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img src="//img1.qunarzz.com/sight/p0/1609/bf/bf08848479f88943a3.img.png_600x330_dfd64a94.png" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">郑州方特欢乐世界(AAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe600;</span>43</div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import commonGallary from 'common/gallary/gallary.vue'
export default {
  name: 'Banner',
  components: {
    commonGallary
  },
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1609/bf/bf08848479f88943a3.img.png_r_800x800_337e3f8c.png', 'http://img1.qunarzz.com/sight/p0/1609/6b/6b0c9a14906e90faa3.img.jpg_r_800x800_d98bafb5.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position:relative
    overflow:hidden
    height:0
    padding-bottom:55%
    .banner-img
      width: 100%
    .banner-info
      color:#fff
      position: absolute
      left:0
      right:0
      bottom:0
      line-height:.6rem
      display:flex
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        font-size:.32rem
        padding:0 .2rem
        flex:1
      .banner-number
        padding:0 .4rem
        height:.32rem
        line-height:.32rem
        margin-top:.14rem
        border-radius:.2rem
        background:rgba(0, 0, 0, .8)
        font-size:.24rem
        .banner-icon
          font-size:.24rem
          margin-right: .08rem
</style>
