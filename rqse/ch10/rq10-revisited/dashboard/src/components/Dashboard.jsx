import Header from './Header';
import Main from './Main';

function Dashbaord({name}) {
  return (
    <div>
      <Header name={name}/>
      <Main name={name}/>
    </div>
  );
}

export default Dashbaord;