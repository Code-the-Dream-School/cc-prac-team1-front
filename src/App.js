// Imports - Dependencies
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Imports - Pages
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import MapComponent from "./components/pages/Map";
import LostOrFoundChoice from "./components/pages/LostOrFoundChoice";
import ProfilePage from "./components/pages/ProfilePage";
import EditProfile from "./components/pages/EditProfile";
import NavBar from "./components/elements/NavBar";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import HomePage from "./components/pages/HomePage";

// Defines the routes for the application
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // change this value to false to see the nav bar for non-logged in users

  return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<MapComponent />} />
          <Route path="/add-pet" element={<LostOrFoundChoice />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile-edit" element={<EditProfile />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
