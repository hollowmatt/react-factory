import MenuItem from "./MenuItem";
import { useContext } from 'react';
import { MenuContext } from '../App';

function Header() {
  const menu = useContext(MenuContext);
  const value = false;
  return(
    <header>
      <nav>
        <ul className="menu">
          {menu.map(({title, ...props}) => {
            return(<MenuItem key={title} {...props}>{title}</MenuItem>);
          })}
          <MenuItem key="login" icon="login" href={value ? "/logout" : "/login"}> {value ? "Logout" : "Login"}</MenuItem>
        </ul>
      </nav>
    </header>
  );
}

export default Header;