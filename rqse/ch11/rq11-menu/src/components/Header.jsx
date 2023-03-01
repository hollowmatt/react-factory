import MenuItem from "./MenuItem";
import menu from "../data/menu.json"

function Header() {
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