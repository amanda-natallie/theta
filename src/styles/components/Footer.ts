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
    & h1 {
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

    & h1 {
      margin-bottom: 15px;
      font-size: 0.875rem;
    }
  }
  @media(max-width:500px){
    form{
      width:100%;
      display:flex;
      justify-items:center;
   }
    & h1{
      width:100%;
      text-align:center;
    }
     .newResponse{
       display:flex;
       flex-direction:column;
       text-align:center;
     }
     .brand{
       display:flex;
       margin:10px;
       flex-direction:column;
       & svg{
         width:70px;
         height:60px
       }
     }
     .news{
       display:flex;
       margin:20px;
       width:100%;
       flex-direction:column;
       justify-content:center;
       @media(max-width:500px){
         width:90%;
         margin:20px;
       }

     }
  }

`;

export const FooterMenu = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;

  @media(max-width:500px){
    flex-direction: column;
    margin-top: -50px;
  }


  & a {
    color: ${colors.gray50};
    font-size: 0.875rem;
  }
  
    a{
      margin:5px;
    }
  
 
    
  
`;

export const Copyright = styled.p`
 position:absolute;
  margin-top: 40px;
  color: ${colors.gray50};
  font-size: 0.875rem;
  margin-left: -25%;
  
  
  @media(max-width:500px){
    text-align:center;
    font-size: 0.875rem;
    margin: 20px;
    padding-bottom: 10px;
    align-self: center;
  }
 
`;


export const SocialMenu = styled.nav`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
cursor:pointer;
`