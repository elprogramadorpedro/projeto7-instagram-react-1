import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

import "./css/reset.css";
import "./css/main.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector(".root")
);
