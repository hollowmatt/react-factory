import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  
  return (
    <main className='App'>
      <p>Clicks: {counter}</p>
      <button onClick={() => setCounter(value => value + 1)}>
        Increment
      </button>
    </main>
  );
}

export default App;
