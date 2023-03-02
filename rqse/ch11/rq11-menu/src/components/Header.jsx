import MenuItem from "./MenuItem";
import { useContext, useState } from 'react';
import Context from '../data/Context';

function Header() {
  const menu = useContext(Context);
  const [isLoggedIn, setLoggedIn] = useState(false);

  function onSubmit(e){
    setLoggedIn(!isLoggedIn);
  };

  return(
    <header>
      <nav>
        <ul className="menu">
          {menu.map(({title, ...props}) => {
            return(<MenuItem key={title} {...props}>{title}</MenuItem>);
          })}
          <button onClick={onSubmit}>{isLoggedIn ? "Logout" : "Login"}</button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;