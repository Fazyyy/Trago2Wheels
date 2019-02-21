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
      <div class="container">
        <div class="row spacing">
            <div class="col">
                <h2>Trago2Wheels, Newton Abbot</h2>
            </div>
            <GoogleMapOne
            containerElement={ <div style={{ height: `250px`, width: '100%' }} /> }
            mapElement={ <div style={{ height: `100%` }} /> }
            />
        </div>
        <div class="row spacing">
            <div class="col">
                <h2>Trago2Wheels, Merthyr Tydfil</h2>
            </div>
            <GoogleMapTwo
            containerElement={ <div style={{ height: `250px`, width: '100%' }} /> }
            mapElement={ <div style={{ height: `100%` }} /> }
            />
        </div>
      </div>
   );

   }
};

export default Map;