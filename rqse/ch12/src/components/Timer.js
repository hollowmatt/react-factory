import { Button } from './Button';
import { TimeParts } from './TimeParts';
import useReduction from "use-reduction";
import { useEffect } from 'react';

function Timer({ startTime, onComplete}) {
 
  const reducer = {
    play: (state) =>
      ({...state, isRunning: true}),
    pause: (state) =>
      ({...state, isRunning: false}),
    restart: (state) =>
      ({...state, numSecs: startTime, isCompleted: false}),
    tick: (state) => {
      console.log(state.numSecs);
      const numSecs = state.numSecs - 1;
      if (numSecs > 0) {
        return({
          ...state,
          numSecs,
        });
      }
      return {
        ...state,
        numSecs: 0,
        isCompleted: true,
        isRunning: false,
      };
    }
  };

  const INITIAL_STATE = { numSecs: startTime, isRunning: false, isCompleted: false };
  const [state, actions] = useReduction(INITIAL_STATE, reducer);

  useEffect(() => {
    if(!state.isRunning) {
      return;
    }
    const interval = setInterval(() => actions.tick(), 1000);
    return () => { clearInterval(interval)};
  }, [state.isRunning, actions]);

  return (
    <section className={`timer ${state.isRunning ? 'timer-ticking' : state.isCompleted ? 'timer-ringing' : ''}`}>
      <TimeParts time={state.numSecs} />
      {state.isRunning
      ? <Button title='Pause' icon="pause" onClick={actions.pause} />
      : <Button title='Play' icon="play" onClick={actions.play} />
      }
      <Button icon="restart" label='Restart' onClick={actions.restart}/>
      <Button icon="trash" label="Delete" onClick={onComplete}/>
    </section>
  );
};

export default Timer;