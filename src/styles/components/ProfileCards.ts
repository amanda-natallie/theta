import styled from "styled-components"
import theme from "../theme"

export const InfoCards = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:20px  10px;
    font-size: 0.975rem;
    
    span {
      display:block;
      font-size: 1.22rem;
    }
    p {
      font-weight: 800;
    }
    & * {
      color: ${theme.palette.primary.main};
    }
  }
`
