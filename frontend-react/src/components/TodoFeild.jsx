import React, { Component } from 'react'

export default class TodoFeild extends Component {

  constructor(props) {
    super(props)
  }

  addItem = () => {

  }

  render() {
    return (
      <div className="todo-feild">
        <ul className="todo-feild__list">

        </ul>
      </div>
    )
  }

  renderTodoItem = () => {
    return (
      <li className="todo-item">

      </li>
    )
  }

  renderAddItemBtn = () => {
    return (
      <div className="todo-feild__add-item">
        
      </div>
    )
  }
}
