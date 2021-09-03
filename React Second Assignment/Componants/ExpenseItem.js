import React, {useState} from 'react';

import ExpensesDate from './ExpenseDate';
import Card from './Card'
import './ExpenseItem.css'

function ExpenseItem(props) /*Call this function for each time for number of array elements*/
{
    const [title,setTitle]=useState(props.title) /*setTitle is function call for updating value ,title store current value */
    
    function clickHandler()
    {
        setTitle('Updated'); /*This function update the value of title variable*/
        console.log(title);    
    }
    return (
        <Card className='expense-item'>
            <ExpensesDate date={props.date}></ExpensesDate> {/*this function is only for formating date */}
            <div className='expense-item__description'>
                <h2>{title}</h2>
            <div className='expense-item__price'>${props.ammount}</div> {/*tow js files are used ExpenseDate and Card.js */}
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );   
}

export default ExpenseItem;