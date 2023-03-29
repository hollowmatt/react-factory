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

  const createThread = () => {
    fetch("http://localhost:4040/api/create/thread", {
      method: "POST",
      body: JSON.stringify({
        thread,
        userId: localStorage.getItem("_id"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createThread();
    setThread("");
    console.log("thread is now: " + thread);
  };

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