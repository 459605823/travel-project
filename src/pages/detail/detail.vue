<template>
    <div>
      <banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></banner>
      <detail-header></detail-header>
      <div class="content">
        <detail-list :list="list"></detail-list>
      </div>
    </div>
</template>

<script>
import Banner from './components/banner.vue'
import DetailHeader from './components/header.vue'
import DetailList from './components/list.vue'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    Banner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: [],
      lastId: ''
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json?id=' + this.lastId)
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.lastId = this.$route.params.id
    this.getDetailInfo()
  },
  activated () {
    // 如果切换，则请求新的详情页信息
    if (this.lastId !== this.$route.params.id) {
      this.lastId = this.$route.params.id
      this.getDetailInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
