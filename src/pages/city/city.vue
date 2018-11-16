<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import cityHeader from './components/header.vue'
import citySearch from './components/search.vue'
export default {
  name: 'City',
  components: {
    cityHeader,
    citySearch
  }
}
</script>

<style lang="stylus" scoped>

</style>
