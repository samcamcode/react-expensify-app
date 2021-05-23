import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, '@@INIT');
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expense by if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});


test('should add expense to the current state', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'bill',
            note: '',
            amount: 5500,
            createdAt: 0
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
    // expect(state).toEqual(expenses.concat(action.expense));
});

test('MY WAY----should find an expense by id and edit it', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note: 'chewing gum from store',
            amount: 200
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual({        
        id: 1,
        description: 'gum',
        note:'chewing gum from store',
        amount: 200,
        createdAt: 0})
});

test('should not edit expense because id could not be found', () =>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            note: 'something',
            amount: 10000000000
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]])
})