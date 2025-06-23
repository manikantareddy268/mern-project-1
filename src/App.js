import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Home.js";
import { Login } from "./Login.js";
import AppLayout from "./layout/AppLayout.js";
import Dashboard from "./pages/Dashboard.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const [userDetails, setUserDetails] = useState(null);

  const updateUserDetails = (updatedUserDetails) => {
    setUserDetails(updatedUserDetails);
  };

  const isUserLoggedIn = async () => {
    const response = await axios.post('http://localhost5001/auth/is-user-logged-in', {}, {
      withCredentials: true
    });
    updateUserDetails(response.data.user);
  };

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  return (
    <Routes>
      <Route path="/" element={userDetails ? 
        <Navigate to="/dashboard" /> :
        <AppLayout>
          <Home />
        </AppLayout>} 
      />
      <Route path="/login" element={userDetails ?
        <Navigate to="/dashboard" /> :
        <AppLayout>
          <Login updateUserDetails={updateUserDetails} />
        </AppLayout>} 
      />
      <Route path="/dashboard" 
        element={userDetails ? <Dashboard /> :
        <Navigate to="/login" />} 
      />
    </Routes>
  );
}

export default App;