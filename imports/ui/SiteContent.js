import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { STATIC_DATA } from './StaticData';
import HomePageProdList from './HomePageProdList';

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
      <div>
        {/* <div className="container">
          <div className="row">
            <div className="jumbotron text-center text-white title-jumbotron">
              <img className="img-fluid image-jumbotron col-sm-6 jumbo-pad" src="/images/Lions-Share-Logo-GoldHead.jpg" alt="TitleLogo" />
              
              <img className="img-fluid image-jumbotron col-sm-6 jumbo-lsmhockeylogo" src="/images/logos/LionsShareHockeyLogo.jpg" alt="TitleLogo" />
            </div>
          </div>
        </div> */}
        <div className="container pt-5">
          <div className="row">
            <div className="col mx-auto">
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
          </div>
          <div className="row col">
            <h5>Services</h5>
          </div>
          <div className="row col-12">
            <div className="col-sm-4">
              <div className="fakeimg">
                <h1>hello world</h1>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="fakeimg">
                <h1>hello world</h1>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="fakeimg">
                <h1>hello world</h1>
              </div>
            </div>
          </div>
          
          <div className="row col">
            <h5>Products</h5>
          </div>
          <div className="row col-12 justify-content-between">
            <HomePageProdList homepage_prods={this.state.homepage_prods} />
          </div>
          <div className="row col-3 float-right pt-4 pb-4">
            <Link to="/products" className="page-link">See More Products...</Link>
          </div>
        
        </div>
      </div>
    );
  }
}

export default withRouter(SiteContent);