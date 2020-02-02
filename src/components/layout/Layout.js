import React from "react";
import Navigation from "../navigation/Navigation";
import Sidebar from "../sidebar/Sidebar";
import styled from "styled-components";
import { device } from "../styles/index";

const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 92.2rem;
  width: 100%;
`;

const StyledContent = styled.div`
  margin-left: ${props => props.theme.sidebarWidth};

  @media ${device.tablet} {
    margin-left: 0;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <StyledWrapper>
        <Sidebar />
        <StyledContent>{children}</StyledContent>
      </StyledWrapper>
    </>
  );
};

export default Layout;
