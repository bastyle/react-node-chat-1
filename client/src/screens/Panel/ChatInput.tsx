import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import Picker, { EmojiClickData } from "emoji-picker-react";

interface ChatInputProps {
    handleSendMsg: (msg: string) => void;
}

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
            <div className="button-container">
                <div className="emoji">
                    <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
                    {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
                </div>
            </div>
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
        </>
    );
};

export default ChatInput;
