import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { loginRoute } from "../../utils/APIRoutes";
import { ToastContainer, toast } from "react-toastify";
import { LoginProps } from '../../types/interfaces';
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

export const Login: React.FC<LoginProps> = ({ toggleIsRegistering, onLoginSuccess }) => {

    const navigate = useNavigate();
    const [values, setValues] = useState({ username: "", password: "" });
    const toastOptions = {
        position: "bottom-right" as any,
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark" as any,
    };
    useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY || 'defaultKey')) {
            navigate("/");
        }
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const validateForm = () => {
        const { username, password } = values;
        if (username === "") {
            toast.error("Email and Password is required.", toastOptions);
            return false;
        } else if (password === "") {
            toast.error("Email and Password is required.", toastOptions);
            return false;
        }
        return true;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validateForm()) {
            const { username, password } = values;
            const { data } = await axios.post(loginRoute, {
                username,
                password,
            });
            if (data.status === false) {
                toast.error(data.msg, toastOptions);
            }
            if (data.status === true) {
                toast.success("Login successful!", toastOptions);
                onLoginSuccess(data.user);
            }
        }
    };


    return (
        <div className="login">
            <div className="messages">
                <div className="text-wrapper-13">Login</div>
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
                                    min="3"
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
                </div>
                <button className="login-button" type="submit">
                    <div className="text-wrapper-15">Login</div>
                    <div className="icon-2"></div>
                </button>
                <span>
                    Don't have an account ? <button onClick={toggleIsRegistering}>Create One.</button>
                </span>
            </form>
            <ToastContainer />
        </div>
    );

};
