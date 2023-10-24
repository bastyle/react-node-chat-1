/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ChipNews = ({ className, divClassName, text = "Support" }) => {
  return (
    <div className={`chip-news ${className}`}>
      <div className={`support ${divClassName}`}>{text}</div>
    </div>
  );
};

ChipNews.propTypes = {
  text: PropTypes.string,
};
