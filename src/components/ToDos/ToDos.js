import './ToDos.css'

export default function ToDos(props){
    
    
    function CheckHandler(id){
            props.onCheck(id)
            console.log('hello');
    }

    return(
        <ul>
            {
                props.DATA.map(ToDo => (
                <li key={ToDo.id} id={ToDo.id}>
                    <p className={ToDo.done ? 'line-through' : ''}>{ToDo.text}</p>
                    <p>{ToDo.time}</p>
                    <input type='checkbox' id={ToDo.id} onClick={(e) => CheckHandler(ToDo.id)}/>                    
                </li>
            ))
            }
        </ul>
    )
}