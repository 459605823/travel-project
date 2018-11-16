<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import cityHeader from './components/header.vue'
import citySearch from './components/search.vue'
import cityList from './components/list.vue'
import cityAlphabet from './components/alphabet.vue'
export default {
  name: 'City',
  components: {
    cityHeader,
    citySearch,
    cityList,
    cityAlphabet
  }
}
</script>

<style lang="stylus" scoped>

</style>
