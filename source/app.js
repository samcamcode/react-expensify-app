import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense, removeExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import setVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

// store.dispatch(addExpense({description: 'water bill', amount: 100}))
// store.dispatch(addExpense({description: 'gas bill', amount: 200, createdAt: 200}))
// store.dispatch(addExpense({description: 'rent', amount: 1095}))
// // store.dispatch(setTextFilter('water'))

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000)

// const state = store.getState();
// console.log(setVisibleExpenses(state.expenses, state.filters))

// console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));


