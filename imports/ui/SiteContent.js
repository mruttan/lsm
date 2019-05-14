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
        <div className="jumbotron text-center text-white title-jumbotron">
          <img className="img-fluid image-jumbotron pb-2" src="/images/Lions-Share-Logo-GoldHead.jpg" alt="TitleLogo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col mx-auto">
              <h2>Lion's Share Hockey</h2>
              <h5>Represent Your Team, Your Way</h5>
              <div className="fakeimg">Picture of the showroom store here</div>
              <p>Offering a variety of top brands and apparel, Lion's Share has you covered for all your sportswear needs.</p>
              <p>Lion's Share offers a wide range of promotional products, take a look at our current products, or if you have something else in mind for your team or company, give us a call, we'd love to help you out.</p>
              <div className="float-right pt-2 pb-4">
                <Link to="/contact" className="page-link">Contact Us...</Link>
              </div>
            </div>
          </div>
          <div className="row col">
            <h5>Services</h5>
          </div>
          <div className="row col-12">
            <div className="col">
              <div className="fakeimg">1st service</div>
            </div>
            <div className="col">
              <div className="fakeimg2">2nd service</div>
            </div>
            <div className="col">
              <div className="fakeimg3">3rd service</div>
            </div>
          </div>
          <div className="row col-3 float-right pt-4 pb-4">
            <a className="page-link" href="#">See More Services...</a>
          </div>
          
          <div className="row col">
            <h5>Products</h5>
          </div>
          <div className="row col-12">
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