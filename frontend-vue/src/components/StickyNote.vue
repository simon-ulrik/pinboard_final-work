<template>
  <div
    @mousedown="grabSticky($event)"
    @mousemove="moveSticky($event)"
    @mouseup="releaseSticky"
    @mouseleave="releaseSticky"
    class="sticky-note"
    :class="{ 'sticky-note--grabbed': grabbed, 'sticky-note--released': !grabbed }"
  >
  </div>
</template>

<script>
export default {
  data() {
    return {
      offset: {},
      grabbed: false,
    }
  },
  props: ['pinboardTop', 'cursorCordinates'],
  methods: {
    grabSticky: function (event) {
      this.grabbed = true
      this.offset = { x: event.offsetX, y: event.offsetY }
    },
    moveSticky: function (event) {
      if (this.grabbed) {
        event.target.style.top = `${this.cursorCordinates.y - this.pinboardTop - this.offset.y}px`
        event.target.style.left = `${this.cursorCordinates.x - this.offset.x}px`
      }
    },
    releaseSticky: function () {
      this.grabbed = false
    },
  },
}
</script>
