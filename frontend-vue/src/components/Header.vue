<template>
  <header class="header header--main">
    <SideMenu/>
    <div class="header__item">
      <h1>Simons coola anslagstavla!</h1>
    </div>
  </header>
</template>

<script>
import SideMenu from './SideMenu.vue'

export default {
  components: {
    SideMenu,
  }
} 
</script>
