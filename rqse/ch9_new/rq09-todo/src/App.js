import { useState } from 'react';
import List from './components/List';
import Add from './components/Add';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [isAdding, setAdding] = useState(false);

  const handleDelete = (item) => setItems(
    oldItems => oldItems.filter(oldItem => oldItem !== item)
  );

  const handleAdd = (newItem) => {
    setItems(oldItems => oldItems.concat([newItem]));
    setAdding(false);
  }
  const handleCancel = () => setAdding(false);

  return (
    <div className="App">
      <main>
        <nav>
          <button onClick={() => setAdding(false)}>View list</button>
          <button onClick={() => setAdding(true)}>Add New Item</button>
        </nav>
        {isAdding ?
          <Add handleAdd={handleAdd} handleCancel={handleCancel} />
          :
          <List items={items} handleDelete={handleDelete} />
        }
      </main>
    </div>
  );
}

export default App;
