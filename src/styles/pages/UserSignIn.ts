import { lighten } from "@material-ui/core/styles/colorManipulator";
import styled from "styled-components";
import { colors } from "../colors";
import theme from "../theme";

export const UserSignInWrapper = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url("/media/user/bg-login.jpg") top center no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding-top: 72px;



  & .form-wrapper {
    width: 100%;
    height: 100vh;
    padding: 60px 0;

    & .logo {
      height: 186px;
      margin: 0 auto;
      display: block
    }

    & a {
      margin: 0;
    }

    & a:hover {
      box-shadow: 1px 4px 12px rgba(118, 66, 255, 0.7);
    }
    
    & footer {
      padding: 20px 0;
      p {
        color: ${colors.gray50};
        font-size: 0.875rem
      }
    }
  }
`;
