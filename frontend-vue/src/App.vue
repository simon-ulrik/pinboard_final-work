<template>
  <div class="app">
    <Header></Header>
    <div class="views">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header,
  }
}
</script>

<style lang="scss">
@import './index.css'
</style>


