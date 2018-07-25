import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import './App.css';

class App extends Component {
  render() {
    return (
  <html lang="eng">
  <head>
    <meta name="description" content="I'm Web Developer from Bandung, West java. My name is Bayu Bimantara" />
    <meta name="keywords" content="bayu bimantara, Bayu Bimantara, bayu, bimantara, bimantara.web.id, bayu bimantara web developer, web programmer, php programmer, laravel programmer, codeigniter programmer, reactjs, reactjs programmer, programmer bandung, programmer stmik bandung, stmik bandung, STMIK Bandung, Ionic Framework, ionic, html, css, php, javascript, angularjs" />
    <meta name="author" content="Bayu Bimantara" />
    <meta name="google-site-verification" content="U78ID3MWGRrPis8s6EFqqKOo0M1J4STI20VZNd6F3Ho" />
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet" />
    <link href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css" rel="stylesheet" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-117927487-1"></script>
  </head>
  <body>
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
          <Route component={NotFound} />
        </Switch>
        <footer>
          <span>&copy; 2018</span>
        </footer>
      </div>
    </Router>
  </body>
  </html>
    );
  }
}

export default App;
