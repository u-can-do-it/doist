import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  // This defines what 1rem is
  font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%
  scroll-behavior: smooth;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

body {
  box-sizing: border-box;
  padding: 0;
  background-color:#fafafa;
}

p, span, h1, h2, h3, h4, h5, h6, button, a{
  font-family:inherit;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: unset;
}

button {
  background-color: unset;
  border: unset;

  &:hover{
cursor: pointer;
  }

  &:focus{
   outline:none;
 }
}
`;

export default GlobalStyle;