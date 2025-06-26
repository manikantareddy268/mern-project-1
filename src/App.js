import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import { Login } from "./Login.js";
import AppLayout from "./layout/AppLayout.js";
import Dashboard from "./pages/Dashboard.js";
import { useEffect, useState } from "react";
import axios from "axios";
import Error from "./pages/Error";
import Logout from "./pages/Logout.js";
import { serverEndpoint } from "./config.js";
import { useDispatch, useSelector } from "react-redux";
import { SET_USER } from "./redux/user/actions";

function App() {
  // const [useDetails, setUserDetails] = useState(null);
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails); 

  const isUserLoggedIn = async () => {
    try {
      const response = await axios.post(`${serverEndpoint}/auth/is-user-logged-in`, {}, {
        withCredentials: true
      });
      // updateUserDetails(response.data.user);
      dispatch({
        type: SET_USER,
        payload: response.data.user
      });
    } catch (error) {
      console.log(error);
    }
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
          <Login />
        </AppLayout>} 
      />
      <Route path="/dashboard" 
        element={userDetails ? <Dashboard /> :
        <Navigate to="/login" />}
      />

      <Route path="/logout" element={userDetails ?
        <Logout /> :
        <Navigate to="/login" />}
      />

      <Route path="/error" element={userDetails ?
        <Error /> :
        <AppLayout><Error /></AppLayout>}
        />
    </Routes>

    
  );
}

export default App;