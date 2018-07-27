import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class About extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
    <div className="col-md-12 col-xs-12">
        <div className="panel" id="master-panel">
            <div className="panel-body">
                <h1>
                    About Me;
                </h1>
                <p>
                    A little more about me.
                </p>
                <hr />
                <p>
                    My name is <b>Bayu Bimantara</b> you can call me <b>Bayu</b>.<br />
                    I decide to become Web Developer as my career path.<br/>
                    I'm Freelance Web Developer based in Bandung, West java.<br />
                    Currently I'm an <b>Informatics Engineering</b> student at <a href="stmik-bandung.ac.id">STMIK Bandung</a>.
                </p>
                <p>
                    Love spending way too much time on the computer, <br />
                    also enthusiast with the Web Technology specially on Back-end.<br />
                    I'm using <a href="laravel.com">Laravel</a> on the Back-end, and using <a href="reacjs.org">ReactJS</a> on the Front-end.<br />
                    Sometimes I'm learning about hybrid application using <a href="https://ionicframework.com/">Ionic Framework</a>.
                </p>

                <p>
                    To develope what I learn,<br /> I'm working on my <b>undone</b> personal projects.<br /> Some my personal projects will be shared on my website.<br />
                </p>
                <p>
                    Want to see my <NavLink to="/projects">projects</NavLink>? or scroll down to see my skills.
                </p>
            </div>
        </div>
    </div>
</div>

<div className="row" id="master">
    <h1>My Skills</h1>
    
    <div className="col-md-3 col-xs-12">
        <div className="panel" id="master-panel">
            <div className="panel-body">
                <div>
                    <i className="devicon-html5-plain colored skills-icon"></i>
                </div>
                <h1>
                    HTML
                </h1>
                <p>
                    Learn the basics and how to write semantic <b>HTML</b>, and structure the DOM properly.
                </p>
            </div>
        </div>
    </div>
    <div className="col-md-3 col-xs-12">
        <div className="panel" id="master-panel">
            <div className="panel-body">
                <div>
                    <i className="devicon-css3-plain colored skills-icon"></i>
                </div>
                <h1>
                    CSS
                </h1>
                <p>
                    Learn the basics of <b>CSS</b> how to use Grid, Flexbox, Media Queries, and Responsive Websites.
                </p>
            </div>
        </div>
    </div>
    <div className="col-md-3 col-xs-12">
        <div className="panel" id="master-panel">
            <div className="panel-body">
                <div>
                    <i className="devicon-javascript-plain colored skills-icon"></i>
                </div>
                <h1>
                    JavaScript
                </h1>
                <p>
                    Learn the syntax, basics constructs, manipulate DOM, ajax (XHR), es6, and modular <b>JavaScript</b>.
                </p>
            </div>
        </div>
    </div>
    <div className="col-md-3 col-xs-12">
        <div className="panel" id="master-panel">
            <div className="panel-body">
                <div>
                    <i className="devicon-php-plain colored skills-icon"></i>
                </div>
                <h1>
                    PHP
                </h1>
                <p>
                    Learn the syntax, Procedural PHP, Object Oriented Programming (OOP), PDO.
                </p>
            </div>
        </div>
    </div>
    <div className="col-md-3 col-xs-12">
        <div className="panel" id="master-panel">
            <div className="panel-body">
                <div>
                    <i className="devicon-bootstrap-plain colored skills-icon"></i>
                </div>
                <h1>
                    Bootstrap
                </h1>
                <p>
                    Learn container, Grid System, Responsive Websites, Components, Media Objects.
                </p>
            </div>
        </div>
    </div>
    <div className="col-md-3 col-xs-12">
        <div className="panel" id="master-panel">
            <div className="panel-body">
                <div>
                    <i className="devicon-react-original colored skills-icon"></i>
                </div>
                <h1>
                    ReactJS
                </h1>
                <p>
                    Learn the syntax, SPA, react router, axios, npm, yarn, babel, webpack, jest.
                </p>
            </div>
        </div>
    </div>
    <div className="col-md-3 col-xs-12">
        <div className="panel" id="master-panel">
            <div className="panel-body">
                <div>
                    <i className="devicon-laravel-plain colored skills-icon"></i>
                </div>
                <h1>
                    Laravel
                </h1>
                <p>
                    Learn the basics, MVC, REST API, Eloquent, artisan, Unit test & Browser test.
                </p>
            </div>
        </div>
    </div>
    <div className="col-md-3 col-xs-12">
        <div className="panel" id="master-panel">
            <div className="panel-body">
                <div>
                    <i className="devicon-mysql-plain colored skills-icon"></i>
                </div>
                <h1>
                    MySQL
                </h1>
                <p>
                    Learn <b>SQL</b> syntax, Aggregate Functions, Logical Operators, String Function, SQL Joins.
                </p>
            </div>
        </div>
    </div>
</div>
        </div>
    );
  }
}

export default About;
