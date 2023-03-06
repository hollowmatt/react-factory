import { Button } from './Button';
import { TimeParts } from './TimeParts';
import { useState, useEffect } from 'react';

function Timer({ startTime, onComplete}) {
  const [isRunning, setRunning] = useState(false);
  const [numSecs, setSecs] = useState(startTime);
  const play = () => setRunning(true);
  const pause = () => setRunning(false);
  
  useEffect(() => {
    if(!isRunning) {
      return;
    }
    function tick() {
      setSecs(oldValue => {
        const value = oldValue - 1;
        if (value <= 0) {
          setRunning(false);
          onComplete();
          return(startTime);
        }
        return value;
      });
    }
    const interval = setInterval(tick, 1000);
    return () => { clearInterval(interval)};
  }, [isRunning, startTime, onComplete]);

  return (
    <section className={`timer ${isRunning ? 'timer-ticking' : ''}`}>
      <TimeParts time={numSecs} />
      {isRunning
      ? <Button title='Pause' icon="pause" onClick={pause} />
      : <Button title='Play' icon="play" onClick={play} />
      }
    </section>
  );
};

export default Timer;