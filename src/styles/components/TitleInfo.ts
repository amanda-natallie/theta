import styled from "styled-components"

export const TitleInfo = styled.h1 `
align-items:center;
width:100%;
font-family: Nunito;
font-style: normal;
font-weight: bold;
line-height: 24px;
letter-spacing: 0.15px;
color: #7643FF;
margin: 0 5px 0 5px;

& h1{
font-family: Nunito;
font-style: normal;
font-weight: 300;
font-size: 1rem;
line-height: 25px;
color: #706880;
}
@media(max-width:360px){
width:100%;

display:flex;
overflow:hidden;

 h1{
font-size:1rem;
display:flex;
}
}
`
