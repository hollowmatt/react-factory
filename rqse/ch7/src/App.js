import './App.css';
import { useState, memo, useMemo, useCallback } from 'react';

const Items = memo(function items({ items, onDelete }) {
  return (
    <>
        <h2>ToDo Items</h2>
        <ul>
          {items.map(todo => (
            <li key={todo}>
              {todo}
              <button onClick={() => onDelete(todo)}> X </button>
            </li>
          ))}
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
      ['Complete todo list', ...items]
    ),
    [items],
  );
  const onDelete = useCallback(
    (item) => (
      setItems(list => list.filter(i => i !== item))
    ),
    [],
  );

  return (
    <div className="App">
      <Items items={allItems} onDelete={onDelete}/>
      <form onSubmit={onSubmit}>
        <input value={newItem} onChange={onChange} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
