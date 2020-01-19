import React from "react";
import styled from "styled-components";

import Checkbox from "../checkbox/Checkbox";

const StyledTaskItem = styled.div`
  display: flex;
  min-height: 7rem;
  height: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;
`;

const StyledTaskContent = styled.div`
  max-width: 52.5rem;
  width: 100%;
  padding: 2px 0 0 14px;
  line-height: 1.8rem;

  .date {
    color: red;
    margin-top: 3px;
  }
`;

const TaskItem = ({ task }) => {
  const { name, _id, deadline, archived } = task;
  const handleCheck = () => {
    console.log(task);
  };

  return (
    <StyledTaskItem>
      <div>
        <Checkbox handleCheck={handleCheck} />
      </div>
      <StyledTaskContent>
        <p>{name}</p>
        <p className="date">{deadline}</p>
      </StyledTaskContent>
    </StyledTaskItem>
  );
};

export default TaskItem;
