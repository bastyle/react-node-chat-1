import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from './components/User/UserContext';
import { Home } from './screens/Home';
import { ToastContainer } from 'react-toastify';

export const App = () => {
    return (
        <BrowserRouter>
            <UserProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </UserProvider>
            <ToastContainer/>
        </BrowserRouter>
    );
};