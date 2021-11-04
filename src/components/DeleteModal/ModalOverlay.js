import classes from './ModalOverlay.module.css'
import Card from '../UI/Card/Card'
import Button from '../UI/Button/Button'

function DeleteModal(props) {
    return(
    <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>Delete</h2>
        </header>
        <div className={classes.content}>
            <p>Do you want to Delete this User ?</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onDelete}>Delete</Button>
            <Button onClick={props.onCancel}>Cancel</Button>
        </footer>
    </Card>
    )
}

export default DeleteModal;
