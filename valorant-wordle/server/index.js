//Set up Express app
const express = require('express');
const app = express();
const port = 3003;

//Create List of Agents
const agents = [
    { name: 'Jett', role: 'Duelist', nationality: 'South Korea', gender: 'Female' },
    { name: 'Phoenix', role: 'Duelist', nationality: 'U.K', gender: 'Male' }, 
    { name: 'Rheyna', role: 'Duelist', nationality: 'Mexico', gender: 'Female'},
    { name: 'Raze', role: 'Duelist', nationality: 'Brazil', gender: 'Female'},
    { name: 'Yoru', role: 'Duelist', nationality: 'Japan', gender: 'Male'},
    { name: 'Neon', role: 'Duelist', nationality: 'Philippines', gender: 'Female'},
    { name: 'Iso', role: 'Duelist', nationality: 'Chinese', gender: 'Male'},
    { name: 'Brimstone', role: 'Controller', nationality: 'U.S.A', gender: 'Male'},
    { name: 'Viper', role: 'Controller', nationality: 'U.S.A', gender: 'Female'},
    { name: 'Omen', role: 'Controller', nationality: 'Unknown', gender: 'Male'},
    { name: 'Astra', role: 'Controller', nationality: 'Ghana', gender: 'Female'},
    { name: 'Harbor', role: 'Controller', nationality: 'India', gender: 'Male'},
    { name: 'Clove', role: 'Controller', nationality: 'Scottland', gender: 'Nonbinary'},
    { name: 'Sage', role: 'Sentinel', nationality: 'China', gender: 'Female'},
    { name: 'Cypher', role: 'Sentinel', nationality: 'Morocco', gender: 'Male'},
    { name: 'Killjoy', role: 'Sentinel', nationality: 'Germany', gender: 'Female'},
    { name: 'Chamber', role: 'Sentinel', nationality: 'France', gender: 'Male'},
    { name: 'Deadlock', role: 'Sentinel', nationality: 'Norway', gender: 'Female'},
    { name: 'Vyse', role: 'Sentinel', nationality: 'Unknown', gender: 'Female'},
    { name: 'Sova', role: 'Initiator', nationality: 'Russia', gender: 'Male'},
    { name: 'Breach', role: 'Initiator', nationality: 'Sweden', gender: 'Male'},
    { name: 'Skye', role: 'Initiator', nationality: 'Australia', gender: 'Female'},
    { name: 'Kay/o', role: 'Initiator', nationality: 'Unknown', gender: 'Male'},
    { name: 'Fade', role: 'Initiator', nationality: 'Turkey', gender: 'Female'},
    { name: 'Gekko', role: 'Initiator', nationality: 'U.S.A', gender: 'Male'},
  ];

//Allow json data
app.use(express.json());

//Choose a random agent to be guessed for the day
app.get('/api/agentToday', (req, res) => {
    const rand = Math.floor(Math.random() * agents.length);
    const agent = agents[rand];
    res.json(agent);
});
  
//Get user guess
app.post('/api/userGuess', (req, res) => {
    const { userGuess } = req.body; 
    console.log('Received guess:', userGuess);
    const agent = agents.find(a => a.name.toLowerCase() === userGuess.toLowerCase());
    
    // Send JSON data depending on user guess
    if (agent) { 
        res.json({ correct: true, agent });
    } else { 
        res.json({ correct: false });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

