import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "../../components/styles/Button.styles";

import { pyramids } from "../../components/styles/index";

const StyledHomePage = styled.div`
  height: 100vh;
  background-color: #ff7700;
  ${pyramids}

  .heading {
    text-align: center;
    padding-top: 35vh;

    h1 {
      font-size: 50px;
      line-height: 1.15;
      letter-spacing: -3px;
      font-weight: 600;
    }
  }

  .links {
    margin-top: 2rem;

    button {
      margin: 0 1rem;
    }
  }
`;

const HomePage = () => (
  <StyledHomePage>
    <div className="heading">
      <h1>Welcome in the best to do app!</h1>
      <div className="links">
        <Link to="/login">
          <StyledButton>Log in</StyledButton>
        </Link>

        <Link to="/signup">
          <StyledButton>Sign up</StyledButton>
        </Link>
      </div>
    </div>
  </StyledHomePage>
);

export default HomePage;
