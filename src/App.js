// Imports - Dependencies
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Imports - Pages
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import Dashboard from "./components/pages/Dashboard";
import MapComponent from "./components/pages/Map";
import LostOrFoundChoice from "./components/pages/LostOrFoundChoice";
import AddFoundPet from "./components/pages/AddFoundPet";
import AddLostPet from "./components/pages/AddLostPet";
import ProfilePage from "./components/pages/ProfilePage";
import EditProfile from "./components/pages/EditProfile";
import NavBar from "./components/elements/NavBar";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";

// Defines the routes for the application
function App() {
  const location = useLocation();
  const navBarPaths = ["/", "/about", "/contact", "/dashboard", "/profile"];
  const showNabBar = navBarPaths.includes(location.pathname);

  return (
    <div>
      {showNabBar && <NavBar />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/map" element={<MapComponent />} />
        <Route path="/selectlostorfound" element={<LostOrFoundChoice />} />
        <Route path="/addfoundpet" element={<AddFoundPet />} />
        <Route path="/addlostpet" element={<AddLostPet />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile-edit" element={<EditProfile />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contactpage" element={<ContactPage/>} />
      </Routes>
    </div>
  );
}

export default App;
