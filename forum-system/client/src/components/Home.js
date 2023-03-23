import React, { useState } from 'react';
import Nav from './Nav';

function Home() {
  const [thread, setThread] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log({ thread });
    setThread("");
  }

  return(
    <>
      <Nav/>
      <main className='home'>
        <h2 className='homeTitle'>Create a thread</h2>
        <form className='homeForm' onSubmit={handleSubmit}>
          <div className='home__container'>
            <label htmlFor='thread'>Title / Description</label>
            <input
              type='text'
              name='thread'
              id='thread'
              required
              vaule={thread}
              onChange={(e) => setThread(e.target.value)}
            />
          </div>
          <button className='homeBtn'>Create Thread</button>
        </form>
      </main>
    </>
  );
}

export default Home;