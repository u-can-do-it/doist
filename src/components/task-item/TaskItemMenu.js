import React from "react";
import styled from "styled-components";

import { AiOutlineInfoCircle, AiOutlineMore } from "react-icons/ai";
import { GoCalendar, GoComment } from "react-icons/go";

const StyledTaskItem = styled.div`
  display: flex;

  svg {
    width: 24px;
    height: 24px;

    cursor: pointer;
    background-color: transparent;
    transition: all 0.2s;
    border-radius: 4px;

    &:not(:first-child) {
      margin-left: 10px;
    }

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const TaskItemMenu = () => {
  return (
    <StyledTaskItem>
      <AiOutlineInfoCircle />
      <GoCalendar />
      <GoComment />
      <AiOutlineMore />
    </StyledTaskItem>
  );
};

export default TaskItemMenu;
