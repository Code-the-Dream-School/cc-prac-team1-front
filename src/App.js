// Imports - Dependencies
import React from "react";
import { Routes, Route } from "react-router-dom";

// Imports - Pages
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import MapComponent from "./components/pages/Map";
import LostOrFoundChoice from "./components/pages/LostOrFoundChoice";
import AddFoundPet from "./components/pages/AddFoundPet";
import AddLostPet from "./components/pages/AddLostPet";
import ProfilePage from "./components/pages/ProfilePage";
import EditProfile from "./components/pages/EditProfile";
import NavBar from "./components/elements/NavBar";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import HomePage from "./components/pages/HomePage";

// Defines the routes for the application
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<MapComponent />} />
        <Route path="/selectlostorfound" element={<LostOrFoundChoice />} />
        <Route path="/addfoundpet" element={<AddFoundPet />} />
        <Route path="/addlostpet" element={<AddLostPet />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile-edit/:id" element={<EditProfile />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
