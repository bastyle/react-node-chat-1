import React from 'react';
import ReactDOMClient from "react-dom/client";
//import './index.css';
import { Home } from "./screens/Home";
//import reportWebVitals from './reportWebVitals';

const app = document.getElementById("app") as HTMLElement;
const root = ReactDOMClient.createRoot(app);
root.render(<Home />);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
