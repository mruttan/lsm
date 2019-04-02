import React from 'react';
import { withRouter } from 'react-router-dom';

import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import ContactMap from './ContactMap';


export class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
//currently converting all of existing classes to use Bootstrap 4 classes, MY css!
  render(props) {
    return (
      <div>
        <SiteHeader title="LSM" />
        
        <div className="container content-container">
          <div className="row">
            <div className="col ml-auto">
                <h1>YOU MADE IT!!!</h1>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-sm-6">
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
            <div className="col-sm-6">
              <ContactMap/>
            </div>
            {/* <div className="col-sm-4">
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
            </div> */}
  
          </div>
        </div>
      
        <SiteFooter/>
      </div>
    );
  }
}

export default withRouter(Contact);