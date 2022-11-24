import {useState} from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Counter start={0} increment={1} />
      <Counter start={10} increment={10} />
      <Counter start={100} increment={100}/>
      <Accordion />
    </div>
  );

}

function Counter({start, increment}) {
  const [counter, setCounter] = useState(start);
  return (
    <main>
      <p>Clicks: {counter}</p>
      <button onClick={() => setCounter(value => value + increment)}>
        Increment
      </button>
    </main>
  );
}

function Accordion() {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <main>
      <h2 style={{display: 'flex', gap: '6px'}}>
        Secret password
        <button onClick={() => setExpanded(false)}>-</button>
        <button onClick={() => setExpanded(true)}>+</button>
      </h2>
      {isExpanded && <p>Password: <code>hunter2</code>.</p>}
    </main>
  );
}

export default App;
