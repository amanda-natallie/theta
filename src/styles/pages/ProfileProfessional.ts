import { url } from "inspector";
import styled from "styled-components";
import interfaceConstant from "../../utils/constant/interfaceConstant";
import { colors } from "../colors";
import theme from "../theme";

export const PublicProfilePageWrapper = styled.main``;


export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 300px;
  z-index: 1;

  & > div {
    position: relative;
    z-index: 1;
    height: 300px;
    & > div {
      padding-top: 30px;
      height: 300px;
    }
  }

  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 45%;
    background-image: ${(props: interfaceConstant.boxProps) =>
      `url(${props.bg})`};
    background-repeat: no-repeat;
    background-position-x: 0px;
    background-position-y: bottom;
    background-size: cover;
    z-index: 0;
  }
`;

export const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  & .profile-avatar {
    width: 167px;
    height: 167px;
    box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.1);
  }
  img {
    border: 5px solid #ffffff;
    border-radius: 100%;
  }
  h1 {
    color: ${theme.palette.primary.dark};
    font-size: 1.875rem;
  }

  p {
    color: ${colors.gray50};
    &:first-of-type {
      font-weight: 300;
      font-size: 1.125rem
    }
    &:last-of-type {
      font-size: 1rem
    }
    span {
      display: inline-block;
      margin: 0 10px
    }
  }
`;



export const Content = styled.section`
  margin-top: 70px;

  table {
    font-size: 0.75rem;
    th {
      color: ${colors.gray50};
      text-align: left;
    }
    td {
      color: ${colors.gray03};
      padding-left: 30px
    }
  }
`