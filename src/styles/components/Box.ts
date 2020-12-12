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
  align-items: ${(props: interfaceConstant.boxProps) => props.align ? props.align : "center"} ;
  justify-content: ${(props: interfaceConstant.boxProps) => props.justify ? props.justify : "flex-start"};
  & * {
    color: ${colors.gray35};
  }

 
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
    display: inline-flex;
    margin: 5px 0 0 10px;
    font-size: 0.875rem;
  }

  &.profile-therapist {
    align-items: flex-start;
    padding-top: 30px;

    h2 {
      margin-left: 10px
    }
    p {
      line-height: 1.8;
    }
  }

  &.comingsoon {
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  &.box-link {
    transition: all .2s ease;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2);
      transform: scale(1.01)
    }
  }
`;
export const BoxForm = styled.div`
  width: 51vw;
  margin: 10px 0 10px 0;
  height:100px;
  box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 15px;
  background: #ffffff;
  display: flex;
  flex-direction: column;

 & h1{
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #7643FF;
 }
`
export const SmallBox = styled.div`
padding:10px;
margin: 10px 0 10px 0;

display:flex;
width:26vw;
align-items:center;
text-align:center;
height:5vh;
 box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.02),
    0px 8px 12px rgba(0, 0, 0, 0.14);
 border-radius: 4px;
flex-direction: ${(props: interfaceConstant.boxProps) => props.column ? "column" : "row"}; 
justify-content: space-between;

h1{
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
display: flex;
align-items: center;
color: #706880; 
}
`

 
  

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
  min-height: unset;
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

  &.box-link {
    transition: all .2s ease;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2);
      transform: scale(1.01)
    }
  }
`;

export const CardBox = styled(Box)`
width:100%;
justify-content:space-between;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.02),
    0px 8px 12px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
  flex-direction: ${(props: interfaceConstant.boxProps) => props.column ? "column" : "row"}; 
  margin: 20px 0 10px 0;
  padding: 20px;
  min-height: auto;
  @media(max-width:767px){
    display:flex;
    flex-direction:column-reverse;
    }
  .dateSchedule{
    @media(max-width:767px){
    display:flex;
    flex-direction:column;
    }
  }
 
  
  h2 {
    font-size: 1.625rem;
    margin:  0;
  }
  
  & * {
    color: ${colors.gray50};
  }

  & header {
    margin: 0 20px 0 0;
    .MuiAvatar-root {
      width: 90px;
      height: 90px;

      img {
        border-radius: 100%;
        border: 3px solid ${theme.palette.primary.main};
      }
    }
  }

  & h5 {
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
  
  & .pricing {
    p{
      font-size: 1.9rem;
    }
    img {
      max-width: 130px
    }
  }
  & .contacts {
    margin-top:20px;
    p {
      display: inline-flex;
      margin:0;
      color: ${colors.gray50};
    }
    a{
      font-size: 0.875rem;
      margin-top: 5px
    }

    a ~ ul {
      margin-top: 20px;
      display: flex;
      align-items: center;

      li {
        margin-right:10px;
        cursor: pointer;

        img {
          width: 25px
        }
      }
    }
  }
  & .right {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: column;

    h5 {
      font-size: 2.5rem;
      color: ${theme.palette.primary.main};
      text-align: right
    }
    p {
      margin:0;
      color: ${colors.gray50};
      font-size: 1rem;
      text-align: right;
    }
  }
  &.box-link {
    transition: all .2s ease;
    cursor: pointer;

    &:hover {
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    }
  }


`;
