import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  function addUserHandler(uName, uAge) { /*This function executes from AddUser componants */
    setUsersList(function (prevUsersList){
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} /> { /*For collect value pass function*/}
      <UsersList users={usersList} /> {/*For Pass Value use props*/}
    </div>
  );
}
/*
My conclusion:
1. If you want collect values from parent to child componants pass functions .
2. If you want to pss vales from parent to child use props.  
*/
export default App;
