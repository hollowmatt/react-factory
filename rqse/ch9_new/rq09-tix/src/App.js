import { useState } from 'react';
import './App.css';


function TicketNumber() {
  const [ticketNumber, setTicketNumber] = useState('');
  const isValid = ticketNumber.length === 7;
  const onChange = (evt) => {

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
