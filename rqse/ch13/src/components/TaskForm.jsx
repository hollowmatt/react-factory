
import { useState } from 'react';

function TaskForm({add}) {
  const [title, setTitle] = useState();

  const addTask = (evt) => {
    evt.preventDefault();
    console.log('add task');
    add(title);
    setTitle("");
  };

  const onChange = (evt) => {
    setTitle(evt.target.value);
  };

  return(
    <li className="card">
        <header className="card-header card-header-new">
          <form className="card-title-form">
            <input
              className="card-title card-title-input"
              placeholder="Add new task"
              name="title"
              onChange={onChange}
              value={title}
            />
            <button className="icon-button" onClick={(addTask)}>
              <img src="icons/plus.svg" alt="Add task" />
            </button>
          </form>
        </header>
      </li>
  );
}

export default TaskForm;