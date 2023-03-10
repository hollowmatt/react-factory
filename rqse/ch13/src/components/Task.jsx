import Header from './Header';
import Button from './Button';

function Task({title, id, onDelete}){
  const deleteTask = () => {
    onDelete(id);
  }

  return(
    <li className="card">
     <Header title={title} />
      <ul className="card-controls">
        <li>
          <Button icon="pencil" title="Edit"/>
        </li>
        <li>
          <Button icon="trash" title="Delete" action={deleteTask}/>
        </li>
      </ul>
    </li>
  );
}

export default Task;