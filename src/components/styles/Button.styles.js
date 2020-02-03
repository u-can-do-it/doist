import styled from "styled-components";
import React, { useEffect } from "react";
import { useState } from "react";

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

const StyledBurgerButton = styled.div`
  width: 3rem;
  height: 2rem;
  cursor: pointer;
  position: relative;
  background-color: transparent;

  ::after {
    clear: both;
    content: "";
    display: table;
  }

  & button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => (props.isActive ? "transparent" : "white")};

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;

      display: inline-block;
    }

    ::before,
    ::after {
      content: "";
      position: absolute;
      left: 0;
      transition: all 0.3s;
      background-color: white;
    }

    ::before {
      transform: rotate(${props => (props.isActive ? `320deg` : `0`)});
      top: ${props => (props.isActive ? `0` : `-0.8rem`)};
    }

    ::after {
      transform: rotate(${props => (props.isActive ? `-320deg` : `0`)});
      top: ${props => (props.isActive ? `0` : `0.8rem`)};
    }
  }
`;

export const BurgerButton = ({
  onClick = function() {},
  isActive,
  ...rest
}) => (
  <StyledBurgerButton onClick={onClick} isActive={isActive}>
    <button {...rest} />
  </StyledBurgerButton>
);
