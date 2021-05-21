import uuid from 'uuid';
import database from '../firebase/firebase';



//  Action ---ADD_EXPENSE  object removed for firebase startaddexpense{description = '', note = 'test', amount = 0, createdAt = 0}
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
    // removed for firebase startaddexpense
    // expense: {
    //     id: uuid(),
    //     description,
    //     note,
    //     amount,
    //     createdAt
    // }
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const { description = '', note = 'test', amount = 0, createdAt = 0 } = expenseData;
        const expense = { description, note, amount, createdAt};
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        });
    };
};

// Action --REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//  Action ----EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

