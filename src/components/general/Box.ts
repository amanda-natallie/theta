import styled from "styled-components";
import { colors } from "../../styles/colors";
import theme from "../../styles/theme";
import interfaceConstant from "../../utils/constant/interfaceConstant";

export const Box = styled.div`
  width: calc(100%-40px);
  min-height: 250px;
  box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  padding: 15px;
  min-height: 270px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  

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
    display: inline;
    margin:5px 0 0 10px ;
    font-size: 0.875rem
  }
`;
