import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { icon } from "leaflet";
import "./../../scss/MapContainer.scss";

const MapLeaflet = () => {
  return (
    
      <div className="col-lg-12 shadow bg-white rounded">
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
    
  );
};

export default MapLeaflet;
