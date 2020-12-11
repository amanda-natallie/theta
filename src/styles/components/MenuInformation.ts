import styled from 'styled-components'

export const MenuInformation = styled.div `
@media(max-width:900px){
    display:none;
}

ul {
    width:166px;
    height:245px;
    font-family:Nunito;
    font-style:normal;
    line-height:35px;
    letter-spacing:0.675px

}
li {
    font-size: 14px;
    color:#706880;
    cursor:pointer;
}
li:hover{
    color:#7643FF;
    
}
`