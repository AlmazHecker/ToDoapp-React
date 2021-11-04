import React, {useState, useRef} from 'react'
import DeleteModal from '../DeleteModal/DeleteModal'
import ChangeUserModal from '../ChangeUserModal/ChangeUserModal'
import Button from '../UI/Button/Button'

function RenderUsers(props){

    const UserLi = useRef(null)

    const [DeleteUserModal, enableDeleteModal] = useState(false)
    // for delete
    function onCancel(){
        enableDeleteModal(false)
    }
    // for delete
    function onDelete(){
        props.onDelete(props.id)
    }
    
    const [ChangeUser, enableChangeUser] = useState(false)
    // for changeUser
    function onChangeUser(){
        enableChangeUser(false)
    }

 


    return(
        <>
            { ChangeUser ? <ChangeUserModal id={props.id} onChangeUser={props.onChangeUser} onCancel={onChangeUser}/> : ''}
            { DeleteUserModal ? <DeleteModal onDelete={onDelete} onCancel={onCancel} /> : '' }
            <li ref={UserLi}>
             {props.children}
              <Button onClick={() => enableDeleteModal(true)}>delete User</Button>


              <Button onClick={() => enableChangeUser(true)}>Change Name</Button>
            </li>
        </>
    )
}

export default RenderUsers;
