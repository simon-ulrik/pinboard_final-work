import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './views/Home';
import About from './views/About';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header/>
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
