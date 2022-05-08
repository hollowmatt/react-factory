import './App.css';
import { useState, useMemo } from 'react';

function App() {
  const [items, setItems] = useState(['Clean Gutter', 'Do Dishes']);
  const [newItem, setNewItem] = useState('');
  
  const onSubmit = (evt) => {
    setItems(items => items.concat([newItem]));
    setNewItem('');
    evt.preventDefault();
  };

  const itemsRendered = useMemo(
    () => (
      <>
        <h2>ToDo Items</h2>
        <ul>
          {items.map(todo => <li key={todo}>{todo}</li>)}
        </ul>
      </>
    ),
    [items],
  );

  const onChange = (evt) => setNewItem(evt.target.value);

  return (
    <div className="App">
      {itemsRendered}
      <form onSubmit={onSubmit}>
        <input value={newItem} onChange={onChange} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
