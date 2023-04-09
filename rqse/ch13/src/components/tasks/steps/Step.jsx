import { useState, useContext } from 'react';
import { TasksDispatchContext } from '../TaskContext';
import Button from '../../Button';

function Step({step, id}) {
  const [done, setDone] = useState(step.complete);
  const dispatch = useContext(TasksDispatchContext);

  const onUpdate = () => {
    //dispatch event to complete step
    dispatch({
      type: 'completeStep',
      taskId: id,
      stepId: step.num,
      completed: done
    });
    setDone(!done);
  };

  const onDelete = () => {
    //dispatch event to delete step
    dispatch({
      type: 'removeStep',
      taskId: id,
      stepId: step.num
    });
  }

  return(
    <li key={step} className="step">
      <input type="checkbox" id={step.num} checked={step.complete} onChange={onUpdate}/>
      {done 
        ? (<label htmlFor={step.num} value={step.complete} className="step-label step-complete">{step.desc}</label>)
        : (<label htmlFor={step.num} value={step.complete} className="step-label">{step.desc}</label>)
      }
      <Button icon="trash" title="Delete" action={onDelete} />
    </li>
  );
}

export default Step;