import React from "react";
import { withRouter } from "react-router-dom";

import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import BrandList from "./BrandList";
import { STATIC_DATA } from "./StaticData";
import { STATIC_BRANDS } from "./StaticBrands";
import { ProductCarousel } from "./ProductCarousel";

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = { prods: [], brands: [] };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    this.setState({
      prods: STATIC_DATA,
      brands: STATIC_BRANDS
    });
  }

  render() {
    return (
      <div>
        <SiteHeader title="LSM" />
        <section className="page-section cta">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 mx-auto">
                <div className="cta-inner text-center rounded bg-white">
                  <div className="row">
                    <div className="col-xl-12 text-center">
                      <h2 className="section-heading text-uppercase">Products</h2>
                    </div>
                  </div>
                  <div className="mt-5 mb-5">
                    <ProductCarousel />
                  </div>
                  <hr className="my-4" />
                  <div className="row mt-5">
                    <h2 className="section-heading text-uppercase text-center mx-auto">
                      Brand Partners
                    </h2>
                  </div>
                  <div className="mt-5">
                    <BrandList allbrands={this.state.brands} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    );
  }
}

export default withRouter(Products);
