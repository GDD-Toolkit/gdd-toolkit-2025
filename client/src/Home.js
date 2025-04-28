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
      <h2>Home Page</h2>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default Home;
