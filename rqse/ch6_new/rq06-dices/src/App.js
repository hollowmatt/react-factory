import { useState } from 'react';
import './App.css';

function Die() {

  return(
    <span style={}>1</span>
  );
}

function DiceRoller() {

  return(
    <main>
      <h1>Rolls: </h1>
      <button>Re-Roll</button>
      <Die />
      <Die />
      <Die />
    </main>
  )
}

function App() {
  return (
    <div className="App">
      <DiceRoller />      
    </div>
  );
}

export default App;
