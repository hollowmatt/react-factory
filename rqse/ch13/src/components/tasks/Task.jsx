import Header from '../Header';
import Button from '../Button';
import Step from './steps/Step';
import { useState, useContext } from 'react';
import StepForm from './steps/StepForm';
import { TasksDispatchContext } from './TaskContext';

function Task({task}){

  const [isEditing, setEditing] = useState(false);
  const [text, setText] = useState(task.title);
  const dispatch = useContext(TasksDispatchContext);
  const [show, setShow] = useState(false);
  
  //Update these with formula soon
  const stepsTotal=4;
  const stepsCompleted=4;

  const updateTitle = () => {
    setEditing(false);
    dispatch({
      type: 'editTask',
      task: {
        ...task,
        title: text
      }
    });
  };

  const toggle = () => {
    // evt.preventDefault();
    console.log(show);
    setShow(!show);
  }

  if(isEditing) {
    return(
      <li className="card-header" key={task}>
        <input
          className="card-title card-title-input"
          placeholder={task.title}
          name="heading"
          onChange={e => {
            setText(e.target.value);
            }
          }
          value={text}
        />
        <ul>
          <Button icon="check" title="Save" action={updateTitle} />
        </ul>
      </li>
    );
  }
  return(
    <li className="card">
      <Header title={task.title} action={toggle} icon={show ? 'up' : 'down'}/>
      <ol>
        {show 
          ? (
            task.steps?.map((step) => (
              <Step key={step} step={step} id={task.id}/>
            ))
          )
          : (<div></div>)
        }
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
      <progress className='progress-bar' max={stepsTotal} value={stepsCompleted}/>
    </li> 
  );
}

export default Task;