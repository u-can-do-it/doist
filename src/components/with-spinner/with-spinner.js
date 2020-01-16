import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spiner.styles";

const WithSpinner = ({ children, isLoading }) => {
  const spinner = (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
  return isLoading ? spinner : children;
};
export default WithSpinner;
