import { useState } from 'react';
import Button from '../../Button';

function StepForm({add}) {
  const [step, setStep] = useState("");

  const addStep = () => {
    add(step);
    setStep("");
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
        <Button icon="plus" title="Add" action={addStep}/>
      </form>
    </li>
  );
}

export default StepForm;