import { useState } from 'react';
import './App.css';

function SmartAddy() {
  const [data, setData] = useState({
    address1: '',
    address2: '',
    postal: '',
    city: '',
    province: '',
    country: '',
  });
  const onChange = (evt) => {
    const key = evt.target.name;
    const value = evt.target.value;
    setData(oldData => ({...oldData, [key]: value }));
  };

  const jsonStyle = {
    border: '1px solid',
    background: 'transparent',
    borderRadius: '.25em',
    padding: '.5em',
    margin: '.5em'
  };  

  return(
    <div>
      <section>
        <form style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            Address line 1:
            <input value = {data.address1} name="address1" onChange={onChange} />
          </label>
          <label>
            Address line 2:
            <input value = {data.address2} name="address2" onChange={onChange} />
          </label>
          <label>
            Postal/Zip:
            <input value = {data.postal} name="postal" onChange={onChange} />
          </label>
          <label>
            City:
            <input value = {data.city} name="city" onChange={onChange} />
          </label>
          <label>
            Province/State:
            <input value = {data.province} name="province" onChange={onChange} />
          </label>
          <label>
            Country:
            <input value = {data.country} name="country" onChange={onChange} />
          </label>
          <pre style={jsonStyle}>{JSON.stringify(data, true, 2)}</pre>
        </form>
      </section>
    </div>
    
  );
}

function App() {
  return (
    <div className="">
      <SmartAddy />
    </div>
  );
}

export default App;
