<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市名或拼音" @blur="handleInputBlur">
  </div>
</template>

<script>
export default {
  name: 'citySearch',
  methods: {
    handleInputBlur (e) {
      console.log(e.target.value)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgcolor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      line-height: .62rem
      text-align: center
      color: #666
      border-radius: .06rem
      padding: 0 .1rem
</style>
