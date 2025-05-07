import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../variables.css";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";

const basename = '/growhubSite';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
