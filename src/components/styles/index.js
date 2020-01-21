import { css } from "styled-components";

export const popupWindow = css`
  background-color: #fff;
  border-radius: 3px;
  -webkit-box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.08),
    0 0 1px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.08), 0 0 1px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 1;
  padding: 10px;
`;
