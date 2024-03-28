import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import AuthContextProvider from "./Components/Context/AuthContext";
import MediaContextProvider from "./Components/Context/Store.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MediaContextProvider>
        <App />
      </MediaContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

reportWebVitals();
