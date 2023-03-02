import MenuItem from "./MenuItem";
import { useData } from '../data/Context';

function Header() {
  const { links, isLoggedIn, login, logout } = useData();

  function onSubmit() {
    if (isLoggedIn) {
      logout();
    } else {
      login();
    }
  };

  return(
    <header>
      <nav>
        <ul className="menu">
          {links.map(({title, auth, ...props}) => {
            if (!auth) {
              return(<MenuItem key={title} {...props}>{title}</MenuItem>);
            } else {
              if (auth && isLoggedIn) {
                return(<MenuItem key={title} {...props}>{title}</MenuItem>);
              } else {
                return null;
              }
            }
          })}
          <button onClick={(onSubmit)}>{isLoggedIn ? "Logout" : "Login"}</button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;