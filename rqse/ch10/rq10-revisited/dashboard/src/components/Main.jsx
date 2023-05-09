import { memo } from 'react';
import Welcome from './Welcome';

const Main = memo(function Main() {
  return(
    <Welcome />
  )
});

export default Main;