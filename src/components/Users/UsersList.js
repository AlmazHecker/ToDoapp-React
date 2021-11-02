import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = props => {

    function OndeleteItem() {
        props.Ondelete()
    }

    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(user =>
                    <li key={user.id} id={user.id}>
                        {user.name} 
                        {user.age}
                        <button>Delete</button>
                    </li>)}
            </ul>
        </Card>
    )
}

export default UsersList;