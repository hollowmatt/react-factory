import { useState } from 'react';
import './App.css';

function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const onChangeFirst = (evt) => setFirst(evt.target.valueAsNumber);
  const onChangeSecond = (evt) => setSecond(evt.target.valueAsNumber);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Calculator</h2>
      </header>
      <form style={{display: 'flex', flexDirection: 'column'}}>
        <label>
          A:
          <input type="number" value={first} onChange={onChangeFirst} />
        </label>
        <label>
          B:
          <input type="number" value={second} onChange={onChangeSecond} />
        </label>
        <div>
          A + B: {first + second} 
        </div>
      </form>
    </div>
  );
}

export default App;
