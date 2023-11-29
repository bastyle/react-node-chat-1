import React, { useState, useEffect } from 'react';
import { Account } from "../Account";
import { Panel } from "../Panel";
import { Contact } from "../Account/Contacts";
import axios from "axios";
import { allUsersRoute, host } from "../../utils/APIRoutes";
import { io, Socket } from "socket.io-client";
import "./style.css";

interface User {
  _id: string;
}

export const Home = (): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [contacts, setContacts] = useState<any[]>([]);
  const [currentChat, setCurrentChatState] = useState<Contact | null>(null);
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData: User = JSON.parse(storedUserData);
      setCurrentUser(userData);
      fetchContacts(userData._id);

      // Initialize socket connection with your server URL
      const newSocket = io(host);
      setSocket(newSocket);

      // Clean up the socket connection when the component unmounts
      return () => {
        newSocket.disconnect();
      };
    }
  }, []);

  /*debug*/
  useEffect(() => {
    console.log("Current Chat Updated:", currentChat);
  }, [currentChat]);

  const fetchContacts = async (userId: string) => {
    try {
      const response = await axios.get(`${allUsersRoute}/${userId}`);
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleLoginSuccess = (userData: User) => {
    localStorage.setItem('userData', JSON.stringify(userData));
    setCurrentUser(userData);
    fetchContacts(userData._id);
  };

  const handleLogout = async () => {
    localStorage.removeItem('userData');
    setCurrentUser(null);
  };

  const setCurrentChat = (contact: Contact) => {
    console.log("Setting current chat to:", contact);
    setCurrentChatState(contact); // Correctly updates the state
  };

  return (
    <div className="home">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="intercom">
            <Panel currentChat={currentChat} socket={socket} />
          </div>
          <div className="intercom-widget-wrapper">
            <Account
              currentUser={currentUser}
              contacts={contacts}
              onLoginSuccess={handleLoginSuccess}
              onLogout={handleLogout}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
