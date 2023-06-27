import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/Map.css";
import axios from "axios";

const MapComponent = () => {
  const [userProvidedZipCode, setUserProvidedZipCode] = useState(""); // Initializes state variables for the user-provided ZIP code
  const [showPrompt, setShowPrompt] = useState(true); // Initializes state variables to control the visibility of the prompt

  const mapRef = useRef(null); // Ref to store the map instance

  // Defines an asynchronous function to geocode a ZIP code using MapQuest API
  const geocodeZipCode = async (zipcode) => {
    try {
      // Makes an HTTP GET request to the MapQuest API with the provided ZIP code
      const response = await axios.get(
        `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST_KEY}&location=${zipcode}`
      );

      // Extracts the latitude and longitude from the response data
      const { lat, lng } = response.data.results[0].locations[0].latLng;

      // Returns an object containing the latitude and longitude
      return { lat, lng };
    } catch (error) {
      // Throws an error if there's an issue with geocoding the ZIP code
      throw new Error("Error geocoding ZIP code:", error);
    }
  };

  // Function to add a marker to the map with the provided latitude, longitude, and pet information
  const addMarkerToMap = (lat, lng, petInfo) => {
    const randomOffset = Math.random() * 0.018; // Calculates a random offset for the marker position

    const markerIcon = L.divIcon({
      html: `<i class="bi bi-geo-alt-fill" style="color: ${
        petInfo.petSituation === "found" ? "#2793E2" : "#FD678D"
      };"></i>`, // Creates a marker icon with a color based on the pet situation (found or missing)
      iconSize: [25, 25], // Sets the size of the marker icon
    });

    const marker = L.marker([lat + randomOffset, lng + randomOffset], {
      icon: markerIcon,
    }).addTo(mapRef.current); // Adds a marker to the map at the specified latitude and longitude with the marker icon

    const missingFoundText =
      petInfo.petSituation === "found" ? "Found on" : "Missing since"; // Determines the text based on the pet situation

    // Formats the phone number
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

    marker.bindPopup(popupContent); // Binds the popup content to the marker
  };

  // Handles form submission for ZIP code prompt
  const handlePromptSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    const zipCodeInput = document.getElementById("zipCodeInput"); // Gets the ZIP code input element
    setUserProvidedZipCode(zipCodeInput.value); // Sets the user provided ZIP code
    setShowPrompt(false); // Hides the prompt after form submission
  };

  // Initializes the map instance
  useEffect(() => {
    mapRef.current = L.map("map").setView([0, 0], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(mapRef.current);

    // Trigger a map resize event to ensure it renders properly
    setTimeout(() => {
      mapRef.current.invalidateSize();
    }, 0);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  // Fetches pet data and geocode ZIP code when user provides a ZIP code
  useEffect(() => {
    if (userProvidedZipCode) {
      geocodeZipCode(userProvidedZipCode) // Geocodes the user provided ZIP code
        .then(({ lat, lng }) => {
          mapRef.current.setView([lat, lng], 13); // Sets the map view to the geocoded coordinates

          axios
            .get("http://localhost:5005/api/v1/pets") // Fetches pet data from the API
            .then((response) => {
              const fetchedPets = response.data;

              fetchedPets.forEach(async (pet) => {
                // Iterates over the fetched pets
                try {
                  const { lat, lng } = await geocodeZipCode(pet.petLocation); // Geocodes the pet's ZIP code
                  addMarkerToMap(lat, lng, pet); // Adds a marker to the map for the pet
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

  // Shows prompt if ZIP code is not provided
  useEffect(() => {
    if (!userProvidedZipCode) {
      setShowPrompt(true);
    }
  }, [userProvidedZipCode]);

  return (
    <div className="map-container">
      <div className="feed-container">{/* Add code for the feed here */}</div>
      <div className="map-wrapper">
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
          className="map"
        ></div>
      </div>
    </div>
  );
};

export default MapComponent;
