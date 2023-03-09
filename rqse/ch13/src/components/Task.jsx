import Header from './Header';
import Button from './Button';

function Task({title}){
  return(
    <li className="card">
     <Header title={title} />
      <ul className="card-controls">
        <li>
          <Button icon="pencil" title="Edit"/>
        </li>
        <li>
          <Button icon="trash" title="Delete"/>
        </li>
      </ul>
    </li>
  );
}

export default Task;