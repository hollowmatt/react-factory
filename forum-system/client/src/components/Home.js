import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';
import Likes from './Likes';
import Comments from './Comments';

function Home() {
  const navigate = useNavigate();
  const [thread, setThread] = useState("");
  const [threadList, setThreadList] = useState([]);

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
                {thread.likes.length} {thread.replies.length}
                {/* <Likes numberOfLikes={thread.likes.length} threadId={thread.id} />
                <Comments numberOfComments={thread.replies.length} threadId={thread.id} title={thread.title} /> */}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;