<template>
  <div @mousemove="setCursorCordinates($event)" class="pinboard">
    <StickyNote
      v-for="(key) in noteList"
      :data="notes[key]"
      :key="key"
      :pinboardTop="top"
      :cursorCordinates="cursorCordinates"
      @grabbed="zIndexOrderChange($event)"
    />
  </div>
</template>

<script>
import StickyNote from './StickyNote.vue'

export default {
  components: {
    StickyNote,
  },
  data() {
    return {
      top: 0,
      cursorCordinates: {},
      noteList: [1,2,3,4],
      notes: {
        "1": {
          key: 1,
          title: "",
          text: "",
          todo: "",
          picSrc: "",
        },
        "2": {
          key: 2,
          title: "",
          text: "",
          todo: "",
          picSrc: "",
        },
        "3": {
          key: 3,
          title: "",
          text: "",
          todo: "",
          picSrc: "",
        },
        "4": {
          key: 4,
          title: "",
          text: "",
          todo: "",
          picSrc: "",
        }
      },
    }
  },
  mounted() {
    this.top = this.$el.getBoundingClientRect().top
    this.noteList = localStorage.noteList ? localStorage.noteList.split(",").map( str => { return Number(str) }) : this.noteList
  },
  methods: {
    zIndexOrderChange(event) {
      let list = this.noteList
      list.forEach((key, i) => {
        if (key === event) {
          list.splice(i, 1); list.push(key)
          localStorage.noteList = this.noteList = list
        }
      })
    },
    setCursorCordinates(event) {
      this.cursorCordinates = {x: event.x, y: event.y}
    },
  },
}
</script>

