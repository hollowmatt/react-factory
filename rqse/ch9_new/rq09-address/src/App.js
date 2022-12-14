import { useState } from 'react';
import './App.css';

function Address() {
  return(
    <form style={{display: 'flex', flexDirection: 'column'}}>
      <label>
        Address line 1:
        <input />
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
