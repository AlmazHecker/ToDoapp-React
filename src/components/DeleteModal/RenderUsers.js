import React, {useState} from 'react'
import DeleteModal from './DeleteModal'

function RenderUsers(props){

    const [active, setActive] = useState(false)

    function onDelete(){
        props.onDelete(props.id)
    }
    return(
        <>
            <li>
             {props.children}
              <button onClick={() => setActive(true)} >delete User</button>
            </li>
              { active ? <DeleteModal onDelete={onDelete} onCancel={() => setActive(false)} /> : '' }
        </>
    )
}

export default RenderUsers;