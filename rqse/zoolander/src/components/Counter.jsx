import { useCombinedStore } from "./Store";

export const Counter = () => {
  const counterNumber = useCombinedStore.useCounterStore(state => state.number);
  const increaseNumber = useCombinedStore.useCounterStore(state => state.increaseCounterNumber);
  const decreaseNumber = useCombinedStore.useCounterStore(state => state.decreaseCounterNumber);
  const log = useCombinedStore.useCounterStore(state => state.logNumber);
  return(
    <div>
      <button onClick={increaseNumber}>+</button>
      {counterNumber}
      <button onClick={decreaseNumber}>-</button>
      <button onClick={log}>Log Details</button>
    </div>
  );
};
