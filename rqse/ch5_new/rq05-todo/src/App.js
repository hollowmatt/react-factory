import {useState} from 'react';
import './App.css';

function App() {
  const items = ['Feed Plants', 'Water dishes', 'Wash the cat'];
  return (
    <div className="App">
      <TodoApp initialList = {items} />
    </div>
  );
}

function TodoApp ({initialList}) {
  const [todos, setTodos] = useState(initialList);
  return (
    <main>
      {todos.map((todo, index) => (
        <p key={todo}>
          {todo}
          <button onClick={() => {
            setTodos([
              ...todos.slice(0,index),
              ...todos.slice(index + 1),
            ]);
          }}>
            X
          </button>
        </p>
      ))}
    </main> 
  );
}

export default App;
