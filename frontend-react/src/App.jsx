import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './views/Home';
import About from './views/About';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </header>
          <div className="views">
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" component={About}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
