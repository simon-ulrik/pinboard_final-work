import React, { Component } from 'react'

export default class StickyNote extends Component {

  constructor(props) {
    super(props)
    this.state = {
      offset: {},
      grabbed: false,
      positionStyle: {
        top: "0px",
        left: "0px"
      }
    }
  }

  componentDidMount() {
    if (localStorage[`${this.props.data.key}-x`] && [`${this.props.data.key}-y`]) {
      this.setState({
        positionStyle: {
          top: localStorage[`${this.props.data.key}-x`],
          left: localStorage[`${this.props.data.key}-y`]
        }
      })
    }
  }

  grabSticky = event => {
    this.setState({
      grabbed: true,
      offset: { x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY }
    })
    this.props.grabbed(this.props.data.key)
  }

  moveSticky = () => {
    if (this.state.grabbed) {
      this.setState({
        positionStyle: {
          top: `${this.props.cursorCordinates.y - this.props.pinboardTop - this.state.offset.y}px`,
          left: `${this.props.cursorCordinates.x - this.state.offset.x}px`
        }
      })
      localStorage[`${this.props.data.key}-x`] = `${this.props.cursorCordinates.y - this.props.pinboardTop - this.state.offset.y}px`
      localStorage[`${this.props.data.key}-y`] = `${this.props.cursorCordinates.x - this.state.offset.x}px`
    }
  }

  releaseSticky = () => {
    this.setState({ grabbed: false })
  }

  render() {
    const {
      state: {
        grabbed,
        positionStyle,
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
        style={positionStyle}
      >
        key: {this.props.data.key}
      </div>
    )
  }
}
