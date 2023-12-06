import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { RegisterProps } from '../../types/interfaces';
import { registerRoute } from "../../utils/APIRoutes";
import "./style.css";

export const Register: React.FC<RegisterProps> = ({ toggleIsRegistering }) => {
    //console.log("Rendering Register component");
    const navigate = useNavigate();
    const toastOptions = {
        position: "bottom-right" as any,
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark" as any,
    };
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY || 'defaultKey')) {
            navigate("/");
        }
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleValidation = () => {
        const { password, confirmPassword, username, email } = values;
        if (password !== confirmPassword) {
            toast.error(
                "Password and confirm password should be same.",
                toastOptions
            );
            return false;
        } else if (username.length < 3) {
            toast.error(
                "Username should be greater than 3 characters.",
                toastOptions
            );
            return false;
        } else if (password.length < 8) {
            toast.error(
                "Password should be equal or greater than 8 characters.",
                toastOptions
            );
            return false;
        } else if (email === "") {
            toast.error("Email is required.", toastOptions);
            return false;
        }

        return true;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (handleValidation()) {
            const { email, username, password } = values;
            const { data } = await axios.post(registerRoute, {
                username,
                email,
                password,
            });

            if (data.status === false) {
                toast.error(data.msg, toastOptions);
            }
            if (data.status === true) {
                localStorage.setItem(
                    process.env.REACT_APP_LOCALHOST_KEY || 'defaultKey',
                    JSON.stringify(data.user)
                );
                //navigate("/");
                toggleIsRegistering();
            }
        }
    };

    return (
        <div className="register">
            <div className="messages">
                <div className="text-wrapper-13">Register</div>
            </div>
            <form className="frame-9" action="" onSubmit={(event) => handleSubmit(event)}>
                <div className="messages-2">
                    <div className="message">
                        <label className="frame-10">
                            <div className="frame-11">
                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="icon"></div>
                        </label>
                        <div className="line"></div>
                    </div>
                    <div className="message">
                        <label className="frame-10">
                            <div className="frame-11">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="icon"></div>
                        </label>
                        <div className="line"></div>
                    </div>
                    <div className="message">
                        <label className="frame-10">
                            <div className="frame-11">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="icon"></div>
                        </label>
                        <div className="line"></div>
                    </div>
                    <div className="message">
                        <label className="frame-10">
                            <div className="frame-11">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className="icon"></div>
                        </label>
                        <div className="line"></div>
                    </div>
                </div>
                <button className="create-button" type="submit">
                    <div className="text-wrapper-15">Create Account</div>
                    <div className="icon-2"></div>
                </button>
                <span>
                    Already have an account ? <button onClick={toggleIsRegistering}>Login.</button>
                </span>
            </form>
        </div>
    );
};
