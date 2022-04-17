import './App.css';
import Todo from './components/Todo';

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
      <Todo initialList={items}/>
    </div>
  );
}

export default App;
 