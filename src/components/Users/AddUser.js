import React, { useState, useRef} from "react";
import Card from "../UI/Card/Card";
import Button from '../UI/Button/Button';
import classes from './AddUser.module.css';
import ErrorModal from "../ErrorModal/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = props => {
    const [error, setError] = useState();

    const AddUserForm = useRef(null)
    
    
    
    const addUserHandler = (event) => {
        event.preventDefault();
        const Form = AddUserForm.current
        if (Form['username'].value.trim().length === 0 || Form['age'].value.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }

        if (+Form['age'].value < 1) {
            setError({
                title: "Invalid age",
                message: 'Please enter a valid age (> 0)'
            });
            return;
        }
        props.onAddUser(Form['username'].value, Form['age'].value);
        Form['username'].value = '' 
        Form['age'].value = ''
    }

    // TODO: работает при клике на'Okay' в модальном окне ошибки 
    const errorHandler = () => {
        setError(null)
    }

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler} ref={AddUserForm}>
                    <label htmlFor="username">Username</label>
                    <input id='username' type='text'/>

                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type='number' />
                    <Button type="submit">Add user</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;
