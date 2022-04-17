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

function Accordian() {
  const [isExpanded, setExpanded] = useState(false);
  return(
    <main>
      <h2 style={{display: 'flex', gap: '6px'}}>
        Secret passowrd
        <button onClick={() => setExpanded(false)}>-</button>
        <button onClick={() => setExpanded(true)}>+</button>
      </h2>
      {isExpanded && <p>Password: <code>hunter2</code>.</p>}
    </main>
  );
}

function App() {
  return (
    <div className='App'>
      <Counter start={0}/>
      <Accordian/>
    </div>
  );
}

export default App;
