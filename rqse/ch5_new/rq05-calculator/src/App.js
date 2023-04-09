import { useState } from 'react';
import './App.css';
const OPERATORS = {
  ADDITION: (a, b) => a + b,
  SUBTRACTION: (a, b) => a - b,
  MULTIPLICATION: (a, b) => a * b,
}

function App() {
  return (
    <div className="App">
      <Calculator a={6} b={5} />
    </div>
  );
}

function Calculator({a, b}) {
  const [operator, setOperator] = useState(() => OPERATORS.ADDITION);

  return (
    <main>
      <h1>Calculator</h1>
      [ <button onClick={() => setOperator(() => OPERATORS.ADDITION)}>Add</button> &nbsp; | 
      &nbsp; <button onClick={(() => setOperator(() => OPERATORS.SUBTRACTION))}>Subtract</button> &nbsp; | 
      &nbsp; <button onClick={(() => setOperator(() => OPERATORS.MULTIPLICATION))}>Multiply</button> ]
      <p>
        Result of applying {operator.name} to {a} and {b} is: 
        <br/>
        <code>{operator(a,b)}</code>
      </p>
    </main>
  );

}

export default App;
