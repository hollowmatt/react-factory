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
        <input value = {data.address2} onChange={onChange('address2')}/>
      </label>
      <label>
        Postal/Zip:
        <input value = {data.postal} onChange={onChange('postal')}/>
      </label>
      <label>
        City:
        <input value = {data.city} onChange={onChange('city')}/>
      </label>
      <label>
        Province/State:
        <input value = {data.province} onChange={onChange('province')}/>
      </label>
      <label>
        Country:
        <input value = {data.country} onChange={onChange('country')}/>
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
