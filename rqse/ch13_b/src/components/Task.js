import { useState } from 'react';
import { TasksDispatchContext } from './TaskContext';
import { useContext } from 'react';

export function Task({ task}) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);
  if (isEditing) {
    return(
      <li className='card-header'>
        <input
          className='card-title card-title-input'
          value={task.text}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }
            });
          }} />
          
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </li>
    );
  } else {
    return(
      <li className='card'>
        {task.done
          ? ( <p className='card-title task-complete'>{task.text}</p> )
          : ( <p className='card-title'>{task.text}</p> )
        }
        <ul className='card-controls'>
          <input
              id={task.id}
              type="checkbox"
              checked={task.done}
              onChange={e => {
                dispatch({
                  type:'changed',
                  task: {
                    ...task,
                    done: e.target.checked
                  }
                });
              }}
            />
            <label htmlFor={task.id}>Done</label>
            <button onClick={() => dispatch({type:'deleted', id:task.id})}>
              Delete
            </button>
            <button onClick={() => setIsEditing(true)}>
              Edit
            </button>
        </ul>
      </li>
    );
  }
}