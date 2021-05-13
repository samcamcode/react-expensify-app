import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ?
            (
                <p>No expenses</p>
            ) 
            :
            (
                props.expenses.map((expense) => {
                    return <ExpenseListItem 
                    id={expense.id} 
                    description={expense.description} 
                    amount={expense.amount} 
                    createdAt={expense.createdAt}
                    note={expense.note} />})
            )
        }
    </div>
);

const mapStateToProps = (state) =>{
    return {
        expenses: selectExpenses(state.expenses, state.filters )
    }
};

export default connect(mapStateToProps)(ExpenseList);






// HOC using a const ConnectedExpenseList not export default
// const ConnectedExpenseList = connect((state) =>{
//     return {
//         expenses: state.expenses
//     }
// })(ExpenseList);

// export default ConnectedExpenseList;