import React from "react";
import styled from "styled-components";
import TaskItem from "../task-item/TaskItem";

const StyledListWithHeader = styled.div`
  h2 {
    font-size: 1.4rem;
    font-weight: bold;
    color: #202020;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 0.5rem;

    margin-bottom: 0;
  }

  .subtitle {
    color: #808080;
    margin-left: 0.6rem;
    font-size: 1.1rem;
    font-weight: normal;
  }

  margin-bottom: 1rem;
`;

const ListWithHeader = ({ header = "", subHeader = "", list = [] }) => (
  <StyledListWithHeader>
    <h2>
      {header}
      <span className="subtitle">{subHeader}</span>
    </h2>
    <ul>
      {list.map(item => (
        <TaskItem task={item} key={item._id} />
      ))}
    </ul>
  </StyledListWithHeader>
);

export default ListWithHeader;
