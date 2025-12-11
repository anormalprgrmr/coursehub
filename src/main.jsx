// import { StrictMode } from 'react'
import React from 'react'; // Ensure React is imported
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './app/App.jsx'
console.log("tehhehe");

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App></App>
  </React.StrictMode>,
)
