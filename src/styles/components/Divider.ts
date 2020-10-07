import styled from "styled-components";
import interfaceConstant from "../../utils/constant/interfaceConstant";


export const Divider = styled.div`
  width: 100%;
  height: ${(props: interfaceConstant.DividerProps) => props.height};
  display: block;
  clear: both;
`