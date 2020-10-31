
import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";
import theme from "./theme";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    transition: all 0.2s ease-in;
    box-sizing: border-box;
    color: ${colors.gray50}
  }

  body {
    font-size: 16px;

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
  img {
    max-width: 100%;
    display: block
  }

  .react-multiple-carousel__arrow.react-multiple-carousel__arrow--right,
  .react-multiple-carousel__arrow.react-multiple-carousel__arrow--left {
    background: ${theme.palette.primary.main + "d9"}
  }
  .react-multiple-carousel__arrow.react-multiple-carousel__arrow--right:hover,
  .react-multiple-carousel__arrow.react-multiple-carousel__arrow--left:hover {
    background: ${theme.palette.primary.main}
  }
  #nprogress, #nprogress *  {
  z-index: 999999 !important
}
.MuiAppBar-root {
    z-index: 10000 !important;
}

`;
