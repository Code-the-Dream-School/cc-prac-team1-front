// Imports - Dependencies
import React from "react";
import { Routes, Route } from "react-router-dom";

// Imports - Pages
import LoginPage from "./components/pages/LoginPage";
import LostOrFoundChoice from './components/pages/LostOrFoundChoice'
import AddFoundPet from "./components/pages/AddFoundPet";
import AddLostPet from "./components/pages/AddLostPet";
import RegisterPage from "./components/pages/RegisterPage";
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
      path="/selectlostorfound"
      element={<LostOrFoundChoice/>}
      />
      <Route
      path="/addfoundpet"
      element={<AddFoundPet/>}
      />
        <Route
      path="/addlostpet"
      element={<AddLostPet/>}
      />
      <Route
        path="/profile"
        element={<ProfilePage />}
      />
      <Route
        path="/profile-edit"
        element={<EditProfile />}
      />
      <Route
        path="/register"
        element={<RegisterPage />}
      />
    </Routes>

  );
}

export default App;
