import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledFormInput = styled.div`
  input {
    box-sizing: border-box;
    font-size: 13px;
    font-weight: normal;
    padding: 0.75rem 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 1rem;
  }

  p {
    margin-top: -0.8rem;
    font-size: 10px;
    color: red;
  }
`;

const FormInput = ({ handleChange, label, feedback, ...rest }) => (
  <StyledFormInput>
    {label ? <label>{label}</label> : null}
    <input
      className="form-input"
      onChange={event => handleChange(event)}
      {...rest}
    />
    {feedback ? <p>{feedback}</p> : null}
  </StyledFormInput>
);
export default FormInput;

FormInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  feedback: PropTypes.string
};
