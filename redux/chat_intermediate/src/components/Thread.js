import React from "react";
import MessageInput from "./MessageInput";

class Thread extends React.Component {
    render() {
        const store = this.props.store;
        console.log(store.getState());
        const messages = this.props.thread.messages.map((message, index) => (
            <div
              className='comment'
              key={index}
              onClick={() => this.handleClick(message.id)}
            >
              <div className='text'>
                {message.text}
                <span className='metadata'>@{message.timestamp}</span>
              </div>
            </div>
          ));

        return(
            <div className="ui center aligned basic segment">
                <div className="ui comments">
                    {messages}
                </div>
                <MessageInput store={store}/>
            </div>
        );
    }
}

export default Thread;