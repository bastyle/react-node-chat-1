import React, { useState, useEffect, useRef } from "react";
import ChatInput from "./ChatInput";
import axios from "axios";
import { openAiRoute } from '../../utils/APIRoutes'; // Import the correct API route

type ChatMessage = {
    message: string;
    fromSelf: boolean;
};

export const OpenAi: React.FC = (): JSX.Element => {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [aiMessage, setAiMessage] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const handleSendMsg = async (text: string) => {
        try {
            const response = await axios.post(openAiRoute, { messages: [{ role: "user", content: text }] });
            // Check if response has the expected structure
            if (response && response.data.choices && response.data.choices.length > 0) {
                const aiMessageContent = response.data.choices[0].message.content;
                setAiMessage(aiMessageContent);

                setMessages(prevMessages => [
                    ...prevMessages,
                    { message: text, fromSelf: true },
                    { message: aiMessageContent, fromSelf: false }
                ]);
            } else {
                console.error("Unexpected response structure:", response.data);
            }

        } catch (error) {
            console.error("Error communicating with OpenAI:", error);
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="chat-container">
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.fromSelf ? "sended" : "recieved"}`}>
                        <div className="content">
                            <p>{msg.message}</p>
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

export default OpenAi;
