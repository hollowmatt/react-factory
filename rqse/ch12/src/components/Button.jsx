export function Button({title, action}) {
  return(
    <button title={title} className="toggle" onClick={action}>
      <img src={`/icons/${title}.svg`} alt={title} />
    </button>
  );
}