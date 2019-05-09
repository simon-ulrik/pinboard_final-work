<template>
  <div class="menu-container">
    <div class="open-menu-button">
      <i class="material-icons" @click="toggleOpen">menu</i>
    </div>

    <div  class="side-menu"
          :class="{
            'side-menu--closed': (!open && runAnimation),
            'side-menu--open': (open && runAnimation)
          }"
    >

      <div class="side-menu__item close-menu-button">
        <i class="material-icons" @click="toggleOpen">arrow_back</i>
        <h2 @click="toggleOpen">Close menu</h2>
      </div>
      
      <nav class="side-menu__item menu-nav">
        <ul class="menu-nav__list">
          <li class="menu-nav__list__item">
            <router-link to="/">
              <i  class="material-icons"
                  :class="{'link--active': (this.$route.path === '/')}"
                  @click="toggleOpen"
              >
                home
              </i>
            </router-link>
          </li>
          <li class="menu-nav__list__item">
            <router-link  to="/about">
              <i  class="material-icons"
                  :class="{'link--active': (this.$route.path === '/about')}"
                  @click="toggleOpen"
              >
                help_outline
              </i>
            </router-link>
          </li>
        </ul>
      </nav>

    </div>

    <div class="invis-overlay" :class="{'invis-overlay--active': open }" @click="toggleOpen"></div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      runAnimation: false
    }
  },
  methods: {
    toggleOpen: function () {
      this.open = !this.open
      this.runAnimation = true
    }
  },
}
</script>
