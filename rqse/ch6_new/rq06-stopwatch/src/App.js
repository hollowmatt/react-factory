import { useState, useEffect } from 'react';
import './App.css';
function Stopwatch() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

  });
  return (
    <h1>Seconds: {seconds}</h1>
  );
}

function App() {
  const [showWatch, setShowWatch] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShowWatch(b => !b)}>
        Toggle Watch
      </button>
      {showWatch && <Stopwatch />}
    </div>
  );
}

export default App;
