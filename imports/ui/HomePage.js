import React from 'react';
import { withRouter } from 'react-router-dom';

import AnimatedCarousel from './AnimatedCarousel';
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
        <h2>This is a heading</h2>

        <p>This is a paragraph.</p>
        <p>This is another paragraph.</p>

        <button>Click me</button>
        <AnimatedCarousel/>
        {/* <MyCarousel/> */}
        <SiteContent/>
        <SiteFooter/>
      </div>
    );
  }
}

export default withRouter(HomePage);