import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authprovider from "./context/Authprovider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Authprovider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Authprovider>
    </Router>
  </React.StrictMode>
);
