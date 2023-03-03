export function Button({title}) {
  return(
    <button title={title} class="toggle">
      <img src={`/icons/${title}.svg`} alt={title} />
    </button>
  );
}