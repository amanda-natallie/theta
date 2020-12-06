import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import theme from "../theme";
import interfaceConstant from "../../utils/constant/interfaceConstant";
import { colors } from "../colors";

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  padding: 60px 0;
  flex-direction: column;

  & > div {
    display: flex;
    justify-content: space-between;
  }
  & input {
    width: 61%;
    background: white;
    padding-left: 15px;
    border: 1px solid #e3e1e8;
    border-radius: 8px 0 0 8px;
    height: 39px;
    outline: none;
    box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.08);

    &:focus {
      box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.3);
    }
  }
  & .brand {
    display: flex;
    align-items: center;
    & p {
      max-width: 350px;
      margin-left: 20px;
      color: ${colors.gray50};
      font-size: 0.875rem;
    }
    & svg {
    }
  }
  & .news {
    width: 46%;

    & p {
      margin-bottom: 15px;
      font-size: 0.875rem;
    }
  }
`;

export const FooterMenu = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;


  & a {
    color: ${colors.gray50};
    font-size: 0.875rem;
  }
  @media (max-width:700px){
    flex-direction:column;
    align-items:flex-start;
    a{
      margin:5px;
    }
  }
`;

export const Copyright = styled.p`
 position:absolute;
  margin-top: 30px;
  color: ${colors.gray50};
  font-size: 0.875rem;
 
`;


export const SocialMenu = styled.nav`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`