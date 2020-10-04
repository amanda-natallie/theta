import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    transition: all 0.2s ease-in;
    font-family: "Nunito", sans-serif;
  }

  body {
    color: #fff;
    font-size: 16px
  }

  a {
    text-decoration: none
  }

  button {
    border: 0;
    outline: none
  }

  ul {
    list-style: none;
    padding:0
  }
`;
