import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/Map.css";
import axios from "axios";
import { Row, Col, Card, CardBody } from "reactstrap";
import loadingImage from "../../creative-assets/cat-astronaut.gif";

const MapComponent = () => {
  const [userProvidedZipCode, setUserProvidedZipCode] = useState(""); // Initializes state variables for the user-provided ZIP code
  const [showPrompt, setShowPrompt] = useState(true); // Initializes state variables to control the visibility of the prompt
  const [showGif, setShowGif] = useState(true); // Initializes state variable to control the visibility of the gif

  const mapRef = useRef(null); // Ref to store the map instance

  // Sets the token variable and url for the Fetch API requests
  const token = localStorage.getItem("token");

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  // Defines an asynchronous function to geocode a ZIP code using MapQuest API
  const geocodeZipCode = async (zipcode) => {
    try {
      // Makes an HTTP GET request to the MapQuest API with the provided ZIP code
      const response = await axios.get(
        `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST_KEY}&location=${zipcode}`
      );

      // Extracts the latitude, longitude, city, and state from the response data
      const { lat, lng } = response.data.results[0].locations[0].latLng;
      const { adminArea5: city, adminArea3: state } =
        response.data.results[0].locations[0];

      // Returns an object containing the latitude, longitude, city, and state
      return { lat, lng, city, state };
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
          <img
            src=petInfo.image
            alt="Pet_Image"
          />
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
    mapRef.current = L.map("map").setView([0, 0], 14);

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

  const [petList, setPetList] = useState([]);

  // Fetches pet data and geocode ZIP code when user provides a ZIP code
  useEffect(() => {
    if (userProvidedZipCode) {
      geocodeZipCode(userProvidedZipCode)
        .then(({ lat, lng }) => {
          mapRef.current.setView([lat, lng], 14);
          axios
            .get("http://localhost:5005/api/v1/pets", config)
            .then((response) => {
              const fetchedPets = response.data;
              setPetList(fetchedPets);
              fetchedPets.forEach(async (pet) => {
                try {
                  const { lat, lng } = await geocodeZipCode(pet.petLocation);
                  addMarkerToMap(lat, lng, pet);
                } catch (error) {
                  console.error("Error geocoding pet's ZIP code:", error);
                }
              });
              setShowGif(false);
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
      <div className="feed-container">
        <div className="filter-container">
          <div className="filter-row">
            <div className="filter-item">
              <label htmlFor="situationFilter">Pet Situation:</label>
              <div className="checkbox-group">
                <div>
                  <input
                    type="checkbox"
                    id="situationFilter1"
                    value="found"
                  />
                  <label htmlFor="situationFilter1">Found</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="situationFilter2"
                    value="lost"
                  />
                  <label htmlFor="situationFilter2">Lost</label>
                </div>
              </div>
            </div>
            <div className="filter-item">
              <label htmlFor="genderFilter">Pet Gender:</label>
              <div className="checkbox-group">
                <div>
                  <input
                    type="checkbox"
                    id="genderFilter1"
                    value="male"
                  />
                  <label htmlFor="genderFilter1">Male</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="genderFilter2"
                    value="female"
                  />
                  <label htmlFor="genderFilter2">Female</label>
                </div>
              </div>
            </div>
            <div className="filter-item">
              <label htmlFor="dateFilter">Pet Date:</label>
              <div className="calendar-group">
                <input
                  type="date"
                  id="dateFilter"
                />
              </div>
            </div>

            <div className="filter-item">
              <label htmlFor="colorFilter">Pet Color:</label>
              <div className="input-group">
                <input
                  type="text"
                  id="nameFilter"
                  placeholder="Enter pet's color"
                />
              </div>
            </div>
          </div>
          <div className="filter-row">
            <div className="filter-item">
              <label htmlFor="nameFilter">Pet Name:</label>
              <div className="input-group">
                <input
                  type="text"
                  id="nameFilter"
                  placeholder="Enter pet name"
                />
              </div>
            </div>
            <div className="filter-item">
              <label htmlFor="typeFilter">Animal Type:</label>
              <div className="input-group">
                <input
                  type="text"
                  id="typeFilter"
                  placeholder="Enter animal type"
                />
              </div>
            </div>
            <div className="filter-item">
              <label htmlFor="breedFilter">Pet Breed:</label>
              <div className="input-group">
                <input
                  type="text"
                  id="breedFilter"
                  placeholder="Enter pet breed"
                />
              </div>
            </div>
          </div>
          <div className="filter-buttons">
            <button className="filter-button">Filter</button>
            <button className="filter-button">Clear Filters</button>
          </div>
        </div>
        <div className="image-container">
          {showGif && (
            <img
              src={loadingImage}
              alt="Loading"
              className="loading-image"
            />
          )}
        </div>
        <Row>
          {petList.map((pet, index) => (
            <Col
              md={6}
              key={index}
            >
              <Card className="mb-3">
                <div className="card-header">
                  <img
                    src={pet.petImage || "https://picsum.photos/id/237/300/200"}
                    alt="Pet_Image"
                    className="card-image"
                  />
                </div>
                <CardBody>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div>
                      <h5 className="card-title mb-0">
                        {pet.petName || "Pet name not available"}
                      </h5>
                    </div>
                    <div className={`card-pet-situation ${pet.petSituation}`}>
                      {pet.petSituation === "found" ? "Found" : "Lost"}
                    </div>
                  </div>
                  <p className="card-date mb-2">
                    {pet.petSituation === "found"
                      ? "Found on"
                      : "Missing since"}{" "}
                    {pet.petDate}
                  </p>
                  <p className="card-description">
                    {pet.petDescription || "No description provided"}
                  </p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="map-wrapper">
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
