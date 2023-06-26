import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/Map.css";
import axios from "axios";

const MapComponent = () => {
  const [userProvidedZipCode, setUserProvidedZipCode] = useState("");
  const [showPrompt, setShowPrompt] = useState(true);
  const mapRef = useRef(null); // Ref to store the map instance

  // Function to geocode a given ZIP code and return latitude and longitude
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

  // Function to add a marker to the map with the provided latitude, longitude, and pet information
  const addMarkerToMap = (lat, lng, petInfo) => {
    const randomOffset = Math.random() * 0.018;

    const markerIcon = L.divIcon({
      html: `<i class="bi bi-geo-alt-fill" style="color: ${
        petInfo.petSituation === "found" ? "#2793E2" : "#FD678D"
      };"></i>`,
      iconSize: [25, 25],
    });

    const marker = L.marker([lat + randomOffset, lng + randomOffset], {
      icon: markerIcon,
    }).addTo(mapRef.current);

    const missingFoundText =
      petInfo.petSituation === "found" ? "Found on" : "Missing since";

    // Format the phone number
    const formattedPhoneNumber = `(${petInfo.contact.phone.slice(
      0,
      3
    )}) ${petInfo.contact.phone.slice(3, 6)}-${petInfo.contact.phone.slice(6)}`;

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
          <p>Phone Number: ${formattedPhoneNumber}</p>
        </div>
      </div>
    `;

    marker.bindPopup(popupContent);
  };

  // Handle form submission for ZIP code prompt
  const handlePromptSubmit = (e) => {
    e.preventDefault();
    const zipCodeInput = document.getElementById("zipCodeInput");
    setUserProvidedZipCode(zipCodeInput.value);
    setShowPrompt(false);
  };

  // Initialize the map instance
  useEffect(() => {
    mapRef.current = L.map("map").setView([0, 0], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(mapRef.current);

    return () => {
      mapRef.current.remove(); // Remove the map when the component unmounts
    };
  }, []);

  // Fetch pet data and geocode ZIP code when user provides a ZIP code
  useEffect(() => {
    if (userProvidedZipCode) {
      geocodeZipCode(userProvidedZipCode)
        .then(({ lat, lng }) => {
          mapRef.current.setView([lat, lng], 13); // Update the map view

          axios
            .get("http://localhost:5005/api/v1/pets")
            .then((response) => {
              const fetchedPets = response.data;

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

  // Show prompt if ZIP code is not provided
  useEffect(() => {
    if (!userProvidedZipCode) {
      setShowPrompt(true);
    }
  }, [userProvidedZipCode]);

  return (
    <div style={{ position: "relative" }}>
      <div className="map-button-container">
        <button className="map-button-primary">Button 1</button>
        <button className="map-button-secondary">Button 2</button>
      </div>
      {showPrompt && (
        <div className="custom-prompt-overlay">
          <form
            className="custom-prompt-form"
            onSubmit={handlePromptSubmit}
          >
            <label htmlFor="zipCodeInput">Please enter your ZIP code:</label>
            <input
              type="text"
              id="zipCodeInput"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      <div
        id="map"
        style={{ height: "100vh", width: "100vw" }}
      ></div>
    </div>
  );
};

export default MapComponent;
