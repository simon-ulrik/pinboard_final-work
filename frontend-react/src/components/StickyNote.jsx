import React, { Component } from 'react'

export default class StickyNote extends Component {

  constructor(props) {
    super(props)
    this.state = {
      offset: {},
      grabbes: false,
    }
  }

  grabSticky = event => {
    this.setState({
      grabbed: true,
      offset: { x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY }
    })
  }

  moveSticky = event => {
    if (this.state.grabbed) {
      event.target.style.top = `${this.props.cursorCordinates.y - this.props.pinboardTop - this.state.offset.y}px`
      event.target.style.left = `${this.props.cursorCordinates.x - this.state.offset.x}px`
    }
  }

  releaseSticky = () => {
    this.setState({ grabbed: false })
  }

  render() {
    const {
      state: {
        grabbed,
      },
      grabSticky,
      moveSticky,
      releaseSticky,
    } = this
    const StickyNoteClassName = grabbed ? "sticky-note--grabbed" : "sticky-note--released"
    
    return (
      <div
        onMouseDown={grabSticky}
        onMouseMove={moveSticky}
        onMouseUp={releaseSticky}
        onMouseLeave={releaseSticky}
        className={`sticky-note ${StickyNoteClassName}`}
      >
      </div>
    )
  }
}
