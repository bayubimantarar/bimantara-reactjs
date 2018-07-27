import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
              <div class="navbar-header">
                  <a class="navbar-brand" href="#">Bayu Bimantara</a>
              </div>
              <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                  <li><NavLink exact to="/" activeStyle={{color: '#00bfa9', fontWeight: 'bold'}}>Start Here</NavLink></li>
                  <li><NavLink to="/about" activeStyle={{color: '#00bfa9', fontWeight: 'bold'}}>About Me</NavLink></li>
                  <li><NavLink to="/projects" activeStyle={{color: '#00bfa9', fontWeight: 'bold'}}>My Projects</NavLink></li>
                  <li><NavLink to="/contact" activeStyle={{color: '#00bfa9', fontWeight: 'bold'}}>Contact Me</NavLink></li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
