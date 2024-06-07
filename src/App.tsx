import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Login from './components/Login/Login';
import HomePage from './components/pages/HomePage/HomePage';


function App() {
  return (
    <Router>
      <Routes>
      <Route path = "/"  element={<Login />} />
      <Route path="Homepage" element={<HomePage />} />
      <Route path="Shopnowpage" element={<HomePage />} />
      <Route path="Aboutpage" element={<HomePage />} />
      <Route path="Bagpage" element={<HomePage />} />
      <Route path="Contactpage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
