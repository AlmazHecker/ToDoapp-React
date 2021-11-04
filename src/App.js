import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [userList, setUserList] = useState([
    {name: 'Almaz', age: 16, id: 1},
    {name: 'Чупапи', age: 20, id: 2},
  ]);
  
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
        const updatedUsers = prevUsers.filter(user => user.id !== userId);
        return updatedUsers;
      })
    }

    // TODO: функция для изменения ника если появилась ошибкай
    function onChangeUser(userId, name, age){
      setUserList( (prevUsers) => {
        const changedUser = {
          name: name,
          age: age,
          id: userId,
        }
        // TODO: для того чтобы user не раздвоился
        const updatedUsers = prevUsers.filter(user => user.id !== userId)
        
        // TODO: так user раздвоится
        updatedUsers.unshift(changedUser)

        return updatedUsers;
      })
    }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} onDelete={onDeleteUser} onChangeUser={onChangeUser}/>
    </>
  );
}

export default App;
