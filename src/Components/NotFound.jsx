import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-xs-12">
                    <div className="panel" id="master-panel">
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-12 col-xs-12">
                                    <h1>
                                        Page Not Found <i className="twa twa-sob"></i>
                                    </h1>
                                    <hr />
                                    <p>
                                        How can you go to here? Just click back in your browser.
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

export default NotFound;
