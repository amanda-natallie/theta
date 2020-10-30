import styled from "styled-components";
import { colors } from "../colors";
import theme from "../theme";

export const MiniChip = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0 0 -5px;
  li {
    color: ${colors.gray50};
    border: 1px solid #e3e1e8;
    border-radius: 100px;
    padding: 8px 25px;
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: pointer;
    transition: all .2s ease;
    box-sizing: border-box;

    &:hover {
      border: 2px solid ${theme.palette.primary.main};
    }
  }
`;
