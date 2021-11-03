import React, {useState} from 'react'
import DeleteModal from '../DeleteModal/DeleteModal'
import Button from '../UI/Button/Button'

function RenderUsers(props){

    const [active, setActive] = useState(false)

    function onDelete(){
        props.onDelete(props.id)
    }
    return(
        <>
              { active ? <DeleteModal onDelete={onDelete} onCancel={() => setActive(false)} /> : '' }
            <li style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', padding:'1rem'}}>
             {props.children}
              <Button onClick={() => setActive(true)} >delete User</Button>
            </li>
        </>
    )
}

export default RenderUsers;