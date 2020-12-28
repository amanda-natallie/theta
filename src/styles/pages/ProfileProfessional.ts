import { url } from "inspector";
import styled from "styled-components";
import interfaceConstant from "../../utils/constant/interfaceConstant";
import { colors } from "../colors";
import theme from "../theme";
export const PublicProfilePageWrapper = styled.main``;

export const Header = styled.header`
  display:flex;
  align-items:flex-star;
  justify-content:center;
  max-width: 100%;
  height: 200px;
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
  width:60%;
  justify-content:space-between;
  .buttonRecommend{
    height:38px;
    margin:20px;
  }
 @media(max-width:500px){
   display:flex;
   width:50%;
   margin: 0 auto;
   flex-direction:column-reverse;
   .buttonRecommend{
    height:38px;
    margin:0;
    }
 }
  `
  export const Profile = styled.div`
    justify-self:center;
   .profile-avatar {
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
    font-size: 1rem;
  }

  p {
    color: ${colors.gray50};
    &:first-of-type {
      font-weight: 300;
      font-size: 1.125rem;
    }
    &:last-of-type {
      font-size: 1rem;
    }
    span {
      display: inline-block;
      margin: 0 10px;
    }
  }
`;

export const Content = styled.section`
display:flex;
@media(max-width:767px){
   display:flex;
   flex-direction:column;
}
.CardTerapeuta{
  @media(max-width:767px){
    display:flex;
    align-items:flex-start;
    flex-direction:column-reverse;
    }
}

`;

export const LanguageList = styled.ul`
  display: flex;
  margin-left: 10px;
  ul{
    display:flex
  }
  li {
    margin-right: 30px;

    img {
      margin-right: 5px;
    }
  }
`;

export const TabList = styled.ul`
  width: 100%;
  display: flex;
  margin: 30px 0 0 0px;
  padding: 0;
  border-top: 1px solid ${colors.containerGray};

  li {
    font-size: 1.225rem;
    width: 110px;
    margin-right:20px;
    text-align: left;
    font-weight: 600;
    padding: 10px 0;
    color: ${theme.palette.primary.main};
    cursor: pointer;

    &.active {
      border-top: 3px solid ${theme.palette.primary.main};
    }
  }
`;
