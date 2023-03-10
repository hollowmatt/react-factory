import { useCounterStore } from "./Store";

export const Counter = () => {
  const counterNumber = useCounterStore(state => state.number);
  const increaseNumber = useCounterStore(state => state.increaseCounterNumber);
  const decreaseNumber = useCounterStore(state => state.decreaseCounterNumber);
  const log = useCounterStore(state => state.logNumber);
  return(
    <div>
      <button onClick={increaseNumber}>+</button>
      {counterNumber}
      <button onClick={decreaseNumber}>-</button>
      <button onClick={log}>Log Details</button>
    </div>
  );
};
