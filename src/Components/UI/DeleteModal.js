import React from "react";
import ReactDOM from "react-dom";
import DeleteOverlay from "../Users/DeleteOverlay";
import { Fragment } from "react/cjs/react.development";


const DeleteModal = props => {
    return (
        <>
            {
                ReactDOM.createPortal(
                    <DeleteOverlay title={props.title} message={props.message} onDelete={props.onClick} onConfirm={props.onConfirm}/>,
                    document.getElementById('dan-root')
                )
            }
        </>
    )
}

export default DeleteModal