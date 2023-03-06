import Timer from './Timer';
import { TimeForm } from './Form';
import { useState } from 'react';

function TimerManager() {
  const [startTime, setStartTime] = useState(0);

  return (
    <div className="timers">
      {startTime > 0
        ? <Timer startTime={startTime} onComplete={() => setStartTime(0)}/>
        : <TimeForm add={setStartTime}/>
      }
    </div>
  );
}

export default TimerManager;
