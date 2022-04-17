import './App.css';
import { useState } from 'react';

function markDone(list, index) {
  return list.map(
    (item, i) => i === index ? {...item, done: true } : item
  )
}

function FilterButton({ current, flag, setFilter, children }) {
  const style = {
    border: '1px solid dimgray',
    background: current === flag ? 'dimgray' : 'transparent',
    color: current === flag ? 'white' : 'dimgray',
    padding: '4px 10px',
  };
  return (
    <button style={style} onClick={() => setFilter(flag)}>
      {children}
    </button>
  );
}

function Task({ task, done, markDone }) {
  const paragraphStyle = {
    color: done ? 'gray' : 'black',
    borderLeft: '2px solid',
  };
  const buttonStyle = {
    border: 'none',
    background: 'transparent',
    display: 'inline',
    color: 'inherit',
  };
  return (
    <p style={paragraphStyle}>
      <button style={buttonStyle} onClick={done ? null : markDone}>
        {done ? '✓ ' : '◯ '}
      </button>
      {task}
    </p>
  );
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
        <FilterButton
          current={hideDone}
          flag={false}
          setFilter={setHideDone}
        >
          Show All
        </FilterButton>
        <FilterButton
          current={hideDone}
          flag={true}
          setFilter={setHideDone}
        >
          Hide Completed
        </FilterButton>
      </div>
      {filteredTodos.map((todo, index) => (
        <Task
          key={todo.task}
          task={todo.task}
          done={todo.done}
          markDone={() => setTodos(todos => markDone(todos, index))}
        />
      ))} 
    </main>
  );
}

function App() {
  const appStyle = {
    margin: '25px',
    padding: '10px',
    border: 'dotted',
  };

  const items = [
    { task: 'Feed Cats', done: false }, 
    { task: 'Make Bread', done: false },
    { task: 'Clean litterboxes', done: false},
  ];
  return (
    <div style={appStyle}>
      <TodoApplication initialList={items}/>
    </div>
  );
}

export default App;
 