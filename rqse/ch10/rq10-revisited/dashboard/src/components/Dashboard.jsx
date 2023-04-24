import { createContext } from 'react';
import Header from './Header';
import Main from './Main';

export const NameContext = createContext();

function Dashbaord({name}) {
  return (
    <NameContext.Provider value={name}>
      <Header />
      <Main />
    </NameContext.Provider>
  );
}

export default Dashbaord;