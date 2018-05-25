import React from 'react';
import { Session } from 'meteor/session';
import { withRouter } from 'react-router-dom';
import { Button, Carousel } from 'react-bootstrap';

import ControlledCarousel from './ControlledCarousel';
import SiteHeader from './SiteHeader';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div>
        <SiteHeader title="LSM" />
        <ControlledCarousel/>
        <div className="page-content">
          <div className="page-content__sidebar">
            <p> hello world! </p>
            <div>
              <Button className="button">Danger!</Button>
            </div>
          </div>
          <div className="page-content__main">
            <div>
              here I will put more messages with a search bar, or search could go anywhere
            </div>
            <div> within this i shall put welcome messages with pics of product </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HomePage);