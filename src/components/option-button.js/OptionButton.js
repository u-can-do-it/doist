import React from "react";
import styled from "styled-components";

const StyledOpotionButton = styled.button`
  max-width: 26.5rem;
  width: 100%;
  height: 3.4rem;
  display: flex;
  transition: all 0.3s;
  align-items: center;
  position: relative;

  &:hover {
    background-color: white;
  }

  span {
    font-size: 1.4rem;
  }
  .icon {
    max-width: 24px;
    max-height: 24px;
    margin-right: 8px;
  }

  .details {
    position: absolute;
    right: 0;
    color: grey;
  }
`;

const OptionButton = ({ icon, name, details, onClick }) => (
  <StyledOpotionButton onClick={onClick}>
    <span className="icon">{icon}</span>
    <span className="name">{name}</span>
    <span className="details">{details}</span>
  </StyledOpotionButton>
);

export default OptionButton;
