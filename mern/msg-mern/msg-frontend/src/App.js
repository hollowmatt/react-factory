import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import './App.css';
import axios from './components/axios';


function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get("/messages/sync").then(res => {
      setMessages(res.data)
    })
  }, []);
  useEffect(() => {
    const pusher = new Pusher('33afcbde14eb9a4893f4', {
      cluster: 'us2'
    });
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      setMessages([...messages, data])
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
