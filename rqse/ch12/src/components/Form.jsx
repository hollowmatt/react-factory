import { Button } from './Button';
import Input from './Input';
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
    add((parseInt(data.mins) * 60) + parseInt(data.secs));
    setData(EMPTY);
  };
  
  return (
    <form className="timer timer-new">
      <ul className="parts">
        <li> 
          <Input name="mins" value={data.mins} onChange={onChange} />
        </li>
        <li className='colon'> : </li>
        <li>
          <Input name="secs" value={data.secs} onChange={onChange} /> 
        </li>
      </ul>
      <button title='Play' className='toggle' onClick={addTimer}>
        <img src="/icons/Play.svg" alt="Add Timer and Play" />
      </button>
    </form>
  );
}