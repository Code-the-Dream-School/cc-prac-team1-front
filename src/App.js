// Imports - Dependencies
import React from "react";
import { Routes, Route } from "react-router-dom";

// Imports - Pages
import LoginPage from "./components/pages/LoginPage";

// Defines the routes for the application
function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage />}
      />
    </Routes>
  );
}

export default App;
