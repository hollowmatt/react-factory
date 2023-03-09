import { useState } from 'react';
import Task from './Task';

function TaskList() {
  const INIT_TASKS = [
    {
      id: 0,
      title: 'This is a task'
    },
    {
      id: 1,
      title: 'This is another task'
    },
    {
      id: 2,
      title: 'Yet a third task'
    }
  ];
  const [tasks, setTasks] = useState(INIT_TASKS);
  
  return (
    <ol className="lane">
      {tasks.map(({id, title}) => (
        <Task title={title} key={id} />
      ))}
      <li className="card">
        <header className="card-header card-header-new">
          <form className="card-title-form">
            <input
              className="card-title card-title-input"
              placeholder="Add new task"
              name="title"
            />
            <button className="icon-button">
              <img src="icons/plus.svg" alt="Add task" />
            </button>
          </form>
        </header>
      </li>
    </ol>
  );
}

export default TaskList;
