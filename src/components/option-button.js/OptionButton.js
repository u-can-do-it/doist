import React from "react";
import styled from "styled-components";

const StyledOpotionButton = styled.button`
  width: 26.5rem;
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

const OptionButton = ({ icon, name, counter }) => (
  <StyledOpotionButton>
    <span className="icon">{icon}</span>
    <span className="name">{name}</span>
    <span className="additional">{counter}</span>
  </StyledOpotionButton>
);

export default OptionButton;
