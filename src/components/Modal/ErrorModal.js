import React from "react"
import ReactDOM from 'react-dom';
import Modal from "./Modal"

import './ErrorModal..module.css'

export default function Backdrop (){
    <div className='backdrop'>

    </div>

    
}



function ErrorModal() {
    return(
        <React.Fragment>

            {ReactDOM.createPortal(
                <Backdop/>,
                document.getElementById('backdrop')
            )}
            {ReactDOM.createPortal(
                <Modal />,
                document.getElementById('for-modals')
            )}

        </React.Fragment>
    )
}

export default ErrorModal
