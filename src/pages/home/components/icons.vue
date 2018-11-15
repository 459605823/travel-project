<template>
  <div class="icons">
    <swiper>
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
  data () {
    return {
      iconList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        }, {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        }, {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '郑州必游'
        }, {
          id: '0004',
          imgUrl: 'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          desc: '打卡圣地'
        }, {
          id: '0005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/f5/a963333e1fa802.png',
          desc: '当地好玩'
        }, {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          desc: '动物园'
        }, {
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          desc: '名胜古迹'
        }, {
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          desc: '泡温泉'
        }, {
          id: '0009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          desc: '主题乐园'
        }, {
          id: '0010',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
          desc: '全部玩乐'
        }
      ]
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
