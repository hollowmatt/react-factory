import Button from './Button';
import UserButton from './UserButton';

const HEADER_STYLE = {
  display: "flex",
  justifyContent: "flex-end",
  borderBottom: "1px solid",
};

function Header() {
  return(
    <header style={HEADER_STYLE}>
      <Button>Home</Button>
      <Button>Groups</Button>
      <Button>Profile</Button>
      <UserButton/>
    </header>
  );
}

export default Header;