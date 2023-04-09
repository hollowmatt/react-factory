import { memo, useState, useRef } from 'react';
import './App.css';

const Items = memo (function Items({ items }) {
  return(
    <div>
      <h2>Todo Items</h2>
      <ul>
        {items.map(todo => <li key={todo}>{todo}</li>)}
      </ul>
    </div>
  );
});


function Todo() {
  const [items, setItems] = useState(['Clean catbox', 'Do Dishes']);
  const [newItem, setNewItem] = useState('');
  const ref = useRef(null);
  const onSubmit = (evt) => {
    setItems(items => items.concat([newItem]));
    setNewItem('');
    ref.current.focus();
    evt.preventDefault();
  };
  const onChange = (evt) => setNewItem(evt.target.value);
  return(
    <main>
      <Items items={items} />
      <form onSubmit={onSubmit}>
        <input ref={ref} value={newItem} onChange={onChange} />
        <button>Add</button>
      </form>
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
