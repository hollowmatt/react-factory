import Header from './Header';
import Button from './Button';
import { useState } from 'react';

function Task({title, id, onDelete, onUpdate}){
  const deleteTask = () => {
    onDelete(id);
  }
  const [heading, setHeading] = useState({title});
  const [isEditing, setEditing] = useState(false);
  const onChange = (evt) => {
    setHeading(evt.target.value);
  };

  const save = () => {
    onUpdate(heading, id);
  };

  return(
    <li className="card">
      {!isEditing 
        ? (<Header title={title} />) 
        : (<input
          className="card-title card-title-input"
          placeholder="Add new task"
          name="heading"
          onChange={onChange}
          value={heading}
        />) 
      }
      <ul className="card-controls">
        <li>
          {isEditing
            ? (<Button icon="pencil" title="Save" action={save} /> )
            : (<Button icon="pencil" title="Edit" action={() => setEditing(true)}/>)
          }
        </li>
        <li>
          <Button icon="trash" title="Delete" action={deleteTask}/>
        </li>
      </ul>
    </li> 
  );
}

export default Task;