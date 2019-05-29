import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SiteFooter extends React.Component {
  render() {
    return (
      <div className="jumbotron text-center site-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">
              <Link to="/">
                <h5>Home</h5>
              </Link>
            </div>
            <div className="col-sm">
              <Link to="/about">
                <h5>About Us</h5>
              </Link>
            </div>
            <div className="col-sm">
              <Link to="/services">
                <h5>Services</h5>
              </Link>
            </div>
            <div className="col-sm">
              <Link to="/products">
                <h5>Products</h5>
              </Link>
            </div>
            <div className="col-sm">
              <Link to="/contact">
                <h5>Contact</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SiteFooter);