//import react
import React, { useState, useEffect } from 'react';
import './App.css';

//initialize objects of website
function App() {
  const [agent, setAgent] = useState(null);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  //Set agent of day by fetching api from index.js
  useEffect(() => {
    fetch('/api/agentToday')
      .then(response => response.json())
      .then(data => setAgent(data))
  }, []);

  //get guess by fetching api from index.js
  const getGuess = () => {
    fetch('/api/userGuess', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guess })
    })
    .then(response => response.json())
    .then(data => {
      if (data.correct) {
        setMessage(`You got today's Valdle correct! The agent is ${data.agent.name}.`);
      } else {
        setMessage('L! Try again.');
      }
    })
  };

  return (
    <div>
      <h1>VALDLE</h1>

      <input
        type="text"
        placeholder="Type Agent Name..."
        value = {guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={getGuess}>Submit Guess</button>

      <p>{message}</p>

      {agent && (
        <div>
          <h2>Today's Agent Info</h2>
          <p>Role: {agent.role}</p>
          <p>Nationality: {agent.nationality}</p>
          <p>Gender: {agent.gender}</p>
        </div>
      )}
    </div>
  );
}

export default App;
