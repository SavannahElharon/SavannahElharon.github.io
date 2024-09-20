const agents = [
    { name: 'Jett', role: 'Duelist', nationality: 'South Korea', gender: 'Female', img: 'jett.png' },
    { name: 'Phoenix', role: 'Duelist', nationality: 'U.K', gender: 'Male', img: 'phoenix.png' }, 
    { name: 'Reyna', role: 'Duelist', nationality: 'Mexico', gender: 'Female', img:'reyna.png'},
    { name: 'Raze', role: 'Duelist', nationality: 'Brazil', gender: 'Female', img:'raze.png'},
    { name: 'Yoru', role: 'Duelist', nationality: 'Japan', gender: 'Male', img:'yoru.png'},
    { name: 'Neon', role: 'Duelist', nationality: 'Philippines', gender: 'Female', img:'neon.png'},
    { name: 'Iso', role: 'Duelist', nationality: 'Chinese', gender: 'Male', img:'iso.png'},
    { name: 'Brimstone', role: 'Controller', nationality: 'U.S.A', gender: 'Male', img:'brimstone.png'},
    { name: 'Viper', role: 'Controller', nationality: 'U.S.A', gender: 'Female', img:'viper.png'},
    { name: 'Omen', role: 'Controller', nationality: 'Unknown', gender: 'Male', img:'omen.png'},
    { name: 'Astra', role: 'Controller', nationality: 'Ghana', gender: 'Female', img:'astra.png'},
    { name: 'Harbor', role: 'Controller', nationality: 'India', gender: 'Male', img:'harbor.png'},
    { name: 'Clove', role: 'Controller', nationality: 'Scotland', gender: 'Nonbinary', img:'clove.png'},
    { name: 'Sage', role: 'Sentinel', nationality: 'China', gender: 'Female', img:'sage.png'},
    { name: 'Cypher', role: 'Sentinel', nationality: 'Morocco', gender: 'Male', img:'cypher.png'},
    { name: 'Killjoy', role: 'Sentinel', nationality: 'Germany', gender: 'Female', img:'killjoy.png'},
    { name: 'Chamber', role: 'Sentinel', nationality: 'France', gender: 'Male', img:'chamber.png'},
    { name: 'Deadlock', role: 'Sentinel', nationality: 'Norway', gender: 'Female', img:'deadlock.png'},
    { name: 'Vyse', role: 'Sentinel', nationality: 'Unknown', gender: 'Female', img:'vyse.png'},
    { name: 'Sova', role: 'Initiator', nationality: 'Russia', gender: 'Male', img:'sova.png'},
    { name: 'Breach', role: 'Initiator', nationality: 'Sweden', gender: 'Male', img:'breach.png'},
    { name: 'Skye', role: 'Initiator', nationality: 'Australia', gender: 'Female', img:'skye.png'},
    { name: 'Kay/o', role: 'Initiator', nationality: 'Unknown', gender: 'Male', img:'kayo.png'},
    { name: 'Fade', role: 'Initiator', nationality: 'Turkey', gender: 'Female', img:'fade.png'},
    { name: 'Gekko', role: 'Initiator', nationality: 'U.S.A', gender: 'Male', img:'gekko.png'}  
];

const today = new Date().toISOString().slice(0, 10);
const dateNumber = today.split('-').join('');
const index = parseInt(dateNumber) % agents.length;
const todayAgent = agents[index];

console.log(todayAgent); 

document.getElementById('submitGuess').addEventListener('click', () => {
    const guessInput = document.getElementById('guessInput').value.trim();
    const messageElement = document.getElementById('message');
    const agentInfo = document.getElementById('agentInfo');
    const detailsElement = document.getElementById('details');

    // Find the guessed agent in the list
    const guessedAgent = agents.find(agent => agent.name.toLowerCase() === guessInput.toLowerCase());

    if (!guessedAgent) {
        messageElement.textContent = "Agent not found. Please try again.";
        return;
    }

    if (guessedAgent.name.toLowerCase() === todayAgent.name.toLowerCase()) {
        messageElement.textContent = `You got today's Valdle correct! The agent is ${todayAgent.name}.`;
        document.getElementById('role').textContent = `Role: ${todayAgent.role}`;
        document.getElementById('nationality').textContent = `Nationality: ${todayAgent.nationality}`;
        document.getElementById('gender').textContent = `Gender: ${todayAgent.gender}`;
        agentInfo.style.display = 'block';
        detailsElement.style.display = 'none'; 
    } else {
        const nationalityMatch = guessedAgent.nationality === todayAgent.nationality ? 'Correct' : 'Incorrect';
        const roleMatch = guessedAgent.role === todayAgent.role ? 'Correct' : 'Incorrect';
        const genderMatch = guessedAgent.gender === todayAgent.gender ? 'Correct' : 'Incorrect';
        messageElement.innerText = "Here is what your guess has in common with today's agent:";
        detailsElement.innerText = `Nationality: ${nationalityMatch}, Role: ${roleMatch}, Gender: ${genderMatch}`;
        agentInfo.style.display = 'none';
        detailsElement.style.display = 'block';
    }
});
