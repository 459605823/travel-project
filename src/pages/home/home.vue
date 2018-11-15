<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import homeHeader from './components/header.vue'
import homeSwiper from './components/swiper.vue'
import homeIcons from './components/icons.vue'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcons
  }
}
</script>

<style>
</style>
