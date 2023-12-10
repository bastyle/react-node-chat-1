import React, { useState } from "react";
import { ChatInputProps } from '../../types/interfaces';
import { IoMdSend } from "react-icons/io";
import Picker, { EmojiClickData } from "emoji-picker-react";
import { FaRegSmileBeam } from 'react-icons/fa';

const ChatInput: React.FC<ChatInputProps> = ({ handleSendMsg }) => {
    const [msg, setMsg] = useState<string>("");
    const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);

    const handleEmojiPickerhideShow = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    const handleEmojiClick = (emojiObject: EmojiClickData, event: MouseEvent) => {
        let message = msg;
        message += emojiObject.emoji;
        setMsg(message);
    };

    const sendChat = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (msg.length > 0) {
            handleSendMsg(msg);
            setMsg("");
        }
    };

    return (
        <>
            <div className="input-emoji-container">
                <div className="emoji-icon">
                    <FaRegSmileBeam onClick={handleEmojiPickerhideShow} />
                </div>
                {showEmojiPicker && (
                    <div className="emoji-picker">
                        <Picker onEmojiClick={handleEmojiClick} />
                    </div>
                )}
                <form className="input-container" onSubmit={sendChat}>
                    <input
                        type="text"
                        placeholder="type your message here"
                        onChange={(e) => setMsg(e.target.value)}
                        value={msg}
                    />
                    <button type="submit">
                        <IoMdSend />
                    </button>
                </form>
            </div>
        </>
    );
};

export default ChatInput;
