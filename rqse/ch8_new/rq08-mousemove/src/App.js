import { useState, useEffect } from 'react';
import './App.css';

function MouseStatus() {
  const [isMoving, setMoving] = useState(false);
  const onMouseMove = () => setMoving(true);
  useEffect (() => {
    if(!isMoving) {
      return;
    }
    const timeout = setTimeout(() => setMoving(false), 500);
    return () => clearTimeout(timeout);
  }, [isMoving]);
  return(
    <section onMouseMove={onMouseMove}>
      <h2>
        The mouse is {!isMoving && 'not'} moving: {isMoving ? '✓' : '✗'}
      </h2>
    </section>
  );
}
function App() {
  return (
    <div className="App">
      <MouseStatus />
    </div>
  );
}

export default App;
