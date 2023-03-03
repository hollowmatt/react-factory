import Timer from './Timer';
import { TimeForm } from './Form';

function TimerManager() {
  return (
    <div className="timers">
      <Timer />
      <TimeForm />
    </div>
  );
}

export default TimerManager;
