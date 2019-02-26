import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

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
      defaultZoom = { 16 }
    >
    </GoogleMap>
 ));

   return(
      <div className="container spacing">
        <div className="row mapRow">
            <div className="col-sm-4 mapI gbg">
              <h2>Newton Abbot</h2>
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
            <h2>Merthyr Tydfil</h2>
          </div>
        </div>
      </div>
   );

   }
};

export default Map;