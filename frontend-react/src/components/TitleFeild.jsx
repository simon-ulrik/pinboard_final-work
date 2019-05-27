import React, { Component } from 'react'

export default class TitleFeild extends Component {

  changeTitle = event => {
    this.props.data.title = event.target.value
    this.props.editData(this.props.data)
  }

  render() {
    const { changeTitle, props: { editing, data } } = this
    const titleStyle = editing ? {display: "none"} : {display: "block"}
    const feildStyle = editing ? {display: "block"} : {display: "none"}
    const title = data !== undefined ? data.title : ""

    return (
      <div className="title-feild">
        <h1 style={titleStyle}>{title}</h1>
        <input
          className="title-feild__input"
          type="text"
          maxLength="20"
          value={title}
          size={title.length > 0 ? title.length : 1 }
          onChange={changeTitle}
          style={feildStyle}
        />
      </div>
    )
  }
}
