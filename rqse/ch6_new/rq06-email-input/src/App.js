import { useState, useEffect } from 'react';
import './App.css';

function EmailInput({value}) {
  const [email, setEmail] = useState();
  useEffect(
    () => setEmail(value),[value],
  );
  return(
    <label>
      Email Address:
      <input
        type="email"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)} 
      />
    </label>
  )
}

const EMAIL1 = "daffy@duck.com";
const EMAIL2 = "bugs@bunny.com";
const EMAIL3 = "elmer@fudd.com";

function App() {
  const [defaultEmail, setDefaultEmail] = useState(EMAIL1);
  return (
    <div className="App">
      [<button onClick={() => setDefaultEmail(EMAIL1)}>Use {EMAIL1}</button>
      |<button onClick={() => setDefaultEmail(EMAIL2)}>Use {EMAIL2}</button>
      |<button onClick={() => setDefaultEmail(EMAIL3)}>Use {EMAIL3}</button>]
      <br/>
      <EmailInput value={defaultEmail}/>
    </div>
  );
}

export default App;
