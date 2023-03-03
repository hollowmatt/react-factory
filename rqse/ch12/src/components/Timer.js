import { Button } from './Button';
import { TimeParts } from './TimeParts';

const values = {
  "numLeft": "05",
  "unitLeft": "minutes",
  "numRight": "00",
  "unitRight": "seconds"
}

function Timer() {

  return (
    <section className="timer">
      <TimeParts values={values} />
      <Button title="Play" />
    </section>
  );
};

export default Timer;