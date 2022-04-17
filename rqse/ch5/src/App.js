import './App.css';
import { useState } from 'react';

function Counter({start}) {
  const [counter, setCounter] = useState(start);
  return(
    <main>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(value => value + 1)}>
        Increment
      </button>
    </main>
  )
}

function Accordian() {
  const [isExpanded, setExpanded] = useState(false);
  return(
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

function ToDo({initialList}) {
  const [todos, setTodos] = useState(initialList);
  return (
    <main className='App'>
      {todos.map((todo, index) => (
        <p key={todo}>
          {todo} &nbsp;
          <button onClick={() => {
            setTodos([
              ...todos.splice(0,index),
              ...todos.slice(index + 1),
            ]);
          }}>X</button>
        </p>
      ))}
    </main>
  );
}

function App() {
  const items = ['Feed Cats', 'Make Bread', 'Clean litterboxes']
  return (
    <div className='App'>
      <Counter start={0}/>
      <Accordian/>
      <ToDo initialList={items}/>
    </div>
  );
}

export default App;
