import React from 'react';
import { Session } from 'meteor/session';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import ControlledCarousel from './ControlledCarousel';
import SiteContent from './SiteContent';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div className="content">
        <SiteHeader title="LSM" />
        <ControlledCarousel/>
        <div className="page-content">
          <div className="page-content__sidebar">
            <p> hello world! </p>
            <div>
              <Button className="button">Danger!</Button>
            </div>
          </div>
          <SiteContent/>
        </div>
        <SiteFooter/> 
      </div>
    );
  }
}

export default withRouter(HomePage);