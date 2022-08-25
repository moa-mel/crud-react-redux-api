import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPost from "./UserPost";
import Create from "./UserPost/Create";

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<UserPost/>} />
      <Route path="/Create" element={<Create/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;