import React from "react";
import Button from "../UI/Button";

const DeleteGoalItem = props => {
  
    const deleteHandler = () => {
      props.onDelete(props.id);
    };
  
    return (
      <Button className="goal-item" onClick={deleteHandler}>
        {props.children}
      </Button>
    );
  };

  export default DeleteGoalItem