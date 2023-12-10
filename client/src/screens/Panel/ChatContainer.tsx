import React, { useState, useEffect, useRef } from "react";
import ChatInput from "./ChatInput";
import axios from "axios";
import { sendMessageRoute, recieveMessageRoute } from "../../utils/APIRoutes";
import { ChatContainerProps, Message, IncomingMessage } from '../../types/interfaces';

export const ChatContainer: React.FC<ChatContainerProps> = ({ currentChat, socket, userId }): JSX.Element => {
    const [messages, setMessages] = useState<Message[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Fetch messages initially
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post(recieveMessageRoute, {
                    from: userId,
                    to: currentChat._id,
                });
                setMessages(response.data);
            } catch (error) {
                console.error("Failed to fetch messages:", error);
            }
        };
        fetchData();
    }, [currentChat, userId]);

    // Handle sending messages
    const handleSendMsg = async (text: string) => {
        try {
            // Send message to the server
            const response = await axios.post(sendMessageRoute, {
                from: userId,
                to: currentChat._id,
                message: text,
            });

            // Update local state
            const newMessage: Message = {
                _id: response.data._id, // Assume the server responds with the message ID
                fromSelf: true,
                message: text,
            };
            setMessages(prevMessages => [...prevMessages, newMessage]);

            // Emit message to other users
            socket.current.emit("send-msg", {
                to: currentChat._id,
                from: userId,
                msg: text,
            });
        } catch (error) {
            console.error("Failed to send message:", error);
        }
    };

    // Listen for incoming messages
    useEffect(() => {
        const messageListener = (msg: IncomingMessage) => {
            const newMessage: Message = {
                fromSelf: msg.from === userId,
                message: msg.msg,
            };
            setMessages(prevMessages => [...prevMessages, newMessage]);
        };

        if (socket.current) {
            socket.current.on("msg-recieve", messageListener);
        }

        return () => {
            if (socket.current) {
                socket.current.off("msg-recieve", messageListener);
            }
        };
    }, [socket, userId]);


    useEffect(() => {
        if (isScrollAtBottom()) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    // Helper function to check if the user has scrolled to the bottom
    function isScrollAtBottom() {
        const container = document.querySelector('.chat-messages');
        if (container) {
            return container.scrollHeight - container.scrollTop === container.clientHeight;
        }
        return false;
    }

    return (
        <div className="chat-container">
            <div className="chat-header">
                <div className="user-details">
                    <div className="avatar">
                        <img src={`data:image/svg+xml;base64,${currentChat.avatarImage}`} alt={`${currentChat.username}'s avatar`} />
                    </div>
                    <div className="username">
                        <h3>{currentChat.username}</h3>
                    </div>
                </div>
            </div>
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.fromSelf ? "sended" : "recieved"}`}>
                        <div className="content">
                            <p>{message.message}</p>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className="chat-input">
                <ChatInput handleSendMsg={handleSendMsg} />
            </div>
        </div>

    );
};

export default ChatContainer;
