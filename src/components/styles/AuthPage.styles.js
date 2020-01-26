import styled from "styled-components";
import { pyramids, popupWindow } from "./index";

export const StyledAuthPage = styled.div`
  height: 100vh;
  ${pyramids}
  background-color: #ff7700;
  position: relative;

  .container {
    ${popupWindow}
    max-width:300px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px;
  }
`;
