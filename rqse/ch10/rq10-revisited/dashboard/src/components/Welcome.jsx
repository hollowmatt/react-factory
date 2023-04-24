import { useContext, useReducer } from "react";
import { NameContext } from "./Dashboard";

function reducer(state, { type }) {
  switch (type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
        return state - 1;
    default:
      return state;
  }
}

function Welcome() {
  const name = useContext(NameContext);
  const [counter, dispatch] = useReducer(reducer, 0);
  return(
    <section>
      <h1>Welcome, {name}!</h1>
      <hr/>
      <h3>Counter: {counter}</h3>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
        <button onClick={() =>dispatch({ type: "DECREMENT" })}>Decrement</button>
      </div>
    </section>
  );
};

export default Welcome;