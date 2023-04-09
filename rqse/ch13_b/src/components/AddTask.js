import { useState, useContext } from 'react';
import { TasksDispatchContext } from './TaskContext';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContext);

  return (
    <ol className='lane add-task'>
      <li className='card'>
        <header className='card-header card-header-new'>
          <input
            className='card-title card-title-input'
            placeholder="Add task"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button onClick={() => {
            setText('');
            dispatch({type: 'added', id: nextId++, text: text});
          }}>Add</button>
        </header>
      </li>
    </ol>
  )
}

let nextId = 3;