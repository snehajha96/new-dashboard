import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { icon } from "leaflet";
import "./../scss/MapContainer.scss";

import GoogleMapContainer from "./maps/GoogleMap";

const MapContainer = () => {
  return (
    <div className="row justify-content-around">
      <div className="col-lg-5 shadow p-3  bg-white rounded">
        <h3 className="mb-3">Map With Leaflet</h3>

        <div className="map-container shadow-sm  rounded">
          <Map center={[12.971599, 77.594566]} zoom={12}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[12.971599, 77.594566]}>
              <Popup>
                <strong>Bangalore.</strong> <br />{" "}
                <small>City of IT Park.</small>
              </Popup>
            </Marker>
          </Map>
        </div>
      </div>
      <div className="col-lg-5 shadow p-3  bg-white rounded">
      <h3 className="mb-3">Map With GoogleMaps</h3>
      <div className="map-container rounded">
        <GoogleMapContainer
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `60vh` }} />}
        />
      </div>
      </div>
    </div>
  );
};

export default MapContainer;
