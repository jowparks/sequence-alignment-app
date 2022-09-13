import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
const App: React.FC = () => {
  return (
    <div>
      <div className="container mt-3">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;