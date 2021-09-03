import React,{useState} from "react";
import './ExpenseForm.css';

function ExpenseForm(props)
{
    const [enteredTitle,setEnteredTitle]=useState(' ');   /*Initial value of of enteredTitle is set to emty*/
    const [enteredAmmount,setEnteredAmmount]=useState(' ');
    const [enteredDate,setEnteredDate]=useState(' ');
    
    function titleChangeHandler(event)
    {
        setEnteredTitle(event.target.value); /*this get value from enterd text feild and assign to enteredTitle Variable*/
    }

    function ammountChangeHandler(event)
    {
        setEnteredAmmount(event.target.value);
    }

    function dateChangeHandler(event)
    {
        setEnteredDate (event.target.value);
    }


    function submitHandler(event)
    {
        event.preventDefault();

        const expenseData={
                titile:enteredTitle,
                ammount:enteredAmmount,
                date:new Date(enteredDate)   /*creating object of all data entred from "form" */
        };

        props.onSaveExpenseData(expenseData); /*data collected and Pass data object to NewExpense function */

        setEnteredAmmount('');
        setEnteredTitle('');   /*due to this all text feild resets to emty*/
        setEnteredDate('');
    }

    return (<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Ammount</label>
                <input type="text" min="0.01" step="0.01" value={enteredAmmount} onChange={ammountChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="Date" min="2019-01-01" step="2022-01-01" value={enteredDate} onChange={dateChangeHandler}/>
            </div>

        </div>
         
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>

        </div>
    </form>
    );
}
export default ExpenseForm;