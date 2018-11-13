<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import homeHeader from './components/header.vue'
import homeSwiper from './components/swiper.vue'
export default {
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper
  }
}
</script>

<style>
</style>
