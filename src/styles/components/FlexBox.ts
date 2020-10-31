import styled from "styled-components";
import interfaceConstant from "../../utils/constant/interfaceConstant";

export const FlexBox = styled.div`
  display: flex;
  align-items: ${(props: interfaceConstant.boxProps) =>
    props.column ? "flex-start" : "center"};
  flex-direction: ${(props: interfaceConstant.boxProps) =>
    props.column ? "column" : "row"};
  justify-content: ${(props: interfaceConstant.boxProps) =>
    props.justify ? props.justify : "flex-start"};
  @media (max-width: 700px) {
    min-width: 100vw;
    justify-content: space-between;
  }
`;
