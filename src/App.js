import React, { useState, useEffect } from 'react';
import AddToDo from './components/AddToDo/AddToDo';
import ToDos from './components/ToDos/ToDos'


function App() {

  const [DATA, setDATA] = useState([])

  
  useEffect(() => {
    const storedDATA = JSON.parse(localStorage.getItem('ToDos')) || []
    storedDATA.filter(item => item.id !== item.id)
      DATA.push(...storedDATA)
    }, [])
    
    function AddNewTodo(todo){
      setDATA( prevToDos => {
        const updatedToDos = [...prevToDos]
      updatedToDos.unshift(todo)
      localStorage.setItem("ToDos", JSON.stringify(updatedToDos));
      return updatedToDos;
    })
  }

  function onDone (id){
    const updatedDATA = DATA.map(ToDo => {
      if(ToDo.id === id){
        ToDo.done = !ToDo.done
      }
      return ToDo;
    })
    localStorage.setItem('ToDos', JSON.stringify(updatedDATA))
    
    setDATA(updatedDATA)
    
  }
  let data = JSON.parse(localStorage.getItem('ToDos')) || []

  return (
    <>
    <AddToDo onAddTodo={AddNewTodo}/>
    <ToDos DATA={DATA ? data: DATA} onCheck={onDone} />
    </>
  );
}

export default App;
