import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

function AddUser(props) {
  const [enteredUsername, setEnteredUsername/*this is function*/] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState(); /*erroe is objcet not a variable*/

  function addUserHandler(event) {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age', /*Sets error object values*/
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge); /*value Pass to App.js function*/
    setEnteredUsername('');
    setEnteredAge('');
  };

  function usernameChangeHandler(event){
    setEnteredUsername(event.target.value);
  };

  function ageChangeHandler(event){
    setEnteredAge(event.target.value);
  };

  function errorHandler () {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        /> /*if values of error object sets then only ErrorModel componant executes*/
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
