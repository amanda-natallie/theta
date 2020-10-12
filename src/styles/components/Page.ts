import styled from "styled-components";
import interfaceConstant from "../../utils/constant/interfaceConstant";

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: ${(props: interfaceConstant.boxProps) => props.noPadding ? 0 : "72px"};
`