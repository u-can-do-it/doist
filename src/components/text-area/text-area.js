import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  resize: none;
  overflow: hidden;
  border: none;
  min-height: 50px;
  width: 100%;
  min-width: 12rem;

  :focus {
    outline: none;
  }
`;

const TextArea = ({ handleChange, name, value }) => {
  const handleResize = event => {
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  return (
    <StyledTextArea
      name="name"
      onInput={event => handleResize(event)}
      value={value}
      onChange={event => handleChange(event)}
    ></StyledTextArea>
  );
};

export default TextArea;
