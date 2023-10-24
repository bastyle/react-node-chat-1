import React, { useState } from "react";
import { Header } from "../../components/Header";
import "./style.css";

export const Account = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="account-widget">
      <Header className="header-instance" property1="title" text="Login" />
      <div className="messages">
        <div className="text-wrapper-13">Login</div>
      </div>
      <div className="frame-9">
        <div className="messages-2">
          <div className="message">
            <label className="frame-10">
              <div className="frame-11">
                <input
                  className="text-input"
                  type="text"
                  placeholder="Login: user123@abc.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="icon"></div>
            </label>
            <img className="line" alt="Line" src="/img/line-2-1.svg" />
          </div>
          <div className="message">
            <label className="frame-10">
              <div className="frame-11">
                <input
                  className="text-input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="icon"></div>
            </label>
            <img className="line" alt="Line" src="/img/line-2-1.svg" />
          </div>
        </div>
        <button className="buttin" onClick={handleLogin}>
          <div className="text-wrapper-15">Login</div>
          <div className="icon-2"></div>
        </button>
      </div>
    </div>
  );
};
