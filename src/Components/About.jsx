import React, { Component } from 'react';

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
                    Just another Web Developer
                </p>
                <hr />
                <p>
                    My name is <b>Bayu Bimantara</b> you can call me <b>Bayu</b>, <br />
                    I decide to become Web Developer as my career path.<br/>
                    I'm Freelance Web Developer based in Bandung, West java.<br />
                    Currently I'm an <b>Informatics Engineering</b> student at <b>STMIK Bandung</b>.
                </p>
                <p>
                    I'm enthusiast with Web Technology, especially on Back-end.<br />
                    Now I'm using <b>Laravel</b>, <b>Lumen</b>, <b>Vue.Js</b>. It is always difficult in the first time, but I always learn and try.
                </p>
                <p>
                    To develope what I learn,<br /> I'm working on my <b>undone</b> personal projects.<br /> Some my <b>published</b> personal project will be shared here.<br />
                    I'm building website apps with <b>Laravel</b> and <b>Vue.Js</b> and sometimes I building mobile apps using <b>Ionic Framework</b>.<br />
                </p>
                <p>
                    Want to see my projects? <a href="#!/projects">click here!</a>
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
                    HTML5
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
                    CSS3
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
                    PHP7
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
