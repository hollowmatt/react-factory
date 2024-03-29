import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Heading } from '@chakra-ui/react';
import Nav from './Nav';

const BASE_PATH = process.env.REACT_APP_API_ADDRESS;


function Replies() {
  const [replyList, setReplyList] = useState([]);
  const [reply, setReply] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    const fetchReplies = () => {
      fetch(BASE_PATH + "/api/thread/replies", {
        method: "POST",
        body: JSON.stringify({
          id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setReplyList(data.replies);
          setTitle(data.title);
        })
        .catch((err) => console.error(err));
    }
    fetchReplies();
  },[id]);

  const addReply =() => {
    fetch(BASE_PATH + "/api/create/reply", {
      method: "POST",
      body: JSON.stringify({
        id,
        userId: localStorage.getItem("_id"),
        reply,
      }),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        navigate("/dashboard");
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addReply();
    setReply("");
  };

  return(
    <div>
      <Nav/>
      <main className='replies'>
        <Heading size="md">{title}</Heading>
        <form className='modal__content' onSubmit={handleSubmit}>
          <label htmlFor='reply'>Reply to thread</label>
          <textarea
            rows={5}
            value={reply}
            onChange={(evt) => setReply(evt.target.value)}
            type='text'
            name='reply'
            id='reply'
            className='modalInput'
            style={{border: 'solid', borderColor: '#1A73E8'}}
          />
          <Button colorScheme='blue' variant='outline' type='submit'>Send</Button>
        </form>

        <div className='thread__container'>
          {replyList.map((reply) => (
            <div className='thread__item'>
              <p>{reply.text}</p>
              <div className='react__container'>
                <p style={{opacity: "0.5"}}>by {reply.name}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    
  );
}

export default Replies;