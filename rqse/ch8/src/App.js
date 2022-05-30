import './App.css';
import { useEffect, useState } from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Counter />
       <MouseStatus />
      </header>
    </div>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter(c => c + 1);
  
  return(
    <section className="counter">
      <h1>Value: {counter}</h1>
      <button onClick={onClick}>Increment</button>
    </section>
  );
}

function MouseStatus() {
  const [isMoving, setMoving] = useState(false);
  const onMouseMove = () => setMoving(true);
  
  useEffect(() => {
    if(!isMoving) {
      return;
    }
    const timeout = setTimeout(() => setMoving(false), 500);
    return () => clearTimeout(timeout);
  }, [isMoving]);

  return (
    <section className="mouse" onMouseMove={onMouseMove}>
      <h2>
        The mouse is {!isMoving && 'not'} moving: {isMoving ? '✓' : '✗'}
      </h2>
    </section>
  );
}
export default App;
