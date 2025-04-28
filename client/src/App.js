import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavBar from './Navbar'; // Import your Navbar
import Home from './Home';        // Import the new Home page

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

