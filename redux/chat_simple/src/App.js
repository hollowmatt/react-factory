import React from 'react';
import MessageView from './MessageView';
import MessageInput from './MessageInput';

function reducer(state, action) {
  switch(action.type) {
    case 'ADD_MESSAGE':
        return {messages: state.messages.concat(action.message),};
    case 'DELETE_MESSAGE':
        return {
          messages:[...state.messages.slice(0, action.index), ...state.messages.slice(action.index + 1, state.messages.length),],
        };
    default:
        return state;
  }
}

function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = [];

  const getState = () => (state);

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(l => l()); //call the listener callback function
  };

  const subscribe = (listener) => (
    listeners.push(listener)
  );

  return {
    subscribe,
    getState,
    dispatch,
  };
}

const initialState = { messages: [] };
const store = createStore(reducer, initialState);

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());  
  } 

  render() {
    const messages = store.getState().messages;

    return(
      <div>
        <p>... work in progress</p>
        <MessageView messages={messages} store={store} />
        <MessageInput store={store} />
      </div>
    );
  }
}

export default App;