import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { Contacts } from "./Contacts";
import { Header } from "../../components/Header";
import { AccountProps } from '../../types/interfaces';
import "./style.css";


// Account component accepts several props related to user status and actions, and renders different components based on the user's state.
export const Account = ({ currentUser, contacts, onLoginSuccess, onLogout, setCurrentChat }: AccountProps): JSX.Element => {
  // State to manage whether the user is in the registering process or not.
  const [isRegistering, setIsRegistering] = useState(false);

  // Function to toggle the isRegistering state.
  const toggleIsRegistering = () => {
    setIsRegistering(!isRegistering);
  };

  // Determines the header text based on the user's status: logged in, registering, or logging in.
  const headerText = currentUser ? "Contacts" : isRegistering ? "Register" : "Login";

  return (
    <div className="account-widget">
      {/* Header component displaying the current status as its text */}
      <Header className="header-instance" property1="title" text={headerText} />

      {/* Conditional rendering: 
          - If a user is logged in, show the Contacts component.
          - If the user is registering, show the Register component.
          - Otherwise, show the Login component. */}
      {currentUser ? (
        <Contacts
          contacts={contacts}
          handleLogout={onLogout}
          setCurrentChat={setCurrentChat} // Function passed from Home to handle chat selection
        />
      ) : (
        isRegistering ? (
          <Register toggleIsRegistering={toggleIsRegistering} />
        ) : (
          <Login onLoginSuccess={onLoginSuccess} toggleIsRegistering={toggleIsRegistering} />
        )
      )}
    </div>
  );
};
