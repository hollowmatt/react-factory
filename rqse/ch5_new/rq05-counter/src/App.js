import {useState} from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Counter start={0} increment={1} />
      <Counter start={10} increment={10} />
      <Counter start={100} increment={100}/>
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

export default App;
