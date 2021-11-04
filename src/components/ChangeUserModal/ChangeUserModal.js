import React from "react";
import ReactDOM from "react-dom";

import Backdrop from "../UI/Backdrop/Backdrop";
import ModalOverlay from "./ModalOverlay";

function ChangeUserModal(props){
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onCancel} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay onCancel={props.onCancel} id={props.id} onChangeUser={props.onChangeUser}/>,
                document.getElementById('modal-root')
            )}
        </React.Fragment>
    )
}

export default ChangeUserModal;