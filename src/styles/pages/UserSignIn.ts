import { lighten } from "@material-ui/core/styles/colorManipulator";
import styled from "styled-components";
import { colors } from "../colors";
import theme from "../theme";

export const UserSignInWrapper = styled.section`
  width: 100%;
  background: url("/media/user/bg-login.jpg") top center no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding-top: 72px;



  & .form-wrapper {
    width: 100%;
    height: calc(100vh - 72px);
    

    & .logo {
      height: 90px;
      margin: 0 auto;
      display: block
    }

   
    
    & footer {
      padding: 20px 0;
      p {
        color: ${colors.gray50};
        font-size: 0.875rem
      }
    }
    @media (max-width: 400px) {
    text-align: center;
  }
  }
`;
