import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';
import Likes from './Likes';
import Comments from './Comments';

const BASE_PATH = process.env.REACT_APP_API_ADDRESS;

function Home() {
  const navigate = useNavigate();
  const [thread, setThread] = useState("");
  const [threadList, setThreadList] = useState([]);

  useEffect(() => {
    const checkUser = () => {
      if(!localStorage.getItem("_id")) {
        navigate("/");
      } else {
        fetch(BASE_PATH + "/api/all/threads", {
        })
          .then((res) => res.json())
          .then((data) => setThreadList(data.threads))
          .catch((err) => console.error(err));
      }
    };
    checkUser();
  }, [navigate]);

  const createThread = () => {
    fetch(BASE_PATH + "/api/create/thread", {
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
          console.log(data.message);
          setThreadList(data.threads);
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(thread) {
      createThread();
      setThread("");
    } else {
      setThread("");
      alert("cannot create empty thread");
    }
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
        <div className='thread__container'>
          {threadList.map((thread) => (
            <div className='thread__item' key={thread.id}>
              <p>{thread.title}</p>
              <div className='react__container'>
                <Likes numberOfLikes={thread.likes.length} threadId={thread.id} />
                <Comments numberOfComments={thread.replies.length} threadId={thread.id} />
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;