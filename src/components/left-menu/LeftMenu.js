import React from "react";

import FilterButton from "../option-button.js/OptionButton";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { TASK_SEPARATORS } from "../../constants/tasksSeparators";
import useTaskState from "../../store/TaskState";

const StyledLeftMenu = styled.div`
  user-select: none !important;
  width: 266px;
  height: calc(100vh - 5rem);
  padding-left: 3.2rem;
  margin-left: -3.2rem;
  padding-top: 3rem;
  position: fixed;
  overflow-x: hidden;
  overflow-y: hidden;
  border-right: 1px solid #f1f1f1;
  background-color: #fafafafa;
`;

const LeftMenu = () => {
  const { tasks } = useTaskState();
  return (
    <StyledLeftMenu>
      <div>
        <ul>
          {TASK_SEPARATORS.map(({ icon, key, name }) => (
            <Link to={`/dashboard/${key}`} key={key}>
              <FilterButton filter={key} name={name} icon={icon} />
            </Link>
          ))}
        </ul>
      </div>
    </StyledLeftMenu>
  );
};

export default LeftMenu;
