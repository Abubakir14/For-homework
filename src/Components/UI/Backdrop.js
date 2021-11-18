import React from "react";
import classes from './ErorrModal.module.css'


const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onConfirm}/>
}

export default Backdrop