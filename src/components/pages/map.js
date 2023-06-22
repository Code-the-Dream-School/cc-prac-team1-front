import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/Map.css";
import axios from "axios";

const MapComponent = () => {
  const userProvidedZipCode = "94536"; // User-provided ZIP code

  useEffect(() => {
    const map = L.map("map").setView([0, 0], 13); // Default initial view with [0, 0] coordinates

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Geocode the user-provided ZIP code
    axios
      .get(
        `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST_KEY}&location=${userProvidedZipCode}`
      )
      .then((response) => {
        const { lat, lng } = response.data.results[0].locations[0].latLng;
        map.setView([lat, lng], 13); // Set the map view to the coordinates obtained from geocoding
        /* L.marker([lat, lng]).addTo(map); Add a marker at the geocoded coordinates */
      })
      .catch((error) => {
        console.error("Error geocoding ZIP code:", error);
      });
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
