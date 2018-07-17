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
              <h3>Services</h3>
              <p>I could list services here.</p>
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Active</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
              <ContactMap/>
            </div>
            <div className="col-sm-4">
              <div className="fakeimg">I Could display a Service in here</div>
              <br/>
              <div className="fakeimg">Example of Service</div>
            </div>
            <div className="col-sm-4">
              <div className="fakeimg">I Could display a Service in here</div>
              <br/>
              <div className="fakeimg">Example of Service</div>
              </div>
            <div className="col-sm-8 ml-auto">
              <h2>TITLE HEADING</h2>
              <h5>Example of more info being displayed</h5>
              <div className="fakeimg">Fake Image</div>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              <br/>
              <h2>TITLE HEADING</h2>
              <h5>Example of more info being displayed</h5>
              <div className="fakeimg">Fake Image</div>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SiteContent);