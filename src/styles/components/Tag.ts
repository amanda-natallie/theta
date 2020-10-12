import styled from "styled-components";
import interfaceConstant from "../../utils/constant/interfaceConstant";

export const Tag = styled.span`
  border-radius: 4px;
  width: 70px;
  text-align: center;
  align-self: center;
  background: ${(props: interfaceConstant.boxProps) => props.bg} ;
  color: ${(props: interfaceConstant.boxProps) => props.color} ;
  font-size: 0.75rem;
  
`;
