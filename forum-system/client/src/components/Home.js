import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [thread, setThread] = useState("");
  useEffect(() => {
    const checkUser = () => {
      if(!localStorage.getItem("_id")) {
        navigate("/");
      } else {
        console.log("authenticated");
      }
    };
    checkUser();
  }, [navigate]);

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