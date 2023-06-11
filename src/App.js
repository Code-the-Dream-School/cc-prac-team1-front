// Imports - Dependencies
import React from "react";
import { Routes, Route } from "react-router-dom";

const URL = 'http://localhost:8000/api/v1/';
// Imports - Pages
import LoginPage from "./components/pages/LoginPage";
// import Dashboard from "./components/pages/Dashboard";

// Defines the routes for the application
function App() {
  return (
    <>
      <h1>{message}</h1>
    
    <Routes>
      <Route
        path="/login"
        element={<LoginPage />}
      />
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />
    </Routes>
    </>
  );
}

export default App;
