import React from "react";
import { StyledSpinner, StyledDots } from "../styles/Spinner.styles";

const WithSpinner = ({ children, isLoading, ...rest }) => {
  const spinner = <StyledSpinner {...rest} />;
  return isLoading ? spinner : children;
};

export default WithSpinner;
