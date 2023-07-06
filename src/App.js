// Imports - Dependencies
import React from "react";
import { Routes, Route } from "react-router-dom";

// Imports - Pages
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import MapComponent from "./components/pages/Map";
import AddPetPage from "./components/pages/AddPet";
import ProfilePage from "./components/pages/ProfilePage";
import EditProfile from "./components/pages/EditProfile";
import NavBar from "./components/elements/NavBar";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import HomePage from "./components/pages/HomePage";
import PetPage from "./components/pages/PetPage";

// Defines the routes for the application
function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/register"
            element={<RegisterPage />}
          />
          <Route
            path="/dashboard"
            element={<MapComponent />}
          />
          <Route
            path="/add-pet"
            element={<AddPetPage />}
          />
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
          <Route
            path="/profile-edit/:id"
            element={<EditProfile />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="/contact"
            element={<ContactPage />}
          />
          <Route
            path="/pet-page"
            element={<PetPage />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
