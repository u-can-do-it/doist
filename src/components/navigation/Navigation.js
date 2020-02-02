import React from "react";
import styled from "styled-components";
import useLayoutState from "../../store/LayoutState";

import OptionsMenu from "../options-menu/OptionsMenu";
import { BurgerButton } from "../styles/Button.styles";
import { MdFeaturedPlayList } from "react-icons/md";
import { device } from "../styles/index";

const StyledNavigation = styled.div`
  max-width: 100vw;
  width: 100%;
  border-bottom: solid 1px #ca2100;
  background-color: ${props => props.theme.cPrimary};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  user-select: none;

  nav {
    max-width: 922px;
    margin: 0 auto;
    height: ${props => props.theme.navbarHeight};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
  }

  svg {
    width: 24px;
    height: 24px;
    color: white;
    cursor: pointer;
  }

  .desktop-icon {
    display: block;
    @media ${device.tablet} {
      display: none;
    }
  }

  .mobile-icon {
    display: none;
    @media ${device.tablet} {
      display: block;
    }
  }
`;

const Navigation = () => {
  const layout = useLayoutState();

  return (
    <StyledNavigation>
      <nav>
        <div>
          <BurgerButton
            className="mobile-icon"
            onClick={() => layout.toggleSidebarOpen()}
            active={layout.layoutState.isSidebarOpen}
          />
          <MdFeaturedPlayList className="desktop-icon" />
        </div>

        <OptionsMenu />
      </nav>
    </StyledNavigation>
  );
};

export default Navigation;
