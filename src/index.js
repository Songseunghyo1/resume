import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { App } from './components/';

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);