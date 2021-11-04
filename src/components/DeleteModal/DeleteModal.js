import React from "react";
import ReactDOM from "react-dom";

import ModalOverlay from "./ModalOverlay";
import Backdrop from '../UI/Backdrop/Backdrop'

const ErrorModal = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onCancel} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay onDelete={props.onDelete} onCancel={props.onCancel}/>,
                document.getElementById('modal-root')
            )}
        </React.Fragment>
    )
};

export default ErrorModal;