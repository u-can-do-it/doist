import React from "react";

import { StyledButton } from "../../components/styles/Button.styles";

const Button = ({ disabled, handleClick, children }) => {
  return (
    <StyledButton disabled={disabled} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
