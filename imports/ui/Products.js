import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import ProductList from './ProductList';
import { STATIC_DATA } from './StaticData';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = { prods: [] }
  }

  componentWillMount() {
    this.setState({
      prods: STATIC_DATA
    });
  }

  render() {
    return (
      <div>
        <SiteHeader title="LSM" />
        <div className="container">
          <div className="row pt-4">
              <h1>Products</h1>
              <span className="col-12">
                Here is just a handfull of an almost endless selection of products
                to choose from for your business. Available from numerous reputable
                brands listed below,<Link to="/contact"> give us a call </Link>
                and we'll get started.
            </span>
          </div>
          <ProductList allprods={this.state.prods} />
          <div className="row pt-4">
            <h1>Brand Partners</h1>
          </div>
          <div className="row pt-4">
            <div className="col-sm-3 my-auto">
              <a href="https://ccmhockey.com">
                <img className="brand-image" src="/images/brands/ccmhockey.png" />
              </a>
            </div>
            <div className="col-sm-3 my-auto">
              <a href="https://www.bauer.com">
                <img className="brand-image" src="/images/brands/bauer.png" />
              </a>
            </div>
            <div className="col-sm-3 my-auto">
              <a href="https://www.roots.com/ca/en/homepage">
                <img className="brand-image" src="/images/brands/roots.png" />
              </a>
            </div>
            <div className="col-sm-3 my-auto">
              <a href="https://ca.puma.com/en_CA/home">
                <img className="brand-image" src="/images/brands/puma.png" />
              </a>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col-sm-3 my-auto">
              <a href="https://www.nike.com/ca/">
                <img className="brand-image" src="/images/brands/nike.png" />
              </a>
            </div>
            <div className="col-sm-3 my-auto">
              <a href="https://www.neweracap.com">
                <img className="brand-image" src="/images/brands/newera.png" />
              </a>
            </div>
            <div className="col-sm-3 my-auto">
              <a href="https://www.americanapparel.com">
                <img className="brand-image" src="/images/brands/americanapparel.png" />
              </a>
            </div>
            <div className="col-sm-3 my-auto">
              <a href="https://www.newbalance.ca">
                <img className="brand-image" src="/images/brands/newbalance.png" />
              </a>
            </div>
          </div>
        </div>
        <SiteFooter/>
      </div>

    );
  }
}


export default withRouter(Products);

//need to pass plist through this component,
// change render states in child component
//change to class based component, pass through state
//THIS WORKS!!! BUILD UPON IT!!!

/*
Categories:

 
Apparel

Headwear

Bags

Drinkware

Office/Technology

Writing

 
Brand partners:

 
Under Armour

CCM Hockey

Bauer

Roots

Puma

Nike

New Era

American Apparel

New Balance

 

See sample below:

https://nrgactiveapparel.com/brands/
*/