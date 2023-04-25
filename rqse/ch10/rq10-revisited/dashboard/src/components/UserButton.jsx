import Button from './Button';
import { useName } from '../hooks/UseName';

function UserButton(){
  const name = useName();
  return(
    <Button>👤 {name}</Button>
  );
}

export default UserButton;