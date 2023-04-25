import { NameContext } from '../hooks/UseName';
import Header from './Header';
import Main from './Main';

function Dashbaord({name}) {
  return (
    <NameContext.Provider value={name}>
      <Header />
      <Main />
    </NameContext.Provider>
  );
}

export default Dashbaord;