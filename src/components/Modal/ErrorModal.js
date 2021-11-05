import React from "react"
import ReactDOM from 'react-dom';
import Modal from "./Modal"

function ErrorModal() {
    return(
        <>
            {
                ReactDOM.createPortal(
                    <Modal />,
                    document.getElementById('for-modals')
                )
            }
        </>
    )
}