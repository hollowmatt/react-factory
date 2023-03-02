import { createContext, useState, useContext } from 'react';
import menu from './menu.json';

const DataContext = createContext({
  links: [],
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export function DataProvider({children}) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const links = menu;
  const login = () => {setLoggedIn(true)};
  const logout = () => {setLoggedIn(false)};
  const value = {links, isLoggedIn, login, logout};

  return(
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
};
export function useData() {
  return useContext(DataContext);
};
