import React from "react";
import styled from "styled-components";
import Navigation from "../navigation/Navigation";

const StyledContent = styled.div`
  max-width: 92.2rem;
  width: 100%;
  margin: 0 auto;
  background-color: #fafafa;
`;

const Layout = ({ children }) => (
  <div>
    <Navigation />
    <StyledContent>{children}</StyledContent>
  </div>
);
export default Layout;
