import { lighten } from "@material-ui/core/styles/colorManipulator";
import styled from "styled-components";
import interfaceConstant from "../../utils/constant/interfaceConstant";
import { colors } from "../colors";
import theme from "../theme";

export const HomeWrapper = styled.div`
  & .text-right {
    text-align: right;
  }
  & .text-center {
    text-align: center;
  }
  & .gray01 {
    background: ${lighten(theme.palette.secondary.light, 0.8)};
    box-shadow: 0px 2px 20px 0px ${theme.palette.secondary.light};
  }
  & .purple01 {
    background: ${lighten(theme.palette.primary.light, 0.8)};
  }
`;
export const Intro = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/media/home/bg-intro.jpg");
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  position: relative;

  & .uplayer {
    position: relative;
    width: fit-content;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 1;
    margin: 0 auto;
  }
  & img {
    margin-bottom: 60px;
  }
  & h4 {
    max-width: 250px;
    color: ${theme.palette.primary.main};
    text-align: center;
    line-height: 1.4;
  }

  & a {
    width: calc(100% - 110px);
    text-align: center;
    box-shadow: 0px 2px 20px 0px ${theme.palette.primary.light};
  }
  &:before {
    z-index: 0;
    content: "";
    width: inherit;
    height: inherit;
    display: block;
    position: absolute;
    top: 0px;
    left: 0;
    background: linear-gradient(
      360deg,
      #ffffff 2%,
      rgba(196, 196, 196, 0) 100%
    );
  }
`;

export const CenteredImage = styled.img`
  margin: auto;
  display: block;
  max-width: ${(props: interfaceConstant.ImageProps) =>
    props.maxWidth ? props.maxWidth : undefined};
`;
export const Navigation = styled(CenteredImage)`
  position: absolute;
  bottom: 0;
`;

export const IconTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: flex-start;
`;

export const SubContainer = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const BenefitsList = styled.ul`
  margin-top: 40px;
  & li {
    position: relative;
    color: ${theme.palette.primary.main};
    margin: 5px 60px 5px 0;
    font-size: 0.875rem;

    &:after {
      content: "";
      display: block;
      position: absolute;
      right: -50px;
      top: 0;
      width: 21px;
      height: 15px;
      background: url("/media/home/check.svg");
    }
  }
`;

export const CTA = styled.section`
  width: 100%;
  height: 300px;
  background: url("/media/home/11.png") top center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0;

  & .inner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & h2 {
      text-align: center;
      margin-bottom: 20px
    }
    & a {
      text-align: center;
      width: 100%;
    }
  }
`;
