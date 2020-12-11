import styled from "styled-components";
import theme from "../theme";

export const SearchTherapists = styled.section`
  & .navigation-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    p {
      font-size: 0.875rem;
      margin-right: 10px;

      span {
        color: ${theme.palette.primary.main};
        font-weight: 600;
        margin-right: 5px;
      }
    }
  
  }
`;

export const TimeChips = styled.section`
  margin: 20px;
  @media(max-width:767px){
    width:80vw;
  }
`