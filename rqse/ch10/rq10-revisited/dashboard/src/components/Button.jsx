const BUTTON_STYLE = {
  display: "inline-block",
  padding: "4px 10px",
  background: "transparent",
  border: "0:,"
};

function Button ({children}) {
  return(
    <button style={BUTTON_STYLE}>{children}</button>
  );
}

export default Button;