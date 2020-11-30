import styled from "styled-components";
import theme from "../theme";

const ListStyle = styled.div`
font-family: "Nunito", sans-serif;
color: ${theme.palette.secondary.main};
margin-bottom: 50px;
 p{
     margin: 10px;
 }
  ul{
      list-style:inside;
      
  }
  li{
      margin: 10px;
      

  }
`
export default ListStyle