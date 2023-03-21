import React from "react";
import Button from "./Button";
import styles from "./app.module.css";

function App() {
  return (
    <div>
      <fieldset>
        <legend>Normal button</legend>
        <Button>Send</Button>
      </fieldset>
      <fieldset>
        <legend>Outline button</legend>
        <Button outline>Send</Button>
      </fieldset>
      <fieldset>
        <legend>Disabled button</legend>
        <Button disabled>Send</Button>
      </fieldset>
      <fieldset>
        <legend>Wide button</legend>
        <Button width={400}>Send</Button>
      </fieldset>
      <fieldset>
        <legend>Custom button</legend>
        <Button className={styles.customButton}>Send</Button>
      </fieldset>
    </div>
  );
}
export default App;
