import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { ChatContainer } from "./ChatContainer";
import { News } from "./News";
import { User, PanelProps } from '../../types/interfaces';
import "./style.css";

export const Panel = ({ currentChat, socket, currentUser }: PanelProps): JSX.Element => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    if (currentUser) {
      setUserId(currentUser._id);
    } else {
      setUserId(null);
    }
  }, [currentUser]);


  //console.log("Current Chat in Panel:", currentChat);

  return (
    <div className="panel">
      <div className="panel-widget">
        <Header className="header-instance" property1="title" text="News" />

        {userId && currentChat ? (
          <div className="messages">
            <ChatContainer currentChat={currentChat} socket={socket} userId={userId} />
          </div>
        ) : (
          <div className="messages">
            <News />
          </div>
        )}

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
