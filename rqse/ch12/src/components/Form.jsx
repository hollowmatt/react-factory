import { Button } from './Button';

export function TimeForm() {

  return (
    <form className="timer timer-new">
      <ul className="parts">
        <li> <input name="leftNum" type='number' className='number' /> </li>
        <li className='colon'> : </li>
        <li> <input name="rightNum" type='number' className='number' /> </li>
      </ul>
      <Button title='Play' />
    </form>
  );
}