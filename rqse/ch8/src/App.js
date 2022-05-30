import './App.css';
import { useState } from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Counter />
      </header>
    </div>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter(c => c + 1);
  return(
    <>
      <h1>Value: {counter}</h1>
      <button onClick={onClick}>Increment</button>
    </>
  );
}
export default App;
