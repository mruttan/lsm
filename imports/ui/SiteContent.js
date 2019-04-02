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
            <div className="col ml-auto">
              <h2>Lion's Share Hockey</h2>
              <h5>Represent Your Team, Your Way</h5>
              <div className="fakeimg">Picture of the showroom store here</div>
              <p>Offering a variety of top brands and apparel, Lion's Share has you covered for all your sportswear needs.</p>
              <p>Lion's Share offers a wide range of promotional products, take a look at our current products, or if you have something else in mind for your team or company, give us a call, we'd love to help you out.</p>
              <br/>
            </div>
          </div>
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
  
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SiteContent);