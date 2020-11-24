import styled from "styled-components";
import { colors } from "../colors";
import theme from "../theme";

export const DashboardPage = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  position: relative;

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 256px;
    height: 100vh;
    margin: 0;
    padding: 15px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.02),
      0px 8px 12px rgba(0, 0, 0, 0.14);

    .brand {
      width: 58px;
    }

    .topmenu {
      padding-bottom: 15px;
      margin-bottom: 15px;
      border-bottom: 1px solid ${colors.containerGray};

      h2 {
        font-size: 1.26rem
      }
    }
  }

  .main {
    width: calc(100% - 256px);
    margin-left: 256px;
    .topbar {
      position: fixed;
      width: calc(100% - 256px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 30px;
      height: 65px;
      border-bottom: 1px solid ${colors.containerGray};
      background-color: white;

      .actions {
        display: flex;
      }
    }
    .breadcrumbs {
      margin-top: 70px;
      width: 100%;
      padding: 30px;

      h1 {
        color: ${theme.palette.primary.main};
        margin-top: 10px
      }
      *:not(h1) {
        font-size: .960rem;
      }
    }
  }
`;
export const DashboardMenu = styled.ul`
  width: 100%;

  li {
    display: flex;
    margin: 5px 0;
    a {
      display: inherit;
      flex: 1;
      border-radius: 4px;
      background-color: white;
      transition: all .2s ease;
      padding: 10px ;
      img {
        display: inline-block;
        margin-right: 30px;
        max-width: 25px;
      }
      span {
        font-size: 1rem;
      }
      &:hover {
        background-color: ${theme.palette.primary.main};
        
        span {
          color: white;
        }
        img {
          fill: white 
        }
      }
      &.active {
        background-color: ${theme.palette.primary.main};
        span {
          color: white;
        }
        img {
          fill: white 
        }
      }
    }
  }
`;
