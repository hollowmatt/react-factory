import './App.css';
import { useState } from 'react';
import { DarkModeContext } from './hooks/Darkmode';
import Main from './components/Main';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(v => !v);
  const contextValue = { isDarkMode, toggleDarkMode };
  return (
    <DarkModeContext.Provider value={contextValue}>
      <Main/>
    </DarkModeContext.Provider>
  );
}

export default App;
