import styled from "styled-components";
import theme from "../../theme";

export const DashboardContent = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 60px;

  div[class^="Box"] {
    width: 100%;
    height: 270px;
    border-radius: 4px;
  }
  .profile {
    .profile-avatar {
      width: 80px;
      height: 80px;
      border: 2px solid ${theme.palette.primary.main};
    }

    h2 {
      color: ${theme.palette.primary.main};
      font-size: 1.1rem;
      margin-top: 10px;
    }
  }
`;

export const AppointmentList = styled.ul`
  width: 100%;
  max-height: 270px;
  overflow: auto;
  margin-top: 20px;

  li {
    width: 100%;
    height: 65px;
    display: flex;
    padding: 0 20px 0 75px;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;

    > div {
      width: 100%;
    }
    p {
      margin: 0;
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 10px;
      left: 10px;
      width: 50px;
      height: 50px;
      background: url("/media/icons/camera.svg") top center no-repeat;
      background-size: cover;
    }
  }
`;
