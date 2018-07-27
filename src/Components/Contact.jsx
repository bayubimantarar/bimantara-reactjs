import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div className="container">
            <div class="row">
                <div class="col-md-12 col-xs-12">
                    <div class="panel" id="master-panel">
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-md-12 col-xs-12">
                                    <h1>Contact Me;</h1>
                                    <p>Say hello to me!</p>
                                    <hr />
                                    <p>
                                        You can find me in another universe :
                                        <ul>
                                            <li><a href="https://linkedin.com/in/bayubimantara">linkedin</a></li>
                                        </ul>
                                    </p>
                                    <p>
                                        You can contact me via E-mail, or if you need my reply as soon as possible you can text me via Telegram or Whatsapp :
                                            <ul>
                                                <li>
                                                    <a href="mailto:me@bimantara.web.id">me@bimantara.web.id</a>
                                                </li>
                                                <li> 
                                                    Telegram: <a href="http://t.me/bayubimantara">@bayubimantara</a>
                                                </li>
                                                <li>
                                                    Whatsapp: +62-895-332-055-486
                                                </li>
                                            </ul>
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

export default About;
