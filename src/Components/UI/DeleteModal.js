import React from "react";
import ReactDOM from "react-dom";
import DeleteOverlay from "../Users/DeleteOverlay";





const DeleteModal = props => {
    return (
        <React.Fragment>
            {
                ReactDOM.createPortal(
                    <DeleteOverlay title={props.title} message={props.message} onConfirm={props.onConfirm}/>,
                    document.getElementById('dan-root"')
                )
            }
        </React.Fragment>
    )
}

export default DeleteModal