import React from "react";
import styled from "styled-components";

const StyledOpotionButton = styled.button`
  max-width: 26.5rem;
  width: 100%;
  height: 3.4rem;
  padding: 5px 5px 5px 16px;
  display: flex;
  transition: all 0.3s;

  &:hover {
    background-color: white;
  }

  span {
    font-size: 1.4rem;
  }

  svg {
    margin-right: 5px;
  }
`;

const OptionButton = ({ icon, name, details }) => (
  <StyledOpotionButton>
    <span className="icon">{icon}</span>
    <span className="name">{name}</span>
    <span className="additional">{details}</span>
  </StyledOpotionButton>
);

export default OptionButton;
