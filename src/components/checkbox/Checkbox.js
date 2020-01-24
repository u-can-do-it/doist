import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdCheck } from "react-icons/md";

const StyledCheckBox = styled.label`
  cursor: pointer;
  user-select: none;
  overflow: auto;
  display: inline-block;
  width: 18px;
  height: 18px;
  position: relative;

  input {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    opacity: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border-radius: 2px;
    background-color: white;
    border: 1px solid gray;
  }

  .checkmark:hover svg {
    opacity: 0.8;
  }

  svg {
    width: 15px;
    height: 15px;
    opacity: 0;
    transition: all 0.1s;
  }

  input:checked ~ .checkmark {
    background-color: grey;
    & svg {
      opacity: 1;
    }
  }
`;

const Checkbox = ({ handleCheck }) => (
  <StyledCheckBox>
    <input type="radio" onChange={() => handleCheck()} />
    <span className="checkmark">
      <MdCheck />
    </span>
  </StyledCheckBox>
);

export default Checkbox;
