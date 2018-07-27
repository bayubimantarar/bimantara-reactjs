import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import mockup from '../mockup.svg';

class Home extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-xs-12">
                    <div className="panel" id="master-panel">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-6 col-xs-12">
                                    <img src={mockup} className="img-responsive" alt="Mockup" />
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <h1>
                                        Bayu Bimantara;
                                    </h1>
                                    <hr />
                                    <p>
                                        Hello! I'm <b>Bayu Bimantara</b>, a Web Developer.
                                    </p>
                                    <p>
                                        Welcome to my website, curious about me? <NavLink to="/about">go here!</NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;
