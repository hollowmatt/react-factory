import { useDarkMode } from "../hooks/Darkmode";
import { Button } from './Button';

export function ToggleButton() {
  const {toggleDarkMode} = useDarkMode();
  return(
    <Button onClick={toggleDarkMode}>Toggle mode</Button>
  );
}