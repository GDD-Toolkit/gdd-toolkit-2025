import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:4040/api')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div>
      <h1>React + Node.js App</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;
