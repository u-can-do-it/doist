import styled from "styled-components";

export const StyledAuthForm = styled.form`
  margin-top: 3rem;

  label {
    display: block;
    font-weight: bold;
    font-size: 13px;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
  }

  button {
    width: 100%;
    margin: 1rem 0;
  }

  a {
    color: #dd4b39;
    font-size: 1.3rem;

    :hover {
      text-decoration: underline;
    }
  }
`;
