import Input from './Input';
import { Button } from './Button';
import { useState } from 'react';

const EMPTY = { mins: 0, secs: 0 };

export function TimeForm({add}) {
  const [data, setData] = useState(EMPTY);

  const onChange = (evt) => {
    setData(oldData =>
      ({...oldData, [evt.target.name]: evt.target.valueAsNumber})
    );
  };

  function addTimer(e) {
    e.preventDefault();
    if (data.mins === 0 && data.secs === 0) {
      return;
    }
    add(data.mins * 60 + data.secs);
    setData(EMPTY);
  };
  
  return (
    <form className="timer timer-new" onSubmit={addTimer}>
      <ul className="parts">
        <li> 
          <Input name="mins" value={data.mins} onChange={onChange} />
        </li>
        <li className='colon'> : </li>
        <li>
          <Input name="secs" value={data.secs} onChange={onChange} /> 
        </li>
      </ul>
      <Button icon="Play" label="Start" />
    </form>
  );
}