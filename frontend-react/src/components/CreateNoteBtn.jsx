import React, { Component } from 'react'

export default class CreateNoteBtn extends Component {

  createNote = () => {
    let noteList = localStorage.noteList.split(",").map( str => { return Number(str) })
    const key = noteList.length + 1
    noteList.push(key)
    localStorage.noteList = noteList
  }

  render() {
    const { createNote } = this

    return (
      <div className="create-note-btn side-menu__item">
        <i className="material-icons" onClick={createNote}>
          add_box
        </i>
      </div>
    )
  }

}
