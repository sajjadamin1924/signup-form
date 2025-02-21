import React from "react";
import "./App.css";
import Signup from "./Pages/Auth/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
