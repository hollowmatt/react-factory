import { useState } from 'react';

function Step({num, desc, complete}) {
  const [done, setDone] = useState(complete);

  const onUpdate = (evt) => {
    console.log(evt.target.value);
    setDone(!done);
  };

  return(
    <li key={num} className="step">
      <input type="checkbox" id={num} value={done} onClick={onUpdate}/>
      {done 
        ? (<label htmlFor={num} value={done} className="step-complete">{desc}</label>)
        : (<label htmlFor={num} value={done} className="step-label">{desc}</label>)
      }
      
    </li>
  );
}

export default Step;