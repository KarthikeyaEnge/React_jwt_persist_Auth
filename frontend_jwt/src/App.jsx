import { useState } from "react";
import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PersistAuth from "./components/PersistAuth";
import Info from "./components/Info";
function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <Routes>
        {/**public routes */}
        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        {/** Protected Routes*/}
        {/* <Route element={<PersistAuth />}> */}
        <Route to="info" element={<Info />} />
        {/* </Route> */}
      </Routes>
    </React.Fragment>
  );
}

export default App;
