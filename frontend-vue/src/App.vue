<template>
  <div class="app">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </header>
    <div class="views">
      <router-view/>
    </div>
  </div>
</template>

<script>
import './index.css'

export default {
  
}
</script>
