import { lighten } from "@material-ui/core/styles/colorManipulator";
import styled from "styled-components";
import { colors } from "../colors";
import theme from "../theme";


export const UserSignUpWrapper = styled.section`
  width: 100%;
  height: calc(100vh-72px);
  overflow-y: auto;
  background: url("/media/user/bg.jpg") top left no-repeat;
  background-attachment: fixed;
  background-size: contain;

  & .form-wrapper {
    padding: 60px 0;
    display: flex;
  }

  & .signup-form {
    h2 {
      text-align: center;  
    }

    form {
      margin: 50px 0;
      
      p {
        color: ${colors.gray35};
        font-size:0.75rem;
        margin-bottom: 20px;
      }
    }
    & .divider {
      /* border-top: 1px solid ${lighten(colors.gray35, 0.8)}; */
      margin-top: 10px;
      padding-top: 10px;
    }

    label {
      color: ${colors.gray50};
    }

    svg {
      transform: none
    }
    & .accepterms {
      label {
        color: ${theme.palette.primary.dark};
        font-size: 0.875rem
      }
    }
  }
`;
