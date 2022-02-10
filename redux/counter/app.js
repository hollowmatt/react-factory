function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + action.amount;
            break;
        case 'DECREMENT':
            return state - action.amount;
            break;
        default:
            return state;
            break;
    }
}

const incrementAction = { type: 'INCREMENT', amount: 5};
const decrementAction = { type: 'DECREMENT', amount: 11};

var state = 0;
for (let i=0; i < 4; i++) {
    state = reducer(state, incrementAction);
    console.log(state);
}

state = 5;
for (let i=4; i > 0; i--) {
    state = reducer(state, "nothing");
    console.log(state);
}

state = 44;
for (let i=4; i > 0; i--) {
    state = reducer(state, decrementAction);
    console.log(state);
}


