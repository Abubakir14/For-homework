import React, {useState} from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from './Components/Users/UsersList'

function App() {
  const [userList, setUserList] = useState([])

  const addUserHandler = (uName, uAge) => {

    setUserList((prevUserList) => {
      return [ 
        ...prevUserList,
        {name: uName, age: uAge, id: Math.random().toString()}
      ]
    })
  }

  const deleteItemHandler = goalId => { 
    setUserList(prevGoals => {
      const updatedGoals = prevGoals.filter(user => user.id !== goalId);
      return updatedGoals;
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList}   onDeleteItem={deleteItemHandler}/>
    </>
  );
}

export default App;
