<template>
  <div @mousemove="setCursorCordinates($event)" class="pinboard">
    <StickyNote :pinboardTop="top" :cursorCordinates="cursorCordinates"/>
  </div>
</template>

<script>
import StickyNote from './StickyNote.vue'

export default {
  data() {
    return {
      top: 0,
      cursorCordinates: {},
    }
  },
  mounted: function () {
    this.top = document.querySelector(".pinboard").getBoundingClientRect().top
  },
  components: {
    StickyNote,
  },
  methods: {
    setCursorCordinates: function (event) {
      this.cursorCordinates = {x: event.x, y: event.y}
    }
  },
}
</script>

