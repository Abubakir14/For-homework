import React, {useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErorrModal";
import classes from './AddUser.module.css'

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setAnteredAge] = useState('')
    const [error, setError] = useState('') 

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }
    
    const ageChangeHandler = (event) => {
        setAnteredAge(event.target.value)
    }

    const AddUserHandler = (event) => {
        event.preventDefault()
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values)',
            })
            return;
        }

        if(+enteredAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (>0)',
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge)
        setAnteredAge('');
        setEnteredUsername('');
    }

    const errorHandler = () => {
        setError(null)
    }

    
    return (
    <>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={AddUserHandler}>
                <label htmlFor="username">Username</label>
                <input
                id="username"
                type="text"
                onChange={usernameChangeHandler}
                value={enteredUsername}
                />    
                <label htmlFor="username">Age (years)</label>
                <input
                id="age"
                type="number"
                onChange={ageChangeHandler}
                value={enteredAge}
                />   
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    </>
        )
}

export default AddUser