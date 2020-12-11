import styled from "styled-components"

export const Contact = styled.section`
justify-content:center;
width:100%;
margin: 50px 0 50px 0;
display: flex;

@media (max-width:1024px){
.contactInfo{
    width:90%;
}
display:flex;
flex-direction:column-reverse;
}
h1{
font-family: Nunito;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 50px;
display: flex;
align-items: center;
letter-spacing: 0.675px;
color: #7643FF;
}
h2{
font-family: Nunito;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 17px;
color: #7643FF;
}
img{
    margin:10px
}
form{
    width:90%
}
.contactInfo{
    display:flex;
    align-items:center;
}
.contentInfo{
    width:100%
}
`