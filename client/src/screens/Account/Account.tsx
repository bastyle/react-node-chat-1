// Account.tsx
import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Login } from "../Account/Login";
import { Register } from "../Account/Register";
import "./style.css";

export const Account = (): JSX.Element => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleIsRegistering = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="account-widget">
      <Header className="header-instance" property1="title" text={isRegistering ? "Register" : "Login"} />
      {isRegistering ? (
        <Register toggleIsRegistering={toggleIsRegistering} />
      ) : (
        <Login toggleIsRegistering={toggleIsRegistering} />
      )}
    </div>
  );
};
