import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ServiceContextProvider } from "./Context/ServiceContextProvider";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ServiceContextProvider>
    <App />
    </ServiceContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
