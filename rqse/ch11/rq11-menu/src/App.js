import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import Context from './data/Context'; 
import menu from "./data/menu.json"; 

function App() {
  return (
    <div className="App">
      <Context.Provider value={menu}>
        <Header/>
      </Context.Provider>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
