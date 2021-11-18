import React from "react";
import classes from '../UI/ErorrModal.module.css'
import Card from "../UI/Card";
import Button from "../UI/Button";
    

const DeleteOverlay = props => {
    return(
        <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>you definitely want to delete?</h2>
                </header>
                <div className={classes.conent}>
                </div>
                <footer className={classes.actions}> 
                    <Button onClick={props.onDelete}>Confirm</Button>
                    <Button onClick={props.onConfirm}>Cancel</Button>
                </footer>
            </Card>
        )
}

export default DeleteOverlay