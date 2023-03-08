import Timer from './Timer';
import { TimeForm } from './Form';
import { useState } from 'react';

function TimerManager() {
  const [timers, setTimers] = useState([{startTime:30, id:0}]);
  const [adding, setAdding] = useState(true);

  const onComplete = (idToDelete) => {
    setTimers((oldTimers) => oldTimers.filter(({id}) => id !== idToDelete));
  };

  const onAdd = (startTime) => {
    const id = timers.length();
    setTimers((oldTimers) => [...oldTimers, {startTime, id}] );
  };

  return (
    <div className="timers">
      {timers.map(({startTime, id}) => (
        startTime > 0
          ? <Timer startTime={startTime} onComplete={onComplete} id={id} key={id}/>
          : <TimeForm add={onAdd}/> 
      ))}
      <button className="timer timer-add" onclick={() => setAdding(true)}>
        +
      </button>
      
    </div>
  );
}

export default TimerManager;
