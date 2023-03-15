import { useState } from 'react';

export function Step({step}) {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return(
      <li className="step">
        <input
          className='cart-title-input'
          value={step.desc}
          onChange={() => {alert("change step")}}
        />
        <button onClick={() => {setIsEditing(false)}}>Save</button>
      </li>
    );
  } else {
    return(
      <li className='step'>
        {step.complete
          ? (<p className='step-title step-complete'>{step.desc}</p>)
          : (<p className='step-title'>{step.desc}</p>)
        }
        <ul className='card-controls'>
          <input
            id={step.id}
            type="checkbox"
            checked={step.complete}
            onChange={() => {alert("complete")}}
          />
          <label htmlFor={step.id}>Complete</label>  
          <button onClick={() => {setIsEditing(true)}}>Edit</button>
          <button onClick={() => {alert("delete")}}>Delete</button>
        </ul>
      </li>
    );
  }
}