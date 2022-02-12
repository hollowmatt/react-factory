import React from 'react';

class MessageView extends React.Component {
    handleClick = (id) => {
        this.props.tore.dispatch({
          type: 'DELETE_MESSAGE',
          id: id,
        });
      };
    
      render() {
        const messages = this.props.messages.map((message, index) => (
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
        return (
          <div className='ui center aligned basic segment'>
            <div className='ui comments'>
              {messages}
            </div>
          </div>
        );
      }
}

export default MessageView;