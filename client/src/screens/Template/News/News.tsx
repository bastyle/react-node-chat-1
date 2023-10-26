import React from "react";
import { Header } from "../../../components/Header";
import { Nav } from "../../../components/Nav";
import { Tile } from "../../../components/Tile";

import "./style.css";

export const News = (): JSX.Element => {
  return (
    <div className="news">
      <div className="news-widget">
        <Header className="header-instance" property1="title" text="News" />
        <div className="messages">
          <div className="frame-15">
            <div className="subheader">
              <div className="frame-16">
                <div className="frame-17">
                  <div className="text-wrapper-22">NEWS</div>
                  <div className="text-wrapper-23">Oct 13, 2023</div>
                </div>
                <div className="frame-18" />
              </div>
            </div>
            <Tile
              chipNewsChipNewsClassName="tile-instance"
              chipNewsChipNewsClassNameOverride="tile-instance"
              chipNewsDivClassName="tile-2"
              chipNewsDivClassNameOverride="tile-2"
              className="design-component-instance-node"

              property1="news"
              text="CENTENNIAL COLLEGE STUDENTS ENTER SKILLED TRADES PROGRAMS THANKS TO SCHULICH BUILDERS SCHOLARSHIP"
              text1="Think about the services in your own life that you’ve come to rely on, like lights, heat, the Internet, the cars you drive in, even the planes you fly in. For every one of those, there’s a team of professionals that maintain them. Everyone needs people that can fix a car, or do their plumbing, or renovate their home, or just maintain the equipment and vehicles we rely on every day. Joining a skilled trade will make you a member of a special, incredibly valuable and well-paid segment of the workforce, and build you a rewarding, creative career."
            />
            <Tile
              chipNewsChipNewsClassName="tile-3"
              chipNewsChipNewsClassNameOverride="tile-3"
              chipNewsDivClassName="your-classname-here"
              chipNewsDivClassNameOverride="your-classname-here"
              className="design-component-instance-node"

              property1="news"
              text="Introducing a new file content source for Fin - PDF Uploads"
              text1="When you migrate your articles to News using our Zendesk migration tool – we&#39;ll now automatically create URL redirects from your previous URLs to your new News articles."
            />
          </div>
        </div>
        <Nav
          className="design-component-instance-node"
          divClassName="nav-instance"
          iconClassName="nav-instance"
          notification={false}
          property1="news"
        />
      </div>
    </div>
  );
};
