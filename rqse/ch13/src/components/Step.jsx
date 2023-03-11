function Step({num, desc, complete}) {
  return(
    <li key={num} className="step">
      <input type="checkbox" id={num} value={complete}/>
      <label htmlFor={num} value={desc} className="step-label">{desc}</label>
    </li>
  );
}

export default Step;