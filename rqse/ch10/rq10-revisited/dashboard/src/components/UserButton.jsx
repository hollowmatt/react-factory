import { useContext } from 'react';
import Button from './Button';
import { NameContext } from './Dashboard';

function UserButton(){
  const name = useContext(NameContext);
  return(
    <Button>👤 {name}</Button>
  );
}

export default UserButton;