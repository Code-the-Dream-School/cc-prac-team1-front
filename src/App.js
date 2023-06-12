// Imports - Dependencies
import React from "react";
import { Routes, Route } from "react-router-dom";

// Imports - Pages
import LoginPage from "./components/pages/LoginPage";
import LostOrFoundChoice from './components/pages/LostOrFoundChoice'
import AddFoundPet from "./components/pages/AddFoundPet";
import AddLostPet from "./components/pages/AddLostPet";

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
    </Routes>

  );
}

export default App;
