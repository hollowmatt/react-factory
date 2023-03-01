import MenuItem from "./MenuItem";
import { useContext } from 'react';
import { MenuContext } from '../App';

function Header() {
  const menu = useContext(MenuContext);
  return(
    <header>
      <nav>
        <ul className="menu">
          {menu.map(({title, ...props}) => {
            return(<MenuItem key={title} {...props}>{title}</MenuItem>);
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;