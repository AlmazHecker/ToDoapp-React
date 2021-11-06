import React from "react"
import ReactDOM from 'react-dom';
import classes from './ErrorModal.module.css'

export default function ErrorModal(props) {

    const Backdrop = () => <div className={classes.backdrop} onClick={props.onCancel}></div>

    const Modal = () => (
        <div className={classes.modal}>
            <div className={classes.content}>
                <h1>input is empty. <br/>Type smth</h1>
                <button onClick={props.onCancel}>Okay</button>
            </div>
        </div>
   )
                
    return(
        <>
            {ReactDOM.createPortal(
                <Backdrop/>,
                document.getElementById('backdrop')
                )}
            {ReactDOM.createPortal(
                <Modal />,
                document.getElementById('for-modals')
            )}
        </>
    )
}