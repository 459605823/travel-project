<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-down">&#xe605;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  props: {
    city: String
  }
}
</script>
<!-- scoped表示这个类的样式只在该组件中有效 -->
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: $headerHeight
    color: #fff
    background: $bgcolor
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      color: #ccc
      flex: 1
      height: .64rem
      line-height: .64rem
      background: #fff
      border-radius: .1rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color: #fff
      .arrow-down
        margin-left: -.04rem
        font-size: .24rem
</style>
