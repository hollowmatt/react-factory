export function Button({ title, icon, ...rest }) {
  return(
    <button title={title} className="toggle" {...rest}>
      <img src={`/icons/${icon}.svg`} alt={title} />
    </button>
  );
}