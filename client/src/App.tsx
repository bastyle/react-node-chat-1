import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from './screens/Home';
//import { Login } from './screens/Account/Login';
//import { Register } from './screens/Account/Register';

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} /> */}
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>

    );
};