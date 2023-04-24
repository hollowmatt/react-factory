import { useContext } from "react";
import { NameContext } from "./Dashboard";


function Welcome() {
  const name = useContext(NameContext);
  return(
    <section>
      <h1>Welcome, {name}!</h1>
    </section>
  )
};

export default Welcome;