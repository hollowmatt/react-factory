import { Button } from './Button';

export function TimeForm() {

  function addTimer(e) {
    e.preventDefault();
    console.log("add a timer to the Timer Manager");
  };
  
  return (
    <form className="timer timer-new">
      <ul className="parts">
        <li> <input name="leftNum" type='number' className='number' /> </li>
        <li className='colon'> : </li>
        <li> <input name="rightNum" type='number' className='number' /> </li>
      </ul>
      <button title='Play' className='toggle' onClick={addTimer}>
        <img src="/icons/Play.svg" alt="Add Timer and Play" />
      </button>
    </form>
  );
}