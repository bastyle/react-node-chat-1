import React, { useState, useEffect } from "react";
import { User, Contact, ContactProps } from '../../types/interfaces';
import Logo from "../../logo.svg";


export const Contacts: React.FC<ContactProps> = ({ handleLogout, contacts, setCurrentChat }) => {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [currentUserImage, setCurrentUserImage] = useState<string>("");
    const [currentSelected, setCurrentSelected] = useState<number | null>(null);

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            const userData: User = JSON.parse(storedUserData);
            setUsername(userData.username);
            setEmail(userData.email);
            setCurrentUserImage(userData.avatarImage);
        } else {
            //console.log('No user data found. Redirecting to login...');
        }
    }, []);

    const changeCurrentChat = (index: number, contact: Contact) => {
        //console.log("Changing chat to:", contact);
        setCurrentSelected(index);
        setCurrentChat(contact);
    };

    return (
        <div className="contact">
            <div className="brand">
                {/* <img src={Logo} alt="logo" /> */}
                <div className="app-name">WeCanTalk</div>
            </div>
            <div className="contacts">
                {contacts.map((contact, index) => (
                    <div
                        key={contact._id}
                        className={`contact-item ${index === currentSelected ? "selected" : ""}`}
                        onClick={() => changeCurrentChat(index, contact)}
                    >
                        <div className="avatar">
                            <img src={`data:image/svg+xml;base64,${contact.avatarImage}`} alt="" />
                        </div>
                        <div className="username">
                            <h3>{contact.username}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className="current-user">
                <div className="avatar">
                    <img src={`data:image/svg+xml;base64,${currentUserImage}`} alt="avatar" />
                </div>
                <div className="username">
                    <h2>Welcome User: {username || 'User'}</h2>
                    <p>{email}</p>
                </div>
            </div>
            <div className="logout-box">
                <button onClick={() => handleLogout()} className="logout-button">
                    Logout
                </button>
            </div>
        </div>
    );
};
