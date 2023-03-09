function Button({icon, title}) {
  return(
    <button title={title} className="icon-button">
      <img src={`/icons/${icon}.svg`} alt={title} />
    </button>
  );
}

export default Button;