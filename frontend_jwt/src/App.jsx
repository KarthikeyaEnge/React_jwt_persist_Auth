import { useState } from "react";
import useAuth from "./hooks/useAuth";
import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PersistAuth from "./components/PersistAuth";
import Info from "./components/Info";
import Invalid from "./components/Invalid";

function App() {
  return (
    <React.Fragment>
      <Routes>
        {/**public routes */}

        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />

        {/** Protected Routes*/}
        <Route element={<PersistAuth />}>
          <Route path="info" element={<Info />} />
        </Route>
        <Route to="*" element={<Invalid />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
