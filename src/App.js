import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../src/container/pages/components/home/LandingPage"
import Login from './container/pages/components/auth/Login';
import Register from './container/pages/components/auth/Register';
import Dashboard from './container/pages/components/dashboard/Dashboard';
import Verify from './container/pages/components/auth/Verify';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verify" element={<Verify />} />
        
      </Routes>
    </Router>


    // <LandingPage />
    // <Login />
   
  );
}



export default App;
