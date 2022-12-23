import { useReducer } from 'react';
import './App.css';

function reducer(state, { type }) {
  switch(type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
        return state - 1;
    default:
        return state;
  }
}

function App() {
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <div className="App">
      <section>
        <h1>Counter: {counter}</h1>
        <div>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
        </div>
      </section>
    </div>
  );
}

export default App;
