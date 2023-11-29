import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from './components/User/UserContext';
import { Home } from './screens/Home';

export const App = () => {
    return (
        <BrowserRouter>
            <UserProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </UserProvider>
        </BrowserRouter>
    );
};