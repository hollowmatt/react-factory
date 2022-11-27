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
      () => setCounter(counter => counter -1),
        1000,
    );
    return () => clearInterval(interval);
  }, []);
  return (
    <h1>Count: {counter}</h1>
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
