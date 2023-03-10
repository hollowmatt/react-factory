
import { useState } from 'react';
import Button from './Button';

function TaskForm({add}) {
  const [title, setTitle] = useState();

  const addTask = () => {
    console.log('add task');
    if(title){
      add(title);
    }
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
            <Button icon="plus" title="Add" action={addTask}/>
          </form>
        </header>
      </li>
  );
}

export default TaskForm;