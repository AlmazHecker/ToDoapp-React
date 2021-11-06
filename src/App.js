import React, { useState, useEffect } from 'react';
import AddToDo from './components/AddToDo/AddToDo';
import ToDos from './components/ToDos/ToDos'


function App() {

  const [DATA, setDATA] = useState([])

  
  useEffect(() => {
    const storedDATA = JSON.parse(localStorage.getItem('ToDos')) || []
    DATA.push(...storedDATA)
  }, [])

    function saveDATA(todo) {
      localStorage.setItem('ToDos', JSON.stringify(todo))
    }
    
    function AddNewTodo(todo){
      setDATA( prevToDos => {
        const updatedToDos = [...prevToDos]
      updatedToDos.push(todo)
      saveDATA(updatedToDos)
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
    saveDATA(updatedDATA)
    setDATA(updatedDATA)
  }

  function onDelete(ToDoId){
    const updatedDATA = DATA.filter(ToDo => ToDo.id !== ToDoId)
    saveDATA(updatedDATA)
    setDATA(updatedDATA)
  }

let data = JSON.parse(localStorage.getItem('ToDos')) || []


  return (
    <>
    <AddToDo onAddTodo={AddNewTodo}/>
    <ToDos DATA={data} onCheck={onDone} onDeleteToDo={onDelete} />
    </>
  );
}

export default App;
