import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavBar from './Navbar'; // Import your Navbar
import Home from './Home';        // Import the new Home page
import './App.css'; 
function App() {
  return (
    <Router>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can add more routes here later */}
      </Routes>
    </Router>
  );
}

export default App;

function Hero() {
  return (
    <div className="hero-container">
      <div className='hero-text'>
        <h1>What Does GDD Do?</h1>
        <h2>Fire Global Development and design aims to explore the means towards achieving ethical development around the world.</h2>
      </div>
    </div>
  );
}



