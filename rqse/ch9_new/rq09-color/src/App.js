import { useState } from 'react';
import './App.css';
const PLACEHOLDER = `conic-gradient(
  #fff 0.25turn, #000 0.25turn 0.5turn, #fff 0.5turn 0.75turn, #000 0.75turn
)`;

function HexColor() {
  const [color, setColor] = useState('BADA55');
  const onChange = (evt) => setColor(
    evt.target.value
      .replace(/[^0-9a-f]/gi,'')
      .toUpperCase()
  );
  const outputStyle = {
    width: '19px',
    border: '1px solid',
    background: color.length === 6 ? `#${color}` : PLACEHOLDER,
  };
  return(
    <form style={{display:'flex'}}>
      <label>
        Hex color: #
        <input value={color} onChange={onChange} />
      </label>
      <span style={outputStyle} />
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <HexColor />
    </div>
  );
}

export default App;
