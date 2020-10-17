import styled from "styled-components";
import { colors } from "../colors";
import theme from "../theme";
import interfaceConstant from "../../utils/constant/interfaceConstant";

export const Box = styled.div`
  width: 100%;
  box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 15px;
  min-height: 270px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & .avatar {
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & h6 {
    text-align: center;
  }

  & p {
    display: inline;
    margin: 5px 0 0 10px;
    font-size: 0.875rem;
  }
`;

export const MidiaBox = styled(Box)`
  width: calc(100% - 40px);
  margin: 20px;
  padding: 0;
  overflow: hidden;

  & img {
    width: 100%;
    margin: 0;
  }

  & .content {
    padding: 10px 20px;
  }

  & .content > span {
    display: block;
    margin-bottom: 5px;
    color: ${theme.palette.primary.main};
    font-size: 0.7rem;
    text-transform: uppercase;
    font-weight: 600;
  }

  & .content > p {
    margin: 0;
    color: ${colors.gray35};
    font-size: 0.875rem;
    font-weight: 600;
    display: block;
  }

  footer {
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  footer span:nth-child(2) {
    display: inline-flex;
    align-items: center;
    color: ${theme.palette.primary.main};
    font-size: 0.75rem;

    & svg {
      margin-top: 7px;
    }
  }
`;

export const BigMediaBox = styled(Box)`
  background: ${(props: interfaceConstant.boxProps) => `url(${props.bg})`} top
    center no-repeat;
  background-size: cover;
  width: calc(100%-50px);
  margin: 0 25px;
  height: 290px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;

  & h3 {
    font-size: 1.125rem;
    color: white;
    font-weight: 900;
    margin-bottom: 12px;
  }
  footer {
    margin: 10px 0 0 0;
    display: flex;
    color: white;

    & span {
      margin: 0 20px 0 0;
      font-size: 12px;
    }
  }
`;

export const MidiaBox2 = styled(MidiaBox)`
  width: calc(100% - 40px);
  & .content > .darkDate {
    color: ${theme.palette.primary.dark};
  }
  & small {
    color: ${theme.palette.secondary.main};
  }
  & h5 {
    color: ${theme.palette.primary.main};
    font-size: 1.125rem;
    font-weight: 600;
    display: inline-block;
  }
  & .content > img {
    max-width: 50px;
    display: inline-block;
  }

  & footer img {
    width: 30px;
  }
`;

export const CardBox = styled(Box)`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.02),
    0px 8px 12px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
  padding: 20px;
  min-height: auto;

  & header {
    margin: 0 20px 0 0;
    .MuiAvatar-root {
      width: 90px;
      height: 90px;

      img {
        width: 100%;
        border-radius: 100%;
        border: 3px solid ${theme.palette.primary.main};
      }
    }
  }

  & .content {
    h5 {
      font-size: 1rem;
      color: ${theme.palette.primary.dark};
    }
    p {
      margin: 5px 0;
      display: block;
      color: ${colors.linkedinGray};

      &:first-of-type {
        font-size: 0.875rem;
      }
      &:last-of-type {
        font-size: 0.8125rem;
      }
    }
    ul {
      display: flex;
      margin: 10px 0 0 -5px;
      li {
        color: ${colors.gray50};
        border: 1px solid #e3e1e8; 
        border-radius: 100px;
        padding: 8px 25px;
        margin-right: 5px;
      }
    }
  }
  & .pricing {
    p{
      font-size: 1.9rem;
    }
    img {
      max-width: 130px
    }
  }
`;
