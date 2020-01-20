import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  resize: none;
  overflow: hidden;
  border: none;
  min-height: 50px;
  width: 100%;
  max-width: 41rem;

  :focus {
    outline: none;
  }
`;

const TextArea = ({ handleChange, name }) => {
  const handleResize = event => {
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  return (
    <StyledTextArea
      name={name}
      onInput={event => handleResize(event)}
    ></StyledTextArea>
  );
};

export default TextArea;
