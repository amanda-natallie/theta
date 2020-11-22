import styled from "styled-components";
import { colors } from "../../styles/colors";
import theme from "../../styles/theme";
import interfaceConstant from "../../utils/constant/interfaceConstant";

export const Title = styled.h2`
  color: ${theme.palette.primary.main};
  font-size: 2rem;
`;

export const ColoredTitle = styled.h1`
  text-align: center;
  background: linear-gradient(
    90.47deg,
    #00a9e0 0%,
    #8c38b6 51.56%,
    #ee2737 100%
  );

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: ${(props: interfaceConstant.TextProps) =>
    props.small ? "3rem" : "4rem"};
  margin: 10px 0 30px 0;
`;

export const Subtitle = styled.h3`
  color: ${(props: interfaceConstant.TextProps) =>
    props.color ? props.color : theme.palette.primary.main};

  font-size: 1.5rem;
`;

export const Heading06 = styled.h6`
  color: ${theme.palette.primary.main};
  font-size: 1.125rem;
  margin-top: 10px;
`;
export const GrayTitle = styled.h3`
  color: ${colors.gray03};
  font-size: 1.125rem;
  text-align: center;
  font-weight: 300;
`;
export const Text = styled.p`
  margin-top: 30px;
  font-size: ${(props: interfaceConstant.TextProps) =>
    props.small ? "0.875rem" : props.size ? props.size : "1rem"};
  line-height: 25px;
  font-weight: ${(props: interfaceConstant.TextProps) =>
    props.weight ? props.weight : 400};
  color: ${(props: interfaceConstant.TextProps) =>
    props.color ? props.color : theme.palette.primary.dark};

  & .grayspan {
    color: ${theme.palette.primary.main};
    font-weight: 700;
  }

  & .navigation {
    transition: all .2s ease;
    cursor: pointer;

    &:hover {
     color: #000;
     font-weight: 700;
    }
  
  }
`;
export const Quote = styled.p`
  margin: 30px 0;
  font-weight: 300;
  font-size: 1rem;
  line-height: 120%;
  color: ${colors.gray03};
`;
