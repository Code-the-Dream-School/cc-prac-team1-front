import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Map.css";

const MapComponent = () => {
  useEffect(() => {
    const location = [29.4241, -98.4936]; // San Antonio, Texas coordinates. These will be provided by the user. For now, they are hardcoded.

    const map = L.map("map").setView(location, 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(map);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <div className="map-button-container">
        <button className="map-button-primary">Button 1</button>
        <button className="map-button-secondary">Button 2</button>
      </div>
      <div
        id="map"
        style={{ height: "100vh", width: "100vw" }}
      ></div>
    </div>
  );
};

export default MapComponent;
