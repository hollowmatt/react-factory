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

  const getState = () => (state);

  const dispatch = (action) => {
    state = reducer(state, action);
  };

  return {
    getState,
    dispatch,
  };
}

const initialState = { messages: []};
const store = createStore(reducer, initialState);
const addMessageAction = {
  type: 'ADD_MESSAGE',
  message: 'Hey there, hello chat',
};
const deleteMessageAction = {
  type: 'DELETE_MESSAGE',
  index: 1,
};

store.dispatch(addMessageAction);
const state1 = store.getState();

const addMessageAction2 = {
  type: 'ADD_MESSAGE',
  message: 'Hey back',
};

store.dispatch(addMessageAction2);
const state2 = store.getState();

console.log('State v1: ');
console.log(state1);
console.log('State v2: ');
console.log(state2);

store.dispatch(deleteMessageAction);
console.log(store.getState());