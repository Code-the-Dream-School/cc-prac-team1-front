import React, { useState, useEffect } from 'react';
import { getAllData } from './util/index';

const URL = 'http://localhost:8000/api/v1/';
// Imports - Pages
import LoginPage from "./components/pages/LoginPage";
import Dashboard from "./components/pages/Dashboard";

function App() {

const [message, setMessage] = useState(''); 

  useEffect(() => {

    (async () => {
      const myData = await getAllData(URL)
      setMessage(myData.data);
    })();
      
    return () => {
      console.log('unmounting');
    }

  }, []);

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
