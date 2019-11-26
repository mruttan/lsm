import React from 'react';
import { withRouter } from 'react-router-dom';

import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import ContactMap from './ContactMap';


export class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  render(props) {
    return (
      <div>
        <SiteHeader title="LSM" />

        <section className="page-section cta">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 mx-auto">
                <div className="cta-inner text-center rounded">

                  <div className="row">
                    <div className="col-sm-3 mt-2">
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
                    <div className="col-sm-9">
                      <ContactMap/>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        <SiteFooter/>
      </div>
    );
  }
}

export default withRouter(Contact);