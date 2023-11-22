import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate if you're using React Router
import { Header } from "../../components/Header";
import { Login } from "../Account/Login";
import { Register } from "../Account/Register";
import { Contacts } from "./Contacts";
import { host, logoutRoute, allUsersRoute } from "../../utils/APIRoutes";
import axios from "axios";
import "./style.css";

export const Account = (): JSX.Element => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState<any>(null); // Adjust the type as per your user data structure
  const navigate = useNavigate(); // If you're using React Router

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setCurrentUser(userData);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const fetchContacts = async () => {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          try {
            const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
            setContacts(data.data);
          } catch (error) {
            console.error('Error fetching contacts:', error);
          }
        } else {
          navigate("/setAvatar");
        }
      }
    };

    fetchContacts();
  }, [currentUser, navigate]);


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
        <Contacts contacts={contacts} handleLogout={handleLogout} />
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

