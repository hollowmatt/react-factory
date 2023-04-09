import { useState } from 'react';
import './App.css';

function Die() {
  const value = (Math.floor(6 * Math.random())) + 1;
  const style = {
    border: "2px solid black",
    display: "inline-block",
    width: "2em",
    height: "2em",
    textAlign: "center",
    lineHeight: 2,
  };

  return(
    <span style={style}>{value}</span>
  );
}

function DiceRoller() {
  const [rolls, setRolls] = useState(1);
  return(
    <main>
      <h1>Rolls: {rolls}</h1>
      <button onClick={() => setRolls((r) => r + 1)}>Re-Roll</button>
      <div>
        <Die />
        <Die />
        <Die />
      </div>
    </main>
  )
}

function App() {
  const [app, setApp] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setApp((a) => a + 1)}>Buddon {app}</button>
      <DiceRoller />      
    </div>
  );
}

export default App;
