import React, { Component } from "react";

// import { Map, InfoWindow, Marker, GoogleApiWrapper, onMarkerClick } from "google-maps-react";

// const GoogleMapContainer = () => {
//   return (
//     <div className="googleMap">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Google Map</h1>
//        </header>
//       <Map  zoom={14}>
//         <Marker onClick={this.onMarkerClick} name={"Current location"} />

//         <InfoWindow onClose={this.onInfoWindowClose}>
//           <div>
//             <h1>{this.state.selectedPlace.name}</h1>
//           </div>
//         </InfoWindow>
//       </Map>
//     </div>
//   );
// };

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyDMKTwyjON9T8GoOmWz51PfRsgDFIcGm4A",
// })(GoogleMapContainer);


import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const GoogleMapContainer = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 12.971599, lng: 77.594566 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 12.971599, lng: 77.594566 }} />}
  </GoogleMap>
))


export default  GoogleMapContainer