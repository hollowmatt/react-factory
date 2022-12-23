import { useContext, useState, createContext, memo } from 'react';
import './App.css';

//colors
const dmText = '#c9eb34';
const lmText = '#3a3b35';
const dmBack = '#30302e';
const lmBack = '#fafafa';
const dmButton = '#333';
const lmButton = '#CCC';

const DarkModeContext = createContext({});
function Button({ children, ...rest }) {
  const { isDarkMode } = useContext(DarkModeContext);
  const style = {
    backgroundColor: isDarkMode ? `${dmButton}` : `${lmButton}`,
    border: '1px solid',
    color: 'inherit',
  };
  return <button style={style} {...rest}>{children}</button>
}
function ToggleButton() {
  const { toggleDarkMode } = useContext(DarkModeContext);
  return <Button onClick={toggleDarkMode}>Toggle mode</Button>
}
const Header = memo(function Header() {
  const style = {
    padding: '10px 5px',
    borderBottom: '1px solid',
    marginBottom: '10px',
    display: 'flex',
    gap: '5px',
    justifyContent: 'flex-end',
  }
  return (
    <header style={style}>
      <Button>Products</Button>
      <Button>Services</Button>
      <Button>Pricing</Button>
      <ToggleButton />
    </header>
  )
});
const Main = memo(function Main() {
  const { isDarkMode } = useContext(DarkModeContext);
  const style = {
    color: isDarkMode ? `${dmText}` : `${lmText}`,
    backgroundColor: isDarkMode ? `${dmBack}` : `${lmBack}`,
    margin: '8px',
    minHeight: '100vh',
    boxSizing: 'border-box',
 
  }
  return <main style={style}>
    <Header />
    <h1>Welcome to our business site!</h1>
  </main>
});
function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(v => !v);
  const contextValue = { isDarkMode, toggleDarkMode };
  return (
    <DarkModeContext.Provider value={contextValue}>
      <Main />
    </DarkModeContext.Provider>
  );
}

export default App;