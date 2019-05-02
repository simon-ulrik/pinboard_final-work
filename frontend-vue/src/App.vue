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

<style>
  .app {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>
