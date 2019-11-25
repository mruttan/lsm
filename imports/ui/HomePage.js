import React from 'react';
import { withRouter } from 'react-router-dom';

import MyCarousel from './MyCarousel';
import SiteContent from './SiteContent';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
//currently converting all of existing classes to use Bootstrap 4 classes, MY css!
  render(props) {
    return (
      <div>
        <SiteHeader title="LSM" />
        {/* <MyCarousel/> */}
        <SiteContent/>
        <SiteFooter/>
      </div>
    );
  }
}

export default withRouter(HomePage);