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
  const onChange = (key) => (evt) => {
    setData(oldData => ({
      ...oldData,
      [key]: evt.target.value,
    }));
  };

  const tableStyle = {
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
            <input value = {data.address1} name="address1" onChange={onChange('address1')}/>
          </label>
          <label>
            Address line 2:
            <input value = {data.address2} name="address2" onChange={onChange('address2')}/>
          </label>
          <label>
            Postal/Zip:
            <input value = {data.postal} name="postal" onChange={onChange('postal')}/>
          </label>
          <label>
            City:
            <input value = {data.city} name="city" onChange={onChange('city')}/>
          </label>
          <label>
            Province/State:
            <input value = {data.province} name="province" onChange={onChange('province')}/>
          </label>
          <label>
            Country:
            <input value = {data.country} name="country" onChange={onChange('country')}/>
          </label>
        </form>
      </section>
      <table style={tableStyle}>
        <tr>
          <th>Address Line 1:</th>
          <td>{data.address1}</td>
        </tr>
        <tr>
          <th>Address Line 2:</th>
          <td>{data.address2}</td>
        </tr>
        <tr>
          <th>Postal/Zip:</th>
          <td>{data.postal}</td>
        </tr>
        <tr>
          <th>City:</th>
          <td>{data.city}</td>
        </tr>
        <tr>
          <th>Province/State:</th>
          <td>{data.province}</td>
        </tr>
        <tr>
          <th>Country:</th>
          <td>{data.country}</td>
        </tr>
      </table>
    </div>
    
  );
}

function App() {
  return (
    <div className="App">
      <SmartAddy />
    </div>
  );
}

export default App;
