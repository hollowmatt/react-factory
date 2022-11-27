import { useState, useEffect } from 'react';
import './App.css';

function Countdown({count}) {
  const [counter, setCounter] = useState(count);
  const [isRunning, setRunning] = useState(false);
  useEffect(() => {
    if(!isRunning) {
      return;
    }
    const interval = setInterval(
      () => setCounter((value) => {
        if (value <=1){
          setRunning(false);
        }
        return value -1;
      }),
      1000,
    );
    return () => clearInterval(interval);
  }, [isRunning]);
  return (
    <section>
      <h2>Time left: {counter}</h2>
      <button onClick={() => setRunning(v => !v)} disabled={counter ===0}>
        {isRunning ? 'Pause' : 'Resume'}
      </button>
    </section>
  );
}
function App() {
  return (
    <div className="App">
      <Countdown count={10}/>
    </div>
  );
}

export default App;
