import './App.css';
import { useEffect, useState, useRef } from 'react';

const VIDEO_SRC = '//images-assets.nasa.gov/' +
  'video/One Small Step/One Small Step~orig.mp4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Counter />
       <MouseStatus />
       <VideoPlayer />
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

export default App;
