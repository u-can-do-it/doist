import React from "react";

import Checkbox from "../checkbox/Checkbox";

const TaskItem = ({ task }) => {
  const { name, _id, deadline, archived } = task;
  const handleTaskCheck = () => {
    console.log(name);
  };

  return (
    <div>
      <Checkbox handleCheck={handleTaskCheck} />
      <p>{name}</p>
      <p>{deadline}</p>
    </div>
  );
};

export default TaskItem;
