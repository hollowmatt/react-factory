import { useState } from 'react';
import './App.css';

function Icon({type}) {
  return(
    <img src={`/images/${type}.png`} width="24" alt="" />
  );
}

function Button({ label, Icon }) {
  const [pressed, setPressed] = useState(false);
  return(
    <button onClick={() => setPressed(p => !p)}>
     <Icon pressed={pressed} />
      {label}
    </button>
  );
}
function LockIcon({ pressed }) {
  return pressed ? <Icon type="lock" /> : <Icon type="unlock" />;
}

function LockButton() {
  return(
    <Button Icon={LockIcon}/>
  )
}
function App() {
  return (
    <div className="App">
      <LockButton />
    </div>
  );
}

export default App;

