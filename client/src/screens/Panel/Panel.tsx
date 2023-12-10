import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { ChatContainer } from "./ChatContainer";
import { News } from "./News";
import { OpenAi } from "./OpenAi";
import { PanelProps } from '../../types/interfaces';
import "./style.css";

export const Panel = ({ currentChat, socket, currentUser }: PanelProps): JSX.Element => {
  const [userId, setUserId] = useState<string | null>(null);
  const [activeComponent, setActiveComponent] = useState<"messenger" | "openai" | "news">("messenger");

  useEffect(() => {
    if (currentUser) {
      setUserId(currentUser._id);
    } else {
      setUserId(null);
    }
  }, [currentUser]);

  const handleNavChange = (component: "messenger" | "news" | "openai") => {
    setActiveComponent(component);
  };

  return (
    <div className="panel">
      <div className="panel-widget">
        <Header className="header-instance" property1="title" text="News" />

        <div className="messages">
          {userId && (
            <>
              {activeComponent === "messenger" && currentChat && (
                <ChatContainer currentChat={currentChat} socket={socket} userId={userId} />
              )}
              {activeComponent === "openai" && <OpenAi />}
            </>
          )}
          {!userId && <News />}
        </div>

        <Nav
          className="design-component-instance-node"
          divClassName="nav-instance"
          iconClassName="nav-instance"
          notification={false}
          property1="news"
          onNavChange={handleNavChange}
        />
      </div>
    </div>
  );
};
