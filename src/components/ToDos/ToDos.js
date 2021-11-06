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
            {props.DATA.map((ToDo, index) => (
                <li key={ToDo.id} id={ToDo.id}>
                    <p className={`${classes.ToDO} ${ToDo.done ? classes.lineThrough: ''}`}> 
                        ToDo№{++index}: {ToDo.text}
                    </p>
                    <p>
                        {ToDo.done ? 'Done' : 'Not done'}
                        <input type='checkbox' onClick={() => CheckHandler(ToDo.id)}/>                    
                    </p>
                    <p>{ToDo.time}</p>
                    <button onClick={() => onDelete(ToDo.id)}>Delete</button>
                </li>
                ))}
            </ul>
        </Card>
    )
}