import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import BrandList from './BrandList';
import ProductList from './ProductList';
import { STATIC_DATA } from './StaticData';
import { STATIC_BRANDS } from './StaticBrands';
import { ProductCarousel } from './ProductCarousel';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = { prods: [],
                   brands: [] }
  }

  componentDidMount() {
    window.scrollTo(0,0);
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
        <div className="container page-section">
          <div className="row">
            <section className="col-12">
              <div className="justify-content-center">
                <div className="jumbotron mx-auto bg-white">

                  <div className="row">
                    <h4 className="display-4 mx-auto text-center mt-5">Products</h4>
                  </div>
                  {/* <ProductList allprods={this.state.prods} /> */}
                  <div className="mt-5 mb-5">
                    <ProductCarousel/>
                  </div>
                <hr className="my-4"/>
                  <div className="row mt-5">
                    <h4 className="display-4 mx-auto text-center">Brand Partners</h4>
                  </div>
                  <div className="mt-5">
                    <BrandList allbrands={this.state.brands} />
                  </div>


                </div>
              </div>
            </section>
          </div>

        </div>
        <SiteFooter/>
      </div>

    );
  }
}

export default withRouter(Products);