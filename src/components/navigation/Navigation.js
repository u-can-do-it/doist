import React from "react";
import styled from "styled-components";

import { FaCalendarCheck } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";

const StyledNavigation = styled.div`
  width: 100vw;
  border-bottom: solid 1px #ca2100;
  background-color: #db4c3f;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  nav {
    max-width: 922px;
    margin: 0 auto;
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }

  svg {
    width: 24px;
    height: 24px;
    color: white;
  }
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <nav>
        <FaCalendarCheck />

        <GiSettingsKnobs />
      </nav>
    </StyledNavigation>
  );
};

export default Navigation;
