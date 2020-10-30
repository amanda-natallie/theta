import styled from "styled-components";
import interfaceConstant from "../../utils/constant/interfaceConstant";
import { colors } from "../colors";


export const Divider = styled.div`
  width: ${(props: interfaceConstant.DividerProps) => props.bordered ? "calc(100% - 20px)" : "100%"};
  height: ${(props: interfaceConstant.DividerProps) => props.bordered ? "1px" : props.height};
  display: block;
  margin: 0 auto;
  clear: both;
  border-bottom: ${(props: interfaceConstant.DividerProps) => props.bordered ? `1px solid ${colors.containerGray}` : 0};
`