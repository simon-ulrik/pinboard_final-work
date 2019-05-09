import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class SideMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
      runAnimation: false
    }
  }

  toggleOpen = () => {
    this.setState({open: !this.state.open, runAnimation: true})
  }

  render() {
    return (
      <div className="menu-container">
        <div className="open-menu-button">
          <i className="material-icons" onClick={() => this.toggleOpen()}>menu</i>
        </div>
        {this.renderMenu()}
        {this.renderOverlay()}
      </div>
    )
  }

  renderOverlay = () => {
    const overlayClassName = this.state.open ? "invis-overlay--active" : ""
    return <div className={`invis-overlay ${overlayClassName}`} onClick={() => this.toggleOpen()}></div>
  }

  renderMenu = () => {
    const { toggleOpen, state: { open, runAnimation } } = this
    const menuClassName = ( open && runAnimation ) ? "side-menu--open" : ( !open && runAnimation ) ? "side-menu--closed" : ""
    const homeLinkClassName = ( window.location.pathname === "/" ) ? "link--active" : ""
    const aboutLinkClassName = ( window.location.pathname === "/about" ) ? "link--active" : ""

    return (
      <div className={`side-menu ${menuClassName}`}>

        <div className="side-menu__item close-menu-button">
          <i className="material-icons" onClick={() => toggleOpen()}>arrow_back</i>
          <h2 onClick={() => toggleOpen()}>Close menu</h2>
        </div>
        
        <nav className="side-menu__item menu-nav">
          <ul className="menu-nav__list">
            <li className="menu-nav__list__item" onClick={() => toggleOpen()}>
              <Link to="/">
                <i className={`material-icons ${homeLinkClassName}`}>home</i>
              </Link>
            </li>
            <li className="menu-nav__list__item" onClick={() => toggleOpen()}>
              <Link to="/about">
                <i className={`material-icons ${aboutLinkClassName}`}>help_outline</i>
              </Link>
            </li>
          </ul>
        </nav>

      </div>
    )
  }

}
