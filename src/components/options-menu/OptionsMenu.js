import React, { useState } from "react";
import styled from "styled-components";

import OptionButton from "../option-button.js/OptionButton";
import { AiOutlineLogout } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import useAuthState from "../../store/AuthState";
import CatchOutsideClick from "../../hoc/CatchOutsideClick";

import { popupWindow } from "../styles/index";

const StyledOptions = styled.div`
  position: relative;
  cursor: pointer;

  .options-window {
    ${popupWindow};
    padding: 10px 0;
    right: 0;
    top: 36px;
    position: absolute;
    max-width: 27.4rem;
    width: 100%;
    min-width: 15rem;

    :hover {
      cursor: pointer;
    }

    button {
      padding: 0 10px;

      :hover {
        cursor: pointer;
        background-color: #fafafafa;
      }
    }

    svg {
      color: black;
    }
  }
`;

const OptionsMenu = () => {
  const { authLogout } = useAuthState();
  const [isWindowShowed, setIsWindowShowed] = useState(false);

  const handleLogout = () => authLogout();

  const optionsWidow = isWindowShowed ? (
    <CatchOutsideClick
      onOutsideClick={() => setIsWindowShowed(false)}
      className="options-window"
    >
      <OptionButton
        icon={<AiOutlineLogout />}
        name="Log out"
        onClick={handleLogout}
      ></OptionButton>
    </CatchOutsideClick>
  ) : null;
  return (
    <StyledOptions>
      <GoGear onClick={() => setIsWindowShowed(true)} />
      {optionsWidow}
    </StyledOptions>
  );
};

export default OptionsMenu;
