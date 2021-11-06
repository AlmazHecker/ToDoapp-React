import classes from './ToDos.module.css'
import Card from '../Card/Card';



export default function ToDos(props){
    function CheckHandler(id){
            props.onCheck(id)
    }
    
    function onDelete(id){
        props.onDeleteToDo(id)
    }


    return(
        <Card className={classes.container}>
            <ul className={classes.wrapper} >
            {
                props.DATA.map((ToDo, index) => (
                <li key={ToDo.id} id={ToDo.id} className={classes.ToDoList}>
                    <p className={ToDo.done ? classes.lineThrough: ''}> ToDo№{++index}:  {ToDo.text} 
                    <input type='checkbox' id={ToDo.id} onClick={() => CheckHandler(ToDo.id)}/>                    
                    </p>
                    {ToDo.done ? 'Done' : 'Not done'} 
                    <p>Date: {ToDo.time}</p>
                    <button onClick={() => onDelete(ToDo.id)}>Delete</button>
                </li>
            ))
            }
            </ul>
        </Card>
    )
}