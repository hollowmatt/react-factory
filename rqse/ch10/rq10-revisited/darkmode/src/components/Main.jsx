import { memo } from 'react';
import { Header } from './Header';
import { useDarkMode } from '../hooks/Darkmode';

export const Main = memo(function Main() {
  const { isDarkMode } = useDarkMode();
  const style = {
    color: isDarkMode ? 'white' : 'black',
    backgroundColor: isDarkMode ? 'black' : 'white',
    margin: '-8px',
    minHeight: '100vh',
    boxSizing: 'border-box',
  };

  return(
    <main style={style}>
      <Header/>
      <h1>Welcome to my hacienda, Mr. McQuaid</h1>
    </main>
  );
});