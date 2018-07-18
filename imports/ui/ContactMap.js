import React from 'react';
import { withRouter } from 'react-router-dom';

export class ContactMap extends React.Component {
  render() {
    return (
      <div>
        <h2>About Me</h2>
          <h5>ContactMap will go here</h5>
          <div id="map"></div>
          
          <p>Contact info could go</p>
          <hr className="d-sm-none"/>
      </div>
    );
  }
}

export default withRouter(ContactMap);