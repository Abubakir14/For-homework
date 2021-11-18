import React from "react";
import Button from "../UI/Button";

const DeleteGoalItem = props => {
  
    const deleteItemHandler = () => {
      props.onDelete(props.id);
    };
  
    return (
      <Button className="goal-item" onClick={deleteItemHandler}>
        {props.children}
      </Button>
    );
  };

  export default DeleteGoalItem