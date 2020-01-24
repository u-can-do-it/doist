import React, { useState } from "react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

import TaskItemEditor from "../task-item/TaskItemEditor";

const StyledAddButton = styled.button`
  display: flex;
  color: black;
  width: 90px;
  height: 21px;
  cursor: pointer;
  margin-left: 2px;
  margin-top: 10px;

  :hover {
    color: red;
  }

  :hover svg {
    background-color: red;
    color: white;
  }

  svg {
    display: block;
    margin-left: 1px;
    margin-right: 10px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: transparent;
    color: black;
    font-size: 16px;
  }
`;

const AddTask = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditModeOn = () => setIsEditMode(true);
  const handleEditModeOff = () => setIsEditMode(false);

  const editButton = (
    <StyledAddButton onClick={handleEditModeOn}>
      <FiPlus /> Add task
    </StyledAddButton>
  );

  return isEditMode ? <TaskItemEditor hide={handleEditModeOff} /> : editButton;
};

export default AddTask;
