import React, { useState, useEffect, useRef } from "react";
import ChatInput from "./ChatInput";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { sendMessageRoute, recieveMessageRoute } from "../../utils/APIRoutes";

interface ChatContainerProps {
    currentChat: {
        _id: string;
        username: string;
        avatarImage: string;
    };
    socket: any; // Replace 'any' with the correct type for your socket
}

interface Message {
    fromSelf: boolean;
    message: string;
}

export const ChatContainer: React.FC<ChatContainerProps> = ({ currentChat, socket }): JSX.Element => {
    const [messages, setMessages] = useState<Message[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [arrivalMessage, setArrivalMessage] = useState<Message | null>(null);

    useEffect(() => {
        console.log("Current chat changed:", currentChat);
        const fetchData = async () => {
            const localStorageData = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY || '');
            if (localStorageData) {
                const data = JSON.parse(localStorageData);
                const response = await axios.post(recieveMessageRoute, {
                    from: data._id,
                    to: currentChat._id,
                });
                setMessages(response.data);
            }
        };
        if (currentChat) {
            fetchData();
        }
    }, [currentChat]);

    const handleSendMsg = async (msg: string) => {
        const localStorageData = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY || '');
        if (localStorageData) {
            const data = JSON.parse(localStorageData);
            socket.current.emit("send-msg", {
                to: currentChat._id,
                from: data._id,
                msg,
            });
            await axios.post(sendMessageRoute, {
                from: data._id,
                to: currentChat._id,
                message: msg,
            });

            const msgs = [...messages];
            msgs.push({ fromSelf: true, message: msg });
            setMessages(msgs);
        }
    };

    useEffect(() => {
        if (socket.current) {
            socket.current.on("msg-recieve", (msg: string) => {
                setArrivalMessage({ fromSelf: false, message: msg });
            });
        }
    }, [socket.current]);

    useEffect(() => {
        if (arrivalMessage) {
            setMessages((prev) => [...prev, arrivalMessage]);
        }
    }, [arrivalMessage]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="container">
            <div className="chat-header">
                <div className="user-details">
                    <div className="avatar">
                        <img
                            src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
                            alt=""
                        />
                    </div>
                    <div className="username">
                        <h3>{currentChat.username}</h3>
                    </div>
                </div>

            </div>
            <div className="chat-messages">
                {messages.map((message) => {
                    return (
                        <div ref={scrollRef} key={uuidv4()}>
                            <div
                                className={`message ${message.fromSelf ? "sended" : "recieved"
                                    }`}
                            >
                                <div className="content ">
                                    <p>{message.message}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <ChatInput handleSendMsg={handleSendMsg} />
        </div>
    );
};
