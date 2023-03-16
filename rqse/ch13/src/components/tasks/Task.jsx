import Header from '../Header';
import Button from '../Button';
import Step from './steps/Step';
import { useState, useContext } from 'react';
import StepForm from './steps/StepForm';
import { TasksDispatchContext } from './TaskContext';

function Task({task}){

  const [isEditing, setEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);

  if(isEditing) {
    return(
      <li className="card-header">
        <input
          className="card-title card-title-input"
          placeholder={task.title}
          name="heading"
          onChange={e => {
            dispatch({
              tyupe: 'editTask',
              task: {
                ...task,
                text: e.target.value
              }
            })}}
          value={task.title}
        />
        <ul>
          <Button icon="check" title="Save" action={() => setEditing(false)} />
        </ul>
      </li>
    );
  }
  return(
    <li className="card">
      <Header title={task.title} />
      <ol>
        {task.steps?.map(({num, desc, complete}) => (
          <Step num={num} key={num} desc={desc} complete={complete}/>
        ))}
        <StepForm task={task}/>
      </ol>
      <ul className="card-controls">
        <li>
          <Button icon="pencil" title="Edit" action={() => setEditing(true)}/>
        </li>
        <li>
          <Button icon="trash" title="Delete" action={() => dispatch({type:'removeTask', id:task.id})} />
        </li>
      </ul>
    </li> 
  );
}

export default Task;