import { createStore } from 'redux';

// Action generators - functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',
});

//  Reducers
//  1. reducers are pure functions
//  2. never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {

        case 'INCREMENT':  
            return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }

        case 'RESET':
            return {
                count: 0
            }

        case 'SET':
            return {
                count: action.count
            }

        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsub = store.subscribe(() => {
    console.log('sub', store.getState())
});

// console.log(store.getState())

// //////////// Actions are objects sent to the store

// //////////////////////////////////action---increment the count by 1
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(incrementCount())

// store.dispatch({
//     type: 'INCREMENT'
// });
// console.log(store.getState())

// ///////////////////////////////////////////////////////action---decrement the count by 1
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(decrementCount());

// store.dispatch({
//     type: 'DECREMENT'
// });
// console.log(store.getState())

// ///////////////////////////////////////////////////action---reset the count to default
store.dispatch(resetCount())

// store.dispatch({
//     type: 'RESET'
// })

// ////////////////////////////////////////////////action--- set count to a certain number

store.dispatch(setCount({ count: 462 }));

// store.dispatch({
//     type: 'SET',
//     count: 462
// });

// console.log(store.getState())