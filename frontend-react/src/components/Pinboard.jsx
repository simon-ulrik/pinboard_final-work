import React, { Component } from 'react'
import StickyNote from './StickyNote'

export default class Pinboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      top: 0,
      cursorCordinates: {},
    }
  }

  componentDidMount() {
    this.setState ({
      top: document.querySelector(".pinboard").getBoundingClientRect().top
    })
  }

  setCursorCordinates = event => {
    this.setState({ cursorCordinates: {x: event.clientX, y: event.clientY} })
  }

  render() {
    const { setCursorCordinates, state: { top, cursorCordinates } } = this
    return (
      <div onMouseMove={setCursorCordinates} className="pinboard">
        <StickyNote pinboardTop={top} cursorCordinates={cursorCordinates}/>
      </div>
    )
  }
}
