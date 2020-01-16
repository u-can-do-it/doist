import React from "react";

const TextArea = ({ handleChange, name }) => (
  <textarea name={name} onChange={event => handleChange(event)}></textarea>
);

export default TextArea;
