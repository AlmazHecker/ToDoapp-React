import React from "react"
import ReactDOM from 'react-dom';
import Card from "../Card/Card";
import classes from './ErrorModal.module.css'

function ErrorModal(props) {

    function Backdrop(){
        return(
            <div className={classes.backdrop}></div>
        )
    } 


    function Modal(){
        return(
            <Card className={classes.modal}>
                <div className={classes.content}>
                    <h1>input is empty. <br/>Type smth</h1>
                    <button onClick={props.onCancel}>Okay</button>
                </div>
            </Card>
        )
    } 
    return(
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop/>,
                document.getElementById('backdrop')
                )}
            {ReactDOM.createPortal(
                <Modal />,
                document.getElementById('for-modals')
            )}
        </React.Fragment>
    )
}

export default ErrorModal;
