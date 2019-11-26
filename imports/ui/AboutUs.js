import React from "react";
import { withRouter } from "react-router-dom";

import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

class AboutUs extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <SiteHeader title="LSM" />
        <div className="container">
          <section className="page-section about-heading">
            <div>
              <img
                className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
                src="/images/aboutus/tradeshow.png"
                alt=""
              />
              <div className="about-heading-content">
                <div className="row">
                  <div className="col-xl-9 col-lg-10 mx-auto">
                    <div className="bg-faded rounded p-5">
                      <h2 className="section-heading mb-4">
                        <span className="section-heading-upper">
                          Quality Products, Professionally Done
                        </span>
                        <span className="section-heading-lower">About Us</span>
                      </h2>
                      <p>
                        At Lion’s Share our goal is to help you increase your
                        brand's visibility, while generating the highest return
                        on your investment. Our friendly experienced team has
                        access to thousands of quality promotional products. We
                        will take the time to define your requirements, then
                        make suggestions to maximize the impact of your custom
                        order.
                      </p>
                      <p className="mb-2">
                        We practice excellent customer service in each detail to
                        meet all of your needs and earn your trust.
                      </p>
                      <p className="mb-2">
                        We also offer quality Heat transfer, screen printing and
                        embroidery!
                      </p>
                      <p className="mb-2">
                        We specialize in custom hockey association programs for
                        apparel and uniforms. Starting with putting together a
                        proposed program, pricing and terms, to fittings to
                        production and finally delivery! We have a full showroom
                        and store to accommodate our hockey association members.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <SiteFooter />
      </div>
    );
  }
}

export default withRouter(AboutUs);
