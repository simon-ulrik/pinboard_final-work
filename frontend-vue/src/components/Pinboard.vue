<template>
  <div @mousemove="setCursorCordinates($event)" class="pinboard">
    <StickyNote
      v-for="(index) in noteList"
      :data="notes[index]"
      :key="index"
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
      reset: false,
      noteList: [1,2,3,4],
      notes: {
        "1": {
          key: 1,
          title: "",
          text: "",
          todo: "",
          picSrc: "",
          zIndex: ""
        },
        "2": {
          key: 2,
          title: "",
          text: "",
          todo: "",
          picSrc: "",
          zIndex: ""
        },
        "3": {
          key: 3,
          title: "",
          text: "",
          todo: "",
          picSrc: "",
          zIndex: ""
        },
        "4": {
          key: 4,
          title: "",
          text: "",
          todo: "",
          picSrc: "",
          zIndex: ""
        }
      },
    }
  },
  mounted() {
    this.top = this.$el.getBoundingClientRect().top
    if (localStorage.noteOrder) {
      this.noteList = localStorage.noteOrder.split(",").map( str => { return Number(str) })
    }
  },
  methods: {
    zIndexOrderChange(event) {
      let list = this.noteList
      list.forEach((key, i) => {
        if (key === event) {
          list.splice(i, 1); list.push(key)
          localStorage.noteOrder = this.noteList  = list
        }
      })
    },
    setCursorCordinates(event) {
      this.cursorCordinates = {x: event.x, y: event.y}
    },
  },
}
</script>

