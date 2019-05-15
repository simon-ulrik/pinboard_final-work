<template>
  <div
    @mousedown="grabSticky($event)"
    @mousemove="moveSticky($event)"
    @mouseup="releaseSticky"
    @mouseleave="releaseSticky"
    class="sticky-note"
    :class="{ 'sticky-note--grabbed': grabbed, 'sticky-note--released': !grabbed }"
    :style="positionStyle"
  >
    key: {{data.key}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      offset: {},
      grabbed: false,
      positionStyle: {
        top: "0px",
        left: "0px",
      },
    }
  },
  props: ['pinboardTop', 'cursorCordinates', 'data'],
  mounted() {
    if (localStorage[`${this.data.key}-x`] && [`${this.data.key}-y`]) {
      this.positionStyle = {
      top: localStorage[`${this.data.key}-x`],
      left: localStorage[`${this.data.key}-y`]
      }
    }
  },
  methods: {
    grabSticky(event) {
      this.grabbed = true
      this.offset = { x: event.offsetX, y: event.offsetY }
      this.$emit('grabbed', this.data.key)
    },
    moveSticky(event) {
      if (this.grabbed) {
        this.positionStyle = {
          top: `${this.cursorCordinates.y - this.pinboardTop - this.offset.y}px`,
          left: `${this.cursorCordinates.x - this.offset.x}px`
        }
        localStorage[`${this.data.key}-x`] = `${this.cursorCordinates.y - this.pinboardTop - this.offset.y}px`
        localStorage[`${this.data.key}-y`] = `${this.cursorCordinates.x - this.offset.x}px`
      }
    },
    releaseSticky() {
      this.grabbed = false
    },
  },
}
</script>
