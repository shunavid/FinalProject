import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./gps.css";

function Gps() {
  return (
    <div className="gps-container">
      <div>.</div>
      <div className="Gps">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={10}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
}
export default Gps;
