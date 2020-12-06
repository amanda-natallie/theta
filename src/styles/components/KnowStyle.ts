import styled from "styled-components"

const knowStyle = styled.section `
display:flex;
section{
    margin:40px;
}

h1{
color:#7643FF;
margin: 10px;
margin-top:10px;
font-family: Nunito;
font-style: normal;
font-weight: 800;
font-size: 36px;
line-height: 110%;
}

p{
margin:10px;
width:45vw;
font-family: Nunito;
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 30px;
color: #362A66;
}
button{
margin:10px;
width: 300px;
border-radius:5px;
height:50px;
color: #FFFFFF;
background-color: #7643FF;
}
button :hover{
    cursor:pointer;
}

@media(max-width: 1000px) {
    width:100%;
    justify-content:center;
    img{
        margin:0 auto;
        width:40vw;
    }
    .content{
        justify-content:center;
        align-items:center;
        flex-direction: column;
    }
  }
`

export default knowStyle