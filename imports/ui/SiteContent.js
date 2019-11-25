import React from "react";
import { Link, withRouter } from "react-router-dom";

import { STATIC_DATA } from "./StaticData";
import { ProductCarousel } from "./ProductCarousel";

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
        {/* <div className="row">
          <section className="col-12">
            <div className="col mx-auto">
              <div className="jumbotron">
                <h1 className="display-4"> </h1>
                <img
                  src="/images/logos/LionsShareHockeyLogo.png"
                  className="rounded mx-auto d-block w-25"
                  alt="TitleLogo"
                ></img>
                <p className="lead">
                  Placeholder text for hero unit, a way of highlighting text in
                  a jumbotron
                </p>
                <div className="mt-2">
                  <p>
                    At Lion’ s Share our goal is to help you increase your brand
                    's visibility, while generating the highest return on your
                    investment.Our friendly experienced team has access to
                    thousands of quality promotional products.We will take the
                    time to define your requirements, then make suggestions to
                    maximize the impact of your custom order.
                  </p>
                  <p>
                    We practice excellent customer service in each detail to
                    meet all of your needs and earn your trust.
                  </p>
                  <p>
                    We also offer quality Heat transfer, screen printing and
                    embroidery!
                  </p>
                  <p>
                    We specialize in custom hockey association programs for
                    apparel and uniforms.Starting with putting together a
                    proposed program, pricing and terms, to fittings to
                    production and finally delivery!We have a full showroom and
                    store to accommodate our hockey association members.
                  </p>
                </div>
                <hr className="my-4" />
                <p>
                  To get started on your order, Contact Us.Our Team of experts
                  will be ready to help.
                </p>
                <div className="float-right mb-4">
                  <Link to="/contact" className="page-link">
                    Contact Us...
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div> */}
        {/* row */} 
        {/* <hr className="my-4" />
        <div className="row mt-3">
          <h4 className="display-4 mx-auto text-center"> Services </h4>
        </div> */}
        {/* Beginning of Vertical cards for desktop view */}
        {/* <div className="d-none d-md-block">
          <div className="row mt-3">
            <div className="col-4">
              <section className="card bg-primary text-light" id="service1">
                <div className="card-body">
                  <img
                    className="card-img img-fluid"
                    src="/images/services/heatpress.png"
                  />
                  <h2 className="card-title"> Heat Transfers </h2>
                  <h5 className="card-subtitle"> Hot Solutions </h5>
                  <p className="card-text">
                    Professionally done Heat Transfer Garments.
                  </p>
                </div>
              </section> */}
              {/* card */}
            {/* </div>
            <div className="col-4">
              <section className="card bg-secondary text-light" id="service2">
                <div className="card-body">
                  <img
                    className="card-img img-fluid"
                    src="/images/services/embroidery.png"
                  />
                  <h2 className="card-title"> Embroidery </h2>
                  <h5 className="card-subtitle"> Cool Threads </h5>
                  <p className="card-text">
                    Exquisite Embroidery done by the experts.
                  </p>
                </div>
              </section> */}
              {/* card */}
            {/* </div>
            <div className="col-4">
              <section className="card bg-info text-light" id="service3">
                <div className="card-body">
                  <img
                    className="card-img img-fluid"
                    src="/images/services/fulfillment.png"
                  />
                  <h2 className="card-title"> Fulfillment </h2>
                  <h5 className="card-subtitle"> Your logo on anything. </h5>
                  <p className="card-text">Branded Products at great prices.</p>
                </div>
              </section> */}
              {/* card */}
            {/* </div>
          </div>
        </div> */}
        {/* row col-12? */}
        {/* End of Vertical cards for use in desktop view */}
        {/* Beginning of Horizantal cards, to be used when in mobile view.*/}
        {/* <div className="d-block d-md-none">
          <div className="row mt-5">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-4 my-auto">
                  <img
                    className="card-img"
                    src="/images/services/fulfillment.png"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h5 className="card-title"> Card title </h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead - in to additional content.This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-8">
                  <div className="card-body">
                    <h5 className="card-title"> Card title </h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead - in to additional content.This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
                <div className="col-4 my-auto">
                  <img
                    className="card-img"
                    src="/images/services/fulfillment.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-4 my-auto">
                  <img
                    className="card-img"
                    src="/images/services/fulfillment.png"
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h5 className="card-title"> Card title </h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead - in to additional content.This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* End of horizantal card section */}
        {/* <div className="row mt-5">
          <h4 className="display-4 mx-auto text-center"> Products </h4>
        </div>
        <div className="row">
          <section className="col-12">
            <ProductCarousel />
            <div className="float-right pt-4 pb-4">
              <Link to="/products" className="page-link">
                See More Products...
              </Link>
            </div>
          </section>
        </div> */}

        <section class="page-section clearfix">
            <div class="container">
              <div class="intro">
                <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="/images/homepage/office-space.png" alt=""/>
                <div class="intro-text left-0 text-center bg-faded p-5 rounded">
                  <h2 class="section-heading mb-4">
                    <span class="section-heading-upper">Fresh Coffee</span>
                    <span class="section-heading-lower">Worth Drinking</span>
                  </h2>
                  <p class="mb-3">Every cup of our quality artisan coffee starts with locally sourced, hand picked ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning routine - we guarantee it!
                  </p>
                  <div class="intro-button mx-auto">
                    <a class="btn btn-primary btn-xl" href="#">Visit Us Today!</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="page-section cta">
            <div class="container">
              <div class="row">
                <div class="col-xl-9 mx-auto">
                  <div class="cta-inner text-center rounded">
                    <h2 class="section-heading mb-4">
                      <span class="section-heading-upper">Our Promise</span>
                      <span class="section-heading-lower">To You</span>
                    </h2>
                    <p class="mb-0">When you walk into our shop to start your day, we are dedicated to providing you with friendly service, a welcoming atmosphere, and above all else, excellent products made with the highest quality ingredients. If you are not satisfied, please let us know and we will do whatever we can to make things right!</p>
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
