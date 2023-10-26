import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Account } from "../../screens/Account"
import { News } from "../../screens/News";
import "./style.css";

export const Home = (): JSX.Element => {

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
