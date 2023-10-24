import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Account } from "../../screens/Account"
import { News } from "../../screens/News";
import "./style.css";

export const Home = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="home">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="intercom">
            <News />
          </div>
          <div className="intercom-widget-wrapper">
            <Account />
          </div>
        </div>
      </div>
    </div>
  );
};
