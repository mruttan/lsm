import React from 'react';
// import { withRouter } from 'react-router-dom';

export class ContactMap extends React.Component {

  componentDidMount() {
    this.renderMap();
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBW4XXdeFMVbZqMaWR8n6h-AGCSDrbopR0&callback=initMap");
    window.initMap = this.initMap;
  }

  initMap = () => {
    var latlng = {
      lat: 44.038234,
      lng: -79.451330
    }
    
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: latlng,
      zoom: 15
    });

    var marker = new google.maps.Marker({
      position: latlng,
      map: map
    });
  }
  

  render() {
    return (
      <main>
        <div>
          <h2>Location</h2>
            <h5>16610 Bayview Ave</h5>
            <h5>Just south of Mulock & Bayview</h5>
            <div id="map"></div>
            <hr className="d-sm-none"/>

        </div>

      </main>
    );
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default ContactMap;