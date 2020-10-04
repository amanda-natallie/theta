import styled from "styled-components";

export const Intro = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/media/home/bg-intro.jpg");
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  position: relative;

  &:before {
    content: "";
    width: inherit;
    height: inherit;
    display: block;
    position: absolute;
    top: 0px;
    left: 0;
    background: linear-gradient(
      360deg,
      #ffffff 2%,
      rgba(196, 196, 196, 0) 100%
    );
  }
`;
