import React from "react";
import "./App.css";
import Signup from "./Pages/Auth/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mytests from "./Pages/Mytests";
import Createnewtest from "./Pages/Createnewtest";
import Mycandidates from "./Pages/Mycandidates";
import Addmodules from "./Pages/Addmodules";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-tests" element={<Mytests />} />
        <Route path="/modules" element={<Dashboard />} />
        <Route path="/create-new-test" element={<Createnewtest />} />
        <Route path="/my-candidates" element={<Mycandidates />} />
        <Route path="/add-modules" element={<Addmodules />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
