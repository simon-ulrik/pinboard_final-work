import React, { Component } from 'react'
import TitleFeild from './TitleFeild'
import TextFeild from './TextFeild'

export default class StickyNote extends Component {

  constructor(props) {
    super(props)
    this.editData = this.editData.bind(this)
    this.state = {
      offset: {},
      grabbed: false,
      editing: false,
      locked: false,
      positionStyle: {
        top: "0px",
        left: "0px"
      },
      data: {
        title: "",
        text: "",
        todo: []
      }
    }
  }

  componentDidMount() {
     this.setState({
      positionStyle: {
        top: localStorage[`${this.props.id}-x`],
        left: localStorage[`${this.props.id}-y`]
      },
      data: {
        title: localStorage[`${this.props.id}-title`] ? localStorage[`${this.props.id}-title`] : "",
        text: localStorage[`${this.props.id}-text`] ? localStorage[`${this.props.id}-text`] : "",
        todo: localStorage[`${this.props.id}-todo`] ? localStorage[`${this.props.id}-todo`].split(",") : []
      },
      locked: localStorage[`${this.props.id}-locked`] === 'true' ? true : false
    })
  }

  grabSticky = event => {
    if (!this.state.locked) {
      this.setState({
        grabbed: true,
        offset: { x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY }
      })
      this.props.grabbed(this.props.id)
    }
  }

  moveSticky = () => {
    if (this.state.grabbed) {
      this.setState({
        positionStyle: {
          top: `${this.props.cursorCordinates.y - this.props.pinboardTop - this.state.offset.y}px`,
          left: `${this.props.cursorCordinates.x - this.state.offset.x}px`
        }
      })
      localStorage[`${this.props.id}-x`] = `${this.props.cursorCordinates.y - this.props.pinboardTop - this.state.offset.y}px`
      localStorage[`${this.props.id}-y`] = `${this.props.cursorCordinates.x - this.state.offset.x}px`
    }
  }

  releaseSticky = () => {
    this.setState({ grabbed: false })
  }

  lockSticky = () => {
    this.setState({ locked: !this.state.locked })
    localStorage[`${this.props.id}-locked`] = !this.state.locked
  }

  editData = (data) => {
    this.setState({ data: data })
    localStorage[`${this.props.id}-title`] = data.title
    localStorage[`${this.props.id}-text`] = data.text
    localStorage[`${this.props.id}-todo`] = data.todo
  }

  render() {
    const {
      state: {
        grabbed,
        editing,
        positionStyle,
        data
      },
      grabSticky,
      moveSticky,
      releaseSticky,
      renderEditBtn,
      renderLockBtn,
      editData
    } = this
    const StickyNoteClassName = grabbed ? "sticky-note--grabbed" : "sticky-note--released"
    
    return (
      <div
        onMouseMove={moveSticky}
        onMouseUp={releaseSticky}
        onMouseLeave={releaseSticky}
        className={`sticky-note ${StickyNoteClassName}`}
        style={positionStyle}
      >
        <div className="grabber" onMouseDown={grabSticky}>
          <div className="grabber__overlay"></div>
          <i className="material-icons">reorder</i>
        </div>
        <TitleFeild editing={editing} editData={editData} data={data}/>
        <TextFeild editing={editing} editData={editData} data={data}/>
        <div className="sticky-note__btns">
          {renderEditBtn()}
          {renderLockBtn()}
        </div>
      </div>
    )
  }

  renderEditBtn = () => {
    const btnIcon = this.state.editing ? "done" : "edit"

    return (
      <div
        className="sticky-note__btn"
        onClick={ () => this.setState({ editing: !this.state.editing }) }
      >
        <i className="material-icons">{btnIcon}</i>
      </div>
    )
  }

  renderLockBtn = () => {
    const btnIcon = this.state.locked ? "lock" : "lock_open"

    return (
      <div
        className="sticky-note__btn"
        onClick={this.lockSticky}
      >
        <i className="material-icons">{btnIcon}</i>
      </div>
    )
  }

}
