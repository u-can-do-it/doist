import React from "react";
import styled from "styled-components";

import Button from "./Button";

const StyledSpinner = styled.div`
  .spinner {
    width: 70px;
    margin: 0 auto;
  }

  .spinner > div {
    width: 13px;
    height: 13px;
    background-color: white;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  }

  .spinner .bounce1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  .spinner .bounce2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

const ButtonWithSpinner = ({ isLoading, children, ...rest }) => {
  const spinner = (
    <StyledSpinner>
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    </StyledSpinner>
  );
  return <Button {...rest}>{isLoading ? spinner : children}</Button>;
};

export default ButtonWithSpinner;
