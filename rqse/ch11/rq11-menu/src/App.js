import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import { DataProvider } from './data/Context'; 

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header/>
      </DataProvider>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
