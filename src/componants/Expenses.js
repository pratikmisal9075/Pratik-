import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props)
{

    return(
    <div className="expenses">
        <ExpenseItem title={props.item[0].title} ammount={props.item[0].ammount } date={props.item[0].date} ></ExpenseItem>
        <ExpenseItem title={props.item[1].title} ammount={props.item[1].ammount } date={props.item[1].date} ></ExpenseItem>
        <ExpenseItem title={props.item[2].title} ammount={props.item[2].ammount } date={props.item[2].date} ></ExpenseItem>
        <ExpenseItem title={props.item[3].title} ammount={props.item[3].ammount } date={props.item[3].date} ></ExpenseItem>
    </div>
    );
}

export default Expenses;