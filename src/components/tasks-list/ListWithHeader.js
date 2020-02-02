import React from "react";
import styled from "styled-components";
import TaskItem from "../task-item/TaskItem";
import AddTask from "../add-task/AddTask";

const StyledListHeader = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  color: #202020;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 0.5rem;

  margin-bottom: 0;

  .subtitle {
    color: #808080;
    margin-left: 0.6rem;
    font-size: 1.1rem;
    font-weight: normal;
  }
`;

const ListWithHeader = ({ header = "", subHeader = "", list = [] }) => (
  <div>
    <StyledListHeader>
      {header}
      <span className="subtitle">{subHeader}</span>
    </StyledListHeader>
    <ul>
      {list.map(item => (
        <TaskItem task={item} key={item._id} />
      ))}
      <li className="add-task">
        <AddTask />
      </li>
    </ul>
  </div>
);

export default ListWithHeader;
