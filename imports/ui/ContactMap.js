import React from 'react';
import { withRouter } from 'react-router-dom';

export class ContactMap extends React.Component {
  render() {
    return (
      <div>
        <h2>Location</h2>
          <h5>16610 Bayview Ave</h5>
          <h5>Just south of Mulock & Bayview</h5>
          <div id="map"></div>
          <hr className="d-sm-none"/>
      </div>
    );
  }
}

export default withRouter(ContactMap);