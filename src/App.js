// Imports - Dependencies
import React from "react";
import { Routes, Route } from "react-router-dom";

// Imports - Pages
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

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
    </Routes>
  );
}

export default App;
