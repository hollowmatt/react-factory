import { createContext, useContext } from 'react';

export const NameContext = createContext();

export function useName() {
  return useContext(NameContext);
}
