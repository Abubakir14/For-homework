import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './UsersList.module.css'
import { useState } from "react/cjs/react.development";
import DeleteOverlay from "./DeleteOverlay";


const UsersList = props => {

    const ShowDelete = () => {
        const [showhide, setShowHide] = useState(false)
                
        
    const DeleteHandler = () => {
        setShowHide(null)
    }
        return (
            <Card className={classes.users}>
            <ul>
                {props.users.map((user, index) =>
                    <li key={index}>
                        {user.name} ({user.age} years old)
                        {showhide && <DeleteOverlay/>}
                        <Button className={classes.button} onClick={() => setShowHide(true)} >Delete</Button>
                    </li>
                    )
                }
            </ul>
        </Card>
    )
}
    return <div className='new-expense'> 
        <ShowDelete/>
        </div>
}

export default UsersList