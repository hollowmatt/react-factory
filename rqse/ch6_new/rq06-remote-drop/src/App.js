import { useState, useEffect } from 'react';
import './App.css';

function RemoteDropdown() {
  const [options, setOptions] = useState([]);
  useEffect(() => {
      fetch('//www.swapi.tech/api/people')
      .then(res => res.json())
      .then(data => setOptions(data.results.map(({ name}) => name)));
      },[],);
  return(
    <select>
      {options.map(option => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}

function App() {
  return (
    <div className="App">
      <RemoteDropdown />
    </div>
  );
}

export default App;
