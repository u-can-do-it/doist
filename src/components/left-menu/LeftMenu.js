import React from "react";
import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";
import useTaskState from "../../store/TaskState";

import FilterButton from "../option-button.js/OptionButton";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import { taskSeparators } from "../../constants/tasksSeparators";

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
  return (
    <StyledLeftMenu>
      <div>
        <ul>
          {taskSeparators.map(({ icon, key, name }) => (
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
