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
        <div className="container">
          <div className="row mt-3">
            <h4 className="display-4 mx-auto text-center">Products</h4>
          </div>
          {/* <ProductList allprods={this.state.prods} /> */}
          <ProductCarousel/>
          <hr className="my-4"/>
          <div className="row mt-3">
            <h4 className="display-4 mx-auto text-center">Brand Partners</h4>
          </div>
          <BrandList allbrands={this.state.brands} />
        </div>
        <SiteFooter/>
      </div>

    );
  }
}

export default withRouter(Products);