import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { Contacts } from "./Contacts";
import { Header } from "../../components/Header";
import { AccountProps } from '../../types/interfaces';
import "./style.css";

export const Account = ({ currentUser, contacts, onLoginSuccess, onLogout, setCurrentChat }: AccountProps): JSX.Element => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleIsRegistering = () => {
    setIsRegistering(!isRegistering);
  };

  const headerText = currentUser ? "Contacts" : isRegistering ? "Register" : "Login";

  return (
    <div className="account-widget">
      <Header className="header-instance" property1="title" text={headerText} />
      {currentUser ? (
        <Contacts
          contacts={contacts}
          handleLogout={onLogout}
          setCurrentChat={setCurrentChat} // Use the function passed from Home
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

