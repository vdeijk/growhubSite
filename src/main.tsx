import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../variables.css";
import App from "./App";
import { HashRouter } from "react-router-dom";

const basename = import.meta.env.MODE === "production" ? "/growhubSite" : "/";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter basename={basename}>
      <App />
    </HashRouter>
  </StrictMode>
);
