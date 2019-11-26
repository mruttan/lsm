import React from "react";
import { Link, withRouter } from "react-router-dom";

import { STATIC_DATA } from "./StaticData";

export class SiteContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homepage_prods: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    this.setState({
      homepage_prods: STATIC_DATA
    });
  }

  render() {
    return (
      <div>
        <section className="page-section clearfix mb-0">
          <div className="container">
            <div className="intro">
              <img
                className="intro-img img-fluid mb-3 mb-lg-0 rounded"
                src="/images/homepage/lsm-store.png"
                alt=""
              />
              <div className="intro-text left-0 text-center bg-faded p-5 rounded">
                <h2 className="section-heading mb-4">
                  <span className="section-heading-upper">Products for</span>
                  <span className="section-heading-lower">Your Business</span>
                </h2>
                <p className="mb-3">
                  At Lion’s Share our goal is to help you increase your brand's
                  visibility, while generating the highest return on your
                  investment. Our friendly experienced team has access to
                  thousands of quality promotional products. We will take the
                  time to define your requirements, then make suggestions to
                  maximize the impact of your custom order.
                </p>
                <div className="intro-button mx-auto">
                  <a className="btn btn-primary btn-xl" href="/contact">
                    Visit Us Today!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section cta mt-0 mb-0" id="services">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 mx-auto mt-5">
                <div className="cta-inner text-center rounded">
                  <div className="row">
                    <div className="col-xl-12 text-center">
                      <h2 className="section-heading text-uppercase">Services</h2>
                    </div>
                  </div>
                  <div className="row text-center">
                    <div className="col-md-4">
                      <a href="#heattransfer">
                        <h4 className="service-heading">Heat Transfer</h4>
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href="#embroidery">
                        <h4 className="service-heading">Embroidery</h4>
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href="#customapparel">
                        <h4 className="service-heading">Custom Apparel</h4>
                      </a>
                    </div>
                  </div>
                  <div className="row text-center">
                    <div className="col-md-4">
                      <a href="#screenprinting">
                        <h4 className="service-heading">Screen Printing</h4>
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href="#fulfillment">
                        <h4 className="service-heading">Fulfillment</h4>
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href="#e-commerce">
                        <h4 className="service-heading">E-Commerce</h4>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="heattransfer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5 mt-5">
                  <img
                    className="img-fluid rounded-circle"
                    src="/images/homepage/heatpress.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">Heat Transfer</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod aliquid, mollitia odio veniam sit iste esse assumenda
                    amet aperiam exercitationem, ea animi blanditiis recusandae!
                    Ratione voluptatum molestiae adipisci, beatae obcaecati.
                  </p>
                  <hr />
                  <a href="#services">Services</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="embroidery">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="p-5 mt-5">
                  <img
                    className="img-fluid rounded-circle"
                    src="/images/homepage/embroidery.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="p-5">
                  <h2 className="display-4">Embroidery</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod aliquid, mollitia odio veniam sit iste esse assumenda
                    amet aperiam exercitationem, ea animi blanditiis recusandae!
                    Ratione voluptatum molestiae adipisci, beatae obcaecati.
                  </p>
                  <hr />
                  <a href="#services">Services</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="customapparel">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5 mt-5">
                  <img
                    className="img-fluid rounded-circle bg-white"
                    src="/images/homepage/customapparel.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">Custom Apparel</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod aliquid, mollitia odio veniam sit iste esse assumenda
                    amet aperiam exercitationem, ea animi blanditiis recusandae!
                    Ratione voluptatum molestiae adipisci, beatae obcaecati.
                  </p>
                  <hr />
                  <a href="#services">Services</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="screenprinting">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="p-5 mt-5">
                  <img
                    className="img-fluid rounded-circle"
                    src="/images/homepage/screenprinting.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="p-5">
                  <h2 className="display-4">Screen Printing</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod aliquid, mollitia odio veniam sit iste esse assumenda
                    amet aperiam exercitationem, ea animi blanditiis recusandae!
                    Ratione voluptatum molestiae adipisci, beatae obcaecati.
                  </p>
                  <hr />
                  <a href="#services">Services</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="fulfillment">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-lg-2">
                <div className="p-5 mt-5">
                  <img
                    className="img-fluid rounded-circle"
                    src="/images/homepage/fulfillment.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">Fulfillment</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod aliquid, mollitia odio veniam sit iste esse assumenda
                    amet aperiam exercitationem, ea animi blanditiis recusandae!
                    Ratione voluptatum molestiae adipisci, beatae obcaecati.
                  </p>
                  <hr />
                  <a href="#services">Services</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="e-commerce">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="p-5 mt-5">
                  <img
                    className="img-fluid rounded-circle"
                    src="/images/homepage/e-commerce.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="p-5">
                  <h2 className="display-4">E-Commerce</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod aliquid, mollitia odio veniam sit iste esse assumenda
                    amet aperiam exercitationem, ea animi blanditiis recusandae!
                    Ratione voluptatum molestiae adipisci, beatae obcaecati.
                  </p>
                  <hr />
                  <a href="#services">Services</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(SiteContent);
