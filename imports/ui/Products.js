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
        <div className="container">
          <div className="row pt-4">
            <h1>Products</h1>
          </div>
          {/* <ProductList allprods={this.state.prods} /> */}
          <ProductCarousel/>
          <div className="row pt-4">
            <h1>Brand Partners</h1>
          </div>
          <BrandList allbrands={this.state.brands} />
        </div>
        <SiteFooter/>
      </div>

    );
  }
}

export default withRouter(Products);