import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { STATIC_DATA } from './StaticData';
import HomePageProdList from './HomePageProdList';
import { ProductCarousel } from './ProductCarousel';

export class SiteContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        homepage_prods: []
    }
  }

  componentWillMount() {
    this.setState({
      homepage_prods: STATIC_DATA
    });
  }

  render() {
    return (
      <div className="container">
        {/* <div className="container">
          <div className="row">
            <div className="jumbotron text-center text-white title-jumbotron">
              <img className="img-fluid image-jumbotron col-sm-6 jumbo-pad" src="/images/Lions-Share-Logo-GoldHead.jpg" alt="TitleLogo" />
              
              <img className="img-fluid image-jumbotron col-sm-6 jumbo-lsmhockeylogo" src="/images/logos/LionsShareHockeyLogo.jpg" alt="TitleLogo" />
            </div>
          </div>
        </div> */}
        <div className="row">
          <section className="col-12">

            <div className="col mx-auto">
              <h1>heroku test - staging pipeline test</h1>
              <p>
                  At Lion’s Share our goal is to help you increase your brand's visibility, while generating the highest return on your investment.  
                  Our friendly experienced team has access to thousands of quality promotional products.  We will take the time to define your 
                  requirements, then make suggestions to maximize the impact of your custom order.
              </p>
              <p>
                  We practice excellent customer service in each detail to meet all of your needs and earn your trust.
              </p>
              <p>
                  We also offer quality Heat transfer, screen printing and embroidery!
              </p>
              <p>
                  We specialize in custom hockey association programs for apparel and uniforms.  Starting with putting together a 
                  proposed program, pricing and terms, to fittings to production and finally delivery!  We have a full showroom and
                      store to accommodate our hockey association members.
              </p>
              <div className="float-right pt-2 pb-4">
                <Link to="/contact" className="page-link">Contact Us...</Link>
              </div>
            </div>
          </section>
        </div> {/* row */}
        <div className="row mb-1">
          <h5>Services</h5>
        </div>
        <div className="row mb-3">
          <div className="col-sm-4">
            <section className="card bg-primary text-light" id="service1">
              <div className="card-body">
                <img className="card-img img-fluid" src="/images/services/heatpress.png"/>
                <h2 className="card-title">Heat Transfers</h2>
                <h5 className="card-subtitle">Hot Solutions</h5>
                <p className="card-text">Professionally done Heat Transfer Garments.</p>
                
              </div>
            </section> {/* card */}
          </div>
          <div className="col-sm-4">
            <section className="card bg-secondary text-light" id="service2">
              <div className="card-body">
                <img className="card-img img-fluid" src="/images/services/embroidery.png"/>
                <h2 className="card-title">Embroidery</h2>
                <h5 className="card-subtitle">Cool Threads</h5>
                <p className="card-text">Exquisite Embroidery done by the experts.</p>
              </div>
            </section> {/* card */}
          </div>
          <div className="col-sm-4">
            <section className="card bg-info text-light" id="service3">
              <div className="card-body">
                <img className="card-img img-fluid" src="/images/services/fulfillment.png"/>
                <h2 className="card-title">Fulfillment</h2>
                <h5 className="card-subtitle">Your logo on anything.</h5>
                <p className="card-text">Branded Products at great prices.</p>
              </div>
            </section> {/* card */}
          </div>
        </div>{/* row col-12? */}
          
        <div className="row">
          <section className="col-12">
            <h5>Products</h5>

            {/* <div className="justify-content-between mb-2">
              <HomePageProdList homepage_prods={this.state.homepage_prods} />
            </div> */}
            <ProductCarousel/>
            <div className="float-right pt-4 pb-4">
              <Link to="/products" className="page-link">See More Products...</Link>
            </div>
        
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(SiteContent);