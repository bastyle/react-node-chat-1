import React, { useState, useEffect } from "react";

interface ContactProps {
    handleLogout: () => Promise<void>;
}

export const Contact = ({ handleLogout }: ContactProps) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        console.log('Stored user data:', storedUserData); // Debugging

        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            setUsername(userData.username);
            setEmail(userData.email);
        } else {
            console.log('No user data found. Redirecting to login...');
        }
    }, []);

    return (
        <div className="contact">
            <div className="messages">
                <div className="text-wrapper-13">Contacts</div>
            </div>

            <form className="frame-9">
                <div className="messages-2">
                    <div className="message">
                        <label className="frame-10">
                            <div className="frame-11">
                                <div className="user-info">
                                    {/* ... */}
                                    <div className="avatar">

                                    </div>
                                    <div className="username">
                                        <h2>Welcome, {username || 'User'}</h2>
                                    </div>
                                    <div className="email">
                                        <h3>{email || 'No email provided'}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="icon"></div>
                        </label>
                        <div className="line"></div>
                    </div>
                    <div className="message">
                        <label className="frame-10">
                            <div className="frame-11">

                            </div>
                            <div className="icon"></div>
                        </label>
                        <div className="line"></div>
                    </div>
                </div>
                <button onClick={() => handleLogout()} className="logout-button">
                    <div className="text-wrapper-15">Logout</div>
                    <div className="icon-2"></div>
                </button>

            </form>

        </div>
    );
};
