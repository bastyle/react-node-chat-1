import React from "react";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Contact } from "../Account/Contacts";
import { ChatContainer } from "./ChatContainer";
import { News } from "./News";
import "./style.css";

interface PanelProps {
  currentChat: Contact | null;
  socket: any; // You can replace 'any' with a more specific type if available
}

export const Panel = ({ currentChat, socket }: PanelProps): JSX.Element => {
  console.log("Current Chat in Panel:", currentChat);
  return (
    <div className="panel">
      <div className="panel-widget">
        <Header className="header-instance" property1="title" text="News" />

        <div className="messages">

          {currentChat && <ChatContainer currentChat={currentChat} socket={socket} />}
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
