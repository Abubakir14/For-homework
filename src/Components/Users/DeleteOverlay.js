import React from "react";
import Backdrop from '../UI/Backdrop'
import ReactDOM from "react-dom";
import DelOverlay from "./DelOverlay";

const DeleteOverlay = props => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm}/>,
                document.getElementById('modal-root')    
            )}
            {
                ReactDOM.createPortal(
                    <DelOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} onDelete={props.onDelete}/>,
                    document.getElementById('dan-root')
                )
            }
        </React.Fragment>
        )
}

export default DeleteOverlay