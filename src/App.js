import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [userList, setUserList] = useState([]);
  
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { 
          name: uName, 
          age: uAge, 
          id: Math.random().toString() 
        },
      ] }) };

    function onDeleteUser(userId){
      setUserList( (prevUsers) => {
        const updatedUsers = prevUsers.filter())
      })
    }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </>
  );
}

export default App;
