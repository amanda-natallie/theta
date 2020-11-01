import styled from "styled-components";
import theme from "../../../styles/theme";


export const Avatars = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  margin: 30px auto;
  width: 300px;
  .icon {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 30px;
      height: 30px;
      background-color: white;
      margin: 0;
      z-index: 13;
  }
  .img-rounded {
      border: 3px solid ${theme.palette.primary.main};
      border-radius: 100%;
      z-index: 13;
  }
  &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 1px;
      border-bottom: 5px dotted ${theme.palette.primary.main};
      top: 50%;
      z-index: 10;
  }
`
