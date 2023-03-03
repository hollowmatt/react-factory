export function TimeParts({values}) {
  return(
    <ul className="parts">
      <li className="part">
        <p className="number">{values.numLeft}</p>
        <p className="unit">{values.unitLeft}</p>
      </li>
      <li className="colon">:</li>
      <li className="part">
        <p className="number">{values.numRight}</p>
        <p className="unit">{values.unitRight}</p>
      </li>
    </ul>
  );
}