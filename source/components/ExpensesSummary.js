import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expsenses';
    const expensesFormattedTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div>
            <h3>viewing {expensesCount} {expenseWord} totaling {expensesFormattedTotal}</h3>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: totalExpenses(visibleExpenses),
    }
}

export default connect(mapStateToProps)(ExpensesSummary)