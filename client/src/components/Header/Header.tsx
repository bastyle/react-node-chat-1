/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Avatars } from "../../icons/Avatars";
import { Avatars1 } from "../../icons/Avatars1";
import "./style.css";

interface Props {
  property1:
    | "home-1"
    | "operator-stamp"
    | "company-stamp"
    | "expanded-1"
    | "variant-9"
    | "company"
    | "title"
    | "home-2"
    | "AI-bot-stamp";
  className: any;
  text: string;
}

export const Header = ({ property1, className, text = "Title" }: Props): JSX.Element => {
  return (
    <div className={`header ${property1} ${className}`}>
      {["AI-bot-stamp", "company-stamp", "company", "operator-stamp", "variant-9"].includes(property1) && (
        <div className="text-wrapper"></div>
      )}

      {["AI-bot-stamp", "company-stamp", "company", "operator-stamp", "variant-9"].includes(property1) && (
        <div className="widget-header">
          <div className="div">
            {["company-stamp", "company"].includes(property1) && (
              <>
                <div className="ellipse-wrapper">
                  <img className="ellipse" alt="Ellipse" src="/img/ellipse-6-13.png" />
                </div>
                <div className="img-wrapper">
                  <img className="ellipse" alt="Ellipse" src="/img/ellipse-6-14.png" />
                </div>
                <div className="avatars-2">
                  <img className="ellipse" alt="Ellipse" src="/img/ellipse-6-15.png" />
                </div>
              </>
            )}

            {property1 === "AI-bot-stamp" && <Avatars className="instance-node" />}

            {property1 === "variant-9" && <Avatars1 className="instance-node" />}

            {property1 === "operator-stamp" && (
              <div className="avatars-3">
                <img className="ellipse" alt="Ellipse" src="/img/ellipse-6-14.png" />
              </div>
            )}
          </div>
          <div className="frame">
            <div className="bothrs">
              {["company-stamp", "company"].includes(property1) && <>Bothrs</>}

              {["AI-bot-stamp", "variant-9"].includes(property1) && <>Fin</>}

              {property1 === "operator-stamp" && <>Hannah</>}
            </div>
            {["AI-bot-stamp", "company-stamp", "operator-stamp", "variant-9"].includes(property1) && (
              <div className="frame-2">
                {property1 === "company-stamp" && (
                  <>
                    <div className="text-wrapper-2"></div>
                    <div className="text-wrapper-3">A few minutes</div>
                  </>
                )}

                {["AI-bot-stamp", "operator-stamp", "variant-9"].includes(property1) && (
                  <div className="frame-3">
                    {["AI-bot-stamp", "variant-9"].includes(property1) && (
                      <>
                        <div className="AI-label">
                          <div className="text-wrapper-4">AI</div>
                        </div>
                        <div className="text-wrapper-5">Bot</div>
                      </>
                    )}

                    {property1 === "operator-stamp" && <>Active 1h ago</>}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {property1 === "operator-stamp" && <div className="ellipse-2" />}

      {["expanded-1", "home-1", "home-2", "title"].includes(property1) && (
        <div className="frame-4">
          {["expanded-1", "title"].includes(property1) && (
            <div className="frame-5">
              {property1 === "title" && <div className="title-2">{text}</div>}

              {property1 === "expanded-1" && (
                <>
                  <div className="text-wrapper-6"></div>
                  <div className="text-wrapper-7">Customer Service</div>
                </>
              )}
            </div>
          )}

          {property1 === "expanded-1" && (
            <>
              <div className="div">
                <div className="avatars-4">
                  <img className="img" alt="Ellipse" src="/img/ellipse-6-4.png" />
                </div>
                <div className="avatars-5">
                  <img className="img" alt="Ellipse" src="/img/ellipse-6-5.png" />
                </div>
                <div className="avatars-6">
                  <img className="img" alt="Ellipse" src="/img/ellipse-6-6.png" />
                </div>
              </div>
              <div className="frame-6">
                <p className="p">We typically reply in a few minutes</p>
                <div className="text-wrapper-8">Please ask your question.</div>
              </div>
            </>
          )}

          {["home-1", "home-2"].includes(property1) && (
            <>
              <div className="frame-7">
                {property1 === "home-2" && (
                  <div className="frame-wrapper">
                    <div className="div-wrapper">
                      <div className="text-wrapper-9"></div>
                    </div>
                  </div>
                )}

                <div className="div">
                  <div className="avatars-7">
                    <img
                      className="ellipse-3"
                      alt="Ellipse"
                      src={property1 === "home-1" ? "/img/ellipse-6-7.png" : "/img/ellipse-6-10.png"}
                    />
                  </div>
                  <div className="avatars-8">
                    <img
                      className="ellipse-3"
                      alt="Ellipse"
                      src={property1 === "home-1" ? "/img/ellipse-6-8.png" : "/img/ellipse-6-11.png"}
                    />
                  </div>
                  <div className="avatars-9">
                    <img
                      className="ellipse-3"
                      alt="Ellipse"
                      src={property1 === "home-1" ? "/img/ellipse-6-9.png" : "/img/ellipse-6-12.png"}
                    />
                  </div>
                </div>
              </div>
              <div className="frame-8">
                <div className="text-wrapper-10">Hi there</div>
                <div className="text-wrapper-11">👋</div>
                <div className="text-wrapper-12">How can we help?</div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  property1: PropTypes.oneOf([
    "home-1",
    "operator-stamp",
    "company-stamp",
    "expanded-1",
    "variant-9",
    "company",
    "title",
    "home-2",
    "AI-bot-stamp",
  ]),
  text: PropTypes.string,
};
