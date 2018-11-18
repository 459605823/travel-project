<template>
    <div>
      <banner></banner>
      <detail-header></detail-header>
      <div class="content"></div>
    </div>
</template>

<script>
import Banner from './components/banner.vue'
import DetailHeader from './components/header.vue'
export default {
  name: 'Detail',
  components: {
    Banner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
