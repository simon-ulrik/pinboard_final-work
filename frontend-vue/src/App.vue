<template>
  <div class="app">
    <!-- <header>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </header> -->
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


