// src/index.js
import React from 'react';
// import ReactDOM from 'react-dom/client';
import AppRouter from './routes/AppRouter';
import { createRoot } from 'react-dom/client';
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<AppRouter />);
