import { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  // Add code to mock user authentication
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () =>{
    setIsLoggedIn(true);
  };

  const logout = () =>{
    setIsLoggedIn(false);
  };

  // Add programmatic navigation for login and logout
  useEffect(() =>{
    if (isLoggedIn) {
      // Navigates to Home route if user is logged in
      navigate("/");
    } else {
      // Navigate to login route if user is logged out
      navigate("/login");
    }
  }, [isLoggedIn])

  return (
    <div className="app">
      {/* Add conditional rendering so users have to be logged in to see pages on the site */}
      {isLoggedIn ? <NavBar logout={logout} /> : <Navigate to="/login" />}

      {/* Pass login function to Outlet as context */}
      <Outlet context={login} />
    </div>
  );
}

export default App;