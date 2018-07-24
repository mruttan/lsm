import React from 'react';
import { withRouter } from 'react-router-dom';

import ContactMap from './ContactMap';
export class SiteContent extends React.Component {

  render() {
    return (
      <div>
        <div className="jumbotron text-center text-white title-jumbotron">
          <img className="img-fluid image-jumbotron pb-2" src="/images/Lions-Share-Logo-GoldHead.jpg" alt="TitleLogo" />
        </div>
        <div className="container content-container">
          <div className="row">
            <div className="col-sm-4">
              <ContactMap/>
              <hr/>
              <h3>Contact</h3>
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">(905) 555-5555</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">email@example.com</a>
                </li>
              </ul>
              <hr/>
              <h3>Hours</h3>
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <a className="nav-link disabled">Mon-Fri</a>
                  <a className="nav-link disabled" href="#">9am-5pm</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4">
              <div className="fakeimg">I Could display a Service in here</div>
              <br/>
              <div className="fakeimg2">Example of Service</div>
              <br/>
              <div className="fakeimg3">Example of Service</div>
            </div>
            <div className="col-sm-4">
              <div className="fakeimg4">I Could display a Service in here</div>
              <br/>
              <div className="fakeimg5">Example of Service</div>
              <br/>
              <div className="fakeimg6">Example of Service</div>
              </div>
            <div className="col-sm-8 ml-auto">
              <h2>TITLE HEADING</h2>
              <h5>Example of more info being displayed</h5>
              <div className="fakeimg">Fake Image</div>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              {/* <br/>
              <h2>TITLE HEADING</h2>
              <h5>Example of more info being displayed</h5>
              <div className="fakeimg">Fake Image</div>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p> */}
            </div>
            <div className="col-sm-12 ml-auto">
              <iframe id="promocan-search" frameBorder="0" src="https://embedcode-10519.promocan.com/en_ca/"></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SiteContent);