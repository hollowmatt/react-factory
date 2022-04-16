import './App.css';
import { useState } from 'react';

function Counter({start}) {
  const [counter, setCounter] = useState(start);
  return(
    <main>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(value => value + 1)}>
        Increment
      </button>
    </main>
  )
}

function App() {
  return (
    <div className='App'>
      <Counter start={0}/>
      <Counter start={123}/>
      <Counter start={-64}/>
    </div>
  );
}

export default App;
