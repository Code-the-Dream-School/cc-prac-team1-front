import React, { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/Map.css";
import axios from "axios";

const MapComponent = () => {
  const [userProvidedZipCode, setUserProvidedZipCode] = useState(""); // State to store the user-provided ZIP code

  const geocodeZipCode = async (zipcode) => {
    try {
      const response = await axios.get(
        `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST_KEY}&location=${zipcode}`
      );
      const { lat, lng } = response.data.results[0].locations[0].latLng;
      return { lat, lng };
    } catch (error) {
      throw new Error("Error geocoding ZIP code:", error);
    }
  };

  useEffect(() => {
    if (!userProvidedZipCode) {
      const zipCode = prompt("Please enter your ZIP code:"); // Prompt the user to enter their ZIP code
      setUserProvidedZipCode(zipCode);
    }
  }, [userProvidedZipCode]);

  useEffect(() => {
    if (userProvidedZipCode) {
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
            petInfo.petSituation === "found" ? "#2793E2" : "#FD678D"
          };"></i>`,
          iconSize: [25, 25],
        });

        const marker = L.marker([lat + randomOffset, lng + randomOffset], {
          icon: markerIcon,
        }).addTo(map);

        // Customize the popup content
        const missingFoundText =
          petInfo.petSituation === "found" ? "Found on" : "Missing since";

        const popupContent = `
          <div class="popup-container">
            <div class="popup-image">
              <!-- <img src="path_to_image" alt="Pet Image" /> -->
            </div>
            <div class="popup-info">
            <h3>${
              petInfo.petName ? petInfo.petName : "Pet name not available"
            }</h3>
            <p>${missingFoundText}: ${petInfo.petDate}</p>
              <h5>Contact Information</h5>
              <p>Phone Number: ${petInfo.contact.phone}</p>
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

          // Fetch all pets from the backend API
          axios
            .get("http://localhost:5005/api/v1/pets")
            .then((response) => {
              const fetchedPets = response.data;
              console.log(fetchedPets);

              // Add markers for each pet
              fetchedPets.forEach(async (pet) => {
                try {
                  const { lat, lng } = await geocodeZipCode(pet.petLocation);
                  addMarkerToMap(lat, lng, pet);
                } catch (error) {
                  console.error("Error geocoding pet's ZIP code:", error);
                }
              });
            })
            .catch((error) => {
              console.error("Error fetching pets:", error);
            });
        })
        .catch((error) => {
          console.error("Error geocoding ZIP code:", error);
        });
    }
  }, [userProvidedZipCode]);

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
