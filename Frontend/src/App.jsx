import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import LandingPage from './LandingPage';
import Login from './Login';
import Signup from './Signup';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route for Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Route for Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Route for Signup Page */}
          <Route path="/signup" element={<Signup />} />

          {/* Route for Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
