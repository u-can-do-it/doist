import React from "react";

const Checkbox = ({ handleCheck }) => (
  <div className="checkbox-holder" onClick={handleCheck}>
    <span className="checkbox" />
  </div>
);

export default Checkbox;
