import {useState} from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <main>
      <p>Clicks: {counter}</p>
      <button onClick={() => setCounter(value => value + 1)}>
        Increment
      </button>
    </main>
  );
}

export default App;
