import React, { Component } from 'react'

export default class TextFeild extends Component {

  changeText = event => {
    this.props.data.text = event.target.value
    this.props.editData(this.props.data)
  }

  render() {
    const { changeText, renderParagraph, props: { editing, data } } = this
    const feildStyle = editing ? {display: "block"} : {display: "none"}
    const text = data !== undefined ? data.text : ""

    return (
      <div className="text-feild">
        {renderParagraph()}
        <textarea
          className="text-feild__input"
          type="text"
          value={text}
          onChange={changeText}
          style={feildStyle}
        />
      </div>
    )
  }

  renderParagraph = () => {
    const paragraphStyle = this.props.editing ? {display: "none"} : {display: "block"}
    let lines = this.props.data.text.split("\n")

    lines = lines.map((line, key) => {
      if (line.length > 40) {
        let newLines = []; let temp_str = ""
        line.split("").forEach((char, i) => {
          temp_str += char
          if (temp_str.length >= 40 || i >= line.length) {
            newLines.push(<p key={`${key}-${i}`}>{temp_str}</p>)
            temp_str = ""
          }
        })
        return newLines
      }
      return <p key={`${key}`}>{line}</p>
    })

    return (
      <div className="text-feild__paragraph" style={paragraphStyle}>
        {lines}
      </div>
    )
  }
}
