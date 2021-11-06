import React, { useReducer,  useState } from "react"
import ErrorModal from '../Modal/ErrorModal'
import Card from '../Card/Card'
import classes from './AddToDo.module.css'

export default function AddToDo(props){

    const [isEmpty, setError] = useState(false)

    const [inputV, dispatch] = useReducer(reducer, '');

    function reducer(inputV = "", action) {
        switch(action.type){
            case 'AddToDo':
                inputV = action.ToDo
                return inputV;
            case 'Submit':
                inputV = action.clear
                return inputV;
            default: 
                return inputV;
        }
    }
        function submitHandler(e) {
            e.preventDefault()
            if(inputV.trim() === ''){
                setError(true)
                return;
            }
            let ToDo = {
                text: inputV,
                time: new Date().toString().split(' ').splice(1,3).join(' '),
                done: false,
                id: Math.random().toString(),
            }
            props.onAddTodo(ToDo)
            dispatch({type: 'Submit', clear: ''})
        }
      
        return (
        <>
            {isEmpty && <ErrorModal onCancel={() => setError(false)}/> }
        <Card className={classes.Wrapper}>
          <form onSubmit={submitHandler} className={classes.AddToDo}>
                <h1>Add New ToDo</h1>
                <input
                    value={inputV}
                    onChange={e => dispatch({type: 'AddToDo', ToDo: e.target.value }) }
                />
            <button type='submit' >Add ToDo</button>
          </form>
            </Card>
        </>
        );
}