import styled from "styled-components"

export const Contact = styled.section`
width:100%;
margin: 0 auto;
display: flex;

@media (max-width:700px){
    display:flex;
    flex-direction:column;
.contactInfo{
    width:90vw;
}
display:flex;
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