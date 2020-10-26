import { lighten } from "@material-ui/core/styles/colorManipulator";
import styled from "styled-components";
import { colors } from "../colors";
import theme from "../theme";

export const ForgotPasswordWrapper = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding-top: 120px;
  

  & .form-wrapper {
    text-align: center;
    h2 {
      font-size: 3rem;
    }
    p {
      font-size: 1.125rem;
      color: ${theme.palette.primary.main};
      margin: 10px 0;
      font-weight: 100;
    }

    & .logo {
      height: 156px;
      margin: 0 auto;
      display: block;
    }
  }
`;
