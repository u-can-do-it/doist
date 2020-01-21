import React, { useState } from "react";
import styled from "styled-components";

import Checkbox from "../checkbox/Checkbox";
import TaskItemMenu from "./TaskItemMenu";
import TaskItemEditor from "./TaskItemEditor";

const StyledTaskItem = styled.div`
  display: flex;
  min-height: 7rem;
  height: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;

  .menu {
    opacity: 0;
    transition: all 0.2s;
  }

  &:hover .menu {
    opacity: 1;
  }
`;

const StyledTaskContent = styled.div`
  max-width: 50.5rem;
  width: 100%;
  padding: 2px 0 0 14px;
  line-height: 1.8rem;

  .date {
    color: red;
    margin-top: 3px;
  }

  .name {
    cursor: pointer;
  }
`;

const TaskItem = ({ task }) => {
  const { name, _id, deadline, archived } = task;
  const [isEditMode, setIsEditMode] = useState(false);

  const handleCheck = () => {
    console.log(task);
  };

  const handleEditOn = () => setIsEditMode(true);
  const handleEditOff = () => setIsEditMode(false);

  const taskItem = (
    <>
      <div>
        <Checkbox handleCheck={handleCheck} />
      </div>
      <StyledTaskContent>
        <p className="name" onClick={handleEditOn}>
          {name}
        </p>
        <p className="date">{deadline}</p>
      </StyledTaskContent>

      <div className="menu">
        <TaskItemMenu />
      </div>
    </>
  );

  const editor = <TaskItemEditor hide={handleEditOff} />;

  return <StyledTaskItem>{isEditMode ? editor : taskItem}</StyledTaskItem>;
};

export default TaskItem;
