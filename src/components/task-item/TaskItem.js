import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Checkbox from "../checkbox/Checkbox";
import TaskItemMenu from "./TaskItemMenu";
import TaskItemEditor from "./TaskItemEditor";
import useTaskState from "../../store/TaskState";

const StyledTaskItem = styled.li`
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
  cursor: pointer;

  .date {
    color: red;
    margin-top: 3px;
  }
`;

const TaskItem = ({ task }) => {
  const { name, deadline } = task;
  const [isEditMode, setIsEditMode] = useState(false);
  const taskState = useTaskState();

  const handleTaskDelete = () => {
    taskState.deleteTask(task);
  };

  const handleEditOn = () => setIsEditMode(true);
  const handleEditOff = () => setIsEditMode(false);

  const taskItem = (
    <>
      <div>
        <Checkbox handleCheck={handleTaskDelete} />
      </div>
      <StyledTaskContent onClick={handleEditOn}>
        <p className="name">{name}</p>
        <p className="date">
          {deadline
            ? new Date(deadline).toLocaleString("en-GB", {
                day: "numeric",
                month: "long"
              })
            : null}
        </p>
      </StyledTaskContent>

      <div className="menu">
        <TaskItemMenu />
      </div>
    </>
  );

  const editor = <TaskItemEditor hide={handleEditOff} task={task} />;

  return <StyledTaskItem>{isEditMode ? editor : taskItem}</StyledTaskItem>;
};

export default TaskItem;

TaskItem.propTypes = {
  task: PropTypes.object
};
