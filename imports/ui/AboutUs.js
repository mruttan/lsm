import React from "react";
import { Link, withRouter } from "react-router-dom";

import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { ProductCarousel } from "./ProductCarousel";

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
                src="/images/aboutus/about.jpg"
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

          <hr className="my-4" />
          {/*cards for services, both vertical and horizantal for desktop/mobile */}
          <div className="row mt-3">
            <h4 className="display-4 mx-auto text-center">Services</h4>
          </div>
          {/* Beginning of Vertical cards for desktop view
          <div className="d-none d-md-block">
            <div className="row mt-3">
              <div className="col-4">
                <section className="card bg-primary text-light" id="service1">
                  <div className="card-body">
                    <img
                      className="card-img img-fluid"
                      src="/images/services/heatpress.png"
                    />
                    <h2 className="card-title">Heat Transfers</h2>
                    <h5 className="card-subtitle">Hot Solutions</h5>
                    <p className="card-text">
                      Professionally done Heat Transfer Garments.
                    </p>
                  </div>
                </section>{" "}
                {/* card */}
              {/* </div>
              <div className="col-4">
                <section className="card bg-secondary text-light" id="service2">
                  <div className="card-body">
                    <img
                      className="card-img img-fluid"
                      src="/images/services/embroidery.png"
                    />
                    <h2 className="card-title">Embroidery</h2>
                    <h5 className="card-subtitle">Cool Threads</h5>
                    <p className="card-text">
                      Exquisite Embroidery done by the experts.
                    </p>
                  </div>
                </section>{" "} */}
                {/* card */}
              {/* </div>
              <div className="col-4">
                <section className="card bg-info text-light" id="service3">
                  <div className="card-body">
                    <img
                      className="card-img img-fluid"
                      src="/images/services/fulfillment.png"
                    />
                    <h2 className="card-title">Fulfillment</h2>
                    <h5 className="card-subtitle">Your logo on anything.</h5>
                    <p className="card-text">
                      Branded Products at great prices.
                    </p>
                  </div>
                </section>{" "} */}
                {/* card */}
              {/* </div>
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
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                      <small>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </small>
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
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
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
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
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

          <section className="page-section">
            <div className="container">
              <div className="product-item">
                <div className="product-item-title d-flex">
                  <div className="bg-faded p-5 d-flex ml-auto rounded">
                    <h2 className="section-heading mb-0">
                      <span className="section-heading-upper">
                        Blended to Perfection
                      </span>
                      <span className="section-heading-lower">
                        Coffees &amp; Teas
                      </span>
                    </h2>
                  </div>
                </div>
                <img
                  className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
                  src="/images/aboutus/products-01.jpg"
                  alt=""
                />
                <div className="product-item-description d-flex mr-auto">
                  <div className="bg-faded p-5 rounded">
                    <p className="mb-0">
                      We take pride in our work, and it shows. Every time you
                      order a beverage from us, we guarantee that it will be an
                      experience worth having. Whether it's our world famous
                      Venezuelan Cappuccino, a refreshing iced herbal tea, or
                      something as simple as a cup of speciality sourced black
                      coffee, you will be coming back for more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <div className="container">
              <div className="product-item">
                <div className="product-item-title d-flex">
                  <div className="bg-faded p-5 d-flex mr-auto rounded">
                    <h2 className="section-heading mb-0">
                      <span className="section-heading-upper">
                        Delicious Treats, Good Eats
                      </span>
                      <span className="section-heading-lower">
                        Bakery &amp; Kitchen
                      </span>
                    </h2>
                  </div>
                </div>
                <img
                  className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
                  src="/images/aboutus/products-02.jpg"
                  alt=""
                  />
                <div className="product-item-description d-flex ml-auto">
                  <div className="bg-faded p-5 rounded">
                    <p className="mb-0">
                      Our seasonal menu features delicious snacks, baked goods,
                      and even full meals perfect for breakfast or lunchtime. We
                      source our ingredients from local, oragnic farms whenever
                      possible, alongside premium vendors for specialty goods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section">
            <div className="container">
              <div className="product-item">
                <div className="product-item-title d-flex">
                  <div className="bg-faded p-5 d-flex ml-auto rounded">
                    <h2 className="section-heading mb-0">
                      <span className="section-heading-upper">
                        From Around the World
                      </span>
                      <span className="section-heading-lower">
                        Bulk 
                      </span>
                    </h2>
                  </div>
                </div>
                <img
                  className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
                  src="/images/aboutus/products-03.jpg"
                  alt=""
                  />
                <div className="product-item-description d-flex mr-auto">
                  <div className="bg-faded p-5 rounded">
                    <p className="mb-0">
                      Travelling the world for the very best quality coffee is
                      something take pride in. When you visit us, you'll always
                      find new blends from around the world, mainly from regions
                      in Central and South America. We sell our blends in
                      smaller to large bulk quantities. Please visit us in
                      person for more details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        

        </div>
        {/* container */}
        <SiteFooter />
      </div>
    );
  }
}

export default withRouter(AboutUs);
