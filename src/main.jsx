import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LoggedInUserProvider } from "./context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoggedInUserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LoggedInUserProvider>
);
