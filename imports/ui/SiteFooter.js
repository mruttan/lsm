import React from 'react';
import { withRouter } from 'react-router-dom';

class SiteFooter extends React.Component {
  render() {
    return (
      <div className="jumbotron text-center site-footer">
        <p>Footer</p>
      </div>
    );
  }
}

export default withRouter(SiteFooter);