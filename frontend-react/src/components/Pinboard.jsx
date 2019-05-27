import React, { Component } from 'react'
import StickyNote from './StickyNote'

export default class Pinboard extends Component {

  constructor(props) {
    super(props)
    this.zIndexOrderChange = this.zIndexOrderChange.bind(this)
    this.state = {
      top: 0,
      cursorCordinates: {},
      noteList: [1]
    }
  }

  componentDidMount() {
    this.setState ({
      top: document.querySelector(".pinboard").getBoundingClientRect().top,
      noteList: localStorage.noteList ? localStorage.noteList.split(",").map( str => { return Number(str) }) : this.state.noteList
    })
  }

  zIndexOrderChange(event) {
    let list = this.state.noteList
    list.forEach((key, i) => {
      if (key === event) {
        list.splice(i, 1); list.push(key)
        this.setState({ noteList: list })
        localStorage.noteList = list
      }
    })
  }

  setCursorCordinates = event => {
    this.setState({ cursorCordinates: {x: event.clientX, y: event.clientY} })
  }

  render() {
    const { setCursorCordinates, renderStickyNotes } = this
    return (
      <div onMouseMove={setCursorCordinates} className="pinboard">
        {renderStickyNotes()}
      </div>
    )
  }

  renderStickyNotes = () => {
    const { zIndexOrderChange, state: { noteList, top, cursorCordinates } } = this
    return noteList.map(key => {
      return <StickyNote
        id={key}
        key={key}
        pinboardTop={top}
        cursorCordinates={cursorCordinates}
        grabbed={zIndexOrderChange}
      />
    })
  }
}
