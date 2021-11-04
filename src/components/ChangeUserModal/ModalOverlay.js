import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from '../UI/ModalOverlay/ModalOverlay.module.css'

const ModalOverlay = props => {

    const [newName, setNewName] = useState('')
    const [newAge, setNewAge] = useState('')
    const onSetName = (e) => {setNewName(e.target.value)}
    const onSetAge = (e) => {setNewAge(e.target.value)}
    
    function onChangeUser(e){
        if(newAge === '' || newName === '' || ''){
            alert('Какое-то поле осталось пустым')
            return;
        }
        props.onChangeUser(props.id, newName, newAge) 
        props.onCancel()
    }


    return <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>Change User</h2>
        </header>
        <div className={classes.content}>
            <h3>Write name and age</h3>
            <br/>
        <div className={classes.inputBlock}>
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' onChange={onSetName} value={newName}/>
            <label htmlFor='age'>Age</label>
            <input id='age' type='number' onChange={onSetAge} value={newAge} />
        </div>
        </div>
        <footer className={classes.actions}>
            <Button onClick={onChangeUser}>Change user</Button>
            <Button onClick={props.onCancel}>Cancel</Button>
        </footer>
    </Card>
}

export default ModalOverlay;
