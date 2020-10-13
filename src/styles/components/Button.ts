import styled from "styled-components";
import { darken } from "@material-ui/core";
import theme from "../theme";
import interfaceConstant from "../../utils/constant/interfaceConstant";


const handleColorType = (color: string) => {
  switch (color) {
    case "rainbow":
      return `
        color: ${darken(theme.palette.primary.main, 0.4)};
        background: white;
        
        &:before {
        content: '';
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: -1;
        margin: -2px; 
        border-radius: inherit; 
        background: linear-gradient(90.47deg, #00A9E0 0%, #8C38B6 51.56%, #EE2737 100%);
      }`;
    case "purple":
      return `color: #fff; background: ${theme.palette.primary.main}; border: 1px solid ${theme.palette.primary.main}`;
    case "purpleOutlined":
      return `color: ${theme.palette.primary.main}; background: white; border: 2px solid ${theme.palette.primary.main}; font-weight: 700;`;
    default:
      return "color: #000; background: #eee;";
  }
};

export const ThetaButton = styled.a`
  position: relative;
  border-radius: 8px;
  border: 0;
  outline: none;
  text-decoration: none;
  display: inline-block;
  font-family: "Nunito", sans-serif;

  ${(props: interfaceConstant.ButtonProps) =>
    props.fullWidth
      ? "width: 100%; text-align: center; padding: 10px 0;"
      : "padding: 10px 50px;"};
  font-size: 15px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  ${(props: interfaceConstant.ButtonProps) => handleColorType(props.theme)};
  &:hover {
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`;

export const MenuIconButton = styled(ThetaButton)`
  padding: 0;
  background: none;
  width: 90px;
  height: 34px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 10px;
  color: ${(props: interfaceConstant.MenuProps) =>
    props.color === "dark" ? theme.palette.primary.dark : "white"};
`;

export const ColorfulIcon = styled.div`
  border-radius: 100%;
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    178.36deg,
    #00a9e0 -4.16%,
    #8c38b6 82.8%,
    #ee2737 167.13%
  );
  margin-right: 15px;
`;

export const NewsletterButton = styled(ThetaButton)`
  border-radius: 0 8px 8px 0;
  margin: 0;
  background: ${theme.palette.primary.main};
  color: white;
`;

export const IconButton = styled.a`
  border-radius: 100%;
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${(props: interfaceConstant.boxProps) => props.bg};
  margin-right: 15px;

  & svg {
    fill: ${(props: interfaceConstant.boxProps) => props.color};
  }
`;

export const NavigationButton = styled.a`
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 18px;
  text-decoration: ${(props: interfaceConstant.ButtonProps) =>
    props.underline ? "underline" : "none"};
  text-align: ${(props: interfaceConstant.ButtonProps) =>
    props.align ? props.align + "; display: block" : "inherit"};
  color: ${theme.palette.primary.main};
  
  
`;
