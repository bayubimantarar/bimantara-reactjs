import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

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
                                    <img src="assets/img/mockup@1.png" className="img-responsive" />
                                </div>
                                <div className="col-md-6 col-xs-12">
                                    <h1>
                                        Bayu Bimantara;
                                    </h1>
                                    <p>
                                        Web Developer
                                    </p>
                                    <hr />
                                    <p>
                                        <b>Hello world!</b>
                                    </p> 
                                    <p>
                                        Welcome to my website, you can call me <b>Bayu</b> <i className="twa twa-grin"></i>
                                    </p>
                                    <p>
                                        Your curious about me? <NavLink to="/about">Go to here!</NavLink>
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
