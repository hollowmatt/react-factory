import { useState } from 'react';
import './App.css';

function Address() {
  const [data, setData] = useState({
    address1: '',
    address2: '',
    postal: '',
    city: '',
    province: '',
    country: '',
  });
  const onChange = (key) => (evt) => {
    setData(oldData => ({
      ...oldData,
      [key]: evt.target.value,
    }));
  };

  return(
    <form style={{display: 'flex', flexDirection: 'column'}}>
      <label>
        Address line 1:
        <input value = {data.address1} onChange={onChange('address1')}/>
      </label>
      <label>
        Address line 2:
        <input />
      </label>
      <label>
        Postal/Zip:
        <input />
      </label>
      <label>
        City:
        <input />
      </label>
      <label>
        Province/State:
        <input />
      </label>
      <label>
        Country:
        <input />
      </label>
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <Address />
    </div>
  );
}

export default App;
