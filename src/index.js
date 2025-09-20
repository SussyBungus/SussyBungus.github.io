import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './app.js';
import reportWebVitals from './reportWebVitals';

// Disable right-click
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Disable double-click selection
document.addEventListener("dblclick", (e) => e.preventDefault());

// Disable certain key combinations
document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase(); // normalize case

  if (
    key === "F12" || // F12 dev tools
    (e.ctrlKey && e.shiftKey && (key === "I" || key === "J")) || // Ctrl+Shift+I/J
    (e.ctrlKey && key === "U") // View source
  ) {
    e.preventDefault();
    e.stopPropagation();
  }
});

// Initialize React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
