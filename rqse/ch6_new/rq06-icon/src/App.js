import { useState } from 'react';
import './App.css';

function Icon({type}) {
  return(
    <img src={`/images/${type}.png`} alt="" />
  );
}

function Button({ label, getIcon }) {
  const [pressed, setPressed] = useState(false);
  return(
    <button onClick={() => setPressed(p => !p)}>
      {getIcon(pressed)}
      {label}
    </button>
  );
}

function LockButton() {
  const getIcon = (pressed) => pressed ? <Icon type="lock" /> : <Icon type="unlock"/>;
  return(
    <Button label="Lock" getIcon={getIcon}/>
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

