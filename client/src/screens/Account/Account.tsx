// Account.tsx
import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Login } from "../Account/Login";
import { Register } from "../Account/Register";
import { Contact } from "../Account/Contact";
import { host, logoutRoute } from "../../utils/APIRoutes";
import axios from "axios";
import "./style.css";

export const Account = (): JSX.Element => {
  const [isRegistering, setIsRegistering] = useState(false);
  // Initialize isLoggedIn to false to show the Login component by default
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userID = localStorage.getItem('userID');
    if (userID) {
      // Optionally, verify userID with your backend here
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = (userData: any) => {
    localStorage.setItem('userData', JSON.stringify(userData));
    setIsLoggedIn(true);
  };

  const toggleIsRegistering = () => {
    setIsRegistering(!isRegistering);
  };

  const handleLogout = async () => {
    const storedData = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY || 'defaultKey');

    // Clear local storage first
    localStorage.removeItem('userID');
    localStorage.removeItem(process.env.REACT_APP_LOCALHOST_KEY || 'defaultKey');
    setIsLoggedIn(false);

    // Then, notify the backend
    if (storedData) {
      const id = JSON.parse(storedData)._id;
      try {
        // Send a logout request to the server
        await axios.get(`${logoutRoute}/${id}`);
      } catch (error) {
        console.error('Error notifying backend during logout', error);
      }
    }
  };



  // Determine what text to display in the header based on isLoggedIn and isRegistering
  const headerText = isLoggedIn ? "Contact" : isRegistering ? "Register" : "Login";

  return (
    <div className="account-widget">
      <Header className="header-instance" property1="title" text={headerText} />
      {isLoggedIn ? (
        <Contact handleLogout={handleLogout} />
      ) : (
        isRegistering ? (
          <Register toggleIsRegistering={toggleIsRegistering} />
        ) : (
          <Login onLoginSuccess={handleLoginSuccess} toggleIsRegistering={toggleIsRegistering} />
        )
      )}
    </div>
  );
};

