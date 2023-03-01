import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import { createContext } from 'react';
import menu from "./data/menu.json"; 

export const MenuContext = createContext([]);

function App() {
  return (
    <div className="App">
      <MenuContext.Provider value={menu}>
        <Header/>
      </MenuContext.Provider>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
