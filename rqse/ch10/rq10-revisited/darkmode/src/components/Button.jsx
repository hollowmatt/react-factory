import { useDarkMode } from "../hooks/Darkmode";

export function Button({ children, ...rest} ) {
  const { isDarkMode } = useDarkMode();
  const style = {
    color: 'inherit',
    backgroundColor: isDarkMode ? 'black' : 'white',
    boxSizing: 'border-box',
    border: '1px solid',
  };

  return(
    <button style={style} {...rest}>{children}</button>
  );
}