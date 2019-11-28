import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SiteFooter extends React.Component {
  render() {
    return (
      <div className="pt-1 footer">
        <div className="container">
          <div className="row">
            <div className="col location text-center">
              <h4 className="mt-5">Location</h4>
              <p className="mb-0">16610 Bayview Ave U # 8</p>
              <p>Newmarket, ON - L3X 1X3</p>
            </div>
            <div className="col location text-center">
              <h4 className="mt-5">Contact</h4>
              <p className="mb-0">Tel # 905-235-5775</p>
              <p><i className="fa fa-envelope-o mr-3"></i>laurie@lions-sharemktg.com</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-5 copyright">
              <p className=""><small className="text-white-50">© 2019. All Rights Reserved.</small></p>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default withRouter(SiteFooter);