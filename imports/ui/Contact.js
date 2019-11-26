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
//currently converting all of existing classes to use Bootstrap 4 classes, MY css!
  render(props) {
    return (
      <div>
        <SiteHeader title="LSM" />

        <section class="page-section cta">
          <div class="container">
            <div class="row">
              <div class="col-xl-12 mx-auto">
                <div class="cta-inner text-center rounded">
                  {/* <div class="row">
                    <div class="col-xl-12 text-center">
                      <h2 class="section-heading text-uppercase">Contact</h2>
                      <h3 class="section-subheading text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </h3>
                    </div>
                  </div> */}

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

{/* 
        <div className="container content-container page-section">
          <div className="row">
            <section className="col-12">
              <div className="justify-content-center">
                <div className="jumbotron mx-auto-bg-white">

                  <div className="row pt-4">
                    <div className="col-sm-3">
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
            </section>
          </div>
        </div> */}

        <SiteFooter/>
      </div>
    );
  }
}

export default withRouter(Contact);