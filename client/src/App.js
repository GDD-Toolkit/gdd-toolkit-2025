import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavBar from './Navbar'; 
import Home from './Home';        
import Footer from './Footer';    
import './App.css'; 


function App() {
  return (
    <Router>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here */}
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;


