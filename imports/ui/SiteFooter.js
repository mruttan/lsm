import React from 'react';
import { withRouter } from 'react-router-dom';

class SiteFooter extends React.Component {
  render() {
    return (
      <div className="jumbotron text-center site-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">
              <h5>Information</h5>
              <p>Example of what can be shown here</p>
            </div>
            <div className="col-sm">
              <h5>Customer Service</h5>
              <p>Example of what can be shown here</p>
            </div>
            <div className="col-sm">
              <h5>Extras</h5>
              <p>Example of what can be shown here</p>
            </div>
            <div className="col-sm">
              <h5>Contact</h5>
              <p>Example of what can be shown here</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SiteFooter);