import React, { Component } from 'react'
import SideMenu from './SideMenu';

export default class Header extends Component {
  render() {
    return (
      <header className="header header--main">
        <SideMenu/>
        <h1>Simons coola anslagstavla!</h1>
      </header>
    )
  }
}
