import {useState} from 'react';
import './App.css';

function App() {
  const items = [
    {task:'Feed Plants', done: false},
    {task:'Water dishes', done: false}, 
    {task:'Wash the cat', done: false},
  ];
  return (
    <div className="App">
      <TodoApp initialList = {items} />
    </div>
  );
}

function setDone(list, index) {
  return list.map(
    (item, i) => i === index ? { ...item, done: !(item.done)} : item
  );
}

function TodoApp ({initialList}) {
  const [todos, setTodos] = useState(initialList);
  const [hideDone, setHideDone] = useState(false);
  const filteredTodos = hideDone ? todos.filter(({done}) => !done) : todos;
  
  return (
    <main>
      <div styel={{display: 'flex'}}>
        <button onClick={() => setHideDone(false)}>Show All</button> &nbsp;
        <button onClick={() => setHideDone(true)}>Hide Done</button>
      </div>
      {filteredTodos.map((todo, index) => (
        <p key={todo.task}>
          {todo.done ?
              (
                <span>
                  <strike>{todo.task}</strike> 
                  <button onClick={() => {
                    setTodos(todos => setDone(todos, index));
                  }}>
                    -
                  </button>
                </span>
              )
           :
              (
                <span>{todo.task}
                  <button onClick={() => {
                    setTodos(todos => setDone(todos, index));
                  }}>
                    X
                  </button>
                </span>
              )
            
          }
          
        </p>
      ))}
    </main> 
  );
}

export default App;
