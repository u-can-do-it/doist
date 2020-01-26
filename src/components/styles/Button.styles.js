import styled from "styled-components";

export const StyledButton = styled.button`
  border-color: #b0281a;
  background-color: #c53727;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  padding: 6px 12px 7px;
  transition: all 0.2s;
  color: white;
  border-radius: 5px;

  :hover {
    background-color: #b0281a;
  }
`;

export const StyledButtonCancel = styled.button`
  color: #555;
  cursor: pointer;
  font-size: 13px;
  padding: 2px 5px;
  text-decoration: none;
  white-space: nowrap;

  :hover {
    text-decoration: underline;
  }
`;
