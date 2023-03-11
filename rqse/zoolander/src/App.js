import { Counter } from './components/Counter';
import { PokemonList } from './components/PokemonList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Counter />
        <PokemonList />
      </header>
    </div>
  );
}

export default App;
