import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Projects extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-xs-12">
                    <div className="panel" id="master-panel">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-12 col-xs-12">
                                    <h1>My Projects;</h1>
                                    <p>Get idea &raquo; Make design &raquo; Start code &raquo; Launch <i className="twa twa-white-check-mark"></i></p>
                                    <hr />
                                    <p>
                                        Honestly I'm a lazy person, so I found the solution to make me not lazy anymore. <br />
                                        I build some personal projects , sometimes I hire by someone to build an application. <br />
                                        Not every my projects are the best projects ever, But at least I'm not lazy anymore right?  <i className="twa twa-joy"></i><br />
                                    </p>
                                    <p>
                                        You want hire me? yes! thank you, here <NavLink to="/contact">say hello</NavLink>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-12">
                    <div className="panel" id="master-panel">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-12 col-xs-12">
                                    <h1><a href="https://github.com/bayubimantarar/penggajian">Penggajian</a></h1>
                                    <hr />
                                    <p>
                                        This application called <b>"Aplikasi Penggajian PT. Techno Multi Utama"</b>. This application are handle salary of the employee. The accountant of PT. Techno Multi Utama are use this application.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xs-12">
                    <div className="panel" id="master-panel">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-12 col-xs-12">
                                    <h1><a href="https://github.com/bayubimantarar/penggajian-mobile">Penggajian Mobile</a></h1>
                                    <hr />
                                    <p>
                                        Every single employee of PT. Techno Multi Utama have this application. So the employee can have an easy access to see their salary every month of payroll.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-xs-12">
                    <div className="panel" id="master-panel">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-12 col-xs-12">
                                    <h1><a href="https://github.com/bayubimantarar/kuesioner">Kuesioner</a></h1>
                                    <hr />
                                    <p>
                                        I have a task from college, build an application for alumni so the college can trace alumni who worked in Informatic field or non Informatic field.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xs-12">
                    <div className="panel" id="master-panel">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-12 col-xs-12">
                                    <h1><a href="https://github.com/bayubimantarar/penggajian">Aira</a></h1>
                                    <hr />
                                    <p>
                                        Want buy some flight tickets? I'm hire by <b>PT. Aira Wisata Mandiri</b>, for build an application for handle customers who want to buy a flight tickets.
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

export default Projects;
