import React from "react"
import ReactDOM from 'react-dom';
import Modal from "./Modal"
import classes from './ErrorModal.module.css'

function ErrorModal() {

    function Backdrop(){
        return(
            <div className={classes.backdrop}></div>
        )
    } 


    function Modal(props){
        return(
            <>
                <h1>input is empty</h1>
                <button onClick={props.onCancel}>Okay</button>
            </>
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
