import React, { useState } from 'react';

function Replies() {
  const [reply, setReply] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log({reply});
    setReply("");
  };

  return(
    <main className='replies'>
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
    </main>
  );
}

export default Replies;