import ExpenseItem from "./ExpenseItem";
import Card from '../componants/Card';
import ExpensesFilter from "./ExpensesFilter";
import React,{useState} from "react";
import "./Expenses.css";

function Expenses(props)
{
    const [filteredYear,setFilteredYear]=useState("2020");

    function filterChangeHandler(selectedYear)
    {
        setFilteredYear(selectedYear);
    }

    return(
      <div>
      <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>

                <ExpenseItem title={props.item[0].title} ammount={props.item[0].ammount } date={props.item[0].date} ></ExpenseItem>
                <ExpenseItem title={props.item[1].title} ammount={props.item[1].ammount } date={props.item[1].date} ></ExpenseItem>
                <ExpenseItem title={props.item[2].title} ammount={props.item[2].ammount } date={props.item[2].date} ></ExpenseItem>
                <ExpenseItem title={props.item[3].title} ammount={props.item[3].ammount } date={props.item[3].date} ></ExpenseItem>
    </Card>  
    </div>
    ); /*ExpenseItem Function call multiple times passes arguments to function from expense array by using props */
}

export default Expenses;