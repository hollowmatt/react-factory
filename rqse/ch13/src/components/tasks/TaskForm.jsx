
import { useState, useContext } from 'react';
import { TasksDispatchContext } from './TaskContext';
import Button from '../Button';

function TaskForm({add}) {
  const [title, setTitle] = useState();
  const dispatch = useContext(TasksDispatchContext);

  const addTask = () => {
    console.log('add task');
    if(title){
      dispatch({
        type: 'addTask',
        title: title
      });
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