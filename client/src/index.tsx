import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { App } from './App';

const app = document.getElementById("app") as HTMLElement;
const root = ReactDOMClient.createRoot(app);
root.render(<App />);
