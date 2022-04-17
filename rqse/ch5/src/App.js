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

function markDone(list, index) {
  return list.map(
    (item, i) => i === index ? {...item, done: true } : item
  )
}
function TodoApplication({initialList}) {
  const [todos, setTodos] = useState(initialList);
  const [hideDone, setHideDone] = useState(false);
  const filteredTodos = hideDone
    ? todos.filter(({done}) => !done)
    : todos;
  return (
    <main>
      <div style={{display: 'flex'}}>
        <button onClick={() => setHideDone(false)}>
          Show all
        </button> &nbsp;
        <button onClick={() => setHideDone(true)}>
          Hide Completed
        </button>
      </div>
      {filteredTodos.map((todo, index) => (
        <p key={todo.task}>
        {todo.done ? (
          <strike>{todo.task}</strike>
        ) : (
          <>
            {todo.task}
            <button onClick={() =>
              setTodos(todos => markDone(todos, index))
            }>x</button>
          </>
        )}
        </p>
      ))} 
    </main>
  );
}

function App() {
  const items = [
    { task: 'Feed Cats', done: false }, 
    { task: 'Make Bread', done: false },
    { task: 'Clean litterboxes', done: false},
  ];
  return (
    <div className='App'>
      <Counter start={0}/>
      <Accordian/>
      <TodoApplication initialList={items}/>
    </div>
  );
}

export default App;
 