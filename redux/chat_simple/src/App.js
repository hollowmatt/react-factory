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

// * Testing out theories... electric chairs and dynamos
const initialState = { messages: []};
const store = createStore(reducer, initialState);
const listener = () => {
  console.log('Current state: ');
  console.log(store.getState());
};

store.subscribe(listener);

const addMessageAction1 = {
  type: 'ADD_MESSAGE',
  message: 'How do you read?',
};

store.dispatch(addMessageAction1);

const addMessageAction2 = {
  type: 'ADD_MESSAGE',
  message: 'Read you loud and clear',
};

store.dispatch(addMessageAction2);

const deleteMessageAction = {
  type: 'DELETE_MESSAGE',
  index: 1,
};

store.dispatch(deleteMessageAction);