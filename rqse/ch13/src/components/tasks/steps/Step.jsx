import { useState } from 'react';

function Step({step}) {
  const [done, setDone] = useState(step.complete);

  const onUpdate = (evt) => {
    console.log(evt.target.value);
    setDone(!done);
  };

  return(
    <li key={step.num} className="step">
      <input type="checkbox" id={step.num} checked={step.complete} onClick={onUpdate}/>
      {done 
        ? (<label htmlFor={step.num} value={step.complete} className="step-complete">{step.desc}</label>)
        : (<label htmlFor={step.num} value={step.complete} className="step-label">{step.desc}</label>)
      }
      
    </li>
  );
}

export default Step;