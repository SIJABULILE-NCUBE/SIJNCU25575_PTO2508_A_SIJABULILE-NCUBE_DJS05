import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

/**
 * Application entry point.
 * Wraps the app in <BrowserRouter> so React Router can provide client-side,
 * dynamic routing (a unique URL per show, e.g. "/show/10716").
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
