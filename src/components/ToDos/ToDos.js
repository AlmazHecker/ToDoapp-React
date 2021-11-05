import classes from './ToDos.module.css'
import Card from '../Card/Card';
export default function ToDos(props){
    
    
    function CheckHandler(id){
            props.onCheck(id)
            console.log('hello');
    }

    return(
        <Card>
            <ul >
            {
                props.DATA.map((ToDo, index) => (
                <li key={ToDo.id} id={ToDo.id} className={classes.ToDoList}>
                    <p className={ToDo.done ? classes.lineThrough : ''}>ToDo№{++index}: {ToDo.text}</p>
                    <input type='checkbox' id={ToDo.id} onClick={(e) => CheckHandler(ToDo.id)}/>                    
                    <p>Date: {ToDo.time}</p>
                </li>
            ))
            }
            </ul>
        </Card>
    )
}