import React, { Component } from 'react'
import Pinboard from '../components/Pinboard'

export default class Home extends Component {
  render() {
    return (
      <div className="page page--home">
        <Pinboard/>
      </div>
    )
  }
}
