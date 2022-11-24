import { useState } from 'react';
function markDone(list, index) {
  return list.map(
    (item, i) =>
      i === index
        ? { ...item, done: !(item.done) }
        : item
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
      <button style={buttonStyle} onClick={markDone}>
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
        >Show all</FilterButton>
        <FilterButton
          current={hideDone}
          flag={true}
          setFilter={setHideDone}
        >Hide done</FilterButton>
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
  const items = [
    { task: 'Feed the plants', done: false },
    { task: 'Water the dishes', done: false },
    { task: 'Clean the cat', done: false },
  ];
  return <TodoApplication initialList={items} />;
}

export default App;