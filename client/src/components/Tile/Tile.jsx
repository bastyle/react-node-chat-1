/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ChipNews } from "../ChipNews";
import "./style.css";

export const Tile = ({
  property1,
  className,
  image = "/img/image-4-2.png",
  chipNewsChipNewsClassName,
  chipNewsDivClassName,
  chipNewsDivClassNameOverride,
  chipNewsChipNewsClassNameOverride,
  text = "Introducing a new file content source for Fin - PDF Uploads",
  text1 = "When you migrate your articles to Intercom using our Zendesk migration tool – we&#39;ll now automatically create URL redirects from your previous URLs to your new Intercom articles.",
}) => {
  return (
    <div className={`tile ${property1} ${className}`}>
      {["help", "recent-message"].includes(property1) && (
        <div className="frame-9">
          <div className="recent-message-2">
            {property1 === "recent-message" && <>Recent message</>}

            {property1 === "help" && (
              <>
                <div className="text-wrapper-13">Search for help</div>
                <div className="icon"></div>
              </>
            )}
          </div>
          <div className="frame-10">
            {property1 === "recent-message" && (
              <>
                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <div className="avatars-10">
                      <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-6.png" />
                    </div>
                    <div className="avatars-11">
                      <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-6-1.png" />
                    </div>
                    <div className="avatars-12">
                      <img className="ellipse-4" alt="Ellipse" src="/img/ellipse-6-18.png" />
                    </div>
                  </div>
                </div>
                <div className="frame-11">
                  <p className="text-wrapper-14">Hi there. I’m Bothrs Assistant. How can I help you?</p>
                  <div className="text-wrapper-15">Customer Service・9m ago</div>
                </div>
                <div className="icon-2"></div>
              </>
            )}

            {property1 === "help" && (
              <>
                <div className="frame-12">
                  <div className="text-wrapper-16">Pricing</div>
                  <div className="icon-2"></div>
                </div>
                <div className="frame-12">
                  <p className="text-wrapper-16">Send a custom user attributes to intercom</p>
                  <div className="icon-2"></div>
                </div>
                <div className="frame-12">
                  <div className="text-wrapper-16">News explained</div>
                  <div className="icon-2"></div>
                </div>
                <div className="frame-12">
                  <p className="text-wrapper-16">Forward your email to your inbox</p>
                  <div className="icon-2"></div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {["article", "news", "send-message"].includes(property1) && (
        <>
          <div className="frame-13">
            {property1 === "send-message" && (
              <>
                <div className="text-wrapper-17">Send us a message</div>
                <p className="text-wrapper-15">We typically reply in a few minutes</p>
              </>
            )}

            {["article", "news"].includes(property1) && (
              <img className="image" alt="Image" src={property1 === "news" ? image : "/img/image-4-3.png"} />
            )}
          </div>
          <div className="icon-3">
            {property1 === "send-message" && <></>}

            {["article", "news"].includes(property1) && (
              <>
                <div className="the-intercom">
                  {property1 === "article" && <>The Intercom Community</>}

                  {property1 === "news" && (
                    <>
                      <ChipNews
                        className={chipNewsChipNewsClassName}
                        divClassName={chipNewsDivClassName}
                        text="Hoi Kit Fan 🤫"
                      />
                      <ChipNews
                        className={chipNewsChipNewsClassNameOverride}
                        divClassName={chipNewsDivClassNameOverride}
                        text="Bastian Bastias Sanchez 🤫"
                      />
                    </>
                  )}
                </div>
                <div className="be-sure-to-check-out">
                  {property1 === "article" && (
                    <p className="text-wrapper-24">
                      Be sure to check out the Intercom Community for support, plus tips &amp; tricks from Intercom
                      users and much more
                    </p>
                  )}

                  {property1 === "news" && (
                    <>
                      <p className="text-wrapper-17">{text}</p>
                      <p className="when-you-migrate">{text1}</p>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

Tile.propTypes = {
  property1: PropTypes.oneOf(["article", "help", "recent-message", "news", "send-message"]),
  image: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};
