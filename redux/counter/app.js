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

function createStore(reducer) {
    let state = 0;
    const getState = () => (state);

    const dispatch = (action) => {
        state = reducer(state, action);
    };

    return {
        getState,
        dispatch,
    };
}

// *** Reducer Test Area
// const incrementAction = { type: 'INCREMENT', amount: 5};
// const decrementAction = { type: 'DECREMENT', amount: 11};

// var state = 0;
// for (let i=0; i < 4; i++) {
//     state = reducer(state, incrementAction);
//     console.log(state);
// }

// state = 5;
// for (let i=4; i > 0; i--) {
//     state = reducer(state, "nothing");
//     console.log(state);
// }

// state = 44;
// for (let i=4; i > 0; i--) {
//     state = reducer(state, decrementAction);
//     console.log(state);
// }

// *** Store Test Area
const store = createStore(reducer);
const incrementAction = {
    type: 'INCREMENT',
    amount: 3,
};
const decrementAction = {
    type: 'DECREMENT',
    amount: 2,
};

store.dispatch(incrementAction);
console.log(store.getState());
store.dispatch(incrementAction);
console.log(store.getState());

store.dispatch(decrementAction);
console.log(store.getState());
