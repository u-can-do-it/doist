import React from "react";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={event => handleChange(event)}
      {...otherProps}
    />
    {label ? <label>{label}</label> : null}
  </div>
);
export default FormInput;
