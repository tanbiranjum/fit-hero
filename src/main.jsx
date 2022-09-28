import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Blog from "./components/Blog/Blog";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Blog />
  </React.StrictMode>
);
