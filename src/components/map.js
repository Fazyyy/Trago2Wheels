import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add( faMapMarkerAlt, faPhone )

class Map extends Component {

   render() {

   const GoogleMapOne = withGoogleMap(props => (
    <GoogleMap
    defaultCenter = { { lat: 50.5571377, lng: -3.6667857 } }
    defaultZoom = { 16 }
    marker = { { lat: 50.5571377, lng: -3.6667857 } }
    >
    </GoogleMap>
   ));
   const GoogleMapTwo = withGoogleMap(props => (
    <GoogleMap
      defaultCenter = { { lat: 51.7489784, lng: -3.3976439 } }
      defaultZoom = { 18 }
    >
    </GoogleMap>
 ));

   return(
      <div className="container spacing mapsBlock">
        <div className="row mapRow">
            <div className="col-sm-4 mapI gbg">
              <h2><FontAwesomeIcon icon="map-marker-alt" /> Newton Abbot</h2>
                <p>Just off the A38<br />Newton Abbot, <br />TQ12 6JD</p>
              <p><FontAwesomeIcon icon="phone" /> <a href="tel:+441626821111">01626 821111</a></p>
            </div>
          <div className="col-sm-8" style={{ padding: '0' }}>
            <GoogleMapOne
            containerElement={ <div style={{ height: `250px`, width: '100%' }} /> }
            mapElement={ <div style={{ height: `100%` }} /> }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8" style={{ padding: '0' }}>
            <GoogleMapTwo
            containerElement={ <div style={{ height: `250px`, width: '100%' }} /> }
            mapElement={ <div style={{ height: `100%` }} /> }
            />
          </div>
          <div className="col-sm-4 mapI gbg">
            <h2><FontAwesomeIcon icon="map-marker-alt" /> Merthyr Tydfil</h2>
            <address>
                <p>Swansea Road, <br />Merthyr Tydfil, <br />CF48 1HT</p>
              </address>
              <p><FontAwesomeIcon icon="phone" /> <a href="tel:+441685707500">01685 707500</a></p>
          </div>
        </div>
      </div>
   );

   }
};

export default Map;