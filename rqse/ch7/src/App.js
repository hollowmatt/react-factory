import './App.css';
import { useState, memo, useMemo } from 'react';

const Items = memo(function items({ items }) {
  return (
    <>
        <h2>ToDo Items</h2>
        <ul>
          {items.map(todo => <li key={todo}>{todo}</li>)}
        </ul>
      </>
  );
});
function App() {
  const [items, setItems] = useState(['Clean Gutter', 'Do Dishes']);
  const [newItem, setNewItem] = useState('');
  
  const onSubmit = (evt) => {
    setItems(items => items.concat([newItem]));
    setNewItem('');
    evt.preventDefault();
  };

  const onChange = (evt) => setNewItem(evt.target.value);
  const allItems = useMemo(
    () => (
      ['Complete todo list', ...items]),
      [items],
  );

  return (
    <div className="App">
      <Items items={allItems} />
      <form onSubmit={onSubmit}>
        <input value={newItem} onChange={onChange} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
