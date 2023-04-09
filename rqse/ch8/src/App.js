import './App.css';
import { useEffect, useState, useRef } from 'react';

const VIDEO_SRC = '//images-assets.nasa.gov/' +
  'video/One Small Step/One Small Step~orig.mp4';

// Following is for the Contact form
const FOCUS_NONE = 0;
const FOCUS_USER = 1;
const FOCUS_REQUEST = 2;

function getStyle(isActive) {
  return {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: isActive ? 'oldlace' : 'transparent',
  };
}
// end of Contact form constants

// Styled Counter Stuff
function Button({ handleClick, label }) {
  const buttonStyle = {
    color: 'white',
    border: '1px solid',
    background: 'transparent',
    borderRadius: '.25em',
    padding: '.5em',
    margin: '.5em',
  };
  return(
    <button style={buttonStyle} onClick={handleClick}>{label}</button>
  );
}
// end styled counter stuff

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Counter />
       <StyledCounter />
       <DropCounter />
       <MouseStatus />
       <VideoPlayer />
       <Contact />
       <Admin />
      </header>
    </div>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);
  const increment = useRef();
  const onClick = (event) => {
    const delta = event.target === increment.current ? 1: -1;
    setCounter(c => c + delta);
  };

  return(
    <section className="counter">
      <h1>Value: {counter}</h1>
      <button ref={increment} onClick={onClick}>Increment</button>
      <button onClick={onClick}>Decrement</button>
    </section>
  );
}

function StyledCounter() {
  const [counter, setCounter] = useState(0);
  const update = (d) => {
    setCounter(val => val + d);
  }
  return(
    <section>
      <h1>Counter: {counter}</h1>
      <Button handleClick={() => update(1) } label="Increment" />
      <Button handleClick={() => update(-1) } label="Decrement" />
    </section>
  );
}

function DropCounter() {
  const [counter, setCounter] = useState(0);
  const onChange = (event) => {
    setCounter(value => value + parseInt(event.target.value));
  };
  const values = [1,2,3,4,5];

  return(
    <section className='counter'>
      <h1> Drop Count: {counter}</h1>
      <select onChange={onChange}>
        {values.map(value => (
          <option key={value} value={value}>{value}</option>
        ))}
      </select>
    </section>
  );
}

function MouseStatus() {
  const [isMoving, setMoving] = useState(false);
  const onMouseMove = () => setMoving(true);
  
  useEffect(() => {
    if(!isMoving) {
      return;
    }
    const timeout = setTimeout(() => setMoving(false), 500);
    return () => clearTimeout(timeout);
  }, [isMoving]);

  return (
    <section className="mouse" onMouseMove={onMouseMove}>
      <h2>
        The mouse is {!isMoving && 'not'} moving: {isMoving ? '✓' : '✗'}
      </h2>
    </section>
  );
}

function VideoPlayer() {
  const [isPlaying, setPlaying] = useState(false);
  const video = useRef();
  const onPlay = () => setPlaying(true);
  const onPause = () => setPlaying(false);
  const onClickPlay = () => video.current.play();
  const onClickPause = () => video.current.pause();

  return(
    <section className='video'>
      <video 
        ref={video}
        src={VIDEO_SRC}
        controls
        width="480"
        onPlay={onPlay}
        onPause={onPause}
      />
      <br/>
      <button onClick={isPlaying ? onClickPause : onClickPlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </section>
  );
}

function Contact() {
  const [focus, setFocus] = useState(FOCUS_NONE);
  const onUserFocus = () => {
    setFocus(FOCUS_USER);
  };
  const onRequestFocus = () => {
    setFocus(FOCUS_REQUEST);
  };
  const onBlur = () => {
    setFocus(FOCUS_NONE);
  }

  return(
    <section>
      <form onBlur={onBlur}>
        <h1>Contact</h1>
        <fieldset
          onFocus={onUserFocus}
          style={getStyle(focus === FOCUS_USER)}
        >
          <legend>User</legend>
          <label>Name:<br/><input /></label>
          <label>Email:<br/><input type="email"/></label>
        </fieldset>
        <fieldset
          onFocus={onRequestFocus}
          style={getStyle(focus === FOCUS_REQUEST)}
        >
          <legend>Request</legend>
          <label>Subject: <br/><input /></label>
          <label>Body: <br/><textarea /></label>
        </fieldset>
      </form>
    </section>
  );
}

function Admin() {
  const [password, setPassword] = useState('');
  const [isAdmin, setAdmin] = useState(false);
  const onSubmit = (event) => {
    event.preventDefault();
    if(password === 'platypus') {
      setAdmin(true);
    }
  };
  return isAdmin ? (
    <h1>Tofu is great</h1>
  ) : (
    <form onSubmit={onSubmit}>
      <input type="passowrd" onChange={evt => setPassword(evt.target.value)} />
      <button>Login</button>
    </form>
  );
}
export default App;
