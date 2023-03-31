import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function Replies() {
  const [replyList, setReplyList] = useState([]);
  const [reply, setReply] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    const fetchReplies = () => {
      fetch("http://localhost:4040/api/thread/replies", {
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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log({reply});
    setReply("");
  };

  return(
    <main className='replies'>
      <h1 className='repliesTitle'>{title}</h1>

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
        />
        <button className='modalBtn'>Send</button>
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
  );
}

export default Replies;