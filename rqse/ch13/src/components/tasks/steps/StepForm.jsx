import { useState, useContext } from 'react';
import Button from '../../Button';
import { TasksDispatchContext } from '../TaskContext';

function StepForm({task}) {
  const [step, setStep] = useState("");
  const dispatch = useContext(TasksDispatchContext);

  const newStep = () => {
    if(step) {
      dispatch({
          type: 'addStep',
          id: task.id,
          step: step
      });
      setStep("");
    }
  }

  const onChange = (evt) => {
    setStep(evt.target.value);
  }

  return(
    <li className='step'>
      <form className='step-form'>
        <input
          className=''
          placeholder='Add a step'
          name='step'
          onChange={onChange}
          value={step}
        />
        <Button icon="plus" title="Add" action={newStep}/>
      </form>
    </li>
  );
}

export default StepForm;