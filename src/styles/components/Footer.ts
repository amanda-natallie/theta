import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import theme from "../theme";
import interfaceConstant from "../../utils/constant/interfaceConstant";
import { colors } from "../colors";

export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction:column;
  margin-top:20px;
  @media(max-width:500px){
        display:flex;
        flex-direction:column;}
  .footer{
    display:flex;
    .social{
      display:flex;
      padding:10px;
      img{
        margin:10px;
      }
    }
    .footerContact{
    display:flex;
    flex-direction:column;
    font-family: Nunito;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.466667px;
    .menu {
      display:flex;
      width:500px;
      justify-content:space-between;
      @media(max-width:500px){
        display:none;
      }

   a{
    color: #706880;

   }
   
    }
   
  }
  }
  .newResponse{
    display:flex;
    justify-content:space-between;

  }
  

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
    justify-content:space-between;
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
    width: 100%;
    justify-items:center;
form{
  display:flex;
}
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
       justify-content:center;
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
margin:0 auto;
       justify-content:center;
       @media(max-width:500px){
         width:90%;
         margin:20px;
         flex-direction:column;
       }

     }
  }

`;


export const Copyright = styled.p`
  margin-top: 30px;
  color: ${colors.gray50};
  font-size: 0.875rem;
  
  @media(max-width:500px){
justify-items:center;
  }
 
`;



