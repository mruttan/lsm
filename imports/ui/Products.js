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
          {/* putting in UL instead of divs for better responsiveness/able to take more brands */}
          <div className="brands-container">
            <ul className="brands-list">
              <li className="brands-item my-auto">
                <a href="https://ccmhockey.com">
                  <img className="brand-image" src="/images/brands/ccmhockey.png" />
                </a>              
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.bauer.com">
                  <img className="brand-image" src="/images/brands/bauer.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.roots.com/ca/en/homepage">
                  <img className="brand-image" src="/images/brands/roots.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://ca.puma.com/en_CA/home">
                  <img className="brand-image" src="/images/brands/puma.png" />
                </a>             
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.nike.com/ca/">
                  <img className="brand-image" src="/images/brands/nike.png" />
                </a>          
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.neweracap.com">
                  <img className="brand-image" src="/images/brands/newera.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.americanapparel.com">
                  <img className="brand-image" src="/images/brands/americanapparel.png" />
                </a>             
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.newbalance.ca">
                  <img className="brand-image" src="/images/brands/newbalance.png" />
                </a>            
              </li>

    {/*
              <li className="brands-item my-auto">
                <a href="">
                  <img className="brand-image" src="/images/brands/" />
                </a>            
              </li>
    */}
              <li className="brands-item my-auto">
                <a href="https://www.dryframe.com/">
                  <img className="brand-image" src="/images/brands/dryframe.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                {/* link to be fixed */}
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/coal-harbour-reg.html">
                  <img className="brand-image" src="/images/brands/ch.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/atc-153.html">
                  <img className="brand-image" src="/images/brands/atc.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                {/* link to be fixed? */}
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/es-active-reg.html">
                  <img className="brand-image" src="/images/brands/esactive.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                {/* to be fixed? */}
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/everyday-reg-collection.html">
                  <img className="brand-image" src="/images/brands/everyday.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                {/* to be fixed? */}
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/eurospun.html">
                  <img className="brand-image" src="/images/brands/eurospun.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/koi-174.html">
                  <img className="brand-image" src="/images/brands/koi.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/the-north-face-reg.html">
                  <img className="brand-image" src="/images/brands/thenorthface.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/atc-153-by-flexfit-174.html">
                  <img className="brand-image" src="/images/brands/flexfit.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/yupoong-174.html">
                  <img className="brand-image" src="/images/brands/yupoong.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/ogio-174.html">
                  <img className="brand-image" src="/images/brands/ogio.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/callaway-174.html">
                  <img className="brand-image" src="/images/brands/callaway.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/eddie-bauer.html">
                  <img className="brand-image" src="/images/brands/eb.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/gildan-reg.html">
                  <img className="brand-image" src="/images/brands/gildan.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/fruit-of-the-loom-174.html">
                  <img className="brand-image" src="/images/brands/fol.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/red-kap-174.html">
                  <img className="brand-image" src="/images/brands/redkap.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="https://www.sanmarcanada.com/shop-catalogue/shop-by-brand/realtree-174.html">
                  <img className="brand-image" src="/images/brands/realtree.png" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="">
                  <img className="brand-image" src="/images/brands/" />
                </a>            
              </li>
              <li className="brands-item my-auto">
                <a href="">
                  <img className="brand-image" src="/images/brands/" />
                </a>            
              </li>

            </ul>
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