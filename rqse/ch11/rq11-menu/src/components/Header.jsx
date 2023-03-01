import MenuItem from "./MenuItem";
import menu from "../data/menu.json"

function Header() {
  return(
    <header>
      <nav>
        <ul className="menu">
          {menu.map((item) => {
            return(<MenuItem href={item.href} icon={item.icon} key={item.title}>{item.title}</MenuItem>);
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;