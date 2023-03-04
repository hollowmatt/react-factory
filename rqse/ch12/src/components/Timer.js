import { Button } from './Button';
import { TimeParts } from './TimeParts';
import { useState } from 'react';

function Timer() {
  //initialize state to determine if timer is running, and number of seconds
  //in the timer
  const values = {
    "numLeft": "05",
    "unitLeft": "minutes",
    "numRight": "00",
    "unitRight": "seconds"
  }
  const [isRunning, setRunning] = useState(false);
  const [numSecs, setSecs] = useState(0);

  function startStop(e) {
    e.preventDefault();
    setSecs(300);
    setRunning(!isRunning);
  }

  return (
    <section className="timer">
      <TimeParts values={values} />
      <button 
        title={isRunning ? 'Pause' : 'Play'} 
        className='toggle'
        onClick={startStop}>
          <img 
            src={isRunning ? '/icons/Pause.svg' : '/icons/Play.svg'}
            alt={isRunning ? 'Pause' : 'Play'}
          />
      </button>
      <Button title="Trash" />
    </section>
  );
};

export default Timer;