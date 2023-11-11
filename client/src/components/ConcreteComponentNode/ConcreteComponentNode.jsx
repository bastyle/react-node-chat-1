/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Property1AiHeader } from "../../icons/Property1AiHeader";
import { Property1AiLastMessage } from "../../icons/Property1AiLastMessage";
import "./style.css";

export const ConcreteComponentNode = ({
  property1,
  propertyCompanyClassName,
  frameClassName,
  ellipse = "/img/ellipse-6-14.png",
  img = "/img/ellipse-6-16.png",
  ellipse1 = "/img/ellipse-6-15.png",
  divClassName,
}) => {
  return (
    <>
      {["company", "person-1", "person-2", "person-3"].includes(property1) && (
        <div className={`concrete-component-node ${property1} ${propertyCompanyClassName}`}>
          {property1 === "company" && (
            <div className={`div-wrapper ${frameClassName}`}>
              <div className={`text-wrapper-12 ${divClassName}`}></div>
            </div>
          )}

          {["person-1", "person-2", "person-3"].includes(property1) && (
            <img
              className={`img ${frameClassName}`}
              alt="Ellipse"
              src={property1 === "person-2" ? ellipse1 : property1 === "person-3" ? ellipse : img}
            />
          )}
        </div>
      )}

      {property1 === "AI-last-message" && <Property1AiLastMessage className="property-AI-last" />}

      {["AI-header", "AI-previous-messages"].includes(property1) && (
        <Property1AiHeader className="property-AI" color={property1 === "AI-header" ? "white" : "#B8B8B8"} />
      )}
    </>
  );
};

ConcreteComponentNode.propTypes = {
  property1: PropTypes.oneOf([
    "person-2",
    "AI-last-message",
    "AI-previous-messages",
    "person-1",
    "AI-header",
    "person-3",
    "company",
  ]),
  ellipse: PropTypes.string,
  img: PropTypes.string,
  ellipse1: PropTypes.string,
};
