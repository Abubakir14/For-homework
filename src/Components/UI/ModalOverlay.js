import React from "react";
import classes from './ErorrModal.module.css'
import Card from "./Card";
import Button from "./Button";
    
const ModalOverlay = props => {
    
    return(
        <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.conent}>
                </div>
                <footer className={classes.actions}> 
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        )
}

export default ModalOverlay