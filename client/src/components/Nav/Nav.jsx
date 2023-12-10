/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import IconSvg from "../../../src/ai-svgrepo-com.svg"

export const Nav = ({ property1, notification, className, iconClassName, divClassName, onNavChange }) => {
  return (
    <div className={`nav ${className}`}>
      <div className="frame-14">
        <div className="element" onClick={() => onNavChange("messenger")}>
          <div className={`icon-5 property-1-7-${property1}`}></div>
          <div className={`text-wrapper-18 property-1-6-${property1}`}>Messenger</div>
        </div>
        <div className="element" onClick={() => onNavChange("openai")}>
          <div className={`icon-5 property-1-7-${property1}`}><img src={IconSvg} alt="AI Icon" /></div>
          <div className={`text-wrapper-19 property-1-8-${property1}`}>AI</div>
          {notification && property1 === "messages" && (
            <div className="notification">
              <div className="icon-6">1</div>
            </div>
          )}
        </div>
        <div className="element">
          <div className={`icon-7 property-1-9-${property1}`}></div>
          <div className={`text-wrapper-20 property-1-10-${property1}`}>Help</div>
        </div>
        <div className="element">
          <div
            className={`icon-8 property-1-11-${property1} ${!notification || property1 === "messages" ? iconClassName : undefined
              }`}
          >
            
          </div>
          <div
            className={`text-wrapper-21 property-1-12-${property1} ${!notification || property1 === "messages" ? divClassName : undefined
              }`}
          >
            News
          </div>
        </div>
      </div>
      {notification && ["help", "home", "news"].includes(property1) && (
        <div className={`icon-wrapper property-1-13-${property1}`}>
          <div className="icon-6">1</div>
        </div>
      )}
    </div>
  );
};

Nav.propTypes = {
  property1: PropTypes.oneOf(["messages", "home", "news", "help"]),
  notification: PropTypes.bool,
  onNavChange: PropTypes.func,
};
