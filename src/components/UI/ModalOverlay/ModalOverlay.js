import classes from './ModalOverlay.module.css'
import Card from "../Card/Card";
import Button from "../Button/Button";


const ModalOverlay = props => {
    return <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            {/* если  */}
            {props.onDelete ? <Button onClick={props.onDelete}>Delete</Button> : ''}
            <Button onClick={props.onCancel ? props.onCancel :props.onConfirm}>
                {props.onCancel ? 'Cancel': 'Okay' }
            </Button>
        </footer>
    </Card>
}

export default ModalOverlay;