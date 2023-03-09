function Button({icon, title, action}) {
  const execute = (e) => {
    e.preventDefault();
    action();
  }
  
  return(
    <button title={title} className="icon-button" onClick={execute}>
      <img src={`/icons/${icon}.svg`} alt={title} />
    </button>
  );
}

export default Button;