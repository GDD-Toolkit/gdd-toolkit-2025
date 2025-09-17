import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavBar from './Navbar'; 
import Home from './Home';        
import Footer from './Footer';    
import DevEthics from './Development_Ethics/DevEthics';
import WorthwhileDev from './Development_Ethics/WorthwhileDev';
import CapabilityApproach from './Development_Ethics/CapabilityApproach';
import './App.css'; 


function App() {
  return (
    <Router>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dev-ethics/what-is-dev-ethics" element={<DevEthics />} />
        <Route path="/dev-ethics/worthwhile-dev" element={<WorthwhileDev />} />
        <Route path="/dev-ethics/capability-approach" element={<CapabilityApproach />} />
        {/* Add other routes here */}
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;


