/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Reply = ({ property, device, className }) => {
  return (
    <div className={`reply ${device} ${className}`}>
      <div className="frame-9">
        <div className={`type-a-reply ${property}`}>
          {["one-icon", "three-icons", "two-icons"].includes(property) && <>Type a reply...</>}

          {property === "send" && <p className="text-wrapper-21">I’m looking for my order. Where is it?</p>}
        </div>
        <div className="frame-10">
          <div className={`chips-text property-${property}`}>
            {property === "two-icons" && <></>}

            {property === "one-icon" && <></>}

            {property === "send" && <></>}

            {property === "three-icons" && <></>}
          </div>
          {["three-icons", "two-icons"].includes(property) && (
            <div className="chips-text-2">
              {property === "three-icons" && <></>}

              {property === "two-icons" && <></>}
            </div>
          )}

          {property === "three-icons" && <div className="chips-text-2"></div>}
        </div>
      </div>
    </div>
  );
};

Reply.propTypes = {
  property: PropTypes.oneOf(["send", "two-icons", "one-icon", "three-icons"]),
  device: PropTypes.oneOf(["desktop", "mobile"]),
};
