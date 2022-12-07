import { useState, useRef } from 'react';
import './App.css';

function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = useRef();
  const onClick = (evt) => {
    const delta = evt.target === increment.current ? 1 : -1;
    setCounter(value => value + delta);
  };
  return(
    <section>
      <h1>Value: {counter}</h1>
      <button ref={increment} onClick={onClick}>Increment</button>
      <button onClick={onClick}>Decrement</button>
    </section>
  );
}

function DropDownCounter() {
  const [counter, setCounter] = useState(0);
  const onChange = (evt) => {
    setCounter(value => value + parseInt(evt.target.value));
  }
  const values = [1,2,3,4,5,-5,-4,-3,-2,-1];
  return(
    <section>
      <h1>Counter: {counter}</h1>
      <select onChange={onChange}>
        {values.map(value => (
          <option key={value} value={value}>{value}</option>
        ))}
      </select>
    </section>
  );
}

function ContactForm(){
  return(
    <section>
      <h1>Contact</h1>
      <form>
        <fieldset>
          <legend>User</legend>
          <label>Name:<br/>
            <input />
          </label><br/>
          <label>e-mail:<br/>
            <input type="email"/>
          </label>
        </fieldset>
        <fieldset>
          <legend>Request</legend>
          <label>Subject:<br/>
            <input/>
          </label><br/>
          <label>Body:<br/>
            <textarea />
          </label>
        </fieldset>
      </form>
    </section>
  )
}
function App() {
  return (
    <div>
      <div className="App">
        <Counter />
        <DropDownCounter />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
