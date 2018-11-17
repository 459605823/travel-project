<template>
  <ul class="list">
    <li class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick">
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'cityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    // offsetTop 指元素距离上方或父级定位元素的距离
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 函数节流：减少移动时handleTouchMove执行次数
        this.timer = setTimeout(() => {
          // 当鼠标事件发生时，鼠标相对于浏览器y轴的位置
          // 所以此时要减去header的79像素高度
          const touchY = e.touches[0].clientY - 79
          // 两者间距除以每个字母元素高度即当前元素对应的下标
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            // 将此时滑动到的字母触发事件传出去
            // list.vue接收后显示对应的区域
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
 .list
   position: absolute
   display: flex
   flex-direction: column
   justify-content: center
   align-item: center
   top: 1.58rem
   right: 0
   bottom: 0
   width: .4rem
   .item
     line-height: .4rem
     color: $bgcolor
</style>
