import React, { useEffect, useState } from 'react';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4040/api')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Error fetching message:', err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Hero />
      <h2> </h2>
      <p> </p>
    </div>
  );
}

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

export default Home;
