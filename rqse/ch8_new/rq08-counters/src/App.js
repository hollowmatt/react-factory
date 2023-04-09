import { useState, useRef, memo, useCallback } from 'react';
import './App.css';

// Counter stuff

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

const Button = memo(function Button({ handleClick, label }) {
  const buttonStyle = {
    color: 'blue',
    border: '1px solid',
    background: 'transparent',
    borderRadius: '.25em',
    padding: '.5em',
    margin: '.5em'
  };
  return (
    <button style={buttonStyle} onClick={handleClick}>{label}</button>
  );
});

function StyledCounter(){
  const [counter, setCounter] = useState(0);
  const update = useCallback((d) => setCounter(v => v + d), [setCounter]);
  const handleIncrement = useCallback(() => update(1), [update]);
  const handleDecrement = useCallback(() => update(-1), [update]);
  return (
    <section>
      <h1>Counter {counter}</h1>
      <div>
        <Button handleClick={handleIncrement} label="Increment" />
        <Button handleClick={handleDecrement} label='Decrement' />
      </div>
    </section>
  );
}

// Contact stuff
const FOCUS_NONE = 0;
const FOCUS_USER = 1;
const FOCUS_REQUEST = 2;

function getStyle(isActive) {
  return {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: isActive ? 'oldlace' : 'transparent',
  };
}

function ContactForm(){
  const [focus, setFocus] = useState(FOCUS_NONE);
  const onUserFocus = () => {setFocus(FOCUS_USER);}
  const onRequestFocus = () => {setFocus(FOCUS_REQUEST);}
  const onBlur = () => {setFocus(FOCUS_NONE);}

  return(
    <section>
      <h1>Contact</h1>
      <form onBlur={onBlur}>
        <fieldset onFocus={onUserFocus} style={getStyle(focus === FOCUS_USER)}>
          <legend>User</legend>
          <label>Name:<br/>
            <input />
          </label><br/>
          <label>e-mail:<br/>
            <input type="email"/>
          </label>
        </fieldset>
        <fieldset onFocus={onRequestFocus} style={getStyle(focus === FOCUS_REQUEST)}>
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
        <StyledCounter />
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
