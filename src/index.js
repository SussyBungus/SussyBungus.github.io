import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './pages/index.js';
import reportWebVitals from './reportWebVitals';

// Disable right-click and certain key combinations
document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("keydown", (event) => {
  if (
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J")) ||
    (event.ctrlKey && event.key === "U")
  ) {
    event.preventDefault();
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
