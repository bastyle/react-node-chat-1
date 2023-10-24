import React from "react";
import { Header } from "../../components/Header";
import { Intercom } from "../../screens/Intercom";
import "./style.css";

export const Home = (): JSX.Element => {
  return (
    <div className="home">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">

          <div className="intercom">
            <Intercom />
          </div>

          <div className="intercom-widget-wrapper">
            <div className="intercom-widget">
              <Header className="header-instance" property1="title" text="Login" />
              <div className="messages">
                <div className="text-wrapper-13">Login</div>
              </div>
              <div className="frame-9">
                <div className="messages-2">
                  <div className="message">
                    <div className="frame-10">
                      <div className="frame-11">
                        <div className="text-wrapper-14">Login: user123@abc.com</div>
                      </div>
                      <div className="icon"></div>
                    </div>
                    <img className="line" alt="Line" src="/img/line-2-1.svg" />
                  </div>
                  <div className="message">
                    <div className="frame-10">
                      <div className="frame-11">
                        <div className="text-wrapper-14">Password:</div>
                      </div>
                      <div className="icon"></div>
                    </div>
                    <img className="line" alt="Line" src="/img/line-2-1.svg" />
                  </div>
                </div>
                <div className="buttin">
                  <div className="text-wrapper-15">Login</div>
                  <div className="icon-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
