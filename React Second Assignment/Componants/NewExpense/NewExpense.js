import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props)
{
    function saveExpenseDataHandler(enteredExpenseData)
    {
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString() /*object data get from ExpenseForm function */
        };
        props.onAddExpense(expenseData);  /*Resned object data to App.js file*/
    }

    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm> {/*Call to Expense Form Function*/}
        </div>
    );
}

export default NewExpense;