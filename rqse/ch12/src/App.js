import './style.css';

import TimerManager from './components/TimerManager';

function App() {
  return (
    <main className="wrapper">
      <h1 className="title">Countdown</h1>
      <TimerManager />
    </main>
  );
}

export default App;
