// Imports - Dependencies
import React from "react";
import { Routes, Route } from "react-router-dom";

// Imports - Pages
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import DashBoard from "./components/pages/Dashboard";
import MapComponent from "./components/pages/map";
import LostOrFoundChoice from "./components/pages/LostOrFoundChoice";
import AddFoundPet from "./components/pages/AddFoundPet";
import AddLostPet from "./components/pages/AddLostPet";
import ProfilePage from "./components/pages/ProfilePage";
import EditProfile from "./components/pages/EditProfile";

// Defines the routes for the application
function App() {
  return (
    <Routes>
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
        element={<DashBoard />}
      />
      <Route
        path="/map"
        element={<MapComponent />}
      />
      <Route
        path="/selectlostorfound"
        element={<LostOrFoundChoice />}
      />
      <Route
        path="/addfoundpet"
        element={<AddFoundPet />}
      />
      <Route
        path="/addlostpet"
        element={<AddLostPet />}
      />
      <Route
        path="/profile"
        element={<ProfilePage />}
      />
      <Route
        path="/profile-edit"
        element={<EditProfile />}
      />
    </Routes>
  );
}

export default App;
