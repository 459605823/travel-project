<template>
  <div>
    <router-link class="header-abs" tag="div" to="/" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // 获取当前网页被卷去的高度
      const top = document.documentElement.scrollTop
      if (top > 60) {
        // opacity的值由滚动的高度决定
        // 向下滚动越多，opacity越大
        let opacity = top / 140
        // 设置opacity的最大值为1
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    // 监听网页的滚动事件
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position:absolute
    left:.2rem
    top:.2rem
    width:.8rem
    height:.8rem
    border-radius:.4rem
    text-align:center
    line-height:.8rem
    background:rgba(0, 0, 0, .8)
    .header-abs-back
      color:#fff
      font-size:.4rem
  .header-fixed
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    font-size: .32rem
    text-align: center
    color: #fff
    background: $bgcolor
    .header-fixed-back
      color: #fff
      position: absolute
      top: 0
      left:0
      width: .64rem
      text-align: center
      font-size: .4rem
</style>
