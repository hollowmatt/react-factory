import { useState, useRef } from 'react';
import './App.css';

const THRESHOLD = 300;

function DoubleCount({from}) {
  const [counter, setCounter] = useState(0);
  const lastClickTime = useRef(null);
  const onClick = () => {
    const isDoubleClick = Date.now() - lastClickTime.current < THRESHOLD;
    if (isDoubleClick) {
      setCounter(value => value + 1);
    } else {
      lastClickTime.current = Date.now();
    }
  };
  return (
    <main>
      <p>Counter: {counter}</p>
      <button onClick={onClick}>Increment</button>
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <DoubleCount />
    </div>
  );
}

export default App;
