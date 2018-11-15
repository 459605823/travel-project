<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <!-- 根据页数循环输出swiper-slide -->
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <!-- page为该页所包含的icon -->
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" class="icon-img-content">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'homeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8) // 1或2
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
      // pages为一个二维数组[[],[]]
      // pages:Array[2]
      // 0:Array[8]
      // 1:Array[2]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>. .swiper-container
    /* width:100% padding-bottom:50% 表示宽高比为2:1*/
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      /* width:25% padding-bottom:25% 表示宽高比为1:1*/
      position:relative
      over-flow:hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top:0
        left:0
        right:0
        bottom:.44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          height: 100%
          margin: 0 auto
      .icon-desc
        position:absolute
        left:0
        right:0
        bottom:0
        height: .44rem
        line-height: .44rem
        color: $darkTextColor
        text-align:center
        /* 多出字体以...显示 */
        ellipsis()
</style>
