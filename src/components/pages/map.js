import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
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

    // Add markers to the map
    const addMarkerToMap = (lat, lng, petInfo, isFound) => {
      const randomOffset = Math.random() * 0.018; // Adjust the offset value as needed. Helps prevent markers overlapping with one another.

      const markerIcon = L.divIcon({
        html: `<i class="bi bi-geo-alt-fill" style="color: ${
          isFound ? "#2793E2" : "#FD678D"
        };"></i>`,
        iconSize: [25, 25],
      });

      const marker = L.marker([lat + randomOffset, lng + randomOffset], {
        icon: markerIcon,
      }).addTo(map);

      // Customize the popup content
      const missingFoundText = isFound ? "Found on" : "Missing since";

      const popupContent = `
        <div class="popup-container">
          <div class="popup-image">
          <!-- <img src="path_to_image" alt="Pet Image" /> -->
          </div>
          <div class="popup-info">
            <h3>${petInfo.petName}</h3>
            <p>${missingFoundText}: ${petInfo.missingDate}</p>
            <h5>Contact Information</h5>
            <p>${petInfo.contactPhoneNumber}</p>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);
    };

    // Geocode the user-provided ZIP code
    axios
      .get(
        `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST_KEY}&location=${userProvidedZipCode}`
      )
      .then((response) => {
        const { lat, lng } = response.data.results[0].locations[0].latLng;
        map.setView([lat, lng], 13); // Set the map view to the coordinates obtained from geocoding

        const petInfo = {
          petName: "Buddy",
          missingDate: "June 15, 2023",
          contactPhoneNumber: "555-123-4567",
        }; // Replace with actual pet information. In prod, it will iterate through a list fetched from the backend.

        // Add multiple markers with random pet status and slight random offsets (testing purposes)
        for (let i = 0; i < 3; i++) {
          const isFound = Math.random() < 0.5; // Randomly assign pet status (50% chance of being found).
          addMarkerToMap(lat, lng, petInfo, isFound);
        }
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
