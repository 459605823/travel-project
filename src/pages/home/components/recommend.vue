<template>
  <div class="">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img :src="item.imgUrl" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1710/37/37da055bc2d39755a3.img.jpg_200x200_aec295f8.jpg',
        title: '郑州方特欢乐世界',
        desc: '高科技主题乐园，方特成就欢乐梦想'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/ce/ceacda87f56ae8e3.water.jpg_200x200_8585abf4.jpg',
        title: '康百万庄园',
        desc: '黄土高原封建堡垒式建筑的代表'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1705/e9/e94733a0887e957ba3.img.jpg_200x200_58d8f507.jpg',
        title: '郑州冰雪城堡',
        desc: '这里最近很火哦，好多人都在点评它呢！'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/e9/e9b7ae23f567806ea3.img.jpg_200x200_bf985a3d.jpg',
        title: '少林寺',
        desc: '小伙伴们都收藏了，去看看吧~'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent:.2rem
  .item
    display: flex
    height: 1.9rem
    over-flow:hidden
    .item-img
      height: 1.7rem
      width: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color:#ccc
        ellipsis()
      .item-button
        line-height: .44rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        margin-top: .16rem
        color: #fff
</style>
