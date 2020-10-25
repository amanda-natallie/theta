import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import theme from "../theme";
import interfaceConstant from "../../utils/constant/interfaceConstant";
import Link from "next/link";

export const MenuBar = styled(AppBar)`
  color: ${theme.palette.primary.main};
`;

export const Logo = styled.img`
  max-width: 180px;
  width: 180px;
`;
export const BrandArea = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuSvg = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: inline-block;
  }
`;

export const NavArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    /* width: 100%;
    flex-direction: column;
    justify-content: center; */
    display: none;
  }
`;
export const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & li {
    margin-right: 30px;

    & a {
      color: ${(props: interfaceConstant.MenuProps) =>
        props.color === "dark" ? theme.palette.primary.dark : "white"};
      font-weight: 300;
      font-size: 0.875rem;
      letter-spacing: 1px;
    }
  }

  @media (max-width: 700px) {
    height: 100vh;
    width: 100vw;

    flex-direction: column;

    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;

    background: #7643ff;
    justify-content: start;
    align-items: center;
    margin: 0 auto;

    li {
      margin-bottom: 40px;
      &:nth-child(1) {
        margin-top: 64px;
      }

      a {
        color: #fff;
        font-weight: 600;
        font-size: 16px;
      }
    }

    /* & li:nth-child(4) {
      margin-right: 0;
    } */
  }
`;

export const ActionsAreaDiv = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  @media (max-width: 500px) {
    width: 100%;
    justify-content: flex-start;
    margin-top: 16px;
    margin-bottom: 8px;
  }
`;

export const ActionsArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  & input {
    border: 1px solid ${theme.palette.secondary.light};
    border-radius: 4px;
    height: 35px;
    width: 35px;
    background: none;

    &.open {
      width: 265px;
      background: white;
      padding-left: 15px;
    }
    &:focus {
      outline: 0;
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
        0 1px 3px rgba(0, 0, 0, 0.08);
    }
    &:hover {
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
        0 1px 3px rgba(0, 0, 0, 0.08);
    }
  }

  & button {
    height: 36px;
    width: 36px;
    background: none;
    position: absolute;
    right: 0px;
    top: 0px;
    border-radius: 4px;
    margin-top: 2px;
    cursor: pointer;
  }
`;
