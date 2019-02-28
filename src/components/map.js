import React from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add( faMapMarkerAlt, faPhone )

class MapComponent extends React.Component {

   render() {
   return(
        <div className="container spacing mapsBlock">
            <div className="row mapRow">
                <div className="col-sm-4 mapI gbg">
                    <h2><FontAwesomeIcon icon="map-marker-alt" /> Newton Abbot</h2>
                    <p>Just off the A38<br />Newton Abbot, <br />TQ12 6JD</p>
                    <p><FontAwesomeIcon icon="phone" rotation={90} /> <a href="tel:+441626821111">01626 821111</a></p>
                </div>
                <div className="col-sm-8" style={{ padding: '0', margin: '0'}}>
                    <Map google={this.props.google}
                        style={{width: '100%', height: '100%', position: 'relative'}}
                        initialCenter={{ lat: 50.5571377, lng: -3.6667857 }}
                        className={'map'}
                        zoom={14}>
                        <Marker position={{lat: 50.5571377, lng: -3.6667857 }} />
                    </Map>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8" style={{ padding: '0' }}>
                    <Map google={this.props.google}
                        style={{width: '100%', height: '100%', position: 'relative'}}
                        initialCenter={{ lat: 51.7489784, lng: -3.3976439 }}
                        className={'map'}
                        zoom={14}>
                        <Marker position={{ lat: 51.7489784, lng: -3.3976439 }} />
                    </Map>
                </div>
                <div className="col-sm-4 mapI gbg">
                    <h2><FontAwesomeIcon icon="map-marker-alt" /> Merthyr Tydfil</h2>
                    <address>
                        <p>Swansea Road, <br />Merthyr Tydfil, <br />CF48 1HT</p>
                    </address>
                    <p><FontAwesomeIcon icon="phone" rotation={90} /> <a href="tel:+441685707500">01685 707500</a></p>
                </div>
            </div>
        </div>
   );

   }
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyD-mOUesGzkeyfaEFMYdsckrf7xr3iPP9U")
})(MapComponent)