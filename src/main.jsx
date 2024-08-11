import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LoggedInUserProvider } from "./context/UserContext.jsx";
import { ArticlesProvider } from "./context/ArticlesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LoggedInUserProvider>
      <ArticlesProvider>
        <App />
      </ArticlesProvider>
    </LoggedInUserProvider>
  </BrowserRouter>
);
