import { useState } from 'react';
import './App.css';


function TicketNumber() {
  const [ticketNumber, setTicketNumber] = useState('');
  const isValid = ticketNumber.length === 7;
  const onChange = (evt) => {
    const [first = '', second = ''] = evt.target.value
      .replace(/[^0-9a-z]/gi, '').slice(0,6).match(/.{0,3}/g);
    const value = first.length === 3 ? `${first}-${second}` : first;
    setTicketNumber(value.toUpperCase());
  };
  return(
    <form style={{display: 'flex'}}>
      <label>
        Ticket Number:
        <input value={ticketNumber} onChange={onChange} placeholder="E.G. R1S-T2U"/>
      </label>
      <span>
        {isValid ? '✓' : '✗'}
      </span>
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <TicketNumber />
    </div>
  );
}

export default App;
