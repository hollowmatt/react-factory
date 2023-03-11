import Header from './Header';
import Button from './Button';
import { useState } from 'react';

function Task({title, id, steps, onDelete, onUpdate}){
  const deleteTask = () => {
    onDelete(id);
  }
  const [heading, setHeading] = useState(title);
  const [isEditing, setEditing] = useState(false);
  const onChange = (evt) => {
    setHeading(evt.target.value);
  };

  const save = () => {
    onUpdate(heading, id);
    setEditing(false);
    setHeading(title);
  };

  if(isEditing) {
    return(
      <li className="card-header">
        <input
          className="card-title card-title-input"
          placeholder={heading}
          name="heading"
          onChange={onChange}
          value={heading}
        />
        <ul>
          <Button icon="check" title="Save" action={save} />
        </ul>
      </li>
    );
  }
  return(
    <li className="card">
      <Header title={title} />
      <ul className="card-controls">
        <li>
          <Button icon="pencil" title="Edit" action={() => setEditing(true)}/>
        </li>
        <li>
          <Button icon="trash" title="Delete" action={deleteTask}/>
        </li>
      </ul>
    </li> 
  );
}

export default Task;