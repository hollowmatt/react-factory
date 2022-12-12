import { useState } from 'react';
import './App.css';

function Result({a, b, op}) {
  switch(op) {
    case '-':
      return a - b;
    case 'x': 
      return a * b;
    case '/': 
      return a/b;
    case '%':
      return a%b;
    default:
      return a + b;
  }
}

function SumNumbers() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [operator, setOperator] = useState('+');

  const onChangeFirst = (evt) => setFirst(evt.target.valueAsNumber);
  const onChangeSecond = (evt) => setSecond(evt.target.valueAsNumber);
  const onChangeOperator = (evt) => setOperator(evt.target.value);

  return(
    <section>
      <form style={{display: 'flex', flexDirection: 'column'}}>
        <label>
          A:
          <input type="number" value={first} onChange={onChangeFirst} />
        </label>  
        <label>
          Operator:
          <select onChange={onChangeOperator}>
            <option selected value="+">+</option>
            <option value='-'>-</option>
            <option value='x'>x</option>
            <option value='/'>/</option>
            <option value='%'>mod</option>
          </select>
        </label>
        <label>
          B:
          <input type="number" value={second} onChange={onChangeSecond} />
        </label>
        <div>
          Answer = <Result a={first} b={second} op={operator} />
        </div>
      </form>
    </section>
  );
 }

function App() {
  return (
    <div className="App">
      <SumNumbers />
    </div>
  );
}

export default App;
