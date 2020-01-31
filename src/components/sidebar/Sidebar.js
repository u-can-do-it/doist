import React from "react";
import useLayoutState from "../../store/LayoutState";

import FilterButton from "../option-button.js/OptionButton";
import styled from "styled-components";
import { device } from "../styles/index";
import { Link } from "react-router-dom";
import { TASK_SEPARATORS } from "../../constants/tasksSeparators";

const StyledSidebar = styled.nav`
  position: fixed;
  height: 100vh;
  user-select: none;
  width: ${props => props.theme.sidebarWidth};

  z-index: 10;
  padding-top: 60px;
  user-select: none;
  transition: all 0.25s;
  border-right: 1px solid #f1f1f1;
  background-color: #fafafafa;

  @media ${device.laptop} {
    padding-left: 2.5rem;
  }

  @media ${device.tablet} {
    left: 0;
    padding-top: 50px;
    transform: translateX(${props => (props.isOpen ? "0" : "-100%")});
  }
`;

const Sidebar = () => {
  const layout = useLayoutState();
  const { layoutState, toggleSidebarOpen } = layout;

  return (
    <StyledSidebar isOpen={layoutState.isSidebarOpen}>
      <ul>
        {TASK_SEPARATORS.map(({ icon, key, name }) => (
          <Link to={`/dashboard/${key}`} key={key} onClick={toggleSidebarOpen}>
            <FilterButton filter={key} name={name} icon={icon} />
          </Link>
        ))}
      </ul>
    </StyledSidebar>
  );
};

export default Sidebar;
