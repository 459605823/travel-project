<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'cityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    font-size: .32rem
    text-align: center
    color: #fff
    background: $bgcolor
    .header-back
      color: #fff
      position: absolute
      top: 0
      left:0
      width: .64rem
      text-align: center
      font-size: .4rem
</style>
